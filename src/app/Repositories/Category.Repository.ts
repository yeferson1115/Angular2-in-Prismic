import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {PrismicService} from '../vendors/prismic-service';
import { Prismic } from 'prismic.io';
import {CategoryContract} from './Contracts/CategoryContract';
import {MapperHelper} from '../Helpers/MapperHelper';

export abstract class ICategoryRepository{

    abstract getAll() : Promise<Array<CategoryContract>>;    
    abstract getById(categoryId:String): Promise<Array<CategoryContract>>;  

}

@Injectable()
export class CategoryRepository implements ICategoryRepository{
    constructor(private prismicService: PrismicService) { 
    }

    getAll() : Promise<Array<CategoryContract>>{
      
      return this.prismicService.api().then((api) => 
            api.query(Prismic.Predicates.at('document.type','categoria'),
             { 
                orderings :'[my.categoria.title]'
            }))
            .then((response) => {
                
                var contracts:Array<CategoryContract> = MapperHelper.MapCategoriesFromPrismic(response.results);
                return contracts;
           }).catch(err => Promise.reject(err));


    }
    getById(recipeId:String): Promise<Array<CategoryContract>>{  
        
   return null
       
    }
 
}