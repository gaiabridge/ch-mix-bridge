"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PolygonWallet_1 = __importDefault(require("../polygon/PolygonWallet"));
const PolygonMix_json_1 = __importDefault(require("./abi/pmix/artifacts/contracts/PolygonMix.sol/PolygonMix.json"));
const ERC20Contract_1 = __importDefault(require("./polygon-standard/ERC20Contract"));
class PolygonMixContract extends ERC20Contract_1.default {
    constructor() {
        super("0x5085a6879Af6767732c51CA0fc7422d41d9aAEf6", PolygonMix_json_1.default.abi, [
            "SetSigner",
            "SendOverHorizon",
            "ReceiveOverHorizon",
        ]);
        PolygonWallet_1.default.toss("connect", this);
    }
    async loadAddress() {
        return await PolygonWallet_1.default.loadAddress();
    }
    async connect() {
        await PolygonWallet_1.default.connect();
    }
    addTokenToWallet() {
        PolygonWallet_1.default.addToken(this.address, "PMIX", 18, "https://raw.githubusercontent.com/dogesoundclub/pmix/main/docs/pmix_logo.png");
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
exports.default = new PolygonMixContract();
//# sourceMappingURL=PolygonMixContract.js.map