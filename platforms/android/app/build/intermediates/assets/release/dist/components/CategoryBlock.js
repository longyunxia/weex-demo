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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
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
__vue_options__.__file = "/Users/thea/Workspace/weex-demo/src/components/CategoryBlock.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4a284aa2"
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

/***/ 3:
/***/ (function(module, exports) {

module.exports = {
  "category-wrap": {
    "paddingTop": "26",
    "marginTop": "40",
    "position": "relative",
    "alignItems": "center"
  },
  "bg-image": {
    "width": "750",
    "height": "240",
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0
  },
  "category-name": {
    "height": "50",
    "lineHeight": "50",
    "color": "#333333",
    "fontSize": "36"
  },
  "name-wrap": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "spguide": {
    "lineHeight": "33",
    "color": "#333333",
    "fontSize": "24",
    "alignItems": "center"
  },
  "icon-more": {
    "marginLeft": "5"
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "good-list": {
    "marginTop": "20",
    "paddingTop": 0,
    "paddingRight": "15",
    "paddingBottom": 0,
    "paddingLeft": "15",
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "good": {
    "width": "220"
  },
  "good-image": {
    "width": "220",
    "height": "220"
  },
  "good-info": {
    "marginLeft": "30"
  },
  "name": {
    "lineHeight": "42",
    "lines": 2,
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
  "price-inner": {
    "flexDirection": "row",
    "alignItems": "flex-end"
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CategoryBlock = __webpack_require__(2);

var _CategoryBlock2 = _interopRequireDefault(_CategoryBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_CategoryBlock2.default.el = '#root';
new Vue(_CategoryBlock2.default);

/***/ }),

/***/ 4:
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

var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
exports.default = {
  props: ['category'],
  data: function data() {
    return {};
  },

  methods: {
    jumpDetail: function jumpDetail(good) {
      //const url = weex.config.bundleUrl;
      navigator.push({
        url: _util2.default.getJumpBaseUrl('detail') + '?goodId=' + good.id,
        animated: "true"
      });
    }
  }
};

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["category-wrap"]
  }, [_c('image', {
    staticClass: ["bg-image"],
    attrs: {
      "src": _vm.category.bgSrc
    }
  }), _c('div', {
    staticClass: ["name-wrap"]
  }, [_c('text', {
    staticClass: ["category-name"]
  }, [_vm._v(_vm._s(_vm.category.name))]), _c('text', {
    staticClass: ["iconfont", "icon-more"]
  }, [_vm._v("")])]), _c('text', {
    staticClass: ["spguide"]
  }, [_vm._v(_vm._s(_vm.category.guide))]), (_vm.category.goods && _vm.category.goods.length > 0) ? _c('div', {
    staticClass: ["good-list"]
  }, _vm._l((_vm.category.goods), function(good, index) {
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
    }, [_vm._v(_vm._s(good.coupon))]) : _vm._e()]), _c('text', {
      staticClass: ["actual-price"]
    }, [_vm._v("￥" + _vm._s(good.actualPrice))])])])
  })) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });