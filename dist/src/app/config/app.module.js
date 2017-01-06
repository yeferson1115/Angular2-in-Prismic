"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("../components/app.component");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var service_1 = require("../service");
var recetas_component_1 = require("../components/recetas.component");
var recipedetail_component_1 = require("../components/recipedetail.component");
var category_component_1 = require("../components/category.component");
var forms_2 = require("@angular/forms");
var recipe_repository_1 = require("../repositories/recipe.repository");
var Recipe_Service_1 = require("../service/Recipe.Service");
// Use the endpoint of your repository
var ENDPOINT = 'https://carulla.cdn.prismic.io/api';
// Specify an access token if your API is set to private
var ACCESS_TOKEN = null;
// Customize this to match your routing pattern
function linkResolver(doc) {
    return "/" + doc.type + "/" + doc.id;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, category_component_1.Category, recipedetail_component_1.Recipedetail, recetas_component_1.Home],
        imports: [forms_2.ReactiveFormsModule, platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routes_1.rootRouterConfig)],
        providers: [
            service_1.PrismicService,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            { provide: recipe_repository_1.IRecipeRepository, useClass: recipe_repository_1.RecipeRepository },
            Recipe_Service_1.RecipeService,
            { provide: 'PrismicEndpoint', useValue: ENDPOINT },
            { provide: 'PrismicAccessToken', useValue: ACCESS_TOKEN },
            { provide: 'LinkResolver', useValue: linkResolver }
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map