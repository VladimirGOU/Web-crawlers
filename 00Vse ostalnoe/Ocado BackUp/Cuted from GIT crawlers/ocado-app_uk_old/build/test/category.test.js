"use strict";
// import nock from 'nock';
// import { expect } from 'chai';
// import { GatherData } from '../src/schemas';
// import {
//   CategoryParams,
//   CrawlResult,
//   OperationType,
//   Task,
// } from '@efundamentals/gather-sdk';
// import { request } from './setup';
// describe('category', () => {
//   const task: Task<CategoryParams> = {
//     id: 'test',
//     crawler: 'test',
//     operation: OperationType.CATEGORY,
//     params: {
//       categoryId: 'test',
//     },
//   };
//   it('should get all data', async () => {
//     // stubbed gathered data
//     const gathered: GatherData = {
//       foo: 'bar',
//       bar: 123,
//     };
//     // make http api call to return stubbed gathered data
//     nock('https://API_URL_HERE').get('/SOME_PATH').reply(200, gathered);
//     // crawl task
//     const resp = await request()
//       .post('/task')
//       .query({ dryRun: true })
//       .send(task)
//       .expect(200);
//     const result: CrawlResult = resp.body;
//     // verify
//     expect(result.success).to.equal(true);
//     expect(result.stage.sku.data).to.deep.equal([
//       {
//         data: [],
//         page: 1,
//       },
//     ]);
//     // more checks ...
//   });
// });
//# sourceMappingURL=category.test.js.map