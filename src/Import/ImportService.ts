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

    startImport = async(importId: string, options?: { forceRestart?: boolean; forceImageRegeneration?: boolean }): Promise<any> => {
        const params: Record<string, string> = {}
        if (options?.forceRestart) params.forceRestart = 'true'
        if (options?.forceImageRegeneration !== undefined) params.forceImageRegeneration = String(options.forceImageRegeneration)

        const result = this.httpClient.post(
            `${this.baseUrl}/${importId}/start`,
            {},
            { ...this.requestParams, ...params },
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
