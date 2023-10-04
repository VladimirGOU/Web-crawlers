"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
const gather_sdk_1 = require("@efundamentals/gather-sdk");
const apiClient_1 = require("../apiClient");
const schemas_1 = require("../schemas");
exports.category = gather_sdk_1.CrawlOperation.category({
    gather: {
        execute: ctx => {
            // gather data
            return (0, apiClient_1.getAllData)({ signal: ctx.signal });
        },
        schema: schemas_1.gatherSchema,
    },
    sku: {
        execute: () => {
            // const data = ctx.gather!.response.data;
            // create sku pages from gathered data
            const skus = [];
            return [
                {
                    data: skus,
                    page: 1,
                },
            ];
        },
        schema: schemas_1.skuSchemas,
    },
});
//# sourceMappingURL=category.js.map