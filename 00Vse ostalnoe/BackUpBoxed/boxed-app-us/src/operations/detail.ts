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
import { gatherDetailSchema, DetailData } from '../schemas';

export interface DetailParams {
  journey: string;
  productNo: string;
}

export const detail: any = CrawlOperation.detail<DetailData, string[]>({
  gather: {
    execute: async ctx => {
      const res = await client.detail(ctx.task.params);
      return res.data;
    },
    validate: ctx => {
      if (ctx.metadata?.status !== 200) {
        throw new Error(`Unable to fetch detail: ${ctx.metadata?.message}`);
      }
      if (!ctx.data.product) {
        throw new Error('No Product returned by the API');
      }
    },
    schema: gatherDetailSchema,
  },
  sku: {
    execute: async ctx => {
      const product = ctx.gather!.data.product;
      const timestamp = new Date().toISOString();
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
