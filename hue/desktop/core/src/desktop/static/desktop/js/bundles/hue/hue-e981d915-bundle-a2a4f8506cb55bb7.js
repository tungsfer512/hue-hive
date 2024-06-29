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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-e981d915"],{

/***/ "./desktop/core/src/desktop/js/api/apiHelper.js":
/*!******************************************************!*\
  !*** ./desktop/core/src/desktop/js/api/apiHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LINK_SHARING_PERMS": () => (/* binding */ LINK_SHARING_PERMS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apiUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiUtils */ "./desktop/core/src/desktop/js/api/apiUtils.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urls */ "./desktop/core/src/desktop/js/api/urls.js");
/* harmony import */ var _apiQueueManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiQueueManager */ "./desktop/core/src/desktop/js/api/apiQueueManager.js");
/* harmony import */ var api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! api/cancellableJqPromise */ "./desktop/core/src/desktop/js/api/cancellableJqPromise.ts");
/* harmony import */ var utils_hueDebug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/hueDebug */ "./desktop/core/src/desktop/js/utils/hueDebug.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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










var LINK_SHARING_PERMS = {
  READ: 'read',
  WRITE: 'write',
  OFF: 'off'
};
var ApiHelper = /*#__PURE__*/function () {
  function ApiHelper() {
    var _this = this;
    _classCallCheck(this, ApiHelper);
    this.queueManager = _apiQueueManager__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.cancelActiveRequest = _apiUtils__WEBPACK_IMPORTED_MODULE_2__.cancelActiveRequest; // TODO: Remove when job_browser.mako is in webpack

    utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.clear.git.cache', function () {
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'git'
      }), {});
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.clear.collections.cache', function () {
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'collections'
      }), {});
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.clear.hbase.cache', function () {
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'hbase'
      }), {});
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.clear.document.cache', function () {
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'document'
      }), {});
    });
    var clearAllCaches = function clearAllCaches() {
      _this.clearDbCache({
        sourceType: 'hive',
        clearAll: true
      });
      _this.clearDbCache({
        sourceType: 'impala',
        clearAll: true
      });
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'hdfs'
      }), {});
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'adls'
      }), {});
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'abfs'
      }), {});
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'ofs'
      }), {});
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'git'
      }), {});
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 's3'
      }), {});
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'gs'
      }), {});
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'collections'
      }), {});
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'hbase'
      }), {});
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(_this.getAssistCacheIdentifier({
        sourceType: 'document'
      }), {});
    };
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.clear.all.caches', clearAllCaches);
    if (window.performance && window.performance.navigation) {
      if (window.performance.navigation.type === 1 && location.href.indexOf('/metastore') !== -1) {
        // Browser refresh of the metastore page
        clearAllCaches();
      }
    }
  }
  return _createClass(ApiHelper, [{
    key: "clearStorageCache",
    value: function clearStorageCache(sourceType) {
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(this.getAssistCacheIdentifier({
        sourceType: sourceType
      }), {});
    }
  }, {
    key: "hasExpired",
    value: function hasExpired(timestamp, cacheType) {
      if (typeof utils_hueDebug__WEBPACK_IMPORTED_MODULE_6__["default"] !== 'undefined' && typeof utils_hueDebug__WEBPACK_IMPORTED_MODULE_6__["default"].cacheTimeout !== 'undefined') {
        return new Date().getTime() - timestamp > utils_hueDebug__WEBPACK_IMPORTED_MODULE_6__["default"].cacheTimeout;
      }
      return new Date().getTime() - timestamp > CACHEABLE_TTL[cacheType];
    }

    /**
     *
     * @param {Object} options
     * @param {string} options.sourceType
     * @param {string} options.url
     * @param {boolean} options.refreshCache
     * @param {string} [options.hash] - Optional hash to use as well as the url
     * @param {Function} options.fetchFunction
     * @param {Function} options.successCallback
     * @param {string} [options.cacheType] - Possible values 'default'|'sqlAnalyzer'. Default value 'default'
     * @param {Object} [options.editor] - Ace editor
     * @param {Object} [options.promise] - Optional promise that will be resolved if cached data exists
     */
  }, {
    key: "fetchCached",
    value: function fetchCached(options) {
      var cacheIdentifier = this.getAssistCacheIdentifier(options);
      var cachedData = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)(cacheIdentifier) || {};
      var cachedId = options.hash ? options.url + options.hash : options.url;
      if (options.refreshCache || typeof cachedData[cachedId] == 'undefined' || this.hasExpired(cachedData[cachedId].timestamp, options.cacheType || 'default')) {
        if (typeof options.editor !== 'undefined' && options.editor !== null) {
          options.editor.showSpinner();
        }
        return options.fetchFunction(function (data) {
          cachedData[cachedId] = {
            timestamp: new Date().getTime(),
            data: data
          };
          try {
            (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(cacheIdentifier, cachedData);
          } catch (e) {}
        });
      } else {
        if (options.promise) {
          options.promise.resolve(cachedData[cachedId].data);
        }
        options.successCallback(cachedData[cachedId].data);
      }
    }

    /**
     * @param {object} options
     * @param {string} options.sourceType
     * @param {string} [options.cacheType] - Default value 'default'
     * @returns {string}
     */
  }, {
    key: "getAssistCacheIdentifier",
    value: function getAssistCacheIdentifier(options) {
      return 'hue.assist.' + (options.cacheType || 'default') + '.' + options.sourceType;
    }

    /**
     * @param {Object} data
     * @param {Object} options
     * @param {function} [options.successCallback]
     */
  }, {
    key: "saveSnippetToFile",
    value: function saveSnippetToFile(data, options) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post(_urls__WEBPACK_IMPORTED_MODULE_3__.SAVE_TO_FILE_API, data, function (result) {
        if (typeof options.successCallback !== 'undefined') {
          options.successCallback(result);
        }
      }, 'json').fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options));
    }
  }, {
    key: "fetchUsersAndGroups",
    value: function fetchUsersAndGroups(options) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        method: 'GET',
        url: '/desktop/api/users/autocomplete',
        data: options.data || {},
        contentType: 'application/json'
      }).done(function (response) {
        options.successCallback(response);
      }).fail(function (response) {
        options.errorCallback(response);
      });
    }
  }, {
    key: "fetchUsersByIds",
    value: function fetchUsersByIds(options) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        method: 'GET',
        url: '/desktop/api/users',
        data: {
          userids: options.userids
        },
        contentType: 'application/json'
      }).done(function (response) {
        options.successCallback(response);
      }).fail(function (response) {
        options.errorCallback(response);
      });
    }

    /**
     *
     * @param {Object} options
     * @param {string} options.location
     * @param {boolean} [options.silenceErrors]
     */
  }, {
    key: "fetchTopo",
    value: function fetchTopo(options) {
      var url = _urls__WEBPACK_IMPORTED_MODULE_3__.TOPO_URL + options.location;
      return (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simpleGet)(url, undefined, options);
    }

    /**
     *
     * @param {Object} options
     * @param {string[]} options.path
     * @param {string} options.type - 's3', 'gs', 'adls', 'abfs', 'ofs' or 'hdfs'
     * @param {number} [options.offset]
     * @param {number} [options.length]
     * @param {boolean} [options.silenceErrors]
     */
  }, {
    key: "fetchStoragePreview",
    value: function fetchStoragePreview(options) {
      var url;
      if (options.type === 's3') {
        url = _urls__WEBPACK_IMPORTED_MODULE_3__.S3_API_PREFIX;
      } else if (options.type === 'gs') {
        url = _urls__WEBPACK_IMPORTED_MODULE_3__.GS_API_PREFIX;
      } else if (options.type === 'adls') {
        url = _urls__WEBPACK_IMPORTED_MODULE_3__.ADLS_API_PREFIX;
      } else if (options.type === 'abfs') {
        url = _urls__WEBPACK_IMPORTED_MODULE_3__.ABFS_API_PREFIX;
      } else if (options.type === 'ofs') {
        url = _urls__WEBPACK_IMPORTED_MODULE_3__.OFS_API_PREFIX;
      } else {
        url = _urls__WEBPACK_IMPORTED_MODULE_3__.HDFS_API_PREFIX;
      }
      var clonedPath = options.path.concat();
      if (clonedPath.length && clonedPath[0] === '/') {
        clonedPath.shift();
      }
      url += clonedPath.join('/').replace(/#/g, '%23') + '?compression=none&mode=text';
      url += '&offset=' + (options.offset || 0);
      url += '&length=' + (options.length || 118784);
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        dataType: 'json',
        url: url,
        success: function success(data) {
          if ((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data)) {
            deferred.reject((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data));
          } else {
            deferred.resolve(data);
          }
        },
        fail: deferred.reject
      });
      return deferred.promise();
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     * @param {Number} [options.timeout]
     * @param {Object} [options.editor] - Ace editor
     *
     * @param {string[]} options.pathParts
     * @param {number} [options.pageSize] - Default 500
     * @param {number} [options.page] - Default 1
     * @param {string} [options.filter]
     */
  }, {
    key: "fetchHdfsPath",
    value: function fetchHdfsPath(options) {
      if (options.pathParts.length > 0 && (options.pathParts[0] === '/' || options.pathParts[0] === '')) {
        options.pathParts.shift();
      }
      var url = _urls__WEBPACK_IMPORTED_MODULE_3__.HDFS_API_PREFIX + encodeURI(options.pathParts.join('/')) + '?format=json&sortby=name&descending=false&pagesize=' + (options.pageSize || 500) + '&pagenum=' + (options.page || 1);
      if (options.filter) {
        url += '&filter=' + options.filter;
      }
      var fetchFunction = function fetchFunction(storeInCache) {
        if (options.timeout === 0) {
          (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)({
            status: -1
          });
          return;
        }
        return jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          dataType: 'json',
          url: url,
          timeout: options.timeout,
          success: function success(data) {
            if (!data.error && !(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data) && typeof data.files !== 'undefined' && data.files !== null) {
              if (data.files.length > 2 && !options.filter) {
                storeInCache(data);
              }
              options.successCallback(data);
            } else {
              (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
            }
          }
        }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)).always(function () {
          if (typeof options.editor !== 'undefined' && options.editor !== null) {
            options.editor.hideSpinner();
          }
        });
      };
      return this.fetchCached(jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, options, {
        sourceType: 'hdfs',
        url: url,
        fetchFunction: fetchFunction
      }));
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     * @param {Number} [options.timeout]
     * @param {Object} [options.editor] - Ace editor
     *
     * @param {string[]} options.pathParts
     * @param {number} [options.pageSize] - Default 500
     * @param {number} [options.page] - Default 1
     * @param {string} [options.filter]
     */
  }, {
    key: "fetchAdlsPath",
    value: function fetchAdlsPath(options) {
      options.pathParts.shift();
      var url = _urls__WEBPACK_IMPORTED_MODULE_3__.ADLS_API_PREFIX + encodeURI(options.pathParts.join('/')) + '?format=json&sortby=name&descending=false&pagesize=' + (options.pageSize || 500) + '&pagenum=' + (options.page || 1);
      if (options.filter) {
        url += '&filter=' + options.filter;
      }
      var fetchFunction = function fetchFunction(storeInCache) {
        if (options.timeout === 0) {
          (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)({
            status: -1
          });
          return;
        }
        return jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          dataType: 'json',
          url: url,
          timeout: options.timeout,
          success: function success(data) {
            if (!data.error && !(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data) && typeof data.files !== 'undefined' && data.files !== null) {
              if (data.files.length > 2 && !options.filter) {
                storeInCache(data);
              }
              options.successCallback(data);
            } else {
              (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
            }
          }
        }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)).always(function () {
          if (typeof options.editor !== 'undefined' && options.editor !== null) {
            options.editor.hideSpinner();
          }
        });
      };
      return this.fetchCached(jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, options, {
        sourceType: 'adls',
        url: url,
        fetchFunction: fetchFunction
      }));
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     * @param {Number} [options.timeout]
     * @param {Object} [options.editor] - Ace editor
     *
     * @param {string[]} options.pathParts
     * @param {number} [options.pageSize] - Default 500
     * @param {number} [options.page] - Default 1
     * @param {string} [options.filter]
     */
  }, {
    key: "fetchAbfsPath",
    value: function fetchAbfsPath(options) {
      var url = _urls__WEBPACK_IMPORTED_MODULE_3__.ABFS_API_PREFIX + encodeURI(options.pathParts.join('/')) + '?format=json&sortby=name&descending=false&pagesize=' + (options.pageSize || 500) + '&pagenum=' + (options.page || 1);
      if (options.filter) {
        url += '&filter=' + options.filter;
      }
      var fetchFunction = function fetchFunction(storeInCache) {
        if (options.timeout === 0) {
          (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)({
            status: -1
          });
          return;
        }
        return jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          dataType: 'json',
          url: url,
          timeout: options.timeout,
          success: function success(data) {
            if (!data.error && !(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data) && typeof data.files !== 'undefined' && data.files !== null) {
              if (data.files.length > 2 && !options.filter) {
                storeInCache(data);
              }
              options.successCallback(data);
            } else {
              (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
            }
          }
        }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)).always(function () {
          if (typeof options.editor !== 'undefined' && options.editor !== null) {
            options.editor.hideSpinner();
          }
        });
      };
      return this.fetchCached(jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, options, {
        sourceType: 'abfs',
        url: url,
        fetchFunction: fetchFunction
      }));
    }
    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     * @param {Number} [options.timeout]
     * @param {Object} [options.editor] - Ace editor
     *
     * @param {string[]} options.pathParts
     * @param {number} [options.pageSize] - Default 500
     * @param {number} [options.page] - Default 1
     * @param {string} [options.filter]
     */
  }, {
    key: "fetchOfsPath",
    value: function fetchOfsPath(options) {
      var url = _urls__WEBPACK_IMPORTED_MODULE_3__.OFS_API_PREFIX + options.pathParts.join('/') + '?format=json&sortby=name&descending=false&pagesize=' + (options.pageSize || 500) + '&pagenum=' + (options.page || 1);
      if (options.filter) {
        url += '&filter=' + options.filter;
      }
      var fetchFunction = function fetchFunction(storeInCache) {
        if (options.timeout === 0) {
          (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)({
            status: -1
          });
          return;
        }
        return jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          dataType: 'json',
          url: url,
          timeout: options.timeout,
          success: function success(data) {
            if (!data.error && !(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data) && typeof data.files !== 'undefined' && data.files !== null) {
              if (data.files.length > 2 && !options.filter) {
                storeInCache(data);
              }
              options.successCallback(data);
            } else {
              (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
            }
          }
        }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)).always(function () {
          if (typeof options.editor !== 'undefined' && options.editor !== null) {
            options.editor.hideSpinner();
          }
        });
      };
      return this.fetchCached(jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, options, {
        sourceType: 'ofs',
        url: url,
        fetchFunction: fetchFunction
      }));
    }
    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     * @param {Number} [options.timeout]
     *
     * @param {string[]} options.pathParts
     * @param {string} options.fileType
     */
  }, {
    key: "fetchGitContents",
    value: function fetchGitContents(options) {
      var url = _urls__WEBPACK_IMPORTED_MODULE_3__.GIT_API_PREFIX + '?path=' + encodeURI(options.pathParts.join('/')) + '&fileType=' + options.fileType;
      var fetchFunction = function fetchFunction(storeInCache) {
        if (options.timeout === 0) {
          (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)({
            status: -1
          });
          return;
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          dataType: 'json',
          url: url,
          timeout: options.timeout,
          success: function success(data) {
            if (!data.error && !(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data)) {
              if (data.fileType === 'dir' && typeof data.files !== 'undefined' && data.files !== null) {
                if (data.files.length > 2) {
                  storeInCache(data);
                }
                options.successCallback(data);
              } else if (data.fileType === 'file' && typeof data.content !== 'undefined' && data.content !== null) {
                options.successCallback(data);
              }
            } else {
              (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
            }
          }
        }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options));
      };
      this.fetchCached(jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, options, {
        sourceType: 'git',
        url: url,
        fetchFunction: fetchFunction
      }));
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     * @param {Number} [options.timeout]
     * @param {Object} [options.editor] - Ace editor
     *
     * @param {string[]} options.pathParts
     * @param {number} [options.pageSize] - Default 500
     * @param {number} [options.page] - Default 1
     * @param {string} [options.filter]
     */
  }, {
    key: "fetchS3Path",
    value: function fetchS3Path(options) {
      options.pathParts.shift(); // remove the trailing /
      var url = _urls__WEBPACK_IMPORTED_MODULE_3__.S3_API_PREFIX + encodeURI(options.pathParts.join('/')) + '?format=json&sortby=name&descending=false&pagesize=' + (options.pageSize || 500) + '&pagenum=' + (options.page || 1);
      if (options.filter) {
        url += '&filter=' + options.filter;
      }
      var fetchFunction = function fetchFunction(storeInCache) {
        if (options.timeout === 0) {
          (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)({
            status: -1
          });
          return;
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          dataType: 'json',
          url: url,
          timeout: options.timeout,
          success: function success(data) {
            if (!data.error && !(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data) && typeof data.files !== 'undefined' && data.files !== null) {
              if (data.files.length > 2 && !options.filter) {
                storeInCache(data);
              }
              options.successCallback(data);
            } else {
              (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
            }
          }
        }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)).always(function () {
          if (typeof options.editor !== 'undefined' && options.editor !== null) {
            options.editor.hideSpinner();
          }
        });
      };
      this.fetchCached(jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, options, {
        sourceType: 's3',
        url: url,
        fetchFunction: fetchFunction
      }));
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     * @param {Number} [options.timeout]
     * @param {Object} [options.editor] - Ace editor
     *
     * @param {string[]} options.pathParts
     * @param {number} [options.pageSize] - Default 500
     * @param {number} [options.page] - Default 1
     * @param {string} [options.filter]
     */
  }, {
    key: "fetchGSPath",
    value: function fetchGSPath(options) {
      options.pathParts.shift(); // remove the trailing /
      var url = _urls__WEBPACK_IMPORTED_MODULE_3__.GS_API_PREFIX + encodeURI(options.pathParts.join('/')) + '?format=json&sortby=name&descending=false&pagesize=' + (options.pageSize || 500) + '&pagenum=' + (options.page || 1);
      if (options.filter) {
        url += '&filter=' + options.filter;
      }
      var fetchFunction = function fetchFunction(storeInCache) {
        if (options.timeout === 0) {
          (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)({
            status: -1
          });
          return;
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          dataType: 'json',
          url: url,
          timeout: options.timeout,
          success: function success(data) {
            if (!data.error && !(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data) && typeof data.files !== 'undefined' && data.files !== null) {
              if (data.files.length > 2 && !options.filter) {
                storeInCache(data);
              }
              options.successCallback(data);
            } else {
              (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
            }
          }
        }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)).always(function () {
          if (typeof options.editor !== 'undefined' && options.editor !== null) {
            options.editor.hideSpinner();
          }
        });
      };
      this.fetchCached(jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, options, {
        sourceType: 'gs',
        url: url,
        fetchFunction: fetchFunction
      }));
    }
  }, {
    key: "fetchFavoriteApp",
    value: function () {
      var _fetchFavoriteApp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(options) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simpleGet)('/desktop/api2/user_preferences/default_app').done(resolve).fail(reject);
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function fetchFavoriteApp(_x) {
        return _fetchFavoriteApp.apply(this, arguments);
      }
      return fetchFavoriteApp;
    }()
  }, {
    key: "setFavoriteAppAsync",
    value: function () {
      var _setFavoriteAppAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(options) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)('/desktop/api2/user_preferences/default_app', options).done(resolve).fail(reject);
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function setFavoriteAppAsync(_x2) {
        return _setFavoriteAppAsync.apply(this, arguments);
      }
      return setFavoriteAppAsync;
    }()
    /**
     * @param {Object} options
     * @param {String} options.collectionName
     * @param {String} options.fieldName
     * @param {String} options.prefix
     * @param {String} [options.engine]
     * @param {Function} options.successCallback
     * @param {Function} [options.alwaysCallback]
     * @param {Number} [options.timeout]
     *
     */
  }, {
    key: "fetchDashboardTerms",
    value: function fetchDashboardTerms(options) {
      if (options.timeout === 0) {
        (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)({
          status: -1
        });
        return;
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        dataType: 'json',
        url: _urls__WEBPACK_IMPORTED_MODULE_3__.DASHBOARD_TERMS_API,
        type: 'POST',
        data: {
          collection: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON({
            id: '',
            name: options.collectionName,
            engine: options.engine || 'solr'
          }),
          analysis: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON({
            name: options.fieldName,
            terms: {
              prefix: options.prefix || ''
            }
          })
        },
        timeout: options.timeout,
        success: function success(data) {
          if (!data.error && !(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data) && data.status === 0) {
            options.successCallback(data);
          } else {
            (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
          }
        }
      }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)).always(options.alwaysCallback);
    }

    /**
     * @param {Object} options
     * @param {String} options.collectionName
     * @param {String} options.fieldName
     * @param {String} [options.engine]
     * @param {Function} options.successCallback
     * @param {Function} [options.alwaysCallback]
     * @param {Number} [options.timeout]
     *
     */
  }, {
    key: "fetchDashboardStats",
    value: function fetchDashboardStats(options) {
      if (options.timeout === 0) {
        (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)({
          status: -1
        });
        return;
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        dataType: 'json',
        url: _urls__WEBPACK_IMPORTED_MODULE_3__.DASHBOARD_STATS_API,
        type: 'POST',
        data: {
          collection: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON({
            id: '',
            name: options.collectionName,
            engine: options.engine || 'solr'
          }),
          analysis: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON({
            name: options.fieldName,
            stats: {
              facet: ''
            }
          }),
          query: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON({
            qs: [{
              q: ''
            }],
            fqs: []
          })
        },
        timeout: options.timeout,
        success: function success(data) {
          if (!data.error && !(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data) && data.status === 0) {
            options.successCallback(data);
          } else if (data.status === 1) {
            options.notSupportedCallback(data);
          } else {
            (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
          }
        }
      }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)).always(options.alwaysCallback);
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     * @param {Number} [options.timeout]
     * @param {Object} [options.editor] - Ace editor
     */
  }, {
    key: "fetchHBase",
    value: function fetchHBase(options) {
      var suffix = 'getClusters';
      if (options.parent.name !== '') {
        suffix = 'getTableList/' + options.parent.name;
      }
      var url = _urls__WEBPACK_IMPORTED_MODULE_3__.HBASE_API_PREFIX + suffix;
      var fetchFunction = function fetchFunction(storeInCache) {
        if (options.timeout === 0) {
          (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)({
            status: -1
          });
          return;
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          dataType: 'json',
          url: url,
          timeout: options.timeout,
          success: function success(data) {
            if (!data.error && !(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data)) {
              storeInCache(data);
              options.successCallback(data);
            } else {
              (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
            }
          }
        }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)).always(function () {
          if (typeof options.editor !== 'undefined' && options.editor !== null) {
            options.editor.hideSpinner();
          }
        });
      };
      this.fetchCached(jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, options, {
        sourceType: 'hbase',
        url: url,
        fetchFunction: fetchFunction
      }));
    }

    /**
     * @param {Object} options
     * @param {Number} options.pastMs
     * @param {Number} options.stepMs
     *
     * @return {Promise}
     */
  }, {
    key: "fetchResourceStats",
    value: function fetchResourceStats(options) {
      var _arguments = arguments;
      var queryMetric = function queryMetric(metricName) {
        var now = Date.now();
        return (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)('/metadata/api/prometheus/query', {
          query: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(metricName),
          start: Math.floor((now - options.pastMs) / 1000),
          end: Math.floor(now / 1000),
          step: options.stepMs / 1000
        });
      };
      var combinedDeferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().when(queryMetric('round((go_memstats_alloc_bytes / go_memstats_sys_bytes) * 100)'),
      // CPU percentage
      queryMetric('round((go_memstats_alloc_bytes / go_memstats_sys_bytes) * 100)'),
      // Memory percentage
      queryMetric('round((go_memstats_alloc_bytes / go_memstats_sys_bytes) * 100)'),
      // IO percentage
      queryMetric('impala_queries_count{datawarehouse="' + options.clusterName + '"}'),
      // Sum of all queries in flight (currently total query executed for testing purpose)
      queryMetric('impala_queries{datawarehouse="' + options.clusterName + '"}') // Queued queries
      ).done(function () {
        var timestampIndex = {};
        for (var j = 0; j < _arguments.length; j++) {
          var response = _arguments[j];
          if (response.data.result[0]) {
            var values = response.data.result[0].values;
            for (var i = 0; i < values.length; i++) {
              if (!timestampIndex[values[i][0]]) {
                timestampIndex[values[i][0]] = [values[i][0] * 1000, 0, 0, 0, 0, 0]; // Adjust back to milliseconds
              }
              timestampIndex[values[i][0]][j + 1] = parseFloat(values[i][1]);
            }
          }
        }
        var result = [];
        Object.keys(timestampIndex).forEach(function (key) {
          result.push(timestampIndex[key]);
        });
        result.sort(function (a, b) {
          return a[0] - b[0];
        });
        combinedDeferred.resolve(result);
      }).fail(combinedDeferred.reject);
      return combinedDeferred.promise();
    }

    /**
     * @param {Object} options
     * @param {Function} [options.successCallback]
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     */
  }, {
    key: "fetchConfigurations",
    value: function fetchConfigurations(options) {
      (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simpleGet)(_urls__WEBPACK_IMPORTED_MODULE_3__.CONFIG_APPS_API, {}, options);
    }
  }, {
    key: "saveGlobalConfiguration",
    value: function saveGlobalConfiguration(options) {
      (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.CONFIG_APPS_API, {
        configuration: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.configuration)
      }, options);
    }

    /**
     * @param {Object} options
     * @param {Function} [options.successCallback]
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     *
     * @param {string} options.app
     * @param {Object} options.properties
     * @param {boolean} [options.isDefault]
     * @param {Number} [options.groupId]
     * @param {Number} [options.userId]
     */
  }, {
    key: "saveConfiguration",
    value: function saveConfiguration(options) {
      (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.CONFIG_SAVE_API, {
        app: options.app,
        properties: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.properties),
        is_default: options.isDefault,
        group_id: options.groupId,
        user_id: options.userId
      }, options);
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     *
     * @param {string} [options.uuid]
     */
  }, {
    key: "fetchDocuments",
    value: function fetchDocuments(options) {
      var id = '';
      if (options.uuid) {
        id += options.uuid;
      }
      if (options.type && options.type !== 'all') {
        id += options.type;
      }
      var promise = this.queueManager.getQueued(_urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_API, id);
      var firstInQueue = typeof promise === 'undefined';
      if (firstInQueue) {
        promise = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
        this.queueManager.addToQueue(promise, _urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_API, id);
      }
      promise.done(options.successCallback).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options));
      if (!firstInQueue) {
        return;
      }
      var data = {
        uuid: options.uuid
      };
      if (options.type && options.type !== 'all') {
        data.type = ['directory', options.type];
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: _urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_API,
        data: data,
        traditional: true,
        success: function success(data) {
          if (!(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data)) {
            promise.resolve(data);
          } else {
            promise.reject(data);
          }
        }
      }).fail(promise.reject);
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     *
     * @param {string} [options.path]
     * @param {string} [options.query]
     * @param {string} [options.type]
     * @param {int} [options.page]
     * @param {int} [options.limit]
     */
  }, {
    key: "searchDocuments",
    value: function searchDocuments(options) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: _urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_SEARCH_API,
        data: {
          uuid: options.uuid,
          text: options.query,
          type: options.type,
          page: options.page,
          limit: options.limit,
          include_trashed: options.include_trashed
        },
        success: function success(data) {
          if (!(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data)) {
            options.successCallback(data);
          } else {
            (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
          }
        }
      }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options));
    }

    /**
     * @param {Object} options
     * @param {number} options.uuid
     * @param {boolean} [options.dependencies]
     * @param {boolean} [options.silenceErrors]
     * @param {boolean} [options.fetchContents]
     *
     * @return {CancellableJqPromise}
     */
  }, {
    key: "fetchDocument",
    value: function fetchDocument(options) {
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      var request = jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: _urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_API,
        data: {
          uuid: options.uuid,
          data: !!options.fetchContents,
          dependencies: options.dependencies
        },
        success: function success(data) {
          if (!(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data)) {
            deferred.resolve(data);
          } else {
            deferred.reject((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)({
              silenceErrors: options.silenceErrors
            }));
          }
        }
      }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)({
        silenceErrors: options.silenceErrors,
        errorCallback: deferred.reject
      }));
      return new api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_5__["default"](deferred, request);
    }

    /**
     * @param {Object} options
     * @param {string} options.uuid
     * @param {boolean} [options.silenceErrors]
     * @param {boolean} [options.dependencies]
     * @param {boolean} [options.fetchContents]
     *
     * @param options
     * @return {Promise<unknown>}
     */
  }, {
    key: "fetchDocumentAsync",
    value: (function () {
      var _fetchDocumentAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(options) {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                _this2.fetchDocument(options).done(resolve).fail(reject);
              }));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function fetchDocumentAsync(_x3) {
        return _fetchDocumentAsync.apply(this, arguments);
      }
      return fetchDocumentAsync;
    }()
    /**
     * @param {Object} options
     * @param {string} options.uuid
     * @param {string} options.perm - See LINK_SHARING_PERMS
     * @param {boolean} [options.silenceErrors]
     *
     * @param options
     * @return {Promise<unknown>}
     */
    )
  }, {
    key: "setLinkSharingPermsAsync",
    value: (function () {
      var _setLinkSharingPermsAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(options) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve, reject) {
                (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)('/desktop/api2/doc/share/link', {
                  uuid: JSON.stringify(options.uuid),
                  perm: JSON.stringify(options.perm)
                }).done(resolve).fail(reject);
              }));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function setLinkSharingPermsAsync(_x4) {
        return _setLinkSharingPermsAsync.apply(this, arguments);
      }
      return setLinkSharingPermsAsync;
    }()
    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     *
     * @param {string} options.parentUuid
     * @param {string} options.name
     */
    )
  }, {
    key: "createDocumentsFolder",
    value: function createDocumentsFolder(options) {
      (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_API + 'mkdir', {
        parent_uuid: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.parentUuid),
        name: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.name)
      }, options);
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     *
     * @param {string} options.uuid
     * @param {string} options.name
     */
  }, {
    key: "updateDocument",
    value: function updateDocument(options) {
      (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_API + 'update', {
        uuid: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.uuid),
        name: options.name
      }, options);
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {Function} [options.progressHandler]
     * @param {boolean} [options.silenceErrors]
     *
     * @param {FormData} options.formData
     */
  }, {
    key: "uploadDocument",
    value: function uploadDocument(options) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: _urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_API + 'import',
        type: 'POST',
        success: function success(data) {
          if (!(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data)) {
            options.successCallback(data);
          } else {
            (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data);
          }
        },
        xhr: function xhr() {
          var myXhr = jquery__WEBPACK_IMPORTED_MODULE_0___default().ajaxSettings.xhr();
          if (myXhr.upload && options.progressHandler) {
            myXhr.upload.addEventListener('progress', options.progressHandler, false);
          }
          return myXhr;
        },
        dataType: 'json',
        data: options.formData,
        cache: false,
        contentType: false,
        processData: false
      }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options));
    }

    /**
     *
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     *
     * @param {number} options.sourceId - The ID of the source document
     * @param {number} options.destinationId - The ID of the target document
     */
  }, {
    key: "moveDocument",
    value: function moveDocument(options) {
      (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_API + 'move', {
        source_doc_uuid: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.sourceId),
        destination_doc_uuid: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.destinationId)
      }, options);
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     *
     * @param {string} options.uuid
     * @param {string} [options.skipTrash] - Default false
     */
  }, {
    key: "deleteDocument",
    value: function deleteDocument(options) {
      (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_API + 'delete', {
        uuid: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.uuid),
        skip_trash: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.skipTrash || false)
      }, options);
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     *
     * @param {string} options.uuid
     */
  }, {
    key: "copyDocument",
    value: function copyDocument(options) {
      (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_API + 'copy', {
        uuid: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.uuid)
      }, options);
    }

    /**
     * @param {Object} options
     * @param {Function} options.successCallback
     * @param {Function} [options.errorCallback]
     * @param {boolean} [options.silenceErrors]
     *
     * @param {string} options.uuid
     */
  }, {
    key: "restoreDocument",
    value: function restoreDocument(options) {
      (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.DOCUMENTS_API + 'restore', {
        uuids: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.uuids)
      }, options);
    }

    /**
     *
     * @param {Object} options
     * @param {string} options.sourceType
     * @param {string} [options.databaseName]
     * @param {string} [options.tableName]
     * @param {string} [options.cacheType] - Possible values 'default', 'sqlAnalyzer'. Default value 'default'
     * @param {string[]} [options.fields]
     * @param {boolean} [options.clearAll]
     */
  }, {
    key: "clearDbCache",
    value: function clearDbCache(options) {
      var cacheIdentifier = this.getAssistCacheIdentifier(options);
      if (options.clearAll) {
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)(cacheIdentifier, {});
      } else {
        var url = _urls__WEBPACK_IMPORTED_MODULE_3__.AUTOCOMPLETE_API_PREFIX;
        if (options.databaseName) {
          url += options.databaseName + '/';
        }
        if (options.tableName) {
          url += options.tableName + '/';
        }
        if (options.fields) {
          url += options.fields.length > 0 ? '/' + options.fields.join('/') : '';
        }
        var cachedData = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)(cacheIdentifier) || {};
        delete cachedData[url];
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)(cacheIdentifier, cachedData);
      }
    }

    /**
     * @param {Object} options
     * @param {string} options.sourceType
     * @param {string} options.invalidate - 'invalidate' or 'invalidateAndFlush'
     * @param {string[]} [options.path]
     * @param {ContextCompute} [options.compute]
     * @param {boolean} [options.silenceErrors]
     */
  }, {
    key: "invalidateSourceMetadata",
    value: function invalidateSourceMetadata(options) {
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      if (options.sourceType === 'impala' && (options.invalidate === 'invalidate' || options.invalidate === 'invalidateAndFlush')) {
        var data = {
          flush_all: options.invalidate === 'invalidateAndFlush',
          cluster: JSON.stringify(options.compute)
        };
        if (options.path && options.path.length > 0) {
          data.database = options.path[0];
        }
        if (options.path && options.path.length > 1) {
          data.table = options.path[1];
        }
        var request = (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.IMPALA_INVALIDATE_API, data, options).done(deferred.resolve).fail(deferred.reject);
        return new api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_5__["default"](deferred, request);
      }
      return deferred.resolve().promise();
    }

    /**
     * Fetches the partitions for the given path
     *
     * @param {Object} options
     * @param {boolean} [options.silenceErrors]
     *
     * @param {string[]} options.path
     * @param {ContextCompute} options.compute
     *
     * @return {CancellableJqPromise}
     */
  }, {
    key: "fetchPartitions",
    value: function fetchPartitions(options) {
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();

      // TODO: No sourceType needed?
      var request = jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/metastore/table/' + options.path.join('/') + '/partitions', {
        format: 'json',
        cluster: JSON.stringify(options.compute)
      }).done(function (response) {
        if (!(0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(response)) {
          if (!response) {
            response = {};
          }
          response.hueTimestamp = Date.now();
          deferred.resolve(response);
        } else {
          (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)({
            silenceErrors: options.silenceErrors,
            errorCallback: deferred.reject
          })(response);
        }
      }).fail(function (response) {
        // Don't report any partitions if it's not partitioned instead of error to prevent unnecessary calls
        if (response && response.responseText && response.responseText.indexOf('is not partitioned') !== -1) {
          deferred.resolve({
            hueTimestamp: Date.now(),
            partition_keys_json: [],
            partition_values_json: []
          });
        } else {
          (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)({
            silenceErrors: options.silenceErrors,
            errorCallback: deferred.reject
          })(response);
        }
      });
      return new api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_5__["default"](deferred, request);
    }
  }, {
    key: "clearNotebookHistory",
    value: function clearNotebookHistory(options) {
      var data = {
        notebook: options.notebookJson,
        doc_type: options.docType,
        is_notification_manager: options.isNotificationManager
      };
      return (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)('/notebook/api/clear_history', data);
    }
  }, {
    key: "closeNotebook",
    value: function closeNotebook(options) {
      var data = {
        notebook: options.notebookJson,
        editorMode: options.editorMode
      };
      return (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)('/notebook/api/notebook/close', data);
    }
  }, {
    key: "checkStatus",
    value: function () {
      var _checkStatus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(options) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve, reject) {
                var data = {
                  notebook: options.notebookJson
                };
                jquery__WEBPACK_IMPORTED_MODULE_0___default().post({
                  url: '/notebook/api/check_status',
                  data: data
                }).done(function (data) {
                  // 0, -3 and other negative values have meaning for this endpoint
                  if (data && typeof data.status !== 'undefined') {
                    resolve(data);
                  } else if ((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data)) {
                    reject((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data));
                  } else {
                    reject();
                  }
                }).fail((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options));
              }));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function checkStatus(_x5) {
        return _checkStatus.apply(this, arguments);
      }
      return checkStatus;
    }()
  }, {
    key: "getExternalStatement",
    value: function getExternalStatement(options) {
      var data = {
        notebook: options.notebookJson,
        snippet: options.snippetJson
      };
      return (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)('/notebook/api/get_external_statement', data);
    }
  }, {
    key: "fetchResultSize",
    value: function fetchResultSize(options) {
      var data = {
        notebook: options.notebookJson,
        snippet: options.snippetJson
      };
      return (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)('/notebook/api/fetch_result_size', data);
    }
  }, {
    key: "getLogs",
    value: function getLogs(options) {
      var data = {
        notebook: options.notebookJson,
        snippet: options.snippetJson,
        from: options.from,
        jobs: options.jobsJson,
        full_log: options.fullLog,
        operationId: options.executable.operationId
      };
      return (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)('/notebook/api/get_logs', data);
    }
  }, {
    key: "saveNotebook",
    value: function () {
      var _saveNotebook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(options) {
        var data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              data = {
                notebook: options.notebookJson,
                editorMode: options.editorMode
              };
              return _context6.abrupt("return", new Promise(function (resolve, reject) {
                (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)('/notebook/api/notebook/save', data).then(resolve)["catch"](reject);
              }));
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function saveNotebook(_x6) {
        return _saveNotebook.apply(this, arguments);
      }
      return saveNotebook;
    }()
  }, {
    key: "getHistory",
    value: function () {
      var _getHistory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(options) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", new Promise(function (resolve, reject) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default().get('/api/v1/editor/get_history', {
                  doc_type: options.type,
                  limit: options.limit || 50,
                  page: options.page || 1,
                  doc_text: options.docFilter,
                  is_notification_manager: options.isNotificationManager
                }).done(function (data) {
                  if ((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.successResponseIsError)(data)) {
                    reject((0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.assistErrorCallback)(options)(data));
                    return;
                  }
                  resolve(data);
                }).fail(reject);
              }));
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function getHistory(_x7) {
        return _getHistory.apply(this, arguments);
      }
      return getHistory;
    }()
    /**
     *
     * @param {Object} options
     * @param {Snippet} options.snippet
     *
     * @return {CancellableJqPromise<string>}
     */
  }, {
    key: "explainAsync",
    value: (function () {
      var _explainAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(options) {
        var data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return options.snippet.parentNotebook.toContextJson();
            case 2:
              _context8.t0 = _context8.sent;
              _context8.t1 = options.snippet.toContextJson();
              data = {
                notebook: _context8.t0,
                snippet: _context8.t1
              };
              return _context8.abrupt("return", new Promise(function (resolve, reject) {
                (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)('/notebook/api/explain', data, options).done(function (response) {
                  resolve(response.explanation);
                }).fail(reject);
              }));
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function explainAsync(_x8) {
        return _explainAsync.apply(this, arguments);
      }
      return explainAsync;
    }()
    /**
     *
     * @param {Object} options
     * @param {statement} options.statement
     * @param {doc_type} options.doc_type
     * @param {name} options.name
     * @param {description} options.description
     *
     * @return {CancellableJqPromise<string>}
     */
    )
  }, {
    key: "createGistAsync",
    value: (function () {
      var _createGistAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(options) {
        var data;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              data = {
                statement: options.statement,
                doc_type: options.doc_type,
                name: options.name,
                description: options.description
              };
              return _context9.abrupt("return", new Promise(function (resolve, reject) {
                (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.GIST_API + 'create', data, options).done(function (response) {
                  resolve(response.link);
                }).fail(reject);
              }));
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function createGistAsync(_x9) {
        return _createGistAsync.apply(this, arguments);
      }
      return createGistAsync;
    }()
    /**
     *
     * @param {Object} options
     * @param {channel} options.channel
     * @param {message} options.message
     *
     * @return {Promise<void>}
     */
    )
  }, {
    key: "sendSlackMessageAsync",
    value: (function () {
      var _sendSlackMessageAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(options) {
        var data;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              data = {
                channel: options.channel,
                message: options.message
              };
              return _context10.abrupt("return", new Promise(function (resolve, reject) {
                (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.SEND_SLACK_MESSAGE, data, options).done(resolve).fail(reject);
              }));
            case 2:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function sendSlackMessageAsync(_x10) {
        return _sendSlackMessageAsync.apply(this, arguments);
      }
      return sendSlackMessageAsync;
    }()
    /**
     *
     * @param {Object} options
     *
     * @return {Promise<Object>}
     */
    )
  }, {
    key: "getSlackChannelsAsync",
    value: (function () {
      var _getSlackChannelsAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(options) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", new Promise(function (resolve, reject) {
                (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simpleGet)(_urls__WEBPACK_IMPORTED_MODULE_3__.GET_SLACK_CHANNELS, {}, options).done(function (response) {
                  resolve(response.channels);
                }).fail(reject);
              }));
            case 1:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function getSlackChannelsAsync(_x11) {
        return _getSlackChannelsAsync.apply(this, arguments);
      }
      return getSlackChannelsAsync;
    }()
    /**
     * @param {Object} options
     * @param {boolean} [options.silenceErrors]
     * @param {ContextCompute} options.compute
     * @param {string} options.queryId
     * @return {CancellableJqPromise}
     */
    )
  }, {
    key: "fetchQueryExecutionAnalysis",
    value: function fetchQueryExecutionAnalysis(options) {
      //var url = '/metadata/api/workload_analytics/get_impala_query/';
      var url = '/impala/api/query/alanize';
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      var tries = 0;
      var cancellablePromises = [];
      var promise = new api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_5__["default"](deferred, undefined, cancellablePromises);
      var pollForAnalysis = function pollForAnalysis() {
        if (tries === 10) {
          deferred.reject();
          return;
        }
        tries++;
        cancellablePromises.pop(); // Remove the last one
        cancellablePromises.push(deferred, (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(url, {
          cluster: JSON.stringify(options.compute),
          query_id: '"' + options.queryId + '"'
        }, options).done(function (response) {
          if (response && response.data) {
            deferred.resolve(response.data);
          } else {
            var timeout = window.setTimeout(function () {
              pollForAnalysis();
            }, 1000 + tries * 500); // TODO: Adjust once fully implemented;
            promise.onCancel(function () {
              window.clearTimeout(timeout);
            });
          }
        }).fail(deferred.reject));
      };
      pollForAnalysis();
      return promise;
    }
  }, {
    key: "fixQueryExecutionAnalysis",
    value: function fixQueryExecutionAnalysis(options) {
      var url = '/impala/api/query/alanize/fix';
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      var request = (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(url, {
        cluster: JSON.stringify(options.compute),
        fix: JSON.stringify(options.fix),
        start_time: options.start_time
      }, {
        silenceErrors: options.silenceErrors,
        successCallback: function successCallback(response) {
          if (response.status === 0) {
            deferred.resolve(response.details);
          } else {
            deferred.reject();
          }
        },
        errorCallback: deferred.reject
      });
      return new api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_5__["default"](deferred, request);
    }
  }, {
    key: "fetchQueryExecutionStatistics",
    value: function fetchQueryExecutionStatistics(options) {
      var url = '/impala/api/query/alanize/metrics';
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      var request = (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(url, {
        cluster: JSON.stringify(options.cluster),
        query_id: '"' + options.queryId + '"'
      }, {
        silenceErrors: options.silenceErrors,
        successCallback: function successCallback(response) {
          if (response.status === 0) {
            deferred.resolve(response.data);
          } else {
            deferred.reject();
          }
        },
        errorCallback: deferred.reject
      });
      return new api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_5__["default"](deferred, request);
    }
  }, {
    key: "fetchHueConfigAsync",
    value: function () {
      var _fetchHueConfigAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(options) {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", new Promise(function (resolve, reject) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default().get(_urls__WEBPACK_IMPORTED_MODULE_3__.GET_HUE_CONFIG_API).done(function (response) {
                  if (!response && response.status === -1) {
                    reject(response.message);
                  } else {
                    resolve(response);
                  }
                }).fail(reject);
              }));
            case 1:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function fetchHueConfigAsync(_x12) {
        return _fetchHueConfigAsync.apply(this, arguments);
      }
      return fetchHueConfigAsync;
    }()
  }, {
    key: "fetchHueDocsInteractive",
    value: function fetchHueDocsInteractive(query) {
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      var request = jquery__WEBPACK_IMPORTED_MODULE_0___default().post(_urls__WEBPACK_IMPORTED_MODULE_3__.INTERACTIVE_SEARCH_API, {
        query_s: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(query),
        limit: 50,
        sources: '["documents"]'
      }).done(function (data) {
        if (data.status === 0) {
          deferred.resolve(data);
        } else {
          deferred.reject(data);
        }
      }).fail(deferred.reject);
      return new api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_5__["default"](deferred, request);
    }
  }, {
    key: "fetchNavEntitiesInteractive",
    value: function fetchNavEntitiesInteractive(options) {
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      var request = jquery__WEBPACK_IMPORTED_MODULE_0___default().post(_urls__WEBPACK_IMPORTED_MODULE_3__.INTERACTIVE_SEARCH_API, {
        query_s: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.query),
        field_facets: knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(options.facets || []),
        limit: 50,
        sources: '["sql", "hdfs", "s3"]'
      }).done(function (data) {
        if (data.status === 0) {
          deferred.resolve(data);
        } else {
          deferred.reject(data);
        }
      }).fail(deferred.reject);
      return new api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_5__["default"](deferred, request);
    }

    /**
     *
     * @param {Object} options
     * @param {string} options.statements
     * @param {boolean} [options.silenceErrors]
     */
  }, {
    key: "formatSql",
    value: function formatSql(options) {
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      var request = (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.FORMAT_SQL_API, {
        statements: options.statements
      }, {
        silenceErrors: options.silenceErrors,
        successCallback: deferred.resolve,
        errorCallback: deferred.reject
      });
      return new api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_5__["default"](deferred, request);
    }

    /**
     *
     * @param {Object} options
     * @param {string} options.statement
     * @param {string} options.doc_type
     * @param {string} options.name
     * @param {string} options.description
     * @param {boolean} [options.silenceErrors]
     */
  }, {
    key: "createGist",
    value: function createGist(options) {
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      var request = (0,_apiUtils__WEBPACK_IMPORTED_MODULE_2__.simplePost)(_urls__WEBPACK_IMPORTED_MODULE_3__.GIST_API + 'create', {
        statement: options.statement,
        doc_type: options.doc_type,
        name: options.name,
        description: options.description
      }, {
        silenceErrors: options.silenceErrors,
        successCallback: deferred.resolve,
        errorCallback: deferred.reject
      });
      return new api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_5__["default"](deferred, request);
    }
  }]);
}();
var apiHelper = new ApiHelper();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiHelper);

