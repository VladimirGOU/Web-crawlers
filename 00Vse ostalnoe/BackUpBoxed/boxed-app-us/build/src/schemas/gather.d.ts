import joi from 'joi';
declare const detail: joi.ObjectSchema<any>;
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
