"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const superagent_1 = __importDefault(require("superagent"));
const Form_1 = __importDefault(require("./Form"));
class FormContainer extends skynode_1.DomNode {
    constructor() {
        super(".form-container");
        this.loadHistoryNonce = 0;
        this.append(this.fromForm = new Form_1.default(this, 8217, true), (0, skynode_1.el)("img.arrow", { src: "/images/arrow.png", height: "50" }), (0, skynode_1.el)("img.mobile-arrow", { src: "/images/arrow.png", height: "50" }), this.toForm = new Form_1.default(this, 137));
        this.fromForm.on("changeChain", (chainId, originChainId) => {
            if (this.toForm.chainId === chainId) {
                this.toForm.changeChain(originChainId);
            }
            this.loadHistory();
        });
        this.toForm.on("changeChain", (chainId, originChainId) => {
            if (this.fromForm.chainId === chainId) {
                this.fromForm.changeChain(originChainId);
            }
            this.loadHistory();
        });
        this.loadHistory();
        this.fromForm.on("connect", () => this.loadHistory());
        this.toForm.on("connect", () => this.loadHistory());
    }
    async loadHistory() {
        if (this.fromForm.sender !== undefined && this.toForm.sender !== undefined) {
            const sender = await this.fromForm.sender.loadAddress();
            const receiver = await this.toForm.sender.loadAddress();
            if (sender !== undefined && receiver !== undefined) {
                const count = await this.fromForm.sender.sendCount(sender, this.toForm.chainId, receiver);
                this.loadHistoryNonce += 1;
                const nonce = this.loadHistoryNonce;
                skyutil_1.default.repeatResultAsync(count.toNumber(), async (sendId) => {
                    if (this.loadHistoryNonce === nonce) {
                    }
                });
            }
        }
    }
    async sendOverHorizon(amount) {
        if (this.fromForm.sender !== undefined && this.toForm.sender !== undefined) {
            const receiver = await this.toForm.sender.loadAddress();
            if (receiver !== undefined) {
                await this.fromForm.sender.sendOverHorizon(this.toForm.chainId, receiver, amount);
            }
        }
    }
    async receiveOverHorizon(sender, sendId, amount) {
        if (this.fromForm.sender !== undefined && this.toForm.sender !== undefined) {
            const receiver = await this.toForm.sender.loadAddress();
            if (receiver !== undefined) {
                const result = await superagent_1.default.get(`https://api.chainhorizon.org/mix/signsend?receiver=${receiver}&fromChain=${this.fromForm.chainId}&toChain=${this.toForm.chainId}&sender=${sender}&sendId=${sendId}&amount=${amount.toString()}`).send();
                await this.toForm.sender.receiveOverHorizon(this.fromForm.chainId, this.toForm.chainId, sender, sendId, amount, result.text);
            }
        }
    }
}
exports.default = FormContainer;
//# sourceMappingURL=FormContainer.js.map