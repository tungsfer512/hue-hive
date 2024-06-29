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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["tableBrowser"],{

/***/ "./desktop/core/src/desktop/js/apps/tableBrowser/app.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/tableBrowser/app.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! catalog/dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _metastoreViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metastoreViewModel */ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreViewModel.js");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var config_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! config/events */ "./desktop/core/src/desktop/js/config/events.ts");
/* harmony import */ var utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/timing/waitForRendered */ "./desktop/core/src/desktop/js/utils/timing/waitForRendered.ts");
/* harmony import */ var utils_url_getParameter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/url/getParameter */ "./desktop/core/src/desktop/js/utils/url/getParameter.ts");
/* harmony import */ var utils_url_replaceURL__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/url/replaceURL */ "./desktop/core/src/desktop/js/utils/url/replaceURL.ts");
/* harmony import */ var components_er_diagram_webcomp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/er-diagram/webcomp */ "./desktop/core/src/desktop/js/components/er-diagram/webcomp.ts");
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












var HUE_PUB_SUB_EDITOR_ID = 'metastore';
if (knockout__WEBPACK_IMPORTED_MODULE_1__.options) {
  knockout__WEBPACK_IMPORTED_MODULE_1__.options.deferUpdates = true;
}
utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('app.dom.loaded', function (app) {
  if (app !== 'metastore') {
    return;
  }
  var options = {
    user: window.LOGGED_USERNAME,
    sqlAnalyzerEnabled: window.HAS_SQL_ANALYZER,
    navigatorEnabled: window.HAS_CATALOG,
    navigatorUrl: window.CATALOG_URL
  };
  var viewModel = new _metastoreViewModel__WEBPACK_IMPORTED_MODULE_4__["default"](options);
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('metastore.scroll.to.top', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content').scrollTop(0);
  }, HUE_PUB_SUB_EDITOR_ID);
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('metastore.clear.selection', function () {
    viewModel.sources().forEach(function (source) {
      source.namespaces().forEach(function (namespace) {
        namespace.selectedDatabases.removeAll();
        namespace.databases().forEach(function (database) {
          database.selectedTables.removeAll();
        });
      });
    });
  }, HUE_PUB_SUB_EDITOR_ID);
  viewModel.currentTab.subscribe(function (tab) {
    if (tab === 'relationships') {
      // viewModel.database().table().getRelationships();
    } else if (tab === 'sample') {
      var selector = 'samplesTable';
      var bannerTopHeight = window.BANNER_TOP_HTML ? 30 : 0;
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).parents('.dataTables_wrapper').length === 0) {
        (0,utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_7__["default"])(selector, function (el) {
          return el.find('td').length > 0;
        }, function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).dataTable({
            bPaginate: false,
            bLengthChange: false,
            bInfo: false,
            bDestroy: true,
            bFilter: false,
            bAutoWidth: false,
            oLanguage: {
              sEmptyTable: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('No data available'),
              sZeroRecords: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('No matching records')
            },
            fnDrawCallback: function fnDrawCallback() {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).parents('.dataTables_wrapper').css('overflow-x', 'hidden');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).jHueTableExtender2({
                fixedHeader: true,
                fixedFirstColumn: true,
                includeNavigator: false,
                lockSelectedRow: false,
                parentId: 'sample',
                classToRemove: 'sample-table',
                mainScrollable: '.page-content',
                stickToTopPosition: 51 + bannerTopHeight,
                clonedContainerPosition: 'fixed',
                app: 'metastore'
              });
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).jHueHorizontalScrollbar();
            },
            aoColumnDefs: [{
              sType: 'numeric',
              aTargets: ['sort-numeric']
            }, {
              sType: 'string',
              aTargets: ['sort-string']
            }, {
              sType: 'date',
              aTargets: ['sort-date']
            }]
          });
        });
      }
    }
  });
  knockout__WEBPACK_IMPORTED_MODULE_1__.applyBindings(viewModel, jquery__WEBPACK_IMPORTED_MODULE_0___default()('#metastoreComponents')[0]);
  var configUpdated = function configUpdated(config) {
    viewModel.appConfig(config && config['app_config']);
  };
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish(config_events__WEBPACK_IMPORTED_MODULE_6__.GET_KNOWN_CONFIG_TOPIC, configUpdated);
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(config_events__WEBPACK_IMPORTED_MODULE_6__.CONFIG_REFRESHED_TOPIC, configUpdated);
  if ((0,utils_url_getParameter__WEBPACK_IMPORTED_MODULE_8__["default"])('refresh') === 'true') {
    // TODO: Use connectors in the table browser
    var connector = {
      id: viewModel.source().type,
      dialect: viewModel.source().type
    };
    if (viewModel.source().type === 'hive' || viewModel.source().type === 'impala') {
      connector.optimizer = 'api';
    }
    catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_2__["default"].getEntry({
      namespace: viewModel.source().namespace().namespace,
      compute: viewModel.source().namespace().compute,
      connector: connector,
      path: [],
      definition: {
        type: 'source'
      }
    }).then(function (entry) {
      entry.clearCache({
        silenceErrors: true
      });
      (0,utils_url_replaceURL__WEBPACK_IMPORTED_MODULE_9__["default"])('?');
    });
  }
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreColumn.js":
/*!**************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/tableBrowser/metastoreColumn.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




var MetastoreColumn = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {MetastoreTable} options.table
   * @param {DataCatalogEntry} options.catalogEntry
   * @constructor
   */
  function MetastoreColumn(options) {
    var _this = this;
    _classCallCheck(this, MetastoreColumn);
    this.table = options.table;
    this.catalogEntry = options.catalogEntry;
    this.favourite = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.popularity = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.comment = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.comment.subscribe(function (newValue) {
      _this.catalogEntry.getComment().then(function (comment) {
        if (comment !== newValue) {
          _this.catalogEntry.setComment(newValue).then(_this.comment)["catch"](function () {
            _this.comment(comment);
          });
        }
      });
    });
    this.table.catalogEntry.loadNavigatorMetaForChildren()["finally"](function () {
      _this.catalogEntry.getComment().then(_this.comment);
    });
  }
  return _createClass(MetastoreColumn, [{
    key: "showContextPopover",
    value: function showContextPopover(entry, event) {
      var $source = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target);
      var offset = $source.offset();
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('context.popover.show', {
        data: {
          type: 'catalogEntry',
          catalogEntry: entry.catalogEntry
        },
        orientation: 'right',
        source: {
          element: event.target,
          left: offset.left,
          top: offset.top - 2,
          right: offset.left + $source.width() + 1,
          bottom: offset.top + $source.height() - 2
        }
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetastoreColumn);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreDatabase.js":
/*!****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/tableBrowser/metastoreDatabase.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var catalog_analyzer_sqlAnalyzerRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! catalog/analyzer/sqlAnalyzerRepository */ "./desktop/core/src/desktop/js/catalog/analyzer/sqlAnalyzerRepository.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _metastoreTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metastoreTable */ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreTable.js");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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







var MetastoreDatabase = /*#__PURE__*/function () {
  /**
   * @param {object} options
   * @param {DataCatalogEntry} options.catalogEntry
   * @param {observable} options.sqlAnalyzerEnabled
   * @param {MetastoreViewModel} options.metastoreViewModel;
   * @constructor
   */
  function MetastoreDatabase(options) {
    var _this = this;
    _classCallCheck(this, MetastoreDatabase);
    this.catalogEntry = options.catalogEntry;
    this.metastoreViewModel = options.metastoreViewModel;
    this.loaded = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.loadingTables = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.loadingAnalysis = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.loadingComment = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.loadingTableComments = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.loadingTablePopularity = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.tables = knockout__WEBPACK_IMPORTED_MODULE_2__.observableArray();
    this.loading = knockout__WEBPACK_IMPORTED_MODULE_2__.pureComputed(function () {
      return _this.loadingTables() || _this.loadingAnalysis();
    });
    this.refreshing = knockout__WEBPACK_IMPORTED_MODULE_2__.pureComputed(function () {
      return _this.loadingTables() || _this.loadingAnalysis() || _this.loadingComment() || _this.loadingTableComments() || _this.loadingTablePopularity();
    });
    this.comment = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    this.comment.subscribe(function (newValue) {
      _this.catalogEntry.getComment().then(function (comment) {
        if (comment !== newValue) {
          _this.catalogEntry.setComment(newValue).then(_this.comment)["catch"](function () {
            _this.comment(comment);
          });
        }
      });
    });
    this.stats = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    this.navigatorMeta = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    this.showAddTagName = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.addTagName = knockout__WEBPACK_IMPORTED_MODULE_2__.observable('');
    this.selectedTables = knockout__WEBPACK_IMPORTED_MODULE_2__.observableArray();
    this.editingTable = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.table = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(null);
  }
  return _createClass(MetastoreDatabase, [{
    key: "onTableClick",
    value: function onTableClick(catalogEntry) {
      var _this2 = this;
      this.tables().some(function (table) {
        if (table.catalogEntry === catalogEntry) {
          _this2.setTable(table, function () {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('metastore.url.change');
          });
          return true;
        }
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this3 = this;
      if (this.loading()) {
        return;
      }
      // Clear will publish when done
      this.catalogEntry.clearCache().then(function () {
        _this3.load(function () {}, _this3.metastoreViewModel.sqlAnalyzerEnabled(), _this3.metastoreViewModel.navigatorEnabled());
      });
    }
  }, {
    key: "load",
    value: function load(callback, sqlAnalyzerEnabled, navigatorEnabled) {
      var _this4 = this;
      if (navigatorEnabled) {
        this.loadingComment(true);
        this.catalogEntry.getNavigatorMeta().then(this.navigatorMeta)["finally"](function () {
          _this4.loadingComment(false);
        });
      }
      this.catalogEntry.getComment().then(this.comment);
      this.loadingTables(true);
      this.catalogEntry.getChildren().then(function (tableEntries) {
        _this4.tables(tableEntries.map(function (tableEntry) {
          return new _metastoreTable__WEBPACK_IMPORTED_MODULE_4__["default"]({
            database: _this4,
            catalogEntry: tableEntry,
            sqlAnalyzerEnabled: sqlAnalyzerEnabled,
            navigatorEnabled: navigatorEnabled
          });
        }));
        if (navigatorEnabled) {
          _this4.loadingTableComments(true);
          _this4.catalogEntry.loadNavigatorMetaForChildren().then(function () {
            _this4.tables().forEach(function (table) {
              table.navigatorMeta(table.catalogEntry.navigatorMeta);
            });
          })["finally"](function () {
            _this4.loadingTableComments(false);
          });
        }
        if (sqlAnalyzerEnabled) {
          _this4.loadingTablePopularity(true);
          var sqlAnalyzer = catalog_analyzer_sqlAnalyzerRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getSqlAnalyzer(_this4.catalogEntry.getConnector());
          _this4.catalogEntry.loadSqlAnalyzerPopularityForChildren({
            sqlAnalyzer: sqlAnalyzer
          }).then(function () {
            _this4.tables().forEach(function (table) {
              table.sqlAnalyzerStats(table.catalogEntry.sqlAnalyzerPopularity);
            });
          })["finally"](function () {
            _this4.loadingTablePopularity(false);
          });
        }
        _this4.loaded(true);
      })["catch"](function () {
        _this4.tables([]);
      })["finally"](function () {
        _this4.loadingTables(false);
        if (callback) {
          callback();
        }
      });
      this.loadingAnalysis(true);
      this.catalogEntry.getAnalysis().then(this.stats)["catch"](function () {})["finally"](function () {
        _this4.loadingAnalysis(false);
      });
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_5__.setInLocalStorage)('metastore.last.selected.database', this.name);
    }
  }, {
    key: "setTableByName",
    value: function setTableByName(tableName, callback) {
      var _this5 = this;
      if (this.table() && this.table().catalogEntry.name === tableName) {
        return;
      }
      this.tables().some(function (metastoreTable) {
        if (metastoreTable.catalogEntry.name === tableName) {
          _this5.setTable(metastoreTable, callback);
          return true;
        }
      });
    }
  }, {
    key: "setTable",
    value: function setTable(metastoreTable, callback) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('metastore.scroll.to.top');
      this.table(metastoreTable);
      if (!metastoreTable.loaded()) {
        metastoreTable.load();
      }
      this.metastoreViewModel.currentTab('overview');
      if (callback) {
        callback();
      }
    }
  }, {
    key: "showContextPopover",
    value: function showContextPopover(entry, event, orientation) {
      var $source = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget || event.target);
      var offset = $source.offset();
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('context.popover.show', {
        data: {
          type: 'catalogEntry',
          catalogEntry: entry.catalogEntry
        },
        orientation: orientation || 'right',
        source: {
          element: event.target,
          left: offset.left,
          top: offset.top - 2,
          right: offset.left + (orientation === 'left' ? 0 : $source.width() + 1),
          bottom: offset.top + $source.height() - 2
        }
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetastoreDatabase);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreNamespace.js":
/*!*****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/tableBrowser/metastoreNamespace.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metastoreDatabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metastoreDatabase */ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreDatabase.js");
/* harmony import */ var catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! catalog/dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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







var MetastoreNamespace = /*#__PURE__*/function () {
  function MetastoreNamespace(options) {
    _classCallCheck(this, MetastoreNamespace);
    this.namespace = options.namespace;

    // TODO: Compute selection in the metastore?
    this.compute = options.namespace.computes[0];
    this.id = options.namespace.id;
    this.name = options.namespace.name;
    this.metastoreViewModel = options.metastoreViewModel;
    this.sourceType = options.sourceType;
    this.navigatorEnabled = options.navigatorEnabled;
    this.sqlAnalyzerEnabled = options.sqlAnalyzerEnabled;
    this.catalogEntry = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.database = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.databases = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    this.selectedDatabases = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    this.loading = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.lastLoadDatabasesPromise = undefined;
  }
  return _createClass(MetastoreNamespace, [{
    key: "loadDatabases",
    value: function loadDatabases() {
      var _this = this;
      if (this.loading() && this.lastLoadDatabasesPromise) {
        return this.lastLoadDatabasesPromise;
      }
      this.loading(true);
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      this.lastLoadDatabasesPromise = deferred.promise();
      deferred.fail(function () {
        _this.databases([]);
      }).always(function () {
        _this.loading(false);
      });

      // TODO: Use connectors in the table browser
      var connector = {
        type: this.sourceType,
        id: this.sourceType,
        dialect: this.sourceType
      };
      if (this.sourceType === 'hive' || this.sourceType === 'impala') {
        connector.optimizer = 'api';
      }
      catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_3__["default"].getEntry({
        namespace: this.namespace,
        compute: this.compute,
        connector: connector,
        path: [],
        definition: {
          type: 'source'
        }
      }).then(function (entry) {
        _this.catalogEntry(entry);
        entry.getChildren().then(function (databaseEntries) {
          _this.databases(databaseEntries.map(function (databaseEntry) {
            return new _metastoreDatabase__WEBPACK_IMPORTED_MODULE_2__["default"]({
              catalogEntry: databaseEntry,
              sqlAnalyzerEnabled: _this.sqlAnalyzerEnabled,
              metastoreViewModel: _this.metastoreViewModel
            });
          }));
          deferred.resolve();
        })["catch"](deferred.reject);
      });
      return this.lastLoadDatabasesPromise;
    }
  }, {
    key: "reload",
    value: function reload() {
      if (!this.loading() && this.catalogEntry()) {
        this.loading(true);
        // Clear will publish when done
        this.catalogEntry().clearCache();
      }
    }
  }, {
    key: "setDatabase",
    value: function setDatabase(metastoreDatabase, callback) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('metastore.scroll.to.top');
      this.database(metastoreDatabase);
      if (!metastoreDatabase.loaded()) {
        metastoreDatabase.load(callback, this.sqlAnalyzerEnabled(), this.navigatorEnabled(), this.sourceType);
      } else if (callback) {
        callback();
      }
    }
  }, {
    key: "onDatabaseClick",
    value: function onDatabaseClick(catalogEntry) {
      var _this2 = this;
      this.databases().some(function (database) {
        if (database.catalogEntry === catalogEntry) {
          _this2.setDatabase(database, function () {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('metastore.url.change');
          });
          if (_this2.database()) {
            _this2.database().table(null);
          }
          return true;
        }
      });
    }
  }, {
    key: "setDatabaseByName",
    value: function setDatabaseByName(databaseName, callback) {
      var _this3 = this;
      var whenLoaded = function whenLoaded(clearCacheOnMissing) {
        if (!databaseName) {
          databaseName = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_5__.getFromLocalStorage)('editor.last.selected.database') || (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_5__.getFromLocalStorage)('metastore.last.selected.database') || 'default';
          clearCacheOnMissing = false;
        }
        if (_this3.database() && _this3.database().catalogEntry.name === databaseName) {
          if (callback) {
            callback();
          }
          return;
        }
        var foundDatabases = _this3.databases().filter(function (database) {
          return database.catalogEntry.name === databaseName;
        });
        if (foundDatabases.length === 1) {
          _this3.setDatabase(foundDatabases[0], callback);
        } else if (clearCacheOnMissing) {
          _this3.catalogEntry().clearCache({
            silenceErrors: true
          }).then(function () {
            _this3.loadDatabases().done(function () {
              whenLoaded(false);
            });
          });
        } else {
          foundDatabases = _this3.databases().filter(function (database) {
            return database.catalogEntry.name === 'default';
          });
          if (foundDatabases.length === 1) {
            _this3.setDatabase(foundDatabases[0], callback);
          } else {}
        }
      };
      window.setTimeout(function () {
        if (_this3.loading() && _this3.lastLoadDatabasesPromise !== null) {
          _this3.lastLoadDatabasesPromise.done(function () {
            whenLoaded(true);
          });
        } else if (_this3.databases().length) {
          whenLoaded(true);
        } else {
          _this3.loadDatabases().done(function () {
            whenLoaded(true);
          });
        }
      }, 0);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetastoreNamespace);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreSource.js":
/*!**************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/tableBrowser/metastoreSource.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! catalog/contextCatalog */ "./desktop/core/src/desktop/js/catalog/contextCatalog.ts");
/* harmony import */ var catalog_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! catalog/events */ "./desktop/core/src/desktop/js/catalog/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _metastoreNamespace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metastoreNamespace */ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreNamespace.js");
/* harmony import */ var _ko_components_assist_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ko/components/assist/events */ "./desktop/core/src/desktop/js/ko/components/assist/events.js");
/* harmony import */ var config_hueConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! config/hueConfig */ "./desktop/core/src/desktop/js/config/hueConfig.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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










var MetastoreSource = /*#__PURE__*/function () {
  function MetastoreSource(options) {
    var _this = this;
    _classCallCheck(this, MetastoreSource);
    this.type = options.type;
    this.name = options.name;
    this.displayName = options.displayName;
    this.metastoreViewModel = options.metastoreViewModel;
    this.reloading = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.loading = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.lastLoadNamespacesDeferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
    this.namespace = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.namespaces = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    this.namespace.subscribe(function () {
      if (_this.namespace() && _this.namespace().databases().length === 0) {
        _this.namespace().loadDatabases();
      }
    });

    // When manually changed through dropdown
    this.namespaceChanged = function (newNamespace, previousNamespace) {
      if (previousNamespace.database() && !_this.namespace().database()) {
        // Try to set the same database by name, if not there it will revert to 'default'
        _this.namespace().setDatabaseByName(previousNamespace.database().catalogEntry.name, function () {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('metastore.url.change');
        });
      } else {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('metastore.url.change');
      }
    };
    this.connector = knockout__WEBPACK_IMPORTED_MODULE_1__.observable((0,config_hueConfig__WEBPACK_IMPORTED_MODULE_7__.findEditorConnector)(function (connector) {
      return connector.id === _this.type;
    }));
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_6__.ASSIST_DB_PANEL_IS_READY_EVENT, function () {
      _this.lastLoadNamespacesDeferred.done(function () {
        var namespaceId = _this.namespace().namespace.id;
        var localStorageKey = "assist_".concat(_this.type, "_").concat(namespaceId, ".lastSelectedDb");
        var lastSelectedDb = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)(localStorageKey);
        if (!lastSelectedDb && lastSelectedDb !== '') {
          lastSelectedDb = 'default';
        }
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_6__.ASSIST_SET_DATABASE_EVENT, {
          connector: _this.connector(),
          namespace: _this.namespace().namespace,
          name: lastSelectedDb
        });
      });
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(_ko_components_assist_events__WEBPACK_IMPORTED_MODULE_6__.ASSIST_IS_DB_PANEL_READY_EVENT);
    var getCurrentState = function getCurrentState() {
      var result = {
        namespaceId: null,
        database: null,
        table: null
      };
      if (_this.namespace()) {
        result.namespaceId = _this.namespace().id;
        if (_this.namespace().database()) {
          result.database = _this.namespace().database().catalogEntry.name;
          if (_this.namespace().database().table()) {
            result.table = _this.namespace().database().table().catalogEntry.name;
          }
        }
      }
      return result;
    };
    var setState = function setState(state) {
      if (state.namespaceId) {
        _this.setNamespaceById(state.namespaceId).done(function () {
          if (state.database) {
            _this.namespace().setDatabaseByName(state.database, function () {
              if (_this.namespace().database() && state.table) {
                _this.namespace().database().setTableByName(state.table);
              }
            });
          }
        });
      }
    };
    var completeRefresh = function completeRefresh(previousState) {
      _this.reloading(true);
      if (_this.namespace() && _this.namespace().database() && _this.namespace().database().table()) {
        _this.namespace().database().table(null);
      }
      if (_this.namespace() && _this.namespace().database()) {
        _this.namespace().database(null);
      }
      if (_this.namespace()) {
        _this.namespace(null);
      }
      _this.loadNamespaces().done(function () {
        setState(previousState);
      }).always(function () {
        _this.reloading(false);
      });
    };
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(catalog_events__WEBPACK_IMPORTED_MODULE_3__.NAMESPACES_REFRESHED_TOPIC, function (connectorId) {
      if (_this.type !== connectorId) {
        return;
      }
      var previousState = getCurrentState();
      completeRefresh(previousState);
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe('data.catalog.entry.refreshed', function (details) {
      var refreshedEntry = details.entry;
      if (refreshedEntry.getConnector().id !== _this.type) {
        return;
      }
      var previousState = getCurrentState();
      if (refreshedEntry.isSource()) {
        completeRefresh(previousState);
      } else if (refreshedEntry.isDatabase() && _this.namespace()) {
        _this.namespace().databases().some(function (database) {
          if (database.catalogEntry === refreshedEntry) {
            database.load(function () {
              setState(previousState);
            }, _this.metastoreViewModel.sqlAnalyzerEnabled(), _this.metastoreViewModel.navigatorEnabled());
            return true;
          }
        });
      } else if (refreshedEntry.isTableOrView()) {
        _this.namespace().databases().some(function (database) {
          if (database.catalogEntry.name === refreshedEntry.path[0]) {
            database.tables().some(function (table) {
              if (table.catalogEntry.name === refreshedEntry.name) {
                table.load();
                return true;
              }
            });
            return true;
          }
        });
      }
    });
  }
  return _createClass(MetastoreSource, [{
    key: "loadNamespaces",
    value: function loadNamespaces() {
      var _this2 = this;
      this.loading(true);
      (0,catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_2__.getNamespaces)({
        connector: this.connector()
      }).then(function (context) {
        var namespacesWithComputes = context.namespaces.filter(function (namespace) {
          return namespace.computes.length;
        });
        _this2.namespaces(namespacesWithComputes.map(function (namespace) {
          return new _metastoreNamespace__WEBPACK_IMPORTED_MODULE_5__["default"]({
            metastoreViewModel: _this2.metastoreViewModel,
            sourceType: _this2.type,
            navigatorEnabled: _this2.metastoreViewModel.navigatorEnabled,
            sqlAnalyzerEnabled: _this2.metastoreViewModel.sqlAnalyzerEnabled,
            namespace: namespace
          });
        }));
        _this2.namespace(_this2.namespaces()[0]);
        _this2.lastLoadNamespacesDeferred.resolve();
      })["catch"](this.lastLoadNamespacesDeferred.reject)["finally"](function () {
        _this2.loading(false);
      });
      return this.lastLoadNamespacesDeferred;
    }
  }, {
    key: "setNamespaceById",
    value: function setNamespaceById(namespaceId) {
      var _this3 = this;
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      this.lastLoadNamespacesDeferred.done(function () {
        var found = _this3.namespaces().some(function (namespace) {
          if (namespace.namespace.id === namespaceId) {
            _this3.namespace(namespace);
            deferred.resolve();
            return true;
          }
        });
        if (!found) {
          deferred.reject();
        }
      }).fail(deferred.reject);
      return deferred.promise();
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetastoreSource);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreTable.js":
/*!*************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/tableBrowser/metastoreTable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIALECT_HIVE": () => (/* binding */ DIALECT_HIVE),
/* harmony export */   "DIALECT_SPARK": () => (/* binding */ DIALECT_SPARK),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var catalog_analyzer_sqlAnalyzerRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! catalog/analyzer/sqlAnalyzerRepository */ "./desktop/core/src/desktop/js/catalog/analyzer/sqlAnalyzerRepository.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var _metastoreColumn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metastoreColumn */ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreColumn.js");
/* harmony import */ var _metastoreTableSamples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metastoreTableSamples */ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreTableSamples.js");
/* harmony import */ var _metastoreTablePartitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metastoreTablePartitions */ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreTablePartitions.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_html_deXSS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/html/deXSS */ "./desktop/core/src/desktop/js/utils/html/deXSS.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
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












var contextPopoverTimeout = -1;
var DIALECT_HIVE = 'hive';
var DIALECT_SPARK = 'sparksql';
var MetastoreTable = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {MetastoreDatabase} options.database
   * @param {DataCatalogEntry} options.catalogEntry
   * @param {observable} options.sqlAnalyzerEnabled
   * @param {observable} options.navigatorEnabled
   * @constructor
   */
  function MetastoreTable(options) {
    var _this = this;
    _classCallCheck(this, MetastoreTable);
    this.database = options.database;
    this.sqlAnalyzerEnabled = options.sqlAnalyzerEnabled;
    this.navigatorEnabled = options.navigatorEnabled;
    this.catalogEntry = options.catalogEntry;

    // TODO: Check if enough or if we need to fetch additional details
    this.isView = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(this.catalogEntry.isView());
    this.isModel = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(this.catalogEntry.isModel());
    this.viewSql = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    this.sqlAnalyzerStats = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    this.sqlAnalyzerDetails = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    this.topJoins = knockout__WEBPACK_IMPORTED_MODULE_2__.observableArray();
    this.navigatorMeta = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    this.relationshipsDetails = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    this.loaded = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.loadingDetails = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.loadingColumns = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.loadingQueries = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.loadingComment = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.loadingViewSql = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.loadingTopJoins = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.columns = knockout__WEBPACK_IMPORTED_MODULE_2__.observableArray();
    this.samples = new _metastoreTableSamples__WEBPACK_IMPORTED_MODULE_5__["default"]({
      metastoreTable: this
    });
    this.partitions = new _metastoreTablePartitions__WEBPACK_IMPORTED_MODULE_6__["default"]({
      metastoreTable: this
    });
    this.loading = knockout__WEBPACK_IMPORTED_MODULE_2__.pureComputed(function () {
      return _this.loadingDetails() || _this.loadingColumns();
    });
    this.refreshing = knockout__WEBPACK_IMPORTED_MODULE_2__.pureComputed(function () {
      return _this.loadingDetails() || _this.loadingColumns() || _this.loadingQueries() || _this.loadingComment() || _this.samples.loading() || _this.partitions.loading() || _this.loadingViewSql() || _this.loadingTopJoins();
    });
    this.partitionsCountLabel = knockout__WEBPACK_IMPORTED_MODULE_2__.pureComputed(function () {
      if (_this.partitions.values().length === window.METASTORE_PARTITION_LIMIT) {
        return _this.partitions.values().length + '+';
      }
      return _this.partitions.values().length;
    });
    this.tableDetails = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    this.tableStats = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    this.refreshingTableStats = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.showAddTagName = knockout__WEBPACK_IMPORTED_MODULE_2__.observable(false);
    this.addTagName = knockout__WEBPACK_IMPORTED_MODULE_2__.observable('');
    this.comment = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    this.editingComment = knockout__WEBPACK_IMPORTED_MODULE_2__.observable();
    if (this.catalogEntry.hasResolvedComment()) {
      this.comment(this.catalogEntry.getResolvedComment());
    }
    this.commentWithoutNewLines = knockout__WEBPACK_IMPORTED_MODULE_2__.pureComputed(function () {
      return _this.comment() ? (0,utils_html_deXSS__WEBPACK_IMPORTED_MODULE_8__["default"])(_this.comment().replace(/[\n\r]+/gi, ' ')) : '';
    });
    this.comment.subscribe(function (newValue) {
      _this.catalogEntry.getComment().then(function (comment) {
        if (comment !== newValue) {
          _this.catalogEntry.setComment(newValue).then(_this.comment)["catch"](function () {
            _this.comment(comment);
          });
        }
      });
    });
    this.refreshTableStats = function () {
      if (_this.refreshingTableStats()) {
        return;
      }
      _this.refreshingTableStats(true);
      _this.catalogEntry.getAnalysis({
        refreshAnalysis: true,
        silenceErrors: true
      }).then(function () {
        _this.fetchDetails();
      })["catch"](function (data) {
        _this.refreshingTableStats(false);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
          message: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_10__["default"])('An error occurred refreshing the table stats. Please try again.')
        });
        console.error('apiHelper.refreshTableStats error');
        console.error(data);
      });
    };
    this.fetchFields = function () {
      _this.loadingColumns(true);
      _this.catalogEntry.getChildren().then(function (columnEntries) {
        _this.columns(columnEntries.map(function (columnEntry) {
          return new _metastoreColumn__WEBPACK_IMPORTED_MODULE_4__["default"]({
            catalogEntry: columnEntry,
            table: _this
          });
        }));
        var sqlAnalyzer = catalog_analyzer_sqlAnalyzerRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getSqlAnalyzer(_this.catalogEntry.getConnector());
        _this.catalogEntry.getSqlAnalyzerMeta({
          sqlAnalyzer: sqlAnalyzer
        }).then(function (sqlAnalyzerMeta) {
          _this.sqlAnalyzerDetails(sqlAnalyzerMeta);
          var topColIndex = {};
          sqlAnalyzerMeta.topCols.forEach(function (topCol) {
            topColIndex[topCol.name] = topCol;
          });
          _this.columns().forEach(function (column) {
            if (topColIndex[column.catalogEntry.name]) {
              column.popularity(topColIndex[column.catalogEntry.name].score);
            }
          });
        })["catch"](function () {})["finally"](function () {
          _this.loadingQueries(false);
        });
      })["catch"](function () {
        _this.columns([]);
      })["finally"](function () {
        _this.loadingColumns(false);
      });
    };
    this.fetchDetails = function () {
      _this.loadingComment(true);
      _this.database.catalogEntry.loadNavigatorMetaForChildren().then(function () {
        _this.catalogEntry.getComment().then(_this.comment);
      })["finally"](function () {
        _this.loadingComment(false);
      });
      if (_this.catalogEntry.isView()) {
        _this.loadingViewSql(true);
      }
      var sqlAnalyzer = catalog_analyzer_sqlAnalyzerRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getSqlAnalyzer(_this.catalogEntry.getConnector());
      _this.catalogEntry.getTopJoins({
        silenceErrors: true,
        sqlAnalyzer: sqlAnalyzer
      }).then(function (topJoins) {
        if (topJoins && topJoins.values) {
          var joins = [];
          var ownQidLower = _this.catalogEntry.path.join('.').toLowerCase();
          var ownNameLower = _this.catalogEntry.name.toLowerCase();
          var ownDbNameLower = _this.database.catalogEntry.name.toLowerCase();
          var joinIndex = {};
          var joinColsIndex = {};
          topJoins.values.forEach(function (topJoin) {
            if (topJoin.tables.length === 2) {
              topJoin.tables.forEach(function (table) {
                var tableLower = table.toLowerCase();
                if (tableLower !== ownQidLower && tableLower !== ownNameLower) {
                  var name = tableLower.indexOf(ownDbNameLower + '.') === 0 ? table.substring(ownDbNameLower.length + 1) : table;
                  if (!joinIndex[name]) {
                    joinIndex[name] = {
                      tableName: name,
                      tablePath: table.split('.'),
                      joinCols: [],
                      queryCount: 0
                    };
                  }
                  var join = joinIndex[name];
                  join.queryCount += topJoin.totalQueryCount;
                  topJoin.joinCols.forEach(function (joinCol) {
                    var cleanCols = {
                      queryCount: topJoin.totalQueryCount
                    };
                    if (joinCol.columns.length === 2) {
                      joinCol.columns.forEach(function (col) {
                        var colLower = col.toLowerCase();
                        if (colLower.indexOf(ownQidLower + '.') === 0) {
                          cleanCols.source = colLower.substring(ownDbNameLower.length + 1);
                          cleanCols.sourcePath = col.split('.');
                        } else if (colLower.indexOf(ownNameLower + '.') === 0) {
                          cleanCols.source = colLower;
                          cleanCols.sourcePath = col.split('.');
                          cleanCols.sourcePath.unshift(ownDbNameLower);
                        } else if (colLower.indexOf(ownDbNameLower + '.') === 0) {
                          cleanCols.target = colLower.substring(ownDbNameLower.length + 1);
                          cleanCols.targetPath = col.split('.');
                        } else {
                          cleanCols.target = col;
                          cleanCols.targetPath = col.split('.');
                        }
                      });
                    }
                    if (cleanCols.source && cleanCols.target) {
                      if (joinColsIndex[ownQidLower + join.tableName + cleanCols.source + cleanCols.target]) {
                        joinColsIndex[ownQidLower + join.tableName + cleanCols.source + cleanCols.target].queryCount += topJoin.totalQueryCount;
                      } else {
                        joinColsIndex[ownQidLower + join.tableName + cleanCols.source + cleanCols.target] = cleanCols;
                        join.joinCols.push(cleanCols);
                      }
                    }
                  });
                }
              });
            }
          });
          Object.keys(joinIndex).forEach(function (key) {
            var join = joinIndex[key];
            if (join.joinCols.length) {
              join.joinCols.sort(function (a, b) {
                return b.queryCount - a.queryCount;
              });
              joins.push(join);
            }
          });
          joins.sort(function (a, b) {
            return b.queryCount - a.queryCount;
          });
          _this.topJoins(joins);
        }
      })["finally"](function () {
        _this.loadingTopJoins(false);
      });
      _this.loadingDetails(true);
      _this.catalogEntry.getAnalysis().then(function (analysis) {
        _this.tableDetails(analysis);
        _this.tableStats(analysis.details.stats);
        _this.loaded(true);
        if (analysis.partition_keys.length) {
          _this.partitions.detailedKeys(analysis.partition_keys);
          _this.partitions.load();
        } else {
          _this.partitions.loading(false);
          _this.partitions.loaded(true);
        }
        var found = analysis.properties && analysis.properties.some(function (property) {
          if (property.col_name.toLowerCase() === 'view original text:') {
            _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].formatSql({
              statements: property.data_type
            }).then(function (formatResponse) {
              _this.viewSql(formatResponse.status === 0 ? formatResponse.formatted_statements : property.data_type);
            })["catch"](function () {
              _this.viewSql(property.data_type);
            })["finally"](function () {
              _this.loadingViewSql(false);
            });
            return true;
          }
        });
        if (!found) {
          _this.loadingViewSql(false);
        }
      })["catch"](function () {
        _this.partitions.loading(false);
        _this.partitions.loaded(true);
        _this.loadingViewSql(false);
      })["finally"](function () {
        _this.refreshingTableStats(false);
        _this.loadingDetails(false);
      });
      _this.samples.load();
    };
    this.drop = function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default().post('/tables/drop/' + _this.database.catalogEntry.name, {
        table_selection: knockout__WEBPACK_IMPORTED_MODULE_2__.mapping.toJSON([_this.database.catalogEntry.name]),
        skip_trash: 'off',
        is_embeddable: true,
        cluster: JSON.stringify(_this.database.catalogEntry.compute)
      }).done(function (resp) {
        if (resp.history_uuid) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('notebook.task.submitted', resp);
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
            message: resp.message
          });
        }
      });
    };
    this.getRelationships = function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default().post('/metadata/api/navigator/lineage', {
        id: _this.navigatorMeta().identity
      }).done(function (data) {
        if (data && data.status === 0) {
          _this.relationshipsDetails(knockout__WEBPACK_IMPORTED_MODULE_2__.mapping.fromJS(data));
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
            message: data.message
          });
        }
      }).fail(function (xhr) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_INFO_TOPIC, {
          message: xhr.responseText
        });
      });
    };
  }
  return _createClass(MetastoreTable, [{
    key: "reload",
    value: function reload() {
      this.samples.loaded(false);
      this.partitions.loaded(false);
      // Clear will publish when done
      this.catalogEntry.clearCache();
    }
  }, {
    key: "enableImport",
    value: function enableImport() {
      var detailsLoaded = !!this.tableDetails();
      var dialect = this.catalogEntry.getDialect();
      var isView = this.catalogEntry.isView();
      var isTransactionalHive = dialect === DIALECT_HIVE && this.catalogEntry.isTransactionalTable();
      var isSpark = dialect === DIALECT_SPARK;
      return detailsLoaded && !(isSpark || isView || isTransactionalHive);
    }
  }, {
    key: "showImportData",
    value: function showImportData() {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#import-data-modal').empty().html('<div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button><h2 class="modal-title"></h2></div><div class="modal-body"><i class="fa fa-spinner fa-spin fa-2x muted"></i></div>').modal('show');
      jquery__WEBPACK_IMPORTED_MODULE_1___default().get('/metastore/table/' + this.catalogEntry.path.join('/') + '/load?source_type=' + this.catalogEntry.getConnector().id).done(function (data) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#import-data-modal').html(data['data']);
      }).fail(function (xhr) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_7__.GLOBAL_ERROR_TOPIC, {
          message: xhr.responseText
        });
      });
    }
  }, {
    key: "load",
    value: function load() {
      this.fetchFields();
      this.fetchDetails();
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('metastore.loaded.table');
    }
  }, {
    key: "showContextPopover",
    value: function showContextPopover(entry, event, orientation) {
      window.clearTimeout(contextPopoverTimeout);
      var $source = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget || event.target);
      var offset = $source.offset();
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_9__["default"].publish('context.popover.show', {
        data: {
          type: 'catalogEntry',
          catalogEntry: entry.catalogEntry
        },
        orientation: orientation || 'right',
        source: {
          element: event.target,
          left: offset.left,
          top: offset.top - 2,
          right: offset.left + (orientation === 'left' ? 0 : $source.width() + 1),
          bottom: offset.top + $source.height() - 2
        }
      });
    }
  }, {
    key: "showContextPopoverDelayed",
    value: function showContextPopoverDelayed(entry, event, orientation) {
      var _this2 = this;
      window.clearTimeout(contextPopoverTimeout);
      contextPopoverTimeout = window.setTimeout(function () {
        _this2.showContextPopover(entry, event, orientation);
      }, 500);
    }
  }, {
    key: "clearContextPopoverDelay",
    value: function clearContextPopoverDelay() {
      window.clearInterval(contextPopoverTimeout);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetastoreTable);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreTablePartitions.js":
/*!***********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/tableBrowser/metastoreTablePartitions.js ***!
  \***********************************************************************************/
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
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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





var MetastoreTablePartitions = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {MetastoreTable} options.metastoreTable
   */
  function MetastoreTablePartitions(options) {
    var _this = this;
    _classCallCheck(this, MetastoreTablePartitions);
    this.detailedKeys = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    this.keys = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    this.values = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    this.selectedValues = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    this.valuesFlat = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.values().map(function (item) {
        return item.partitionSpec;
      });
    });
    this.selectedValuesFlat = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return _this.selectedValues().map(function (item) {
        return item.partitionSpec;
      });
    });
    this.metastoreTable = options.metastoreTable;
    this.loaded = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.loading = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    this.sortDesc = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(true);
    this.filters = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([]);
    this.typeaheadValues = function (column) {
      var values = [];
      _this.values().forEach(function (row) {
        var cell = row.columns[_this.keys().indexOf(column())];
        if (values.indexOf(cell) !== -1) {
          values.push(cell);
        }
      });
      return values;
    };
    this.addFilter = function () {
      _this.filters.push(knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default().fromJS({
        column: '',
        value: ''
      }));
    };
    this.removeFilter = function (data) {
      _this.filters.remove(data);
      if (_this.filters().length === 0) {
        _this.sortDesc(true);
        _this.filter();
      }
    };
    this.filter = function () {
      _this.loading(true);
      _this.loaded(false);
      var filters = JSON.parse(knockout__WEBPACK_IMPORTED_MODULE_1__.toJSON(_this.filters));
      var postData = {};
      filters.forEach(function (filter) {
        postData[filter.column] = filter.value;
      });
      postData['sort'] = _this.sortDesc() ? 'desc' : 'asc';
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        type: 'POST',
        url: '/metastore/table/' + _this.metastoreTable.catalogEntry.path.join('/') + '/partitions',
        data: postData,
        dataType: 'json'
      }).done(function (data) {
        _this.values(data.partition_values_json);
        _this.loading(false);
        _this.loaded(true);
      });
    };
    this.preview = {
      keys: knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(),
      values: knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray()
    };
  }
  return _createClass(MetastoreTablePartitions, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      if (this.loaded()) {
        return;
      }
      this.loading(true);
      this.metastoreTable.catalogEntry.getPartitions().then(function (partitions) {
        _this2.keys(partitions.partition_keys_json);
        _this2.values(partitions.partition_values_json);
        _this2.preview.values(_this2.values().slice(0, 5));
        _this2.preview.keys(_this2.keys());
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('metastore.loaded.partitions');
      })["finally"](function () {
        _this2.loading(false);
        _this2.loaded(true);
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetastoreTablePartitions);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreTableSamples.js":
/*!********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/tableBrowser/metastoreTableSamples.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
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


var MetastoreTableSamples = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {MetastoreTable} options.metastoreTable
   */
  function MetastoreTableSamples(options) {
    _classCallCheck(this, MetastoreTableSamples);
    this.rows = knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray();
    this.headers = knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray();
    this.metastoreTable = options.metastoreTable;
    this.hasErrors = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(false);
    this.errorMessage = knockout__WEBPACK_IMPORTED_MODULE_0__.observable();
    this.loaded = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(false);
    this.loading = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(false);
    this.preview = {
      headers: knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray(),
      rows: knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray()
    };
  }
  return _createClass(MetastoreTableSamples, [{
    key: "load",
    value: function load() {
      var _this = this;
      if (this.loaded()) {
        return;
      }
      this.hasErrors(false);
      this.loading(true);
      this.metastoreTable.catalogEntry.getSample().then(function (sample) {
        _this.rows(sample.data);
        _this.headers(sample.meta.map(function (meta) {
          return meta.name;
        }));
        _this.preview.rows(_this.rows().slice(0, 3));
        _this.preview.headers(_this.headers());
      })["catch"](function (message) {
        _this.errorMessage(message);
        _this.hasErrors(true);
      })["finally"](function () {
        _this.loading(false);
        _this.loaded(true);
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetastoreTableSamples);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreViewModel.js":
/*!*****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/tableBrowser/metastoreViewModel.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _propsMappers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propsMappers */ "./desktop/core/src/desktop/js/apps/tableBrowser/propsMappers.ts");
/* harmony import */ var _metastoreSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metastoreSource */ "./desktop/core/src/desktop/js/apps/tableBrowser/metastoreSource.js");
/* harmony import */ var catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! catalog/dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var config_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! config/events */ "./desktop/core/src/desktop/js/config/events.ts");
/* harmony import */ var config_hueConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! config/hueConfig */ "./desktop/core/src/desktop/js/config/hueConfig.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
/* harmony import */ var utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/timing/waitForRendered */ "./desktop/core/src/desktop/js/utils/timing/waitForRendered.ts");
/* harmony import */ var utils_url_changeURL__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/url/changeURL */ "./desktop/core/src/desktop/js/utils/url/changeURL.ts");
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












var MetastoreViewModel = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {string} options.user
   * @param {Number} [options.partitionsLimit]
   * @param {boolean} [options.sqlAnalyzerEnabled]
   * @param {boolean} [options.navigatorEnabled]
   * @param {String} options.sourceType
   * @param {String} options.navigatorUrl
   * @constructor
   */
  function MetastoreViewModel(options) {
    var _this = this;
    _classCallCheck(this, MetastoreViewModel);
    this.partitionsLimit = options.partitionsLimit;
    this.assistAvailable = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(true);
    this.isLeftPanelVisible = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.withLocalStorage)('assist.assist_panel_visible', this.isLeftPanelVisible, true);
    this.isLeftPanelVisible.subscribe(function () {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('assist.forceRender');
    });
    this.sqlAnalyzerEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.sqlAnalyzerEnabled || false);
    this.navigatorEnabled = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.navigatorEnabled || false);
    this.appConfig = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.propsMappers = _propsMappers__WEBPACK_IMPORTED_MODULE_2__;
    this.source = knockout__WEBPACK_IMPORTED_MODULE_1__.observable();
    this.sources = knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray();
    this.source.subscribe(function (newValue) {
      newValue.loadNamespaces().done(function () {
        if (newValue.namespace()) {
          newValue.namespace().loadDatabases().done(function () {
            _this.loadUrl();
          });
        }
      });
    });

    // When manually changed through dropdown
    this.sourceChanged = function () {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('metastore.url.change');
    };
    this.setDbAndTableByName = function (dbName, tableName, callback) {
      _this.source().namespace().setDatabaseByName(dbName, function () {
        _this.source().namespace().database().setTableByName(tableName, function () {
          _this.sourceChanged();
          callback();
        });
      });
    };
    this.loading = knockout__WEBPACK_IMPORTED_MODULE_1__.pureComputed(function () {
      return !_this.source() || _this.source().loading();
    });

    // TODO: Support dynamic config changes
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish(config_events__WEBPACK_IMPORTED_MODULE_5__.GET_KNOWN_CONFIG_TOPIC, function (clusterConfig) {
      var initialSourceType = options.sourceType || 'hive';
      if (clusterConfig && clusterConfig.app_config && clusterConfig.app_config.catalogs) {
        var sources = [];
        if (clusterConfig.app_config.catalogs) {
          clusterConfig.app_config.catalogs.forEach(function (interpreter) {
            sources.push(new _metastoreSource__WEBPACK_IMPORTED_MODULE_3__["default"]({
              metastoreViewModel: _this,
              displayName: interpreter.displayName,
              name: interpreter.name,
              type: interpreter.type
            }));
          });
        }
        if (!sources.length) {
          sources.push(new _metastoreSource__WEBPACK_IMPORTED_MODULE_3__["default"]({
            metastoreViewModel: _this,
            displayName: initialSourceType,
            name: initialSourceType,
            type: initialSourceType
          }));
        }
        _this.sources(sources);
        var found = sources.some(function (source) {
          if (source.type === initialSourceType) {
            _this.source(source);
            return true;
          }
        });
        if (!found) {
          _this.source(sources[0]);
        }
      }
    });
    this.navigatorEnabled.subscribe(function (newValue) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('meta.navigator.enabled', newValue);
    });
    this.navigatorUrl = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.navigatorUrl);
    this.currentTab = knockout__WEBPACK_IMPORTED_MODULE_1__.observable('');
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.database.selected', function (entry) {
      if (_this.source().type !== entry.getConnector().id) {
        var found = _this.sources().some(function (source) {
          if (source.type === entry.getConnector().id) {
            _this.source(source);
            return true;
          }
        });
        if (!found) {
          return;
        }
      }
      if (_this.source().namespace().id !== entry.namespace.id) {
        var _found = _this.source().namespaces().some(function (namespace) {
          if (namespace.id === entry.namespace.id) {
            _this.source().namespace(namespace);
            return true;
          }
        });
        if (!_found) {
          return;
        }
      }
      if (_this.source().namespace().database()) {
        _this.source().namespace().database().table(null);
      }
      _this.source().namespace().setDatabaseByName(entry.name, function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('metastore.url.change');
      });
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.table.selected', function (entry) {
      _this.loadTableDef(entry, function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('metastore.url.change');
      });
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('metastore.url.change', function () {
      var possibleKnoxUrlPathPrefix = window.HUE_BASE_URL;
      var prefix = possibleKnoxUrlPathPrefix + '/hue/metastore/';
      if (_this.source() && _this.source().namespace()) {
        var params = {
          source_type: _this.source().type
        };
        if (window.HAS_MULTI_CLUSTER) {
          params.namespace = _this.source().namespace().id;
        }
        if (_this.source().namespace().database() && _this.source().namespace().database().table()) {
          (0,utils_url_changeURL__WEBPACK_IMPORTED_MODULE_10__["default"])(prefix + 'table/' + _this.source().namespace().database().table().catalogEntry.path.join('/'), params);
        } else if (_this.source().namespace().database()) {
          (0,utils_url_changeURL__WEBPACK_IMPORTED_MODULE_10__["default"])(prefix + 'tables/' + _this.source().namespace().database().catalogEntry.name, params);
        } else {
          (0,utils_url_changeURL__WEBPACK_IMPORTED_MODULE_10__["default"])(prefix + 'databases', params);
        }
      }
    });
    window.onpopstate = function () {
      if (window.location.pathname.indexOf('/metastore') > -1) {
        _this.loadUrl();
      }
    };
    this.databasesBreadcrumb = function () {
      if (_this.source().namespace().database()) {
        _this.source().namespace().database().table(null);
      }
      _this.source().namespace().database(null);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('metastore.url.change');
    };
    this.tablesBreadcrumb = function () {
      _this.source().namespace().database().table(null);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('metastore.url.change');
    };
    this.scrollToColumn = function (col) {
      if (!col.table.samples.loading()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content').scrollTop(0);
        _this.currentTab('sample');
        (0,utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_9__["default"])('#sampleTable', function (el) {
          return el.parent().hasClass('dataTables_wrapper');
        }, function () {
          var sampleTable = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sampleTable');
          var sampleCol = sampleTable.find('th').filter(function () {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text()).indexOf(col.catalogEntry.name) > -1;
          });
          sampleTable.find('.columnSelected').removeClass('columnSelected');
          sampleTable.find('tr td:nth-child(' + (sampleCol.index() + 1) + ')').addClass('columnSelected');
          var scrollLeft = 0;
          sampleTable.find('th:lt(' + sampleCol.index() + ')').each(function () {
            scrollLeft += jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).outerWidth();
          });
          scrollLeft = Math.max(0, scrollLeft - 40);
          sampleTable.parent().scrollLeft(scrollLeft);
          sampleTable.parent().trigger('scroll_update');
        });
      }
    };
  }
  return _createClass(MetastoreViewModel, [{
    key: "loadTableDef",
    value: function loadTableDef(entry, callback) {
      var _this2 = this;
      if (this.source().type !== entry.getConnector().id) {
        var found = this.sources().some(function (source) {
          if (source.type === entry.getConnector().id) {
            _this2.source(source);
            return true;
          }
        });
        if (!found) {
          return;
        }
      }
      if (this.source().namespace().id !== entry.namespace.id) {
        var _found2 = this.source().namespaces().some(function (namespace) {
          if (namespace.id === entry.namespace.id) {
            _this2.source().namespace(namespace);
            return true;
          }
        });
        if (!_found2) {
          return;
        }
      }
      this.source().namespace().setDatabaseByName(entry.path[0], function () {
        if (_this2.source().namespace().database()) {
          if (_this2.source().namespace().database().table() && _this2.source().namespace().database().table().catalogEntry.name === entry.name) {
            if (callback) {
              callback();
            }
            return;
          }
          var setTableAfterLoad = function setTableAfterLoad(clearDbCacheOnMissing) {
            var foundTables = _this2.source().namespace().database().tables().filter(function (table) {
              return table.catalogEntry.name === entry.name;
            });
            if (foundTables.length === 1) {
              _this2.source().namespace().database().setTable(foundTables[0], callback);
            } else if (clearDbCacheOnMissing) {
              var dbEntry = _this2.source().namespace().database().catalogEntry;
              dbEntry.getChildren({
                refreshCache: true,
                silenceErrors: true
              }).then(function (childEntries) {
                if (childEntries.some(function (childEntry) {
                  return childEntry.name === entry.name;
                })) {
                  _this2.source().namespace().database().load(function () {
                    setTableAfterLoad(false);
                  });
                } else {
                  dbEntry.clearCache({
                    invalidate: 'invalidate',
                    silenceErrors: true,
                    targetChild: entry.name
                  }).then(function () {
                    _this2.source().namespace().database().load(function () {
                      setTableAfterLoad(false);
                    });
                  });
                }
              })["catch"](function () {});
            }
          };
          if (!_this2.source().namespace().database().loaded()) {
            var doOnce = _this2.source().namespace().database().loaded.subscribe(function () {
              setTableAfterLoad(true);
              doOnce.dispose();
            });
          } else {
            setTableAfterLoad(true);
          }
        }
      });
    }
  }, {
    key: "loadUrl",
    value: function loadUrl() {
      var _this3 = this;
      var path = window.location.pathname.startsWith(window.HUE_BASE_URL) ? window.location.pathname.substr(window.HUE_BASE_URL.length) : window.location.pathname.substr(4) || '/metastore/tables';
      var pathParts = path.split('/');
      if (pathParts[0] === '') {
        pathParts.shift();
      }
      while (pathParts[0] === 'hue') {
        pathParts.shift();
      }
      if (pathParts[0] === 'metastore') {
        pathParts.shift();
      }
      var loadedDeferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      if (!this.loading()) {
        loadedDeferred.resolve();
      } else {
        var loadSub = this.loading.subscribe(function () {
          loadSub.dispose();
          loadedDeferred.resolve();
        });
      }
      var sourceAndNamespaceDeferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      loadedDeferred.done(function () {
        var search = location.search;
        var namespaceId;
        var connectorId;
        var sourceType;
        if (search) {
          search = search.replace('?', '');
          search.split('&').forEach(function (param) {
            if (param.indexOf('namespace=') === 0) {
              namespaceId = param.replace('namespace=', '');
            } else if (param.indexOf('source_type=') === 0) {
              sourceType = param.replace('source_type=', ''); // Keep old links working
            } else if (param.indexOf('source=') === 0) {
              sourceType = param.replace('source=', ''); // Keep old links working
            } else if (param.indexOf('connector_id=') === 0) {
              connectorId = param.replace('connector_id=', '');
            }
          });
        }
        if (!connectorId && sourceType) {
          connectorId = sourceType;
        }
        if (connectorId && connectorId !== _this3.source().connector().id) {
          var found = _this3.sources().some(function (source) {
            if (connectorId === source.connector().id) {
              _this3.source(source);
              return true;
            }
          });
          if (!found) {
            sourceAndNamespaceDeferred.reject();
            return;
          }
        }
        if (!namespaceId && (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)('contextSelector.lastSelectedNamespace')) {
          namespaceId = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)('contextSelector.lastSelectedNamespace').id;
        }
        _this3.source().lastLoadNamespacesDeferred.done(function () {
          if (namespaceId && namespaceId !== _this3.source().namespace().id) {
            var _found3 = _this3.source().namespaces().some(function (namespace) {
              if (namespace.id === namespaceId) {
                _this3.source().namespace(namespace);
                return true;
              }
            });
            if (!_found3) {
              sourceAndNamespaceDeferred.reject();
              return;
            } else {
              sourceAndNamespaceDeferred.resolve();
            }
          } else {
            sourceAndNamespaceDeferred.resolve();
          }
        });
      });
      sourceAndNamespaceDeferred.done(function () {
        var namespace = _this3.source().namespace();
        switch (pathParts[0]) {
          case 'databases':
            if (namespace.database()) {
              namespace.database().table(null);
              namespace.database(null);
            }
            break;
          case 'tables':
            if (namespace.database()) {
              namespace.database().table(null);
            }
            namespace.setDatabaseByName(pathParts[1]);
            break;
          case 'table':
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('metastore.loaded.table', function () {
              _this3.currentTab('overview');
            }, 'metastore');
            catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_4__["default"].getEntry({
              connector: (0,config_hueConfig__WEBPACK_IMPORTED_MODULE_6__.findEditorConnector)(function (connector) {
                return connector.id === _this3.source().type;
              }),
              namespace: namespace.namespace,
              compute: namespace.compute,
              path: [pathParts[1], pathParts[2]]
            }).then(function (entry) {
              _this3.loadTableDef(entry, function () {
                if (pathParts.length > 3 && pathParts[3] === 'partitions') {
                  utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('metastore.loaded.partitions', function () {
                    _this3.currentTab('partitions');
                  }, 'metastore');
                }
              });
            });
        }
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetastoreViewModel);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/tableBrowser/propsMappers.ts":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/tableBrowser/propsMappers.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tableERD": () => (/* binding */ tableERD)
/* harmony export */ });
/* harmony import */ var _components_er_diagram_lib_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/er-diagram/lib/entities */ "./desktop/core/src/desktop/js/components/er-diagram/lib/entities.ts");
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


var createTable = function createTable(database, fromDB, name, columnNames) {
  var tableId = _components_er_diagram_lib_entities__WEBPACK_IMPORTED_MODULE_0__.Table.buildId(database, name);
  var columns = columnNames.map(function (columnName) {
    return new _components_er_diagram_lib_entities__WEBPACK_IMPORTED_MODULE_0__.Column(tableId, columnName);
  });
  var table = new _components_er_diagram_lib_entities__WEBPACK_IMPORTED_MODULE_0__.Table(database, name, columns);
  if (database === fromDB) {
    table.cssClassName = 'hide-db';
  }
  return table;
};
var reorderBasedOnKeys = function reorderBasedOnKeys(columnNames, primaryKeys, foreignKeys) {
  var keyWeight = {};
  columnNames.forEach(function (key) {
    return keyWeight[key] = 0;
  });
  foreignKeys.forEach(function (key) {
    return keyWeight[key.name] = 1;
  });
  primaryKeys.forEach(function (key) {
    return keyWeight[key.name] = 2;
  });
  columnNames.sort(function (a, b) {
    return keyWeight[b] - keyWeight[a];
  });
  return columnNames;
};
var getTables = function getTables(fromDB, fromTableName, columnNames, primaryKeys, foreignKeys) {
  columnNames = reorderBasedOnKeys(columnNames, primaryKeys, foreignKeys);
  var fromTable = createTable(fromDB, fromDB, fromTableName, columnNames);
  var tables = [fromTable];
  var createdTableIdSet = new Set([fromTable.id]);
  foreignKeys.forEach(function (key) {
    var toPath = key.to.split('.');
    var tableId = _components_er_diagram_lib_entities__WEBPACK_IMPORTED_MODULE_0__.Table.buildId(toPath[0], toPath[1]);
    if (!createdTableIdSet.has(tableId)) {
      createdTableIdSet.add(tableId);
      tables.push(createTable(toPath[0], fromDB, toPath[1], [toPath[2]]));
    }
  });
  return tables;
};
var getForeignKeyRelations = function getForeignKeyRelations(fromDB, fromTableName, foreignKeys) {
  var fromTableId = _components_er_diagram_lib_entities__WEBPACK_IMPORTED_MODULE_0__.Table.buildId(fromDB, fromTableName);
  return foreignKeys.map(function (key) {
    var toPath = key.to.split('.');
    return {
      desc: 'Foreign Key',
      left: new _components_er_diagram_lib_entities__WEBPACK_IMPORTED_MODULE_0__.Column(fromTableId, key.name),
      right: new _components_er_diagram_lib_entities__WEBPACK_IMPORTED_MODULE_0__.Column(_components_er_diagram_lib_entities__WEBPACK_IMPORTED_MODULE_0__.Table.buildId(toPath[0], toPath[1]), toPath[2])
    };
  });
};
var tableERD = function tableERD(catalogEntry) {
  var fromDB = catalogEntry.path[0];
  var fromTable = catalogEntry.path[1];
  return {
    entities: getTables(fromDB, fromTable, catalogEntry.sourceMeta.columns, catalogEntry.sourceMeta.primary_keys, catalogEntry.sourceMeta.foreign_keys),
    relations: getForeignKeyRelations(fromDB, fromTable, catalogEntry.sourceMeta.foreign_keys)
  };
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/lib/entities.ts":
/*!***************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/lib/entities.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Column": () => (/* binding */ Column),
/* harmony export */   "Literal": () => (/* binding */ Literal),
/* harmony export */   "Table": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./desktop/core/src/desktop/js/components/er-diagram/lib/enums.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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


var Table = /*#__PURE__*/function () {
  function Table(database, name, columns) {
    _classCallCheck(this, Table);
    this.id = void 0;
    this.type = _enums__WEBPACK_IMPORTED_MODULE_0__.EntityTypes.Table;
    this.database = void 0;
    this.name = void 0;
    this.columns = void 0;
    this.cssClassName = '';
    this.id = Table.buildId(database, name);
    this.database = database;
    this.name = name;
    this.columns = columns;
  }
  return _createClass(Table, null, [{
    key: "buildId",
    value: function buildId(db, name) {
      return "".concat(db, ".").concat(name);
    }
  }]);
}();
var Column = /*#__PURE__*/function () {
  function Column(tableId, name) {
    _classCallCheck(this, Column);
    this.id = void 0;
    this.type = _enums__WEBPACK_IMPORTED_MODULE_0__.EntityTypes.Column;
    this.tableId = void 0;
    this.name = void 0;
    this.cssClassName = '';
    this.id = Column.buildId(tableId, name);
    this.tableId = tableId;
    this.name = name;
  }
  return _createClass(Column, null, [{
    key: "buildId",
    value: function buildId(tableId, name) {
      return "".concat(tableId, ".").concat(name);
    }
  }]);
}();
var Literal = /*#__PURE__*/_createClass(function Literal(value) {
  _classCallCheck(this, Literal);
  this.id = void 0;
  this.type = _enums__WEBPACK_IMPORTED_MODULE_0__.EntityTypes.Literal;
  this.value = void 0;
  this.cssClassName = '';
  this.id = value;
  this.value = value;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/lib/enums.ts":
/*!************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/lib/enums.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityTypes": () => (/* binding */ EntityTypes)
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

var EntityTypes = /*#__PURE__*/function (EntityTypes) {
  EntityTypes["Table"] = "TABLE";
  EntityTypes["Column"] = "COLUMN";
  EntityTypes["Literal"] = "LITERAL";
  return EntityTypes;
}({});

/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/lib/processor.ts":
/*!****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/lib/processor.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupEntities": () => (/* binding */ groupEntities)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./desktop/core/src/desktop/js/components/er-diagram/lib/enums.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
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


var EntityNode = /*#__PURE__*/_createClass(function EntityNode(entity) {
  _classCallCheck(this, EntityNode);
  this.entity = void 0;
  this.level = 0;
  this.relations = [];
  this.entity = entity;
});
/**
 * To visualize the ERD in a more human-readable form - Entities will be grouped based on
 * it's level (Distance from root entity) in the relationship graph. entities[0] will be
 * taken as the root entity.
 */
function groupEntities(entities, relations) {
  var nodesMap = generateGraph(entities, relations);
  var level = 0;
  nodesMap.forEach(function (node) {
    // To ensure levels are set even for disjoint graphs
    if (node.level === 0) {
      level = setLevels(node, level + 1);
    }
  });
  return breadthFirstTraverse(nodesMap);
}
function getNodeMapId(entity) {
  if (entity.type === _enums__WEBPACK_IMPORTED_MODULE_0__.EntityTypes.Column) {
    return entity.tableId;
  }
  return entity.id;
}
function generateGraph(entities, relations) {
  var nodesMap = new Map();
  entities.forEach(function (entity) {
    switch (entity.type) {
      // We now support only Table & Literal nodes, column will be shown inside Table
      case _enums__WEBPACK_IMPORTED_MODULE_0__.EntityTypes.Table:
      case _enums__WEBPACK_IMPORTED_MODULE_0__.EntityTypes.Literal:
        nodesMap.set(entity.id, new EntityNode(entity));
    }
  });
  relations.forEach(function (relation) {
    var leftEntity = nodesMap.get(getNodeMapId(relation.left));
    var rightEntity = nodesMap.get(getNodeMapId(relation.right));
    if (leftEntity && rightEntity) {
      leftEntity.relations.push(rightEntity);
    }
  });
  return nodesMap;
}
function setLevels(entityNode, level) {
  var maxLevel = 0;
  if (entityNode.level === 0) {
    entityNode.level = level;
    maxLevel = level++;
    entityNode.relations.forEach(function (childNode) {
      maxLevel = Math.max(maxLevel, setLevels(childNode, level));
    });
  }
  return maxLevel;
}
function breadthFirstTraverse(nodesMap) {
  var entities = [];
  nodesMap.forEach(function (entityNode) {
    var level = entityNode.level - 1;
    if (level >= 0) {
      if (entities[level] === undefined) {
        entities[level] = [];
      }
      entities[level].push(entityNode.entity);
    }
  });
  return entities;
}

/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/webcomp.ts":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/webcomp.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENT_NAME": () => (/* binding */ COMPONENT_NAME)
/* harmony export */ });
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./desktop/core/src/desktop/js/components/er-diagram/index.vue");
/* harmony import */ var vue_webComponentWrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue/webComponentWrap */ "./desktop/core/src/desktop/js/vue/webComponentWrap.ts");
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



