import joi from 'joi';
declare const search: joi.ObjectSchema<any>;
declare const category: joi.ObjectSchema<any>;
export interface Resource {
}
export interface ProductData {
}
export interface SearchData {
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
export { search, category };
