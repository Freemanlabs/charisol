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
          margin: "0 auto 20px auto"
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
    css: ".text-content.jsx-3418364969{text-align:center;}.text-content.jsx-3418364969 span.jsx-3418364969{font-weight:600;color:#B721FF;font-style:normal;}.post-content.jsx-3418364969 img.jsx-3418364969{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;}.post-content.jsx-3418364969 i.jsx-3418364969{color:#1EAEDB;}.resp.jsx-3418364969{max-width:740px;width:100%;height:auto;display:block;text-align:justify;margin-left:auto;margin-right:auto;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFYSxBQUdzQixBQUlELEFBS0YsQUFPRCxBQUdDLGNBVEcsQUFPbEIsRUFaZSxBQWVOLEVBbkJULFNBb0JhLEdBZkssQ0FLQyxRQVdSLFNBZlgsQ0FLYSxJQVdHLFdBVkgsUUFXQyxJQVZkLGFBV2dCLGtCQUNGLGdCQUNiIiwiZmlsZSI6InBhZ2VzXFxwb3N0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcdXNlclxcY2hhbGxhcmlzLXRlY2gtd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3R5bGVzL2Fib3V0LnNjc3MnO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbmNvbnN0IHNlcmlhbGl6ZXJzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBpbWFnZTogKHsgbm9kZTogeyBhc3NldCB9IH0pID0+IChcclxuICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsbWFyZ2luOlwiMCBhdXRvIDIwcHggYXV0b1wiIH19XHJcbiAgICAgICAgICBzcmNTZXQ9e2BcclxuICAgICAgICAgICAgJHt1cmxGb3IoYXNzZXQpLndpZHRoKDMyMCl9IDMyMHcsXHJcbiAgICAgICAgICAgICR7dXJsRm9yKGFzc2V0KS53aWR0aCg0ODApfSA0ODB3LFxyXG4gICAgICAgICAgICAke3VybEZvcihhc3NldCkud2lkdGgoODAwKX0gODAwd1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICAgIHNpemVzPXtgXHJcbiAgICAgICAgICAgIChtYXgtd2lkdGg6IDMyMHB4KSAyODBweCxcclxuICAgICAgICAgICAgKG1heC13aWR0aDogNDgwcHgpIDQ0MHB4LFxyXG4gICAgICAgICAgICA4MDBweFxyXG4gICAgICAgICAgYH1cclxuICAgICAgICAgIHNyYz17dXJsRm9yKGFzc2V0KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3BpY3R1cmU+XHJcbiAgICApXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgQ29tbWFKb2luZXIgPSAoeyBsaXN0ID0gW10sIGNvbmp1Y3Rpb24gPSAnYW5kJywgc2VwYXJhdG9yID0gJywnIH0pID0+IDxGcmFnbWVudD57bGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8c3BhbiBrZXk9e2l0ZW19PntpdGVtfXtcclxuICAobGlzdC5sZW5ndGggPT09IDEpID8gJy4nIDpcclxuICAoaW5kZXggKyAyID09PSBsaXN0Lmxlbmd0aCkgPyBgICR7Y29uanVjdGlvbn0gYCA6XHJcbiAgKGluZGV4ICsgMSA9PT0gbGlzdC5sZW5ndGgpID8gJy4nIDogYCR7c2VwYXJhdG9yfSBgXHJcbiAgfVxyXG4gIDwvc3Bhbj4pXHJcbn08L0ZyYWdtZW50PlxyXG5cclxuY29uc3QgQmxvZ1Bvc3QgPSAoeyB0aXRsZSA9ICdObyB0aXRsZScsIG5hbWUgPSAnTm8gbmFtZScsIHB1Ymxpc2hlZEF0PScnLCBjYXRlZ29yaWVzID0gW10sIGF1dGhvckltYWdlID0ge30sIGJvZHkgPSBbXSwgX3VwZGF0ZWRBdCA9ICcnIH0pID0+IChcclxuICA8TGF5b3V0ICB0aXRsZT17dGl0bGV9PiBcclxuICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxyXG4gICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxyXG5cdCAgPGRpdiBpZD1cInBhbmVsXCIgIGRhdGEtc2xpZGVvdXQtaWdub3JlPlxyXG5cdFx0ICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XHJcblx0XHQgIDxOYXZiYXIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctdGV4dC13cmFwcGVyXCI+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGVudFwiPlxyXG4gIFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XHJcbiAgPGRpdj48aW1nIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKS53aWR0aCg1MCkudXJsKCl9IC8+PC9kaXY+XHJcbiAgPGgxPnt0aXRsZX08L2gxPlxyXG4gIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT4gV3JpdHRlbiBieSA8c3Bhbj57bmFtZX08L3NwYW4+IGluIDxzcGFuPntjYXRlZ29yaWVzLmxlbmd0aCAmJiAgPENvbW1hSm9pbmVyIGxpc3Q9e2NhdGVnb3JpZXN9IC8+fTwvc3Bhbj4gb24ge2Zvcm1hdChwdWJsaXNoZWRBdCwgJ01NTU0gREQsIFlZWVknKX1cclxuICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BcIj48QmxvY2tDb250ZW50XHJcbiAgICBzZXJpYWxpemVycz17c2VyaWFsaXplcnN9XHJcbiAgICBibG9ja3M9e2JvZHl9XHJcbiAgICBpbWFnZU9wdGlvbnM9e3t3OiA2NjAsIGg6IDQzNSwgZml0OiAnbWluJ319XHJcbiAgICBwcm9qZWN0SWQ9e2NsaWVudC5jbGllbnRDb25maWcucHJvamVjdElkfVxyXG4gICAgZGF0YXNldD17Y2xpZW50LmNsaWVudENvbmZpZy5kYXRhc2V0fVxyXG4gIC8+PC9kaXY+XHJcbiAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctbGVmdFwiPjwvaT48TGluayBocmVmPVwiL2Jsb2dcIj48YT5CYWNrIHRvIEJsb2c8L2E+PC9MaW5rPlxyXG4gIDwvZGl2PlxyXG5cclxuXHJcbjwvZGl2PjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG5cdFxyXG5cdDxzdHlsZSBqc3g+e2BcclxuXHQudGV4dC1jb250ZW50e1xyXG5cdFx0ICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHQgIH1cclxuXHQgIFxyXG4gICAgICAudGV4dC1jb250ZW50IHNwYW57XHJcblx0XHQgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHQgIGNvbG9yOiAjQjcyMUZGO1xyXG5cdFx0ICBmb250LXN0eWxlOm5vcm1hbDtcclxuXHQgIH1cclxuXHQgIC5wb3N0LWNvbnRlbnQgaW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblx0ICB9XHJcblx0ICAucG9zdC1jb250ZW50IGl7XHJcbiAgICBjb2xvcjojMUVBRURCO1xyXG5cdCAgfVxyXG5cdCAgLnJlc3B7XHJcbiAgbWF4LXdpZHRoOiA3NDBweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0dGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG5cdG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgfVxyXG5cdCAgXHJcbiAgICBgfTwvc3R5bGU+XHJcblx0XHJcblx0XHJcbjwvTGF5b3V0PlxyXG4pXHJcblxyXG5CbG9nUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocmVxKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChgKltzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICAgICAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgICAgIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcclxuXHQgIHB1Ymxpc2hlZEF0LFxyXG4gICAgICBib2R5LFxyXG4gICAgICBfdXBkYXRlZEF0XHJcbiAgICB9YCwge3NsdWc6IHJlcS5xdWVyeS5zbHVnfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3QiXX0= */\n/*@ sourceURL=pages\\post.js */"
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
//# sourceMappingURL=6.c4e4ac0c012ccef3aa90.hot-update.js.map