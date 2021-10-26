import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import MixSenderContract from "../contracts/MixSenderContract";
import MixSenderInterface from "../contracts/MixSenderInterface";
import PolygonMixContract from "../contracts/PolygonMixContract";
import FormContainer from "./FormContainer";

export default class Form extends DomNode {

    public sender: MixSenderInterface | undefined;

    private chainSelect: DomNode<HTMLSelectElement>;
    private balanceDisplay: DomNode;
    private inputContainer: DomNode;
    private buttonContainer: DomNode;

    constructor(
        private formContainer: FormContainer,
        public chainId: number,
        private isFrom: boolean = false,
    ) {
        super(".form");
        this.append(
            this.chainSelect = el("select",
                el("option", "Klaytn", { value: "8217" }),
                el("option", "Polygon", { value: "137" }),
                {
                    change: () => {
                        const originChainId = this.chainId;
                        this.changeChain(parseInt(this.chainSelect.domElement.value, 10));
                        this.fireEvent("changeChain", this.chainId, originChainId);
                    },
                },
            ),
            this.balanceDisplay = el(".balance"),
            this.inputContainer = el(".input-container"),
            this.buttonContainer = el(".button-container"),
        );
        this.changeChain(chainId);
    }

    public async changeChain(chainId: number) {

        this.chainId = chainId;
        this.chainSelect.domElement.value = String(chainId);

        this.sender?.off("connect", this.loadBalance);

        if (chainId === 8217) {
            this.sender = MixSenderContract;
        } else if (chainId === 137) {
            this.sender = PolygonMixContract;
        }
        this.loadBalance();
    }

    private loadBalance = async () => {

        this.inputContainer.empty();
        this.buttonContainer.empty();

        if (this.sender !== undefined) {

            const owner = await this.sender.loadAddress();
            if (owner !== undefined) {
                const balance = await this.sender.balanceOf(owner);
                this.balanceDisplay.empty().appendText(`${utils.formatUnits(balance)} MIX`);
                if (this.isFrom === true) {

                    const input: DomNode<HTMLInputElement> = el("input", { placeholder: "보낼 수량" });
                    input.appendTo(this.inputContainer);

                    this.buttonContainer.append(
                        el("a.send-button", "보내기", {
                            click: () => this.formContainer.sendOverHorizon(utils.parseEther(input.domElement.value)),
                        }),
                    );
                }
            } else {
                this.balanceDisplay.empty().appendText("잔액 불러오기 실패");
                this.buttonContainer.append(
                    el("a.connect-button", "지갑 연결", {
                        click: () => this.sender?.connect(),
                    }),
                );
            }

            this.sender.on("connect", this.loadBalance);
        }
    }
}
