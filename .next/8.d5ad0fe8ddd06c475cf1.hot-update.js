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
          className: "jsx-2101401831"
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
        className: "jsx-2101401831"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-2101401831" + " " + "pricing"
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
        className: "jsx-2101401831" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-2101401831" + " " + "row"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-2101401831" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
        src: __webpack_require__("./assets/img/bg_contact.png"),
        alt: "Scaling software development teams.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-2101401831"
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-2101401831" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-2101401831" + " " + "text-content"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-2101401831" + " " + "heading-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-2101401831" + " " + "heading no-reveal"
      }, "Get in Touch.")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-2101401831" + " " + "sub-text-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: "jsx-2101401831" + " " + "sub-text no-reveal"
      }, "Let\u2019s help you figure out your software engineering and design needs. We are super excited to get to chat with you and eager to work with you to bring your next project to life. Drop us a line or two and we will get in touch with you.")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-2101401831" + " " + "m-b-md"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-2101401831"
      }, "Email: ", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        href: "mailto:info@charisol.io?subject=From Charisol Website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-2101401831"
      }, "info@charisol.io"))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("form", {
        id: "start-form",
        onSubmit: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-2101401831"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-2101401831" + " " + "row"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-2101401831" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-2101401831" + " " + "div"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-2101401831"
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
        className: "jsx-2101401831" + " " + "u-full-width"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-2101401831" + " " + "light"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-2101401831"
      }, "Tip: Could be your fullname or company name.")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: "jsx-2101401831" + " " + "six columns"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-2101401831" + " " + "div"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-2101401831"
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
        className: "jsx-2101401831" + " " + "u-full-width"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-2101401831" + " " + "light"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-2101401831"
      }, "Tip: Could be your personal email address or company email address."))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        className: "jsx-2101401831" + " " + "div"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        htmlFor: "project_description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        className: "jsx-2101401831"
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
        className: "jsx-2101401831" + " " + "u-full-width"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-2101401831" + " " + "light"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-2101401831"
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
        className: "jsx-2101401831" + " " + 'm-t-lg btn-curve-purple full'
      }, this.state.submitting ? 'Submitting...' : 'Submit')))))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2101401831",
        css: ".sub-text.jsx-2101401831{text-align:justify;}.six.jsx-2101401831 img.jsx-2101401831{width:100%;height:auto;min-height:800px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJb0IsQUFHMkIsQUFHUixXQUNDLFFBSGIsSUFJa0IsaUJBQ2xCIiwiZmlsZSI6InBhZ2VzXFxjb250YWN0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcdXNlclxcY2hhbGxhcmlzLXRlY2gtd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3R5bGVzL2Fib3V0LnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBzdWJtaXR0aW5nOiBmYWxzZSxcclxuICBzdWJtaXR0ZWQ6IGZhbHNlLFxyXG4gIHNob3dBbGVydDogZmFsc2UsXHJcbiAgaW5wdXQ6IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCJcclxuICB9XHJcbn1cclxuY2xhc3MgQ29udGFjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAuLi5pbml0aWFsU3RhdGVcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UobmV3UGFydGlhbElucHV0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIC4uLnN0YXRlLmlucHV0LFxyXG4gICAgICAgIC4uLm5ld1BhcnRpYWxJbnB1dFxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIHN1Ym1pdEZvcm0oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7IGlucHV0LCBzaG93QWxlcnQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0dGluZzogdHJ1ZSB9KVxyXG4gICAgZmV0Y2goJy9hcGkvY29udGFjdHMnLCB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5wdXQpXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSAmJiByZXMuc3VjY2VzcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRlZDogdHJ1ZSB9KVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FsZXJ0OiB0cnVlIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0dGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICBhbGVydCgnSW50ZXJuYWwgc2VydmVyIGVycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaW5wdXQsIHNob3dBbGVydCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9XCJDb250YWN0IFVzIHwgQ2hhcmlzb2wgVGVjaG5vbG9naWVzXCIgY29udGVudD1cIkxldCB1cyBoZWxwIHlvdSBicmluZyB5b3VyIHByb2plY3RzIHRvIGxpZmUgYW5kIGRlbGl2ZXIgeW91ciBkZXNpZ24vZGV2ZWxvcG1lbnRzIG5lZWRzIHRoZSByaWdodCB3YXkuXCI+XHJcbiAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2NlbnRlcicgfX1cclxuICAgICAgICAgIG9wZW49e3Nob3dBbGVydH1cclxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICBDb250ZW50UHJvcHM9e3tcclxuICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiAnbWVzc2FnZS1pZCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbWVzc2FnZT17PHNwYW4gaWQ9XCJtZXNzYWdlLWlkXCI+TWVzc2FnZSBTZW50ISBZb3Ugd2lsbCBiZSBub3RpZnk8L3NwYW4+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBpZD1cInBhbmVsXCIgZGF0YS1zbGlkZW91dC1pZ25vcmU+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l4IGNvbHVtbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2Fzc2V0cy9pbWcvYmdfY29udGFjdC5wbmcnKX0gYWx0PVwiU2NhbGluZyBzb2Z0d2FyZSBkZXZlbG9wbWVudCB0ZWFtcy5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpeCBjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZyBuby1yZXZlYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2V0IGluIFRvdWNoLlxyXG4gICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRleHQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXRleHQgbm8tcmV2ZWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExldOKAmXMgaGVscCB5b3UgZmlndXJlIG91dCB5b3VyIHNvZnR3YXJlIGVuZ2luZWVyaW5nIGFuZCBkZXNpZ24gbmVlZHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIGFyZSBzdXBlciBleGNpdGVkIHRvIGdldCB0byBjaGF0IHdpdGggeW91IGFuZCBlYWdlciB0byB3b3JrIHdpdGggeW91IHRvIGJyaW5nIHlvdXIgbmV4dCBwcm9qZWN0IHRvIGxpZmUuIERyb3AgdXMgYSBsaW5lIG9yIHR3byBhbmQgd2Ugd2lsbCBnZXQgaW4gdG91Y2ggd2l0aCB5b3UuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1iLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+RW1haWw6IDxhIGhyZWY9XCJtYWlsdG86aW5mb0BjaGFyaXNvbC5pbz9zdWJqZWN0PUZyb20gQ2hhcmlzb2wgV2Vic2l0ZVwiPmluZm9AY2hhcmlzb2wuaW88L2E+PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInN0YXJ0LWZvcm1cIiBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l4IGNvbHVtbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2lucHV0Lm5hbWV9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX0gY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCIgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaWdodFwiPjxlbT5UaXA6IENvdWxkIGJlIHlvdXIgZnVsbG5hbWUgb3IgY29tcGFueSBuYW1lLjwvZW0+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXggY29sdW1uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtpbnB1dC5lbWFpbH0gb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX0gY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaWdodFwiPjxlbT5UaXA6IENvdWxkIGJlIHlvdXIgcGVyc29uYWwgZW1haWwgYWRkcmVzcyBvciBjb21wYW55IGVtYWlsIGFkZHJlc3MuPC9lbT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb2plY3RfZGVzY3JpcHRpb25cIj5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtpbnB1dC5tZXNzYWdlfSBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKHsgbWVzc2FnZTogZS50YXJnZXQudmFsdWUgfSl9IGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiIGlkPVwibWVzc2FnZVwiIHJvd3M9XCI4XCIgbmFtZT1cInByb2plY3RfZGVzY3JpcHRpb25cIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaWdodFwiPjxlbT5UaXA6IENvdWxkIGJlIGEgcHJvamVjdCBicmllZiwgYSBwYXJ0bmVyc2hpcCBlbnF1aXJ5IG9yIGFza2luZyBhYm91dCB2YWNhbmNpZXM8L2VtPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VibWl0dGluZyA/ICg8TGluZWFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPikgOiAoJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J20tdC1sZyBidG4tY3VydmUtcHVycGxlIGZ1bGwnIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPnt0aGlzLnN0YXRlLnN1Ym1pdHRpbmcgPyAnU3VibWl0dGluZy4uLicgOiAnU3VibWl0J308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5zdWItdGV4dHtcclxuICAgICAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbiAgICAgIH1cclxuICAgICAgLnNpeCBpbWd7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICBtaW4taGVpZ2h0OjgwMHB4O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Il19 */\n/*@ sourceURL=pages\\contact.js */"
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
//# sourceMappingURL=8.d5ad0fe8ddd06c475cf1.hot-update.js.map