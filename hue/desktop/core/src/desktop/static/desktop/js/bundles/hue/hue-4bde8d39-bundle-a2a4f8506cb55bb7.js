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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-4bde8d39"],{

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/commons/api-utils/api.ts":
/*!******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/commons/api-utils/api.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiError": () => (/* binding */ ApiError)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * Licensed to Cloudera, Inc. under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  Cloudera, Inc. licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ApiError = /*#__PURE__*/function (_Error) {
  function ApiError(message) {
    var _this;
    _classCallCheck(this, ApiError);
    var firstLine = message;
    var details = undefined;
    var firstLineEnd = message.indexOf('\n');
    if (firstLineEnd != -1) {
      firstLine = message.substring(0, firstLineEnd);
      details = message.substring(firstLineEnd + 1);
    }
    _this = _callSuper(this, ApiError, [firstLine]);
    _this.details = void 0;
    _this.details = details;
    return _this;
  }
  _inherits(ApiError, _Error);
  return _createClass(ApiError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/webcomp.ts":
/*!*****************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/webcomp.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HIVE_QUERY_PLAN_COMPONENT": () => (/* binding */ HIVE_QUERY_PLAN_COMPONENT)
/* harmony export */ });
/* harmony import */ var vue_webComponentWrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/webComponentWrap */ "./desktop/core/src/desktop/js/vue/webComponentWrap.ts");
/* harmony import */ var _HiveQueryPlan_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HiveQueryPlan.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue");
/**
 * Licensed to Cloudera, Inc. under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  Cloudera, Inc. licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var HIVE_QUERY_PLAN_COMPONENT = 'hive-query-plan';
(0,vue_webComponentWrap__WEBPACK_IMPORTED_MODULE_0__.wrap)(HIVE_QUERY_PLAN_COMPONENT, _HiveQueryPlan_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/api/query.ts":
/*!*******************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/api/query.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadQuery": () => (/* binding */ loadQuery),
/* harmony export */   "searchQueries": () => (/* binding */ searchQueries)
/* harmony export */ });
/* harmony import */ var api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/utils */ "./desktop/core/src/desktop/js/api/utils.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * Licensed to Cloudera, Inc. under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  Cloudera, Inc. licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var QUERIES_URL = '/jobbrowser/query-store/api/impala/queries';
var searchQueries = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(QUERIES_URL, data, {
            qsEncodeData: false
          });
        case 2:
          response = _context.sent;
          return _context.abrupt("return", response);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function searchQueries(_x) {
    return _ref.apply(this, arguments);
  };
}();
var loadQuery = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(queryId) {
    var url, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          url = "".concat(QUERIES_URL, "/").concat(encodeURIComponent(queryId));
          _context2.next = 3;
          return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.get)(url);
        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", _objectSpread(_objectSpread({}, response.query), {}, {
            profile: response.profile
          }));
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function loadQuery(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CounterSet.ts":
/*!*************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CounterSet.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateValueColumnKey": () => (/* binding */ generateValueColumnKey)
/* harmony export */ });
/**
 * Licensed to Cloudera, Inc. under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  Cloudera, Inc. licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var generateValueColumnKey = function generateValueColumnKey(index) {
  return "counterSet_".concat(index);
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/webcomp.ts":
/*!*****************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/webcomp.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENT_NAME": () => (/* binding */ COMPONENT_NAME)
/* harmony export */ });
/* harmony import */ var vue_webComponentWrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/webComponentWrap */ "./desktop/core/src/desktop/js/vue/webComponentWrap.ts");
/* harmony import */ var _ImpalaQueries_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImpalaQueries.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue");
/**
 * Licensed to Cloudera, Inc. under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  Cloudera, Inc. licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var COMPONENT_NAME = 'impala-queries';
(0,vue_webComponentWrap__WEBPACK_IMPORTED_MODULE_0__.wrap)(COMPONENT_NAME, _ImpalaQueries_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/webcomp.ts":
/*!***************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/webcomp.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENT_NAME": () => (/* binding */ COMPONENT_NAME)
/* harmony export */ });
/* harmony import */ var vue_webComponentWrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/webComponentWrap */ "./desktop/core/src/desktop/js/vue/webComponentWrap.ts");
/* harmony import */ var _QueriesList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueriesList.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue");
/**
 * Licensed to Cloudera, Inc. under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  Cloudera, Inc. licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var COMPONENT_NAME = 'queries-list';
(0,vue_webComponentWrap__WEBPACK_IMPORTED_MODULE_0__.wrap)(COMPONENT_NAME, _QueriesList_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/eventListeners.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/eventListeners.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
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




jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('shown', '.jb-logs-link');
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('shown', '.jb-logs-link', function (e) {
  var dest = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('href');
  if (dest.indexOf('logs') > -1 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(dest).find('pre:visible').length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(dest).find('pre').css('overflow-y', 'auto').height(Math.max(200, jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - jquery__WEBPACK_IMPORTED_MODULE_0___default()(dest).find('pre').offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content').scrollTop() - 75));
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('showSubmitPopup');
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('showSubmitPopup', function (event, data) {
  var syncWorkflowModal = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#syncWorkflowModal');
  syncWorkflowModal.empty();
  syncWorkflowModal.html(data);
  syncWorkflowModal.modal('show');
  syncWorkflowModal.on('hidden', function () {
    _utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('hide.datepicker');
  });
  syncWorkflowModal.find('.submit-form').on('submit', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      type: 'POST',
      cache: false,
      url: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('action'),
      data: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).serialize(),
      success: function success(data) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#syncWorkflowModal').modal('hide');
        if (data && data.status === 0) {
          _utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_INFO_TOPIC, data);
        } else {
          _utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_ERROR_TOPIC, data);
        }
      },
      error: function error(data) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#syncWorkflowModal').modal('hide');
        _utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_ERROR_TOPIC, data);
      }
    });
  });
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/knockout/Job.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/knockout/Job.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Job)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout.mapping */ "./node_modules/knockout.mapping/knockout.mapping.js");
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout_mapping__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var utils_string_deleteAllEmptyStringKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/string/deleteAllEmptyStringKeys */ "./desktop/core/src/desktop/js/utils/string/deleteAllEmptyStringKeys.ts");
/* harmony import */ var utils_url_changeURL__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/url/changeURL */ "./desktop/core/src/desktop/js/utils/url/changeURL.ts");
/* harmony import */ var _Jobs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Jobs */ "./desktop/core/src/desktop/js/apps/jobBrowser/knockout/Jobs.js");
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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











var Job = /*#__PURE__*/function () {
  function Job(vm, job) {
    var _this = this;
    _classCallCheck(this, Job);
    this.vm = vm;
    this.suffix = this.vm.isMini() ? '-mini' : '';
    this.paginationPage = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(1);
    this.paginationOffset = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(1); // Starting index
    this.paginationResultPage = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(50);
    this.totalApps = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.properties && job.properties.total_actions || 0);
    this.hasPagination = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return _this.totalApps() && ['workflows', 'schedules', 'bundles'].indexOf(_this.vm["interface"]()) !== -1;
    });
    this.pagination = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return {
        page: _this.paginationPage(),
        offset: _this.paginationOffset(),
        limit: _this.paginationResultPage()
      };
    });
    this.pagination.subscribe(function () {
      if (_this.vm["interface"]() === 'schedules') {
        _this.updateJob(false, true);
      }
    });
    this.showPreviousPage = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return _this.paginationOffset() > 1;
    });
    this.showNextPage = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return _this.totalApps() != null && _this.paginationOffset() + _this.paginationResultPage() < _this.totalApps();
    });
    this.id = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.id || null);
    if (!this.vm.isMini()) {
      this.id.subscribe(function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('graph.stop.refresh.view');
      });
    }
    this.doc_url = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.doc_url || null);
    this.doc_url_modified = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      var url = _this.doc_url();
      if (window.KNOX_BASE_URL.length && window.URL && url) {
        // KNOX
        try {
          var parsedDocUrl = new URL(url);
          var parsedKnoxUrl = new URL(window.KNOX_BASE_URL);
          parsedDocUrl.hostname = parsedKnoxUrl.hostname;
          parsedDocUrl.protocol = parsedKnoxUrl.protocol;
          parsedDocUrl.port = parsedKnoxUrl.port;
          var service = url.indexOf('livy') >= 0 ? '/livy' : '/impalaui';
          parsedDocUrl.pathname = parsedKnoxUrl.pathname + service + parsedDocUrl.pathname;
          return parsedDocUrl.toString();
        } catch (e) {
          return url;
        }
      } else if (window.KNOX_BASE_PATH.length && window.URL) {
        // DWX
        var _parsedKnoxUrl = new URL(window.KNOX_BASE_URL);
        var _parsedDocUrl = new URL(url);
        var _service = url.indexOf('livy') >= 0 ? '/livy' : '/impalaui';
        _parsedDocUrl.pathname = _parsedKnoxUrl.pathname + _service + window.KNOX_BASE_PATH;
      } else {
        return url;
      }
    });
    this.name = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.name || job.id || null);
    this.type = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.type || null);
    this.applicationType = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.applicationType || '');
    this.status = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.status || null);
    this.apiStatus = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.apiStatus || null);
    this.progress = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.progress || null);
    this.isRunning = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return ['RUNNING', 'PAUSED'].indexOf(_this.apiStatus()) !== -1 || job.isRunning;
    });
    this.isRunning.subscribe(function () {
      // The JB page for jobs is split in two tables, "Running" and "Completed", this esentially unchecks any job
      // that moves from one table to the other.
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayRemoveItem(_this.vm.jobs.selectedJobs(), _this);
    });
    this.user = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.user || null);
    this.queue = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.queue || null);
    this.cluster = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.cluster || null);
    this.duration = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.duration || null);
    this.submitted = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.submitted || null);
    this.canWrite = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(!!job.canWrite || null);
    this.logActive = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('default');
    this.logsByName = knockout__WEBPACK_IMPORTED_MODULE_1__.observable({});
    this.logsListDefaults = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(['default', 'stdout', 'stderr', 'syslog']);
    this.logsList = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(this.logsListDefaults());
    this.logs = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.logsByName()[_this.logActive()];
    });
    this.properties = knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(job.properties && Object.keys(job.properties).reduce(function (p, key) {
      p[key] = '';
      return p;
    }, {}) || {
      properties: ''
    });
    Object.keys(job.properties || []).reduce(function (p, key) {
      p[key](job.properties[key]);
      return p;
    }, this.properties);
    this.mainType = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(this.vm["interface"]());
    this.lastEvent = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.lastEvent || '');
    this.syncCoorEndTimeDateUI = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(null);
    this.syncCoorEndTimeTimeUI = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(null);
    this.syncCoorPauseTimeDateUI = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(null);
    this.syncCoorPauseTimeTimeUI = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(null);
    this.syncCoorConcurrency = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(null);
    this.coordinatorActions = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      if (_this.mainType().indexOf('schedule') !== -1 && _this.properties['tasks']) {
        var apps = _this.properties['tasks']().map(function (instance) {
          var job = new CoordinatorAction(_this.vm, knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJS(instance), _this);
          job.properties = knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(instance);
          return job;
        });
        var instances = new _Jobs__WEBPACK_IMPORTED_MODULE_9__["default"](_this.vm);
        instances.apps(apps);
        instances.isCoordinator(true);
        return instances;
      }
    });
    this.textFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('').extend({
      rateLimit: {
        method: 'notifyWhenChangesStop',
        timeout: 1000
      }
    });
    this.statesValuesFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS({
      value: 'completed',
      name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Succeeded'),
      checked: false,
      klass: 'green'
    }), knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS({
      value: 'running',
      name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Running'),
      checked: false,
      klass: 'orange'
    }), knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS({
      value: 'failed',
      name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Failed'),
      checked: false,
      klass: 'red'
    })]);
    this.statesFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      var checkedStates = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayFilter(_this.statesValuesFilter(), function (state) {
        return state.checked();
      });
      return knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayMap(checkedStates, function (state) {
        return state.value();
      });
    });
    this.typesValuesFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS({
      value: 'map',
      name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Map'),
      checked: false,
      klass: 'green'
    }), knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS({
      value: 'reduce',
      name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Reduce'),
      checked: false,
      klass: 'orange'
    })]);
    this.typesFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      var checkedTypes = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayFilter(_this.typesValuesFilter(), function (type) {
        return type.checked();
      });
      return knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayMap(checkedTypes, function (type) {
        return type.value();
      });
    });
    this.filters = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return [{
        text: _this.textFilter()
      }, {
        states: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJS(_this.statesFilter())
      }, {
        types: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJS(_this.typesFilter())
      }];
    });
    this.forceUpdatingJob = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.filters.subscribe(function () {
      if (_this.type() === 'schedule') {
        _this.updateJob(false, true);
      } else {
        _this.fetchProfile('tasks');
      }
    });
    this.metadataFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
    this.metadataFilter.subscribe(function (newValue) {
      var tableRow = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jobbrowserJobMetadataTable tbody tr');
      tableRow.removeClass('hide');
      tableRow.each(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().toLowerCase().indexOf(newValue.toLowerCase()) === -1) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('hide');
        }
      });
    });
    this.propertiesFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
    this.propertiesFilter.subscribe(function (newValue) {
      var tableRow = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jobbrowserJobPropertiesTable tbody tr');
      tableRow.removeClass('hide');
      tableRow.each(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().toLowerCase().indexOf(newValue.toLowerCase()) === -1) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('hide');
        }
      });
    });
    this.rerunModalContent = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
    this.hasKill = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.type() && (['MAPREDUCE', 'SPARK', 'workflow', 'schedule', 'bundle', 'QUERY', 'TEZ', 'YarnV2', 'DDL', 'schedule-hive', 'celery-beat', 'history'].indexOf(_this.type()) !== -1 || _this.type().indexOf('Data Warehouse') !== -1 || _this.type().indexOf('Altus') !== -1);
    });
    this.killEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      // Impala can kill queries that are finished, but not yet terminated
      return _this.hasKill() && _this.canWrite() && _this.isRunning();
    });
    this.hasResume = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return ['workflow', 'schedule', 'bundle', 'schedule-hive', 'celery-beat', 'history'].indexOf(_this.type()) !== -1;
    });
    this.resumeEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.hasResume() && _this.canWrite() && _this.apiStatus() === 'PAUSED';
    });
    this.hasRerun = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return ['workflow', 'schedule-task'].indexOf(_this.type()) !== -1;
    });
    this.rerunEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.hasRerun() && _this.canWrite() && !_this.isRunning();
    });
    this.hasPause = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return ['workflow', 'schedule', 'bundle', 'celery-beat', 'schedule-hive', 'history'].indexOf(_this.type()) !== -1;
    });
    this.pauseEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.hasPause() && _this.canWrite() && _this.apiStatus() === 'RUNNING';
    });
    this.hasIgnore = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return ['schedule-task'].indexOf(_this.type()) !== -1;
    });
    this.ignoreEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.hasIgnore() && _this.canWrite() && !_this.isRunning();
    });
    this.loadingJob = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.lastFetchJobRequest = null;
    this.lastUpdateJobRequest = null;
    this.lastFetchLogsRequest = null;
    this.lastFetchProfileRequest = null;
    this.lastFetchStatusRequest = null;
    this.updateClusterWorkers = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(1);
    this.updateClusterAutoResize = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.updateClusterAutoResizeMin = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(1);
    this.updateClusterAutoResizeMax = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(3);
    this.updateClusterAutoResizeCpu = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(80);
    this.updateClusterAutoPause = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.clusterConfigModified = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.updateClusterWorkers() > 0 && _this.updateClusterWorkers() !== _this.properties['properties']['workerReplicas']() || _this.updateClusterAutoResize() !== _this.properties['properties']['workerAutoResize']();
    });
    this.workflowGraphLoaded = false;
    this.lastArrowsPosition = {
      top: 0,
      left: 0
    };
    this.initialArrowsDrawingCount = 0;
  }
  return _createClass(Job, [{
    key: "previousPage",
    value: function previousPage() {
      this.paginationOffset(this.paginationOffset() - this.paginationResultPage());
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      this.paginationOffset(this.paginationOffset() + this.paginationResultPage());
    }
  }, {
    key: "showSyncCoorModal",
    value: function showSyncCoorModal() {
      this.syncCoorEndTimeDateUI(this.properties['endTimeDateUI']());
      this.syncCoorEndTimeTimeUI(this.properties['endTimeTimeUI']());
      this.syncCoorPauseTimeDateUI(this.properties['pauseTimeDateUI']());
      this.syncCoorPauseTimeTimeUI(this.properties['pauseTimeTimeUI']());
      this.syncCoorConcurrency(this.properties['concurrency']());
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#syncCoordinatorModal".concat(this.suffix)).modal('show');
    }
  }, {
    key: "_fetchJob",
    value: function _fetchJob(callback) {
      if (this.vm["interface"]() === 'engines') {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('context.selector.set.cluster', 'AltusV2');
        return;
      }
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/jobbrowser/api/job/' + this.vm["interface"](), {
        cluster: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm.compute),
        app_id: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.id),
        "interface": knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm["interface"]),
        pagination: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.pagination),
        filters: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.filters)
      }, function (data) {
        if (data.status === 0) {
          if (data.app) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('jobbrowser.data', [data.app]);
          }
          if (callback) {
            callback(data);
          }
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      });
    }
  }, {
    key: "_rewriteKnoxUrls",
    value: function _rewriteKnoxUrls(data) {
      var _data$app, _data$app2, _data$app2$properties;
      if ((data === null || data === void 0 ? void 0 : (_data$app = data.app) === null || _data$app === void 0 ? void 0 : _data$app.type) === 'SPARK' && data !== null && data !== void 0 && (_data$app2 = data.app) !== null && _data$app2 !== void 0 && (_data$app2$properties = _data$app2.properties) !== null && _data$app2$properties !== void 0 && _data$app2$properties.metadata) {
        data.app.properties.metadata.forEach(function (item) {
          if (item.name === 'trackingUrl') {
            /*
              Rewrite tracking url
              Sample trackingUrl: http://<yarn>:8088/proxy/application_1652826179847_0003/
              Knox URL: https://<knox-base>/yarnuiv2/redirect#/yarn-app/application_1652826179847_0003/attempts
            */
            var matches = item.value.match('(application_[0-9_]+)');
            if (matches && matches.length > 1) {
              var applicationId = matches[1];
              item.value = window.KNOX_BASE_URL + '/yarnuiv2/redirect#/yarn-app/' + applicationId + '/attempts';
            }
          }
        });
      }
    }
  }, {
    key: "onTableRowClick",
    value: function onTableRowClick(event, id) {
      var openInNewTab = event && (event.which === 2 || event.metaKey || event.ctrlKey);
      var idToOpen = id || this.id();
      if (idToOpen && idToOpen !== '-') {
        if (openInNewTab) {
          var urlParts = window.location.toString().split('#');
          var newUrl = urlParts[0] + '#!id=' + idToOpen;
          window.open(newUrl, '_blank');
        } else {
          this.id(idToOpen);
          this.fetchJob();
        }
      }
    }
  }, {
    key: "fetchJob",
    value: function fetchJob() {
      var _this2 = this;
      // TODO: Remove cancelActiveRequest from apiHelper when in webpack
      _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].cancelActiveRequest(this.lastFetchJobRequest);
      _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].cancelActiveRequest(this.lastUpdateJobRequest);
      this.loadingJob(true);
      var jobInterface = this.vm["interface"]();
      if (/application_/.test(this.id()) || /job_/.test(this.id()) || /attempt_/.test(this.id())) {
        jobInterface = 'jobs';
      }
      if (/oozie-\w+-W/.test(this.id())) {
        jobInterface = 'workflows';
      } else if (/oozie-\w+-C/.test(this.id())) {
        jobInterface = 'schedules';
      } else if (/oozie-\w+-B/.test(this.id())) {
        jobInterface = 'bundles';
      } else if (/celery-beat-\w+/.test(this.id())) {
        jobInterface = 'celery-beat';
      } else if (/schedule-hive-\w+/.test(this.id())) {
        jobInterface = 'schedule-hive';
      } else if (/altus:dataeng/.test(this.id()) && /:job:/.test(this.id())) {
        jobInterface = 'dataeng-jobs';
      } else if (/altus:dataeng/.test(this.id()) && /:cluster:/.test(this.id())) {
        jobInterface = 'dataeng-clusters';
      } else if (/altus:dataware:k8/.test(this.id()) && /:cluster:/.test(this.id())) {
        jobInterface = 'dataware2-clusters';
      } else if (/altus:dataware/.test(this.id()) && /:cluster:/.test(this.id())) {
        jobInterface = 'dataware-clusters';
      } else if (/[a-z0-9]{16}:[a-z0-9]{16}/.test(this.id())) {
        jobInterface = 'queries-impala';
      } else if (/hive_[a-z0-9]*_[a-z0-9]*/.test(this.id())) {
        jobInterface = 'queries-hive';
      } else if (/livy-[0-9]+/.test(this.id())) {
        jobInterface = 'livy-sessions';
      }
      jobInterface = jobInterface.indexOf('dataeng') || jobInterface.indexOf('dataware') ? jobInterface : this.vm.isValidInterface(jobInterface); // TODO: support multi cluster selection in isValidInterface
      this.vm["interface"](jobInterface);
      this.lastFetchJobRequest = this._fetchJob(function (data) {
        if (data.status === 0) {
          if (window.KNOX_BASE_URL && window.KNOX_BASE_URL.length) {
            _this2._rewriteKnoxUrls(data);
          }
          _this2.vm["interface"](jobInterface);
          _this2.vm.job(new Job(_this2.vm, data.app));
          if (window.location.hash !== '#!id=' + _this2.vm.job().id()) {
            (0,utils_url_changeURL__WEBPACK_IMPORTED_MODULE_8__["default"])('#!id=' + _this2.vm.job().id());
          }
          var crumbs = [];
          if (/^appattempt_/.test(_this2.vm.job().id())) {
            crumbs.push({
              id: _this2.vm.job().properties['app_id'],
              name: _this2.vm.job().properties['app_id'],
              type: 'app'
            });
          }
          if (/^attempt_/.test(_this2.vm.job().id())) {
            crumbs.push({
              id: _this2.vm.job().properties['app_id'],
              name: _this2.vm.job().properties['app_id'],
              type: 'app'
            });
            crumbs.push({
              id: _this2.vm.job().properties['task_id'],
              name: _this2.vm.job().properties['task_id'],
              type: 'task'
            });
          }
          if (/^task_/.test(_this2.vm.job().id())) {
            crumbs.push({
              id: _this2.vm.job().properties['app_id'],
              name: _this2.vm.job().properties['app_id'],
              type: 'app'
            });
          }
          if (/_executor_/.test(_this2.vm.job().id())) {
            crumbs.push({
              id: _this2.vm.job().properties['app_id'],
              name: _this2.vm.job().properties['app_id'],
              type: 'app'
            });
          }
          var oozieWorkflow = _this2.vm.job().name().match(/oozie:launcher:T=.+?:W=.+?:A=.+?:ID=(.+?-oozie-\w+-W)$/i);
          if (oozieWorkflow) {
            crumbs.push({
              id: oozieWorkflow[1],
              name: oozieWorkflow[1],
              type: 'workflow'
            });
          }
          if (/-oozie-\w+-W@/.test(_this2.vm.job().id())) {
            crumbs.push({
              id: _this2.vm.job().properties['workflow_id'],
              name: _this2.vm.job().properties['workflow_id'],
              type: 'workflow'
            });
          } else if (/-oozie-\w+-W/.test(_this2.vm.job().id())) {
            if (_this2.vm.job().properties['bundle_id']()) {
              crumbs.push({
                id: _this2.vm.job().properties['bundle_id'](),
                name: _this2.vm.job().properties['bundle_id'](),
                type: 'bundle'
              });
            }
            if (_this2.vm.job().properties['coordinator_id']()) {
              crumbs.push({
                id: _this2.vm.job().properties['coordinator_id'](),
                name: _this2.vm.job().properties['coordinator_id'](),
                type: 'schedule'
              });
            }
          } else if (/-oozie-\w+-C/.test(_this2.vm.job().id())) {
            if (_this2.vm.job().properties['bundle_id']()) {
              crumbs.push({
                id: _this2.vm.job().properties['bundle_id'](),
                name: _this2.vm.job().properties['bundle_id'](),
                type: 'bundle'
              });
            }
          }
          if (_this2.vm.job().type() === 'SPARK_EXECUTOR') {
            crumbs.push({
              id: _this2.vm.job().id(),
              name: _this2.vm.job().properties['executor_id'](),
              type: _this2.vm.job().type()
            });
          } else {
            crumbs.push({
              id: _this2.vm.job().id(),
              name: _this2.vm.job().name(),
              type: _this2.vm.job().type()
            });
          }
          _this2.vm.resetBreadcrumbs(crumbs);
          // Show is still bound to old job, setTimeout allows knockout model change event done at begining of this method to sends it's notification
          setTimeout(function () {
            if (_this2.vm.job().mainType() === 'queries-impala' && !jquery__WEBPACK_IMPORTED_MODULE_0___default()("#queries-page-plan".concat(_this2.suffix)).parent().children().hasClass('active')) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()("a[href=\"#queries-page-plan".concat(_this2.suffix, "\"]")).tab('show');
            }
          }, 0);
          if (!_this2.vm.isMini() && _this2.vm.job().type() === 'workflow' && !_this2.vm.job().workflowGraphLoaded) {
            _this2.vm.job().updateWorkflowGraph();
          }
          if (_this2.vm.isMini()) {
            if (_this2.vm.job().type() === 'workflow') {
              _this2.vm.job().fetchProfile('properties');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()("a[href=\"#workflow-page-metadata".concat(_this2.suffix, "\"]")).tab('show');
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#rerun-modal".concat(_this2.suffix)).on('shown', function () {
              // Replaces dark modal backdrop from the end of the body tag to the closer scope
              // in order to activate z-index effect.
              var rerunModalData = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this2).data('modal');
              rerunModalData.$backdrop.appendTo('#jobbrowserMiniComponents');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#killModal".concat(_this2.suffix)).on('shown', function () {
              var killModalData = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this2).data('modal');
              killModalData.$backdrop.appendTo('#jobbrowserMiniComponents');
            });
          }
          _this2.vm.job().fetchLogs();
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      }).always(function () {
        _this2.loadingJob(false);
      });
    }
  }, {
    key: "updateJob",
    value: function updateJob(updateLogs, forceUpdate) {
      var _this3 = this;
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('graph.refresh.view');
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      if (this.vm.job() === this && (this.apiStatus() === 'RUNNING' || forceUpdate)) {
        _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].cancelActiveRequest(this.lastUpdateJobRequest);
        if (forceUpdate) {
          this.forceUpdatingJob(true);
        }
        this.lastUpdateJobRequest = this._fetchJob(function (data) {
          var requests = [];
          if (['schedule', 'workflow'].indexOf(_this3.vm.job().type()) >= 0) {
            (0,utils_string_deleteAllEmptyStringKeys__WEBPACK_IMPORTED_MODULE_7__["default"])(data.app); // It's preferable for our backend to return empty strings for various values in order to initialize them, but they shouldn't overwrite any values that are currently set.
            var selectedIDs = [];
            if (_this3.vm.job().coordinatorActions()) {
              selectedIDs = _this3.vm.job().coordinatorActions().selectedJobs().map(function (coordinatorAction) {
                return coordinatorAction.id();
              });
            }
            _this3.vm.job = knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(data.app, {}, _this3.vm.job);
            if (selectedIDs.length > 0) {
              _this3.vm.job().coordinatorActions().selectedJobs(_this3.vm.job().coordinatorActions().apps().filter(function (coordinatorAction) {
                return selectedIDs.indexOf(coordinatorAction.id()) !== -1;
              }));
            }
            if (_this3.vm.job().type() === 'schedule') {
              _this3.totalApps(data.app.properties.total_actions);
            }
          } else {
            requests.push(_this3.vm.job().fetchStatus());
          }
          if (updateLogs !== false) {
            requests.push(_this3.vm.job().fetchLogs(_this3.vm.job().logActive()));
          }
          var profile = jquery__WEBPACK_IMPORTED_MODULE_0___default()('div[data-jobType] .tab-content .active').data('profile');
          if (profile) {
            requests.push(_this3.vm.job().fetchProfile(profile));
          }
          jquery__WEBPACK_IMPORTED_MODULE_0___default().when.apply(_this3, requests).done(function () {
            deferred.resolve();
          });
        }).always(function () {
          _this3.forceUpdatingJob(false);
        });
      }
      return deferred;
    }
  }, {
    key: "fetchLogs",
    value: function fetchLogs(name) {
      var _this4 = this;
      name = name || 'default';
      _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].cancelActiveRequest(this.lastFetchLogsRequest);
      this.lastFetchLogsRequest = jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/jobbrowser/api/job/logs?is_embeddable=false', {
        cluster: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm.compute),
        app_id: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.id),
        "interface": knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm["interface"]),
        type: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.type),
        name: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(name)
      }, function (data) {
        if (data.status === 0) {
          var result = _this4.logsByName();
          result[name] = data.logs.logs;
          _this4.logsByName(result);
          if (data.logs.logsList && data.logs.logsList.length) {
            var logsListDefaults = _this4.logsListDefaults();
            _this4.logsList(logsListDefaults.concat(data.logs.logsList.filter(function (log) {
              return logsListDefaults.indexOf(log) < 0;
            })));
          }
          var visibleJbPanel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jb-panel pre:visible');
          if (visibleJbPanel.length > 0) {
            visibleJbPanel.css('overflow-y', 'auto').height(Math.max(200, jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - visibleJbPanel.offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content').scrollTop() - 75));
          }
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      });
      return this.lastFetchLogsRequest;
    }
  }, {
    key: "submitQueryProfileDownloadForm",
    value: function submitQueryProfileDownloadForm(name) {
      var $downloadForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<form method="POST" class="download-form" style="display: inline" action="' + window.HUE_BASE_URL + '/jobbrowser/api/job/profile"></form>');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input type="hidden" name="csrfmiddlewaretoken" />').val(window.CSRF_TOKEN).appendTo($downloadForm);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input type="hidden" name="cluster" />').val(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm.cluster)).appendTo($downloadForm);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input type="hidden" name="app_id" />').val(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.id)).appendTo($downloadForm);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input type="hidden" name="interface" />').val(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm["interface"])).appendTo($downloadForm);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input type="hidden" name="app_type" />').val(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.type)).appendTo($downloadForm);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input type="hidden" name="app_property" />').val(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(name)).appendTo($downloadForm);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input type="hidden" name="app_filters" />').val(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.filters)).appendTo($downloadForm);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#downloadProgressModal').append($downloadForm);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('ignore.next.unload');
      $downloadForm.submit();
    }
  }, {
    key: "fetchProfile",
    value: function fetchProfile(name, callback) {
      var _this5 = this;
      _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].cancelActiveRequest(this.lastFetchProfileRequest);
      this.lastFetchProfileRequest = jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/jobbrowser/api/job/profile', {
        cluster: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm.compute),
        app_id: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.id),
        "interface": knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm["interface"]),
        app_type: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.type),
        app_property: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(name),
        app_filters: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.filters)
      }, function (data) {
        if (data.status === 0) {
          _this5.properties[name](data[name]);
          if (callback) {
            callback(data);
          }
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      });
      return this.lastFetchProfileRequest;
    }
  }, {
    key: "fetchStatus",
    value: function fetchStatus() {
      var _this6 = this;
      _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].cancelActiveRequest(this.lastFetchStatusRequest);
      this.lastFetchStatusRequest = jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/jobbrowser/api/job', {
        cluster: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm.compute),
        app_id: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.id),
        "interface": knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.mainType)
      }, function (data) {
        if (data.status === 0) {
          _this6.status(data.app.status);
          _this6.apiStatus(data.app.apiStatus);
          _this6.progress(data.app.progress);
          _this6.canWrite(data.app.canWrite);
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      });
      return this.lastFetchStatusRequest;
    }
  }, {
    key: "control",
    value: function control(action) {
      var _this7 = this;
      if (action === 'rerun') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().get("/oozie/rerun_oozie_job/".concat(this.id(), "/?format=json").concat(this.vm.isMini() ? '&is_mini=true' : ''), function (response) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#rerun-modal".concat(_this7.suffix)).modal('show');
          _this7.rerunModalContent(response);
        });
      } else if (action === 'sync_coordinator') {
        var $syncCoordinatorModal = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#syncCoordinatorModal');
        var endTimeDateUI = $syncCoordinatorModal.find('#endTimeDateUI').val();
        var endTimeTimeUI = $syncCoordinatorModal.find('#endTimeTimeUI').val();
        var endTime = '';
        if (endTimeDateUI !== '' && endTimeTimeUI !== '') {
          endTime = endTimeDateUI + 'T' + endTimeTimeUI;
        }
        var pauseTimeDateUI = $syncCoordinatorModal.find('#pauseTimeDateUI').val();
        var pauseTimeTimeUI = $syncCoordinatorModal.find('#pauseTimeTimeUI').val();
        var pauseTime = '';
        if (pauseTimeDateUI !== '' && pauseTimeTimeUI !== '') {
          pauseTime = pauseTimeDateUI + 'T' + pauseTimeTimeUI;
        }
        var clear_pause_time = $syncCoordinatorModal.find('#id_clearPauseTime')[0].checked;
        var concurrency = $syncCoordinatorModal.find('#id_concurrency').val();
        jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/oozie/manage_oozie_jobs/' + this.id() + '/change', {
          end_time: endTime,
          pause_time: pauseTime,
          clear_pause_time: clear_pause_time,
          concurrency: concurrency
        }, function (data) {
          if (data.status === 0) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_INFO_TOPIC, {
              message: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Successfully updated Coordinator Job Properties')
            });
          } else {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_ERROR_TOPIC, {
              message: data.message
            });
          }
        }).fail(function (xhr) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_ERROR_TOPIC, {
            message: xhr.responseText
          });
        });
      } else if (action === 'sync_workflow') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().get('/oozie/sync_coord_workflow/' + this.id(), {
          format: 'json'
        }, function (data) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('showSubmitPopup', data);
        }).fail(function (xhr) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_ERROR_TOPIC, {
            message: xhr.responseText
          });
        });
      } else {
        this.vm.jobs._control([this.id()], action, function (data) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_INFO_TOPIC, data);
          _this7.fetchStatus();
        });
      }
    }
  }, {
    key: "updateClusterShow",
    value: function updateClusterShow() {
      this.updateClusterWorkers(this.properties['properties']['workerReplicas']());
      this.updateClusterAutoResize(this.properties['properties']['workerAutoResize']());
      if (this.properties['properties']['workerAutoResize']()) {
        this.updateClusterAutoResizeMin(this.properties['properties']['workerAutoResizeMin']());
        this.updateClusterAutoResizeMax(this.properties['properties']['workerAutoResizeMax']());
        this.updateClusterAutoResizeCpu(this.properties['properties']['workerAutoResizeCpu']());
      }
    }
  }, {
    key: "updateCluster",
    value: function updateCluster() {
      var _this8 = this;
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/metadata/api/analytic_db/update_cluster/', {
        is_k8: this.vm["interface"]().indexOf('dataware2-clusters') !== -1,
        cluster_name: this.id(),
        workers_group_size: this.updateClusterWorkers(),
        auto_resize_changed: this.updateClusterAutoResize() !== this.properties['properties']['workerAutoResize'](),
        auto_resize_enabled: this.updateClusterAutoResize(),
        auto_resize_min: this.updateClusterAutoResizeMin(),
        auto_resize_max: this.updateClusterAutoResizeMax(),
        auto_resize_cpu: this.updateClusterAutoResizeCpu()
      }, function () {
        _this8.updateJob();
      });
    }
  }, {
    key: "troubleshoot",
    value: function troubleshoot() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/metadata/api/workload_analytics/get_operation_execution_details', {
        operation_id: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.id())
      }, function () {});
    }
  }, {
    key: "redrawOnResize",
    value: function redrawOnResize() {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('graph.draw.arrows');
    }
  }, {
    key: "initialArrowsDrawing",
    value: function initialArrowsDrawing() {
      if (this.initialArrowsDrawingCount < 20) {
        this.initialArrowsDrawingCount++;
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('graph.draw.arrows');
        window.setTimeout(this.initialArrowsDrawing, 100);
      } else if (this.initialArrowsDrawingCount < 30) {
        this.initialArrowsDrawingCount++;
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('graph.draw.arrows');
        window.setTimeout(this.initialArrowsDrawing, 500);
      } else {
        this.initialArrowsDrawingCount = 0;
      }
    }
  }, {
    key: "updateWorkflowGraph",
    value: function updateWorkflowGraph() {
      var _this9 = this;
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('graph.stop.refresh.view');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('canvas').remove();
      if (this.vm.job().type() === 'workflow') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#workflow-page-graph".concat(this.suffix)).html('<div class="hue-spinner"><i class="fa fa-spinner fa-spin hue-spinner-center hue-spinner-xlarge"></i></div>');
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          url: '/oozie/list_oozie_workflow/' + this.vm.job().id(),
          data: {
            graph: true,
            element: "workflow-page-graph".concat(this.suffix),
            is_jb2: true
          },
          beforeSend: function beforeSend(xhr) {
            xhr.setRequestHeader('X-Requested-With', 'Hue');
          },
          dataType: 'html',
          success: function success(response) {
            _this9.workflowGraphLoaded = true;
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('hue4.process.headers', {
              response: response,
              callback: function callback(r) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("#workflow-page-graph".concat(_this9.suffix)).html(r);
                _this9.initialArrowsDrawing();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', _this9.redrawOnResize);
              }
            });
          }
        });
      }
    }
  }]);
}();

