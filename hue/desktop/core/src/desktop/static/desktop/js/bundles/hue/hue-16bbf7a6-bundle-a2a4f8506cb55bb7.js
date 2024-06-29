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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-16bbf7a6"],{

/***/ "./desktop/core/src/desktop/js/catalog/api.ts":
/*!****************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/api.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNavTags": () => (/* binding */ addNavTags),
/* harmony export */   "deleteNavTags": () => (/* binding */ deleteNavTags),
/* harmony export */   "fetchAllNavigatorTags": () => (/* binding */ fetchAllNavigatorTags),
/* harmony export */   "fetchClusters": () => (/* binding */ fetchClusters),
/* harmony export */   "fetchComputes": () => (/* binding */ fetchComputes),
/* harmony export */   "fetchDescribe": () => (/* binding */ fetchDescribe),
/* harmony export */   "fetchNamespaces": () => (/* binding */ fetchNamespaces),
/* harmony export */   "fetchNavigatorMetadata": () => (/* binding */ fetchNavigatorMetadata),
/* harmony export */   "fetchPartitions": () => (/* binding */ fetchPartitions),
/* harmony export */   "fetchSample": () => (/* binding */ fetchSample),
/* harmony export */   "fetchSourceMetadata": () => (/* binding */ fetchSourceMetadata),
/* harmony export */   "searchEntities": () => (/* binding */ searchEntities),
/* harmony export */   "updateNavigatorProperties": () => (/* binding */ updateNavigatorProperties),
/* harmony export */   "updateSourceMetadata": () => (/* binding */ updateSourceMetadata)
/* harmony export */ });
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
/* harmony import */ var api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/utils */ "./desktop/core/src/desktop/js/api/utils.ts");
/* harmony import */ var apps_editor_execution_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apps/editor/execution/api */ "./desktop/core/src/desktop/js/apps/editor/execution/api.ts");
/* harmony import */ var config_hueConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config/hueConfig */ "./desktop/core/src/desktop/js/config/hueConfig.ts");
/* harmony import */ var _utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/json.bigDataParse */ "./desktop/core/src/desktop/js/utils/json.bigDataParse.js");
/* harmony import */ var _utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_timing_sleep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/timing/sleep */ "./desktop/core/src/desktop/js/utils/timing/sleep.ts");
/* harmony import */ var utils_string_UUID__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/string/UUID */ "./desktop/core/src/desktop/js/utils/string/UUID.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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








