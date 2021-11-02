import { ContractInterface, ethers } from "ethers";
import EventContainer from "eventcontainer";
export default abstract class PolygonContract<CT extends ethers.Contract> extends EventContainer {
    address: string;
    private abi;
    protected walletContract: CT | undefined;
    protected contract: CT;
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    get interface(): ethers.utils.Interface;
    getWalletContract(): Promise<CT | undefined>;
    connectAndGetWalletContract(): Promise<CT | undefined>;
}
//# sourceMappingURL=PolygonContract.d.ts.map