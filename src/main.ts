import { BodyNode, el } from "@hanul/skynode";
import Swaper from "./component/Swaper";

(async () => {
    BodyNode.append(
        el("h1",
            el(".logo", "Chain Horizon", { href: "/" }),
            el(".mix",
                el("a", "Mix", {
                    href: "https://dogesound.club/mix",
                    target: "_blank",
                }),
                "Bridge"
            ),
            new Swaper()
        ),
        el("footer",
            el("a", "© Chain Horizon", {
                href: "https://chainhorizon.org",
                target: "_blank",
            })
        ),
    );
})();
