import { BaseService } from "../Common/BaseService";
export interface TaxInterface {
    id: string;
    code: string;
    name: string;
    rate: number;
    translations: TaxTranslation[];
    createdAt?: string;
}
export interface TaxTranslation {
    lang: string;
    name: string;
}
export interface TaxAddEditInterface {
    code: string;
    rate: number;
    translations: TaxTranslation[];
}
export declare class TaxService extends BaseService<TaxInterface, TaxAddEditInterface, TaxAddEditInterface> {
    protected baseUrl: string;
}
