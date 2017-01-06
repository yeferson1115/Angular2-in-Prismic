import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {PrismicService} from '../vendors/prismic-service';
import { Prismic } from 'prismic.io';
import {RecipeContract} from './Contracts/RecipeContract';
import {MapperHelper} from '../Helpers/MapperHelper';

export abstract class IRecipeRepository{

    abstract getAll(skip:Number, page:Number) : Promise<[Array<RecipeContract>,number]>;
    abstract getAllByCategoryId(categoryId:String, skip:Number, page:Number) : Promise<[Array<RecipeContract>,number]>;
    abstract getAllBySearch(term:String,skip:Number) : Promise<[Array<RecipeContract>,number]>;
    abstract getById(recipeId:String): Promise<Array<RecipeContract>>;
   

}

@Injectable()
export class RecipeRepository implements IRecipeRepository{
    constructor(private prismicService: PrismicService) { 
    }

    getAll(skip:Number,page:Number) : Promise<[Array<RecipeContract>,number]>{
      return this.prismicService.api().then((api) => 
            api.query(Prismic.Predicates.at('document.type','recetas'),
            {   pageSize:skip,
                page:page,
                orderings :'[my.recetas.tittle]'
            }))
            .then((response) => {
                let contract: [Array<RecipeContract>, number];
                contract = [MapperHelper.MapRecipesFromPrismic(response.results),<number>response.total_pages];
                return contract;
           });

    }
    getById(recipeId:String): Promise<Array<RecipeContract>>{ 
       return this.prismicService.api().then((api) => 
            api.query(Prismic.Predicates.at('document.id',recipeId)))
            .then((response) => {
                var contracts:Array<RecipeContract> = MapperHelper.MapRecipesFromPrismic(response.results);
                return contracts;
           });
       
    }
    getAllByCategoryId(categoryId:String,skip:Number, page:Number) : Promise<[Array<RecipeContract>,number]>{
        return this.prismicService.api().then((api) => api.query('[[:d=at(my.recetas.category,"'+categoryId+'")]]',{
            pageSize:skip,
            page:page,
        }))
            .then((response) => {
                let contract: [Array<RecipeContract>, number];
                 contract=[MapperHelper.MapRecipesFromPrismic(response.results),<number>response.total_pages];
                return contract;
           });
    }
    
    getAllBySearch(term:String,skip:Number) : Promise<[Array<RecipeContract>,number]>{
        return this.prismicService.api().then((api) => 
            api.query([Prismic.Predicates.at('document.type','recetas'),Prismic.Predicates.fulltext('document',term)]))
            .then((response) => {
                let contracts: [Array<RecipeContract>, number];
                 contracts=[MapperHelper.MapRecipesFromPrismic(response.results),<number>response.total_pages];
                return contracts;
           });
    }

  
}



