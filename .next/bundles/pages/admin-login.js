module.exports =

        __NEXT_REGISTER_PAGE('/admin-login', function() {
          var comp = 
      webpackJsonp([5],{

/***/ "./components/admin/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__ = __webpack_require__("./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__ = __webpack_require__("./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_IconButton__ = __webpack_require__("./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu__ = __webpack_require__("./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_AccountCircle__ = __webpack_require__("./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_AccountCircle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_AccountCircle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Switch__ = __webpack_require__("./node_modules/@material-ui/core/Switch/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_FormControlLabel__ = __webpack_require__("./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_FormControlLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_FormControlLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_FormGroup__ = __webpack_require__("./node_modules/@material-ui/core/FormGroup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_FormGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_FormGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_MenuItem__ = __webpack_require__("./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Menu__ = __webpack_require__("./node_modules/@material-ui/core/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_next_head__);
var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Header.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
















var styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        auth: true,
        anchorEl: null
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, checked) {
        _this.setState({
          auth: checked
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          anchorEl: event.currentTarget
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          anchorEl: null
        });
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          auth = _state.auth,
          anchorEl = _state.anchorEl;
      var open = Boolean(anchorEl);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charset: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: "#000000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default.a, {
        position: "static",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_IconButton___default.a, {
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "Menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default.a, {
        variant: "title",
        color: "inherit",
        className: classes.flex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Title"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_IconButton___default.a, {
        "aria-owns": open ? 'menu-appbar' : null,
        "aria-haspopup": "true",
        onClick: this.handleMenu,
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_AccountCircle___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Menu___default.a, {
        id: "menu-appbar",
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        open: open,
        onClose: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_MenuItem___default.a, {
        onClick: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Profile"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_MenuItem___default.a, {
        onClick: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "My account"))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Header.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Header);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Header.js");
  reactHotLoader.register(Header, "Header", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Header.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Header.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/admin/Layout.js":
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
var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Layout.js";

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

var AdminLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminLayout, _React$Component);

  function AdminLayout(props) {
    var _this;

    _classCallCheck(this, AdminLayout);

    _this = _possibleConstructorReturn(this, (AdminLayout.__proto__ || Object.getPrototypeOf(AdminLayout)).call(this, props));
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

  _createClass(AdminLayout, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var spacing = this.state.spacing;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        container: true,
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__admin_Sidebar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__admin_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), this.props.children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return AdminLayout;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

AdminLayout.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__["withStyles"])(styles)(AdminLayout);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Layout.js");
  reactHotLoader.register(AdminLayout, "AdminLayout", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Layout.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Layout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/admin/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Drawer__ = __webpack_require__("./node_modules/@material-ui/core/Drawer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_List__ = __webpack_require__("./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Divider__ = __webpack_require__("./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItem__ = __webpack_require__("./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItemIcon__ = __webpack_require__("./node_modules/@material-ui/core/ListItemIcon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItemIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItemIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText__ = __webpack_require__("./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Drafts__ = __webpack_require__("./node_modules/@material-ui/icons/Drafts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Drafts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Drafts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Icon__ = __webpack_require__("./node_modules/@material-ui/core/Icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Collapse__ = __webpack_require__("./node_modules/@material-ui/core/Collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Collapse__);
var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Sidebar.js";

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















var drawerWidth = '100%';

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth
    }
  };
};

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleToggle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          open: !_this.state.open
        });
      }
    });
    _this.state = {
      open: true
    };
    return _this;
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var _React$createElement;

      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Drawer___default.a, {
        variant: "permanent",
        classes: {
          paper: classes.drawerPaper
        },
        anchor: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_List___default.a, {
        component: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItem___default.a, (_React$createElement = {
        button: true
      }, _defineProperty(_React$createElement, "button", true), _defineProperty(_React$createElement, "onClick", this.handleToggle), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 43
      }), _React$createElement), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Icon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "account_box")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText___default.a, {
        primary: "Manage Users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Collapse___default.a, {
        "in": this.state.open,
        timeout: "auto",
        unmountOnExit: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_List___default.a, {
        component: "div",
        disablePadding: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItem___default.a, {
        button: true,
        className: classes.nested,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText___default.a, {
        inset: true,
        primary: "All Users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItem___default.a, {
        button: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Icon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "message")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItemText___default.a, {
        primary: "Manage Messages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Sidebar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Sidebar.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_styles__["withStyles"])(styles)(Sidebar);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(drawerWidth, "drawerWidth", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Sidebar.js");
  reactHotLoader.register(styles, "styles", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Sidebar.js");
  reactHotLoader.register(Sidebar, "Sidebar", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Sidebar.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/components/admin/Sidebar.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/map.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/number/is-nan.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/number/is-nan.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/number/min-safe-integer.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/number/min-safe-integer.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("./node_modules/@babel/runtime/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertySymbols = __webpack_require__("./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");

var _Object$keys = __webpack_require__("./node_modules/@babel/runtime/core-js/object/keys.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _Object$keys(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (_Object$getOwnPropertySymbols) {
    var sourceSymbolKeys = _Object$getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@material-ui/core/AppBar/AppBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Paper/index.js"));

// @inheritedComponent Paper
var styles = function styles(theme) {
  var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionSticky: {
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionStatic: {
      position: 'static'
    },
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  };
};

exports.styles = styles;

function AppBar(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      position = props.position,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "position"]);
  var className = (0, _classnames.default)(classes.root, classes["position".concat((0, _helpers.capitalize)(position))], (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'inherit'), (0, _defineProperty2.default)(_classNames, 'mui-fixed', position === 'fixed'), _classNames), classNameProp);
  return _react.default.createElement(_Paper.default, (0, _extends2.default)({
    square: true,
    component: "header",
    elevation: 4,
    className: className
  }, other), children);
}

AppBar.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'default']),

  /**
   * The positioning type. The behavior of the different options is described
   * [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position: _propTypes.default.oneOf(['fixed', 'absolute', 'sticky', 'static'])
} : {};
AppBar.defaultProps = {
  color: 'primary',
  position: 'fixed'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiAppBar'
})(AppBar);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/AppBar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _AppBar.default;
  }
});

var _AppBar = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/AppBar/AppBar.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Backdrop/Backdrop.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Fade = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Fade/index.js"));

var styles = {
  root: {
    zIndex: -1,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  invisible: {
    backgroundColor: 'transparent'
  }
};
exports.styles = styles;

function Backdrop(props) {
  var classes = props.classes,
      className = props.className,
      invisible = props.invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "invisible", "open", "transitionDuration"]);
  return _react.default.createElement(_Fade.default, (0, _extends2.default)({
    appear: true,
    "in": open,
    timeout: transitionDuration
  }, other), _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.invisible, invisible), className),
    "aria-hidden": "true"
  }));
}

Backdrop.propTypes =  true ? {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: _propTypes.default.bool,

  /**
   * If `true`, the backdrop is open.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : {};
Backdrop.defaultProps = {
  invisible: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiBackdrop'
})(Backdrop);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Backdrop/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Backdrop.default;
  }
});

var _Backdrop = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Backdrop/Backdrop.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Button/Button.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__("./node_modules/@material-ui/core/styles/colorManipulator.js");

var _ButtonBase = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/index.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
  return {
    root: (0, _objectSpread2.default)({}, theme.typography.button, {
      lineHeight: '1.4em',
      // Improve readability for multiline button.
      boxSizing: 'border-box',
      minWidth: theme.spacing.unit * 11,
      minHeight: 36,
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 2, "px"),
      borderRadius: 2,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),
    label: {
      width: '100%',
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    flatPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    flatSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    outlined: {
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      borderRadius: 4
    },
    colorInherit: {
      color: 'inherit'
    },
    raised: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      },
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      }
    },
    raisedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    raisedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    focusVisible: {},
    disabled: {},
    fab: {
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      fontSize: 24,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      }
    },
    mini: {
      width: 40,
      height: 40
    },
    sizeSmall: {
      padding: "".concat(theme.spacing.unit - 1, "px ").concat(theme.spacing.unit, "px"),
      minWidth: theme.spacing.unit * 8,
      minHeight: 32,
      fontSize: theme.typography.pxToRem(13)
    },
    sizeLarge: {
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 3, "px"),
      minWidth: theme.spacing.unit * 14,
      minHeight: 40,
      fontSize: theme.typography.pxToRem(15)
    },
    fullWidth: {
      width: '100%'
    }
  };
};

exports.styles = styles;

function Button(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      disabled = props.disabled,
      disableFocusRipple = props.disableFocusRipple,
      fullWidth = props.fullWidth,
      focusVisibleClassName = props.focusVisibleClassName,
      mini = props.mini,
      size = props.size,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "focusVisibleClassName", "mini", "size", "variant"]);
  var fab = variant === 'fab';
  var raised = variant === 'raised';
  var flat = !raised && !fab;
  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.raised, raised || fab), (0, _defineProperty2.default)(_classNames, classes.fab, fab), (0, _defineProperty2.default)(_classNames, classes.mini, fab && mini), (0, _defineProperty2.default)(_classNames, classes.colorInherit, color === 'inherit'), (0, _defineProperty2.default)(_classNames, classes.flatPrimary, flat && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.flatSecondary, flat && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.raisedPrimary, !flat && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.raisedSecondary, !flat && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.outlined, variant === 'outlined'), (0, _defineProperty2.default)(_classNames, classes["size".concat((0, _helpers.capitalize)(size))], size !== 'medium'), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), _classNames), classNameProp);
  return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
    className: className,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: (0, _classnames.default)(classes.focusVisible, focusVisibleClassName)
  }, other), _react.default.createElement("span", {
    className: classes.label
  }, children));
}

Button.propTypes =  true ? {
  /**
   * The content of the button.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * The default value is a `button`.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: _propTypes.default.string,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: _propTypes.default.string,

  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: _propTypes.default.bool,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),

  /**
   * @ignore
   */
  type: _propTypes.default.string,

  /**
   * The type of button.
   */
  variant: _propTypes.default.oneOf(['flat', 'outlined', 'raised', 'fab'])
} : {};
Button.defaultProps = {
  color: 'default',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'flat'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiButton'
})(Button);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});

var _Button = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Button/Button.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _keycode = _interopRequireDefault(__webpack_require__("./node_modules/keycode/index.js"));

var _ownerWindow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerWindow.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _focusVisible = __webpack_require__("./node_modules/@material-ui/core/ButtonBase/focusVisible.js");

var _TouchRipple = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/TouchRipple.js"));

var _createRippleHandler = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/createRippleHandler.js"));

var styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    }
  },
  disabled: {},
  focusVisible: {}
};
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

exports.styles = styles;

var ButtonBase =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ButtonBase, _React$Component);

  function ButtonBase() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, ButtonBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = ButtonBase.__proto__ || (0, _getPrototypeOf.default)(ButtonBase)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "onFocusVisibleHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.keyDown = false;

        _this.setState({
          focusVisible: true
        });

        if (_this.props.onFocusVisible) {
          _this.props.onFocusVisible(event);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "onRippleRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        _this.ripple = node;
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "ripple", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "keyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "button", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "focusVisibleTimeout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "focusVisibleCheckTime", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 50
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "focusVisibleMaxCheckTimes", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 5
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var _this$props = _this.props,
            component = _this$props.component,
            focusRipple = _this$props.focusRipple,
            onKeyDown = _this$props.onKeyDown,
            onClick = _this$props.onClick;
        var key = (0, _keycode.default)(event); // Check if key is already down to avoid repeats being counted as multiple activations

        if (focusRipple && !_this.keyDown && _this.state.focusVisible && _this.ripple && key === 'space') {
          _this.keyDown = true;
          event.persist();

          _this.ripple.stop(event, function () {
            _this.ripple.start(event);
          });
        }

        if (onKeyDown) {
          onKeyDown(event);
        } // Keyboard accessibility for non interactive elements


        if (event.target === event.currentTarget && component && component !== 'button' && (key === 'space' || key === 'enter')) {
          event.preventDefault();

          if (onClick) {
            onClick(event);
          }
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleKeyUp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (_this.props.focusRipple && (0, _keycode.default)(event) === 'space' && _this.ripple && _this.state.focusVisible) {
          _this.keyDown = false;
          event.persist();

          _this.ripple.stop(event, function () {
            return _this.ripple.pulsate(event);
          });
        }

        if (_this.props.onKeyUp) {
          _this.props.onKeyUp(event);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleMouseDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'MouseDown', 'start', function () {
        clearTimeout(_this.focusVisibleTimeout);

        if (_this.state.focusVisible) {
          _this.setState({
            focusVisible: false
          });
        }
      })
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleMouseUp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'MouseUp', 'stop')
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleMouseLeave", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'MouseLeave', 'stop', function (event) {
        if (_this.state.focusVisible) {
          event.preventDefault();
        }
      })
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleTouchStart", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'TouchStart', 'start')
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleTouchEnd", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'TouchEnd', 'stop')
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleTouchMove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'TouchMove', 'stop')
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleBlur", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'Blur', 'stop', function () {
        clearTimeout(_this.focusVisibleTimeout);

        if (_this.state.focusVisible) {
          _this.setState({
            focusVisible: false
          });
        }
      })
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleFocus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (_this.props.disabled) {
          return;
        } // Fix for https://github.com/facebook/react/issues/7769


        if (!_this.button) {
          _this.button = event.currentTarget;
        }

        event.persist();
        (0, _focusVisible.detectFocusVisible)((0, _assertThisInitialized2.default)(_this), _this.button, function () {
          _this.onFocusVisibleHandler(event);
        });

        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
      }
    }), _temp));
  }

  (0, _createClass2.default)(ButtonBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.button = _reactDom.default.findDOMNode(this);
      (0, _focusVisible.listenForFocusKeys)((0, _ownerWindow.default)(this.button));

      if (this.props.action) {
        this.props.action({
          focusVisible: function focusVisible() {
            _this2.setState({
              focusVisible: true
            });

            _this2.button.focus();
          }
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.focusRipple && !this.props.disableRipple && !prevState.focusVisible && this.state.focusVisible) {
        this.ripple.pulsate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.button = null;
      clearTimeout(this.focusVisibleTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          action = _props.action,
          buttonRef = _props.buttonRef,
          centerRipple = _props.centerRipple,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          component = _props.component,
          disabled = _props.disabled,
          disableRipple = _props.disableRipple,
          focusRipple = _props.focusRipple,
          focusVisibleClassName = _props.focusVisibleClassName,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onFocusVisible = _props.onFocusVisible,
          onKeyDown = _props.onKeyDown,
          onKeyUp = _props.onKeyUp,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onMouseUp = _props.onMouseUp,
          onTouchEnd = _props.onTouchEnd,
          onTouchMove = _props.onTouchMove,
          onTouchStart = _props.onTouchStart,
          tabIndex = _props.tabIndex,
          TouchRippleProps = _props.TouchRippleProps,
          type = _props.type,
          other = (0, _objectWithoutProperties2.default)(_props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"]);
      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.focusVisible, this.state.focusVisible), (0, _defineProperty2.default)(_classNames, focusVisibleClassName, this.state.focusVisible), _classNames), classNameProp);
      var buttonProps = {};
      var ComponentProp = component;

      if (!ComponentProp) {
        if (other.href) {
          ComponentProp = 'a';
        } else {
          ComponentProp = 'button';
        }
      }

      if (ComponentProp === 'button') {
        buttonProps.type = type || 'button';
        buttonProps.disabled = disabled;
      } else {
        buttonProps.role = 'button';
      }

      return _react.default.createElement(ComponentProp, (0, _extends2.default)({
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onMouseDown: this.handleMouseDown,
        onMouseLeave: this.handleMouseLeave,
        onMouseUp: this.handleMouseUp,
        onTouchEnd: this.handleTouchEnd,
        onTouchMove: this.handleTouchMove,
        onTouchStart: this.handleTouchStart,
        tabIndex: disabled ? '-1' : tabIndex,
        className: className,
        ref: buttonRef
      }, buttonProps, other), children, !disableRipple && !disabled ? _react.default.createElement(_TouchRipple.default, (0, _extends2.default)({
        innerRef: this.onRippleRef,
        center: centerRipple
      }, TouchRippleProps)) : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (typeof prevState.focusVisible === 'undefined') {
        return {
          focusVisible: false,
          lastDisabled: nextProps.disabled
        };
      } // The blur won't fire when the disabled state is set on a focused input.
      // We need to book keep the focused state manually.


      if (!prevState.prevState && nextProps.disabled && prevState.focusVisible) {
        return {
          focusVisible: false,
          lastDisabled: nextProps.disabled
        };
      }

      return {
        lastDisabled: nextProps.disabled
      };
    }
  }]);
  return ButtonBase;
}(_react.default.Component);

ButtonBase.propTypes =  true ? {
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports `focusVisible()` action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: _propTypes.default.func,

  /**
   * Use that property to pass a ref callback to the native button component.
   */
  buttonRef: _propTypes.default.func,

  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: _propTypes.default.bool,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * The default value is a `button`.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * If `true`, the base button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * `disableRipple` must also be `false`.
   */
  focusRipple: _propTypes.default.bool,

  /**
   * This property can help a person know which element has the keyboard focus.
   * The class name will be applied when the element gain the focus throught a keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible feature](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rational for using this feature [is explain here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   */
  focusVisibleClassName: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyUp: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseLeave: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseUp: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchEnd: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchMove: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchStart: _propTypes.default.func,

  /**
   * @ignore
   */
  role: _propTypes.default.string,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Properties applied to the `TouchRipple` element.
   */
  TouchRippleProps: _propTypes.default.object,

  /**
   * @ignore
   */
  type: _propTypes.default.string
} : {};
ButtonBase.defaultProps = {
  centerRipple: false,
  disableRipple: false,
  focusRipple: false,
  tabIndex: '0',
  type: 'button'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiButtonBase'
})(ButtonBase);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/Ripple.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/Transition.js"));

/**
 * @ignore - internal component.
 */
var Ripple =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Ripple, _React$Component);

  function Ripple() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Ripple);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Ripple.__proto__ || (0, _getPrototypeOf.default)(Ripple)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        visible: false,
        leaving: false
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          visible: true
        });
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleExit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          leaving: true
        });
      }
    }), _temp));
  }

  (0, _createClass2.default)(Ripple, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          pulsate = _props.pulsate,
          rippleX = _props.rippleX,
          rippleY = _props.rippleY,
          rippleSize = _props.rippleSize,
          other = (0, _objectWithoutProperties2.default)(_props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);
      var _state = this.state,
          visible = _state.visible,
          leaving = _state.leaving;
      var rippleClassName = (0, _classnames.default)(classes.ripple, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.rippleVisible, visible), (0, _defineProperty2.default)(_classNames, classes.ripplePulsate, pulsate), _classNames), classNameProp);
      var rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
      };
      var childClassName = (0, _classnames.default)(classes.child, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.childLeaving, leaving), (0, _defineProperty2.default)(_classNames2, classes.childPulsate, pulsate), _classNames2));
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        onEnter: this.handleEnter,
        onExit: this.handleExit
      }, other), _react.default.createElement("span", {
        className: rippleClassName,
        style: rippleStyles
      }, _react.default.createElement("span", {
        className: childClassName
      })));
    }
  }]);
  return Ripple;
}(_react.default.Component);

Ripple.propTypes =  true ? {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: _propTypes.default.bool,

  /**
   * Diameter of the ripple.
   */
  rippleSize: _propTypes.default.number,

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: _propTypes.default.number,

  /**
   * Vertical position of the ripple center.
   */
  rippleY: _propTypes.default.number
} : {};
Ripple.defaultProps = {
  pulsate: false
};
var _default = Ripple;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/TouchRipple.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = exports.DELAY_RIPPLE = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/TransitionGroup.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Ripple = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/Ripple.js"));

var DURATION = 550;
var DELAY_RIPPLE = 80;
exports.DELAY_RIPPLE = DELAY_RIPPLE;

var styles = function styles(theme) {
  return {
    root: {
      display: 'block',
      position: 'absolute',
      overflow: 'hidden',
      borderRadius: 'inherit',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      pointerEvents: 'none',
      zIndex: 0
    },
    ripple: {
      width: 50,
      height: 50,
      left: 0,
      top: 0,
      opacity: 0,
      position: 'absolute'
    },
    rippleVisible: {
      opacity: 0.3,
      transform: 'scale(1)',
      animation: "mui-ripple-enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },
    child: {
      opacity: 1,
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    },
    childLeaving: {
      opacity: 0,
      animation: "mui-ripple-exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    childPulsate: {
      position: 'absolute',
      left: 0,
      top: 0,
      animation: "mui-ripple-pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    '@keyframes mui-ripple-enter': {
      '0%': {
        transform: 'scale(0)',
        opacity: 0.1
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0.3
      }
    },
    '@keyframes mui-ripple-exit': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes mui-ripple-pulsate': {
      '0%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(0.92)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  };
};

exports.styles = styles;

var TouchRipple =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(TouchRipple, _React$PureComponent);

  function TouchRipple() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, TouchRipple);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = TouchRipple.__proto__ || (0, _getPrototypeOf.default)(TouchRipple)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        nextKey: 0,
        ripples: []
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "ignoringMouseDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "startTimer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "startTimerCommit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "pulsate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.start({}, {
          pulsate: true
        });
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "start", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var cb = arguments.length > 2 ? arguments[2] : undefined;
        var _options$pulsate = options.pulsate,
            pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
            _options$center = options.center,
            center = _options$center === void 0 ? _this.props.center || options.pulsate : _options$center,
            _options$fakeElement = options.fakeElement,
            fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

        if (event.type === 'mousedown' && _this.ignoringMouseDown) {
          _this.ignoringMouseDown = false;
          return;
        }

        if (event.type === 'touchstart') {
          _this.ignoringMouseDown = true;
        }

        var element = fakeElement ? null : _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)(_this));
        var rect = element ? element.getBoundingClientRect() : {
          width: 0,
          height: 0,
          left: 0,
          top: 0
        }; // Get the size of the ripple

        var rippleX;
        var rippleY;
        var rippleSize;

        if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
          rippleX = Math.round(rect.width / 2);
          rippleY = Math.round(rect.height / 2);
        } else {
          var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
          var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
          rippleX = Math.round(clientX - rect.left);
          rippleY = Math.round(clientY - rect.top);
        }

        if (center) {
          rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

          if (rippleSize % 2 === 0) {
            rippleSize += 1;
          }
        } else {
          var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
          var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
          rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
        } // Touche devices


        if (event.touches) {
          // Prepare the ripple effect.
          _this.startTimerCommit = function () {
            _this.startCommit({
              pulsate: pulsate,
              rippleX: rippleX,
              rippleY: rippleY,
              rippleSize: rippleSize,
              cb: cb
            });
          }; // Deplay the execution of the ripple effect.


          _this.startTimer = setTimeout(function () {
            _this.startTimerCommit();

            _this.startTimerCommit = null;
          }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
        } else {
          _this.startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "startCommit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(params) {
        var pulsate = params.pulsate,
            rippleX = params.rippleX,
            rippleY = params.rippleY,
            rippleSize = params.rippleSize,
            cb = params.cb;
        var ripples = _this.state.ripples; // Add a ripple to the ripples array.

        ripples = (0, _toConsumableArray2.default)(ripples).concat([_react.default.createElement(_Ripple.default, {
          key: _this.state.nextKey,
          classes: _this.props.classes,
          timeout: {
            exit: DURATION,
            enter: DURATION
          },
          pulsate: pulsate,
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize
        })]);

        _this.setState({
          nextKey: _this.state.nextKey + 1,
          ripples: ripples
        }, cb);
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "stop", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, cb) {
        clearTimeout(_this.startTimer);
        var ripples = _this.state.ripples; // The touch interaction occures to quickly.
        // We still want to show ripple effect.

        if (event.type === 'touchend' && _this.startTimerCommit) {
          event.persist();

          _this.startTimerCommit();

          _this.startTimerCommit = null;
          _this.startTimer = setTimeout(function () {
            _this.stop(event, cb);
          }, 0);
          return;
        }

        _this.startTimerCommit = null;

        if (ripples && ripples.length) {
          _this.setState({
            ripples: ripples.slice(1)
          }, cb);
        }
      }
    }), _temp));
  }

  (0, _createClass2.default)(TouchRipple, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.startTimer);
    } // Used to filter out mouse emulated events on mobile.

  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          center = _props.center,
          classes = _props.classes,
          className = _props.className,
          other = (0, _objectWithoutProperties2.default)(_props, ["center", "classes", "className"]);
      return _react.default.createElement(_TransitionGroup.default, (0, _extends2.default)({
        component: "span",
        enter: true,
        exit: true,
        className: (0, _classnames.default)(classes.root, className)
      }, other), this.state.ripples);
    }
  }]);
  return TouchRipple;
}(_react.default.PureComponent);

TouchRipple.propTypes =  true ? {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string
} : {};
TouchRipple.defaultProps = {
  center: false
};

var _default = (0, _withStyles.default)(styles, {
  flip: false,
  name: 'MuiTouchRipple'
})(TouchRipple);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/createRippleHandler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function createRippleHandler(instance, eventName, action, cb) {
  return function handleEvent(event) {
    if (cb) {
      cb.call(instance, event);
    }

    if (event.defaultPrevented) {
      return false;
    }

    if (instance.ripple) {
      instance.ripple[action](event);
    }

    if (instance.props && typeof instance.props["on".concat(eventName)] === 'function') {
      instance.props["on".concat(eventName)](event);
    }

    return true;
  };
}

var _default = createRippleHandler;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/focusVisible.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectFocusVisible = detectFocusVisible;
exports.listenForFocusKeys = listenForFocusKeys;

var _keycode = _interopRequireDefault(__webpack_require__("./node_modules/keycode/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

var _contains = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/query/contains.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/ownerDocument.js"));

//  weak
var internal = {
  focusKeyPressed: false,
  keyUpEventTimeout: -1
};

function detectFocusVisible(instance, element, callback) {
  var attempt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
   true ? (0, _warning.default)(instance.focusVisibleCheckTime, 'Material-UI: missing instance.focusVisibleCheckTime') : void 0;
   true ? (0, _warning.default)(instance.focusVisibleMaxCheckTimes, 'Material-UI: missing instance.focusVisibleMaxCheckTimes') : void 0;
  instance.focusVisibleTimeout = setTimeout(function () {
    var doc = (0, _ownerDocument.default)(element);

    if (internal.focusKeyPressed && (doc.activeElement === element || (0, _contains.default)(element, doc.activeElement))) {
      callback();
    } else if (attempt < instance.focusVisibleMaxCheckTimes) {
      detectFocusVisible(instance, element, callback, attempt + 1);
    }
  }, instance.focusVisibleCheckTime);
}

var FOCUS_KEYS = ['tab', 'enter', 'space', 'esc', 'up', 'down', 'left', 'right'];

function isFocusKey(event) {
  return FOCUS_KEYS.indexOf((0, _keycode.default)(event)) !== -1;
}

var handleKeyUpEvent = function handleKeyUpEvent(event) {
  if (isFocusKey(event)) {
    internal.focusKeyPressed = true; // Let's consider that the user is using a keyboard during a window frame of 1s.

    clearTimeout(internal.keyUpEventTimeout);
    internal.keyUpEventTimeout = setTimeout(function () {
      internal.focusKeyPressed = false;
    }, 1e3);
  }
};

function listenForFocusKeys(win) {
  // The event listener will only be added once per window.
  // Duplicate event listeners will be ignored by addEventListener.
  // Also, this logic is client side only, we don't need a teardown.
  win.addEventListener('keyup', handleKeyUpEvent);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ButtonBase.default;
  }
});

var _ButtonBase = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/ButtonBase.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Collapse/Collapse.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/Transition.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _transitions = __webpack_require__("./node_modules/@material-ui/core/styles/transitions.js");

var _utils = __webpack_require__("./node_modules/@material-ui/core/transitions/utils.js");

// @inheritedComponent Transition
var styles = function styles(theme) {
  return {
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },
    entered: {
      height: 'auto'
    },
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex'
    },
    wrapperInner: {
      width: '100%'
    }
  };
};
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/demos/steppers#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */


