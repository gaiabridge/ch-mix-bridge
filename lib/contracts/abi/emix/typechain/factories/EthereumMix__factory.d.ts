import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { EthereumMix } from "../EthereumMix";
export declare class EthereumMix__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_signer: string, overrides?: Overrides): Promise<EthereumMix>;
    getDeployTransaction(_signer: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): EthereumMix;
    connect(signer: Signer): EthereumMix__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): EthereumMix;
}
//# sourceMappingURL=EthereumMix__factory.d.ts.map