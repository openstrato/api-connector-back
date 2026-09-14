import { BaseService } from "../Common/BaseService";
export interface ImportInterface {
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
export interface ImportAddEditInterface {
    type: string;
    template: Record<string, any>;
    csvUrl?: string;
}
export declare class ImportService extends BaseService<ImportInterface, ImportAddEditInterface, ImportAddEditInterface> {
    protected baseUrl: string;
    startImport: (importId: string, options?: {
        forceRestart?: boolean;
        forceImageRegeneration?: boolean;
    }) => Promise<any>;
    previewImport: (importId: string, limit?: number) => Promise<any>;
}
