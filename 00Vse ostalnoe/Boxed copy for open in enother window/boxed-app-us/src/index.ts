import { ExpressCrawler } from '@efundamentals/gather-sdk';
import { category } from './operations';
import { detail } from './operations';
import { search } from './operations';

const crawler = ExpressCrawler.from({
  operations: [detail, category, search],
});

export const server = crawler.start();
