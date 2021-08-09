module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "56aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ed32");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "ed32":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1f563ec1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/img-preview/index.vue?vue&type=template&id=7c5fba9a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c('div',{staticClass:"preview-mask"},[_c('div',{staticClass:"preview-content"},[_c('span',{staticClass:"close",on:{"click":function($event){_vm.visible = false}}},[_c('svg',{staticClass:"icon",attrs:{"t":"1621927142745","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1179","width":"38","height":"38"}},[_c('path',{attrs:{"d":"M885.314 835.089l-329.395-329.396 329.395-329.396c12.128-12.128 12.128-31.792 0-43.919-12.127-12.128-31.792-12.128-43.919 0l-329.396 329.396-329.396-329.396c-12.128-12.128-31.792-12.128-43.919 0s-12.128 31.792 0 43.919l329.395 329.396-329.395 329.396c-12.128 12.128-12.128 31.793 0 43.919 12.128 12.128 31.792 12.128 43.919 0l329.396-329.396 329.396 329.396c12.128 12.128 31.793 12.128 43.919 0 12.128-12.127 12.128-31.792 0-43.919z","fill":"#ffffff","p-id":"1180"}})])]),_c('div',{staticClass:"img-wrapper"},[_c('div',{ref:"imgBox",staticClass:"img-box"},[(!_vm.list.length)?_c('div',{staticClass:"empty"},[_vm._v("没有可预览的图片")]):_vm._e(),_c('div',{staticClass:"img-list"},_vm._l((_vm.list),function(img){return _c('div',{key:img,staticClass:"img-item",style:({width: _vm.clientWidth})},[_c('img',{ref:"img",refInFor:true,attrs:{"src":img,"alt":img}})])}),0)])]),(_vm.list.length)?_c('div',{staticClass:"img-tools"},[_c('span',{staticClass:"action",attrs:{"title":"上一张"},on:{"click":function($event){return _vm.changeImg(-1)}}},[_c('svg',{staticClass:"icon",attrs:{"t":"1621927510660","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"5163","width":"28","height":"28"}},[_c('path',{attrs:{"d":"M754.285714 176.342857V88c0-7.657143-8.8-11.885714-14.742857-7.2L224.342857 483.2a36.411429 36.411429 0 0 0 0 57.485714l515.2 402.4c6.057143 4.685714 14.742857 0.457143 14.742857-7.2v-88.342857c0-5.6-2.628571-10.971429-6.971428-14.4l-411.428572-321.142857 411.428572-321.257143c4.342857-3.428571 6.971429-8.8 6.971428-14.4z","p-id":"5164","fill":"#ffffff"}})])]),_c('span',{staticClass:"action",attrs:{"title":"下一张"},on:{"click":function($event){return _vm.changeImg(1)}}},[_c('svg',{staticClass:"icon",attrs:{"t":"1621927780022","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"5462","width":"28","height":"28"}},[_c('path',{attrs:{"d":"M801.942857 483.2L286.742857 80.8A9.108571 9.108571 0 0 0 272 88v88.342857c0 5.6 2.628571 10.971429 6.971429 14.4l411.428571 321.257143-411.428571 321.257143c-4.457143 3.428571-6.971429 8.8-6.971429 14.4V936c0 7.657143 8.8 11.885714 14.742857 7.2l515.2-402.4a36.525714 36.525714 0 0 0 0-57.6z","p-id":"5463","fill":"#ffffff"}})])]),_c('span',{staticClass:"action",attrs:{"title":"放大"},on:{"click":function($event){return _vm.zoomImg(1)}}},[_c('svg',{staticClass:"icon",attrs:{"t":"1621927810301","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"5681","width":"28","height":"28"}},[_c('path',{attrs:{"d":"M258.285714 197.028571l50.171429-50.171428a9.154286 9.154286 0 0 0-5.371429-15.542857L120 109.714286c-5.828571-0.685714-10.857143 4.228571-10.171429 10.171428L131.428571 302.971429c0.914286 7.542857 10.171429 10.742857 15.542858 5.371428l49.942857-49.942857L349.714286 411.085714c3.542857 3.542857 9.371429 3.542857 12.914285 0l48.457143-48.342857c3.542857-3.542857 3.542857-9.371429 0-12.914286L258.285714 197.028571z m403.085715 214.057143c3.542857 3.542857 9.371429 3.542857 12.914285 0l152.8-152.685714 49.942857 49.942857a9.154286 9.154286 0 0 0 15.542858-5.371428L914.171429 120c0.685714-5.828571-4.228571-10.857143-10.171429-10.171429L720.914286 131.428571c-7.542857 0.914286-10.742857 10.171429-5.371429 15.542858l50.171429 50.171428L612.914286 349.714286a9.177143 9.177143 0 0 0 0 12.914285l48.457143 48.457143zM892.571429 721.028571c-0.914286-7.542857-10.171429-10.742857-15.542858-5.371428l-49.942857 49.942857L674.285714 612.914286a9.177143 9.177143 0 0 0-12.914285 0l-48.457143 48.342857a9.177143 9.177143 0 0 0 0 12.914286L765.714286 826.971429l-50.171429 50.171428a9.154286 9.154286 0 0 0 5.371429 15.542857L904 914.285714c5.828571 0.685714 10.857143-4.228571 10.171429-10.171428L892.571429 721.028571z m-529.942858-108.114285a9.177143 9.177143 0 0 0-12.914285 0L196.914286 765.6l-49.942857-49.942857a9.154286 9.154286 0 0 0-15.542858 5.371428L109.828571 904c-0.685714 5.828571 4.228571 10.857143 10.171429 10.171429L303.085714 892.571429c7.542857-0.914286 10.742857-10.171429 5.371429-15.542858L258.285714 826.971429 411.085714 674.285714c3.542857-3.542857 3.542857-9.371429 0-12.914285l-48.457143-48.457143z","p-id":"5682","fill":"#ffffff"}})])]),_c('span',{staticClass:"action",attrs:{"title":"缩小"},on:{"click":function($event){return _vm.zoomImg(-1)}}},[_c('svg',{staticClass:"icon",attrs:{"t":"1621927830973","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"5900","width":"28","height":"28"}},[_c('path',{attrs:{"d":"M373.714286 202.171429c-0.914286-7.542857-10.171429-10.742857-15.542857-5.371429l-49.942858 49.942857L155.428571 94.057143a9.177143 9.177143 0 0 0-12.914285 0l-48.457143 48.342857a9.177143 9.177143 0 0 0 0 12.914286L246.857143 308.114286l-50.171429 50.171428a9.154286 9.154286 0 0 0 5.371429 15.542857L385.142857 395.428571c5.828571 0.685714 10.857143-4.228571 10.171429-10.171428L373.714286 202.171429z m11.542857 426.514285L202.057143 650.285714c-7.542857 0.914286-10.742857 10.171429-5.371429 15.542857l50.171429 50.171429L94.057143 868.571429a9.177143 9.177143 0 0 0 0 12.914285l48.457143 48.342857c3.542857 3.542857 9.371429 3.542857 12.914285 0L308.228571 777.142857l49.942858 49.942857A9.154286 9.154286 0 0 0 373.714286 821.714286l21.6-182.971429c0.685714-5.828571-4.228571-10.742857-10.057143-10.057143z m253.485714-233.371428L821.942857 373.714286c7.542857-0.914286 10.742857-10.171429 5.371429-15.542857L777.142857 308.114286 929.942857 155.428571c3.542857-3.542857 3.542857-9.371429 0-12.914285l-48.457143-48.342857a9.177143 9.177143 0 0 0-12.914285 0L715.771429 246.742857l-49.942858-49.942857a9.154286 9.154286 0 0 0-15.542857 5.371429L628.685714 385.142857c-0.685714 5.942857 4.228571 10.857143 10.057143 10.171429zM777.142857 715.885714l50.171429-50.171428a9.154286 9.154286 0 0 0-5.371429-15.542857L638.857143 628.571429c-5.828571-0.685714-10.857143 4.228571-10.171429 10.171428L650.285714 821.828571c0.914286 7.542857 10.171429 10.742857 15.542857 5.371429l49.942858-49.942857L868.571429 929.942857c3.542857 3.542857 9.371429 3.542857 12.914285 0l48.457143-48.342857c3.542857-3.542857 3.542857-9.371429 0-12.914286L777.142857 715.885714z","p-id":"5901","fill":"#ffffff"}})])]),_c('span',{staticClass:"action",attrs:{"title":"向右翻转90°"},on:{"click":function($event){return _vm.rotateImg(1)}}},[_c('svg',{staticClass:"icon",attrs:{"t":"1621927951787","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"6338","width":"28","height":"28"}},[_c('path',{attrs:{"d":"M511.314286 68.571429C258.857143 68.914286 54.857143 273.142857 54.857143 525.6c0 146.285714 68.8 276.571429 175.771428 360.228571l-42.857142 54.857143c-4.685714 6.057143-0.342857 14.857143 7.2 14.742857l190.857142-0.914285c5.942857 0 10.285714-5.6 8.8-11.314286L349.485714 757.714286a9.142857 9.142857 0 0 0-16.114285-3.428572L286.857143 813.828571c-11.657143-9.142857-22.857143-19.085714-33.485714-29.714285a364.16 364.16 0 0 1-78.4-116.228572C155.885714 622.857143 146.285714 574.971429 146.285714 525.6s9.6-97.257143 28.685715-142.285714c18.4-43.542857 44.8-82.628571 78.4-116.228572 33.6-33.6 72.685714-60 116.228571-78.4C414.742857 169.6 462.628571 160 512 160s97.257143 9.6 142.285714 28.685714c43.542857 18.4 82.628571 44.8 116.228572 78.4 33.6 33.6 60 72.685714 78.4 116.228572 19.085714 45.028571 28.685714 92.914286 28.685714 142.285714s-9.6 97.257143-28.685714 142.285714a364.16 364.16 0 0 1-78.4 116.228572c-8.571429 8.571429-17.485714 16.571429-26.742857 24.228571a9.062857 9.062857 0 0 0-1.371429 12.685714l45.028571 57.714286c3.2 4 9.028571 4.685714 13.028572 1.485714C903.428571 796.342857 969.142857 668.685714 969.142857 525.6c0-252.685714-205.028571-457.371429-457.828571-457.028571z","p-id":"6339","fill":"#ffffff"}})])]),_c('span',{staticClass:"action",attrs:{"title":"向左翻转90°"},on:{"click":function($event){return _vm.rotateImg(-1)}}},[_c('svg',{staticClass:"icon",attrs:{"t":"1621928328676","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"6995","width":"28","height":"28"}},[_c('path',{attrs:{"d":"M793.371429 885.828571C900.342857 802.171429 969.142857 671.885714 969.142857 525.6 969.142857 273.142857 765.142857 68.914286 512.685714 68.571429 259.885714 68.228571 54.857143 272.914286 54.857143 525.6c0 143.085714 65.714286 270.742857 168.685714 354.514286 4 3.2 9.828571 2.514286 13.028572-1.485715l45.028571-57.714285c3.085714-3.885714 2.4-9.485714-1.371429-12.685715-9.257143-7.542857-18.171429-15.657143-26.742857-24.228571a364.16 364.16 0 0 1-78.4-116.228571C155.885714 622.857143 146.285714 574.971429 146.285714 525.6s9.6-97.257143 28.685715-142.285714c18.4-43.542857 44.8-82.628571 78.4-116.228572 33.6-33.6 72.685714-60 116.228571-78.4C414.742857 169.6 462.628571 160 512 160s97.257143 9.6 142.285714 28.685714c43.542857 18.4 82.628571 44.8 116.228572 78.4 33.6 33.6 60 72.685714 78.4 116.228572 19.085714 45.028571 28.685714 92.914286 28.685714 142.285714s-9.6 97.257143-28.685714 142.285714a364.16 364.16 0 0 1-78.4 116.228572c-10.628571 10.628571-21.828571 20.571429-33.485715 29.714285L690.514286 754.285714a9.142857 9.142857 0 0 0-16.114286 3.428572l-45.257143 185.371428c-1.371429 5.714286 2.971429 11.314286 8.8 11.314286l190.857143 0.914286c7.657143 0 12-8.8 7.2-14.742857l-42.628571-54.742858z","p-id":"6996","fill":"#ffffff"}})])]),_c('span',{staticClass:"action",attrs:{"title":"还原"},on:{"click":_vm.reset}},[_c('svg',{staticClass:"icon",attrs:{"t":"1621928058012","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"6776","width":"28","height":"28"}},[_c('path',{attrs:{"d":"M132.571429 128h-68.571429c-5.028571 0-9.142857 4.114286-9.142857 9.142857v749.714286c0 5.028571 4.114286 9.142857 9.142857 9.142857h68.571429c5.028571 0 9.142857-4.114286 9.142857-9.142857V137.142857c0-5.028571-4.114286-9.142857-9.142857-9.142857z m827.428571 0h-68.571429c-5.028571 0-9.142857 4.114286-9.142857 9.142857v749.714286c0 5.028571 4.114286 9.142857 9.142857 9.142857h68.571429c5.028571 0 9.142857-4.114286 9.142857-9.142857V137.142857c0-5.028571-4.114286-9.142857-9.142857-9.142857zM824.342857 503.2L678.514286 388.114286a8.262857 8.262857 0 0 0-13.371429 6.514285V470.857143H358.857143v-71.771429c0-6.857143-8-10.742857-13.371429-6.514285L199.657143 507.771429a8.16 8.16 0 0 0 0 12.914285l145.714286 115.2c5.371429 4.228571 13.371429 0.457143 13.371428-6.514285V553.142857h306.285714v71.771429c0 6.857143 8 10.742857 13.371429 6.514285l145.714286-115.2c4.342857-3.314286 4.342857-9.714286 0.228571-13.028571z","p-id":"6777","fill":"#ffffff"}})])]),_c('span',{staticClass:"action",attrs:{"title":"下载"},on:{"click":_vm.downloadImg}},[_c('svg',{staticClass:"icon",attrs:{"t":"1621928000209","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"6557","width":"28","height":"28"}},[_c('path',{attrs:{"d":"M909.6 818.285714H114.4c-5.142857 0-9.257143 4.114286-9.257143 9.142857v68.571429c0 5.028571 4.114286 9.142857 9.257143 9.142857h795.2c5.142857 0 9.257143-4.114286 9.257143-9.142857v-68.571429c0-5.028571-4.114286-9.142857-9.257143-9.142857zM504.8 691.428571a9.142857 9.142857 0 0 0 14.4 0l128-161.942857c4.685714-5.942857 0.457143-14.742857-7.2-14.742857h-84.685714V128c0-5.028571-4.114286-9.142857-9.142857-9.142857h-68.571429c-5.028571 0-9.142857 4.114286-9.142857 9.142857v386.628571H384c-7.657143 0-11.885714 8.8-7.2 14.742858l128 162.057142z","p-id":"6558","fill":"#ffffff"}})])])]):_vm._e()])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/img-preview/index.vue?vue&type=template&id=7c5fba9a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/img-preview/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var img_previewvue_type_script_lang_js_ = ({
  name: 'ImgPreview',
  data () {
    return {
      visible: false,
      clientWidth: 0, // 图片容器宽度
      list: [], // 图片列表
      scale: 1, // 图片初始缩放比例
      rotate: 0, // 图片初始旋转比例
      translateX: 0, // 图片盒子初始水平平移距离
      active: 0 // 当前活动的图片
    }
  },
  mounted () {
    this.clientWidth = document.body.offsetWidth + 'px'
    document.body.addEventListener('mousewheel', this.mousewheelZoom)
  },
  beforeDestroy () {
    document.body.removeEventListener('mousewheel', this.mousewheelZoom)
  },
  methods: {
    show () {
      this.visible = true
    },
    // 切换图片
    changeImg (dir) {
      if (dir > 0 && this.active === this.list.length - 1) {
        return
      }
      if (dir < 0 && this.active === 0) {
        return
      }
      if (dir > 0 && this.active < this.list.length - 1) {
        this.active += 1
      } else if (dir < 0 && this.active > 0) {
        this.active -= 1
      }
      this.scale = 1
      this.translateX = -100 * this.active
      this.setImgTransform()
      this.$refs.imgBox.style.transform = 'translateX(' + this.translateX + '%)'
    },
    // 鼠标滚轮缩放图片
    mousewheelZoom (arg) {
      const dir = (arg.detail || -arg.wheelDelta) > 0 ? -1 : 1
      this.zoomImg(dir)
    },
    // zoom图片
    zoomImg (dir) {
      this.scale = dir > 0 ? this.scale + 0.2 : dir < 0 ? this.scale - 0.2 : 1
      if (this.scale < 0.4) {
        this.scale = 0.4
        return
      } else if (this.scale > 3.2) {
        this.scale = 3.2
        return
      }
      this.setImgTransform()
    },
    // 翻转图片
    rotateImg (dir) {
      this.rotate = dir > 0 ? this.rotate - 90 : this.rotate + 90
      this.setImgTransform()
    },
    // 还原图片
    reset () {
      this.scale = 1
      this.rotate = 0
      this.setImgTransform()
    },
    // 设置图片的transform
    setImgTransform () {
      this.$refs.img[this.active].style.transform = 'rotateZ(' + this.rotate + 'deg) scale(' + this.scale + ')'
    },
    // 下载图片(利用canvas处理跨域图片直接打开图片的问题)
    downloadImg () {
        try {
            let image = new Image()
            image.crossOrigin = 'anonymous';
            image.onload = () => {
                let canvas = document.createElement('canvas')
                canvas.width = image.width
                canvas.height = image.height
                let context = canvas.getContext('2d')
                context.drawImage(image, 0, 0, image.width, image.height)
                let url = canvas.toDataURL('image/png')
                let a = document.createElement('a')
                let event = new MouseEvent('click')
                a.download = '';
                a.href = url
                a.dispatchEvent(event)
            }
            image.onerror = (err) => {
                console.log('图片下载失败')
            }
            image.src = this.list[this.active]
        } catch (err) {
            console.log('图片下载失败')
        }
    },
  }
});

// CONCATENATED MODULE: ./packages/img-preview/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_img_previewvue_type_script_lang_js_ = (img_previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/img-preview/index.vue?vue&type=style&index=0&lang=less&
var img_previewvue_type_style_index_0_lang_less_ = __webpack_require__("56aa");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/img-preview/index.vue






/* normalize component */

var component = normalizeComponent(
  packages_img_previewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var img_preview = (component.exports);
// CONCATENATED MODULE: ./packages/index.js



const install = (option = {}) => {
  // 扩展vue构造器
  const Imgpreview = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(img_preview);
  // 判断是否安装
//   if (install.installed) return
  // 创建实例并且过滤参数
  const instance = new Imgpreview({
    data () {
      return { ...option, visible: true }
    }
  })
  // 挂载实例
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}
// 挂载到Vue原型上
/* harmony default export */ var packages_0 = (install);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=index.common.js.map