var COMPONENT_NAME = 'er-diagram';
(0,vue_webComponentWrap__WEBPACK_IMPORTED_MODULE_1__.wrap)(COMPONENT_NAME, _index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var _lib_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/entities */ "./desktop/core/src/desktop/js/components/er-diagram/lib/entities.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'LiteralEntity',
  props: {
    entity: {
      type: _lib_entities__WEBPACK_IMPORTED_MODULE_1__.Literal,
      required: true
    }
  },
  emits: ['click']
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'TableEntity',
  props: {
    entity: {
      type: Object,
      required: true
    },
    maxColumns: {
      type: Number,
      "default": 10
    }
  },
  emits: ['click', 'updated'],
  data: function data() {
    return {
      maxCols: 0
    };
  },
  created: function created() {
    this.maxCols = this.maxColumns;
  },
  updated: function updated() {
    this.$emit('updated');
  },
  methods: {
    expandColumns: function expandColumns() {
      this.maxCols = Number.MAX_SAFE_INTEGER;
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=script&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");
/* harmony import */ var _lib_processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/processor */ "./desktop/core/src/desktop/js/components/er-diagram/lib/processor.ts");
/* harmony import */ var _lib_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/enums */ "./desktop/core/src/desktop/js/components/er-diagram/lib/enums.ts");
/* harmony import */ var utils_screen_toggleFullScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/screen/toggleFullScreen */ "./desktop/core/src/desktop/js/utils/screen/toggleFullScreen.ts");
/* harmony import */ var _comps_table_entity_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/table-entity.vue */ "./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue");
/* harmony import */ var _comps_literal_entity_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/literal-entity.vue */ "./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue");






