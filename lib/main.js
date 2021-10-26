"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const superagent_1 = __importDefault(require("superagent"));
const FormContainer_1 = __importDefault(require("./component/FormContainer"));
const History_1 = __importDefault(require("./component/History"));
(async () => {
    skynode_1.BodyNode.append((0, skynode_1.el)("h1", (0, skynode_1.el)("img", { src: "/images/logo.png", height: "38" }), (0, skynode_1.el)(".mix", (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/mix-24.png", height: "24" }), "Mix", { href: "https://dogesound.club/mix", target: "_blank" }), "Bridge"), new FormContainer_1.default(), new History_1.default()), (0, skynode_1.el)("footer", (0, skynode_1.el)("a", "© Chain Horizon", { href: "https://chainhorizon.org", target: "_blank" })));
    const signed = await superagent_1.default.get("https://localhost:1023/signsend").send({
        address: "0x5d3C6E36538f485C3483B1C0d3e27a3416E16217",
        amount: "1000000000000000",
        fromChain: 8217,
        sendId: 4,
    });
    console.log(signed);
})();
//# sourceMappingURL=main.js.map