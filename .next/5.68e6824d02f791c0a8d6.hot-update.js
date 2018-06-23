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
    className: "jsx-558054126"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-558054126"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-558054126" + " " + "pricing"
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
    className: "jsx-558054126" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-558054126" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-558054126" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-558054126" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-558054126" + " " + "heading-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-558054126" + " " + "heading no-reveal"
  }, "The Charisol Blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-558054126" + " " + "sub-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-558054126" + " " + "sub-text no-reveal bl-subhead"
  }, "We publish on topics such as software development, digital publishing and content strategy.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-558054126"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-558054126"
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
      className: "jsx-558054126" + " " + "card-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-558054126" + " " + "image"
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
      className: "jsx-558054126"
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
      className: "jsx-558054126"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      className: "jsx-558054126" + " " + "cat"
    }, "/**", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      className: "jsx-558054126" + " " + "fa fa-tag"
    }), "*/", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      className: "jsx-558054126"
    }, " ", categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      className: "jsx-558054126" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_4_date_fns___["format"])(publishedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      className: "jsx-558054126"
    }, title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      className: "jsx-558054126" + " " + "overf"
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
      className: "jsx-558054126"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      className: "jsx-558054126" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      className: "jsx-558054126"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      className: "jsx-558054126" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      className: "jsx-558054126"
    }, " ", name))))));
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "558054126",
    css: ".bl-subhead.jsx-558054126{font-weight:300px;font-size:22px;color:#6b6c7a;}.card-list.jsx-558054126{list-style-type:none;width:37%;height:550px;overflow:hidden;position:relative;float:left;margin-left:20px;margin-top:20px;padding:40px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.card-list.jsx-558054126:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.card-list.jsx-558054126 h1.jsx-558054126{margin-top:1.5rem;font-size:22px;line-height:33px;color:#434456;font-weight:500;}.card-list.jsx-558054126 a.jsx-558054126{-webkit-text-decoration:none;text-decoration:none;}.card-list.jsx-558054126 p.jsx-558054126{font-size:12px;color:#6b6c7a;}.card-list.jsx-558054126 p.jsx-558054126 em.jsx-558054126{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.card-list.jsx-558054126 ul.jsx-558054126{list-style-type:none;}.card-list.jsx-558054126 .date.jsx-558054126{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.card-list.jsx-558054126 .text.jsx-558054126{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.card-list.jsx-558054126 .author.jsx-558054126{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.card-list.jsx-558054126 i.jsx-558054126{color:#B721FF;}.card-list.jsx-558054126 .cat.jsx-558054126{margin-bottom:1px;padding-top:20px;}.card-list.jsx-558054126 .cat.jsx-558054126 em.jsx-558054126{margin-left:3px;}.cat.jsx-558054126 div.jsx-558054126{background:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F1eddb5d7-73d9-4a9c-86be-f4d8c1cab45a_writing-room.svg);width:30px;height:30px;}.card-list.jsx-558054126 .name.jsx-558054126{padding-top:10px;margin-left:50px;}.card-list.jsx-558054126 h1.jsx-558054126:hover{color:#B721FF;}.image.jsx-558054126 img.jsx-558054126{width:10px;height:200px;object-fit:cover;margin-left:-40px;margin-top:-40px;}.overf.jsx-558054126{max-height:120px;overflow:hidden;text-overflow:ellipsis;text-align:justify;content:\"\";position:relative;color:#434456;font-size:15px;line-height:27px;}.overf.jsx-558054126:after{content:'';width:100%;height:100%;position:absolute;left:0;top:0;background:linear-gradient(transparent 50px,#f9f9f9);}footer.jsx-558054126{position:absolute;top:530px;left:0;width:100%;height:200px;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHZ0IsQUFHb0IsQUFLUyxBQW9Ca0IsQUFTeEIsQUFPRSxBQUdMLEFBSUMsQUFNSSxBQUlMLEFBT0EsQUFTSixBQVFHLEFBR0ksQUFJRixBQUcrRyxBQUs5RyxBQUlKLEFBR0YsQUFPSyxBQVdOLEFBU1EsV0F4RFAsQUE4QkMsQUFrQkYsR0F4Q1gsQUFtQkEsQ0F6RGUsQUFjRyxBQU9KLENBakJDLEFBeUNkLENBUWlCLEFBY0YsQ0EvR0gsQUFrQ0csQUFtREMsQUE4Q04sR0E5SEgsQUFpRFIsQ0FxRVksQ0FoRE8sQ0E4QkYsSUEyQlQsQ0F2RlIsQUFxQmlCLEVBNUROLEFBMkNJLENBVUMsQ0ExREgsQUFrQ0ssQUE2RU0sQ0FkeEIsQUEwQmtCLENBdENsQixBQStDWSxJQTVHZ0MsRUFtRHBCLEFBOEJOLEdBbkdELENBMkNDLEFBaUJBLENBbUVKLENBcElkLEFBMERlLEdBeEJBLEFBS2YsRUFvRk8sSUFaWSxHQU5GLEFBbUJYLEFBU2tCLENBL0hMLENBcURRLENBT0wsQ0FqQnRCLENBZGlCLEFBd0NHLENBa0RrQyxVQWIzQyxDQU5YLEVBbkdZLEVBaUI2QixBQVl6QyxFQWtHQSxDQW5FZSxBQVNFLEdBcUNDLENBckRsQixFQXBEYyxRQTREa0IsRUFTaEMsS0FxQ21CLEVBekdOLFlBZ0IyQixBQTBGckIsQUFXbkIsSUFwSGMsR0FnRkQsTUFyQmIsRUErQ3FCLEVBekdGLENBZ0ZMLFlBQ2IsRUF5QkQsR0F6RzRDLEVBY1Isc0NBYlUsMENBQ2UsK0JBYWdGLDBCQVpyRixnSEFDOUIsS0FhMUIsb0JBWitCLDhCQUNuQixlQUVUIiwiZmlsZSI6InBhZ2VzXFxibG9nLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcdXNlclxcY2hhbGxhcmlzLXRlY2gtd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zLyc7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvYWJvdXQuc2Nzcyc7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbmNvbnN0IEJsb2cgPSAoeyBwb3N0cyA9IFtdIH0pID0+IChcclxuICA8TGF5b3V0IHRpdGxlPVwiQmxvZyB8IENoYXJpc29sIFRlY2hub2xvZ2llc1wiPlxyXG4gICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxyXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cclxuXHJcbiAgICA8ZGl2IGlkPVwicGFuZWxcIiBkYXRhLXNsaWRlb3V0LWlnbm9yZT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJpY2luZ1wiPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy10ZXh0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nIG5vLXJldmVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBDaGFyaXNvbCBCbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10ZXh0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXRleHQgbm8tcmV2ZWFsIGJsLXN1YmhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBXZSBwdWJsaXNoIG9uIHRvcGljcyBzdWNoIGFzIHNvZnR3YXJlIGRldmVsb3BtZW50LCBkaWdpdGFsIHB1Ymxpc2hpbmcgYW5kIGNvbnRlbnQgc3RyYXRlZ3kuXHJcblx0XHRcdFx0ICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKCh7IF9pZCwgdGl0bGUgPSAnJywgbmFtZSA9ICdObyBuYW1lJywgcHVibGlzaGVkQXQgPSAnJywgY2F0ZWdvcmllcyA9IFtdLCBtYWluSW1hZ2UgPSB7fSwgYm9keSA9IFtdLCBhdXRob3JJbWFnZSA9IHt9LCBzbHVnID0gJycsIF91cGRhdGVkQXQgPSAnJyB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnICYmIDxsaSBrZXk9e19pZH0gY2xhc3NOYW1lPVwiY2FyZC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTQwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjU2V0PXtgXHJcbiAgICAgICAgICAgICR7dXJsRm9yKG1haW5JbWFnZSkud2lkdGgoMzIwKX0gMzIwdyxcclxuICAgICAgICAgICAgJHt1cmxGb3IobWFpbkltYWdlKS53aWR0aCg0ODApfSA0ODB3LFxyXG4gICAgICAgICAgICAke3VybEZvcihtYWluSW1hZ2UpLndpZHRoKDgwMCl9IDgwMHdcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzPXtgXHJcbiAgICAgICAgICAgIChtYXgtd2lkdGg6IDMyMHB4KSAyODBweCxcclxuICAgICAgICAgICAgKG1heC13aWR0aDogNDgwcHgpIDQ0MHB4LFxyXG4gICAgICAgICAgICA4MDBweFxyXG4gICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobWFpbkltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2AvcG9zdC8ke3NsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGFnXCI+PC9pPiovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZW0+IHtjYXRlZ29yaWVzfTwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXQocHVibGlzaGVkQXQsICdNTU1NIERELCBZWVlZJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17Ym9keVsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDkwMCwgaDogNjAwLCBmaXQ6ICdtaW4nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJZD17Y2xpZW50LmNsaWVudENvbmZpZy5wcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ9e2NsaWVudC5jbGllbnRDb25maWcuZGF0YXNldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDQwKS51cmwoKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeVxyXG5cdFx0XHRcdFx0PGVtPiB7bmFtZX08L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmJsLXN1YmhlYWQgeyBcclxuXHRcdGZvbnQtd2VpZ2h0OjMwMHB4O1xyXG5cdFx0Zm9udC1zaXplOjIycHg7XHJcblx0XHRjb2xvcjogIzZiNmM3YTtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgeyBcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuXHRcdHdpZHRoOjM3JTtcclxuXHRcdGhlaWdodDo1NTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tbGVmdDoyMHB4O1xyXG5cdG1hcmdpbi10b3A6MjBweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgxMCwgMTYsIDM0LCAwLjEpO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuMDIsIDAuMDEsIDAuNDcsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjAyLCAwLjAxLCAwLjQ3LCAxKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTIwcHg7XHJcblx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0XHJcbiAgICAgIH1cdCAgXHJcblx0ICAuY2FyZC1saXN0OmhvdmVye1xyXG5cdFx0ICBib3gtc2hhZG93OiAwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS9ndWlkbGluZS1wcmlzbWljJTJGN2Q1ZjIyMmMtMjQyYi00MGUwLWJjMmUtYjE5Yzg5ZjE4YjQyX2JnLWhlYWQtYmxvZ3Bvc3Qtd3JpdGluZy5zdmcpO1xyXG4gICAgXHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IGgxe1xyXG5cdFx0ICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIGNvbG9yOiAjNDM0NDU2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgYXtcclxuXHRcdCAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IHAge1xyXG5cdFx0ICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzZiNmM3YTtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgcCBlbXtcclxuXHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdCAgZm9udC1zaXplOjEycHg7XHJcblx0XHQgIGNvbG9yOiAjNDM0NDU2O1xyXG5cdFx0ICBmb250LXN0eWxlOm5vcm1hbDtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgdWx7XHJcblx0XHQgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuY2FyZC1saXN0IC5kYXRle1xyXG5cdFx0ICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIG1hcmdpbjogNXB4IDAgMDtcclxuICAgIGNvbG9yOiAjNmI2YzdhO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IC50ZXh0e1xyXG5cdFx0ICBmb250LXNpemU6IDE1cHg7XHJcblx0XHQgIGRpc3BsYXk6YmxvY2s7XHJcblx0XHQgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEyLjhweDtcclxuICAgIGNvbG9yOiAjNDM0NDU2O1xyXG5cdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcblx0ICB9XHJcblx0ICAuY2FyZC1saXN0IC5hdXRob3J7XHJcblx0XHQgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdCAgfVxyXG5cdCAgLmNhcmQtbGlzdCBpe1xyXG5cdFx0ICBjb2xvcjogI0I3MjFGRjtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgLmNhdHtcclxuXHRcdCAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG5cdFx0ICBwYWRkaW5nLXRvcDoyMHB4O1xyXG5cdCAgfVxyXG5cdCAgLmNhcmQtbGlzdCAuY2F0IGVte1xyXG5cdFx0ICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgfVxyXG4gICAgLmNhdCBkaXZ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS9ndWlkbGluZS1wcmlzbWljJTJGMWVkZGI1ZDctNzNkOS00YTljLTg2YmUtZjRkOGMxY2FiNDVhX3dyaXRpbmctcm9vbS5zdmcpO1xyXG4gICAgICB3aWR0aDozMHB4O1xyXG4gICAgICBoZWlnaHQ6MzBweDtcclxuICAgIH1cclxuXHQgIC5jYXJkLWxpc3QgLm5hbWV7XHJcblx0XHQgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cdFx0ICBtYXJnaW4tbGVmdDogNTBweDtcclxuXHQgIH1cclxuXHQgIC5jYXJkLWxpc3QgaDE6aG92ZXJ7XHJcblx0XHQgIGNvbG9yOiNCNzIxRkY7XHJcblx0ICB9XHJcblx0ICAuaW1hZ2UgaW1ne1xyXG5cdFx0ICB3aWR0aDogMTBweDtcclxuXHRcdCAgaGVpZ2h0OjIwMHB4O1xyXG5cdFx0ICBvYmplY3QtZml0OmNvdmVyO1xyXG5cdFx0ICBtYXJnaW4tbGVmdDotNDBweDtcclxuXHRcdCAgbWFyZ2luLXRvcDotNDBweDtcclxuXHQgIH1cclxuXHQgIC5vdmVyZntcclxuXHRcdCAgbWF4LWhlaWdodDoxMjBweDtcclxuXHRcdCAgb3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0ICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdCAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG5cdFx0ICBjb250ZW50OlwiXCI7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBjb2xvcjogIzQzNDQ1NjtcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDoyN3B4O1xyXG5cdCAgfVxyXG5cdCAgLm92ZXJmOmFmdGVye1xyXG5cdFx0ICBjb250ZW50OicnO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlOyAgICBcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgdG9wOjA7XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA1MHB4LCAjZjlmOWY5KTtcclxuXHQgIH1cclxuXHQgIGZvb3RlcntcdCBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTMwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0ICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9MYXlvdXQ+XHJcbilcclxuXHJcbkJsb2cuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwb3N0czogYXdhaXQgY2xpZW50LmZldGNoKGAqW190eXBlID09IFwicG9zdFwiXVswLi4xMDAwXSB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2Mpe1xyXG4gICAgICBfaWQsXHJcbiAgICAgIHRpdGxlLFxyXG5cdCAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuXHQgIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxyXG5cdCAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG5cdCAgbWFpbkltYWdlLFxyXG5cdCAgcHVibGlzaGVkQXQsXHJcblx0ICBib2R5LFxyXG4gICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxyXG4gICAgICBfdXBkYXRlZEF0XHJcbiAgICB9YClcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nIl19 */\n/*@ sourceURL=pages\\blog.js */"
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
//# sourceMappingURL=5.68e6824d02f791c0a8d6.hot-update.js.map