"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationService = void 0;
const BaseService_1 = require("../Common/BaseService");
class OrganizationService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.shopApiUrl}/organizations`;
    }
}
exports.OrganizationService = OrganizationService;
