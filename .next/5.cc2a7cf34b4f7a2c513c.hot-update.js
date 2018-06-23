webpackHotUpdate(5,{

/***/ "./pages/blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns___ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client__ = __webpack_require__("./client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_about_scss__ = __webpack_require__("./styles/about.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_about_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_about_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sanity_block_content_to_react__ = __webpack_require__("./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sanity_block_content_to_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__sanity_block_content_to_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sanity_image_url__ = __webpack_require__("./node_modules/@sanity/image-url/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sanity_image_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__sanity_image_url__);

var _jsxFileName = "C:\\Users\\user\\challaris-tech-website\\pages\\blog.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }










var builder = __WEBPACK_IMPORTED_MODULE_10__sanity_image_url___default()(__WEBPACK_IMPORTED_MODULE_5__client___default.a);

function urlFor(source) {
  return builder.image(source);
}

var Blog = function Blog(_ref) {
  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Layout__["a" /* default */], {
    title: "Blog | Charisol Technologies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: __WEBPACK_IMPORTED_MODULE_8__styles_about_scss___default.a
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-4027191631"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-4027191631"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-4027191631" + " " + "pricing"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-4027191631" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-4027191631" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-4027191631" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-4027191631" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-4027191631" + " " + "heading-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-4027191631" + " " + "heading no-reveal"
  }, "The Charisol Blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-4027191631" + " " + "sub-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-4027191631" + " " + "sub-text no-reveal bl-subhead"
  }, "We publish on topics such as software development, digital publishing and content strategy.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-4027191631"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-4027191631"
  }, posts.map(function (_ref2) {
    var _id = _ref2._id,
        _ref2$title = _ref2.title,
        title = _ref2$title === void 0 ? '' : _ref2$title,
        _ref2$name = _ref2.name,
        name = _ref2$name === void 0 ? 'No name' : _ref2$name,
        _ref2$publishedAt = _ref2.publishedAt,
        publishedAt = _ref2$publishedAt === void 0 ? '' : _ref2$publishedAt,
        _ref2$categories = _ref2.categories,
        categories = _ref2$categories === void 0 ? [] : _ref2$categories,
        _ref2$mainImage = _ref2.mainImage,
        mainImage = _ref2$mainImage === void 0 ? {} : _ref2$mainImage,
        _ref2$body = _ref2.body,
        body = _ref2$body === void 0 ? [] : _ref2$body,
        _ref2$authorImage = _ref2.authorImage,
        authorImage = _ref2$authorImage === void 0 ? {} : _ref2$authorImage,
        _ref2$slug = _ref2.slug,
        slug = _ref2$slug === void 0 ? '' : _ref2$slug,
        _ref2$_updatedAt = _ref2._updatedAt,
        _updatedAt = _ref2$_updatedAt === void 0 ? '' : _ref2$_updatedAt;

    return slug && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
      key: _id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      className: "jsx-4027191631" + " " + "card-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-4027191631" + " " + "image"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      style: {
        width: "140%"
      },
      srcSet: "\n            ".concat(urlFor(mainImage).width(320), " 320w,\n            ").concat(urlFor(mainImage).width(480), " 480w,\n            ").concat(urlFor(mainImage).width(800), " 800w\n          "),
      sizes: "\n            (max-width: 320px) 280px,\n            (max-width: 480px) 440px,\n            800px\n          ",
      src: urlFor(mainImage),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      className: "jsx-4027191631"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
      prefetch: true,
      href: "/post/".concat(slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      }
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      className: "jsx-4027191631"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      className: "jsx-4027191631" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      className: "jsx-4027191631" + " " + "fa fa-pencil"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      className: "jsx-4027191631"
    }, " ", categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      className: "jsx-4027191631" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_4_date_fns___["format"])(publishedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      className: "jsx-4027191631"
    }, title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      className: "jsx-4027191631" + " " + "overf"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__sanity_block_content_to_react___default.a, {
      blocks: body[1],
      imageOptions: {
        w: 900,
        h: 600,
        fit: 'min'
      },
      projectId: __WEBPACK_IMPORTED_MODULE_5__client___default.a.clientConfig.projectId,
      dataset: __WEBPACK_IMPORTED_MODULE_5__client___default.a.clientConfig.dataset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      }
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      className: "jsx-4027191631"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      className: "jsx-4027191631" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      className: "jsx-4027191631"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      className: "jsx-4027191631" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      className: "jsx-4027191631"
    }, " ", name))))));
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "4027191631",
    css: ".bl-subhead.jsx-4027191631{font-weight:300px;font-size:22px;color:#6b6c7a;}.card-list.jsx-4027191631{list-style-type:none;width:37%;height:550px;overflow:hidden;position:relative;float:left;margin-left:20px;margin-top:20px;padding:40px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.card-list.jsx-4027191631:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.card-list.jsx-4027191631 h1.jsx-4027191631{margin-top:1.5rem;font-size:22px;line-height:33px;color:#434456;font-weight:500;}.card-list.jsx-4027191631 a.jsx-4027191631{-webkit-text-decoration:none;text-decoration:none;}.card-list.jsx-4027191631 p.jsx-4027191631{font-size:12px;color:#6b6c7a;}.card-list.jsx-4027191631 p.jsx-4027191631 em.jsx-4027191631{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.card-list.jsx-4027191631 ul.jsx-4027191631{list-style-type:none;}.card-list.jsx-4027191631 .date.jsx-4027191631{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.card-list.jsx-4027191631 .text.jsx-4027191631{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.card-list.jsx-4027191631 .author.jsx-4027191631{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.card-list.jsx-4027191631 i.jsx-4027191631{color:#fff;font-size:8px;display:inline-block;border-radius:60px;background-color:#B721FF;padding:0.5em 0.6em;}.card-list.jsx-4027191631 .cat.jsx-4027191631{margin-bottom:1px;padding-top:20px;}.card-list.jsx-4027191631 .cat.jsx-4027191631 em.jsx-4027191631{margin-left:3px;}.card-list.jsx-4027191631 .name.jsx-4027191631{padding-top:10px;margin-left:50px;}.card-list.jsx-4027191631 h1.jsx-4027191631:hover{color:#B721FF;}.image.jsx-4027191631 img.jsx-4027191631{width:10px;height:200px;object-fit:cover;margin-left:-40px;margin-top:-40px;}.overf.jsx-4027191631{max-height:120px;overflow:hidden;text-overflow:ellipsis;text-align:justify;content:\"\";position:relative;color:#434456;font-size:15px;line-height:27px;}.overf.jsx-4027191631:after{content:'';width:100%;height:100%;position:absolute;left:0;top:0;background:linear-gradient(transparent 50px,#f9f9f9);}footer.jsx-4027191631{position:absolute;top:530px;left:0;width:100%;height:200px;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHZ0IsQUFHb0IsQUFLUyxBQW9Ca0IsQUFTeEIsQUFPRSxBQUdMLEFBSUMsQUFNSSxBQUlMLEFBT0EsQUFTSixBQVFFLEFBUUssQUFJRixBQUdDLEFBSUosQUFHRixBQU9LLEFBV04sQUFTUSxXQXhEUCxBQVFJLEFBc0JILEFBa0JGLEdBckJYLENBekRlLEFBY0csQUFPSixDQWpCQyxBQThDZCxDQUdpQixBQWNGLENBL0dILEFBa0NHLEFBd0RDLEFBeUNOLEdBOUhILEFBaURSLENBcUVZLENBaERPLENBOEJGLENBdEJPLEdBaURoQixDQXZGUixBQXFCaUIsRUE1RE4sQUEyQ0ksQ0FVQyxDQTFESCxBQWtDSyxBQTZFTSxDQWR4QixBQTBCa0IsQ0FqQ2xCLEFBMENZLElBNUdnQyxFQW1EcEIsQUE4Qk4sR0FuR0QsQ0EyQ0MsQUFpQkEsQ0FpQkEsQUFrREosQ0FwSWQsQUEwRGUsR0F4QkEsQUFLZixFQW9GTyxJQVpZLEdBTkYsQUFtQlgsQUFTa0IsQ0EvSEwsQ0FxRFEsQ0FPTCxDQWpCdEIsQ0FkaUIsQUF3Q0csQ0FRRyxBQTBDK0IsVUFiM0MsQ0FOWCxFQW5HWSxFQWlCNkIsQUFZekMsRUFrR0EsQ0FuRWUsQUFTRSxHQXFDQyxDQXJEbEIsRUFwRGMsQ0E0RUssT0FoQmEsRUFTaEMsS0FxQ21CLEVBekdOLElBNEViLFFBNUR3QyxBQTBGckIsQUFXbkIsSUFwSGMsU0EyRGQsRUErQ3FCLEVBekdGLGVBMEduQixHQXpHNEMsRUFjUixzQ0FiVSwwQ0FDZSwrQkFhZ0YsMEJBWnJGLGdIQUM5QixLQWExQixvQkFaK0IsOEJBQ25CLGVBRVQiLCJmaWxlIjoicGFnZXNcXGJsb2cuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFx1c2VyXFxjaGFsbGFyaXMtdGVjaC13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMvJztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gJy4uL3N0eWxlcy9hYm91dC5zY3NzJztcclxuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXHJcblxyXG5jb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudClcclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSlcclxufVxyXG5cclxuY29uc3QgQmxvZyA9ICh7IHBvc3RzID0gW10gfSkgPT4gKFxyXG4gIDxMYXlvdXQgdGl0bGU9XCJCbG9nIHwgQ2hhcmlzb2wgVGVjaG5vbG9naWVzXCI+XHJcbiAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XHJcbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxyXG5cclxuICAgIDxkaXYgaWQ9XCJwYW5lbFwiIGRhdGEtc2xpZGVvdXQtaWdub3JlPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRleHQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmcgbm8tcmV2ZWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIENoYXJpc29sIEJsb2dcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRleHQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItdGV4dCBuby1yZXZlYWwgYmwtc3ViaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdlIHB1Ymxpc2ggb24gdG9waWNzIHN1Y2ggYXMgc29mdHdhcmUgZGV2ZWxvcG1lbnQsIGRpZ2l0YWwgcHVibGlzaGluZyBhbmQgY29udGVudCBzdHJhdGVneS5cclxuXHRcdFx0XHQgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0cy5tYXAoKHsgX2lkLCB0aXRsZSA9ICcnLCBuYW1lID0gJ05vIG5hbWUnLCBwdWJsaXNoZWRBdCA9ICcnLCBjYXRlZ29yaWVzID0gW10sIG1haW5JbWFnZSA9IHt9LCBib2R5ID0gW10sIGF1dGhvckltYWdlID0ge30sIHNsdWcgPSAnJywgX3VwZGF0ZWRBdCA9ICcnIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWcgJiYgPGxpIGtleT17X2lkfSBjbGFzc05hbWU9XCJjYXJkLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNTZXQ9e2BcclxuICAgICAgICAgICAgJHt1cmxGb3IobWFpbkltYWdlKS53aWR0aCgzMjApfSAzMjB3LFxyXG4gICAgICAgICAgICAke3VybEZvcihtYWluSW1hZ2UpLndpZHRoKDQ4MCl9IDQ4MHcsXHJcbiAgICAgICAgICAgICR7dXJsRm9yKG1haW5JbWFnZSkud2lkdGgoODAwKX0gODAwd1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM9e2BcclxuICAgICAgICAgICAgKG1heC13aWR0aDogMzIwcHgpIDI4MHB4LFxyXG4gICAgICAgICAgICAobWF4LXdpZHRoOiA0ODBweCkgNDQwcHgsXHJcbiAgICAgICAgICAgIDgwMHB4XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihtYWluSW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC9wb3N0LyR7c2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2F0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZW0+IHtjYXRlZ29yaWVzfTwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXQocHVibGlzaGVkQXQsICdNTU1NIERELCBZWVlZJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17Ym9keVsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDkwMCwgaDogNjAwLCBmaXQ6ICdtaW4nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJZD17Y2xpZW50LmNsaWVudENvbmZpZy5wcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ9e2NsaWVudC5jbGllbnRDb25maWcuZGF0YXNldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDQwKS51cmwoKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeVxyXG5cdFx0XHRcdFx0PGVtPiB7bmFtZX08L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmJsLXN1YmhlYWQgeyBcclxuXHRcdGZvbnQtd2VpZ2h0OjMwMHB4O1xyXG5cdFx0Zm9udC1zaXplOjIycHg7XHJcblx0XHRjb2xvcjogIzZiNmM3YTtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgeyBcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuXHRcdHdpZHRoOjM3JTtcclxuXHRcdGhlaWdodDo1NTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tbGVmdDoyMHB4O1xyXG5cdG1hcmdpbi10b3A6MjBweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgxMCwgMTYsIDM0LCAwLjEpO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuMDIsIDAuMDEsIDAuNDcsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjAyLCAwLjAxLCAwLjQ3LCAxKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTIwcHg7XHJcblx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0XHJcbiAgICAgIH1cdCAgXHJcblx0ICAuY2FyZC1saXN0OmhvdmVye1xyXG5cdFx0ICBib3gtc2hhZG93OiAwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS9ndWlkbGluZS1wcmlzbWljJTJGN2Q1ZjIyMmMtMjQyYi00MGUwLWJjMmUtYjE5Yzg5ZjE4YjQyX2JnLWhlYWQtYmxvZ3Bvc3Qtd3JpdGluZy5zdmcpO1xyXG4gICAgXHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IGgxe1xyXG5cdFx0ICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIGNvbG9yOiAjNDM0NDU2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgYXtcclxuXHRcdCAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IHAge1xyXG5cdFx0ICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzZiNmM3YTtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgcCBlbXtcclxuXHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdCAgZm9udC1zaXplOjEycHg7XHJcblx0XHQgIGNvbG9yOiAjNDM0NDU2O1xyXG5cdFx0ICBmb250LXN0eWxlOm5vcm1hbDtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgdWx7XHJcblx0XHQgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuY2FyZC1saXN0IC5kYXRle1xyXG5cdFx0ICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIG1hcmdpbjogNXB4IDAgMDtcclxuICAgIGNvbG9yOiAjNmI2YzdhO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IC50ZXh0e1xyXG5cdFx0ICBmb250LXNpemU6IDE1cHg7XHJcblx0XHQgIGRpc3BsYXk6YmxvY2s7XHJcblx0XHQgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEyLjhweDtcclxuICAgIGNvbG9yOiAjNDM0NDU2O1xyXG5cdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IC5hdXRob3J7XHJcblx0XHQgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdCAgfVxyXG5cdCAgLmNhcmQtbGlzdCBpe1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOjhweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojQjcyMUZGO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAuNmVtO1xyXG5cdCAgfVxyXG5cdCAgLmNhcmQtbGlzdCAuY2F0e1xyXG5cdFx0ICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcblx0XHQgIHBhZGRpbmctdG9wOjIwcHg7XHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IC5jYXQgZW17XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICB9XHJcblx0ICAuY2FyZC1saXN0IC5uYW1le1xyXG5cdFx0ICBwYWRkaW5nLXRvcDogMTBweDtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IGgxOmhvdmVye1xyXG5cdFx0ICBjb2xvcjojQjcyMUZGO1xyXG5cdCAgfVxyXG5cdCAgLmltYWdlIGltZ3tcclxuXHRcdCAgd2lkdGg6IDEwcHg7XHJcblx0XHQgIGhlaWdodDoyMDBweDtcclxuXHRcdCAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6LTQwcHg7XHJcblx0XHQgIG1hcmdpbi10b3A6LTQwcHg7XHJcblx0ICB9XHJcblx0ICAub3ZlcmZ7XHJcblx0XHQgIG1heC1oZWlnaHQ6MTIwcHg7XHJcblx0XHQgIG92ZXJmbG93OmhpZGRlbjtcclxuXHRcdCAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHQgIHRleHQtYWxpZ246anVzdGlmeTtcclxuXHRcdCAgY29udGVudDpcIlwiO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgY29sb3I6ICM0MzQ0NTY7XHJcbiAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6MjdweDtcclxuXHQgIH1cclxuXHQgIC5vdmVyZjphZnRlcntcclxuXHRcdCAgY29udGVudDonJztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTsgICAgXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRvcDowO1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNTBweCwgI2Y5ZjlmOSk7XHJcblx0ICB9XHJcblx0ICBmb290ZXJ7XHQgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUzMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdCAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG4pXHJcblxyXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChgKltfdHlwZSA9PSBcInBvc3RcIl1bMC4uMTAwMF0gfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKXtcclxuICAgICAgX2lkLFxyXG4gICAgICB0aXRsZSxcclxuXHQgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcblx0ICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuXHQgIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcclxuXHQgIG1haW5JbWFnZSxcclxuXHQgIHB1Ymxpc2hlZEF0LFxyXG5cdCAgYm9keSxcclxuICAgICAgXCJzbHVnXCI6IHNsdWcuY3VycmVudCxcclxuICAgICAgX3VwZGF0ZWRBdFxyXG4gICAgfWApXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdfQ== */\n/*@ sourceURL=pages\\blog.js */"
  }));
};

Blog.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_5__client___default.a.fetch("*[_type == \"post\"][0..1000] | order(publishedAt desc){\n      _id,\n      title,\n\t  \"name\": author->name,\n\t  \"categories\": categories[]->title,\n\t  \"authorImage\": author->image,\n\t  mainImage,\n\t  publishedAt,\n\t  body,\n      \"slug\": slug.current,\n      _updatedAt\n    }");

        case 2:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            posts: _context.t0
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
var _default = Blog;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(builder, "builder", "C:\\Users\\user\\challaris-tech-website\\pages\\blog.js");
  reactHotLoader.register(urlFor, "urlFor", "C:\\Users\\user\\challaris-tech-website\\pages\\blog.js");
  reactHotLoader.register(Blog, "Blog", "C:\\Users\\user\\challaris-tech-website\\pages\\blog.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\user\\challaris-tech-website\\pages\\blog.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/blog")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.cc2a7cf34b4f7a2c513c.hot-update.js.map