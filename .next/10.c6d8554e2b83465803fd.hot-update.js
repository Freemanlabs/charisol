webpackHotUpdate(10,{

/***/ "./assets/img/icon_facebook.svg":
false,

/***/ "./assets/img/icon_instagram.svg":
false,

/***/ "./assets/img/icon_medium.svg":
false,

/***/ "./assets/img/icon_twitter.svg":
false,

/***/ "./components/Footer.js":
false,

/***/ "./components/Header.js":
false,

/***/ "./components/Layout.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:\\Users\\user\\challaris-tech-website\\components\\Layout.js: Only one default export allowed per module. (34:0)\n\n  32 | )\n  33 | \n> 34 | export default Layout\n     | ^\n    at _class.raise (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:778:15)\n    at _class.raiseDuplicateExportError (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:5112:16)\n    at _class.checkDuplicateExports (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:5105:12)\n    at _class.checkExport (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:5047:14)\n    at _class.parseExport (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:4932:12)\n    at _class.parseStatementContent (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:4013:27)\n    at _class.parseStatement (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:4470:23)\n    at _class.parseBlockBody (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:4457:10)\n    at _class.parseTopLevel (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:3902:10)\n    at _class.parse (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:5250:17)\n    at parse (C:\\Users\\user\\challaris-tech-website\\node_modules\\babylon\\lib\\index.js:9972:38)\n    at parser (C:\\Users\\user\\challaris-tech-website\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:106:33)\n    at normalizeFile (C:\\Users\\user\\challaris-tech-website\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:53:11)\n    at runSync (C:\\Users\\user\\challaris-tech-website\\node_modules\\@babel\\core\\lib\\transformation\\index.js:34:41)\n    at runAsync (C:\\Users\\user\\challaris-tech-website\\node_modules\\@babel\\core\\lib\\transformation\\index.js:25:14)\n    at C:\\Users\\user\\challaris-tech-website\\node_modules\\@babel\\core\\lib\\transform.js:32:34\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ }),

/***/ "./components/Sidebar.js":
false,

/***/ "./node_modules/next/head.js":
false,

/***/ "./node_modules/react-ga/dist/react-ga.js":
false,

/***/ "./pages/start.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_about_scss__ = __webpack_require__("./styles/about.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_about_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_about_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
var _jsxFileName = "C:\\Users\\user\\challaris-tech-website\\pages\\start.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var initialState = {
  submitting: false,
  submitted: false,
  startForm: {
    name: "",
    email: "",
    tel: "",
    startDate: "",
    billing: "",
    budget: "",
    description: "",
    personalNeeded: ""
  }
};

var Start =
/*#__PURE__*/
function (_Component) {
  _inherits(Start, _Component);

  function Start(props) {
    var _this;

    _classCallCheck(this, Start);

    _this = _possibleConstructorReturn(this, (Start.__proto__ || Object.getPrototypeOf(Start)).call(this, props));
    _this.state = _objectSpread({}, initialState);
    _this.handleChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.submitForm = _this.submitForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Start, [{
    key: "submitForm",
    value: function submitForm(event) {
      var _this2 = this;

      event.preventDefault();
      var startForm = this.state.startForm;
      this.setState({
        submitting: true
      });
      __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()('/api/projects', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(startForm)
      }).then(function (response) {
        response.json().then(function (res) {
          if (res.status === 201 && res.success === true) {
            _this2.setState({
              submitted: true
            });

            _this2.setState(initialState);

            alert('Project request has sent!');
          } else {
            _this2.setState({
              submitting: false
            });

            alert('Internal server error');
          }
        });
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(newPartialInput) {
      this.setState(function (state) {
        return _objectSpread({}, state, {
          startForm: _objectSpread({}, state.startForm, newPartialInput)
        });
      });
      console.log(this.state.startForm);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var startForm = this.state.startForm;
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Layout__["default"], {
        title: "Start a Project | Charisol Technologies",
        ontent: "At Charisol, we approach every project with deep commitment and passion, applying meticulous detail + craftsmanship at every stage of product development",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_2__styles_about_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        id: "panel",
        "data-slideout-ignore": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("section", {
        className: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Navbar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "text-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "heading-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h1", {
        className: "heading no-reveal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Start a Project")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("form", {
        id: "start-form",
        onSubmit: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Name"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", {
        className: "u-full-width",
        value: startForm.name,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            name: e.target.value
          });
        },
        type: "text",
        id: "name",
        name: "name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Tip: Could be your fullname or company name.")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Email"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", {
        className: "u-full-width",
        value: startForm.email,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            email: e.target.value
          });
        },
        type: "email",
        id: "email",
        name: "email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Tip: Could be your personal email address or company email address."))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "tel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "Tel"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", {
        className: "u-full-width",
        value: startForm.tel,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            tel: e.target.value
          });
        },
        type: "number",
        id: "tel",
        name: "tel",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Tip: Could be your personal telephone number or company  telephone number.")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, "Start Date"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", {
        className: "u-full-width date",
        value: startForm.startDate,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            startDate: e.target.value
          });
        },
        type: "date",
        id: "date",
        name: "start_date",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "Tip: This is the proposed start date of the project."))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "billing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "Billing"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("select", {
        className: "u-full-width",
        id: "billing",
        value: startForm.billing,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            billing: e.target.value
          });
        },
        name: "billing",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("option", {
        value: "hourly",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "Hourly - $35"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("option", {
        value: "weekly",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "Weekly - $1,300"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("option", {
        value: "monthly",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, "Monthly - $4,800"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("option", {
        value: "onDemand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "On demand - Varies")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "Tip: Your billing preference")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "budget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Budget"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", {
        className: "u-full-width",
        type: "number",
        value: startForm.budget,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            budget: e.target.value
          });
        },
        id: "budget",
        name: "budget",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "Tip: This amount is in USD ($)."))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "project_description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, "Project Description (If your website had a job, what would it be?)"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("textarea", {
        className: "u-full-width",
        value: startForm.description,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            description: e.target.value
          });
        },
        id: "message",
        rows: "8",
        name: "project_description",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, "Tip: This helps you identify what type of website you are creating. Is it for lead gen? Is it informational? Is it a straight sales vehicle (SaaS, product sales, etc)? What *exactly* is the website supposed to do?"))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "personal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "Personnel Needed"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("textarea", {
        className: "u-full-width",
        value: startForm.personalNeeded.budget,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            personalNeeded: e.target.value
          });
        },
        id: "personal",
        rows: "8",
        name: "personal",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "Tip: This could be a mix of frontend / backend engineers, UI/UX designers, project managers, etc."))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", {
        className: "m-t-lg btn-curve-purple full",
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "Submit")))))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Start;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

var _default = Start;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "C:\\Users\\user\\challaris-tech-website\\pages\\start.js");
  reactHotLoader.register(Start, "Start", "C:\\Users\\user\\challaris-tech-website\\pages\\start.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\user\\challaris-tech-website\\pages\\start.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/start")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/index.scss":
false,

/***/ "./utils/analytics.js":
false

})
//# sourceMappingURL=10.c6d8554e2b83465803fd.hot-update.js.map