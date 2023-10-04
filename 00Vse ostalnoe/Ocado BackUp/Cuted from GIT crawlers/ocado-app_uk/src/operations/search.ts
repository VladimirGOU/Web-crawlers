import {
  CrawlOperation,
  Type,
  PageType,
  Language,
  Country,
  Currency,
  // SearchParams,
} from '@efundamentals/gather-sdk';
import { SKU } from '@efundamentals/gather-sdk/build/src/sku';
import { chunk, sortBy } from 'lodash';
import * as client from '../apiClient';
import {
  SearchData,
  gatherSearchShema,
  retailerName,
  skuSchemas,
} from '../schemas';
import { Resource } from '../schemas/gather';
import { parse } from './parse';
//   import { fetchAndStoreImage } from './util';

export interface SearchParams {
  journey: string;
}

export const search = CrawlOperation.search<SearchData, Resource[]>({
  gather: {
    execute: async ctx => {
      const res = await client.search(ctx.task.params);
      // console.log(res.data);
      return res.data;
    },
    validate: async ctx => {
      if (ctx.data.productCount === null) {
        throw new Error(`No products in category: ${ctx.result?.message}`);
      }
    },
    schema: gatherSearchShema,
  },
  // resources: {
  //   execute: async ctx => {
  //     const products = ctx.gather?.data.products || [];
  //     return Promise.all(
  //       products.map(async (product: ProductData) => ({
  //         id: product.id,
  //         images: await Promise.all(
  //           product.picURLs.map(async (image: string) =>
  //             fetchAndStoreImage(retailerName, {
  //               url: image,
  //             })
  //           )
  //         ),
  //       }))
  //     );
  //   },
  // },

  sku: {
    execute: async ctx => {
      const categories = ctx.gather!.data.items.filter(
        (s: { sku: any }) => !!s.sku
      );
      console.log(categories);
      const timestamp = new Date().toISOString();
      const skus: SKU[] = categories.map((product: { description: any }) => {
        const sku: SKU = {
          type: Type.DETAIL,
          metadata: {
            pageType: PageType.DETAIL,
            retailer: retailerName,
            journey: ctx.task.params.journey,
            language: Language.EN,
            country: Country.GB,
          },
          gather: {
            timestamp,
            url: '',
          },
          extract: {
            timestamp,
            name: product.description,
          },
          parsed: {
            currency: Currency.GBP,
          },
        };
        parse(sku);
        return sku;
      });
      const chunks = chunk(skus, 10);
      return chunks.map((data, page) => ({ data, page: page + 1 }));
    },
    schema: skuSchemas,
  },
});
