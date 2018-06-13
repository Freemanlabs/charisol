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
    className: "jsx-956427491"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-956427491"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-956427491" + " " + "pricing"
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
    className: "jsx-956427491" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-956427491" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-956427491" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-956427491" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-956427491" + " " + "heading-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-956427491" + " " + "heading no-reveal"
  }, "The Charisol Blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-956427491" + " " + "sub-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-956427491" + " " + "sub-text no-reveal bl-subhead"
  }, "We publish on topics such as software development, digital publishing and content strategy.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-956427491"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-956427491"
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
      className: "jsx-956427491" + " " + "card-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-956427491" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      className: "jsx-956427491" + " " + "fa fa-tag"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      className: "jsx-956427491"
    }, " ", categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      className: "jsx-956427491" + " " + "date"
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
      className: "jsx-956427491"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      className: "jsx-956427491"
    }, title))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      className: "jsx-956427491" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      className: "jsx-956427491"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      className: "jsx-956427491" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      className: "jsx-956427491"
    }, " ", name)));
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "956427491",
    css: ".bl-subhead.jsx-956427491{font-weight:300px;font-size:22px;color:#6b6c7a;}.card-list.jsx-956427491{width:30%;height:auto;overflow:hidden;position:relative;display:inline-block;padding:40px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.card-list.jsx-956427491:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.card-list.jsx-956427491 h1.jsx-956427491{margin-top:1.5rem;font-size:22px;line-height:33px;color:#434456;font-weight:500;}.card-list.jsx-956427491 a.jsx-956427491{-webkit-text-decoration:none;text-decoration:none;}.card-list.jsx-956427491 p.jsx-956427491{font-size:12px;color:#6b6c7a;}.card-list.jsx-956427491 p.jsx-956427491 em.jsx-956427491{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.card-list.jsx-956427491 ul.jsx-956427491{list-style-type:none;}.card-list.jsx-956427491 .date.jsx-956427491{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.card-list.jsx-956427491 .text.jsx-956427491{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.card-list.jsx-956427491 .author.jsx-956427491{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.card-list.jsx-956427491 i.jsx-956427491{color:#B721FF;}.card-list.jsx-956427491 .cat.jsx-956427491{margin-bottom:1px;}.card-list.jsx-956427491 .cat.jsx-956427491 em.jsx-956427491{margin-left:3px;}.card-list.jsx-956427491 .name.jsx-956427491{padding-top:10px;margin-left:50px;}.card-list.jsx-956427491 h1.jsx-956427491:hover{color:#B721FF;}ul.jsx-956427491 li.jsx-956427491{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFYSxBQUdvQixBQU1SLEFBaUJtQyxBQVN4QixBQU9FLEFBR0wsQUFJQyxBQU1JLEFBR0wsQUFPQSxBQVNKLEFBUUcsQUFHSSxBQUdGLEFBR0MsQUFJSixBQUdILFVBeEZELENBaUVFLEFBd0JaLEdBaEJBLEFBYUEsQ0FsRGUsQUFhRyxBQU9KLENBaEJDLEFBdUNmLENBR2tCLENBeEZMLEFBZ0NHLEFBa0RoQixHQTlCQSxDQTdDaUIsQ0FpRUUsTUE3Qm5CLEFBb0JpQixFQWhCRixDQVNDLENBdkRILEFBZ0NLLENBd0RsQixJQWpGbUIsQ0FleUIsRUFrRHBCLElBekJOLEFBZ0JBLEVBOURsQixBQXVEZSxHQXZCQSxBQUtmLE1BOUJzQixLQWlESyxDQU9MLENBaEJ0QixDQWRpQixBQXVDRyxhQWhFTixHQWMyQixBQVl6QyxHQThCZSxBQVNFLElBaEJqQixHQWhEbUIsT0F3RGEsRUFTaEMsU0FoRTRDLFVBYUosYUEyQ3hDLGlCQXZEOEMsT0FhVixtQ0FaeUIseURBQ0wsbUJBWXFGLDZGQVhuSCx5QkFDSyx5QkFZL0IsS0FYWSxlQUVUIiwiZmlsZSI6InBhZ2VzXFxibG9nLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcdXNlclxcbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge2Zvcm1hdH0gZnJvbSAnZGF0ZS1mbnMvJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvYWJvdXQuc2Nzcyc7XG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5cbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IEJsb2cgPSAoeyBwb3N0cyA9IFtdIH0pID0+IChcbjxMYXlvdXQgIHRpdGxlPVwiQmxvZyB8IENoYXJpc29sIFRlY2hub2xvZ2llc1wiPiBcbiAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX0gLz5cbiAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XG5cbiAgIDxkaXYgaWQ9XCJwYW5lbFwiICBkYXRhLXNsaWRlb3V0LWlnbm9yZT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByaWNpbmdcIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmcgbm8tcmV2ZWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVGhlIENoYXJpc29sIEJsb2dcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzdWItdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItdGV4dCBuby1yZXZlYWwgYmwtc3ViaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFdlIHB1Ymxpc2ggb24gdG9waWNzIHN1Y2ggYXMgc29mdHdhcmUgZGV2ZWxvcG1lbnQsIGRpZ2l0YWwgcHVibGlzaGluZyBhbmQgY29udGVudCBzdHJhdGVneS5cblx0XHRcdFx0ICA8L3A+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiA+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XG5cdFx0XHRcdHtcbiAgICAgICAgICBwb3N0cy5tYXAoKHtfaWQsIHRpdGxlID0gJycsIG5hbWUgPSAnTm8gbmFtZScsIGNhdGVnb3JpZXMgPSBbXSwgYXV0aG9ySW1hZ2UgPSB7fSwgc2x1ZyA9ICcnLCBfdXBkYXRlZEF0ID0gJyd9KSA9PlxuICAgICAgICAgICAgICBzbHVnICYmIDxsaSBrZXk9e19pZH0gY2xhc3NOYW1lPVwiY2FyZC1saXN0XCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhdFwiPlxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXRhZ1wiPjwvaT5cblx0XHRcdFx0XHQ8ZW0+IHtjYXRlZ29yaWVzfTwvZW0+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuXHRcdFx0XHRcdHtmb3JtYXQoX3VwZGF0ZWRBdCwgJ01NTU0gREQsIFlZWVknKX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcbiAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgL3Bvc3QvJHtzbHVnfWB9PlxuXHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0PGgxPnt0aXRsZX08L2gxPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9MaW5rPiBcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKS53aWR0aCg0MCkudXJsKCl9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuYW1lXCI+XG5cdFx0XHRcdFx0Qnlcblx0XHRcdFx0XHQ8ZW0+IHtuYW1lfTwvZW0+XG5cdFx0XHRcdDwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApXG5cdFx0XHRcdH1cbiAgPC91bD4gIFxuICA8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cblx0XG5cdFxuXHQ8c3R5bGUganN4PntgXG4gICAgICAuYmwtc3ViaGVhZCB7IFxuXHRcdGZvbnQtd2VpZ2h0OjMwMHB4O1xuXHRcdGZvbnQtc2l6ZToyMnB4O1xuXHRcdGNvbG9yOiAjNmI2YzdhO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IHsgXG4gICAgICAgIFxuXHRcdHdpZHRoOjMwJTtcblx0XHRoZWlnaHQ6YXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDEwLCAxNiwgMzQsIDAuMSk7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuMDIsIDAuMDEsIDAuNDcsIDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC4wMiwgMC4wMSwgMC40NywgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTIwcHg7XG5cdGN1cnNvcjpwb2ludGVyO1xuXHRcbiAgICAgIH1cblx0ICAuY2FyZC1saXN0OmhvdmVye1xuXHRcdCAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS9ndWlkbGluZS1wcmlzbWljJTJGN2Q1ZjIyMmMtMjQyYi00MGUwLWJjMmUtYjE5Yzg5ZjE4YjQyX2JnLWhlYWQtYmxvZ3Bvc3Qtd3JpdGluZy5zdmcpO1xuICAgIFxuXHQgIH1cblx0ICAuY2FyZC1saXN0IGgxe1xuXHRcdCAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBjb2xvcjogIzQzNDQ1NjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IGF7XG5cdFx0ICB0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBwIHtcblx0XHQgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzZiNmM3YTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBwIGVte1xuXHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcblx0XHQgIGZvbnQtc2l6ZToxMnB4O1xuXHRcdCAgY29sb3I6ICM0MzQ0NTY7XG5cdFx0ICBmb250LXN0eWxlOm5vcm1hbDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCB1bHtcblx0XHQgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC5kYXRle1xuXHRcdCAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbjogNXB4IDAgMDtcbiAgICBjb2xvcjogIzZiNmM3YTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAudGV4dHtcblx0XHQgIGZvbnQtc2l6ZTogMTVweDtcblx0XHQgIGRpc3BsYXk6YmxvY2s7XG5cdFx0ICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEyLjhweDtcbiAgICBjb2xvcjogIzQzNDQ1Njtcblx0dGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAuYXV0aG9ye1xuXHRcdCAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OjQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBpe1xuXHRcdCAgY29sb3I6ICNCNzIxRkY7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLmNhdHtcblx0XHQgIG1hcmdpbi1ib3R0b206IDFweDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAuY2F0IGVte1xuXHRcdCAgbWFyZ2luLWxlZnQ6IDNweDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAubmFtZXtcblx0XHQgIHBhZGRpbmctdG9wOiAxMHB4O1xuXHRcdCAgbWFyZ2luLWxlZnQ6IDUwcHg7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgaDE6aG92ZXJ7XG5cdFx0ICBjb2xvcjojQjcyMUZGO1xuXHQgIH1cblx0ICB1bCBsaXtcblx0XHQgIGZsb2F0OmxlZnQ7XG5cdCAgfVxuICAgIGB9PC9zdHlsZT5cbjwvTGF5b3V0PlxuKVxuXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4geyBwb3N0czogYXdhaXQgY2xpZW50LmZldGNoKGAqW190eXBlID09IFwicG9zdFwiXVswLi4xMDAwXXtcbiAgICAgIF9pZCxcbiAgICAgIHRpdGxlLFxuXHQgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG5cdCAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG5cdCAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuICAgICAgXCJzbHVnXCI6IHNsdWcuY3VycmVudCxcbiAgICAgIF91cGRhdGVkQXRcbiAgICB9YCkgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nIl19 */\n/*@ sourceURL=pages\\blog.js */"
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
//# sourceMappingURL=5.4642ad8365358d081c5f.hot-update.js.map