var CoordinatorAction = /*#__PURE__*/function (_Job) {
  function CoordinatorAction(vm, job, coordinator) {
    var _this10;
    _classCallCheck(this, CoordinatorAction);
    _this10 = _callSuper(this, CoordinatorAction, [vm, job]);
    _this10.coordinator = coordinator;
    _this10.canWrite = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this10.coordinator.canWrite();
    });
    _this10.resumeEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return false;
    });
    return _this10;
  }
  _inherits(CoordinatorAction, _Job);
  return _createClass(CoordinatorAction);
}(Job);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/knockout/JobBrowserViewModel.js":
/*!*************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/knockout/JobBrowserViewModel.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JobBrowserViewModel)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_hueConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/hueConfig */ "./desktop/core/src/desktop/js/config/hueConfig.ts");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
/* harmony import */ var utils_url_changeURL__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/url/changeURL */ "./desktop/core/src/desktop/js/utils/url/changeURL.ts");
/* harmony import */ var _Job__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Job */ "./desktop/core/src/desktop/js/apps/jobBrowser/knockout/Job.js");
/* harmony import */ var _Jobs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Jobs */ "./desktop/core/src/desktop/js/apps/jobBrowser/knockout/Jobs.js");
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











var JobBrowserViewModel = /*#__PURE__*/function () {
  function JobBrowserViewModel(isMiniJobBrowser) {
    var _this = this;
    _classCallCheck(this, JobBrowserViewModel);
    this.assistAvailable = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(true);
    this.isLeftPanelVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_6__.withLocalStorage)('assist.assist_panel_visible', this.isLeftPanelVisible, true);
    this.isLeftPanelVisible.subscribe(function () {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('assist.forceRender');
    });
    this.appConfig = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.clusterType = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.isMini = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(isMiniJobBrowser);
    this.cluster = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.compute = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.compute.subscribe(function () {
      if (_this["interface"]()) {
        _this.jobs.fetchJobs();
      }
    });
    this.availableInterfaces = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      var isDialectEnabled = function isDialectEnabled(dialect) {
        var _this$appConfig, _this$appConfig$edito, _this$appConfig$edito2;
        return ((_this$appConfig = _this.appConfig()) === null || _this$appConfig === void 0 ? void 0 : (_this$appConfig$edito = _this$appConfig.editor) === null || _this$appConfig$edito === void 0 ? void 0 : (_this$appConfig$edito2 = _this$appConfig$edito.interpreter_names) === null || _this$appConfig$edito2 === void 0 ? void 0 : _this$appConfig$edito2.indexOf(dialect)) >= 0;
      };
      var historyInterfaceCondition = function historyInterfaceCondition() {
        return window.ENABLE_HISTORY_V2;
      };
      var jobsInterfaceCondition = function jobsInterfaceCondition() {
        var _this$appConfig2, _this$appConfig2$brow;
        return !(0,config_hueConfig__WEBPACK_IMPORTED_MODULE_2__.getLastKnownConfig)().has_computes && ((_this$appConfig2 = _this.appConfig()) === null || _this$appConfig2 === void 0 ? void 0 : (_this$appConfig2$brow = _this$appConfig2.browser) === null || _this$appConfig2$brow === void 0 ? void 0 : _this$appConfig2$brow.interpreter_names.indexOf('yarn')) !== -1 && (!_this.cluster() || _this.cluster().type.indexOf('altus') === -1);
      };
      var dataEngInterfaceCondition = function dataEngInterfaceCondition() {
        var _this$cluster;
        return ((_this$cluster = _this.cluster()) === null || _this$cluster === void 0 ? void 0 : _this$cluster.type) === 'altus-de';
      };
      var enginesInterfaceCondition = function enginesInterfaceCondition() {
        var _this$cluster2;
        return ((_this$cluster2 = _this.cluster()) === null || _this$cluster2 === void 0 ? void 0 : _this$cluster2.type) === 'altus-engines';
      };
      var dataWarehouseInterfaceCondition = function dataWarehouseInterfaceCondition() {
        var _this$cluster3;
        return ((_this$cluster3 = _this.cluster()) === null || _this$cluster3 === void 0 ? void 0 : _this$cluster3.type) === 'altus-dw';
      };
      var dataWarehouse2InterfaceCondition = function dataWarehouse2InterfaceCondition() {
        var _this$cluster4;
        return ((_this$cluster4 = _this.cluster()) === null || _this$cluster4 === void 0 ? void 0 : _this$cluster4.type) === 'altus-dw2';
      };
      var schedulerInterfaceCondition = function schedulerInterfaceCondition() {
        var _this$appConfig3;
        return window.USER_HAS_OOZIE_ACCESS && (!_this.cluster() || _this.cluster().type.indexOf('altus') === -1) && ((_this$appConfig3 = _this.appConfig()) === null || _this$appConfig3 === void 0 ? void 0 : _this$appConfig3.scheduler);
      };
      var schedulerExtraInterfaceCondition = function schedulerExtraInterfaceCondition() {
        return !_this.isMini() && schedulerInterfaceCondition();
      };
      var schedulerBeatInterfaceCondition = function schedulerBeatInterfaceCondition() {
        var _this$appConfig4, _this$appConfig4$sche;
        return ((_this$appConfig4 = _this.appConfig()) === null || _this$appConfig4 === void 0 ? void 0 : (_this$appConfig4$sche = _this$appConfig4.scheduler) === null || _this$appConfig4$sche === void 0 ? void 0 : _this$appConfig4$sche.interpreter_names.indexOf('celery-beat')) !== -1;
      };
      var livyInterfaceCondition = function livyInterfaceCondition() {
        var _this$appConfig5;
        return !_this.isMini() && ((_this$appConfig5 = _this.appConfig()) === null || _this$appConfig5 === void 0 ? void 0 : _this$appConfig5.editor) && (_this.appConfig().editor.interpreter_names.indexOf('pyspark') !== -1 || _this.appConfig().editor.interpreter_names.indexOf('sparksql') !== -1);
      };
      var queryInterfaceCondition = function queryInterfaceCondition() {
        var _this$appConfig6;
        return window.ENABLE_QUERY_BROWSER && !(0,config_hueConfig__WEBPACK_IMPORTED_MODULE_2__.getLastKnownConfig)().has_computes && ((_this$appConfig6 = _this.appConfig()) === null || _this$appConfig6 === void 0 ? void 0 : _this$appConfig6.editor.interpreter_names.indexOf('impala')) !== -1 && (!_this.cluster() || _this.cluster().type.indexOf('altus') === -1);
      };
      var queryHiveInterfaceCondition = function queryHiveInterfaceCondition() {
        return window.ENABLE_HIVE_QUERY_BROWSER && !(0,config_hueConfig__WEBPACK_IMPORTED_MODULE_2__.getLastKnownConfig)().has_computes;
      };
      var scheduleHiveInterfaceCondition = function scheduleHiveInterfaceCondition() {
        return window.ENABLE_QUERY_SCHEDULING;
      };
      var hiveQueriesInterfaceCondition = function hiveQueriesInterfaceCondition() {
        return window.ENABLE_QUERY_STORE && isDialectEnabled('hive');
      };
      var impalaQueriesInterfaceCondition = function impalaQueriesInterfaceCondition() {
        return window.ENABLE_QUERY_STORE && isDialectEnabled('impala');
      };
      var interfaces = [{
        "interface": 'jobs',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Jobs'),
        condition: jobsInterfaceCondition
      }, {
        "interface": 'dataeng-jobs',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Jobs'),
        condition: dataEngInterfaceCondition
      }, {
        "interface": 'dataeng-clusters',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Clusters'),
        condition: dataEngInterfaceCondition
      }, {
        "interface": 'dataware-clusters',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Clusters'),
        condition: dataWarehouseInterfaceCondition
      }, {
        "interface": 'dataware2-clusters',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Warehouses'),
        condition: dataWarehouse2InterfaceCondition
      }, {
        "interface": 'engines',
        label: '',
        condition: enginesInterfaceCondition
      }, {
        "interface": 'queries-impala',
        label: 'Impala',
        condition: queryInterfaceCondition
      }, {
        "interface": 'queries-hive',
        label: 'Hive',
        condition: queryHiveInterfaceCondition
      }, {
        "interface": 'schedule-hive',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Hive Schedules'),
        condition: scheduleHiveInterfaceCondition
      }, {
        "interface": 'celery-beat',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Scheduled Tasks'),
        condition: schedulerBeatInterfaceCondition
      }, {
        "interface": 'history',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('History'),
        condition: historyInterfaceCondition
      }, {
        "interface": 'workflows',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Workflows'),
        condition: schedulerInterfaceCondition
      }, {
        "interface": 'schedules',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Schedules'),
        condition: schedulerInterfaceCondition
      }, {
        "interface": 'bundles',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Bundles'),
        condition: schedulerExtraInterfaceCondition
      }, {
        "interface": 'slas',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('SLAs'),
        condition: schedulerExtraInterfaceCondition
      }, {
        "interface": 'livy-sessions',
        label: 'Livy',
        condition: livyInterfaceCondition
      }, {
        "interface": 'hive-queries',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Hive Queries'),
        condition: hiveQueriesInterfaceCondition
      }, {
        "interface": 'impala-queries',
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Impala Queries'),
        condition: impalaQueriesInterfaceCondition
      }];
      return interfaces.filter(function (i) {
        return i.condition();
      });
    });
    this.availableInterfaces.subscribe(function (newInterfaces) {
      if (_this["interface"]() && !newInterfaces.some(function (newInterface) {
        return newInterface["interface"] === _this["interface"]();
      })) {
        _this.selectInterface(newInterfaces[0]);
      }
    });
    this.slasLoadedOnce = false;
    this.slasLoading = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(true);
    this.oozieInfoLoadedOnce = false;
    this.oozieInfoLoading = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(true);
    this["interface"] = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.jobs = new _Jobs__WEBPACK_IMPORTED_MODULE_9__["default"](this);
    this.job = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.updateJobTimeout = -1;
    this.updateJobsTimeout = -1;
    this.jobUpdateCounter = 0;
    this.exponentialFactor = 1;
    this.job.subscribe(function (val) {
      _this.monitorJob(val);
    });
    this.breadcrumbs = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([]);
    this.resetBreadcrumbs();
  }
  return _createClass(JobBrowserViewModel, [{
    key: "contextId",
    value: function contextId(id) {
      if (this.isMini()) {
        return id + '-mini';
      }
      return id;
    }
  }, {
    key: "showTab",
    value: function showTab(anchor) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("a[href='".concat(this.contextId(anchor), "']")).tab('show');
    }
  }, {
    key: "loadSlaPage",
    value: function loadSlaPage() {
      var _this2 = this;
      if (!this.slasLoadedOnce) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          url: '/oozie/list_oozie_sla/?is_embeddable=true',
          beforeSend: function beforeSend(xhr) {
            xhr.setRequestHeader('X-Requested-With', 'Hue');
          },
          dataType: 'html',
          success: function success(response) {
            _this2.slasLoading(false);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#slas').html(response);
          }
        });
      }
    }
  }, {
    key: "loadOozieInfoPage",
    value: function loadOozieInfoPage() {
      var _this3 = this;
      if (!this.oozieInfoLoadedOnce) {
        this.oozieInfoLoadedOnce = true;
        this.oozieInfoLoading(true);
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          url: '/oozie/list_oozie_info/?is_embeddable=true',
          beforeSend: function beforeSend(xhr) {
            xhr.setRequestHeader('X-Requested-With', 'Hue');
          },
          dataType: 'html'
        }).done(function (response) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#oozieInfo').html(response);
        }).fail(function (err) {
          _this3.oozieInfoLoadedOnce = false;
          _this3.selectInterface('schedules');
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_ERROR_TOPIC, {
            message: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Failed loading Oozie Info.')
          });
        }).always(function () {
          _this3.oozieInfoLoading(false);
        });
      }
    }
  }, {
    key: "isValidInterface",
    value: function isValidInterface(name) {
      var flatAvailableInterfaces = this.availableInterfaces().map(function (i) {
        return i["interface"];
      });
      if (flatAvailableInterfaces.indexOf(name) !== -1 || name === 'oozie-info') {
        return name;
      } else {
        return flatAvailableInterfaces[0];
      }
    }
  }, {
    key: "selectInterface",
    value: function selectInterface(selectedInterface) {
      var validSelectedInterface = this.isValidInterface(selectedInterface);
      this["interface"](validSelectedInterface);
      this.resetBreadcrumbs();
      if (!this.isMini()) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('graph.stop.refresh.view');
        if (window.location.hash !== '#!' + validSelectedInterface) {
          (0,utils_url_changeURL__WEBPACK_IMPORTED_MODULE_7__["default"])('#!' + validSelectedInterface);
        }
      }
      this.jobs.selectedJobs([]);
      this.job(null);
      if (validSelectedInterface === 'slas' && !this.isMini()) {
        this.loadSlaPage();
      } else if (validSelectedInterface === 'oozie-info' && !this.isMini()) {
        this.loadOozieInfoPage();
      } else if (validSelectedInterface !== 'hive-queries' || validSelectedInterface !== 'impala-queries') {
        this.jobs.fetchJobs();
      }
    }
  }, {
    key: "onClusterSelect",
    value: function onClusterSelect() {
      var interfaceToSet = this["interface"]();
      if (!this.availableInterfaces().some(function (availableInterface) {
        return availableInterface["interface"] === interfaceToSet;
      })) {
        interfaceToSet = this.availableInterfaces()[0]["interface"];
      }
      this.selectInterface(interfaceToSet);
    }
  }, {
    key: "monitorJob",
    value: function monitorJob(job) {
      var _this4 = this;
      window.clearTimeout(this.updateJobTimeout);
      window.clearTimeout(this.updateJobsTimeout);
      this.jobUpdateCounter = 0;
      this.exponentialFactor = 1;
      if (this["interface"]() && this["interface"]() !== 'slas' && this["interface"]() !== 'oozie-info' && this["interface"] !== 'hive-queries' && this["interface"] !== 'impala-queries') {
        if (job) {
          if (job.apiStatus() === 'RUNNING') {
            var _updateJob = function _updateJob() {
              _this4.jobUpdateCounter++;
              var updateLogs = _this4.jobUpdateCounter % _this4.exponentialFactor === 0;
              if (updateLogs && _this4.exponentialFactor < 50) {
                _this4.exponentialFactor *= 2;
              }
              var def = job.updateJob(updateLogs);
              if (def) {
                def.done(function () {
                  _this4.updateJobTimeout = setTimeout(_updateJob, window.JB_SINGLE_CHECK_INTERVAL_IN_MILLIS);
                });
              }
            };
            this.updateJobTimeout = setTimeout(_updateJob, window.JB_SINGLE_CHECK_INTERVAL_IN_MILLIS);
          }
        } else {
          var _updateJobs = function _updateJobs() {
            var updateRequest = _this4.jobs.updateJobs();
            if (updateRequest !== null && updateRequest !== void 0 && updateRequest.done) {
              updateRequest.done(function () {
                setTimeout(_updateJobs, window.JB_MULTI_CHECK_INTERVAL_IN_MILLIS);
              });
            }
          };
          this.updateJobsTimeout = setTimeout(_updateJobs, window.JB_MULTI_CHECK_INTERVAL_IN_MILLIS);
        }
      }
    }
  }, {
    key: "resetBreadcrumbs",
    value: function resetBreadcrumbs(extraCrumbs) {
      var crumbs = [{
        id: '',
        name: this["interface"](),
        type: this["interface"]()
      }];
      if (extraCrumbs) {
        crumbs = crumbs.concat(extraCrumbs);
      }
      this.breadcrumbs(crumbs);
    }
  }, {
    key: "getHDFSPath",
    value: function getHDFSPath(path) {
      if (path.startsWith('hdfs://')) {
        var bits = path.substr(7).split('/');
        bits.shift();
        return '/' + bits.join('/');
      }
      return path;
    }
  }, {
    key: "formatProgress",
    value: function formatProgress(progress) {
      if (typeof progress === 'function') {
        progress = progress();
      }
      if (!isNaN(progress)) {
        return Math.round(progress * 100) / 100 + '%';
      }
      return progress;
    }
  }, {
    key: "load",
    value: function load() {
      var h = window.location.hash;
      if (!this.isMini()) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('graph.stop.refresh.view');
      }
      h = h.indexOf('#!') === 0 ? h.substr(2) : '';
      switch (h) {
        case '':
          h = 'jobs';
        case 'slas':
        case 'oozie-info':
        case 'jobs':
        case 'queries-impala':
        case 'queries-hive':
        case 'celery-beat':
        case 'schedule-hive':
        case 'history':
        case 'workflows':
        case 'schedules':
        case 'bundles':
        case 'dataeng-clusters':
        case 'dataware-clusters':
        case 'dataware2-clusters':
        case 'engines':
        case 'dataeng-jobs':
        case 'livy-sessions':
        case 'hive-queries':
        case 'impala-queries':
          this.selectInterface(h);
          break;
        default:
          if (h.indexOf('id=') === 0 && !this.isMini()) {
            new _Job__WEBPACK_IMPORTED_MODULE_8__["default"](this, {
              id: h.substr(3)
            }).fetchJob();
          } else {
            this.selectInterface('reset');
          }
      }
    }
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/knockout/Jobs.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/knockout/Jobs.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Jobs)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout.mapping */ "./node_modules/knockout.mapping/knockout.mapping.js");
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout_mapping__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _Job__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Job */ "./desktop/core/src/desktop/js/apps/jobBrowser/knockout/Job.js");
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









var Jobs = /*#__PURE__*/function () {
  function Jobs(vm) {
    var _this = this;
    _classCallCheck(this, Jobs);
    this.vm = vm;
    this.apps = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray().extend({
      rateLimit: 50
    });
    this.runningApps = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.apps().filter(function (app) {
        return app.isRunning();
      });
    });
    this.finishedApps = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.apps().filter(function (app) {
        return !app.isRunning();
      });
    });
    this.totalApps = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(null);
    this.isCoordinator = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.loadingJobs = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.selectedJobs = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    this.hasKill = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return !_this.isCoordinator() && ['jobs', 'workflows', 'schedules', 'bundles', 'queries-impala', 'dataeng-jobs', 'dataeng-clusters', 'dataware-clusters', 'dataware2-clusters', 'celery-beat', 'schedule-hive', 'history'].indexOf(_this.vm["interface"]()) !== -1;
    });
    this.killEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.hasKill() && _this.selectedJobs().length && _this.selectedJobs().every(function (job) {
        return job.killEnabled();
      });
    });
    this.hasResume = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return !_this.isCoordinator() && ['workflows', 'schedules', 'bundles', 'dataware2-clusters', 'celery-beat', 'schedule-hive', 'history'].indexOf(_this.vm["interface"]()) !== -1;
    });
    this.resumeEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.hasResume() && _this.selectedJobs().length && _this.selectedJobs().every(function (job) {
        return job.resumeEnabled();
      });
    });
    this.hasRerun = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.isCoordinator();
    });
    this.rerunEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      var validSelectionCount = _this.selectedJobs().length === 1 || _this.selectedJobs().length > 1 && _this.vm["interface"]() === 'schedules';
      return _this.hasRerun() && validSelectionCount && _this.selectedJobs().every(function (job) {
        return job.rerunEnabled();
      });
    });
    this.hasPause = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return !_this.isCoordinator() && ['workflows', 'schedules', 'bundles', 'dataware2-clusters', 'celery-beat', 'schedule-hive', 'history'].indexOf(_this.vm["interface"]()) !== -1;
    });
    this.pauseEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.hasPause() && _this.selectedJobs().length && _this.selectedJobs().every(function (job) {
        return job.pauseEnabled();
      });
    });
    this.hasIgnore = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.isCoordinator();
    });
    this.ignoreEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.hasIgnore() && _this.selectedJobs().length && _this.selectedJobs().every(function (job) {
        return job.ignoreEnabled();
      });
    });
    this.textFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observable("user:".concat(window.LOGGED_USERNAME, " ")).extend({
      rateLimit: {
        method: 'notifyWhenChangesStop',
        timeout: 1000
      }
    });
    this.statesValuesFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS({
      value: 'completed',
      name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Succeeded'),
      checked: false,
      klass: 'green'
    }), knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS({
      value: 'running',
      name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Running'),
      checked: false,
      klass: 'orange'
    }), knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS({
      value: 'failed',
      name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Failed'),
      checked: false,
      klass: 'red'
    })]);
    this.statesFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return _this.statesValuesFilter().filter(function (state) {
        return state.checked();
      }).map(function (state) {
        return state.value();
      });
    });
    this.timeValueFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(7).extend({
      throttle: 500
    });
    this.timeUnitFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('days').extend({
      throttle: 500
    });
    this.timeUnitFilterUnits = knockout__WEBPACK_IMPORTED_MODULE_1__.observable([{
      value: 'days',
      name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('days')
    }, {
      value: 'hours',
      name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('hours')
    }, {
      value: 'minutes',
      name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('minutes')
    }]);
    this.hasPagination = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return ['workflows', 'schedules', 'bundles'].indexOf(_this.vm["interface"]()) !== -1;
    });
    this.paginationPage = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(1);
    this.paginationOffset = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(1); // Starting index
    this.paginationResultPage = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(100);
    this.pagination = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return {
        page: _this.paginationPage(),
        offset: _this.paginationOffset(),
        limit: _this.paginationResultPage()
      };
    });
    this.showPreviousPage = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return _this.paginationOffset() > 1;
    });
    this.showNextPage = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return _this.totalApps() && _this.paginationOffset() + _this.paginationResultPage() < _this.totalApps();
    });
    this.searchFilters = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return [{
        text: _this.textFilter()
      }, {
        time: {
          time_value: _this.timeValueFilter(),
          time_unit: _this.timeUnitFilter()
        }
      }, {
        states: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJS(_this.statesFilter())
      }];
    });
    this.searchFilters.subscribe(function () {
      _this.paginationOffset(1);
    });
    this.paginationFilters = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return [{
        pagination: _this.pagination()
      }];
    });
    this.filters = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.searchFilters().concat(_this.paginationFilters());
    });
    this.filters.subscribe(function () {
      _this.fetchJobs();
    });
    this.lastFetchJobsRequest = null;
    this.lastUpdateJobsRequest = null;
    this.showJobCountBanner = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.apps().length === window.MAX_JOB_FETCH;
    });
    this.createClusterShow = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.createClusterName = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
    this.createClusterWorkers = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(1);
    this.createClusterShowWorkers = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.createClusterAutoResize = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.createClusterAutoPause = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
  }
  return _createClass(Jobs, [{
    key: "_control",
    value: function _control(app_ids, action, callback) {
      var _this2 = this;
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/jobbrowser/api/job/action/' + this.vm["interface"]() + '/' + action, {
        app_ids: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(app_ids),
        "interface": knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm["interface"]),
        operation: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON({
          action: action
        })
      }, function (data) {
        if (data.status === 0) {
          if (callback) {
            callback(data);
          }
          if (_this2.vm["interface"]().indexOf('clusters') !== -1 && action === 'kill') {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('context.catalog.refresh');
            _this2.selectedJobs([]);
          }
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      }).always(function () {});
    }
  }, {
    key: "previousPage",
    value: function previousPage() {
      this.paginationOffset(this.paginationOffset() - this.paginationResultPage());
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      this.paginationOffset(this.paginationOffset() + this.paginationResultPage());
    }
  }, {
    key: "_fetchJobs",
    value: function _fetchJobs(callback) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/jobbrowser/api/jobs/' + this.vm["interface"](), {
        cluster: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm.compute),
        "interface": knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.vm["interface"]),
        filters: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(this.filters)
      }, function (data) {
        if (data.status === 0) {
          var _data$apps;
          if ((_data$apps = data.apps) !== null && _data$apps !== void 0 && _data$apps.length) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('jobbrowser.data', data.apps);
          }
          if (callback) {
            callback(data);
          }
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      });
    }
  }, {
    key: "fetchJobs",
    value: function fetchJobs() {
      var _this3 = this;
      if (this.vm["interface"]() === 'hive-queries' || this.vm["interface"]() === 'impala-queries') {
        return;
      }
      _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].cancelActiveRequest(this.lastUpdateJobsRequest);
      _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].cancelActiveRequest(this.lastFetchJobsRequest);
      this.loadingJobs(true);
      this.vm.job(null);
      this.lastFetchJobsRequest = this._fetchJobs(function (data) {
        var apps = [];
        if (data !== null && data !== void 0 && data.apps) {
          data.apps.forEach(function (job) {
            apps.push(new _Job__WEBPACK_IMPORTED_MODULE_7__["default"](_this3.vm, job));
          });
        }
        _this3.apps(apps);
        _this3.totalApps((data === null || data === void 0 ? void 0 : data.total) || 0);
      }).always(function () {
        _this3.loadingJobs(false);
      });
    }
  }, {
    key: "updateJobs",
    value: function updateJobs() {
      var _this4 = this;
      if (this.vm["interface"]() === 'hive-queries' || this.vm["interface"]() === 'impala-queries') {
        return;
      }
      _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].cancelActiveRequest(this.lastUpdateJobsRequest);
      this.lastFetchJobsRequest = this._fetchJobs(function (data) {
        if (data !== null && data !== void 0 && data.apps) {
          var i = 0,
            j = 0;
          var newJobs = [];
          while ((_this4.apps().length === 0 || i < _this4.apps().length) && j < data.apps.length) {
            // Nothing displayed or compare existing
            if (_this4.apps().length === 0 || _this4.apps()[i].id() !== data.apps[j].id) {
              // New Job
              newJobs.unshift(new _Job__WEBPACK_IMPORTED_MODULE_7__["default"](_this4.vm, data.apps[j]));
              j++;
            } else {
              // Updated jobs
              if (_this4.apps()[i].status() !== data.apps[j].status) {
                _this4.apps()[i].status(data.apps[j].status);
                _this4.apps()[i].apiStatus(data.apps[j].apiStatus);
                _this4.apps()[i].canWrite(data.apps[j].canWrite);
              }
              i++;
              j++;
            }
          }
          if (i < _this4.apps().length) {
            _this4.apps.splice(i, _this4.apps().length - i);
          }
          newJobs.forEach(function (job) {
            _this4.apps.unshift(job);
          });
          _this4.totalApps(data.total);
        }
      });
      return this.lastFetchJobsRequest;
    }
  }, {
    key: "createClusterFormReset",
    value: function createClusterFormReset() {
      this.createClusterName('');
      this.createClusterWorkers(1);
      this.createClusterAutoResize(false);
      this.createClusterAutoPause(false);
    }
  }, {
    key: "createCluster",
    value: function createCluster() {
      var _this5 = this;
      if (this.vm["interface"]().indexOf('dataeng') !== -1) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/metadata/api/dataeng/create_cluster/', {
          cluster_name: 'cluster_name',
          cdh_version: 'CDH515',
          public_key: 'public_key',
          instance_type: 'm4.xlarge',
          environment_name: 'crn:altus:environments:us-west-1:12a0079b-1591-4ca0-b721-a446bda74e67:environment:analytics/236ebdda-18bd-428a-9d2b-cd6973d42946',
          workers_group_size: '3',
          namespace_name: 'crn:altus:sdx:us-west-1:12a0079b-1591-4ca0-b721-a446bda74e67:namespace:analytics/7ea35fe5-dbc9-4b17-92b1-97a1ab32e410'
        }, function () {
          _this5.updateJobs();
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('context.catalog.refresh');
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/metadata/api/analytic_db/create_cluster/', {
          is_k8: this.vm["interface"]().indexOf('dataware2-clusters') !== -1,
          cluster_name: this.createClusterName(),
          cluster_hdfs_host: 'hdfs-namenode',
          cluster_hdfs_port: 9820,
          cdh_version: 'CDH515',
          public_key: 'public_key',
          instance_type: 'm4.xlarge',
          environment_name: 'crn:altus:environments:us-west-1:12a0079b-1591-4ca0-b721-a446bda74e67:environment:jheyming-secure/b4e6d99a-261f-4ada-9b4a-576aa0af8979',
          workers_group_size: this.createClusterWorkers(),
          namespace_name: 'crn:altus:sdx:us-west-1:12a0079b-1591-4ca0-b721-a446bda74e67:namespace:analytics/7ea35fe5-dbc9-4b17-92b1-97a1ab32e410'
        }, function () {
          _this5.createClusterFormReset();
          _this5.updateJobs();
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('context.catalog.refresh');
        });
      }
      this.createClusterShow(false);
    }
  }, {
    key: "control",
    value: function control(action) {
      var _this6 = this;
      var suffix = this.vm.isMini() ? '-mini' : '';
      if (action === 'rerun') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().get("/oozie/rerun_oozie_coord/".concat(this.vm.job().id(), "/?format=json").concat(this.vm.isMini() ? '&is_mini=true' : ''), function (response) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#rerun-modal".concat(suffix)).modal('show');
          _this6.vm.job().rerunModalContent(response);
          // Force Knockout to handle the update of rerunModalContent before trying to modify its DOM
          knockout__WEBPACK_IMPORTED_MODULE_1__.tasks.runEarly();
          var frag = document.createDocumentFragment();
          _this6.vm.job().coordinatorActions().selectedJobs().forEach(function (item) {
            var option = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<option>', {
              value: item.properties.number(),
              selected: true
            });
            option.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(frag));
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_actions".concat(suffix)).find('option').remove();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(frag).appendTo("#id_actions".concat(suffix));
        });
      } else if (action === 'ignore') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/oozie/manage_oozie_jobs/' + this.vm.job().id() + '/ignore', {
          actions: this.vm.job().coordinatorActions().selectedJobs().map(function (wf) {
            return wf.properties.number();
          }).join(' ')
        }, function () {
          _this6.vm.job().apiStatus('RUNNING');
          _this6.vm.job().updateJob();
        });
      } else {
        this._control(this.selectedJobs().map(function (job) {
          return job.id();
        }), action, function (data) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_4__.GLOBAL_INFO_TOPIC, data);
          _this6.updateJobs();
        });
      }
    }
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/miniJobBrowser.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/miniJobBrowser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeMiniJobBrowser": () => (/* binding */ initializeMiniJobBrowser)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _components_hiveQueryPlan_webcomp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/hiveQueryPlan/webcomp */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/webcomp.ts");
/* harmony import */ var _components_queriesList_webcomp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/queriesList/webcomp */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/webcomp.ts");
/* harmony import */ var _components_impalaQueries_webcomp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/impalaQueries/webcomp */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/webcomp.ts");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eventListeners */ "./desktop/core/src/desktop/js/apps/jobBrowser/eventListeners.js");
/* harmony import */ var _knockout_JobBrowserViewModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./knockout/JobBrowserViewModel */ "./desktop/core/src/desktop/js/apps/jobBrowser/knockout/JobBrowserViewModel.js");
/* harmony import */ var _knockout_Job__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./knockout/Job */ "./desktop/core/src/desktop/js/apps/jobBrowser/knockout/Job.js");
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












var initializeMiniJobBrowser = function initializeMiniJobBrowser() {
  var jobBrowserViewModel = new _knockout_JobBrowserViewModel__WEBPACK_IMPORTED_MODULE_9__["default"](true);
  var openJob = function openJob(id) {
    if (jobBrowserViewModel.job() == null) {
      jobBrowserViewModel.job(new _knockout_Job__WEBPACK_IMPORTED_MODULE_10__["default"](jobBrowserViewModel, {}));
    }
    jobBrowserViewModel.job().id(id);
    jobBrowserViewModel.job().fetchJob();
  };
  knockout__WEBPACK_IMPORTED_MODULE_1__.applyBindings(jobBrowserViewModel, jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jobbrowserMiniComponents')[0]);
  var configUpdated = function configUpdated(clusterConfig) {
    jobBrowserViewModel.appConfig(clusterConfig && clusterConfig['app_config']);
    jobBrowserViewModel.clusterType(clusterConfig && clusterConfig['cluster_type']);
  };
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('cluster.config.set.config', configUpdated);
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('cluster.config.get.config', configUpdated);
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('submit.rerun.popup.return-mini', function () {
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_INFO_TOPIC, {
      message: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])('Rerun submitted.')
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#rerun-modal-mini').modal('hide');
    jobBrowserViewModel.job().apiStatus('RUNNING');
    jobBrowserViewModel.monitorJob(jobBrowserViewModel.job());
  });
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('mini.jb.navigate', function (options) {
    if (options.compute) {
      jobBrowserViewModel.compute(options.compute);
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jobsPanel .nav-pills li').removeClass('active');
    var interfaceName = jobBrowserViewModel.isValidInterface(options.section);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jobsPanel .nav-pills li[data-interface="' + interfaceName + '"]').addClass('active');
    jobBrowserViewModel.selectInterface(interfaceName);
  });
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('mini.jb.open.job', openJob);
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('mini.jb.expand', function () {
    if (jobBrowserViewModel.job()) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('open.link', '/jobbrowser/#!id=' + jobBrowserViewModel.job().id());
    } else {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('open.link', '/jobbrowser/#!' + jobBrowserViewModel["interface"]());
    }
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/notebook/NotebookViewModel.js":
/*!************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/notebook/NotebookViewModel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotebookViewModel)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout.mapping */ "./node_modules/knockout.mapping/knockout.mapping.js");
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout_mapping__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var _chartTransformers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chartTransformers */ "./desktop/core/src/desktop/js/apps/notebook/chartTransformers.js");
/* harmony import */ var _notebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notebook */ "./desktop/core/src/desktop/js/apps/notebook/notebook.js");
/* harmony import */ var _snippet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snippet */ "./desktop/core/src/desktop/js/apps/notebook/snippet.js");
/* harmony import */ var _editor_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editor/events */ "./desktop/core/src/desktop/js/apps/editor/events.js");
/* harmony import */ var config_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! config/events */ "./desktop/core/src/desktop/js/config/events.ts");
/* harmony import */ var config_hueConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! config/hueConfig */ "./desktop/core/src/desktop/js/config/hueConfig.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_url_changeURL__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/url/changeURL */ "./desktop/core/src/desktop/js/utils/url/changeURL.ts");
/* harmony import */ var utils_url_changeURLParameter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/url/changeURLParameter */ "./desktop/core/src/desktop/js/utils/url/changeURLParameter.ts");
/* harmony import */ var utils_url_getParameter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/url/getParameter */ "./desktop/core/src/desktop/js/utils/url/getParameter.ts");
/* harmony import */ var utils_string_UUID__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/string/UUID */ "./desktop/core/src/desktop/js/utils/string/UUID.ts");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
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


















