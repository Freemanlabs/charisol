webpackHotUpdate(4,{

/***/ "./node_modules/@material-ui/core/LinearProgress/LinearProgress.js":
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

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/browser.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__("./node_modules/@material-ui/core/styles/colorManipulator.js");

var TRANSITION_DURATION = 4; // seconds

var styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 5
    },
    colorPrimary: {
      backgroundColor: (0, _colorManipulator.lighten)(theme.palette.primary.light, 0.6)
    },
    colorSecondary: {
      backgroundColor: (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.4)
    },
    buffer: {
      backgroundColor: 'transparent'
    },
    query: {
      transform: 'rotate(180deg)'
    },
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      animation: 'buffer 3s infinite linear'
    },
    dashedColorPrimary: {
      backgroundImage: "radial-gradient(".concat((0, _colorManipulator.lighten)(theme.palette.primary.light, 0.6), " 0%, ").concat((0, _colorManipulator.lighten)(theme.palette.primary.light, 0.6), " 16%, transparent 42%)"),
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    dashedColorSecondary: {
      backgroundImage: "radial-gradient(".concat((0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.4), " 0%, ").concat((0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.6), " 16%, transparent 42%)"),
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    bar: {
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      transformOrigin: 'left'
    },
    barColorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    barColorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },
    bar1Indeterminate: {
      width: 'auto',
      willChange: 'left, right',
      animation: 'mui-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },
    bar2Indeterminate: {
      width: 'auto',
      willChange: 'left, right',
      animation: 'mui-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
      animationDelay: '1.15s'
    },
    bar1Determinate: {
      willChange: 'transform',
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    bar1Buffer: {
      zIndex: 1,
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    bar2Buffer: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    '@keyframes mui-indeterminate1': {
      //  |-----|---x-||-----||-----|
      '0%': {
        left: '-35%',
        right: '100%'
      },
      //  |-----|-----||-----||xxxx-|
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes mui-indeterminate2': {
      //  |xxxxx|xxxxx||-----||-----|
      '0%': {
        left: '-200%',
        right: '100%'
      },
      //  |-----|-----||-----||-x----|
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0px -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0px -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    }
  };
};
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */


exports.styles = styles;

function LinearProgress(props) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      value = props.value,
      valueBuffer = props.valueBuffer,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "color", "value", "valueBuffer", "variant"]);
  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.colorPrimary, color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.colorSecondary, color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.buffer, variant === 'buffer'), (0, _defineProperty2.default)(_classNames, classes.query, variant === 'query'), _classNames), classNameProp);
  var dashedClass = (0, _classnames.default)(classes.dashed, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.dashedColorPrimary, color === 'primary'), (0, _defineProperty2.default)(_classNames2, classes.dashedColorSecondary, color === 'secondary'), _classNames2));
  var bar1ClassName = (0, _classnames.default)(classes.bar, (_classNames3 = {}, (0, _defineProperty2.default)(_classNames3, classes.barColorPrimary, color === 'primary'), (0, _defineProperty2.default)(_classNames3, classes.barColorSecondary, color === 'secondary'), (0, _defineProperty2.default)(_classNames3, classes.bar1Indeterminate, variant === 'indeterminate' || variant === 'query'), (0, _defineProperty2.default)(_classNames3, classes.bar1Determinate, variant === 'determinate'), (0, _defineProperty2.default)(_classNames3, classes.bar1Buffer, variant === 'buffer'), _classNames3));
  var bar2ClassName = (0, _classnames.default)(classes.bar, (_classNames4 = {}, (0, _defineProperty2.default)(_classNames4, classes.barColorPrimary, color === 'primary' && variant !== 'buffer'), (0, _defineProperty2.default)(_classNames4, classes.colorPrimary, color === 'primary' && variant === 'buffer'), (0, _defineProperty2.default)(_classNames4, classes.barColorSecondary, color === 'secondary' && variant !== 'buffer'), (0, _defineProperty2.default)(_classNames4, classes.colorSecondary, color === 'secondary' && variant === 'buffer'), (0, _defineProperty2.default)(_classNames4, classes.bar2Indeterminate, variant === 'indeterminate' || variant === 'query'), (0, _defineProperty2.default)(_classNames4, classes.bar2Buffer, variant === 'buffer'), _classNames4));
  var rootProps = {};
  var inlineStyles = {
    bar1: {},
    bar2: {}
  };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      inlineStyles.bar1.transform = "scaleX(".concat(value / 100, ")");
    } else {
       true ? (0, _warning.default)(false, 'Material-UI: you need to provide a value property ' + 'when using the determinate or buffer variant of LinearProgress .') : void 0;
    }
  }

  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      inlineStyles.bar2.transform = "scaleX(".concat((valueBuffer || 0) / 100, ")");
    } else {
       true ? (0, _warning.default)(false, 'Material-UI: you need to provide a valueBuffer property ' + 'when using the buffer variant of LinearProgress.') : void 0;
    }
  }

  return _react.default.createElement("div", (0, _extends2.default)({
    className: className,
    role: "progressbar"
  }, rootProps, other), variant === 'buffer' ? _react.default.createElement("div", {
    className: dashedClass
  }) : null, _react.default.createElement("div", {
    className: bar1ClassName,
    style: inlineStyles.bar1
  }), variant === 'determinate' ? null : _react.default.createElement("div", {
    className: bar2ClassName,
    style: inlineStyles.bar2
  }));
}

