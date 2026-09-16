import { BaseService } from "../Common/BaseService";
export interface ShopInterface {
    id: string;
    name: string;
    description?: string;
    users: ShopUserInterface[];
    translations?: ShopTranslationInterface[];
    channels: ShopChannelInterface[];
    languages?: ShopLanguageInterface[];
    createdAt?: string;
}
export interface ShopUserInterface {
    userId: string;
    scopes: string[];
}
export interface ShopTranslationInterface {
    lang: string;
    name: string;
    description?: string;
}
export interface ShopChannelInterface {
    id: string;
    name?: string;
    type: string;
    template?: string;
    domain?: string;
    scopes?: string[];
    translations?: {
        lang: string;
        name: string;
    }[];
}
export interface ShopLanguageInterface {
    code: string;
    isDefault: boolean;
}
export interface ShopAddEditInterface {
    translations: ShopTranslationInterface[];
    channels: ShopChannelAddEditInterface[];
    languages?: ShopLanguageInterface[];
}
export interface ShopChannelAddEditInterface {
    id?: string;
    translations: {
        lang: string;
        name: string;
    }[];
    type: string;
    template?: string;
    domain?: string;
    scopes?: string[];
}
export declare class ShopService extends BaseService<ShopInterface, ShopAddEditInterface, ShopAddEditInterface> {
    protected baseUrl: string;
}
