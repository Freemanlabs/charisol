webpackHotUpdate(5,{

/***/ "./client.js":
/***/ (function(module, exports, __webpack_require__) {

var sanityClient = __webpack_require__("./node_modules/@sanity/client/lib/sanityClient.js");

module.exports = sanityClient({
  projectId: 'thmzb5bv',
  // you can find this in sanity.json
  dataset: 'blog',
  // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data

});

/***/ })

})
//# sourceMappingURL=5.60ecb40e6e509d386a49.hot-update.js.map