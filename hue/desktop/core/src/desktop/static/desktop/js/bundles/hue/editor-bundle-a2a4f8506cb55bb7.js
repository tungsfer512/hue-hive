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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["editor"],{

/***/ "./desktop/core/src/desktop/js/apps/editor/EditorViewModel.js":
/*!********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/editor/EditorViewModel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditorViewModel)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout.mapping */ "./node_modules/knockout.mapping/knockout.mapping.js");
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout_mapping__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./desktop/core/src/desktop/js/apps/editor/events.js");
/* harmony import */ var _notebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notebook */ "./desktop/core/src/desktop/js/apps/editor/notebook.js");
/* harmony import */ var _notebook_chartTransformers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notebook/chartTransformers */ "./desktop/core/src/desktop/js/apps/notebook/chartTransformers.js");
/* harmony import */ var config_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! config/events */ "./desktop/core/src/desktop/js/config/events.ts");
/* harmony import */ var config_hueConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! config/hueConfig */ "./desktop/core/src/desktop/js/config/hueConfig.ts");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
/* harmony import */ var utils_string_UUID__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/string/UUID */ "./desktop/core/src/desktop/js/utils/string/UUID.ts");
/* harmony import */ var utils_url_changeURL__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/url/changeURL */ "./desktop/core/src/desktop/js/utils/url/changeURL.ts");
/* harmony import */ var utils_url_changeURLParameter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/url/changeURLParameter */ "./desktop/core/src/desktop/js/utils/url/changeURLParameter.ts");
/* harmony import */ var utils_url_getParameter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/url/getParameter */ "./desktop/core/src/desktop/js/utils/url/getParameter.ts");
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

















var EditorViewModel = /*#__PURE__*/function () {
  function EditorViewModel(options, CoordinatorEditorViewModel, RunningCoordinatorModel) {
    var _this = this;
    _classCallCheck(this, EditorViewModel);
    // eslint-disable-next-line no-restricted-syntax
    console.log('Editor v2 enabled.');
    this.snippetViewSettings = options.snippetViewSettings;
    this.URLS = {
      editor: '/hue/editor',
      notebook: '/hue/notebook',
      report: '/hue/dashboard/new_search?engine=report'
    };
    this.huePubSubId = options.huePubSubId || 'editor';
    this.user = options.user;
    this.userId = options.userId;
    this.suffix = options.suffix;
    this.isNotificationManager = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(!!options.is_notification_manager);
    this.selectedNotebook = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.firstSnippet = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.selectedNotebook() && _this.selectedNotebook().snippets()[0];
    });
    this.editorMode = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.mode === 'editor');
    this.config = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.sharingEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.config() && (_this.config().hue_config.is_admin || _this.config().hue_config.enable_sharing);
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish(config_events__WEBPACK_IMPORTED_MODULE_7__.GET_KNOWN_CONFIG_TOPIC, this.config);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe(config_events__WEBPACK_IMPORTED_MODULE_7__.CONFIG_REFRESHED_TOPIC, this.config);
    this.activeConnector = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      if (_this.editorMode()) {
        var snippet = _this.getActiveSnippet();
        if (snippet) {
          if (!snippet.connector()) {
            console.warn('Snippet connector is empty');
          }
          return snippet.connector();
        }
      } else if (_this.config() && _this.config().app_config && _this.config().app_config.editor) {
        var interpreters = _this.config().app_config.editor.interpreters;
        return interpreters.find(function (interpreter) {
          return interpreter.dialect === 'notebook';
        });
      }
    });
    this.editorType = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.activeConnector() && _this.activeConnector().id;
    });
    this.editorTitle = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.activeConnector() && _this.activeConnector().displayName;
    });
    this.editorIcon = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      var _this$activeConnector;
      var dialect = (_this$activeConnector = _this.activeConnector()) === null || _this$activeConnector === void 0 ? void 0 : _this$activeConnector.dialect;
      return window.ENABLE_UNIFIED_ANALYTICS && dialect === 'hive' ? 'impala' : dialect || _this.editorType();
    });
    this.activeConnector.subscribe(function (connector) {
      if (connector) {
        if ((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_15__["default"])('type') !== connector.id) {
          (0,utils_url_changeURLParameter__WEBPACK_IMPORTED_MODULE_14__["default"])('type', connector.id);
        }
        _this.notifyDialectChange(connector.dialect, connector.is_sql);
      }
    });
    this.lastNotifiedDialect = undefined;
    this.combinedContent = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.isPresentationModeEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.selectedNotebook() && _this.selectedNotebook().snippets().length === 1 && _this.selectedNotebook().snippets()[0].isSqlDialect();
    });
    this.bottomExpanded = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.topExpanded = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.bottomExpanded.subscribe(function (newVal) {
      if (newVal) {
        if (_this.topExpanded()) {
          _this.topExpanded(false);
        }
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('both.assists.hide', true);
      } else {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('both.assists.revert', true);
      }
    });
    this.topExpanded.subscribe(function (newVal) {
      if (newVal) {
        if (_this.bottomExpanded()) {
          _this.bottomExpanded(false);
        }
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('left.assist.hide', true);
      } else {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('both.assists.revert', true);
      }
    });
    this.isPresentationMode = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.selectedNotebook() && _this.selectedNotebook().isPresentationMode();
    });
    this.isHidingCode = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.selectedNotebook() && _this.selectedNotebook().isHidingCode();
    });
    this.successUrl = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.success_url); // Deprecated
    this.isSqlAnalyzerEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.is_optimizer_enabled);
    this.isNavigatorEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.is_navigator_enabled);
    this.CoordinatorEditorViewModel = CoordinatorEditorViewModel; // TODO: Remove usage of global variables
    this.RunningCoordinatorModel = RunningCoordinatorModel; // TODO: Remove usage of global variables

    // Saved query or history but history coming from a saved query
    this.canSave = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.selectedNotebook() && _this.selectedNotebook().canWrite() && (_this.selectedNotebook().isSaved() || _this.selectedNotebook().isHistory() && _this.selectedNotebook().parentSavedQueryUuid());
    });
    this.ChartTransformers = _notebook_chartTransformers__WEBPACK_IMPORTED_MODULE_6__["default"];
    this.isEditing = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.isEditing.subscribe(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('editingToggled');
    });
    this.assistAvailable = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.assistAvailable);
    this.assistWithoutStorage = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.isLeftPanelVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_11__.getFromLocalStorage)('assist.assist_panel_visible', true));
    this.isLeftPanelVisible.subscribe(function (val) {
      if (!_this.assistWithoutStorage()) {
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_11__.setInLocalStorage)('assist.assist_panel_visible', val);
      }
    });
    this.isRightPanelAvailable = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.assistAvailable && window.HAS_SQL_ANALYZER);
    this.isRightPanelVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_11__.getFromLocalStorage)('assist.right_assist_panel_visible', true));
    this.isRightPanelVisible.subscribe(function (val) {
      if (!_this.assistWithoutStorage()) {
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_11__.setInLocalStorage)('assist.right_assist_panel_visible', val);
      }
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe('assist.highlight.risk.suggestions', function () {
      if (_this.isRightPanelAvailable() && !_this.isRightPanelVisible()) {
        _this.isRightPanelVisible(true);
      }
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe(_events__WEBPACK_IMPORTED_MODULE_4__.GET_ACTIVE_SNIPPET_CONNECTOR_EVENT, function (callback) {
      _this.withActiveSnippet(function (activeSnippet) {
        callback(activeSnippet.connector());
      });
    }, this.huePubSubId);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe('save.snippet.to.file', function () {
      _this.withActiveSnippet(function (activeSnippet) {
        var data = {
          path: activeSnippet.statementPath(),
          contents: activeSnippet.statement()
        };
        var options = {
          successCallback: function successCallback(result) {
            if (result && result.exists) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_9__.GLOBAL_INFO_TOPIC, {
                message: result.path + ' saved successfully.'
              });
            }
          }
        };
        _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].saveSnippetToFile(data, options);
      });
    }, this.huePubSubId);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe('sql.context.pin', function (contextData) {
      _this.withActiveSnippet(function (activeSnippet) {
        contextData.tabId = 'context' + activeSnippet.pinnedContextTabs().length;
        activeSnippet.pinnedContextTabs.push(contextData);
        activeSnippet.currentQueryTab(contextData.tabId);
      });
    }, this.huePubSubId);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe('assist.database.set', function (entry) {
      _this.withActiveSnippet(function (activeSnippet) {
        activeSnippet.handleAssistSelection(entry);
      });
    }, this.huePubSubId);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe('assist.database.selected', function (entry) {
      _this.withActiveSnippet(function (activeSnippet) {
        activeSnippet.handleAssistSelection(entry);
      });
    }, this.huePubSubId);
    this.availableSnippets = knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(options.languages);
  }
  return _createClass(EditorViewModel, [{
    key: "changeURL",
    value: function changeURL(url) {
      if (!this.isNotificationManager()) {
        (0,utils_url_changeURL__WEBPACK_IMPORTED_MODULE_13__["default"])(url);
      }
    }
  }, {
    key: "displayCombinedContent",
    value: function displayCombinedContent() {
      if (!this.selectedNotebook()) {
        this.combinedContent('');
      } else {
        var statements = '';
        this.selectedNotebook().snippets().forEach(function (snippet) {
          if (snippet.statement()) {
            if (statements) {
              statements += '\n\n';
            }
            statements += snippet.statement();
          }
        });
        this.combinedContent(statements);
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#editorCombinedContentModal').modal('show');
    }
  }, {
    key: "getSnippetName",
    value: function getSnippetName(snippetType) {
      var availableSnippets = this.availableSnippets();
      for (var i = 0; i < availableSnippets.length; i++) {
        if (availableSnippets[i].dialect() === snippetType) {
          return availableSnippets[i].name();
        }
      }
      return '';
    }
  }, {
    key: "getSnippetViewSettings",
    value: function getSnippetViewSettings(snippetType) {
      if (this.snippetViewSettings[snippetType]) {
        return this.snippetViewSettings[snippetType];
      }
      return this.snippetViewSettings["default"];
    }
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var editorId;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              editorId = (0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_15__["default"])('editor');
              if (!editorId) {
                _context.next = 6;
                break;
              }
              _context.next = 4;
              return this.openNotebook(editorId);
            case 4:
              _context.next = 18;
              break;
            case 6:
              if (!((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_15__["default"])('gist') !== '' || (0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_15__["default"])('type') !== '')) {
                _context.next = 11;
                break;
              }
              _context.next = 9;
              return this.newNotebook((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_15__["default"])('type'));
            case 9:
              _context.next = 18;
              break;
            case 11:
              if (!((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_15__["default"])('editor') !== '')) {
                _context.next = 16;
                break;
              }
              _context.next = 14;
              return this.openNotebook((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_15__["default"])('editor'));
            case 14:
              _context.next = 18;
              break;
            case 16:
              _context.next = 18;
              return this.newNotebook();
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "loadNotebook",
    value: function loadNotebook(notebookRaw, queryTab) {
      var notebook = new _notebook__WEBPACK_IMPORTED_MODULE_5__["default"](this, notebookRaw);
      if (notebook.snippets().length > 0) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('detach.scrolls', notebook.snippets()[0]);
        notebook.selectedSnippet(notebook.snippets()[notebook.snippets().length - 1].dialect());
        notebook.snippets().forEach(function (snippet) {
          snippet.aceAutoExpand = false;
          snippet.statement_raw.valueHasMutated();
        });
        if (queryTab) {
          notebook.snippets()[0].currentQueryTab(queryTab);
        }
        if (notebook.isSaved()) {
          notebook.snippets()[0].currentQueryTab('savedQueries');
        }
      }
      this.selectedNotebook(notebook);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('check.job.browser');
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('recalculate.name.description.width');
    }
  }, {
    key: "newNotebook",
    value: function () {
      var _newNotebook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(connectorId, callback, queryTab, blank) {
        var _this2 = this;
        var connector, connectors;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!connectorId) {
                connectorId = (0,config_hueConfig__WEBPACK_IMPORTED_MODULE_8__.getLastKnownConfig)().default_sql_interpreter;
              }
              if (connectorId) {
                connector = (0,config_hueConfig__WEBPACK_IMPORTED_MODULE_8__.findEditorConnector)(function (connector) {
                  return connector.id === connectorId;
                });
              } else {
                connectors = (0,config_hueConfig__WEBPACK_IMPORTED_MODULE_8__.getLastKnownConfig)().app_config.editor.interpreters;
                if (connectors.length) {
                  connector = connectors[0];
                }
              }
              if (!connector) {
                console.warn('No connector found for ID ' + connectorId);
              } else {
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_4__.ACTIVE_SNIPPET_CONNECTOR_CHANGED_EVENT, connector);
              }
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/notebook/api/create_notebook', {
                  type: connectorId,
                  directory_uuid: (0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_15__["default"])('directory_uuid'),
                  gist: _this2.isNotificationManager() ? undefined : (0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_15__["default"])('gist'),
                  blank: typeof blank !== 'undefined'
                }).then(function (data) {
                  _this2.loadNotebook(data.notebook);
                  if (_this2.editorMode() && !_this2.isNotificationManager()) {
                    var snippet = _this2.selectedNotebook().snippets().length === 0 ? _this2.selectedNotebook().newSnippet(connectorId) : _this2.selectedNotebook().snippets()[0];
                    if (queryTab && ['queryHistory', 'savedQueries', 'queryBuilderTab'].indexOf(queryTab) > -1) {
                      snippet.currentQueryTab(queryTab);
                    }
                    utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('detach.scrolls', _this2.selectedNotebook().snippets()[0]);
                  }
                  if (callback) {
                    callback();
                  }
                  resolve();
                })["catch"](reject);
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function newNotebook(_x, _x2, _x3, _x4) {
        return _newNotebook.apply(this, arguments);
      }
      return newNotebook;
    }()
  }, {
    key: "openNotebook",
    value: function () {
      var _openNotebook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(uuid, queryTab, skipUrlChange, callback) {
        var docData, notebookRaw;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].fetchDocumentAsync({
                uuid: uuid,
                fetchContents: true,
                dependencies: true
              });
            case 3:
              docData = _context3.sent;
              docData.data.dependents = docData.dependents;
              docData.data.can_write = docData.user_perms.can_write;
              notebookRaw = docData.data;
              this.loadNotebook(notebookRaw, queryTab);
              if (typeof skipUrlChange === 'undefined' && !this.isNotificationManager()) {
                if (this.editorMode()) {
                  if (!this.editorType()) {
                    console.warn('Snippet connector type or dialect is empty');
                  }
                  this.changeURL(this.URLS.editor + '?editor=' + docData.document.id + '&type=' + this.editorType());
                } else {
                  this.changeURL(this.URLS.notebook + '?notebook=' + docData.document.id);
                }
              }
              if (callback) {
                callback();
              }
              _context3.next = 17;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);
              _context3.next = 17;
              return this.newNotebook();
            case 17:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 12]]);
      }));
      function openNotebook(_x5, _x6, _x7, _x8) {
        return _openNotebook.apply(this, arguments);
      }
      return openNotebook;
    }()
  }, {
    key: "notifyDialectChange",
    value: function notifyDialectChange(dialect) {
      if (dialect && this.lastNotifiedDialect !== dialect) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_4__.ACTIVE_SNIPPET_CONNECTOR_CHANGED_EVENT, this.activeConnector());
        this.lastNotifiedDialect = dialect;
      }
    }
  }, {
    key: "prepareShareModal",
    value: function prepareShareModal() {
      var selectedNotebookUuid = this.selectedNotebook() && this.selectedNotebook().uuid();
      if (selectedNotebookUuid) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('doc.show.share.modal', selectedNotebookUuid);
      }
    }
  }, {
    key: "saveAsNotebook",
    value: function saveAsNotebook() {
      this.selectedNotebook().id(null);
      this.selectedNotebook().uuid((0,utils_string_UUID__WEBPACK_IMPORTED_MODULE_12__["default"])());
      this.selectedNotebook().parentSavedQueryUuid(null);
      this.selectedNotebook().save(function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('assist.document.refresh');
      });
    }
  }, {
    key: "saveNotebook",
    value: function () {
      var _saveNotebook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.selectedNotebook().save();
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function saveNotebook() {
        return _saveNotebook.apply(this, arguments);
      }
      return saveNotebook;
    }()
  }, {
    key: "showContextPopover",
    value: function showContextPopover(field, event) {
      var $source = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target && event.target.nodeName !== 'A' ? event.target.parentElement : event.target);
      var offset = $source.offset();
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('context.popover.show', {
        data: {
          type: 'catalogEntry',
          catalogEntry: field.catalogEntry
        },
        onSampleClick: field.value,
        showInAssistEnabled: true,
        sourceType: this.editorType(),
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
    }
  }, {
    key: "showSessionPanel",
    value: function showSessionPanel() {
      this.withActiveSnippet(function (snippet) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('session.panel.show', snippet.dialect());
      }, function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('session.panel.show');
      });
    }
  }, {
    key: "getActiveSnippet",
    value: function getActiveSnippet() {
      var notebook = this.selectedNotebook();
      var foundSnippet;
      if (notebook) {
        if (notebook.snippets().length === 1) {
          foundSnippet = notebook.snippets()[0];
        } else {
          notebook.snippets().some(function (snippet) {
            if (snippet.inFocus()) {
              foundSnippet = snippet;
              return true;
            }
          });
        }
      }
      return foundSnippet;
    }
  }, {
    key: "withActiveSnippet",
    value: function withActiveSnippet(callback, notFoundCallback) {
      var foundSnippet = this.getActiveSnippet();
      if (foundSnippet) {
        callback(foundSnippet);
      } else if (notFoundCallback) {
        notFoundCallback();
      }
    }
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/editor/app.js":
/*!********************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/editor/app.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/lib/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_mousewheel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-mousewheel */ "./node_modules/jquery-mousewheel/jquery.mousewheel.js");
/* harmony import */ var jquery_mousewheel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_mousewheel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ext_bootstrap_datepicker_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ext/bootstrap-datepicker.min */ "./desktop/core/src/desktop/js/ext/bootstrap-datepicker.min.js");
/* harmony import */ var _ext_jquery_hotkeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ext/jquery.hotkeys */ "./desktop/core/src/desktop/js/ext/jquery.hotkeys.js");
/* harmony import */ var _jquery_plugins_jquery_hdfstree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../jquery/plugins/jquery.hdfstree */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.hdfstree.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var sql_workers_hueWorkerHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sql/workers/hueWorkerHandler */ "./desktop/core/src/desktop/js/sql/workers/hueWorkerHandler.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var utils_screen_scrollbarWidth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/screen/scrollbarWidth */ "./desktop/core/src/desktop/js/utils/screen/scrollbarWidth.ts");
/* harmony import */ var utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/timing/waitForRendered */ "./desktop/core/src/desktop/js/utils/timing/waitForRendered.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./events */ "./desktop/core/src/desktop/js/apps/editor/events.js");
/* harmony import */ var _EditorViewModel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EditorViewModel */ "./desktop/core/src/desktop/js/apps/editor/EditorViewModel.js");
/* harmony import */ var _snippet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./snippet */ "./desktop/core/src/desktop/js/apps/editor/snippet.js");
/* harmony import */ var _ko_components_assist_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ko/components/assist/events */ "./desktop/core/src/desktop/js/ko/components/assist/events.js");
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


















