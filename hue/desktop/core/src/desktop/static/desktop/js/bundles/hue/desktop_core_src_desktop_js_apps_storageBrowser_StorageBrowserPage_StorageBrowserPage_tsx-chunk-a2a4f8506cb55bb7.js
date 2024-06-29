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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["desktop_core_src_desktop_js_apps_storageBrowser_StorageBrowserPage_StorageBrowserPage_tsx"],{

/***/ "./desktop/core/src/desktop/js/apps/storageBrowser/InputModal/InputModal.tsx":
/*!***********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/storageBrowser/InputModal/InputModal.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cuix_dist_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cuix/dist/components/Modal */ "./node_modules/cuix/dist/components/Modal/Modal.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/i18nReact */ "./desktop/core/src/desktop/js/utils/i18nReact.ts");
/* harmony import */ var _InputModal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputModal.scss */ "./desktop/core/src/desktop/js/apps/storageBrowser/InputModal/InputModal.scss");
var _excluded = ["inputLabel", "onClose", "onSubmit", "showModal", "title"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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






//TODO: Add unit tests

var InputModal = function InputModal(_ref) {
  var inputLabel = _ref.inputLabel,
    onClose = _ref.onClose,
    onSubmit = _ref.onSubmit,
    showModal = _ref.showModal,
    title = _ref.title,
    i18n = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _i18nReact$useTransla = _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__.i18nReact.useTranslation(),
    t = _i18nReact$useTransla.t;
  var _i18n$cancelText = i18n.cancelText,
    cancelText = _i18n$cancelText === void 0 ? t('Cancel') : _i18n$cancelText,
    _i18n$submitText = i18n.submitText,
    submitText = _i18n$submitText === void 0 ? t('Submit') : _i18n$submitText;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(cuix_dist_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cancelText: cancelText,
    className: "hue-input-modal",
    okText: submitText,
    onCancel: function onCancel() {
      setValue('');
      onClose();
    },
    onOk: function onOk() {
      onSubmit(value);
      setValue('');
      onClose();
    },
    open: showModal,
    title: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-input-modal__input-label"
  }, inputLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "hue-input-modal__input",
    value: value,
    onInput: function onInput(e) {
      setValue(e.target.value);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputModal);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserPage.tsx":
/*!***************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserPage.tsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/spin/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tabs/index.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_DataBrowserIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/DataBrowserIcon */ "./node_modules/@cloudera/cuix-core/icons/react/DataBrowserIcon.js");
/* harmony import */ var _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/i18nReact */ "./desktop/core/src/desktop/js/utils/i18nReact.ts");
/* harmony import */ var _reactComponents_CommonHeader_CommonHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reactComponents/CommonHeader/CommonHeader */ "./desktop/core/src/desktop/js/reactComponents/CommonHeader/CommonHeader.tsx");
/* harmony import */ var _StorageBrowserTabContents_StorageBrowserTabContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StorageBrowserTabContents/StorageBrowserTabContent */ "./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTabContents/StorageBrowserTabContent.tsx");
/* harmony import */ var _reactComponents_FileChooser_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reactComponents/FileChooser/api */ "./desktop/core/src/desktop/js/reactComponents/FileChooser/api.ts");
/* harmony import */ var _StorageBrowserPage_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StorageBrowserPage.scss */ "./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserPage.scss");
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









