import { Service } from "node-windows";
import * as path from "path";

export const serviceDefinition = {
    name: "Node Service - Web Integrations Template",
    description: "The Description for your Windows Service",
    script: path.join(__dirname, "..\\..\\node_modules\\nodemon\\bin\\nodemon.js"),
};
export const service = new Service(serviceDefinition);
