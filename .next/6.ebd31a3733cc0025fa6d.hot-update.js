webpackHotUpdate(6,{

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
false,

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
false,

/***/ "./node_modules/babel-runtime/core-js/map.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
false,

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
false,

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
false,

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false,

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
var _jsxFileName = "C:\\Users\\user\\challaris-tech-website\\pages\\team.js";

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
      user: {
        skills: []
      }
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
        title: "Team | Charisol Technologies",
        content: "Our team comprises of vetted freelance developers that have been tested on their technical skills, communication skills, and project management skills.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_2__styles_about_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("nav", {
        id: "profile",
        className: "profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h5", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Profile Details"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "close close-red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "top-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
          lineNumber: 43
        }
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h5", {
        className: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, this.state.user.firstName, " ", this.state.user.lastName), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.state.user.position), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "blue-badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), "Core team")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "m-t-md m-b-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.state.user.biography)), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "m-t-md m-b-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Skills")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, this.state.user.skills.map(function (skill) {
        return skill.name;
      }).join(", ")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        className: "btn-curve-purple m-t-md",
        href: "./start.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Start a project", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
        src: "../static/img/icon_right_white.svg",
        alt: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("section", {
        className: "team",
        id: "panel",
        "data-slideout-ignore": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Navbar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "content-cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "row core",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "text-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "heading-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h1", {
        className: "heading no-reveal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Core team.")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "sub-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "sub-text no-reveal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "We are a team of young and vibrant techies filled with loads of passion for what we do. We are proud workaholics who drink a little too much coffee and believe in power naps.")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "sub-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        className: "sub-text no-reveal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Our mutual desire to change the world through cutting edge programming techniques is what keeps us together. Occasionally we try to listen to our mothers and know when to pull an all nighter and when to catch 40 winks.")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "six columns img-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "image-wrapper-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "image-wrapper no-reveal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "image team-image",
        alt: "team",
        style: {
          backgroundImage: 'url(' + __WEBPACK_IMPORTED_MODULE_5__assets_img_bg_team_1_png___default.a + ')'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "people-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        id: "people",
        className: "row people",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        id: "people-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, this.state.teams.map(function (team, i) {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "tile",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "avatar-wrapper no-reveal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "avatar",
          alt: "team member",
          style: {
            backgroundImage: 'url(' + team.image_url + ')'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "text-wrap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "sub-text-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h5", {
          className: "bold sub-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, team.firstName, " ", team.lastName)), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "sub-text-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
          className: "light sub-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, team.position))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", {
          className: "team-profile-btn btn-clear-purple",
          onClick: function onClick(e) {
            return _this3.getUserInfo(team);
          },
          "data-person-id": team._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, "View Profile", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
          src: __webpack_require__("./assets/img/icon_right_purple.svg"),
          alt: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        })));
      }))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
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

  reactHotLoader.register(Team, "Team", "C:\\Users\\user\\challaris-tech-website\\pages\\team.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\user\\challaris-tech-website\\pages\\team.js");
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
//# sourceMappingURL=6.ebd31a3733cc0025fa6d.hot-update.js.map