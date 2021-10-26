import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import KlaytnContract from "./KlaytnContract";
declare class MixSenderContract extends KlaytnContract {
    constructor();
    sendOverHorizon(toChain: BigNumberish, amount: BigNumberish): Promise<void>;
    sended(sender: string, amount: BigNumberish, index: BigNumberish): Promise<BigNumber>;
    sendCount(sender: string, amount: BigNumberish): Promise<BigNumber>;
    receiveOverHorizon(fromChain: BigNumberish, sendId: BigNumberish, amount: BigNumberish, signature: string): Promise<void>;
    received(receiver: string, amount: BigNumberish, sendId: BigNumberish): Promise<boolean>;
}
declare const _default: MixSenderContract;
export default _default;
//# sourceMappingURL=MixSenderContract.d.ts.map