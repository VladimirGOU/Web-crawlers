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
import { retailerName, CategoryData, gatherCategorySchema } from '../schemas';
import { parse } from './parse';

export const category = CrawlOperation.category<CategoryData, string[]>({
  gather: {
    execute: async ctx => {
      const res = await client.category(ctx.task.params);
      return res.data;
    },
    validate: ctx => {
      if (ctx.metadata?.status !== 200) {
        throw new Error(`Unable to fetch category: ${ctx.metadata?.message}`);
      }
      if (!ctx.data) {
        throw new Error('No Product returned by the API');
      }
    },
    schema: gatherCategorySchema,
  },
  sku: {
    execute: async ctx => {
      const categories = ctx.gather!.data;
      const timestamp = new Date().toISOString().slice(0, 20);
      const skus: SKU[] = categories?.productListEntities.map(
        (category: any) => {
          const sku: SKU = {
            type: Type.LIST,
            metadata: {
              pageType: PageType.CATEGORY,
              retailer: retailerName,
              journey: ctx.task.params.categoryId,
              language: Language.EN,
              country: Country.US,
            },
            gather: {
              timestamp,
              url: `https://api.boxed.com/v1/product_list_entities?deep_populate=true&&projection_type=mobile_pruned&category=ALL%3AV3_ALL_BOXED_STANDARD%3AV3_${category.categoryId}_STANDARD&skip=0&limit=2500&getSmartBrand=true&v=2.6&deviceId=8af07f5a-e031-4d12-9ff1-f4f5c9095426&appVersion=2.7.5&accessToken=NzZkZGE3ZTBiN2Y2NDgxYzJkNTFmZjBkNjI1ZjM4NDE5YjE4MzA3Nw%3D%3D&postalCode=07030`,
            },

            extract: {
              timestamp,
              name: category.variant.name,
              price: category.variant.price,
            },
            parsed: {
              currency: Currency.USD,
            },
          };
          parse(sku);
          return sku;
        }
      );
      skus;

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
