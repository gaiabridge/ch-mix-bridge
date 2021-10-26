"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const KlaytnWallet_1 = __importDefault(require("../klaytn/KlaytnWallet"));
const MixSender_json_1 = __importDefault(require("./abi/pmix/artifacts/contracts/MixSender.sol/MixSender.json"));
const KlaytnContract_1 = __importDefault(require("./KlaytnContract"));
const MixContract_1 = __importDefault(require("./MixContract"));
class MixSenderContract extends KlaytnContract_1.default {
    constructor() {
        super("0x777b72f14c2227431BBAC0e795511B440CdA0e8A", MixSender_json_1.default.abi);
        KlaytnWallet_1.default.toss("connect", this);
    }
    async loadAddress() {
        return await KlaytnWallet_1.default.loadAddress();
    }
    async connect() {
        await KlaytnWallet_1.default.connect();
    }
    async balanceOf(owner) {
        return await MixContract_1.default.balanceOf(owner);
    }
    async sendOverHorizon(toChain, receiver, amount) {
        const owner = await KlaytnWallet_1.default.loadAddress();
        if (owner !== undefined) {
            if ((await MixContract_1.default.allowance(owner, this.address)).lt(amount)) {
                await MixContract_1.default.approve(this.address, amount);
                await new Promise((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("sendOverHorizon", toChain, receiver, amount);
                        resolve();
                    }, 2000);
                });
            }
            else {
                await this.runWalletMethod("sendOverHorizon", toChain, receiver, amount);
            }
        }
    }
    async sended(sender, toChain, receiver, index) {
        return bignumber_1.BigNumber.from(await this.runMethod("sended", sender, toChain, receiver, index));
    }
    async sendCount(sender, toChain, receiver) {
        return bignumber_1.BigNumber.from(await this.runMethod("sendCount", sender, toChain, receiver));
    }
    async receiveOverHorizon(fromChain, sender, sendId, amount, signature) {
        await this.runWalletMethod("receiveOverHorizon", fromChain, sender, sendId, amount, signature);
    }
    async received(receiver, fromChain, sender, sendId) {
        return await this.runMethod("received", receiver, fromChain, sender, sendId);
    }
}
exports.default = new MixSenderContract();
//# sourceMappingURL=MixSenderContract.js.map