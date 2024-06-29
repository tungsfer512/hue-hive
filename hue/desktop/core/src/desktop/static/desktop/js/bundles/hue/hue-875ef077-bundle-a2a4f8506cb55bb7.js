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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-875ef077"],{

/***/ "./desktop/core/src/desktop/js/ko/ko.all.js":
/*!**************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/ko.all.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ko_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ko.init */ "./desktop/core/src/desktop/js/ko/ko.init.js");
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout.mapping */ "./node_modules/knockout.mapping/knockout.mapping.js");
/* harmony import */ var knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout_mapping__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var knockout_switch_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! knockout-switch-case */ "./node_modules/knockout-switch-case/knockout-switch-case.js");
/* harmony import */ var knockout_switch_case__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(knockout_switch_case__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var knockout_sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! knockout-sortable */ "./node_modules/knockout-sortable/build/knockout-sortable.js");
/* harmony import */ var knockout_sortable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(knockout_sortable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var knockout_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! knockout.validation */ "./node_modules/knockout.validation/dist/knockout.validation.js");
/* harmony import */ var knockout_validation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(knockout_validation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ext_ko_editable_custom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ext/ko.editable.custom */ "./desktop/core/src/desktop/js/ext/ko.editable.custom.js");
/* harmony import */ var _ext_ko_selectize_custom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ext/ko.selectize.custom */ "./desktop/core/src/desktop/js/ext/ko.selectize.custom.js");
/* harmony import */ var _bindings_charts_mapchart_ko_mapChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bindings/charts/mapchart/ko.mapChart */ "./desktop/core/src/desktop/js/ko/bindings/charts/mapchart/ko.mapChart.js");
/* harmony import */ var _bindings_charts_ko_barChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bindings/charts/ko.barChart */ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.barChart.js");
/* harmony import */ var _bindings_charts_ko_leafletMapChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bindings/charts/ko.leafletMapChart */ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.leafletMapChart.js");
/* harmony import */ var _bindings_charts_ko_lineChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bindings/charts/ko.lineChart */ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.lineChart.js");
/* harmony import */ var _bindings_charts_ko_partitionChart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bindings/charts/ko.partitionChart */ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.partitionChart.js");
/* harmony import */ var _bindings_charts_ko_pieChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bindings/charts/ko.pieChart */ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.pieChart.js");
/* harmony import */ var _bindings_charts_ko_scatterChart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bindings/charts/ko.scatterChart */ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.scatterChart.js");
/* harmony import */ var _bindings_charts_ko_timelineChart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bindings/charts/ko.timelineChart */ "./desktop/core/src/desktop/js/ko/bindings/charts/ko.timelineChart.js");
/* harmony import */ var _bindings_ko_vue_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bindings/ko.vue.js */ "./desktop/core/src/desktop/js/ko/bindings/ko.vue.js");
/* harmony import */ var _bindings_ace_ko_aceEditor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bindings/ace/ko.aceEditor */ "./desktop/core/src/desktop/js/ko/bindings/ace/ko.aceEditor.js");
/* harmony import */ var _bindings_ace_ko_aceResizer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bindings/ace/ko.aceResizer */ "./desktop/core/src/desktop/js/ko/bindings/ace/ko.aceResizer.js");
/* harmony import */ var _bindings_ko_appAwareTemplateContextMenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bindings/ko.appAwareTemplateContextMenu */ "./desktop/core/src/desktop/js/ko/bindings/ko.appAwareTemplateContextMenu.js");
/* harmony import */ var _bindings_ko_assistFileDraggable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bindings/ko.assistFileDraggable */ "./desktop/core/src/desktop/js/ko/bindings/ko.assistFileDraggable.js");
/* harmony import */ var _bindings_ko_assistFileDroppable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bindings/ko.assistFileDroppable */ "./desktop/core/src/desktop/js/ko/bindings/ko.assistFileDroppable.js");
/* harmony import */ var _bindings_ko_assistVerticalResizer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bindings/ko.assistVerticalResizer */ "./desktop/core/src/desktop/js/ko/bindings/ko.assistVerticalResizer.js");
/* harmony import */ var _bindings_ko_attachViewModelToElementData__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bindings/ko.attachViewModelToElementData */ "./desktop/core/src/desktop/js/ko/bindings/ko.attachViewModelToElementData.js");
/* harmony import */ var _bindings_ko_augmentHtml__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bindings/ko.augmentHtml */ "./desktop/core/src/desktop/js/ko/bindings/ko.augmentHtml.js");
/* harmony import */ var _bindings_ko_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bindings/ko.autocomplete */ "./desktop/core/src/desktop/js/ko/bindings/ko.autocomplete.js");
/* harmony import */ var _bindings_ko_autogrowInput__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./bindings/ko.autogrowInput */ "./desktop/core/src/desktop/js/ko/bindings/ko.autogrowInput.js");
/* harmony import */ var _bindings_ko_blurHide__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./bindings/ko.blurHide */ "./desktop/core/src/desktop/js/ko/bindings/ko.blurHide.js");
/* harmony import */ var _bindings_ko_bytesize__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./bindings/ko.bytesize */ "./desktop/core/src/desktop/js/ko/bindings/ko.bytesize.js");
/* harmony import */ var _bindings_ko_chosen__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./bindings/ko.chosen */ "./desktop/core/src/desktop/js/ko/bindings/ko.chosen.js");
/* harmony import */ var _bindings_ko_clearable__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./bindings/ko.clearable */ "./desktop/core/src/desktop/js/ko/bindings/ko.clearable.js");
/* harmony import */ var _bindings_ko_clickForAceFocus__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./bindings/ko.clickForAceFocus */ "./desktop/core/src/desktop/js/ko/bindings/ko.clickForAceFocus.js");
/* harmony import */ var _bindings_ko_clickToCopy__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./bindings/ko.clickToCopy */ "./desktop/core/src/desktop/js/ko/bindings/ko.clickToCopy.js");
/* harmony import */ var _bindings_ko_clipboard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./bindings/ko.clipboard */ "./desktop/core/src/desktop/js/ko/bindings/ko.clipboard.js");
/* harmony import */ var _bindings_ko_codemirror__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./bindings/ko.codemirror */ "./desktop/core/src/desktop/js/ko/bindings/ko.codemirror.js");
/* harmony import */ var _bindings_ko_contextMenu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./bindings/ko.contextMenu */ "./desktop/core/src/desktop/js/ko/bindings/ko.contextMenu.js");
/* harmony import */ var _bindings_ko_contextSubMenu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./bindings/ko.contextSubMenu */ "./desktop/core/src/desktop/js/ko/bindings/ko.contextSubMenu.js");
/* harmony import */ var _bindings_ko_datalist__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./bindings/ko.datalist */ "./desktop/core/src/desktop/js/ko/bindings/ko.datalist.js");
/* harmony import */ var _bindings_ko_datepicker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./bindings/ko.datepicker */ "./desktop/core/src/desktop/js/ko/bindings/ko.datepicker.js");
/* harmony import */ var _bindings_ko_dateRangePicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./bindings/ko.dateRangePicker */ "./desktop/core/src/desktop/js/ko/bindings/ko.dateRangePicker.js");
/* harmony import */ var _bindings_ko_dblClick__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./bindings/ko.dblClick */ "./desktop/core/src/desktop/js/ko/bindings/ko.dblClick.js");
/* harmony import */ var _bindings_ko_delayedOverflow__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./bindings/ko.delayedOverflow */ "./desktop/core/src/desktop/js/ko/bindings/ko.delayedOverflow.js");
/* harmony import */ var _bindings_ko_dockable__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./bindings/ko.dockable */ "./desktop/core/src/desktop/js/ko/bindings/ko.dockable.js");
/* harmony import */ var _bindings_ko_documentChooser__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./bindings/ko.documentChooser */ "./desktop/core/src/desktop/js/ko/bindings/ko.documentChooser.js");
/* harmony import */ var _bindings_ko_documentContextPopover__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./bindings/ko.documentContextPopover */ "./desktop/core/src/desktop/js/ko/bindings/ko.documentContextPopover.js");
/* harmony import */ var _bindings_ko_draggableText__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./bindings/ko.draggableText */ "./desktop/core/src/desktop/js/ko/bindings/ko.draggableText.js");
/* harmony import */ var _bindings_ko_dropdown__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./bindings/ko.dropdown */ "./desktop/core/src/desktop/js/ko/bindings/ko.dropdown.js");
/* harmony import */ var _bindings_ko_dropzone__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./bindings/ko.dropzone */ "./desktop/core/src/desktop/js/ko/bindings/ko.dropzone.js");
/* harmony import */ var _bindings_ko_duration__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./bindings/ko.duration */ "./desktop/core/src/desktop/js/ko/bindings/ko.duration.js");
/* harmony import */ var _bindings_ko_ellipsis__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./bindings/ko.ellipsis */ "./desktop/core/src/desktop/js/ko/bindings/ko.ellipsis.js");
/* harmony import */ var _bindings_ko_fadeVisible__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./bindings/ko.fadeVisible */ "./desktop/core/src/desktop/js/ko/bindings/ko.fadeVisible.js");
/* harmony import */ var _bindings_ko_fetchMore__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./bindings/ko.fetchMore */ "./desktop/core/src/desktop/js/ko/bindings/ko.fetchMore.js");
/* harmony import */ var _bindings_ko_fileChooser__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./bindings/ko.fileChooser */ "./desktop/core/src/desktop/js/ko/bindings/ko.fileChooser.js");
/* harmony import */ var _bindings_ko_foreachVisible__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./bindings/ko.foreachVisible */ "./desktop/core/src/desktop/js/ko/bindings/ko.foreachVisible.js");
/* harmony import */ var _bindings_ko_fresherEditor__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./bindings/ko.fresherEditor */ "./desktop/core/src/desktop/js/ko/bindings/ko.fresherEditor.js");
/* harmony import */ var _bindings_ko_hdfsAutocomplete__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./bindings/ko.hdfsAutocomplete */ "./desktop/core/src/desktop/js/ko/bindings/ko.hdfsAutocomplete.js");
/* harmony import */ var _bindings_ko_hdfsTree__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./bindings/ko.hdfsTree */ "./desktop/core/src/desktop/js/ko/bindings/ko.hdfsTree.js");
/* harmony import */ var _bindings_ko_highlight__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./bindings/ko.highlight */ "./desktop/core/src/desktop/js/ko/bindings/ko.highlight.js");
/* harmony import */ var _bindings_ko_hiveChooser__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./bindings/ko.hiveChooser */ "./desktop/core/src/desktop/js/ko/bindings/ko.hiveChooser.js");
/* harmony import */ var _bindings_ko_html__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./bindings/ko.html */ "./desktop/core/src/desktop/js/ko/bindings/ko.html.js");
/* harmony import */ var _bindings_ko_hueach__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./bindings/ko.hueach */ "./desktop/core/src/desktop/js/ko/bindings/ko.hueach.js");
/* harmony import */ var _bindings_ko_hueCheckAll__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./bindings/ko.hueCheckAll */ "./desktop/core/src/desktop/js/ko/bindings/ko.hueCheckAll.js");
/* harmony import */ var _bindings_ko_hueCheckbox__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./bindings/ko.hueCheckbox */ "./desktop/core/src/desktop/js/ko/bindings/ko.hueCheckbox.js");
/* harmony import */ var _bindings_ko_hueChecked__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./bindings/ko.hueChecked */ "./desktop/core/src/desktop/js/ko/bindings/ko.hueChecked.js");
/* harmony import */ var _bindings_ko_hueLink__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./bindings/ko.hueLink */ "./desktop/core/src/desktop/js/ko/bindings/ko.hueLink.js");
/* harmony import */ var _bindings_ko_hueSpinner__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./bindings/ko.hueSpinner */ "./desktop/core/src/desktop/js/ko/bindings/ko.hueSpinner.js");
/* harmony import */ var _bindings_ko_impalaDagre__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./bindings/ko.impalaDagre */ "./desktop/core/src/desktop/js/ko/bindings/ko.impalaDagre.js");
/* harmony import */ var _bindings_ko_jHueRowSelector__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./bindings/ko.jHueRowSelector */ "./desktop/core/src/desktop/js/ko/bindings/ko.jHueRowSelector.js");
/* harmony import */ var _bindings_ko_logResizer__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./bindings/ko.logResizer */ "./desktop/core/src/desktop/js/ko/bindings/ko.logResizer.js");
/* harmony import */ var _bindings_ko_logScroller__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./bindings/ko.logScroller */ "./desktop/core/src/desktop/js/ko/bindings/ko.logScroller.js");
/* harmony import */ var _bindings_ko_medium__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./bindings/ko.medium */ "./desktop/core/src/desktop/js/ko/bindings/ko.medium.js");
/* harmony import */ var _bindings_ko_moment__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./bindings/ko.moment */ "./desktop/core/src/desktop/js/ko/bindings/ko.moment.js");
/* harmony import */ var _bindings_ko_momentFromNow__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./bindings/ko.momentFromNow */ "./desktop/core/src/desktop/js/ko/bindings/ko.momentFromNow.js");
/* harmony import */ var _bindings_ko_multiCheck__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./bindings/ko.multiCheck */ "./desktop/core/src/desktop/js/ko/bindings/ko.multiCheck.js");
/* harmony import */ var _bindings_ko_multiCheckForeachVisible__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./bindings/ko.multiCheckForeachVisible */ "./desktop/core/src/desktop/js/ko/bindings/ko.multiCheckForeachVisible.js");
/* harmony import */ var _bindings_ko_multiClick__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./bindings/ko.multiClick */ "./desktop/core/src/desktop/js/ko/bindings/ko.multiClick.js");
/* harmony import */ var _bindings_ko_multiLineEllipsis__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./bindings/ko.multiLineEllipsis */ "./desktop/core/src/desktop/js/ko/bindings/ko.multiLineEllipsis.js");
/* harmony import */ var _bindings_ko_numberFormat__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./bindings/ko.numberFormat */ "./desktop/core/src/desktop/js/ko/bindings/ko.numberFormat.js");
/* harmony import */ var _bindings_ko_numericTextInput__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./bindings/ko.numericTextInput */ "./desktop/core/src/desktop/js/ko/bindings/ko.numericTextInput.js");
/* harmony import */ var _bindings_ko_onClickOutside__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./bindings/ko.onClickOutside */ "./desktop/core/src/desktop/js/ko/bindings/ko.onClickOutside.js");
/* harmony import */ var _bindings_ko_oneClickSelect__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./bindings/ko.oneClickSelect */ "./desktop/core/src/desktop/js/ko/bindings/ko.oneClickSelect.js");
/* harmony import */ var _bindings_ko_parseArguments__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./bindings/ko.parseArguments */ "./desktop/core/src/desktop/js/ko/bindings/ko.parseArguments.js");
/* harmony import */ var _bindings_ko_publish__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./bindings/ko.publish */ "./desktop/core/src/desktop/js/ko/bindings/ko.publish.js");
/* harmony import */ var _bindings_ko_reactWrapper__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./bindings/ko.reactWrapper */ "./desktop/core/src/desktop/js/ko/bindings/ko.reactWrapper.js");
/* harmony import */ var _bindings_ko_readOnlyAce__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./bindings/ko.readOnlyAce */ "./desktop/core/src/desktop/js/ko/bindings/ko.readOnlyAce.js");
/* harmony import */ var _bindings_ko_resizable__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./bindings/ko.resizable */ "./desktop/core/src/desktop/js/ko/bindings/ko.resizable.js");
/* harmony import */ var _bindings_ko_select2__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./bindings/ko.select2 */ "./desktop/core/src/desktop/js/ko/bindings/ko.select2.js");
/* harmony import */ var _bindings_ko_simplesize__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./bindings/ko.simplesize */ "./desktop/core/src/desktop/js/ko/bindings/ko.simplesize.js");
/* harmony import */ var _bindings_ko_slider__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./bindings/ko.slider */ "./desktop/core/src/desktop/js/ko/bindings/ko.slider.js");
/* harmony import */ var _bindings_ko_slideVisible__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./bindings/ko.slideVisible */ "./desktop/core/src/desktop/js/ko/bindings/ko.slideVisible.js");
/* harmony import */ var _bindings_ko_solrChooser__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./bindings/ko.solrChooser */ "./desktop/core/src/desktop/js/ko/bindings/ko.solrChooser.js");
/* harmony import */ var _bindings_ko_spinEdit__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./bindings/ko.spinEdit */ "./desktop/core/src/desktop/js/ko/bindings/ko.spinEdit.js");
/* harmony import */ var _bindings_ko_splitDraggable__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./bindings/ko.splitDraggable */ "./desktop/core/src/desktop/js/ko/bindings/ko.splitDraggable.js");
/* harmony import */ var _bindings_ko_splitFlexDraggable__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./bindings/ko.splitFlexDraggable */ "./desktop/core/src/desktop/js/ko/bindings/ko.splitFlexDraggable.js");
/* harmony import */ var _bindings_ko_sqlContextPopover__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./bindings/ko.sqlContextPopover */ "./desktop/core/src/desktop/js/ko/bindings/ko.sqlContextPopover.js");
/* harmony import */ var _bindings_ko_stickVertical__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./bindings/ko.stickVertical */ "./desktop/core/src/desktop/js/ko/bindings/ko.stickVertical.js");
/* harmony import */ var _bindings_ko_storageContextPopover__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./bindings/ko.storageContextPopover */ "./desktop/core/src/desktop/js/ko/bindings/ko.storageContextPopover.js");
/* harmony import */ var _bindings_ko_stretchDown__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./bindings/ko.stretchDown */ "./desktop/core/src/desktop/js/ko/bindings/ko.stretchDown.js");
/* harmony import */ var _bindings_ko_tagEditor__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./bindings/ko.tagEditor */ "./desktop/core/src/desktop/js/ko/bindings/ko.tagEditor.js");
/* harmony import */ var _bindings_ko_tagsNotAllowed__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./bindings/ko.tagsNotAllowed */ "./desktop/core/src/desktop/js/ko/bindings/ko.tagsNotAllowed.js");
/* harmony import */ var _bindings_ko_templateContextMenu__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./bindings/ko.templateContextMenu */ "./desktop/core/src/desktop/js/ko/bindings/ko.templateContextMenu.js");
/* harmony import */ var _bindings_ko_templatePopover__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./bindings/ko.templatePopover */ "./desktop/core/src/desktop/js/ko/bindings/ko.templatePopover.js");
/* harmony import */ var _bindings_ko_textSqueezer__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./bindings/ko.textSqueezer */ "./desktop/core/src/desktop/js/ko/bindings/ko.textSqueezer.js");
/* harmony import */ var _bindings_ko_toggle__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./bindings/ko.toggle */ "./desktop/core/src/desktop/js/ko/bindings/ko.toggle.js");
/* harmony import */ var _bindings_ko_toggleOverflow__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./bindings/ko.toggleOverflow */ "./desktop/core/src/desktop/js/ko/bindings/ko.toggleOverflow.js");
/* harmony import */ var _bindings_ko_tooltip__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./bindings/ko.tooltip */ "./desktop/core/src/desktop/js/ko/bindings/ko.tooltip.js");
/* harmony import */ var _bindings_ko_truncatedText__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./bindings/ko.truncatedText */ "./desktop/core/src/desktop/js/ko/bindings/ko.truncatedText.js");
/* harmony import */ var _bindings_ko_typeahead__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./bindings/ko.typeahead */ "./desktop/core/src/desktop/js/ko/bindings/ko.typeahead.js");
/* harmony import */ var _bindings_ko_verticalSlide__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./bindings/ko.verticalSlide */ "./desktop/core/src/desktop/js/ko/bindings/ko.verticalSlide.js");
/* harmony import */ var _bindings_ko_visibleOnHover__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./bindings/ko.visibleOnHover */ "./desktop/core/src/desktop/js/ko/bindings/ko.visibleOnHover.js");
/* harmony import */ var _components_appSwitcher_ko_appSwitcher__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./components/appSwitcher/ko.appSwitcher */ "./desktop/core/src/desktop/js/ko/components/appSwitcher/ko.appSwitcher.js");
/* harmony import */ var _components_assist_ko_assistDashboardPanel__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./components/assist/ko.assistDashboardPanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.assistDashboardPanel.js");
/* harmony import */ var _components_assist_ko_assistDbPanel__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./components/assist/ko.assistDbPanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.assistDbPanel.js");
/* harmony import */ var _components_assist_ko_assistDocumentsPanel__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./components/assist/ko.assistDocumentsPanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.assistDocumentsPanel.js");
/* harmony import */ var _components_assist_ko_assistEditorContextPanel__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./components/assist/ko.assistEditorContextPanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.assistEditorContextPanel.js");
/* harmony import */ var _components_assist_ko_assistFunctionsPanel__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./components/assist/ko.assistFunctionsPanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.assistFunctionsPanel.js");
/* harmony import */ var _components_assist_ko_assistGitPanel__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./components/assist/ko.assistGitPanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.assistGitPanel.js");
/* harmony import */ var _components_assist_ko_assistHBasePanel__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./components/assist/ko.assistHBasePanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.assistHBasePanel.js");
/* harmony import */ var _components_assist_ko_assistLangRefPanel__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./components/assist/ko.assistLangRefPanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.assistLangRefPanel.js");
/* harmony import */ var _components_assist_ko_assistPanel__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./components/assist/ko.assistPanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.assistPanel.js");
/* harmony import */ var _components_assist_ko_assistSchedulePanel__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./components/assist/ko.assistSchedulePanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.assistSchedulePanel.js");
/* harmony import */ var _components_assist_ko_assistStoragePanel__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./components/assist/ko.assistStoragePanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.assistStoragePanel.js");
/* harmony import */ var _components_assist_ko_rightAssistPanel__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./components/assist/ko.rightAssistPanel */ "./desktop/core/src/desktop/js/ko/components/assist/ko.rightAssistPanel.js");
/* harmony import */ var _components_contextPopover_ko_contextPopover__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./components/contextPopover/ko.contextPopover */ "./desktop/core/src/desktop/js/ko/components/contextPopover/ko.contextPopover.js");
/* harmony import */ var _components_contextPopover_ko_quickQueryContext__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./components/contextPopover/ko.quickQueryContext */ "./desktop/core/src/desktop/js/ko/components/contextPopover/ko.quickQueryContext.js");
/* harmony import */ var _components_contextPopover_ko_popoverOnHover__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./components/contextPopover/ko.popoverOnHover */ "./desktop/core/src/desktop/js/ko/components/contextPopover/ko.popoverOnHover.js");
/* harmony import */ var _components_doc_ko_shareDocModal__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./components/doc/ko.shareDocModal */ "./desktop/core/src/desktop/js/ko/components/doc/ko.shareDocModal.js");
/* harmony import */ var _components_simpleAceEditor_ko_simpleAceEditor__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./components/simpleAceEditor/ko.simpleAceEditor */ "./desktop/core/src/desktop/js/ko/components/simpleAceEditor/ko.simpleAceEditor.js");
/* harmony import */ var _components_ko_catalogEntriesList__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./components/ko.catalogEntriesList */ "./desktop/core/src/desktop/js/ko/components/ko.catalogEntriesList.js");
/* harmony import */ var _components_ko_contextSelector__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./components/ko.contextSelector */ "./desktop/core/src/desktop/js/ko/components/ko.contextSelector.js");
/* harmony import */ var _components_ko_createDirectoryModal__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./components/ko.createDirectoryModal */ "./desktop/core/src/desktop/js/ko/components/ko.createDirectoryModal.js");
/* harmony import */ var _components_ko_deleteDocModal__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./components/ko.deleteDocModal */ "./desktop/core/src/desktop/js/ko/components/ko.deleteDocModal.js");
/* harmony import */ var _components_ko_dropDown__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./components/ko.dropDown */ "./desktop/core/src/desktop/js/ko/components/ko.dropDown.js");
/* harmony import */ var _components_ko_editorDroppableMenu__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./components/ko.editorDroppableMenu */ "./desktop/core/src/desktop/js/ko/components/ko.editorDroppableMenu.js");
/* harmony import */ var _components_ko_executionAnalysis__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./components/ko.executionAnalysis */ "./desktop/core/src/desktop/js/ko/components/ko.executionAnalysis.js");
/* harmony import */ var _components_ko_favoriteApp__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./components/ko.favoriteApp */ "./desktop/core/src/desktop/js/ko/components/ko.favoriteApp.js");
/* harmony import */ var _components_ko_fieldSamples__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./components/ko.fieldSamples */ "./desktop/core/src/desktop/js/ko/components/ko.fieldSamples.js");
/* harmony import */ var _components_ko_globalSearch__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./components/ko.globalSearch */ "./desktop/core/src/desktop/js/ko/components/ko.globalSearch.js");
/* harmony import */ var _components_ko_historyPanel__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./components/ko.historyPanel */ "./desktop/core/src/desktop/js/ko/components/ko.historyPanel.js");
/* harmony import */ var _components_ko_importDocumentsModal__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./components/ko.importDocumentsModal */ "./desktop/core/src/desktop/js/ko/components/ko.importDocumentsModal.js");
/* harmony import */ var _components_ko_inlineAutocomplete__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./components/ko.inlineAutocomplete */ "./desktop/core/src/desktop/js/ko/components/ko.inlineAutocomplete.js");
/* harmony import */ var _components_ko_jobBrowserLinks__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./components/ko.jobBrowserLinks */ "./desktop/core/src/desktop/js/ko/components/ko.jobBrowserLinks.js");
/* harmony import */ var _components_ko_navProperties__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./components/ko.navProperties */ "./desktop/core/src/desktop/js/ko/components/ko.navProperties.js");
/* harmony import */ var _components_ko_navTags__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./components/ko.navTags */ "./desktop/core/src/desktop/js/ko/components/ko.navTags.js");
/* harmony import */ var _components_ko_pollingCatalogEntriesList__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./components/ko.pollingCatalogEntriesList */ "./desktop/core/src/desktop/js/ko/components/ko.pollingCatalogEntriesList.js");
/* harmony import */ var _components_ko_quickQueryAction__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./components/ko.quickQueryAction */ "./desktop/core/src/desktop/js/ko/components/ko.quickQueryAction.js");
/* harmony import */ var _components_ko_sentryPrivileges__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./components/ko.sentryPrivileges */ "./desktop/core/src/desktop/js/ko/components/ko.sentryPrivileges.js");
/* harmony import */ var _components_ko_sessionAuthModal__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./components/ko.sessionAuthModal */ "./desktop/core/src/desktop/js/ko/components/ko.sessionAuthModal.js");
/* harmony import */ var _components_ko_sessionPanel__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./components/ko.sessionPanel */ "./desktop/core/src/desktop/js/ko/components/ko.sessionPanel.js");
/* harmony import */ var _components_ko_shareGistModal__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./components/ko.shareGistModal */ "./desktop/core/src/desktop/js/ko/components/ko.shareGistModal.js");
/* harmony import */ var _components_ko_sqlColumnsTable__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./components/ko.sqlColumnsTable */ "./desktop/core/src/desktop/js/ko/components/ko.sqlColumnsTable.js");
/* harmony import */ var _apps_about_components_ko_hueConfigTree__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ../apps/about/components/ko.hueConfigTree */ "./desktop/core/src/desktop/js/apps/about/components/ko.hueConfigTree.js");
/* harmony import */ var _apps_about_components_ko_connectorsConfig__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ../apps/about/components/ko.connectorsConfig */ "./desktop/core/src/desktop/js/apps/about/components/ko.connectorsConfig.js");
/* harmony import */ var _extenders_ko_maxLength__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./extenders/ko.maxLength */ "./desktop/core/src/desktop/js/ko/extenders/ko.maxLength.js");
/* harmony import */ var _extenders_ko_numeric__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./extenders/ko.numeric */ "./desktop/core/src/desktop/js/ko/extenders/ko.numeric.js");
/* harmony import */ var _extenders_ko_toJson__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./extenders/ko.toJson */ "./desktop/core/src/desktop/js/ko/extenders/ko.toJson.js");
/* harmony import */ var _observables_ko_observableArrayDefault__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./observables/ko.observableArrayDefault */ "./desktop/core/src/desktop/js/ko/observables/ko.observableArrayDefault.js");
/* harmony import */ var _observables_ko_observableDefault__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./observables/ko.observableDefault */ "./desktop/core/src/desktop/js/ko/observables/ko.observableDefault.js");
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

























































































































































