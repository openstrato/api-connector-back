import { BaseService } from "../Common/BaseService";

export interface ProductInterface
{
    id: string;
    name: string;
    variants: VariantInterface[];
    images: ImageInterface[];
    shops: ProductShopInterface[];
}

export interface VariantInterface
{
    id: string;
    prices: PriceInterface[];
    priceMap: PriceMapInterface;
    attributes: ProductAttributeInterface[];
}

export interface ProductAttributeInterface
{
    label: string;
    values: ProductAttributeValueInterface[];
}

export interface ProductAttributeValueInterface
{
    label: string;
}

export interface ProductShopInterface
{
    shopId: string;
}

export interface CreateProduct
{
    id: string;
    name: string;
    variants: VariantInterface[];
}

export interface PriceInterface
{
    withTaxes: number;
    withoutTaxes: number;
    taxAmount: number;
    currency: string;
}

export interface ImageInterface
{
    assetUrl: string;
}

export interface PriceMapInterface
{
    [currency: string]: PriceInterface;
}

export class ProductService extends BaseService<ProductInterface>
{
    protected baseUrl: string = `${this.params.productApiUrl}/products`

    getAttributeFilters = async(params = {}): Promise<ProductAttributeInterface[]> =>
    {
        const filters = this.httpClient.get(
            `${this.baseUrl}/filters`,
            {
                ...this.requestParams,
                ...params,
            },
        )

        return filters
    }
}
