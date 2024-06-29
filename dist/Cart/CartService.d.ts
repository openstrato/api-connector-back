import { BaseService } from "../Common/BaseService";
import { PriceInterface, PriceMapInterface, ProductInterface, VariantInterface } from "../Product/ProductService";
export interface CartInterface {
    id: string;
    items: CartItemInterface[];
}
export interface CartItemInterface {
    id?: string;
    name: string;
    variant: CartItemVariantInterface;
    quantity: number;
    images: CartItemImageInterface[];
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
    protected baseUrl: string;
    sync: (cart: CartInterface) => Promise<CartInterface>;
    addVariant: (variant: VariantInterface, product: ProductInterface, cart: CartInterface, quantity: number, options: CartSyncOptions) => {
        items: CartItemInterface[];
        id: string;
    };
    removeVariant: (variant: CartItemVariantInterface, cart: CartInterface, quantity: number, options: CartSyncOptions) => {
        items: CartItemInterface[];
        id: string;
    };
}
