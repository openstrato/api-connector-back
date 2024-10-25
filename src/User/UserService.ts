import { BaseService } from "../Common/BaseService";

export interface User
{
    id: string;
    name: string;
    lastName: string;
    email: string;
}

export class UserService extends BaseService<User>
{
    protected baseUrl = `${this.params.authApiUrl}/users`
}
