"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PolygonContract_1 = __importDefault(require("../PolygonContract"));
class ERC1155Contract extends PolygonContract_1.default {
    constructor(address, abi, eventNames) {
        super(address, abi, eventNames.concat([
            "TransferSingle",
            "TransferBatch",
            "ApprovalForAll",
            "URI",
        ]));
    }
    async getName() {
        return await this.contract.name();
    }
    async getNonce(owner) {
        return await this.contract.nonces(owner);
    }
    async isApprovedForAll(owner, operator) {
        return await this.contract.isApprovedForAll(owner, operator);
    }
    async balanceOf(owner, id) {
        return await this.contract.balanceOf(owner, id);
    }
}
exports.default = ERC1155Contract;
//# sourceMappingURL=ERC1155Contract.js.map