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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(13)
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

/***/ 11:
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

/***/ 12:
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

/***/ 13:
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Nav = __webpack_require__(10);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Nav2.default.el = '#root';
new Vue(_Nav2.default);

/***/ })

/******/ });