/***/ }),

/***/ "./desktop/core/src/desktop/js/api/apiQueueManager.js":
/*!************************************************************!*\
  !*** ./desktop/core/src/desktop/js/api/apiQueueManager.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
var ApiQueueManager = /*#__PURE__*/function () {
  function ApiQueueManager() {
    _classCallCheck(this, ApiQueueManager);
    var self = this;
    self.callQueue = {};
  }
  return _createClass(ApiQueueManager, [{
    key: "getQueued",
    value: function getQueued(url, hash) {
      var self = this;
      return self.callQueue[url + (hash || '')];
    }
  }, {
    key: "addToQueue",
    value: function addToQueue(promise, url, hash) {
      var self = this;
      self.callQueue[url + (hash || '')] = promise;
      promise.always(function () {
        delete self.callQueue[url + (hash || '')];
      });
    }
  }]);
}();
var apiQueueManager = new ApiQueueManager();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiQueueManager);

/***/ }),

/***/ "./desktop/core/src/desktop/js/api/apiUtils.js":
/*!*****************************************************!*\
  !*** ./desktop/core/src/desktop/js/api/apiUtils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assistErrorCallback": () => (/* binding */ assistErrorCallback),
/* harmony export */   "cancelActiveRequest": () => (/* binding */ cancelActiveRequest),
/* harmony export */   "simpleGet": () => (/* binding */ simpleGet),
/* harmony export */   "simplePost": () => (/* binding */ simplePost),
/* harmony export */   "simplePostAsync": () => (/* binding */ simplePostAsync),
/* harmony export */   "successResponseIsError": () => (/* binding */ successResponseIsError)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_logError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/logError */ "./desktop/core/src/desktop/js/utils/logError.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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






