import { DomNode } from "@hanul/skynode";
import MixSenderInterface from "../contracts/MixSenderInterface";
import FormContainer from "./FormContainer";
export default class Form extends DomNode {
    private formContainer;
    chainId: number;
    private isFrom;
    sender: MixSenderInterface | undefined;
    private chainSelect;
    private balanceDisplay;
    private inputContainer;
    private buttonContainer;
    constructor(formContainer: FormContainer, chainId: number, isFrom?: boolean);
    changeChain(chainId: number): Promise<void>;
    private loadBalance;
}
//# sourceMappingURL=Form.d.ts.map