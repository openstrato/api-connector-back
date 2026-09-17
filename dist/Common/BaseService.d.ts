import { ApiParamsInterface } from "..";
import HttpClient from "./HttpClient";
export interface FieldSchemaEntryInterface {
    name: string;
    type: string;
    groups: string[];
    nested?: FieldSchemaEntryInterface[];
}
export declare class BaseService<T, createT = null, updateT = null> {
    protected params: ApiParamsInterface;
    protected httpClient: HttpClient;
    protected baseUrl: string;
    protected requestParams: any;
    protected requestHeaders: any;
    constructor(params: ApiParamsInterface, httpClient: HttpClient);
    find(params?: {}): Promise<T[]>;
    findById: (entityId: string, params?: {}) => Promise<T>;
    update: (entityId: string, updateData: updateT) => Promise<T>;
    create: (createData: createT) => Promise<T>;
    updateBulk: (data: any) => Promise<any>;
    getSchema: () => Promise<FieldSchemaEntryInterface[]>;
    delete: (entityId: string) => Promise<boolean>;
}