window.Clipboard = (clipboard__WEBPACK_IMPORTED_MODULE_2___default());
var HUE_PUB_SUB_EDITOR_ID = 'editor';
utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('app.dom.loaded', function (app) {
  if (app === 'editor') {
    window.MAIN_SCROLLABLE = '.page-content';
    var isLeftNavOpen = false;
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('left.nav.open.toggle', function (val) {
      isLeftNavOpen = val;
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('split.panel.resized', function () {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('recalculate.name.description.width');
    }, HUE_PUB_SUB_EDITOR_ID);
    var showHoverMsg = function showHoverMsg(e) {
      var dt = null;
      if (e) {
        dt = e.dataTransfer;
      }
      if (!isLeftNavOpen && (!dt || dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') !== -1 : dt.types.contains('Files')))) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverMsg').removeClass('hide');
      }
    };
    var hideHoverMsg = function hideHoverMsg(vm) {
      if (vm.editorMode()) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverText').html((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_10__["default"])('Drop a SQL file here'));
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverText').html((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_10__["default"])('Drop iPython/Zeppelin notebooks here'));
      }
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverMsg').addClass('hide');
    };
    if (knockout__WEBPACK_IMPORTED_MODULE_0__.options) {
      knockout__WEBPACK_IMPORTED_MODULE_0__.options.deferUpdates = true;
    }
    var viewModel;
    var replaceAce = function replaceAce(content) {
      var snip = viewModel.selectedNotebook().snippets()[0];
      if (snip) {
        snip.statement_raw(content);
        snip.result.statements_count(1);
        snip.ace().setValue(content, 1);
        snip.result.statement_range({
          start: {
            row: 0,
            column: 0
          },
          end: {
            row: 0,
            column: 0
          }
        });
        snip.ace()._emit('focus');
      }
      hideHoverMsg(viewModel);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.REDRAW_FIXED_HEADERS_EVENT);
    };
    window.replaceAce = replaceAce;

    // Drag and drop iPython / Zeppelin notebooks
    if (window.FileReader) {
      var aceChecks = 0;
      var addAce = function addAce(content, snippetType) {
        var snip = viewModel.selectedNotebook().addSnippet({
          type: snippetType,
          result: {}
        }, true);
        snip.statement_raw(content);
        aceChecks++;
        snip.checkForAce = window.setInterval(function () {
          if (snip.ace()) {
            window.clearInterval(snip.checkForAce);
            aceChecks--;
            if (aceChecks === 0) {
              hideHoverMsg(viewModel);
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.REDRAW_FIXED_HEADERS_EVENT);
            }
          }
        }, 100);
      };
      var addMarkdown = function addMarkdown(content) {
        var snip = viewModel.selectedNotebook().addSnippet({
          type: 'markdown',
          result: {}
        }, true);
        snip.statement_raw(content);
      };
      var addPySpark = function addPySpark(content) {
        addAce(content, 'pyspark');
      };
      var addSql = function addSql(content) {
        addAce(content, 'hive');
      };
      var addScala = function addScala(content) {
        addAce(content, 'spark');
      };
      var parseExternalJSON = function parseExternalJSON(raw) {
        try {
          if (viewModel.editorMode()) {
            replaceAce(raw);
          } else {
            var loaded = typeof raw == 'string' ? JSON.parse(raw) : raw;
            if (loaded.nbformat) {
              //ipython
              var cells = [];
              if (loaded.nbformat === 3) {
                cells = loaded.worksheets[0].cells;
              } else if (loaded.nbformat === 4) {
                cells = loaded.cells;
              }
              cells.forEach(function (cell, cellCnt) {
                window.setTimeout(function () {
                  if (cell.cell_type === 'code') {
                    if (loaded.nbformat === 3) {
                      addPySpark(jquery__WEBPACK_IMPORTED_MODULE_1___default().isArray(cell.input) ? cell.input.join('') : cell.input);
                    } else {
                      addPySpark(jquery__WEBPACK_IMPORTED_MODULE_1___default().isArray(cell.source) ? cell.source.join('') : cell.source);
                    }
                  }
                  if (cell.cell_type === 'heading') {
                    var heading = jquery__WEBPACK_IMPORTED_MODULE_1___default().isArray(cell.source) ? cell.source.join('') : cell.source;
                    if (cell.level === 1) {
                      heading += '\n====================';
                    } else if (cell.level === 2) {
                      heading += '\n--------------------';
                    } else {
                      heading = '### ' + heading;
                    }
                    addMarkdown(heading);
                  }
                  if (cell.cell_type === 'markdown') {
                    addMarkdown(jquery__WEBPACK_IMPORTED_MODULE_1___default().isArray(cell.source) ? cell.source.join('') : cell.source);
                  }
                  if (cellCnt === cells.length - 1 && aceChecks === 0) {
                    hideHoverMsg(viewModel);
                  }
                }, 10);
              });
            }
            if (loaded.paragraphs) {
              //zeppelin
              if (loaded.name) {
                viewModel.selectedNotebook().name(loaded.name);
              }
              loaded.paragraphs.forEach(function (paragraph) {
                if (paragraph.text) {
                  var content = paragraph.text.split('\n');
                  if (content[0].indexOf('%md') > -1) {
                    content.shift();
                    addMarkdown(content.join('\n'));
                  } else if (content[0].indexOf('%sql') > -1 || content[0].indexOf('%hive') > -1) {
                    content.shift();
                    addSql(content.join('\n'));
                  } else if (content[0].indexOf('%pyspark') > -1) {
                    content.shift();
                    addPySpark(content.join('\n'));
                  } else {
                    if (content[0].indexOf('%spark') > -1) {
                      content.shift();
                    }
                    addScala(content.join('\n'));
                  }
                }
              });
            }
          }
        } catch (e) {
          hideHoverMsg(viewModel);
          replaceAce(raw);
        }
      };
      var handleFileSelect = function handleFileSelect(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        var dt = evt.dataTransfer;
        var files = dt.files;
        if (files.length > 0) {
          showHoverMsg();
        } else {
          hideHoverMsg(viewModel);
        }
        for (var i = 0, f; f = files[i]; i++) {
          var reader = new FileReader();
          reader.onload = function (file) {
            return function (e) {
              jquery__WEBPACK_IMPORTED_MODULE_1___default()('.hoverText').html("<i class='fa fa-spinner fa-spin'></i>");
              parseExternalJSON(e.target.result);
            };
          }(f);
          reader.readAsText(f);
        }
      };
      var handleDragOver = function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
      };
      var dropZone = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window.EDITOR_BINDABLE_ELEMENT)[0];
      dropZone.addEventListener('dragenter', showHoverMsg, false);
      dropZone.addEventListener('dragover', handleDragOver, false);
      dropZone.addEventListener('drop', handleFileSelect, false);
      var isDraggingOverText = false;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverText').on('dragenter', function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        isDraggingOverText = true;
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverText').on('dragleave', function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        isDraggingOverText = false;
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverMsg').on('dragleave', function (e) {
        if (!isDraggingOverText) {
          hideHoverMsg(viewModel);
        }
      });
    }
    if (window.EDITOR_ENABLE_QUERY_SCHEDULING) {
      viewModel = new _EditorViewModel__WEBPACK_IMPORTED_MODULE_14__["default"](window.EDITOR_VIEW_MODEL_OPTIONS, window.CoordinatorEditorViewModel, window.RunningCoordinatorModel);
    } else {
      viewModel = new _EditorViewModel__WEBPACK_IMPORTED_MODULE_14__["default"](window.EDITOR_VIEW_MODEL_OPTIONS);
    }
    knockout__WEBPACK_IMPORTED_MODULE_0__.applyBindings(viewModel, jquery__WEBPACK_IMPORTED_MODULE_1___default()(window.EDITOR_BINDABLE_ELEMENT)[0]);
    viewModel.init();
    (0,sql_workers_hueWorkerHandler__WEBPACK_IMPORTED_MODULE_8__.registerHueWorkers)();
    viewModel.selectedNotebook.subscribe(function (newVal) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('selected.notebook.changed', newVal);
    });
    var wasBottomExpanded = false;
    var isAssistAvailable = viewModel.assistAvailable();
    var wasLeftPanelVisible = viewModel.isLeftPanelVisible();
    var wasRightPanelVisible = viewModel.isRightPanelVisible();
    var exitPlayerMode = function exitPlayerMode() {
      if (!wasBottomExpanded) {
        viewModel.selectedNotebook().isPresentationMode(false);
      } else {
        viewModel.bottomExpanded(false);
      }
      wasBottomExpanded = false;
    };
    viewModel.isLeftPanelVisible.subscribe(function (value) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.REDRAW_FIXED_HEADERS_EVENT);
    });
    var ignoreNextUnload = false;
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe(_events__WEBPACK_IMPORTED_MODULE_13__.IGNORE_NEXT_UNLOAD_EVENT, function () {
      ignoreNextUnload = true;
    });

    // Close the notebook snippets when leaving the page
    window.onbeforeunload = function (e) {
      if (ignoreNextUnload) {
        ignoreNextUnload = false;
        return;
      }
      if (!viewModel.selectedNotebook().avoidClosing) {
        viewModel.selectedNotebook().close();
      }
    };
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).data('beforeunload', window.onbeforeunload);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.preview-sample').css('right', 10 + (0,utils_screen_scrollbarWidth__WEBPACK_IMPORTED_MODULE_11__["default"])() + 'px');
    var saveKeyHandler = function saveKeyHandler() {
      if (viewModel.canSave()) {
        viewModel.saveNotebook();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editorSaveAsModal').modal('show');
      }
    };
    var newKeyHandler = function newKeyHandler() {
      if (!viewModel.editorMode()) {
        viewModel.selectedNotebook().newSnippet();
      } else {
        viewModel.newNotebook(viewModel.editorType(), null, viewModel.selectedNotebook() ? viewModel.selectedNotebook().snippets()[0].currentQueryTab() : null);
      }
    };
    var initKeydownBindings = function initKeydownBindings() {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).bind('keydown.editor', 'ctrl+s alt+s meta+s', function (e) {
        e.preventDefault();
        saveKeyHandler();
        return false;
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).bind('keydown.editor', 'ctrl+shift+p alt+shift+p meta+shift+p', function (e) {
        e.preventDefault();
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('editor.presentation.toggle');
        return false;
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).bind('keydown.editor', 'ctrl+e alt+e meta+e', function (e) {
        e.preventDefault();
        newKeyHandler();
        return false;
      });
    };
    if (document.location.href.indexOf('editor') >= 0) {
      initKeydownBindings();
    }
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).bind('keyup', function (e) {
      if (e.keyCode === 191 && e.shiftKey && !jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).is('input') && !jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).is('textarea')) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#helpModal' + window.EDITOR_SUFFIX).modal('show');
      }
      if (e.keyCode === 191 && !e.shiftKey && !jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).is('input') && !jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).is('textarea')) {
        if (viewModel.editorMode() && viewModel.selectedNotebook().snippets()[0].currentQueryTab() === 'queryResults') {
          e.preventDefault();
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.SHOW_GRID_SEARCH_EVENT);
          return false;
        }
      }
    });
    var initialResizePosition = 100;
    var draggableHelper = function draggableHelper(el, e, ui, setSize) {
      var _snippet = knockout__WEBPACK_IMPORTED_MODULE_0__.dataFor(el.parents('.snippet')[0]);
      var _cm = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#snippet_' + _snippet.id()).data('editor');
      var _newSize = _snippet.aceSize() + (ui.offset.top - initialResizePosition);
      _cm.setSize('99%', _newSize);
      if (setSize) {
        _snippet.aceSize(_newSize);
      }
    };
    var getDraggableOptions = function getDraggableOptions(minY) {
      return {
        axis: 'y',
        start: function start(e, ui) {
          initialResizePosition = ui.offset.top;
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.HIDE_FIXED_HEADERS_EVENT);
        },
        drag: function drag(e, ui) {
          draggableHelper(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this), e, ui);
        },
        stop: function stop(e, ui) {
          draggableHelper(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this), e, ui, true);
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.REDRAW_FIXED_HEADERS_EVENT);
          ui.helper.first().removeAttr('style');
        },
        containment: [0, minY, 4000, minY + 400]
      };
    };
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.resize-panel a').each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).draggable(getDraggableOptions(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.snippet').offset().top + 128));
    });

    // ======== PubSub ========

    var splitDraggableTimeout = -1;
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('split.draggable.position', function () {
      window.clearTimeout(splitDraggableTimeout);
      splitDraggableTimeout = window.setTimeout(function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.REDRAW_FIXED_HEADERS_EVENT);
      }, 200);
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('app.gained.focus', function (app) {
      if (app === 'editor') {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.REDRAW_FIXED_HEADERS_EVENT);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('hue.scrollleft.show');
        viewModel.notifyDialectChange(viewModel.editorType(), viewModel.getSnippetViewSettings(viewModel.editorType()).sqlDialect);
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('current.query.tab.switched', function (tab) {
      if (tab !== 'queryResults') {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.hue-datatable-search').hide();
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('editor.create.new', newKeyHandler, HUE_PUB_SUB_EDITOR_ID);
    if (viewModel.isSqlAnalyzerEnabled()) {
      if (window.SQL_ANALYZER_AUTO_UPLOAD_QUERIES) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('editor.upload.query', function (query_id) {
          viewModel.selectedNotebook().snippets()[0].uploadQuery(query_id);
        }, HUE_PUB_SUB_EDITOR_ID);
      }
      if (window.SQL_ANALYZER_AUTO_UPLOAD_DDL) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('editor.upload.table.stats', function (options) {
          viewModel.selectedNotebook().snippets()[0].uploadTableStats(options);
        }, HUE_PUB_SUB_EDITOR_ID);
      }
      if (window.SQL_ANALYZER_QUERY_HISTORY_UPLOAD_LIMIT !== 0) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('editor.upload.history', function () {
          viewModel.selectedNotebook().snippets()[0].uploadQueryHistory(5);
        }, HUE_PUB_SUB_EDITOR_ID);
      }
    }
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('get.selected.notebook', function () {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('set.selected.notebook', viewModel.selectedNotebook());
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_16__.SHOW_LEFT_ASSIST_EVENT, function () {
      if (!viewModel.isLeftPanelVisible() && viewModel.assistAvailable()) {
        viewModel.isLeftPanelVisible(true);
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('assist.set.manual.visibility', function () {
      wasLeftPanelVisible = viewModel.isLeftPanelVisible();
      wasRightPanelVisible = viewModel.isRightPanelVisible();
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('editor.presentation.operate.toggle', function (value) {
      viewModel.isEditing(!viewModel.isEditing());
      if (value) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.HIDE_GLOBAL_ALERTS_TOPIC);
        isAssistAvailable = viewModel.assistAvailable();
        wasLeftPanelVisible = viewModel.isLeftPanelVisible();
        wasRightPanelVisible = viewModel.isRightPanelVisible();
        if (wasBottomExpanded) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('both.assists.hide', true);
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('right.assist.hide', true);
        }
        viewModel.assistWithoutStorage(true);
        viewModel.assistAvailable(false);
        viewModel.isLeftPanelVisible(true);
        viewModel.isRightPanelVisible(false);
        window.setTimeout(function () {
          viewModel.assistWithoutStorage(false);
        }, 0);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navigator').hide();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.add-snippet').hide();

        // if (window.BANNER_TOP_HTML) {
        //   $('.main-content').attr('style', 'top: 31px !important');
        // } else {
        //   $('.main-content').css('top', '1px');
        // }
        window.setTimeout(function () {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.REDRAW_FIXED_HEADERS_EVENT);
        }, 200);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).bind('keydown', 'esc', exitPlayerMode);
      } else {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.HIDE_FIXED_HEADERS_EVENT);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('both.assists.revert', true);
        viewModel.assistWithoutStorage(true);
        viewModel.isLeftPanelVisible(wasLeftPanelVisible);
        viewModel.isRightPanelVisible(wasRightPanelVisible);
        viewModel.assistAvailable(isAssistAvailable);
        window.setTimeout(function () {
          viewModel.assistWithoutStorage(false);
        }, 0);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navigator').show();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.add-snippet').show();
        // if (window.BANNER_TOP_HTML) {
        //   $('.main-content').css('top', '112px');
        // } else {
        //   $('.main-content').css('top', '74px');
        // }
        window.setTimeout(function () {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.REDRAW_FIXED_HEADERS_EVENT);
        }, 200);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).unbind('keydown', exitPlayerMode);
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('show.retry.modal', function (data) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editorRetryModal').modal('show');
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('hide.retry.modal', function (data) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editorRetryModal' + window.EDITOR_SUFFIX).modal('hide');
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('open.link', function (link) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).unbind('keydown.editor');
      if (link.indexOf('editor') >= 0) {
        initKeydownBindings();
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('editor.presentation.toggle', function () {
      viewModel.selectedNotebook().isPresentationMode(!viewModel.isPresentationMode());
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('editor.save', saveKeyHandler, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('render.jqcron', function () {
      if (typeof window.renderJqCron !== 'undefined') {
        window.renderJqCron();
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('submit.popup.return', function (data) {
      viewModel.selectedNotebook().viewSchedulerId(data.job_id);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.submit-modal-editor').modal('hide');
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('show.jobs.panel', {
        id: data.job_id,
        "interface": data.type
      });
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('jobbrowser.data', function (jobs) {
      viewModel.withActiveSnippet(function (snippet) {
        if (!snippet || snippet.dialect() === _snippet__WEBPACK_IMPORTED_MODULE_15__.DIALECT.impala) {
          return;
        }
        if (jobs.length > 0) {
          var progress = 0;
          var parent;
          jobs.forEach(function (job) {
            var id = job.shortId || job.id;
            var el = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.jobs-overlay li:contains(' + id + ')');
            if (!el.length) {
              return;
            }
            var context = knockout__WEBPACK_IMPORTED_MODULE_0__.contextFor(el[0]);
            parent = context.$parent;
            var _job = context.$data;
            progress = parseInt(job.mapsPercentComplete);
            if (isNaN(progress)) {
              progress = parseInt(job.progress);
            }
            if (!isNaN(progress)) {
              _job.percentJob(progress);
            } else {
              progress = 0;
            }
          });
          if (parent && parent.jobs().length === 1) {
            parent.progress(Math.max(progress, parent.progress()));
          }
        }
      });
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('editor.get.active.risks', function (callback) {
      var result = {
        editor: undefined,
        risks: {}
      };
      if (viewModel.selectedNotebook()) {
        if (viewModel.selectedNotebook().snippets().length === 1) {
          result.editor = viewModel.selectedNotebook().snippets()[0].ace();
          result.risks = viewModel.selectedNotebook().snippets()[0].complexity() || {};
        } else {
          viewModel.selectedNotebook().snippets().every(function (snippet) {
            if (snippet.inFocus()) {
              result.editor = snippet.ace();
              result.risks = snippet.complexity() || {};
              return false;
            }
            return true;
          });
        }
      }
      callback(result);
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe('recalculate.name.description.width', function () {
      (0,utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_12__["default"])('.editorComponents .hue-title-bar .query-name', function (el) {
        return el.is(':visible');
      }, function () {
        var cumulativeWidth = 0;
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.editorComponents .hue-title-bar ul li:not(.skip-width-calculation)').each(function () {
          cumulativeWidth += jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).outerWidth();
        });
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.notebook-name-desc').css('max-width', (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.editorComponents .hue-title-bar').width() - cumulativeWidth - jquery__WEBPACK_IMPORTED_MODULE_1___default()('.editorComponents .hue-title-bar .pull-right').width() - 120) / 2 + 'px');
      });
    }, HUE_PUB_SUB_EDITOR_ID);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('updateResultHeaders', function (e) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.HIDE_FIXED_HEADERS_EVENT);
      window.setTimeout(function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.REDRAW_FIXED_HEADERS_EVENT);
      }, 200);
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('showAuthModal', function (e, data) {
      viewModel.authSessionUsername(window.LOGGED_USERNAME);
      viewModel.authSessionMessage(data['message']);
      viewModel.authSessionPassword('');
      viewModel.authSessionType(data['type']);
      viewModel.authSessionCallback(data['callback']);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#authModal' + window.EDITOR_SUFFIX).modal('show');
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('hideHistoryModal', function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#clearHistoryModal' + window.EDITOR_SUFFIX).modal('hide');
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('editorSizeChanged', function () {
      window.setTimeout(function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.REDRAW_CHART_EVENT);
      }, 50);
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('redrawResults', function () {
      window.setTimeout(function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.REDRAW_CHART_EVENT);
      }, 50);
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('renderDataError', function (e, options) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(_events__WEBPACK_IMPORTED_MODULE_13__.SHOW_NORMAL_RESULT_EVENT);
    });
    var hideTimeout = -1;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('hideAutocomplete', function () {
      window.clearTimeout(hideTimeout);
      hideTimeout = window.setTimeout(function () {
        var $aceAutocomplete = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.ace_editor.ace_autocomplete');
        if ($aceAutocomplete.is(':visible')) {
          $aceAutocomplete.hide();
        }
      }, 100);
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('resize', function () {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('recalculate.name.description.width');
    });
  }
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/editor/components/ko.paginator.js":
/*!****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/editor/components/ko.paginator.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAME": () => (/* binding */ NAME)
/* harmony export */ });
/* harmony import */ var _ko_components_componentUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ko/components/componentUtils */ "./desktop/core/src/desktop/js/ko/components/componentUtils.js");
/* harmony import */ var _ko_components_DisposableComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ko/components/DisposableComponent */ "./desktop/core/src/desktop/js/ko/components/DisposableComponent.js");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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




var NAME = 'paginator';

// prettier-ignore
var TEMPLATE = "\n<div class=\"pagination\" data-bind=\"visible: totalPages() > 1\" style=\"display: none;\">\n  <ul>\n    <li data-bind=\"css: { 'disabled' : currentPage() === 1 }\">\n      <a href=\"javascript: void(0);\" data-bind=\"click: previousPage.bind($data)\">".concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["default"])("Prev"), "</a>\n    </li>\n    <li class=\"active\"><span data-bind=\"text: currentPage() + '/' + totalPages()\"></span></li>\n    <li data-bind=\"css: { 'disabled' : currentPage() === totalPages() }\">\n      <a href=\"javascript: void(0);\" data-bind=\"click: nextPage.bind($data)\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["default"])("Next"), "</a>\n    </li>\n  </ul>\n</div>\n");
var Paginator = /*#__PURE__*/function (_DisposableComponent) {
  function Paginator(params, element) {
    var _this;
    _classCallCheck(this, Paginator);
    _this = _callSuper(this, Paginator);
    _this.totalPages = params.totalPages;
    _this.currentPage = params.currentPage;
    _this.onPageChange = params.onPageChange;
    if (_this.onPageChange) {
      _this.subscribe(_this.currentPage, _this.onPageChange);
    }
    return _this;
  }
  _inherits(Paginator, _DisposableComponent);
  return _createClass(Paginator, [{
    key: "nextPage",
    value: function nextPage() {
      if (this.currentPage() < this.totalPages()) {
        this.currentPage(this.currentPage() + 1);
      }
    }
  }, {
    key: "previousPage",
    value: function previousPage() {
      if (this.currentPage() !== 1) {
        this.currentPage(this.currentPage() - 1);
      }
    }
  }]);
}(_ko_components_DisposableComponent__WEBPACK_IMPORTED_MODULE_1__["default"]);
_ko_components_componentUtils__WEBPACK_IMPORTED_MODULE_0__["default"].registerComponent(NAME, Paginator, TEMPLATE);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/editor/components/ko.savedQueries.js":
/*!*******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/editor/components/ko.savedQueries.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAME": () => (/* binding */ NAME),
/* harmony export */   "UPDATE_SAVED_QUERIES_EVENT": () => (/* binding */ UPDATE_SAVED_QUERIES_EVENT)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ko_components_componentUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ko/components/componentUtils */ "./desktop/core/src/desktop/js/ko/components/componentUtils.js");
/* harmony import */ var _ko_components_DisposableComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ko/components/DisposableComponent */ "./desktop/core/src/desktop/js/ko/components/DisposableComponent.js");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _ko_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ko.paginator */ "./desktop/core/src/desktop/js/apps/editor/components/ko.paginator.js");
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var _api_apiUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api/apiUtils */ "./desktop/core/src/desktop/js/api/apiUtils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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








var UPDATE_SAVED_QUERIES_EVENT = 'update.saved.queries';
var NAME = 'saved-queries';

// prettier-ignore
var TEMPLATE = "\n<div class=\"snippet-tab-actions\">\n  <form autocomplete=\"off\" class=\"inline-block\">\n    <input class=\"input-small search-input\" type=\"text\" ".concat(window.PREVENT_AUTOFILL_INPUT_ATTRS, " placeholder=\"").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('Search...'), "\" data-bind=\"\n        textInput: filter,\n        clearable: filter\n      \"/>\n  </form>\n</div>\n\n<div class=\"snippet-tab-body\">\n  <!-- ko if: loading -->\n    <div>\n      <h1 class=\"empty\"><i class=\"fa fa-spinner fa-spin\"></i> ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('Loading...'), "</h1>\n    </div>\n  <!-- /ko -->\n\n  <!-- ko ifnot: loading -->\n    <!-- ko if: hasErrors -->\n      <div class=\"margin-top-10 margin-left-10\" style=\"font-style: italic\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])("Error loading the queries."), "</div>\n    <!-- /ko -->\n    <!-- ko if: !hasErrors() && !loading() && queries().length === 0 && filter() === '' -->\n      <div class=\"margin-top-10 margin-left-10\" style=\"font-style: italic\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])("You don't have any saved queries."), "</div>\n    <!-- /ko -->\n    <!-- ko if: !hasErrors() && !loading() && queries().length === 0 && filter() !== '' -->\n      <div class=\"margin-top-10 margin-left-10\" style=\"font-style: italic\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('No queries found for'), " <strong data-bind=\"text: filter\"></strong>.</div>\n    <!-- /ko -->\n    <!-- ko if: !hasErrors() && !loading() && queries().length > 0 -->\n      <table class=\"table table-condensed margin-top-10 history-table\">\n        <thead>\n        <tr>\n          <th style=\"width: 16%\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])("Name"), "</th>\n          <th style=\"width: 50%\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])("Description"), "</th>\n          <th style=\"width: 18%\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])("Owner"), "</th>\n          <th style=\"width: 16%\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])("Last Modified"), "</th>\n        </tr>\n        </thead>\n        <tbody data-bind=\"foreach: queries\">\n        <tr data-bind=\"\n            click: function() {\n              $parent.openNotebook(uuid);\n            },\n            css: {\n              'highlight': uuid == $parent.currentNotebook.uuid(),\n              'pointer': uuid != $parent.currentNotebook.uuid()\n            }\">\n          <td style=\"width: 16%\"><span data-bind=\"ellipsis: { data: name, length: 50 }\"></span></td>\n          <td style=\"width: 50%; white-space: normal\"><span data-bind=\"text: description\"></span></td>\n          <td style=\"width: 18%\"><span data-bind=\"text: owner\"></span></td>\n          <td style=\"width: 16%\"><span data-bind=\"text: localeFormat(lastModified())\"></span></td>\n        </tr>\n        </tbody>\n      </table>\n    <!-- /ko -->\n\n    <!-- ko component: {\n      name: '").concat(_ko_paginator__WEBPACK_IMPORTED_MODULE_4__.NAME, "',\n      params: {\n        currentPage: currentPage,\n        totalPages: totalPages,\n        onPageChange: fetchQueries.bind($data)\n      }\n    } --><!-- /ko -->\n  <!-- /ko -->\n</div>\n");
var QUERIES_PER_PAGE = 50;
var adaptRawQuery = function adaptRawQuery(rawQuery) {
  return {
    uuid: rawQuery.uuid,
    name: knockout__WEBPACK_IMPORTED_MODULE_0__.observable(rawQuery.name),
    owner: rawQuery.owner,
    description: knockout__WEBPACK_IMPORTED_MODULE_0__.observable(rawQuery.description),
    lastModified: knockout__WEBPACK_IMPORTED_MODULE_0__.observable(rawQuery.last_modified)
  };
};
var SavedQueries = /*#__PURE__*/function (_DisposableComponent) {
  function SavedQueries(params) {
    var _this;
    _classCallCheck(this, SavedQueries);
    _this = _callSuper(this, SavedQueries);
    _this.currentNotebook = params.currentNotebook;
    _this.openFunction = params.openFunction;
    _this.dialect = params.dialect;
    _this.currentTab = params.currentTab;
    _this.loading = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(true);
    _this.hasErrors = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(false);
    _this.queries = knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray();
    _this.currentPage = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(1);
    _this.totalPages = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(1);
    _this.lastFetchQueriesRequest = undefined;
    _this.filter = knockout__WEBPACK_IMPORTED_MODULE_0__.observable().extend({
      rateLimit: 900
    });
    _this.filter.subscribe(function () {
      _this.fetchQueries();
    });
    _this.subscribe(UPDATE_SAVED_QUERIES_EVENT, function (details) {
      if (!details.save_as) {
        _this.queries().some(function (item) {
          if (item.uuid === details.uuid) {
            item.name(details.name);
            item.description(details.description);
            item.lastModified(details.last_modified);
            return true;
          }
        });
      } else if (_this.queries().length) {
        _this.queries.unshift(adaptRawQuery(details));
      } else {
        _this.fetchQueries();
      }
    });
    if (_this.currentTab() === 'savedQueries') {
      _this.fetchQueries();
    } else {
      var sub = _this.subscribe(_this.currentTab, function (tab) {
        if (tab === 'savedQueries') {
          _this.fetchQueries();
          sub.dispose();
        }
      });
    }
    return _this;
  }
  _inherits(SavedQueries, _DisposableComponent);
  return _createClass(SavedQueries, [{
    key: "fetchQueries",
    value: function () {
      var _fetchQueries = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_6__.cancelActiveRequest)(this.lastFetchQueriesRequest);
              this.loading(true);
              this.hasErrors(false);
              this.lastFetchQueriesRequest = _api_apiHelper__WEBPACK_IMPORTED_MODULE_5__["default"].searchDocuments({
                successCallback: function successCallback(foundDocuments) {
                  _this2.totalPages(Math.ceil(foundDocuments.count / QUERIES_PER_PAGE));
                  _this2.queries(foundDocuments.documents.map(adaptRawQuery));
                  _this2.loading(false);
                  _this2.hasErrors(false);
                },
                errorCallback: function errorCallback() {
                  _this2.loading(false);
                  _this2.hasErrors(true);
                },
                page: this.currentPage(),
                limit: QUERIES_PER_PAGE,
                type: 'query-' + this.dialect(),
                query: this.filter(),
                include_trashed: false
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function fetchQueries() {
        return _fetchQueries.apply(this, arguments);
      }
      return fetchQueries;
    }()
  }, {
    key: "openNotebook",
    value: function openNotebook(uuid) {
      if (window.getSelection().toString() === '' && uuid !== this.currentNotebook.uuid()) {
        this.openFunction(uuid);
      }
    }
  }]);
}(_ko_components_DisposableComponent__WEBPACK_IMPORTED_MODULE_2__["default"]);
_ko_components_componentUtils__WEBPACK_IMPORTED_MODULE_1__["default"].registerComponent(NAME, SavedQueries, TEMPLATE);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/editor/notebook.js":
/*!*************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/editor/notebook.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notebook)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout.mapping */ "./node_modules/knockout.mapping/knockout.mapping.js");
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout_mapping__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/hueAnalytics */ "./desktop/core/src/desktop/js/utils/hueAnalytics.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_string_UUID__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/string/UUID */ "./desktop/core/src/desktop/js/utils/string/UUID.ts");
/* harmony import */ var apps_editor_execution_sessionManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apps/editor/execution/sessionManager */ "./desktop/core/src/desktop/js/apps/editor/execution/sessionManager.ts");
/* harmony import */ var _snippet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./snippet */ "./desktop/core/src/desktop/js/apps/editor/snippet.js");
/* harmony import */ var _components_ko_savedQueries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ko.savedQueries */ "./desktop/core/src/desktop/js/apps/editor/components/ko.savedQueries.js");
/* harmony import */ var _ko_components_assist_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ko/components/assist/events */ "./desktop/core/src/desktop/js/ko/components/assist/events.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
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













