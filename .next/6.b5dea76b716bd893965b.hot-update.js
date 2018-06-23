webpackHotUpdate(6,{

/***/ "./pages/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sanity_block_content_to_react__ = __webpack_require__("./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sanity_block_content_to_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__sanity_block_content_to_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sanity_image_url__ = __webpack_require__("./node_modules/@sanity/image-url/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sanity_image_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__sanity_image_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns__ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client__ = __webpack_require__("./client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_about_scss__ = __webpack_require__("./styles/about.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_about_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_about_scss__);

var _jsxFileName = "C:\\Users\\user\\challaris-tech-website\\pages\\post.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }










var builder = __WEBPACK_IMPORTED_MODULE_4__sanity_image_url___default()(__WEBPACK_IMPORTED_MODULE_7__client___default.a);

function urlFor(source) {
  return builder.image(source);
}

var serializers = {
  types: {
    image: function image(_ref) {
      var asset = _ref.node.asset;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("picture", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        style: {
          width: "100%",
          margin: "0 auto 20px"
        },
        srcSet: "\n            ".concat(urlFor(asset).width(320), " 320w,\n            ").concat(urlFor(asset).width(480), " 480w,\n            ").concat(urlFor(asset).width(800), " 800w\n          "),
        sizes: "\n            (max-width: 320px) 280px,\n            (max-width: 480px) 440px,\n            800px\n          ",
        src: urlFor(asset),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }));
    }
  }
};

var CommaJoiner = function CommaJoiner(_ref2) {
  var _ref2$list = _ref2.list,
      list = _ref2$list === void 0 ? [] : _ref2$list,
      _ref2$conjuction = _ref2.conjuction,
      conjuction = _ref2$conjuction === void 0 ? 'and' : _ref2$conjuction,
      _ref2$separator = _ref2.separator,
      separator = _ref2$separator === void 0 ? ',' : _ref2$separator;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, list.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
      key: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, item, list.length === 1 ? '.' : index + 2 === list.length ? " ".concat(conjuction, " ") : index + 1 === list.length ? '.' : "".concat(separator, " "));
  }));
};

