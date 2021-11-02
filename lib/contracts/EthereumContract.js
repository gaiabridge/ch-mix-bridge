"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const EthereumNetworkProvider_1 = __importDefault(require("../ethereum/EthereumNetworkProvider"));
const EthereumWallet_1 = __importDefault(require("../ethereum/EthereumWallet"));
class EthereumContract extends eventcontainer_1.default {
    constructor(address, abi, eventNames) {
        super();
        this.address = address;
        this.abi = abi;
        this.contract = new ethers_1.ethers.Contract(address, abi, EthereumNetworkProvider_1.default.provider).connect(EthereumNetworkProvider_1.default.signer);
        for (const eventName of eventNames) {
            this.contract.on(eventName, (...args) => {
                this.fireEvent(eventName, ...args);
            });
        }
        EthereumWallet_1.default.on("chainChanged", () => this.walletContract = undefined);
    }
    get interface() {
        return this.contract.interface;
    }
    async getWalletContract() {
        if (await EthereumWallet_1.default.connected() === true) {
            if (this.walletContract === undefined && EthereumWallet_1.default.signer !== undefined) {
                this.walletContract = new ethers_1.ethers.Contract(this.address, this.abi, EthereumWallet_1.default.provider).connect(EthereumWallet_1.default.signer);
            }
            return this.walletContract;
        }
    }
    async connectAndGetWalletContract() {
        if (await EthereumWallet_1.default.loadChainId() !== 1) {
            alert("Wrong Network. Please change to Ethereum.");
            EthereumWallet_1.default.disconnectFromWalletConnect();
        }
        else {
            if (await EthereumWallet_1.default.connected() !== true) {
                await EthereumWallet_1.default.connect();
            }
            if (this.walletContract === undefined && EthereumWallet_1.default.signer !== undefined) {
                this.walletContract = new ethers_1.ethers.Contract(this.address, this.abi, EthereumWallet_1.default.provider).connect(EthereumWallet_1.default.signer);
            }
            return this.walletContract;
        }
    }
}
exports.default = EthereumContract;
//# sourceMappingURL=EthereumContract.js.map