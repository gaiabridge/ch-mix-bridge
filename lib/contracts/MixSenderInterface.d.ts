import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
export default interface MixSenderInterface {
    on(eventName: string, eventHandler: any): void;
    off(eventName: string, eventHandler: any): void;
    loadAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    balanceOf(owner: string): Promise<BigNumber>;
    sendOverHorizon(toChain: BigNumberish, amount: BigNumberish): Promise<void>;
    sended(sender: string, amount: BigNumberish, index: BigNumberish): Promise<BigNumber>;
    sendCount(sender: string, toChain: BigNumberish): Promise<BigNumber>;
    receiveOverHorizon(fromChain: BigNumberish, sendId: BigNumberish, amount: BigNumberish, signature: string): Promise<void>;
    received(receiver: string, amount: BigNumberish, sendId: BigNumberish): Promise<boolean>;
}
//# sourceMappingURL=MixSenderInterface.d.ts.map