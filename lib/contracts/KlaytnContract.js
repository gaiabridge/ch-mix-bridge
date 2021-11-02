"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const Kaikas_1 = __importDefault(require("../klaytn/Kaikas"));
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const KlaytnWallet_1 = __importDefault(require("../klaytn/KlaytnWallet"));
class KlaytnContract extends eventcontainer_1.default {
    constructor(address, abi) {
        super();
        this.address = address;
        this.abi = abi;
        this.contract = Klaytn_1.default.createContract(address, abi);
    }
    findMethodABI(name) {
        return this.abi.filter((abi) => abi.name === name && abi.type === "function")[0];
    }
    async loadExtWalletContract() {
        if (await Kaikas_1.default.loadChainId() !== 8217) {
            this.fireEvent("wrongNetwork");
            console.error("Wrong Network");
        }
        else {
            if (await Kaikas_1.default.connected() !== true) {
                await Kaikas_1.default.connect();
            }
            if (this.walletContract === undefined) {
                this.walletContract = Kaikas_1.default.createContract(this.address, this.abi);
            }
            return this.walletContract;
        }
    }
    async runMethod(methodName, ...params) {
        return await this.contract.methods[methodName](...params).call();
    }
    async runWalletMethodWithGas(methodName, gas, ...params) {
        if (Kaikas_1.default.installed === true) {
            const from = await KlaytnWallet_1.default.loadAddress();
            const contract = await this.loadExtWalletContract();
            await contract?.methods[methodName](...params).send({ from, gas });
        }
        else {
            alert("카이카스가 필요합니다. 카이카스를 설치해주시기 바랍니다.");
        }
    }
    async runWalletMethod(methodName, ...params) {
        return this.runWalletMethodWithGas(methodName, 1500000, ...params);
    }
    async runWalletMethodWithLargeGas(methodName, ...params) {
        return this.runWalletMethodWithGas(methodName, 20000000, ...params);
    }
    async runWalletMethodWithValue(value, methodName, ...params) {
        if (Kaikas_1.default.installed === true) {
            const from = await KlaytnWallet_1.default.loadAddress();
            const contract = await this.loadExtWalletContract();
            await contract?.methods[methodName](...params).send({ from, gas: 1500000, value });
        }
        else {
            alert("카이카스가 필요합니다. 카이카스를 설치해주시기 바랍니다.");
        }
    }
}
exports.default = KlaytnContract;
//# sourceMappingURL=KlaytnContract.js.map