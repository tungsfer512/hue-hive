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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-8dc1dc79"],{

/***/ "./desktop/core/src/desktop/js/catalog/catalogUtils.ts":
/*!*************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/catalogUtils.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCancellable": () => (/* binding */ applyCancellable),
/* harmony export */   "forceSilencedErrors": () => (/* binding */ forceSilencedErrors)
/* harmony export */ });
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

/**
 * Helper function that adds sets the silence errors option to true if not specified
 */
var forceSilencedErrors = function forceSilencedErrors(options) {
  if (!options) {
    options = {};
  }
  if (typeof options.silenceErrors === 'undefined') {
    options.silenceErrors = true;
  }
  return options;
};

/**
 * Helper function to apply the cancellable option to an existing or new promise
 */
var applyCancellable = function applyCancellable(promise, options) {
  if (promise && promise.preventCancel && (!options || !options.cancellable)) {
    promise.preventCancel();
  }
  return promise;
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/contextCatalog.ts":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/contextCatalog.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getClusters": () => (/* binding */ getClusters),
/* harmony export */   "getComputes": () => (/* binding */ getComputes),
/* harmony export */   "getNamespaces": () => (/* binding */ getNamespaces)
/* harmony export */ });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./desktop/core/src/desktop/js/catalog/api.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/timing/noop */ "./desktop/core/src/desktop/js/utils/timing/noop.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./desktop/core/src/desktop/js/catalog/events.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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






