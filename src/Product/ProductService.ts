import { BaseService } from "../Common/BaseService";

export interface ProductInterface
{
    id: string;
    name: string;
    variants: VariantInterface[];
}

export interface VariantInterface
{
    id: string;
}

export interface CreateProduct
{
    id: string;
    name: string;
    variants: VariantInterface[];
}

export class ProductService extends BaseService<ProductInterface>
{
    protected baseUrl: string = `${this.params.productApiUrl}/products`
}
