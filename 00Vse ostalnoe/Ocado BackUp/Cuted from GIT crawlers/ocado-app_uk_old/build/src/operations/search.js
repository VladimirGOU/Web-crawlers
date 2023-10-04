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
exports.search = void 0;
const gather_sdk_1 = require("@efundamentals/gather-sdk");
const lodash_1 = require("lodash");
const client = __importStar(require("../apiClient"));
const schemas_1 = require("../schemas");
const parse_1 = require("./parse");
exports.search = gather_sdk_1.CrawlOperation.search({
    gather: {
        execute: async (ctx) => {
            const res = await client.search(ctx.task.params);
            // console.log(res.data);
            return res.data;
        },
        validate: async (ctx) => {
            var _a;
            if (ctx.data.productCount === null) {
                throw new Error(`No products in category: ${(_a = ctx.result) === null || _a === void 0 ? void 0 : _a.message}`);
            }
        },
        schema: schemas_1.gatherSearchShema,
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
        execute: async (ctx) => {
            const categories = ctx.gather.data.items.filter((s) => !!s.sku);
            console.log(categories);
            const timestamp = new Date().toISOString();
            const skus = categories.map((product) => {
                const sku = {
                    type: gather_sdk_1.Type.DETAIL,
                    metadata: {
                        pageType: gather_sdk_1.PageType.DETAIL,
                        retailer: schemas_1.retailerName,
                        journey: ctx.task.params.journey,
                        language: gather_sdk_1.Language.EN,
                        country: gather_sdk_1.Country.GB,
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
                        currency: gather_sdk_1.Currency.GBP,
                    },
                };
                (0, parse_1.parse)(sku);
                return sku;
            });
            const chunks = (0, lodash_1.chunk)(skus, 10);
            return chunks.map((data, page) => ({ data, page: page + 1 }));
        },
        schema: schemas_1.skuSchemas,
    },
});
//# sourceMappingURL=search.js.map