var ContextTypes = /*#__PURE__*/function (ContextTypes) {
  ContextTypes["Namespace"] = "namespace";
  ContextTypes["Compute"] = "compute";
  ContextTypes["Cluster"] = "cluster";
  return ContextTypes;
}(ContextTypes || {});
var STORAGE_POSTFIX = window.LOGGED_USERNAME;
var CONTEXT_CATALOG_VERSION = 4;
var DISABLE_CACHE = true;
var store = localforage__WEBPACK_IMPORTED_MODULE_0___default().createInstance({
  name: "HueContextCatalog_".concat(STORAGE_POSTFIX)
});
var namespacePromises = new Map();
var computePromises = new Map();
var clusterPromises = new Map();
utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(_events__WEBPACK_IMPORTED_MODULE_4__.REFRESH_CONTEXT_CATALOG_TOPIC, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var namespacesToRefresh;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        namespacesToRefresh = _toConsumableArray(namespacePromises.keys());
        namespacePromises.clear();
        computePromises.clear();
        clusterPromises.clear();
        _context.prev = 4;
        _context.next = 7;
        return store.clear();
      case 7:
        _context.next = 11;
        break;
      case 9:
        _context.prev = 9;
        _context.t0 = _context["catch"](4);
      case 11:
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_4__.CONTEXT_CATALOG_REFRESHED_TOPIC);
        namespacesToRefresh.forEach(function (connectorId) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_4__.NAMESPACES_REFRESHED_TOPIC, connectorId);
        });
      case 13:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[4, 9]]);
})));
var saveLaterToCache = function saveLaterToCache(type, connector, entry) {
  if (entry) {
    window.setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return store.setItem("".concat(type, "_").concat(connector.id), {
              version: CONTEXT_CATALOG_VERSION,
              entry: entry
            });
          case 3:
            _context2.next = 7;
            break;
          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 5]]);
    })), 1000);
  }
};
var deleteFromCache = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(type, connector) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return store.removeItem("".concat(type, "_").concat(connector.id));
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function deleteFromCache(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();
var getCached = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(type, connector) {
    var storedItem;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (DISABLE_CACHE) {
            _context4.next = 12;
            break;
          }
          _context4.prev = 1;
          _context4.next = 4;
          return store.getItem("".concat(type, "_").concat(connector.id));
        case 4:
          storedItem = _context4.sent;
          if (!(storedItem && storedItem.version === CONTEXT_CATALOG_VERSION)) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", storedItem.entry);
        case 7:
          _context4.next = 12;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](1);
          console.warn(_context4.t0);
        case 12:
          return _context4.abrupt("return", undefined);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 9]]);
  }));
  return function getCached(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();
var getNamespaces = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref5) {
    var connector, clearCache, silenceErrors, notifyForRefresh;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          connector = _ref5.connector, clearCache = _ref5.clearCache, silenceErrors = _ref5.silenceErrors;
          notifyForRefresh = namespacePromises.has(connector.id) && clearCache;
          if (!clearCache) {
            _context6.next = 6;
            break;
          }
          namespacePromises["delete"](connector.id);
          _context6.next = 6;
          return deleteFromCache(ContextTypes.Namespace, connector);
        case 6:
          if (!namespacePromises.has(connector.id)) {
            namespacePromises.set(connector.id, new Promise( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
                var cached, fetchedNamespaces, namespaces, dynamic, connectorNamespaces;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return getCached(ContextTypes.Namespace, connector);
                    case 3:
                      cached = _context5.sent;
                      if (!cached) {
                        _context5.next = 7;
                        break;
                      }
                      resolve(cached);
                      return _context5.abrupt("return");
                    case 7:
                      _context5.next = 11;
                      break;
                    case 9:
                      _context5.prev = 9;
                      _context5.t0 = _context5["catch"](0);
                    case 11:
                      _context5.next = 13;
                      return (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchNamespaces)(connector, silenceErrors);
                    case 13:
                      fetchedNamespaces = _context5.sent;
                      namespaces = fetchedNamespaces[connector.id];
                      if (namespaces) {
                        dynamic = fetchedNamespaces.dynamicClusters;
                        namespaces.forEach(function (namespace) {
                          // Adapt computes, TODO: Still needed?
                          namespace.computes.forEach(function (compute) {
                            if (!compute.id && compute.crn) {
                              compute.id = compute.crn;
                            }
                            if (!compute.name && compute.clusterName) {
                              compute.name = compute.clusterName;
                            }
                          });
                        });
                        connectorNamespaces = {
                          namespaces: namespaces.filter(function (namespace) {
                            return namespace.name;
                          }),
                          dynamic: dynamic,
                          hueTimestamp: Date.now()
                        };
                        resolve(connectorNamespaces);
                        if (notifyForRefresh) {
                          utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_4__.NAMESPACES_REFRESHED_TOPIC, connector.id);
                        }
                        if (connectorNamespaces.namespaces.length) {
                          saveLaterToCache(ContextTypes.Namespace, connector, connectorNamespaces);
                        } else {
                          deleteFromCache(ContextTypes.Namespace, connector)["catch"](utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__["default"]);
                        }
                      } else {
                        reject();
                      }
                    case 16:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5, null, [[0, 9]]);
              }));
              return function (_x6, _x7) {
                return _ref7.apply(this, arguments);
              };
            }()));
          }
          return _context6.abrupt("return", namespacePromises.get(connector.id));
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getNamespaces(_x5) {
    return _ref6.apply(this, arguments);
  };
}();
var getComputes = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(_ref8) {
    var connector, clearCache, silenceErrors;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          connector = _ref8.connector, clearCache = _ref8.clearCache, silenceErrors = _ref8.silenceErrors;
          if (!clearCache) {
            _context8.next = 5;
            break;
          }
          computePromises["delete"](connector.id);
          _context8.next = 5;
          return deleteFromCache(ContextTypes.Compute, connector);
        case 5:
          if (!computePromises.has(connector.id)) {
            computePromises.set(connector.id, new Promise( /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
                var cached, fetchedComputes, computes;
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      _context7.next = 3;
                      return getCached(ContextTypes.Compute, connector);
                    case 3:
                      cached = _context7.sent;
                      if (!cached) {
                        _context7.next = 7;
                        break;
                      }
                      resolve(cached);
                      return _context7.abrupt("return");
                    case 7:
                      _context7.next = 11;
                      break;
                    case 9:
                      _context7.prev = 9;
                      _context7.t0 = _context7["catch"](0);
                    case 11:
                      _context7.next = 13;
                      return (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchComputes)(connector, silenceErrors);
                    case 13:
                      fetchedComputes = _context7.sent;
                      computes = fetchedComputes[connector.id];
                      if (computes) {
                        resolve(computes);
                        if (computes.length) {
                          saveLaterToCache(ContextTypes.Compute, connector, computes);
                        } else {
                          deleteFromCache(ContextTypes.Compute, connector)["catch"](utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__["default"]);
                        }
                      } else {
                        reject();
                      }
                    case 16:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7, null, [[0, 9]]);
              }));
              return function (_x9, _x10) {
                return _ref10.apply(this, arguments);
              };
            }()));
          }
          return _context8.abrupt("return", computePromises.get(connector.id));
        case 7:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function getComputes(_x8) {
    return _ref9.apply(this, arguments);
  };
}();
var getClusters = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_ref11) {
    var connector, clearCache, silenceErrors;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          connector = _ref11.connector, clearCache = _ref11.clearCache, silenceErrors = _ref11.silenceErrors;
          if (!clearCache) {
            _context10.next = 5;
            break;
          }
          clusterPromises["delete"](connector.id);
          _context10.next = 5;
          return deleteFromCache(ContextTypes.Cluster, connector);
        case 5:
          if (!clusterPromises.has(connector.id)) {
            clusterPromises.set(connector.id, new Promise( /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
                var cached, fetchedClusters, clusters;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return getCached(ContextTypes.Cluster, connector);
                    case 3:
                      cached = _context9.sent;
                      if (!cached) {
                        _context9.next = 7;
                        break;
                      }
                      resolve(cached);
                      return _context9.abrupt("return");
                    case 7:
                      _context9.next = 11;
                      break;
                    case 9:
                      _context9.prev = 9;
                      _context9.t0 = _context9["catch"](0);
                    case 11:
                      _context9.next = 13;
                      return (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchClusters)(connector, silenceErrors);
                    case 13:
                      fetchedClusters = _context9.sent;
                      clusters = fetchedClusters[connector.id];
                      if (clusters) {
                        resolve(clusters);
                        if (clusters.length) {
                          saveLaterToCache(ContextTypes.Cluster, connector, clusters);
                        } else {
                          deleteFromCache(ContextTypes.Cluster, connector)["catch"](utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__["default"]);
                        }
                      } else {
                        reject();
                      }
                    case 16:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9, null, [[0, 9]]);
              }));
              return function (_x12, _x13) {
                return _ref13.apply(this, arguments);
              };
            }()));
          }
          return _context10.abrupt("return", clusterPromises.get(connector.id));
        case 7:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function getClusters(_x11) {
    return _ref12.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getNamespaces: getNamespaces,
  getComputes: getComputes,
  getClusters: getClusters
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts":
/*!************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/dataCatalog.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataCatalog": () => (/* binding */ DataCatalog),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
/* harmony import */ var catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! catalog/catalogUtils */ "./desktop/core/src/desktop/js/catalog/catalogUtils.ts");
/* harmony import */ var catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! catalog/DataCatalogEntry */ "./desktop/core/src/desktop/js/catalog/DataCatalogEntry.ts");
/* harmony import */ var catalog_GeneralDataCatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! catalog/GeneralDataCatalog */ "./desktop/core/src/desktop/js/catalog/GeneralDataCatalog.ts");
/* harmony import */ var catalog_MultiTableEntry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! catalog/MultiTableEntry */ "./desktop/core/src/desktop/js/catalog/MultiTableEntry.ts");
/* harmony import */ var _analyzer_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analyzer/types */ "./desktop/core/src/desktop/js/catalog/analyzer/types.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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








