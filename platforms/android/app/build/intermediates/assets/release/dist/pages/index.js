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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAYAAAESKH/LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ5NzVFRjkxRDUwMTFFOTlEOERBQzhFRkU4MEQ3QTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ5NzVFRkExRDUwMTFFOTlEOERBQzhFRkU4MEQ3QTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNDk3NUVGNzFENTAxMUU5OUQ4REFDOEVGRTgwRDdBNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNDk3NUVGODFENTAxMUU5OUQ4REFDOEVGRTgwRDdBNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv9+DqQAAANPSURBVHjaYmQAgulnGU4BqYks088w/AdCEFjCAOZAARMjA0M9jAMQQAyzLzOIzzjLcB8s8/cnw9P//xkUkJWD9TLNP88gABMACCCwyPsvn1AwWBVIcsNtPkFBHj5GGAaJsYCIn38Z3gBVMTMgAYAAAssCrZ8KtC8ByNyfYcLgw3jr1Y7/olxWyAoZWPY+9bBh+MtwBK6VkWEHyLefkVXNPMNQwYANME4/z2BNlHaAAGJc9Z+B+e1Zhj/MTGz/NQQLGGX5fBl42dSA7n/L8PHnNYbrb/sYXn07BgrHKYwgb7Mwcf33V77ByMosgNVukIaLrxsYUGIBHwAbCmYAHc34l+EgUBczVl8BPQGML0j4Mvxj2MHOzCCSaMjwAZtikOeAaj1IcgYjsc7IMGbwBAggRrjOswzRjP8ZIoHxqw20SwxozFWg5GlmNoamVF2Gl2BNM88yTP73nyFHDBjTmsJFDPzsWgzszMIMn3/dYnj8aTPDjfcT/v/994tR2JiBBRzOERqf8Lr3NTBS9j7yYGCCBTou8PvvB4aDT4L+QxIGyJeQcPTA6jkGhr//mRnswYmHlKBjwpsggQCUp2ApEByDwGCyB+psx6YYmHv+MowEZ4BKJ1ixsJ1QpGQaMhwFCDAWuDWgZPqPoQboKFdcSRUXABkIJHYD3dkCMhQsNuMMQx3QoEZQBtcWLmNUEUhiwJXJ8aW1Ox/mMVx92/X/z79vjGDvwQLOWW4HA3pBRyqApXp49IEATABUhglzmDCKctowiHCZMXCyiDOwAfMYKJ9BovMtwy8g/v7nJcObb6cYXn8/wvD2xxlwvkMpfWGMTBNImT378i/xV9+Pubz+fsyK4S2DPDDNiAElREG5HRqgr4BefA0sBV4B2Q+B7GMsbAx7MqG5HxYC8KBgYWSwSzVmOExJUMw+y2D75z/DIRSDkaL4J9CFJ4FJ6iAzE8NxJiaGF0zMDG94BBjegKS/fGAQ+fcXiP8xSPz9x2AJjCl7oAHmQFPYCQQFg/ifXwwuQA1WQM3Zf4FBACwtRd+9xAwKRkhQzAIGRVjqaFDgDoqzDE+BTCmqBgUjwzNw5f7+HMMEUMVDjaAANQIEjRgKGDFshQUFA4MVUDHRGQQWFDAAAM886Mms9rWpAAAAAElFTkSuQmCC"

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(13);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(40)
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
__vue_options__.__file = "/Users/thea/Workspace/weex-demo/src/pages/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57509004"
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
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "no-more": {
    "marginTop": "30",
    "paddingTop": "36",
    "paddingRight": 0,
    "paddingBottom": "31",
    "paddingLeft": 0,
    "color": "#999999",
    "fontSize": "24",
    "textAlign": "center",
    "background": "#f5f5f5"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Nav = __webpack_require__(16);

var _Nav2 = _interopRequireDefault(_Nav);

var _Search = __webpack_require__(20);

var _Search2 = _interopRequireDefault(_Search);

var _SignIn = __webpack_require__(24);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _Slider = __webpack_require__(28);

var _Slider2 = _interopRequireDefault(_Slider);

var _HotBlock = __webpack_require__(32);

var _HotBlock2 = _interopRequireDefault(_HotBlock);

var _CategoryBlock = __webpack_require__(36);

var _CategoryBlock2 = _interopRequireDefault(_CategoryBlock);

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

var modal = weex.requireModule('modal');
var stream = weex.requireModule('stream');
exports.default = {
  mixins: [_mixins2.default],
  name: 'App',
  components: {
    Nav: _Nav2.default,
    SignIn: _SignIn2.default,
    SliderIndex: _Slider2.default,
    HotBlock: _HotBlock2.default,
    CategoryBlock: _CategoryBlock2.default
  },
  data: function data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      hotGoods: [],
      categories: [],
      imageList: [],
      user: {}
    };
  },

  methods: {
    signIn: function signIn() {
      var _this = this;

      this.POST('/api/signIn.json', { userId: this.user.userId }, function (res) {
        var data = res.data;
        if (data.success) {
          var user = _this.user;
          user.isSignIn = true;
          _this.user = user;
          modal.toast({
            message: '签到成功'
          });
        }
      });
    }
  },
  created: function created() {
    var _this2 = this;

    _util2.default.initIconFont();
    this.GET('/api/getIndexSlider.json', function (res) {
      console.log(res);
      var imageList = res.data.imageList || [];
      _this2.imageList = imageList;
    });
    this.GET('/api/hotGoods.json', function (res) {
      console.log(res);
      var goods = res.data.goods || [];
      _this2.hotGoods = goods;
    });
    this.GET('/api/category.json', function (res) {
      console.log(res);
      var categories = res.data.categories || [];
      _this2.categories = categories;
    });
    this.GET('/api/get/userInfo.json', function (res) {
      console.log(res);
      _this2.user = res.data.user;
    });
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
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
__vue_options__.__file = "/Users/thea/Workspace/weex-demo/src/components/Nav.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-65af85a3"
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
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "nav-wrap": {
    "paddingTop": "25",
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": "25"
  },
  "anv-row": {
    "flexDirection": "row"
  },
  "frame": {
    "width": "175",
    "height": "190"
  },
  "nav-image": {
    "width": "176",
    "height": "190"
  }
}

