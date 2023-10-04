import {
  skuSchema,
  Country,
  Currency,
  Language,
  Type,
} from '@efundamentals/gather-sdk/build/src/sku';
import joi from 'joi';
import { retailerName } from '.';

const custom = joi
  .object({
    metadata: joi
      .object({
        retailer: retailerName,
        journey: joi.string().valid(joi.ref('$task.params.journey')),
        storeNo: joi.string().valid(joi.ref('$task.params.storeNo')),
        language: Language.EN,
        country: Country.US,
      })
      .unknown(),
    extract: joi
      .object({
        price: joi.string().pattern(/^\$\d+(\.\d+)?$/),
        pricePerUnit: joi.string().pattern(/^\$\d+(\.\d+)?\/.+$/),
        productNo: joi
          .string()
          .pattern(/^\d+$/)
          .required()
          .when('..type', {
            is: Type.DETAIL,
            then: joi.string().valid(joi.ref('$task.params.productNo')),
          }),
      })
      .unknown(),
    parsed: joi
      .object({
        currency: Currency.USD,
      })
      .unknown(),
  })
  .unknown();

const skuPagesSchemas = (schemas: joi.Schema[]) => {
  return schemas.map(s => {
    return joi
      .array()
      .items(
        joi.object({
          data: joi.array().items(s).required(),
          page: joi.number().min(1).required(),
        })
      )
      .min(1)
      .required();
  });
};

export const schemas = skuPagesSchemas([skuSchema, custom]);
