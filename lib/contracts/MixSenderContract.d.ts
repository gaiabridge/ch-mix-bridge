import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import KlaytnContract from "./KlaytnContract";
import MixSenderInterface from "./MixSenderInterface";
declare class MixSenderContract extends KlaytnContract implements MixSenderInterface {
    constructor();
    loadAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    balanceOf(owner: string): Promise<BigNumber>;
    sendOverHorizon(toChain: BigNumberish, amount: BigNumberish): Promise<void>;
    sended(sender: string, amount: BigNumberish, index: BigNumberish): Promise<BigNumber>;
    sendCount(sender: string, toChain: BigNumberish): Promise<BigNumber>;
    receiveOverHorizon(fromChain: BigNumberish, sendId: BigNumberish, amount: BigNumberish, signature: string): Promise<void>;
    received(receiver: string, amount: BigNumberish, sendId: BigNumberish): Promise<boolean>;
}
declare const _default: MixSenderContract;
export default _default;
//# sourceMappingURL=MixSenderContract.d.ts.map