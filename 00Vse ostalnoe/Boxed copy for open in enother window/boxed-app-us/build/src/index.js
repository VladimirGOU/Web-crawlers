"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const gather_sdk_1 = require("@efundamentals/gather-sdk");
const operations_1 = require("./operations");
const operations_2 = require("./operations");
const operations_3 = require("./operations");
const crawler = gather_sdk_1.ExpressCrawler.from({
    operations: [operations_2.detail, operations_1.category, operations_3.search],
});
exports.server = crawler.start();
//# sourceMappingURL=index.js.map