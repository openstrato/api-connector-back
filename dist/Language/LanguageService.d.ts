import { BaseService } from "../Common/BaseService";
export interface LanguageTranslationInterface {
    lang: string;
    name: string;
}
export interface LanguageInterface {
    id: string;
    code: string;
    nativeName: string;
    name: string;
    translations: LanguageTranslationInterface[];
    createdAt: string;
    updatedAt: string;
}
export declare class LanguageService extends BaseService<LanguageInterface> {
    protected baseUrl: string;
    getByCode: (code: string, params?: {}) => Promise<LanguageInterface>;
}