exports.styles = styles;

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Collapse, _React$Component);

  function Collapse() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Collapse.__proto__ || (0, _getPrototypeOf.default)(Collapse)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "wrapper", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "autoTransitionDuration", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "timer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        node.style.height = _this.props.collapsedHeight;

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleEntering", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        var _this$props = _this.props,
            timeout = _this$props.timeout,
            theme = _this$props.theme;
        var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

        var _getTransitionProps = (0, _utils.getTransitionProps)(_this.props, {
          mode: 'enter'
        }),
            transitionDuration = _getTransitionProps.duration;

        if (timeout === 'auto') {
          var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
          node.style.transitionDuration = "".concat(duration2, "ms");
          _this.autoTransitionDuration = duration2;
        } else {
          node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
        }

        node.style.height = "".concat(wrapperHeight, "px");

        if (_this.props.onEntering) {
          _this.props.onEntering(node);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleEntered", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        node.style.height = 'auto';

        if (_this.props.onEntered) {
          _this.props.onEntered(node);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleExit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;
        node.style.height = "".concat(wrapperHeight, "px");

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleExiting", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        var _this$props2 = _this.props,
            timeout = _this$props2.timeout,
            theme = _this$props2.theme;
        var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

        var _getTransitionProps2 = (0, _utils.getTransitionProps)(_this.props, {
          mode: 'exit'
        }),
            transitionDuration = _getTransitionProps2.duration;

        if (timeout === 'auto') {
          var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
          node.style.transitionDuration = "".concat(duration2, "ms");
          _this.autoTransitionDuration = duration2;
        } else {
          node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
        }

        node.style.height = _this.props.collapsedHeight;

        if (_this.props.onExiting) {
          _this.props.onExiting(node);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "addEndListener", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_, next) {
        if (_this.props.timeout === 'auto') {
          _this.timer = setTimeout(next, _this.autoTransitionDuration || 0);
        }
      }
    }), _temp));
  }

  (0, _createClass2.default)(Collapse, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          collapsedHeight = _props.collapsedHeight,
          Component = _props.component,
          onEnter = _props.onEnter,
          onEntered = _props.onEntered,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          style = _props.style,
          theme = _props.theme,
          timeout = _props.timeout,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "classes", "className", "collapsedHeight", "component", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "style", "theme", "timeout"]);
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        onEnter: this.handleEnter,
        onEntered: this.handleEntered,
        onEntering: this.handleEntering,
        onExit: this.handleExit,
        onExiting: this.handleExiting,
        addEndListener: this.addEndListener,
        timeout: timeout === 'auto' ? null : timeout
      }, other), function (state, childProps) {
        return _react.default.createElement(Component, (0, _extends2.default)({
          className: (0, _classnames.default)(classes.container, (0, _defineProperty2.default)({}, classes.entered, state === 'entered'), className),
          style: (0, _objectSpread2.default)({}, style, {
            minHeight: collapsedHeight
          })
        }, childProps), _react.default.createElement("div", {
          className: classes.wrapper,
          ref: function ref(node) {
            _this2.wrapper = node;
          }
        }, _react.default.createElement("div", {
          className: classes.wrapperInner
        }, children)));
      });
    }
  }]);
  return Collapse;
}(_react.default.Component);

Collapse.propTypes =  true ? {
  /**
   * The content node to be collapsed.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The height of the container when collapsed.
   */
  collapsedHeight: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntered: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntering: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  onExiting: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])])
} : {};
Collapse.defaultProps = {
  collapsedHeight: '0px',
  component: 'div',
  timeout: _transitions.duration.standard
};

var _default = (0, _withStyles.default)(styles, {
  withTheme: true,
  name: 'MuiCollapse'
})(Collapse);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Collapse/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Collapse.default;
  }
});

var _Collapse = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Collapse/Collapse.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Divider/Divider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__("./node_modules/@material-ui/core/styles/colorManipulator.js");

var styles = function styles(theme) {
  return {
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },
    inset: {
      marginLeft: theme.spacing.unit * 9
    },
    light: {
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.divider, 0.08)
    }
  };
};

exports.styles = styles;

function Divider(props) {
  var _classNames;

  var absolute = props.absolute,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      inset = props.inset,
      light = props.light,
      other = (0, _objectWithoutProperties2.default)(props, ["absolute", "classes", "className", "component", "inset", "light"]);
  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.absolute, absolute), (0, _defineProperty2.default)(_classNames, classes.inset, inset), (0, _defineProperty2.default)(_classNames, classes.light, light), _classNames), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

Divider.propTypes =  true ? {
  absolute: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * If `true`, the divider will be indented.
   */
  inset: _propTypes.default.bool,

  /**
   * If `true`, the divider will have a lighter color.
   */
  light: _propTypes.default.bool
} : {};
Divider.defaultProps = {
  absolute: false,
  component: 'hr',
  inset: false,
  light: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDivider'
})(Divider);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Divider/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Divider.default;
  }
});

var _Divider = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Divider/Divider.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Drawer/Drawer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHorizontal = isHorizontal;
exports.getAnchor = getAnchor;
exports.default = exports.styles = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _Modal = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Slide = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Slide/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Paper/index.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var _transitions = __webpack_require__("./node_modules/@material-ui/core/styles/transitions.js");

var oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};

function isHorizontal(props) {
  return ['left', 'right'].indexOf(props.anchor) !== -1;
}

function getAnchor(props) {
  return props.theme.direction === 'rtl' && isHorizontal(props) ? oppositeDirection[props.anchor] : props.anchor;
}

var styles = function styles(theme) {
  return {
    docked: {
      flex: '0 0 auto'
    },
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      flex: '1 0 auto',
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      // temporary style
      position: 'fixed',
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      outline: 'none'
    },
    paperAnchorLeft: {
      left: 0,
      right: 'auto'
    },
    paperAnchorRight: {
      left: 'auto',
      right: 0
    },
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    paperAnchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    paperAnchorDockedLeft: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    },
    paperAnchorDockedTop: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    paperAnchorDockedRight: {
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },
    paperAnchorDockedBottom: {
      borderTop: "1px solid ".concat(theme.palette.divider)
    },
    modal: {} // Just here so people can override the style.

  };
};
/**
 * The properties of the [Modal](/api/modal) component are available
 * when `variant="temporary"` is set.
 */


exports.styles = styles;

var Drawer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Drawer, _React$Component);

  function Drawer() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Drawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Drawer.__proto__ || (0, _getPrototypeOf.default)(Drawer)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "mounted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    }), _temp));
  }

  (0, _createClass2.default)(Drawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    } // Let's assume that the Drawer will always be rendered on user space.
    // We use that state is order to skip the appear transition during the
    // initial mount of the component.

  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          anchorProp = _props.anchor,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          elevation = _props.elevation,
          _props$ModalProps = _props.ModalProps;
      _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;
      var BackdropPropsProp = _props$ModalProps.BackdropProps,
          ModalProps = (0, _objectWithoutProperties2.default)(_props$ModalProps, ["BackdropProps"]),
          onClose = _props.onClose,
          open = _props.open,
          PaperProps = _props.PaperProps,
          SlideProps = _props.SlideProps,
          theme = _props.theme,
          transitionDuration = _props.transitionDuration,
          variant = _props.variant,
          other = (0, _objectWithoutProperties2.default)(_props, ["anchor", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "theme", "transitionDuration", "variant"]);
      var anchor = getAnchor(this.props);

      var drawer = _react.default.createElement(_Paper.default, (0, _extends2.default)({
        elevation: variant === 'temporary' ? elevation : 0,
        square: true,
        className: (0, _classnames.default)(classes.paper, classes["paperAnchor".concat((0, _helpers.capitalize)(anchor))], (0, _defineProperty2.default)({}, classes["paperAnchorDocked".concat((0, _helpers.capitalize)(anchor))], variant !== 'temporary'))
      }, PaperProps), children);

      if (variant === 'permanent') {
        return _react.default.createElement("div", (0, _extends2.default)({
          className: (0, _classnames.default)(classes.docked, className)
        }, other), drawer);
      }

      var slidingDrawer = _react.default.createElement(_Slide.default, (0, _extends2.default)({
        "in": open,
        direction: oppositeDirection[anchor],
        timeout: transitionDuration,
        appear: this.mounted
      }, SlideProps), drawer);

      if (variant === 'persistent') {
        return _react.default.createElement("div", (0, _extends2.default)({
          className: (0, _classnames.default)(classes.docked, className)
        }, other), slidingDrawer);
      } // variant === temporary


      return _react.default.createElement(_Modal.default, (0, _extends2.default)({
        BackdropProps: (0, _objectSpread2.default)({}, BackdropPropsProp, {
          transitionDuration: transitionDuration
        }),
        className: (0, _classnames.default)(classes.modal, className),
        open: open,
        onClose: onClose
      }, other, ModalProps), slidingDrawer);
    }
  }]);
  return Drawer;
}(_react.default.Component);

Drawer.propTypes =  true ? {
  /**
   * Side from which the drawer will appear.
   */
  anchor: _propTypes.default.oneOf(['left', 'top', 'right', 'bottom']),

  /**
   * The contents of the drawer.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The elevation of the drawer.
   */
  elevation: _propTypes.default.number,

  /**
   * Properties applied to the `Modal` element.
   */
  ModalProps: _propTypes.default.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * If `true`, the drawer is open.
   */
  open: _propTypes.default.bool,

  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: _propTypes.default.object,

  /**
   * Properties applied to the `Slide` element.
   */
  SlideProps: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })]),

  /**
   * The variant of drawer.
   */
  variant: _propTypes.default.oneOf(['permanent', 'persistent', 'temporary'])
} : {};
Drawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  open: false,
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  },
  variant: 'temporary' // Mobile first.

};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDrawer',
  flip: false,
  withTheme: true
})(Drawer);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Drawer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Drawer.default;
  }
});

var _Drawer = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Drawer/Drawer.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Fade/Fade.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/Transition.js"));

var _transitions = __webpack_require__("./node_modules/@material-ui/core/styles/transitions.js");

var _withTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withTheme.js"));

var _utils = __webpack_require__("./node_modules/@material-ui/core/transitions/utils.js");

// @inheritedComponent Transition
var styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
/**
 * The Fade transition is used by the [Modal](/utils/modals) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Fade, _React$Component);

  function Fade() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Fade);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Fade.__proto__ || (0, _getPrototypeOf.default)(Fade)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        var theme = _this.props.theme;
        (0, _utils.reflow)(node); // So the animation always start from the start.

        var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
          mode: 'enter'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleExit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        var theme = _this.props.theme;
        var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
          mode: 'exit'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      }
    }), _temp));
  }

  (0, _createClass2.default)(Fade, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onExit = _props.onExit,
          styleProp = _props.style,
          theme = _props.theme,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "onEnter", "onExit", "style", "theme"]);
      var style = (0, _objectSpread2.default)({}, styleProp, _react.default.isValidElement(children) ? children.props.style : {});
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        appear: true,
        onEnter: this.handleEnter,
        onExit: this.handleExit
      }, other), function (state, childProps) {
        return _react.default.cloneElement(children, (0, _objectSpread2.default)({
          style: (0, _objectSpread2.default)({
            opacity: 0,
            willChange: 'opacity'
          }, styles[state], style)
        }, childProps));
      });
    }
  }]);
  return Fade;
}(_react.default.Component);

Fade.propTypes =  true ? {
  /**
   * A single child content element.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : {};
Fade.defaultProps = {
  timeout: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

var _default = (0, _withTheme.default)()(Fade);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Fade/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Fade.default;
  }
});

var _Fade = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Fade/Fade.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Typography/index.js"));

/* eslint-disable jsx-a11y/label-has-for */
var styles = function styles(theme) {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // For correct alignment with the text.
      verticalAlign: 'middle',
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      marginLeft: -14,
      marginRight: theme.spacing.unit * 2,
      // used for row presentation of radio/checkbox
      '&$disabled': {
        cursor: 'default'
      }
    },
    disabled: {},
    label: {
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    }
  };
};
/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */


exports.styles = styles;

function FormControlLabel(props, context) {
  var checked = props.checked,
      classes = props.classes,
      classNameProp = props.className,
      control = props.control,
      disabledProp = props.disabled,
      inputRef = props.inputRef,
      label = props.label,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = (0, _objectWithoutProperties2.default)(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "name", "onChange", "value"]);
  var muiFormControl = context.muiFormControl;
  var disabled = disabledProp;

  if (typeof control.props.disabled !== 'undefined') {
    if (typeof disabled === 'undefined') {
      disabled = control.props.disabled;
    }
  }

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  var className = (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.disabled, disabled), classNameProp);
  return _react.default.createElement("label", (0, _extends2.default)({
    className: className
  }, other), _react.default.cloneElement(control, {
    disabled: disabled,
    checked: typeof control.props.checked === 'undefined' ? checked : control.props.checked,
    name: control.props.name || name,
    onChange: control.props.onChange || onChange,
    value: control.props.value || value,
    inputRef: control.props.inputRef || inputRef
  }), _react.default.createElement(_Typography.default, {
    component: "span",
    className: (0, _classnames.default)(classes.label, (0, _defineProperty2.default)({}, classes.disabled, disabled))
  }, label));
}

FormControlLabel.propTypes =  true ? {
  /**
   * If `true`, the component appears selected.
   */
  checked: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: _propTypes.default.element,

  /**
   * If `true`, the control will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.func,

  /**
   * The text to be used in an enclosing label element.
   */
  label: _propTypes.default.node,

  /*
   * @ignore
   */
  name: _propTypes.default.string,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes.default.func,

  /**
   * The value of the component.
   */
  value: _propTypes.default.string
} : {};
FormControlLabel.contextTypes = {
  muiFormControl: _propTypes.default.object
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFormControlLabel'
})(FormControlLabel);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/FormControlLabel/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _FormControlLabel.default;
  }
});

var _FormControlLabel = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/FormGroup/FormGroup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row'
  }
};
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */

exports.styles = styles;

function FormGroup(props) {
  var classes = props.classes,
      className = props.className,
      children = props.children,
      row = props.row,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "children", "row"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.row, row), className)
  }, other), children);
}

FormGroup.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Display group of elements in a compact row.
   */
  row: _propTypes.default.bool
} : {};
FormGroup.defaultProps = {
  row: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFormGroup'
})(FormGroup);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/FormGroup/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _FormGroup.default;
  }
});

var _FormGroup = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/FormGroup/FormGroup.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Grid/Grid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _createBreakpoints = __webpack_require__("./node_modules/@material-ui/core/styles/createBreakpoints.js");

var _requirePropFactory = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/requirePropFactory.js"));

// A grid component using the following libs as inspiration.
//
// For the implementation:
// - http://v4-alpha.getbootstrap.com/layout/flexbox-grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
var GUTTERS = [0, 8, 16, 24, 32, 40];
var GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  // For the auto layouting
  var styles = (0, _defineProperty2.default)({}, "grid-".concat(breakpoint), {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%'
  });
  GRID_SIZES.forEach(function (size) {
    if (typeof size === 'boolean') {
      // Skip the first one as handle above.
      return;
    } // Only keep 6 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e6) / 10e4, "%");
    /* eslint-disable max-len */
    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    /* eslint-enable max-len */

    styles["grid-".concat(breakpoint, "-").concat(size)] = {
      flexBasis: width,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    (0, _extends2.default)(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  GUTTERS.forEach(function (spacing, index) {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: -spacing / 2,
      width: "calc(100% + ".concat(spacing, "px)"),
      '& > $item': {
        padding: spacing / 2
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles = function styles(theme) {
  return (0, _objectSpread2.default)({
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },
    item: {
      boxSizing: 'border-box',
      flex: '0 0 auto',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },
    zeroMinWidth: {
      minWidth: 0
    },
    'direction-xs-column': {
      flexDirection: 'column'
    },
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },
    'align-items-xs-center': {
      alignItems: 'center'
    },
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },
    'align-content-xs-center': {
      alignContent: 'center'
    },
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },
    'justify-xs-center': {
      justifyContent: 'center'
    },
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    }
  }, generateGutter(theme, 'xs'), _createBreakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};

exports.styles = styles;

function Grid(props) {
  var _classNames;

  var alignContent = props.alignContent,
      alignItems = props.alignItems,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      container = props.container,
      direction = props.direction,
      item = props.item,
      justify = props.justify,
      lg = props.lg,
      md = props.md,
      sm = props.sm,
      spacing = props.spacing,
      wrap = props.wrap,
      xl = props.xl,
      xs = props.xs,
      zeroMinWidth = props.zeroMinWidth,
      other = (0, _objectWithoutProperties2.default)(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);
  var className = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.container, container), (0, _defineProperty2.default)(_classNames, classes.item, item), (0, _defineProperty2.default)(_classNames, classes.zeroMinWidth, zeroMinWidth), (0, _defineProperty2.default)(_classNames, classes["spacing-xs-".concat(String(spacing))], container && spacing !== 0), (0, _defineProperty2.default)(_classNames, classes["direction-xs-".concat(String(direction))], direction !== Grid.defaultProps.direction), (0, _defineProperty2.default)(_classNames, classes["wrap-xs-".concat(String(wrap))], wrap !== Grid.defaultProps.wrap), (0, _defineProperty2.default)(_classNames, classes["align-items-xs-".concat(String(alignItems))], alignItems !== Grid.defaultProps.alignItems), (0, _defineProperty2.default)(_classNames, classes["align-content-xs-".concat(String(alignContent))], alignContent !== Grid.defaultProps.alignContent), (0, _defineProperty2.default)(_classNames, classes["justify-xs-".concat(String(justify))], justify !== Grid.defaultProps.justify), (0, _defineProperty2.default)(_classNames, classes['grid-xs'], xs === true), (0, _defineProperty2.default)(_classNames, classes["grid-xs-".concat(String(xs))], xs && xs !== true), (0, _defineProperty2.default)(_classNames, classes['grid-sm'], sm === true), (0, _defineProperty2.default)(_classNames, classes["grid-sm-".concat(String(sm))], sm && sm !== true), (0, _defineProperty2.default)(_classNames, classes['grid-md'], md === true), (0, _defineProperty2.default)(_classNames, classes["grid-md-".concat(String(md))], md && md !== true), (0, _defineProperty2.default)(_classNames, classes['grid-lg'], lg === true), (0, _defineProperty2.default)(_classNames, classes["grid-lg-".concat(String(lg))], lg && lg !== true), (0, _defineProperty2.default)(_classNames, classes['grid-xl'], xl === true), (0, _defineProperty2.default)(_classNames, classes["grid-xl-".concat(String(xl))], xl && xl !== true), _classNames), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

Grid.propTypes =  true ? {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: _propTypes.default.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: _propTypes.default.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: _propTypes.default.bool,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: _propTypes.default.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: _propTypes.default.bool,

  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify: _propTypes.default.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: _propTypes.default.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: _propTypes.default.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: _propTypes.default.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: _propTypes.default.oneOf(GUTTERS),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: _propTypes.default.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: _propTypes.default.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: _propTypes.default.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: _propTypes.default.bool
} : {};
Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  spacing: 0,
  wrap: 'wrap',
  xl: false,
  xs: false,
  zeroMinWidth: false
}; // Add a wrapper component to generate some helper messages in the development
// environment.

/* eslint-disable react/no-multi-comp */
// eslint-disable-next-line import/no-mutable-exports

var GridWrapper = Grid;

if (true) {
  GridWrapper = function GridWrapper(props) {
    return _react.default.createElement(Grid, props);
  };

  var requireProp = (0, _requirePropFactory.default)('Grid');
  GridWrapper.propTypes = {
    alignContent: requireProp('container'),
    alignItems: requireProp('container'),
    direction: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('zeroMinWidth')
  };
}

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiGrid'
})(GridWrapper);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Grid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Grid.default;
  }
});

var _Grid = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Grid/Grid.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Grow/Grow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/Transition.js"));

var _withTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withTheme.js"));

var _utils = __webpack_require__("./node_modules/@material-ui/core/transitions/utils.js");

// @inheritedComponent Transition
function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: getScale(1)
  }
};
/**
 * The Grow transition is used by the [Popover](/utils/popovers) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Grow, _React$Component);

  function Grow() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Grow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Grow.__proto__ || (0, _getPrototypeOf.default)(Grow)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "autoTimeout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "timer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        var _this$props = _this.props,
            theme = _this$props.theme,
            timeout = _this$props.timeout;
        (0, _utils.reflow)(node); // So the animation always start from the start.

        var _getTransitionProps = (0, _utils.getTransitionProps)(_this.props, {
          mode: 'enter'
        }),
            transitionDuration = _getTransitionProps.duration,
            delay = _getTransitionProps.delay;

        var duration = 0;

        if (timeout === 'auto') {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          _this.autoTimeout = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [theme.transitions.create('opacity', {
          duration: duration,
          delay: delay
        }), theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay: delay
        })].join(',');

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleExit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        var _this$props2 = _this.props,
            theme = _this$props2.theme,
            timeout = _this$props2.timeout;
        var duration = 0;

        var _getTransitionProps2 = (0, _utils.getTransitionProps)(_this.props, {
          mode: 'exit'
        }),
            transitionDuration = _getTransitionProps2.duration,
            delay = _getTransitionProps2.delay;

        if (timeout === 'auto') {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          _this.autoTimeout = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [theme.transitions.create('opacity', {
          duration: duration,
          delay: delay
        }), theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay: delay || duration * 0.333
        })].join(',');
        node.style.opacity = '0';
        node.style.transform = getScale(0.75);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "addEndListener", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_, next) {
        if (_this.props.timeout === 'auto') {
          _this.timer = setTimeout(next, _this.autoTimeout || 0);
        }
      }
    }), _temp));
  }

  (0, _createClass2.default)(Grow, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onExit = _props.onExit,
          styleProp = _props.style,
          theme = _props.theme,
          timeout = _props.timeout,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "onEnter", "onExit", "style", "theme", "timeout"]);
      var style = (0, _objectSpread2.default)({}, styleProp, _react.default.isValidElement(children) ? children.props.style : {});
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        appear: true,
        onEnter: this.handleEnter,
        onExit: this.handleExit,
        addEndListener: this.addEndListener,
        timeout: timeout === 'auto' ? null : timeout
      }, other), function (state, childProps) {
        return _react.default.cloneElement(children, (0, _objectSpread2.default)({
          style: (0, _objectSpread2.default)({
            opacity: 0,
            transform: getScale(0.75)
          }, styles[state], style)
        }, childProps));
      });
    }
  }]);
  return Grow;
}(_react.default.Component);

Grow.propTypes =  true ? {
  /**
   * A single child content element.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])])
} : {};
Grow.defaultProps = {
  timeout: 'auto'
};

var _default = (0, _withTheme.default)()(Grow);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Grow/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Grow.default;
  }
});

var _Grow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Grow/Grow.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Icon/Icon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var styles = function styles(theme) {
  return {
    root: {
      userSelect: 'none',
      fontSize: 24,
      width: '1em',
      height: '1em',
      // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
      // To remove at some point.
      overflow: 'hidden',
      flexShrink: 0
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorError: {
      color: theme.palette.error.main
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    }
  };
};

exports.styles = styles;

function Icon(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color"]);
  return _react.default.createElement("span", (0, _extends2.default)({
    className: (0, _classnames.default)('material-icons', classes.root, (0, _defineProperty2.default)({}, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'inherit'), className),
    "aria-hidden": "true"
  }, other), children);
}

Icon.propTypes =  true ? {
  /**
   * The name of the icon font ligature.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled'])
} : {};
Icon.defaultProps = {
  color: 'inherit'
};
Icon.muiName = 'Icon';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiIcon'
})(Icon);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Icon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Icon.default;
  }
});

var _Icon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Icon/Icon.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/IconButton/IconButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__("./node_modules/@material-ui/core/styles/colorManipulator.js");

var _ButtonBase = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/index.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: theme.typography.pxToRem(24),
      width: 48,
      height: 48,
      padding: 0,
      borderRadius: '50%',
      color: theme.palette.action.active,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.action.active, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },
    colorInherit: {
      color: 'inherit'
    },
    colorPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    colorSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    disabled: {},
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    }
  };
};
/**
 * Refer to the [Icons](/style/icons) section of the documentation
 * regarding the available icon options.
 */


exports.styles = styles;

function IconButton(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "disabled"]);
  return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'default'), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), _classNames), className),
    centerRipple: true,
    focusRipple: true,
    disabled: disabled
  }, other), _react.default.createElement("span", {
    className: classes.label
  }, children));
}

IconButton.propTypes =  true ? {
  /**
   * The icon element.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: _propTypes.default.bool
} : {};
IconButton.defaultProps = {
  color: 'default',
  disabled: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiIconButton'
})(IconButton);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/IconButton/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _IconButton.default;
  }
});

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/IconButton/IconButton.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/List/List.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  return {
    root: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'relative'
    },
    padding: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    dense: {
      paddingTop: theme.spacing.unit / 2,
      paddingBottom: theme.spacing.unit / 2
    },
    subheader: {
      paddingTop: 0
    }
  };
};

exports.styles = styles;

var List =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(List, _React$Component);

  function List() {
    (0, _classCallCheck2.default)(this, List);
    return (0, _possibleConstructorReturn2.default)(this, (List.__proto__ || (0, _getPrototypeOf.default)(List)).apply(this, arguments));
  }

  (0, _createClass2.default)(List, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        dense: this.props.dense
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          Component = _props.component,
          dense = _props.dense,
          disablePadding = _props.disablePadding,
          subheader = _props.subheader,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);
      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.dense, dense && !disablePadding), (0, _defineProperty2.default)(_classNames, classes.padding, !disablePadding), (0, _defineProperty2.default)(_classNames, classes.subheader, subheader), _classNames), classNameProp);
      return _react.default.createElement(Component, (0, _extends2.default)({
        className: className
      }, other), subheader, children);
    }
  }]);
  return List;
}(_react.default.Component);

List.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items. The property is available to descendant components as the
   * `dense` context.
   */
  dense: _propTypes.default.bool,

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: _propTypes.default.bool,

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: _propTypes.default.node
} : {};
List.defaultProps = {
  component: 'ul',
  dense: false,
  disablePadding: false
};
List.childContextTypes = {
  dense: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiList'
})(List);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/List/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _List.default;
  }
});

var _List = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/List/List.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItem/ListItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _ButtonBase = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/index.js"));

var _reactHelpers = __webpack_require__("./node_modules/@material-ui/core/utils/reactHelpers.js");

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left'
    },
    container: {
      position: 'relative'
    },
    focusVisible: {
      backgroundColor: theme.palette.action.hover
    },
    default: {
      paddingTop: 12,
      paddingBottom: 12
    },
    dense: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    disabled: {
      opacity: 0.5
    },
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },
    gutters: theme.mixins.gutters(),
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positionned.
      paddingRight: theme.spacing.unit * 4
    }
  };
};

exports.styles = styles;

var ListItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ListItem, _React$Component);

  function ListItem() {
    (0, _classCallCheck2.default)(this, ListItem);
    return (0, _possibleConstructorReturn2.default)(this, (ListItem.__proto__ || (0, _getPrototypeOf.default)(ListItem)).apply(this, arguments));
  }

  (0, _createClass2.default)(ListItem, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        dense: this.props.dense || this.context.dense || false
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          button = _props.button,
          childrenProp = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          componentProp = _props.component,
          ContainerComponent = _props.ContainerComponent,
          _props$ContainerProps = _props.ContainerProps;
      _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;
      var ContainerClassName = _props$ContainerProps.className,
          ContainerProps = (0, _objectWithoutProperties2.default)(_props$ContainerProps, ["className"]),
          dense = _props.dense,
          disabled = _props.disabled,
          disableGutters = _props.disableGutters,
          divider = _props.divider,
          other = (0, _objectWithoutProperties2.default)(_props, ["button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider"]);
      var isDense = dense || this.context.dense || false;

      var children = _react.default.Children.toArray(childrenProp);

      var hasAvatar = children.some(function (value) {
        return (0, _reactHelpers.isMuiElement)(value, ['ListItemAvatar']);
      });
      var hasSecondaryAction = children.length && (0, _reactHelpers.isMuiElement)(children[children.length - 1], ['ListItemSecondaryAction']);
      var className = (0, _classnames.default)(classes.root, isDense || hasAvatar ? classes.dense : classes.default, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.gutters, !disableGutters), (0, _defineProperty2.default)(_classNames, classes.divider, divider), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.button, button), (0, _defineProperty2.default)(_classNames, classes.secondaryAction, hasSecondaryAction), _classNames), classNameProp);
      var componentProps = (0, _objectSpread2.default)({
        className: className,
        disabled: disabled
      }, other);
      var Component = componentProp || 'li';

      if (button) {
        componentProps.component = componentProp || 'div';
        componentProps.focusVisibleClassName = classes.focusVisible;
        Component = _ButtonBase.default;
      }

      if (hasSecondaryAction) {
        // Use div by default.
        Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

        if (ContainerComponent === 'li') {
          if (Component === 'li') {
            Component = 'div';
          } else if (componentProps.component === 'li') {
            componentProps.component = 'div';
          }
        }

        return _react.default.createElement(ContainerComponent, (0, _extends2.default)({
          className: (0, _classnames.default)(classes.container, ContainerClassName)
        }, ContainerProps), _react.default.createElement(Component, componentProps, children), children.pop());
      }

      return _react.default.createElement(Component, componentProps, children);
    }
  }]);
  return ListItem;
}(_react.default.Component);

