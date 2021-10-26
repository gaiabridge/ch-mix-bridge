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

    const signed = await superagent.get("https://localhost:1023/signsend").send({
        address: "0x5d3C6E36538f485C3483B1C0d3e27a3416E16217",
        amount: "1000000000000000",
        fromChain: 8217,
        sendId: 4,
    });
    console.log(signed);
})();
