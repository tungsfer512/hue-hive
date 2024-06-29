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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-3528fb62"],{

/***/ "./desktop/core/src/desktop/js/hue.js":
/*!********************************************!*\
  !*** ./desktop/core/src/desktop/js/hue.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_publicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/publicPath */ "./desktop/core/src/desktop/js/utils/publicPath.js");
/* harmony import */ var _utils_publicPath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_publicPath__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jquery/jquery.common */ "./desktop/core/src/desktop/js/jquery/jquery.common.js");
/* harmony import */ var _ext_bootstrap_2_3_2_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ext/bootstrap.2.3.2.min */ "./desktop/core/src/desktop/js/ext/bootstrap.2.3.2.min.js");
/* harmony import */ var _ext_bootstrap_editable_1_5_1_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ext/bootstrap-editable.1.5.1.min */ "./desktop/core/src/desktop/js/ext/bootstrap-editable.1.5.1.min.js");
/* harmony import */ var _utils_d3Extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/d3Extensions */ "./desktop/core/src/desktop/js/utils/d3Extensions.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! filesize */ "./node_modules/filesize/lib/filesize.js");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nvd3_nv_all__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nvd3/nv.all */ "./desktop/core/src/desktop/js/nvd3/nv.all.js");
/* harmony import */ var page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! page */ "./node_modules/page/page.js");
/* harmony import */ var page__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(page__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ext_fileuploader_custom_new__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ext/fileuploader.custom.new */ "./desktop/core/src/desktop/js/ext/fileuploader.custom.new.js");
/* harmony import */ var _ext_fileuploader_custom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ext/fileuploader.custom */ "./desktop/core/src/desktop/js/ext/fileuploader.custom.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sprintf-js */ "./node_modules/sprintf-js/src/sprintf.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ko/ko.all */ "./desktop/core/src/desktop/js/ko/ko.all.js");
/* harmony import */ var _parse_parserTypeDefs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parse/parserTypeDefs */ "./desktop/core/src/desktop/js/parse/parserTypeDefs.js");
/* harmony import */ var _parse_parserTypeDefs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_parse_parserTypeDefs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils_customIntervals__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/customIntervals */ "./desktop/core/src/desktop/js/utils/customIntervals.js");
/* harmony import */ var _utils_customIntervals__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_utils_customIntervals__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/json.bigDataParse */ "./desktop/core/src/desktop/js/utils/json.bigDataParse.js");
/* harmony import */ var _utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! api/cancellableJqPromise */ "./desktop/core/src/desktop/js/api/cancellableJqPromise.ts");
/* harmony import */ var _doc_docSupport__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./doc/docSupport */ "./desktop/core/src/desktop/js/doc/docSupport.js");
/* harmony import */ var catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! catalog/contextCatalog */ "./desktop/core/src/desktop/js/catalog/contextCatalog.ts");
/* harmony import */ var catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! catalog/dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! utils/hueAnalytics */ "./desktop/core/src/desktop/js/utils/hueAnalytics.ts");
/* harmony import */ var _utils_hueColors__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/hueColors */ "./desktop/core/src/desktop/js/utils/hueColors.js");
/* harmony import */ var utils_hueDebug__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! utils/hueDebug */ "./desktop/core/src/desktop/js/utils/hueDebug.ts");
/* harmony import */ var _utils_hueDrop__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utils/hueDrop */ "./desktop/core/src/desktop/js/utils/hueDrop.js");
/* harmony import */ var _utils_hueGeo__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utils/hueGeo */ "./desktop/core/src/desktop/js/utils/hueGeo.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_hueUtils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! utils/hueUtils */ "./desktop/core/src/desktop/js/utils/hueUtils.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _utils_multiLineEllipsisHandler__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./utils/multiLineEllipsisHandler */ "./desktop/core/src/desktop/js/utils/multiLineEllipsisHandler.js");
/* harmony import */ var sql_sqlUtils__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! sql/sqlUtils */ "./desktop/core/src/desktop/js/sql/sqlUtils.ts");
/* harmony import */ var webComponents_HueIcons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! webComponents/HueIcons */ "./desktop/core/src/desktop/js/webComponents/HueIcons.ts");
/* harmony import */ var components_sidebar_HueSidebarWebComponent__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! components/sidebar/HueSidebarWebComponent */ "./desktop/core/src/desktop/js/components/sidebar/HueSidebarWebComponent.ts");
/* harmony import */ var components_assist_AssistPanelWebComponent__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! components/assist/AssistPanelWebComponent */ "./desktop/core/src/desktop/js/components/assist/AssistPanelWebComponent.ts");
/* harmony import */ var _ko_components_assist_assistViewModel__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ko/components/assist/assistViewModel */ "./desktop/core/src/desktop/js/ko/components/assist/assistViewModel.js");
/* harmony import */ var _ko_components_assist_events__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ko/components/assist/events */ "./desktop/core/src/desktop/js/ko/components/assist/events.js");
/* harmony import */ var _onePageViewModel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./onePageViewModel */ "./desktop/core/src/desktop/js/onePageViewModel.js");
/* harmony import */ var _sidePanelViewModel__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./sidePanelViewModel */ "./desktop/core/src/desktop/js/sidePanelViewModel.js");
/* harmony import */ var _topNavViewModel__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./topNavViewModel */ "./desktop/core/src/desktop/js/topNavViewModel.js");
/* harmony import */ var _apps_notebook_NotebookViewModel__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./apps/notebook/NotebookViewModel */ "./desktop/core/src/desktop/js/apps/notebook/NotebookViewModel.js");
/* harmony import */ var _utils_hdfsAutocompleter__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./utils/hdfsAutocompleter */ "./desktop/core/src/desktop/js/utils/hdfsAutocompleter.js");
/* harmony import */ var _sql_sqlAutocompleter__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./sql/sqlAutocompleter */ "./desktop/core/src/desktop/js/sql/sqlAutocompleter.js");
/* harmony import */ var _parse_sqlStatementsParser__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./parse/sqlStatementsParser */ "./desktop/core/src/desktop/js/parse/sqlStatementsParser.js");
/* harmony import */ var _parse_hplsqlStatementsParser__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./parse/hplsqlStatementsParser */ "./desktop/core/src/desktop/js/parse/hplsqlStatementsParser.js");
/* harmony import */ var _doc_hueFileEntry__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./doc/hueFileEntry */ "./desktop/core/src/desktop/js/doc/hueFileEntry.js");
/* harmony import */ var _doc_hueDocument__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./doc/hueDocument */ "./desktop/core/src/desktop/js/doc/hueDocument.js");
/* harmony import */ var config_hueConfig__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! config/hueConfig */ "./desktop/core/src/desktop/js/config/hueConfig.ts");
/* harmony import */ var _api_apiUtils__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./api/apiUtils */ "./desktop/core/src/desktop/js/api/apiUtils.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _reactComponents_createRootElements_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./reactComponents/createRootElements.js */ "./desktop/core/src/desktop/js/reactComponents/createRootElements.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
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














































