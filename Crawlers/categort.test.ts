import {
  CrawlResult,
  CategoryParams,
  OperationType,
  Page,
  Task,
} from "@efundamentals/gather-sdk";
import { SKU } from "@efundamentals/gather-sdk/build/src/sku";
import { expect } from "chai";
import nock from "nock";
import categoryData from "./fixtures/categoryRawData.json";
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

  it("category", async () => {
    nock("https://ecom-mgo-ecom.e-magnum.kz/")
      .get(
        "/catalog/client/platformItemV2?platformId=5002&categoryIds=110704&sortTypeColumn=sales&sortOrder=DESC&pageId=0&pageSize=20&filterIds"
      )
      .reply(200, categoryData);

    const task: Task<CategoryParams> = {
      id: "123",
      crawler: "test",
      operation: OperationType.CATEGORY,
      params: {
        categoryId: "110704",
        journey: "whatever",
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
      language: "ru",
      retailer: "MagnumGO-APP-KZ",
      pageType: "category",
      journey: task.params.journey,
    });

    expect(product[0].extract).to.deep.equal({
      timestamp: "2022-01-01T00:00:00.000Z",
      rank: 1,
      name: "Яйцо Сары-Булак Sb-B высшая категория 10 шт",
      price: "₸68500",
      productNo: "3201617",
      imageURL: [
        "https://storage.googleapis.com/https://s3-pic.e-magnum.kz/item/508463-1.jpg",
      ],
    });

    expect(product[0].parsed).to.deep.equal({
      currency: "KZT",
      price: 68500,
    });
  });
});
