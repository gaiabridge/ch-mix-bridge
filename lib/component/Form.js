"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const EthereumMixContract_1 = __importDefault(require("../contracts/EthereumMixContract"));
const MixSenderContract_1 = __importDefault(require("../contracts/MixSenderContract"));
const PolygonMixContract_1 = __importDefault(require("../contracts/PolygonMixContract"));
class Form extends skynode_1.DomNode {
    constructor(swaper, chainId, isFrom = false) {
        super(".form");
        this.swaper = swaper;
        this.chainId = chainId;
        this.isFrom = isFrom;
        this.connectHandler = async () => {
            this.fireEvent("connect");
            this.loadBalance();
        };
        this.transferHandler = async (from, to) => {
            const owner = await this.sender?.loadAddress();
            if (from === owner || to === owner) {
                this.loadBalance();
            }
        };
        this.sendOverHorizonHandler = async (sender, toChain, receiver, sendId, amount) => {
            this.swaper.receiveOverHorizon(receiver, toChain, sender, sendId, amount);
            const owner = await this.sender?.loadAddress();
            if (sender === owner) {
                this.swaper.addSended(sender, receiver, sendId);
            }
        };
        this.append((0, skynode_1.el)(".chain", (0, skynode_1.el)(".icon", this.chainIcon = (0, skynode_1.el)("img", { height: "24" })), this.chainSelect = (0, skynode_1.el)("select", (0, skynode_1.el)("option", "Klaytn", {
            value: "8217",
        }), (0, skynode_1.el)("option", "Ethereum", {
            value: "1",
        }), (0, skynode_1.el)("option", "Polygon", {
            value: "137",
        }), {
            change: () => {
                const originChainId = this.chainId;
                this.changeChain(parseInt(this.chainSelect.domElement.value, 10));
                this.fireEvent("changeChain", this.chainId, originChainId);
            },
        }), isFrom ? (0, skynode_1.el)("span.help-text", "??????") : (0, skynode_1.el)("span.help-text", "??????")), (this.balanceDisplay = (0, skynode_1.el)(".balance")), (this.inputContainer = (0, skynode_1.el)(".input-container")), (this.buttonContainer = (0, skynode_1.el)(".button-container")));
        this.changeChain(chainId);
    }
    async changeChain(chainId) {
        this.chainId = chainId;
        this.chainSelect.domElement.value = String(chainId);
        this.sender?.off("connect", this.connectHandler);
        this.sender?.off("Transfer", this.transferHandler);
        this.sender?.off("SendOverHorizon", this.sendOverHorizonHandler);
        if (chainId === 8217) {
            this.sender = MixSenderContract_1.default;
            this.chainIcon.domElement.src = "/images/klaytn-logo.png";
        }
        else if (chainId === 1) {
            this.sender = EthereumMixContract_1.default;
            this.chainIcon.domElement.src = "/images/ethereum-logo.png";
        }
        else if (chainId === 137) {
            this.sender = PolygonMixContract_1.default;
            this.chainIcon.domElement.src = "/images/polygon-logo.png";
        }
        await this.loadBalance();
        this.sender?.on("connect", this.connectHandler);
        this.sender?.on("Transfer", this.transferHandler);
        this.sender?.on("SendOverHorizon", this.sendOverHorizonHandler);
    }
    async loadBalance() {
        this.inputContainer.empty();
        this.buttonContainer.empty();
        if (this.sender !== undefined) {
            const owner = await this.sender.loadAddress();
            if (owner !== undefined) {
                const balance = await this.sender.balanceOf(owner);
                this.balanceDisplay
                    .empty()
                    .appendText(`${ethers_1.utils.formatUnits(balance)} MIX`);
                this.buttonContainer.append((0, skynode_1.el)("a.add-token-to-wallet-button", "????????? ?????? ????????????", {
                    click: () => {
                        this.sender?.addTokenToWallet();
                    },
                }));
                if (this.isFrom === true) {
                    const input = (0, skynode_1.el)("input", {
                        placeholder: "?????? ??????",
                    });
                    input.appendTo(this.inputContainer);
                    this.buttonContainer.append((0, skynode_1.el)("a.send-button", "?????????", {
                        click: () => this.swaper.sendOverHorizon(ethers_1.utils.parseEther(input.domElement.value)),
                    }));
                }
            }
            else {
                this.balanceDisplay.empty().appendText("?????? ???????????? ??????");
                this.buttonContainer.append((0, skynode_1.el)("a.connect-button", "?????? ??????", {
                    click: () => this.sender?.connect(),
                }));
            }
        }
    }
    delete() {
        this.sender?.off("connect", this.connectHandler);
        this.sender?.off("Transfer", this.transferHandler);
        this.sender?.off("SendOverHorizon", this.sendOverHorizonHandler);
        super.delete();
    }
}
exports.default = Form;
//# sourceMappingURL=Form.js.map