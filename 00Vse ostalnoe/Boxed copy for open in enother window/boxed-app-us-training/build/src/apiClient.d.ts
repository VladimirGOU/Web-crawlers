import { HttpsProxyAgent } from 'hpagent';
import { SearchParams } from '@efundamentals/gather-sdk';
export declare const agent: HttpsProxyAgent | undefined;
export declare function search(params: SearchParams): Promise<import("axios").AxiosResponse<any, any>>;
