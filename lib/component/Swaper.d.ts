import { BigNumberish } from "@ethersproject/bignumber";
import { DomNode } from "@hanul/skynode";
export default class Swaper extends DomNode {
    private fromForm;
    private toForm;
    private sendedList;
    constructor();
    private loadHistoryNonce;
    private loadHistory;
    sendOverHorizon(amount: BigNumberish): Promise<void>;
    receiveOverHorizon(sender: string, sendId: BigNumberish, amount: BigNumberish): Promise<void>;
}
//# sourceMappingURL=Swaper.d.ts.map