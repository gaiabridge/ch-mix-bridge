import { DomNode, el } from "@hanul/skynode";
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
    }

    private async load() {
        const sended = await this.fromSender.sended(this.sender, this.toChain, this.receiver, this.sendId);
        const received = await this.toSender.received(this.receiver, this.fromChain, this.sender, this.sendId);

        this.append(
            received === true ? el(".done", "전송 완료") : el("a.retry-button", "재시도", {
                click: () => this.retry(),
            }),
        );
    }
}
