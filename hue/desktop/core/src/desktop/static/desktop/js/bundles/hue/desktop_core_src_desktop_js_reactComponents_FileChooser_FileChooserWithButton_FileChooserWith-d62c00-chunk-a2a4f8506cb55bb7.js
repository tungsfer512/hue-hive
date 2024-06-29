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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["desktop_core_src_desktop_js_reactComponents_FileChooser_FileChooserWithButton_FileChooserWith-d62c00"],{

/***/ "./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserModal/FileChooserModal.tsx":
/*!*******************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserModal/FileChooserModal.tsx ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/modal/Modal */ "./node_modules/antd/lib/modal/Modal.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/spin/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/menu/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _components_icons_HdfsIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icons/HdfsIcon */ "./desktop/core/src/desktop/js/components/icons/HdfsIcon.tsx");
/* harmony import */ var _components_icons_S3Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/icons/S3Icon */ "./desktop/core/src/desktop/js/components/icons/S3Icon.tsx");
/* harmony import */ var _components_icons_AdlsIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/icons/AdlsIcon */ "./desktop/core/src/desktop/js/components/icons/AdlsIcon.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./desktop/core/src/desktop/js/reactComponents/FileChooser/api.ts");
/* harmony import */ var _FileChooserModal_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FileChooserModal.scss */ "./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserModal/FileChooserModal.scss");
/* harmony import */ var _PathBrowser_PathBrowser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PathBrowser/PathBrowser */ "./desktop/core/src/desktop/js/reactComponents/FileChooser/PathBrowser/PathBrowser.tsx");
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










var defaultProps = {
  title: 'Choose a file',
  okText: 'Select'
};
var FileChooserModal = function FileChooserModal(_ref) {
  var show = _ref.show,
    onCancel = _ref.onCancel,
    title = _ref.title,
    okText = _ref.okText;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    fileSystemList = _useState2[0],
    setFileSystemList = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    filePath = _useState4[0],
    setFilePath = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    filesData = _useState6[0],
    setFilesData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    loadingFiles = _useState10[0],
    setloadingFiles = _useState10[1];
  var icons = {
    hdfs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_HdfsIcon__WEBPACK_IMPORTED_MODULE_1__["default"], null),
    abfs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_AdlsIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null),
    s3: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_S3Icon__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  };
  var handleOk = function handleOk() {
    //temporary until the file is selected through the file chooser component
    onCancel();
  };
  var handleCancel = function handleCancel() {
    onCancel();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (show && !fileSystemList) {
      setLoading(true);
      (0,_api__WEBPACK_IMPORTED_MODULE_4__.fetchFileSystems)().then(function (fileSystems) {
        var fileSystemsObj = fileSystems.map(function (system, index) {
          return {
            label: system.file_system,
            key: index,
            icon: icons[system.file_system],
            user_home_dir: system.user_home_directory
          };
        });
        setFileSystemList(fileSystemsObj);
        if (fileSystems.length !== 0) {
          setFilePath(fileSystems[0].user_home_directory);
        }
      })["catch"](function (error) {
        //TODO: Properly handle errors.
        console.error(error);
      })["finally"](function () {
        setLoading(false);
      });
    }
  }, [show]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (filePath) {
      setloadingFiles(true);
      (0,_api__WEBPACK_IMPORTED_MODULE_4__.fetchFiles)(filePath).then(function (responseFilesData) {
        setFilesData(responseFilesData);
      })["catch"](function (error) {
        //TODO: handle errors
        console.error(error);
      })["finally"](function () {
        setloadingFiles(false);
      });
    }
  }, [filePath]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: title,
    open: show,
    onOk: handleOk,
    onCancel: handleCancel,
    okText: okText,
    width: 930,
    className: "hue-file-chooser__modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spinning: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    span: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"], {
    items: fileSystemList,
    onSelect: function onSelect(selectedMenuItem) {
      setFilePath(fileSystemList[selectedMenuItem.key].user_home_dir);
    },
    className: "hue-file-system__panel"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    span: 19
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spinning: loadingFiles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "hue-path-browser-panel",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    span: 18
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PathBrowser_PathBrowser__WEBPACK_IMPORTED_MODULE_6__["default"], {
    breadcrumbs: filesData === null || filesData === void 0 ? void 0 : filesData.breadcrumbs,
    onFilepathChange: setFilePath,
    seperator: '>',
    showIcon: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    span: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "hue-path-browser-panel__button"
  }, "New Folder")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    span: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "hue-path-browser-panel__button"
  }, "Upload"))))))));
};
FileChooserModal.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileChooserModal);

/***/ }),

/***/ "./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserWithButton/FileChooserWithButton.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserWithButton/FileChooserWithButton.tsx ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _FileChooserWithButton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileChooserWithButton.scss */ "./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserWithButton/FileChooserWithButton.scss");
/* harmony import */ var _FileChooserModal_FileChooserModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FileChooserModal/FileChooserModal */ "./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserModal/FileChooserModal.tsx");
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





var defaultProps = {
  title: 'File chooser component'
};
var FileChooserWithButton = function FileChooserWithButton(_ref) {
  var title = _ref.title;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "hue-file-chooser__button",
    type: "primary",
    onClick: function onClick() {
      return setShow(true);
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FileChooserModal_FileChooserModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onCancel: function onCancel() {
      return setShow(false);
    },
    show: show,
    title: "Choose a file",
    okText: "Select"
  }));
};
FileChooserWithButton.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileChooserWithButton);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserModal/FileChooserModal.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserModal/FileChooserModal.scss ***!
  \*************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n.hue-file-chooser__modal .ant-modal-body {\n  padding: 0;\n  height: 554px;\n}\n.hue-file-chooser__modal .ant-modal-body .hue-file-system__panel {\n  height: 554px;\n  background-color: #f1f2f3;\n  padding-top: 20px;\n}\n.hue-file-chooser__modal .ant-modal-body .hue-file-system__panel .ant-menu-item {\n  display: flex;\n  align-items: center;\n}\n.hue-file-chooser__modal .ant-modal-body .hue-file-system__panel .ant-menu-item-icon {\n  height: 20px;\n  width: 20px;\n}\n.hue-file-chooser__modal .ant-modal-body .hue-file-system__panel .ant-menu-item-selected {\n  background-color: #d6d8db;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserWithButton/FileChooserWithButton.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserWithButton/FileChooserWithButton.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n.hue-file-chooser__button {\n  background-color: #0b7fad;\n  color: white;\n  margin-left: 40px;\n  margin-top: 12px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserModal/FileChooserModal.scss":
/*!********************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserModal/FileChooserModal.scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_FileChooserModal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./FileChooserModal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserModal/FileChooserModal.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_FileChooserModal_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_FileChooserModal_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserWithButton/FileChooserWithButton.scss":
/*!******************************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserWithButton/FileChooserWithButton.scss ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_FileChooserWithButton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./FileChooserWithButton.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/FileChooser/FileChooserWithButton/FileChooserWithButton.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_FileChooserWithButton_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_FileChooserWithButton_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/desktop_core_src_desktop_js_reactComponents_FileChooser_FileChooserWithButton_FileChooserWith-d62c00-chunk-a2a4f8506cb55bb7.js.map