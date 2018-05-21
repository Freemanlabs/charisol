webpackHotUpdate(4,{

/***/ "./pages/admin-home.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_MenuItem__ = __webpack_require__("./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_ArrowDropDown__ = __webpack_require__("./node_modules/@material-ui/icons/ArrowDropDown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_ArrowDropDown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_ArrowDropDown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Cancel__ = __webpack_require__("./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Cancel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Cancel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_ArrowDropUp__ = __webpack_require__("./node_modules/@material-ui/icons/ArrowDropUp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_ArrowDropUp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_ArrowDropUp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_icons_Clear__ = __webpack_require__("./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_icons_Clear___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_icons_Clear__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Chip__ = __webpack_require__("./node_modules/@material-ui/core/Chip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_select__ = __webpack_require__("./node_modules/react-select/dist/react-select.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_select_dist_react_select_css__ = __webpack_require__("./node_modules/react-select/dist/react-select.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_select_dist_react_select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_select_dist_react_select_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_Layout__ = __webpack_require__("./components/admin/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_AccountCircle__ = __webpack_require__("./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_AccountCircle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_AccountCircle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel__ = __webpack_require__("./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment__ = __webpack_require__("./node_modules/@material-ui/core/InputAdornment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl__ = __webpack_require__("./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_core_Card__ = __webpack_require__("./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_core_CardActions__ = __webpack_require__("./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_core_CardActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_CardActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_core_CardContent__ = __webpack_require__("./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__material_ui_core_CardContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid__ = __webpack_require__("./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_ui_core_RadioGroup__ = __webpack_require__("./node_modules/@material-ui/core/RadioGroup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_ui_core_RadioGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__material_ui_core_RadioGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__material_ui_core_FormLabel__ = __webpack_require__("./node_modules/@material-ui/core/FormLabel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__material_ui_core_FormLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__material_ui_core_FormLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__material_ui_core_FormControlLabel__ = __webpack_require__("./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__material_ui_core_FormControlLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__material_ui_core_FormControlLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__material_ui_core_Radio__ = __webpack_require__("./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__material_ui_core_Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__material_ui_core_Radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__material_ui_icons_Update__ = __webpack_require__("./node_modules/@material-ui/icons/Update.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__material_ui_icons_Update___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__material_ui_icons_Update__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__material_ui_core_Avatar__ = __webpack_require__("./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__material_ui_core_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__material_ui_core_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__material_ui_core_Icon__ = __webpack_require__("./node_modules/@material-ui/core/Icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__material_ui_core_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__material_ui_core_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__material_ui_core_LinearProgress__ = __webpack_require__("./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__material_ui_core_LinearProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__material_ui_core_LinearProgress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__material_ui_core_Snackbar__ = __webpack_require__("./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__material_ui_core_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__material_ui_core_Snackbar__);
var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-home.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



































var Option =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Option, _React$Component);

  function Option() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Option);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Option.__proto__ || Object.getPrototypeOf(Option)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.props.onSelect(_this.props.option, event);
      }
    }), _temp));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isFocused = _props.isFocused,
          isSelected = _props.isSelected,
          onFocus = _props.onFocus;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_MenuItem___default.a, {
        onFocus: onFocus,
        selected: isFocused,
        onClick: this.handleClick,
        component: "div",
        style: {
          fontWeight: isSelected ? 500 : 400
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Option;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

function SelectWrapped(props) {
  var classes = props.classes,
      other = _objectWithoutProperties(props, ["classes"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_react_select__["a" /* default */], _extends({
    optionComponent: Option,
    noResultsText: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      }
    }, 'No results found'),
    arrowRenderer: function arrowRenderer(arrowProps) {
      return arrowProps.isOpen ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_ArrowDropUp___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_ArrowDropDown___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      });
    },
    clearRenderer: function clearRenderer() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_icons_Clear___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      });
    },
    valueComponent: function valueComponent(valueProps) {
      var value = valueProps.value,
          children = valueProps.children,
          onRemove = valueProps.onRemove;

      var onDelete = function onDelete(event) {
        event.preventDefault();
        event.stopPropagation();
        onRemove(value);
      };

      if (onRemove) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Chip___default.a, {
          tabIndex: -1,
          label: children,
          className: classes.chip,
          deleteIcon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Cancel___default.a, {
            onTouchEnd: onDelete,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          }),
          onDelete: onDelete,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Select-value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, children);
    }
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }));
}

var ITEM_HEIGHT = 48;

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      height: 250,
      width: '60%',
      margin: '30px auto'
    },
    chip: {
      margin: theme.spacing.unit / 4
    },
    group: {
      margin: "".concat(theme.spacing.unit, "px 0")
    },
    bigAvatar: {
      width: 100,
      height: 100,
      margin: '10px auto'
    },
    // We had to use a lot of global selectors in order to style react-select.
    // We are waiting on https://github.com/JedWatson/react-select/issues/1679
    // to provide a much better implementation.
    // Also, we had to reset the default style injected by the library.
    '@global': {
      '.Select-control': {
        display: 'flex',
        alignItems: 'center',
        border: 0,
        height: 'auto',
        background: 'transparent',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      '.Select-multi-value-wrapper': {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap'
      },
      '.Select--multi .Select-input': {
        margin: 0
      },
      '.Select.has-value.is-clearable.Select--single > .Select-control .Select-value': {
        padding: 0
      },
      '.Select-noresults': {
        padding: theme.spacing.unit * 2
      },
      '.Select-input': {
        display: 'inline-flex !important',
        padding: 0,
        height: 'auto'
      },
      '.Select-input input': {
        background: 'transparent',
        border: 0,
        padding: 0,
        cursor: 'default',
        display: 'inline-block',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        margin: 0,
        outline: 0
      },
      '.Select-placeholder, .Select--single .Select-value': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(16),
        padding: 0
      },
      '.Select-placeholder': {
        opacity: 0.42,
        color: theme.palette.common.black
      },
      '.Select-menu-outer': {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[2],
        position: 'absolute',
        left: 0,
        top: "calc(100% + ".concat(theme.spacing.unit, "px)"),
        width: '100%',
        zIndex: 2,
        maxHeight: ITEM_HEIGHT * 4.5
      },
      '.Select.is-focused:not(.is-open) > .Select-control': {
        boxShadow: 'none'
      },
      '.Select-menu': {
        maxHeight: ITEM_HEIGHT * 4.5,
        overflowY: 'auto'
      },
      '.Select-menu div': {
        boxSizing: 'content-box'
      },
      '.Select-arrow-zone, .Select-clear-zone': {
        color: theme.palette.action.active,
        cursor: 'pointer',
        height: 21,
        width: 21,
        zIndex: 1
      },
      // Only for screen readers. We can't use display none.
      '.Select-aria-only': {
        position: 'absolute',
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        height: 1,
        width: 1,
        margin: -1
      }
    }
  };
};

