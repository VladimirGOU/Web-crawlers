import {
  CategoryParams,
  DetailParams,
  CrawlResult,
  OperationType,
  Page,
  Task,
} from '@efundamentals/gather-sdk';
import { SKU } from '@efundamentals/gather-sdk/build/src/sku';
import { expect } from 'chai';
import { request } from './setup';

describe('crawl', () => {
  it('detail', async () => {
    const task: Task<DetailParams> = {
      id: '123',
      crawler: 'test',
      operation: OperationType.DETAIL,
      params: {
        productNo: '123',
      },
    };
    const response = await request()
      .post('/task')
      .query({ dryRun: true })
      .send(task);
    const body: CrawlResult = response.body;
    // console.log(body);

    // verify response
    expect(response.statusCode).to.equal(200);
    const skuPages = body.stage.sku.data as Page<SKU[]>[];
    expect(skuPages.length).to.be.greaterThan(0);
    // more checks ...
  });
});
