import { SkyRouter } from "skyrouter";
import msg from "msg.js";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Home from "./view/Home";
import Layout from "./view/Layout";

(async () => {

    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();