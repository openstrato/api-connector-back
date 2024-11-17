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
exports.BaseService = void 0;
class BaseService {
    constructor(params, httpClient) {
        this.params = params;
        this.httpClient = httpClient;
        this.baseUrl = '';
        this.requestParams = {
            lang: this.params.lang,
        };
        this.requestHeaders = {};
        this.findById = (entityId, params = {}) => __awaiter(this, void 0, void 0, function* () {
            const entity = this.httpClient.get(`${this.baseUrl}/${entityId}`, Object.assign(Object.assign({}, this.requestParams), params), {});
            return entity;
        });
        this.update = (entityId, updateData) => __awaiter(this, void 0, void 0, function* () {
            const entity = this.httpClient.post(`${this.baseUrl}/${entityId}`, updateData, this.requestParams, {});
            return entity;
        });
        this.create = (createData) => __awaiter(this, void 0, void 0, function* () {
            const entity = this.httpClient.post(`${this.baseUrl}`, createData, this.requestParams, {});
            return entity;
        });
        this.delete = (entityId) => __awaiter(this, void 0, void 0, function* () {
            // TODO: still unsure what this will return
            const success = this.httpClient.delete(`${this.baseUrl}/${entityId}`, this.requestParams, {});
            return success;
        });
    }
    find(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const entities = this.httpClient.get(this.baseUrl, Object.assign(Object.assign({}, this.requestParams), params), {});
            return entities;
        });
    }
}
exports.BaseService = BaseService;