var ADD_TAGS_URL = '/metadata/api/catalog/add_tags';
var AUTOCOMPLETE_URL_PREFIX = '/api/v1/editor/autocomplete/';
var CANCEL_STATEMENT_URL = '/api/v1/editor/cancel_statement';
var CHECK_STATUS_URL = '/api/v1/editor/check_status';
var CLOSE_STATEMENT_URL = '/api/v1/editor/close_statement';
var DELETE_TAGS_URL = '/metadata/api/catalog/delete_tags';
var DESCRIBE_URL = '/api/v1/editor/describe/';
var FETCH_RESULT_DATA_URL = '/api/v1/editor/fetch_result_data';
var FIND_ENTITY_URL = '/metadata/api/catalog/find_entity';
var LIST_TAGS_URL = '/metadata/api/catalog/list_tags';
var METASTORE_TABLE_URL_PREFIX = '/metastore/table/';
var SAMPLE_URL_PREFIX = '/api/v1/editor/sample/';
var SEARCH_URL = '/desktop/api/search/entities';
var UPDATE_PROPERTIES_URL = '/metadata/api/catalog/update_properties';
var getEntryUrlPath = function getEntryUrlPath(entry) {
  return entry.path.join('/') + (entry.path.length ? '/' : '');
};
var performAnalyze = function performAnalyze(_ref) {
  var entry = _ref.entry,
    silenceErrors = _ref.silenceErrors;
  if (entry.isDatabase()) {
    return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.resolve();
  }
  var cancelled = false;
  var pollForAnalysis = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, delay) {
      var analyzeResponse;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(url, undefined, {
              silenceErrors: silenceErrors
            });
          case 2:
            analyzeResponse = _context.sent;
            if (!cancelled) {
              _context.next = 5;
              break;
            }
            throw new Error('Cancelled');
          case 5:
            if (!(!analyzeResponse.isFailure && !analyzeResponse.isSuccess)) {
              _context.next = 11;
              break;
            }
            _context.next = 8;
            return (0,utils_timing_sleep__WEBPACK_IMPORTED_MODULE_5__["default"])(delay);
          case 8:
            return _context.abrupt("return", pollForAnalysis(url, 1000));
          case 11:
            return _context.abrupt("return", analyzeResponse);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function pollForAnalysis(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject, onCancel) {
      var analyzeResponse;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            onCancel(function () {
              cancelled = true;
            });
            _context2.prev = 1;
            _context2.next = 4;
            return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)("/api/v1/".concat(entry.getConnector().id === 'hive' ? 'beeswax' : entry.getConnector().id, "/analyze/").concat(getEntryUrlPath(entry)), undefined, {
              silenceErrors: silenceErrors
            });
          case 4:
            analyzeResponse = _context2.sent;
            if (!(!cancelled && analyzeResponse && analyzeResponse.status === 0 && analyzeResponse.watch_url)) {
              _context2.next = 13;
              break;
            }
            _context2.t0 = resolve;
            _context2.next = 9;
            return pollForAnalysis(analyzeResponse.watch_url, 500);
          case 9:
            _context2.t1 = _context2.sent;
            (0, _context2.t0)(_context2.t1);
            _context2.next = 14;
            break;
          case 13:
            reject('Analyze failed');
          case 14:
            _context2.next = 19;
            break;
          case 16:
            _context2.prev = 16;
            _context2.t2 = _context2["catch"](1);
            reject(_context2.t2 || 'Analyze failed');
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 16]]);
    }));
    return function (_x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var fetchDescribe = function fetchDescribe(_ref4) {
  var entry = _ref4.entry,
    silenceErrors = _ref4.silenceErrors,
    refreshAnalysis = _ref4.refreshAnalysis;
  return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject, onCancel) {
      var analyzePromise, _entry$path, database, table, fields, url, describePromise;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!entry.isSource()) {
              _context3.next = 3;
              break;
            }
            reject('Describe is not possible on the source');
            return _context3.abrupt("return");
          case 3:
            if (!refreshAnalysis) {
              _context3.next = 13;
              break;
            }
            analyzePromise = performAnalyze({
              entry: entry,
              silenceErrors: silenceErrors
            });
            onCancel(analyzePromise.cancel.bind(analyzePromise));
            _context3.prev = 6;
            _context3.next = 9;
            return analyzePromise;
          case 9:
            _context3.next = 13;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](6);
          case 13:
            _entry$path = _toArray(entry.path), database = _entry$path[0], table = _entry$path[1], fields = _entry$path.slice(2);
            url = "".concat(DESCRIBE_URL).concat(database);
            if (table && fields.length) {
              url += "/".concat(table, "/stats/").concat(fields.join('/'));
            } else if (table) {
              url += "/".concat(table, "/");
            }
            describePromise = (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(url, {
              format: 'json',
              cluster: JSON.stringify(entry.compute),
              source_type: getAssistConnectorId(entry),
              connector: JSON.stringify(entry.getConnector())
            }, {
              silenceErrors: silenceErrors,
              handleSuccess: function handleSuccess(response, postResolve, postReject) {
                if ((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.successResponseIsError)(response)) {
                  postReject((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.extractErrorMessage)(response));
                } else {
                  var adjustedResponse = response;
                  adjustedResponse.hueTimestamp = Date.now();
                  postResolve(adjustedResponse);
                }
              }
            });
            _context3.prev = 17;
            _context3.t1 = resolve;
            _context3.next = 21;
            return describePromise;
          case 21:
            _context3.t2 = _context3.sent;
            (0, _context3.t1)(_context3.t2);
            _context3.next = 28;
            break;
          case 25:
            _context3.prev = 25;
            _context3.t3 = _context3["catch"](17);
            reject(_context3.t3 || 'Describe failed');
          case 28:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[6, 11], [17, 25]]);
    }));
    return function (_x6, _x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var fetchClusters = function fetchClusters(connector, silenceErrors) {
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.get)("/desktop/api2/context/clusters/".concat(connector.id), undefined, {
    silenceErrors: silenceErrors
  });
};
var fetchComputes = function fetchComputes(connector, silenceErrors) {
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.get)("/desktop/api2/context/computes/".concat(connector.id), undefined, {
    silenceErrors: silenceErrors
  });
};
var fetchNamespaces = function fetchNamespaces(connector, silenceErrors) {
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.get)("/api/v1/get_namespaces/".concat(connector.id), undefined, {
    silenceErrors: silenceErrors
  });
};
var fetchNavigatorMetadata = function fetchNavigatorMetadata(_ref6) {
  var entry = _ref6.entry,
    silenceErrors = _ref6.silenceErrors;
  var params = new URLSearchParams();
  var _entry$path2 = _slicedToArray(entry.path, 3),
    database = _entry$path2[0],
    tableOrView = _entry$path2[1],
    field = _entry$path2[2];
  if (database && tableOrView && field) {
    params.append('type', 'field');
    params.append('database', database);
    params.append('table', tableOrView);
  } else if (database && tableOrView) {
    params.append('type', entry.isView() ? 'view' : 'table');
    params.append('database', database);
  } else if (database) {
    params.append('type', 'database');
  } else {
    return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('Navigator metadata is not possible on the source');
  }
  params.append('name', entry.name);
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)("".concat(FIND_ENTITY_URL, "?").concat(params), {
    notebook: {},
    snippet: JSON.stringify({
      type: entry.getConnector().id,
      source: 'data'
    }),
    cluster: entry.compute && JSON.stringify(entry.compute) || '""'
  }, {
    silenceErrors: silenceErrors,
    handleSuccess: function handleSuccess(response, resolve, reject) {
      if ((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.successResponseIsError)(response)) {
        reject((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.extractErrorMessage)(response));
      } else {
        var adjustedResponse = response.entity || response;
        adjustedResponse.hueTimestamp = Date.now();
        resolve(adjustedResponse);
      }
    }
  });
};
var fetchAllNavigatorTags = function fetchAllNavigatorTags(_ref7) {
  var silenceErrors = _ref7.silenceErrors;
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(LIST_TAGS_URL, undefined, {
    silenceErrors: silenceErrors,
    handleSuccess: function handleSuccess(response, resolve, reject) {
      if ((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.successResponseIsError)(response)) {
        reject((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.extractErrorMessage)(response));
      } else {
        resolve(response.tags || {});
      }
    }
  });
};
var fetchPartitions = function fetchPartitions(_ref8) {
  var entry = _ref8.entry,
    silenceErrors = _ref8.silenceErrors;
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)("".concat(METASTORE_TABLE_URL_PREFIX).concat(getEntryUrlPath(entry), "partitions"), {
    format: 'json',
    cluster: entry.compute && JSON.stringify(entry.compute) || '""'
  }, {
    silenceErrors: silenceErrors,
    handleSuccess: function handleSuccess(response, resolve, reject) {
      var adjustedResponse = response || {};
      adjustedResponse.hueTimestamp = Date.now();
      if ((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.successResponseIsError)(response)) {
        reject("Partitions failed: ".concat((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.extractErrorMessage)(response)));
      } else {
        resolve(adjustedResponse);
      }
    },
    handleError: function handleError(errorResponse, resolve, reject) {
      if (errorResponse.response && errorResponse.response.data && errorResponse.response.data.indexOf('is not partitioned') !== -1) {
        resolve({
          hueTimestamp: Date.now(),
          partition_keys_json: [],
          partition_values_json: []
        });
      } else {
        reject(errorResponse);
      }
    }
  });
};
/**
 * Checks the status for the given snippet ID
 * Note: similar to notebook and search check_status.
 *
 * @param {Object} options
 * @param {Object} options.notebookJson
 * @param {Object} options.snippetJson
 * @param {boolean} [options.silenceErrors]
 *
 * @return {CancellableJqPromise}
 */
