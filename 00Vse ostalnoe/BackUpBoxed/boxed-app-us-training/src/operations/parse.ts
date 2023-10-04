import {
  ExpressionsEngine,
  Grammar,
  PromotionType,
  SKU,
  SKUParsed,
} from '@efundamentals/gather-sdk';
import { round } from 'lodash';

const grammar = new Grammar({
  NUMBER: {
    pattern: '\\d+([,.]\\d+)?',
    postProcessor: current => {
      return parseFloat(current);
    },
  },
  PRICE: {
    pattern: '\\$ ?%{NUMBER:price}',
    postProcessor: current => {
      return parseFloat(current.price);
    },
  },
  PROMOTIONS: [
    {
      pattern: '%{NUMBER:discountPrc}\\%',
      postProcessor: (current, parsed: SKUParsed) => {
        const discount = current.discountPrc;
        parsed.promotionType = PromotionType.PRICE_CUT;
        parsed.discount = discount;
        parsed.promotionPrice = parsed.price;
        parsed.originalPrice = parsed.price
          ? round(parsed.price / (1 - discount / 100), 2)
          : undefined;
        parsed.promotionPricePerUnit = parsed.pricePerUnit;
        return parsed;
      },
    },
  ],
});
const engine = new ExpressionsEngine(grammar, {
  flags: 'i',
});

const parse = (sku: SKU) => {
  if (sku.extract.promotionText) {
    engine.parse(
      sku.extract.promotionText,
      'PROMOTIONS',
      sku.parsed as Record<string, unknown>
    );
    if (sku.parsed.promotionPrice) {
      sku.parsed.promotionPrice = round(sku.parsed.promotionPrice!, 2);
      sku.parsed.discount = round(sku.parsed.discount!, 2);
      sku.parsed.originalPrice = round(sku.parsed.originalPrice!, 2);
      sku.parsed.promotionPricePerUnit = round(
        sku.parsed.promotionPricePerUnit!,
        3
      );
    }
  }
};

export { parse };
