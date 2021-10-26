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
        if (this.fromForm.sender !== undefined) {
            const owner = await this.fromForm.sender.loadAddress();
            if (owner !== undefined) {
                await this.fromForm.sender.sendOverHorizon(this.toForm.chainId, amount);
                const count = await this.fromForm.sender.sendCount(owner, this.toForm.chainId);
                console.log({
                    address: owner,
                    fromChain: this.fromForm.chainId,
                    sendId: count.toNumber() - 1,
                    amount: amount.toString(),
                })
                const signed = await superagent.post("https://localhost:1023/signsend").send({
                    address: owner,
                    fromChain: this.fromForm.chainId,
                    sendId: count.toNumber() - 1,
                    amount: amount.toString(),
                });
                console.log(signed);
            }
        }
    }
}
