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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["desktop_core_src_desktop_js_apps_editor_components_result_reactExample_ReactExample_tsx"],{

/***/ "./desktop/core/src/desktop/js/apps/editor/components/result/reactExample/ReactExample.tsx":
/*!*************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/editor/components/result/reactExample/ReactExample.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/skeleton/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/pagination/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/dropdown/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var cuix_dist_components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cuix/dist/components/Button/PrimaryButton */ "./node_modules/cuix/dist/components/Button/PrimaryButton.js");
/* harmony import */ var _cloudera_cuix_core_icons_react_PlusCircleIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @cloudera/cuix-core/icons/react/PlusCircleIcon */ "./node_modules/@cloudera/cuix-core/icons/react/PlusCircleIcon.js");
/* harmony import */ var _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/i18nReact */ "./desktop/core/src/desktop/js/utils/i18nReact.ts");
/* harmony import */ var _aceEditor_AceLocationHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../aceEditor/AceLocationHandler */ "./desktop/core/src/desktop/js/apps/editor/components/aceEditor/AceLocationHandler.ts");
/* harmony import */ var _reactComponents_ReactExampleGlobal_ReactExampleGlobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../reactComponents/ReactExampleGlobal/ReactExampleGlobal */ "./desktop/core/src/desktop/js/reactComponents/ReactExampleGlobal/ReactExampleGlobal.tsx");
/* harmony import */ var _reactComponents_useHuePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../reactComponents/useHuePubSub */ "./desktop/core/src/desktop/js/reactComponents/useHuePubSub.ts");
/* harmony import */ var _ReactExample_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReactExample.scss */ "./desktop/core/src/desktop/js/apps/editor/components/result/reactExample/ReactExample.scss");


var _excluded = ["activeExecutable"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





// Provides a i18n translation hook


// tsx-files don't have the same baseUrl as other js files so
// we are using a relative path when importing






// When we have type definitions and Ace imported using webackpack we should
// use those types instead of creating our own, e.g. Ace.Position

// Using the FunctionComponent generic is optional. Alternatively you can explicitly
// define the children prop like in the ReactExampleGlobal component.
var ReactExample = function ReactExample(_ref) {
  var activeExecutable = _ref.activeExecutable,
    i18n = _objectWithoutProperties(_ref, _excluded);
  // We use the translation hook WITHOUT the built in suspence, meaning that our
  // component should handle the rendering of the loading state. This gives us the
  // possibilty to render a loader or placeholder while waiting.
  var _i18nReact$useTransla = _utils_i18nReact__WEBPACK_IMPORTED_MODULE_1__.i18nReact.useTranslation(undefined, {
      useSuspense: false
    }),
    t = _i18nReact$useTransla.t,
    i18nReady = _i18nReact$useTransla.ready;

  // This is one way we can do i18n on default values for strings passed as props.
  // Use the prop value if present, if not we use a default value/key passed through i18n
  var _i18n$title = i18n.title,
    title = _i18n$title === void 0 ? t('Schedule') : _i18n$title;

  // Example of having the react component rerender based on changes from useHuePubSub.
  // Use with caution and preferrably only at the top level component in your component tree.
  var editorCursor = (0,_reactComponents_useHuePubSub__WEBPACK_IMPORTED_MODULE_4__.useHuePubSub)({
    topic: _aceEditor_AceLocationHandler__WEBPACK_IMPORTED_MODULE_2__.CURSOR_POSITION_CHANGED_EVENT
  });
  var id = activeExecutable === null || activeExecutable === void 0 ? void 0 : activeExecutable.id;
  var position = (editorCursor === null || editorCursor === void 0 ? void 0 : editorCursor.position) !== undefined ? JSON.stringify(editorCursor.position) : t('Not available');
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var showModal = function showModal() {
    setIsModalOpen(true);
  };
  var handleOk = function handleOk() {
    setIsModalOpen(false);
  };
  var handleCancel = function handleCancel() {
    setIsModalOpen(false);
  };
  var items = [{
    label: 'item 1',
    key: 'item-1'
  },
  // remember to pass the key prop
  {
    label: 'item 2',
    key: 'item-2'
  }];
  return !i18nReady ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "antd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], null)) :
  /*#__PURE__*/
  // The 'antd' class is added to the root element since we want it to apply the correct
  // "global" styling to its antd sub components, e.g. the antd Button.
  react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "react-example cuix antd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "react-example__title hue-h1 "
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showTotal: function showTotal(total) {
      return "Total ".concat(total, " items");
    },
    showSizeChanger: true,
    defaultCurrent: 1,
    total: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(cuix_dist_components_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cloudera_cuix_core_icons_react_PlusCircleIcon__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    onClick: showModal
  }, t('Open (cuix button)')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    menu: {
      items: items
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, "Hover me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "react-example__description"
  }, "I'm an Editor specific react component containing subcomponents. The dynamic id that I'm getting from a Knockout observable is ", id, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "react-example__description"
  }, "I'm also geting a cursor position from hue huePubSub using the hook useHuePubSub which is\n        updated on each 'editor.cursor.position.changed'. Cursor position is\n        ".concat(position)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reactComponents_ReactExampleGlobal_ReactExampleGlobal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "react-example__react-example-global-component"
  }, "I'm a button from the application global component set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "primary",
    onClick: function onClick() {
      return console.info('clicked');
    }
  }, "I'm an Antd button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: t('Modify'),
    open: isModalOpen,
    onOk: handleOk,
    onCancel: handleCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, t('Settings'), "."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactExample);

