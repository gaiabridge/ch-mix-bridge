import { BigNumber, BigNumberish, ContractInterface, ethers } from "ethers";
import EthereumContract from "../EthereumContract";

export default abstract class ERC1155Contract<CT extends ethers.Contract> extends EthereumContract<CT> {

    constructor(address: string, abi: ContractInterface, eventNames: string[]) {
        super(address, abi, eventNames.concat([
            "TransferSingle",
            "TransferBatch",
            "ApprovalForAll",
            "URI",
        ]));
    }

    public async getName(): Promise<string> {
        return await this.contract.name();
    }

    public async getNonce(owner: string): Promise<BigNumber> {
        return await this.contract.nonces(owner);
    }

    public async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return await this.contract.isApprovedForAll(owner, operator);
    }

    public async balanceOf(owner: string, id: BigNumberish): Promise<BigNumber> {
        return await this.contract.balanceOf(owner, id);
    }
}
