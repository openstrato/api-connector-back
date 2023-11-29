"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopService = void 0;
const BaseService_1 = require("../Common/BaseService");
class ShopService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.shopApiUrl}/shops`;
    }
}
exports.ShopService = ShopService;
