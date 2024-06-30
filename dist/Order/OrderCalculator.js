"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderCalculator {
    //TODO: add taxes, delivery costs, discounts, ...
    calculateTotalPrice(items, currency) {
        let totalWithoutTaxes = 0;
        let totalWithTaxes = 0;
        let totalTaxAmount = 0;
        for (const item of items) {
            if (item.variant.priceMap[currency] !== undefined) {
                item.totalPrice[currency] = {
                    withoutTaxes: item.variant.priceMap[currency].withoutTaxes * item.quantity,
                    withTaxes: item.variant.priceMap[currency].withTaxes * item.quantity,
                    taxAmount: item.variant.priceMap[currency].taxAmount * item.quantity,
                    currency: item.variant.priceMap[currency].currency
                };
                totalWithoutTaxes += item.totalPrice[currency].withoutTaxes;
                totalWithTaxes += item.totalPrice[currency].withTaxes;
                totalTaxAmount += item.totalPrice[currency].taxAmount;
            }
        }
        const price = {
            withoutTaxes: totalWithoutTaxes,
            withTaxes: totalWithTaxes,
            taxAmount: totalTaxAmount,
            currency: currency
        };
        return price;
    }
}
exports.default = OrderCalculator;