var initialState = {
  submitting: false,
  submitted: false,
  input: {
    firstName: "",
    lastName: "",
    image_url: "",
    phoneNumber: "",
    description: "",
    position: "",
    gender: "",
    email: "",
    address: "",
    biography: "",
    githubUsername: "",
    skills: []
  },
  currentUser: {},
  allSkills: []
};

var AdminHome =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AdminHome, _React$Component2);

  function AdminHome(props) {
    var _this2;

    _classCallCheck(this, AdminHome);

    _this2 = _possibleConstructorReturn(this, (AdminHome.__proto__ || Object.getPrototypeOf(AdminHome)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this2), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name) {
        return function (value) {
          var params = value.map(function (el) {
            return el['value'];
          });

          var newPartialInput = _defineProperty({}, name, params);

          _this2.setState(function (state) {
            return _objectSpread({}, state, {
              input: _objectSpread({}, state.input, newPartialInput)
            });
          });
        };
      }
    });
    Object.defineProperty(_assertThisInitialized(_this2), "handleInputChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newPartialInput) {
        _this2.setState(function (state) {
          return _objectSpread({}, state, {
            input: _objectSpread({}, state.input, newPartialInput)
          });
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this2), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this2.setState({
          open: false
        });
      }
    });
    _this2.state = _objectSpread({}, initialState, {
      currentUserId: props.url.query._id,
      single: null,
      multi: null,
      multiLabel: null,
      open: false,
      vertical: null,
      horizontal: null
    });
    _this2.submitForm = _this2.submitForm.bind(_assertThisInitialized(_this2));
    _this2.handleClose = _this2.handleClose.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(AdminHome, [{
    key: "getSkills",
    value: function getSkills() {
      var _this3 = this;

      fetch("/api/get-skills").then(function (res) {
        return res.json();
      }).then(function (data) {
        var suggestion = data.map(function (suggestion) {
          return {
            value: suggestion._id,
            label: suggestion.name
          };
        });

        _this3.setState({
          allSkills: suggestion
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getSkills();
      this.getUser();
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
      var _this4 = this;

      var userId = this.state.currentUserId;
      fetch("/api/team/".concat(userId)).then(function (res) {
        return res.json();
      }).then(function (user) {
        _this4.setState({
          input: user
        });

        console.log(_this4.state.input);

        _this4.setUserLocally(user);
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
    key: "submitForm",
    value: function submitForm(event) {
      var _this5 = this;

      this.setState({
        submitted: true
      });
      event.preventDefault();
      var input = this.state.input;
      this.setState({
        submitting: true
      });
      fetch("/api/team/".concat(this.state.currentUserId), {
        method: 'put',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
      }).then(function (response) {
        response.json().then(function (res) {
          if (res.status === 201 && res.success === true) {
            _this5.setState({
              submitting: false,
              vertical: 'top',
              horizontal: 'center',
              open: true
            });
          } else {
            _this5.setState({
              submitting: false,
              vertical: 'top',
              horizontal: 'center',
              open: true
            });
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this,
          _React$createElement;

      var classes = this.props.classes;
      var _state = this.state,
          input = _state.input,
          open = _state.open,
          vertical = _state.vertical,
          horizontal = _state.horizontal;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_admin_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_29__material_ui_core_Avatar___default.a, {
        alt: "Adelle Charles",
        src: input.image_url,
        className: classes.bigAvatar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_32__material_ui_core_Snackbar___default.a, {
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
        action: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__material_ui_core_Icon___default.a, {
          onClick: this.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 386
          }
        }, "close")],
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "message-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 388
          }
        }, "Updated"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__material_ui_core_Card___default.a, {
        className: classes.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__material_ui_core_CardContent___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 24,
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl___default.a, {
        className: classes.margin,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel___default.a, {
        htmlFor: "input-with-icon-adornment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }, "Enter First Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input___default.a, {
        value: input.firstName,
        onChange: function onChange(e) {
          return _this6.handleInputChange({
            firstName: e.target.value
          });
        },
        fullWidth: true,
        id: "input-with-icon-adornment",
        startAdornment: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_AccountCircle___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl___default.a, {
        className: classes.margin,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel___default.a, {
        htmlFor: "input-with-icon-adornment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, "Enter Last Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input___default.a, {
        value: input.lastName,
        onChange: function onChange(e) {
          return _this6.handleInputChange({
            lastName: e.target.value
          });
        },
        fullWidth: true,
        id: "input-with-icon-adornment",
        startAdornment: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 413
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_AccountCircle___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 24,
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl___default.a, {
        className: classes.margin,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel___default.a, {
        htmlFor: "input-with-icon-adornment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, "Enter Email"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input___default.a, {
        value: input.email,
        onChange: function onChange(e) {
          return _this6.handleInputChange({
            email: e.target.value
          });
        },
        fullWidth: true,
        id: "input-with-icon-adornment",
        startAdornment: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__material_ui_core_Icon___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428
          }
        }, "email ")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl___default.a, {
        className: classes.margin,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel___default.a, {
        htmlFor: "input-with-icon-adornment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, "Enter Phone Number"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input___default.a, {
        value: input.phoneNumber,
        onChange: function onChange(e) {
          return _this6.handleInputChange({
            phoneNumber: e.target.value
          });
        },
        fullWidth: true,
        id: "input-with-icon-adornment",
        startAdornment: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__material_ui_core_Icon___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          }
        }, "phone")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 24,
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl___default.a, {
        className: classes.margin,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel___default.a, {
        htmlFor: "input-with-icon-adornment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }, "Enter Github username"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input___default.a, (_React$createElement = {
        value: input.githubUsername
      }, _defineProperty(_React$createElement, "value", input.githubUsername), _defineProperty(_React$createElement, "onChange", function onChange(e) {
        return _this6.handleInputChange({
          githubUsername: e.target.value
        });
      }), _defineProperty(_React$createElement, "fullWidth", true), _defineProperty(_React$createElement, "id", "input-with-icon-adornment"), _defineProperty(_React$createElement, "startAdornment", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment___default.a, {
        position: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__material_ui_core_Icon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        }
      }, "code"))), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 452
      }), _React$createElement)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl___default.a, {
        className: classes.margin,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel___default.a, {
        htmlFor: "input-with-icon-adornment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, "Enter Slogan"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input___default.a, {
        value: input.slogan,
        onChange: function onChange(e) {
          return _this6.handleInputChange({
            slogan: e.target.value
          });
        },
        fullWidth: true,
        id: "input-with-icon-adornment",
        startAdornment: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 466
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__material_ui_core_Icon___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 467
          }
        }, "format_quote")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 24,
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl___default.a, {
        className: classes.margin,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel___default.a, {
        htmlFor: "input-with-icon-adornment",
        placeholder: "As written on your contract",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        }
      }, "Position"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input___default.a, {
        value: input.position,
        onChange: function onChange(e) {
          return _this6.handleInputChange({
            position: e.target.value
          });
        },
        fullWidth: true,
        id: "input-with-icon-adornment",
        startAdornment: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 482
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__material_ui_core_Icon___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 483
          }
        }, "filter_1")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        }
      }, input.skills.map(function (input) {
        return {
          'value': input._id,
          label: input.name
        };
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TextField___default.a, {
        fullWidth: true,
        value: input.skills.map(function (input) {
          return {
            value: input._id,
            label: input.name
          };
        }),
        onChange: this.handleChange('skills'),
        label: "Select Skills",
        InputLabelProps: {
          shrink: true
        },
        InputProps: {
          inputComponent: SelectWrapped,
          inputProps: {
            classes: classes,
            multi: true,
            instanceId: 'react-select-chip-label',
            id: 'react-select-chip-label',
            options: this.state.allSkills
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 24,
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl___default.a, {
        className: classes.margin,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel___default.a, {
        htmlFor: "input-with-icon-adornment",
        placeholder: "As written on your contract",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        }
      }, "Biography"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input___default.a, {
        value: input.biography,
        onChange: function onChange(e) {
          return _this6.handleInputChange({
            biography: e.target.value
          });
        },
        fullWidth: true,
        id: "input-with-icon-adornment",
        multiline: true,
        rowsMax: "10",
        rows: "10",
        startAdornment: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 523
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__material_ui_core_Icon___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 524
          }
        }, "book")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl___default.a, {
        className: classes.margin,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_InputLabel___default.a, {
        htmlFor: "input-with-icon-adornment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        }
      }, "Current Address"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Input___default.a, {
        value: input.address,
        onChange: function onChange(e) {
          return _this6.handleInputChange({
            address: e.target.value
          });
        },
        fullWidth: true,
        id: "input-with-icon-adornment",
        multiline: true,
        rowsMax: "10",
        rows: "5",
        startAdornment: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_InputAdornment___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 539
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__material_ui_core_Icon___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 540
          }
        }, "add_location")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_FormControl___default.a, {
        style: {
          marginTop: 20
        },
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        }
      }, this.state.submitting ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31__material_ui_core_LinearProgress___default.a, {
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        }
      }) : '', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_27__material_ui_core_Button___default.a, {
        variant: "raised",
        type: "submit",
        size: "large",
        color: "primary",
        className: classes.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        }
      }, " Update")))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return AdminHome;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

AdminHome.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(AdminHome);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-home.js");
  reactHotLoader.register(SelectWrapped, "SelectWrapped", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-home.js");
  reactHotLoader.register(ITEM_HEIGHT, "ITEM_HEIGHT", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-home.js");
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
//# sourceMappingURL=4.41f368927c3eeb0eca58.hot-update.js.map