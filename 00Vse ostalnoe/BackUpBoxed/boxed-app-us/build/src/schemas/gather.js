"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detail = void 0;
const joi_1 = __importDefault(require("joi"));
//Incorect schema
const detailSchema = joi_1.default.object({
    data: {
        product: joi_1.default
            .object({
            _id: joi_1.default.string().required(),
            variants: joi_1.default.array().items({
                _id: joi_1.default.string().required(),
                variant: joi_1.default
                    .object({
                    _id: joi_1.default.string().required(),
                    name: joi_1.default.string().required(),
                })
                    .unknown(),
                images: joi_1.default.array().items(joi_1.default
                    .object({
                    original: joi_1.default.string().required(),
                })
                    .unknown()),
            }),
        })
            .unknown(),
    },
    metadata: {
        status: joi_1.default.number().required(),
        message: joi_1.default.string().required(),
        correlationId: joi_1.default.string().required(),
    },
});
const detail = detailSchema;
exports.detail = detail;
//# sourceMappingURL=gather.js.map