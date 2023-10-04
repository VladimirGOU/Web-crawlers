import {
  CrawlOperation,
  Type,
  PageType,
  Language,
  Country,
  Currency,
} from '@efundamentals/gather-sdk';
import { SKU } from '@efundamentals/gather-sdk/build/src/sku';
import * as client from '../apiClient';
import { gatherSearchSchema, SearchData } from '../schemas';

export interface DetailParams {
  journey: string;
  productNo: string;
}

export const detail: any = CrawlOperation.detail<SearchData, string[]>({
  gather: {
    execute: async ctx => {
      const res = await client.search(ctx.task.params);
      return res.data;
    },
    validate: ctx => {
      if (ctx.metadata?.status !== 200) {
        throw new Error(`Unable to fetch detail: ${ctx.metadata?.message}`);
      }
    },
    schema: gatherSearchSchema,
  },
  sku: {
    execute: async ctx => {
      const sku: SKU[] = [];

      return [
        {
          data: sku,
          page: 1,
        },
      ];
    },
  },
});