var STORAGE_POSTFIX = window.LOGGED_USERNAME || '';
var DATA_CATALOG_VERSION = 5;
var _cacheEnabled = true;

/**
 * Creates a cache identifier given a namespace and path(s)
 */
var generateEntryCacheId = function generateEntryCacheId(options) {
  var id = options.namespace.id;
  if (options.path) {
    if (typeof options.path === 'string') {
      id += '_' + options.path;
    } else if (options.path.length) {
      id += '_' + options.path.join('.');
    }
  } else if (options.paths && options.paths.length) {
    var pathSet = {};
    options.paths.forEach(function (path) {
      pathSet[path.join('.')] = true;
    });
    var uniquePaths = Object.keys(pathSet);
    uniquePaths.sort();
    id += '_' + uniquePaths.join(',');
  }
  return id;
};
var isFresh = function isFresh(storeEntryValue, ttl) {
  var confTtl = window.CACHEABLE_TTL || {};
  var ttlToCheck = typeof ttl !== 'undefined' ? ttl : confTtl["default"];
  if (!storeEntryValue.hueTimestamp || typeof ttlToCheck === 'undefined') {
    return true;
  }
  return Date.now() - storeEntryValue.hueTimestamp < ttlToCheck;
};

/**
 * Helper function to fill a catalog entry with cached metadata.
 */
var mergeEntry = function mergeEntry(dataCatalogEntry, storeEntry) {
  if (storeEntry.version !== DATA_CATALOG_VERSION) {
    return;
  }
  if (storeEntry.definition && isFresh(storeEntry.definition)) {
    dataCatalogEntry.definition = storeEntry.definition;
  }
  if (storeEntry.sourceMeta && isFresh(storeEntry.sourceMeta)) {
    dataCatalogEntry.sourceMeta = storeEntry.sourceMeta;
    dataCatalogEntry.sourceMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.sourceMeta);
  }
  if (storeEntry.analysis && isFresh(storeEntry.analysis)) {
    dataCatalogEntry.analysis = storeEntry.analysis;
    dataCatalogEntry.analysisPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.analysis);
  }
  if (storeEntry.partitions && isFresh(storeEntry.partitions)) {
    dataCatalogEntry.partitions = storeEntry.partitions;
    dataCatalogEntry.partitionsPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.partitions);
  }
  if (storeEntry.sample && isFresh(storeEntry.sample)) {
    dataCatalogEntry.sample = storeEntry.sample;
    dataCatalogEntry.samplePromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.sample);
  }
  if (storeEntry.navigatorMeta && isFresh(storeEntry.navigatorMeta)) {
    dataCatalogEntry.navigatorMeta = storeEntry.navigatorMeta;
    dataCatalogEntry.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.navigatorMeta);
  }
  if (dataCatalogEntry.getConnector().optimizer !== _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.local) {
    var confTtl = window.CACHEABLE_TTL || {};
    if (storeEntry.sqlAnalyzerMeta && isFresh(storeEntry.sqlAnalyzerMeta, confTtl.sqlAnalyzer)) {
      dataCatalogEntry.sqlAnalyzerMeta = storeEntry.sqlAnalyzerMeta;
      dataCatalogEntry.sqlAnalyzerMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.sqlAnalyzerMeta);
    }
    if (storeEntry.sqlAnalyzerPopularity && isFresh(storeEntry.sqlAnalyzerPopularity, confTtl.sqlAnalyzer)) {
      dataCatalogEntry.sqlAnalyzerPopularity = storeEntry.sqlAnalyzerPopularity;
    }
  }
};

/**
 * Helper function to fill a multi table catalog entry with cached metadata.
 */
