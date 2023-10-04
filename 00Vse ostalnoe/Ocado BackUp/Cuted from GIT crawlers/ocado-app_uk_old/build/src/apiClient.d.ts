import { CategoryParams, HttpFlow, SearchParams } from '@efundamentals/gather-sdk';
import { AxiosRequestConfig } from 'axios';
import { HttpsProxyAgent } from 'hpagent';
import { CategoryData } from './schemas/gather';
export declare const agent: HttpsProxyAgent | undefined;
export declare function category(params: CategoryParams): Promise<import("axios").AxiosResponse<any, any>>;
export declare const getAllData: (extra?: AxiosRequestConfig) => Promise<HttpFlow<CategoryData>>;
export declare function search(params: SearchParams): Promise<import("axios").AxiosResponse<any, any>>;
