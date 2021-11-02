import { ContractInterface, ethers } from "ethers";
import EventContainer from "eventcontainer";
import EthereumNetworkProvider from "../ethereum/EthereumNetworkProvider";
import EthereumWallet from "../ethereum/EthereumWallet";

export default abstract class EthereumContract<CT extends ethers.Contract> extends EventContainer {

    protected walletContract: CT | undefined;
    protected contract: CT;

    constructor(public address: string, private abi: ContractInterface, eventNames: string[]) {
        super();
        this.contract = new ethers.Contract(address, abi, EthereumNetworkProvider.provider).connect(EthereumNetworkProvider.signer) as CT;
        for (const eventName of eventNames) {
            this.contract.on(eventName, (...args) => {
                this.fireEvent(eventName, ...args);
            });
        }
        EthereumWallet.on("chainChanged", () => this.walletContract = undefined);
    }

    public get interface() {
        return this.contract.interface;
    }

    public async getWalletContract() {
        if (await EthereumWallet.connected() === true) {
            if (this.walletContract === undefined && EthereumWallet.signer !== undefined) {
                this.walletContract = new ethers.Contract(this.address, this.abi, EthereumWallet.provider).connect(EthereumWallet.signer) as CT;
            }
            return this.walletContract;
        }
    }

    public async connectAndGetWalletContract() {
        if (await EthereumWallet.loadChainId() !== 1) {
            alert("Wrong Network. Please change to Ethereum.");
            EthereumWallet.disconnectFromWalletConnect();
        } else {
            if (await EthereumWallet.connected() !== true) {
                await EthereumWallet.connect();
            }
            if (this.walletContract === undefined && EthereumWallet.signer !== undefined) {
                this.walletContract = new ethers.Contract(this.address, this.abi, EthereumWallet.provider).connect(EthereumWallet.signer) as CT;
            }
            return this.walletContract;
        }
    }
}
