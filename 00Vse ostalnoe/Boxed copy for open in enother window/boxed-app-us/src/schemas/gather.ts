import joi from 'joi';

const detailSchema = joi.object({
  data: {
    product: joi
      .object({
        _id: joi.string().required(),
        variant: joi
          .object({
            _id: joi.string().required(),
            name: joi.string().required(),
            price: joi.number(),
            inventory: joi.array().items(
              joi
                .object({
                  price: joi.string(),
                })
                .unknown()
            ),
          })
          .unknown(),
        images: joi.array().items(
          joi
            .object({
              original: joi.string().required(),
            })
            .unknown()
        ),
      })
      .unknown(),
  },
  metadata: {
    status: joi.number().required(),
    message: joi.string().required(),
    correlationId: joi.string().required(),
  },
});

const categorySchema = joi.object({
  data: joi.object({
    productListEntities: joi.array().items(
      joi
        .object({
          variant: joi
            .object({
              _id: joi.string().required(),
              name: joi.string().required(),
              price: joi.number().required(),
              product: joi
                .object({
                  _id: joi.string(),
                  categories: joi.array().items(
                    joi.object({
                      _id: joi.string(),
                      name: joi.string(),
                      path: joi.string(),
                    })
                  ),
                })
                .unknown(),
            })
            .unknown(),
          images: joi.array().items(
            joi
              .object({
                original: joi.string().required(),
              })
              .unknown()
          ),
        })
        .unknown()
    ),
    cursor: joi.string(),
  }),
  metadata: {
    status: joi.number().required(),
    message: joi.string().required(),
  },
});

const searchSchema = joi.object({
  metadata: {
    status: joi.number().required(),
    message: joi.string().required(),
  },
  data: {
    webSlugConfigs: joi.array().items(joi.object({}).unknown()),
    productListEntities: joi.array().items(
      joi
        .object({
          variant: joi.string(),
          variantObject: joi
            .object({
              _id: joi.string().required(),
              name: joi.string().required(),
              price: joi.number().required(),
            })
            .unknown(),
          images: joi.array().items(
            joi
              .object({
                original: joi.string().required(),
              })
              .unknown()
          ),
        })
        .unknown()
    ),
  },
});

const detail = detailSchema;
const category = categorySchema;
const search = searchSchema;

export interface Resource {
  id: string;
  images: string[];
}

export interface ProductData {
  productListEntities: any;
  images: string[];
  _id: string;
  map: any;
  variants: {
    map: any;
    _id: string;
    name: string;
    product: any;
    productNo: string;
    price: string;
    nameText: string;
    brandingText?: string;
    shortDescription?: string;
    standardPrice?: string;
    unitPriceText?: string;
    unitPrice?: any;
    longDescription?: string;
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

export interface SearchData {
  data: {
    productListEntities: any;
    product: ProductData;
  };
  metadata: {
    status: number;
    message: string;
    corelationId: string;
  };
}

export { detail, category, search };
