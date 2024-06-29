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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-a799d440"],{

/***/ "./desktop/core/src/desktop/js/catalog/analyzer/ApiSqlAnalyzer.ts":
/*!************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/analyzer/ApiSqlAnalyzer.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApiSqlAnalyzer)
/* harmony export */ });
/* harmony import */ var api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/utils */ "./desktop/core/src/desktop/js/api/utils.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
 * Fetches the popularity for various aspects of the given tables
 */
var genericSqlAnalyzerMultiTableFetch = function genericSqlAnalyzerMultiTableFetch(_ref, url) {
  var silenceErrors = _ref.silenceErrors,
    paths = _ref.paths,
    connector = _ref.connector;
  var dbTables = new Set();
  paths.forEach(function (path) {
    dbTables.add(path.join('.'));
  });
  var data = {
    connector: JSON.stringify(connector),
    dbTables: JSON.stringify(_toConsumableArray(dbTables.values()))
  };
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(url, data, {
    silenceErrors: silenceErrors,
    handleSuccess: function handleSuccess(response, resolve, reject) {
      if ((0,api_utils__WEBPACK_IMPORTED_MODULE_0__.successResponseIsError)(response)) {
        reject((0,api_utils__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessage)(response));
      } else {
        response.hueTimestamp = Date.now();
        resolve(response);
      }
    }
  });
};
var COMPATIBILITY_URL = '/api/v1/optimizer/query_compatibility';
var PREDICT_URL = '/api/v1/optimizer/predict';
var RISK_URL = '/api/v1/optimizer/query_risk/';
var SIMILARITY_URL = '/api/v1/optimizer/similar_queries';
var TOP_AGGS_URL = '/api/v1/optimizer/top_aggs';
var TOP_COLUMNS_URL = '/api/v1/optimizer/top_columns';
var TOP_FILTERS_URL = '/api/v1/optimizer/top_filters';
var TOP_JOINS_URL = '/api/v1/optimizer/top_joins';
var TOP_TABLES_URL = '/api/v1/optimizer/top_tables';
var TABLE_DETAILS_URL = '/api/v1/optimizer/table_details';
var ApiSqlAnalyzer = /*#__PURE__*/function () {
  function ApiSqlAnalyzer(connector) {
    _classCallCheck(this, ApiSqlAnalyzer);
    this.connector = void 0;
    this.connector = connector;
  }
  return _createClass(ApiSqlAnalyzer, [{
    key: "analyzeCompatibility",
    value: function analyzeCompatibility(_ref2) {
      var notebookJson = _ref2.notebookJson,
        snippetJson = _ref2.snippetJson,
        sourcePlatform = _ref2.sourcePlatform,
        targetPlatform = _ref2.targetPlatform,
        silenceErrors = _ref2.silenceErrors;
      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(COMPATIBILITY_URL, {
        connector: JSON.stringify(this.connector),
        notebook: notebookJson,
        snippet: snippetJson,
        sourcePlatform: sourcePlatform,
        targetPlatform: targetPlatform
      }, {
        silenceErrors: silenceErrors
      });
    }
  }, {
    key: "analyzeRisk",
    value: function analyzeRisk(_ref3) {
      var notebookJson = _ref3.notebookJson,
        snippetJson = _ref3.snippetJson,
        silenceErrors = _ref3.silenceErrors;
      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(RISK_URL, {
        connector: JSON.stringify(this.connector),
        notebook: notebookJson,
        snippet: snippetJson
      }, {
        silenceErrors: silenceErrors
      });
    }
  }, {
    key: "analyzeSimilarity",
    value: function analyzeSimilarity(_ref4) {
      var notebookJson = _ref4.notebookJson,
        snippetJson = _ref4.snippetJson,
        sourcePlatform = _ref4.sourcePlatform,
        silenceErrors = _ref4.silenceErrors;
      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(SIMILARITY_URL, {
        connector: JSON.stringify(this.connector),
        notebook: notebookJson,
        snippet: snippetJson,
        sourcePlatform: sourcePlatform
      }, {
        silenceErrors: silenceErrors
      });
    }
  }, {
    key: "fetchPopularity",
    value: function fetchPopularity(_ref5) {
      var paths = _ref5.paths,
        silenceErrors = _ref5.silenceErrors;
      var url, data;
      if (paths.length === 1 && paths[0].length === 1) {
        url = TOP_TABLES_URL;
        data = {
          connector: JSON.stringify(this.connector),
          database: paths[0][0]
        };
      } else {
        url = TOP_COLUMNS_URL;
        data = {
          connector: JSON.stringify(this.connector),
          dbTables: JSON.stringify(paths.map(function (path) {
            return path.join('.');
          }))
        };
      }
      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(url, data, {
        silenceErrors: silenceErrors,
        handleSuccess: function handleSuccess(response, resolve, reject) {
          if ((0,api_utils__WEBPACK_IMPORTED_MODULE_0__.successResponseIsError)(response)) {
            reject((0,api_utils__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessage)(response));
          } else {
            response.hueTimestamp = Date.now();
            resolve(response);
          }
        }
      });
    }
  }, {
    key: "fetchTopAggs",
    value: function fetchTopAggs(options) {
      return genericSqlAnalyzerMultiTableFetch(_objectSpread(_objectSpread({}, options), {}, {
        connector: this.connector
      }), TOP_AGGS_URL);
    }
  }, {
    key: "fetchTopColumns",
    value: function fetchTopColumns(options) {
      return genericSqlAnalyzerMultiTableFetch(_objectSpread(_objectSpread({}, options), {}, {
        connector: this.connector
      }), TOP_COLUMNS_URL);
    }
  }, {
    key: "fetchTopFilters",
    value: function fetchTopFilters(options) {
      return genericSqlAnalyzerMultiTableFetch(_objectSpread(_objectSpread({}, options), {}, {
        connector: this.connector
      }), TOP_FILTERS_URL);
    }
  }, {
    key: "fetchTopJoins",
    value: function fetchTopJoins(options) {
      return genericSqlAnalyzerMultiTableFetch(_objectSpread(_objectSpread({}, options), {}, {
        connector: this.connector
      }), TOP_JOINS_URL);
    }
  }, {
    key: "fetchSqlAnalyzerMeta",
    value: function fetchSqlAnalyzerMeta(_ref6) {
      var path = _ref6.path,
        silenceErrors = _ref6.silenceErrors;
      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(TABLE_DETAILS_URL, {
        connector: JSON.stringify(this.connector),
        databaseName: path[0],
        tableName: path[1]
      }, {
        silenceErrors: silenceErrors,
        handleSuccess: function handleSuccess(response, resolve, reject) {
          if (response.status === 0 && response.details) {
            response.details.hueTimestamp = Date.now();
            resolve(response.details);
          }
          reject((0,api_utils__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessage)(response));
        }
      });
    }
  }, {
    key: "predict",
    value: function predict(_ref7) {
      var beforeCursor = _ref7.beforeCursor,
        afterCursor = _ref7.afterCursor;
      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(PREDICT_URL, {
        connector: JSON.stringify(this.connector),
        beforeCursor: beforeCursor,
        afterCursor: afterCursor
      }, {
        silenceErrors: true,
        handleSuccess: function handleSuccess(response, resolve) {
          resolve(response);
        }
      });
    }
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/analyzer/CombinedSqlAnalyser.ts":
/*!*****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/analyzer/CombinedSqlAnalyser.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CombinedSqlAnalyser)
/* harmony export */ });
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
/* harmony import */ var catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! catalog/contextCatalog */ "./desktop/core/src/desktop/js/catalog/contextCatalog.ts");
/* harmony import */ var _ApiSqlAnalyzer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApiSqlAnalyzer */ "./desktop/core/src/desktop/js/catalog/analyzer/ApiSqlAnalyzer.ts");
/* harmony import */ var catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! catalog/analyzer/types */ "./desktop/core/src/desktop/js/catalog/analyzer/types.ts");
/* harmony import */ var catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! catalog/dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var parse_sql_sqlParserRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parse/sql/sqlParserRepository */ "./desktop/core/src/desktop/js/parse/sql/sqlParserRepository.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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