/***/ }),
/* 18 */
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

var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
var navigator = weex.requireModule('navigator');
exports.default = {
  data: function data() {
    return {
      activeIndex: null,
      navs: [[{
        url: 'http://www.lofter.com/inpin?fixedId=3008',
        img: 'https://easyreadfs.nosdn.127.net/1549002056171/nav1.png'
      }, {
        url: 'http://www.lofter.com/inpin?fixedId=3009',
        img: 'https://easyreadfs.nosdn.127.net/1549002076084/nav2.png'
      }, {
        url: 'http://www.lofter.com/benefit/h5/shelf/2005?fixedId=3010',
        img: 'https://easyreadfs.nosdn.127.net/1549002093783/nav3.png'
      }, {
        url: 'http://www.lofter.com/benefit/h5/shelf/2005?fixedId=3011',
        img: 'https://easyreadfs.nosdn.127.net/1549002113571/nav4.png'
      }], [{
        url: 'http://www.lofter.com/benefit/h5/shelf/2008?fixedId=3013',
        img: 'https://easyreadfs.nosdn.127.net/1549002168582/nav5.png'
      }, {
        url: 'http://www.lofter.com/benefit/h5/shelf/2004?fixedId=3014',
        img: 'https://easyreadfs.nosdn.127.net/1549002189739/nav6.png'
      }, {
        url: 'http://www.lofter.com/benefit/h5/shelf/2007?fixedId=3012',
        img: 'https://easyreadfs.nosdn.127.net/1549002206607/nav7.png'
      }, {
        url: 'http://www.lofter.com/benefit/h5/shelf/2002?fixedId=3015',
        img: 'https://easyreadfs.nosdn.127.net/1549002224365/nav8.png'
      }]]
    };
  },

  methods: {
    onchange: function onchange(event) {
      this.activeIndex = event.index;
    },
    jumpUrl: function jumpUrl(url) {
      if (url == '') rerun;
      event.openURL(url);
    },
    jumpList: function jumpList(good) {
      navigator.push({
        url: _util2.default.getJumpBaseUrl('list'),
        animated: "true"
      });
    }
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["nav-wrap"]
  }, _vm._l((_vm.navs), function(row, rowIndex) {
    return _c('div', {
      key: rowIndex,
      staticClass: ["anv-row"]
    }, _vm._l((row), function(nav) {
      return _c('div', {
        key: nav.src,
        staticClass: ["frame"],
        on: {
          "click": function($event) {
            _vm.jumpUrl(nav.url)
          }
        }
      }, [_c('image', {
        staticClass: ["nav-image"],
        attrs: {
          "resize": "cover",
          "src": nav.img
        }
      })])
    }))
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(23)
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
__vue_options__.__file = "/Users/thea/Workspace/weex-demo/src/components/Search.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7cb41050"
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
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "search-wrap": {
    "paddingTop": "20",
    "width": "750"
  },
  "search": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": "20",
    "marginLeft": "20",
    "height": "58",
    "cursor": "text",
    "borderRadius": "8",
    "backgroundColor": "rgb(234,235,237)"
  },
  "icon-search": {
    "marginLeft": "10"
  },
  "search-text": {
    "fontSize": "13",
    "lineHeight": "29",
    "color": "rgb(114,114,115)",
    "textAlign": "left",
    "WebkitBoxFlex": 1,
    "marginLeft": "10"
  }
}

/***/ }),
/* 22 */
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

