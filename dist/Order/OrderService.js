"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const BaseService_1 = require("../Common/BaseService");
class OrderService extends BaseService_1.BaseService {
    constructor(params, httpClient, orderCalculator) {
        super(params, httpClient);
        this.orderCalculator = orderCalculator;
        this.baseUrl = `${this.params.orderApiUrl}/orders`;
        this.confirm = (orderId) => __awaiter(this, void 0, void 0, function* () {
            const order = yield this.httpClient.post(`${this.baseUrl}/${orderId}/confirm`, {}, this.requestParams, this.requestHeaders);
            return order;
        });
        this.calculate = (cart, currency) => {
            return this.orderCalculator.calculateTotalPrice(cart.items, currency);
        };
    }
}
exports.OrderService = OrderService;
