"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const config = {
    token: 'MTQzMjY5MzIzNjU5NzUyNjY3MQ.GH4tvD.UV3LCKvm21dmUH3fvfHVqKNtjc5fsjHeYjGOXM',
    clientId: '1432693236597526671',
    mongoUri: 'mongodb+srv://hama1200kk:1known01@cluster0.qzb2k.mongodb.net/?appName=Cluster0',
    defaultPrefix: '!',
    mainGuildId: '1432865113270124616',
    defaultLanguage: 'en',
    dashboard: {
        port: 10000,
        secret: '1knownxiter',
        callbackUrl: 'http://localhost:3000/auth/callback',
        auth: {
        enabled: true,
        username: "1knownxiter",
        password: "1known01"
        }
    }
};
function loadSettingsFile() {
    let settingsPath = (0, path_1.join)(__dirname, 'settings.json');
    if (!(0, fs_1.existsSync)(settingsPath)) {
        settingsPath = (0, path_1.join)(__dirname, 'settings.json');
        if (!(0, fs_1.existsSync)(settingsPath)) {
            settingsPath = (0, path_1.join)(process.cwd(), 'settings.json');
            if (!(0, fs_1.existsSync)(settingsPath)) {
                const defaultSettings = {
                    defaultLanguage: "en",
                    logs: {},
                    protection: {
                        enabled: true,
                        modules: {}
                    }
                };
                (0, fs_1.writeFileSync)(settingsPath, JSON.stringify(defaultSettings, null, 4), 'utf8');
                console.log(`Created default settings file at ${settingsPath}`);
                return defaultSettings;
            }
        }
    }
    try {
        console.log(`Loading settings from: ${settingsPath}`);
        const settings = JSON.parse((0, fs_1.readFileSync)(settingsPath, 'utf-8'));
        return settings;
    }
    catch (error) {
        console.error(`Error reading settings file: ${error}`);
        throw new Error('Failed to load settings.json file');
    }
}
const settings = loadSettingsFile();
exports.default = {
    ...config,
    ...settings,
    token: config.token,
    clientId: config.clientId,
    mongoUri: config.mongoUri,
    defaultPrefix: config.defaultPrefix,
    mainGuildId: config.mainGuildId,
    dashboard: config.dashboard
};
