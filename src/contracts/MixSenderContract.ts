import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import KlaytnWallet from "../klaytn/KlaytnWallet";
import MixSenderArtifact from "./abi/pmix/artifacts/contracts/MixSender.sol/MixSender.json";
import KlaytnContract from "./KlaytnContract";
import MixContract from "./MixContract";
import MixSenderInterface from "./MixSenderInterface";

class MixSenderContract extends KlaytnContract implements MixSenderInterface {

    constructor() {
        super("0x89D25929fD45e0B29Aa01B1AD9355312b9c4EFC2", MixSenderArtifact.abi);
        KlaytnWallet.toss("connect", this);
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

    public async sendOverHorizon(toChain: BigNumberish, amount: BigNumberish) {
        const owner = await KlaytnWallet.loadAddress();
        if (owner !== undefined) {
            if ((await MixContract.allowance(owner, this.address)).lt(amount)) {
                await MixContract.approve(this.address, amount);
                await new Promise<void>((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("sendOverHorizon", toChain, amount);
                        resolve();
                    }, 2000);
                });
            } else {
                await this.runWalletMethod("sendOverHorizon", toChain, amount);
            }
        }
    }

    public async sended(sender: string, amount: BigNumberish, index: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("sended", sender, amount, index));
    }

    public async sendCount(sender: string, toChain: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("sendCount", sender, toChain));
    }

    public async receiveOverHorizon(fromChain: BigNumberish, sendId: BigNumberish, amount: BigNumberish, signature: string) {
        await this.runWalletMethod("receiveOverHorizon", fromChain, sendId, amount, signature);
    }

    public async received(receiver: string, amount: BigNumberish, sendId: BigNumberish): Promise<boolean> {
        return await this.runMethod("received", receiver, amount, sendId);
    }
}

export default new MixSenderContract();
