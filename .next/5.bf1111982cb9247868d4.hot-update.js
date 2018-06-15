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
    className: "jsx-229575304"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-229575304"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-229575304" + " " + "pricing"
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
    className: "jsx-229575304" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-229575304" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-229575304" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-229575304" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-229575304" + " " + "heading-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-229575304" + " " + "heading no-reveal"
  }, "The Charisol Blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-229575304" + " " + "sub-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-229575304" + " " + "sub-text no-reveal bl-subhead"
  }, "We publish on topics such as software development, digital publishing and content strategy.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-229575304"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-229575304"
  }, posts.map(function (_ref2) {
    var _id = _ref2._id,
        _ref2$title = _ref2.title,
        title = _ref2$title === void 0 ? '' : _ref2$title,
        _ref2$name = _ref2.name,
        name = _ref2$name === void 0 ? 'No name' : _ref2$name,
        _ref2$categories = _ref2.categories,
        categories = _ref2$categories === void 0 ? [] : _ref2$categories,
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
      className: "jsx-229575304" + " " + "card-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-229575304" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      className: "jsx-229575304" + " " + "fa fa-tag"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      className: "jsx-229575304"
    }, " ", categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      className: "jsx-229575304" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_4_date_fns___["format"])(_updatedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
      prefetch: true,
      href: "/post/".concat(slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      }
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      className: "jsx-229575304"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      className: "jsx-229575304"
    }, title))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      className: "jsx-229575304" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      className: "jsx-229575304"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      className: "jsx-229575304" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      className: "jsx-229575304"
    }, " ", name)));
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "229575304",
    css: ".bl-subhead.jsx-229575304{font-weight:300px;font-size:22px;color:#6b6c7a;}.card-list.jsx-229575304{list-style-type:none;width:40%;overflow:hidden;position:relative;float:left;padding:40px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.card-list.jsx-229575304:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.card-list.jsx-229575304 h1.jsx-229575304{margin-top:1.5rem;font-size:22px;line-height:33px;color:#434456;font-weight:500;}.card-list.jsx-229575304 a.jsx-229575304{-webkit-text-decoration:none;text-decoration:none;}.card-list.jsx-229575304 p.jsx-229575304{font-size:12px;color:#6b6c7a;}.card-list.jsx-229575304 p.jsx-229575304 em.jsx-229575304{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.card-list.jsx-229575304 ul.jsx-229575304{list-style-type:none;}.card-list.jsx-229575304 .date.jsx-229575304{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.card-list.jsx-229575304 .text.jsx-229575304{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.card-list.jsx-229575304 .author.jsx-229575304{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.card-list.jsx-229575304 i.jsx-229575304{color:#B721FF;}.card-list.jsx-229575304 .cat.jsx-229575304{margin-bottom:1px;}.card-list.jsx-229575304 .cat.jsx-229575304 em.jsx-229575304{margin-left:3px;}.card-list.jsx-229575304 .name.jsx-229575304{padding-top:10px;margin-left:50px;}.card-list.jsx-229575304 h1.jsx-229575304:hover{color:#B721FF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFYSxBQUdvQixBQUtTLEFBa0JrQixBQVN4QixBQU9FLEFBR0wsQUFJQyxBQU1JLEFBSUwsQUFPQSxBQVNKLEFBUUcsQUFHSSxBQUdGLEFBR0MsQUFJSixXQXBCRixHQVFaLEFBYUEsQ0FuRGUsQUFjRyxBQU9KLENBakJDLEFBd0NmLENBR2tCLENBekZMLEFBZ0NHLEFBbURoQixHQTlFUSxBQStDUixFQXFCbUIsTUE5Qm5CLEFBcUJpQixFQXpEQSxBQXdDRixDQVVDLENBeERILEFBZ0NLLENBeURsQixLQW5FNEMsRUFtRHBCLElBMUJOLEFBaUJBLEVBL0RsQixBQU1tQixBQWtESixHQXhCQSxBQUtmLFdBb0IyQixDQU9MLENBakJ0QixDQWRpQixBQXdDRyxDQWxFUixXQUNFLElBYzJCLEFBWXpDLEdBK0JlLEFBU0UsSUFoQmpCLEVBakRtQixRQXlEYSxFQVNoQyxRQWpFNEMsV0FhSixhQTRDeEMsZ0JBeEQ4QyxRQWFWLGtDQVp5Qix5REFDTCxvQkFZcUYsNEZBWG5ILHlCQUNLLDBCQVkvQixJQVhZLGVBRVQiLCJmaWxlIjoicGFnZXNcXGJsb2cuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFx1c2VyXFxuZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucy8nO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gJy4uL3N0eWxlcy9hYm91dC5zY3NzJztcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcblxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgQmxvZyA9ICh7IHBvc3RzID0gW10gfSkgPT4gKFxuPExheW91dCAgdGl0bGU9XCJCbG9nIHwgQ2hhcmlzb2wgVGVjaG5vbG9naWVzXCI+IFxuICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxuICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cblxuICAgPGRpdiBpZD1cInBhbmVsXCIgIGRhdGEtc2xpZGVvdXQtaWdub3JlPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJpY2luZ1wiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZyBuby1yZXZlYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBUaGUgQ2hhcmlzb2wgQmxvZ1xuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi10ZXh0IG5vLXJldmVhbCBibC1zdWJoZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgV2UgcHVibGlzaCBvbiB0b3BpY3Mgc3VjaCBhcyBzb2Z0d2FyZSBkZXZlbG9wbWVudCwgZGlnaXRhbCBwdWJsaXNoaW5nIGFuZCBjb250ZW50IHN0cmF0ZWd5LlxuXHRcdFx0XHQgIDwvcD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2ID5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcblx0XHRcdFx0e1xuICAgICAgICAgIHBvc3RzLm1hcCgoe19pZCwgdGl0bGUgPSAnJywgbmFtZSA9ICdObyBuYW1lJywgY2F0ZWdvcmllcyA9IFtdLCBhdXRob3JJbWFnZSA9IHt9LCBzbHVnID0gJycsIF91cGRhdGVkQXQgPSAnJ30pID0+XG4gICAgICAgICAgICAgIHNsdWcgJiYgPGxpIGtleT17X2lkfSBjbGFzc05hbWU9XCJjYXJkLWxpc3RcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2F0XCI+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtdGFnXCI+PC9pPlxuXHRcdFx0XHRcdDxlbT4ge2NhdGVnb3JpZXN9PC9lbT5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkYXRlXCI+XG5cdFx0XHRcdFx0e2Zvcm1hdChfdXBkYXRlZEF0LCAnTU1NTSBERCwgWVlZWScpfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2AvcG9zdC8ke3NsdWd9YH0+XG5cdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHQ8aDE+e3RpdGxlfTwvaDE+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L0xpbms+IFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDQwKS51cmwoKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cblx0XHRcdFx0XHRCeVxuXHRcdFx0XHRcdDxlbT4ge25hbWV9PC9lbT5cblx0XHRcdFx0PC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcblx0XHRcdFx0fVxuICA8L3VsPiAgXG4gIDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuXHRcblx0XG5cdDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ibC1zdWJoZWFkIHsgXG5cdFx0Zm9udC13ZWlnaHQ6MzAwcHg7XG5cdFx0Zm9udC1zaXplOjIycHg7XG5cdFx0Y29sb3I6ICM2YjZjN2E7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgeyBcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG5cdFx0d2lkdGg6NDAlO1xuXHRcdFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgxMCwgMTYsIDM0LCAwLjEpO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjAyLCAwLjAxLCAwLjQ3LCAxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuMDIsIDAuMDEsIDAuNDcsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0yMHB4O1xuXHRjdXJzb3I6cG9pbnRlcjtcblx0XG4gICAgICB9XG5cdCAgLmNhcmQtbGlzdDpob3Zlcntcblx0XHQgIGJveC1zaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vZ3VpZGxpbmUtcHJpc21pYyUyRjdkNWYyMjJjLTI0MmItNDBlMC1iYzJlLWIxOWM4OWYxOGI0Ml9iZy1oZWFkLWJsb2dwb3N0LXdyaXRpbmcuc3ZnKTtcbiAgICBcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBoMXtcblx0XHQgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgY29sb3I6ICM0MzQ0NTY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBhe1xuXHRcdCAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgcCB7XG5cdFx0ICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2YjZjN2E7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgcCBlbXtcblx0XHQgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0ICBmb250LXNpemU6MTJweDtcblx0XHQgIGNvbG9yOiAjNDM0NDU2O1xuXHRcdCAgZm9udC1zdHlsZTpub3JtYWw7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgdWx7XG5cdFx0ICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcblx0ICB9XG5cdCAgXG5cdCAgLmNhcmQtbGlzdCAuZGF0ZXtcblx0XHQgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBtYXJnaW46IDVweCAwIDA7XG4gICAgY29sb3I6ICM2YjZjN2E7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLnRleHR7XG5cdFx0ICBmb250LXNpemU6IDE1cHg7XG5cdFx0ICBkaXNwbGF5OmJsb2NrO1xuXHRcdCAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMi44cHg7XG4gICAgY29sb3I6ICM0MzQ0NTY7XG5cdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLmF1dGhvcntcblx0XHQgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDo0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgaXtcblx0XHQgIGNvbG9yOiAjQjcyMUZGO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC5jYXR7XG5cdFx0ICBtYXJnaW4tYm90dG9tOiAxcHg7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLmNhdCBlbXtcblx0XHQgIG1hcmdpbi1sZWZ0OiAzcHg7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLm5hbWV7XG5cdFx0ICBwYWRkaW5nLXRvcDogMTBweDtcblx0XHQgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IGgxOmhvdmVye1xuXHRcdCAgY29sb3I6I0I3MjFGRjtcblx0ICB9XG5cdCAgXG4gICAgYH08L3N0eWxlPlxuPC9MYXlvdXQ+XG4pXG5cbkJsb2cuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiB7IHBvc3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goYCpbX3R5cGUgPT0gXCJwb3N0XCJdWzAuLjEwMDBde1xuICAgICAgX2lkLFxuICAgICAgdGl0bGUsXG5cdCAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcblx0ICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcblx0ICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxuICAgICAgX3VwZGF0ZWRBdFxuICAgIH1gKSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2ciXX0= */\n/*@ sourceURL=pages\\blog.js */"
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
          return __WEBPACK_IMPORTED_MODULE_5__client___default.a.fetch("*[_type == \"post\"][0..1000]{\n      _id,\n      title,\n\t  \"name\": author->name,\n\t  \"categories\": categories[]->title,\n\t  \"authorImage\": author->image,\n      \"slug\": slug.current,\n      _updatedAt\n    }");

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
//# sourceMappingURL=5.bf1111982cb9247868d4.hot-update.js.map