exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 1392:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _CommentCount.CommentCount;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _CommentEmbed.CommentEmbed;
  }
});
Object.defineProperty(exports, "Mq", ({
  enumerable: true,
  get: function get() {
    return _DiscussionEmbed.DiscussionEmbed;
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _Recommendations.Recommendations;
  }
});
__webpack_unused_export__ = void 0;
var _CommentCount = __webpack_require__(7838);
var _CommentEmbed = __webpack_require__(2648);
var _DiscussionEmbed = __webpack_require__(2493);
var _Recommendations = __webpack_require__(5244);
var Disqus = {
  CommentCount: _CommentCount.CommentCount,
  CommentEmbed: _CommentEmbed.CommentEmbed,
  DiscussionEmbed: _DiscussionEmbed.DiscussionEmbed,
  Recommendations: _Recommendations.Recommendations
};
var _default = __webpack_unused_export__ = Disqus;

/***/ }),

/***/ 2493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DiscussionEmbed = void 0;
var _react = _interopRequireDefault(__webpack_require__(6013));
var _propTypes = _interopRequireDefault(__webpack_require__(5556));
var _utils = __webpack_require__(8777);
var _constants = __webpack_require__(9477);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } // Constants
var DiscussionEmbed = exports.DiscussionEmbed = /*#__PURE__*/function (_React$Component) {
  _inherits(DiscussionEmbed, _React$Component);
  var _super = _createSuper(DiscussionEmbed);
  function DiscussionEmbed() {
    _classCallCheck(this, DiscussionEmbed);
    return _super.apply(this, arguments);
  }
  _createClass(DiscussionEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== 'undefined' && window.disqus_shortname && window.disqus_shortname !== this.props.shortname) this.cleanInstance();
      this.loadInstance();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props === nextProps) return false;
      return (0, _utils.shallowComparison)(this.props, nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      if (this.props.shortname !== nextProps.shortname) this.cleanInstance();
      this.loadInstance();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanInstance();
    }
  }, {
    key: "loadInstance",
    value: function loadInstance() {
      var doc = window.document;
      if (window && window.DISQUS && doc.getElementById(_constants.EMBED_SCRIPT_ID)) {
        window.DISQUS.reset({
          reload: true,
          config: this.getDisqusConfig(this.props.config)
        });
      } else {
        window.disqus_config = this.getDisqusConfig(this.props.config);
        window.disqus_shortname = this.props.shortname;
        (0, _utils.insertScript)("https://".concat(this.props.shortname, ".disqus.com/embed.js"), _constants.EMBED_SCRIPT_ID, doc.body);
      }
    }
  }, {
    key: "cleanInstance",
    value: function cleanInstance() {
      var doc = window.document;
      (0, _utils.removeScript)(_constants.EMBED_SCRIPT_ID, doc.body);
      if (window && window.DISQUS) window.DISQUS.reset({});
      try {
        delete window.DISQUS;
      } catch (error) {
        window.DISQUS = undefined;
      }
      var disqusThread = doc.getElementById(_constants.THREAD_ID);
      if (disqusThread) {
        while (disqusThread.hasChildNodes()) {
          disqusThread.removeChild(disqusThread.firstChild);
        }
      }
      (0, _utils.removeResources)();
    }
  }, {
    key: "getDisqusConfig",
    value: function getDisqusConfig(config) {
      return function () {
        var _this = this;
        this.page.identifier = config.identifier;
        this.page.url = config.url;
        this.page.title = config.title;
        this.page.category_id = config.categoryID;
        this.page.remote_auth_s3 = config.remoteAuthS3;
        this.page.api_key = config.apiKey;
        if (config.sso) this.sso = config.sso;
        if (config.language) this.language = config.language;
        _constants.CALLBACKS.forEach(function (callbackName) {
          _this.callbacks[callbackName] = [config[callbackName]];
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
        shortname = _this$props.shortname,
        config = _this$props.config,
        rest = _objectWithoutProperties(_this$props, ["shortname", "config"]);
      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
        id: _constants.THREAD_ID
      }));
    }
  }]);
  return DiscussionEmbed;
}(_react["default"].Component);
DiscussionEmbed.propTypes = {
  shortname: _propTypes["default"].string.isRequired,
  config: _propTypes["default"].shape({
    identifier: _propTypes["default"].string,
    url: _propTypes["default"].string,
    title: _propTypes["default"].string,
    language: _propTypes["default"].string,
    categoryID: _propTypes["default"].string,
    remoteAuthS3: _propTypes["default"].string,
    apiKey: _propTypes["default"].string,
    preData: _propTypes["default"].func,
    preInit: _propTypes["default"].func,
    onInit: _propTypes["default"].func,
    onReady: _propTypes["default"].func,
    afterRender: _propTypes["default"].func,
    preReset: _propTypes["default"].func,
    onIdentify: _propTypes["default"].func,
    beforeComment: _propTypes["default"].func,
    onNewComment: _propTypes["default"].func,
    onPaginate: _propTypes["default"].func,
    sso: _propTypes["default"].shape({
      name: _propTypes["default"].string,
      button: _propTypes["default"].string,
      icon: _propTypes["default"].string,
      url: _propTypes["default"].string,
      logout: _propTypes["default"].string,
      profile_url: _propTypes["default"].string,
      width: _propTypes["default"].string,
      height: _propTypes["default"].string
    })
  }).isRequired
};

