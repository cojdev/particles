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
/******/ 	__webpack_require__.p = "docs/js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Canvas.js":
/*!**************************!*\
  !*** ./src/js/Canvas.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ "./src/js/prototype.js");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prototype__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Canvas =
/*#__PURE__*/
function () {
  function Canvas(element) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 640;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 480;

    _classCallCheck(this, Canvas);

    this.element = element;
    this.element.width = width;
    this.element.height = height;
    this.ctx = this.element.getContext('2d');
  }

  _createClass(Canvas, [{
    key: "animate",
    value: function animate(callback) {
      this.ctx.clearRect(0, 0, this.element.width, this.element.height);
      callback();
      requestAnimationFrame(this.animate.bind(this, callback));
    } //Update element size to fill window

  }, {
    key: "resize",
    value: function resize() {
      this.element.width = window.innerWidth;
      this.element.height = window.innerHeight;
    }
  }]);

  return Canvas;
}();



/***/ }),

/***/ "./src/js/Emitter.js":
/*!***************************!*\
  !*** ./src/js/Emitter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Emitter; });
/* harmony import */ var _ParticleGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParticleGroup */ "./src/js/ParticleGroup.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // Particle Emitter

var Emitter =
/*#__PURE__*/
function (_ParticleGroup) {
  _inherits(Emitter, _ParticleGroup);

  function Emitter(canvas, x, y, life) {
    var _this;

    var mouse = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var dia = arguments.length > 5 ? arguments[5] : undefined;

    _classCallCheck(this, Emitter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Emitter).call(this, canvas, x, y, life));
    _this.mouse = mouse;
    _this.particles = [];
    _this.dia = dia || false;

    _this.canvas.addEventListener('mousemove', function (e) {
      _this.setMouse(e);

      _this.setPosition(_this.getMouse().x, _this.getMouse().y);
    });

    return _this;
  }

  _createClass(Emitter, [{
    key: "render",
    value: function render() {
      var particles = this.particles;
      var mul = 1;

      for (var i = 0; i < mul; i++) {
        particles.push(this.spawn(this.x, this.y, 1));
      }

      if (particles.length > this.life * mul) {
        for (var _i = 0; _i < mul; _i++) {
          particles.shift();
        }
      }

      for (var _i2 = 0; _i2 < particles.length; _i2++) {
        var p = particles[_i2];
        p.draw();
        p.emit(this.life);
        p.shrink();
      }
    }
  }]);

  return Emitter;
}(_ParticleGroup__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/Field.js":
/*!*************************!*\
  !*** ./src/js/Field.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Field; });
/* harmony import */ var _ParticleGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParticleGroup */ "./src/js/ParticleGroup.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Field =
/*#__PURE__*/
function (_ParticleGroup) {
  _inherits(Field, _ParticleGroup);

  function Field(canvas, x, y, life) {
    var _this;

    _classCallCheck(this, Field);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Field).call(this, canvas, x, y, life));
    _this.particles = [];

    for (var i = 0; i < _this.life; i++) {
      var _x = Math.random() * _this.canvas.width,
          _y = Math.random() * _this.canvas.height;

      _this.particles.push(_this.spawn(_x, _y, 1));
    }

    return _this;
  }

  _createClass(Field, [{
    key: "field",
    value: function field(particle) {
      var s = particle.speed;
      particle.angle = particle.angle + Math.random() * 10 - 5;
      particle.x = particle.x + s * Math.cos(particle.angle * Math.PI / 180);
      particle.y = particle.y + s * Math.sin(particle.angle * Math.PI / 180);
      particle.age = particle.age + 1 / particle.life;
      particle.overflow();
    }
  }, {
    key: "render",
    value: function render() {
      var particles = this.particles;

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.draw();
        this.field(p);
      }
    }
  }]);

  return Field;
}(_ParticleGroup__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/Particle.js":
/*!****************************!*\
  !*** ./src/js/Particle.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Particle; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Particle =
/*#__PURE__*/
function () {
  function Particle(canvas, x, y, diameter) {
    _classCallCheck(this, Particle);

    // Check if Canvas class is being used
    this.canvas = canvas.element ? canvas.element : canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = x || 0;
    this.y = y || 0;
    this.diameterDefault = diameter || 2 + Math.random() * 8;
    this.diameter = this.diameterDefault;
    this.vx = 0;
    this.vy = 0;
    this.speed = Math.random() * .2 + .5;
    this.angle = Math.random() * 360;
    this.age = 0;
    var hue = Math.floor(Math.random() * 360);
    this.fill = 'hsl(' + hue + ', 95%, 70%)';
    this.outline = Math.random() > .5 ? true : false;
  }

  _createClass(Particle, [{
    key: "emit",
    value: function emit(life) {
      var s = this.speed * 2;
      this.angle = this.angle + Math.random() * 10 - 5;
      this.x += s * Math.cos(this.angle * Math.PI / 180);
      this.y += s * Math.sin(this.angle * Math.PI / 180);
      this.age += 1 / life;
      this.overflow();
    }
  }, {
    key: "overflow",
    value: function overflow() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.canvas.width;
      var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.canvas.height;
      var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      if (this.x < left) this.x = right;
      if (this.x > right) this.x = left;
      if (this.y < top) this.y = bottom;
      if (this.y > bottom) this.y = top;
    }
  }, {
    key: "shrink",
    value: function shrink() {
      this.diameter = (1 - this.age) * this.diameterDefault;
    }
  }, {
    key: "draw",
    value: function draw() {
      var ctx = this.ctx,
          x = this.x,
          y = this.y,
          diameter = this.diameter,
          fill = this.fill;
      ctx.beginPath();
      ctx.fillStyle = fill;
      ctx.strokeStyle = fill;
      ctx.lineWidth = 2;
      ctx.arc(x, y, diameter, 0, 2 * Math.PI);
      ctx.closePath();
      this.outline !== true ? ctx.fill() : ctx.stroke();
    }
  }]);

  return Particle;
}();



