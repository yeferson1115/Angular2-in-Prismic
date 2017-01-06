"use strict";
var RecipeService = (function () {
    function RecipeService(recipeRepo) {
        this.recipeRepo = recipeRepo;
    }
    RecipeService.prototype.getAll = function (skip) {
        return this.recipeRepo.getAll(skip);
    };
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=Recipe.Service.js.map