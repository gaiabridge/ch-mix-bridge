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
        if (this.fromForm.sender !== undefined && this.toForm.sender !== undefined) {
            const sender = await this.fromForm.sender.loadAddress();
            const receiver = await this.toForm.sender.loadAddress();
            if (sender !== undefined && receiver !== undefined) {
                await this.fromForm.sender.sendOverHorizon(this.toForm.chainId, receiver, amount);
                const count = await this.fromForm.sender.sendCount(sender, this.toForm.chainId, receiver);
                const sendId = count.toNumber() - 1;
                const result = await superagent_1.default.get(`https://api.chainhorizon.org/signsend?receiver=${receiver}&fromChain=${this.fromForm.chainId}&sender=${sender}&sendId=${sendId}&amount=${amount.toString()}`).send();
                await this.toForm.sender.receiveOverHorizon(this.fromForm.chainId, sender, sendId, amount, result.text);
            }
        }
    }
}
exports.default = FormContainer;
//# sourceMappingURL=FormContainer.js.map