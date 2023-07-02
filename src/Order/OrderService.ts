import { BaseService } from "../Common/BaseService";

export interface OrderCreateInterface
{
    cartId: string;
    payments?: OrderPaymentInterface[];
    shippingAddress?: AddressInterface;
}

export interface OrderInterface
{
    id: string;
    cartId: string;
    availableMethods: PaymentMethodInterface[];
    payments: OrderPaymentInterface[];
    shippingAddress: AddressInterface;
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

    confirm = async(orderId: string): Promise<OrderInterface> =>
    {
        const order = await this.httpClient.post(
            `${this.baseUrl}/${orderId}/confirm`,
            {},
            this.requestParams,
            this.requestHeaders
        );

        return order;
    }
}
