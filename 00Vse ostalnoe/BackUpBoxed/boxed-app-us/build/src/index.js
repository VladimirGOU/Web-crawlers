"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const gather_sdk_1 = require("@efundamentals/gather-sdk");
// import { category } from './operations';
const operations_1 = require("./operations");
const crawler = gather_sdk_1.ExpressCrawler.from({
    operations: [operations_1.detail],
});
exports.server = crawler.start();
//# sourceMappingURL=index.js.map