var CURVATURE = 40;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ERDiagram',
  components: {
    TableEntity: _comps_table_entity_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    LiteralEntity: _comps_literal_entity_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    entities: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    relations: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  emits: ['toggle-fullscreen', 'entity-clicked'],
  setup: function setup() {
    return {
      EntityTypes: _lib_enums__WEBPACK_IMPORTED_MODULE_2__.EntityTypes
    };
  },
  computed: {
    groups: function groups() {
      if (this.entities && this.relations) {
        return (0,_lib_processor__WEBPACK_IMPORTED_MODULE_1__.groupEntities)(this.entities, this.relations);
      }
      return undefined;
    }
  },
  updated: function updated() {
    this.plotRelations();
  },
  mounted: function mounted() {
    this.plotRelations();
  },
  methods: {
    getSelectorPosition: function getSelectorPosition(selector) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var element = this.$el.querySelector(selector);
      if (element) {
        var rect = element.getBoundingClientRect();
        var x = rect.left;
        var y = rect.top;
        if (offset) {
          x = x - offset.x;
          y = y - offset.y + 1;
        }
        return {
          x: x,
          y: y
        };
      }
    },
    plotRelations: function plotRelations() {
      var _this = this;
      var erdEl = this.$refs.erd;
      var relationPaths = erdEl.querySelectorAll('.relation-path');
      var offset = this.getSelectorPosition('.erd-relations');
      relationPaths.forEach(function (element) {
        var leftPos = _this.getSelectorPosition("[data-entity-id~=\"".concat(element.dataset.entityIdLeft, "\"] .right-point"), offset);
        var rightPos = _this.getSelectorPosition("[data-entity-id~=\"".concat(element.dataset.entityIdRight, "\"] .left-point"), offset);
        if (leftPos && rightPos) {
          var path = "M ".concat(leftPos.x, ",").concat(leftPos.y, " C ").concat(leftPos.x + CURVATURE, ",").concat(leftPos.y, " ") + "".concat(rightPos.x - CURVATURE, ",").concat(rightPos.y, " ").concat(rightPos.x, ",").concat(rightPos.y);
          element.setAttribute('d', path);
          element.style.visibility = 'visible';
        } else {
          element.style.visibility = 'hidden';
        }
      });
    },
    toggleFS: function toggleFS() {
      (0,utils_screen_toggleFullScreen__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$el);
      this.$emit('toggle-fullscreen');
    },
    entityClicked: function entityClicked(entity) {
      this.$emit('entity-clicked', entity);
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=template&id=d83f06b0":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=template&id=d83f06b0 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left-point"
}, null, -1 /* HOISTED */);
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "right-point"
}, null, -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "literal-value"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("literal-entity ".concat(_ctx.entity.cssClassName || '')),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('click', _ctx.entity);
    })
  }, [_hoisted_1, _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.entity.value), 1 /* TEXT */)], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=template&id=8c43a02e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=template&id=8c43a02e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

