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
    className: "jsx-172438834"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-172438834"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-172438834" + " " + "pricing"
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
    className: "jsx-172438834" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-172438834" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-172438834" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-172438834" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-172438834" + " " + "heading-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-172438834" + " " + "heading no-reveal"
  }, "The Charisol Blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-172438834" + " " + "sub-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-172438834" + " " + "sub-text no-reveal bl-subhead"
  }, "We publish on topics such as software development, digital publishing and content strategy.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-172438834"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-172438834"
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
      className: "jsx-172438834" + " " + "card-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-172438834" + " " + "image"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(mainImage).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      className: "jsx-172438834"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      className: "jsx-172438834" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      className: "jsx-172438834" + " " + "fa fa-tag"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      className: "jsx-172438834"
    }, " ", categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      className: "jsx-172438834" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_4_date_fns___["format"])(publishedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      className: "jsx-172438834" + " " + "overf"
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
      className: "jsx-172438834"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      className: "jsx-172438834"
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
      className: "jsx-172438834"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      className: "jsx-172438834" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      className: "jsx-172438834"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      className: "jsx-172438834" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      className: "jsx-172438834"
    }, " ", name))));
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "172438834",
    css: ".bl-subhead.jsx-172438834{font-weight:300px;font-size:22px;color:#6b6c7a;}.card-list.jsx-172438834{list-style-type:none;width:35%;height:500px;overflow:hidden;position:relative;float:left;margin-left:5px;margin-top:20px;padding:40px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.card-list.jsx-172438834:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.card-list.jsx-172438834 h1.jsx-172438834{margin-top:1.5rem;font-size:22px;line-height:33px;color:#434456;font-weight:500;}.card-list.jsx-172438834 a.jsx-172438834{-webkit-text-decoration:none;text-decoration:none;}.card-list.jsx-172438834 p.jsx-172438834{font-size:12px;color:#6b6c7a;}.card-list.jsx-172438834 p.jsx-172438834 em.jsx-172438834{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.card-list.jsx-172438834 ul.jsx-172438834{list-style-type:none;}.card-list.jsx-172438834 .date.jsx-172438834{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.card-list.jsx-172438834 .text.jsx-172438834{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.card-list.jsx-172438834 .author.jsx-172438834{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.card-list.jsx-172438834 i.jsx-172438834{color:#B721FF;}.card-list.jsx-172438834 .cat.jsx-172438834{margin-bottom:1px;padding-top:20px;}.card-list.jsx-172438834 .cat.jsx-172438834 em.jsx-172438834{margin-left:3px;}.card-list.jsx-172438834 .name.jsx-172438834{padding-top:10px;margin-left:50px;}.card-list.jsx-172438834 h1.jsx-172438834:hover{color:#B721FF;}.image.jsx-172438834 img.jsx-172438834{width:435px;height:200px;object-fit:cover;margin-left:-40px;margin-top:-40px;}.overf.jsx-172438834{max-height:250px;overflow:hidden;text-overflow:ellipsis;content:\"\";position:relative;}.overf.jsx-172438834:before{content:'';width:100%;height:100%;position:absolute;left:0;top:0;background:linear-gradient(transparent 150px,#f9f9f9);}footer.jsx-172438834{padding:130px 40px 40px;position:absolute;top:500px;left:0;width:100%;height:200px;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGYSxBQUdvQixBQUtTLEFBb0JrQixBQVN4QixBQU9FLEFBR0wsQUFJQyxBQU1JLEFBSUwsQUFPQSxBQVNKLEFBUUcsQUFHSSxBQUlGLEFBR0MsQUFJSixBQUdELEFBT0ksQUFPTixBQVNjLFdBL0NiLEFBdUNELENBZEUsRUFqQmIsQUFjQSxDQXBEZSxBQWNHLEFBT0osQ0FqQkMsQUF5Q2YsQ0FHa0IsQUFjRixDQTFHSCxBQWtDRyxBQW1EQyxHQWhGVCxBQWlEUixDQTREWSxDQXZDTyxDQStDQSxDQXRCRixJQXZEakIsQUFxQmlCLEVBNUROLEFBMkNJLENBVUMsQ0ExREgsQUFrQ0ssQUF3RU0sQ0FkeEIsQUFzQmtCLENBN0JsQixJQTdENEMsRUFtRHBCLENBeUJOLEFBc0JQLEVBcEhNLENBMkNDLEFBaUJBLEVBakVsQixBQTBEZSxHQXhCQSxBQUtmLEVBMkVPLEFBUUMsSUFoQkksR0FTTixBQVFNLENBckhPLEFBOEZGLENBekNVLENBT0wsQ0FqQnRCLENBZGlCLEFBd0NHLENBeUNtQyxFQVRyQyxHQWlCSixPQXZCZCxDQTlGWSxFQWlCNkIsQUFZekMsR0ErQmUsQUFTRSxBQWlETyxFQWpCeEIsRUFoREEsRUFwRGEsUUE0RG1CLEVBU2hDLE1BcEVhLENBcUhiLFlBckd3QyxDQTRGeEMsRUEzR2MsVUEyRGQsR0ExRG1CLGtCQUN5QixHQWNSLHFDQWJVLDBDQUNlLGdDQWFnRix5QkFackYsZ0hBQzlCLE1BYTFCLG1CQVorQiw4QkFDbkIsZUFFVCIsImZpbGUiOiJwYWdlc1xcYmxvZy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHVzZXJcXG5leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zLyc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3R5bGVzL2Fib3V0LnNjc3MnO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuXG5jb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudClcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcbiAgcmV0dXJuIGJ1aWxkZXIuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBCbG9nID0gKHsgcG9zdHMgPSBbXSB9KSA9PiAoXG48TGF5b3V0ICB0aXRsZT1cIkJsb2cgfCBDaGFyaXNvbCBUZWNobm9sb2dpZXNcIj4gXG4gICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XG4gICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxuXG4gICA8ZGl2IGlkPVwicGFuZWxcIiAgZGF0YS1zbGlkZW91dC1pZ25vcmU+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nIG5vLXJldmVhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRoZSBDaGFyaXNvbCBCbG9nXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic3ViLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXRleHQgbm8tcmV2ZWFsIGJsLXN1YmhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBXZSBwdWJsaXNoIG9uIHRvcGljcyBzdWNoIGFzIHNvZnR3YXJlIGRldmVsb3BtZW50LCBkaWdpdGFsIHB1Ymxpc2hpbmcgYW5kIGNvbnRlbnQgc3RyYXRlZ3kuXG5cdFx0XHRcdCAgPC9wPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFxuXHRcdFx0XHR7XG4gICAgICAgICAgcG9zdHMubWFwKCh7X2lkLCB0aXRsZSA9ICcnLCBuYW1lID0gJ05vIG5hbWUnLCBwdWJsaXNoZWRBdD0nJywgY2F0ZWdvcmllcyA9IFtdLCBtYWluSW1hZ2U9e30sIGJvZHk9W10sIGF1dGhvckltYWdlID0ge30sIHNsdWcgPSAnJywgX3VwZGF0ZWRBdCA9ICcnfSkgPT5cbiAgICAgICAgICAgICAgc2x1ZyAmJiA8bGkga2V5PXtfaWR9IGNsYXNzTmFtZT1cImNhcmQtbGlzdFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e3VybEZvcihtYWluSW1hZ2UpLnVybCgpfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2F0XCI+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtdGFnXCI+PC9pPlxuXHRcdFx0XHRcdDxlbT4ge2NhdGVnb3JpZXN9PC9lbT5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkYXRlXCI+XG5cdFx0XHRcdFx0e2Zvcm1hdChwdWJsaXNoZWRBdCwgJ01NTU0gREQsIFlZWVknKX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC9wb3N0LyR7c2x1Z31gfT5cblx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdDxoMT57dGl0bGV9PC9oMT5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PEJsb2NrQ29udGVudFxuXHRcdFx0XHRcdGJsb2Nrcz17Ym9keVsxXX1cblx0XHRcdFx0XHRpbWFnZU9wdGlvbnM9e3t3OiA5MDAsIGg6IDYwMCwgZml0OiAnbWF4J319XG5cdFx0XHRcdFx0cHJvamVjdElkPXtjbGllbnQuY2xpZW50Q29uZmlnLnByb2plY3RJZH1cblx0XHRcdFx0XHRkYXRhc2V0PXtjbGllbnQuY2xpZW50Q29uZmlnLmRhdGFzZXR9XG5cdFx0XHRcdCAgLz48L2Rpdj5cblx0XHRcdFx0PGZvb3Rlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKS53aWR0aCg0MCkudXJsKCl9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuYW1lXCI+XG5cdFx0XHRcdFx0Qnlcblx0XHRcdFx0XHQ8ZW0+IHtuYW1lfTwvZW0+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9mb290ZXI+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuXHRcdFx0XHR9XG4gIDwvdWw+ICBcbiAgPC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG5cdFxuXHRcblx0PHN0eWxlIGpzeD57YFxuICAgICAgLmJsLXN1YmhlYWQgeyBcblx0XHRmb250LXdlaWdodDozMDBweDtcblx0XHRmb250LXNpemU6MjJweDtcblx0XHRjb2xvcjogIzZiNmM3YTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCB7IFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcblx0XHR3aWR0aDozNSU7XG5cdFx0aGVpZ2h0OjUwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW4tbGVmdDo1cHg7XG5cdG1hcmdpbi10b3A6MjBweDtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMTAsIDE2LCAzNCwgMC4xKTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC4wMiwgMC4wMSwgMC40NywgMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjAyLCAwLjAxLCAwLjQ3LCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMjBweDtcblx0Y3Vyc29yOnBvaW50ZXI7XG5cdFxuICAgICAgfVxuXHQgIC5jYXJkLWxpc3Q6aG92ZXJ7XG5cdFx0ICBib3gtc2hhZG93OiAwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcHJpc21pYy1pby5zMy5hbWF6b25hd3MuY29tL2d1aWRsaW5lLXByaXNtaWMlMkY3ZDVmMjIyYy0yNDJiLTQwZTAtYmMyZS1iMTljODlmMThiNDJfYmctaGVhZC1ibG9ncG9zdC13cml0aW5nLnN2Zyk7XG4gICAgXG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgaDF7XG5cdFx0ICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGNvbG9yOiAjNDM0NDU2O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgYXtcblx0XHQgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IHAge1xuXHRcdCAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNmI2YzdhO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IHAgZW17XG5cdFx0ICBmb250LXdlaWdodDogNjAwO1xuXHRcdCAgZm9udC1zaXplOjEycHg7XG5cdFx0ICBjb2xvcjogIzQzNDQ1Njtcblx0XHQgIGZvbnQtc3R5bGU6bm9ybWFsO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IHVse1xuXHRcdCAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG5cdCAgfVxuXHQgIFxuXHQgIC5jYXJkLWxpc3QgLmRhdGV7XG5cdFx0ICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgbWFyZ2luOiA1cHggMCAwO1xuICAgIGNvbG9yOiAjNmI2YzdhO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC50ZXh0e1xuXHRcdCAgZm9udC1zaXplOiAxNXB4O1xuXHRcdCAgZGlzcGxheTpibG9jaztcblx0XHQgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTIuOHB4O1xuICAgIGNvbG9yOiAjNDM0NDU2O1xuXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC5hdXRob3J7XG5cdFx0ICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6NDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IGl7XG5cdFx0ICBjb2xvcjogI0I3MjFGRjtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAuY2F0e1xuXHRcdCAgbWFyZ2luLWJvdHRvbTogMXB4O1xuXHRcdCAgcGFkZGluZy10b3A6MjBweDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAuY2F0IGVte1xuXHRcdCAgbWFyZ2luLWxlZnQ6IDNweDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAubmFtZXtcblx0XHQgIHBhZGRpbmctdG9wOiAxMHB4O1xuXHRcdCAgbWFyZ2luLWxlZnQ6IDUwcHg7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgaDE6aG92ZXJ7XG5cdFx0ICBjb2xvcjojQjcyMUZGO1xuXHQgIH1cblx0ICAuaW1hZ2UgaW1ne1xuXHRcdCAgd2lkdGg6IDQzNXB4O1xuXHRcdCAgaGVpZ2h0OjIwMHB4O1xuXHRcdCAgb2JqZWN0LWZpdDpjb3Zlcjtcblx0XHQgIG1hcmdpbi1sZWZ0Oi00MHB4O1xuXHRcdCAgbWFyZ2luLXRvcDotNDBweDtcblx0ICB9XG5cdCAgLm92ZXJme1xuXHRcdCAgbWF4LWhlaWdodDoyNTBweDtcblx0XHQgIG92ZXJmbG93OmhpZGRlbjtcblx0XHQgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdCAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblx0ICB9XG5cdCAgLm92ZXJmOmJlZm9yZXtcblx0XHQgIGNvbnRlbnQ6Jyc7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTsgICAgXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbGVmdDowO1xuICAgIHRvcDowO1xuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDE1MHB4LCAjZjlmOWY5KTtcblx0ICB9XG5cdCAgZm9vdGVye1xuXHRcdCAgcGFkZGluZzogMTMwcHggNDBweCA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0ICB9XG5cdCAgXG4gICAgYH08L3N0eWxlPlxuPC9MYXlvdXQ+XG4pXG5cbkJsb2cuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiB7IHBvc3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goYCpbX3R5cGUgPT0gXCJwb3N0XCJdWzAuLjEwMDBdIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYyl7XG4gICAgICBfaWQsXG4gICAgICB0aXRsZSxcblx0ICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuXHQgIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuXHQgIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcblx0ICBtYWluSW1hZ2UsXG5cdCAgcHVibGlzaGVkQXQsXG5cdCAgYm9keSxcbiAgICAgIFwic2x1Z1wiOiBzbHVnLmN1cnJlbnQsXG4gICAgICBfdXBkYXRlZEF0XG4gICAgfWApIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdfQ== */\n/*@ sourceURL=pages\\blog.js */"
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
//# sourceMappingURL=6.8f442076bff3abfce8e4.hot-update.js.map