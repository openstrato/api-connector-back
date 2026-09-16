"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const BaseService_1 = require("../Common/BaseService");
// There is no id-less create route (POST /users/:id doubles as create-or-edit) — use update()
// with a known user id for both.
class UserService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.authApiUrl}/users`;
    }
}
exports.UserService = UserService;