var NotebookViewModel = /*#__PURE__*/function () {
  function NotebookViewModel(options, CoordinatorEditorViewModel, RunningCoordinatorModel) {
    var _this = this;
    _classCallCheck(this, NotebookViewModel);
    var self = this;
    self.URLS = {
      editor: '/hue/editor',
      notebook: '/hue/notebook',
      report: '/hue/dashboard/new_search?engine=report'
    };
    self.huePubSubId = options.huePubSubId || 'editor';
    self.user = options.user;
    self.userId = options.userId;
    self.suffix = options.suffix;
    self.isMobile = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.mobile);
    self.isNotificationManager = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.is_notification_manager || false);
    self.editorType = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.editor_type);
    self.editorIcon = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      var foundInterpreter = options.languages.find(function (interpreter) {
        return interpreter.type === self.editorType();
      });
      return window.ENABLE_UNIFIED_ANALYTICS && (foundInterpreter === null || foundInterpreter === void 0 ? void 0 : foundInterpreter.dialect) === 'hive' ? 'impala' : self.editorType();
    });
    self.activeConnector = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    var updateConnector = function updateConnector(id) {
      if (id) {
        self.activeConnector((0,config_hueConfig__WEBPACK_IMPORTED_MODULE_9__.findEditorConnector)(function (connector) {
          return connector.id === id;
        }));
      }
    };
    updateConnector(self.editorType());
    self.sharingEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    var updateFromConfig = function updateFromConfig(hueConfig) {
      self.sharingEnabled(hueConfig && (hueConfig.hue_config.is_admin || hueConfig.hue_config.enable_sharing));
    };
    updateFromConfig((0,config_hueConfig__WEBPACK_IMPORTED_MODULE_9__.getLastKnownConfig)());
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe(config_events__WEBPACK_IMPORTED_MODULE_8__.CONFIG_REFRESHED_TOPIC, updateFromConfig);
    self.editorType.subscribe(function (newVal) {
      if (!_this.activeConnector() || _this.activeConnector().id !== newVal) {
        updateConnector(newVal);
      }
      self.editorMode(newVal !== 'notebook');
      (0,utils_url_changeURLParameter__WEBPACK_IMPORTED_MODULE_13__["default"])('type', newVal);
      if (self.editorMode()) {
        self.selectedNotebook().fetchHistory(); // Js error if notebook did not have snippets
      }
    });
    self.preEditorTogglingSnippet = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    self.toggleEditorMode = function () {
      var notebook = self.selectedNotebook();
      var newSnippets = [];
      if (self.editorType() !== 'notebook') {
        self.editorType('notebook');
        var sourceSnippet = notebook.snippets()[0];
        self.preEditorTogglingSnippet(sourceSnippet);
        var variables = sourceSnippet.variables();
        var statementKeys = [];
        // Split statements
        notebook.type('notebook');
        var database = sourceSnippet.database();
        sourceSnippet.statementsList().forEach(function (sql_statement) {
          var presentationSnippet;
          var statementKey = sql_statement.hashCode() + database;
          if (statementKey in notebook.presentationSnippets()) {
            presentationSnippet = notebook.presentationSnippets()[statementKey]; // Persist result
            presentationSnippet.variables(variables);
          } else {
            var titleLines = [];
            var statementLines = [];
            sql_statement.trim().split('\n').forEach(function (line) {
              if (line.trim().startsWith('--') && statementLines.length === 0) {
                titleLines.push(line.substr(2));
              } else {
                statementLines.push(line);
              }
            });
            presentationSnippet = new _snippet__WEBPACK_IMPORTED_MODULE_6__["default"](self, notebook, {
              type: notebook.initialType,
              database: database,
              statement_raw: statementLines.join('\n'),
              result: {},
              name: titleLines.join('\n'),
              variables: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJS(variables)
            });
            presentationSnippet.variables = sourceSnippet.variables;
            presentationSnippet.init();
            notebook.presentationSnippets()[statementKey] = presentationSnippet;
          }
          statementKeys.push(statementKey);
          newSnippets.push(presentationSnippet);
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(notebook.presentationSnippets(), function (key) {
          // Dead statements
          if (!key in statementKeys) {
            delete notebook.presentationSnippets()[key];
          }
        });
      } else {
        self.editorType(notebook.initialType);
        // Revert to one statement
        newSnippets.push(self.preEditorTogglingSnippet());
        notebook.type('query-' + notebook.initialType);
      }
      notebook.snippets(newSnippets);
      newSnippets.forEach(function (snippet) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('editor.redraw.data', {
          snippet: snippet
        });
      });
    };
    self.togglePresentationMode = function () {
      if (self.selectedNotebook().initialType !== 'notebook') {
        self.toggleEditorMode();
      }
    };
    self.editorTypeTitle = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      var foundInterpreter = options.languages.find(function (interpreter) {
        return interpreter.type === self.editorType();
      });
      return (foundInterpreter === null || foundInterpreter === void 0 ? void 0 : foundInterpreter.displayName) || (foundInterpreter === null || foundInterpreter === void 0 ? void 0 : foundInterpreter.name) || self.editorType();
    });
    self.selectedNotebook = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    self.combinedContent = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    self.isPresentationModeEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return self.selectedNotebook() && self.selectedNotebook().snippets().length === 1 && self.selectedNotebook().snippets()[0].isSqlDialect();
    });
    self.isResultFullScreenMode = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.isPresentationMode = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return self.selectedNotebook() && self.selectedNotebook().isPresentationMode();
    });
    self.isHidingCode = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return self.selectedNotebook() && self.selectedNotebook().isHidingCode();
    });
    self.successUrl = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.success_url); // Deprecated
    self.isSqlAnalyzerEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.is_optimizer_enabled);
    self.isNavigatorEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.is_navigator_enabled);
    self.CoordinatorEditorViewModel = CoordinatorEditorViewModel;
    self.RunningCoordinatorModel = RunningCoordinatorModel;
    self.canSave = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      // Saved query or history but history coming from a saved query
      return self.selectedNotebook() && self.selectedNotebook().canWrite() && (self.selectedNotebook().isSaved() || self.selectedNotebook().isHistory() && self.selectedNotebook().parentSavedQueryUuid());
    });
    self.ChartTransformers = _chartTransformers__WEBPACK_IMPORTED_MODULE_4__["default"];

    // TODO: Drop the SQL source types from the notebook. They're now set in AssistDbPanel.
    self.sqlSourceTypes = [];
    self.availableLanguages = [];
    if (options.languages && options.snippetViewSettings) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(options.languages, function (idx, language) {
        self.availableLanguages.push({
          type: language.type,
          name: language.name,
          "interface": language["interface"]
        });
        var viewSettings = options.snippetViewSettings[language.type];
        if (viewSettings && viewSettings.sqlDialect) {
          self.sqlSourceTypes.push({
            type: language.type,
            name: language.name
          });
        }
      });
    }
    var sqlSourceTypes = jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(self.sqlSourceTypes, function (language) {
      return language.type == self.editorType();
    });
    if (sqlSourceTypes.length > 0) {
      self.activeSqlSourceType = sqlSourceTypes[0].type;
    } else {
      self.activeSqlSourceType = null;
    }
    self.displayCombinedContent = function () {
      if (!self.selectedNotebook()) {
        self.combinedContent('');
      } else {
        var statements = '';
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(self.selectedNotebook().snippets(), function (index, snippet) {
          if (snippet.statement()) {
            if (statements) {
              statements += '\n\n';
            }
            statements += snippet.statement();
          }
        });
        self.combinedContent(statements);
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#combinedContentModal' + self.suffix).modal('show');
    };
    self.isEditing = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.isEditing.subscribe(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('editingToggled');
    });
    self.toggleEditing = function () {
      self.isEditing(!self.isEditing());
    };
    self.authSessionUsername = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(); // UI popup
    self.authSessionPassword = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    self.authSessionMessage = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    self.authSessionType = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    self.authSessionCallback = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    self.removeSnippetConfirmation = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    self.removeSnippet = function (notebook, snippet) {
      var hasContent = snippet.statement_raw().length > 0;
      if (!hasContent) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(snippet.properties(), function (key, value) {
          hasContent = hasContent || knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(value) && value().length > 0;
        });
      }
      if (hasContent) {
        self.removeSnippetConfirmation({
          notebook: notebook,
          snippet: snippet
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#removeSnippetModal' + self.suffix).modal('show');
      } else {
        notebook.snippets.remove(snippet);
        window.setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('editorSizeChanged');
        }, 100);
      }
    };
    self.assistAvailable = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.assistAvailable);
    self.assistWithoutStorage = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.isLeftPanelVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__.getFromLocalStorage)('assist.assist_panel_visible', true));
    self.isLeftPanelVisible.subscribe(function (val) {
      if (!self.assistWithoutStorage()) {
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__.setInLocalStorage)('assist.assist_panel_visible', val);
      }
    });
    self.isRightPanelAvailable = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.assistAvailable && window.HAS_SQL_ANALYZER);
    self.isRightPanelVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__.getFromLocalStorage)('assist.right_assist_panel_visible', true));
    self.isRightPanelVisible.subscribe(function (val) {
      if (!self.assistWithoutStorage()) {
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__.setInLocalStorage)('assist.right_assist_panel_visible', val);
      }
    });
    this.withActiveSnippet = function (callback) {
      var notebook = self.selectedNotebook();
      var foundSnippet;
      if (notebook) {
        if (notebook.snippets().length === 1) {
          foundSnippet = notebook.snippets()[0];
        } else {
          notebook.snippets().every(function (snippet) {
            if (snippet.inFocus()) {
              foundSnippet = snippet;
              return false;
            }
            return true;
          });
        }
      }
      if (foundSnippet) {
        callback(foundSnippet);
      }
    };
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('assist.highlight.risk.suggestions', function () {
      if (self.isRightPanelAvailable() && !self.isRightPanelVisible()) {
        self.isRightPanelVisible(true);
      }
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe(_editor_events__WEBPACK_IMPORTED_MODULE_7__.GET_ACTIVE_SNIPPET_CONNECTOR_EVENT, function (callback) {
      _this.withActiveSnippet(function (activeSnippet) {
        callback(activeSnippet.connector());
      });
    }, self.huePubSubId);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('save.snippet.to.file', function () {
      _this.withActiveSnippet(function (activeSnippet) {
        var data = {
          path: activeSnippet.statementPath(),
          contents: activeSnippet.statement()
        };
        var options = {
          successCallback: function successCallback(result) {
            if (result && result.exists) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_16__.GLOBAL_INFO_TOPIC, {
                message: result.path + ' saved successfully.'
              });
            } else {
              self._ajaxError(result);
            }
          }
        };
        _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].saveSnippetToFile(data, options);
      });
    }, self.huePubSubId);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('sql.context.pin', function (contextData) {
      _this.withActiveSnippet(function (activeSnippet) {
        contextData.tabId = 'context' + activeSnippet.pinnedContextTabs().length;
        activeSnippet.pinnedContextTabs.push(contextData);
        activeSnippet.currentQueryTab(contextData.tabId);
      });
    }, self.huePubSubId);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('assist.database.set', function (entry) {
      _this.withActiveSnippet(function (activeSnippet) {
        activeSnippet.handleAssistSelection(entry);
      });
    }, self.huePubSubId);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('assist.database.selected', function (entry) {
      _this.withActiveSnippet(function (activeSnippet) {
        activeSnippet.handleAssistSelection(entry);
      });
    }, self.huePubSubId);
    self.availableSnippets = knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(options.languages);
    self.editorMode = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.mode === 'editor');
    self.getSnippetViewSettings = function (snippetType) {
      if (options.snippetViewSettings[snippetType]) {
        return options.snippetViewSettings[snippetType];
      }
      return options.snippetViewSettings["default"];
    };
    self.availableSessionProperties = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      // Only Spark
      return knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayFilter(options.session_properties, function (item) {
        return item.name != ''; // Could filter out the ones already selected + yarn only or not
      });
    });
    self.getSessionProperties = function (name) {
      var _prop = null;
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(options.session_properties, function (index, prop) {
        if (prop.name == name) {
          _prop = prop;
          return;
        }
      });
      return _prop;
    };
    self.getSnippetName = function (snippetType) {
      var availableSnippets = self.availableSnippets();
      for (var i = 0; i < availableSnippets.length; i++) {
        if (availableSnippets[i].type() === snippetType) {
          return availableSnippets[i].name();
        }
      }
      return '';
    };
    self.changeURL = function (url) {
      if (!self.isNotificationManager()) {
        (0,utils_url_changeURL__WEBPACK_IMPORTED_MODULE_12__["default"])(url);
      }
    };
    self.init = function () {
      var editorId = (options === null || options === void 0 ? void 0 : options.editorId) || (0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_14__["default"])('editor');
      if (editorId) {
        self.openNotebook(editorId);
      } else if ((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_14__["default"])('gist') !== '') {
        self.newNotebook((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_14__["default"])('type'));
      } else if ((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_14__["default"])('editor') !== '') {
        self.openNotebook((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_14__["default"])('editor'));
      } else if ((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_14__["default"])('type') !== '') {
        self.newNotebook((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_14__["default"])('type'));
      } else {
        self.newNotebook();
      }
    };
    self.loadNotebook = function (notebookRaw, queryTab) {
      var currentQueries;
      if (self.selectedNotebook() != null) {
        self.selectedNotebook().close();
        currentQueries = self.selectedNotebook().unload();
      }
      var notebook = new _notebook__WEBPACK_IMPORTED_MODULE_5__["default"](self, notebookRaw);
      if (notebook.snippets().length > 0) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('detach.scrolls', notebook.snippets()[0]);
        notebook.selectedSnippet(notebook.snippets()[notebook.snippets().length - 1].type());
        if (currentQueries != null) {
          notebook.snippets()[0].queries(currentQueries);
        }
        notebook.snippets().forEach(function (snippet) {
          snippet.aceAutoExpand = false;
          snippet.statement_raw.valueHasMutated();
          if (snippet.result.handle().statements_count > 1 && snippet.result.handle().start != null && snippet.result.handle().end != null) {
            var aceLineOffset = snippet.result.handle().aceLineOffset || 0;
            snippet.result.statement_range({
              start: {
                row: snippet.result.handle().start.row + aceLineOffset,
                column: snippet.result.handle().start.column
              },
              end: {
                row: snippet.result.handle().end.row + aceLineOffset,
                column: snippet.result.handle().end.column
              }
            });
            snippet.result.statement_range.valueHasMutated();
          }
          snippet.previousChartOptions = self.getPreviousChartOptions(snippet);
        });
        if (notebook.snippets()[0].result.data().length > 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('redrawResults');
        } else if (queryTab) {
          notebook.snippets()[0].currentQueryTab(queryTab);
        }
        if (notebook.isSaved()) {
          notebook.snippets()[0].currentQueryTab('savedQueries');
          if (notebook.snippets()[0].queries().length === 0) {
            notebook.snippets()[0].fetchQueries(); // Subscribe not updating yet
          }
        }
      }
      self.selectedNotebook(notebook);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('check.job.browser');
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('recalculate.name.description.width');
    };
    self.getPreviousChartOptions = function (snippet) {
      return {
        chartLimit: typeof snippet.chartLimit() !== 'undefined' ? snippet.chartLimit() : snippet.previousChartOptions.chartLimit,
        chartX: typeof snippet.chartX() !== 'undefined' ? snippet.chartX() : snippet.previousChartOptions.chartX,
        chartXPivot: typeof snippet.chartXPivot() !== 'undefined' ? snippet.chartXPivot() : snippet.previousChartOptions.chartXPivot,
        chartYSingle: typeof snippet.chartYSingle() !== 'undefined' ? snippet.chartYSingle() : snippet.previousChartOptions.chartYSingle,
        chartMapType: typeof snippet.chartMapType() !== 'undefined' ? snippet.chartMapType() : snippet.previousChartOptions.chartMapType,
        chartMapLabel: typeof snippet.chartMapLabel() !== 'undefined' ? snippet.chartMapLabel() : snippet.previousChartOptions.chartMapLabel,
        chartMapHeat: typeof snippet.chartMapHeat() !== 'undefined' ? snippet.chartMapHeat() : snippet.previousChartOptions.chartMapHeat,
        chartYMulti: typeof snippet.chartYMulti() !== 'undefined' ? snippet.chartYMulti() : snippet.previousChartOptions.chartYMulti,
        chartScope: typeof snippet.chartScope() !== 'undefined' ? snippet.chartScope() : snippet.previousChartOptions.chartScope,
        chartTimelineType: typeof snippet.chartTimelineType() !== 'undefined' ? snippet.chartTimelineType() : snippet.previousChartOptions.chartTimelineType,
        chartSorting: typeof snippet.chartSorting() !== 'undefined' ? snippet.chartSorting() : snippet.previousChartOptions.chartSorting,
        chartScatterGroup: typeof snippet.chartScatterGroup() !== 'undefined' ? snippet.chartScatterGroup() : snippet.previousChartOptions.chartScatterGroup,
        chartScatterSize: typeof snippet.chartScatterSize() !== 'undefined' ? snippet.chartScatterSize() : snippet.previousChartOptions.chartScatterSize
      };
    };
    self.openNotebook = function (uuid, queryTab, skipUrlChange, callback, session) {
      var deferredOpen = new (jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred)();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().get('/desktop/api2/doc/', {
        uuid: uuid,
        data: true,
        dependencies: true
      }, function (data) {
        if (data.status == 0) {
          data.data.dependents = data.dependents;
          data.data.can_write = data.user_perms.can_write;
          if (session) {
            // backend doesn't store session, but can reuse an opened one.
            data.data.sessions = [session];
          }
          var notebook = data.data;
          self.loadNotebook(notebook, queryTab);
          if (typeof skipUrlChange === 'undefined' && !self.isNotificationManager()) {
            if (self.editorMode()) {
              self.editorType(data.document.type.substring('query-'.length));
              if (!self.isNotificationManager()) {
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish(_editor_events__WEBPACK_IMPORTED_MODULE_7__.ACTIVE_SNIPPET_CONNECTOR_CHANGED_EVENT, self.activeConnector());
              }
              self.changeURL(self.URLS.editor + '?editor=' + data.document.id + '&type=' + self.editorType());
            } else {
              self.changeURL(self.URLS.notebook + '?notebook=' + data.document.id);
            }
          }
          if (callback) {
            callback();
          }
          deferredOpen.resolve();
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_16__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
          deferredOpen.reject();
          self.newNotebook();
        }
      });
      return deferredOpen.promise();
    };
    self.newNotebook = function (editorType, callback, queryTab) {
      var connectorId = editorType || options.editor_type;
      if (!self.isNotificationManager()) {
        self.activeConnector((0,config_hueConfig__WEBPACK_IMPORTED_MODULE_9__.findEditorConnector)(function (connector) {
          return connector.id === connectorId;
        }));
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish(_editor_events__WEBPACK_IMPORTED_MODULE_7__.ACTIVE_SNIPPET_CONNECTOR_CHANGED_EVENT, self.activeConnector());
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/create_notebook', {
        type: connectorId,
        directory_uuid: (0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_14__["default"])('directory_uuid'),
        gist: self.isNotificationManager() ? undefined : (0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_14__["default"])('gist')
      }, function (data) {
        self.loadNotebook(data.notebook);
        if (self.editorMode() && !self.isNotificationManager()) {
          var snippet = self.selectedNotebook().snippets().length === 0 ? self.selectedNotebook().newSnippet(self.editorType()) : self.selectedNotebook().snippets()[0];
          if (queryTab && ['queryHistory', 'savedQueries', 'queryBuilderTab'].indexOf(queryTab) > -1) {
            snippet.currentQueryTab(queryTab);
          }
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('detach.scrolls', self.selectedNotebook().snippets()[0]);
          if ((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_14__["default"])('type') === '') {
            (0,utils_url_changeURLParameter__WEBPACK_IMPORTED_MODULE_13__["default"])('type', self.editorType());
          }
          if (!self.isNotificationManager()) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish(_editor_events__WEBPACK_IMPORTED_MODULE_7__.ACTIVE_SNIPPET_CONNECTOR_CHANGED_EVENT, self.activeConnector());
          }
        }
        if (callback) {
          callback();
        }
      });
    };
    self.saveNotebook = function () {
      self.selectedNotebook().save();
    };
    self.saveAsNotebook = function () {
      self.selectedNotebook().id(null);
      self.selectedNotebook().uuid((0,utils_string_UUID__WEBPACK_IMPORTED_MODULE_15__["default"])());
      self.selectedNotebook().parentSavedQueryUuid(null);
      self.selectedNotebook().save(function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('assist.document.refresh');
      });
    };
    self.showContextPopover = function (field, event) {
      var $source = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target && event.target.nodeName !== 'A' ? event.target.parentElement : event.target);
      var offset = $source.offset();
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('context.popover.show', {
        data: {
          type: 'catalogEntry',
          catalogEntry: field.catalogEntry
        },
        onSampleClick: field.value,
        showInAssistEnabled: true,
        sourceType: self.editorType(),
        orientation: 'bottom',
        defaultDatabase: 'default',
        pinEnabled: false,
        source: {
          element: event.target,
          left: offset.left,
          top: offset.top - 3,
          right: offset.left + $source.width() + 1,
          bottom: offset.top + $source.height() - 3
        }
      });
    };
  }
  return _createClass(NotebookViewModel, [{
    key: "prepareShareModal",
    value: function prepareShareModal() {
      var selectedNotebookUuid = this.selectedNotebook() && this.selectedNotebook().uuid();
      if (selectedNotebookUuid) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('doc.show.share.modal', selectedNotebookUuid);
      }
    }
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/notebook/aceAutocompleteWrapper.js":
/*!*****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/notebook/aceAutocompleteWrapper.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_hdfsAutocompleter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/hdfsAutocompleter */ "./desktop/core/src/desktop/js/utils/hdfsAutocompleter.js");
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


var AceAutocompleteWrapper = /*#__PURE__*/function () {
  /**
   * @param {Object} options {object}
   * @param options.snippet
   * @param options.user
   * @param options.optEnabled
   * @constructor
   */
  function AceAutocompleteWrapper(options) {
    _classCallCheck(this, AceAutocompleteWrapper);
    var self = this;
    self.snippet = options.snippet;
    self.topTables = {};
    var initializeAutocompleter = function initializeAutocompleter() {
      self.autocompleter = new _utils_hdfsAutocompleter__WEBPACK_IMPORTED_MODULE_0__["default"]({
        user: options.user,
        snippet: options.snippet
      });
    };
    if (window.ENABLE_HUE_5) {
      self.snippet.dialect.subscribe(function () {
        initializeAutocompleter();
      });
    } else {
      self.snippet.type.subscribe(function () {
        initializeAutocompleter();
      });
    }
    initializeAutocompleter();
  }

  // TODO: See why we need this one.
  return _createClass(AceAutocompleteWrapper, [{
    key: "initializeAutocompleter",
    value: function initializeAutocompleter() {}

    // ACE Format for autocompleter
  }, {
    key: "getCompletions",
    value: function getCompletions(editor, session, pos, prefix, callback) {
      var self = this;
      if (!self.autocompleter) {
        return;
      }
      var before = editor.getTextBeforeCursor();
      var after = editor.getTextAfterCursor(';');
      try {
        self.autocomplete(before, after, function (result) {
          callback(null, result);
        }, editor);
      } catch (err) {
        editor.hideSpinner();
      }
    }
  }, {
    key: "getDocTooltip",
    value: function getDocTooltip(item) {
      var self = this;
      return self.autocompleter.getDocTooltip(item);
    }
  }, {
    key: "autocomplete",
    value: function autocomplete(beforeCursor, afterCursor, callback, editor) {
      var self = this;
      if (self.autocompleter) {
        self.autocompleter.autocomplete(beforeCursor, afterCursor, callback, editor);
      }
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AceAutocompleteWrapper);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/notebook/chartTransformers.js":
/*!************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/notebook/chartTransformers.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_hueColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/hueColors */ "./desktop/core/src/desktop/js/utils/hueColors.js");
/* harmony import */ var utils_html_html2text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/html/html2text */ "./desktop/core/src/desktop/js/utils/html/html2text.ts");
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




var isNotNullForCharts = function isNotNullForCharts(val) {
  return val !== 'NULL' && val !== null;
};
var jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
var pieChartTransformer = function pieChartTransformer(rawDatum) {
  var _data = [];
  if (rawDatum.snippet.chartX() != null && rawDatum.snippet.chartYSingle() != null) {
    var _idxValue = -1;
    var _idxLabel = -1;
    rawDatum.snippet.result.meta().forEach(function (col, idx) {
      if (col.name === rawDatum.snippet.chartX()) {
        _idxLabel = idx;
      }
      if (col.name === rawDatum.snippet.chartYSingle()) {
        _idxValue = idx;
      }
    });
    var colors = _utils_hueColors__WEBPACK_IMPORTED_MODULE_1__["default"].cuiD3Scale();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(rawDatum.counts()).each(function (cnt, item) {
      if (isNotNullForCharts(item[_idxValue])) {
        var val = item[_idxValue] * 1;
        if (isNaN(val)) {
          val = 0;
        }
        _data.push({
          label: (0,utils_html_html2text__WEBPACK_IMPORTED_MODULE_2__["default"])(item[_idxLabel]),
          value: val,
          color: colors[cnt % colors.length],
          obj: item
        });
      }
    });
  }
  if (rawDatum.sorting === 'asc') {
    _data.sort(function (a, b) {
      return a.value - b.value;
    });
  } else if (rawDatum.sorting === 'desc') {
    _data.sort(function (a, b) {
      return b.value - a.value;
    });
  }
  if (rawDatum.snippet.chartLimit()) {
    _data = _data.slice(0, rawDatum.snippet.chartLimit());
  }
  return _data;
};
var mapChartTransformer = function mapChartTransformer(rawDatum) {
  var _data = [];
  if (rawDatum.snippet.chartX() != null && rawDatum.snippet.chartYSingle() != null) {
    var _idxRegion = -1;
    var _idxValue = -1;
    rawDatum.snippet.result.meta().forEach(function (col, idx) {
      if (col.name === rawDatum.snippet.chartX()) {
        _idxRegion = idx;
      }
      if (col.name === rawDatum.snippet.chartYSingle()) {
        _idxValue = idx;
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(rawDatum.counts()).each(function (cnt, item) {
      if (isNotNullForCharts(item[_idxValue]) && isNotNullForCharts(item[_idxRegion])) {
        _data.push({
          label: item[_idxRegion],
          value: item[_idxValue],
          obj: item
        });
      }
    });
  }
  if (rawDatum.snippet.chartLimit()) {
    _data = _data.slice(0, rawDatum.snippet.chartLimit());
  }
  return _data;
};

// The leaflet map can freeze the browser with numbers outside the map
var MIN_LAT = -90;
var MAX_LAT = 90;
var MIN_LNG = -180;
var MAX_LNG = 180;
var leafletMapChartTransformer = function leafletMapChartTransformer(rawDatum) {
  var _data = [];
  if (rawDatum.snippet.chartX() != null && rawDatum.snippet.chartYSingle() != null) {
    var _idxLat = -1;
    var _idxLng = -1;
    var _idxLabel = -1;
    var _idxHeat = -1;
    rawDatum.snippet.result.meta().forEach(function (col, idx) {
      if (col.name === rawDatum.snippet.chartX()) {
        _idxLat = idx;
      }
      if (col.name === rawDatum.snippet.chartYSingle()) {
        _idxLng = idx;
      }
      if (col.name === rawDatum.snippet.chartMapLabel()) {
        _idxLabel = idx;
      }
      if (col.name === rawDatum.snippet.chartMapHeat()) {
        _idxHeat = idx;
      }
    });
    if (rawDatum.snippet.chartMapLabel() != null) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(rawDatum.counts()).each(function (cnt, item) {
        if (isNotNullForCharts(item[_idxLat]) && isNotNullForCharts(item[_idxLng])) {
          _data.push({
            lat: Math.min(Math.max(MIN_LAT, item[_idxLat]), MAX_LAT),
            lng: Math.min(Math.max(MIN_LNG, item[_idxLng]), MAX_LNG),
            label: (0,utils_html_html2text__WEBPACK_IMPORTED_MODULE_2__["default"])(item[_idxLabel]),
            isHeat: rawDatum.snippet.chartMapType() === 'heat',
            intensity: _idxHeat > -1 ? item[_idxHeat] * 1 != NaN ? item[_idxHeat] * 1 : null : null,
            obj: item
          });
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(rawDatum.counts()).each(function (cnt, item) {
        if (isNotNullForCharts(item[_idxLat]) && isNotNullForCharts(item[_idxLng])) {
          _data.push({
            lat: Math.min(Math.max(MIN_LAT, item[_idxLat]), MAX_LAT),
            lng: Math.min(Math.max(MIN_LNG, item[_idxLng]), MAX_LNG),
            isHeat: rawDatum.snippet.chartMapType() === 'heat',
            intensity: _idxHeat > -1 ? item[_idxHeat] * 1 != NaN ? item[_idxHeat] * 1 : null : null,
            obj: item
          });
        }
      });
    }
  }
  if (rawDatum.snippet.chartLimit()) {
    _data = _data.slice(0, rawDatum.snippet.chartLimit());
  }
  return _data;
};
var timelineChartTransformer = function timelineChartTransformer(rawDatum) {
  var _datum = [];
  var _plottedSerie = 0;
  rawDatum.snippet.result.meta().forEach(function (meta) {
    if (rawDatum.snippet.chartYMulti().indexOf(meta.name) > -1) {
      var col = meta.name;
      var _idxValue = -1;
      var _idxLabel = -1;
      rawDatum.snippet.result.meta().forEach(function (icol, idx) {
        if (icol.name === rawDatum.snippet.chartX()) {
          _idxLabel = idx;
        }
        if (icol.name === col) {
          _idxValue = idx;
        }
      });
      if (_idxValue > -1) {
        var _data = [];
        var colors = _utils_hueColors__WEBPACK_IMPORTED_MODULE_1__["default"].cuiD3Scale();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(rawDatum.counts()).each(function (cnt, item) {
          if (isNotNullForCharts(item[_idxLabel]) && isNotNullForCharts(item[_idxValue])) {
            _data.push({
              series: _plottedSerie,
              x: new Date(moment((0,utils_html_html2text__WEBPACK_IMPORTED_MODULE_2__["default"])(item[_idxLabel])).valueOf()),
              y: item[_idxValue] * 1,
              color: colors[_plottedSerie % colors.length],
              obj: item
            });
          }
        });
        if (rawDatum.sorting === 'asc') {
          _data.sort(function (a, b) {
            return a.y - b.y;
          });
        }
        if (rawDatum.sorting === 'desc') {
          _data.sort(function (a, b) {
            return b.y - a.y;
          });
        }
        if (rawDatum.snippet.chartLimit()) {
          _data = _data.slice(0, rawDatum.snippet.chartLimit());
        }
        _datum.push({
          key: col,
          values: _data
        });
        _plottedSerie++;
      }
    }
  });
  return _datum;
};
var multiSerieChartTransformer = function multiSerieChartTransformer(rawDatum) {
  var _datum = [];
  if (rawDatum.snippet.chartX() != null && rawDatum.snippet.chartYMulti().length > 0) {
    var _plottedSerie = 0;
    if (typeof rawDatum.snippet.chartXPivot() !== 'undefined') {
      var _idxValue = -1;
      var _idxLabel = -1;
      var _isXDate = false;
      rawDatum.snippet.result.meta().forEach(function (icol, idx) {
        if (icol.name === rawDatum.snippet.chartX()) {
          _isXDate = icol.type.toUpperCase().indexOf('DATE') > -1;
          _idxLabel = idx;
        }
        if (icol.name === rawDatum.snippet.chartYSingle()) {
          _idxValue = idx;
        }
      });
      rawDatum.snippet.result.meta().forEach(function (meta, cnt) {
        if (rawDatum.snippet.chartXPivot() === meta.name) {
          var _idxPivot = cnt;
          var colors = _utils_hueColors__WEBPACK_IMPORTED_MODULE_1__["default"].cuiD3Scale();
          var pivotValues = jquery__WEBPACK_IMPORTED_MODULE_0___default().map(rawDatum.counts(), function (p) {
            return p[_idxPivot];
          });
          pivotValues = pivotValues.filter(function (item, pos) {
            return pivotValues.indexOf(item) === pos;
          });
          pivotValues.forEach(function (val, pivotCnt) {
            var _data = [];
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(rawDatum.counts()).each(function (cnt, item) {
              if (item[_idxPivot] === val) {
                if (isNotNullForCharts(item[_idxValue]) && isNotNullForCharts(item[_idxLabel])) {
                  _data.push({
                    x: _isXDate ? moment(item[_idxLabel]) : (0,utils_html_html2text__WEBPACK_IMPORTED_MODULE_2__["default"])(item[_idxLabel]),
                    y: item[_idxValue] * 1,
                    color: colors[pivotCnt % colors.length],
                    obj: item
                  });
                }
              }
            });
            _datum.push({
              key: (0,utils_html_html2text__WEBPACK_IMPORTED_MODULE_2__["default"])(val),
              values: _data
            });
          });
        }
      });

      // fills in missing values
      var longest = 0;
      var allXValues = [];
      _datum.forEach(function (d) {
        d.values.forEach(function (val) {
          if (allXValues.indexOf(val.x) === -1) {
            allXValues.push(val.x);
          }
        });
      });
      _datum.forEach(function (d) {
        allXValues.forEach(function (val) {
          if (!d.values.some(function (item) {
            return item.x === val;
          })) {
            var zeroObj = jQuery.extend({}, d.values[0]);
            zeroObj.y = 0;
            zeroObj.x = val;
            d.values.push(zeroObj);
          }
        });
        if (d.values.length > longest) {
          longest = d.values.length;
        }
      });

      // this is to avoid D3 js errors when the data the user is trying to display is bogus
      if (allXValues.length < longest) {
        _datum.forEach(function (d) {
          for (var i = d.values.length; i < longest; i++) {
            var zeroObj = jQuery.extend({}, d.values[0]);
            zeroObj.y = 0;
            zeroObj.x = '';
            d.values.push(zeroObj);
          }
        });
      }
      if (rawDatum.snippet.chartLimit()) {
        _datum = _datum.slice(0, rawDatum.snippet.chartLimit());
      }
      if (rawDatum.sorting === 'desc') {
        _datum.forEach(function (d) {
          d.values.sort(function (a, b) {
            if (a.x > b.x) {
              return -1;
            }
            if (a.x < b.x) {
              return 1;
            }
            return 0;
          });
        });
      } else {
        _datum.forEach(function (d) {
          d.values.sort(function (a, b) {
            if (a.x > b.x) {
              return 1;
            }
            if (a.x < b.x) {
              return -1;
            }
            return 0;
          });
        });
      }
    } else {
      rawDatum.snippet.result.meta().forEach(function (meta) {
        if (rawDatum.snippet.chartYMulti().indexOf(meta.name) > -1) {
          var col = meta.name;
          var _idxValue2 = -1;
          var _idxLabel2 = -1;
          var _isXDate2 = false;
          rawDatum.snippet.result.meta().forEach(function (icol, idx) {
            if (icol.name === rawDatum.snippet.chartX()) {
              _isXDate2 = icol.type.toUpperCase().indexOf('DATE') > -1;
              _idxLabel2 = idx;
            }
            if (icol.name === col) {
              _idxValue2 = idx;
            }
          });
          if (_idxValue2 > -1) {
            var _data = [];
            var colors = _utils_hueColors__WEBPACK_IMPORTED_MODULE_1__["default"].cuiD3Scale();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(rawDatum.counts()).each(function (cnt, item) {
              if (isNotNullForCharts(item[_idxValue2]) && isNotNullForCharts(item[_idxLabel2])) {
                _data.push({
                  series: _plottedSerie,
                  x: _isXDate2 ? moment(item[_idxLabel2]) : (0,utils_html_html2text__WEBPACK_IMPORTED_MODULE_2__["default"])(item[_idxLabel2]),
                  y: item[_idxValue2] * 1,
                  color: colors[cnt % colors.length],
                  obj: item
                });
              }
            });
            if (rawDatum.sorting === 'asc') {
              _data.sort(function (a, b) {
                return a.y - b.y;
              });
            }
            if (rawDatum.sorting === 'desc') {
              _data.sort(function (a, b) {
                return b.y - a.y;
              });
            }
            if (rawDatum.snippet.chartLimit()) {
              _data = _data.slice(0, rawDatum.snippet.chartLimit());
            }
            _datum.push({
              key: col,
              values: _data
            });
            _plottedSerie++;
          }
        }
      });
    }
  }
  return _datum;
};
var scatterChartTransformer = function scatterChartTransformer(rawDatum) {
  var datum = {};
  if (rawDatum.snippet.chartX() != null && rawDatum.snippet.chartYSingle() != null) {
    var idxX = -1;
    var idxY = -1;
    var idxSize = -1;
    var idxGroup = -1;
    rawDatum.snippet.result.meta().forEach(function (icol, idx) {
      if (icol.name === rawDatum.snippet.chartX()) {
        idxX = idx;
      }
      if (icol.name === rawDatum.snippet.chartYSingle()) {
        idxY = idx;
      }
      if (icol.name === rawDatum.snippet.chartScatterSize()) {
        idxSize = idx;
      }
      if (icol.name === rawDatum.snippet.chartScatterGroup()) {
        idxGroup = idx;
      }
    });
    if (idxX > -1 && idxY > -1) {
      var createAndAddToArray = function createAndAddToArray(key, item) {
        if (!datum[key]) {
          datum[key] = [];
        }
        if (isNotNullForCharts(item[idxX]) && isNotNullForCharts(item[idxY])) {
          datum[key].push({
            x: item[idxX],
            y: item[idxY],
            shape: 'circle',
            size: idxSize > -1 ? item[idxSize] : 100,
            obj: item
          });
        }
      };
      if (idxGroup > -1) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(rawDatum.counts()).each(function (cnt, item) {
          createAndAddToArray(item[idxGroup], item);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(rawDatum.counts()).each(function (cnt, item) {
          createAndAddToArray('distro', item);
        });
      }
    }
  }
  var returndDatum = [];
  Object.keys(datum).forEach(function (key) {
    returndDatum.push({
      key: key,
      values: rawDatum.snippet.chartLimit() ? datum[key].slice(0, rawDatum.snippet.chartLimit()) : datum[key]
    });
  });
  return returndDatum;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  pie: pieChartTransformer,
  map: mapChartTransformer,
  leafletMap: leafletMapChartTransformer,
  timeline: timelineChartTransformer,
  multiSerie: multiSerieChartTransformer,
  scatter: scatterChartTransformer
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/notebook/notebook.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/notebook/notebook.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout.mapping */ "./node_modules/knockout.mapping/knockout.mapping.js");
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout_mapping__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session */ "./desktop/core/src/desktop/js/apps/notebook/session.js");
/* harmony import */ var _snippet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snippet */ "./desktop/core/src/desktop/js/apps/notebook/snippet.js");
/* harmony import */ var _ko_components_assist_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ko/components/assist/events */ "./desktop/core/src/desktop/js/ko/components/assist/events.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/hueAnalytics */ "./desktop/core/src/desktop/js/utils/hueAnalytics.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
/* harmony import */ var utils_string_UUID__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/string/UUID */ "./desktop/core/src/desktop/js/utils/string/UUID.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
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













var NOTEBOOK_MAPPING = {
  ignore: ['ace', 'aceMode', 'autocompleter', 'availableDatabases', 'availableSnippets', 'avoidClosing', 'canWrite', 'cleanedDateTimeMeta', 'cleanedMeta', 'cleanedNumericMeta', 'cleanedStringMeta', 'dependents', 'errorLoadingQueries', 'hasProperties', 'history', 'images', 'inFocus', 'queries', 'saveResultsModalVisible', 'selectedStatement', 'snippetImage', 'user', 'positionStatement', 'lastExecutedStatement', 'downloadResultViewModel']
};
var Notebook = /*#__PURE__*/_createClass(function Notebook(vm, notebook) {
  _classCallCheck(this, Notebook);
  var self = this;
  self.id = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.id != 'undefined' && notebook.id != null ? notebook.id : null);
  self.uuid = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.uuid != 'undefined' && notebook.uuid != null ? notebook.uuid : (0,utils_string_UUID__WEBPACK_IMPORTED_MODULE_11__["default"])());
  self.name = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.name != 'undefined' && notebook.name != null ? notebook.name : 'My Notebook');
  self.description = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.description != 'undefined' && notebook.description != null ? notebook.description : '');
  self.type = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.type != 'undefined' && notebook.type != null ? notebook.type : 'notebook');
  self.initialType = self.type().replace('query-', '');
  self.coordinatorUuid = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.coordinatorUuid != 'undefined' && notebook.coordinatorUuid != null ? notebook.coordinatorUuid : null);
  self.isHistory = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.is_history != 'undefined' && notebook.is_history != null ? notebook.is_history : false);
  self.isManaged = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.isManaged != 'undefined' && notebook.isManaged != null ? notebook.isManaged : false);
  self.parentSavedQueryUuid = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.parentSavedQueryUuid != 'undefined' && notebook.parentSavedQueryUuid != null ? notebook.parentSavedQueryUuid : null); // History parent
  self.isSaved = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.isSaved != 'undefined' && notebook.isSaved != null ? notebook.isSaved : false);
  self.canWrite = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.can_write != 'undefined' && notebook.can_write != null ? notebook.can_write : true);
  self.onSuccessUrl = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.onSuccessUrl != 'undefined' && notebook.onSuccessUrl != null ? notebook.onSuccessUrl : null);
  self.pubSubUrl = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.pubSubUrl != 'undefined' && notebook.pubSubUrl != null ? notebook.pubSubUrl : null);
  self.isPresentationModeDefault = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.isPresentationModeDefault != 'undefined' && notebook.isPresentationModeDefault != null ? notebook.isPresentationModeDefault : false);
  self.isPresentationMode = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
  self.isPresentationModeInitialized = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
  self.isPresentationMode.subscribe(function (newValue) {
    if (!newValue) {
      self.cancelExecutingAll();
    }
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.presentation.operate.toggle', newValue); // Problem with headers / row numbers redraw on full screen results
    vm.togglePresentationMode();
    if (newValue) {
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].convert('editor', 'presentation');
    }
  });
  self.presentationSnippets = knockout__WEBPACK_IMPORTED_MODULE_1__.observable({});
  self.isHidingCode = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.isHidingCode != 'undefined' && notebook.isHidingCode != null ? notebook.isHidingCode : false);
  self.snippets = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
  self.selectedSnippet = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(vm.editorType()); // Aka selectedSnippetType
  self.creatingSessionLocks = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
  self.sessions = knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(typeof notebook.sessions != 'undefined' && notebook.sessions != null ? notebook.sessions : [], {
    create: function create(value) {
      return new _session__WEBPACK_IMPORTED_MODULE_4__["default"](vm, value.data);
    }
  });
  self.directoryUuid = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.directoryUuid != 'undefined' && notebook.directoryUuid != null ? notebook.directoryUuid : null);
  self.dependents = knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(typeof notebook.dependents != 'undefined' && notebook.dependents != null ? notebook.dependents : []);
  self.dependentsCoordinator = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(self.dependents(), function (doc) {
      return doc.type() == 'oozie-coordinator2' && doc.is_managed() == true;
    });
  });
  if (self.dependentsCoordinator().length > 0 && !self.coordinatorUuid()) {
    self.coordinatorUuid(self.dependentsCoordinator()[0].uuid());
  }
  self.history = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(vm.selectedNotebook() && vm.selectedNotebook().history().length > 0 && vm.selectedNotebook().history()[0].type == self.type() ? vm.selectedNotebook().history() : []);

  // This is to keep the "Saved Query" tab selected when opening a doc from the left assist
  // TODO: Refactor code to reflect purpose
  self.history.subscribe(function (val) {
    if (self.id() == null && val.length == 0 && self.historyFilter() === '' && !vm.isNotificationManager()) {
      self.snippets()[0].currentQueryTab('savedQueries');
    }
  });
  self.historyFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
  self.historyFilterVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
  self.historyFilter.extend({
    rateLimit: {
      method: 'notifyWhenChangesStop',
      timeout: 900
    }
  });
  self.historyFilter.subscribe(function (val) {
    if (self.historyCurrentPage() != 1) {
      self.historyCurrentPage(1);
    } else {
      self.fetchHistory();
    }
  });
  self.loadingHistory = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(self.history().length == 0);
  self.historyInitialHeight = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(0).extend({
    throttle: 1000
  });
  self.forceHistoryInitialHeight = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
  self.historyCurrentPage = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(vm.selectedNotebook() ? vm.selectedNotebook().historyCurrentPage() : 1);
  self.historyCurrentPage.subscribe(function (val) {
    self.fetchHistory();
  });
  self.historyTotalPages = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(vm.selectedNotebook() ? vm.selectedNotebook().historyTotalPages() : 1);
  self.schedulerViewModel = null;
  self.schedulerViewModelIsLoaded = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
  self.schedulerViewerViewModel = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
  self.isBatchable = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
    return self.snippets().length > 0 && jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(self.snippets(), function (snippet) {
      return snippet.isBatchable();
    }).length == self.snippets().length;
  });
  self.isExecutingAll = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(!!notebook.isExecutingAll);
  self.cancelExecutingAll = function () {
    var index = self.executingAllIndex();
    if (self.isExecutingAll() && self.snippets()[index]) {
      self.snippets()[index].cancel();
    }
  };
  self.executingAllIndex = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebook.executingAllIndex || 0);
  self.retryModalConfirm = null;
  self.retryModalCancel = null;
  self.avoidClosing = false;
  self.canSave = vm.canSave;
  self.getSession = function (session_type) {
    var _s = null;
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(self.sessions(), function (index, s) {
      if (s.type() == session_type) {
        _s = s;
        return false;
      }
    });
    return _s;
  };
  self.getSnippets = function (type) {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(self.snippets(), function (snippet) {
      return snippet.type() == type;
    });
  };
  self.unloaded = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
  self.unload = function () {
    self.unloaded(true);
    var currentQueries = null;
    self.snippets().forEach(function (snippet) {
      if (snippet.checkStatusTimeout != null) {
        clearTimeout(snippet.checkStatusTimeout);
        snippet.checkStatusTimeout = null;
      }
      if (currentQueries == null) {
        currentQueries = snippet.queries();
      }
    });
    return currentQueries;
  };
  self.restartSession = function (session, callback) {
    if (session.restarting()) {
      return;
    }
    session.restarting(true);
    var snippets = self.getSnippets(session.type());
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(snippets, function (index, snippet) {
      snippet.status('loading');
    });
    self.closeSession(session, true, function () {
      self.createSession(session, function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(snippets, function (index, snippet) {
          snippet.status('ready');
        });
        session.restarting(false);
        if (callback) {
          callback();
        }
      }, function () {
        session.restarting(false);
      });
    });
  };
  self.addSession = function (session) {
    var toRemove = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(self.sessions(), function (index, s) {
      if (s.type() == session.type()) {
        toRemove.push(s);
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(toRemove, function (index, s) {
      self.sessions.remove(s);
    });
    self.sessions.push(session);
  };
  self.addSnippet = function (snippet, skipSession) {
    var _snippet = new _snippet__WEBPACK_IMPORTED_MODULE_5__["default"](vm, self, snippet);
    self.snippets.push(_snippet);
    var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred().done(function () {
      _snippet.init();
    });
    if (self.getSession(_snippet.type()) == null && typeof skipSession == 'undefined') {
      self.createSession(new _session__WEBPACK_IMPORTED_MODULE_4__["default"](vm, {
        type: _snippet.type()
      }), function () {
        deferred.resolve();
      });
    } else {
      deferred.resolve();
    }
    return _snippet;
  };
  self.createSession = function (session, callback, failCallback) {
    if (self.creatingSessionLocks().indexOf(session.type()) != -1) {
      // Create one type of session max
      return;
    } else {
      self.creatingSessionLocks.push(session.type());
    }
    var compute = null;
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(self.getSnippets(session.type()), function (index, snippet) {
      snippet.status('loading');
      if (index == 0) {
        compute = snippet.compute();
      }
    });
    var fail = function fail(message) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(self.getSnippets(session.type()), function (index, snippet) {
        snippet.status('failed');
      });
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
        message: message
      });
      if (failCallback) {
        failCallback();
      }
    };
    jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/create_session', {
      notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext()),
      session: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(session),
      // e.g. {'type': 'pyspark', 'properties': [{'name': driverCores', 'value', '2'}]}
      cluster: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(compute ? compute : '')
    }, function (data) {
      if (data.status == 0) {
        knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(data.session, {}, session);
        if (self.getSession(session.type()) == null) {
          self.addSession(session);
        } else {
          var _session = self.getSession(session.type());
          knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(data.session, {}, _session);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(self.getSnippets(session.type()), function (index, snippet) {
          snippet.status('ready');
        });
        if (callback) {
          setTimeout(callback, 500);
        }
      } else if (data.status == 401) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('showAuthModal', {
          type: session.type(),
          message: data.message
        });
      } else {
        fail(data.message);
      }
    }).fail(function (xhr) {
      if (xhr.status !== 502) {
        fail(xhr.responseText);
      }
    }).always(function () {
      self.creatingSessionLocks.remove(session.type());
    });
  };
  self.authSession = function () {
    self.createSession(new _session__WEBPACK_IMPORTED_MODULE_4__["default"](vm, {
      type: vm.authSessionType(),
      properties: [{
        name: 'user',
        value: vm.authSessionUsername()
      }, {
        name: 'password',
        value: vm.authSessionPassword()
      }]
    }), vm.authSessionCallback() // On new session we don't automatically execute the snippet after the aut. On session expiration we do or we refresh assist DB when login-in.
    );
  };
  self.newSnippet = function (type) {
    if (type) {
      self.selectedSnippet(type);
    }
    var snippet = self.addSnippet({
      type: self.selectedSnippet(),
      result: {}
    });
    window.setTimeout(function () {
      var lastSnippet = snippet;
      if (lastSnippet.ace() != null) {
        lastSnippet.ace().focus();
      }
    }, 100);
    utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'add_snippet/' + (type ? type : self.selectedSnippet()));
    return snippet;
  };
  self.newSnippetAbove = function (id) {
    self.newSnippet();
    var idx = 0;
    self.snippets().forEach(function (snippet, cnt) {
      if (snippet.id() == id) {
        idx = cnt;
      }
    });
    self.snippets(self.snippets().move(self.snippets().length - 1, idx));
  };
  self.getContext = function () {
    return {
      id: self.id,
      uuid: self.uuid,
      parentSavedQueryUuid: self.parentSavedQueryUuid,
      isSaved: self.isSaved,
      sessions: self.sessions,
      type: self.type,
      name: self.name
    };
  };
  self.save = function (callback) {
    utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'save');

    // Remove the result data from the snippets
    // Also do it for presentation mode
    var cp = knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJS(self, NOTEBOOK_MAPPING);
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(cp.snippets.concat(Object.keys(cp.presentationSnippets).map(function (key) {
      return cp.presentationSnippets[key];
    })), function (index, snippet) {
      snippet.result.data.length = 0; // snippet.result.clear() does not work for some reason
      snippet.result.meta.length = 0;
      snippet.result.logs = '';
      snippet.result.fetchedOnce = false;
      snippet.progress = 0; // Remove progress
      snippet.jobs.length = 0;
    });
    if (cp.schedulerViewModel) {
      cp.schedulerViewModel.availableTimezones = [];
    }
    var editorMode = vm.editorMode() || self.isPresentationMode() && vm.editorType() != 'notebook'; // Editor should not convert to Notebook in presentation mode

    jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/notebook/save', {
      notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(cp, NOTEBOOK_MAPPING),
      editorMode: editorMode
    }, function (data) {
      if (data.status == 0) {
        self.id(data.id);
        self.isSaved(true);
        var wasHistory = self.isHistory();
        self.isHistory(false);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_INFO_TOPIC, {
          message: data.message
        });
        if (editorMode) {
          if (!data.save_as) {
            var existingQuery = self.snippets()[0].queries().filter(function (item) {
              return item.uuid() === data.uuid;
            });
            if (existingQuery.length > 0) {
              existingQuery[0].name(data.name);
              existingQuery[0].description(data.description);
              existingQuery[0].last_modified(data.last_modified);
            }
          } else if (self.snippets()[0].queries().length > 0) {
            // Saved queries tab already loaded
            self.snippets()[0].queries.unshift(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(data));
          }
          if (data.save_as) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('assist.document.refresh');
          }
          if (self.coordinatorUuid() && self.schedulerViewModel) {
            self.saveScheduler();
            self.schedulerViewModel.coordinator.refreshParameters();
          }
          if (wasHistory || data.save_as) {
            self.loadScheduler();
          }
          if (self.snippets()[0].downloadResultViewModel && self.snippets()[0].downloadResultViewModel().saveTarget() === 'dashboard') {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('open.link', vm.URLS.report + '&uuid=' + data.uuid + '&statement=' + self.snippets()[0].result.handle().statement_id);
          } else {
            vm.changeURL(vm.URLS.editor + '?editor=' + data.id);
          }
        } else {
          vm.changeURL(vm.URLS.notebook + '?notebook=' + data.id);
        }
        if (typeof callback == 'function') {
          callback();
        }
      } else {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
          message: data.message
        });
      }
    }).fail(function (xhr, textStatus, errorThrown) {
      if (xhr.status !== 502) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
          message: xhr.responseText
        });
      }
    });
  };
  self.close = function () {
    utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'close');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/notebook/close', {
      notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self, NOTEBOOK_MAPPING),
      editorMode: vm.editorMode()
    });
  };
  self.clearResults = function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(self.snippets(), function (index, snippet) {
      snippet.result.clear();
      snippet.status('ready');
    });
  };
  self.executeAll = function () {
    if (self.isExecutingAll() || self.snippets().length === 0) {
      return;
    }
    self.isExecutingAll(true);
    self.executingAllIndex(0);
    self.snippets()[self.executingAllIndex()].execute();
  };
  self.saveDefaultUserProperties = function (session) {
    _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].saveConfiguration({
      app: session.type(),
      properties: session.properties,
      userId: vm.userId
    });
  };
  self.closeAndRemoveSession = function (session) {
    self.closeSession(session, false, function () {
      self.sessions.remove(session);
    });
  };
  self.closeSession = function (session, silent, callback) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/close_session', {
      session: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(session)
    }, function (data) {
      if (!silent && data && data.status != 0 && data.status != -2 && data.message) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
          message: data.message
        });
      }
      if (callback) {
        callback();
      }
    }).fail(function (xhr) {
      if (!silent && xhr.status !== 502) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
          message: xhr.responseText
        });
      }
    });
  };
  self.fetchHistory = function (callback) {
    var QUERIES_PER_PAGE = 50;
    self.loadingHistory(true);
    jquery__WEBPACK_IMPORTED_MODULE_0___default().get('/api/v1/editor/get_history', {
      doc_type: self.selectedSnippet(),
      limit: QUERIES_PER_PAGE,
      page: self.historyCurrentPage(),
      doc_text: self.historyFilter(),
      is_notification_manager: vm.isNotificationManager()
    }, function (data) {
      var parsedHistory = [];
      if (data && data.history) {
        data.history.forEach(function (nbk) {
          parsedHistory.push(self.makeHistoryRecord(nbk.absoluteUrl, nbk.data.statement, nbk.data.lastExecuted, nbk.data.status, nbk.name, nbk.uuid));
        });
      }
      self.history(parsedHistory);
      self.historyTotalPages(Math.ceil(data.count / QUERIES_PER_PAGE));
    }).always(function () {
      self.loadingHistory(false);
      if (callback) {
        callback();
      }
    });
  };
  self.prevHistoryPage = function () {
    if (self.historyCurrentPage() !== 1) {
      self.historyCurrentPage(self.historyCurrentPage() - 1);
    }
  };
  self.nextHistoryPage = function () {
    if (self.historyCurrentPage() < self.historyTotalPages()) {
      self.historyCurrentPage(self.historyCurrentPage() + 1);
    }
  };
  self.updateHistoryFailed = false;
  self.updateHistory = function (statuses, interval) {
    var items = jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(self.history(), function (item) {
      return statuses.indexOf(item.status()) != -1;
    }).slice(0, 25);
    function updateHistoryCall(item) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/check_status', {
        notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON({
          uuid: item.uuid()
        })
      }).done(function (data) {
        var status = data.status == -3 ? 'expired' : data.status == 0 ? data.query_status.status : 'failed';
        if (status && item.status() != status) {
          item.status(status);
        }
      }).fail(function (xhr) {
        items = [];
        self.updateHistoryFailed = true;
        console.warn('Lost connectivity to the Hue history refresh backend.');
      }).always(function () {
        if (items.length > 0) {
          window.setTimeout(function () {
            updateHistoryCall(items.pop());
          }, 1000);
        } else if (!self.updateHistoryFailed) {
          window.setTimeout(function () {
            self.updateHistory(statuses, interval);
          }, interval);
        }
      });
    }
    if (items.length > 0) {
      updateHistoryCall(items.pop());
    } else if (!self.updateHistoryFailed) {
      window.setTimeout(function () {
        self.updateHistory(statuses, interval);
      }, interval);
    }
  };
  self.makeHistoryRecord = function (url, statement, lastExecuted, status, name, uuid) {
    return knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS({
      url: url,
      query: statement.substring(0, 1000) + (statement.length > 1000 ? '...' : ''),
      lastExecuted: lastExecuted,
      status: status,
      name: name,
      uuid: uuid
    });
  };
  self.clearHistory = function (type) {
    utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'clearHistory');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/clear_history', {
      notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext()),
      doc_type: self.selectedSnippet(),
      is_notification_manager: vm.isNotificationManager()
    }, function (data) {
      self.history.removeAll();
      if (self.isHistory()) {
        self.id(null);
        self.uuid((0,utils_string_UUID__WEBPACK_IMPORTED_MODULE_11__["default"])());
        vm.changeURL(vm.URLS.editor + '?type=' + vm.editorType());
      }
    }).fail(function (xhr) {
      if (xhr.status !== 502) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
          message: xhr.responseText
        });
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('hideHistoryModal');
  };
  self.loadScheduler = function () {
    if (typeof vm.CoordinatorEditorViewModel !== 'undefined' && self.isBatchable()) {
      var _action;
      if (self.coordinatorUuid()) {
        _action = 'edit';
      } else {
        _action = 'new';
      }
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'schedule/' + _action);
      var getCoordinator = function getCoordinator() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().get('/scheduler/api/schedule/' + _action + '/', {
          format: 'json',
          document: self.uuid(),
          coordinator: self.coordinatorUuid()
        }, function (data) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#schedulerEditor').length > 0) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('hue4.process.headers', {
              response: data.layout,
              callback: function callback(r) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#schedulerEditor').html(r);
                self.schedulerViewModel = new vm.CoordinatorEditorViewModel(data.coordinator, data.credentials, data.workflows, data.can_edit);
                knockout__WEBPACK_IMPORTED_MODULE_1__.cleanNode(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#schedulerEditor')[0]);
                knockout__WEBPACK_IMPORTED_MODULE_1__.applyBindings(self.schedulerViewModel, jquery__WEBPACK_IMPORTED_MODULE_0___default()('#schedulerEditor')[0]);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('showSubmitPopup');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('showSubmitPopup', function (event, data) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submit-modal-editor').html(data);
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submit-modal-editor').modal('show');
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submit-modal-editor').on('hidden', function () {
                    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('hide.datepicker');
                  });
                  var _sel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submit-form .control-group[rel!="popover"]:visible');
                  if (_sel.length > 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submit-modal-editor .modal-body').height(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submit-modal-editor .modal-body').height() + 60);
                  }
                });
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('render.jqcron');
                self.schedulerViewModel.coordinator.properties.cron_advanced.valueHasMutated(); // Update jsCron enabled status
                self.schedulerViewModel.coordinator.tracker().markCurrentStateAsClean();
                self.schedulerViewModel.isEditing(true);
                self.schedulerViewModelIsLoaded(true);
                if (_action == 'new') {
                  self.schedulerViewModel.coordinator.properties.document(self.uuid()); // Expected for triggering the display
                }
              }
            });
          }
        }).fail(function (xhr) {
          if (xhr.status !== 502) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
              message: xhr.responseText
            });
          }
        });
      };
      getCoordinator();
    }
  };
  self.saveScheduler = function () {
    if (self.isBatchable() && (!self.coordinatorUuid() || self.schedulerViewModel.coordinator.isDirty())) {
      self.schedulerViewModel.coordinator.isManaged(true);
      self.schedulerViewModel.coordinator.properties.document(self.uuid());
      self.schedulerViewModel.save(function (data) {
        if (!self.coordinatorUuid()) {
          self.coordinatorUuid(data.uuid);
          self.save();
        }
      });
    }
  };
  self.showSubmitPopup = function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().get('/scheduler/api/schedule/submit/' + self.coordinatorUuid(), {
      format: 'json'
    }, function (data) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('showSubmitPopup', data);
    }).fail(function (xhr, textStatus, errorThrown) {
      if (xhr.status !== 502) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
          message: xhr.responseText
        });
      }
    });
  };
  self.viewSchedulerId = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof notebook.viewSchedulerId != 'undefined' && notebook.viewSchedulerId != null ? notebook.viewSchedulerId : '');
  self.viewSchedulerId.subscribe(function (newVal) {
    self.save();
  });
  self.isSchedulerJobRunning = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
  self.loadingScheduler = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);

  // Init
  if (notebook.snippets) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(notebook.snippets, function (index, snippet) {
      self.addSnippet(snippet);
    });
    if (typeof notebook.presentationSnippets != 'undefined' && notebook.presentationSnippets != null) {
      // Load
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(notebook.presentationSnippets, function (key, snippet) {
        snippet.status = 'ready'; // Protect from storm of check_statuses
        var _snippet = new _snippet__WEBPACK_IMPORTED_MODULE_5__["default"](vm, self, snippet);
        _snippet.init();
        _snippet.previousChartOptions = vm.getPreviousChartOptions(_snippet);
        self.presentationSnippets()[key] = _snippet;
      });
    }
    if (vm.editorMode() && self.history().length == 0) {
      self.fetchHistory(function () {
        self.updateHistory(['starting', 'running'], 30000);
        self.updateHistory(['available'], 60000 * 5);
      });
    }
  }
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribeOnce(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_6__.ASSIST_DB_PANEL_IS_READY_EVENT, function () {
    if (self.type().indexOf('query') === 0) {
      var whenDatabaseAvailable = function whenDatabaseAvailable(snippet) {
        var lastSelectedDb = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__.getFromLocalStorage)('assist_' + snippet.type() + '_' + snippet.namespace().id + '.lastSelectedDb');
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_6__.ASSIST_SET_DATABASE_EVENT, {
          connector: snippet.connector(),
          namespace: snippet.namespace(),
          name: lastSelectedDb === '' ? '' : snippet.database()
        });
      };
      var whenNamespaceAvailable = function whenNamespaceAvailable(snippet) {
        if (snippet.database()) {
          whenDatabaseAvailable(snippet);
        } else {
          var databaseSub = snippet.database.subscribe(function () {
            databaseSub.dispose();
            whenDatabaseAvailable(snippet);
          });
        }
      };
      var whenSnippetAvailable = function whenSnippetAvailable(snippet) {
        if (snippet.namespace()) {
          whenNamespaceAvailable(snippet);
        } else {
          var namespaceSub = snippet.namespace.subscribe(function () {
            namespaceSub.dispose();
            whenNamespaceAvailable(snippet);
          });
        }
      };
      if (self.snippets().length === 1) {
        whenSnippetAvailable(self.snippets()[0]);
      } else {
        var snippetsSub = self.snippets.subscribe(function (snippets) {
          if (snippets.length === 1) {
            whenSnippetAvailable(snippets[0]);
          }
          snippetsSub.dispose();
        });
      }
    }
  }, vm.huePubSubId);
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_6__.ASSIST_IS_DB_PANEL_READY_EVENT);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notebook);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/notebook/result.js":
/*!*************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/notebook/result.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_string_UUID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/string/UUID */ "./desktop/core/src/desktop/js/utils/string/UUID.ts");
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




