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
          className: "jsx-3667732608"
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
        className: "jsx-3667732608"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-3667732608" + " " + "pricing"
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
        className: "jsx-3667732608" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-3667732608" + " " + "row"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-3667732608" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
        src: __webpack_require__("./assets/img/bg_contact.png"),
        alt: "Scaling software development teams.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-3667732608"
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-3667732608" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-3667732608" + " " + "text-content"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-3667732608" + " " + "heading-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-3667732608" + " " + "heading no-reveal"
      }, "Get in Touch.")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-3667732608" + " " + "sub-text-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: "jsx-3667732608" + " " + "sub-text no-reveal"
      }, "Let\u2019s help you figure out your software engineering and design needs. We are super excited to get to chat with you and eager to work with you to bring your next project to life. Drop us a line or two and we will get in touch with you.")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-3667732608" + " " + "m-b-md"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-3667732608"
      }, "Email: ", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        href: "mailto:info@charisol.io?subject=From Charisol Website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-3667732608"
      }, "info@charisol.io"))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("form", {
        id: "start-form",
        onSubmit: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-3667732608"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-3667732608" + " " + "row"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-3667732608" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-3667732608" + " " + "div"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-3667732608"
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
        className: "jsx-3667732608" + " " + "u-full-width"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-3667732608" + " " + "light"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-3667732608"
      }, "Tip: Could be your fullname or company name.")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: "jsx-3667732608" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-3667732608" + " " + "div"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-3667732608"
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
        className: "jsx-3667732608" + " " + "u-full-width"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-3667732608" + " " + "light"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-3667732608"
      }, "Tip: Could be your personal email address or company email address."))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        className: "jsx-3667732608" + " " + "div"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "project_description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        className: "jsx-3667732608"
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
        className: "jsx-3667732608" + " " + "u-full-width"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-3667732608" + " " + "light"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-3667732608"
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
        className: "jsx-3667732608" + " " + 'm-t-lg btn-curve-purple full'
      }, this.state.submitting ? 'Submitting...' : 'Submit')))))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3667732608",
        css: ".sub-text.jsx-3667732608{text-align:justify;}.six.jsx-3667732608 img.jsx-3667732608{width:100%;height:auto;max-height:800px;object-fit:fit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJb0IsQUFHMkIsQUFHUixXQUNDLFFBSGIsSUFJa0IsaUJBQ0YsZUFDaEIiLCJmaWxlIjoicGFnZXNcXGNvbnRhY3QuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFx1c2VyXFxjaGFsbGFyaXMtdGVjaC13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvYWJvdXQuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHN1Ym1pdHRpbmc6IGZhbHNlLFxyXG4gIHN1Ym1pdHRlZDogZmFsc2UsXHJcbiAgc2hvd0FsZXJ0OiBmYWxzZSxcclxuICBpbnB1dDoge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgbWVzc2FnZTogXCJcIlxyXG4gIH1cclxufVxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC4uLmluaXRpYWxTdGF0ZVxyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dENoYW5nZShuZXdQYXJ0aWFsSW5wdXQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgLi4uc3RhdGUuaW5wdXQsXHJcbiAgICAgICAgLi4ubmV3UGFydGlhbElucHV0XHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgc3VibWl0Rm9ybShldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgaW5wdXQsIHNob3dBbGVydCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiB0cnVlIH0pXHJcbiAgICBmZXRjaCgnL2FwaS9jb250YWN0cycsIHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnB1dClcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxICYmIHJlcy5zdWNjZXNzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0dGVkOiB0cnVlIH0pXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKGluaXRpYWxTdGF0ZSlcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWxlcnQ6IHRydWUgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgIGFsZXJ0KCdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpbnB1dCwgc2hvd0FsZXJ0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCB0aXRsZT1cIkNvbnRhY3QgVXMgfCBDaGFyaXNvbCBUZWNobm9sb2dpZXNcIiBjb250ZW50PVwiTGV0IHVzIGhlbHAgeW91IGJyaW5nIHlvdXIgcHJvamVjdHMgdG8gbGlmZSBhbmQgZGVsaXZlciB5b3VyIGRlc2lnbi9kZXZlbG9wbWVudHMgbmVlZHMgdGhlIHJpZ2h0IHdheS5cIj5cclxuICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAgb3Blbj17c2hvd0FsZXJ0fVxyXG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgIENvbnRlbnRQcm9wcz17e1xyXG4gICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdtZXNzYWdlLWlkJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBtZXNzYWdlPXs8c3BhbiBpZD1cIm1lc3NhZ2UtaWRcIj5NZXNzYWdlIFNlbnQhIFlvdSB3aWxsIGJlIG5vdGlmeTwvc3Bhbj59XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGlkPVwicGFuZWxcIiBkYXRhLXNsaWRlb3V0LWlnbm9yZT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByaWNpbmdcIj5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXggY29sdW1uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi4vYXNzZXRzL2ltZy9iZ19jb250YWN0LnBuZycpfSBhbHQ9XCJTY2FsaW5nIHNvZnR3YXJlIGRldmVsb3BtZW50IHRlYW1zLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l4IGNvbHVtbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nIG5vLXJldmVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHZXQgaW4gVG91Y2guXHJcbiAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGV4dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItdGV4dCBuby1yZXZlYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGV04oCZcyBoZWxwIHlvdSBmaWd1cmUgb3V0IHlvdXIgc29mdHdhcmUgZW5naW5lZXJpbmcgYW5kIGRlc2lnbiBuZWVkcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2UgYXJlIHN1cGVyIGV4Y2l0ZWQgdG8gZ2V0IHRvIGNoYXQgd2l0aCB5b3UgYW5kIGVhZ2VyIHRvIHdvcmsgd2l0aCB5b3UgdG8gYnJpbmcgeW91ciBuZXh0IHByb2plY3QgdG8gbGlmZS4gRHJvcCB1cyBhIGxpbmUgb3IgdHdvIGFuZCB3ZSB3aWxsIGdldCBpbiB0b3VjaCB3aXRoIHlvdS5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWItbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj5FbWFpbDogPGEgaHJlZj1cIm1haWx0bzppbmZvQGNoYXJpc29sLmlvP3N1YmplY3Q9RnJvbSBDaGFyaXNvbCBXZWJzaXRlXCI+aW5mb0BjaGFyaXNvbC5pbzwvYT48L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwic3RhcnQtZm9ybVwiIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXggY29sdW1uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17aW5wdXQubmFtZX0gb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfSBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIiB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+PGVtPlRpcDogQ291bGQgYmUgeW91ciBmdWxsbmFtZSBvciBjb21wYW55IG5hbWUuPC9lbT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpeCBjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2lucHV0LmVtYWlsfSBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfSBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+PGVtPlRpcDogQ291bGQgYmUgeW91ciBwZXJzb25hbCBlbWFpbCBhZGRyZXNzIG9yIGNvbXBhbnkgZW1haWwgYWRkcmVzcy48L2VtPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJvamVjdF9kZXNjcmlwdGlvblwiPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2lucHV0Lm1lc3NhZ2V9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoeyBtZXNzYWdlOiBlLnRhcmdldC52YWx1ZSB9KX0gY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCIgaWQ9XCJtZXNzYWdlXCIgcm93cz1cIjhcIiBuYW1lPVwicHJvamVjdF9kZXNjcmlwdGlvblwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+PGVtPlRpcDogQ291bGQgYmUgYSBwcm9qZWN0IGJyaWVmLCBhIHBhcnRuZXJzaGlwIGVucXVpcnkgb3IgYXNraW5nIGFib3V0IHZhY2FuY2llczwvZW0+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWJtaXR0aW5nID8gKDxMaW5lYXJQcm9ncmVzcyBjb2xvcj1cInNlY29uZGFyeVwiIC8+KSA6ICgnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbS10LWxnIGJ0bi1jdXJ2ZS1wdXJwbGUgZnVsbCcgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+e3RoaXMuc3RhdGUuc3VibWl0dGluZyA/ICdTdWJtaXR0aW5nLi4uJyA6ICdTdWJtaXQnfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnN1Yi10ZXh0e1xyXG4gICAgICAgIHRleHQtYWxpZ246anVzdGlmeTtcclxuICAgICAgfVxyXG4gICAgICAuc2l4IGltZ3tcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6ODAwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDpmaXQ7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3QiXX0= */\n/*@ sourceURL=pages\\contact.js */"
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
//# sourceMappingURL=8.05be71f095cbd0ffe166.hot-update.js.map