var modal = weex.requireModule('modal');
exports.default = {
  methods: {
    onSearchClick: function onSearchClick(event) {
      console.log('onclick:', event);
      modal.toast({
        message: 'search click',
        duration: 0.8
      });
    }
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["search-wrap"],
    on: {
      "click": _vm.onSearchClick
    }
  }, [_vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["search"]
  }, [_c('text', {
    staticClass: ["iconfont", "icon-search"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["search-text"]
  }, [_vm._v("护肤套盒")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(27)
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
__vue_options__.__file = "/Users/thea/Workspace/weex-demo/src/components/SignIn.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-fb473e1c"
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
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "signin-wrap": {
    "paddingLeft": "30",
    "paddingRight": "15",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "background": "#f7f7f7",
    "marginTop": "45",
    "marginBottom": 0,
    "width": "690",
    "height": "80"
  },
  "coins": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "icon-coin": {
    "marginLeft": "10",
    "width": "22",
    "height": "28"
  },
  "welfare-coins": {
    "marginLeft": "10",
    "color": "#333333",
    "fontSize": "36"
  },
  "earnmore": {
    "marginLeft": "30",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "f-color": {
    "color": "#666666",
    "fontSize": "24"
  },
  "icon-more": {
    "marginLeft": "3",
    "color": "rgba(0,0,0,0.47)",
    "fontSize": "28"
  },
  "sign-in": {
    "height": "48",
    "lineHeight": "48",
    "paddingTop": 0,
    "paddingRight": "14",
    "paddingBottom": 0,
    "paddingLeft": "14",
    "color": "#97CC00",
    "background": "none",
    "fontSize": "24",
    "borderRadius": "40",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#97CC00"
  }
}

/***/ }),
/* 26 */
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

var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
var navigator = weex.requireModule('navigator');
exports.default = {
  props: ['user'],
  data: function data() {
    return {
      activeIndex: null
    };
  },

  methods: {
    signIn: function signIn() {
      this.$emit('signIn');
    },
    onchange: function onchange(event) {
      this.activeIndex = event.index;
    },
    jumpUrl: function jumpUrl(url) {
      if (url == '') rerun;
      event.openURL(url);
    }
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["signin-wrap"]
  }, [_c('div', {
    staticClass: ["coins"]
  }, [_c('text', {
    staticClass: ["f-color"]
  }, [_vm._v("福利币:")]), _c('image', {
    staticClass: ["icon-coin"],
    attrs: {
      "src": __webpack_require__(2)
    }
  }), _c('text', {
    staticClass: ["welfare-coins"]
  }, [_vm._v(_vm._s(_vm.user.welfareScore))]), _vm._m(0)]), (_vm.user.isSignIn) ? _c('text', {
    staticClass: ["sign-in"]
  }, [_vm._v("已签到")]) : _c('text', {
    staticClass: ["sign-in"],
    on: {
      "click": _vm.signIn
    }
  }, [_vm._v("签到")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["earnmore"]
  }, [_c('text', {
    staticClass: ["f-color"]
  }, [_vm._v("赚更多")]), _c('text', {
    staticClass: ["iconfont", "icon-more"]
  }, [_vm._v("")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(31)
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
__vue_options__.__file = "/Users/thea/Workspace/weex-demo/src/components/Slider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2dedc691"
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
/* 29 */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "width": "750",
    "height": "240"
  },
  "image": {
    "width": "750",
    "height": "240"
  },
  "xtag": {
    "position": "absolute",
    "bottom": "27",
    "right": "30"
  },
  "xtag-text": {
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "height": "40",
    "lineHeight": "40",
    "textAlign": "center",
    "letterSpacing": "3",
    "fontSize": "20",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "color": "#ffffff",
    "borderRadius": "20"
  }
}

/***/ }),
/* 30 */
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

var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
var navigator = weex.requireModule('navigator');
exports.default = {
  props: ["imageList"],
  data: function data() {
    return {
      activeIndex: null
    };
  },

  methods: {
    onchange: function onchange(event) {
      this.activeIndex = event.index;
    },
    jumpUrl: function jumpUrl(url) {
      if (url == '') rerun;
      event.openURL(url);
    },
    jumpList: function jumpList(good) {
      navigator.push({
        url: _util2.default.getJumpBaseUrl('list'),
        animated: "true"
      });
    }
  }
};

/***/ }),
/* 31 */
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
  }, _vm._l((_vm.imageList), function(img) {
    return _c('div', {
      key: img.src,
      staticClass: ["frame"],
      on: {
        "click": function($event) {
          _vm.jumpUrl(img.url)
        }
      }
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  })), _c('div', {
    staticClass: ["xtag"]
  }, [_c('text', {
    staticClass: ["xtag-text"]
  }, [_vm._v(_vm._s(_vm.activeIndex + 1) + "/" + _vm._s((_vm.imageList || 0).length))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(33)
)

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(35)
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
        "src": __webpack_require__(2)
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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(37)
)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(39)
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
/* 37 */
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
/* 38 */
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
/* 39 */
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

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', [_c('SliderIndex', {
    attrs: {
      "imageList": _vm.imageList
    }
  }), _c('Nav'), _c('SignIn', {
    attrs: {
      "user": _vm.user
    },
    on: {
      "signIn": _vm.signIn
    }
  }), _c('HotBlock', {
    attrs: {
      "goods": _vm.hotGoods
    }
  }), _vm._l((_vm.categories), function(category, index) {
    return _c('CategoryBlock', {
      key: index,
      attrs: {
        "category": category
      }
    })
  }), _c('text', {
    staticClass: ["no-more"]
  }, [_vm._v("没有更多了")])], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);