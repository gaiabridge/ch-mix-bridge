import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import Swaper from "../component/Swaper";

export default class Home implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "MIX";
        Layout.current.content.append(
            this.container = el("section.home-view",
                new Swaper(),
            ),
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }

}