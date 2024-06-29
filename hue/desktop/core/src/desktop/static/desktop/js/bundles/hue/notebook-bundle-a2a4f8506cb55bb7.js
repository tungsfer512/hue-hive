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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["notebook"],{

/***/ "./desktop/core/src/desktop/js/apps/editor/components/ko.syntaxDropdown.js":
/*!*********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/editor/components/ko.syntaxDropdown.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HIDE_EVENT": () => (/* binding */ HIDE_EVENT),
/* harmony export */   "SHOWN_EVENT": () => (/* binding */ SHOWN_EVENT),
/* harmony export */   "SHOW_EVENT": () => (/* binding */ SHOW_EVENT),
/* harmony export */   "SYNTAX_DROPDOWN_COMPONENT": () => (/* binding */ SYNTAX_DROPDOWN_COMPONENT),
/* harmony export */   "SYNTAX_DROPDOWN_ID": () => (/* binding */ SYNTAX_DROPDOWN_ID)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ko_components_ko_dropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ko/components/ko.dropDown */ "./desktop/core/src/desktop/js/ko/components/ko.dropDown.js");
/* harmony import */ var _ko_components_componentUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ko/components/componentUtils */ "./desktop/core/src/desktop/js/ko/components/componentUtils.js");
/* harmony import */ var _ko_components_DisposableComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ko/components/DisposableComponent */ "./desktop/core/src/desktop/js/ko/components/DisposableComponent.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
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









var SYNTAX_DROPDOWN_COMPONENT = 'sql-syntax-dropdown';
var SYNTAX_DROPDOWN_ID = 'sqlSyntaxDropdown';
var SHOW_EVENT = 'sql.syntax.dropdown.show';
var SHOWN_EVENT = 'sql.syntax.dropdown.shown';
var HIDE_EVENT = 'sql.syntax.dropdown.hide';

// prettier-ignore
var TEMPLATE = "\n<div class=\"hue-syntax-drop-down\" data-bind=\"\n  style: {\n    'left': left() + 'px',\n    'top': top() + 'px'\n  },\n  component: {\n    name: 'hue-drop-down',\n    params: {\n      value: selected,\n      entries: expected,\n      foreachVisible: false,\n      searchable: false,\n      showOnInit: true,\n      menuOnly: true\n    }\n  }\n\"></div>\n";
var hideSyntaxDropdown = function hideSyntaxDropdown() {
  var $sqlSyntaxDropdown = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#".concat(SYNTAX_DROPDOWN_ID));
  if ($sqlSyntaxDropdown.length) {
    knockout__WEBPACK_IMPORTED_MODULE_0__.cleanNode($sqlSyntaxDropdown[0]);
    $sqlSyntaxDropdown.remove();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).off('click', hideOnClickOutside);
  }
};
var hideOnClickOutside = function hideOnClickOutside(event) {
  var $modal = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal');
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default().contains(document, event.target) && !jquery__WEBPACK_IMPORTED_MODULE_1___default().contains(jquery__WEBPACK_IMPORTED_MODULE_1___default()("#".concat(SYNTAX_DROPDOWN_ID))[0], event.target) && ($modal[0].length === 0 || !jquery__WEBPACK_IMPORTED_MODULE_1___default().contains($modal[0], event.target))) {
    hideSyntaxDropdown();
  }
};
var SqlSyntaxDropdownViewModel = /*#__PURE__*/function (_DisposableComponent) {
  function SqlSyntaxDropdownViewModel(params) {
    var _this;
    _classCallCheck(this, SqlSyntaxDropdownViewModel);
    _this = _callSuper(this, SqlSyntaxDropdownViewModel);
    _this.selected = knockout__WEBPACK_IMPORTED_MODULE_0__.observable();
    var expected = params.data.expected.map(function (expected) {
      return expected.text;
    });
    // TODO: Allow suppression of unknown columns etc.
    if (params.data.ruleId) {
      if (expected.length > 0) {
        expected.push({
          divider: true
        });
      }
      expected.push({
        label: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('Ignore this type of error'),
        suppressRule: params.data.ruleId.toString() + params.data.text.toLowerCase()
      });
    }
    _this.expected = knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray(expected);
    var selectedSub = _this.selected.subscribe(function (newValue) {
      if (typeof newValue.suppressRule !== 'undefined') {
        var suppressedRules = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_7__.hueLocalStorage)('hue.syntax.checker.suppressedRules') || {};
        suppressedRules[newValue.suppressRule] = true;
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_7__.hueLocalStorage)('hue.syntax.checker.suppressedRules', suppressedRules);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('editor.refresh.statement.locations', params.editorId);
      } else {
        params.editor.session.replace(params.range, newValue);
      }
      hideSyntaxDropdown();
    });
    _this.addDisposalCallback(function () {
      selectedSub.dispose();
    });
    _this.left = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(params.source.left);
    _this.top = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(params.source.bottom);
    var closeOnEsc = function closeOnEsc(e) {
      if (e.keyCode === 27) {
        hideSyntaxDropdown();
      }
    };
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('keyup', closeOnEsc);
    _this.addDisposalCallback(function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).off('keyup', closeOnEsc);
    });
    window.setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', hideOnClickOutside);
    }, 0);
    _this.addDisposalCallback(function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).off('click', hideOnClickOutside);
    });
    return _this;
  }
  _inherits(SqlSyntaxDropdownViewModel, _DisposableComponent);
  return _createClass(SqlSyntaxDropdownViewModel);
}(_ko_components_DisposableComponent__WEBPACK_IMPORTED_MODULE_4__["default"]);
_ko_components_componentUtils__WEBPACK_IMPORTED_MODULE_3__["default"].registerComponent(SYNTAX_DROPDOWN_COMPONENT, SqlSyntaxDropdownViewModel, TEMPLATE);
utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(HIDE_EVENT, hideSyntaxDropdown);
utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(SHOW_EVENT, function (details) {
  hideSyntaxDropdown();
  var $sqlSyntaxDropdown = jquery__WEBPACK_IMPORTED_MODULE_1___default()("<div id=\"".concat(SYNTAX_DROPDOWN_ID, "\" data-bind=\"component: { name: '").concat(SYNTAX_DROPDOWN_COMPONENT, "', params: $data }\"></div>"));
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append($sqlSyntaxDropdown);
  knockout__WEBPACK_IMPORTED_MODULE_0__.applyBindings(details, $sqlSyntaxDropdown[0]);
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish(SHOWN_EVENT);
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/notebook/app.js":
/*!**********************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/notebook/app.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/lib/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_mousewheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-mousewheel */ "./node_modules/jquery-mousewheel/jquery.mousewheel.js");
/* harmony import */ var jquery_mousewheel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_mousewheel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ext_bootstrap_datepicker_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ext/bootstrap-datepicker.min */ "./desktop/core/src/desktop/js/ext/bootstrap-datepicker.min.js");
/* harmony import */ var _ext_jquery_hotkeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ext/jquery.hotkeys */ "./desktop/core/src/desktop/js/ext/jquery.hotkeys.js");
/* harmony import */ var _jquery_plugins_jquery_hdfstree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../jquery/plugins/jquery.hdfstree */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.hdfstree.js");
/* harmony import */ var _NotebookViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotebookViewModel */ "./desktop/core/src/desktop/js/apps/notebook/NotebookViewModel.js");
/* harmony import */ var _editor_components_ko_syntaxDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editor/components/ko.syntaxDropdown */ "./desktop/core/src/desktop/js/apps/editor/components/ko.syntaxDropdown.js");
/* harmony import */ var _editor_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../editor/events */ "./desktop/core/src/desktop/js/apps/editor/events.js");
/* harmony import */ var sql_workers_hueWorkerHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sql/workers/hueWorkerHandler */ "./desktop/core/src/desktop/js/sql/workers/hueWorkerHandler.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var utils_html_bootstrapRatios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/html/bootstrapRatios */ "./desktop/core/src/desktop/js/utils/html/bootstrapRatios.ts");
/* harmony import */ var utils_screen_scrollbarWidth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/screen/scrollbarWidth */ "./desktop/core/src/desktop/js/utils/screen/scrollbarWidth.ts");
/* harmony import */ var utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/timing/waitForRendered */ "./desktop/core/src/desktop/js/utils/timing/waitForRendered.ts");
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


















