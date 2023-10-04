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
import { gatherSearchSchema, SearchData, retailerName } from '../schemas';
import { parse } from './parse';

export interface DetailParams {
  journey: string;
  productNo: string;
}

export const search = CrawlOperation.search<SearchData, string[]>({
  gather: {
    execute: async ctx => {
      const res = await client.search(ctx.task.params);
      return res.data;
    },
    validate: ctx => {
      if (ctx.metadata?.status !== 200) {
        throw new Error(`Unable to fetch search: ${ctx.metadata?.message}`);
      }
      if (!ctx.data) {
        throw new Error('No Product returned by the API');
      }
    },
    schema: gatherSearchSchema,
  },
  sku: {
    execute: async ctx => {
      const products = ctx.gather!.data;
      // console.log(products);
      const timestamp = new Date().toISOString().slice(0, 20);
      const skus: SKU[] = products?.productListEntities.map((product: any) => {
        const sku: SKU = {
          type: Type.LIST,
          metadata: {
            pageType: PageType.SEARCH,
            retailer: retailerName,
            journey: ctx.task.params.journey,
            language: Language.EN,
            country: Country.US,
          },
          gather: {
            timestamp,
            url: `https://api.boxed.com/v1/product_list_entities/auto_complete?query=${product.journey}&v=2.6&deviceId=8af07f5a-e031-4d12-9ff1-f4f5c9095426&appVersion=2.7.5&accessToken=NzZkZGE3ZTBiN2Y2NDgxYzJkNTFmZjBkNjI1ZjM4NDE5YjE4MzA3Nw%3D%3D&postalCode=07030`,
          },

          extract: {
            timestamp,
            name: product.name,
            brand: product.variantObject?.brandingText,
            description: product.variantObject?.longDescription,
            price: product.inventory?.map((x: any) => x.price),
          },
          parsed: {
            currency: Currency.USD,
          },
        };
        parse(sku);
        return sku;
      });

      return [
        {
          data: skus,
          page: 1,
        },
      ];
    },
  },
});