ListItem.propTypes =  true ? {
  /**
   * If `true`, the list item will be a button (using `ButtonBase`).
   */
  button: _propTypes.default.bool,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * The container component used when a `ListItemSecondaryAction` is rendered.
   */
  ContainerComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * Properties applied to the container element when the component
   * is used to display a `ListItemSecondaryAction`.
   */
  ContainerProps: _propTypes.default.object,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: _propTypes.default.bool,

  /**
   * @ignore
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: _propTypes.default.bool,

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: _propTypes.default.bool
} : {};
ListItem.defaultProps = {
  button: false,
  ContainerComponent: 'li',
  dense: false,
  disabled: false,
  disableGutters: false,
  divider: false
};
ListItem.contextTypes = {
  dense: _propTypes.default.bool
};
ListItem.childContextTypes = {
  dense: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiListItem'
})(ListItem);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItem/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ListItem.default;
  }
});

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ListItem/ListItem.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  return {
    root: {
      marginRight: theme.spacing.unit * 2,
      color: theme.palette.action.active,
      flexShrink: 0
    }
  };
};
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */


exports.styles = styles;

function ListItemIcon(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className"]);
  return _react.default.cloneElement(children, (0, _objectSpread2.default)({
    className: (0, _classnames.default)(classes.root, classNameProp, children.props.className)
  }, other));
}

ListItemIcon.propTypes =  true ? {
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@material-ui/icons` SVG icon element.
   */
  children: _propTypes.default.element.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string
} : {};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiListItemIcon'
})(ListItemIcon);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItemIcon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ListItemIcon.default;
  }
});

var _ListItemIcon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItemText/ListItemText.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Typography/index.js"));

var styles = function styles(theme) {
  return {
    root: {
      flex: '1 1 auto',
      minWidth: 0,
      padding: "0 ".concat(theme.spacing.unit * 2, "px"),
      '&:first-child': {
        paddingLeft: 0
      }
    },
    inset: {
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 7
      }
    },
    dense: {
      fontSize: theme.typography.pxToRem(13)
    },
    primary: {
      '&$textDense': {
        fontSize: 'inherit'
      }
    },
    secondary: {
      '&$textDense': {
        fontSize: 'inherit'
      }
    },
    textDense: {}
  };
};

exports.styles = styles;

function ListItemText(props, context) {
  var _classNames3;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      disableTypography = props.disableTypography,
      inset = props.inset,
      primaryProp = props.primary,
      secondaryProp = props.secondary,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "secondary"]);
  var dense = context.dense;
  var primary = primaryProp || children;

  if (primary && !disableTypography) {
    primary = _react.default.createElement(_Typography.default, {
      variant: "subheading",
      className: (0, _classnames.default)(classes.primary, (0, _defineProperty2.default)({}, classes.textDense, dense))
    }, primary);
  }

  var secondary = secondaryProp;

  if (secondary && !disableTypography) {
    secondary = _react.default.createElement(_Typography.default, {
      variant: "body1",
      className: (0, _classnames.default)(classes.secondary, (0, _defineProperty2.default)({}, classes.textDense, dense)),
      color: "textSecondary"
    }, secondary);
  }

  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (_classNames3 = {}, (0, _defineProperty2.default)(_classNames3, classes.dense, dense), (0, _defineProperty2.default)(_classNames3, classes.inset, inset), _classNames3), classNameProp)
  }, other), primary, secondary);
}

ListItemText.propTypes =  true ? {
  /**
   * Alias for the `primary` property.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, that can be useful to can render an h4 instead of a
   */
  disableTypography: _propTypes.default.bool,

  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: _propTypes.default.bool,
  primary: _propTypes.default.node,
  secondary: _propTypes.default.node
} : {};
ListItemText.defaultProps = {
  disableTypography: false,
  inset: false
};
ListItemText.contextTypes = {
  dense: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiListItemText'
})(ListItemText);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItemText/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ListItemText.default;
  }
});

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ListItemText/ListItemText.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Menu/Menu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/util/scrollbarSize.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Popover = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Popover/index.js"));

var _MenuList = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/MenuList/index.js"));

// @inheritedComponent Popover
var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles = {
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tappable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100vh - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  }
};
exports.styles = styles;

var Menu =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Menu, _React$Component);

  function Menu() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Menu.__proto__ || (0, _getPrototypeOf.default)(Menu)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "getContentAnchorEl", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.menuList || !_this.menuList.selectedItem) {
          return _reactDom.default.findDOMNode(_this.menuList).firstChild;
        }

        return _reactDom.default.findDOMNode(_this.menuList.selectedItem);
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "menuList", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "focus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.menuList && _this.menuList.selectedItem) {
          _reactDom.default.findDOMNode(_this.menuList.selectedItem).focus();

          return;
        }

        var menuList = _reactDom.default.findDOMNode(_this.menuList);

        if (menuList && menuList.firstChild) {
          menuList.firstChild.focus();
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(element) {
        var theme = _this.props.theme;

        var menuList = _reactDom.default.findDOMNode(_this.menuList); // Focus so the scroll computation of the Popover works as expected.


        _this.focus(); // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.


        if (menuList && element.clientHeight < menuList.clientHeight && !menuList.style.width) {
          var size = "".concat((0, _scrollbarSize.default)(), "px");
          menuList.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = size;
          menuList.style.width = "calc(100% + ".concat(size, ")");
        }

        if (_this.props.onEnter) {
          _this.props.onEnter(element);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleListKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, key) {
        if (key === 'tab') {
          event.preventDefault();

          if (_this.props.onClose) {
            _this.props.onClose(event);
          }
        }
      }
    }), _temp));
  }

  (0, _createClass2.default)(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.open) {
        this.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          MenuListProps = _props.MenuListProps,
          onEnter = _props.onEnter,
          _props$PaperProps = _props.PaperProps,
          PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
          PopoverClasses = _props.PopoverClasses,
          theme = _props.theme,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "classes", "MenuListProps", "onEnter", "PaperProps", "PopoverClasses", "theme"]);
      return _react.default.createElement(_Popover.default, (0, _extends2.default)({
        getContentAnchorEl: this.getContentAnchorEl,
        classes: PopoverClasses,
        onEnter: this.handleEnter,
        anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
        transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
        PaperProps: (0, _objectSpread2.default)({}, PaperProps, {
          classes: (0, _objectSpread2.default)({}, PaperProps.classes, {
            root: classes.paper
          })
        })
      }, other), _react.default.createElement(_MenuList.default, (0, _extends2.default)({
        role: "menu",
        onKeyDown: this.handleListKeyDown
      }, MenuListProps, {
        ref: function ref(node) {
          _this2.menuList = node;
        }
      }), children));
    }
  }]);
  return Menu;
}(_react.default.Component);

Menu.propTypes =  true ? {
  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: _propTypes.default.object,

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * Properties applied to the `MenuList` element.
   */
  MenuListProps: _propTypes.default.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: _propTypes.default.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: _propTypes.default.func,

  /**
   * If `true`, the menu is visible.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: _propTypes.default.object,

  /**
   * `classes` property applied to the `Popover` element.
   */
  PopoverClasses: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])])
} : {};
Menu.defaultProps = {
  transitionDuration: 'auto'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiMenu',
  withTheme: true
})(Menu);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Menu/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Menu.default;
  }
});

var _Menu = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Menu/Menu.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/MenuItem/MenuItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ListItem/index.js"));

// @inheritedComponent ListItem
var styles = function styles(theme) {
  return {
    root: (0, _objectSpread2.default)({}, theme.typography.subheading, {
      height: theme.spacing.unit * 3,
      boxSizing: 'content-box',
      width: 'auto',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      '&$selected': {
        backgroundColor: theme.palette.action.selected
      }
    }),
    selected: {}
  };
};

exports.styles = styles;

function MenuItem(props) {
  var classes = props.classes,
      className = props.className,
      component = props.component,
      selected = props.selected,
      role = props.role,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "selected", "role"]);
  return _react.default.createElement(_ListItem.default, (0, _extends2.default)({
    button: true,
    role: role,
    tabIndex: -1,
    className: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.selected, selected), className),
    component: component
  }, other));
}

MenuItem.propTypes =  true ? {
  /**
   * Menu item contents.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * @ignore
   */
  role: _propTypes.default.string,

  /**
   * Use to apply selected styling.
   */
  selected: _propTypes.default.bool
} : {};
MenuItem.defaultProps = {
  component: 'li',
  role: 'menuitem',
  selected: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiMenuItem'
})(MenuItem);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/MenuItem/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _MenuItem.default;
  }
});

var _MenuItem = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/MenuItem/MenuItem.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/MenuList/MenuList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _keycode = _interopRequireDefault(__webpack_require__("./node_modules/keycode/index.js"));

var _contains = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/query/contains.js"));

var _activeElement = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/activeElement.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/ownerDocument.js"));

var _List = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/List/index.js"));

// @inheritedComponent List
var MenuList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MenuList, _React$Component);

  function MenuList() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, MenuList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = MenuList.__proto__ || (0, _getPrototypeOf.default)(MenuList)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        currentTabIndex: undefined
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "list", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "selectedItem", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "blurTimer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleBlur", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.blurTimer = setTimeout(function () {
          if (_this.list) {
            var list = _reactDom.default.findDOMNode(_this.list);

            var currentFocus = (0, _activeElement.default)((0, _ownerDocument.default)(list));

            if (!(0, _contains.default)(list, currentFocus)) {
              _this.resetTabIndex();
            }
          }
        }, 30);

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var list = _reactDom.default.findDOMNode(_this.list);

        var key = (0, _keycode.default)(event);
        var currentFocus = (0, _activeElement.default)((0, _ownerDocument.default)(list));

        if ((key === 'up' || key === 'down') && (!currentFocus || currentFocus && !(0, _contains.default)(list, currentFocus))) {
          if (_this.selectedItem) {
            _reactDom.default.findDOMNode(_this.selectedItem).focus();
          } else {
            list.firstChild.focus();
          }
        } else if (key === 'down') {
          event.preventDefault();

          if (currentFocus.nextElementSibling) {
            currentFocus.nextElementSibling.focus();
          }
        } else if (key === 'up') {
          event.preventDefault();

          if (currentFocus.previousElementSibling) {
            currentFocus.previousElementSibling.focus();
          }
        }

        if (_this.props.onKeyDown) {
          _this.props.onKeyDown(event, key);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleItemFocus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var list = _reactDom.default.findDOMNode(_this.list);

        if (list) {
          for (var i = 0; i < list.children.length; i += 1) {
            if (list.children[i] === event.currentTarget) {
              _this.setTabIndex(i);

              break;
            }
          }
        }
      }
    }), _temp));
  }

  (0, _createClass2.default)(MenuList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resetTabIndex();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.blurTimer);
    }
  }, {
    key: "setTabIndex",
    value: function setTabIndex(index) {
      this.setState({
        currentTabIndex: index
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      var currentTabIndex = this.state.currentTabIndex;

      var list = _reactDom.default.findDOMNode(this.list);

      if (!list || !list.children || !list.firstChild) {
        return;
      }

      if (currentTabIndex && currentTabIndex >= 0) {
        list.children[currentTabIndex].focus();
      } else {
        list.firstChild.focus();
      }
    }
  }, {
    key: "resetTabIndex",
    value: function resetTabIndex() {
      var list = _reactDom.default.findDOMNode(this.list);

      var currentFocus = (0, _activeElement.default)((0, _ownerDocument.default)(list));
      var items = (0, _toConsumableArray2.default)(list.children);
      var currentFocusIndex = items.indexOf(currentFocus);

      if (currentFocusIndex !== -1) {
        return this.setTabIndex(currentFocusIndex);
      }

      if (this.selectedItem) {
        return this.setTabIndex(items.indexOf(_reactDom.default.findDOMNode(this.selectedItem)));
      }

      return this.setTabIndex(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          onBlur = _props.onBlur,
          onKeyDown = _props.onKeyDown,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "className", "onBlur", "onKeyDown"]);
      return _react.default.createElement(_List.default, (0, _extends2.default)({
        role: "menu",
        ref: function ref(node) {
          _this2.list = node;
        },
        className: className,
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur
      }, other), _react.default.Children.map(children, function (child, index) {
        if (!_react.default.isValidElement(child)) {
          return null;
        }

        return _react.default.cloneElement(child, {
          tabIndex: index === _this2.state.currentTabIndex ? 0 : -1,
          ref: child.props.selected ? function (node) {
            _this2.selectedItem = node;
          } : undefined,
          onFocus: _this2.handleItemFocus
        });
      }));
    }
  }]);
  return MenuList;
}(_react.default.Component);

MenuList.propTypes =  true ? {
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func
} : {};
var _default = MenuList;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/MenuList/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _MenuList.default;
  }
});

var _MenuList = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/MenuList/MenuList.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Modal/Modal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

var _keycode = _interopRequireDefault(__webpack_require__("./node_modules/keycode/index.js"));

var _activeElement = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/activeElement.js"));

var _contains = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/query/contains.js"));

var _inDOM = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/util/inDOM.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/ownerDocument.js"));

var _RootRef = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/RootRef/index.js"));

var _Portal = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Portal/index.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _ModalManager = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/ModalManager.js"));

var _Backdrop = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Backdrop/index.js"));

// @inheritedComponent Portal
function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom.default.findDOMNode(container) || defaultContainer;
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
}

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: 0,
      left: 0
    },
    hidden: {
      visibility: 'hidden'
    }
  };
};

exports.styles = styles;

var Modal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Modal, _React$Component);
  (0, _createClass2.default)(Modal, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.open) {
        return {
          exited: false
        };
      } else if (!getHasTransition(nextProps)) {
        // Otherwise let handleExited take care of marking exited.
        return {
          exited: true
        };
      }

      return null;
    }
  }]);

  function Modal(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Modal);
    _this = (0, _possibleConstructorReturn2.default)(this, (Modal.__proto__ || (0, _getPrototypeOf.default)(Modal)).call(this, props, context));
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "dialogElement", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "mounted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "mountNode", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleRendered", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.autoFocus();

        if (_this.props.onRendered) {
          _this.props.onRendered();
        }
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var doc = (0, _ownerDocument.default)(_this.mountNode);
        var container = getContainer(_this.props.container, doc.body);

        _this.props.manager.add((0, _assertThisInitialized2.default)(_this), container);

        doc.addEventListener('keydown', _this.handleDocumentKeyDown);
        doc.addEventListener('focus', _this.enforceFocus, true);
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.manager.remove((0, _assertThisInitialized2.default)(_this));

        var doc = (0, _ownerDocument.default)(_this.mountNode);
        doc.removeEventListener('keydown', _this.handleDocumentKeyDown);
        doc.removeEventListener('focus', _this.enforceFocus);

        _this.restoreLastFocus();
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleExited", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          exited: true
        });

        _this.handleClose();
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleBackdropClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (event.target !== event.currentTarget) {
          return;
        }

        if (_this.props.onBackdropClick) {
          _this.props.onBackdropClick(event);
        }

        if (!_this.props.disableBackdropClick && _this.props.onClose) {
          _this.props.onClose(event, 'backdropClick');
        }
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleDocumentKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (!_this.isTopModal() || (0, _keycode.default)(event) !== 'esc') {
          return;
        }

        if (_this.props.onEscapeKeyDown) {
          _this.props.onEscapeKeyDown(event);
        }

        if (!_this.props.disableEscapeKeyDown && _this.props.onClose) {
          _this.props.onClose(event, 'escapeKeyDown');
        }
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "checkForFocus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_inDOM.default) {
          _this.lastFocus = (0, _activeElement.default)();
        }
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "enforceFocus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.props.disableEnforceFocus || !_this.mounted || !_this.isTopModal()) {
          return;
        }

        var currentActiveElement = (0, _activeElement.default)((0, _ownerDocument.default)(_this.mountNode));

        if (_this.dialogElement && !(0, _contains.default)(_this.dialogElement, currentActiveElement)) {
          _this.dialogElement.focus();
        }
      }
    });
    _this.state = {
      exited: !_this.props.open
    };
    return _this;
  }

  (0, _createClass2.default)(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;

      if (this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.open && this.props.open) {
        this.checkForFocus();
      }

      if (prevProps.open && !this.props.open && !getHasTransition(this.props)) {
        // Otherwise handleExited will call this.
        this.handleClose();
      } else if (!prevProps.open && this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.props.open || getHasTransition(this.props) && !this.state.exited) {
        this.handleClose();
      }
    }
  }, {
    key: "autoFocus",
    value: function autoFocus() {
      if (this.props.disableAutoFocus) {
        return;
      }

      var currentActiveElement = (0, _activeElement.default)((0, _ownerDocument.default)(this.mountNode));

      if (this.dialogElement && !(0, _contains.default)(this.dialogElement, currentActiveElement)) {
        this.lastFocus = currentActiveElement;

        if (!this.dialogElement.hasAttribute('tabIndex')) {
           true ? (0, _warning.default)(false, ['Material-UI: the modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n')) : void 0;
          this.dialogElement.setAttribute('tabIndex', -1);
        }

        this.dialogElement.focus();
      }
    }
  }, {
    key: "restoreLastFocus",
    value: function restoreLastFocus() {
      if (this.props.disableRestoreFocus) {
        return;
      }

      if (this.lastFocus) {
        // Not all elements in IE11 have a focus method.
        // Because IE11 market share is low, we accept the restore focus being broken
        // and we silent the issue.
        if (this.lastFocus.focus) {
          this.lastFocus.focus();
        }

        this.lastFocus = null;
      }
    }
  }, {
    key: "isTopModal",
    value: function isTopModal() {
      return this.props.manager.isTopModal(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          BackdropComponent = _props.BackdropComponent,
          BackdropProps = _props.BackdropProps,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          container = _props.container,
          disableAutoFocus = _props.disableAutoFocus,
          disableBackdropClick = _props.disableBackdropClick,
          disableEnforceFocus = _props.disableEnforceFocus,
          disableEscapeKeyDown = _props.disableEscapeKeyDown,
          disableRestoreFocus = _props.disableRestoreFocus,
          hideBackdrop = _props.hideBackdrop,
          keepMounted = _props.keepMounted,
          onBackdropClick = _props.onBackdropClick,
          onClose = _props.onClose,
          onEscapeKeyDown = _props.onEscapeKeyDown,
          onRendered = _props.onRendered,
          open = _props.open,
          manager = _props.manager,
          other = (0, _objectWithoutProperties2.default)(_props, ["BackdropComponent", "BackdropProps", "children", "classes", "className", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disableRestoreFocus", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open", "manager"]);
      var exited = this.state.exited;
      var hasTransition = getHasTransition(this.props);
      var childProps = {};

      if (!keepMounted && !open && (!hasTransition || exited)) {
        return null;
      } // It's a Transition like component


      if (hasTransition) {
        childProps.onExited = (0, _helpers.createChainedFunction)(this.handleExited, children.props.onExited);
      }

      if (children.props.role === undefined) {
        childProps.role = children.props.role || 'document';
      }

      if (children.props.tabIndex === undefined) {
        childProps.tabIndex = children.props.tabIndex || '-1';
      }

      return _react.default.createElement(_Portal.default, {
        ref: function ref(node) {
          _this2.mountNode = node ? node.getMountNode() : node;
        },
        container: container,
        onRendered: this.handleRendered
      }, _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(classes.root, className, (0, _defineProperty2.default)({}, classes.hidden, exited))
      }, other), hideBackdrop ? null : _react.default.createElement(BackdropComponent, (0, _extends2.default)({
        open: open,
        onClick: this.handleBackdropClick
      }, BackdropProps)), _react.default.createElement(_RootRef.default, {
        rootRef: function rootRef(node) {
          _this2.dialogElement = node;
        }
      }, _react.default.cloneElement(children, childProps))));
    }
  }]);
  return Modal;
}(_react.default.Component);

Modal.propTypes =  true ? {
  /**
   * A backdrop component. This property enables custom backdrop rendering.
   */
  BackdropComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * Properties applied to the `Backdrop` element.
   */
  BackdropProps: _propTypes.default.object,

  /**
   * A single child content element.
   */
  children: _propTypes.default.element,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: _propTypes.default.bool,

  /**
   * If `true`, clicking the backdrop will not fire any callback.
   */
  disableBackdropClick: _propTypes.default.bool,

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: _propTypes.default.bool,

  /**
   * If `true`, hitting escape will not fire any callback.
   */
  disableEscapeKeyDown: _propTypes.default.bool,

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: _propTypes.default.bool,

  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: _propTypes.default.bool,

  /**
   * Always keep the children in the DOM.
   * This property can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: _propTypes.default.bool,

  /**
   * A modal manager used to track and manage the state of open
   * Modals. This enables customizing how modals interact within a container.
   */
  manager: _propTypes.default.object,

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: _propTypes.default.func,

  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` property took effect.
   */
  onRendered: _propTypes.default.func,

  /**
   * If `true`, the modal is open.
   */
  open: _propTypes.default.bool.isRequired
} : {};
Modal.defaultProps = {
  disableAutoFocus: false,
  disableBackdropClick: false,
  disableEnforceFocus: false,
  disableEscapeKeyDown: false,
  disableRestoreFocus: false,
  hideBackdrop: false,
  keepMounted: false,
  // Modals don't open on the server so this won't conflict with concurrent requests.
  manager: new _ModalManager.default(),
  BackdropComponent: _Backdrop.default
};

var _default = (0, _withStyles.default)(styles, {
  flip: false,
  name: 'MuiModal'
})(Modal);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Modal/ModalManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _keys = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/keys.js"));

var _style = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/style/index.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/ownerDocument.js"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/util/scrollbarSize.js"));

var _isOverflowing = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/isOverflowing.js"));

var _manageAriaHidden = __webpack_require__("./node_modules/@material-ui/core/Modal/manageAriaHidden.js");

function findIndexOf(data, callback) {
  var idx = -1;
  data.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function getPaddingRight(node) {
  return parseInt((0, _style.default)(node, 'paddingRight') || 0, 10);
}

function setContainerStyle(data, container) {
  var style = {
    overflow: 'hidden'
  }; // We are only interested in the actual `style` here because we will override it.

  data.style = {
    overflow: container.style.overflow,
    paddingRight: container.style.paddingRight
  };

  if (data.overflowing) {
    var scrollbarSize = (0, _scrollbarSize.default)(); // Use computed style, here to get the real padding to add our scrollbar width.

    style.paddingRight = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

    var fixedNodes = (0, _ownerDocument.default)(container).querySelectorAll('.mui-fixed');

    for (var i = 0; i < fixedNodes.length; i += 1) {
      var paddingRight = getPaddingRight(fixedNodes[i]);
      data.prevPaddings.push(paddingRight);
      fixedNodes[i].style.paddingRight = "".concat(paddingRight + scrollbarSize, "px");
    }
  }

  (0, _keys.default)(style).forEach(function (key) {
    container.style[key] = style[key];
  });
}

function removeContainerStyle(data, container) {
  (0, _keys.default)(data.style).forEach(function (key) {
    container.style[key] = data.style[key];
  });
  var fixedNodes = (0, _ownerDocument.default)(container).querySelectorAll('.mui-fixed');

  for (var i = 0; i < fixedNodes.length; i += 1) {
    fixedNodes[i].style.paddingRight = "".concat(data.prevPaddings[i], "px");
  }
}
/**
 * @ignore - do not document.
 *
 * Proper state managment for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class
 * Used by the Modal to ensure proper styling of containers.
 */


var ModalManager =
/*#__PURE__*/
function () {
  function ModalManager() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, ModalManager);
    var _options$hideSiblingN = options.hideSiblingNodes,
        hideSiblingNodes = _options$hideSiblingN === void 0 ? true : _options$hideSiblingN,
        _options$handleContai = options.handleContainerOverflow,
        handleContainerOverflow = _options$handleContai === void 0 ? true : _options$handleContai;
    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow; // this.modals[modalIdx] = modal

    this.modals = []; // this.containers[containerIdx] = container

    this.containers = []; // this.data[containerIdx] = {
    //   modals: [],
    // }

    this.data = [];
  }

  (0, _createClass2.default)(ModalManager, [{
    key: "add",
    value: function add(modal, container) {
      var modalIdx = this.modals.indexOf(modal);

      if (modalIdx !== -1) {
        return modalIdx;
      }

      modalIdx = this.modals.length;
      this.modals.push(modal);

      if (this.hideSiblingNodes) {
        (0, _manageAriaHidden.hideSiblings)(container, modal.mountNode);
      }

      var containerIdx = this.containers.indexOf(container);

      if (containerIdx !== -1) {
        this.data[containerIdx].modals.push(modal);
        return modalIdx;
      }

      var data = {
        modals: [modal],
        overflowing: (0, _isOverflowing.default)(container),
        prevPaddings: []
      };

      if (this.handleContainerOverflow) {
        setContainerStyle(data, container);
      }

      this.containers.push(container);
      this.data.push(data);
      return modalIdx;
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIdx = this.modals.indexOf(modal);

      if (modalIdx === -1) {
        return modalIdx;
      }

      var containerIdx = findIndexOf(this.data, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var data = this.data[containerIdx];
      var container = this.containers[containerIdx];
      data.modals.splice(data.modals.indexOf(modal), 1);
      this.modals.splice(modalIdx, 1); // If that was the last modal in a container, clean up the container.

      if (data.modals.length === 0) {
        if (this.handleContainerOverflow) {
          removeContainerStyle(data, container);
        }

        if (this.hideSiblingNodes) {
          (0, _manageAriaHidden.showSiblings)(container, modal.mountNode);
        }

        this.containers.splice(containerIdx, 1);
        this.data.splice(containerIdx, 1);
      } else if (this.hideSiblingNodes) {
        // Otherwise make sure the next top modal is visible to a screan reader.
        (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
      }

      return modalIdx;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
    }
  }]);
  return ModalManager;
}();

var _default = ModalManager;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Modal/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Modal.default;
  }
});
Object.defineProperty(exports, "ModalManager", {
  enumerable: true,
  get: function get() {
    return _ModalManager.default;
  }
});

var _Modal = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/Modal.js"));

var _ModalManager = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/ModalManager.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Modal/isOverflowing.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBody = isBody;
exports.default = isOverflowing;

var _isWindow = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/query/isWindow.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/ownerDocument.js"));

var _ownerWindow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerWindow.js"));

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
} // Do we have a scroll bar?


function isOverflowing(container) {
  var doc = (0, _ownerDocument.default)(container);
  var win = (0, _ownerWindow.default)(doc);
  /* istanbul ignore next */

  if (!(0, _isWindow.default)(doc) && !isBody(container)) {
    return container.scrollHeight > container.clientHeight;
  } // Takes in account potential non zero margin on the body.


  var style = win.getComputedStyle(doc.body);
  var marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
  var marginRight = parseInt(style.getPropertyValue('margin-right'), 10);
  return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/Modal/manageAriaHidden.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;
var BLACKLIST = ['template', 'script', 'style'];

function isHidable(node) {
  return node.nodeType === 1 && BLACKLIST.indexOf(node.tagName.toLowerCase()) === -1;
}

function siblings(container, mount, callback) {
  mount = [].concat(mount); // eslint-disable-line no-param-reassign

  [].forEach.call(container.children, function (node) {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      callback(node);
    }
  });
}

function ariaHidden(show, node) {
  if (!node) {
    return;
  }

  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/Paper/Paper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return (0, _objectSpread2.default)({
    root: {
      backgroundColor: theme.palette.background.paper
    },
    rounded: {
      borderRadius: 2
    }
  }, elevations);
};

exports.styles = styles;

function Paper(props) {
  var classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      square = props.square,
      elevation = props.elevation,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "square", "elevation"]);
   true ? (0, _warning.default)(elevation >= 0 && elevation < 25, "Material-UI: this elevation `".concat(elevation, "` is not implemented.")) : void 0;
  var className = (0, _classnames.default)(classes.root, classes["elevation".concat(elevation)], (0, _defineProperty2.default)({}, classes.rounded, !square), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

Paper.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It's accepting values between 0 and 24 inclusive.
   */
  elevation: _propTypes.default.number,

  /**
   * If `true`, rounded corners are disabled.
   */
  square: _propTypes.default.bool
} : {};
Paper.defaultProps = {
  component: 'div',
  elevation: 2,
  square: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiPaper'
})(Paper);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Paper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Paper.default;
  }
});

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Paper/Paper.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Popover/Popover.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

var _contains = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/query/contains.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/ownerDocument.js"));

var _debounce = _interopRequireDefault(__webpack_require__("./node_modules/lodash/debounce.js"));

var _reactEventListener = _interopRequireDefault(__webpack_require__("./node_modules/react-event-listener/lib/index.js"));

var _ownerWindow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerWindow.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Modal = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/index.js"));

var _Grow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Grow/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Paper/index.js"));

// @inheritedComponent Modal
function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentNode;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var styles = {
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100vw - 32px)',
    maxHeight: 'calc(100vh - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none'
  }
};
exports.styles = styles;

var Popover =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Popover, _React$Component);

  function Popover() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Popover.__proto__ || (0, _getPrototypeOf.default)(Popover)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "componentWillUnmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.handleResize.cancel();
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "setPositioningStyles", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(element) {
        if (element && element.style) {
          var positioning = _this.getPositioningStyle(element);

          if (positioning.top !== null) {
            element.style.top = positioning.top;
          }

          if (positioning.left !== null) {
            element.style.left = positioning.left;
          }

          element.style.transformOrigin = positioning.transformOrigin;
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "getPositioningStyle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(element) {
        var _this$props = _this.props,
            anchorEl = _this$props.anchorEl,
            anchorReference = _this$props.anchorReference,
            marginThreshold = _this$props.marginThreshold; // Check if the parent has requested anchoring on an inner content node

        var contentAnchorOffset = _this.getContentAnchorOffset(element);

        var elemRect = {
          width: element.clientWidth,
          height: element.clientHeight
        }; // Get the transform origin point on the element itself

        var transformOrigin = _this.getTransformOrigin(elemRect, contentAnchorOffset);

        if (anchorReference === 'none') {
          return {
            top: null,
            left: null,
            transformOrigin: getTransformOriginValue(transformOrigin)
          };
        } // Get the offset of of the anchoring element


        var anchorOffset = _this.getAnchorOffset(contentAnchorOffset); // Calculate element positioning


        var top = anchorOffset.top - transformOrigin.vertical;
        var left = anchorOffset.left - transformOrigin.horizontal;
        var bottom = top + elemRect.height;
        var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

        var containerWindow = (0, _ownerWindow.default)(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

        var heightThreshold = containerWindow.innerHeight - marginThreshold;
        var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

        if (top < marginThreshold) {
          var diff = top - marginThreshold;
          top -= diff;
          transformOrigin.vertical += diff;
        } else if (bottom > heightThreshold) {
          var _diff = bottom - heightThreshold;

          top -= _diff;
          transformOrigin.vertical += _diff;
        }

         true ? (0, _warning.default)(elemRect.height < heightThreshold || !elemRect.height || !heightThreshold, ['Material-UI: the popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n')) : void 0; // Check if the horizontal axis needs shifting

        if (left < marginThreshold) {
          var _diff2 = left - marginThreshold;

          left -= _diff2;
          transformOrigin.horizontal += _diff2;
        } else if (right > widthThreshold) {
          var _diff3 = right - widthThreshold;

          left -= _diff3;
          transformOrigin.horizontal += _diff3;
        }

        return {
          top: "".concat(top, "px"),
          left: "".concat(left, "px"),
          transformOrigin: getTransformOriginValue(transformOrigin)
        };
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "transitionEl", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleGetOffsetTop", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: getOffsetTop
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleGetOffsetLeft", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: getOffsetLeft
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(element) {
        if (_this.props.onEnter) {
          _this.props.onEnter(element);
        }

        _this.setPositioningStyles(element);
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleResize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (0, _debounce.default)(function () {
        var element = _reactDom.default.findDOMNode(_this.transitionEl);

        _this.setPositioningStyles(element);
      }, 166)
    }), _temp));
  }

  (0, _createClass2.default)(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.action) {
        this.props.action({
          updatePosition: this.handleResize
        });
      }
    }
  }, {
    key: "getAnchorOffset",
    // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)
    value: function getAnchorOffset(contentAnchorOffset) {
      var _props = this.props,
          anchorEl = _props.anchorEl,
          anchorOrigin = _props.anchorOrigin,
          anchorReference = _props.anchorReference,
          anchorPosition = _props.anchorPosition;

      if (anchorReference === 'anchorPosition') {
         true ? (0, _warning.default)(anchorPosition, 'Material-UI: you need to provide a `anchorPosition` property when using ' + '<Popover anchorReference="anchorPosition" />.') : void 0;
        return anchorPosition;
      } // If an anchor element wasn't provided, just use the parent body element of this Popover


      var anchorElement = getAnchorEl(anchorEl) || (0, _ownerDocument.default)(_reactDom.default.findDOMNode(this.transitionEl)).body;
      var anchorRect = anchorElement.getBoundingClientRect();
      var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
      return {
        top: anchorRect.top + this.handleGetOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + this.handleGetOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    } // Returns the vertical offset of inner content to anchor the transform on if provided

  }, {
    key: "getContentAnchorOffset",
    value: function getContentAnchorOffset(element) {
      var _props2 = this.props,
          getContentAnchorEl = _props2.getContentAnchorEl,
          anchorReference = _props2.anchorReference;
      var contentAnchorOffset = 0;

      if (getContentAnchorEl && anchorReference === 'anchorEl') {
        var contentAnchorEl = getContentAnchorEl(element);

        if (contentAnchorEl && (0, _contains.default)(element, contentAnchorEl)) {
          var scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
        } // != the default value


         true ? (0, _warning.default)(this.props.anchorOrigin.vertical === 'top', ['Material-UI: you can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` property to the popover component.', 'Only use one of the two properties.', 'Set `getContentAnchorEl` to null or left `anchorOrigin.vertical` unchanged.'].join('\n')) : void 0;
      }

      return contentAnchorOffset;
    } // Return the base transform origin using the element
    // and taking the content anchor offset into account if in use

  }, {
    key: "getTransformOrigin",
    value: function getTransformOrigin(elemRect) {
      var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var transformOrigin = this.props.transformOrigin;
      return {
        vertical: this.handleGetOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: this.handleGetOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }
  }, {
    key: "render",
    // Corresponds to 10 frames at 60 Hz.
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          action = _props3.action,
          anchorEl = _props3.anchorEl,
          anchorOrigin = _props3.anchorOrigin,
          anchorPosition = _props3.anchorPosition,
          anchorReference = _props3.anchorReference,
          children = _props3.children,
          classes = _props3.classes,
          containerProp = _props3.container,
          elevation = _props3.elevation,
          getContentAnchorEl = _props3.getContentAnchorEl,
          marginThreshold = _props3.marginThreshold,
          onEnter = _props3.onEnter,
          onEntered = _props3.onEntered,
          onEntering = _props3.onEntering,
          onExit = _props3.onExit,
          onExited = _props3.onExited,
          onExiting = _props3.onExiting,
          open = _props3.open,
          PaperProps = _props3.PaperProps,
          role = _props3.role,
          transformOrigin = _props3.transformOrigin,
          TransitionComponent = _props3.TransitionComponent,
          transitionDuration = _props3.transitionDuration,
          TransitionProps = _props3.TransitionProps,
          other = (0, _objectWithoutProperties2.default)(_props3, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "role", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]); // If the container prop is provided, use that
      // If the anchorEl prop is provided, use its parent body element as the container
      // If neither are provided let the Modal take care of choosing the container

      var container = containerProp || (anchorEl ? (0, _ownerDocument.default)(getAnchorEl(anchorEl)).body : undefined);
      return _react.default.createElement(_Modal.default, (0, _extends2.default)({
        container: container,
        open: open,
        BackdropProps: {
          invisible: true
        }
      }, other), _react.default.createElement(TransitionComponent, (0, _extends2.default)({
        appear: true,
        "in": open,
        onEnter: this.handleEnter,
        onEntered: onEntered,
        onEntering: onEntering,
        onExit: onExit,
        onExited: onExited,
        onExiting: onExiting,
        role: role,
        ref: function ref(node) {
          _this2.transitionEl = node;
        }
      }, TransitionProps), _react.default.createElement(_Paper.default, (0, _extends2.default)({
        className: classes.paper,
        elevation: elevation
      }, PaperProps), _react.default.createElement(_reactEventListener.default, {
        target: "window",
        onResize: this.handleResize
      }), children)));
    }
  }]);
  return Popover;
}(_react.default.Component);

Popover.propTypes =  true ? {
  /**
   * This is callback property. It's called by the component on mount.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports updatePosition() action.
   *
   * @param {object} actions This object contains all posible actions
   * that can be triggered programmatically.
   */
  action: _propTypes.default.func,

  /**
   * This is the DOM element, or a function that returns the DOM element,
   * that may be used to set the position of the popover.
   */
  anchorEl: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: _propTypes.default.shape({
    horizontal: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['left', 'center', 'right'])]),
    vertical: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['top', 'center', 'bottom'])])
  }),

  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: _propTypes.default.shape({
    top: _propTypes.default.number,
    left: _propTypes.default.number
  }),

  /*
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: _propTypes.default.oneOf(['anchorEl', 'anchorPosition', 'none']),

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * The elevation of the popover.
   */
  elevation: _propTypes.default.number,

  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` property.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: _propTypes.default.func,

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: _propTypes.default.number,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired before the component is entering.
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired when the component has entered.
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired when the component is entering.
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired before the component is exiting.
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired when the component has exited.
   */
  onExited: _propTypes.default.func,

  /**
   * Callback fired when the component is exiting.
   */
  onExiting: _propTypes.default.func,

  /**
   * If `true`, the popover is visible.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: _propTypes.default.object,

  /**
   * @ignore
   */
  role: _propTypes.default.string,

  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: _propTypes.default.shape({
    horizontal: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['left', 'center', 'right'])]),
    vertical: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['top', 'center', 'bottom'])])
  }),

  /**
   * Transition component.
   */
  TransitionComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])]),

  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: _propTypes.default.object
} : {};
Popover.defaultProps = {
  anchorReference: 'anchorEl',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  elevation: 8,
  marginThreshold: 16,
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  TransitionComponent: _Grow.default,
  transitionDuration: 'auto'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiPopover'
})(Popover);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Popover/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Popover.default;
  }
});

var _Popover = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Popover/Popover.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Portal/Portal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/ownerDocument.js"));

var _exactProp = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/exactProp.js"));

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom.default.findDOMNode(container) || defaultContainer;
}

function getOwnerDocument(element) {
  return (0, _ownerDocument.default)(_reactDom.default.findDOMNode(element));
}
/**
 * This component shares many concepts with
 * [react-overlays](https://react-bootstrap.github.io/react-overlays/#portals)
 * But has been forked in order to fix some bugs, reduce the number of dependencies
 * and take the control of our destiny.
 */


var Portal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Portal, _React$Component);

  function Portal() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Portal.__proto__ || (0, _getPrototypeOf.default)(Portal)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "getMountNode", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.mountNode;
      }
    }), _temp));
  }

  (0, _createClass2.default)(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setContainer(this.props.container);
      this.forceUpdate(this.props.onRendered);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.container !== this.props.container) {
        this.setContainer(this.props.container);
        this.forceUpdate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mountNode = null;
    }
  }, {
    key: "setContainer",
    value: function setContainer(container) {
      this.mountNode = getContainer(container, getOwnerDocument(this).body);
    }
    /**
     * @public
     */

  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return this.mountNode ? _reactDom.default.createPortal(children, this.mountNode) : null;
    }
  }]);
  return Portal;
}(_react.default.Component);

Portal.propTypes =  true ? {
  /**
   * The children to render into the `container`.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * Callback fired once the children has been mounted into the `container`.
   */
  onRendered: _propTypes.default.func
} : {};
Portal.propTypes =  true ? (0, _exactProp.default)(Portal.propTypes, 'Portal') : {};
var _default = Portal;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Portal/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Portal.default;
  }
});

var _Portal = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Portal/Portal.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/RootRef/RootRef.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

/**
 * Helper component to allow attaching a ref to a
 * child element that may not accept refs (functional component).
 * It's higly inspired by https://github.com/facebook/react/issues/11401#issuecomment-340543801
 */
var RootRef =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RootRef, _React$Component);

  function RootRef() {
    (0, _classCallCheck2.default)(this, RootRef);
    return (0, _possibleConstructorReturn2.default)(this, (RootRef.__proto__ || (0, _getPrototypeOf.default)(RootRef)).apply(this, arguments));
  }

  (0, _createClass2.default)(RootRef, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.rootRef(_reactDom.default.findDOMNode(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.rootRef(null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return RootRef;
}(_react.default.Component);

RootRef.propTypes =  true ? {
  children: _propTypes.default.element.isRequired,
  rootRef: _propTypes.default.func.isRequired
} : {};
var _default = RootRef;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/RootRef/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _RootRef.default;
  }
});

var _RootRef = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/RootRef/RootRef.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Slide/Slide.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTranslateValue = setTranslateValue;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _reactEventListener = _interopRequireDefault(__webpack_require__("./node_modules/react-event-listener/lib/index.js"));

var _debounce = _interopRequireDefault(__webpack_require__("./node_modules/lodash/debounce.js"));

var _Transition = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/Transition.js"));

var _ownerWindow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerWindow.js"));

var _withTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withTheme.js"));

var _transitions = __webpack_require__("./node_modules/@material-ui/core/styles/transitions.js");

var _utils = __webpack_require__("./node_modules/@material-ui/core/transitions/utils.js");

// @inheritedComponent Transition
var GUTTER = 24; // Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `translate3d(0, 0, 0)`.`

function getTranslateValue(props, node) {
  var direction = props.direction;
  var rect = node.getBoundingClientRect();
  var transform;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    var computedStyle = (0, _ownerWindow.default)(node).getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  var offsetX = 0;
  var offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    var transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    return "translateX(100vw) translateX(-".concat(rect.left - offsetX, "px)");
  } else if (direction === 'right') {
    return "translateX(-".concat(rect.left + rect.width + GUTTER - offsetX, "px)");
  } else if (direction === 'up') {
    return "translateY(100vh) translateY(-".concat(rect.top - offsetY, "px)");
  } // direction === 'down'


  return "translateY(-".concat(rect.top + rect.height + GUTTER - offsetY, "px)");
}

function setTranslateValue(props, node) {
  var transform = getTranslateValue(props, node);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
/**
 * The Slide transition is used by the [Snackbar](/demos/snackbars) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */


var Slide =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Slide, _React$Component);

  function Slide() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Slide);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Slide.__proto__ || (0, _getPrototypeOf.default)(Slide)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "mounted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "transition", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleResize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (0, _debounce.default)(function () {
        // Skip configuration where the position is screen size invariant.
        if (_this.props.in || _this.props.direction === 'down' || _this.props.direction === 'right') {
          return;
        }

        var node = _reactDom.default.findDOMNode(_this.transition);

        if (node) {
          setTranslateValue(_this.props, node);
        }
      }, 166)
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        setTranslateValue(_this.props, node);
        (0, _utils.reflow)(node);

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleEntering", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        var theme = _this.props.theme;
        var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
          mode: 'enter'
        });
        node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0, _objectSpread2.default)({}, transitionProps, {
          easing: theme.transitions.easing.easeOut
        }));
        node.style.transition = theme.transitions.create('transform', (0, _objectSpread2.default)({}, transitionProps, {
          easing: theme.transitions.easing.easeOut
        }));
        node.style.webkitTransform = 'translate(0, 0)';
        node.style.transform = 'translate(0, 0)';

        if (_this.props.onEntering) {
          _this.props.onEntering(node);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleExit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        var theme = _this.props.theme;
        var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
          mode: 'exit'
        });
        node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0, _objectSpread2.default)({}, transitionProps, {
          easing: theme.transitions.easing.sharp
        }));
        node.style.transition = theme.transitions.create('transform', (0, _objectSpread2.default)({}, transitionProps, {
          easing: theme.transitions.easing.sharp
        }));
        setTranslateValue(_this.props, node);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleExited", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        // No need for transitions when the component is hidden
        node.style.webkitTransition = '';
        node.style.transition = '';

        if (_this.props.onExited) {
          _this.props.onExited(node);
        }
      }
    }), _temp));
  }

  (0, _createClass2.default)(Slide, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // state.mounted handle SSR, once the component is mounted, we need
      // to properly hide it.
      if (!this.props.in) {
        // We need to set initial translate values of transition element
        // otherwise component will be shown when in=false.
        this.updatePosition();
      }

      this.mounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.direction !== this.props.direction && !this.props.in) {
        // We need to update the position of the drawer when the direction change and
        // when it's hidden.
        this.updatePosition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.cancel();
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      var node = _reactDom.default.findDOMNode(this.transition);

      if (node) {
        node.style.visibility = 'inherit';
        setTranslateValue(this.props, node);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExited = _props.onExited,
          styleProp = _props.style,
          theme = _props.theme,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "onEnter", "onEntering", "onExit", "onExited", "style", "theme"]);
      var style = {}; // We use this state to handle the server-side rendering.
      // We don't know the width of the children ahead of time.
      // We need to render it.

      if (!this.props.in && !this.mounted) {
        style.visibility = 'hidden';
      }

      style = (0, _objectSpread2.default)({}, style, styleProp, _react.default.isValidElement(children) ? children.props.style : {});
      return _react.default.createElement(_reactEventListener.default, {
        target: "window",
        onResize: this.handleResize
      }, _react.default.createElement(_Transition.default, (0, _extends2.default)({
        onEnter: this.handleEnter,
        onEntering: this.handleEntering,
        onExit: this.handleExit,
        onExited: this.handleExited,
        appear: true,
        style: style,
        ref: function ref(node) {
          _this2.transition = node;
        }
      }, other), children));
    }
  }]);
  return Slide;
}(_react.default.Component);

Slide.propTypes =  true ? {
  /**
   * A single child content element.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * Direction the child node will enter from.
   */
  direction: _propTypes.default.oneOf(['left', 'right', 'up', 'down']),

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntering: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  onExited: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : {};
Slide.defaultProps = {
  direction: 'down',
  timeout: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

var _default = (0, _withTheme.default)()(Slide);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Slide/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Slide.default;
  }
});

var _Slide = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Slide/Slide.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/SvgIcon/SvgIcon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var styles = function styles(theme) {
  return {
    root: {
      userSelect: 'none',
      fontSize: 24,
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorError: {
      color: theme.palette.error.main
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    }
  };
};

exports.styles = styles;

function SvgIcon(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      nativeColor = props.nativeColor,
      titleAccess = props.titleAccess,
      viewBox = props.viewBox,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "nativeColor", "titleAccess", "viewBox"]);
  var className = (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'inherit'), classNameProp);
  return _react.default.createElement("svg", (0, _extends2.default)({
    className: className,
    focusable: "false",
    viewBox: viewBox,
    color: nativeColor,
    "aria-hidden": titleAccess ? 'false' : 'true'
  }, other), titleAccess ? _react.default.createElement("title", null, titleAccess) : null, children);
}

SvgIcon.propTypes =  true ? {
  /**
   * Node passed into the SVG element.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `nativeColor` property to apply a color attribute to the SVG element.
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),

  /**
   * Applies a color attribute to the SVG element.
   */
  nativeColor: _propTypes.default.string,

  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: _propTypes.default.string,

  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: _propTypes.default.string
} : {};
SvgIcon.defaultProps = {
  color: 'inherit',
  viewBox: '0 0 24 24'
};
SvgIcon.muiName = 'SvgIcon';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiSvgIcon'
})(SvgIcon);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/SvgIcon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _SvgIcon.default;
  }
});

var _SvgIcon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/SvgIcon/SvgIcon.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Switch/Switch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var _SwitchBase = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/internal/SwitchBase.js"));

var styles = function styles(theme) {
  return {
    root: {
      display: 'inline-flex',
      width: 62,
      position: 'relative',
      flexShrink: 0,
      // For correct alignment with the text.
      verticalAlign: 'middle'
    },
    icon: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },
    iconChecked: {
      boxShadow: theme.shadows[2]
    },
    switchBase: {
      zIndex: 1,
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    checked: {
      transform: 'translateX(14px)',
      '& + $bar': {
        opacity: 0.5
      }
    },
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '& + $bar': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '& + $bar': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    disabled: {
      '& + $bar': {
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      },
      '& $icon': {
        boxShadow: theme.shadows[1]
      },
      '&$switchBase': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
        '& + $bar': {
          backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
        }
      }
    },
    bar: {
      borderRadius: 7,
      display: 'block',
      position: 'absolute',
      width: 34,
      height: 14,
      top: '50%',
      left: '50%',
      marginTop: -7,
      marginLeft: -17,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    }
  };
};

exports.styles = styles;

function Switch(props) {
  var classes = props.classes,
      className = props.className,
      color = props.color,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "color"]);
  return _react.default.createElement("span", {
    className: (0, _classnames.default)(classes.root, className)
  }, _react.default.createElement(_SwitchBase.default, (0, _extends2.default)({
    icon: _react.default.createElement("span", {
      className: classes.icon
    }),
    classes: {
      root: (0, _classnames.default)(classes.switchBase, classes["color".concat((0, _helpers.capitalize)(color))]),
      checked: classes.checked,
      disabled: classes.disabled
    },
    checkedIcon: _react.default.createElement("span", {
      className: (0, _classnames.default)(classes.icon, classes.iconChecked)
    })
  }, other)), _react.default.createElement("span", {
    className: classes.bar
  }));
}

Switch.propTypes =  true ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['primary', 'secondary', 'default']),

  /**
   * @ignore
   */
  defaultChecked: _propTypes.default.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes.default.node,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.func,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes.default.func,

  /**
   * The input component property `type`.
   */
  type: _propTypes.default.string,

  /**
   * The value of the component.
   */
  value: _propTypes.default.string
} : {};
Switch.defaultProps = {
  color: 'secondary'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiSwitch'
})(Switch);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Switch/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Switch.default;
  }
});

var _Switch = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Switch/Switch.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Toolbar/Toolbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  return {
    root: (0, _objectSpread2.default)({}, theme.mixins.toolbar, {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }),
    gutters: theme.mixins.gutters()
  };
};

exports.styles = styles;

function Toolbar(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      disableGutters = props.disableGutters,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disableGutters"]);
  var className = (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.gutters, !disableGutters), classNameProp);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: className
  }, other), children);
}

Toolbar.propTypes =  true ? {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, disables gutter padding.
   */
  disableGutters: _propTypes.default.bool
} : {};
Toolbar.defaultProps = {
  disableGutters: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiToolbar'
})(Toolbar);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Toolbar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Toolbar.default;
  }
});

var _Toolbar = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Toolbar/Toolbar.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Typography/Typography.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var styles = function styles(theme) {
  return {
    root: {
      display: 'block',
      margin: 0
    },
    display4: theme.typography.display4,
    display3: theme.typography.display3,
    display2: theme.typography.display2,
    display1: theme.typography.display1,
    headline: theme.typography.headline,
    title: theme.typography.title,
    subheading: theme.typography.subheading,
    body2: theme.typography.body2,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    button: theme.typography.button,
    alignLeft: {
      textAlign: 'left'
    },
    alignCenter: {
      textAlign: 'center'
    },
    alignRight: {
      textAlign: 'right'
    },
    alignJustify: {
      textAlign: 'justify'
    },
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    gutterBottom: {
      marginBottom: '0.35em'
    },
    paragraph: {
      marginBottom: theme.spacing.unit * 2
    },
    colorInherit: {
      color: 'inherit'
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },
    colorError: {
      color: theme.palette.error.main
    }
  };
};

exports.styles = styles;

function Typography(props) {
  var _classNames;

  var align = props.align,
      classes = props.classes,
      classNameProp = props.className,
      componentProp = props.component,
      color = props.color,
      gutterBottom = props.gutterBottom,
      headlineMapping = props.headlineMapping,
      noWrap = props.noWrap,
      paragraph = props.paragraph,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["align", "classes", "className", "component", "color", "gutterBottom", "headlineMapping", "noWrap", "paragraph", "variant"]);
  var className = (0, _classnames.default)(classes.root, classes[variant], (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'default'), (0, _defineProperty2.default)(_classNames, classes.noWrap, noWrap), (0, _defineProperty2.default)(_classNames, classes.gutterBottom, gutterBottom), (0, _defineProperty2.default)(_classNames, classes.paragraph, paragraph), (0, _defineProperty2.default)(_classNames, classes["align".concat((0, _helpers.capitalize)(align))], align !== 'inherit'), _classNames), classNameProp);
  var Component = componentProp || (paragraph ? 'p' : headlineMapping[variant]) || 'span';
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

Typography.propTypes =  true ? {
  /**
   * Set the text-align on the component.
   */
  align: _propTypes.default.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: _propTypes.default.bool,

  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, h1 to h6. If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   */
  headlineMapping: _propTypes.default.object,

  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: _propTypes.default.bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: _propTypes.default.bool,

  /**
   * Applies the theme typography styles.
   */
  variant: _propTypes.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button'])
} : {};
Typography.defaultProps = {
  align: 'inherit',
  color: 'default',
  gutterBottom: false,
  headlineMapping: {
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subheading: 'h3',
    body2: 'aside',
    body1: 'p'
  },
  noWrap: false,
  paragraph: false,
  variant: 'body1'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTypography'
})(Typography);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Typography/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Typography.default;
  }
});

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Typography/Typography.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var common = {
  black: '#000',
  white: '#fff'
};
var _default = common;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/grey.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
var _default = grey;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/indigo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
var _default = indigo;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/pink.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
var _default = pink;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/red.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
var _default = red;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/SwitchBase.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/IconButton/index.js"));

// @inheritedComponent IconButton
var styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'none',
    '&:hover': {
      // Disable the hover effect for the IconButton.
      backgroundColor: 'transparent'
    }
  },
  checked: {},
  disabled: {},
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  }
};
exports.styles = styles;

var SwitchBase =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SwitchBase, _React$Component);

  function SwitchBase(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, SwitchBase);
    _this = (0, _possibleConstructorReturn2.default)(this, (SwitchBase.__proto__ || (0, _getPrototypeOf.default)(SwitchBase)).call(this, props, context));
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "input", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "isControlled", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "handleInputChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var checked = event.target.checked;

        if (!_this.isControlled) {
          _this.setState({
            checked: checked
          });
        }

        if (_this.props.onChange) {
          _this.props.onChange(event, checked);
        }
      }
    });
    _this.isControlled = props.checked != null;

    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.checked = props.defaultChecked !== undefined ? props.defaultChecked : false;
    }

    return _this;
  }

  (0, _createClass2.default)(SwitchBase, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          checkedProp = _props.checked,
          checkedIcon = _props.checkedIcon,
          classes = _props.classes,
          classNameProp = _props.className,
          disabledProp = _props.disabled,
          icon = _props.icon,
          id = _props.id,
          inputProps = _props.inputProps,
          inputRef = _props.inputRef,
          name = _props.name,
          onChange = _props.onChange,
          tabIndex = _props.tabIndex,
          type = _props.type,
          value = _props.value,
          other = (0, _objectWithoutProperties2.default)(_props, ["checked", "checkedIcon", "classes", "className", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onChange", "tabIndex", "type", "value"]);
      var muiFormControl = this.context.muiFormControl;
      var disabled = disabledProp;

      if (muiFormControl) {
        if (typeof disabled === 'undefined') {
          disabled = muiFormControl.disabled;
        }
      }

      var checked = this.isControlled ? checkedProp : this.state.checked;
      var hasLabelFor = type === 'checkbox' || type === 'radio';
      return _react.default.createElement(_IconButton.default, (0, _extends2.default)({
        component: "span",
        className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.checked, checked), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp),
        disabled: disabled,
        tabIndex: null,
        role: undefined
      }, other), checked ? checkedIcon : icon, _react.default.createElement("input", (0, _extends2.default)({
        id: hasLabelFor && id,
        type: type,
        name: name,
        checked: checked,
        onChange: this.handleInputChange,
        className: classes.input,
        disabled: disabled,
        tabIndex: tabIndex,
        value: value,
        ref: inputRef
      }, inputProps)));
    }
  }]);
  return SwitchBase;
}(_react.default.Component); // NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.