var mergeMultiTableEntry = function mergeMultiTableEntry(multiTableEntry, storeEntry) {
  if (multiTableEntry.getConnector().optimizer === _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.local || storeEntry.version !== DATA_CATALOG_VERSION) {
    return;
  }
  var confTtl = window.CACHEABLE_TTL || {};
  if (storeEntry.topAggs && isFresh(storeEntry.topAggs, confTtl.sqlAnalyzer)) {
    multiTableEntry.topAggs = storeEntry.topAggs;
    multiTableEntry.topAggsPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(multiTableEntry.topAggs);
  }
  if (storeEntry.topColumns && isFresh(storeEntry.topColumns, confTtl.sqlAnalyzer)) {
    multiTableEntry.topColumns = storeEntry.topColumns;
    multiTableEntry.topColumnsPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(multiTableEntry.topColumns);
  }
  if (storeEntry.topFilters && isFresh(storeEntry.topFilters, confTtl.sqlAnalyzer)) {
    multiTableEntry.topFilters = storeEntry.topFilters;
    multiTableEntry.topFiltersPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(multiTableEntry.topFilters);
  }
  if (storeEntry.topJoins && isFresh(storeEntry.topJoins, confTtl.sqlAnalyzer)) {
    multiTableEntry.topJoins = storeEntry.topJoins;
    multiTableEntry.topJoinsPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(multiTableEntry.topJoins);
  }
};
var DataCatalog = /*#__PURE__*/function () {
  function DataCatalog(connector) {
    _classCallCheck(this, DataCatalog);
    this.connector = void 0;
    this.entries = {};
    this.temporaryEntries = {};
    this.multiTableEntries = {};
    this.store = void 0;
    this.multiTableStore = void 0;
    this.invalidatePromise = void 0;
    if (!connector || !connector.id) {
      throw new Error('DataCatalog created without connector or id');
    }
    this.connector = connector;
    this.store = localforage__WEBPACK_IMPORTED_MODULE_0___default().createInstance({
      name: 'HueDataCatalog_' + this.connector.id + '_' + STORAGE_POSTFIX
    });
    this.multiTableStore = localforage__WEBPACK_IMPORTED_MODULE_0___default().createInstance({
      name: 'HueDataCatalog_' + this.connector.id + '_multiTable_' + STORAGE_POSTFIX
    });
  }

  /**
   * Disables the caching for subsequent operations, mainly used for test purposes
   */
  return _createClass(DataCatalog, [{
    key: "canHaveSqlAnalyzerMeta",
    value:
    /**
     * Returns true if the catalog can have SQL Analyzer metadata
     */
    function canHaveSqlAnalyzerMeta() {
      return !!(window.HAS_SQL_ANALYZER && this.connector && this.connector.optimizer && this.connector.optimizer !== _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.off);
    }

    /**
     * Clears the data catalog and cache for the given path and any children thereof.
     */
  }, {
    key: "clearStorageCascade",
    value: (function () {
      var _clearStorageCascade = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(namespace, compute, pathToClear) {
        var _this = this;
        var keyPrefix, deletePromises, keys;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!namespace || !compute)) {
                _context.next = 5;
                break;
              }
              if (!(!pathToClear || pathToClear.length === 0)) {
                _context.next = 4;
                break;
              }
              this.entries = {};
              return _context.abrupt("return", this.store.clear());
            case 4:
              return _context.abrupt("return");
            case 5:
              keyPrefix = generateEntryCacheId({
                namespace: namespace,
                path: pathToClear
              });
              Object.keys(this.entries).forEach(function (key) {
                if (key.indexOf(keyPrefix) === 0) {
                  delete _this.entries[key];
                }
              });
              deletePromises = [];
              _context.prev = 8;
              _context.next = 11;
              return this.store.keys();
            case 11:
              keys = _context.sent;
              keys.forEach(function (key) {
                if (key.indexOf(keyPrefix) === 0) {
                  deletePromises.push(_this.store.removeItem(key));
                }
              });
              _context.next = 15;
              return Promise.all(deletePromises);
            case 15:
              _context.next = 19;
              break;
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](8);
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[8, 17]]);
      }));
      function clearStorageCascade(_x, _x2, _x3) {
        return _clearStorageCascade.apply(this, arguments);
      }
      return clearStorageCascade;
    }()
    /**
     * Updates the cache for the given entry
     */
    )
  }, {
    key: "persistCatalogEntry",
    value: (function () {
      var _persistCatalogEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dataCatalogEntry) {
        var confTtl, identifier;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              confTtl = window.CACHEABLE_TTL || {};
              if (!(!_cacheEnabled || !confTtl["default"] || confTtl["default"] <= 0)) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              identifier = generateEntryCacheId(dataCatalogEntry);
              _context2.next = 6;
              return this.store.setItem(identifier, {
                version: DATA_CATALOG_VERSION,
                definition: dataCatalogEntry.definition,
                sourceMeta: dataCatalogEntry.sourceMeta,
                analysis: dataCatalogEntry.analysis,
                partitions: dataCatalogEntry.partitions,
                sample: dataCatalogEntry.sample,
                navigatorMeta: dataCatalogEntry.navigatorMeta,
                sqlAnalyzerMeta: this.connector.optimizer !== _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.local ? dataCatalogEntry.sqlAnalyzerMeta : undefined,
                sqlAnalyzerPopularity: this.connector.optimizer !== _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.local ? dataCatalogEntry.sqlAnalyzerPopularity : undefined
              });
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function persistCatalogEntry(_x4) {
        return _persistCatalogEntry.apply(this, arguments);
      }
      return persistCatalogEntry;
    }()
    /**
     * Loads SQL Analyzer popularity for multiple tables in one go.
     */
    )
  }, {
    key: "loadSqlAnalyzerPopularityForTables",
    value: function loadSqlAnalyzerPopularityForTables(options) {
      var _this2 = this;
      var cancellablePromises = [];
      var popularEntries = [];
      var pathsToLoad = [];
      var existingPromises = [];
      options.paths.forEach(function (path) {
        var existingPromise = new Promise( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
            var tableEntry, existingPopularEntries, childPromise, childEntries;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return _this2.getEntry({
                    namespace: options.namespace,
                    compute: options.compute,
                    path: path
                  });
                case 3:
                  tableEntry = _context3.sent;
                  if (!tableEntry.sqlAnalyzerPopularityForChildrenPromise) {
                    _context3.next = 11;
                    break;
                  }
                  _context3.next = 7;
                  return tableEntry.sqlAnalyzerPopularityForChildrenPromise;
                case 7:
                  existingPopularEntries = _context3.sent;
                  popularEntries.push.apply(popularEntries, _toConsumableArray(existingPopularEntries));
                  _context3.next = 21;
                  break;
                case 11:
                  if (!(tableEntry.definition && tableEntry.definition.sqlAnalyzerLoaded)) {
                    _context3.next = 20;
                    break;
                  }
                  childPromise = tableEntry.getChildren(_objectSpread(_objectSpread({}, options), {}, {
                    silenceErrors: true
                  }));
                  cancellablePromises.push(childPromise);
                  _context3.next = 16;
                  return childPromise;
                case 16:
                  childEntries = _context3.sent;
                  childEntries.forEach(function (childEntry) {
                    if (childEntry.sqlAnalyzerPopularity) {
                      popularEntries.push(childEntry);
                    }
                  });
                  _context3.next = 21;
                  break;
                case 20:
                  pathsToLoad.push(path);
                case 21:
                  _context3.next = 26;
                  break;
                case 23:
                  _context3.prev = 23;
                  _context3.t0 = _context3["catch"](0);
                  reject(_context3.t0);
                case 26:
                  resolve();
                case 27:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, null, [[0, 23]]);
          }));
          return function (_x5, _x6) {
            return _ref.apply(this, arguments);
          };
        }());
        existingPromises.push(existingPromise);
      });
      var popularityPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject, onCancel) {
          var fetchPromise, data, perTable, splitSqlAnalyzerValuesPerTable, tablePromises;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                onCancel(function () {
                  cancellablePromises.forEach(function (cancellable) {
                    cancellable.cancel();
                  });
                });
                _context5.prev = 1;
                _context5.next = 4;
                return Promise.all(existingPromises);
              case 4:
                _context5.next = 8;
                break;
              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](1);
              case 8:
                if (pathsToLoad.length) {
                  _context5.next = 11;
                  break;
                }
                resolve(popularEntries);
                return _context5.abrupt("return");
              case 11:
                fetchPromise = options.sqlAnalyzer.fetchPopularity({
                  silenceErrors: true,
                  paths: pathsToLoad
                });
                cancellablePromises.push(fetchPromise);
                _context5.prev = 13;
                _context5.next = 16;
                return fetchPromise;
              case 16:
                data = _context5.sent;
                perTable = {};
                splitSqlAnalyzerValuesPerTable = function splitSqlAnalyzerValuesPerTable(listName) {
                  var values = data.values && data.values[listName];
                  if (values) {
                    values.forEach(function (column) {
                      var tableMeta = perTable[column.dbName + '.' + column.tableName];
                      if (!tableMeta) {
                        tableMeta = {
                          values: {}
                        };
                        perTable[column.dbName + '.' + column.tableName] = tableMeta;
                      }
                      if (tableMeta.values) {
                        var valuesList = tableMeta.values[listName];
                        if (!valuesList) {
                          valuesList = [];
                          tableMeta.values[listName] = valuesList;
                        }
                        valuesList.push(column);
                      }
                    });
                  }
                };
                if (data.values) {
                  splitSqlAnalyzerValuesPerTable('filterColumns');
                  splitSqlAnalyzerValuesPerTable('groupbyColumns');
                  splitSqlAnalyzerValuesPerTable('joinColumns');
                  splitSqlAnalyzerValuesPerTable('orderbyColumns');
                  splitSqlAnalyzerValuesPerTable('selectColumns');
                }
                tablePromises = Object.keys(perTable).map(function (path) {
                  return new Promise( /*#__PURE__*/function () {
                    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve) {
                      var entry, applyPromise;
                      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _this2.getEntry({
                              namespace: options.namespace,
                              compute: options.compute,
                              path: path
                            });
                          case 3:
                            entry = _context4.sent;
                            applyPromise = entry.applySqlAnalyzerResponseToChildren(perTable[path], _objectSpread(_objectSpread({}, options), {}, {
                              silenceErrors: true
                            }));
                            cancellablePromises.push(applyPromise);
                            _context4.t0 = popularEntries.push;
                            _context4.t1 = popularEntries;
                            _context4.t2 = _toConsumableArray;
                            _context4.next = 11;
                            return applyPromise;
                          case 11:
                            _context4.t3 = _context4.sent;
                            _context4.t4 = (0, _context4.t2)(_context4.t3);
                            _context4.t0.apply.call(_context4.t0, _context4.t1, _context4.t4);
                            _context4.next = 18;
                            break;
                          case 16:
                            _context4.prev = 16;
                            _context4.t5 = _context4["catch"](0);
                          case 18:
                            resolve();
                          case 19:
                          case "end":
                            return _context4.stop();
                        }
                      }, _callee4, null, [[0, 16]]);
                    }));
                    return function (_x10) {
                      return _ref3.apply(this, arguments);
                    };
                  }());
                });
                Promise.all(tablePromises)["finally"](function () {
                  resolve(popularEntries);
                });
                _context5.next = 27;
                break;
              case 24:
                _context5.prev = 24;
                _context5.t1 = _context5["catch"](13);
                resolve(popularEntries);
              case 27:
              case "end":
                return _context5.stop();
            }
          }, _callee5, null, [[1, 6], [13, 24]]);
        }));
        return function (_x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__.applyCancellable)(popularityPromise);
    }
  }, {
    key: "getKnownEntry",
    value: function () {
      var _getKnownEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(options) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.entries[generateEntryCacheId(options)]);
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function getKnownEntry(_x11) {
        return _getKnownEntry.apply(this, arguments);
      }
      return getKnownEntry;
    }()
    /**
     * Adds a temporary table to the data catalog. This would allow autocomplete etc. of tables that haven't
     * been created yet.
     *
     * Calling this returns a handle that allows deletion of any created entries by calling delete() on the handle.
     */
  }, {
    key: "addTemporaryTable",
    value: function addTemporaryTable(options) {
      var _this3 = this;
      var database = options.database || 'default';
      var path = [database, options.name];
      var identifiersToClean = [];
      var addEntryMeta = function addEntryMeta(entry, sourceMeta) {
        entry.sourceMeta = sourceMeta || entry.definition;
        entry.sourceMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(entry.sourceMeta);
      };
      var sourceIdentifier = generateEntryCacheId({
        namespace: options.namespace,
        path: []
      });

      // Create the source entry if not already present
      if (!this.temporaryEntries[sourceIdentifier]) {
        var sourceEntry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__["default"]({
          isTemporary: true,
          dataCatalog: this,
          namespace: options.namespace,
          compute: options.compute,
          path: [],
          definition: {
            index: 0,
            sqlAnalyzerLoaded: true,
            type: 'source'
          }
        });
        addEntryMeta(sourceEntry);
        identifiersToClean.push(sourceIdentifier);
        sourceEntry.childrenPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve([]);
        this.temporaryEntries[sourceIdentifier] = Promise.resolve(sourceEntry);
      }
      this.temporaryEntries[sourceIdentifier].then( /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(sourceEntry) {
          var existingTemporaryDatabases, databaseIdentifier, _databaseEntry, databaseEntry, existingTemporaryTables, tableIdentifier, _tableEntry, index, tableEntry, tableSourceMeta, columnEntries;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return sourceEntry.getChildren();
              case 2:
                existingTemporaryDatabases = _context7.sent;
                databaseIdentifier = generateEntryCacheId({
                  namespace: options.namespace,
                  path: [database]
                }); // Create the database entry if not already present
                if (!_this3.temporaryEntries[databaseIdentifier]) {
                  _databaseEntry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    isTemporary: true,
                    dataCatalog: _this3,
                    namespace: options.namespace,
                    compute: options.compute,
                    path: [database],
                    definition: {
                      index: 0,
                      sqlAnalyzerLoaded: true,
                      type: 'database'
                    }
                  });
                  addEntryMeta(_databaseEntry);
                  _databaseEntry.childrenPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve([]);
                  identifiersToClean.push(databaseIdentifier);
                  existingTemporaryDatabases.push(_databaseEntry);
                  _this3.temporaryEntries[databaseIdentifier] = Promise.resolve(_databaseEntry);
                }
                _context7.next = 7;
                return _this3.temporaryEntries[databaseIdentifier];
              case 7:
                databaseEntry = _context7.sent;
                _context7.next = 10;
                return databaseEntry.getChildren();
              case 10:
                existingTemporaryTables = _context7.sent;
                tableIdentifier = generateEntryCacheId({
                  namespace: options.namespace,
                  path: path
                }); // Unlink any existing table with the same identifier
                if (!_this3.temporaryEntries[tableIdentifier]) {
                  _context7.next = 18;
                  break;
                }
                _context7.next = 15;
                return _this3.temporaryEntries[tableIdentifier];
              case 15:
                _tableEntry = _context7.sent;
                index = existingTemporaryTables.indexOf(_tableEntry);
                if (index !== -1) {
                  existingTemporaryTables.splice(index, 1);
                }
              case 18:
                tableEntry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__["default"]({
                  isTemporary: true,
                  dataCatalog: _this3,
                  namespace: options.namespace,
                  compute: options.compute,
                  path: path,
                  definition: {
                    comment: '',
                    index: existingTemporaryTables.length,
                    name: options.name,
                    sqlAnalyzerLoaded: true,
                    type: 'table'
                  }
                });
                existingTemporaryTables.push(tableEntry);
                tableSourceMeta = {
                  columns: (options.columns || []).map(function (col) {
                    return col.name;
                  }),
                  extended_columns: options.columns || [],
                  comment: '',
                  notFound: false,
                  is_view: false
                };
                addEntryMeta(tableEntry, tableSourceMeta);
                tableEntry.sample = {
                  data: options.sample,
                  meta: options.columns,
                  type: 'table'
                };
                tableEntry.samplePromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(tableEntry.sample);
                identifiersToClean.push(tableIdentifier);
                _this3.temporaryEntries[tableIdentifier] = Promise.resolve(tableEntry);
                columnEntries = [];
                tableEntry.childrenPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(columnEntries);
                options.columns.forEach(function (column, index) {
                  var columnPath = [].concat(path, [column.name]);
                  var columnEntry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    isTemporary: true,
                    dataCatalog: _this3,
                    namespace: options.namespace,
                    compute: options.compute,
                    path: columnPath,
                    definition: {
                      comment: '',
                      index: index,
                      name: column.name,
                      partitionKey: false,
                      type: column.type
                    }
                  });
                  columnEntry.sample = {
                    data: options.sample.map(function (sampleRow) {
                      return [sampleRow[index]];
                    }),
                    meta: [column],
                    type: 'table'
                  };
                  columnEntry.samplePromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(columnEntry.sample);
                  tableSourceMeta.columns.push(column.name);
                  tableSourceMeta.extended_columns.push(columnEntry.definition);
                  addEntryMeta(columnEntry, {
                    comment: '',
                    name: column.name,
                    notFound: false,
                    sample: columnEntry.sample.data,
                    type: column.type
                  });
                  var columnIdentifier = generateEntryCacheId({
                    namespace: options.namespace,
                    path: columnPath
                  });
                  identifiersToClean.push(columnIdentifier);
                  _this3.temporaryEntries[columnIdentifier] = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(columnEntry);
                });
              case 29:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
        return function (_x12) {
          return _ref4.apply(this, arguments);
        };
      }());
      return {
        "delete": function _delete() {
          while (identifiersToClean.length) {
            var nextToDelete = identifiersToClean.pop();
            if (nextToDelete) {
              delete _this3.temporaryEntries[nextToDelete];
            }
          }
        }
      };
    }
  }, {
    key: "getEntry",
    value: function () {
      var _getEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(options) {
        var _this4 = this;
        var identifier;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              identifier = generateEntryCacheId(options);
              if (!options.temporaryOnly) {
                _context8.next = 3;
                break;
              }
              return _context8.abrupt("return", this.temporaryEntries[identifier] || $.Deferred().reject().promise());
            case 3:
              if (!this.entries[identifier]) {
                _context8.next = 5;
                break;
              }
              return _context8.abrupt("return", this.entries[identifier]);
            case 5:
              this.entries[identifier] = new Promise(function (resolve) {
                if (!_cacheEnabled) {
                  resolve(new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    dataCatalog: _this4,
                    namespace: options.namespace,
                    compute: options.compute,
                    path: options.path,
                    definition: options.definition
                  }));
                } else {
                  _this4.store.getItem(identifier).then(function (storeEntry) {
                    var definition = storeEntry ? storeEntry.definition : options.definition;
                    var entry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__["default"]({
                      dataCatalog: _this4,
                      namespace: options.namespace,
                      compute: options.compute,
                      path: options.path,
                      definition: definition
                    });
                    if (storeEntry) {
                      mergeEntry(entry, storeEntry);
                    } else if (!options.cachedOnly && options.definition) {
                      entry.saveLater();
                    }
                    resolve(entry);
                  })["catch"](function (error) {
                    console.warn(error);
                    var entry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__["default"]({
                      dataCatalog: _this4,
                      namespace: options.namespace,
                      compute: options.compute,
                      path: options.path,
                      definition: options.definition
                    });
                    if (!options.cachedOnly && options.definition) {
                      entry.saveLater();
                    }
                    resolve(entry);
                  });
                }
              });
              return _context8.abrupt("return", this.entries[identifier]);
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function getEntry(_x13) {
        return _getEntry.apply(this, arguments);
      }
      return getEntry;
    }()
  }, {
    key: "getMultiTableEntry",
    value: function () {
      var _getMultiTableEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(options) {
        var _this5 = this;
        var identifier, newEntry;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              identifier = generateEntryCacheId(options);
              if (!this.multiTableEntries[identifier]) {
                _context10.next = 3;
                break;
              }
              return _context10.abrupt("return", this.multiTableEntries[identifier]);
            case 3:
              newEntry = new catalog_MultiTableEntry__WEBPACK_IMPORTED_MODULE_5__["default"]({
                identifier: identifier,
                dataCatalog: this,
                paths: options.paths
              });
              this.multiTableEntries[identifier] = new Promise( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve) {
                  var storeEntry;
                  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                      case 0:
                        if (_cacheEnabled) {
                          _context9.next = 3;
                          break;
                        }
                        resolve(newEntry);
                        return _context9.abrupt("return");
                      case 3:
                        _context9.prev = 3;
                        _context9.next = 6;
                        return _this5.multiTableStore.getItem(identifier);
                      case 6:
                        storeEntry = _context9.sent;
                        if (storeEntry) {
                          mergeMultiTableEntry(newEntry, storeEntry);
                        }
                        _context9.next = 13;
                        break;
                      case 10:
                        _context9.prev = 10;
                        _context9.t0 = _context9["catch"](3);
                        console.warn(_context9.t0);
                      case 13:
                        resolve(newEntry);
                      case 14:
                      case "end":
                        return _context9.stop();
                    }
                  }, _callee9, null, [[3, 10]]);
                }));
                return function (_x15) {
                  return _ref5.apply(this, arguments);
                };
              }());
              return _context10.abrupt("return", this.multiTableEntries[identifier]);
            case 6:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function getMultiTableEntry(_x14) {
        return _getMultiTableEntry.apply(this, arguments);
      }
      return getMultiTableEntry;
    }()
    /**
     * Updates the cache for the given multi table entry
     */
  }, {
    key: "persistMultiTableEntry",
    value: (function () {
      var _persistMultiTableEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(multiTableEntry) {
        var confTtl;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              confTtl = window.CACHEABLE_TTL || {};
              if (!(!_cacheEnabled || confTtl["default"] && confTtl["default"] <= 0 || confTtl.sqlAnalyzer && confTtl.sqlAnalyzer <= 0 || multiTableEntry.getConnector().optimizer === _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.local)) {
                _context11.next = 3;
                break;
              }
              return _context11.abrupt("return");
            case 3:
              _context11.next = 5;
              return this.multiTableStore.setItem(multiTableEntry.identifier, {
                version: DATA_CATALOG_VERSION,
                topAggs: multiTableEntry.topAggs,
                topColumns: multiTableEntry.topColumns,
                topFilters: multiTableEntry.topFilters,
                topJoins: multiTableEntry.topJoins
              });
            case 5:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function persistMultiTableEntry(_x16) {
        return _persistMultiTableEntry.apply(this, arguments);
      }
      return persistMultiTableEntry;
    }())
  }], [{
    key: "disableCache",
    value: function disableCache() {
      _cacheEnabled = false;
    }

    /**
     * Enables the cache for subsequent operations, mainly used for test purposes
     */
  }, {
    key: "enableCache",
    value: function enableCache() {
      _cacheEnabled = true;
    }
  }, {
    key: "cacheEnabled",
    value: function cacheEnabled() {
      return _cacheEnabled;
    }
  }]);
}();
var generalDataCatalog = new catalog_GeneralDataCatalog__WEBPACK_IMPORTED_MODULE_4__["default"]();
var sourceBoundCatalogs = {};