var StorageBrowserPage = function StorageBrowserPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    fileSystemTabs = _useState2[0],
    setFileSystemTabs = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _i18nReact$useTransla = _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__.i18nReact.useTranslation(),
    t = _i18nReact$useTransla.t;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!fileSystemTabs) {
      setLoading(true);
      (0,_reactComponents_FileChooser_api__WEBPACK_IMPORTED_MODULE_4__.fetchFileSystems)().then(function (fileSystems) {
        var fileSystemsObj = fileSystems.map(function (system) {
          return {
            label: system.file_system.toUpperCase(),
            key: system.file_system + '_tab',
            children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StorageBrowserTabContents_StorageBrowserTabContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
              user_home_dir: system.user_home_directory
            })
          };
        });
        setFileSystemTabs(fileSystemsObj);
      })["catch"](function (error) {
        //TODO: Properly handle errors.
        console.error(error);
      })["finally"](function () {
        setLoading(false);
      });
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-storage-browser"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reactComponents_CommonHeader_CommonHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: t('Storage Browser'),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_DataBrowserIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    spinning: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "hue-storage-browser__tab",
    defaultActiveKey: "0",
    items: fileSystemTabs
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageBrowserPage);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTabContents/StorageBrowserTabContent.tsx":
/*!***********************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTabContents/StorageBrowserTabContent.tsx ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/spin/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/dropdown/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/i18nReact */ "./desktop/core/src/desktop/js/utils/i18nReact.ts");
/* harmony import */ var _cloudera_cuix_core_icons_react_BucketIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/BucketIcon */ "./node_modules/@cloudera/cuix-core/icons/react/BucketIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_CopyClipboardIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/CopyClipboardIcon */ "./node_modules/@cloudera/cuix-core/icons/react/CopyClipboardIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_DataMovementIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/DataMovementIcon */ "./node_modules/@cloudera/cuix-core/icons/react/DataMovementIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_DeleteIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/DeleteIcon */ "./node_modules/@cloudera/cuix-core/icons/react/DeleteIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_DownloadIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/DownloadIcon */ "./node_modules/@cloudera/cuix-core/icons/react/DownloadIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_DropdownIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/DropdownIcon */ "./node_modules/@cloudera/cuix-core/icons/react/DropdownIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_ProjectIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/ProjectIcon */ "./node_modules/@cloudera/cuix-core/icons/react/ProjectIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_ImportIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/ImportIcon */ "./node_modules/@cloudera/cuix-core/icons/react/ImportIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_PlusCircleIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/PlusCircleIcon */ "./node_modules/@cloudera/cuix-core/icons/react/PlusCircleIcon.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/FileOutlined.js");
/* harmony import */ var _reactComponents_FileChooser_PathBrowser_PathBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../reactComponents/FileChooser/PathBrowser/PathBrowser */ "./desktop/core/src/desktop/js/reactComponents/FileChooser/PathBrowser/PathBrowser.tsx");
/* harmony import */ var _InputModal_InputModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../InputModal/InputModal */ "./desktop/core/src/desktop/js/apps/storageBrowser/InputModal/InputModal.tsx");
/* harmony import */ var _StorageBrowserTable_StorageBrowserTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StorageBrowserTable/StorageBrowserTable */ "./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTable/StorageBrowserTable.tsx");
/* harmony import */ var _reactComponents_FileChooser_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../reactComponents/FileChooser/api */ "./desktop/core/src/desktop/js/reactComponents/FileChooser/api.ts");
/* harmony import */ var _reactComponents_FileChooser_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../reactComponents/FileChooser/types */ "./desktop/core/src/desktop/js/reactComponents/FileChooser/types.ts");
/* harmony import */ var _StorageBrowserTabContent_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StorageBrowserTabContent.scss */ "./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTabContents/StorageBrowserTabContent.scss");
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













//TODO: Use cuix icon (Currently fileIcon does not exist in cuix)







