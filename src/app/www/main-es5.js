function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-menu contentId=\"content1\" side=\"start\">\n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title>Mesonet</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <!-- <ion-item routerLink=\"\" (click)=\"close()\">\n          <ion-label>\n            Metadata \n          </ion-label>\n        </ion-item> -->\n\n        <ion-item routerLink=\"ticket\" (click)=\"close()\" *ngIf=\"userIsLoggedIn\">\n          <ion-label>\n            Ticket\n          </ion-label>\n        </ion-item>\n\n        <ion-item routerLink=\"project\" (click)=\"close()\" *ngIf=\"userIsLoggedIn\">\n          <ion-label>\n            Project\n          </ion-label>\n        </ion-item>\n\n        <ion-item routerLink=\"notifications\" (click)=\"close()\" *ngIf=\"userIsLoggedIn\" >\n          <ion-label>Notifications</ion-label>\n          <ion-badge slot=\"end\">{{notificationCount}}</ion-badge>\n        </ion-item>\n\n        <ion-item routerLink=\"login\"  (click)=\"logout()\">\n          <ion-label *ngIf=\"userIsLoggedIn\">\n            Logout\n          </ion-label>\n          <ion-label *ngIf=\"!userIsLoggedIn\">\n            Login\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"content1\" main></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-project/create-project.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-project/create-project.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCreateProjectCreateProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>New Project</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button (click)=\"closeModal()\">\n      <ion-icon slot=\"icon-only\" padding name=\"close-outline\" ></ion-icon> \n    </ion-button>             \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #createProject=\"ngForm\" (ngSubmit)=\"submitProject(createProject.form)\" class=\"ion-padding ion-margin\" style=\"margin-top: 10vh;\" >\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input name=\"projectName\" ngModel #nameField=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item class=\"inputField\">\n        <ion-label position=\"floating\">Nickname</ion-label>\n        <ion-textarea name=\"projectNickname\" ngModel #nicknameField=\"ngModel\" required></ion-textarea>\n      </ion-item>\n    \n      <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!createProject.valid\" class=\"inputField\">Create</ion-button>\n    </ion-list>\n    \n    </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/homepage/homepage.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/homepage/homepage.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomepageHomepageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Mesonet</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"2\">\n        <app-metadata-list></app-metadata-list>\n      </ion-col>\n      <ion-col size=\"10\">\n        <app-metadata-detail></app-metadata-detail>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Mesonet</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-lg=\"4\" offset-lg=\"4\">\n\n        <ion-card routerDirection=\"forward\">\n          <ion-card-header color=\"primary\">\n            <ion-card-title class=\"ion-text-center\">Login</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>        \n            <form #createLogin=\"ngForm\" (ngSubmit)=\"submitLogin(createLogin.form)\" class=\"ion-padding ion-margin\" >\n              <ion-list>\n                <ion-item>\n                  <ion-label position=\"floating\">Username</ion-label>\n                  <ion-input name=\"username\" ngModel #emailField=\"ngModel\" required></ion-input>\n                </ion-item>\n                <ion-item class=\"inputField\">\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input type=\"password\" name=\"password\" ngModel #passwordField=\"ngModel\" required></ion-input>\n                </ion-item>          \n                <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!createLogin.valid\" class=\"inputField\">Login</ion-button>\n                  <a  class=\"ion-margin\" routerLink=\"/signup\">Don't have an account? Sign up</a>\n              </ion-list>          \n              </form>\n        </ion-card-content>\n      </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/metadata-detail/metadata-detail.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/metadata-detail/metadata-detail.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMetadataDetailMetadataDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid *ngIf=\"selectedStation.stationName!=null\">\n  <ion-row>\n\n    <ion-col>\n      <ion-card button=\"true\" color=\"primary\" mode=\"ios\">\n        <ion-card-header>\n          <ion-card-title>{{selectedStation.stationName}}</ion-card-title>\n          <ion-card-subtitle>{{selectedStation.county}}, {{selectedStation.city}}</ion-card-subtitle>\n          <ion-card-subtitle>{{selectedStation.phone}}</ion-card-subtitle>\n\n        </ion-card-header>\n      \n        <ion-card-content>\n          <p>\n            {{selectedStation.ipAddress}}\n           </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col>\n      <ion-card button=\"true\" color=\"primary\" mode=\"ios\">\n        <ion-item color=\"light\"> \n          <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n          <ion-label>Location</ion-label>\n          <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n        </ion-item>\n        <ion-card-content>\n            <ion-label>\n              Latitude: {{selectedStation.latitude}}\n            </ion-label>\n            <br/>\n            <ion-label>\n              Longitude: {{selectedStation.longitude}}\n            </ion-label>\n            <br/>\n            <ion-label>\n              Elevation: {{selectedStation.elevation}}\n            </ion-label>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-card button=\"true\" color=\"primary\" mode=\"ios\">\n      <ion-item>\n        <ion-icon name=\"hammer\" slot=\"start\"></ion-icon>\n        <ion-label>{{selectedStation.tower}}</ion-label>\n      </ion-item>\n    </ion-card>\n\n  </ion-row>\n</ion-grid>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/metadata-list/metadata-list.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/metadata-list/metadata-list.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMetadataListMetadataListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-list style=\"overflow: scroll; max-height: 600px;\" lines=\"none\">\n\n  <ion-searchbar showCancelButton=\"focus\" animated autocomplete=\"on\"></ion-searchbar>\n\n  <ion-item href=\"#\" class=\"ion-text-center ion-activated\" *ngFor=\"let station of stations\"  (click)=\"onClick(station.id)\">\n    <ion-label>{{station.stationName}}</ion-label>\n  </ion-item>\n</ion-list>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project/project.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/project/project.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProjectProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Project Timeline \n      <span *ngIf=\"selectedProject\">| {{selectedProjectName}}</span>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-fab vertical=\"top\" horizontal=\"center\">\n        <ion-fab-button (click)=\"openPicker()\">\n          <ion-icon name=\"filter-outline\" ></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-col>\n\n      <ion-fab vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button (click)=\"presentModal()\" color=\"tertiary\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n  </ion-row>\n\n  <ion-row>\n    <ion-col style=\"overflow: scroll; max-height: 90vh;\">\n\n      <vertical-timeline >\n        <vertical-timeline-card *ngFor=\"let ticket of tickets\" [dateValue]=\"ticket.createdOn\">\n          <ion-card-header>\n            <ion-card-title>{{ticket.title}} </ion-card-title>      \n            <ion-card-subtitle>Created by {{ticket.createdBy}}</ion-card-subtitle>\n          </ion-card-header> \n          <ion-card-content>\n            {{ticket.description}}\n          </ion-card-content>\n      \n          <ion-chip color=\"secondary\">\n            <ion-label color=\"dark\">Developers: {{ticket.developers.length}}</ion-label>\n          </ion-chip>\n          <ion-chip color=\"secondary\">\n            <ion-label color=\"dark\">Notes: {{ticket.notes.length}}</ion-label>\n          </ion-chip>\n          <ion-chip color=\"secondary\">\n            <ion-label color=\"dark\">Status: {{ticket.status}}\n            </ion-label>\n          </ion-chip>\n        </vertical-timeline-card>\n      </vertical-timeline>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n \n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-and-filter/search-and-filter.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-and-filter/search-and-filter.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchAndFilterSearchAndFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-searchbar (ionInput)=\"search($event)\" (cancel)=\"search($event)\" animated inputmode=\"search\" placeholder=\"search\" size=\"2\"></ion-searchbar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Mesonet</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-lg=\"4\" offset-lg=\"4\">\n\n        <div class=\"ion-text-center\">\n          <ion-spinner *ngIf=\"isLoading\" name=\"circles\"></ion-spinner>\n        </div>\n\n\n        <ion-card>\n          <ion-card-header color=\"primary\">\n            <ion-card-title class=\"ion-text-center\">Sign up</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <form #createSignup=\"ngForm\" (ngSubmit)=\"submitSignup(createSignup.form)\" class=\"ion-padding ion-margin\"\n              *ngIf=\"!isLoading\">\n              <ion-list>\n                <ion-item>\n                  <ion-label position=\"floating\">Username</ion-label>\n                  <ion-input  name=\"username\" ngModel #usernameField=\"ngModel\" (ionBlur)=\"checkUsername(usernameField)\" required></ion-input>\n                </ion-item>\n                <ion-item *ngIf=\"!validUsername && usernameField.touched\" lines=\"none\">\n                  <ion-label color=\"warning\">Username is already taken!</ion-label>\n                </ion-item>\n                <ion-item class=\"inputField\">\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input name=\"email\" ngModel #emailField=\"ngModel\" required email></ion-input>\n                </ion-item>\n                <ion-item *ngIf=\" emailField.errors && emailField.touched\" lines=\"none\">\n                  <ion-label color=\"warning\">Please enter a valid email!</ion-label>\n                </ion-item>\n                <ion-item class=\"inputField\">\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input (input)=\"passwordStrength(passwordField)\" type=\"password\" name=\"password\" ngModel #passwordField=\"ngModel\" required></ion-input>\n                </ion-item>\n                <!-- <ion-item *ngIf=\"passwordField.value\" lines=\"none\">\n                  <ion-range [(color)]=\"labelColor\" [(value)]=\"labelValue\" max=\"50\" pin=\"true\"></ion-range>\n                </ion-item> -->\n                  <ion-label *ngIf=\"passwordField.value\" [color]=\"labelColor\">Your password is {{labelStrength}}</ion-label>\n\n                <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!createSignup.valid || !validUsername\" class=\"inputField\">Register\n                </ion-button>\n\n                <a class=\"ion-margin\" routerLink=\"/login\">Already a member? Log in</a>\n\n              </ion-list>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/add-developers/add-developers.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/add-developers/add-developers.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTicketAddDevelopersAddDevelopersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n<ion-list lines=\"inset\" style=\"overflow: scroll;\">\n  <ion-item *ngFor=\"let developer of developers\">\n    <ion-avatar slot=\"start\">\n      <img src=\"./assets/icon/avatars/{{developer.avatar}}.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>{{developer.name}}</h2>\n      <h3>{{developer.title}}</h3>\n    </ion-label>\n    <ion-button fill=\"none\" (click)=\"addDeveloperToTicket(developer)\" [disabled]=\"isDeveloperPresent(developer)\">\n      <ion-icon *ngIf=\"!isDeveloperPresent(developer)\"  color=\"primary\" size=\"large\" name=\"add-circle-outline\"></ion-icon>\n      <ion-icon *ngIf=\"isDeveloperPresent(developer)\"  color=\"primary\" size=\"large\" name=\"checkmark-circle-outline\"></ion-icon>\n  </ion-button>\n  </ion-item>\n</ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/create-ticket/create-ticket.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/create-ticket/create-ticket.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTicketCreateTicketCreateTicketComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>New Ticket</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button  (click)=\"closeModal()\">\n      <ion-icon slot=\"icon-only\" padding name=\"close-outline\"></ion-icon>    \n      </ion-button>          \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <form #createTicket=\"ngForm\" (ngSubmit)=\"submitTicket(createTicket.form)\" class=\"ion-padding ion-margin\" >\n        <ion-list>\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input name=\"ticketTitle\" ngModel #titleField=\"ngModel\" required></ion-input>\n          </ion-item>\n          <ion-item class=\"inputField\">\n            <ion-label position=\"floating\">Description</ion-label>\n            <ion-textarea name=\"ticketDescription\" ngModel #descriptionField=\"ngModel\" required></ion-textarea>\n          </ion-item>\n          <ion-item class=\"inputField\">\n            <ion-label>Project</ion-label>\n            <ion-select placeholder=\"Select one project\" name=\"ticketProject\" ngModel #projectField=\"ngModel\" required>\n              <ion-select-option *ngFor=\"let project of availableProjects\" [value]=\"project.id\">{{project.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        \n          <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!createTicket.valid\" class=\"inputField\">Create</ion-button>\n        </ion-list>\n        \n        </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/filter/filter.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/filter/filter.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTicketFilterFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-list lines=\"none\" mode=\"ios\">\n    <ion-item>\n      <ion-label for=\"check\">Created by me</ion-label>\n      <ion-checkbox name=\"check\" slot=\"start\"  (click)=\"authorFilter($event)\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/mentions/mentions.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/mentions/mentions.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTicketMentionsMentionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  mentions works!\n  {{searchString}}\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/notifications/notifications.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/notifications/notifications.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTicketNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Notifications</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"6\" size-sm=\"12\" size-xs=\"12\" offset-md=\"3\" offset-sm=\"0\" offset-xs=\"0\" >\n        <ion-list>\n          <ion-item *ngFor=\"let notification of notifications\">\n            <ion-label>\n              <h2 class=\"ion-text-wrap\"> {{notification.message}}</h2>\n              <p>{{notification.createdAt | timeAgo}}</p>\n            </ion-label>\n            <ion-button (click)=\"deleteNotification(notification)\" color=\"warning\">\n              <ion-icon slot=\"icon-only\" name=\"remove-circle-outline\" ></ion-icon>              \n            </ion-button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"notifications?.length <= 0 || notifications===undefined || notifications===null\">\n    <ion-col size-md=\"6\" size-sm=\"12\" size-xs=\"12\" offset-md=\"3\" offset-sm=\"0\" offset-xs=\"0\">\n      <ion-card color=\"warning\">\n        <ion-card-header>\n          <ion-card-title>\n            No notifications present\n          </ion-card-title>\n          <ion-label>If you have any mentions or if someone adds you to a ticket, there will be entries here</ion-label>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/ticket-detail/ticket-detail.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/ticket-detail/ticket-detail.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTicketTicketDetailTicketDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{ticket.title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"ticket\"></ion-back-button>\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"ticket\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card> \n          <ion-card-header color=\"primary\">\n            <ion-card-title class=\"ion-text-center\"> Ticket Details </ion-card-title>\n          </ion-card-header>  \n  \n          <ion-card-header>\n            <ion-card-title>{{ticket.title}}</ion-card-title>\n            <ion-card-subtitle>Created by {{ticket.createdBy}}</ion-card-subtitle>\n            <ion-card-subtitle> Created {{ticket.description}}</ion-card-subtitle>\n            <!-- <ion-card-subtitle>{{ticket.createdOn | timeAgo}}</ion-card-subtitle> -->\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-range [(color)]=\"rangeColor\" [(ngModel)]=\"rangeValue\" (ionChange)=\"statusChange($event)\" dualKnobs=\"false\" min=\"0\" max=\"30\" step=\"10\" snaps=\"true\"></ion-range>\n            </ion-item>\n\n            <ion-chip [(color)]=\"rangeColor\" outline class=\"ion-float-right\">\n              <ion-label [color]=\"rangeColor\">{{rangeLabel}}</ion-label>\n              <ion-icon [color]=\"rangeColor\" *ngIf=\"rangeLabel==='Not Started'\" name=\"alert-circle-outline\"></ion-icon>\n              <ion-icon [color]=\"rangeColor\" *ngIf=\"rangeLabel==='Initiated'\" name=\"code-working-outline\"></ion-icon>\n              <ion-icon  [color]=\"rangeColor\"*ngIf=\"rangeLabel==='Almost Done'\" name=\"push-outline\"></ion-icon>\n              <ion-icon  [color]=\"rangeColor\" *ngIf=\"rangeLabel==='Ticket resolved'\" name=\"checkbox-outline\"></ion-icon>\n            </ion-chip>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card> \n          <ion-card-header color=\"primary\">\n            <ion-card-title class=\"ion-text-center\"> Ticket Developers </ion-card-title>\n  \n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid>\n              <ion-row >\n                <ion-col style=\"overflow-y: scroll; max-height: 400px;\" size-lg=\"6\" size-md=\"12\" size-sm=\"12\" size-xs=\"12\">\n                  <h1 class=\"ion-text-center\"> Present Developers</h1>\n                <ion-list>\n                  <ion-item *ngFor=\"let developer of developers\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"./assets/icon/avatars/{{developer.avatar}}.png\">\n                    </ion-avatar>\n                    <ion-label>\n                      <h2>{{developer.name}}</h2>\n                      <h3>{{developer.title}}</h3>\n                      <p>{{developer.email}}</p>\n                    </ion-label>\n                    <ion-button fill=\"none\" (click)=\"removeDeveloperFromTicket(developer)\">\n                      <ion-icon color=\"primary\" size=\"large\" name=\"close-circle-outline\"></ion-icon>\n                  </ion-button>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n\n              <ion-col style=\"overflow-y: scroll; max-height: 400px;\" size-lg=\"6\" size-md=\"12\" size-sm=\"12\" size-xs=\"12\">\n                <h1 class=\"ion-text-center\"> Invite Developers</h1>\n                <ion-list>\n                  <ion-item *ngFor=\"let developer of inviteDevelopers\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"./assets/icon/avatars/{{developer.avatar}}.png\">\n                    </ion-avatar>\n                    <ion-label>\n                      <h2>{{developer.name}}</h2>\n                      <h3>{{developer.title}}</h3>\n                      <p>{{developer.email}}</p>\n                    </ion-label>\n                    <ion-button fill=\"none\" (click)=\"addDeveloperToTicket(developer)\">\n                      <ion-icon *ngIf=\"!isDeveloperPresent(developer)\"  color=\"primary\" size=\"large\" name=\"add-circle-outline\"></ion-icon>\n                  </ion-button>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n              </ion-row>\n            </ion-grid>\n            \n          </ion-card-content>\n        </ion-card>    \n      </ion-col>\n \n      <ion-col>\n      <ion-card> \n        <ion-card-header color=\"primary\">\n          <ion-card-title class=\"ion-text-center\"> Ticket Notes </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-grid >\n            <ion-row *ngIf=\"notes?.length>0\">\n              <ion-col size=\"8\" offset=\"2\" style=\"overflow-y: scroll; height: 500px;\" size-md=\"12\" size-sm=\"12\" size-xs=\"12\" offset-md=\"0\" offset-sm=\"0\" offset-xs=\"0\" >\n              <ion-list lines=\"none\">\n                <ion-item *ngFor=\"let note of notes\">\n                  <ion-avatar slot=\"start\" *ngIf=\"note.createdBy!==loggedInUser.username\">\n                    <img src=\"./assets/icon/avatars/{{getAvatarFromNoteAuthor(note)}}.png\">\n                  </ion-avatar>\n                  <ion-label *ngIf=\"note.createdBy!==loggedInUser.username\">\n                    <h2> {{note.createdBy}}</h2>\n                    <p> {{note.createdAt | timeAgo}}</p>\n                    <h3 class=\"ion-text-wrap\">{{note.text}}</h3>\n                  </ion-label>\n\n                  <ion-avatar slot=\"end\" *ngIf=\"note.createdBy===loggedInUser.username\">\n                    <img src=\"./assets/icon/avatars/{{getAvatarFromNoteAuthor(note)}}.png\">\n                  </ion-avatar>\n                  <ion-label *ngIf=\"note.createdBy===loggedInUser.username\" class=\"ion-text-right\">\n                      <h2>  {{note.createdBy}}</h2>\n                      <p> {{note.createdAt | timeAgo}}</p>\n                      <h3 class=\"ion-text-wrap\">{{note.text}}</h3>\n                  </ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"notes?.length <= 0 || notes===undefined || notes===null\">\n              <ion-col size-md=\"8\" size-sm=\"12\" size-xs=\"12\" offset-md=\"2\" offset-sm=\"0\" offset-xs=\"0\">\n                <ion-card color=\"warning\">\n                  <ion-card-header>\n                    <ion-card-title>\n                      No notes for {{ticket.title}}\n                    </ion-card-title>\n                    <ion-label>You can add notes and mention other devs using @</ion-label>\n                  </ion-card-header>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n\n\n          </ion-grid>\n\n          <ion-grid>\n            <form #noteForm=\"ngForm\" (ngSubmit)=\"noteSubmit(noteForm, ticket)\">\n            <ion-row class=\"ion-align-items-end\">\n              <ion-col size=\"7\" offset=\"2\">\n\n                <ion-item>\n                  <ion-label position=\"floating\">Note</ion-label>\n                  <ion-textarea #noteText  name=\"note\" ngModel required></ion-textarea>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"1\">\n                  <ion-button type=\"submit\" [disabled]=\"!noteForm.valid\" >\n                    <ion-icon name=\"send-outline\"></ion-icon>                  \n                  </ion-button>\n              </ion-col>\n            </ion-row>\n\n\n          </form>\n          </ion-grid>  \n          \n        </ion-card-content>\n      </ion-card>    \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/ticket-list/ticket-list.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/ticket-list/ticket-list.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTicketTicketListTicketListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>  \n      <ion-title> Tickets </ion-title>\n\n      <ion-buttons slot=\"end\">\n        <ion-button  (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" name=\"filter-outline\"></ion-icon>\n    </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row *ngIf=\"filteredTickets?.length > 0\">\n      <ion-col size-sm=\"12\" size-md=\"6\" size-lg=\"4\" offset-md=\"3\" offset-lg=\"4\">\n        <app-search-and-filter></app-search-and-filter>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"filteredTickets?.length <= 0 || filteredTickets===undefined || filteredTickets===null\">\n      <ion-col size-md=\"8\" size-sm=\"12\" size-xs=\"12\" offset-md=\"2\" offset-sm=\"0\" offset-xs=\"0\">\n        <ion-card color=\"warning\">\n          <ion-card-header>\n            <ion-card-title>\n              No tickets are present at the moment\n            </ion-card-title>\n            <ion-label>Please add some tickets</ion-label>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"filteredTickets?.length > 0\">\n      <ion-col size-sm=\"12\" size-md=\"6\" size-lg=\"3\" *ngFor=\"let ticket of filteredTickets\" >\n        <ion-card color=\"primary\">\n          <ion-card-header>\n            <ion-card-title>{{ticket.title}}\n              <!-- <div> -->\n                <!-- {{ticket.status}} -->\n              <!-- </div> -->\n            </ion-card-title>\n            <ion-card-subtitle>{{ticket.createdBy}} | {{ticket.project?.name}}</ion-card-subtitle>\n            <ion-card-subtitle>{{getShortDesc(ticket.description)}}</ion-card-subtitle>\n\n            <ion-card-subtitle>{{ticket.createdOn | timeAgo}} </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-buttons>\n              <ion-button fill=\"outline\" color=\"light\" (click)=\"deleteTicket(ticket.id)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n              <ion-button fill=\"outline\" color=\"light\" (click)=\"showAddDevelopers($event, ticket)\">\n                <ion-icon slot=\"icon-only\" name=\"person-add-outline\"></ion-icon>              \n              </ion-button>\n              <ion-button fill=\"outline\" color=\"light\" routerLink=\"/ticket/{{ticket.id}}\">\n                <ion-icon slot=\"icon-only\" name=\"enter-outline\" ></ion-icon>              \n              </ion-button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n  <ion-fab-button (click)=\"presentModal()\" color=\"tertiary\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_ticket_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/ticket/ticket-detail/ticket-detail.component */
    "./src/app/components/ticket/ticket-detail/ticket-detail.component.ts");
    /* harmony import */


    var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/homepage/homepage.component */
    "./src/app/components/homepage/homepage.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_ticket_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/ticket/ticket-list/ticket-list.component */
    "./src/app/components/ticket/ticket-list/ticket-list.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/auth/auth.guard */
    "./src/app/services/auth/auth.guard.ts");
    /* harmony import */


    var _components_ticket_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/ticket/notifications/notifications.component */
    "./src/app/components/ticket/notifications/notifications.component.ts");
    /* harmony import */


    var _components_project_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/project/project.component */
    "./src/app/components/project/project.component.ts");

    var routes = [{
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'signup',
      component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
    }, {
      path: 'metadata',
      component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"],
      pathMatch: 'full',
      canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'ticket/:id',
      component: _components_ticket_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_1__["TicketDetailComponent"],
      canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'ticket',
      component: _components_ticket_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_5__["TicketListComponent"],
      canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'notifications',
      component: _components_ticket_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"],
      canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'project',
      component: _components_project_project_component__WEBPACK_IMPORTED_MODULE_10__["ProjectComponent"],
      canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, authService, ticketService, menuController, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.authService = authService;
        this.ticketService = ticketService;
        this.menuController = menuController;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.notificationCount = 0;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.authService.loggedInUserEvent.subscribe(function (data) {
              _this.userIsLoggedIn = data;

              _this.ticketService.getNotifications().subscribe(function (notifications) {
                _this.notificationCount = notifications.filter(function (notification) {
                  return !notification.seen;
                }).length;
              });
            });
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.menuController.toggle();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.loggedInUserEvent.emit(false);
          localStorage.removeItem('jwt');
          localStorage.removeItem('user');
          this.close();
        }
      }, {
        key: "fetchNotifications",
        value: function fetchNotifications() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]])], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_ticket_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/ticket/ticket-list/ticket-list.component */
    "./src/app/components/ticket/ticket-list/ticket-list.component.ts");
    /* harmony import */


    var _components_ticket_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/ticket/filter/filter.component */
    "./src/app/components/ticket/filter/filter.component.ts");
    /* harmony import */


    var _components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/create-project/create-project.component */
    "./src/app/components/create-project/create-project.component.ts");
    /* harmony import */


    var _components_project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/project/project.component */
    "./src/app/components/project/project.component.ts");
    /* harmony import */


    var _components_ticket_mentions_mentions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/ticket/mentions/mentions.component */
    "./src/app/components/ticket/mentions/mentions.component.ts");
    /* harmony import */


    var _components_ticket_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/ticket/ticket-detail/ticket-detail.component */
    "./src/app/components/ticket/ticket-detail/ticket-detail.component.ts");
    /* harmony import */


    var _components_search_and_filter_search_and_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/search-and-filter/search-and-filter.component */
    "./src/app/components/search-and-filter/search-and-filter.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _services_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/auth/http-interceptor.service */
    "./src/app/services/auth/http-interceptor.service.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_ticket_add_developers_add_developers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/ticket/add-developers/add-developers.component */
    "./src/app/components/ticket/add-developers/add-developers.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_ticket_create_ticket_create_ticket_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/ticket/create-ticket/create-ticket.component */
    "./src/app/components/ticket/create-ticket/create-ticket.component.ts");
    /* harmony import */


    var _components_metadata_list_metadata_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/metadata-list/metadata-list.component */
    "./src/app/components/metadata-list/metadata-list.component.ts");
    /* harmony import */


    var _components_metadata_detail_metadata_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/metadata-detail/metadata-detail.component */
    "./src/app/components/metadata-detail/metadata-detail.component.ts");
    /* harmony import */


    var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/homepage/homepage.component */
    "./src/app/components/homepage/homepage.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var time_ago_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! time-ago-pipe */
    "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
    /* harmony import */


    var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./services/auth/auth.guard */
    "./src/app/services/auth/auth.guard.ts");
    /* harmony import */


    var _components_ticket_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/ticket/notifications/notifications.component */
    "./src/app/components/ticket/notifications/notifications.component.ts");
    /* harmony import */


    var angular_vertical_timeline__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! angular-vertical-timeline */
    "./node_modules/angular-vertical-timeline/dist/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_17__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__["HomepageComponent"], _components_metadata_detail_metadata_detail_component__WEBPACK_IMPORTED_MODULE_15__["MetadataDetailComponent"], _components_metadata_list_metadata_list_component__WEBPACK_IMPORTED_MODULE_14__["MetadataListComponent"], _components_ticket_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_1__["TicketListComponent"], _components_ticket_create_ticket_create_ticket_component__WEBPACK_IMPORTED_MODULE_13__["CreateTicketComponent"], time_ago_pipe__WEBPACK_IMPORTED_MODULE_26__["TimeAgoPipe"], _components_ticket_add_developers_add_developers_component__WEBPACK_IMPORTED_MODULE_11__["AddDevelopersComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _components_search_and_filter_search_and_filter_component__WEBPACK_IMPORTED_MODULE_7__["SearchAndFilterComponent"], _components_ticket_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_6__["TicketDetailComponent"], _components_ticket_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_28__["NotificationsComponent"], _components_ticket_mentions_mentions_component__WEBPACK_IMPORTED_MODULE_5__["MentionsComponent"], _components_project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"], _components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_3__["CreateProjectComponent"], _components_ticket_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"]],
      entryComponents: [_components_ticket_create_ticket_create_ticket_component__WEBPACK_IMPORTED_MODULE_13__["CreateTicketComponent"], _components_ticket_add_developers_add_developers_component__WEBPACK_IMPORTED_MODULE_11__["AddDevelopersComponent"], _components_ticket_mentions_mentions_component__WEBPACK_IMPORTED_MODULE_5__["MentionsComponent"], _components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_3__["CreateProjectComponent"], _components_ticket_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], angular_vertical_timeline__WEBPACK_IMPORTED_MODULE_29__["VerticalTimelineModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"],
        useClass: _services_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["HttpInterceptorService"],
        multi: true
      }, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_23__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_22__["SplashScreen"], _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/commons/metadata.ts":
  /*!*************************************!*\
    !*** ./src/app/commons/metadata.ts ***!
    \*************************************/

  /*! exports provided: Metadata */

  /***/
  function srcAppCommonsMetadataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Metadata", function () {
      return Metadata;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Metadata = function Metadata() {
      _classCallCheck(this, Metadata);
    };
    /***/

  },

  /***/
  "./src/app/commons/ticket.ts":
  /*!***********************************!*\
    !*** ./src/app/commons/ticket.ts ***!
    \***********************************/

  /*! exports provided: Ticket */

  /***/
  function srcAppCommonsTicketTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ticket", function () {
      return Ticket;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Ticket = function Ticket() {
      _classCallCheck(this, Ticket);
    };
    /***/

  },

  /***/
  "./src/app/components/create-project/create-project.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/create-project/create-project.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCreateProjectCreateProjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inputField {\n  margin-top: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb3VkZWwvRGVza3RvcC9tZXRhZGF0YS1pb24vc3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS1wcm9qZWN0L2NyZWF0ZS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS1wcm9qZWN0L2NyZWF0ZS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtcHJvamVjdC9jcmVhdGUtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dEZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG59IiwiLmlucHV0RmllbGQge1xuICBtYXJnaW4tdG9wOiAzdmg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/create-project/create-project.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/create-project/create-project.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CreateProjectComponent */

  /***/
  function srcAppComponentsCreateProjectCreateProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateProjectComponent", function () {
      return CreateProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CreateProjectComponent = /*#__PURE__*/function () {
      function CreateProjectComponent(ticketService, modalController) {
        _classCallCheck(this, CreateProjectComponent);

        this.ticketService = ticketService;
        this.modalController = modalController;
      }

      _createClass(CreateProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitProject",
        value: function submitProject(createTicket) {
          var _this2 = this;

          console.log(createTicket.value.projectName);
          console.log(createTicket.value.projectNickname);
          this.ticketService.createProject(createTicket.value.projectName, createTicket.value.projectNickname).subscribe(function (data) {
            console.log(data);

            _this2.modalController.dismiss();

            createTicket.reset();
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss();
        }
      }]);

      return CreateProjectComponent;
    }();

    CreateProjectComponent.ctorParameters = function () {
      return [{
        type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
      }];
    };

    CreateProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-create-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-project/create-project.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-project.component.scss */
      "./src/app/components/create-project/create-project.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])], CreateProjectComponent);
    /***/
  },

  /***/
  "./src/app/components/homepage/homepage.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/homepage/homepage.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomepageHomepageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/homepage/homepage.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/homepage/homepage.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppComponentsHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomepageComponent = /*#__PURE__*/function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomepageComponent;
    }();

    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./homepage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/homepage/homepage.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./homepage.component.scss */
      "./src/app/components/homepage/homepage.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HomepageComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/login/login.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inputField {\n  margin-top: 3vh;\n}\n\nion-card {\n  margin-top: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb3VkZWwvRGVza3RvcC9tZXRhZGF0YS1pb24vc3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRGaWVsZCB7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xufVxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbn0iLCIuaW5wdXRGaWVsZCB7XG4gIG1hcmdpbi10b3A6IDN2aDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAxNXZoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, router, toastController) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.toastController = toastController;
        this.errorMessage = null;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitLogin",
        value: function submitLogin(form) {
          var _this3 = this;

          localStorage.removeItem('jwt');
          localStorage.removeItem('user');
          this.authService.executeAuthService(form.value.username, form.value.password).subscribe(function (data) {
            _this3.authService.loggedInUserEvent.emit(true);

            if (_this3.authService.userIsLoggedIn) {
              _this3.router.navigateByUrl('ticket');
            }
          }, function (error) {
            console.log(error.error);
            _this3.errorMessage = error.error.message;

            var toast = _this3.toastController.create({
              color: 'danger',
              message: _this3.errorMessage,
              duration: 3000
            }).then(function (el) {
              el.present();
            });
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/login/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/metadata-detail/metadata-detail.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/metadata-detail/metadata-detail.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMetadataDetailMetadataDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-header-image {\n  background-image: url(\"https://upload.wikimedia.org/wikipedia/commons/8/85/Cell-Tower.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb3VkZWwvRGVza3RvcC9tZXRhZGF0YS1pb24vc3JjL2FwcC9jb21wb25lbnRzL21ldGFkYXRhLWRldGFpbC9tZXRhZGF0YS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWV0YWRhdGEtZGV0YWlsL21ldGFkYXRhLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJGQUFBO0VBQ0Esc0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0YWRhdGEtZGV0YWlsL21ldGFkYXRhLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOC84NS9DZWxsLVRvd2VyLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgIiwiLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy84Lzg1L0NlbGwtVG93ZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/metadata-detail/metadata-detail.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/metadata-detail/metadata-detail.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MetadataDetailComponent */

  /***/
  function srcAppComponentsMetadataDetailMetadataDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetadataDetailComponent", function () {
      return MetadataDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_commons_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/commons/metadata */
    "./src/app/commons/metadata.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_metadata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/metadata.service */
    "./src/app/services/metadata.service.ts");

    var MetadataDetailComponent = /*#__PURE__*/function () {
      function MetadataDetailComponent(route, metadataService) {
        _classCallCheck(this, MetadataDetailComponent);

        this.route = route;
        this.metadataService = metadataService;
        this.selectedStation = new src_app_commons_metadata__WEBPACK_IMPORTED_MODULE_2__["Metadata"]();
      }

      _createClass(MetadataDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.metadataService.selectedMetadata.subscribe(function (data) {
            _this4.selectedStation = data;
          });
        }
      }]);

      return MetadataDetailComponent;
    }();

    MetadataDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_metadata_service__WEBPACK_IMPORTED_MODULE_4__["MetadataService"]
      }];
    };

    MetadataDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-metadata-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./metadata-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/metadata-detail/metadata-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./metadata-detail.component.scss */
      "./src/app/components/metadata-detail/metadata-detail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_metadata_service__WEBPACK_IMPORTED_MODULE_4__["MetadataService"]])], MetadataDetailComponent);
    /***/
  },

  /***/
  "./src/app/components/metadata-list/metadata-list.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/metadata-list/metadata-list.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMetadataListMetadataListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0YWRhdGEtbGlzdC9tZXRhZGF0YS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/metadata-list/metadata-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/metadata-list/metadata-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MetadataListComponent */

  /***/
  function srcAppComponentsMetadataListMetadataListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetadataListComponent", function () {
      return MetadataListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_metadata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/metadata.service */
    "./src/app/services/metadata.service.ts");

    var MetadataListComponent = /*#__PURE__*/function () {
      function MetadataListComponent(metadataService) {
        _classCallCheck(this, MetadataListComponent);

        this.metadataService = metadataService;
      }

      _createClass(MetadataListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.metadataService.getMetadatas().subscribe(function (data) {
            _this5.stations = data;
          });
        }
      }, {
        key: "onClick",
        value: function onClick(id) {
          var _this6 = this;

          this.metadataService.getMetadata(id).subscribe(function (data) {
            var metadata = data;

            _this6.metadataService.selectedMetadata.emit(metadata);
          });
        }
      }]);

      return MetadataListComponent;
    }();

    MetadataListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_metadata_service__WEBPACK_IMPORTED_MODULE_2__["MetadataService"]
      }];
    };

    MetadataListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-metadata-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./metadata-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/metadata-list/metadata-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./metadata-list.component.scss */
      "./src/app/components/metadata-list/metadata-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_metadata_service__WEBPACK_IMPORTED_MODULE_2__["MetadataService"]])], MetadataListComponent);
    /***/
  },

  /***/
  "./src/app/components/project/project.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/project/project.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProjectProjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/project/project.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/project/project.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppComponentsProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../create-project/create-project.component */
    "./src/app/components/create-project/create-project.component.ts");
    /* harmony import */


    var _services_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ProjectComponent = /*#__PURE__*/function () {
      function ProjectComponent(ticketService, pickerController, modalController) {
        _classCallCheck(this, ProjectComponent);

        this.ticketService = ticketService;
        this.pickerController = pickerController;
        this.modalController = modalController;
      }

      _createClass(ProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this7 = this;

          this.ticketService.getTickets().subscribe(function (data) {
            _this7.tickets = data;

            if (_this7.selectedProject) {
              // tslint:disable-next-line: max-line-length
              _this7.tickets = _this7.tickets.filter(function (ticket) {
                return ticket.project.id === _this7.selectedProject;
              }).sort(function (a, b) {
                return a.createdOn < b.createdOn ? 1 : -1;
              });
            } else {
              _this7.tickets = _this7.tickets.sort(function (a, b) {
                return a.createdOn < b.createdOn ? 1 : -1;
              });
            }

            console.log(_this7.tickets);
          });
          this.ticketService.getProjects().subscribe(function (data) {
            _this7.allProjects = data;
          });
        }
      }, {
        key: "openPicker",
        value: function openPicker() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this8 = this;

            var picker;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.pickerController.create({
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                      }, {
                        text: 'Ok',
                        handler: function handler(value) {
                          _this8.selectedProject = value.Projects.value;
                          _this8.selectedProjectName = value.Projects.text;
                          console.log(_this8.selectedProjectName);

                          _this8.ionViewWillEnter();
                        }
                      }],
                      columns: [{
                        name: 'Projects',
                        options: this.getColumnOptions()
                      }]
                    });

                  case 2:
                    picker = _context.sent;
                    _context.next = 5;
                    return picker.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getColumnOptions",
        value: function getColumnOptions() {
          var options = [];
          this.allProjects.forEach(function (x) {
            options.push({
              text: x.name,
              value: x.id
            });
          });
          return options;
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this9 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_1__["CreateProjectComponent"]
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (el) {
                      return _this9.ngOnInit();
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ProjectComponent;
    }();

    ProjectComponent.ctorParameters = function () {
      return [{
        type: _services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project/project.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project.component.scss */
      "./src/app/components/project/project.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], ProjectComponent);
    /***/
  },

  /***/
  "./src/app/components/search-and-filter/search-and-filter.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/search-and-filter/search-and-filter.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchAndFilterSearchAndFilterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWFuZC1maWx0ZXIvc2VhcmNoLWFuZC1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/search-and-filter/search-and-filter.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/search-and-filter/search-and-filter.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SearchAndFilterComponent */

  /***/
  function srcAppComponentsSearchAndFilterSearchAndFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchAndFilterComponent", function () {
      return SearchAndFilterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchAndFilterComponent = /*#__PURE__*/function () {
      function SearchAndFilterComponent(ticketService) {
        _classCallCheck(this, SearchAndFilterComponent);

        this.ticketService = ticketService;
      }

      _createClass(SearchAndFilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search(event) {
          this.ticketService.searchText.emit(event.target.value);
        }
      }]);

      return SearchAndFilterComponent;
    }();

    SearchAndFilterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"]
      }];
    };

    SearchAndFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-search-and-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-and-filter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-and-filter/search-and-filter.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-and-filter.component.scss */
      "./src/app/components/search-and-filter/search-and-filter.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"]])], SearchAndFilterComponent);
    /***/
  },

  /***/
  "./src/app/components/signup/signup.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/signup/signup.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inputField {\n  margin-top: 3vh;\n}\n\nion-card {\n  margin-top: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb3VkZWwvRGVza3RvcC9tZXRhZGF0YS1pb24vc3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRGaWVsZCB7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xufVxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbn0iLCIuaW5wdXRGaWVsZCB7XG4gIG1hcmdpbi10b3A6IDN2aDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAxNXZoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(authService, loadingController, router, toastController) {
        _classCallCheck(this, SignupComponent);

        this.authService = authService;
        this.loadingController = loadingController;
        this.router = router;
        this.toastController = toastController;
        this.isLoading = false;
        this.errorMessage = null;
        this.validUsername = true;
        this.labelColor = 'danger';
        this.labelValue = 0;
        this.labelStrength = 'very weak';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitSignup",
        value: function submitSignup(form) {
          var _this10 = this;

          this.isLoading = true;
          this.authService.registerUser(form.value.username, form.value.email, form.value.password).subscribe(function (data) {
            _this10.isLoading = false;

            _this10.router.navigate(['/login']);
          }, function (error) {
            _this10.errorMessage = error.error.message;
            _this10.isLoading = false;

            var toast = _this10.toastController.create({
              color: 'danger',
              message: _this10.errorMessage,
              duration: 3000
            }).then(function (el) {
              el.present();
            });
          });
        }
      }, {
        key: "checkUsername",
        value: function checkUsername(usernameField) {
          var _this11 = this;

          console.log(usernameField.value);
          this.authService.checkUsername(usernameField.value).subscribe(function (data) {
            if (data['message'] === 'duplicate') {
              _this11.validUsername = false;
            } else {
              _this11.validUsername = true;
            }
          });
        }
      }, {
        key: "passwordStrength",
        value: function passwordStrength(pass) {
          var password = pass.value;
          var color = 'danger';
          var strength;
          var totalScore = 0;
          var specialCharScore = (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;
          var lengthScore = password.length;
          totalScore = specialCharScore * 10 + lengthScore;

          if (specialCharScore >= 2) {
            totalScore += 10;
          }

          if (lengthScore >= 8) {
            totalScore += 10;
          }

          if (totalScore >= 50) {
            strength = 'super secure';
            color = 'success';
          } else if (totalScore < 50 && totalScore >= 30) {
            strength = 'moderate';
            color = 'tertiary';
          } else if (totalScore < 30 && totalScore >= 15) {
            strength = 'weak';
            color = 'secondary';
          } else {
            strength = 'very weak';
          }

          this.labelValue = totalScore;
          this.labelStrength = strength;
          this.labelColor = color;
          console.log(totalScore);
          return [totalScore.toString(), strength];
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/components/signup/signup.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/components/ticket/add-developers/add-developers.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/components/ticket/add-developers/add-developers.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTicketAddDevelopersAddDevelopersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0L2FkZC1kZXZlbG9wZXJzL2FkZC1kZXZlbG9wZXJzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/ticket/add-developers/add-developers.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/ticket/add-developers/add-developers.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AddDevelopersComponent */

  /***/
  function srcAppComponentsTicketAddDevelopersAddDevelopersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDevelopersComponent", function () {
      return AddDevelopersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddDevelopersComponent = /*#__PURE__*/function () {
      function AddDevelopersComponent(ticketService, toastController) {
        _classCallCheck(this, AddDevelopersComponent);

        this.ticketService = ticketService;
        this.toastController = toastController;
      }

      _createClass(AddDevelopersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.ticketService.getDevelopers().subscribe(data => {
          //   this.developers = data;
          // });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this12 = this;

          this.ticketService.getDevelopers().subscribe(function (data) {
            _this12.developers = data;
          });
        }
      }, {
        key: "addDeveloperToTicket",
        value: function addDeveloperToTicket(developer) {
          var _this13 = this;

          console.log(!this.isDeveloperPresent(developer));

          if (!this.isDeveloperPresent(developer)) {
            this.ticketService.assignDeveloperToTicket(this.ticket.id, developer.id).subscribe(function (data) {
              _this13.ticket = data;

              var toast = _this13.toastController.create({
                color: 'success',
                message: "".concat(developer.name, " is added to the ticket"),
                duration: 2000
              }).then(function (el) {
                el.present();

                _this13.ionViewWillEnter();
              });
            });
          }
        }
      }, {
        key: "isDeveloperPresent",
        value: function isDeveloperPresent(developer) {
          // tslint:disable-next-line: prefer-for-of
          for (var i = 0; i < this.ticket.developers.length; i++) {
            if (this.ticket.developers[i].id === developer.id) {
              return true;
            }
          }

          return false;
        }
      }]);

      return AddDevelopersComponent;
    }();

    AddDevelopersComponent.ctorParameters = function () {
      return [{
        type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddDevelopersComponent.prototype, "ticket", void 0);
    AddDevelopersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-add-developers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-developers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/add-developers/add-developers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-developers.component.scss */
      "./src/app/components/ticket/add-developers/add-developers.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])], AddDevelopersComponent);
    /***/
  },

  /***/
  "./src/app/components/ticket/create-ticket/create-ticket.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/components/ticket/create-ticket/create-ticket.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTicketCreateTicketCreateTicketComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inputField {\n  margin-top: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb3VkZWwvRGVza3RvcC9tZXRhZGF0YS1pb24vc3JjL2FwcC9jb21wb25lbnRzL3RpY2tldC9jcmVhdGUtdGlja2V0L2NyZWF0ZS10aWNrZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0L2NyZWF0ZS10aWNrZXQvY3JlYXRlLXRpY2tldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0L2NyZWF0ZS10aWNrZXQvY3JlYXRlLXRpY2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dEZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG59IiwiLmlucHV0RmllbGQge1xuICBtYXJnaW4tdG9wOiAzdmg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/ticket/create-ticket/create-ticket.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/ticket/create-ticket/create-ticket.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CreateTicketComponent */

  /***/
  function srcAppComponentsTicketCreateTicketCreateTicketComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTicketComponent", function () {
      return CreateTicketComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CreateTicketComponent = /*#__PURE__*/function () {
      function CreateTicketComponent(ticketService, modalController) {
        _classCallCheck(this, CreateTicketComponent);

        this.ticketService = ticketService;
        this.modalController = modalController;
      }

      _createClass(CreateTicketComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.ticketService.getProjects().subscribe(function (data) {
            _this14.availableProjects = data;
          });
        }
      }, {
        key: "submitTicket",
        value: function submitTicket(form) {
          // tslint:disable-next-line: max-line-length
          this.ticketService.createTicket(form.value.ticketTitle, form.value.ticketDescription, form.value.ticketProject).subscribe(function (data) {});
          form.reset();
          this.modalController.dismiss();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss();
        }
      }]);

      return CreateTicketComponent;
    }();

    CreateTicketComponent.ctorParameters = function () {
      return [{
        type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    CreateTicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-create-ticket',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-ticket.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/create-ticket/create-ticket.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-ticket.component.scss */
      "./src/app/components/ticket/create-ticket/create-ticket.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], CreateTicketComponent);
    /***/
  },

  /***/
  "./src/app/components/ticket/filter/filter.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/ticket/filter/filter.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTicketFilterFilterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0L2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/ticket/filter/filter.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/ticket/filter/filter.component.ts ***!
    \**************************************************************/

  /*! exports provided: FilterComponent */

  /***/
  function srcAppComponentsTicketFilterFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterComponent", function () {
      return FilterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FilterComponent = /*#__PURE__*/function () {
      function FilterComponent(ticketService) {
        _classCallCheck(this, FilterComponent);

        this.ticketService = ticketService;
        this.authorSelected = false;
      }

      _createClass(FilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authorSelected = false;
          console.log(this.authorSelected);
        }
      }, {
        key: "authorFilter",
        value: function authorFilter(ev) {
          this.authorSelected = !this.authorSelected;
          console.log(this.authorSelected);

          if (this.authorSelected) {
            this.ticketService.filterByAuthor.emit(this.authorSelected);
            ev.target.selected = true;
          } else {
            this.ticketService.filterByAuthor.emit(this.authorSelected);
          }
        }
      }]);

      return FilterComponent;
    }();

    FilterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"]
      }];
    };

    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./filter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/filter/filter.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./filter.component.scss */
      "./src/app/components/ticket/filter/filter.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"]])], FilterComponent);
    /***/
  },

  /***/
  "./src/app/components/ticket/mentions/mentions.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/ticket/mentions/mentions.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTicketMentionsMentionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0L21lbnRpb25zL21lbnRpb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/ticket/mentions/mentions.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/ticket/mentions/mentions.component.ts ***!
    \******************************************************************/

  /*! exports provided: MentionsComponent */

  /***/
  function srcAppComponentsTicketMentionsMentionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MentionsComponent", function () {
      return MentionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MentionsComponent = /*#__PURE__*/function () {
      function MentionsComponent() {
        _classCallCheck(this, MentionsComponent);
      }

      _createClass(MentionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MentionsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MentionsComponent.prototype, "searchString", void 0);
    MentionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mentions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mentions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/mentions/mentions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mentions.component.scss */
      "./src/app/components/ticket/mentions/mentions.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MentionsComponent);
    /***/
  },

  /***/
  "./src/app/components/ticket/notifications/notifications.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/components/ticket/notifications/notifications.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTicketNotificationsNotificationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0L25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/ticket/notifications/notifications.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/ticket/notifications/notifications.component.ts ***!
    \****************************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppComponentsTicketNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotificationsComponent = /*#__PURE__*/function () {
      function NotificationsComponent(ticketService, toastController) {
        _classCallCheck(this, NotificationsComponent);

        this.ticketService = ticketService;
        this.toastController = toastController;
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.ticketService.getNotifications().subscribe(function (data) {
            _this15.notifications = data.filter(function (d) {
              return d.seen !== true;
            }).sort(function (a, b) {
              return a.createdAt < b.createdAt ? 1 : -1;
            });
          });
        }
      }, {
        key: "deleteNotification",
        value: function deleteNotification(notification) {
          var _this16 = this;

          this.ticketService.readNotification(notification.id).subscribe(function (data) {
            console.log(data);

            var toast = _this16.toastController.create({
              color: 'warning',
              message: "Notification is no longer visible",
              duration: 2000
            }).then(function (el) {
              el.present();

              _this16.ngOnInit();
            });
          });
        }
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
      }];
    };

    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/notifications/notifications.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.component.scss */
      "./src/app/components/ticket/notifications/notifications.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])], NotificationsComponent);
    /***/
  },

  /***/
  "./src/app/components/ticket/ticket-detail/ticket-detail.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/components/ticket/ticket-detail/ticket-detail.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTicketTicketDetailTicketDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-range {\n  --bar-height: 1rem;\n  --knob-size: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb3VkZWwvRGVza3RvcC9tZXRhZGF0YS1pb24vc3JjL2FwcC9jb21wb25lbnRzL3RpY2tldC90aWNrZXQtZGV0YWlsL3RpY2tldC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0L3RpY2tldC1kZXRhaWwvdGlja2V0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0L3RpY2tldC1kZXRhaWwvdGlja2V0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yYW5nZSB7XG4gICAgLS1iYXItaGVpZ2h0OiAxcmVtO1xuICAgIC0ta25vYi1zaXplOiAzcmVtO1xufSIsImlvbi1yYW5nZSB7XG4gIC0tYmFyLWhlaWdodDogMXJlbTtcbiAgLS1rbm9iLXNpemU6IDNyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/ticket/ticket-detail/ticket-detail.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/ticket/ticket-detail/ticket-detail.component.ts ***!
    \****************************************************************************/

  /*! exports provided: TicketDetailComponent */

  /***/
  function srcAppComponentsTicketTicketDetailTicketDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketDetailComponent", function () {
      return TicketDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_commons_ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/commons/ticket */
    "./src/app/commons/ticket.ts");

    var TicketDetailComponent = /*#__PURE__*/function () {
      function TicketDetailComponent(route, ticketService, authService, toastController, popoverController) {
        _classCallCheck(this, TicketDetailComponent);

        this.route = route;
        this.ticketService = ticketService;
        this.authService = authService;
        this.toastController = toastController;
        this.popoverController = popoverController;
        this.ticket = new src_app_commons_ticket__WEBPACK_IMPORTED_MODULE_6__["Ticket"]();
        this.notes = [];
        this.developers = [];
        this.inviteDevelopers = [];
        this.allDevelopers = [];
        this.rangeColor = 'danger';
        this.rangeLabel = 'Not Started';
      }

      _createClass(TicketDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.ticketService.getDevelopers().subscribe(devs => {
          //   this.allDevelopers = devs;
          //   this.inviteDevelopers = this.allDevelopers.filter(dev => !this.isDeveloperPresent(dev));
          // });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this17 = this;

          this.route.paramMap.subscribe(function (data) {
            if (_this17.route.snapshot.paramMap.has('id')) {
              _this17.ticketId = +_this17.route.snapshot.paramMap.get('id');

              _this17.authService.getUser().subscribe(function (user) {
                _this17.loggedInUser = user;
              });

              _this17.ticketService.getTicket(_this17.ticketId).subscribe(function (ticket) {
                _this17.ticket = ticket;

                if (ticket) {
                  _this17.ticketService.getDevelopers().subscribe(function (devs) {
                    _this17.allDevelopers = devs.filter(function (dev) {
                      return dev.name !== _this17.loggedInUser.username;
                    });
                    _this17.inviteDevelopers = _this17.allDevelopers.filter(function (dev) {
                      return !_this17.isDeveloperPresent(dev);
                    });
                    _this17.rangeLabel = _this17.ticket.status;
                    _this17.notes = ticket.notes.sort(function (a, b) {
                      return a.createdAt < b.createdAt ? 1 : -1;
                    });
                    _this17.developers = ticket.developers.filter(function (dev) {
                      return dev.name !== _this17.loggedInUser.username;
                    });
                    _this17.inviteDevelopers = _this17.allDevelopers.filter(function (dev) {
                      return !_this17.isDeveloperPresent(dev);
                    });
                    _this17.rangeLabel = _this17.ticket.status;
                    _this17.rangeColor = _this17.mapStatus(_this17.rangeLabel)[0];
                    _this17.rangeValue = +_this17.mapStatus(_this17.rangeLabel)[1];
                  });
                }
              });
            }
          });
        }
      }, {
        key: "noteSubmit",
        value: function noteSubmit(form, ticket) {
          var _this18 = this;

          console.log(form.form.value.note);
          var noteText = form.form.value.note;
          this.ticketService.assignNoteToTicket(noteText, new Date(), ticket.id).subscribe(function (data) {
            _this18.notes.push(data);

            _this18.ionViewWillEnter();
          });
          form.reset();
        }
      }, {
        key: "isDeveloperPresent",
        value: function isDeveloperPresent(developer) {
          // tslint:disable-next-line: prefer-for-of
          for (var i = 0; i < this.developers.length; i++) {
            if (this.developers[i].id === developer.id) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "addDeveloperToTicket",
        value: function addDeveloperToTicket(developer) {
          var _this19 = this;

          if (!this.isDeveloperPresent(developer)) {
            this.ticketService.assignDeveloperToTicket(this.ticket.id, developer.id).subscribe(function (data) {
              var toast = _this19.toastController.create({
                color: 'success',
                message: "".concat(developer.name, " is added to the ticket"),
                duration: 2000
              }).then(function (el) {
                el.present();

                _this19.ionViewWillEnter();
              });
            });
          }
        }
      }, {
        key: "removeDeveloperFromTicket",
        value: function removeDeveloperFromTicket(developer) {
          var _this20 = this;

          this.ticketService.removeDeveloperFromTicket(developer.id, this.ticket.id).subscribe(function (data) {
            var toast = _this20.toastController.create({
              color: 'warning',
              message: "".concat(developer.name, " is deleted from the ticket"),
              duration: 2000
            }).then(function (el) {
              el.present();

              _this20.ionViewWillEnter();
            });
          });
        }
      }, {
        key: "getAvatarFromNoteAuthor",
        value: function getAvatarFromNoteAuthor(note) {
          // tslint:disable-next-line: prefer-for-of
          for (var i = 0; i < this.allDevelopers.length; i++) {
            if (this.allDevelopers[i].name === note.createdBy) {
              return this.allDevelopers[i].avatar;
            }
          }

          return '2';
        }
      }, {
        key: "mapStatus",
        value: function mapStatus(status) {
          switch (status) {
            case 'Not Started':
              this.rangeValue = 0;
              this.rangeColor = 'danger';
              return ['danger', '0'];

            case 'Initiated':
              this.rangeValue = 10;
              this.rangeColor = 'secondary';
              return ['secondary', '10'];

            case 'Almost Done':
              this.rangeValue = 20;
              this.rangeColor = 'tertiary';
              return ['tertiary', '20'];

            case 'Ticket resolved':
              this.rangeValue = 30;
              this.rangeColor = 'success';
              return ['success', '30'];
          }
        }
      }, {
        key: "statusChange",
        value: function statusChange(event) {
          var _this21 = this;

          if (this.rangeValue === 0) {
            this.rangeColor = 'danger';
            this.rangeLabel = 'Not Started';
          } else if (this.rangeValue > 0 && this.rangeValue <= 10) {
            this.rangeColor = 'secondary';
            this.rangeLabel = 'Initiated';
          } else if (this.rangeValue > 10 && this.rangeValue <= 20) {
            this.rangeColor = 'tertiary';
            this.rangeLabel = 'Almost Done';
          } else if (this.rangeValue > 20 && this.rangeValue <= 30) {
            this.rangeColor = 'success';
            this.rangeLabel = 'Ticket resolved';
          }

          this.ticketService.setStatus(this.ticketId, this.rangeLabel).subscribe(function (data) {
            _this21.rangeLabel = data.status;
          });
        }
      }, {
        key: "dismissMentions",
        value: function dismissMentions() {
          console.log('space seen');
          this.popoverController.dismiss();
        }
      }]);

      return TicketDetailComponent;
    }();

    TicketDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"]
      }, {
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]
      }];
    };

    TicketDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-ticket-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ticket-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/ticket-detail/ticket-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ticket-detail.component.scss */
      "./src/app/components/ticket/ticket-detail/ticket-detail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]])], TicketDetailComponent);
    /***/
  },

  /***/
  "./src/app/components/ticket/ticket-list/ticket-list.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/components/ticket/ticket-list/ticket-list.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTicketTicketListTicketListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  float: right;\n  border-radius: 50%;\n  border: 1px solid green;\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb3VkZWwvRGVza3RvcC9tZXRhZGF0YS1pb24vc3JjL2FwcC9jb21wb25lbnRzL3RpY2tldC90aWNrZXQtbGlzdC90aWNrZXQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQvdGlja2V0LWxpc3QvdGlja2V0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpY2tldC90aWNrZXQtbGlzdC90aWNrZXQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59IiwiZGl2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/ticket/ticket-list/ticket-list.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/ticket/ticket-list/ticket-list.component.ts ***!
    \************************************************************************/

  /*! exports provided: TicketListComponent */

  /***/
  function srcAppComponentsTicketTicketListTicketListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketListComponent", function () {
      return TicketListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _add_developers_add_developers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../add-developers/add-developers.component */
    "./src/app/components/ticket/add-developers/add-developers.component.ts");
    /* harmony import */


    var _create_ticket_create_ticket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../create-ticket/create-ticket.component */
    "./src/app/components/ticket/create-ticket/create-ticket.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../filter/filter.component */
    "./src/app/components/ticket/filter/filter.component.ts");

    var TicketListComponent = /*#__PURE__*/function () {
      function TicketListComponent(ticketService, modalController, toastController, alertController, popoverController, authService) {
        _classCallCheck(this, TicketListComponent);

        this.ticketService = ticketService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.authService = authService;
      }

      _createClass(TicketListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.ticketService.getTickets().subscribe(function (data) {
            _this22.tickets = data;
            _this22.filteredTickets = _this22.tickets;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this23 = this;

          this.ticketService.filterByAuthor.subscribe(function (data) {
            console.log(data);

            if (data) {
              _this23.filteredTickets = _this23.tickets.filter(function (ticket) {
                return ticket.createdBy === _this23.authService.getUsername();
              });
            } else {
              _this23.ngOnInit();
            }
          });
          this.ticketService.searchText.subscribe(function (searchText) {
            _this23.searchText = searchText;
            _this23.filteredTickets = _this23.tickets.filter(function (ticket) {
              return ticket.title.toLowerCase().includes(searchText.toLowerCase());
            });
          });
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this24 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _create_ticket_create_ticket_component__WEBPACK_IMPORTED_MODULE_3__["CreateTicketComponent"]
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (el) {
                      return _this24.ngOnInit();
                    });
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "deleteTicket",
        value: function deleteTicket(ticketId) {
          var _this25 = this;

          this.alertController.create({
            header: 'Delete the ticket',
            subHeader: 'Are you sure?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel'
            }, {
              text: 'Delete',
              handler: function handler() {
                _this25.ticketService.deleteTicket(ticketId).subscribe(function (data) {
                  var toast = _this25.toastController.create({
                    color: 'warning',
                    message: 'Ticket has been deleted',
                    duration: 2000
                  }).then(function (el) {
                    el.present();

                    _this25.ngOnInit();
                  });
                });
              }
            }]
          }).then(function (el) {
            return el.present();
          });
        }
      }, {
        key: "showAddDevelopers",
        value: function showAddDevelopers(ev, ticket) {
          this.popoverController.create({
            component: _add_developers_add_developers_component__WEBPACK_IMPORTED_MODULE_2__["AddDevelopersComponent"],
            componentProps: {
              ticket: ticket
            },
            event: ev,
            cssClass: ['custom-popover'],
            translucent: true
          }).then(function (popoverEl) {
            popoverEl.present();
          });
        }
      }, {
        key: "seeStatus",
        value: function seeStatus(check) {
          console.log(!check.checked);
          this.filterByAuthor = !check.checked;
          this.ticketService.filterByAuthor.emit(!check.checked);
        }
      }, {
        key: "mapStatus",
        value: function mapStatus(status) {
          switch (status) {
            case 'Not Started':
              return 'danger';

            case 'Initiated':
              return 'secondary';

            case 'Almost Done':
              return 'tertiary';

            case 'Ticket resolved':
              return 'success';
          }
        }
      }, {
        key: "getShortDesc",
        value: function getShortDesc(desc) {
          if (desc.length >= 50) {
            return desc.substring(0, 50) + '...';
          }

          return desc;
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var popover;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.popoverController.create({
                      component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"],
                      event: ev,
                      translucent: true
                    });

                  case 2:
                    popover = _context4.sent;
                    _context4.next = 5;
                    return popover.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return TicketListComponent;
    }();

    TicketListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
      }, {
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    TicketListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-ticket-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ticket-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket/ticket-list/ticket-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ticket-list.component.scss */
      "./src/app/components/ticket/ticket-list/ticket-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])], TicketListComponent);
    /***/
  },

  /***/
  "./src/app/services/auth/auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/auth/auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      } // tslint:disable-next-line: max-line-length


      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var authenticated = this.authService.userIsLoggedIn();

          if (authenticated) {
            return true;
          }

          return this.router.createUrlTree(['/login']);
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/auth/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/auth/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.loggedInUserEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }

      _createClass(AuthService, [{
        key: "userIsLoggedIn",
        value: function userIsLoggedIn() {
          return localStorage.getItem('user') != null && localStorage.getItem('user').length > 0;
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return localStorage.getItem('user');
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.http.get('https://warm-falls-42436.herokuapp.com/get-user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "executeAuthService",
        value: function executeAuthService(username, password) {
          return this.http.post('https://warm-falls-42436.herokuapp.com/authenticate', {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            localStorage.setItem('jwt', response.jwt);
            localStorage.setItem('user', response.loggedInUser);
          }));
        }
      }, {
        key: "registerUser",
        value: function registerUser(username, email, password) {
          return this.http.post('https://warm-falls-42436.herokuapp.com/signup', {
            username: username,
            email: email,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "checkUsername",
        value: function checkUsername(username) {
          console.log(username);
          return this.http.post('https://warm-falls-42436.herokuapp.com/check-username', {
            username: username
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/auth/http-interceptor.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/auth/http-interceptor.service.ts ***!
    \***********************************************************/

  /*! exports provided: HttpInterceptorService */

  /***/
  function srcAppServicesAuthHttpInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function () {
      return HttpInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HttpInterceptorService = /*#__PURE__*/function () {
      function HttpInterceptorService(authService) {
        _classCallCheck(this, HttpInterceptorService);

        this.authService = authService;
      }

      _createClass(HttpInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = localStorage.getItem('jwt');

          if (token) {
            req = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
          }

          return next.handle(req);
        }
      }]);

      return HttpInterceptorService;
    }();

    HttpInterceptorService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])], HttpInterceptorService);
    /***/
  },

  /***/
  "./src/app/services/metadata.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/metadata.service.ts ***!
    \**********************************************/

  /*! exports provided: MetadataService */

  /***/
  function srcAppServicesMetadataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetadataService", function () {
      return MetadataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var MetadataService = /*#__PURE__*/function () {
      function MetadataService(http) {
        _classCallCheck(this, MetadataService);

        this.http = http;
        this.selectedMetadata = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.baseUrl = 'http://localhost:8080/metadatas';
      }

      _createClass(MetadataService, [{
        key: "getMetadatas",
        value: function getMetadatas() {
          return this.http.get(this.baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response._embedded.metadatas;
          }));
        }
      }, {
        key: "getMetadata",
        value: function getMetadata(id) {
          var finalUrl = "".concat(this.baseUrl, "/").concat(id);
          return this.http.get(finalUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }));
        }
      }]);

      return MetadataService;
    }();

    MetadataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    MetadataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], MetadataService);
    ;
    /***/
  },

  /***/
  "./src/app/services/ticket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/ticket.service.ts ***!
    \********************************************/

  /*! exports provided: TicketService */

  /***/
  function srcAppServicesTicketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketService", function () {
      return TicketService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TicketService = /*#__PURE__*/function () {
      function TicketService(http, authService) {
        _classCallCheck(this, TicketService);

        this.http = http;
        this.authService = authService;
        this.searchText = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.filterByAuthor = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }

      _createClass(TicketService, [{
        key: "createBasicAuthHeader",
        value: function createBasicAuthHeader() {
          var username = 'user';
          var password = 'user';
          var basicHeaderString = 'Basic ' + window.btoa(username + ':' + password);
          return basicHeaderString;
        }
      }, {
        key: "getTickets",
        value: function getTickets() {
          return this.http.get('https://warm-falls-42436.herokuapp.com/get-tickets').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
          }));
        } // getProjects() {
        //   return this.http.get<Project[]>('http://localhost:8080/projects').pipe(
        //     map(response => response)
        //   );
        // }

      }, {
        key: "getTicket",
        value: function getTicket(id) {
          return this.http.get("https://warm-falls-42436.herokuapp.com/get-ticket/".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "setStatus",
        value: function setStatus(ticketId, status) {
          return this.http.post("https://warm-falls-42436.herokuapp.com/set-status", {
            ticketId: ticketId,
            status: status
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "createTicket",
        value: function createTicket(title, description, projectId) {
          // tslint:disable-next-line: max-line-length
          console.log(new Date());
          return this.http.post('https://warm-falls-42436.herokuapp.com/create-ticket', {
            title: title,
            description: description,
            createdBy: this.authService.userIsLoggedIn() ? localStorage.getItem('user') : 'admin',
            createdOn: new Date(),
            projectId: projectId
          });
        }
      }, {
        key: "createProject",
        value: function createProject(name, nickname) {
          // tslint:disable-next-line: max-line-length
          return this.http.post('https://warm-falls-42436.herokuapp.com/projects', {
            name: name,
            nickname: nickname,
            owner: this.authService.userIsLoggedIn() ? localStorage.getItem('user') : 'admin'
          });
        }
      }, {
        key: "getProjects",
        value: function getProjects() {
          return this.http.get('https://warm-falls-42436.herokuapp.com/projects').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response._embedded.projects;
          }));
        }
      }, {
        key: "getProject",
        value: function getProject(ticketId) {
          return this.http.get("https://warm-falls-42436.herokuapp.com/tickets/".concat(ticketId, "/project")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "deleteTicket",
        value: function deleteTicket(ticketId) {
          return this.http["delete"]("https://warm-falls-42436.herokuapp.com/tickets/".concat(ticketId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "getDevelopers",
        value: function getDevelopers() {
          return this.http.get('https://warm-falls-42436.herokuapp.com/developers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response._embedded.developers;
          }));
        }
      }, {
        key: "getNotifications",
        value: function getNotifications() {
          return this.http.get('https://warm-falls-42436.herokuapp.com/get-notifications').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "readNotification",
        value: function readNotification(notifyId) {
          return this.http.post('https://warm-falls-42436.herokuapp.com/read-notification', {
            id: notifyId
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "assignDeveloperToTicket",
        value: function assignDeveloperToTicket(ticketId, developerId) {
          return this.http.post('https://warm-falls-42436.herokuapp.com/add-developer', {
            ticketId: ticketId,
            developerId: developerId
          });
        }
      }, {
        key: "removeDeveloperFromTicket",
        value: function removeDeveloperFromTicket(devId, ticketId) {
          return this.http.post('https://warm-falls-42436.herokuapp.com/remove-developer', {
            devId: devId,
            ticketId: ticketId
          });
        }
      }, {
        key: "assignNoteToTicket",
        value: function assignNoteToTicket(noteText, createdAt, ticketId) {
          var createdBy = this.authService.getUsername(); // tslint:disable-next-line: max-line-length

          return this.http.post('https://warm-falls-42436.herokuapp.com/add-note', {
            text: noteText,
            createdAt: createdAt,
            ticketId: ticketId,
            createdBy: createdBy
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.notes;
          }));
        }
      }]);

      return TicketService;
    }();

    TicketService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    TicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])], TicketService);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
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
    /*! /Users/poudel/Desktop/metadata-ion/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map