"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxService = void 0;
const BaseService_1 = require("../Common/BaseService");
class TaxService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.productApiUrl}/taxes`;
    }
}
exports.TaxService = TaxService;
