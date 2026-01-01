import { BaseService } from "../Common/BaseService";

export interface LanguageTranslationInterface
{
    lang: string;
    name: string;
}

export interface LanguageInterface
{
    id: string;
    code: string;
    nativeName: string;
    name: string;
    translations: LanguageTranslationInterface[];
    createdAt: string;
    updatedAt: string;
}

export class LanguageService extends BaseService<LanguageInterface>
{
    protected baseUrl: string = `${this.params.shopApiUrl}/languages`;

    getByCode = async(code: string, params = {}): Promise<LanguageInterface> =>
    {
        const language = this.httpClient.get(
            `${this.baseUrl}/by-code/${code}`,
            {
                ...this.requestParams,
                ...params,
            },
        )

        return language;
    }
}