var CombinedSqlAnalyser = /*#__PURE__*/function () {
  function CombinedSqlAnalyser(connector) {
    _classCallCheck(this, CombinedSqlAnalyser);
    this.apiAnalyzer = void 0;
    this.connector = void 0;
    this.apiAnalyzer = new _ApiSqlAnalyzer__WEBPACK_IMPORTED_MODULE_2__["default"](connector);
    this.connector = connector;
  }
  return _createClass(CombinedSqlAnalyser, [{
    key: "analyzeRisk",
    value: function analyzeRisk(options) {
      var _this = this;
      return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject, onCancel) {
          var apiPromise, snippet, missingLimit, hints, isSelectStar, apiResponse;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (_this.connector.dialect) {
                  _context.next = 3;
                  break;
                }
                reject();
                return _context.abrupt("return");
              case 3:
                apiPromise = _this.apiAnalyzer.analyzeRisk(_objectSpread(_objectSpread({}, options), {}, {
                  silenceErrors: true
                }));
                onCancel(function () {
                  apiPromise.cancel();
                });
                snippet = JSON.parse(options.snippetJson);
                _context.next = 8;
                return _this.checkMissingLimit(snippet.statement, _this.connector.dialect);
              case 8:
                missingLimit = _context.sent;
                hints = missingLimit ? [{
                  riskTables: [],
                  riskAnalysis: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Query has no limit'),
                  riskId: 17,
                  risk: 'low',
                  riskRecommendation: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Append a limit clause to reduce the size of the result set')
                }] : [];
                _context.next = 12;
                return _this.checkSelectStar(snippet.statement, _this.connector.dialect);
              case 12:
                isSelectStar = _context.sent;
                if (isSelectStar) {
                  hints.push({
                    riskTables: [],
                    riskAnalysis: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Query doing a SELECT *'),
                    // Could be triggered only if column number > 10 (todo in Validator API)
                    riskId: 18,
                    risk: 'low',
                    riskRecommendation: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Select only a subset of columns instead of all of them')
                  });
                }
                _context.prev = 14;
                _context.next = 17;
                return apiPromise;
              case 17:
                apiResponse = _context.sent;
                if (apiResponse.query_complexity && apiResponse.query_complexity.hints) {
                  hints.push.apply(hints, _toConsumableArray(apiResponse.query_complexity.hints));
                }
                _context.next = 23;
                break;
              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](14);
              case 23:
                resolve({
                  status: 0,
                  message: '',
                  query_complexity: {
                    hints: hints,
                    noStats: true,
                    noDDL: false
                  }
                });
              case 24:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[14, 21]]);
        }));
        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "checkMissingLimit",
    value: function () {
      var _checkMissingLimit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(statement, dialect) {
        var autocompleter, parsedStatement;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return parse_sql_sqlParserRepository__WEBPACK_IMPORTED_MODULE_5__["default"].getAutocompleteParser(dialect);
            case 2:
              autocompleter = _context2.sent;
              _context2.prev = 3;
              parsedStatement = autocompleter.parseSql(statement + ' ', '');
              _context2.next = 10;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](3);
              return _context2.abrupt("return", false);
            case 10:
              return _context2.abrupt("return", parsedStatement.locations.some(function (location) {
                return location.type === 'statementType' && location.identifier === 'SELECT';
              }) && parsedStatement.locations.some(function (location) {
                return location.type === 'table';
              }) && parsedStatement.locations.some(function (location) {
                return location.type === 'limitClause' && location.missing;
              }));
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[3, 7]]);
      }));
      function checkMissingLimit(_x4, _x5) {
        return _checkMissingLimit.apply(this, arguments);
      }
      return checkMissingLimit;
    }()
  }, {
    key: "checkSelectStar",
    value: function () {
      var _checkSelectStar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(statement, dialect) {
        var autocompleter, parsedStatement;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return parse_sql_sqlParserRepository__WEBPACK_IMPORTED_MODULE_5__["default"].getAutocompleteParser(dialect);
            case 2:
              autocompleter = _context3.sent;
              _context3.prev = 3;
              parsedStatement = autocompleter.parseSql(statement + ' ', '');
              _context3.next = 10;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](3);
              return _context3.abrupt("return", false);
            case 10:
              return _context3.abrupt("return", parsedStatement.locations.some(function (location) {
                return location.type === 'statementType' && location.identifier === 'SELECT';
              }) && parsedStatement.locations.some(function (location) {
                return location.type === 'selectList' && !location.missing;
              }) && parsedStatement.locations.some(function (location) {
                return location.type === 'asterisk';
              }));
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 7]]);
      }));
      function checkSelectStar(_x6, _x7) {
        return _checkSelectStar.apply(this, arguments);
      }
      return checkSelectStar;
    }()
  }, {
    key: "fetchTopJoins",
    value: function fetchTopJoins(options) {
      var _this2 = this;
      var apiPromise = this.apiAnalyzer.fetchTopJoins(options);
      var path = options.paths[0].join('.');
      return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise(function (resolve, reject, onCancel) {
        (0,catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_1__.getNamespaces)(_objectSpread({
          connector: _this2.connector
        }, options)).then( /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(result) {
            var entry, sourceMetaPromise, sourceMeta, values, apiResponse;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(!result.namespaces.length || !result.namespaces[0].computes.length)) {
                    _context4.next = 4;
                    break;
                  }
                  reject('No namespace or compute found');
                  console.warn(result);
                  return _context4.abrupt("return");
                case 4:
                  _context4.next = 6;
                  return catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_4__["default"].getEntry({
                    connector: _this2.connector,
                    path: path,
                    namespace: result.namespaces[0],
                    compute: result.namespaces[0].computes[0]
                  });
                case 6:
                  entry = _context4.sent;
                  sourceMetaPromise = entry.getSourceMeta(options);
                  onCancel(function () {
                    apiPromise.cancel();
                    sourceMetaPromise.cancel();
                  });
                  _context4.prev = 9;
                  _context4.next = 12;
                  return sourceMetaPromise;
                case 12:
                  sourceMeta = _context4.sent;
                  values = (sourceMeta.foreign_keys || []).map(function (key) {
                    return {
                      totalTableCount: 22,
                      totalQueryCount: 3,
                      joinCols: [{
                        columns: [path + '.' + key.name, key.to]
                      }],
                      tables: [path].concat(key.to.split('.', 2).join('.')),
                      joinType: 'join'
                    };
                  });
                  _context4.prev = 14;
                  _context4.next = 17;
                  return apiPromise;
                case 17:
                  apiResponse = _context4.sent;
                  values.push.apply(values, _toConsumableArray(apiResponse.values));
                  _context4.next = 23;
                  break;
                case 21:
                  _context4.prev = 21;
                  _context4.t0 = _context4["catch"](14);
                case 23:
                  resolve({
                    values: values
                  });
                  _context4.next = 29;
                  break;
                case 26:
                  _context4.prev = 26;
                  _context4.t1 = _context4["catch"](9);
                  reject(_context4.t1);
                case 29:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, null, [[9, 26], [14, 21]]);
          }));
          return function (_x8) {
            return _ref2.apply(this, arguments);
          };
        }())["catch"](reject);
      });
    }
  }, {
    key: "analyzeCompatibility",
    value: function analyzeCompatibility(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.analyzeCompatibility(options);
      }
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeCompatibility is not Implemented');
    }
  }, {
    key: "analyzeSimilarity",
    value: function analyzeSimilarity(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.analyzeSimilarity(options);
      }
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeSimilarity is not Implemented');
    }
  }, {
    key: "fetchSqlAnalyzerMeta",
    value: function fetchSqlAnalyzerMeta(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.fetchSqlAnalyzerMeta(options);
      }
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchSqlAnalyzerMeta is not Implemented');
    }
  }, {
    key: "fetchPopularity",
    value: function fetchPopularity(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.fetchPopularity(options);
      }
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchPopularity is not Implemented');
    }
  }, {
    key: "fetchTopAggs",
    value: function fetchTopAggs(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.fetchTopAggs(options);
      }
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopAggs is not Implemented');
    }
  }, {
    key: "fetchTopColumns",
    value: function fetchTopColumns(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.fetchTopColumns(options);
      }
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopColumns is not Implemented');
    }
  }, {
    key: "fetchTopFilters",
    value: function fetchTopFilters(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.fetchTopFilters(options);
      }
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopFilters is not Implemented');
    }
  }, {
    key: "predict",
    value: function predict(options) {
      return this.apiAnalyzer.predict(options);
    }
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/analyzer/NoopSqlAnalyzer.ts":
/*!*************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/analyzer/NoopSqlAnalyzer.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoopSqlAnalyzer)
/* harmony export */ });
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
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


