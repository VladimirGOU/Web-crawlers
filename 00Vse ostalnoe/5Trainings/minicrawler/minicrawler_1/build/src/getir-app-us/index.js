"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = __importDefault(require("./actions/search"));
const detail_1 = __importDefault(require("./actions/detail"));
exports.default = {
    search: search_1.default,
    detail: detail_1.default
};
//# sourceMappingURL=index.js.map