SwitchBase.propTypes =  true ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  defaultChecked: _propTypes.default.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes.default.node.isRequired,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate: _propTypes.default.bool,

  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: _propTypes.default.node,

  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.func,

  /*
   * @ignore
   */
  name: _propTypes.default.string,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * The input component property `type`.
   */
  type: _propTypes.default.string,

  /**
   * The value of the component.
   */
  value: _propTypes.default.string
} : {};
SwitchBase.defaultProps = {
  type: 'checkbox'
};
SwitchBase.contextTypes = {
  muiFormControl: _propTypes.default.object
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiSwitchBase'
})(SwitchBase);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/MuiThemeProvider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

var _brcast = _interopRequireDefault(__webpack_require__("./node_modules/brcast/dist/brcast.es.js"));

var _themeListener = _interopRequireWildcard(__webpack_require__("./node_modules/@material-ui/core/styles/themeListener.js"));

var _exactProp = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/exactProp.js"));

/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
var MuiThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MuiThemeProvider, _React$Component);

  function MuiThemeProvider(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, MuiThemeProvider);
    _this = (0, _possibleConstructorReturn2.default)(this, (MuiThemeProvider.__proto__ || (0, _getPrototypeOf.default)(MuiThemeProvider)).call(this, props, context)); // Get the outer theme from the context, can be null

    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "broadcast", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (0, _brcast.default)()
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "unsubscribeId", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "outerTheme", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    _this.outerTheme = _themeListener.default.initial(context); // Propagate the theme so it can be accessed by the children

    _this.broadcast.setState(_this.mergeOuterLocalTheme(_this.props.theme));

    return _this;
  }

  (0, _createClass2.default)(MuiThemeProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _ref;

      var _props = this.props,
          sheetsManager = _props.sheetsManager,
          disableStylesGeneration = _props.disableStylesGeneration;
      var muiThemeProviderOptions = this.context.muiThemeProviderOptions || {};

      if (sheetsManager !== undefined) {
        muiThemeProviderOptions.sheetsManager = sheetsManager;
      }

      if (disableStylesGeneration !== undefined) {
        muiThemeProviderOptions.disableStylesGeneration = disableStylesGeneration;
      }

      return _ref = {}, (0, _defineProperty2.default)(_ref, _themeListener.CHANNEL, this.broadcast), (0, _defineProperty2.default)(_ref, "muiThemeProviderOptions", muiThemeProviderOptions), _ref;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Subscribe on the outer theme, if present
      this.unsubscribeId = _themeListener.default.subscribe(this.context, function (outerTheme) {
        _this2.outerTheme = outerTheme; // Forward the parent theme update to the children

        _this2.broadcast.setState(_this2.mergeOuterLocalTheme(_this2.props.theme));
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Propagate a local theme update
      if (this.props.theme !== prevProps.theme) {
        this.broadcast.setState(this.mergeOuterLocalTheme(this.props.theme));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribeId !== null) {
        _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
      }
    }
  }, {
    key: "mergeOuterLocalTheme",
    // Simple merge between the outer theme and the local theme
    value: function mergeOuterLocalTheme(localTheme) {
      // To support composition of theme.
      if (typeof localTheme === 'function') {
         true ? (0, _warning.default)(this.outerTheme, ['Material-UI: you are providing a theme function property ' + 'to the MuiThemeProvider component:', '<MuiThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n')) : void 0;
        return localTheme(this.outerTheme);
      }

      if (!this.outerTheme) {
        return localTheme;
      }

      return (0, _objectSpread2.default)({}, this.outerTheme, localTheme);
    }
  }, {
    key: "render",
    value: function render() {
      // TODO move the sheetsManager property to a different component.
      // warning(
      //   typeof window !== 'undefined' || this.props.sheetsManager,
      //   [
      //     'Material-UI: you need to provide a sheetsManager to the MuiThemeProvider ' +
      //       'when rendering on the server.',
      //     'If you do not, you might experience a memory leak',
      //   ].join('\n'),
      // );
      return this.props.children;
    }
  }]);
  return MuiThemeProvider;
}(_react.default.Component);

MuiThemeProvider.propTypes =  true ? {
  /**
   * You can only provide a single element with react@15, a node with react@16.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server side.
   * You can significantly speed up the traversal with this property.
   */
  disableStylesGeneration: _propTypes.default.bool,

  /**
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: _propTypes.default.object,

  /**
   * A theme object.
   */
  theme: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]).isRequired
} : {};
MuiThemeProvider.propTypes =  true ? (0, _exactProp.default)(MuiThemeProvider.propTypes, 'MuiThemeProvider') : {};
MuiThemeProvider.childContextTypes = (0, _objectSpread2.default)({}, _themeListener.default.contextTypes, {
  muiThemeProviderOptions: _propTypes.default.object
});
MuiThemeProvider.contextTypes = (0, _objectSpread2.default)({}, _themeListener.default.contextTypes, {
  muiThemeProviderOptions: _propTypes.default.object
});
var _default = MuiThemeProvider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/colorManipulator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertHexToRGB = convertHexToRGB;
exports.decomposeColor = decomposeColor;
exports.recomposeColor = recomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.darken = darken;
exports.lighten = lighten;

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

//  weak

/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
   true ? (0, _warning.default)(value >= min && value <= max, "Material-UI: the value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "].")) : void 0;

  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function convertHexToRGB(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb(".concat(colors.map(function (n) {
    return parseInt(n, 16);
  }).join(', '), ")") : '';
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */


function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  if (true) {
    if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
      throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
    }
  }

  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */


function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  }

  if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(color.type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */


function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */


function getLuminance(color) {
  var decomposedColor = decomposeColor(color);

  if (decomposedColor.type.indexOf('rgb') !== -1) {
    var rgb = decomposedColor.values.map(function (val) {
      val /= 255; // normalized

      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    }); // Truncate at 3 digits

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  } // else if (decomposedColor.type.indexOf('hsl') !== -1)


  return decomposedColor.values[2] / 100;
}
/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function fade(color, value) {
   true ? (0, _warning.default)(color, "Material-UI: missing color argument in fade(".concat(color, ", ").concat(value, ").")) : void 0;
  if (!color) return color;
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function darken(color, coefficient) {
   true ? (0, _warning.default)(color, "Material-UI: missing color argument in darken(".concat(color, ", ").concat(coefficient, ").")) : void 0;
  if (!color) return color;
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function lighten(color, coefficient) {
   true ? (0, _warning.default)(color, "Material-UI: missing color argument in lighten(".concat(color, ", ").concat(coefficient, ").")) : void 0;
  if (!color) return color;
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createBreakpoints.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBreakpoints;
exports.keys = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

exports.keys = keys;

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0, _objectWithoutProperties2.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return "@media (min-width:".concat(values[start]).concat(unit, ") and ") + "(max-width:".concat(values[keys[endIndex]] - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return (0, _objectSpread2.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createGenerateClassName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGenerateClassName;

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

var generatorCounter = 0; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$dangerouslyU = options.dangerouslyUseGlobalCSS,
      dangerouslyUseGlobalCSS = _options$dangerouslyU === void 0 ? false : _options$dangerouslyU,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr;
  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
  var ruleCounter = 0; // - HMR can lead to many class name generators being instantiated,
  // so the warning is only triggered in production.
  // - We expect a class name generator to be instantiated per new request on the server,
  // so the warning is only triggered client side.
  // - You can get away with having multiple class name generators
  // by modifying the `productionPrefix`.

  if (false) {
    generatorCounter += 1;

    if (generatorCounter > 2) {
      // eslint-disable-next-line no-console
      console.error(['Material-UI: we have detected more than needed creation of the class name generator.', 'You should only use one class name generator on the client side.', 'If you do otherwise, you take the risk to have conflicting class names in production.'].join('\n'));
    }
  }

  return function (rule, styleSheet) {
    ruleCounter += 1;
     true ? (0, _warning.default)(ruleCounter < 1e10, ['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join('')) : void 0; // Code branch the whole block at the expense of more code.

    if (dangerouslyUseGlobalCSS) {
      if (styleSheet && styleSheet.options.classNamePrefix) {
        var prefix = styleSheet.options.classNamePrefix; // Sanitize the string as will be used to prefix the generated class name.

        prefix = prefix.replace(escapeRegex, '-');

        if (prefix.match(/^Mui/)) {
          return "".concat(prefix, "-").concat(rule.key);
        }

        if (true) {
          return "".concat(prefix, "-").concat(rule.key, "-").concat(ruleCounter);
        }
      }

      if (false) {
        return "".concat(productionPrefix).concat(ruleCounter);
      }

      return "".concat(rule.key, "-").concat(ruleCounter);
    }

    if (false) {
      return "".concat(productionPrefix).concat(ruleCounter);
    }

    if (styleSheet && styleSheet.options.classNamePrefix) {
      var _prefix = styleSheet.options.classNamePrefix; // Sanitize the string as will be used to prefix the generated class name.

      _prefix = _prefix.replace(escapeRegex, '-');
      return "".concat(_prefix, "-").concat(rule.key, "-").concat(ruleCounter);
    }

    return "".concat(rule.key, "-").concat(ruleCounter);
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createMixins.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMixins;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectSpread3 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0, _objectSpread3.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0, _objectSpread3.default)({
        paddingLeft: spacing.unit * 2,
        paddingRight: spacing.unit * 2
      }, styles, (0, _defineProperty2.default)({}, breakpoints.up('sm'), (0, _objectSpread3.default)({
        paddingLeft: spacing.unit * 3,
        paddingRight: spacing.unit * 3
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0, _defineProperty2.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0, _defineProperty2.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createMuiTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__("./node_modules/deepmerge/dist/es.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

var _createTypography = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createTypography.js"));

var _createBreakpoints = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createBreakpoints.js"));

var _createPalette = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createPalette.js"));

var _createMixins = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createMixins.js"));

var _shadows = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/shadows.js"));

var _transitions = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/transitions.js"));

var _zIndex = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/zIndex.js"));

var _spacing = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/spacing.js"));

// < 1kb payload overhead when lodash/merge is > 3kb.
function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      shadowsInput = options.shadows,
      other = (0, _objectWithoutProperties2.default)(options, ["palette", "breakpoints", "mixins", "typography", "shadows"]);
  var palette = (0, _createPalette.default)(paletteInput);
  var breakpoints = (0, _createBreakpoints.default)(breakpointsInput);
  var muiTheme = (0, _objectSpread2.default)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0, _createMixins.default)(breakpoints, _spacing.default, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Inject custom properties
    shadows: shadowsInput || _shadows.default,
    typography: (0, _createTypography.default)(palette, typographyInput)
  }, (0, _deepmerge.default)({
    transitions: _transitions.default,
    spacing: _spacing.default,
    zIndex: _zIndex.default
  }, other));
   true ? (0, _warning.default)(muiTheme.shadows.length === 25, 'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.') : void 0;
  return muiTheme;
}

var _default = createMuiTheme;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createPalette.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPalette;
exports.dark = exports.light = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__("./node_modules/deepmerge/dist/es.js"));

var _indigo = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/colors/indigo.js"));

var _pink = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/colors/pink.js"));

var _grey = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/colors/grey.js"));

var _red = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/colors/red.js"));

var _common = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/colors/common.js"));

var _colorManipulator = __webpack_require__("./node_modules/@material-ui/core/styles/colorManipulator.js");

// < 1kb payload overhead when lodash/merge is > 3kb.
var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _common.default.white,
    default: _grey.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.14)',
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  }
};
exports.light = light;
var dark = {
  text: {
    primary: _common.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _grey.default[800],
    default: '#303030'
  },
  action: {
    active: _common.default.white,
    hover: 'rgba(255, 255, 255, 0.1)',
    hoverOpacity: 0.1,
    selected: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)'
  }
};
exports.dark = dark;

function addLightOrDark(intent, direction, shade, tonalOffset) {
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0, _colorManipulator.lighten)(intent.main, tonalOffset);
    } else if (direction === 'dark') {
      intent.dark = (0, _colorManipulator.darken)(intent.main, tonalOffset * 1.5);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _indigo.default[300],
    main: _indigo.default[500],
    dark: _indigo.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _pink.default.A200,
    main: _pink.default.A400,
    dark: _pink.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _red.default[300],
    main: _red.default[500],
    dark: _red.default[700]
  } : _palette$error,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0, _objectWithoutProperties2.default)(palette, ["primary", "secondary", "error", "type", "contrastThreshold", "tonalOffset"]);

  function getContrastText(background) {
    // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
    var contrastText = (0, _colorManipulator.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0, _colorManipulator.getContrastRatio)(background, contrastText);
       true ? (0, _warning.default)(contrast >= 3, ["Material-UI: the contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WACG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n')) : void 0;
    }

    return contrastText;
  }

  function augmentColor(color, mainShade, lightShade, darkShade) {
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
  }

  augmentColor(primary, 500, 300, 700);
  augmentColor(secondary, 'A400', 'A200', 'A700');
  augmentColor(error, 500, 300, 700);
  var types = {
    dark: dark,
    light: light
  };
   true ? (0, _warning.default)(types[type], "Material-UI: the palette type `".concat(type, "` is not supported.")) : void 0;
  var paletteOutput = (0, _deepmerge.default)((0, _objectSpread2.default)({
    // A collection of common colors.
    common: _common.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: primary,
    // The colors used to represent secondary interface elements for a user.
    secondary: secondary,
    // The colors used to represent interface elements that the user should be made aware of.
    error: error,
    // The grey colors.
    grey: _grey.default,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: contrastThreshold,
    // Take a background color and return the color of the text to maximize the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other, {
    clone: false // No need to clone deep

  });
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createTypography.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTypography;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__("./node_modules/deepmerge/dist/es.js"));

// < 1kb payload overhead when lodash/merge is > 3kb.
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? '"Roboto", "Helvetica", "Arial", sans-serif' : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      other = (0, _objectWithoutProperties2.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "htmlFontSize"]);

  var coef = fontSize / 14;

  function pxToRem(value) {
    return "".concat(value / htmlFontSize * coef, "rem");
  }

  return (0, _deepmerge.default)({
    pxToRem: pxToRem,
    round: round,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    display4: {
      fontSize: pxToRem(112),
      fontWeight: fontWeightLight,
      fontFamily: fontFamily,
      letterSpacing: '-.04em',
      lineHeight: "".concat(round(128 / 112), "em"),
      marginLeft: '-.04em',
      color: palette.text.secondary
    },
    display3: {
      fontSize: pxToRem(56),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      letterSpacing: '-.02em',
      lineHeight: "".concat(round(73 / 56), "em"),
      marginLeft: '-.02em',
      color: palette.text.secondary
    },
    display2: {
      fontSize: pxToRem(45),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(48 / 45), "em"),
      marginLeft: '-.02em',
      color: palette.text.secondary
    },
    display1: {
      fontSize: pxToRem(34),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(41 / 34), "em"),
      color: palette.text.secondary
    },
    headline: {
      fontSize: pxToRem(24),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(32.5 / 24), "em"),
      color: palette.text.primary
    },
    title: {
      fontSize: pxToRem(21),
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(24.5 / 21), "em"),
      color: palette.text.primary
    },
    subheading: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(24 / 16), "em"),
      color: palette.text.primary
    },
    body2: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(24 / 14), "em"),
      color: palette.text.primary
    },
    body1: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(20.5 / 14), "em"),
      color: palette.text.primary
    },
    caption: {
      fontSize: pxToRem(12),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(16.5 / 12), "em"),
      color: palette.text.secondary
    },
    button: {
      fontSize: pxToRem(14),
      textTransform: 'uppercase',
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      color: palette.text.primary
    }
  }, other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/getStylesCreator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keys = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/keys.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__("./node_modules/deepmerge/dist/es.js"));

// < 1kb payload overhead when lodash/merge is > 3kb.
// Support for the jss-expand plugin.
function arrayMerge(destination, source) {
  return source;
}

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';

  function create(theme, name) {
    var styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;

    if (!name || !theme.overrides || !theme.overrides[name]) {
      return styles;
    }

    var overrides = theme.overrides[name];
    var stylesWithOverrides = (0, _objectSpread2.default)({}, styles);
    (0, _keys.default)(overrides).forEach(function (key) {
       true ? (0, _warning.default)(stylesWithOverrides[key], ['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n')) : void 0;
      stylesWithOverrides[key] = (0, _deepmerge.default)(stylesWithOverrides[key], overrides[key], {
        arrayMerge: arrayMerge
      });
    });
    return stylesWithOverrides;
  }

  return {
    create: create,
    options: {},
    themingEnabled: themingEnabled
  };
}

var _default = getStylesCreator;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/getThemeProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getThemeProps(params) {
  var theme = params.theme,
      name = params.name;

  if (!name || !theme.props || !theme.props[name]) {
    return {};
  }

  return theme.props[name];
}

var _default = getThemeProps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createGenerateClassName", {
  enumerable: true,
  get: function get() {
    return _createGenerateClassName.default;
  }
});
Object.defineProperty(exports, "createMuiTheme", {
  enumerable: true,
  get: function get() {
    return _createMuiTheme.default;
  }
});
Object.defineProperty(exports, "jssPreset", {
  enumerable: true,
  get: function get() {
    return _jssPreset.default;
  }
});
Object.defineProperty(exports, "MuiThemeProvider", {
  enumerable: true,
  get: function get() {
    return _MuiThemeProvider.default;
  }
});
Object.defineProperty(exports, "withStyles", {
  enumerable: true,
  get: function get() {
    return _withStyles.default;
  }
});
Object.defineProperty(exports, "withTheme", {
  enumerable: true,
  get: function get() {
    return _withTheme.default;
  }
});

var _createGenerateClassName = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createGenerateClassName.js"));

var _createMuiTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createMuiTheme.js"));

var _jssPreset = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/jssPreset.js"));

var _MuiThemeProvider = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/MuiThemeProvider.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _withTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withTheme.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/jssPreset.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jssGlobal = _interopRequireDefault(__webpack_require__("./node_modules/jss-global/lib/index.js"));

var _jssNested = _interopRequireDefault(__webpack_require__("./node_modules/jss-nested/lib/index.js"));

var _jssCamelCase = _interopRequireDefault(__webpack_require__("./node_modules/jss-camel-case/lib/index.js"));

var _jssDefaultUnit = _interopRequireDefault(__webpack_require__("./node_modules/jss-default-unit/lib/index.js"));

var _jssVendorPrefixer = _interopRequireDefault(__webpack_require__("./node_modules/jss-vendor-prefixer/lib/index.js"));

var _jssPropsSort = _interopRequireDefault(__webpack_require__("./node_modules/jss-props-sort/lib/index.js"));

// Subset of jss-preset-default with only the plugins the Material-UI
// components are using.
function jssPreset() {
  return {
    plugins: [(0, _jssGlobal.default)(), (0, _jssNested.default)(), (0, _jssCamelCase.default)(), (0, _jssDefaultUnit.default)(), (0, _jssVendorPrefixer.default)(), (0, _jssPropsSort.default)()]
  };
}

var _default = jssPreset;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/shadows.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0, 0, 0, ").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0, 0, 0, ").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0, 0, 0, ").concat(shadowAmbientShadowOpacity, ")")].join(',');
}

var shadows = ['none', createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1), createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2), createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var _default = shadows;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/spacing.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
  // https://material.io/guidelines/layout/metrics-keylines.html#metrics-keylines-baseline-grids
  unit: 8
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/themeListener.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CHANNEL = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

// Same value used by react-jss
var CHANNEL = '__THEMING__';
exports.CHANNEL = CHANNEL;
var themeListener = {
  contextTypes: (0, _defineProperty2.default)({}, CHANNEL, _propTypes.default.object),
  initial: function initial(context) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].getState();
  },
  subscribe: function subscribe(context, cb) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].subscribe(cb);
  },
  unsubscribe: function unsubscribe(context, subscriptionId) {
    if (context[CHANNEL]) {
      context[CHANNEL].unsubscribe(subscriptionId);
    }
  }
};
var _default = themeListener;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/transitions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isNumber = exports.isString = exports.formatMs = exports.duration = exports.easing = void 0;

var _keys = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/keys.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _isNan = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/number/is-nan.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

/* eslint-disable no-param-reassign */
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

exports.easing = easing;
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
exports.duration = duration;

var formatMs = function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
};

exports.formatMs = formatMs;

var isString = function isString(value) {
  return typeof value === 'string';
};

exports.isString = isString;

var isNumber = function isNumber(value) {
  return !(0, _isNan.default)(parseFloat(value));
};
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


exports.isNumber = isNumber;
var _default = {
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function () {
      var _options$duration = options.duration,
          durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
          _options$easing = options.easing,
          easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
          _options$delay = options.delay,
          delay = _options$delay === void 0 ? 0 : _options$delay,
          other = (0, _objectWithoutProperties2.default)(options, ["duration", "easing", "delay"]);
       true ? (0, _warning.default)(isString(props) || Array.isArray(props), 'Material-UI: argument "props" must be a string or Array.') : void 0;
       true ? (0, _warning.default)(isNumber(durationOption) || isString(durationOption), "Material-UI: argument \"duration\" must be a number or a string but found ".concat(durationOption, ".")) : void 0;
       true ? (0, _warning.default)(isString(easingOption), 'Material-UI: argument "easing" must be a string.') : void 0;
       true ? (0, _warning.default)(isNumber(delay) || isString(delay), 'Material-UI: argument "delay" must be a number or a string.') : void 0;
       true ? (0, _warning.default)((0, _keys.default)(other).length === 0, "Material-UI: unrecognized argument(s) [".concat((0, _keys.default)(other).join(','), "]")) : void 0;
      return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
        return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
      }).join(',');
    }();
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/withStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sheetsManager = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _keys = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/keys.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _map = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/map.js"));

var _minSafeInteger = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/number/min-safe-integer.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("./node_modules/hoist-non-react-statics/index.js"));

var _getDisplayName = _interopRequireDefault(__webpack_require__("./node_modules/recompose/getDisplayName.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__("./node_modules/recompose/wrapDisplayName.js"));

var _contextTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-jss/lib/contextTypes.js"));

var _jss = __webpack_require__("./node_modules/jss/lib/index.js");

var ns = _interopRequireWildcard(__webpack_require__("./node_modules/react-jss/lib/ns.js"));

var _jssPreset = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/jssPreset.js"));

var _createMuiTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createMuiTheme.js"));

var _themeListener = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/themeListener.js"));

var _createGenerateClassName = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createGenerateClassName.js"));

var _getStylesCreator = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/getStylesCreator.js"));

var _getThemeProps = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/getThemeProps.js"));

// Default JSS instance.
var jss = (0, _jss.create)((0, _jssPreset.default)()); // Use a singleton or the provided one by the context.

var generateClassName = (0, _createGenerateClassName.default)(); // Global index counter to preserve source order.
// We create the style sheet during at the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any childs styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.

var indexCounter = _minSafeInteger.default; // Exported for test purposes

var sheetsManager = new _map.default(); // We use the same empty object to ref count the styles that don't need a theme object.

exports.sheetsManager = sheetsManager;
var noopTheme = {}; // In order to have self-supporting components, we rely on default theme when not provided.

var defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _createMuiTheme.default)();
  return defaultTheme;
} // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.


var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        _options$flip = options.flip,
        flip = _options$flip === void 0 ? null : _options$flip,
        name = options.name,
        styleSheetOptions = (0, _objectWithoutProperties2.default)(options, ["withTheme", "flip", "name"]);
    var stylesCreator = (0, _getStylesCreator.default)(stylesOrCreator);
    var listenToTheme = stylesCreator.themingEnabled || withTheme || typeof name === 'string';
    indexCounter += 1;
    stylesCreator.options.index = indexCounter;
     true ? (0, _warning.default)(indexCounter < 0, ['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join(' ')) : void 0;

    var WithStyles =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithStyles, _React$Component);

      function WithStyles(props, context) {
        var _this;

        (0, _classCallCheck2.default)(this, WithStyles);
        _this = (0, _possibleConstructorReturn2.default)(this, (WithStyles.__proto__ || (0, _getPrototypeOf.default)(WithStyles)).call(this, props, context));
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {}
        });
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "disableStylesGeneration", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: false
        });
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "jss", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: null
        });
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "sheetOptions", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: null
        });
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "sheetsManager", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: sheetsManager
        });
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "stylesCreatorSaved", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: null
        });
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "theme", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: null
        });
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "unsubscribeId", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: null
        });
        _this.jss = _this.context[ns.jss] || jss;
        var muiThemeProviderOptions = _this.context.muiThemeProviderOptions;

        if (muiThemeProviderOptions) {
          if (muiThemeProviderOptions.sheetsManager) {
            _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
          }

          _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
        } // Attach the stylesCreator to the instance of the component as in the context
        // of react-hot-loader the hooks can be executed in a different closure context:
        // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107


        _this.stylesCreatorSaved = stylesCreator;
        _this.sheetOptions = (0, _objectSpread2.default)({
          generateClassName: generateClassName
        }, _this.context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.

        _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;

        _this.attach(_this.theme);

        _this.cacheClasses = {
          // Cache for the finalized classes value.
          value: null,
          // Cache for the last used classes prop pointer.
          lastProp: null,
          // Cache for the last used rendered classes pointer.
          lastJSS: {}
        };
        return _this;
      }

      (0, _createClass2.default)(WithStyles, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          if (!listenToTheme) {
            return;
          }

          this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
            var oldTheme = _this2.theme;
            _this2.theme = theme;

            _this2.attach(_this2.theme); // Rerender the component so the underlying component gets the theme update.
            // By theme update we mean receiving and applying the new class names.


            _this2.setState({}, function () {
              _this2.detach(oldTheme);
            });
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          // react-hot-loader specific logic
          if (this.stylesCreatorSaved === stylesCreator || "development" === 'production') {
            return;
          }

          this.detach(this.theme);
          this.stylesCreatorSaved = stylesCreator;
          this.attach(this.theme);
          this.forceUpdate();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.detach(this.theme);

          if (this.unsubscribeId !== null) {
            _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: "getClasses",
        value: function getClasses() {
          var _this3 = this;

          // Tracks if either the rendered classes or classes prop has changed,
          // requiring the generation of a new finalized classes object.
          var generate = false;

          if (!this.disableStylesGeneration) {
            var sheetManager = this.sheetsManager.get(this.stylesCreatorSaved);
            var sheetsManagerTheme = sheetManager.get(this.theme);

            if (sheetsManagerTheme.sheet.classes !== this.cacheClasses.lastJSS) {
              this.cacheClasses.lastJSS = sheetsManagerTheme.sheet.classes;
              generate = true;
            }
          }

          if (this.props.classes !== this.cacheClasses.lastProp) {
            this.cacheClasses.lastProp = this.props.classes;
            generate = true;
          }

          if (generate) {
            if (this.props.classes) {
              this.cacheClasses.value = (0, _objectSpread2.default)({}, this.cacheClasses.lastJSS, (0, _keys.default)(this.props.classes).reduce(function (accumulator, key) {
                 true ? (0, _warning.default)(_this3.cacheClasses.lastJSS[key] || _this3.disableStylesGeneration, ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not implemented in ".concat((0, _getDisplayName.default)(Component), "."), "You can only override one of the following: ".concat((0, _keys.default)(_this3.cacheClasses.lastJSS).join(','))].join('\n')) : void 0;
                 true ? (0, _warning.default)(!_this3.props.classes[key] || typeof _this3.props.classes[key] === 'string', ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not valid for ".concat((0, _getDisplayName.default)(Component), "."), "You need to provide a non empty string instead of: ".concat(_this3.props.classes[key], ".")].join('\n')) : void 0;

                if (_this3.props.classes[key]) {
                  accumulator[key] = "".concat(_this3.cacheClasses.lastJSS[key], " ").concat(_this3.props.classes[key]);
                }

                return accumulator;
              }, {}));
            } else {
              this.cacheClasses.value = this.cacheClasses.lastJSS;
            }
          }

          return this.cacheClasses.value;
        }
      }, {
        key: "attach",
        value: function attach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var stylesCreatorSaved = this.stylesCreatorSaved;
          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);

          if (!sheetManager) {
            sheetManager = new _map.default();
            this.sheetsManager.set(stylesCreatorSaved, sheetManager);
          }

          var sheetManagerTheme = sheetManager.get(theme);

          if (!sheetManagerTheme) {
            sheetManagerTheme = {
              refs: 0,
              sheet: null
            };
            sheetManager.set(theme, sheetManagerTheme);
          }

          if (sheetManagerTheme.refs === 0) {
            var styles = stylesCreatorSaved.create(theme, name);
            var meta = name;

            if ("development" !== 'production' && !meta) {
              meta = (0, _getDisplayName.default)(Component);
            }

            var sheet = this.jss.createStyleSheet(styles, (0, _objectSpread2.default)({
              meta: meta,
              classNamePrefix: meta,
              flip: typeof flip === 'boolean' ? flip : theme.direction === 'rtl',
              link: false
            }, this.sheetOptions, stylesCreatorSaved.options, {
              name: name
            }, styleSheetOptions));
            sheetManagerTheme.sheet = sheet;
            sheet.attach();
            var sheetsRegistry = this.context[ns.sheetsRegistry];

            if (sheetsRegistry) {
              sheetsRegistry.add(sheet);
            }
          }

          sheetManagerTheme.refs += 1;
        }
      }, {
        key: "detach",
        value: function detach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var stylesCreatorSaved = this.stylesCreatorSaved;
          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);
          var sheetManagerTheme = sheetManager.get(theme);
          sheetManagerTheme.refs -= 1;

          if (sheetManagerTheme.refs === 0) {
            sheetManager.delete(theme);
            this.jss.removeStyleSheet(sheetManagerTheme.sheet);
            var sheetsRegistry = this.context[ns.sheetsRegistry];

            if (sheetsRegistry) {
              sheetsRegistry.remove(sheetManagerTheme.sheet);
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _props = this.props,
              classes = _props.classes,
              innerRef = _props.innerRef,
              other = (0, _objectWithoutProperties2.default)(_props, ["classes", "innerRef"]);
          var more = (0, _getThemeProps.default)({
            theme: this.theme,
            name: name
          }); // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order Component.

          if (withTheme) {
            more.theme = this.theme;
          }

          return _react.default.createElement(Component, (0, _extends2.default)({}, more, {
            classes: this.getClasses(),
            ref: innerRef
          }, other));
        }
      }]);
      return WithStyles;
    }(_react.default.Component);

    WithStyles.propTypes =  true ? {
      /**
       * Override or extend the styles applied to the component.
       */
      classes: _propTypes.default.object,

      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
    } : {};
    WithStyles.contextTypes = (0, _objectSpread2.default)({
      muiThemeProviderOptions: _propTypes.default.object
    }, _contextTypes.default, listenToTheme ? _themeListener.default.contextTypes : {});

    if (true) {
      WithStyles.displayName = (0, _wrapDisplayName.default)(Component, 'WithStyles');
    }

    (0, _hoistNonReactStatics.default)(WithStyles, Component);

    if (true) {
      // Exposed for test purposes.
      WithStyles.Naked = Component;
      WithStyles.options = options;
    }

    return WithStyles;
  };
};

