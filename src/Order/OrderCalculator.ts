import { CartItemInterface } from "../Cart/CartService";
import { PriceInterface } from "../Product/ProductService";

export default class OrderCalculator
{    
    //TODO: add taxes, delivery costs, discounts, ...
    calculateTotalPrice(items: CartItemInterface[], currency: string): PriceInterface
    {
        let totalWithoutTaxes: number = 0;
        let totalWithTaxes: number = 0;
        let totalTaxAmount: number = 0;

        for (const item of items) {
            if (item.variant.priceMap[currency] !== undefined) {
                if (!item.totalPrice) {
                    item.totalPrice = {}
                }

                item.totalPrice[currency] = this.calculateItemTotalPrice(item, currency)
    
                totalWithoutTaxes += item.totalPrice[currency].withoutTaxes;
                totalWithTaxes += item.totalPrice[currency].withTaxes;
                totalTaxAmount += item.totalPrice[currency].taxAmount;
            }
        }

        const price: PriceInterface = {
            withoutTaxes: totalWithoutTaxes,
            withTaxes: totalWithTaxes,
            taxAmount: totalTaxAmount,
            currency: currency
        }

        return price;
    }

    calculateItemTotalPrice(item: CartItemInterface, currency: string): PriceInterface
    {
        return {
            withoutTaxes: item.variant.priceMap[currency].withoutTaxes * item.quantity,
            withTaxes: item.variant.priceMap[currency].withTaxes * item.quantity,
            taxAmount: item.variant.priceMap[currency].taxAmount * item.quantity,
            currency: item.variant.priceMap[currency].currency
        }
    }
}
