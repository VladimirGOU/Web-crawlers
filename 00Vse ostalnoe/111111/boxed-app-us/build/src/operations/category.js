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
            return res.data;
        },
        validate: ctx => {
            var _a, _b;
            if (((_a = ctx.metadata) === null || _a === void 0 ? void 0 : _a.status) !== 200) {
                throw new Error(`Unable to fetch category: ${(_b = ctx.metadata) === null || _b === void 0 ? void 0 : _b.message}`);
            }
            if (!ctx.data) {
                throw new Error('No Product returned by the API');
            }
        },
        schema: schemas_1.gatherCategorySchema,
    },
    sku: {
        execute: async (ctx) => {
            const categories = ctx.gather.data;
            const timestamp = new Date().toISOString().slice(0, 20);
            const skus = categories === null || categories === void 0 ? void 0 : categories.productListEntities.map((category) => {
                const sku = {
                    type: gather_sdk_1.Type.LIST,
                    metadata: {
                        pageType: gather_sdk_1.PageType.CATEGORY,
                        retailer: schemas_1.retailerName,
                        journey: ctx.task.params.categoryId,
                        language: gather_sdk_1.Language.EN,
                        country: gather_sdk_1.Country.US,
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
                        currency: gather_sdk_1.Currency.USD,
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
//# sourceMappingURL=category.js.map