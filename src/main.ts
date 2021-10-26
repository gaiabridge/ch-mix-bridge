import { BodyNode, el } from "@hanul/skynode";
import superagent from "superagent";
import FormContainer from "./component/FormContainer";
import History from "./component/History";

(async () => {
    BodyNode.append(
        el("h1",
            el("img", { src: "/images/logo.png", height: "38" }),
            el(".mix",
                el("a",
                    el("img", { src: "/images/mix-24.png", height: "24" }),
                    "Mix",
                    { href: "https://dogesound.club/mix", target: "_blank" },
                ),
                "Bridge",
            ),
            new FormContainer(),
            new History(),
        ),
        el("footer", el("a", "© Chain Horizon", { href: "https://chainhorizon.org", target: "_blank" })),
    );
})();
