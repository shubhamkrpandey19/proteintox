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

/***/ "./src/app/aboutMe/about.component.html":
/*!**********************************************!*\
  !*** ./src/app/aboutMe/about.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "about me data"

/***/ }),

/***/ "./src/app/aboutMe/about.components.ts":
/*!*********************************************!*\
  !*** ./src/app/aboutMe/about.components.ts ***!
  \*********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sequence',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/aboutMe/about.component.html"),
            host: {
                class: 'h-100'
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p{\r\n    margin-left: 50px;\r\n}\r\n.footer {\r\n\tfont-size: 15px;\r\n\ttext-align: center;\r\n\tcolor: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbi5mb290ZXIge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <!-- [background]=image2 style=\"background-size: cover\" -->\r\n    <div class=\"min-vh-100 \">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet class=\"h-100 \"></router-outlet>\r\n        <p style=\"margin-left: 40px;\"></p>\r\n    </div>\r\n\r\n\r\n    <div class=\"footer\"> <a class=\"footer\" href=\"http://www.niper.nic.in/\" target=\"_blank\"> National Institute of\r\n            Pharmaceutical Education and Research (NIPER) S.A.S. Nagar<br>Sector 67, S.A.S. Nagar (Mohali)-160062,\r\n            Punjab (India). Phone: +91-172-2214682-87, Fax:+91-172-2214692 </a></div>\r\n</body>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.image2 = "assets/images/black09.2.jpg";
        this.title = 'games';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _fileUploader_fileUpload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fileUploader/fileUpload.component */ "./src/app/fileUploader/fileUpload.component.ts");
/* harmony import */ var _sequence_sequence_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sequence/sequence.component */ "./src/app/sequence/sequence.component.ts");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _developers_developers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./developers/developers.component */ "./src/app/developers/developers.component.ts");
/* harmony import */ var _materials_materials_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./materials/materials.component */ "./src/app/materials/materials.component.ts");
/* harmony import */ var _aboutMe_about_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./aboutMe/about.components */ "./src/app/aboutMe/about.components.ts");
/* harmony import */ var _predict_predict_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./predict/predict.component */ "./src/app/predict/predict.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_8__["ResultComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _fileUploader_fileUpload_component__WEBPACK_IMPORTED_MODULE_10__["FileUploadComponent"],
                _sequence_sequence_component__WEBPACK_IMPORTED_MODULE_11__["SequenceComponent"],
                _developers_developers_component__WEBPACK_IMPORTED_MODULE_14__["DevelopersComponent"],
                _materials_materials_component__WEBPACK_IMPORTED_MODULE_15__["MaterialsComponent"],
                _aboutMe_about_components__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _predict_predict_component__WEBPACK_IMPORTED_MODULE_17__["PredictComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_router__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fileUploader_fileUpload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fileUploader/fileUpload.component */ "./src/app/fileUploader/fileUpload.component.ts");
/* harmony import */ var _sequence_sequence_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sequence/sequence.component */ "./src/app/sequence/sequence.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _developers_developers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./developers/developers.component */ "./src/app/developers/developers.component.ts");
/* harmony import */ var _materials_materials_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./materials/materials.component */ "./src/app/materials/materials.component.ts");
/* harmony import */ var _aboutMe_about_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aboutMe/about.components */ "./src/app/aboutMe/about.components.ts");
/* harmony import */ var _predict_predict_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./predict/predict.component */ "./src/app/predict/predict.component.ts");