var Result = /*#__PURE__*/function () {
  function Result(snippet, result) {
    _classCallCheck(this, Result);
    var self = this;
    jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(snippet, snippet.chartType == 'lines' && {
      // Retire line chart
      chartType: 'bars',
      chartTimelineType: 'line'
    });
    self.id = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.id != 'undefined' && result.id != null ? result.id : (0,utils_string_UUID__WEBPACK_IMPORTED_MODULE_2__["default"])());
    self.type = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.type != 'undefined' && result.type != null ? result.type : 'table');
    self.hasResultset = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.hasResultset != 'undefined' && result.hasResultset != null ? result.hasResultset : true).extend('throttle', 100);
    self.handle = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.handle != 'undefined' && result.handle != null ? result.handle : {});
    self.meta = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(typeof result.meta != 'undefined' && result.meta != null ? result.meta : []);
    var adaptMeta = function adaptMeta() {
      var i = 0;
      self.meta().forEach(function (item) {
        if (typeof item.checked === 'undefined') {
          item.checked = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(true);
          item.checked.subscribe(function () {
            self.filteredMetaChecked(self.filteredMeta().some(function (item) {
              return item.checked();
            }));
          });
        }
        item.type = item.type.replace(/_type/i, '').toLowerCase();
        if (typeof item.originalIndex === 'undefined') {
          item.originalIndex = i;
        }
        i++;
      });
    };
    adaptMeta();
    self.meta.subscribe(adaptMeta);
    self.rows = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.rows != 'undefined' && result.rows != null ? result.rows : null);
    self.hasMore = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.hasMore != 'undefined' && result.hasMore != null ? result.hasMore : false);
    self.statement_id = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.statement_id != 'undefined' && result.statement_id != null ? result.statement_id : 0);
    self.statement_range = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.statement_range != 'undefined' && result.statement_range != null ? result.statement_range : {
      start: {
        row: 0,
        column: 0
      },
      end: {
        row: 0,
        column: 0
      }
    });
    // We don't keep track of any previous selection so prevent entering into batch execution mode after load by setting
    // statements_count to 1. For the case when a selection is not starting at row 0.
    self.statements_count = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(1);
    self.previous_statement_hash = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.previous_statement_hash != 'undefined' && result.previous_statement_hash != null ? result.previous_statement_hash : null);
    self.cleanedMeta = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayFilter(self.meta(), function (item) {
        return item.name != '';
      });
    });
    self.metaFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    self.isMetaFilterVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.filteredMetaChecked = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(true);
    self.filteredColumnCount = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      if (!self.metaFilter() || self.metaFilter().query === '') {
        return self.meta().length - 1;
      }
      return self.filteredMeta().length;
    });
    self.filteredMeta = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      if (!self.metaFilter() || self.metaFilter().query === '') {
        return self.meta();
      }
      return self.meta().filter(function (item) {
        var facets = self.metaFilter().facets;
        var isFacetMatch = !facets || Object.keys(facets).length === 0 || !facets['type']; // So far only type facet is used for SQL
        var isTextMatch = !self.metaFilter().text || self.metaFilter().text.length === 0;
        var match = true;
        if (!isFacetMatch) {
          match = !!facets['type'][item.type];
        }
        if (match && !isTextMatch) {
          match = self.metaFilter().text.every(function (text) {
            return item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
          });
        }
        return match;
      });
    });
    self.autocompleteFromEntries = function (nonPartial, partial) {
      var result = [];
      var partialLower = partial.toLowerCase();
      self.meta().forEach(function (column) {
        if (column.name.toLowerCase().indexOf(partialLower) === 0) {
          result.push(nonPartial + partial + column.name.substring(partial.length));
        } else if (column.name.toLowerCase().indexOf('.' + partialLower) !== -1) {
          result.push(nonPartial + partial + column.name.substring(partial.length + column.name.toLowerCase().indexOf('.' + partialLower) + 1));
        }
      });
      return result;
    };
    self.clickFilteredMetaCheck = function () {
      self.filteredMeta().forEach(function (item) {
        item.checked(self.filteredMetaChecked());
      });
    };
    self.fetchedOnce = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.fetchedOnce != 'undefined' && result.fetchedOnce != null ? result.fetchedOnce : false);
    self.startTime = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.startTime != 'undefined' && result.startTime != null ? new Date(result.startTime) : new Date());
    self.endTime = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.endTime != 'undefined' && result.endTime != null ? new Date(result.endTime) : new Date());
    self.executionTime = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return self.endTime().getTime() - self.startTime().getTime();
    });
    function isNumericColumn(type) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(type, ['tinyint', 'smallint', 'int', 'bigint', 'float', 'double', 'decimal', 'real']) > -1;
    }
    function isDateTimeColumn(type) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(type, ['timestamp', 'date', 'datetime']) > -1;
    }
    function isComplexColumn(type) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(type, ['array', 'map', 'struct']) > -1;
    }
    function isStringColumn(type) {
      return !isNumericColumn(type) && !isDateTimeColumn(type) && !isComplexColumn(type);
    }
    self.cleanedNumericMeta = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayFilter(self.meta(), function (item) {
        return item.name != '' && isNumericColumn(item.type);
      });
    });
    self.cleanedStringMeta = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayFilter(self.meta(), function (item) {
        return item.name != '' && isStringColumn(item.type);
      });
    });
    self.cleanedDateTimeMeta = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayFilter(self.meta(), function (item) {
        return item.name != '' && isDateTimeColumn(item.type);
      });
    });
    self.data = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(typeof result.data != 'undefined' && result.data != null ? result.data : []);
    self.data.extend({
      rateLimit: 50
    });
    self.explanation = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof result.explanation != 'undefined' && result.explanation != null ? result.explanation : '');
    self.images = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(typeof result.images != 'undefined' && result.images != null ? result.images : []);
    self.images.extend({
      rateLimit: 50
    });
    self.logs = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
    self.logLines = 0;
    self.hasSomeResults = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return self.hasResultset() && self.data().length > 0; // status() == 'available'
    });
    self.getContext = function () {
      return {
        id: self.id,
        type: self.type,
        handle: self.handle
      };
    };
    self.clear = function () {
      self.fetchedOnce(false);
      self.hasMore(false);
      self.statement_range({
        start: {
          row: 0,
          column: 0
        },
        end: {
          row: 0,
          column: 0
        }
      });
      self.meta.removeAll();
      self.data.removeAll();
      self.images.removeAll();
      self.logs('');
      self.handle({
        // Keep multiquery indexing
        has_more_statements: self.handle()['has_more_statements'],
        statement_id: self.handle()['statement_id'],
        statements_count: self.handle()['statements_count'],
        previous_statement_hash: self.handle()['previous_statement_hash']
      });
      self.startTime(new Date());
      self.endTime(new Date());
      self.explanation('');
      self.logLines = 0;
      self.rows(null);
    };
  }
  return _createClass(Result, [{
    key: "cancelBatchExecution",
    value: function cancelBatchExecution() {
      var self = this;
      self.statements_count(1);
      self.hasMore(false);
      self.statement_range({
        start: {
          row: 0,
          column: 0
        },
        end: {
          row: 0,
          column: 0
        }
      });
      self.handle()['statement_id'] = 0;
      self.handle()['start'] = {
        row: 0,
        column: 0
      };
      self.handle()['end'] = {
        row: 0,
        column: 0
      };
      self.handle()['has_more_statements'] = false;
      self.handle()['previous_statement_hash'] = '';
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Result);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/notebook/session.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/notebook/session.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout.mapping */ "./node_modules/knockout.mapping/knockout.mapping.js");
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout_mapping__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
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




var Session = /*#__PURE__*/_createClass(function Session(vm, session) {
  _classCallCheck(this, Session);
  var self = this;
  knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(session, {}, self);
  self.selectedSessionProperty = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
  self.restarting = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
  if (!knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(self.properties)) {
    self.properties = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
  }
  self.availableNewProperties = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
    var addedIndex = {};
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(self.properties(), function (index, property) {
      addedIndex[property.key] = true;
    });
    var result = jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(vm.availableSessionProperties(), function (property) {
      return !addedIndex[property.name];
    });
    return result;
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Session);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/notebook/snippet.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/notebook/snippet.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout.mapping */ "./node_modules/knockout.mapping/knockout.mapping.js");
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout_mapping__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var snarkdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! snarkdown */ "./node_modules/snarkdown/dist/snarkdown.es.js");
/* harmony import */ var _aceAutocompleteWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aceAutocompleteWrapper */ "./desktop/core/src/desktop/js/apps/notebook/aceAutocompleteWrapper.js");
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! catalog/dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var utils_html_deXSS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/html/deXSS */ "./desktop/core/src/desktop/js/utils/html/deXSS.ts");
/* harmony import */ var utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/hueAnalytics */ "./desktop/core/src/desktop/js/utils/hueAnalytics.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./result */ "./desktop/core/src/desktop/js/apps/notebook/result.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./session */ "./desktop/core/src/desktop/js/apps/notebook/session.js");
/* harmony import */ var parse_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! parse/utils */ "./desktop/core/src/desktop/js/parse/utils.ts");
/* harmony import */ var _ko_components_ko_shareGistModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ko/components/ko.shareGistModal */ "./desktop/core/src/desktop/js/ko/components/ko.shareGistModal.js");
/* harmony import */ var _api_apiUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../api/apiUtils */ "./desktop/core/src/desktop/js/api/apiUtils.js");
/* harmony import */ var _editor_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../editor/events */ "./desktop/core/src/desktop/js/apps/editor/events.js");
/* harmony import */ var config_hueConfig__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! config/hueConfig */ "./desktop/core/src/desktop/js/config/hueConfig.ts");
/* harmony import */ var _ko_components_assist_events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ko/components/assist/events */ "./desktop/core/src/desktop/js/ko/components/assist/events.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var sql_workers_events__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! sql/workers/events */ "./desktop/core/src/desktop/js/sql/workers/events.ts");
/* harmony import */ var _ko_bindings_ace_aceLocationHandler__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../ko/bindings/ace/aceLocationHandler */ "./desktop/core/src/desktop/js/ko/bindings/ace/aceLocationHandler.js");
/* harmony import */ var utils_string_UUID__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! utils/string/UUID */ "./desktop/core/src/desktop/js/utils/string/UUID.ts");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
