var defaultProps = {
  testId: 'hue-storage-browser-tabContent'
};
var StorageBrowserTabContent = function StorageBrowserTabContent(_ref) {
  var _filesData$breadcrumb;
  var user_home_dir = _ref.user_home_dir,
    testId = _ref.testId;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(user_home_dir),
    _useState2 = _slicedToArray(_useState, 2),
    filePath = _useState2[0],
    setFilePath = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    filesData = _useState4[0],
    setFilesData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    files = _useState6[0],
    setFiles = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingFiles = _useState8[0],
    setLoadingFiles = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    pageStats = _useState10[0],
    setPageStats = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    pageSize = _useState12[0],
    setPageSize = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState14 = _slicedToArray(_useState13, 2),
    pageNumber = _useState14[0],
    setPageNumber = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    sortByColumn = _useState16[0],
    setSortByColumn = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_reactComponents_FileChooser_types__WEBPACK_IMPORTED_MODULE_6__.SortOrder.NONE),
    _useState18 = _slicedToArray(_useState17, 2),
    sortOrder = _useState18[0],
    setSortOrder = _useState18[1];
  //TODO: Add filter functionality
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 1),
    filterData = _useState20[0];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showNewFolderModal = _useState22[0],
    setShowNewFolderModal = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showNewFileModal = _useState24[0],
    setShowNewFileModal = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    refreshKey = _useState26[0],
    setRefreshKey = _useState26[1];
  var _i18nReact$useTransla = _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__.i18nReact.useTranslation(),
    t = _i18nReact$useTransla.t;
  var newActionsMenuItems = [{
    key: 'create',
    type: 'group',
    label: t('CREATE'),
    children: [{
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["default"], null),
      key: 'new_file',
      label: t('New File'),
      onClick: function onClick() {
        setShowNewFileModal(true);
      }
    }, {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_ProjectIcon__WEBPACK_IMPORTED_MODULE_9__["default"], null),
      key: 'new_folder',
      label: t('New Folder'),
      onClick: function onClick() {
        setShowNewFolderModal(true);
      }
    }]
  }, {
    key: 'upload',
    type: 'group',
    label: t('UPLOAD'),
    children: [{
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_ImportIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null),
      key: 'upload',
      label: t('New Upload')
    }]
  }];
  var bulkActionsMenuItems = [{
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_CopyClipboardIcon__WEBPACK_IMPORTED_MODULE_11__["default"], null),
    key: 'copy',
    label: t('Copy')
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_DataMovementIcon__WEBPACK_IMPORTED_MODULE_12__["default"], null),
    key: 'move',
    label: t('Move')
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_DownloadIcon__WEBPACK_IMPORTED_MODULE_13__["default"], null),
    key: 'download',
    label: t('Download')
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_DeleteIcon__WEBPACK_IMPORTED_MODULE_14__["default"], null),
    key: 'delete',
    label: t('Delete')
  }];
  var handleCreateNewFolder = function handleCreateNewFolder(folderName) {
    setLoadingFiles(true);
    (0,_reactComponents_FileChooser_api__WEBPACK_IMPORTED_MODULE_5__.mkdir)(folderName, filePath).then(function () {
      setRefreshKey(function (oldKey) {
        return oldKey + 1;
      });
    })["catch"](function (error) {
      // eslint-disable-next-line no-restricted-syntax
      console.log(error);
    })["finally"](function () {
      setLoadingFiles(false);
    });
  };
  var handleCreateNewFile = function handleCreateNewFile(fileName) {
    setLoadingFiles(true);
    (0,_reactComponents_FileChooser_api__WEBPACK_IMPORTED_MODULE_5__.touch)(fileName, filePath).then(function () {
      setRefreshKey(function (oldKey) {
        return oldKey + 1;
      });
    })["catch"](function (error) {
      // eslint-disable-next-line no-restricted-syntax
      console.log(error);
    })["finally"](function () {
      setLoadingFiles(false);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoadingFiles(true);
    (0,_reactComponents_FileChooser_api__WEBPACK_IMPORTED_MODULE_5__.fetchFiles)(filePath, pageSize, pageNumber, filterData, sortByColumn, sortOrder).then(function (responseFilesData) {
      setFilesData(responseFilesData);
      var tableData = responseFilesData.files.map(function (file) {
        return {
          name: file.name,
          size: file.humansize,
          user: file.stats.user,
          group: file.stats.group,
          permission: file.rwx,
          mtime: file.mtime,
          type: file.type,
          path: file.path
        };
      });
      setFiles(tableData);
      setPageStats(responseFilesData.page);
      setPageSize(responseFilesData.pagesize);
    })["catch"](function (error) {
      //TODO: handle errors
      console.error(error);
    })["finally"](function () {
      setLoadingFiles(false);
    });
  }, [filePath, pageSize, pageNumber, sortByColumn, sortOrder, refreshKey]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_15__["default"], {
    spinning: loadingFiles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-storage-browser-tabContent",
    "data-testid": testId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-storage-browser__title-bar",
    "data-testid": "".concat(testId, "-title-bar")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_BucketIcon__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: "hue-storage-browser__icon",
    "data-testid": "".concat(testId, "-icon")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-storage-browser__folder-name",
    "data-testid": "".concat(testId, "-folder-namer")
  }, filesData === null || filesData === void 0 ? void 0 : filesData.breadcrumbs[(filesData === null || filesData === void 0 ? void 0 : (_filesData$breadcrumb = filesData.breadcrumbs) === null || _filesData$breadcrumb === void 0 ? void 0 : _filesData$breadcrumb.length) - 1].label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-storage-browser__path-browser-panel",
    "data-testid": "".concat(testId, "-path-browser-panel")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-storage-browser__filePath"
  }, t('File Path:')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reactComponents_FileChooser_PathBrowser_PathBrowser__WEBPACK_IMPORTED_MODULE_2__["default"], {
    breadcrumbs: filesData === null || filesData === void 0 ? void 0 : filesData.breadcrumbs,
    onFilepathChange: setFilePath,
    seperator: '/',
    showIcon: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-storage-browser__actions-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: "hue-storage-browser__search",
    placeholder: t('Search')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-storage-browser__actions-bar-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_18__["default"], {
    overlayClassName: "hue-storage-browser__actions-dropdown",
    menu: {
      items: bulkActionsMenuItems,
      className: 'hue-storage-browser__action-menu'
    },
    trigger: ['hover', 'click']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: "hue-storage-browser__bulk-action-btn"
  }, t('Bulk Actions'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_DropdownIcon__WEBPACK_IMPORTED_MODULE_20__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_18__["default"], {
    overlayClassName: "hue-storage-browser__actions-dropdown",
    menu: {
      items: newActionsMenuItems,
      className: 'hue-storage-browser__action-menu'
    },
    trigger: ['hover', 'click']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: "hue-storage-browser__new-btn",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_PlusCircleIcon__WEBPACK_IMPORTED_MODULE_21__["default"], null)
  }, t('New'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_DropdownIcon__WEBPACK_IMPORTED_MODULE_20__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StorageBrowserTable_StorageBrowserTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dataSource: files,
    pageStats: pageStats,
    pageSize: pageSize,
    onFilepathChange: setFilePath,
    onPageSizeChange: setPageSize,
    onPageNumberChange: setPageNumber,
    onSortByColumnChange: setSortByColumn,
    onSortOrderChange: setSortOrder,
    sortByColumn: sortByColumn,
    sortOrder: sortOrder
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputModal_InputModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: t('Create New Folder'),
    inputLabel: t('Enter Folder name here'),
    submitText: t('Create'),
    showModal: showNewFolderModal,
    onSubmit: handleCreateNewFolder,
    onClose: function onClose() {
      return setShowNewFolderModal(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputModal_InputModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: t('Create New File'),
    inputLabel: t('Enter File name here'),
    submitText: t('Create'),
    showModal: showNewFileModal,
    onSubmit: handleCreateNewFile,
    onClose: function onClose() {
      return setShowNewFileModal(false);
    }
  })));
};
StorageBrowserTabContent.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageBrowserTabContent);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTable/StorageBrowserTable.tsx":
/*!************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTable/StorageBrowserTable.tsx ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/i18nReact */ "./desktop/core/src/desktop/js/utils/i18nReact.ts");
/* harmony import */ var cuix_dist_components_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cuix/dist/components/Table */ "./node_modules/cuix/dist/components/Table/Table.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_ProjectIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/ProjectIcon */ "./node_modules/@cloudera/cuix-core/icons/react/ProjectIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_SortAscendingIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/SortAscendingIcon */ "./node_modules/@cloudera/cuix-core/icons/react/SortAscendingIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_SortDescendingIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/SortDescendingIcon */ "./node_modules/@cloudera/cuix-core/icons/react/SortDescendingIcon.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/FileOutlined.js");
/* harmony import */ var _reactComponents_FileChooser_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../reactComponents/FileChooser/types */ "./desktop/core/src/desktop/js/reactComponents/FileChooser/types.ts");
/* harmony import */ var _reactComponents_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../reactComponents/Pagination/Pagination */ "./desktop/core/src/desktop/js/reactComponents/Pagination/Pagination.tsx");
/* harmony import */ var _StorageBrowserTable_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StorageBrowserTable.scss */ "./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTable/StorageBrowserTable.scss");
/* harmony import */ var antd_es_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/antd/es/tooltip/index.js");
var _excluded = ["className", "dataSource", "onFilepathChange", "onPageNumberChange", "onPageSizeChange", "onSortByColumnChange", "onSortOrderChange", "sortByColumn", "sortOrder", "pageSize", "pageStats", "rowClassName", "testId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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







//TODO: Use cuix icon (Currently fileIcon does not exist in cuix)





var defaultProps = {
  className: 'hue-storage-browser__table',
  rowClassName: 'hue-storage-browser__table-row',
  testId: 'hue-storage-browser__table'
};
var StorageBrowserTable = function StorageBrowserTable(_ref) {
  var className = _ref.className,
    dataSource = _ref.dataSource,
    onFilepathChange = _ref.onFilepathChange,
    onPageNumberChange = _ref.onPageNumberChange,
    onPageSizeChange = _ref.onPageSizeChange,
    onSortByColumnChange = _ref.onSortByColumnChange,
    onSortOrderChange = _ref.onSortOrderChange,
    sortByColumn = _ref.sortByColumn,
    sortOrder = _ref.sortOrder,
    pageSize = _ref.pageSize,
    pageStats = _ref.pageStats,
    rowClassName = _ref.rowClassName,
    testId = _ref.testId,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    tableHeight = _useState2[0],
    setTableHeight = _useState2[1];
  var _i18nReact$useTransla = _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__.i18nReact.useTranslation(),
    t = _i18nReact$useTransla.t;
  var onColumnTitleClicked = function onColumnTitleClicked(columnClicked) {
    if (columnClicked === sortByColumn) {
      if (sortOrder === _reactComponents_FileChooser_types__WEBPACK_IMPORTED_MODULE_2__.SortOrder.NONE) {
        onSortOrderChange(_reactComponents_FileChooser_types__WEBPACK_IMPORTED_MODULE_2__.SortOrder.ASC);
      } else if (sortOrder === _reactComponents_FileChooser_types__WEBPACK_IMPORTED_MODULE_2__.SortOrder.ASC) {
        onSortOrderChange(_reactComponents_FileChooser_types__WEBPACK_IMPORTED_MODULE_2__.SortOrder.DSC);
      } else {
        onSortOrderChange(_reactComponents_FileChooser_types__WEBPACK_IMPORTED_MODULE_2__.SortOrder.NONE);
      }
    } else {
      onSortByColumnChange(columnClicked);
      onSortOrderChange(_reactComponents_FileChooser_types__WEBPACK_IMPORTED_MODULE_2__.SortOrder.ASC);
    }
  };
  var getColumns = function getColumns(file) {
    var columns = [];
    var _loop = function _loop() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 1),
        key = _Object$entries$_i[0];
      var column = {
        dataIndex: key,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "hue-storage-browser__table-column-header",
          onClick: function onClick() {
            return onColumnTitleClicked(key);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "hue-storage-browser__table-column-title"
        }, key === 'mtime' ? t('Last Updated') : t(key)), key === sortByColumn ? sortOrder === _reactComponents_FileChooser_types__WEBPACK_IMPORTED_MODULE_2__.SortOrder.DSC ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_SortDescendingIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null) : sortOrder === _reactComponents_FileChooser_types__WEBPACK_IMPORTED_MODULE_2__.SortOrder.ASC ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_SortAscendingIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null) : null : null),
        key: "".concat(key)
      };
      if (key === 'name') {
        column.width = '45%';
        //TODO: Apply tooltip only for truncated values
        column.render = function (_, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: record.name
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "hue-storage-browser__table-cell-icon"
          }, record.type === 'dir' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_ProjectIcon__WEBPACK_IMPORTED_MODULE_8__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "hue-storage-browser__table-cell-name"
          }, record.name));
        };
      } else {
        column.width = key === 'mtime' ? '15%' : '10%';
      }
      columns.push(column);
    };
    for (var _i = 0, _Object$entries = Object.entries(file); _i < _Object$entries.length; _i++) {
      _loop();
    }
    return columns.filter(function (col) {
      return col.dataIndex !== 'type' && col.dataIndex !== 'path';
    });
  };
  var onRowClicked = function onRowClicked(record) {
    return {
      onClick: function onClick() {
        if (record.type === 'dir') {
          onFilepathChange(record.path);
          onPageNumberChange(1);
        }
        //TODO: handle onclick file
      }
    };
  };

  //pagination related functions handled by parent
  var onPreviousPageButtonClicked = function onPreviousPageButtonClicked(previousPageNumber) {
    //If previous page does not exists api returns 0
    onPageNumberChange(previousPageNumber === 0 ? 1 : previousPageNumber);
  };
  var onNextPageButtonClicked = function onNextPageButtonClicked(nextPageNumber, numPages) {
    //If next page does not exists api returns 0
    onPageNumberChange(nextPageNumber === 0 ? numPages : nextPageNumber);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    //TODO: handle table resize
    var calculateTableHeight = function calculateTableHeight() {
      var windowHeight = window.innerHeight;
      // TODO: move 450 to dynamic based on  table header height, tab nav and some header.
      var tableHeightFix = windowHeight - 450;
      return tableHeightFix;
    };
    var handleWindowResize = function handleWindowResize() {
      var tableHeight = calculateTableHeight();
      setTableHeight(tableHeight);
    };
    handleWindowResize(); // Calculate initial scroll height

    window.addEventListener('resize', handleWindowResize);
    return function () {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  if (dataSource && pageStats) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(cuix_dist_components_Table__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
      className: className,
      columns: getColumns(dataSource[0]),
      dataSource: dataSource,
      onRow: onRowClicked,
      pagination: false,
      rowClassName: rowClassName,
      rowKey: function rowKey(record, index) {
        return record.path + '' + index;
      },
      scroll: {
        y: tableHeight
      },
      "data-testid": "".concat(testId)
    }, restProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reactComponents_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onNextPageButtonClicked: onNextPageButtonClicked,
      onPageNumberChange: onPageNumberChange,
      onPageSizeChange: onPageSizeChange,
      onPreviousPageButtonClicked: onPreviousPageButtonClicked,
      pageSize: pageSize,
      pageStats: pageStats
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null);
  }
};
StorageBrowserTable.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageBrowserTable);

