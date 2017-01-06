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
var Recipedetail = (function () {
    function Recipedetail(route, router, prismic, linkResolver) {
        this.route = route;
        this.router = router;
        this.prismic = prismic;
        this.linkResolver = linkResolver;
        this.loaded = false;
        this.detals = false;
    }
    Recipedetail.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.prismic.api().then(function (api) { return api.getByID(id); }).then(function (document) {
                _this.document = document;
                _this.loaded = true;
                _this.detals = false;
            });
        });
    };
    return Recipedetail;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Recipedetail.prototype, "id", void 0);
Recipedetail = __decorate([
    core_1.Component({
        selector: 'recipedetail',
        styleUrls: ['../views/recipedetail/recipedetail.css'],
        templateUrl: '../views/recipedetail/recipedetail.html'
    }),
    __param(3, core_1.Inject('LinkResolver')),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        service_1.PrismicService, Object])
], Recipedetail);
exports.Recipedetail = Recipedetail;
//# sourceMappingURL=recipedetail.component.js.map