"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const PolygonNetworkProvider_1 = __importDefault(require("../polygon/PolygonNetworkProvider"));
const PolygonWallet_1 = __importDefault(require("../polygon/PolygonWallet"));
class PolygonContract extends eventcontainer_1.default {
    constructor(address, abi, eventNames) {
        super();
        this.address = address;
        this.abi = abi;
        this.contract = new ethers_1.ethers.Contract(address, abi, PolygonNetworkProvider_1.default.provider).connect(PolygonNetworkProvider_1.default.signer);
        for (const eventName of eventNames) {
            this.contract.on(eventName, (...args) => {
                this.fireEvent(eventName, ...args);
            });
        }
        PolygonWallet_1.default.on("chainChanged", () => this.walletContract = undefined);
    }
    get interface() {
        return this.contract.interface;
    }
    async getWalletContract() {
        if (await PolygonWallet_1.default.connected() === true) {
            if (this.walletContract === undefined && PolygonWallet_1.default.signer !== undefined) {
                this.walletContract = new ethers_1.ethers.Contract(this.address, this.abi, PolygonWallet_1.default.provider).connect(PolygonWallet_1.default.signer);
            }
            return this.walletContract;
        }
    }
    async connectAndGetWalletContract() {
        if (await PolygonWallet_1.default.loadChainId() !== 137) {
            alert("Wrong Network. Please change to Polygon.");
            PolygonWallet_1.default.disconnectFromWalletConnect();
        }
        else {
            if (await PolygonWallet_1.default.connected() !== true) {
                await PolygonWallet_1.default.connect();
            }
            if (this.walletContract === undefined && PolygonWallet_1.default.signer !== undefined) {
                this.walletContract = new ethers_1.ethers.Contract(this.address, this.abi, PolygonWallet_1.default.provider).connect(PolygonWallet_1.default.signer);
            }
            return this.walletContract;
        }
    }
}
exports.default = PolygonContract;
//# sourceMappingURL=PolygonContract.js.map