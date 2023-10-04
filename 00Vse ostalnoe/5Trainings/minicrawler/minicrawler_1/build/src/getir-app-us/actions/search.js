"use strict";
// import Product from "../../interfaces/product";
// import axios from "axios";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function search(keyword) {
    const data = JSON.stringify({
        keyword: "water",
    });
    const config = {
        method: "post",
        url: "https://getirx-client-api-gateway.getirapi.com/search",
        headers: {
            token: "16667891040432fcba7023f3a62b60973ad71307010ccf867d14327b2d4d432fbef39475a2437",
            "Content-Type": "application/json",
        },
        data: { keyword },
    };
    const response = await (0, axios_1.default)(config);
    // console.log(JSON.stringify(response.data, null, 2));
    return response.data.data.products.map((product) => ({
        id: product.id,
        name: product.name,
    }));
}
exports.default = search;
//# sourceMappingURL=search.js.map