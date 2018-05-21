webpackHotUpdate(5,{

/***/ "./pages/admin-users.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__material_ui_core_IconButton__ = __webpack_require__("./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__material_ui_core_Dialog__ = __webpack_require__("./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__material_ui_core_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__material_ui_core_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__material_ui_core_DialogActions__ = __webpack_require__("./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__material_ui_core_DialogActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__material_ui_core_DialogActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__material_ui_core_DialogContent__ = __webpack_require__("./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__material_ui_core_DialogContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__material_ui_core_DialogContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__material_ui_core_DialogContentText__ = __webpack_require__("./node_modules/@material-ui/core/DialogContentText/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__material_ui_core_DialogContentText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__material_ui_core_DialogContentText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__material_ui_core_DialogTitle__ = __webpack_require__("./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__material_ui_core_DialogTitle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__material_ui_core_DialogTitle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_react_sortable_hoc__ = __webpack_require__("./node_modules/react-sortable-hoc/dist/commonjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_react_sortable_hoc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_react_sortable_hoc__);
var _this = this,
    _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-users.js";

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
  open: false,
  vertical: null,
  horizontal: null,
  currentUser: {},
  selectedUserId: "",
  users: [],
  openDeleteDialog: false
};

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      width: '95%',
      margin: '30px auto'
    },
    button: {
      margin: theme.spacing.unit
    },
    group: {
      margin: "".concat(theme.spacing.unit, "px 0")
    }
  };
};

var SortableItem = Object(__WEBPACK_IMPORTED_MODULE_31_react_sortable_hoc__["SortableElement"])(function (_ref) {
  var value = _ref.value;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_TableRow___default.a, {
    key: value._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__material_ui_core_IconButton___default.a, {
    "aria-label": "delete",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Icon___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, "drag_handle"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, value.firstName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, value.lastName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, value.email), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, value.phoneNumber), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, value.position), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Grid___default.a, {
    container: true,
    spacing: 24,
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Grid___default.a, {
    item: true,
    xs: 8,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__material_ui_core_IconButton___default.a, {
    color: "secondary",
    onClick: function onClick(e) {
      return _this.openDeleteDialogHandler(value._id);
    },
    "aria-label": "delete",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Icon___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, "delete"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Grid___default.a, {
    item: true,
    xs: 8,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_next_link___default.a, {
    as: "/dashboard/profile/".concat(value._id),
    href: "/admin-profile?_id=".concat(value._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__material_ui_core_IconButton___default.a, {
    "aria-label": "delete",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Icon___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, "create")))))));
});
var SortableList = Object(__WEBPACK_IMPORTED_MODULE_31_react_sortable_hoc__["SortableContainer"])(function (_ref2) {
  var items = _ref2.items;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, items.map(function (value, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SortableItem, {
      key: "item-".concat(index),
      index: index,
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      }
    });
  }));
});

var AdminUser =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminUser, _React$Component);

  function AdminUser(props) {
    var _this2;

    _classCallCheck(this, AdminUser);

    _this2 = _possibleConstructorReturn(this, (AdminUser.__proto__ || Object.getPrototypeOf(AdminUser)).call(this, props));
    _this2.state = _objectSpread({}, initialState); //this.submitForm = this.submitForm.bind(this);

    _this2.openDeleteDialogHandler = _this2.openDeleteDialogHandler.bind(_assertThisInitialized(_this2));
    _this2.handleDeleteUser = _this2.handleDeleteUser.bind(_assertThisInitialized(_this2));
    _this2.handleDontDelete = _this2.handleDontDelete.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(AdminUser, [{
    key: "getUsers",
    value: function getUsers() {
      var _this3 = this;

      fetch("/api/get-teams").then(function (res) {
        return res.json();
      }).then(function (data) {
        _this3.setState({
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
    key: "openDeleteDialogHandler",
    value: function openDeleteDialogHandler(id) {
      this.setState({
        openDeleteDialog: true,
        selectedUserId: id
      });
    }
  }, {
    key: "handleDeleteUser",
    value: function handleDeleteUser(event) {
      var _this4 = this;

      this.setState({
        openDeleteDialog: false,
        submitted: true
      });
      fetch("/api/team/".concat(this.state.selectedUserId), {
        method: 'delete',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        response.json().then(function (res) {
          if (res.status === 201 && res.success === true) {
            _this4.getUsers();

            _this4.setState({
              submitting: false,
              vertical: 'top',
              horizontal: 'center',
              open: true
            });
          } else {
            _this4.setState({
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
    key: "handleDontDelete",
    value: function handleDontDelete() {
      this.setState({
        openDeleteDialog: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

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
          lineNumber: 186
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_core_Snackbar___default.a, {
        anchorOrigin: {
          vertical: vertical,
          horizontal: horizontal
        },
        open: open,
        onClose: this.handleCloseSnackbar,
        autoHideDuration: 6000,
        ContentProps: {
          'aria-describedby': 'message-id'
        },
        action: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Icon___default.a, {
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }, "close")],
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "message-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          }
        }, "User has been deleted"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 24,
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Grid___default.a, {
        item: true,
        xs: 8,
        sm: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23__material_ui_core_Paper___default.a, {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, this.state.submitting ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_core_LinearProgress___default.a, {
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }) : '', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_Table___default.a, {
        className: classes.table,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__material_ui_core_TableHead___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__material_ui_core_TableRow___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, "suffle"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, "S/N"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, "First Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, "Last Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, "Email"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, "Phone Number"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, "Position"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, "Action"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__material_ui_core_TableBody___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, this.state.users.map(function (n, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SortableList, {
          items: _this5.state.users,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          }
        });
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__material_ui_core_Dialog___default.a, {
        open: this.state.openDeleteDialog,
        onClose: this.handleClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__material_ui_core_DialogTitle___default.a, {
        id: "alert-dialog-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, "Are you sure?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_28__material_ui_core_DialogContent___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_29__material_ui_core_DialogContentText___default.a, {
        id: "alert-dialog-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, "Are you sure you want to permanetly delete this user?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_27__material_ui_core_DialogActions___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Button___default.a, {
        onClick: function onClick(e) {
          return _this5.handleDontDelete(e);
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, "No"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Button___default.a, {
        onClick: function onClick(e) {
          return _this5.handleDeleteUser(e);
        },
        color: "secondary",
        autoFocus: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, "Yes")))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return AdminUser;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

AdminUser.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(AdminUser);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-users.js");
  reactHotLoader.register(styles, "styles", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-users.js");
  reactHotLoader.register(SortableItem, "SortableItem", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-users.js");
  reactHotLoader.register(SortableList, "SortableList", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-users.js");
  reactHotLoader.register(AdminUser, "AdminUser", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-users.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/admin-users.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin-users")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.728c56cfdb072c84c39f.hot-update.js.map