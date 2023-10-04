import {
  CrawlResult,
  DetailParams,
  OperationType,
  Page,
  Task,
} from '@efundamentals/gather-sdk';
import { SKU } from '@efundamentals/gather-sdk/build/src/sku';
import { expect } from 'chai';
import nock from 'nock';
import detailData from './fixtures/detailRawDataExample.json';
import { request } from './setup';

describe('crawl', () => {
  it('detail', async () => {
    // const gathered: GatherData = searchData
    // make http api call to return stubbed gathered data
    nock('https://api.boxed.com/v1/productByVariant')
      .get(
        '/59a493eda462403c088511cd?v=2.6&deviceId=8af07f5a-e031-4d12-9ff1-f4f5c9095426&appVersion=2.7.5&accessToken=NzZkZGE3ZTBiN2Y2NDgxYzJkNTFmZjBkNjI1ZjM4NDE5YjE4MzA3Nw%3D%3D&postalCode=07030'
      )
      .reply(200, detailData);

    const [y, m, h] = new Date().toISOString().split(' T ', 2)[0].split('-', 3);

    const task: Task<DetailParams> = {
      id: '123',
      crawler: 'test',
      operation: OperationType.DETAIL,
      params: {
        productNo: '59a493eda462403c088511cd',
      },
    };
    const response = await request()
      .post('/task')
      .query({ dryRun: true })
      .send(task);
    const body: CrawlResult = response.body;
    // verify response
    expect(response.statusCode).to.equal(200);
    const skuPages = body.stage.sku.data as Page<SKU[]>[];
    expect(skuPages.length).to.be.greaterThan(0);
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 20);
    const product = skuPages[0].data;

    expect(product[0].metadata).to.deep.equal({
      country: 'US',
      language: 'en',
      retailer: 'Boxed-APP-US',
      pageType: 'detail',
      journey: '59a493eda462403c088511cd',
    });

    expect(product[0].extract).to.deep.equal({
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
