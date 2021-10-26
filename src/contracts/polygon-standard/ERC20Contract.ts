import { BigNumber, BigNumberish, ContractInterface, ethers } from "ethers";
import PolygonContract from "../PolygonContract";

export default abstract class ERC20Contract<CT extends ethers.Contract> extends PolygonContract<CT> {

    constructor(address: string, abi: ContractInterface, eventNames: string[]) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
        ]));
    }

    public async getName(): Promise<string> {
        return await this.contract.name();
    }

    public async getNonce(owner: string): Promise<BigNumber> {
        return await this.contract.nonces(owner);
    }

    public async getTotalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return await this.contract.balanceOf(owner);
    }

    public async allowance(owner: string, spender: string): Promise<BigNumber> {
        return await this.contract.allowance(owner, spender);
    }

    public async transfer(to: string, amount: BigNumberish) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.transfer(to, amount);
    }

    public async transferFrom(from: string, to: string, amount: BigNumberish) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.transferFrom(from, to, amount);
    }

    public async approve(spender: string, amount: BigNumberish) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.approve(spender, amount);
    }
}
