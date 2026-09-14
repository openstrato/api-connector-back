import { ApiParamsInterface } from "..";
import { CartInterface, CartItemInterface } from "../Cart/CartService";
import { BaseService } from "../Common/BaseService";
import HttpClient from "../Common/HttpClient";
import { PriceInterface } from "../Product/ProductService";
import OrderCalculator from "./OrderCalculator";
export interface OrderCreateInterface {
    cartId?: string;
    payments?: OrderPaymentInterface[];
    shippingAddress?: AddressInterface;
    billingAddress?: AddressInterface;
    isConfirmation?: boolean;
}
export interface OrderInterface {
    id: string;
    cartId: string;
    availableMethods: PaymentMethodInterface[];
    payments: OrderPaymentInterface[];
    shippingAddress: AddressInterface;
    billingAddress?: AddressInterface;
    status: string;
    shopId?: string;
    items?: CartItemInterface[];
    customer?: {
        name?: string;
        lastName?: string;
        email?: string;
    };
    totalPrice?: PriceInterface;
    createdAt?: string;
    updatedAt?: string;
}
export interface PaymentMethodInterface {
    methodId: string;
    methodCode: string;
}
export interface OrderPaymentInterface {
    id?: string;
    amount: number;
    currency: string;
    methodType: string;
    status?: string;
    providerPaymentId?: string;
}
export interface OrderPaymentAddInterface {
    amount: number;
    currency: string;
    methodType: string;
    status: string;
    providerPaymentId?: string;
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
export declare class OrderService extends BaseService<OrderInterface, OrderCreateInterface, OrderCreateInterface> {
    private orderCalculator;
    protected baseUrl: string;
    constructor(params: ApiParamsInterface, httpClient: HttpClient, orderCalculator: OrderCalculator);
    confirm: (orderId: string) => Promise<OrderInterface>;
    addPayment: (orderId: string, payment: OrderPaymentAddInterface) => Promise<OrderInterface>;
    updatePaymentStatus: (orderId: string, paymentId: string, status: string) => Promise<OrderInterface>;
    calculate: (cart: CartInterface, currency: string) => PriceInterface;
}
