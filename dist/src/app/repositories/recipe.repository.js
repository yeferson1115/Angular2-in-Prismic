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
var http_1 = require("@angular/http");
var IRecipeRepository = (function () {
    function IRecipeRepository() {
    }
    return IRecipeRepository;
}());
exports.IRecipeRepository = IRecipeRepository;
var RecipeRepository = (function () {
    function RecipeRepository(http) {
        this.http = http;
    }
    RecipeRepository.prototype.getAll = function (skip) {
        var p = new Promise(function (resolve, reject) {
            var arr = ["Receta 1", "Receta 2"];
            resolve(arr);
        });
        return p;
    };
    RecipeRepository.prototype.getAllByCategoryId = function (categoryId, skip) {
        return null;
    };
    RecipeRepository.prototype.getAllBySearch = function (term, skip) {
        return null;
    };
    RecipeRepository.prototype.sumar = function (a, b) {
    };
    return RecipeRepository;
}());
RecipeRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RecipeRepository);
exports.RecipeRepository = RecipeRepository;
//# sourceMappingURL=recipe.repository.js.map