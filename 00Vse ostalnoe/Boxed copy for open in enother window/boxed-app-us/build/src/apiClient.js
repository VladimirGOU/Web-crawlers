"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = exports.search = exports.detail = exports.agent = void 0;
const axios_1 = __importDefault(require("axios"));
const hpagent_1 = require("hpagent");
const url_1 = require("url");
const { PROXY_HOST, PROXY_PORT, PROXY_USER, PROXY_PASS, AXIOS_SOCKET_TIMEOUT = '1800000', TLS_SESSION_TIMEOUT_SECONDS = '120', } = process.env;
const socketTimeout = parseInt(AXIOS_SOCKET_TIMEOUT, 10);
const createAgent = () => {
    const proxyURL = new url_1.URL(`http://${PROXY_HOST}:${PROXY_PORT}`);
    if (PROXY_USER && PROXY_PASS) {
        proxyURL.username = PROXY_USER;
        proxyURL.password = PROXY_PASS;
    }
    return new hpagent_1.HttpsProxyAgent({
        keepAlive: true,
        rejectUnauthorized: false,
        maxCachedSessions: 512,
        maxFreeSockets: 512,
        timeout: socketTimeout,
        sessionTimeout: parseInt(TLS_SESSION_TIMEOUT_SECONDS, 10),
        proxy: proxyURL,
    });
};
exports.agent = PROXY_HOST && PROXY_PORT ? createAgent() : undefined;
const client = axios_1.default.create({
    insecureHTTPParser: true,
    proxy: false,
    httpsAgent: exports.agent,
    decompress: true,
    timeout: socketTimeout,
    validateStatus: null,
    responseType: 'json',
});
//Detail Tomasz task
//
async function detail(params) {
    const config = {
        method: 'GET',
        url: `https://api.boxed.com/v1/productByVariant/${params.productNo}?v=2.6&deviceId=8af07f5a-e031-4d12-9ff1-f4f5c9095426&appVersion=2.7.5&&accessToken=NzZkZGE3ZTBiN2Y2NDgxYzJkNTFmZjBkNjI1ZjM4NDE5YjE4MzA3Nw%3D%3D&postalCode=07030`,
        headers: {
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 12; sdk_gphone64_x86_64 Build/SE1A.220630.001)',
            Cookie: 'datadome=21pOst1kNqy_nSzohklLaN3z2VGnAAe8rRw_qEHig7SrdRy0ItCXIMdyhAcIybczETKCth7tbwDR0sbkl0kda-WJEEZapRpU-mSF7CW4C26eT6rXJGEhFi8FMpKls-4H',
        },
    };
    return (0, axios_1.default)(config);
}
exports.detail = detail;
//Search for Vova
async function search(params) {
    const config = {
        method: 'GET',
        url: `https://api.boxed.com/v1/product_list_entities/auto_complete?query=${params.journey}&v=2.6&deviceId=8af07f5a-e031-4d12-9ff1-f4f5c9095426&appVersion=2.7.5&accessToken=NzZkZGE3ZTBiN2Y2NDgxYzJkNTFmZjBkNjI1ZjM4NDE5YjE4MzA3Nw%3D%3D&postalCode=07030`,
        headers: {
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 12; sdk_gphone64_x86_64 Build/SE1A.220630.001)',
            Cookie: 'datadome=21pOst1kNqy_nSzohklLaN3z2VGnAAe8rRw_qEHig7SrdRy0ItCXIMdyhAcIybczETKCth7tbwDR0sbkl0kda-WJEEZapRpU-mSF7CW4C26eT6rXJGEhFi8FMpKls-4H',
        },
    };
    return (0, axios_1.default)(config);
}
exports.search = search;
//Category for Celia
async function category(params) {
    const config = {
        method: 'GET',
        url: `https://api.boxed.com/v1/product_list_entities?deep_populate=true&&projection_type=mobile_pruned&category=ALL%3AV3_ALL_BOXED_STANDARD%3AV3_${params.categoryId}_STANDARD&skip=0&limit=2500&getSmartBrand=true&v=2.6&deviceId=8af07f5a-e031-4d12-9ff1-f4f5c9095426&appVersion=2.7.5&accessToken=NzZkZGE3ZTBiN2Y2NDgxYzJkNTFmZjBkNjI1ZjM4NDE5YjE4MzA3Nw%3D%3D&postalCode=07030`,
        headers: {
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 12; sdk_gphone64_x86_64 Build/SE1A.220630.001)',
            Cookie: 'datadome=21pOst1kNqy_nSzohklLaN3z2VGnAAe8rRw_qEHig7SrdRy0ItCXIMdyhAcIybczETKCth7tbwDR0sbkl0kda-WJEEZapRpU-mSF7CW4C26eT6rXJGEhFi8FMpKls-4H',
        },
    };
    return (0, axios_1.default)(config);
}
exports.category = category;
//# sourceMappingURL=apiClient.js.map