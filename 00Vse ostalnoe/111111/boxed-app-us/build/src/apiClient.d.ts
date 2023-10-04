import { HttpsProxyAgent } from 'hpagent';
import { CategoryParams, DetailParams, SearchParams } from '@efundamentals/gather-sdk';
export declare const agent: HttpsProxyAgent | undefined;
export declare function detail(params: DetailParams): Promise<import("axios").AxiosResponse<any, any>>;
export declare function search(params: SearchParams): Promise<import("axios").AxiosResponse<any, any>>;
export declare function category(params: CategoryParams): Promise<import("axios").AxiosResponse<any, any>>;
