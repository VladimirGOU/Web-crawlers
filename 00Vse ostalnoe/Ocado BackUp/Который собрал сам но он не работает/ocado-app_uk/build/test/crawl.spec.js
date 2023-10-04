"use strict";
// import {
//   CategoryParams,
//   CrawlResult,
//   OperationType,
//   Page,
//   Task,
// } from '@efundamentals/gather-sdk';
// import { SKU } from '@efundamentals/gather-sdk/build/src/sku';
// import { expect } from 'chai';
// import { request } from './setup';
// describe('crawl', () => {
//   it('category', async () => {
//     const task: Task<CategoryParams> = {
//       id: '123',
//       crawler: 'test',
//       operation: OperationType.CATEGORY,
//       params: {
//         categoryId: '123',
//       },
//     };
//     const response = await request()
//       .post('/task')
//       .query({ dryRun: true })
//       .send(task);
//     const body: CrawlResult = response.body;
//     // console.log(body);
//     // verify response
//     expect(response.statusCode).to.equal(200);
//     const skuPages = body.stage.sku.data as Page<SKU[]>[];
//     expect(skuPages.length).to.be.greaterThan(0);
//     // more checks ...
//   });
// });
//# sourceMappingURL=crawl.spec.js.map