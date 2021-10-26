"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const MixSender_json_1 = __importDefault(require("./abi/pmix/artifacts/contracts/MixSender.sol/MixSender.json"));
const KlaytnContract_1 = __importDefault(require("./KlaytnContract"));
class MixSenderContract extends KlaytnContract_1.default {
    constructor() {
        super("0x89D25929fD45e0B29Aa01B1AD9355312b9c4EFC2", MixSender_json_1.default.abi);
    }
    async sendOverHorizon(toChain, amount) {
        await this.runWalletMethod("sendOverHorizon", toChain, amount);
    }
    async sended(sender, amount, index) {
        return bignumber_1.BigNumber.from(await this.runMethod("sended", sender, amount, index));
    }
    async sendCount(sender, amount) {
        return bignumber_1.BigNumber.from(await this.runMethod("sendCount", sender, amount));
    }
    async receiveOverHorizon(fromChain, sendId, amount, signature) {
        await this.runWalletMethod("receiveOverHorizon", fromChain, sendId, amount, signature);
    }
    async received(receiver, amount, sendId) {
        return await this.runMethod("received", receiver, amount, sendId);
    }
}
exports.default = new MixSenderContract();
//# sourceMappingURL=MixSenderContract.js.map