/***/ }),

/***/ "./src/js/ParticleGroup.js":
/*!*********************************!*\
  !*** ./src/js/ParticleGroup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParticleGroup; });
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ "./src/js/Particle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ParticleGroup =
/*#__PURE__*/
function () {
  /**
   * particle field
   * @param {CanvasElement} canvas the canvas to be rendered on
   * @param {number} x x position
   * @param {number} y y position
   * @param {number} life lifespan
   */
  function ParticleGroup(canvas) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var life = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, ParticleGroup);

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.life = life;
    this.mouse = {
      x: 0,
      y: 0
    };
  }

  _createClass(ParticleGroup, [{
    key: "setPosition",
    value: function setPosition(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "setMouse",
    value: function setMouse(e) {
      var rect = this.canvas.getBoundingClientRect();
      this.mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  }, {
    key: "getMouse",
    value: function getMouse() {
      return {
        x: this.mouse.x,
        y: this.mouse.y
      };
    }
  }, {
    key: "spawn",
    value: function spawn(x, y, amount, dia) {
      var arr = [];
      dia = dia || false;
      amount = amount || 1;

      if (amount > 1) {
        for (var i = 0; i < amount; i++) {
          if (dia) {
            arr.push(new _Particle__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, x, y, dia));
          } else {
            arr.push(new _Particle__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, x, y));
          }
        }
      } else {
        arr = new _Particle__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, x, y, dia);
      }

      return arr;
    }
  }]);

  return ParticleGroup;
}();



/***/ }),

/***/ "./src/js/helper.js":
/*!**************************!*\
  !*** ./src/js/helper.js ***!
  \**************************/
/*! exports provided: $ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
function $(elemId) {
  return document.getElementById(elemId);
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ "./src/js/prototype.js");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prototype__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/js/helper.js");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Canvas */ "./src/js/Canvas.js");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Field */ "./src/js/Field.js");
/* harmony import */ var _Emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Emitter */ "./src/js/Emitter.js");





'use strict';

var mouse;

function init() {
  var cvs = new _Canvas__WEBPACK_IMPORTED_MODULE_2__["default"](Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$"])("canvas"), window.innerWidth, window.innerHeight);
  cvs.resize();
  window.evt('resize', cvs.resize, false);
  var network = new _Field__WEBPACK_IMPORTED_MODULE_3__["default"](cvs.element, 0, 0, 50);
  var emitter = new _Emitter__WEBPACK_IMPORTED_MODULE_4__["default"](cvs.element, 0, 0, 50, true);
  cvs.animate(function () {
    network.render();
    emitter.render();
  });
}

function getMousePos(cvs, evt) {
  var rect = cvs.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

init();

/***/ }),

/***/ "./src/js/prototype.js":
/*!*****************************!*\
  !*** ./src/js/prototype.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

EventTarget.prototype.evt = function (event, callback) {
  return this.addEventListener(event, callback);
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map