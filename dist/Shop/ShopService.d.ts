import { BaseService } from "../Common/BaseService";
export interface ShopInterface {
    id: string;
    users: ShopUserInterface[];
}
export interface ShopUserInterface {
    userId: string;
    scopes: string[];
}
export declare class ShopService extends BaseService<ShopInterface> {
    protected baseUrl: string;
}
