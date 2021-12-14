import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import EthereumMixContract from "../contracts/EthereumMixContract";
import MixSenderContract from "../contracts/MixSenderContract";
import MixSenderInterface from "../contracts/MixSenderInterface";
import PolygonMixContract from "../contracts/PolygonMixContract";
import Swaper from "./Swaper";

export default class Form extends DomNode {
    public sender: MixSenderInterface | undefined;

    private chainIcon: DomNode<HTMLImageElement>;
    private chainSelect: DomNode<HTMLSelectElement>;
    private balanceDisplay: DomNode;
    private inputContainer: DomNode;
    private buttonContainer: DomNode;

    constructor(
        private swaper: Swaper,
        public chainId: number,
        private isFrom: boolean = false
    ) {
        super(".form");
        this.append(
            el(".chain",
                el(".icon",
                    this.chainIcon = el("img", { height: "24" }),
                ),
                this.chainSelect = el(
                    "select",
                    el("option", "Klaytn", {
                        value: "8217",
                    }),
                    el("option", "Ethereum", {
                        value: "1",
                    }),
                    el("option", "Polygon", {
                        value: "137",
                    }),
                    {
                        change: () => {
                            const originChainId = this.chainId;
                            this.changeChain(parseInt(this.chainSelect.domElement.value, 10));
                            this.fireEvent("changeChain", this.chainId, originChainId);
                        },
                    }
                ) as any,
                isFrom ? el("span.help-text", "에서") : el("span.help-text", "으로")
            ),
            (this.balanceDisplay = el(".balance")),
            (this.inputContainer = el(".input-container")),
            (this.buttonContainer = el(".button-container"))
        );
        this.changeChain(chainId);
    }

    public async changeChain(chainId: number) {
        this.chainId = chainId;
        this.chainSelect.domElement.value = String(chainId);

        this.sender?.off("connect", this.connectHandler);
        this.sender?.off("Transfer", this.transferHandler);
        this.sender?.off("SendOverHorizon", this.sendOverHorizonHandler);

        if (chainId === 8217) {
            this.sender = MixSenderContract;
            this.chainIcon.domElement.src = "/images/klaytn-logo.png";
        } else if (chainId === 1) {
            this.sender = EthereumMixContract;
            this.chainIcon.domElement.src = "/images/ethereum-logo.png";
        } else if (chainId === 137) {
            this.sender = PolygonMixContract;
            this.chainIcon.domElement.src = "/images/polygon-logo.png";
        }
        await this.loadBalance();

        this.sender?.on("connect", this.connectHandler);
        this.sender?.on("Transfer", this.transferHandler);
        this.sender?.on("SendOverHorizon", this.sendOverHorizonHandler);
    }

    private async loadBalance() {
        this.inputContainer.empty();
        this.buttonContainer.empty();

        if (this.sender !== undefined) {
            const owner = await this.sender.loadAddress();
            if (owner !== undefined) {
                const balance = await this.sender.balanceOf(owner);
                this.balanceDisplay
                    .empty()
                    .appendText(`${utils.formatUnits(balance)} MIX`);

                this.buttonContainer.append(
                    el("a.add-token-to-wallet-button", "지갑에 토큰 추가하기", {
                        click: () => {
                            this.sender?.addTokenToWallet();
                        },
                    }),
                );

                if (this.isFrom === true) {
                    const input: DomNode<HTMLInputElement> = el("input", {
                        placeholder: "보낼 수량",
                    });
                    input.appendTo(this.inputContainer);

                    this.buttonContainer.append(
                        el("a.send-button", "보내기", {
                            click: () =>
                                this.swaper.sendOverHorizon(
                                    utils.parseEther(input.domElement.value)
                                ),
                        })
                    );
                }
            } else {
                this.balanceDisplay.empty().appendText("잔액 불러오기 실패");
                this.buttonContainer.append(
                    el("a.connect-button", "지갑 연결", {
                        click: () => this.sender?.connect(),
                    })
                );
            }
        }
    }

    private connectHandler = async () => {
        this.fireEvent("connect");
        this.loadBalance();
    };

    private transferHandler = async (from: string, to: string) => {
        const owner = await this.sender?.loadAddress();
        if (from === owner || to === owner) {
            this.loadBalance();
        }
    };

    private sendOverHorizonHandler = async (
        sender: string,
        toChain: BigNumber,
        receiver: string,
        sendId: BigNumber,
        amount: BigNumber
    ) => {
        this.swaper.receiveOverHorizon(receiver, toChain, sender, sendId, amount);
        const owner = await this.sender?.loadAddress();
        if (sender === owner) {
            this.swaper.addSended(sender, receiver, sendId);
        }
    };

    public delete() {
        this.sender?.off("connect", this.connectHandler);
        this.sender?.off("Transfer", this.transferHandler);
        this.sender?.off("SendOverHorizon", this.sendOverHorizonHandler);
        super.delete();
    }
}
