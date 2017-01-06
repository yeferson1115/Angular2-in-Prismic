import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "../components/app.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {PrismicService} from '../service';
import {Home} from '../components/recetas.component';
import {Recipedetail} from '../components/recipedetail.component';
import {Category} from '../components/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import {IRecipeRepository,RecipeRepository} from '../Repositories/Recipe.Repository';
import {IRecipeService,RecipeService} from '../service/Recipe.Service';
import {ICategoryRepository,CategoryRepository} from '../Repositories/Category.Repository';
import {ICategoryService,CategoryService} from '../service/Category.Service';


// Use the endpoint of your repository
const ENDPOINT = 'https://carulla.cdn.prismic.io/api';
// Specify an access token if your API is set to private
const ACCESS_TOKEN = null;
// Customize this to match your routing pattern
function linkResolver(doc: any) {
  return `/${doc.type}/${doc.id}`;
}





@NgModule({
  declarations: [AppComponent, Category, Recipedetail, Home],
  imports     : [ReactiveFormsModule,BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [
    PrismicService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: IRecipeService, useClass: RecipeService},
    {provide: IRecipeRepository, useClass: RecipeRepository},
    {provide: ICategoryService, useClass: CategoryService},
    {provide: ICategoryRepository, useClass: CategoryRepository},
    { provide: 'PrismicEndpoint', useValue: ENDPOINT },
    { provide: 'PrismicAccessToken', useValue: ACCESS_TOKEN },
    { provide: 'LinkResolver', useValue: linkResolver }
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