/**
 * Helper function to get the DataCatalog instance for a given data source.
 */
var getCatalog = function getCatalog(connector) {
  if (!connector || !connector.id) {
    throw new Error('getCatalog called without connector with id');
  }
  return sourceBoundCatalogs[connector.id] || (sourceBoundCatalogs[connector.id] = new DataCatalog(connector));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * Adds a detached (temporary) entry to the data catalog. This would allow autocomplete etc. of tables that haven't
   * been created yet.
   *
   * Calling this returns a handle that allows deletion of any created entries by calling delete() on the handle.
   */
  addTemporaryTable: function addTemporaryTable(options) {
    return getCatalog(options.connector).addTemporaryTable(options);
  },
  getEntry: function getEntry(options) {
    return getCatalog(options.connector).getEntry(options);
  },
  getMultiTableEntry: function getMultiTableEntry(options) {
    return getCatalog(options.connector).getMultiTableEntry(options);
  },
  /**
   * This can be used as a shorthand function to get the child entries of the given path. Same as first calling
   * getEntry then getChildren.
   */
  getChildren: function getChildren(options) {
    return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject, onCancel) {
        var entry, childPromise;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              _context12.next = 3;
              return getCatalog(options.connector).getEntry(options);
            case 3:
              entry = _context12.sent;
              childPromise = entry.getChildren(options);
              onCancel(function () {
                childPromise.cancel();
              });
              resolve((0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__.applyCancellable)(childPromise, options));
              _context12.next = 12;
              break;
            case 9:
              _context12.prev = 9;
              _context12.t0 = _context12["catch"](0);
              reject(_context12.t0);
            case 12:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[0, 9]]);
      }));
      return function (_x17, _x18, _x19) {
        return _ref6.apply(this, arguments);
      };
    }());
  },
  getCatalog: getCatalog,
  getAllNavigatorTags: generalDataCatalog.getAllNavigatorTags.bind(generalDataCatalog),
  updateAllNavigatorTags: generalDataCatalog.updateAllNavigatorTags.bind(generalDataCatalog),
  enableCache: function enableCache() {
    _cacheEnabled = true;
  },
  disableCache: function disableCache() {
    _cacheEnabled = false;
  }
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/events.ts":
/*!*******************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/events.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTEXT_CATALOG_REFRESHED_TOPIC": () => (/* binding */ CONTEXT_CATALOG_REFRESHED_TOPIC),
/* harmony export */   "NAMESPACES_REFRESHED_TOPIC": () => (/* binding */ NAMESPACES_REFRESHED_TOPIC),
/* harmony export */   "REFRESH_CONTEXT_CATALOG_TOPIC": () => (/* binding */ REFRESH_CONTEXT_CATALOG_TOPIC)
/* harmony export */ });
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

var REFRESH_CONTEXT_CATALOG_TOPIC = 'context.catalog.refresh';
var CONTEXT_CATALOG_REFRESHED_TOPIC = 'context.catalog.refreshed';
var NAMESPACES_REFRESHED_TOPIC = 'context.catalog.namespaces.refreshed';

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-8dc1dc79-bundle-a2a4f8506cb55bb7.js.map