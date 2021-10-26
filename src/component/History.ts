import { DomNode, el } from "@hanul/skynode";

export default class History extends DomNode {

    constructor() {
        super(".history");
        this.append(
            el("h2", "전송 기록"),
        );
    }
}
