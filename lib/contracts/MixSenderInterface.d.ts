import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
export default interface MixSenderInterface {
    on(eventName: string, eventHandler: any): void;
    off(eventName: string, eventHandler: any): void;
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
//# sourceMappingURL=MixSenderInterface.d.ts.map