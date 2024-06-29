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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["storageBrowser"],{

/***/ "./desktop/core/src/desktop/js/apps/storageBrowser/app.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/storageBrowser/app.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_huePubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
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

_utils_huePubSub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('app.dom.loaded', function (app) {
  if (app !== 'filebrowser') {
    return;
  }
  window.createReactComponents('#embeddable_filebrowser');
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["defaultVendors~hue-e3924278","defaultVendors~hue-aacc2dbb","defaultVendors~hue-bc050c32","defaultVendors~hue-b9fa02b6","defaultVendors~hue-2ef5bd86","defaultVendors~hue-6b948b9f","defaultVendors~hue-fa70753b","defaultVendors~hue-e5abfd2a","hue-e981d915","hue-541bdf64","hue-15ab7d1f","hue-4bde8d39","hue-7cb30146","hue-a799d440","hue-16bbf7a6","hue-8dc1dc79","hue-221ed165","hue-027ccb81","hue-18218eda","hue-3d824a78","hue-3fe99f16","hue-b5650f80","hue-79cd9d02","hue-f2b57085","hue-3528fb62","hue-a2399487","hue-92506859","hue-875ef077"], () => (__webpack_exec__("./desktop/core/src/desktop/js/apps/storageBrowser/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/storageBrowser-bundle-a2a4f8506cb55bb7.js.map