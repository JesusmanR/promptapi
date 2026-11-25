import { initTasks } from "../../features/tasks.js/index.js";
import { routers } from "./routers.js";

export function startRouter() {
    window.addEventListener("hashchange", (event) => {
        console.log(window.location.hash.replace(/^#\/?/, ""));
        //console.log(initTasks());
        console.log(routers);
    });
};