import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { EthereumMix } from "./abi/emix/typechain";
import ERC20Contract from "./ethereum-standard/ERC20Contract";
import MixSenderInterface from "./MixSenderInterface";
declare class EthereumMixContract extends ERC20Contract<EthereumMix> implements MixSenderInterface {
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
declare const _default: EthereumMixContract;
export default _default;
//# sourceMappingURL=EthereumMixContract.d.ts.map