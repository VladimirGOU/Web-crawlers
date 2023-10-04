"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gather_sdk_1 = require("@efundamentals/gather-sdk");
const chai_1 = require("chai");
const setup_1 = require("./setup");
describe('crawl', () => {
    it('category', async () => {
        const task = {
            id: '123',
            crawler: 'test',
            operation: gather_sdk_1.OperationType.CATEGORY,
            params: {
                categoryId: '123',
            },
        };
        const response = await (0, setup_1.request)()
            .post('/task')
            .query({ dryRun: true })
            .send(task);
        const body = response.body;
        // console.log(body);
        // verify response
        (0, chai_1.expect)(response.statusCode).to.equal(200);
        const skuPages = body.stage.sku.data;
        (0, chai_1.expect)(skuPages.length).to.be.greaterThan(0);
        // more checks ...
    });
});
//# sourceMappingURL=crawl.spec.js.map