// TODO: Move to about app when it has it's own webpack entry







window.ko = knockout__WEBPACK_IMPORTED_MODULE_0__;
window.ko.mapping = (knockout_mapping__WEBPACK_IMPORTED_MODULE_2___default());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knockout__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/ko.init.js":
/*!***************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/ko.init.js ***!
  \***************************************************/
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


var proxiedKoRegister = knockout__WEBPACK_IMPORTED_MODULE_0__.components.register;
var registeredComponents = [];
knockout__WEBPACK_IMPORTED_MODULE_0__.components.register = function () {
  // This guarantees a ko component is only registered once
  // Some currently get registered twice when switching between notebook and editor
  if (registeredComponents.indexOf(arguments[0]) === -1) {
    registeredComponents.push(arguments[0]);
    return proxiedKoRegister.apply(this, arguments);
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/observables/ko.observableArrayDefault.js":
/*!*********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/observables/ko.observableArrayDefault.js ***!
  \*********************************************************************************/
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


knockout__WEBPACK_IMPORTED_MODULE_0__.observableArrayDefault = function () {
  var prop = arguments[0],
    defValue = arguments[1] || null;
  return knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray(typeof prop != 'undefined' && prop != null ? prop : defValue);
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ko/observables/ko.observableDefault.js":
/*!****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ko/observables/ko.observableDefault.js ***!
  \****************************************************************************/
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


knockout__WEBPACK_IMPORTED_MODULE_0__.observableDefault = function () {
  var prop = arguments[0],
    defValue = arguments[1] || null;
  return knockout__WEBPACK_IMPORTED_MODULE_0__.observable(typeof prop != 'undefined' && prop != null ? prop : defValue);
};

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-875ef077-bundle-a2a4f8506cb55bb7.js.map