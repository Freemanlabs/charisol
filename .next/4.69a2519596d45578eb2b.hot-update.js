webpackHotUpdate(4,{

/***/ "./pages/team.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_about_scss__ = __webpack_require__("./styles/about.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_about_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_about_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_img_bg_team_1_png__ = __webpack_require__("./assets/img/bg_team_1.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_img_bg_team_1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_img_bg_team_1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/pages/team.js";

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









var Team =
/*#__PURE__*/
function (_Component) {
  _inherits(Team, _Component);

  function Team(props) {
    var _this;

    _classCallCheck(this, Team);

    _this = _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).call(this, props));
    _this.state = {
      teams: [],
      user: {}
    };
    _this.getUserInfo = _this.getUserInfo.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Team, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()("/api/get-teams").then(function (res) {
        return res.json();
      }).then(function (data) {
        return _this2.setState({
          teams: data
        });
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
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Layout__["a" /* default */], {
        title: "Team | Charisol",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_2__styles_about_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("nav", {
        id: "profile",
        className: "profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h5", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Profile Details"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "close close-red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "top-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
        src: this.state.user.image_url,
        alt: "team member",
        className: "avatar",
        style: {
          with: '54%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h5", {
        className: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.state.user.firstName, " ", this.state.user.lastName), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, this.state.user.position), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "blue-badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), "Core team")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "m-t-md m-b-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.state.user.description))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        className: "btn-curve-purple m-t-md",
        href: "./start.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Start a project", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
        src: "../static/img/icon_right_white.svg",
        alt: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("section", {
        className: "team",
        id: "panel",
        "data-slideout-ignore": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Navbar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "content-cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "row core",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "text-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "heading-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h1", {
        className: "heading no-reveal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Core team.")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "sub-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "sub-text no-reveal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "We are a team of young and vibrant techies filled with loads of passion for what we do. We are proud workaholics who drink a little too much coffee and believe in power naps.")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "sub-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "sub-text no-reveal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Our mutual desire to change the world through cutting edge programming techniques is what keeps us together. Occasionally we try to listen to our mothers and know when to pull an all nighter and when to catch 40 winks.")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns img-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "image-wrapper-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "image-wrapper no-reveal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "image team-image",
        alt: "team",
        style: {
          backgroundImage: 'url(' + __WEBPACK_IMPORTED_MODULE_5__assets_img_bg_team_1_png___default.a + ')'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "people-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        id: "people",
        className: "row people",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        id: "people-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, this.state.teams.map(function (team, i) {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "tile",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "avatar-wrapper no-reveal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "avatar",
          alt: "team member",
          style: {
            backgroundImage: 'url(' + team.image_url + ')'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "text-wrap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "sub-text-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h5", {
          className: "bold sub-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, team.firstName, " ", team.lastName)), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "sub-text-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
          className: "light sub-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, team.position))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", {
          className: "team-profile-btn btn-clear-purple",
          onClick: function onClick(e) {
            return _this3.getUserInfo(team);
          },
          "data-person-id": team._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, "View Profile", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
          src: __webpack_require__("./assets/img/icon_right_purple.svg"),
          alt: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        })));
      }))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Team;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

var _default = Team;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Team, "Team", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/team.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/team.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/team")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.69a2519596d45578eb2b.hot-update.js.map