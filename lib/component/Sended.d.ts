import { DomNode } from "@hanul/skynode";
import MixSenderInterface from "../contracts/MixSenderInterface";
export default class Sended extends DomNode {
    private fromSender;
    private toSender;
    private fromChain;
    private toChain;
    private sender;
    private receiver;
    private sendId;
    private retry;
    constructor(fromSender: MixSenderInterface, toSender: MixSenderInterface, fromChain: number, toChain: number, sender: string, receiver: string, sendId: number, retry: () => void);
    private load;
    private receiveOverHorizonHandler;
    delete(): void;
}
//# sourceMappingURL=Sended.d.ts.map