var _hoisted_1 = ["title"];
var _hoisted_2 = ["title"];
var _hoisted_3 = {
  "class": "columns-container"
};
var _hoisted_4 = ["data-entity-id", "title", "onClick"];
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left-point"
}, null, -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "right-point"
}, null, -1 /* HOISTED */);
var _hoisted_7 = ["data-entity-id"];
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left-point"
}, null, -1 /* HOISTED */);
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "right-point"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("table-entity ".concat(_ctx.entity.cssClassName || ''))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    title: _ctx.entity.database,
    "class": "db-name"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.entity.database), 9 /* TEXT, PROPS */, _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    title: _ctx.entity.name,
    "class": "table-name"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('click', _ctx.entity);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.entity.name), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.entity.columns.slice(0, _ctx.maxCols), function (column) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: column.id,
      "data-entity-id": column.id,
      title: column.name,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("column-entity ".concat(column.cssClassName || '')),
      onClick: function onClick($event) {
        return _ctx.$emit('click', column);
      }
    }, [_hoisted_5, _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(column.name), 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_4);
  }), 128 /* KEYED_FRAGMENT */)), _ctx.entity.columns.length > _ctx.maxCols ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "data-entity-id": _ctx.entity.columns.slice(_ctx.maxCols).map(function (column) {
      return column.id;
    }).join(' '),
    "class": "grouped-columns",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.expandColumns();
    }, ["stop"]))
  }, [_hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" +" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.entity.columns.length - _ctx.maxCols) + " columns ", 1 /* TEXT */)], 8 /* PROPS */, _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=template&id=85385074":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=template&id=85385074 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-browser.prod.js");

