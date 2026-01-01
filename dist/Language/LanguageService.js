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
exports.LanguageService = void 0;
const BaseService_1 = require("../Common/BaseService");
class LanguageService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.shopApiUrl}/languages`;
        this.getByCode = (code, params = {}) => __awaiter(this, void 0, void 0, function* () {
            const language = this.httpClient.get(`${this.baseUrl}/by-code/${code}`, Object.assign(Object.assign({}, this.requestParams), params));
            return language;
        });
    }
}
exports.LanguageService = LanguageService;
