let settings: any = {};
try {
    settings = require("../../local.settings.json");
} catch (err) {
    settings = { Values: false };
}

export default function getSettings(key: string, defaultValue?: any) {
    if (settings.Values && settings.Values[key] !== undefined) {
        return settings.Values[key];
    } else if (process.env[key] !== undefined) {
        return process.env[key];
    } else if (defaultValue) {
        return defaultValue;
    } else {
        throw `${key} not set`;
    }
}