var BlogPost = function BlogPost(_ref3) {
  var _ref3$title = _ref3.title,
      title = _ref3$title === void 0 ? 'No title' : _ref3$title,
      _ref3$name = _ref3.name,
      name = _ref3$name === void 0 ? 'No name' : _ref3$name,
      _ref3$publishedAt = _ref3.publishedAt,
      publishedAt = _ref3$publishedAt === void 0 ? '' : _ref3$publishedAt,
      _ref3$categories = _ref3.categories,
      categories = _ref3$categories === void 0 ? [] : _ref3$categories,
      _ref3$authorImage = _ref3.authorImage,
      authorImage = _ref3$authorImage === void 0 ? {} : _ref3$authorImage,
      _ref3$body = _ref3.body,
      body = _ref3$body === void 0 ? [] : _ref3$body,
      _ref3$_updatedAt = _ref3._updatedAt,
      _updatedAt = _ref3$_updatedAt === void 0 ? '' : _ref3$_updatedAt;

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Layout__["a" /* default */], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: __WEBPACK_IMPORTED_MODULE_10__styles_about_scss___default.a
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    className: "jsx-3418364969"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    className: "jsx-3418364969"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: "jsx-3418364969" + " " + "pricing"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    className: "jsx-3418364969" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    className: "jsx-3418364969" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    className: "jsx-3418364969" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    className: "jsx-3418364969" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    className: "jsx-3418364969" + " " + "post-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    className: "jsx-3418364969"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
    src: urlFor(authorImage).width(50).url(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    className: "jsx-3418364969"
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    className: "jsx-3418364969"
  }, title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-3418364969" + " " + "fa fa-pencil"
  }), " Written by ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-3418364969"
  }, name), " in ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-3418364969"
  }, categories.length && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CommaJoiner, {
    list: categories,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  })), " on ", Object(__WEBPACK_IMPORTED_MODULE_6_date_fns__["format"])(publishedAt, 'MMMM DD, YYYY'), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    className: "jsx-3418364969" + " " + "resp"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__sanity_block_content_to_react___default.a, {
    serializers: serializers,
    blocks: body,
    imageOptions: {
      w: 660,
      h: 435,
      fit: 'min'
    },
    projectId: __WEBPACK_IMPORTED_MODULE_7__client___default.a.clientConfig.projectId,
    dataset: __WEBPACK_IMPORTED_MODULE_7__client___default.a.clientConfig.dataset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    className: "jsx-3418364969" + " " + "fa fa-arrow-left"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    className: "jsx-3418364969"
  }, "Back to Blog"))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "3418364969",
    css: ".text-content.jsx-3418364969{text-align:center;}.text-content.jsx-3418364969 span.jsx-3418364969{font-weight:600;color:#B721FF;font-style:normal;}.post-content.jsx-3418364969 img.jsx-3418364969{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;}.post-content.jsx-3418364969 i.jsx-3418364969{color:#1EAEDB;}.resp.jsx-3418364969{max-width:740px;width:100%;height:auto;display:block;text-align:justify;margin-left:auto;margin-right:auto;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFYSxBQUdzQixBQUlELEFBS0YsQUFPRCxBQUdDLGNBVEcsQUFPbEIsRUFaZSxBQWVOLEVBbkJULFNBb0JhLEdBZkssQ0FLQyxRQVdSLFNBZlgsQ0FLYSxJQVdHLFdBVkgsUUFXQyxJQVZkLGFBV2dCLGtCQUNGLGdCQUNiIiwiZmlsZSI6InBhZ2VzXFxwb3N0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcdXNlclxcY2hhbGxhcmlzLXRlY2gtd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3R5bGVzL2Fib3V0LnNjc3MnO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbmNvbnN0IHNlcmlhbGl6ZXJzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBpbWFnZTogKHsgbm9kZTogeyBhc3NldCB9IH0pID0+IChcclxuICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLG1hcmdpbjpcIjAgYXV0byAyMHB4XCIgfX1cclxuICAgICAgICAgIHNyY1NldD17YFxyXG4gICAgICAgICAgICAke3VybEZvcihhc3NldCkud2lkdGgoMzIwKX0gMzIwdyxcclxuICAgICAgICAgICAgJHt1cmxGb3IoYXNzZXQpLndpZHRoKDQ4MCl9IDQ4MHcsXHJcbiAgICAgICAgICAgICR7dXJsRm9yKGFzc2V0KS53aWR0aCg4MDApfSA4MDB3XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgc2l6ZXM9e2BcclxuICAgICAgICAgICAgKG1heC13aWR0aDogMzIwcHgpIDI4MHB4LFxyXG4gICAgICAgICAgICAobWF4LXdpZHRoOiA0ODBweCkgNDQwcHgsXHJcbiAgICAgICAgICAgIDgwMHB4XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgc3JjPXt1cmxGb3IoYXNzZXQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcGljdHVyZT5cclxuICAgIClcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDb21tYUpvaW5lciA9ICh7IGxpc3QgPSBbXSwgY29uanVjdGlvbiA9ICdhbmQnLCBzZXBhcmF0b3IgPSAnLCcgfSkgPT4gPEZyYWdtZW50PntsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IDxzcGFuIGtleT17aXRlbX0+e2l0ZW19e1xyXG4gIChsaXN0Lmxlbmd0aCA9PT0gMSkgPyAnLicgOlxyXG4gIChpbmRleCArIDIgPT09IGxpc3QubGVuZ3RoKSA/IGAgJHtjb25qdWN0aW9ufSBgIDpcclxuICAoaW5kZXggKyAxID09PSBsaXN0Lmxlbmd0aCkgPyAnLicgOiBgJHtzZXBhcmF0b3J9IGBcclxuICB9XHJcbiAgPC9zcGFuPilcclxufTwvRnJhZ21lbnQ+XHJcblxyXG5jb25zdCBCbG9nUG9zdCA9ICh7IHRpdGxlID0gJ05vIHRpdGxlJywgbmFtZSA9ICdObyBuYW1lJywgcHVibGlzaGVkQXQ9JycsIGNhdGVnb3JpZXMgPSBbXSwgYXV0aG9ySW1hZ2UgPSB7fSwgYm9keSA9IFtdLCBfdXBkYXRlZEF0ID0gJycgfSkgPT4gKFxyXG4gIDxMYXlvdXQgIHRpdGxlPXt0aXRsZX0+IFxyXG4gICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XHJcbiAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XHJcblx0ICA8ZGl2IGlkPVwicGFuZWxcIiAgZGF0YS1zbGlkZW91dC1pZ25vcmU+XHJcblx0XHQgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByaWNpbmdcIj5cclxuXHRcdCAgPE5hdmJhciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuXHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy10ZXh0LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250ZW50XCI+XHJcbiAgXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRlbnRcIj5cclxuICA8ZGl2PjxpbWcgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDUwKS51cmwoKX0gLz48L2Rpdj5cclxuICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCI+PC9pPiBXcml0dGVuIGJ5IDxzcGFuPntuYW1lfTwvc3Bhbj4gaW4gPHNwYW4+e2NhdGVnb3JpZXMubGVuZ3RoICYmICA8Q29tbWFKb2luZXIgbGlzdD17Y2F0ZWdvcmllc30gLz59PC9zcGFuPiBvbiB7Zm9ybWF0KHB1Ymxpc2hlZEF0LCAnTU1NTSBERCwgWVlZWScpfVxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVzcFwiPjxCbG9ja0NvbnRlbnRcclxuICAgIHNlcmlhbGl6ZXJzPXtzZXJpYWxpemVyc31cclxuICAgIGJsb2Nrcz17Ym9keX1cclxuICAgIGltYWdlT3B0aW9ucz17e3c6IDY2MCwgaDogNDM1LCBmaXQ6ICdtaW4nfX1cclxuICAgIHByb2plY3RJZD17Y2xpZW50LmNsaWVudENvbmZpZy5wcm9qZWN0SWR9XHJcbiAgICBkYXRhc2V0PXtjbGllbnQuY2xpZW50Q29uZmlnLmRhdGFzZXR9XHJcbiAgLz48L2Rpdj5cclxuICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCI+PC9pPjxMaW5rIGhyZWY9XCIvYmxvZ1wiPjxhPkJhY2sgdG8gQmxvZzwvYT48L0xpbms+XHJcbiAgPC9kaXY+XHJcblxyXG5cclxuPC9kaXY+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcblx0XHJcblx0PHN0eWxlIGpzeD57YFxyXG5cdC50ZXh0LWNvbnRlbnR7XHJcblx0XHQgIHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdCAgfVxyXG5cdCAgXHJcbiAgICAgIC50ZXh0LWNvbnRlbnQgc3BhbntcclxuXHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdCAgY29sb3I6ICNCNzIxRkY7XHJcblx0XHQgIGZvbnQtc3R5bGU6bm9ybWFsO1xyXG5cdCAgfVxyXG5cdCAgLnBvc3QtY29udGVudCBpbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHQgIH1cclxuXHQgIC5wb3N0LWNvbnRlbnQgaXtcclxuICAgIGNvbG9yOiMxRUFFREI7XHJcblx0ICB9XHJcblx0ICAucmVzcHtcclxuICBtYXgtd2lkdGg6IDc0MHB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblx0ZGlzcGxheTpibG9jaztcclxuXHR0ZXh0LWFsaWduOmp1c3RpZnk7XHJcblx0bWFyZ2luLWxlZnQ6YXV0bztcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICB9XHJcblx0ICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHRcclxuXHRcclxuPC9MYXlvdXQ+XHJcbilcclxuXHJcbkJsb2dQb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChyZXEpID0+IHtcclxuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKGAqW3NsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxyXG4gICAgICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICAgICAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG5cdCAgcHVibGlzaGVkQXQsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgIF91cGRhdGVkQXRcclxuICAgIH1gLCB7c2x1ZzogcmVxLnF1ZXJ5LnNsdWd9KVxyXG4gICAgY2xpZW50LmZldGNoLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdCJdfQ== */\n/*@ sourceURL=pages\\post.js */"
  }));
};

BlogPost.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(req) {
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_7__client___default.a.fetch("*[slug.current == $slug][0]{\n      title,\n      \"name\": author->name,\n      \"categories\": categories[]->title,\n      \"authorImage\": author->image,\n\t  publishedAt,\n      body,\n      _updatedAt\n    }", {
              slug: req.query.slug
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

var _default = BlogPost;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(builder, "builder", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
  reactHotLoader.register(urlFor, "urlFor", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
  reactHotLoader.register(serializers, "serializers", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
  reactHotLoader.register(CommaJoiner, "CommaJoiner", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
  reactHotLoader.register(BlogPost, "BlogPost", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.b5dea76b716bd893965b.hot-update.js.map