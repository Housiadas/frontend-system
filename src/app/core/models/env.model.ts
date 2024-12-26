export interface EnvModel {
    production: boolean;
    version: string;
    serverUrl: string;
    appName: string;
    defaultLanguage: string;
    supportedLanguages: Array<string>;
}
