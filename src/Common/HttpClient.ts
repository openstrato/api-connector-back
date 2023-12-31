import axios, { AxiosResponse } from 'axios'
import { URL, URLSearchParams } from 'url';

export default class HttpClient
{
    private defaultHeaders: any = {};
    private withCredentials: boolean = true;

    constructor(
        accessToken?: string
    ) {
        if (accessToken && accessToken.length > 0) {
            this.defaultHeaders['Authorization'] = `Bearer ${accessToken}` // only set if not `withCredentials=true`
            this.withCredentials = false
        }
    }

    async get(url: string, params, headers = {})
    {
        const response: AxiosResponse = await axios.get(url, {
            withCredentials: this.withCredentials,
            params: params,
            headers: {
                ...headers,
                ...this.defaultHeaders,
            },
        })

        return response.data
    }

    async post(url: string, data, params, headers = {})
    {
        try {
            const response: AxiosResponse = await axios.post(
                url,
                data,
                {
                    withCredentials: this.withCredentials,
                    headers: {
                        ...headers,
                        ...this.defaultHeaders,
                    },
                    params: params,
                }
            )

            return response.data;
        } catch (error) {            
            throw new Error(error.response?.data ?? error);
        }
    }

    async delete(url: string, params, headers = {})
    {
        const response: AxiosResponse = await axios.get(url, {
            withCredentials: this.withCredentials,
            params: params,
            headers: {
                ...headers,
                ...this.defaultHeaders,
            },
        })

        return response.data;
    }

    generateUrl(url: string, params): string
    {
        const queryParams: URLSearchParams = new URLSearchParams(params);
        const urlInstance = new URL(url);
        urlInstance.search = queryParams.toString();
        return urlInstance.toString();
    }
}
