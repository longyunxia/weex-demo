// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by thea on 2019/1/23.
 */
var utilFunc = {
  initIconFont: function initIconFont() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('//at.alicdn.com/t/font_1028519_cwqz3n4zz7m.ttf')"
    });
  },
  getEntryUrl: function getEntryUrl(name) {
    var config = weex.config;
    // 判断当前的环境，适配web端
    if (config.env.platform === "Web") {
      return './' + name + '.html';
    }
    if (config.env.platform === 'iOS') {
      return config.bundleUrl.substring(0, config.bundleUrl.lastIndexOf('/') + 1) + name + '.js';
    } else {
      return 'file://assets/dist/' + name + '.js';
    }
  },
  getJumpBaseUrl: function getJumpBaseUrl(toUrl) {

    var bundleUrl = weex.config.bundleUrl;

    var isnav = true;
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var native;
    var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;

    if (isAndroidAssets) {
      nativeBase = "local://" + 'file://assets/dist/';
      native = nativeBase + toUrl + ".js";
    } else if (isiOSAssets) {
      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
      native = nativeBase + toUrl + ".js";
    } else {
      var host = 'localhost:8081';
      var path = '';
      var hostMatches = /\/\/([^\/]+?)\//.exec(bundleUrl);
      var matchFirstPath = /\/\/[^\/]+\/([^\/\s]+)\//.exec(bundleUrl);

      if (hostMatches && hostMatches.length >= 2) {
        host = hostMatches[1];
      }

      if (matchFirstPath && matchFirstPath.length >= 2) {
        path = matchFirstPath[1];
      }

      //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
      if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
        nativeBase = 'http://' + host + '/';
        native = nativeBase + toUrl + ".html";
      } else {
        nativeBase = 'http://' + host + '/' + (!!path ? path + '/' : '');
        native = nativeBase + toUrl + ".js";
      }
    }
    return native;
  },
  getUrlParam: function getUrlParam() {
    var paramObj = {};
    var name, value;
    var str = weex.config.bundleUrl; //取得整个地址栏
    var num = str.indexOf("?");
    str = str.substr(num + 1); //取得所有参数

    var arr = str.split("&"); //各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
      num = arr[i].indexOf("=");
      if (num > 0) {
        name = arr[i].substring(0, num);
        value = arr[i].substr(num + 1);
        paramObj[name] = value;
      }
    }
    return paramObj;
  }
};
exports.default = utilFunc;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAYAAAESKH/LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ5NzVFRjkxRDUwMTFFOTlEOERBQzhFRkU4MEQ3QTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ5NzVFRkExRDUwMTFFOTlEOERBQzhFRkU4MEQ3QTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNDk3NUVGNzFENTAxMUU5OUQ4REFDOEVGRTgwRDdBNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNDk3NUVGODFENTAxMUU5OUQ4REFDOEVGRTgwRDdBNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv9+DqQAAANPSURBVHjaYmQAgulnGU4BqYks088w/AdCEFjCAOZAARMjA0M9jAMQQAyzLzOIzzjLcB8s8/cnw9P//xkUkJWD9TLNP88gABMACCCwyPsvn1AwWBVIcsNtPkFBHj5GGAaJsYCIn38Z3gBVMTMgAYAAAssCrZ8KtC8ByNyfYcLgw3jr1Y7/olxWyAoZWPY+9bBh+MtwBK6VkWEHyLefkVXNPMNQwYANME4/z2BNlHaAAGJc9Z+B+e1Zhj/MTGz/NQQLGGX5fBl42dSA7n/L8PHnNYbrb/sYXn07BgrHKYwgb7Mwcf33V77ByMosgNVukIaLrxsYUGIBHwAbCmYAHc34l+EgUBczVl8BPQGML0j4Mvxj2MHOzCCSaMjwAZtikOeAaj1IcgYjsc7IMGbwBAggRrjOswzRjP8ZIoHxqw20SwxozFWg5GlmNoamVF2Gl2BNM88yTP73nyFHDBjTmsJFDPzsWgzszMIMn3/dYnj8aTPDjfcT/v/994tR2JiBBRzOERqf8Lr3NTBS9j7yYGCCBTou8PvvB4aDT4L+QxIGyJeQcPTA6jkGhr//mRnswYmHlKBjwpsggQCUp2ApEByDwGCyB+psx6YYmHv+MowEZ4BKJ1ixsJ1QpGQaMhwFCDAWuDWgZPqPoQboKFdcSRUXABkIJHYD3dkCMhQsNuMMQx3QoEZQBtcWLmNUEUhiwJXJ8aW1Ox/mMVx92/X/z79vjGDvwQLOWW4HA3pBRyqApXp49IEATABUhglzmDCKctowiHCZMXCyiDOwAfMYKJ9BovMtwy8g/v7nJcObb6cYXn8/wvD2xxlwvkMpfWGMTBNImT378i/xV9+Pubz+fsyK4S2DPDDNiAElREG5HRqgr4BefA0sBV4B2Q+B7GMsbAx7MqG5HxYC8KBgYWSwSzVmOExJUMw+y2D75z/DIRSDkaL4J9CFJ4FJ6iAzE8NxJiaGF0zMDG94BBjegKS/fGAQ+fcXiP8xSPz9x2AJjCl7oAHmQFPYCQQFg/ifXwwuQA1WQM3Zf4FBACwtRd+9xAwKRkhQzAIGRVjqaFDgDoqzDE+BTCmqBgUjwzNw5f7+HMMEUMVDjaAANQIEjRgKGDFshQUFA4MVUDHRGQQWFDAAAM886Mms9rWpAAAAAElFTkSuQmCC"

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HotBlock = __webpack_require__(6);

