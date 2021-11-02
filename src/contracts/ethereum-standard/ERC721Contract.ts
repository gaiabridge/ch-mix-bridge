import { BigNumber, BigNumberish, ContractInterface, ethers } from "ethers";
import EthereumWallet from "../../ethereum/EthereumWallet";
import EthereumContract from "../EthereumContract";

export default abstract class ERC721Contract<CT extends ethers.Contract> extends EthereumContract<CT> {

    constructor(address: string, abi: ContractInterface, eventNames: string[]) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
            "ApprovalForAll",
        ]));
    }

    public async getName(): Promise<string> {
        return await this.contract.name();
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return await this.contract.balanceOf(owner);
    }

    public async ownerOf(id: BigNumberish): Promise<string> {
        return await this.contract.ownerOf(id);
    }

    public async getNonce(id: BigNumberish): Promise<BigNumber> {
        return await this.contract.nonces(id);
    }

    public async getNonceForAll(owner: string): Promise<BigNumber> {
        return await this.contract.noncesForAll(owner);
    }

    public async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return await this.contract.isApprovedForAll(owner, operator);
    }

    public async transfer(to: string, id: BigNumberish) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.transferFrom(await EthereumWallet.loadAddress(), to, id);
    }
}
