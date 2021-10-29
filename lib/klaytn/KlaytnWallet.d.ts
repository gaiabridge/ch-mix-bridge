import EventContainer from "eventcontainer";
declare class KlaytnWallet extends EventContainer {
    constructor();
    private checkConnected;
    loadAddress(): Promise<string | undefined>;
    connected(): Promise<boolean>;
    connect(): Promise<void>;
    loadChainId(): Promise<any>;
    addToken(address: string, symbol: string, decimals: number, image: string): Promise<void>;
}
declare const _default: KlaytnWallet;
export default _default;
//# sourceMappingURL=KlaytnWallet.d.ts.map