var NOTEBOOK_MAPPING = {
  ignore: ['ace', 'aceMode', 'autocompleter', 'availableDatabases', 'availableSnippets', 'avoidClosing', 'canWrite', 'cleanedDateTimeMeta', 'cleanedMeta', 'cleanedNumericMeta', 'cleanedStringMeta', 'dependents', 'errorLoadingQueries', 'hasProperties', 'history', 'images', 'inFocus', 'queries', 'saveResultsModalVisible', 'selectedStatement', 'snippetImage', 'user', 'positionStatement', 'lastExecutedStatement', 'downloadResultViewModel']
};
var COMPATIBILITY_SOURCE_PLATFORMS = {
  teradata: {
    name: 'Teradata',
    value: 'teradata'
  },
  oracle: {
    name: 'Oracle',
    value: 'oracle'
  },
  netezza: {
    name: 'Netezza',
    value: 'netezza'
  },
  impala: {
    name: 'Impala',
    value: 'impala'
  },
  hive: {
    name: 'Hive',
    value: 'hive'
  },
  db2: {
    name: 'DB2',
    value: 'db2'
  },
  greenplum: {
    name: 'Greenplum',
    value: 'greenplum'
  },
  mysql: {
    name: 'MySQL',
    value: 'mysql'
  },
  postgresql: {
    name: 'PostgreSQL',
    value: 'postgresql'
  },
  informix: {
    name: 'Informix',
    value: 'informix'
  },
  sqlserver: {
    name: 'SQL Server',
    value: 'sqlserver'
  },
  sybase: {
    name: 'Sybase',
    value: 'sybase'
  },
  access: {
    name: 'Access',
    value: 'access'
  },
  firebird: {
    name: 'Firebird',
    value: 'firebird'
  },
  ansisql: {
    name: 'ANSISQL',
    value: 'ansisql'
  },
  generic: {
    name: 'Generic',
    value: 'generic'
  }
};
var COMPATIBILITY_TARGET_PLATFORMS = {
  impala: {
    name: 'Impala',
    value: 'impala'
  },
  hive: {
    name: 'Hive',
    value: 'hive'
  }
};
var getDefaultSnippetProperties = function getDefaultSnippetProperties(snippetType) {
  var properties = {};
  if (snippetType == 'jar' || snippetType == 'py') {
    properties['driverCores'] = '';
    properties['executorCores'] = '';
    properties['numExecutors'] = '';
    properties['queue'] = '';
    properties['archives'] = [];
    properties['files'] = [];
  }
  if (snippetType == 'java') {
    properties['archives'] = [];
    properties['files'] = [];
    properties['capture_output'] = false;
  }
  if (snippetType == 'shell') {
    properties['archives'] = [];
    properties['files'] = [];
  }
  if (snippetType == 'mapreduce') {
    properties['app_jar'] = '';
    properties['hadoopProperties'] = [];
    properties['jars'] = [];
    properties['files'] = [];
    properties['archives'] = [];
  }
  if (snippetType == 'spark2') {
    properties['app_name'] = '';
    properties['class'] = '';
    properties['jars'] = [];
    properties['spark_opts'] = [];
    properties['spark_arguments'] = [];
    properties['files'] = [];
  }
  if (snippetType == 'sqoop1') {
    properties['files'] = [];
  }
  if (snippetType == 'jar' || snippetType == 'java') {
    properties['app_jar'] = '';
    properties['class'] = '';
    properties['arguments'] = [];
  } else if (snippetType == 'distcp') {
    properties['source_path'] = '';
    properties['destination_path'] = '';
  } else if (snippetType == 'shell') {
    properties['command_path'] = '';
    properties['arguments'] = [];
    properties['env_var'] = [];
    properties['capture_output'] = true;
  } else if (snippetType == 'py') {
    properties['py_file'] = '';
    properties['arguments'] = [];
  } else if (snippetType == 'hive') {
    properties['settings'] = [];
    properties['files'] = [];
    properties['functions'] = [];
    properties['arguments'] = [];
  } else if (snippetType == 'impala') {
    properties['settings'] = [];
  } else if (snippetType == 'pig') {
    properties['parameters'] = [];
    properties['hadoopProperties'] = [];
    properties['resources'] = [];
  }
  return properties;
};
var ERROR_REGEX = /line ([0-9]+)(\:([0-9]+))?/i;
var Snippet = /*#__PURE__*/function () {
  function Snippet(vm, notebook, snippet) {
    var _this = this;
    _classCallCheck(this, Snippet);
    var self = this;
    self.id = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.id != 'undefined' && snippet.id != null ? snippet.id : (0,utils_string_UUID__WEBPACK_IMPORTED_MODULE_22__["default"])());
    self.name = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.name != 'undefined' && snippet.name != null ? snippet.name : '');
    self.type = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.type != 'undefined' && snippet.type != null ? snippet.type : 'hive');
    self.connector = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    var updateConnector = function updateConnector(id) {
      if (id) {
        self.connector((0,config_hueConfig__WEBPACK_IMPORTED_MODULE_17__.findEditorConnector)(function (connector) {
          return connector.id === id;
        }));
      }
    };
    updateConnector(self.type());
    self.type.subscribe(function (type) {
      if (!self.connector() || self.connector().id !== type) {
        updateConnector(type);
      }
      self.status('ready');
    });
    self.isSqlDialect = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return vm.getSnippetViewSettings(self.dialect()).sqlDialect;
    });
    self.dialect = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.connector().dialect;
    });
    self.isBatchable = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return self.type() == 'hive' || self.type() == 'impala' || jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(vm.availableLanguages, function (language) {
        return language.type == self.type() && (language["interface"] == 'oozie' || language["interface"] == 'sqlalchemy');
      }).length > 0;
    });
    self.autocompleteSettings = {
      temporaryOnly: false
    };

    // Ace stuff
    self.aceCursorPosition = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebook.isHistory() ? snippet.aceCursorPosition : null);
    var aceEditor = null;
    self.ace = function (newVal) {
      if (newVal) {
        aceEditor = newVal;
        if (!notebook.isPresentationMode()) {
          aceEditor.focus();
        }
      }
      return aceEditor;
    };
    self.errors = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([]);
    self.aceErrorsHolder = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([]);
    self.aceWarningsHolder = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([]);
    self.aceErrors = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return self.showSqlAnalyzer() ? self.aceErrorsHolder() : [];
    });
    self.aceWarnings = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return self.showSqlAnalyzer() ? self.aceWarningsHolder() : [];
    });
    self.availableSnippets = vm.availableSnippets();
    self.inFocus = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.inFocus.subscribe(function (newValue) {
      if (newValue) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_editor_events__WEBPACK_IMPORTED_MODULE_16__.ACTIVE_SNIPPET_CONNECTOR_CHANGED_EVENT, self.connector());
      }
    });
    self.editorMode = vm.editorMode;
    self.getAceMode = function () {
      return vm.getSnippetViewSettings(self.type()).aceMode;
    };
    self.dbSelectionVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.showExecutionAnalysis = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.getPlaceHolder = function () {
      return vm.getSnippetViewSettings(self.type()).placeHolder;
    };

    // namespace and compute might be initialized as empty object {}
    self.namespace = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(snippet.namespace && snippet.namespace.id ? snippet.namespace : undefined);
    self.compute = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(snippet.compute && snippet.compute.id ? snippet.compute : undefined);
    self.whenContextSet = function () {
      var namespaceSub;
      var namespaceDeferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      if (self.namespace()) {
        namespaceDeferred.resolve(self.namespace());
      } else {
        namespaceSub = self.namespace.subscribe(function (newVal) {
          if (newVal) {
            namespaceDeferred.resolve(newVal);
            namespaceSub.dispose();
          }
        });
      }
      var computeSub;
      var computeDeferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      if (self.compute()) {
        computeDeferred.resolve(self.compute());
      } else {
        computeSub = self.compute.subscribe(function (newVal) {
          if (newVal) {
            computeDeferred.resolve(newVal);
            computeSub.dispose();
          }
        });
      }
      var result = jquery__WEBPACK_IMPORTED_MODULE_0___default().when(namespaceDeferred, computeDeferred);
      result.dispose = function () {
        if (namespaceSub) {
          namespaceSub.dispose();
        }
        if (computeSub) {
          computeSub.dispose();
        }
        namespaceDeferred.reject();
        computeDeferred.reject();
      };
      return result;
    };
    self.availableDatabases = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    self.database = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    var previousDatabase = null;
    self.database.subscribe(function (newValue) {
      if (newValue !== null) {
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__.setInLocalStorage)('editor.last.selected.database', newValue);
        if (previousDatabase !== null && previousDatabase !== newValue) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_ko_bindings_ace_aceLocationHandler__WEBPACK_IMPORTED_MODULE_21__.REFRESH_STATEMENT_LOCATIONS_EVENT, self.id());
        }
        previousDatabase = newValue;
      }
    });
    self.database(typeof snippet.database !== 'undefined' && snippet.database != null ? snippet.database : null);

    // History is currently in Notebook, same with saved queries by snippets, might be better in assist
    self.currentQueryTab = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.currentQueryTab != 'undefined' && snippet.currentQueryTab != null ? snippet.currentQueryTab : 'queryHistory');
    self.pinnedContextTabs = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(typeof snippet.pinnedContextTabs != 'undefined' && snippet.pinnedContextTabs != null ? snippet.pinnedContextTabs : []);
    self.removeContextTab = function (context) {
      if (context.tabId === self.currentQueryTab()) {
        self.currentQueryTab('queryHistory');
      }
      self.pinnedContextTabs.remove(context);
    };
    self.errorLoadingQueries = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.loadingQueries = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.queriesHasErrors = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.queriesCurrentPage = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(vm.selectedNotebook() && vm.selectedNotebook().snippets().length > 0 ? vm.selectedNotebook().snippets()[0].queriesCurrentPage() : 1);
    self.queriesTotalPages = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(vm.selectedNotebook() && vm.selectedNotebook().snippets().length > 0 ? vm.selectedNotebook().snippets()[0].queriesTotalPages() : 1);
    self.queries = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([]);
    self.queriesFilter = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
    self.queriesFilterVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.queriesFilter.extend({
      rateLimit: {
        method: 'notifyWhenChangesStop',
        timeout: 900
      }
    });
    self.queriesFilter.subscribe(function (val) {
      self.fetchQueries();
    });
    var lastFetchQueriesRequest = null;
    self.fetchQueries = function () {
      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_15__.cancelActiveRequest)(lastFetchQueriesRequest);
      var QUERIES_PER_PAGE = 50;
      lastQueriesPage = self.queriesCurrentPage();
      self.loadingQueries(true);
      self.queriesHasErrors(false);
      lastFetchQueriesRequest = _api_apiHelper__WEBPACK_IMPORTED_MODULE_5__["default"].searchDocuments({
        successCallback: function successCallback(result) {
          self.queriesTotalPages(Math.ceil(result.count / QUERIES_PER_PAGE));
          self.queries(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(result.documents)());
          self.loadingQueries(false);
          self.queriesHasErrors(false);
        },
        errorCallback: function errorCallback() {
          self.loadingQueries(false);
          self.queriesHasErrors(true);
        },
        page: self.queriesCurrentPage(),
        limit: QUERIES_PER_PAGE,
        type: 'query-' + self.type(),
        query: self.queriesFilter(),
        include_trashed: false
      });
    };
    var lastQueriesPage = 1;
    self.currentQueryTab.subscribe(function (newValue) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('redraw.fixed.headers');
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('current.query.tab.switched', newValue);
      if (newValue === 'savedQueries' && (self.queries().length === 0 || lastQueriesPage !== self.queriesCurrentPage())) {
        self.fetchQueries();
      }
    });
    self.prevQueriesPage = function () {
      if (self.queriesCurrentPage() !== 1) {
        self.queriesCurrentPage(self.queriesCurrentPage() - 1);
        self.fetchQueries();
      }
    };
    self.nextQueriesPage = function () {
      if (self.queriesCurrentPage() !== self.queriesTotalPages()) {
        self.queriesCurrentPage(self.queriesCurrentPage() + 1);
        self.fetchQueries();
      }
    };
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_18__.ASSIST_GET_SOURCE_EVENT, function (source) {
      if (source !== self.type()) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_18__.ASSIST_SET_SOURCE_EVENT, self.type());
      }
    });
    var ignoreNextAssistDatabaseUpdate = false;
    self.handleAssistSelection = function (entry) {
      if (ignoreNextAssistDatabaseUpdate) {
        ignoreNextAssistDatabaseUpdate = false;
      } else if (entry.getConnector().id === self.connector().id) {
        if (self.namespace() !== entry.namespace) {
          self.namespace(entry.namespace);
        }
        if (self.database() !== entry.name) {
          self.database(entry.name);
        }
      }
    };
    if (!self.database()) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_18__.ASSIST_GET_DATABASE_EVENT, {
        connector: self.connector(),
        callback: function callback(entry) {
          self.handleAssistSelection(entry);
        }
      });
    }
    self.statementType = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.statementType != 'undefined' && snippet.statementType != null ? snippet.statementType : 'text');
    self.statementTypes = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(['text', 'file']); // Maybe computed later for Spark
    if (!vm.editorMode()) {
      self.statementTypes.push('document');
    }
    self.statementPath = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.statementPath != 'undefined' && snippet.statementPath != null ? snippet.statementPath : '');
    self.statementPath.subscribe(function (newVal) {
      self.getExternalStatement();
    });
    self.externalStatementLoaded = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.getExternalStatement = function () {
      self.externalStatementLoaded(false);
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/get_external_statement', {
        notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
        snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext())
      }, function (data) {
        if (data.status == 0) {
          self.externalStatementLoaded(true);
          self.statement_raw(data.statement);
          self.ace().setValue(self.statement_raw(), 1);
        } else {
          self._ajaxError(data);
        }
      });
    };
    self.associatedDocumentLoading = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(true);
    self.associatedDocument = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    self.associatedDocumentUuid = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.associatedDocumentUuid != 'undefined' && snippet.associatedDocumentUuid != null ? snippet.associatedDocumentUuid : null);
    self.associatedDocumentUuid.subscribe(function (val) {
      if (val !== '') {
        self.getExternalStatement();
      } else {
        self.statement_raw('');
        self.ace().setValue('', 1);
      }
    });
    self.statement_raw = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.statement_raw != 'undefined' && snippet.statement_raw != null ? snippet.statement_raw : '');
    self.selectedStatement = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
    self.positionStatement = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(null);
    self.lastExecutedStatement = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(null);
    self.statementsList = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe(_ko_bindings_ace_aceLocationHandler__WEBPACK_IMPORTED_MODULE_21__.CURSOR_POSITION_CHANGED_EVENT, function (details) {
      if (details.editorId === self.id()) {
        self.aceCursorPosition(details.position);
      }
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe(_ko_bindings_ace_aceLocationHandler__WEBPACK_IMPORTED_MODULE_21__.ACTIVE_STATEMENT_CHANGED_EVENT, function (statementDetails) {
      if (self.ace() && self.ace().container.id === statementDetails.id) {
        var _loop = function _loop(i) {
          if (statementDetails.precedingStatements[i].database) {
            self.availableDatabases().some(function (availableDatabase) {
              if (availableDatabase.toLowerCase() === statementDetails.precedingStatements[i].database.toLowerCase()) {
                self.database(availableDatabase);
                return true;
              }
            });
            return 1; // break
          }
        };
        for (var i = statementDetails.precedingStatements.length - 1; i >= 0; i--) {
          if (_loop(i)) break;
        }
        if (statementDetails.activeStatement) {
          self.positionStatement(statementDetails.activeStatement);
        } else {
          self.positionStatement(null);
        }
        if (statementDetails.activeStatement) {
          var _statements = [];
          statementDetails.precedingStatements.forEach(function (statement) {
            _statements.push(statement.statement);
          });
          _statements.push(statementDetails.activeStatement.statement);
          statementDetails.followingStatements.forEach(function (statement) {
            _statements.push(statement.statement);
          });
          self.statementsList(_statements); // Or fetch on demand via editor.refresh.statement.locations and remove observableArray?
        } else {
          self.statementsList([]);
        }
        if (!notebook.isPresentationModeInitialized()) {
          if (notebook.isPresentationModeDefault()) {
            // When switching to presentation mode, the snippet in non presentation mode cannot get status notification.
            // On initiailization, status is set to loading and does not get updated, because we moved to presentation mode.
            self.status('ready');
          }
          // Changing to presentation mode requires statementsList to be initialized. statementsList is initialized asynchronously.
          // When presentation mode is default, we cannot change before statementsList has been calculated.
          // Cleaner implementation would be to make toggleEditorMode statementsList asynchronous
          // However this is currently impossible due to delete _notebook.presentationSnippets()[key];
          notebook.isPresentationModeInitialized(true);
          notebook.isPresentationMode(notebook.isPresentationModeDefault());
        }
      }
    }, vm.huePubSubId);
    self.aceSize = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.aceSize != 'undefined' && snippet.aceSize != null ? snippet.aceSize : 100);
    // self.statement_raw.extend({ rateLimit: 150 }); // Should prevent lag from typing but currently send the old query when using the key shortcut
    self.status = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.status != 'undefined' && snippet.status != null ? snippet.status : 'loading');
    self.statusForButtons = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('executed');
    self.properties = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(typeof snippet.properties != 'undefined' && snippet.properties != null ? snippet.properties : getDefaultSnippetProperties(self.type())));
    self.hasProperties = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return Object.keys(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJS(self.properties())).length > 0;
    });
    self.viewSettings = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return vm.getSnippetViewSettings(self.type());
    });
    var previousProperties = {};
    self.type.subscribe(function (oldValue) {
      previousProperties[oldValue] = self.properties();
    }, null, 'beforeChange');
    self.type.subscribe(function (newValue) {
      if (typeof previousProperties[newValue] != 'undefined') {
        self.properties(previousProperties[newValue]);
      } else {
        self.properties(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(getDefaultSnippetProperties(newValue)));
      }
      self.result.clear();
      window.setTimeout(function () {
        if (self.ace() !== null) {
          self.ace().focus();
        }
      }, 100);
    });
    if (snippet.variables) {
      snippet.variables.forEach(function (variable) {
        variable.meta = _typeof(variable.defaultValue) === 'object' && variable.defaultValue || {
          type: 'text',
          placeholder: ''
        };
        variable.value = variable.value || '';
        variable.type = variable.type || 'text';
        variable.sample = [];
        variable.sampleUser = variable.sampleUser || [];
        variable.path = variable.path || '';
        variable.step = '';
        delete variable.defaultValue;
      });
    }
    self.variables = knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(typeof snippet.variables != 'undefined' && snippet.variables != null ? snippet.variables : []);
    self.variables.subscribe(function (newValue) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('updateResultHeaders', self);
    });
    self.hasCurlyBracketParameters = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return self.type() != 'pig';
    });
    self.getPigParameters = function () {
      var params = {};
      var variables = self.statement_raw().match(/([^\\]|^)\$[^\d'"](\w*)/g);
      var declares = self.statement_raw().match(/%declare +([^ ])+/gi);
      var defaults = self.statement_raw().match(/%default +([^;])+/gi);
      var macro_defines = self.statement_raw().match(/define [^ ]+ *\(([^\)]*)\)/gi); // no multiline
      var macro_returns = self.statement_raw().match(/returns +([^\{]*)/gi); // no multiline

      if (variables) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(variables, function (index, param) {
          var p = param.substring(param.indexOf('$') + 1);
          params[p] = '';
        });
      }
      if (declares) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(declares, function (index, param) {
          param = param.match(/(\w+)/g);
          if (param && param.length >= 2) {
            delete params[param[1]];
          }
        });
      }
      if (defaults) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(defaults, function (index, param) {
          var line = param.match(/(\w+)/g);
          if (line && line.length >= 2) {
            var name = line[1];
            params[name] = param.substring(param.indexOf(name) + name.length + 1);
          }
        });
      }
      if (macro_defines) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(macro_defines, function (index, params_line) {
          var param_line = params_line.match(/(\w+)/g);
          if (param_line && param_line.length > 2) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default().each(param_line, function (index, param) {
              if (index >= 2) {
                // Skips define NAME
                delete params[param];
              }
            });
          }
        });
      }
      if (macro_returns) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(macro_returns, function (index, params_line) {
          var param_line = params_line.match(/(\w+)/g);
          if (param_line) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default().each(param_line, function (index, param) {
              if (index >= 1) {
                // Skip returns
                delete params[param];
              }
            });
          }
        });
      }
      return params;
    };
    self.variableNames = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      var match,
        matches = {},
        matchList;
      if (self.type() == 'pig') {
        matches = self.getPigParameters();
      } else {
        var re = /(?:^|\W)\${(\w*)\=?([^{}]*)}/g;
        var reComment = /(^\s*--.*)|(\/\*[\s\S]*?\*\/)/gm;
        var reList = /(?!\s*$)\s*(?:(?:([^,|()\\]*)\(\s*([^,|()\\]*)\)(?:\\[\S\s][^,|()\\]*)?)|([^,|\\]*(?:\\[\S\s][^,|\\]*)*))\s*(?:,|\||$)/g;
        var statement = self.statement_raw();
        var matchComment = reComment.exec(statement);
        // if re is n & reComment is m
        // finding variables is O(n+m)
        var _loop2 = function _loop2() {
          while (matchComment && match.index > matchComment.index + matchComment[0].length) {
            // Comments before our match
            matchComment = reComment.exec(statement);
          }
          var isWithinComment = matchComment && match.index >= matchComment.index;
          if (isWithinComment) {
            return 1; // continue
          }

          // If 1 match, text value
          // If multiple matches, list value
          var value = {
            type: 'text',
            placeholder: ''
          };
          while (matchList = reList.exec(match[2])) {
            var option = {
              text: matchList[2] || matchList[3],
              value: matchList[3] || matchList[1]
            };
            option.text = option.text && option.text.trim();
            option.value = option.value && option.value.trim().replace(',', ',').replace('(', '(').replace(')', ')');
            if (value.placeholder || matchList[2]) {
              if (!value.options) {
                value.options = [];
                value.type = 'select';
              }
              value.options.push(option);
            }
            if (!value.placeholder) {
              value.placeholder = option.value;
            }
          }
          var isPlaceholderInOptions = !value.options || value.options.some(function (current) {
            return current.value == value.placeholder;
          });
          if (!isPlaceholderInOptions) {
            value.options.unshift({
              text: value.placeholder,
              value: value.placeholder
            });
          }
          matches[match[1]] = matches[match[1]] || value;
        };
        while (match = re.exec(statement)) {
          if (_loop2()) continue;
        }
      }
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().map(matches, function (match, key) {
        var isMatchObject = _typeof(matches[key]) === 'object';
        var meta = isMatchObject ? matches[key] : {
          type: 'text',
          placeholder: matches[key]
        };
        return {
          name: key,
          meta: meta
        };
      });
    });
    self.variableValues = {};
    self.variableNames.extend({
      rateLimit: 150
    });
    self.variableNames.subscribe(function (newVal) {
      var variablesLength = self.variables().length;
      var diffLengthVariables = variablesLength - newVal.length;
      var needsMore = diffLengthVariables < 0;
      var needsLess = diffLengthVariables > 0;
      self.variableValues = self.variables().reduce(function (variableValues, variable) {
        if (!variableValues[variable.name()]) {
          variableValues[variable.name()] = {
            sampleUser: []
          };
        }
        variableValues[variable.name()].value = variable.value();
        variableValues[variable.name()].sampleUser = variable.sampleUser();
        variableValues[variable.name()].catalogEntry = variable.catalogEntry;
        variableValues[variable.name()].path = variable.path();
        variableValues[variable.name()].type = variable.type();
        return variableValues;
      }, self.variableValues);
      if (needsMore) {
        for (var i = 0, length = Math.abs(diffLengthVariables); i < length; i++) {
          self.variables.push(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS({
            name: '',
            value: '',
            meta: {
              type: 'text',
              placeholder: '',
              options: []
            },
            sample: [],
            sampleUser: [],
            type: 'text',
            step: '',
            path: ''
          }));
        }
      } else if (needsLess) {
        self.variables.splice(self.variables().length - diffLengthVariables, diffLengthVariables);
      }
      newVal.forEach(function (item, index) {
        var variable = self.variables()[index];
        variable.name(item.name);
        setTimeout(function () {
          variable.value(self.variableValues[item.name] ? self.variableValues[item.name].value : !needsMore && variable.value() || '');
        }, 0);
        variable.meta = knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(item.meta, {}, variable.meta);
        variable.sample(variable.meta.options ? variable.meta.options().concat(variable.sampleUser()) : variable.sampleUser());
        variable.sampleUser(self.variableValues[item.name] ? self.variableValues[item.name].sampleUser : []);
        variable.type(self.variableValues[item.name] ? self.variableValues[item.name].type || 'text' : 'text');
        variable.path(self.variableValues[item.name] ? self.variableValues[item.name].path || '' : '');
        variable.catalogEntry = self.variableValues[item.name] && self.variableValues[item.name].catalogEntry;
      });
    });
    var activeSourcePromises = [];
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe(sql_workers_events__WEBPACK_IMPORTED_MODULE_20__.POST_FROM_LOCATION_WORKER_EVENT, function (e) {
      while (activeSourcePromises.length) {
        var promise = activeSourcePromises.pop();
        if (promise.cancel) {
          promise.cancel();
        }
      }
      var oLocations = e.data.locations.filter(function (location) {
        return location.type === 'variable' && location.colRef;
      }).reduce(function (variables, location) {
        var re = /\${(\w*)\=?([^{}]*)}/g;
        var name = re.exec(location.value)[1];
        variables[name] = location;
        return variables;
      }, {});
      var updateVariableType = function updateVariableType(variable, sourceMeta) {
        var type;
        if (sourceMeta && sourceMeta.type) {
          type = sourceMeta.type.toLowerCase();
        } else {
          type = 'string';
        }
        var variablesValues = {};
        var value = variable.value();
        switch (type) {
          case 'timestamp':
            variablesValues.type = 'datetime-local';
            variablesValues.step = '1';
            variablesValues.value = value && moment.utc(value).format('YYYY-MM-DD HH:mm:ss.S') || moment(Date.now()).format('YYYY-MM-DD 00:00:00.0');
            break;
          case 'decimal':
          case 'double':
          case 'float':
            variablesValues.type = 'number';
            variablesValues.step = 'any';
            break;
          case 'int':
          case 'smallint':
          case 'tinyint':
          case 'bigint':
            variablesValues.type = 'number';
            variablesValues.step = '1';
            break;
          case 'date':
            variablesValues.type = 'date';
            variablesValues.step = '';
            variablesValues.value = value && moment.utc(value).format('YYYY-MM-DD') || moment(Date.now()).format('YYYY-MM-DD');
            break;
          case 'boolean':
            variablesValues.type = 'checkbox';
            variablesValues.step = '';
            break;
          default:
            variablesValues.type = 'text';
            variablesValues.step = '';
        }
        if (variablesValues.value) {
          setTimeout(function () {
            variable.value(variablesValues.value);
          }, 0);
        }
        variable.type(variablesValues.type);
        variable.step(variablesValues.step);
      };
      self.variables().forEach(function (variable) {
        if (oLocations[variable.name()]) {
          activeSourcePromises.push(oLocations[variable.name()].resolveCatalogEntry({
            cancellable: true
          }).then(function (entry) {
            variable.path(entry.path.join('.'));
            variable.catalogEntry = entry;
            activeSourcePromises.push(entry.getSourceMeta({
              silenceErrors: true,
              cancellable: true
            }).then(updateVariableType.bind(self, variable)));
          }));
        } else {
          updateVariableType(variable, {
            type: 'text'
          });
        }
      });
    });
    self.statement = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      var statement = self.isSqlDialect() ? self.selectedStatement() ? self.selectedStatement() : self.positionStatement() !== null ? self.positionStatement().statement : self.statement_raw() : self.statement_raw();
      var variables = self.variables().reduce(function (variables, variable) {
        variables[variable.name()] = variable;
        return variables;
      }, {});
      if (self.variables().length) {
        var variablesString = self.variables().map(function (variable) {
          return variable.name();
        }).join('|');
        statement = statement.replace(RegExp('([^\\\\])?\\$' + (self.hasCurlyBracketParameters() ? '{(' : '(') + variablesString + ')(=[^}]*)?' + (self.hasCurlyBracketParameters() ? '}' : ''), 'g'), function (match, p1, p2) {
          var variable = variables[p2];
          var pad = variable.type() == 'datetime-local' && variable.value().length == 16 ? ':00' : ''; // Chrome drops the seconds from the timestamp when it's at 0 second.
          var value = variable.value();
          var isValuePresent =
          //If value is string there is a need to check whether it is empty
          typeof value === 'string' ? value : value !== undefined && value !== null;
          return p1 + (isValuePresent ? value + pad : variable.meta.placeholder && variable.meta.placeholder());
        });
      }
      return statement;
    });
    self.result = new _result__WEBPACK_IMPORTED_MODULE_11__["default"](snippet, snippet.result);
    if (!self.result.hasSomeResults()) {
      self.currentQueryTab('queryHistory');
    }
    self.showGrid = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.showGrid != 'undefined' && snippet.showGrid != null ? snippet.showGrid : true);
    self.showChart = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.showChart != 'undefined' && snippet.showChart != null ? snippet.showChart : false);
    var defaultShowLogs = true;
    if (vm.editorMode() && (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__.getFromLocalStorage)('hue.editor.showLogs')) {
      defaultShowLogs = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__.getFromLocalStorage)('hue.editor.showLogs');
    }
    self.showLogs = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.showLogs !== 'undefined' && snippet.showLogs != null ? snippet.showLogs : defaultShowLogs);
    self.progress = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.progress !== 'undefined' && snippet.progress != null ? snippet.progress : 0);
    self.jobs = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(typeof snippet.jobs !== 'undefined' && snippet.jobs != null ? snippet.jobs : []);
    self.executeNextTimeout = -1;
    var refreshTimeouts = {};
    self.onDdlExecute = function () {
      if (self.result.handle() && self.result.handle().has_more_statements) {
        window.clearTimeout(self.executeNextTimeout);
        var previousHash = self.result.handle().previous_statement_hash;
        self.executeNextTimeout = setTimeout(function () {
          // Don't execute if the handle has changed during the timeout
          if (self.status() !== 'running' && previousHash === self.result.handle().previous_statement_hash) {
            self.execute(true); // Execute next, need to wait as we disabled fast click
          }
        }, 1000);
      }
      if (self.lastExecutedStatement() && /CREATE|DROP/i.test(self.lastExecutedStatement().firstToken)) {
        var match = self.statement().match(/(?:CREATE|DROP)\s+TABLE\s+(?:IF\s+(?:NOT\s+)?EXISTS\s+)?(?:`([^`]+)`|([^;\s]+))\..*/i);
        var path = [];
        if (match) {
          path.push(match[1] || match[2]); // group 1 backticked db name, group 2 regular db name
        } else {
          match = self.statement().match(/(?:CREATE|DROP)\s+(?:DATABASE|SCHEMA)\s+(?:IF\s+(?:NOT\s+)?EXISTS\s+)?(?:`([^`]+)`|([^;\s]+))/i);
          if (match) {
            path.push(match[1] || match[2]); // group 1 backticked db name, group 2 regular db name
          } else if (self.database()) {
            path.push(self.database());
          }
        }
        if (path.length) {
          window.clearTimeout(refreshTimeouts[path.join('.')]);
          refreshTimeouts[path.join('.')] = window.setTimeout(function () {
            ignoreNextAssistDatabaseUpdate = true;
            catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_6__["default"].getEntry({
              namespace: self.namespace(),
              compute: self.compute(),
              connector: self.connector(),
              path: path
            }).then(function (entry) {
              entry.clearCache({
                cascade: true,
                silenceErrors: true
              });
            });
          }, 5000);
        }
      }
    };
    self.progress.subscribe(function (val) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('progress', {
        data: val,
        snippet: self
      });
    });
    self.showGrid.subscribe(function (val) {
      if (val) {
        self.showChart(false);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.grid.shown', self);
      }
    });
    function prepopulateChart() {
      var type = self.chartType();
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'chart/' + type);
      if (type === window.HUE_CHARTS.TYPES.MAP && self.result.cleanedNumericMeta().length >= 2) {
        if (self.chartX() === null || typeof self.chartX() === 'undefined') {
          var name = self.result.cleanedNumericMeta()[0].name;
          self.result.cleanedNumericMeta().forEach(function (fld) {
            if (fld.name.toLowerCase().indexOf('lat') > -1 || fld.name.toLowerCase().indexOf('ltd') > -1) {
              name = fld.name;
            }
          });
          self.chartX(name);
        }
        if (self.chartYSingle() === null || typeof self.chartYSingle() === 'undefined') {
          var _name = self.result.cleanedNumericMeta()[1].name;
          self.result.cleanedNumericMeta().forEach(function (fld) {
            if (fld.name.toLowerCase().indexOf('lon') > -1 || fld.name.toLowerCase().indexOf('lng') > -1) {
              _name = fld.name;
            }
          });
          self.chartYSingle(_name);
        }
        return;
      }
      if ((self.chartX() === null || typeof self.chartX() === 'undefined') && (type == window.HUE_CHARTS.TYPES.BARCHART || type == window.HUE_CHARTS.TYPES.PIECHART || type == window.HUE_CHARTS.TYPES.GRADIENTMAP) && self.result.cleanedStringMeta().length >= 1) {
        self.chartX(self.result.cleanedStringMeta()[0].name);
      }
      if (self.result.cleanedNumericMeta().length > 0) {
        if (self.chartYMulti().length === 0 && (type === window.HUE_CHARTS.TYPES.BARCHART || type === window.HUE_CHARTS.TYPES.LINECHART)) {
          self.chartYMulti.push(self.result.cleanedNumericMeta()[Math.min(self.result.cleanedNumericMeta().length - 1, 1)].name);
        } else if ((self.chartYSingle() === null || typeof self.chartYSingle() === 'undefined') && (type === window.HUE_CHARTS.TYPES.PIECHART || type === window.HUE_CHARTS.TYPES.MAP || type === window.HUE_CHARTS.TYPES.GRADIENTMAP || type === window.HUE_CHARTS.TYPES.SCATTERCHART || type === window.HUE_CHARTS.TYPES.BARCHART && self.chartXPivot() !== null)) {
          if (self.chartYMulti().length === 0) {
            self.chartYSingle(self.result.cleanedNumericMeta()[Math.min(self.result.cleanedNumericMeta().length - 1, 1)].name);
          } else {
            self.chartYSingle(self.chartYMulti()[0]);
          }
        }
      }
    }
    self.showChart.subscribe(function (val) {
      if (val) {
        self.showGrid(false);
        self.isResultSettingsVisible(true);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('forceChartDraw', self);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.chart.shown', self);
        prepopulateChart();
      }
    });
    self.showLogs.subscribe(function (val) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('redraw.fixed.headers');
      if (val) {
        self.getLogs();
      }
      if (vm.editorMode()) {
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__.setInLocalStorage)('hue.editor.showLogs', val);
      }
    });
    self.isLoading = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return self.status() === 'loading';
    });
    self.resultsKlass = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return 'results ' + self.type();
    });
    self.errorsKlass = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return self.resultsKlass() + ' alert alert-error';
    });
    self.is_redacted = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.is_redacted != 'undefined' && snippet.is_redacted != null ? snippet.is_redacted : false);
    self.chartType = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartType != 'undefined' && snippet.chartType != null ? snippet.chartType : window.HUE_CHARTS.TYPES.BARCHART);
    self.chartType.subscribe(prepopulateChart);
    self.chartSorting = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartSorting != 'undefined' && snippet.chartSorting != null ? snippet.chartSorting : 'none');
    self.chartScatterGroup = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartScatterGroup != 'undefined' && snippet.chartScatterGroup != null ? snippet.chartScatterGroup : null);
    self.chartScatterSize = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartScatterSize != 'undefined' && snippet.chartScatterSize != null ? snippet.chartScatterSize : null);
    self.chartScope = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartScope != 'undefined' && snippet.chartScope != null ? snippet.chartScope : 'world');
    self.chartTimelineType = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartTimelineType != 'undefined' && snippet.chartTimelineType != null ? snippet.chartTimelineType : 'bar');
    self.chartLimits = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([5, 10, 25, 50, 100]);
    self.chartLimit = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartLimit != 'undefined' && snippet.chartLimit != null ? snippet.chartLimit : null);
    self.chartLimit.extend({
      notify: 'always'
    });
    self.chartX = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartX != 'undefined' && snippet.chartX != null ? snippet.chartX : null);
    self.chartX.extend({
      notify: 'always'
    });
    self.chartXPivot = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartXPivot != 'undefined' && snippet.chartXPivot != null ? snippet.chartXPivot : null);
    self.chartXPivot.extend({
      notify: 'always'
    });
    self.chartXPivot.subscribe(prepopulateChart);
    self.chartYSingle = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartYSingle != 'undefined' && snippet.chartYSingle != null ? snippet.chartYSingle : null);
    self.chartYMulti = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(typeof snippet.chartYMulti != 'undefined' && snippet.chartYMulti != null ? snippet.chartYMulti : []);
    self.chartData = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(typeof snippet.chartData != 'undefined' && snippet.chartData != null ? snippet.chartData : []);
    self.chartMapType = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartMapType != 'undefined' && snippet.chartMapType != null ? snippet.chartMapType : 'marker');
    self.chartMapLabel = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartMapLabel != 'undefined' && snippet.chartMapLabel != null ? snippet.chartMapLabel : null);
    self.chartMapHeat = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.chartMapHeat != 'undefined' && snippet.chartMapHeat != null ? snippet.chartMapHeat : null);
    self.hideStacked = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return self.chartYMulti().length <= 1;
    });
    self.hasDataForChart = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      if (self.chartType() == window.HUE_CHARTS.TYPES.BARCHART || self.chartType() == window.HUE_CHARTS.TYPES.LINECHART || self.chartType() == window.HUE_CHARTS.TYPES.TIMELINECHART) {
        return typeof self.chartX() != 'undefined' && self.chartX() != null && self.chartYMulti().length > 0;
      }
      return typeof self.chartX() != 'undefined' && self.chartX() != null && typeof self.chartYSingle() != 'undefined' && self.chartYSingle() != null;
    });
    self.hasDataForChart.subscribe(function (newValue) {
      self.chartX.notifySubscribers();
      self.chartX.valueHasMutated();
    });
    self.chartType.subscribe(function (val) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('forceChartDraw', self);
    });
    self.previousChartOptions = {};
    function guessMetaField(field) {
      var _fld = null;
      if (field) {
        if (self.result.cleanedMeta().length > 0) {
          self.result.cleanedMeta().forEach(function (fld) {
            if (fld.name.toLowerCase() === field.toLowerCase() || field.toLowerCase() === fld.name.toLowerCase()) {
              _fld = fld.name;
            }
          });
        }
      }
      return _fld;
    }
    function guessMetaFields(fields) {
      var _fields = [];
      if (fields) {
        fields.forEach(function (fld) {
          var _field = guessMetaField(fld);
          if (_field) {
            _fields.push(_field);
          }
        });
      }
      return _fields;
    }
    self.result.meta.subscribe(function (newValue) {
      self.chartLimit(self.previousChartOptions.chartLimit);
      self.chartX(guessMetaField(self.previousChartOptions.chartX));
      self.chartXPivot(self.previousChartOptions.chartXPivot);
      self.chartYSingle(guessMetaField(self.previousChartOptions.chartYSingle));
      self.chartMapType(self.previousChartOptions.chartMapType);
      self.chartMapLabel(guessMetaField(self.previousChartOptions.chartMapLabel));
      self.chartMapHeat(self.previousChartOptions.chartMapHeat);
      self.chartYMulti(guessMetaFields(self.previousChartOptions.chartYMulti) || []);
      self.chartSorting(self.previousChartOptions.chartSorting);
      self.chartScatterGroup(self.previousChartOptions.chartScatterGroup);
      self.chartScatterSize(self.previousChartOptions.chartScatterSize);
      self.chartScope(self.previousChartOptions.chartScope);
      self.chartTimelineType(self.previousChartOptions.chartTimelineType);
    });
    self.isResultSettingsVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.isResultSettingsVisible != 'undefined' && snippet.isResultSettingsVisible != null ? snippet.isResultSettingsVisible : false);
    self.toggleResultSettings = function () {
      self.isResultSettingsVisible(!self.isResultSettingsVisible());
    };
    self.isResultSettingsVisible.subscribe(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('toggleResultSettings', self);
    });
    self.settingsVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.settingsVisible != 'undefined' && snippet.settingsVisible != null ? snippet.settingsVisible : false);
    self.saveResultsModalVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.checkStatusTimeout = null;
    self.getLogsTimeout = null;
    self.getContext = function () {
      return {
        id: self.id,
        type: self.type,
        status: self.status,
        statementType: self.statementType,
        statement: self.statement,
        aceCursorPosition: self.aceCursorPosition,
        statementPath: self.statementPath,
        associatedDocumentUuid: self.associatedDocumentUuid,
        properties: self.properties,
        result: self.result.getContext(),
        database: self.database,
        compute: self.compute(),
        wasBatchExecuted: self.wasBatchExecuted()
      };
    };
    self.complexity = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    self.hasComplexity = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return self.complexity() && Object.keys(self.complexity()).length > 0;
    });
    self.hasRisks = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return self.hasComplexity() && self.complexity()['hints'] && self.complexity()['hints'].length > 0;
    });
    self.topRisk = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      if (self.hasRisks()) {
        return self.complexity()['hints'][0];
      } else {
        return null;
      }
    });
    self.suggestion = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
    self.hasSuggestion = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(null);
    self.compatibilityCheckRunning = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.compatibilitySourcePlatforms = [];
    Object.keys(COMPATIBILITY_SOURCE_PLATFORMS).forEach(function (key) {
      self.compatibilitySourcePlatforms.push(COMPATIBILITY_SOURCE_PLATFORMS[key]);
    });
    self.compatibilitySourcePlatform = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(COMPATIBILITY_SOURCE_PLATFORMS[self.type()]);
    self.compatibilitySourcePlatform.subscribe(function (newValue) {
      if (newValue && newValue.value !== self.type()) {
        self.hasSuggestion(null);
        self.compatibilityTargetPlatform(COMPATIBILITY_TARGET_PLATFORMS[self.type()]);
        self.queryCompatibility();
      }
    });
    self.compatibilityTargetPlatforms = [];
    Object.keys(COMPATIBILITY_TARGET_PLATFORMS).forEach(function (key) {
      self.compatibilityTargetPlatforms.push(COMPATIBILITY_TARGET_PLATFORMS[key]);
    });
    self.compatibilityTargetPlatform = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(COMPATIBILITY_TARGET_PLATFORMS[self.type()]);
    self.showSqlAnalyzer = knockout__WEBPACK_IMPORTED_MODULE_1__.observable((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__.getFromLocalStorage)('editor.show.sql.analyzer', false));
    self.showSqlAnalyzer.subscribe(function (newValue) {
      if (newValue !== null) {
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_10__.setInLocalStorage)('editor.show.sql.analyzer', newValue);
      }
    });
    if (window.HAS_SQL_ANALYZER && !vm.isNotificationManager()) {
      var lastComplexityRequest;
      var lastCheckedComplexityStatement;
      var knownResponses = [];
      self.delayedStatement = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(self.statement).extend({
        rateLimit: {
          method: 'notifyWhenChangesStop',
          timeout: 2000
        }
      });
      var handleRiskResponse = function handleRiskResponse(data) {
        if (data.status == 0) {
          self.hasSuggestion('');
          self.complexity(data.query_complexity);
        } else {
          self.hasSuggestion('error');
          self.complexity({
            hints: []
          });
        }
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.active.risks', {
          editor: self.ace(),
          risks: self.complexity() || {}
        });
        lastCheckedComplexityStatement = self.statement();
      };
      var clearActiveRisks = function clearActiveRisks() {
        if (self.hasSuggestion() !== null && typeof self.hasSuggestion() !== 'undefined') {
          self.hasSuggestion(null);
        }
        if (self.suggestion() !== '') {
          self.suggestion('');
        }
        if (self.complexity() !== {}) {
          self.complexity(undefined);
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.active.risks', {
            editor: self.ace(),
            risks: {}
          });
        }
      };
      self.positionStatement.subscribe(function (newStatement) {
        if (newStatement) {
          var hash = newStatement.statement.hashCode();
          var unknownResponse = knownResponses.every(function (knownResponse) {
            if (knownResponse.hash === hash) {
              handleRiskResponse(knownResponse.data);
              return false;
            }
            return true;
          });
          if (unknownResponse) {
            clearActiveRisks();
          }
        }
      });
      self.checkComplexity = function () {
        if (!self.inFocus() || lastCheckedComplexityStatement === self.statement()) {
          return;
        }

        // The syntaxError property is only set if the syntax checker is active and has found an
        // error, see AceLocationHandler.
        if (self.positionStatement() && self.positionStatement().syntaxError) {
          return;
        }
        (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_15__.cancelActiveRequest)(lastComplexityRequest);
        utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'get_query_risk');
        clearActiveRisks();
        var changeSubscription = self.statement.subscribe(function () {
          changeSubscription.dispose();
          (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_15__.cancelActiveRequest)(lastComplexityRequest);
        });
        var hash = self.statement().hashCode();
        var unknownResponse = knownResponses.every(function (knownResponse) {
          if (knownResponse.hash === hash) {
            handleRiskResponse(knownResponse.data);
            return false;
          }
          return true;
        });
        if (unknownResponse) {
          lastComplexityRequest = jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
            type: 'POST',
            url: '/notebook/api/optimizer/statement/risk',
            timeout: 30000,
            // 30 seconds
            data: {
              notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
              snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext())
            },
            success: function success(data) {
              knownResponses.unshift({
                hash: hash,
                data: data
              });
              if (knownResponses.length > 50) {
                knownResponses.pop();
              }
              handleRiskResponse(data);
            },
            always: function always(data) {
              changeSubscription.dispose();
            }
          });
        }
      };
      if (self.type() === 'hive' || self.type() === 'impala') {
        if (self.statement_raw()) {
          window.setTimeout(function () {
            self.checkComplexity();
          }, 2000);
        }
        self.delayedStatement.subscribe(function () {
          self.checkComplexity();
        });
      }
    }
    self._ajaxError = function (data, callback) {
      if (data.status == -2) {
        // Session expired
        var existingSession = notebook.getSession(self.type());
        if (existingSession) {
          notebook.restartSession(existingSession, callback);
        } else {
          notebook.createSession(new _session__WEBPACK_IMPORTED_MODULE_12__["default"](vm, {
            type: self.type()
          }), callback);
        }
      } else if (data.status == -3) {
        // Statement expired
        self.status('expired');
        if (data.message) {
          self.errors.push({
            message: data.message,
            help: null,
            line: null,
            col: null
          });
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.snippet.result.normal', self);
        }
      } else if (data.status == -4) {
        // Operation timed out
        notebook.retryModalCancel = function () {
          self.status('failed');
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('hide.retry.modal');
        };
        notebook.retryModalConfirm = function () {
          if (callback) {
            callback();
          }
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('hide.retry.modal');
        };
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('show.retry.modal');
      } else if (data.status == 401) {
        // Auth required
        self.status('expired');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('showAuthModal', {
          type: self.type(),
          callback: self.execute,
          message: data.message
        });
      } else if (data.status == 1 || data.status == -1) {
        self.status('failed');
        var match = ERROR_REGEX.exec(data.message);
        if (match) {
          var errorLine = parseInt(match[1]);
          var errorCol;
          if (typeof match[3] !== 'undefined') {
            errorCol = parseInt(match[3]);
          }
          if (self.positionStatement()) {
            if (errorCol && errorLine === 1) {
              errorCol += self.positionStatement().location.first_column;
            }
            errorLine += self.positionStatement().location.first_line - 1;
          }
          self.errors.push({
            message: data.message.replace(match[0], 'line ' + errorLine + (errorCol !== null ? ':' + errorCol : '')),
            help: null,
            line: errorLine - 1,
            col: errorCol
          });
        } else {
          self.errors.push({
            message: data.message,
            help: data.help,
            line: null,
            col: null
          });
        }
      } else {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
          message: data.message
        });
        self.status('failed');
      }
    };
    self.wasBatchExecuted = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.wasBatchExecuted != 'undefined' && snippet.wasBatchExecuted != null ? snippet.wasBatchExecuted : false);
    self.isReady = knockout__WEBPACK_IMPORTED_MODULE_1__.computed(function () {
      return self.statementType() == 'text' && (self.isSqlDialect() && self.statement() !== '' || ['jar', 'java', 'spark2', 'distcp'].indexOf(self.type()) == -1 && self.statement() !== '' || ['jar', 'java'].indexOf(self.type()) != -1 && self.properties().app_jar() != '' && self.properties()["class"]() != '' || ['spark2'].indexOf(self.type()) != -1 && self.properties().jars().length > 0 || ['shell'].indexOf(self.type()) != -1 && self.properties().command_path().length > 0 || ['mapreduce'].indexOf(self.type()) != -1 && self.properties().app_jar().length > 0 || ['py'].indexOf(self.type()) != -1 && self.properties().py_file().length > 0 || ['distcp'].indexOf(self.type()) != -1 && self.properties().source_path().length > 0 && self.properties().destination_path().length > 0) || self.statementType() == 'file' && self.statementPath().length > 0 || self.statementType() == 'document' && self.associatedDocumentUuid() && self.associatedDocumentUuid().length > 0;
    });
    self.lastExecuted = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(typeof snippet.lastExecuted != 'undefined' && snippet.lastExecuted != null ? snippet.lastExecuted : 0);
    self.lastAceSelectionRowOffset = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(snippet.lastAceSelectionRowOffset || 0);
    self.executingBlockingOperation = null; // A ExecuteStatement()
    self.showLongOperationWarning = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.showLongOperationWarning.subscribe(function (newValue) {
      if (newValue) {
        utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].convert('editor', 'showLongOperationWarning');
      }
    });
    var longOperationTimeout = -1;
    function startLongOperationTimeout() {
      longOperationTimeout = window.setTimeout(function () {
        self.showLongOperationWarning(true);
      }, 2000);
    }
    function stopLongOperationTimeout() {
      window.clearTimeout(longOperationTimeout);
      self.showLongOperationWarning(false);
    }
    self.lastExecutedStatements = undefined;
    self.lastExecutedSelectionRange = undefined;
    self.execute = function (automaticallyTriggered) {
      self.clearActiveExecuteRequests();
      if (!automaticallyTriggered && self.ace()) {
        var selectionRange = self.ace().getSelectionRange();
        if (self.lastExecutedSelectionRange && selectionRange.start.row !== selectionRange.end.row && selectionRange.start.column !== selectionRange.end.column && (selectionRange.start.row !== self.lastExecutedSelectionRange.start.row || selectionRange.start.column !== self.lastExecutedSelectionRange.start.column || selectionRange.end.row !== self.lastExecutedSelectionRange.end.row || selectionRange.end.column !== self.lastExecutedSelectionRange.end.column)) {
          // Manual execute and there is a selection that is different from the last execute
          self.result.cancelBatchExecution();
        }
        self.lastExecutedSelectionRange = selectionRange;
      }
      if (self.isCanceling()) {
        return;
      }
      var now = new Date().getTime();
      if (now - self.lastExecuted() < 1000 || !self.isReady()) {
        return; // Prevent fast clicks
      }
      if (!automaticallyTriggered) {
        // Do not cancel statements that are parts of a set of steps to execute (e.g. import). Only cancel statements as requested by user
        if (self.status() === 'running' || self.status() === 'loading') {
          self.cancel(); // TODO: Wait for cancel to finish
        } else {
          self.result.clear();
        }
      }
      if (self.type() === 'impala') {
        self.showExecutionAnalysis(false);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.clear.execution.analysis');
      }
      self.status('running');
      self.statusForButtons('executing');
      if (self.isSqlDialect()) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_ko_bindings_ace_aceLocationHandler__WEBPACK_IMPORTED_MODULE_21__.REFRESH_STATEMENT_LOCATIONS_EVENT, self.id());
      }
      self.lastExecutedStatements = self.statement();
      if (self.ace()) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('ace.set.autoexpand', {
          autoExpand: false,
          snippet: self
        });
        var _selectionRange = self.ace().getSelectionRange();
        self.lastAceSelectionRowOffset(Math.min(_selectionRange.start.row, _selectionRange.end.row));
      }
      self.previousChartOptions = vm.getPreviousChartOptions(self);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('executeStarted', {
        vm: vm,
        snippet: self
      });
      self.lastExecuted(now);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('hide.global.alerts');
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'execute/' + self.type());
      notebook.forceHistoryInitialHeight(true);
      if (self.result.handle()) {
        self.close();
      }
      self.errors([]);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.clear.highlighted.errors', self.ace());
      self.result.clear();
      self.progress(0);
      self.jobs([]);
      self.result.logs('');
      self.result.statement_range({
        start: {
          row: 0,
          column: 0
        },
        end: {
          row: 0,
          column: 0
        }
      });
      notebook.historyCurrentPage(1);

      // TODO: rename startLongOperationTimeout to startBlockingOperationTimeout
      // TODO: stop blocking operation UI if there is one
      // TODO: offer to stop blocking submit or fetch operation UI if there is one (add a new call to function for cancelBlockingOperation)
      // TODO: stop current blocking operation if there is one
      // TODO: handle jquery.dataTables.1.8.2.min.js:150 Uncaught TypeError: Cannot read property 'asSorting' of undefined on some cancels
      // TODO: we should cancel blocking operation when leaving notebook (similar to unload())
      // TODO: we should test when we go back to a query history of a blocking operation that we left
      startLongOperationTimeout();
      self.currentQueryTab('queryHistory');
      self.executingBlockingOperation = jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/execute/' + self.type(), {
        notebook: vm.editorMode() ? knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook, NOTEBOOK_MAPPING) : knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
        snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext())
      }, function (data) {
        try {
          if (self.isSqlDialect() && data && data.handle) {
            self.lastExecutedStatement((0,parse_utils__WEBPACK_IMPORTED_MODULE_13__.getStatementsParser)(self.connector()).parse(data.handle.statement)[0]);
          } else {
            self.lastExecutedStatement(null);
          }
        } catch (e) {
          self.lastExecutedStatement(null);
        }
        self.statusForButtons('executed');
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('ace.set.autoexpand', {
          autoExpand: true,
          snippet: self
        });
        stopLongOperationTimeout();
        if (vm.editorMode() && data.history_id) {
          if (!vm.isNotificationManager()) {
            var url = vm.URLS.editor + '?editor=' + data.history_id;
            vm.changeURL(url);
          }
          notebook.id(data.history_id);
          notebook.uuid(data.history_uuid);
          notebook.isHistory(true);
          notebook.parentSavedQueryUuid(data.history_parent_uuid);
        }
        if (data.status === 0) {
          self.result.clear();
          self.result.handle(data.handle);
          self.result.hasResultset(data.handle.has_result_set);
          if (self.type() === 'trino') {
            var existing_handle = self.result.handle();
            existing_handle.row_count = data.handle.row_count;
            existing_handle.next_uri = data.handle.next_uri;
          }
          self.showLogs(true);
          if (data.handle.sync) {
            self.loadData(data.result, 100);
            self.status('available');
            self.progress(100);
            self.result.endTime(new Date());
          } else if (!notebook.unloaded()) {
            self.checkStatus();
          }
          if (vm.isSqlAnalyzerEnabled()) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.upload.query', data.history_id);
          }
        } else {
          self._ajaxError(data, self.execute);
          notebook.isExecutingAll(false);
        }
        if (data.handle) {
          if (data.handle.session_id) {
            // Execute can update the session
            if (!notebook.sessions().length) {
              notebook.addSession(new _session__WEBPACK_IMPORTED_MODULE_12__["default"](vm, {
                type: data.handle.session_type || self.type(),
                session_id: data.handle.session_guid,
                id: data.handle.session_id,
                properties: {}
              }));
            } else {
              notebook.sessions()[0].session_id(data.handle.session_guid);
              notebook.sessions()[0].id(data.handle.session_id);
              notebook.sessions()[0].type(data.handle.session_type || self.type());
            }
          }
          if (vm.editorMode()) {
            if (vm.isNotificationManager()) {
              // Update task status
              var tasks = jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(notebook.history(), function (row) {
                return row.uuid() == notebook.uuid();
              });
              if (tasks.length === 1) {
                tasks[0].status(self.status());
                self.result.logs(data.message);
              }
            } else {
              notebook.history.unshift(notebook.makeHistoryRecord(undefined, data.handle.statement, self.lastExecuted(), self.status(), notebook.name(), notebook.uuid()));
            }
          }
          if (data.handle.statements_count != null) {
            self.result.statements_count(data.handle.statements_count);
            self.result.statement_id(data.handle.statement_id);
            self.result.previous_statement_hash(data.previous_statement_hash);
            if (data.handle.statements_count > 1 && data.handle.start != null && data.handle.end != null) {
              self.result.statement_range({
                start: data.handle.start,
                end: data.handle.end
              });
            }
          }
        }
      }).fail(function (xhr, textStatus, errorThrown) {
        if (self.statusForButtons() != 'canceled' && xhr.status !== 502) {
          // No error when manually canceled
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
            message: xhr.responseText
          });
        }
        self.status('failed');
        self.statusForButtons('executed');
      }).always(function () {
        self.executingBlockingOperation = null;
      });
    };
    self.reexecute = function () {
      self.result.cancelBatchExecution();
      self.execute();
    };
    self.formatEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return self.statement_raw && self.statement_raw() != null && self.statement_raw().length < 400000; // ie: 5000 lines at 80 chars per line
    });
    self.createGist = function () {
      if (self.isSqlDialect()) {
        _api_apiHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createGist({
          statement: self.ace().getSelectedText() !== '' ? self.ace().getSelectedText() : self.statement_raw(),
          doc_type: self.type(),
          name: self.name(),
          description: ''
        }).done(function (data) {
          if (data.status === 0) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_ko_components_ko_shareGistModal__WEBPACK_IMPORTED_MODULE_14__.SHOW_EVENT, {
              link: data.link
            });
          } else {
            self._ajaxError(data);
          }
        });
      }
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('gist', self.type());
    };
    self.format = function () {
      if (self.isSqlDialect()) {
        _api_apiHelper__WEBPACK_IMPORTED_MODULE_5__["default"].formatSql({
          statements: self.ace().getSelectedText() != '' ? self.ace().getSelectedText() : self.statement_raw()
        }).done(function (data) {
          if (data.status == 0) {
            if (self.ace().getSelectedText() != '') {
              self.ace().session.replace(self.ace().session.selection.getRange(), data.formatted_statements);
            } else {
              self.statement_raw(data.formatted_statements);
              self.ace().setValue(self.statement_raw(), 1);
            }
          } else {
            self._ajaxError(data);
          }
        });
      }
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'format');
    };
    self.clear = function () {
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'clear');
      self.ace().setValue('', 1);
      self.result.clear();
      self.status('ready');
    };
    self.explain = function () {
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'explain');
      if (self.statement() == '' || self.status() == 'running' || self.status() === 'loading') {
        return;
      }
      self.result.explanation('');
      self.errors([]);
      self.progress(0);
      self.status('ready');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/explain', {
        notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
        snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext())
      }, function (data) {
        if (data.status == 0) {
          self.currentQueryTab('queryExplain');
          self.result.fetchedOnce(true);
          self.result.explanation(data.explanation);
        } else {
          self._ajaxError(data);
        }
      });
    };
    var lastCompatibilityRequest;
    self.checkCompatibility = function () {
      self.hasSuggestion(null);
      self.compatibilitySourcePlatform(COMPATIBILITY_SOURCE_PLATFORMS[self.type()]);
      self.compatibilityTargetPlatform(COMPATIBILITY_TARGET_PLATFORMS[self.type() === 'hive' ? 'impala' : 'hive']);
      self.queryCompatibility();
    };
    self.queryCompatibility = function (targetPlatform) {
      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_15__.cancelActiveRequest)(lastCompatibilityRequest);
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'compatibility');
      self.compatibilityCheckRunning(targetPlatform != self.type());
      self.hasSuggestion(null);
      var positionStatement = self.positionStatement();
      lastCompatibilityRequest = jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/optimizer/statement/compatibility', {
        notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
        snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext()),
        sourcePlatform: self.compatibilitySourcePlatform().value,
        targetPlatform: self.compatibilityTargetPlatform().value
      }, function (data) {
        if (data.status === 0) {
          self.aceErrorsHolder([]);
          self.aceWarningsHolder([]);
          self.suggestion(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(data.query_compatibility));
          if (self.suggestion().queryError && self.suggestion().queryError.errorString()) {
            var match = ERROR_REGEX.exec(self.suggestion().queryError.errorString());
            var line = null;
            if (match) {
              if (positionStatement) {
                line = positionStatement.location.first_line + parseInt(match[1]) + 1;
              } else {
                line = parseInt(match[1]) - 1;
              }
            }
            self.aceWarningsHolder.push({
              message: self.suggestion().queryError.errorString(),
              line: line,
              col: match === null ? null : typeof match[3] !== 'undefined' ? parseInt(match[3]) : null
            });
            self.status('with-sql-analyzer-report');
          }
          if (self.suggestion().parseError()) {
            var _match = ERROR_REGEX.exec(self.suggestion().parseError());
            self.aceErrorsHolder.push({
              message: self.suggestion().parseError(),
              line: _match === null ? null : parseInt(_match[1]) - 1,
              col: _match === null ? null : typeof _match[3] !== 'undefined' ? parseInt(_match[3]) : null
            });
            self.status('with-sql-analyzer-report');
          }
          self.showSqlAnalyzer(true);
          self.hasSuggestion(true);
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      }).fail(function (xhr, textStatus, errorThrown) {
        if (xhr.status !== 502) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
            message: xhr.responseText
          });
        }
      }).always(function () {
        self.compatibilityCheckRunning(false);
      });
    };
    self.fetchResult = function (rows, startOver) {
      if (typeof startOver == 'undefined') {
        startOver = true;
      }
      self.fetchResultData(rows, startOver);
      //self.fetchResultMetadata(rows);
    };
    self.isFetchingData = false;
    self.fetchExecutionAnalysis = function () {
      if (self.type() === 'impala') {
        // TODO: Use real query ID
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.update.execution.analysis', {
          analysisPossible: true,
          compute: self.compute(),
          queryId: notebook.getContext().id(),
          name: self.jobs()[0] && self.jobs()[0].name
        });
      } else {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.update.execution.analysis', {
          analysisPossible: false
        });
      }
    };
    self.fetchResultData = function (rows, startOver) {
      if (!self.isFetchingData) {
        if (self.status() === 'available') {
          startLongOperationTimeout();
          self.isFetchingData = true;
          utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'fetchResult/' + rows + '/' + startOver);
          jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/fetch_result_data', {
            notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
            snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext()),
            rows: rows,
            startOver: startOver
          }, function (data) {
            stopLongOperationTimeout();
            data = JSON.bigdataParse(data);
            if (data.status === 0) {
              self.showExecutionAnalysis(true);
              self.loadData(data.result, rows);
              if (self.type() === 'trino') {
                var existing_handle = self.result.handle();
                existing_handle.row_count = data.result.row_count;
                existing_handle.next_uri = data.result.next_uri;
              }
            } else {
              self._ajaxError(data, function () {
                self.isFetchingData = false;
                self.fetchResultData(rows, startOver);
              });
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('renderDataError', {
                snippet: self
              });
            }
          }, 'text').fail(function (xhr, textStatus, errorThrown) {
            if (xhr.status !== 502) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
                message: xhr.responseText
              });
            }
          }).always(function () {
            self.isFetchingData = false;
          });
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.snippet.result.normal', self);
        }
      }
    };
    self.loadData = function (result, rows) {
      rows -= result.data.length;
      if (result.data.length > 0) {
        self.currentQueryTab('queryResults');
      }
      var _initialIndex = self.result.data().length;
      var _tempData = [];
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(result.data, function (index, row) {
        row.unshift(_initialIndex + index + 1);
        self.result.data.push(row);
        _tempData.push(row);
      });
      if (self.result.rows() == null || (self.result.rows() + '').indexOf('+') != -1) {
        self.result.rows(self.result.data().length + (result.has_more ? '+' : ''));
      }
      self.result.images(typeof result.images != 'undefined' && result.images != null ? result.images : []);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.render.data', {
        data: _tempData,
        snippet: self,
        initial: _initialIndex == 0
      });
      if (!self.result.fetchedOnce()) {
        result.meta.unshift({
          type: 'INT_TYPE',
          name: '',
          comment: null
        });
        self.result.meta(result.meta);
        self.result.type(result.type);
        self.result.fetchedOnce(true);
      }
      self.result.meta().forEach(function (meta) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(meta.type, ['TINYINT_TYPE', 'SMALLINT_TYPE', 'INT_TYPE', 'BIGINT_TYPE', 'FLOAT_TYPE', 'DOUBLE_TYPE', 'DECIMAL_TYPE']) > -1) {
          meta.cssClass = 'sort-numeric';
        } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(meta.type, ['TIMESTAMP_TYPE', 'DATE_TYPE', 'DATETIME_TYPE']) > -1) {
          meta.cssClass = 'sort-date';
        } else {
          meta.cssClass = 'sort-string';
        }
      });
      self.result.hasMore(result.has_more);
      if (result.has_more && rows > 0) {
        setTimeout(function () {
          self.fetchResultData(rows, false);
        }, 500);
      } else if (!vm.editorMode() && !notebook.isPresentationMode() && notebook.snippets()[notebook.snippets().length - 1] == self) {
        notebook.newSnippet();
      }
    };
    self.fetchResultMetadata = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/fetch_result_metadata', {
        notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
        snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext())
      }, function (data) {
        if (data.status == 0) {
          self.result.meta(data.result.meta);
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      }).fail(function (xhr, textStatus, errorThrown) {
        if (xhr.status !== 502) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
            message: xhr.responseText
          });
        }
        self.status('failed');
      });
    };
    self.fetchResultSize = function (n, query_id) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/fetch_result_size', {
        notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
        snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext())
      }, function (data) {
        if (query_id == notebook.id()) {
          // If still on the same result
          if (data.status == 0) {
            if (data.result.rows != null) {
              self.result.rows(data.result.rows);
            } else if (self.type() == 'impala' && n > 0) {
              setTimeout(function () {
                self.fetchResultSize(n - 1, query_id);
              }, 1000);
            }
          } else if (data.status == 5) {
            // No supported yet for this snippet
          }
        }
      });
    };
    self.checkStatus = function () {
      var _checkStatus = function _checkStatus() {
        self.lastCheckStatusRequest = jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/check_status', {
          notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
          snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext())
        }, function (data) {
          if (self.statusForButtons() == 'canceling' || self.status() == 'canceled') {
            // Query was canceled in the meantime, do nothing
          } else {
            self.result.endTime(new Date());
            if (data.status === 0) {
              self.status(data.query_status.status);
              if (self.result.handle() && data.query_status.has_result_set !== undefined) {
                self.result.handle().has_result_set = data.query_status.has_result_set;
                self.result.hasResultset(self.result.handle().has_result_set);
              }
              if (self.status() == 'running' || self.status() == 'starting' || self.status() == 'waiting') {
                if (self.type() === 'trino') {
                  var existing_handle = self.result.handle();
                  existing_handle.row_count = 0;
                  existing_handle.next_uri = data.query_status.next_uri;
                }
                var delay = self.result.executionTime() > 45000 ? 5000 : 1000; // 5s if more than 45s
                if (!notebook.unloaded()) {
                  self.checkStatusTimeout = setTimeout(_checkStatus, delay);
                }
              } else if (self.status() === 'available' || self.status() === 'success') {
                if (self.status() === 'available') {
                  self.fetchResult(100);
                }
                self.progress(100);
                if (self.isSqlDialect()) {
                  if (self.result.handle().has_result_set) {
                    var _query_id = notebook.id();
                    setTimeout(function () {
                      // Delay until we get IMPALA-5555
                      self.fetchResultSize(10, _query_id);
                    }, 2000);
                    self.checkDdlNotification(); // DDL CTAS with Impala
                  } else if (self.lastExecutedStatement()) {
                    self.checkDdlNotification();
                  } else {
                    self.onDdlExecute();
                  }
                }
                if (notebook.isExecutingAll()) {
                  notebook.executingAllIndex(notebook.executingAllIndex() + 1);
                  if (notebook.executingAllIndex() < notebook.snippets().length) {
                    notebook.snippets()[notebook.executingAllIndex()].execute();
                  } else {
                    notebook.isExecutingAll(false);
                  }
                }
                if (!self.result.handle().has_more_statements && vm.successUrl()) {
                  utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('open.link', vm.successUrl()); // Not used anymore in Hue 4
                }
              }
            } else if (data.status === -3) {
              self.status('expired');
              notebook.isExecutingAll(false);
            } else {
              self._ajaxError(data);
              notebook.isExecutingAll(false);
            }
          }
        }).fail(function (xhr, textStatus, errorThrown) {
          if (xhr.stausText !== 'abort') {
            if (xhr.status !== 502) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
                message: xhr.responseText || textStatus
              });
            }
            self.status('failed');
            notebook.isExecutingAll(false);
          }
        });
      };
      var activeStatus = ['running', 'starting', 'waiting'];
      var _getLogs = function _getLogs(isLastTime) {
        window.clearTimeout(self.getLogsTimeout);
        self.getLogs().then(function () {
          var lastTime = activeStatus.indexOf(self.status()) < 0; // We to run getLogs at least one time after status is terminated to make sure we have last logs
          if (lastTime && isLastTime) {
            return;
          }
          var delay = self.result.executionTime() > 45000 ? 5000 : 1000; // 5s if more than 45s
          self.getLogsTimeout = setTimeout(_getLogs.bind(self, lastTime), delay);
        });
      };
      _checkStatus();
      _getLogs(activeStatus.indexOf(self.status()) < 0);
    };
    self.checkDdlNotification = function () {
      if (self.lastExecutedStatement() && /ALTER|ANALYZE|WITH|REFRESH|CREATE|DELETE|DROP|GRANT|INSERT|INVALIDATE|LOAD|SET|TRUNCATE|UPDATE|UPSERT|USE/i.test(self.lastExecutedStatement().firstToken)) {
        self.onDdlExecute();
      } else {
        window.clearTimeout(self.executeNextTimeout);
      }
    };
    self.isCanceling = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    self.cancel = function () {
      window.clearTimeout(self.executeNextTimeout);
      self.isCanceling(true);
      self.clearActiveExecuteRequests();
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'cancel');
      if (self.executingBlockingOperation != null) {
        self.executingBlockingOperation.abort();
        self.executingBlockingOperation = null;
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default().isEmptyObject(self.result.handle())) {
        // Query was not even submitted yet
        self.statusForButtons('canceled');
        self.status('failed');
        self.isCanceling(false);
        notebook.isExecutingAll(false);
      } else {
        self.statusForButtons('canceling');
        jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/cancel_statement', {
          notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
          snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext())
        }, function (data) {
          self.statusForButtons('canceled');
          if (data.status == 0) {
            self.status('canceled');
            notebook.isExecutingAll(false);
          } else {
            self._ajaxError(data);
          }
        }).fail(function (xhr, textStatus, errorThrown) {
          if (xhr.status !== 502) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
              message: xhr.responseText
            });
          }
          self.statusForButtons('canceled');
          self.status('failed');
          notebook.isExecutingAll(false);
        }).always(function () {
          self.isCanceling(false);
        });
      }
    };
    self.close = function () {
      self.clearActiveExecuteRequests();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/close_statement', {
        notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
        snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext())
      }, function (data) {
        if (data.status == 0) {
          // self.status('closed'); // Keep as 'running' as currently it happens before running a new query
        } else {
          // self._ajaxError(data);
        }
      });
    };
    self.clearActiveExecuteRequests = function () {
      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_15__.cancelActiveRequest)(self.lastGetLogsRequest);
      if (self.getLogsTimeout !== null) {
        window.clearTimeout(self.getLogsTimeout);
        self.getLogsTimeout = null;
      }
      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_15__.cancelActiveRequest)(self.lastCheckStatusRequest);
      if (self.checkStatusTimeout !== null) {
        window.clearTimeout(self.checkStatusTimeout);
        self.checkStatusTimeout = null;
      }
    };
    self.getLogs = function () {
      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_15__.cancelActiveRequest)(self.lastGetLogsRequest);
      self.lastGetLogsRequest = jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/get_logs', {
        notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
        snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext()),
        from: self.result.logLines,
        jobs: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.jobs, {
          ignore: ['percentJob']
        }),
        full_log: self.result.logs
      }, function (data) {
        if (data.status == 1) {
          // Append errors to the logs
          data.status = 0;
          data.logs = data.message;
        }
        if (data.status == 0) {
          if (data.logs.length > 0) {
            var logs = data.logs.split('\n');
            self.result.logLines += logs.length;
            var oldLogs = self.result.logs();
            if (data.logs && (oldLogs === '' || self.wasBatchExecuted() && data.logs.indexOf('Unable to locate') == -1 || data.isFullLogs)) {
              self.result.logs(data.logs);
            } else {
              self.result.logs(oldLogs + '\n' + data.logs);
            }
          }
          self.jobs().forEach(function (job) {
            if (typeof job.percentJob === 'undefined') {
              job.percentJob = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(-1);
            }
          });
          if (data.jobs && data.jobs.length > 0) {
            data.jobs.forEach(function (job) {
              var _found = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayFilter(self.jobs(), function (item) {
                return item.name === job.name;
              });
              if (_found.length === 0) {
                if (typeof job.percentJob === 'undefined') {
                  job.percentJob = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(-1);
                } else {
                  job.percentJob = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(job.percentJob);
                }
                var config = (0,config_hueConfig__WEBPACK_IMPORTED_MODULE_17__.getLastKnownConfig)();
                // Yarn job names start with 'application' and we skip them if yarn config is not present.
                if (job.name.startsWith('application') && !(config && config['hue_config'] && config['hue_config']['is_yarn_enabled'])) {
                  return;
                }
                self.jobs.push(job);
              } else if (typeof job.percentJob !== 'undefined') {
                for (var i = 0; i < _found.length; i++) {
                  _found[i].percentJob(job.percentJob);
                }
              }
            });
            self.jobs().forEach(function (job) {
              var _found = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayFilter(self.jobs(), function (item) {
                return item.name === job.name;
              });
              if (_found.length === 0) {
                self.jobs.remove(job);
              }
            });
          }
          if (self.status() == 'running') {
            // Maybe the query finished or failed in the meantime
            self.progress(data.progress);
          }
        } else {
          self._ajaxError(data);
        }
      }).fail(function (xhr, textStatus, errorThrown) {
        if (xhr.statusText !== 'abort') {
          if (xhr.status !== 502) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
              message: xhr.responseText || textStatus
            });
          }
          self.status('failed');
        }
      });
      return self.lastGetLogsRequest;
    };
    self.uploadQueryHistory = function (n) {
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'upload_query_history');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/metadata/api/optimizer/upload/history', {
        n: typeof n != 'undefined' ? n : null,
        sourcePlatform: self.type()
      }, function (data) {
        if (data.status == 0) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_INFO_TOPIC, {
            message: data.upload_history[self.type()].count + ' queries uploaded successfully. Processing them...'
          });
          self.watchUploadStatus(data.upload_history[self.type()].status.workloadId);
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      });
    };
    self.uploadQuery = function (query_id) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/metadata/api/optimizer/upload/query', {
        query_id: query_id,
        sourcePlatform: self.type()
      });
    };
    self.uploadTableStats = function (options) {
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'load_table_stats');
      if (options.showProgress) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_INFO_TOPIC, {
          message: 'Preparing table data...'
        });
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/metadata/api/optimizer/upload/table_stats', {
        db_tables: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(jquery__WEBPACK_IMPORTED_MODULE_0___default().map(options.activeTables, function (table) {
          return table.databaseName + '.' + table.tableName;
        })),
        sourcePlatform: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.type()),
        with_ddl: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(true),
        with_table_stats: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(true),
        with_columns_stats: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(true)
      }, function (data) {
        if (data.status == 0) {
          if (options.showProgress) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_INFO_TOPIC, {
              message: jquery__WEBPACK_IMPORTED_MODULE_0___default().map(options.activeTables, function (table) {
                return table.tableName;
              }) + ' stats sent to analyse'
            });
          }
          if (data.upload_table_ddl && options.showProgress) {
            // With showProgress only currently as can be very slow
            self.watchUploadStatus(data.upload_table_ddl.status.workloadId, options.showProgress);
          }
        } else if (options.showProgress) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      }).always(function () {
        if (options.callback) {
          options.callback();
        }
      });
    };
    self.watchUploadStatus = function (workloadId, showProgress) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/metadata/api/optimizer/upload/status', {
        workloadId: workloadId
      }, function (data) {
        if (data.status == 0) {
          if (showProgress) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_INFO_TOPIC, {
              message: 'Query processing: ' + data.upload_status.status.state
            });
          }
          if (['WAITING', 'IN_PROGRESS'].indexOf(data.upload_status.status.state) != -1) {
            window.setTimeout(function () {
              self.watchUploadStatus(workloadId);
            }, 2000);
          } else if (showProgress) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_WARNING_TOPIC, {
              message: data.upload_status.status.statusMsg + (data.upload_status.status.failedQueries > 0 ? '. ' + data.upload_status.status.failQueryDetails.map(function (query) {
                return query.error;
              }) : '')
            });
          }
        } else if (showProgress) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      });
    };
    self.getSimilarQueries = function () {
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"].log('notebook', 'get_query_similarity');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/optimizer/statement/similarity', {
        notebook: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(notebook.getContext()),
        snippet: knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().toJSON(self.getContext()),
        sourcePlatform: self.type()
      }, function (data) {
        if (data.status == 0) {
          // eslint-disable-next-line no-restricted-syntax
          console.log(data.statement_similarity);
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_19__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      });
    };
    self.autocompleter = new _aceAutocompleteWrapper__WEBPACK_IMPORTED_MODULE_4__["default"]({
      snippet: self,
      user: vm.user,
      optEnabled: false
    });
    self.init = function () {
      if ((self.status() == 'running' || self.status() == 'available') && notebook.isHistory()) {
        self.checkStatus();
      } else if (self.status() == 'loading') {
        self.status('failed');
        self.progress(0);
        self.jobs([]);
      } else if (self.status() == 'ready-execute') {
        self.execute();
      }
    };
    self.onKeydownInVariable = function (context, e) {
      if ((e.ctrlKey || e.metaKey) && e.which === 13) {
        // Ctrl-enter
        self.ace().commands.commands['execute'].exec();
      } else if ((e.ctrlKey || e.metaKey) && e.which === 83) {
        // Ctrl-s
        self.ace().commands.commands['save'].exec();
        e.preventDefault(); // Prevent browser page save dialog
      }
      return true;
    };
    self.refreshHistory = notebook.fetchHistory;
  }
  return _createClass(Snippet, [{
    key: "dashboardRedirect",
    value: function dashboardRedirect() {
      var statement = this.selectedStatement() || this.positionStatement() && this.positionStatement().statement || this.statement_raw();
      window.open(window.CUSTOM_DASHBOARD_URL + '?db=' + window.encodeURIComponent(this.database()) + '&query=' + window.encodeURIComponent(statement), '_blank');
    }
  }, {
    key: "renderMarkdown",
    value: function renderMarkdown() {
      return this.statement_raw().replace(/([^$]*)([$]+[^$]*[$]+)?/g, function (a, textRepl, code) {
        return (0,utils_html_deXSS__WEBPACK_IMPORTED_MODULE_7__["default"])((0,snarkdown__WEBPACK_IMPORTED_MODULE_3__["default"])(textRepl)).replace(/^<p>|<\/p>$/g, '') + (code ? code : '');
      });
    }
  }, {
    key: "exportHistory",
    value: function () {
      var _exportHistory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var historyResponse;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api_apiHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getHistory({
                type: this.type(),
                limit: 500
              });
            case 2:
              historyResponse = _context.sent;
              if (historyResponse && historyResponse.history) {
                window.location.href = window.HUE_BASE_URL + '/desktop/api2/doc/export?history=true&documents=[' + historyResponse.history.map(function (historyDoc) {
                  return historyDoc.id;
                }).join(',') + ']';
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function exportHistory() {
        return _exportHistory.apply(this, arguments);
      }
      return exportHistory;
    }()
  }, {
    key: "toggleAllResultColumns",
    value: function toggleAllResultColumns(linkElement) {
      var $t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(linkElement).parents('.snippet').find('table.resultTable:eq(0)');
      var dt = $t.hueDataTable();
      dt.fnToggleAllCols(linkElement.checked);
      dt.fnDraw();
    }
  }, {
    key: "toggleResultColumn",
    value: function toggleResultColumn(linkElement, index) {
      var $t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(linkElement).parents('.snippet').find('table.resultTable:eq(0)');
      var dt = $t.hueDataTable();
      dt.fnSetColumnVis(index, linkElement.checked);
    }
  }, {
    key: "scrollToResultColumn",
    value: function scrollToResultColumn(linkElement) {
      var $resultTable = jquery__WEBPACK_IMPORTED_MODULE_0___default()(linkElement).parents('.snippet').find('table.resultTable:eq(0)');
      var _text = jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(jquery__WEBPACK_IMPORTED_MODULE_0___default()(linkElement).text());
      var _col = $resultTable.find('th').filter(function () {
        return jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text()) === _text;
      });
      $resultTable.find('.columnSelected').removeClass('columnSelected');
      var _colSel = $resultTable.find('tr th:nth-child(' + (_col.index() + 1) + ')');
      if (_colSel.length > 0) {
        $resultTable.find('tr td:nth-child(' + (_col.index() + 1) + ')').addClass('columnSelected');
        $resultTable.parent().scrollLeft(_colSel.position().left + $resultTable.parent().scrollLeft() - $resultTable.parent().offset().left - 30);
        $resultTable.data('scrollToCol', _col.index());
        $resultTable.data('scrollToRow', null);
        $resultTable.data('scrollAnimate', true);
        $resultTable.parent().trigger('scroll');
      }
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snippet);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'HiveQueryPlan',
  setup: function setup() {
    return {
      title: 'Web Component'
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var utils_hueUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/hueUtils */ "./desktop/core/src/desktop/js/utils/hueUtils.ts");
/* harmony import */ var _query_details_QueryDetailsDiff_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query-details/QueryDetailsDiff.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue");
/* harmony import */ var _query_details_QueryDetails_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-details/QueryDetails.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue");
/* harmony import */ var _query_table_QueryTable_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query-table/QueryTable.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue");
/* harmony import */ var _components_InlineAlert_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/InlineAlert.vue */ "./desktop/core/src/desktop/js/components/InlineAlert.vue");
/* harmony import */ var _components_Spinner_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Spinner.vue */ "./desktop/core/src/desktop/js/components/Spinner.vue");
/* harmony import */ var _commons_api_utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commons/api-utils/api */ "./desktop/core/src/desktop/js/apps/jobBrowser/commons/api-utils/api.ts");
/* harmony import */ var _api_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/query */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/api/query.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var QUERY_ID_PARAM = 'queryId';
var DEFAULT_TIME_WINDOW = 1000 * 60 * 60 * 24 * 7; // 7 days

// TODO: Have one single implimentation for Hive & Impala
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ImpalaQueries',
  components: {
    InlineAlert: _components_InlineAlert_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    QueryDetails: _query_details_QueryDetails_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    QueryDetailsDiff: _query_details_QueryDetailsDiff_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    QueryTable: _query_table_QueryTable_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Spinner: _components_Spinner_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  provide: function provide() {
    var _this = this;
    return {
      showQueries: function showQueries() {
        return _this.showQueries();
      }
    };
  },
  data: function data() {
    return {
      AlertType: _components_InlineAlert_vue__WEBPACK_IMPORTED_MODULE_5__.AlertType,
      error: null,
      lastFetchOptions: null,
      loading: false,
      queries: [],
      queriesToDiff: null,
      searchMeta: null,
      selectedQuery: null
    };
  },
  created: function created() {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var urlParams, queryIdValues, queryIndex;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            urlParams = new URLSearchParams(window.location.search);
            queryIdValues = [];
            queryIndex = 0;
            while (urlParams.get(QUERY_ID_PARAM + queryIndex)) {
              queryIdValues.push(urlParams.get(QUERY_ID_PARAM + queryIndex));
              queryIndex++;
            }
            if (!(queryIdValues.length === 1)) {
              _context.next = 9;
              break;
            }
            _context.next = 7;
            return _this2.querySelected({
              queryId: queryIdValues[0]
            });
          case 7:
            _context.next = 12;
            break;
          case 9:
            if (!(queryIdValues.length > 1)) {
              _context.next = 12;
              break;
            }
            _context.next = 12;
            return _this2.diffQueries(queryIdValues.map(function (queryId) {
              return {
                queryId: queryId
              };
            }));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    showQueries: function showQueries() {
      this.selectedQuery = null;
      this.queriesToDiff = null;
      this.error = null;
      var urlParams = new URLSearchParams(window.location.search);
      var index = 0;
      while (urlParams.get(QUERY_ID_PARAM + index)) {
        utils_hueUtils__WEBPACK_IMPORTED_MODULE_1__["default"].removeURLParameter(QUERY_ID_PARAM + index);
        index++;
      }
    },
    fetch: function fetch(options) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var now, searchResponse;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // Initial fetch triggered by the paginator
              now = Date.now();
              _this3.lastFetchOptions = options;
              _this3.loading = true;
              _context2.prev = 3;
              _context2.next = 6;
              return (0,_api_query__WEBPACK_IMPORTED_MODULE_8__.searchQueries)({
                endTime: options.timeRange && options.timeRange.to || now,
                limit: options.page.limit,
                offset: options.page.offset,
                facets: options.facets,
                text: options.text,
                sortText: "".concat(options.sort.column, ":").concat(options.sort.order),
                startTime: options.timeRange && options.timeRange.from || now - DEFAULT_TIME_WINDOW
              });
            case 6:
              searchResponse = _context2.sent;
              _this3.searchMeta = searchResponse.meta;
              _this3.queries = searchResponse.queries;
              _context2.next = 14;
              break;
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](3);
              _this3.error = new _commons_api_utils_api__WEBPACK_IMPORTED_MODULE_7__.ApiError(String(_context2.t0));
            case 14:
              _this3.loading = false;
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[3, 11]]);
      }))();
    },
    diffQueries: function diffQueries(queriesToDiff) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var fetchPromises;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              queriesToDiff.forEach(function (query, index) {
                utils_hueUtils__WEBPACK_IMPORTED_MODULE_1__["default"].changeURLParameter(QUERY_ID_PARAM + index, query.queryId);
              });
              _this4.loading = true;
              _context3.prev = 2;
              fetchPromises = queriesToDiff.map(function (query) {
                return (0,_api_query__WEBPACK_IMPORTED_MODULE_8__.loadQuery)(query.queryId);
              });
              _context3.next = 6;
              return Promise.all(fetchPromises);
            case 6:
              _this4.queriesToDiff = _context3.sent;
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](2);
              _this4.error = new _commons_api_utils_api__WEBPACK_IMPORTED_MODULE_7__.ApiError(String(_context3.t0));
            case 12:
              _this4.loading = false;
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 9]]);
      }))();
    },
    querySelected: function querySelected(query) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              utils_hueUtils__WEBPACK_IMPORTED_MODULE_1__["default"].changeURLParameter(QUERY_ID_PARAM + 0, query.queryId);
              _this5.loading = true;
              _context4.prev = 2;
              _context4.next = 5;
              return (0,_api_query__WEBPACK_IMPORTED_MODULE_8__.loadQuery)(query.queryId);
            case 5:
              _this5.selectedQuery = _context4.sent;
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](2);
              _this5.error = new _commons_api_utils_api__WEBPACK_IMPORTED_MODULE_7__.ApiError(String(_context4.t0));
            case 11:
              _this5.loading = false;
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[2, 8]]);
      }))();
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    showSlot: function showSlot() {
      if (this.$slots["default"]) {
        var _iterator = _createForOfIteratorHelper(this.$slots["default"]()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var node = _step.value;
            if (node && (node.type || this.validateTextChildren(node.children))) {
              return true;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return false;
    }
  },
  methods: {
    I18n: _utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"],
    validateTextChildren: function validateTextChildren(text) {
      if (typeof text === 'string') {
        text = text.replace(/(\r\n|\n|\r)/gm, '');
        return !!text.trim();
      }
      return false;
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var _components_HueButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/HueButton.vue */ "./desktop/core/src/desktop/js/components/HueButton.vue");
/* harmony import */ var _components_Tab_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/Tab.vue */ "./desktop/core/src/desktop/js/components/Tab.vue");
/* harmony import */ var _components_Tabs_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/Tabs.vue */ "./desktop/core/src/desktop/js/components/Tabs.vue");
/* harmony import */ var _QueryInfoTop_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QueryInfoTop.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue");
/* harmony import */ var _QueryInfo_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QueryInfo.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue");
/* harmony import */ var _counters_table_CountersTable_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counters-table/CountersTable.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    Tab: _components_Tab_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tabs: _components_Tabs_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    HueButton: _components_HueButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    QueryInfo: _QueryInfo_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    QueryInfoTop: _QueryInfoTop_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    CountersTable: _counters_table_CountersTable_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    query: {
      type: Object,
      required: true
    }
  },
  emits: ['reload'],
  setup: function setup() {
    return {
      showQueries: (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('showQueries')
    };
  },
  methods: {
    I18n: _utils_i18n__WEBPACK_IMPORTED_MODULE_8__["default"],
    reExecute: function reExecute() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('open.editor.new.query', {
                sourceType: 'impala'
              });
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribeOnce(ENABLE_HUE_5 ? 'ace.editor.focused' : 'set.current.app.view.model', function () {
                return setTimeout(function () {
                  utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('editor.insert.at.cursor', {
                    text: _this.query.queryText,
                    cursorEndAdjust: 0
                  });
                }, 100);
              }, '');
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getCounters: function getCounters(profile) {
      var kvToCounters = function kvToCounters(kv) {
        return Object.keys(kv).map(function (key) {
          return {
            counterName: key,
            counterValue: kv[key]
          };
        });
      };
      return [{
        counterGroupName: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_8__["default"])('CPU Metrics'),
        counters: kvToCounters(profile.cpuMetrics)
      }, {
        counterGroupName: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_8__["default"])('HDFS Metrics'),
        counters: kvToCounters(profile.hdfsMetrics)
      }, {
        counterGroupName: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_8__["default"])('Memory Metrics'),
        counters: kvToCounters(profile.memoryMetrics)
      }, {
        counterGroupName: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_8__["default"])('Thread Time Metrics'),
        counters: kvToCounters(profile.threadTimeMetrics)
      }];
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var _components_HueButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/HueButton.vue */ "./desktop/core/src/desktop/js/components/HueButton.vue");
/* harmony import */ var _components_Tab_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/Tab.vue */ "./desktop/core/src/desktop/js/components/Tab.vue");
/* harmony import */ var _components_Tabs_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/Tabs.vue */ "./desktop/core/src/desktop/js/components/Tabs.vue");
/* harmony import */ var _QueryInfoTop_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QueryInfoTop.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue");
/* harmony import */ var _QueryInfo_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QueryInfo.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue");
/* harmony import */ var _counters_table_CountersTable_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counters-table/CountersTable.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    HueButton: _components_HueButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Tab: _components_Tab_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tabs: _components_Tabs_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    QueryInfoTop: _QueryInfoTop_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    QueryInfo: _QueryInfo_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    CountersTable: _counters_table_CountersTable_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    queries: {
      type: Array,
      required: true
    }
  },
  setup: function setup() {
    var showQueries = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('showQueries');
    return {
      showQueries: showQueries
    };
  },
  data: function data() {
    return {
      hideSimilarValues: false,
      useSameTimeScale: true
    };
  },
  methods: {
    get: lodash__WEBPACK_IMPORTED_MODULE_8__.get,
    I18n: _utils_i18n__WEBPACK_IMPORTED_MODULE_7__["default"],
    getCounters: function getCounters(profile) {
      var kvToCounters = function kvToCounters(kv) {
        return Object.keys(kv).map(function (key) {
          return {
            counterName: key,
            counterValue: kv[key]
          };
        });
      };
      return [{
        counterGroupName: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_7__["default"])('CPU Metrics'),
        counters: kvToCounters(profile.cpuMetrics)
      }, {
        counterGroupName: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_7__["default"])('HDFS Metrics'),
        counters: kvToCounters(profile.hdfsMetrics)
      }, {
        counterGroupName: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_7__["default"])('Memory Metrics'),
        counters: kvToCounters(profile.memoryMetrics)
      }, {
        counterGroupName: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_7__["default"])('Thread Time Metrics'),
        counters: kvToCounters(profile.threadTimeMetrics)
      }];
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var _components_Duration_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/Duration.vue */ "./desktop/core/src/desktop/js/components/Duration.vue");
/* harmony import */ var _components_SqlText_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/SqlText.vue */ "./desktop/core/src/desktop/js/components/SqlText.vue");
/* harmony import */ var _components_TimeAgo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/TimeAgo.vue */ "./desktop/core/src/desktop/js/components/TimeAgo.vue");
/* harmony import */ var _components_HumanByteSize_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/HumanByteSize.vue */ "./desktop/core/src/desktop/js/components/HumanByteSize.vue");
/* harmony import */ var _LabeledInfo_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabeledInfo.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    Duration: _components_Duration_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TimeAgo: _components_TimeAgo_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SqlText: _components_SqlText_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    HumanByteSize: _components_HumanByteSize_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    LabeledInfo: _LabeledInfo_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    query: {
      type: Object,
      required: true
    },
    layout: {
      type: String,
      "default": 'row'
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var _components_StatusIndicator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/StatusIndicator.vue */ "./desktop/core/src/desktop/js/components/StatusIndicator.vue");
/* harmony import */ var _LabeledInfo_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LabeledInfo.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    StatusIndicator: _components_StatusIndicator_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    LabeledInfo: _LabeledInfo_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    query: {
      type: Object,
      required: true
    }
  },
  methods: {
    copyQueryId: function copyQueryId(queryId) {
      navigator.clipboard.writeText(queryId);
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _components_HueTable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../components/HueTable.vue */ "./desktop/core/src/desktop/js/components/HueTable.vue");
/* harmony import */ var _CounterSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CounterSet */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CounterSet.ts");
/* harmony import */ var _VarianceCell_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VarianceCell.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue");





var DEFAULT_VALUE_COLUMN_TITLE = 'Counter Value';
var NAME_COLUMNS = [{
  label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Group Name'),
  key: 'groupName'
}, {
  label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Counter Name'),
  key: 'counterName'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    HueTable: _components_HueTable_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VarianceCell: _VarianceCell_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    counters: {
      type: Object,
      required: true
    },
    hideSimilarValues: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    columns: function columns() {
      var valueColumns = [];
      this.counters.forEach(function (counterSet, index) {
        valueColumns.push({
          label: counterSet.title || DEFAULT_VALUE_COLUMN_TITLE,
          key: (0,_CounterSet__WEBPACK_IMPORTED_MODULE_3__.generateValueColumnKey)(index),
          headerCssClass: counterSet.cssClass,
          cssClass: counterSet.cssClass
        });
      });
      if (this.counters.length > 1) {
        valueColumns.push({
          label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Variance'),
          key: 'variance'
        });
      }
      return NAME_COLUMNS.concat(valueColumns);
    },
    rows: function rows() {
      var _this = this;
      var rowHash = new Map();
      var rows;
      var counters = this.counters.filter(function (counterSet) {
        return counterSet.counters;
      });
      counters.forEach(function (counterSet, index) {
        var counterKey = (0,_CounterSet__WEBPACK_IMPORTED_MODULE_3__.generateValueColumnKey)(index);
        counterSet.counters.forEach(function (counterGroup) {
          counterGroup.counters.forEach(function (counter) {
            var counterId = counterGroup.counterGroupName + counter.counterName;
            var row = rowHash.get(counterId);
            if (!row) {
              row = {
                groupName: counterGroup.counterGroupName,
                counterName: counter.counterName
              };
              rowHash.set(counterId, row);
            }
            row[counterKey] = counter.counterValue;
          });
        });
      });
      rows = Array.from(rowHash.values());
      if (this.hideSimilarValues) {
        rows = rows.filter(function (row) {
          return _this.isValuesDifferent(row, _this.counters.length);
        });
      }
      return rows;
    }
  },
  methods: {
    I18n: _utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"],
    isValuesDifferent: function isValuesDifferent(row, valueCount) {
      if (valueCount > 1) {
        var firstVal = row[(0,_CounterSet__WEBPACK_IMPORTED_MODULE_3__.generateValueColumnKey)(0)];
        for (var i = 1; i < valueCount; i++) {
          if (row[(0,_CounterSet__WEBPACK_IMPORTED_MODULE_3__.generateValueColumnKey)(i)] !== firstVal) {
            return true;
          }
        }
        return false;
      }
      return true;
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var _CounterSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CounterSet */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CounterSet.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      varianceTxt: '',
      variancePercent: 0
    };
  },
  watch: {
    data: function data() {
      var value1 = Number(this.data[(0,_CounterSet__WEBPACK_IMPORTED_MODULE_1__.generateValueColumnKey)(0)]);
      var value2 = Number(this.data[(0,_CounterSet__WEBPACK_IMPORTED_MODULE_1__.generateValueColumnKey)(1)]);
      if (isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0) {
        this.varianceTxt = '';
      } else {
        this.variancePercent = value2 / (value1 + value2) * 100;
        var variance = value1 >= value2 ? value1 / value2 : value2 / value1;
        this.varianceTxt = "".concat(Number(variance.toFixed(2)), "x");
      }
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=script&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var _components_DateRangePicker_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/DateRangePicker.vue */ "./desktop/core/src/desktop/js/components/DateRangePicker.vue");
/* harmony import */ var _components_Duration_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/Duration.vue */ "./desktop/core/src/desktop/js/components/Duration.vue");
/* harmony import */ var _components_FacetSelector_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/FacetSelector.vue */ "./desktop/core/src/desktop/js/components/FacetSelector.vue");
/* harmony import */ var _SortSelector_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SortSelector.vue */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue");
/* harmony import */ var _components_HueButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/HueButton.vue */ "./desktop/core/src/desktop/js/components/HueButton.vue");
/* harmony import */ var _components_HueIcon_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/HueIcon.vue */ "./desktop/core/src/desktop/js/components/HueIcon.vue");
/* harmony import */ var _components_HueLink_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/HueLink.vue */ "./desktop/core/src/desktop/js/components/HueLink.vue");
/* harmony import */ var _components_HueTable_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/HueTable.vue */ "./desktop/core/src/desktop/js/components/HueTable.vue");
/* harmony import */ var _components_HumanByteSize_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/HumanByteSize.vue */ "./desktop/core/src/desktop/js/components/HumanByteSize.vue");
/* harmony import */ var components_Paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Paginator */ "./desktop/core/src/desktop/js/components/Paginator.vue");
/* harmony import */ var _components_SearchInput_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/SearchInput.vue */ "./desktop/core/src/desktop/js/components/SearchInput.vue");
/* harmony import */ var _components_StatusIndicator_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../components/StatusIndicator.vue */ "./desktop/core/src/desktop/js/components/StatusIndicator.vue");
/* harmony import */ var _components_TimeAgo_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../components/TimeAgo.vue */ "./desktop/core/src/desktop/js/components/TimeAgo.vue");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }















var STATUS_FACET_VALUES = [{
  key: 'FINISHED',
  value: 0
}, {
  key: 'EXCEPTION',
  value: 0
}];
var STATUS_LABELS = {
  FINISHED: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_14__["default"])('Finished'),
  EXCEPTION: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_14__["default"])('Exception'),
  COMPILED: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_14__["default"])('Compiled')
};
var DEFAULT_SORT = {
  column: 'startTime',
  order: 'DESC'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'QueryTable',
  components: {
    FacetSelector: _components_FacetSelector_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SortSelector: _SortSelector_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    HueIcon: _components_HueIcon_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    DateRangePicker: _components_DateRangePicker_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    StatusIndicator: _components_StatusIndicator_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    SearchInput: _components_SearchInput_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    HueButton: _components_HueButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    HueLink: _components_HueLink_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    HueTable: _components_HueTable_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Paginator: components_Paginator__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: {
    queries: {
      type: Array,
      required: true
    },
    totalQueries: {
      type: Number,
      required: true
    },
    updateTime: {
      type: Number,
      required: true
    }
  },
  emits: ['diff-queries', 'kill-queries', 'query-selected', 'reload', 'search'],
  setup: function setup() {
    var columns = [{
      key: 'select',
      label: ''
    }, {
      key: 'status',
      label: 'Status'
    }, {
      key: 'query',
      label: 'Query'
    }, {
      key: 'queryType',
      label: 'Query Type'
    }, {
      key: 'startTime',
      label: 'Start Time',
      adapter: function adapter(_, query) {
        return (0,_components_TimeAgo_vue__WEBPACK_IMPORTED_MODULE_13__.timeAgo)(query.startTime);
      }
    }, {
      key: 'endTime',
      label: 'End Time',
      adapter: function adapter(_, query) {
        return (0,_components_TimeAgo_vue__WEBPACK_IMPORTED_MODULE_13__.timeAgo)(query.endTime);
      }
    }, {
      key: 'duration',
      label: 'Duration',
      adapter: function adapter(_, query) {
        return (0,_components_Duration_vue__WEBPACK_IMPORTED_MODULE_2__.duration)(query.duration);
      }
    }, {
      key: 'userName',
      label: 'User'
    }, {
      key: 'defaultDb',
      label: 'Default DB'
    }, {
      key: 'requestPool',
      label: 'Request Pool'
    }, {
      key: 'cpuTime',
      label: 'CPU Time',
      adapter: function adapter(_, query) {
        return (0,_components_Duration_vue__WEBPACK_IMPORTED_MODULE_2__.duration)(query.cpuTime);
      }
    }, {
      key: 'rowsProduced',
      label: 'Rows Produced'
    }, {
      key: 'peakMemory',
      label: 'Peak Memory',
      adapter: function adapter(_, query) {
        return (0,_components_HumanByteSize_vue__WEBPACK_IMPORTED_MODULE_9__.humanSize)(query.peakMemory);
      }
    }, {
      key: 'hdfsBytesRead',
      label: 'HDFS Bytes Read',
      adapter: function adapter(_, query) {
        return (0,_components_HumanByteSize_vue__WEBPACK_IMPORTED_MODULE_9__.humanSize)(query.hdfsBytesRead);
      }
    }, {
      key: 'coordinator',
      label: 'Coordinator'
    }];
    return {
      columns: columns,
      statusValueLabels: STATUS_LABELS,
      notifyThrottle: -1
    };
  },
  data: function data() {
    return {
      selectedQueries: [],
      currentPage: null,
      searchText: '',
      sort: DEFAULT_SORT,
      timeRange: null,
      facets: {},
      statusFacet: {
        facetField: 'status',
        values: STATUS_FACET_VALUES
      },
      userFacet: {
        facetField: 'userId',
        values: []
      },
      // TODO: Properly initiate TableDefinition
      tableDefinition: {
        rangeData: {
          title: 'Some title'
        },
        columnPreferences: [{
          id: 'some id'
        }]
      },
      // TODO: Properly initiate DataProcessor
      dataProcessor: {
        facets: {
          fieldCount: 0
        }
      }
    };
  },
  methods: {
    getUpdateTimeText: function getUpdateTimeText(time) {
      return time ? "".concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_14__["default"])('Data updated'), " ").concat((0,_components_TimeAgo_vue__WEBPACK_IMPORTED_MODULE_13__.timeAgo)(time)) : '';
    },
    clearSearch: function clearSearch() {
      this.searchText = '';
      this.sort = DEFAULT_SORT;
      this.$refs.rangePicker.clear();
      this.$refs.statusFacetSelector.clear();
    },
    diffQueries: function diffQueries(queries) {
      this.$emit('diff-queries', queries);
    },
    sortChanged: function sortChanged(sort) {
      this.sort = sort;
      this.notifySearch();
    },
    facetChanged: function facetChanged(searchFacet) {
      this.facets[searchFacet.field] = searchFacet;
      this.notifySearch();
    },
    facetRemoved: function facetRemoved(field) {
      if (this.facets[field]) {
        delete this.facets[field];
        this.notifySearch();
      }
    },
    killQueries: function killQueries(queries) {
      this.$emit('kill-queries', queries);
    },
    notifySearch: function notifySearch() {
      var _this = this;
      window.clearTimeout(this.notifyThrottle);
      this.notifyThrottle = window.setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.$emit('search', {
                page: _this.currentPage,
                text: _this.searchText,
                timeRange: _this.timeRange,
                facets: Object.values(_this.facets),
                sort: _this.sort
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })), 0);
    },
    pageChanged: function pageChanged(page) {
      this.currentPage = page;
      this.notifySearch();
    },
    querySelected: function querySelected(query) {
      this.$emit('query-selected', query);
    },
    reload: function reload() {
      this.selectedQueries = [];
      this.$emit('reload');
    },
    searchQueries: function searchQueries(searchText) {
      if (searchText !== undefined) {
        this.searchText = searchText;
      }
      if (this.currentPage && this.currentPage.offset !== 0) {
        // pageChanged will notify
        var limit = this.currentPage.limit;
        this.currentPage = {
          offset: 0,
          pageNumber: 0,
          limit: limit
        };
      } else {
        this.notifySearch();
      }
    },
    timeRangeChanged: function timeRangeChanged(timeRange) {
      this.timeRange = timeRange;
      this.notifySearch();
    },
    I18n: _utils_i18n__WEBPACK_IMPORTED_MODULE_14__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=script&lang=ts":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _components_dropdown_DropdownPanel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/dropdown/DropdownPanel.vue */ "./desktop/core/src/desktop/js/components/dropdown/DropdownPanel.vue");
