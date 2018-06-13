webpackHotUpdate(5,{

/***/ "./client.js":
/***/ (function(module, exports, __webpack_require__) {

var sanityClient = __webpack_require__("./node_modules/@sanity/client/lib/sanityClient.js");

module.exports = sanityClient({
  projectId: 'anokeucs',
  // you can find this in sanity.json
  dataset: 'production',
  // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data

});

/***/ })

})
//# sourceMappingURL=5.ba8f96055c992bb7c98a.hot-update.js.map