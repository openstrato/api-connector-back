"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeService = void 0;
const BaseService_1 = require("../Common/BaseService");
class AttributeService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.productApiUrl}/attributes`;
    }
}
exports.AttributeService = AttributeService;
