import joi from 'joi';
declare const detail: joi.ObjectSchema<any>;
declare const category: joi.ObjectSchema<any>;
declare const search: joi.ObjectSchema<any>;
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
