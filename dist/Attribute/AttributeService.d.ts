import { BaseService } from "../Common/BaseService";
export interface AttributeInterface {
    id: string;
    label: string;
    code: string;
    type: string;
    values: AttributeValueInterface[];
}
export interface AttributeValueInterface {
}
export declare class AttributeService extends BaseService<AttributeInterface> {
    protected baseUrl: string;
}
