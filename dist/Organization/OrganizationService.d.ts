import { BaseService } from "../Common/BaseService";
export interface OrganizationInterface {
    id: string;
    name: string;
    users: OrganizationUserInterface[];
}
export interface OrganizationUserInterface {
    userId: string;
    scopes: string[];
}
export declare class OrganizationService extends BaseService<OrganizationInterface> {
    protected baseUrl: string;
}
