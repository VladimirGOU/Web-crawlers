import joi from 'joi';

const searchSchema = joi.object({
  data: joi
    .object({
      featured: joi
        .object({
          items: joi.array().items(
            joi
              .object({
                sku: joi.string(),
              })
              .unknown()
          ),
        })
        .unknown(),
    })
    .unknown(),
});

const categorySchema = joi.object({});

const search = searchSchema;
const category = categorySchema;

export interface Resource {}
export interface ProductData {}
export interface SearchData {}
export interface CategoryData {
  data: {
    name: string;
    productListEntities: any;
    variants: any;
    map: any;
    category: ProductData;
  };
  metadata: {
    status: number;
    message: string;
    corelationId: string;
  };
}

export { search, category };