/***/ }),

/***/ "./desktop/core/src/desktop/js/reactComponents/CommonHeader/CommonHeader.tsx":
/*!***********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/CommonHeader/CommonHeader.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommonHeader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommonHeader.scss */ "./desktop/core/src/desktop/js/reactComponents/CommonHeader/CommonHeader.scss");
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



var defaultProps = {
  testId: 'hue-header'
};
var CommonHeader = function CommonHeader(_ref) {
  var title = _ref.title,
    icon = _ref.icon,
    testId = _ref.testId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-common-header",
    "data-testid": testId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-header-icon",
    "data-testid": "".concat(testId, "-icon")
  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-header-title",
    "data-testid": "".concat(testId, "-title")
  }, title));
};
CommonHeader.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonHeader);

/***/ }),

/***/ "./desktop/core/src/desktop/js/reactComponents/Pagination/Pagination.tsx":
/*!*******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/Pagination/Pagination.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/dropdown/index.js");
/* harmony import */ var _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/i18nReact */ "./desktop/core/src/desktop/js/utils/i18nReact.ts");
/* harmony import */ var _cloudera_cuix_core_icons_react_PageFirstIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/PageFirstIcon */ "./node_modules/@cloudera/cuix-core/icons/react/PageFirstIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_PagePreviousIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/PagePreviousIcon */ "./node_modules/@cloudera/cuix-core/icons/react/PagePreviousIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_PageNextIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/PageNextIcon */ "./node_modules/@cloudera/cuix-core/icons/react/PageNextIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_PageLastIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/PageLastIcon */ "./node_modules/@cloudera/cuix-core/icons/react/PageLastIcon.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_DropdownIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/DropdownIcon */ "./node_modules/@cloudera/cuix-core/icons/react/DropdownIcon.js");
/* harmony import */ var _Pagination_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.scss */ "./desktop/core/src/desktop/js/reactComponents/Pagination/Pagination.scss");
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









