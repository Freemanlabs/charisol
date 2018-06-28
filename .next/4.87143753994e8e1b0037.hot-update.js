webpackHotUpdate(4,{

/***/ "./pages/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sanity_block_content_to_react__ = __webpack_require__("./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sanity_block_content_to_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__sanity_block_content_to_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sanity_image_url__ = __webpack_require__("./node_modules/@sanity/image-url/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sanity_image_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__sanity_image_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns__ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client__ = __webpack_require__("./client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_about_scss__ = __webpack_require__("./styles/about.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_about_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_about_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_disqus_comments__ = __webpack_require__("./node_modules/react-disqus-comments/build/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_disqus_comments___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_disqus_comments__);


var _jsxFileName = "C:\\Users\\user\\challaris-tech-website\\pages\\post.js",
    _this = this;



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }











var builder = __WEBPACK_IMPORTED_MODULE_4__sanity_image_url___default()(__WEBPACK_IMPORTED_MODULE_7__client___default.a);

function urlFor(source) {
  return builder.image(source);
}

var serializers = {
  types: {
    image: function image(_ref) {
      var asset = _ref.node.asset;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("picture", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        style: {
          width: "100%",
          margin: "0 auto 20px"
        },
        srcSet: "\n            ".concat(urlFor(asset).width(320), " 320w,\n            ").concat(urlFor(asset).width(480), " 480w,\n            ").concat(urlFor(asset).width(800), " 800w\n          "),
        sizes: "\n            (max-width: 320px) 280px,\n            (max-width: 480px) 440px,\n            800px\n          ",
        src: urlFor(asset),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }));
    }
  }
};

var CommaJoiner = function CommaJoiner(_ref2) {
  var _ref2$list = _ref2.list,
      list = _ref2$list === void 0 ? [] : _ref2$list,
      _ref2$conjuction = _ref2.conjuction,
      conjuction = _ref2$conjuction === void 0 ? 'and' : _ref2$conjuction,
      _ref2$separator = _ref2.separator,
      separator = _ref2$separator === void 0 ? ',' : _ref2$separator;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, list.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
      key: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, item, list.length === 1 ? '.' : index + 2 === list.length ? " ".concat(conjuction, " ") : index + 1 === list.length ? '.' : "".concat(separator, " "));
  }));
};

