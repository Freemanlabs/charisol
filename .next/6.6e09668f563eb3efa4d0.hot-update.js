webpackHotUpdate(6,{

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

var _jsxFileName = "C:\\Users\\user\\nextjs\\pages\\blog.js";


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
    className: "jsx-1939132530"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-1939132530"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-1939132530" + " " + "pricing"
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
    className: "jsx-1939132530" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-1939132530" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-1939132530" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-1939132530" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-1939132530" + " " + "heading-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-1939132530" + " " + "heading no-reveal"
  }, "The Charisol Blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-1939132530" + " " + "sub-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-1939132530" + " " + "sub-text no-reveal bl-subhead"
  }, "We publish on topics such as software development, digital publishing and content strategy.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-1939132530"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-1939132530"
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
      className: "jsx-1939132530" + " " + "card-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-1939132530" + " " + "image"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(mainImage).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      className: "jsx-1939132530"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      className: "jsx-1939132530" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      className: "jsx-1939132530" + " " + "fa fa-tag"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      className: "jsx-1939132530"
    }, " ", categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      className: "jsx-1939132530" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_4_date_fns___["format"])(publishedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      className: "jsx-1939132530" + " " + "overf"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
      prefetch: true,
      href: "/post/".concat(slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      className: "jsx-1939132530"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      className: "jsx-1939132530"
    }, title))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__sanity_block_content_to_react___default.a, {
      blocks: body[1],
      imageOptions: {
        w: 900,
        h: 600,
        fit: 'max'
      },
      projectId: __WEBPACK_IMPORTED_MODULE_5__client___default.a.clientConfig.projectId,
      dataset: __WEBPACK_IMPORTED_MODULE_5__client___default.a.clientConfig.dataset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      }
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      className: "jsx-1939132530"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      className: "jsx-1939132530" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      className: "jsx-1939132530"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      className: "jsx-1939132530" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      className: "jsx-1939132530"
    }, " ", name))));
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "1939132530",
    css: ".bl-subhead.jsx-1939132530{font-weight:300px;font-size:22px;color:#6b6c7a;}.card-list.jsx-1939132530{list-style-type:none;width:35%;height:550px;overflow:hidden;position:relative;float:left;margin-left:5px;margin-top:20px;padding:40px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.card-list.jsx-1939132530:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.card-list.jsx-1939132530 h1.jsx-1939132530{margin-top:1.5rem;font-size:22px;line-height:33px;color:#434456;font-weight:500;}.card-list.jsx-1939132530 a.jsx-1939132530{-webkit-text-decoration:none;text-decoration:none;}.card-list.jsx-1939132530 p.jsx-1939132530{font-size:12px;color:#6b6c7a;}.card-list.jsx-1939132530 p.jsx-1939132530 em.jsx-1939132530{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.card-list.jsx-1939132530 ul.jsx-1939132530{list-style-type:none;}.card-list.jsx-1939132530 .date.jsx-1939132530{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.card-list.jsx-1939132530 .text.jsx-1939132530{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.card-list.jsx-1939132530 .author.jsx-1939132530{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.card-list.jsx-1939132530 i.jsx-1939132530{color:#B721FF;}.card-list.jsx-1939132530 .cat.jsx-1939132530{margin-bottom:1px;padding-top:20px;}.card-list.jsx-1939132530 .cat.jsx-1939132530 em.jsx-1939132530{margin-left:3px;}.card-list.jsx-1939132530 .name.jsx-1939132530{padding-top:10px;margin-left:50px;}.card-list.jsx-1939132530 h1.jsx-1939132530:hover{color:#B721FF;}.image.jsx-1939132530 img.jsx-1939132530{width:435px;height:200px;object-fit:cover;margin-left:-40px;margin-top:-40px;}.overf.jsx-1939132530{max-height:250px;overflow:hidden;text-overflow:ellipsis;content:\"\";position:relative;}.overf.jsx-1939132530:before{content:'';width:100%;height:100%;position:absolute;left:0;top:0;background:linear-gradient(transparent 150px,#f9f9f9);}footer.jsx-1939132530{position:absolute;top:530px;left:0;width:100%;height:200px;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGYSxBQUdvQixBQUtTLEFBb0JrQixBQVN4QixBQU9FLEFBR0wsQUFJQyxBQU1JLEFBSUwsQUFPQSxBQVNKLEFBUUcsQUFHSSxBQUlGLEFBR0MsQUFJSixBQUdELEFBT0ksQUFPTixBQVVRLFdBaERQLEFBdUNELENBZEUsRUFqQmIsQUFjQSxDQXBEZSxBQWNHLEFBT0osQ0FqQkMsQUF5Q2YsQ0FHa0IsQUFjRixDQTFHSCxBQWtDRyxBQW1EQyxBQXNDTixHQXRISCxBQWlEUixDQTREWSxDQXZDTyxFQXlCRixHQXdCVCxDQS9FUixBQXFCaUIsRUE1RE4sQUEyQ0ksQ0FVQyxDQTFESCxBQWtDSyxBQXdFTSxDQWR4QixBQXNCa0IsQ0E3QmxCLEFBdUNZLElBcEdnQyxFQW1EcEIsQ0F5Qk4sRUE5RkQsQ0EyQ0MsQUFpQkEsQ0EyREosQ0E1SGQsQUEwRGUsR0F4QkEsQUFLZixFQTJFTyxJQVJLLEdBU04sQUFVa0IsQ0F2SEwsQUE4RkYsQ0F6Q1UsQ0FPTCxDQWpCdEIsQ0FkaUIsQUF3Q0csQ0F5Q21DLEVBVHJDLFVBTmxCLENBOUZZLEVBaUI2QixBQVl6QyxFQTBGQSxDQTNEZSxBQVNFLEVBZ0NqQixFQWhEQSxFQXBEYSxRQTREbUIsRUFTaEMsTUFwRWEsYUFnQjJCLENBNEZ4QyxFQTNHYyxVQTJEZCxHQTFEbUIsa0JBQ3lCLEdBY1IscUNBYlUsMENBQ2UsZ0NBYWdGLHlCQVpyRixnSEFDOUIsTUFhMUIsbUJBWitCLDhCQUNuQixlQUVUIiwiZmlsZSI6InBhZ2VzXFxibG9nLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcdXNlclxcbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge2Zvcm1hdH0gZnJvbSAnZGF0ZS1mbnMvJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvYWJvdXQuc2Nzcyc7XG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5cbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IEJsb2cgPSAoeyBwb3N0cyA9IFtdIH0pID0+IChcbjxMYXlvdXQgIHRpdGxlPVwiQmxvZyB8IENoYXJpc29sIFRlY2hub2xvZ2llc1wiPiBcbiAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX0gLz5cbiAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XG5cbiAgIDxkaXYgaWQ9XCJwYW5lbFwiICBkYXRhLXNsaWRlb3V0LWlnbm9yZT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByaWNpbmdcIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmcgbm8tcmV2ZWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVGhlIENoYXJpc29sIEJsb2dcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzdWItdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItdGV4dCBuby1yZXZlYWwgYmwtc3ViaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFdlIHB1Ymxpc2ggb24gdG9waWNzIHN1Y2ggYXMgc29mdHdhcmUgZGV2ZWxvcG1lbnQsIGRpZ2l0YWwgcHVibGlzaGluZyBhbmQgY29udGVudCBzdHJhdGVneS5cblx0XHRcdFx0ICA8L3A+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiA+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XG5cdFx0XHRcdHtcbiAgICAgICAgICBwb3N0cy5tYXAoKHtfaWQsIHRpdGxlID0gJycsIG5hbWUgPSAnTm8gbmFtZScsIHB1Ymxpc2hlZEF0PScnLCBjYXRlZ29yaWVzID0gW10sIG1haW5JbWFnZT17fSwgYm9keT1bXSwgYXV0aG9ySW1hZ2UgPSB7fSwgc2x1ZyA9ICcnLCBfdXBkYXRlZEF0ID0gJyd9KSA9PlxuICAgICAgICAgICAgICBzbHVnICYmIDxsaSBrZXk9e19pZH0gY2xhc3NOYW1lPVwiY2FyZC1saXN0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17dXJsRm9yKG1haW5JbWFnZSkudXJsKCl9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXRcIj5cblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS10YWdcIj48L2k+XG5cdFx0XHRcdFx0PGVtPiB7Y2F0ZWdvcmllc308L2VtPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImRhdGVcIj5cblx0XHRcdFx0XHR7Zm9ybWF0KHB1Ymxpc2hlZEF0LCAnTU1NTSBERCwgWVlZWScpfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZcIj5cbiAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgL3Bvc3QvJHtzbHVnfWB9PlxuXHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0PGgxPnt0aXRsZX08L2gxPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8QmxvY2tDb250ZW50XG5cdFx0XHRcdFx0YmxvY2tzPXtib2R5WzFdfVxuXHRcdFx0XHRcdGltYWdlT3B0aW9ucz17e3c6IDkwMCwgaDogNjAwLCBmaXQ6ICdtYXgnfX1cblx0XHRcdFx0XHRwcm9qZWN0SWQ9e2NsaWVudC5jbGllbnRDb25maWcucHJvamVjdElkfVxuXHRcdFx0XHRcdGRhdGFzZXQ9e2NsaWVudC5jbGllbnRDb25maWcuZGF0YXNldH1cblx0XHRcdFx0ICAvPjwvZGl2PlxuXHRcdFx0XHQ8Zm9vdGVyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDQwKS51cmwoKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cblx0XHRcdFx0XHRCeVxuXHRcdFx0XHRcdDxlbT4ge25hbWV9PC9lbT5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApXG5cdFx0XHRcdH1cbiAgPC91bD4gIFxuICA8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cblx0XG5cdFxuXHQ8c3R5bGUganN4PntgXG4gICAgICAuYmwtc3ViaGVhZCB7IFxuXHRcdGZvbnQtd2VpZ2h0OjMwMHB4O1xuXHRcdGZvbnQtc2l6ZToyMnB4O1xuXHRcdGNvbG9yOiAjNmI2YzdhO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IHsgXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuXHRcdHdpZHRoOjM1JTtcblx0XHRoZWlnaHQ6NTUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG5cdG1hcmdpbi1sZWZ0OjVweDtcblx0bWFyZ2luLXRvcDoyMHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgxMCwgMTYsIDM0LCAwLjEpO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjAyLCAwLjAxLCAwLjQ3LCAxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuMDIsIDAuMDEsIDAuNDcsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0yMHB4O1xuXHRjdXJzb3I6cG9pbnRlcjtcblx0XG4gICAgICB9XG5cdCAgLmNhcmQtbGlzdDpob3Zlcntcblx0XHQgIGJveC1zaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vZ3VpZGxpbmUtcHJpc21pYyUyRjdkNWYyMjJjLTI0MmItNDBlMC1iYzJlLWIxOWM4OWYxOGI0Ml9iZy1oZWFkLWJsb2dwb3N0LXdyaXRpbmcuc3ZnKTtcbiAgICBcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBoMXtcblx0XHQgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgY29sb3I6ICM0MzQ0NTY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBhe1xuXHRcdCAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgcCB7XG5cdFx0ICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2YjZjN2E7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgcCBlbXtcblx0XHQgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0ICBmb250LXNpemU6MTJweDtcblx0XHQgIGNvbG9yOiAjNDM0NDU2O1xuXHRcdCAgZm9udC1zdHlsZTpub3JtYWw7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgdWx7XG5cdFx0ICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcblx0ICB9XG5cdCAgXG5cdCAgLmNhcmQtbGlzdCAuZGF0ZXtcblx0XHQgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBtYXJnaW46IDVweCAwIDA7XG4gICAgY29sb3I6ICM2YjZjN2E7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLnRleHR7XG5cdFx0ICBmb250LXNpemU6IDE1cHg7XG5cdFx0ICBkaXNwbGF5OmJsb2NrO1xuXHRcdCAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMi44cHg7XG4gICAgY29sb3I6ICM0MzQ0NTY7XG5cdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLmF1dGhvcntcblx0XHQgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDo0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgaXtcblx0XHQgIGNvbG9yOiAjQjcyMUZGO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC5jYXR7XG5cdFx0ICBtYXJnaW4tYm90dG9tOiAxcHg7XG5cdFx0ICBwYWRkaW5nLXRvcDoyMHB4O1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC5jYXQgZW17XG5cdFx0ICBtYXJnaW4tbGVmdDogM3B4O1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC5uYW1le1xuXHRcdCAgcGFkZGluZy10b3A6IDEwcHg7XG5cdFx0ICBtYXJnaW4tbGVmdDogNTBweDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBoMTpob3Zlcntcblx0XHQgIGNvbG9yOiNCNzIxRkY7XG5cdCAgfVxuXHQgIC5pbWFnZSBpbWd7XG5cdFx0ICB3aWR0aDogNDM1cHg7XG5cdFx0ICBoZWlnaHQ6MjAwcHg7XG5cdFx0ICBvYmplY3QtZml0OmNvdmVyO1xuXHRcdCAgbWFyZ2luLWxlZnQ6LTQwcHg7XG5cdFx0ICBtYXJnaW4tdG9wOi00MHB4O1xuXHQgIH1cblx0ICAub3ZlcmZ7XG5cdFx0ICBtYXgtaGVpZ2h0OjI1MHB4O1xuXHRcdCAgb3ZlcmZsb3c6aGlkZGVuO1xuXHRcdCAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0ICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuXHQgIH1cblx0ICAub3ZlcmY6YmVmb3Jle1xuXHRcdCAgY29udGVudDonJztcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlOyAgICBcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBsZWZ0OjA7XG4gICAgdG9wOjA7XG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMTUwcHgsICNmOWY5ZjkpO1xuXHQgIH1cblx0ICBmb290ZXJ7XG5cdFx0ICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdCAgfVxuXHQgIFxuICAgIGB9PC9zdHlsZT5cbjwvTGF5b3V0PlxuKVxuXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4geyBwb3N0czogYXdhaXQgY2xpZW50LmZldGNoKGAqW190eXBlID09IFwicG9zdFwiXVswLi4xMDAwXSB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2Mpe1xuICAgICAgX2lkLFxuICAgICAgdGl0bGUsXG5cdCAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcblx0ICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcblx0ICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG5cdCAgbWFpbkltYWdlLFxuXHQgIHB1Ymxpc2hlZEF0LFxuXHQgIGJvZHksXG4gICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxuICAgICAgX3VwZGF0ZWRBdFxuICAgIH1gKSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2ciXX0= */\n/*@ sourceURL=pages\\blog.js */"
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

  reactHotLoader.register(builder, "builder", "C:\\Users\\user\\nextjs\\pages\\blog.js");
  reactHotLoader.register(urlFor, "urlFor", "C:\\Users\\user\\nextjs\\pages\\blog.js");
  reactHotLoader.register(Blog, "Blog", "C:\\Users\\user\\nextjs\\pages\\blog.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\user\\nextjs\\pages\\blog.js");
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
//# sourceMappingURL=6.6e09668f563eb3efa4d0.hot-update.js.map