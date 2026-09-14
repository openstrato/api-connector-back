import { BaseService } from "../Common/BaseService";
export interface OrganizationInterface {
    id: string;
    name: string;
    users: OrganizationUser[];
    translations?: OrganizationTranslationInterface[];
    languages?: OrganizationLanguageInterface[];
    createdAt?: string;
}
export interface OrganizationUser {
    userId: string;
    scopes: string[];
}
export interface OrganizationTranslationInterface {
    lang: string;
    name: string;
}
export interface OrganizationLanguageInterface {
    code: string;
    isDefault: boolean;
}
export interface OrganizationAddEditInterface {
    translations: OrganizationTranslationInterface[];
    languages?: OrganizationLanguageInterface[];
}
export declare class OrganizationService extends BaseService<OrganizationInterface, OrganizationAddEditInterface, OrganizationAddEditInterface> {
    protected baseUrl: string;
}