var defaultProps = {
  pageSizeOptions: [10, 50, 500, 1000]
};
var Pagination = function Pagination(_ref) {
  var onNextPageButtonClicked = _ref.onNextPageButtonClicked,
    onPageNumberChange = _ref.onPageNumberChange,
    onPageSizeChange = _ref.onPageSizeChange,
    onPreviousPageButtonClicked = _ref.onPreviousPageButtonClicked,
    pageSize = _ref.pageSize,
    _ref$pageSizeOptions = _ref.pageSizeOptions,
    pageSizeOptions = _ref$pageSizeOptions === void 0 ? [] : _ref$pageSizeOptions,
    pageStats = _ref.pageStats;
  var _i18nReact$useTransla = _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__.i18nReact.useTranslation(),
    t = _i18nReact$useTransla.t;
  var currentPageSize = pageSize;
  var pageSizeOptionsMenu = pageSizeOptions.map(function (option) {
    return {
      key: option,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: function onClick() {
          onPageSizeChange(option);
          onPageNumberChange(1);
        },
        className: "hue-pagination__page-size-menu-item-btn"
      }, option)
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-pagination__page-size-control"
  }, t('Rows per page: '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    menu: {
      items: pageSizeOptionsMenu
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "hue-pagination__page-size-menu-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPageSize), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_DropdownIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-pagination__rows-stats-display"
  }, pageStats.start_index, " - ", pageStats.end_index, " of ", pageStats.total_count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-pagination__control-buttons-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return onPageNumberChange(1);
    },
    className: "hue-pagination__control-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_PageFirstIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return onPreviousPageButtonClicked(pageStats.previous_page_number);
    },
    className: "hue-pagination__control-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_PagePreviousIcon__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return onNextPageButtonClicked(pageStats.next_page_number, pageStats.num_pages);
    },
    className: "hue-pagination__control-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_PageNextIcon__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return onPageNumberChange(pageStats.num_pages);
    },
    className: "hue-pagination__control-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_PageLastIcon__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
};
Pagination.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/InputModal/InputModal.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/InputModal/InputModal.scss ***!
  \*****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n\n.no-select {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.box-shadow-top {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-right {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-bottom {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-left {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.inset-box-shadow {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n\n.no-box-shadow {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n@-webkit-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-ms-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.hue-input-modal svg {\n  display: inline-block;\n  height: 1em;\n  width: 1em;\n}\n.hue-input-modal .hue-input-modal__description {\n  color: #000000;\n  margin-bottom: 14px;\n}\n.hue-input-modal .hue-input-modal__input {\n  height: 32px;\n}\n\n.hue-input-modal__input-label {\n  color: #5a656d;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserPage.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserPage.scss ***!
  \*********************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n\n.no-select {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.box-shadow-top {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-right {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-bottom {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-left {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.inset-box-shadow {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n\n.no-box-shadow {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n@-webkit-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-ms-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.hue-storage-browser {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n}\n.hue-storage-browser .hue-storage-browser__tab {\n  background-color: #f1f2f3;\n  padding: 0 16px;\n  flex: 0 0 100%;\n}\n.hue-storage-browser .hue-storage-browser__tab .ant-tabs-content-holder {\n  height: 100vh;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTabContents/StorageBrowserTabContent.scss":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTabContents/StorageBrowserTabContent.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n\n.no-select {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.box-shadow-top {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-right {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-bottom {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-left {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.inset-box-shadow {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n\n.no-box-shadow {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n@-webkit-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-ms-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.hue-storage-browser-tabContent {\n  background-color: #ffffff;\n  margin: 16px 0;\n}\n.hue-storage-browser-tabContent .hue-storage-browser__title-bar {\n  display: flex;\n  align-items: center;\n  margin: 0 16px;\n  padding-top: 16px;\n}\n.hue-storage-browser-tabContent .hue-storage-browser__title-bar .hue-storage-browser__icon {\n  margin-right: 8px;\n  flex: 0 0 auto;\n  height: 24px;\n  width: 24px;\n}\n.hue-storage-browser-tabContent .hue-storage-browser__title-bar .hue-storage-browser__folder-name {\n  flex: 0 0 auto;\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 300;\n}\n.hue-storage-browser-tabContent .hue-storage-browser__path-browser-panel {\n  display: flex;\n  margin: 8px 0;\n}\n.hue-storage-browser-tabContent .hue-storage-browser__path-browser-panel .hue-storage-browser__filePath {\n  flex: 0 0 auto;\n  color: #1b2329;\n  font-weight: 600;\n  margin: 0 8px 0 16px;\n}\n\n.hue-storage-browser__actions-bar {\n  display: flex;\n  margin: 16px;\n  justify-content: space-between;\n}\n.hue-storage-browser__actions-bar svg {\n  display: inline-block;\n  height: 1em;\n  width: 1em;\n}\n\n.hue-storage-browser__search {\n  flex: 0 0 auto;\n  display: flex;\n}\n\n.hue-storage-browser__actions-bar-right {\n  display: flex;\n  height: 32px;\n}\n\n.hue-storage-browser__bulk-action-btn {\n  flex: 0 0 auto;\n  color: #0074d2;\n  margin-right: 8px;\n  border: solid 1px #d6d8db;\n  box-shadow: none;\n  background-color: transparent;\n}\n.hue-storage-browser__bulk-action-btn .cdp-icon-dropdown {\n  margin-left: 5px;\n}\n\n.hue-storage-browser__new-btn {\n  flex: 0 0 auto;\n  color: #ffffff;\n  background-color: #0074d2;\n  border: solid 1px #0074d2;\n  box-shadow: none;\n}\n.hue-storage-browser__new-btn .cdp-icon-dropdown {\n  margin-left: 5px;\n}\n.hue-storage-browser__new-btn .cdp-icon-plus-circle {\n  margin-right: 5px;\n}\n\n.hue-storage-browser__actions-dropdown {\n  width: 214px;\n}\n.hue-storage-browser__actions-dropdown svg {\n  display: inline-block;\n  height: 1em;\n  width: 1em;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTable/StorageBrowserTable.scss":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTable/StorageBrowserTable.scss ***!
  \******************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n\n.no-select {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.box-shadow-top {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-right {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-bottom {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-left {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.inset-box-shadow {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n\n.no-box-shadow {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n@-webkit-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-ms-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.hue-storage-browser__table {\n  margin: 0 16px;\n}\n.hue-storage-browser__table svg {\n  display: inline-block;\n  height: 1em;\n  width: 1em;\n}\n.hue-storage-browser__table .hue-storage-browser__table-cell-icon {\n  color: #005ba6;\n  margin-right: 6px;\n}\n.hue-storage-browser__table thead {\n  height: 40px;\n  background-color: #fafbfc;\n}\n.hue-storage-browser__table th.ant-table-cell {\n  text-align: left;\n}\n.hue-storage-browser__table table {\n  width: 100%;\n}\n\n.hue-storage-browser__table-row {\n  height: 40px;\n  border-bottom: solid 1px #d6d8db;\n}\n.hue-storage-browser__table-row td.ant-table-cell {\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  max-width: 400px;\n}\n\n.hue-storage-browser__table-cell-name {\n  color: #005ba6;\n}\n\n.hue-storage-browser__table-column-header {\n  display: flex;\n}\n\n.hue-storage-browser__table-column-title {\n  text-transform: capitalize;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/CommonHeader/CommonHeader.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/CommonHeader/CommonHeader.scss ***!
  \*****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n.hue-common-header {\n  background-color: #f1f2f3;\n  height: 32px;\n  padding: 16px 16px 8px 16px;\n  display: flex;\n}\n.hue-common-header .hue-header-icon {\n  margin-right: 10px;\n  flex: 0 0 auto;\n  height: 24px;\n  width: 24px;\n}\n.hue-common-header .hue-header-title {\n  flex: 0 0 auto;\n  font-family: Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 300;\n  color: #1b2329;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/Pagination/Pagination.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/Pagination/Pagination.scss ***!
  \*************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n\n.no-select {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.box-shadow-top {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-right {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-bottom {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-left {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.inset-box-shadow {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n\n.no-box-shadow {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n@-webkit-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-ms-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.hue-pagination {\n  background-color: #f1f2f3;\n  height: 20px;\n  margin: 0;\n  padding: 16px;\n  display: flex;\n  gap: 48px;\n  justify-content: flex-end;\n  color: #5a656d;\n}\n\n.hue-pagination__page-size-control {\n  display: flex;\n  flex: 0 0 auto;\n}\n\n.hue-pagination__page-size-menu-btn {\n  display: flex;\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n  color: #5a656d;\n}\n.hue-pagination__page-size-menu-btn svg {\n  display: inline-block;\n  height: 1em;\n  width: 1em;\n}\n\n.hue-pagination__page-size-menu-item-btn {\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n}\n\n.hue-pagination__rows-stats-display {\n  flex: 0 0 auto;\n}\n\n.hue-pagination__control-buttons-panel {\n  display: flex;\n  width: 128px;\n  margin-right: 60px;\n  flex: 0 0 auto;\n}\n\n.hue-pagination__control-button {\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n  margin: 0 16px;\n  padding: 0;\n}\n.hue-pagination__control-button svg {\n  display: inline-block;\n  height: 1em;\n  width: 1em;\n}\n.hue-pagination__control-button svg {\n  height: 20px;\n  width: 20px;\n  color: #5a656d;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/storageBrowser/InputModal/InputModal.scss":
/*!************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/storageBrowser/InputModal/InputModal.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_InputModal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./InputModal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/InputModal/InputModal.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_InputModal_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_InputModal_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserPage.scss":
/*!****************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserPage.scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_StorageBrowserPage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./StorageBrowserPage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserPage.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_StorageBrowserPage_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_StorageBrowserPage_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTabContents/StorageBrowserTabContent.scss":
/*!************************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTabContents/StorageBrowserTabContent.scss ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_StorageBrowserTabContent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./StorageBrowserTabContent.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTabContents/StorageBrowserTabContent.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_StorageBrowserTabContent_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_StorageBrowserTabContent_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTable/StorageBrowserTable.scss":
/*!*************************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTable/StorageBrowserTable.scss ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_StorageBrowserTable_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./StorageBrowserTable.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/storageBrowser/StorageBrowserPage/StorageBrowserTable/StorageBrowserTable.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_StorageBrowserTable_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_StorageBrowserTable_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./desktop/core/src/desktop/js/reactComponents/CommonHeader/CommonHeader.scss":
/*!************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/CommonHeader/CommonHeader.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_CommonHeader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./CommonHeader.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/CommonHeader/CommonHeader.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_CommonHeader_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_CommonHeader_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./desktop/core/src/desktop/js/reactComponents/Pagination/Pagination.scss":
/*!********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/Pagination/Pagination.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_Pagination_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./Pagination.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/Pagination/Pagination.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_Pagination_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_Pagination_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/desktop_core_src_desktop_js_apps_storageBrowser_StorageBrowserPage_StorageBrowserPage_tsx-chunk-a2a4f8506cb55bb7.js.map