/* harmony import */ var _components_HueButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/HueButton.vue */ "./desktop/core/src/desktop/js/components/HueButton.vue");
/* harmony import */ var _components_HueLink_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/HueLink.vue */ "./desktop/core/src/desktop/js/components/HueLink.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var SORTABLE_COLUMNS = new Set(['startTime', 'endTime', 'duration', 'cpuTime', 'rowsProduced', 'peakMemory', 'hdfsBytesRead']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'SortSelector',
  components: {
    DropdownPanel: _components_dropdown_DropdownPanel_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    HueButton: _components_HueButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    HueLink: _components_HueLink_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    sort: {
      type: Object,
      required: true
    },
    columns: {
      type: Object,
      required: true
    }
  },
  emits: ['sort-changed'],
  data: function data() {
    return {
      sortableColumns: this.columns.filter(function (column) {
        return SORTABLE_COLUMNS.has(String(column.key));
      }),
      currentSort: this.sort
    };
  },
  computed: {
    applyDisabled: function applyDisabled() {
      return this.currentSort === this.sort;
    },
    label: function label() {
      var _this = this;
      var column = this.columns.find(function (col) {
        return col.key === _this.sort.column;
      });
      return column ? "".concat(column.label, ": ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])(this.sort.order === 'ASC' ? 'Asc' : 'Desc')) : '';
    }
  },
  watch: {
    sort: function sort(_sort) {
      this.currentSort = _sort;
    }
  },
  methods: {
    I18n: _utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"],
    setColumn: function setColumn(column) {
      this.currentSort = _objectSpread(_objectSpread({}, this.currentSort), {}, {
        column: String(column.key)
      });
    },
    setOrder: function setOrder(asc) {
      this.currentSort = _objectSpread(_objectSpread({}, this.currentSort), {}, {
        order: asc ? 'ASC' : 'DESC'
      });
    },
    cancel: function cancel(closePanel) {
      closePanel();
    },
    apply: function apply(closePanel) {
      this.$emit('sort-changed', this.currentSort);
      closePanel();
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'QueriesList'
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=template&id=57d7228c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=template&id=57d7228c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-57d7228c");
var _hoisted_1 = {
  "class": "query-plan"
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1 /* TEXT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=template&id=3ae86220&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=template&id=3ae86220&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3ae86220");
var _hoisted_1 = {
  "class": "impala-queries"
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Spinner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Spinner");
  var _component_InlineAlert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InlineAlert");
  var _component_query_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("query-details");
  var _component_query_details_diff = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("query-details-diff");
  var _component_query_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("query-table");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Spinner, {
    key: 0,
    size: "xlarge",
    center: true,
    overlay: true
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_InlineAlert, {
    key: 1,
    type: _ctx.AlertType.Error,
    message: _ctx.error.message,
    details: _ctx.error.details,
    "show-close": true,
    onClose: _ctx.showQueries
  }, null, 8 /* PROPS */, ["type", "message", "details", "onClose"])) : _ctx.selectedQuery ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_query_details, {
    key: 2,
    query: _ctx.selectedQuery,
    onReload: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.selectedQuery && _ctx.querySelected(_ctx.selectedQuery);
    })
  }, null, 8 /* PROPS */, ["query"])) : _ctx.queriesToDiff ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_query_details_diff, {
    key: 3,
    queries: _ctx.queriesToDiff
  }, null, 8 /* PROPS */, ["queries"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_query_table, {
    key: 4,
    queries: _ctx.queries,
    "total-queries": _ctx.searchMeta && _ctx.searchMeta.size || 0,
    "update-time": _ctx.searchMeta && _ctx.searchMeta.updateTime || 0,
    onDiffQueries: _ctx.diffQueries,
    onQuerySelected: _ctx.querySelected,
    onReload: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.lastFetchOptions && _ctx.fetch(_ctx.lastFetchOptions);
    }),
    onSearch: _ctx.fetch
  }, null, 8 /* PROPS */, ["queries", "total-queries", "update-time", "onDiffQueries", "onQuerySelected", "onSearch"]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=template&id=591e46c3&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=template&id=591e46c3&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-591e46c3");
var _hoisted_1 = {
  "class": "labeled-info-title"
};
var _hoisted_2 = {
  "class": "labled-info-value"
};
var _hoisted_3 = {
  key: 1
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.I18n(_ctx.label)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_ctx.showSlot ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    key: 0
  }, undefined, true) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, "-"))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=template&id=5f0bd868&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=template&id=5f0bd868&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5f0bd868");
var _hoisted_1 = {
  "class": "buttons-container"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", {
  "class": "fa fa-chevron-left"
}, null, -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "buttons-right"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", {
  "class": "fa fa-refresh"
}, null, -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "hue-box"
};
var _hoisted_6 = {
  "class": "hue-box"
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hue_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hue-button");
  var _component_QueryInfoTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QueryInfoTop");
  var _component_QueryInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QueryInfo");
  var _component_tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("tab");
  var _component_CountersTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CountersTable");
  var _component_tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("tabs");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_button, {
    borderless: "",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.showQueries && _ctx.showQueries();
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.I18n('Queries')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_button, {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('reload');
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.I18n('Refresh')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QueryInfoTop, {
    query: _ctx.query
  }, null, 8 /* PROPS */, ["query"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tabs, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
        title: _ctx.I18n('Query Info')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QueryInfo, {
            query: _ctx.query
          }, null, 8 /* PROPS */, ["query"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
        title: _ctx.I18n('Plan')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", _hoisted_5, "            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.query.profile.summaryMap['Plan']) + "\n          ", 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
        title: _ctx.I18n('Exec Summary')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", _hoisted_6, "            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.query.profile.summaryMap['ExecSummary']) + "\n          ", 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
        title: _ctx.I18n('Metrics')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CountersTable, {
            counters: [{
              title: "".concat(_ctx.I18n('Metrics'), " : ").concat(_ctx.query.queryId),
              counters: _ctx.getCounters(_ctx.query.profile),
              cssClass: ''
            }]
          }, null, 8 /* PROPS */, ["counters"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["title"])];
    }),
    _: 1 /* STABLE */
  })])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=template&id=216353e6&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=template&id=216353e6&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-216353e6");
