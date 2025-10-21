import { BaseService } from "../Common/BaseService";
interface Import {
    id?: string;
    name: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
    csvFile?: string;
    mapping?: any;
}
interface ImportCreate {
    name: string;
    csvFile?: any;
    mapping?: any;
}
interface ImportUpdate {
    name?: string;
    csvFile?: any;
    mapping?: any;
}
export declare class ImportService extends BaseService<Import, ImportCreate, ImportUpdate> {
    protected baseUrl: string;
    startImport: (importId: string) => Promise<any>;
    previewImport: (importId: string) => Promise<any>;
}
export {};
