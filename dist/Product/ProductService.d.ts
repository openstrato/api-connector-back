import { BaseService } from "../Common/BaseService";
export interface ProductInterface {
    id: string;
    slug?: string;
    name: string;
    description?: string;
    variants: VariantInterface[];
    images: ImageInterface[];
    allImages: ImageInterface[];
    shops: ProductShopInterface[];
}
export interface TranslatedLabelInterface {
    lang: string;
    label: string;
}
export interface VariantInterface {
    id: string;
    sku?: string;
    ean?: string;
    upc?: string;
    quantity?: number;
    isActive?: boolean;
    hash?: string;
    prices: PriceInterface[];
    priceMap: PriceMapInterface;
    attributes: ProductAttributeInterface[];
}
/**
 * Hydrated variant attribute as returned by product_api reads. Stored variants only hold
 * {attributeId, valueId}; the labels are resolved from Product.attributes on read.
 */
export interface ProductAttributeInterface {
    attributeId: string;
    code?: string;
    label: string;
    translations?: TranslatedLabelInterface[];
    values: ProductAttributeValueInterface[];
}
export interface ProductAttributeValueInterface {
    valueId: string;
    code?: string;
    label: string;
    translations?: TranslatedLabelInterface[];
}
export interface ProductShopInterface {
    shopId: string;
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
export interface ImageInterface {
    assetUrl: string;
}
export interface PriceMapInterface {
    [currency: string]: PriceInterface;
}
export interface ProductAddEditInterface {
    shops: {
        id: string;
    }[];
    categories: ProductCategoryAddEditInterface[];
    variants: ProductVariantAddEditInterface[];
    taxes: {
        id: string;
    }[];
    images: ProductImageAddEditInterface[];
    i18n: ProductTranslationInterface[];
    prices: ProductPriceAddEditInterface[];
}
export interface ProductCategoryAddEditInterface {
    id?: string;
    code?: string;
    parentId: string;
    i18n?: ProductTranslationInterface[];
}
export interface ProductVariantAddEditInterface {
    id?: string;
    quantity: number;
    sku: string;
    upc: string;
    ean: string;
    attributes: ProductVariantAttributeAddEditInterface[];
    prices?: ProductPriceAddEditInterface[];
    images?: ProductImageAddEditInterface[];
}
export interface ProductVariantAttributeAddEditInterface {
    attributeId?: string;
    code?: string;
    values: ProductVariantAttributeValueAddEditInterface[];
}
export interface ProductVariantAttributeValueAddEditInterface {
    valueId?: string;
    code?: string;
    i18n?: {
        lang: string;
        label: string;
    }[];
}
export interface ProductImageAddEditInterface {
    url: string;
    filename: string;
}
export interface ProductTranslationInterface {
    lang: string;
    name: string;
    description: string;
}
export interface ProductPriceAddEditInterface {
    currency: string;
    withTaxes?: number;
    withoutTaxes?: number;
}
export declare class ProductService extends BaseService<ProductInterface, ProductAddEditInterface, ProductAddEditInterface> {
    protected baseUrl: string;
    getAttributeFilters: (params?: {}) => Promise<ProductAttributeInterface[]>;
}
