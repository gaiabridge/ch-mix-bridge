import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { PolygonMix } from "./abi/pmix/typechain";
import MixSenderInterface from "./MixSenderInterface";
import ERC20Contract from "./polygon-standard/ERC20Contract";
declare class PolygonMixContract extends ERC20Contract<PolygonMix> implements MixSenderInterface {
    constructor();
    loadAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    addTokenToWallet(): void;
    sendOverHorizon(toChain: BigNumberish, receiver: string, amount: BigNumberish): Promise<void>;
    sended(sender: string, toChain: BigNumberish, receiver: string, index: BigNumberish): Promise<BigNumber>;
    sendCount(sender: string, toChain: BigNumberish, receiver: string): Promise<BigNumber>;
    receiveOverHorizon(fromChain: BigNumberish, toChain: BigNumberish, sender: string, sendId: BigNumberish, amount: BigNumberish, signature: string): Promise<void>;
    received(receiver: string, fromChain: BigNumberish, sender: string, sendId: BigNumberish): Promise<boolean>;
    getTransferEvents(to: string, startBlock: number, endBlock: number): Promise<import("ethers").Event[]>;
}
declare const _default: PolygonMixContract;
export default _default;
//# sourceMappingURL=PolygonMixContract.d.ts.map