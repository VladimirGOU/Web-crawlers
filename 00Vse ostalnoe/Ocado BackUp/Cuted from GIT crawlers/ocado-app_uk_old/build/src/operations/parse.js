"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const gather_sdk_1 = require("@efundamentals/gather-sdk");
const lodash_1 = require("lodash");
const grammar = new gather_sdk_1.Grammar({
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
            postProcessor: (current, parsed) => {
                const discount = current.discountPrc;
                parsed.promotionType = gather_sdk_1.PromotionType.PRICE_CUT;
                parsed.discount = discount;
                parsed.promotionPrice = parsed.price;
                parsed.originalPrice = parsed.price
                    ? (0, lodash_1.round)(parsed.price / (1 - discount / 100), 2)
                    : undefined;
                parsed.promotionPricePerUnit = parsed.pricePerUnit;
                return parsed;
            },
        },
    ],
});
const engine = new gather_sdk_1.ExpressionsEngine(grammar, {
    flags: 'i',
});
const parse = (sku) => {
    if (sku.extract.promotionText) {
        engine.parse(sku.extract.promotionText, 'PROMOTIONS', sku.parsed);
        if (sku.parsed.promotionPrice) {
            sku.parsed.promotionPrice = (0, lodash_1.round)(sku.parsed.promotionPrice, 2);
            sku.parsed.discount = (0, lodash_1.round)(sku.parsed.discount, 2);
            sku.parsed.originalPrice = (0, lodash_1.round)(sku.parsed.originalPrice, 2);
            sku.parsed.promotionPricePerUnit = (0, lodash_1.round)(sku.parsed.promotionPricePerUnit, 3);
        }
    }
};
exports.parse = parse;
//# sourceMappingURL=parse.js.map