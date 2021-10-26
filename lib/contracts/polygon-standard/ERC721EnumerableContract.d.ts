import { BigNumber, BigNumberish, ethers } from "ethers";
import ERC721Contract from "./ERC721Contract";
export default abstract class ERC721EnumerableContract<CT extends ethers.Contract> extends ERC721Contract<CT> {
    getTotalSupply(): Promise<BigNumber>;
    getTokenOfOwnerByIndex(owner: string, index: BigNumberish): Promise<BigNumber>;
}
//# sourceMappingURL=ERC721EnumerableContract.d.ts.map