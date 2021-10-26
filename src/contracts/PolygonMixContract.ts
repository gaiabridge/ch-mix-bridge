import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import PolygonWallet from "../polygon/PolygonWallet";
import PolygonMixArtifact from "./abi/pmix/artifacts/contracts/PolygonMix.sol/PolygonMix.json";
import { PolygonMix } from "./abi/pmix/typechain";
import MixSenderInterface from "./MixSenderInterface";
import ERC20Contract from "./polygon-standard/ERC20Contract";

class PolygonMixContract extends ERC20Contract<PolygonMix> implements MixSenderInterface {

    constructor() {
        super("0x1F90b5665F1EA436280eB82eF2024146219A82de", PolygonMixArtifact.abi, []);
        PolygonWallet.toss("connect", this);
    }

    public async loadAddress(): Promise<string | undefined> {
        return await PolygonWallet.loadAddress();
    }

    public async connect() {
        await PolygonWallet.connect();
    }

    public async sendOverHorizon(toChain: BigNumberish, amount: BigNumberish) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.sendOverHorizon(toChain, amount);
    }

    public async sended(sender: string, amount: BigNumberish, index: BigNumberish): Promise<BigNumber> {
        return await this.contract.sended(sender, amount, index);
    }

    public async sendCount(sender: string, toChain: BigNumberish): Promise<BigNumber> {
        return await this.contract.sendCount(sender, toChain);
    }

    public async receiveOverHorizon(fromChain: BigNumberish, sendId: BigNumberish, amount: BigNumberish, signature: string) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.receiveOverHorizon(fromChain, sendId, amount, signature);
    }

    public async received(receiver: string, amount: BigNumberish, sendId: BigNumberish): Promise<boolean> {
        return await this.contract.received(receiver, amount, sendId);
    }

    public async getTransferEvents(to: string, startBlock: number, endBlock: number) {
        const filter = this.contract.filters.Transfer(null, to, null);
        return await this.contract.queryFilter(filter, startBlock, endBlock);
    }
}

export default new PolygonMixContract();
