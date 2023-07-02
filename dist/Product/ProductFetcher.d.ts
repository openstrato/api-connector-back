import HttpClient from "../Common/HttpClient";
export interface ProductInterface {
    name: string;
}
export declare class ProductFetcher {
    private httpClient;
    private productApiUrl;
    constructor(httpClient: HttpClient, productApiUrl: string);
    find: () => Promise<ProductInterface[]>;
    findById: (productId: string) => Promise<ProductInterface>;
}
