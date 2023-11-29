import { ApiParamsInterface } from "..";
import HttpClient from "./HttpClient";

export class BaseService<T, createT = null, updateT = null>
{
    protected baseUrl = '';

    protected requestParams: any = {
        lang: this.params.lang,
    }

    protected requestHeaders: any = {}

    constructor(
        protected params: ApiParamsInterface,
        protected httpClient: HttpClient
    ) {}

    find = async(params = {}): Promise<T[]> => {
        const entities = this.httpClient.get(
            this.baseUrl,
            {
                ...this.requestParams,
                ...params
            },
            {}
        )

        return entities;
    }

    findById = async(entityId: string): Promise<T> => {
        const entity = this.httpClient.get(
            `${this.baseUrl}/${entityId}`,
            this.requestParams,
            {}
        )

        return entity;
    }

    update = async(entityId: string, updateData: updateT): Promise<T> => {
        const entity = this.httpClient.post(
            `${this.baseUrl}/${entityId}`,
            updateData,
            this.requestParams,
            {}
        )

        return entity;
    }

    create = async(createData: createT): Promise<T> => {
        const entity = this.httpClient.post(
            `${this.baseUrl}`,
            createData,
            this.requestParams,
            {}
        )

        return entity;
    }

    delete = async(entityId: string): Promise<boolean> => {
        // TODO: still unsure what this will return
        const success = this.httpClient.delete(
            `${this.baseUrl}/${entityId}`,
            this.requestParams,
            {}
        )

        return success;
    }
}