/**
 * @param {Object} [response]
 * @param {number} [response.status]
 * @returns {boolean} - True if actually an error
 */
var successResponseIsError = function successResponseIsError(response) {
  return typeof response !== 'undefined' && (typeof response.traceback !== 'undefined' || typeof response.status !== 'undefined' && response.status !== 0 || response.code === 503 || response.code === 500);
};

/**
 * @param {Object} options
 * @param {Function} [options.errorCallback]
 * @param {boolean} [options.silenceErrors]
 * @returns {Function}
 */
var assistErrorCallback = function assistErrorCallback(options) {
  return function (errorResponse) {
    var errorMessage = 'Unknown error occurred';
    if (typeof errorResponse !== 'undefined' && errorResponse !== null) {
      if (typeof errorResponse.statusText !== 'undefined' && errorResponse.statusText === 'abort') {
        return;
      } else if (typeof errorResponse.responseText !== 'undefined') {
        try {
          var errorJs = JSON.parse(errorResponse.responseText);
          if (typeof errorJs.message !== 'undefined') {
            errorMessage = errorJs.message;
          } else {
            errorMessage = errorResponse.responseText;
          }
        } catch (err) {
          errorMessage = errorResponse.responseText;
        }
      } else if (typeof errorResponse.message !== 'undefined' && errorResponse.message !== null) {
        errorMessage = errorResponse.message;
      } else if (typeof errorResponse.statusText !== 'undefined' && errorResponse.statusText !== null) {
        errorMessage = errorResponse.statusText;
      } else if (errorResponse.error !== 'undefined' && Object.prototype.toString.call(errorResponse.error) === '[object String]') {
        errorMessage = errorResponse.error;
      } else if (Object.prototype.toString.call(errorResponse) === '[object String]') {
        errorMessage = errorResponse;
      }
    }
    if (!options || !options.silenceErrors) {
      (0,utils_logError__WEBPACK_IMPORTED_MODULE_2__["default"])(errorResponse);
      if (errorMessage && errorMessage.indexOf('AuthorizationException') === -1) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_ERROR_TOPIC, {
          message: errorMessage
        });
      }
    }
    if (options && options.errorCallback) {
      options.errorCallback(errorMessage);
    }
    return errorMessage;
  };
};

