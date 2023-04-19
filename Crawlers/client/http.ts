import axios from 'axios';
import { HttpsProxyAgent } from 'hpagent';
import { URL } from 'url';

const {
  PROXY_HOST,
  PROXY_PORT,
  PROXY_USER,
  PROXY_PASS,
  AXIOS_SOCKET_TIMEOUT = '1800000',
  TLS_SESSION_TIMEOUT_SECONDS = '120',
} = process.env;

export const socketTimeout = parseInt(AXIOS_SOCKET_TIMEOUT, 10);

const createProxy = () => {
  // Base URL
  const proxyURL = new URL(`http://${PROXY_HOST}:${PROXY_PORT}`);

  // Set user and pass if needed
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

export const client = axios.create({
  insecureHTTPParser: true,
  proxy: false,
  httpsAgent: PROXY_HOST && PROXY_PORT ? createProxy() : undefined,
  decompress: true,
  timeout: socketTimeout,
  validateStatus: null,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
  },
});