var _hoisted_1 = {
  "class": "buttons-container"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", {
  "class": "fa fa-chevron-left"
}, null, -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "hue-layout-row"
};
var _hoisted_4 = {
  "class": "hue-box"
};
var _hoisted_5 = {
  "class": "hue-box query-b"
};
var _hoisted_6 = {
  "class": "hue-box"
};
var _hoisted_7 = {
  "class": "hue-box query-b"
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hue_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hue-button");
  var _component_QueryInfoTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QueryInfoTop");
  var _component_QueryInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QueryInfo");
  var _component_tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("tab");
  var _component_CountersTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CountersTable");
  var _component_tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("tabs");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_button, {
    borderless: "",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.showQueries && _ctx.showQueries();
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.I18n('Queries')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QueryInfoTop, {
    query: _ctx.queries[0]
  }, null, 8 /* PROPS */, ["query"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QueryInfoTop, {
    query: _ctx.queries[1],
    "class": "query-b"
  }, null, 8 /* PROPS */, ["query"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tabs, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Query Tabs "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
        title: _ctx.I18n('Query Info'),
        "class": "query-info"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QueryInfo, {
            query: _ctx.queries[0],
            layout: "column"
          }, null, 8 /* PROPS */, ["query"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QueryInfo, {
            query: _ctx.queries[1],
            layout: "column",
            "class": "query-b"
          }, null, 8 /* PROPS */, ["query"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
        title: _ctx.I18n('Plan')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", _hoisted_4, "          " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.queries[0].profile.summaryMap['Plan']) + "\n        ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", _hoisted_5, "          " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.queries[1].profile.summaryMap['Plan']) + "\n        ", 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
        title: _ctx.I18n('Exec Summary')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", _hoisted_6, "          " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.queries[0].profile.summaryMap['ExecSummary']) + "\n        ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", _hoisted_7, "          " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.queries[1].profile.summaryMap['ExecSummary']) + "\n        ", 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
        title: _ctx.I18n('Metrics')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CountersTable, {
            counters: [{
              title: "".concat(_ctx.I18n('Metrics'), " : ").concat(_ctx.queries[0].queryId),
              counters: _ctx.getCounters(_ctx.queries[0].profile),
              cssClass: ''
            }, {
              title: "".concat(_ctx.I18n('Metrics'), " : ").concat(_ctx.queries[1].queryId),
              counters: _ctx.getCounters(_ctx.queries[1].profile),
              cssClass: ''
            }]
          }, null, 8 /* PROPS */, ["counters"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["title"])];
    }),
    _: 1 /* STABLE */
  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=template&id=f4743310&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=template&id=f4743310&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f4743310");
var _hoisted_1 = {
  "class": "hue-info-box"
};
var _hoisted_2 = {
  "class": "hue-info-box"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 1
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_sql_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("sql-text");
  var _component_LabeledInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LabeledInfo");
  var _component_time_ago = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("time-ago");
  var _component_duration = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("duration");
  var _component_HumanByteSize = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HumanByteSize");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("query-info layout-".concat(_ctx.layout))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "Query"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_sql_text, {
        "enable-overflow": true,
        format: true,
        value: _ctx.query.queryText
      }, null, 8 /* PROPS */, ["value"])];
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "Start Time"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.query.startTime ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_time_ago, {
        key: 0,
        value: _ctx.query.startTime
      }, null, 8 /* PROPS */, ["value"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "End Time"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.query.endTime ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_time_ago, {
        key: 0,
        value: _ctx.query.endTime
      }, null, 8 /* PROPS */, ["value"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "Duration"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.query.duration ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_duration, {
        key: 0,
        value: _ctx.query.duration,
        "short": true
      }, null, 8 /* PROPS */, ["value"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "Query Type"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.query.queryType), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "User Name"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.query.userName), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "Coordinator"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.query.coordinator), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "CPU Time"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.query.cpuTime ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_duration, {
        key: 0,
        value: _ctx.query.cpuTime,
        "short": true
      }, null, 8 /* PROPS */, ["value"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "Rows Produced"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.query.rowsProduced ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.query.rowsProduced), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, "None"))];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "Peak Memory"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.query.peakMemory ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HumanByteSize, {
        key: 0,
        value: _ctx.query.peakMemory
      }, null, 8 /* PROPS */, ["value"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "HDFS Bytes Read"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.query.hdfsBytesRead ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HumanByteSize, {
        key: 0,
        value: _ctx.query.hdfsBytesRead
      }, null, 8 /* PROPS */, ["value"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  })])])], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=template&id=1ebc196d&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=template&id=1ebc196d&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1ebc196d");
var _hoisted_1 = {
  "class": "hue-info-box"
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_LabeledInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LabeledInfo");
  var _component_StatusIndicator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StatusIndicator");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "Query ID",
    "class": "inline-info"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.query.queryId) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "javascript:void(0);",
        "class": "fa fa-copy",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return _ctx.copyQueryId(_ctx.query.queryId);
        })
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "User",
    "class": "inline-info"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.query.userName), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabeledInfo, {
    label: "Status",
    "class": "inline-info"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StatusIndicator, {
        value: _ctx.query.status
      }, null, 8 /* PROPS */, ["value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.query.status), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=template&id=315fbf8e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=template&id=315fbf8e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

var _hoisted_1 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VarianceCell = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VarianceCell");
  var _component_HueTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HueTable");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_ctx.rows.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HueTable, {
    key: 0,
    columns: _ctx.columns,
    rows: _ctx.rows
  }, {
    "cell-variance": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (row) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VarianceCell, {
        data: row
      }, null, 8 /* PROPS */, ["data"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["columns", "rows"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.I18n('No counters available!')), 1 /* TEXT */))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=template&id=fcc1af68&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=template&id=fcc1af68&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-fcc1af68");
var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  "class": "variance-bar"
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.varianceTxt ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "value2-bar",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.variancePercent + '%'
    })
  }, null, 4 /* STYLE */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.varianceTxt), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=template&id=c8a18ab0&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=template&id=c8a18ab0&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-c8a18ab0");
var _hoisted_1 = {
  "class": "impala-query-table"
};
var _hoisted_2 = {
  "class": "query-table-actions"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-search"
}, null, -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "query-table-filters"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Filter by: ");
var _hoisted_6 = {
  "class": "query-table-sort"
};
var _hoisted_7 = {
  "class": "query-table-actions-right"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", {
  "class": "fa fa-refresh"
}, null, -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "update-time"
};
var _hoisted_10 = {
  "class": "query-table-container"
};
var _hoisted_11 = {
  "class": "query-table-right-panel"
};
var _hoisted_12 = ["value"];
var _hoisted_13 = {
  "class": "query-popup"
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_search_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("search-input");
  var _component_hue_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hue-button");
  var _component_hue_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hue-icon");
  var _component_facet_selector = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("facet-selector");
  var _component_date_range_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("date-range-picker");
  var _component_sort_selector = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("sort-selector");
  var _component_status_indicator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("status-indicator");
  var _component_hue_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hue-link");
  var _component_hue_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hue-table");
  var _component_paginator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("paginator");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_search_input, {
    modelValue: _ctx.searchText,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.searchText = $event;
    }),
    placeholder: _ctx.I18n('Query text or Query ID'),
    "show-magnify": false,
    onSearch: _ctx.searchQueries
  }, null, 8 /* PROPS */, ["modelValue", "placeholder", "onSearch"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_button, {
    onClick: _ctx.searchQueries
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_icon, {
    type: "hi-filter"
  }), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_facet_selector, {
    ref: "statusFacetSelector",
    facet: _ctx.statusFacet,
    "value-labels": _ctx.statusValueLabels,
    "field-label": "Status",
    onFacetRemoved: _ctx.facetRemoved,
    onFacetChanged: _ctx.facetChanged
  }, null, 8 /* PROPS */, ["facet", "value-labels", "onFacetRemoved", "onFacetChanged"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_date_range_picker, {
    ref: "rangePicker",
    onDateRangeChanged: _ctx.timeRangeChanged
  }, null, 8 /* PROPS */, ["onDateRangeChanged"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_icon, {
    type: "hi-sort"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.I18n('Sort by')) + ": ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_sort_selector, {
    sort: _ctx.sort,
    columns: _ctx.columns,
    onSortChanged: _ctx.sortChanged
  }, null, 8 /* PROPS */, ["sort", "columns", "onSortChanged"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_button, {
    "class": "clear-link",
    borderless: "",
    onClick: _ctx.clearSearch
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.I18n('Clear All')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_button, {
    disabled: _ctx.selectedQueries.length !== 2,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.diffQueries(_ctx.selectedQueries);
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.I18n('Compare')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["disabled"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_button, {
    onClick: _ctx.searchQueries
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.I18n('Refresh')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getUpdateTimeText(_ctx.updateTime)), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_table, {
    columns: _ctx.columns,
    rows: _ctx.queries
  }, {
    "cell-status": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (query) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_status_indicator, {
        title: query.status,
        "class": "status-indicator",
        value: query.status
      }, null, 8 /* PROPS */, ["title", "value"])];
    }),
    "cell-select": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (query) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return _ctx.selectedQueries = $event;
        }),
        type: "checkbox",
        value: query
      }, null, 8 /* PROPS */, _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.selectedQueries]])];
    }),
    "cell-query": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (query) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_link, {
        "class": "query-link",
        onClick: function onClick($event) {
          return _ctx.querySelected(query);
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(query.queryText) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(query.queryText), 1 /* TEXT */)];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["columns", "rows"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_paginator, {
    ref: "paginator",
    "total-entries": _ctx.totalQueries,
    "current-page": _ctx.currentPage,
    onPageChanged: _ctx.pageChanged
  }, null, 8 /* PROPS */, ["total-entries", "current-page", "onPageChanged"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=template&id=45ffc45f&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=template&id=45ffc45f&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-45ffc45f");
var _hoisted_1 = {
  "class": "sort-selector"
};
var _hoisted_2 = {
  "class": "sort-selection"
};
var _hoisted_3 = ["checked", "onChange"];
var _hoisted_4 = {
  "class": "order-selector"
};
var _hoisted_5 = ["checked"];
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Ascending ");
var _hoisted_7 = {
  "class": "sort-selector-actions"
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hue_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hue-link");
  var _component_hue_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hue-button");
  var _component_dropdown_panel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("dropdown-panel");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_dropdown_panel, {
    text: _ctx.label,
    "close-on-click": false
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.sortableColumns, function (column) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: column.key,
          "class": "sort-list-entry"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          name: "sort-column",
          type: "radio",
          checked: column.key === _ctx.currentSort.column,
          onChange: function onChange($event) {
            return _ctx.setColumn(column);
          }
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(column.label), 1 /* TEXT */)])]);
      }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "checkbox",
        checked: _ctx.currentSort.order === 'ASC',
        onChange: _cache[0] || (_cache[0] = function ($event) {
          return _ctx.setOrder($event.target.checked);
        })
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_link, {
        onClick: function onClick($event) {
          return _ctx.cancel(slotProps.closePanel);
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.I18n('Cancel')), 1 /* TEXT */)];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hue_button, {
        small: true,
        primary: true,
        disabled: _ctx.applyDisabled,
        onClick: function onClick($event) {
          return _ctx.apply(slotProps.closePanel);
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.I18n('Apply')), 1 /* TEXT */)];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["disabled", "onClick"])])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["text"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=template&id=3840cf00":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=template&id=3840cf00 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h1", null, "Queries List!");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".query-plan[data-v-57d7228c] {\n  color: #0a78a3;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".impala-queries[data-v-3ae86220] {\n  margin: 11px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n.labeled-info-title[data-v-591e46c3] {\n  text-transform: uppercase;\n  color: #989ea4;\n  font-weight: normal;\n  font-size: 12px;\n  margin: 0;\n}\n.labled-info-value[data-v-591e46c3] {\n  color: #5a656d;\n  margin-bottom: 5px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box[data-v-5f0bd868] {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n.no-select[data-v-5f0bd868] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.box-shadow-top[data-v-5f0bd868] {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-right[data-v-5f0bd868] {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-bottom[data-v-5f0bd868] {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-left[data-v-5f0bd868] {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n.inset-box-shadow[data-v-5f0bd868] {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n.no-box-shadow[data-v-5f0bd868] {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n@-webkit-keyframes fade-in-frames-5f0bd868 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-moz-keyframes fade-in-frames-5f0bd868 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-ms-keyframes fade-in-frames-5f0bd868 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-o-keyframes fade-in-frames-5f0bd868 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fade-in-frames-5f0bd868 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.buttons-container[data-v-5f0bd868] {\n  margin-bottom: 20px;\n  position: relative;\n}\n.buttons-container .buttons-right[data-v-5f0bd868] {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n.buttons-container .buttons-right > *[data-v-5f0bd868] {\n  margin-left: 5px;\n}\n.download-link[data-v-5f0bd868] {\n  color: #008cff;\n  border-color: #d6d8db;\n  border-radius: 3px;\n}\n.download-link[data-v-5f0bd868]:hover {\n  border-color: #005ba6;\n}\n.hue-layout-column[data-v-5f0bd868] {\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  column-gap: 10px;\n  row-gap: 10px;\n}\n.hue-layout-column > *[data-v-5f0bd868] {\n  flex: 1;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box[data-v-216353e6] {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n.no-select[data-v-216353e6] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.box-shadow-top[data-v-216353e6] {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-right[data-v-216353e6] {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-bottom[data-v-216353e6] {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-left[data-v-216353e6] {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n.inset-box-shadow[data-v-216353e6] {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n.no-box-shadow[data-v-216353e6] {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n@-webkit-keyframes fade-in-frames-216353e6 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-moz-keyframes fade-in-frames-216353e6 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-ms-keyframes fade-in-frames-216353e6 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-o-keyframes fade-in-frames-216353e6 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fade-in-frames-216353e6 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.hue-info-box[data-v-216353e6] {\n  padding: 10px;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n.buttons-container[data-v-216353e6] {\n  margin-bottom: 20px;\n}\n.hue-layout-row[data-v-216353e6] {\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  column-gap: 10px;\n  row-gap: 10px;\n}\n.hue-layout-row > *[data-v-216353e6] {\n  flex: 1;\n}\n.hue-layout-column[data-v-216353e6] {\n  vertical-align: top;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  column-gap: 10px;\n  row-gap: 10px;\n}\n.hue-layout-column > *[data-v-216353e6] {\n  flex: 1;\n}\n.query-info[data-v-216353e6] {\n  white-space: nowrap;\n}\n.query-b[data-v-216353e6],[data-v-216353e6] .query-b-deep .query-b,[data-v-216353e6] .query-b-deep .hue-info-box,[data-v-216353e6] .query-b-deep .dag-view-container {\n  background-color: #edf7ff;\n  border-radius: 3px;\n}\n.hide-similar[data-v-216353e6] {\n  text-align: right;\n}\n.hide-similar input[data-v-216353e6] {\n  vertical-align: top;\n}\n.scale-controls label[data-v-216353e6] {\n  display: inline-block;\n}\n.scale-controls label input[data-v-216353e6] {\n  vertical-align: top;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box[data-v-f4743310] {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n.no-select[data-v-f4743310] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.box-shadow-top[data-v-f4743310] {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-right[data-v-f4743310] {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-bottom[data-v-f4743310] {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-left[data-v-f4743310] {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n.inset-box-shadow[data-v-f4743310] {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n.no-box-shadow[data-v-f4743310] {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n@-webkit-keyframes fade-in-frames-f4743310 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-moz-keyframes fade-in-frames-f4743310 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-ms-keyframes fade-in-frames-f4743310 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-o-keyframes fade-in-frames-f4743310 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fade-in-frames-f4743310 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.query-info.layout-row[data-v-f4743310] {\n  white-space: nowrap;\n}\n.query-info.layout-row > div[data-v-f4743310] {\n  width: 50%;\n  display: inline-block;\n  vertical-align: top;\n}\n.query-info.layout-row > div[data-v-f4743310]:first-child {\n  width: calc(50% - 14px);\n  margin-right: 10px;\n}\n.query-info.layout-column[data-v-f4743310] {\n  display: inline-block;\n  width: calc(50% - 7px);\n  vertical-align: top;\n  margin-right: 10px;\n}\n.query-info.layout-column > div[data-v-f4743310] {\n  width: 100%;\n}\n.query-info.layout-column > div[data-v-f4743310]:first-child {\n  margin-bottom: 10px;\n}\n.query-info .hue-info-box[data-v-f4743310] {\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  column-gap: 10px;\n  row-gap: 10px;\n  padding: 10px;\n  overflow: hidden;\n  white-space: normal;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n.query-info .hue-info-box > *[data-v-f4743310] {\n  flex: 1;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box[data-v-1ebc196d] {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n.no-select[data-v-1ebc196d] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.box-shadow-top[data-v-1ebc196d] {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-right[data-v-1ebc196d] {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-bottom[data-v-1ebc196d] {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-left[data-v-1ebc196d] {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n.inset-box-shadow[data-v-1ebc196d] {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n.no-box-shadow[data-v-1ebc196d] {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n@-webkit-keyframes fade-in-frames-1ebc196d {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-moz-keyframes fade-in-frames-1ebc196d {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-ms-keyframes fade-in-frames-1ebc196d {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-o-keyframes fade-in-frames-1ebc196d {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fade-in-frames-1ebc196d {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.hue-info-box[data-v-1ebc196d] {\n  padding: 10px;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.hue-info-box .inline-info[data-v-1ebc196d] {\n  display: inline-block;\n  margin-right: 20px;\n  vertical-align: baseline;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box[data-v-fcc1af68] {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n.no-select[data-v-fcc1af68] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.box-shadow-top[data-v-fcc1af68] {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-right[data-v-fcc1af68] {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-bottom[data-v-fcc1af68] {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-left[data-v-fcc1af68] {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n.inset-box-shadow[data-v-fcc1af68] {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n.no-box-shadow[data-v-fcc1af68] {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n@-webkit-keyframes fade-in-frames-fcc1af68 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-moz-keyframes fade-in-frames-fcc1af68 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-ms-keyframes fade-in-frames-fcc1af68 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-o-keyframes fade-in-frames-fcc1af68 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fade-in-frames-fcc1af68 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.variance-bar[data-v-fcc1af68] {\n  display: inline-block;\n  border: 1px solid #adb2b6;\n  border-radius: 3px;\n  width: 150px;\n  height: 10px;\n  overflow: hidden;\n}\n.variance-bar .value2-bar[data-v-fcc1af68] {\n  background-color: #bee2ff;\n  height: 10px;\n  width: 50%;\n  border-left: 1px solid #adb2b6;\n  margin-left: auto;\n  margin-right: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box[data-v-c8a18ab0] {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n.no-select[data-v-c8a18ab0] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.box-shadow-top[data-v-c8a18ab0] {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-right[data-v-c8a18ab0] {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-bottom[data-v-c8a18ab0] {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-left[data-v-c8a18ab0] {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n.inset-box-shadow[data-v-c8a18ab0] {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n.no-box-shadow[data-v-c8a18ab0] {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n@-webkit-keyframes fade-in-frames-c8a18ab0 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-moz-keyframes fade-in-frames-c8a18ab0 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-ms-keyframes fade-in-frames-c8a18ab0 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-o-keyframes fade-in-frames-c8a18ab0 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fade-in-frames-c8a18ab0 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.impala-query-table .query-table-actions[data-v-c8a18ab0] {\n  margin-bottom: 20px;\n  width: 100%;\n}\n.impala-query-table .query-table-actions[data-v-c8a18ab0] .hue-dropdown-panel button {\n  margin-left: 10px;\n}\n.impala-query-table .query-table-actions .hue-btn[data-v-c8a18ab0] {\n  margin-left: 5px;\n}\n.impala-query-table .query-table-actions .query-table-sort[data-v-c8a18ab0],\n.impala-query-table .query-table-actions .query-table-filters[data-v-c8a18ab0] {\n  display: inline-block;\n  margin-left: 30px;\n}\n.impala-query-table .query-table-actions .query-table-sort .columns-link[data-v-c8a18ab0],\n.impala-query-table .query-table-actions .query-table-sort .clear-link[data-v-c8a18ab0],\n.impala-query-table .query-table-actions .query-table-filters .columns-link[data-v-c8a18ab0],\n.impala-query-table .query-table-actions .query-table-filters .clear-link[data-v-c8a18ab0] {\n  margin-left: 10px;\n}\n.impala-query-table .query-table-actions .query-table-actions-right[data-v-c8a18ab0] {\n  display: inline-block;\n  position: absolute;\n  right: 44px;\n}\n.impala-query-table .query-table-actions .query-table-actions-right .update-time[data-v-c8a18ab0] {\n  display: inline-block;\n  position: absolute;\n  white-space: nowrap;\n  pointer-events: none;\n  font-size: 0.7em;\n  color: #5a656d;\n  top: 30px;\n  right: 0px;\n}\n.impala-query-table .query-table-container[data-v-c8a18ab0] {\n  display: flex;\n  flex-direction: row;\n}\n.impala-query-table .query-table-container .query-table-left-panel[data-v-c8a18ab0] {\n  flex: 0 0 100px;\n}\n.impala-query-table .query-table-container .query-table-right-panel[data-v-c8a18ab0] {\n  flex: 1 1 100%;\n  max-width: 100%;\n}\n.impala-query-table .status-indicator[data-v-c8a18ab0] {\n  font-size: 24px;\n  margin: 4px;\n}\n.impala-query-table .status-indicator[data-v-c8a18ab0] i {\n  font-size: 20px;\n  padding: 2px;\n  color: #989ea4;\n}\n.impala-query-table .query-link .query-popup[data-v-c8a18ab0] {\n  position: absolute;\n  margin-top: 5px;\n  white-space: pre-wrap;\n  word-break: normal;\n  overflow-wrap: break-word;\n  pointer-events: none;\n  max-width: 1000px;\n  background-color: #fff;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n  padding: 10px;\n  visibility: hidden;\n}\n.impala-query-table .query-link:hover .query-popup[data-v-c8a18ab0] {\n  visibility: visible;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box[data-v-45ffc45f] {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n.no-select[data-v-45ffc45f] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.box-shadow-top[data-v-45ffc45f] {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-right[data-v-45ffc45f] {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-bottom[data-v-45ffc45f] {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n.box-shadow-left[data-v-45ffc45f] {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n.inset-box-shadow[data-v-45ffc45f] {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n.no-box-shadow[data-v-45ffc45f] {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n@-webkit-keyframes fade-in-frames-45ffc45f {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-moz-keyframes fade-in-frames-45ffc45f {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-ms-keyframes fade-in-frames-45ffc45f {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-o-keyframes fade-in-frames-45ffc45f {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fade-in-frames-45ffc45f {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.sort-selector[data-v-45ffc45f] {\n  width: 170px;\n  padding: 3px 0;\n}\n.sort-selector .sort-list-entry[data-v-45ffc45f] {\n  width: 100%;\n  padding: 3px 16px;\n  margin: 6px 0;\n}\n.sort-selector .sort-selector-actions[data-v-45ffc45f] {\n  line-height: 24px;\n  padding: 5px 10px;\n  margin-top: 3px;\n}\n.sort-selector .sort-selector-actions a[data-v-45ffc45f] {\n  font-size: 12px;\n}\n.sort-selector .sort-selector-actions button[data-v-45ffc45f] {\n  float: right;\n}\n.sort-selector[data-v-45ffc45f] label {\n  margin: 0;\n}\n.sort-selector[data-v-45ffc45f] input {\n  margin: 0 10px 0 0;\n}\n.sort-selector .sort-selection[data-v-45ffc45f] {\n  border-bottom: 1px dotted #d6d8db;\n  overflow-x: hidden;\n  overflow-y: auto;\n  max-height: 350px;\n}\n.sort-selector .order-selector[data-v-45ffc45f] {\n  padding: 5px 16px;\n  border-bottom: 1px solid #d6d8db;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_HiveQueryPlan_vue_vue_type_style_index_0_id_57d7228c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_HiveQueryPlan_vue_vue_type_style_index_0_id_57d7228c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_HiveQueryPlan_vue_vue_type_style_index_0_id_57d7228c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_ImpalaQueries_vue_vue_type_style_index_0_id_3ae86220_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_ImpalaQueries_vue_vue_type_style_index_0_id_3ae86220_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_ImpalaQueries_vue_vue_type_style_index_0_id_3ae86220_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_LabeledInfo_vue_vue_type_style_index_0_id_591e46c3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_LabeledInfo_vue_vue_type_style_index_0_id_591e46c3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_LabeledInfo_vue_vue_type_style_index_0_id_591e46c3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryDetails_vue_vue_type_style_index_0_id_5f0bd868_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryDetails_vue_vue_type_style_index_0_id_5f0bd868_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryDetails_vue_vue_type_style_index_0_id_5f0bd868_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryDetailsDiff_vue_vue_type_style_index_0_id_216353e6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryDetailsDiff_vue_vue_type_style_index_0_id_216353e6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryDetailsDiff_vue_vue_type_style_index_0_id_216353e6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryInfo_vue_vue_type_style_index_0_id_f4743310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryInfo_vue_vue_type_style_index_0_id_f4743310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryInfo_vue_vue_type_style_index_0_id_f4743310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryInfoTop_vue_vue_type_style_index_0_id_1ebc196d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryInfoTop_vue_vue_type_style_index_0_id_1ebc196d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryInfoTop_vue_vue_type_style_index_0_id_1ebc196d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_VarianceCell_vue_vue_type_style_index_0_id_fcc1af68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_VarianceCell_vue_vue_type_style_index_0_id_fcc1af68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_VarianceCell_vue_vue_type_style_index_0_id_fcc1af68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryTable_vue_vue_type_style_index_0_id_c8a18ab0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryTable_vue_vue_type_style_index_0_id_c8a18ab0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryTable_vue_vue_type_style_index_0_id_c8a18ab0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_SortSelector_vue_vue_type_style_index_0_id_45ffc45f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_SortSelector_vue_vue_type_style_index_0_id_45ffc45f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_SortSelector_vue_vue_type_style_index_0_id_45ffc45f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue":
/*!************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HiveQueryPlan_vue_vue_type_template_id_57d7228c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HiveQueryPlan.vue?vue&type=template&id=57d7228c&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=template&id=57d7228c&scoped=true");
/* harmony import */ var _HiveQueryPlan_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HiveQueryPlan.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=script&lang=ts");
/* harmony import */ var _HiveQueryPlan_vue_vue_type_style_index_0_id_57d7228c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true");




;
_HiveQueryPlan_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _HiveQueryPlan_vue_vue_type_template_id_57d7228c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_HiveQueryPlan_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-57d7228c"
/* hot reload */
if (false) {}

_HiveQueryPlan_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_HiveQueryPlan_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue":
/*!************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImpalaQueries_vue_vue_type_template_id_3ae86220_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImpalaQueries.vue?vue&type=template&id=3ae86220&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=template&id=3ae86220&scoped=true");
/* harmony import */ var _ImpalaQueries_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImpalaQueries.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=script&lang=ts");
/* harmony import */ var _ImpalaQueries_vue_vue_type_style_index_0_id_3ae86220_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true");




;
_ImpalaQueries_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _ImpalaQueries_vue_vue_type_template_id_3ae86220_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_ImpalaQueries_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-3ae86220"
/* hot reload */
if (false) {}

_ImpalaQueries_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ImpalaQueries_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue":
/*!************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LabeledInfo_vue_vue_type_template_id_591e46c3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabeledInfo.vue?vue&type=template&id=591e46c3&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=template&id=591e46c3&scoped=true");
/* harmony import */ var _LabeledInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabeledInfo.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=script&lang=ts");
/* harmony import */ var _LabeledInfo_vue_vue_type_style_index_0_id_591e46c3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true");




;
_LabeledInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _LabeledInfo_vue_vue_type_template_id_591e46c3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_LabeledInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-591e46c3"
/* hot reload */
if (false) {}

_LabeledInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_LabeledInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue":
/*!*************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QueryDetails_vue_vue_type_template_id_5f0bd868_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryDetails.vue?vue&type=template&id=5f0bd868&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=template&id=5f0bd868&scoped=true");
/* harmony import */ var _QueryDetails_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryDetails.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=script&lang=ts");
/* harmony import */ var _QueryDetails_vue_vue_type_style_index_0_id_5f0bd868_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true");




;
_QueryDetails_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _QueryDetails_vue_vue_type_template_id_5f0bd868_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_QueryDetails_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-5f0bd868"
/* hot reload */
if (false) {}

_QueryDetails_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_QueryDetails_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue":
/*!*****************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QueryDetailsDiff_vue_vue_type_template_id_216353e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryDetailsDiff.vue?vue&type=template&id=216353e6&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=template&id=216353e6&scoped=true");
/* harmony import */ var _QueryDetailsDiff_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryDetailsDiff.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=script&lang=ts");
/* harmony import */ var _QueryDetailsDiff_vue_vue_type_style_index_0_id_216353e6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true");




;
_QueryDetailsDiff_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _QueryDetailsDiff_vue_vue_type_template_id_216353e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_QueryDetailsDiff_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-216353e6"
/* hot reload */
if (false) {}

_QueryDetailsDiff_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_QueryDetailsDiff_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue":
/*!**********************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QueryInfo_vue_vue_type_template_id_f4743310_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryInfo.vue?vue&type=template&id=f4743310&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=template&id=f4743310&scoped=true");
/* harmony import */ var _QueryInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryInfo.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=script&lang=ts");
/* harmony import */ var _QueryInfo_vue_vue_type_style_index_0_id_f4743310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true");




;
_QueryInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _QueryInfo_vue_vue_type_template_id_f4743310_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_QueryInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-f4743310"
/* hot reload */
if (false) {}

_QueryInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_QueryInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue":
/*!*************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QueryInfoTop_vue_vue_type_template_id_1ebc196d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryInfoTop.vue?vue&type=template&id=1ebc196d&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=template&id=1ebc196d&scoped=true");
/* harmony import */ var _QueryInfoTop_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryInfoTop.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=script&lang=ts");
/* harmony import */ var _QueryInfoTop_vue_vue_type_style_index_0_id_1ebc196d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true");




;
_QueryInfoTop_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _QueryInfoTop_vue_vue_type_template_id_1ebc196d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_QueryInfoTop_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-1ebc196d"
/* hot reload */
if (false) {}

_QueryInfoTop_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_QueryInfoTop_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue":
/*!*****************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CountersTable_vue_vue_type_template_id_315fbf8e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountersTable.vue?vue&type=template&id=315fbf8e */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=template&id=315fbf8e");
/* harmony import */ var _CountersTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountersTable.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=script&lang=ts");



_CountersTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _CountersTable_vue_vue_type_template_id_315fbf8e__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_CountersTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CountersTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue":
/*!****************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VarianceCell_vue_vue_type_template_id_fcc1af68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VarianceCell.vue?vue&type=template&id=fcc1af68&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=template&id=fcc1af68&scoped=true");
/* harmony import */ var _VarianceCell_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VarianceCell.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=script&lang=ts");
/* harmony import */ var _VarianceCell_vue_vue_type_style_index_0_id_fcc1af68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true");




;
_VarianceCell_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _VarianceCell_vue_vue_type_template_id_fcc1af68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_VarianceCell_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-fcc1af68"
/* hot reload */
if (false) {}

_VarianceCell_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VarianceCell_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue":
/*!*********************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QueryTable_vue_vue_type_template_id_c8a18ab0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryTable.vue?vue&type=template&id=c8a18ab0&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=template&id=c8a18ab0&scoped=true");
/* harmony import */ var _QueryTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryTable.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=script&lang=ts");
/* harmony import */ var _QueryTable_vue_vue_type_style_index_0_id_c8a18ab0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true");




;
_QueryTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _QueryTable_vue_vue_type_template_id_c8a18ab0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_QueryTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-c8a18ab0"
/* hot reload */
if (false) {}

_QueryTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_QueryTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue":
/*!***********************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SortSelector_vue_vue_type_template_id_45ffc45f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortSelector.vue?vue&type=template&id=45ffc45f&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=template&id=45ffc45f&scoped=true");
/* harmony import */ var _SortSelector_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortSelector.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=script&lang=ts");
/* harmony import */ var _SortSelector_vue_vue_type_style_index_0_id_45ffc45f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true");




;
_SortSelector_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _SortSelector_vue_vue_type_template_id_45ffc45f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_SortSelector_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-45ffc45f"
/* hot reload */
if (false) {}

_SortSelector_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SortSelector_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue":
/*!********************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QueriesList_vue_vue_type_template_id_3840cf00__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueriesList.vue?vue&type=template&id=3840cf00 */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=template&id=3840cf00");
/* harmony import */ var _QueriesList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueriesList.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=script&lang=ts");



_QueriesList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _QueriesList_vue_vue_type_template_id_3840cf00__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_QueriesList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_QueriesList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_HiveQueryPlan_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_HiveQueryPlan_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./HiveQueryPlan.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_ImpalaQueries_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_ImpalaQueries_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./ImpalaQueries.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_LabeledInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_LabeledInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./LabeledInfo.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=script&lang=ts":
/*!*************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryDetails_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryDetails_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueryDetails.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryDetailsDiff_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryDetailsDiff_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueryDetailsDiff.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=script&lang=ts":
/*!**********************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryInfo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueryInfo.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=script&lang=ts":
/*!*************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryInfoTop_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryInfoTop_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueryInfoTop.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_CountersTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_CountersTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./CountersTable.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_VarianceCell_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_VarianceCell_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./VarianceCell.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryTable_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueryTable.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_SortSelector_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_SortSelector_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./SortSelector.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=script&lang=ts":
/*!********************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueriesList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueriesList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueriesList.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=template&id=57d7228c&scoped=true":
/*!******************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=template&id=57d7228c&scoped=true ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_HiveQueryPlan_vue_vue_type_template_id_57d7228c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_HiveQueryPlan_vue_vue_type_template_id_57d7228c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./HiveQueryPlan.vue?vue&type=template&id=57d7228c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=template&id=57d7228c&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=template&id=3ae86220&scoped=true":
/*!******************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=template&id=3ae86220&scoped=true ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_ImpalaQueries_vue_vue_type_template_id_3ae86220_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_ImpalaQueries_vue_vue_type_template_id_3ae86220_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./ImpalaQueries.vue?vue&type=template&id=3ae86220&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=template&id=3ae86220&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=template&id=591e46c3&scoped=true":
/*!******************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=template&id=591e46c3&scoped=true ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_LabeledInfo_vue_vue_type_template_id_591e46c3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_LabeledInfo_vue_vue_type_template_id_591e46c3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./LabeledInfo.vue?vue&type=template&id=591e46c3&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=template&id=591e46c3&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=template&id=5f0bd868&scoped=true":
/*!*******************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=template&id=5f0bd868&scoped=true ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryDetails_vue_vue_type_template_id_5f0bd868_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryDetails_vue_vue_type_template_id_5f0bd868_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueryDetails.vue?vue&type=template&id=5f0bd868&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=template&id=5f0bd868&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=template&id=216353e6&scoped=true":
/*!***********************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=template&id=216353e6&scoped=true ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryDetailsDiff_vue_vue_type_template_id_216353e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryDetailsDiff_vue_vue_type_template_id_216353e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueryDetailsDiff.vue?vue&type=template&id=216353e6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=template&id=216353e6&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=template&id=f4743310&scoped=true":
/*!****************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=template&id=f4743310&scoped=true ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryInfo_vue_vue_type_template_id_f4743310_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryInfo_vue_vue_type_template_id_f4743310_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueryInfo.vue?vue&type=template&id=f4743310&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=template&id=f4743310&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=template&id=1ebc196d&scoped=true":
/*!*******************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=template&id=1ebc196d&scoped=true ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryInfoTop_vue_vue_type_template_id_1ebc196d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryInfoTop_vue_vue_type_template_id_1ebc196d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueryInfoTop.vue?vue&type=template&id=1ebc196d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=template&id=1ebc196d&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=template&id=315fbf8e":
/*!***********************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=template&id=315fbf8e ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_CountersTable_vue_vue_type_template_id_315fbf8e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_CountersTable_vue_vue_type_template_id_315fbf8e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./CountersTable.vue?vue&type=template&id=315fbf8e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/CountersTable.vue?vue&type=template&id=315fbf8e");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=template&id=fcc1af68&scoped=true":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=template&id=fcc1af68&scoped=true ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_VarianceCell_vue_vue_type_template_id_fcc1af68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_VarianceCell_vue_vue_type_template_id_fcc1af68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./VarianceCell.vue?vue&type=template&id=fcc1af68&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=template&id=fcc1af68&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=template&id=c8a18ab0&scoped=true":
/*!***************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=template&id=c8a18ab0&scoped=true ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryTable_vue_vue_type_template_id_c8a18ab0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueryTable_vue_vue_type_template_id_c8a18ab0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueryTable.vue?vue&type=template&id=c8a18ab0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=template&id=c8a18ab0&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=template&id=45ffc45f&scoped=true":
/*!*****************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=template&id=45ffc45f&scoped=true ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_SortSelector_vue_vue_type_template_id_45ffc45f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_SortSelector_vue_vue_type_template_id_45ffc45f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./SortSelector.vue?vue&type=template&id=45ffc45f&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=template&id=45ffc45f&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=template&id=3840cf00":
/*!**************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=template&id=3840cf00 ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueriesList_vue_vue_type_template_id_3840cf00__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_QueriesList_vue_vue_type_template_id_3840cf00__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./QueriesList.vue?vue&type=template&id=3840cf00 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/QueriesList.vue?vue&type=template&id=3840cf00");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_HiveQueryPlan_vue_vue_type_style_index_0_id_57d7228c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/HiveQueryPlan.vue?vue&type=style&index=0&id=57d7228c&lang=scss&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_ImpalaQueries_vue_vue_type_style_index_0_id_3ae86220_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/ImpalaQueries.vue?vue&type=style&index=0&id=3ae86220&lang=scss&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_LabeledInfo_vue_vue_type_style_index_0_id_591e46c3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/LabeledInfo.vue?vue&type=style&index=0&id=591e46c3&lang=scss&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryDetails_vue_vue_type_style_index_0_id_5f0bd868_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetails.vue?vue&type=style&index=0&id=5f0bd868&lang=scss&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryDetailsDiff_vue_vue_type_style_index_0_id_216353e6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryDetailsDiff.vue?vue&type=style&index=0&id=216353e6&lang=scss&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryInfo_vue_vue_type_style_index_0_id_f4743310_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfo.vue?vue&type=style&index=0&id=f4743310&lang=scss&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryInfoTop_vue_vue_type_style_index_0_id_1ebc196d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/QueryInfoTop.vue?vue&type=style&index=0&id=1ebc196d&lang=scss&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_VarianceCell_vue_vue_type_style_index_0_id_fcc1af68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-details/counters-table/VarianceCell.vue?vue&type=style&index=0&id=fcc1af68&lang=scss&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_QueryTable_vue_vue_type_style_index_0_id_c8a18ab0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/QueryTable.vue?vue&type=style&index=0&id=c8a18ab0&lang=scss&scoped=true");


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_SortSelector_vue_vue_type_style_index_0_id_45ffc45f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/query-table/SortSelector.vue?vue&type=style&index=0&id=45ffc45f&lang=scss&scoped=true");


/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-4bde8d39-bundle-a2a4f8506cb55bb7.js.map