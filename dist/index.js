"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiConnector = void 0;
const AttributeService_1 = require("./Attribute/AttributeService");
const CartService_1 = require("./Cart/CartService");
const HttpClient_1 = require("./Common/HttpClient");
const OrderService_1 = require("./Order/OrderService");
const ProductService_1 = require("./Product/ProductService");
const TaxService_1 = require("./Tax/TaxService");
function apiConnector(params) {
    const httpClient = new HttpClient_1.default();
    const productService = new ProductService_1.ProductService(params, httpClient);
    const attributeService = new AttributeService_1.AttributeService(params, httpClient);
    const cartService = new CartService_1.CartService(params, httpClient);
    const orderService = new OrderService_1.OrderService(params, httpClient);
    const taxServce = new TaxService_1.default(params, httpClient);
    // - handle payment methods
    // - ability to add a payment (other than stripe)
    const connector = {
        products: productService,
        attributes: attributeService,
        carts: cartService,
        orders: orderService,
        taxes: taxServce,
    };
    return connector;
}
exports.apiConnector = apiConnector;
