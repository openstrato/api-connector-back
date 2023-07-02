import { BaseService } from "../Common/BaseService";
import { VariantInterface } from "../Product/ProductService";

export interface CartInterface
{
    id: string;
    items: CartItemInterface[];
}

export interface CartItemInterface
{
    variant: CartItemVariant;
    quantity: number;
}

export interface CartItemVariant
{
    variantId: string;
}

export class CartService extends BaseService<CartInterface>
{
    protected baseUrl: string = `${this.params.cartApiUrl}/carts`;

    sync = async (cart: CartInterface): Promise<CartInterface> => {
        const syncItems = cart.items.map(cartItem => {
            return {
                variantId: cartItem.variant.variantId,
                quantity: cartItem.quantity
            }
        })

        const syncedCart = await this.httpClient.post(
            `${this.baseUrl}/${cart.id}`,
            {
                items: syncItems
            },
            {
                ...this.requestParams
            }
        )

        return syncedCart;
    }

    addVariant = async(variant: VariantInterface, cart: CartInterface, quantity: number = 1) => {
        const syncCart = {...cart, items: [...cart.items]};

        const found: boolean = syncCart.items.some((item, index) => {
            if (item.variant.variantId === variant.id) {
                const updatedItem = {
                    ...item,
                    quantity: item.quantity + quantity,
                }
                syncCart.items.splice(index, 1, updatedItem)
                
                return true;
            }
        })

        if (!found) {
            const newItem = {
                variant: {
                    variantId: variant.id
                },
                quantity: quantity,
            }
            syncCart.items.push(newItem)
        }

        const syncedCart = await this.sync(syncCart);
        
        return syncedCart;
    }

    removeVariant = async(variant: CartItemVariant, cart: CartInterface, quantity: number = 1) => {
        const syncCart = {...cart, items: [...cart.items]};

        const found: boolean = syncCart.items.some((item: CartItemInterface, index: number) => {
            if (item.variant.variantId === variant.variantId) {                
                if (item.quantity > quantity) {
                    const updatedItem = {
                        ...item,
                        quantity: item.quantity - quantity
                    }

                    syncCart.items.splice(index, 1, updatedItem)
                } else {
                    syncCart.items.splice(index, 1);
                }

                return true;
            }
        })

        if (!found) {
            throw new Error(`Variant ${variant.variantId} not found in Cart ${cart.id}`)
        }

        const syncedCart = await this.sync(syncCart);

        return syncedCart;
    }
}