var _hoisted_1 = {
  ref: "erd",
  "class": "er-diagram"
};
var _hoisted_2 = {
  "class": "buttons-panel"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("expand-icon", {
  "class": "fa fa-expand"
}, "​", -1 /* HOISTED */);
var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  "class": "erd-scroll-panel"
};
var _hoisted_6 = {
  key: 0,
  "class": "erd-container"
};
var _hoisted_7 = {
  key: 0,
  "class": "erd-relations"
};
var _hoisted_8 = ["data-entity-id-left", "data-entity-id-right"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TableEntity = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TableEntity");
  var _component_LiteralEntity = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LiteralEntity");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default btn-sm",
    title: "Toggle Fullscreen",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.toggleFS && _ctx.toggleFS.apply(_ctx, arguments);
    })
  }, _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_ctx.groups ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.groups, function (group, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": "entity-group"
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(group, function (entity) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: entity.id,
        "class": "entity-container"
      }, [entity.type === _ctx.EntityTypes.Table ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TableEntity, {
        key: 0,
        entity: entity,
        onClick: _ctx.entityClicked,
        onUpdated: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.plotRelations();
        })
      }, null, 8 /* PROPS */, ["entity", "onClick"])) : entity.type === _ctx.EntityTypes.Literal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LiteralEntity, {
        key: 1,
        entity: entity,
        "data-entity-id": entity.id,
        onClick: _ctx.entityClicked
      }, null, 8 /* PROPS */, ["entity", "data-entity-id", "onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
    }), 128 /* KEYED_FRAGMENT */))]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Relations "), _ctx.relations ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.relations, function (relation, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("path", {
      key: index,
      "data-entity-id-left": relation.left.id,
      "data-entity-id-right": relation.right.id,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("relation-path ".concat(relation.cssClassName || ''))
    }, null, 10 /* CLASS, PROPS */, _hoisted_8);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 512 /* NEED_PATCH */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  Licensed to Cloudera, Inc. under one\n  or more contributor license agreements.  See the NOTICE file\n  distributed with this work for additional information\n  regarding copyright ownership.  Cloudera, Inc. licenses this file\n  to you under the Apache License, Version 2.0 (the\n  \"License\"); you may not use this file except in compliance\n  with the License.  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n*/\n.literal-entity {\n  border: 1px solid #d6d8db;\n  border-radius: 5px;\n  padding: 5px;\n  background-color: #fff;\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) inset, 0 0 8px rgba(0, 0, 0, 0.15);\n}\n.literal-entity .literal-value {\n  text-align: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  Licensed to Cloudera, Inc. under one\n  or more contributor license agreements.  See the NOTICE file\n  distributed with this work for additional information\n  regarding copyright ownership.  Cloudera, Inc. licenses this file\n  to you under the Apache License, Version 2.0 (the\n  \"License\"); you may not use this file except in compliance\n  with the License.  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n*/\n.ellipsis-on-overflow, .table-entity .columns-container .column-entity,\n.table-entity .columns-container .grouped-columns, .table-entity .table-name, .table-entity .db-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.table-entity {\n  border: 1px solid #d6d8db;\n  border-radius: 5px;\n  padding: 5px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) inset, 0 0 8px rgba(0, 0, 0, 0.15);\n  background-color: #efefef;\n}\n.table-entity .db-name {\n  color: #050505;\n  font-size: 0.8em;\n  text-align: center;\n  margin-bottom: -5px;\n}\n.table-entity .table-name {\n  color: #0a78a3;\n  text-align: center;\n}\n.table-entity .table-name span {\n  cursor: pointer;\n}\n.table-entity .columns-container {\n  padding: 0 10px;\n}\n.table-entity .columns-container .column-entity,\n.table-entity .columns-container .grouped-columns {\n  padding: 5px;\n  text-align: center;\n  background-color: #fff;\n  border: 1px solid #d6d8db;\n  border-radius: 5px;\n  margin: 5px 0;\n  position: relative;\n}\n.table-entity .columns-container .grouped-columns {\n  box-shadow: -2px -2px 0 rgba(255, 255, 255, 0.95), -3px -3px 0 rgba(214, 216, 219, 0.95), -5px -5px 0 rgba(255, 255, 255, 0.7), -6px -6px 0 rgba(214, 216, 219, 0.7);\n  margin-left: 7px;\n  margin-top: 10px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=style&index=0&id=85385074&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=style&index=0&id=85385074&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*\n  Licensed to Cloudera, Inc. under one\n  or more contributor license agreements.  See the NOTICE file\n  distributed with this work for additional information\n  regarding copyright ownership.  Cloudera, Inc. licenses this file\n  to you under the Apache License, Version 2.0 (the\n  \"License\"); you may not use this file except in compliance\n  with the License.  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n*/\n.expand-icon {\n  font-size: 13px;\n  font-weight: bold;\n}\n.expand-icon::before {\n  content: \"⤢\";\n}\n.er-diagram {\n  color: #0a78a3;\n  border: 1px solid #d6d8db;\n  border-radius: 5px;\n  position: relative;\n  font-family: Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 20px;\n  font-size: 14px;\n  background: linear-gradient(90deg, #fff 9px, transparent 1%) center, linear-gradient(#fff 9px, transparent 1%) center, #bbb;\n  background-size: 10px 10px;\n}\n.er-diagram .buttons-panel {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  z-index: 100;\n}\n.er-diagram .erd-scroll-panel {\n  overflow-x: scroll;\n  position: relative;\n}\n.er-diagram:fullscreen .erd-scroll-panel {\n  overflow-y: scroll;\n  height: 100%;\n}\n.er-diagram .erd-container {\n  white-space: nowrap;\n  min-height: 500px;\n  position: relative;\n}\n.er-diagram .erd-container .entity-group {\n  display: inline-block;\n  width: 200px;\n  padding: 15px 30px;\n  white-space: normal;\n  vertical-align: top;\n}\n.er-diagram .erd-container .entity-group .entity-container {\n  padding: 10px 0;\n}\n.er-diagram .erd-container .entity-group .entity-container .left-point,\n.er-diagram .erd-container .entity-group .entity-container .right-point {\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 1em;\n}\n.er-diagram .erd-container .entity-group .entity-container .left-point {\n  left: -1px;\n}\n.er-diagram .erd-container .entity-group .entity-container .right-point {\n  right: -1px;\n}\n.er-diagram .erd-relations {\n  position: absolute;\n  overflow: visible;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.er-diagram .erd-relations .relation-path {\n  stroke: #0a78a3;\n  stroke-width: 3;\n  fill: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_literal_entity_vue_vue_type_style_index_0_id_d83f06b0_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_literal_entity_vue_vue_type_style_index_0_id_d83f06b0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_literal_entity_vue_vue_type_style_index_0_id_d83f06b0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_table_entity_vue_vue_type_style_index_0_id_8c43a02e_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_table_entity_vue_vue_type_style_index_0_id_8c43a02e_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_table_entity_vue_vue_type_style_index_0_id_8c43a02e_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=style&index=0&id=85385074&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=style&index=0&id=85385074&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_index_vue_vue_type_style_index_0_id_85385074_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./index.vue?vue&type=style&index=0&id=85385074&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=style&index=0&id=85385074&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_index_vue_vue_type_style_index_0_id_85385074_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_index_vue_vue_type_style_index_0_id_85385074_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue":
/*!************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _literal_entity_vue_vue_type_template_id_d83f06b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./literal-entity.vue?vue&type=template&id=d83f06b0 */ "./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=template&id=d83f06b0");
/* harmony import */ var _literal_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./literal-entity.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=script&lang=ts");
/* harmony import */ var _literal_entity_vue_vue_type_style_index_0_id_d83f06b0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss */ "./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss");




