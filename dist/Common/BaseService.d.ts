import { ApiParamsInterface } from "..";
import HttpClient from "./HttpClient";
export declare class BaseService<T, createT = null, updateT = null> {
    protected params: ApiParamsInterface;
    protected httpClient: HttpClient;
    protected baseUrl: string;
    protected requestParams: any;
    protected requestHeaders: any;
    constructor(params: ApiParamsInterface, httpClient: HttpClient);
    find(params?: {}): Promise<T[]>;
    findById: (entityId: string) => Promise<T>;
    update: (entityId: string, updateData: updateT) => Promise<T>;
    create: (createData: createT) => Promise<T>;
    delete: (entityId: string) => Promise<boolean>;
}
