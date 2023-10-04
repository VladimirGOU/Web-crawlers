"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grammar = exports.ExpressionsEngine = exports.fetchAndStoreImage = void 0;
const gather_sdk_1 = require("@efundamentals/gather-sdk");
Object.defineProperty(exports, "ExpressionsEngine", { enumerable: true, get: function () { return gather_sdk_1.ExpressionsEngine; } });
Object.defineProperty(exports, "Grammar", { enumerable: true, get: function () { return gather_sdk_1.Grammar; } });
//it is needed for tests as sdk fetchAndStore cannot be mocked
exports.fetchAndStoreImage = gather_sdk_1.fetchAndStore;
//# sourceMappingURL=util.js.map