var _default = withStyles;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/withTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("./node_modules/hoist-non-react-statics/index.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__("./node_modules/recompose/wrapDisplayName.js"));

var _createMuiTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createMuiTheme.js"));

var _themeListener = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/themeListener.js"));

var defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _createMuiTheme.default)();
  return defaultTheme;
} // Provide the theme object as a property to the input component.


var withTheme = function withTheme() {
  return function (Component) {
    var WithTheme =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithTheme, _React$Component);

      function WithTheme(props, context) {
        var _this;

        (0, _classCallCheck2.default)(this, WithTheme);
        _this = (0, _possibleConstructorReturn2.default)(this, (WithTheme.__proto__ || (0, _getPrototypeOf.default)(WithTheme)).call(this, props, context));
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {}
        });
        Object.defineProperty((0, _assertThisInitialized2.default)(_this), "unsubscribeId", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: null
        });
        _this.state = {
          // We use || as the function call is lazy evaluated.
          theme: _themeListener.default.initial(context) || getDefaultTheme()
        };
        return _this;
      }

      (0, _createClass2.default)(WithTheme, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
            _this2.setState({
              theme: theme
            });
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.unsubscribeId !== null) {
            _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(Component, (0, _extends2.default)({
            theme: this.state.theme
          }, this.props));
        }
      }]);
      return WithTheme;
    }(_react.default.Component);

    WithTheme.contextTypes = _themeListener.default.contextTypes;

    if (true) {
      WithTheme.displayName = (0, _wrapDisplayName.default)(Component, 'WithTheme');
    }

    (0, _hoistNonReactStatics.default)(WithTheme, Component);

    if (true) {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };
};

var _default = withTheme;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/zIndex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var _default = zIndex;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/transitions/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransitionProps = getTransitionProps;
exports.reflow = void 0;

var reflow = function reflow(node) {
  return node.scrollTop;
};

exports.reflow = reflow;

function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode],
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/exactProp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exactProp;
exports.specialProperty = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _keys = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/keys.js"));

var _objectSpread3 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
var specialProperty = "exact-prop: \u200B";
exports.specialProperty = specialProperty;

function exactProp(propTypes, componentNameInError) {
  return (0, _objectSpread3.default)({}, propTypes, (0, _defineProperty2.default)({}, specialProperty, function (props) {
    var unknownProps = (0, _keys.default)(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unknownProps.length > 0) {
      return new TypeError("".concat(componentNameInError, ": unknown props found: ").concat(unknownProps.join(', '), ". Please remove the unknown properties."));
    }

    return null;
  }));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;
exports.contains = contains;
exports.findIndex = findIndex;
exports.find = find;
exports.createChainedFunction = createChainedFunction;

var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));

var _keys = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/keys.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

//  weak
function capitalize(string) {
  if ("development" !== 'production' && typeof string !== 'string') {
    throw new Error('Material-UI: capitalize(string) expects a string argument.');
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function contains(obj, pred) {
  return (0, _keys.default)(pred).every(function (key) {
    return obj.hasOwnProperty(key) && obj[key] === pred[key];
  });
}

function findIndex(arr, pred) {
  var predType = (0, _typeof2.default)(pred);

  for (var i = 0; i < arr.length; i += 1) {
    if (predType === 'function' && !!pred(arr[i], i, arr) === true) {
      return i;
    }

    if (predType === 'object' && contains(arr[i], pred)) {
      return i;
    }

    if (['string', 'number', 'boolean'].indexOf(predType) !== -1) {
      return arr.indexOf(pred);
    }
  }

  return -1;
}

function find(arr, pred) {
  var index = findIndex(arr, pred);
  return index > -1 ? arr[index] : undefined;
}
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */


function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (func) {
    return func != null;
  }).reduce(function (acc, func) {
     true ? (0, _warning.default)(typeof func === 'function', 'Material-UI: invalid Argument Type, must only provide functions, undefined, or null.') : void 0;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/ownerWindow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/ownerDocument.js"));

var ownerWindow = function ownerWindow(node) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var doc = (0, _ownerDocument.default)(node);
  return doc.defaultView || doc.parentView || fallback;
};

var _default = ownerWindow;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/reactHelpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneElementWithClassName = cloneElementWithClassName;
exports.cloneChildrenWithClassName = cloneChildrenWithClassName;
exports.isMuiElement = isMuiElement;
exports.isMuiComponent = isMuiComponent;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

/* eslint-disable import/prefer-default-export */
function cloneElementWithClassName(child, className) {
  return _react.default.cloneElement(child, {
    className: (0, _classnames.default)(child.props.className, className)
  });
}

function cloneChildrenWithClassName(children, className) {
  return _react.default.Children.map(children, function (child) {
    return _react.default.isValidElement(child) && cloneElementWithClassName(child, className);
  });
}

function isMuiElement(element, muiNames) {
  return _react.default.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

function isMuiComponent(element, muiNames) {
  return muiNames.indexOf(element.muiName) !== -1;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/requirePropFactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//  weak
var requirePropFactory = function requirePropFactory(componentNameInError) {
  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error("The property `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
      }

      return null;
    };
  };

  return requireProp;
};

var _default = requirePropFactory;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/AccountCircle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("g", null, _react.default.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
})), 'AccountCircle');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Drafts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("g", null, _react.default.createElement("path", {
  d: "M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"
})), 'Drafts');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Menu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("g", null, _react.default.createElement("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
})), 'Menu');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _pure = _interopRequireDefault(__webpack_require__("./node_modules/recompose/pure.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/SvgIcon/index.js"));

var SvgIconCustom = typeof global !== 'undefined' && global.__MUI_SvgIcon__ || _SvgIcon.default;

function createSvgIcon(path, displayName) {
  var Icon = function Icon(props) {
    return _react.default.createElement(SvgIconCustom, props, path);
  };

  Icon.displayName = displayName;
  Icon = (0, _pure.default)(Icon);
  Icon.muiName = 'SvgIcon';
  return Icon;
}

;
var _default = createSvgIcon;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/brcast/dist/brcast.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function createBroadcast (initialState) {
  var listeners = {};
  var id = 1;
  var _state = initialState;

  function getState () {
    return _state
  }

  function setState (state) {
    _state = state;
    var keys = Object.keys(listeners);
    var i = 0;
    var len = keys.length;
    for (; i < len; i++) {
      // if a listener gets unsubscribed during setState we just skip it
      if (listeners[keys[i]]) { listeners[keys[i]](state); }
    }
  }

  // subscribe to changes and return the subscriptionId
  function subscribe (listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener must be a function.')
    }
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    return currentId
  }

  // remove subscription by removing the listener function
  function unsubscribe (id) {
    listeners[id] = undefined;
  }

  return { getState: getState, setState: setState, subscribe: subscribe, unsubscribe: unsubscribe }
}

/* harmony default export */ __webpack_exports__["default"] = (createBroadcast);


/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/fn/number/is-nan.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.number.is-nan.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Number.isNaN;


/***/ }),

/***/ "./node_modules/core-js/library/fn/number/min-safe-integer.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.number.min-safe-integer.js");
module.exports = -0x1fffffffffffff;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.number.is-nan.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.number.min-safe-integer.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/css-vendor/lib/camelize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelize;
var regExp = /[-\s]+(.)?/g;

/**
 * Convert dash separated strings to camel cased.
 *
 * @param {String} str
 * @return {String}
 */
function camelize(str) {
  return str.replace(regExp, toUpper);
}

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}

/***/ }),

/***/ "./node_modules/css-vendor/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;

var _prefix = __webpack_require__("./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _supportedProperty = __webpack_require__("./node_modules/css-vendor/lib/supported-property.js");

var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

var _supportedValue = __webpack_require__("./node_modules/css-vendor/lib/supported-value.js");

var _supportedValue2 = _interopRequireDefault(_supportedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  prefix: _prefix2['default'],
  supportedProperty: _supportedProperty2['default'],
  supportedValue: _supportedValue2['default']
}; /**
    * CSS Vendor prefix detection and property feature testing.
    *
    * @copyright Oleg Slobodskoi 2015
    * @website https://github.com/jsstyles/css-vendor
    * @license MIT
    */

exports.prefix = _prefix2['default'];
exports.supportedProperty = _supportedProperty2['default'];
exports.supportedValue = _supportedValue2['default'];

/***/ }),

/***/ "./node_modules/css-vendor/lib/prefix.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isInBrowser = __webpack_require__("./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var js = ''; /**
              * Export javascript style and css style vendor prefixes.
              * Based on "transform" support test.
              */

var css = '';

// We should not do anything if required serverside.
if (_isInBrowser2['default']) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    // IE did it wrong again ...
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
}

/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String}}
 * @api public
 */
exports['default'] = { js: js, css: css };

/***/ }),

/***/ "./node_modules/css-vendor/lib/supported-property.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedProperty;

var _isInBrowser = __webpack_require__("./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__("./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _camelize = __webpack_require__("./node_modules/css-vendor/lib/camelize.js");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var el = void 0;
var cache = {};

if (_isInBrowser2['default']) {
  el = document.createElement('p');

  /**
   * We test every property on vendor prefix requirement.
   * Once tested, result is cached. It gives us up to 70% perf boost.
   * http://jsperf.com/element-style-object-access-vs-plain-object
   *
   * Prefill cache with known css properties to reduce amount of
   * properties we need to feature test at runtime.
   * http://davidwalsh.name/vendor-prefix
   */
  var computed = window.getComputedStyle(document.documentElement, '');
  for (var key in computed) {
    if (!isNaN(key)) cache[computed[key]] = computed[key];
  }
}

/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @return {String|Boolean}
 * @api public
 */
function supportedProperty(prop) {
  // For server-side rendering.
  if (!el) return prop;

  // We have not tested this prop yet, lets do the test.
  if (cache[prop] != null) return cache[prop];

  // Camelization is required because we can't test using
  // css syntax for e.g. in FF.
  // Test if property is supported as it is.
  if ((0, _camelize2['default'])(prop) in el.style) {
    cache[prop] = prop;
  }
  // Test if property is supported with vendor prefix.
  else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
      cache[prop] = _prefix2['default'].css + prop;
    } else {
      cache[prop] = false;
    }

  return cache[prop];
}

/***/ }),

/***/ "./node_modules/css-vendor/lib/supported-value.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedValue;

var _isInBrowser = __webpack_require__("./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__("./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var cache = {};
var el = void 0;

if (_isInBrowser2['default']) el = document.createElement('p');

/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */
function supportedValue(property, value) {
  // For server-side rendering.
  if (!el) return value;

  // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

  var cacheKey = property + value;

  if (cache[cacheKey] != null) return cache[cacheKey];

  // IE can even throw an error in some cases, for e.g. style.content = 'bar'
  try {
    // Test value as it is.
    el.style[property] = value;
  } catch (err) {
    cache[cacheKey] = false;
    return false;
  }

  // Value is supported as it is.
  if (el.style[property] !== '') {
    cache[cacheKey] = value;
  } else {
    // Test value with vendor prefix.
    value = _prefix2['default'].css + value;

    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
    if (value === '-ms-flex') value = '-ms-flexbox';

    el.style[property] = value;

    // Value is supported with vendor prefix.
    if (el.style[property] !== '') cache[cacheKey] = value;
  }

  if (!cache[cacheKey]) cache[cacheKey] = false;

  // Reset style value.
  el.style[property] = '';

  return cache[cacheKey];
}

/***/ }),

/***/ "./node_modules/deepmerge/dist/es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var foreach = __webpack_require__("./node_modules/foreach/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/dom-helpers/activeElement.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = activeElement;

var _ownerDocument = __webpack_require__("./node_modules/dom-helpers/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function activeElement() {
  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _ownerDocument2.default)();

  try {
    return doc.activeElement;
  } catch (e) {/* ie throws if no active element */}
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/ownerDocument.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ownerDocument;
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/contains.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM2.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);

  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/query/isWindow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;
function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/getComputedStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getComputedStyle;

var _camelizeStyle = __webpack_require__("./node_modules/dom-helpers/util/camelizeStyle.js");

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;

  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;

      prop = (0, _camelizeStyle2.default)(prop);

      if (prop == 'float') prop = 'styleFloat';

      var current = node.currentStyle[prop] || null;

      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left;

        // Put in the new values to get a computed value out
        if (rsLeft) runStyle.left = node.currentStyle.left;

        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px';

        // Revert the changed values
        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/style/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = style;

var _camelizeStyle = __webpack_require__("./node_modules/dom-helpers/util/camelizeStyle.js");

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

var _hyphenateStyle = __webpack_require__("./node_modules/dom-helpers/util/hyphenateStyle.js");

var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

var _getComputedStyle2 = __webpack_require__("./node_modules/dom-helpers/style/getComputedStyle.js");

var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

var _removeStyle = __webpack_require__("./node_modules/dom-helpers/style/removeStyle.js");

var _removeStyle2 = _interopRequireDefault(_removeStyle);

var _properties = __webpack_require__("./node_modules/dom-helpers/transition/properties.js");

var _isTransform = __webpack_require__("./node_modules/dom-helpers/transition/isTransform.js");

var _isTransform2 = _interopRequireDefault(_isTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];
    if (!value && value !== 0) {
      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
    } else if ((0, _isTransform2.default)(key)) {
      transforms += key + '(' + value + ') ';
    } else {
      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
    }
  });

  if (transforms) {
    css += _properties.transform + ': ' + transforms + ';';
  }

  node.style.cssText += ';' + css;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/style/removeStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStyle;
function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/isTransform.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/properties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelizeStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelizeStyleName;

var _camelize = __webpack_require__("./node_modules/dom-helpers/util/camelize.js");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^-ms-/; /**
                          * Copyright 2014-2015, Facebook, Inc.
                          * All rights reserved.
                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
                          */
function camelizeStyleName(string) {
  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenate;

var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenateStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateStyleName;

var _hyphenate = __webpack_require__("./node_modules/dom-helpers/util/hyphenate.js");

var _hyphenate2 = _interopRequireDefault(_hyphenate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^ms-/; /**
                         * Copyright 2013-2014, Facebook, Inc.
                         * All rights reserved.
                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
                         */

function hyphenateStyleName(string) {
  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/inDOM.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/scrollbarSize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM2.default) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = void 0;

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/foreach/index.js":
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;


/***/ }),

/***/ "./node_modules/is-in-browser/dist/module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js").default || __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js"));


/***/ }),

/***/ "./node_modules/jss-camel-case/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelCase;

var _hyphenateStyleName = __webpack_require__("./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */
function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    converted[(0, _hyphenateStyleName2['default'])(prop)] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}

/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */
function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }
      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    var hyphenatedProp = (0, _hyphenateStyleName2['default'])(prop);

    // There was no camel case in place
    if (prop === hyphenatedProp) return value;

    rule.prop(hyphenatedProp, value);

    // Core will ignore that property value we set the proper one above.
    return null;
  }

  return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}

/***/ }),

/***/ "./node_modules/jss-default-unit/lib/defaultUnits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Generated jss-default-unit CSS property units
 *
 * @type object
 */
exports['default'] = {
  'animation-delay': 'ms',
  'animation-duration': 'ms',
  'background-position': 'px',
  'background-position-x': 'px',
  'background-position-y': 'px',
  'background-size': 'px',
  border: 'px',
  'border-bottom': 'px',
  'border-bottom-left-radius': 'px',
  'border-bottom-right-radius': 'px',
  'border-bottom-width': 'px',
  'border-left': 'px',
  'border-left-width': 'px',
  'border-radius': 'px',
  'border-right': 'px',
  'border-right-width': 'px',
  'border-spacing': 'px',
  'border-top': 'px',
  'border-top-left-radius': 'px',
  'border-top-right-radius': 'px',
  'border-top-width': 'px',
  'border-width': 'px',
  'border-after-width': 'px',
  'border-before-width': 'px',
  'border-end-width': 'px',
  'border-horizontal-spacing': 'px',
  'border-start-width': 'px',
  'border-vertical-spacing': 'px',
  bottom: 'px',
  'box-shadow': 'px',
  'column-gap': 'px',
  'column-rule': 'px',
  'column-rule-width': 'px',
  'column-width': 'px',
  'flex-basis': 'px',
  'font-size': 'px',
  'font-size-delta': 'px',
  height: 'px',
  left: 'px',
  'letter-spacing': 'px',
  'logical-height': 'px',
  'logical-width': 'px',
  margin: 'px',
  'margin-after': 'px',
  'margin-before': 'px',
  'margin-bottom': 'px',
  'margin-left': 'px',
  'margin-right': 'px',
  'margin-top': 'px',
  'max-height': 'px',
  'max-width': 'px',
  'margin-end': 'px',
  'margin-start': 'px',
  'mask-position-x': 'px',
  'mask-position-y': 'px',
  'mask-size': 'px',
  'max-logical-height': 'px',
  'max-logical-width': 'px',
  'min-height': 'px',
  'min-width': 'px',
  'min-logical-height': 'px',
  'min-logical-width': 'px',
  motion: 'px',
  'motion-offset': 'px',
  outline: 'px',
  'outline-offset': 'px',
  'outline-width': 'px',
  padding: 'px',
  'padding-bottom': 'px',
  'padding-left': 'px',
  'padding-right': 'px',
  'padding-top': 'px',
  'padding-after': 'px',
  'padding-before': 'px',
  'padding-end': 'px',
  'padding-start': 'px',
  'perspective-origin-x': '%',
  'perspective-origin-y': '%',
  perspective: 'px',
  right: 'px',
  'shape-margin': 'px',
  size: 'px',
  'text-indent': 'px',
  'text-stroke': 'px',
  'text-stroke-width': 'px',
  top: 'px',
  'transform-origin': '%',
  'transform-origin-x': '%',
  'transform-origin-y': '%',
  'transform-origin-z': '%',
  'transition-delay': 'ms',
  'transition-duration': 'ms',
  'vertical-align': 'px',
  width: 'px',
  'word-spacing': 'px',
  // Not existing properties.
  // Used to avoid issues with jss-expand intergration.
  'box-shadow-x': 'px',
  'box-shadow-y': 'px',
  'box-shadow-blur': 'px',
  'box-shadow-spread': 'px',
  'font-line-height': 'px',
  'text-shadow-x': 'px',
  'text-shadow-y': 'px',
  'text-shadow-blur': 'px'
};

/***/ }),

/***/ "./node_modules/jss-default-unit/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = defaultUnit;

var _defaultUnits = __webpack_require__("./node_modules/jss-default-unit/lib/defaultUnits.js");

var _defaultUnits2 = _interopRequireDefault(_defaultUnits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;
  var replace = function replace(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp, replace)] = obj[key];
  }
  return newObj;
}

var units = addCamelCasedVersion(_defaultUnits2['default']);

/**
 * Recursive deep style passing function
 *
 * @param {String} current property
 * @param {(Object|Array|Number|String)} property value
 * @param {Object} options
 * @return {(Object|Array|Number|String)} resulting value
 */
function iterate(prop, value, options) {
  if (!value) return value;

  var convertedValue = value;

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type === 'object' && Array.isArray(value)) type = 'array';

  switch (type) {
    case 'object':
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
        break;
      }
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
      }
      break;
    case 'array':
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
      break;
    case 'number':
      if (value !== 0) {
        convertedValue = value + (options[prop] || units[prop] || '');
      }
      break;
    default:
      break;
  }

  return convertedValue;
}

/**
 * Add unit to numeric values.
 */
function defaultUnit() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}

/***/ }),

/***/ "./node_modules/jss-global/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports['default'] = jssGlobal;

var _jss = __webpack_require__("./node_modules/jss/lib/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var propKey = '@global';
var prefixKey = '@global ';

var GlobalContainerRule = function () {
  function GlobalContainerRule(key, styles, options) {
    _classCallCheck(this, GlobalContainerRule);

    this.type = 'global';

    this.key = key;
    this.options = options;
    this.rules = new _jss.RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector], { selector: selector });
    }

    this.rules.process();
  }

  /**
   * Get a rule.
   */


  _createClass(GlobalContainerRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.rules.toString();
    }
  }]);

  return GlobalContainerRule;
}();

var GlobalPrefixedRule = function () {
  function GlobalPrefixedRule(name, style, options) {
    _classCallCheck(this, GlobalPrefixedRule);

    this.name = name;
    this.options = options;
    var selector = name.substr(prefixKey.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this,
      selector: selector
    }));
  }

  _createClass(GlobalPrefixedRule, [{
    key: 'toString',
    value: function toString(options) {
      return this.rule.toString(options);
    }
  }]);

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';
  for (var i = 0; i < parts.length; i++) {
    scoped += scope + ' ' + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }
  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;

  var rules = style[propKey];

  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[propKey];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop.substr(0, propKey.length) !== propKey) continue;

    var selector = addScope(prop.substr(propKey.length), rule.selector);
    options.sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}

/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (name === propKey) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, prefixKey.length) === prefixKey) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;


    if (parent) {
      if (parent.type === 'global' || parent.options.parent.type === 'global') {
        options.global = true;
      }
    }

    if (options.global) options.selector = name;

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;

    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return { onCreateRule: onCreateRule, onProcessRule: onProcessRule };
}

/***/ }),

/***/ "./node_modules/jss-nested/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = jssNested;

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;

/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container) {
    return function (match, key) {
      var rule = container.getRule(key);
      if (rule) return rule.selector;
      (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s in %s.', key, container.options.meta || container);
      return key;
    };
  }

  var hasAnd = function hasAnd(str) {
    return str.indexOf('&') !== -1;
  };

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);

    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', ';
        // Replace all & by the parent or prefix & with the parent.
        result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, options) {
    // Options has been already created, now we only increase index.
    if (options) return _extends({}, options, { index: options.index + 1 });

    var nestingLevel = rule.options.nestingLevel;

    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    return _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1
    });
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    var container = rule.options.parent;
    var options = void 0;
    var replaceRef = void 0;
    for (var prop in style) {
      var isNested = hasAnd(prop);
      var isNestedConditional = prop[0] === '@';

      if (!isNested && !isNestedConditional) continue;

      options = getOptions(rule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, rule.selector
        // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.
        );if (!replaceRef) replaceRef = getReplaceRef(container
        // Replace all $refs.
        );selector = selector.replace(refRegExp, replaceRef);

        container.addRule(selector, style[prop], _extends({}, options, { selector: selector }));
      } else if (isNestedConditional) {
        container
        // Place conditional right after the parent rule to ensure right ordering.
        .addRule(prop, null, options).addRule(rule.key, style[prop], { selector: rule.selector });
      }

      delete style[prop];
    }

    return style;
  }

  return { onProcessStyle: onProcessStyle };
}

/***/ }),

/***/ "./node_modules/jss-props-sort/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssPropsSort;
/**
 * Sort props by length.
 */
function jssPropsSort() {
  function sort(prop0, prop1) {
    return prop0.length - prop1.length;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    var newStyle = {};
    var props = Object.keys(style).sort(sort);
    for (var prop in props) {
      newStyle[props[prop]] = style[props[prop]];
    }
    return newStyle;
  }

  return { onProcessStyle: onProcessStyle };
}

/***/ }),

/***/ "./node_modules/jss-vendor-prefixer/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssVendorPrefixer;

var _cssVendor = __webpack_require__("./node_modules/css-vendor/lib/index.js");

var vendor = _interopRequireWildcard(_cssVendor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 * Add vendor prefix to a property name when needed.
 *
 * @param {Rule} rule
 * @api public
 */
function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      rule.key = '@' + vendor.prefix.css + rule.key.substr(1);
    }
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      var value = style[prop];

      var changeProp = false;
      var supportedProp = vendor.supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;

      var changeValue = false;
      var supportedValue = vendor.supportedValue(supportedProp, value);
      if (supportedValue && supportedValue !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue || value;
      }
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return vendor.supportedValue(prop, value);
  }

  return { onProcessRule: onProcessRule, onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}

/***/ }),

/***/ "./node_modules/jss/lib/Jss.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isInBrowser = __webpack_require__("./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _StyleSheet = __webpack_require__("./node_modules/jss/lib/StyleSheet.js");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _PluginsRegistry = __webpack_require__("./node_modules/jss/lib/PluginsRegistry.js");

var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);

var _rules = __webpack_require__("./node_modules/jss/lib/plugins/rules.js");

var _rules2 = _interopRequireDefault(_rules);

var _observables = __webpack_require__("./node_modules/jss/lib/plugins/observables.js");

var _observables2 = _interopRequireDefault(_observables);

var _functions = __webpack_require__("./node_modules/jss/lib/plugins/functions.js");

var _functions2 = _interopRequireDefault(_functions);

var _sheets = __webpack_require__("./node_modules/jss/lib/sheets.js");

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createGenerateClassName = __webpack_require__("./node_modules/jss/lib/utils/createGenerateClassName.js");

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _createRule2 = __webpack_require__("./node_modules/jss/lib/utils/createRule.js");

var _createRule3 = _interopRequireDefault(_createRule2);

var _DomRenderer = __webpack_require__("./node_modules/jss/lib/renderers/DomRenderer.js");

var _DomRenderer2 = _interopRequireDefault(_DomRenderer);

var _VirtualRenderer = __webpack_require__("./node_modules/jss/lib/renderers/VirtualRenderer.js");

