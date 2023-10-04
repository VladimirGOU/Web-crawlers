import joi from 'joi';

const detailSchema = joi.object({
  data: {
    product: joi
      .object({
        id: joi.string().required(),
        name: joi.string().required(),
        picURLs: joi.array().items(joi.string().uri()),
        shortDescription: joi.string(),
        price: joi.number(),
        priceText: joi.string(),
      })
      .unknown(),
  },
  result: {
    code: joi.number(),
    message: joi.string(),
  },
});
const detail = detailSchema;

const searchSchema = joi.object({});

const search = searchSchema;

const categorySchema = joi.object({
  data: {
    category: joi
      .object({
        id: joi.string().required(),
        name: joi.string(),
        productCount: joi.number(),
        subCategories: joi.array().items(
          joi
            .object({
              id: joi.string().required(),
              productCount: joi.number(),
              products: joi.array().items(
                joi
                  .object({
                    id: joi.string().required(),
                    name: joi.string().required(),
                    picURLs: joi.array().items(joi.string().uri()),
                    price: joi.number(),
                    priceText: joi.string(),
                  })
                  .unknown()
              ),
            })
            .unknown()
            .unknown()
        ),
      })
      .unknown(),
  },
  result: {
    code: joi.number(),
    message: joi.string(),
  },
});

export interface Resource {
  id: string;
  images: string[];
}

export interface ProductData {
  picURLs: string[];
  id: string;
  name: string;
  shortDescription?: string;
  priceText: string;
  unitPriceText?: string;
  unitPrice?: number;
  status?: number;
  price: number;
  struckPrice?: number;
  struckPriceText?: string;
  description?: string;
  ingredients?: string;
  additionalPropertyTables?: {
    title: string;
    sections: {
      title: string;
      items: {
        name: string;
        value: string;
        unit: string;
      }[];
    }[];
  }[];
  details?: {
    usage: {
      content: string;
    };
  };
}

export interface SearchData {
  data: {
    products: ProductData[];
  };
  result: {
    code: number;
    message: string;
  };
}

export { search };