/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CommentEmbed = void 0;
var _react = _interopRequireDefault(__webpack_require__(6013));
var _propTypes = _interopRequireDefault(__webpack_require__(5556));
var _constants = __webpack_require__(9477);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } // Constants
var CommentEmbed = exports.CommentEmbed = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentEmbed, _React$Component);
  var _super = _createSuper(CommentEmbed);
  function CommentEmbed() {
    _classCallCheck(this, CommentEmbed);
    return _super.apply(this, arguments);
  }
  _createClass(CommentEmbed, [{
    key: "getSrc",
    value: function getSrc() {
      var radixBase = 36;
      var post = Number(this.props.commentId).toString(radixBase);
      var parentParam = this.props.showParentComment ? '1' : '0';
      var mediaParam = this.props.showMedia ? '1' : '0';
      return "https://embed.disqus.com/p/".concat(post, "?p=").concat(parentParam, "&m=").concat(mediaParam);
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
        width = _this$props.width,
        height = _this$props.height,
        commentId = _this$props.commentId,
        showMedia = _this$props.showMedia,
        showParentComment = _this$props.showParentComment,
        rest = _objectWithoutProperties(_this$props, ["width", "height", "commentId", "showMedia", "showParentComment"]);
      return /*#__PURE__*/_react["default"].createElement("iframe", _extends({}, rest, {
        src: this.getSrc(),
        width: width,
        height: height,
        seamless: "seamless",
        scrolling: "no",
        frameBorder: "0"
      }));
    }
  }]);
  return CommentEmbed;
}(_react["default"].Component);
CommentEmbed.defaultProps = {
  showMedia: true,
  showParentComment: true,
  width: _constants.COMMENT_EMBED_WIDTH,
  height: _constants.COMMENT_EMBED_HEIGHT
};
CommentEmbed.propTypes = {
  commentId: _propTypes["default"].string.isRequired,
  showMedia: _propTypes["default"].bool,
  showParentComment: _propTypes["default"].bool,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  className: _propTypes["default"].string
};

/***/ }),

