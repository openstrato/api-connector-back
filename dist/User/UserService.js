"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService_1 = require("../Common/BaseService");
class UserService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.authApiUrl}/users`;
    }
}
exports.default = UserService;
