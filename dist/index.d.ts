import { AttributeService } from "./Attribute/AttributeService";
import { CartService } from "./Cart/CartService";
import { CategoryService } from "./Category/CategoryService";
import { ImportService } from "./Import/ImportService";
import { OrderService } from "./Order/OrderService";
import { OrganizationService } from "./Organization/OrganizationService";
import { ProductService } from "./Product/ProductService";
import { ShopService } from "./Shop/ShopService";
import { TaxService } from "./Tax/TaxService";
import { UserService } from "./User/UserService";
import { LanguageService } from "./Language/LanguageService";
export interface ApiParamsInterface {
    accessToken?: string;
    channelToken?: string;
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
    taxes: TaxService;
    categories: CategoryService;
    imports: ImportService;
    carts: CartService;
    orders: OrderService;
    shops: ShopService;
    organizations: OrganizationService;
    users: UserService;
    languages: LanguageService;
};
