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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
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

/***/ 27:
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

/***/ 28:
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

/***/ 29:
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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SliderDetail = __webpack_require__(26);

var _SliderDetail2 = _interopRequireDefault(_SliderDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_SliderDetail2.default.el = '#root';
new Vue(_SliderDetail2.default);

/***/ })

/******/ });