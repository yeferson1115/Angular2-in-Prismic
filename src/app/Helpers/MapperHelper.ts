import { Prismic } from 'prismic.io';
import {RecipeContract} from '../Repositories/Contracts/RecipeContract';
import {RecipeModel} from '../service/Models/RecipeModel';
import {CategoryContract} from '../Repositories/Contracts/CategoryContract';
import {CategoryModel} from '../service/Models/CategoryModel';

export class MapperHelper{

    constructor(){}

    static MapRecipeFromPrismic(document:any):RecipeContract{        
        var contract: RecipeContract = new RecipeContract();
        contract.Id = document["id"];        
        var data = document["data"];
        contract.Title = data["recetas.tittle"]["value"];        
        contract.ImageUrl = data["recetas.image"]["value"]["main"]["url"];
        contract.TypeRecipe = data["recetas.typerecipe"]["value"];
        contract.Difficulty = data["recetas.difficulty"]["value"]; 
        contract.Magazine = data["recetas.magazine"]["value"];       
        contract.Time = data["recetas.time"]["value"];
        contract.ShortDescription = data["recetas.shortdescription"]["value"];
        contract.Process = data["recetas.process"]["value"];
        contract.Ingredients = data["recetas.ingredients"]["value"]; 
        return contract;
    }
    
    static MapRecipesFromPrismic(documents:Array<any>):Array<RecipeContract>{
        var contracts: Array<RecipeContract> = new Array<RecipeContract>();
        for(let i of documents){
            contracts.push(this.MapRecipeFromPrismic(i));    
        }
        return contracts;
    }

    static MapRecipesContractsToModels(contracts:Array<RecipeContract>):Array<RecipeModel>{
        var models: Array<RecipeModel> = new Array<RecipeModel>();
        
        for(let i of contracts){
            models.push(this.MapRecipeContractToModel(i));    
        }
        return models;
    }

     static MapRecipeContractToModel(contract:RecipeContract):RecipeModel{
        var model:RecipeModel = new RecipeModel();
        model.Id = contract.Id;
        model.Title = contract.Title;
        model.ImageUrl = contract.ImageUrl;
        model.TypeRecipe = contract.TypeRecipe;               
        model.Difficulty = contract.Difficulty;
        model.Magazine = contract.Magazine;
        model.Time = contract.Time;
        model.ShortDescription = contract.ShortDescription;
        model.Process = contract.Process;
        model.Ingredients = contract.Ingredients;

        return model;
    }

    //Mapeo de categorias

     static MapCategoryFromPrismic(document:any):CategoryContract{
        var contract: CategoryContract = new CategoryContract();
        contract.Id = document["id"];        
        var data = document["data"];
        contract.Title = data["categoria.title"]["value"];        
        
        return contract;
    }
    
    static MapCategoriesFromPrismic(documents:Array<any>):Array<CategoryContract>{
        var contracts: Array<CategoryContract> = new Array<CategoryContract>();
        for(let i of documents){
            contracts.push(this.MapCategoryFromPrismic(i));    
        }
        return contracts;
    }

    static MapCategoriesContractsToModels(contracts:Array<CategoryContract>):Array<CategoryModel>{
        var models: Array<CategoryModel> = new Array<CategoryModel>();
        
        for(let i of contracts){
            models.push(this.MapCategoryContractToModel(i));    
        }
        return models;
    }

     static MapCategoryContractToModel(contract:CategoryContract):CategoryModel{
        var model:CategoryModel = new CategoryModel();
        model.Id = contract.Id;
        model.Title = contract.Title;
     

        return model;
    }


}