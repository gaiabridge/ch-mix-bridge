import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { PolygonMix } from "./abi/pmix/typechain";
import ERC20Contract from "./polygon-standard/ERC20Contract";
declare class PolygonMixContract extends ERC20Contract<PolygonMix> {
    constructor();
    sendOverHorizon(toChain: BigNumberish, amount: BigNumberish): Promise<void>;
    sended(sender: string, amount: BigNumberish, index: BigNumberish): Promise<BigNumber>;
    sendCount(sender: string, amount: BigNumberish): Promise<BigNumber>;
    receiveOverHorizon(fromChain: BigNumberish, sendId: BigNumberish, amount: BigNumberish, signature: string): Promise<void>;
    received(receiver: string, amount: BigNumberish, sendId: BigNumberish): Promise<boolean>;
    getTransferEvents(to: string, startBlock: number, endBlock: number): Promise<import("ethers").Event[]>;
}
declare const _default: PolygonMixContract;
export default _default;
//# sourceMappingURL=PolygonMixContract.d.ts.map