/**
 * @param {string} url
 * @param {Object} [data]
 * @param {Object} [options]
 * @param {function} [options.successCallback]
 * @param {function} [options.errorCallback]
 * @param {boolean} [options.silenceErrors]
 */
var simpleGet = function simpleGet(url, data, options) {
  if (!options) {
    options = {};
  }
  return jquery__WEBPACK_IMPORTED_MODULE_0___default().get(url, data, function (data) {
    if (successResponseIsError(data)) {
      assistErrorCallback(options)(data);
    } else if (typeof options.successCallback !== 'undefined') {
      options.successCallback(data);
    }
  }).fail(assistErrorCallback(options));
};

/**
 * @param {string} url
 * @param {Object} data
 * @param {Object} [options]
 * @param {function} [options.successCallback]
 * @param {function} [options.errorCallback]
 * @param {boolean} [options.silenceErrors]
 * @param {string} [options.dataType] - Default: Intelligent Guess (xml, json, script, text, html)
 *
 * @return {JQueryPromise}
 */
var simplePost = function simplePost(url, data, options) {
  var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
  var request = jquery__WEBPACK_IMPORTED_MODULE_0___default().post({
    url: url,
    data: data,
    dataType: options && options.dataType
  }).done(function (data) {
    if (successResponseIsError(data)) {
      deferred.reject(assistErrorCallback(options)(data));
      return;
    }
    if (options && options.successCallback) {
      options.successCallback(data);
    }
    deferred.resolve(data);
  }).fail(assistErrorCallback(options));
  request.fail(function (data) {
    deferred.reject(assistErrorCallback(options)(data));
  });
  var promise = deferred.promise();
  promise.getReadyState = function () {
    return request.readyState;
  };
  promise.abort = function () {
    request.abort();
  };
  promise.cancel = promise.abort;
  return promise;
};