/***/ 5244:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Recommendations = void 0;
var _react = _interopRequireDefault(__webpack_require__(6013));
var _propTypes = _interopRequireDefault(__webpack_require__(5556));
var _utils = __webpack_require__(8777);
var _constants = __webpack_require__(9477);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } // Constants
var Recommendations = exports.Recommendations = /*#__PURE__*/function (_React$Component) {
  _inherits(Recommendations, _React$Component);
  var _super = _createSuper(Recommendations);
  function Recommendations() {
    _classCallCheck(this, Recommendations);
    return _super.apply(this, arguments);
  }
  _createClass(Recommendations, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInstance();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props === nextProps) return false;
      return (0, _utils.shallowComparison)(this.props, nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.loadInstance();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanInstance();
    }
  }, {
    key: "getDisqusConfig",
    value: function getDisqusConfig(config) {
      return function () {
        this.page.identifier = config.identifier;
        this.page.url = config.url;
        this.page.title = config.title;
        this.language = config.language;
      };
    }
  }, {
    key: "loadInstance",
    value: function loadInstance() {
      if (typeof window !== 'undefined' && window.document) {
        window.disqus_config = this.getDisqusConfig(this.props.config);
        if (window.document.getElementById(_constants.RECOMMENDATIONS_SCRIPT_ID)) {
          this.reloadInstance();
        } else {
          (0, _utils.insertScript)("https://".concat(this.props.shortname, ".disqus.com/recommendations.js"), _constants.RECOMMENDATIONS_SCRIPT_ID, window.document.body);
        }
      }
    }
  }, {
    key: "reloadInstance",
    value: function reloadInstance() {
      if (window && window.DISQUS_RECOMMENDATIONS) {
        window.DISQUS_RECOMMENDATIONS.reset({
          reload: true
        });
      }
    }
  }, {
    key: "cleanInstance",
    value: function cleanInstance() {
      (0, _utils.removeScript)(_constants.RECOMMENDATIONS_SCRIPT_ID, window.document.body);
      try {
        delete window.DISQUS_RECOMMENDATIONS;
      } catch (error) {
        window.DISQUS_RECOMMENDATIONS = undefined;
      }
      var recommendations = window.document.getElementById(_constants.RECOMMENDATIONS_ID);
      if (recommendations) {
        while (recommendations.hasChildNodes()) {
          recommendations.removeChild(recommendations.firstChild);
        }
      }
      (0, _utils.removeResources)();
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
        shortname = _this$props.shortname,
        config = _this$props.config,
        rest = _objectWithoutProperties(_this$props, ["shortname", "config"]);
      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
        id: _constants.RECOMMENDATIONS_ID
      }));
    }
  }]);
  return Recommendations;
}(_react["default"].Component);
Recommendations.propTypes = {
  shortname: _propTypes["default"].string.isRequired,
  config: _propTypes["default"].shape({
    identifier: _propTypes["default"].string,
    url: _propTypes["default"].string,
    title: _propTypes["default"].string,
    language: _propTypes["default"].string
  })
};

/***/ }),

/***/ 6942:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 7838:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CommentCount = void 0;
var _react = _interopRequireDefault(__webpack_require__(6013));
var _propTypes = _interopRequireDefault(__webpack_require__(5556));
var _utils = __webpack_require__(8777);
var _constants = __webpack_require__(9477);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } // Constants
var queueResetCount = (0, _utils.debounce)(function () {
  if (window.DISQUSWIDGETS) window.DISQUSWIDGETS.getCount({
    reset: true
  });
}, 300, false); // eslint-disable-line no-magic-numbers
var CommentCount = exports.CommentCount = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentCount, _React$Component);
  var _super = _createSuper(CommentCount);
  function CommentCount() {
    _classCallCheck(this, CommentCount);
    return _super.apply(this, arguments);
  }
  _createClass(CommentCount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInstance();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props === nextProps) return false;
      return (0, _utils.shallowComparison)(this.props, nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.shortname !== prevProps.shortname) this.cleanInstance();
      this.loadInstance();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanInstance();
    }
  }, {
    key: "loadInstance",
    value: function loadInstance() {
      var doc = window.document;
      if (doc.getElementById(_constants.COMMENT_COUNT_SCRIPT_ID)) queueResetCount();else (0, _utils.insertScript)("https://".concat(this.props.shortname, ".disqus.com/count.js"), _constants.COMMENT_COUNT_SCRIPT_ID, doc.body);
    }
  }, {
    key: "cleanInstance",
    value: function cleanInstance() {
      var doc = window.document;
      (0, _utils.removeScript)(_constants.COMMENT_COUNT_SCRIPT_ID, doc.body);

      // count.js only reassigns this window object if it's undefined.
      window.DISQUSWIDGETS = undefined;
      (0, _utils.removeResources)();
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
        shortname = _this$props.shortname,
        config = _this$props.config,
        children = _this$props.children,
        className = _this$props.className,
        rest = _objectWithoutProperties(_this$props, ["shortname", "config", "children", "className"]);
      var additionalClass = className ? " ".concat(className) : '';
      return /*#__PURE__*/_react["default"].createElement("span", _extends({}, rest, {
        className: "".concat(_constants.COMMENT_COUNT_CLASS).concat(additionalClass),
        "data-disqus-identifier": config.identifier,
        "data-disqus-url": config.url
      }), children);
    }
  }]);
  return CommentCount;
}(_react["default"].Component);
CommentCount.propTypes = {
  shortname: _propTypes["default"].string.isRequired,
  config: _propTypes["default"].shape({
    identifier: _propTypes["default"].string,
    url: _propTypes["default"].string,
    title: _propTypes["default"].string
  }).isRequired,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};

