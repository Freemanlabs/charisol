webpackHotUpdate(5,{

/***/ "./components/admin/Dashboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_Header__ = __webpack_require__("./components/admin/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_Sidebar__ = __webpack_require__("./components/admin/Sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__ = __webpack_require__("./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper__ = __webpack_require__("./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper__);
var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Dashboard.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: '#E0E0E0'
    },
    paper: {
      height: 140,
      width: 100
    }
  };
};

var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    console.log(props);
    _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        spacing: '16'
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(key) {
        return function (event, value) {
          _this.setState(_defineProperty({}, key, value));
        };
      }
    });
    return _this;
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var spacing = this.state.spacing;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        container: true,
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__admin_Sidebar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__admin_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), this.props.children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Dashboard;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Dashboard.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__["withStyles"])(styles)(Dashboard);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Dashboard.js");
  reactHotLoader.register(Dashboard, "Dashboard", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Dashboard.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Dashboard.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.104fd7e362cee2ac0b9e.hot-update.js.map