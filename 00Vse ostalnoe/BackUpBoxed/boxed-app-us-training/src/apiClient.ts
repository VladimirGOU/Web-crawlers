import axios, { AxiosRequestConfig } from 'axios';
import { URL } from 'url';
import { HttpsProxyAgent } from 'hpagent';

const {
  PROXY_HOST,
  PROXY_PORT,
  PROXY_USER,
  PROXY_PASS,
  AXIOS_SOCKET_TIMEOUT = '1800000',
  TLS_SESSION_TIMEOUT_SECONDS = '120',
} = process.env;

const socketTimeout = parseInt(AXIOS_SOCKET_TIMEOUT, 10);

const createAgent = () => {
  const proxyURL = new URL(`http://${PROXY_HOST}:${PROXY_PORT}`);
  if (PROXY_USER && PROXY_PASS) {
    proxyURL.username = PROXY_USER;
    proxyURL.password = PROXY_PASS;
  }
  return new HttpsProxyAgent({
    keepAlive: true,
    rejectUnauthorized: false,
    maxCachedSessions: 512,
    maxFreeSockets: 512,
    timeout: socketTimeout,
    sessionTimeout: parseInt(TLS_SESSION_TIMEOUT_SECONDS, 10),
    proxy: proxyURL,
  });
};

export const agent = PROXY_HOST && PROXY_PORT ? createAgent() : undefined;

const client = axios.create({
  insecureHTTPParser: true,
  proxy: false,
  httpsAgent: agent,
  decompress: true,
  timeout: socketTimeout,
  validateStatus: null,
  responseType: 'json',
});

export async function search(searchQuery: any) {
  const config: any = {
    method: 'GET',
    url: `https://api.boxed.com/v1/product_list_entities/auto_complete?query=${searchQuery}}?`,
    headers: {
      'User-Agent':
        'Dalvik/2.1.0 (Linux; U; Android 12; sdk_gphone64_x86_64 Build/SE1A.220630.001)',
      Cookie:
        'datadome=5MtgLwtrgyVSPcIvMU6l7diSZ24tvyzwNfWHASVA8bS4xLhbXvvNejQwj4ATu59_k8J-PjFDuGcSmaGHiH4Ayo6BKeadYtmswFr~Xsxd2fC6haXCRJ_O_ntVhNCRH7Hg',
    },
  };

  return axios(config);
}
