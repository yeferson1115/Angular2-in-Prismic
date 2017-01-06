import {Component, Inject, OnInit} from '@angular/core';
import {PrismicService} from '../vendors/prismic-service';
import {IRecipeService,RecipeService} from '../service/Recipe.Service'
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {RecipeContract} from '../Repositories/Contracts/RecipeContract';

import {RecipeModel} from '../service/Models/RecipeModel'

@Component({
  selector: 'recipedetail',
  styleUrls: ['../views/recipedetail/recipedetail.css'],
  templateUrl: '../views/recipedetail/recipedetail.html'
})
export class Recipedetail implements OnInit {
_recipe;

   documents: Array<any>;
  
  private sub: any;
  private document: any;
  private loaded: boolean = false;
  private detals: boolean = false;
  private category :any;

  constructor(
    private recipeService:IRecipeService,
    private route: ActivatedRoute,   
    private prismic: PrismicService,
    @Inject('LinkResolver') private linkResolver: {(doc: any): string}
  ) {}

  ngOnInit() {
    
    let self = this;
      this.route.params
    .subscribe((params) => {
       self.recipeService.getById(params['id']).then(data => {               
            this._recipe = data; 
            console.log(this._recipe);  
                           
  }).catch(function(){
    //ERROR
  });

    });

  }

}
