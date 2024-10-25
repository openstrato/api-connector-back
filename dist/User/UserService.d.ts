import { BaseService } from "../Common/BaseService";
export interface User {
    id: string;
    name: string;
    lastName: string;
    email: string;
}
export declare class UserService extends BaseService<User> {
    protected baseUrl: string;
}
