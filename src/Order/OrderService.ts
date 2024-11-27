import { ApiParamsInterface } from "..";
import { CartInterface, CartItemInterface } from "../Cart/CartService";
import { BaseService } from "../Common/BaseService";
import HttpClient from "../Common/HttpClient";
import { PriceInterface } from "../Product/ProductService";
import OrderCalculator from "./OrderCalculator";

export interface OrderCreateInterface
{
    cartId: string;
    payments?: OrderPaymentInterface[];
    shippingAddress?: AddressInterface;
    billingAddress?: AddressInterface;
    isConfirmation?: boolean;
}

export interface OrderInterface
{
    id: string;
    cartId: string;
    availableMethods: PaymentMethodInterface[];
    payments: OrderPaymentInterface[];
    shippingAddress: AddressInterface;
    billingAddress?: AddressInterface;
    status: string;
}

export interface PaymentMethodInterface
{
    methodId: string;
    methodCode: string;
}

export interface OrderPaymentInterface
{
    amount: number;
    currency: string;
    methodType: string;
}

export interface AddressInterface
{
    firstName: string;
    lastName: string;
    line1: string;
    line2: string;
    city: string;
    region: string;
    country: string;
    postalCode: string;
}

export class OrderService extends BaseService<OrderInterface, OrderCreateInterface>
{
    protected baseUrl: string = `${this.params.orderApiUrl}/orders`;

    constructor(
        params: ApiParamsInterface,
        httpClient: HttpClient,
        private orderCalculator: OrderCalculator
    ) {
        super(params, httpClient)
    }

    confirm = async(orderId: string): Promise<OrderInterface> =>
    {
        const order = this.httpClient.post(
            `${this.baseUrl}/${orderId}/confirm`,
            {},
            this.requestParams,
            this.requestHeaders
        );

        return order;
    }

    calculate = (cart: CartInterface, currency: string): PriceInterface =>
    {
        return this.orderCalculator.calculateTotalPrice(cart.items, currency)
    }
}
