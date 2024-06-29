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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-027ccb81"],{

/***/ "./desktop/core/src/desktop/js/config/events.ts":
/*!******************************************************!*\
  !*** ./desktop/core/src/desktop/js/config/events.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG_REFRESHED_TOPIC": () => (/* binding */ CONFIG_REFRESHED_TOPIC),
/* harmony export */   "GET_KNOWN_CONFIG_TOPIC": () => (/* binding */ GET_KNOWN_CONFIG_TOPIC),
/* harmony export */   "REFRESH_CONFIG_TOPIC": () => (/* binding */ REFRESH_CONFIG_TOPIC)
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

var REFRESH_CONFIG_TOPIC = 'cluster.config.refresh.config';
var CONFIG_REFRESHED_TOPIC = 'cluster.config.set.config';
var GET_KNOWN_CONFIG_TOPIC = 'cluster.config.get.config';

/***/ }),

/***/ "./desktop/core/src/desktop/js/config/hueConfig.ts":
/*!*********************************************************!*\
  !*** ./desktop/core/src/desktop/js/config/hueConfig.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "filterBrowserConnectors": () => (/* binding */ filterBrowserConnectors),
/* harmony export */   "filterEditorConnectors": () => (/* binding */ filterEditorConnectors),
/* harmony export */   "findBrowserConnector": () => (/* binding */ findBrowserConnector),
/* harmony export */   "findDashboardConnector": () => (/* binding */ findDashboardConnector),
/* harmony export */   "findEditorConnector": () => (/* binding */ findEditorConnector),
/* harmony export */   "getConfig": () => (/* binding */ getConfig),
/* harmony export */   "getLastKnownConfig": () => (/* binding */ getLastKnownConfig),
/* harmony export */   "getRootFilePath": () => (/* binding */ getRootFilePath),
/* harmony export */   "refreshConfig": () => (/* binding */ refreshConfig)
/* harmony export */ });
/* harmony import */ var api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/utils */ "./desktop/core/src/desktop/js/api/utils.ts");
/* harmony import */ var _api_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/urls */ "./desktop/core/src/desktop/js/api/urls.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./desktop/core/src/desktop/js/config/events.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./desktop/core/src/desktop/js/config/types.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
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







var lastConfigPromise;
var lastKnownConfig;
var refreshConfig = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          lastConfigPromise = new Promise( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
              var apiResponse;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(_api_urls__WEBPACK_IMPORTED_MODULE_1__.FETCH_CONFIG_API, {}, {
                      silenceErrors: true
                    });
                  case 3:
                    apiResponse = _context.sent;
                    if (apiResponse.status == 0) {
                      lastKnownConfig = apiResponse;
                      resolve(lastKnownConfig);
                    } else if (apiResponse.message) {
                      utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(_reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_5__.GLOBAL_ERROR_TOPIC, {
                        message: apiResponse.message
                      });
                      reject();
                    }
                    _context.next = 10;
                    break;
                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    reject(_context.t0);
                  case 10:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 7]]);
            }));
            return function (_x, _x2) {
              return _ref2.apply(this, arguments);
            };
          }());
          lastConfigPromise.then(function (config) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_2__.CONFIG_REFRESHED_TOPIC, config);
          })["catch"](function () {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_2__.CONFIG_REFRESHED_TOPIC);
          });
          return _context2.abrupt("return", lastConfigPromise);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function refreshConfig() {
    return _ref.apply(this, arguments);
  };
}();
var getLastKnownConfig = function getLastKnownConfig() {
  return lastKnownConfig;
};
var getConfig = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", getLastKnownConfig() || refreshConfig());
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getConfig() {
    return _ref3.apply(this, arguments);
  };
}();
var getInterpreters = function getInterpreters(appType) {
  if (!lastKnownConfig || !lastKnownConfig.app_config) {
    return [];
  }
  var appConfig = lastKnownConfig.app_config[appType];
  if (!appConfig) {
    console.warn("No app config for type ".concat(appType));
    return [];
  }
  if (!appConfig.interpreters) {
    console.warn("No interpreters configured for type ".concat(appType));
    return [];
  }
  return appConfig.interpreters;
};
var findConnector = function findConnector(appType, connectorTest) {
  return getInterpreters(appType).find(connectorTest);
};
var filterConnector = function filterConnector(appType, connectorTest) {
  return getInterpreters(appType).filter(connectorTest);
};
var findDashboardConnector = function findDashboardConnector(connectorTest) {
  return findConnector(_types__WEBPACK_IMPORTED_MODULE_3__.AppType.dashboard, connectorTest);
};
var findBrowserConnector = function findBrowserConnector(connectorTest) {
  return findConnector(_types__WEBPACK_IMPORTED_MODULE_3__.AppType.browser, connectorTest);
};
var findEditorConnector = function findEditorConnector(connectorTest) {
  return findConnector(_types__WEBPACK_IMPORTED_MODULE_3__.AppType.editor, connectorTest);
};
var filterBrowserConnectors = function filterBrowserConnectors(connectorTest) {
  return filterConnector(_types__WEBPACK_IMPORTED_MODULE_3__.AppType.browser, connectorTest);
};
var filterEditorConnectors = function filterEditorConnectors(connectorTest) {
  return filterConnector(_types__WEBPACK_IMPORTED_MODULE_3__.AppType.editor, connectorTest);
};
var rootPathRegex = /.*%3A%2F%2F(.+)$/;

/**
 * This takes the initial path from the "browser" config, used in cases where the users can't access '/'
 * for abfs etc.
 */
var getRootFilePath = function getRootFilePath(connector) {
  if (!connector || connector.type === 'hdfs') {
    return '';
  }
  var match = connector.page.match(rootPathRegex);
  if (match) {
    return match[1] + '/';
  }
  return '';
};
utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(_events__WEBPACK_IMPORTED_MODULE_2__.REFRESH_CONFIG_TOPIC, refreshConfig);

// TODO: Replace GET_KNOWN_CONFIG_TOPIC pubSub with sync getKnownConfig const
utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(_events__WEBPACK_IMPORTED_MODULE_2__.GET_KNOWN_CONFIG_TOPIC, function (callback) {
  if (lastConfigPromise && callback) {
    lastConfigPromise.then(callback)["catch"](callback);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  refreshConfig: refreshConfig,
  getInterpreters: getInterpreters,
  getLastKnownConfig: getLastKnownConfig,
  getRootFilePath: getRootFilePath,
  findBrowserConnector: findBrowserConnector,
  findDashboardConnector: findDashboardConnector,
  findEditorConnector: findEditorConnector
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/config/types.ts":
/*!*****************************************************!*\
  !*** ./desktop/core/src/desktop/js/config/types.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppType": () => (/* binding */ AppType)
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

var AppType = /*#__PURE__*/function (AppType) {
  AppType["browser"] = "browser";
  AppType["editor"] = "editor";
  AppType["dashboard"] = "dashboard";
  AppType["scheduler"] = "scheduler";
  AppType["sdkapps"] = "sdkapps";
  return AppType;
}({});

/* eslint-disable @typescript-eslint/no-empty-interface */

/* eslint-disable @typescript-eslint/no-empty-interface */

/***/ }),

