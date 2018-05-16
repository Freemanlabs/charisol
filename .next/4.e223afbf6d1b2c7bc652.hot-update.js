webpackHotUpdate(4,{

/***/ "./pages/admin-home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_admin_Layout__ = __webpack_require__("./components/admin/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__ = __webpack_require__("./node_modules/material-ui/AppBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__ = __webpack_require__("./node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_svg_icons_navigation_close__ = __webpack_require__("./node_modules/material-ui/svg-icons/navigation/close.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_svg_icons_navigation_close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_svg_icons_navigation_close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_FlatButton__ = __webpack_require__("./node_modules/material-ui/FlatButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_FlatButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_FlatButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_TextField__ = __webpack_require__("./node_modules/material-ui/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_RaisedButton__ = __webpack_require__("./node_modules/material-ui/RaisedButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_SelectField__ = __webpack_require__("./node_modules/material-ui/SelectField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_SelectField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_SelectField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_MenuItem__ = __webpack_require__("./node_modules/material-ui/MenuItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_MenuItem__);
var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-home.js";

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













function handleClick() {
  alert('onClick triggered on the title component');
}

var styles = {
  title: {
    cursor: 'pointer'
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    justifyContent: 'space-around'
  },
  paperLeft: {
    flex: 1,
    height: '100%',
    margin: 10,
    textAlign: 'center',
    padding: 10
  },
  paperRight: {
    height: 600,
    flex: 4,
    margin: 10,
    textAlign: 'center'
  },
  dropDown: {
    marginBottom: 200
  }
};
var initialState = {
  submitting: false,
  submitted: false,
  input: {
    firstName: "",
    lastName: "",
    image_url: "",
    description: "",
    position: "",
    gender: "",
    email: "",
    skill: []
  },
  currentUser: {},
  skills: []
};

var AdminHome =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminHome, _Component);

  function AdminHome(props) {
    var _this;

    _classCallCheck(this, AdminHome);

    _this = _possibleConstructorReturn(this, (AdminHome.__proto__ || Object.getPrototypeOf(AdminHome)).call(this, props));
    _this.state = _objectSpread({}, initialState);
    _this.handleChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.submitForm = _this.submitForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AdminHome, [{
    key: "handleInputChange",
    value: function handleInputChange(newPartialInput) {
      this.setState(function (state) {
        return _objectSpread({}, state, {
          input: _objectSpread({}, state.input, newPartialInput)
        });
      });
    }
  }, {
    key: "submitForm",
    value: function submitForm(event) {
      event.preventDefault();
      console.log(event); // const { input } = this.state;
      // this.setState({ submitting: true })
      // fetch('/api/skills', {
      //   method: 'post',
      //   headers: {
      //     'Accept': 'application/json, text/plain, */*',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(input)
      // }).then((response) => {
      //   response.json().then((res) => {
      //     if (res.status === 201 && res.success === true) {
      //       this.setState({ submitted: true })
      //       this.setState(initialState)
      //       alert('Message sent!');
      //     } else {
      //       this.setState({ submitting: false });
      //       alert('Internal server error');
      //     }
      //   })
      // })
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getSkills();
      this.getUser();
    }
  }, {
    key: "getSkills",
    value: function getSkills() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default()("/api/get-skills").then(function (res) {
        return res.json();
      }).then(function (data) {
        return _this2.setState({
          teams: data
        });
      });
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
    key: "getUser",
    value: function getUser() {
      var _this3 = this;

      var user = this.getUserLocally();
      __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default()("/api/team/".concat(user._id)).then(function (res) {
        return res.json();
      }).then(function (user) {
        _this3.setState({
          currentUser: user
        });

        _this3.setUserLocally(user);
      });
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
      var _this4 = this;

      var currentUser = this.state.currentUser;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_admin_Layout__["a" /* default */], {
        title: "Dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: styles.div,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_TextField___default.a, {
        hintText: "Enter Fullname",
        value: currentUser.firstName,
        onChange: function onChange(e) {
          return _this4.handleInputChange({
            firstName: e.target.value
          });
        },
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_TextField___default.a, {
        hintText: "Enter lastName",
        value: currentUser.lastName,
        onChange: function onChange(e) {
          return _this4.handleInputChange({
            lastName: e.target.value
          });
        },
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: styles.div,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_SelectField___default.a, {
        floatingLabelText: "Gender",
        state: styles.dropDown,
        value: currentUser.gender,
        onChange: this.handleChange,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_MenuItem___default.a, {
        value: "Male",
        primaryText: "Male",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_MenuItem___default.a, {
        value: "Female",
        primaryText: "Female",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_SelectField___default.a, {
        floatingLabelText: "Position",
        state: styles.dropDown,
        value: currentUser.position,
        onChange: this.handleChange,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_MenuItem___default.a, {
        value: "Founder",
        primaryText: "Founder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_MenuItem___default.a, {
        value: "Developer",
        primaryText: "Developer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_MenuItem___default.a, {
        value: "Project Manager",
        primaryText: "Project Manager",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: styles.div,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_TextField___default.a, {
        hintText: "Enter Email",
        value: currentUser.email,
        fullWidth: true,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_TextField___default.a, {
        hintText: "Enter image_url",
        value: currentUser.image_url,
        fullWidth: true,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_TextField___default.a, {
        hintText: "Enter skills",
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: styles.div,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_TextField___default.a, {
        hintText: "Enter description",
        value: currentUser.description,
        multiLine: true,
        onChange: this.handleChange,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_RaisedButton___default.a, {
        label: "Submit",
        type: "button",
        primary: true,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return AdminHome;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = AdminHome;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(handleClick, "handleClick", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-home.js");
  reactHotLoader.register(styles, "styles", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-home.js");
  reactHotLoader.register(initialState, "initialState", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-home.js");
  reactHotLoader.register(AdminHome, "AdminHome", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-home.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-home.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin-home")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.e223afbf6d1b2c7bc652.hot-update.js.map