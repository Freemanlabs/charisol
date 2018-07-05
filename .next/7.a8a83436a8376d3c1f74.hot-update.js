webpackHotUpdate(7,{

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_analytics__ = __webpack_require__("./utils/analytics.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Sidebar__ = __webpack_require__("./components/Sidebar.js");
var _jsxFileName = "C:\\Users\\user\\challaris-tech-website\\components\\Layout.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Sidebar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
    title: props.title,
    content: props.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      backgroundColor: '#E0E0E0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, props.children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Layout, "Layout", "C:\\Users\\user\\challaris-tech-website\\components\\Layout.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\user\\challaris-tech-website\\components\\Layout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/analytics.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export initGA */
/* unused harmony export logPageView */
/* unused harmony export logEvent */
/* unused harmony export logException */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ga__ = __webpack_require__("./node_modules/react-ga/dist/react-ga.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_ga__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var initGA = function initGA() {
  console.log('GA init');
  __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a.initialize('UA-115010352-1');
};
var logPageView = function logPageView() {
  console.log('Logging pageview for ${window.location.pathname}');
  __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a.set({
    page: window.location.pathname
  });
  __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a.pageview(window.location.pathname);
};
var logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a.event({
      category: category,
      action: action
    });
  }
};
var logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a.exception({
      description: description,
      fatal: fatal
    });
  }
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initGA, "initGA", "C:\\Users\\user\\challaris-tech-website\\utils\\analytics.js");
  reactHotLoader.register(logPageView, "logPageView", "C:\\Users\\user\\challaris-tech-website\\utils\\analytics.js");
  reactHotLoader.register(logEvent, "logEvent", "C:\\Users\\user\\challaris-tech-website\\utils\\analytics.js");
  reactHotLoader.register(logException, "logException", "C:\\Users\\user\\challaris-tech-website\\utils\\analytics.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.a8a83436a8376d3c1f74.hot-update.js.map