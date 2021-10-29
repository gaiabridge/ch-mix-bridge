import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import KlaytnContract from "./KlaytnContract";
import MixSenderInterface from "./MixSenderInterface";
declare class MixSenderContract extends KlaytnContract implements MixSenderInterface {
    constructor();
    private watch;
    private getSendOverHorizonEvents;
    private getReceiveOverHorizonEvents;
    loadAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    balanceOf(owner: string): Promise<BigNumber>;
    addTokenToWallet(): void;
    sendOverHorizon(toChain: BigNumberish, receiver: string, amount: BigNumberish): Promise<void>;
    sended(sender: string, toChain: BigNumberish, receiver: string, index: BigNumberish): Promise<BigNumber>;
    sendCount(sender: string, toChain: BigNumberish, receiver: string): Promise<BigNumber>;
    receiveOverHorizon(fromChain: BigNumberish, toChain: BigNumberish, sender: string, sendId: BigNumberish, amount: BigNumberish, signature: string): Promise<void>;
    received(receiver: string, fromChain: BigNumberish, sender: string, sendId: BigNumberish): Promise<boolean>;
}
declare const _default: MixSenderContract;
export default _default;
//# sourceMappingURL=MixSenderContract.d.ts.map