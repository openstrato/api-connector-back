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
exports.PaymentAccountService = void 0;
const BaseService_1 = require("../Common/BaseService");
class PaymentAccountService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.extensionApiUrl}/accounts`;
        this.getStripeAuthorizeUrl = (shopIds) => __awaiter(this, void 0, void 0, function* () {
            const url = yield this.httpClient.get(`${this.baseUrl}/stripe/authorize-url`, Object.assign(Object.assign({}, this.requestParams), { shopIds }), {});
            return url;
        });
        this.disconnect = (accountId) => __awaiter(this, void 0, void 0, function* () {
            const account = yield this.httpClient.post(`${this.baseUrl}/${accountId}/disconnect`, {}, this.requestParams, {});
            return account;
        });
    }
}
exports.PaymentAccountService = PaymentAccountService;
