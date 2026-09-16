import { BaseService } from "../Common/BaseService";

export interface User
{
    id: string;
    name: string;
    lastName: string;
    email: string;
    org?: { orgId: string; scopes: string[] };
    createdAt?: string;
}

export interface UserAddEditInterface
{
    name?: string;
    lastName?: string;
    email?: string;
}

// There is no id-less create route (POST /users/:id doubles as create-or-edit) — use update()
// with a known user id for both.
export class UserService extends BaseService<User, UserAddEditInterface, UserAddEditInterface>
{
    protected baseUrl = `${this.params.authApiUrl}/users`
}
