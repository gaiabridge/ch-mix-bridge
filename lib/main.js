"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Swaper_1 = __importDefault(require("./component/Swaper"));
(async () => {
    skynode_1.BodyNode.append((0, skynode_1.el)("h1", (0, skynode_1.el)(".logo", "Chain Horizon", { href: "/" }), (0, skynode_1.el)(".mix", (0, skynode_1.el)("a", "Mix", {
        href: "https://dogesound.club/mix",
        target: "_blank",
    }), "Bridge")), (0, skynode_1.el)(".warning", "π¨ λΈλ¦Ώμ§λ₯Ό μ΄μ©νκΈ° μν΄μλ μμͺ½ μ²΄μΈμ κ°μ€λΉκ° νμν©λλ€.\nπ¨ νλ² μ μ‘μ΄ μμλλ©΄ λμ΄ν¬ μ μμ΅λλ€. μ·¨μκ° λΆκ°λ₯ν©λλ€."), new Swaper_1.default(), (0, skynode_1.el)("footer", (0, skynode_1.el)("a", "Β© Chain Horizon", {
        href: "https://chainhorizon.org",
        target: "_blank",
    }), (0, skynode_1.el)(".social", (0, skynode_1.el)("a.item", (0, skynode_1.el)("img", "github", {
        src: "/images/github.png",
        height: "32",
    }), {
        href: "https://github.com/chainhorizon",
        target: "_blank",
    }), (0, skynode_1.el)("a.item", (0, skynode_1.el)("img", "medium", { src: "/images/medium.png", height: "32" }), {
        href: "https://medium.com/chainhorizon",
        target: "_blank",
    }), (0, skynode_1.el)("a.item", (0, skynode_1.el)("img", "twitter", {
        src: "/images/twitter.png",
        height: "32",
    }), {
        href: "https://chainhorizon.org",
        target: "_blank",
    }))));
})();
//# sourceMappingURL=main.js.map