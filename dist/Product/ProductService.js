"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const BaseService_1 = require("../Common/BaseService");
class ProductService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.productApiUrl}/products`;
    }
}
exports.ProductService = ProductService;
