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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["desktop_core_src_desktop_js_reactComponents_WelcomeTour_WelcomeTour_tsx"],{

/***/ "./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.tsx":
/*!*********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeTour": () => (/* binding */ WelcomeTour),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_joyride__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-joyride */ "./node_modules/react-joyride/dist/index.mjs");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _useHuePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useHuePubSub */ "./desktop/core/src/desktop/js/reactComponents/useHuePubSub.ts");
/* harmony import */ var _WelcomeTour_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WelcomeTour.scss */ "./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.scss");
/* harmony import */ var _WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WelcomeTour.module.scss */ "./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.module.scss");
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







var backButtonBorder = _WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].backButtonBorder,
  borderRadius = _WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].borderRadius,
  buttonFontSize = _WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].buttonFontSize,
  buttonLineHeight = _WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].buttonLineHeight,
  buttonPadding = _WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].buttonPadding,
  overlayColor = _WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].overlayColor,
  primaryColor = _WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].primaryColor,
  tourZIndex = _WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tourZIndex;
var getStepContent = function getStepContent(title, text) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, title), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, text));
};
var steps = [{
  content: getStepContent((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Welcome to Hue 4!'), (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('We want to introduce you to the new interface. It takes less than a minute. Ready?')),
  target: 'body',
  disableBeacon: true,
  placement: 'center'
}, {
  content: getStepContent((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('A new top bar!'), (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Do global search and view status of jobs and notifications on the right.')),
  target: '.navbar-default',
  disableBeacon: true,
  placement: 'bottom'
}, {
  content: getStepContent((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Sidebar for navigation'), (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Open apps and browsers, get help and manage your user profile.')),
  target: '.sidebar',
  disableBeacon: true,
  placement: 'right'
}, {
  content: getStepContent((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Left Assist Panel'), (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Discover data sources with the improved data assist panel. Remember to right-click items for more!')),
  target: '.left-panel',
  disableBeacon: true,
  placement: 'right'
}, {
  content: getStepContent(undefined, "".concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('This is the main attraction, where your selected app runs.'), "\n").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Hover on the app name to star it as your favorite application.'))),
  target: '.page-content',
  disableBeacon: true,
  placement: 'bottom',
  styles: {
    tooltip: {
      marginTop: '100px'
    }
  }
}, {
  content: getStepContent((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Right Assist Panel'), (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Some apps have a right panel with additional information to assist you in your data discovery.')),
  target: '.right-panel',
  disableBeacon: true,
  placement: 'left'
}, {
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('This ends the tour. To see it again, click Welcome Tour from the help section in the sidebar.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('And now go '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Query, Explore, Repeat')), "!")),
  target: 'body',
  disableBeacon: true,
  placement: 'center'
}];
if (window.USER_IS_ADMIN) {
  steps.splice(3, 0, {
    content: getStepContent((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Administration'), (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('As a superuser, you can check system configuration from the user menu and install sample data and jobs for your users.')),
    target: '.server-position-pointer-welcome-tour',
    disableBeacon: true,
    placement: 'right-end'
  });
}
var styles = {
  options: {
    overlayColor: overlayColor,
    primaryColor: primaryColor,
    zIndex: parseInt(tourZIndex) || 1 // the fallback to 1 is for testing where it doesn't pick up the scss vars properly
  },
  buttonBack: {
    border: backButtonBorder,
    borderRadius: borderRadius,
    fontSize: buttonFontSize,
    lineHeight: buttonLineHeight,
    padding: buttonPadding
  },
  buttonNext: {
    borderRadius: borderRadius,
    fontSize: buttonFontSize,
    lineHeight: buttonLineHeight,
    padding: buttonPadding
  },
  tooltip: {
    borderRadius: borderRadius
  },
  spotlight: {
    borderRadius: 0
  }
};
var WelcomeTour = function WelcomeTour() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    run = _useState2[0],
    setRun = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    joyrideHelpers = _useState4[0],
    setJoyrideHelpers = _useState4[1];
  (0,_useHuePubSub__WEBPACK_IMPORTED_MODULE_2__.useHuePubSub)({
    topic: 'show.welcome.tour',
    callback: function callback() {
      setRun(true);
    }
  });
  var onStateChange = function onStateChange(_ref) {
    var action = _ref.action;
    if (action === 'close' || action === 'reset') {
      setRun(false);
      if (joyrideHelpers) {
        joyrideHelpers.reset(false);
      }

      // While migrating the old welcome tour I noticed that we no longer start the welcome tour
      // automatically for new users, this was done intentionally in commit:
      // https://github.com/cloudera/hue/commit/f54d0e23fa1105b1bbf8c2cd8f830c2835572be1
      // The user preference is in place in the backend so if we ever want to revert that change
      // we should uncomment the below code and set the initial "run" state based on the value
      // of the preference.

      // post('/desktop/api2/user_preferences/is_welcome_tour_seen', {
      //   set: 'seen'
      // });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_joyride__WEBPACK_IMPORTED_MODULE_5__["default"], {
    steps: steps,
    run: run,
    disableScrolling: true,
    continuous: true,
    spotlightPadding: 0,
    callback: onStateChange,
    getHelpers: setJoyrideHelpers,
    locale: {
      back: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Back'),
      close: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Close'),
      last: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Close'),
      next: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])('Next')
    },
    styles: styles
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WelcomeTour);

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.module.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.module.scss ***!
  \**********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.cYlHrfIyCR41NwCdEhsdMQ\\=\\= {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n\n.wdUYqH1U34e9XsZu7ZLeUA\\=\\= {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.gPKDIb9FMT5i0ubkmPK9mw\\=\\= {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n._5jnBq0Jm-Ir6nAtUL0\\+D5w\\=\\= {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n\n._31dYYlTVfTSCnK02iY7oJg\\=\\= {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.iH\\+Wijxnp5JpoIghv6L0Zg\\=\\= {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n\n._8u8\\+kbAETveTdVljrWIiXA\\=\\= {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n\n.judH21Z2GyvkddwmqgVl4A\\=\\= {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n@-webkit-keyframes _82OdwuptZfBxBdomxyQ24A\\=\\= {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes _82OdwuptZfBxBdomxyQ24A\\=\\= {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-ms-keyframes _82OdwuptZfBxBdomxyQ24A\\=\\= {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes _82OdwuptZfBxBdomxyQ24A\\=\\= {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _82OdwuptZfBxBdomxyQ24A\\=\\= {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/* stylelint-disable */\n\n/* stylelint-enable */", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"primaryColor": "#0b7fad",
	"overlayColor": "rgba(0, 0, 0, 0.2)",
	"tourZIndex": "2000",
	"borderRadius": "3px",
	"buttonFontSize": "14px",
	"buttonPadding": "6px 12px",
	"buttonLineHeight": "20px",
	"backButtonBorder": "1px solid #d6d8db",
	"hue-box": "cYlHrfIyCR41NwCdEhsdMQ==",
	"no-select": "wdUYqH1U34e9XsZu7ZLeUA==",
	"box-shadow-top": "gPKDIb9FMT5i0ubkmPK9mw==",
	"box-shadow-right": "_5jnBq0Jm-Ir6nAtUL0+D5w==",
	"box-shadow-bottom": "_31dYYlTVfTSCnK02iY7oJg==",
	"box-shadow-left": "iH+Wijxnp5JpoIghv6L0Zg==",
	"inset-box-shadow": "_8u8+kbAETveTdVljrWIiXA==",
	"no-box-shadow": "judH21Z2GyvkddwmqgVl4A==",
	"fade-in-frames": "_82OdwuptZfBxBdomxyQ24A=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.scss ***!
  \***************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n\n.no-select {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.box-shadow-top {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-right {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-bottom {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-left {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.inset-box-shadow {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n\n.no-box-shadow {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n@-webkit-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-ms-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n \"License\"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n.react-joyride__tooltip h3 {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 300;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.module.scss":
/*!*****************************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.module.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./WelcomeTour.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_WelcomeTour_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.scss":
/*!**********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_WelcomeTour_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./WelcomeTour.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_WelcomeTour_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_3_use_2_WelcomeTour_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/desktop_core_src_desktop_js_reactComponents_WelcomeTour_WelcomeTour_tsx-chunk-a2a4f8506cb55bb7.js.map