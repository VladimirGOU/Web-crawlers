import { HttpsProxyAgent } from 'hpagent';
import { DetailParams } from '@efundamentals/gather-sdk';
export declare const agent: HttpsProxyAgent | undefined;
export declare function detail(params: DetailParams): Promise<import("axios").AxiosResponse<any, any>>;
