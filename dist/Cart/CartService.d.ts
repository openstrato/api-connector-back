import { BaseService } from "../Common/BaseService";
import { VariantInterface } from "../Product/ProductService";
export interface CartInterface {
    id: string;
    items: CartItemInterface[];
}
export interface CartItemInterface {
    variant: CartItemVariant;
    quantity: number;
}
export interface CartItemVariant {
    variantId: string;
}
export declare class CartService extends BaseService<CartInterface> {
    protected baseUrl: string;
    sync: (cart: CartInterface) => Promise<CartInterface>;
    addVariant: (variant: VariantInterface, cart: CartInterface, quantity?: number) => Promise<CartInterface>;
    removeVariant: (variant: CartItemVariant, cart: CartInterface, quantity?: number) => Promise<CartInterface>;
}
