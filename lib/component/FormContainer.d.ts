import { BigNumberish } from "@ethersproject/bignumber";
import { DomNode } from "@hanul/skynode";
export default class FormContainer extends DomNode {
    private fromForm;
    private toForm;
    constructor();
    private loadHistoryNonce;
    private loadHistory;
    sendOverHorizon(amount: BigNumberish): Promise<void>;
    receiveOverHorizon(sender: string, sendId: BigNumberish, amount: BigNumberish): Promise<void>;
}
//# sourceMappingURL=FormContainer.d.ts.map