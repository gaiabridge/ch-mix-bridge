"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const Kaikas_1 = __importDefault(require("./Kaikas"));
class KlaytnWallet extends eventcontainer_1.default {
    constructor() {
        super();
        this.checkConnected();
        Kaikas_1.default.toss("connect", this);
    }
    async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }
    async loadAddress() {
        if (Kaikas_1.default.installed === true) {
            return await Kaikas_1.default.loadAddress();
        }
    }
    async connected() {
        return await this.loadAddress() !== undefined;
    }
    async connect() {
        if (Kaikas_1.default.installed === true) {
            return await Kaikas_1.default.connect();
        }
        else {
            alert("카이카스가 필요합니다. 카이카스를 설치해주시기 바랍니다.");
        }
    }
    async loadChainId() {
        if (Kaikas_1.default.installed === true) {
            return await Kaikas_1.default.loadChainId();
        }
    }
    async addToken(address, symbol, decimals, image) {
        if (await this.loadChainId() !== 8217) {
            this.fireEvent("wrongNetwork");
            console.error("Wrong Network");
        }
        else {
            Kaikas_1.default.addToken(address, symbol, decimals, image);
        }
    }
}
exports.default = new KlaytnWallet();
//# sourceMappingURL=KlaytnWallet.js.map