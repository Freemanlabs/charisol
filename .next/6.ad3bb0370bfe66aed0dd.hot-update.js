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
    className: "jsx-2935619315"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-2935619315"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-2935619315" + " " + "pricing"
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
    className: "jsx-2935619315" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-2935619315" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-2935619315" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-2935619315" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-2935619315" + " " + "heading-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-2935619315" + " " + "heading no-reveal"
  }, "The Charisol Blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-2935619315" + " " + "sub-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-2935619315" + " " + "sub-text no-reveal bl-subhead"
  }, "We publish on topics such as software development, digital publishing and content strategy.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-2935619315"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-2935619315"
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
      className: "jsx-2935619315" + " " + "card-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-2935619315" + " " + "image"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(mainImage).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      className: "jsx-2935619315"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      className: "jsx-2935619315" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      className: "jsx-2935619315" + " " + "fa fa-tag"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      className: "jsx-2935619315"
    }, " ", categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      className: "jsx-2935619315" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_4_date_fns___["format"])(publishedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      className: "jsx-2935619315" + " " + "overf"
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
      className: "jsx-2935619315"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      className: "jsx-2935619315"
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
      className: "jsx-2935619315"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      className: "jsx-2935619315" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      className: "jsx-2935619315"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      className: "jsx-2935619315" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      className: "jsx-2935619315"
    }, " ", name))));
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "2935619315",
    css: ".bl-subhead.jsx-2935619315{font-weight:300px;font-size:22px;color:#6b6c7a;}.card-list.jsx-2935619315{list-style-type:none;width:35%;height:500px;overflow:hidden;position:relative;float:left;margin-left:5px;margin-top:20px;padding:40px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.card-list.jsx-2935619315:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.card-list.jsx-2935619315 h1.jsx-2935619315{margin-top:1.5rem;font-size:22px;line-height:33px;color:#434456;font-weight:500;}.card-list.jsx-2935619315 a.jsx-2935619315{-webkit-text-decoration:none;text-decoration:none;}.card-list.jsx-2935619315 p.jsx-2935619315{font-size:12px;color:#6b6c7a;}.card-list.jsx-2935619315 p.jsx-2935619315 em.jsx-2935619315{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.card-list.jsx-2935619315 ul.jsx-2935619315{list-style-type:none;}.card-list.jsx-2935619315 .date.jsx-2935619315{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.card-list.jsx-2935619315 .text.jsx-2935619315{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.card-list.jsx-2935619315 .author.jsx-2935619315{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.card-list.jsx-2935619315 i.jsx-2935619315{color:#B721FF;}.card-list.jsx-2935619315 .cat.jsx-2935619315{margin-bottom:1px;padding-top:20px;}.card-list.jsx-2935619315 .cat.jsx-2935619315 em.jsx-2935619315{margin-left:3px;}.card-list.jsx-2935619315 .name.jsx-2935619315{padding-top:10px;margin-left:50px;}.card-list.jsx-2935619315 h1.jsx-2935619315:hover{color:#B721FF;}.image.jsx-2935619315 img.jsx-2935619315{width:435px;height:200px;object-fit:cover;margin-left:-40px;margin-top:-40px;}.overf.jsx-2935619315{height:200px;overflow:hidden;text-overflow:ellipsis;}footer.jsx-2935619315{padding:130px 40px 40px;position:absolute;top:500px;left:0;width:100%;height:200px;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGYSxBQUdvQixBQUtTLEFBb0JrQixBQVN4QixBQU9FLEFBR0wsQUFJQyxBQU1JLEFBSUwsQUFPQSxBQVNKLEFBUUcsQUFHSSxBQUlGLEFBR0MsQUFJSixBQUdELEFBT0EsQUFLWSxXQXBDYixDQXlCQyxDQU9HLENBeEJoQixBQWNBLENBcERlLEFBY0csQUFPSixDQWpCQyxBQXlDZixDQUdrQixDQTVGTCxBQWtDRyxBQW1EQyxHQWhGVCxBQWlEUixFQXFCbUIsQ0FvQ0EsQ0FYRixJQXZEakIsQUFxQmlCLEFBeUNPLEVBckdiLEFBMkNJLENBVUMsQ0ExREgsQUFrQ0ssQ0EwRGxCLENBUEEsSUE3RDRDLEVBbURwQixDQXlCTixBQVdQLEVBekdNLENBMkNDLEFBaUJBLEVBakVsQixBQTBEZSxHQXhCQSxBQUtmLEVBbUVBLEFBS1EsT0FDSSxDQTFHTyxBQThGRixDQXpDVSxDQU9MLENBakJ0QixDQWRpQixBQXdDRyxNQXNDTixPQVpkLENBOUZZLEVBaUI2QixBQVl6QyxHQStCZSxBQVNFLEFBc0NPLElBdER4QixFQXBEYSxRQTREbUIsRUFTaEMsTUFwRWEsQ0EwR2IsWUExRndDLEdBZjFCLFVBMkRkLEdBMURtQixrQkFDeUIsR0FjUixxQ0FiVSwwQ0FDZSxnQ0FhZ0YseUJBWnJGLGdIQUM5QixNQWExQixtQkFaK0IsOEJBQ25CLGVBRVQiLCJmaWxlIjoicGFnZXNcXGJsb2cuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFx1c2VyXFxuZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucy8nO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gJy4uL3N0eWxlcy9hYm91dC5zY3NzJztcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcblxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgQmxvZyA9ICh7IHBvc3RzID0gW10gfSkgPT4gKFxuPExheW91dCAgdGl0bGU9XCJCbG9nIHwgQ2hhcmlzb2wgVGVjaG5vbG9naWVzXCI+IFxuICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxuICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cblxuICAgPGRpdiBpZD1cInBhbmVsXCIgIGRhdGEtc2xpZGVvdXQtaWdub3JlPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJpY2luZ1wiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZyBuby1yZXZlYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBUaGUgQ2hhcmlzb2wgQmxvZ1xuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi10ZXh0IG5vLXJldmVhbCBibC1zdWJoZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgV2UgcHVibGlzaCBvbiB0b3BpY3Mgc3VjaCBhcyBzb2Z0d2FyZSBkZXZlbG9wbWVudCwgZGlnaXRhbCBwdWJsaXNoaW5nIGFuZCBjb250ZW50IHN0cmF0ZWd5LlxuXHRcdFx0XHQgIDwvcD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2ID5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcblx0XHRcdFx0e1xuICAgICAgICAgIHBvc3RzLm1hcCgoe19pZCwgdGl0bGUgPSAnJywgbmFtZSA9ICdObyBuYW1lJywgcHVibGlzaGVkQXQ9JycsIGNhdGVnb3JpZXMgPSBbXSwgbWFpbkltYWdlPXt9LCBib2R5PVtdLCBhdXRob3JJbWFnZSA9IHt9LCBzbHVnID0gJycsIF91cGRhdGVkQXQgPSAnJ30pID0+XG4gICAgICAgICAgICAgIHNsdWcgJiYgPGxpIGtleT17X2lkfSBjbGFzc05hbWU9XCJjYXJkLWxpc3RcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXt1cmxGb3IobWFpbkltYWdlKS51cmwoKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhdFwiPlxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXRhZ1wiPjwvaT5cblx0XHRcdFx0XHQ8ZW0+IHtjYXRlZ29yaWVzfTwvZW0+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuXHRcdFx0XHRcdHtmb3JtYXQocHVibGlzaGVkQXQsICdNTU1NIERELCBZWVlZJyl9XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVyZlwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2AvcG9zdC8ke3NsdWd9YH0+XG5cdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHQ8aDE+e3RpdGxlfTwvaDE+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxCbG9ja0NvbnRlbnRcblx0XHRcdFx0XHRibG9ja3M9e2JvZHlbMV19XG5cdFx0XHRcdFx0aW1hZ2VPcHRpb25zPXt7dzogOTAwLCBoOiA2MDAsIGZpdDogJ21heCd9fVxuXHRcdFx0XHRcdHByb2plY3RJZD17Y2xpZW50LmNsaWVudENvbmZpZy5wcm9qZWN0SWR9XG5cdFx0XHRcdFx0ZGF0YXNldD17Y2xpZW50LmNsaWVudENvbmZpZy5kYXRhc2V0fVxuXHRcdFx0XHQgIC8+PC9kaXY+XG5cdFx0XHRcdDxmb290ZXI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoNDApLnVybCgpfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmFtZVwiPlxuXHRcdFx0XHRcdEJ5XG5cdFx0XHRcdFx0PGVtPiB7bmFtZX08L2VtPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZm9vdGVyPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcblx0XHRcdFx0fVxuICA8L3VsPiAgXG4gIDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuXHRcblx0XG5cdDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ibC1zdWJoZWFkIHsgXG5cdFx0Zm9udC13ZWlnaHQ6MzAwcHg7XG5cdFx0Zm9udC1zaXplOjIycHg7XG5cdFx0Y29sb3I6ICM2YjZjN2E7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgeyBcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG5cdFx0d2lkdGg6MzUlO1xuXHRcdGhlaWdodDo1MDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcblx0bWFyZ2luLWxlZnQ6NXB4O1xuXHRtYXJnaW4tdG9wOjIwcHg7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDEwLCAxNiwgMzQsIDAuMSk7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuMDIsIDAuMDEsIDAuNDcsIDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC4wMiwgMC4wMSwgMC40NywgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTIwcHg7XG5cdGN1cnNvcjpwb2ludGVyO1xuXHRcbiAgICAgIH1cblx0ICAuY2FyZC1saXN0OmhvdmVye1xuXHRcdCAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS9ndWlkbGluZS1wcmlzbWljJTJGN2Q1ZjIyMmMtMjQyYi00MGUwLWJjMmUtYjE5Yzg5ZjE4YjQyX2JnLWhlYWQtYmxvZ3Bvc3Qtd3JpdGluZy5zdmcpO1xuICAgIFxuXHQgIH1cblx0ICAuY2FyZC1saXN0IGgxe1xuXHRcdCAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBjb2xvcjogIzQzNDQ1NjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IGF7XG5cdFx0ICB0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBwIHtcblx0XHQgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzZiNmM3YTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBwIGVte1xuXHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcblx0XHQgIGZvbnQtc2l6ZToxMnB4O1xuXHRcdCAgY29sb3I6ICM0MzQ0NTY7XG5cdFx0ICBmb250LXN0eWxlOm5vcm1hbDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCB1bHtcblx0XHQgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuXHQgIH1cblx0ICBcblx0ICAuY2FyZC1saXN0IC5kYXRle1xuXHRcdCAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbjogNXB4IDAgMDtcbiAgICBjb2xvcjogIzZiNmM3YTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAudGV4dHtcblx0XHQgIGZvbnQtc2l6ZTogMTVweDtcblx0XHQgIGRpc3BsYXk6YmxvY2s7XG5cdFx0ICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEyLjhweDtcbiAgICBjb2xvcjogIzQzNDQ1Njtcblx0dGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAuYXV0aG9ye1xuXHRcdCAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OjQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBpe1xuXHRcdCAgY29sb3I6ICNCNzIxRkY7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLmNhdHtcblx0XHQgIG1hcmdpbi1ib3R0b206IDFweDtcblx0XHQgIHBhZGRpbmctdG9wOjIwcHg7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLmNhdCBlbXtcblx0XHQgIG1hcmdpbi1sZWZ0OiAzcHg7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLm5hbWV7XG5cdFx0ICBwYWRkaW5nLXRvcDogMTBweDtcblx0XHQgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IGgxOmhvdmVye1xuXHRcdCAgY29sb3I6I0I3MjFGRjtcblx0ICB9XG5cdCAgLmltYWdlIGltZ3tcblx0XHQgIHdpZHRoOiA0MzVweDtcblx0XHQgIGhlaWdodDoyMDBweDtcblx0XHQgIG9iamVjdC1maXQ6Y292ZXI7XG5cdFx0ICBtYXJnaW4tbGVmdDotNDBweDtcblx0XHQgIG1hcmdpbi10b3A6LTQwcHg7XG5cdCAgfVxuXHQgIC5vdmVyZntcblx0XHQgIGhlaWdodDoyMDBweDtcblx0XHQgIG92ZXJmbG93OmhpZGRlbjtcblx0XHQgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHQgIH1cblx0ICBmb290ZXJ7XG5cdFx0ICBwYWRkaW5nOiAxMzBweCA0MHB4IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAwcHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHQgIH1cblx0ICBcbiAgICBgfTwvc3R5bGU+XG48L0xheW91dD5cbilcblxuQmxvZy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIHsgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChgKltfdHlwZSA9PSBcInBvc3RcIl1bMC4uMTAwMF0gfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKXtcbiAgICAgIF9pZCxcbiAgICAgIHRpdGxlLFxuXHQgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG5cdCAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG5cdCAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuXHQgIG1haW5JbWFnZSxcblx0ICBwdWJsaXNoZWRBdCxcblx0ICBib2R5LFxuICAgICAgXCJzbHVnXCI6IHNsdWcuY3VycmVudCxcbiAgICAgIF91cGRhdGVkQXRcbiAgICB9YCkgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nIl19 */\n/*@ sourceURL=pages\\blog.js */"
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
//# sourceMappingURL=6.ad3bb0370bfe66aed0dd.hot-update.js.map