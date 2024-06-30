import { CartItemInterface } from "../Cart/CartService";
import { PriceInterface } from "../Product/ProductService";
export default class OrderCalculator {
    calculateTotalPrice(items: CartItemInterface[], currency: string): PriceInterface;
}
