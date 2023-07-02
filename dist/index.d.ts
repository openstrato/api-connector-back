import { AttributeService } from "./Attribute/AttributeService";
import { CartService } from "./Cart/CartService";
import { OrderService } from "./Order/OrderService";
import { ProductService } from "./Product/ProductService";
import TaxService from "./Tax/TaxService";
export interface ApiParamsInterface {
    lang: string;
    currency: string;
    productApiUrl: string;
    cartApiUrl: string;
    orderApiUrl: string;
    extensionApiUrl: string;
}
export declare function apiConnector(params: ApiParamsInterface): {
    products: ProductService;
    attributes: AttributeService;
    carts: CartService;
    orders: OrderService;
    taxes: TaxService;
};