;
_literal_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _literal_entity_vue_vue_type_template_id_d83f06b0__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_literal_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_literal_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue":
/*!**********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _table_entity_vue_vue_type_template_id_8c43a02e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-entity.vue?vue&type=template&id=8c43a02e */ "./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=template&id=8c43a02e");
/* harmony import */ var _table_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-entity.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=script&lang=ts");
/* harmony import */ var _table_entity_vue_vue_type_style_index_0_id_8c43a02e_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss */ "./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss");




;
_table_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _table_entity_vue_vue_type_template_id_8c43a02e__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_table_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_table_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/index.vue":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/index.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_85385074__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=85385074 */ "./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=template&id=85385074");
/* harmony import */ var _index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts */ "./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=script&lang=ts");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_85385074_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=85385074&lang=scss */ "./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=style&index=0&id=85385074&lang=scss");




;
_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].render = _index_vue_vue_type_template_id_85385074__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "desktop/core/src/desktop/js/components/er-diagram/index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_literal_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_literal_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./literal-entity.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=script&lang=ts":
/*!**********************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_table_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_table_entity_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./table-entity.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../node_modules/source-map-loader/dist/cjs.js!./index.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=template&id=d83f06b0":
/*!******************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=template&id=d83f06b0 ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_literal_entity_vue_vue_type_template_id_d83f06b0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_literal_entity_vue_vue_type_template_id_d83f06b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./literal-entity.vue?vue&type=template&id=d83f06b0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=template&id=d83f06b0");


/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=template&id=8c43a02e":
/*!****************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=template&id=8c43a02e ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_table_entity_vue_vue_type_template_id_8c43a02e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_table_entity_vue_vue_type_template_id_8c43a02e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../../node_modules/source-map-loader/dist/cjs.js!./table-entity.vue?vue&type=template&id=8c43a02e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=template&id=8c43a02e");


/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=template&id=85385074":
/*!***************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=template&id=85385074 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_index_vue_vue_type_template_id_85385074__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_node_modules_source_map_loader_dist_cjs_js_index_vue_vue_type_template_id_85385074__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../../../../../../node_modules/source-map-loader/dist/cjs.js!./index.vue?vue&type=template&id=85385074 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./node_modules/source-map-loader/dist/cjs.js!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=template&id=85385074");


/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss":
/*!*********************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_literal_entity_vue_vue_type_style_index_0_id_d83f06b0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/literal-entity.vue?vue&type=style&index=0&id=d83f06b0&lang=scss");


/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss":
/*!*******************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_table_entity_vue_vue_type_style_index_0_id_8c43a02e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/comps/table-entity.vue?vue&type=style&index=0&id=8c43a02e&lang=scss");


/***/ }),

