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
    className: "jsx-1192197830"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "panel",
    "data-slideout-ignore": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    className: "jsx-1192197830"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    className: "jsx-1192197830" + " " + "pricing"
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
    className: "jsx-1192197830" + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    className: "jsx-1192197830" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    className: "jsx-1192197830" + " " + "pricing-text-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    className: "jsx-1192197830" + " " + "text-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    className: "jsx-1192197830" + " " + "post-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-1192197830" + " " + "post-content-img"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
    src: urlFor(authorImage).width(50).url(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-1192197830"
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    className: "jsx-1192197830"
  }, title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-1192197830" + " " + "fa fa-pencil"
  }), " Written by ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-1192197830"
  }, name), " in ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-1192197830"
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
    className: "jsx-1192197830" + " " + "resp"
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
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    className: "jsx-1192197830"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    className: "jsx-1192197830" + " " + "margin"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    className: "jsx-1192197830" + " " + "morepost"
  }, "More from Charisol"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    className: "jsx-1192197830"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    className: "jsx-1192197830"
  }, otherPosts.map(function (post) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
      key: post._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      className: "jsx-1192197830" + " " + "blog-list"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      href: "/post/".concat(post.slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      className: "jsx-1192197830"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      className: "jsx-1192197830" + " " + "image"
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
      className: "jsx-1192197830"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      className: "jsx-1192197830" + " " + "cat"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      className: "jsx-1192197830" + " " + "fa fa-pencil"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      className: "jsx-1192197830"
    }, " ", post.categories)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      className: "jsx-1192197830" + " " + "date"
    }, Object(__WEBPACK_IMPORTED_MODULE_6_date_fns__["format"])(post.publishedAt, 'MMMM DD, YYYY')), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      className: "jsx-1192197830"
    }, post.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      className: "jsx-1192197830"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      className: "jsx-1192197830" + " " + "author"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: urlFor(post.authorImage).width(40).url(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      className: "jsx-1192197830"
    })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      className: "jsx-1192197830" + " " + "name"
    }, "By", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      className: "jsx-1192197830"
    }, " ", post.name)))));
  })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    className: "jsx-1192197830" + " " + "disqus"
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
    styleId: "1192197830",
    css: ".post-content.jsx-1192197830{text-align:center;}.text-content.jsx-1192197830 span.jsx-1192197830{font-weight:600;color:#B721FF;font-style:normal;}.post-content-img.jsx-1192197830{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;}.post-content.jsx-1192197830 i.jsx-1192197830{color:#1EAEDB;}.resp.jsx-1192197830{max-width:740px;width:100%;height:auto;display:block;text-align:justify;margin-left:auto;margin-right:auto;margin-top:20px;font-size:15px;line-height:27px;}.morepost.jsx-1192197830{font-size:24px;font-weight:500;margin-left:20px;margin-top:50px;margin-bottom:-20px;color:#B721FF;}.margin.jsx-1192197830{margin-left:-100px;margin-right:-100px;text-align:left;}.blog-list.jsx-1192197830{list-style-type:none;width:310px;height:300px;overflow:hidden;position:relative;float:left;margin-left:20px;margin-top:20px;padding:10px;border-radius:2px;box-shadow:0 20px 20px rgba(0,0,0,0.04);box-shadow:0 2px 2px 0 rgba(10,16,34,0.1);-moz-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);-webkit-transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);transition:all 250ms cubic-bezier(0.02,0.01,0.47,1);background-color:#f9f9f9;background-position:0px -20px;cursor:pointer;}.blog-list.jsx-1192197830:hover{box-shadow:0 30px 30px rgba(0,0,0,0.1);-webkit-transform:translate3D(0,-20px,0);-moz-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);-webkit-transform:translate3D(0,-20px,0);-ms-transform:translate3D(0,-20px,0);transform:translate3D(0,-20px,0);background-image:url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);}.blog-list.jsx-1192197830 h1.jsx-1192197830{margin-top:1.5rem;font-size:19px;line-height:24px;color:#434456;font-weight:500;}.blog-list.jsx-1192197830 a.jsx-1192197830{-webkit-text-decoration:none;text-decoration:none;}.blog-list.jsx-1192197830 p.jsx-1192197830{font-size:12px;color:#6b6c7a;}.blog-list.jsx-1192197830 p.jsx-1192197830 em.jsx-1192197830{font-weight:600;font-size:12px;color:#434456;font-style:normal;}.blog-list.jsx-1192197830 ul.jsx-1192197830{list-style-type:none;}.blog-list.jsx-1192197830 .date.jsx-1192197830{font-size:12px;line-height:12px;margin:5px 0 0;color:#6b6c7a;text-transform:capitalize;}.blog-list.jsx-1192197830 .text.jsx-1192197830{font-size:15px;display:block;font-weight:400;line-height:27px;margin-bottom:12.8px;color:#434456;text-rendering:optimizeLegibility;}.blog-list.jsx-1192197830 .author.jsx-1192197830{float:left;height:40px;border-radius:50%;background-color:white;margin-bottom:12px;overflow:hidden;}.blog-list.jsx-1192197830 i.jsx-1192197830{color:#fff;font-size:8px;display:inline-block;border-radius:50px;background-color:#B721FF;padding:0.5em 0.6em;}.blog-list.jsx-1192197830 .cat.jsx-1192197830{margin-bottom:1px;padding-top:20px;}.blog-list.jsx-1192197830 .cat.jsx-1192197830 em.jsx-1192197830{margin-left:3px;}.blog-list.jsx-1192197830 .name.jsx-1192197830{padding-top:10px;margin-left:50px;}.blog-list.jsx-1192197830 h1.jsx-1192197830:hover{color:#B721FF;}.image.jsx-1192197830 img.jsx-1192197830{width:10px;height:140px;object-fit:cover;margin-left:-40px;margin-top:-40px;}footer.jsx-1192197830{position:absolute;top:240px;left:-38px;width:100%;height:200px;background:transparent;}.disqus.jsx-1192197830{margin-top:450px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKYSxBQUdzQixBQUlELEFBS0YsQUFPRCxBQUdDLEFBWUUsQUFRSSxBQUtFLEFBb0JvQixBQVN4QixBQU9FLEFBR0wsQUFJQyxBQU1JLEFBSUwsQUFPQSxBQVNKLEFBUUEsQUFRTyxBQUlGLEFBR0MsQUFJSixBQUdGLEFBUUssQUFRQSxXQTdDUCxBQVFJLEFBc0JELEdBdElLLEFBT2pCLEFBNEhGLENBN0dtQixBQW9ETCxBQWNHLEFBT0YsQ0FwR0MsQUFlTixBQW9FTSxBQThDaEIsQ0FHbUIsQUF1Qm5CLENBL0pFLEFBeUVhLEFBd0RHLEFBc0JSLENBaEhhLEVBS1osQUFpRFgsRUFxQmtCLENBOEJBLENBdEJLLEVBdEdULENBb0lILENBcEVYLEFBcUJrQixDQXBHQyxDQUtDLEFBc0JBLEFBd0RKLENBVUQsQ0FyREgsQUE2QkssQ0ErRGpCLENBUEEsSUE3R1ksQUFtQk8sQUF3QndCLEFBeUZoQyxFQXRDWSxBQThCSixJQXhEQSxBQWlCRixDQTVERCxBQTZFQyxDQXhCSCxDQTdGYixBQTJCa0IsQ0F0QkwsQ0FnRUEsQUFLZCxBQTBFYSxHQXBJSSxFQW1CZixJQXlHZ0IsRUE5Q1EsQ0FyRFIsQUE0REcsQ0FqQnJCLEFBaUV1QixDQS9JVCxBQXNCUyxBQTBDUCxBQXdDRyxDQVFHLE9BckdQLElBVmQsQUFzSUQsSUFuR1csQUFpQjZCLEFBWXhDLEdBK0JjLEFBU0UsQ0FsRkMsRUF5SGpCLENBdkRBLEVBN0VpQixDQXFHQyxDQTVFSixNQTREa0IsQ0F6RTlCLENBa0ZGLFFBN0ZlLENBeUJGLEVBNEViLFFBNUR1QyxLQXhDekIsQ0F5QkQsT0EyRGIsTUExRGtCLENBekJJLGlCQUNwQixBQXlCeUMsQUFjUix3Q0FiVSwwQ0FDZSw2QkFhaUYsNEJBWnRGLGdIQUM5QixHQWF6QixzQkFaOEIsOEJBQ2xCLGVBRVYiLCJmaWxlIjoicGFnZXNcXHBvc3QuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFx1c2VyXFxjaGFsbGFyaXMtdGVjaC13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvYWJvdXQuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdERpc3F1c0NvbW1lbnRzIGZyb20gJ3JlYWN0LWRpc3F1cy1jb21tZW50cyc7XHJcblxyXG5jb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudClcclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSlcclxufVxyXG5cclxuY29uc3Qgc2VyaWFsaXplcnMgPSB7XHJcbiAgdHlwZXM6IHtcclxuICAgIGltYWdlOiAoeyBub2RlOiB7IGFzc2V0IH0gfSkgPT4gKFxyXG4gICAgICA8cGljdHVyZT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsbWFyZ2luOlwiMCBhdXRvIDIwcHhcIiB9fVxyXG4gICAgICAgICAgc3JjU2V0PXtgXHJcbiAgICAgICAgICAgICR7dXJsRm9yKGFzc2V0KS53aWR0aCgzMjApfSAzMjB3LFxyXG4gICAgICAgICAgICAke3VybEZvcihhc3NldCkud2lkdGgoNDgwKX0gNDgwdyxcclxuICAgICAgICAgICAgJHt1cmxGb3IoYXNzZXQpLndpZHRoKDgwMCl9IDgwMHdcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICBzaXplcz17YFxyXG4gICAgICAgICAgICAobWF4LXdpZHRoOiAzMjBweCkgMjgwcHgsXHJcbiAgICAgICAgICAgIChtYXgtd2lkdGg6IDQ4MHB4KSA0NDBweCxcclxuICAgICAgICAgICAgODAwcHhcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICBzcmM9e3VybEZvcihhc3NldCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9waWN0dXJlPlxyXG4gICAgKVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENvbW1hSm9pbmVyID0gKHsgbGlzdCA9IFtdLCBjb25qdWN0aW9uID0gJ2FuZCcsIHNlcGFyYXRvciA9ICcsJyB9KSA9PiA8RnJhZ21lbnQ+e2xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gPHNwYW4ga2V5PXtpdGVtfT57aXRlbX17XHJcbiAgKGxpc3QubGVuZ3RoID09PSAxKSA/ICcuJyA6XHJcbiAgKGluZGV4ICsgMiA9PT0gbGlzdC5sZW5ndGgpID8gYCAke2Nvbmp1Y3Rpb259IGAgOlxyXG4gIChpbmRleCArIDEgPT09IGxpc3QubGVuZ3RoKSA/ICcuJyA6IGAke3NlcGFyYXRvcn0gYFxyXG4gIH1cclxuICA8L3NwYW4+KVxyXG59PC9GcmFnbWVudD5cclxuXHJcblxyXG5jb25zdCBCbG9nUG9zdCA9ICh7dGl0bGUgPSAnTm8gdGl0bGUnLCBuYW1lID0gJ05vIG5hbWUnLCBwdWJsaXNoZWRBdD0nJywgb3RoZXJQb3N0cz1bXSxjYXRlZ29yaWVzID0gW10sIG1haW5JbWFnZSA9IHt9LGF1dGhvckltYWdlID0ge30sIGJvZHkgPSBbXSwgc2x1ZyA9ICcnLCBfdXBkYXRlZEF0ID0gJycgfSkgPT4gKFxyXG4gIDxMYXlvdXQgIHRpdGxlPXt0aXRsZX0+IFxyXG4gICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XHJcbiAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XHJcblx0ICA8ZGl2IGlkPVwicGFuZWxcIiAgZGF0YS1zbGlkZW91dC1pZ25vcmU+XHJcblx0XHQgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByaWNpbmdcIj5cclxuXHRcdCAgPE5hdmJhciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuXHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy10ZXh0LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250ZW50XCI+XHJcbiAgXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRlbnRcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGVudC1pbWdcIj48aW1nIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKS53aWR0aCg1MCkudXJsKCl9IC8+PC9kaXY+XHJcbiAgPGgxPnt0aXRsZX08L2gxPlxyXG4gIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT4gV3JpdHRlbiBieSA8c3Bhbj57bmFtZX08L3NwYW4+IGluIDxzcGFuPntjYXRlZ29yaWVzLmxlbmd0aCAmJiAgPENvbW1hSm9pbmVyIGxpc3Q9e2NhdGVnb3JpZXN9IC8+fTwvc3Bhbj4gVXBkYXRlZCBvbiB7Zm9ybWF0KF91cGRhdGVkQXQsICdNTU1NIERELCBZWVlZJyl9XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyZXNwXCI+PEJsb2NrQ29udGVudFxyXG4gICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxyXG4gICAgYmxvY2tzPXtib2R5fVxyXG4gICAgaW1hZ2VPcHRpb25zPXt7dzogNjYwLCBoOiA0MzUsIGZpdDogJ21pbid9fVxyXG4gICAgcHJvamVjdElkPXtjbGllbnQuY2xpZW50Q29uZmlnLnByb2plY3RJZH1cclxuICAgIGRhdGFzZXQ9e2NsaWVudC5jbGllbnRDb25maWcuZGF0YXNldH1cclxuICAvPjwvZGl2PlxyXG4gIHsvKjxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LWxlZnRcIj48L2k+PExpbmsgaHJlZj1cIi9ibG9nXCI+PGE+QmFjayB0byBCbG9nPC9hPjwvTGluaz4qL31cclxuICA8aHI+PC9ocj5cclxuICBcclxuICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibW9yZXBvc3RcIj5Nb3JlIGZyb20gQ2hhcmlzb2w8L2Rpdj5cclxuICA8ZGl2PlxyXG48dWw+XHJcbiAgICB7IFxyXG4gICAgICBvdGhlclBvc3RzLm1hcChwb3N0ID0+IFxyXG4gICAgICAgIDxsaSBrZXk9e3Bvc3QuX2lkfSBjbGFzc05hbWU9XCJibG9nLWxpc3RcIj5cclxuICAgICAgICAgIDxhIGhyZWY9e2AvcG9zdC8ke3Bvc3Quc2x1Z31gfT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNTZXQ9e2BcclxuICAgICAgICAgICAgJHt1cmxGb3IocG9zdC5tYWluSW1hZ2UpLndpZHRoKDMyMCl9IDMyMHcsXHJcbiAgICAgICAgICAgICR7dXJsRm9yKHBvc3QubWFpbkltYWdlKS53aWR0aCg0ODApfSA0ODB3LFxyXG4gICAgICAgICAgICAke3VybEZvcihwb3N0Lm1haW5JbWFnZSkud2lkdGgoODAwKX0gODAwd1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM9e2BcclxuICAgICAgICAgICAgKG1heC13aWR0aDogMzIwcHgpIDI4MHB4LFxyXG4gICAgICAgICAgICAobWF4LXdpZHRoOiA0ODBweCkgNDQwcHgsXHJcbiAgICAgICAgICAgIDgwMHB4XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0Lm1haW5JbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2F0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZW0+IHtwb3N0LmNhdGVnb3JpZXN9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdChwb3N0LnB1Ymxpc2hlZEF0LCAnTU1NTSBERCwgWVlZWScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG5cclxuICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKHBvc3QuYXV0aG9ySW1hZ2UpLndpZHRoKDQwKS51cmwoKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeVxyXG5cdFx0XHRcdFx0PGVtPiB7cG9zdC5uYW1lfTwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkgXHJcbiAgICB9XHJcbjwvdWw+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXNxdXNcIj5cclxuICA8UmVhY3REaXNxdXNDb21tZW50cyBcclxuICAgICAgICBzaG9ydG5hbWU9XCJjaGFyaXNvbFwiXHJcbiAgICAgICAgaWRlbnRpZmllcj17c2x1Z31cclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgdXJsPXtgaHR0cDovL3d3dy5jaGFyaXNvbC5pby9wb3N0LyR7c2x1Z31gfVxyXG4gICAgICAgIGNhdGVnb3J5X2lkPVwiXCJcclxuICAgICAgICBvbk5ld0NvbW1lbnQ9e3RoaXMuaGFuZGxlTmV3Q29tbWVudH0vPlxyXG5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbjwvZGl2PjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG5cdFxyXG5cdDxzdHlsZSBqc3g+e2BcclxuXHQucG9zdC1jb250ZW50e1xyXG5cdFx0ICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuXHQgIFxyXG4gICAgICAudGV4dC1jb250ZW50IHNwYW57XHJcblx0XHQgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHQgIGNvbG9yOiAjQjcyMUZGO1xyXG5cdFx0ICBmb250LXN0eWxlOm5vcm1hbDtcclxuXHQgIH1cclxuXHQgIC5wb3N0LWNvbnRlbnQtaW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblx0ICB9XHJcblx0ICAucG9zdC1jb250ZW50IGl7XHJcbiAgICBjb2xvcjojMUVBRURCO1xyXG4gICAgfVxyXG5cdCAgLnJlc3B7XHJcbiAgbWF4LXdpZHRoOiA3NDBweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0dGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG5cdG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OjI3cHg7XHJcbiAgICB9XHJcbiAgICAubW9yZXBvc3R7XHJcbiAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6NTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTotMjBweDtcclxuICAgICAgY29sb3I6I0I3MjFGRjtcclxuICAgIH1cclxuICAgIC5tYXJnaW57XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0Oi0xMDBweDtcclxuICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmJsb2ctbGlzdCB7IFxyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICB3aWR0aDozMTBweDtcclxuICBoZWlnaHQ6MzAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbm1hcmdpbi1sZWZ0OjIwcHg7XHJcbm1hcmdpbi10b3A6MjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMTAsIDE2LCAzNCwgMC4xKTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC4wMiwgMC4wMSwgMC40NywgMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjAyLCAwLjAxLCAwLjQ3LCAxKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMjBweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcblxyXG4gICAgfVx0ICBcclxuICAuYmxvZy1saXN0OmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0yMHB4LCAwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtMjBweCwgMCk7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS9ndWlkbGluZS1wcmlzbWljJTJGN2Q1ZjIyMmMtMjQyYi00MGUwLWJjMmUtYjE5Yzg5ZjE4YjQyX2JnLWhlYWQtYmxvZ3Bvc3Qtd3JpdGluZy5zdmcpO1xyXG4gIFxyXG4gIH1cclxuICAuYmxvZy1saXN0IGgxe1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzQzNDQ1NjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuYmxvZy1saXN0IGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzZiNmM3YTtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCBwIGVte1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgY29sb3I6ICM0MzQ0NTY7XHJcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCB1bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG4gIH1cclxuICBcclxuICAuYmxvZy1saXN0IC5kYXRle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMDtcclxuICBjb2xvcjogIzZiNmM3YTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEyLjhweDtcclxuICBjb2xvcjogIzQzNDQ1NjtcclxudGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCAuYXV0aG9ye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCBpe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6OHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNCNzIxRkY7XHJcbnBhZGRpbmc6IDAuNWVtIDAuNmVtO1xyXG4gIH1cclxuICAuYmxvZy1saXN0IC5jYXR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gIH1cclxuICAuYmxvZy1saXN0IC5jYXQgZW17XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIH1cclxuICAuYmxvZy1saXN0IC5uYW1le1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB9XHJcbiAgLmJsb2ctbGlzdCBoMTpob3ZlcntcclxuICAgIGNvbG9yOiNCNzIxRkY7XHJcbiAgfVxyXG4gIC5pbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDoxNDBweDtcclxuICAgIG9iamVjdC1maXQ6Y292ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDotNDBweDtcclxuICAgIG1hcmdpbi10b3A6LTQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlcntcdCBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNDBweDtcclxuICBsZWZ0OiAtMzhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuZGlzcXVze1xyXG4gICAgbWFyZ2luLXRvcDo0NTBweDtcclxuICB9XHJcblx0ICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHRcclxuXHRcclxuPC9MYXlvdXQ+XHJcblxyXG4pXHJcblxyXG5CbG9nUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocmVxKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChgKltzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBdeyBcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxyXG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcblx0ICBwdWJsaXNoZWRBdCxcclxuICAgICAgYm9keSxcclxuICAgICAgX3VwZGF0ZWRBdCxcclxuICAgICAgXCJzbHVnXCI6IHNsdWcuY3VycmVudCxcclxuICAgICAgXCJvdGhlclBvc3RzXCI6ICpbX3R5cGUgPT0gXCJwb3N0XCJdWzAuLjJdIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYyl7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxyXG4gICAgICAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgICAgICBtYWluSW1hZ2UsXHJcbiAgICAgICBwdWJsaXNoZWRBdCxcclxuICAgICAgIFwic2x1Z1wiOiBzbHVnLmN1cnJlbnQsXHJcbiAgICAgICBib2R5LFxyXG4gICAgICAgX3VwZGF0ZWRBdCx9XHJcbiAgICB9YCwge3NsdWc6IHJlcS5xdWVyeS5zbHVnfSlcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3QiXX0= */\n/*@ sourceURL=pages\\post.js */"
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
//# sourceMappingURL=4.75d418f26407f8610ec1.hot-update.js.map