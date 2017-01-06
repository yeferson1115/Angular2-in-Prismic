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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var prismic_service_1 = require("../vendors/prismic-service");
var Recipe_Service_1 = require("../service/Recipe.Service");
var forms_1 = require("@angular/forms");
var Home = (function () {
    function Home(recipeService, formBuilder, prismicService, linkResolver) {
        var _this = this;
        this.recipeService = recipeService;
        this.formBuilder = formBuilder;
        this.prismicService = prismicService;
        this.linkResolver = linkResolver;
        prismicService.api().then(function (api) { return api.query(''); }).then(function (response) {
            _this.documents = response.results;
        });
    }
    Home.prototype.ngOnInit = function () {
        this.recipeService.getAll(1).then(function (arr) {
            //ARRAY
            alert(arr.splice(0, 1));
        }).catch(function () {
            //ERROR
        });
        this.myForm = this.formBuilder.group({
            mySwitch: ['', forms_1.Validators.required]
        });
    };
    return Home;
}());
Home = __decorate([
    core_1.Component({
        selector: 'recetas',
        styleUrls: ['../views/recetas/recetas.css'],
        templateUrl: '../views/recetas/recetas.html'
    }),
    __param(3, core_1.Inject('LinkResolver')),
    __metadata("design:paramtypes", [Recipe_Service_1.RecipeService,
        forms_1.FormBuilder,
        prismic_service_1.PrismicService, Object])
], Home);
exports.Home = Home;
//# sourceMappingURL=recetas.component.js.map