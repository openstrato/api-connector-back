import { BaseService } from "../Common/BaseService";
interface Tax {
    code: string;
    rate: number;
    translations: TaxTranslation[];
}
interface TaxTranslation {
    lang: string;
    name: string;
}
export default class TaxService extends BaseService<Tax, Tax, Tax> {
    protected baseUrl: string;
}
export {};
