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
    className: "jsx-2263004854"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-2263004854"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-2263004854" + " " + "pricing"
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
    className: "jsx-2263004854" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-2263004854" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-2263004854" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-2263004854" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-2263004854" + " " + "heading-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-2263004854" + " " + "heading no-reveal"
  }, "The Charisol Blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-2263004854" + " " + "sub-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-2263004854" + " " + "sub-text no-reveal bl-subhead"
  }, "We publish on topics such as software development, digital publishing and content strategy.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-2263004854"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-2263004854"
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
      className: "jsx-2263004854" + " " + "card-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-2263004854" + " " + "image"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(mainImage).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      className: "jsx-2263004854"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      className: "jsx-2263004854" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      className: "jsx-2263004854" + " " + "fa fa-tag"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      className: "jsx-2263004854"
    }, " ", categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      className: "jsx-2263004854" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_4_date_fns___["format"])(publishedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      className: "jsx-2263004854" + " " + "overf"
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
      className: "jsx-2263004854"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      className: "jsx-2263004854"
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
      className: "jsx-2263004854"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      className: "jsx-2263004854" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      className: "jsx-2263004854"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      className: "jsx-2263004854" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      className: "jsx-2263004854"
    }, " ", name))));
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "2263004854",
    css: ".bl-subhead.jsx-2263004854{font-weight:300px;font-size:22px;color:#6b6c7a;}.card-list.jsx-2263004854{list-style-type:none;width:37%;height:550px;overflow:hidden;position:relative;float:left;margin-left:20px;margin-top:20px;padding:40px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.card-list.jsx-2263004854:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.card-list.jsx-2263004854 h1.jsx-2263004854{margin-top:1.5rem;font-size:22px;line-height:33px;color:#434456;font-weight:500;}.card-list.jsx-2263004854 a.jsx-2263004854{-webkit-text-decoration:none;text-decoration:none;}.card-list.jsx-2263004854 p.jsx-2263004854{font-size:12px;color:#6b6c7a;}.card-list.jsx-2263004854 p.jsx-2263004854 em.jsx-2263004854{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.card-list.jsx-2263004854 ul.jsx-2263004854{list-style-type:none;}.card-list.jsx-2263004854 .date.jsx-2263004854{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.card-list.jsx-2263004854 .text.jsx-2263004854{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.card-list.jsx-2263004854 .author.jsx-2263004854{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.card-list.jsx-2263004854 i.jsx-2263004854{color:#B721FF;}.card-list.jsx-2263004854 .cat.jsx-2263004854{margin-bottom:1px;padding-top:20px;}.card-list.jsx-2263004854 .cat.jsx-2263004854 em.jsx-2263004854{margin-left:3px;}.card-list.jsx-2263004854 .name.jsx-2263004854{padding-top:10px;margin-left:50px;}.card-list.jsx-2263004854 h1.jsx-2263004854:hover{color:#B721FF;}.image.jsx-2263004854 img.jsx-2263004854{width:435px;height:200px;object-fit:cover;margin-left:-40px;margin-top:-40px;}.overf.jsx-2263004854{max-height:250px;overflow:hidden;text-overflow:ellipsis;position:relative;background:linear-gradient(transparent 150px,#f9f9f9);}footer.jsx-2263004854{position:absolute;top:530px;left:0;width:100%;height:200px;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGYSxBQUdvQixBQUtTLEFBb0JrQixBQVN4QixBQU9FLEFBR0wsQUFJQyxBQU1JLEFBSUwsQUFPQSxBQVNKLEFBUUcsQUFHSSxBQUlGLEFBR0MsQUFJSixBQUdELEFBT0ksQUFVRSxXQXpDUCxDQXlCQyxFQWpCYixBQWNBLENBcERlLEFBY0csQUFPSixDQWpCQyxBQXlDZixDQUdrQixBQWNGLENBMUdILEFBa0NHLEFBbURDLEFBK0JOLEdBL0dILEFBaURSLEVBcUJtQixFQXlCRixHQWlCVCxDQXhFUixBQXFCaUIsRUE1RE4sQUEyQ0ksQ0FVQyxDQTFESCxBQWtDSyxBQXdFTSxDQWR4QixDQVBBLEFBZ0NZLElBN0ZnQyxFQW1EcEIsQ0F5Qk4sRUE5RkQsQ0EyQ0MsQUFpQkEsQ0FvREosQ0FySGQsQUEwRGUsR0F4QkEsQUFLZixNQW9Fa0IsR0FXTSxDQWhITCxBQThGRixDQXpDVSxDQU9MLENBakJ0QixDQWRpQixBQXdDRyxVQWlDZ0MsR0FQcEQsQ0E5RlksRUFpQjZCLEFBWXpDLEVBbUZBLENBcERlLEFBU0UsSUFoQmpCLEVBcERjLFFBNERrQixFQVNoQyxPQXBFYSxZQWdCMkIsSUFmMUIsTUFtR2QsR0F4Q0EsSUExRG1CLGtCQUN5QixFQWNSLHNDQWJVLDBDQUNlLCtCQWFnRiwwQkFackYsZ0hBQzlCLEtBYTFCLG9CQVorQiw4QkFDbkIsZUFFVCIsImZpbGUiOiJwYWdlc1xcYmxvZy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHVzZXJcXG5leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zLyc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3R5bGVzL2Fib3V0LnNjc3MnO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuXG5jb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudClcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcbiAgcmV0dXJuIGJ1aWxkZXIuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBCbG9nID0gKHsgcG9zdHMgPSBbXSB9KSA9PiAoXG48TGF5b3V0ICB0aXRsZT1cIkJsb2cgfCBDaGFyaXNvbCBUZWNobm9sb2dpZXNcIj4gXG4gICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XG4gICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxuXG4gICA8ZGl2IGlkPVwicGFuZWxcIiAgZGF0YS1zbGlkZW91dC1pZ25vcmU+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nIG5vLXJldmVhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRoZSBDaGFyaXNvbCBCbG9nXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic3ViLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXRleHQgbm8tcmV2ZWFsIGJsLXN1YmhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBXZSBwdWJsaXNoIG9uIHRvcGljcyBzdWNoIGFzIHNvZnR3YXJlIGRldmVsb3BtZW50LCBkaWdpdGFsIHB1Ymxpc2hpbmcgYW5kIGNvbnRlbnQgc3RyYXRlZ3kuXG5cdFx0XHRcdCAgPC9wPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFxuXHRcdFx0XHR7XG4gICAgICAgICAgcG9zdHMubWFwKCh7X2lkLCB0aXRsZSA9ICcnLCBuYW1lID0gJ05vIG5hbWUnLCBwdWJsaXNoZWRBdD0nJywgY2F0ZWdvcmllcyA9IFtdLCBtYWluSW1hZ2U9e30sIGJvZHk9W10sIGF1dGhvckltYWdlID0ge30sIHNsdWcgPSAnJywgX3VwZGF0ZWRBdCA9ICcnfSkgPT5cbiAgICAgICAgICAgICAgc2x1ZyAmJiA8bGkga2V5PXtfaWR9IGNsYXNzTmFtZT1cImNhcmQtbGlzdFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e3VybEZvcihtYWluSW1hZ2UpLnVybCgpfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2F0XCI+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtdGFnXCI+PC9pPlxuXHRcdFx0XHRcdDxlbT4ge2NhdGVnb3JpZXN9PC9lbT5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkYXRlXCI+XG5cdFx0XHRcdFx0e2Zvcm1hdChwdWJsaXNoZWRBdCwgJ01NTU0gREQsIFlZWVknKX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC9wb3N0LyR7c2x1Z31gfT5cblx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdDxoMT57dGl0bGV9PC9oMT5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PEJsb2NrQ29udGVudFxuXHRcdFx0XHRcdGJsb2Nrcz17Ym9keVsxXX1cblx0XHRcdFx0XHRpbWFnZU9wdGlvbnM9e3t3OiA5MDAsIGg6IDYwMCwgZml0OiAnbWF4J319XG5cdFx0XHRcdFx0cHJvamVjdElkPXtjbGllbnQuY2xpZW50Q29uZmlnLnByb2plY3RJZH1cblx0XHRcdFx0XHRkYXRhc2V0PXtjbGllbnQuY2xpZW50Q29uZmlnLmRhdGFzZXR9XG5cdFx0XHRcdCAgLz48L2Rpdj5cblx0XHRcdFx0PGZvb3Rlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKS53aWR0aCg0MCkudXJsKCl9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuYW1lXCI+XG5cdFx0XHRcdFx0Qnlcblx0XHRcdFx0XHQ8ZW0+IHtuYW1lfTwvZW0+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9mb290ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuXHRcdFx0XHR9XG4gIDwvdWw+ICBcbiAgPC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG5cdFxuXHRcblx0PHN0eWxlIGpzeD57YFxuICAgICAgLmJsLXN1YmhlYWQgeyBcblx0XHRmb250LXdlaWdodDozMDBweDtcblx0XHRmb250LXNpemU6MjJweDtcblx0XHRjb2xvcjogIzZiNmM3YTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCB7IFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcblx0XHR3aWR0aDozNyU7XG5cdFx0aGVpZ2h0OjU1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW4tbGVmdDoyMHB4O1xuXHRtYXJnaW4tdG9wOjIwcHg7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDEwLCAxNiwgMzQsIDAuMSk7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuMDIsIDAuMDEsIDAuNDcsIDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC4wMiwgMC4wMSwgMC40NywgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTIwcHg7XG5cdGN1cnNvcjpwb2ludGVyO1xuXHRcbiAgICAgIH1cblx0ICAuY2FyZC1saXN0OmhvdmVye1xuXHRcdCAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS9ndWlkbGluZS1wcmlzbWljJTJGN2Q1ZjIyMmMtMjQyYi00MGUwLWJjMmUtYjE5Yzg5ZjE4YjQyX2JnLWhlYWQtYmxvZ3Bvc3Qtd3JpdGluZy5zdmcpO1xuICAgIFxuXHQgIH1cblx0ICAuY2FyZC1saXN0IGgxe1xuXHRcdCAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBjb2xvcjogIzQzNDQ1NjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IGF7XG5cdFx0ICB0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBwIHtcblx0XHQgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzZiNmM3YTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBwIGVte1xuXHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcblx0XHQgIGZvbnQtc2l6ZToxMnB4O1xuXHRcdCAgY29sb3I6ICM0MzQ0NTY7XG5cdFx0ICBmb250LXN0eWxlOm5vcm1hbDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCB1bHtcblx0XHQgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuXHQgIH1cblx0ICBcblx0ICAuY2FyZC1saXN0IC5kYXRle1xuXHRcdCAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbjogNXB4IDAgMDtcbiAgICBjb2xvcjogIzZiNmM3YTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAudGV4dHtcblx0XHQgIGZvbnQtc2l6ZTogMTVweDtcblx0XHQgIGRpc3BsYXk6YmxvY2s7XG5cdFx0ICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEyLjhweDtcbiAgICBjb2xvcjogIzQzNDQ1Njtcblx0dGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAuYXV0aG9ye1xuXHRcdCAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OjQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBpe1xuXHRcdCAgY29sb3I6ICNCNzIxRkY7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLmNhdHtcblx0XHQgIG1hcmdpbi1ib3R0b206IDFweDtcblx0XHQgIHBhZGRpbmctdG9wOjIwcHg7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLmNhdCBlbXtcblx0XHQgIG1hcmdpbi1sZWZ0OiAzcHg7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLm5hbWV7XG5cdFx0ICBwYWRkaW5nLXRvcDogMTBweDtcblx0XHQgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IGgxOmhvdmVye1xuXHRcdCAgY29sb3I6I0I3MjFGRjtcblx0ICB9XG5cdCAgLmltYWdlIGltZ3tcblx0XHQgIHdpZHRoOiA0MzVweDtcblx0XHQgIGhlaWdodDoyMDBweDtcblx0XHQgIG9iamVjdC1maXQ6Y292ZXI7XG5cdFx0ICBtYXJnaW4tbGVmdDotNDBweDtcblx0XHQgIG1hcmdpbi10b3A6LTQwcHg7XG5cdCAgfVxuXHQgIC5vdmVyZntcblx0XHQgIG1heC1oZWlnaHQ6MjUwcHg7XG5cdFx0ICBvdmVyZmxvdzpoaWRkZW47XG5cdFx0ICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHQgIFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAxNTBweCwgI2Y5ZjlmOSk7XG5cdCAgfVxuXHQgIGZvb3Rlcntcblx0XHRcblx0XHQgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTMwcHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHQgIH1cblx0ICBcbiAgICBgfTwvc3R5bGU+XG48L0xheW91dD5cbilcblxuQmxvZy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIHsgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChgKltfdHlwZSA9PSBcInBvc3RcIl1bMC4uMTAwMF0gfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKXtcbiAgICAgIF9pZCxcbiAgICAgIHRpdGxlLFxuXHQgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG5cdCAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG5cdCAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuXHQgIG1haW5JbWFnZSxcblx0ICBwdWJsaXNoZWRBdCxcblx0ICBib2R5LFxuICAgICAgXCJzbHVnXCI6IHNsdWcuY3VycmVudCxcbiAgICAgIF91cGRhdGVkQXRcbiAgICB9YCkgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nIl19 */\n/*@ sourceURL=pages\\blog.js */"
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
//# sourceMappingURL=6.8942d3676baf3f432570.hot-update.js.map