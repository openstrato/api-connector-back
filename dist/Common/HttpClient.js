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
const axios_1 = require("axios");
const url_1 = require("url");
class HttpClient {
    constructor(accessToken, channelToken) {
        this.defaultHeaders = {};
        this.withCredentials = true;
        if (accessToken && accessToken.length > 0) {
            this.defaultHeaders['Authorization'] = `Bearer ${accessToken}`; // only set if not `withCredentials=true`
            this.withCredentials = false;
        }
        if (channelToken && channelToken.length > 0) {
            this.defaultHeaders['channel-token'] = channelToken;
            this.withCredentials = false;
        }
    }
    get(url, params, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(url, {
                withCredentials: this.withCredentials,
                params: params,
                headers: Object.assign(Object.assign({}, headers), this.defaultHeaders),
            });
            return response.data;
        });
    }
    post(url, data, params, headers = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post(url, data, {
                    withCredentials: this.withCredentials,
                    headers: Object.assign(Object.assign({}, headers), this.defaultHeaders),
                    params: params,
                });
                return response.data;
            }
            catch (error) {
                throw new Error((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : error);
            }
        });
    }
    delete(url, params, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.delete(url, {
                withCredentials: this.withCredentials,
                params: params,
                headers: Object.assign(Object.assign({}, headers), this.defaultHeaders),
            });
            return response.data;
        });
    }
    generateUrl(url, params) {
        const queryParams = new url_1.URLSearchParams(params);
        const urlInstance = new url_1.URL(url);
        urlInstance.search = queryParams.toString();
        return urlInstance.toString();
    }
}
exports.default = HttpClient;
