import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import PolygonWallet from "../polygon/PolygonWallet";
import PolygonMixArtifact from "./abi/pmix/artifacts/contracts/PolygonMix.sol/PolygonMix.json";
import { PolygonMix } from "./abi/pmix/typechain";
import MixSenderInterface from "./MixSenderInterface";
import ERC20Contract from "./polygon-standard/ERC20Contract";

class PolygonMixContract extends ERC20Contract<PolygonMix> implements MixSenderInterface {

    constructor() {
        super("0x5085a6879Af6767732c51CA0fc7422d41d9aAEf6", PolygonMixArtifact.abi, [
            "SetSigner",
            "SendOverHorizon",
            "ReceiveOverHorizon",
        ]);
        PolygonWallet.toss("connect", this);
    }

    public async loadAddress(): Promise<string | undefined> {
        return await PolygonWallet.loadAddress();
    }

    public async connect() {
        await PolygonWallet.connect();
    }

    public addTokenToWallet() {
        PolygonWallet.addToken(this.address, "PMIX", 18, "https://raw.githubusercontent.com/dogesoundclub/pmix/main/docs/pmix_logo.png");
    }

    public async sendOverHorizon(toChain: BigNumberish, receiver: string, amount: BigNumberish) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.sendOverHorizon(toChain, receiver, amount);
    }

    public async sended(sender: string, toChain: BigNumberish, receiver: string, index: BigNumberish): Promise<BigNumber> {
        return await this.contract.sended(sender, toChain, receiver, index);
    }

    public async sendCount(sender: string, toChain: BigNumberish, receiver: string): Promise<BigNumber> {
        return await this.contract.sendCount(sender, toChain, receiver);
    }

    public async receiveOverHorizon(fromChain: BigNumberish, toChain: BigNumberish, sender: string, sendId: BigNumberish, amount: BigNumberish, signature: string) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.receiveOverHorizon(fromChain, toChain, sender, sendId, amount, signature);
    }

    public async received(receiver: string, fromChain: BigNumberish, sender: string, sendId: BigNumberish): Promise<boolean> {
        return await this.contract.received(receiver, fromChain, sender, sendId);
    }

    public async getTransferEvents(to: string, startBlock: number, endBlock: number) {
        const filter = this.contract.filters.Transfer(null, to, null);
        return await this.contract.queryFilter(filter, startBlock, endBlock);
    }
}

export default new PolygonMixContract();
