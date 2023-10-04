import { ExpressCrawler } from '@efundamentals/gather-sdk';
import { category } from './operations';
import { search } from './operations';

const crawler = ExpressCrawler.from({
  operations: [category, search],
});

export const server = crawler.start();
