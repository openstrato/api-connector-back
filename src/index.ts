import { AttributeService } from "./Attribute/AttributeService";
import { CartService } from "./Cart/CartService";
import HttpClient from "./Common/HttpClient";
import { OrderService } from "./Order/OrderService";
import {ProductService} from "./Product/ProductService";
import TaxService from "./Tax/TaxService";

export interface ApiParamsInterface
{
    lang: string,
    currency: string,
    productApiUrl: string,
    cartApiUrl: string,
    orderApiUrl: string,
    extensionApiUrl: string,
}

export function apiConnector(params: ApiParamsInterface)
{
    const httpClient = new HttpClient();

    const productService = new ProductService(params, httpClient);
    const attributeService = new AttributeService(params, httpClient);
    const cartService = new CartService(params, httpClient);
    const orderService = new OrderService(params, httpClient);
    const taxServce = new TaxService(params, httpClient);

    // - handle payment methods
    // - ability to add a payment (other than stripe)

    const connector = {
        products: productService,
        attributes: attributeService,
        carts: cartService,
        orders: orderService,
        taxes: taxServce,
    }

    return connector;
}