/***/ "./desktop/core/src/desktop/js/doc/docSupport.js":
/*!*******************************************************!*\
  !*** ./desktop/core/src/desktop/js/doc/docSupport.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOCUMENT_TYPES": () => (/* binding */ DOCUMENT_TYPES),
/* harmony export */   "DOCUMENT_TYPE_I18n": () => (/* binding */ DOCUMENT_TYPE_I18n)
/* harmony export */ });
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
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


var DOCUMENT_TYPE_I18n = {
  all: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('All'),
  directory: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Directory'),
  'link-pigscript': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Pig Design'),
  'link-workflow': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Job Design'),
  notebook: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Notebook'),
  'oozie-bundle2': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Oozie Bundle'),
  'oozie-coordinator2': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Oozie Schedule'),
  'oozie-workflow2': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Oozie Workflow'),
  'query-hive': window.ENABLE_UNIFIED_ANALYTICS ? (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Unified Analytics Query') : (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Hive Query'),
  'query-impala': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Impala Query'),
  'search-dashboard': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Search Dashboard'),
  'query-mapreduce': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('MapReduce Job'),
  'query-sqoop1': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Import Job'),
  'query-spark2': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Spark Job'),
  'query-java': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Java Job'),
  'query-pig': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Pig Script'),
  'query-shell': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Shell Script'),
  'query-distcp': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('DistCp Job')
};
var DOCUMENT_TYPES = [];
Object.keys(DOCUMENT_TYPE_I18n).forEach(function (key) {
  if (key !== 'all') {
    DOCUMENT_TYPES.push({
      type: key,
      label: DOCUMENT_TYPE_I18n[key]
    });
  }
});
DOCUMENT_TYPES.sort(function (a, b) {
  return a.label.localeCompare(b.label);
});
DOCUMENT_TYPES.unshift({
  type: 'all',
  label: DOCUMENT_TYPE_I18n['all']
});


/***/ }),

/***/ "./desktop/core/src/desktop/js/doc/hueDocument.js":
/*!********************************************************!*\
  !*** ./desktop/core/src/desktop/js/doc/hueDocument.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOCUMENT_UPDATED_EVENT": () => (/* binding */ DOCUMENT_UPDATED_EVENT),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_html_escapeOutput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/html/escapeOutput */ "./desktop/core/src/desktop/js/utils/html/escapeOutput.ts");
/* harmony import */ var utils_html_highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/html/highlight */ "./desktop/core/src/desktop/js/utils/html/highlight.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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








var DOCUMENT_UPDATED_EVENT = 'hue.document.updated';
var HueDocument = /*#__PURE__*/function () {
  /**
   *
   * @param {Object} options
   * @param {HueFileEntry} options.fileEntry
   *
   * @constructor
   */
  function HueDocument(options) {
    var _this = this;
    _classCallCheck(this, HueDocument);
    this.fileEntry = options.fileEntry;
    this.definition = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.loaded = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.loading = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.hasErrors = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.searchInput = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.selectedUserOrGroup = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.selectedPerm = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('read');
    this.userMap = {};
    this.idToUserMap = {};
    this.selectedUserOrGroup = null;
    this.groupMap = {};
    this.items = [];
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_6__["default"].subscribe(DOCUMENT_UPDATED_EVENT, function (definition) {
      if (_this.definition() && _this.definition().uuid === definition.uuid) {
        _this.definition(definition);
      }
    });
  }
  return _createClass(HueDocument, [{
    key: "isShared",
    value: function isShared() {
      var perms = this.definition() && this.definition().perms;
      return perms && (perms.read.users.length > 0 || perms.read.groups.length > 0 || perms.write.users.length > 0 || perms.write.groups.length > 0 || perms.link_sharing_on);
    }
  }, {
    key: "onShareAutocompleteSelectEnter",
    value: function onShareAutocompleteSelectEnter(event, selectedItem) {
      var self = this;
      self.selectedUserOrGroup = selectedItem.item;
    }
  }, {
    key: "onShareAutocompleteUserEnter",
    value: function onShareAutocompleteUserEnter() {
      var self = this;
      var searchAutoCompInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#shareDocUserInput').val();
      if (self.selectedUserOrGroup && self.selectedUserOrGroup.value === searchAutoCompInput) {
        var selectedValue = self.selectedUserOrGroup.type === 'user' ? self.userMap[searchAutoCompInput] : self.groupMap[searchAutoCompInput];
        if (selectedValue != null) {
          if (typeof selectedValue.username !== 'undefined') {
            this.definition().perms[self.selectedPerm()].users.push(selectedValue);
          } else {
            this.definition().perms[self.selectedPerm()].groups.push(selectedValue);
          }
          this.persistPerms();
        }
      }
      self.selectedUserOrGroup = null;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#shareDocUserInput').val('');
    }
  }, {
    key: "shareAutocompleteUserSource",
    value: function shareAutocompleteUserSource(request, callback) {
      var self = this;
      var successCallback = function successCallback(jsonUserGroups) {
        self.items = [];
        jsonUserGroups.users.forEach(function (user) {
          var label = (0,utils_html_escapeOutput__WEBPACK_IMPORTED_MODULE_4__["default"])(self.prettifyUsername(user));
          var highLightedLabel = (0,utils_html_highlight__WEBPACK_IMPORTED_MODULE_5__["default"])(label, request.term);
          self.userMap[label] = user;
          self.items.push({
            data: {
              icon: 'fa fa-user',
              label: highLightedLabel
            },
            value: label,
            type: 'user'
          });
          self.idToUserMap[user.id] = user;
        });
        jsonUserGroups.groups.forEach(function (group) {
          self.groupMap[group.name] = group;
          var highLightedLabel = (0,utils_html_highlight__WEBPACK_IMPORTED_MODULE_5__["default"])((0,utils_html_escapeOutput__WEBPACK_IMPORTED_MODULE_4__["default"])(group.name), request.term);
          self.items.push({
            data: {
              icon: 'fa fa-users',
              label: highLightedLabel
            },
            value: group.name,
            type: 'group'
          });
        });
        if (self.items.length === 0) {
          self.items.push({
            noMatch: true
          });
        }
        callback(self.items);
      };
      _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].fetchUsersAndGroups({
        data: {
          filter: request.term
        },
        successCallback: successCallback,
        errorCallback: function errorCallback() {}
      });
    }
  }, {
    key: "persistPerms",
    value: function persistPerms() {
      var self = this;
      var postPerms = {
        read: {
          user_ids: self.definition().perms.read.users.map(function (user) {
            return user.id;
          }),
          group_ids: self.definition().perms.read.groups.map(function (group) {
            return group.id;
          })
        },
        write: {
          user_ids: self.definition().perms.write.users.map(function (user) {
            return user.id;
          }),
          group_ids: self.definition().perms.write.groups.map(function (group) {
            return group.id;
          })
        }
      };
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/desktop/api2/doc/share', {
        uuid: JSON.stringify(self.fileEntry.definition().uuid),
        data: JSON.stringify(postPerms)
      }, function (response) {
        if (response != null) {
          if (response.status !== 0) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_6__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_ERROR_TOPIC, {
              message: 'There was an error processing your action: ' + response.message
            });
          } else {
            self.load();
          }
        }
      }).fail(function (response) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_6__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_ERROR_TOPIC, {
          message: 'There was an error processing your action: ' + response.responseText
        });
      });
    }
  }, {
    key: "persistLinkSharingPerms",
    value: function persistLinkSharingPerms(perm) {
      // Perm is either: read, write, off
      var self = this;
      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/desktop/api2/doc/share/link', {
        uuid: JSON.stringify(self.fileEntry.definition().uuid),
        perm: JSON.stringify(perm)
      }, function (response) {
        if (response != null) {
          if (response.status !== 0) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_6__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_ERROR_TOPIC, {
              message: 'There was an error processing your action: ' + response.message
            });
          } else {
            // self.load();
          }
        }
      }).fail(function (response) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_6__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_ERROR_TOPIC, {
          message: 'There was an error processing your action: ' + response.responseText
        });
      });
    }
  }, {
    key: "load",
    value: function load(successCallback, errorCallback) {
      var _this2 = this;
      var self = this;
      if (self.loading()) {
        return;
      }
      self.loading(true);
      self.hasErrors(false);
      var fetchDocumentsSuccessCallback = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve) {
                  var readUsers = data.document.perms.read.users.map(function (user) {
                    return user.id;
                  });
                  var writeUsers = data.document.perms.write.users.map(function (user) {
                    return user.id;
                  });
                  var allUsers = readUsers.concat(writeUsers);
                  if (allUsers.length > 0) {
                    _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].fetchUsersByIds({
                      userids: JSON.stringify(allUsers),
                      successCallback: function successCallback(response) {
                        response.users.forEach(function (user) {
                          // Needed for getting prettyusername of already shared users
                          self.idToUserMap[user.id] = user;
                        });
                        self.definition(data.document);
                        resolve();
                      },
                      errorCallback: function errorCallback() {}
                    });
                  } else {
                    self.definition(data.document);
                    resolve();
                  }
                }));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function fetchDocumentsSuccessCallback(_x) {
          return _ref.apply(this, arguments);
        };
      }();
      _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].fetchDocument({
        uuid: self.fileEntry.definition().uuid
      }).done( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetchDocumentsSuccessCallback(data);
              case 2:
                self.loading(false);
                self.loaded(true);
                if (successCallback) {
                  successCallback(_this2);
                }
              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()).fail(function () {
        self.hasErrors(true);
        self.loading(false);
        self.loaded(true);
        if (errorCallback) {
          errorCallback();
        }
      });
    }
  }, {
    key: "prettifyUsernameById",
    value: function prettifyUsernameById(id) {
      return this.prettifyUsername(this.idToUserMap[id]);
    }
  }, {
    key: "prettifyUsername",
    value: function prettifyUsername(user) {
      user.prettyName = '';
      if (user.first_name) {
        user.prettyName += user.first_name + ' ';
      }
      if (user.last_name) {
        user.prettyName += user.last_name + ' ';
      }
      if (user.prettyName) {
        user.prettyName += '(' + user.username + ')';
      } else {
        user.prettyName += user.username;
      }
      return user.prettyName;
    }
  }, {
    key: "removeFromPerms",
    value: function removeFromPerms(perms, id) {
      var self = this;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(perms).each(function (cnt, item) {
        if (item.id === id) {
          perms.splice(cnt, 1);
        }
      });
      self.persistPerms();
    }
  }, {
    key: "removeUserReadShare",
    value: function removeUserReadShare(user) {
      this.removeFromPerms(this.definition().perms.read.users, user.id);
    }
  }, {
    key: "removeUserWriteShare",
    value: function removeUserWriteShare(user) {
      this.removeFromPerms(this.definition().perms.write.users, user.id);
    }
  }, {
    key: "removeGroupReadShare",
    value: function removeGroupReadShare(group) {
      this.removeFromPerms(this.definition().perms.read.groups, group.id);
    }
  }, {
    key: "removeGroupWriteShare",
    value: function removeGroupWriteShare(group) {
      this.removeFromPerms(this.definition().perms.write.groups, group.id);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HueDocument);

/***/ }),

