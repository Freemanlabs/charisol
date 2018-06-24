webpackHotUpdate(8,{

/***/ "./pages/contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_about_scss__ = __webpack_require__("./styles/about.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_about_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_about_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Snackbar__ = __webpack_require__("./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_LinearProgress__ = __webpack_require__("./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_LinearProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_LinearProgress__);
var _jsxFileName = "C:\\Users\\user\\challaris-tech-website\\pages\\contact.js";


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
      __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default()('/api/contacts', {
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
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
        title: "Contact Us | Charisol Technologies",
        content: "Let us help you bring your projects to life and deliver your design/developments needs the right way.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_3__styles_about_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Snackbar___default.a, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        open: showAlert,
        onClose: this.handleClose,
        ContentProps: {
          'aria-describedby': 'message-id'
        },
        message: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
          id: "message-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          className: "jsx-2371591313"
        }, "Message Sent! You will be notify"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        id: "panel",
        "data-slideout-ignore": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-2371591313"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-2371591313" + " " + "pricing"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Navbar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-2371591313" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-2371591313" + " " + "row"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-2371591313" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
        src: __webpack_require__("./assets/img/bg_contact.png"),
        alt: "Scaling software development teams.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-2371591313"
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-2371591313" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-2371591313" + " " + "text-content"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-2371591313" + " " + "heading-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-2371591313" + " " + "heading no-reveal"
      }, "Get in Touch.")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-2371591313" + " " + "sub-text-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: "jsx-2371591313" + " " + "sub-text no-reveal"
      }, "Let\u2019s help you figure out your software engineering and design needs. We are super excited to get to chat with you and eager to work with you to bring your next project to life. Drop us a line or two and we will get in touch with you.")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-2371591313" + " " + "m-b-md"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-2371591313"
      }, "Email: ", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        href: "mailto:info@charisol.io?subject=From Charisol Website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-2371591313"
      }, "info@charisol.io"))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("form", {
        id: "start-form",
        onSubmit: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-2371591313"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-2371591313" + " " + "row"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-2371591313" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-2371591313" + " " + "div"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-2371591313"
      }, "Name"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", {
        value: input.name,
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
          lineNumber: 109
        },
        className: "jsx-2371591313" + " " + "u-full-width"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-2371591313" + " " + "light"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-2371591313"
      }, "Tip: Could be your fullname or company name.")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: "jsx-2371591313" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-2371591313" + " " + "div"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-2371591313"
      }, "Email"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", {
        value: input.email,
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
          lineNumber: 116
        },
        className: "jsx-2371591313" + " " + "u-full-width"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-2371591313" + " " + "light"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-2371591313"
      }, "Tip: Could be your personal email address or company email address."))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        className: "jsx-2371591313" + " " + "div"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "project_description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        className: "jsx-2371591313"
      }, "Message"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("textarea", {
        value: input.message,
        onChange: function onChange(e) {
          return _this3.handleInputChange({
            message: e.target.value
          });
        },
        id: "message",
        rows: "8",
        name: "project_description",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        className: "jsx-2371591313" + " " + "u-full-width"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-2371591313" + " " + "light"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-2371591313"
      }, "Tip: Could be a project brief, a partnership enquiry or asking about vacancies"))), this.state.submitting ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_LinearProgress___default.a, {
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }) : '', __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        className: "jsx-2371591313" + " " + 'm-t-lg btn-curve-purple full'
      }, this.state.submitting ? 'Submitting...' : 'Submit')))))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2371591313",
        css: ".sub-text.jsx-2371591313{text-align:justify;}.six.jsx-2371591313 img.jsx-2371591313{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJb0IsQUFHMkIsQUFHUixXQUNDLFFBSGIsSUFJQSIsImZpbGUiOiJwYWdlc1xcY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHVzZXJcXGNoYWxsYXJpcy10ZWNoLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gJy4uL3N0eWxlcy9hYm91dC5zY3NzJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc3VibWl0dGluZzogZmFsc2UsXHJcbiAgc3VibWl0dGVkOiBmYWxzZSxcclxuICBzaG93QWxlcnQ6IGZhbHNlLFxyXG4gIGlucHV0OiB7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiXHJcbiAgfVxyXG59XHJcbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLi4uaW5pdGlhbFN0YXRlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUlucHV0Q2hhbmdlKG5ld1BhcnRpYWxJbnB1dCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAuLi5zdGF0ZS5pbnB1dCxcclxuICAgICAgICAuLi5uZXdQYXJ0aWFsSW5wdXRcclxuICAgICAgfVxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBzdWJtaXRGb3JtKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyBpbnB1dCwgc2hvd0FsZXJ0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IHRydWUgfSlcclxuICAgIGZldGNoKCcvYXBpL2NvbnRhY3RzJywge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0KVxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEgJiYgcmVzLnN1Y2Nlc3MgPT09IHRydWUpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0ZWQ6IHRydWUgfSlcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoaW5pdGlhbFN0YXRlKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBbGVydDogdHJ1ZSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgYWxlcnQoJ0ludGVybmFsIHNlcnZlciBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGlucHV0LCBzaG93QWxlcnQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHRpdGxlPVwiQ29udGFjdCBVcyB8IENoYXJpc29sIFRlY2hub2xvZ2llc1wiIGNvbnRlbnQ9XCJMZXQgdXMgaGVscCB5b3UgYnJpbmcgeW91ciBwcm9qZWN0cyB0byBsaWZlIGFuZCBkZWxpdmVyIHlvdXIgZGVzaWduL2RldmVsb3BtZW50cyBuZWVkcyB0aGUgcmlnaHQgd2F5LlwiPlxyXG4gICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX0gLz5cclxuICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdjZW50ZXInIH19XHJcbiAgICAgICAgICBvcGVuPXtzaG93QWxlcnR9XHJcbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgQ29udGVudFByb3BzPXt7XHJcbiAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ21lc3NhZ2UtaWQnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG1lc3NhZ2U9ezxzcGFuIGlkPVwibWVzc2FnZS1pZFwiPk1lc3NhZ2UgU2VudCEgWW91IHdpbGwgYmUgbm90aWZ5PC9zcGFuPn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYW5lbFwiIGRhdGEtc2xpZGVvdXQtaWdub3JlPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJpY2luZ1wiPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpeCBjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9hc3NldHMvaW1nL2JnX2NvbnRhY3QucG5nJyl9IGFsdD1cIlNjYWxpbmcgc29mdHdhcmUgZGV2ZWxvcG1lbnQgdGVhbXMuXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXggY29sdW1uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmcgbm8tcmV2ZWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdldCBpbiBUb3VjaC5cclxuICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10ZXh0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi10ZXh0IG5vLXJldmVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMZXTigJlzIGhlbHAgeW91IGZpZ3VyZSBvdXQgeW91ciBzb2Z0d2FyZSBlbmdpbmVlcmluZyBhbmQgZGVzaWduIG5lZWRzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSBhcmUgc3VwZXIgZXhjaXRlZCB0byBnZXQgdG8gY2hhdCB3aXRoIHlvdSBhbmQgZWFnZXIgdG8gd29yayB3aXRoIHlvdSB0byBicmluZyB5b3VyIG5leHQgcHJvamVjdCB0byBsaWZlLiBEcm9wIHVzIGEgbGluZSBvciB0d28gYW5kIHdlIHdpbGwgZ2V0IGluIHRvdWNoIHdpdGggeW91LlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYi1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2PkVtYWlsOiA8YSBocmVmPVwibWFpbHRvOmluZm9AY2hhcmlzb2wuaW8/c3ViamVjdD1Gcm9tIENoYXJpc29sIFdlYnNpdGVcIj5pbmZvQGNoYXJpc29sLmlvPC9hPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzdGFydC1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpeCBjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtpbnB1dC5uYW1lfSBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9IGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlnaHRcIj48ZW0+VGlwOiBDb3VsZCBiZSB5b3VyIGZ1bGxuYW1lIG9yIGNvbXBhbnkgbmFtZS48L2VtPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l4IGNvbHVtbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17aW5wdXQuZW1haWx9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9IGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlnaHRcIj48ZW0+VGlwOiBDb3VsZCBiZSB5b3VyIHBlcnNvbmFsIGVtYWlsIGFkZHJlc3Mgb3IgY29tcGFueSBlbWFpbCBhZGRyZXNzLjwvZW0+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcm9qZWN0X2Rlc2NyaXB0aW9uXCI+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17aW5wdXQubWVzc2FnZX0gb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZSh7IG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pfSBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIiBpZD1cIm1lc3NhZ2VcIiByb3dzPVwiOFwiIG5hbWU9XCJwcm9qZWN0X2Rlc2NyaXB0aW9uXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlnaHRcIj48ZW0+VGlwOiBDb3VsZCBiZSBhIHByb2plY3QgYnJpZWYsIGEgcGFydG5lcnNoaXAgZW5xdWlyeSBvciBhc2tpbmcgYWJvdXQgdmFjYW5jaWVzPC9lbT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Ym1pdHRpbmcgPyAoPExpbmVhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz4pIDogKCcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtLXQtbGcgYnRuLWN1cnZlLXB1cnBsZSBmdWxsJyB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj57dGhpcy5zdGF0ZS5zdWJtaXR0aW5nID8gJ1N1Ym1pdHRpbmcuLi4nIDogJ1N1Ym1pdCd9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuc3ViLXRleHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG4gICAgICB9XHJcbiAgICAgIC5zaXggaW1ne1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3QiXX0= */\n/*@ sourceURL=pages\\contact.js */"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

var _default = Contact;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "C:\\Users\\user\\challaris-tech-website\\pages\\contact.js");
  reactHotLoader.register(Contact, "Contact", "C:\\Users\\user\\challaris-tech-website\\pages\\contact.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\user\\challaris-tech-website\\pages\\contact.js");
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
//# sourceMappingURL=8.5cf4cd0f3ea2c8ad26f7.hot-update.js.map