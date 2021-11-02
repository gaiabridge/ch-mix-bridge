import { BigNumber, BigNumberish, ContractInterface, ethers } from "ethers";
import PolygonContract from "../PolygonContract";
export default abstract class ERC1155Contract<CT extends ethers.Contract> extends PolygonContract<CT> {
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    getName(): Promise<string>;
    getNonce(owner: string): Promise<BigNumber>;
    isApprovedForAll(owner: string, operator: string): Promise<boolean>;
    balanceOf(owner: string, id: BigNumberish): Promise<BigNumber>;
}
//# sourceMappingURL=ERC1155Contract.d.ts.map