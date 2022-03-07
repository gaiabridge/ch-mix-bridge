import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import SkyUtil from "skyutil";
import superagent from "superagent";
import Form from "./Form";
import Sended from "./Sended";

export default class Swaper extends DomNode {
    private fromForm: Form;
    private toForm: Form;

    private sendedList: DomNode;

    constructor() {
        super(".swaper");

        this.append(
            el(
                ".form-container",
                (this.fromForm = new Form(this, 8217, true)),
                el("img.arrow", { src: "/images/shared/icn/icn-arrow-right.svg", height: "50", alt: "icn-arrow-right" }),
                (this.toForm = new Form(this, 1))
            ),
            el(".fee-container",
                el(".content",
                    el("h3", msg("FEE_TITLE")),
                    // el("span", "0.3% (Charged by Gaia Protocol)"),
                ),
                el("p", "0 MIX"),
            ),
            el(".received-container",
                el("h3", msg("RECEIVED_TITLE")),
                el("p", "0 MIX"),
            ),
            el(".warning",
                el("img", { src: "/images/shared/icn/icn-warning.svg", alt: "warning icon" }),
                el("p", msg("WARNING_TITLE")),
            ),
            el(".button-container",
                el("button", msg("APPROVE_BUTTON"), { click: () => { } }),
                el("button", msg("TRANSFER_BUTTON")),
            ),
            el(".history",
                el("h2", "전송 기록"),
                el(".sended-title",
                    el("h3", "보낸 체인"),
                    el("h3", "상태"),
                ),
                el("hr.divider"),
                (this.sendedList = el(".sended-list"))
            )
        );

        this.fromForm.on(
            "changeChain",
            (chainId: number, originChainId: number) => {
                if (this.toForm.chainId === chainId) {
                    this.toForm.changeChain(originChainId);
                }
                this.loadHistory();
            }
        );

        this.toForm.on("changeChain", (chainId: number, originChainId: number) => {
            if (this.fromForm.chainId === chainId) {
                this.fromForm.changeChain(originChainId);
            }
            this.loadHistory();
        });

        this.loadHistory();
        this.fromForm.on("connect", () => this.loadHistory());
        this.toForm.on("connect", () => this.loadHistory());
    }

    private loadHistoryNonce = 0;

    private async loadHistory() {
        if (
            this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined
        ) {
            const sender = await this.fromForm.sender.loadAddress();
            const receiver = await this.toForm.sender.loadAddress();
            if (sender !== undefined && receiver !== undefined) {
                const count = await this.fromForm.sender.sendCount(
                    sender,
                    this.toForm.chainId,
                    receiver
                );
                this.loadHistoryNonce += 1;
                const nonce = this.loadHistoryNonce;
                this.sendedList.empty();

                SkyUtil.repeatResultAsync(count.toNumber(), async (sendId) => {
                    if (this.loadHistoryNonce === nonce) {
                        this.addSended(sender, receiver, BigNumber.from(sendId));
                    }
                });
            }
        }
    }

    public addSended(sender: string, receiver: string, sendId: BigNumber) {
        if (
            this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined
        ) {
            new Sended(
                this.fromForm.sender,
                this.toForm.sender,
                this.fromForm.chainId,
                this.toForm.chainId,
                sender,
                receiver,
                sendId.toNumber(),
                async () => {
                    if (this.fromForm.sender !== undefined) {
                        const sended = await this.fromForm.sender.sended(
                            sender,
                            this.toForm.chainId,
                            receiver,
                            sendId
                        );
                        this.receiveOverHorizon(
                            receiver,
                            this.toForm.chainId,
                            sender,
                            sendId,
                            sended
                        );
                    }
                }
            ).appendTo(this.sendedList, 0);
        }
    }

    public async sendOverHorizon(amount: BigNumberish) {
        if (
            this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined
        ) {
            const receiver = await this.toForm.sender.loadAddress();
            if (receiver !== undefined) {
                await this.fromForm.sender.sendOverHorizon(
                    this.toForm.chainId,
                    receiver,
                    amount
                );
            }
        }
    }

    public async receiveOverHorizon(
        _receiver: string,
        toChain: BigNumberish,
        sender: string,
        sendId: BigNumber,
        amount: BigNumberish
    ) {
        if (
            this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined &&
            this.toForm.chainId.toString() === toChain.toString()
        ) {
            const receiver = await this.toForm.sender.loadAddress();
            if (receiver === _receiver) {
                try {
                    const result = await superagent
                        .get(
                            `https://api.chainhorizon.org/mix/signsend?receiver=${receiver}&fromChain=${this.fromForm.chainId
                            }&toChain=${this.toForm.chainId
                            }&sender=${sender}&sendId=${sendId}&amount=${amount.toString()}`
                        )
                        .send();
                    await this.toForm.sender.receiveOverHorizon(
                        this.fromForm.chainId,
                        this.toForm.chainId,
                        sender,
                        sendId,
                        amount,
                        result.text
                    );
                } catch (error: any) {
                    alert(`Error: ${error.message}`);
                }
            }
        }
    }
}
