import { BaseService } from "../Common/BaseService";

export interface CategoryInterface
{
    id: string;
    name: string;
    slug: string;
    parentId?: string | null;
    translations: CategoryTranslationInterface[];
    parents?: CategoryInterface[];
    children?: CategoryInterface[];
}

export interface CategoryTranslationInterface
{
    lang: string;
    name?: string;
    description?: string;
}

export interface CategoryAddEditInterface
{
    id?: string;
    translations: CategoryTranslationInterface[]; 
}

export class CategoryService extends BaseService<CategoryInterface, CategoryAddEditInterface, CategoryAddEditInterface>
{
    protected baseUrl: string = `${this.params.productApiUrl}/categories`;
}
