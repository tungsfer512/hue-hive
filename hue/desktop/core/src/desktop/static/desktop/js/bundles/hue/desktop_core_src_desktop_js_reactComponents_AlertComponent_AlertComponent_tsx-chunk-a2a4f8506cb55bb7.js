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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["desktop_core_src_desktop_js_reactComponents_AlertComponent_AlertComponent_tsx"],{

/***/ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.tsx":
/*!***************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cuix_dist_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cuix/dist/components/Alert/Alert */ "./node_modules/cuix/dist/components/Alert/Alert.js");
/* harmony import */ var _AlertComponent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertComponent.scss */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.scss");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var _useHuePubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useHuePubSub */ "./desktop/core/src/desktop/js/reactComponents/useHuePubSub.ts");
/* harmony import */ var utils_i18nReact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/i18nReact */ "./desktop/core/src/desktop/js/utils/i18nReact.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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







var clearCloseTimeout = function clearCloseTimeout(alert) {
  if (alert.timeoutHandle) {
    clearTimeout(alert.timeoutHandle);
  }
};
var AlertComponent = function AlertComponent() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    alerts = _useState2[0],
    setAlerts = _useState2[1];
  var updateAlerts = function updateAlerts(alert, type) {
    if (!alert.message) {
      return;
    }
    setAlerts(function (activeAlerts) {
      // Prevent showing the same message multiple times.
      // TODO: Consider showing a count in the error notification when the same message is reported multiple times.
      if (activeAlerts.some(function (activeAlerts) {
        return activeAlerts.alert.message === alert.message;
      })) {
        return activeAlerts;
      }
      var newAlert = {
        alert: alert,
        type: type
      };
      if (type === 'info' || alert.noStick) {
        newAlert.timeoutHandle = setTimeout(function () {
          handleClose(newAlert);
        }, 3000);
      }
      return [].concat(_toConsumableArray(activeAlerts), [newAlert]);
    });
  };
  (0,_useHuePubSub__WEBPACK_IMPORTED_MODULE_3__.useHuePubSub)({
    topic: _events__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_ERROR_TOPIC,
    callback: function callback(newAlert) {
      return updateAlerts(newAlert, 'error');
    }
  });
  (0,_useHuePubSub__WEBPACK_IMPORTED_MODULE_3__.useHuePubSub)({
    topic: _events__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_INFO_TOPIC,
    callback: function callback(newAlert) {
      return updateAlerts(newAlert, 'info');
    }
  });
  (0,_useHuePubSub__WEBPACK_IMPORTED_MODULE_3__.useHuePubSub)({
    topic: _events__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_WARNING_TOPIC,
    callback: function callback(newAlert) {
      return updateAlerts(newAlert, 'warning');
    }
  });
  (0,_useHuePubSub__WEBPACK_IMPORTED_MODULE_3__.useHuePubSub)({
    topic: _events__WEBPACK_IMPORTED_MODULE_2__.HIDE_GLOBAL_ALERTS_TOPIC,
    callback: function callback() {
      alerts.forEach(function (visibleAlert) {
        return clearCloseTimeout(visibleAlert);
      });
      setAlerts([]);
    }
  });
  var handleClose = function handleClose(alertToClose) {
    var filteredAlerts = alerts.filter(function (alert) {
      return alert !== alertToClose;
    });
    clearCloseTimeout(alertToClose);
    setAlerts(filteredAlerts);
  };
  var _i18nReact$useTransla = utils_i18nReact__WEBPACK_IMPORTED_MODULE_4__.i18nReact.useTranslation(),
    t = _i18nReact$useTransla.t;
  var getHeader = function getHeader(alert) {
    if (alert.type === 'error') {
      return t('Error');
    } else if (alert.type === 'info') {
      return t('Info');
    } else if (alert.type === 'warning') {
      return t('Warning');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hue-alert flash-messages cuix antd"
  }, alerts.map(function (visibleAlert) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(cuix_dist_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: visibleAlert.alert.message,
      type: visibleAlert.type,
      message: getHeader(visibleAlert),
      description: visibleAlert.alert.message,
      showIcon: true,
      closable: true,
      onClose: function onClose() {
        return handleClose(visibleAlert);
      }
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertComponent);

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.scss ***!
  \*********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n.hue-alert {\n  position: fixed;\n  width: 30%;\n  z-index: 9999;\n  top: 7px;\n  right: 0;\n  margin-right: 24px;\n  display: flex;\n  flex-flow: column;\n  row-gap: 10px;\n}\n.hue-alert .ant-alert {\n  padding-right: 12px;\n}\n.hue-alert .ant-alert .ant-alert-description {\n  display: inline;\n}\n.hue-alert button:hover,\n.hue-alert button:focus {\n  background-color: unset;\n}\n.hue-alert button span {\n  font-size: 12px;\n}\n.hue-alert button svg.cdp-icon-close {\n  height: 16px;\n}\n.hue-alert .hue-alert--warning {\n  color: #3d1300;\n  background: #fff3e5;\n  border: 1px solid #f96702;\n}\n.hue-alert .hue-alert--warning button {\n  color: #0a5f0a;\n}\n.hue-alert .hue-alert--success {\n  color: #023c02;\n  background: #e5ffe5;\n  border: 1px solid #2fae2f;\n}\n.hue-alert .hue-alert--success button {\n  color: #0a5f0a;\n}\n.hue-alert .hue-alert--error {\n  color: #3d1300;\n  background: #ffecec;\n  border: 1px solid #fe3f3f;\n  display: flex;\n  align-items: flex-start;\n}\n.hue-alert .hue-alert--error button {\n  color: #6e0707;\n  position: absolute;\n  top: 0.5rem;\n  right: 3%;\n}\n.hue-alert .hue-alert--message {\n  margin-right: 1rem;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.scss":
/*!****************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_AlertComponent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./AlertComponent.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_AlertComponent_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_AlertComponent_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/desktop_core_src_desktop_js_reactComponents_AlertComponent_AlertComponent_tsx-chunk-a2a4f8506cb55bb7.js.map