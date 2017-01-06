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
var router_1 = require("@angular/router");
var service_1 = require("../service");
var Category = (function () {
    function Category(route, router, prismic, linkResolver) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.prismic = prismic;
        this.linkResolver = linkResolver;
        this.prismic.api().then(function (api) { return api.query(''); }).then(function (response) {
            _this.categories = response.results;
        });
    }
    Category.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            var type = params['type'];
            _this.prismic.api().then(function (api) { return api.query('[[:d=at(my.recetas.category,"' + id + '")]]'); }).then(function (response) {
                _this.documents = response.results;
            });
        });
    };
    return Category;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Category.prototype, "id", void 0);
Category = __decorate([
    core_1.Component({
        selector: 'recetas',
        styleUrls: ['../views/category/category.css'],
        templateUrl: '../views/category/category.html'
    }),
    __param(3, core_1.Inject('LinkResolver')),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        service_1.PrismicService, Object])
], Category);
exports.Category = Category;
//# sourceMappingURL=category.component.js.map