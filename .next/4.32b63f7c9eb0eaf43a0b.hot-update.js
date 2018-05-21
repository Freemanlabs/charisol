webpackHotUpdate(4,{

/***/ "./pages/users.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input__ = __webpack_require__("./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TextField__ = __webpack_require__("./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_dist_react_select_css__ = __webpack_require__("./node_modules/react-select/dist/react-select.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_dist_react_select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_select_dist_react_select_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_Dashboard__ = __webpack_require__("./components/admin/Dashboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_InputLabel__ = __webpack_require__("./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_InputLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_InputLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_InputAdornment__ = __webpack_require__("./node_modules/@material-ui/core/InputAdornment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_InputAdornment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_InputAdornment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Card__ = __webpack_require__("./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_CardActions__ = __webpack_require__("./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_CardActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_CardActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_CardContent__ = __webpack_require__("./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_CardContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Grid__ = __webpack_require__("./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_core_Icon__ = __webpack_require__("./node_modules/@material-ui/core/Icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_core_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_core_LinearProgress__ = __webpack_require__("./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_core_LinearProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_LinearProgress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_core_Snackbar__ = __webpack_require__("./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_core_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_ui_core_Table__ = __webpack_require__("./node_modules/@material-ui/core/Table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_ui_core_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_core_TableBody__ = __webpack_require__("./node_modules/@material-ui/core/TableBody/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_core_TableBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__material_ui_core_TableBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell__ = __webpack_require__("./node_modules/@material-ui/core/TableCell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_core_TableHead__ = __webpack_require__("./node_modules/@material-ui/core/TableHead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_core_TableHead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__material_ui_core_TableHead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__material_ui_core_TableRow__ = __webpack_require__("./node_modules/@material-ui/core/TableRow/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__material_ui_core_TableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_TableRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_ui_core_Paper__ = __webpack_require__("./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__material_ui_core_Paper__);
var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/pages/users.js";

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
  currentUser: {},
  users: []
};

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      height: 250,
      width: '90%',
      margin: '30px auto'
    },
    group: {
      margin: "".concat(theme.spacing.unit, "px 0")
    }
  };
};

var AdminProfile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminProfile, _React$Component);

  function AdminProfile(props) {
    var _this;

    _classCallCheck(this, AdminProfile);

    _this = _possibleConstructorReturn(this, (AdminProfile.__proto__ || Object.getPrototypeOf(AdminProfile)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleInputChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newPartialInput) {
        _this.setState(function (state) {
          return _objectSpread({}, state, {
            input: _objectSpread({}, state.input, newPartialInput)
          });
        });
      }
    });
    _this.state = _objectSpread({}, initialState); // this.submitForm = this.submitForm.bind(this);
    // this.handleClose = this.handleClose.bind(this);

    return _this;
  }

  _createClass(AdminProfile, [{
    key: "getUsers",
    value: function getUsers() {
      var _this2 = this;

      fetch("/api/get-teams").then(function (res) {
        return res.json();
      }).then(function (data) {
        _this2.setState({
          users: data
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUsers();
    }
  }, {
    key: "getUserLocally",
    value: function getUserLocally() {
      return JSON.parse(localStorage.getItem('user'));
    }
  }, {
    key: "setUserLocally",
    value: function setUserLocally(user) {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo(userInfo) {
      this.setState({
        user: userInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          input = _state.input,
          open = _state.open,
          vertical = _state.vertical,
          horizontal = _state.horizontal,
          valueSkillBind = _state.valueSkillBind;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_admin_Dashboard__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_Snackbar___default.a, {
        anchorOrigin: {
          vertical: vertical,
          horizontal: horizontal
        },
        open: open,
        onClose: this.handleClose,
        autoHideDuration: 6000,
        ContentProps: {
          'aria-describedby': 'message-id'
        },
        action: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Icon___default.a, {
          onClick: this.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, "close")],
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "message-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, "Updated"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 24,
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23__material_ui_core_Paper___default.a, {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_Table___default.a, {
        className: classes.table,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__material_ui_core_TableHead___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_TableRow___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, "First Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "Last Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Email"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Phone Number"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, "phoneNumber"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__material_ui_core_TableBody___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, this.state.users.map(function (n) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_TableRow___default.a, {
          key: n._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, n.firstName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, n.lastName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, n.email), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, n.phoneNumber), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        }, n.position));
      }))))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return AdminProfile;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

AdminProfile.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(AdminProfile);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/users.js");
  reactHotLoader.register(styles, "styles", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/users.js");
  reactHotLoader.register(AdminProfile, "AdminProfile", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/users.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/users.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/users")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.32b63f7c9eb0eaf43a0b.hot-update.js.map