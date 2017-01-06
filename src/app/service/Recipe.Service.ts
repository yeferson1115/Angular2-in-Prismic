import {IRecipeRepository,RecipeRepository} from '../Repositories/Recipe.Repository';
import {RecipeContract} from '../Repositories/Contracts/RecipeContract';
import { Injectable, Inject } from '@angular/core';
import {RecipeModel} from './Models/RecipeModel';
import {MapperHelper} from '../Helpers/MapperHelper';


export abstract class IRecipeService{

    abstract getAll(skip:Number,page:Number) : Promise<[Array<RecipeModel>,number]>;
    abstract getById(recipeId: String) : Promise<Array<RecipeModel>>;
    abstract getAllByCategoryId(categoryId:String,skip:Number, page:Number) : Promise<[Array<RecipeModel>,number]>;
    abstract getAllBySearch(term:String,skip:Number) : Promise<[Array<RecipeModel>,number]>;
}

@Injectable()
export class RecipeService implements IRecipeService{
    constructor(public recipeRepo: IRecipeRepository) { }

    getAll(skip:Number,page:Number) : Promise<[Array<RecipeModel>,number]>{
        
        return this.recipeRepo.getAll(skip,page).then(data => {
            let contract: [Array<RecipeModel>, number];
            contract = [MapperHelper.MapRecipesContractsToModels(data[0]),data[1]];
            return contract;
        });
    }
    getById(recipeId:String) :Promise<Array<RecipeModel>>{
        return this.recipeRepo.getById(recipeId).then(data =>{
            return MapperHelper.MapRecipesContractsToModels(data);
        });
    }

      getAllByCategoryId(categoryId:String,skip:Number,page:Number) :Promise<[Array<RecipeModel>,number]>{
        return this.recipeRepo.getAllByCategoryId(categoryId,skip,page).then(data =>{
            let contract: [Array<RecipeModel>, number];
            contract=[MapperHelper.MapRecipesContractsToModels(data[0]),data[1]];
            return contract;
        });
    }
     getAllBySearch(term:String,skip:Number) : Promise<[Array<RecipeModel>,number]>{        
        return this.recipeRepo.getAllBySearch(term,skip).then(data => {
            let contracts: [Array<RecipeModel>, number];
            contracts=[MapperHelper.MapRecipesContractsToModels(data[0]),data[1]];
            return contracts;
        });
    }

}