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
    className: "jsx-397177005"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    className: "jsx-397177005"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    className: "jsx-397177005" + " " + "pricing"
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
    className: "jsx-397177005" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    className: "jsx-397177005" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    className: "jsx-397177005" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    className: "jsx-397177005" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    className: "jsx-397177005" + " " + "post-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-397177005" + " " + "post-content-img"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
    src: urlFor(authorImage).width(50).url(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-397177005"
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    className: "jsx-397177005"
  }, title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-397177005" + " " + "fa fa-pencil"
  }), " Written by ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-397177005"
  }, name), " in ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-397177005"
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
    className: "jsx-397177005" + " " + "resp"
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
    className: "jsx-397177005" + " " + "margin"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    className: "jsx-397177005" + " " + "morepost"
  }, "More from Charisol"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    className: "jsx-397177005"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    className: "jsx-397177005"
  }, otherPosts.map(function (post) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
      key: post._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      className: "jsx-397177005" + " " + "blog-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      href: "/post/".concat(post.slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      className: "jsx-397177005"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      className: "jsx-397177005" + " " + "image"
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
      className: "jsx-397177005"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      className: "jsx-397177005" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      className: "jsx-397177005" + " " + "fa fa-pencil"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      className: "jsx-397177005"
    }, " ", post.categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      className: "jsx-397177005" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_6_date_fns__["format"])(post.publishedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      className: "jsx-397177005"
    }, post.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      className: "jsx-397177005"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      className: "jsx-397177005" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      className: "jsx-397177005"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      className: "jsx-397177005" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      className: "jsx-397177005"
    }, " ", name)))));
  })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    className: "jsx-397177005" + " " + "disqus"
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
    styleId: "397177005",
    css: ".post-content.jsx-397177005{text-align:center;}.text-content.jsx-397177005 span.jsx-397177005{font-weight:600;color:#B721FF;font-style:normal;}.post-content-img.jsx-397177005{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;}.post-content.jsx-397177005 i.jsx-397177005{color:#1EAEDB;}.resp.jsx-397177005{max-width:740px;width:100%;height:auto;display:block;text-align:justify;margin-left:auto;margin-right:auto;margin-top:20px;font-size:15px;line-height:27px;}.morepost.jsx-397177005{font-size:24px;font-weight:500;margin-left:20px;margin-top:50px;margin-bottom:-20px;}.margin.jsx-397177005{margin-left:-100px;margin-right:-100px;text-align:left;}.blog-list.jsx-397177005{list-style-type:none;width:310px;height:300px;overflow:hidden;position:relative;float:left;margin-left:20px;margin-top:20px;padding:10px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.blog-list.jsx-397177005:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.blog-list.jsx-397177005 h1.jsx-397177005{margin-top:1.5rem;font-size:19px;line-height:24px;color:#434456;font-weight:500;}.blog-list.jsx-397177005 a.jsx-397177005{-webkit-text-decoration:none;text-decoration:none;}.blog-list.jsx-397177005 p.jsx-397177005{font-size:12px;color:#6b6c7a;}.blog-list.jsx-397177005 p.jsx-397177005 em.jsx-397177005{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.blog-list.jsx-397177005 ul.jsx-397177005{list-style-type:none;}.blog-list.jsx-397177005 .date.jsx-397177005{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.blog-list.jsx-397177005 .text.jsx-397177005{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.blog-list.jsx-397177005 .author.jsx-397177005{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.blog-list.jsx-397177005 i.jsx-397177005{color:#fff;font-size:8px;display:inline-block;border-radius:50px;background-color:#B721FF;padding:0.5em 0.6em;}.blog-list.jsx-397177005 .cat.jsx-397177005{margin-bottom:1px;padding-top:20px;}.blog-list.jsx-397177005 .cat.jsx-397177005 em.jsx-397177005{margin-left:3px;}.blog-list.jsx-397177005 .name.jsx-397177005{padding-top:10px;margin-left:50px;}.blog-list.jsx-397177005 h1.jsx-397177005:hover{color:#B721FF;}.image.jsx-397177005 img.jsx-397177005{width:10px;height:140px;object-fit:cover;margin-left:-40px;margin-top:-40px;}footer.jsx-397177005{position:absolute;top:240px;left:-38px;width:100%;height:200px;background:transparent;}.disqus.jsx-397177005{margin-top:450px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKYSxBQUdzQixBQUlELEFBS0YsQUFPRCxBQUdDLEFBWUUsQUFPSSxBQUtFLEFBb0JvQixBQVN4QixBQU9FLEFBR0wsQUFJQyxBQU1JLEFBSUwsQUFPQSxBQVNKLEFBUUEsQUFRTyxBQUlGLEFBR0MsQUFJSixBQUdGLEFBUUssQUFRQSxXQTdDUCxBQVFJLEFBc0JELEdBcklLLEFBT2pCLEFBMkhGLENBNUdtQixBQW1ETCxBQWNHLEFBT0YsQ0FuR0MsQUFlTixBQW1FTSxBQThDaEIsQ0FHbUIsQUF1Qm5CLENBOUpFLEFBd0VhLEFBd0RHLEFBc0JSLENBaEhhLEVBS1osQUFpRFgsRUFxQmtCLENBOEJBLENBdEJLLEVBckdULENBbUlILENBcEVYLEFBcUJrQixDQW5HQyxDQUtDLEFBc0JBLEFBdURKLENBVUQsQ0FyREgsQUE2QkssQ0ErRGpCLENBUEEsSUE1R1ksQUFrQk8sQUF3QndCLEFBeUZoQyxFQXRDWSxBQThCSixJQXhEQSxBQWlCRixDQTVERCxBQTZFQyxDQXhCSCxDQTVGYixBQTJCa0IsQ0F0QkwsQ0ErREEsQUFLZCxBQTBFYSxHQW5JSSxFQWtCZixJQXlHZ0IsRUE5Q1EsQ0FyRFIsQUE0REcsQ0FqQnJCLEFBaUV1QixDQTlJVCxBQXNCUyxBQXlDUCxBQXdDRyxDQVFHLE9BcEdQLElBVmQsQUFxSUQsSUFuR1csQUFpQjZCLEFBWXhDLEdBK0JjLEFBU0UsQ0FqRmQsRUF3SEYsQ0F2REEsRUE1RWlCLENBb0dDLENBNUVKLE1BNERrQixFQVNoQyxRQTVGZSxDQXdCRixFQTRFYixRQTVEdUMsS0F2Q3pCLENBd0JELE9BMkRiLE1BMURrQixDQXhCSSxpQkFDcEIsQUF3QnlDLEFBY1Isd0NBYlUsMENBQ2UsNkJBYWlGLDRCQVp0RixnSEFDOUIsR0FhekIsc0JBWjhCLDhCQUNsQixlQUVWIiwiZmlsZSI6InBhZ2VzXFxwb3N0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcdXNlclxcY2hhbGxhcmlzLXRlY2gtd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3R5bGVzL2Fib3V0LnNjc3MnO1xyXG5pbXBvcnQgUmVhY3REaXNxdXNDb21tZW50cyBmcm9tICdyZWFjdC1kaXNxdXMtY29tbWVudHMnO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbmNvbnN0IHNlcmlhbGl6ZXJzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBpbWFnZTogKHsgbm9kZTogeyBhc3NldCB9IH0pID0+IChcclxuICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLG1hcmdpbjpcIjAgYXV0byAyMHB4XCIgfX1cclxuICAgICAgICAgIHNyY1NldD17YFxyXG4gICAgICAgICAgICAke3VybEZvcihhc3NldCkud2lkdGgoMzIwKX0gMzIwdyxcclxuICAgICAgICAgICAgJHt1cmxGb3IoYXNzZXQpLndpZHRoKDQ4MCl9IDQ4MHcsXHJcbiAgICAgICAgICAgICR7dXJsRm9yKGFzc2V0KS53aWR0aCg4MDApfSA4MDB3XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgc2l6ZXM9e2BcclxuICAgICAgICAgICAgKG1heC13aWR0aDogMzIwcHgpIDI4MHB4LFxyXG4gICAgICAgICAgICAobWF4LXdpZHRoOiA0ODBweCkgNDQwcHgsXHJcbiAgICAgICAgICAgIDgwMHB4XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgc3JjPXt1cmxGb3IoYXNzZXQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcGljdHVyZT5cclxuICAgIClcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDb21tYUpvaW5lciA9ICh7IGxpc3QgPSBbXSwgY29uanVjdGlvbiA9ICdhbmQnLCBzZXBhcmF0b3IgPSAnLCcgfSkgPT4gPEZyYWdtZW50PntsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IDxzcGFuIGtleT17aXRlbX0+e2l0ZW19e1xyXG4gIChsaXN0Lmxlbmd0aCA9PT0gMSkgPyAnLicgOlxyXG4gIChpbmRleCArIDIgPT09IGxpc3QubGVuZ3RoKSA/IGAgJHtjb25qdWN0aW9ufSBgIDpcclxuICAoaW5kZXggKyAxID09PSBsaXN0Lmxlbmd0aCkgPyAnLicgOiBgJHtzZXBhcmF0b3J9IGBcclxuICB9XHJcbiAgPC9zcGFuPilcclxufTwvRnJhZ21lbnQ+XHJcblxyXG5cclxuY29uc3QgQmxvZ1Bvc3QgPSAoe3RpdGxlID0gJ05vIHRpdGxlJywgbmFtZSA9ICdObyBuYW1lJywgcHVibGlzaGVkQXQ9JycsIG90aGVyUG9zdHM9W10sY2F0ZWdvcmllcyA9IFtdLCBtYWluSW1hZ2UgPSB7fSxhdXRob3JJbWFnZSA9IHt9LCBib2R5ID0gW10sIHNsdWcgPSAnJywgX3VwZGF0ZWRBdCA9ICcnIH0pID0+IChcclxuICA8TGF5b3V0ICB0aXRsZT17dGl0bGV9PiBcclxuICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxyXG4gICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxyXG5cdCAgPGRpdiBpZD1cInBhbmVsXCIgIGRhdGEtc2xpZGVvdXQtaWdub3JlPlxyXG5cdFx0ICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XHJcblx0XHQgIDxOYXZiYXIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctdGV4dC13cmFwcGVyXCI+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGVudFwiPlxyXG4gIFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRlbnQtaW1nXCI+PGltZyBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoNTApLnVybCgpfSAvPjwvZGl2PlxyXG4gIDxoMT57dGl0bGV9PC9oMT5cclxuICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+IFdyaXR0ZW4gYnkgPHNwYW4+e25hbWV9PC9zcGFuPiBpbiA8c3Bhbj57Y2F0ZWdvcmllcy5sZW5ndGggJiYgIDxDb21tYUpvaW5lciBsaXN0PXtjYXRlZ29yaWVzfSAvPn08L3NwYW4+IFVwZGF0ZWQgb24ge2Zvcm1hdChfdXBkYXRlZEF0LCAnTU1NTSBERCwgWVlZWScpfVxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVzcFwiPjxCbG9ja0NvbnRlbnRcclxuICAgIHNlcmlhbGl6ZXJzPXtzZXJpYWxpemVyc31cclxuICAgIGJsb2Nrcz17Ym9keX1cclxuICAgIGltYWdlT3B0aW9ucz17e3c6IDY2MCwgaDogNDM1LCBmaXQ6ICdtaW4nfX1cclxuICAgIHByb2plY3RJZD17Y2xpZW50LmNsaWVudENvbmZpZy5wcm9qZWN0SWR9XHJcbiAgICBkYXRhc2V0PXtjbGllbnQuY2xpZW50Q29uZmlnLmRhdGFzZXR9XHJcbiAgLz48L2Rpdj5cclxuICB7Lyo8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCI+PC9pPjxMaW5rIGhyZWY9XCIvYmxvZ1wiPjxhPkJhY2sgdG8gQmxvZzwvYT48L0xpbms+Ki99XHJcblxyXG4gIFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtb3JlcG9zdFwiPk1vcmUgZnJvbSBDaGFyaXNvbDwvZGl2PlxyXG4gIDxkaXY+XHJcbjx1bD5cclxuICAgIHsgXHJcbiAgICAgIG90aGVyUG9zdHMubWFwKHBvc3QgPT4gXHJcbiAgICAgICAgPGxpIGtleT17cG9zdC5faWR9IGNsYXNzTmFtZT1cImJsb2ctbGlzdFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17YC9wb3N0LyR7cG9zdC5zbHVnfWB9PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE0MCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1NldD17YFxyXG4gICAgICAgICAgICAke3VybEZvcihwb3N0Lm1haW5JbWFnZSkud2lkdGgoMzIwKX0gMzIwdyxcclxuICAgICAgICAgICAgJHt1cmxGb3IocG9zdC5tYWluSW1hZ2UpLndpZHRoKDQ4MCl9IDQ4MHcsXHJcbiAgICAgICAgICAgICR7dXJsRm9yKHBvc3QubWFpbkltYWdlKS53aWR0aCg4MDApfSA4MDB3XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplcz17YFxyXG4gICAgICAgICAgICAobWF4LXdpZHRoOiAzMjBweCkgMjgwcHgsXHJcbiAgICAgICAgICAgIChtYXgtd2lkdGg6IDQ4MHB4KSA0NDBweCxcclxuICAgICAgICAgICAgODAwcHhcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT4ge3Bvc3QuY2F0ZWdvcmllc308L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0KHBvc3QucHVibGlzaGVkQXQsICdNTU1NIERELCBZWVlZJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcblxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDQwKS51cmwoKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeVxyXG5cdFx0XHRcdFx0PGVtPiB7bmFtZX08L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICBcclxuICAgICAgICA8L2xpPlxyXG4gICAgICApIFxyXG4gICAgfVxyXG48L3VsPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZGlzcXVzXCI+XHJcbiAgPFJlYWN0RGlzcXVzQ29tbWVudHMgXHJcbiAgICAgICAgc2hvcnRuYW1lPVwiY2hhcmlzb2xcIlxyXG4gICAgICAgIGlkZW50aWZpZXI9e3NsdWd9XHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIHVybD17YGh0dHA6Ly93d3cuY2hhcmlzb2wuaW8vcG9zdC8ke3NsdWd9YH1cclxuICAgICAgICBjYXRlZ29yeV9pZD1cIlwiXHJcbiAgICAgICAgb25OZXdDb21tZW50PXt0aGlzLmhhbmRsZU5ld0NvbW1lbnR9Lz5cclxuXHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG48L2Rpdj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuXHRcclxuXHQ8c3R5bGUganN4PntgXHJcblx0LnBvc3QtY29udGVudHtcclxuXHRcdCAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcblx0ICBcclxuICAgICAgLnRleHQtY29udGVudCBzcGFue1xyXG5cdFx0ICBmb250LXdlaWdodDogNjAwO1xyXG5cdFx0ICBjb2xvcjogI0I3MjFGRjtcclxuXHRcdCAgZm9udC1zdHlsZTpub3JtYWw7XHJcblx0ICB9XHJcblx0ICAucG9zdC1jb250ZW50LWltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cdCAgfVxyXG5cdCAgLnBvc3QtY29udGVudCBpe1xyXG4gICAgY29sb3I6IzFFQUVEQjtcclxuICAgIH1cclxuXHQgIC5yZXNwe1xyXG4gIG1heC13aWR0aDogNzQwcHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdHRleHQtYWxpZ246anVzdGlmeTtcclxuXHRtYXJnaW4tbGVmdDphdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICBmb250LXNpemU6MTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDoyN3B4O1xyXG4gICAgfVxyXG4gICAgLm1vcmVwb3N0e1xyXG4gICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206LTIwcHg7XHJcbiAgICB9XHJcbiAgICAubWFyZ2lue1xyXG4gICAgICBtYXJnaW4tbGVmdDotMTAwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDotMTAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIH1cclxuICAgIC5ibG9nLWxpc3QgeyBcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgd2lkdGg6MzEwcHg7XHJcbiAgaGVpZ2h0OjMwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5tYXJnaW4tbGVmdDoyMHB4O1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDEwLCAxNiwgMzQsIDAuMSk7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuMDIsIDAuMDEsIDAuNDcsIDEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC4wMiwgMC4wMSwgMC40NywgMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTIwcHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5cclxuICAgIH1cdCAgXHJcbiAgLmJsb2ctbGlzdDpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTIwcHgsIDApO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vZ3VpZGxpbmUtcHJpc21pYyUyRjdkNWYyMjJjLTI0MmItNDBlMC1iYzJlLWIxOWM4OWYxOGI0Ml9iZy1oZWFkLWJsb2dwb3N0LXdyaXRpbmcuc3ZnKTtcclxuICBcclxuICB9XHJcbiAgLmJsb2ctbGlzdCBoMXtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICM0MzQ0NTY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgfVxyXG4gIC5ibG9nLWxpc3QgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM2YjZjN2E7XHJcbiAgfVxyXG4gIC5ibG9nLWxpc3QgcCBlbXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGNvbG9yOiAjNDM0NDU2O1xyXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XHJcbiAgfVxyXG4gIC5ibG9nLWxpc3QgdWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmJsb2ctbGlzdCAuZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICBtYXJnaW46IDVweCAwIDA7XHJcbiAgY29sb3I6ICM2YjZjN2E7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIC5ibG9nLWxpc3QgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjdweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMi44cHg7XHJcbiAgY29sb3I6ICM0MzQ0NTY7XHJcbnRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgfVxyXG4gIC5ibG9nLWxpc3QgLmF1dGhvcntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5ibG9nLWxpc3QgaXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOjhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuYm9yZGVyLXJhZGl1czogNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjojQjcyMUZGO1xyXG5wYWRkaW5nOiAwLjVlbSAwLjZlbTtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCAuY2F0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgcGFkZGluZy10b3A6MjBweDtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCAuY2F0IGVte1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCAubmFtZXtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5ibG9nLWxpc3QgaDE6aG92ZXJ7XHJcbiAgICBjb2xvcjojQjcyMUZGO1xyXG4gIH1cclxuICAuaW1hZ2UgaW1ne1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6MTQwcHg7XHJcbiAgICBvYmplY3QtZml0OmNvdmVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6LTQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOi00MHB4O1xyXG4gIH1cclxuICBcclxuICBmb290ZXJ7XHQgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjQwcHg7XHJcbiAgbGVmdDogLTM4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmRpc3F1c3tcclxuICAgIG1hcmdpbi10b3A6NDUwcHg7XHJcbiAgfVxyXG5cdCAgXHJcbiAgICBgfTwvc3R5bGU+XHJcblx0XHJcblx0XHJcbjwvTGF5b3V0PlxyXG5cclxuKVxyXG5cclxuQmxvZ1Bvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHJlcSkgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2goYCpbc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXsgXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxyXG4gICAgICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICAgICAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG5cdCAgcHVibGlzaGVkQXQsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgIF91cGRhdGVkQXQsXHJcbiAgICAgIFwic2x1Z1wiOiBzbHVnLmN1cnJlbnQsXHJcbiAgICAgIFwib3RoZXJQb3N0c1wiOiAqW190eXBlID09IFwicG9zdFwiXSB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2Mpe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICAgICAgIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxyXG4gICAgICAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gICAgICAgbWFpbkltYWdlLFxyXG4gICAgICAgcHVibGlzaGVkQXQsXHJcbiAgICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxyXG4gICAgICAgYm9keSxcclxuICAgICAgIF91cGRhdGVkQXQsfVxyXG4gICAgfWAsIHtzbHVnOiByZXEucXVlcnkuc2x1Z30pXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0Il19 */\n/*@ sourceURL=pages\\post.js */"
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
            return __WEBPACK_IMPORTED_MODULE_7__client___default.a.fetch("*[slug.current == $slug][0]{ \n      title,\n      \"name\": author->name,\n      \"categories\": categories[]->title,\n      \"authorImage\": author->image,\n\t  publishedAt,\n      body,\n      _updatedAt,\n      \"slug\": slug.current,\n      \"otherPosts\": *[_type == \"post\"] | order(publishedAt desc){\n        title,\n       \"name\": author->name,\n       \"categories\": categories[]->title,\n       \"authorImage\": author->image,\n       mainImage,\n       publishedAt,\n       \"slug\": slug.current,\n       body,\n       _updatedAt,}\n    }", {
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
//# sourceMappingURL=4.e751b26358f2e316c8ef.hot-update.js.map