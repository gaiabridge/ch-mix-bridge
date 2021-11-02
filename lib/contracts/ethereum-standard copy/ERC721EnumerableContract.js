"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ERC721Contract_1 = __importDefault(require("./ERC721Contract"));
class ERC721EnumerableContract extends ERC721Contract_1.default {
    async getTotalSupply() {
        return await this.contract.totalSupply();
    }
    async getTokenOfOwnerByIndex(owner, index) {
        return await this.contract.tokenOfOwnerByIndex(owner, index);
    }
}
exports.default = ERC721EnumerableContract;
//# sourceMappingURL=ERC721EnumerableContract.js.map