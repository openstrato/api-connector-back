import { ApiParamsInterface } from "..";
import { BaseService } from "../Common/BaseService";
import HttpClient from "../Common/HttpClient";
import OrderCalculator from "../Order/OrderCalculator";
import { PriceInterface, PriceMapInterface, ProductInterface, VariantInterface } from "../Product/ProductService";
export interface CartInterface {
    id: string;
    items: CartItemInterface[];
    totalPrice: PriceMapInterface;
}
export interface CartItemInterface {
    id?: string;
    name: string;
    variant: CartItemVariantInterface;
    quantity: number;
    images: CartItemImageInterface[];
    totalPrice: PriceMapInterface;
}
export interface CartItemVariantInterface {
    variantId: string;
    prices: PriceInterface[];
    priceMap: PriceMapInterface;
    attributes: CartItemVariantAttributeInterface[];
}
export interface CartItemVariantAttributeInterface {
    label: string;
    values: CartItemVariantAttributeValueInterface[];
}
export interface CartItemVariantAttributeValueInterface {
    label: string;
}
export interface CartItemImageInterface {
    assetUrl: string;
}
export interface CartSyncOptions {
    shouldSync: boolean;
}
export declare class CartService extends BaseService<CartInterface> {
    private orderCalculator;
    protected baseUrl: string;
    constructor(params: ApiParamsInterface, httpClient: HttpClient, orderCalculator: OrderCalculator);
    sync: (cart: CartInterface) => Promise<CartInterface>;
    addVariant: (variant: VariantInterface, product: ProductInterface, cart: CartInterface, quantity: number, options: CartSyncOptions) => {
        items: CartItemInterface[];
        id: string;
        totalPrice: PriceMapInterface;
    };
    removeVariant: (variant: CartItemVariantInterface, cart: CartInterface, quantity: number, options: CartSyncOptions) => {
        items: CartItemInterface[];
        id: string;
        totalPrice: PriceMapInterface;
    };
}
