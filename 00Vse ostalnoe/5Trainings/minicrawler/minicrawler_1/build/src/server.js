"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import Product from "./interfaces/product";
const detail_1 = __importDefault(require("../src/getir-app-us/actions/detail"));
const search_1 = __importDefault(require("./getir-app-us/actions/search"));
const express = require("express");
//const request = require("request");
const bodyParser = require("body-parser");
function default_1(port) {
    const app = express();
    app.use(bodyParser.json());
    app.get("/", (req, res) => {
        res.status(200).send("Shnyaga is running");
    });
    app.post("/task", async (req, res) => {
        try {
            console.log(req.body);
            if (req.body.operation == "search") {
                const s = await (0, search_1.default)(req.body.payload);
                res.json({ result: s });
            }
            if (req.body.operation == "detail") {
                const d = await (0, detail_1.default)(req.body.payload);
                res.json({ result: d });
            }
            else {
                res.json({ error: "error" });
            }
        }
        catch (error) {
            res.json({ error: error });
        }
    });
    app.listen(port, () => {
        console.log(`Listen on port ${port}`);
    });
    return app;
}
exports.default = default_1;
// const app = express();
// app.use(express.json());
// app.post('/task', (req, res) => {
//   if (req.body.operation === 'search'){
//     console.log('search')
//   }   
//   if (req.body.operation === 'detail'){
//     console.log('detail')
//   }
//  console.log(req.body);
//  res.send('ok');
// })
// export default app;
//# sourceMappingURL=server.js.map