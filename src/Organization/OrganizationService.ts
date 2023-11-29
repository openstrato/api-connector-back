import { BaseService } from "../Common/BaseService";

export interface OrganizationInterface
{
    id: string;
    name: string;
    users: OrganizationUser[];
}

export interface OrganizationUser
{
    userId: string;
    scopes: string[];
}

export class OrganizationService extends BaseService<OrganizationInterface>
{
    protected baseUrl: string = `${this.params.shopApiUrl}/organizations`
}
