import { VariantInterface } from "../Product/ProductService";
import { CartInterface, CartItemInterface, CartItemVariant } from "./CartService";
export declare class CartManager {
    addVariant: (variant: VariantInterface, cart: CartInterface, quantity?: number) => Promise<{
        items: CartItemInterface[];
        id: string;
    }>;
    removeVariant: (variant: CartItemVariant, cart: CartInterface, quantity?: number) => Promise<{
        items: CartItemInterface[];
        id: string;
    }>;
}