var BlogPost = function BlogPost(_ref3) {
  var _ref3$title = _ref3.title,
      title = _ref3$title === void 0 ? 'No title' : _ref3$title,
      _ref3$name = _ref3.name,
      name = _ref3$name === void 0 ? 'No name' : _ref3$name,
      _ref3$publishedAt = _ref3.publishedAt,
      publishedAt = _ref3$publishedAt === void 0 ? '' : _ref3$publishedAt,
      _ref3$otherPosts = _ref3.otherPosts,
      otherPosts = _ref3$otherPosts === void 0 ? [] : _ref3$otherPosts,
      _ref3$categories = _ref3.categories,
      categories = _ref3$categories === void 0 ? [] : _ref3$categories,
      _ref3$mainImage = _ref3.mainImage,
      mainImage = _ref3$mainImage === void 0 ? {} : _ref3$mainImage,
      _ref3$authorImage = _ref3.authorImage,
      authorImage = _ref3$authorImage === void 0 ? {} : _ref3$authorImage,
      _ref3$body = _ref3.body,
      body = _ref3$body === void 0 ? [] : _ref3$body,
      _ref3$slug = _ref3.slug,
      slug = _ref3$slug === void 0 ? '' : _ref3$slug,
      _ref3$_updatedAt = _ref3._updatedAt,
      _updatedAt = _ref3$_updatedAt === void 0 ? '' : _ref3$_updatedAt;

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Layout__["a" /* default */], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: __WEBPACK_IMPORTED_MODULE_10__styles_about_scss___default.a
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: "jsx-3500183998"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    className: "jsx-3500183998"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    className: "jsx-3500183998" + " " + "pricing"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    className: "jsx-3500183998" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    className: "jsx-3500183998" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    className: "jsx-3500183998" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    className: "jsx-3500183998" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    className: "jsx-3500183998" + " " + "post-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-3500183998" + " " + "post-content-img"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
    src: urlFor(authorImage).width(50).url(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-3500183998"
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    className: "jsx-3500183998"
  }, title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-3500183998" + " " + "fa fa-pencil"
  }), " Written by ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-3500183998"
  }, name), " in ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-3500183998"
  }, categories.length && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CommaJoiner, {
    list: categories,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  })), " Updated on ", Object(__WEBPACK_IMPORTED_MODULE_6_date_fns__["format"])(_updatedAt, 'MMMM DD, YYYY'), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    className: "jsx-3500183998" + " " + "resp"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__sanity_block_content_to_react___default.a, {
    serializers: serializers,
    blocks: body,
    imageOptions: {
      w: 660,
      h: 435,
      fit: 'min'
    },
    projectId: __WEBPACK_IMPORTED_MODULE_7__client___default.a.clientConfig.projectId,
    dataset: __WEBPACK_IMPORTED_MODULE_7__client___default.a.clientConfig.dataset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    className: "jsx-3500183998" + " " + "margin"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    className: "jsx-3500183998" + " " + "morepost"
  }, "More from Charisol"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    className: "jsx-3500183998"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    className: "jsx-3500183998"
  }, otherPosts.map(function (post) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
      key: post._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      className: "jsx-3500183998" + " " + "blog-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      href: "/post/".concat(post.slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      className: "jsx-3500183998"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      className: "jsx-3500183998" + " " + "image"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      style: {
        width: "140%"
      },
      srcSet: "\n            ".concat(urlFor(post.mainImage).width(320), " 320w,\n            ").concat(urlFor(post.mainImage).width(480), " 480w,\n            ").concat(urlFor(post.mainImage).width(800), " 800w\n          "),
      sizes: "\n            (max-width: 320px) 280px,\n            (max-width: 480px) 440px,\n            800px\n          ",
      src: urlFor(post.mainImage),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      className: "jsx-3500183998"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      className: "jsx-3500183998" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      className: "jsx-3500183998" + " " + "fa fa-pencil"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      className: "jsx-3500183998"
    }, " ", post.categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      className: "jsx-3500183998" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_6_date_fns__["format"])(post.publishedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      className: "jsx-3500183998"
    }, post.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      className: "jsx-3500183998"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      className: "jsx-3500183998" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(post.authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      className: "jsx-3500183998"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      className: "jsx-3500183998" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      className: "jsx-3500183998"
    }, " ", post.name)))));
  })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    className: "jsx-3500183998" + " " + "disqus"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_disqus_comments___default.a, {
    shortname: "charisol",
    identifier: slug,
    title: title,
    url: "http://www.charisol.io/post/".concat(slug),
    category_id: "",
    onNewComment: _this.handleNewComment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }))))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "3500183998",
    css: ".post-content.jsx-3500183998{text-align:center;}.text-content.jsx-3500183998 span.jsx-3500183998{font-weight:600;color:#B721FF;font-style:normal;}.post-content-img.jsx-3500183998{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;}.post-content.jsx-3500183998 i.jsx-3500183998{color:#1EAEDB;}.resp.jsx-3500183998{max-width:740px;width:100%;height:auto;display:block;text-align:justify;margin-left:auto;margin-right:auto;margin-top:20px;font-size:15px;line-height:27px;}.morepost.jsx-3500183998{font-size:24px;font-weight:500;margin-left:20px;margin-top:50px;margin-bottom:-20px;}.margin.jsx-3500183998{margin-left:-100px;margin-right:-100px;text-align:left;}.blog-list.jsx-3500183998{list-style-type:none;width:310px;height:300px;overflow:hidden;position:relative;float:left;margin-left:20px;margin-top:20px;padding:10px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.blog-list.jsx-3500183998:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.blog-list.jsx-3500183998 h1.jsx-3500183998{margin-top:1.5rem;font-size:19px;line-height:24px;color:#434456;font-weight:500;}.blog-list.jsx-3500183998 a.jsx-3500183998{-webkit-text-decoration:none;text-decoration:none;}.blog-list.jsx-3500183998 p.jsx-3500183998{font-size:12px;color:#6b6c7a;}.blog-list.jsx-3500183998 p.jsx-3500183998 em.jsx-3500183998{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.blog-list.jsx-3500183998 ul.jsx-3500183998{list-style-type:none;}.blog-list.jsx-3500183998 .date.jsx-3500183998{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.blog-list.jsx-3500183998 .text.jsx-3500183998{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.blog-list.jsx-3500183998 .author.jsx-3500183998{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.blog-list.jsx-3500183998 i.jsx-3500183998{color:#fff;font-size:8px;display:inline-block;border-radius:50px;background-color:#B721FF;padding:0.5em 0.6em;}.blog-list.jsx-3500183998 .cat.jsx-3500183998{margin-bottom:1px;padding-top:20px;}.blog-list.jsx-3500183998 .cat.jsx-3500183998 em.jsx-3500183998{margin-left:3px;}.blog-list.jsx-3500183998 .name.jsx-3500183998{padding-top:10px;margin-left:50px;}.blog-list.jsx-3500183998 h1.jsx-3500183998:hover{color:#B721FF;}.image.jsx-3500183998 img.jsx-3500183998{width:10px;height:140px;object-fit:cover;margin-left:-40px;margin-top:-40px;}footer.jsx-3500183998{position:absolute;top:240px;left:-38px;width:100%;height:200px;background:transparent;}.disqus.jsx-3500183998{margin-top:450px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKYSxBQUdzQixBQUlELEFBS0YsQUFPRCxBQUdDLEFBWUUsQUFRSSxBQUtFLEFBb0JvQixBQVN4QixBQU9FLEFBR0wsQUFJQyxBQU1JLEFBSUwsQUFPQSxBQVNKLEFBUUEsQUFRTyxBQUlGLEFBR0MsQUFJSixBQUdGLEFBUUssQUFRQSxXQTdDUCxBQVFJLEFBc0JELEdBdElLLEFBT2pCLEFBNEhGLENBN0dtQixBQW9ETCxBQWNHLEFBT0YsQ0FwR0MsQUFlTixBQW9FTSxBQThDaEIsQ0FHbUIsQUF1Qm5CLENBL0pFLEFBeUVhLEFBd0RHLEFBc0JSLENBaEhhLEVBS1osQUFpRFgsRUFxQmtCLENBOEJBLENBdEJLLEVBdEdULENBb0lILENBcEVYLEFBcUJrQixDQXBHQyxDQUtDLEFBc0JBLEFBd0RKLENBVUQsQ0FyREgsQUE2QkssQ0ErRGpCLENBUEEsSUE3R1ksQUFtQk8sQUF3QndCLEFBeUZoQyxFQXRDWSxBQThCSixJQXhEQSxBQWlCRixDQTVERCxBQTZFQyxDQXhCSCxDQTdGYixBQTJCa0IsQ0F0QkwsQ0FnRUEsQUFLZCxBQTBFYSxHQXBJSSxFQW1CZixJQXlHZ0IsRUE5Q1EsQ0FyRFIsQUE0REcsQ0FqQnJCLEFBaUV1QixDQS9JVCxBQXNCUyxBQTBDUCxBQXdDRyxDQVFHLE9BckdQLElBVmQsQUFzSUQsSUFuR1csQUFpQjZCLEFBWXhDLEdBK0JjLEFBU0UsQ0FqRmQsRUF3SEYsQ0F2REEsRUE3RWlCLENBcUdDLENBNUVKLE1BNERrQixFQVNoQyxRQTdGZSxDQXlCRixFQTRFYixRQTVEdUMsS0F4Q3pCLENBeUJELE9BMkRiLE1BMURrQixDQXpCSSxpQkFDcEIsQUF5QnlDLEFBY1Isd0NBYlUsMENBQ2UsNkJBYWlGLDRCQVp0RixnSEFDOUIsR0FhekIsc0JBWjhCLDhCQUNsQixlQUVWIiwiZmlsZSI6InBhZ2VzXFxwb3N0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcdXNlclxcY2hhbGxhcmlzLXRlY2gtd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3R5bGVzL2Fib3V0LnNjc3MnO1xyXG5pbXBvcnQgUmVhY3REaXNxdXNDb21tZW50cyBmcm9tICdyZWFjdC1kaXNxdXMtY29tbWVudHMnO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbmNvbnN0IHNlcmlhbGl6ZXJzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBpbWFnZTogKHsgbm9kZTogeyBhc3NldCB9IH0pID0+IChcclxuICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLG1hcmdpbjpcIjAgYXV0byAyMHB4XCIgfX1cclxuICAgICAgICAgIHNyY1NldD17YFxyXG4gICAgICAgICAgICAke3VybEZvcihhc3NldCkud2lkdGgoMzIwKX0gMzIwdyxcclxuICAgICAgICAgICAgJHt1cmxGb3IoYXNzZXQpLndpZHRoKDQ4MCl9IDQ4MHcsXHJcbiAgICAgICAgICAgICR7dXJsRm9yKGFzc2V0KS53aWR0aCg4MDApfSA4MDB3XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgc2l6ZXM9e2BcclxuICAgICAgICAgICAgKG1heC13aWR0aDogMzIwcHgpIDI4MHB4LFxyXG4gICAgICAgICAgICAobWF4LXdpZHRoOiA0ODBweCkgNDQwcHgsXHJcbiAgICAgICAgICAgIDgwMHB4XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgc3JjPXt1cmxGb3IoYXNzZXQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcGljdHVyZT5cclxuICAgIClcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDb21tYUpvaW5lciA9ICh7IGxpc3QgPSBbXSwgY29uanVjdGlvbiA9ICdhbmQnLCBzZXBhcmF0b3IgPSAnLCcgfSkgPT4gPEZyYWdtZW50PntsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IDxzcGFuIGtleT17aXRlbX0+e2l0ZW19e1xyXG4gIChsaXN0Lmxlbmd0aCA9PT0gMSkgPyAnLicgOlxyXG4gIChpbmRleCArIDIgPT09IGxpc3QubGVuZ3RoKSA/IGAgJHtjb25qdWN0aW9ufSBgIDpcclxuICAoaW5kZXggKyAxID09PSBsaXN0Lmxlbmd0aCkgPyAnLicgOiBgJHtzZXBhcmF0b3J9IGBcclxuICB9XHJcbiAgPC9zcGFuPilcclxufTwvRnJhZ21lbnQ+XHJcblxyXG5cclxuY29uc3QgQmxvZ1Bvc3QgPSAoe3RpdGxlID0gJ05vIHRpdGxlJywgbmFtZSA9ICdObyBuYW1lJywgcHVibGlzaGVkQXQ9JycsIG90aGVyUG9zdHM9W10sY2F0ZWdvcmllcyA9IFtdLCBtYWluSW1hZ2UgPSB7fSxhdXRob3JJbWFnZSA9IHt9LCBib2R5ID0gW10sIHNsdWcgPSAnJywgX3VwZGF0ZWRBdCA9ICcnIH0pID0+IChcclxuICA8TGF5b3V0ICB0aXRsZT17dGl0bGV9PiBcclxuICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxyXG4gICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxyXG5cdCAgPGRpdiBpZD1cInBhbmVsXCIgIGRhdGEtc2xpZGVvdXQtaWdub3JlPlxyXG5cdFx0ICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XHJcblx0XHQgIDxOYXZiYXIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctdGV4dC13cmFwcGVyXCI+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGVudFwiPlxyXG4gIFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRlbnQtaW1nXCI+PGltZyBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoNTApLnVybCgpfSAvPjwvZGl2PlxyXG4gIDxoMT57dGl0bGV9PC9oMT5cclxuICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+IFdyaXR0ZW4gYnkgPHNwYW4+e25hbWV9PC9zcGFuPiBpbiA8c3Bhbj57Y2F0ZWdvcmllcy5sZW5ndGggJiYgIDxDb21tYUpvaW5lciBsaXN0PXtjYXRlZ29yaWVzfSAvPn08L3NwYW4+IFVwZGF0ZWQgb24ge2Zvcm1hdChfdXBkYXRlZEF0LCAnTU1NTSBERCwgWVlZWScpfVxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVzcFwiPjxCbG9ja0NvbnRlbnRcclxuICAgIHNlcmlhbGl6ZXJzPXtzZXJpYWxpemVyc31cclxuICAgIGJsb2Nrcz17Ym9keX1cclxuICAgIGltYWdlT3B0aW9ucz17e3c6IDY2MCwgaDogNDM1LCBmaXQ6ICdtaW4nfX1cclxuICAgIHByb2plY3RJZD17Y2xpZW50LmNsaWVudENvbmZpZy5wcm9qZWN0SWR9XHJcbiAgICBkYXRhc2V0PXtjbGllbnQuY2xpZW50Q29uZmlnLmRhdGFzZXR9XHJcbiAgLz48L2Rpdj5cclxuICB7Lyo8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCI+PC9pPjxMaW5rIGhyZWY9XCIvYmxvZ1wiPjxhPkJhY2sgdG8gQmxvZzwvYT48L0xpbms+Ki99XHJcblxyXG4gIFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtb3JlcG9zdFwiPk1vcmUgZnJvbSBDaGFyaXNvbDwvZGl2PlxyXG4gIDxkaXY+XHJcbjx1bD5cclxuICAgIHsgXHJcbiAgICAgIG90aGVyUG9zdHMubWFwKHBvc3QgPT4gXHJcbiAgICAgICAgPGxpIGtleT17cG9zdC5faWR9IGNsYXNzTmFtZT1cImJsb2ctbGlzdFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17YC9wb3N0LyR7cG9zdC5zbHVnfWB9PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE0MCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1NldD17YFxyXG4gICAgICAgICAgICAke3VybEZvcihwb3N0Lm1haW5JbWFnZSkud2lkdGgoMzIwKX0gMzIwdyxcclxuICAgICAgICAgICAgJHt1cmxGb3IocG9zdC5tYWluSW1hZ2UpLndpZHRoKDQ4MCl9IDQ4MHcsXHJcbiAgICAgICAgICAgICR7dXJsRm9yKHBvc3QubWFpbkltYWdlKS53aWR0aCg4MDApfSA4MDB3XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplcz17YFxyXG4gICAgICAgICAgICAobWF4LXdpZHRoOiAzMjBweCkgMjgwcHgsXHJcbiAgICAgICAgICAgIChtYXgtd2lkdGg6IDQ4MHB4KSA0NDBweCxcclxuICAgICAgICAgICAgODAwcHhcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT4ge3Bvc3QuY2F0ZWdvcmllc308L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0KHBvc3QucHVibGlzaGVkQXQsICdNTU1NIERELCBZWVlZJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcblxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IocG9zdC5hdXRob3JJbWFnZSkud2lkdGgoNDApLnVybCgpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5XHJcblx0XHRcdFx0XHQ8ZW0+IHtwb3N0Lm5hbWV9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgXHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSBcclxuICAgIH1cclxuPC91bD5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImRpc3F1c1wiPlxyXG4gIDxSZWFjdERpc3F1c0NvbW1lbnRzIFxyXG4gICAgICAgIHNob3J0bmFtZT1cImNoYXJpc29sXCJcclxuICAgICAgICBpZGVudGlmaWVyPXtzbHVnfVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICB1cmw9e2BodHRwOi8vd3d3LmNoYXJpc29sLmlvL3Bvc3QvJHtzbHVnfWB9XHJcbiAgICAgICAgY2F0ZWdvcnlfaWQ9XCJcIlxyXG4gICAgICAgIG9uTmV3Q29tbWVudD17dGhpcy5oYW5kbGVOZXdDb21tZW50fS8+XHJcblxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuPC9kaXY+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcblx0XHJcblx0PHN0eWxlIGpzeD57YFxyXG5cdC5wb3N0LWNvbnRlbnR7XHJcblx0XHQgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG5cdCAgXHJcbiAgICAgIC50ZXh0LWNvbnRlbnQgc3BhbntcclxuXHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdCAgY29sb3I6ICNCNzIxRkY7XHJcblx0XHQgIGZvbnQtc3R5bGU6bm9ybWFsO1xyXG5cdCAgfVxyXG5cdCAgLnBvc3QtY29udGVudC1pbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHQgIH1cclxuXHQgIC5wb3N0LWNvbnRlbnQgaXtcclxuICAgIGNvbG9yOiMxRUFFREI7XHJcbiAgICB9XHJcblx0ICAucmVzcHtcclxuICBtYXgtd2lkdGg6IDc0MHB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblx0ZGlzcGxheTpibG9jaztcclxuXHR0ZXh0LWFsaWduOmp1c3RpZnk7XHJcblx0bWFyZ2luLWxlZnQ6YXV0bztcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6MjdweDtcclxuICAgIH1cclxuICAgIC5tb3JlcG9zdHtcclxuICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgICAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOi0yMHB4O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5tYXJnaW57XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0Oi0xMDBweDtcclxuICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmJsb2ctbGlzdCB7IFxyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICB3aWR0aDozMTBweDtcclxuICBoZWlnaHQ6MzAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbm1hcmdpbi1sZWZ0OjIwcHg7XHJcbm1hcmdpbi10b3A6MjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMTAsIDE2LCAzNCwgMC4xKTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC4wMiwgMC4wMSwgMC40NywgMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjAyLCAwLjAxLCAwLjQ3LCAxKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMjBweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcblxyXG4gICAgfVx0ICBcclxuICAuYmxvZy1saXN0OmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS9ndWlkbGluZS1wcmlzbWljJTJGN2Q1ZjIyMmMtMjQyYi00MGUwLWJjMmUtYjE5Yzg5ZjE4YjQyX2JnLWhlYWQtYmxvZ3Bvc3Qtd3JpdGluZy5zdmcpO1xyXG4gIFxyXG4gIH1cclxuICAuYmxvZy1saXN0IGgxe1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzQzNDQ1NjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuYmxvZy1saXN0IGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzZiNmM3YTtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCBwIGVte1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgY29sb3I6ICM0MzQ0NTY7XHJcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCB1bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG4gIH1cclxuICBcclxuICAuYmxvZy1saXN0IC5kYXRle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMDtcclxuICBjb2xvcjogIzZiNmM3YTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEyLjhweDtcclxuICBjb2xvcjogIzQzNDQ1NjtcclxudGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCAuYXV0aG9ye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCBpe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6OHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNCNzIxRkY7XHJcbnBhZGRpbmc6IDAuNWVtIDAuNmVtO1xyXG4gIH1cclxuICAuYmxvZy1saXN0IC5jYXR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gIH1cclxuICAuYmxvZy1saXN0IC5jYXQgZW17XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIH1cclxuICAuYmxvZy1saXN0IC5uYW1le1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCBoMTpob3ZlcntcclxuICAgIGNvbG9yOiNCNzIxRkY7XHJcbiAgfVxyXG4gIC5pbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDoxNDBweDtcclxuICAgIG9iamVjdC1maXQ6Y292ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDotNDBweDtcclxuICAgIG1hcmdpbi10b3A6LTQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlcntcdCBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNDBweDtcclxuICBsZWZ0OiAtMzhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuZGlzcXVze1xyXG4gICAgbWFyZ2luLXRvcDo0NTBweDtcclxuICB9XHJcblx0ICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHRcclxuXHRcclxuPC9MYXlvdXQ+XHJcblxyXG4pXHJcblxyXG5CbG9nUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocmVxKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChgKltzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBdeyBcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxyXG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcblx0ICBwdWJsaXNoZWRBdCxcclxuICAgICAgYm9keSxcclxuICAgICAgX3VwZGF0ZWRBdCxcclxuICAgICAgXCJzbHVnXCI6IHNsdWcuY3VycmVudCxcclxuICAgICAgXCJvdGhlclBvc3RzXCI6ICpbX3R5cGUgPT0gXCJwb3N0XCJdWzAuLjJdIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYyl7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxyXG4gICAgICAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgICAgICBtYWluSW1hZ2UsXHJcbiAgICAgICBwdWJsaXNoZWRBdCxcclxuICAgICAgIFwic2x1Z1wiOiBzbHVnLmN1cnJlbnQsXHJcbiAgICAgICBib2R5LFxyXG4gICAgICAgX3VwZGF0ZWRBdCx9XHJcbiAgICB9YCwge3NsdWc6IHJlcS5xdWVyeS5zbHVnfSlcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3QiXX0= */\n/*@ sourceURL=pages\\post.js */"
  }));
};

BlogPost.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(req) {
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_7__client___default.a.fetch("*[slug.current == $slug][0]{ \n      title,\n      \"name\": author->name,\n      \"categories\": categories[]->title,\n      \"authorImage\": author->image,\n\t  publishedAt,\n      body,\n      _updatedAt,\n      \"slug\": slug.current,\n      \"otherPosts\": *[_type == \"post\"][0..2] | order(publishedAt desc){\n        title,\n       \"name\": author->name,\n       \"categories\": categories[]->title,\n       \"authorImage\": author->image,\n       mainImage,\n       publishedAt,\n       \"slug\": slug.current,\n       body,\n       _updatedAt,}\n    }", {
              slug: req.query.slug
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

var _default = BlogPost;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(builder, "builder", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
  reactHotLoader.register(urlFor, "urlFor", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
  reactHotLoader.register(serializers, "serializers", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
  reactHotLoader.register(CommaJoiner, "CommaJoiner", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
  reactHotLoader.register(BlogPost, "BlogPost", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\user\\challaris-tech-website\\pages\\post.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.87143753994e8e1b0037.hot-update.js.map