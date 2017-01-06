import { Component, Inject, OnInit , Input} from '@angular/core';
import { PrismicService } from '../vendors/prismic-service';
import { IRecipeService, RecipeService } from '../service/Recipe.Service'
import { ICategoryService, CategoryService } from '../service/Category.Service'
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecipeContract } from '../Repositories/Contracts/RecipeContract';
import { RecipeModel } from '../service/Models/RecipeModel'
import { CategoryContract } from '../Repositories/Contracts/CategoryContract';
import { CategoryModel } from '../service/Models/CategoryModel'


@Component({
  selector: 'recetas',
  styleUrls: ['../views/recetas/recetas.css'],
  templateUrl: '../views/recetas/recetas.html'
})
export class Home implements OnInit {
  @Input() search: string;
  _recipes: any;
  _categories: any;
  _pages;
  _idCategory;
  _numPage;
  _nameCategory;
  _preloader: boolean= false;


  constructor(
    private CategoryService: ICategoryService,
    private recipeService: IRecipeService,
    private route: ActivatedRoute,  
    private prismicService: PrismicService,
    
    )
  { 
   
  }

    searchterms(terms){
      this._preloader=true;
      this.recipeService.getAllBySearch(terms,20).then(data => {
          //LLEGARON
          this._recipes = data[0];     
           this._pages = Array(data[1]).fill(1).map((x,i)=> i);
           this._nameCategory = 'Resultados de búsqueda';
           this._preloader=false;
        }).catch(function () {
          //ERROR
        });
    }

  ngOnInit() {  
    this._preloader=true;       
    
      let self = this;
       //Recetas según categoria
      this.route.params.subscribe((params) => {
        if(params['pageppl']!=undefined){
             this.recipeService.getAll(12,params['pageppl']).then(data => {
                  //LLEGARON
                  this._recipes = data[0];                
                  this._pages = Array(data[1]).fill(1).map((x,i)=> i);
                  this._preloader=false;
                }).catch(function () {
                  //ERROR
                });
        }else if(params['pagecateory']!=undefined){
         
            self.recipeService.getAllByCategoryId(params['id'], 12,params['pagpagecateorye']).then(data => {               
            this._recipes = data[0]; 
            this._pages = Array(data[1]).fill(1).map((x,i)=> i);
            this._idCategory= params['id'];
            this._nameCategory= params['name'];
            this._preloader=false;
        }).catch(function(){
          //ERROR
        });
        }else if(params['id']!=undefined){         
            self.recipeService.getAllByCategoryId(params['id'], 12,1).then(data => {               
            this._recipes = data[0]; 
            this._pages = Array(data[1]).fill(1).map((x,i)=> i);
            this._idCategory= params['id'];
            this._nameCategory= params['name'];
            this._preloader=false;
        }).catch(function(){
          //ERROR
        });
      }else{
        //Todas las recetas
            this.recipeService.getAll(12,1).then(data => {
              //LLEGARON
              this._recipes = data[0];     
              this._pages = Array(data[1]).fill(1).map((x,i)=> i);
              this._preloader=false;
              //
          
            }).catch(function () {
              //ERROR
            });
      }
   }); 
           

//Categorias para formar el menú
    this.CategoryService.getAll().then(data => {
      //LLEGARO
      this._categories = data;
      this._preloader=false;
      //console.log(this._categories);
    }).catch(function (err) {
      throw err;
    }) 
}


}
