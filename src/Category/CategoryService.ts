import { BaseService } from "../Common/BaseService";

export interface CategoryInterface
{
    id: string;
    code?: string;
    name: string;
    slug: string;
    parentId?: string | null;
    shops?: { shopId: string }[];
    translations: CategoryTranslationInterface[];
    parents?: CategoryInterface[];
    children?: CategoryInterface[];
    createdAt?: string;
}

export interface CategoryTranslationInterface
{
    lang: string;
    name?: string;
    description?: string;
}

export interface CategoryAddEditInterface
{
    code: string;
    parentId?: string | null;
    shops: string[];
    i18n: CategoryTranslationInterface[];
}

export class CategoryService extends BaseService<CategoryInterface, CategoryAddEditInterface, CategoryAddEditInterface>
{
    protected baseUrl: string = `${this.params.productApiUrl}/categories`;
}
