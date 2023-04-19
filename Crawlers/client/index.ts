import {
  SearchParams,
  CategoryParams,
  DetailParams,
} from '@efundamentals/gather-sdk';

import { AxiosRequestConfig } from 'axios';

import { request } from './auth';

export async function category(
  { categoryId }: CategoryParams,
  extra: AxiosRequestConfig
) {
  return await request({
    ...extra,
    url: `https://ecom-mgo-ecom.e-magnum.kz/catalog/client/platformItemV2?platformId=5002&categoryIds=${encodeURIComponent(
      categoryId
    )}&sortTypeColumn=sales&sortOrder=DESC&pageId=0&pageSize=20&filterIds`,
  });
}

export async function detail(
  { productNo }: DetailParams,
  extra: AxiosRequestConfig
) {
  return await request({
    ...extra,
    url: `https://ecom-mgo-ecom.e-magnum.kz/catalog/client/platformItem/${encodeURIComponent(
      productNo
    )}`,
  });
}

export async function search(
  { journey }: SearchParams,
  extra: AxiosRequestConfig
) {
  return await request({
    ...extra,
    url: `https://ecom-mgo-ecom.e-magnum.kz/catalog/client/search/platform/items?platformId=5002&searchWord=${encodeURIComponent(
      journey
    )}&pageId=0&pageSize=20`,
  });
}
