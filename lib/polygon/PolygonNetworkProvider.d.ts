import { ethers } from "ethers";
import EventContainer from "eventcontainer";
declare class PolygonNetworkProvider extends EventContainer {
    provider: ethers.providers.WebSocketProvider;
    signer: ethers.providers.JsonRpcSigner;
    constructor();
    getBlockNumber(): Promise<number>;
    getBalance(address: string): Promise<ethers.BigNumber>;
}
declare const _default: PolygonNetworkProvider;
export default _default;
//# sourceMappingURL=PolygonNetworkProvider.d.ts.map