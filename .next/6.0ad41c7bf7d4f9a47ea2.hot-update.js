webpackHotUpdate(6,{

/***/ "./pages/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
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

var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/pages/post.js";


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
          width: "100%"
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
    css: ".text-content.jsx-3418364969{text-align:center;}.text-content.jsx-3418364969 span.jsx-3418364969{font-weight:600;color:#B721FF;font-style:normal;}.post-content.jsx-3418364969 img.jsx-3418364969{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;}.post-content.jsx-3418364969 i.jsx-3418364969{color:#1EAEDB;}.resp.jsx-3418364969{max-width:740px;width:100%;height:auto;display:block;text-align:justify;margin-left:auto;margin-right:auto;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VhLEFBR3NCLEFBSUQsQUFLRixBQU9ELEFBR0MsY0FURyxBQU9sQixFQVplLEFBZU4sRUFuQlQsU0FvQmEsR0FmSyxDQUtDLFFBV1IsU0FmWCxDQUthLElBV0csV0FWSCxRQVdDLElBVmQsYUFXZ0Isa0JBQ0YsZ0JBQ2IiLCJmaWxlIjoicGFnZXMvcG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjYm9vay93b3Jrc3BhY2UvY2hhcmlzb2wvY2hhbGxhcmlzLXRlY2gtd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvYWJvdXQuc2Nzcyc7XG5cbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IHNlcmlhbGl6ZXJzID0ge1xuICB0eXBlczoge1xuICAgIGltYWdlOiAoeyBub2RlOiB7IGFzc2V0IH0gfSkgPT4gKFxuICAgICAgPHBpY3R1cmU+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICBzcmNTZXQ9e2BcbiAgICAgICAgICAgICR7dXJsRm9yKGFzc2V0KS53aWR0aCgzMjApfSAzMjB3LFxuICAgICAgICAgICAgJHt1cmxGb3IoYXNzZXQpLndpZHRoKDQ4MCl9IDQ4MHcsXG4gICAgICAgICAgICAke3VybEZvcihhc3NldCkud2lkdGgoODAwKX0gODAwd1xuICAgICAgICAgIGB9XG4gICAgICAgICAgc2l6ZXM9e2BcbiAgICAgICAgICAgIChtYXgtd2lkdGg6IDMyMHB4KSAyODBweCxcbiAgICAgICAgICAgIChtYXgtd2lkdGg6IDQ4MHB4KSA0NDBweCxcbiAgICAgICAgICAgIDgwMHB4XG4gICAgICAgICAgYH1cbiAgICAgICAgICBzcmM9e3VybEZvcihhc3NldCl9XG4gICAgICAgIC8+XG4gICAgICA8L3BpY3R1cmU+XG4gICAgKVxuICB9XG59O1xuXG5jb25zdCBDb21tYUpvaW5lciA9ICh7IGxpc3QgPSBbXSwgY29uanVjdGlvbiA9ICdhbmQnLCBzZXBhcmF0b3IgPSAnLCcgfSkgPT4gPEZyYWdtZW50PntsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IDxzcGFuIGtleT17aXRlbX0+e2l0ZW19e1xuICAobGlzdC5sZW5ndGggPT09IDEpID8gJy4nIDpcbiAgKGluZGV4ICsgMiA9PT0gbGlzdC5sZW5ndGgpID8gYCAke2Nvbmp1Y3Rpb259IGAgOlxuICAoaW5kZXggKyAxID09PSBsaXN0Lmxlbmd0aCkgPyAnLicgOiBgJHtzZXBhcmF0b3J9IGBcbiAgfVxuICA8L3NwYW4+KVxufTwvRnJhZ21lbnQ+XG5cbmNvbnN0IEJsb2dQb3N0ID0gKHsgdGl0bGUgPSAnTm8gdGl0bGUnLCBuYW1lID0gJ05vIG5hbWUnLCBwdWJsaXNoZWRBdD0nJywgY2F0ZWdvcmllcyA9IFtdLCBhdXRob3JJbWFnZSA9IHt9LCBib2R5ID0gW10sIF91cGRhdGVkQXQgPSAnJyB9KSA9PiAoXG4gIDxMYXlvdXQgIHRpdGxlPXt0aXRsZX0+IFxuICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxuICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cblx0ICA8ZGl2IGlkPVwicGFuZWxcIiAgZGF0YS1zbGlkZW91dC1pZ25vcmU+XG5cdFx0ICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XG5cdFx0ICA8TmF2YmFyIC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRleHQtd3JhcHBlclwiPlxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250ZW50XCI+XG4gIFxuICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGVudFwiPlxuICA8ZGl2PjxpbWcgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDUwKS51cmwoKX0gLz48L2Rpdj5cbiAgPGgxPnt0aXRsZX08L2gxPlxuICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+IFdyaXR0ZW4gYnkgPHNwYW4+e25hbWV9PC9zcGFuPiBpbiA8c3Bhbj57Y2F0ZWdvcmllcy5sZW5ndGggJiYgIDxDb21tYUpvaW5lciBsaXN0PXtjYXRlZ29yaWVzfSAvPn08L3NwYW4+IG9uIHtmb3JtYXQocHVibGlzaGVkQXQsICdNTU1NIERELCBZWVlZJyl9XG4gIDxkaXYgY2xhc3NOYW1lPVwicmVzcFwiPjxCbG9ja0NvbnRlbnRcbiAgICBzZXJpYWxpemVycz17c2VyaWFsaXplcnN9XG4gICAgYmxvY2tzPXtib2R5fVxuICAgIGltYWdlT3B0aW9ucz17e3c6IDY2MCwgaDogNDM1LCBmaXQ6ICdtaW4nfX1cbiAgICBwcm9qZWN0SWQ9e2NsaWVudC5jbGllbnRDb25maWcucHJvamVjdElkfVxuICAgIGRhdGFzZXQ9e2NsaWVudC5jbGllbnRDb25maWcuZGF0YXNldH1cbiAgLz48L2Rpdj5cbiAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctbGVmdFwiPjwvaT48TGluayBocmVmPVwiL2Jsb2dcIj48YT5CYWNrIHRvIEJsb2c8L2E+PC9MaW5rPlxuICA8L2Rpdj5cblxuXG48L2Rpdj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG5cdFxuXHQ8c3R5bGUganN4PntgXG5cdC50ZXh0LWNvbnRlbnR7XG5cdFx0ICB0ZXh0LWFsaWduOmNlbnRlcjtcblx0ICB9XG5cdCAgXG4gICAgICAudGV4dC1jb250ZW50IHNwYW57XG5cdFx0ICBmb250LXdlaWdodDogNjAwO1xuXHRcdCAgY29sb3I6ICNCNzIxRkY7XG5cdFx0ICBmb250LXN0eWxlOm5vcm1hbDtcblx0ICB9XG5cdCAgLnBvc3QtY29udGVudCBpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXHQgIH1cblx0ICAucG9zdC1jb250ZW50IGl7XG4gICAgY29sb3I6IzFFQUVEQjtcblx0ICB9XG5cdCAgLnJlc3B7XG4gIG1heC13aWR0aDogNzQwcHg7XG4gIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXHRkaXNwbGF5OmJsb2NrO1xuXHR0ZXh0LWFsaWduOmp1c3RpZnk7XG5cdG1hcmdpbi1sZWZ0OmF1dG87XG4gIG1hcmdpbi1yaWdodDphdXRvO1xuICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgfVxuXHQgIFxuICAgIGB9PC9zdHlsZT5cblx0XG5cdFxuPC9MYXlvdXQ+XG4pXG5cbkJsb2dQb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChyZXEpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChgKltzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICAgICAgdGl0bGUsXG4gICAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICAgICAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG5cdCAgcHVibGlzaGVkQXQsXG4gICAgICBib2R5LFxuICAgICAgX3VwZGF0ZWRBdFxuICAgIH1gLCB7c2x1ZzogcmVxLnF1ZXJ5LnNsdWd9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdCJdfQ== */\n/*@ sourceURL=pages/post.js */"
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

  reactHotLoader.register(builder, "builder", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/post.js");
  reactHotLoader.register(urlFor, "urlFor", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/post.js");
  reactHotLoader.register(serializers, "serializers", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/post.js");
  reactHotLoader.register(CommaJoiner, "CommaJoiner", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/post.js");
  reactHotLoader.register(BlogPost, "BlogPost", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/post.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/post.js");
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
//# sourceMappingURL=6.0ad41c7bf7d4f9a47ea2.hot-update.js.map