import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import EthereumWallet from "../ethereum/EthereumWallet";
import EthereumMixArtifact from "./abi/emix/artifacts/contracts/EthereumMix.sol/EthereumMix.json";
import { EthereumMix } from "./abi/emix/typechain";
import ERC20Contract from "./ethereum-standard/ERC20Contract";
import MixSenderInterface from "./MixSenderInterface";

class EthereumMixContract extends ERC20Contract<EthereumMix> implements MixSenderInterface {

    constructor() {
        super("0x5DB69B9f173f9D9FA91b7cDCc4Dc9939C0499CFe", EthereumMixArtifact.abi, [
            "SetSigner",
            "SendOverHorizon",
            "ReceiveOverHorizon",
        ]);
        EthereumWallet.toss("connect", this);
    }

    public async loadAddress(): Promise<string | undefined> {
        return await EthereumWallet.loadAddress();
    }

    public async connect() {
        await EthereumWallet.connect();
    }

    public addTokenToWallet() {
        EthereumWallet.addToken(this.address, "EMIX", 18, "https://raw.githubusercontent.com/dogesoundclub/emix/main/docs/emix_logo.png");
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

export default new EthereumMixContract();