/***/ }),

/***/ 8777:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.debounce = debounce;
exports.insertScript = insertScript;
exports.isReactElement = isReactElement;
exports.removeResources = removeResources;
exports.removeScript = removeScript;
exports.shallowComparison = shallowComparison;
var _react = _interopRequireDefault(__webpack_require__(6013));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function insertScript(src, id, parentElement) {
  var script = window.document.createElement('script');
  script.async = true;
  script.src = src;
  script.id = id;
  parentElement.appendChild(script);
  return script;
}
function removeScript(id, parentElement) {
  var script = window.document.getElementById(id);
  if (script) parentElement.removeChild(script);
}
function removeResources() {
  // Remove the bundles that the Disqus scripts add to prevent duplicated resources when navigating between pages
  var disqusResources = window.document.querySelectorAll(
  // eslint-disable-next-line max-len
  'link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]');
  disqusResources.forEach(function (el) {
    return el.remove();
  });
}
function debounce(func, wait, runOnFirstCall) {
  var timeout;
  return function () {
    var context = this; // eslint-disable-line consistent-this
    var args = arguments;
    var deferredExecution = function deferredExecution() {
      timeout = null;
      if (!runOnFirstCall) func.apply(context, args);
    };
    var callNow = runOnFirstCall && !timeout;
    window.clearTimeout(timeout);
    timeout = setTimeout(deferredExecution, wait);
    if (callNow) func.apply(context, args);
  };
}
function isReactElement(element) {
  if (_react["default"].isValidElement(element)) {
    return true;
  } else if (Array.isArray(element)) {
    return element.some(function (value) {
      return _react["default"].isValidElement(value);
    });
  }
  return false;
}
function shallowComparison(currentProps, nextProps) {
  // Perform a comparison of all props, excluding React Elements, to prevent unnecessary updates
  var propNames = new Set(Object.keys(currentProps), Object.keys(nextProps)); // eslint-disable-line no-undef
  var _iterator = _createForOfIteratorHelper(propNames),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      if (_typeof(currentProps[name]) === 'object') {
        if (shallowComparison(currentProps[name], nextProps[name])) return true;
      } else if (currentProps[name] !== nextProps[name] && !isReactElement(currentProps[name])) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}

/***/ }),

/***/ 9477:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.THREAD_ID = exports.RECOMMENDATIONS_SCRIPT_ID = exports.RECOMMENDATIONS_ID = exports.EMBED_SCRIPT_ID = exports.COMMENT_EMBED_WIDTH = exports.COMMENT_EMBED_HEIGHT = exports.COMMENT_COUNT_SCRIPT_ID = exports.COMMENT_COUNT_CLASS = exports.CALLBACKS = void 0;
var THREAD_ID = exports.THREAD_ID = 'disqus_thread';
var EMBED_SCRIPT_ID = exports.EMBED_SCRIPT_ID = 'dsq-embed-scr';
var COMMENT_COUNT_CLASS = exports.COMMENT_COUNT_CLASS = 'disqus-comment-count';
var COMMENT_COUNT_SCRIPT_ID = exports.COMMENT_COUNT_SCRIPT_ID = 'dsq-count-scr';
var COMMENT_EMBED_WIDTH = exports.COMMENT_EMBED_WIDTH = 420;
var COMMENT_EMBED_HEIGHT = exports.COMMENT_EMBED_HEIGHT = 320;
var RECOMMENDATIONS_ID = exports.RECOMMENDATIONS_ID = 'disqus_recommendations';
var RECOMMENDATIONS_SCRIPT_ID = exports.RECOMMENDATIONS_SCRIPT_ID = 'dsq-recs-scr';
var CALLBACKS = exports.CALLBACKS = ['preData', 'preInit', 'onInit', 'onReady', 'afterRender', 'preReset', 'onIdentify', 'beforeComment', 'onNewComment', 'onPaginate'];

/***/ })

};
;
//# sourceMappingURL=515.js.map