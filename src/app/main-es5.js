function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _first_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./first.component */
    "./src/app/first.component.ts");
    /* harmony import */


    var _second_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./second.component */
    "./src/app/second.component.ts");
    /* harmony import */


    var _third_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./third.component */
    "./src/app/third.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [[1, "outline-box"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Component CSS & Encapsulation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Three components with different styles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-second");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-third");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_first_component__WEBPACK_IMPORTED_MODULE_1__["FirstComponent"], _second_component__WEBPACK_IMPORTED_MODULE_2__["SecondComponent"], _third_component__WEBPACK_IMPORTED_MODULE_3__["ThirdComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-root',
        template: "\n    <h3>Component CSS &amp; Encapsulation</h3>\n    <div class=\"outline-box\">\n      <h5>Three components with different styles</h5>\n      <app-first></app-first>\n      <app-second></app-second>\n      <app-third></app-third>\n    </div>\n  "
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _first_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./first.component */
    "./src/app/first.component.ts");
    /* harmony import */


    var _second_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./second.component */
    "./src/app/second.component.ts");
    /* harmony import */


    var _third_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./third.component */
    "./src/app/third.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"], _second_component__WEBPACK_IMPORTED_MODULE_4__["SecondComponent"], _third_component__WEBPACK_IMPORTED_MODULE_5__["ThirdComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"], _second_component__WEBPACK_IMPORTED_MODULE_4__["SecondComponent"], _third_component__WEBPACK_IMPORTED_MODULE_5__["ThirdComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/first.component.ts":
  /*!************************************!*\
    !*** ./src/app/first.component.ts ***!
    \************************************/

  /*! exports provided: FirstComponent */

  /***/
  function srcAppFirstComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstComponent", function () {
      return FirstComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FirstComponent = function FirstComponent() {
      _classCallCheck(this, FirstComponent);
    };

    FirstComponent.ɵfac = function FirstComponent_Factory(t) {
      return new (t || FirstComponent)();
    };

    FirstComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstComponent,
      selectors: [["app-first"]],
      decls: 2,
      vars: 0,
      consts: [[1, "outline-box"]],
      template: function FirstComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".outline-box[_ngcontent-%COMP%] {\n        border: 3px solid blue;\n      }"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-first',
        template: "\n    <div class=\"outline-box\">First Component</div>\n    <style>\n      .outline-box {\n        border: 3px solid blue;\n      }\n    </style>\n  "
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/second.component.ts":
  /*!*************************************!*\
    !*** ./src/app/second.component.ts ***!
    \*************************************/

  /*! exports provided: SecondComponent */

  /***/
  function srcAppSecondComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondComponent", function () {
      return SecondComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SecondComponent = function SecondComponent() {
      _classCallCheck(this, SecondComponent);
    };

    SecondComponent.ɵfac = function SecondComponent_Factory(t) {
      return new (t || SecondComponent)();
    };

    SecondComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SecondComponent,
      selectors: [["app-second"]],
      decls: 2,
      vars: 0,
      consts: [[1, "outline-box"]],
      template: function SecondComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Second Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".outline-box[_ngcontent-%COMP%] {\n        border: 3px solid green;\n      }\n      [_nghost-%COMP%] {\n        display: block;\n        border: 3px solid #ccc;\n      }"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-second',
        template: "\n    <div class=\"outline-box\">Second Component</div>\n  ",
        styles: ["\n      .outline-box {\n        border: 3px solid green;\n      }\n      :host {\n        display: block;\n        border: 3px solid #ccc;\n      }\n    "]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/third.component.ts":
  /*!************************************!*\
    !*** ./src/app/third.component.ts ***!
    \************************************/

  /*! exports provided: ThirdComponent */

  /***/
  function srcAppThirdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThirdComponent", function () {
      return ThirdComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ThirdComponent = function ThirdComponent() {
      _classCallCheck(this, ThirdComponent);
    };

    ThirdComponent.ɵfac = function ThirdComponent_Factory(t) {
      return new (t || ThirdComponent)();
    };

    ThirdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThirdComponent,
      selectors: [["app-third"]],
      decls: 2,
      vars: 0,
      consts: [[1, "outline-box"]],
      template: function ThirdComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Third Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".outline-box[_ngcontent-%COMP%] {\n  border: 3px solid orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhpcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3RoaXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0bGluZS1ib3gge1xuICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-third',
        template: "\n    <div class=\"outline-box\">Third Component</div>\n  ",
        styleUrls: ['./third.component.css'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated // this is the default
        // encapsulation: ViewEncapsulation.None
        // encapsulation: ViewEncapsulation.Native // Look in global.css at shadow selector

      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kcordes/projects/Ang/angular-class-material/abc/AOT-SKIP-cli/sandbox/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map