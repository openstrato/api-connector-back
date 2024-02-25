import { AttributeService } from "./Attribute/AttributeService";
import { CartService } from "./Cart/CartService";
import { OrderService } from "./Order/OrderService";
import { OrganizationService } from "./Organization/OrganizationService";
import { ProductService } from "./Product/ProductService";
import { ShopService } from "./Shop/ShopService";
import TaxService from "./Tax/TaxService";
import UserService from "./User/UserService";
export interface ApiParamsInterface {
    accessToken?: string;
    lang?: string;
    currency?: string;
    productApiUrl?: string;
    cartApiUrl?: string;
    orderApiUrl?: string;
    extensionApiUrl?: string;
    shopApiUrl?: string;
    authApiUrl?: string;
}
export declare function apiConnector(params: ApiParamsInterface): {
    products: ProductService;
    attributes: AttributeService;
    carts: CartService;
    orders: OrderService;
    taxes: TaxService;
    shops: ShopService;
    organizations: OrganizationService;
    users: UserService;
};
