"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const superagent_1 = __importDefault(require("superagent"));
const Form_1 = __importDefault(require("./Form"));
class FormContainer extends skynode_1.DomNode {
    constructor() {
        super(".form-container");
        this.append(this.fromForm = new Form_1.default(this, 8217, true), (0, skynode_1.el)("img.arrow", { src: "/images/arrow.png", height: "50" }), (0, skynode_1.el)("img.mobile-arrow", { src: "/images/arrow.png", height: "50" }), this.toForm = new Form_1.default(this, 137));
        this.fromForm.on("changeChain", (chainId, originChainId) => {
            if (this.toForm.chainId === chainId) {
                this.toForm.changeChain(originChainId);
            }
        });
        this.toForm.on("changeChain", (chainId, originChainId) => {
            if (this.fromForm.chainId === chainId) {
                this.fromForm.changeChain(originChainId);
            }
        });
    }
    async sendOverHorizon(amount) {
        if (this.fromForm.sender !== undefined) {
            const owner = await this.fromForm.sender.loadAddress();
            if (owner !== undefined) {
                await this.fromForm.sender.sendOverHorizon(this.toForm.chainId, amount);
                const count = await this.fromForm.sender.sendCount(owner, this.toForm.chainId);
                console.log({
                    address: owner,
                    fromChain: this.fromForm.chainId,
                    sendId: count.toNumber() - 1,
                    amount: amount.toString(),
                });
                const signed = await superagent_1.default.post("https://localhost:1023/signsend").send({
                    address: owner,
                    fromChain: this.fromForm.chainId,
                    sendId: count.toNumber() - 1,
                    amount: amount.toString(),
                });
                console.log(signed);
            }
        }
    }
}
exports.default = FormContainer;
//# sourceMappingURL=FormContainer.js.map