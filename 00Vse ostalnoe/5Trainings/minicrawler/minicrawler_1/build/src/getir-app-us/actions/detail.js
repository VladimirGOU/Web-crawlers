"use strict";
// import Product from "../../interfaces/product";
// import axios from "axios";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function detail(productid) {
    const config = {
        method: "get",
        url: `https://getirx-client-api-gateway.getirapi.com/products/${productid}`,
        headers: {
            token: "1667203609100f8feb35fe6784c0a5766adddd29d57087dc31a2892daf44f1a5b3db2c16874e9",
            "content-type": "application/json",
        },
    };
    const response = await (0, axios_1.default)(config);
    // console.log(JSON.stringify(response.data.data.product.name, null, 2));
    return response.data.data.product.name;
}
exports.default = detail;
//# sourceMappingURL=detail.js.map