var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'fromfile', component: _fileUploader_fileUpload_component__WEBPACK_IMPORTED_MODULE_3__["FileUploadComponent"] },
    { path: 'sequence', component: _sequence_sequence_component__WEBPACK_IMPORTED_MODULE_4__["SequenceComponent"] },
    { path: 'about', component: _aboutMe_about_components__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: 'developers', component: _developers_developers_component__WEBPACK_IMPORTED_MODULE_6__["DevelopersComponent"] },
    { path: 'prediction', component: _predict_predict_component__WEBPACK_IMPORTED_MODULE_9__["PredictComponent"] },
    { path: 'materials', component: _materials_materials_component__WEBPACK_IMPORTED_MODULE_7__["MaterialsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/developers/developers.component.html":
/*!******************************************************!*\
  !*** ./src/app/developers/developers.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div style=\"margin: inherit;\">\r\n\r\n    <p style=\"font-family: 'Open Sans', sans-serif;margin: 15px; text-align: justify;\">\r\n      It's a web-based application developed under the guidance of <strong>Dr. Prabha Garg </strong> in Deptartment of\r\n      Pharmacoinformatics at National Institute of Pharmaceutical Education and Research, S.A.S. Nagar, Punjab.\r\n      This tool brings you a platform to predict Protein Toxicity using Machine Learning approach. The footing\r\n      of this predictive model was established on revieved data obtained from curated repository of\r\n      Proteins i.e., <strong>UniProt database.</strong>\r\n    </p>\r\n  </div>\r\n  <div>\r\n    <h1\r\n      style=\"text-align: center; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-style: italic;\">\r\n      Brain behind this work</h1>\r\n\r\n    <div style=\"margin: 20px;\">\r\n\r\n\r\n      <div>\r\n        <div class=\"row\">\r\n          <div class=\"column\" style=\"width: 50%;\">\r\n            <img [src]=developer1 alt=\"Snow\" style=\";width:300px; height: 300px;float: right;\">\r\n            <p style=\"text-align: center;\"><br><br><br><strong><a style=\"font-size:x-large;\"\r\n                  href=\"https://subham-pandey.web.app/\" target=\"_blank\">Shubham Kumar\r\n                  Pandey\r\n                </a></strong><br><a style=\"font-style: italic;\">(Scientific Developer)</a>\r\n              <br><a style=\"font-size: large;\">M.S. (Pharm.)</a><br>Department of Pharmacoinformatics<br>National\r\n              Institute of\r\n              Pharmaceutical\r\n              Education and Research (NIPER),\r\n              S.A.S. Nagar, Punjab 160062<br>E-mail: shubhamkrpandey19@outlook.com<br>Mobile: +91 9425390409</p>\r\n          </div>\r\n          <div class=\"column\" style=\"width: 50%;\">\r\n            <img [src]=developer2 alt=\"Forest\" style=\"width:300px; height: 300px;float:left;\">\r\n            <p style=\"text-align: center;\"><br><br><br><strong><a style=\"font-size: x-large;\"\r\n                  href=\"http://niper.irins.org/profile/16778\" target=\"_blank\">Dr. Prabha\r\n                  Garg</a></strong><br><a style=\"font-style: italic;\">(Advisor)</a><br><a\r\n                style=\"font-size: large;\">Professor</a><br>Department of\r\n              Pharmacoinformatics<br>National Institute of\r\n              Pharmaceutical\r\n              Education and Research (NIPER),\r\n              S.A.S. Nagar, Punjab 160062<br>E-mail: prabhagarg@niper.ac.in<br>Tel: +91 172-2214683 extn. 2016</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- <div class=\"row\">\r\n        <div class=\"column\" style=\"min-height: fit-content; width: 50%;\">\r\n\r\n          <img [src]=developer1 style=\"margin-left: 300px; width:300px; height: 300px; float: left;\"><br>\r\n\r\n        </div>\r\n        <div class=\"column\" style=\"min-height: fit-content; width: 50%;\">\r\n          <img [src]=developer2 style=\"margin-right: 350px; width:300px; height: 300px; float: right;\"><br>\r\n\r\n        </div>\r\n      </div> -->\r\n      <!-- <div> -->\r\n      <!-- <p -->\r\n      <!-- style=\"text-align: center; font-size: large; font-style: italic;font-family:  Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\"> -->\r\n      <!-- Also thanks to</p> -->\r\n      <!-- </div> -->\r\n      <!-- <div class=\"row\" style=\"margin:20px; align-items: center;\"> -->\r\n      <!-- <div class=\"column\" style=\"padding-left: 150px;\"> -->\r\n      <!-- <img [src]=developer3 style=\"width:100px; height: 100px;\"> -->\r\n      <!-- <p style=\"text-align: left;\">Dr. P. V. Bharatam </p> -->\r\n      <!-- </div> -->\r\n      <!-- <div class=\"column\" style=\"padding-left: 150px;\"> -->\r\n      <!-- <img [src]=developer4 style=\"width: 100px; height: 100px;\"> -->\r\n      <!-- <p style=\"text-align: left;\"> Dr. M. E. Sophia</p> -->\r\n      <!-- </div> -->\r\n      <!-- <div class=\"column\" style=\"padding-left: 150px;\"> -->\r\n      <!-- <img [src]=developer5 style=\"width:100px; height: 100px;\"> -->\r\n      <!-- <p style=\"text-align: left;\">Dr. Pooja Arora</p> -->\r\n      <!-- </div> -->\r\n      <!-- </div> -->\r\n      <!-- </div> -->\r\n\r\n    </div>\r\n    <div>\r\n      <h3 style=\"font-family:Lato; margin-bottom: auto;\"> Department of Pharmacoinformatics</h3>\r\n      <IMG class=\"displayed\" [src]=niper style=\"width: 100px; height: 100px;\">\r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/developers/developers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/developers/developers.component.ts ***!
  \****************************************************/
/*! exports provided: DevelopersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersComponent", function() { return DevelopersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DevelopersComponent = /** @class */ (function () {
    function DevelopersComponent() {
        this.developer1 = "assets/images/0.png";
        this.developer2 = "assets/images/prabhamam.jpg";
        this.developer3 = "assets/images/bhartam.jpg";
        this.developer4 = "assets/images/Sobia.jpg";
        this.developer5 = "assets/images/poojaarora.jpg";
        this.niper = "assets/images/niper-logo.png";
    }
    DevelopersComponent.prototype.ngOnInit = function () { };
    DevelopersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sequence",
            template: __webpack_require__(/*! ./developers.component.html */ "./src/app/developers/developers.component.html"),
            host: {
                class: "h-100",
            },
            styles: [__webpack_require__(/*! ./developers.components.css */ "./src/app/developers/developers.components.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevelopersComponent);
    return DevelopersComponent;
}());



/***/ }),

/***/ "./src/app/developers/developers.components.css":
/*!******************************************************!*\
  !*** ./src/app/developers/developers.components.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.column {\r\n  width: 33.3%;\r\n  padding: 5px;\r\n}\r\n\r\n/* Clearfix (clear floats) */\r\n\r\n.row::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\nh1 {\r\n  font-size: 50px;\r\n}\r\n\r\na {\r\n  color: white;\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n}\r\n\r\nh3 {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-right: -50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n#header-content {\r\n  position: absolute;\r\n  bottom: 0;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n}\r\n\r\nIMG.displayed {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-right: -50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\nimg {\r\n  margin: auto;\r\n  margin-left: 36px;\r\n  margin-right: 36px;\r\n  width: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2ZWxvcGVycy9kZXZlbG9wZXJzLmNvbXBvbmVudHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSw0QkFBNEI7O0FBQzVCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCw0QkFBdUI7T0FBdkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2RldmVsb3BlcnMvZGV2ZWxvcGVycy5jb21wb25lbnRzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIHdpZHRoOiAzMy4zJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi8qIENsZWFyZml4IChjbGVhciBmbG9hdHMpICovXHJcbi5yb3c6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbmgxIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5oMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbiNoZWFkZXItY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxufVxyXG5JTUcuZGlzcGxheWVkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbmltZyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzZweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/fileUploader/fileUpload.component.html":
/*!********************************************************!*\
  !*** ./src/app/fileUploader/fileUpload.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n    <div class=\"row\" *ngIf=\"isLoading\">\r\n        <div class=\"spinner-grow mx-auto\" style=\"width: 6rem; height: 6rem;\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!isLoading\">\r\n        <app-result [data]=\"result\"></app-result>\r\n    </div>\r\n    <div class=\"row mt-4\" *ngIf=\"!isLoading\">\r\n        <div class=\"input-group mb-3\">\r\n            <div class=\"custom-file\">\r\n                <label class=\"custom-file-label \" for=\"inputGroupFile01\">{{filename}}</label>\r\n                <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" aria-describedby=\"inputGroupFileAddon01\" (change)=\"handleFileInput($event.target.files)\">\r\n            </div>\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"predict()\">Predict</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/fileUploader/fileUpload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fileUploader/fileUpload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/api.service */ "./src/service/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(api, _snackBar) {
        this.api = api;
        this._snackBar = _snackBar;
        this.result = null;
        this.filename = "Fasta File";
        this.isLoading = false;
    }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    FileUploadComponent.prototype.predict = function () {
        var _this = this;
        this.isLoading = true;
        console.log("calling predict");
        this.api.predic_file(this.file).subscribe(function (data) {
            console.log(data);
            _this.result = data;
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
            if (err.error.message) {
                _this.openSnackBar(err.error.message);
            }
            else {
                _this.openSnackBar(err.message);
            }
        });
    };
    FileUploadComponent.prototype.handleFileInput = function (files) {
        this.file = files.item(0);
        this.filename = this.file.name;
    };
    FileUploadComponent.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, null, {
            duration: 1000,
        });
    };
    FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fileUpload',
            template: __webpack_require__(/*! ./fileUpload.component.html */ "./src/app/fileUploader/fileUpload.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin-left: 40px;\r\n}\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding-top: 0%;\r\n  overflow: hidden;\r\n  background-color: currentColor;\r\n  text-align: left;\r\n}\r\nli {\r\n  float: left;\r\n  font-size: 20px;\r\n}\r\nli a {\r\n  display: block;\r\n  color: white;\r\n  text-align: left;\r\n  padding: 10px 10px;\r\n  text-decoration: none;\r\n}\r\nli a:hover {\r\n  background-color: yellow;\r\n  color: #000000;\r\n}\r\nh1 {\r\n  font-size: 35px;\r\n  width: 100%;\r\n  /* color: white; */\r\n\r\n  font-family: Playfair Display, serif;\r\n  /* text-shadow: 4px 5px black; */\r\n  text-align: left;\r\n}\r\nh2 {\r\n  font-size: 50px;\r\n  color: white;\r\n  text-align: left;\r\n  margin-top: 40px;\r\n  margin-bottom: 10px;\r\n  font-family: Playfair Display, serif;\r\n  font-style: italic;\r\n}\r\nh3 {\r\n  font-size: 20px;\r\n  text-align: center;\r\n  color: yellow;\r\n  font-style: normal;\r\n}\r\nh4 {\r\n  font-size: 25px;\r\n  color: white;\r\n  text-align: left;\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n  font-style: normal;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n}\r\n.float-img {\r\n  float: right;\r\n  margin-left: 10px;\r\n  margin-bottom: 54px;\r\n  border: whitesmoke 1px;\r\n  padding: 2px;\r\n  background-color: transparent;\r\n}\r\np {\r\n  font-size: 20px;\r\n  text-align: justify;\r\n  color: white;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\na {\r\n  color: white;\r\n  text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixvQ0FBb0M7RUFDcEMsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbn1cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy10b3A6IDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxubGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5saSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuXHJcbiAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIHNlcmlmO1xyXG4gIC8qIHRleHQtc2hhZG93OiA0cHggNXB4IGJsYWNrOyAqL1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogeWVsbG93O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4uZmxvYXQtaW1nIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTRweDtcclxuICBib3JkZXI6IHdoaXRlc21va2UgMXB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\r\n<head>\r\n    <title>ProtienToX</title>\r\n</head>\r\n\r\n<body style=\"width: fit-content height: fit-content;\">\r\n    <div style=\"float: left;width: 65%;\">\r\n        <h1>Protein Toxicity</h1>\r\n        <p> Protein toxicity can be defined as all the pathological changes that ensue from accumulation,\r\n            mis-localization, and/or multimerization of disease-specific proteins.<br> Genetic mutation, translation\r\n            error, oxidative stress are the most common mechanism of protein toxicity\r\n            that leads to generate abduct of soluble protein oligomers and follow protein misfolding which account for\r\n            heterogenous etiology of diseases.<br>\r\n            On analysing properties and structural alerts of toxic proteins by virtue of application of Machine\r\n            Learning, we build a model that efficiently predict protein toxicity and classify it into further toxic\r\n            classes:</p>\r\n        <p><strong>Neurotoxicity: </strong>Proteins that causes damage to the brain or peripheral nervous system by\r\n            oxidative damage of cytoplasmic structures, accumulation of lipofuscins and misfolded proteins. E.g.,\r\n            Alzheimer’s disease, Parkinson’s disease.\r\n        </p>\r\n        <p><strong>Cardiotoxicity: </strong>These proteins irritates mycardium and produce poisonous or deleterious\r\n            effect upon the heart or other parts of the cardiovascular system. E.g.,Cardiomyopathy,\r\n            Pericarditis.\r\n        </p>\r\n        <p><strong>Enterotoxicity: </strong>These proteins are either ingested or produced by microorganism present in\r\n            the lumen and cause alteration of mucosal cell permeability and promote cells to die. E.g., Cystic fibrosis,\r\n            Crohn's disease.\r\n        </p>\r\n    </div>\r\n    <div style=\"float: right;width: 35%; max-height: 400px;\">\r\n        <img [src]=image1 title=\"Secondary structure of tetanus toxin\" style=\"width:500px\">\r\n        <div style=\"padding-left: 70px;\">\r\n            <img [src]=image3 title=\"Neurotoxicity Model\" style=\"width:100px;height: 100px;\">\r\n            <img [src]=image4 title=\"Cardiotoxicity Model\" style=\"width:100px;height: 100px;\">\r\n            <img [src]=image5 title=\"Enterotoxicity Model\" style=\"width:100px;height: 100px;\">\r\n\r\n        </div>\r\n    </div>\r\n    <div>\r\n    </div>\r\n\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.image1 = "assets/images/Secondar structure.png";
        this.image2 = "assets/images/";
        this.image3 = "assets/images/Picture1.png";
        this.image4 = "assets/images/Picture2.png";
        this.image5 = "assets/images/Picture3.png";
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/materials/material.component.css":
/*!**************************************************!*\
  !*** ./src/app/materials/material.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.column {\r\n  float: left;\r\n  width: 33.33%;\r\n  padding: 5px;\r\n}\r\n\r\n/* Clearfix (clear floats) */\r\n\r\n.row::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\nh1 {\r\n  font-size: 30px;\r\n  width: 100%;\r\n  /* color: white; */\r\n  margin-top: 10px;\r\n  font-family: Playfair Display, serif;\r\n  /* text-shadow: 4px 5px black; */\r\n  text-align: left;\r\n  font-style: ;\r\n  margin-top: 0px;\r\n}\r\n\r\nh2 {\r\n  font-size: 30px;\r\n  color: white;\r\n  text-align: left;\r\n  margin-top: 10px;\r\n  margin-bottom: 3px;\r\n  font-family: Playfair Display, serif;\r\n  font-style: ;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWxzL21hdGVyaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQSw0QkFBNEI7O0FBQzVCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWxzL21hdGVyaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMzMuMzMlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLyogQ2xlYXJmaXggKGNsZWFyIGZsb2F0cykgKi9cclxuLnJvdzo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBjb2xvcjogd2hpdGU7ICovXHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgc2VyaWY7XHJcbiAgLyogdGV4dC1zaGFkb3c6IDRweCA1cHggYmxhY2s7ICovXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXN0eWxlOiA7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbmgyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/materials/material.component.html":
/*!***************************************************!*\
  !*** ./src/app/materials/material.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\r\n<body style=\"margin: 20px;  \">\r\n  <h1 style=\"text-align: center;\">Types of features generated from Amino acids</h1>\r\n  <div style=\"margin-left: 100px;\">\r\n    <div style=\"float: left;width: 50%;\">\r\n      <p style=\"font-family: Playfair Display, serif; font-size: 25px; font-style: italic;\">\r\n        1. Composition based features<br>\r\n        <img [src]=image4 title=\"Composition based features\" style=\"width:400px; height: 300px;padding-top: 50px;\">\r\n        <br>\r\n      </p>\r\n      <br>\r\n    </div>\r\n    <div style=\"float: right;width: 50%;\">\r\n      <p style=\"font-family: Playfair Display, serif; font-size: 25px; font-style: italic;\"> 2. Physicochemical proprty\r\n        based features</p><br>\r\n      <img [src]=image5 title=\"Physicochemical property based features generated by PnGT tool\"\r\n        style=\"width:400px; height: 300px;\">\r\n\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <div style=\"margin: 50px; margin-bottom: 50px; margin-left: 30px;\">\r\n      <h1 style=\"text-align: center;\">Algorithms used to design Predictive models</h1>\r\n      <div class=\"row\">\r\n        <div class=\"column\">\r\n          <img [src]=image1 title=\"Random Forest classifier based on ensemble method\" style=\"width:90%\" height=\"90%\">\r\n          <p style=\"text-align: center;\">Random Forest</p>\r\n        </div>\r\n        <div class=\"column\">\r\n          <img [src]=image2 title=\"Hyperplane based classifier\" style=\"width:90%\" height=\"90%\">\r\n          <p style=\"text-align: center;\">Support Vector Machine</p>\r\n        </div>\r\n        <div class=\"column\">\r\n          <img [src]=image3 title=\"Distance function dependent similarity based classifier\" style=\"width:90%\"\r\n            height=\"90%\">\r\n          <p style=\"text-align: center;\">k Nearest Neighbor</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/materials/materials.component.ts":
/*!**************************************************!*\
  !*** ./src/app/materials/materials.component.ts ***!
  \**************************************************/
/*! exports provided: MaterialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsComponent", function() { return MaterialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaterialsComponent = /** @class */ (function () {
    function MaterialsComponent() {
        this.image1 = "assets/images/Randomforest.png";
        this.image2 = "assets/images/svm.png";
        this.image3 = "assets/images/kNN.png";
        this.image4 = "assets/images/Composition.png";
        this.image5 = "assets/images/Physicochemical.png";
    }
    MaterialsComponent.prototype.ngOnInit = function () {
    };
    MaterialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sequence',
            template: __webpack_require__(/*! ./material.component.html */ "./src/app/materials/material.component.html"),
            host: {
                class: 'h-100'
            },
            styles: [__webpack_require__(/*! ./material.component.css */ "./src/app/materials/material.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MaterialsComponent);
    return MaterialsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-image: url(/src/assets/images/IMG_20190417_091915-01.jpeg);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding-top: 0%;\r\n  overflow: hidden;\r\n  text-align: right;\r\n  color: black;\r\n}\r\nli {\r\n  float: left;\r\n  font-size: 20px;\r\n}\r\na {\r\n  text-align: center;\r\n  padding: 5px 5px;\r\n  font-size: 20px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  /* font-weight: bold; */\r\n  color: black;\r\n}\r\nli a:hover {\r\n  color: cyan;\r\n}\r\nh1 {\r\n  font-size: 70px;\r\n  width: 100%;\r\n  color: white;\r\n  font-family: \"Playfair Display\", serif;\r\n  text-shadow: -7px -3px red;\r\n  text-align: left;\r\n}\r\nh2 {\r\n  font-size: 30px;\r\n  color: white;\r\n  text-align: left;\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n  font-family: Lato;\r\n  font-style: italic;\r\n}\r\nh3 {\r\n  font-size: 20px;\r\n  text-align: center;\r\n  color: yellow;\r\n  font-style: normal;\r\n}\r\nh4 {\r\n  font-size: 25px;\r\n  color: white;\r\n  text-align: left;\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n  font-style: normal;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n}\r\n.float-img {\r\n  float: right;\r\n  margin-left: 10px;\r\n  margin-bottom: 54px;\r\n  border: whitesmoke 1px;\r\n  padding: 2px;\r\n  background-color: transparent;\r\n}\r\np {\r\n  font-size: 20px;\r\n  text-align: left;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUVBQXFFO0VBQ3JFLDRCQUE0QjtFQUk1QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWFnZXMvSU1HXzIwMTkwNDE3XzA5MTkxNS0wMS5qcGVnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy10b3A6IDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5saSBhOmhvdmVyIHtcclxuICBjb2xvcjogY3lhbjtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAtN3B4IC0zcHggcmVkO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbmgzIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbmg0IHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG59XHJcbi5mbG9hdC1pbWcge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1NHB4O1xyXG4gIGJvcmRlcjogd2hpdGVzbW9rZSAxcHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-dark  \">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand \" href=\"#Home \"><h1>ProteinToX</h1></a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <div class=\"mr-auto \">\r\n\r\n            </div>\r\n            <ul class=\"navbar-nav \">\r\n                <a class=\"nav-link \" [routerLink]=\"['/']\">Home</a>\r\n                <a class=\"nav-link \" [routerLink]=\"['materials']\">Algorithms</a>\r\n                <a class=\"nav-link \" [routerLink]=\"['prediction']\">Prediction</a>\r\n                <a class=\"nav-link \" [routerLink]=\"['developers']\">Developers</a>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/predict/predict.component.html":
/*!************************************************!*\
  !*** ./src/app/predict/predict.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n\r\n    <div class=\"row mt-4\" *ngIf=\"!isLoading\">\r\n        <div class=\"input-group mb-3\">\r\n            <div class=\"custom-file\">\r\n                <label class=\"custom-file-label \" for=\"inputGroupFile01\">{{filename}}</label>\r\n                <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\"\r\n                    aria-describedby=\"inputGroupFileAddon01\" (change)=\"handleFileInput($event.target.files)\">\r\n            </div>\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"predictFile()\">Predict</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <p style=\"size: 25px; text-align: center;\"> OR</p>\r\n\r\n    <div class=\"row mt-4\" *ngIf=\"!isLoading\" style=\"height:100px;\">\r\n        <div class=\"input-group \">\r\n            <textarea class=\"form-control\" aria-label=\"With textarea\" [(ngModel)]=\"sequence\"></textarea>\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">Paste your Sequence here</span>\r\n            </div>\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-primary\" type=\"button\" id=\"button-addon2\"\r\n                    (click)=\"predict()\">Predict</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container my-auto\">\r\n\r\n    <div class=\"row\" *ngIf=\"isLoading\">\r\n        <div class=\"spinner-grow mx-auto\" style=\"width: 6rem; height: 6rem;\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!isLoading\">\r\n        <app-result [data]=\"result\"></app-result>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/predict/predict.component.ts":
/*!**********************************************!*\
  !*** ./src/app/predict/predict.component.ts ***!
  \**********************************************/
/*! exports provided: PredictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictComponent", function() { return PredictComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/api.service */ "./src/service/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var PredictComponent = /** @class */ (function () {
    //   isLoading: boolean = false
    function PredictComponent(api, _snackBar) {
        this.api = api;
        this._snackBar = _snackBar;
        this.result = null;
        this.isLoading = false;
        //   result: any = null
        this.filename = "Fasta File";
    }
    PredictComponent.prototype.ngOnInit = function () {
    };
    PredictComponent.prototype.predict = function () {
        var _this = this;
        this.isLoading = true;
        console.log("calling predict");
        this.api.predic_sequence(this.sequence).subscribe(function (data) {
            console.log(data);
            _this.result = data;
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
            if (err.error.message) {
                _this.openSnackBar(err.error.message);
            }
            else {
                _this.openSnackBar(err.message);
            }
        });
    };
    PredictComponent.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, null, {
            duration: 1000,
        });
    };
    PredictComponent.prototype.predictFile = function () {
        var _this = this;
        this.isLoading = true;
        console.log("calling predict");
        this.api.predic_file(this.file).subscribe(function (data) {
            console.log(data);
            _this.result = data;
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
            if (err.error.message) {
                _this.openSnackBar(err.error.message);
            }
            else {
                _this.openSnackBar(err.message);
            }
        });
    };
    PredictComponent.prototype.handleFileInput = function (files) {
        this.file = files.item(0);
        this.filename = this.file.name;
    };
    PredictComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sequence',
            template: __webpack_require__(/*! ./predict.component.html */ "./src/app/predict/predict.component.html"),
            host: {
                class: 'h-100'
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], PredictComponent);
    return PredictComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.html":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\" *ngIf=\"result\">\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th scope=\"col-5\">Sequence(s)</th>\r\n                <th scope=\"col-2\">Cardiotoxic</th>\r\n                <th scope=\"col-2\">Enterotoxic</th>\r\n                <th scope=\"col-2\">Neurotoxic</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of result\">\r\n                <th style=\"display: inline-block;overflow-wrap: anywhere;\">{{item.meta_data}}</th>\r\n                <td>{{item.cardio_result}}</td>\r\n                <td>{{item.entero_result}}</td>\r\n                <td>{{item.neuro_result}}</td>\r\n            </tr>\r\n\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
        this.result = null;
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResultComponent.prototype, "result", void 0);
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/result/result.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/sequence/sequence.component.html":
/*!**************************************************!*\
  !*** ./src/app/sequence/sequence.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-auto\">\r\n\r\n    <div class=\"row\" *ngIf=\"isLoading\">\r\n        <div class=\"spinner-grow mx-auto\" style=\"width: 6rem; height: 6rem;\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!isLoading\">\r\n        <app-result [data]=\"result\"></app-result>\r\n    </div>\r\n\r\n    <div class=\"row mt-4\" *ngIf=\"!isLoading\">\r\n        <div class=\"input-group \">\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">Protine Sequence</span>\r\n            </div>\r\n            <textarea class=\"form-control\" aria-label=\"With textarea\" [(ngModel)]=\"sequence\"></textarea>\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-primary\" type=\"button\" id=\"button-addon2\" (click)=\"predict()\">Predict</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sequence/sequence.component.ts":
/*!************************************************!*\
  !*** ./src/app/sequence/sequence.component.ts ***!
  \************************************************/
/*! exports provided: SequenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceComponent", function() { return SequenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/api.service */ "./src/service/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var SequenceComponent = /** @class */ (function () {
    function SequenceComponent(api, _snackBar) {
        this.api = api;
        this._snackBar = _snackBar;
        this.result = null;
        this.isLoading = false;
    }
    SequenceComponent.prototype.ngOnInit = function () {
    };
    SequenceComponent.prototype.predict = function () {
        var _this = this;
        this.isLoading = true;
        console.log("calling predict");
        this.api.predic_sequence(this.sequence).subscribe(function (data) {
            console.log(data);
            _this.result = data;
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
            if (err.error.message) {
                _this.openSnackBar(err.error.message);
            }
            else {
                _this.openSnackBar(err.message);
            }
        });
    };
    SequenceComponent.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, null, {
            duration: 1000,
        });
    };
    SequenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sequence',
            template: __webpack_require__(/*! ./sequence.component.html */ "./src/app/sequence/sequence.component.html"),
            host: {
                class: 'h-100'
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], SequenceComponent);
    return SequenceComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/service/api.service.ts":
/*!************************************!*\
  !*** ./src/service/api.service.ts ***!
  \************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = "http://localhost:5000/api";
        // this.testServer()
    }
    ApiService.prototype.predic_sequence = function (sequence) {
        return this.httpClient.post(this.BASE_URL + "/sequence", {
            "sequence": sequence
        });
    };
    ApiService.prototype.predic_file = function (fileToUpload) {
        var formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return this.httpClient.post(this.BASE_URL + "/fasta", formData);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shubh\Downloads\null\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map