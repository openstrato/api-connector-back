"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartManager = void 0;
class CartManager {
    constructor() {
        this.addVariant = (variant, cart, quantity = 1) => __awaiter(this, void 0, void 0, function* () {
            const syncCart = Object.assign(Object.assign({}, cart), { items: [...cart.items] });
            const found = syncCart.items.some((item, index) => {
                if (item.variant.variantId === variant.id) {
                    const updatedItem = Object.assign(Object.assign({}, item), { quantity: item.quantity + quantity });
                    syncCart.items.splice(index, 1, updatedItem);
                    return true;
                }
            });
            if (!found) {
                const newItem = {
                    variant: {
                        variantId: variant.id
                    },
                    quantity: quantity,
                };
                syncCart.items.push(newItem);
            }
            return syncCart;
        });
        this.removeVariant = (variant, cart, quantity = 1) => __awaiter(this, void 0, void 0, function* () {
            const syncCart = Object.assign(Object.assign({}, cart), { items: [...cart.items] });
            const found = syncCart.items.some((item, index) => {
                if (item.variant.variantId === variant.variantId) {
                    if (item.quantity > quantity) {
                        const updatedItem = Object.assign(Object.assign({}, item), { quantity: item.quantity - quantity });
                        syncCart.items.splice(index, 1, updatedItem);
                    }
                    else {
                        syncCart.items.splice(index, 1);
                    }
                    return true;
                }
            });
            if (!found) {
                throw new Error(`Variant ${variant.variantId} not found in Cart ${cart.id}`);
            }
            return syncCart;
        });
    }
}
exports.CartManager = CartManager;
