"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
const gather_sdk_1 = require("@efundamentals/gather-sdk");
const client = __importStar(require("../apiClient"));
const schemas_1 = require("../schemas");
const parse_1 = require("./parse");
exports.category = gather_sdk_1.CrawlOperation.category({
    gather: {
        execute: async (ctx) => {
            const res = await client.category(ctx.task.params);
            console.log(res.data);
            /////Retriving data
            return res.data;
        },
        validate: ctx => {
            if (ctx.data.productCount === null) {
                throw new Error('Unable to fetch category');
            }
        },
        schema: schemas_1.gatherCategorySchema,
    },
    sku: {
        execute: async (ctx) => {
            const categories = ctx.gather.data || [];
            const timestamp = new Date().toISOString().slice(0, 20);
            const skus = categories.categoryProducts.results.map((product) => {
                console.log(categories);
                const sku = {
                    type: gather_sdk_1.Type.LIST,
                    metadata: {
                        pageType: gather_sdk_1.PageType.CATEGORY,
                        retailer: schemas_1.retailerName,
                        journey: ctx.task.params.categoryId,
                        language: gather_sdk_1.Language.PL,
                        country: gather_sdk_1.Country.PL,
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
                        currency: gather_sdk_1.Currency.EUR,
                    },
                };
                (0, parse_1.parse)(sku);
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
//# sourceMappingURL=category.js.map