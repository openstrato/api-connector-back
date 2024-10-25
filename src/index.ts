import { AttributeService } from "./Attribute/AttributeService";
import { CartService } from "./Cart/CartService";
import { CategoryService } from "./Category/CategoryService";
import HttpClient from "./Common/HttpClient";
import OrderCalculator from "./Order/OrderCalculator";
import { OrderService } from "./Order/OrderService";
import { OrganizationService } from "./Organization/OrganizationService";
import {ProductService} from "./Product/ProductService";
import { ShopService } from "./Shop/ShopService";
import { TaxService } from "./Tax/TaxService";
import { UserService } from "./User/UserService";

export interface ApiParamsInterface
{
    accessToken?: string,
    channelToken?: string,
    lang?: string,
    currency?: string,
    productApiUrl?: string,
    cartApiUrl?: string,
    orderApiUrl?: string,
    extensionApiUrl?: string,
    shopApiUrl?: string,
    authApiUrl?: string,
}

const defaultParams: ApiParamsInterface = {
    accessToken: undefined,
    channelToken: undefined,
    lang: 'en',
    currency: 'EUR',
    productApiUrl: 'http://products.shop.localhost',
    orderApiUrl: 'http://orders.shop.localhost',
    cartApiUrl: 'http://carts.shop.localhost',
    extensionApiUrl: 'http://extension.shop.localhost',
    shopApiUrl: 'http://shops.shop.localhost',
    authApiUrl: 'http://auth.shop.localhost',
}

export function apiConnector(params: ApiParamsInterface)
{
    params = {
        ...defaultParams,
        ...params,
    }

    const httpClient = new HttpClient(params.accessToken, params.channelToken);

    const productService = new ProductService(params, httpClient);
    const attributeService = new AttributeService(params, httpClient);
    const taxService = new TaxService(params, httpClient);
    const categoryService = new CategoryService(params, httpClient);
    
    const orderCalculator = new OrderCalculator();
    const orderService = new OrderService(params, httpClient, orderCalculator);

    const cartService = new CartService(params, httpClient, orderCalculator);
    
    const shopService = new ShopService(params, httpClient);
    const organizationService = new OrganizationService(params, httpClient);

    const userService = new UserService(params, httpClient);

    // - handle payment methods
    // - ability to add a payment (other than stripe)

    const connector = {
        products: productService,
        attributes: attributeService,
        taxes: taxService,
        categories: categoryService,
        carts: cartService,
        orders: orderService,
        shops: shopService,
        organizations: organizationService,
        users: userService,
    }

    return connector;
}
