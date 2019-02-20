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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    GET: function GET(api, callback) {
      var stream = weex.requireModule('stream');
      return stream.fetch({
        method: 'GET',
        type: 'json',
        url: 'https://nei.netease.com/api/apimock/33dc0f669975cc6460ced05b39a845b4' + api
      }, callback);
    },
    POST: function POST(api) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments[2];

      var stream = weex.requireModule('stream');
      return stream.fetch({
        method: 'POST',
        type: 'json',
        body: JSON.stringify(options),
        url: 'https://nei.netease.com/api/apimock/33dc0f669975cc6460ced05b39a845b4' + api
      }, callback);
    }
  }
};

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _detail = __webpack_require__(4);

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_detail2.default.el = '#root';
new Vue(_detail2.default);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(11)
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
__vue_options__.__file = "/Users/thea/Workspace/weex-demo/src/pages/detail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4ef25755"
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "m-product": {
    "paddingTop": "20",
    "paddingRight": "30",
    "paddingBottom": "20",
    "paddingLeft": "30",
    "backgroundColor": "#ffffff"
  },
  "part-1": {
    "flexDirection": "row"
  },
  "price": {
    "flexDirection": "row"
  },
  "pdstock": {
    "textAlign": "right",
    "color": "#999999",
    "fontSize": "26"
  },
  "actual-price": {
    "color": "#BA5038",
    "fontSize": "56"
  },
  "original-price": {
    "color": "#999999",
    "fontSize": "28",
    "marginLeft": "20",
    "textDecoration": "line-through"
  },
  "part-2": {
    "marginTop": "10",
    "lineHeight": "50",
    "color": "#333333",
    "fontSize": "36"
  },
  "m-selattr": {
    "marginTop": "20",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30"
  },
  "selattr": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SliderDetail = __webpack_require__(7);

var _SliderDetail2 = _interopRequireDefault(_SliderDetail);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _mixins = __webpack_require__(1);

var _mixins2 = _interopRequireDefault(_mixins);

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

var modal = weex.requireModule('modal');
var stream = weex.requireModule('stream');
exports.default = {
  name: 'Detail',
  mixins: [_mixins2.default],
  components: {
    SliderDetail: _SliderDetail2.default
  },
  data: function data() {
    return {
      good: {}
    };
  },
  created: function created() {
    var _this = this;

    var params = _util2.default.getUrlParam();
    _util2.default.initIconFont();
    this.GET('/api/good.json?goodId=' + params.goodId, function (res) {
      console.log(res);
      _this.good = res.data || {};
    });
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(8)
)

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(10)
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
__vue_options__.__file = "/Users/thea/Workspace/weex-demo/src/components/SliderDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-182ee87c"
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
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "slider-wrap": {
    "position": "relative"
  },
  "slider": {
    "width": "750",
    "height": "375"
  },
  "image": {
    "width": "750",
    "height": "375"
  },
  "xtag": {
    "position": "absolute",
    "bottom": "27",
    "right": "30"
  },
  "xtag-text": {
    "minWidth": "60",
    "height": "40",
    "lineHeight": "40",
    "textAlign": "center",
    "letterSpacing": "3",
    "fontSize": "20",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "color": "#ffffff",
    "borderRadius": "20"
  },
  "m-bigpic": {
    "position": "fixed",
    "top": "0",
    "left": "0",
    "bottom": "0",
    "right": "0",
    "backgroundColor": "#000000",
    "justifyContent": "center",
    "alignItems": "center"
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var modal = weex.requireModule('modal');
exports.default = {
  props: ['sliderImgs'],
  data: function data() {
    return {
      activeIndex: 1,
      bigPic: {
        visible: false,
        width: 0,
        height: 0,
        url: null
      }
    };
  },

  methods: {
    closeBigPic: function closeBigPic() {
      this.bigPic = {};
    },
    imgClick: function imgClick(img) {
      var bigPic = {
        visible: true,
        width: img.width,
        height: img.height,
        url: img.url
      };
      this.bigPic = bigPic;
    },
    onchange: function onchange(event) {
      this.activeIndex = event.index;
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["slider-wrap"]
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    },
    on: {
      "change": _vm.onchange
    }
  }, _vm._l((_vm.sliderImgs), function(img) {
    return _c('div', {
      key: img.url,
      staticClass: ["frame"],
      on: {
        "click": function($event) {
          _vm.imgClick(img)
        }
      }
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.url
      }
    })])
  })), _c('div', {
    staticClass: ["xtag"]
  }, [_c('text', {
    staticClass: ["xtag-text"]
  }, [_vm._v(_vm._s(_vm.activeIndex + 1) + "/" + _vm._s((_vm.sliderImgs || 0).length))])])]), (_vm.bigPic.visible) ? _c('div', {
    staticClass: ["m-bigpic"],
    on: {
      "click": function($event) {
        _vm.closeBigPic()
      }
    }
  }, [_c('image', {
    staticClass: ["bigpic"],
    style: {
      width: _vm.bigPic.width + 'px',
      height: _vm.bigPic.height + 'px'
    },
    attrs: {
      "src": _vm.bigPic.url
    }
  })]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', [_c('SliderDetail', {
    attrs: {
      "sliderImgs": _vm.good.sliderImgs
    }
  }), _c('div', {
    staticClass: ["m-product"]
  }, [_c('div', {
    staticClass: ["part", "part-1"]
  }, [_c('div', {
    staticClass: ["price"]
  }, [_c('text', {
    staticClass: ["actual-price"]
  }, [_vm._v("￥" + _vm._s(_vm.good.actualPrice))]), _c('text', {
    staticClass: ["original-price"]
  }, [_vm._v("￥" + _vm._s(_vm.good.originalPrice))])]), _c('text', {
    staticClass: ["pdstock"]
  }, [_vm._v("库存充足" + _vm._s(_vm.good.pdstock))])]), _c('div', {
    staticClass: ["part", "part-2"]
  }, [_c('text', {
    staticClass: ["name"]
  }, [_vm._v(_vm._s(_vm.good.name))])])]), _vm._m(0), _c('div', {
    staticClass: ["m-detailpics"]
  }, _vm._l((_vm.good.detailImgs), function(img) {
    return _c('image', {
      key: img.url,
      style: {
        width: img.width + 'px',
        height: img.height + 'px'
      },
      attrs: {
        "resize": "cover",
        "src": img.url
      }
    })
  }))], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["m-selattr"]
  }, [_c('div', {
    staticClass: ["selattr", "js-attr-nosel"],
    attrs: {
      "dataStock": "2998",
      "id": "auto-id-BfqZu2m5"
    }
  }, [_c('text', {
    staticClass: ["selattrtxt"]
  }, [_vm._v("选择规格数量")]), _c('text', {
    staticClass: ["arrow", "iconfont"]
  }, [_vm._v("")])])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);