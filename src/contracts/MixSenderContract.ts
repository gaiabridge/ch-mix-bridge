import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import MixSenderArtifact from "./abi/pmix/artifacts/contracts/MixSender.sol/MixSender.json";
import KlaytnContract from "./KlaytnContract";

class MixSenderContract extends KlaytnContract {

    constructor() {
        super("0x89D25929fD45e0B29Aa01B1AD9355312b9c4EFC2", MixSenderArtifact.abi);
    }

    public async sendOverHorizon(toChain: BigNumberish, amount: BigNumberish) {
        await this.runWalletMethod("sendOverHorizon", toChain, amount);
    }

    public async sended(sender: string, amount: BigNumberish, index: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("sended", sender, amount, index));
    }

    public async sendCount(sender: string, amount: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("sendCount", sender, amount));
    }

    public async receiveOverHorizon(fromChain: BigNumberish, sendId: BigNumberish, amount: BigNumberish, signature: string) {
        await this.runWalletMethod("receiveOverHorizon", fromChain, sendId, amount, signature);
    }

    public async received(receiver: string, amount: BigNumberish, sendId: BigNumberish): Promise<boolean> {
        return await this.runMethod("received", receiver, amount, sendId);
    }
}

export default new MixSenderContract();
