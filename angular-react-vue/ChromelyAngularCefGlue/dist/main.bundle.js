webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_demo_component__ = __webpack_require__("../../../../../src/app/demo/demo.component.ts");


var AppRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: "infotests", component: __WEBPACK_IMPORTED_MODULE_1__demo_demo_component__["a" /* DemoComponent */] },
    { path: "**", redirectTo: "", pathMatch: 'full' }
];
var AppRoutedComponents = [
    __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_1__demo_demo_component__["a" /* DemoComponent */]
];


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container centerBlock'>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app-routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_demo_component__ = __webpack_require__("../../../../../src/app/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demo_messagerouter_service__ = __webpack_require__("../../../../../src/app/demo/messagerouter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demo_http_service__ = __webpack_require__("../../../../../src/app/demo/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* AppRoutedComponents */],
                __WEBPACK_IMPORTED_MODULE_6__demo_demo_component__["a" /* DemoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["b" /* AppRoutes */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__demo_messagerouter_service__["a" /* MessagerouterService */],
                __WEBPACK_IMPORTED_MODULE_8__demo_http_service__["a" /* HttpService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/demo/demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-12\">\n    <div class=\"centerBlock\">\n      <span class=\"text-primary text-center\"><h2>demo panel</h2></span>\n      <p class=\"text-muted text-center\">demo of chromely angular 2+ integration</p>\n    </div>\n  </div>\n\n  <div class=\"col-12\">\n    <div>\n      <button type=\"button\" class=\"btn btn-link\" (click)=\"goBack()\">Back</button>\n    </div>\n    <div class=\"centerBlock\">\n      <button type=\"button\" class=\"btn btn-light\" data-toggle=\"modal\" data-target=\"#messageRouterModal\" style='margin: 5px;'>Message Router Demo</button>\n      <button type=\"button\" class=\"btn btn-light\" data-toggle=\"modal\" data-target=\"#httpModal\" style='margin: 5px;'>Http Demo</button>\n      <a href=\"https://github.com/mattkol/Chromely\" class=\"btn btn-default\" role=\"button\" style='margin: 5px;'>more info</a>\n    </div>\n  </div>\n\n  <br>\n\n  <div id=\"infoPanel\" class=\"col-12 centerBlock\">\n\n    <div>\n      <div class=\"card-header card bg-primary text-white\">Chromely Main objective</div>\n      <div class=\"card-body\"> {{ info.objective }} </div>\n    </div>\n    <br>\n\n    <div>\n      <div class=\"card-header card bg-primary text-white\">Platforms</div>\n      <div class=\"card-body\"> {{ info.platform }}</div>\n    </div>\n    <br>\n\n    <div>\n      <div class=\"card-header card bg-primary text-white\">Current CefSharp/Chromium Version</div>\n      <div class=\"card-body\">{{ info.version }}</div>\n    </div>\n    <br>\n\n  </div>\n\n  <!-- The Modal Message Router -->\n  <div class=\"modal fade\" id=\"messageRouterModal\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Message Router</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <!-- Nav pills -->\n          <ul class=\"nav nav-pills\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#sectionA\">Get 1</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"pill\" href=\"#sectionB\">Get 2</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"pill\" href=\"#sectionC\">Post</a>\n            </li>\n          </ul>\n\n          <!-- Tab panes -->\n          <div class=\"tab-content\">\n            <div id=\"sectionA\" class=\"container tab-pane active\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/democontroller/movies &ensp; (Restful Service in Local Assembly)&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"cefQueryRequests('getlocal', '/democontroller/movies')\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div class='table-responsive'>\n                    <table class='table'>\n                      <thead>\n                        <tr>\n                          <th>Id</th>\n                          <th>Title</th>\n                          <th>Year</th>\n                          <th>Votes</th>\n                          <th>Rating</th>\n                          <th>Date</th>\n                          <th>RestfulAssembly</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor='let movie of moviesCefQueryLocalAssembly'>\n                          <td>{{ movie.Id }}</td>\n                          <td>{{ movie.Title }}</td>\n                          <td>{{ movie.Year }}</td>\n                          <td>{{ movie.Votes }}</td>\n                          <td>{{ movie.Rating }}</td>\n                          <td>{{ movie.Date }}</td>\n                          <td>{{ movie.RestfulAssembly }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"sectionB\" class=\"container tab-pane fade\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/externalcontroller/movies &ensp;(Restful Service in External Assembly)&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"cefQueryRequests('getexternal', '/externalcontroller/movies')\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div class='table-responsive'>\n                    <table class='table'>\n                      <thead>\n                        <tr>\n                          <th>Id</th>\n                          <th>Title</th>\n                          <th>Year</th>\n                          <th>Votes</th>\n                          <th>Rating</th>\n                          <th>Date</th>\n                          <th>RestfulAssembly</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor='let movie of moviesCefQueryExternalAssembly'>\n                          <td>{{ movie.Id }}</td>\n                          <td>{{ movie.Title }}</td>\n                          <td>{{ movie.Year }}</td>\n                          <td>{{ movie.Votes }}</td>\n                          <td>{{ movie.Rating }}</td>\n                          <td>{{ movie.Date }}</td>\n                          <td>{{ movie.RestfulAssembly }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"sectionC\" class=\"container tab-pane fade\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/democontroller/savemovies&ensp;(Restful Service in Local Assembly)&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"cefQueryRequests('post', '/democontroller/savemovies')\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div>{{ postCefQueryResult }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <!-- The Modal Http Requests -->\n  <div class=\"modal fade\" id=\"httpModal\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Http Requests</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <!-- Nav pills -->\n          <ul class=\"nav nav-pills\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#sectionI\">Get 1</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"pill\" href=\"#sectionJ\">Get 2</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"pill\" href=\"#sectionK\">Post</a>\n            </li>\n          </ul>\n\n          <!-- Tab panes -->\n          <div class=\"tab-content\">\n            <div id=\"sectionI\" class=\"container tab-pane active\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/democontroller/movies &ensp; (Restful Service in Local Assembly&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"httpRequest('getlocal', 'http://chromely.com/democontroller/movies')\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div class='table-responsive'>\n                    <table class='table'>\n                      <thead>\n                        <tr>\n                          <th>Id</th>\n                          <th>Title</th>\n                          <th>Year</th>\n                          <th>Votes</th>\n                          <th>Rating</th>\n                          <th>Date</th>\n                          <th>RestfulAssembly</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor='let movie of moviesHttpLocalAssembly'>\n                          <td>{{ movie.Id }}</td>\n                          <td>{{ movie.Title }}</td>\n                          <td>{{ movie.Year }}</td>\n                          <td>{{ movie.Votes }}</td>\n                          <td>{{ movie.Rating }}</td>\n                          <td>{{ movie.Date }}</td>\n                          <td>{{ movie.RestfulAssembly }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"sectionJ\" class=\"container tab-pane fade\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/externalcontroller/movies &ensp; (Restful Service in External Assembly)&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"httpRequest('getexternal', 'http://chromely.com/externalcontroller/movies')\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div class='table-responsive'>\n                    <table class='table'>\n                      <thead>\n                        <tr>\n                          <th>Id</th>\n                          <th>Title</th>\n                          <th>Year</th>\n                          <th>Votes</th>\n                          <th>Rating</th>\n                          <th>Date</th>\n                          <th>RestfulAssembly</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor='let movie of moviesHttpExternalAssembly'>\n                          <td>{{ movie.Id }}</td>\n                          <td>{{ movie.Title }}</td>\n                          <td>{{ movie.Year }}</td>\n                          <td>{{ movie.Votes }}</td>\n                          <td>{{ movie.Rating }}</td>\n                          <td>{{ movie.Date }}</td>\n                          <td>{{ movie.RestfulAssembly }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"sectionK\" class=\"container tab-pane fade\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/democontroller/savemovies &ensp;(Restful Service in Local Assembly)&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"httpRequest('post', 'http://chromely.com/democontroller/savemovies')\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div>{{ postHttpResult }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messagerouter_service__ = __webpack_require__("../../../../../src/app/demo/messagerouter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/demo/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemoComponent = /** @class */ (function () {
    function DemoComponent(_messagerouterService, _httpService, _zone, _location) {
        this._messagerouterService = _messagerouterService;
        this._httpService = _httpService;
        this._zone = _zone;
        this._location = _location;
        this.info = {};
        // Initialize info
        this.info.objective = 'Chromely Main Objectives';
        this.info.platform = 'Platforms';
        this.info.version = 'Version';
    }
    /*
    * Navigate back to home page
    */
    DemoComponent.prototype.goBack = function () {
        this._location.back();
    };
    /*
     * Message Router Requests
     */
    DemoComponent.prototype.cefQueryRequests = function (type, url) {
        var _this = this;
        switch (type) {
            case "getlocal":
                this._messagerouterService.cefQueryGetRequest(url, null, function (data) {
                    _this._zone.run(function () {
                        _this.moviesCefQueryLocalAssembly = data;
                    });
                });
                break;
            case "getexternal":
                this._messagerouterService.cefQueryGetRequest(url, null, function (data) {
                    _this._zone.run(function () {
                        _this.moviesCefQueryExternalAssembly = data;
                    });
                });
                break;
            case "post":
                this._messagerouterService.cefQueryPostRequest(url, null, this.postData, function (result) {
                    _this._zone.run(function () {
                        _this.postCefQueryResult = result;
                    });
                });
                break;
            default:
                console.log('No valid cefQuery request found');
        }
    };
    /*
     * Http Requests
     */
    DemoComponent.prototype.httpRequest = function (type, url) {
        var _this = this;
        switch (type) {
            case "getlocal":
                this._httpService.getMovies(url).subscribe(function (data) {
                    _this.moviesHttpLocalAssembly = data;
                });
                break;
            case "getexternal":
                this._httpService.getMovies(url).subscribe(function (data) {
                    _this.moviesHttpExternalAssembly = data;
                });
                break;
            case "post":
                this._httpService.postMovies(url, this.postData)
                    .subscribe(function (result) {
                    _this.postHttpResult = result['Data'];
                });
                break;
            default:
                console.log('No valid http request found');
        }
    };
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*
         *
         */
        this._httpService.getData().subscribe(function (data) {
            _this.postData = data;
        });
        /*
         *
         */
        this._httpService.getInfo('http://chromely.com/info').subscribe(function (data) {
            _this.info.objective = data['divObjective'];
            _this.info.platform = data['divPlatform'];
            _this.info.version = data['divVersion'];
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DemoComponent.prototype, "info", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DemoComponent.prototype, "moviesCefQueryLocalAssembly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DemoComponent.prototype, "moviesCefQueryExternalAssembly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", String)
    ], DemoComponent.prototype, "postCefQueryResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DemoComponent.prototype, "moviesHttpLocalAssembly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DemoComponent.prototype, "moviesHttpExternalAssembly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", String)
    ], DemoComponent.prototype, "postHttpResult", void 0);
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo',
            template: __webpack_require__("../../../../../src/app/demo/demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demo/demo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__messagerouter_service__["a" /* MessagerouterService */],
            __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this._dataUrl = './data/movies.json';
    }
    HttpService.prototype.getData = function () {
        return this._http.get(this._dataUrl)
            .catch(this.handleError);
    };
    HttpService.prototype.getInfo = function (url) {
        return this._http.get(url)
            .catch(this.handleError);
    };
    /*
     * Http Get Request
     */
    HttpService.prototype.getMovies = function (url) {
        return this._http.get(url)
            .catch(this.handleError);
    };
    HttpService.prototype.postMovies = function (url, postData) {
        return this._http.post(url, postData)
            .catch(this.handleError);
    };
    HttpService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Chromely returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errorMessage);
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/app/demo/messagerouter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagerouterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagerouterService = /** @class */ (function () {
    function MessagerouterService() {
    }
    MessagerouterService.prototype.cefQueryGetRequest = function (url, parameters, callback) {
        var request = {
            "method": "GET",
            "url": url,
            "parameters": parameters,
            "postData": null,
        };
        messsageRouterQuery(request, function (response) {
            var jsonData = JSON.parse(response);
            if (jsonData.ReadyState == 4 && jsonData.Status == 200) {
                callback(jsonData.Data);
            }
            else {
                console.log("An error occurs during message routing. With ur:" + url + ". Response received:" + response);
            }
        }, this.cefQueryOnError);
        ;
    };
    MessagerouterService.prototype.cefQueryPostRequest = function (url, parameters, postData, callback) {
        var request = {
            "method": "POST",
            "url": url,
            "parameters": parameters,
            "postData": postData,
        };
        messsageRouterQuery(request, function (response) {
            var jsonData = JSON.parse(response);
            if (jsonData.ReadyState == 4 && jsonData.Status == 200) {
                callback(jsonData.Data);
            }
            else {
                console.log("An error occurs during message routing. With ur:" + url + ". Response received:" + response);
            }
        }, this.cefQueryOnError);
    };
    MessagerouterService.prototype.cefQueryResponse = function (url, data, callback) {
        var jsonData = JSON.parse(data);
        if (jsonData.ReadyState == 4 && jsonData.Status == 200) {
            callback(jsonData.Data);
        }
        else {
            console.log("An error occurs during message routing. With ur:" + url + ". Response received:" + data);
        }
    };
    MessagerouterService.prototype.cefQueryOnError = function (err, msg) {
        console.log(err, msg);
    };
    MessagerouterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessagerouterService);
    return MessagerouterService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-12\">\n    <div class=\"centerBlock\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <img src=\"../assets/img/chromely.png\" class=\"img-rounded\" alt=\"Chromely Logo\" width=\"200\" height=\"200\" style='margin-top: 20px;' />\n        </div>\n        <div class=\"col\">\n          <img width=\"240\" height=\"240\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\" />\n        </div>\n      </div>\n\n      <span class=\"text-primary text-center\"><h2>chromely + angular</h2></span>\n      <p class=\"text-muted text-center\">Build .NET/.NET CORE HTML5 Desktop Apps</p>\n    </div>\n  </div>\n\n  <div class=\"col-12\" style='padding:20px;'>\n    <div id=\"runButton\" class=\"centerBlock\">\n      <form class=\"form-inline\">\n        <div class=\"form-group\">\n          <label for=\"info\">Message Router/Ajax Demos:</label>\n        </div>\n        <button id=\"buttonDemoRun\" type=\"button\" class=\"btn btn-primary\" (click)=\"showInfoTestPanel()\" style='margin: 5px;'>Run</button>\n      </form>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, actRouter) {
        this.router = router;
        this.actRouter = actRouter;
    }
    HomeComponent.prototype.showInfoTestPanel = function () {
        this.router.navigateByUrl("/infotests");
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map