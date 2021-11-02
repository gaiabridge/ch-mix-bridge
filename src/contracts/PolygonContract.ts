import { ContractInterface, ethers } from "ethers";
import EventContainer from "eventcontainer";
import PolygonNetworkProvider from "../polygon/PolygonNetworkProvider";
import PolygonWallet from "../polygon/PolygonWallet";

export default abstract class PolygonContract<CT extends ethers.Contract> extends EventContainer {

    protected walletContract: CT | undefined;
    protected contract: CT;

    constructor(public address: string, private abi: ContractInterface, eventNames: string[]) {
        super();
        this.contract = new ethers.Contract(address, abi, PolygonNetworkProvider.provider).connect(PolygonNetworkProvider.signer) as CT;
        for (const eventName of eventNames) {
            this.contract.on(eventName, (...args) => {
                this.fireEvent(eventName, ...args);
            });
        }
        PolygonWallet.on("chainChanged", () => this.walletContract = undefined);
    }

    public get interface() {
        return this.contract.interface;
    }

    public async getWalletContract() {
        if (await PolygonWallet.connected() === true) {
            if (this.walletContract === undefined && PolygonWallet.signer !== undefined) {
                this.walletContract = new ethers.Contract(this.address, this.abi, PolygonWallet.provider).connect(PolygonWallet.signer) as CT;
            }
            return this.walletContract;
        }
    }

    public async connectAndGetWalletContract() {
        if (await PolygonWallet.loadChainId() !== 137) {
            alert("Wrong Network. Please change to Polygon.");
            PolygonWallet.disconnectFromWalletConnect();
        } else {
            if (await PolygonWallet.connected() !== true) {
                await PolygonWallet.connect();
            }
            if (this.walletContract === undefined && PolygonWallet.signer !== undefined) {
                this.walletContract = new ethers.Contract(this.address, this.abi, PolygonWallet.provider).connect(PolygonWallet.signer) as CT;
            }
            return this.walletContract;
        }
    }
}
