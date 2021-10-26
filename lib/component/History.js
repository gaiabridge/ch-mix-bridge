"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class History extends skynode_1.DomNode {
    constructor() {
        super(".history");
        this.append((0, skynode_1.el)("h2", "전송 기록"));
    }
    load() {
    }
}
exports.default = History;
//# sourceMappingURL=History.js.map