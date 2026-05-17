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
exports.ImportService = void 0;
const BaseService_1 = require("../Common/BaseService");
class ImportService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.productApiUrl}/imports`;
        this.startImport = (importId, options) => __awaiter(this, void 0, void 0, function* () {
            const params = {};
            if (options === null || options === void 0 ? void 0 : options.forceRestart)
                params.forceRestart = 'true';
            if ((options === null || options === void 0 ? void 0 : options.forceImageRegeneration) !== undefined)
                params.forceImageRegeneration = String(options.forceImageRegeneration);
            const result = this.httpClient.post(`${this.baseUrl}/${importId}/start`, {}, Object.assign(Object.assign({}, this.requestParams), params), {});
            return result;
        });
        this.previewImport = (importId) => __awaiter(this, void 0, void 0, function* () {
            const result = this.httpClient.post(`${this.baseUrl}/${importId}/preview`, {}, this.requestParams, {});
            return result;
        });
    }
}
exports.ImportService = ImportService;
