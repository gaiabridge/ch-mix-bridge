import { BigNumber, BigNumberish, ethers } from "ethers";
import ERC721Contract from "./ERC721Contract";

export default abstract class ERC721EnumerableContract<CT extends ethers.Contract> extends ERC721Contract<CT> {

    public async getTotalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async getTokenOfOwnerByIndex(owner: string, index: BigNumberish): Promise<BigNumber> {
        return await this.contract.tokenOfOwnerByIndex(owner, index);
    }
}