var _HotBlock2 = _interopRequireDefault(_HotBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_HotBlock2.default.el = '#root';
new Vue(_HotBlock2.default);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/thea/Workspace/weex-demo/src/components/HotBlock.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-33dee870"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = {
  "hot-wrap": {
    "paddingTop": 0,
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30",
    "marginTop": "50"
  },
  "title": {
    "color": "#333333",
    "fontSize": "36"
  },
  "good": {
    "marginTop": "30",
    "flexDirection": "row"
  },
  "good-image": {
    "width": "200",
    "height": "200",
    "borderRadius": "4"
  },
  "good-info": {
    "position": "relative",
    "marginLeft": "30"
  },
  "name": {
    "width": "450",
    "lineHeight": "42",
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#333333"
  },
  "desc": {
    "marginTop": "10",
    "lineHeight": "33",
    "color": "#999999",
    "fontSize": "24"
  },
  "coupons": {
    "flexDirection": "row"
  },
  "coupon": {
    "marginRight": "10",
    "borderRadius": "2",
    "height": "30",
    "lineHeight": "30",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "marginTop": "10",
    "color": "#ffffff",
    "fontSize": "20",
    "textAlign": "center",
    "backgroundColor": "#CEB48C"
  },
  "icon-coin": {
    "width": "22",
    "height": "28"
  },
  "price": {
    "flex": 2,
    "justifyContent": "flex-end"
  },
  "price-inner": {
    "flexDirection": "row",
    "alignItems": "flex-end"
  },
  "price-coin": {
    "fontSize": "32",
    "color": "#333333",
    "marginLeft": "10"
  },
  "actual-price": {
    "height": "45",
    "lineHeight": "45",
    "color": "#BA5038",
    "fontSize": "32"
  },
  "original-price": {
    "color": "#999999",
    "fontSize": "28",
    "marginLeft": "20",
    "textDecoration": "line-through"
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
exports.default = {
  props: ['goods'],
  data: function data() {
    return {};
  },

  methods: {
    jumpDetail: function jumpDetail(good) {
      //const url = weex.config.bundleUrl;
      console.log(_util2.default.getJumpBaseUrl('detail') + '?goodId=' + good.id);
      navigator.push({
        url: _util2.default.getJumpBaseUrl('detail') + '?goodId=' + good.id,
        animated: "true"
      });
    }
  }
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["hot-wrap"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("爆款推荐")]), _c('div', {
    staticClass: ["good-list"]
  }, _vm._l((_vm.goods), function(good, index) {
    return _c('div', {
      key: index,
      staticClass: ["good"],
      on: {
        "click": function($event) {
          _vm.jumpDetail(good)
        }
      }
    }, [_c('image', {
      staticClass: ["good-image"],
      attrs: {
        "src": good.imgSrc
      }
    }), _c('div', {
      staticClass: ["good-info"]
    }, [_c('text', {
      staticClass: ["name"]
    }, [_vm._v(_vm._s(good.name))]), _c('text', {
      staticClass: ["desc"]
    }, [_vm._v(_vm._s(good.desc))]), _c('div', {
      staticClass: ["coupons"]
    }, [(good.coupon) ? _c('text', {
      staticClass: ["coupon"]
    }, [_vm._v(_vm._s(good.coupon))]) : _vm._e()]), _c('div', {
      staticClass: ["price"]
    }, [(good.payType == 'coin') ? _c('div', {
      staticClass: ["price-inner"]
    }, [_c('image', {
      staticClass: ["icon-coin"],
      attrs: {
        "src": __webpack_require__(1)
      }
    }), _c('text', {
      staticClass: ["price-coin"]
    }, [_vm._v(_vm._s(good.actualPrice))])]) : _c('div', {
      staticClass: ["price-inner"]
    }, [_c('text', {
      staticClass: ["actual-price"]
    }, [_vm._v("￥" + _vm._s(good.actualPrice))]), (good.originalPrice) ? _c('text', {
      staticClass: ["original-price"]
    }, [_vm._v("￥" + _vm._s(good.originalPrice))]) : _vm._e()])])])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });