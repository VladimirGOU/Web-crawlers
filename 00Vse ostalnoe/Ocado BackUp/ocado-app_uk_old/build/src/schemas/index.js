"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skuSchemas = exports.gatherSearchShema = exports.gatherCategorySchema = exports.retailerName = void 0;
exports.retailerName = 'Ocado-APP_UK';
var gather_1 = require("./gather");
Object.defineProperty(exports, "gatherCategorySchema", { enumerable: true, get: function () { return gather_1.category; } });
var gather_2 = require("./gather");
Object.defineProperty(exports, "gatherSearchShema", { enumerable: true, get: function () { return gather_2.search; } });
var extract_1 = require("./extract");
Object.defineProperty(exports, "skuSchemas", { enumerable: true, get: function () { return extract_1.schemas; } });
//# sourceMappingURL=index.js.map