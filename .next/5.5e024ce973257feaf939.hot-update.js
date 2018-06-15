webpackHotUpdate(5,{

/***/ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("./node_modules/react/cjs/react.development.js");
var PropTypes = __webpack_require__("./node_modules/@sanity/block-content-to-react/node_modules/prop-types/index.js");
var internals = __webpack_require__("./node_modules/@sanity/block-content-to-hyperscript/internals.js");

var _require = __webpack_require__("./node_modules/@sanity/block-content-to-react/lib/targets/dom.js"),
    serializers = _require.serializers,
    serializeSpan = _require.serializeSpan,
    renderProps = _require.renderProps;

var getImageUrl = internals.getImageUrl,
    blocksToNodes = internals.blocksToNodes,
    mergeSerializers = internals.mergeSerializers;

var renderNode = React.createElement;

var SanityBlockContent = function SanityBlockContent(props) {
  var customSerializers = mergeSerializers(SanityBlockContent.defaultSerializers, props.serializers);

  var blockProps = Object.assign({}, renderProps, props, {
    serializers: customSerializers,
    blocks: props.blocks || []
  });

  return blocksToNodes(renderNode, blockProps, serializers, serializeSpan);
};

// Expose default serializers to the user
SanityBlockContent.defaultSerializers = serializers;

// Expose logic for building image URLs from an image reference/node
SanityBlockContent.getImageUrl = getImageUrl;

SanityBlockContent.propTypes = {
  className: PropTypes.string,

  // When rendering images, we need project id and dataset, unless images are materialized
  projectId: PropTypes.string,
  dataset: PropTypes.string,
  imageOptions: PropTypes.object,

  serializers: PropTypes.shape({
    // Common overrides
    types: PropTypes.object,
    marks: PropTypes.object,

    // Less common overrides
    list: PropTypes.func,
    listItem: PropTypes.func,

    // Low-level serializers
    block: PropTypes.func,
    span: PropTypes.func
  }),

  blocks: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
    _type: PropTypes.string.isRequired
  })), PropTypes.shape({
    _type: PropTypes.string.isRequired
  })]).isRequired
};

SanityBlockContent.defaultProps = {
  serializers: {},
  imageOptions: {}
};

module.exports = SanityBlockContent;
//# sourceMappingURL=BlockContent.js.map

/***/ })

})
//# sourceMappingURL=5.5e024ce973257feaf939.hot-update.js.map