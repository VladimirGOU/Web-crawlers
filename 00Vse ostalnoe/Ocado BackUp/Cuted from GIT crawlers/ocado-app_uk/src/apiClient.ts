import {
  CategoryParams,
  HttpFlow,
  SearchParams,
} from '@efundamentals/gather-sdk';
import axios, { AxiosRequestConfig } from 'axios';
import { HttpsProxyAgent } from 'hpagent';
import { ClientRequest } from 'http';
import { URL } from 'url';
import { CategoryData } from './schemas/gather';

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

export async function category(params: CategoryParams) {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `https://mobile.ocado.com/webservices/catalogue/browse?productListOffset=0&path=CATALOGUE%7C${params.categoryId}&showProductLimit=1500&featuredItemsSize=4&hfssFilter=false`,
    headers: {
      Authorization: 'token:8c98a70a2e085a7fd997e76977457c38',
      Cookie:
        'TS0176a16d=01537f3e8d564a331b7759367fbf0eec5589b441cffa4b0ca9f9d8b7bde31dc9f1954cb8a2020f9009f938e0d2637c2c65229424c7',
    },
  };

  return axios(config);
}

export const getAllData = async (extra: AxiosRequestConfig = {}) => {
  const url = 'https://API_URL_HERE/SOME_PATH';
  const resp = await client.get<CategoryData>(url, {
    ...extra,
    responseType: 'json',
    validateStatus: null,
  });
  const req: ClientRequest = resp.request;
  const output: HttpFlow<CategoryData> = {
    response: {
      status: resp.status,
      statusText: resp.statusText,
      headers: resp.headers,
      data: resp.data,
    },
    request: {
      method: req.method,
      protocol: req.protocol,
      host: req.host,
      path: req.path,
      headers: req.getHeaders(),
    },
  };
  return output;
};

export async function search(params: SearchParams) {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `https://mobile.ocado.com/webservices/products?search=${params.journey}&type=text&maxPageSize=0&featuredItemsSize=4`,
    headers: {
      Authorization: 'token:8c98a70a2e085a7fd997e76977457c38',
    },
  };

  return axios(config);

  // throw new Error('Function not implemented.');
}
