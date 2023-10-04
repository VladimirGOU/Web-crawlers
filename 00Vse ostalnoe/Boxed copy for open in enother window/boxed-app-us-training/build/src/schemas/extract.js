"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const sku_1 = require("@efundamentals/gather-sdk/build/src/sku");
const joi_1 = __importDefault(require("joi"));
const index_1 = require("./index");
const custom = joi_1.default
    .object({
    metadata: joi_1.default
        .object({
        retailer: index_1.retailerName,
        journey: joi_1.default.string().valid(joi_1.default.ref('$task.params.journey')),
        storeNo: joi_1.default.string().valid(joi_1.default.ref('$task.params.storeNo')),
        language: sku_1.Language.EN,
        country: sku_1.Country.US,
    })
        .unknown(),
    extract: joi_1.default
        .object({
        price: joi_1.default.string().pattern(/^\$\d+(\.\d+)?$/),
        pricePerUnit: joi_1.default.string().pattern(/^\$\d+(\.\d+)?\/.+$/),
        productNo: joi_1.default
            .string()
            .pattern(/^\d+$/)
            .required()
            .when('..type', {
            is: sku_1.Type.DETAIL,
            then: joi_1.default.string().valid(joi_1.default.ref('$task.params.productNo')),
        }),
    })
        .unknown(),
    parsed: joi_1.default
        .object({
        currency: sku_1.Currency.USD,
    })
        .unknown(),
})
    .unknown();
const skuPagesSchemas = (schemas) => {
    return schemas.map(s => {
        return joi_1.default
            .array()
            .items(joi_1.default.object({
            data: joi_1.default.array().items(s).required(),
            page: joi_1.default.number().min(1).required(),
        }))
            .min(1)
            .required();
    });
};
exports.schemas = skuPagesSchemas([sku_1.skuSchema, custom]);
//# sourceMappingURL=extract.js.map