"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiConnector = void 0;
const AttributeService_1 = require("./Attribute/AttributeService");
const CartService_1 = require("./Cart/CartService");
const CategoryService_1 = require("./Category/CategoryService");
const HttpClient_1 = require("./Common/HttpClient");
const ImportService_1 = require("./Import/ImportService");
const OrderCalculator_1 = require("./Order/OrderCalculator");
const OrderService_1 = require("./Order/OrderService");
const OrganizationService_1 = require("./Organization/OrganizationService");
const ProductService_1 = require("./Product/ProductService");
const ShopService_1 = require("./Shop/ShopService");
const TaxService_1 = require("./Tax/TaxService");
const UserService_1 = require("./User/UserService");
const LanguageService_1 = require("./Language/LanguageService");
const defaultParams = {
    accessToken: undefined,
    channelToken: undefined,
    lang: 'en',
    currency: 'EUR',
    productApiUrl: 'http://api.shop.localhost/product-api',
    orderApiUrl: 'http://api.shop.localhost/order-api',
    cartApiUrl: 'http://api.shop.localhost/cart-api',
    extensionApiUrl: 'http://api.shop.localhost/extension-api',
    shopApiUrl: 'http://api.shop.localhost/shop-api',
    authApiUrl: 'http://api.shop.localhost/auth-api',
};
function apiConnector(params) {
    params = Object.assign(Object.assign({}, defaultParams), params);
    const httpClient = new HttpClient_1.default(params.accessToken, params.channelToken);
    const productService = new ProductService_1.ProductService(params, httpClient);
    const attributeService = new AttributeService_1.AttributeService(params, httpClient);
    const taxService = new TaxService_1.TaxService(params, httpClient);
    const categoryService = new CategoryService_1.CategoryService(params, httpClient);
    const importService = new ImportService_1.ImportService(params, httpClient);
    const orderCalculator = new OrderCalculator_1.default();
    const orderService = new OrderService_1.OrderService(params, httpClient, orderCalculator);
    const cartService = new CartService_1.CartService(params, httpClient, orderCalculator);
    const shopService = new ShopService_1.ShopService(params, httpClient);
    const organizationService = new OrganizationService_1.OrganizationService(params, httpClient);
    const userService = new UserService_1.UserService(params, httpClient);
    const languageService = new LanguageService_1.LanguageService(params, httpClient);
    // - handle payment methods
    // - ability to add a payment (other than stripe)
    const connector = {
        products: productService,
        attributes: attributeService,
        taxes: taxService,
        categories: categoryService,
        imports: importService,
        carts: cartService,
        orders: orderService,
        shops: shopService,
        organizations: organizationService,
        users: userService,
        languages: languageService,
    };
    return connector;
}
exports.apiConnector = apiConnector;