// TODO: Remove from global scope
 // In history, indexer, importer, editor etc.


 // In search.ko and notebook.ko




 // In analytics.mako, metrics.mako, threads.mako
 // In hbase/templates/app.mako, jobsub.templates.js, search.ko.js, search.util.js



// TODO: Migrate away
window._ = (lodash__WEBPACK_IMPORTED_MODULE_3___default());
window.apiHelper = _api_apiHelper__WEBPACK_IMPORTED_MODULE_21__["default"];
window.simpleGet = _api_apiUtils__WEBPACK_IMPORTED_MODULE_52__.simpleGet;
window.CancellableJqPromise = api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_22__["default"];
window.contextCatalog = catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_24__["default"];
window.d3v3 = (d3v3__WEBPACK_IMPORTED_MODULE_8___default());
window.dataCatalog = catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_25__["default"];
window.DOCUMENT_TYPE_I18n = _doc_docSupport__WEBPACK_IMPORTED_MODULE_23__.DOCUMENT_TYPE_I18n;
window.DOCUMENT_TYPES = _doc_docSupport__WEBPACK_IMPORTED_MODULE_23__.DOCUMENT_TYPES;
window.Dropzone = (dropzone__WEBPACK_IMPORTED_MODULE_9___default());
window.NotebookViewModel = _apps_notebook_NotebookViewModel__WEBPACK_IMPORTED_MODULE_44__["default"];
window.filesize = (filesize__WEBPACK_IMPORTED_MODULE_10___default());
window.getLastKnownConfig = config_hueConfig__WEBPACK_IMPORTED_MODULE_51__.getLastKnownConfig;
window.HdfsAutocompleter = _utils_hdfsAutocompleter__WEBPACK_IMPORTED_MODULE_45__["default"];
window.hueAnalytics = utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_26__["default"];
window.HueColors = _utils_hueColors__WEBPACK_IMPORTED_MODULE_27__["default"];
window.hueDebug = utils_hueDebug__WEBPACK_IMPORTED_MODULE_28__["default"];
window.hueDebugAnalytics = false;
window.HueDocument = _doc_hueDocument__WEBPACK_IMPORTED_MODULE_50__["default"];
window.hueDrop = _utils_hueDrop__WEBPACK_IMPORTED_MODULE_29__["default"];
window.HueFileEntry = _doc_hueFileEntry__WEBPACK_IMPORTED_MODULE_49__["default"];
window.HueGeo = _utils_hueGeo__WEBPACK_IMPORTED_MODULE_30__["default"];
window.huePubSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__["default"];
window.hueUtils = utils_hueUtils__WEBPACK_IMPORTED_MODULE_32__["default"];
window.I18n = _utils_i18n__WEBPACK_IMPORTED_MODULE_33__["default"];
window.localforage = (localforage__WEBPACK_IMPORTED_MODULE_11___default());
window.MultiLineEllipsisHandler = _utils_multiLineEllipsisHandler__WEBPACK_IMPORTED_MODULE_34__["default"];
window.Mustache = (mustache__WEBPACK_IMPORTED_MODULE_53___default());
window.nv = _nvd3_nv_all__WEBPACK_IMPORTED_MODULE_12__["default"];
window.page = (page__WEBPACK_IMPORTED_MODULE_13___default());
window.qq = _ext_fileuploader_custom_new__WEBPACK_IMPORTED_MODULE_14__["default"];
window.fileuploader = _ext_fileuploader_custom__WEBPACK_IMPORTED_MODULE_15__["default"];
window.sprintf = (sprintf_js__WEBPACK_IMPORTED_MODULE_16___default());
window.SqlAutocompleter = _sql_sqlAutocompleter__WEBPACK_IMPORTED_MODULE_46__["default"];
window.sqlStatementsParser = _parse_sqlStatementsParser__WEBPACK_IMPORTED_MODULE_47__["default"];
window.hplsqlStatementsParser = _parse_hplsqlStatementsParser__WEBPACK_IMPORTED_MODULE_48__["default"];
window.sqlUtils = sql_sqlUtils__WEBPACK_IMPORTED_MODULE_35__["default"];
window.createReactComponents = _reactComponents_createRootElements_js__WEBPACK_IMPORTED_MODULE_54__.createReactComponents;
(0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var onePageViewModel, sidePanelViewModel, topNavViewModel, clickThrottle;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return (0,config_hueConfig__WEBPACK_IMPORTED_MODULE_51__.refreshConfig)();
      case 2:
        // Make sure we have config up front

        (0,_reactComponents_createRootElements_js__WEBPACK_IMPORTED_MODULE_54__.createReactComponents)('.main-page');
        onePageViewModel = new _onePageViewModel__WEBPACK_IMPORTED_MODULE_41__["default"]();
        _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__["default"].applyBindings(onePageViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])('.page-content')[0]);
        sidePanelViewModel = new _sidePanelViewModel__WEBPACK_IMPORTED_MODULE_42__["default"]();
        _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__["default"].applyBindings(sidePanelViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])('.left-panel')[0]);
        _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__["default"].applyBindings(sidePanelViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])('#leftResizer')[0]);
        _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__["default"].applyBindings(sidePanelViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])('.right-panel')[0]);
        if (!window.ENABLE_HUE_5) {
          _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__["default"].applyBindings(sidePanelViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])('.context-panel')[0]);
        }
        topNavViewModel = new _topNavViewModel__WEBPACK_IMPORTED_MODULE_43__["default"](onePageViewModel);
        _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__["default"].applyBindings(topNavViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])('.top-nav')[0]);
        (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])(document).on('hideHistoryModal', function (e) {
          (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])('#clearNotificationHistoryModal').modal('hide');
        });
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__["default"].subscribe('query.and.watch', function (query) {
          _jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"].post(query['url'], {
            format: 'json',
            sourceType: query['sourceType']
          }, function (resp) {
            if (resp.history_uuid) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__["default"].publish('open.editor.query', resp);
            } else if (resp.message) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_55__.GLOBAL_ERROR_TOPIC, {
                message: resp.message
              });
            }
          }).fail(function (xhr) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_55__.GLOBAL_ERROR_TOPIC, {
              message: xhr.responseText
            });
          });
        });
        clickThrottle = -1;
        (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])(window).click(function (e) {
          window.clearTimeout(clickThrottle);
          clickThrottle = window.setTimeout(function () {
            if ((0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target).parents('.navbar-default').length > 0 && (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target).closest('.history-panel').length === 0 && (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target).closest('.btn-toggle-jobs-panel').length === 0 && (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target).closest('.hamburger-hue').length === 0 && (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])('.jobs-panel').is(':visible')) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__["default"].publish('hide.jobs.panel');
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__["default"].publish('hide.history.panel');
            }
          }, 10);
        });
        (0,utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_26__.setupGlobalListenersForAnalytics)();
        (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__["default"])('.page-content').jHueScrollUp();
      case 18:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));

// Framework independent global keyboard shortcuts
document.addEventListener('keydown', function (e) {
  if (e.key === '.' && (e.metaKey || e.ctrlKey)) {
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__["default"].publish(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_40__.BOTH_ASSIST_TOGGLE_EVENT);
  }
});

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-3528fb62-bundle-a2a4f8506cb55bb7.js.map