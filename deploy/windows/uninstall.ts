// @ts-ignore
import { service, serviceDefinition } from "../../src/config/windows-service";

service.on("uninstall", () => {
    console.log("Uninstall complete.");
    console.log(`The service '${serviceDefinition.name}' exists ${service.exists}`);
});

service.uninstall();
