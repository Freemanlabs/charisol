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

var _jsxFileName = "C:\\Users\\user\\nextjs\\pages\\post.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }










var builder = __WEBPACK_IMPORTED_MODULE_4__sanity_image_url___default()(__WEBPACK_IMPORTED_MODULE_7__client___default.a);

function urlFor(source) {
  return builder.image(source);
}

var CommaJoiner = function CommaJoiner(_ref) {
  var _ref$list = _ref.list,
      list = _ref$list === void 0 ? [] : _ref$list,
      _ref$conjuction = _ref.conjuction,
      conjuction = _ref$conjuction === void 0 ? 'and' : _ref$conjuction,
      _ref$separator = _ref.separator,
      separator = _ref$separator === void 0 ? ',' : _ref$separator;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, list.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
      key: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, item, list.length === 1 ? '.' : index + 2 === list.length ? " ".concat(conjuction, " ") : index + 1 === list.length ? '.' : "".concat(separator, " "));
  }));
};

var BlogPost = function BlogPost(_ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? 'No title' : _ref2$title,
      _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? 'No name' : _ref2$name,
      publishedAt = _ref2.publishedAt,
      _ref2$categories = _ref2.categories,
      categories = _ref2$categories === void 0 ? [] : _ref2$categories,
      _ref2$authorImage = _ref2.authorImage,
      authorImage = _ref2$authorImage === void 0 ? {} : _ref2$authorImage,
      _ref2$body = _ref2.body,
      body = _ref2$body === void 0 ? [] : _ref2$body,
      _ref2$_updatedAt = _ref2._updatedAt,
      _updatedAt = _ref2$_updatedAt === void 0 ? '' : _ref2$_updatedAt;

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Layout__["a" /* default */], {
    title: "Blog | Charisol Technologies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: __WEBPACK_IMPORTED_MODULE_10__styles_about_scss___default.a
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-1389405528"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-1389405528"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-1389405528" + " " + "pricing"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-1389405528" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-1389405528" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-1389405528" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-1389405528" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    className: "jsx-1389405528"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    className: "jsx-1389405528"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
    src: urlFor(authorImage).width(50).url(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    className: "jsx-1389405528"
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: "jsx-1389405528"
  }, title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-1389405528" + " " + "fa fa-pencil"
  }), " Written by ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-1389405528"
  }, name), " in ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-1389405528"
  }, categories.length && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CommaJoiner, {
    list: categories,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  })), " on ", Object(__WEBPACK_IMPORTED_MODULE_6_date_fns__["format"])(_updatedAt, 'MMMM DD, YYYY'), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-1389405528" + " " + "resp"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__sanity_block_content_to_react___default.a, {
    blocks: body,
    imageOptions: {
      w: 900,
      h: 600,
      fit: 'max'
    },
    projectId: __WEBPACK_IMPORTED_MODULE_7__client___default.a.clientConfig.projectId,
    dataset: __WEBPACK_IMPORTED_MODULE_7__client___default.a.clientConfig.dataset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    className: "jsx-1389405528" + " " + "fa fa-arrow-left"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    className: "jsx-1389405528"
  }, "Back to Blog")), Object(__WEBPACK_IMPORTED_MODULE_6_date_fns__["format"])(publishedAt, 'MMMM DD, YYYY')))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "1389405528",
    css: ".text-content.jsx-1389405528 span.jsx-1389405528{font-weight:600;color:#B721FF;font-style:normal;}.text-content.jsx-1389405528 img.jsx-1389405528{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;}.text-content.jsx-1389405528 i.jsx-1389405528{color:#1EAEDB;}.resp.jsx-1389405528{max-width:100%;height:auto;text-align:justify;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEYSxBQUdxQixBQUtGLEFBT0QsQUFHRCxjQVRLLEFBT2xCLENBR2EsQ0FmRSxXQWdCQyxHQWZFLENBS0MsZUFXbEIsRUFmRCxDQUthLGVBQ0EsWUFDYiIsImZpbGUiOiJwYWdlc1xccG9zdC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHVzZXJcXG5leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvYWJvdXQuc2Nzcyc7XG5cbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IENvbW1hSm9pbmVyID0gKHsgbGlzdCA9IFtdLCBjb25qdWN0aW9uID0gJ2FuZCcsIHNlcGFyYXRvciA9ICcsJyB9KSA9PiA8RnJhZ21lbnQ+e2xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gPHNwYW4ga2V5PXtpdGVtfT57aXRlbX17XG4gIChsaXN0Lmxlbmd0aCA9PT0gMSkgPyAnLicgOlxuICAoaW5kZXggKyAyID09PSBsaXN0Lmxlbmd0aCkgPyBgICR7Y29uanVjdGlvbn0gYCA6XG4gIChpbmRleCArIDEgPT09IGxpc3QubGVuZ3RoKSA/ICcuJyA6IGAke3NlcGFyYXRvcn0gYFxuICB9XG4gIDwvc3Bhbj4pXG59PC9GcmFnbWVudD5cblxuY29uc3QgQmxvZ1Bvc3QgPSAoeyB0aXRsZSA9ICdObyB0aXRsZScsIG5hbWUgPSAnTm8gbmFtZScsIHB1Ymxpc2hlZEF0LCBjYXRlZ29yaWVzID0gW10sIGF1dGhvckltYWdlID0ge30sIGJvZHkgPSBbXSwgX3VwZGF0ZWRBdCA9ICcnIH0pID0+IChcbiAgPExheW91dCAgdGl0bGU9XCJCbG9nIHwgQ2hhcmlzb2wgVGVjaG5vbG9naWVzXCI+IFxuICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxuICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cblx0ICA8ZGl2IGlkPVwicGFuZWxcIiAgZGF0YS1zbGlkZW91dC1pZ25vcmU+XG5cdFx0ICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XG5cdFx0ICA8TmF2YmFyIC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRleHQtd3JhcHBlclwiPlxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250ZW50XCI+XG4gIFxuICA8ZGl2PlxuICA8ZGl2PjxpbWcgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDUwKS51cmwoKX0gLz48L2Rpdj5cbiAgPGgxPnt0aXRsZX08L2gxPlxuICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+IFdyaXR0ZW4gYnkgPHNwYW4+e25hbWV9PC9zcGFuPiBpbiA8c3Bhbj57Y2F0ZWdvcmllcy5sZW5ndGggJiYgIDxDb21tYUpvaW5lciBsaXN0PXtjYXRlZ29yaWVzfSAvPn08L3NwYW4+IG9uIHtmb3JtYXQoX3VwZGF0ZWRBdCwgJ01NTU0gREQsIFlZWVknKX1cbiAgPGRpdiBjbGFzc05hbWU9XCJyZXNwXCI+PEJsb2NrQ29udGVudFxuICAgIGJsb2Nrcz17Ym9keX1cbiAgICBpbWFnZU9wdGlvbnM9e3t3OiA5MDAsIGg6IDYwMCwgZml0OiAnbWF4J319XG4gICAgcHJvamVjdElkPXtjbGllbnQuY2xpZW50Q29uZmlnLnByb2plY3RJZH1cbiAgICBkYXRhc2V0PXtjbGllbnQuY2xpZW50Q29uZmlnLmRhdGFzZXR9XG4gIC8+PC9kaXY+XG4gIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LWxlZnRcIj48L2k+PExpbmsgaHJlZj1cIi9ibG9nXCI+PGE+QmFjayB0byBCbG9nPC9hPjwvTGluaz5cbntmb3JtYXQocHVibGlzaGVkQXQsICdNTU1NIERELCBZWVlZJyl9XG4gIDwvZGl2PlxuXG5cbjwvZGl2PjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cblx0XG5cdDxzdHlsZSBqc3g+e2BcbiAgICAgIC50ZXh0LWNvbnRlbnQgc3Bhbntcblx0XHQgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0ICBjb2xvcjogI0I3MjFGRjtcblx0XHQgIGZvbnQtc3R5bGU6bm9ybWFsO1xuXHQgIH1cblx0ICAudGV4dC1jb250ZW50IGltZ3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG5cdCAgfVxuXHQgIC50ZXh0LWNvbnRlbnQgaXtcbiAgICBjb2xvcjojMUVBRURCO1xuXHQgIH1cblx0ICAucmVzcHtcblx0bWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcblx0dGV4dC1hbGlnbjpqdXN0aWZ5O1xuICAgIGB9PC9zdHlsZT5cblx0XG5cdFxuPC9MYXlvdXQ+XG4pXG5cbkJsb2dQb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5OiB7IHNsdWcgfSB9KSA9PiB7XG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2goYCpbc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgICAgIHRpdGxlLFxuICAgICAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICAgICAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuXHQgIHB1Ymxpc2hlZEF0LFxuICAgICAgYm9keSxcbiAgICAgIF91cGRhdGVkQXRcbiAgICB9YCwgeyBzbHVnIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0Il19 */\n/*@ sourceURL=pages\\post.js */"
  }));
};

BlogPost.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref3) {
    var slug;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            slug = _ref3.query.slug;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_7__client___default.a.fetch("*[slug.current == $slug][0]{\n      title,\n      \"name\": author->name,\n      \"categories\": categories[]->title,\n      \"authorImage\": author->image,\n\t  publishedAt,\n      body,\n      _updatedAt\n    }", {
              slug: slug
            });

          case 3:
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

  reactHotLoader.register(builder, "builder", "C:\\Users\\user\\nextjs\\pages\\post.js");
  reactHotLoader.register(urlFor, "urlFor", "C:\\Users\\user\\nextjs\\pages\\post.js");
  reactHotLoader.register(CommaJoiner, "CommaJoiner", "C:\\Users\\user\\nextjs\\pages\\post.js");
  reactHotLoader.register(BlogPost, "BlogPost", "C:\\Users\\user\\nextjs\\pages\\post.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\user\\nextjs\\pages\\post.js");
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
//# sourceMappingURL=6.3f86476da369dcd7d6ca.hot-update.js.map