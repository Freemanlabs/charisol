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
          width: "90%",
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
    css: ".text-content.jsx-3418364969{text-align:center;}.text-content.jsx-3418364969 span.jsx-3418364969{font-weight:600;color:#B721FF;font-style:normal;}.post-content.jsx-3418364969 img.jsx-3418364969{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;}.post-content.jsx-3418364969 i.jsx-3418364969{color:#1EAEDB;}.resp.jsx-3418364969{max-width:740px;width:100%;height:auto;display:block;text-align:justify;margin-left:auto;margin-right:auto;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFYSxBQUdzQixBQUlELEFBS0YsQUFPRCxBQUdDLGNBVEcsQUFPbEIsRUFaZSxBQWVOLEVBbkJULFNBb0JhLEdBZkssQ0FLQyxRQVdSLFNBZlgsQ0FLYSxJQVdHLFdBVkgsUUFXQyxJQVZkLGFBV2dCLGtCQUNGLGdCQUNiIiwiZmlsZSI6InBhZ2VzXFxwb3N0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcdXNlclxcY2hhbGxhcmlzLXRlY2gtd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3R5bGVzL2Fib3V0LnNjc3MnO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbmNvbnN0IHNlcmlhbGl6ZXJzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBpbWFnZTogKHsgbm9kZTogeyBhc3NldCB9IH0pID0+IChcclxuICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsbWFyZ2luOlwiMCBhdXRvIDIwcHhcIiB9fVxyXG4gICAgICAgICAgc3JjU2V0PXtgXHJcbiAgICAgICAgICAgICR7dXJsRm9yKGFzc2V0KS53aWR0aCgzMjApfSAzMjB3LFxyXG4gICAgICAgICAgICAke3VybEZvcihhc3NldCkud2lkdGgoNDgwKX0gNDgwdyxcclxuICAgICAgICAgICAgJHt1cmxGb3IoYXNzZXQpLndpZHRoKDgwMCl9IDgwMHdcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICBzaXplcz17YFxyXG4gICAgICAgICAgICAobWF4LXdpZHRoOiAzMjBweCkgMjgwcHgsXHJcbiAgICAgICAgICAgIChtYXgtd2lkdGg6IDQ4MHB4KSA0NDBweCxcclxuICAgICAgICAgICAgODAwcHhcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICBzcmM9e3VybEZvcihhc3NldCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9waWN0dXJlPlxyXG4gICAgKVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENvbW1hSm9pbmVyID0gKHsgbGlzdCA9IFtdLCBjb25qdWN0aW9uID0gJ2FuZCcsIHNlcGFyYXRvciA9ICcsJyB9KSA9PiA8RnJhZ21lbnQ+e2xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gPHNwYW4ga2V5PXtpdGVtfT57aXRlbX17XHJcbiAgKGxpc3QubGVuZ3RoID09PSAxKSA/ICcuJyA6XHJcbiAgKGluZGV4ICsgMiA9PT0gbGlzdC5sZW5ndGgpID8gYCAke2Nvbmp1Y3Rpb259IGAgOlxyXG4gIChpbmRleCArIDEgPT09IGxpc3QubGVuZ3RoKSA/ICcuJyA6IGAke3NlcGFyYXRvcn0gYFxyXG4gIH1cclxuICA8L3NwYW4+KVxyXG59PC9GcmFnbWVudD5cclxuXHJcbmNvbnN0IEJsb2dQb3N0ID0gKHsgdGl0bGUgPSAnTm8gdGl0bGUnLCBuYW1lID0gJ05vIG5hbWUnLCBwdWJsaXNoZWRBdD0nJywgY2F0ZWdvcmllcyA9IFtdLCBhdXRob3JJbWFnZSA9IHt9LCBib2R5ID0gW10sIF91cGRhdGVkQXQgPSAnJyB9KSA9PiAoXHJcbiAgPExheW91dCAgdGl0bGU9e3RpdGxlfT4gXHJcbiAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX0gLz5cclxuICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cclxuXHQgIDxkaXYgaWQ9XCJwYW5lbFwiICBkYXRhLXNsaWRlb3V0LWlnbm9yZT5cclxuXHRcdCAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJpY2luZ1wiPlxyXG5cdFx0ICA8TmF2YmFyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRleHQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRlbnRcIj5cclxuICBcclxuICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGVudFwiPlxyXG4gIDxkaXY+PGltZyBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoNTApLnVybCgpfSAvPjwvZGl2PlxyXG4gIDxoMT57dGl0bGV9PC9oMT5cclxuICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+IFdyaXR0ZW4gYnkgPHNwYW4+e25hbWV9PC9zcGFuPiBpbiA8c3Bhbj57Y2F0ZWdvcmllcy5sZW5ndGggJiYgIDxDb21tYUpvaW5lciBsaXN0PXtjYXRlZ29yaWVzfSAvPn08L3NwYW4+IG9uIHtmb3JtYXQocHVibGlzaGVkQXQsICdNTU1NIERELCBZWVlZJyl9XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyZXNwXCI+PEJsb2NrQ29udGVudFxyXG4gICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxyXG4gICAgYmxvY2tzPXtib2R5fVxyXG4gICAgaW1hZ2VPcHRpb25zPXt7dzogNjYwLCBoOiA0MzUsIGZpdDogJ21pbid9fVxyXG4gICAgcHJvamVjdElkPXtjbGllbnQuY2xpZW50Q29uZmlnLnByb2plY3RJZH1cclxuICAgIGRhdGFzZXQ9e2NsaWVudC5jbGllbnRDb25maWcuZGF0YXNldH1cclxuICAvPjwvZGl2PlxyXG4gIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LWxlZnRcIj48L2k+PExpbmsgaHJlZj1cIi9ibG9nXCI+PGE+QmFjayB0byBCbG9nPC9hPjwvTGluaz5cclxuICA8L2Rpdj5cclxuXHJcblxyXG48L2Rpdj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuXHRcclxuXHQ8c3R5bGUganN4PntgXHJcblx0LnRleHQtY29udGVudHtcclxuXHRcdCAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0ICB9XHJcblx0ICBcclxuICAgICAgLnRleHQtY29udGVudCBzcGFue1xyXG5cdFx0ICBmb250LXdlaWdodDogNjAwO1xyXG5cdFx0ICBjb2xvcjogI0I3MjFGRjtcclxuXHRcdCAgZm9udC1zdHlsZTpub3JtYWw7XHJcblx0ICB9XHJcblx0ICAucG9zdC1jb250ZW50IGltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cdCAgfVxyXG5cdCAgLnBvc3QtY29udGVudCBpe1xyXG4gICAgY29sb3I6IzFFQUVEQjtcclxuXHQgIH1cclxuXHQgIC5yZXNwe1xyXG4gIG1heC13aWR0aDogNzQwcHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdHRleHQtYWxpZ246anVzdGlmeTtcclxuXHRtYXJnaW4tbGVmdDphdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICAgIH1cclxuXHQgIFxyXG4gICAgYH08L3N0eWxlPlxyXG5cdFxyXG5cdFxyXG48L0xheW91dD5cclxuKVxyXG5cclxuQmxvZ1Bvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHJlcSkgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2goYCpbc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxyXG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcblx0ICBwdWJsaXNoZWRBdCxcclxuICAgICAgYm9keSxcclxuICAgICAgX3VwZGF0ZWRBdFxyXG4gICAgfWAsIHtzbHVnOiByZXEucXVlcnkuc2x1Z30pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0Il19 */\n/*@ sourceURL=pages\\post.js */"
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

          case 3:
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
//# sourceMappingURL=6.388cf9d7060261757a57.hot-update.js.map