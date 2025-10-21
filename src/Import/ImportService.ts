import { BaseService } from "../Common/BaseService";

interface Import
{
    id?: string;
    name: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
    csvFile?: string;
    mapping?: any;
}

interface ImportCreate
{
    name: string;
    csvFile?: any;
    mapping?: any;
}

interface ImportUpdate
{
    name?: string;
    csvFile?: any;
    mapping?: any;
}

export class ImportService extends BaseService<Import, ImportCreate, ImportUpdate>
{
    protected baseUrl: string = `${this.params.productApiUrl}/imports`

    startImport = async(importId: string): Promise<any> => {
        const result = this.httpClient.post(
            `${this.baseUrl}/${importId}/start`,
            {},
            this.requestParams,
            {}
        )

        return result;
    }

    previewImport = async(importId: string): Promise<any> => {
        const result = this.httpClient.post(
            `${this.baseUrl}/${importId}/preview`,
            {},
            this.requestParams,
            {}
        )

        return result;
    }
}
