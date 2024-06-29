/*!
 * 
 * Licensed to Cloudera, Inc. under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  Cloudera, Inc. licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
"use strict";
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-7cb30146"],{

/***/ "./desktop/core/src/desktop/js/catalog/DataCatalogEntry.ts":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/DataCatalogEntry.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataCatalogEntry)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
/* harmony import */ var catalog_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! catalog/api */ "./desktop/core/src/desktop/js/catalog/api.ts");
/* harmony import */ var catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! catalog/catalogUtils */ "./desktop/core/src/desktop/js/catalog/catalogUtils.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var apps_editor_execution_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apps/editor/execution/api */ "./desktop/core/src/desktop/js/apps/editor/execution/api.ts");
/* harmony import */ var _dataCatalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.









var cachedOnly = function cachedOnly(options) {
  return !!(options && options.cachedOnly);
};
var shouldReload = function shouldReload(options) {
  return !!(!_dataCatalog__WEBPACK_IMPORTED_MODULE_7__.DataCatalog.cacheEnabled() || options && (options.refreshCache || options.refreshAnalysis));
};

/**
 * Helper function to get the multi table catalog version of a catalog entry
 */
var getMultiTableEntry = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(catalogEntry) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (catalogEntry.isTableOrView()) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", Promise.reject());
        case 2:
          return _context.abrupt("return", catalogEntry.dataCatalog.getMultiTableEntry({
            namespace: catalogEntry.namespace,
            compute: catalogEntry.compute,
            paths: [catalogEntry.path]
          }));
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getMultiTableEntry(_x) {
    return _ref.apply(this, arguments);
  };
}();
var DataCatalogEntry = /*#__PURE__*/function () {
  function DataCatalogEntry(options) {
    _classCallCheck(this, DataCatalogEntry);
    this.compute = void 0;
    this.dataCatalog = void 0;
    this.definition = void 0;
    this.isTemporary = void 0;
    this.name = void 0;
    this.namespace = void 0;
    this.path = void 0;
    this.saveTimeout = -1;
    this.commentObservable = void 0;
    this.analysis = void 0;
    this.analysisPromise = void 0;
    this.childrenPromise = void 0;
    this.navigatorMeta = void 0;
    this.navigatorMetaForChildrenPromise = void 0;
    this.navigatorMetaPromise = void 0;
    this.sqlAnalyzerMeta = void 0;
    this.sqlAnalyzerMetaPromise = void 0;
    this.sqlAnalyzerPopularity = void 0;
    this.sqlAnalyzerPopularityForChildrenPromise = void 0;
    this.partitions = void 0;
    this.partitionsPromise = void 0;
    this.sample = void 0;
    this.samplePromise = void 0;
    this.sourceMeta = void 0;
    this.sourceMetaPromise = void 0;
    if (!options.dataCatalog.connector) {
      throw new Error('DataCatalogEntry created without connector');
    }
    this.namespace = options.namespace;
    this.compute = options.compute;
    this.dataCatalog = options.dataCatalog;
    this.path = typeof options.path === 'string' ? options.path.split('.') : options.path || [];
    this.name = this.path.length ? this.path[this.path.length - 1] : this.getConnector().id;
    this.isTemporary = options.isTemporary;
    if (options.definition) {
      this.definition = options.definition;
    } else if (this.path.length === 0) {
      this.definition = {
        type: 'source'
      };
    } else if (this.path.length === 1) {
      this.definition = {
        type: 'database'
      };
    } else if (this.path.length === 2) {
      this.definition = {
        type: 'table'
      };
    }
    this.reset();
  }

  /**
   * Resets the entry to an empty state, it might still have some details cached
   */
  return _createClass(DataCatalogEntry, [{
    key: "reset",
    value: function reset() {
      this.saveTimeout = -1;
      this.analysis = undefined;
      this.analysisPromise = undefined;
      this.childrenPromise = undefined;
      this.navigatorMeta = undefined;
      this.navigatorMetaForChildrenPromise = undefined;
      this.navigatorMetaPromise = undefined;
      this.sqlAnalyzerMeta = undefined;
      this.sqlAnalyzerMetaPromise = undefined;
      this.sqlAnalyzerPopularity = undefined;
      this.sqlAnalyzerPopularityForChildrenPromise = undefined;
      this.partitions = undefined;
      this.partitionsPromise = undefined;
      this.sample = undefined;
      this.samplePromise = undefined;
      this.sourceMeta = undefined;
      this.sourceMetaPromise = undefined;
      if (this.path.length) {
        this.dataCatalog.getKnownEntry({
          namespace: this.namespace,
          compute: this.compute,
          path: this.path.slice(0, this.path.length - 1)
        }).then(function (parent) {
          if (parent) {
            parent.navigatorMetaForChildrenPromise = undefined;
            parent.sqlAnalyzerPopularityForChildrenPromise = undefined;
          }
        })["catch"](function (err) {
          console.warn(err);
        });
      }
    }

    /**
     * Resets the entry and clears the cache
     */
  }, {
    key: "clearCache",
    value: (function () {
      var _clearCache = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(options) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!options) {
                options = {};
              }
              if (this.definition && this.definition.sqlAnalyzerLoaded) {
                delete this.definition.sqlAnalyzerLoaded;
              }
              this.reset();
              _context2.prev = 3;
              if (!options.cascade) {
                _context2.next = 9;
                break;
              }
              _context2.next = 7;
              return this.dataCatalog.clearStorageCascade(this.namespace, this.compute, this.path);
            case 7:
              _context2.next = 11;
              break;
            case 9:
              _context2.next = 11;
              return this.save();
            case 11:
              _context2.next = 15;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](3);
            case 15:
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('data.catalog.entry.refreshed', {
                entry: this,
                cascade: !!options.cascade
              });
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 13]]);
      }));
      function clearCache(_x2) {
        return _clearCache.apply(this, arguments);
      }
      return clearCache;
    }())
  }, {
    key: "reloadAnalysis",
    value: function reloadAnalysis(options) {
      var _this = this;
      this.analysisPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject, onCancel) {
          var fetchPromise;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                fetchPromise = (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchDescribe)(_objectSpread({
                  entry: _this
                }, options));
                onCancel(function () {
                  fetchPromise.cancel();
                });
                _context3.prev = 2;
                _context3.next = 5;
                return fetchPromise;
              case 5:
                _this.analysis = _context3.sent;
                resolve(_this.analysis);
                _context3.next = 13;
                break;
              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                reject(_context3.t0 || 'Fetch failed');
                return _context3.abrupt("return");
              case 13:
                _this.saveLater();
              case 14:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[2, 9]]);
        }));
        return function (_x3, _x4, _x5) {
          return _ref2.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.analysisPromise, options);
    }
  }, {
    key: "reloadNavigatorMeta",
    value: function reloadNavigatorMeta(options) {
      var _this2 = this;
      if (this.canHaveNavigatorMetadata()) {
        this.navigatorMetaPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchNavigatorMetadata)(_objectSpread(_objectSpread({}, options), {}, {
                    entry: _this2
                  }));
                case 3:
                  _this2.navigatorMeta = _context4.sent;
                  resolve(_this2.navigatorMeta);
                  _context4.next = 11;
                  break;
                case 7:
                  _context4.prev = 7;
                  _context4.t0 = _context4["catch"](0);
                  reject(_context4.t0 || 'Fetch failed');
                  return _context4.abrupt("return");
                case 11:
                  _this2.saveLater();
                  if (_this2.commentObservable) {
                    _this2.commentObservable(_this2.getResolvedComment());
                  }
                case 13:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, null, [[0, 7]]);
          }));
          return function (_x6, _x7) {
            return _ref3.apply(this, arguments);
          };
        }());
      } else {
        this.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.navigatorMetaPromise);
    }

    /**
     * Helper function to reload the nav opt metadata for the given entry
     */
  }, {
    key: "reloadSqlAnalyzerMeta",
    value: function reloadSqlAnalyzerMeta(_ref4) {
      var _this3 = this;
      var cancellable = _ref4.cancellable,
        silenceErrors = _ref4.silenceErrors,
        sqlAnalyzer = _ref4.sqlAnalyzer;
      if (this.dataCatalog.canHaveSqlAnalyzerMeta()) {
        this.sqlAnalyzerMetaPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject, onCancel) {
            var fetchPromise;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  fetchPromise = sqlAnalyzer.fetchSqlAnalyzerMeta({
                    path: _this3.path,
                    silenceErrors: silenceErrors
                  });
                  onCancel(function () {
                    fetchPromise.cancel();
                  });
                  _context5.prev = 2;
                  _context5.next = 5;
                  return fetchPromise;
                case 5:
                  _this3.sqlAnalyzerMeta = _context5.sent;
                  resolve(_this3.sqlAnalyzerMeta);
                  _context5.next = 13;
                  break;
                case 9:
                  _context5.prev = 9;
                  _context5.t0 = _context5["catch"](2);
                  reject(_context5.t0 || 'Fetch failed');
                  return _context5.abrupt("return");
                case 13:
                  _this3.saveLater();
                case 14:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, null, [[2, 9]]);
          }));
          return function (_x8, _x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      } else {
        this.sqlAnalyzerMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sqlAnalyzerMetaPromise, {
        cancellable: cancellable
      });
    }
  }, {
    key: "reloadPartitions",
    value: function reloadPartitions(options) {
      var _this4 = this;
      this.partitionsPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchPartitions)(_objectSpread(_objectSpread({}, options), {}, {
                  entry: _this4
                }));
              case 3:
                _this4.partitions = _context6.sent;
                resolve(_this4.partitions);
                _context6.next = 11;
                break;
              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                reject(_context6.t0 || 'Fetch failed');
                return _context6.abrupt("return");
              case 11:
                _this4.saveLater();
              case 12:
              case "end":
                return _context6.stop();
            }
          }, _callee6, null, [[0, 7]]);
        }));
        return function (_x11, _x12) {
          return _ref6.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.partitionsPromise, options);
    }
  }, {
    key: "reloadSample",
    value: function reloadSample(options) {
      var _this5 = this;
      this.samplePromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchSample)(_objectSpread(_objectSpread({}, options), {}, {
                  entry: _this5
                }));
              case 3:
                _this5.sample = _context7.sent;
                resolve(_this5.sample);
                _context7.next = 11;
                break;
              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                reject(_context7.t0 || 'Fetch failed');
                return _context7.abrupt("return");
              case 11:
                _this5.saveLater();
              case 12:
              case "end":
                return _context7.stop();
            }
          }, _callee7, null, [[0, 7]]);
        }));
        return function (_x13, _x14) {
          return _ref7.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.samplePromise, options);
    }
  }, {
    key: "reloadSourceMeta",
    value: function reloadSourceMeta(options) {
      var _this6 = this;
      this.sourceMetaPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                if (!_this6.dataCatalog.invalidatePromise) {
                  _context8.next = 8;
                  break;
                }
                _context8.prev = 1;
                _context8.next = 4;
                return _this6.dataCatalog.invalidatePromise;
              case 4:
                _context8.next = 8;
                break;
              case 6:
                _context8.prev = 6;
                _context8.t0 = _context8["catch"](1);
              case 8:
                _context8.prev = 8;
                _context8.next = 11;
                return (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchSourceMetadata)(_objectSpread(_objectSpread({}, options), {}, {
                  entry: _this6
                }));
              case 11:
                _this6.sourceMeta = _context8.sent;
                resolve(_this6.sourceMeta);
                _context8.next = 19;
                break;
              case 15:
                _context8.prev = 15;
                _context8.t1 = _context8["catch"](8);
                reject(_context8.t1 || 'Fetch failed');
                return _context8.abrupt("return");
              case 19:
                _this6.saveLater();
              case 20:
              case "end":
                return _context8.stop();
            }
          }, _callee8, null, [[1, 6], [8, 15]]);
        }));
        return function (_x15, _x16) {
          return _ref8.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sourceMetaPromise, options);
    }
  }, {
    key: "drop",
    value: function drop(cascade) {
      var _this7 = this;
      if (!this.isDatabase() && !this.isTableOrView()) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject('Drop is only possible for a database, table or view.');
      }
      var statement = "DROP ".concat(this.isDatabase() ? 'DATABASE' : this.isView() ? 'VIEW' : 'TABLE', " IF EXISTS `").concat(this.path.join('`.`'), "`").concat(this.isDatabase() && cascade ? ' CASCADE;' : ';');
      return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise(function (resolve, reject, onCancel) {
        var executePromise = (0,apps_editor_execution_api__WEBPACK_IMPORTED_MODULE_6__.executeSingleStatement)({
          connector: _this7.getConnector(),
          namespace: _this7.namespace,
          compute: _this7.compute,
          statement: statement
        });
        onCancel(function () {
          executePromise.cancel();
        });
        executePromise.then(function () {
          _this7.clearCache({
            cascade: true
          })["catch"]();
          resolve();
        })["catch"](reject);
      });
    }

    /**
     * Save the entry to cache
     */
  }, {
    key: "save",
    value: (function () {
      var _save = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              window.clearTimeout(this.saveTimeout);
              _context9.prev = 1;
              _context9.next = 4;
              return this.dataCatalog.persistCatalogEntry(this);
            case 4:
              _context9.next = 8;
              break;
            case 6:
              _context9.prev = 6;
              _context9.t0 = _context9["catch"](1);
            case 8:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[1, 6]]);
      }));
      function save() {
        return _save.apply(this, arguments);
      }
      return save;
    }()
    /**
     * Save the entry at a later point of time
     */
    )
  }, {
    key: "saveLater",
    value: function saveLater() {
      var _CACHEABLE_TTL,
        _this8 = this;
      if ((((_CACHEABLE_TTL = window.CACHEABLE_TTL) === null || _CACHEABLE_TTL === void 0 ? void 0 : _CACHEABLE_TTL["default"]) || 0) > 0) {
        window.clearTimeout(this.saveTimeout);
        this.saveTimeout = window.setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _this8.save();
              case 2:
              case "end":
                return _context10.stop();
            }
          }, _callee10);
        })), 1000);
      }
    }

    /**
     * Gets the parent entry, rejected if there's no parent.
     */
  }, {
    key: "getParent",
    value: function getParent() {
      if (!this.path.length) {
        return Promise.reject();
      }
      return this.dataCatalog.getEntry({
        namespace: this.namespace,
        compute: this.compute,
        path: this.path.slice(0, this.path.length - 1)
      });
    }

    /**
     * Get the children of the catalog entry, columns for a table entry etc.
     */
  }, {
    key: "getChildren",
    value: function getChildren(options) {
      var _this9 = this;
      if (this.childrenPromise && this.childrenPromise.cancelled) {
        this.childrenPromise = undefined;
      }
      if (!this.childrenPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      if (this.childrenPromise && !shouldReload(options)) {
        return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.childrenPromise, options);
      }
      this.childrenPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject, onCancel) {
          var sourceMeta, cancelled, partitionKeys, tableSourceMeta, primaryKeys, foreignKeys, entities, promises, index, fieldSourceMeta, complexAttributes;
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                cancelled = false;
                onCancel(function () {
                  cancelled = true;
                });
                _context11.prev = 2;
                _context11.next = 5;
                return _this9.getSourceMeta(options);
              case 5:
                sourceMeta = _context11.sent;
                _context11.next = 10;
                break;
              case 8:
                _context11.prev = 8;
                _context11.t0 = _context11["catch"](2);
              case 10:
                if (!cancelled) {
                  _context11.next = 13;
                  break;
                }
                reject('Cancelled');
                return _context11.abrupt("return");
              case 13:
                if (sourceMeta) {
                  _context11.next = 16;
                  break;
                }
                reject('No source meta found');
                return _context11.abrupt("return");
              case 16:
                if (!sourceMeta.notFound) {
                  _context11.next = 19;
                  break;
                }
                resolve([]);
                return _context11.abrupt("return");
              case 19:
                partitionKeys = {};
                tableSourceMeta = sourceMeta;
                if (tableSourceMeta.partition_keys) {
                  tableSourceMeta.partition_keys.forEach(function (partitionKey) {
                    partitionKeys[partitionKey.name] = true;
                  });
                }
                primaryKeys = {};
                if (tableSourceMeta.primary_keys) {
                  tableSourceMeta.primary_keys.forEach(function (primaryKey) {
                    primaryKeys[primaryKey.name] = true;
                  });
                }
                foreignKeys = {};
                if (tableSourceMeta.foreign_keys) {
                  tableSourceMeta.foreign_keys.forEach(function (foreignKey) {
                    foreignKeys[foreignKey.name] = foreignKey;
                  });
                }
                entities = sourceMeta.databases || sourceMeta.tables_meta || sourceMeta.extended_columns || sourceMeta.fields || sourceMeta.columns || [];
                promises = [];
                index = 0;
                entities.forEach(function (entity) {
                  if (!sourceMeta.databases || entity !== '_impala_builtins') {
                    var _name = entity.name || entity;
                    var promise = _this9.dataCatalog.getEntry({
                      namespace: _this9.namespace,
                      compute: _this9.compute,
                      path: [].concat(_toConsumableArray(_this9.path), [_name])
                    });
                    promise.then(function (catalogEntry) {
                      if (!catalogEntry.definition || typeof catalogEntry.definition.index === 'undefined') {
                        var definition = _typeof(entity) === 'object' ? entity : {
                          name: entity
                        };
                        if (!definition.type) {
                          if (_this9.path.length === 0) {
                            definition.type = 'database';
                          } else if (_this9.path.length === 1) {
                            definition.type = 'table';
                          } else if (_this9.path.length === 2) {
                            definition.type = 'column';
                          }
                        }
                        if (sourceMeta.partition_keys) {
                          definition.partitionKey = partitionKeys[_name];
                        }
                        if (sourceMeta.primary_keys) {
                          definition.primaryKey = primaryKeys[_name];
                        }
                        if (sourceMeta.foreign_keys) {
                          definition.foreignKey = foreignKeys[_name];
                        }
                        definition.index = index++;
                        catalogEntry.definition = definition;
                        catalogEntry.saveLater();
                      }
                    })["catch"](function (err) {
                      console.warn(err);
                    });
                    promises.push(promise);
                  }
                });

                // TODO: Move to connector attributes
                if (sourceMeta && (_this9.getDialect() === 'impala' || _this9.getDialect() === 'hive') && _this9.isComplex()) {
                  fieldSourceMeta = sourceMeta;
                  complexAttributes = fieldSourceMeta.type === 'map' ? ['key', 'value'] : ['item'];
                  complexAttributes.forEach(function (path) {
                    var definition = fieldSourceMeta[path];
                    if (definition) {
                      var promise = _this9.dataCatalog.getEntry({
                        namespace: _this9.namespace,
                        compute: _this9.compute,
                        path: [].concat(_toConsumableArray(_this9.path), [path])
                      });
                      promise.then(function (catalogEntry) {
                        if (!catalogEntry.definition || typeof catalogEntry.definition.index === 'undefined') {
                          definition.index = index++;
                          definition.isMapValue = path === 'value';
                          catalogEntry.definition = definition;
                          catalogEntry.saveLater();
                        }
                      })["catch"](function (err) {
                        console.warn(err);
                      });
                      promises.push(promise);
                    }
                  });
                }
                Promise.all(promises).then(resolve)["catch"](reject);
              case 32:
              case "end":
                return _context11.stop();
            }
          }, _callee11, null, [[2, 8]]);
        }));
        return function (_x17, _x18, _x19) {
          return _ref10.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.childrenPromise, options);
    }

    /**
     * Loads navigator metadata for children, only applicable to databases and tables
     */
  }, {
    key: "loadNavigatorMetaForChildren",
    value: function loadNavigatorMetaForChildren(options) {
      var _this10 = this;
      if (this.navigatorMetaForChildrenPromise && this.navigatorMetaForChildrenPromise.cancelled) {
        this.navigatorMetaPromise = undefined;
      }
      options = (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.forceSilencedErrors)(options);
      if (!this.canHaveNavigatorMetadata() || this.isField()) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve([]);
      }
      if (this.navigatorMetaForChildrenPromise && !shouldReload(options)) {
        return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.navigatorMetaForChildrenPromise, options);
      }
      this.navigatorMetaForChildrenPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject, onCancel) {
          var cancellablePromises, _options, childPromise, children, someHaveNavMeta, query, rejectUnknown, searchPromise;
          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
              case 0:
                cancellablePromises = [];
                onCancel(function () {
                  cancellablePromises.forEach(function (cancellable) {
                    cancellable.cancel();
                  });
                });
                _context12.prev = 2;
                childPromise = _this10.getChildren(options);
                cancellablePromises.push(childPromise);
                _context12.next = 7;
                return childPromise;
              case 7:
                children = _context12.sent;
                someHaveNavMeta = children.some(function (childEntry) {
                  return childEntry.navigatorMeta;
                });
                if (!(someHaveNavMeta && !shouldReload(options))) {
                  _context12.next = 12;
                  break;
                }
                resolve(children);
                return _context12.abrupt("return");
              case 12:
                // TODO: Add sourceType to nav search query
                query = _this10.path.length ? "parentPath:\"/".concat(_this10.path.join('/'), "\" AND type:(table view field)") : 'type:database';
                rejectUnknown = function rejectUnknown() {
                  children.forEach(function (childEntry) {
                    if (!childEntry.navigatorMeta) {
                      childEntry.navigatorMeta = undefined;
                      childEntry.navigatorMetaPromise = undefined;
                    }
                  });
                };
                searchPromise = (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.searchEntities)({
                  query: query,
                  rawQuery: true,
                  limit: children.length,
                  silenceErrors: (_options = options) === null || _options === void 0 ? void 0 : _options.silenceErrors
                });
                cancellablePromises.push(searchPromise);
                searchPromise.then(function (result) {
                  if (result && result.entities) {
                    var childEntryIndex = {};
                    children.forEach(function (childEntry) {
                      childEntryIndex[childEntry.name.toLowerCase()] = childEntry;
                    });
                    result.entities.forEach(function (entity) {
                      var matchingChildEntry = childEntryIndex[(entity.original_name || entity.originalName).toLowerCase()];
                      if (matchingChildEntry) {
                        matchingChildEntry.navigatorMeta = entity;
                        entity.hueTimestamp = Date.now();
                        matchingChildEntry.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(matchingChildEntry.navigatorMeta);
                        if (entity && matchingChildEntry.commentObservable) {
                          matchingChildEntry.commentObservable(matchingChildEntry.getResolvedComment());
                        }
                        matchingChildEntry.saveLater();
                      }
                    });
                  }
                })["catch"](function () {
                  return resolve([]);
                })["finally"](function () {
                  rejectUnknown();
                  resolve(children);
                });
                _context12.next = 23;
                break;
              case 19:
                _context12.prev = 19;
                _context12.t0 = _context12["catch"](2);
                resolve([]);
                return _context12.abrupt("return");
              case 23:
              case "end":
                return _context12.stop();
            }
          }, _callee12, null, [[2, 19]]);
        }));
        return function (_x20, _x21, _x22) {
          return _ref11.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.navigatorMetaForChildrenPromise, options);
    }

    /**
     * Helper function used when loading navopt metdata for children
     */
  }, {
    key: "applySqlAnalyzerResponseToChildren",
    value: function applySqlAnalyzerResponseToChildren(response, options) {
      var _this11 = this;
      if (!this.definition) {
        this.definition = {};
      }
      this.definition.sqlAnalyzerLoaded = true;
      this.saveLater();
      return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject, onCancel) {
          var childPromise, childEntries, entriesByName, updatedIndex, addSqlAnalyzerPopularity, popularEntries;
          return _regeneratorRuntime().wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
              case 0:
                childPromise = _this11.getChildren(options);
                onCancel(function () {
                  childPromise.cancel();
                });
                _context13.prev = 2;
                _context13.next = 5;
                return childPromise;
              case 5:
                childEntries = _context13.sent;
                entriesByName = {};
                childEntries.forEach(function (childEntry) {
                  entriesByName[childEntry.name.toLowerCase()] = childEntry;
                });
                updatedIndex = {};
                if (_this11.isDatabase() && response.top_tables) {
                  response.top_tables.forEach(function (topTable) {
                    if (!topTable.name) {
                      return;
                    }
                    var matchingChild = entriesByName[topTable.name.toLowerCase()];
                    if (matchingChild) {
                      matchingChild.sqlAnalyzerPopularity = topTable;
                      matchingChild.saveLater();
                      updatedIndex[matchingChild.getQualifiedPath()] = matchingChild;
                    }
                  });
                } else if (_this11.isTableOrView() && response.values) {
                  addSqlAnalyzerPopularity = function addSqlAnalyzerPopularity(columns, type) {
                    if (columns) {
                      columns.forEach(function (column) {
                        if (!column.columnName) {
                          return;
                        }
                        var matchingChild = entriesByName[column.columnName.toLowerCase()];
                        if (matchingChild) {
                          if (!matchingChild.sqlAnalyzerPopularity) {
                            matchingChild.sqlAnalyzerPopularity = {
                              column_count: 0,
                              columnCount: 0
                            };
                          }
                          matchingChild.sqlAnalyzerPopularity[type] = column;
                          matchingChild.saveLater();
                          updatedIndex[matchingChild.getQualifiedPath()] = matchingChild;
                        }
                      });
                    }
                  };
                  addSqlAnalyzerPopularity(response.values.filterColumns, 'filterColumn');
                  addSqlAnalyzerPopularity(response.values.groupbyColumns, 'groupByColumn');
                  addSqlAnalyzerPopularity(response.values.joinColumns, 'joinColumn');
                  addSqlAnalyzerPopularity(response.values.orderbyColumns, 'orderByColumn');
                  addSqlAnalyzerPopularity(response.values.selectColumns, 'selectColumn');
                }
                popularEntries = [];
                Object.keys(updatedIndex).forEach(function (path) {
                  popularEntries.push(updatedIndex[path]);
                });
                resolve(popularEntries);
                _context13.next = 18;
                break;
              case 15:
                _context13.prev = 15;
                _context13.t0 = _context13["catch"](2);
                reject(_context13.t0);
              case 18:
              case "end":
                return _context13.stop();
            }
          }, _callee13, null, [[2, 15]]);
        }));
        return function (_x23, _x24, _x25) {
          return _ref12.apply(this, arguments);
        };
      }());
    }

    /**
     * Loads SQL Analyzer popularity for the children of this entry.
     */
  }, {
    key: "loadSqlAnalyzerPopularityForChildren",
    value: function loadSqlAnalyzerPopularityForChildren(options) {
      var _this12 = this;
      if (this.sqlAnalyzerPopularityForChildrenPromise && this.sqlAnalyzerPopularityForChildrenPromise.cancelled) {
        this.sqlAnalyzerPopularityForChildrenPromise = undefined;
      }
      options.silenceErrors = true;
      if (!this.dataCatalog.canHaveSqlAnalyzerMeta()) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      if (this.sqlAnalyzerPopularityForChildrenPromise && !shouldReload(options)) {
        return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sqlAnalyzerPopularityForChildrenPromise, options);
      }
      if (this.definition && this.definition.sqlAnalyzerLoaded && !shouldReload(options)) {
        this.sqlAnalyzerPopularityForChildrenPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
          var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject, onCancel) {
            var childPromise, _children;
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  childPromise = _this12.getChildren(options);
                  onCancel(function () {
                    childPromise.cancel();
                  });
                  _context14.prev = 2;
                  _context14.next = 5;
                  return childPromise;
                case 5:
                  _children = _context14.sent;
                  resolve(_children.filter(function (child) {
                    return child.sqlAnalyzerPopularity;
                  }));
                  _context14.next = 12;
                  break;
                case 9:
                  _context14.prev = 9;
                  _context14.t0 = _context14["catch"](2);
                  reject(_context14.t0);
                case 12:
                case "end":
                  return _context14.stop();
              }
            }, _callee14, null, [[2, 9]]);
          }));
          return function (_x26, _x27, _x28) {
            return _ref13.apply(this, arguments);
          };
        }());
      } else if (this.isDatabase() || this.isTableOrView()) {
        this.sqlAnalyzerPopularityForChildrenPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
          var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(resolve, reject, onCancel) {
            var cancellablePromises, popularityPromise, analyzerResponse, applyPromise, entries;
            return _regeneratorRuntime().wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
                case 0:
                  cancellablePromises = [];
                  onCancel(function () {
                    cancellablePromises.forEach(function (cancellable) {
                      return cancellable.cancel();
                    });
                  });
                  popularityPromise = options.sqlAnalyzer.fetchPopularity(_objectSpread(_objectSpread({}, options), {}, {
                    paths: [_this12.path]
                  }));
                  cancellablePromises.push(popularityPromise);
                  _context15.prev = 4;
                  _context15.next = 7;
                  return popularityPromise;
                case 7:
                  analyzerResponse = _context15.sent;
                  applyPromise = _this12.applySqlAnalyzerResponseToChildren(analyzerResponse, options);
                  cancellablePromises.push(applyPromise);
                  _context15.next = 12;
                  return applyPromise;
                case 12:
                  entries = _context15.sent;
                  resolve(entries);
                  _context15.next = 19;
                  break;
                case 16:
                  _context15.prev = 16;
                  _context15.t0 = _context15["catch"](4);
                  resolve([]);
                case 19:
                case "end":
                  return _context15.stop();
              }
            }, _callee15, null, [[4, 16]]);
          }));
          return function (_x29, _x30, _x31) {
            return _ref14.apply(this, arguments);
          };
        }());
      } else {
        this.sqlAnalyzerPopularityForChildrenPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve([]);
      }
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sqlAnalyzerPopularityForChildrenPromise);
    }

    /**
     * Returns true if the catalog entry can have navigator metadata
     */
  }, {
    key: "canHaveNavigatorMetadata",
    value: function canHaveNavigatorMetadata() {
      if (!window.HAS_CATALOG) {
        return false;
      }
      // TODO: Move to connector attributes
      return (this.getDialect() === 'hive' || this.getDialect() === 'impala') && (this.isDatabase() || this.isTableOrView() || this.isColumn());
    }

    /**
     * Returns the currently known comment without loading any additional metadata
     */
  }, {
    key: "getResolvedComment",
    value: function getResolvedComment() {
      // TODO: Move to connector attributes
      if (this.navigatorMeta && (this.getDialect() === 'hive' || this.getDialect() === 'impala')) {
        if (this.navigatorMeta.description) {
          return this.navigatorMeta.description;
        }
        if (this.navigatorMeta.originalDescription) {
          return this.navigatorMeta.originalDescription;
        }
      }
      if (this.definition && this.definition.comment) {
        return this.definition.comment;
      }
      return this.sourceMeta && this.sourceMeta.comment || '';
    }

    /**
     * This can be used to get an observable for the comment which will be updated once a comment has been
     * resolved.
     */
  }, {
    key: "getCommentObservable",
    value: function getCommentObservable() {
      if (!this.commentObservable) {
        this.commentObservable = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(this.getResolvedComment());
      }
      return this.commentObservable;
    }

    /**
     * Checks whether the comment is known and has been loaded from the proper source
     */
  }, {
    key: "hasResolvedComment",
    value: function hasResolvedComment() {
      if (this.canHaveNavigatorMetadata()) {
        return typeof this.navigatorMeta !== 'undefined';
      }
      return typeof this.sourceMeta !== 'undefined';
    }

    /**
     * Gets the comment for this entry, fetching it if necessary from the proper source.
     */
  }, {
    key: "getComment",
    value: function getComment(options) {
      var _this13 = this;
      var promise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(resolve, reject, onCancel) {
          var cancellablePromises, navigatorMetaPromise, navigatorMeta, sourceMetaPromise, sourceMeta;
          return _regeneratorRuntime().wrap(function _callee16$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
              case 0:
                cancellablePromises = [];
                onCancel(function () {
                  cancellablePromises.forEach(function (cancellable) {
                    return cancellable.cancel();
                  });
                });
                if (!_this13.canHaveNavigatorMetadata()) {
                  _context16.next = 16;
                  break;
                }
                navigatorMetaPromise = _this13.getNavigatorMeta(options);
                cancellablePromises.push(navigatorMetaPromise);
                _context16.prev = 5;
                _context16.next = 8;
                return navigatorMetaPromise;
              case 8:
                navigatorMeta = _context16.sent;
                if (!navigatorMeta) {
                  _context16.next = 12;
                  break;
                }
                resolve(navigatorMeta.description || navigatorMeta.originalDescription || '');
                return _context16.abrupt("return");
              case 12:
                _context16.next = 16;
                break;
              case 14:
                _context16.prev = 14;
                _context16.t0 = _context16["catch"](5);
              case 16:
                if (!_this13.sourceMeta) {
                  _context16.next = 20;
                  break;
                }
                resolve(_this13.sourceMeta.comment || '');
                _context16.next = 35;
                break;
              case 20:
                if (!(_this13.definition && _this13.definition.comment)) {
                  _context16.next = 24;
                  break;
                }
                resolve(_this13.definition.comment);
                _context16.next = 35;
                break;
              case 24:
                sourceMetaPromise = _this13.getSourceMeta(options);
                _context16.prev = 25;
                _context16.next = 28;
                return sourceMetaPromise;
              case 28:
                sourceMeta = _context16.sent;
                resolve(sourceMeta && sourceMeta.comment || '');
                _context16.next = 35;
                break;
              case 32:
                _context16.prev = 32;
                _context16.t1 = _context16["catch"](25);
                reject(_context16.t1);
              case 35:
              case "end":
                return _context16.stop();
            }
          }, _callee16, null, [[5, 14], [25, 32]]);
        }));
        return function (_x32, _x33, _x34) {
          return _ref15.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(promise);
    }

    /**
     * Updates custom navigator metadata for the catalog entry
     */
  }, {
    key: "updateNavigatorCustomMetadata",
    value: (function () {
      var _updateNavigatorCustomMetadata = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(modifiedCustomMetadata, deletedCustomMetadataKeys, apiOptions) {
        var _this14 = this;
        var navigatorMeta;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              if (this.canHaveNavigatorMetadata()) {
                _context17.next = 2;
                break;
              }
              return _context17.abrupt("return", Promise.reject());
            case 2:
              _context17.next = 4;
              return this.getNavigatorMeta(apiOptions);
            case 4:
              navigatorMeta = _context17.sent;
              if (navigatorMeta) {
                _context17.next = 7;
                break;
              }
              throw new Error('Could not load navigator metadata.');
            case 7:
              return _context17.abrupt("return", new Promise(function (resolve, reject) {
                (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.updateNavigatorProperties)({
                  identity: navigatorMeta.identity,
                  modifiedCustomMetadata: modifiedCustomMetadata,
                  deletedCustomMetadataKeys: deletedCustomMetadataKeys
                }).then(function (entity) {
                  if (entity) {
                    _this14.navigatorMeta = entity;
                    _this14.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(entity);
                    _this14.saveLater();
                    resolve(entity);
                  } else {
                    reject();
                  }
                })["catch"](reject);
              }));
            case 8:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function updateNavigatorCustomMetadata(_x35, _x36, _x37) {
        return _updateNavigatorCustomMetadata.apply(this, arguments);
      }
      return updateNavigatorCustomMetadata;
    }()
    /**
     * Sets the comment in the proper source
     */
    )
  }, {
    key: "setComment",
    value: (function () {
      var _setComment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(comment, options) {
        var _this15 = this;
        var navigatorMeta;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              if (!this.canHaveNavigatorMetadata()) {
                _context20.next = 7;
                break;
              }
              _context20.next = 3;
              return this.getNavigatorMeta(options);
            case 3:
              navigatorMeta = _context20.sent;
              if (navigatorMeta) {
                _context20.next = 6;
                break;
              }
              throw new Error('Could not load navigator metadata.');
            case 6:
              return _context20.abrupt("return", new Promise(function (resolve, reject) {
                (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.updateNavigatorProperties)({
                  identity: navigatorMeta.identity,
                  properties: {
                    description: comment
                  }
                }).then( /*#__PURE__*/function () {
                  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(entity) {
                    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                      while (1) switch (_context18.prev = _context18.next) {
                        case 0:
                          if (entity) {
                            _this15.navigatorMeta = entity;
                            _this15.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(entity);
                            _this15.saveLater();
                          }
                          _this15.getComment(options).then(function (comment) {
                            if (_this15.commentObservable) {
                              _this15.commentObservable(comment);
                            }
                            resolve(comment);
                          })["catch"](reject);
                        case 2:
                        case "end":
                          return _context18.stop();
                      }
                    }, _callee18);
                  }));
                  return function (_x40) {
                    return _ref16.apply(this, arguments);
                  };
                }())["catch"](reject);
              }));
            case 7:
              return _context20.abrupt("return", new Promise(function (resolve, reject) {
                (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.updateSourceMetadata)({
                  entry: _this15,
                  properties: {
                    comment: comment
                  },
                  silenceErrors: options === null || options === void 0 ? void 0 : options.silenceErrors
                }).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
                  var _comment;
                  return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                    while (1) switch (_context19.prev = _context19.next) {
                      case 0:
                        _context19.prev = 0;
                        _context19.next = 3;
                        return _this15.reloadSourceMeta(options);
                      case 3:
                        _context19.next = 5;
                        return _this15.getComment(options);
                      case 5:
                        _comment = _context19.sent;
                        if (_this15.commentObservable) {
                          _this15.commentObservable(_comment);
                        }
                        resolve(_comment);
                        _context19.next = 13;
                        break;
                      case 10:
                        _context19.prev = 10;
                        _context19.t0 = _context19["catch"](0);
                        reject(_context19.t0);
                      case 13:
                      case "end":
                        return _context19.stop();
                    }
                  }, _callee19, null, [[0, 10]]);
                })))["catch"](reject);
              }));
            case 8:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
      function setComment(_x38, _x39) {
        return _setComment.apply(this, arguments);
      }
      return setComment;
    }()
    /**
     * Adds a list of tags and updates the navigator metadata of the entry
     */
    )
  }, {
    key: "addNavigatorTags",
    value: (function () {
      var _addNavigatorTags = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(tags, apiOptions) {
        var _this16 = this;
        var navigatorMeta;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              if (this.canHaveNavigatorMetadata()) {
                _context21.next = 2;
                break;
              }
              return _context21.abrupt("return", Promise.reject());
            case 2:
              _context21.next = 4;
              return this.getNavigatorMeta(apiOptions);
            case 4:
              navigatorMeta = _context21.sent;
              return _context21.abrupt("return", new Promise(function (resolve, reject) {
                (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.addNavTags)(navigatorMeta.identity, tags).then(function (entity) {
                  if (entity) {
                    _this16.navigatorMeta = entity;
                    _this16.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(entity);
                    _this16.saveLater();
                    resolve(entity);
                  } else {
                    reject();
                  }
                })["catch"](reject);
              }));
            case 6:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this);
      }));
      function addNavigatorTags(_x41, _x42) {
        return _addNavigatorTags.apply(this, arguments);
      }
      return addNavigatorTags;
    }()
    /**
     * Removes a list of tags and updates the navigator metadata of the entry
     */
    )
  }, {
    key: "deleteNavigatorTags",
    value: (function () {
      var _deleteNavigatorTags = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(tags, apiOptions) {
        var _this17 = this;
        var navigatorMeta;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              if (this.canHaveNavigatorMetadata()) {
                _context22.next = 2;
                break;
              }
              return _context22.abrupt("return", Promise.reject());
            case 2:
              _context22.next = 4;
              return this.getNavigatorMeta(apiOptions);
            case 4:
              navigatorMeta = _context22.sent;
              return _context22.abrupt("return", new Promise(function (resolve, reject) {
                (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.deleteNavTags)(navigatorMeta.identity, tags).then(function (entity) {
                  if (entity) {
                    _this17.navigatorMeta = entity;
                    _this17.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(entity);
                    _this17.saveLater();
                    resolve(entity);
                  } else {
                    reject();
                  }
                })["catch"](reject);
              }));
            case 6:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this);
      }));
      function deleteNavigatorTags(_x43, _x44) {
        return _deleteNavigatorTags.apply(this, arguments);
      }
      return deleteNavigatorTags;
    }()
    /**
     * Checks if the entry can have children or not without fetching additional metadata.
     */
    )
  }, {
    key: "hasPossibleChildren",
    value: function hasPossibleChildren() {
      return this.path.length < 3 || !this.definition && !this.sourceMeta || !!this.sourceMeta && /^(?:struct|array|map)/i.test(this.sourceMeta.type) || !!this.definition && !!this.definition.type && /^(?:struct|array|map)/i.test(this.definition.type);
    }

    /**
     * Returns the index representing the order in which the backend returned this entry.
     */
  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.definition && this.definition.index || 0;
    }

    /**
     * Returns the dialect of this entry.
     */
  }, {
    key: "getDialect",
    value: function getDialect() {
      return this.getConnector().dialect || this.getConnector().id; // .id for editor v1
    }

    /**
     * Returns the connector for this entry
     */
  }, {
    key: "getConnector",
    value: function getConnector() {
      return this.dataCatalog.connector;
    }

    /**
     * Returns true if the entry represents a data source.
     *
     * @return {boolean}
     */
  }, {
    key: "isSource",
    value: function isSource() {
      return this.path.length === 0;
    }

    /**
     * Returns true if the entry is a database.
     */
  }, {
    key: "isDatabase",
    value: function isDatabase() {
      return this.path.length === 1;
    }

    /**
     * Returns true if the entry is a table or a view.
     *
     * @return {boolean}
     */
  }, {
    key: "isTableOrView",
    value: function isTableOrView() {
      return this.path.length === 2;
    }

    /**
     * Returns the default title used for the entry, the qualified path with type for fields. Optionally include
     * the comment after, if already resolved.
     */
  }, {
    key: "getTitle",
    value: function getTitle(includeComment) {
      var title = this.getQualifiedPath();
      if (this.isField()) {
        var type = this.getType();
        if (type) {
          title += ' (' + type + ')';
        }
      } else if (this.definition && this.definition.type && this.definition.type.toLowerCase() === 'materialized_view') {
        title += ' (' + (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Materialized') + ')';
      }
      if (includeComment && this.hasResolvedComment() && this.getResolvedComment()) {
        title += ' - ' + this.getResolvedComment();
      }
      return title;
    }

    /**
     * Returns the fully qualified path for this entry.
     */
  }, {
    key: "getQualifiedPath",
    value: function getQualifiedPath() {
      return this.path.join('.');
    }

    /**
     * Returns the display name for the entry, name or qualified path plus type for fields
     */
  }, {
    key: "getDisplayName",
    value: function getDisplayName(qualified) {
      var displayName = qualified ? this.getQualifiedPath() : this.name;
      if (this.isField()) {
        var type = this.getType();
        if (type) {
          return "".concat(displayName, " (").concat(type, ")");
        }
      }
      return displayName;
    }

    /**
     * Returns true for columns that are a primary key. Note that the definition has to come from a parent entry, i.e.
     * getChildren().
     */
  }, {
    key: "isPrimaryKey",
    value: function isPrimaryKey() {
      return !!(this.isColumn() && this.definition && this.definition.primaryKey);
    }

    /**
     * Returns true if the entry is a partition key. Note that the definition has to come from a parent entry, i.e.
     * getChildren().
     */
  }, {
    key: "isPartitionKey",
    value: function isPartitionKey() {
      return !!(this.definition && this.definition.partitionKey);
    }

    /**
     * Returns true if the entry is a foreign key. Note that the definition has to come from a parent entry, i.e.
     * getChildren().
     */
  }, {
    key: "isForeignKey",
    value: function isForeignKey() {
      return !!this.definition && !!this.definition.foreignKey;
    }

    /**
     * Returns true if the entry is either a partition or primary key. Note that the definition has to come from a parent entry, i.e.
     * getChildren().
     */
  }, {
    key: "isKey",
    value: function isKey() {
      return this.isPartitionKey() || this.isPrimaryKey() || this.isForeignKey();
    }

    /**
     * Returns true if the entry is a table. It will be accurate once the source meta has been loaded.
     */
  }, {
    key: "isTable",
    value: function isTable() {
      if (this.path.length === 2) {
        if (this.analysis && this.analysis.details && this.analysis.details.properties && this.analysis.details.properties.table_type === 'VIRTUAL_VIEW') {
          return false;
        }
        if (this.sourceMeta) {
          return !this.sourceMeta.is_view;
        }
        if (this.definition && this.definition.type) {
          return this.definition.type.toLowerCase() === 'table';
        }
        return true;
      }
      return false;
    }
  }, {
    key: "getHdfsFilePath",
    value: function getHdfsFilePath() {
      var _this$analysis;
      var hdfs_link = ((_this$analysis = this.analysis) === null || _this$analysis === void 0 ? void 0 : _this$analysis.hdfs_link) || '';
      return hdfs_link.replace('/filebrowser/view=', '');
    }

    /**
     * Returns true if the entry is an Iceberg table
     */
  }, {
    key: "isIcebergTable",
    value: function isIcebergTable() {
      var _this$analysis2, _this$analysis2$detai, _this$analysis2$detai2;
      return ((_this$analysis2 = this.analysis) === null || _this$analysis2 === void 0 ? void 0 : (_this$analysis2$detai = _this$analysis2.details) === null || _this$analysis2$detai === void 0 ? void 0 : (_this$analysis2$detai2 = _this$analysis2$detai.stats) === null || _this$analysis2$detai2 === void 0 ? void 0 : _this$analysis2$detai2.table_type) === 'ICEBERG';
    }
  }, {
    key: "isTransactionalTable",
    value: function isTransactionalTable() {
      var _this$analysis3, _this$analysis3$detai, _this$analysis3$detai2;
      return ((_this$analysis3 = this.analysis) === null || _this$analysis3 === void 0 ? void 0 : (_this$analysis3$detai = _this$analysis3.details) === null || _this$analysis3$detai === void 0 ? void 0 : (_this$analysis3$detai2 = _this$analysis3$detai.stats) === null || _this$analysis3$detai2 === void 0 ? void 0 : _this$analysis3$detai2.transactional) === 'true';
    }

    /**
     * Returns true if the entry is a view. It will be accurate once the source meta has been loaded.
     */
  }, {
    key: "isView",
    value: function isView() {
      if (this.path.length === 2) {
        if (this.sourceMeta && this.sourceMeta.is_view) {
          return true;
        }
        if (this.definition && this.definition.type && (this.definition.type.toLowerCase() === 'view' || this.definition.type.toLowerCase() === 'materialized_view')) {
          return true;
        }
        if (this.analysis && this.analysis.details && this.analysis.details.properties && this.analysis.details.properties.table_type === 'VIRTUAL_VIEW') {
          return true;
        }
      }
      return false;
    }

    /**
     * Returns true if the entry is a ML Model. It will be accurate once the source meta has been loaded.
     */
  }, {
    key: "isModel",
    value: function isModel() {
      return this.path.length === 2 && !!this.definition && !!this.definition.type && this.definition.type.toLowerCase() === 'model';
    }

    /**
     * Returns true if the entry is a column.
     */
  }, {
    key: "isColumn",
    value: function isColumn() {
      return this.path.length === 3;
    }

    /**
     * Returns true if the entry is a column. It will be accurate once the source meta has been loaded or if loaded from
     * a parent entry via getChildren().
     */
  }, {
    key: "isComplex",
    value: function isComplex() {
      var sourceMeta = this.sourceMeta;
      return !!(this.path.length > 2 && (sourceMeta && /^(?:struct|array|map)/i.test(sourceMeta.type) || this.definition && this.definition.type && /^(?:struct|array|map)/i.test(this.definition.type)));
    }

    /**
     * Returns true if the entry is a field, i.e. column or child of a complex type.
     */
  }, {
    key: "isField",
    value: function isField() {
      return this.path.length > 2;
    }

    /**
     * Returns true if the entry is an array. It will be accurate once the source meta has been loaded or if loaded from
     * a parent entry via getChildren().
     */
  }, {
    key: "isArray",
    value: function isArray() {
      return !!this.sourceMeta && /^array/i.test(this.sourceMeta.type) || !!this.definition && !!this.definition.type && /^array/i.test(this.definition.type);
    }

    /**
     * Returns true if the entry is a map. It will be accurate once the source meta has been loaded or if loaded from
     * a parent entry via getChildren().
     */
  }, {
    key: "isMap",
    value: function isMap() {
      return !!this.sourceMeta && /^map/i.test(this.sourceMeta.type) || !!this.definition && !!this.definition.type && /^map/i.test(this.definition.type);
    }

    /**
     * Returns true if the entry is a map value. It will be accurate once the source meta has been loaded or if loaded
     * from a parent entry via getChildren().
     */
  }, {
    key: "isMapValue",
    value: function isMapValue() {
      return !!this.definition && !!this.definition.isMapValue;
    }

    /**
     * Returns the type of the entry. It will be accurate once the source meta has been loaded or if loaded from
     * a parent entry via getChildren().
     *
     * The returned string is always lower case and for complex entries the type definition is stripped to
     * either 'array', 'map' or 'struct'.
     */
  }, {
    key: "getType",
    value: function getType() {
      var type = this.getRawType();
      if (type.indexOf('<') !== -1) {
        type = type.substring(0, type.indexOf('<'));
      }
      return type.toLowerCase();
    }

    /**
     * Returns the raw type of the entry. It will be accurate once the source meta has been loaded or if loaded from
     * a parent entry via getChildren().
     *
     * For complex entries the type definition is the full version.
     */
  }, {
    key: "getRawType",
    value: function getRawType() {
      return this.sourceMeta && this.sourceMeta.type || this.definition && this.definition.type || '';
    }

    /**
     * Gets the source metadata for the entry. It will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getSourceMeta",
    value: function getSourceMeta(options) {
      if (this.sourceMetaPromise && this.sourceMetaPromise.cancelled) {
        this.sourceMetaPromise = undefined;
      }
      if (!this.sourceMetaPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      if (!this.sourceMetaPromise || shouldReload(options)) {
        return this.reloadSourceMeta(options);
      }
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sourceMetaPromise, options);
    }

    /**
     * Gets the analysis for the entry. It will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getAnalysis",
    value: function getAnalysis(options) {
      if (this.analysisPromise && this.analysisPromise.cancelled) {
        this.analysisPromise = undefined;
      }
      if (!this.analysisPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      if (!this.analysisPromise || shouldReload(options)) {
        return this.reloadAnalysis(options);
      }
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.analysisPromise, options);
    }

    /**
     * Gets the partitions for the entry. It will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getPartitions",
    value: function getPartitions(options) {
      if (this.partitionsPromise && this.partitionsPromise.cancelled) {
        this.partitionsPromise = undefined;
      }
      if (!this.isTableOrView() || !this.partitionsPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      if (!this.partitionsPromise || shouldReload(options)) {
        return this.reloadPartitions(options);
      }
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.partitionsPromise, options);
    }

    /**
     * Gets the Navigator metadata for the entry. It will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getNavigatorMeta",
    value: function getNavigatorMeta(options) {
      if (this.navigatorMetaPromise && this.navigatorMetaPromise.cancelled) {
        this.navigatorMetaPromise = undefined;
      }
      options = (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.forceSilencedErrors)(options);
      if (!this.canHaveNavigatorMetadata() || !this.navigatorMetaPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      if (!this.navigatorMetaPromise || shouldReload(options)) {
        return this.reloadNavigatorMeta(options);
      }
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.navigatorMetaPromise, options);
    }

    /**
     * Gets the SQL Analyzer metadata for the entry. It will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getSqlAnalyzerMeta",
    value: function getSqlAnalyzerMeta(options) {
      if (this.sqlAnalyzerMetaPromise && this.sqlAnalyzerMetaPromise.cancelled) {
        this.sqlAnalyzerMetaPromise = undefined;
      }
      options.silenceErrors = true;
      if (!this.dataCatalog.canHaveSqlAnalyzerMeta() || !this.isTableOrView()) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      if (!this.sqlAnalyzerMetaPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      if (!this.sqlAnalyzerMetaPromise || shouldReload(options)) {
        return this.reloadSqlAnalyzerMeta(options);
      }
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sqlAnalyzerMetaPromise, options);
    }

    /**
     * Gets the sample for the entry, if unknown it will first check if any parent table already has the sample. It
     * will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getSample",
    value: function getSample(options) {
      var _this18 = this;
      if (this.isView()) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      if (this.samplePromise && this.samplePromise.cancelled) {
        this.samplePromise = undefined;
      }
      // This prevents caching of any non-standard sample queries, i.e. DISTINCT etc.
      if (options && options.operation && options.operation !== 'default') {
        var operation = options.operation;
        var samplePromise = (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchSample)({
          entry: this,
          operation: operation,
          silenceErrors: options.silenceErrors
        });
        return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(samplePromise, options);
      }

      // Check if parent has a sample that we can reuse
      if (!this.samplePromise && this.isColumn() && !shouldReload(options)) {
        this.samplePromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
          var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(resolve, reject, onCancel) {
            var cancellablePromises, tableEntry, parentSample, colSample, _loop, i, reloadPromise;
            return _regeneratorRuntime().wrap(function _callee23$(_context24) {
              while (1) switch (_context24.prev = _context24.next) {
                case 0:
                  cancellablePromises = [];
                  onCancel(function () {
                    cancellablePromises.forEach(function (promise) {
                      return promise.cancel();
                    });
                  });
                  _context24.prev = 2;
                  _context24.next = 5;
                  return _this18.dataCatalog.getEntry({
                    namespace: _this18.namespace,
                    compute: _this18.compute,
                    path: _this18.path.slice(0, 2),
                    definition: {
                      type: 'table'
                    }
                  });
                case 5:
                  tableEntry = _context24.sent;
                  if (!(tableEntry && tableEntry.samplePromise)) {
                    _context24.next = 26;
                    break;
                  }
                  cancellablePromises.push((0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(tableEntry.samplePromise, options));
                  _context24.next = 10;
                  return tableEntry.samplePromise;
                case 10:
                  parentSample = _context24.sent;
                  colSample = {
                    hueTimestamp: parentSample.hueTimestamp,
                    has_more: parentSample.has_more,
                    type: parentSample.type,
                    data: [],
                    meta: []
                  };
                  if (!parentSample.meta) {
                    _context24.next = 22;
                    break;
                  }
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
                    return _regeneratorRuntime().wrap(function _loop$(_context23) {
                      while (1) switch (_context23.prev = _context23.next) {
                        case 0:
                          if (!(parentSample.meta[i].name.toLowerCase() === _this18.name.toLowerCase())) {
                            _context23.next = 4;
                            break;
                          }
                          colSample.meta[0] = parentSample.meta[i];
                          parentSample.data.forEach(function (parentRow) {
                            colSample.data.push([parentRow[i]]);
                          });
                          return _context23.abrupt("return", 1);
                        case 4:
                        case "end":
                          return _context23.stop();
                      }
                    }, _loop);
                  });
                  i = 0;
                case 15:
                  if (!(i < parentSample.meta.length)) {
                    _context24.next = 22;
                    break;
                  }
                  return _context24.delegateYield(_loop(i), "t0", 17);
                case 17:
                  if (!_context24.t0) {
                    _context24.next = 19;
                    break;
                  }
                  return _context24.abrupt("break", 22);
                case 19:
                  i++;
                  _context24.next = 15;
                  break;
                case 22:
                  if (!colSample.meta.length) {
                    _context24.next = 26;
                    break;
                  }
                  _this18.sample = colSample;
                  resolve(_this18.sample);
                  return _context24.abrupt("return");
                case 26:
                  _context24.next = 30;
                  break;
                case 28:
                  _context24.prev = 28;
                  _context24.t1 = _context24["catch"](2);
                case 30:
                  if (!cachedOnly(options)) {
                    _context24.next = 34;
                    break;
                  }
                  reject();
                  _context24.next = 46;
                  break;
                case 34:
                  reloadPromise = _this18.reloadSample(options);
                  _context24.prev = 35;
                  _context24.t2 = resolve;
                  _context24.next = 39;
                  return reloadPromise;
                case 39:
                  _context24.t3 = _context24.sent;
                  (0, _context24.t2)(_context24.t3);
                  _context24.next = 46;
                  break;
                case 43:
                  _context24.prev = 43;
                  _context24.t4 = _context24["catch"](35);
                  reject();
                case 46:
                case "end":
                  return _context24.stop();
              }
            }, _callee23, null, [[2, 28], [35, 43]]);
          }));
          return function (_x45, _x46, _x47) {
            return _ref18.apply(this, arguments);
          };
        }());
        return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.samplePromise, options);
      }
      if (!this.samplePromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }
      if (!this.samplePromise || shouldReload(options)) {
        return this.reloadSample(options);
      }
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.samplePromise, options);
    }

    /**
     * Gets the top aggregate UDFs for the entry if it's a table or view. It will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getTopAggs",
    value: function getTopAggs(options) {
      var _this19 = this;
      var promise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(resolve, reject, onCancel) {
          var multiTableEntry, topAggsPromise;
          return _regeneratorRuntime().wrap(function _callee24$(_context25) {
            while (1) switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return getMultiTableEntry(_this19);
              case 2:
                multiTableEntry = _context25.sent;
                topAggsPromise = multiTableEntry.getTopAggs(options);
                onCancel(function () {
                  topAggsPromise.cancel();
                });
                topAggsPromise.then(resolve)["catch"](reject);
              case 6:
              case "end":
                return _context25.stop();
            }
          }, _callee24);
        }));
        return function (_x48, _x49, _x50) {
          return _ref19.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(promise);
    }

    /**
     * Gets the top filters for the entry if it's a table or view. It will fetch it if not cached or if the refresh option is set.
     *
     * @return {CancellableJqPromise}
     */
  }, {
    key: "getTopFilters",
    value: function getTopFilters(options) {
      var _this20 = this;
      var promise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(resolve, reject, onCancel) {
          var multiTableEntry, topFiltersPromise;
          return _regeneratorRuntime().wrap(function _callee25$(_context26) {
            while (1) switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return getMultiTableEntry(_this20);
              case 2:
                multiTableEntry = _context26.sent;
                topFiltersPromise = multiTableEntry.getTopFilters(options);
                onCancel(function () {
                  topFiltersPromise.cancel();
                });
                topFiltersPromise.then(resolve)["catch"](reject);
              case 6:
              case "end":
                return _context26.stop();
            }
          }, _callee25);
        }));
        return function (_x51, _x52, _x53) {
          return _ref20.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(promise);
    }

    /**
     * Gets the top joins for the entry if it's a table or view. It will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getTopJoins",
    value: function getTopJoins(options) {
      var _this21 = this;
      var promise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(resolve, reject, onCancel) {
          var multiTableEntry, topJoinsPromise;
          return _regeneratorRuntime().wrap(function _callee26$(_context27) {
            while (1) switch (_context27.prev = _context27.next) {
              case 0:
                _context27.next = 2;
                return getMultiTableEntry(_this21);
              case 2:
                multiTableEntry = _context27.sent;
                topJoinsPromise = multiTableEntry.getTopJoins(options);
                onCancel(function () {
                  topJoinsPromise.cancel();
                });
                topJoinsPromise.then(resolve)["catch"](reject);
              case 6:
              case "end":
                return _context27.stop();
            }
          }, _callee26);
        }));
        return function (_x54, _x55, _x56) {
          return _ref21.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(promise);
    }
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/GeneralDataCatalog.ts":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/GeneralDataCatalog.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GeneralDataCatalog)
/* harmony export */ });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./desktop/core/src/desktop/js/catalog/api.ts");
/* harmony import */ var _dataCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.




