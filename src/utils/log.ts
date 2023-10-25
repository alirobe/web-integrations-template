import getSettings from "./settings";
import { serviceDefinition } from "../config/windows-service";

var EventLogger = require("node-windows").EventLogger;
var winLog = new EventLogger(serviceDefinition.name);
let windows = getSettings("SERVICE_TYPE") == "windows";

export function log(message: string, level: "info" | "warn" = "info") {
    if (level == "info") {
        console.info(message);
        if (windows) {
            winLog.info(message);
        }
    } else {
        console.log(message);
        if (windows) {
            winLog.warn(message);
        }
    }
}

export function report(error: Error) {
    console.error(error);
    if (windows) {
        winLog.error(error.message);
    }
}
