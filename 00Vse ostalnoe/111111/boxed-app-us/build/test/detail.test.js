"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gather_sdk_1 = require("@efundamentals/gather-sdk");
const chai_1 = require("chai");
const nock_1 = __importDefault(require("nock"));
const detailRawDataExample_json_1 = __importDefault(require("./fixtures/detailRawDataExample.json"));
const setup_1 = require("./setup");
describe('crawl', () => {
    it('detail', async () => {
        // const gathered: GatherData = searchData
        // make http api call to return stubbed gathered data
        (0, nock_1.default)('https://api.boxed.com/v1/productByVariant')
            .get('/59a493eda462403c088511cd?v=2.6&deviceId=8af07f5a-e031-4d12-9ff1-f4f5c9095426&appVersion=2.7.5&accessToken=NzZkZGE3ZTBiN2Y2NDgxYzJkNTFmZjBkNjI1ZjM4NDE5YjE4MzA3Nw%3D%3D&postalCode=07030')
            .reply(200, detailRawDataExample_json_1.default);
        const [y, m, h] = new Date().toISOString().split(' T ', 2)[0].split('-', 3);
        const task = {
            id: '123',
            crawler: 'test',
            operation: gather_sdk_1.OperationType.DETAIL,
            params: {
                productNo: '59a493eda462403c088511cd',
            },
        };
        const response = await (0, setup_1.request)()
            .post('/task')
            .query({ dryRun: true })
            .send(task);
        const body = response.body;
        // verify response
        (0, chai_1.expect)(response.statusCode).to.equal(200);
        const skuPages = body.stage.sku.data;
        (0, chai_1.expect)(skuPages.length).to.be.greaterThan(0);
        const now = new Date();
        const timestamp = now.toISOString().slice(0, 20);
        const product = skuPages[0].data;
        (0, chai_1.expect)(product[0].metadata).to.deep.equal({
            country: 'US',
            language: 'en',
            retailer: 'Boxed-APP-US',
            pageType: 'detail',
            journey: '59a493eda462403c088511cd',
        });
        (0, chai_1.expect)(product[0].extract).to.deep.equal({
            name: ['Pepperidge Farm Herb Seasoned Stuffing'],
            price: [11.59],
            description: [
                "For holiday meals or everyday dinners, enjoy Pepperidge Farm stuffing- made from Pepperidge Farm's premium breads to create a gratifyingly delicious side dish!",
            ],
            productNo: ['59a493eda462403c088511cd'],
            pricePerUnit: ['0.24'],
            timestamp: timestamp,
        });
    });
});
//# sourceMappingURL=detail.test.js.map