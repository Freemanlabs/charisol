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
    className: "jsx-956427491" + " " + "card-list"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-956427491" + " " + "list"
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
        lineNumber: 43
      },
      className: "jsx-956427491"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      className: "jsx-956427491" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-956427491" + " " + "fa fa-tag"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      className: "jsx-956427491"
    }, " ", categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      className: "jsx-956427491" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_4_date_fns___["format"])(_updatedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
      prefetch: true,
      href: "/post/".concat(slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      className: "jsx-956427491"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      className: "jsx-956427491"
    }, title))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      className: "jsx-956427491" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      className: "jsx-956427491"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      className: "jsx-956427491" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      className: "jsx-956427491"
    }, " ", name)));
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "956427491",
    css: ".bl-subhead.jsx-956427491{font-weight:300px;font-size:22px;color:#6b6c7a;}.card-list.jsx-956427491{width:30%;height:auto;overflow:hidden;position:relative;display:inline-block;padding:40px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.card-list.jsx-956427491:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.card-list.jsx-956427491 h1.jsx-956427491{margin-top:1.5rem;font-size:22px;line-height:33px;color:#434456;font-weight:500;}.card-list.jsx-956427491 a.jsx-956427491{-webkit-text-decoration:none;text-decoration:none;}.card-list.jsx-956427491 p.jsx-956427491{font-size:12px;color:#6b6c7a;}.card-list.jsx-956427491 p.jsx-956427491 em.jsx-956427491{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.card-list.jsx-956427491 ul.jsx-956427491{list-style-type:none;}.card-list.jsx-956427491 .date.jsx-956427491{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.card-list.jsx-956427491 .text.jsx-956427491{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.card-list.jsx-956427491 .author.jsx-956427491{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.card-list.jsx-956427491 i.jsx-956427491{color:#B721FF;}.card-list.jsx-956427491 .cat.jsx-956427491{margin-bottom:1px;}.card-list.jsx-956427491 .cat.jsx-956427491 em.jsx-956427491{margin-left:3px;}.card-list.jsx-956427491 .name.jsx-956427491{padding-top:10px;margin-left:50px;}.card-list.jsx-956427491 h1.jsx-956427491:hover{color:#B721FF;}ul.jsx-956427491 li.jsx-956427491{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFYSxBQUdvQixBQU1SLEFBaUJtQyxBQVN4QixBQU9FLEFBR0wsQUFJQyxBQU1JLEFBR0wsQUFPQSxBQVNKLEFBUUcsQUFHSSxBQUdGLEFBR0MsQUFJSixBQUdILFVBeEZELENBaUVFLEFBd0JaLEdBaEJBLEFBYUEsQ0FsRGUsQUFhRyxBQU9KLENBaEJDLEFBdUNmLENBR2tCLENBeEZMLEFBZ0NHLEFBa0RoQixHQTlCQSxDQTdDaUIsQ0FpRUUsTUE3Qm5CLEFBb0JpQixFQWhCRixDQVNDLENBdkRILEFBZ0NLLENBd0RsQixJQWpGbUIsQ0FleUIsRUFrRHBCLElBekJOLEFBZ0JBLEVBOURsQixBQXVEZSxHQXZCQSxBQUtmLE1BOUJzQixLQWlESyxDQU9MLENBaEJ0QixDQWRpQixBQXVDRyxhQWhFTixHQWMyQixBQVl6QyxHQThCZSxBQVNFLElBaEJqQixHQWhEbUIsT0F3RGEsRUFTaEMsU0FoRTRDLFVBYUosYUEyQ3hDLGlCQXZEOEMsT0FhVixtQ0FaeUIseURBQ0wsbUJBWXFGLDZGQVhuSCx5QkFDSyx5QkFZL0IsS0FYWSxlQUVUIiwiZmlsZSI6InBhZ2VzXFxibG9nLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcdXNlclxcbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge2Zvcm1hdH0gZnJvbSAnZGF0ZS1mbnMvJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvYWJvdXQuc2Nzcyc7XG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5cbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IEJsb2cgPSAoeyBwb3N0cyA9IFtdIH0pID0+IChcbjxMYXlvdXQgIHRpdGxlPVwiQmxvZyB8IENoYXJpc29sIFRlY2hub2xvZ2llc1wiPiBcbiAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX0gLz5cbiAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XG5cbiAgIDxkaXYgaWQ9XCJwYW5lbFwiICBkYXRhLXNsaWRlb3V0LWlnbm9yZT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByaWNpbmdcIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmcgbm8tcmV2ZWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVGhlIENoYXJpc29sIEJsb2dcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzdWItdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItdGV4dCBuby1yZXZlYWwgYmwtc3ViaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFdlIHB1Ymxpc2ggb24gdG9waWNzIHN1Y2ggYXMgc29mdHdhcmUgZGV2ZWxvcG1lbnQsIGRpZ2l0YWwgcHVibGlzaGluZyBhbmQgY29udGVudCBzdHJhdGVneS5cblx0XHRcdFx0ICA8L3A+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWxpc3RcIj5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cblx0XHRcdFx0e1xuICAgICAgICAgIHBvc3RzLm1hcCgoe19pZCwgdGl0bGUgPSAnJywgbmFtZSA9ICdObyBuYW1lJywgY2F0ZWdvcmllcyA9IFtdLCBhdXRob3JJbWFnZSA9IHt9LCBzbHVnID0gJycsIF91cGRhdGVkQXQgPSAnJ30pID0+XG4gICAgICAgICAgICAgIHNsdWcgJiYgPGxpIGtleT17X2lkfT5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2F0XCI+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtdGFnXCI+PC9pPlxuXHRcdFx0XHRcdDxlbT4ge2NhdGVnb3JpZXN9PC9lbT5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkYXRlXCI+XG5cdFx0XHRcdFx0e2Zvcm1hdChfdXBkYXRlZEF0LCAnTU1NTSBERCwgWVlZWScpfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2AvcG9zdC8ke3NsdWd9YH0+XG5cdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHQ8aDE+e3RpdGxlfTwvaDE+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L0xpbms+IFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDQwKS51cmwoKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5cblx0XHRcdFx0XHRCeVxuXHRcdFx0XHRcdDxlbT4ge25hbWV9PC9lbT5cblx0XHRcdFx0PC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcblx0XHRcdFx0fVxuICA8L3VsPiAgXG4gIDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuXHRcblx0XG5cdDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ibC1zdWJoZWFkIHsgXG5cdFx0Zm9udC13ZWlnaHQ6MzAwcHg7XG5cdFx0Zm9udC1zaXplOjIycHg7XG5cdFx0Y29sb3I6ICM2YjZjN2E7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgeyBcbiAgICAgICAgXG5cdFx0d2lkdGg6MzAlO1xuXHRcdGhlaWdodDphdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMTAsIDE2LCAzNCwgMC4xKTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC4wMiwgMC4wMSwgMC40NywgMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjAyLCAwLjAxLCAwLjQ3LCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMjBweDtcblx0Y3Vyc29yOnBvaW50ZXI7XG5cdFxuICAgICAgfVxuXHQgIC5jYXJkLWxpc3Q6aG92ZXJ7XG5cdFx0ICBib3gtc2hhZG93OiAwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcHJpc21pYy1pby5zMy5hbWF6b25hd3MuY29tL2d1aWRsaW5lLXByaXNtaWMlMkY3ZDVmMjIyYy0yNDJiLTQwZTAtYmMyZS1iMTljODlmMThiNDJfYmctaGVhZC1ibG9ncG9zdC13cml0aW5nLnN2Zyk7XG4gICAgXG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgaDF7XG5cdFx0ICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGNvbG9yOiAjNDM0NDU2O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgYXtcblx0XHQgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IHAge1xuXHRcdCAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNmI2YzdhO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IHAgZW17XG5cdFx0ICBmb250LXdlaWdodDogNjAwO1xuXHRcdCAgZm9udC1zaXplOjEycHg7XG5cdFx0ICBjb2xvcjogIzQzNDQ1Njtcblx0XHQgIGZvbnQtc3R5bGU6bm9ybWFsO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IHVse1xuXHRcdCAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG5cdCAgfVxuXHQgIC5jYXJkLWxpc3QgLmRhdGV7XG5cdFx0ICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgbWFyZ2luOiA1cHggMCAwO1xuICAgIGNvbG9yOiAjNmI2YzdhO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC50ZXh0e1xuXHRcdCAgZm9udC1zaXplOiAxNXB4O1xuXHRcdCAgZGlzcGxheTpibG9jaztcblx0XHQgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTIuOHB4O1xuICAgIGNvbG9yOiAjNDM0NDU2O1xuXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC5hdXRob3J7XG5cdFx0ICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6NDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IGl7XG5cdFx0ICBjb2xvcjogI0I3MjFGRjtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCAuY2F0e1xuXHRcdCAgbWFyZ2luLWJvdHRvbTogMXB4O1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC5jYXQgZW17XG5cdFx0ICBtYXJnaW4tbGVmdDogM3B4O1xuXHQgIH1cblx0ICAuY2FyZC1saXN0IC5uYW1le1xuXHRcdCAgcGFkZGluZy10b3A6IDEwcHg7XG5cdFx0ICBtYXJnaW4tbGVmdDogNTBweDtcblx0ICB9XG5cdCAgLmNhcmQtbGlzdCBoMTpob3Zlcntcblx0XHQgIGNvbG9yOiNCNzIxRkY7XG5cdCAgfVxuXHQgIHVsIGxpe1xuXHRcdCAgZmxvYXQ6bGVmdDtcblx0ICB9XG4gICAgYH08L3N0eWxlPlxuPC9MYXlvdXQ+XG4pXG5cbkJsb2cuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiB7IHBvc3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goYCpbX3R5cGUgPT0gXCJwb3N0XCJdWzAuLjEwMDBde1xuICAgICAgX2lkLFxuICAgICAgdGl0bGUsXG5cdCAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcblx0ICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcblx0ICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxuICAgICAgX3VwZGF0ZWRBdFxuICAgIH1gKSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2ciXX0= */\n/*@ sourceURL=pages\\blog.js */"
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
//# sourceMappingURL=5.548d5bb5876c34c874f2.hot-update.js.map