import { BaseService } from "../Common/BaseService";
import { PriceInterface, PriceMapInterface, ProductInterface, VariantInterface } from "../Product/ProductService";

export interface CartInterface
{
    id: string;
    items: CartItemInterface[];
}

export interface CartItemInterface
{
    id?: string;
    name: string;
    variant: CartItemVariantInterface;
    quantity: number;
    images: CartItemImageInterface[];
}

export interface CartItemVariantInterface
{
    variantId: string;
    prices: PriceInterface[];
    priceMap: PriceMapInterface;
    attributes: CartItemVariantAttributeInterface[];
}

export interface CartItemVariantAttributeInterface
{
    label: string;
    values: CartItemVariantAttributeValueInterface[];
}

export interface CartItemVariantAttributeValueInterface
{
    label: string;
}

export interface CartItemImageInterface
{
    assetUrl: string;
}

export interface CartSyncOptions
{
    shouldSync: boolean,
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

    addVariant = (
        variant: VariantInterface,
        product: ProductInterface,
        cart: CartInterface,
        quantity: number = 1,
        options: CartSyncOptions
    ) => {
        let syncCart = {...cart, items: [...cart.items]};

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
                name: product.name,
                variant: {
                    variantId: variant.id,
                    prices: variant.prices,
                    priceMap: variant.priceMap,
                    attributes: [],
                },
                quantity: quantity,
                images: []
            }

            // TODO: Add product.images to CartItem! But if the product has images for a specific variant, only those should be added?!?!

            for (const image of product.images) {
                newItem.images.push(image)
            }

            for (const attribute of variant.attributes) {
                const itemAttributeValues: CartItemVariantAttributeValueInterface[] = 
                    attribute.values.map(value => {
                        return {
                            label: value.label
                        }
                    })

                const itemAttribute: CartItemVariantAttributeInterface = {
                    label: attribute.label,
                    values: itemAttributeValues,
                }

                newItem.variant.attributes.push(itemAttribute)
            }

            syncCart.items.push(newItem)
        }

        // if (options.shouldSync) {
        //     syncCart = this.sync(syncCart);
        // }
        
        return syncCart;
    }

    removeVariant = (
        variant: CartItemVariantInterface,
        cart: CartInterface,
        quantity: number = 1,
        options: CartSyncOptions
    ) => {
        let syncCart = {...cart, items: [...cart.items]};

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

        // if (options.shouldSync) {
        //     syncCart = await this.sync(syncCart);
        // }

        return syncCart;
    }
}