var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultPlugins = _rules2['default'].concat([_observables2['default'], _functions2['default']]);

var instanceCounter = 0;

var Jss = function () {
  function Jss(options) {
    _classCallCheck(this, Jss);

    this.id = instanceCounter++;
    this.version = "9.8.1";
    this.plugins = new _PluginsRegistry2['default']();
    this.options = {
      createGenerateClassName: _createGenerateClassName2['default'],
      Renderer: _isInBrowser2['default'] ? _DomRenderer2['default'] : _VirtualRenderer2['default'],
      plugins: []
    };
    this.generateClassName = (0, _createGenerateClassName2['default'])();

    // eslint-disable-next-line prefer-spread
    this.use.apply(this, defaultPlugins);
    this.setup(options);
  }

  _createClass(Jss, [{
    key: 'setup',
    value: function setup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.createGenerateClassName) {
        this.options.createGenerateClassName = options.createGenerateClassName;
        // $FlowFixMe
        this.generateClassName = options.createGenerateClassName();
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;
      if (options.virtual || options.Renderer) {
        this.options.Renderer = options.Renderer || (options.virtual ? _VirtualRenderer2['default'] : _DomRenderer2['default']);
      }

      // eslint-disable-next-line prefer-spread
      if (options.plugins) this.use.apply(this, options.plugins);

      return this;
    }

    /**
     * Create a Style Sheet.
     */

  }, {
    key: 'createStyleSheet',
    value: function createStyleSheet(styles) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var index = options.index;
      if (typeof index !== 'number') {
        index = _sheets2['default'].index === 0 ? 0 : _sheets2['default'].index + 1;
      }
      var sheet = new _StyleSheet2['default'](styles, _extends({}, options, {
        jss: this,
        generateClassName: options.generateClassName || this.generateClassName,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);

      return sheet;
    }

    /**
     * Detach the Style Sheet and remove it from the registry.
     */

  }, {
    key: 'removeStyleSheet',
    value: function removeStyleSheet(sheet) {
      sheet.detach();
      _sheets2['default'].remove(sheet);
      return this;
    }

    /**
     * Create a rule without a Style Sheet.
     */

  }, {
    key: 'createRule',
    value: function createRule(name) {
      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // Enable rule without name for inline styles.
      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        options = style;
        style = name;
        name = undefined;
      }

      // Cast from RuleFactoryOptions to RuleOptions
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var ruleOptions = options;

      ruleOptions.jss = this;
      ruleOptions.Renderer = this.options.Renderer;
      if (!ruleOptions.generateClassName) ruleOptions.generateClassName = this.generateClassName;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      var rule = (0, _createRule3['default'])(name, style, ruleOptions);

      if (!ruleOptions.selector && rule instanceof _StyleRule2['default']) {
        rule.selector = '.' + ruleOptions.generateClassName(rule);
      }

      this.plugins.onProcessRule(rule);

      return rule;
    }

    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */

  }, {
    key: 'use',
    value: function use() {
      var _this = this;

      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }

      plugins.forEach(function (plugin) {
        // Avoids applying same plugin twice, at least based on ref.
        if (_this.options.plugins.indexOf(plugin) === -1) {
          _this.options.plugins.push(plugin);
          _this.plugins.use(plugin);
        }
      });

      return this;
    }
  }]);

  return Jss;
}();

exports['default'] = Jss;

/***/ }),

/***/ "./node_modules/jss/lib/PluginsRegistry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginsRegistry = function () {
  function PluginsRegistry() {
    _classCallCheck(this, PluginsRegistry);

    this.hooks = {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []

      /**
       * Call `onCreateRule` hooks and return an object if returned by a hook.
       */
    };
  }

  _createClass(PluginsRegistry, [{
    key: 'onCreateRule',
    value: function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
        var rule = this.hooks.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }
      return null;
    }

    /**
     * Call `onProcessRule` hooks.
     */

  }, {
    key: 'onProcessRule',
    value: function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.hooks.onProcessRule.length; i++) {
        this.hooks.onProcessRule[i](rule, sheet);
      }

      // $FlowFixMe
      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);

      rule.isProcessed = true;
    }

    /**
     * Call `onProcessStyle` hooks.
     */

  }, {
    key: 'onProcessStyle',
    value: function onProcessStyle(style, rule, sheet) {
      var nextStyle = style;

      for (var i = 0; i < this.hooks.onProcessStyle.length; i++) {
        nextStyle = this.hooks.onProcessStyle[i](nextStyle, rule, sheet);
        // $FlowFixMe
        rule.style = nextStyle;
      }
    }

    /**
     * Call `onProcessSheet` hooks.
     */

  }, {
    key: 'onProcessSheet',
    value: function onProcessSheet(sheet) {
      for (var i = 0; i < this.hooks.onProcessSheet.length; i++) {
        this.hooks.onProcessSheet[i](sheet);
      }
    }

    /**
     * Call `onUpdate` hooks.
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate(data, rule, sheet) {
      for (var i = 0; i < this.hooks.onUpdate.length; i++) {
        this.hooks.onUpdate[i](data, rule, sheet);
      }
    }

    /**
     * Call `onChangeValue` hooks.
     */

  }, {
    key: 'onChangeValue',
    value: function onChangeValue(value, prop, rule) {
      var processedValue = value;
      for (var i = 0; i < this.hooks.onChangeValue.length; i++) {
        processedValue = this.hooks.onChangeValue[i](processedValue, prop, rule);
      }
      return processedValue;
    }

    /**
     * Register a plugin.
     * If function is passed, it is a shortcut for `{onProcessRule}`.
     */

  }, {
    key: 'use',
    value: function use(plugin) {
      for (var name in plugin) {
        if (this.hooks[name]) this.hooks[name].push(plugin[name]);else (0, _warning2['default'])(false, '[JSS] Unknown hook "%s".', name);
      }
    }
  }]);

  return PluginsRegistry;
}();

exports['default'] = PluginsRegistry;

/***/ }),

/***/ "./node_modules/jss/lib/RuleList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createRule = __webpack_require__("./node_modules/jss/lib/utils/createRule.js");

var _createRule2 = _interopRequireDefault(_createRule);

var _linkRule = __webpack_require__("./node_modules/jss/lib/utils/linkRule.js");

var _linkRule2 = _interopRequireDefault(_linkRule);

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _escape = __webpack_require__("./node_modules/jss/lib/utils/escape.js");

var _escape2 = _interopRequireDefault(_escape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Contains rules objects and allows adding/removing etc.
 * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
 */
var RuleList = function () {

  // Original styles object.
  function RuleList(options) {
    _classCallCheck(this, RuleList);

    this.map = {};
    this.raw = {};
    this.index = [];

    this.options = options;
    this.classes = options.classes;
  }

  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  // Used to ensure correct rules order.

  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.


  _createClass(RuleList, [{
    key: 'add',
    value: function add(name, decl, options) {
      var _options = this.options,
          parent = _options.parent,
          sheet = _options.sheet,
          jss = _options.jss,
          Renderer = _options.Renderer,
          generateClassName = _options.generateClassName;


      options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateClassName: generateClassName
      }, options);

      if (!options.selector && this.classes[name]) {
        options.selector = '.' + (0, _escape2['default'])(this.classes[name]);
      }

      this.raw[name] = decl;

      var rule = (0, _createRule2['default'])(name, decl, options);

      var className = void 0;

      if (!options.selector && rule instanceof _StyleRule2['default']) {
        className = generateClassName(rule, sheet);
        rule.selector = '.' + (0, _escape2['default'])(className);
      }

      this.register(rule, className);

      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);

      return rule;
    }

    /**
     * Get a rule.
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this.map[name];
    }

    /**
     * Delete a rule.
     */

  }, {
    key: 'remove',
    value: function remove(rule) {
      this.unregister(rule);
      this.index.splice(this.indexOf(rule), 1);
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.index.indexOf(rule);
    }

    /**
     * Run `onProcessRule()` plugins on every rule.
     */

  }, {
    key: 'process',
    value: function process() {
      var plugins = this.options.jss.plugins;
      // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
    }

    /**
     * Register a rule in `.map` and `.classes` maps.
     */

  }, {
    key: 'register',
    value: function register(rule, className) {
      this.map[rule.key] = rule;
      if (rule instanceof _StyleRule2['default']) {
        this.map[rule.selector] = rule;
        if (className) this.classes[rule.key] = className;
      }
    }

    /**
     * Unregister a rule.
     */

  }, {
    key: 'unregister',
    value: function unregister(rule) {
      delete this.map[rule.key];
      if (rule instanceof _StyleRule2['default']) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      }
    }

    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'update',
    value: function update(name, data) {
      var _options2 = this.options,
          plugins = _options2.jss.plugins,
          sheet = _options2.sheet;

      if (typeof name === 'string') {
        plugins.onUpdate(data, this.get(name), sheet);
        return;
      }

      for (var index = 0; index < this.index.length; index++) {
        plugins.onUpdate(name, this.index[index], sheet);
      }
    }

    /**
     * Link renderable rules with CSSRuleList.
     */

  }, {
    key: 'link',
    value: function link(cssRules) {
      var map = this.options.sheet.renderer.getUnescapedKeysMap(this.index);

      for (var i = 0; i < cssRules.length; i++) {
        var cssRule = cssRules[i];
        var _key = this.options.sheet.renderer.getKey(cssRule);
        if (map[_key]) _key = map[_key];
        var rule = this.map[_key];
        if (rule) (0, _linkRule2['default'])(rule, cssRule);
      }
    }

    /**
     * Convert rules to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var str = '';
      var sheet = this.options.sheet;

      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options);

        // No need to render an empty rule.
        if (!css && !link) continue;

        if (str) str += '\n';
        str += css;
      }

      return str;
    }
  }]);

  return RuleList;
}();

exports['default'] = RuleList;

/***/ }),

/***/ "./node_modules/jss/lib/SheetsManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager = function () {
  function SheetsManager() {
    _classCallCheck(this, SheetsManager);

    this.sheets = [];
    this.refs = [];
    this.keys = [];
  }

  _createClass(SheetsManager, [{
    key: 'get',
    value: function get(key) {
      var index = this.keys.indexOf(key);
      return this.sheets[index];
    }
  }, {
    key: 'add',
    value: function add(key, sheet) {
      var sheets = this.sheets,
          refs = this.refs,
          keys = this.keys;

      var index = sheets.indexOf(sheet);

      if (index !== -1) return index;

      sheets.push(sheet);
      refs.push(0);
      keys.push(key);

      return sheets.length - 1;
    }
  }, {
    key: 'manage',
    value: function manage(key) {
      var index = this.keys.indexOf(key);
      var sheet = this.sheets[index];
      if (this.refs[index] === 0) sheet.attach();
      this.refs[index]++;
      if (!this.keys[index]) this.keys.splice(index, 0, key);
      return sheet;
    }
  }, {
    key: 'unmanage',
    value: function unmanage(key) {
      var index = this.keys.indexOf(key);
      if (index === -1) {
        // eslint-ignore-next-line no-console
        (0, _warning2['default'])(false, "SheetsManager: can't find sheet to unmanage");
        return;
      }
      if (this.refs[index] > 0) {
        this.refs[index]--;
        if (this.refs[index] === 0) this.sheets[index].detach();
      }
    }
  }, {
    key: 'size',
    get: function get() {
      return this.keys.length;
    }
  }]);

  return SheetsManager;
}();

exports['default'] = SheetsManager;

/***/ }),

/***/ "./node_modules/jss/lib/SheetsRegistry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry = function () {
  function SheetsRegistry() {
    _classCallCheck(this, SheetsRegistry);

    this.registry = [];
  }

  _createClass(SheetsRegistry, [{
    key: 'add',


    /**
     * Register a Style Sheet.
     */
    value: function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;


      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      }

      // Find a position.
      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }

    /**
     * Reset the registry.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.registry = [];
    }

    /**
     * Remove a Style Sheet.
     */

  }, {
    key: 'remove',
    value: function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }

    /**
     * Convert all attached sheets to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.registry.filter(function (sheet) {
        return sheet.attached;
      }).map(function (sheet) {
        return sheet.toString(options);
      }).join('\n');
    }
  }, {
    key: 'index',


    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

exports['default'] = SheetsRegistry;

/***/ }),

/***/ "./node_modules/jss/lib/StyleSheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _linkRule = __webpack_require__("./node_modules/jss/lib/utils/linkRule.js");

var _linkRule2 = _interopRequireDefault(_linkRule);

var _RuleList = __webpack_require__("./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleSheet = function () {
  function StyleSheet(styles, options) {
    _classCallCheck(this, StyleSheet);

    this.attached = false;
    this.deployed = false;
    this.linked = false;
    this.classes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes
    });
    this.renderer = new options.Renderer(this);
    this.rules = new _RuleList2['default'](this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  /**
   * Attach renderable to the render tree.
   */


  _createClass(StyleSheet, [{
    key: 'attach',
    value: function attach() {
      if (this.attached) return this;
      if (!this.deployed) this.deploy();
      this.renderer.attach();
      if (!this.linked && this.options.link) this.link();
      this.attached = true;
      return this;
    }

    /**
     * Remove renderable from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      if (!this.attached) return this;
      this.renderer.detach();
      this.attached = false;
      return this;
    }

    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, decl, options) {
      var queue = this.queue;

      // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];

      var rule = this.rules.add(name, decl, options);
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule;
        // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.
        if (queue) queue.push(rule);else {
          this.insertRule(rule);
          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      }

      // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.
      this.deployed = false;

      return rule;
    }

    /**
     * Insert rule into the StyleSheet
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule) {
      var renderable = this.renderer.insertRule(rule);
      if (renderable && this.options.link) (0, _linkRule2['default'])(rule, renderable);
    }

    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */

  }, {
    key: 'addRules',
    value: function addRules(styles, options) {
      var added = [];
      for (var name in styles) {
        added.push(this.addRule(name, styles[name], options));
      }
      return added;
    }

    /**
     * Get a rule by name.
     */

  }, {
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(name) {
      var rule = this.rules.get(name);

      if (!rule) return false;

      this.rules.remove(rule);

      if (this.attached && rule.renderable) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Deploy pure CSS string to a renderable.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      this.renderer.deploy();
      this.deployed = true;
      return this;
    }

    /**
     * Link renderable CSS rules from sheet with their corresponding models.
     */

  }, {
    key: 'link',
    value: function link() {
      var cssRules = this.renderer.getRules();

      // Is undefined when VirtualRenderer is used.
      if (cssRules) this.rules.link(cssRules);
      this.linked = true;
      return this;
    }

    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'update',
    value: function update(name, data) {
      this.rules.update(name, data);
      return this;
    }

    /**
     * Convert rules to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.rules.toString(options);
    }
  }]);

  return StyleSheet;
}();

exports['default'] = StyleSheet;

/***/ }),

/***/ "./node_modules/jss/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.createGenerateClassName = exports.sheets = exports.RuleList = exports.SheetsManager = exports.SheetsRegistry = exports.toCssValue = exports.getDynamicStyles = undefined;

var _getDynamicStyles = __webpack_require__("./node_modules/jss/lib/utils/getDynamicStyles.js");

Object.defineProperty(exports, 'getDynamicStyles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getDynamicStyles)['default'];
  }
});

var _toCssValue = __webpack_require__("./node_modules/jss/lib/utils/toCssValue.js");

Object.defineProperty(exports, 'toCssValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toCssValue)['default'];
  }
});

var _SheetsRegistry = __webpack_require__("./node_modules/jss/lib/SheetsRegistry.js");

Object.defineProperty(exports, 'SheetsRegistry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsRegistry)['default'];
  }
});

var _SheetsManager = __webpack_require__("./node_modules/jss/lib/SheetsManager.js");

Object.defineProperty(exports, 'SheetsManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsManager)['default'];
  }
});

var _RuleList = __webpack_require__("./node_modules/jss/lib/RuleList.js");

Object.defineProperty(exports, 'RuleList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RuleList)['default'];
  }
});

var _sheets = __webpack_require__("./node_modules/jss/lib/sheets.js");

Object.defineProperty(exports, 'sheets', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sheets)['default'];
  }
});

var _createGenerateClassName = __webpack_require__("./node_modules/jss/lib/utils/createGenerateClassName.js");

Object.defineProperty(exports, 'createGenerateClassName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createGenerateClassName)['default'];
  }
});

var _Jss = __webpack_require__("./node_modules/jss/lib/Jss.js");

var _Jss2 = _interopRequireDefault(_Jss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Creates a new instance of Jss.
 */
var create = exports.create = function create(options) {
  return new _Jss2['default'](options);
};

/**
 * A global Jss instance.
 */
exports['default'] = create();

/***/ }),

/***/ "./node_modules/jss/lib/plugins/functions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RuleList = __webpack_require__("./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createRule = __webpack_require__("./node_modules/jss/lib/utils/createRule.js");

var _createRule2 = _interopRequireDefault(_createRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// A symbol replacement.
var now = Date.now();

var fnValuesNs = 'fnValues' + now;
var fnStyleNs = 'fnStyle' + ++now;

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (typeof decl !== 'function') return null;
    var rule = (0, _createRule2['default'])(name, {}, options);
    rule[fnStyleNs] = decl;
    return rule;
  },
  onProcessStyle: function onProcessStyle(style, rule) {
    var fn = {};
    for (var prop in style) {
      var value = style[prop];
      if (typeof value !== 'function') continue;
      delete style[prop];
      fn[prop] = value;
    }
    rule = rule;
    rule[fnValuesNs] = fn;
    return style;
  },
  onUpdate: function onUpdate(data, rule) {
    // It is a rules container like for e.g. ConditionalRule.
    if (rule.rules instanceof _RuleList2['default']) {
      rule.rules.update(data);
      return;
    }
    if (!(rule instanceof _StyleRule2['default'])) return;

    rule = rule;

    // If we have a fn values map, it is a rule with function values.
    if (rule[fnValuesNs]) {
      for (var prop in rule[fnValuesNs]) {
        rule.prop(prop, rule[fnValuesNs][prop](data));
      }
    }

    rule = rule;

    var fnStyle = rule[fnStyleNs];

    // If we have a style function, the entire rule is dynamic and style object
    // will be returned from that function.
    if (fnStyle) {
      var style = fnStyle(data);
      for (var _prop in style) {
        rule.prop(_prop, style[_prop]);
      }
    }
  }
};

/***/ }),

/***/ "./node_modules/jss/lib/plugins/observables.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createRule = __webpack_require__("./node_modules/jss/lib/utils/createRule.js");

var _createRule2 = _interopRequireDefault(_createRule);

var _isObservable = __webpack_require__("./node_modules/jss/lib/utils/isObservable.js");

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (!(0, _isObservable2['default'])(decl)) return null;

    // Cast `decl` to `Observable`, since it passed the type guard.
    var style$ = decl;

    var rule = (0, _createRule2['default'])(name, {}, options);

    // TODO
    // Call `stream.subscribe()` returns a subscription, which should be explicitly
    // unsubscribed from when we know this sheet is no longer needed.
    style$.subscribe(function (style) {
      for (var prop in style) {
        rule.prop(prop, style[prop]);
      }
    });

    return rule;
  },
  onProcessRule: function onProcessRule(rule) {
    if (!(rule instanceof _StyleRule2['default'])) return;
    var styleRule = rule;
    var style = styleRule.style;

    var _loop = function _loop(prop) {
      var value = style[prop];
      if (!(0, _isObservable2['default'])(value)) return 'continue';
      delete style[prop];
      value.subscribe({
        next: function next(nextValue) {
          styleRule.prop(prop, nextValue);
        }
      });
    };

    for (var prop in style) {
      var _ret = _loop(prop);

      if (_ret === 'continue') continue;
    }
  }
};

/***/ }),

/***/ "./node_modules/jss/lib/plugins/rules.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SimpleRule = __webpack_require__("./node_modules/jss/lib/rules/SimpleRule.js");

var _SimpleRule2 = _interopRequireDefault(_SimpleRule);

var _KeyframesRule = __webpack_require__("./node_modules/jss/lib/rules/KeyframesRule.js");

var _KeyframesRule2 = _interopRequireDefault(_KeyframesRule);

var _ConditionalRule = __webpack_require__("./node_modules/jss/lib/rules/ConditionalRule.js");

var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);

var _FontFaceRule = __webpack_require__("./node_modules/jss/lib/rules/FontFaceRule.js");

var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);

var _ViewportRule = __webpack_require__("./node_modules/jss/lib/rules/ViewportRule.js");

var _ViewportRule2 = _interopRequireDefault(_ViewportRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var classes = {
  '@charset': _SimpleRule2['default'],
  '@import': _SimpleRule2['default'],
  '@namespace': _SimpleRule2['default'],
  '@keyframes': _KeyframesRule2['default'],
  '@media': _ConditionalRule2['default'],
  '@supports': _ConditionalRule2['default'],
  '@font-face': _FontFaceRule2['default'],
  '@viewport': _ViewportRule2['default'],
  '@-ms-viewport': _ViewportRule2['default']

  /**
   * Generate plugins which will register all rules.
   */
};
exports['default'] = Object.keys(classes).map(function (key) {
  // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
  var re = new RegExp('^' + key);
  var onCreateRule = function onCreateRule(name, decl, options) {
    return re.test(name) ? new classes[key](name, decl, options) : null;
  };
  return { onCreateRule: onCreateRule };
});

/***/ }),

/***/ "./node_modules/jss/lib/renderers/DomRenderer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _sheets = __webpack_require__("./node_modules/jss/lib/sheets.js");

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _toCssValue = __webpack_require__("./node_modules/jss/lib/utils/toCssValue.js");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value = void 0;
  return function () {
    if (!value) value = fn();
    return value;
  };
};

/**
 * Get a style property value.
 */
function getPropertyValue(cssRule, prop) {
  try {
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}

/**
 * Set a style property.
 */
function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = (0, _toCssValue2['default'])(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    }

    cssRule.style.setProperty(prop, cssValue);
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }
  return true;
}

/**
 * Remove a style property.
 */
function removeProperty(cssRule, prop) {
  try {
    cssRule.style.removeProperty(prop);
  } catch (err) {
    (0, _warning2['default'])(false, '[JSS] DOMException "%s" was thrown. Tried to remove property "%s".', err.message, prop);
  }
}

var CSSRuleTypes = {
  STYLE_RULE: 1,
  KEYFRAMES_RULE: 7

  /**
   * Get the CSS Rule key.
   */

};var getKey = function () {
  var extractKey = function extractKey(cssText) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return cssText.substr(from, cssText.indexOf('{') - 1);
  };

  return function (cssRule) {
    if (cssRule.type === CSSRuleTypes.STYLE_RULE) return cssRule.selectorText;
    if (cssRule.type === CSSRuleTypes.KEYFRAMES_RULE) {
      var name = cssRule.name;

      if (name) return '@keyframes ' + name;

      // There is no rule.name in the following browsers:
      // - IE 9
      // - Safari 7.1.8
      // - Mobile Safari 9.0.0
      var cssText = cssRule.cssText;

      return '@' + extractKey(cssText, cssText.indexOf('keyframes'));
    }

    // Conditionals.
    return extractKey(cssRule.cssText);
  };
}();

/**
 * Set the selector.
 */
function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText;

  // Return false if setter was not successful.
  // Currently works in chrome only.
  return cssRule.selectorText === selectorText;
}

/**
 * Gets the `head` element upon the first call and caches it.
 */
var getHead = memoize(function () {
  return document.head || document.getElementsByTagName('head')[0];
});

/**
 * Gets a map of rule keys, where the property is an unescaped key and value
 * is a potentially escaped one.
 * It is used to identify CSS rules and the corresponding JSS rules. As an identifier
 * for CSSStyleRule we normally use `selectorText`. Though if original selector text
 * contains escaped code points e.g. `:not(#\\20)`, CSSOM will compile it to `:not(# )`
 * and so CSS rule's `selectorText` won't match JSS rule selector.
 *
 * https://www.w3.org/International/questions/qa-escapes#cssescapes
 */
var getUnescapedKeysMap = function () {
  var style = void 0;
  var isAttached = false;

  return function (rules) {
    var map = {};
    // https://github.com/facebook/flow/issues/2696
    if (!style) style = document.createElement('style');
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (!(rule instanceof _StyleRule2['default'])) continue;
      var selector = rule.selector;
      // Only unescape selector over CSSOM if it contains a back slash.

      if (selector && selector.indexOf('\\') !== -1) {
        // Lazilly attach when needed.
        if (!isAttached) {
          getHead().appendChild(style);
          isAttached = true;
        }
        style.textContent = selector + ' {}';
        var _style = style,
            sheet = _style.sheet;

        if (sheet) {
          var cssRules = sheet.cssRules;

          if (cssRules) map[cssRules[0].selectorText] = rule.key;
        }
      }
    }
    if (isAttached) {
      getHead().removeChild(style);
      isAttached = false;
    }
    return map;
  };
}();

/**
 * Find attached sheet with an index higher than the passed one.
 */
function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

/**
 * Find attached sheet with the highest index.
 */
function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

/**
 * Find a comment with "jss" inside.
 */
function findCommentNode(text) {
  var head = getHead();
  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }
  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = _sheets2['default'].registry;


  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);
    if (sheet) return sheet.renderer.element;

    // Otherwise insert after the last attached.
    sheet = findHighestSheet(registry, options);
    if (sheet) return sheet.renderer.element.nextElementSibling;
  }

  // Try to find a comment placeholder if registry is empty.
  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);
    if (comment) return comment.nextSibling;
    // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.
    (0, _warning2['default'])(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
  }

  return null;
}

/**
 * Insert style element into the DOM.
 */
function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;

  var prevNode = findPrevNode(options);

  if (prevNode) {
    var parentNode = prevNode.parentNode;

    if (parentNode) parentNode.insertBefore(style, prevNode);
    return;
  }

  // Works with iframes and any node types.
  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var _parentNode = insertionPointElement.parentNode;

    if (_parentNode) _parentNode.insertBefore(style, insertionPointElement.nextSibling);else (0, _warning2['default'])(false, '[JSS] Insertion point is not in the DOM.');
    return;
  }

  getHead().insertBefore(style, prevNode);
}

/**
 * Read jss nonce setting from the page if the user has set it.
 */
var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var DomRenderer = function () {
  function DomRenderer(sheet) {
    _classCallCheck(this, DomRenderer);

    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.getKey = getKey;
    this.getUnescapedKeysMap = getUnescapedKeysMap;
    this.hasInsertedRules = false;

    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) _sheets2['default'].add(sheet);

    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || document.createElement('style');
    this.element.type = 'text/css';
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }

  /**
   * Insert style element into render tree.
   */


  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696


  _createClass(DomRenderer, [{
    key: 'attach',
    value: function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return;

      // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // browsers remove those rules.
      // TODO figure out if its a bug and if it is known.
      // Workaround is to redeploy the sheet before attaching as a string.
      if (this.hasInsertedRules) {
        this.deploy();
        this.hasInsertedRules = false;
      }

      insertStyle(this.element, this.sheet.options);
    }

    /**
     * Remove style element from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      this.element.parentNode.removeChild(this.element);
    }

    /**
     * Inject CSS string into element.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      if (!this.sheet) return;
      this.element.textContent = '\n' + this.sheet.toString() + '\n';
    }

    /**
     * Insert a rule into element.
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      var sheet = this.element.sheet;
      var cssRules = sheet.cssRules;

      var str = rule.toString();
      if (!index) index = cssRules.length;

      if (!str) return false;

      try {
        sheet.insertRule(str, index);
      } catch (err) {
        (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
        return false;
      }
      this.hasInsertedRules = true;

      return cssRules[index];
    }

    /**
     * Delete a rule.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(cssRule) {
      var sheet = this.element.sheet;

      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      return true;
    }

    /**
     * Get index of a CSS Rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(cssRule) {
      var cssRules = this.element.sheet.cssRules;

      for (var _index = 0; _index < cssRules.length; _index++) {
        if (cssRule === cssRules[_index]) return _index;
      }
      return -1;
    }

    /**
     * Generate a new CSS rule and replace the existing one.
     */

  }, {
    key: 'replaceRule',
    value: function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      var newCssRule = this.insertRule(rule, index);
      this.element.sheet.deleteRule(index);
      return newCssRule;
    }

    /**
     * Get all rules elements.
     */

  }, {
    key: 'getRules',
    value: function getRules() {
      return this.element.sheet.cssRules;
    }
  }]);

  return DomRenderer;
}();

