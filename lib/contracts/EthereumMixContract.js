"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EthereumWallet_1 = __importDefault(require("../ethereum/EthereumWallet"));
const EthereumMix_json_1 = __importDefault(require("./abi/emix/artifacts/contracts/EthereumMix.sol/EthereumMix.json"));
const ERC20Contract_1 = __importDefault(require("./ethereum-standard/ERC20Contract"));
class EthereumMixContract extends ERC20Contract_1.default {
    constructor() {
        super("0x5DB69B9f173f9D9FA91b7cDCc4Dc9939C0499CFe", EthereumMix_json_1.default.abi, [
            "SetSigner",
            "SendOverHorizon",
            "ReceiveOverHorizon",
        ]);
        EthereumWallet_1.default.toss("connect", this);
    }
    async loadAddress() {
        return await EthereumWallet_1.default.loadAddress();
    }
    async connect() {
        await EthereumWallet_1.default.connect();
    }
    addTokenToWallet() {
        EthereumWallet_1.default.addToken(this.address, "EMIX", 18, "https://raw.githubusercontent.com/dogesoundclub/emix/main/docs/emix_logo.png");
    }
    async sendOverHorizon(toChain, receiver, amount) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.sendOverHorizon(toChain, receiver, amount);
    }
    async sended(sender, toChain, receiver, index) {
        return await this.contract.sended(sender, toChain, receiver, index);
    }
    async sendCount(sender, toChain, receiver) {
        return await this.contract.sendCount(sender, toChain, receiver);
    }
    async receiveOverHorizon(fromChain, toChain, sender, sendId, amount, signature) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.receiveOverHorizon(fromChain, toChain, sender, sendId, amount, signature);
    }
    async received(receiver, fromChain, sender, sendId) {
        return await this.contract.received(receiver, fromChain, sender, sendId);
    }
    async getTransferEvents(to, startBlock, endBlock) {
        const filter = this.contract.filters.Transfer(null, to, null);
        return await this.contract.queryFilter(filter, startBlock, endBlock);
    }
}
exports.default = new EthereumMixContract();
//# sourceMappingURL=EthereumMixContract.js.map