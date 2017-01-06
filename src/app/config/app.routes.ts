import {Routes} from '@angular/router';
import {Home} from '../components/recetas.component';
import {Recipedetail} from '../components/recipedetail.component';
import {Category} from '../components/category.component';

export const rootRouterConfig: Routes = [
  {path: '', component: Home},  
  {path: 'recipedetail/:id', component: Recipedetail},
  {path: 'recetas/:name/:id', component: Home},
  {path: 'page/:pageppl', component: Home},
  {path: 'recetas/:id/:pagpagecateorye', component: Home},
  
];

