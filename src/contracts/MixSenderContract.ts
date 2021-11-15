import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { constants } from "ethers";
import Klaytn from "../klaytn/Klaytn";
import KlaytnWallet from "../klaytn/KlaytnWallet";
import MixSenderArtifact from "./abi/pmix/artifacts/contracts/MixSender.sol/MixSender.json";
import KlaytnContract from "./KlaytnContract";
import MixContract from "./MixContract";
import MixSenderInterface from "./MixSenderInterface";

class MixSenderContract extends KlaytnContract implements MixSenderInterface {

    constructor() {
        super("0xDeE2b8539c2321450a99f6728633DEf8d069262F", MixSenderArtifact.abi);
        KlaytnWallet.toss("connect", this);
        this.watch();
    }

    private async watch() {
        let prevBlock = await Klaytn.loadBlockNumber();
        setInterval(async () => {
            const currentBlock = await Klaytn.loadBlockNumber();
            const transferEvents = await MixContract.getTransferEvents(prevBlock, currentBlock);
            for (const event of transferEvents) {
                this.fireEvent("Transfer", event.returnValues[0], event.returnValues[1], BigNumber.from(event.returnValues[2]));
            }
            const sendOverHorizonEvents = await this.getSendOverHorizonEvents(prevBlock, currentBlock);
            for (const event of sendOverHorizonEvents) {
                this.fireEvent("SendOverHorizon", event.returnValues[0], BigNumber.from(event.returnValues[1]), event.returnValues[2], BigNumber.from(event.returnValues[3]), BigNumber.from(event.returnValues[4]));
            }
            const receiveOverHorizonEvents = await this.getReceiveOverHorizonEvents(prevBlock, currentBlock);
            for (const event of receiveOverHorizonEvents) {
                this.fireEvent("ReceiveOverHorizon", event.returnValues[0], BigNumber.from(event.returnValues[1]), event.returnValues[2], BigNumber.from(event.returnValues[3]), BigNumber.from(event.returnValues[4]));
            }
            prevBlock = currentBlock + 1;
        }, 2000);
    }

    private async getSendOverHorizonEvents(startBlock: number, endBlock: number) {
        const events = await this.contract.getPastEvents("SendOverHorizon", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }

    private async getReceiveOverHorizonEvents(startBlock: number, endBlock: number) {
        const events = await this.contract.getPastEvents("ReceiveOverHorizon", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }

    public async loadAddress(): Promise<string | undefined> {
        return await KlaytnWallet.loadAddress();
    }

    public async connect() {
        await KlaytnWallet.connect();
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return await MixContract.balanceOf(owner);
    }

    public addTokenToWallet() {
        KlaytnWallet.addToken(MixContract.address, "MIX", 18, "https://s.klayswap.com/img/token/ic-mix.png");
    }

    public async sendOverHorizon(toChain: BigNumberish, receiver: string, amount: BigNumberish) {
        const owner = await KlaytnWallet.loadAddress();
        if (owner !== undefined) {
            if ((await MixContract.allowance(owner, this.address)).lt(amount)) {
                await MixContract.approve(this.address, constants.MaxUint256);
                await new Promise<void>((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("sendOverHorizon", toChain, receiver, amount);
                        resolve();
                    }, 2000);
                });
            } else {
                await this.runWalletMethod("sendOverHorizon", toChain, receiver, amount);
            }
        }
    }

    public async sended(sender: string, toChain: BigNumberish, receiver: string, index: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("sended", sender, toChain, receiver, index));
    }

    public async sendCount(sender: string, toChain: BigNumberish, receiver: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("sendCount", sender, toChain, receiver));
    }

    public async receiveOverHorizon(fromChain: BigNumberish, toChain: BigNumberish, sender: string, sendId: BigNumberish, amount: BigNumberish, signature: string) {
        await this.runWalletMethod("receiveOverHorizon", fromChain, toChain, sender, sendId, amount, signature);
    }

    public async received(receiver: string, fromChain: BigNumberish, sender: string, sendId: BigNumberish): Promise<boolean> {
        return await this.runMethod("received", receiver, fromChain, sender, sendId);
    }
}

export default new MixSenderContract();
