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
    }), "Bridge"), new Swaper_1.default()), (0, skynode_1.el)("footer", (0, skynode_1.el)("a", "© Chain Horizon", {
        href: "https://chainhorizon.org",
        target: "_blank",
    })));
})();
//# sourceMappingURL=main.js.map