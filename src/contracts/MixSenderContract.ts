import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import KlaytnWallet from "../klaytn/KlaytnWallet";
import MixSenderArtifact from "./abi/pmix/artifacts/contracts/MixSender.sol/MixSender.json";
import KlaytnContract from "./KlaytnContract";
import MixContract from "./MixContract";
import MixSenderInterface from "./MixSenderInterface";

class MixSenderContract extends KlaytnContract implements MixSenderInterface {

    constructor() {
        super("0x777b72f14c2227431BBAC0e795511B440CdA0e8A", MixSenderArtifact.abi);
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

    public async sendOverHorizon(toChain: BigNumberish, receiver: string, amount: BigNumberish) {
        const owner = await KlaytnWallet.loadAddress();
        if (owner !== undefined) {
            if ((await MixContract.allowance(owner, this.address)).lt(amount)) {
                await MixContract.approve(this.address, amount);
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

    public async receiveOverHorizon(fromChain: BigNumberish, sender: string, sendId: BigNumberish, amount: BigNumberish, signature: string) {
        await this.runWalletMethod("receiveOverHorizon", fromChain, sender, sendId, amount, signature);
    }

    public async received(receiver: string, fromChain: BigNumberish, sender: string, sendId: BigNumberish): Promise<boolean> {
        return await this.runMethod("received", receiver, fromChain, sender, sendId);
    }
}

export default new MixSenderContract();
