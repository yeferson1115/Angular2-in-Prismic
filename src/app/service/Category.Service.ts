import {ICategoryRepository,CategoryRepository} from '../Repositories/Category.Repository';
import {CategoryContract} from '../Repositories/Contracts/CategoryContract';
import { Injectable, Inject } from '@angular/core';
import {CategoryModel} from './Models/CategoryModel';
import {MapperHelper} from '../Helpers/MapperHelper';


export abstract class ICategoryService{

    abstract getAll() : Promise<Array<CategoryModel>>;
    abstract getById() : Promise<Array<CategoryModel>>;
}

@Injectable()
export class CategoryService implements ICategoryService{
    constructor(public categoryRepo: ICategoryRepository) { }

    getAll() : Promise<Array<CategoryModel>>{ 
        return this.categoryRepo.getAll().then(data => {
            return MapperHelper.MapCategoriesContractsToModels(data);
        });
    }
    getById() :Promise<Array<Object>>{
        return null;
    }

}