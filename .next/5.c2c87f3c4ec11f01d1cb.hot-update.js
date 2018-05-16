webpackHotUpdate(5,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Snackbar__ = __webpack_require__("./node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Snackbar__);
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
        _this3.setState({
          saving: false,
          save: true
        });

        localStorage.setItem('access_token', userReponse.access_token);
        __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push('/admin-home');
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

/***/ })

})
//# sourceMappingURL=5.c2c87f3c4ec11f01d1cb.hot-update.js.map