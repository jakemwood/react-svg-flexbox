"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=_interopDefault(require("react")),reactDom=require("react-dom"),computeLayout=_interopDefault(require("css-layout"));function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_defineProperty(e,t,r[t])})}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}var Flexbox=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).childRefs=[],e.shouldUpdateAgain=!1,e.state={layout:{children:[]}},e}return _inherits(t,React.Component),_createClass(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"componentDidUpdate",value:function(){if(this.shouldUpdateAgain=!this.shouldUpdateAgain,this.shouldUpdateAgain){var e=this.props,t=e.children,r=e.onLayout,n=e.style,o=this.getChildrenMeasured(this.childRefs),i=this.getFlattenedChildren(t),u=this.getChildrenAsMergedStyles(i,o),a=this.getComputedLayout(u,n);r(a),this.setState({layout:a})}}},{key:"getFlattenedChildren",value:function(e){return Array.isArray(e)?e.filter(function(e){return e}).filter(function(e){return"string"!=typeof e}).map(function(e){return Array.isArray(e)?e:[e]}).reduce(function(e,t){return e.concat(t)},[]):[e]}},{key:"getChildrenAsMergedStyles",value:function(e,t){return t.map(function(t,r){var n=e[r]||{},o=n&&n.props?n.props.style:{};return{style:_objectSpread({},o,{height:t.height||o.height,width:t.width||o.width})}})}},{key:"getChildrenMeasured",value:function(e){return e&&e.length?e.map(function(e){return e.getBBox?e.getBBox():reactDom.findDOMNode(e).getBBox()}):[]}},{key:"getComputedLayout",value:function(e,t){var r={children:Array.from(e||[]),style:_objectSpread({},t)};return computeLayout(r),r}},{key:"getLayoutChildren",value:function(e){return e&&e.children&&e.children.length?e.children:[]}},{key:"getLayoutAttributesForChild",value:function(e,t){if(t&&t.layout){var r=t.layout,n=r.left,o=r.top;switch(e.type){case"circle":var i=e.props.r||0;return{cx:n+i,cy:o+i};case"ellipse":return{cx:n+(e.props.rx||0),cy:o+(e.props.ry||0)};case"g":case"path":case"polygon":case"polyline":return{transform:"translate(".concat(n," ").concat(o,")")};default:return{x:n,y:o}}}return{}}},{key:"render",value:function(){var e=this,t=this.props,r=t.children,n=t.className,o=t.x,i=t.y,u=this.state.layout;this.childRefs=[];var a=this.getFlattenedChildren(r),c=this.getLayoutChildren(u);return React.createElement("g",{className:n,transform:"translate(".concat(o," ").concat(i,")")},a.map(function(t,r){return React.cloneElement(t,_objectSpread({},t.props,{},e.getLayoutAttributesForChild(t,c[r]),{key:"child-".concat(r),ref:function(t){return t?e.childRefs.push(t):null}}))}))}}]),t}();Flexbox.defaultProps={children:[],className:null,onLayout:function(){},style:{},x:0,y:0},module.exports=Flexbox;
