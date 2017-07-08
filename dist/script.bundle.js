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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(4);

var TRANSITION_DURATION = 300; // завязано на css.

var FullImageModal = exports.FullImageModal = function () {
  /**
   * @param containerSelector {string} id контейнера модалки.
   */
  function FullImageModal(containerSelector) {
    _classCallCheck(this, FullImageModal);

    this.initNodes(containerSelector);
    this.bindOutsideImageClick();
  }

  _createClass(FullImageModal, [{
    key: 'initNodes',
    value: function initNodes(containerSelector) {
      this.bodyEl = document.querySelector('body');
      this.containerEl = document.querySelector(containerSelector);
      this.imgEl = this.containerEl.querySelector('.j-gallery-modal__img');

      if (![this.bodyEl, this.containerEl, this.imgEl].every(Boolean)) {
        throw new Error();
      }
    }
  }, {
    key: 'bindOutsideImageClick',
    value: function bindOutsideImageClick() {
      var _this = this;

      this.containerEl.addEventListener('click', function (e) {
        if (!_this.imgEl.contains(e.target)) {
          _this.close();
        }
      });
    }
  }, {
    key: 'open',
    value: function open(src) {
      this.imgEl.setAttribute('src', src);
      this.bodyEl.classList.add('body_no-scroll');
      this.containerEl.classList.remove('modal-container_hidden');
      this.containerEl.classList.add('modal-container_transparent');
    }
  }, {
    key: 'close',
    value: function close() {
      var _this2 = this;

      this.bodyEl.classList.remove('body_no-scroll');
      this.containerEl.classList.remove('modal-container_transparent');
      setTimeout(function () {
        _this2.containerEl.classList.add('modal-container_hidden');
        _this2.imgEl.setAttribute('src', '');
      }, TRANSITION_DURATION);
    }
  }]);

  return FullImageModal;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modal = __webpack_require__(0);

__webpack_require__(1);
__webpack_require__(2);

var modal = new _modal.FullImageModal('.j-modal-container');
var galleryItems = document.getElementsByClassName('j-gallery-item');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = galleryItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var galleryItem = _step.value;

    galleryItem.addEventListener('click', function (e) {
      modal.open(e.currentTarget.getAttribute('data-src'));
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);