window.Clipboard = (clipboard__WEBPACK_IMPORTED_MODULE_1___default());
var HUE_PUB_SUB_EDITOR_ID = window.location.pathname.indexOf('notebook') > -1 ? 'notebook' : 'editor';
utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('app.dom.loaded', function (app) {
  if (app === 'editor' && !window.ENABLE_HUE_5 || app === 'notebook') {
    window.MAIN_SCROLLABLE = '.page-content';
    var isLeftNavOpen = false;
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('left.nav.open.toggle', function (val) {
      isLeftNavOpen = val;
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('split.panel.resized', function () {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('recalculate.name.description.width');
    }, HUE_PUB_SUB_EDITOR_ID);
    var showHoverMsg = function showHoverMsg(e) {
      var dt = null;
      if (e) {
        dt = e.dataTransfer;
      }
      if (!isLeftNavOpen && (!dt || dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') !== -1 : dt.types.contains('Files')))) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverMsg').removeClass('hide');
      }
    };
    var hideHoverMsg = function hideHoverMsg(vm) {
      if (vm.editorMode()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverText').html((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_12__["default"])('Drop a SQL file here'));
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverText').html((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_12__["default"])('Drop iPython/Zeppelin notebooks here'));
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverMsg').addClass('hide');
    };
    var createHueDatatable = function createHueDatatable(el, snippet, vm) {
      var DATATABLES_MAX_HEIGHT = 330;
      var invisibleRows = 10;
      if (snippet.result && snippet.result.data() && snippet.result.data().length) {
        var cols = snippet.result.data()[0].length;
        invisibleRows = cols > 200 ? 10 : cols > 30 ? 50 : 100;
      }
      var _dt = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).hueDataTable({
        i18n: {
          NO_RESULTS: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_12__["default"])('No results found.'),
          OF: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_12__["default"])('of')
        },
        fnDrawCallback: function fnDrawCallback(oSettings) {
          if (vm.editorMode()) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#queryResults').removeAttr('style');
            DATATABLES_MAX_HEIGHT = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parent().offset().top - 40;
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parents('.dataTables_wrapper').css('overflow-x', 'hidden');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).jHueHorizontalScrollbar();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parents('.dataTables_wrapper').jHueScrollLeft();
          } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).data('fnDraws') === 1) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parents('.dataTables_wrapper').jHueTableScroller({
              maxHeight: DATATABLES_MAX_HEIGHT,
              heightAfterCorrection: 0
            });
          }
        },
        scrollable: vm.editorMode() && !vm.isPresentationMode() ? window.MAIN_SCROLLABLE : '.dataTables_wrapper',
        contained: !vm.editorMode() || vm.isPresentationMode(),
        forceInvisible: invisibleRows
      });
      window.setTimeout(function () {
        if (vm.editorMode()) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parents('.dataTables_wrapper').css('overflow-x', 'hidden');
          var bannerTopHeight = window.BANNER_TOP_HTML ? 30 : 2;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).jHueTableExtender2({
            mainScrollable: window.MAIN_SCROLLABLE,
            fixedFirstColumn: vm.editorMode(),
            stickToTopPosition: 48 + bannerTopHeight,
            parentId: 'snippet_' + snippet.id(),
            clonedContainerPosition: 'fixed',
            app: 'editor'
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).jHueHorizontalScrollbar();
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).jHueTableExtender2({
            mainScrollable: jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parents('.dataTables_wrapper')[0],
            fixedFirstColumn: vm.editorMode(),
            parentId: 'snippet_' + snippet.id(),
            clonedContainerPosition: 'absolute',
            app: 'editor'
          });
        }
      }, 0);
      return _dt;
    };
    var createDatatable = function createDatatable(el, snippet, vm) {
      var parent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parent();
      // When executing few columns -> many columns -> few columns we have to clear the style
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeAttr('style');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).hasClass('table-huedatatable')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('table-huedatatable');
        if (parent.hasClass('dataTables_wrapper')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).unwrap();
        }
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).addClass('dt');
      var _dt = createHueDatatable(el, snippet, vm);
      var dataTableEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parents('.dataTables_wrapper');
      if (!vm.editorMode()) {
        dataTableEl.bind('mousewheel DOMMouseScroll wheel', function (e) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('.results').css('overflow') === 'hidden') {
            return;
          }
          var _e = e.originalEvent,
            _deltaX = _e.wheelDeltaX || -_e.deltaX,
            _deltaY = _e.wheelDeltaY || -_e.deltaY;
          this.scrollTop += -_deltaY / 2;
          this.scrollLeft += -_deltaX / 2;
          if (this.scrollTop === 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')[0].scrollTop += -_deltaY / 3;
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')[0].scrollTop += -_deltaY / 3; // for firefox
          }
          e.preventDefault();
        });
      }
      var _scrollTimeout = -1;
      var scrollElement = dataTableEl;
      if (vm.editorMode()) {
        scrollElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.MAIN_SCROLLABLE);
      }
      if (scrollElement.data('scrollFnDtCreation')) {
        scrollElement.off('scroll', scrollElement.data('scrollFnDtCreation'));
      }
      var resultFollowTimeout = -1;
      var dataScroll = function dataScroll() {
        if (vm.editorMode()) {
          var snippetEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id());
          if (snippetEl.find('.dataTables_wrapper').length > 0 && snippet.showGrid()) {
            window.clearTimeout(resultFollowTimeout);
            resultFollowTimeout = window.setTimeout(function () {
              var topCoord = vm.isPresentationMode() || vm.isResultFullScreenMode() ? 50 : 73;
              var offsetTop = 0;
              if (snippetEl.find('.dataTables_wrapper').length > 0 && snippetEl.find('.dataTables_wrapper').offset()) {
                offsetTop = (snippetEl.find('.dataTables_wrapper').offset().top - topCoord) * -1;
              }
              var margin = Math.max(offsetTop, 0);
              if (window.BANNER_TOP_HTML) {
                margin += 31;
              }
              if (snippet.isResultSettingsVisible()) {
                snippetEl.find('.snippet-grid-settings').css({
                  height: vm.isPresentationMode() || !vm.editorMode() ? '330px' : Math.max(100, Math.ceil(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - Math.max(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#queryResults').offset().top, topCoord))) + 'px'
                });
                snippetEl.find('.result-settings').css({
                  marginTop: margin
                });
              }
              snippetEl.find('.snippet-actions').css({
                marginTop: margin + 25
              });
            }, 100);
          }
        }
        if (!vm.editorMode() || vm.editorMode() && snippet.currentQueryTab() === 'queryResults' && snippet.showGrid()) {
          var _lastScrollPosition = scrollElement.data('scrollPosition') != null ? scrollElement.data('scrollPosition') : 0;
          window.clearTimeout(_scrollTimeout);
          scrollElement.data('scrollPosition', scrollElement.scrollTop());
          _scrollTimeout = window.setTimeout(function () {
            if (vm.editorMode()) {
              _lastScrollPosition--; //hack for forcing fetching
            }
            if (_lastScrollPosition !== scrollElement.scrollTop() && scrollElement.scrollTop() + scrollElement.outerHeight() + 20 >= scrollElement[0].scrollHeight && _dt && snippet.result.hasMore()) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('editor.snippet.result.gray', snippet);
              snippet.fetchResult(100, false);
            }
          }, 100);
        }
      };
      scrollElement.data('scrollFnDtCreation', dataScroll);
      scrollElement.on('scroll', dataScroll);
      snippet.isResultSettingsVisible.subscribe(function (newValue) {
        if (newValue) {
          dataScroll();
        }
      });
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribeOnce('chart.hard.reset', function () {
        // hard reset once the default opened chart
        var oldChartX = snippet.chartX();
        snippet.chartX(null);
        window.setTimeout(function () {
          snippet.chartX(oldChartX);
        }, 0);
      });
      return _dt;
    };
    if (knockout__WEBPACK_IMPORTED_MODULE_3__.options) {
      knockout__WEBPACK_IMPORTED_MODULE_3__.options.deferUpdates = true;
    }
    var viewModel;
    var hideFixedHeaders = function hideFixedHeaders() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainer').hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainerColumn').hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainerCell').hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-header-row').hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-first-cell').hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-first-column').hide();
    };
    window.hideFixedHeaders = hideFixedHeaders;
    var redrawTimeout = -1;
    var redrawFixedHeaders = function redrawFixedHeaders(timeout) {
      var renderer = function renderer() {
        if (!viewModel.selectedNotebook()) {
          return;
        }
        viewModel.selectedNotebook().snippets().forEach(function (snippet) {
          if (snippet.result.meta().length > 0) {
            var tableExtender = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id() + ' .resultTable').data('plugin_jHueTableExtender2');
            if (typeof tableExtender !== 'undefined') {
              tableExtender.repositionHeader();
              tableExtender.drawLockedRows();
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.MAIN_SCROLLABLE).data('lastScroll', jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.MAIN_SCROLLABLE).scrollTop());
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.MAIN_SCROLLABLE).trigger('scroll');
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainer').show();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainerColumn').show();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainerCell').show();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-header-row').show();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-first-cell').show();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-first-column').show();
      };
      if (timeout) {
        window.clearTimeout(redrawTimeout);
        redrawTimeout = window.setTimeout(renderer, timeout);
      } else {
        renderer();
      }
    };
    window.redrawFixedHeaders = redrawFixedHeaders;
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
      redrawFixedHeaders(200);
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
              redrawFixedHeaders(200);
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
                      addPySpark(jquery__WEBPACK_IMPORTED_MODULE_0___default().isArray(cell.input) ? cell.input.join('') : cell.input);
                    } else {
                      addPySpark(jquery__WEBPACK_IMPORTED_MODULE_0___default().isArray(cell.source) ? cell.source.join('') : cell.source);
                    }
                  }
                  if (cell.cell_type === 'heading') {
                    var heading = jquery__WEBPACK_IMPORTED_MODULE_0___default().isArray(cell.source) ? cell.source.join('') : cell.source;
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
                    addMarkdown(jquery__WEBPACK_IMPORTED_MODULE_0___default().isArray(cell.source) ? cell.source.join('') : cell.source);
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
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hoverText').html("<i class='fa fa-spinner fa-spin'></i>");
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
      var dropZone = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.EDITOR_BINDABLE_ELEMENT)[0];
      dropZone.addEventListener('dragenter', showHoverMsg, false);
      dropZone.addEventListener('dragover', handleDragOver, false);
      dropZone.addEventListener('drop', handleFileSelect, false);
      var isDraggingOverText = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverText').on('dragenter', function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        isDraggingOverText = true;
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverText').on('dragleave', function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        isDraggingOverText = false;
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.EDITOR_BINDABLE_ELEMENT).find('.hoverMsg').on('dragleave', function (e) {
        if (!isDraggingOverText) {
          hideHoverMsg(viewModel);
        }
      });
    }
    if (window.EDITOR_ENABLE_QUERY_SCHEDULING) {
      viewModel = new _NotebookViewModel__WEBPACK_IMPORTED_MODULE_7__["default"](window.EDITOR_VIEW_MODEL_OPTIONS, window.CoordinatorEditorViewModel, window.RunningCoordinatorModel);
    } else {
      viewModel = new _NotebookViewModel__WEBPACK_IMPORTED_MODULE_7__["default"](window.EDITOR_VIEW_MODEL_OPTIONS);
    }
    knockout__WEBPACK_IMPORTED_MODULE_3__.applyBindings(viewModel, jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.EDITOR_BINDABLE_ELEMENT)[0]);
    viewModel.init();
    (0,sql_workers_hueWorkerHandler__WEBPACK_IMPORTED_MODULE_10__.registerHueWorkers)();
    viewModel.selectedNotebook.subscribe(function (newVal) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('selected.notebook.changed', newVal);
    });
    var wasResultFullScreenMode = false;
    var isAssistAvailable = viewModel.assistAvailable();
    var wasLeftPanelVisible = viewModel.isLeftPanelVisible();
    var wasRightPanelVisible = viewModel.isRightPanelVisible();
    var exitPlayerMode = function exitPlayerMode() {
      if (!wasResultFullScreenMode) {
        viewModel.selectedNotebook().isPresentationMode(false);
      } else {
        viewModel.isResultFullScreenMode(false);
      }
      wasResultFullScreenMode = false;
    };
    viewModel.isResultFullScreenMode.subscribe(function (newValue) {
      wasResultFullScreenMode = newValue;
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('editor.presentation.operate.toggle', newValue);
    });
    viewModel.isLeftPanelVisible.subscribe(function (value) {
      redrawFixedHeaders(200);
    });
    var ignoreNextUnload = false;
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe(_editor_events__WEBPACK_IMPORTED_MODULE_9__.IGNORE_NEXT_UNLOAD_EVENT, function () {
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
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).data('beforeunload', window.onbeforeunload);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.preview-sample').css('right', 10 + (0,utils_screen_scrollbarWidth__WEBPACK_IMPORTED_MODULE_14__["default"])() + 'px');
    var saveKeyHandler = function saveKeyHandler() {
      if (viewModel.canSave()) {
        viewModel.saveNotebook();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#saveAsModal' + window.EDITOR_SUFFIX).modal('show');
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
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).bind('keydown.editor', 'ctrl+s alt+s meta+s', function (e) {
        e.preventDefault();
        saveKeyHandler();
        return false;
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).bind('keydown.editor', 'ctrl+shift+p alt+shift+p meta+shift+p', function (e) {
        e.preventDefault();
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('editor.presentation.toggle');
        return false;
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).bind('keydown.editor', 'ctrl+e alt+e meta+e', function (e) {
        e.preventDefault();
        newKeyHandler();
        return false;
      });
    };
    if (document.location.href.indexOf('editor') >= 0) {
      initKeydownBindings();
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).bind('keyup', function (e) {
      if (e.keyCode === 191 && e.shiftKey && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('input') && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('textarea')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#helpModal' + window.EDITOR_SUFFIX).modal('show');
      }
      if (e.keyCode === 191 && !e.shiftKey && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('input') && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('textarea')) {
        if (viewModel.editorMode() && viewModel.selectedNotebook().snippets()[0].currentQueryTab() === 'queryResults') {
          e.preventDefault();
          var $t = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + viewModel.selectedNotebook().snippets()[0].id()).find('.resultTable');
          $t.hueDataTable().fnShowSearch();
          return false;
        }
      }
    });
    var initialResizePosition = 100;
    var draggableHelper = function draggableHelper(el, e, ui, setSize) {
      var _snippet = knockout__WEBPACK_IMPORTED_MODULE_3__.dataFor(el.parents('.snippet')[0]);
      var _cm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + _snippet.id()).data('editor');
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
        },
        drag: function drag(e, ui) {
          draggableHelper(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), e, ui);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainer').hide();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainerColumn').hide();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainerCell').hide();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-header-row').hide();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-first-cell').hide();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-first-column').hide();
        },
        stop: function stop(e, ui) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainer').show();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainerColum').show();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jHueTableExtenderClonedContainerCell').show();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-header-row').show();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-first-cell').show();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-first-column').show();
          draggableHelper(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), e, ui, true);
          redrawFixedHeaders();
          ui.helper.first().removeAttr('style');
        },
        containment: [0, minY, 4000, minY + 400]
      };
    };
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.resize-panel a').each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).draggable(getDraggableOptions(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.snippet').offset().top + 128));
    });
    var resetResultsResizer = function resetResultsResizer(snippet) {
      var $snippet = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id());
      $snippet.find('.table-results .column-side').width(utils_html_bootstrapRatios__WEBPACK_IMPORTED_MODULE_13__["default"].span3() + '%').data('newWidth', utils_html_bootstrapRatios__WEBPACK_IMPORTED_MODULE_13__["default"].span3());
      if (snippet.isResultSettingsVisible()) {
        $snippet.find('.table-results .grid-side').data('newWidth', utils_html_bootstrapRatios__WEBPACK_IMPORTED_MODULE_13__["default"].span9()).width(utils_html_bootstrapRatios__WEBPACK_IMPORTED_MODULE_13__["default"].span9() + '%');
      } else {
        $snippet.find('.table-results .grid-side').data('newWidth', 100).width('100%');
      }
      $snippet.find('.resize-bar').css('left', '');
      try {
        $snippet.find('.resize-bar').draggable('destroy');
      } catch (e) {}
      var initialPosition = 0;
      $snippet.find('.resize-bar').draggable({
        axis: 'x',
        containment: $snippet.find('.table-results'),
        create: function create() {
          var $snip = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id());
          initialPosition = $snip.find('.resize-bar').position().left;
          $snip.find('.table-results .column-side').data('newWidth', utils_html_bootstrapRatios__WEBPACK_IMPORTED_MODULE_13__["default"].span3());
          $snip.find('.meta-filter').width($snip.find('.table-results .column-side').width() - 28);
        },
        drag: function drag(event, ui) {
          var $snip = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id());
          if (initialPosition === 0) {
            initialPosition = $snip.find('.resize-bar').position().left;
          }
          ui.position.left = Math.max(150, ui.position.left);
          var newSpan3Width = ui.position.left * utils_html_bootstrapRatios__WEBPACK_IMPORTED_MODULE_13__["default"].span3() / initialPosition;
          var newSpan9Width = 100 - newSpan3Width - utils_html_bootstrapRatios__WEBPACK_IMPORTED_MODULE_13__["default"].margin();
          $snip.find('.table-results .column-side').width(newSpan3Width + '%').data('newWidth', newSpan3Width);
          $snip.find('.table-results .grid-side').width(newSpan9Width + '%').data('newWidth', newSpan9Width);
          $snip.find('.meta-filter').width($snip.find('.table-results .column-side').width() - 28);
        },
        stop: function stop() {
          redrawFixedHeaders();
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('resize.leaflet.map');
        }
      });
    };
    var resizeToggleResultSettings = function resizeToggleResultSettings(snippet, initial) {
      var _dtElement;
      var $snip = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id());
      if (snippet.showGrid()) {
        _dtElement = $snip.find('.dataTables_wrapper');
        var topCoord = viewModel.isPresentationMode() || viewModel.isResultFullScreenMode() ? window.BANNER_TOP_HTML ? 31 : 1 : 73;
        $snip.find('.snippet-grid-settings').css({
          height: viewModel.isPresentationMode() || !viewModel.editorMode() ? '330px' : Math.ceil(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - Math.max(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.result-settings').length > 0 ? jquery__WEBPACK_IMPORTED_MODULE_0___default()('.result-settings').offset().top : 0, topCoord)) + 'px'
        });
      } else {
        _dtElement = $snip.find('.chart:visible');
      }
      if (_dtElement.length === 0) {
        _dtElement = $snip.find('.table-results');
      }
      _dtElement.parents('.snippet-body').find('.toggle-result-settings').css({
        height: _dtElement.height() - 30 + 'px',
        'line-height': _dtElement.height() - 30 + 'px'
      });
      if (initial) {
        $snip.find('.result-settings').css({
          marginTop: 0
        });
        $snip.find('.snippet-actions').css({
          marginTop: 0
        });
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('resize.leaflet.map');
      }
    };
    var forceChartDraws = function forceChartDraws(initial) {
      if (viewModel.selectedNotebook()) {
        viewModel.selectedNotebook().snippets().forEach(function (snippet) {
          if (snippet.result.data().length > 0) {
            var _elCheckerInterval = -1;
            var _el = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id());
            _elCheckerInterval = window.setInterval(function () {
              if (_el.find('.resultTable').length > 0) {
                try {
                  resizeToggleResultSettings(snippet, initial);
                  resetResultsResizer(snippet);
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('forceChartDraw', snippet);
                } catch (e) {}
                window.clearInterval(_elCheckerInterval);
              }
            }, 200);
          }
        });
      }
    };
    forceChartDraws(true);

    // ======== PubSub ========

    var splitDraggableTimeout = -1;
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('split.draggable.position', function () {
      window.clearTimeout(splitDraggableTimeout);
      splitDraggableTimeout = window.setTimeout(function () {
        redrawFixedHeaders(100);
      }, 200);
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('redraw.fixed.headers', function () {
      hideFixedHeaders();
      redrawFixedHeaders(200);
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('app.gained.focus', function (app) {
      if (app === 'editor') {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('redraw.fixed.headers');
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('hue.scrollleft.show');
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish(_editor_events__WEBPACK_IMPORTED_MODULE_9__.ACTIVE_SNIPPET_CONNECTOR_CHANGED_EVENT, viewModel.activeConnector());
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('current.query.tab.switched', function (tab) {
      if (tab !== 'queryResults') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').hide();
      }
      if (tab === 'queryHistory') {
        (0,utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_15__["default"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#queryHistory .history-table'), function (el) {
          return el.is(':visible');
        }, function () {
          viewModel.selectedNotebook().forceHistoryInitialHeight(true);
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('editor.calculate.history.height');
        });
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('detach.scrolls', function (snippet) {
      var scrollElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id()).find('.dataTables_wrapper');
      if (viewModel.editorMode()) {
        scrollElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.MAIN_SCROLLABLE);
      }
      if (scrollElement.data('scrollFnDt')) {
        scrollElement.off('scroll', scrollElement.data('scrollFnDt'));
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.calculate.history.height', function () {
      if (viewModel.editorMode() && (viewModel.selectedNotebook().historyInitialHeight() === 0 || viewModel.selectedNotebook().forceHistoryInitialHeight())) {
        var h = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#queryHistory .history-table').height();
        if (h === 0) {
          h = viewModel.selectedNotebook().history().length * 32;
        }
        viewModel.selectedNotebook().historyInitialHeight(h + 80); // add pagination too
        viewModel.selectedNotebook().forceHistoryInitialHeight(false);
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.create.new', newKeyHandler, HUE_PUB_SUB_EDITOR_ID);
    if (viewModel.isSqlAnalyzerEnabled()) {
      if (window.SQL_ANALYZER_AUTO_UPLOAD_QUERIES) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.upload.query', function (query_id) {
          viewModel.selectedNotebook().snippets()[0].uploadQuery(query_id);
        }, HUE_PUB_SUB_EDITOR_ID);
      }
      if (window.SQL_ANALYZER_AUTO_UPLOAD_DDL) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.upload.table.stats', function (options) {
          viewModel.selectedNotebook().snippets()[0].uploadTableStats(options);
        }, HUE_PUB_SUB_EDITOR_ID);
      }
      if (window.SQL_ANALYZER_QUERY_HISTORY_UPLOAD_LIMIT !== 0) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.upload.history', function () {
          viewModel.selectedNotebook().snippets()[0].uploadQueryHistory(5);
        }, HUE_PUB_SUB_EDITOR_ID);
      }
    }
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('get.selected.notebook', function () {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('set.selected.notebook', viewModel.selectedNotebook());
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_16__.SHOW_LEFT_ASSIST_EVENT, function () {
      if (!viewModel.isLeftPanelVisible() && viewModel.assistAvailable()) {
        viewModel.isLeftPanelVisible(true);
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('assist.set.manual.visibility', function () {
      wasLeftPanelVisible = viewModel.isLeftPanelVisible();
      wasRightPanelVisible = viewModel.isRightPanelVisible();
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.presentation.operate.toggle', function (value) {
      viewModel.isEditing(!viewModel.isEditing());
      if (value) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('hide.global.alerts');
        isAssistAvailable = viewModel.assistAvailable();
        wasLeftPanelVisible = viewModel.isLeftPanelVisible();
        wasRightPanelVisible = viewModel.isRightPanelVisible();
        if (wasResultFullScreenMode) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('both.assists.hide', true);
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('right.assist.hide', true);
        }
        viewModel.assistWithoutStorage(true);
        viewModel.assistAvailable(false);
        viewModel.isLeftPanelVisible(true);
        viewModel.isRightPanelVisible(false);
        window.setTimeout(function () {
          viewModel.assistWithoutStorage(false);
        }, 0);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navigator').hide();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.add-snippet').hide();
        if (window.BANNER_TOP_HTML) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-content').attr('style', 'top: 31px !important');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-content').css('top', '1px');
        }
        redrawFixedHeaders(200);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).bind('keydown', 'esc', exitPlayerMode);
      } else {
        hideFixedHeaders();
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('both.assists.revert', true);
        viewModel.assistWithoutStorage(true);
        viewModel.isLeftPanelVisible(wasLeftPanelVisible);
        viewModel.isRightPanelVisible(wasRightPanelVisible);
        viewModel.assistAvailable(isAssistAvailable);
        window.setTimeout(function () {
          viewModel.assistWithoutStorage(false);
        }, 0);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navigator').show();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.add-snippet').show();
        if (window.BANNER_TOP_HTML) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-content').css('top', '112px');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-content').css('top', '74px');
        }
        redrawFixedHeaders(200);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).unbind('keydown', exitPlayerMode);
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('show.retry.modal', function (data) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#retryModal' + window.EDITOR_SUFFIX).modal('show');
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('hide.retry.modal', function (data) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#retryModal' + window.EDITOR_SUFFIX).modal('hide');
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('open.link', function (link) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).unbind('keydown.editor');
      if (link.indexOf('editor') >= 0) {
        initKeydownBindings();
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.presentation.toggle', function () {
      viewModel.selectedNotebook().isPresentationMode(!viewModel.isPresentationMode());
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.save', saveKeyHandler, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.render.data', function (options) {
      var $snip = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + options.snippet.id());
      var _el = $snip.find('.resultTable');
      if (options.data.length > 0) {
        window.setTimeout(function () {
          var _dt;
          if (options.initial) {
            options.snippet.result.meta.notifySubscribers();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + options.snippet.id()).find('select').trigger('chosen:updated');
            _dt = createDatatable(_el, options.snippet, viewModel);
            resetResultsResizer(options.snippet);
          } else {
            _dt = _el.hueDataTable();
          }
          try {
            _dt.fnAddData(options.data);
          } catch (e) {}
          var _dtElement = $snip.find('.dataTables_wrapper');
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('editor.snippet.result.normal', options.snippet);
          _dtElement.scrollTop(_dtElement.data('scrollPosition'));
          redrawFixedHeaders();
          resizeToggleResultSettings(options.snippet, options.initial);
        }, 300);
      } else {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('editor.snippet.result.normal', options.snippet);
      }
      $snip.find('select').trigger('chosen:updated');
      $snip.find('.snippet-grid-settings').scrollLeft(0);
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.redraw.data', function (options) {
      (0,utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_15__["default"])('#snippet_' + options.snippet.id() + ' .resultTable', function (el) {
        return el.is(':visible');
      }, function () {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + options.snippet.id()).find('.resultTable');
        var dt = createDatatable($el, options.snippet, viewModel);
        dt.fnAddData(options.snippet.result.data());
      });
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.snippet.result.gray', function (snippet) {
      var $snippet = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id());
      $snippet.find('.dataTables_wrapper .fixed-first-column').css({
        opacity: '0'
      });
      $snippet.find('.dataTables_wrapper .fixed-header-row').css({
        opacity: '0'
      });
      $snippet.find('.dataTables_wrapper .fixed-first-cell').css({
        opacity: '0'
      });
      $snippet.find('.dataTables_wrapper .resultTable').css({
        opacity: '0.55'
      });
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.snippet.result.normal', function (snippet) {
      var $snippet = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id());
      $snippet.find('.dataTables_wrapper .fixed-first-column').css({
        opacity: '1'
      });
      $snippet.find('.dataTables_wrapper .fixed-header-row').css({
        opacity: '1'
      });
      $snippet.find('.dataTables_wrapper .fixed-first-cell').css({
        opacity: '1'
      });
      $snippet.find('.dataTables_wrapper .resultTable').css({
        opacity: '1'
      });
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('render.jqcron', function () {
      if (typeof window.renderJqCron !== 'undefined') {
        window.renderJqCron();
      }
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('submit.popup.return', function (data) {
      viewModel.selectedNotebook().viewSchedulerId(data.job_id);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submit-modal-editor').modal('hide');
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('show.jobs.panel', {
        id: data.job_id,
        "interface": data.type
      });
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('jobbrowser.data', function (jobs) {
      viewModel.withActiveSnippet(function (snippet) {
        if (!snippet || snippet.type() === 'impala') {
          return;
        }
        if (jobs.length > 0) {
          var progress = 0;
          var parent;
          jobs.forEach(function (job) {
            var id = job.shortId || job.id;
            var el = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.jobs-overlay li:contains(' + id + ')');
            if (!el.length) {
              return;
            }
            var context = knockout__WEBPACK_IMPORTED_MODULE_3__.contextFor(el[0]);
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
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.get.active.risks', function (callback) {
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
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.grid.shown', function (snippet) {
      (0,utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_15__["default"])('#snippet_' + snippet.id() + ' .dataTables_wrapper', function (el) {
        return el.is(':visible');
      }, function () {
        resizeToggleResultSettings(snippet, true);
        forceChartDraws();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id()).find('.snippet-grid-settings').scrollLeft(0);
      });
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('editor.chart.shown', function (snippet) {
      resizeToggleResultSettings(snippet, true);
    }, HUE_PUB_SUB_EDITOR_ID);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].subscribe('recalculate.name.description.width', function () {
      (0,utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_15__["default"])('.editorComponents .hue-title-bar .query-name', function (el) {
        return el.is(':visible');
      }, function () {
        var cumulativeWidth = 0;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.editorComponents .hue-title-bar ul li:not(.skip-width-calculation)').each(function () {
          cumulativeWidth += jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).outerWidth();
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.notebook-name-desc').css('max-width', (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.editorComponents .hue-title-bar').width() - cumulativeWidth - jquery__WEBPACK_IMPORTED_MODULE_0___default()('.editorComponents .hue-title-bar .pull-right').width() - 120) / 2 + 'px');
      });
    }, HUE_PUB_SUB_EDITOR_ID);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('updateResultHeaders', function (e) {
      hideFixedHeaders();
      redrawFixedHeaders(200);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('showAuthModal', function (e, data) {
      viewModel.authSessionUsername(window.LOGGED_USERNAME);
      viewModel.authSessionMessage(data['message']);
      viewModel.authSessionPassword('');
      viewModel.authSessionType(data['type']);
      viewModel.authSessionCallback(data['callback']);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#authModal' + window.EDITOR_SUFFIX).modal('show');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('hideHistoryModal', function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#clearHistoryModal' + window.EDITOR_SUFFIX).modal('hide');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('toggleResultSettings', function (e, snippet) {
      window.setTimeout(function () {
        var $snip = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + snippet.id());
        $snip.find('.chart').trigger('forceUpdate');
        $snip.find('.snippet-grid-settings').scrollLeft(0);
        if (snippet.isResultSettingsVisible()) {
          $snip.find('.table-results .grid-side').width(100 - $snip.find('.table-results .column-side').data('newWidth') - utils_html_bootstrapRatios__WEBPACK_IMPORTED_MODULE_13__["default"].margin() + '%');
        } else {
          $snip.find('.table-results .grid-side').width('100%');
        }
        redrawFixedHeaders();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('resize');
      }, 10);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('editorSizeChanged', function () {
      window.setTimeout(forceChartDraws, 50);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('redrawResults', function () {
      window.setTimeout(forceChartDraws, 50);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('executeStarted', function (e, options) {
      var $snip = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + options.snippet.id());
      var $el = $snip.find('.resultTable');
      if (options.vm.editorMode()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#queryResults').css({
          height: $el.height() + 'px'
        });
      }
      $el.data('scrollToCol', null);
      $el.data('scrollToRow', null);
      $snip.find('.progress-snippet').animate({
        height: '3px'
      }, 100);
      if ($el.hasClass('dt')) {
        $el.removeClass('dt');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#eT' + options.snippet.id() + 'jHueTableExtenderClonedContainer').remove();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#eT' + options.snippet.id() + 'jHueTableExtenderClonedContainerColumn').remove();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#eT' + options.snippet.id() + 'jHueTableExtenderClonedContainerCell').remove();
        if ($el.hueDataTable()) {
          $el.hueDataTable().fnDestroy();
        }
        $el.find('thead tr').empty();
        $el.data('lockedRows', {});
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('renderDataError', function (e, options) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('editor.snippet.result.normal', options.snippet);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('progress', function (e, options) {
      if (options.data === 100) {
        window.setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#snippet_' + options.snippet.id()).find('.progress-snippet').animate({
            height: '0'
          }, 100, function () {
            options.snippet.progress(0);
            redrawFixedHeaders();
          });
        }, 2000);
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('forceChartDraw', function (e, snippet) {
      window.setTimeout(function () {
        snippet.chartX.notifySubscribers();
        snippet.chartX.valueHasMutated();
      }, 100);
    });
    var hideTimeout = -1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('hideAutocomplete', function () {
      window.clearTimeout(hideTimeout);
      hideTimeout = window.setTimeout(function () {
        var $aceAutocomplete = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ace_editor.ace_autocomplete');
        if ($aceAutocomplete.is(':visible')) {
          $aceAutocomplete.hide();
        }
      }, 100);
    });
    var _resizeTimeout = -1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_11__["default"].publish('recalculate.name.description.width');
      window.clearTimeout(_resizeTimeout);
      _resizeTimeout = window.setTimeout(function () {
        forceChartDraws();
      }, 200);
    });
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["notebook~editor","defaultVendors~hue-e3924278","defaultVendors~hue-aacc2dbb","defaultVendors~hue-bc050c32","defaultVendors~hue-b9fa02b6","defaultVendors~hue-2ef5bd86","defaultVendors~hue-6b948b9f","defaultVendors~hue-fa70753b","defaultVendors~hue-e5abfd2a","hue-e981d915","hue-541bdf64","hue-15ab7d1f","hue-4bde8d39","hue-7cb30146","hue-a799d440","hue-16bbf7a6","hue-8dc1dc79","hue-221ed165","hue-027ccb81","hue-18218eda","hue-3d824a78","hue-3fe99f16","hue-b5650f80","hue-79cd9d02","hue-f2b57085","hue-3528fb62","hue-a2399487","hue-92506859","hue-875ef077"], () => (__webpack_exec__("./desktop/core/src/desktop/js/apps/notebook/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/notebook-bundle-a2a4f8506cb55bb7.js.map