/***/ "./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=style&index=0&id=85385074&lang=scss":
/*!******************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=style&index=0&id=85385074&lang=scss ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_index_vue_vue_type_style_index_0_id_85385074_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./index.vue?vue&type=style&index=0&id=85385074&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./desktop/core/src/desktop/js/components/er-diagram/index.vue?vue&type=style&index=0&id=85385074&lang=scss");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["defaultVendors~hue-e3924278","defaultVendors~hue-aacc2dbb","defaultVendors~hue-bc050c32","defaultVendors~hue-b9fa02b6","defaultVendors~hue-2ef5bd86","defaultVendors~hue-6b948b9f","defaultVendors~hue-fa70753b","defaultVendors~hue-e5abfd2a","hue-e981d915","hue-541bdf64","hue-15ab7d1f","hue-4bde8d39","hue-7cb30146","hue-a799d440","hue-16bbf7a6","hue-8dc1dc79","hue-221ed165","hue-027ccb81","hue-18218eda","hue-3d824a78","hue-3fe99f16","hue-b5650f80","hue-79cd9d02","hue-f2b57085","hue-3528fb62","hue-a2399487","hue-92506859","hue-875ef077"], () => (__webpack_exec__("./desktop/core/src/desktop/js/apps/tableBrowser/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/tableBrowser-bundle-a2a4f8506cb55bb7.js.map