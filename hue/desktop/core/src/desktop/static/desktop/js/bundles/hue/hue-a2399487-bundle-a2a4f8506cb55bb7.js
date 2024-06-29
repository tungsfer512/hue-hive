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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-a2399487"],{

/***/ "./desktop/core/src/desktop/js/jquery/jquery.common.js":
/*!*************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/jquery.common.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jquery_migration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery.migration */ "./desktop/core/src/desktop/js/jquery/jquery.migration.js");
/* harmony import */ var jquery_contextmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-contextmenu */ "./node_modules/jquery-contextmenu/dist/jquery.contextMenu.js");
/* harmony import */ var jquery_contextmenu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_contextmenu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery.cookie */ "./node_modules/jquery.cookie/jquery.cookie.js");
/* harmony import */ var jquery_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-form */ "./node_modules/jquery-form/dist/jquery.form.min.js");
/* harmony import */ var jquery_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plugins_jquery_selectize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/jquery.selectize */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.selectize.js");
/* harmony import */ var selectize_plugin_clear__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! selectize-plugin-clear */ "./node_modules/selectize-plugin-clear/dist/selectize-plugin-clear.js");
/* harmony import */ var selectize_plugin_clear__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(selectize_plugin_clear__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery_ui_ui_widgets_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery-ui/ui/widgets/autocomplete */ "./node_modules/jquery-ui/ui/widgets/autocomplete.js");
/* harmony import */ var jquery_ui_ui_widgets_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_autocomplete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery_ui_ui_widgets_mouse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery-ui/ui/widgets/mouse */ "./node_modules/jquery-ui/ui/widgets/mouse.js");
/* harmony import */ var jquery_ui_ui_widgets_mouse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_mouse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jquery_ui_ui_widgets_draggable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery-ui/ui/widgets/draggable */ "./node_modules/jquery-ui/ui/widgets/draggable.js");
/* harmony import */ var jquery_ui_ui_widgets_draggable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_draggable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jquery_ui_ui_widgets_droppable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery-ui/ui/widgets/droppable */ "./node_modules/jquery-ui/ui/widgets/droppable.js");
/* harmony import */ var jquery_ui_ui_widgets_droppable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_droppable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery_ui_ui_widgets_resizable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery-ui/ui/widgets/resizable */ "./node_modules/jquery-ui/ui/widgets/resizable.js");
/* harmony import */ var jquery_ui_ui_widgets_resizable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_resizable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jquery_ui_ui_widgets_sortable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery-ui/ui/widgets/sortable */ "./node_modules/jquery-ui/ui/widgets/sortable.js");
/* harmony import */ var jquery_ui_ui_widgets_sortable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_sortable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ext_jquery_chosen_1_0_0_min__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ext/jquery.chosen.1.0.0.min */ "./desktop/core/src/desktop/js/ext/jquery.chosen.1.0.0.min.js");
/* harmony import */ var _ext_jquery_dataTables_1_8_2_min__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ext/jquery.dataTables.1.8.2.min */ "./desktop/core/src/desktop/js/ext/jquery.dataTables.1.8.2.min.js");
/* harmony import */ var _ext_jquery_select2_3_5_1_min__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ext/jquery.select2.3.5.1.min */ "./desktop/core/src/desktop/js/ext/jquery.select2.3.5.1.min.js");
/* harmony import */ var _plugins_jquery_datatables_sorting__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plugins/jquery.datatables.sorting */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.datatables.sorting.js");
/* harmony import */ var _plugins_jquery_delayedinput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./plugins/jquery.delayedinput */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.delayedinput.js");
/* harmony import */ var _plugins_jquery_filechooser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./plugins/jquery.filechooser */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.filechooser.js");
/* harmony import */ var _plugins_jquery_hdfs_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./plugins/jquery.hdfs.autocomplete */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.hdfs.autocomplete.js");
/* harmony import */ var _plugins_jquery_hiveautocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./plugins/jquery.hiveautocomplete */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.hiveautocomplete.js");
/* harmony import */ var _plugins_jquery_horizontalscrollbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./plugins/jquery.horizontalscrollbar */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.horizontalscrollbar.js");
/* harmony import */ var _plugins_jquery_huedatatable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./plugins/jquery.huedatatable */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.huedatatable.js");
/* harmony import */ var _plugins_jquery_rowselector__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./plugins/jquery.rowselector */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.rowselector.js");
/* harmony import */ var _plugins_jquery_scrollleft__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./plugins/jquery.scrollleft */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.scrollleft.js");
/* harmony import */ var _plugins_jquery_scrollup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./plugins/jquery.scrollup */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.scrollup.js");
/* harmony import */ var _plugins_jquery_selector__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./plugins/jquery.selector */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.selector.js");
/* harmony import */ var _plugins_jquery_tableextender__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./plugins/jquery.tableextender */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.tableextender.js");
/* harmony import */ var _plugins_jquery_tableextender2__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./plugins/jquery.tableextender2 */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.tableextender2.js");
/* harmony import */ var _plugins_jquery_tablescroller__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./plugins/jquery.tablescroller */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.tablescroller.js");
/* harmony import */ var _plugins_jquery_titleupdater__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./plugins/jquery.titleupdater */ "./desktop/core/src/desktop/js/jquery/plugins/jquery.titleupdater.js");
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



 // TODO: Remove, it's only used for "old" query builder




























window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((jquery__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/jquery.migration.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/jquery.migration.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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
/*
 * Repo for missing jQuery 2 functions, this ease the transition without updating every other plugin in Hue
 *
 */


(jquery__WEBPACK_IMPORTED_MODULE_0___default().uaMatch) = function (ua) {
  ua = ua.toLowerCase();
  var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
  return {
    browser: match[1] || '',
    version: match[2] || '0'
  };
};

// Don't clobber any existing jQuery.browser in case it's different
if (!(jquery__WEBPACK_IMPORTED_MODULE_0___default().browser)) {
  var matched = jquery__WEBPACK_IMPORTED_MODULE_0___default().uaMatch(navigator.userAgent);
  var browser = {};
  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
  }

  // Chrome is Webkit, but Webkit is also Safari.
  if (browser.chrome) {
    browser.webkit = true;
  } else if (browser.webkit) {
    browser.safari = true;
  }
  (jquery__WEBPACK_IMPORTED_MODULE_0___default().browser) = browser;
}

// Since jQuery.clean is used internally on older versions, we only shim if it's missing
if (!(jquery__WEBPACK_IMPORTED_MODULE_0___default().clean)) {
  var rscriptType = /\/(java|ecma)script/i;
  (jquery__WEBPACK_IMPORTED_MODULE_0___default().clean) = function (elems, context, fragment, scripts) {
    // Set context per 1.8 logic
    context = context || document;
    context = !context.nodeType && context[0] || context;
    context = context.ownerDocument || context;
    var i, elem, handleScript, jsTags;
    var ret = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default().merge(ret, jquery__WEBPACK_IMPORTED_MODULE_0___default().buildFragment(elems, context).childNodes);

    // Complex logic lifted directly from jQuery 1.8
    if (fragment) {
      // Special handling of each script element
      handleScript = function handleScript(elem) {
        // Check if we consider it executable
        if (!elem.type || rscriptType.test(elem.type)) {
          // Detach the script and store it in the scripts array (if provided) or the fragment
          // Return truthy to indicate that it has been handled
          return scripts ? scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem) : elem) : fragment.appendChild(elem);
        }
      };
      for (i = 0; (elem = ret[i]) != null; i++) {
        // Check if we're done after handling an executable script
        if (!(jquery__WEBPACK_IMPORTED_MODULE_0___default().nodeName(elem, 'script') && handleScript(elem))) {
          // Append to fragment and handle embedded scripts
          fragment.appendChild(elem);
          if (typeof elem.getElementsByTagName !== 'undefined') {
            // handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
            jsTags = jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(jquery__WEBPACK_IMPORTED_MODULE_0___default().merge([], elem.getElementsByTagName('script')), handleScript);

            // Splice the scripts into ret after their former ancestor and advance our index beyond them
            ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
            i += jsTags.length;
          }
        }
      }
    }
    return ret;
  };
}
var oldSelf = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.andSelf) || (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.addBack);
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.andSelf) = function () {
  return oldSelf.apply(this, arguments);
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.datatables.sorting.js":
/*!*********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.datatables.sorting.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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


(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.dataTableExt.afnSortData["dom-sort-value"]) = function (oSettings, iColumn) {
  var aData = [];
  oSettings.oApi._fnGetTrNodes(oSettings).forEach(function (nRow) {
    var oElem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('td:eq(' + iColumn + ')', nRow);
    var _val = oElem.text();
    if (typeof oElem.attr('data-sort-value') == 'undefined') {
      if (typeof oElem.find('span').attr('data-sort-value') != 'undefined') {
        _val = parseInt(oElem.find('span').attr('data-sort-value'));
      }
    } else {
      _val = parseInt(oElem.attr('data-sort-value'));
    }
    aData.push(_val);
  });
  return aData;
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.delayedinput.js":
/*!***************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.delayedinput.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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



/*
 * jHue Delayed Input plugin
 * use it with
 * $("#element").jHueDelayedInput( __FUNCTION_YOU_WANT_TO_CALL__, __TIMEOUT_IN_MS__ [optional])
 */

var pluginName = 'jHueDelayedInput',
  defaults = {
    fn: null,
    timeout: 300,
    skipOnEnterAndKeys: false
  };
function Plugin(element, options) {
  this.element = element;
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  this._defaults = defaults;
  this._name = pluginName;
  this.init();
}
Plugin.prototype.setOptions = function (options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
};
Plugin.prototype.init = function () {
  var _this = this;
  var _timeout = -1;
  if (_this.options.fn != null) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).on('keyup', function (e) {
      if (!(_this.options.skipOnEnterAndKeys && [13, 37, 38, 39, 40].indexOf(e.keyCode) > -1)) {
        window.clearTimeout(_timeout);
        _timeout = window.setTimeout(_this.options.fn, _this.options.timeout);
      }
    });
  }
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[pluginName] = function (fn, timeout, skipOnEnterAndKeys) {
  var _options = {
    fn: fn,
    timeout: timeout,
    skipOnEnterAndKeys: typeof skipOnEnterAndKeys !== 'undefined' && skipOnEnterAndKeys
  };
  return this.each(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName, new Plugin(this, _options));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName).setOptions(_options);
    }
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.filechooser.js":
/*!**************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.filechooser.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ext_fileuploader_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ext/fileuploader.custom */ "./desktop/core/src/desktop/js/ext/fileuploader.custom.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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









/*
 * jHue fileChooser plugin
 */

var pluginName = 'jHueFileChooser';
var defaults = {
  initialPath: '',
  forceRefresh: false,
  errorRedirectPath: '',
  createFolder: true,
  uploadFile: true,
  selectFolder: false,
  suppressErrors: false,
  displayOnlyFolders: false,
  showExtraHome: false,
  extraHomeProperties: {},
  filterExtensions: '',
  labels: {
    BACK: 'Back',
    SELECT_FOLDER: 'Select this folder',
    CREATE_FOLDER: 'Create folder',
    FOLDER_NAME: 'Folder name',
    CANCEL: 'Cancel',
    FILE_NOT_FOUND: 'The file has not been found',
    UPLOAD_FILE: 'Upload a file',
    FAILED: 'Failed',
    HOME: 'Home'
  },
  filesystems: ['hdfs'],
  filesysteminfo: {
    '': {
      scheme: '',
      root: '/',
      home: '/?default_to_home',
      icon: {
        brand: 'fa-files-o',
        home: 'fa-home'
      },
      label: {
        home: 'home',
        name: 'HDFS'
      }
    },
    hdfs: {
      scheme: '',
      root: '/',
      home: '/?default_to_home',
      icon: {
        brand: 'fa-files-o',
        home: 'fa-home'
      },
      label: {
        home: 'home',
        name: 'HDFS'
      }
    },
    s3a: {
      scheme: 's3a',
      root: 's3a://',
      home: '/?default_s3_home',
      icon: {
        brand: 'fa-cubes',
        home: 'fa-cubes'
      },
      label: {
        home: '',
        name: 'S3'
      }
    },
    gs: {
      scheme: 'gs',
      root: 'gs://',
      home: '/?default_gs_home',
      icon: {
        svg: {
          brand: '#hi-gs',
          home: '#hi-gs'
        },
        brand: 'fa-windows',
        home: 'fa-windows'
      },
      label: {
        home: '',
        name: 'GS'
      }
    },
    adl: {
      scheme: 'adl',
      root: 'adl:/',
      home: 'adl:/',
      icon: {
        svg: {
          brand: '#hi-adls',
          home: '#hi-adls'
        },
        brand: 'fa-windows',
        home: 'fa-windows'
      },
      label: {
        home: '',
        name: 'ADLS'
      }
    },
    abfs: {
      scheme: 'abfs',
      root: 'abfs://',
      home: '/?default_abfs_home',
      icon: {
        svg: {
          brand: '#hi-adls',
          home: '#hi-adls'
        },
        brand: 'fa-windows',
        home: 'fa-windows'
      },
      label: {
        home: '',
        name: 'ABFS'
      }
    },
    ofs: {
      scheme: 'ofs',
      root: 'ofs://',
      home: '/?default_ofs_home',
      icon: {
        svg: {
          brand: '#hi-ofs',
          home: '#hi-ofs'
        },
        brand: 'fa-windows',
        home: 'fa-windows'
      },
      label: {
        home: '',
        name: 'OFS'
      }
    }
  },
  fsSelected: 'hdfs',
  user: '',
  onNavigate: function onNavigate() {},
  onFileChoose: function onFileChoose() {},
  onFolderChoose: function onFolderChoose() {},
  onFolderChange: function onFolderChange() {},
  onError: function onError() {}
};
var STORAGE_PREFIX = 'hueFileBrowserLastPathForUser_';
var DEFAULT_I18n = {
  BACK: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Back'),
  SELECT_FOLDER: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Select this folder'),
  CREATE_FOLDER: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Create folder'),
  FOLDER_NAME: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Folder name'),
  CANCEL: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Cancel'),
  FILE_NOT_FOUND: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('The file has not been found'),
  UPLOAD_FILE: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Upload a file'),
  FAILED: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Failed')
};
function Plugin(element, options) {
  this.element = element;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('jHueFileChooser', this);
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, {
    user: window.LOGGED_USERNAME
  }, options);
  this.options.labels = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults.labels, DEFAULT_I18n, options ? options.labels : {});
  this._defaults = defaults;
  this._name = pluginName;
  this.previousPath = '';
  this.init();
}
Plugin.prototype.setOptions = function (options) {
  var self = this;
  self.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, {
    user: window.LOGGED_USERNAME
  }, options);
  self.options.labels = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults.labels, DEFAULT_I18n, options ? options.labels : {});
  var targetPath = jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(self.previousPath) ? jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(self.previousPath) : jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(self.options.initialPath);
  var scheme = targetPath && targetPath.substring(0, targetPath.indexOf(':'));
  if (scheme && scheme.length) {
    self.options.fsSelected = scheme;
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.element).find('.filechooser-services li').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.element).find('.filechooser-services li[data-fs="' + self.options.fsSelected + '"]').addClass('active');
  if (self.options.forceRefresh) {
    if (targetPath != '') {
      self.navigateTo(targetPath);
    } else if ((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_6__.hueLocalStorage)(STORAGE_PREFIX + self.options.user + self.options.fsSelected) != null) {
      self.navigateTo((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_6__.hueLocalStorage)(STORAGE_PREFIX + self.options.user + self.options.fsSelected));
    } else {
      self.navigateTo('/?default_to_home');
    }
  } else if (targetPath != '') {
    self.navigateTo(targetPath);
  } else if ((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_6__.hueLocalStorage)(STORAGE_PREFIX + self.options.user + self.options.fsSelected) != null) {
    self.navigateTo((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_6__.hueLocalStorage)(STORAGE_PREFIX + self.options.user + self.options.fsSelected));
  }
};
function getScheme(path) {
  var index = path.indexOf('://');
  return index >= 0 ? path.substring(0, index) : 'hdfs';
}
function getFs(scheme) {
  if (scheme === 'adl') {
    return 'adls';
  } else if (scheme === 's3a') {
    return 's3';
  } else if (!scheme || scheme === 'hdfs') {
    return 'hdfs';
  } else {
    return scheme;
  }
}
Plugin.prototype.setFileSystems = function (filesystems) {
  var self = this;
  var filters, filesystemsFiltered;
  self.options.filesystems = [];
  Object.keys(filesystems).forEach(function (k) {
    if (filesystems[k]) {
      self.options.filesystems.push(k);
    }
  });
  self.options.filesystems.sort();
  if (self.options.filesystemsFilter) {
    filters = self.options.filesystemsFilter.reduce(function (filters, fs) {
      filters[fs] = true;
      return filters;
    }, {});
    filesystemsFiltered = self.options.filesystems.filter(function (fs) {
      return filters[fs];
    });
  } else {
    filesystemsFiltered = self.options.filesystems;
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.element).data('fs', filesystemsFiltered);
  if (filesystemsFiltered.length > 1) {
    var $ul = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul>').addClass('nav nav-list').css('border', 'none');
    filesystemsFiltered.forEach(function (fs) {
      var filesysteminfo = self.options.filesysteminfo;
      var $li = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>').attr('data-fs', fs).addClass(self.options.fsSelected === fs ? 'active' : '').html('<a class="pointer" style="padding-left: 6px">' + (filesysteminfo[fs] ? filesysteminfo[fs].label.name : fs.toUpperCase()) + '</a>');
      $li.on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings().removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
        self.options.fsSelected = fs;
        var storedPath = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_6__.hueLocalStorage)(STORAGE_PREFIX + self.options.user + self.options.fsSelected);
        if (storedPath !== null) {
          if (filesysteminfo[fs] && storedPath.toLowerCase().indexOf(fs) === -1) {
            self.navigateTo(filesysteminfo[fs].home);
          } else {
            self.navigateTo(storedPath);
          }
        } else {
          self.navigateTo(filesysteminfo[fs] ? filesysteminfo[fs].home : '/?default_to_home');
        }
      });
      $li.appendTo($ul);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.element).find('.filechooser-services').empty().width(80);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.element).find('.filechooser-tree').width(480).css('paddingLeft', '6px').css('borderLeft', '1px solid #EEE').css('marginLeft', '80px').css('min-height', '330px');
    $ul.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.element).find('.filechooser-services'));
  }
};

//TODO: refactor this method to template
Plugin.prototype.navigateTo = function (path) {
  var _parent = this;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree').html('<i style="font-size: 24px; color: #DDD" class="fa fa-spinner fa-spin"></i>');

  // The default paths '/?default_to_home', '/?default_s3_home' etc already contains a query string
  // so we append pageSizeParam as an additional param, not a new query string.
  var isDefaultRedirectFlag = /^\/\?default_.*_(home|trash)$/.test(path);
  var pageSizeParam = 'pagesize=1000';
  var encodedPath = encodeURIComponent(path);
  var pathAndQuery = isDefaultRedirectFlag ? path + '&' + pageSizeParam : encodedPath + '?' + pageSizeParam;
  jquery__WEBPACK_IMPORTED_MODULE_0___default().getJSON('/filebrowser/view=' + pathAndQuery, function (data) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree').empty();
    path = data.current_dir_path || path; // use real path.
    var _flist = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul>').addClass('unstyled').css({
      height: '260px',
      'overflow-y': 'auto'
    });
    var $homeBreadcrumb = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul>').addClass('hue-breadcrumbs').css({
      padding: '0',
      marginLeft: '0',
      "float": 'left',
      'white-space': 'nowrap'
    });
    var _home = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>').css({
      'padding-top': '6px'
    });
    //var filesysteminfo = self.options.filesysteminfo;
    var fs = _parent.options.filesysteminfo[_parent.options.fsSelected || 'hdfs'];
    var el = fs.icon.svg ? '<svg class="hi"><use href="' + fs.icon.svg.home + '"></use></svg>' : '<i class="fa ' + fs.icon.home + '"></i> ' + fs.label.home;
    var _homelink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').addClass('nounderline').html(el).css('cursor', 'pointer').click(function () {
      _parent.navigateTo(fs.home);
    });
    _homelink.appendTo(_home);
    _home.appendTo($homeBreadcrumb);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').addClass('divider').css('margin-right', '20px').appendTo(_home);
    if (data.error || data.title != null && data.title == 'Error') {
      $homeBreadcrumb.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("<div class='clearfix'>").appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
      var _errorMsg = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('alert').addClass('alert-error').text(data.message ? data.message : data.error);
      _errorMsg.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
      //TODO: allow user to user breadcrums when there is an error
      var _previousLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').addClass('btn').text(_parent.options.labels.BACK).click(function () {
        function getParentPath(path) {
          if (!path) {
            return path;
          }
          var indexFirst = path.indexOf('/');
          var indexLast = path.lastIndexOf('/');
          if (indexLast - indexFirst > 1 && indexLast == path.length - 1) {
            indexLast = path.substring(0, path.length - 1).lastIndexOf('/');
          }
          return indexLast - indexFirst > 1 && indexLast > 0 ? path.substring(0, indexLast + 1) : path;
        }
        var next = path !== _parent.previousPath && getScheme(path) === getScheme(_parent.previousPath) ? _parent.previousPath || '/' : getParentPath(path) || '/';
        _parent.options.onFolderChange(next);
        _parent.navigateTo(next);
      });
      _previousLink.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
    } else {
      if (data.type === 'file') {
        _parent.navigateTo(data.view.dirname);
        return;
      }
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_6__.hueLocalStorage)(STORAGE_PREFIX + _parent.options.user + _parent.options.fsSelected, path);
      _parent.previousPath = path;
      _parent.options.onNavigate(_parent.previousPath);
      var $search = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').html('<i class="fa fa-refresh inactive-action pointer" style="position: absolute; top: 8px; margin-left: -18px"></i> <i class="fa fa-search inactive-action pointer" style="position: absolute; top: 8px"></i><input type="text" class="small-search" style="display: none; width: 0; padding: 2px; padding-left: 20px">').css({
        position: 'absolute',
        right: '10px',
        'background-color': '#FFF'
      });
      var slideOutInput = function slideOutInput() {
        $search.find('input').animate({
          width: '0'
        }, 100, function () {
          $search.find('input').hide();
          $search.find('.fa-refresh').show();
        });
      };
      var $searchInput = $search.find('input');
      var tog = function tog(v) {
        return v ? 'addClass' : 'removeClass';
      };
      $searchInput.addClass('clearable');
      $searchInput.on('input', function () {
        $searchInput[tog(this.value)]('x');
      }).on('mousemove', function (e) {
        $searchInput[tog(this.offsetWidth - 18 < e.clientX - this.getBoundingClientRect().left)]('onX');
      }).on('click', function (e) {
        if (this.offsetWidth - 18 < e.clientX - this.getBoundingClientRect().left) {
          $searchInput.removeClass('x onX').val('');
        }
      });
      $searchInput.on('blur', function (e) {
        if ($searchInput.val() === '') {
          slideOutInput();
        }
      });
      $search.find('.fa-search').on('click', function () {
        window.hueAnalytics.log('filechooser', 'show-search-btn-click');
        if ($searchInput.is(':visible')) {
          slideOutInput();
        } else {
          $search.find('.fa-refresh').hide();
          $searchInput.show().animate({
            width: '100px'
          }, 100, function () {
            $searchInput.focus();
          });
        }
      });
      $search.find('.fa-refresh').on('click', function () {
        _parent.navigateTo(path);
        window.hueAnalytics.log('filechooser', 'refresh-btn-click');
      });
      $search.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
      var $scrollingBreadcrumbs = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul>').addClass('hue-breadcrumbs editable-breadcrumbs').css({
        padding: '5px 4px',
        border: '1px solid #CCC',
        'border-radius': '3px',
        marginLeft: '10px',
        marginBottom: '0',
        "float": 'left',
        width: '300px',
        'overflow-x': 'scroll',
        'overflow-y': 'hidden',
        'white-space': 'nowrap'
      });
      if (knockout__WEBPACK_IMPORTED_MODULE_1__ && knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.delayedOverflow) {
        knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.delayedOverflow.init($scrollingBreadcrumbs[0]);
      }
      if (_parent.options.showExtraHome) {
        var _extraHome = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>');
        var _extraHomelink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').addClass('nounderline').html('<i class="fa ' + _parent.options.extraHomeProperties.icon + '"></i> ' + _parent.options.extraHomeProperties.label).css('cursor', 'pointer').click(function () {
          _parent.navigateTo(_parent.options.extraHomeProperties.path);
        });
        _extraHomelink.appendTo(_extraHome);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').addClass('divider').css('margin-right', '20px').appendTo(_extraHome);
        _extraHome.appendTo($scrollingBreadcrumbs);
      }
      var $hdfsAutocomplete = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input type="text">').addClass('editable-breadcrumb-input').val(path).hide();
      $scrollingBreadcrumbs.click(function (e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('ul') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('spacer')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hide();
          $hdfsAutocomplete.show().focus();
          window.hueAnalytics.log('filechooser', 'show-edit-breadcrumbs-path');
        }
      });
      var $editBreadcrumbs = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>').css('marginRight', '2px');
      var $crumbLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').addClass('spacer');
      $crumbLink.html('&nbsp;').appendTo($editBreadcrumbs);
      $editBreadcrumbs.appendTo($scrollingBreadcrumbs);
      if (typeof data.breadcrumbs != 'undefined' && data.breadcrumbs != null) {
        var _bLength = data.breadcrumbs.length;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(data.breadcrumbs).each(function (cnt, crumb) {
          var _crumb = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>');
          var _crumbLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>');
          var _crumbLabel = crumb.label != null && crumb.label != '' ? crumb.label : '/';
          _crumbLink.attr('href', 'javascript:void(0)').text(_crumbLabel).appendTo(_crumb);
          if (cnt < _bLength - 1) {
            if (cnt > 0) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').addClass('divider').text('/').appendTo(_crumb);
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').html('&nbsp;').appendTo(_crumb);
            }
          }
          _crumb.click(function () {
            var _url = crumb.url != null && crumb.url != '' ? crumb.url : '/';
            _parent.options.onFolderChange(_url);
            _parent.navigateTo(_url);
            window.hueAnalytics.log('filechooser', 'breadcrumb-navigation-click');
          });
          _crumb.appendTo($scrollingBreadcrumbs);
        });
      }
      $homeBreadcrumb.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
      $scrollingBreadcrumbs.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
      $hdfsAutocomplete.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
      $hdfsAutocomplete.jHueHdfsAutocomplete({
        home: '/user/' + _parent.options.user + '/',
        skipEnter: true,
        skipKeydownEvents: true,
        onEnter: function onEnter(el) {
          var _url = el.val();
          _parent.options.onFolderChange(_url);
          _parent.navigateTo(_url);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete').hide();
          window.hueAnalytics.log('filechooser', 'confirm-edit-breadcrumbs-path');
        },
        onBlur: function onBlur() {
          $hdfsAutocomplete.hide();
          $scrollingBreadcrumbs.show();
        },
        smartTooltip: _parent.options.labels.SMART_TOOLTIP
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('clearfix').appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
      var resizeBreadcrumbs = window.setInterval(function () {
        if ($homeBreadcrumb.is(':visible') && $homeBreadcrumb.width() > 0) {
          window.clearInterval(resizeBreadcrumbs);
          $scrollingBreadcrumbs.width(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree').width() - $homeBreadcrumb.width() - 65);
        }
      }, 100);
      if (data.s3_listing_not_allowed) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("<div class='clearfix'>").appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
        var _errorMsg2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('alert').addClass('alert-warn').text(data.s3_listing_not_allowed);
        _errorMsg2.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
        $scrollingBreadcrumbs.hide();
        $hdfsAutocomplete.show();
        $hdfsAutocomplete.focus();
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(data.files).each(function (cnt, file) {
        var _addFile = file.name !== '.';
        if (_parent.options.filterExtensions != '' && file.type == 'file') {
          var _allowedExtensions = _parent.options.filterExtensions.split(',');
          var _fileExtension = file.name.split('.').pop().toLowerCase();
          _addFile = _allowedExtensions.indexOf(_fileExtension) > -1;
        }
        if (_addFile) {
          var _f = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>');
          var _flink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>');
          if (file.type == 'dir') {
            _flink.attr('href', 'javascript:void(0)');
            if (file.path.toLowerCase().indexOf('s3a://') == 0 && (file.path.substr(6).indexOf('/') > -1 || file.path.substr(6) == '')) {
              _flink.text(' ' + (cnt > 0 ? file.name : '..'));
            } else {
              _flink.text(' ' + (file.name != '' ? file.name : '..'));
            }
            if (_flink.text() !== ' ..') {
              _f.addClass('file-list-item');
            }
            _flink.appendTo(_f);
            if (file.path.toLowerCase().indexOf('s3a://') == 0 && file.path.substr(5).indexOf('/') == -1) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()("<i class='fa fa-cloud'></i>").prependTo(_flink);
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()("<i class='fa fa-folder'></i>").prependTo(_flink);
            }
            _flink.click(function () {
              _parent.options.onFolderChange(file.path);
              _parent.navigateTo(file.path);
            });
          }
          if (file.type == 'file' && !_parent.options.displayOnlyFolders) {
            _f.addClass('file-list-item');
            _flink.attr('href', 'javascript:void(0)').text(' ' + (file.name != '' ? file.name : '..')).appendTo(_f);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("<i class='fa fa-file-o'></i>").prependTo(_flink);
            _flink.click(function () {
              _parent.options.onFileChoose(file.path);
            });
          }
          _f.appendTo(_flist);
        }
      });
      _flist.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
      $searchInput.jHueDelayedInput(function () {
        var filter = $searchInput.val().toLowerCase();
        var results = 0;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree .no-results').hide();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree .file-list-item').each(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().toLowerCase().indexOf(filter) > -1) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).show();
            results++;
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hide();
          }
        });
        if (results == 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree .no-results').show();
        }
      }, 300);
      var _actions = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('jHueFilechooserActions');
      var _showActions = false;
      var _uploadFileBtn;
      var _createFolderBtn;
      var _selectFolderBtn;
      if (_parent.options.uploadFile) {
        _uploadFileBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', 'file-uploader').addClass('fileChooserActionUploader');
        _uploadFileBtn.appendTo(_actions);
        _showActions = true;
        initUploader(path, _parent, _uploadFileBtn, _parent.options.labels);
      }
      if (_parent.options.selectFolder) {
        _selectFolderBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').addClass('btn').text(_parent.options.labels.SELECT_FOLDER);
        if (_parent.options.uploadFile) {
          _selectFolderBtn.css('margin-top', '10px');
        }
        _selectFolderBtn.appendTo(_actions);
        _showActions = true;
        _selectFolderBtn.click(function () {
          _parent.options.onFolderChoose(path);
        });
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span> </span>').appendTo(_actions);
      if (_parent.options.createFolder) {
        _createFolderBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').addClass('btn').text(_parent.options.labels.CREATE_FOLDER);
        if (_parent.options.uploadFile) {
          _createFolderBtn.css('margin-top', '10px');
        }
        _createFolderBtn.appendTo(_actions);
        _showActions = true;
        var _createFolderDetails = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<form>').css({
          'margin-top': '10px',
          position: 'fixed'
        }).addClass('form-inline');
        _createFolderDetails.hide();
        var _folderName = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input>').attr('type', 'text').attr('placeholder', _parent.options.labels.FOLDER_NAME).appendTo(_createFolderDetails);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span> </span>').appendTo(_createFolderDetails);
        var _folderBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input>').attr('type', 'button').attr('value', _parent.options.labels.CREATE_FOLDER).addClass('btn primary').appendTo(_createFolderDetails);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span> </span>').appendTo(_createFolderDetails);
        var _folderCancel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input>').attr('type', 'button').attr('value', _parent.options.labels.CANCEL).addClass('btn').appendTo(_createFolderDetails);
        _folderCancel.click(function () {
          if (_uploadFileBtn) {
            _uploadFileBtn.removeClass('disabled');
            window.hueAnalytics.log('filechooser', 'create-folder-cancel-btn-click');
          }
          _createFolderBtn.removeClass('disabled');
          _createFolderDetails.slideUp();
        });
        _folderBtn.click(function () {
          if (_folderName.val().length > 0) {
            window.hueAnalytics.log('filechooser', 'create-folder-btn-2-click');
            jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
              type: 'POST',
              url: '/filebrowser/mkdir',
              data: {
                name: _folderName.val(),
                path: path
              },
              success: function success(xhr, status) {
                if (status == 'success') {
                  _parent.navigateTo(path);
                  if (_uploadFileBtn) {
                    _uploadFileBtn.removeClass('disabled');
                  }
                  _createFolderBtn.removeClass('disabled');
                  _createFolderDetails.slideUp();
                }
              },
              error: function error(xhr) {
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_ERROR_TOPIC, {
                  message: xhr.responseText
                });
              }
            });
          }
        });
        _createFolderDetails.appendTo(_actions);
        _createFolderBtn.click(function () {
          if (_uploadFileBtn) {
            window.hueAnalytics.log('filechooser', 'create-folder-btn-1-click');
            _uploadFileBtn.addClass('disabled');
          }
          _createFolderBtn.addClass('disabled');
          _createFolderDetails.slideDown();
        });
      }
      if (_showActions) {
        _actions.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).find('.filechooser-tree'));
      }
      window.setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_parent.element).parent().scrollTop(0);
        $scrollingBreadcrumbs.animate({
          scrollLeft: $scrollingBreadcrumbs.width()
        });
      }, 0);
    }
  }).fail(function (e) {
    if (!_parent.options.suppressErrors) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_INFO_TOPIC, {
        message: _parent.options.labels.FILE_NOT_FOUND
      });
      _parent.options.onError();
    }
    if (e.status === 404 || e.status === 500) {
      var fs = _parent.options.filesysteminfo[_parent.options.fsSelected || 'hdfs'];
      _parent.navigateTo(_parent.options.errorRedirectPath !== '' ? _parent.options.errorRedirectPath : fs.home);
    } else {
      console.error(e);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_ERROR_TOPIC, {
        message: e.statusText
      });
    }
  });
};
var num_of_pending_uploads = 0;
function initUploader(path, _parent, el, labels) {
  new _ext_fileuploader_custom__WEBPACK_IMPORTED_MODULE_2__["default"].FileUploader({
    element: el[0],
    action: '/filebrowser/upload/file',
    params: {
      dest: path,
      fileFieldLabel: 'hdfs_file'
    },
    onComplete: function onComplete(id, fileName, responseJSON) {
      num_of_pending_uploads--;
      if (responseJSON.status == -1) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_ERROR_TOPIC, {
          message: responseJSON.data
        });
      } else if (!num_of_pending_uploads) {
        _parent.navigateTo(path);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('assist.' + getFs(getScheme(path)) + '.refresh');
      }
    },
    onSubmit: function onSubmit(id, fileName) {
      num_of_pending_uploads++;
      window.hueAnalytics.log('filechooser', 'uploading-file');
    },
    template: '<div class="qq-uploader">' + '<div class="qq-upload-drop-area"><span></span></div>' + '<div class="qq-upload-button">' + labels.UPLOAD_FILE + '</div><br>' + '<ul class="qq-upload-list"></ul>' + '</div>',
    fileTemplate: '<li>' + '<span class="qq-upload-file"></span>' + '<span class="qq-upload-spinner"></span>' + '<span class="qq-upload-size"></span>' + '<a class="qq-upload-cancel" href="#">' + labels.CANCEL + '</a>' + '<span class="qq-upload-failed-text">' + labels.FAILED + '</span>' + '</li>',
    debug: false
  });
}
Plugin.prototype.init = function () {
  var self = this;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.element).empty().html('<div class="filechooser-container" style="position: relative"><div class="filechooser-services" style="position: absolute"></div><div class="filechooser-tree" style="width: 560px"></div></div>');
  jquery__WEBPACK_IMPORTED_MODULE_0___default().post('/filebrowser/api/get_filesystems', function (data) {
    var initialHome = '/';
    if (self.options.initialPath == '') {
      if (Object.keys(data.filesystems).length > 1 && Object.keys(data.filesystems).indexOf('hdfs') != -1) {
        initialHome = '/?default_to_home';
        self.options.fsSelected = 'hdfs';
      } else {
        var _scheme = Object.keys(data.filesystems)[0];
        initialHome = defaults.filesysteminfo[_scheme]['home'];
        self.options.fsSelected = _scheme;
      }
    }
    var initialPath = jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(self.options.initialPath);
    var scheme = initialPath && initialPath.substring(0, initialPath.indexOf(':'));
    if (data && data.status === 0) {
      if (scheme && scheme.length && data.filesystems[scheme]) {
        self.options.fsSelected = scheme;
      }
      self.setFileSystems(data.filesystems);
    }
    if (initialPath != '') {
      self.navigateTo(self.options.initialPath);
    } else if (window.USER_HOME_DIR != '/') {
      self.navigateTo(window.USER_HOME_DIR);
    } else if ((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_6__.hueLocalStorage)(STORAGE_PREFIX + self.options.user + self.options.fsSelected) != null) {
      self.navigateTo((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_6__.hueLocalStorage)(STORAGE_PREFIX + self.options.user + self.options.fsSelected));
    } else {
      self.navigateTo(initialHome);
    }
  });
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[pluginName] = function (options) {
  return this.each(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName, new Plugin(this, options));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName).setOptions(options);
    }
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.hdfs.autocomplete.js":
/*!********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.hdfs.autocomplete.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_html_escapeOutput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/html/escapeOutput */ "./desktop/core/src/desktop/js/utils/html/escapeOutput.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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





/*
 * jHue HDFS autocomplete plugin
 * augment a textbox into an HDFS autocomplete
 */

var pluginName = 'jHueHdfsAutocomplete',
  defaults = {
    home: '/',
    onEnter: function onEnter() {},
    onBlur: function onBlur() {},
    onPathChange: function onPathChange() {},
    smartTooltip: '',
    smartTooltipThreshold: 10,
    // needs 10 up/down or click actions and no tab to activate the smart tooltip
    showOnFocus: false,
    skipKeydownEvents: false,
    skipEnter: false,
    skipScrollEvent: false,
    zIndex: 33000,
    root: '/',
    isS3: false
  };
function Plugin(element, options) {
  this.element = element;
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  this._defaults = defaults;
  this._name = pluginName;
  this.init();
}
Plugin.prototype.init = function () {
  var _this = this;
  var _el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element);
  _el.addClass('jHueAutocompleteElement');
  _el.attr('autocomplete', 'off'); // prevents default browser behavior

  // creates autocomplete popover
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete').length == 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', 'jHueHdfsAutocomplete').addClass('jHueAutocomplete popover').attr('style', 'position:absolute;display:none;max-width:1000px;z-index:' + _this.options.zIndex).html('<div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p><ul class="unstyled"></ul></p></div></div>').appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()('body'));
  }
  function setHueBreadcrumbCaretAtEnd(element) {
    var elemLength = element.value.length;
    if (document.selection) {
      element.focus();
      var _oSel = document.selection.createRange();
      _oSel.moveStart('character', -elemLength);
      _oSel.moveStart('character', elemLength);
      _oSel.moveEnd('character', 0);
      _oSel.select();
    } else if (element.selectionStart || element.selectionStart == '0') {
      element.selectionStart = elemLength;
      element.selectionEnd = elemLength;
      element.focus();
    }
  }
  _el.focus(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).on('contextmenu', function (e) {
      e.preventDefault(); // prevents native menu on FF for Mac from being shown
    });
    setHueBreadcrumbCaretAtEnd(_this.element);
  });
  _el.keydown(function (e) {
    if (e.keyCode == 9) {
      e.preventDefault();
      showHdfsAutocomplete(function () {
        var path = _el.val();
        if (path.indexOf('/') > -1) {
          path = path.substr(path.lastIndexOf('/') + 1);
        }
        guessHdfsPath(path);
      });
    }
  });
  function smartTooltipMaker() {
    if (_this.options.smartTooltip !== '' && (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__.hueLocalStorage)('jHueHdfsAutocompleteTooltip') != -1) {
      var cnt = 0;
      if ((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__.hueLocalStorage)('jHueHdfsAutocompleteTooltip') != null) {
        cnt = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__.hueLocalStorage)('jHueHdfsAutocompleteTooltip') + 1;
      }
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__.hueLocalStorage)('jHueHdfsAutocompleteTooltip', cnt);
      if (cnt >= _this.options.smartTooltipThreshold) {
        _el.tooltip({
          animation: true,
          title: _this.options.smartTooltip,
          trigger: 'manual',
          placement: 'top'
        }).tooltip('show');
        window.setTimeout(function () {
          _el.tooltip('hide');
        }, 10000);
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__.hueLocalStorage)('jHueHdfsAutocompleteTooltip', -1);
      }
    }
  }
  if (!_this.options.skipScrollEvent) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete').css('top', _el.offset().top + _el.outerHeight() - 1).css('left', _el.offset().left).width(_el.outerWidth() - 4);
    });
  }
  _el.on('keydown', function (e) {
    if (!_this.options.skipKeydownEvents && e.keyCode == 191) {
      e.preventDefault();
    }
    if (e.keyCode == 32 && e.ctrlKey) {
      e.preventDefault();
    }
    if (_this.options.skipEnter && e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  });
  var _hdfsAutocompleteSelectedIndex = -1;
  var _filterTimeout = -1;
  _el.keyup(function (e) {
    window.clearTimeout(_filterTimeout);
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(e.keyCode, [38, 40, 13, 32, 191]) == -1) {
      _hdfsAutocompleteSelectedIndex = -1;
      _filterTimeout = window.setTimeout(function () {
        var path = _el.val();
        if (path.indexOf('/') > -1) {
          path = path.substr(path.lastIndexOf('/') + 1);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete ul li').show();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete ul li').each(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().trim().indexOf(path) != 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hide();
          }
        });
      }, 500);
    }
    if (e.keyCode == 38) {
      if (_hdfsAutocompleteSelectedIndex <= 0) {
        _hdfsAutocompleteSelectedIndex = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete ul li:visible').length - 1;
      } else {
        _hdfsAutocompleteSelectedIndex--;
      }
    }
    if (e.keyCode == 40) {
      if (_hdfsAutocompleteSelectedIndex == jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete ul li:visible').length - 1) {
        _hdfsAutocompleteSelectedIndex = 0;
      } else {
        _hdfsAutocompleteSelectedIndex++;
      }
    }
    if (e.keyCode == 38 || e.keyCode == 40) {
      smartTooltipMaker();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete ul li').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete ul li:visible').eq(_hdfsAutocompleteSelectedIndex).addClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete .popover-content').scrollTop(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete ul li:visible').eq(_hdfsAutocompleteSelectedIndex).prevAll().length * jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete ul li:visible').eq(_hdfsAutocompleteSelectedIndex).outerHeight());
    }
    if (e.keyCode == 32 && e.ctrlKey || e.keyCode == 191) {
      smartTooltipMaker();
      showHdfsAutocomplete();
    }
    if (e.keyCode == 13) {
      if (_hdfsAutocompleteSelectedIndex > -1) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete ul li:visible').eq(_hdfsAutocompleteSelectedIndex).click();
      } else {
        _this.options.onEnter(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete').hide();
      _hdfsAutocompleteSelectedIndex = -1;
    }
  });
  if (_this.options.showOnFocus) {
    _el.on('focus', function () {
      showHdfsAutocomplete();
    });
  }
  var _pauseBlur = false;
  _el.blur(function () {
    if (!_pauseBlur) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('contextmenu');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete').hide();
      _this.options.onBlur();
    }
  });
  var BASE_PATH = '/filebrowser/view=';
  var _currentFiles = [];
  function showHdfsAutocomplete(callback) {
    var base = '';
    var path = _el.val();
    var hasScheme = path.indexOf(':/') >= 0;
    var isRelative = !hasScheme && path.charAt(0) !== '/';
    if (isRelative && _this.options.root) {
      base += _this.options.root;
    }
    var autocompleteUrl = BASE_PATH + base + path;
    jquery__WEBPACK_IMPORTED_MODULE_0___default().getJSON(autocompleteUrl + '?pagesize=1000&format=json', function (data) {
      _currentFiles = [];
      if (data.error == null) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(data.files).each(function (cnt, item) {
          if (item.name != '.') {
            var ico = 'fa-file-o';
            if (item.type == 'dir') {
              ico = 'fa-folder';
            }
            _currentFiles.push('<li class="hdfsAutocompleteItem" data-value="' + (0,utils_html_escapeOutput__WEBPACK_IMPORTED_MODULE_1__["default"])(item.name) + '"><i class="fa ' + ico + '"></i> ' + (0,utils_html_escapeOutput__WEBPACK_IMPORTED_MODULE_1__["default"])(item.name) + '</li>');
          }
        });
        window.setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete').css('top', _el.offset().top + _el.outerHeight() - 1).css('left', _el.offset().left).width(_el.outerWidth() - 4);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete').find('ul').empty().html(_currentFiles.join(''));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete').find('li').on('click', function (e) {
            smartTooltipMaker();
            e.preventDefault();
            var item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().trim();
            if (item == '..') {
              // one folder up
              path = path.substring(0, path.lastIndexOf('/'));
            } else {
              path = path + (path.charAt(path.length - 1) == '/' ? '' : '/') + item;
            }
            _el.val(base + path);
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('folder') > -1) {
              _el.val(_el.val() + '/');
              _this.options.onPathChange(_el.val());
              showHdfsAutocomplete();
            } else {
              _this.options.onEnter(_el);
            }
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueHdfsAutocomplete').show();
          setHueBreadcrumbCaretAtEnd(_this.element);
          if ('undefined' != typeof callback) {
            callback();
          }
        }, 100); // timeout for IE8
      }
    });
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mouseenter', '.hdfsAutocompleteItem', function () {
    _pauseBlur = true;
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mouseout', '.hdfsAutocompleteItem', function () {
    _pauseBlur = false;
  });
  function guessHdfsPath(lastChars) {
    var possibleMatches = [];
    for (var i = 0; i < _currentFiles.length; i++) {
      if ((jquery__WEBPACK_IMPORTED_MODULE_0___default()(_currentFiles[i]).text().trim().indexOf(lastChars) == 0 || lastChars == '') && jquery__WEBPACK_IMPORTED_MODULE_0___default()(_currentFiles[i]).text().trim() != '..') {
        possibleMatches.push(_currentFiles[i]);
      }
    }
    if (possibleMatches.length == 1) {
      _el.val(_el.val() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(possibleMatches[0]).text().trim().substr(lastChars.length));
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(possibleMatches[0]).html().indexOf('folder') > -1) {
        _el.val(_el.val() + '/');
        showHdfsAutocomplete();
      }
    } else if (possibleMatches.length > 1) {
      // finds the longest common prefix
      var possibleMatchesPlain = [];
      for (var z = 0; z < possibleMatches.length; z++) {
        possibleMatchesPlain.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(possibleMatches[z]).text().trim());
      }
      var arr = possibleMatchesPlain.slice(0).sort();
      var word1 = arr[0];
      var word2 = arr[arr.length - 1];
      var j = 0;
      while (word1.charAt(j) == word2.charAt(j)) {
        ++j;
      }
      var match = word1.substring(0, j);
      _el.val(_el.val() + match.substr(lastChars.length));
    }
  }
};
Plugin.prototype.setOptions = function (options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[pluginName] = function (options) {
  return this.each(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName, new Plugin(this, options));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName).setOptions(options);
    }
  });
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default())[pluginName] = function (options) {
  if (typeof console != 'undefined') {
    console.warn('$(elem).jHueHdfsAutocomplete() is a preferred call method.');
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.element).jHueHdfsAutocomplete(options);
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.hiveautocomplete.js":
/*!*******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.hiveautocomplete.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! catalog/contextCatalog */ "./desktop/core/src/desktop/js/catalog/contextCatalog.ts");
/* harmony import */ var catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! catalog/dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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






/*
 * jHue generic autocomplete plugin
 * augment a textbox into an generic hive/solr autocomplete
 */

var pluginName = 'jHueGenericAutocomplete',
  defaults = {
    serverType: 'HIVE',
    home: '/',
    skipColumns: false,
    skipTables: false,
    onEnter: function onEnter() {},
    onBlur: function onBlur() {},
    onPathChange: function onPathChange() {},
    pathChangeLevel: '',
    smartTooltip: '',
    smartTooltipThreshold: 10,
    // needs 10 up/down or click actions and no tab to activate the smart tooltip
    showOnFocus: false,
    startingPath: '',
    rewriteVal: false,
    searchEverywhere: false,
    apiHelperUser: '',
    apiHelperType: '',
    mainScrollable: jquery__WEBPACK_IMPORTED_MODULE_0___default()(window)
  };
function Plugin(element, options) {
  var self = this;
  self.element = element;
  self.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  self._defaults = defaults;
  self._name = pluginName;
  self.namespaceDeferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
  self.computeDeferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
  if (self.options.namespace) {
    self.namespaceDeferred.resolve(self.options.namespace);
  } else {
    (0,catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_1__.getNamespaces)({
      connector: {
        id: options.apiHelperType
      }
    }).then(function (context) {
      if (context.namespaces && context.namespaces.length) {
        self.namespaceDeferred.resolve(context.namespaces[0]);
      } else {
        self.namespaceDeferred.reject();
      }
    })["catch"]();
  }
  self.namespaceDeferred.done(function (namespace) {
    if (!self.options.compute || !namespace.computes.some(function (compute) {
      if (compute.id === self.options.compute.id) {
        self.computeDeferred.resolve(compute);
        return true;
      }
    })) {
      self.computeDeferred.resolve(namespace.computes[0]);
    }
  });
  this.init();
}
Plugin.prototype.init = function () {
  var self = this;
  var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.element);

  // creates autocomplete popover
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete').length === 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', 'jHueGenericAutocomplete').addClass('jHueAutocomplete popover').attr('style', 'position:absolute;display:none;max-width:1000px;z-index:33000').html('<div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><ul class="unstyled"></ul></div></div>').appendTo('body');
  }
  $el.wrap('<div class="inline">');
  $el.parent().append('<i class="fa fa-spinner fa-spin muted" style="margin-top: 8px; margin-left: -24px; margin-right: 11px; display:none"></i>');
  function setHueBreadcrumbCaretAtEnd(element) {
    var elemLength = element.value.length;
    if (document.selection) {
      element.focus();
      var _oSel = document.selection.createRange();
      _oSel.moveStart('character', -elemLength);
      _oSel.moveStart('character', elemLength);
      _oSel.moveEnd('character', 0);
      _oSel.select();
    } else if (element.selectionStart || element.selectionStart === '0') {
      element.selectionStart = elemLength;
      element.selectionEnd = elemLength;
      element.focus();
    }
  }
  $el.focus(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).on('contextmenu', function (e) {
      e.preventDefault(); // prevents native menu on FF for Mac from being shown
    });
    setHueBreadcrumbCaretAtEnd(self.element);
    _pauseBlur = false;
  });
  $el.keydown(function (e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      showAutocomplete(function () {
        var path = $el.val();
        if (path.indexOf('.') > -1) {
          path = path.substr(path.lastIndexOf('.') + 1);
        }
        guessHivePath(path);
      });
    }
  });
  function smartTooltipMaker() {
    if (self.options.smartTooltip !== '' && (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)('jHueGenericAutocompleteTooltip') !== -1) {
      var cnt = 0;
      if ((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)('jHueGenericAutocompleteTooltip')) {
        cnt = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)('jHueGenericAutocompleteTooltip') + 1;
      }
      (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)('jHueGenericAutocompleteTooltip', cnt);
      if (cnt >= self.options.smartTooltipThreshold) {
        $el.tooltip({
          animation: true,
          title: self.options.smartTooltip,
          trigger: 'manual',
          placement: 'top'
        }).tooltip('show');
        window.setTimeout(function () {
          $el.tooltip('hide');
        }, 10000);
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)('jHueGenericAutocompleteTooltip', -1);
      }
    }
  }
  self.options.mainScrollable.on('scroll', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete').css('top', $el.offset().top + $el.outerHeight() - 1).css('left', $el.offset().left).width($el.outerWidth() - 4);
  });
  var validateTimeout = -1;
  var onPathChange = function onPathChange(path) {
    window.clearTimeout(validateTimeout);
    self.options.onPathChange(path);
  };
  var validateAndSet = function validateAndSet() {
    var path = $el.val().split('.');
    if (path.length > 1) {
      window.clearTimeout(validateTimeout);
      validateTimeout = window.setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().when(self.namespaceDeferred, self.computeDeferred).done(function (namespace, compute) {
          var target = path.pop();
          // TODO: Use connectors in hiveautocomplete
          catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_2__["default"].getChildren({
            connector: {
              id: self.options.apiHelperType
            },
            namespace: namespace,
            compute: compute,
            path: path
          }).then(function (childEntries) {
            if (childEntries.some(function (childEntry) {
              return childEntry.name === target;
            })) {
              onPathChange($el.val());
            }
          })["catch"](function () {});
        });
      }, 500);
    }
  };
  var _hiveAutocompleteSelectedIndex = -1;
  var _filterTimeout = -1;
  $el.keyup(function (e) {
    window.clearTimeout(_filterTimeout);
    validateAndSet();
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(e.keyCode, [17, 38, 40, 13, 32, 191]) === -1) {
      _hiveAutocompleteSelectedIndex = -1;
      _filterTimeout = window.setTimeout(function () {
        var path = $el.val();
        if (path.indexOf('.') > -1) {
          path = path.substr(path.lastIndexOf('.') + 1);
        }
        var $jHueGenericAutocomplete = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete');
        $jHueGenericAutocomplete.show();
        var $jHueGenericAutocompleteLi = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete ul li');
        $jHueGenericAutocompleteLi.show();
        if (path !== '') {
          $jHueGenericAutocompleteLi.each(function () {
            if (self.options.searchEverywhere) {
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().trim().toLowerCase().indexOf(path.toLowerCase()) === -1) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hide();
              }
            } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().trim().indexOf(path) !== 0) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hide();
            }
          });
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete ul li:visible').length === 0) {
            $jHueGenericAutocomplete.hide();
          }
        }
      }, 500);
    }
    var $jHueGenericAutocompleteLiVisible = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete ul li:visible');
    if (e.keyCode === 38) {
      if (_hiveAutocompleteSelectedIndex <= 0) {
        _hiveAutocompleteSelectedIndex = $jHueGenericAutocompleteLiVisible.length - 1;
      } else {
        _hiveAutocompleteSelectedIndex--;
      }
    }
    if (e.keyCode === 40) {
      if (_hiveAutocompleteSelectedIndex === $jHueGenericAutocompleteLiVisible.length - 1) {
        _hiveAutocompleteSelectedIndex = 0;
      } else {
        _hiveAutocompleteSelectedIndex++;
      }
    }
    if (e.keyCode === 38 || e.keyCode === 40) {
      smartTooltipMaker();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete ul li').removeClass('active');
      $jHueGenericAutocompleteLiVisible.eq(_hiveAutocompleteSelectedIndex).addClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete .popover-content').scrollTop($jHueGenericAutocompleteLiVisible.eq(_hiveAutocompleteSelectedIndex).prevAll().length * $jHueGenericAutocompleteLiVisible.eq(_hiveAutocompleteSelectedIndex).outerHeight());
    }
    if (e.keyCode === 32 && e.ctrlKey || e.keyCode === 191) {
      smartTooltipMaker();
      showAutocomplete();
    }
    if (e.keyCode === 13) {
      _pauseBlur = true;
      if (_hiveAutocompleteSelectedIndex > -1) {
        $jHueGenericAutocompleteLiVisible.eq(_hiveAutocompleteSelectedIndex).click();
      } else {
        self.options.onEnter(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete').hide();
      _hiveAutocompleteSelectedIndex = -1;
    }
  });
  if (self.options.showOnFocus) {
    $el.on('focus', function () {
      showAutocomplete();
    });
  }
  var _pauseBlur = false;
  $el.blur(function () {
    if (!_pauseBlur) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('contextmenu');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete').hide();
      self.options.onBlur();
    }
  });
  var BASE_PATH = '/beeswax/api/autocomplete/';
  if (self.options.serverType === 'IMPALA') {
    BASE_PATH = '/impala/api/autocomplete/';
  }
  if (self.options.serverType === 'SOLR') {
    BASE_PATH = '/indexer/api/autocomplete/';
  }
  var _currentFiles = [];
  self.getDatabases = function (callback) {
    var self = this;
    jquery__WEBPACK_IMPORTED_MODULE_0___default().when(self.namespaceDeferred, self.computeDeferred).done(function (namespace, compute) {
      catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_2__["default"].getChildren({
        connector: {
          id: self.options.apiHelperType
        },
        // TODO: Use connectors in hiveautocomplete
        namespace: namespace,
        compute: compute,
        path: []
      }).then(function (dbEntries) {
        callback(jquery__WEBPACK_IMPORTED_MODULE_0___default().map(dbEntries, function (entry) {
          return entry.name;
        }));
      })["catch"](function () {});
    });
  };
  self.getTables = function (database, callback) {
    var self = this;
    jquery__WEBPACK_IMPORTED_MODULE_0___default().when(self.namespaceDeferred, self.computeDeferred).done(function (namespace, compute) {
      catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_2__["default"].getEntry({
        namespace: namespace,
        compute: compute,
        connector: {
          id: self.options.apiHelperType
        },
        path: [database]
      }).then(function (entry) {
        entry.getSourceMeta().then(callback);
      });
    });
  };
  self.getColumns = function (database, table, callback) {
    var self = this;
    jquery__WEBPACK_IMPORTED_MODULE_0___default().when(self.namespaceDeferred, self.computeDeferred).done(function (namespace, compute) {
      catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_2__["default"].getEntry({
        namespace: namespace,
        compute: compute,
        connector: {
          id: self.options.apiHelperType
        },
        path: [database, table]
      }).then(function (entry) {
        entry.getSourceMeta().then(callback);
      });
    });
  };
  function autocompleteLogic(autocompleteUrl, data) {
    if (!data.error) {
      _currentFiles = [];
      var _ico = '';
      var _iterable = [];
      var _isSkipColumns = false;
      var _isSkipTables = false;
      if (self.options.serverType === 'SOLR') {
        _iterable = data.collections;
        _ico = 'fa-search';
      } else if (data.databases) {
        // it's a db
        _iterable = data.databases;
        _ico = 'fa-database';
      } else if (data.tables_meta) {
        // it's a table
        if (!self.options.skipTables) {
          _iterable = jquery__WEBPACK_IMPORTED_MODULE_0___default().map(data.tables_meta, function (tablesMeta) {
            return tablesMeta.name;
          });
          _ico = 'fa-table';
        } else {
          _isSkipTables = true;
        }
      } else if (!self.options.skipColumns) {
        _iterable = data.columns;
        _ico = 'fa-columns';
      } else {
        _isSkipColumns = true;
      }
      var firstSolrCollection = false;
      var firstSolrConfig = false;
      if (!_isSkipColumns && !_isSkipTables) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_iterable).each(function (cnt, item) {
          if (self.options.serverType === 'SOLR') {
            if (item.isCollection && !firstSolrCollection) {
              _currentFiles.push('<li class="hiveAutocompleteItem" data-value="collections.*" title="collections.*"><i class="fa fa-search-plus"></i> collections.*</li>');
              _currentFiles.push('<li class="hiveAutocompleteItem" data-value="admin.collections" title="admin.collections"><i class="fa fa-database"></i> admin.collections</li>');
              _currentFiles.push('<li class="hiveAutocompleteItem" data-value="admin.cores" title="admin.collections"><i class="fa fa-database"></i> admin.cores</li>');
              firstSolrCollection = true;
            }
            if (item.isConfig) {
              _ico = 'fa-cog';
              if (!firstSolrConfig) {
                _currentFiles.push('<li class="hiveAutocompleteItem" data-value="configs.*" title="configs.*"><i class="fa fa-cogs"></i> configs.*</li>');
                firstSolrConfig = true;
              }
            }
            _currentFiles.push('<li class="hiveAutocompleteItem" data-value="' + item.name + '" title="' + item.name + '"><i class="fa ' + _ico + '"></i> ' + item.name + '</li>');
          } else {
            _currentFiles.push('<li class="hiveAutocompleteItem" data-value="' + item + '" title="' + item + '"><i class="fa ' + _ico + '"></i> ' + item + '</li>');
          }
        });
        var $jHueGenericAutocomplete = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete');
        $jHueGenericAutocomplete.css('top', $el.offset().top + $el.outerHeight() - 1).css('left', $el.offset().left).width($el.outerWidth() - 4);
        $jHueGenericAutocomplete.find('ul').empty().html(_currentFiles.join(''));
        $jHueGenericAutocomplete.find('li').on('click', function (e) {
          smartTooltipMaker();
          e.preventDefault();
          var item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().trim();
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('search') > -1 || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('cog') > -1 || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('database') > -1) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('search') > -1 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('search-plus') === -1) {
              $el.val('collections.' + item);
            } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('cog') > -1 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('cogs') === -1) {
              $el.val('configs.' + item);
            } else {
              $el.val(item);
            }
            if (self.options.pathChangeLevel === '' || self.options.pathChangeLevel === 'database') {
              onPathChange($el.val());
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete').hide();
            _hiveAutocompleteSelectedIndex = -1;
            self.options.onEnter($el);
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('database') > -1) {
            if (self.options.skipTables) {
              $el.val(item);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete').hide();
            } else {
              $el.val(item + '.');
            }
            if (self.options.pathChangeLevel === '' || self.options.pathChangeLevel === 'database') {
              onPathChange($el.val());
            }
            if (!self.options.skipTables) {
              showAutocomplete();
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('table') > -1) {
            if ($el.val().indexOf('.') > -1) {
              if ($el.val().match(/\./gi).length === 1) {
                $el.val($el.val().substring(0, $el.val().lastIndexOf('.') + 1) + item);
              } else {
                $el.val($el.val().substring(0, $el.val().indexOf('.') + 1) + item);
              }
            } else if (self.options.rewriteVal) {
              $el.val(item);
            } else {
              $el.val($el.val() + item);
            }
            if (!self.options.skipColumns) {
              $el.val($el.val() + '.');
            }
            if (self.options.pathChangeLevel === '' || self.options.pathChangeLevel === 'table') {
              onPathChange($el.val());
            }
            if (!self.options.skipColumns) {
              showAutocomplete();
            } else {
              self.options.onEnter($el);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete').hide();
              _hiveAutocompleteSelectedIndex = -1;
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html().indexOf('columns') > -1) {
            if ($el.val().match(/\./gi).length > 1) {
              $el.val($el.val().substring(0, $el.val().lastIndexOf('.') + 1) + item);
            } else {
              $el.val($el.val() + '.' + item);
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueGenericAutocomplete').hide();
            _hiveAutocompleteSelectedIndex = -1;
            self.options.onEnter($el);
          }
        });
        $jHueGenericAutocomplete.show();
        window.setTimeout(function () {
          setHueBreadcrumbCaretAtEnd(self.element);
        }, 100);
      }
    }
    $el.parent().find('.fa-spinner').hide();
  }
  function showAutocomplete() {
    $el.parent().find('.fa-spinner').show();
    var path = $el.val();
    if (self.options.startingPath !== '') {
      path = self.options.startingPath + path;
    }
    var autocompleteUrl = BASE_PATH;
    if (path !== '' && path.indexOf('.') === -1) {
      path = '';
    }
    if (path !== '' && path.lastIndexOf('.') !== path.length - 1) {
      path = path.substring(0, (self.options.startingPath + $el.val()).lastIndexOf('.'));
    }
    if (self.options.serverType !== 'SOLR') {
      autocompleteUrl += path.replace(/\./g, '/');
    }
    if (self.options.serverType !== 'SOLR' && self.options.apiHelperUser !== '') {
      var suffix = autocompleteUrl.substr(BASE_PATH.length);
      if (suffix === '') {
        self.getDatabases(function (data) {
          autocompleteLogic(autocompleteUrl, {
            databases: data
          });
        });
      } else {
        var details = suffix.split('/');
        if (details.length > 1 && details[1] !== '') {
          self.getColumns(details[0], details[1], function (data) {
            var columns = [];
            if (data.cols || data.extended_columns) {
              columns = jquery__WEBPACK_IMPORTED_MODULE_0___default().map(data.cols ? data.cols : data.extended_columns, function (item) {
                return item.name;
              });
            } else if (data.columns) {
              columns = data.columns;
            }
            autocompleteLogic(autocompleteUrl, {
              columns: columns
            });
          });
        } else {
          self.getTables(details[0], function (data) {
            autocompleteLogic(autocompleteUrl, data);
          });
        }
      }
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().getJSON(autocompleteUrl, function (data) {
        autocompleteLogic(autocompleteUrl, data);
      });
    }
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mouseenter', '.hiveAutocompleteItem', function () {
    _pauseBlur = true;
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mouseout', '.hiveAutocompleteItem', function () {
    _pauseBlur = false;
  });
  function guessHivePath(lastChars) {
    var possibleMatches = [];
    for (var i = 0; i < _currentFiles.length; i++) {
      if ((jquery__WEBPACK_IMPORTED_MODULE_0___default()(_currentFiles[i]).text().trim().indexOf(lastChars) === 0 || lastChars === '') && jquery__WEBPACK_IMPORTED_MODULE_0___default()(_currentFiles[i]).text().trim() !== '..') {
        possibleMatches.push(_currentFiles[i]);
      }
    }
    if (possibleMatches.length === 1) {
      $el.val($el.val() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(possibleMatches[0]).text().trim().substr(lastChars.length));
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(possibleMatches[0]).html().indexOf('folder') > -1) {
        $el.val($el.val() + '/');
        showAutocomplete();
      }
    } else if (possibleMatches.length > 1) {
      // finds the longest common prefix
      var possibleMatchesPlain = [];
      for (var z = 0; z < possibleMatches.length; z++) {
        possibleMatchesPlain.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(possibleMatches[z]).text().trim());
      }
      var arr = possibleMatchesPlain.slice(0).sort();
      var word1 = arr[0];
      var word2 = arr[arr.length - 1];
      var j = 0;
      while (word1.charAt(j) === word2.charAt(j)) {
        ++j;
      }
      var match = word1.substring(0, j);
      $el.val($el.val() + match.substr(lastChars.length));
    }
  }
};
Plugin.prototype.setOptions = function (options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[pluginName] = function (options) {
  return this.each(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName, new Plugin(this, options));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName).setOptions(options);
    }
  });
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default())[pluginName] = function (options) {
  if (typeof console !== 'undefined') {
    console.warn('$(elem).jHueGenericAutocomplete() is a preferred call method.');
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.element).jHueGenericAutocomplete(options);
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.horizontalscrollbar.js":
/*!**********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.horizontalscrollbar.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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



/*
 * jHue horizontal scrollbar for dataTables_wrapper
 *
 */

var pluginName = 'jHueHorizontalScrollbar',
  defaults = {};
function Plugin(element, options) {
  this.element = element;
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  this._defaults = defaults;
  this._name = pluginName;
  this.init();
}
function initWhenReady(el) {
  var $wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parents('.dataTables_wrapper');
  if (!$wrapper.length) {
    return;
  }
  var colWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find('thead tr th').outerWidth();
  var wrapperWidth = $wrapper.width();
  var wrapperScrollWidth = $wrapper[0].scrollWidth;
  if ($wrapper.find('.hue-scrollbar-x-rail').length === 0 && wrapperWidth < wrapperScrollWidth) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-scrollbar-x-rail').remove();
    var $scrollbarRail = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>');
    var $scrollbar = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('hue-scrollbar-x');
    $scrollbar.width(Math.max(20, wrapperWidth * (wrapperWidth / wrapperScrollWidth)));
    $scrollbar.appendTo($scrollbarRail);
    try {
      $scrollbar.draggable('destroy');
    } catch (e) {}
    var throttleScrollTimeout = -1;
    var scrollbarWidth = 0;
    var railWidth = 0;
    $scrollbar.draggable({
      axis: 'x',
      containment: 'parent',
      start: function start() {
        $wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parents('.dataTables_wrapper');
        wrapperScrollWidth = $wrapper[0].scrollWidth;
        wrapperWidth = $wrapper.width();
        scrollbarWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).outerWidth();
        railWidth = $scrollbarRail.innerWidth();
        $scrollbarRail.css('opacity', '1');
      },
      drag: function drag(e, ui) {
        $wrapper.scrollLeft((wrapperScrollWidth - wrapperWidth) * (ui.position.left / (railWidth - scrollbarWidth)));
        window.clearTimeout(throttleScrollTimeout);
        throttleScrollTimeout = window.setTimeout(function () {
          $wrapper.trigger('scroll');
        }, 50);
      },
      stop: function stop() {
        $scrollbarRail.css('opacity', '');
      }
    });
    $wrapper.bind('mousewheel', function (e) {
      var _deltaX = e.deltaX * e.deltaFactor,
        _deltaY = e.deltaY;
      if (Math.abs(_deltaX) >= Math.abs(_deltaY)) {
        var self = this;
        self.scrollLeft += _deltaX;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (self.scrollLeft > 0) {
          $scrollbar.css('left', ($scrollbarRail[0].getBoundingClientRect().width - $scrollbar[0].getBoundingClientRect().width) * (self.scrollLeft / (self.scrollWidth - self.getBoundingClientRect().width)) + 'px');
          window.clearTimeout(throttleScrollTimeout);
          throttleScrollTimeout = window.setTimeout(function () {
            $wrapper.trigger('scroll');
          }, 50);
        }
      }
    });
    $scrollbarRail.addClass('hue-scrollbar-x-rail').appendTo($wrapper);
    $scrollbarRail.width(wrapperWidth - colWidth);
    $scrollbarRail.css('marginLeft', colWidth + 'px');
    if ($scrollbarRail.position().top > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - 10) {
      $scrollbarRail.css('bottom', '0');
    }
    $wrapper.bind('scroll_update', function () {
      $scrollbar.css('left', ($scrollbarRail.width() - $scrollbar.width()) * ($wrapper.scrollLeft() / (wrapperScrollWidth - wrapperWidth)) + 'px');
    });
  } else {
    if (wrapperWidth === wrapperScrollWidth) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-scrollbar-x-rail').hide();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-scrollbar-x-rail').show();
    }
    $wrapper.find('.hue-scrollbar-x-rail').width(wrapperWidth - colWidth);
    var scrollbar = $wrapper.find('.hue-scrollbar-x');
    scrollbar.width(Math.max(20, wrapperWidth * (wrapperWidth / wrapperScrollWidth)));
    var scrollbarRail = $wrapper.find('.hue-scrollbar-x-rail');
    scrollbarRail.width(wrapperWidth - colWidth);
    scrollbarRail.css('marginLeft', colWidth + 'px');
    scrollbar.css('left', (scrollbarRail.width() - scrollbar.width()) * ($wrapper.scrollLeft() / (wrapperScrollWidth - wrapperWidth)) + 'px');
  }
}
Plugin.prototype.init = function () {
  var el = this.element;
  var checkWidth = function checkWidth() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parents('.dataTables_wrapper').width() > 0) {
      initWhenReady(el);
    } else {
      window.setTimeout(checkWidth, 100);
    }
  };
  checkWidth();
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[pluginName] = function (options) {
  return this.each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName, new Plugin(this, options));
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.huedatatable.js":
/*!***************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.huedatatable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_html_deXSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/html/deXSS */ "./desktop/core/src/desktop/js/utils/html/deXSS.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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





/*
 * Extension to datatable to programmatically switch off datatable in case of huge tables
 *
 */

(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.hueDataTable) = function (oInit) {
  var _this = this;
  var self = this;
  self.$table = null;
  self.fnSetColumnVis = function (index, visible) {
    var aoColumns = self.$table.data('aoColumns');
    var change = aoColumns[index].bVisible !== visible;
    aoColumns[index].bVisible = visible;
    if (!change) {
      return;
    }
    if (!visible) {
      self.$table.find('tr').find('td:eq(' + index + '),th:eq(' + index + ')').hide();
    } else {
      self.$table.find('tr').find('td:eq(' + index + '),th:eq(' + index + ')').show();
    }
    if (self.$table.data('plugin_jHueTableExtender')) {
      self.$table.data('plugin_jHueTableExtender').drawLockedRows(true);
    } else if (self.$table.data('plugin_jHueTableExtender2')) {
      self.$table.data('plugin_jHueTableExtender2').redraw();
    }
  };
  self.fnToggleAllCols = function (visible) {
    var aoColumns = self.$table.data('aoColumns');
    aoColumns.forEach(function (col, idx) {
      if (idx > 0) {
        col.bVisible = visible;
      }
    });
    if (!visible) {
      self.$table.find('th, td').hide();
      self.$table.find('tr').find('td:eq(0),th:eq(0)').show();
    } else {
      self.$table.find('th, td').show();
    }
    if (self.$table.data('plugin_jHueTableExtender')) {
      self.$table.data('plugin_jHueTableExtender').drawLockedRows(true);
    } else if (self.$table.data('plugin_jHueTableExtender2')) {
      self.$table.data('plugin_jHueTableExtender2').redraw();
    }
  };
  self.fnSortColumn = function (obj, way) {
    var data = self.$table.data('data');
    var idx = obj.originalIndex;
    if (way === 0) {
      idx = 0;
    }
    var sortType = 'alpha';
    if (obj.cssClass) {
      if (obj.cssClass === 'sort-numeric') {
        sortType = 'numeric';
      }
      if (obj.cssClass === 'sort-date') {
        sortType = 'date';
      }
    }
    if (way === -1 || way === 0) {
      data.sort(function (a, b) {
        if (sortType === 'date') {
          if (a[idx] === 'NULL') {
            return -1;
          }
          if (b[idx] === 'NULL') {
            return 1;
          }
          if (moment(a[idx].replace(/\&nbsp;/, ' ')).valueOf() > moment(b[idx].replace(/\&nbsp;/, ' ')).valueOf()) {
            return 1;
          }
          if (moment(a[idx].replace(/\&nbsp;/, ' ')).valueOf() < moment(b[idx].replace(/\&nbsp;/, ' ')).valueOf()) {
            return -1;
          }
          return 0;
        } else if (sortType === 'numeric') {
          if (a[idx] === 'NULL') {
            return -1;
          }
          if (b[idx] === 'NULL') {
            return 1;
          }
          if (a[idx] * 1 > b[idx] * 1) {
            return 1;
          }
          if (a[idx] * 1 < b[idx] * 1) {
            return -1;
          }
          return 0;
        } else {
          if (a[idx] > b[idx]) {
            return 1;
          }
          if (a[idx] < b[idx]) {
            return -1;
          }
          return 0;
        }
      });
    } else {
      data.sort(function (a, b) {
        if (sortType === 'date') {
          if (a[idx] === 'NULL') {
            return 1;
          }
          if (b[idx] === 'NULL') {
            return -1;
          }
          if (moment(a[idx].replace(/\&nbsp;/, ' ')).valueOf() > moment(b[idx].replace(/\&nbsp;/, ' ')).valueOf()) {
            return -1;
          }
          if (moment(a[idx].replace(/\&nbsp;/, ' ')).valueOf() < moment(b[idx].replace(/\&nbsp;/, ' ')).valueOf()) {
            return 1;
          }
          return 0;
        } else if (sortType === 'numeric') {
          if (a[idx] === 'NULL') {
            return 1;
          }
          if (b[idx] === 'NULL') {
            return -1;
          }
          if (a[idx] * 1 > b[idx] * 1) {
            return -1;
          }
          if (a[idx] * 1 < b[idx] * 1) {
            return 1;
          }
          return 0;
        } else {
          if (a[idx] > b[idx]) {
            return -1;
          }
          if (a[idx] < b[idx]) {
            return 1;
          }
          return 0;
        }
      });
    }
    self.fnDraw(true);
  };
  self.fnShowSearch = function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').length == 0) {
      var search = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').css({
        position: 'fixed',
        bottom: '20px',
        opacity: 0.85
      }).addClass('hueAnchor hue-datatable-search').appendTo('body');
      search.html('<input type="text"> <i class="fa fa-chevron-up pointer muted"></i> <i class="fa fa-chevron-down pointer muted"></i> &nbsp; <span></span> &nbsp; <i class="fa fa-times pointer inactive-action"></i>');
      search.find('.fa-times').on('click', function () {
        search.hide();
        var $t = self.$table;
        if ($t.data('scrollToRow') != null) {
          $t.data('scrollToCol', null);
          $t.data('scrollToRow', null);
          $t.find('.columnSelected').removeClass('columnSelected');
        }
      });
      search.find('.fa-chevron-down').on('click', function () {
        if (!self.isScrolling) {
          self.fnScrollToNextResult();
        }
      });
      search.find('.fa-chevron-up').on('click', function () {
        if (!self.isScrolling) {
          self.fnScrollToPreviousResult();
        }
      });
      search.find('input').jHueDelayedInput(function () {
        self.fnSearch(search.find('input').val());
      }, 600, true);
      search.find('input').keydown(function (e) {
        if ([13, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          if ([13, 39, 40].indexOf(e.keyCode) > -1) {
            search.find('.fa-chevron-down').trigger('click');
          } else {
            search.find('.fa-chevron-up').trigger('click');
          }
        }
      });
      search.find('input').focus();
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('hue.datatable.search.hide', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').hide();
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').show();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').find('input').focus();
    }
    var right = -30;
    var adjustRight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() - (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content').width() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content').offset().left);
    if (adjustRight > 0) {
      right = adjustRight;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hueAnchorScroller:visible').each(function () {
      var visibleRight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('right').replace(/px/gi, '') * 1;
      if (!isNaN(visibleRight) && visibleRight > right) {
        right = visibleRight;
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').css('right', right + 50 + 'px');
  };
  self.fnSearch = function (what, avoidScroll) {
    var $t = self.$table;
    if ($t) {
      if (typeof avoidScroll === 'undefined' || !avoidScroll) {
        $t.find('.columnSelected').removeClass('columnSelected');
        $t.data('scrollToCol', null);
        $t.data('scrollToRow', null);
      }
      if (what !== '') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').find('span').text('');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').find('.fa-chevron-down').addClass('muted').removeClass('inactive-action');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').find('.fa-chevron-up').addClass('muted').removeClass('inactive-action');
        var coords = [];
        $t.data('searchCoords', []);
        $t.data('searchCoordHighlighted', 0);
        var data = self.$table.data('data');
        data.forEach(function (row, rowIdx) {
          row.forEach(function (fld, fldIdx) {
            if ((fld + '').replace(/\&nbsp;/, ' ').toLowerCase().indexOf(what.toLowerCase()) > -1) {
              coords.push({
                row: rowIdx,
                col: fldIdx
              });
            }
          });
        });
        $t.data('searchCoords', coords);
        if (coords.length > 0) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').find('input').val() !== '') {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').find('.fa-chevron-down').removeClass('muted').addClass('inactive-action');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').find('.fa-chevron-up').removeClass('muted').addClass('inactive-action');
          }
          if (typeof avoidScroll === 'undefined' || !avoidScroll) {
            self.fnScrollTo(coords[0].row, coords[0].col);
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').find('span').text($t.data('searchCoordHighlighted') + 1 + ' ' + $t.data('oInit')['i18n'].OF + ' ' + $t.data('searchCoords').length);
          }
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').find('span').text($t.data('oInit')['i18n'].NO_RESULTS);
        }
      }
    }
  };
  self.fnScrollToPreviousResult = function () {
    var $t = self.$table;
    if ($t && $t.data('searchCoords') && $t.data('searchCoords').length > 0) {
      var high = $t.data('searchCoordHighlighted');
      high = high == 0 ? $t.data('searchCoords').length - 1 : high - 1;
      $t.data('searchCoordHighlighted', high);
      self.fnScrollTo($t.data('searchCoords')[high].row, $t.data('searchCoords')[high].col);
    }
  };
  self.fnScrollToNextResult = function () {
    var $t = self.$table;
    if ($t && $t.data('searchCoords') && $t.data('searchCoords').length > 0) {
      var high = $t.data('searchCoordHighlighted');
      high = high == $t.data('searchCoords').length - 1 ? 0 : high + 1;
      $t.data('searchCoordHighlighted', high);
      self.fnScrollTo($t.data('searchCoords')[high].row, $t.data('searchCoords')[high].col);
    }
  };
  self.isScrolling = false;
  self.fnScrollTo = function (row, col) {
    var $t = self.$table;
    if ($t) {
      self.isScrolling = true;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').find('span').text($t.data('searchCoordHighlighted') + 1 + ' ' + $t.data('oInit')['i18n'].OF + ' ' + $t.data('searchCoords').length);
      var colSel = $t.find('tr th:nth-child(' + (col + 1) + ')');
      $t.parent().animate({
        scrollLeft: colSel.position().left + $t.parent().scrollLeft() - $t.parent().offset().left - 30
      }, 300, function () {
        self.isScrolling = false;
      });
      $t.parents($t.data('oInit')['scrollable']).animate({
        scrollTop: $t.find('tbody tr').find('td:eq(0)').filter(function () {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text() - 1 == row;
        }).position().top + 73
      }, 100, function () {
        $t.data('scrollToCol', col);
        $t.data('scrollToRow', row);
        $t.data('scrollAnimate', true);
        $t.parent().trigger('scroll');
      });
    }
  };
  self.isDrawing = false;
  this.lowerCaseFilter = '';
  self.fnDraw = function (force) {
    var aoColumns = self.$table.data('aoColumns');
    if (!self.isDrawing && aoColumns) {
      var $t = self.$table;
      if ($t) {
        self.isDrawing = true;
        var data = self.$table.data('data');
        var appendable = $t.children('tbody').length > 0 ? $t.children('tbody') : $t;
        var startCol = -1;
        var endCol = -1;
        $t.find('thead>tr th').each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).position().left > 0 && startCol == -1) {
            startCol = i;
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).position().left + $t.position().left < $t.parent().width() + $t.parent().position().left) {
            endCol = i;
          }
        });
        startCol = Math.max(1, startCol - 1);
        endCol = Math.min(aoColumns.length, endCol + 3); // avoid loading just after the col
        // for tables under the 30 columns, display them all at once
        if (aoColumns.length <= 30) {
          endCol = aoColumns.length;
        }
        var rowHeight = 32;
        var invisibleOffset = $t.data('oInit')['forceInvisible'] ? $t.data('oInit')['forceInvisible'] : aoColumns.length < 100 ? 10 : 1;
        var scrollable = $t.parents($t.data('oInit')['scrollable']);
        var visibleRows = Math.ceil((scrollable.height() - Math.max($t.offset().top, 0)) / rowHeight);
        if ($t.data('oInit')['contained']) {
          visibleRows = Math.ceil(scrollable.height() / rowHeight);
        }
        visibleRows += invisibleOffset;
        visibleRows = Math.max(visibleRows, 11);
        var startRow = $t.offset().top - 73 < 0 ? Math.max(Math.floor(Math.abs($t.offset().top - 73) / rowHeight) - invisibleOffset, 0) : 0;
        if ($t.data('oInit')['contained']) {
          startRow = Math.max(0, Math.floor(Math.abs($t.position().top) / rowHeight) - invisibleOffset);
        }
        var endRow = startRow + visibleRows + invisibleOffset;
        if (endRow != $t.data('endRow') || endRow == $t.data('endRow') && endCol > $t.data('endCol') || force) {
          $t.data('endCol', endCol);
          $t.data('endRow', endRow);
          if ($t.data('fnDraws') === 0) {
            var html = '';
            for (var i = 0; i < data.length; i++) {
              html += '<tr class="ht-visible-row ht-visible-row-' + i + '"><td>' + (0,utils_html_deXSS__WEBPACK_IMPORTED_MODULE_1__["default"])(data[i][0]) + '</td><td colspan="' + (aoColumns.length - 1) + '" class="stripe"></td></tr>';
            }
            appendable.html(html);
            if ($t.data('plugin_jHueTableExtender')) {
              $t.data('plugin_jHueTableExtender').drawFirstColumn();
            }
            if ($t.data('plugin_jHueTableExtender2')) {
              $t.data('plugin_jHueTableExtender2').drawFirstColumn(true);
            }
          } else if (force) {
            var _html = '';
            for (var _i = $t.find('.ht-visible-row').length; _i < data.length; _i++) {
              _html += '<tr class="ht-visible-row ht-visible-row-' + _i + '"><td>' + (0,utils_html_deXSS__WEBPACK_IMPORTED_MODULE_1__["default"])(data[_i][0]) + '</td><td colspan="' + (aoColumns.length - 1) + '" class="stripe"></td></tr>';
            }
            appendable.html(appendable.html() + _html);
          }
          for (var _i2 = 0; _i2 < data.length; _i2++) {
            var _html2 = '';
            if (_i2 >= startRow && _i2 <= endRow) {
              var row = data[_i2];
              if (row) {
                for (var j = 0; j < endCol; j++) {
                  _html2 += '<td ' + (!aoColumns[j].bVisible ? 'style="display: none"' : '') + '>' + (0,utils_html_deXSS__WEBPACK_IMPORTED_MODULE_1__["default"])(row[j]) + '</td>';
                }
                if (endCol < aoColumns.length) {
                  _html2 += '<td colspan="' + (aoColumns.length - endCol) + '" class="stripe"></td>';
                }
              }
            } else {
              _html2 = '<td>' + (0,utils_html_deXSS__WEBPACK_IMPORTED_MODULE_1__["default"])(data[_i2][0]) + '</td><td colspan="' + (aoColumns.length - 1) + '" class="stripe"></td>';
            }
            appendable.children().eq(_i2).html(_html2);
          }
          if (force) {
            if ($t.data('plugin_jHueTableExtender')) {
              $t.data('plugin_jHueTableExtender').drawFirstColumn();
            }
            if ($t.data('plugin_jHueTableExtender2')) {
              $t.data('plugin_jHueTableExtender2').drawFirstColumn(true);
            }
          }
        }
        if ($t.data('scrollToCol')) {
          $t.find('.columnSelected').removeClass('columnSelected');
          var colSel = $t.find('tr th:nth-child(' + ($t.data('scrollToCol') + 1) + ')');
          if ($t.find('tr td:nth-child(' + ($t.data('scrollToCol') + 1) + ')').length > 0) {
            colSel = $t.find('tr td:nth-child(' + ($t.data('scrollToCol') + 1) + ')');
          }
          if ($t.data('scrollAnimate')) {
            if ($t.data('scrollAnimateDirect')) {
              $t.parent().scrollLeft(colSel.position().left + $t.parent().scrollLeft() - ($t.data('scrollInPopover') ? 0 : $t.parent().offset().left) - 30);
              $t.parent().trigger('scroll');
            } else {
              $t.parent().animate({
                scrollLeft: colSel.position().left + $t.parent().scrollLeft() - ($t.data('scrollInPopover') ? 0 : $t.parent().offset().left) - 30
              }, 300, function () {
                $t.parent().trigger('scroll');
              });
            }
            if ($t.data('scrollLastColPosLeft') == null || $t.data('scrollLastColPosLeft') != colSel.position().left) {
              $t.data('scrollLastColPosLeft', colSel.position().left);
              $t.data('scrollLastParentLeft', $t.parent().scrollLeft());
            } else {
              $t.data('scrollAnimate', null);
              $t.data('scrollAnimateDirect', null);
              $t.data('scrollLastColPosLeft', null);
              $t.data('scrollLastParentLeft', null);
            }
          }
          if ($t.data('scrollToRow') == null) {
            colSel.addClass('columnSelected');
          } else {
            $t.find('tr:nth-child(' + ($t.data('scrollToRow') + 1) + ') td:nth-child(' + ($t.data('scrollToCol') + 1) + ')').addClass('columnSelected');
          }
          if ($t.data('plugin_jHueTableExtender')) {
            $t.data('plugin_jHueTableExtender').drawHeader(typeof force === 'undefined');
            $t.data('plugin_jHueTableExtender').drawLockedRows();
          }
          if ($t.data('plugin_jHueTableExtender2')) {
            $t.data('plugin_jHueTableExtender2').drawLockedRows();
          }
        }
        $t.data('fnDraws', $t.data('fnDraws') + 1);
        if ($t.data('oInit')['fnDrawCallback']) {
          $t.data('oInit')['fnDrawCallback']();
        }
        $t.trigger('headerpadding');
        self.isDrawing = false;
      }
    }
  };
  var applyFilter = function applyFilter() {
    var data = _this.$table.data('originalData');
    if (!_this.lowerCaseFilter || !data.length) {
      _this.$table.data('data', data);
    } else {
      _this.$table.data('data', data.filter(function (row) {
        return row.some(function (col, idx) {
          return idx > 0 && ('' + col).toLowerCase().indexOf(_this.lowerCaseFilter) !== -1;
        });
      }));
    }
  };
  this.setFilter = function (filter) {
    _this.lowerCaseFilter = filter.toLowerCase();
    if (_this.$table.children('tbody').length > 0) {
      _this.$table.children('tbody').empty();
    }
    applyFilter();
    _this.fnDraw(true);
  };
  self.fnAddData = function (mData, bRedraw, streaming, streamRecordLimit) {
    var $t = self.$table;
    if ($t) {
      var aoColumns = $t.data('aoColumns') || [];
      var newData = streaming ? mData.reverse().concat($t.data('originalData')) : $t.data('originalData').concat(mData);
      if (streaming && streamRecordLimit) {
        newData.splice(streamRecordLimit);
      }
      $t.data('originalData', newData);
      applyFilter();
      if (mData.length === 0) {
        return;
      }
      if (aoColumns.length === 0) {
        mData[0].forEach(function () {
          aoColumns.push({
            bVisible: true
          });
        });
      }
      self.fnDraw(true);
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').is(':visible')) {
        self.fnSearch(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').find('input').val(), true);
      }
    }
  };
  self.fnSettings = function () {
    var aoColumns = self.$table.data('aoColumns');
    return {
      aoColumns: aoColumns
    };
  };
  self.fnClearTable = function (bRedraw) {
    var $t = self.$table;
    if ($t) {
      if ($t.children('tbody').length > 0) {
        $t.children('tbody').empty();
      } else {
        $t.children('tr').remove();
      }
      $t.data('data', []);
      $t.data('originalData', []);
      $t.data('aoRows', []);
      $t.data('aoColumns', []);
      $t.data('fnDraws', 0);
    }
  };
  self.fnDestroy = function () {
    self.fnClearTable();
    self.$table.unwrap();
    self.$table.data('isScrollAttached', null);
    self.$table.removeClass('table-huedatatable');
    if (self.$table.data('oInit')) {
      self.$table.parents(self.$table.data('oInit')['scrollable']).off('scroll', self.$table.parents(self.$table.data('oInit')['scrollable']).data('scrollFnDt'));
    }
  };
  return self.each(function () {
    self.$table = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var parent = self.$table.parent();
    if (parent.hasClass('dataTables_wrapper')) {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').remove();
    self.$table.data('data', []);
    self.$table.data('originalData', []);
    self.$table.data('aoRows', []);
    self.$table.data('aoColumns', []);
    self.$table.data('fnDraws', 0);
    self.$table.wrap('<div class="dataTables_wrapper"></div>');
    self.$table.unbind('sort');
    self.$table.bind('sort', function (e, obj) {
      self.$table.find('thead tr th:not(:eq(' + obj.originalIndex + '))').removeClass('sorting_desc').removeClass('sorting_asc');
      self.$table.data('scrollAnimate', true);
      self.$table.data('scrollAnimateDirect', true);
      var $cell = self.$table.find('thead tr th:eq(' + obj.originalIndex + ')');
      if ($cell.hasClass('sorting_desc')) {
        $cell.removeClass('sorting_desc');
        self.fnSortColumn(obj, 0);
      } else if ($cell.hasClass('sorting_asc')) {
        $cell.removeClass('sorting_asc').addClass('sorting_desc');
        self.fnSortColumn(obj, 1);
      } else {
        $cell.addClass('sorting_asc');
        self.fnSortColumn(obj, -1);
      }
      if (self.$table.data('plugin_jHueTableExtender2')) {
        self.$table.data('plugin_jHueTableExtender2').drawHeader();
        self.$table.data('plugin_jHueTableExtender2').drawLockedRows();
      }
    });
    if (typeof oInit !== 'undefined') {
      self.$table.data('oInit', oInit);
      var drawTimeout = -1;
      if (self.$table.data('oInit')['scrollable'] && !self.$table.data('isScrollAttached')) {
        self.$table.data('isScrollAttached', true);
        var scrollFn = function scrollFn() {
          window.clearTimeout(drawTimeout);
          drawTimeout = window.setTimeout(self.fnDraw, Math.max(100, Math.min(self.$table.data('aoColumns') ? self.$table.data('aoColumns').length : 500, 500)));
        };
        window.setTimeout(function () {
          self.$table.parents(oInit['scrollable']).data('scrollFnDt', scrollFn);
          self.$table.parents(oInit['scrollable']).on('scroll', scrollFn);
        }, 1000);
      }
    }
    self.$table.addClass('table-huedatatable');
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.rowselector.js":
/*!**************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.rowselector.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




/*
 * jHue row selector plugin
 *
 */

var pluginName = 'jHueRowSelector',
  defaults = {};
function Plugin(element, options) {
  this.element = element;
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  this._defaults = defaults;
  this._name = pluginName;
  this.init();
}
Plugin.prototype.setOptions = function (options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
};
Plugin.prototype.init = function () {
  var _this = this;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).closest('tr').click(function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('row-selector-exclude') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('td').hasClass('row-selector-exclude')) {
      return;
    }
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('a')) {
      var href = jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).attr('href'));
      if (href != '' && href != '#' && href.indexOf('void(0)') == -1) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('open.link', jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).attr('href'));
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).click();
      }
    }
  }).css('cursor', 'pointer');
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[pluginName] = function (options) {
  return this.each(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName, new Plugin(this, options));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName).setOptions(options);
    }
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.scrollleft.js":
/*!*************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.scrollleft.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




/*
 * jHue scroll to left plugin
 * Can be used globally with
 *   $.jHueScrollLeft()
 * or with a target for the scroll left
 *   $(element).jHueScrollLeft()
 *
 *   options:
 *    - threshold: (default 100) value in pixels, scroll amount before the link appears
 */

var pluginName = 'jHueScrollLeft',
  defaults = {
    threshold: 100 // it displays it after 100 px of scroll
  };
function Plugin(element, options) {
  this.element = element;
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  this._defaults = defaults;
  this._name = pluginName;
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('jHueLeftScrollified') !== 'true') {
    this.setupScrollLeft();
  }
}
Plugin.prototype.setOptions = function (options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
};
Plugin.prototype.setupScrollLeft = function () {
  var _this = this;
  var link = null,
    isActive = true;
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').length > 0) {
    // just one scroll up per page
    link = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('click', '#jHueScrollLeftAnchor');
  } else {
    link = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a></a>').attr('id', 'jHueScrollLeftAnchor').addClass('hueAnchor hueAnchorScroller').attr('href', 'javascript:void(0)').html("<i class='fa fa-fw fa-chevron-left'></i>").appendTo('body');
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).attr('jHueLeftScrollified', 'true');
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).is('body')) {
    setScrollBehavior(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), jquery__WEBPACK_IMPORTED_MODULE_0___default()('body, html'));
  } else {
    setScrollBehavior(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element), jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element));
  }
  function positionOtherAnchors() {
    var upPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').css('right').replace(/px/gi, '') * 1;
    var right = upPosition - 30;
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').is(':visible')) {
      right = upPosition;
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').is(':visible')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').css('right', right + 50 + 'px');
      right += 50;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').css('right', right + 50 + 'px');
  }
  function setScrollBehavior(scrolled, scrollable) {
    scrolled.scroll(function () {
      if (scrolled.scrollLeft() > _this.options.threshold) {
        if (link.is(':hidden')) {
          positionOtherAnchors();
          if (isActive) {
            link.fadeIn(200, positionOtherAnchors);
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).data('lastScrollLeft') == null || jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).data('lastScrollLeft') < scrolled.scrollLeft()) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').data('caller', scrollable);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).data('lastScrollLeft', scrolled.scrollTop());
      } else {
        checkForAllScrolls();
      }
    });
  }
  function checkForAllScrolls() {
    var _allOk = true;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find("[jHueLeftScrollified='true']").each(function (cnt, item) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).is('body')) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollLeft() > _this.options.threshold) {
          _allOk = false;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').data('caller', jquery__WEBPACK_IMPORTED_MODULE_0___default()('body, html'));
        }
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).scrollLeft() > _this.options.threshold) {
        _allOk = false;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').data('caller', jquery__WEBPACK_IMPORTED_MODULE_0___default()(item));
      }
    });
    if (_allOk) {
      if (isActive) {
        link.fadeOut(200, positionOtherAnchors);
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').data('caller', null);
    }
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#jHueScrollLeftAnchor', function (event) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').data('caller') != null) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').data('caller').animate({
        scrollLeft: 0
      }, 300, function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find("[jHueLeftScrollified='true']").trigger('scroll_update');
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find("[jHueLeftScrollified='true']").not(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').data('caller')).is('body') && jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollLeft() > _this.options.threshold) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').data('caller', jquery__WEBPACK_IMPORTED_MODULE_0___default()('body, html'));
        } else {
          checkForAllScrolls();
        }
      });
    }
    return false;
  });
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('hue.scrollleft.show', function () {
    isActive = true;
  });
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('hue.scrollleft.hide', function () {
    isActive = false;
    if (link.is(':visible')) {
      link.hide();
    }
  });
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[pluginName] = function (options) {
  return this.each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName, new Plugin(this, options));
  });
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default())[pluginName] = function (options) {
  new Plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()('body'), options);
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.scrollup.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.scrollup.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




/*
 * jHue scroll to top plugin
 * Can be used globally with
 *   $.jHueScrollUp()
 * or with a target for the scroll up
 *   $(element).jHueScrollUp()
 *
 *   options:
 *    - threshold: (default 100) value in pixels, scroll amount before the link appears
 */

var pluginName = 'jHueScrollUp',
  defaults = {
    threshold: 100,
    // it displays it after 100 px of scroll
    scrollLeft: false
  };
function Plugin(element, options) {
  this.element = element;
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  this._defaults = defaults;
  this._name = pluginName;
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('jHueScrollified') !== 'true') {
    this.setupScrollUp();
  }
  if (this.options.scrollLeft) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).jHueScrollLeft(this.options.threshold);
  }
}
Plugin.prototype.setOptions = function (options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
};
Plugin.prototype.setupScrollUp = function () {
  var _this = this;
  var link = null;
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').length > 0) {
    // just one scroll up per page
    link = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('click', '#jHueScrollUpAnchor');
  } else {
    link = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a></a>').attr('id', 'jHueScrollUpAnchor').addClass('hueAnchor hueAnchorScroller').attr('href', 'javascript:void(0)').html("<i class='fa fa-fw fa-chevron-up'></i>").appendTo('body');
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).attr('jHueScrollified', 'true');
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).is('body')) {
    setScrollBehavior(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), jquery__WEBPACK_IMPORTED_MODULE_0___default()('body, html'));
  } else {
    setScrollBehavior(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element), jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element));
  }
  function positionOtherAnchors() {
    var upPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').css('right').replace(/px/gi, '') * 1;
    var right = upPosition - 30;
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').is(':visible')) {
      right = upPosition;
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').is(':visible')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollLeftAnchor').css('right', right + 50 + 'px');
      right += 50;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hue-datatable-search').css('right', right + 50 + 'px');
  }
  utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('reposition.scroll.anchor.up', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').css('right', '20px');
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).is('body') && jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).is(':visible')) {
      var adjustRight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() - (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).width() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).offset().left);
      if (adjustRight > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').css('right', adjustRight + 'px');
      }
    }
    positionOtherAnchors();
  });
  function setScrollBehavior(scrolled, scrollable) {
    scrolled.scroll(function () {
      if (scrolled.scrollTop() > _this.options.threshold) {
        if (link.is(':hidden')) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('reposition.scroll.anchor.up');
          link.fadeIn(200, function () {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('reposition.scroll.anchor.up');
          });
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).data('lastScrollTop') == null || jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).data('lastScrollTop') < scrolled.scrollTop()) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').data('caller', scrollable);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).data('lastScrollTop', scrolled.scrollTop());
      } else {
        checkForAllScrolls();
      }
    });
    window.setTimeout(function () {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('reposition.scroll.anchor.up');
    }, 0);
  }
  function checkForAllScrolls() {
    var _allOk = true;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find("[jHueScrollified='true']").each(function (cnt, item) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).is('body')) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > _this.options.threshold) {
          _allOk = false;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').data('caller', jquery__WEBPACK_IMPORTED_MODULE_0___default()('body, html'));
        }
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).scrollTop() > _this.options.threshold) {
        _allOk = false;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').data('caller', jquery__WEBPACK_IMPORTED_MODULE_0___default()(item));
      }
    });
    if (_allOk) {
      link.fadeOut(200, positionOtherAnchors);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').data('caller', null);
    }
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#jHueScrollUpAnchor', function (event) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').data('caller') != null) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').data('caller').animate({
        scrollTop: 0
      }, 300, function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find("[jHueScrollified='true']").not(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').data('caller')).is('body') && jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > _this.options.threshold) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueScrollUpAnchor').data('caller', jquery__WEBPACK_IMPORTED_MODULE_0___default()('body, html'));
        } else {
          checkForAllScrolls();
        }
      });
    }
    return false;
  });
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[pluginName] = function (options) {
  return this.each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName, new Plugin(this, options));
  });
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default())[pluginName] = function (options) {
  new Plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()('body'), options);
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.selectize.js":
/*!************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.selectize.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectize_selectize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @selectize/selectize */ "./node_modules/@selectize/selectize/dist/js/selectize.js");
/* harmony import */ var _selectize_selectize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_selectize_selectize__WEBPACK_IMPORTED_MODULE_0__);
/*! selectize clear button plugin by Alexey Petushkov | https://github.com/mentatxx/selectize-plugin-clear | Apache License (v2) */


window.Selectize = (_selectize_selectize__WEBPACK_IMPORTED_MODULE_0___default());

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.selector.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.selector.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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



/*
 * jHue selector plugin
 * it tranforms a select multiple into a searchable/selectable alphabetical list
 */

var pluginName = 'jHueSelector',
  defaults = {
    selectAllLabel: 'Select all',
    showSelectAll: true,
    searchPlaceholder: 'Search',
    noChoicesFound: 'No choices found for this element',
    width: 300,
    height: 200,
    onChange: function onChange() {}
  };
function Plugin(element, options) {
  this.element = element;
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  this._defaults = defaults;
  this._name = pluginName;
  this.init();
}
Plugin.prototype.setOptions = function (options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
};
Plugin.prototype.init = function () {
  var _this = this;
  var addressBook = [];
  var selectorContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>');
  if (this.options.width != 300) {
    selectorContainer.width(this.options.width);
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).hide();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('option').each(function (cnt, opt) {
    var initial = jquery__WEBPACK_IMPORTED_MODULE_0___default()(opt).text().substr(0, 1).toLowerCase();
    if (addressBook[initial] == null) {
      addressBook[initial] = [];
    }
    addressBook[initial].push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(opt));
  });
  var sortedKeys = [];
  for (var key in addressBook) {
    if (addressBook.hasOwnProperty(key)) {
      sortedKeys.push(key);
    }
  }
  sortedKeys.sort();
  if (sortedKeys.length == 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).after(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('alert').css('margin-top', '-2px').css('float', 'left').html(this.options.noChoicesFound));
  } else {
    selectorContainer.addClass('jHueSelector');
    var body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('jHueSelectorBody');
    body.appendTo(selectorContainer);
    var _loop = function _loop() {
      var key = sortedKeys[i];
      var ul = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul>');
      var dividerLi = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>').addClass('selectorDivider');
      dividerLi.html('<strong>' + key.toUpperCase() + '</strong>');
      dividerLi.appendTo(ul);
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(addressBook[key], function (cnt, opt) {
        var li = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>');
        var lbl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<label>').text(opt.text());
        var chk = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input>').attr('type', 'checkbox').addClass('selector').change(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':checked')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('opt').attr('selected', 'selected');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('opt').removeAttr('selected');
          }
          _this.options.onChange();
        }).data('opt', opt).prependTo(lbl);
        if (opt.is(':selected')) {
          chk.attr('checked', 'checked');
        }
        lbl.appendTo(li);
        li.appendTo(ul);
      });
      ul.appendTo(body);
    };
    for (var i = 0; i < sortedKeys.length; i++) {
      _loop();
    }
    var header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('jHueSelectorHeader');
    header.prependTo(selectorContainer);
    var selectAll = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<label>').html('&nbsp;');
    if (this.options.showSelectAll) {
      selectAll.text(this.options.selectAllLabel);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input>').attr('type', 'checkbox').change(function () {
        var isChecked = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':checked');
        selectorContainer.find('input.selector:visible').each(function () {
          if (isChecked) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('checked', true);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('opt').attr('selected', 'selected');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('checked', false);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('opt').removeAttr('selected');
          }
        });
        if (searchBox.val() != '') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('checked', false);
        }
        _this.options.onChange();
      }).prependTo(selectAll);
    }
    selectAll.appendTo(header);
    var searchBox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input>').attr('type', 'text').attr('placeholder', this.options.searchPlaceholder).keyup(function () {
      body.find('ul').attr('show', true).show();
      var q = jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
      if (q != '') {
        body.find('li.selectorDivider').hide();
        body.find('label').each(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().toLowerCase().indexOf(q.toLowerCase()) > -1) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().show();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().hide();
          }
        });
        body.find('ul').attr('show', false);
        body.find('ul > *:visible').parent().attr('show', true).find('li.selectorDivider').show();
      } else {
        body.find('li.selectorDivider').show();
        body.find('label').parent().show();
      }
      body.find('ul[show=false]').hide();
      body.find('ul[show=true]').show();
    });
    if (this.options.width != 300) {
      searchBox.css('margin-left', this.options.width - 120 + 'px');
    }
    searchBox.prependTo(header);
    body.height(this.options.height - header.outerHeight());
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).after(selectorContainer);
  }
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[pluginName] = function (options) {
  return this.each(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName, new Plugin(this, options));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName).setOptions(options);
    }
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.tableextender.js":
/*!****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.tableextender.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
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





/*
 * jHue table extender plugin
 *
 */

var pluginName = 'jHueTableExtender',
  defaults = {
    fixedHeader: false,
    fixedFirstColumn: false,
    fixedFirstColumnTopMargin: 0,
    headerSorting: true,
    lockSelectedRow: false,
    firstColumnTooltip: false,
    classToRemove: 'resultTable',
    hintElement: null,
    includeNavigator: true,
    mainScrollable: window,
    stickToTopPosition: -1,
    app: null,
    labels: {
      GO_TO_COLUMN: 'Go to column:',
      PLACEHOLDER: 'column name...',
      LOCK: 'Click to lock row',
      UNLOCK: 'Click to unlock row'
    }
  };
function Plugin(element, options) {
  this.element = element;
  this.setOptions(options);
  this._name = pluginName;
  this.init();
}
Plugin.prototype.setOptions = function (options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  this.options.labels = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults.labels, {
    GO_TO_COLUMN: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["default"])('Go to column:'),
    PLACEHOLDER: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["default"])('column name...'),
    LOCK: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["default"])('Lock this row'),
    UNLOCK: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["default"])('Unlock this row'),
    ROW_DETAILS: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["default"])('Show row details')
  }, options ? options.labels : {});
  this._defaults = defaults;
  if (this.options.fixedHeader) {
    drawHeader(this);
  }
  if (this.options.fixedFirstColumn) {
    drawFirstColumn(this);
  }
};
Plugin.prototype.resetSource = function () {
  var _this = this;
  if (_this.options.includeNavigator) {
    var source = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.element).find('th').each(function () {
      source.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text());
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jHueTableExtenderNavigator').find('input').data('typeahead').source = source;
  }
};
Plugin.prototype.drawHeader = function (skipCreation) {
  drawHeader(this, skipCreation);
};
Plugin.prototype.drawFirstColumn = function () {
  drawFirstColumn(this);
};
Plugin.prototype.drawLockedRows = function (force) {
  var _this = this;
  var $pluginElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element);
  if ($pluginElement.data('lockedRows')) {
    var locks = $pluginElement.data('lockedRows');
    Object.keys(locks).forEach(function (idx) {
      drawLockedRow(_this, idx.substr(1), force);
    });
  }
};
Plugin.prototype.init = function () {
  (jquery__WEBPACK_IMPORTED_MODULE_0___default().expr[":"].econtains) = function (obj, index, meta, stack) {
    return (obj.textContent || obj.innerText || jquery__WEBPACK_IMPORTED_MODULE_0___default()(obj).text() || '').toLowerCase() == meta[3].toLowerCase();
  };
  var _this = this;
  if (_this.options.includeNavigator) {
    var jHueTableExtenderNavigator = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', 'jHueTableExtenderNavigator');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').attr('href', '#').addClass('pull-right').html('&times;').click(function (e) {
      e.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().hide();
    }).appendTo(jHueTableExtenderNavigator);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('<label>').html(_this.options.labels.GO_TO_COLUMN + ' <input type="text" placeholder="' + _this.options.labels.PLACEHOLDER + '" />').appendTo(jHueTableExtenderNavigator);
    jHueTableExtenderNavigator.appendTo('body');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('tbody').click(function (event) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(getSelection()) == '') {
        window.setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.rowSelected').removeClass('rowSelected');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.columnSelected').removeClass('columnSelected');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cellSelected').removeClass('cellSelected');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target.parentNode).addClass('rowSelected');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target.parentNode).find('td').addClass('rowSelected');
          jHueTableExtenderNavigator.css('left', (event.pageX + jHueTableExtenderNavigator.width() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() - 10 ? event.pageX - jHueTableExtenderNavigator.width() - 10 : event.pageX) + 'px').css('top', event.pageY + 10 + 'px').show();
          jHueTableExtenderNavigator.find('input').focus();
        }, 100);
      }
    });
    var source = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('th').each(function () {
      source.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text());
    });
    jHueTableExtenderNavigator.find('input').typeahead({
      source: source,
      updater: function updater(item) {
        jHueTableExtenderNavigator.hide();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('tr td:nth-child(' + (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('th:econtains(' + item + ')').index() + 1) + ')').addClass('columnSelected');
        if (_this.options.firstColumnTooltip) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('tr td:nth-child(' + (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('th:econtains(' + item + ')').index() + 1) + ')').each(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('rel', 'tooltip').attr('title', '#' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('td:first-child').text()).tooltip({
              placement: 'left'
            });
          });
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).parent().animate({
          scrollLeft: jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('th:econtains(' + item + ')').position().left + jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).parent().scrollLeft() - jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).parent().offset().left - 30
        }, 300);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('tr.rowSelected td:nth-child(' + (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('th:econtains(' + item + ')').index() + 1) + ')').addClass('cellSelected');
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).parent().bind('mouseleave', function () {
      jHueTableExtenderNavigator.hide();
    });
    jHueTableExtenderNavigator.bind('mouseenter', function (e) {
      jHueTableExtenderNavigator.show();
    });
  }
  if (_this.options.hintElement != null) {
    var showAlertTimeout = -1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('tbody').mousemove(function () {
      window.clearTimeout(showAlertTimeout);
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.hintElement).data('show') == null || jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.hintElement).data('show')) {
        showAlertTimeout = window.setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.hintElement).fadeIn();
        }, 1300);
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.hintElement).find('.close').click(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.hintElement).data('show', false);
    });
  }
  if (_this.options.fixedHeader) {
    drawHeader(_this);
  }
  if (_this.options.fixedFirstColumn) {
    drawFirstColumn(_this);
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click dblclick', '.dataTables_wrapper > table tbody tr', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_wrapper > .jHueTableExtenderClonedContainerColumn table tbody tr.selected').removeClass('selected');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_wrapper > table tbody tr.selected').removeClass('selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_wrapper > .jHueTableExtenderClonedContainerColumn table tbody tr:eq(' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index() + ')').addClass('selected');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('dblclick', '.dataTables_wrapper > table tbody tr', function () {
    if (utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('table.row.show.details', {
        idx: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index(),
        table: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('table')
      });
    }
  });
};
function drawLockedRow(plugin, rowNo, force) {
  var $pluginElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin.element);
  var lockedRows = $pluginElement.data('lockedRows') || {};
  var $header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + $pluginElement.attr('id') + 'jHueTableExtenderClonedContainer');
  var $headerCounter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + $pluginElement.attr('id') + 'jHueTableExtenderClonedContainerCell');
  $header.addClass('locked');
  $headerCounter.addClass('locked');
  function unlock($el) {
    $header.find('tr td:first-child').filter(function () {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text() === rowNo + '';
    }).closest('tr').remove();
    delete lockedRows['r' + $el.text()];
    $el.parent().remove();
    if ($header.find('tbody tr').length == 0) {
      $header.removeClass('locked');
      $headerCounter.removeClass('locked');
    }
  }
  if (Object.keys(lockedRows).indexOf('r' + rowNo) === -1 || force) {
    if (force) {
      unlock(lockedRows['r' + rowNo].cell.find('td'));
    }
    var $clone = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<tr>');
    var tHtml = '';
    var aoColumns = $pluginElement.data('aoColumns');
    $pluginElement.data('data')[rowNo - 1].forEach(function (col, idx) {
      tHtml += '<td ' + (aoColumns && !aoColumns[idx].bVisible ? 'style="display: none"' : '') + '>' + col + '</td>';
    });
    $clone.html(tHtml);
    $clone.addClass('locked');
    $clone.appendTo($header.find('tbody'));
    $pluginElement.data('lockedRows', lockedRows);
    var $newTr = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<tr>');
    $newTr.addClass('locked').html('<td class="pointer unlockable" title="' + plugin.options.labels.UNLOCK + '"><i class="fa fa-unlock muted"></i>' + rowNo + '</td>').appendTo($headerCounter.find('tbody'));
    $newTr.find('td').on('click', function () {
      unlock(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    });
    lockedRows['r' + rowNo] = {
      row: $clone,
      cell: $newTr
    };
  } else {
    lockedRows['r' + rowNo].row.appendTo($header.find('tbody'));
    lockedRows['r' + rowNo].cell.appendTo($headerCounter.find('tbody'));
    lockedRows['r' + rowNo].cell.find('td').on('click', function () {
      unlock(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    });
  }
}
function drawFirstColumn(plugin) {
  var $pluginElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin.element);
  if (!$pluginElement.attr('id') && plugin.options.parentId) {
    $pluginElement.attr('id', 'eT' + plugin.options.parentId);
  }
  var mainScrollable = plugin.options.mainScrollable;
  var originalTh = jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin.element).find('thead>tr th:eq(0)');
  var topPosition;
  if (plugin.options.clonedContainerPosition == 'absolute') {
    topPosition = $pluginElement.parent().position().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()(mainScrollable).scrollTop();
  } else {
    topPosition = $pluginElement.parent().offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()(mainScrollable).scrollTop();
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + $pluginElement.attr('id') + 'jHueTableExtenderClonedContainerCell').remove();
  var clonedCell = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<table>').attr('class', jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin.element).attr('class'));
  clonedCell.removeClass(plugin.options.classToRemove);
  clonedCell.css('margin-bottom', '0').css('table-layout', 'fixed');
  var clonedCellTHead = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<thead>');
  clonedCellTHead.appendTo(clonedCell);
  var clonedCellTH = originalTh.clone();
  clonedCellTH.appendTo(clonedCellTHead);
  clonedCellTH.width(originalTh.width()).css({
    'background-color': '#FFFFFF',
    'border-color': 'transparent'
  });
  clonedCellTH.click(function () {
    originalTh.click();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('<tbody>').appendTo(clonedCell);
  var clonedCellContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').css('background-color', '#FFFFFF').width(originalTh.outerWidth());
  clonedCell.appendTo(clonedCellContainer);
  var clonedCellVisibleContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin.element).attr('id') + 'jHueTableExtenderClonedContainerCell').addClass('jHueTableExtenderClonedContainerCell').width(originalTh.outerWidth()).css('overflow', 'hidden').css('top', topPosition + 'px');
  clonedCellVisibleContainer.css('position', plugin.options.clonedContainerPosition || 'fixed');
  clonedCellContainer.appendTo(clonedCellVisibleContainer);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + $pluginElement.attr('id') + 'jHueTableExtenderClonedContainerColumn').remove();
  var clonedTable = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<table>').attr('class', jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin.element).attr('class')).html('<thead></thead><tbody></tbody>');
  clonedTable.removeClass(plugin.options.classToRemove);
  clonedTable.css('margin-bottom', '0').css('table-layout', 'fixed');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin.element).find('thead>tr th:eq(0)').clone().appendTo(clonedTable.find('thead'));
  var clonedTBody = clonedTable.find('tbody');
  var clones = jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin.element).find('tbody>tr td:nth-child(1)').clone();
  var h = '';
  clones.each(function () {
    h += '<tr><td>' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html() + '</td></tr>';
  });
  clonedTBody.html(h);
  if (plugin.options.lockSelectedRow) {
    clonedTBody.find('td').each(function () {
      var cell = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      cell.attr('title', plugin.options.labels.LOCK).addClass('lockable pointer').on('click', function () {
        drawLockedRow(plugin, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text() * 1);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>').addClass('fa fa-lock muted').prependTo(cell);
    });
  }
  clonedTable.find('thead>tr th:eq(0)').width(originalTh.width()).css('background-color', '#FFFFFF');
  var clonedTableContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').css('background-color', '#FFFFFF').width(originalTh.outerWidth()).height($pluginElement.parent().get(0).scrollHeight);
  clonedTable.appendTo(clonedTableContainer);
  var clonedTableVisibleContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', $pluginElement.attr('id') + 'jHueTableExtenderClonedContainerColumn').addClass('jHueTableExtenderClonedContainerColumn').width(originalTh.outerWidth()).height($pluginElement.parent().height()).css('overflow', 'hidden').css('top', topPosition + 'px');
  clonedTableVisibleContainer.css('position', plugin.options.clonedContainerPosition || 'fixed');
  clonedTableContainer.appendTo(clonedTableVisibleContainer);
  clonedTableVisibleContainer.appendTo($pluginElement.parent());
  clonedCellVisibleContainer.appendTo($pluginElement.parent());
  window.clearInterval($pluginElement.data('firstcol_interval'));
  var firstColInt = window.setInterval(function () {
    if ($pluginElement.parent().height() != $pluginElement.parent().data('h')) {
      clonedTableContainer.height($pluginElement.parent().get(0).scrollHeight);
      clonedTableVisibleContainer.height($pluginElement.parent().height());
      $pluginElement.parent().data('h', clonedTableVisibleContainer.height());
    }
  }, 250, plugin.options.app);
  $pluginElement.data('firstcol_interval', firstColInt);
  $pluginElement.parent().resize(function () {
    clonedTableContainer.height($pluginElement.parent().get(0).scrollHeight);
    clonedTableVisibleContainer.height($pluginElement.parent().height());
  });
  $pluginElement.parent().scroll(function () {
    clonedTableContainer.css('marginTop', -$pluginElement.parent().scrollTop() + plugin.options.fixedFirstColumnTopMargin + 'px');
  });
  clonedTableContainer.css('marginTop', -$pluginElement.parent().scrollTop() + plugin.options.fixedFirstColumnTopMargin + 'px');
  function positionClones() {
    var pos = plugin.options.stickToTopPosition;
    if (typeof pos === 'function') {
      pos = pos();
    }
    if (pos > -1) {
      if ($pluginElement.offset().top < pos) {
        clonedCellVisibleContainer.css('top', pos + 'px');
      } else {
        clonedCellVisibleContainer.css('top', $pluginElement.offset().top + 'px');
      }
      clonedTableVisibleContainer.css('top', $pluginElement.offset().top + 'px');
    } else if (plugin.options.clonedContainerPosition == 'absolute') {
      clonedTableVisibleContainer.css('top', $pluginElement.parent().position().top + 'px');
      clonedCellVisibleContainer.css('top', $pluginElement.parent().position().top + 'px');
    } else {
      clonedTableVisibleContainer.css('top', $pluginElement.parent().offset().top + 'px');
      clonedCellVisibleContainer.css('top', $pluginElement.parent().offset().top + 'px');
    }
  }
  positionClones();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(mainScrollable).on('scroll', positionClones);
}
function drawHeader(plugin, skipCreation) {
  var $pluginElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin.element);
  if (!$pluginElement.attr('id') && plugin.options.parentId) {
    $pluginElement.attr('id', 'eT' + plugin.options.parentId);
  }
  if (typeof skipCreation === 'undefined') {
    var mainScrollable = plugin.options.mainScrollable;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + $pluginElement.attr('id') + 'jHueTableExtenderClonedContainer').remove();
    var clonedTable = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<table>').attr('class', jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin.element).attr('class'));
    clonedTable.removeClass(plugin.options.classToRemove);
    clonedTable.css('margin-bottom', '0').css('table-layout', 'fixed');
    var clonedTableTHead = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<thead>');
    clonedTableTHead.appendTo(clonedTable);
    var clonedTableTR = $pluginElement.find('thead>tr').clone();
    clonedTableTR.appendTo(clonedTableTHead);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('<tbody>').appendTo(clonedTable);
    clonedTable.find('thead>tr th').wrapInner('<span></span>');
    $pluginElement.find('thead>tr th').each(function (i) {
      var originalTh = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      originalTh.removeAttr('data-bind');
      clonedTable.find('thead>tr th:eq(' + i + ')').width(originalTh.width()).css('background-color', '#FFFFFF').click(function () {
        originalTh.click();
        if (plugin.options.headerSorting) {
          clonedTable.find('thead>tr th').attr('class', 'sorting');
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('class', originalTh.attr('class'));
      });
    });
    var clonedTableContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').width($pluginElement.outerWidth());
    clonedTable.appendTo(clonedTableContainer);
    var topPosition;
    if (plugin.options.clonedContainerPosition == 'absolute') {
      topPosition = $pluginElement.parent().position().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()(mainScrollable).scrollTop();
    } else {
      topPosition = $pluginElement.parent().offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()(mainScrollable).scrollTop();
    }
    var clonedTableVisibleContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', $pluginElement.attr('id') + 'jHueTableExtenderClonedContainer').addClass('jHueTableExtenderClonedContainer').width($pluginElement.parent().width()).css('overflow-x', 'hidden').css('top', topPosition + 'px');
    clonedTableVisibleContainer.css('position', plugin.options.clonedContainerPosition || 'fixed');
    clonedTableContainer.appendTo(clonedTableVisibleContainer);
    clonedTableVisibleContainer.prependTo($pluginElement.parent());
    var throttledHeaderPadding = function throttledHeaderPadding() {
      var firstCellWidth = clonedTable.find('thead>tr th:eq(0)').outerWidth();
      clonedTable.find('thead>tr th').each(function () {
        var leftPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).position().left - firstCellWidth;
        if (leftPosition + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).outerWidth() > 0 && leftPosition < 0) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').width() + -leftPosition < jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).outerWidth() - 20) {
            // 20 is the sorting css width
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').css('paddingLeft', -leftPosition);
          }
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').css('paddingLeft', 0);
        }
      });
    };
    var scrollTimeout = -1;
    $pluginElement.parent().scroll(function () {
      var scrollLeft = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).scrollLeft();
      clonedTableVisibleContainer.scrollLeft(scrollLeft);
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(throttledHeaderPadding, 200);
    });
    $pluginElement.bind('headerpadding', function () {
      scrollTimeout = window.setTimeout(throttledHeaderPadding, 200);
    });
    clonedTableVisibleContainer.scrollLeft($pluginElement.parent().scrollLeft());
    $pluginElement.parent().data('w', clonedTableVisibleContainer.width());
    window.clearInterval($pluginElement.data('header_interval'));
    var headerInt = window.setInterval(function () {
      if ($pluginElement.parent().width() != $pluginElement.parent().data('w')) {
        clonedTableVisibleContainer.width($pluginElement.parent().width());
        $pluginElement.parent().data('w', clonedTableVisibleContainer.width());
        $pluginElement.find('thead>tr th').each(function (i) {
          clonedTable.find('thead>tr th:eq(' + i + ')').width(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).width()).css('background-color', '#FFFFFF');
        });
      }
    }, 250, plugin.options.app);
    $pluginElement.data('header_interval', headerInt);
    $pluginElement.parent().resize(function () {
      clonedTableVisibleContainer.width(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).width());
    });
    var positionClones = function positionClones() {
      var pos = plugin.options.stickToTopPosition;
      if (typeof pos === 'function') {
        pos = pos();
      }
      if (pos > -1) {
        if ($pluginElement.offset().top < pos) {
          clonedTableVisibleContainer.css('top', pos + 'px');
        } else {
          clonedTableVisibleContainer.css('top', $pluginElement.offset().top + 'px');
        }
      } else if (plugin.options.clonedContainerPosition == 'absolute') {
        clonedTableVisibleContainer.css('top', $pluginElement.parent().position().top + 'px');
      } else {
        clonedTableVisibleContainer.css('top', $pluginElement.parent().offset().top + 'px');
      }
    };
    positionClones();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(mainScrollable).on('scroll', positionClones);
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + $pluginElement.attr('id') + 'jHueTableExtenderClonedContainer').children('div').width($pluginElement.outerWidth());
    $pluginElement.find('thead>tr th').each(function (i) {
      var originalTh = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + $pluginElement.attr('id') + 'jHueTableExtenderClonedContainer').find('thead>tr th:eq(' + i + ')').width(originalTh.width()).attr('class', originalTh.attr('class'));
    });
  }
}
function getSelection() {
  var t = '';
  if (window.getSelection) {
    t = window.getSelection();
  } else if (document.getSelection) {
    t = document.getSelection();
  } else if (document.selection) {
    t = document.selection.createRange().text;
  }
  return t.toString();
}
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[pluginName] = function (options) {
  return this.each(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName, new Plugin(this, options));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName).resetSource();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + pluginName).setOptions(options);
    }
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.tableextender2.js":
/*!*****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.tableextender2.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_html_deXSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/html/deXSS */ "./desktop/core/src/desktop/js/utils/html/deXSS.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
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





var PLUGIN_NAME = 'jHueTableExtender2';
var DEFAULT_OPTIONS = {
  fixedHeader: true,
  fixedFirstColumn: true,
  fixedFirstColumnTopMargin: 0,
  headerSorting: true,
  lockSelectedRow: true,
  firstColumnTooltip: false,
  classToRemove: 'resultTable',
  hintElement: null,
  mainScrollable: window,
  app: null,
  stickToTopPosition: -1,
  labels: {
    GO_TO_COLUMN: 'Go to column:',
    PLACEHOLDER: 'column name...',
    LOCK: 'Lock row',
    UNLOCK: 'Unlock row',
    ROW_DETAILS: 'Show row details'
  }
};
function Plugin(element, options) {
  var self = this;
  self.disposeFunctions = [];
  self.lockedRows = {};
  self.setOptions(options); // Sets self.options

  self.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
  self.$parent = self.$element.parent();
  self.$mainScrollable = jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.options.mainScrollable);
  self.lastHeaderWidth = 0;
  self.drawHeader(); // Sets self.headerRowContainer, self.thMapping
  self.drawFirstColumn(); // Sets self.firstColumnInner, self.firstColumnTopCell and self.firstColumn
  self.drawLockedRows();
  var manyColumns = self.thMapping.length > 20;
  var sortAdjustment = self.options.noSort ? 10 : 20; // 20 is the sorting css width

  var firstCellWidth, leftPosition, th, thi, leftPadding;
  var throttledHeaderPadding = function throttledHeaderPadding() {
    firstCellWidth = self.options.fixedFirstColumn ? self.firstColumnTopCell.outerWidth() : 0;
    for (thi = 0; thi < self.thMapping.length; thi++) {
      th = self.thMapping[thi];
      if (!th.original.is(':visible')) {
        continue;
      }
      leftPosition = th.clone.position().left - firstCellWidth;
      if (leftPosition + th.clone.outerWidth() > 0 && leftPosition < 0) {
        if (th.cloneSpan.width() - leftPosition < th.clone.outerWidth() - sortAdjustment) {
          leftPadding = -leftPosition;
        } else {
          leftPadding = th.clone.outerWidth() - sortAdjustment - th.cloneSpan.width();
        }
        th.cloneSpan.css('paddingLeft', leftPadding);
      } else {
        th.cloneSpan.css('paddingLeft', 0);
      }
    }
  };
  var scrollTimeout = -1;
  var headerScroll = function headerScroll() {
    self.headerRowContainer.scrollLeft(self.$parent.scrollLeft());
    if (manyColumns) {
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(throttledHeaderPadding, 200);
    } else {
      throttledHeaderPadding();
    }
  };
  self.$parent.on('scroll', headerScroll);
  self.disposeFunctions.push(function () {
    self.$parent.off('scroll', headerScroll);
  });
  self.$element.bind('headerpadding', function () {
    window.clearTimeout(scrollTimeout);
    scrollTimeout = window.setTimeout(throttledHeaderPadding, 200);
  });
  self.disposeFunctions.push(function () {
    self.$element.unbind('headerpadding');
  });
  var redrawSubscription = utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('table.extender.redraw', function (parentId) {
    if (parentId === self.options.parentId) {
      self.redraw();
    }
  });
  self.disposeFunctions.push(function () {
    redrawSubscription.remove();
  });
  var hideSubscription = utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('table.extender.hide', function (parentId) {
    if (parentId == self.options.parentId) {
      self.headerRowContainer.hide();
      self.firstColumnInner.hide();
      self.firstColumnTopCell.hide();
      self.firstColumn.hide();
    }
  });
  self.disposeFunctions.push(function () {
    hideSubscription.remove();
  });
  var adjustSizes = function adjustSizes() {
    if (self.lastHeaderWidth !== self.$parent.width()) {
      self.lastHeaderWidth = self.$parent.width();
      self.headerRowContainer.width(self.lastHeaderWidth);
    }
    for (thi = 0; thi < self.thMapping.length; thi++) {
      th = self.thMapping[thi];
      if (!th.original.is(':visible')) {
        continue;
      }
      if (th.clone.lastWidth !== th.original.width()) {
        th.clone.lastWidth = th.original.width();
        th.clone.width(th.clone.lastWidth);
      }
    }
    if (self.headerRowContainer.scrollLeft() !== self.$parent.scrollLeft()) {
      self.headerRowContainer.scrollLeft(self.$parent.scrollLeft());
      throttledHeaderPadding();
    }
  };
  adjustSizes();
  var sizeInterval = window.setInterval(adjustSizes, 300, self.options.app);
  self.disposeFunctions.push(function () {
    window.clearInterval(sizeInterval);
  });
  var clickHandler = function clickHandler() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('selected')) {
      self.$parent.find('.selected').removeClass('selected');
    } else {
      self.$parent.find('.selected').removeClass('selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('selected');
      self.$parent.find('.fixed-first-column table tbody tr:eq(' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index() + ')').addClass('selected');
    }
  };
  var overHandler = function overHandler() {
    self.$parent.find('.fixed-first-column table tbody tr:eq(' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index() + ') td').addClass('fixed-first-col-hover');
  };
  var outHandler = function outHandler() {
    self.$parent.find('.fixed-first-column table tbody tr td').removeClass('fixed-first-col-hover');
  };
  self.$parent.children('table').on('click dblclick', 'tbody tr', clickHandler);
  self.$parent.children('table').on('mouseover', 'tbody tr', overHandler);
  self.$parent.children('table').on('mouseout', 'tbody tr', outHandler);
  self.disposeFunctions.push(function () {
    self.$parent.children('table').off('click dblclick', 'tbody tr', clickHandler);
    self.$parent.children('table').on('mouseover', 'tbody tr', overHandler);
    self.$parent.children('table').on('mouseout', 'tbody tr', outHandler);
  });
  if (!self.options.disableTopPosition) {
    self.repositionHeader();
    var scrollFunction = self.repositionHeader.bind(self);
    self.$mainScrollable.on('scroll', scrollFunction);
    self.disposeFunctions.push(function () {
      self.$mainScrollable.off('scroll', scrollFunction);
    });
  }
}
Plugin.prototype.redraw = function () {
  var self = this;
  self.drawHeader();
  self.drawFirstColumn();
  self.drawLockedRows(true);
  self.repositionHeader();
  window.setTimeout(function () {
    self.headerRowContainer.scrollLeft(self.$parent.scrollLeft());
    self.$element.trigger('headerpadding');
  }, 300);
};
Plugin.prototype.destroy = function () {
  var self = this;
  self.disposeFunctions.forEach(function (disposeFunction) {
    disposeFunction();
  });
  if (self.headerRowContainer) {
    self.headerRowContainer.remove();
  }
  if (self.firstColumnInner) {
    self.firstColumnInner.remove();
  }
  if (self.firstColumnTopCell) {
    self.firstColumnTopCell.remove();
  }
  if (self.firstColumn) {
    self.firstColumn.remove();
  }
  self.$element.data('plugin_' + PLUGIN_NAME, null);
};
Plugin.prototype.setOptions = function (options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, DEFAULT_OPTIONS, options);
  this.options.labels = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, DEFAULT_OPTIONS.labels, {
    GO_TO_COLUMN: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('Go to column:'),
    PLACEHOLDER: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('column name...'),
    LOCK: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('Lock this row'),
    UNLOCK: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('Unlock this row'),
    ROW_DETAILS: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('Show row details')
  }, options ? options.labels : {});
};
Plugin.prototype.repositionHeader = function () {
  var self = this;
  if (self.options.disableTopPosition) {
    return;
  }
  var pos = self.options.stickToTopPosition;
  var topPos = 0;
  var firstColTopPos = 0;
  if (typeof pos === 'function') {
    pos = pos();
  }
  var isFixed = false;
  if (pos > -1) {
    if (self.$element.offset().top < pos) {
      topPos = pos;
      isFixed = true;
    } else {
      topPos = self.$element.offset().top;
      isFixed = false;
    }
    firstColTopPos = self.$element.offset().top;
  } else if (self.options.clonedContainerPosition == 'absolute') {
    topPos = self.$parent.position().top;
    firstColTopPos = topPos;
  } else {
    topPos = self.$parent.offset().top;
    firstColTopPos = topPos;
  }
  if (pos > -1) {
    var fixCSS = {
      top: '',
      left: self.$parent.position().left + 'px',
      position: 'absolute'
    };
    self.firstColumn.css(fixCSS);
    if (isFixed) {
      fixCSS = {
        top: topPos + 'px',
        left: '',
        position: 'fixed'
      };
    }
    self.firstColumnTopCell.css(fixCSS);
    self.headerRowContainer.css(fixCSS);
  } else {
    self.firstColumn.scrollTop(self.$mainScrollable.scrollTop());
    self.firstColumn.css('top', firstColTopPos + 'px');
    self.headerRowContainer.css('top', topPos + 'px');
    self.firstColumnTopCell.css('top', topPos + 'px');
  }
};
Plugin.prototype.drawHeader = function () {
  var self = this;
  if (!self.$element.attr('id') && self.options.parentId) {
    self.$element.attr('id', 'eT' + self.options.parentId);
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + self.$element.attr('id') + 'jHueTableExtenderClonedContainer').remove();
  var clonedTable = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<table>').attr('class', self.$element.attr('class'));
  clonedTable.removeClass(self.options.classToRemove);
  clonedTable.css('margin-bottom', '0').css('table-layout', 'fixed');
  var clonedTableTHead = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<thead>');
  clonedTableTHead.appendTo(clonedTable);
  var clonedTableTR = self.$element.find('thead>tr').clone();
  clonedTableTR.appendTo(clonedTableTHead);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('<tbody>').appendTo(clonedTable);
  var clonedThs = clonedTable.find('thead>tr th');
  clonedThs.wrapInner('<span></span>');
  if (typeof self.$element.data('updateThWidthsInterval') !== 'undefined') {
    window.clearInterval(self.$element.data('updateThWidthsInterval'));
  }
  self.thMapping = [];
  var totalThWidth = 0;
  self.$element.find('thead>tr th').each(function (i) {
    var originalTh = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    originalTh.removeAttr('data-bind');
    var clonedTh = jquery__WEBPACK_IMPORTED_MODULE_0___default()(clonedThs[i]).css('background-color', '#FFFFFF');
    clonedTh.click(function () {
      originalTh.click();
      if (self.options.headerSorting) {
        clonedThs.attr('class', 'sorting');
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('class', originalTh.attr('class'));
    });
    clonedTh.width(originalTh.width());
    totalThWidth += originalTh.width();
    self.thMapping.push({
      original: originalTh,
      clone: clonedTh,
      cloneSpan: clonedTh.children().first()
    });
  });
  var headerRowDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>');
  clonedTable.appendTo(headerRowDiv);
  var topPosition;
  if (self.options.clonedContainerPosition === 'absolute') {
    topPosition = self.$parent.position().top - self.$mainScrollable.scrollTop();
  } else {
    topPosition = self.$parent.offset().top - self.$mainScrollable.scrollTop();
  }
  var headerRowContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', self.$element.attr('id') + 'jHueTableExtenderClonedContainer').addClass('fixed-header-row').width(totalThWidth).css('overflow-x', 'hidden');
  if (!self.options.disableTopPosition) {
    headerRowContainer.css('top', topPosition + 'px');
  }
  headerRowContainer.css('position', self.options.clonedContainerPosition || 'fixed');
  self.lastHeaderWidth = self.$parent.width();
  headerRowContainer.width(self.lastHeaderWidth);
  headerRowDiv.appendTo(headerRowContainer);
  headerRowContainer.prependTo(self.$parent);
  headerRowContainer.scrollLeft(self.$parent.scrollLeft());
  self.headerRowContainer = headerRowContainer;
  self.$mainScrollable.trigger('scroll');
};
Plugin.prototype.drawFirstColumn = function (repositionHeader) {
  var self = this;
  if (!self.options.fixedFirstColumn) {
    self.firstColumnInner = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
    self.firstColumnTopCell = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
    self.firstColumn = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
    return;
  }
  if (!self.$element.attr('id') && self.options.parentId) {
    self.$element.attr('id', 'eT' + self.options.parentId);
  }
  var originalTh = self.$element.find('thead>tr th:eq(0)');
  var topPosition;
  if (self.options.clonedContainerPosition === 'absolute') {
    topPosition = self.$parent.position().top - self.$mainScrollable.scrollTop();
  } else {
    topPosition = self.$parent.offset().top - self.$mainScrollable.scrollTop();
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + self.$element.attr('id') + 'jHueTableExtenderClonedContainerCell').remove();
  var clonedCell = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<table>').attr('class', self.$element.attr('class'));
  clonedCell.removeClass(self.options.classToRemove);
  clonedCell.css('margin-bottom', '0').css('table-layout', 'fixed');
  var clonedCellTHead = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<thead><tr></tr></thead>');
  clonedCellTHead.appendTo(clonedCell);
  var clonedCellTH = originalTh.clone();
  clonedCellTH.appendTo(clonedCellTHead.find('tr'));
  clonedCellTH.width(originalTh.width()).css({
    'background-color': '#FFFFFF',
    'border-color': 'transparent'
  });
  clonedCellTH.click(function () {
    originalTh.click();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('<tbody>').appendTo(clonedCell);
  var clonedCellContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').css('background-color', '#FFFFFF').width(originalTh.outerWidth());
  clonedCell.appendTo(clonedCellContainer);
  var firstColumnTopCell = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', self.$element.attr('id') + 'jHueTableExtenderClonedContainerCell').addClass('fixed-first-cell').width(originalTh.outerWidth()).css('overflow', 'hidden').css('top', topPosition + 'px');
  firstColumnTopCell.css('position', self.options.clonedContainerPosition || 'fixed');
  clonedCellContainer.appendTo(firstColumnTopCell);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + self.$element.attr('id') + 'jHueTableExtenderClonedContainerColumn').remove();
  var clonedTable = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<table>').attr('class', self.$element.attr('class')).html('<thead><tr></tr></thead><tbody></tbody>');
  clonedTable.removeClass(self.options.classToRemove);
  clonedTable.css('margin-bottom', '0').css('table-layout', 'fixed');
  self.$element.find('thead>tr th:eq(0)').clone().appendTo(clonedTable.find('thead tr'));
  var clonedTBody = clonedTable.find('tbody');
  var clones = self.$element.find('tbody>tr td:nth-child(1)').clone();
  var h = '';
  var foundEmptyTh = false;
  clones.each(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html() === '') {
      foundEmptyTh = true;
    }
    h += '<tr><td>' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html() + '</td></tr>';
  });
  if (foundEmptyTh) {
    // In IE it's sometimes empty so we'll redraw in a bit
    window.setTimeout(self.drawFirstColumn.bind(self), 200);
    self.firstColumnInner = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
    self.firstColumnTopCell = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
    self.firstColumn = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
    return;
  }
  clonedTBody.html(h);
  if (self.options.lockSelectedRow) {
    clonedTBody.find('td').each(function (idx) {
      var cell = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      cell.addClass('lockable');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>').addClass('fa fa-lock pointer muted').prependTo(cell).on('click', function () {
        self.drawLockedRow(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().text() * 1);
      }).attr('title', self.options.labels.LOCK);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>').addClass('fa fa-expand pointer muted').prependTo(cell).on('click', function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('table.row.show.details', {
          idx: idx,
          table: self.$element
        });
      }).attr('title', self.options.labels.ROW_DETAILS);
    });
  }
  clonedTable.find('thead>tr th:eq(0)').width(originalTh.width()).css('background-color', '#FFFFFF');
  var firstColumnInner = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').css('background-color', '#FFFFFF').width(originalTh.outerWidth()).height(self.$parent.get(0).scrollHeight);
  clonedTable.appendTo(firstColumnInner);
  var firstColumn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', self.$element.attr('id') + 'jHueTableExtenderClonedContainerColumn').addClass('fixed-first-column').width(originalTh.outerWidth()).height(self.$parent.height()).css('overflow', 'hidden').css('top', topPosition + 'px');
  firstColumn.css('position', self.options.clonedContainerPosition || 'fixed');
  firstColumnInner.appendTo(firstColumn);
  firstColumn.insertAfter(self.$element.prev());
  firstColumnTopCell.insertAfter(firstColumn);
  self.firstColumnInner = firstColumnInner;
  self.firstColumnTopCell = firstColumnTopCell;
  self.firstColumn = firstColumn;
  if (repositionHeader) {
    self.repositionHeader();
  }
};
Plugin.prototype.drawLockedRows = function (force) {
  var self = this;
  if (Object.keys(self.lockedRows).length === 0) {
    self.headerRowContainer.find('tbody').empty();
    self.headerRowContainer.removeClass('locked');
    self.firstColumnTopCell.removeClass('locked');
  } else {
    self.headerRowContainer.addClass('locked');
    self.firstColumnTopCell.addClass('locked');
    Object.keys(self.lockedRows).forEach(function (idx) {
      self.drawLockedRow(idx.substr(1), force);
    });
  }
};
Plugin.prototype.drawLockedRow = function (rowNo, force) {
  var self = this;
  function unlock($el) {
    self.headerRowContainer.find('tr td:first-child').filter(function () {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text() === rowNo + '';
    }).closest('tr').remove();
    delete self.lockedRows['r' + $el.text()];
    $el.parent().remove();
    if (self.headerRowContainer.find('tbody tr').length == 0) {
      self.headerRowContainer.removeClass('locked');
      self.firstColumnTopCell.removeClass('locked');
    }
  }
  if (Object.keys(self.lockedRows).indexOf('r' + rowNo) === -1 || force) {
    if (force) {
      unlock(self.lockedRows['r' + rowNo].cell.find('td'));
    }
    var $clone = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<tr>').addClass('locked');
    var tHtml = '';
    var aoColumns = self.$element.data('aoColumns');
    self.$element.data('data')[rowNo - 1].forEach(function (col, idx) {
      tHtml += '<td ' + (aoColumns && !aoColumns[idx].bVisible ? 'style="display: none"' : '') + '>' + (0,utils_html_deXSS__WEBPACK_IMPORTED_MODULE_1__["default"])(col) + '</td>';
    });
    $clone.html(tHtml);
    $clone.appendTo(self.headerRowContainer.find('tbody'));
    var $newTr = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<tr>');
    $newTr.addClass('locked').html('<td class="pointer unlockable" title="' + self.options.labels.UNLOCK + '"><i class="fa fa-unlock muted"></i>' + rowNo + '</td>').appendTo(self.firstColumnTopCell.find('tbody'));
    $newTr.find('td').on('click', function () {
      unlock(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    });
    self.lockedRows['r' + rowNo] = {
      row: $clone,
      cell: $newTr
    };
  } else {
    self.lockedRows['r' + rowNo].row.appendTo(self.headerRowContainer.find('tbody'));
    self.lockedRows['r' + rowNo].cell.appendTo(self.firstColumnTopCell.find('tbody'));
    self.lockedRows['r' + rowNo].cell.find('td').on('click', function () {
      unlock(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    });
  }
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[PLUGIN_NAME] = function (options) {
  return this.each(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + PLUGIN_NAME)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + PLUGIN_NAME).destroy();
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + PLUGIN_NAME, new Plugin(this, options));
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.tablescroller.js":
/*!****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.tablescroller.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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



/*
 * jHue table scroller plugin
 *
 * Three data attributes can be set on the table to modify the default behavior of the plugin:
 * - data-tablescroller-min-height="N" where N is a value in pixels: specifies a minimum height for the scrolling table,
 *      overriding the default 500px set by the plugin
 * - data-tablescroller-min-height-disable="true": disable enforcing a minimum height for the table
 * - data-tablescroller-disable="true": disable the plugin for the specific table
 * - data-tablescroller-enforce-height="true": displays the table at its maximum height accordingly to the page
 */

var PLUGIN_NAME = 'jHueTableScroller',
  defaults = {
    minHeight: 300,
    maxHeight: -1,
    heightAfterCorrection: 40
  };
function Plugin(element, options) {
  this.disposeFunctions = [];
  this.element = element;
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  this._defaults = defaults;
  this._name = PLUGIN_NAME;
  this.init();
}
Plugin.prototype.setOptions = function (options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  resizeScrollingTable(this);
};
Plugin.prototype.init = function () {
  var _this = this;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).data('original-height', jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).height());
  var disableScrollingTable = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('table').eq(0).data('tablescroller-disable');
  if (disableScrollingTable == null || disableScrollingTable !== true) {
    resizeScrollingTable(_this);
    var resizeTimeout = -1;
    var onResize = function onResize() {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(function () {
        resizeScrollingTable(_this);
      }, 400);
    };
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', onResize);
    this.disposeFunctions.push(function () {
      window.clearTimeout(resizeTimeout);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize', onResize);
    });
  }
};
Plugin.prototype.destroy = function () {
  var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.element);
  this.disposeFunctions.forEach(function (disposeFunction) {
    disposeFunction();
  });
  $element.data('plugin_' + PLUGIN_NAME, null);
};
function resizeScrollingTable(_this) {
  var el = _this.element;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).css('overflow-y', '').css('height', '');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).css('overflow-x', 'auto');
  var heightAfter = _this.options.heightAfterCorrection;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).nextAll(':visible').each(function () {
    heightAfter += jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).outerHeight(true);
  });
  var heightCondition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).offset().top - heightAfter;
  var enforceHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('table').eq(0).data('tablescroller-enforce-height');
  if (enforceHeight !== undefined && enforceHeight == true) {
    heightCondition = true;
  }
  var fixedHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('table').eq(0).data('tablescroller-fixed-height') || _this.options.maxHeight;
  if (heightCondition) {
    var specificMinHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find('table').eq(0).data('tablescroller-min-height');
    var minHeightVal = _this.options.minHeight;
    if (!isNaN(parseFloat(specificMinHeight)) && isFinite(specificMinHeight)) {
      minHeightVal = parseFloat(specificMinHeight);
    }
    var disableMinHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.element).find('table').eq(0).data('tablescroller-min-height-disable');
    if (disableMinHeight != null && disableMinHeight == true) {
      if (heightCondition) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).css('overflow-y', 'auto').height(fixedHeight > -1 ? fixedHeight : jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).offset().top - heightAfter);
      }
    } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).offset().top - heightAfter > minHeightVal) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).css('overflow-y', 'auto').height(fixedHeight > -1 ? fixedHeight : jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).offset().top - heightAfter);
    } else {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).data('original-height') > minHeightVal) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).css('overflow-y', 'auto').height(minHeightVal);
      }
      if (fixedHeight > -1) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).css('overflow-y', 'auto').css('maxHeight', fixedHeight);
      }
    }
  } else if (fixedHeight > -1) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).css('overflow-y', 'auto').css('maxHeight', fixedHeight);
  }
}
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[PLUGIN_NAME] = function (options) {
  return this.each(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + PLUGIN_NAME)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + PLUGIN_NAME, new Plugin(this, options));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'plugin_' + PLUGIN_NAME).setOptions(options);
    }
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.titleupdater.js":
/*!***************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.titleupdater.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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



/*
 * jHue title updater plugin
 *
 */

var pluginName = 'jHueTitleUpdater',
  defaults = {
    message: '',
    reset: false
  };
function Plugin(options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
  this._defaults = defaults;
  this._name = pluginName;
  this.updateStatusBar();
}
Plugin.prototype.setOptions = function (options) {
  this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);
};
Plugin.prototype.updateStatusBar = function () {
  var _this = this;
  if (_this.options.reset && jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).data('jHueTitleUpdaterOriginal') != null) {
    document.title = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).data('jHueTitleUpdaterOriginal');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).data('jHueTitleUpdaterOriginal', null);
  } else if (_this.options.message != '') {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).data('jHueTitleUpdaterOriginal') == null) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).data('jHueTitleUpdaterOriginal', document.title);
    }
    document.title = _this.options.message + ' - ' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).data('jHueTitleUpdaterOriginal');
  }
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default())[pluginName] = function () {};
(jquery__WEBPACK_IMPORTED_MODULE_0___default())[pluginName].reset = function () {
  new Plugin({
    reset: true
  });
};
(jquery__WEBPACK_IMPORTED_MODULE_0___default())[pluginName].set = function (message) {
  new Plugin({
    message: message
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ace/aceAnchoredRange.js":
/*!*************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ace/aceAnchoredRange.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AceAnchoredRange)
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

// TODO: depends on Ace

var clearGutterCss = function clearGutterCss(cssClass, session, startRow, endRow) {
  for (var row = startRow; row <= endRow; row++) {
    session.removeGutterDecoration(row, cssClass);
  }
};
var setGutterCss = function setGutterCss(cssClass, session, startRow, endRow) {
  for (var row = startRow; row <= endRow; row++) {
    session.addGutterDecoration(row, cssClass);
  }
};
var AceAnchoredRange = /*#__PURE__*/function () {
  function AceAnchoredRange(editor) {
    _classCallCheck(this, AceAnchoredRange);
    this.editor = editor;
    var doc = this.editor.getSession().doc;
    this.startAnchor = doc.createAnchor(0, 0);
    this.endAnchor = doc.createAnchor(0, 0);
    this.changed = false;
    this.markerCssClasses = {};
    this.gutterCssClasses = {};
    this.refreshThrottle = -1;
    this.attachChangeHandler();
  }
  return _createClass(AceAnchoredRange, [{
    key: "attachChangeHandler",
    value: function attachChangeHandler() {
      var _this = this;
      var throttledRefresh = function throttledRefresh() {
        window.clearTimeout(_this.refreshThrottle);
        _this.refreshThrottle = window.setTimeout(_this.refresh.bind(_this), 10);
      };
      this.startAnchor.on('change', throttledRefresh);
      this.endAnchor.on('change', throttledRefresh);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this2 = this;
      var session = this.editor.getSession();
      var newStart = this.startAnchor.getPosition();
      var newEnd = this.endAnchor.getPosition();
      Object.keys(this.gutterCssClasses).forEach(function (cssClass) {
        var rowSpan = _this2.gutterCssClasses[cssClass];
        clearGutterCss(cssClass, session, rowSpan.start, rowSpan.end);
        rowSpan.start = newStart.row;
        rowSpan.end = newEnd.row;
        setGutterCss(cssClass, session, rowSpan.start, rowSpan.end);
      });
    }
  }, {
    key: "move",
    value: function move(parseLocation, leadingEmptyLineCount) {
      var lastRow = parseLocation.last_line - 1;
      var firstRow = Math.min(lastRow, parseLocation.first_line - 1 + (leadingEmptyLineCount || 0));
      var firstCol = leadingEmptyLineCount ? 0 : parseLocation.first_column;
      this.startAnchor.setPosition(firstRow, firstCol);
      this.endAnchor.setPosition(lastRow, parseLocation.last_column);
    }
  }, {
    key: "addGutterCss",
    value: function addGutterCss(cssClass) {
      var session = this.editor.getSession();
      var startRow = this.startAnchor.getPosition().row;
      var endRow = this.endAnchor.getPosition().row;
      this.gutterCssClasses[cssClass] = {
        start: startRow,
        end: endRow
      };
      setGutterCss(cssClass, session, startRow, endRow);
    }
  }, {
    key: "addMarkerCss",
    value: function addMarkerCss(cssClass) {
      if (!this.markerCssClasses[cssClass]) {
        var AceRange = ace.require('ace/range').Range;
        var range = new AceRange(0, 0, 0, 0);
        range.start = this.startAnchor;
        range.end = this.endAnchor;
        this.markerCssClasses[cssClass] = this.editor.getSession().addMarker(range, cssClass);
      }
    }
  }, {
    key: "removeMarkerCss",
    value: function removeMarkerCss(cssClass) {
      if (this.markerCssClasses[cssClass]) {
        this.editor.getSession().removeMarker(this.markerCssClasses[cssClass]);
        delete this.markerCssClasses[cssClass];
      }
    }
  }, {
    key: "removeGutterCss",
    value: function removeGutterCss(cssClass) {
      if (this.gutterCssClasses[cssClass]) {
        var session = this.editor.getSession();
        var rowSpan = this.gutterCssClasses[cssClass];
        delete this.gutterCssClasses[cssClass];
        clearGutterCss(cssClass, session, rowSpan.start, rowSpan.end);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      window.clearTimeout(this.refreshThrottle);
      this.startAnchor.detach();
      this.endAnchor.detach();
      Object.keys(this.gutterCssClasses).forEach(this.removeGutterCss.bind(this));
      Object.keys(this.markerCssClasses).forEach(this.removeMarkerCss.bind(this));
    }
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ace/aceGutterHandler.js":
/*!*************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ace/aceGutterHandler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AceGutterHandler)
/* harmony export */ });
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _aceLocationHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aceLocationHandler */ "./desktop/core/src/desktop/js/ko/bindings/ace/aceLocationHandler.js");
/* harmony import */ var _aceAnchoredRange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aceAnchoredRange */ "./desktop/core/src/desktop/js/ko/bindings/ace/aceAnchoredRange.js");
/* harmony import */ var _apps_editor_execution_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apps/editor/execution/events */ "./desktop/core/src/desktop/js/apps/editor/execution/events.ts");
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






// TODO: depends on Ace

var LINE_BREAK_REGEX = /(\r\n)|(\n)|(\r)/g;
var LEADING_WHITE_SPACE_REGEX = /^\s+/;
var ACTIVE_CSS = 'ace-active-gutter-decoration';
var COMPLETED_CSS = 'ace-completed-gutter-decoration';
var EXECUTING_CSS = 'ace-executing-gutter-decoration';
var FAILED_CSS = 'ace-failed-gutter-decoration';
var FAILED_MARKER_CSS = 'ace-failed-marker';
var getLeadingEmptyLineCount = function getLeadingEmptyLineCount(parsedStatement) {
  var leadingEmptyLineCount = 0;
  var leadingWhiteSpace = parsedStatement.statement.match(LEADING_WHITE_SPACE_REGEX);
  if (leadingWhiteSpace) {
    var lineBreakMatch = leadingWhiteSpace[0].match(LINE_BREAK_REGEX);
    if (lineBreakMatch) {
      leadingEmptyLineCount = lineBreakMatch.length;
    }
  }
  return leadingEmptyLineCount;
};
var AceGutterHandler = /*#__PURE__*/function () {
  function AceGutterHandler(options) {
    var _this = this;
    _classCallCheck(this, AceGutterHandler);
    this.editor = options.editor;
    this.editorId = options.editorId;
    this.executor = options.executor;
    this.disposals = [];
    var activeStatementAnchor = new _aceAnchoredRange__WEBPACK_IMPORTED_MODULE_2__["default"](this.editor);
    activeStatementAnchor.addGutterCss(ACTIVE_CSS);
    var changedSubscription = utils_huePubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_aceLocationHandler__WEBPACK_IMPORTED_MODULE_1__.ACTIVE_STATEMENT_CHANGED_EVENT, function (statementDetails) {
      if (statementDetails.id !== _this.editorId || !statementDetails.activeStatement) {
        return;
      }
      var leadingEmptyLineCount = getLeadingEmptyLineCount(statementDetails.activeStatement);
      activeStatementAnchor.move(statementDetails.activeStatement.location, leadingEmptyLineCount);
    });
    this.disposals.push(function () {
      changedSubscription.remove();
      activeStatementAnchor.dispose();
    });
    if (this.executor) {
      var executableSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_apps_editor_execution_events__WEBPACK_IMPORTED_MODULE_3__.EXECUTABLE_UPDATED_TOPIC, function (executable) {
        if (executable.executor === _this.executor) {
          if (executable.lost) {
            if (executable.observerState.aceAnchor) {
              executable.observerState.aceAnchor.dispose();
              delete executable.observerState.aceAnchor;
            }
            return;
          }
          var statement = executable.parsedStatement;
          if (!executable.observerState.aceAnchor) {
            executable.observerState.aceAnchor = new _aceAnchoredRange__WEBPACK_IMPORTED_MODULE_2__["default"](_this.editor);
          }
          var leadingEmptyLineCount = getLeadingEmptyLineCount(statement);
          executable.observerState.aceAnchor.move(statement.location, leadingEmptyLineCount);
          var anchoredRange = executable.observerState.aceAnchor;
          anchoredRange.removeGutterCss(COMPLETED_CSS);
          anchoredRange.removeGutterCss(EXECUTING_CSS);
          anchoredRange.removeGutterCss(FAILED_CSS);
          anchoredRange.removeMarkerCss(FAILED_MARKER_CSS);
          if (executable.isRunning()) {
            anchoredRange.addGutterCss(EXECUTING_CSS);
          } else if (executable.isSuccess()) {
            anchoredRange.addGutterCss(COMPLETED_CSS);
          } else if (executable.isFailed()) {
            anchoredRange.addMarkerCss(FAILED_MARKER_CSS);
            anchoredRange.addGutterCss(FAILED_CSS);
          }
        }
      });
      this.disposals.push(function () {
        executableSub.remove();
      });
    }
  }
  return _createClass(AceGutterHandler, [{
    key: "dispose",
    value: function dispose() {
      while (this.disposals.length) {
        this.disposals.pop()();
      }
    }
  }]);
}();


/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ace/aceLocationHandler.js":
/*!***************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ace/aceLocationHandler.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTIVE_STATEMENT_CHANGED_EVENT": () => (/* binding */ ACTIVE_STATEMENT_CHANGED_EVENT),
/* harmony export */   "CURSOR_POSITION_CHANGED_EVENT": () => (/* binding */ CURSOR_POSITION_CHANGED_EVENT),
/* harmony export */   "REFRESH_STATEMENT_LOCATIONS_EVENT": () => (/* binding */ REFRESH_STATEMENT_LOCATIONS_EVENT),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ext_aceHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ext/aceHelper */ "./desktop/core/src/desktop/js/ext/aceHelper.ts");
/* harmony import */ var _apps_editor_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apps/editor/snippet */ "./desktop/core/src/desktop/js/apps/editor/snippet.js");
/* harmony import */ var catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! catalog/dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var _components_assist_assistStorageEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/assist/assistStorageEntry */ "./desktop/core/src/desktop/js/ko/components/assist/assistStorageEntry.js");
/* harmony import */ var parse_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parse/utils */ "./desktop/core/src/desktop/js/parse/utils.ts");
/* harmony import */ var sql_sqlUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sql/sqlUtils */ "./desktop/core/src/desktop/js/sql/sqlUtils.ts");
/* harmony import */ var sql_workers_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sql/workers/events */ "./desktop/core/src/desktop/js/sql/workers/events.ts");
/* harmony import */ var _sql_stringDistance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../sql/stringDistance */ "./desktop/core/src/desktop/js/sql/stringDistance.js");
/* harmony import */ var utils_hueDebug__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/hueDebug */ "./desktop/core/src/desktop/js/utils/hueDebug.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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















// TODO: depends on Ace, sqlStatementsParser

var REFRESH_STATEMENT_LOCATIONS_EVENT = 'editor.refresh.statement.locations';
var ACTIVE_STATEMENT_CHANGED_EVENT = 'editor.active.statement.changed';
var CURSOR_POSITION_CHANGED_EVENT = 'editor.cursor.position.changed';
var STATEMENT_COUNT_AROUND_ACTIVE = 10;
var VERIFY_LIMIT = 50;
var VERIFY_DELAY = 50;
var AceLocationHandler = /*#__PURE__*/function () {
  function AceLocationHandler(options) {
    _classCallCheck(this, AceLocationHandler);
    var self = this;
    self.editor = options.editor;
    self.editorId = options.editorId;
    self.snippet = options.snippet;
    self.executor = options.executor;
    self.expandStar = options.i18n && options.i18n.expandStar || 'Right-click to expand with columns';
    self.contextTooltip = options.i18n && options.i18n.contextTooltip || 'Right-click for details';
    self.sqlSyntaxWorkerSub = null;
    self.disposeFunctions = [];
    self.databaseIndex = {};
    self.attachStatementLocator();
    self.attachSqlWorker();
    self.attachMouseListeners();
    self.dialect = function () {
      return self.snippet.type();
    };
    self.verifyThrottle = -1;
    var updateDatabaseIndex = function updateDatabaseIndex(databaseList) {
      self.databaseIndex = {};
      databaseList.forEach(function (database) {
        self.databaseIndex[database.toLowerCase()] = true;
      });
    };
    var databaseSub = self.snippet.availableDatabases.subscribe(updateDatabaseIndex);
    self.disposeFunctions.push(function () {
      databaseSub.dispose();
    });
    updateDatabaseIndex(self.snippet.availableDatabases());
  }
  return _createClass(AceLocationHandler, [{
    key: "attachMouseListeners",
    value: function attachMouseListeners() {
      var self = this;
      var Tooltip = ext_aceHelper__WEBPACK_IMPORTED_MODULE_1__["default"].require('ace/tooltip').Tooltip;
      var AceRange = ext_aceHelper__WEBPACK_IMPORTED_MODULE_1__["default"].require('ace/range').Range;
      var contextTooltip = new Tooltip(self.editor.container);
      var tooltipTimeout = -1;
      var disableTooltip = false;
      var lastHoveredToken = null;
      var activeMarkers = [];
      var keepLastMarker = false;
      var hideContextTooltip = function hideContextTooltip() {
        clearTimeout(tooltipTimeout);
        contextTooltip.hide();
      };
      var clearActiveMarkers = function clearActiveMarkers() {
        hideContextTooltip();
        while (activeMarkers.length > keepLastMarker ? 1 : 0) {
          self.editor.session.removeMarker(activeMarkers.shift());
        }
      };
      var markLocation = function markLocation(parseLocation) {
        var range;
        if (parseLocation.type === 'function') {
          // Todo: Figure out why functions need an extra char at the end
          range = new AceRange(parseLocation.location.first_line - 1, parseLocation.location.first_column - 1, parseLocation.location.last_line - 1, parseLocation.location.last_column);
        } else {
          range = new AceRange(parseLocation.location.first_line - 1, parseLocation.location.first_column - 1, parseLocation.location.last_line - 1, parseLocation.location.last_column - 1);
        }
        activeMarkers.push(self.editor.session.addMarker(range, 'hue-ace-location'));
        return range;
      };
      var popoverShownSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe('context.popover.shown', function () {
        hideContextTooltip();
        keepLastMarker = true;
        disableTooltip = true;
      });
      self.disposeFunctions.push(function () {
        popoverShownSub.remove();
      });
      var popoverHiddenSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe('context.popover.hidden', function () {
        disableTooltip = false;
        clearActiveMarkers();
        keepLastMarker = false;
      });
      self.disposeFunctions.push(function () {
        popoverHiddenSub.remove();
      });
      var mousemoveListener = self.editor.on('mousemove', function (e) {
        clearTimeout(tooltipTimeout);
        var selectionRange = self.editor.selection.getRange();
        if (selectionRange.isEmpty()) {
          var pointerPosition = self.editor.renderer.screenToTextCoordinates(e.clientX + 5, e.clientY);
          var endTestPosition = self.editor.renderer.screenToTextCoordinates(e.clientX + 15, e.clientY);
          if (endTestPosition.column !== pointerPosition.column) {
            var token = self.editor.session.getTokenAt(pointerPosition.row, pointerPosition.column);
            if (token !== null && !token.notFound && token.parseLocation && !disableTooltip && token.parseLocation.type !== 'alias') {
              tooltipTimeout = window.setTimeout(function () {
                if (token.parseLocation) {
                  var endCoordinates = self.editor.renderer.textToScreenCoordinates(pointerPosition.row, token.start);
                  var tooltipText = token.parseLocation.type === 'asterisk' ? self.expandStar : self.contextTooltip;
                  var colType;
                  if (token.parseLocation.type === 'column') {
                    var tableChain = token.parseLocation.identifierChain.concat();
                    var lastIdentifier = tableChain.pop();
                    if (tableChain.length > 0 && lastIdentifier && lastIdentifier.name) {
                      var colName = lastIdentifier.name.toLowerCase();
                      // Note, as cachedOnly is set to true it will call the successCallback right away (or not at all)
                      catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_3__["default"].getEntry({
                        namespace: self.snippet.namespace(),
                        compute: self.snippet.compute(),
                        connector: self.snippet.connector(),
                        temporaryOnly: self.snippet.autocompleteSettings.temporaryOnly,
                        path: jquery__WEBPACK_IMPORTED_MODULE_0___default().map(tableChain, function (identifier) {
                          return identifier.name;
                        })
                      }).then(function (entry) {
                        entry.getSourceMeta({
                          cachedOnly: true,
                          silenceErrors: true
                        }).then(function (sourceMeta) {
                          if (sourceMeta && sourceMeta.extended_columns) {
                            sourceMeta.extended_columns.every(function (col) {
                              if (col.name.toLowerCase() === colName) {
                                colType = col.type.match(/^[^<]*/g)[0];
                                return false;
                              }
                              return true;
                            });
                          }
                        })["catch"](function () {
                          // Ignore
                        });
                      })["catch"](function (err) {
                        // Ignore
                      });
                    }
                  }
                  if (token.parseLocation.identifierChain) {
                    var sqlIdentifier = jquery__WEBPACK_IMPORTED_MODULE_0___default().map(token.parseLocation.identifierChain, function (identifier) {
                      return identifier.name;
                    }).join('.');
                    if (colType) {
                      sqlIdentifier += ' (' + colType + ')';
                    }
                    tooltipText = sqlIdentifier + ' - ' + tooltipText;
                  } else if (token.parseLocation["function"]) {
                    tooltipText = token.parseLocation["function"] + ' - ' + tooltipText;
                  }
                  contextTooltip.show(tooltipText, endCoordinates.pageX, endCoordinates.pageY + self.editor.renderer.lineHeight + 3);
                }
              }, 500);
            } else if (token !== null && token.notFound) {
              tooltipTimeout = window.setTimeout(function () {
                // TODO: i18n
                if (token.notFound && token.syntaxError) {
                  var tooltipText;
                  if (token.syntaxError.expected.length > 0) {
                    tooltipText = (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_11__["default"])('Did you mean') + ' "' + token.syntaxError.expected[0].text + '"?';
                  } else {
                    tooltipText = (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_11__["default"])('Could not find') + ' "' + (token.qualifiedIdentifier || token.value) + '"';
                  }
                  var endCoordinates = self.editor.renderer.textToScreenCoordinates(pointerPosition.row, token.start);
                  contextTooltip.show(tooltipText, endCoordinates.pageX, endCoordinates.pageY + self.editor.renderer.lineHeight + 3);
                }
              }, 500);
            } else if (token !== null && token.syntaxError) {
              tooltipTimeout = window.setTimeout(function () {
                if (token.syntaxError) {
                  var tooltipText;
                  if (token.syntaxError.expected.length > 0) {
                    tooltipText = (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_11__["default"])('Did you mean') + ' "' + token.syntaxError.expected[0].text + '"?';
                  } else if (token.syntaxError.expectedStatementEnd) {
                    tooltipText = (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_11__["default"])('Expected end of statement');
                  }
                  if (tooltipText) {
                    var endCoordinates = self.editor.renderer.textToScreenCoordinates(pointerPosition.row, token.start);
                    contextTooltip.show(tooltipText, endCoordinates.pageX, endCoordinates.pageY + self.editor.renderer.lineHeight + 3);
                  }
                }
              }, 500);
            } else {
              hideContextTooltip();
            }
            if (lastHoveredToken !== token) {
              clearActiveMarkers();
              if (token !== null && !token.notFound && token.parseLocation && ['alias', 'whereClause', 'limitClause', 'selectList'].indexOf(token.parseLocation.type) === -1) {
                markLocation(token.parseLocation);
              }
              lastHoveredToken = token;
            }
          } else {
            clearActiveMarkers();
            lastHoveredToken = null;
          }
        }
      });
      self.disposeFunctions.push(function () {
        self.editor.off('mousemove', mousemoveListener);
      });
      var inputListener = self.editor.on('input', function () {
        clearActiveMarkers();
        lastHoveredToken = null;
      });
      self.disposeFunctions.push(function () {
        self.editor.off('input', inputListener);
      });
      var mouseoutListener = function mouseoutListener() {
        clearActiveMarkers();
        clearTimeout(tooltipTimeout);
        contextTooltip.hide();
        lastHoveredToken = null;
      };
      self.editor.container.addEventListener('mouseout', mouseoutListener);
      self.disposeFunctions.push(function () {
        self.editor.container.removeEventListener('mouseout', mouseoutListener);
      });
      var onContextMenu = function onContextMenu(e) {
        var selectionRange = self.editor.selection.getRange();
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('context.popover.hide');
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('sql.syntax.dropdown.hide');
        if (selectionRange.isEmpty()) {
          var pointerPosition = self.editor.renderer.screenToTextCoordinates(e.clientX + 5, e.clientY);
          var token = self.editor.session.getTokenAt(pointerPosition.row, pointerPosition.column);
          if (token && (token.parseLocation && ['alias', 'whereClause', 'limitClause', 'selectList'].indexOf(token.parseLocation.type) === -1 || token.syntaxError)) {
            var range = token.parseLocation ? markLocation(token.parseLocation) : new AceRange(token.syntaxError.loc.first_line - 1, token.syntaxError.loc.first_column, token.syntaxError.loc.last_line - 1, token.syntaxError.loc.first_column + token.syntaxError.text.length);
            var startCoordinates = self.editor.renderer.textToScreenCoordinates(range.start.row, range.start.column);
            var endCoordinates = self.editor.renderer.textToScreenCoordinates(range.end.row, range.end.column);
            var source = {
              // TODO: add element likely in the event
              left: startCoordinates.pageX - 3,
              top: startCoordinates.pageY,
              right: endCoordinates.pageX - 3,
              bottom: endCoordinates.pageY + self.editor.renderer.lineHeight
            };
            if (token.parseLocation && token.parseLocation.identifierChain && !token.notFound) {
              token.parseLocation.resolveCatalogEntry({
                temporaryOnly: self.snippet.autocompleteSettings.temporaryOnly
              }).then(function (entry) {
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('context.popover.show', {
                  data: {
                    type: 'catalogEntry',
                    catalogEntry: entry
                  },
                  pinEnabled: true,
                  connector: self.snippet.connector(),
                  source: source
                });
              })["catch"](function () {
                token.notFound = true;
              });
            } else if (token.parseLocation && !token.notFound) {
              // Asterisk, function etc.
              if (token.parseLocation.type === 'file') {
                _components_assist_assistStorageEntry__WEBPACK_IMPORTED_MODULE_4__["default"].getEntry(token.parseLocation.path).then(function (entry) {
                  entry.open(true);
                  utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('context.popover.show', {
                    data: {
                      type: 'storageEntry',
                      storageEntry: entry,
                      editorLocation: token.parseLocation.location
                    },
                    connector: self.snippet.connector(),
                    pinEnabled: true,
                    source: source
                  });
                });
              } else {
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('context.popover.show', {
                  data: token.parseLocation,
                  connector: self.snippet.connector(),
                  sourceType: self.dialect(),
                  namespace: self.snippet.namespace(),
                  compute: self.snippet.compute(),
                  defaultDatabase: self.snippet.database(),
                  pinEnabled: true,
                  source: source
                });
              }
            } else if (token.syntaxError) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('sql.syntax.dropdown.show', {
                editorId: self.snippet.id(),
                data: token.syntaxError,
                editor: self.editor,
                range: range,
                sourceType: self.dialect(),
                defaultDatabase: self.snippet.database(),
                source: source
              });
            }
            e.preventDefault();
            return false;
          }
        }
      };
      var contextmenuListener = self.editor.container.addEventListener('contextmenu', onContextMenu);
      self.disposeFunctions.push(function () {
        self.editor.container.removeEventListener('contextmenu', contextmenuListener);
      });
    }
  }, {
    key: "attachStatementLocator",
    value: function attachStatementLocator() {
      var self = this;
      var lastKnownStatements = [];
      var activeStatement;
      var isPointInside = function isPointInside(parseLocation, editorPosition) {
        var row = editorPosition.row + 1; // ace positioning has 0 based rows while the parser has 1
        var column = editorPosition.column;
        return parseLocation.first_line < row && row < parseLocation.last_line || parseLocation.first_line === row && row === parseLocation.last_line && parseLocation.first_column <= column && column < parseLocation.last_column || parseLocation.first_line === row && row < parseLocation.last_line && column >= parseLocation.first_column || parseLocation.first_line < row && row === parseLocation.last_line && column < parseLocation.last_column;
      };
      var getFirstPosition = function getFirstPosition(editorPositionOne, editorPositionTwo) {
        if (editorPositionOne.row === editorPositionTwo.row) {
          return editorPositionOne.column <= editorPositionTwo.column ? editorPositionOne : editorPositionTwo;
        }
        return editorPositionOne.row < editorPositionTwo.row ? editorPositionOne : editorPositionTwo;
      };
      var equalPositions = function equalPositions(editorPositionOne, editorPositionTwo) {
        return editorPositionOne.row === editorPositionTwo.row && editorPositionOne.column === editorPositionTwo.column;
      };
      var lastExecutingStatement = null;
      var updateActiveStatement = function updateActiveStatement(cursorChange) {
        if (!self.snippet.isSqlDialect()) {
          return;
        }
        var selectionRange = self.editor.getSelectionRange();
        var cursorLocation = selectionRange.start;
        if (!equalPositions(selectionRange.start, selectionRange.end)) {
          if (!cursorChange && self.snippet.result && self.snippet.result.statement_range()) {
            var executingStatement = self.snippet.result.statement_range();
            // Row and col are 0 for both start and end on execute, so if the selection hasn't changed we'll use last known executed statement
            if (executingStatement.start.row === 0 && executingStatement.start.column === 0 && executingStatement.end.row === 0 && executingStatement.end.column === 0 && lastExecutingStatement) {
              executingStatement = lastExecutingStatement;
            }
            if (executingStatement.start.row === 0) {
              cursorLocation.column += executingStatement.start.column;
            } else if (executingStatement.start.row !== 0 || executingStatement.start.column !== 0) {
              cursorLocation.row += executingStatement.start.row;
              cursorLocation.column = executingStatement.start.column;
            }
            lastExecutingStatement = executingStatement;
          } else {
            lastExecutingStatement = null;
          }
        }
        if (cursorChange && activeStatement) {
          // Don't update when cursor stays in the same statement
          if (isPointInside(activeStatement.location, cursorLocation)) {
            return;
          }
        }
        var selectedStatements = [];
        var precedingStatements = [];
        var followingStatements = [];
        activeStatement = null;
        var firstSelectionPoint = getFirstPosition(selectionRange.start, selectionRange.end);
        var lastSelectionPoint = selectionRange.start === firstSelectionPoint ? selectionRange.end : selectionRange.start;
        var found = false;
        var statementIndex = 0;
        var insideSelection = false;
        if (lastKnownStatements.length === 1) {
          activeStatement = lastKnownStatements[0];
        } else {
          lastKnownStatements.forEach(function (statement) {
            if (!equalPositions(firstSelectionPoint, lastSelectionPoint)) {
              if (!insideSelection && isPointInside(statement.location, firstSelectionPoint)) {
                insideSelection = true;
              }
              if (insideSelection) {
                selectedStatements.push(statement);
                if (isPointInside(statement.location, lastSelectionPoint) || statement.location.last_line === lastSelectionPoint.row + 1 && statement.location.last_column === lastSelectionPoint.column) {
                  insideSelection = false;
                }
              }
            }
            if (isPointInside(statement.location, cursorLocation)) {
              statementIndex++;
              found = true;
              activeStatement = statement;
            } else if (!found) {
              statementIndex++;
              if (precedingStatements.length === STATEMENT_COUNT_AROUND_ACTIVE) {
                precedingStatements.shift();
              }
              precedingStatements.push(statement);
            } else if (found && followingStatements.length < STATEMENT_COUNT_AROUND_ACTIVE) {
              followingStatements.push(statement);
            }
          });

          // Can happen if multiple statements and the cursor is after the last one
          if (!found) {
            precedingStatements.pop();
            activeStatement = lastKnownStatements[lastKnownStatements.length - 1];
          }
        }
        if (!selectedStatements.length) {
          selectedStatements.push(activeStatement);
        }
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish(ACTIVE_STATEMENT_CHANGED_EVENT, {
          id: self.editorId,
          editorChangeTime: lastKnownStatements.editorChangeTime,
          activeStatementIndex: statementIndex,
          totalStatementCount: lastKnownStatements.length,
          precedingStatements: precedingStatements,
          activeStatement: activeStatement,
          selectedStatements: selectedStatements,
          followingStatements: followingStatements
        });
        if (activeStatement) {
          self.checkForSyntaxErrors(activeStatement.location, firstSelectionPoint);
        }
      };
      var parseForStatements = function parseForStatements() {
        if (self.snippet.isSqlDialect()) {
          try {
            var lastChangeTime = self.editor.lastChangeTime;
            lastKnownStatements = (0,parse_utils__WEBPACK_IMPORTED_MODULE_5__.getStatementsParser)(self.snippet.connector()).parse(self.editor.getValue());
            lastKnownStatements.editorChangeTime = lastChangeTime;
            if (typeof utils_hueDebug__WEBPACK_IMPORTED_MODULE_9__["default"] !== 'undefined' && utils_hueDebug__WEBPACK_IMPORTED_MODULE_9__["default"].logStatementLocations) {
              // eslint-disable-next-line no-restricted-syntax
              console.log(lastKnownStatements);
            }
          } catch (error) {
            console.warn('Could not parse statements!');
            console.warn(error);
          }
        }
      };
      var changeThrottle = window.setTimeout(parseForStatements, 0);
      var updateThrottle = window.setTimeout(updateActiveStatement, 0);
      var cursorChangePaused = false; // On change the cursor is also moved, this limits the calls while typing

      var lastStart;
      var lastCursorPosition;
      var changeSelectionListener = self.editor.on('changeSelection', function () {
        if (cursorChangePaused) {
          return;
        }
        window.clearTimeout(changeThrottle);
        changeThrottle = window.setTimeout(function () {
          var newCursorPosition = self.editor.getCursorPosition();
          if (!lastCursorPosition || lastCursorPosition.row !== newCursorPosition.row || lastCursorPosition.column !== newCursorPosition.column) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish(CURSOR_POSITION_CHANGED_EVENT, {
              editorId: self.snippet.id(),
              position: newCursorPosition
            });
            lastCursorPosition = newCursorPosition;
          }

          // The active statement is initially the top one in the selection, batch execution updates this.
          var newStart = self.editor.getSelectionRange().start;
          if (self.snippet.isSqlDialect() && (!lastStart || !equalPositions(lastStart, newStart))) {
            window.clearTimeout(updateThrottle);
            updateActiveStatement(true);
            lastStart = newStart;
          }
        }, 100);
      });
      var changeListener = self.editor.on('change', function () {
        if (self.snippet.isSqlDialect()) {
          window.clearTimeout(changeThrottle);
          cursorChangePaused = true;
          changeThrottle = window.setTimeout(function () {
            window.clearTimeout(updateThrottle);
            parseForStatements();
            updateActiveStatement();
            cursorChangePaused = false;
          }, 500);
          self.editor.lastChangeTime = Date.now();
        }
      });
      var locateSubscription = utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe(REFRESH_STATEMENT_LOCATIONS_EVENT, function (editorId) {
        if (editorId === self.snippet.id()) {
          cursorChangePaused = true;
          window.clearTimeout(changeThrottle);
          window.clearTimeout(updateThrottle);
          parseForStatements();
          updateActiveStatement();
          cursorChangePaused = false;
        }
      });
      self.disposeFunctions.push(function () {
        window.clearTimeout(changeThrottle);
        window.clearTimeout(updateThrottle);
        self.editor.off('changeSelection', changeSelectionListener);
        self.editor.off('change', changeListener);
        locateSubscription.remove();
      });
    }
  }, {
    key: "clearMarkedErrors",
    value: function clearMarkedErrors(type) {
      var self = this;
      for (var marker in self.editor.getSession().$backMarkers) {
        if (self.editor.getSession().$backMarkers[marker].clazz.indexOf('hue-ace-syntax-' + (type || '')) === 0) {
          self.editor.getSession().$backMarkers[marker].dispose();
        }
      }
    }
  }, {
    key: "checkForSyntaxErrors",
    value: function checkForSyntaxErrors(statementLocation, cursorPosition) {
      var self = this;
      if (self.sqlSyntaxWorkerSub !== null && (self.dialect() === _apps_editor_snippet__WEBPACK_IMPORTED_MODULE_2__.DIALECT.impala || self.dialect() === _apps_editor_snippet__WEBPACK_IMPORTED_MODULE_2__.DIALECT.hive || self.dialect() === _apps_editor_snippet__WEBPACK_IMPORTED_MODULE_2__.DIALECT.sparksql)) {
        var AceRange = ext_aceHelper__WEBPACK_IMPORTED_MODULE_1__["default"].require('ace/range').Range;
        var editorChangeTime = self.editor.lastChangeTime;
        var beforeCursor = self.editor.getSession().getTextRange(new AceRange(statementLocation.first_line - 1, statementLocation.first_column, cursorPosition.row, cursorPosition.column));
        var afterCursor = self.editor.getSession().getTextRange(new AceRange(cursorPosition.row, cursorPosition.column, statementLocation.last_line - 1, statementLocation.last_column));
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish(sql_workers_events__WEBPACK_IMPORTED_MODULE_7__.POST_TO_SYNTAX_WORKER_EVENT, {
          id: self.snippet.id(),
          editorChangeTime: editorChangeTime,
          beforeCursor: beforeCursor,
          afterCursor: afterCursor,
          statementLocation: statementLocation,
          connector: self.snippet.connector()
        });
      }
    }
  }, {
    key: "addAnchoredMarker",
    value: function addAnchoredMarker(range, token, clazz) {
      var self = this;
      range.start = self.editor.getSession().doc.createAnchor(range.start);
      range.end = self.editor.getSession().doc.createAnchor(range.end);
      var markerId = self.editor.getSession().addMarker(range, clazz);
      var marker = self.editor.getSession().$backMarkers[markerId];
      marker.token = token;
      marker.dispose = function () {
        range.start.detach();
        range.end.detach();
        delete marker.token.syntaxError;
        delete marker.token.notFound;
        self.editor.getSession().removeMarker(markerId);
      };
    }
  }, {
    key: "attachSqlSyntaxWorker",
    value: function attachSqlSyntaxWorker() {
      var self = this;
      if (self.sqlSyntaxWorkerSub !== null) {
        return;
      }
      self.sqlSyntaxWorkerSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe(sql_workers_events__WEBPACK_IMPORTED_MODULE_7__.POST_FROM_SYNTAX_WORKER_EVENT, function (e) {
        if (e.data.id !== self.snippet.id() || e.data.editorChangeTime !== self.editor.lastChangeTime) {
          return;
        }
        self.clearMarkedErrors('error');
        if (!e.data.syntaxError || !e.data.syntaxError.expected || e.data.syntaxError.expected.length === 0) {
          // Only show errors that we have suggestions for
          return;
        }
        var suppressedRules = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_12__.getFromLocalStorage)('hue.syntax.checker.suppressedRules', {});
        if (e.data.syntaxError && e.data.syntaxError.ruleId && !suppressedRules[e.data.syntaxError.ruleId.toString() + e.data.syntaxError.text.toLowerCase()]) {
          if (self.snippet.positionStatement() && sql_sqlUtils__WEBPACK_IMPORTED_MODULE_6__["default"].locationEquals(e.data.statementLocation, self.snippet.positionStatement().location)) {
            self.snippet.positionStatement().syntaxError = true;
          }
          if (utils_hueDebug__WEBPACK_IMPORTED_MODULE_9__["default"] && utils_hueDebug__WEBPACK_IMPORTED_MODULE_9__["default"].showSyntaxParseResult) {
            // eslint-disable-next-line no-restricted-syntax
            console.log(e.data.syntaxError);
          }
          var token = self.editor.getSession().getTokenAt(e.data.syntaxError.loc.first_line - 1, e.data.syntaxError.loc.first_column + 1);

          // Don't mark the current edited word as an error if the cursor is at the end of the word
          // For now [a-z] is fine as we only check syntax for keywords
          if (/[a-z]$/i.test(self.editor.getTextBeforeCursor()) && !/^[a-z]/i.test(self.editor.getTextAfterCursor())) {
            var cursorPos = self.editor.getCursorPosition();
            var cursorToken = self.editor.getSession().getTokenAt(cursorPos.row, cursorPos.column);
            if (cursorToken === token) {
              return;
            }
          }

          // If no token is found it likely means that the parser response came back after the text was changed,
          // at which point it will trigger another parse so we can ignore this.
          if (token) {
            token.syntaxError = e.data.syntaxError;
            var AceRange = ext_aceHelper__WEBPACK_IMPORTED_MODULE_1__["default"].require('ace/range').Range;
            var range = new AceRange(e.data.syntaxError.loc.first_line - 1, e.data.syntaxError.loc.first_column, e.data.syntaxError.loc.last_line - 1, e.data.syntaxError.loc.first_column + e.data.syntaxError.text.length);
            self.addAnchoredMarker(range, token, 'hue-ace-syntax-error');
          }
        }
      });
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish(REFRESH_STATEMENT_LOCATIONS_EVENT, self.snippet.id());
    }
  }, {
    key: "detachSqlSyntaxWorker",
    value: function detachSqlSyntaxWorker() {
      var self = this;
      if (self.sqlSyntaxWorkerSub !== null) {
        self.sqlSyntaxWorkerSub.remove();
        self.sqlSyntaxWorkerSub = null;
      }
      self.clearMarkedErrors();
    }
  }, {
    key: "fetchChildren",
    value: function fetchChildren(identifierChain) {
      var self = this;
      var deferred = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_3__["default"].getChildren({
        connector: self.snippet.connector(),
        namespace: self.snippet.namespace(),
        compute: self.snippet.compute(),
        temporaryOnly: self.snippet.autocompleteSettings.temporaryOnly,
        path: jquery__WEBPACK_IMPORTED_MODULE_0___default().map(identifierChain, function (identifier) {
          return identifier.name;
        }),
        silenceErrors: true,
        cachedOnly: true
      }).then(deferred.resolve)["catch"](function () {
        deferred.reject([]);
      });
      return deferred;
    }
  }, {
    key: "fetchPossibleValues",
    value: function fetchPossibleValues(token) {
      var self = this;
      var promise = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
      if (token.parseLocation.tables && token.parseLocation.tables.length > 0) {
        var tablePromises = [];
        token.parseLocation.tables.forEach(function (table) {
          if (table.identifierChain) {
            tablePromises.push(self.fetchChildren(table.identifierChain));
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default().when.apply((jquery__WEBPACK_IMPORTED_MODULE_0___default()), tablePromises).done(function () {
          var joined = [];
          for (var i = 0; i < arguments.length; i++) {
            joined = joined.concat(arguments[i]);
          }
          if (token.parseLocation.type === 'column') {
            // Could be a table reference
            token.parseLocation.tables.forEach(function (table) {
              if (!table.alias) {
                // Aliases are added later
                joined.push(table.identifierChain[table.identifierChain.length - 1]);
              }
            });
          }
          promise.resolve(joined);
        }).fail(promise.reject);
      } else if (token.parseLocation.identifierChain && token.parseLocation.identifierChain.length > 0) {
        // fetch the parent
        return self.fetchChildren(token.parseLocation.identifierChain.slice(0, token.parseLocation.identifierChain.length - 1));
      } else {
        promise.reject([]);
      }
      return promise;
    }
  }, {
    key: "verifyExists",
    value: function verifyExists(tokens, allLocations) {
      var self = this;
      window.clearInterval(self.verifyThrottle);
      self.clearMarkedErrors('warning');
      if (self.sqlSyntaxWorkerSub === null) {
        return;
      }
      var cursorPos = self.editor.getCursorPosition();
      var tokensToVerify = tokens.filter(function (token) {
        return token && token.parseLocation && (token.parseLocation.type === 'table' || token.parseLocation.type === 'column') && (token.parseLocation.identifierChain || token.parseLocation.tables) && !(cursorPos.row + 1 === token.parseLocation.location.last_line && cursorPos.column + 1 === token.parseLocation.location.first_column + token.value.length);
      }).slice(0, VERIFY_LIMIT);
      if (tokensToVerify.length === 0) {
        return;
      }
      var aliasIndex = {};
      var aliases = [];
      allLocations.forEach(function (location) {
        if (location.type === 'alias' && (location.source === 'column' || location.source === 'table' || location.source === 'subquery' || location.source === 'cte')) {
          aliasIndex[location.alias.toLowerCase()] = location;
          aliases.push({
            name: location.alias.toLowerCase()
          });
        }
      });
      var resolvePathFromTables = function resolvePathFromTables(location) {
        var promise = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
        if (location.type === 'column' && typeof location.tables !== 'undefined' && location.identifierChain.length === 1) {
          var findIdentifierChainInTable = function findIdentifierChainInTable(tablesToGo) {
            var nextTable = tablesToGo.shift();
            if (typeof nextTable.subQuery === 'undefined') {
              catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_3__["default"].getChildren({
                connector: self.snippet.connector(),
                namespace: self.snippet.namespace(),
                compute: self.snippet.compute(),
                temporaryOnly: self.snippet.autocompleteSettings.temporaryOnly,
                path: jquery__WEBPACK_IMPORTED_MODULE_0___default().map(nextTable.identifierChain, function (identifier) {
                  return identifier.name;
                }),
                cachedOnly: true,
                silenceErrors: true
              }).then(function (entries) {
                var containsColumn = entries.some(function (entry) {
                  return sql_sqlUtils__WEBPACK_IMPORTED_MODULE_6__["default"].identifierEquals(entry.name, location.identifierChain[0].name);
                });
                if (containsColumn) {
                  location.identifierChain = nextTable.identifierChain.concat(location.identifierChain);
                  delete location.tables;
                  promise.resolve();
                } else if (tablesToGo.length > 0) {
                  findIdentifierChainInTable(tablesToGo);
                } else {
                  promise.resolve();
                }
              })["catch"](promise.resolve);
            } else if (tablesToGo.length > 0) {
              findIdentifierChainInTable(tablesToGo);
            } else {
              promise.resolve();
            }
          };
          if (location.tables.length > 1) {
            findIdentifierChainInTable(location.tables.concat());
          } else if (location.tables.length === 1 && location.tables[0].identifierChain) {
            location.identifierChain = location.tables[0].identifierChain.concat(location.identifierChain);
            delete location.tables;
            promise.resolve();
          }
        } else {
          promise.resolve();
        }
        return promise;
      };
      var verify = function verify() {
        if (tokensToVerify.length === 0) {
          return;
        }
        var token = tokensToVerify.shift();
        var location = token.parseLocation;

        // TODO: Verify columns in subqueries, i.e. 'code' in 'select code from (select * from web_logs) wl, customers c;'
        if ((location.type === 'column' || location.type === 'complex') && location.tables) {
          var hasSubQueries = location.tables.some(function (table) {
            return typeof table.subQuery !== 'undefined';
          });
          if (hasSubQueries) {
            self.verifyThrottle = window.setTimeout(verify, VERIFY_DELAY);
            return;
          }
        }
        resolvePathFromTables(location).done(function () {
          if (location.type === 'column') {
            var possibleAlias;
            if (!location.tables && location.identifierChain && location.identifierChain.length > 1) {
              possibleAlias = aliasIndex[token.parseLocation.identifierChain[0].name.toLowerCase()];
            } else if (location.tables) {
              location.tables.some(function (table) {
                if (table.identifierChain && table.identifierChain.length === 1 && table.identifierChain[0].name) {
                  possibleAlias = aliasIndex[table.identifierChain[0].name.toLowerCase()];
                  return possibleAlias;
                }
                return false;
              });
            }
            if (possibleAlias && possibleAlias.source === 'cte') {
              // We currently don't discover the columns from a CTE so we can't say if a column exists or not
              self.verifyThrottle = window.setTimeout(verify, VERIFY_DELAY);
              return;
            }
          }
          self.fetchPossibleValues(token).done( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(possibleValues) {
              var tokenValLower, uniqueIndex, uniqueValues, i, nameLower, isLowerCase, weightedExpected, path, AceRange, range;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (token.parseLocation) {
                      _context.next = 3;
                      break;
                    }
                    self.verifyThrottle = window.setTimeout(verify, VERIFY_DELAY);
                    return _context.abrupt("return");
                  case 3:
                    // Append aliases unless qualified i.e.for 'b' in SELECT a.b we shouldn't suggest aliases
                    if (token.parseLocation.type !== 'column' && token.parseLocation.type !== 'complex' || !token.parseLocation.qualified) {
                      possibleValues = possibleValues.concat(aliases);
                    }
                    tokenValLower = token.actualValue.toLowerCase();
                    uniqueIndex = {};
                    uniqueValues = [];
                    i = 0;
                  case 8:
                    if (!(i < possibleValues.length)) {
                      _context.next = 20;
                      break;
                    }
                    _context.next = 11;
                    return sql_sqlUtils__WEBPACK_IMPORTED_MODULE_6__["default"].backTickIfNeeded(self.snippet.connector(), possibleValues[i].name);
                  case 11:
                    possibleValues[i].name = _context.sent;
                    nameLower = possibleValues[i].name.toLowerCase();
                    if (!(nameLower === tokenValLower || tokenValLower.indexOf('`') === 0 && tokenValLower.replace(/`/g, '') === nameLower)) {
                      _context.next = 16;
                      break;
                    }
                    // Break if found
                    self.verifyThrottle = window.setTimeout(verify, VERIFY_DELAY);
                    return _context.abrupt("return");
                  case 16:
                    if (!uniqueIndex[nameLower]) {
                      uniqueValues.push(possibleValues[i]);
                      uniqueIndex[nameLower] = true;
                    }
                  case 17:
                    i++;
                    _context.next = 8;
                    break;
                  case 20:
                    possibleValues = uniqueValues;
                    isLowerCase = tokenValLower === token.value;
                    weightedExpected = jquery__WEBPACK_IMPORTED_MODULE_0___default().map(possibleValues, function (val) {
                      return {
                        text: isLowerCase ? val.name.toLowerCase() : val.name,
                        distance: (0,_sql_stringDistance__WEBPACK_IMPORTED_MODULE_8__["default"])(token.value, val.name)
                      };
                    });
                    weightedExpected.sort(function (a, b) {
                      if (a.distance === b.distance) {
                        return a.text.localeCompare(b.text);
                      }
                      return a.distance - b.distance;
                    });
                    token.syntaxError = {
                      expected: weightedExpected.slice(0, 50)
                    };
                    token.notFound = true;
                    if (token.parseLocation && token.parseLocation.type === 'table') {
                      path = jquery__WEBPACK_IMPORTED_MODULE_0___default().map(token.parseLocation.identifierChain, function (identifier) {
                        return identifier.name;
                      });
                      token.qualifiedIdentifier = path.join('.');
                    }
                    if (token.parseLocation && weightedExpected.length > 0) {
                      AceRange = ext_aceHelper__WEBPACK_IMPORTED_MODULE_1__["default"].require('ace/range').Range;
                      range = new AceRange(token.parseLocation.location.first_line - 1, token.parseLocation.location.first_column - 1, token.parseLocation.location.last_line - 1, token.parseLocation.location.last_column - 1);
                      self.addAnchoredMarker(range, token, 'hue-ace-syntax-warning');
                    }
                    self.verifyThrottle = window.setTimeout(verify, VERIFY_DELAY);
                  case 29:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }()).fail(function () {
            // Can happen when tables aren't cached etc.
            self.verifyThrottle = window.setTimeout(verify, VERIFY_DELAY);
          });
        }).fail(function () {
          // Can happen when tables aren't cached etc.
          self.verifyThrottle = window.setTimeout(verify, VERIFY_DELAY);
        });
      };
      self.verifyThrottle = window.setTimeout(verify, VERIFY_DELAY);
    }
  }, {
    key: "isDatabase",
    value: function isDatabase(databaseIdentifier) {
      var self = this;
      if (!databaseIdentifier) {
        return false;
      }
      var cleanIdentifier = databaseIdentifier.replace(/^\s*`/, '').replace(/`\s*$/, '').toLowerCase();
      return self.databaseIndex[cleanIdentifier];
    }
  }, {
    key: "attachSqlWorker",
    value: function attachSqlWorker() {
      var self = this;
      var activeTokens = [];
      var lastKnownLocations = {};
      var getLocationsSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe('get.active.editor.locations', function (callback, snippet) {
        if (self.snippet === snippet && (self.snippet.inFocus() || self.snippet.editorMode())) {
          callback(lastKnownLocations);
        }
      });
      self.disposeFunctions.push(function () {
        getLocationsSub.remove();
      });
      var locationWorkerSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe(sql_workers_events__WEBPACK_IMPORTED_MODULE_7__.POST_FROM_LOCATION_WORKER_EVENT, function (e) {
        if (e.data.id !== self.snippet.id() || e.data.editorChangeTime !== self.editor.lastChangeTime || !self.snippet.isSqlDialect()) {
          return;
        }
        lastKnownLocations = {
          id: self.editorId,
          connector: self.snippet.connector(),
          namespace: self.snippet.namespace(),
          compute: self.snippet.compute(),
          defaultDatabase: self.snippet.database(),
          locations: e.data.locations,
          editorChangeTime: e.data.editorChangeTime,
          activeStatementLocations: e.data.activeStatementLocations,
          totalStatementCount: e.data.totalStatementCount,
          activeStatementIndex: e.data.activeStatementIndex
        };

        // Clear out old parse locations to prevent them from being shown when there's a syntax error in the statement
        while (activeTokens.length > 0) {
          delete activeTokens.pop().parseLocation;
        }
        var tokensToVerify = [];
        e.data.locations.forEach(function (location) {
          if (location.type === 'statementType' && self.dialect() !== _apps_editor_snippet__WEBPACK_IMPORTED_MODULE_2__.DIALECT.impala) {
            // We currently only have a good mapping from statement types to impala topics.
            // TODO: Extract links between Hive topic IDs and statement types
            return;
          }
          if (['statement', 'selectList', 'whereClause', 'limitClause'].indexOf(location.type) !== -1 || (location.type === 'table' || location.type === 'column') && typeof location.identifierChain === 'undefined') {
            return;
          }
          if (location.identifierChain && location.identifierChain.length && location.identifierChain[0].name) {
            // The parser isn't aware of the DDL so sometimes it marks complex columns as tables
            // I.e. "Impala SELECT a FROM b.c" Is 'b' a database or a table? If table then 'c' is complex
            if (self.dialect() === _apps_editor_snippet__WEBPACK_IMPORTED_MODULE_2__.DIALECT.impala && location.identifierChain.length > 2 && (location.type === 'table' || location.type === 'column') && self.isDatabase(location.identifierChain[0].name)) {
              location.type = 'complex';
            }
          }
          var token = self.editor.getSession().getTokenAt(location.location.first_line - 1, location.location.first_column);

          // Find open UDFs and prevent them from being marked as missing columns, i.e. cos in "SELECT * FROM foo where cos(a|"
          var rowTokens = self.editor.getSession().getTokens(location.location.first_line - 1);
          if (location.type === 'column' && token && rowTokens) {
            var tokenFound = false;
            var isFunction = false;
            rowTokens.some(function (rowToken) {
              if (tokenFound && /\s+/.test(rowToken.value)) {
                return false;
              }
              if (tokenFound) {
                isFunction = rowToken.value === '(';
                return true;
              }
              if (rowToken === token) {
                tokenFound = true;
              }
            });
            if (isFunction) {
              location.type = 'function';
              delete location.identifierChain;
              location["function"] = token.value;
              token = null;
            }
          }
          if (token && token.value && /`$/.test(token.value)) {
            // Ace getTokenAt() thinks the first ` is a token, column +1 will include the first and last.
            token = self.editor.getSession().getTokenAt(location.location.first_line - 1, location.location.first_column + 1);
          }
          if (token && token.value && /^\s*\${\s*$/.test(token.value)) {
            token = null;
          }
          if (token && token.value) {
            var AceRange = ext_aceHelper__WEBPACK_IMPORTED_MODULE_1__["default"].require('ace/range').Range;
            // The Ace tokenizer also splits on '{', '(' etc. hence the actual value;
            token.actualValue = self.editor.getSession().getTextRange(new AceRange(location.location.first_line - 1, location.location.first_column - 1, location.location.last_line - 1, location.location.last_column - 1));
          }
          if (token !== null) {
            token.parseLocation = location;
            activeTokens.push(token);
            delete token.notFound;
            delete token.syntaxError;
            if (location.active) {
              tokensToVerify.push(token);
            }
          }
        });
        if (self.dialect() === _apps_editor_snippet__WEBPACK_IMPORTED_MODULE_2__.DIALECT.impala || self.dialect() === _apps_editor_snippet__WEBPACK_IMPORTED_MODULE_2__.DIALECT.hive || self.dialect() === _apps_editor_snippet__WEBPACK_IMPORTED_MODULE_2__.DIALECT.sparksql) {
          self.verifyExists(tokensToVerify, e.data.activeStatementLocations);
        }
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish('editor.active.locations', lastKnownLocations);
      });
      self.disposeFunctions.push(function () {
        locationWorkerSub.remove();
      });
      var lastContextRequest;
      var statementSubscription = utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].subscribe('editor.active.statement.changed', function (statementDetails) {
        if (statementDetails.id !== self.editorId) {
          return;
        }
        if (self.snippet.isSqlDialect()) {
          if (lastContextRequest) {
            lastContextRequest.dispose();
          }
          lastContextRequest = self.snippet.whenContextSet().done(function () {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_10__["default"].publish(sql_workers_events__WEBPACK_IMPORTED_MODULE_7__.POST_TO_LOCATION_WORKER_EVENT, {
              id: self.snippet.id(),
              statementDetails: statementDetails,
              connector: self.snippet.connector(),
              namespace: self.snippet.namespace(),
              compute: self.snippet.compute(),
              defaultDatabase: self.snippet.database()
            });
          });
        }
      });
      self.disposeFunctions.push(function () {
        statementSubscription.remove();
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var self = this;
      if (self.sqlSyntaxWorkerSub !== null) {
        self.sqlSyntaxWorkerSub.remove();
        self.sqlSyntaxWorkerSub = null;
      }
      self.disposeFunctions.forEach(function (dispose) {
        dispose();
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AceLocationHandler);

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ace/ko.aceEditor.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ace/ko.aceEditor.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INSERT_AT_CURSOR_EVENT": () => (/* binding */ INSERT_AT_CURSOR_EVENT),
/* harmony export */   "NAME": () => (/* binding */ NAME)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ext_aceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ext/aceHelper */ "./desktop/core/src/desktop/js/ext/aceHelper.ts");
/* harmony import */ var _gethue_sql_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gethue/sql-formatter */ "./node_modules/@gethue/sql-formatter/lib/sqlFormatter.js");
/* harmony import */ var _aceLocationHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aceLocationHandler */ "./desktop/core/src/desktop/js/ko/bindings/ace/aceLocationHandler.js");
/* harmony import */ var _aceGutterHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aceGutterHandler */ "./desktop/core/src/desktop/js/ko/bindings/ace/aceGutterHandler.js");
/* harmony import */ var _bindingUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bindingUtils */ "./desktop/core/src/desktop/js/ko/bindings/bindingUtils.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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










var NAME = 'aceEditor';
var INSERT_AT_CURSOR_EVENT = 'editor.insert.at.cursor';
(0,_bindingUtils__WEBPACK_IMPORTED_MODULE_6__.registerBinding)(NAME, {
  init: function init(element, valueAccessor) {
    var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var snippet = options.snippet;
    var aceOptions = options.aceOptions || {};
    var disposeFunctions = [];
    var dispose = function dispose() {
      disposeFunctions.forEach(function (dispose) {
        dispose();
      });
    };
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, dispose);
    $el.text(snippet.statement_raw());
    var editor = ext_aceHelper__WEBPACK_IMPORTED_MODULE_2__["default"].edit(snippet.id());
    var AceRange = ext_aceHelper__WEBPACK_IMPORTED_MODULE_2__["default"].require('ace/range').Range;
    var resizeAce = function resizeAce() {
      window.setTimeout(function () {
        try {
          editor.resize(true);
        } catch (e) {
          // Can happen when the editor hasn't been initialized
        }
      }, 0);
    };
    var assistToggleSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.set.manual.visibility', resizeAce);
    var resizePubSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('split.panel.resized', resizeAce);
    disposeFunctions.push(function () {
      assistToggleSub.remove();
      resizePubSub.remove();
    });
    var aceLocationHandler = new _aceLocationHandler__WEBPACK_IMPORTED_MODULE_4__["default"]({
      editor: editor,
      editorId: $el.attr('id'),
      snippet: snippet,
      i18n: {
        expandStar: options.expandStar,
        contextTooltip: options.contextTooltip
      }
    });
    var aceGutterHandler = new _aceGutterHandler__WEBPACK_IMPORTED_MODULE_5__["default"]({
      editor: editor,
      editorId: $el.attr('id'),
      executor: snippet.executor
    });
    disposeFunctions.push(function () {
      aceLocationHandler.dispose();
      aceGutterHandler.dispose();
    });
    editor.session.setMode(snippet.getAceMode());
    editor.setOptions({
      fontSize: (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)('hue.ace.fontSize', navigator.platform && navigator.platform.toLowerCase().indexOf('linux') > -1 ? '14px' : '12px')
    });
    function processErrorsAndWarnings(type, list) {
      editor.clearErrorsAndWarnings(type);
      var offset = 0;
      if (snippet.isSqlDialect() && editor.getSelectedText()) {
        var selectionRange = editor.getSelectionRange();
        offset = Math.min(selectionRange.start.row, selectionRange.end.row);
      }
      if (list.length > 0) {
        list.forEach(function (item, cnt) {
          if (item.line !== null) {
            if (type === 'error') {
              editor.addError(item.message, item.line + offset);
            } else {
              editor.addWarning(item.message, item.line + offset);
            }
            if (cnt === 0) {
              editor.scrollToLine(item.line + offset, true, true, function () {});
              if (item.col !== null) {
                editor.renderer.scrollCursorIntoView({
                  row: item.line + offset,
                  column: item.col + 10
                }, 0.5);
              }
            }
          }
        });
      }
    }
    var errorsSub = snippet.errors.subscribe(function (newErrors) {
      processErrorsAndWarnings('error', newErrors);
    });
    var aceWarningsSub = snippet.aceWarnings.subscribe(function (newWarnings) {
      processErrorsAndWarnings('warning', newWarnings);
    });
    var aceErrorsSub = snippet.aceErrors.subscribe(function (newErrors) {
      processErrorsAndWarnings('error', newErrors);
    });
    disposeFunctions.push(function () {
      errorsSub.dispose();
      aceWarningsSub.dispose();
      aceErrorsSub.dispose();
    });
    var darkThemeEnabled = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)('ace.dark.theme.enabled', false);
    editor.setTheme(darkThemeEnabled ? 'ace/theme/hue_dark' : 'ace/theme/hue');
    var editorOptions = {
      enableSnippets: true,
      showGutter: false,
      showLineNumbers: false,
      showPrintMargin: false,
      scrollPastEnd: 0.1,
      minLines: 1,
      maxLines: 25
    };
    editor.enabledMenuOptions = {
      setShowInvisibles: true,
      setTabSize: true,
      setShowGutter: true
    };
    editor.customMenuOptions = {
      setEnableDarkTheme: function setEnableDarkTheme(enabled) {
        darkThemeEnabled = enabled;
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)('ace.dark.theme.enabled', darkThemeEnabled);
        editor.setTheme(darkThemeEnabled ? 'ace/theme/hue_dark' : 'ace/theme/hue');
      },
      getEnableDarkTheme: function getEnableDarkTheme() {
        return darkThemeEnabled;
      },
      setEnableAutocompleter: function setEnableAutocompleter(enabled) {
        editor.setOption('enableBasicAutocompletion', enabled);
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)('hue.ace.enableBasicAutocompletion', enabled);
        var $enableLiveAutocompletionChecked = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#setEnableLiveAutocompletion:checked');
        var $setEnableLiveAutocompletion = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#setEnableLiveAutocompletion');
        if (enabled && $enableLiveAutocompletionChecked.length === 0) {
          $setEnableLiveAutocompletion.trigger('click');
        } else if (!enabled && $enableLiveAutocompletionChecked.length !== 0) {
          $setEnableLiveAutocompletion.trigger('click');
        }
      },
      getEnableAutocompleter: function getEnableAutocompleter() {
        return editor.getOption('enableBasicAutocompletion');
      },
      setEnableLiveAutocompletion: function setEnableLiveAutocompletion(enabled) {
        editor.setOption('enableLiveAutocompletion', enabled);
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)('hue.ace.enableLiveAutocompletion', enabled);
        if (enabled && jquery__WEBPACK_IMPORTED_MODULE_0___default()('#setEnableAutocompleter:checked').length === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#setEnableAutocompleter').trigger('click');
        }
      },
      getEnableLiveAutocompletion: function getEnableLiveAutocompletion() {
        return editor.getOption('enableLiveAutocompletion');
      },
      setFontSize: function setFontSize(size) {
        if (size.toLowerCase().indexOf('px') === -1 && size.toLowerCase().indexOf('em') === -1) {
          size += 'px';
        }
        editor.setOption('fontSize', size);
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)('hue.ace.fontSize', size);
      },
      getFontSize: function getFontSize() {
        var size = editor.getOption('fontSize');
        if (size.toLowerCase().indexOf('px') === -1 && size.toLowerCase().indexOf('em') === -1) {
          size += 'px';
        }
        return size;
      }
    };
    if (window.ENABLE_SQL_SYNTAX_CHECK && window.Worker) {
      var errorHighlightingEnabled = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)('hue.ace.errorHighlightingEnabled', true);
      if (errorHighlightingEnabled) {
        aceLocationHandler.attachSqlSyntaxWorker();
      }
      editor.customMenuOptions.setErrorHighlighting = function (enabled) {
        errorHighlightingEnabled = enabled;
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)('hue.ace.errorHighlightingEnabled', enabled);
        if (enabled) {
          aceLocationHandler.attachSqlSyntaxWorker();
        } else {
          aceLocationHandler.detachSqlSyntaxWorker();
        }
      };
      editor.customMenuOptions.getErrorHighlighting = function () {
        return errorHighlightingEnabled;
      };
      editor.customMenuOptions.setClearIgnoredSyntaxChecks = function () {
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)('hue.syntax.checker.suppressedRules', {});
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#setClearIgnoredSyntaxChecks').hide().before('<div style="margin-top:5px;float:right;">done</div>');
      };
      editor.customMenuOptions.getClearIgnoredSyntaxChecks = function () {
        return false;
      };
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(editorOptions, aceOptions);
    editorOptions['enableBasicAutocompletion'] = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)('hue.ace.enableBasicAutocompletion', true);
    if (editorOptions['enableBasicAutocompletion']) {
      editorOptions['enableLiveAutocompletion'] = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)('hue.ace.enableLiveAutocompletion', true);
    }
    editorOptions['tabSize'] = 2;
    editorOptions['useSoftTabs'] = true;
    editor.setOptions(editorOptions);
    var AceAutocomplete = ext_aceHelper__WEBPACK_IMPORTED_MODULE_2__["default"].require('ace/autocomplete').Autocomplete;
    if (!editor.completer) {
      editor.completer = new AceAutocomplete();
    }
    editor.completer.exactMatch = !snippet.isSqlDialect();
    var initAutocompleters = function initAutocompleters() {
      if (editor.completers) {
        editor.completers.length = 0;
        if (snippet.isSqlDialect()) {
          editor.useHueAutocompleter = true;
        } else {
          editor.completers.push(langTools.snippetCompleter);
          editor.completers.push(langTools.textCompleter);
          editor.completers.push(langTools.keyWordCompleter);
          editor.completers.push(snippet.autocompleter);
        }
      }
    };
    var langTools = ext_aceHelper__WEBPACK_IMPORTED_MODULE_2__["default"].require('ace/ext/language_tools');
    langTools.textCompleter.setSqlMode(snippet.isSqlDialect());
    initAutocompleters();
    var UNICODES_TO_REMOVE = /[\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u202F\u205F\u3000\uFEFF]/gi; //taken from https://www.cs.tut.fi/~jkorpela/chars/spaces.html

    var removeUnicodes = function removeUnicodes(value) {
      return value.replace(UNICODES_TO_REMOVE, ' ');
    };
    var placeHolderElement = null;
    var placeHolderVisible = false;
    var placeHolderText = snippet.getPlaceHolder();
    if (placeHolderText) {
      placeHolderElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').text(placeHolderText).css('margin-left', '6px').addClass('ace_invisible ace_emptyMessage');
      if (editor.getValue().length === 0) {
        placeHolderElement.appendTo(editor.renderer.scroller);
        placeHolderVisible = true;
      }
    }
    var pasteListener = editor.on('paste', function (e) {
      e.text = removeUnicodes(e.text);
    });
    disposeFunctions.push(function () {
      editor.off('paste', pasteListener);
    });
    var inputListener = editor.on('input', function () {
      if (editor.getValue().length === 0) {
        if (!placeHolderVisible && placeHolderElement) {
          placeHolderElement.appendTo(editor.renderer.scroller);
          placeHolderVisible = true;
        }
      } else {
        placeHolderElement.remove();
        placeHolderVisible = false;
      }
      if (options.updateOnInput) {
        snippet.statement_raw(removeUnicodes(editor.getValue()));
      }
    });
    disposeFunctions.push(function () {
      editor.off('input', inputListener);
    });
    if (snippet.aceCursorPosition()) {
      editor.moveCursorToPosition(snippet.aceCursorPosition());
      window.setTimeout(function () {
        editor.centerSelection();
      }, 0);
    }
    var focusListener = editor.on('focus', function () {
      initAutocompleters();
      snippet.inFocus(true);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ace-editor').data('last-active-editor', false);
      $el.data('last-active-editor', true);
      if (editor.session.$backMarkers) {
        for (var marker in editor.session.$backMarkers) {
          if (editor.session.$backMarkers[marker].clazz === 'highlighted') {
            editor.session.removeMarker(editor.session.$backMarkers[marker].id);
          }
        }
      }
    });
    disposeFunctions.push(function () {
      editor.off('focus', focusListener);
    });
    var changeSelectionListener = editor.selection.on('changeSelection', function () {
      snippet.selectedStatement(editor.getSelectedText());
    });
    disposeFunctions.push(function () {
      editor.selection.off('changeSelection', changeSelectionListener);
    });
    var blurListener = editor.on('blur', function () {
      snippet.inFocus(false);
      snippet.statement_raw(removeUnicodes(editor.getValue()));
      if (options.onBlur) {
        options.onBlur($el, removeUnicodes(editor.getValue()));
      }
    });
    disposeFunctions.push(function () {
      editor.off('blur', blurListener);
    });
    editor.previousSize = 0;

    // TODO: Get rid of this
    var idInterval = window.setInterval(function () {
      editor.session.getMode().$id = snippet.getAceMode(); // forces the id again because of Ace command internals
    }, 100);
    disposeFunctions.push(function () {
      window.clearInterval(idInterval);
    });
    editor.middleClick = false;
    var mousedownListener = editor.on('mousedown', function (e) {
      if (e.domEvent.which === 2) {
        // middle click
        editor.middleClick = true;
        var tempText = editor.getSelectedText();
        if (e.$pos) {
          editor.session.insert(e.$pos, tempText);
        }
        window.setTimeout(function () {
          editor.middleClick = false;
          if (e.$pos) {
            editor.moveCursorTo(e.$pos.row, e.$pos.column + tempText.length);
          }
        }, 200);
      }
    });
    disposeFunctions.push(function () {
      editor.off('mousedown', mousedownListener);
    });
    var aceReplaceSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('ace.replace', function (data) {
      var Range = ext_aceHelper__WEBPACK_IMPORTED_MODULE_2__["default"].require('ace/range').Range;
      var range = new Range(data.location.first_line - 1, data.location.first_column - 1, data.location.last_line - 1, data.location.last_column - 1);
      editor.getSession().getDocument().replace(range, data.text);
    });
    disposeFunctions.push(function () {
      aceReplaceSub.remove();
    });
    var clickListener = editor.on('click', function () {
      editor.clearErrorsAndWarnings();
    });
    disposeFunctions.push(function () {
      editor.off('click', clickListener);
    });
    var changeListener = editor.on('change', function () {
      snippet.statement_raw(removeUnicodes(editor.getValue()));
      editor.session.getMode().$id = snippet.getAceMode();
      var currentSize = editor.session.getLength();
      if (currentSize !== editor.previousSize && currentSize >= editorOptions.minLines && currentSize <= editorOptions.maxLines) {
        editor.previousSize = editor.session.getLength();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('editorSizeChanged');
      }
      // automagically change snippet type
      // TODO: Remove completely, check if used in code, '% dialect'
      var firstLine = editor.session.getLine(0);
      if (firstLine.indexOf('%') === 0 && firstLine.charAt(firstLine.length - 1) === ' ') {
        var availableSnippets = snippet.availableSnippets;
        var removeFirstLine = false;
        for (var i = 0; i < availableSnippets.length; i++) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(firstLine.substr(1)) === availableSnippets[i].type()) {
            snippet.type(availableSnippets[i].type());
            removeFirstLine = true;
            break;
          }
        }
        if (removeFirstLine) {
          editor.session.remove(new AceRange(0, 0, 0, 200));
        }
      }
    });
    disposeFunctions.push(function () {
      editor.off('change', changeListener);
    });
    editor.commands.addCommand({
      name: 'execute',
      bindKey: {
        win: 'Ctrl-Enter',
        mac: 'Command-Enter|Ctrl-Enter'
      },
      exec: function exec() {
        snippet.statement_raw(removeUnicodes(editor.getValue()));
        snippet.execute();
      }
    });
    editor.commands.addCommand({
      name: 'switchTheme',
      bindKey: {
        win: 'Ctrl-Alt-t',
        mac: 'Command-Alt-t'
      },
      exec: function exec() {
        darkThemeEnabled = !darkThemeEnabled;
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_8__.setInLocalStorage)('ace.dark.theme.enabled', darkThemeEnabled);
        editor.setTheme(darkThemeEnabled ? 'ace/theme/hue_dark' : 'ace/theme/hue');
      }
    });
    editor.commands.addCommand({
      name: 'new',
      bindKey: {
        win: 'Ctrl-e',
        mac: 'Command-e'
      },
      exec: function exec() {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('editor.create.new');
      }
    });
    editor.commands.addCommand({
      name: 'save',
      bindKey: {
        win: 'Ctrl-s',
        mac: 'Command-s|Ctrl-s'
      },
      exec: function exec() {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('editor.save');
      }
    });
    editor.commands.addCommand({
      name: 'esc',
      bindKey: {
        win: 'Ctrl-Shift-p',
        mac: 'Ctrl-Shift-p|Command-Shift-p'
      },
      exec: function exec() {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('editor.presentation.toggle');
      }
    });
    editor.commands.bindKey('Ctrl-P', 'golineup');
    editor.commands.addCommand({
      name: 'format',
      bindKey: {
        win: 'Ctrl-i|Ctrl-Shift-f|Ctrl-Alt-l',
        mac: 'Command-i|Ctrl-i|Ctrl-Shift-f|Command-Shift-f|Ctrl-Shift-l|Cmd-Shift-l'
      },
      exec: function exec() {
        var formatted_statements = (0,_gethue_sql_formatter__WEBPACK_IMPORTED_MODULE_3__.format)(editor.getSelectedText() !== '' ? editor.getSelectedText() : editor.getValue(), {
          uppercase: true,
          linesBetweenQueries: 2,
          indentQuerySeparator: true
        });
        if (editor.getSelectedText() !== '') {
          editor.session.replace(editor.session.selection.getRange(), formatted_statements);
        } else {
          editor.setValue(formatted_statements);
          snippet.statement_raw(removeUnicodes(editor.getValue()));
        }
      }
    });
    editor.commands.addCommand({
      name: 'gotolinealternative',
      bindKey: {
        win: 'Ctrl-j',
        mac: 'Command-j|Ctrl-j'
      },
      exec: editor.commands.commands['gotoline'].exec
    });
    var isNewStatement = function isNewStatement() {
      return /^\s*$/.test(editor.getValue()) || /^.*;\s*$/.test(editor.getTextBeforeCursor());
    };
    var insertSqlAtCursor = function insertSqlAtCursor(text, cursorEndAdjust, menu) {
      var before = editor.getTextBeforeCursor();
      if (/\S+$/.test(before)) {
        text = ' ' + text;
      }
      if (menu) {
        menu.hide();
      }
      editor.session.insert(editor.getCursorPosition(), text);
      if (cursorEndAdjust !== 0) {
        var cursor = editor.getCursorPosition();
        editor.moveCursorToPosition({
          row: cursor.row,
          column: cursor.column + cursorEndAdjust
        });
      }
      editor.clearSelection();
      editor.focus();
    };
    var insertTableAtCursorSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('editor.insert.table.at.cursor', function (details) {
      if ($el.data('last-active-editor')) {
        var qualifiedName = snippet.database() === details.database ? details.name : details.database + '.' + details.name;
        if (isNewStatement()) {
          insertSqlAtCursor('SELECT * FROM ' + qualifiedName + ' LIMIT 100;', -1);
        } else {
          insertSqlAtCursor(qualifiedName + ' ', 0);
        }
      }
    });
    var insertColumnAtCursorSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('editor.insert.column.at.cursor', function (details) {
      if ($el.data('last-active-editor')) {
        if (isNewStatement()) {
          var qualifiedFromName = snippet.database() === details.database ? details.table : details.database + '.' + details.table;
          insertSqlAtCursor('SELECT ' + details.name + ' FROM ' + qualifiedFromName + ' LIMIT 100;', -1);
        } else {
          insertSqlAtCursor(details.name + ' ', 0);
        }
      }
    });
    var insertAtCursorSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe(INSERT_AT_CURSOR_EVENT, function (details) {
      if (details.targetEditor && details.targetEditor === editor || $el.data('last-active-editor')) {
        insertSqlAtCursor(details.text + ' ', details.cursorEndAdjust || 0);
      }
    });
    disposeFunctions.push(function () {
      insertTableAtCursorSub.remove();
      insertColumnAtCursorSub.remove();
      insertAtCursorSub.remove();
    });
    var dblClickHdfsItemSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.dblClickHdfsItem', function (assistHdfsEntry) {
      if ($el.data('last-active-editor')) {
        editor.session.insert(editor.getCursorPosition(), "'" + assistHdfsEntry.path + "'");
      }
    });
    disposeFunctions.push(function () {
      dblClickHdfsItemSub.remove();
    });
    var dblClickAdlsItemSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.dblClickAdlsItem', function (assistHdfsEntry) {
      if ($el.data('last-active-editor')) {
        editor.session.insert(editor.getCursorPosition(), 'adl:/' + assistHdfsEntry.path + "'");
      }
    });
    disposeFunctions.push(function () {
      dblClickAdlsItemSub.remove();
    });
    var dblClickAbfsItemSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.dblClickAbfsItem', function (assistHdfsEntry) {
      if ($el.data('last-active-editor')) {
        editor.session.insert(editor.getCursorPosition(), 'abfs://' + assistHdfsEntry.path + "'");
      }
    });
    disposeFunctions.push(function () {
      dblClickAbfsItemSub.remove();
    });
    var dblClickOfsItemSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.dblClickOfsItem', function (assistOfsEntry) {
      if ($el.data('last-active-editor')) {
        editor.session.insert(editor.getCursorPosition(), 'ofs://' + assistOfsEntry.path + "'");
      }
    });
    disposeFunctions.push(function () {
      dblClickOfsItemSub.remove();
    });
    var dblClickGitItemSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.dblClickGitItem', function (assistGitEntry) {
      if ($el.data('last-active-editor')) {
        editor.session.setValue(assistGitEntry.fileContent());
      }
    });
    disposeFunctions.push(function () {
      dblClickGitItemSub.remove();
    });
    var dblClickS3ItemSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.dblClickS3Item', function (assistS3Entry) {
      if ($el.data('last-active-editor')) {
        editor.session.insert(editor.getCursorPosition(), "'s3a://" + assistS3Entry.path + "'");
      }
    });
    disposeFunctions.push(function () {
      dblClickS3ItemSub.remove();
    });
    var dblClickGSItemSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('assist.dblClickGSItem', function (assistGSEntry) {
      if ($el.data('last-active-editor')) {
        editor.session.insert(editor.getCursorPosition(), "'gs://" + assistGSEntry.path + "'");
      }
    });
    disposeFunctions.push(function () {
      dblClickGSItemSub.remove();
    });
    var sampleErrorInsertSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('sample.error.insert.click', function (popoverEntry) {
      var table = popoverEntry.identifierChain[popoverEntry.identifierChain.length - 1]['name'];
      var text = 'SELECT * FROM ' + table + ' LIMIT 100;';
      insertSqlAtCursor(text, -1);
    });
    disposeFunctions.push(function () {
      sampleErrorInsertSub.remove();
    });
    var autocompleteTemporarilyDisabled = false;
    var autocompleteThrottle = -1;
    var afterExecListener = editor.commands.on('afterExec', function (e) {
      if (editor.getOption('enableLiveAutocompletion') && e.command.name === 'insertstring') {
        if (/\S+\(\)$/.test(e.args)) {
          editor.moveCursorTo(editor.getCursorPosition().row, editor.getCursorPosition().column - 1);
          return;
        }
        window.clearTimeout(autocompleteThrottle);
        autocompleteThrottle = window.setTimeout(function () {
          var textBeforeCursor = editor.getTextBeforeCursor();
          var questionMarkMatch = textBeforeCursor.match(/select\s+(\? from \S+[^.]\s*$)/i);
          if (questionMarkMatch && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ace_autocomplete:visible').length === 0) {
            editor.moveCursorTo(editor.getCursorPosition().row, editor.getCursorPosition().column - (questionMarkMatch[1].length - 1));
            editor.removeTextBeforeCursor(1);
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish(_aceLocationHandler__WEBPACK_IMPORTED_MODULE_4__.REFRESH_STATEMENT_LOCATIONS_EVENT, snippet.id());
            window.setTimeout(function () {
              editor.execCommand('startAutocomplete');
            }, 1);
          } else if (/\.$/.test(textBeforeCursor)) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish(_aceLocationHandler__WEBPACK_IMPORTED_MODULE_4__.REFRESH_STATEMENT_LOCATIONS_EVENT, snippet.id());
            window.setTimeout(function () {
              editor.execCommand('startAutocomplete');
            }, 1);
          }
        }, 400);
      }
      editor.session.getMode().$id = snippet.getAceMode(); // forces the id again because of Ace command internals
      // if it's pig and before it's LOAD ' we disable the autocomplete and show a filechooser btn
      if (editor.session.getMode().$id === 'ace/mode/pig' && e.args) {
        var textBefore = editor.getTextBeforeCursor();
        if (e.args === "'" && textBefore.toUpperCase().indexOf('LOAD ') > -1 && textBefore.toUpperCase().indexOf('LOAD ') === textBefore.toUpperCase().length - 5 || textBefore.toUpperCase().indexOf("LOAD '") > -1 && textBefore.toUpperCase().indexOf("LOAD '") === textBefore.toUpperCase().length - 6) {
          if (editor.getOption('enableBasicAutocompletion')) {
            editor.disableAutocomplete();
            autocompleteTemporarilyDisabled = true;
          }
          var btn = editor.showFileButton();
          btn.on('click', function (ie) {
            ie.preventDefault();
            // TODO: Turn the ace file chooser into a component and remove css class references
            var $aceFileChooseContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ace-filechooser-content');
            if (!$aceFileChooseContent.data('jHueFileChooser')) {
              if ($aceFileChooseContent.data('spinner') == null) {
                $aceFileChooseContent.data('spinner', $aceFileChooseContent.html());
              } else {
                $aceFileChooseContent.html($aceFileChooseContent.data('spinner'));
              }
              $aceFileChooseContent.jHueFileChooser({
                onFileChoose: function onFileChoose(filePath) {
                  editor.session.insert(editor.getCursorPosition(), filePath + "'");
                  editor.hideFileButton();
                  if (autocompleteTemporarilyDisabled) {
                    editor.enableAutocomplete();
                    autocompleteTemporarilyDisabled = false;
                  }
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ace-filechooser').hide();
                },
                selectFolder: false,
                createFolder: false
              });
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ace-filechooser').css({
              top: jquery__WEBPACK_IMPORTED_MODULE_0___default()(ie.currentTarget).position().top,
              left: jquery__WEBPACK_IMPORTED_MODULE_0___default()(ie.currentTarget).position().left
            }).show();
          });
        } else {
          editor.hideFileButton();
          if (autocompleteTemporarilyDisabled) {
            editor.enableAutocomplete();
            autocompleteTemporarilyDisabled = false;
          }
        }
        if (e.args !== "'" && textBefore.toUpperCase().indexOf("LOAD '") > -1 && textBefore.toUpperCase().indexOf("LOAD '") === textBefore.toUpperCase().length - 6) {
          editor.hideFileButton();
          if (autocompleteTemporarilyDisabled) {
            editor.enableAutocomplete();
            autocompleteTemporarilyDisabled = false;
          }
        }
      }
    });
    disposeFunctions.push(function () {
      editor.commands.off('afterExec', afterExecListener);
    });
    editor.$blockScrolling = Infinity;
    snippet.ace(editor);
  },
  update: function update(element, valueAccessor) {
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var snippet = options.snippet;
    var AceRange = ext_aceHelper__WEBPACK_IMPORTED_MODULE_2__["default"].require('ace/range').Range;
    if (snippet.ace()) {
      var editor = snippet.ace();
      if (typeof options.readOnly !== 'undefined') {
        editor.setReadOnly(options.readOnly);
      }
      var range = options.highlightedRange ? options.highlightedRange() : null;
      editor.session.setMode(snippet.getAceMode());
      if (range && JSON.stringify(range.start) !== JSON.stringify(range.end)) {
        var conflictingWithErrorMarkers = false;
        if (editor.session.$backMarkers) {
          for (var marker in editor.session.$backMarkers) {
            if (editor.session.$backMarkers[marker].clazz === 'ace_error-line') {
              var errorRange = editor.session.$backMarkers[marker].range;
              if (range.start.row <= errorRange.end.row && range.end.row >= errorRange.start.row) {
                conflictingWithErrorMarkers = true;
              }
            }
            if (editor.session.$backMarkers[marker].clazz === 'highlighted') {
              editor.session.removeMarker(editor.session.$backMarkers[marker].id);
            }
          }
        }
        if (!conflictingWithErrorMarkers) {
          var lineOffset = snippet.lastAceSelectionRowOffset();
          window.setTimeout(function () {
            editor.session.addMarker(new AceRange(range.start.row + lineOffset, range.start.column, range.end.row + lineOffset, range.end.column), 'highlighted', 'line');
            ext_aceHelper__WEBPACK_IMPORTED_MODULE_2__["default"].require('ace/lib/dom').importCssString('.highlighted {\
                  background-color: #E3F7FF;\
                  position: absolute;\
              }');
            editor.scrollToLine(range.start.row + lineOffset, true, true, function () {});
          }, 0);
        }
      }
      try {
        editor._emit('change');
      } catch (e) {}
    }
  }
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ace/ko.aceResizer.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ace/ko.aceResizer.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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





knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.aceResizer = {
  init: function init(element, valueAccessor) {
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var ace = options.snippet.ace.bind(options.snippet);
    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.target);
    var $resizer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var $contentPanel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content-panel');
    var $execStatus = $resizer.prev('.snippet-execution-status');
    var $variables = $resizer.siblings('.snippet-row').find('.variables');
    var lastEditorSize = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)('hue.editor.editor.size') || 131;
    var editorHeight = Math.floor(lastEditorSize / 16);
    $target.height(lastEditorSize);
    var autoExpand = typeof options.snippet.aceAutoExpand !== 'undefined' ? options.snippet.aceAutoExpand : true;
    var draggedOnce = false;
    function throttleChange() {
      if (autoExpand && !draggedOnce) {
        var maxAutoLines = Math.floor((jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - 80) / 2 / 16);
        var resized = false;
        if (ace().session.getLength() > editorHeight) {
          if (ace().session.getLength() < maxAutoLines) {
            $target.height(ace().session.getLength() * 16);
          } else {
            $target.height(maxAutoLines * 16); // height of maxAutoLines
          }
          resized = true;
        } else {
          $target.height(Math.max(ace().session.getLength() * 16, (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)('hue.editor.editor.size') || 131));
          resized = true;
        }
        if (ace().session.getLength() === editorHeight) {
          resized = false;
        }
        if (resized && $target.height() !== lastEditorSize) {
          ace().resize();
          editorHeight = Math.min(maxAutoLines, ace().session.getLength());
          lastEditorSize = $target.height();
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('redraw.fixed.headers');
        }
      }
    }
    var changeTimeout = -1;
    ace().on('change', function () {
      window.clearTimeout(changeTimeout);
      changeTimeout = window.setTimeout(throttleChange, 10);
    });
    var setAutoExpandSubscription = utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('ace.set.autoexpand', function (options) {
      if (ace().container.id === options.snippet.id()) {
        autoExpand = options.autoExpand;
      }
    });
    $resizer.draggable({
      axis: 'y',
      start: options.onStart ? options.onStart : function () {},
      drag: function drag(event, ui) {
        draggedOnce = true;
        var currentHeight = ui.offset.top + $contentPanel.scrollTop() - (125 + $execStatus.outerHeight(true) + $variables.outerHeight(true));
        $target.css('height', currentHeight + 'px');
        ace().resize();
        ui.offset.top = 0;
        ui.position.top = 0;
      },
      stop: function stop(event, ui) {
        ui.offset.top = 0;
        ui.position.top = 0;
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)('hue.editor.editor.size', $target.height());
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('redraw.fixed.headers');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger('editorSizeChanged');
      }
    });
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      setAutoExpandSubscription.remove();
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/bindingUtils.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/bindingUtils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerBinding": () => (/* binding */ registerBinding)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
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


var registerBinding = function registerBinding(name, model) {
  if (knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers[name]) {
    return;
  }
  knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers[name] = model;
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/charts/chartUtils.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/charts/chartUtils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "barChartBuilder": () => (/* binding */ barChartBuilder),
/* harmony export */   "handleSelection": () => (/* binding */ handleSelection),
/* harmony export */   "insertLinebreaks": () => (/* binding */ insertLinebreaks),
/* harmony export */   "lineChartBuilder": () => (/* binding */ lineChartBuilder),
/* harmony export */   "numeric": () => (/* binding */ numeric)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ext/nv.d3.1.1.15b.custom */ "./desktop/core/src/desktop/js/ext/nv.d3.1.1.15b.custom.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
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






var MS = 1;
var SECOND_MS = 1000 * MS;
var MINUTE_MS = SECOND_MS * 60;
var HOUR_MS = MINUTE_MS * 60;
var DAY_MS = HOUR_MS * 24;
var WEEK_MS = DAY_MS * 7;
var MONTH_MS = DAY_MS * 30.5;
var YEAR_MS = DAY_MS * 365;
var addLegend = function addLegend(element) {
  var $el = d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)[0]);
  var $div = $el.select('div');
  if (!$div.size()) {
    $el.append('div').style('position', 'absolute').style('overflow', 'auto').style('top', '20px').style('right', '0px').style('width', '175px').style('height', 'calc(100% - 20px)').append('svg');
  } else {
    $div.append('svg');
  }
};
var barChartBuilder = function barChartBuilder(element, options, isTimeline) {
  var _datum = options.transformer(options.datum, isTimeline);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).height(300);
  var _isPivot = options.isPivot != null ? options.isPivot : false;
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0 && (_datum.length === 0 || _datum[0].values.length === 0)) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').remove();
  }
  if (_datum.length > 0 && _datum[0].values.length > 0 && isNaN(_datum[0].values[0].y)) {
    _datum = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').remove();
  }
  _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_2__["default"].addGraph(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('.nv-discreteBarWithAxes').length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').empty();
    }
    var _chart = _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_2__["default"].models.multiBarWithBrushChart();
    _chart.noData(_datum.message || (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])('No Data Available.'));
    if (_datum.length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('chart_type', 'multibar_brush');
    }
    _chart.onSelectRange(function (from, to) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('charts.state', {
        updating: true
      });
      options.onSelectRange(from, to);
    });
    _chart.multibar.dispatch.on('elementClick', function (d) {
      if (typeof options.onClick != 'undefined') {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('charts.state', {
          updating: true
        });
        options.onClick(d.point);
      }
    });
    _chart.onStateChange(options.onStateChange);
    if (options.selectedSerie) {
      _chart.onLegendChange(function (state) {
        var selectedSerie = options.selectedSerie();
        var _datum = d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]).datum();
        for (var i = 0; i < state.disabled.length; i++) {
          selectedSerie[_datum[i].key] = !state.disabled[i];
        }
        options.selectedSerie(selectedSerie);
      });
    }
    _chart.multibar.hideable(true);
    _chart.multibar.stacked(typeof options.stacked != 'undefined' ? options.stacked : false);
    if (isTimeline) {
      _chart.convert = function (d) {
        return isTimeline ? new Date(moment(d[0].obj.from).valueOf()) : parseFloat(d);
      };
      _chart.staggerLabels(false);
      _chart.tooltipContent(function (values) {
        return values.map(function (value) {
          value = JSON.parse(JSON.stringify(value));
          value.x = moment(value.x).utc().format('YYYY-MM-DD HH:mm:ss');
          value.y = _chart.yAxis.tickFormat()(value.y);
          return value;
        });
      });
      _chart.xAxis.tickFormat(multi(_chart.xAxis));
      _chart.multibar.stacked(typeof options.stacked != 'undefined' ? options.stacked : false);
      _chart.onChartUpdate(function () {
        _d3.selectAll('g.nv-x.nv-axis g text').each(function (d) {
          insertLinebreaks(_chart, d, this);
        });
      });
    } else if (numeric(_datum)) {
      _chart.xAxis.showMaxMin(false).tickFormat(d3v3__WEBPACK_IMPORTED_MODULE_1___default().format(',0f'));
      _chart.staggerLabels(false);
    } else if (!_isPivot) {
      _chart.multibar.barColor(_ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_2__["default"].utils.defaultColor());
      _chart.staggerLabels(true);
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).width() < 300 && typeof _chart.showLegend != 'undefined') {
      _chart.showLegend(false);
    }
    _chart.transitionDuration(0);
    _chart.yAxis.tickFormat(d3v3__WEBPACK_IMPORTED_MODULE_1___default().format('s'));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('chart', _chart);
    handleSelection(_chart, options, _datum);
    var _d3 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0 ? d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]) : d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)[0]).insert('svg', ':first-child');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length < 2) {
      addLegend(element);
    }
    _d3.datum(_datum).transition().duration(150).each('end', function () {
      if (options.onComplete != null) {
        options.onComplete();
      }
      if (isTimeline) {
        _d3.selectAll('g.nv-x.nv-axis g text').each(function (d) {
          insertLinebreaks(_chart, d, this);
        });
      }
      if (options.slot && _chart.recommendedTicks) {
        options.slot(_chart.recommendedTicks());
      }
    }).call(_chart);
    if (!options.skipWindowResize) {
      var _resizeTimeout = -1;
      _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_2__["default"].utils.windowResize(function () {
        window.clearTimeout(_resizeTimeout);
        _resizeTimeout = window.setTimeout(function () {
          _chart.update();
        }, 200);
      });
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).on('forceUpdate', function () {
      _chart.update();
    });
    return _chart;
  });
};
var handleSelection = function handleSelection(_chart, _options, _datum) {
  var i, j;
  if (_options.selectedSerie) {
    var selectedSerie = _options.selectedSerie();
    var enabledCount = 0;
    for (i = 0; i < _datum.length; i++) {
      if (!selectedSerie[_datum[i].key]) {
        _datum[i].disabled = true;
      } else {
        enabledCount++;
      }
    }
    if (enabledCount === 0) {
      // Get the 5 series with the most non zero elements on x axis & total value.
      var stats = {};
      for (i = 0; i < _datum.length; i++) {
        if (!stats[_datum[i].key]) {
          stats[_datum[i].key] = {
            count: 0,
            total: 0
          };
        }
        for (j = 0; j < _datum[i].values.length; j++) {
          stats[_datum[i].key].count += Math.min(_datum[i].values[j].y, 1);
          stats[_datum[i].key].total += _datum[i].values[j].y;
        }
      }
      var aStats = Object.keys(stats).map(function (key) {
        return {
          key: key,
          stat: stats[key]
        };
      });
      aStats.sort(function (a, b) {
        return a.stat.count - b.stat.count || a.stat.total - b.stat.total;
      });
      for (i = aStats.length - 1; i >= Math.max(aStats.length - 5, 0); i--) {
        _datum[i].disabled = false;
        selectedSerie[_datum[i].key] = true;
      }
    }
  }
  var _isPivot = _options.isPivot != null ? _options.isPivot : false;
  var _hideSelection = typeof _options.hideSelection !== 'undefined' ? typeof _options.hideSelection === 'function' ? _options.hideSelection() : _options.hideSelection : false;
  var _enableSelection = typeof _options.enableSelection !== 'undefined' ? typeof _options.enableSelection === 'function' ? _options.enableSelection() : _options.enableSelection : true;
  _enableSelection = _enableSelection && numeric(_datum);
  var _hideStacked = _options.hideStacked !== null ? typeof _options.hideStacked === 'function' ? _options.hideStacked() : _options.hideStacked : false;
  var _displayValuesInLegend = _options.displayValuesInLegend !== null ? typeof _options.displayValuesInLegend === 'function' ? _options.displayValuesInLegend() : _options.displayValuesInLegend : false;
  var fHideSelection = _isPivot || _hideSelection ? _chart.hideSelection : _chart.showSelection;
  if (fHideSelection) {
    fHideSelection.call(_chart);
  }
  var fEnableSelection = _enableSelection ? _chart.enableSelection : _chart.disableSelection;
  if (fEnableSelection) {
    fEnableSelection.call(_chart);
  }
  var fHideStacked = _hideStacked ? _chart.hideStacked : _chart.showStacked;
  if (fHideStacked) {
    fHideStacked.call(_chart);
  }
  if (_chart.displayValuesInLegend) {
    _chart.displayValuesInLegend(_displayValuesInLegend);
  }
  if (_chart.selectBars) {
    var _field = typeof _options.field == 'function' ? _options.field() : _options.field;
    var bHasSelection = false;
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(_options.fqs ? _options.fqs() : [], function (cnt, item) {
      if (item.id() === _options.datum.widget_id) {
        if (item.field() === _field) {
          if (item.properties && typeof item.properties === 'function') {
            bHasSelection = true;
            _chart.selectBars({
              singleValues: jquery__WEBPACK_IMPORTED_MODULE_0___default().map(item.filter(), function (it) {
                return it.value();
              }),
              rangeValues: jquery__WEBPACK_IMPORTED_MODULE_0___default().map(item.properties(), function (it) {
                return {
                  from: it.from(),
                  to: it.to()
                };
              })
            });
          } else {
            bHasSelection = true;
            _chart.selectBars(jquery__WEBPACK_IMPORTED_MODULE_0___default().map(item.filter(), function (it) {
              return it.value();
            }));
          }
        }
        if (Array.isArray(item.field())) {
          bHasSelection = true;
          _chart.selectBars({
            field: item.field(),
            selected: jquery__WEBPACK_IMPORTED_MODULE_0___default().map(item.filter(), function (it) {
              return {
                values: it.value()
              };
            })
          });
        }
      }
    });
    if (!bHasSelection) {
      _chart.selectBars({
        field: '',
        selected: []
      });
    }
  }
};
var insertLinebreaks = function insertLinebreaks(_chart, d, ref) {
  var _el = d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(ref);
  var _mom = moment(d);
  if (_mom != null && _mom.isValid()) {
    var _words = _el.text().split(' ');
    _el.text('');
    for (var i = 0; i < _words.length; i++) {
      var tspan = _el.append('tspan').text(_words[i]);
      if (i > 0) {
        tspan.attr('x', 0).attr('dy', '15');
      }
    }
  }
};
var lineChartBuilder = function lineChartBuilder(element, options, isTimeline) {
  var _datum = options.transformer(options.datum);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).height(300);
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0 && (_datum.length === 0 || _datum[0].values.length === 0)) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').empty();
  }
  if (_datum.length > 0 && _datum[0].values.length > 0 && (isNaN(_datum[0].values[0].x) || isNaN(_datum[0].values[0].y))) {
    _datum = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').empty();
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).is(':visible')) {
    _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_2__["default"].addGraph(function () {
      var _chart = _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_2__["default"].models.lineWithBrushChart();
      _chart.noData(_datum.message || (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])('No Data Available.'));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('chart', _chart);
      _chart.transitionDuration(0);
      _chart.convert = function (d) {
        return isTimeline ? new Date(moment(d[0].obj.from).valueOf()) : parseFloat(d);
      };
      if (options.showControls != null) {
        _chart.showControls(false);
      }
      _chart.onSelectRange(function (from, to) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('charts.state', {
          updating: true
        });
        options.onSelectRange(jquery__WEBPACK_IMPORTED_MODULE_0___default().isNumeric(from) && isTimeline ? new Date(moment(from).valueOf()) : parseInt(from), jquery__WEBPACK_IMPORTED_MODULE_0___default().isNumeric(to) && isTimeline ? new Date(moment(to).valueOf()) : parseInt(to)); // FIXME when using pdouble we should not parseInt.
      });
      if (options.selectedSerie) {
        _chart.onLegendChange(function (state) {
          var selectedSerie = options.selectedSerie();
          var _datum = d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]).datum();
          for (var i = 0; i < state.disabled.length; i++) {
            selectedSerie[_datum[i].key] = !state.disabled[i];
          }
          options.selectedSerie(selectedSerie);
        });
      }
      _chart.xAxis.showMaxMin(false);
      if (isTimeline) {
        _chart.xScale(d3v3__WEBPACK_IMPORTED_MODULE_1___default().time.scale.utc());
        _chart.tooltipContent(function (values) {
          return values.map(function (value) {
            value = JSON.parse(JSON.stringify(value));
            value.x = moment(value.x).utc().format('YYYY-MM-DD HH:mm:ss');
            value.y = _chart.yAxis.tickFormat()(value.y);
            return value;
          });
        });
        _chart.xAxis.tickFormat(multi(_chart.xAxis, _chart));
        _chart.onChartUpdate(function () {
          _d3.selectAll('g.nv-x.nv-axis g text').each(function (d) {
            insertLinebreaks(_chart, d, this);
          });
        });
      }
      _chart.yAxis.tickFormat(d3v3__WEBPACK_IMPORTED_MODULE_1___default().format('s'));
      handleSelection(_chart, options, _datum);
      var _d3 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0 ? d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]) : d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)[0]).insert('svg', ':first-child');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length < 2) {
        addLegend(element);
      }
      _d3.datum(_datum).transition().duration(150).each('end', function () {
        if (options.onComplete != null) {
          options.onComplete();
        }
        if (isTimeline) {
          _d3.selectAll('g.nv-x.nv-axis g text').each(function (d) {
            insertLinebreaks(_chart, d, this);
          });
        }
      }).call(_chart);
      var _resizeTimeout = -1;
      _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_2__["default"].utils.windowResize(function () {
        window.clearTimeout(_resizeTimeout);
        _resizeTimeout = window.setTimeout(function () {
          _chart.update();
        }, 200);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).on('forceUpdate', function () {
        _chart.update();
      });
      _chart.lines.dispatch.on('elementClick', function (d) {
        if (typeof options.onClick != 'undefined') {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('charts.state', {
            updating: true
          });
          options.onClick(d.point);
        }
      });
      return _chart;
    });
  }
};
var multi = function multi(xAxis) {
  var previous = new Date(9999, 11, 31);
  return d3v3__WEBPACK_IMPORTED_MODULE_1___default().time.format.utc.multi([['%H:%M:%S %Y-%m-%d', function (d) {
    var domain = xAxis.domain();
    var result = (previous > d || d === domain[0]) && moment(d).utc().seconds();
    if (result) {
      previous = d;
    }
    return result;
  }], ['%H:%M %Y-%m-%d', function (d) {
    var domain = xAxis.domain();
    var result = previous > d || d === domain[0];
    if (result) {
      previous = d;
    }
    return result;
  }], ['%S %H:%M', function (d) {
    var previousDiff = Math.abs(d - previous);
    var result = moment(previous).utc().minutes() !== moment(d).utc().minutes() && previousDiff < MINUTE_MS;
    if (result) {
      previous = d;
    }
    return result;
  }], ['%S', function (d) {
    var previousDiff = Math.abs(d - previous);
    var result = moment(previous).utc().seconds() !== moment(d).utc().seconds() && previousDiff < MINUTE_MS;
    if (result) {
      previous = d;
    }
    return result;
  }], ['%H:%M:%S %Y-%m-%d', function (d) {
    var previousDiff = Math.abs(d - previous);
    var result = moment(previous).utc().date() !== moment(d).utc().date() && previousDiff < WEEK_MS && moment(d).utc().seconds();
    if (result) {
      previous = d;
    }
    return result;
  }], ['%H:%M %Y-%m-%d', function (d) {
    var previousDiff = Math.abs(d - previous);
    var result = moment(previous).utc().date() !== moment(d).utc().date() && previousDiff < WEEK_MS;
    if (result) {
      previous = d;
    }
    return result;
  }], ['%H:%M:%S', function (d) {
    var previousDiff = Math.abs(d - previous);
    var result = (moment(previous).utc().hours() !== moment(d).utc().hours() || moment(previous).utc().minutes() !== moment(d).utc().minutes()) && previousDiff < WEEK_MS && moment(d).utc().seconds();
    if (result) {
      previous = d;
    }
    return result;
  }], ['%H:%M', function (d) {
    var previousDiff = Math.abs(d - previous);
    var result = (moment(previous).utc().hours() !== moment(d).utc().hours() || moment(previous).utc().minutes() !== moment(d).utc().minutes()) && previousDiff < WEEK_MS;
    if (result) {
      previous = d;
    }
    return result;
  }], ['%d %Y-%m', function (d) {
    var previousDiff = Math.abs(d - previous);
    var result = moment(previous).utc().months() !== moment(d).utc().months() && previousDiff < MONTH_MS;
    if (result) {
      previous = d;
    }
    return result;
  }], ['%d', function (d) {
    var previousDiff = Math.abs(d - previous);
    var result = moment(previous).utc().date() !== moment(d).utc().date() && previousDiff < MONTH_MS;
    if (result) {
      previous = d;
    }
    return result;
  }], ['%m %Y', function (d) {
    var previousDiff = Math.abs(d - previous);
    var result = moment(previous).utc().years() !== moment(d).utc().years() && previousDiff < YEAR_MS;
    if (result) {
      previous = d;
    }
    return result;
  }], ['%m', function (d) {
    var previousDiff = Math.abs(d - previous);
    var result = moment(previous).utc().months() !== moment(d).utc().months() && previousDiff < YEAR_MS;
    if (result) {
      previous = d;
    }
    return result;
  }], ['%Y', function (d) {
    previous = d;
    return true;
  }]]);
};
var numeric = function numeric(_datum) {
  for (var j = 0; j < _datum.length; j++) {
    for (var i = 0; i < _datum[j].values.length; i++) {
      if (isNaN(_datum[j].values[i].x * 1)) {
        return false;
      }
    }
  }
  return true;
};


/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.barChart.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/charts/ko.barChart.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ext/nv.d3.1.1.15b.custom */ "./desktop/core/src/desktop/js/ext/nv.d3.1.1.15b.custom.js");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _chartUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartUtils */ "./desktop/core/src/desktop/js/ko/bindings/charts/chartUtils.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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








var getChartType = function getChartType(options) {
  if (typeof (options === null || options === void 0 ? void 0 : options.type) === 'function') {
    var typeResult = options.type();
    return Array.isArray(typeResult) ? typeResult[0] : typeResult;
  } else if (typeof console.warn !== 'undefined') {
    console.warn('Expected chart options type to be a function');
  }
};
knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.barChart = {
  init: function init(element, valueAccessor) {
    var _options = knockout__WEBPACK_IMPORTED_MODULE_2__.unwrap(valueAccessor());
    if (getChartType(_options) === 'line') {
      window.setTimeout(function () {
        (0,_chartUtils__WEBPACK_IMPORTED_MODULE_5__.lineChartBuilder)(element, valueAccessor(), false);
      }, 0);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('type', 'line');
    } else {
      window.setTimeout(function () {
        (0,_chartUtils__WEBPACK_IMPORTED_MODULE_5__.barChartBuilder)(element, valueAccessor(), false);
      }, 0);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('type', 'bar');
    }
  },
  update: function update(element, valueAccessor) {
    var _options = knockout__WEBPACK_IMPORTED_MODULE_2__.unwrap(valueAccessor());
    var chosenChartType = getChartType(_options);
    var renderedChartType = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('type');
    var chartTypeHasChanged = chosenChartType !== renderedChartType;
    var chartNotBuilt = !jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('chart');
    if (chartTypeHasChanged || chartNotBuilt) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').remove();
      }
      if (chosenChartType === 'line') {
        window.setTimeout(function () {
          (0,_chartUtils__WEBPACK_IMPORTED_MODULE_5__.lineChartBuilder)(element, valueAccessor(), false);
        }, 0);
      } else {
        window.setTimeout(function () {
          (0,_chartUtils__WEBPACK_IMPORTED_MODULE_5__.barChartBuilder)(element, valueAccessor(), false);
        }, 0);
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('type', chosenChartType);
    }
    var _datum = _options.transformer(_options.datum);
    var _chart = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('chart');
    var _isPivot = _options.isPivot != null ? _options.isPivot : false;
    if (_chart) {
      _chart.noData(_datum.message || (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])('No Data Available.'));
      if (_chart.multibar) {
        _chart.multibar.stacked(typeof _options.stacked != 'undefined' ? _options.stacked : false);
      }
      if ((0,_chartUtils__WEBPACK_IMPORTED_MODULE_5__.numeric)(_datum)) {
        _chart.xAxis.showMaxMin(false).tickFormat(d3v3__WEBPACK_IMPORTED_MODULE_1___default().format(',0f'));
        if (_chart.multibar) {
          _chart.multibar.barColor(null);
        }
      } else {
        _chart.xAxis.tickFormat(function (s) {
          return s;
        });
        if (_chart.multibar) {
          if (!_isPivot) {
            _chart.multibar.barColor(_ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_3__["default"].utils.defaultColor());
          } else {
            _chart.multibar.barColor(null);
          }
        }
      }
      window.setTimeout(function () {
        (0,_chartUtils__WEBPACK_IMPORTED_MODULE_5__.handleSelection)(_chart, _options, _datum);
        var _d3 = d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]);
        _d3.datum(_datum).transition().duration(150).each('end', function () {
          if (_options.onComplete != null) {
            _options.onComplete();
          }
        }).call(_chart);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_6__["default"].publish('charts.state');
      }, 0);
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.leafletMapChart.js":
/*!******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/charts/ko.leafletMapChart.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ext_leaflet_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ext/leaflet/leaflet */ "./desktop/core/src/desktop/js/ext/leaflet/leaflet.js");
/* harmony import */ var _ext_leaflet_leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ext_leaflet_leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ext_leaflet_leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ext/leaflet/leaflet.markercluster */ "./desktop/core/src/desktop/js/ext/leaflet/leaflet.markercluster.js");
/* harmony import */ var _ext_leaflet_leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ext_leaflet_leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ext_leaflet_leaflet_heat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ext/leaflet/leaflet.heat */ "./desktop/core/src/desktop/js/ext/leaflet/leaflet.heat.js");
/* harmony import */ var _ext_leaflet_leaflet_heat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ext_leaflet_leaflet_heat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ext_leaflet_leaflet_zoombox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ext/leaflet/leaflet.zoombox */ "./desktop/core/src/desktop/js/ext/leaflet/leaflet.zoombox.js");
/* harmony import */ var _ext_leaflet_leaflet_zoombox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ext_leaflet_leaflet_zoombox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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









knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.leafletMapChart = {
  update: function update(element, valueAccessor) {
    var L = window.L;
    var _options = valueAccessor();
    var _data = _options.transformer(valueAccessor().datum);
    function toggleVisibility() {
      if (!_data.message && (_options.visible != null && _options.visible || _options.visible == null || typeof _options == 'undefined')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).show();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).siblings('.leaflet-nodata').remove();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).hide();
        if ((_data.message || _options.visible != null && _options.visible) && !_options.isLoading) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).siblings('.leaflet-nodata').remove();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).before(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('leaflet-nodata').css({
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 700,
            marginTop: '20px'
          }).text(_data.message || window.I18n('No Data Available.')));
        }
      }
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('mapData') == null || jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('mapData') !== knockout__WEBPACK_IMPORTED_MODULE_1__.toJSON(_data) || _options.forceRedraw) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('mapData', knockout__WEBPACK_IMPORTED_MODULE_1__.toJSON(_data));
      var _hasAtLeastOneLat = false;
      _data.forEach(function (item) {
        if (item.lat != null && jquery__WEBPACK_IMPORTED_MODULE_0___default().isNumeric(item.lat)) {
          _hasAtLeastOneLat = true;
        }
      });
      var _hasAtLeastOneLng = false;
      _data.forEach(function (item) {
        if (item.lng != null && jquery__WEBPACK_IMPORTED_MODULE_0___default().isNumeric(item.lng)) {
          _hasAtLeastOneLng = true;
        }
      });
      if (_options.height != null) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).height(_options.height * 1);
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).parents('.tab-pane').length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).height(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).parents('.tab-pane').height() - 100);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).height(300);
      }
      toggleVisibility();
      var _map = null;
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_map') != null) {
        _map = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_map');
        _map.removeLayer(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_markerLayer'));
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_heatLayer')) {
          _map.removeLayer(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_heatLayer'));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_heatLayer', null);
        }
      }
      var _clusterGroup = L.markerClusterGroup({
        maxClusterRadius: 10,
        polygonOptions: {
          weight: 1.5
        }
      });
      var heat;
      if (_hasAtLeastOneLat && _hasAtLeastOneLng) {
        try {
          if (_map == null) {
            if (window.LEAFLET_DEFAULTS.mapOptions.crs) {
              window.LEAFLET_DEFAULTS.mapOptions.crs = L.CRS[window.LEAFLET_DEFAULTS.mapOptions.crs];
            }
            _map = L.map(element, window.LEAFLET_DEFAULTS.mapOptions);
            var tileLayerOptions = {
              layer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
              attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            };
            if (window.LEAFLET_DEFAULTS.layer) {
              tileLayerOptions.layer = window.LEAFLET_DEFAULTS.layer;
            }
            if (window.LEAFLET_DEFAULTS.attribution) {
              tileLayerOptions.attribution = window.LEAFLET_DEFAULTS.attribution;
            }
            if (window.LEAFLET_DEFAULTS.layerOptions) {
              tileLayerOptions = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(tileLayerOptions, window.LEAFLET_DEFAULTS.layerOptions);
            }
            L.tileLayer(tileLayerOptions.layer, tileLayerOptions).addTo(_map);
            if (L.control.zoomBox) {
              var _zoomBox = L.control.zoomBox({
                modal: true
              });
              _map.addControl(_zoomBox);
            }
            if (_options.showMoveCheckbox) {
              var _command = L.control({
                position: jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).width() > 300 ? 'topright' : 'bottomleft'
              });
              _command.onAdd = function (map) {
                var div = L.DomUtil.create('div', 'leaflet-search-command leaflet-bar leaflet-move-label');
                div.innerHTML = '<button id="command' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).parents('.card-widget').attr('id') + '" type="button" class="btn btn-mini disable-feedback"><i class="fa fa-fw fa-square-o"></i> ' + (_options.moveCheckboxLabel ? _options.moveCheckboxLabel : 'Search as I move the map') + '</button>';
                return div;
              };
              _command.addTo(_map);
              if (_options.onRegionChange == null) {
                _options.onRegionChange = function () {};
              }
              var _onRegionChange = function _onRegionChange() {};
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#command' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).parents('.card-widget').attr('id')).on('click', function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('btn-primary');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.fa-fw').toggleClass('fa-check-square');
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('btn-primary')) {
                  if (_options.onRegionChange != null) {
                    _onRegionChange = _options.onRegionChange;
                  }
                } else {
                  _onRegionChange = function _onRegionChange() {};
                }
              });
              knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#command' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).parents('.card-widget').attr('id')).off('click');
              });
              _map.on('boxzoomend', function (e) {
                _onRegionChange(e.boxZoomBounds);
              });
              _map.on('dragend', function () {
                _onRegionChange(_map.getBounds());
              });
              _map.on('zoomend', function () {
                _onRegionChange(_map.getBounds());
              });
              _map.on('viewreset', function () {
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish('leaflet.afterplot', element);
              });
            }
          }
          var heatData = [];
          var sumHeatData = function sumHeatData(data) {
            var sumData = [];
            data.forEach(function (d) {
              var found = false;
              if (d.length === 3) {
                sumData.forEach(function (s) {
                  if (d[0] === s[0] && d[1] === s[1]) {
                    found = true;
                    s[2] += d[2];
                  }
                });
              }
              if (!found) {
                sumData.push(d);
              }
            });
            return sumData;
          };
          var getMaxIntensity = function getMaxIntensity(data) {
            var maxIntensity = 0;
            data.forEach(function (d) {
              if (d[2] > maxIntensity) {
                maxIntensity = d[2];
              }
            });
            return maxIntensity;
          };
          _data.forEach(function (item) {
            if (item && item.lng != null && item.lat != null) {
              var _addMarker = false;
              try {
                var _latLngObj = L.latLng(item.lat, item.lng);
                _addMarker = true;
              } catch (e) {
                if (typeof console != 'undefined') {
                  console.error(e);
                }
              }
              if (_addMarker) {
                var _marker = L.marker([item.lat, item.lng]);
                if (item.isHeat) {
                  if (item.intensity != null) {
                    heatData.push([item.lat, item.lng, item.intensity]);
                  } else {
                    heatData.push([item.lat, item.lng]);
                  }
                } else if (item.label != null) {
                  _marker.bindPopup(jquery__WEBPACK_IMPORTED_MODULE_0___default().isArray(item.label) ? item.label.join('') : item.label);
                }
                _clusterGroup.addLayer(_marker);
              }
            }
          });
          if (heatData.length > 0) {
            heatData = sumHeatData(heatData);
            heat = L.heatLayer(heatData);
            if (heatData[0].length === 3) {
              // it has intensity
              heat.setOptions(getMaxIntensity(heatData));
            }
          }
          window.setTimeout(function () {
            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#command' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).parents('.card-widget').attr('id')).is(':checked')) {
              _map.fitBounds(_clusterGroup.getBounds());
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('.leaflet-tile-pane').children().length > 0) {
              if (heatData.length == 0) {
                _map.addLayer(_clusterGroup);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.leaflet-heatmap-layer').remove();
              } else {
                try {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.leaflet-heatmap-layer').remove();
                  heat.addTo(_map);
                } catch (e) {} // context2D not initialized yet
              }
            }
            if (_options.onComplete != null) {
              _options.onComplete();
            }
          }, 0);
          var resizeSubscription = utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe('resize.leaflet.map', function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_map')) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_map').invalidateSize();
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_markerLayer')) {
                try {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_map').fitBounds(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_markerLayer').getBounds());
                } catch (e) {}
              }
            }
          });
          knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
            resizeSubscription.remove();
          });
        } catch (err) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_7__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_6__.GLOBAL_ERROR_TOPIC, {
            message: err.message
          });
        }
      }
      var previousMarkerLayer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_markerLayer');
      if (previousMarkerLayer) {
        window.setTimeout(function () {
          try {
            previousMarkerLayer.removeLayers(previousMarkerLayer.getLayers());
          } catch (e) {}
        }, 0);
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_map', _map);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_markerLayer', _clusterGroup);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('_heatLayer', heat);
      if (_options.onComplete != null) {
        _options.onComplete();
      }
    } else {
      toggleVisibility();
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.lineChart.js":
/*!************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/charts/ko.lineChart.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _chartUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chartUtils */ "./desktop/core/src/desktop/js/ko/bindings/charts/chartUtils.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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







knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.lineChart = {
  init: function init(element, valueAccessor) {
    window.setTimeout(function () {
      (0,_chartUtils__WEBPACK_IMPORTED_MODULE_4__.lineChartBuilder)(element, valueAccessor(), false);
    }, 0);
  },
  update: function update(element, valueAccessor) {
    var _options = valueAccessor();
    var _datum = _options.transformer(_options.datum);
    var _chart = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('chart');
    if (_chart) {
      window.setTimeout(function () {
        _chart.noData(_datum.message || (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('No Data Available.'));
        var _d3 = d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]);
        if (_datum.length > 0 && _datum[0].values.length > 0 && typeof _datum[0].values[0].x.isValid === 'function') {
          _chart.xAxis.tickFormat(function (d) {
            return d3v3__WEBPACK_IMPORTED_MODULE_1___default().time.format('%Y-%m-%d %H:%M:%S')(new Date(d));
          });
          _chart.onChartUpdate(function () {
            _d3.selectAll('g.nv-x.nv-axis g text').each(function (d) {
              (0,_chartUtils__WEBPACK_IMPORTED_MODULE_4__.insertLinebreaks)(_chart, d, this);
            });
          });
        }
        _d3.datum(_datum).transition().duration(150).each('end', function () {
          if (_options.onComplete != null) {
            _options.onComplete();
          }
        }).call(_chart);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('charts.state');
      }, 0);
    } else if (_datum.length > 0) {
      knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.lineChart.init(element, valueAccessor);
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.partitionChart.js":
/*!*****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/charts/ko.partitionChart.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_hueColors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/hueColors */ "./desktop/core/src/desktop/js/utils/hueColors.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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






knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.partitionChart = {
  render: function render(element, valueAccessor) {
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('charts.state');
    var MIN_HEIGHT_FOR_TOOLTIP = 24;
    var _options = valueAccessor();
    var _data = _options.transformer(valueAccessor().datum);
    var _w = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).width(),
      _h = 300,
      _x = d3v3__WEBPACK_IMPORTED_MODULE_1___default().scale.linear().range([0, _w]),
      _y = d3v3__WEBPACK_IMPORTED_MODULE_1___default().scale.linear().range([0, _h]);
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').empty();
    }
    var _tip = d3v3__WEBPACK_IMPORTED_MODULE_1___default().tip().attr('class', 'd3-tip').html(function (d) {
      if (d.depth === 0) {
        return _options.tooltip || '';
      } else if (d.depth > 0 && d.depth < 2) {
        return d.name + ' (' + d.value + ')';
      } else {
        return d.parent.name + ' - ' + d.name + ' (' + d.value + ')';
      }
    }).offset([-12, 0]);
    var _svg = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg.tip').length > 0 ? d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg.tip')[0]) : d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)[0]).append('svg');
    _svg.attr('class', 'tip').style('height', '0px');
    _svg.call(_tip);
    var _vis = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0 ? d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]) : d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)[0]).append('svg');
    _vis.attr('class', 'partitionChart').style('width', _w + 'px').style('height', _h + 'px').attr('width', _w).attr('height', _h);
    var _partition = d3v3__WEBPACK_IMPORTED_MODULE_1___default().layout.partition().value(function (d) {
      return d.size;
    });
    var g = _vis.selectAll('g').data(_partition.nodes(_data)).enter().append('svg:g').attr('transform', function (d) {
      return 'translate(' + _x(d.y) + ',' + _y(d.x) + ')';
    }).on('mouseover', function (d, i) {
      if (element.querySelectorAll('rect')[i].getBBox().height < MIN_HEIGHT_FOR_TOOLTIP || d.depth === 0) {
        _tip.attr('class', 'd3-tip').show(d);
      }
      if (typeof this.__data__.parent === 'undefined') {
        return;
      }
      d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(this).select('rect').classed('mouseover', true);
    }).on('mouseout', function (d, i) {
      if (element.querySelectorAll('rect')[i].getBBox().height < MIN_HEIGHT_FOR_TOOLTIP || d.depth === 0) {
        _tip.attr('class', 'd3-tip').show(d);
        _tip.hide();
      }
      d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(this).select('rect').classed('mouseover', false);
    });
    if (typeof _options.zoomable == 'undefined' || _options.zoomable) {
      g.on('click', click).on('dblclick', function (d) {
        if (typeof _options.onClick != 'undefined' && d.depth > 0) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('charts.state', {
            updating: true
          });
          _options.onClick(d);
        }
      });
    } else {
      g.on('click', function (d) {
        if (typeof _options.onClick != 'undefined' && d.depth > 0) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('charts.state', {
            updating: true
          });
          _options.onClick(d);
        }
      });
    }
    var _kx = _w / _data.dx,
      _ky = _h / 1;
    var _colors = [_utils_hueColors__WEBPACK_IMPORTED_MODULE_3__["default"].cuiD3Scale('gray')[0]];
    g.append('svg:rect').attr('width', _data.dy * _kx).attr('height', function (d) {
      return d.dx * _ky;
    }).attr('class', function (d) {
      return d.children ? 'parent' : 'child';
    }).attr('stroke', function () {
      return _utils_hueColors__WEBPACK_IMPORTED_MODULE_3__["default"].cuiD3Scale('gray')[3];
    }).attr('fill', function (d) {
      var _fill = _colors[d.depth] || _colors[_colors.length - 1];
      if (d.obj && _options.fqs) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(_options.fqs(), function (cnt, item) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default().each(item.filter(), function (icnt, filter) {
            if (JSON.stringify(filter.value()) === JSON.stringify(d.obj.fq_values)) {
              _fill = _utils_hueColors__WEBPACK_IMPORTED_MODULE_3__["default"].cuiD3Scale('gray')[3];
            }
          });
        });
      }
      return _fill;
    });
    g.append('svg:text').attr('transform', transform).attr('dy', '.35em').style('opacity', function (d) {
      return d.dx * _ky > 12 ? 1 : 0;
    }).text(function (d) {
      if (d.depth < 2) {
        return d.name + ' (' + d.value + ')';
      } else {
        return d.parent.name + ' - ' + d.name + ' (' + d.value + ')';
      }
    });
    d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(window).on('click', function () {
      click(_data);
    });
    function click(d) {
      _tip.hide();
      if (!d.children) {
        return;
      }
      _kx = (d.y ? _w - 40 : _w) / (1 - d.y);
      _ky = _h / d.dx;
      _x.domain([d.y, 1]).range([d.y ? 40 : 0, _w]);
      _y.domain([d.x, d.x + d.dx]);
      var t = g.transition().delay(250).duration((d3v3__WEBPACK_IMPORTED_MODULE_1___default().event.altKey) ? 7500 : 750).attr('transform', function (d) {
        return 'translate(' + _x(d.y) + ',' + _y(d.x) + ')';
      });
      t.select('rect').attr('width', d.dy * _kx).attr('height', function (d) {
        return d.dx * _ky;
      });
      t.select('text').attr('transform', transform).style('opacity', function (d) {
        return d.dx * _ky > 12 ? 1 : 0;
      });
      d3v3__WEBPACK_IMPORTED_MODULE_1___default().event.stopPropagation();
    }
    function transform(d) {
      return 'translate(8,' + d.dx * _ky / 2 + ')';
    }
    if (_options.onComplete) {
      _options.onComplete();
    }
  },
  init: function init(element, valueAccessor) {
    knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.partitionChart.render(element, valueAccessor);
  },
  update: function update(element, valueAccessor) {
    knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.partitionChart.render(element, valueAccessor);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.pieChart.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/charts/ko.pieChart.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ext/nv.d3.1.1.15b.custom */ "./desktop/core/src/desktop/js/ext/nv.d3.1.1.15b.custom.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_html_htmlEncode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/html/htmlEncode */ "./desktop/core/src/desktop/js/utils/html/htmlEncode.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
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








knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.pieChart = {
  init: function init(element, valueAccessor) {
    window.setTimeout(function () {
      var _options = valueAccessor();
      var _data = _options.transformer(_options.data);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('marginLeft', 'auto');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('marginRight', 'auto');
      if (typeof _options.maxWidth != 'undefined') {
        var _max = _options.maxWidth * 1;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).width(Math.min(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).parent().width(), _max));
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0 && _data.length === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').empty();
      }
      if (_data.length > 0 && isNaN(_data[0].value)) {
        _data = [];
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').empty();
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).is(':visible')) {
        _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_3__["default"].addGraph(function () {
          var _chart = _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_3__["default"].models.growingPieChart().x(function (d) {
            return d.label;
          }).y(function (d) {
            return d.value;
          }).height(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).width()).showLabels(true).showLegend(false).tooltipContent(function (key, y) {
            return '<h3>' + (0,utils_html_htmlEncode__WEBPACK_IMPORTED_MODULE_5__["default"])(key) + '</h3><p>' + y + '</p>';
          });
          _chart.noData(_data.message || (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('No Data Available.'));
          var _d3 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0 ? d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]) : d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)[0]).append('svg');
          _d3.datum(_data).transition().duration(150).each('end', _options.onComplete != null ? _options.onComplete : void 0).call(_chart);
          if (_options.fqs) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default().each(_options.fqs(), function (cnt, item) {
              if (item.id() === _options.data.widget_id && item.field() === _options.field()) {
                _chart.selectSlices(jquery__WEBPACK_IMPORTED_MODULE_0___default().map(item.filter(), function (it) {
                  return it.value();
                }));
              }
            });
          }
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('chart', _chart);
          var _resizeTimeout = -1;
          _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_3__["default"].utils.windowResize(function () {
            window.clearTimeout(_resizeTimeout);
            _resizeTimeout = window.setTimeout(function () {
              _chart.update();
            }, 200);
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).on('forceUpdate', function () {
            _chart.update();
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).height(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).width());
          var _parentSelector = typeof _options.parentSelector != 'undefined' ? _options.parentSelector : '.card-widget';
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).parents(_parentSelector).on('resize', function () {
            if (typeof _options.maxWidth != 'undefined') {
              var _max2 = _options.maxWidth * 1;
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).width(Math.min(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).parent().width(), _max2));
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).height(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).width());
            _chart.update();
          });
          return _chart;
        }, function () {
          var _d3 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0 ? d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]) : d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)[0]).append('svg');
          _d3.selectAll('.nv-slice').on('click', function (d) {
            if (typeof _options.onClick != 'undefined') {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('charts.state', {
                updating: true
              });
              _options.onClick(d);
            }
          });
        });
      }
    }, 0);
  },
  update: function update(element, valueAccessor) {
    var _options = valueAccessor();
    var _data = _options.transformer(_options.data);
    var _chart = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('chart');
    if (_chart) {
      _chart.noData(_data.message || (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["default"])('No Data Available.'));
      var _d3 = d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]);
      _d3.datum(_data).transition().duration(150).each('end', _options.onComplete != null ? _options.onComplete : void 0).call(_chart);
      if (_options.fqs) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(_options.fqs(), function (cnt, item) {
          if (item.id() === _options.data.widget_id && item.field() === _options.field()) {
            _chart.selectSlices(jquery__WEBPACK_IMPORTED_MODULE_0___default().map(item.filter(), function (it) {
              return it.value();
            }));
          }
        });
      }
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('charts.state');
    } else if (_data.length > 0) {
      knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.pieChart.init(element, valueAccessor);
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.scatterChart.js":
/*!***************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/charts/ko.scatterChart.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ext/nv.d3.1.1.15b.custom */ "./desktop/core/src/desktop/js/ext/nv.d3.1.1.15b.custom.js");
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





knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.scatterChart = {
  update: function update(element, valueAccessor) {
    var options = valueAccessor();
    var _datum = options.transformer(options.datum);
    window.setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).height(300);
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0 && (_datum.length === 0 || _datum[0].values.length === 0)) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').empty();
      }
      if (_datum.length > 0 && _datum[0].values.length > 0 && (isNaN(_datum[0].values[0].x) || isNaN(_datum[0].values[0].y))) {
        _datum = [];
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').empty();
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).is(':visible')) {
        _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_3__["default"].addGraph(function () {
          var _chart = _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_3__["default"].models.scatterChart().transitionDuration(350).color(d3v3__WEBPACK_IMPORTED_MODULE_1___default().scale.category10().range()).useVoronoi(false);
          _chart.tooltipContent(function (key, x, y, obj) {
            return '<h3>' + key + '</h3><div class="center">' + obj.point.size + '</div>';
          });
          _chart.xAxis.tickFormat(d3v3__WEBPACK_IMPORTED_MODULE_1___default().format('.02f'));
          _chart.yAxis.tickFormat(d3v3__WEBPACK_IMPORTED_MODULE_1___default().format('.02f'));
          _chart.scatter.onlyCircles(true);
          var _d3 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0 ? d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]) : d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)[0]).append('svg');
          _d3.datum(_datum).transition().duration(150).each('end', options.onComplete != null ? options.onComplete : void 0).call(_chart);
          var _resizeTimeout = -1;
          _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_3__["default"].utils.windowResize(function () {
            window.clearTimeout(_resizeTimeout);
            _resizeTimeout = window.setTimeout(function () {
              _chart.update();
            }, 200);
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).on('forceUpdate', function () {
            _chart.update();
          });
          return _chart;
        });
      }
    }, 0);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.timelineChart.js":
/*!****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/charts/ko.timelineChart.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _chartUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chartUtils */ "./desktop/core/src/desktop/js/ko/bindings/charts/chartUtils.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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







knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.timelineChart = {
  init: function init(element, valueAccessor) {
    if (valueAccessor().type && valueAccessor().type() === 'line') {
      window.setTimeout(function () {
        (0,_chartUtils__WEBPACK_IMPORTED_MODULE_4__.lineChartBuilder)(element, valueAccessor(), true);
      }, 0);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('type', 'line');
    } else {
      window.setTimeout(function () {
        (0,_chartUtils__WEBPACK_IMPORTED_MODULE_4__.barChartBuilder)(element, valueAccessor(), true);
      }, 0);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('type', 'bar');
    }
  },
  update: function update(element, valueAccessor) {
    var _options = valueAccessor();
    if (valueAccessor().type && valueAccessor().type() !== jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('type')) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg').remove();
      }
      if (valueAccessor().type() === 'line') {
        window.setTimeout(function () {
          (0,_chartUtils__WEBPACK_IMPORTED_MODULE_4__.lineChartBuilder)(element, valueAccessor(), true);
        }, 0);
      } else {
        window.setTimeout(function () {
          (0,_chartUtils__WEBPACK_IMPORTED_MODULE_4__.barChartBuilder)(element, valueAccessor(), true);
        }, 0);
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('type', valueAccessor().type());
    }
    var _datum = _options.transformer(_options.datum, true);
    var _chart = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('chart');
    if (_chart) {
      window.setTimeout(function () {
        _chart.noData(_datum.message || (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('No Data Available.'));
        if (_chart.multibar) {
          _chart.multibar.stacked(typeof _options.stacked != 'undefined' ? _options.stacked : false);
        }
        (0,_chartUtils__WEBPACK_IMPORTED_MODULE_4__.handleSelection)(_chart, _options, _datum);
        var _d3 = d3v3__WEBPACK_IMPORTED_MODULE_1___default().select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('svg')[0]);
        _d3.datum(_datum).transition().duration(150).each('end', function () {
          if (_options.onComplete != null) {
            _options.onComplete();
          }
        }).call(_chart);
        _d3.selectAll('g.nv-x.nv-axis g text').each(function (d) {
          (0,_chartUtils__WEBPACK_IMPORTED_MODULE_4__.insertLinebreaks)(_chart, d, this);
        });
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__["default"].publish('charts.state');
      }, 0);
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/charts/mapchart/datamap.js":
/*!****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/charts/mapchart/datamap.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ext_topojson_v1_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ext/topojson.v1.min */ "./desktop/core/src/desktop/js/ext/topojson.v1.min.js");
/* harmony import */ var _ext_topojson_v1_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ext_topojson_v1_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
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





var d3 = (d3v3__WEBPACK_IMPORTED_MODULE_0___default());
var defaultOptions = {
  scope: 'world',
  setProjection: setProjection,
  projection: 'equirectangular',
  dataType: 'json',
  onClick: function onClick() {},
  done: function done() {},
  legendData: [],
  fills: {
    defaultFill: '#ABDDA4'
  },
  geographyConfig: {
    dataUrl: null,
    hideAntarctica: true,
    borderWidth: 1,
    borderColor: '#FDFDFD',
    popupTemplate: function popupTemplate(geography, data) {
      return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
    },
    popupOnHover: true,
    highlightOnHover: true,
    highlightFillColor: '#FC8D59',
    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
    selectedFillColor: '#666666',
    selectedBorderColor: '#666666',
    highlightBorderWidth: 2
  },
  bubblesConfig: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    popupOnHover: true,
    popupTemplate: function popupTemplate(geography, data) {
      return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
    },
    fillOpacity: 0.75,
    animate: true,
    highlightOnHover: true,
    highlightFillColor: '#FC8D59',
    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
    highlightBorderWidth: 2,
    highlightFillOpacity: 0.85,
    exitDelay: 100
  },
  arcConfig: {
    strokeColor: '#DD1C77',
    strokeWidth: 1,
    arcSharpness: 1,
    animationSpeed: 600
  }
};
function addContainer(element) {
  this.svg = d3.select(element).append('svg').attr('width', element.offsetWidth).attr('class', 'datamap').attr('height', element.offsetHeight);
  return this.svg;
}

// setProjection takes the svg element and options
function setProjection(element, options) {
  var projection;
  if (options && typeof options.scope === 'undefined') {
    options.scope = 'world';
  }
  var defaultTranslate = [element.offsetWidth / 2, element.offsetHeight / (options.projection === 'mercator' ? 1.45 : 1.8)];
  switch (options.scope) {
    case 'usa':
      projection = d3.geo.albersUsa().scale(element.offsetWidth).translate([element.offsetWidth / 2, element.offsetHeight / 2]);
      break;
    case 'world':
      projection = d3.geo[options.projection]().scale((element.offsetWidth + 1) / 2 / Math.PI).translate(defaultTranslate);
      break;
    case 'europe':
      projection = d3.geo[options.projection]().center([8.43727461750008, 51.16822764400005]).scale(380).translate(defaultTranslate);
      break;
    case 'chn':
      projection = d3.geo[options.projection]().center([104.18741784700012, 34.672410587000066]).rotate([0, 0]).scale(380).translate(defaultTranslate);
      break;
    case 'aus':
      projection = d3.geo[options.projection]().center([136.0129500660001, -31.995293877999913]).rotate([0, 0]).scale(350).translate(defaultTranslate);
      break;
    case 'bra':
      projection = d3.geo[options.projection]().center([-51.447769636499956, -14.23752777099994]).rotate([0, 0]).scale(320).translate(defaultTranslate);
      break;
    case 'can':
      projection = d3.geo[options.projection]().center([-96.81107793155442, 62.3928040600001]).rotate([0, 0]).scale(300).translate(defaultTranslate);
      break;
    case 'fra':
      projection = d3.geo[options.projection]().center([2, 46]).rotate([0, 0]).scale(1300).translate(defaultTranslate);
      break;
    case 'deu':
      projection = d3.geo[options.projection]().center([10.43727461750008, 51.16822764400005]).rotate([0, 0]).scale(1600).translate(defaultTranslate);
      break;
    case 'ita':
      projection = d3.geo[options.projection]().center([12.560077144500099, 41.287229413500036]).rotate([0, 0]).scale(1300).translate(defaultTranslate);
      break;
    case 'jpn':
      projection = d3.geo[options.projection]().center([138.4618839855001, 34.779750881000126]).rotate([0, 0]).scale(700).translate(defaultTranslate);
      break;
    case 'gbr':
      projection = d3.geo[options.projection]().center([-3, 54.501734]).rotate([0, 0]).scale(1300).translate(defaultTranslate);
      break;
  }
  var path = d3.geo.path().projection(projection);
  return {
    path: path,
    projection: projection
  };
}
function addStyleBlock() {
  if (d3.select('.datamaps-style-block').empty()) {
    d3.select('head').attr('class', 'datamaps-style-block').append('style').html('.datamap path {stroke: #FFFFFF; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 3px; margin-left: 14px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }');
  }
}
function drawSubunits(data) {
  var fillData = this.options.fills,
    colorCodeData = this.options.data || {},
    geoConfig = this.options.geographyConfig,
    onClick = this.options.onClick;
  var subunits = this.svg.select('g.datamaps-subunits');
  if (subunits.empty()) {
    subunits = this.addLayer('datamaps-subunits', null, true);
  }
  var geoData = _ext_topojson_v1_min__WEBPACK_IMPORTED_MODULE_2___default().feature(data, data.objects[this.options.scope]).features;
  if (geoConfig.hideAntarctica) {
    geoData = geoData.filter(function (feature) {
      return feature.id !== 'ATA';
    });
  }
  var geo = subunits.selectAll('path.datamaps-subunit').data(geoData);
  geo.enter().append('path').attr('d', this.path).attr('class', function (d) {
    return 'datamaps-subunit ' + d.id;
  }).attr('data-info', function (d) {
    return JSON.stringify(colorCodeData[d.id]);
  }).style('fill', function (d) {
    var fillColor;
    if (colorCodeData[d.id]) {
      fillColor = fillData[colorCodeData[d.id].fillKey];
      if (colorCodeData[d.id].selected) {
        fillColor = geoConfig.selectedFillColor;
      }
    }
    return fillColor || fillData.defaultFill;
  }).on('click', function (d) {
    if (colorCodeData[d.id] && typeof onClick != 'undefined') {
      onClick(colorCodeData[d.id]);
    }
  }).style('stroke-width', function (d) {
    var strokeWidth = geoConfig.borderWidth;
    if (colorCodeData[d.id] && colorCodeData[d.id].selected) {
      strokeWidth = 2;
    }
    return strokeWidth;
  }).style('stroke', function (d) {
    var strokeColor = geoConfig.borderColor;
    if (colorCodeData[d.id] && colorCodeData[d.id].selected) {
      strokeColor = geoConfig.selectedBorderColor;
    }
    return strokeColor;
  });
}
function handleGeographyConfig() {
  var svg = this.svg;
  var self = this;
  var options = this.options.geographyConfig;
  if (options.highlightOnHover || options.popupOnHover) {
    svg.selectAll('.datamaps-subunit').on('mouseover', function (d) {
      var $this = d3.select(this);
      if (options.highlightOnHover) {
        var previousAttributes = {
          fill: $this.style('fill'),
          stroke: $this.style('stroke'),
          'stroke-width': $this.style('stroke-width'),
          'fill-opacity': $this.style('fill-opacity')
        };
        $this.style('fill', options.highlightFillColor).style('stroke', options.highlightBorderColor).style('stroke-width', options.highlightBorderWidth).style('fill-opacity', options.highlightFillOpacity).attr('data-previousAttributes', JSON.stringify(previousAttributes));

        //as per discussion on https://github.com/markmarkoh/datamaps/issues/19
        if (!/MSIE/.test(navigator.userAgent)) {
          moveToFront.call(this);
        }
      }
      if (options.popupOnHover) {
        self.updatePopup($this, d, options, svg);
      }
    }).on('mouseout', function () {
      var $this = d3.select(this);
      if (options.highlightOnHover) {
        //reapply previous attributes
        var previousAttributes = JSON.parse($this.attr('data-previousAttributes'));
        for (var attr in previousAttributes) {
          $this.style(attr, previousAttributes[attr]);
        }
      }
      $this.on('mousemove', null);
      d3.selectAll('.datamaps-hoverover').style('display', 'none');
    });
  }
  function moveToFront() {
    this.parentNode.appendChild(this);
  }
}

//plugin to add a simple map legend
function addLegend(layer, data, options) {
  data = data || {};
  if (!this.options.fills) {
    return;
  }
  function compareLegendValues(a, b) {
    if (a.idx < b.idx) {
      return -1;
    }
    if (a.idx > b.idx) {
      return 1;
    }
    return 0;
  }
  var html = '<dl>';
  var _fills = this.options.fills;
  this.options.legendData.sort(compareLegendValues).forEach(function (fill) {
    html += '<dd style="background-color:' + _fills['fill_' + fill.idx] + '">&nbsp;</dd>';
    html += '<dt>' + fill.cat + '</dt>';
  });
  html += '</dl>';
  d3.select(this.options.element).append('div').attr('class', 'datamaps-legend').html(html);
}
function handleArcs(layer, data, options) {
  var self = this;
  if (!data || data && !data.slice) {
    throw 'Datamaps Error - arcs must be an array';
  }
  if (typeof options === 'undefined') {
    options = defaultOptions.arcConfig;
  }
  var arcs = layer.selectAll('path.datamaps-arc').data(data, JSON.stringify);
  arcs.enter().append('svg:path').attr('class', 'datamaps-arc').style('stroke-linecap', 'round').style('stroke', function (datum) {
    if (datum.options && datum.options.strokeColor) {
      return datum.options.strokeColor;
    }
    return options.strokeColor;
  }).style('fill', 'none').style('stroke-width', function (datum) {
    if (datum.options && datum.options.strokeWidth) {
      return datum.options.strokeWidth;
    }
    return options.strokeWidth;
  }).attr('d', function (datum) {
    var originXY = self.latLngToXY(datum.origin.latitude, datum.origin.longitude);
    var destXY = self.latLngToXY(datum.destination.latitude, datum.destination.longitude);
    var midXY = [(originXY[0] + destXY[0]) / 2, (originXY[1] + destXY[1]) / 2];
    return 'M' + originXY[0] + ',' + originXY[1] + 'S' + (midXY[0] + 50 * options.arcSharpness) + ',' + (midXY[1] - 75 * options.arcSharpness) + ',' + destXY[0] + ',' + destXY[1];
  }).transition().delay(100).style('fill', function () {
    /*
       Thank you Jake Archibald, this is awesome.
       Source: http://jakearchibald.com/2013/animated-line-drawing-svg/
       */
    var length = this.getTotalLength();
    this.style.transition = this.style.WebkitTransition = 'none';
    this.style.strokeDasharray = length + ' ' + length;
    this.style.strokeDashoffset = length;
    this.getBoundingClientRect();
    this.style.transition = this.style.WebkitTransition = 'stroke-dashoffset ' + options.animationSpeed + 'ms ease-out';
    this.style.strokeDashoffset = '0';
    return 'none';
  });
  arcs.exit().transition().style('opacity', 0).remove();
}
function handleLabels(layer, options) {
  var self = this;
  options = options || {};
  var labelStartCoodinates = this.projection([-67.707617, 42.722131]);
  this.svg.selectAll('.datamaps-subunit').attr('data-foo', function (d) {
    var center = self.path.centroid(d);
    var xOffset = 7.5,
      yOffset = 5;
    if (['FL', 'KY', 'MI'].indexOf(d.id) > -1) {
      xOffset = -2.5;
    }
    if (d.id === 'NY') {
      xOffset = -1;
    }
    if (d.id === 'MI') {
      yOffset = 18;
    }
    if (d.id === 'LA') {
      xOffset = 13;
    }
    var x, y;
    x = center[0] - xOffset;
    y = center[1] + yOffset;
    var smallStateIndex = ['VT', 'NH', 'MA', 'RI', 'CT', 'NJ', 'DE', 'MD', 'DC'].indexOf(d.id);
    if (smallStateIndex > -1) {
      var yStart = labelStartCoodinates[1];
      x = labelStartCoodinates[0];
      y = yStart + smallStateIndex * (2 + (options.fontSize || 12));
      layer.append('line').attr('x1', x - 3).attr('y1', y - 5).attr('x2', center[0]).attr('y2', center[1]).style('stroke', options.labelColor || '#000').style('stroke-width', options.lineWidth || 1);
    }
    layer.append('text').attr('x', x).attr('y', y).style('font-size', (options.fontSize || 10) + 'px').style('font-family', options.fontFamily || 'Verdana').style('fill', options.labelColor || '#000').text(d.id);
    return 'bar';
  });
}
function handleBubbles(layer, data, options) {
  var self = this,
    fillData = this.options.fills,
    svg = this.svg;
  if (!data || data && !data.slice) {
    throw 'Datamaps Error - bubbles must be an array';
  }
  var bubbles = layer.selectAll('circle.datamaps-bubble').data(data, JSON.stringify);
  bubbles.enter().append('svg:circle').attr('class', 'datamaps-bubble').attr('cx', function (datum) {
    var latLng;
    if (datumHasCoords(datum)) {
      latLng = self.latLngToXY(datum.latitude, datum.longitude);
    } else if (datum.centered) {
      latLng = self.path.centroid(svg.select('path.' + datum.centered).data()[0]);
    }
    if (latLng) {
      return latLng[0];
    }
  }).attr('cy', function (datum) {
    var latLng;
    if (datumHasCoords(datum)) {
      latLng = self.latLngToXY(datum.latitude, datum.longitude);
    } else if (datum.centered) {
      latLng = self.path.centroid(svg.select('path.' + datum.centered).data()[0]);
    }
    if (latLng) {
      return latLng[1];
    }
  }).attr('r', 0) //for animation purposes
  .attr('data-info', function (d) {
    return JSON.stringify(d);
  }).style('stroke', options.borderColor).style('stroke-width', options.borderWidth).style('fill-opacity', options.fillOpacity).style('fill', function (datum) {
    var fillColor = fillData[datum.fillKey];
    return fillColor || fillData.defaultFill;
  }).on('mouseover', function (datum) {
    var $this = d3.select(this);
    if (options.highlightOnHover) {
      //save all previous attributes for mouseout
      var previousAttributes = {
        fill: $this.style('fill'),
        stroke: $this.style('stroke'),
        'stroke-width': $this.style('stroke-width'),
        'fill-opacity': $this.style('fill-opacity')
      };
      $this.style('fill', options.highlightFillColor).style('stroke', options.highlightBorderColor).style('stroke-width', options.highlightBorderWidth).style('fill-opacity', options.highlightFillOpacity).attr('data-previousAttributes', JSON.stringify(previousAttributes));
    }
    if (options.popupOnHover) {
      self.updatePopup($this, datum, options, svg);
    }
  }).on('mouseout', function (datum) {
    var $this = d3.select(this);
    if (options.highlightOnHover) {
      //reapply previous attributes
      var previousAttributes = JSON.parse($this.attr('data-previousAttributes'));
      for (var attr in previousAttributes) {
        $this.style(attr, previousAttributes[attr]);
      }
    }
    d3.selectAll('.datamaps-hoverover').style('display', 'none');
  }).transition().duration(400).attr('r', function (datum) {
    return datum.radius;
  });
  bubbles.exit().transition().delay(options.exitDelay).attr('r', 0).remove();
  function datumHasCoords(datum) {
    return typeof datum !== 'undefined' && typeof datum.latitude !== 'undefined' && typeof datum.longitude !== 'undefined';
  }
}

//stolen from underscore.js
function defaults(obj) {
  Array.prototype.slice.call(arguments, 1).forEach(function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] == null) {
          obj[prop] = source[prop];
        }
      }
    }
  });
  return obj;
}

/**************************************
 Public Functions
 ***************************************/

function Datamap(options) {
  if (typeof d3 === 'undefined' || typeof (_ext_topojson_v1_min__WEBPACK_IMPORTED_MODULE_2___default()) === 'undefined') {
    throw new Error('Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map');
  }

  //set options for global use
  this.options = defaults(options, defaultOptions);
  this.options.geographyConfig = defaults(options.geographyConfig, defaultOptions.geographyConfig);
  this.options.bubblesConfig = defaults(options.bubblesConfig, defaultOptions.bubblesConfig);
  this.options.arcConfig = defaults(options.arcConfig, defaultOptions.arcConfig);

  //add the SVG container
  if (d3.select(this.options.element).select('svg').length > 0) {
    addContainer.call(this, this.options.element);
  }

  /* Add core plugins to this instance */
  this.addPlugin('bubbles', handleBubbles);
  this.addPlugin('legend', addLegend);
  this.addPlugin('arc', handleArcs);
  this.addPlugin('labels', handleLabels);

  //append style block with basic hoverover styles
  if (!this.options.disableDefaultStyles) {
    addStyleBlock();
  }
  return this.draw();
}

// actually draw the features(states & countries)
Datamap.prototype.draw = function () {
  //save off in a closure
  var self = this;
  var options = self.options;

  //set projections and paths based on scope
  var pathAndProjection = options.setProjection.apply(self, [options.element, options]);
  this.path = pathAndProjection.path;
  this.projection = pathAndProjection.projection;
  _api_apiHelper__WEBPACK_IMPORTED_MODULE_3__["default"].fetchTopo({
    location: options.scope === 'europe' ? 'world' : options.scope
  }).done(function (topoData) {
    var topo = JSON.parse(topoData);
    if (options.scope === 'europe') {
      var europeTopo = jquery__WEBPACK_IMPORTED_MODULE_1___default().extend(true, {}, topo);
      europeTopo.objects['europe'] = europeTopo.objects['world'];
      delete europeTopo.objects['world'];
      topo = europeTopo;
    }
    self.customTopo = true;
    draw(topo);
  });
  return this;
  function draw(data) {
    // if fetching remote data, draw the map first then call `updateChoropleth`
    if (self.options.dataUrl) {
      //allow for csv or json data types
      d3[self.options.dataType](self.options.dataUrl, function (data) {
        //in the case of csv, transform data to object
        if (self.options.dataType === 'csv' && data && data.slice) {
          var tmpData = {};
          for (var i = 0; i < data.length; i++) {
            tmpData[data[i].id] = data[i];
          }
          data = tmpData;
        }
        Datamap.prototype.updateChoropleth.call(self, data);
      });
    }
    drawSubunits.call(self, data);
    handleGeographyConfig.call(self);
    if (self.options.geographyConfig.popupOnHover || self.options.bubblesConfig.popupOnHover) {
      d3.select(self.options.element).append('div').attr('class', 'datamaps-hoverover').style('z-index', 10001).style('position', 'absolute');
    }

    //fire off finished callback
    self.options.done(self);
  }
};

/**************************************
 Utilities
 ***************************************/

//convert lat/lng coords to X / Y coords
Datamap.prototype.latLngToXY = function (lat, lng) {
  return this.projection([lng, lat]);
};

//add <g> layer to root SVG
Datamap.prototype.addLayer = function (className, id, first) {
  var layer;
  if (first) {
    layer = this.svg.insert('g', ':first-child');
  } else {
    layer = this.svg.append('g');
  }
  return layer.attr('id', id || '').attr('class', className || '');
};
Datamap.prototype.updateChoropleth = function (data) {
  var svg = this.svg;
  for (var subunit in data) {
    if (data.hasOwnProperty(subunit)) {
      var color = void 0;
      var subunitData = data[subunit];
      if (!subunit) {
        continue;
      } else if (typeof subunitData === 'string') {
        color = subunitData;
      } else if (typeof subunitData.color === 'string') {
        color = subunitData.color;
      } else {
        color = this.options.fills[subunitData.fillKey];
      }
      //if it's an object, overriding the previous data
      if (subunitData === Object(subunitData)) {
        this.options.data[subunit] = defaults(subunitData, this.options.data[subunit] || {});
        this.svg.select('.' + subunit).attr('data-info', JSON.stringify(this.options.data[subunit]));
      }
      svg.selectAll('.' + subunit).transition().style('fill', color);
    }
  }
};
Datamap.prototype.updatePopup = function (element, d, options) {
  var self = this;
  element.on('mousemove', null);
  element.on('mousemove', function () {
    var position = d3.mouse(this);
    var svgHeight = d3.select(self.svg[0][0].parentNode)[0][0].offsetHeight || -1;
    d3.select(self.svg[0][0].parentNode).select('.datamaps-hoverover').style('top', position[1] + 30 + 'px').html(function () {
      var data = JSON.parse(element.attr('data-info'));
      //if ( !data ) return '';
      return options.popupTemplate(d, data);
    }).style('left', position[0] + 'px');
    var popupHeight = d3.select(self.svg[0][0].parentNode).select('.datamaps-hoverover')[0][0].offsetHeight;
    if (position[1] + 30 + popupHeight > svgHeight) {
      d3.select(self.svg[0][0].parentNode).select('.datamaps-hoverover').style('top', position[1] - 10 - popupHeight + 'px');
    }
  });
  d3.select(self.svg[0][0].parentNode).select('.datamaps-hoverover').style('display', 'block');
};
Datamap.prototype.addPlugin = function (name, pluginFn) {
  if (typeof Datamap.prototype[name] === 'undefined') {
    Datamap.prototype[name] = function (data, options, callback, createNewLayer) {
      var layer;
      if (typeof createNewLayer === 'undefined') {
        createNewLayer = false;
      }
      if (typeof options === 'function') {
        callback = options;
        options = undefined;
      }
      options = defaults(options || {}, defaultOptions[name + 'Config']);

      //add a single layer, reuse the old layer
      if (!createNewLayer && this.options[name + 'Layer']) {
        layer = this.options[name + 'Layer'];
        options = options || this.options[name + 'Options'];
      } else {
        layer = this.addLayer(name);
        this.options[name + 'Layer'] = layer;
        this.options[name + 'Options'] = options;
      }
      pluginFn.apply(this, [layer, data, options]);
      if (callback) {
        callback(layer);
      }
    };
  }
};
(jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.datamaps) = function (options, callback) {
  options = options || {};
  options.element = this[0];
  var datamap = new Datamap(options);
  if (typeof callback === 'function') {
    callback(datamap, options);
  }
  return this;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Datamap);

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/charts/mapchart/ko.mapChart.js":
/*!********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/charts/mapchart/ko.mapChart.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ext/nv.d3.1.1.15b.custom */ "./desktop/core/src/desktop/js/ext/nv.d3.1.1.15b.custom.js");
/* harmony import */ var _datamap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datamap */ "./desktop/core/src/desktop/js/ko/bindings/charts/mapchart/datamap.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/hueColors */ "./desktop/core/src/desktop/js/utils/hueColors.js");
/* harmony import */ var _utils_hueGeo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/hueGeo */ "./desktop/core/src/desktop/js/utils/hueGeo.js");
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








knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.mapChart = {
  render: function render(element, valueAccessor) {
    var _options = valueAccessor();
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    window.clearTimeout($element.data('drawThrottle'));
    var timeout = window.setTimeout(function () {
      $element.empty();
      $element.css('position', 'relative');
      $element.css('marginLeft', 'auto');
      $element.css('marginRight', 'auto');
      if (typeof _options.maxWidth != 'undefined') {
        var _max = _options.maxWidth * 1;
        $element.width(Math.min($element.parent().width(), _max));
      } else {
        $element.width($element.parent().width() - 10);
      }
      $element.height($element.width() / 2.23);
      var scopeObservable = _options.data.scope || _options.data.chartScope;
      var _scope = scopeObservable ? String(knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(scopeObservable)) : 'world';
      var _data = _options.transformer(_options.data);
      var _is2d = false;
      var _pivotCategories = [];
      var _maxWeight = 0;
      function comparePivotValues(a, b) {
        if (a.count < b.count) {
          return 1;
        }
        if (a.count > b.count) {
          return -1;
        }
        return 0;
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(_data).each(function (cnt, item) {
        if (item.value > _maxWeight) {
          _maxWeight = item.value;
        }
        if (item.obj.is2d) {
          _is2d = true;
        }
        if (item.obj.pivot && item.obj.pivot.length > 0) {
          item.obj.pivot.forEach(function (piv) {
            var _category = null;
            _pivotCategories.forEach(function (category) {
              if (category.value === piv.value) {
                _category = category;
                if (piv.count > _category.count) {
                  _category.count = piv.count;
                }
              }
            });
            if (_category == null) {
              _category = {
                value: piv.value,
                count: -1
              };
              _pivotCategories.push(_category);
            }
          });
        }
      });
      _pivotCategories.sort(comparePivotValues);
      var _chunk = _maxWeight / _data.length;
      var _mapdata = {};
      var _maphovers = {};
      var _fills = {};
      var _legend = [];
      var _noncountries = [];
      if (_options.isScale) {
        _fills['defaultFill'] = _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].WHITE;
        var _colors = _is2d ? _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].d3Scale() : _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].scale(_utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].LIGHT_BLUE, _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].DARK_BLUE, _data.length);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_colors).each(function (cnt, item) {
          _fills['fill_' + cnt] = item;
        });
        var getHighestCategoryValue = function getHighestCategoryValue(cnt, item) {
          var _cat = '';
          var _max = -1;
          if (item.obj.pivot && item.obj.pivot.length > 0) {
            item.obj.pivot.forEach(function (piv) {
              if (piv.count > _max) {
                _max = piv.count;
                _cat = piv.value;
              }
            });
          }
          var _found = cnt;
          if (_cat !== '') {
            _pivotCategories.forEach(function (cat, i) {
              if (cat.value === _cat) {
                _found = i;
              }
            });
          }
          return {
            idx: _found,
            cat: _cat
          };
        };
        var addToLegend = function addToLegend(category) {
          var _found = false;
          _legend.forEach(function (lg) {
            if (lg.cat === category.cat) {
              _found = true;
            }
          });
          if (!_found) {
            _legend.push(category);
          }
        };
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_data).each(function (cnt, item) {
          addToLegend(getHighestCategoryValue(cnt, item));
          var _place = typeof item.label == 'string' ? item.label.toUpperCase() : item.label;
          if (_place != null) {
            if (_scope !== 'world' && _scope !== 'usa' && _scope !== 'europe' && _place.indexOf('.') === -1) {
              _place = _utils_hueGeo__WEBPACK_IMPORTED_MODULE_6__["default"].getISOAlpha2(_scope) + '.' + _place;
            }
            if ((_scope === 'world' || _scope === 'europe') && _place.length === 2) {
              _place = _utils_hueGeo__WEBPACK_IMPORTED_MODULE_6__["default"].getISOAlpha3(_place);
            }
            _mapdata[_place] = {
              fillKey: 'fill_' + (_is2d ? getHighestCategoryValue(cnt, item).idx : Math.ceil(item.value / _chunk) - 1),
              id: _place,
              cat: item.obj.cat,
              value: item.obj.values ? item.obj.values : item.obj.value,
              pivot: _is2d ? item.obj.pivot : [],
              selected: item.obj.selected,
              fields: item.obj.fields ? item.obj.fields : null
            };
            _maphovers[_place] = item.value;
          } else {
            _noncountries.push(item);
          }
        });
      } else {
        _fills['defaultFill'] = _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].LIGHT_BLUE;
        _fills['selected'] = _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].DARK_BLUE;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_data).each(function (cnt, item) {
          var _place = item.label.toUpperCase();
          if (_place != null) {
            if (_scope !== 'world' && _scope !== 'usa' && _scope !== 'europe' && _place.indexOf('.') === -1) {
              _place = _utils_hueGeo__WEBPACK_IMPORTED_MODULE_6__["default"].getISOAlpha2(_scope) + '.' + _place;
            }
            if ((_scope === 'world' || _scope === 'europe') && _place.length === 2) {
              _place = _utils_hueGeo__WEBPACK_IMPORTED_MODULE_6__["default"].getISOAlpha3(_place);
            }
            _mapdata[_place] = {
              fillKey: 'selected',
              id: _place,
              cat: item.obj.cat,
              value: item.obj.values ? item.obj.values : item.obj.value,
              pivot: [],
              selected: item.obj.selected,
              fields: item.obj.fields ? item.obj.fields : null
            };
            _maphovers[_place] = item.value;
          } else {
            _noncountries.push(item);
          }
        });
      }
      var _map = null;
      function createDatamap(element, options, fills, mapData, nonCountries, mapHovers) {
        _map = new _datamap__WEBPACK_IMPORTED_MODULE_3__["default"]({
          element: element,
          fills: fills,
          scope: _scope,
          data: mapData,
          legendData: _legend,
          onClick: function onClick(data) {
            if (typeof options.onClick != 'undefined') {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('charts.state', {
                updating: true
              });
              options.onClick(data);
            }
          },
          done: function done() {
            var _bubbles = [];
            if (options.enableGeocoding) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(nonCountries).each(function (cnt, item) {
                _utils_hueGeo__WEBPACK_IMPORTED_MODULE_6__["default"].getCityCoordinates(item.label, function (lat, lng) {
                  _bubbles.push({
                    fillKey: 'selected',
                    label: item.label,
                    value: item.value,
                    radius: 4,
                    latitude: lat,
                    longitude: lng
                  });
                  _map.bubbles(_bubbles, {
                    popupTemplate: function popupTemplate(geo, data) {
                      return '<div class="hoverinfo" style="text-align: center"><strong>' + data.label + '</strong><br/>' + item.value + '</div>';
                    }
                  });
                });
              });
            }
          },
          geographyConfig: {
            hideAntarctica: true,
            borderWidth: 1,
            borderColor: _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].DARK_BLUE,
            highlightOnHover: true,
            highlightFillColor: _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].DARK_BLUE,
            highlightBorderColor: _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].BLUE,
            selectedFillColor: _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].DARKER_BLUE,
            selectedBorderColor: _utils_hueColors__WEBPACK_IMPORTED_MODULE_5__["default"].DARKER_BLUE,
            popupTemplate: function popupTemplate(geography, data) {
              var _hover = '';
              if (data != null) {
                _hover = '<br/>';
                if (data.pivot && data.pivot.length > 0) {
                  data.pivot.sort(comparePivotValues);
                  data.pivot.forEach(function (piv, cnt) {
                    _hover += (cnt === 0 ? '<strong>' : '') + piv.value + ': ' + piv.count + (cnt === 0 ? '</strong>' : '') + '<br/>';
                  });
                } else {
                  _hover += mapHovers[data.id];
                }
              }
              return '<div class="hoverinfo" style="text-align: center"><strong>' + geography.properties.name + '</strong>' + _hover + '</div>';
            }
          }
        });
        if (options.onComplete != null) {
          options.onComplete();
        }
        if (_is2d) {
          _map.legend();
        }
      }
      createDatamap(element, _options, _fills, _mapdata, _noncountries, _maphovers);
      var _parentSelector = typeof _options.parentSelector != 'undefined' ? _options.parentSelector : '.card-widget';
      $element.parents(_parentSelector).one('resize', function () {
        knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.mapChart.render(element, valueAccessor);
      });
      var _resizeTimeout = -1;
      _ext_nv_d3_1_1_15b_custom__WEBPACK_IMPORTED_MODULE_2__["default"].utils.windowResize(function () {
        window.clearTimeout(_resizeTimeout);
        _resizeTimeout = window.setTimeout(function () {
          knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.mapChart.render(element, valueAccessor);
        }, 200);
      });
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('charts.state');
    }, 50);
    $element.data('drawThrottle', timeout);
  },
  init: function init(element, valueAccessor) {
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.mapChart.render(element, valueAccessor);
  },
  update: function update(element, valueAccessor, allBindingsAccessor) {
    if (typeof allBindingsAccessor().mapChart.visible != 'undefined') {
      if (typeof allBindingsAccessor().mapChart.visible == 'boolean' && allBindingsAccessor().mapChart.visible || typeof allBindingsAccessor().mapChart.visible == 'function' && allBindingsAccessor().mapChart.visible()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).show();
        knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.mapChart.render(element, valueAccessor);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).hide();
      }
    } else {
      knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.mapChart.render(element, valueAccessor);
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.appAwareTemplateContextMenu.js":
/*!***********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.appAwareTemplateContextMenu.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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



knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.appAwareTemplateContextMenu = {
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    viewModel.$currentApp = knockout__WEBPACK_IMPORTED_MODULE_0__.observable('');
    viewModel.$containerContext = valueAccessor().containerContext || bindingContext;
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('get.current.app.name', viewModel.$currentApp);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('set.current.app.name', viewModel.$currentApp);
    knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.templateContextMenu.init(element, valueAccessor, allBindings, viewModel, bindingContext);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.assistFileDraggable.js":
/*!***************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.assistFileDraggable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.assistFileDraggable = {
  init: function init(element, valueAccessor, allBindings, boundEntry) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var dragStartY = -1;
    var dragStartX = -1;
    $element.draggable({
      start: function start(event) {
        var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.doc-browser-drag-container');
        boundEntry.selected(true);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('doc.browser.dragging', {
          selectedEntries: [boundEntry],
          originEntry: boundEntry,
          dragToSelect: false
        });
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('doc.drag.to.select', false);
        dragStartX = event.clientX;
        dragStartY = event.clientY;
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assist-file-entry-drag').length === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="assist-file-entry-drag"><span class="drag-text"></span></div>').appendTo('body');
        }
        var $helper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assist-file-entry-drag').clone().appendTo($container);
        $helper.find('.drag-text').text(boundEntry.definition().name);
        $helper.find('i').removeClass().addClass($element.find('.doc-browser-primary-col i').attr('class'));
        $helper.show();
      },
      drag: function drag() {},
      stop: function stop(event) {
        var elementAtStart = document.elementFromPoint(dragStartX, dragStartY);
        var elementAtStop = document.elementFromPoint(event.clientX, event.clientY);
        if (elementAtStart.nodeName === 'A' && elementAtStop.nodeName === 'A' && Math.sqrt((dragStartX - event.clientX) * (dragStartX - event.clientX) + (dragStartY - event.clientY) * (dragStartY - event.clientY)) < 8) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(elementAtStop).trigger('click');
        }
        boundEntry.selected(false);
      },
      helper: function helper() {
        return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('doc-browser-drag-container');
      },
      appendTo: 'body',
      cursorAt: {
        top: 0,
        left: 0
      }
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.assistFileDroppable.js":
/*!***************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.assistFileDroppable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.assistFileDroppable = {
  init: function init(element, valueAccessor, allBindings, boundEntry) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var dragData;
    var dragSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('doc.browser.dragging', function (data) {
      dragData = data;
    });
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      dragSub.remove();
    });
    if (boundEntry.isDirectory) {
      $element.droppable({
        drop: function drop() {
          if (dragData && !dragData.dragToSelect && boundEntry.isDirectory()) {
            boundEntry.moveHere(dragData.selectedEntries);
            dragData.originEntry.load();
          }
          $element.removeClass('assist-file-entry-drop');
        },
        over: function over() {
          if (!$element.hasClass('assist-file-entry-drop') && dragData && !dragData.dragToSelect && boundEntry.isDirectory()) {
            $element.addClass('assist-file-entry-drop');
          }
        },
        out: function out() {
          $element.removeClass('assist-file-entry-drop');
        }
      });
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.assistVerticalResizer.js":
/*!*****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.assistVerticalResizer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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





knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.assistVerticalResizer = {
  init: function init(element, valueAccessor) {
    var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var panelDefinitions = options.panels;
    var checkForElements = function checkForElements() {
      var $allPanels = $container.children('.assist-inner-panel');
      var $allExtras = $container.children('.assist-fixed-height');
      if (panelDefinitions().length === $allPanels.length && ($allExtras.length > 0 || options.noFixedHeights)) {
        knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.assistVerticalResizer.updateWhenRendered(element, valueAccessor);
      } else {
        timeout = window.setTimeout(checkForElements, 10);
      }
    };
    checkForElements();
    var timeout = -1;
    panelDefinitions.subscribe(function () {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(checkForElements, 10);
    });
  },
  updateWhenRendered: function updateWhenRendered(element, valueAccessor) {
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var panelDefinitions = options.panels;
    var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var $allPanels = $container.children('.assist-inner-panel');
    var $allResizers = $container.children('.assist-resizer');
    var $allExtras = $container.children('.assist-fixed-height');
    var allExtrasHeight = 0;
    $allExtras.each(function (idx, extra) {
      allExtrasHeight += jquery__WEBPACK_IMPORTED_MODULE_0___default()(extra).outerHeight(true);
    });
    window.clearInterval($container.data('height_interval'));
    if (panelDefinitions().length === 0) {
      $allExtras.show();
      return;
    }
    if (panelDefinitions().length === 1) {
      var adjustHeightSingle = function adjustHeightSingle() {
        $allPanels.height($container.innerHeight() - allExtrasHeight);
      };
      var heightAdjustInterval = window.setInterval(adjustHeightSingle, 800);
      adjustHeightSingle();
      $container.data('height_interval', heightAdjustInterval);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(adjustHeightSingle);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('assist.forceRender', function () {
        window.setTimeout(adjustHeightSingle, 200);
      });
      $allExtras.show();
      $allPanels.show();
      return;
    }
    var panelRatios = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('assist.innerPanelRatios', {});
    var totalRatios = 0;
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each($allPanels, function (idx, panel) {
      var panelDef = panelDefinitions()[idx];
      if (!panelRatios[panelDef.type]) {
        panelRatios[panelDef.type] = 1 / panelDefinitions().length;
      }
      totalRatios += panelRatios[panelDef.type];
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel).data('minHeight', panelDef.minHeight);
    });

    // Normalize the ratios in case new panels were added or removed.
    if (totalRatios !== 1) {
      var diff = 1 / totalRatios;
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(panelDefinitions(), function (idx, panel) {
        panelRatios[panel.type] = panelRatios[panel.type] * diff;
      });
    }
    var totalHeight = -1;
    var containerTop = $container.offset().top;

    // Resizes all containers according to the set ratios
    var resizeByRatio = function resizeByRatio() {
      if (totalHeight === $container.innerHeight()) {
        return;
      }
      $allPanels = $container.children('.assist-inner-panel');
      totalHeight = $container.innerHeight();
      containerTop = $container.offset().top;
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each($allPanels, function (idx, panel) {
        var panelDef = panelDefinitions()[idx];
        if (!panelRatios[panelDef.type] || $allPanels.length === 1) {
          panelRatios[panelDef.type] = 1 / panelDefinitions().length;
        }
        totalRatios += panelRatios[panelDef.type];
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel).data('minHeight', panelDef.minHeight);
      });
      var availableForPanels = totalHeight - allExtrasHeight;
      var leftoverSpace = 0;
      $allPanels.each(function (idx, panel) {
        var $panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel);
        var desiredHeight = availableForPanels * panelRatios[panelDefinitions()[idx].type];
        var newHeight = Math.max($panel.data('minHeight'), desiredHeight);
        $panel.height(newHeight);
        leftoverSpace += newHeight - desiredHeight;
      });
      // The minheight is greater than the ratio so we shrink where possible
      if (leftoverSpace > 0) {
        $allPanels.each(function (idx, panel) {
          if (leftoverSpace === 0) {
            return false;
          }
          var $panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel);
          var currentHeight = $panel.height();
          var possibleContribution = Math.min(currentHeight - $panel.data('minHeight'), leftoverSpace);
          if (possibleContribution > 0) {
            $panel.height(currentHeight - possibleContribution);
            leftoverSpace -= possibleContribution;
          }
        });
      }
    };
    resizeByRatio();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(resizeByRatio);
    window.setTimeout(resizeByRatio, 1000);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('assist.forceRender', function () {
      window.setTimeout(resizeByRatio, 200);
    });
    $allExtras.show();
    $allPanels.show();
    var fitPanelHeights = function fitPanelHeights($panelsToResize, desiredTotalHeight) {
      var currentHeightOfPanels = 0;
      var noMoreSpace = true;
      $panelsToResize.each(function (idx, panel) {
        var $panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel);
        var panelHeight = $panel.outerHeight(true);
        noMoreSpace = noMoreSpace && panelHeight <= $panel.data('minHeight');
        currentHeightOfPanels += panelHeight;
      });
      var distanceToGo = desiredTotalHeight - currentHeightOfPanels;
      if (noMoreSpace && distanceToGo < 0) {
        return;
      }

      // Add all to the first panel if expanding (distanceToGo is positive
      if (distanceToGo >= 0) {
        $panelsToResize.first().height($panelsToResize.first().height() + distanceToGo + 'px');
        return;
      }

      // Remove as much as possible on each panel if shrinking (distanceToGo is negative)
      $panelsToResize.each(function (idx, panel) {
        var $panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel);
        var initialHeight = $panel.height();
        var newHeight = Math.max($panel.data('minHeight'), initialHeight + distanceToGo);
        if (initialHeight === newHeight) {
          return true;
        }
        $panel.height(newHeight);
        distanceToGo += initialHeight - newHeight;
        if (distanceToGo >= 0) {
          return false;
        }
      });
    };
    $allResizers.each(function (idx, resizer) {
      var $resizer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(resizer);
      var extrasBeforeHeight = 0;
      $resizer.prevAll('.assist-fixed-height').each(function (idx, extra) {
        extrasBeforeHeight += jquery__WEBPACK_IMPORTED_MODULE_0___default()(extra).outerHeight(true);
      });
      var $panelsBefore = $resizer.prevAll('.assist-inner-panel');
      var limitBefore = extrasBeforeHeight;
      $panelsBefore.each(function (idx, panel) {
        limitBefore += jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel).data('minHeight');
      });
      var extrasAfterHeight = allExtrasHeight - extrasBeforeHeight;
      var $panelsAfter = $resizer.nextAll('.assist-inner-panel');
      var requiredSpaceAfter = extrasAfterHeight;
      $panelsAfter.each(function (idx, panel) {
        requiredSpaceAfter += jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel).data('minHeight');
      });
      $resizer.draggable({
        axis: 'y',
        drag: function drag(event, ui) {
          var limitAfter = totalHeight - requiredSpaceAfter;
          var position = ui.offset.top - containerTop;
          if (position > limitBefore && position < limitAfter) {
            fitPanelHeights($panelsBefore, position - extrasBeforeHeight);
            fitPanelHeights($panelsAfter, totalHeight - extrasAfterHeight - position);
          } else if (position > limitAfter) {
            fitPanelHeights($panelsBefore, limitAfter - extrasBeforeHeight);
            fitPanelHeights($panelsAfter, totalHeight - extrasAfterHeight - limitAfter);
          } else if (position < limitBefore) {
            fitPanelHeights($panelsBefore, limitBefore - extrasBeforeHeight);
            fitPanelHeights($panelsAfter, totalHeight - extrasAfterHeight - limitBefore);
          }
          ui.offset.top = 0;
          ui.position.top = 0;
        },
        stop: function stop(event, ui) {
          ui.offset.top = 0;
          ui.position.top = 0;
          var totalHeightForPanels = 0;
          $allPanels.each(function (idx, panel) {
            totalHeightForPanels += jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel).outerHeight(true);
          });
          $allPanels.each(function (idx, panel) {
            panelRatios[panelDefinitions()[idx].type] = jquery__WEBPACK_IMPORTED_MODULE_0___default()(panel).outerHeight(true) / totalHeightForPanels;
          });
          (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.setInLocalStorage)('assist.innerPanelRatios', panelRatios);
        }
      });
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.attachViewModelToElementData.js":
/*!************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.attachViewModelToElementData.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.attachViewModelToElementData = {
  init: function init(el, valueAccessor, allBindingsAccessor, viewModel) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).data('__ko_vm', viewModel);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.augmentHtml.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.augmentHtml.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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




// TODO: less from bootstrap?

knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.augmentHtml = {
  render: function render(element, valueAccessor) {
    var _val = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var _enc = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').html(_val);
    if (_enc.find('style').length > 0) {
      var parser = new less.Parser();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(_enc.find('style')).each(function (cnt, item) {
        var _less = '.result-container {' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).text() + '}';
        try {
          parser.parse(_less, function (err, tree) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).text(tree.toCSS());
          });
        } catch (e) {}
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).html(_enc.html());
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).html(_val);
    }
  },
  init: function init(element, valueAccessor, allBindingsAccessor, viewModel) {
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.augmentHtml.render(element, valueAccessor, allBindingsAccessor, viewModel);
  },
  update: function update(element, valueAccessor, allBindingsAccessor, viewModel) {
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.augmentHtml.render(element, valueAccessor, allBindingsAccessor, viewModel);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.autocomplete.js":
/*!********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.autocomplete.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.autocomplete = {
  init: function init(element, valueAccessor) {
    var options = valueAccessor();
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var getMenuElement = function getMenuElement() {
      if (typeof options.appendTo === 'string') {
        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.appendTo);
      }
      return options.appendTo;
    };
    var delay = 400;
    var showSpinner = function showSpinner() {
      if (options.showSpinner) {
        $element.addClass('input-spinner');
      }
    };
    var spinThrottle = -1;
    var hideSpinner = function hideSpinner() {
      window.clearTimeout(spinThrottle);
      $element.removeClass('input-spinner');
    };
    options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
      addCount: false,
      closeOnEnter: true,
      blurOnEnter: false,
      classPrefix: 'hue-',
      showOnFocus: false,
      minLength: 0,
      limitWidthToInput: false,
      minWidth: 200,
      delay: delay,
      search: function search() {
        window.clearTimeout(spinThrottle);
        if (!$element.hueAutocomplete('option', 'disabled')) {
          spinThrottle = window.setTimeout(showSpinner, 50);
        }
      },
      open: function open() {
        hideSpinner();
      },
      close: function close() {
        hideSpinner();
      }
    }, options);
    if (options.addCount) {
      var oldSource = options.source;
      options.source = function (request, callback) {
        oldSource(request, function (values) {
          callback(values);
          var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()($element.data('custom-hueAutocomplete').menu.element);
          $menu.children('.autocomplete-count').remove();
          var count = options.realCountCallback ? options.realCountCallback() : values.filter(function (value) {
            return !value.divider && !value.noMatch;
          }).length;
          if (count > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('autocomplete-count').text('(' + count + ')').appendTo(getMenuElement());
          }
        });
      };
    }
    if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()().hueAutocomplete === 'undefined') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().widget('custom.hueAutocomplete', (jquery__WEBPACK_IMPORTED_MODULE_0___default().ui.autocomplete), {
        _renderItemData: function _renderItemData(ul, item) {
          if (item.error && this.options.errorTemplate) {
            var $li = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li data-bind="template: { name: \'' + this.options.errorTemplate + '\' }">').addClass(this.options.classPrefix + 'autocomplete-item').appendTo(ul).data('ui-autocomplete-item', item);
            knockout__WEBPACK_IMPORTED_MODULE_1__.applyBindings(item, $li[0]);
          } else if (item.noMatch && this.options.noMatchTemplate) {
            var _$li = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li data-bind="template: { name: \'' + this.options.noMatchTemplate + '\' }">').addClass(this.options.classPrefix + 'autocomplete-item').appendTo(ul).data('ui-autocomplete-item', item);
            knockout__WEBPACK_IMPORTED_MODULE_1__.applyBindings(item, _$li[0]);
          } else if (item.divider) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li></li>').addClass(this.options.classPrefix + 'autocomplete-divider').appendTo(ul);
          } else {
            var _$li2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li data-bind="template: { name: \'' + this.options.itemTemplate + '\', data: $data }">').addClass(this.options.classPrefix + 'autocomplete-item').appendTo(ul).data('ui-autocomplete-item', item);
            knockout__WEBPACK_IMPORTED_MODULE_1__.applyBindings(item.data, _$li2[0]);
          }
        },
        _resizeMenu: function _resizeMenu() {
          // This overrides the default behaviour of using dropdown width of the same size as input autocomplete box
          if (options.limitWidthToInput) {
            this.menu.element.outerWidth(options.minWidth);
          }
        },
        _renderMenu: function _renderMenu(ul, items) {
          var self = this;
          hideSpinner();
          if (options.limitWidthToInput) {
            ul.css('max-width', Math.max(options.minWidth, $element.outerWidth(true)) + 'px');
          }
          ul.css('min-width', options.minWidth || $element.outerWidth(true));
          ul.css('min-height', options.minHeight || '20px');
          ul.addClass(this.options.classPrefix + 'autocomplete');
          jquery__WEBPACK_IMPORTED_MODULE_0___default().each(items, function (index, item) {
            self._renderItemData(ul, item);
          });
        }
      });
    }
    if (options.closeOnEnter || options.onEnter || options.blurOnEnter) {
      $element.on('keyup', function (e) {
        if (e.which === 13) {
          if (options.reopenPattern && options.reopenPattern.test($element.val())) {
            window.setTimeout(function () {
              $element.hueAutocomplete('search', $element.val());
            }, 0);
            return;
          }
          if (options.closeOnEnter) {
            hideSpinner();
            $element.hueAutocomplete('close');
            // Prevent autocomplete on enter
            $element.hueAutocomplete('option', 'disabled', true);
            window.setTimeout(function () {
              $element.hueAutocomplete('option', 'disabled', false);
            }, delay + 200);
          }
          if (options.valueObservable) {
            options.valueObservable($element.val());
          }
          if (options.onEnter) {
            options.onEnter();
          }
          if (options.blurOnEnter) {
            hideSpinner();
            $element.blur();
          }
        }
      });
    }
    $element.on('keydown', function (e) {
      // ctrl + backspace to delete words
      if (e.which === 8 && e.ctrlKey) {
        var lastSpaceOrColon = Math.max($element.val().lastIndexOf(' '), $element.val().lastIndexOf(':'));
        if (lastSpaceOrColon < $element.val().length - 1) {
          if (lastSpaceOrColon !== -1) {
            $element.val($element.val().substring(0, lastSpaceOrColon + 1));
          } else {
            $element.val('');
          }
          e.preventDefault();
          return false;
        }
      } else if (e.which === 32 && e.ctrlKey) {
        $element.hueAutocomplete('search', $element.val());
      }
    });
    if (options.showOnFocus) {
      $element.on('focus', function () {
        $element.hueAutocomplete('search', $element.val());
      });
    }
    var closeSubscription = utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('autocomplete.close', function () {
      hideSpinner();
      $element.hueAutocomplete('close');
    });
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      closeSubscription.remove();
    });
    if (options.reopenPattern || options.valueObservable || options.onSelect) {
      var oldSelect = options.select;
      options.select = function (event, ui) {
        if (options.reopenPattern && options.reopenPattern.test(ui.item.value)) {
          window.setTimeout(function () {
            $element.hueAutocomplete('search', $element.val());
          }, 0);
          return;
        }
        if (options.valueObservable) {
          options.valueObservable(ui.item.value);
        }
        if (options.onSelect) {
          options.onSelect(ui.item);
        }
        if (oldSelect) {
          oldSelect(event, ui);
        }
      };
    }
    $element.hueAutocomplete(options);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.autogrowInput.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.autogrowInput.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.autogrowInput = {
  init: function init(element, valueAccessor) {
    var o = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
      minWidth: 0,
      maxWidth: 1000,
      comfortZone: 70
    }, valueAccessor());
    var minWidth = o.minWidth || jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).width();
    var input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var testSubject = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<tester></tester>').css({
      position: 'absolute',
      top: -9999,
      left: -9999,
      width: 'auto',
      fontSize: input.css('fontSize'),
      fontFamily: input.css('fontFamily'),
      fontWeight: input.css('fontWeight'),
      letterSpacing: input.css('letterSpacing'),
      whiteSpace: 'nowrap'
    });
    var val = '';
    var check = function check() {
      if (val === (val = input.val())) {
        return;
      }
      var escaped = val.replace(/&/g, '&amp;').replace(/\s/g, ' ').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      testSubject.html(escaped);
      var testerWidth = testSubject.width(),
        newWidth = testerWidth + o.comfortZone >= minWidth ? testerWidth + o.comfortZone : minWidth,
        currentWidth = input.width(),
        isValidWidthChange = newWidth < currentWidth && newWidth >= minWidth || newWidth > minWidth && newWidth < o.maxWidth;
      if (isValidWidthChange) {
        input.width(newWidth);
      }
    };
    testSubject.insertAfter(element);
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.registerEventHandler(element, 'keyup keydown blur update', check);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.blurHide.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.blurHide.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.blurHide = {
  init: function init(element, valueAccessor) {
    var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var prop = valueAccessor();
    $el.on('blur', function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default().trim($el.val()) === '') {
        if (knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(prop)) {
          prop(false);
        }
      }
    });
  },
  update: function update(element, valueAccessor) {
    var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var prop = valueAccessor();
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(prop) && prop()) {
      $el.focus();
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.bytesize.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.bytesize.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sprintf-js */ "./node_modules/sprintf-js/src/sprintf.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_2__);
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.bytesize = function () {
  var that;
  return that = {
    units: ['B', 'KB', 'MB', 'GB', 'TB', 'PB'],
    init: function init(element, valueAccessor) {
      that.format(element, valueAccessor);
    },
    update: function update(element, valueAccessor) {
      that.format(element, valueAccessor);
    },
    format: function format(element, valueAccessor) {
      var value = valueAccessor();
      var formatted = that.humanSize(knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(value));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).text(formatted);
    },
    getBaseLog: function getBaseLog(x, y) {
      return Math.log(x) / Math.log(y);
    },
    humanSize: function humanSize(bytes) {
      var isNumber = !isNaN(parseFloat(bytes)) && isFinite(bytes);
      if (!isNumber) {
        return '';
      }

      // Special case small numbers (including 0), because they're exact.
      if (bytes < 1024) {
        return sprintf_js__WEBPACK_IMPORTED_MODULE_2___default().sprintf('%d B', bytes);
      }
      var index = Math.floor(that.getBaseLog(bytes, 1024));
      index = Math.min(that.units.length - 1, index);
      return sprintf_js__WEBPACK_IMPORTED_MODULE_2___default().sprintf('%.1f %s', bytes / Math.pow(1024, index), that.units[index]);
    }
  };
}();

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.chosen.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.chosen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.chosen = {
  init: function init(element, valueAccessor, allBindings) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    if (_typeof(options) === 'object') {
      $element.chosen(options);
    } else {
      $element.chosen();
    }
    ['options', 'selectedOptions', 'value'].forEach(function (propName) {
      if (allBindings.has(propName)) {
        var prop = allBindings.get(propName);
        if (knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(prop)) {
          prop.subscribe(function () {
            $element.trigger('chosen:updated');
          });
        }
      }
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.clearable.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.clearable.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.clearable = {
  after: ['textInput', 'value', 'valueUpdate'],
  init: function init(element, valueAccessor, allBindingsAccessor) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var params = valueAccessor();
    var valueObservable = knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(params) ? params : params.value;
    function tog(v) {
      return v ? 'addClass' : 'removeClass';
    }
    $element.addClass('clearable');
    $element[tog(valueObservable())]('x');
    $element.on('input', function () {
      $element[tog(this.value)]('x');
    }).on('mousemove', function (e) {
      $element[tog(this.offsetWidth - 18 < e.clientX - this.getBoundingClientRect().left)]('onX');
    }).on('click', function (e) {
      if (this.offsetWidth - 18 < e.clientX - this.getBoundingClientRect().left) {
        $element.removeClass('x onX').val('');
        valueObservable('');
        if (typeof params.onClear === 'function') {
          params.onClear();
        }
      }
    });
    if (!allBindingsAccessor()['textInput'] || !allBindingsAccessor()['value']) {
      $element.on('change', function () {
        valueObservable($element.val());
      }).on('blur', function () {
        valueObservable($element.val());
      });
      if (allBindingsAccessor()['valueUpdate'] != null && allBindingsAccessor()['valueUpdate'] === 'afterkeydown') {
        $element.on('keyup', function () {
          valueObservable($element.val());
        });
      }
      if (allBindingsAccessor()['valueUpdateDelay'] != null) {
        var _timeout = -1;
        $element.on('keyup', function (e) {
          if (!([13, 37, 38, 39, 40].indexOf(e.keyCode) > -1)) {
            window.clearTimeout(_timeout);
            _timeout = window.setTimeout(function () {
              valueObservable($element.val());
            }, allBindingsAccessor()['valueUpdateDelay']);
          }
        });
      }
    }
  },
  update: function update(element, valueAccessor) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var params = valueAccessor();
    var valueObservable = knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(params) ? params : params.value;
    if (!$element.is(':focus') || valueObservable() !== $element.val()) {
      $element.val(valueObservable());
    }
    if ($element.val() === '') {
      $element.removeClass('x');
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.clickForAceFocus.js":
/*!************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.clickForAceFocus.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.clickForAceFocus = {
  init: function init(element, valueAccessor) {
    var editor = valueAccessor();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).on('click', function (e) {
      if (e.target === element) {
        editor().focus();
        editor().execCommand('gotolineend');
      }
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.clickToCopy.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.clickToCopy.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.clickToCopy = {
  init: function init(element, valueAccessor) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).click(function () {
      var $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<textarea>').css({
        opacity: 0
      }).val(knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor())).appendTo('body').select();
      document.execCommand('copy');
      $input.remove();
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.clipboard.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.clipboard.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/lib/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.clipboard = {
  init: function init(element, valueAccessor) {
    var options = valueAccessor() || {};
    var clipboard = new (clipboard__WEBPACK_IMPORTED_MODULE_1___default())(element, {
      target: options.target,
      text: options.text
    });
    if (options.onSuccess) {
      clipboard.on('success', options.onSuccess);
    }
    knockout__WEBPACK_IMPORTED_MODULE_0__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      clipboard.destroy();
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.codemirror.js":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.codemirror.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_html_stripHtmlForFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/html/stripHtmlForFunctions */ "./desktop/core/src/desktop/js/utils/html/stripHtmlForFunctions.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.codemirror = {
  init: function init(element, valueAccessor) {
    var options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(valueAccessor(), {});
    var editor = CodeMirror.fromTextArea(element, options);
    element.editor = editor;
    editor.setValue(options.data());
    editor.refresh();
    var wrapperElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(editor.getWrapperElement());
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('refreshCodemirror', function () {
      editor.setSize('100%', 300);
      editor.refresh();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('addFieldToSource', function (e, field) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('template')) {
        editor.replaceSelection('{{' + field.name() + '}}');
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('addFunctionToSource', function (e, fn) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('template')) {
        editor.replaceSelection(fn);
      }
    });
    var $chosenSelect = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.chosen-select');
    $chosenSelect.chosen({
      disable_search_threshold: 10,
      width: '75%'
    });
    $chosenSelect.trigger('chosen:updated');
    var sourceDelay = -1;
    editor.on('change', function (cm) {
      clearTimeout(sourceDelay);
      var _cm = cm;
      sourceDelay = setTimeout(function () {
        var _value = _cm.getValue();
        if (options.stripScript) {
          _value = _value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        }
        valueAccessor().data(_value);
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.widget-html-pill').parent().hasClass('active')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[contenteditable=true]').html((0,utils_html_stripHtmlForFunctions__WEBPACK_IMPORTED_MODULE_2__["default"])(valueAccessor().data()));
        }
      }, 100);
    });
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      wrapperElement.remove();
    });
  },
  update: function update(element) {
    var editor = element.editor;
    editor.refresh();
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.contextMenu.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.contextMenu.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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
 * This binding can be used to show a custom context menu on right-click,
 * It assumes that the context menu is nested within the bound element and
 * the selector for the menu has to be supplied as a parameter.
 *
 * Example:
 *
 * <div data-bind="contextMenu: {
 *   menuSelector: '.hue-context-menu',
 *   beforeOpen: function () { ... }
 * }">
 *   <ul class="hue-context-menu">...</ul>
 * </div>
 *
 */
knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.contextMenu = {
  initContextMenu: function initContextMenu($menu, $scrollContainer, onShow, onHide) {
    var active = false;
    var currentLeft = 0;
    var currentTop = 0;
    var openScrollTop = 0;
    var openScrollLeft = 0;
    var adjustForScroll = function adjustForScroll() {
      $menu.css('top', currentTop - $scrollContainer.scrollTop() + openScrollTop);
      $menu.css('left', currentLeft - $scrollContainer.scrollLeft() + openScrollLeft);
    };
    return {
      show: function show(event) {
        $menu.css('top', 0);
        $menu.css('left', 0);
        $menu.css('opacity', 0);
        $menu.show();
        openScrollTop = $scrollContainer.scrollTop();
        openScrollLeft = $scrollContainer.scrollLeft();
        var menuWidth = $menu.outerWidth(true);
        if (event.clientX + menuWidth > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width()) {
          currentLeft = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() - menuWidth;
        } else {
          currentLeft = event.clientX;
        }
        $menu.css('left', currentLeft);
        var menuHeight = $menu.outerHeight(true);
        if (event.clientY + menuHeight > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
          currentTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - menuHeight;
        } else {
          currentTop = event.clientY;
        }
        $menu.css('top', currentTop);
        $menu.css('opacity', 1);
        active = true;
        $scrollContainer.on('scroll', adjustForScroll);
        if (onShow) {
          onShow();
        }
      },
      hide: function hide() {
        if (active) {
          $scrollContainer.off('scroll', adjustForScroll);
          $menu.css('opacity', 0);
          window.setTimeout(function () {
            $menu.hide();
          }, 300);
          active = false;
        }
        if (onHide) {
          onHide();
        }
      }
    };
  },
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = valueAccessor();
    var $menu = $element.find(options.menuSelector);
    bindingContext.$altDown = knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    window.addEventListener('keydown', function (e) {
      bindingContext.$altDown(e.altKey);
    });
    window.addEventListener('keyup', function () {
      bindingContext.$altDown(false);
    });
    var $scrollContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.scrollContainer).length > 0 ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.scrollContainer) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
    var menu = knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.contextMenu.initContextMenu($menu, $scrollContainer);
    element.addEventListener('contextmenu', function (event) {
      if (document.selection && document.selection.empty) {
        document.selection.empty();
      } else if (window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
      }
      if (typeof options.beforeOpen === 'function') {
        options.beforeOpen.bind(viewModel)();
      }
      menu.show(event);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('contextmenu-active', element);
      event.preventDefault();
      event.stopPropagation();
    });
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('contextmenu-active', function (origin) {
      if (origin !== element) {
        menu.hide();
      }
    });
    document.addEventListener('contextmenu', function () {
      menu.hide();
    });
    $menu.click(function (e) {
      menu.hide();
      e.stopPropagation();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (event) {
      if ($element.find(jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target)).length === 0) {
        menu.hide();
      }
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.contextSubMenu.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.contextSubMenu.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.contextSubMenu = {
  init: function init(element, valueAccessor) {
    var menuSelector = valueAccessor();
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var $menu = $element.find(menuSelector);
    var $parentMenu = $element.parent('.hue-context-menu');
    var open = false;
    var closeSubMenu = function closeSubMenu() {
      open = false;
      $menu.hide();
      $element.removeClass('active');
    };
    var hideTimeout = -1;
    $element.add($menu).on('mouseenter', function () {
      $element.addClass('active');
      if (!open) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('hue.sub.menu.close');
      }
      open = true;
      window.clearTimeout(hideTimeout);
      var menuHeight = $menu.outerHeight();
      $menu.css('top', $element.position().top + $parentMenu.position().top + menuHeight > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - menuHeight - 8 : $element.position().top + $parentMenu.position().top);
      $menu.css('left', $element.offset().left + $element.outerWidth(true));
      $menu.css('opacity', 0);
      $menu.show();
      $menu.css('opacity', 1);
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribeOnce('hue.sub.menu.close', closeSubMenu);
    });
    $element.add($menu).on('mouseleave', function () {
      window.clearTimeout(hideTimeout);
      hideTimeout = window.setTimeout(closeSubMenu, 300);
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.datalist.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.datalist.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
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



// https://stackoverflow.com/questions/19865364/knockoutjs-linking-value-from-a-input-to-a-datalist-value

knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.datalist = function () {
  function getVal(rawItem, prop) {
    var item = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(rawItem);
    return item && prop ? knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(item[prop]) : item;
  }
  function findItem(options, prop, ref) {
    return knockout__WEBPACK_IMPORTED_MODULE_0__.utils.arrayFirst(options, function (item) {
      return ref === getVal(item, prop);
    });
  }
  return {
    init: function init(element, valueAccessor, allBindingsAccessor) {
      var setup = valueAccessor(),
        textProperty = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(setup.optionsText),
        valueProperty = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(setup.optionsValue),
        dataItems = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(setup.options),
        myValue = setup.value,
        koValue = allBindingsAccessor().value,
        datalist = document.createElement('DATALIST');

      // create an associated <datalist> element
      datalist.id = element.getAttribute('list');
      document.body.appendChild(datalist);

      // when the value is changed, write to the associated myValue observable
      function onNewValue(newVal) {
        var setup = valueAccessor(),
          dataItems = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(setup.options),
          selectedItem = findItem(dataItems, textProperty, newVal),
          newValue = selectedItem ? getVal(selectedItem, valueProperty) : newVal;
        if (knockout__WEBPACK_IMPORTED_MODULE_0__.isWriteableObservable(myValue)) {
          myValue(newValue);
        }
      }

      // listen for value changes
      // - either via KO's value binding (preferred) or the change event
      if (knockout__WEBPACK_IMPORTED_MODULE_0__.isSubscribable(koValue)) {
        var onNewValueSubscription = koValue.subscribe(onNewValue);
        knockout__WEBPACK_IMPORTED_MODULE_0__.utils.domNodeDisposal.addDisposeCallback(element, function () {
          onNewValueSubscription.remove();
        });
      } else {
        var event = allBindingsAccessor().valueUpdate === 'afterkeydown' ? 'input' : 'change';
        knockout__WEBPACK_IMPORTED_MODULE_0__.utils.registerEventHandler(element, event, function () {
          onNewValue(this.value);
        });
      }

      // init the element's value
      // - either via the myValue observable (preferred) or KO's value binding
      if (knockout__WEBPACK_IMPORTED_MODULE_0__.isObservable(myValue) && myValue()) {
        var selectedItem = findItem(dataItems, valueProperty, myValue());
        element.value = selectedItem ? getVal(selectedItem, textProperty) : myValue();
      } else if (knockout__WEBPACK_IMPORTED_MODULE_0__.isObservable(koValue) && koValue()) {
        onNewValue(koValue());
      }
    },
    update: function update(element, valueAccessor) {
      var setup = valueAccessor(),
        datalist = element.list,
        dataItems = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(setup.options),
        textProperty = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(setup.optionsText);

      // rebuild list of options when an underlying observable changes
      datalist.innerHTML = '';
      knockout__WEBPACK_IMPORTED_MODULE_0__.utils.arrayForEach(dataItems, function (item) {
        var option = document.createElement('OPTION');
        option.value = getVal(item, textProperty);
        datalist.appendChild(option);
      });
      knockout__WEBPACK_IMPORTED_MODULE_0__.utils.triggerEvent(element, 'change');
    }
  };
}();

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.dateRangePicker.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.dateRangePicker.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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





knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.dateRangePicker = {
  INTERVAL_OPTIONS: [{
    value: '+200MILLISECONDS',
    label: '200ms'
  }, {
    value: '+1SECONDS',
    label: '1s'
  }, {
    value: '+5SECONDS',
    label: '5s'
  }, {
    value: '+30SECONDS',
    label: '30s'
  }, {
    value: '+1MINUTES',
    label: '1m'
  }, {
    value: '+5MINUTES',
    label: '5m'
  }, {
    value: '+10MINUTES',
    label: '10m'
  }, {
    value: '+30MINUTES',
    label: '30m'
  }, {
    value: '+1HOURS',
    label: '1h'
  }, {
    value: '+3HOURS',
    label: '3h'
  }, {
    value: '+6HOURS',
    label: '6h'
  }, {
    value: '+12HOURS',
    label: '12h'
  }, {
    value: '+1DAYS',
    label: '1d'
  }, {
    value: '+7DAYS',
    label: '7d'
  }, {
    value: '+1MONTHS',
    label: '1M'
  }, {
    value: '+6MONTHS',
    label: '6M'
  }, {
    value: '+1YEARS',
    label: '1y'
  }, {
    value: '+10YEARS',
    label: '10y'
  }],
  EXTRA_INTERVAL_OPTIONS: [],
  init: function init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var DATE_FORMAT = 'YYYY-MM-DD';
    var TIME_FORMAT = 'HH:mm:ss';
    var DATETIME_FORMAT = DATE_FORMAT + ' ' + TIME_FORMAT;
    var _el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(valueAccessor(), {});
    var _intervalOptions = [];
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.dateRangePicker.INTERVAL_OPTIONS.forEach(function (interval) {
      _intervalOptions.push('<option value="' + interval.value + '">' + interval.label + '</option>');
    });
    function enableOptions() {
      var _opts = [];
      var _tmp = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').html(_intervalOptions.join(''));
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(arguments, function (cnt, item) {
        if (_tmp.find("option[value='+" + item + "']").length > 0) {
          _opts.push('<option value="+' + item + '">' + _tmp.find("option[value='+" + item + "']").eq(0).text() + '</option>');
        }
      });
      return _opts;
    }
    function renderOptions(opts) {
      var _html = '';
      for (var i = 0; i < opts.length; i++) {
        _html += opts[i];
      }
      return _html;
    }
    var _tmpl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="simpledaterangepicker">' + '<div class="facet-field-cnt custom">' + '<div class="facet-field-label facet-field-label-fixed-width"></div>' + '<div class="facet-field-switch"><i class="fa fa-calendar muted"></i> <a href="javascript:void(0)">' + KO_DATERANGEPICKER_LABELS.DATE_PICKERS + '</a></div>' + '</div>' + '<div class="facet-field-cnt picker">' + '<div class="facet-field-label facet-field-label-fixed-width"></div>' + '<div class="facet-field-switch"><i class="fa fa-calendar-o muted"></i> <a href="javascript:void(0)">' + KO_DATERANGEPICKER_LABELS.CUSTOM_FORMAT + '</a></div>' + '</div>' + '<div class="facet-field-cnt picker">' + '<div class="facet-field-label facet-field-label-fixed-width">' + KO_DATERANGEPICKER_LABELS.START + '</div>' + '<div class="input-prepend input-group">' + '<span class="add-on input-group-addon"><i class="fa fa-calendar"></i></span>' + '<input type="text" class="input-small form-control start-date" />' + '</div>' + '<div class="input-prepend input-group left-margin">' + '<span class="add-on input-group-addon"><i class="fa fa-clock-o"></i></span>' + '<input type="text" class="input-mini form-control start-time" />' + '</div>' + '</div>' + '<div class="facet-field-cnt picker">' + '<div class="facet-field-label facet-field-label-fixed-width">' + KO_DATERANGEPICKER_LABELS.END + '</div>' + '<div class="input-prepend input-group">' + '<span class="add-on input-group-addon"><i class="fa fa-calendar"></i></span>' + '<input type="text" class="input-small form-control end-date" />' + '</div>' + '<div class="input-prepend input-group left-margin">' + '<span class="add-on input-group-addon"><i class="fa fa-clock-o"></i></span>' + '<input type="text" class="input-mini form-control end-time" />' + '</div>' + '</div>' + '<div class="facet-field-cnt picker">' + '<div class="facet-field-label facet-field-label-fixed-width">' + KO_DATERANGEPICKER_LABELS.INTERVAL + '</div>' + '<div class="input-prepend input-group"><span class="add-on input-group-addon"><i class="fa fa-repeat"></i></span></div>&nbsp;' + '<select class="input-small interval-select" style="margin-right: 6px">' + renderOptions(_intervalOptions) + '</select>' + '<input class="input interval hide" type="hidden" value="" />' + '</div>' + '<div class="facet-field-cnt custom">' + '<div class="facet-field-label facet-field-label-fixed-width">' + KO_DATERANGEPICKER_LABELS.START + '</div>' + '<div class="input-prepend input-group">' + '<span class="add-on input-group-addon"><i class="fa fa-calendar-o"></i></span>' + '<input type="text" class="input-large form-control start-date-custom" />' + '</div>' + '<span class="pointer custom-popover" data-trigger="click" data-toggle="popover" data-placement="right" rel="popover" data-html="true"' + '       title="' + KO_DATERANGEPICKER_LABELS.CUSTOM_POPOVER_TITLE + '"' + '       data-content="' + KO_DATERANGEPICKER_LABELS.CUSTOM_POPOVER_CONTENT + '">' + '&nbsp;&nbsp;<i class="fa fa-question-circle"></i>' + ' </span>' + '</div>' + '<div class="facet-field-cnt custom">' + '<div class="facet-field-label facet-field-label-fixed-width">' + KO_DATERANGEPICKER_LABELS.END + '</div>' + '<div class="input-prepend input-group">' + '<span class="add-on input-group-addon"><i class="fa fa-calendar-o"></i></span>' + '<input type="text" class="input-large form-control end-date-custom" />' + '</div>' + '</div>' + '<div class="facet-field-cnt custom">' + '<div class="facet-field-label facet-field-label-fixed-width">' + KO_DATERANGEPICKER_LABELS.INTERVAL + '</div>' + '<div class="input-prepend input-group">' + '<span class="add-on input-group-addon"><i class="fa fa-repeat"></i></span>' + '<input type="text" class="input-large form-control interval-custom" />' + '</div>' + '</div>' + '</div>');
    _tmpl.insertAfter(_el);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.custom-popover').popover();
    var _minMoment = moment(_options.min());
    var _maxMoment = moment(_options.max());
    if (_minMoment.isValid() && _maxMoment.isValid()) {
      _tmpl.find('.facet-field-cnt.custom').hide();
      _tmpl.find('.facet-field-cnt.picker').show();
      _tmpl.find('.start-date').val(_minMoment.utc().format(DATE_FORMAT));
      _tmpl.find('.start-time').val(_minMoment.utc().format(TIME_FORMAT));
      _tmpl.find('.end-date').val(_maxMoment.utc().format(DATE_FORMAT));
      _tmpl.find('.end-time').val(_maxMoment.utc().format(TIME_FORMAT));
      _tmpl.find('.interval').val(_options.gap());
      _tmpl.find('.interval-select').val(_options.gap());
      _tmpl.find('.interval-custom').val(_options.gap());
      if (_tmpl.find('.interval-select').val() == null || knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.dateRangePicker.EXTRA_INTERVAL_OPTIONS.indexOf(_tmpl.find('.interval-select').val()) > -1) {
        pushIntervalValue(_options.gap());
        _tmpl.find('.facet-field-cnt.custom').show();
        _tmpl.find('.facet-field-cnt.picker').hide();
      }
    } else {
      _tmpl.find('.facet-field-cnt.custom').show();
      _tmpl.find('.facet-field-cnt.picker').hide();
      _tmpl.find('.start-date-custom').val(_options.min());
      _tmpl.find('.end-date-custom').val(_options.max());
      _tmpl.find('.interval-custom').val(_options.gap());
      pushIntervalValue(_options.gap());
    }
    if (typeof _options.relatedgap != 'undefined') {
      pushIntervalValue(_options.relatedgap());
    }
    _tmpl.find('.start-date').datepicker({
      format: DATE_FORMAT.toLowerCase()
    }).on('changeDate', function () {
      rangeHandler(true);
    });
    _tmpl.find('.start-date').on('change', function () {
      rangeHandler(true);
    });
    _tmpl.find('.start-time').timepicker({
      minuteStep: 1,
      showSeconds: true,
      showMeridian: false,
      defaultTime: false
    });
    _tmpl.find('.end-date').datepicker({
      format: DATE_FORMAT.toLowerCase()
    }).on('changeDate', function () {
      rangeHandler(false);
    });
    _tmpl.find('.end-date').on('change', function () {
      rangeHandler(true);
    });
    _tmpl.find('.end-time').timepicker({
      minuteStep: 1,
      showSeconds: true,
      showMeridian: false,
      defaultTime: false
    });
    _tmpl.find('.start-time').on('change', function () {
      // the timepicker plugin doesn't have a change event handler
      // so we need to wait a bit to handle in with the default field event
      window.setTimeout(function () {
        rangeHandler(true);
      }, 200);
    });
    _tmpl.find('.end-time').on('change', function () {
      window.setTimeout(function () {
        rangeHandler(false);
      }, 200);
    });
    if (_minMoment.isValid() && _maxMoment.isValid()) {
      rangeHandler(true);
    }
    _tmpl.find('.facet-field-cnt.picker .facet-field-switch a').on('click', function () {
      _tmpl.find('.facet-field-cnt.custom').show();
      _tmpl.find('.facet-field-cnt.picker').hide();
    });
    _tmpl.find('.facet-field-cnt.custom .facet-field-switch a').on('click', function () {
      _tmpl.find('.facet-field-cnt.custom').hide();
      _tmpl.find('.facet-field-cnt.picker').show();
    });
    _tmpl.find('.start-date-custom').on('change', function () {
      _options.min(_tmpl.find('.start-date-custom').val());
      _tmpl.find('.start-date').val(moment(_options.min()).utc().format(DATE_FORMAT));
      _tmpl.find('.start-time').val(moment(_options.min()).utc().format(TIME_FORMAT));
      _options.start(_options.min());
    });
    _tmpl.find('.end-date-custom').on('change', function () {
      _options.max(_tmpl.find('.end-date-custom').val());
      _tmpl.find('.end-date').val(moment(_options.max()).utc().format(DATE_FORMAT));
      _tmpl.find('.end-time').val(moment(_options.max()).utc().format(TIME_FORMAT));
      _options.end(_options.max());
    });
    _tmpl.find('.interval-custom').on('change', function () {
      _options.gap(_tmpl.find('.interval-custom').val());
      matchIntervals(true);
      if (typeof _options.relatedgap != 'undefined') {
        _options.relatedgap(_options.gap());
      }
    });
    function pushIntervalValue(newValue) {
      var _found = false;
      knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.dateRangePicker.INTERVAL_OPTIONS.forEach(function (interval) {
        if (interval.value == newValue) {
          _found = true;
        }
      });
      if (!_found) {
        knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.dateRangePicker.INTERVAL_OPTIONS.push({
          value: newValue,
          label: newValue
        });
        knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.dateRangePicker.EXTRA_INTERVAL_OPTIONS.push(newValue);
        _intervalOptions.push('<option value="' + newValue + '">' + newValue + '</option>');
      }
    }
    function matchIntervals(fromCustom) {
      _tmpl.find('.interval-select').val(_options.gap());
      if (_tmpl.find('.interval-select').val() == null) {
        if (fromCustom) {
          pushIntervalValue(_options.gap());
          if (bindingContext.$root.intervalOptions) {
            bindingContext.$root.intervalOptions(knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.dateRangePicker.INTERVAL_OPTIONS);
          }
        } else {
          _tmpl.find('.interval-select').val(_tmpl.find('.interval-select option:first').val());
          _options.gap(_tmpl.find('.interval-select').val());
          if (typeof _options.relatedgap != 'undefined') {
            _options.relatedgap(_options.gap());
          }
          _tmpl.find('.interval-custom').val(_options.gap());
        }
      }
    }
    _tmpl.find('.interval-select').on('change', function () {
      _options.gap(_tmpl.find('.interval-select').val());
      if (typeof _options.relatedgap != 'undefined') {
        _options.relatedgap(_options.gap());
      }
      _tmpl.find('.interval').val(_options.gap());
      _tmpl.find('.interval-custom').val(_options.gap());
    });
    function rangeHandler(isStart) {
      var startDate = moment(_tmpl.find('.start-date').val() + ' ' + _tmpl.find('.start-time').val(), DATETIME_FORMAT);
      var endDate = moment(_tmpl.find('.end-date').val() + ' ' + _tmpl.find('.end-time').val(), DATETIME_FORMAT);
      if (startDate.valueOf() > endDate.valueOf()) {
        if (isStart) {
          _tmpl.find('.end-date').val(startDate.utc().format(DATE_FORMAT));
          _tmpl.find('.end-date').datepicker('setValue', startDate.utc().format(DATE_FORMAT));
          _tmpl.find('.end-date').data('original-val', _tmpl.find('.end-date').val());
          _tmpl.find('.end-time').val(startDate.utc().format(TIME_FORMAT));
        } else {
          if (_tmpl.find('.end-date').val() === _tmpl.find('.start-date').val()) {
            _tmpl.find('.end-time').val(startDate.utc().format(TIME_FORMAT));
            _tmpl.find('.end-time').data('timepicker').setValues(startDate.format(TIME_FORMAT));
          } else {
            _tmpl.find('.end-date').val(_tmpl.find('.end-date').data('original-val'));
            _tmpl.find('.end-date').datepicker('setValue', _tmpl.find('.end-date').data('original-val'));
          }
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_ERROR_TOPIC, {
            message: 'The end cannot be before the starting moment',
            noStick: true
          });
        }
      } else {
        _tmpl.find('.end-date').data('original-val', _tmpl.find('.end-date').val());
        _tmpl.find('.start-date').datepicker('hide');
        _tmpl.find('.end-date').datepicker('hide');
      }
      var _calculatedStartDate = moment(_tmpl.find('.start-date').val() + ' ' + _tmpl.find('.start-time').val(), DATETIME_FORMAT);
      var _calculatedEndDate = moment(_tmpl.find('.end-date').val() + ' ' + _tmpl.find('.end-time').val(), DATETIME_FORMAT);
      _options.min(_calculatedStartDate.format('YYYY-MM-DD[T]HH:mm:ss[Z]'));
      _options.start(_options.min());
      _options.max(_calculatedEndDate.format('YYYY-MM-DD[T]HH:mm:ss[Z]'));
      _options.end(_options.max());
      _tmpl.find('.start-date-custom').val(_options.min());
      _tmpl.find('.end-date-custom').val(_options.max());
      var _opts = [];
      // hide not useful options from interval
      if (_calculatedEndDate.diff(_calculatedStartDate, 'minutes') > 1 && _calculatedEndDate.diff(_calculatedStartDate, 'minutes') <= 60) {
        _opts = enableOptions('200MILLISECONDS', '1SECONDS', '1MINUTES', '5MINUTES', '10MINUTES', '30MINUTES');
      }
      if (_calculatedEndDate.diff(_calculatedStartDate, 'hours') > 1 && _calculatedEndDate.diff(_calculatedStartDate, 'hours') <= 12) {
        _opts = enableOptions('5MINUTES', '10MINUTES', '30MINUTES', '1HOURS', '3HOURS');
      }
      if (_calculatedEndDate.diff(_calculatedStartDate, 'hours') > 12 && _calculatedEndDate.diff(_calculatedStartDate, 'hours') < 36) {
        _opts = enableOptions('10MINUTES', '30MINUTES', '1HOURS', '3HOURS', '6HOURS', '12HOURS');
      }
      if (_calculatedEndDate.diff(_calculatedStartDate, 'days') > 1 && _calculatedEndDate.diff(_calculatedStartDate, 'days') <= 7) {
        _opts = enableOptions('30MINUTES', '1HOURS', '3HOURS', '6HOURS', '12HOURS', '1DAYS');
      }
      if (_calculatedEndDate.diff(_calculatedStartDate, 'days') > 7 && _calculatedEndDate.diff(_calculatedStartDate, 'days') <= 14) {
        _opts = enableOptions('3HOURS', '6HOURS', '12HOURS', '1DAYS');
      }
      if (_calculatedEndDate.diff(_calculatedStartDate, 'days') > 14 && _calculatedEndDate.diff(_calculatedStartDate, 'days') <= 31) {
        _opts = enableOptions('12HOURS', '1DAYS', '7DAYS');
      }
      if (_calculatedEndDate.diff(_calculatedStartDate, 'months') >= 1) {
        _opts = enableOptions('1DAYS', '7DAYS', '1MONTHS');
      }
      if (_calculatedEndDate.diff(_calculatedStartDate, 'months') > 6) {
        _opts = enableOptions('1DAYS', '7DAYS', '1MONTHS', '6MONTHS');
      }
      if (_calculatedEndDate.diff(_calculatedStartDate, 'months') > 12) {
        _opts = enableOptions('7DAYS', '1MONTHS', '6MONTHS', '1YEARS', '10YEARS');
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.interval-select').html(renderOptions(_opts));
      matchIntervals(true);
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.datepicker.js":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.datepicker.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.datepicker = {
  init: function init(element, valueAccessor, allBindings) {
    var _el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var _options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    _el.datepicker({
      format: 'yyyy-mm-dd'
    }).on('show', function (e) {
      if (_options.momentFormat) {
        var m = moment.utc(_el.val());
        _el.datepicker('setValue', m.format('YYYY-MM-DD'));
        _el.val(m.format(_options.momentFormat)); // Set value again as datepicker clears the time component
      }
    }).on('changeDate', function (e) {
      setDate(e.date);
    }).on('hide', function (e) {
      setDate(e.date);
    });
    function setDate(d) {
      if (_options.momentFormat) {
        var m = moment(d);
        // Keep time intact
        var previous = moment.utc(allBindings().value());
        previous.date(m.date());
        previous.month(m.month());
        previous.year(m.year());
        _el.val(previous.format(_options.momentFormat));
      }
      allBindings().value(_el.val());
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.dblClick.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.dblClick.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.dblclick = {
  init: function init(element, valueAccessor, allBindingsAccessor, viewModel) {
    var fn = valueAccessor();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).dblclick(function () {
      var data = knockout__WEBPACK_IMPORTED_MODULE_1__.dataFor(this);
      fn.call(viewModel, data);
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.delayedOverflow.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.delayedOverflow.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.delayedOverflow = {
  init: function init(element, valueAccessor) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    $element.css('overflow', 'hidden');
    var isTouch = false;
    $element.on('touchstart', function () {
      isTouch = true;
    });
    var scrollTimeout = -1;
    $element.hover(function () {
      scrollTimeout = window.setTimeout(function () {
        $element.css('overflow', 'auto');
      }, valueAccessor && valueAccessor() === 'slow' ? 500 : 30);
    }, function () {
      if (!isTouch) {
        clearTimeout(scrollTimeout);
        $element.css('overflow', 'hidden');
      }
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.dockable.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.dockable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_screen_scrollbarWidth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/screen/scrollbarWidth */ "./desktop/core/src/desktop/js/utils/screen/scrollbarWidth.ts");
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





knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.dockable = {
  init: function init(element, valueAccessor) {
    var options = valueAccessor() || {};
    var scrollable = options.scrollable ? options.scrollable : window;
    var triggerAdjust = options.triggerAdjust || 0;
    var zIndex = options.zIndex || 1000;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).addClass('dockable');
    var initialTopPosition = -1;
    var initialSize = {
      w: jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).width() - (0,utils_screen_scrollbarWidth__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      h: jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).outerHeight() + (options.jumpCorrection || 0)
    };
    var ghost = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').css({
      display: 'none',
      height: initialSize.h
    }).insertBefore(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element));
    function dock() {
      if (initialTopPosition === -1) {
        initialTopPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).position().top;
        ghost.height(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).outerHeight() + (options.jumpCorrection || 0));
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(scrollable).scrollTop() + triggerAdjust > initialTopPosition) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('style', 'position: fixed!important; top: ' + options.topSnap + '; width: ' + initialSize.w + 'px!important; z-index: ' + zIndex);
        ghost.show();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).removeAttr('style');
        ghost.hide();
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(scrollable).on('scroll', dock);
    var scrollOffSubscription = utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('scrollable.scroll.off', function (scrollElement) {
      if (scrollElement === scrollable) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(scrollable).on('scroll', dock);
      }
    });
    function resetInitialStyle() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).removeAttr('style');
      initialSize = {
        w: jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).width() - (0,utils_screen_scrollbarWidth__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        h: jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).outerHeight() + (options.jumpCorrection || 0)
      };
      dock();
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', resetInitialStyle);
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize', resetInitialStyle);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(scrollable).off('scroll', dock);
      scrollOffSubscription.remove();
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.documentChooser.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.documentChooser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
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




var TYPE_MAP = {
  hive: 'query-hive',
  impala: 'query-impala',
  java: 'query-java',
  spark: 'query-spark2',
  pig: 'query-pig',
  sqoop: 'query-sqoop1',
  'distcp-doc': 'query-distcp',
  'shell-doc': 'query-shell',
  'mapreduce-doc': 'query-mapreduce',
  'hive-document-widget': 'query-hive',
  'impala-document-widget': 'query-impala',
  'java-document-widget': 'query-java',
  'spark-document-widget': 'query-spark2',
  'pig-document-widget': 'query-pig',
  'sqoop-document-widget': 'query-sqoop1',
  'distcp-document-widget': 'query-distcp',
  'shell-document-widget': 'query-shell',
  'mapreduce-document-widget': 'query-mapreduce'
};
knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.documentChooser = {
  init: function init(element, valueAccessor) {
    var options = valueAccessor();
    var type = 'query-hive';
    if (options.type) {
      var tempType = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.type);
      if (tempType === 'function') {
        tempType = tempType();
      }
      type = TYPE_MAP[tempType] ? TYPE_MAP[tempType] : tempType;
    }
    var firstLoad = false;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).selectize({
      valueField: 'uuid',
      labelField: 'name',
      searchField: 'name',
      options: [],
      create: false,
      preload: true,
      dropdownParent: 'body',
      render: {
        option: function option(item, escape) {
          return '<div>' + '<strong>' + escape(item.name) + '</strong><br>' + '<span class="muted">' + escape(item.description) + '</span>' + '</div>';
        }
      },
      load: function load(query, callback) {
        if (query === '' && options.value && !firstLoad) {
          firstLoad = true;
        }
        _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].searchDocuments({
          type: type,
          text: query,
          include_trashed: false,
          limit: 100,
          successCallback: function successCallback(data) {
            callback(data.documents);
          }
        });
      },
      onChange: function onChange(val) {
        if (options.value) {
          options.value(val);
        }
        if (options.document) {
          options.document(this.options[val]);
        }
        if (options.mappedDocument) {
          options.mappedDocument(knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.fromJS(this.options[val]));
        }
      },
      onLoad: function onLoad() {
        if (options.value) {
          this.setValue(options.value());
        }
        if (options.loading) {
          options.loading(false);
        }
      }
    });
  },
  update: function update(element, valueAccessor) {
    var options = valueAccessor();
    if (options.value) {
      element.selectize.setValue(options.value());
    }
    if (options.dependentValue && options.dependentValue() !== '') {
      element.selectize.setValue(options.dependentValue());
      options.dependentValue('');
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.documentContextPopover.js":
/*!******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.documentContextPopover.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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
 * Show the Context Popover for Documents when the bound element is clicked.
 *
 * Parameters:
 *
 * {string} uuid - the uuid of the document
 * {string} [orientation] - 'top', 'right', 'bottom', 'left'. Default 'right'
 * {Object} [offset] - Optional offset from the element
 * {number} [offset.top] - Offset in pixels
 * {number} [offset.left] - Offset in pixels
 *
 * Examples:
 *
 * data-bind="documentContextPopover: { uuid: 'bana-na12-3456-7890' }"
 * data-bind="documentContextPopover: { uuid: 'bana-na12-3456-7890', orientation: 'bottom', offset: { top: 5 } }"
 *
 * @type {{init: ko.bindingHandlers.documentContextPopover.init}}
 */
knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.documentContextPopover = {
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.click.init(element, function () {
      return function () {
        var options = valueAccessor();
        _api_apiHelper__WEBPACK_IMPORTED_MODULE_2__["default"].fetchDocument({
          uuid: options.uuid,
          fetchContents: true,
          silenceErrors: true
        }).done(function (response) {
          var $source = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
          var offset = $source.offset();
          if (options.offset) {
            offset.top += options.offset.top || 0;
            offset.left += options.offset.left || 0;
          }
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('context.popover.show', {
            data: {
              type: 'hue',
              definition: response.document
            },
            showInAssistEnabled: true,
            orientation: options.orientation || 'right',
            source: {
              element: element,
              left: offset.left,
              top: offset.top,
              right: offset.left + $source.width(),
              bottom: offset.top + $source.height()
            }
          });
        });
      };
    }, allBindings, viewModel, bindingContext);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.draggableText.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.draggableText.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DRAGGABLE_TEXT_META_EVENT": () => (/* binding */ DRAGGABLE_TEXT_META_EVENT),
/* harmony export */   "NAME": () => (/* binding */ NAME)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _bindingUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bindingUtils */ "./desktop/core/src/desktop/js/ko/bindings/bindingUtils.js");
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





var DRAGGABLE_TEXT_META_EVENT = 'draggable.text.meta';
var NAME = 'draggableText';
var moreThanTenPixels = function moreThanTenPixels(startX, startY, event) {
  return Math.sqrt((startX - event.clientX) * (startX - event.clientX) + (startY - event.clientY) * (startY - event.clientY)) > 10;
};
(0,_bindingUtils__WEBPACK_IMPORTED_MODULE_3__.registerBinding)(NAME, {
  init: function init(element, valueAccessor) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = valueAccessor();
    var dragStartX = -1;
    var dragStartY = -1;
    var notifiedOnDragStarted = false;
    var $helper;
    $element.addClass('draggableText');
    $element.draggable({
      helper: function helper() {
        $helper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').text(knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.text)).css('z-index', '99999');
        return $helper;
      },
      appendTo: 'body',
      start: function start(event) {
        dragStartX = event.clientX;
        dragStartY = event.clientY;
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(DRAGGABLE_TEXT_META_EVENT, options.meta);
        notifiedOnDragStarted = false;
      },
      drag: function drag(event) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('draggable.text.drag', {
          event: event,
          meta: options.meta
        });
        if (!notifiedOnDragStarted && moreThanTenPixels(dragStartX, dragStartY, event)) {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('draggable.text.started', options.meta);
          notifiedOnDragStarted = true;
        }
      },
      stop: function stop(event) {
        if ($helper) {
          $helper.remove();
        }
        if (!moreThanTenPixels(dragStartX, dragStartY, event)) {
          var elementAtStart = document.elementFromPoint(dragStartX, dragStartY);
          var elementAtStop = document.elementFromPoint(event.clientX, event.clientY);
          if (elementAtStart === elementAtStop) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(elementAtStop).trigger('click');
          }
        }
        notifiedOnDragStarted = false;
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('draggable.text.stopped');
      }
    });
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $element.draggable('destroy');
    });
  }
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.dropdown.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.dropdown.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.dropdown = {
  init: function init(element) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).dropdown();
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.dropzone.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.dropzone.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
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








// TODO: Depends on Dropzone

knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.dropzone = {
  init: function init(element, valueAccessor) {
    var value = knockout__WEBPACK_IMPORTED_MODULE_2__.unwrap(valueAccessor());
    if (value.disabled) {
      return;
    }
    var options = {
      autoDiscover: false,
      timeout: 300000,
      maxFilesize: 5000000,
      previewsContainer: '#progressStatusContent',
      previewTemplate: '<div class="progress-row">' + '<span class="break-word" data-dz-name></span>' + '<div class="pull-right">' + '<span class="muted" data-dz-size></span>&nbsp;&nbsp;' + '<span data-dz-remove><a href="javascript:undefined;" title="' + (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('Cancel upload') + '"><i class="fa fa-fw fa-times"></i></a></span>' + '<span style="display: none" data-dz-uploaded><i class="fa fa-fw fa-check muted"></i></span>' + '</div>' + '<div class="progress-row-bar" data-dz-uploadprogress></div>' + '</div>',
      sending: function sending() {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.hoverMsg').addClass('hide');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#progressStatus').removeClass('hide');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#progressStatusBar').removeClass('hide');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#progressStatus .progress-row').remove();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#progressStatusBar div').css('width', '0');
      },
      uploadprogress: function uploadprogress(file, progress) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-dz-name]').each(function (cnt, item) {
          if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(item).text() === file.name) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(item).parents('.progress-row').find('[data-dz-uploadprogress]').width(progress.toFixed() + '%');
            if (progress.toFixed() === '100') {
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(item).parents('.progress-row').find('[data-dz-remove]').hide();
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(item).parents('.progress-row').find('[data-dz-uploaded]').show();
            }
          }
        });
      },
      totaluploadprogress: function totaluploadprogress(progress) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#progressStatusBar div').width(progress.toFixed() + '%');
      },
      canceled: function canceled() {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_INFO_TOPIC, {
          message: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('The upload has been canceled')
        });
      },
      complete: function complete(file) {
        if (file.xhr.response !== '') {
          var response = JSON.parse(file.xhr.response);
          if (response && response.status != null) {
            if (response.status !== 0) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_ERROR_TOPIC, {
                message: response.data
              });
              if (value.onError) {
                value.onError(file.name);
              }
            } else {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_3__.GLOBAL_INFO_TOPIC, {
                message: response.path + ' ' + (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('uploaded successfully')
              });
              if (value.onComplete) {
                value.onComplete(response.path);
              }
            }
          }
        }
      },
      queuecomplete: function queuecomplete() {
        window.setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('#progressStatus').addClass('hide');
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('#progressStatusBar').addClass('hide');
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('#progressStatusBar div').css('width', '0');
        }, 2500);
      },
      createImageThumbnails: false
    };
    jquery__WEBPACK_IMPORTED_MODULE_1___default().extend(options, value);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(element).addClass('dropzone');
    new (dropzone__WEBPACK_IMPORTED_MODULE_0___default())(element, options);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.duration.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.duration.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sprintf-js */ "./node_modules/sprintf-js/src/sprintf.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_2__);
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.duration = function () {
  var that;
  return that = {
    init: function init(element, valueAccessor) {
      that.format(element, valueAccessor);
    },
    update: function update(element, valueAccessor) {
      that.format(element, valueAccessor);
    },
    format: function format(element, valueAccessor) {
      var value = valueAccessor();
      var formatted = that.humanTime(knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(value));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).text(formatted);
    },
    humanTime: function humanTime(value) {
      value = value * 1;
      if (value < Math.pow(10, 3)) {
        return sprintf_js__WEBPACK_IMPORTED_MODULE_2___default().sprintf('%i ns', value);
      } else if (value - Math.pow(10, 6) < -Math.pow(10, 3) / 2) {
        // Make sure rounding doesn't cause numbers to have more than 4 significant digits.
        value = value * 1.0 / Math.pow(10, 3);
        var sprint = value > 100 ? '%i us' : '%.1f us';
        return sprintf_js__WEBPACK_IMPORTED_MODULE_2___default().sprintf(sprint, value);
      } else if (value - Math.pow(10, 9) < -Math.pow(10, 6) / 2) {
        value = value * 1.0 / Math.pow(10, 6);
        var _sprint = value > 100 ? '%i ms' : '%.1f ms';
        return sprintf_js__WEBPACK_IMPORTED_MODULE_2___default().sprintf(_sprint, value);
      } else {
        // get the ms value
        var SECOND = 1;
        var MINUTE = SECOND * 60;
        var HOUR = MINUTE * 60;
        value = value * 1 / Math.pow(10, 9);
        var buffer = '';
        if (value > HOUR) {
          buffer += sprintf_js__WEBPACK_IMPORTED_MODULE_2___default().sprintf('%i h', value / HOUR);
          value = value % HOUR;
        }
        if (buffer.length < 4 && value > MINUTE) {
          var _sprint2 = buffer.length ? ' %i m' : '%i m';
          buffer += sprintf_js__WEBPACK_IMPORTED_MODULE_2___default().sprintf(_sprint2, value / MINUTE);
          value = value % MINUTE;
        }
        if (buffer.length < 4 && value > SECOND) {
          var _sprint3 = buffer.length ? ' %i s' : '%.1f s';
          buffer += sprintf_js__WEBPACK_IMPORTED_MODULE_2___default().sprintf(_sprint3, value * 1.0 / SECOND);
        }
        return buffer;
      }
    }
  };
}();

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.ellipsis.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.ellipsis.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.ellipsis = {
  update: function update(element, valueAccessor) {
    var value = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var chopLength = value.length ? value.length : 30;
    var text = _typeof(value) === 'object' ? knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(value.data) : value;
    if (text.length > chopLength) {
      $element.attr('title', text);
      $element.text(text.substr(0, chopLength) + '...');
    } else {
      $element.text(text);
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.fadeVisible.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.fadeVisible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.fadeVisible = {
  init: function init(element, valueAccessor) {
    var value = valueAccessor();
    var toggleValue = typeof value.value === 'undefined' ? value : value.value;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).toggle(knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(toggleValue));
  },
  update: function update(element, valueAccessor) {
    var value = valueAccessor();
    var toggleValue = typeof value.value === 'undefined' ? value : value.value;
    var speed = typeof value.speed === 'undefined' ? 'normal' : value.speed;
    var fadeOut = typeof value.fadeOut === 'undefined' ? false : value.fadeOut;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).stop();
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(toggleValue)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).fadeIn(speed);
    } else if (fadeOut) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).fadeOut(speed);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).hide();
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.fetchMore.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.fetchMore.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.fetchMore = {
  init: function init(element, valueAccessor) {
    var options = valueAccessor();
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var throttle = -1;
    $element.on('scroll.fetchMore', function () {
      window.clearTimeout(throttle);
      throttle = window.setTimeout(function () {
        if (element.scrollTop + $element.innerHeight() >= element.scrollHeight - 10 && knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.hasMore) && !knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.loadingMore)) {
          options.fetchMore();
        }
      }, 100);
    });
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $element.off('scroll.fetchMore');
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.fileChooser.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.fileChooser.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_html_getFileBrowseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/html/getFileBrowseButton */ "./desktop/core/src/desktop/js/utils/html/getFileBrowseButton.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.filechooser = {
  init: function init(element, valueAccessor, allBindingsAccessor) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(allBindingsAccessor());
    $element.attr('autocomplete', 'off');
    if (typeof valueAccessor() == 'function' || typeof valueAccessor().value == 'function') {
      $element.val(valueAccessor().value ? valueAccessor().value() : valueAccessor()());
      $element.data('fullPath', $element.val());
      $element.attr('data-original-title', $element.val());
      if (valueAccessor().displayJustLastBit) {
        var _val = $element.val();
        $element.val(_val.split('/')[_val.split('/').length - 1]);
      }
      $element.on('blur', function () {
        if (valueAccessor().value) {
          if (valueAccessor().displayJustLastBit) {
            var _val2 = $element.data('fullPath');
            valueAccessor().value(_val2.substr(0, _val2.lastIndexOf('/')) + '/' + $element.val());
          } else {
            valueAccessor().value($element.val());
          }
          $element.data('fullPath', valueAccessor().value());
        } else {
          valueAccessor()($element.val());
          $element.data('fullPath', valueAccessor()());
        }
        $element.attr('data-original-title', $element.data('fullPath'));
      });
      if (options.valueUpdate && options.valueUpdate === 'afterkeydown') {
        $element.on('keyup', function () {
          if (valueAccessor().value) {
            valueAccessor().value($element.val());
          } else {
            valueAccessor()($element.val());
          }
        });
      }
    } else {
      $element.val(valueAccessor());
      $element.on('blur', function () {
        valueAccessor($element.val());
      });
      if (options.valueUpdate && options.valueUpdate === 'afterkeydown') {
        $element.on('keyup', function () {
          valueAccessor($element.val());
        });
      }
    }
    $element.after((0,utils_html_getFileBrowseButton__WEBPACK_IMPORTED_MODULE_2__["default"])($element, true, valueAccessor, true, allBindingsAccessor, valueAccessor().isAddon, valueAccessor().isNestedModal, allBindingsAccessor && allBindingsAccessor().filechooserOptions && allBindingsAccessor().filechooserOptions.linkMarkup));
    if (allBindingsAccessor && allBindingsAccessor().filechooserOptions && allBindingsAccessor().filechooserOptions.openOnFocus) {
      $element.on('focus', function () {
        if ($element.val() === '') {
          $element.siblings('.filechooser-clickable').click();
        }
      });
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.foreachVisible.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.foreachVisible.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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
 * This binding limits the rendered items based on what is visible within a scrollable container. It supports
 * multiple any amount of nested children with foreachVisible bindings
 *
 * The minHeight parameter is the initial expected rendered height of each entry, once rendered the real
 * height is used. It keeps a number of elements above and below the visible elements to make slow scrolling
 * smooth.
 *
 * The height of the container element has to be less than or equal to the inner height of the window.
 *
 * Example:
 *
 * <div class="container" style="overflow-y: scroll; height: 100px">
 *  <ul data-bind="foreachVisible: { data: items, minHeight: 20, container: '.container' }">
 *    <li>...</li>
 *  </ul>
 * </div>
 *
 * For tables the binding has to be attached to the tbody element:
 *
 * <div class="container" style="overflow-y: scroll; height: 100px">
 *  <table>
 *    <thead>...</thead>
 *    <tbody data-bind="foreachVisible: { data: items, minHeight: 20, container: '.container' }>
 *      <tr>...</tr>
 *    </tbody>
 *  </ul>
 * </div>
 *
 * Currently the binding only supports one element inside the bound element otherwise the height
 * calculations will be off. In other words this will make it go bonkers:
 *
 * <div class="container" style="overflow-y: scroll; height: 100px">
 *  <ul data-bind="foreachVisible: { data: items, minHeight: 20, container: '.container' }">
 *    <li>...</li>
 *    <li style="display: none;">...</li>
 *  </ul>
 * </div>
 *
 */
knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.foreachVisible = {
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    return knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.template.init(element, function () {
      return {
        foreach: [],
        templateEngine: knockout__WEBPACK_IMPORTED_MODULE_1__.nativeTemplateEngine.instance
      };
    }, allBindings, viewModel, bindingContext);
  },
  update: function update(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var options = valueAccessor();
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var isTable = false;
    if ($element.parent().is('table')) {
      $element = $element.parent();
      isTable = true;
    }
    var $container = $element.closest(options.container);
    var id = Math.random();

    // This is possibly a parent element that has the foreachVisible binding
    var $parentFVElement = bindingContext.$parentForeachVisible || null;
    var parentId = bindingContext.$parentForeachVisibleId || -1;
    // This is the element from the parent foreachVisible rendered element that contains
    // this one or container for root
    var $parentFVOwnerElement = $container;
    $element.data('parentForeachVisible', $parentFVElement);
    var depth = bindingContext.$depth || 0;

    // Locate the owning element if within another foreach visible binding
    if ($parentFVElement) {
      var myOffset = $element.offset().top;
      $parentFVElement.children().each(function (idx, child) {
        var $child = jquery__WEBPACK_IMPORTED_MODULE_0___default()(child);
        if (myOffset > $child.offset().top) {
          $parentFVOwnerElement = $child;
        } else {
          return false;
        }
      });
    }
    if ($parentFVOwnerElement.data('disposalFunction')) {
      $parentFVOwnerElement.data('disposalFunction')();
      $parentFVOwnerElement.data('lastKnownHeights', null);
    }
    var entryMinHeight = options.minHeight;
    var allEntries = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(options.data);
    var visibleEntryCount = 0;
    var incrementLimit = 0; // The diff required to re-render, set to visibleCount below
    var elementIncrement = 0; // Elements to add on either side of the visible elements, set to 3x visibleCount
    var endIndex = 0;
    var updateVisibleEntryCount = function updateVisibleEntryCount() {
      // TODO: Drop the window innerHeight limitation.
      // Sometimes after resizeWrapper() is called the reported innerHeight of the $container is the same as
      // the wrapper causing the binding to render all the items. This limits the visibleEntryCount to the
      // window height.
      var newEntryCount = Math.ceil(Math.min(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerHeight(), $container.innerHeight()) / entryMinHeight);
      if (newEntryCount !== visibleEntryCount) {
        var diff = newEntryCount - visibleEntryCount;
        elementIncrement = options.elementIncrement || 25;
        incrementLimit = options.incrementLimit || 5;
        visibleEntryCount = newEntryCount;
        endIndex += diff;
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('foreach.visible.update', id);
      }
    };

    // TODO: Move intervals to webworker
    var updateCountInterval = setInterval(updateVisibleEntryCount, 300);
    updateVisibleEntryCount();

    // In case this element was rendered before use the last known indices
    var startIndex = Math.max($parentFVOwnerElement.data('startIndex') || 0, 0);
    endIndex = Math.min($parentFVOwnerElement.data('endIndex') || visibleEntryCount + elementIncrement, allEntries.length - 1);
    var huePubSubs = [];
    var _scrollToIndex = function scrollToIndex(idx, offset, instant, callback) {
      var lastKnownHeights = $parentFVOwnerElement.data('lastKnownHeights');
      if (!lastKnownHeights || lastKnownHeights.length <= idx) {
        return;
      }
      var top = 0;
      for (var i = 0; i < idx; i++) {
        top += lastKnownHeights[i];
      }
      var bottom = top + lastKnownHeights[idx];
      window.setTimeout(function () {
        var newScrollTop = top + offset;
        if (instant) {
          if (newScrollTop >= $container.height() + $container.scrollTop()) {
            $container.scrollTop(bottom - $container.height());
          } else if (newScrollTop <= $container.scrollTop()) {
            $container.scrollTop(newScrollTop);
          }
        } else {
          $container.stop().animate({
            scrollTop: newScrollTop
          }, '500', 'swing', function () {
            if (callback) {
              callback();
            }
          });
        }
      }, 0);
    };
    if (!options.skipScrollEvent) {
      huePubSubs.push(utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('assist.db.scrollTo', function (targetEntry) {
        var foundIndex = -1;
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(allEntries, function (idx, entry) {
          if (targetEntry === entry) {
            foundIndex = idx;
            return false;
          }
        });
        if (foundIndex !== -1) {
          var offset = depth > 0 ? $parentFVOwnerElement.position().top : 0;
          _scrollToIndex(foundIndex, offset, false, function () {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('assist.db.scrollToComplete', targetEntry);
          });
        }
      }));
    }
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(viewModel.foreachVisible)) {
      viewModel.foreachVisible({
        scrollToIndex: function scrollToIndex(index) {
          var offset = depth > 0 ? $parentFVOwnerElement.position().top : 0;
          _scrollToIndex(index, offset, true);
        }
      });
    }
    var childBindingContext = bindingContext.createChildContext(bindingContext.$rawData, null, function (context) {
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.extend(context, {
        $parentForeachVisible: $element,
        $parentForeachVisibleId: id,
        $depth: depth + 1,
        $indexOffset: function $indexOffset() {
          return startIndex;
        }
      });
    });
    var $wrapper = $element.parent();
    if (!$wrapper.hasClass('foreach-wrapper')) {
      $wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').css({
        position: 'relative',
        width: '100%'
      }).addClass('foreach-wrapper').insertBefore($element);
      if (options.usePreloadBackground) {
        $wrapper.addClass('assist-preloader-wrapper');
        $element.addClass('assist-preloader');
      }
      $element.css({
        position: 'absolute',
        top: 0,
        width: '100%'
      }).appendTo($wrapper);
    }

    // This is kept up to date with the currently rendered elements, it's used to keep track of any
    // height changes of the elements.
    var renderedElements = [];
    if (!$parentFVOwnerElement.data('lastKnownHeights') || $parentFVOwnerElement.data('lastKnownHeights').length !== allEntries.length) {
      var lastKnownHeights = [];
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(allEntries, function () {
        lastKnownHeights.push(entryMinHeight);
      });
      $parentFVOwnerElement.data('lastKnownHeights', lastKnownHeights);
    }
    var resizeWrapper = function resizeWrapper() {
      var totalHeight = 0;
      var lastKnownHeights = $parentFVOwnerElement.data('lastKnownHeights');
      if (!lastKnownHeights) {
        return;
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(lastKnownHeights, function (idx, height) {
        totalHeight += height;
      });
      $wrapper.height(totalHeight + 'px');
    };
    resizeWrapper();
    var updateLastKnownHeights = function updateLastKnownHeights() {
      if ($container.data('busyRendering')) {
        return;
      }
      var lastKnownHeights = $parentFVOwnerElement.data('lastKnownHeights');
      // Happens when closing first level and the third level is open, disposal tells the parents
      // to update their heights...
      if (!lastKnownHeights) {
        return;
      }
      var diff = false;
      var updateEntryCount = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(renderedElements, function (idx, renderedElement) {
        // TODO: Figure out why it goes over index at the end scroll position
        if (startIndex + idx < lastKnownHeights.length) {
          var renderedHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(renderedElement).outerHeight(true);
          if (renderedHeight > 5 && lastKnownHeights[startIndex + idx] !== renderedHeight) {
            if (renderedHeight < entryMinHeight) {
              entryMinHeight = renderedHeight;
              updateEntryCount = true;
            }
            lastKnownHeights[startIndex + idx] = renderedHeight;
            diff = true;
          }
        }
      });
      if (updateEntryCount) {
        updateVisibleEntryCount();
      }
      // Only resize if a difference in height was noticed.
      if (diff) {
        $parentFVOwnerElement.data('lastKnownHeights', lastKnownHeights);
        resizeWrapper();
      }
    };
    var updateHeightsInterval = window.setInterval(updateLastKnownHeights, 600);
    huePubSubs.push(utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('foreach.visible.update.heights', function (targetId) {
      if (targetId === id) {
        clearInterval(updateHeightsInterval);
        updateLastKnownHeights();
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('foreach.visible.update.heights', parentId);
        updateHeightsInterval = window.setInterval(updateLastKnownHeights, 600);
      }
    }));
    updateLastKnownHeights();
    var positionList = function positionList() {
      var lastKnownHeights = $parentFVOwnerElement.data('lastKnownHeights');
      if (!lastKnownHeights) {
        return;
      }
      var top = 0;
      for (var i = 0; i < startIndex; i++) {
        top += lastKnownHeights[i];
      }
      $element.css('top', top + 'px');
    };
    var _afterRender = function afterRender() {
      renderedElements = isTable ? $element.children('tbody').children() : $element.children();
      $container.data('busyRendering', false);
      if (typeof options.fetchMore !== 'undefined' && endIndex === allEntries.length - 1) {
        options.fetchMore();
      }
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('foreach.visible.update.heights', id);
    };
    var render = function render() {
      if (endIndex === 0 && allEntries.length > 1 || endIndex < 0) {
        knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.template.update(element, function () {
          return {
            foreach: [],
            templateEngine: knockout__WEBPACK_IMPORTED_MODULE_1__.nativeTemplateEngine.instance,
            afterRender: function afterRender() {
              // This is called once for each added element (not when elements are removed)
              clearTimeout(throttle);
              throttle = setTimeout(_afterRender, 0);
            }
          };
        }, allBindings, viewModel, childBindingContext);
        return;
      }
      $container.data('busyRendering', true);
      // Save the start and end index for when the list is removed and is shown again.
      $parentFVOwnerElement.data('startIndex', startIndex);
      $parentFVOwnerElement.data('endIndex', endIndex);
      positionList();

      // This is to ensure that our afterRender is called (the afterRender of KO below isn't called
      // when only elements are removed)
      var throttle = setTimeout(_afterRender, 0);
      knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.template.update(element, function () {
        return {
          foreach: allEntries.slice(startIndex, endIndex + 1),
          templateEngine: knockout__WEBPACK_IMPORTED_MODULE_1__.nativeTemplateEngine.instance,
          afterRender: function afterRender() {
            // This is called once for each added element (not when elements are removed)
            clearTimeout(throttle);
            throttle = setTimeout(_afterRender, 0);
          }
        };
      }, allBindings, viewModel, childBindingContext);
    };
    var setStartAndEndFromScrollTop = function setStartAndEndFromScrollTop() {
      var lastKnownHeights = $parentFVOwnerElement.data('lastKnownHeights');
      if (!lastKnownHeights) {
        return;
      }
      var parentSpace = 0;
      var $lastParent = $parentFVElement;
      var $lastRef = $element;
      var _loop = function _loop() {
        // Include the header, parent() is .foreach-wrapper, parent().parent() is the container (ul or div)
        var lastRefOffset = $lastRef.parent().parent().offset().top;
        var lastAddedSpace = 0;
        $lastParent.children().each(function (idx, child) {
          var $child = jquery__WEBPACK_IMPORTED_MODULE_0___default()(child);
          if (lastRefOffset > $child.offset().top) {
            lastAddedSpace = $child.outerHeight(true);
            parentSpace += lastAddedSpace;
          } else {
            // Remove the height of the child which is the parent of this
            parentSpace -= lastAddedSpace;
            return false;
          }
        });
        parentSpace += $lastParent.position().top;
        $lastRef = $lastParent;
        $lastParent = $lastParent.data('parentForeachVisible');
      };
      while ($lastParent) {
        _loop();
      }
      var position = Math.min($container.scrollTop() - parentSpace, $wrapper.height());
      for (var i = 0; i < lastKnownHeights.length; i++) {
        position -= lastKnownHeights[i];
        if (position <= 0) {
          startIndex = Math.max(i - elementIncrement, 0);
          endIndex = Math.min(allEntries.length - 1, i + elementIncrement + visibleEntryCount);
          break;
        }
      }
    };
    var renderThrottle = -1;
    var preloadGhostThrottle = -1;
    var lastScrollTop = -1;
    var onScroll = function onScroll() {
      if (startIndex > incrementLimit && Math.abs(lastScrollTop - $container.scrollTop()) < incrementLimit * options.minHeight) {
        return;
      }
      lastScrollTop = $container.scrollTop();
      setStartAndEndFromScrollTop();

      // adds a preload ghost image just on scroll and removes it 200ms after the scroll stops
      if (options.usePreloadBackground) {
        $wrapper.addClass('assist-preloader-ghost');
        clearTimeout(preloadGhostThrottle);
        preloadGhostThrottle = setTimeout(function () {
          $wrapper.removeClass('assist-preloader-ghost');
        }, 200);
      }
      clearTimeout(renderThrottle);
      var startDiff = Math.abs($parentFVOwnerElement.data('startIndex') - startIndex);
      var endDiff = Math.abs($parentFVOwnerElement.data('endIndex') - endIndex);
      if (startDiff > incrementLimit || endDiff > incrementLimit || startDiff !== 0 && startIndex === 0 || endDiff !== 0 && endIndex === allEntries.length - 1) {
        renderThrottle = setTimeout(render, 0);
      }
    };
    huePubSubs.push(utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('foreach.visible.update', function (callerId) {
      if (callerId === id && endIndex > 0) {
        setStartAndEndFromScrollTop();
        clearTimeout(renderThrottle);
        renderThrottle = setTimeout(render, 0);
      }
    }));
    $container.bind('scroll', onScroll);
    $parentFVOwnerElement.data('disposalFunction', function () {
      setTimeout(function () {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('foreach.visible.update.heights', parentId);
      }, 0);
      huePubSubs.forEach(function (pubSub) {
        pubSub.remove();
      });
      $container.unbind('scroll', onScroll);
      clearInterval(updateCountInterval);
      clearInterval(updateHeightsInterval);
      $parentFVOwnerElement.data('disposalFunction', null);
    });
    if (typeof options.pubSubDispose !== 'undefined') {
      huePubSubs.push(utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(options.pubSubDispose, $parentFVOwnerElement.data('disposalFunction')));
    }
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback($wrapper[0], $parentFVOwnerElement.data('disposalFunction'));
    setStartAndEndFromScrollTop();
    render();
  }
};
knockout__WEBPACK_IMPORTED_MODULE_1__.expressionRewriting.bindingRewriteValidators.foreachVisible = false;
knockout__WEBPACK_IMPORTED_MODULE_1__.virtualElements.allowedBindings.foreachVisible = true;

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.fresherEditor.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.fresherEditor.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_html_stripHtmlForFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/html/stripHtmlForFunctions */ "./desktop/core/src/desktop/js/utils/html/stripHtmlForFunctions.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.fresherEditor = {
  init: function init(element, valueAccessor) {
    var _el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(valueAccessor(), {});
    _el.html(options.data());
    _el.freshereditor({
      excludes: ['strikethrough', 'removeFormat', 'insertorderedlist', 'justifyfull', 'insertheading1', 'insertheading2', 'superscript', 'subscript']
    });
    _el.freshereditor('edit', true);
    _el.on('mouseup', function () {
      storeSelection();
      updateValues();
    });
    var sourceDelay = -1;
    _el.on('keyup', function () {
      clearTimeout(sourceDelay);
      storeSelection();
      sourceDelay = setTimeout(function () {
        updateValues();
      }, 100);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.chosen-select').chosen({
      disable_search_threshold: 10,
      width: '75%'
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('addFieldToVisual', function (e, field) {
      _el.focus();
      pasteHtmlAtCaret('{{' + field.name() + '}}');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('addFunctionToVisual', function (e, fn) {
      _el.focus();
      pasteHtmlAtCaret(fn);
    });
    function updateValues() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-template]')[0].editor.setValue((0,utils_html_stripHtmlForFunctions__WEBPACK_IMPORTED_MODULE_2__["default"])(_el.html()));
      valueAccessor().data(_el.html());
    }
    function storeSelection() {
      if (window.getSelection) {
        // IE9 and non-IE
        var sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          var range = sel.getRangeAt(0);
          _el.data('range', range);
        }
      } else if (document.selection && document.selection.type !== 'Control') {
        // IE < 9
        _el.data('selection', document.selection);
      }
    }
    function pasteHtmlAtCaret(html) {
      var sel, range;
      if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          if (_el.data('range')) {
            range = _el.data('range');
          } else {
            range = sel.getRangeAt(0);
          }
          range.deleteContents();

          // Range.createContextualFragment() would be useful here but is
          // non-standard and not supported in all browsers (IE9, for one)
          var el = document.createElement('div');
          el.innerHTML = html;
          var frag = document.createDocumentFragment();
          var node, lastNode;
          while (node = el.firstChild) {
            lastNode = frag.appendChild(node);
          }
          range.insertNode(frag);

          // Preserve the selection
          if (lastNode) {
            range = range.cloneRange();
            range.setStartAfter(lastNode);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }
        }
      } else if (document.selection && document.selection.type !== 'Control') {
        // IE < 9
        if (_el.data('selection')) {
          _el.data('selection').createRange().pasteHTML(html);
        } else {
          document.selection.createRange().pasteHTML(html);
        }
      }
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.hdfsAutocomplete.js":
/*!************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.hdfsAutocomplete.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.hdfsAutocomplete = {
  init: function init(element) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    $element.attr('autocomplete', 'off');
    $element.jHueHdfsAutocomplete({
      skipKeydownEvents: true,
      skipScrollEvent: true
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.hdfsTree.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.hdfsTree.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.hdfsTree = {
  update: function update(element, valueAccessor) {
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    $element.empty();
    $element.jHueHdfsTree({
      home: '',
      isS3: !!options.isS3,
      root: options.root,
      initialPath: options.path,
      withTopPadding: false,
      onPathChange: function onPathChange(path) {
        options.selectedPath(path);
      }
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.highlight.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.highlight.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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





// TODO: Depends on Ace

knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.highlight = {
  init: function init(element) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).addClass('ace-highlight');
  },
  update: function update(element, valueAccessor) {
    var options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
      dialect: 'hive',
      value: '',
      formatted: false
    }, valueAccessor());
    var value = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.value);
    if (typeof value !== 'undefined' && value !== '') {
      // allows highlighting static code
      if (options.path) {
        value = value[options.path];
      }
      ace.require(['ace/mode/impala_highlight_rules', 'ace/mode/hive_highlight_rules', 'ace/mode/xml_highlight_rules', 'ace/tokenizer', 'ace/layer/text', 'ace/config'], function (impalaRules, hiveRules, xmlRules, tokenizer, text, config) {
        var res = [];
        var Tokenizer = tokenizer.Tokenizer;
        var Rules = hiveRules.HiveHighlightRules;
        if (options.dialect && knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.dialect) === 'impala') {
          Rules = impalaRules.ImpalaHighlightRules;
        }
        config.loadModule(['theme', (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__.hueLocalStorage)('hue.ace.theme') || 'ace/theme/hue']);
        var Text = text.Text;
        var tok = new Tokenizer(new Rules().getRules());
        var lines = value.split('\n');
        var renderSimpleLine = function renderSimpleLine(txt, stringBuilder, tokens) {
          var screenColumn = 0;
          var token = tokens[0];
          var value = token.value;
          if (value) {
            try {
              screenColumn = txt.$renderToken(stringBuilder, screenColumn, token, value);
            } catch (e) {
              console.warn(value, 'Failed to get screen column due to some parsing errors, skip rendering.');
            }
          }
          for (var i = 1; i < tokens.length; i++) {
            token = tokens[i];
            value = token.value;
            try {
              screenColumn = txt.$renderToken(stringBuilder, screenColumn, token, value);
            } catch (e) {
              if (console && console.warn) {
                console.warn(value, 'This token has some parsing errors and it has been rendered without highlighting.');
              }
              stringBuilder.push(value);
              screenColumn = screenColumn + value.length;
            }
          }
        };
        var additionalClass = '';
        if (!options.splitLines && !options.formatted) {
          additionalClass = 'pull-left';
        } else if (options.formatted) {
          additionalClass = 'ace-highlight-pre';
        }
        lines.forEach(function (line) {
          var renderedTokens = [];
          var tokens = tok.getLineTokens(line);
          if (tokens && tokens.tokens.length) {
            renderSimpleLine(new Text(document.createElement('div')), renderedTokens, tokens.tokens);
          }
          res.push('<div class="ace_line ' + additionalClass + '">' + renderedTokens.join('') + '&nbsp;</div>');
        });
        element.innerHTML = '<div class="ace_editor ace-hue"' + (options.enableOverflow ? ' style="overflow: initial !important;"' : '') + '><div class="ace_layer" style="position: static;' + (options.enableOverflow ? ' overflow: initial !important;' : '') + '">' + res.join('') + '</div></div>';
        if (options.enableOverflow) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css({
            overflow: 'auto'
          });
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).find('.ace_invisible_space').remove();
      });
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.hiveChooser.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.hiveChooser.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.hiveChooser = {
  update: function update(element, valueAccessor, allBindingsAccessor) {
    var self = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var complexConfiguration = false;
    if (typeof options === 'function') {
      self.val(options());
    } else if (options && options.data) {
      self.val(options.data);
      complexConfiguration = true;
    } else {
      self.val(options);
    }
    if (complexConfiguration) {
      self.jHueGenericAutocomplete({
        showOnFocus: true,
        skipColumns: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.skipColumns),
        skipTables: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.skipTables),
        startingPath: options.database + '.',
        rewriteVal: true,
        onPathChange: options.onChange,
        namespace: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.namespace),
        compute: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.compute),
        searchEverywhere: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.searchEverywhere) || false,
        apiHelperUser: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.apiHelperUser) || '',
        apiHelperType: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.apiHelperType) || '',
        mainScrollable: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.mainScrollable) || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window)
      });
    } else {
      options = allBindingsAccessor();
      var setPathFromAutocomplete = function setPathFromAutocomplete(path) {
        self.val(path);
        valueAccessor()(path);
        self.blur();
      };
      self.on('blur', function () {
        if (!options.skipInvalids) {
          valueAccessor()(self.val());
        }
      });
      if (allBindingsAccessor().valueUpdate != null && allBindingsAccessor().valueUpdate === 'afterkeydown') {
        self.on('keyup', function () {
          valueAccessor()(self.val());
        });
      }
      self.jHueGenericAutocomplete({
        showOnFocus: true,
        home: '/',
        skipColumns: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.skipColumns) || false,
        skipTables: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.skipTables) || false,
        namespace: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.namespace),
        compute: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.compute),
        pathChangeLevel: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.pathChangeLevel) || '',
        apiHelperUser: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.apiHelperUser) || '',
        apiHelperType: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.apiHelperType) || '',
        mainScrollable: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.mainScrollable) || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),
        onPathChange: function onPathChange(path) {
          setPathFromAutocomplete(path);
        },
        onEnter: function onEnter(el) {
          if (!options.skipInvalids) {
            setPathFromAutocomplete(el.val());
          }
        },
        onBlur: function onBlur() {
          if (self.val().lastIndexOf('.') === self.val().length - 1) {
            self.val(self.val().substr(0, self.val().length - 1));
          }
          if (!options.skipInvalids) {
            valueAccessor()(self.val());
          }
        }
      });
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.html.js":
/*!************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.html.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_html_deXSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/html/deXSS */ "./desktop/core/src/desktop/js/utils/html/deXSS.ts");
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




// we override the default html binding to prevent XSS/JS injection
var originalHtmlBinding = knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.html;
knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.html = {
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var newValueAccessor = function newValueAccessor() {
      return (0,utils_html_deXSS__WEBPACK_IMPORTED_MODULE_1__["default"])(knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(valueAccessor()));
    };
    originalHtmlBinding.init(element, newValueAccessor, allBindings, viewModel, bindingContext);
  },
  update: function update(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var newValueAccessor = function newValueAccessor() {
      return (0,utils_html_deXSS__WEBPACK_IMPORTED_MODULE_1__["default"])(knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(valueAccessor()));
    };
    originalHtmlBinding.update(element, newValueAccessor, allBindings, viewModel, bindingContext);
  }
};
knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.htmlUnsecure = {
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    originalHtmlBinding.init(element, valueAccessor, allBindings, viewModel, bindingContext);
  },
  update: function update(element, valueAccessor, allBindings, viewModel, bindingContext) {
    originalHtmlBinding.update(element, valueAccessor, allBindings, viewModel, bindingContext);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.hueCheckAll.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.hueCheckAll.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
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


knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.hueCheckAll = {
  init: function init(element, valueAccessor) {
    var allValues = knockout__WEBPACK_IMPORTED_MODULE_0__.utils.unwrapObservable(valueAccessor()).allValues;
    var selectedValues = knockout__WEBPACK_IMPORTED_MODULE_0__.utils.unwrapObservable(valueAccessor()).selectedValues;
    var updateCheckedState = function updateCheckedState() {
      knockout__WEBPACK_IMPORTED_MODULE_0__.utils.toggleDomNodeCssClass(element, 'fa-check', allValues().length > 0 && selectedValues().length === allValues().length);
      knockout__WEBPACK_IMPORTED_MODULE_0__.utils.toggleDomNodeCssClass(element, 'fa-minus hue-uncheck', selectedValues().length > 0 && selectedValues().length !== allValues().length);
    };
    knockout__WEBPACK_IMPORTED_MODULE_0__.utils.registerEventHandler(element, 'click', function () {
      if (selectedValues().length === 0) {
        selectedValues(allValues().slice(0));
      } else {
        selectedValues([]);
      }
    });
    selectedValues.subscribe(updateCheckedState);
    allValues.subscribe(updateCheckedState);
    updateCheckedState();
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.hueCheckbox.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.hueCheckbox.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.hueCheckbox = {
  after: ['value', 'attr'],
  init: function init(element, valueAccessor) {
    var value = valueAccessor();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).addClass('hue-checkbox fa');
    var updateCheckedState = function updateCheckedState() {
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.toggleDomNodeCssClass(element, 'fa-check', value());
    };
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.registerEventHandler(element, 'click', function () {
      value(!value());
    });
    value.subscribe(updateCheckedState);
    updateCheckedState();
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.hueChecked.js":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.hueChecked.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
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


knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.hueChecked = {
  after: ['value', 'attr'],
  init: function init(element, valueAccessor, allBindings, viewModel) {
    var selectedValues = valueAccessor();
    if (allBindings().checkedValue) {
      viewModel = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(allBindings().checkedValue);
    }
    var updateCheckedState = function updateCheckedState() {
      knockout__WEBPACK_IMPORTED_MODULE_0__.utils.toggleDomNodeCssClass(element, 'fa-check', selectedValues.indexOf(viewModel) > -1);
    };
    knockout__WEBPACK_IMPORTED_MODULE_0__.utils.registerEventHandler(element, 'click', function () {
      var currentIndex = selectedValues.indexOf(viewModel);
      if (currentIndex === -1) {
        selectedValues.push(viewModel);
      } else if (currentIndex > -1) {
        selectedValues.splice(currentIndex, 1);
      }
    });
    selectedValues.subscribe(updateCheckedState);
    updateCheckedState();
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.hueLink.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.hueLink.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.hueLink = {
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.click.init(element, function () {
      return function (data, event) {
        var url = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
        if (url) {
          var prefix = window.HUE_BASE_URL + '/hue' + (url.indexOf('/') === 0 ? '' : '/');
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('target')) {
            window.open(prefix + url, jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('target'));
          } else if (event.ctrlKey || event.metaKey || event.which === 2) {
            window.open(prefix + url, '_blank');
          } else {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('open.link', url);
          }
        }
      };
    }, allBindings, viewModel, bindingContext);
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.hueLink.update(element, valueAccessor);
  },
  update: function update(element, valueAccessor) {
    var url = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    if (url) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('href', window.HUE_BASE_URL + '/hue' + (url.indexOf('/') === 0 ? url : '/' + url));
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('href', 'javascript: void(0);');
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.hueSpinner.js":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.hueSpinner.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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
 * Binding for adding a spinner to the page
 *
 * Example:
 *
 * <!-- ko hueSpinner: { spin: loading, center: true, size: 'large' } --><!-- /ko -->
 *
 */
knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.hueSpinner = {
  update: function update(element, valueAccessor) {
    var value = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var options = {
      size: 'default',
      center: false,
      overlay: false,
      inline: false,
      blackout: false
    };
    var spin = false;
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(valueAccessor())) {
      spin = value();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(options, value);
      spin = typeof value.spin === 'function' ? value.spin() : value.spin;
    }
    knockout__WEBPACK_IMPORTED_MODULE_1__.virtualElements.emptyNode(element);
    if (spin) {
      var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>');
      $container.addClass(options.overlay ? 'hue-spinner-overlay' : options.inline ? 'hue-spinner-inline' : 'hue-spinner');
      if (options.blackout) {
        $container.addClass('hue-spinner-blackout');
      }
      if (!options.overlay) {
        var $spinner = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>');
        $spinner.addClass('fa fa-spinner fa-spin');
        if (options.size === 'large') {
          $spinner.addClass('hue-spinner-large');
        }
        if (options.size === 'xlarge') {
          $spinner.addClass('hue-spinner-xlarge');
        }
        if (options.center) {
          $spinner.addClass('hue-spinner-center');
          if (options.inline) {
            $container.css('width', '100%');
          }
        }
        $container.append($spinner);
      }
      knockout__WEBPACK_IMPORTED_MODULE_1__.virtualElements.prepend(element, $container[0]);
    }
  }
};
knockout__WEBPACK_IMPORTED_MODULE_1__.virtualElements.allowedBindings.hueSpinner = true;

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.hueach.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.hueach.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.hueach = {
  init: function init(element, valueAccessor, allBindings) {
    var valueAccessorBuilder = function valueAccessorBuilder() {
      return {
        data: knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray([])
      };
    };
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.foreach.init(element, valueAccessorBuilder, allBindings);
  },
  update: function update(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var $parent = $element.parent();
    var data = typeof valueAccessor().data === 'function' ? valueAccessor().data() : valueAccessor().data;
    var considerStretching = valueAccessor().considerStretching || false;
    var itemHeight = valueAccessor().itemHeight || 22;
    var scrollable = valueAccessor().scrollable || 'body';
    var scrollUp = valueAccessor().scrollUp || false;
    var scrollableOffset = valueAccessor().scrollableOffset || 0;
    var disableHueEachRowCount = valueAccessor().disableHueEachRowCount || 0;
    var forceRenderSub = valueAccessor().forceRenderSub || null;
    var renderTimeout = -1;
    var dataHasChanged = true;
    var wrappable = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    if (data.length > disableHueEachRowCount) {
      if ($parent.is('table')) {
        wrappable = $parent;
        $parent = wrappable.parent();
      }
      if (!wrappable.parent().hasClass('hueach')) {
        wrappable.wrap('<div class="hueach"></div>');
        $parent = wrappable.parent();
        wrappable.css({
          position: 'absolute',
          width: '100%'
        });
      }
      $parent.height(data.length * itemHeight);
      if (wrappable.is('table')) {
        $parent.height($parent.height() + (data.length > 0 ? itemHeight : 0));
      }
    }
    try {
      if (knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(element, 'originalData') && JSON.stringify(knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(element, 'originalData')) === JSON.stringify(data)) {
        dataHasChanged = false;
      }
    } catch (e) {}
    if (dataHasChanged) {
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.set(element, 'originalData', data);
    }
    var startItem = 0,
      endItem = 0;
    var valueAccessorBuilder = function valueAccessorBuilder() {
      return {
        data: knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(element, 'originalData') ? knockout__WEBPACK_IMPORTED_MODULE_1__.observableArray(knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(element, 'originalData').slice(startItem, endItem)) : []
      };
    };
    var render = function render() {
      if ($parent.parents('.hueach').length === 0) {
        var heightCorrection = 0,
          fluidCorrection = 0;
        var scrollTop = $parent.parents(scrollable).scrollTop();
        if (wrappable.is('table')) {
          if (scrollTop < scrollableOffset + itemHeight) {
            wrappable.find('thead').css('opacity', '1');
          } else {
            wrappable.find('thead').css('opacity', '0');
          }
        } else {
          wrappable.children(':visible').each(function (cnt, child) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(child).height() >= itemHeight) {
              heightCorrection += jquery__WEBPACK_IMPORTED_MODULE_0___default()(child).height();
            }
          });
          if (heightCorrection > 0) {
            knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.set(element, 'heightCorrection', heightCorrection);
          }
          if (heightCorrection === 0 && knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(element, 'heightCorrection')) {
            fluidCorrection = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(element, 'heightCorrection') - 20;
          }
        }
        startItem = Math.max(0, Math.floor(Math.max(1, scrollTop - heightCorrection - fluidCorrection - scrollableOffset) / itemHeight) - 10);
        if (wrappable.is('table') && startItem % 2 === 1) {
          startItem--;
        }
        endItem = Math.min(startItem + Math.ceil($parent.parents(scrollable).height() / itemHeight) + 20, data.length);
        wrappable.css('top', startItem * itemHeight + fluidCorrection + 'px');
      } else {
        startItem = 0;
        endItem = data.length;
      }
      bindingContext.$indexOffset = function () {
        return startItem;
      };
      knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.foreach.update(element, valueAccessorBuilder, allBindings, viewModel, bindingContext);
    };
    $parent.parents(scrollable).off('scroll');
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('scrollable.scroll.off', scrollable);
    $parent.parents(scrollable).on('scroll', render);
    if (scrollUp) {
      $parent.parents(scrollable).jHueScrollUp();
    }
    if ($parent.parents('.hueach').length > 0) {
      window.setTimeout(render, 100);
    }
    if (considerStretching) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('assist.stretchDown', function () {
        window.clearTimeout(renderTimeout);
        renderTimeout = window.setTimeout(function () {
          knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.set(element, 'hasStretched', true);
          render();
        }, 300);
      });
    }
    if (forceRenderSub) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(forceRenderSub, function () {
        window.setTimeout(render, 300);
      });
    }
    window.clearTimeout(renderTimeout);
    renderTimeout = window.setTimeout(function () {
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.set(element, 'hasStretched', true);
      render();
    }, 300);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.impalaDagre.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.impalaDagre.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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





// TODO: Depends on impalaDagre

knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.impalaDagre = function () {
  return {
    init: function init(element, valueAccessor, allBindingsAccessor) {
      var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('id');
      element._impalaDagre = impalaDagre(id);
      var clickSubscription = utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('impala.node.moveto', function (value) {
        element._impalaDagre.moveTo(value);
      });
      var selectSubscription = utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('impala.node.select', function (value) {
        element._impalaDagre.select(value);
      });
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
        clickSubscription.remove();
        selectSubscription.remove();
      });
    },
    update: function update(element, valueAccessor) {
      var props = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
      element._impalaDagre.metrics(props.metrics);
      element._impalaDagre.height(props.height);
      element._impalaDagre.update(props.value);
    }
  };
}();

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.jHueRowSelector.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.jHueRowSelector.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.jHueRowSelector = {
  init: function init(element) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).jHueRowSelector();
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.logResizer.js":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.logResizer.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.logResizer = {
  init: function init(element, valueAccessor) {
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor()),
      $resizer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element),
      $parent = $resizer.parents(options.parent),
      $target = $parent.find(options.target),
      onStart = options.onStart,
      onResize = options.onResize;
    var initialHeight = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__.hueLocalStorage)('hue.editor.logs.size') || 80;
    window.setTimeout(function () {
      $target.css('height', initialHeight + 'px');
    }, 0);
    $resizer.draggable({
      axis: 'y',
      start: function start() {
        if (onStart) {
          onStart();
        }
      },
      drag: function drag(event, ui) {
        var currentHeight = ui.offset.top - $target.offset().top - 20;
        if (options.minHeight && currentHeight < options.minHeight) {
          currentHeight = options.minHeight;
        }
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__.hueLocalStorage)('hue.editor.logs.size', currentHeight);
        $target.css('height', currentHeight + 'px');
        ui.offset.top = 0;
        ui.position.top = 0;
      },
      stop: function stop(event, ui) {
        ui.offset.top = 0;
        ui.position.top = 0;
        if (onResize) {
          onResize();
        }
      }
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.logScroller.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.logScroller.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/timing/waitForRendered */ "./desktop/core/src/desktop/js/utils/timing/waitForRendered.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.logScroller = {
  init: function init(element, valueAccessor, allBindings) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    $element.on('scroll', function () {
      $element.data('lastScrollTop', $element.scrollTop());
    });
    $element.on('wheel', function () {
      $element.data('hasUserScrolled', true);
    });
    function autoLogScroll() {
      var elementHeight = $element.innerHeight();
      var lastHeight = $element.data('lastHeight') || elementHeight;
      var lastScrollTop = $element.data('lastScrollTop') || 0;
      var hasUserScrolled = $element.data('hasUserScrolled') || false;
      var lastScrollHeight = $element.data('lastScrollHeight') || elementHeight;
      var stickToBottom = !hasUserScrolled || elementHeight !== lastHeight || lastScrollTop + elementHeight === lastScrollHeight;
      if (stickToBottom) {
        $element.scrollTop(element.scrollHeight - $element.height());
        $element.data('lastScrollTop', $element.scrollTop());
      }
      $element.data('lastScrollHeight', element.scrollHeight);
      $element.data('lastHeight', elementHeight);
    }
    var logValue = valueAccessor();
    logValue.subscribe(function () {
      window.setTimeout(autoLogScroll, 200);
    });
    if (typeof allBindings().logScrollerVisibilityEvent !== 'undefined') {
      allBindings().logScrollerVisibilityEvent.subscribe(function () {
        window.setTimeout(autoLogScroll, 0);
      });
    } else {
      (0,utils_timing_waitForRendered__WEBPACK_IMPORTED_MODULE_2__["default"])(element, function (el) {
        return el.is(':visible');
      }, autoLogScroll, 300);
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
        window.clearTimeout($element.data('waitForRenderTimeout'));
      });
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.medium.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.medium.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var medium_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! medium-editor */ "./node_modules/medium-editor/dist/js/medium-editor.js");
/* harmony import */ var medium_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(medium_editor__WEBPACK_IMPORTED_MODULE_2__);
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.medium = {
  init: function init(element, valueAccessor, allBindings) {
    new (medium_editor__WEBPACK_IMPORTED_MODULE_2___default())(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element), {
      buttons: ['header1', 'header2', 'bold', 'italic', 'underline', 'quote', 'anchor', 'orderedlist', 'unorderedlist', 'pre', 'outdent', 'indent'],
      buttonLabels: 'fontawesome',
      anchorTarget: true,
      anchorInputPlaceholder: '${ _("Paste or type a link") }',
      anchorInputCheckboxLabel: '${ _("Open in new window") }',
      firstHeader: 'h2',
      secondHeader: 'h3'
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).on('blur', function () {
      allBindings().value(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).html());
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.moment.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.moment.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.moment = {
  update: function update(element, valueAccessor) {
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var value = typeof options.data === 'function' ? options.data() : options.data;
    function render() {
      var fMoment = moment(value);
      var text;
      if (!fMoment.isValid()) {
        text = value;
      } else if (options.format) {
        text = fMoment.format(options.format);
      } else {
        text = fMoment.format();
      }
      $element.text(text);
    }
    render();
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.momentFromNow.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.momentFromNow.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.momentFromNow = {
  update: function update(element, valueAccessor) {
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var value = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.data);
    function render() {
      $element.text(moment(value).fromNow());
      if (options.titleFormat) {
        $element.attr('title', moment(value).format(options.titleFormat));
      }
    }
    render();
    if (options.interval) {
      window.clearInterval($element.data('momentInterval'));
      var interval = window.setInterval(render, options.interval);
      $element.data('momentInterval', interval);
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
        window.clearInterval(interval);
      });
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.multiCheck.js":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.multiCheck.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.multiCheck = {
  init: function init(element, valueAccessor) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
    var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor()));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).click(function (e) {
      var $self = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target);
      if ($self.data('noMultiCheck')) {
        $self.data('noMultiCheck', false);
        return;
      }
      var shouldCheck = $self.is(':checked') || !$self.hasClass('fa-check');
      if (e.shiftKey && shouldCheck === $container.data('last-clicked-checkbox-state')) {
        var insideGroup = false;
        var allCheckboxes = $container.find(':checkbox');
        if (allCheckboxes.length === 0) {
          allCheckboxes = $container.find('.hue-checkbox');
        }
        for (var i = 0; i < allCheckboxes.length; i++) {
          var checkbox = allCheckboxes[i];
          if (checkbox === e.target || checkbox === $container.data('last-clicked-checkbox')) {
            if (insideGroup) {
              break;
            }
            insideGroup = true;
            continue;
          }
          if (insideGroup) {
            var $checkbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()(checkbox);
            $checkbox.data('noMultiCheck', true);
            if (($checkbox.is(':checked') || $checkbox.hasClass('fa-check')) !== shouldCheck) {
              $checkbox.trigger('click');
            }
          }
        }
      }
      $container.data('last-clicked-checkbox', e.target);
      $container.data('last-clicked-checkbox-state', shouldCheck);
    });
  },
  update: function update() {}
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.multiCheckForeachVisible.js":
/*!********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.multiCheckForeachVisible.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.multiCheckForeachVisible = {
  init: function init(element, valueAccessor, allBindings, clickedEntry, bindingContext) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var parentContext = bindingContext.$parentContext;
    var selectedAttr = valueAccessor().selectedAttr;
    var entries = valueAccessor().entries;
    $element.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
    $element.on('click', function (e) {
      if (e.shiftKey && parentContext.$multiCheckLastEntry) {
        var lastEntry = parentContext.$multiCheckLastEntry;
        var inside = false;
        entries().every(function (otherEntry) {
          if (otherEntry === lastEntry || otherEntry === clickedEntry) {
            if (inside) {
              return false;
            }
            inside = true;
            return true;
          }
          if (inside && otherEntry[selectedAttr]() !== lastEntry[selectedAttr]()) {
            otherEntry[selectedAttr](lastEntry[selectedAttr]());
          }
          return true;
        });
        if (clickedEntry[selectedAttr]() !== lastEntry[selectedAttr]()) {
          clickedEntry[selectedAttr](lastEntry[selectedAttr]());
        }
      } else {
        clickedEntry[selectedAttr](!clickedEntry[selectedAttr]());
      }
      parentContext.$multiCheckLastEntry = clickedEntry;
      parentContext.$multiCheckLastChecked = clickedEntry[selectedAttr]();
    });
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $element.off('click');
    });
  },
  update: function update() {}
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.multiClick.js":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.multiClick.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
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


knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.multiClick = {
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var clickHandlerFunction = valueAccessor().click;
    var dblClickHandlerFunction = valueAccessor().dblClick;
    if (!dblClickHandlerFunction && !clickHandlerFunction) {
      return;
    }
    var clickedOnce = false;
    var singleClickTimeout = -1;
    var dblClickTimeout = -1;
    var newValueAccessor = function newValueAccessor() {
      return function () {
        var clickArgs = arguments;
        if (!dblClickHandlerFunction && clickHandlerFunction) {
          clickHandlerFunction.apply(viewModel, clickArgs);
          return;
        }
        if (clickedOnce) {
          dblClickHandlerFunction.apply(viewModel, clickArgs);
          clickedOnce = false;
          clearTimeout(singleClickTimeout);
          clearTimeout(dblClickTimeout);
        } else if (clickHandlerFunction) {
          clickedOnce = true;
          singleClickTimeout = window.setTimeout(function () {
            clickHandlerFunction.apply(viewModel, clickArgs);
            dblClickTimeout = window.setTimeout(function () {
              clickedOnce = false;
            }, 100);
          }, 225);
        }
      };
    };
    knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.click.init(element, newValueAccessor, allBindings, viewModel, bindingContext);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.multiLineEllipsis.js":
/*!*************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.multiLineEllipsis.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_multiLineEllipsisHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/multiLineEllipsisHandler */ "./desktop/core/src/desktop/js/utils/multiLineEllipsisHandler.js");
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



knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.multiLineEllipsis = {
  after: ['text', 'value'],
  init: function init(element, valueAccessor) {},
  update: function update(element, valueAccessor) {
    var options = {};
    if (valueAccessor && knockout__WEBPACK_IMPORTED_MODULE_0__.isObservable(valueAccessor())) {
      options.overflowing = valueAccessor();
    } else if (valueAccessor) {
      options = valueAccessor() || {};
    }
    var multiLineEllipsisHandler = new _utils_multiLineEllipsisHandler__WEBPACK_IMPORTED_MODULE_1__["default"]({
      element: element,
      text: element.textContent,
      overflowing: options.overflowing,
      linkify: true,
      expandable: options.expandable,
      expanded: options.expanded,
      expandActionClass: options.expandActionClass,
      expandClass: options.expandClass
    });
    knockout__WEBPACK_IMPORTED_MODULE_0__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      multiLineEllipsisHandler.dispose();
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.numberFormat.js":
/*!********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.numberFormat.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.numberFormat = function () {
  var that;
  return that = {
    init: function init(element, valueAccessor) {
      that.format(element, valueAccessor);
    },
    update: function update(element, valueAccessor) {
      that.format(element, valueAccessor);
    },
    format: function format(element, valueAccessor) {
      var value = valueAccessor();
      var unwrapped = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(value);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).text(that.human(unwrapped.value, unwrapped.unit));
    },
    human: function human(value, unit) {
      var fn;
      if (unit === 1) {
        fn = function fn(value) {
          return knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.simplesize.humanSize(value) + '/s';
        };
      } else if (unit === 3) {
        fn = knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.bytesize.humanSize;
      } else if (unit === 4) {
        fn = function fn(value) {
          return knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.bytesize.humanSize(value) + '/s';
        };
      } else if (unit === 5) {
        fn = knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.duration.humanTime;
      } else if (unit === 8) {
        fn = function fn(value) {
          return knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.duration.humanTime(value * 1000000);
        };
      } else if (unit === 9) {
        fn = function fn(value) {
          return knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.duration.humanTime(value * 1000000000);
        };
      } else {
        fn = knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.simplesize.humanSize;
      }
      return fn(value);
    }
  };
}();

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.numericTextInput.js":
/*!************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.numericTextInput.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
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


knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.numericTextInput = {
  init: function init(element, valueAccessor, allBindings) {
    var bindingOptions = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(valueAccessor());
    var numericValue = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(bindingOptions.value()).extend({
      numeric: {
        precision: bindingOptions.precision,
        allowEmpty: typeof bindingOptions.allowEmpty !== 'undefined' && bindingOptions.allowEmpty
      }
    });
    numericValue.subscribe(function (newValue) {
      bindingOptions.value(newValue);
    });
    knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.textInput.init(element, function () {
      return numericValue;
    }, allBindings);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.onClickOutside.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.onClickOutside.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.onClickOutside = {
  update: function update(element, valueAccessor, allBindingsAccessor, viewModel) {
    var options = valueAccessor();
    var func = typeof options === 'function' ? options : options.onOutside;
    var onDocumentClick = function onDocumentClick(event) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(document, event.target) && !jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(element, event.target)) {
        var result = func.bind(viewModel)();
        if (typeof result === 'undefined' || result) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('click', onDocumentClick);
        }
      }
    };
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('click', onDocumentClick);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', onDocumentClick);
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('click', onDocumentClick);
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.oneClickSelect.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.oneClickSelect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.oneClickSelect = {
  init: function init(element) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).click(function () {
      if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        var _range = document.createRange();
        _range.selectNode(element);
        window.getSelection().addRange(_range);
      }
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.parseArguments.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.parseArguments.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.parseArguments = {
  init: function init(element, valueAccessor) {
    var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    function splitStrings(str) {
      var bits = [];
      var isInQuotes = false;
      var tempStr = '';
      var charQuote = null;
      str.replace(/<\/?arg>|<\/?command>/gi, ' ').replace(/\r?\n|\r/g, '').replace(/\s\s+/g, ' ').split('').forEach(function (_char) {
        if ((_char === '"' || _char === "'") && (!charQuote || charQuote == _char)) {
          charQuote = isInQuotes ? null : _char;
          isInQuotes = !isInQuotes;
        } else if ((_char === ' ' || _char === '\n') && !isInQuotes && tempStr !== '') {
          bits.push(tempStr);
          tempStr = '';
        } else {
          tempStr += _char;
        }
      });
      if (tempStr !== '') {
        bits.push(tempStr);
      }
      return bits;
    }
    $el.bind('paste', function (e) {
      var pasted = e.originalEvent.clipboardData.getData('text');
      var args = splitStrings(pasted);
      if (args.length > 1) {
        var newList = [];
        args.forEach(function (arg) {
          var obj = {};
          obj[valueAccessor().objectKey] = jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(arg);
          newList.push(obj);
        });
        valueAccessor().list(knockout__WEBPACK_IMPORTED_MODULE_1__.mapping.fromJS(newList)());
        valueAccessor().callback();
      }
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.publish.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.publish.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.publish = {
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.click.init(element, function () {
      return function () {
        var topicDetails = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(valueAccessor());
        if (typeof topicDetails === 'string') {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish(topicDetails);
        } else if (_typeof(topicDetails) === 'object') {
          var keys = Object.keys(topicDetails);
          if (keys.length === 1) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish(keys[0], topicDetails[keys[0]]);
          }
        }
      };
    }, allBindings, viewModel, bindingContext);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.reactWrapper.js":
/*!********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.reactWrapper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _reactComponents_imports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reactComponents/imports */ "./desktop/core/src/desktop/js/reactComponents/imports.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/**
 * REACT KNOCKOUT INTEGRATION
 * This is a oneway binding from knockout to react.js. Use the data-binding called reactWrapper
 * followed by the component name. Props are passed in as js object literal coded as a string using
 * the props param. Any new components used must also be added to the import file
 * desktop/core/src/desktop/js/reactComponents/imports.js.
 *
 * Example usage:
 *
 * <MyComponent data-bind="reactWrapper: 'MyComponent',
 *    props: { title: 'Result title', activeExecutable: activeExecutable }">
 * </MyComponent>
 *
 *
 * The name of the component element tag (eg <MyComponent>) can be anything, but for consistency
 * and to stay close to how normal react components look we use the actual component name.
 */

var getProps = function getProps(allBindings) {
  var props = allBindings.get('props');

  // Functions are not valid as a React child
  return _objectSpread(_objectSpread({}, props), {}, {
    children: knockout__WEBPACK_IMPORTED_MODULE_0__.toJS(props.children)
  });
};
var unwrapProps = function unwrapProps(props) {
  var processedProps = Object.create(null);
  Object.entries(props).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      propName = _ref2[0],
      propValue = _ref2[1];
    processedProps[propName] = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(propValue);
  });
  return processedProps;
};
knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.reactWrapper = function () {
  return {
    init: function init(el, valueAccessor, allBindings, viewModel, bindingContext) {
      var componentName = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(valueAccessor());
      var props = getProps(allBindings);

      // The component's react root should only be created once per DOM
      // load so we pass it along via the bindingContext to be reused in the KO update call.
      var reactRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(el);
      el.__KO_React_root = reactRoot;
      (0,_reactComponents_imports__WEBPACK_IMPORTED_MODULE_3__.loadComponent)(componentName).then(function (Component) {
        reactRoot.render( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, unwrapProps(props)));
      });

      // Since the react component is a root component we need to handle the
      // unmounting explicitly if the dom node is disposed by Knockout, e.g. via "ko if:"
      knockout__WEBPACK_IMPORTED_MODULE_0__.utils.domNodeDisposal.addDisposeCallback(el, function () {
        return reactRoot.unmount();
      });

      // Tell Knockout that it does not need to update the children
      // of this component, since that is now handled by React
      return {
        controlsDescendantBindings: true
      };
    },
    update: function update(el, valueAccessor, allBindings, viewModel, bindingContext) {
      var componentName = knockout__WEBPACK_IMPORTED_MODULE_0__.unwrap(valueAccessor());
      var props = getProps(allBindings);
      (0,_reactComponents_imports__WEBPACK_IMPORTED_MODULE_3__.loadComponent)(componentName).then(function (Component) {
        el.__KO_React_root.render( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, unwrapProps(props)));
      });

      // Handle KO observables
      Object.entries(props).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          propName = _ref4[0],
          propValue = _ref4[1];
        if (knockout__WEBPACK_IMPORTED_MODULE_0__.isObservable(propValue)) {
          var koSubscription = propValue.subscribe(function () {
            (0,_reactComponents_imports__WEBPACK_IMPORTED_MODULE_3__.loadComponent)(componentName).then(function (Component) {
              el.__KO_React_root.render( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread(_objectSpread({}, props), {}, _defineProperty({}, propName, propValue()))));
            });
          });
          koSubscription.disposeWhenNodeIsRemoved(el);
        }
      });
    }
  };
}();

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.readOnlyAce.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.readOnlyAce.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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





// TODO: Depends on Ace

knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.readOnlyAce = {
  init: function init(element) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css({
      'min-height': '250px'
    });
    var editor = ace.edit(element);
    editor.setOptions({
      readOnly: true,
      maxLines: Infinity
    });
    editor.setTheme((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__.hueLocalStorage)('hue.ace.theme') || 'ace/theme/hue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('aceEditor', editor);
  },
  update: function update(element, valueAccessor, allBindingsAccessor) {
    var value = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(allBindingsAccessor());
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('aceEditor').getSession().setMode('ace/mode/' + options.type || 0); // e.g. xml, json...
    if (typeof value !== 'undefined' && value !== '') {
      // allows highlighting static code
      if (options.path) {
        value = value[options.path];
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('aceEditor').setValue(value, -1);
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.resizable.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.resizable.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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
 * Binding for jquery UI resizable
 *
 * @type {{init: ko.bindingHandlers.resizable.init}}
 */
knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.resizable = {
  init: function init(element, valueAccessor) {
    var options = valueAccessor() || {};
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).resizable(options);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).children('.ui-resizable-handle').css('z-index', 10000);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.select2.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.select2.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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




// TODO: Depends on Role

knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.select2 = {
  init: function init(element, valueAccessor, allBindingsAccessor, viewModel) {
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.toJS(valueAccessor()) || {};
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);

    // When the options are in the binding value accessor the data attribute will be used instead of any <select>
    // tag it's attached to.
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(valueAccessor().options) && knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(valueAccessor().value)) {
      var optionsObservable = valueAccessor().options;
      var valueObservable = valueAccessor().value;
      options.data = jquery__WEBPACK_IMPORTED_MODULE_0___default().map(optionsObservable(), function (value) {
        return {
          id: value,
          text: value
        };
      });
      options.val = valueObservable();
      var refreshSelect2Data = function refreshSelect2Data() {
        $element.select2('data', jquery__WEBPACK_IMPORTED_MODULE_0___default().map(optionsObservable(), function (value) {
          return {
            id: value,
            text: value
          };
        }));
        $element.select2('val', valueObservable());
      };
      valueObservable.subscribe(function (newValue) {
        if (newValue !== $element.select2('val')) {
          refreshSelect2Data();
        }
      });
      optionsObservable.subscribe(refreshSelect2Data);
      window.setTimeout(function () {
        refreshSelect2Data();
      }, 10);
    }
    if (typeof valueAccessor().vm != 'undefined') {
      viewModel = valueAccessor().vm;
    }
    if (typeof valueAccessor().update != 'undefined') {
      if (options.type === 'user' && viewModel.selectableHadoopUsers().indexOf(options.update) === -1) {
        viewModel.availableHadoopUsers.push({
          username: options.update
        });
      }
      if (options.type === 'group') {
        if (options.update instanceof Array) {
          options.update.forEach(function (opt) {
            if (viewModel.selectableHadoopGroups().indexOf(opt) === -1) {
              viewModel.availableHadoopGroups.push({
                name: opt
              });
            }
          });
        } else if (viewModel.selectableHadoopGroups().indexOf(options.update) === -1) {
          viewModel.availableHadoopGroups.push({
            name: options.update
          });
        }
      }
      if (options.type === 'action' && viewModel.availableActions().indexOf(options.update) === -1) {
        viewModel.availableActions.push(options.update);
      }
      if (options.type === 'scope' && viewModel.availablePrivileges().indexOf(options.update) === -1) {
        viewModel.availablePrivileges.push(options.update);
      }
      if (options.type === 'parameter' && options.update !== '') {
        var _found = false;
        allBindingsAccessor().options().forEach(function (opt) {
          var _option = opt[allBindingsAccessor().optionsValue];
          if (knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(_option)) {
            _option = _option();
          }
          if (_option === options.update) {
            _found = true;
          }
        });
        if (!_found) {
          allBindingsAccessor().options.push({
            name: knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.update),
            value: knockout__WEBPACK_IMPORTED_MODULE_1__.observable(options.update)
          });
        }
      }
    }
    $element.select2(options).on('change', function (e) {
      if (typeof e.val != 'undefined') {
        if (typeof valueAccessor().update != 'undefined') {
          valueAccessor().update(e.val);
        }
        if (typeof valueAccessor().value != 'undefined') {
          valueAccessor().value(e.val);
        }
      }
    }).on('select2-focus', function () {
      if (typeof options.onFocus != 'undefined') {
        options.onFocus();
      }
    }).on('select2-blur', function () {
      if (typeof options.onBlur != 'undefined') {
        options.onBlur();
      }
    }).on('select2-open', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.select2-input').off('keyup').data('type', options.type).on('keyup', function (e) {
        if (e.keyCode === 13) {
          var _isArray = options.update instanceof Array;
          var _newVal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
          var _type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('type');
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(_newVal) !== '') {
            if (_type === 'user') {
              viewModel.availableHadoopUsers.push({
                username: _newVal
              });
            }
            if (_type === 'group') {
              viewModel.availableHadoopGroups.push({
                name: _newVal
              });
            }
            if (_type === 'action') {
              viewModel.availableActions.push(_newVal);
            }
            if (_type === 'scope') {
              viewModel.availablePrivileges.push(_newVal);
            }
            if (_type === 'role' && window.Role) {
              var _r = new Role(viewModel, {
                name: _newVal
              });
              viewModel.tempRoles.push(_r);
              viewModel.roles.push(_r);
            }
            if (_type === 'parameter') {
              var _found2 = false;
              allBindingsAccessor().options().forEach(function (opt) {
                if (opt[allBindingsAccessor().optionsValue]() === _newVal) {
                  _found2 = true;
                }
              });
              if (!_found2) {
                allBindingsAccessor().options.push({
                  name: knockout__WEBPACK_IMPORTED_MODULE_1__.observable(_newVal),
                  value: knockout__WEBPACK_IMPORTED_MODULE_1__.observable(_newVal)
                });
              }
            }
            if (_isArray) {
              var _vals = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).select2('val');
              _vals.push(_newVal);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).select2('val', _vals, true);
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).select2('val', _newVal, true);
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).select2('close');
          }
        }
      });
    });
    $element.data('select2').search.prop('readOnly', true).attr('onfocus', 'this.removeAttribute("readonly");').wrap('<form autocomplete="off">');
  },
  update: function update(element, valueAccessor, allBindingsAccessor) {
    if (typeof allBindingsAccessor().visible != 'undefined') {
      if (typeof allBindingsAccessor().visible == 'boolean' && allBindingsAccessor().visible || typeof allBindingsAccessor().visible == 'function' && allBindingsAccessor().visible()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).select2('container').show();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).select2('container').hide();
      }
    }
    if (typeof valueAccessor().update != 'undefined') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).select2('val', valueAccessor().update());
    }
    if (typeof valueAccessor().readonly != 'undefined') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).select2('readonly', valueAccessor().readonly);
      if (typeof valueAccessor().readonlySetTo != 'undefined') {
        valueAccessor().readonlySetTo();
      }
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.simplesize.js":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.simplesize.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sprintf-js */ "./node_modules/sprintf-js/src/sprintf.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_2__);
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.simplesize = function () {
  var that;
  return that = {
    units: ['', 'K', 'M', 'G', 'T', 'P'],
    init: function init(element, valueAccessor) {
      that.format(element, valueAccessor);
    },
    update: function update(element, valueAccessor) {
      that.format(element, valueAccessor);
    },
    format: function format(element, valueAccessor) {
      var value = valueAccessor();
      var formatted = that.humanSize(knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(value));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).text(formatted);
    },
    getBaseLog: function getBaseLog(x, y) {
      return Math.log(x) / Math.log(y);
    },
    humanSize: function humanSize(bytes) {
      var isNumber = !isNaN(parseFloat(bytes)) && isFinite(bytes);
      if (!isNumber) {
        return '';
      }

      // Special case small numbers (including 0), because they're exact.
      if (bytes < 1000) {
        return sprintf_js__WEBPACK_IMPORTED_MODULE_2___default().sprintf('%d', bytes);
      }
      var index = Math.floor(that.getBaseLog(bytes, 1000));
      index = Math.min(that.units.length - 1, index);
      return sprintf_js__WEBPACK_IMPORTED_MODULE_2___default().sprintf('%.1f %s', bytes / Math.pow(1000, index), that.units[index]);
    }
  };
}();

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.slideVisible.js":
/*!********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.slideVisible.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.slideVisible = {
  init: function init(element, valueAccessor) {
    var value = valueAccessor();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).toggle(knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(value));
  },
  update: function update(element, valueAccessor, allBindings) {
    var value = valueAccessor();
    var onComplete = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(allBindings()).onComplete;
    knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(value) ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).slideDown(100, onComplete ? onComplete() : function () {}) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).slideUp(100, onComplete ? onComplete() : function () {});
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.slider.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.slider.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.slider = {
  init: function init(element, valueAccessor) {
    var _el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(valueAccessor(), {});
    _el.slider({
      min: !isNaN(parseFloat(_options.start())) ? parseFloat(_options.start()) : 0,
      max: !isNaN(parseFloat(_options.end())) ? parseFloat(_options.end()) : 10,
      step: !isNaN(parseFloat(_options.gap())) ? parseFloat(_options.gap()) : 1,
      handle: _options.handle ? _options.handle : 'triangle',
      start: parseFloat(_options.min()),
      end: parseFloat(_options.max()),
      tooltip_split: true,
      tooltip: 'always',
      labels: _options.labels
    });
    _el.on('slide', function (e) {
      _options.start(e.min);
      _options.end(e.max);
      _options.min(e.start);
      _options.max(e.end);
      if (_options.min() < _options.start()) {
        _options.start(_options.min());
      }
      if (_options.max() > _options.end()) {
        _options.end(_options.max());
      }
      _options.gap(e.step);
      if (typeof _options.properties.initial_start == 'function') {
        _options.properties.start(_options.properties.initial_start());
        _options.properties.end(_options.properties.initial_end());
        _options.properties.gap(_options.properties.initial_gap());
      }
    });
    _el.on('slideStop', function () {
      if (window.searchViewModel) {
        window.searchViewModel.search();
      }
    });
  },
  update: function update(element, valueAccessor) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(valueAccessor(), {});
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.solrChooser.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.solrChooser.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.solrChooser = {
  init: function init(element, valueAccessor) {
    var self = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    self.val(valueAccessor()());
    function setPathFromAutocomplete(path) {
      self.val(path);
      valueAccessor()(path);
      self.blur();
    }
    self.on('blur', function () {
      valueAccessor()(self.val());
    });
    self.jHueGenericAutocomplete({
      showOnFocus: true,
      home: '/',
      serverType: 'SOLR',
      skipTables: true,
      // No notion of DB actually
      onPathChange: function onPathChange(path) {
        setPathFromAutocomplete(path);
      },
      onEnter: function onEnter(el) {
        setPathFromAutocomplete(el.val());
      },
      onBlur: function onBlur() {
        if (self.val().lastIndexOf('.') === self.val().length - 1) {
          self.val(self.val().substr(0, self.val().length - 1));
        }
        valueAccessor()(self.val());
      }
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.spinEdit.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.spinEdit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.spinedit = {
  init: function init(element, valueAccessor, allBindingsAccessor) {
    var options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
      minimum: 0,
      maximum: 10000,
      step: 5,
      value: knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor()),
      numberOfDecimals: 0
    }, allBindingsAccessor().override);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).spinedit(options);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).on('valueChanged', function (e) {
      valueAccessor()(e.value);
    });
  },
  update: function update(element, valueAccessor) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).spinedit('setValue', knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor()));
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.splitDraggable.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.splitDraggable.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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





knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.splitDraggable = {
  init: function init(element, valueAccessor) {
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var leftPanelWidth = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)(options.appName + '_left_panel_width') != null ? Math.max((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)(options.appName + '_left_panel_width'), 250) : 250;
    var rightPanelWidth = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)(options.appName + '_right_panel_width') != null ? Math.max((0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)(options.appName + '_right_panel_width'), 250) : 290;
    var containerSelector = options.containerSelector || '.panel-container';
    var contentPanelSelector = options.contentPanelSelector || '.content-panel';
    var onPosition = options.onPosition || function () {};
    var hasLeftPanel = !!options.leftPanelVisible;
    var hasRightPanel = !!options.rightPanelVisible;
    var isRightPanel = !!options.isRightPanel;
    var $resizer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var $leftPanel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.left-panel');
    var $rightPanel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.right-panel');
    var $contentPanel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(contentPanelSelector);
    var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(containerSelector);
    var positionPanels = function positionPanels() {
      if (isRightPanel) {
        var oppositeWidth = hasLeftPanel && knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.leftPanelVisible) ? $leftPanel.width() + $resizer.width() : 0;
        var totalWidth = $container.width() - oppositeWidth;
        if (knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.rightPanelVisible) && knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.rightPanelAvailable)) {
          $resizer.show();
          rightPanelWidth = Math.min(rightPanelWidth, $container.width() - 100);
          var contentPanelWidth = totalWidth - rightPanelWidth - $resizer.width();
          $rightPanel.css('width', rightPanelWidth + 'px');
          $contentPanel.css('width', contentPanelWidth + 'px');
          $resizer.css('left', $container.width() - rightPanelWidth - $resizer.width() + 'px');
          $contentPanel.css('right', rightPanelWidth + $resizer.width() + 'px');
        } else {
          if (oppositeWidth === 0) {
            $contentPanel.css('width', '100%');
          } else {
            $contentPanel.css('width', totalWidth);
          }
          $contentPanel.css('right', '0');
          $resizer.hide();
        }
      } else {
        var _oppositeWidth = hasRightPanel && knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.rightPanelVisible) && knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.rightPanelAvailable) ? $rightPanel.width() + $resizer.width() : 0;
        var _totalWidth = $container.width() - _oppositeWidth;
        if (knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.leftPanelVisible)) {
          $resizer.show();
          leftPanelWidth = Math.min(leftPanelWidth, _totalWidth - 100);
          var _contentPanelWidth = _totalWidth - leftPanelWidth - $resizer.width();
          $leftPanel.css('width', leftPanelWidth + 'px');
          $contentPanel.css('width', _contentPanelWidth + 'px');
          $resizer.css('left', leftPanelWidth + 'px');
          $contentPanel.css('left', leftPanelWidth + $resizer.width() + 'px');
        } else {
          if (_oppositeWidth === 0) {
            $contentPanel.css('width', '100%');
          } else {
            $contentPanel.css('width', _totalWidth);
          }
          $contentPanel.css('left', '0');
          $resizer.hide();
        }
      }
      onPosition();
    };
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(options.leftPanelVisible)) {
      options.leftPanelVisible.subscribe(positionPanels);
    }
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(options.rightPanelVisible)) {
      options.rightPanelVisible.subscribe(positionPanels);
    }
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(options.rightPanelAvailable)) {
      options.rightPanelAvailable.subscribe(positionPanels);
    }
    var dragTimeout = -1;
    $resizer.draggable({
      axis: 'x',
      containment: $container,
      drag: function drag(event, ui) {
        if (isRightPanel) {
          ui.position.left = Math.min($container.width() - 200, ui.position.left);
        } else {
          ui.position.left = Math.min($container.width() - $container.position().left - 200, Math.max(250, ui.position.left));
        }
        window.clearTimeout(dragTimeout);
        dragTimeout = window.setTimeout(function () {
          if (isRightPanel) {
            var oppositeWidth = hasLeftPanel && knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.leftPanelVisible) ? $leftPanel.width() + $resizer.width() : 0;
            var totalWidth = $container.width() - oppositeWidth;
            rightPanelWidth = $container.width() - ui.position.left;
            $rightPanel.css('width', rightPanelWidth + 'px');
            $contentPanel.css('width', totalWidth - rightPanelWidth + 'px');
            // $contentPanel.css("right", rightPanelWidth + $resizer.width());
          } else {
            var _oppositeWidth2 = hasRightPanel && knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.rightPanelVisible) ? $rightPanel.width() + $resizer.width() : 0;
            var _totalWidth2 = $container.width() - _oppositeWidth2;
            leftPanelWidth = ui.position.left;
            $leftPanel.css('width', leftPanelWidth + 'px');
            $contentPanel.css('width', _totalWidth2 - leftPanelWidth - $resizer.width() + 'px');
            $contentPanel.css('left', leftPanelWidth + $resizer.width());
          }
          onPosition();
        }, 10);
      },
      stop: function stop() {
        if (isRightPanel) {
          (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)(options.appName + '_right_panel_width', rightPanelWidth);
        } else {
          (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)(options.appName + '_left_panel_width', leftPanelWidth);
        }
        window.setTimeout(positionPanels, 100);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('split.panel.resized');
      }
    });
    var positionTimeout = -1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
      window.clearTimeout(positionTimeout);
      positionTimeout = window.setTimeout(function () {
        positionPanels();
      }, 1);
    });
    function initialPositioning() {
      if (!$container.is(':visible')) {
        window.setTimeout(initialPositioning, 50);
      } else {
        positionPanels();
        // Even though the container is visible some slow browsers might not
        // have rendered the panels
        window.setTimeout(positionPanels, 100);
      }
    }
    initialPositioning();
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.splitFlexDraggable.js":
/*!**************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.splitFlexDraggable.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/storageUtils */ "./desktop/core/src/desktop/js/utils/storageUtils.ts");
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





knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.splitFlexDraggable = {
  init: function init(element, valueAccessor) {
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var sidePanelWidth = (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)(options.appName + '_' + options.orientation + '_panel_width') != null ? (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)(options.appName + '_' + options.orientation + '_panel_width') : 290;
    var $resizer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var $sidePanel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.sidePanelSelector);
    var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.containerSelector);
    var isLeft = options.orientation === 'left';
    var onPosition = options.onPosition || function () {};
    var containerWidth = $container.width();
    $sidePanel.css('flex-basis', sidePanelWidth + 'px');
    $resizer.draggable({
      axis: 'x',
      containment: $container,
      start: function start() {
        sidePanelWidth = $sidePanel.width();
        containerWidth = $container.width();
      },
      drag: function drag(event, ui) {
        var flexBasis = Math.min(Math.max(sidePanelWidth + (isLeft ? ui.position.left : -ui.position.left), 200), containerWidth) + 'px';
        $sidePanel.css('flex-basis', flexBasis);
        onPosition(flexBasis);
        ui.position.left = 0;
      },
      stop: function stop() {
        sidePanelWidth = $sidePanel.width();
        (0,utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__.hueLocalStorage)(options.appName + '_' + options.orientation + '_panel_width', sidePanelWidth);
        window.setTimeout(positionPanels, 100);
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('split.panel.resized');
      }
    });
    var positionPanels = function positionPanels() {
      if (options.sidePanelVisible()) {
        $sidePanel.css('flex-basis', Math.max(sidePanelWidth, 200) + 'px');
        onPosition();
      }
    };
    options.sidePanelVisible.subscribe(positionPanels);
    var positionTimeout = -1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
      window.clearTimeout(positionTimeout);
      positionTimeout = window.setTimeout(function () {
        positionPanels();
      }, 1);
    });
    function initialPositioning() {
      if (!$container.is(':visible') && !$sidePanel.is(':visible')) {
        window.setTimeout(initialPositioning, 50);
      } else {
        positionPanels();
        // Even though the container is visible some slow browsers might not
        // have rendered the panels
        window.setTimeout(positionPanels, 50);
      }
    }
    initialPositioning();
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.sqlContextPopover.js":
/*!*************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.sqlContextPopover.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! catalog/analyzer/types */ "./desktop/core/src/desktop/js/catalog/analyzer/types.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! catalog/dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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
 * Show the Context Popover for SQL or Solr entities when the bound element is clicked.
 *
 * Parameters:
 *
 * {string} sourceType - 'impala', 'hive' etc.
 * {ContextNamespace} namespace
 * {ContextCompute} compute
 * {string} path - the path, i.e. 'default.customers' or ['default', 'customers'
 * {string} [orientation] - 'top', 'right', 'bottom', 'left'. Default 'right'
 * {Object} [offset] - Optional offset from the element
 * {number} [offset.top] - Offset in pixels
 * {number} [offset.left] - Offset in pixels
 *
 * Examples:
 *
 * data-bind="sqlContextPopover: { sourceType: 'impala', namespace: { id: 'myNamespace' }, compute: { id: 'myCompute' }, path: 'default.customers' }"
 * data-bind="sqlContextPopover: { sourceType: 'hive', namespace: { id: 'myNamespace' }, compute: { id: 'myCompute' }, path: 'default', orientation: 'bottom', offset: { top: 5 } }"
 *
 * @type {{init: ko.bindingHandlers.sqlContextPopover.init}}
 */
knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.sqlContextPopover = {
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    knockout__WEBPACK_IMPORTED_MODULE_2__.bindingHandlers.click.init(element, function () {
      return function () {
        var options = valueAccessor();

        // TODO: Use connector for SQL context popover
        if (!options.connector && (options.sourceType === 'hive' || options.sourceType === 'impala')) {
          options.connector = {
            optimizer: catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_0__.SqlAnalyzerMode.api,
            id: options.sourceType,
            dialect: options.sourceType
          };
        }
        catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_3__["default"].getEntry(options).then(function (entry) {
          var $source = jquery__WEBPACK_IMPORTED_MODULE_1___default()(element);
          var offset = $source.offset();
          if (options.offset) {
            offset.top += options.offset.top || 0;
            offset.left += options.offset.left || 0;
          }
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('context.popover.show', {
            data: {
              type: 'catalogEntry',
              catalogEntry: entry
            },
            showInAssistEnabled: true,
            orientation: options.orientation || 'right',
            source: {
              element: element,
              left: offset.left,
              top: offset.top,
              right: offset.left + $source.width(),
              bottom: offset.top + $source.height()
            }
          });
        });
      };
    }, allBindings, viewModel, bindingContext);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.stickVertical.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.stickVertical.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);



/**
 * This binding can be used to emulate position sticky for any element.
 *
 * Example:
 *
 * <div databind="stickVertical: { scrollContainer: '.some-container' }">...</div>
 *
 * @type {{init: ko.bindingHandlers.stickVertical.init}}
 */
knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.stickVertical = {
  init: function init(element, valueAccessor) {
    var options = valueAccessor() || {};
    var $scrollContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.scrollContainer || window);
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var $parent = $element.parent();
    var active = false;
    var throttleTimeout = -1;
    var throttledReposition = function throttledReposition() {
      window.clearTimeout(throttleTimeout);
      throttleTimeout = window.setTimeout(function () {
        var diff = $scrollContainer.offset().top - $parent.offset().top;
        if (diff > 0) {
          $element.animate({
            'margin-top': diff + 'px'
          }, 40);
          active = true;
        } else if (active) {
          $element.css({
            'margin-top': ''
          });
          active = false;
        }
      }, 50);
    };
    $scrollContainer.on('scroll.stickVertical', throttledReposition);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize.stickVertical', throttledReposition);
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $scrollContainer.off('scroll.stickVertical');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize.stickVertical');
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.storageContextPopover.js":
/*!*****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.storageContextPopover.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_assist_assistStorageEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/assist/assistStorageEntry */ "./desktop/core/src/desktop/js/ko/components/assist/assistStorageEntry.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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
 * Show the Context Popover for files (HDFS, S3, ADLS, ...) when the bound element is clicked.
 *
 * Parameters:
 *
 * {string} path - the path (can include type, i.e. 'hdfs://tmp'
 * {string} [type] - Optional type, 'hdfs', 's3' etc. Default 'hdfs'.
 * {string} [orientation] - 'top', 'right', 'bottom', 'left'. Default 'right';
 * {Object} [offset] - Optional offset from the element
 * {number} [offset.top] - Offset in pixels
 * {number} [offset.left] - Offset in pixels
 *
 * Examples:
 *
 * data-bind="storageContextPopover: { path: '/tmp/banana.csv' }"
 * data-bind="storageContextPopover: { path: 's3:/tmp/banana.csv', orientation: 'bottom', offset: { top: 5 } }"
 *
 * @type {{init: ko.bindingHandlers.storageContextPopover.init}}
 */
knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.storageContextPopover = {
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.click.init(element, function () {
      return function () {
        var options = valueAccessor();
        _components_assist_assistStorageEntry__WEBPACK_IMPORTED_MODULE_2__["default"].getEntry(options.path, options.type).then(function (entry) {
          var $source = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
          var offset = $source.offset();
          if (options.offset) {
            offset.top += options.offset.top || 0;
            offset.left += options.offset.left || 0;
          }
          entry.open(true);
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_3__["default"].publish('context.popover.show', {
            data: {
              type: 'storageEntry',
              storageEntry: entry
            },
            orientation: options.orientation || 'right',
            source: {
              element: element,
              left: offset.left,
              top: offset.top,
              right: offset.left + $source.width(),
              bottom: offset.top + $source.height()
            }
          });
        });
      };
    }, allBindings, viewModel, bindingContext);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.stretchDown.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.stretchDown.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.stretchDown = {
  init: function init(element) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var $parent = $element.parent();
    var lastParentHeight = -1;
    var lastTop = -1;
    function stretch(force) {
      if (lastParentHeight !== $parent.innerHeight() || lastTop !== $element.position().top || force) {
        lastParentHeight = $parent.innerHeight();
        lastTop = $element.position().top;
        $element.height(lastParentHeight - lastTop - ($element.outerHeight(true) - $element.innerHeight()));
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('assist.stretchDown', $element);
      }
    }
    window.setInterval(stretch, 200);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('assist.forceStretchDown', function () {
      stretch(true);
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.tagEditor.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.tagEditor.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.tagEditor = {
  init: function init(element, valueAccessor) {
    var options = valueAccessor();
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var validRegExp = options.validRegExp ? new RegExp(options.validRegExp) : undefined;
    var showValidationError = function showValidationError() {
      var $errorWrapper = $element.siblings('.selectize-error');
      if (options.invalidMessage && $errorWrapper.length > 0) {
        $errorWrapper.find('.message').text(options.invalidMessage);
        $errorWrapper.show();
        window.setTimeout(function () {
          $errorWrapper.fadeOut(400, function () {
            $errorWrapper.hide();
          });
        }, 5000);
      }
    };
    options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
      plugins: ['remove_button'],
      options: jquery__WEBPACK_IMPORTED_MODULE_0___default().map(options.setTags(), function (value) {
        return {
          value: value,
          text: value
        };
      }),
      delimiter: ',',
      items: options.setTags(),
      closeAfterSelect: true,
      persist: true,
      preload: true,
      create: function create(input) {
        if (typeof validRegExp !== 'undefined' && !validRegExp.test(input)) {
          showValidationError();
          return false;
        }
        return {
          value: input.replace(/\s/g, '-'),
          text: input.replace(/\s/g, '-')
        };
      }
    }, options);
    var $readOnlyContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').hide().addClass('selectize-control selectize-read-only multi').attr('style', $element.attr('style')).insertAfter(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element));
    if (!options.readOnly) {
      $readOnlyContainer.on('mouseover', function () {
        $readOnlyContainer.find('.selectize-actions').addClass('selectize-actions-visible');
      });
      $readOnlyContainer.on('mouseout', function () {
        $readOnlyContainer.find('.selectize-actions').removeClass('selectize-actions-visible');
      });
    }
    $element.hide();
    var currentSelectize;
    var optionsBeforeEdit = [];
    var saveOnClickOutside = function saveOnClickOutside(event) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(document, event.target) && currentSelectize && !jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(currentSelectize.$wrapper[0], event.target)) {
        if (currentSelectize.getValue() !== optionsBeforeEdit.join(',')) {
          options.onSave(currentSelectize.getValue());
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('click', saveOnClickOutside);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('keyup', hideOnEscape);
        showReadOnly();
      }
    };
    var hideOnEscape = function hideOnEscape(event) {
      if (event.which === 27) {
        showReadOnly();
      }
    };
    var sizeCheckInterval = -1;
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      window.clearInterval(sizeCheckInterval);
    });
    var showEdit = function showEdit() {
      window.clearInterval(sizeCheckInterval);
      optionsBeforeEdit = options.setTags().concat();
      options.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().map(options.setTags(), function (value) {
        return {
          value: value,
          text: value
        };
      });
      currentSelectize = $element.selectize(options)[0].selectize;
      $readOnlyContainer.hide();
      $element.next().find('.selectize-input').css('padding-right', '38px');
      $element.next().find('input').focus();
      var $editActions = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('selectize-actions').appendTo($element.next());
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>').addClass('fa fa-check').click(function () {
        if (currentSelectize.getValue() !== optionsBeforeEdit.join(',')) {
          options.onSave(currentSelectize.getValue());
        }
        showReadOnly();
      }).appendTo($editActions);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>').addClass('fa fa-close').click(function () {
        showReadOnly();
      }).appendTo($editActions);
      window.setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', saveOnClickOutside);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keyup', hideOnEscape);
      }, 0);
    };
    var lastKnownOffsetWidth = -1;
    var lastKnownOffsetHeight = -1;
    var addReadOnlyTagsTillOverflow = function addReadOnlyTagsTillOverflow($readOnlyInner) {
      $readOnlyInner.empty();
      var tagElements = [];
      options.setTags().forEach(function (tag) {
        tagElements.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').text(tag).appendTo($readOnlyInner));
      });
      if (!options.readOnly && !options.hasErrors()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>').addClass('fa fa-pencil selectize-edit pointer').attr('title', (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["default"])('Edit tags')).appendTo($readOnlyInner);
        $readOnlyInner.click(function () {
          showEdit();
        });
      }
      if (!options.overflowEllipsis) {
        return;
      }
      if ($readOnlyInner[0].offsetHeight < $readOnlyInner[0].scrollHeight || $readOnlyInner[0].offsetWidth < $readOnlyInner[0].scrollWidth && tagElements.length) {
        tagElements[tagElements.length - 1].after(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('hue-tag-overflow').text('...'));
      }
      while (tagElements.length && ($readOnlyInner[0].offsetHeight < $readOnlyInner[0].scrollHeight || $readOnlyInner[0].offsetWidth < $readOnlyInner[0].scrollWidth)) {
        tagElements.pop().remove();
      }
      lastKnownOffsetWidth = $readOnlyInner[0].offsetWidth;
      lastKnownOffsetHeight = $readOnlyInner[0].offsetHeight;
    };
    var showReadOnly = function showReadOnly() {
      window.clearInterval(sizeCheckInterval);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('click', saveOnClickOutside);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('keyup', hideOnEscape);
      if (currentSelectize) {
        currentSelectize.destroy();
        $element.hide();
        $element.val(options.setTags().join(','));
      }
      $readOnlyContainer.empty();
      var $readOnlyInner = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('selectize-input items not-full has-options has-items').appendTo($readOnlyContainer);
      if (options.setTags().length > 0) {
        addReadOnlyTagsTillOverflow($readOnlyInner);
        if (options.overflowEllipsis) {
          sizeCheckInterval = window.setInterval(function () {
            if ($readOnlyInner[0].offsetWidth !== lastKnownOffsetWidth || $readOnlyInner[0].offsetHeight !== lastKnownOffsetHeight) {
              addReadOnlyTagsTillOverflow($readOnlyInner);
            }
          }, 500);
        }
      } else {
        if (options.hasErrors()) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').addClass('selectize-no-tags').text(options.errorMessage).appendTo($readOnlyInner);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').addClass('selectize-no-tags').text(options.emptyPlaceholder).appendTo($readOnlyInner);
        }
        if (!options.readOnly && !options.hasErrors()) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>').addClass('fa fa-pencil selectize-edit pointer').attr('title', (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["default"])('Edit tags')).appendTo($readOnlyInner);
          $readOnlyInner.click(function () {
            showEdit();
          });
        }
      }
      $readOnlyContainer.attr('title', options.setTags().join(', '));
      $readOnlyContainer.show();
    };
    showReadOnly();
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.tagsNotAllowed.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.tagsNotAllowed.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.tagsNotAllowed = {
  update: function update(element, valueAccessor, allBindingsAccessor) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var params = allBindingsAccessor();
    var valueObservable = knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(params) ? params : params.textInput ? params.textInput : params.value;
    var value = valueObservable();
    var escaped = value.replace(/<|>/g, '');
    if (escaped !== value) {
      $element.val(escaped);
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.templateContextMenu.js":
/*!***************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.templateContextMenu.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.templateContextMenu = {
  init: function init(element, valueAccessor, allBindings, viewModel) {
    var options = valueAccessor();
    element.addEventListener('contextmenu', function (event) {
      if (document.selection && document.selection.empty) {
        document.selection.empty();
      } else if (window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
      }
      if (typeof options.beforeOpen === 'function') {
        options.beforeOpen.bind(viewModel)();
      }
      var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#hueContextMenu_' + options.template);
      if ($menu.length === 0) {
        $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul id="hueContextMenu_' + options.template + '" class="hue-context-menu" data-bind="template: { name: \'' + options.template + '\', data: viewModel, afterRender: afterRender }"></ul>').appendTo('body');
      } else {
        knockout__WEBPACK_IMPORTED_MODULE_1__.cleanNode($menu[0]);
      }
      $menu.data('active', true);
      $menu.css('top', 0);
      $menu.css('left', 0);
      $menu.css('opacity', 0);
      $menu.show();
      var hideMenu = function hideMenu() {
        if (!$menu.data('active')) {
          $menu.hide();
          knockout__WEBPACK_IMPORTED_MODULE_1__.cleanNode($menu[0]);
        }
      };
      knockout__WEBPACK_IMPORTED_MODULE_1__.applyBindings({
        afterRender: function afterRender() {
          var menuWidth = $menu.outerWidth(true);
          var menuHeight = $menu.outerHeight(true);
          $menu.css('left', event.clientX + menuWidth > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() - menuWidth : event.clientX);
          $menu.css('top', event.clientY + menuHeight > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - menuHeight : event.clientY);
          $menu.css('opacity', 1);
          if (options.scrollContainer) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.scrollContainer).one('scroll', hideMenu);
          }
          window.setTimeout(function () {
            $menu.data('active', false);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('click', hideMenu);
          }, 100);
        },
        viewModel: options.viewModel || viewModel
      }, $menu[0]);
      knockout__WEBPACK_IMPORTED_MODULE_1__.contextFor($menu[0]).$contextSourceElement = element;
      event.preventDefault();
      event.stopPropagation();
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.templatePopover.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.templatePopover.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.templatePopover = {
  init: function init(element, valueAccessor, allBindingsAccessor, viewModel) {
    var options = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(valueAccessor());
    var clickTrigger = options.trigger === 'click';
    var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#popover-container');
    if (!$container.length) {
      $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', 'popover-container').appendTo('body');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('temp-content').hide().appendTo($container);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('temp-title').hide().appendTo($container);
    }
    var $content = $container.find('.temp-content');
    var $title = $container.find('.temp-title');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(options, {
      html: true,
      trigger: 'manual',
      container: '#popover-container'
    });
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var visible = options.visible || knockout__WEBPACK_IMPORTED_MODULE_1__.observable(false);
    var trackElementInterval = -1;
    var hidePopover = function hidePopover() {
      if (visible()) {
        window.clearInterval(trackElementInterval);
        $element.popover('hide');
        visible(false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('click', hideOnClickOutside);
      }
    };
    var closeSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('close.popover', hidePopover);
    var hideOnClickOutside = function hideOnClickOutside(event) {
      if (visible() && $element.data('popover') && !jquery__WEBPACK_IMPORTED_MODULE_0___default().contains($element.data('popover').$tip[0], event.target)) {
        hidePopover();
      }
    };
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      if (visible && $element.data('popover')) {
        hidePopover();
      }
      closeSub.remove();
    });
    var _afterRender = function afterRender() {
      options.content = $content.html();
      options.title = $title.html();
      var triggerTitle;
      if ($element.attr('title')) {
        triggerTitle = $element.attr('title');
        $element.attr('title', null);
      }
      $element.popover(options);
      $element.popover('show');
      if (triggerTitle) {
        $element.attr('title', triggerTitle);
      }
      var $tip = $element.data('popover').$tip;
      knockout__WEBPACK_IMPORTED_MODULE_1__.cleanNode($tip.get(0));
      knockout__WEBPACK_IMPORTED_MODULE_1__.applyBindings(viewModel, $tip.get(0));
      $tip.find('.close-popover, .close-template-popover').click(function (event) {
        hidePopover();
        event.stopPropagation();
      });
      if (options.minWidth) {
        var heightBefore = $tip.outerHeight(true);
        var widthBefore = $tip.outerWidth(true);
        $tip.css('min-width', options.minWidth);
        // The min-width might affect the height/width in which case we reposition the popover depending on placement
        var heightDiff = (heightBefore - $tip.outerHeight(true)) / 2;
        var widthDiff = (widthBefore - $tip.outerWidth(true)) / 2;
        if ((!options.placement || options.placement === 'left' || options.placement === 'right') && heightDiff !== 0) {
          $tip.css('top', $tip.position().top + heightDiff + 'px');
        } else if (options.placement && (options.placement === 'bottom' || options.placement === 'top') && widthDiff !== 0) {
          $tip.css('left', $tip.position().left + widthDiff + 'px');
        }
      }
      var lastWidth = $element.outerWidth(true);
      var lastOffset = $element.offset();
      var lastHeight = $element.outerHeight(true);
      trackElementInterval = window.setInterval(function () {
        var elementWidth = $element.outerWidth(true);
        var elementHeight = $element.outerHeight(true);
        var elementOffset = $element.offset();
        if (lastHeight !== elementHeight || lastWidth !== $element.outerWidth(true) || lastOffset.top !== elementOffset.top || lastOffset.left !== elementOffset.left) {
          $tip.css({
            left: elementOffset.left + elementWidth / 2 - $tip.outerWidth(true) / 2,
            top: elementOffset.top + elementHeight + 10
          });
          lastWidth = elementWidth;
          lastOffset = elementOffset;
          lastHeight = elementHeight;
        }
      }, 50);
      $content.empty();
      $title.empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', hideOnClickOutside);
      visible(true);
    };
    var showPopover = function showPopover(preventClose) {
      if (!preventClose) {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('close.popover');
      }
      knockout__WEBPACK_IMPORTED_MODULE_1__.renderTemplate(options.contentTemplate, viewModel, {
        afterRender: function afterRender() {
          if (options.titleTemplate) {
            knockout__WEBPACK_IMPORTED_MODULE_1__.renderTemplate(options.titleTemplate, viewModel, {
              afterRender: function afterRender() {
                _afterRender();
              }
            }, $title.get(0), 'replaceChildren');
          } else {
            _afterRender();
          }
        }
      }, $content.get(0), 'replaceChildren');
    };
    if (visible()) {
      window.setTimeout(function () {
        showPopover(true);
      }, 0);
    }
    if (clickTrigger) {
      $element.click(function (e) {
        if (visible()) {
          hidePopover();
        } else {
          showPopover();
        }
        e.stopPropagation();
      });
    } else {
      $element.mouseenter(showPopover);
      $element.mouseleave(hidePopover);
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.textSqueezer.js":
/*!********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.textSqueezer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.textSqueezer = {
  init: function init(element, valueAccessor) {
    var value = valueAccessor();
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    $element.text(knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(value));
    $element.textSqueezer({
      decimalPrecision: 2
    });
  },
  update: function update(element, valueAccessor) {
    var value = valueAccessor();
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    $element.text(knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(value));
    $element.trigger('redraw');
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.toggle.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.toggle.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
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
 * This binding can be used to toggle a boolean value on click
 *
 * Example:
 *
 * <div databind="toggle: value">...</div>
 *
 * @type {{init: ko.bindingHandlers.toggle.init}}
 */
knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.toggle = {
  init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var value = valueAccessor();
    knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.click.init(element, function () {
      return function () {
        value(!value());
      };
    }, allBindings, viewModel, bindingContext);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.toggleOverflow.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.toggleOverflow.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_html_isOverflowing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/html/isOverflowing */ "./desktop/core/src/desktop/js/utils/html/isOverflowing.ts");
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




knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.toggleOverflow = {
  render: function render($element, options) {
    if ((0,utils_html_isOverflowing__WEBPACK_IMPORTED_MODULE_2__["default"])($element.find('.toggle-overflow'))) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('toggle-overflow-toggle').html('<i class="fa fa-caret-down muted"></i>').appendTo($element);
      $element.on('click', function () {
        if ($element.find('.toggle-overflow-toggle i').hasClass('fa-caret-down')) {
          $element.find('.toggle-overflow').css('max-height', '');
          $element.css('cursor', 'n-resize');
          $element.find('.toggle-overflow-toggle').removeClass('toggle-hidden').css('cursor', 'n-resize');
          $element.find('.toggle-overflow-toggle i').removeClass('fa-caret-down').addClass('fa-caret-up');
        } else {
          if (options.height) {
            $element.find('.toggle-overflow').height(options.height);
          }
          $element.css('cursor', 's-resize');
          $element.find('.toggle-overflow-toggle').addClass('toggle-hidden').css('cursor', 's-resize');
          $element.find('.toggle-overflow-toggle i').removeClass('fa-caret-up').addClass('fa-caret-down');
        }
      });
    }
  },
  init: function init(element, valueAccessor) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = valueAccessor() || {};
    $element.wrapInner('<div class="toggle-overflow"></div>');
    if (options.height) {
      $element.find('.toggle-overflow').css('max-height', options.height + 'px');
    }
  },
  update: function update(element, valueAccessor) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = valueAccessor() || {};
    window.setTimeout(function () {
      knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.toggleOverflow.render($element, options);
    }, 100);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.tooltip.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.tooltip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAME": () => (/* binding */ NAME)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bindingUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindingUtils */ "./desktop/core/src/desktop/js/ko/bindings/bindingUtils.js");
/* harmony import */ var utils_html_escapeOutput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/html/escapeOutput */ "./desktop/core/src/desktop/js/utils/html/escapeOutput.ts");
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





var NAME = 'tooltip';
(0,_bindingUtils__WEBPACK_IMPORTED_MODULE_2__.registerBinding)(NAME, {
  after: ['attr'],
  update: function update(element, valueAccessor) {
    var local = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(valueAccessor());
    var options = {
      container: 'body'
    };
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).tooltip('destroy');
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.extend(options, local);
    if (options.title) {
      var title = knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(options.title); // Not always an observable
      if (typeof title === 'string' && !options.html) {
        options.title = (0,utils_html_escapeOutput__WEBPACK_IMPORTED_MODULE_3__["default"])(title);
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).tooltip(options);
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).tooltip('destroy');
    });
  }
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.truncatedText.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.truncatedText.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
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


knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.truncatedText = {
  update: function update(element, valueAccessor, allBindingsAccessor) {
    var text = knockout__WEBPACK_IMPORTED_MODULE_0__.isObservable(valueAccessor()) ? knockout__WEBPACK_IMPORTED_MODULE_0__.utils.unwrapObservable(valueAccessor()) : valueAccessor();
    var length = knockout__WEBPACK_IMPORTED_MODULE_0__.utils.unwrapObservable(allBindingsAccessor().maxLength) || 20;
    var truncated = '';
    if (typeof text !== 'undefined' && text !== null) {
      truncated = text.length > length ? text.substring(0, length) + '...' : text;
    }
    knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.text.update(element, function () {
      return truncated;
    });
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.typeahead.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.typeahead.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.typeahead = {
  init: function init(element, valueAccessor) {
    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = valueAccessor();
    var source = options.nonBindableSource ? options.nonBindableSource : function () {
      var _source = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(valueAccessor.source);
      if (options.extraKeywords) {
        _source = _source.concat(options.extraKeywords.split(' '));
      }
      if (options.sourceSuffix && _source) {
        var _tmp = [];
        _source.forEach(function (item) {
          _tmp.push(item + options.sourceSuffix);
        });
        _source = _tmp;
      }
      return _source;
    };
    if (options.nonBindableSource && options.displayProperty) {
      source = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayMap(options.nonBindableSource(), function (item) {
        return item[options.displayProperty]();
      });
    }
    var _options = {
      source: source,
      onselect: function onselect(val) {
        if (typeof options.target == 'function') {
          options.target(val);
        } else {
          options.target = val;
        }
      }
    };
    function extractor(query, extractorSeparator) {
      var result = /([^ ]+)$/.exec(query);
      if (extractorSeparator) {
        result = new RegExp('([^\\' + extractorSeparator + ']+)$').exec(query);
      }
      if (result && result[1]) {
        return result[1].trim();
      }
      return '';
    }
    if (options.multipleValues) {
      var _extractorFound = null;
      var updateExtractors = function updateExtractors() {
        var _val = elem.val();
        _extractorFound = null;
        var _extractors = typeof options.multipleValuesExtractors == 'undefined' || options.multipleValuesExtractors == null ? [' '] : options.multipleValuesExtractors;
        var _extractorFoundLastIndex = -1;
        _extractors.forEach(function (extractor) {
          if (_val.indexOf(extractor) > -1) {
            if (_val.indexOf(extractor) >= _extractorFoundLastIndex) {
              _extractorFound = extractor;
              _extractorFoundLastIndex = _val.indexOf(extractor);
            }
          }
        });
      };
      _options.updater = function (item) {
        var _val = this.$element.val();
        var _separator = typeof options.multipleValuesSeparator == 'undefined' || options.multipleValuesSeparator == null ? ':' : options.multipleValuesSeparator;
        if (options.extraKeywords && options.extraKeywords.split(' ').indexOf(item) > -1) {
          _separator = '';
        }
        var isSpecialResult = false;
        if (item.indexOf('<i ') > -1) {
          _separator = '';
          isSpecialResult = true;
        }
        updateExtractors();
        if (_extractorFound != null) {
          return (isSpecialResult ? '"' : '') + _val.substring(0, _val.lastIndexOf(_extractorFound)) + _extractorFound + jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(item.replace(/<[^>]*>/gi, '')) + (isSpecialResult ? '"' : '') + _separator;
        } else {
          return (isSpecialResult ? '"' : '') + jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(item.replace(/<[^>]*>/gi, '')) + (isSpecialResult ? '"' : '') + _separator;
        }
      };
      _options.matcher = function (item) {
        updateExtractors();
        var _tquery = extractor(this.query, _extractorFound);
        if (!_tquery) {
          return false;
        }
        return ~item.toLowerCase().indexOf(_tquery.toLowerCase());
      };
      _options.highlighter = function (item) {
        updateExtractors();
        var _query = extractor(this.query, _extractorFound).replace(/[\-\[\]{}()*+?.:\\\^$|#\s]/g, '\\$&');
        var _result = jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(item.replace(/<[^>]*>/gi, '')).replace(new RegExp('(' + _query + ')', 'ig'), function ($1, match) {
          return '<strong>' + match + '</strong>';
        });
        if (item.indexOf('<i ') > -1) {
          _result += ' ' + item.substr(item.indexOf('<i '));
        }
        return _result;
      };
    }
    if (options.completeSolrRanges) {
      elem.on('keyup', function (e) {
        if (e.keyCode !== 8 && e.which !== 8 && elem.val() && (elem.val().slice(-1) === '[' || elem.val().slice(-1) === '{')) {
          var _index = elem.val().length;
          elem.val(elem.val() + ' TO ' + (elem.val().slice(-1) === '[' ? ']' : '}'));
          if (element.createTextRange) {
            var range = element.createTextRange();
            range.move('character', _index);
            range.select();
          } else if (element.selectionStart != null) {
            element.focus();
            element.setSelectionRange(_index, _index);
          }
        }
      });
    }
    if (options.triggerOnFocus) {
      _options.minLength = 0;
    }
    element.typeahead = elem.typeahead(_options);
    if (options.triggerOnFocus) {
      elem.on('focus', function () {
        elem.trigger('keyup');
      });
    }
    elem.blur(function () {
      if (typeof options.target == 'function') {
        options.target(elem.val());
      } else {
        options.target = elem.val();
      }
    });
  },
  update: function update(element, valueAccessor) {
    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var options = valueAccessor();
    if (typeof options.completeSolrRanges === 'undefined') {
      if (typeof options.target == 'function') {
        elem.val(options.target());
      } else {
        elem.val(options.target);
      }
    }
    if (options.forceUpdateSource) {
      element.typeahead.data('typeahead').source = function () {
        var _source = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(options.source);
        if (options.extraKeywords) {
          _source = _source.concat(options.extraKeywords.split(' '));
        }
        if (options.sourceSuffix && _source) {
          var _tmp = [];
          _source.forEach(function (item) {
            _tmp.push(item + options.sourceSuffix);
          });
          _source = _tmp;
        }
        return _source;
      };
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.verticalSlide.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.verticalSlide.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.verticalSlide = {
  init: function init(element, valueAccessor) {
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(valueAccessor())) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).show();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).hide();
    }
  },
  update: function update(element, valueAccessor) {
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(valueAccessor())) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).slideDown('fast');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).slideUp('fast');
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.visibleOnHover.js":
/*!**********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.visibleOnHover.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
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



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.visibleOnHover = {
  init: function init(element, valueAccessor) {
    var options = valueAccessor();
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var selector = options.selector;
    var showTimeout = -1;
    var hideTimeout = -1;
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.set(element, 'visibleOnHover.override', knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(options.override) || false);
    var inside = false;
    var show = function show() {
      if (options.childrenOnly) {
        $element.children(selector).fadeTo('fast', 1);
      } else {
        $element.find(selector).fadeTo('fast', 1);
      }
      window.clearTimeout(hideTimeout);
    };
    var hide = function hide() {
      if (!inside) {
        window.clearTimeout(showTimeout);
        hideTimeout = window.setTimeout(function () {
          if (options.childrenOnly) {
            $element.children(selector).fadeTo('fast', 0);
          } else {
            $element.find(selector).fadeTo('fast', 0);
          }
        }, 10);
      }
    };
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.set(element, 'visibleOnHover.show', show);
    knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.set(element, 'visibleOnHover.hide', hide);
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(element, 'visibleOnHover.override')) {
      window.setTimeout(show, 1);
    }
    $element.mouseenter(function () {
      showTimeout = window.setTimeout(function () {
        inside = true;
        show();
      }, 300);
    });
    $element.mouseleave(function () {
      window.clearTimeout(showTimeout);
      inside = false;
      if (!knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(element, 'visibleOnHover.override')) {
        hide();
      }
    });
  },
  update: function update(element, valueAccessor) {
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(valueAccessor().override)) {
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.set(element, 'visibleOnHover.override', true);
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(element, 'visibleOnHover.show')();
    } else {
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.set(element, 'visibleOnHover.override', false);
      knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domData.get(element, 'visibleOnHover.hide')();
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/bindings/ko.vue.js":
/*!***********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/bindings/ko.vue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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


function setProps(el, props) {
  for (var key in props) {
    el.setAttribute(key, props[key]);
  }
  Object.assign(el, props);
}
knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.vueKoProps = {
  init: function init(element, valueAccessor) {
    var data = valueAccessor();
    setProps(element, data);
  }
};
knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.vueProps = {
  init: function init(element, valueAccessor) {
    var data = valueAccessor();
    setProps(element, knockout__WEBPACK_IMPORTED_MODULE_0__.toJS(data));
  }
};
knockout__WEBPACK_IMPORTED_MODULE_0__.bindingHandlers.vueEvents = {
  init: function init(element, valueAccessor) {
    var data = valueAccessor();
    for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        eventName = _Object$entries$_i[0],
        handler = _Object$entries$_i[1];
      element.addEventListener(eventName, handler);
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-a2399487-bundle-a2a4f8506cb55bb7.js.map