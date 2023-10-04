"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.category = void 0;
const joi_1 = __importDefault(require("joi"));
const categorySchema = joi_1.default.object({
    name: joi_1.default.required(),
});
const searchSchema = joi_1.default.object({
    data: joi_1.default.object({}).unknown(),
});
const category = categorySchema;
exports.category = category;
const search = searchSchema;
exports.search = search;
//# sourceMappingURL=gather.js.map