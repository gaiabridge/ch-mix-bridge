"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const MixSenderContract_1 = __importDefault(require("../contracts/MixSenderContract"));
const PolygonMixContract_1 = __importDefault(require("../contracts/PolygonMixContract"));
class Form extends skynode_1.DomNode {
    constructor(formContainer, chainId, isFrom = false) {
        super(".form");
        this.formContainer = formContainer;
        this.chainId = chainId;
        this.isFrom = isFrom;
        this.loadBalance = async () => {
            this.inputContainer.empty();
            this.buttonContainer.empty();
            if (this.sender !== undefined) {
                const owner = await this.sender.loadAddress();
                if (owner !== undefined) {
                    const balance = await this.sender.balanceOf(owner);
                    this.balanceDisplay.empty().appendText(`${ethers_1.utils.formatUnits(balance)} MIX`);
                    if (this.isFrom === true) {
                        const input = (0, skynode_1.el)("input", { placeholder: "보낼 수량" });
                        input.appendTo(this.inputContainer);
                        this.buttonContainer.append((0, skynode_1.el)("a.send-button", "보내기", {
                            click: () => this.formContainer.sendOverHorizon(ethers_1.utils.parseEther(input.domElement.value)),
                        }));
                    }
                }
                else {
                    this.balanceDisplay.empty().appendText("잔액 불러오기 실패");
                    this.buttonContainer.append((0, skynode_1.el)("a.connect-button", "지갑 연결", {
                        click: () => this.sender?.connect(),
                    }));
                }
                this.sender.on("connect", this.loadBalance);
            }
        };
        this.append(this.chainSelect = (0, skynode_1.el)("select", (0, skynode_1.el)("option", "Klaytn", { value: "8217" }), (0, skynode_1.el)("option", "Polygon", { value: "137" }), {
            change: () => {
                const originChainId = this.chainId;
                this.changeChain(parseInt(this.chainSelect.domElement.value, 10));
                this.fireEvent("changeChain", this.chainId, originChainId);
            },
        }), this.balanceDisplay = (0, skynode_1.el)(".balance"), this.inputContainer = (0, skynode_1.el)(".input-container"), this.buttonContainer = (0, skynode_1.el)(".button-container"));
        this.changeChain(chainId);
    }
    async changeChain(chainId) {
        this.chainId = chainId;
        this.chainSelect.domElement.value = String(chainId);
        this.sender?.off("connect", this.loadBalance);
        if (chainId === 8217) {
            this.sender = MixSenderContract_1.default;
        }
        else if (chainId === 137) {
            this.sender = PolygonMixContract_1.default;
        }
        this.loadBalance();
    }
}
exports.default = Form;
//# sourceMappingURL=Form.js.map