var STORAGE_POSTFIX = window.LOGGED_USERNAME;
var DATA_CATALOG_VERSION = 5;
var NAV_TAGS_STORE_ID = 'hue.dataCatalog.allNavTags';
var GeneralDataCatalog = /*#__PURE__*/function () {
  function GeneralDataCatalog() {
    _classCallCheck(this, GeneralDataCatalog);
    this.store = void 0;
    this.allNavigatorTagsPromise = void 0;
    this.store = localforage__WEBPACK_IMPORTED_MODULE_0___default().createInstance({
      name: 'HueDataCatalog_' + STORAGE_POSTFIX
    });
  }
  return _createClass(GeneralDataCatalog, [{
    key: "getAllNavigatorTags",
    value: function () {
      var _getAllNavigatorTags = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(options) {
        var _this = this;
        var ttl;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.allNavigatorTagsPromise && _dataCatalog__WEBPACK_IMPORTED_MODULE_2__.DataCatalog.cacheEnabled() && (!options || !options.refreshCache))) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", this.allNavigatorTagsPromise);
            case 2:
              if (window.HAS_CATALOG) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", {});
            case 4:
              ttl = window.CACHEABLE_TTL || {};
              this.allNavigatorTagsPromise = new Promise(function (resolve, reject) {
                var reloadAllTags = function reloadAllTags() {
                  (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchAllNavigatorTags)({
                    silenceErrors: options && options.silenceErrors
                  }).then(function (allTags) {
                    resolve(allTags);
                    if (ttl["default"] && ttl["default"] > 0) {
                      _this.store.setItem(NAV_TAGS_STORE_ID, {
                        allTags: allTags,
                        hueTimestamp: Date.now(),
                        version: DATA_CATALOG_VERSION
                      });
                    }
                  })["catch"](reject);
                };
                if (ttl["default"] && ttl["default"] > 0 && _dataCatalog__WEBPACK_IMPORTED_MODULE_2__.DataCatalog.cacheEnabled() && (!options || !options.refreshCache)) {
                  _this.store.getItem(NAV_TAGS_STORE_ID).then(function (storeEntry) {
                    if (storeEntry && storeEntry.version === DATA_CATALOG_VERSION && ttl["default"] && (!storeEntry.hueTimestamp || Date.now() - storeEntry.hueTimestamp < ttl["default"])) {
                      resolve(storeEntry.allTags);
                    } else {
                      reloadAllTags();
                    }
                  })["catch"](reloadAllTags);
                } else {
                  reloadAllTags();
                }
              });
              return _context.abrupt("return", this.allNavigatorTagsPromise);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getAllNavigatorTags(_x) {
        return _getAllNavigatorTags.apply(this, arguments);
      }
      return getAllNavigatorTags;
    }()
  }, {
    key: "updateAllNavigatorTags",
    value: function () {
      var _updateAllNavigatorTags = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(tagsToAdd, tagsToRemove) {
        var allTags;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.allNavigatorTagsPromise) {
                _context2.next = 8;
                break;
              }
              _context2.next = 3;
              return this.allNavigatorTagsPromise;
            case 3:
              allTags = _context2.sent;
              tagsToAdd.forEach(function (newTag) {
                if (!allTags[newTag]) {
                  allTags[newTag] = 0;
                }
                allTags[newTag]++;
              });
              tagsToRemove.forEach(function (removedTag) {
                if (!allTags[removedTag]) {
                  allTags[removedTag]--;
                  if (allTags[removedTag] === 0) {
                    delete allTags[removedTag];
                  }
                }
              });
              _context2.next = 8;
              return this.store.setItem(NAV_TAGS_STORE_ID, {
                allTags: allTags,
                hueTimestamp: Date.now(),
                version: DATA_CATALOG_VERSION
              });
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function updateAllNavigatorTags(_x2, _x3) {
        return _updateAllNavigatorTags.apply(this, arguments);
      }
      return updateAllNavigatorTags;
    }()
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/MultiTableEntry.ts":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/MultiTableEntry.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dataCatalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
/* harmony import */ var catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! catalog/catalogUtils */ "./desktop/core/src/desktop/js/catalog/catalogUtils.ts");
/* harmony import */ var utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/timing/noop */ "./desktop/core/src/desktop/js/utils/timing/noop.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





var fetchAndSave = function fetchAndSave(sqlAnalyzerFunction, setFunction, entry, apiOptions) {
  var promise = sqlAnalyzerFunction({
    paths: entry.paths,
    // Set for MultiTableEntry
    silenceErrors: apiOptions && apiOptions.silenceErrors
  });
  promise.then(function (data) {
    setFunction(data);
    entry.saveLater();
  })["catch"](utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return promise;
};

/**
 * Helper function to reload a SQL Analyzer multi table attribute, like topAggs or topFilters
 */
var genericSqlAnalyzerReload = function genericSqlAnalyzerReload(multiTableEntry, options, promiseSetter, dataAttributeSetter, sqlAnalyzerFunction) {
  var promise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise(function (resolve, reject, onCancel) {
    if (!multiTableEntry.dataCatalog.canHaveSqlAnalyzerMeta()) {
      reject();
      return;
    }
    var fetchPromise = fetchAndSave(sqlAnalyzerFunction, dataAttributeSetter, multiTableEntry, options);
    onCancel(function () {
      if (fetchPromise.cancel) {
        fetchPromise.cancel();
      }
    });
    fetchPromise.then(resolve)["catch"](function (err) {
      if (fetchPromise.cancelled) {
        promiseSetter(undefined);
      }
      reject(err);
    });
  });
  promiseSetter(promise);
  return promise;
};

/**
 * Helper function to get a SQL Analyzer multi table attribute, like topAggs or topFilters
 */
var genericSqlAnalyzerGet = function genericSqlAnalyzerGet(multiTableEntry, options, promiseSetter, promiseGetter, dataAttributeSetter, apiHelperFunction) {
  var promise = promiseGetter();
  if (_dataCatalog__WEBPACK_IMPORTED_MODULE_0__.DataCatalog.cacheEnabled() && options && options.cachedOnly) {
    return promise && (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__.applyCancellable)(promise) || api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
  }
  if (!promise || !_dataCatalog__WEBPACK_IMPORTED_MODULE_0__.DataCatalog.cacheEnabled() || options && options.refreshCache) {
    promise = genericSqlAnalyzerReload(multiTableEntry, options, promiseSetter, dataAttributeSetter, apiHelperFunction);
  }
  return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__.applyCancellable)(promise, options);
};
var MultiTableEntry = /*#__PURE__*/function () {
  function MultiTableEntry(options) {
    _classCallCheck(this, MultiTableEntry);
    this.dataCatalog = void 0;
    this.identifier = void 0;
    this.paths = void 0;
    this.saveTimeout = -1;
    this.topAggs = void 0;
    this.topAggsPromise = void 0;
    this.topColumns = void 0;
    this.topColumnsPromise = void 0;
    this.topFilters = void 0;
    this.topFiltersPromise = void 0;
    this.topJoins = void 0;
    this.topJoinsPromise = void 0;
    this.identifier = options.identifier;
    this.dataCatalog = options.dataCatalog;
    this.paths = options.paths;
  }

  /**
   * Save the multi table entry to cache
   *
   * @return {Promise}
   */
  return _createClass(MultiTableEntry, [{
    key: "save",
    value: function save() {
      window.clearTimeout(this.saveTimeout);
      return this.dataCatalog.persistMultiTableEntry(this);
    }

    /**
     * Save the multi table entry at a later point of time
     */
  }, {
    key: "saveLater",
    value: function saveLater() {
      var _this = this;
      var ttl = window.CACHEABLE_TTL;
      if (ttl && ttl["default"] && ttl["default"] > 0) {
        window.clearTimeout(this.saveTimeout);
        this.saveTimeout = window.setTimeout(function () {
          _this.save()["catch"]();
        }, 1000);
      }
    }

    /**
     * Returns the dialect of this entry.
     */
  }, {
    key: "getDialect",
    value: function getDialect() {
      return this.getConnector().dialect || this.getConnector().id; // .id for editor v1
    }

    /**
     * Returns the connector for this entry
     */
  }, {
    key: "getConnector",
    value: function getConnector() {
      return this.dataCatalog.connector;
    }

    /**
     * Gets the top aggregate UDFs for the entry. It will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getTopAggs",
    value: function getTopAggs(options) {
      var _this2 = this;
      return genericSqlAnalyzerGet(this, options, function (promise) {
        _this2.topAggsPromise = promise;
      }, function () {
        return _this2.topAggsPromise;
      }, function (val) {
        _this2.topAggs = val;
      }, options.sqlAnalyzer.fetchTopAggs.bind(options.sqlAnalyzer));
    }

    /**
     * Gets the top columns for the entry. It will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getTopColumns",
    value: function getTopColumns(options) {
      var _this3 = this;
      return genericSqlAnalyzerGet(this, options, function (promise) {
        _this3.topColumnsPromise = promise;
      }, function () {
        return _this3.topColumnsPromise;
      }, function (val) {
        _this3.topColumns = val;
      }, options.sqlAnalyzer.fetchTopColumns.bind(options.sqlAnalyzer));
    }

    /**
     * Gets the top filters for the entry. It will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getTopFilters",
    value: function getTopFilters(options) {
      var _this4 = this;
      return genericSqlAnalyzerGet(this, options, function (promise) {
        _this4.topFiltersPromise = promise;
      }, function () {
        return _this4.topFiltersPromise;
      }, function (val) {
        _this4.topFilters = val;
      }, options.sqlAnalyzer.fetchTopFilters.bind(options.sqlAnalyzer));
    }

    /**
     * Gets the top joins for the entry. It will fetch it if not cached or if the refresh option is set.
     */
  }, {
    key: "getTopJoins",
    value: function getTopJoins(options) {
      var _this5 = this;
      return genericSqlAnalyzerGet(this, options, function (promise) {
        _this5.topJoinsPromise = promise;
      }, function () {
        return _this5.topJoinsPromise;
      }, function (val) {
        _this5.topJoins = val;
      }, options.sqlAnalyzer.fetchTopJoins.bind(options.sqlAnalyzer));
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiTableEntry);

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-7cb30146-bundle-a2a4f8506cb55bb7.js.map