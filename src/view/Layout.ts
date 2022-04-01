import { BodyNode, DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import BrowserInfo from "../BrowserInfo";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        let select: DomNode<HTMLSelectElement>;

        BodyNode.append(
            (this.container = el(".layout",
                el("header",
                    el("h1", el("img", { src: "/images/shared/logo/gaiaBridge.svg", alt: "gaia bridge logo" })),
                    el("h2", el("img", { src: "/images/shared/logo/mix.svg", alt: "mix logo" })),
                ),
                el("main", (this.content = el(".content"))),
                el("footer",
                    el(".copyright", "© GaiaProtocol"),
                    el(".sns",
                        el("a", "DOCS", { href: "https://medium.com/gaiaprotocol" }),
                        el("a", "GITHUB", { href: "https://github.com/gaiabridge" }),
                        el("a", "TWITTER", { href: "https://twitter.com/gaiabridge" }),
                    ),
                ),
            )),
        );
    }

    public set title(title: string) {
        document.title = `${title} | Gaia Bridge`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
