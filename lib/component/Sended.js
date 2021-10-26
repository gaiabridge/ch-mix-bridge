"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Sended extends skynode_1.DomNode {
    constructor(fromSender, toSender, fromChain, toChain, sender, receiver, sendId, retry) {
        super(".sended");
        this.fromSender = fromSender;
        this.toSender = toSender;
        this.fromChain = fromChain;
        this.toChain = toChain;
        this.sender = sender;
        this.receiver = receiver;
        this.sendId = sendId;
        this.retry = retry;
        this.load();
    }
    async load() {
        const sended = await this.fromSender.sended(this.sender, this.toChain, this.receiver, this.sendId);
        const received = await this.toSender.received(this.receiver, this.fromChain, this.sender, this.sendId);
        this.append(received === true ? (0, skynode_1.el)(".done", "전송 완료") : (0, skynode_1.el)("a.retry-button", "재시도", {
            click: () => this.retry(),
        }));
    }
}
exports.default = Sended;
//# sourceMappingURL=Sended.js.map