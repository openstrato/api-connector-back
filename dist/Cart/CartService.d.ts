import { BaseService } from "../Common/BaseService";
import { PriceInterface, PriceMapInterface, VariantInterface } from "../Product/ProductService";
export interface CartInterface {
    id: string;
    items: CartItemInterface[];
}
export interface CartItemInterface {
    id: string;
    variant: CartItemVariantInterface;
    quantity: number;
}
export interface CartItemVariantInterface {
    variantId: string;
    prices: PriceInterface[];
    priceMap: PriceMapInterface;
}
export interface CartSyncOptions {
    shouldSync: boolean;
}
export declare class CartService extends BaseService<CartInterface> {
    protected baseUrl: string;
    sync: (cart: CartInterface) => Promise<CartInterface>;
    addVariant: (variant: VariantInterface, cart: CartInterface, quantity: number, options: CartSyncOptions) => {
        items: CartItemInterface[];
        id: string;
    };
    removeVariant: (variant: CartItemVariantInterface, cart: CartInterface, quantity: number, options: CartSyncOptions) => {
        items: CartItemInterface[];
        id: string;
    };
}