/***/ }),

/***/ "./desktop/core/src/desktop/js/reactComponents/useHuePubSub.ts":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/useHuePubSub.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHuePubSub": () => (/* binding */ useHuePubSub)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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




// Basic helper hook to let a component subscribe to a huePubSub topic and rerender for each message
// by placing the message/info in a state that is automatically updated.

// Use with caution and preferably only at the top level component in your component tree since
// we don't want to have states stored all over the app.

// When a callback is provided the state will not be updated.

function useHuePubSub(_ref) {
  var topic = _ref.topic,
    callback = _ref.callback,
    app = _ref.app;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      info: undefined
    }),
    _useState2 = _slicedToArray(_useState, 2),
    huePubSubState = _useState2[0],
    setHuePubSubState = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var pubSub = _utils_huePubSub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(topic, function (info) {
      if (callback) {
        callback(info);
      } else {
        // Always create a new state so that the React component is re-rendered even
        // if the info is the same as previous info. This is to stay aligned with the idea
        // of having a component being notified for EVERY message for the topics it subscribes to.
        setHuePubSubState(function () {
          return {
            info: info
          };
        });
      }
    }, app);
    return function () {
      // Remove huePubSub subscription
      pubSub.remove();
    };
  });
  return huePubSubState.info;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/editor/components/result/reactExample/ReactExample.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/editor/components/result/reactExample/ReactExample.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n.antd .hue-h1 {\n  font-family: Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 28px;\n  line-height: 36px;\n  font-weight: 300;\n}\n.antd .hue-h2 {\n  font-family: Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 300;\n}\n.antd .hue-h3 {\n  font-family: Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 300;\n}\n.antd .hue-h4 {\n  font-family: Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 500;\n}\n.antd .hue-h5 {\n  font-family: Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 16px;\n  font-weight: 500;\n}\n.antd .hue-h6 {\n  font-family: Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  line-height: 20px;\n  font-weight: 500;\n}\n\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n\n.no-select {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.box-shadow-top {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-right {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-bottom {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-left {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.inset-box-shadow {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n\n.no-box-shadow {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n@-webkit-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-ms-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.react-example {\n  background-color: #f8f8f8;\n}\n\n.react-example__title,\n.react-example__description {\n  color: #0b7fad;\n  -webkit-animation: fade-in-frames 0.5s;\n  -moz-animation: fade-in-frames 0.5s;\n  -ms-animation: fade-in-frames 0.5s;\n  -o-animation: fade-in-frames 0.5s;\n  animation: fade-in-frames 0.5s;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/editor/components/result/reactExample/ReactExample.scss":
/*!**************************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/editor/components/result/reactExample/ReactExample.scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_ReactExample_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./ReactExample.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/apps/editor/components/result/reactExample/ReactExample.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_ReactExample_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_ReactExample_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/desktop_core_src_desktop_js_apps_editor_components_result_reactExample_ReactExample_tsx-chunk-a2a4f8506cb55bb7.js.map