/**
 * @param {string} url
 * @param {Object} data
 * @param {Object} [options]
 * @param {boolean} [options.silenceErrors]
 * @param {string} [options.dataType] - Default: Intelligent Guess (xml, json, script, text, html)
 *
 * @return {Promise}
 */
var simplePostAsync = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, data, options) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            simplePost(url, data, options).done(resolve).fail(reject);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function simplePostAsync(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var cancelActiveRequest = function cancelActiveRequest(request) {
  if (typeof request !== 'undefined' && request !== null) {
    var readyState = request.getReadyState ? request.getReadyState() : request.readyState;
    if (readyState < 4) {
      request.abort();
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/api/cancellableJqPromise.ts":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/api/cancellableJqPromise.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CancellableJqPromise)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiUtils */ "./desktop/core/src/desktop/js/api/apiUtils.js");
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



var CancellableJqPromise = /*#__PURE__*/function () {
  function CancellableJqPromise(deferred, request, otherCancellables) {
    _classCallCheck(this, CancellableJqPromise);
    this.cancelCallbacks = [];
    this.deferred = void 0;
    this.request = void 0;
    this.otherCancellables = void 0;
    this.cancelled = false;
    this.cancelPrevented = false;
    this.deferred = deferred;
    this.request = request;
    this.otherCancellables = otherCancellables;
  }

  /**
   * A promise might be shared across multiple components in the UI, in some cases cancel is not an option and calling
   * this will prevent that to happen.
   *
   * One example is autocompletion of databases while the assist is loading the database tree, closing the autocomplete
   * results would make the assist loading fail if cancel hasn't been prevented.
   *
   * @returns {CancellableJqPromise}
   */
  return _createClass(CancellableJqPromise, [{
    key: "preventCancel",
    value: function preventCancel() {
      this.cancelPrevented = true;
      return this;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.cancelPrevented || this.cancelled || this.state() !== 'pending') {
        return jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred().resolve().promise();
      }
      this.cancelled = true;
      if (this.request) {
        (0,_apiUtils__WEBPACK_IMPORTED_MODULE_1__.cancelActiveRequest)(this.request);
      }
      if (this.state && this.state() === 'pending' && this.deferred.reject) {
        this.deferred.reject();
      }
      var cancelPromises = [];
      if (this.otherCancellables) {
        this.otherCancellables.forEach(function (cancellable) {
          if (cancellable.cancel) {
            cancelPromises.push(cancellable.cancel());
          }
        });
      }
      while (this.cancelCallbacks.length) {
        var fn = this.cancelCallbacks.pop();
        if (fn) {
          fn();
        }
      }
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().when(cancelPromises);
    }
  }, {
    key: "onCancel",
    value: function onCancel(callback) {
      if (this.cancelled) {
        callback();
      } else {
        this.cancelCallbacks.push(callback);
      }
      return this;
    }
  }, {
    key: "then",
    value: function then(_then) {
      this.deferred.then(_then);
      return this;
    }
  }, {
    key: "done",
    value: function done(_done) {
      this.deferred.done(_done);
      return this;
    }
  }, {
    key: "fail",
    value: function fail(_fail) {
      this.deferred.fail(_fail);
      return this;
    }
  }, {
    key: "always",
    value: function always(_always) {
      this.deferred.always(_always);
      return this;
    }
  }, {
    key: "pipe",
    value: function pipe(_pipe) {
      this.deferred.pipe(_pipe);
      return this;
    }
  }, {
    key: "progress",
    value: function progress(_progress) {
      this.deferred.progress(_progress);
      return this;
    }
  }, {
    key: "state",
    value: function state() {
      return this.deferred.state && this.deferred.state();
    }
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/api/cancellablePromise.ts":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/api/cancellablePromise.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancellablePromise": () => (/* binding */ CancellablePromise)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

var CancellablePromise = /*#__PURE__*/function (_Promise) {
  function CancellablePromise(handlers) {
    var _this;
    _classCallCheck(this, CancellablePromise);
    var onCancel = undefined;
    var completed = false;
    _this = _callSuper(this, CancellablePromise, [function (resolve, reject) {
      return handlers(function (val) {
        completed = true;
        resolve(val);
      }, function (err) {
        completed = true;
        reject(err);
      }, function (cancelHandler) {
        return onCancel = cancelHandler;
      });
    }]);
    _this.onCancel = void 0;
    _this.cancelPrevented = void 0;
    _this.completed = void 0;
    _this.cancelled = void 0;
    _this.onCancel = onCancel;
    _this.completed = function () {
      return completed;
    };
    return _this;
  }
  _inherits(CancellablePromise, _Promise);
  return _createClass(CancellablePromise, [{
    key: "cancel",
    value: function cancel() {
      if (!this.completed() && !this.cancelled && !this.cancelPrevented) {
        if (this.onCancel) {
          this.onCancel();
        }
        this.cancelled = true;
      }
    }
  }, {
    key: "preventCancel",
    value: function preventCancel() {
      this.cancelPrevented = true;
    }
  }], [{
    key: "reject",
    value: function reject(reason) {
      return new CancellablePromise(function (resolve, reject) {
        reject(reason);
      });
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      return new CancellablePromise(function (resolve) {
        resolve(value);
      });
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Promise));

/***/ }),

/***/ "./desktop/core/src/desktop/js/api/urls.js":
/*!*************************************************!*\
  !*** ./desktop/core/src/desktop/js/api/urls.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ABFS_API_PREFIX": () => (/* binding */ ABFS_API_PREFIX),
/* harmony export */   "ADLS_API_PREFIX": () => (/* binding */ ADLS_API_PREFIX),
/* harmony export */   "AUTOCOMPLETE_API_PREFIX": () => (/* binding */ AUTOCOMPLETE_API_PREFIX),
/* harmony export */   "BANNERS_API": () => (/* binding */ BANNERS_API),
/* harmony export */   "CANCEL_STATEMENT_API": () => (/* binding */ CANCEL_STATEMENT_API),
/* harmony export */   "CHECK_STATUS_API": () => (/* binding */ CHECK_STATUS_API),
/* harmony export */   "CLOSE_SESSION_API": () => (/* binding */ CLOSE_SESSION_API),
/* harmony export */   "CLOSE_STATEMENT_API": () => (/* binding */ CLOSE_STATEMENT_API),
/* harmony export */   "CONFIG_APPS_API": () => (/* binding */ CONFIG_APPS_API),
/* harmony export */   "CONFIG_SAVE_API": () => (/* binding */ CONFIG_SAVE_API),
/* harmony export */   "CREATE_SESSION_API": () => (/* binding */ CREATE_SESSION_API),
/* harmony export */   "DASHBOARD_STATS_API": () => (/* binding */ DASHBOARD_STATS_API),
/* harmony export */   "DASHBOARD_TERMS_API": () => (/* binding */ DASHBOARD_TERMS_API),
/* harmony export */   "DOCUMENTS_API": () => (/* binding */ DOCUMENTS_API),
/* harmony export */   "DOCUMENTS_SEARCH_API": () => (/* binding */ DOCUMENTS_SEARCH_API),
/* harmony export */   "EXECUTE_API_PREFIX": () => (/* binding */ EXECUTE_API_PREFIX),
/* harmony export */   "FETCH_CONFIG_API": () => (/* binding */ FETCH_CONFIG_API),
/* harmony export */   "FETCH_RESULT_DATA_API": () => (/* binding */ FETCH_RESULT_DATA_API),
/* harmony export */   "FETCH_RESULT_SIZE_API": () => (/* binding */ FETCH_RESULT_SIZE_API),
/* harmony export */   "FORMAT_SQL_API": () => (/* binding */ FORMAT_SQL_API),
/* harmony export */   "GET_HUE_CONFIG_API": () => (/* binding */ GET_HUE_CONFIG_API),
/* harmony export */   "GET_LOGS_API": () => (/* binding */ GET_LOGS_API),
/* harmony export */   "GET_SLACK_CHANNELS": () => (/* binding */ GET_SLACK_CHANNELS),
/* harmony export */   "GIST_API": () => (/* binding */ GIST_API),
/* harmony export */   "GIT_API_PREFIX": () => (/* binding */ GIT_API_PREFIX),
/* harmony export */   "GS_API_PREFIX": () => (/* binding */ GS_API_PREFIX),
/* harmony export */   "HBASE_API_PREFIX": () => (/* binding */ HBASE_API_PREFIX),
/* harmony export */   "HDFS_API_PREFIX": () => (/* binding */ HDFS_API_PREFIX),
/* harmony export */   "IMPALA_INVALIDATE_API": () => (/* binding */ IMPALA_INVALIDATE_API),
/* harmony export */   "INTERACTIVE_SEARCH_API": () => (/* binding */ INTERACTIVE_SEARCH_API),
/* harmony export */   "NAV_API": () => (/* binding */ NAV_API),
/* harmony export */   "OFS_API_PREFIX": () => (/* binding */ OFS_API_PREFIX),
/* harmony export */   "S3_API_PREFIX": () => (/* binding */ S3_API_PREFIX),
/* harmony export */   "SAMPLE_API_PREFIX": () => (/* binding */ SAMPLE_API_PREFIX),
/* harmony export */   "SAVE_TO_FILE_API": () => (/* binding */ SAVE_TO_FILE_API),
/* harmony export */   "SEARCH_API": () => (/* binding */ SEARCH_API),
/* harmony export */   "SEND_SLACK_MESSAGE": () => (/* binding */ SEND_SLACK_MESSAGE),
/* harmony export */   "SOLR_COLLECTIONS_API": () => (/* binding */ SOLR_COLLECTIONS_API),
/* harmony export */   "SOLR_FIELDS_API": () => (/* binding */ SOLR_FIELDS_API),
/* harmony export */   "TOPO_URL": () => (/* binding */ TOPO_URL)
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

var AUTOCOMPLETE_API_PREFIX = '/api/v1/editor/autocomplete/';
var BANNERS_API = '/api/v1/banners/';
var SAMPLE_API_PREFIX = '/notebook/api/sample/';
var EXECUTE_API_PREFIX = '/api/v1/editor/execute/'; // Dups with api.ts
var DOCUMENTS_API = '/desktop/api2/doc/';
var DOCUMENTS_SEARCH_API = '/desktop/api2/docs/';
var GET_HUE_CONFIG_API = '/desktop/api2/get_hue_config';
var FETCH_CONFIG_API = '/api/v1/get_config/';
var HDFS_API_PREFIX = '/filebrowser/view=' + encodeURIComponent('/');
var OFS_API_PREFIX = '/filebrowser/view=' + encodeURIComponent('ofs://');
var ADLS_API_PREFIX = '/filebrowser/view=' + encodeURIComponent('adl:/');
var ABFS_API_PREFIX = '/filebrowser/view=' + encodeURIComponent('ABFS://');
var GIT_API_PREFIX = '/desktop/api/vcs/contents/';
var S3_API_PREFIX = '/filebrowser/view=' + encodeURIComponent('s3a://');
var GS_API_PREFIX = '/filebrowser/view=' + encodeURIComponent('gs://');
var IMPALA_INVALIDATE_API = '/impala/api/invalidate';
var CONFIG_SAVE_API = '/desktop/api/configurations/save/';
var CONFIG_APPS_API = '/desktop/api/configurations';
var SOLR_COLLECTIONS_API = '/indexer/api/indexes/list/';
var SOLR_FIELDS_API = '/indexer/api/index/list/';
var DASHBOARD_TERMS_API = '/dashboard/get_terms';
var DASHBOARD_STATS_API = '/dashboard/get_stats';
var FORMAT_SQL_API = '/notebook/api/format';
var GIST_API = '/desktop/api2/gist/';
var GET_SLACK_CHANNELS = '/desktop/slack/api/channels/get';
var SEND_SLACK_MESSAGE = '/desktop/slack/api/message/send';
var TOPO_URL = '/desktop/topo/';
var SEARCH_API = '/desktop/api/search/entities';
var INTERACTIVE_SEARCH_API = '/api/v1/metadata/search/entities_interactive';
var CREATE_SESSION_API = '/api/v1/editor/create_session'; // Note: dup by api.ts
var CLOSE_SESSION_API = '/api/v1/editor/close_session'; // Note: dup by api.ts
var FETCH_RESULT_SIZE_API = '/notebook/api/fetch_result_size';
var FETCH_RESULT_DATA_API = '/notebook/api/fetch_result_data';
var GET_LOGS_API = '/api/v1/editor/get_logs';
var CANCEL_STATEMENT_API = '/notebook/api/cancel_statement';
var CLOSE_STATEMENT_API = '/notebook/api/close_statement';
var CHECK_STATUS_API = '/api/v1/editor/check_status';
var HBASE_API_PREFIX = '/hbase/api/';
var SAVE_TO_FILE_API = '/filebrowser/save';
var NAV_API = {
  ADD_TAGS: '/metadata/api/catalog/add_tags',
  DELETE_TAGS: '/metadata/api/catalog/delete_tags',
  FIND_ENTITY: '/metadata/api/catalog/find_entity',
  LIST_TAGS: '/metadata/api/catalog/list_tags',
  UPDATE_PROPERTIES: '/metadata/api/catalog/update_properties'
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/api/utils.ts":
/*!**************************************************!*\
  !*** ./desktop/core/src/desktop/js/api/utils.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractErrorMessage": () => (/* binding */ extractErrorMessage),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getAxiosInstance": () => (/* binding */ getAxiosInstance),
/* harmony export */   "post": () => (/* binding */ post),
/* harmony export */   "setBaseUrl": () => (/* binding */ setBaseUrl),
/* harmony export */   "setBearerToken": () => (/* binding */ setBearerToken),
/* harmony export */   "successResponseIsError": () => (/* binding */ successResponseIsError),
/* harmony export */   "upload": () => (/* binding */ upload)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cancellablePromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_logError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/logError */ "./desktop/core/src/desktop/js/utils/logError.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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







var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  withCredentials: true
});
var baseUrl = window.HUE_BASE_URL;
var bearerToken;
axiosInstance.interceptors.request.use(function (config) {
  if (baseUrl) {
    config.baseURL = baseUrl;
  }
  if (bearerToken) {
    config.headers['Authorization'] = "Bearer ".concat(bearerToken);
  }
  return config;
});
axiosInstance.interceptors.response.use(function (response) {
  var _response$data;
  if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.access) {
    bearerToken = response.data.access;
  }
  return response;
});
var getAxiosInstance = function getAxiosInstance() {
  return axiosInstance;
};
var setBaseUrl = function setBaseUrl(newBaseUrl) {
  baseUrl = newBaseUrl;
};
var setBearerToken = function setBearerToken(newBearerToken) {
  bearerToken = newBearerToken;
};
var successResponseIsError = function successResponseIsError(responseData) {
  return typeof responseData !== 'undefined' && (typeof responseData.traceback !== 'undefined' || typeof responseData.status !== 'undefined' && responseData.status !== 0 || responseData.code === 503 || responseData.code === 500);
};
var UNKNOWN_ERROR_MESSAGE = 'Unknown error occurred';
var extractErrorMessage = function extractErrorMessage(errorResponse) {
  if (!errorResponse) {
    return UNKNOWN_ERROR_MESSAGE;
  }
  if (typeof errorResponse === 'string') {
    return errorResponse;
  }
  var defaultResponse = errorResponse;
  if (defaultResponse.statusText && defaultResponse.statusText !== 'abort') {
    return defaultResponse.statusText;
  }
  if (defaultResponse.responseText) {
    try {
      var errorJs = JSON.parse(defaultResponse.responseText);
      if (errorJs.message) {
        return errorJs.message;
      }
    } catch (err) {}
    return defaultResponse.responseText;
  }
  if (defaultResponse.message && defaultResponse.content) {
    return "".concat(defaultResponse.message, "\n").concat(defaultResponse.content);
  }
  if (errorResponse.message) {
    return errorResponse.message;
  }
  if (defaultResponse.statusText) {
    return defaultResponse.statusText;
  }
  if (defaultResponse.error && typeof defaultResponse.error === 'string') {
    return defaultResponse.error;
  }
  return UNKNOWN_ERROR_MESSAGE;
};
var notifyError = function notifyError(message, response, options) {
  if (!options || !options.silenceErrors) {
    (0,utils_logError__WEBPACK_IMPORTED_MODULE_5__["default"])(response);
    if (message.indexOf('AuthorizationException') === -1) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_ERROR_TOPIC, {
        message: message
      });
    }
  }
};
var handleErrorResponse = function handleErrorResponse(err, reject, options) {
  var errorMessage = extractErrorMessage(err.response && err.response.data);
  reject(errorMessage);
  notifyError(errorMessage, err && err.response || err, options);
};
var handleResponse = function handleResponse(response, resolve, reject, options) {
  if (options && options.handleSuccess) {
    options.handleSuccess(response.data, resolve, function (reason) {
      reject(reason);
      notifyError(String(reason), response.data, options);
    });
  } else if ((!options || !options.ignoreSuccessErrors) && successResponseIsError(response.data)) {
    var errorMessage = extractErrorMessage(response && response.data);
    reject(errorMessage);
    notifyError(errorMessage, response, options);
  } else {
    resolve(response.data);
  }
};
var getCancelToken = function getCancelToken() {
  var cancelTokenSource = axios__WEBPACK_IMPORTED_MODULE_0___default().CancelToken.source();
  return {
    cancelToken: cancelTokenSource.token,
    cancel: cancelTokenSource.cancel
  };
};
var post = function post(url, data, options) {
  return new _cancellablePromise__WEBPACK_IMPORTED_MODULE_2__.CancellablePromise(function (resolve, reject, onCancel) {
    var _getCancelToken = getCancelToken(),
      cancelToken = _getCancelToken.cancelToken,
      cancel = _getCancelToken.cancel;
    var completed = false;
    var encodeData = (options === null || options === void 0 ? void 0 : options.qsEncodeData) == undefined || (options === null || options === void 0 ? void 0 : options.qsEncodeData);
    axiosInstance.post(url, encodeData ? qs__WEBPACK_IMPORTED_MODULE_1___default().stringify(data) : data, _objectSpread({
      cancelToken: cancelToken
    }, options)).then(function (response) {
      handleResponse(response, resolve, reject, options);
    })["catch"](function (err) {
      if (options && options.handleError) {
        options.handleError(err, resolve, function (reason) {
          handleErrorResponse(err, reject, options);
          notifyError(String(reason), err, options);
        });
      } else {
        handleErrorResponse(err, reject, options);
      }
    })["finally"](function () {
      completed = true;
    });
    onCancel(function () {
      if (!completed) {
        cancel();
      }
    });
  });
};
var get = function get(url, data, options) {
  return new _cancellablePromise__WEBPACK_IMPORTED_MODULE_2__.CancellablePromise(function (resolve, reject, onCancel) {
    var _getCancelToken2 = getCancelToken(),
      cancelToken = _getCancelToken2.cancelToken,
      cancel = _getCancelToken2.cancel;
    var completed = false;
    axiosInstance.get(url, {
      cancelToken: cancelToken,
      params: data
    }).then(function (response) {
      handleResponse(response, resolve, reject, options);
    })["catch"](function (err) {
      handleErrorResponse(err, reject, options);
    })["finally"](function () {
      completed = true;
    });
    onCancel(function () {
      if (!completed) {
        cancel();
      }
    });
  });
};
var upload = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, data, progressCallback) {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axiosInstance.post(url, data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function onUploadProgress(progressEvent) {
              if (progressCallback) {
                progressCallback(Math.round(progressEvent.loaded * 100 / progressEvent.total));
              }
            }
          });
        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function upload(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-e981d915-bundle-a2a4f8506cb55bb7.js.map