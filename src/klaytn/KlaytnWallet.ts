import EventContainer from "eventcontainer";
import Kaikas from "./Kaikas";

class KlaytnWallet extends EventContainer {

    constructor() {
        super();
        this.checkConnected();

        Kaikas.toss("connect", this);
    }

    private async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }

    public async loadAddress(): Promise<string | undefined> {
        if (Kaikas.installed === true) {
            return await Kaikas.loadAddress();
        }
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        if (Kaikas.installed === true) {
            return await Kaikas.connect();
        } else {
            alert("카이카스가 필요합니다. 카이카스를 설치해주시기 바랍니다.");
        }
    }
}

export default new KlaytnWallet();
