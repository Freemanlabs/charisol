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
    className: "jsx-2055216992"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-2055216992"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-2055216992" + " " + "pricing"
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
    className: "jsx-2055216992" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-2055216992" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-2055216992" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-2055216992" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-2055216992" + " " + "heading-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-2055216992" + " " + "heading no-reveal"
  }, "The Charisol Blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-2055216992" + " " + "sub-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-2055216992" + " " + "sub-text no-reveal bl-subhead"
  }, "We publish on topics such as software development, digital publishing and content strategy.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-2055216992"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-2055216992"
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
      className: "jsx-2055216992" + " " + "card-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-2055216992" + " " + "image"
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
      className: "jsx-2055216992"
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
      className: "jsx-2055216992"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      className: "jsx-2055216992" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      className: "jsx-2055216992" + " " + "fa fa-pencil"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      className: "jsx-2055216992"
    }, " ", categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      className: "jsx-2055216992" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_4_date_fns___["format"])(publishedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      className: "jsx-2055216992"
    }, title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      className: "jsx-2055216992" + " " + "overf"
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
      className: "jsx-2055216992"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      className: "jsx-2055216992" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      className: "jsx-2055216992"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      className: "jsx-2055216992" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      className: "jsx-2055216992"
    }, " ", name))))));
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "2055216992",
    css: ".bl-subhead.jsx-2055216992{font-weight:300px;font-size:22px;color:#6b6c7a;}.card-list.jsx-2055216992{list-style-type:none;width:37%;height:550px;overflow:hidden;position:relative;float:left;margin-left:20px;margin-top:20px;padding:40px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.card-list.jsx-2055216992:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.card-list.jsx-2055216992 h1.jsx-2055216992{margin-top:1.5rem;font-size:22px;line-height:33px;color:#434456;font-weight:500;}.card-list.jsx-2055216992 a.jsx-2055216992{-webkit-text-decoration:none;text-decoration:none;}.card-list.jsx-2055216992 p.jsx-2055216992{font-size:12px;color:#6b6c7a;}.card-list.jsx-2055216992 p.jsx-2055216992 em.jsx-2055216992{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.card-list.jsx-2055216992 ul.jsx-2055216992{list-style-type:none;}.card-list.jsx-2055216992 .date.jsx-2055216992{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.card-list.jsx-2055216992 .text.jsx-2055216992{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.card-list.jsx-2055216992 .author.jsx-2055216992{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.card-list.jsx-2055216992 i.jsx-2055216992{color:#fff;font-size:10px;display:inline-block;border-radius:60px;background-color:#B721FF;padding:0.5em 0.6em;}.card-list.jsx-2055216992 .cat.jsx-2055216992{margin-bottom:1px;padding-top:20px;}.card-list.jsx-2055216992 .cat.jsx-2055216992 em.jsx-2055216992{margin-left:3px;}.card-list.jsx-2055216992 .name.jsx-2055216992{padding-top:10px;margin-left:50px;}.card-list.jsx-2055216992 h1.jsx-2055216992:hover{color:#B721FF;}.image.jsx-2055216992 img.jsx-2055216992{width:10px;height:200px;object-fit:cover;margin-left:-40px;margin-top:-40px;}.overf.jsx-2055216992{max-height:120px;overflow:hidden;text-overflow:ellipsis;text-align:justify;content:\"\";position:relative;color:#434456;font-size:15px;line-height:27px;}.overf.jsx-2055216992:after{content:'';width:100%;height:100%;position:absolute;left:0;top:0;background:linear-gradient(transparent 50px,#f9f9f9);}footer.jsx-2055216992{position:absolute;top:530px;left:0;width:100%;height:200px;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHZ0IsQUFHb0IsQUFLUyxBQW9Ca0IsQUFTeEIsQUFPRSxBQUdMLEFBSUMsQUFNSSxBQUlMLEFBT0EsQUFTSixBQVFFLEFBUUssQUFJRixBQUdDLEFBSUosQUFHRixBQU9LLEFBV04sQUFTUSxXQXhEUCxBQVFLLEFBc0JKLEFBa0JGLEdBckJYLENBekRlLEFBY0csQUFPSixDQWpCQyxBQThDZCxDQUdpQixBQWNGLENBL0dILEFBa0NHLEFBd0RDLEFBeUNOLEdBOUhILEFBaURSLENBcUVZLENBaERPLENBOEJGLEVBdEJPLEVBaURoQixDQXZGUixBQXFCaUIsRUE1RE4sQUEyQ0ksQ0FVQyxDQTFESCxBQWtDSyxBQTZFTSxDQWR4QixBQTBCa0IsQ0FqQ2xCLEFBMENZLElBNUdnQyxFQW1EcEIsQUE4Qk4sR0FuR0QsQ0EyQ0MsQUFpQkEsQ0FtRUosQ0FwSWQsQUEwRGUsQUF3QkcsR0FoREgsQUFLZixFQW9GTyxJQVpZLEdBTkYsQUFtQlgsQUFTa0IsQ0EvSEwsQ0FxRFEsQ0FPTCxDQWpCdEIsQ0FkaUIsQUF3Q0csQ0FrRGtDLENBMUMvQixTQTZCWixDQU5YLEVBbkdZLEVBaUI2QixBQVl6QyxFQWtHQSxDQW5FZSxBQVNFLEdBcUNDLENBckRsQixFQXBEYyxFQTRFSyxNQWhCYSxFQVNoQyxLQXFDbUIsRUF6R04sS0E0RWIsT0E1RHdDLEFBMEZyQixBQVduQixJQXBIYyxTQTJEZCxFQStDcUIsRUF6R0YsZUEwR25CLEdBekc0QyxFQWNSLHNDQWJVLDBDQUNlLCtCQWFnRiwwQkFackYsZ0hBQzlCLEtBYTFCLG9CQVorQiw4QkFDbkIsZUFFVCIsImZpbGUiOiJwYWdlc1xcYmxvZy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHVzZXJcXGNoYWxsYXJpcy10ZWNoLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucy8nO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3R5bGVzL2Fib3V0LnNjc3MnO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcclxuXHJcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxyXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XHJcbiAgcmV0dXJuIGJ1aWxkZXIuaW1hZ2Uoc291cmNlKVxyXG59XHJcblxyXG5jb25zdCBCbG9nID0gKHsgcG9zdHMgPSBbXSB9KSA9PiAoXHJcbiAgPExheW91dCB0aXRsZT1cIkJsb2cgfCBDaGFyaXNvbCBUZWNobm9sb2dpZXNcIj5cclxuICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX0gLz5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XHJcblxyXG4gICAgPGRpdiBpZD1cInBhbmVsXCIgZGF0YS1zbGlkZW91dC1pZ25vcmU+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByaWNpbmdcIj5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctdGV4dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZyBuby1yZXZlYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgQ2hhcmlzb2wgQmxvZ1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGV4dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi10ZXh0IG5vLXJldmVhbCBibC1zdWJoZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgV2UgcHVibGlzaCBvbiB0b3BpY3Mgc3VjaCBhcyBzb2Z0d2FyZSBkZXZlbG9wbWVudCwgZGlnaXRhbCBwdWJsaXNoaW5nIGFuZCBjb250ZW50IHN0cmF0ZWd5LlxyXG5cdFx0XHRcdCAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgoeyBfaWQsIHRpdGxlID0gJycsIG5hbWUgPSAnTm8gbmFtZScsIHB1Ymxpc2hlZEF0ID0gJycsIGNhdGVnb3JpZXMgPSBbXSwgbWFpbkltYWdlID0ge30sIGJvZHkgPSBbXSwgYXV0aG9ySW1hZ2UgPSB7fSwgc2x1ZyA9ICcnLCBfdXBkYXRlZEF0ID0gJycgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1ZyAmJiA8bGkga2V5PXtfaWR9IGNsYXNzTmFtZT1cImNhcmQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE0MCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1NldD17YFxyXG4gICAgICAgICAgICAke3VybEZvcihtYWluSW1hZ2UpLndpZHRoKDMyMCl9IDMyMHcsXHJcbiAgICAgICAgICAgICR7dXJsRm9yKG1haW5JbWFnZSkud2lkdGgoNDgwKX0gNDgwdyxcclxuICAgICAgICAgICAgJHt1cmxGb3IobWFpbkltYWdlKS53aWR0aCg4MDApfSA4MDB3XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplcz17YFxyXG4gICAgICAgICAgICAobWF4LXdpZHRoOiAzMjBweCkgMjgwcHgsXHJcbiAgICAgICAgICAgIChtYXgtd2lkdGg6IDQ4MHB4KSA0NDBweCxcclxuICAgICAgICAgICAgODAwcHhcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKG1haW5JbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgL3Bvc3QvJHtzbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT4ge2NhdGVnb3JpZXN9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdChwdWJsaXNoZWRBdCwgJ01NTU0gREQsIFlZWVknKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzPXtib2R5WzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogOTAwLCBoOiA2MDAsIGZpdDogJ21pbicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkPXtjbGllbnQuY2xpZW50Q29uZmlnLnByb2plY3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldD17Y2xpZW50LmNsaWVudENvbmZpZy5kYXRhc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoNDApLnVybCgpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5XHJcblx0XHRcdFx0XHQ8ZW0+IHtuYW1lfTwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuYmwtc3ViaGVhZCB7IFxyXG5cdFx0Zm9udC13ZWlnaHQ6MzAwcHg7XHJcblx0XHRmb250LXNpemU6MjJweDtcclxuXHRcdGNvbG9yOiAjNmI2YzdhO1xyXG5cdCAgfVxyXG5cdCAgLmNhcmQtbGlzdCB7IFxyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG5cdFx0d2lkdGg6MzclO1xyXG5cdFx0aGVpZ2h0OjU1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi1sZWZ0OjIwcHg7XHJcblx0bWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDEwLCAxNiwgMzQsIDAuMSk7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC4wMiwgMC4wMSwgMC40NywgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuMDIsIDAuMDEsIDAuNDcsIDEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMjBweDtcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcclxuICAgICAgfVx0ICBcclxuXHQgIC5jYXJkLWxpc3Q6aG92ZXJ7XHJcblx0XHQgIGJveC1zaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcHJpc21pYy1pby5zMy5hbWF6b25hd3MuY29tL2d1aWRsaW5lLXByaXNtaWMlMkY3ZDVmMjIyYy0yNDJiLTQwZTAtYmMyZS1iMTljODlmMThiNDJfYmctaGVhZC1ibG9ncG9zdC13cml0aW5nLnN2Zyk7XHJcbiAgICBcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgaDF7XHJcblx0XHQgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgY29sb3I6ICM0MzQ0NTY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cdCAgfVxyXG5cdCAgLmNhcmQtbGlzdCBhe1xyXG5cdFx0ICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgcCB7XHJcblx0XHQgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNmI2YzdhO1xyXG5cdCAgfVxyXG5cdCAgLmNhcmQtbGlzdCBwIGVte1xyXG5cdFx0ICBmb250LXdlaWdodDogNjAwO1xyXG5cdFx0ICBmb250LXNpemU6MTJweDtcclxuXHRcdCAgY29sb3I6ICM0MzQ0NTY7XHJcblx0XHQgIGZvbnQtc3R5bGU6bm9ybWFsO1xyXG5cdCAgfVxyXG5cdCAgLmNhcmQtbGlzdCB1bHtcclxuXHRcdCAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5jYXJkLWxpc3QgLmRhdGV7XHJcblx0XHQgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luOiA1cHggMCAwO1xyXG4gICAgY29sb3I6ICM2YjZjN2E7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgLnRleHR7XHJcblx0XHQgIGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdCAgZGlzcGxheTpibG9jaztcclxuXHRcdCAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTIuOHB4O1xyXG4gICAgY29sb3I6ICM0MzQ0NTY7XHJcblx0dGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgLmF1dGhvcntcclxuXHRcdCAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IGl7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojQjcyMUZGO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAuNmVtO1xyXG5cdCAgfVxyXG5cdCAgLmNhcmQtbGlzdCAuY2F0e1xyXG5cdFx0ICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcblx0XHQgIHBhZGRpbmctdG9wOjIwcHg7XHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IC5jYXQgZW17XHJcblx0XHQgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICB9XHJcblx0ICAuY2FyZC1saXN0IC5uYW1le1xyXG5cdFx0ICBwYWRkaW5nLXRvcDogMTBweDtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IGgxOmhvdmVye1xyXG5cdFx0ICBjb2xvcjojQjcyMUZGO1xyXG5cdCAgfVxyXG5cdCAgLmltYWdlIGltZ3tcclxuXHRcdCAgd2lkdGg6IDEwcHg7XHJcblx0XHQgIGhlaWdodDoyMDBweDtcclxuXHRcdCAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuXHRcdCAgbWFyZ2luLWxlZnQ6LTQwcHg7XHJcblx0XHQgIG1hcmdpbi10b3A6LTQwcHg7XHJcblx0ICB9XHJcblx0ICAub3ZlcmZ7XHJcblx0XHQgIG1heC1oZWlnaHQ6MTIwcHg7XHJcblx0XHQgIG92ZXJmbG93OmhpZGRlbjtcclxuXHRcdCAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHQgIHRleHQtYWxpZ246anVzdGlmeTtcclxuXHRcdCAgY29udGVudDpcIlwiO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgY29sb3I6ICM0MzQ0NTY7XHJcbiAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6MjdweDtcclxuXHQgIH1cclxuXHQgIC5vdmVyZjphZnRlcntcclxuXHRcdCAgY29udGVudDonJztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTsgICAgXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRvcDowO1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNTBweCwgI2Y5ZjlmOSk7XHJcblx0ICB9XHJcblx0ICBmb290ZXJ7XHQgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUzMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdCAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG4pXHJcblxyXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChgKltfdHlwZSA9PSBcInBvc3RcIl1bMC4uMTAwMF0gfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKXtcclxuICAgICAgX2lkLFxyXG4gICAgICB0aXRsZSxcclxuXHQgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcblx0ICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuXHQgIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcclxuXHQgIG1haW5JbWFnZSxcclxuXHQgIHB1Ymxpc2hlZEF0LFxyXG5cdCAgYm9keSxcclxuICAgICAgXCJzbHVnXCI6IHNsdWcuY3VycmVudCxcclxuICAgICAgX3VwZGF0ZWRBdFxyXG4gICAgfWApXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdfQ== */\n/*@ sourceURL=pages\\blog.js */"
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
//# sourceMappingURL=5.7e2baf5b0366c1e7893d.hot-update.js.map