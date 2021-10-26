import { BigNumber } from "@ethersproject/bignumber";
import { DomNode, el } from "@hanul/skynode";
import superagent from "superagent";
import Form from "./Form";

export default class FormContainer extends DomNode {

    private fromForm: Form;
    private toForm: Form;

    constructor() {
        super(".form-container");

        this.append(
            this.fromForm = new Form(this, 8217, true),
            el("img.arrow", { src: "/images/arrow.png", height: "50" }),
            el("img.mobile-arrow", { src: "/images/arrow.png", height: "50" }),
            this.toForm = new Form(this, 137),
        );

        this.fromForm.on("changeChain", (chainId: number, originChainId: number) => {
            if (this.toForm.chainId === chainId) {
                this.toForm.changeChain(originChainId);
            }
        });

        this.toForm.on("changeChain", (chainId: number, originChainId: number) => {
            if (this.fromForm.chainId === chainId) {
                this.fromForm.changeChain(originChainId);
            }
        });
    }

    public async sendOverHorizon(amount: BigNumber) {
        if (this.fromForm.sender !== undefined && this.toForm.sender !== undefined) {
            const sender = await this.fromForm.sender.loadAddress();
            const receiver = await this.toForm.sender.loadAddress();
            if (sender !== undefined && receiver !== undefined) {
                await this.fromForm.sender.sendOverHorizon(this.toForm.chainId, receiver, amount);
                const count = await this.fromForm.sender.sendCount(sender, this.toForm.chainId, receiver);

                const sendId = count.toNumber() - 1;
                const result = await superagent.get(`https://api.chainhorizon.org/signsend?receiver=${receiver}&fromChain=${this.fromForm.chainId}&sender=${sender}&sendId=${sendId}&amount=${amount.toString()}`).send();

                await this.toForm.sender.receiveOverHorizon(this.fromForm.chainId, sender, sendId, amount, result.text);
            }
        }
    }
}