var HISTORY_CLEARED_EVENT = 'query.history.cleared';
var Notebook = /*#__PURE__*/function () {
  function Notebook(vm, notebookRaw) {
    var _this = this;
    _classCallCheck(this, Notebook);
    this.parentVm = vm;
    this.id = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.id);
    this.uuid = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.uuid || (0,utils_string_UUID__WEBPACK_IMPORTED_MODULE_6__["default"])());
    this.name = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.name || '');
    this.description = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.description || '');
    this.type = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.type || 'notebook');
    this.initialType = this.type().replace('query-', '');
    this.coordinatorUuid = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.coordinatorUuid);
    this.isHistory = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(!!notebookRaw.is_history);
    this.isManaged = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(!!notebookRaw.isManaged);
    this.parentSavedQueryUuid = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.parentSavedQueryUuid); // History parent
    this.isSaved = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(!!notebookRaw.isSaved);
    this.canWrite = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.can_write !== false);
    this.onSuccessUrl = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.onSuccessUrl);
    this.pubSubUrl = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.pubSubUrl);
    this.isPresentationModeDefault = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(!!notebookRaw.isPresentationModeDefault);
    this.isPresentationMode = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.isHidingCode = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(!!notebookRaw.isHidingCode);
    this.snippets = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    this.selectedSnippet = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(vm.editorType()); // Aka selectedSnippetType
    this.directoryUuid = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.directoryUuid);
    this.dependents = knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS(notebookRaw.dependents || []);
    this.dependentsCoordinator = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.dependents().filter(function (doc) {
        return doc.type() === 'oozie-coordinator2' && doc.is_managed();
      });
    });
    if (this.dependentsCoordinator().length > 0 && !this.coordinatorUuid()) {
      this.coordinatorUuid(this.dependentsCoordinator()[0].uuid());
    }
    this.history = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(vm.selectedNotebook() && vm.selectedNotebook().history().length > 0 && vm.selectedNotebook().history()[0].type === this.type() ? vm.selectedNotebook().history() : []);
    this.schedulerViewModel = null;
    this.schedulerViewModelIsLoaded = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.schedulerViewerViewModel = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.isBatchable = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.snippets().length > 0 && _this.snippets().every(function (snippet) {
        return snippet.isBatchable();
      });
    });
    this.isExecutingAll = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(!!notebookRaw.isExecutingAll);
    this.executingAllIndex = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.executingAllIndex || 0);
    this.retryModalConfirm = null;
    this.retryModalCancel = null;
    this.avoidClosing = false;
    this.canSave = vm.canSave;
    this.unloaded = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.viewSchedulerId = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(notebookRaw.viewSchedulerId || '');
    this.viewSchedulerId.subscribe(function () {
      _this.save();
    });
    this.isSchedulerJobRunning = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.loadingScheduler = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);

    // Init
    if (notebookRaw.snippets) {
      notebookRaw.snippets.forEach(function (snippetRaw) {
        _this.addSnippet(snippetRaw);
      });
    }
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(HISTORY_CLEARED_EVENT, function () {
      if (_this.isHistory()) {
        _this.id(null);
        _this.uuid((0,utils_string_UUID__WEBPACK_IMPORTED_MODULE_6__["default"])());
        _this.parentVm.changeURL(_this.parentVm.URLS.editor + '?type=' + _this.parentVm.editorType());
      }
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].subscribeOnce(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_10__.ASSIST_DB_PANEL_IS_READY_EVENT, function () {
      if (_this.type().indexOf('query') === 0) {
        var whenDatabaseAvailable = function whenDatabaseAvailable(snippet) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_10__.ASSIST_SET_DATABASE_EVENT, {
            connector: snippet.connector(),
            namespace: snippet.namespace(),
            name: snippet.database()
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
        if (_this.snippets().length === 1) {
          whenSnippetAvailable(_this.snippets()[0]);
        } else {
          var snippetsSub = _this.snippets.subscribe(function (snippets) {
            if (snippets.length === 1) {
              whenSnippetAvailable(snippets[0]);
            }
            snippetsSub.dispose();
          });
        }
      }
    }, vm.huePubSubId);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_10__.ASSIST_IS_DB_PANEL_READY_EVENT);
  }
  return _createClass(Notebook, [{
    key: "addSnippet",
    value: function addSnippet(snippetRaw) {
      var newSnippet = new _snippet__WEBPACK_IMPORTED_MODULE_8__["default"](this.parentVm, this, snippetRaw);
      this.snippets.push(newSnippet);
      newSnippet.init();
      return newSnippet;
    }
  }, {
    key: "clearResults",
    value: function clearResults() {
      this.snippets().forEach(function (snippet) {
        snippet.result.clear();
        snippet.status(_snippet__WEBPACK_IMPORTED_MODULE_8__.STATUS.ready);
      });
    }
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_4__["default"].log('notebook', 'close');
              _context.t0 = _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"];
              _context.next = 4;
              return this.toJson();
            case 4:
              _context.t1 = _context.sent;
              _context.t2 = this.parentVm.editorMode();
              _context.t3 = {
                notebookJson: _context.t1,
                editorMode: _context.t2
              };
              _context.t0.closeNotebook.call(_context.t0, _context.t3);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function close() {
        return _close.apply(this, arguments);
      }
      return close;
    }()
  }, {
    key: "executeAll",
    value: function executeAll() {
      if (this.isExecutingAll() || this.snippets().length === 0) {
        return;
      }
      this.isExecutingAll(true);
      this.executingAllIndex(0);
      this.snippets()[this.executingAllIndex()].execute();
    }
  }, {
    key: "getSnippets",
    value: function getSnippets(type) {
      return this.snippets().filter(function (snippet) {
        return snippet.dialect() === type;
      });
    }
  }, {
    key: "loadScheduler",
    value: function loadScheduler() {
      var _this2 = this;
      if (typeof this.parentVm.CoordinatorEditorViewModel !== 'undefined' && this.isBatchable()) {
        var action;
        if (this.coordinatorUuid()) {
          action = 'edit';
        } else {
          action = 'new';
        }
        utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_4__["default"].log('notebook', 'schedule/' + action);
        var getCoordinator = function getCoordinator() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default().get('/scheduler/api/schedule/' + action + '/', {
            format: 'json',
            document: _this2.uuid(),
            coordinator: _this2.coordinatorUuid()
          }, function (data) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#schedulerEditor').length > 0) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('hue4.process.headers', {
                response: data.layout,
                callback: function callback(r) {
                  var $schedulerEditor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#schedulerEditor');
                  $schedulerEditor.html(r);
                  _this2.schedulerViewModel = new _this2.parentVm.CoordinatorEditorViewModel(data.coordinator, data.credentials, data.workflows, data.can_edit);
                  knockout__WEBPACK_IMPORTED_MODULE_1__.cleanNode($schedulerEditor[0]);
                  knockout__WEBPACK_IMPORTED_MODULE_1__.applyBindings(_this2.schedulerViewModel, $schedulerEditor[0]);
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('showSubmitPopup');
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('showSubmitPopup', function (event, data) {
                    var $submitModalEditor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submit-modal-editor');
                    $submitModalEditor.html(data);
                    $submitModalEditor.modal('show');
                    $submitModalEditor.on('hidden', function () {
                      utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('hide.datepicker');
                    });
                    var _sel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submit-form .control-group[rel!="popover"]:visible');
                    if (_sel.length > 0) {
                      var $submitModalEditorBody = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submit-modal-editor .modal-body');
                      $submitModalEditorBody.height($submitModalEditorBody.height() + 60);
                    }
                  });
                  utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('render.jqcron');
                  _this2.schedulerViewModel.coordinator.properties.cron_advanced.valueHasMutated(); // Update jsCron enabled status
                  _this2.schedulerViewModel.coordinator.tracker().markCurrentStateAsClean();
                  _this2.schedulerViewModel.isEditing(true);
                  _this2.schedulerViewModelIsLoaded(true);
                  if (action === 'new') {
                    _this2.schedulerViewModel.coordinator.properties.document(_this2.uuid()); // Expected for triggering the display
                  }
                }
              });
            }
          }).fail(function (xhr) {
            if (xhr.status !== 502) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_11__.GLOBAL_ERROR_TOPIC, {
                message: xhr.responseText
              });
            }
          });
        };
        getCoordinator();
      }
    }
  }, {
    key: "newSnippet",
    value: function newSnippet(type) {
      if (type) {
        this.selectedSnippet(type);
      }
      var snippet = this.addSnippet({
        type: this.selectedSnippet(),
        result: {}
      });
      window.setTimeout(function () {
        var lastSnippet = snippet;
        if (lastSnippet.ace() != null) {
          lastSnippet.ace().focus();
        }
      }, 100);
      utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_4__["default"].log('notebook', 'add_snippet/' + (type ? type : this.selectedSnippet()));
      return snippet;
    }
  }, {
    key: "newSnippetAbove",
    value: function newSnippetAbove(id) {
      this.newSnippet();
      var idx = 0;
      this.snippets().forEach(function (snippet, cnt) {
        if (snippet.id() === id) {
          idx = cnt;
        }
      });
      this.snippets(this.snippets().move(this.snippets().length - 1, idx));
    }
  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(callback) {
        var editorMode, data, wasHistory;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_4__["default"].log('notebook', 'save');
              editorMode = this.parentVm.editorMode() || this.isPresentationMode() && this.parentVm.editorType() !== 'notebook'; // Editor should not convert to Notebook in presentation mode
              _context2.prev = 2;
              _context2.t0 = _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"];
              _context2.next = 6;
              return this.toJson();
            case 6:
              _context2.t1 = _context2.sent;
              _context2.t2 = editorMode;
              _context2.t3 = {
                notebookJson: _context2.t1,
                editorMode: _context2.t2
              };
              _context2.next = 11;
              return _context2.t0.saveNotebook.call(_context2.t0, _context2.t3);
            case 11:
              data = _context2.sent;
              if (data.status === 0) {
                this.id(data.id);
                this.isSaved(true);
                wasHistory = this.isHistory();
                this.isHistory(false);
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_11__.GLOBAL_INFO_TOPIC, {
                  message: data.message
                });
                if (editorMode) {
                  utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(_components_ko_savedQueries__WEBPACK_IMPORTED_MODULE_9__.UPDATE_SAVED_QUERIES_EVENT, data);
                  if (data.save_as) {
                    utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('assist.document.refresh');
                  }
                  if (this.coordinatorUuid() && this.schedulerViewModel) {
                    this.saveScheduler();
                    this.schedulerViewModel.coordinator.refreshParameters();
                  }
                  if (wasHistory || data.save_as) {
                    this.loadScheduler();
                  }
                  if (this.snippets()[0].downloadResultViewModel && this.snippets()[0].downloadResultViewModel().saveTarget() === 'dashboard') {
                    utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('open.link', this.parentVm.URLS.report + '&uuid=' + data.uuid + '&statement=' + this.snippets()[0].result.handle().statement_id);
                  } else {
                    this.parentVm.changeURL(this.parentVm.URLS.editor + '?editor=' + data.id);
                  }
                } else {
                  this.parentVm.changeURL(this.parentVm.URLS.notebook + '?notebook=' + data.id);
                }
                if (typeof callback == 'function') {
                  callback();
                }
              } else {
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_11__.GLOBAL_ERROR_TOPIC, {
                  message: data.message
                });
              }
              _context2.next = 19;
              break;
            case 15:
              _context2.prev = 15;
              _context2.t4 = _context2["catch"](2);
              console.error(_context2.t4);
              if (_context2.t4 && _context2.t4.status !== 502) {
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_11__.GLOBAL_ERROR_TOPIC, {
                  message: _context2.t4.responseText
                });
              }
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[2, 15]]);
      }));
      function save(_x) {
        return _save.apply(this, arguments);
      }
      return save;
    }()
  }, {
    key: "saveScheduler",
    value: function saveScheduler() {
      var _this3 = this;
      if (this.isBatchable() && (!this.coordinatorUuid() || this.schedulerViewModel.coordinator.isDirty())) {
        this.schedulerViewModel.coordinator.isManaged(true);
        this.schedulerViewModel.coordinator.properties.document(this.uuid());
        this.schedulerViewModel.save(function (data) {
          if (!_this3.coordinatorUuid()) {
            _this3.coordinatorUuid(data.uuid);
            _this3.save();
          }
        });
      }
    }
  }, {
    key: "showSubmitPopup",
    value: function showSubmitPopup() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().get('/scheduler/api/submit/' + this.coordinatorUuid(), {
        format: 'json'
      }, function (data) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('showSubmitPopup', data);
      }).fail(function (xhr) {
        if (xhr.status !== 502) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_11__.GLOBAL_ERROR_TOPIC, {
            message: xhr.responseText
          });
        }
      });
    }
  }, {
    key: "toContextJson",
    value: function () {
      var _toContextJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = JSON;
              _context3.t1 = this.id();
              _context3.t2 = this.isSaved();
              _context3.t3 = this.name();
              _context3.t4 = this.parentSavedQueryUuid();
              _context3.next = 7;
              return apps_editor_execution_sessionManager__WEBPACK_IMPORTED_MODULE_7__["default"].getAllSessions();
            case 7:
              _context3.t5 = _context3.sent;
              _context3.t6 = this.type();
              _context3.t7 = this.uuid();
              _context3.t8 = {
                id: _context3.t1,
                isSaved: _context3.t2,
                name: _context3.t3,
                parentSavedQueryUuid: _context3.t4,
                sessions: _context3.t5,
                type: _context3.t6,
                uuid: _context3.t7
              };
              return _context3.abrupt("return", _context3.t0.stringify.call(_context3.t0, _context3.t8));
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function toContextJson() {
        return _toContextJson.apply(this, arguments);
      }
      return toContextJson;
    }()
  }, {
    key: "toJs",
    value: function () {
      var _toJs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = this.coordinatorUuid();
              _context4.t1 = this.description();
              _context4.t2 = this.directoryUuid();
              _context4.t3 = this.executingAllIndex();
              _context4.t4 = this.id();
              _context4.t5 = this.isExecutingAll();
              _context4.t6 = this.isHidingCode();
              _context4.t7 = this.isHistory();
              _context4.t8 = this.isManaged();
              _context4.t9 = this.isPresentationModeDefault();
              _context4.t10 = this.isSaved();
              _context4.t11 = this.name();
              _context4.t12 = this.onSuccessUrl();
              _context4.t13 = this.parentSavedQueryUuid();
              _context4.t14 = this.pubSubUrl();
              _context4.t15 = {};
              _context4.next = 18;
              return apps_editor_execution_sessionManager__WEBPACK_IMPORTED_MODULE_7__["default"].getAllSessions();
            case 18:
              _context4.t16 = _context4.sent;
              _context4.t17 = this.snippets().map(function (snippet) {
                return snippet.toJs();
              });
              _context4.t18 = this.type();
              _context4.t19 = this.uuid();
              _context4.t20 = this.viewSchedulerId();
              return _context4.abrupt("return", {
                coordinatorUuid: _context4.t0,
                description: _context4.t1,
                directoryUuid: _context4.t2,
                executingAllIndex: _context4.t3,
                id: _context4.t4,
                isExecutingAll: _context4.t5,
                isHidingCode: _context4.t6,
                isHistory: _context4.t7,
                isManaged: _context4.t8,
                isPresentationModeDefault: _context4.t9,
                isSaved: _context4.t10,
                name: _context4.t11,
                onSuccessUrl: _context4.t12,
                parentSavedQueryUuid: _context4.t13,
                pubSubUrl: _context4.t14,
                result: _context4.t15,
                sessions: _context4.t16,
                snippets: _context4.t17,
                type: _context4.t18,
                uuid: _context4.t19,
                viewSchedulerId: _context4.t20
              });
            case 24:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function toJs() {
        return _toJs.apply(this, arguments);
      }
      return toJs;
    }()
  }, {
    key: "toJson",
    value: function () {
      var _toJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.t0 = JSON;
              _context5.next = 3;
              return this.toJs();
            case 3:
              _context5.t1 = _context5.sent;
              return _context5.abrupt("return", _context5.t0.stringify.call(_context5.t0, _context5.t1));
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function toJson() {
        return _toJson.apply(this, arguments);
      }
      return toJson;
    }()
  }, {
    key: "unload",
    value: function unload() {
      this.unloaded(true);
      var currentQueries = null;
      this.snippets().forEach(function (snippet) {
        if (snippet.checkStatusTimeout != null) {
          clearTimeout(snippet.checkStatusTimeout);
          snippet.checkStatusTimeout = null;
        }
        if (currentQueries == null) {
          currentQueries = snippet.queries();
        }
      });
      return currentQueries;
    }
  }]);
}();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["notebook~editor","defaultVendors~hue-e3924278","defaultVendors~hue-aacc2dbb","defaultVendors~hue-bc050c32","defaultVendors~hue-b9fa02b6","defaultVendors~hue-2ef5bd86","defaultVendors~hue-6b948b9f","defaultVendors~hue-fa70753b","defaultVendors~hue-e5abfd2a","hue-e981d915","hue-541bdf64","hue-15ab7d1f","hue-4bde8d39","hue-7cb30146","hue-a799d440","hue-16bbf7a6","hue-8dc1dc79","hue-221ed165","hue-027ccb81","hue-18218eda","hue-3d824a78","hue-3fe99f16","hue-b5650f80","hue-79cd9d02","hue-f2b57085","hue-3528fb62","hue-a2399487","hue-92506859","hue-875ef077"], () => (__webpack_exec__("./desktop/core/src/desktop/js/apps/editor/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/editor-bundle-a2a4f8506cb55bb7.js.map