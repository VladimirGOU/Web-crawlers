"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const joi_1 = __importDefault(require("joi"));
const searchSchema = joi_1.default.object({
    metadata: {
        status: joi_1.default.number().required(),
        message: joi_1.default.string().required(),
    },
    data: {
        webSlugConfigs: joi_1.default.array().items(joi_1.default.object({}).unknown()),
        productListEntities: joi_1.default.array().items(joi_1.default
            .object({
            variant: joi_1.default.string(),
            variantObject: joi_1.default
                .object({
                _id: joi_1.default.string().required(),
                name: joi_1.default.string().required(),
                price: joi_1.default.number().required(),
            })
                .unknown(),
            images: joi_1.default.array().items(joi_1.default
                .object({
                original: joi_1.default.string().required(),
            })
                .unknown()),
        })
            .unknown()),
    },
});
const search = searchSchema;
exports.search = search;
//# sourceMappingURL=gather.js.map