"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const BaseService_1 = require("../Common/BaseService");
class CategoryService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.productApiUrl}/categories`;
    }
}
exports.CategoryService = CategoryService;
