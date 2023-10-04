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
import { gatherDetailSchema, DetailData, retailerName } from '../schemas';
import { parse } from './parse';

export interface DetailParams {
  journey: string;
  productNo: string;
}

export const detail = CrawlOperation.detail<DetailData, string[]>({
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
      const products = ctx.gather!.data.product;
      // console.log(products);
      const timestamp = new Date().toISOString().slice(0, 20);
      const skus: SKU[] = products?.variants.map((product: any) => {
        const sku: SKU = {
          type: Type.DETAIL,
          metadata: {
            pageType: PageType.DETAIL,
            retailer: retailerName,
            journey: ctx.task.params.productNo,
            language: Language.EN,
            country: Country.US,
          },
          gather: {
            timestamp,
            url: `https://api.boxed.com/v1/productByVariant/${products?._id}?v=2.6&deviceId=8af07f5a-e031-4d12-9ff1-f4f5c9095426&appVersion=2.7.5&accessToken=NzZkZGE3ZTBiN2Y2NDgxYzJkNTFmZjBkNjI1ZjM4NDE5YjE4MzA3Nw%3D%3D&postalCode=07030`,
          },

          extract: {
            timestamp,
            name: product.variant.name,
            price: product.variant.price,
            description: product.variant.longDescription,
            pricePerUnit: product.variant.unitPrice.toFixed(2), //Use parse file for this!
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
      // const result = [
      //   {
      //     data: [sku],
      //     page: 1,
      //   },
      // ];
      // console.log('It is a result ', result, sku);

      // return result;
    },
  },
});
