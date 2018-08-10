(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/action-bar/action-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/action-bar/action-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    margin-left: 0.5em;\r\n}\r\n\r\n.button-bar {\r\n    margin-top: 0.5em;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/action-bar/action-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/action-bar/action-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"button-bar d-flex justify-content-end\">\r\n    <button class=\"info btn btn-secondary\" title=\"Info\"><fa-icon [icon]=\"['fas', 'info-circle']\"></fa-icon></button>\r\n    <button (click)=\"clearBullets()\" class=\"clear-history btn btn-danger\" title=\"Clear History\"><fa-icon [icon]=\"['fas', 'history']\"></fa-icon></button>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/action-bar/action-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/action-bar/action-bar.component.ts ***!
  \****************************************************/
/*! exports provided: ActionBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarComponent", function() { return ActionBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bullets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bullets.service */ "./src/app/bullets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(bulletService) {
        var _this = this;
        this.bulletService = bulletService;
        this.clearBullets = function () { return _this.bulletService.clearBullets(); };
    }
    ActionBarComponent.prototype.ngOnInit = function () { };
    ActionBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-action-bar',
            template: __webpack_require__(/*! ./action-bar.component.html */ "./src/app/action-bar/action-bar.component.html"),
            styles: [__webpack_require__(/*! ./action-bar.component.css */ "./src/app/action-bar/action-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_bullets_service__WEBPACK_IMPORTED_MODULE_1__["BulletsService"]])
    ], ActionBarComponent);
    return ActionBarComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n}\n\np {\n    padding: 1em;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">{{ title }}</a>\n    <ul class=\"navbar-nav flex-row ml-auto d-flex\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"{{github_url}}\" title=\"GitHub Project\"><fa-icon [icon]=\"['fab', 'github']\"></fa-icon></a>\n      </li>\n    </ul>\n  </nav>\n  <app-text-list></app-text-list>\n  <app-action-bar></app-action-bar>\n  <app-text-entry></app-text-entry>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Dakara';
        this.github_url = 'https://github.com/project-abydos/dakara';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _text_entry_text_entry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-entry/text-entry.component */ "./src/app/text-entry/text-entry.component.ts");
/* harmony import */ var _text_list_text_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-list/text-list.component */ "./src/app/text-list/text-list.component.ts");
/* harmony import */ var _action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action-bar/action-bar.component */ "./src/app/action-bar/action-bar.component.ts");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["fab"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _text_entry_text_entry_component__WEBPACK_IMPORTED_MODULE_6__["TextEntryComponent"],
                _text_list_text_list_component__WEBPACK_IMPORTED_MODULE_7__["TextListComponent"],
                _action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_8__["ActionBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bullets.service.ts":
/*!************************************!*\
  !*** ./src/app/bullets.service.ts ***!
  \************************************/
/*! exports provided: BulletsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletsService", function() { return BulletsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var STORAGE_ID = 'DAKARA_BULLET_LIST';
var BulletsService = /** @class */ (function () {
    function BulletsService() {
        var data = JSON.parse(window.localStorage.getItem(STORAGE_ID) || "[]");
        this._bullets = data instanceof Array ? data : [];
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._bullets);
    }
    BulletsService.prototype._store = function () {
        window.localStorage.setItem(STORAGE_ID, JSON.stringify(this._bullets));
        this._subject.next(this._bullets);
    };
    BulletsService.prototype.addBullet = function (bullet) {
        this._bullets.push(bullet);
        this._store();
    };
    BulletsService.prototype.clearBullets = function () {
        this._bullets = [];
        this._store();
    };
    BulletsService.prototype.getBullets = function () {
        return this._subject.asObservable();
    };
    BulletsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BulletsService);
    return BulletsService;
}());



/***/ }),

/***/ "./src/app/text-entry/text-entry.component.css":
/*!*****************************************************!*\
  !*** ./src/app/text-entry/text-entry.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    flex: 0 0 auto;\n}\n\n.active-bullet-editor-container {\n    padding: 1em;\n}\n\n.active-bullet-editor {\n    width: 100%;\n    font-family: 'Times New Roman', Times, serif;\n    line-height: 2em;\n}"

/***/ }),

/***/ "./src/app/text-entry/text-entry.component.html":
/*!******************************************************!*\
  !*** ./src/app/text-entry/text-entry.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"active-bullet-editor-container bg-light\">\r\n  <input type=\"text\" class=\"form-control active-bullet-editor\" (keyup.enter)=\"update()\" [(ngModel)]=\"activeBullet\" autofocus />\r\n</div>"

/***/ }),

/***/ "./src/app/text-entry/text-entry.component.ts":
/*!****************************************************!*\
  !*** ./src/app/text-entry/text-entry.component.ts ***!
  \****************************************************/
/*! exports provided: TextEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEntryComponent", function() { return TextEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bullets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bullets.service */ "./src/app/bullets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextEntryComponent = /** @class */ (function () {
    function TextEntryComponent(bulletService) {
        this.bulletService = bulletService;
        this.activeBullet = '';
    }
    TextEntryComponent.prototype.ngOnInit = function () {
    };
    TextEntryComponent.prototype.update = function (value) {
        this.bulletService.addBullet(this.activeBullet);
    };
    TextEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-entry',
            template: __webpack_require__(/*! ./text-entry.component.html */ "./src/app/text-entry/text-entry.component.html"),
            styles: [__webpack_require__(/*! ./text-entry.component.css */ "./src/app/text-entry/text-entry.component.css")]
        }),
        __metadata("design:paramtypes", [_bullets_service__WEBPACK_IMPORTED_MODULE_1__["BulletsService"]])
    ], TextEntryComponent);
    return TextEntryComponent;
}());



/***/ }),

/***/ "./src/app/text-list/text-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/text-list/text-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    flex: 1 1 auto;\n    overflow-y: scroll;\n    padding: 1em;\n}\n\n.bullet-entry {\n    font-family: 'Times New Roman', Times, serif;\n    line-height: 2em;\n}\n\n.bullet-entry:nth-child(even) {\n    background: #f7f7f7;\n}"

/***/ }),

/***/ "./src/app/text-list/text-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/text-list/text-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bullet-entry\" *ngFor=\"let bullet of bullets | async ; let idx = index\">\n  {{bullet}}\n</div>"

/***/ }),

/***/ "./src/app/text-list/text-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/text-list/text-list.component.ts ***!
  \**************************************************/
/*! exports provided: TextListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextListComponent", function() { return TextListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bullets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bullets.service */ "./src/app/bullets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextListComponent = /** @class */ (function () {
    function TextListComponent(bulletService) {
        this.bullets = bulletService.getBullets();
    }
    TextListComponent.prototype.ngOnInit = function () {
    };
    TextListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-list',
            template: __webpack_require__(/*! ./text-list.component.html */ "./src/app/text-list/text-list.component.html"),
            styles: [__webpack_require__(/*! ./text-list.component.css */ "./src/app/text-list/text-list.component.css")]
        }),
        __metadata("design:paramtypes", [_bullets_service__WEBPACK_IMPORTED_MODULE_1__["BulletsService"]])
    ], TextListComponent);
    return TextListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Wayne Starr/Documents/Software Development/project-abydos/dakara/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map