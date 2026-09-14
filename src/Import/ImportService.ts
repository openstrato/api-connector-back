import { BaseService } from "../Common/BaseService";

export interface ImportInterface
{
    id?: string;
    type: string;
    status?: string;
    progress?: number;
    estimatedRecords?: number;
    processedRecords?: number;
    successfulRecords?: number;
    failedRecords?: number;
    errorMessage?: string;
    errors?: string[];
    csvUrl?: string;
    template?: Record<string, any>;
    startedAt?: Date;
    completedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ImportAddEditInterface
{
    type: string;
    template: Record<string, any>;
    csvUrl?: string;
}

export class ImportService extends BaseService<ImportInterface, ImportAddEditInterface, ImportAddEditInterface>
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

    previewImport = async(importId: string, limit?: number): Promise<any> => {
        const params: Record<string, string> = {}
        if (limit !== undefined) params.limit = String(limit)

        const result = this.httpClient.post(
            `${this.baseUrl}/${importId}/preview`,
            {},
            { ...this.requestParams, ...params },
            {}
        )

        return result;
    }
}