/***/ "./desktop/core/src/desktop/js/doc/hueFileEntry.js":
/*!*********************************************************!*\
  !*** ./desktop/core/src/desktop/js/doc/hueFileEntry.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _hueDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hueDocument */ "./desktop/core/src/desktop/js/doc/hueDocument.js");
/* harmony import */ var _docSupport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docSupport */ "./desktop/core/src/desktop/js/doc/docSupport.js");
/* harmony import */ var _ko_components_ko_deleteDocModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ko/components/ko.deleteDocModal */ "./desktop/core/src/desktop/js/ko/components/ko.deleteDocModal.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
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









var SORTS = {
  defaultAsc: function defaultAsc(a, b) {
    if (a.isDirectory() && !b.isDirectory()) {
      return -1;
    }
    if (!a.isDirectory() && b.isDirectory()) {
      return 1;
    }
    if (a.isDirectory() && b.isDirectory()) {
      return SORTS.nameAsc(a, b);
    }
    return SORTS.lastModifiedDesc(a, b);
  },
  nameAsc: function nameAsc(a, b) {
    return a.definition().name.localeCompare(b.definition().name);
  },
  nameDesc: function nameDesc(a, b) {
    return SORTS.nameAsc(b, a);
  },
  descriptionAsc: function descriptionAsc(a, b) {
    return a.definition().description.localeCompare(b.definition().description);
  },
  descriptionDesc: function descriptionDesc(a, b) {
    return SORTS.descriptionAsc(b, a);
  },
  typeAsc: function typeAsc(a, b) {
    return a.definition().type.localeCompare(b.definition().type);
  },
  typeDesc: function typeDesc(a, b) {
    return SORTS.typeAsc(b, a);
  },
  ownerAsc: function ownerAsc(a, b) {
    return a.definition().owner.localeCompare(b.definition().owner);
  },
  ownerDesc: function ownerDesc(a, b) {
    return SORTS.ownerAsc(b, a);
  },
  lastModifiedAsc: function lastModifiedAsc(a, b) {
    return a.definition().last_modified_ts - b.definition().last_modified_ts;
  },
  lastModifiedDesc: function lastModifiedDesc(a, b) {
    return SORTS.lastModifiedAsc(b, a);
  }
};
var HueFileEntry = /*#__PURE__*/function () {
  /**
   *
   * @param {Object} options
   * @param {Object} options.definition
   * @param {Function} options.activeEntry - The observable keeping track of the current open directory
   * @param {Function} options.trashEntry - The observable keeping track of the trash directory
   * @param {HueFolder} options.parent
   * @param {string} options.app - Currently only 'documents' is supported
   * @param {string} options.user
   *
   * @constructor
   */
  function HueFileEntry(options) {
    var _this = this;
    _classCallCheck(this, HueFileEntry);
    this.activeEntry = options.activeEntry;
    this.trashEntry = options.trashEntry;
    this.parent = options.parent;
    this.definition = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.definition);
    this.app = options.app;
    this.user = options.user;
    this.superuser = options.superuser;
    this.serverTypeFilter = options.serverTypeFilter || knockout__WEBPACK_IMPORTED_MODULE_1__.observable({
      type: 'all'
    });
    this.statsVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.highlight = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.document = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.selectedDocsWithDependents = knockout__WEBPACK_IMPORTED_MODULE_1__.observable([]);
    this.importedDocSummary = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.showTable = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.entries = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([]);

    // Filter is only used in the assist panel at the moment
    this.isFilterVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.filter = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('').extend({
      rateLimit: 400
    });
    this.typeFilter = options.typeFilter || knockout__WEBPACK_IMPORTED_MODULE_1__.observable(_docSupport__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT_TYPES[0]); // First one is always 'all'

    this.isFilterVisible.subscribe(function (newValue) {
      if (!newValue && _this.filter()) {
        _this.filter('');
      }
    });
    this.filteredEntries = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      var filter = _this.filter().toLowerCase();
      var typeFilter = _this.typeFilter().type;
      if (filter || typeFilter !== 'all') {
        return _this.entries().filter(function (entry) {
          var entryType = entry.definition().type;
          return (typeFilter === 'all' || entryType === typeFilter || entryType === 'directory') && (!filter || entry.definition().name.toLowerCase().indexOf(filter) !== -1 || _docSupport__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT_TYPE_I18n[entryType] && _docSupport__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT_TYPE_I18n[entryType].toLowerCase().indexOf(filter) !== -1 || entry.definition().description.toLowerCase().indexOf(filter) !== -1);
        });
      }
      return _this.entries();
    });
    this.getSelectedDocsWithDependents = function () {
      _this.selectedDocsWithDependents([]);
      var uuids = _this.selectedEntries().map(function (entry) {
        return entry.definition().uuid;
      }).join(',');
      var data = {
        uuids: uuids,
        data: 'false',
        dependencies: 'true'
      };
      jquery__WEBPACK_IMPORTED_MODULE_0___default().get('/desktop/api2/doc/', data, function (response) {
        var docsWithDependents = [];
        if (response && response.data_list) {
          for (var index = 0; index < response.data_list.length; index++) {
            docsWithDependents.push({
              name: response.data_list[index].document.name,
              dependents: response.data_list[index].dependents
            });
          }
        }
        _this.selectedDocsWithDependents(docsWithDependents);
      }).fail(function (response) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
          message: 'Error getting document data: ' + response.responseText
        });
      });
    };
    this.isTrash = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.definition().name === '.Trash';
    });
    this.isTrashed = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      if (typeof _this.parent !== 'undefined' && _this.parent !== null) {
        return _this.parent.isTrash() || _this.parent.isTrashed();
      }
      return false;
    });
    this.isRoot = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.definition().name === '';
    });
    this.isDirectory = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.definition().type === 'directory';
    });
    this.isShared = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      var perms = _this.definition().perms;
      return perms && (perms.read.users.length > 0 || perms.read.groups.length > 0 || perms.write.users.length > 0 || perms.write.groups.length > 0 || perms.link_sharing_on);
    });
    this.isSharedWithMe = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.user !== _this.definition().owner;
    });
    this.canModify = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      var perms = _this.definition().perms;
      return !_this.isSharedWithMe() || _this.superuser || perms && (perms.write.users.some(function (user) {
        return user.username === _this.user;
      }) || perms.write.groups.some(function (writeGroup) {
        return LOGGED_USERGROUPS.indexOf(writeGroup.name) !== -1;
      }) || perms.link_sharing_on && perms.link_write);
    });
    this.canReshare = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      if (!_this.isSharedWithMe()) {
        return true;
      }
      var target = _this;
      while (target.parent && !target.isShared()) {
        target = target.parent;
      }
      return target.canModify();
    });
    this.entriesToDelete = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    this.deletingEntries = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.selected = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.loaded = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.loading = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.hasErrors = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.uploading = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.uploadComplete = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.uploadFailed = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.selectedImportFile = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
    this.importEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.selectedImportFile() !== '';
    });
    this.activeSort = options.activeSort;
    this.selectedEntries = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.entries().filter(function (entry) {
        return entry.selected();
      });
    });
    this.sharedWithMeSelected = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.selectedEntries().some(function (entry) {
        return entry.isSharedWithMe();
      });
    });
    this.directorySelected = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.selectedEntries().some(function (entry) {
        return entry.isDirectory();
      });
    });
    this.selectedEntry = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      if (_this.selectedEntries().length === 1) {
        return _this.selectedEntries()[0];
      }
      return null;
    });
    this.breadcrumbs = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      var result = [];
      var lastParent = _this.parent;
      while (lastParent) {
        result.unshift(lastParent);
        lastParent = lastParent.parent;
      }
      return result;
    });
  }
  return _createClass(HueFileEntry, [{
    key: "getDirectory",
    value: function getDirectory() {
      if (!this.definition() || this.isRoot()) {
        return null;
      } else {
        return this.definition().uuid;
      }
    }
  }, {
    key: "highlightInside",
    value: function highlightInside(uuid) {
      var self = this;
      self.typeFilter(_docSupport__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT_TYPES[0]);
      var foundEntry;
      self.entries().forEach(function (entry) {
        entry.highlight(false);
        if (entry.definition() && entry.definition().uuid === uuid) {
          foundEntry = entry;
        }
      });
      if (foundEntry) {
        if (foundEntry.definition().type === 'directory') {
          self.activeEntry(foundEntry);
          if (!foundEntry.entries().length) {
            foundEntry.load();
          }
        } else {
          window.setTimeout(function () {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribeOnce('assist.db.scrollToComplete', function () {
              foundEntry.highlight(true);
              // Timeout is for animation effect
              window.setTimeout(function () {
                foundEntry.highlight(false);
              }, 1800);
            });
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('assist.db.scrollTo', foundEntry);
          }, 0);
        }
      }
    }
  }, {
    key: "showContextPopover",
    value: function showContextPopover(entry, event, positionAdjustment) {
      var self = this;
      var $source = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target);
      var offset = $source.offset();
      if (positionAdjustment) {
        offset.left += positionAdjustment.left;
        offset.top += positionAdjustment.top;
      }
      self.statsVisible(true);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('context.popover.show', {
        data: {
          type: 'hue',
          definition: self.definition()
        },
        showInAssistEnabled: false,
        orientation: 'right',
        pinEnabled: false,
        source: {
          element: event.target,
          left: offset.left,
          top: offset.top - 3,
          right: offset.left + $source.width() + 1,
          bottom: offset.top + $source.height() - 3
        }
      });
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribeOnce('context.popover.hidden', function () {
        self.statsVisible(false);
      });
    }
  }, {
    key: "addDirectoryParamToUrl",
    value: function addDirectoryParamToUrl(url) {
      var self = this;
      var directoryId = self.getDirectory();
      if (!directoryId) {
        return url;
      } else if (url.indexOf('?') !== -1) {
        return url + '&directory_uuid=' + self.definition().uuid;
      } else {
        return url + '?directory_uuid=' + self.definition().uuid;
      }
    }
  }, {
    key: "beforeContextOpen",
    value: function beforeContextOpen() {
      if (!this.selected()) {
        this.parent.selectedEntries().forEach(function (entry) {
          entry.selected(false);
        });
        this.selected(true);
      }
    }
  }, {
    key: "showRenameDirectoryModal",
    value: function showRenameDirectoryModal() {
      var selectedEntry = this;
      if (!selectedEntry.selected()) {
        selectedEntry = selectedEntry.selectedEntry();
      }
      if (!selectedEntry.isTrash() && !selectedEntry.isTrashed() && selectedEntry.canModify()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#renameDirectoryName').val(selectedEntry.definition().name);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#renameDirectoryModal').modal('show');
      }
    }
  }, {
    key: "setSort",
    value: function setSort(name) {
      if (this.activeSort().indexOf(name) === -1) {
        if (name === 'lastModified') {
          this.activeSort('lastModifiedDesc');
        } else {
          this.activeSort(name + 'Asc');
        }
      } else if (name !== 'lastModified' && this.activeSort().indexOf('Asc') !== -1) {
        this.activeSort(name + 'Desc');
      } else if (name === 'lastModified' && this.activeSort().indexOf('Desc') !== -1) {
        this.activeSort('lastModifiedAsc');
      } else {
        this.activeSort('defaultAsc');
      }
      this.entries.sort(SORTS[this.activeSort()]);
    }
  }, {
    key: "showSharingModal",
    value: function showSharingModal(entry) {
      if (entry) {
        this.selectedEntries().forEach(function (otherEntry) {
          if (otherEntry !== entry) {
            otherEntry.selected(false);
          }
        });
        entry.selected(true);
      }
      if (this.selectedEntry()) {
        this.selectedEntry().loadDocument();
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('doc.show.share.modal', this.selectedEntry());
      }
    }
  }, {
    key: "copy",
    value: function copy() {
      var self = this;
      if (self.selectedEntries().indexOf(self) !== -1) {
        self.activeEntry(self.parent);
      }
      var copyNext = function copyNext() {
        if (self.selectedEntries().length > 0) {
          var nextUuid = self.selectedEntries().shift().definition().uuid;
          _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].copyDocument({
            uuid: nextUuid,
            successCallback: function successCallback() {
              copyNext();
            },
            errorCallback: function errorCallback() {
              self.activeEntry().load();
            }
          });
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('assist.document.refresh');
          self.activeEntry().load();
        }
      };
      copyNext();
    }
  }, {
    key: "loadDocument",
    value: function () {
      var _loadDocument = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(successCallback, errorCallback) {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                _this2.document(new _hueDocument__WEBPACK_IMPORTED_MODULE_4__["default"]({
                  fileEntry: _this2
                }));
                _this2.document().load(function () {
                  if (successCallback) {
                    successCallback(_this2.document());
                  }
                  resolve(_this2.document());
                }, function (err) {
                  if (errorCallback) {
                    errorCallback(err);
                  }
                  reject(err);
                });
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function loadDocument(_x, _x2) {
        return _loadDocument.apply(this, arguments);
      }
      return loadDocument;
    }()
    /**
     * @param {HueFileEntry[]} entries
     */
  }, {
    key: "moveHere",
    value: function moveHere(entries) {
      var self = this;
      if (self.app === 'documents') {
        var moveNext = function moveNext() {
          if (entries.length > 0) {
            var nextId = entries.shift().definition().uuid;
            _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].moveDocument({
              successCallback: function successCallback() {
                moveNext();
              },
              errorCallback: function errorCallback() {
                self.activeEntry().load();
              },
              sourceId: nextId,
              destinationId: self.definition().uuid
            });
          } else {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('assist.document.refresh');
            if (self !== self.activeEntry()) {
              self.load();
            }
            self.activeEntry().load();
          }
        };
        moveNext();
      }
    }
  }, {
    key: "createNewEntry",
    value: function createNewEntry(options) {
      return new HueFileEntry(jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
        activeEntry: this.activeEntry,
        activeSort: this.activeSort,
        trashEntry: this.trashEntry,
        serverTypeFilter: this.serverTypeFilter,
        typeFilter: this.typeFilter,
        app: this.app,
        user: this.user,
        superuser: this.superuser
      }, options));
    }
  }, {
    key: "search",
    value: function search(query) {
      var self = this;
      var owner = self.definition().isSearchResult ? self.parent : self;
      if (!query) {
        if (self.definition().isSearchResult) {
          self.activeEntry(self.parent);
        }
        return;
      }
      var resultEntry = self.createNewEntry({
        definition: {
          isSearchResult: true,
          name: '"' + query + '"'
        },
        parent: owner
      });
      self.activeEntry(resultEntry);
      resultEntry.loading(true);
      _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].searchDocuments({
        uuid: owner.uuid,
        query: query,
        type: self.serverTypeFilter().type,
        successCallback: function successCallback(data) {
          resultEntry.hasErrors(false);
          var newEntries = [];
          data.documents.forEach(function (definition) {
            var entry = self.createNewEntry({
              definition: definition,
              parent: self
            });
            if (!entry.isTrash()) {
              newEntries.push(entry);
            }
          });
          resultEntry.entries(newEntries);
          resultEntry.loading(false);
          resultEntry.loaded(true);
        },
        errorCallback: function errorCallback() {
          resultEntry.hasErrors(true);
          resultEntry.loading(false);
          resultEntry.loaded(true);
        }
      });
    }
  }, {
    key: "toggleSelected",
    value: function toggleSelected() {
      this.selected(!this.selected());
    }
  }, {
    key: "openSelected",
    value: function openSelected() {
      if (this.selectedEntries().length === 1) {
        this.selectedEntry().open();
      }
    }
  }, {
    key: "open",
    value: function open() {
      if (this.definition().type === 'directory') {
        this.makeActive();
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('file.browser.directory.opened');
        if (!this.loaded()) {
          this.load();
        }
      } else {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('open.link', this.definition().absoluteUrl);
      }
    }
  }, {
    key: "load",
    value: function load(_successCallback, _errorCallback, silenceErrors) {
      var self = this;
      if (self.loading()) {
        return;
      }
      self.loading(true);
      if (self.app === 'documents') {
        _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].fetchDocuments({
          uuid: self.definition().uuid,
          type: self.serverTypeFilter().type,
          silenceErrors: !!silenceErrors,
          successCallback: function successCallback(data) {
            self.definition(data.document);
            self.hasErrors(false);
            var newEntries = [];
            data.children.forEach(function (definition) {
              var entry = self.createNewEntry({
                definition: definition,
                parent: self
              });
              if (entry.isTrash()) {
                self.trashEntry(entry);
              } else {
                newEntries.push(entry);
              }
            });
            newEntries.sort(SORTS[self.activeSort()]);
            self.entries(newEntries);
            if (!self.parent && data.parent) {
              self.parent = self.createNewEntry({
                definition: data.parent.path === '/' && self.isSharedWithMe() ? {
                  name: '/'
                } : data.parent,
                parent: null
              });
            }
            self.loading(false);
            self.loaded(true);
            if (self.isRoot() && self.entries().length === 1 && self.entries()[0].definition().type === 'directory' && self.entries()[0].isSharedWithMe()) {
              self.activeEntry(self.entries()[0]);
              self.activeEntry().load(_successCallback);
            } else if (_successCallback && typeof _successCallback === 'function') {
              _successCallback();
            }
          },
          errorCallback: function errorCallback() {
            self.hasErrors(true);
            self.loading(false);
            self.loaded(true);
            if (_errorCallback) {
              _errorCallback();
            }
          }
        });
      }
    }
  }, {
    key: "showTrash",
    value: function showTrash() {
      if (this.trashEntry()) {
        this.trashEntry().open();
      }
    }
  }, {
    key: "emptyTrash",
    value: function emptyTrash() {
      var _this3 = this;
      if (this.trashEntry()) {
        var openConfirmation = function openConfirmation() {
          _this3.trashEntry().entries().forEach(function (entry) {
            return entry.selected(true);
          });
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish(_ko_components_ko_deleteDocModal__WEBPACK_IMPORTED_MODULE_6__.SHOW_DELETE_DOC_MODAL_EVENT, _this3.trashEntry());
        };
        if (!this.trashEntry().loaded()) {
          this.trashEntry().load(openConfirmation);
        } else {
          openConfirmation();
        }
      }
    }
  }, {
    key: "moveToTrash",
    value: function moveToTrash() {
      if (this.selectedEntries().length > 0 && (this.superuser || !this.sharedWithMeSelected())) {
        this.entriesToDelete(this.selectedEntries());
        this.removeDocuments(false);
      }
    }
  }, {
    key: "showRestoreConfirmation",
    value: function showRestoreConfirmation() {
      if (this.selectedEntries().length > 0 && (this.superuser || !this.sharedWithMeSelected())) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#restoreFromTrashModal').modal('show');
      }
    }
  }, {
    key: "removeDocuments",
    value: function removeDocuments(deleteForever) {
      var self = this;
      if (self.entriesToDelete().indexOf(self) !== -1) {
        self.activeEntry(self.parent);
      }
      var deleteNext = function deleteNext() {
        if (self.entriesToDelete().length > 0) {
          var nextUuid = self.entriesToDelete().shift().definition().uuid;
          _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].deleteDocument({
            uuid: nextUuid,
            skipTrash: deleteForever,
            successCallback: function successCallback() {
              deleteNext();
            },
            errorCallback: function errorCallback() {
              self.activeEntry().load();
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#deleteEntriesModal').modal('hide');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal-backdrop').remove();
              self.deletingEntries(false);
            }
          });
        } else {
          self.deletingEntries(false);
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('assist.document.refresh');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#deleteEntriesModal').modal('hide');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal-backdrop').remove();
          self.activeEntry().load();
        }
      };
      self.deletingEntries(true);
      deleteNext();
    }
  }, {
    key: "closeUploadModal",
    value: function closeUploadModal() {
      var _this4 = this;
      if (this.app === 'documents') {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('hide.import.documents.modal');
      }
      // Allow the modal to hide
      window.setTimeout(function () {
        _this4.uploading(false);
        _this4.uploadComplete(false);
        _this4.uploadFailed(false);
      }, 400);
    }
  }, {
    key: "upload",
    value: function upload(importSuccessCallback) {
      var self = this;
      if (document.getElementById('importDocumentInput').files.length > 0 && self.app === 'documents') {
        self.uploading(true);
        self.uploadComplete(false);
        self.uploadFailed(false);
        self.importedDocSummary(null);
        self.showTable(false);
        _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].uploadDocument({
          formData: new FormData(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#importDocumentsForm')[0]),
          successCallback: function successCallback(data) {
            self.uploading(false);
            self.uploadComplete(true);
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('assist.document.refresh');
            self.load();
            self.importedDocSummary(data);
            if (importSuccessCallback) {
              importSuccessCallback();
            }
          },
          progressHandler: function progressHandler(event) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#importDocumentsProgress').val(Math.round(event.loaded / event.total * 100));
          },
          errorCallback: function errorCallback() {
            self.uploading(false);
            self.uploadComplete(true);
            self.uploadFailed(true);
          }
        });
      }
    }
  }, {
    key: "importedDocumentCount",
    value: function importedDocumentCount() {
      if (this.importedDocSummary()) {
        return this.importedDocSummary()['documents'].length;
      }
      return 0;
    }
  }, {
    key: "toggleShowTable",
    value: function toggleShowTable() {
      this.showTable(!this.showTable());
    }
  }, {
    key: "makeActive",
    value: function makeActive() {
      if (!this.loaded()) {
        this.load();
      }
      this.activeEntry(this);
    }
  }, {
    key: "showUploadModal",
    value: function showUploadModal() {
      if (this.app === 'documents' && !this.isTrash() && !this.isTrashed()) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('show.import.documents.modal', {
          fileEntry: this
        });
      }
    }
  }, {
    key: "contextMenuDownload",
    value: function contextMenuDownload() {
      if (this.selected()) {
        this.parent.download();
      } else {
        this.downloadThis();
      }
    }
  }, {
    key: "downloadThis",
    value: function downloadThis() {
      window.location.href = window.HUE_BASE_URL + '/desktop/api2/doc/export?documents=' + knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON([this.definition().id]);
    }
  }, {
    key: "download",
    value: function download() {
      if (this.app === 'documents') {
        if (this.selectedEntries().length > 0) {
          var ids = this.selectedEntries().map(function (entry) {
            return entry.definition().id;
          });
          window.location.href = window.HUE_BASE_URL + '/desktop/api2/doc/export?documents=' + knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.toJSON(ids);
        } else {
          this.downloadThis();
        }
      }
    }
  }, {
    key: "restoreFromTrash",
    value: function restoreFromTrash() {
      var self = this;
      if (self.app === 'documents') {
        if (self.selectedEntries().indexOf(self) !== -1) {
          self.activeEntry(self.parent);
        }
        if (self.selectedEntries().length > 0) {
          var uuids = self.selectedEntries().map(function (entry) {
            return entry.definition().uuid;
          }).join(',');
          _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].restoreDocument({
            uuids: uuids,
            successCallback: function successCallback() {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('assist.document.refresh');
              self.activeEntry().load();
            },
            errorCallback: function errorCallback() {
              self.activeEntry().load();
            }
          });
        } else {
          self.activeEntry().load();
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#restoreFromTrashModal').modal('hide');
      }
    }
  }, {
    key: "createDirectory",
    value: function createDirectory(name) {
      var self = this;
      if (name && self.app === 'documents') {
        _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createDocumentsFolder({
          successCallback: function successCallback() {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('assist.document.refresh');
            self.load();
          },
          parentUuid: self.definition().uuid,
          name: name
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#newDirectoryName').val(null);
      }
    }
  }, {
    key: "renameDirectory",
    value: function renameDirectory(name) {
      var self = this;
      if (name && self.app === 'documents') {
        _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].updateDocument({
          successCallback: function successCallback() {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('assist.document.refresh');
            self.load();
          },
          uuid: self.definition().uuid,
          name: name
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#renameDirectoryName').val(null);
      }
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HueFileEntry);

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/aceExtensions.js":
/*!**********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/aceExtensions.js ***!
  \**********************************************************/
/***/ (() => {

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

try {
  ace.originalEdit = ace.edit;
  var AceRange = ace.require('ace/range').Range;
  ace.edit = function (el) {
    var editor = ace.originalEdit(el);
    editor.enableAutocomplete = function () {
      editor.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true
      });
    };
    editor.disableAutocomplete = function () {
      editor.setOptions({
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false
      });
    };
    editor.removeTextBeforeCursor = function (length) {
      var _r = new AceRange(this.getCursorPosition().row, this.getCursorPosition().column - length, this.getCursorPosition().row, this.getCursorPosition().column);
      editor.getSession().getDocument().remove(_r);
    };
    editor.getTextBeforeCursor = function (separator) {
      var _r = new AceRange(0, 0, this.getCursorPosition().row, this.getCursorPosition().column);
      return separator ? this.session.getTextRange(_r).split(separator).pop() : this.session.getTextRange(_r);
    };
    editor.removeTextAfterCursor = function (length) {
      var _r = new AceRange(this.getCursorPosition().row, this.getCursorPosition().column, this.getCursorPosition().row, this.getCursorPosition().column + length);
      editor.getSession().getDocument().remove(_r);
    };
    editor.getTextAfterCursor = function (separator) {
      var _r = new AceRange(this.getCursorPosition().row, this.getCursorPosition().column, this.session.getLength(), this.session.getRowLength(this.session.getLength()));
      return separator ? this.session.getTextRange(_r).split(separator).shift() : this.session.getTextRange(_r);
    };
    editor.getCursorScreenPosition = function () {
      return this.renderer.textToScreenCoordinates(this.getCursorPosition());
    };
    editor.showSpinner = function () {
      var _position = this.getCursorScreenPosition();
      if ($(".ace-spinner").length == 0) {
        $("<i class='fa fa-spinner fa-spin ace-spinner'></i>").appendTo('body');
      }
      $(".ace-spinner").css("top", _position.pageY + "px").css("left", _position.pageX - 4 + "px").show();
    };
    editor.hideSpinner = function () {
      $(".ace-spinner").hide();
    };
    editor.showFileButton = function () {
      var _position = this.getCursorScreenPosition();
      if ($(".ace-inline-button").length == 0) {
        $("<a class='btn btn-mini ace-inline-button'><i class='fa fa-ellipsis-h'></i></a>").appendTo('body');
      }
      $(".ace-inline-button").css("top", _position.pageY + "px").css("left", _position.pageX + 4 + "px").show();
      $(".ace-inline-button").off("click");
      return $(".ace-inline-button");
    };
    editor.hideFileButton = function () {
      $(".ace-inline-button").hide();
    };
    editor.clearAnnotations = function (type) {
      if (type === 'error') {
        this.session.setAnnotations(this.session.getAnnotations().filter(function (item) {
          return item.type === 'warning';
        }));
      } else if (type === 'warning') {
        this.session.setAnnotations(this.session.getAnnotations().filter(function (item) {
          return item.type === 'error';
        }));
      } else {
        this.session.clearAnnotations();
      }
    };
    editor.clearErrorsAndWarnings = function (type) {
      for (var id in this.session.getMarkers()) {
        var _marker = this.session.getMarkers()[id];
        var _condition = _marker.clazz == "ace_error-line" || _marker.clazz == "ace_warning-line";
        if (type === 'error') {
          _condition = _marker.clazz == "ace_error-line";
        }
        if (type === 'warning') {
          _condition = _marker.clazz == "ace_warning-line";
        }
        if (_condition) {
          this.session.removeMarker(_marker.id);
        }
      }
      editor.clearAnnotations(type);
    };
    editor.clearErrors = function () {
      editor.clearErrorsAndWarnings('error');
    };
    editor.clearWarnings = function () {
      editor.clearErrorsAndWarnings('warning');
    };
    editor.addError = function (message, line) {
      var _range = new AceRange(line, 0, line, this.session.getLine(line).length);
      this.session.addMarker(_range, "ace_error-line");
      var errors = this.session.getAnnotations();
      errors.push({
        row: _range.start.row,
        column: _range.start.column,
        raw: message,
        text: message,
        type: "error"
      });
      this.session.setAnnotations(errors);
    };
    editor.addWarning = function (message, line) {
      var _range = new AceRange(line, 0, line, this.session.getLine(line).length);
      this.session.addMarker(_range, "ace_warning-line");
      var warnings = this.session.getAnnotations();
      warnings.push({
        row: _range.start.row,
        column: _range.start.column,
        raw: message,
        text: message,
        type: "warning"
      });
      this.session.setAnnotations(warnings);
    };
    return editor;
  };
} catch (e) {
  console.error("You need to include ace.js before including this snippet.");
}

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/aceHelper.ts":
/*!******************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/aceHelper.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getAceMode": () => (/* binding */ getAceMode)
/* harmony export */ });
/* harmony import */ var _ace_ace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ace/ace */ "./desktop/core/src/desktop/js/ext/ace/ace.js");
/* harmony import */ var _ace_ace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ace_ace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ace_ext_language_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ace/ext-language_tools */ "./desktop/core/src/desktop/js/ext/ace/ext-language_tools.js");
/* harmony import */ var _ace_ext_language_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ace_ext_language_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ace_ext_searchbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ace/ext-searchbox */ "./desktop/core/src/desktop/js/ext/ace/ext-searchbox.js");
/* harmony import */ var _ace_ext_searchbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ace_ext_searchbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ace_ext_settings_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ace/ext-settings_menu */ "./desktop/core/src/desktop/js/ext/ace/ext-settings_menu.js");
/* harmony import */ var _ace_ext_settings_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ace_ext_settings_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ace_mode_bigquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ace/mode-bigquery */ "./desktop/core/src/desktop/js/ext/ace/mode-bigquery.js");
/* harmony import */ var _ace_mode_bigquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_bigquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ace_mode_dasksql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ace/mode-dasksql */ "./desktop/core/src/desktop/js/ext/ace/mode-dasksql.js");
/* harmony import */ var _ace_mode_dasksql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_dasksql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ace_mode_druid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ace/mode-druid */ "./desktop/core/src/desktop/js/ext/ace/mode-druid.js");
/* harmony import */ var _ace_mode_druid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_druid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ace_mode_elasticsearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ace/mode-elasticsearch */ "./desktop/core/src/desktop/js/ext/ace/mode-elasticsearch.js");
/* harmony import */ var _ace_mode_elasticsearch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_elasticsearch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ace_mode_flink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ace/mode-flink */ "./desktop/core/src/desktop/js/ext/ace/mode-flink.js");
/* harmony import */ var _ace_mode_flink__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_flink__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ace_mode_hive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ace/mode-hive */ "./desktop/core/src/desktop/js/ext/ace/mode-hive.js");
/* harmony import */ var _ace_mode_hive__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_hive__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ace_mode_hplsql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ace/mode-hplsql */ "./desktop/core/src/desktop/js/ext/ace/mode-hplsql.js");
/* harmony import */ var _ace_mode_hplsql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_hplsql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ace_mode_impala__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ace/mode-impala */ "./desktop/core/src/desktop/js/ext/ace/mode-impala.js");
/* harmony import */ var _ace_mode_impala__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_impala__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ace_mode_ksql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ace/mode-ksql */ "./desktop/core/src/desktop/js/ext/ace/mode-ksql.js");
/* harmony import */ var _ace_mode_ksql__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_ksql__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ace_mode_markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ace/mode-markdown */ "./desktop/core/src/desktop/js/ext/ace/mode-markdown.js");
/* harmony import */ var _ace_mode_markdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_markdown__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ace_mode_mysql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ace/mode-mysql */ "./desktop/core/src/desktop/js/ext/ace/mode-mysql.js");
/* harmony import */ var _ace_mode_mysql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_mysql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ace_mode_pgsql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ace/mode-pgsql */ "./desktop/core/src/desktop/js/ext/ace/mode-pgsql.js");
/* harmony import */ var _ace_mode_pgsql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_pgsql__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ace_mode_phoenix__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ace/mode-phoenix */ "./desktop/core/src/desktop/js/ext/ace/mode-phoenix.js");
/* harmony import */ var _ace_mode_phoenix__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_phoenix__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ace_mode_presto__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ace/mode-presto */ "./desktop/core/src/desktop/js/ext/ace/mode-presto.js");
/* harmony import */ var _ace_mode_presto__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_presto__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ace_mode_solr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ace/mode-solr */ "./desktop/core/src/desktop/js/ext/ace/mode-solr.js");
/* harmony import */ var _ace_mode_solr__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_solr__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ace_mode_sparksql__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ace/mode-sparksql */ "./desktop/core/src/desktop/js/ext/ace/mode-sparksql.js");
/* harmony import */ var _ace_mode_sparksql__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_sparksql__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ace_mode_sql__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ace/mode-sql */ "./desktop/core/src/desktop/js/ext/ace/mode-sql.js");
/* harmony import */ var _ace_mode_sql__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_sql__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _ace_mode_text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ace/mode-text */ "./desktop/core/src/desktop/js/ext/ace/mode-text.js");
/* harmony import */ var _ace_mode_text__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_ace_mode_text__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _ace_snippets_bigquery__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ace/snippets/bigquery */ "./desktop/core/src/desktop/js/ext/ace/snippets/bigquery.js");
/* harmony import */ var _ace_snippets_bigquery__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_bigquery__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _ace_snippets_druid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ace/snippets/druid */ "./desktop/core/src/desktop/js/ext/ace/snippets/druid.js");
/* harmony import */ var _ace_snippets_druid__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_druid__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _ace_snippets_elasticsearch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ace/snippets/elasticsearch */ "./desktop/core/src/desktop/js/ext/ace/snippets/elasticsearch.js");
/* harmony import */ var _ace_snippets_elasticsearch__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_elasticsearch__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _ace_snippets_flink__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ace/snippets/flink */ "./desktop/core/src/desktop/js/ext/ace/snippets/flink.js");
/* harmony import */ var _ace_snippets_flink__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_flink__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _ace_snippets_hive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ace/snippets/hive */ "./desktop/core/src/desktop/js/ext/ace/snippets/hive.js");
/* harmony import */ var _ace_snippets_hive__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_hive__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _ace_snippets_hplsql__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ace/snippets/hplsql */ "./desktop/core/src/desktop/js/ext/ace/snippets/hplsql.js");
/* harmony import */ var _ace_snippets_hplsql__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_hplsql__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _ace_snippets_impala__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ace/snippets/impala */ "./desktop/core/src/desktop/js/ext/ace/snippets/impala.js");
/* harmony import */ var _ace_snippets_impala__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_impala__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _ace_snippets_ksql__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ace/snippets/ksql */ "./desktop/core/src/desktop/js/ext/ace/snippets/ksql.js");
/* harmony import */ var _ace_snippets_ksql__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_ksql__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _ace_snippets_markdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ace/snippets/markdown */ "./desktop/core/src/desktop/js/ext/ace/snippets/markdown.js");
/* harmony import */ var _ace_snippets_markdown__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_markdown__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _ace_snippets_mysql__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ace/snippets/mysql */ "./desktop/core/src/desktop/js/ext/ace/snippets/mysql.js");
/* harmony import */ var _ace_snippets_mysql__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_mysql__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _ace_snippets_pgsql__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ace/snippets/pgsql */ "./desktop/core/src/desktop/js/ext/ace/snippets/pgsql.js");
/* harmony import */ var _ace_snippets_pgsql__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_pgsql__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _ace_snippets_phoenix__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ace/snippets/phoenix */ "./desktop/core/src/desktop/js/ext/ace/snippets/phoenix.js");
/* harmony import */ var _ace_snippets_phoenix__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_phoenix__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _ace_snippets_presto__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ace/snippets/presto */ "./desktop/core/src/desktop/js/ext/ace/snippets/presto.js");
/* harmony import */ var _ace_snippets_presto__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_presto__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _ace_snippets_dasksql__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ace/snippets/dasksql */ "./desktop/core/src/desktop/js/ext/ace/snippets/dasksql.js");
/* harmony import */ var _ace_snippets_dasksql__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_dasksql__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _ace_snippets_solr__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ace/snippets/solr */ "./desktop/core/src/desktop/js/ext/ace/snippets/solr.js");
/* harmony import */ var _ace_snippets_solr__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_solr__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _ace_snippets_sql__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ace/snippets/sql */ "./desktop/core/src/desktop/js/ext/ace/snippets/sql.js");
/* harmony import */ var _ace_snippets_sql__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_sql__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _ace_snippets_text__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ace/snippets/text */ "./desktop/core/src/desktop/js/ext/ace/snippets/text.js");
/* harmony import */ var _ace_snippets_text__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_ace_snippets_text__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _ace_theme_hue__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ace/theme-hue */ "./desktop/core/src/desktop/js/ext/ace/theme-hue.js");
/* harmony import */ var _ace_theme_hue__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_ace_theme_hue__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _ace_theme_hue_dark__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ace/theme-hue_dark */ "./desktop/core/src/desktop/js/ext/ace/theme-hue_dark.js");
/* harmony import */ var _ace_theme_hue_dark__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_ace_theme_hue_dark__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _aceExtensions__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./aceExtensions */ "./desktop/core/src/desktop/js/ext/aceExtensions.js");
/* harmony import */ var _aceExtensions__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_aceExtensions__WEBPACK_IMPORTED_MODULE_41__);
// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// 'License'); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.











































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.ace);
var DIALECT_ACE_MODE_MAPPING = {
  'bigquery': 'ace/mode/bigquery',
  'druid': 'ace/mode/druid',
  'elasticsearch': 'ace/mode/elasticsearch',
  'flink': 'ace/mode/flink',
  'dasksql': 'ace/mode/dasksql',
  'hive': 'ace/mode/hive',
  'hplsql': 'ace/mode/hplsql',
  'impala': 'ace/mode/impala',
  'ksql': 'ace/mode/ksql',
  'mysql': 'ace/mode/mysql',
  'pgsq': 'ace/mode/pgsql',
  'phoenix': 'ace/mode/phoenix',
  'presto': 'ace/mode/presto',
  'solr': 'ace/mode/solr',
  'sql': 'ace/mode/sql'
};
var getAceMode = function getAceMode(dialect) {
  return dialect && DIALECT_ACE_MODE_MAPPING[dialect] || DIALECT_ACE_MODE_MAPPING.sql;
};

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-027ccb81-bundle-a2a4f8506cb55bb7.js.map