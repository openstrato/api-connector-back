import { ApiParamsInterface } from "..";
import { CartInterface } from "../Cart/CartService";
import { BaseService } from "../Common/BaseService";
import HttpClient from "../Common/HttpClient";
import { PriceInterface } from "../Product/ProductService";
import OrderCalculator from "./OrderCalculator";
export interface OrderCreateInterface {
    cartId: string;
    payments?: OrderPaymentInterface[];
    shippingAddress?: AddressInterface;
}
export interface OrderInterface {
    id: string;
    cartId: string;
    availableMethods: PaymentMethodInterface[];
    payments: OrderPaymentInterface[];
    shippingAddress: AddressInterface;
}
export interface PaymentMethodInterface {
    methodId: string;
    methodCode: string;
}
export interface OrderPaymentInterface {
    amount: number;
    currency: string;
    methodType: string;
}
export interface AddressInterface {
    firstName: string;
    lastName: string;
    line1: string;
    line2: string;
    city: string;
    region: string;
    country: string;
    postalCode: string;
}
export declare class OrderService extends BaseService<OrderInterface, OrderCreateInterface> {
    private orderCalculator;
    protected baseUrl: string;
    constructor(params: ApiParamsInterface, httpClient: HttpClient, orderCalculator: OrderCalculator);
    confirm: (orderId: string) => Promise<OrderInterface>;
    calculate: (cart: CartInterface, currency: string) => PriceInterface;
}
