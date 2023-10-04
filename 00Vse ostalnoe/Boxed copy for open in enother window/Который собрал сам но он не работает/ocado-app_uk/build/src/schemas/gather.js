"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = exports.search = void 0;
const joi_1 = __importDefault(require("joi"));
const searchSchema = joi_1.default.object({
    data: joi_1.default
        .object({
        featured: joi_1.default
            .object({
            items: joi_1.default.array().items(joi_1.default
                .object({
                sku: joi_1.default.string(),
            })
                .unknown()),
        })
            .unknown(),
    })
        .unknown(),
});
const categorySchema = joi_1.default.object({});
const search = searchSchema;
exports.search = search;
const category = categorySchema;
exports.category = category;
//# sourceMappingURL=gather.js.map