exports['default'] = DomRenderer;

/***/ }),

/***/ "./node_modules/jss/lib/renderers/VirtualRenderer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */

/**
 * Rendering backend to do nothing in nodejs.
 */
var VirtualRenderer = function () {
  function VirtualRenderer() {
    _classCallCheck(this, VirtualRenderer);
  }

  _createClass(VirtualRenderer, [{
    key: 'setProperty',
    value: function setProperty() {
      return true;
    }
  }, {
    key: 'getPropertyValue',
    value: function getPropertyValue() {
      return '';
    }
  }, {
    key: 'removeProperty',
    value: function removeProperty() {}
  }, {
    key: 'setSelector',
    value: function setSelector() {
      return true;
    }
  }, {
    key: 'getKey',
    value: function getKey() {
      return '';
    }
  }, {
    key: 'attach',
    value: function attach() {}
  }, {
    key: 'detach',
    value: function detach() {}
  }, {
    key: 'deploy',
    value: function deploy() {}
  }, {
    key: 'insertRule',
    value: function insertRule() {
      return false;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule() {
      return true;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule() {
      return false;
    }
  }, {
    key: 'getRules',
    value: function getRules() {}
  }, {
    key: 'indexOf',
    value: function indexOf() {
      return -1;
    }
  }]);

  return VirtualRenderer;
}();

exports['default'] = VirtualRenderer;

/***/ }),

/***/ "./node_modules/jss/lib/rules/ConditionalRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RuleList = __webpack_require__("./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Conditional rule for @media, @supports
 */
var ConditionalRule = function () {
  function ConditionalRule(key, styles, options) {
    _classCallCheck(this, ConditionalRule);

    this.type = 'conditional';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  /**
   * Get a rule.
   */


  _createClass(ConditionalRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      return inner ? this.key + ' {\n' + inner + '\n}' : '';
    }
  }]);

  return ConditionalRule;
}();

exports['default'] = ConditionalRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/FontFaceRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toCss = __webpack_require__("./node_modules/jss/lib/utils/toCss.js");

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontFaceRule = function () {
  function FontFaceRule(key, style, options) {
    _classCallCheck(this, FontFaceRule);

    this.type = 'font-face';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */


  _createClass(FontFaceRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';
        for (var index = 0; index < this.style.length; index++) {
          str += (0, _toCss2['default'])(this.key, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }
        return str;
      }

      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return FontFaceRule;
}();

exports['default'] = FontFaceRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/KeyframesRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RuleList = __webpack_require__("./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Rule for @keyframes
 */
var KeyframesRule = function () {
  function KeyframesRule(key, frames, options) {
    _classCallCheck(this, KeyframesRule);

    this.type = 'keyframes';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, this.options, {
        parent: this,
        selector: name
      }));
    }

    this.rules.process();
  }

  /**
   * Generates a CSS string.
   */


  _createClass(KeyframesRule, [{
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      if (inner) inner += '\n';
      return this.key + ' {\n' + inner + '}';
    }
  }]);

  return KeyframesRule;
}();

exports['default'] = KeyframesRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/SimpleRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleRule = function () {
  function SimpleRule(key, value, options) {
    _classCallCheck(this, SimpleRule);

    this.type = 'simple';
    this.isProcessed = false;

    this.key = key;
    this.value = value;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  _createClass(SimpleRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';
        for (var index = 0; index < this.value.length; index++) {
          str += this.key + ' ' + this.value[index] + ';';
          if (this.value[index + 1]) str += '\n';
        }
        return str;
      }

      return this.key + ' ' + this.value + ';';
    }
  }]);

  return SimpleRule;
}();

exports['default'] = SimpleRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/StyleRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _toCss = __webpack_require__("./node_modules/jss/lib/utils/toCss.js");

var _toCss2 = _interopRequireDefault(_toCss);

var _toCssValue = __webpack_require__("./node_modules/jss/lib/utils/toCssValue.js");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleRule = function () {
  function StyleRule(key, style, options) {
    _classCallCheck(this, StyleRule);

    this.type = 'style';
    this.isProcessed = false;
    var sheet = options.sheet,
        Renderer = options.Renderer,
        selector = options.selector;

    this.key = key;
    this.options = options;
    this.style = style;
    if (selector) this.selectorText = selector;
    this.renderer = sheet ? sheet.renderer : new Renderer();
  }

  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  _createClass(StyleRule, [{
    key: 'prop',


    /**
     * Get or set a style property.
     */
    value: function prop(name, value) {
      // It's a getter.
      if (value === undefined) return this.style[name];

      // Don't do anything if the value has not changed.
      if (this.style[name] === value) return this;

      value = this.options.jss.plugins.onChangeValue(value, name, this);

      var isEmpty = value == null || value === false;
      var isDefined = name in this.style;

      // Value is empty and wasn't defined before.
      if (isEmpty && !isDefined) return this;

      // We are going to remove this value.
      var remove = isEmpty && isDefined;

      if (remove) delete this.style[name];else this.style[name] = value;

      // Renderable is defined if StyleSheet option `link` is true.
      if (this.renderable) {
        if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, value);
        return this;
      }

      var sheet = this.options.sheet;

      if (sheet && sheet.attached) {
        (0, _warning2['default'])(false, 'Rule is not linked. Missing sheet option "link: true".');
      }
      return this;
    }

    /**
     * Apply rule to an element inline.
     */

  }, {
    key: 'applyTo',
    value: function applyTo(renderable) {
      var json = this.toJSON();
      for (var prop in json) {
        this.renderer.setProperty(renderable, prop, json[prop]);
      }return this;
    }

    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var json = {};
      for (var prop in this.style) {
        var value = this.style[prop];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
      }
      return json;
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var sheet = this.options.sheet;

      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, { allowEmpty: true }) : options;
      return (0, _toCss2['default'])(this.selector, this.style, opts);
    }
  }, {
    key: 'selector',
    set: function set(selector) {
      if (selector === this.selectorText) return;

      this.selectorText = selector;

      if (!this.renderable) return;

      var hasChanged = this.renderer.setSelector(this.renderable, selector);

      // If selector setter is not implemented, rerender the rule.
      if (!hasChanged && this.renderable) {
        var renderable = this.renderer.replaceRule(this.renderable, this);
        if (renderable) this.renderable = renderable;
      }
    }

    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}();

exports['default'] = StyleRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/ViewportRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toCss = __webpack_require__("./node_modules/jss/lib/utils/toCss.js");

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewportRule = function () {
  function ViewportRule(key, style, options) {
    _classCallCheck(this, ViewportRule);

    this.type = 'viewport';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */


  _createClass(ViewportRule, [{
    key: 'toString',
    value: function toString(options) {
      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return ViewportRule;
}();

exports['default'] = ViewportRule;

/***/ }),

/***/ "./node_modules/jss/lib/sheets.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SheetsRegistry = __webpack_require__("./node_modules/jss/lib/SheetsRegistry.js");

var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */
exports['default'] = new _SheetsRegistry2['default']();

/***/ }),

/***/ "./node_modules/jss/lib/utils/cloneStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = cloneStyle;

var _isObservable = __webpack_require__("./node_modules/jss/lib/utils/isObservable.js");

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var isArray = Array.isArray;
function cloneStyle(style) {
  // Support empty values in case user ends up with them by accident.
  if (style == null) return style;

  // Support string value for SimpleRule.
  var typeOfStyle = typeof style === 'undefined' ? 'undefined' : _typeof(style);

  if (typeOfStyle === 'string' || typeOfStyle === 'number' || typeOfStyle === 'function') {
    return style;
  }

  // Support array for FontFaceRule.
  if (isArray(style)) return style.map(cloneStyle);

  // Support Observable styles.  Observables are immutable, so we don't need to
  // copy them.
  if ((0, _isObservable2['default'])(style)) return style;

  var newStyle = {};
  for (var name in style) {
    var value = style[name];
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      newStyle[name] = cloneStyle(value);
      continue;
    }
    newStyle[name] = value;
  }

  return newStyle;
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/createGenerateClassName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _StyleSheet = __webpack_require__("./node_modules/jss/lib/StyleSheet.js");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _moduleId = __webpack_require__("./node_modules/jss/lib/utils/moduleId.js");

var _moduleId2 = _interopRequireDefault(_moduleId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var maxRules = 1e10;


var env = "development";

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

exports['default'] = function () {
  var ruleCounter = 0;
  var defaultPrefix = env === 'production' ? 'c' : '';

  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
      (0, _warning2['default'])(false, '[JSS] You might have a memory leak. Rule counter is at %s.', ruleCounter);
    }

    var prefix = defaultPrefix;
    var jssId = '';

    if (sheet) {
      prefix = sheet.options.classNamePrefix || defaultPrefix;
      if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
    }

    if (env === 'production') {
      return '' + prefix + _moduleId2['default'] + jssId + ruleCounter;
    }

    return prefix + rule.key + '-' + _moduleId2['default'] + (jssId && '-' + jssId) + '-' + ruleCounter;
  };
};

/***/ }),

/***/ "./node_modules/jss/lib/utils/createRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = createRule;

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _cloneStyle = __webpack_require__("./node_modules/jss/lib/utils/cloneStyle.js");

var _cloneStyle2 = _interopRequireDefault(_cloneStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Create a rule instance.
 */
function createRule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed';
  var decl = arguments[1];
  var options = arguments[2];
  var jss = options.jss;

  var declCopy = (0, _cloneStyle2['default'])(decl);

  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule;

  // It is an at-rule and it has no instance.
  if (name[0] === '@') {
    (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
  }

  return new _StyleRule2['default'](name, declCopy, options);
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/escape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CSS = global.CSS;

var env = "development";

var escapeRegex = /([[\].#*$><+~=|^:(),"'`])/g;

exports['default'] = function (str) {
  // We don't need to escape it in production, because we are not using user's
  // input for selectors, we are generating a valid selector.
  if (env === 'production') return str;

  if (!CSS || !CSS.escape) {
    return str.replace(escapeRegex, '\\$1');
  }

  return CSS.escape(str);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/jss/lib/utils/getDynamicStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = getDynamicStyles;
/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);
      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/isObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbolObservable = __webpack_require__("./node_modules/jss/node_modules/symbol-observable/es/index.js");

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (value) {
  return value && value[_symbolObservable2['default']] && value === value[_symbolObservable2['default']]();
};

/***/ }),

/***/ "./node_modules/jss/lib/utils/linkRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = linkRule;
/**
 * Link rule with CSSStyleRule and nested rules with corresponding nested cssRules if both exists.
 */
function linkRule(rule, cssRule) {
  rule.renderable = cssRule;
  if (rule.rules && cssRule.cssRules) rule.rules.link(cssRule.cssRules);
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/moduleId.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (global[ns] == null) global[ns] = 0;

// Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.
exports['default'] = global[ns]++;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/jss/lib/utils/toCss.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCss;

var _toCssValue = __webpack_require__("./node_modules/jss/lib/utils/toCssValue.js");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';
  for (var index = 0; index < indent; index++) {
    result += '  ';
  }return result + str;
}

/**
 * Converts a Rule to CSS string.
 */

function toCss(selector, style) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var result = '';

  if (!style) return result;

  var _options$indent = options.indent,
      indent = _options$indent === undefined ? 0 : _options$indent;
  var fallbacks = style.fallbacks;


  indent++;

  // Apply fallbacks first.
  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];
        for (var prop in fallback) {
          var value = fallback[prop];
          if (value != null) {
            result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];
        if (_value != null) {
          result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];
    if (_value2 != null && _prop2 !== 'fallbacks') {
      result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
    }
  }

  // Allow empty style in this case, because properties will be added dynamically.
  if (!result && !options.allowEmpty) return result;

  indent--;
  result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);

  return result;
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/toCssValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCssValue;
var join = function join(value, by) {
  var result = '';
  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }
  return result;
};

/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */
function toCssValue(value) {
  var ignoreImportant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!Array.isArray(value)) return value;

  var cssValue = '';

  // Support space separated values via `[['5px', '10px']]`.
  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', ');

  // Add !important, because it was ignored.
  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/***/ }),

/***/ "./node_modules/jss/node_modules/symbol-observable/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__("./node_modules/jss/node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/jss/node_modules/symbol-observable/es/ponyfill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/keycode/index.js":
/***/ (function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

function keyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Compares a keyboard event with a given keyCode or keyName.
 *
 * @param {Event} event Keyboard event that should be tested
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Boolean}
 * @api public
 */
keyCode.isEventKey = function isEventKey(event, nameOrCode) {
  if (event && 'object' === typeof event) {
    var keyCode = event.which || event.keyCode || event.charCode
    if (keyCode === null || keyCode === undefined) { return false; }
    if (typeof nameOrCode === 'string') {
      // check codes
      var foundNamedKey = codes[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    
      // check aliases
      var foundNamedKey = aliases[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    } else if (typeof nameOrCode === 'number') {
      return nameOrCode === keyCode;
    }
    return false;
  }
}

exports = module.exports = keyCode;

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'spacebar': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}

/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__("./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__("./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    now = __webpack_require__("./node_modules/lodash/now.js"),
    toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));

var _stringify = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/json/stringify.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _propTypesExact = _interopRequireDefault(__webpack_require__("./node_modules/prop-types-exact/build/index.js"));

var _router = _interopRequireWildcard(__webpack_require__("./node_modules/next/dist/lib/router/index.js"));

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

/* global __NEXT_DATA__ */
var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link(props) {
    var _ref;

    var _this;

    (0, _classCallCheck2.default)(this, Link);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf.default)(Link)).call.apply(_ref, [this, props].concat(rest)));
    _this.linkClicked = _this.linkClicked.bind((0, _assertThisInitialized2.default)(_this));

    _this.formatUrls(props);

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: "linkClicked",
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      var replace = this.props.replace;
      var changeMethod = replace ? 'replace' : 'push'; // straight up redirect

      _router.default[changeMethod](href, as, {
        shallow: shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;
      var href = (0, _url.resolve)(pathname, this.href);

      _router.default.prefetch(href);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    } // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: "formatUrls",
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof2.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof2.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var href = this.href,
          as = this.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        onClick: this.linkClicked // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

exports.default = Link;
Object.defineProperty(Link, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: (0, _propTypesExact.default)({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warnLink("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  })
});

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-event-listener/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

exports.withOptions = withOptions;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__("./node_modules/fbjs/lib/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _supports = __webpack_require__("./node_modules/react-event-listener/lib/supports.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultEventOptions = {
  capture: false,
  passive: false
};

function mergeDefaultEventOptions(options) {
  return (0, _assign2.default)({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(_supports.passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function off(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = (0, _objectWithoutProperties3.default)(props, ['children', 'target']);


  (0, _keys2.default)(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];
    var type = typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop);
    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({ capture: capture }));
    }
  });
}

function withOptions(handler, options) {
   true ? (0, _warning2.default)(options, 'react-event-listener: should be specified options in withOptions.') : void 0;

  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener = function (_React$Component) {
  (0, _inherits3.default)(EventListener, _React$Component);

  function EventListener() {
    (0, _classCallCheck3.default)(this, EventListener);
    return (0, _possibleConstructorReturn3.default)(this, (EventListener.__proto__ || (0, _getPrototypeOf2.default)(EventListener)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.removeListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.addListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.applyListeners(on);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      this.applyListeners(off);
    }
  }, {
    key: 'applyListeners',
    value: function applyListeners(onOrOff) {
      var target = this.props.target;


      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(this.props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);
  return EventListener;
}(_react2.default.Component);

EventListener.propTypes =  true ? {
  /**
   * You can provide a single child too.
   */
  children: _propTypes2.default.node,
  /**
   * The DOM target to listen to.
   */
  target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired
} : {};

exports.default = EventListener;

/***/ }),

/***/ "./node_modules/react-event-listener/lib/supports.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passiveOption = undefined;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defineProperty(object, property, attr) {
  return (0, _defineProperty2.default)(object, property, attr);
}

// Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
var passiveOption = exports.passiveOption = function () {
  var cache = null;

  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (err) {
      //
    }

    cache = supportsPassiveOption;

    return supportsPassiveOption;
  }();
}();

exports.default = {};

/***/ }),

/***/ "./node_modules/react-jss/lib/contextTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns$jss$ns$sheetOptio;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _ns = __webpack_require__("./node_modules/react-jss/lib/ns.js");

var ns = _interopRequireWildcard(_ns);

var _propTypes2 = __webpack_require__("./node_modules/react-jss/lib/propTypes.js");

var _propTypes3 = _interopRequireDefault(_propTypes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports['default'] = (_ns$jss$ns$sheetOptio = {}, _defineProperty(_ns$jss$ns$sheetOptio, ns.jss, _propTypes3['default'].jss), _defineProperty(_ns$jss$ns$sheetOptio, ns.sheetOptions, _propTypes.object), _defineProperty(_ns$jss$ns$sheetOptio, ns.sheetsRegistry, _propTypes3['default'].registry), _defineProperty(_ns$jss$ns$sheetOptio, ns.managers, _propTypes.object), _ns$jss$ns$sheetOptio);

/***/ }),

/***/ "./node_modules/react-jss/lib/ns.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Namespaces to avoid conflicts on the context.
 */
var jss = exports.jss = '64a55d578f856d258dc345b094a2a2b3';
var sheetsRegistry = exports.sheetsRegistry = 'd4bd0baacbc52bbd48bbb9eb24344ecd';
var managers = exports.managers = 'b768b78919504fba9de2c03545c5cd3a';
var sheetOptions = exports.sheetOptions = '6fc570d6bd61383819d0f9e7407c452d';

/***/ }),

/***/ "./node_modules/react-jss/lib/propTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

exports['default'] = {
  jss: (0, _propTypes.shape)({
    options: (0, _propTypes.shape)({
      createGenerateClassName: _propTypes.func.isRequired
    }).isRequired,
    createStyleSheet: _propTypes.func.isRequired,
    removeStyleSheet: _propTypes.func.isRequired
  }),
  registry: (0, _propTypes.shape)({
    add: _propTypes.func.isRequired,
    toString: _propTypes.func.isRequired
  })
};

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PropTypes = __webpack_require__("./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
var EXITED = exports.EXITED = 'exited';
var ENTERING = exports.ENTERING = 'entering';
var ENTERED = exports.ENTERED = 'entered';
var EXITING = exports.EXITING = 'exiting';

/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 *
 * ## Example
 *
 * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 *
 */

var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    var parentGroup = context.transitionGroup;
    // In the context of a TransitionGroup all enters are really appears
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

    var initialStatus = void 0;
    _this.nextStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.nextStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = { status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  Transition.prototype.getChildContext = function getChildContext() {
    return { transitionGroup: null }; // allows for nested Transitions
  };

  Transition.prototype.componentDidMount = function componentDidMount() {
    this.updateStatus(true);
  };

  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _ref = this.pendingState || this.state,
        status = _ref.status;

    if (nextProps.in) {
      if (status === UNMOUNTED) {
        this.setState({ status: EXITED });
      }
      if (status !== ENTERING && status !== ENTERED) {
        this.nextStatus = ENTERING;
      }
    } else {
      if (status === ENTERING || status === ENTERED) {
        this.nextStatus = EXITING;
      }
    }
  };

  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateStatus();
  };

  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  Transition.prototype.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;

    var exit = void 0,
        enter = void 0,
        appear = void 0;

    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }
    return { exit: exit, enter: enter, appear: appear };
  };

  Transition.prototype.updateStatus = function updateStatus() {
    var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var nextStatus = this.nextStatus;

    if (nextStatus !== null) {
      this.nextStatus = null;
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  };

  Transition.prototype.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;

    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

    var timeouts = this.getTimeouts();

    // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set
    if (!mounting && !enter) {
      this.safeSetState({ status: ENTERED }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);

    this.safeSetState({ status: ENTERING }, function () {
      _this2.props.onEntering(node, appearing);

      // FIXME: appear timeout?
      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  Transition.prototype.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;

    var timeouts = this.getTimeouts();

    // no exit animation skip right to EXITED
    if (!exit) {
      this.safeSetState({ status: EXITED }, function () {
        _this3.props.onExited(node);
      });
      return;
    }
    this.props.onExit(node);

    this.safeSetState({ status: EXITING }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
    var _this4 = this;

    // We need to track pending updates for instances where a cWRP fires quickly
    // after cDM and before the state flushes, which would double trigger a
    // transition
    this.pendingState = nextState;

    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, function () {
      _this4.pendingState = null;
      callback();
    });
  };

  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this5 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this5.nextCallback = null;

        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  Transition.prototype.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }

    var _props = this.props,
        children = _props.children,
        childProps = _objectWithoutProperties(_props, ['children']);
    // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react2.default.Children.only(children);
    return _react2.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react2.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};


Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    return pt.apply(undefined, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {};

// Name the function so it is clearer in the documentation
function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop
};

Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

exports.default = Transition;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _ChildMapping = __webpack_require__("./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var propTypes = {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes2.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   */
  children: _propTypes2.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes2.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes2.default.bool,
  /**
    * A convenience prop that enables or disables exit animations
    * for all children. Note that specifying this will override any defaults set
    * on individual children Transitions.
    */
  exit: _propTypes2.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes2.default.func
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};

/**
 * The `<TransitionGroup>` component manages a set of `<Transition>` components
 * in a list. Like with the `<Transition>` component, `<TransitionGroup>`, is a
 * state machine for managing the mounting and unmounting of components over
 * time.
 *
 * Consider the example below using the `Fade` CSS transition from before.
 * As items are removed or added to the TodoList the `in` prop is toggled
 * automatically by the `<TransitionGroup>`. You can use _any_ `<Transition>`
 * component in a `<TransitionGroup>`, not just css.
 *
 * ## Example
 *
 * <iframe src="https://codesandbox.io/embed/00rqyo26kn?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual `<Transition>`
 * components. This means you can mix and match animations across different
 * list items.
 */

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    // Initial children should all be entering, dependent on appear
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children, function (child) {
        return (0, _react.cloneElement)(child, {
          onExited: _this.handleExited.bind(_this, child),
          in: true,
          appear: _this.getProp(child, 'appear'),
          enter: _this.getProp(child, 'enter'),
          exit: _this.getProp(child, 'exit')
        });
      })
    };
    return _this;
  }

  TransitionGroup.prototype.getChildContext = function getChildContext() {
    return {
      transitionGroup: { isMounting: !this.appeared }
    };
  };
  // use child config unless explictly set by the Group


  TransitionGroup.prototype.getProp = function getProp(child, prop) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props;

    return props[prop] != null ? props[prop] : child.props[prop];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var prevChildMapping = this.state.children;
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);

    var children = (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping);

    Object.keys(children).forEach(function (key) {
      var child = children[key];

      if (!(0, _react.isValidElement)(child)) return;

      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;

      var prevChild = prevChildMapping[key];
      var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in;

      // item is new (entering)
      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = (0, _react.cloneElement)(child, {
          onExited: _this2.handleExited.bind(_this2, child),
          in: true,
          exit: _this2.getProp(child, 'exit', nextProps),
          enter: _this2.getProp(child, 'enter', nextProps)
        });
      }
      // item is old (exiting)
      else if (!hasNext && hasPrev && !isLeaving) {
          // console.log('leaving', key)
          children[key] = (0, _react.cloneElement)(child, { in: false });
        }
        // item hasn't changed transition states
        // copy over the last transition props;
        else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
            // console.log('unchanged', key)
            children[key] = (0, _react.cloneElement)(child, {
              onExited: _this2.handleExited.bind(_this2, child),
              in: prevChild.props.in,
              exit: _this2.getProp(child, 'exit', nextProps),
              enter: _this2.getProp(child, 'enter', nextProps)
            });
          }
    });

    this.setState({ children: children });
  };

  TransitionGroup.prototype.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);

    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    this.setState(function (state) {
      var children = _extends({}, state.children);

      delete children[child.key];
      return { children: children };
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _props = this.props,
        Component = _props.component,
        childFactory = _props.childFactory,
        props = _objectWithoutProperties(_props, ['component', 'childFactory']);

    var children = values(this.state.children).map(childFactory);

    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes2.default.object.isRequired
};


TransitionGroup.propTypes =  true ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = Object.create(null);

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
  enter: _propTypes2.default.number,
  exit: _propTypes2.default.number
}).isRequired]);

var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterDone: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  exitDone: _propTypes2.default.string,
  exitActive: _propTypes2.default.string
})]);

/***/ }),

/***/ "./node_modules/recompose/getDisplayName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),

/***/ "./node_modules/recompose/pure.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shouldUpdate = __webpack_require__("./node_modules/recompose/shouldUpdate.js");

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = __webpack_require__("./node_modules/recompose/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _setDisplayName = __webpack_require__("./node_modules/recompose/setDisplayName.js");

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__("./node_modules/recompose/wrapDisplayName.js");

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = function pure(BaseComponent) {
  var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
    return !(0, _shallowEqual2.default)(props, nextProps);
  });

  if (true) {
    return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

exports.default = pure;

/***/ }),

/***/ "./node_modules/recompose/setDisplayName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setStatic = __webpack_require__("./node_modules/recompose/setStatic.js");

var _setStatic2 = _interopRequireDefault(_setStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;

/***/ }),

/***/ "./node_modules/recompose/setStatic.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

exports.default = setStatic;

/***/ }),

/***/ "./node_modules/recompose/shallowEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shallowEqual = __webpack_require__("./node_modules/fbjs/lib/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;

/***/ }),

/***/ "./node_modules/recompose/shouldUpdate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _setDisplayName = __webpack_require__("./node_modules/recompose/setDisplayName.js");

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__("./node_modules/recompose/wrapDisplayName.js");

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var ShouldUpdate = function (_Component) {
      (0, _inherits3.default)(ShouldUpdate, _Component);

      function ShouldUpdate() {
        (0, _classCallCheck3.default)(this, ShouldUpdate);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(_react.Component);

    if (true) {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

exports.default = shouldUpdate;

/***/ }),

/***/ "./node_modules/recompose/wrapDisplayName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getDisplayName = __webpack_require__("./node_modules/recompose/getDisplayName.js");

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),

/***/ "./node_modules/warning/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/admin-login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_admin_Layout__ = __webpack_require__("./components/admin/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-login.js";

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var initialState = {
  saving: false,
  save: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    image_url: ''
  },
  error: {
    openError: false,
    errMessage: ''
  }
};

var AdminLogin =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminLogin, _Component);

  function AdminLogin(props) {
    var _this;

    _classCallCheck(this, AdminLogin);

    _this = _possibleConstructorReturn(this, (AdminLogin.__proto__ || Object.getPrototypeOf(AdminLogin)).call(this, props));
    _this.state = _objectSpread({}, initialState, {
      loignCode: props.url.query.code
    });
    return _this;
  }

  _createClass(AdminLogin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.state.loignCode !== undefined) {
        this.setState({
          saving: true
        });
        __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default()("https://slack.com/api/oauth.access?client_id=128855814131.364624341426&client_secret=fcffdec17a2d48361b4467356339bc71&code=".concat(this.state.loignCode)).then(function (res) {
          return res.json();
        }).then(function (data) {
          if (data.ok) {
            _this2.saveUserData(data);
          } else {
            _this2.setState({
              error: {
                openError: true,
                errMessage: data
              }
            });
          }
        });
      }
    }
  }, {
    key: "saveUserData",
    value: function saveUserData(userReponse) {
      var _this3 = this;

      var user = userReponse.user;
      this.setState({
        user: {
          firstName: user.name.split(' ')[0],
          lastName: user.name.split(' ')[1],
          image_url: user.image_192,
          email: user.email
        }
      });
      __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default()("/api/update-create/".concat(user.email), {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.user)
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);

        _this3.setState({
          saving: false,
          save: true
        });

        localStorage.setItem('access_token', userReponse.access_token);
        __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push({
          pathname: '/admin-home',
          query: {
            _id: data.user._id
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.state;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        style: {
          left: '45%',
          position: 'absolute',
          top: '45%'
        },
        href: "https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=128855814131.364624341426",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "Sign in with Slack",
        height: "40",
        width: "172",
        src: "https://platform.slack-edge.com/img/sign_in_with_slack.png",
        srcset: "https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return AdminLogin;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = AdminLogin;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-login.js");
  reactHotLoader.register(AdminLogin, "AdminLogin", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-login.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-login.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin-login")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/admin-login.js");


/***/ })

},[4])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=admin-login.js.map