var NoopSqlAnalyzer = /*#__PURE__*/function () {
  function NoopSqlAnalyzer() {
    _classCallCheck(this, NoopSqlAnalyzer);
  }
  return _createClass(NoopSqlAnalyzer, [{
    key: "analyzeCompatibility",
    value:
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function analyzeCompatibility(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeCompatibility is not Implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }, {
    key: "analyzeRisk",
    value: function analyzeRisk(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeRisk is not Implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }, {
    key: "analyzeSimilarity",
    value: function analyzeSimilarity(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeSimilarity is not Implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }, {
    key: "fetchSqlAnalyzerMeta",
    value: function fetchSqlAnalyzerMeta(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchSqlAnalyzerMeta is not Implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }, {
    key: "fetchPopularity",
    value: function fetchPopularity(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeCompatibility is not Implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }, {
    key: "fetchTopAggs",
    value: function fetchTopAggs(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopAggs is not Implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }, {
    key: "fetchTopColumns",
    value: function fetchTopColumns(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopColumns is not Implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }, {
    key: "fetchTopFilters",
    value: function fetchTopFilters(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopFilters is not Implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }, {
    key: "fetchTopJoins",
    value: function fetchTopJoins(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopJoins is not Implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }, {
    key: "predict",
    value: function predict(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('predict is not Implemented');
    }
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/analyzer/sqlAnalyzerRepository.ts":
/*!*******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/analyzer/sqlAnalyzerRepository.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CombinedSqlAnalyser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CombinedSqlAnalyser */ "./desktop/core/src/desktop/js/catalog/analyzer/CombinedSqlAnalyser.ts");
/* harmony import */ var _NoopSqlAnalyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoopSqlAnalyzer */ "./desktop/core/src/desktop/js/catalog/analyzer/NoopSqlAnalyzer.ts");
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



var sqlAnalyzerInstances = {};
var createSqlAnalyzer = function createSqlAnalyzer(connector) {
  if (connector.optimizer === 'api') {
    return new _CombinedSqlAnalyser__WEBPACK_IMPORTED_MODULE_0__["default"](connector);
  }
  return new _NoopSqlAnalyzer__WEBPACK_IMPORTED_MODULE_1__["default"]();
};
var sqlAnalyzerRepository = {
  getSqlAnalyzer: function getSqlAnalyzer(connector) {
    var sqlAnalyzer = sqlAnalyzerInstances[connector.id];
    if (!sqlAnalyzer) {
      sqlAnalyzer = createSqlAnalyzer(connector);
      sqlAnalyzerInstances[connector.id] = sqlAnalyzer;
    }
    return sqlAnalyzer;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sqlAnalyzerRepository);

/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/analyzer/types.ts":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/analyzer/types.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlAnalyzerMode": () => (/* binding */ SqlAnalyzerMode)
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

var SqlAnalyzerMode = /*#__PURE__*/function (SqlAnalyzerMode) {
  SqlAnalyzerMode["local"] = "local";
  SqlAnalyzerMode["api"] = "api";
  SqlAnalyzerMode["off"] = "off";
  return SqlAnalyzerMode;
}({});

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-a799d440-bundle-a2a4f8506cb55bb7.js.map