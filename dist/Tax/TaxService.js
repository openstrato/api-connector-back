"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService_1 = require("../Common/BaseService");
class TaxService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.productApiUrl}/taxes`;
    }
}
exports.default = TaxService;
