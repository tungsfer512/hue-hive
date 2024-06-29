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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["jobBrowser"],{

/***/ "./desktop/core/src/desktop/js/apps/jobBrowser/app.js":
/*!************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/jobBrowser/app.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _components_hiveQueryPlan_webcomp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hiveQueryPlan/webcomp */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/hiveQueryPlan/webcomp.ts");
/* harmony import */ var _components_queriesList_webcomp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/queriesList/webcomp */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/queriesList/webcomp.ts");
/* harmony import */ var _components_impalaQueries_webcomp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/impalaQueries/webcomp */ "./desktop/core/src/desktop/js/apps/jobBrowser/components/impalaQueries/webcomp.ts");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventListeners */ "./desktop/core/src/desktop/js/apps/jobBrowser/eventListeners.js");
/* harmony import */ var _knockout_JobBrowserViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./knockout/JobBrowserViewModel */ "./desktop/core/src/desktop/js/apps/jobBrowser/knockout/JobBrowserViewModel.js");
/* harmony import */ var _knockout_Job__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./knockout/Job */ "./desktop/core/src/desktop/js/apps/jobBrowser/knockout/Job.js");
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
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












utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('app.dom.loaded', function (app) {
  if (app !== 'jobbrowser') {
    return;
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    var jobBrowserViewModel = new _knockout_JobBrowserViewModel__WEBPACK_IMPORTED_MODULE_7__["default"](false);
    var openJob = function openJob(id) {
      if (jobBrowserViewModel.job() == null) {
        jobBrowserViewModel.job(new _knockout_Job__WEBPACK_IMPORTED_MODULE_8__["default"](jobBrowserViewModel, {}));
      }
      jobBrowserViewModel.job().id(id);
      jobBrowserViewModel.job().fetchJob();
    };
    knockout__WEBPACK_IMPORTED_MODULE_1__.applyBindings(jobBrowserViewModel, jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jobbrowserComponents')[0]);
    var loadHash = function loadHash() {
      if (window.location.pathname.indexOf('jobbrowser') > -1) {
        jobBrowserViewModel.load();
      }
    };
    window.onhashchange = function () {
      return loadHash();
    };
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('oozie.action.logs.click', function (widget) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().get(widget.logsURL(), {
        format: 'link'
      }, function (data) {
        var id = data.job || data.attemptid;
        if (id) {
          openJob(id);
        } else {
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_9__.GLOBAL_ERROR_TOPIC, {
            message: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_10__["default"])('No log available')
          });
        }
      });
    }, 'jobbrowser');
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('oozie.action.click', function (widget) {
      openJob(widget.externalId());
    }, 'jobbrowser');
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('browser.job.open.link', function (id) {
      openJob(id);
    }, 'jobbrowser');
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('app.gained.focus', function (app) {
      if (app === 'jobbrowser') {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('graph.draw.arrows');
        loadHash();
      }
    }, 'jobbrowser');
    var configUpdated = function configUpdated(clusterConfig) {
      jobBrowserViewModel.appConfig(clusterConfig && clusterConfig['app_config']);
      jobBrowserViewModel.clusterType(clusterConfig && clusterConfig['cluster_type']);
      loadHash();
    };
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('cluster.config.set.config', configUpdated);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('cluster.config.get.config', configUpdated);
    utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('submit.rerun.popup.return', function (data) {
      utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_9__.GLOBAL_INFO_TOPIC, {
        message: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_10__["default"])('Rerun submitted.')
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#rerun-modal').modal('hide');
      jobBrowserViewModel.job().apiStatus('RUNNING');
      jobBrowserViewModel.monitorJob(jobBrowserViewModel.job());
    }, 'jobbrowser');
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["defaultVendors~hue-e3924278","defaultVendors~hue-aacc2dbb","defaultVendors~hue-bc050c32","defaultVendors~hue-b9fa02b6","defaultVendors~hue-2ef5bd86","defaultVendors~hue-6b948b9f","defaultVendors~hue-fa70753b","defaultVendors~hue-e5abfd2a","hue-e981d915","hue-541bdf64","hue-15ab7d1f","hue-4bde8d39","hue-7cb30146","hue-a799d440","hue-16bbf7a6","hue-8dc1dc79","hue-221ed165","hue-027ccb81","hue-18218eda","hue-3d824a78","hue-3fe99f16","hue-b5650f80","hue-79cd9d02","hue-f2b57085","hue-3528fb62","hue-a2399487","hue-92506859","hue-875ef077"], () => (__webpack_exec__("./desktop/core/src/desktop/js/apps/jobBrowser/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/jobBrowser-bundle-a2a4f8506cb55bb7.js.map