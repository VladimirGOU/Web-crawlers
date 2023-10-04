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
exports.detail = void 0;
const gather_sdk_1 = require("@efundamentals/gather-sdk");
const client = __importStar(require("../apiClient"));
const schemas_1 = require("../schemas");
exports.detail = gather_sdk_1.CrawlOperation.detail({
    gather: {
        execute: async (ctx) => {
            const res = await client.detail(ctx.task.params);
            return res.data;
        },
        validate: ctx => {
            var _a, _b;
            if (((_a = ctx.metadata) === null || _a === void 0 ? void 0 : _a.status) !== 200) {
                throw new Error(`Unable to fetch detail: ${(_b = ctx.metadata) === null || _b === void 0 ? void 0 : _b.message}`);
            }
            if (!ctx.data.product) {
                throw new Error('No Product returned by the API');
            }
        },
        schema: schemas_1.gatherDetailSchema,
    },
    sku: {
        execute: async (ctx) => {
            const product = ctx.gather.data.product;
            const timestamp = new Date().toISOString();
            const sku = [];
            return [
                {
                    data: sku,
                    page: 1,
                },
            ];
        },
    },
});
//# sourceMappingURL=detail.js.map