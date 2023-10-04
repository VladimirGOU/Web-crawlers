import { CategoryParams, SearchParams } from '@efundamentals/gather-sdk';
import { HttpsProxyAgent } from 'hpagent';
export declare const agent: HttpsProxyAgent | undefined;
export declare function category(params: CategoryParams): Promise<import("axios").AxiosResponse<any, any>>;
export declare function search(params: SearchParams): Promise<import("axios").AxiosResponse<any, any>>;
