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
                "Bridge",
            ),
        ),
        el(".warning", "브릿지를 이용하기 위해서는 양쪽 체인에 가스비가 필요합니다."),
        new Swaper(),
        el("footer",
            el("a", "© Chain Horizon", {
                href: "https://chainhorizon.org",
                target: "_blank",
            }),
        ),
    );
})();
