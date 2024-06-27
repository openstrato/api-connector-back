import { BaseService } from "../Common/BaseService";
export interface ProductInterface {
    id: string;
    name: string;
    variants: VariantInterface[];
}
export interface VariantInterface {
    id: string;
    prices: PriceInterface[];
    priceMap: PriceMapInterface;
}
export interface CreateProduct {
    id: string;
    name: string;
    variants: VariantInterface[];
}
export interface PriceInterface {
    withTaxes: number;
    withoutTaxes: number;
    taxAmount: number;
    currency: string;
}
export interface PriceMapInterface {
    [currency: string]: PriceInterface;
}
export declare class ProductService extends BaseService<ProductInterface> {
    protected baseUrl: string;
}
