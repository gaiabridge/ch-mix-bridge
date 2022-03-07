import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import MixSenderInterface from "../contracts/MixSenderInterface";

export default class Sended extends DomNode {

    constructor(
        private fromSender: MixSenderInterface,
        private toSender: MixSenderInterface,

        private fromChain: number,
        private toChain: number,

        private sender: string,
        private receiver: string,

        private sendId: number,

        private retry: () => void,
    ) {
        super(".sended");
        this.load();
        this.toSender.on("ReceiveOverHorizon", this.receiveOverHorizonHandler);
    }

    private async load() {
        const sended = await this.fromSender.sended(this.sender, this.toChain, this.receiver, this.sendId);
        const received = await this.toSender.received(this.receiver, this.fromChain, this.sender, this.sendId);

        this.empty().append(
            el(".message", `${await this.getFormatting(sended)} MIX`,),
            received === true ? el(".done", "전송 완료") : el("a.retry-button", "재시도", {
                click: () => this.retry(),
            }),
        );
    }

    private async getFormatting(balance: BigNumber) {
        console.log(balance)
        let balanceDisplay = utils.formatEther(balance!)
        balanceDisplay = (+balanceDisplay).toFixed(4);
        return balanceDisplay;
    }

    private receiveOverHorizonHandler = async (receiver: string, fromChain: BigNumber, sender: string, sendId: BigNumber) => {
        if (receiver === this.receiver && fromChain.toNumber() === this.fromChain && sender === this.sender && sendId.toNumber() === this.sendId) {
            this.load();
        }
    }

    public delete() {
        this.toSender.off("ReceiveOverHorizon", this.receiveOverHorizonHandler);
        super.delete();
    }
}
