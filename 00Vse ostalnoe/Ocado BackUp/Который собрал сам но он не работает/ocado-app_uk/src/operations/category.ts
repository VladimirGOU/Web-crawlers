import {
  CrawlOperation,
  Country,
  Currency,
  Language,
  PageType,
  SKU,
  Type,
} from '@efundamentals/gather-sdk';
import * as client from '../apiClient';
import { CategoryData, gatherCategorySchema, retailerName } from '../schemas';
import { parse } from './parse';

export const category = CrawlOperation.category<CategoryData>({
  gather: {
    execute: async ctx => {
      const res = await client.category(ctx.task.params);
      console.log(res.data);
      /////Retriving data
      return res.data;
    },
    validate: ctx => {
      if (ctx.data === null) {
        throw new Error('Unable to fetch category');
      }
    },
    schema: gatherCategorySchema,
  },
  sku: {
    execute: async ctx => {
      const categories = ctx.gather!.data || [];
      const timestamp = new Date().toISOString().slice(0, 20);
      const skus: SKU[] = categories.map((product: any) => {
        console.log(categories);
        const sku: SKU = {
          type: Type.LIST,
          metadata: {
            pageType: PageType.CATEGORY,
            retailer: retailerName,
            journey: ctx.task.params.categoryId,
            language: Language.PL,
            country: Country.PL,
          },
          gather: {
            timestamp,
            url: 'https://mobile.ocado.com/webservices/catalogue/browse?productListOffset=0&path=CATALOGUE%7C342583&showProductLimit=1500&featuredItemsSize=4&hfssFilter=false', //'https://api.prod.lait.app/',
          },
          extract: {
            timestamp,
            name: product.name,
            price: product.price.value.centAmount,
          },
          parsed: {
            currency: Currency.EUR,
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

// resources: {
//   execute: async ctx => {
//     const products = ctx.gather?.data.products.edges || [];
//     const resources = <Resource[]>[];
//     await Promise.all(
//       products.map(async product => {
//         const img = await imgUtil.fetchAndStoreImage(retailerName, {
//           url: `https:${product.node.image}`,
//         });
//         resources.push({
//           id: product.node.id,
//           images: [img],
//         });
//       })
//     );

//     return resources;
//   },
// },
