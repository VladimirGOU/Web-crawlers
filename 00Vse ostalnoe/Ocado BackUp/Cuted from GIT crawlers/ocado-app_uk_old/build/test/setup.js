"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../src/index");
after(done => index_1.server.close(done));
const request = () => (0, supertest_1.default)(index_1.server);
exports.request = request;
//# sourceMappingURL=setup.js.map