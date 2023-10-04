import joi, { number, required } from 'joi';

//Incorect schema
const detailSchema = joi.object({
  data: {
    product: joi
      .object({
        _id: joi.string().required(),
        variants: joi.array().items({
          _id: joi.string().required(),
          variant: joi
            .object({
              _id: joi.string().required(),
              name: joi.string().required(),
            })
            .unknown(),
          images: joi.array().items(
            joi
              .object({
                original: joi.string().required(),
              })
              .unknown()
          ),
        }),
      })
      .unknown(),
  },
  metadata: {
    status: joi.number().required(),
    message: joi.string().required(),
    correlationId: joi.string().required(),
  },
});

const detail = detailSchema;

export interface Resource {
  id: string;
  images: string[];
}

export interface ProductData {
  images: string[];
  _id: string;
  name: string;
  variant: {
    _id: string;
    nameText: string;
    brandingText?: string;
    shortDescription?: string;
    standardPrice: number;
    unitPriceText?: string;
    unitPrice?: number;
    price: number;
    longDescription?: string;
    ingredients?: string;
  };
}

export interface DetailData {
  data: {
    product: ProductData;
  };
  metadata: {
    status: number;
    message: string;
    corelationId: string;
  };
}

export { detail };