LinearProgress.propTypes =  true ? {
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
  color: _propTypes.default.oneOf(['primary', 'secondary']),

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: _propTypes.default.number,

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: _propTypes.default.number,

  /**
   * The variant of progress indicator. Use indeterminate or query
   * when there is no progress value.
   */
  variant: _propTypes.default.oneOf(['determinate', 'indeterminate', 'buffer', 'query'])
} : {};
LinearProgress.defaultProps = {
  color: 'primary',
  variant: 'indeterminate'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiLinearProgress'
})(LinearProgress);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/LinearProgress/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _LinearProgress.default;
  }
});

var _LinearProgress = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/LinearProgress/LinearProgress.js"));

/***/ }),

/***/ "./pages/contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_about_scss__ = __webpack_require__("./styles/about.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_about_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_about_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Snackbar__ = __webpack_require__("./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_LinearProgress__ = __webpack_require__("./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_LinearProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_LinearProgress__);
var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/pages/contact.js";

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
  showAlert: false,
  input: {
    email: "",
    name: "",
    message: ""
  }
};

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
    _this.state = _objectSpread({}, initialState);
    _this.handleChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.submitForm = _this.submitForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Contact, [{
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
      var _this2 = this;

      event.preventDefault();
      var _state = this.state,
          input = _state.input,
          showAlert = _state.showAlert;
      this.setState({
        submitting: true
      });
      __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()('/api/contacts', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
      }).then(function (response) {
        response.json().then(function (res) {
          if (res.status === 201 && res.success === true) {
            _this2.setState({
              submitted: true
            });

            _this2.setState(initialState);

            _this2.setState({
              showAlert: true
            });
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
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          input = _state2.input,
          showAlert = _state2.showAlert;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Layout__["a" /* default */], {
        title: "Contact Us | Charisol Technologies",
        content: "Let us help you bring your projects to life and deliver your design/developments needs the right way.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_2__styles_about_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Snackbar___default.a, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        open: showAlert,
        onClose: this.handleClose,
        ContentProps: {
          'aria-describedby': 'message-id'
        },
        message: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
          id: "message-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, "Message Sent! You will be notify"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "panel",
        "data-slideout-ignore": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("section", {
        className: "pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Navbar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
        src: __webpack_require__("./assets/img/bg_contact.png"),
        alt: "Scaling software development teams.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "text-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        className: "heading-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h1", {
        className: "heading no-reveal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Get in Touch.")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        className: "sub-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        className: "sub-text no-reveal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Let\u2019s help you figure out your software engineering and design needs. We are super excited to get to chat with you and eager to work with you to bring your next project to life. Drop us a line or two and we will get in touch with you.")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "m-b-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Email: ", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "mailto:info@charisol.io?subject=From Charisol Website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "info@charisol.io"))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("form", {
        id: "start-form",
        onSubmit: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Name"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("input", {
        value: input.name,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            name: e.target.value
          });
        },
        className: "u-full-width",
        type: "text",
        id: "name",
        name: "name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "Tip: Could be your fullname or company name.")))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "six columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "Email"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("input", {
        value: input.email,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            email: e.target.value
          });
        },
        className: "u-full-width",
        type: "email",
        id: "email",
        name: "email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "Tip: Could be your personal email address or company email address."))))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", {
        htmlFor: "project_description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "Message"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("textarea", {
        value: input.message,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            message: e.target.value
          });
        },
        className: "u-full-width",
        id: "message",
        rows: "8",
        name: "project_description",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "Tip: Could be a project brief, a partnership enquiry or asking about vacancies"))), this.state.submitting ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_LinearProgress___default.a, {
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }) : '', __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("button", {
        className: "m-t-lg btn-curve-purple full",
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, this.state.submitting ? 'Submitting...' : 'Submit')))))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

var _default = Contact;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/contact.js");
  reactHotLoader.register(Contact, "Contact", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/contact.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/contact.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/contact")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.3b3b3ab6474739754b60.hot-update.js.map