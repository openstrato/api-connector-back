import { BaseService } from "../Common/BaseService";
export interface User {
    id: string;
    name: string;
    lastName: string;
    email: string;
    org?: {
        orgId: string;
        scopes: string[];
    };
    createdAt?: string;
}
export interface UserAddEditInterface {
    name?: string;
    lastName?: string;
    email?: string;
}
export declare class UserService extends BaseService<User, UserAddEditInterface, UserAddEditInterface> {
    protected baseUrl: string;
}
