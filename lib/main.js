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
    }), "Bridge")), (0, skynode_1.el)(".warning", "🚨 브릿지를 이용하기 위해서는 양쪽 체인에 가스비가 필요합니다."), (0, skynode_1.el)(".warning", "🚨 한번 전송이 시작되면 돌이킬 수 없습니다. 취소가 불가능합니다."), new Swaper_1.default(), (0, skynode_1.el)("footer", (0, skynode_1.el)("a", "© Chain Horizon", {
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