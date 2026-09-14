import { BaseService } from "../Common/BaseService";
export interface AttributeInterface {
    id: string;
    label: string;
    code: string;
    type: string;
    values: AttributeValueInterface[];
    translations?: AttributeTranslationInterface[];
    createdAt?: string;
}
export interface AttributeValueInterface {
    id?: string;
    code: string;
    label?: string;
    translations?: AttributeValueTranslationInterface[];
}
export interface AttributeTranslationInterface {
    lang: string;
    label: string;
}
export interface AttributeValueTranslationInterface {
    lang: string;
    label: string;
}
export interface AttributeAddEditInterface {
    code: string;
    type: string;
    values: AttributeValueAddEditInterface[];
    translations: AttributeTranslationInterface[];
}
export interface AttributeValueAddEditInterface {
    id?: string;
    code: string;
    translations: AttributeValueTranslationInterface[];
}
export declare class AttributeService extends BaseService<AttributeInterface, AttributeAddEditInterface, AttributeAddEditInterface> {
    protected baseUrl: string;
}
