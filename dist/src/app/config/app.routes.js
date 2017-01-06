"use strict";
var recetas_component_1 = require("../components/recetas.component");
var recipedetail_component_1 = require("../components/recipedetail.component");
var category_component_1 = require("../components/category.component");
exports.rootRouterConfig = [
    { path: '', component: recetas_component_1.Home },
    { path: 'categoria/:id', component: category_component_1.Category },
    { path: ':type/:id', component: recipedetail_component_1.Recipedetail }
];
//# sourceMappingURL=app.routes.js.map