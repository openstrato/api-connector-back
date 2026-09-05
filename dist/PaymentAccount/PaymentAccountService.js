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
            var _a, _b, _c;
            try {
                return yield this.httpClient.get(`${this.baseUrl}/stripe/authorize-url`, Object.assign(Object.assign({}, this.requestParams), { shopIds }), {});
            }
            catch (error) {
                throw new Error((_c = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) !== null && _c !== void 0 ? _c : error.message);
            }
        });
        // The reconnect-url and authorize-url endpoints return 409 with { message, conflictingAccountId }
        // when the requested shops are already scoped to another account — surface that message as-is
        // instead of the generic axios "Request failed with status code 409".
        this.getReconnectUrl = (accountId) => __awaiter(this, void 0, void 0, function* () {
            var _d, _e, _f;
            try {
                return yield this.httpClient.get(`${this.baseUrl}/${accountId}/stripe/reconnect-url`, this.requestParams, {});
            }
            catch (error) {
                throw new Error((_f = (_e = (_d = error.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.message) !== null && _f !== void 0 ? _f : error.message);
            }
        });
        this.disconnect = (accountId) => __awaiter(this, void 0, void 0, function* () {
            const account = yield this.httpClient.post(`${this.baseUrl}/${accountId}/disconnect`, {}, this.requestParams, {});
            return account;
        });
        this.updateShopIds = (accountId, shopIds) => __awaiter(this, void 0, void 0, function* () {
            const account = yield this.httpClient.patch(`${this.baseUrl}/${accountId}`, { shopIds }, this.requestParams, {});
            return account;
        });
    }
}
exports.PaymentAccountService = PaymentAccountService;
