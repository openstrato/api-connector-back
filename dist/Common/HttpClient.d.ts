export default class HttpClient {
    get(url: string, params: any, headers?: {}): Promise<any>;
    post(url: string, data: any, params: any, headers?: {}): Promise<any>;
    delete(url: string, params: any, headers?: {}): Promise<any>;
    generateUrl(url: string, params: any): string;
}
