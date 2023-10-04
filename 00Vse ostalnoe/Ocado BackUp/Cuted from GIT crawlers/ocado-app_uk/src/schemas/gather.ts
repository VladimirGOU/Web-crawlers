import joi from 'joi';

const categorySchema = joi.object({
  name: joi.required(),
});

const searchSchema = joi.object({
  data: joi.object({}).unknown(),
});

const category = categorySchema;
const search = searchSchema;

export interface Resource {
  id: string;
  images: string[];
}
interface Price {
  value: {
    centAmount: number;
  };
}
export interface Product {
  attributes: {
    net_contain: number;
    contain_unit: string;
    bi_ingredients: string;
    bi_allergens_contain: string;
    bi_fat_content_total: string;
    bi_carbohydrate_content: string;
    bi_carbohydrate_content_sugars: string;
    bi_protein_content: string;
    bi_salt_content: string;
  };
  price: Price;
  description: null;
  name: string;
  sku: string;
  imagesUrls: [string];
  url: string;
}
export interface CategoryData {
  price: Price;
  data: {
    productCount: null;
    categoryProducts: {
      results: [Product];
    };
  };
}
export interface SearchData {
  result: any;
  price: Price;
  data: {
    items: any;
    productCount: null;
    productSearch: {
      total: number;
      results: [Product];
    };
  };
}
export { category, search };
