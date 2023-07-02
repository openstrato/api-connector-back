import axios, { AxiosResponse } from 'axios'
import { URL, URLSearchParams } from 'url';

export default class HttpClient
{
    async get(url: string, params, headers = {})
    {
        const response: AxiosResponse = await axios.get(url, {
            params: params,
            headers: headers,
        })

        return response.data;
    }

    async post(url: string, data, params, headers = {})
    {
        try {
            const response: AxiosResponse = await axios.post(
                url,
                data,
                {
                    headers: headers,
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
            params: params,
            headers: headers,
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
