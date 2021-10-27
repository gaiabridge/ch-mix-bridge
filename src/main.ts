import { BodyNode, el } from "@hanul/skynode";
import Swaper from "./component/Swaper";

(async () => {
  BodyNode.append(
    el(
      "h1",
      el(".logo", "Chain Horizon", { href: "/" }),
      el(
        ".mix",
        el("a", "Mix", {
          href: "https://dogesound.club/mix",
          target: "_blank",
        }),
        "Bridge"
      ),
      new Swaper()
    ),
    el(
      "footer",
      el("a", "© Chain Horizon", {
        href: "https://chainhorizon.org",
        target: "_blank",
      }),
      el(
        ".social",
        el(
          "a.item",
          el("img", "github", {
            src: "/images/github.png",
            height: "32",
          }),
          {
            href: "https://github.com/chainhorizon",
            target: "_blank",
          }
        ),
        el(
          "a.item",
          el("img", "medium", { src: "/images/medium.png", height: "32" }),
          {
            href: "https://medium.com/chainhorizon",
            target: "_blank",
          }
        ),
        el(
          "a.item",
          el("img", "twitter", {
            src: "/images/twitter.png",
            height: "32",
          }),
          {
            href: "https://chainhorizon.org",
            target: "_blank",
          }
        )
      )
    )
  );
})();
