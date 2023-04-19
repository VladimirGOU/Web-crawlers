import {
  CrawlResult,
  SearchParams,
  OperationType,
  Page,
  Task,
} from "@efundamentals/gather-sdk";
import { SKU } from "@efundamentals/gather-sdk/build/src/sku";
import { expect } from "chai";
import nock from "nock";
import SearchData from "./fixtures/searchRawData.json";
import { request } from "./setup";
import sinon, { SinonFakeTimers } from "sinon";
import * as sdkUtil from "../src/operations/util";

describe("crawl", () => {
  const now = new Date("2022-01-01");
  let clock: SinonFakeTimers;
  const sb = sinon.createSandbox();
  beforeEach(() => {
    clock = sinon.useFakeTimers(now.getTime());
    sb.stub(sdkUtil, "fetchAndStoreImage").callsFake(
      async (retailerName, { url }) => `https://storage.googleapis.com/${url}`
    );
  });
  afterEach(() => {
    clock.restore();
    sb.restore();
  });

  it("search", async () => {
    nock("https://ecom-mgo-ecom.e-magnum.kz/")
      .get(
        "/catalog/client/search/platform/items?platformId=5002&searchWord=cola&pageId=0&pageSize=20"
      )
      .reply(200, SearchData);

    const task: Task<SearchParams> = {
      id: "123",
      crawler: "test",
      operation: OperationType.SEARCH,
      params: {
        journey: "cola",
      },
    };
    const response = await request()
      .post("/task")
      .query({ dryRun: true })
      .send(task);
    const body: CrawlResult = response.body;

    expect(response.statusCode).to.equal(200);
    const skuPages = body.stage.sku.data as Page<SKU[]>[];
    expect(skuPages.length).to.be.greaterThan(0);
    const product = skuPages[0].data;

    expect(product[0].metadata).to.deep.equal({
      country: "KZ",
      journey: "cola",
      language: "ru",
      retailer: "MagnumGO-APP-KZ",
      pageType: "search",
    });

    expect(product[0].extract).to.deep.equal({
      timestamp: "2022-01-01T00:00:00.000Z",
      rank: 1,
      name: "Стиральный порошок Persil Cold Zyme Color Vernel 6 кг",
      netQuantity: "6КГ",
      price: "₸665500",
      productNo: "3168279",
      imageURL: [
        "https://storage.googleapis.com/https://s3-pic.e-magnum.kz/item/143684.jpg",
      ],
    });

    expect(product[0].parsed).to.deep.equal({
      currency: "KZT",
      price: 665500,
    });
  });
});