var whenAvailable = function whenAvailable(options) {
  return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject, onCancel) {
      var promiseToCancel, cancelled, checkStatusPromise, response, status, whenPromise;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            cancelled = false;
            onCancel(function () {
              cancelled = true;
              if (promiseToCancel) {
                promiseToCancel.cancel();
              }
            });
            checkStatusPromise = (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(CHECK_STATUS_URL, {
              notebook: options.notebookJson,
              snippet: options.snippetJson,
              cluster: options.entry.compute && JSON.stringify(options.entry.compute) || '""'
            }, {
              silenceErrors: options.silenceErrors
            });
            _context4.prev = 3;
            promiseToCancel = checkStatusPromise;
            _context4.next = 7;
            return checkStatusPromise;
          case 7:
            response = _context4.sent;
            if (!(response && response.query_status && response.query_status.status)) {
              _context4.next = 34;
              break;
            }
            status = response.query_status.status;
            if (!(status === 'available')) {
              _context4.next = 14;
              break;
            }
            resolve(response.query_status);
            _context4.next = 31;
            break;
          case 14:
            if (!(status === 'running' || status === 'starting' || status === 'waiting')) {
              _context4.next = 31;
              break;
            }
            _context4.next = 17;
            return (0,utils_timing_sleep__WEBPACK_IMPORTED_MODULE_5__["default"])(500);
          case 17:
            _context4.prev = 17;
            if (cancelled) {
              _context4.next = 27;
              break;
            }
            whenPromise = whenAvailable(options);
            promiseToCancel = whenPromise;
            _context4.t0 = resolve;
            _context4.next = 24;
            return whenPromise;
          case 24:
            _context4.t1 = _context4.sent;
            (0, _context4.t0)(_context4.t1);
            return _context4.abrupt("return");
          case 27:
            _context4.next = 31;
            break;
          case 29:
            _context4.prev = 29;
            _context4.t2 = _context4["catch"](17);
          case 31:
            reject(response.query_status);
            _context4.next = 35;
            break;
          case 34:
            reject('Cancelled');
          case 35:
            _context4.next = 40;
            break;
          case 37:
            _context4.prev = 37;
            _context4.t3 = _context4["catch"](3);
            reject(_context4.t3);
          case 40:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[3, 37], [17, 29]]);
    }));
    return function (_x9, _x10, _x11) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var fetchSample = function fetchSample(_ref10) {
  var entry = _ref10.entry,
    silenceErrors = _ref10.silenceErrors,
    operation = _ref10.operation,
    sampleCount = _ref10.sampleCount;
  return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject, onCancel) {
      var cancellablePromises, notebookJson, snippetJson, closeQuery, cancelQuery, samplePromise, sampleResponse, queryResult, _queryResult$result, statusPromise, resultStatus, transformResponse, resultPromise, _sampleResponse, sample, closeSessions;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            cancellablePromises = [];
            notebookJson = undefined;
            snippetJson = undefined;
            closeQuery = /*#__PURE__*/function () {
              var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!notebookJson) {
                        _context5.next = 8;
                        break;
                      }
                      _context5.prev = 1;
                      _context5.next = 4;
                      return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(CLOSE_STATEMENT_URL, {
                        notebook: notebookJson,
                        snippet: snippetJson
                      }, {
                        silenceErrors: true
                      });
                    case 4:
                      _context5.next = 8;
                      break;
                    case 6:
                      _context5.prev = 6;
                      _context5.t0 = _context5["catch"](1);
                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5, null, [[1, 6]]);
              }));
              return function closeQuery() {
                return _ref12.apply(this, arguments);
              };
            }();
            cancelQuery = /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!notebookJson) {
                        _context6.next = 8;
                        break;
                      }
                      _context6.prev = 1;
                      _context6.next = 4;
                      return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(CANCEL_STATEMENT_URL, {
                        notebook: notebookJson,
                        snippet: snippetJson,
                        cluster: entry.compute && JSON.stringify(entry.compute) || '""'
                      }, {
                        silenceErrors: true
                      });
                    case 4:
                      _context6.next = 8;
                      break;
                    case 6:
                      _context6.prev = 6;
                      _context6.t0 = _context6["catch"](1);
                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, null, [[1, 6]]);
              }));
              return function cancelQuery() {
                return _ref13.apply(this, arguments);
              };
            }();
            onCancel(function () {
              cancellablePromises.forEach(function (cancellable) {
                return cancellable.cancel();
              });
            });
            cancellablePromises.push({
              cancel: function () {
                var _cancel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.prev = 0;
                        _context7.next = 3;
                        return cancelQuery();
                      case 3:
                        _context7.next = 7;
                        break;
                      case 5:
                        _context7.prev = 5;
                        _context7.t0 = _context7["catch"](0);
                      case 7:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7, null, [[0, 5]]);
                }));
                function cancel() {
                  return _cancel.apply(this, arguments);
                }
                return cancel;
              }()
            });
            samplePromise = (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)("".concat(SAMPLE_URL_PREFIX).concat(getEntryUrlPath(entry)), {
              notebook: {},
              snippet: JSON.stringify({
                type: getAssistConnectorId(entry),
                compute: entry.compute
              }),
              async: true,
              operation: "\"".concat(operation || 'default', "\""),
              cluster: entry.compute && JSON.stringify(entry.compute) || '""'
            }, {
              silenceErrors: silenceErrors
            });
            _context8.prev = 8;
            cancellablePromises.push(samplePromise);
            _context8.next = 12;
            return samplePromise;
          case 12:
            sampleResponse = _context8.sent;
            cancellablePromises.pop();
            queryResult = {
              id: (0,utils_string_UUID__WEBPACK_IMPORTED_MODULE_6__["default"])(),
              type: sampleResponse.result && sampleResponse.result.type || entry.getConnector().id,
              compute: entry.compute,
              status: 'running',
              result: sampleResponse.result || {}
            };
            queryResult.result.type = 'table';
            notebookJson = JSON.stringify({
              type: entry.getConnector().id
            });
            snippetJson = JSON.stringify(queryResult);
            if (!(sampleResponse && sampleResponse.rows)) {
              _context8.next = 23;
              break;
            }
            // Sync results
            resolve({
              type: 'table',
              hueTimestamp: Date.now(),
              data: sampleResponse.rows,
              meta: sampleResponse.full_headers || []
            });
            closeQuery();
            _context8.next = 53;
            break;
          case 23:
            statusPromise = whenAvailable({
              notebookJson: notebookJson,
              snippetJson: snippetJson,
              entry: entry,
              silenceErrors: silenceErrors
            });
            cancellablePromises.push(statusPromise);
            _context8.next = 27;
            return statusPromise;
          case 27:
            resultStatus = _context8.sent;
            cancellablePromises.pop();
            if (!(resultStatus.status !== 'available')) {
              _context8.next = 33;
              break;
            }
            reject();
            closeQuery();
            return _context8.abrupt("return");
          case 33:
            if ((_queryResult$result = queryResult.result) !== null && _queryResult$result !== void 0 && _queryResult$result.handle && typeof resultStatus.has_result_set !== 'undefined') {
              queryResult.result.handle.has_result_set = resultStatus.has_result_set;
            }
            snippetJson = JSON.stringify(queryResult);
            transformResponse = function transformResponse(response) {
              return JSON.bigdataParse(response);
            };
            resultPromise = (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(FETCH_RESULT_DATA_URL, {
              notebook: notebookJson,
              snippet: snippetJson,
              rows: sampleCount || 100,
              startOver: 'false'
            }, {
              silenceErrors: silenceErrors,
              transformResponse: transformResponse
            });
            _context8.next = 39;
            return resultPromise;
          case 39:
            _sampleResponse = _context8.sent;
            sample = {
              hueTimestamp: Date.now(),
              type: 'table',
              data: _sampleResponse.result && _sampleResponse.result.data || [],
              meta: _sampleResponse.result && _sampleResponse.result.meta || []
            };
            resolve(sample);
            closeQuery();
            cancellablePromises.pop();
            closeSessions = window.CLOSE_SESSIONS;
            if (!(closeSessions && closeSessions[entry.getConnector().dialect || ''] && queryResult.result.handle && queryResult.result.handle.session_id)) {
              _context8.next = 53;
              break;
            }
            _context8.prev = 46;
            _context8.next = 49;
            return (0,apps_editor_execution_api__WEBPACK_IMPORTED_MODULE_2__.closeSession)({
              session: {
                id: queryResult.result.handle.session_id,
                session_id: queryResult.result.handle.session_guid || '',
                type: entry.getConnector().id,
                properties: []
              },
              silenceErrors: silenceErrors
            });
          case 49:
            _context8.next = 53;
            break;
          case 51:
            _context8.prev = 51;
            _context8.t0 = _context8["catch"](46);
          case 53:
            _context8.next = 59;
            break;
          case 55:
            _context8.prev = 55;
            _context8.t1 = _context8["catch"](8);
            reject();
            closeQuery();
          case 59:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[8, 55], [46, 51]]);
    }));
    return function (_x12, _x13, _x14) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var fetchSourceMetadata = function fetchSourceMetadata(_ref14) {
  var entry = _ref14.entry,
    silenceErrors = _ref14.silenceErrors;
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)("".concat(AUTOCOMPLETE_URL_PREFIX).concat(getEntryUrlPath(entry)), {
    notebook: {},
    snippet: JSON.stringify({
      type: getAssistConnectorId(entry),
      source: 'data'
    }),
    operation: entry.isModel() ? 'model' : 'default',
    cluster: entry.compute && JSON.stringify(entry.compute) || '""'
  }, {
    silenceErrors: silenceErrors,
    handleSuccess: function handleSuccess(response, resolve, reject) {
      var message = response.error || response.message || '';
      var adjustedResponse = response || {};
      adjustedResponse.notFound = !!response && response.status === 0 && response.code === 500 && (message.indexOf('Error 10001') !== -1 || message.indexOf('AnalysisException') !== -1);
      adjustedResponse.hueTimestamp = Date.now();
      if (!adjustedResponse.notFound && (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.successResponseIsError)(response)) {
        reject((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.extractErrorMessage)(response));
      } else {
        resolve(adjustedResponse);
      }
    }
  });
};
// this is a workaround for hplsql describe not working
var getAssistConnectorId = function getAssistConnectorId(entry) {
  var connector = entry.getConnector();
  if (connector.dialect === 'hplsql') {
    var hiveConnector = (0,config_hueConfig__WEBPACK_IMPORTED_MODULE_3__.findEditorConnector)(function (connector) {
      return connector.dialect === 'hive';
    });
    if (hiveConnector) {
      return hiveConnector.id;
    }
  }
  return connector.id;
};
var searchEntities = function searchEntities(_ref15) {
  var limit = _ref15.limit,
    query = _ref15.query,
    rawQuery = _ref15.rawQuery,
    silenceErrors = _ref15.silenceErrors,
    sources = _ref15.sources;
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(SEARCH_URL, {
    query_s: JSON.stringify(query),
    limit: limit || 100,
    raw_query: !!rawQuery,
    sources: sources && JSON.stringify(sources) || '["sql"]'
  }, {
    silenceErrors: silenceErrors
  });
};
var updateNavigatorProperties = function updateNavigatorProperties(_ref16) {
  var deletedCustomMetadataKeys = _ref16.deletedCustomMetadataKeys,
    identity = _ref16.identity,
    modifiedCustomMetadata = _ref16.modifiedCustomMetadata,
    properties = _ref16.properties,
    silenceErrors = _ref16.silenceErrors;
  var data = {
    id: JSON.stringify(identity)
  };
  if (properties) {
    data.properties = JSON.stringify(properties);
  }
  if (modifiedCustomMetadata) {
    data.modifiedCustomMetadata = JSON.stringify(modifiedCustomMetadata);
  }
  if (deletedCustomMetadataKeys) {
    data.deletedCustomMetadataKeys = JSON.stringify(deletedCustomMetadataKeys);
  }
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(UPDATE_PROPERTIES_URL, data, {
    silenceErrors: silenceErrors
  });
};
var updateSourceMetadata = function updateSourceMetadata(_ref17) {
  var entry = _ref17.entry,
    properties = _ref17.properties,
    silenceErrors = _ref17.silenceErrors;
  var url;
  var data = {
    source_type: entry.getConnector().id
  };
  if (entry.path.length === 1) {
    url = "/metastore/databases/".concat(entry.path[0], "/alter");
    data.properties = JSON.stringify(properties);
  } else if (entry.path.length === 2) {
    url = "/metastore/table/".concat(entry.path[0], "/").concat(entry.path[1], "/alter");
    if (properties !== null && properties !== void 0 && properties.name) {
      data.new_table_name = properties.name;
    }
  } else if (entry.path.length > 2) {
    url = "/metastore/table/".concat(entry.path[0], "/").concat(entry.path[1], "/alter_column");
    data.column = entry.path.slice(2).join('.');
    if (properties !== null && properties !== void 0 && properties.name) {
      data.new_column_name = properties.name;
    }
    if (properties !== null && properties !== void 0 && properties.type) {
      data.new_column_type = properties.type;
    }
    if (properties !== null && properties !== void 0 && properties.partitions) {
      data.partition_spec = JSON.stringify(properties.partitions);
    }
  }
  if (properties !== null && properties !== void 0 && properties.comment) {
    data.comment = properties.comment;
  }
  if (!url) {
    return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject();
  }
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(url, data, {
    silenceErrors: silenceErrors
  });
};
var addNavTags = function addNavTags(entityId, tags) {
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(ADD_TAGS_URL, {
    id: JSON.stringify(entityId),
    tags: JSON.stringify(tags)
  });
};
var deleteNavTags = function deleteNavTags(entityId, tags) {
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(DELETE_TAGS_URL, {
    id: JSON.stringify(entityId),
    tags: JSON.stringify(tags)
  });
};

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-16bbf7a6-bundle-a2a4f8506cb55bb7.js.map