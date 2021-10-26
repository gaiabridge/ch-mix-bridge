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
        super("0x1F90b5665F1EA436280eB82eF2024146219A82de", PolygonMix_json_1.default.abi, []);
        PolygonWallet_1.default.toss("connect", this);
    }
    async loadAddress() {
        return await PolygonWallet_1.default.loadAddress();
    }
    async connect() {
        await PolygonWallet_1.default.connect();
    }
    async sendOverHorizon(toChain, amount) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.sendOverHorizon(toChain, amount);
    }
    async sended(sender, amount, index) {
        return await this.contract.sended(sender, amount, index);
    }
    async sendCount(sender, toChain) {
        return await this.contract.sendCount(sender, toChain);
    }
    async receiveOverHorizon(fromChain, sendId, amount, signature) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.receiveOverHorizon(fromChain, sendId, amount, signature);
    }
    async received(receiver, amount, sendId) {
        return await this.contract.received(receiver, amount, sendId);
    }
    async getTransferEvents(to, startBlock, endBlock) {
        const filter = this.contract.filters.Transfer(null, to, null);
        return await this.contract.queryFilter(filter, startBlock, endBlock);
    }
}
exports.default = new PolygonMixContract();
//# sourceMappingURL=PolygonMixContract.js.map