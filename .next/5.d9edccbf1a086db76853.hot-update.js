webpackHotUpdate(5,{

/***/ "./pages/blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
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

var _jsxFileName = "/Users/macbook/workspace/charisol/challaris-tech-website/pages/blog.js";


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
    className: "jsx-1067185604"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-1067185604"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-1067185604" + " " + "pricing"
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
    className: "jsx-1067185604" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-1067185604" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-1067185604" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-1067185604" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-1067185604" + " " + "heading-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-1067185604" + " " + "heading no-reveal"
  }, "The Charisol Blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-1067185604" + " " + "sub-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-1067185604" + " " + "sub-text no-reveal bl-subhead"
  }, "We publish on topics such as software development, digital publishing and content strategy.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-1067185604"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-1067185604"
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
      className: "jsx-1067185604" + " " + "card-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-1067185604" + " " + "image"
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
      className: "jsx-1067185604"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      className: "jsx-1067185604" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      className: "jsx-1067185604" + " " + "fa fa-tag"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      className: "jsx-1067185604"
    }, " ", categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      className: "jsx-1067185604" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_4_date_fns___["format"])(publishedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
      prefetch: true,
      href: {
        pathname: '/post',
        query: {
          slug: slug
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      className: "jsx-1067185604"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      className: "jsx-1067185604"
    }, title))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      className: "jsx-1067185604" + " " + "overf"
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
      className: "jsx-1067185604"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      className: "jsx-1067185604" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      className: "jsx-1067185604"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      className: "jsx-1067185604" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      className: "jsx-1067185604"
    }, " ", name))));
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "1067185604",
    css: ".bl-subhead.jsx-1067185604{font-weight:300px;font-size:22px;color:#6b6c7a;}.card-list.jsx-1067185604{list-style-type:none;width:37%;height:550px;overflow:hidden;position:relative;float:left;margin-left:20px;margin-top:20px;padding:40px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.card-list.jsx-1067185604:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.card-list.jsx-1067185604 h1.jsx-1067185604{margin-top:1.5rem;font-size:22px;line-height:33px;color:#434456;font-weight:500;}.card-list.jsx-1067185604 a.jsx-1067185604{-webkit-text-decoration:none;text-decoration:none;}.card-list.jsx-1067185604 p.jsx-1067185604{font-size:12px;color:#6b6c7a;}.card-list.jsx-1067185604 p.jsx-1067185604 em.jsx-1067185604{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.card-list.jsx-1067185604 ul.jsx-1067185604{list-style-type:none;}.card-list.jsx-1067185604 .date.jsx-1067185604{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.card-list.jsx-1067185604 .text.jsx-1067185604{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.card-list.jsx-1067185604 .author.jsx-1067185604{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.card-list.jsx-1067185604 i.jsx-1067185604{color:#B721FF;}.card-list.jsx-1067185604 .cat.jsx-1067185604{margin-bottom:1px;padding-top:20px;}.card-list.jsx-1067185604 .cat.jsx-1067185604 em.jsx-1067185604{margin-left:3px;}.card-list.jsx-1067185604 .name.jsx-1067185604{padding-top:10px;margin-left:50px;}.card-list.jsx-1067185604 h1.jsx-1067185604:hover{color:#B721FF;}.image.jsx-1067185604 img.jsx-1067185604{width:10px;height:200px;object-fit:cover;margin-left:-40px;margin-top:-40px;}.overf.jsx-1067185604{max-height:120px;overflow:hidden;text-overflow:ellipsis;text-align:justify;content:\"\";position:relative;}.overf.jsx-1067185604:after{content:'';width:100%;height:100%;position:absolute;left:0;top:0;background:linear-gradient(transparent 50px,#f9f9f9);}footer.jsx-1067185604{position:absolute;top:530px;left:0;width:100%;height:200px;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdnQixBQUdvQixBQUtTLEFBb0JrQixBQVN4QixBQU9FLEFBR0wsQUFJQyxBQU1JLEFBSUwsQUFPQSxBQVNKLEFBUUcsQUFHSSxBQUlGLEFBR0MsQUFJSixBQUdGLEFBT0ssQUFRTixBQVNRLFdBaERQLEFBeUJDLEFBZUYsR0FoQ1gsQUFjQSxDQXBEZSxBQWNHLEFBT0osQ0FqQkMsQUF5Q2YsQ0FHa0IsQUFjRixDQTFHSCxBQWtDRyxBQW1EQyxBQXNDTixHQXRISCxBQWlEUixDQTZEWSxDQXhDTyxDQXlCRixJQXdCVCxDQS9FUixBQXFCaUIsRUE1RE4sQUEyQ0ksQ0FVQyxDQTFESCxBQWtDSyxBQXdFTSxDQWR4QixBQXVCa0IsQ0E5QmxCLEFBdUNZLElBcEdnQyxFQW1EcEIsQUF5Qk4sR0E5RkQsQ0EyQ0MsQUFpQkEsQ0EyREosQ0E1SGQsQUEwRGUsR0F4QkEsQUFLZixFQTRFTyxJQVRZLEdBTkYsQUFnQlgsQUFTa0IsQ0F2SEwsQ0FxRFEsQ0FPTCxDQWpCdEIsQ0FkaUIsQUF3Q0csQ0EwQ2tDLFVBVjNDLENBTlgsRUE5RlksRUFpQjZCLEFBWXpDLEVBMEZBLENBM0RlLEFBU0UsR0FnQ0MsQ0FoRGxCLEVBcERjLFFBNERrQixFQVNoQyxLQWdDQSxFQXBHYSxZQWdCMkIsQUE2RnhDLElBNUdjLFNBMkRkLElBMURtQixrQkFDeUIsRUFjUixzQ0FiVSwwQ0FDZSwrQkFhZ0YsMEJBWnJGLGdIQUM5QixLQWExQixvQkFaK0IsOEJBQ25CLGVBRVQiLCJmaWxlIjoicGFnZXMvYmxvZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjYm9vay93b3Jrc3BhY2UvY2hhcmlzb2wvY2hhbGxhcmlzLXRlY2gtd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMvJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvYWJvdXQuc2Nzcyc7XG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5cbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IEJsb2cgPSAoeyBwb3N0cyA9IFtdIH0pID0+IChcbiAgPExheW91dCB0aXRsZT1cIkJsb2cgfCBDaGFyaXNvbCBUZWNobm9sb2dpZXNcIj5cbiAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cblxuICAgIDxkaXYgaWQ9XCJwYW5lbFwiIGRhdGEtc2xpZGVvdXQtaWdub3JlPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJpY2luZ1wiPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZyBuby1yZXZlYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIENoYXJpc29sIEJsb2dcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXRleHQgbm8tcmV2ZWFsIGJsLXN1YmhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgV2UgcHVibGlzaCBvbiB0b3BpY3Mgc3VjaCBhcyBzb2Z0d2FyZSBkZXZlbG9wbWVudCwgZGlnaXRhbCBwdWJsaXNoaW5nIGFuZCBjb250ZW50IHN0cmF0ZWd5LlxuXHRcdFx0XHQgIDwvcD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgIDx1bD5cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKCh7IF9pZCwgdGl0bGUgPSAnJywgbmFtZSA9ICdObyBuYW1lJywgcHVibGlzaGVkQXQgPSAnJywgY2F0ZWdvcmllcyA9IFtdLCBtYWluSW1hZ2UgPSB7fSwgYm9keSA9IFtdLCBhdXRob3JJbWFnZSA9IHt9LCBzbHVnID0gJycsIF91cGRhdGVkQXQgPSAnJyB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1ZyAmJiA8bGkga2V5PXtfaWR9IGNsYXNzTmFtZT1cImNhcmQtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1NldD17YFxuICAgICAgICAgICAgJHt1cmxGb3IobWFpbkltYWdlKS53aWR0aCgzMjApfSAzMjB3LFxuICAgICAgICAgICAgJHt1cmxGb3IobWFpbkltYWdlKS53aWR0aCg0ODApfSA0ODB3LFxuICAgICAgICAgICAgJHt1cmxGb3IobWFpbkltYWdlKS53aWR0aCg4MDApfSA4MDB3XG4gICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzPXtgXG4gICAgICAgICAgICAobWF4LXdpZHRoOiAzMjBweCkgMjgwcHgsXG4gICAgICAgICAgICAobWF4LXdpZHRoOiA0ODBweCkgNDQwcHgsXG4gICAgICAgICAgICA4MDBweFxuICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihtYWluSW1hZ2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10YWdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVtPiB7Y2F0ZWdvcmllc308L2VtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0KHB1Ymxpc2hlZEF0LCAnTU1NTSBERCwgWVlZWScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17e3BhdGhuYW1lOiAnL3Bvc3QnLCBxdWVyeToge3NsdWc6IHNsdWd9fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja3M9e2JvZHlbMV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogOTAwLCBoOiA2MDAsIGZpdDogJ21pbicgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJZD17Y2xpZW50LmNsaWVudENvbmZpZy5wcm9qZWN0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0PXtjbGllbnQuY2xpZW50Q29uZmlnLmRhdGFzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoNDApLnVybCgpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5XG5cdFx0XHRcdFx0PGVtPiB7bmFtZX08L2VtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ibC1zdWJoZWFkIHsgXG5cdFx0Zm9udC13ZWlnaHQ6MzAwcHg7XG5cdFx0Zm9udC1zaXplOjIycHg7XG5cdFx0Y29sb3I6ICM2YjZjN2E7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgeyBcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG5cdFx0d2lkdGg6MzclO1xuXHRcdGhlaWdodDo1NTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcblx0bWFyZ2luLWxlZnQ6MjBweDtcblx0bWFyZ2luLXRvcDoyMHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgxMCwgMTYsIDM0LCAwLjEpO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjAyLCAwLjAxLCAwLjQ3LCAxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuMDIsIDAuMDEsIDAuNDcsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0yMHB4O1xuXHRjdXJzb3I6cG9pbnRlcjtcblx0XG4gICAgICB9XHQgIFxuXHQgIC5jYXJkLWxpc3Q6aG92ZXJ7XG5cdFx0ICBib3gtc2hhZG93OiAwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcHJpc21pYy1pby5zMy5hbWF6b25hd3MuY29tL2d1aWRsaW5lLXByaXNtaWMlMkY3ZDVmMjIyYy0yNDJiLTQwZTAtYmMyZS1iMTljODlmMThiNDJfYmctaGVhZC1ibG9ncG9zdC13cml0aW5nLnN2Zyk7XG4gICAgXG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgaDF7XG5cdFx0ICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGNvbG9yOiAjNDM0NDU2O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgYXtcblx0XHQgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IHAge1xuXHRcdCAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNmI2YzdhO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IHAgZW17XG5cdFx0ICBmb250LXdlaWdodDogNjAwO1xuXHRcdCAgZm9udC1zaXplOjEycHg7XG5cdFx0ICBjb2xvcjogIzQzNDQ1Njtcblx0XHQgIGZvbnQtc3R5bGU6bm9ybWFsO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IHVse1xuXHRcdCAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG5cdCAgfVxuXHQgIFxuXHQgIC5jYXJkLWxpc3QgLmRhdGV7XG5cdFx0ICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgbWFyZ2luOiA1cHggMCAwO1xuICAgIGNvbG9yOiAjNmI2YzdhO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC50ZXh0e1xuXHRcdCAgZm9udC1zaXplOiAxNXB4O1xuXHRcdCAgZGlzcGxheTpibG9jaztcblx0XHQgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTIuOHB4O1xuICAgIGNvbG9yOiAjNDM0NDU2O1xuXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC5hdXRob3J7XG5cdFx0ICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6NDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IGl7XG5cdFx0ICBjb2xvcjogI0I3MjFGRjtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAuY2F0e1xuXHRcdCAgbWFyZ2luLWJvdHRvbTogMXB4O1xuXHRcdCAgcGFkZGluZy10b3A6MjBweDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAuY2F0IGVte1xuXHRcdCAgbWFyZ2luLWxlZnQ6IDNweDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAubmFtZXtcblx0XHQgIHBhZGRpbmctdG9wOiAxMHB4O1xuXHRcdCAgbWFyZ2luLWxlZnQ6IDUwcHg7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgaDE6aG92ZXJ7XG5cdFx0ICBjb2xvcjojQjcyMUZGO1xuXHQgIH1cblx0ICAuaW1hZ2UgaW1ne1xuXHRcdCAgd2lkdGg6IDEwcHg7XG5cdFx0ICBoZWlnaHQ6MjAwcHg7XG5cdFx0ICBvYmplY3QtZml0OmNvdmVyO1xuXHRcdCAgbWFyZ2luLWxlZnQ6LTQwcHg7XG5cdFx0ICBtYXJnaW4tdG9wOi00MHB4O1xuXHQgIH1cblx0ICAub3ZlcmZ7XG5cdFx0ICBtYXgtaGVpZ2h0OjEyMHB4O1xuXHRcdCAgb3ZlcmZsb3c6aGlkZGVuO1xuXHRcdCAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0ICB0ZXh0LWFsaWduOmp1c3RpZnk7XG5cdFx0ICBjb250ZW50OlwiXCI7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG5cdCAgfVxuXHQgIC5vdmVyZjphZnRlcntcblx0XHQgIGNvbnRlbnQ6Jyc7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTsgICAgXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbGVmdDowO1xuICAgIHRvcDowO1xuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDUwcHgsICNmOWY5ZjkpO1xuXHQgIH1cblx0ICBmb290ZXJ7XHQgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTMwcHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHQgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKVxuXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwb3N0czogYXdhaXQgY2xpZW50LmZldGNoKGAqW190eXBlID09IFwicG9zdFwiXVswLi4xMDAwXSB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2Mpe1xuICAgICAgX2lkLFxuICAgICAgdGl0bGUsXG5cdCAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcblx0ICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcblx0ICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG5cdCAgbWFpbkltYWdlLFxuXHQgIHB1Ymxpc2hlZEF0LFxuXHQgIGJvZHksXG4gICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxuICAgICAgX3VwZGF0ZWRBdFxuICAgIH1gKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdfQ== */\n/*@ sourceURL=pages/blog.js */"
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

  reactHotLoader.register(builder, "builder", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/blog.js");
  reactHotLoader.register(urlFor, "urlFor", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/blog.js");
  reactHotLoader.register(Blog, "Blog", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/blog.js");
  reactHotLoader.register(_default, "default", "/Users/macbook/workspace/charisol/challaris-tech-website/pages/blog.js");
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
//# sourceMappingURL=5.d9edccbf1a086db76853.hot-update.js.map