"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EthereumWallet_1 = __importDefault(require("../../ethereum/EthereumWallet"));
const EthereumContract_1 = __importDefault(require("../EthereumContract"));
class ERC721Contract extends EthereumContract_1.default {
    constructor(address, abi, eventNames) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
            "ApprovalForAll",
        ]));
    }
    async getName() {
        return await this.contract.name();
    }
    async balanceOf(owner) {
        return await this.contract.balanceOf(owner);
    }
    async ownerOf(id) {
        return await this.contract.ownerOf(id);
    }
    async getNonce(id) {
        return await this.contract.nonces(id);
    }
    async getNonceForAll(owner) {
        return await this.contract.noncesForAll(owner);
    }
    async isApprovedForAll(owner, operator) {
        return await this.contract.isApprovedForAll(owner, operator);
    }
    async transfer(to, id) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.transferFrom(await EthereumWallet_1.default.loadAddress(), to, id);
    }
}
exports.default = ERC721Contract;
//# sourceMappingURL=ERC721Contract.js.map