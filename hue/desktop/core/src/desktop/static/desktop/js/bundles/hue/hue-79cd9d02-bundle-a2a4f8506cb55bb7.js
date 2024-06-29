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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-79cd9d02"],{

/***/ "./desktop/core/src/desktop/js/ext/ko.editable.custom.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ko.editable.custom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

// based on the original https://github.com/brianchance/knockout-x-editable



knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.editable = {
  init: function init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element),
      value = valueAccessor(),
      allBindings = allBindingsAccessor(),
      editableOptions = allBindings.editableOptions || {};
    editableOptions.value = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(value);
    if (!editableOptions.name) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(bindingContext.$data, function (k, v) {
        if (v == value) {
          editableOptions.name = k;
          return false;
        }
      });
    }

    //wrap calls to knockout.validation
    if (!editableOptions.validate && value.isValid) {
      editableOptions.validate = function (testValue) {
        //have to set to new value, then call validate, then reset to original value
        //not pretty, but works
        var initalValue = value();
        value(testValue);
        var res = value.isValid() ? null : knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(value.error);
        value(initalValue);
        return res;
      };
    }
    if ((editableOptions.type === 'select' || editableOptions.type === 'checklist' || editableOptions.type === 'typeahead') && !editableOptions.source && editableOptions.options) {
      //taken directly from ko.bindingHandlers['options']
      var applyToObject = function applyToObject(object, predicate, defaultValue) {
        var predicateType = _typeof(predicate);
        if (predicateType === "function")
          // Given a function; run it against the data value
          return predicate(object);else if (predicateType === "string")
          // Given a string; treat it as a property name on the data value
          return object[predicate];else
          // Given no optionsText arg; use the data value itself
          return defaultValue;
      };
      if (editableOptions.optionsCaption) editableOptions.prepend = editableOptions.optionsCaption;
      editableOptions.source = function () {
        return knockout__WEBPACK_IMPORTED_MODULE_1__.utils.arrayMap(editableOptions.options(), function (item) {
          var optionValue = applyToObject(item, editableOptions.optionsValue, item);
          var optionText = applyToObject(item, editableOptions.optionsText, optionText);
          return {
            value: knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(optionValue),
            text: knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(optionText)
          };
        });
      };
    }
    if (editableOptions.visible && knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(editableOptions.visible)) {
      editableOptions.toggle = 'manual';
    }
    var onActionRender = undefined;
    if (editableOptions.inlineEditAction) {
      onActionRender = function onActionRender($container, overflowing) {
        if (!overflowing) {
          var $editAction = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a href="javascript:void(0);"><i class="fa fa-fw fa-pencil"></i></a>');
          if (editableOptions.inlineEditAction.editClass) {
            $editAction.addClass(editableOptions.inlineEditAction.editClass);
          }
          $editAction.on('click', function () {
            $editable.editable('toggle');
          });
          $editAction.appendTo($container);
        }
      };
    }
    var addPlaceHolder = function addPlaceHolder($container) {
      if (editableOptions.placeholder) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('editable-inline-empty').text(editableOptions.placeholder).click(function () {
          $editable.editable('toggle');
        }).appendTo($container);
      }
    };
    var multiLineEllipsisHandler;
    if (editableOptions.multiLineEllipsis) {
      editableOptions.display = function (value) {
        if (!value) {
          if (multiLineEllipsisHandler) {
            multiLineEllipsisHandler.pause();
          }
          var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
          $container.empty();
          addPlaceHolder($container);
          if (onActionRender) {
            onActionRender($container);
          }
          return;
        }
        if (!multiLineEllipsisHandler) {
          multiLineEllipsisHandler = new MultiLineEllipsisHandler({
            element: element,
            text: value,
            overflowHeight: editableOptions.multiLineEllipsis.overflowHeight,
            expandable: editableOptions.multiLineEllipsis,
            expandActionClass: editableOptions.multiLineEllipsis.expandActionClass,
            linkify: true,
            onActionRender: onActionRender
          });
          knockout__WEBPACK_IMPORTED_MODULE_1__.utils.domNodeDisposal.addDisposeCallback(element, function () {
            multiLineEllipsisHandler.dispose();
          });
        } else {
          multiLineEllipsisHandler.setText(value);
          multiLineEllipsisHandler.resume();
        }
      };
    } else if (onActionRender) {
      editableOptions.display = function (value) {
        var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        if (!value) {
          addPlaceHolder($container);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').html(value).appendTo($container);
        }
        onActionRender($container);
      };
      onActionRender = function onActionRender($container) {
        var $editAction = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a href="javascript:void(0);"><i class="fa fa-fw fa-pencil"></i></a>');
        if (editableOptions.inlineEditAction.editClass) {
          $editAction.addClass(editableOptions.inlineEditAction.editClass);
        }
        $editAction.appendTo($container);
      };
    }

    //create editable
    var $editable = $element.editable(editableOptions);
    if (editableOptions.multiLineEllipsis) {
      $editable.off('.multiLine');
      $editable.on('hidden.multiLine', function () {
        if (multiLineEllipsisHandler && knockout__WEBPACK_IMPORTED_MODULE_1__.unwrap(value)) {
          multiLineEllipsisHandler.resume();
        }
      });
      $editable.on('shown.multiLine', function () {
        if (multiLineEllipsisHandler) {
          multiLineEllipsisHandler.pause();
        }
      });
    }

    //update observable on save
    if (knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(value)) {
      $editable.on('save.ko', function (e, params) {
        var newValue = params.newValue || '';
        newValue = newValue.replace(/<(?:.|\n)*?>/gm, '');
        if (editableOptions.type !== 'textarea') {
          newValue = newValue.replace(/\r?\n|\r/g, ' ');
        }
        value(newValue);
      });
    }
    if (editableOptions.toggleElement) {
      var $clickable = $element.parent().find(editableOptions.toggleElement);
      if ($element.parents('.show-inactive-on-hover').length > 0) {
        $clickable = $element.parents('.show-inactive-on-hover').find(editableOptions.toggleElement);
      }
      if ($clickable !== null) {
        $clickable.on('click', function (e) {
          e.stopPropagation();
          e.preventDefault();
          $editable.editable('toggle');
        });
      }
    }
    if (editableOptions.save) {
      $editable.on('save', editableOptions.save.bind(viewModel));
    }

    //setup observable to fire only when editable changes, not when options change
    //http://www.knockmeout.net/2012/06/knockoutjs-performance-gotcha-3-all-bindings.html
    knockout__WEBPACK_IMPORTED_MODULE_1__.computed({
      read: function read() {
        var _allBindings = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(allBindingsAccessor());
        var _options = _allBindings.editableOptions || {};
        if (_options.enabled != null && _options.enabled) {
          $editable.editable('enable');
        } else {
          $editable.editable('disable');
        }
        var val = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(valueAccessor());
        if (val === null) val = '';
        $editable.editable('setValue', val, true);
      },
      owner: this,
      disposeWhenNodeIsRemoved: element
    });
    if (editableOptions.visible && knockout__WEBPACK_IMPORTED_MODULE_1__.isObservable(editableOptions.visible)) {
      knockout__WEBPACK_IMPORTED_MODULE_1__.computed({
        read: function read() {
          var val = knockout__WEBPACK_IMPORTED_MODULE_1__.utils.unwrapObservable(editableOptions.visible());
          if (val) $editable.editable('show');
        },
        owner: this,
        disposeWhenNodeIsRemoved: element
      });
      $editable.on('hidden.ko', function (e, params) {
        editableOptions.visible(false);
      });
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ko.selectize.custom.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ko.selectize.custom.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
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

// Based on https://gist.githubusercontent.com/xtranophilist/8001624/raw/ko_selectize.js




var inject_binding = function inject_binding(allBindings, key, value) {
  //https://github.com/knockout/knockout/pull/932#issuecomment-26547528
  return {
    has: function has(bindingKey) {
      return bindingKey == key || allBindings.has(bindingKey);
    },
    get: function get(bindingKey) {
      var binding = allBindings.get(bindingKey);
      if (bindingKey == key) {
        binding = binding ? [].concat(binding, value) : value;
      }
      return binding;
    }
  };
};
knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.browserAwareSelectize = {
  init: function init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.selectize.init.apply(null, arguments);
  },
  update: function update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.selectize.update.apply(null, arguments);
  }
};
knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.selectize = {
  init: function init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    if (typeof allBindingsAccessor.get('optionsCaption') == 'undefined') allBindingsAccessor = inject_binding(allBindingsAccessor, 'optionsCaption', (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["default"])('Choose...'));
    knockout__WEBPACK_IMPORTED_MODULE_1__.bindingHandlers.options.update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    var options = {};
    if (allBindingsAccessor.get('optionsValue')) {
      options.valueField = allBindingsAccessor.get('optionsValue');
    }
    if (allBindingsAccessor.get('optionsText')) {
      options.labelField = allBindingsAccessor.get('optionsText'), options.searchField = allBindingsAccessor.get('optionsText');
    }
    if (allBindingsAccessor.has('selectizeOptions')) {
      var passed_options = allBindingsAccessor.get('selectizeOptions');
      for (var attr_name in passed_options) {
        if (attr_name === 'maxLength') {
          options.createFilter = function (input) {
            return input.length <= passed_options[attr_name];
          };
        } else if (attr_name === 'clearable' && passed_options[attr_name]) {
          options.plugins = ['clear_button'];
        } else {
          options[attr_name] = passed_options[attr_name];
        }
      }
    }
    if (!options.hasOwnProperty('dropdownParent')) {
      options.dropdownParent = 'body';
    }
    var $select = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).selectize(options)[0].selectize;
    if (typeof allBindingsAccessor.get('value') == 'function') {
      $select.addItem(allBindingsAccessor.get('value')());
      allBindingsAccessor.get('value').subscribe(function (new_val) {
        $select.addItem(new_val);
      });
    }
    if (allBindingsAccessor.get('innerSubscriber')) {
      valueAccessor()().forEach(function (item) {
        var previousValue;
        item[allBindingsAccessor.get('innerSubscriber')].subscribe(function (oldValue) {
          previousValue = oldValue;
        }, null, 'beforeChange');
        item[allBindingsAccessor.get('innerSubscriber')].subscribe(function (newValue) {
          var newOption = {};
          newOption[options.valueField] = newValue;
          newOption[options.labelField] = newValue;
          $select.updateOption(previousValue, newOption);
          $select.refreshOptions(false);
        });
      });
    }
    if (typeof allBindingsAccessor.get('selectedOptions') == 'function') {
      allBindingsAccessor.get('selectedOptions').subscribe(function (new_val) {
        // Removing items which are not in new value
        var values = $select.getValue();
        var items_to_remove = [];
        for (var k in values) {
          if (new_val.indexOf(values[k]) == -1) {
            items_to_remove.push(values[k]);
          }
        }
        for (var k in items_to_remove) {
          $select.removeItem(items_to_remove[k]);
        }
        for (var k in new_val) {
          $select.addItem(new_val[k]);
        }
      });
      var selected = allBindingsAccessor.get('selectedOptions')();
      for (var k in selected) {
        $select.addItem(selected[k]);
      }
    }
    if (typeof init_selectize == 'function') {
      init_selectize($select);
    }
    if (typeof valueAccessor().subscribe == 'function') {
      valueAccessor().subscribe(function (changes) {
        // To avoid having duplicate keys, all delete operations will go first
        var addedItems = new Array();
        changes.forEach(function (change) {
          switch (change.status) {
            case 'added':
              addedItems.push(change.value);
              break;
            case 'deleted':
              var itemId = change.value[options.valueField];
              if (typeof itemId === 'function') {
                itemId = itemId();
              }
              if (itemId != null) {
                $select.removeOption(itemId);
              }
          }
        });
        addedItems.forEach(function (item) {
          var optionValue = item[options.valueField];
          if (typeof optionValue === 'function') {
            optionValue = optionValue();
          }
          var optionLabel = item[options.labelField];
          if (typeof optionLabel === 'function') {
            optionLabel = optionLabel();
          }
          var newOption = {};
          newOption[options.valueField] = optionValue;
          newOption[options.labelField] = optionLabel;
          $select.addOption(newOption);
          if (allBindingsAccessor.get('innerSubscriber')) {
            var previousValue;
            item[allBindingsAccessor.get('innerSubscriber')].subscribe(function (oldValue) {
              previousValue = oldValue;
            }, null, 'beforeChange');
            item[allBindingsAccessor.get('innerSubscriber')].subscribe(function (newValue) {
              var newOption = {};
              newOption[options.valueField] = newValue;
              newOption[options.labelField] = newValue;
              $select.updateOption(previousValue, newOption);
              $select.refreshOptions(false);
            });
          }
        });
      }, null, "arrayChange");
    }
  },
  update: function update(element, valueAccessor, allBindingsAccessor) {
    var optionsValue = allBindingsAccessor.get('optionsValue') || 'value';
    var value_accessor = valueAccessor();
    if (allBindingsAccessor.has('selectedObjects')) {
      allBindingsAccessor.get('selectedObjects')(jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(value_accessor(), function (i) {
        var id = i[optionsValue];
        if (typeof i[optionsValue] == 'function') {
          id = i[optionsValue]();
        }
        return allBindingsAccessor.get('selectedOptions')().indexOf(id) > -1;
      }));
    }
    if (allBindingsAccessor.has('object')) {
      allBindingsAccessor.get('object')(jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(value_accessor(), function (i) {
        var id = i[optionsValue];
        if (typeof i[optionsValue] == 'function') {
          id = i[optionsValue]();
        }
        return id == allBindingsAccessor.get('value')();
      })[0]);
    }
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/leaflet/leaflet.heat.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/leaflet/leaflet.heat.js ***!
  \*****************************************************************/
/***/ (() => {

/*
 (c) 2014, Vladimir Agafonkin
 simpleheat, a tiny JavaScript library for drawing heatmaps with Canvas
 https://github.com/mourner/simpleheat
*/
!function () {
  "use strict";

  function t(i) {
    return this instanceof t ? (this._canvas = i = "string" == typeof i ? document.getElementById(i) : i, this._ctx = i.getContext("2d"), this._width = i.width, this._height = i.height, this._max = 1, void this.clear()) : new t(i);
  }
  t.prototype = {
    defaultRadius: 25,
    defaultGradient: {
      .4: "blue",
      .6: "cyan",
      .7: "lime",
      .8: "yellow",
      1: "red"
    },
    data: function data(t, i) {
      return this._data = t, this;
    },
    max: function max(t) {
      return this._max = t, this;
    },
    add: function add(t) {
      return this._data.push(t), this;
    },
    clear: function clear() {
      return this._data = [], this;
    },
    radius: function radius(t, i) {
      i = i || 15;
      var a = this._circle = document.createElement("canvas"),
        s = a.getContext("2d"),
        e = this._r = t + i;
      return a.width = a.height = 2 * e, s.shadowOffsetX = s.shadowOffsetY = 200, s.shadowBlur = i, s.shadowColor = "black", s.beginPath(), s.arc(e - 200, e - 200, t, 0, 2 * Math.PI, !0), s.closePath(), s.fill(), this;
    },
    gradient: function gradient(t) {
      var i = document.createElement("canvas"),
        a = i.getContext("2d"),
        s = a.createLinearGradient(0, 0, 0, 256);
      i.width = 1, i.height = 256;
      for (var e in t) s.addColorStop(e, t[e]);
      return a.fillStyle = s, a.fillRect(0, 0, 1, 256), this._grad = a.getImageData(0, 0, 1, 256).data, this;
    },
    draw: function draw(t) {
      this._circle || this.radius(this.defaultRadius), this._grad || this.gradient(this.defaultGradient);
      var i = this._ctx;
      i.clearRect(0, 0, this._width, this._height);
      for (var a, s = 0, e = this._data.length; e > s; s++) a = this._data[s], i.globalAlpha = Math.max(a[2] / this._max, t || .05), i.drawImage(this._circle, a[0] - this._r, a[1] - this._r);
      var n = i.getImageData(0, 0, this._width, this._height);
      return this._colorize(n.data, this._grad), i.putImageData(n, 0, 0), this;
    },
    _colorize: function _colorize(t, i) {
      for (var a, s = 3, e = t.length; e > s; s += 4) a = 4 * t[s], a && (t[s - 3] = i[a], t[s - 2] = i[a + 1], t[s - 1] = i[a + 2]);
    }
  }, window.simpleheat = t;
}(),
/*
(c) 2014, Vladimir Agafonkin
Leaflet.heat, a tiny and fast heatmap plugin for Leaflet.
https://github.com/Leaflet/Leaflet.heat
*/
L.HeatLayer = (L.Layer ? L.Layer : L.Class).extend({
  initialize: function initialize(t, i) {
    this._latlngs = t, L.setOptions(this, i);
  },
  setLatLngs: function setLatLngs(t) {
    return this._latlngs = t, this.redraw();
  },
  addLatLng: function addLatLng(t) {
    return this._latlngs.push(t), this.redraw();
  },
  setOptions: function setOptions(t) {
    return L.setOptions(this, t), this._heat && this._updateOptions(), this.redraw();
  },
  redraw: function redraw() {
    return !this._heat || this._frame || this._map._animating || (this._frame = L.Util.requestAnimFrame(this._redraw, this)), this;
  },
  onAdd: function onAdd(t) {
    this._map = t, this._canvas || this._initCanvas(), t._panes.overlayPane.appendChild(this._canvas), t.on("moveend", this._reset, this), t.options.zoomAnimation && L.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset();
  },
  onRemove: function onRemove(t) {
    t.getPanes().overlayPane.removeChild(this._canvas), t.off("moveend", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this);
  },
  addTo: function addTo(t) {
    return t.addLayer(this), this;
  },
  _initCanvas: function _initCanvas() {
    var t = this._canvas = L.DomUtil.create("canvas", "leaflet-heatmap-layer leaflet-layer"),
      i = L.DomUtil.testProp(["transformOrigin", "WebkitTransformOrigin", "msTransformOrigin"]);
    t.style[i] = "50% 50%";
    var a = this._map.getSize();
    t.width = a.x, t.height = a.y;
    var s = this._map.options.zoomAnimation && L.Browser.any3d;
    L.DomUtil.addClass(t, "leaflet-zoom-" + (s ? "animated" : "hide")), this._heat = simpleheat(t), this._updateOptions();
  },
  _updateOptions: function _updateOptions() {
    this._heat.radius(this.options.radius || this._heat.defaultRadius, this.options.blur), this.options.gradient && this._heat.gradient(this.options.gradient), this.options.max && this._heat.max(this.options.max);
  },
  _reset: function _reset() {
    var t = this._map.containerPointToLayerPoint([0, 0]);
    L.DomUtil.setPosition(this._canvas, t);
    var i = this._map.getSize();
    this._heat._width !== i.x && (this._canvas.width = this._heat._width = i.x), this._heat._height !== i.y && (this._canvas.height = this._heat._height = i.y), this._redraw();
  },
  _redraw: function _redraw() {
    var t,
      i,
      a,
      s,
      e,
      n,
      h,
      o,
      r,
      d = [],
      _ = this._heat._r,
      l = this._map.getSize(),
      m = new L.Bounds(L.point([-_, -_]), l.add([_, _])),
      c = void 0 === this.options.max ? 1 : this.options.max,
      u = void 0 === this.options.maxZoom ? this._map.getMaxZoom() : this.options.maxZoom,
      f = 1 / Math.pow(2, Math.max(0, Math.min(u - this._map.getZoom(), 12))),
      g = _ / 2,
      p = [],
      v = this._map._getMapPanePos(),
      w = v.x % g,
      y = v.y % g;
    for (t = 0, i = this._latlngs.length; i > t; t++) if (a = this._map.latLngToContainerPoint(this._latlngs[t]), m.contains(a)) {
      e = Math.floor((a.x - w) / g) + 2, n = Math.floor((a.y - y) / g) + 2;
      var x = void 0 !== this._latlngs[t].alt ? this._latlngs[t].alt : void 0 !== this._latlngs[t][2] ? +this._latlngs[t][2] : 1;
      r = x * f, p[n] = p[n] || [], s = p[n][e], s ? (s[0] = (s[0] * s[2] + a.x * r) / (s[2] + r), s[1] = (s[1] * s[2] + a.y * r) / (s[2] + r), s[2] += r) : p[n][e] = [a.x, a.y, r];
    }
    for (t = 0, i = p.length; i > t; t++) if (p[t]) for (h = 0, o = p[t].length; o > h; h++) s = p[t][h], s && d.push([Math.round(s[0]), Math.round(s[1]), Math.min(s[2], c)]);
    this._heat.data(d).draw(this.options.minOpacity), this._frame = null;
  },
  _animateZoom: function _animateZoom(t) {
    var i = this._map.getZoomScale(t.zoom),
      a = this._map._getCenterOffset(t.center)._multiplyBy(-i).subtract(this._map._getMapPanePos());
    L.DomUtil.setTransform ? L.DomUtil.setTransform(this._canvas, a, i) : this._canvas.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(a) + " scale(" + i + ")";
  }
}), L.heatLayer = function (t, i) {
  return new L.HeatLayer(t, i);
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/leaflet/leaflet.js":
/*!************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/leaflet/leaflet.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/

/*

    This file has Hue specific changes for L.Icon.Default

*/

(function (window, document, undefined) {
  var oldL = window.L,
    L = {};
  L.version = '0.7.7';

  // define Leaflet for Node module pattern loaders, including Browserify
  if (( false ? 0 : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
    module.exports = L;

    // define Leaflet as an AMD module
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (L),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // define Leaflet as a global L variable, saving the original L to restore later if needed

  L.noConflict = function () {
    window.L = oldL;
    return this;
  };
  window.L = L;

  /*
  * L.Util contains various utility functions used throughout Leaflet code.
  */

  L.Util = {
    extend: function extend(dest) {
      // (Object[, Object, ...]) ->
      var sources = Array.prototype.slice.call(arguments, 1),
        i,
        j,
        len,
        src;
      for (j = 0, len = sources.length; j < len; j++) {
        src = sources[j] || {};
        for (i in src) {
          if (src.hasOwnProperty(i)) {
            dest[i] = src[i];
          }
        }
      }
      return dest;
    },
    bind: function bind(fn, obj) {
      // (Function, Object) -> Function
      var args = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
      return function () {
        return fn.apply(obj, args || arguments);
      };
    },
    stamp: function () {
      var lastId = 0,
        key = '_leaflet_id';
      return function (obj) {
        obj[key] = obj[key] || ++lastId;
        return obj[key];
      };
    }(),
    invokeEach: function invokeEach(obj, method, context) {
      var i, args;
      if (_typeof(obj) === 'object') {
        args = Array.prototype.slice.call(arguments, 3);
        for (i in obj) {
          method.apply(context, [i, obj[i]].concat(args));
        }
        return true;
      }
      return false;
    },
    limitExecByInterval: function limitExecByInterval(fn, time, context) {
      var lock, execOnUnlock;
      return function wrapperFn() {
        var args = arguments;
        if (lock) {
          execOnUnlock = true;
          return;
        }
        lock = true;
        setTimeout(function () {
          lock = false;
          if (execOnUnlock) {
            wrapperFn.apply(context, args);
            execOnUnlock = false;
          }
        }, time);
        fn.apply(context, args);
      };
    },
    falseFn: function falseFn() {
      return false;
    },
    formatNum: function formatNum(num, digits) {
      var pow = Math.pow(10, digits || 5);
      return Math.round(num * pow) / pow;
    },
    trim: function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
    },
    splitWords: function splitWords(str) {
      return L.Util.trim(str).split(/\s+/);
    },
    setOptions: function setOptions(obj, options) {
      obj.options = L.extend({}, obj.options, options);
      return obj.options;
    },
    getParamString: function getParamString(obj, existingUrl, uppercase) {
      var params = [];
      for (var i in obj) {
        params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
      }
      return (!existingUrl || existingUrl.indexOf('?') === -1 ? '?' : '&') + params.join('&');
    },
    template: function template(str, data) {
      return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
        var value = data[key];
        if (value === undefined) {
          throw new Error('No value provided for variable ' + str);
        } else if (typeof value === 'function') {
          value = value(data);
        }
        return value;
      });
    },
    isArray: Array.isArray || function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    },
    emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
  };
  (function () {
    // inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

    function getPrefixed(name) {
      var i,
        fn,
        prefixes = ['webkit', 'moz', 'o', 'ms'];
      for (i = 0; i < prefixes.length && !fn; i++) {
        fn = window[prefixes[i] + name];
      }
      return fn;
    }
    var lastTime = 0;
    function timeoutDefer(fn) {
      var time = +new Date(),
        timeToCall = Math.max(0, 16 - (time - lastTime));
      lastTime = time + timeToCall;
      return window.setTimeout(fn, timeToCall);
    }
    var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
    var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') || getPrefixed('CancelRequestAnimationFrame') || function (id) {
      window.clearTimeout(id);
    };
    L.Util.requestAnimFrame = function (fn, context, immediate, element) {
      fn = L.bind(fn, context);
      if (immediate && requestFn === timeoutDefer) {
        fn();
      } else {
        return requestFn.call(window, fn, element);
      }
    };
    L.Util.cancelAnimFrame = function (id) {
      if (id) {
        cancelFn.call(window, id);
      }
    };
  })();

  // shortcuts for most used utility functions
  L.extend = L.Util.extend;
  L.bind = L.Util.bind;
  L.stamp = L.Util.stamp;
  L.setOptions = L.Util.setOptions;

  /*
  * L.Class powers the OOP facilities of the library.
  * Thanks to John Resig and Dean Edwards for inspiration!
  */

  L.Class = function () {};
  L.Class.extend = function (props) {
    // extended class with the new prototype
    var NewClass = function NewClass() {
      // call the constructor
      if (this.initialize) {
        this.initialize.apply(this, arguments);
      }

      // call all constructor hooks
      if (this._initHooks) {
        this.callInitHooks();
      }
    };

    // instantiate class without calling constructor
    var F = function F() {};
    F.prototype = this.prototype;
    var proto = new F();
    proto.constructor = NewClass;
    NewClass.prototype = proto;

    //inherit parent's statics
    for (var i in this) {
      if (this.hasOwnProperty(i) && i !== 'prototype') {
        NewClass[i] = this[i];
      }
    }

    // mix static properties into the class
    if (props.statics) {
      L.extend(NewClass, props.statics);
      delete props.statics;
    }

    // mix includes into the prototype
    if (props.includes) {
      L.Util.extend.apply(null, [proto].concat(props.includes));
      delete props.includes;
    }

    // merge options
    if (props.options && proto.options) {
      props.options = L.extend({}, proto.options, props.options);
    }

    // mix given properties into the prototype
    L.extend(proto, props);
    proto._initHooks = [];
    var parent = this;
    // jshint camelcase: false
    NewClass.__super__ = parent.prototype;

    // add method for calling all hooks
    proto.callInitHooks = function () {
      if (this._initHooksCalled) {
        return;
      }
      if (parent.prototype.callInitHooks) {
        parent.prototype.callInitHooks.call(this);
      }
      this._initHooksCalled = true;
      for (var i = 0, len = proto._initHooks.length; i < len; i++) {
        proto._initHooks[i].call(this);
      }
    };
    return NewClass;
  };

  // method for adding properties to prototype
  L.Class.include = function (props) {
    L.extend(this.prototype, props);
  };

  // merge new default options to the Class
  L.Class.mergeOptions = function (options) {
    L.extend(this.prototype.options, options);
  };

  // add a constructor hook
  L.Class.addInitHook = function (fn) {
    // (Function) || (String, args...)
    var args = Array.prototype.slice.call(arguments, 1);
    var init = typeof fn === 'function' ? fn : function () {
      this[fn].apply(this, args);
    };
    this.prototype._initHooks = this.prototype._initHooks || [];
    this.prototype._initHooks.push(init);
  };

  /*
  * L.Mixin.Events is used to add custom events functionality to Leaflet classes.
  */

  var eventsKey = '_leaflet_events';
  L.Mixin = {};
  L.Mixin.Events = {
    addEventListener: function addEventListener(types, fn, context) {
      // (String, Function[, Object]) or (Object[, Object])

      // types can be a map of types/handlers
      if (L.Util.invokeEach(types, this.addEventListener, this, fn, context)) {
        return this;
      }
      var events = this[eventsKey] = this[eventsKey] || {},
        contextId = context && context !== this && L.stamp(context),
        i,
        len,
        event,
        type,
        indexKey,
        indexLenKey,
        typeIndex;

      // types can be a string of space-separated words
      types = L.Util.splitWords(types);
      for (i = 0, len = types.length; i < len; i++) {
        event = {
          action: fn,
          context: context || this
        };
        type = types[i];
        if (contextId) {
          // store listeners of a particular context in a separate hash (if it has an id)
          // gives a major performance boost when removing thousands of map layers

          indexKey = type + '_idx';
          indexLenKey = indexKey + '_len';
          typeIndex = events[indexKey] = events[indexKey] || {};
          if (!typeIndex[contextId]) {
            typeIndex[contextId] = [];

            // keep track of the number of keys in the index to quickly check if it's empty
            events[indexLenKey] = (events[indexLenKey] || 0) + 1;
          }
          typeIndex[contextId].push(event);
        } else {
          events[type] = events[type] || [];
          events[type].push(event);
        }
      }
      return this;
    },
    hasEventListeners: function hasEventListeners(type) {
      // (String) -> Boolean
      var events = this[eventsKey];
      return !!events && (type in events && events[type].length > 0 || type + '_idx' in events && events[type + '_idx_len'] > 0);
    },
    removeEventListener: function removeEventListener(types, fn, context) {
      // ([String, Function, Object]) or (Object[, Object])

      if (!this[eventsKey]) {
        return this;
      }
      if (!types) {
        return this.clearAllEventListeners();
      }
      if (L.Util.invokeEach(types, this.removeEventListener, this, fn, context)) {
        return this;
      }
      var events = this[eventsKey],
        contextId = context && context !== this && L.stamp(context),
        i,
        len,
        type,
        listeners,
        j,
        indexKey,
        indexLenKey,
        typeIndex,
        removed;
      types = L.Util.splitWords(types);
      for (i = 0, len = types.length; i < len; i++) {
        type = types[i];
        indexKey = type + '_idx';
        indexLenKey = indexKey + '_len';
        typeIndex = events[indexKey];
        if (!fn) {
          // clear all listeners for a type if function isn't specified
          delete events[type];
          delete events[indexKey];
          delete events[indexLenKey];
        } else {
          listeners = contextId && typeIndex ? typeIndex[contextId] : events[type];
          if (listeners) {
            for (j = listeners.length - 1; j >= 0; j--) {
              if (listeners[j].action === fn && (!context || listeners[j].context === context)) {
                removed = listeners.splice(j, 1);
                // set the old action to a no-op, because it is possible
                // that the listener is being iterated over as part of a dispatch
                removed[0].action = L.Util.falseFn;
              }
            }
            if (context && typeIndex && listeners.length === 0) {
              delete typeIndex[contextId];
              events[indexLenKey]--;
            }
          }
        }
      }
      return this;
    },
    clearAllEventListeners: function clearAllEventListeners() {
      delete this[eventsKey];
      return this;
    },
    fireEvent: function fireEvent(type, data) {
      // (String[, Object])
      if (!this.hasEventListeners(type)) {
        return this;
      }
      var event = L.Util.extend({}, data, {
        type: type,
        target: this
      });
      var events = this[eventsKey],
        listeners,
        i,
        len,
        typeIndex,
        contextId;
      if (events[type]) {
        // make sure adding/removing listeners inside other listeners won't cause infinite loop
        listeners = events[type].slice();
        for (i = 0, len = listeners.length; i < len; i++) {
          listeners[i].action.call(listeners[i].context, event);
        }
      }

      // fire event for the context-indexed listeners as well
      typeIndex = events[type + '_idx'];
      for (contextId in typeIndex) {
        listeners = typeIndex[contextId].slice();
        if (listeners) {
          for (i = 0, len = listeners.length; i < len; i++) {
            listeners[i].action.call(listeners[i].context, event);
          }
        }
      }
      return this;
    },
    addOneTimeEventListener: function addOneTimeEventListener(types, fn, context) {
      if (L.Util.invokeEach(types, this.addOneTimeEventListener, this, fn, context)) {
        return this;
      }
      var handler = L.bind(function () {
        this.removeEventListener(types, fn, context).removeEventListener(types, handler, context);
      }, this);
      return this.addEventListener(types, fn, context).addEventListener(types, handler, context);
    }
  };
  L.Mixin.Events.on = L.Mixin.Events.addEventListener;
  L.Mixin.Events.off = L.Mixin.Events.removeEventListener;
  L.Mixin.Events.once = L.Mixin.Events.addOneTimeEventListener;
  L.Mixin.Events.fire = L.Mixin.Events.fireEvent;

  /*
  * L.Browser handles different browser and feature detections for internal Leaflet use.
  */

  (function () {
    var ie = ('ActiveXObject' in window),
      ielt9 = ie && !document.addEventListener,
      // terrible browser detection to work around Safari / iOS / Android browser bugs
      ua = navigator.userAgent.toLowerCase(),
      webkit = ua.indexOf('webkit') !== -1,
      chrome = ua.indexOf('chrome') !== -1,
      phantomjs = ua.indexOf('phantom') !== -1,
      android = ua.indexOf('android') !== -1,
      android23 = ua.search('android [23]') !== -1,
      gecko = ua.indexOf('gecko') !== -1,
      mobile = (typeof orientation === "undefined" ? "undefined" : _typeof(orientation)) !== undefined + '',
      msPointer = !window.PointerEvent && window.MSPointerEvent,
      pointer = window.PointerEvent && window.navigator.pointerEnabled || msPointer,
      retina = 'devicePixelRatio' in window && window.devicePixelRatio > 1 || 'matchMedia' in window && window.matchMedia('(min-resolution:144dpi)') && window.matchMedia('(min-resolution:144dpi)').matches,
      doc = document.documentElement,
      ie3d = ie && 'transition' in doc.style,
      webkit3d = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !android23,
      gecko3d = ('MozPerspective' in doc.style),
      opera3d = ('OTransition' in doc.style),
      any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d || opera3d) && !phantomjs;
    var touch = !window.L_NO_TOUCH && !phantomjs && (pointer || 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
    L.Browser = {
      ie: ie,
      ielt9: ielt9,
      webkit: webkit,
      gecko: gecko && !webkit && !window.opera && !ie,
      android: android,
      android23: android23,
      chrome: chrome,
      ie3d: ie3d,
      webkit3d: webkit3d,
      gecko3d: gecko3d,
      opera3d: opera3d,
      any3d: any3d,
      mobile: mobile,
      mobileWebkit: mobile && webkit,
      mobileWebkit3d: mobile && webkit3d,
      mobileOpera: mobile && window.opera,
      touch: touch,
      msPointer: msPointer,
      pointer: pointer,
      retina: retina
    };
  })();

  /*
  * L.Point represents a point with x and y coordinates.
  */

  L.Point = function ( /*Number*/x, /*Number*/y, /*Boolean*/round) {
    this.x = round ? Math.round(x) : x;
    this.y = round ? Math.round(y) : y;
  };
  L.Point.prototype = {
    clone: function clone() {
      return new L.Point(this.x, this.y);
    },
    // non-destructive, returns a new point
    add: function add(point) {
      return this.clone()._add(L.point(point));
    },
    // destructive, used directly for performance in situations where it's safe to modify existing point
    _add: function _add(point) {
      this.x += point.x;
      this.y += point.y;
      return this;
    },
    subtract: function subtract(point) {
      return this.clone()._subtract(L.point(point));
    },
    _subtract: function _subtract(point) {
      this.x -= point.x;
      this.y -= point.y;
      return this;
    },
    divideBy: function divideBy(num) {
      return this.clone()._divideBy(num);
    },
    _divideBy: function _divideBy(num) {
      this.x /= num;
      this.y /= num;
      return this;
    },
    multiplyBy: function multiplyBy(num) {
      return this.clone()._multiplyBy(num);
    },
    _multiplyBy: function _multiplyBy(num) {
      this.x *= num;
      this.y *= num;
      return this;
    },
    round: function round() {
      return this.clone()._round();
    },
    _round: function _round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    },
    floor: function floor() {
      return this.clone()._floor();
    },
    _floor: function _floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    },
    distanceTo: function distanceTo(point) {
      point = L.point(point);
      var x = point.x - this.x,
        y = point.y - this.y;
      return Math.sqrt(x * x + y * y);
    },
    equals: function equals(point) {
      point = L.point(point);
      return point.x === this.x && point.y === this.y;
    },
    contains: function contains(point) {
      point = L.point(point);
      return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
    },
    toString: function toString() {
      return 'Point(' + L.Util.formatNum(this.x) + ', ' + L.Util.formatNum(this.y) + ')';
    }
  };
  L.point = function (x, y, round) {
    if (x instanceof L.Point) {
      return x;
    }
    if (L.Util.isArray(x)) {
      return new L.Point(x[0], x[1]);
    }
    if (x === undefined || x === null) {
      return x;
    }
    return new L.Point(x, y, round);
  };

  /*
  * L.Bounds represents a rectangular area on the screen in pixel coordinates.
  */

  L.Bounds = function (a, b) {
    //(Point, Point) or Point[]
    if (!a) {
      return;
    }
    var points = b ? [a, b] : a;
    for (var i = 0, len = points.length; i < len; i++) {
      this.extend(points[i]);
    }
  };
  L.Bounds.prototype = {
    // extend the bounds to contain the given point
    extend: function extend(point) {
      // (Point)
      point = L.point(point);
      if (!this.min && !this.max) {
        this.min = point.clone();
        this.max = point.clone();
      } else {
        this.min.x = Math.min(point.x, this.min.x);
        this.max.x = Math.max(point.x, this.max.x);
        this.min.y = Math.min(point.y, this.min.y);
        this.max.y = Math.max(point.y, this.max.y);
      }
      return this;
    },
    getCenter: function getCenter(round) {
      // (Boolean) -> Point
      return new L.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
    },
    getBottomLeft: function getBottomLeft() {
      // -> Point
      return new L.Point(this.min.x, this.max.y);
    },
    getTopRight: function getTopRight() {
      // -> Point
      return new L.Point(this.max.x, this.min.y);
    },
    getSize: function getSize() {
      return this.max.subtract(this.min);
    },
    contains: function contains(obj) {
      // (Bounds) or (Point) -> Boolean
      var min, max;
      if (typeof obj[0] === 'number' || obj instanceof L.Point) {
        obj = L.point(obj);
      } else {
        obj = L.bounds(obj);
      }
      if (obj instanceof L.Bounds) {
        min = obj.min;
        max = obj.max;
      } else {
        min = max = obj;
      }
      return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
    },
    intersects: function intersects(bounds) {
      // (Bounds) -> Boolean
      bounds = L.bounds(bounds);
      var min = this.min,
        max = this.max,
        min2 = bounds.min,
        max2 = bounds.max,
        xIntersects = max2.x >= min.x && min2.x <= max.x,
        yIntersects = max2.y >= min.y && min2.y <= max.y;
      return xIntersects && yIntersects;
    },
    isValid: function isValid() {
      return !!(this.min && this.max);
    }
  };
  L.bounds = function (a, b) {
    // (Bounds) or (Point, Point) or (Point[])
    if (!a || a instanceof L.Bounds) {
      return a;
    }
    return new L.Bounds(a, b);
  };

  /*
  * L.Transformation is an utility class to perform simple point transformations through a 2d-matrix.
  */

  L.Transformation = function (a, b, c, d) {
    this._a = a;
    this._b = b;
    this._c = c;
    this._d = d;
  };
  L.Transformation.prototype = {
    transform: function transform(point, scale) {
      // (Point, Number) -> Point
      return this._transform(point.clone(), scale);
    },
    // destructive transform (faster)
    _transform: function _transform(point, scale) {
      scale = scale || 1;
      point.x = scale * (this._a * point.x + this._b);
      point.y = scale * (this._c * point.y + this._d);
      return point;
    },
    untransform: function untransform(point, scale) {
      scale = scale || 1;
      return new L.Point((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
    }
  };

  /*
  * L.DomUtil contains various utility functions for working with DOM.
  */

  L.DomUtil = {
    get: function get(id) {
      return typeof id === 'string' ? document.getElementById(id) : id;
    },
    getStyle: function getStyle(el, style) {
      var value = el.style[style];
      if (!value && el.currentStyle) {
        value = el.currentStyle[style];
      }
      if ((!value || value === 'auto') && document.defaultView) {
        var css = document.defaultView.getComputedStyle(el, null);
        value = css ? css[style] : null;
      }
      return value === 'auto' ? null : value;
    },
    getViewportOffset: function getViewportOffset(element) {
      var top = 0,
        left = 0,
        el = element,
        docBody = document.body,
        docEl = document.documentElement,
        pos;
      do {
        top += el.offsetTop || 0;
        left += el.offsetLeft || 0;

        //add borders
        top += parseInt(L.DomUtil.getStyle(el, 'borderTopWidth'), 10) || 0;
        left += parseInt(L.DomUtil.getStyle(el, 'borderLeftWidth'), 10) || 0;
        pos = L.DomUtil.getStyle(el, 'position');
        if (el.offsetParent === docBody && pos === 'absolute') {
          break;
        }
        if (pos === 'fixed') {
          top += docBody.scrollTop || docEl.scrollTop || 0;
          left += docBody.scrollLeft || docEl.scrollLeft || 0;
          break;
        }
        if (pos === 'relative' && !el.offsetLeft) {
          var width = L.DomUtil.getStyle(el, 'width'),
            maxWidth = L.DomUtil.getStyle(el, 'max-width'),
            r = el.getBoundingClientRect();
          if (width !== 'none' || maxWidth !== 'none') {
            left += r.left + el.clientLeft;
          }

          //calculate full y offset since we're breaking out of the loop
          top += r.top + (docBody.scrollTop || docEl.scrollTop || 0);
          break;
        }
        el = el.offsetParent;
      } while (el);
      el = element;
      do {
        if (el === docBody) {
          break;
        }
        top -= el.scrollTop || 0;
        left -= el.scrollLeft || 0;
        el = el.parentNode;
      } while (el);
      return new L.Point(left, top);
    },
    documentIsLtr: function documentIsLtr() {
      if (!L.DomUtil._docIsLtrCached) {
        L.DomUtil._docIsLtrCached = true;
        L.DomUtil._docIsLtr = L.DomUtil.getStyle(document.body, 'direction') === 'ltr';
      }
      return L.DomUtil._docIsLtr;
    },
    create: function create(tagName, className, container) {
      var el = document.createElement(tagName);
      el.className = className;
      if (container) {
        container.appendChild(el);
      }
      return el;
    },
    hasClass: function hasClass(el, name) {
      if (el.classList !== undefined) {
        return el.classList.contains(name);
      }
      var className = L.DomUtil._getClass(el);
      return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
    },
    addClass: function addClass(el, name) {
      if (el.classList !== undefined) {
        var classes = L.Util.splitWords(name);
        for (var i = 0, len = classes.length; i < len; i++) {
          el.classList.add(classes[i]);
        }
      } else if (!L.DomUtil.hasClass(el, name)) {
        var className = L.DomUtil._getClass(el);
        L.DomUtil._setClass(el, (className ? className + ' ' : '') + name);
      }
    },
    removeClass: function removeClass(el, name) {
      if (el.classList !== undefined) {
        el.classList.remove(name);
      } else {
        L.DomUtil._setClass(el, L.Util.trim((' ' + L.DomUtil._getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
      }
    },
    _setClass: function _setClass(el, name) {
      if (el.className.baseVal === undefined) {
        el.className = name;
      } else {
        // in case of SVG element
        el.className.baseVal = name;
      }
    },
    _getClass: function _getClass(el) {
      return el.className.baseVal === undefined ? el.className : el.className.baseVal;
    },
    setOpacity: function setOpacity(el, value) {
      if ('opacity' in el.style) {
        el.style.opacity = value;
      } else if ('filter' in el.style) {
        var filter = false,
          filterName = 'DXImageTransform.Microsoft.Alpha';

        // filters collection throws an error if we try to retrieve a filter that doesn't exist
        try {
          filter = el.filters.item(filterName);
        } catch (e) {
          // don't set opacity to 1 if we haven't already set an opacity,
          // it isn't needed and breaks transparent pngs.
          if (value === 1) {
            return;
          }
        }
        value = Math.round(value * 100);
        if (filter) {
          filter.Enabled = value !== 100;
          filter.Opacity = value;
        } else {
          el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
        }
      }
    },
    testProp: function testProp(props) {
      var style = document.documentElement.style;
      for (var i = 0; i < props.length; i++) {
        if (props[i] in style) {
          return props[i];
        }
      }
      return false;
    },
    getTranslateString: function getTranslateString(point) {
      // on WebKit browsers (Chrome/Safari/iOS Safari/Android) using translate3d instead of translate
      // makes animation smoother as it ensures HW accel is used. Firefox 13 doesn't care
      // (same speed either way), Opera 12 doesn't support translate3d

      var is3d = L.Browser.webkit3d,
        open = 'translate' + (is3d ? '3d' : '') + '(',
        close = (is3d ? ',0' : '') + ')';
      return open + point.x + 'px,' + point.y + 'px' + close;
    },
    getScaleString: function getScaleString(scale, origin) {
      var preTranslateStr = L.DomUtil.getTranslateString(origin.add(origin.multiplyBy(-1 * scale))),
        scaleStr = ' scale(' + scale + ') ';
      return preTranslateStr + scaleStr;
    },
    setPosition: function setPosition(el, point, disable3D) {
      // (HTMLElement, Point[, Boolean])

      // jshint camelcase: false
      el._leaflet_pos = point;
      if (!disable3D && L.Browser.any3d) {
        el.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(point);
      } else {
        el.style.left = point.x + 'px';
        el.style.top = point.y + 'px';
      }
    },
    getPosition: function getPosition(el) {
      // this method is only used for elements previously positioned using setPosition,
      // so it's safe to cache the position for performance

      // jshint camelcase: false
      return el._leaflet_pos;
    }
  };

  // prefix style property names

  L.DomUtil.TRANSFORM = L.DomUtil.testProp(['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

  // webkitTransition comes first because some browser versions that drop vendor prefix don't do
  // the same for the transitionend event, in particular the Android 4.1 stock browser

  L.DomUtil.TRANSITION = L.DomUtil.testProp(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);
  L.DomUtil.TRANSITION_END = L.DomUtil.TRANSITION === 'webkitTransition' || L.DomUtil.TRANSITION === 'OTransition' ? L.DomUtil.TRANSITION + 'End' : 'transitionend';
  (function () {
    if ('onselectstart' in document) {
      L.extend(L.DomUtil, {
        disableTextSelection: function disableTextSelection() {
          L.DomEvent.on(window, 'selectstart', L.DomEvent.preventDefault);
        },
        enableTextSelection: function enableTextSelection() {
          L.DomEvent.off(window, 'selectstart', L.DomEvent.preventDefault);
        }
      });
    } else {
      var userSelectProperty = L.DomUtil.testProp(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);
      L.extend(L.DomUtil, {
        disableTextSelection: function disableTextSelection() {
          if (userSelectProperty) {
            var style = document.documentElement.style;
            this._userSelect = style[userSelectProperty];
            style[userSelectProperty] = 'none';
          }
        },
        enableTextSelection: function enableTextSelection() {
          if (userSelectProperty) {
            document.documentElement.style[userSelectProperty] = this._userSelect;
            delete this._userSelect;
          }
        }
      });
    }
    L.extend(L.DomUtil, {
      disableImageDrag: function disableImageDrag() {
        L.DomEvent.on(window, 'dragstart', L.DomEvent.preventDefault);
      },
      enableImageDrag: function enableImageDrag() {
        L.DomEvent.off(window, 'dragstart', L.DomEvent.preventDefault);
      }
    });
  })();

  /*
  * L.LatLng represents a geographical point with latitude and longitude coordinates.
  */

  L.LatLng = function (lat, lng, alt) {
    // (Number, Number, Number)
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    if (isNaN(lat) || isNaN(lng)) {
      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
    }
    this.lat = lat;
    this.lng = lng;
    if (alt !== undefined) {
      this.alt = parseFloat(alt);
    }
  };
  L.extend(L.LatLng, {
    DEG_TO_RAD: Math.PI / 180,
    RAD_TO_DEG: 180 / Math.PI,
    MAX_MARGIN: 1.0E-9 // max margin of error for the "equals" check
  });
  L.LatLng.prototype = {
    equals: function equals(obj) {
      // (LatLng) -> Boolean
      if (!obj) {
        return false;
      }
      obj = L.latLng(obj);
      var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
      return margin <= L.LatLng.MAX_MARGIN;
    },
    toString: function toString(precision) {
      // (Number) -> String
      return 'LatLng(' + L.Util.formatNum(this.lat, precision) + ', ' + L.Util.formatNum(this.lng, precision) + ')';
    },
    // Haversine distance formula, see http://en.wikipedia.org/wiki/Haversine_formula
    // TODO move to projection code, LatLng shouldn't know about Earth
    distanceTo: function distanceTo(other) {
      // (LatLng) -> Number
      other = L.latLng(other);
      var R = 6378137,
        // earth radius in meters
        d2r = L.LatLng.DEG_TO_RAD,
        dLat = (other.lat - this.lat) * d2r,
        dLon = (other.lng - this.lng) * d2r,
        lat1 = this.lat * d2r,
        lat2 = other.lat * d2r,
        sin1 = Math.sin(dLat / 2),
        sin2 = Math.sin(dLon / 2);
      var a = sin1 * sin1 + sin2 * sin2 * Math.cos(lat1) * Math.cos(lat2);
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    },
    wrap: function wrap(a, b) {
      // (Number, Number) -> LatLng
      var lng = this.lng;
      a = a || -180;
      b = b || 180;
      lng = (lng + b) % (b - a) + (lng < a || lng === b ? b : a);
      return new L.LatLng(this.lat, lng);
    }
  };
  L.latLng = function (a, b) {
    // (LatLng) or ([Number, Number]) or (Number, Number)
    if (a instanceof L.LatLng) {
      return a;
    }
    if (L.Util.isArray(a)) {
      if (typeof a[0] === 'number' || typeof a[0] === 'string') {
        return new L.LatLng(a[0], a[1], a[2]);
      } else {
        return null;
      }
    }
    if (a === undefined || a === null) {
      return a;
    }
    if (_typeof(a) === 'object' && 'lat' in a) {
      return new L.LatLng(a.lat, 'lng' in a ? a.lng : a.lon);
    }
    if (b === undefined) {
      return null;
    }
    return new L.LatLng(a, b);
  };

  /*
  * L.LatLngBounds represents a rectangular area on the map in geographical coordinates.
  */

  L.LatLngBounds = function (southWest, northEast) {
    // (LatLng, LatLng) or (LatLng[])
    if (!southWest) {
      return;
    }
    var latlngs = northEast ? [southWest, northEast] : southWest;
    for (var i = 0, len = latlngs.length; i < len; i++) {
      this.extend(latlngs[i]);
    }
  };
  L.LatLngBounds.prototype = {
    // extend the bounds to contain the given point or bounds
    extend: function extend(obj) {
      // (LatLng) or (LatLngBounds)
      if (!obj) {
        return this;
      }
      var latLng = L.latLng(obj);
      if (latLng !== null) {
        obj = latLng;
      } else {
        obj = L.latLngBounds(obj);
      }
      if (obj instanceof L.LatLng) {
        if (!this._southWest && !this._northEast) {
          this._southWest = new L.LatLng(obj.lat, obj.lng);
          this._northEast = new L.LatLng(obj.lat, obj.lng);
        } else {
          this._southWest.lat = Math.min(obj.lat, this._southWest.lat);
          this._southWest.lng = Math.min(obj.lng, this._southWest.lng);
          this._northEast.lat = Math.max(obj.lat, this._northEast.lat);
          this._northEast.lng = Math.max(obj.lng, this._northEast.lng);
        }
      } else if (obj instanceof L.LatLngBounds) {
        this.extend(obj._southWest);
        this.extend(obj._northEast);
      }
      return this;
    },
    // extend the bounds by a percentage
    pad: function pad(bufferRatio) {
      // (Number) -> LatLngBounds
      var sw = this._southWest,
        ne = this._northEast,
        heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
        widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
      return new L.LatLngBounds(new L.LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer), new L.LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
    },
    getCenter: function getCenter() {
      // -> LatLng
      return new L.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    getSouthWest: function getSouthWest() {
      return this._southWest;
    },
    getNorthEast: function getNorthEast() {
      return this._northEast;
    },
    getNorthWest: function getNorthWest() {
      return new L.LatLng(this.getNorth(), this.getWest());
    },
    getSouthEast: function getSouthEast() {
      return new L.LatLng(this.getSouth(), this.getEast());
    },
    getWest: function getWest() {
      return this._southWest.lng;
    },
    getSouth: function getSouth() {
      return this._southWest.lat;
    },
    getEast: function getEast() {
      return this._northEast.lng;
    },
    getNorth: function getNorth() {
      return this._northEast.lat;
    },
    contains: function contains(obj) {
      // (LatLngBounds) or (LatLng) -> Boolean
      if (typeof obj[0] === 'number' || obj instanceof L.LatLng) {
        obj = L.latLng(obj);
      } else {
        obj = L.latLngBounds(obj);
      }
      var sw = this._southWest,
        ne = this._northEast,
        sw2,
        ne2;
      if (obj instanceof L.LatLngBounds) {
        sw2 = obj.getSouthWest();
        ne2 = obj.getNorthEast();
      } else {
        sw2 = ne2 = obj;
      }
      return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
    },
    intersects: function intersects(bounds) {
      // (LatLngBounds)
      bounds = L.latLngBounds(bounds);
      var sw = this._southWest,
        ne = this._northEast,
        sw2 = bounds.getSouthWest(),
        ne2 = bounds.getNorthEast(),
        latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat,
        lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
      return latIntersects && lngIntersects;
    },
    toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
    },
    equals: function equals(bounds) {
      // (LatLngBounds)
      if (!bounds) {
        return false;
      }
      bounds = L.latLngBounds(bounds);
      return this._southWest.equals(bounds.getSouthWest()) && this._northEast.equals(bounds.getNorthEast());
    },
    isValid: function isValid() {
      return !!(this._southWest && this._northEast);
    }
  };

  //TODO International date line?

  L.latLngBounds = function (a, b) {
    // (LatLngBounds) or (LatLng, LatLng)
    if (!a || a instanceof L.LatLngBounds) {
      return a;
    }
    return new L.LatLngBounds(a, b);
  };

  /*
  * L.Projection contains various geographical projections used by CRS classes.
  */

  L.Projection = {};

  /*
  * Spherical Mercator is the most popular map projection, used by EPSG:3857 CRS used by default.
  */

  L.Projection.SphericalMercator = {
    MAX_LATITUDE: 85.0511287798,
    project: function project(latlng) {
      // (LatLng) -> Point
      var d = L.LatLng.DEG_TO_RAD,
        max = this.MAX_LATITUDE,
        lat = Math.max(Math.min(max, latlng.lat), -max),
        x = latlng.lng * d,
        y = lat * d;
      y = Math.log(Math.tan(Math.PI / 4 + y / 2));
      return new L.Point(x, y);
    },
    unproject: function unproject(point) {
      // (Point, Boolean) -> LatLng
      var d = L.LatLng.RAD_TO_DEG,
        lng = point.x * d,
        lat = (2 * Math.atan(Math.exp(point.y)) - Math.PI / 2) * d;
      return new L.LatLng(lat, lng);
    }
  };

  /*
  * Simple equirectangular (Plate Carree) projection, used by CRS like EPSG:4326 and Simple.
  */

  L.Projection.LonLat = {
    project: function project(latlng) {
      return new L.Point(latlng.lng, latlng.lat);
    },
    unproject: function unproject(point) {
      return new L.LatLng(point.y, point.x);
    }
  };

  /*
  * L.CRS is a base object for all defined CRS (Coordinate Reference Systems) in Leaflet.
  */

  L.CRS = {
    latLngToPoint: function latLngToPoint(latlng, zoom) {
      // (LatLng, Number) -> Point
      var projectedPoint = this.projection.project(latlng),
        scale = this.scale(zoom);
      return this.transformation._transform(projectedPoint, scale);
    },
    pointToLatLng: function pointToLatLng(point, zoom) {
      // (Point, Number[, Boolean]) -> LatLng
      var scale = this.scale(zoom),
        untransformedPoint = this.transformation.untransform(point, scale);
      return this.projection.unproject(untransformedPoint);
    },
    project: function project(latlng) {
      return this.projection.project(latlng);
    },
    scale: function scale(zoom) {
      return 256 * Math.pow(2, zoom);
    },
    getSize: function getSize(zoom) {
      var s = this.scale(zoom);
      return L.point(s, s);
    }
  };

  /*
  * A simple CRS that can be used for flat non-Earth maps like panoramas or game maps.
  */

  L.CRS.Simple = L.extend({}, L.CRS, {
    projection: L.Projection.LonLat,
    transformation: new L.Transformation(1, 0, -1, 0),
    scale: function scale(zoom) {
      return Math.pow(2, zoom);
    }
  });

  /*
  * L.CRS.EPSG3857 (Spherical Mercator) is the most common CRS for web mapping
  * and is used by Leaflet by default.
  */

  L.CRS.EPSG3857 = L.extend({}, L.CRS, {
    code: 'EPSG:3857',
    projection: L.Projection.SphericalMercator,
    transformation: new L.Transformation(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
    project: function project(latlng) {
      // (LatLng) -> Point
      var projectedPoint = this.projection.project(latlng),
        earthRadius = 6378137;
      return projectedPoint.multiplyBy(earthRadius);
    }
  });
  L.CRS.EPSG900913 = L.extend({}, L.CRS.EPSG3857, {
    code: 'EPSG:900913'
  });

  /*
  * L.CRS.EPSG4326 is a CRS popular among advanced GIS specialists.
  */

  L.CRS.EPSG4326 = L.extend({}, L.CRS, {
    code: 'EPSG:4326',
    projection: L.Projection.LonLat,
    transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.5)
  });

  /*
  * L.Map is the central class of the API - it is used to create a map.
  */

  L.Map = L.Class.extend({
    includes: L.Mixin.Events,
    options: {
      crs: L.CRS.EPSG3857,
      /*
      center: LatLng,
      zoom: Number,
      layers: Array,
      */

      fadeAnimation: L.DomUtil.TRANSITION && !L.Browser.android23,
      trackResize: true,
      markerZoomAnimation: L.DomUtil.TRANSITION && L.Browser.any3d
    },
    initialize: function initialize(id, options) {
      // (HTMLElement or String, Object)
      options = L.setOptions(this, options);
      this._initContainer(id);
      this._initLayout();

      // hack for https://github.com/Leaflet/Leaflet/issues/1980
      this._onResize = L.bind(this._onResize, this);
      this._initEvents();
      if (options.maxBounds) {
        this.setMaxBounds(options.maxBounds);
      }
      if (options.center && options.zoom !== undefined) {
        this.setView(L.latLng(options.center), options.zoom, {
          reset: true
        });
      }
      this._handlers = [];
      this._layers = {};
      this._zoomBoundLayers = {};
      this._tileLayersNum = 0;
      this.callInitHooks();
      this._addLayers(options.layers);
    },
    // public methods that modify map state

    // replaced by animation-powered implementation in Map.PanAnimation.js
    setView: function setView(center, zoom) {
      zoom = zoom === undefined ? this.getZoom() : zoom;
      this._resetView(L.latLng(center), this._limitZoom(zoom));
      return this;
    },
    setZoom: function setZoom(zoom, options) {
      if (!this._loaded) {
        this._zoom = this._limitZoom(zoom);
        return this;
      }
      return this.setView(this.getCenter(), zoom, {
        zoom: options
      });
    },
    zoomIn: function zoomIn(delta, options) {
      return this.setZoom(this._zoom + (delta || 1), options);
    },
    zoomOut: function zoomOut(delta, options) {
      return this.setZoom(this._zoom - (delta || 1), options);
    },
    setZoomAround: function setZoomAround(latlng, zoom, options) {
      var scale = this.getZoomScale(zoom),
        viewHalf = this.getSize().divideBy(2),
        containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng),
        centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
        newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
      return this.setView(newCenter, zoom, {
        zoom: options
      });
    },
    fitBounds: function fitBounds(bounds, options) {
      options = options || {};
      bounds = bounds.getBounds ? bounds.getBounds() : L.latLngBounds(bounds);
      var paddingTL = L.point(options.paddingTopLeft || options.padding || [0, 0]),
        paddingBR = L.point(options.paddingBottomRight || options.padding || [0, 0]),
        zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
      zoom = options.maxZoom ? Math.min(options.maxZoom, zoom) : zoom;
      var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),
        swPoint = this.project(bounds.getSouthWest(), zoom),
        nePoint = this.project(bounds.getNorthEast(), zoom),
        center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);
      return this.setView(center, zoom, options);
    },
    fitWorld: function fitWorld(options) {
      return this.fitBounds([[-90, -180], [90, 180]], options);
    },
    panTo: function panTo(center, options) {
      // (LatLng)
      return this.setView(center, this._zoom, {
        pan: options
      });
    },
    panBy: function panBy(offset) {
      // (Point)
      // replaced with animated panBy in Map.PanAnimation.js
      this.fire('movestart');
      this._rawPanBy(L.point(offset));
      this.fire('move');
      return this.fire('moveend');
    },
    setMaxBounds: function setMaxBounds(bounds) {
      bounds = L.latLngBounds(bounds);
      this.options.maxBounds = bounds;
      if (!bounds) {
        return this.off('moveend', this._panInsideMaxBounds, this);
      }
      if (this._loaded) {
        this._panInsideMaxBounds();
      }
      return this.on('moveend', this._panInsideMaxBounds, this);
    },
    panInsideBounds: function panInsideBounds(bounds, options) {
      var center = this.getCenter(),
        newCenter = this._limitCenter(center, this._zoom, bounds);
      if (center.equals(newCenter)) {
        return this;
      }
      return this.panTo(newCenter, options);
    },
    addLayer: function addLayer(layer) {
      // TODO method is too big, refactor

      var id = L.stamp(layer);
      if (this._layers[id]) {
        return this;
      }
      this._layers[id] = layer;

      // TODO getMaxZoom, getMinZoom in ILayer (instead of options)
      if (layer.options && (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom))) {
        this._zoomBoundLayers[id] = layer;
        this._updateZoomLevels();
      }

      // TODO looks ugly, refactor!!!
      if (this.options.zoomAnimation && L.TileLayer && layer instanceof L.TileLayer) {
        this._tileLayersNum++;
        this._tileLayersToLoad++;
        layer.on('load', this._onTileLayerLoad, this);
      }
      if (this._loaded) {
        this._layerAdd(layer);
      }
      return this;
    },
    removeLayer: function removeLayer(layer) {
      var id = L.stamp(layer);
      if (!this._layers[id]) {
        return this;
      }
      if (this._loaded) {
        layer.onRemove(this);
      }
      delete this._layers[id];
      if (this._loaded) {
        this.fire('layerremove', {
          layer: layer
        });
      }
      if (this._zoomBoundLayers[id]) {
        delete this._zoomBoundLayers[id];
        this._updateZoomLevels();
      }

      // TODO looks ugly, refactor
      if (this.options.zoomAnimation && L.TileLayer && layer instanceof L.TileLayer) {
        this._tileLayersNum--;
        this._tileLayersToLoad--;
        layer.off('load', this._onTileLayerLoad, this);
      }
      return this;
    },
    hasLayer: function hasLayer(layer) {
      if (!layer) {
        return false;
      }
      return L.stamp(layer) in this._layers;
    },
    eachLayer: function eachLayer(method, context) {
      for (var i in this._layers) {
        method.call(context, this._layers[i]);
      }
      return this;
    },
    invalidateSize: function invalidateSize(options) {
      if (!this._loaded) {
        return this;
      }
      options = L.extend({
        animate: false,
        pan: true
      }, options === true ? {
        animate: true
      } : options);
      var oldSize = this.getSize();
      this._sizeChanged = true;
      this._initialCenter = null;
      var newSize = this.getSize(),
        oldCenter = oldSize.divideBy(2).round(),
        newCenter = newSize.divideBy(2).round(),
        offset = oldCenter.subtract(newCenter);
      if (!offset.x && !offset.y) {
        return this;
      }
      if (options.animate && options.pan) {
        this.panBy(offset);
      } else {
        if (options.pan) {
          this._rawPanBy(offset);
        }
        this.fire('move');
        if (options.debounceMoveend) {
          clearTimeout(this._sizeTimer);
          this._sizeTimer = setTimeout(L.bind(this.fire, this, 'moveend'), 200);
        } else {
          this.fire('moveend');
        }
      }
      return this.fire('resize', {
        oldSize: oldSize,
        newSize: newSize
      });
    },
    // TODO handler.addTo
    addHandler: function addHandler(name, HandlerClass) {
      if (!HandlerClass) {
        return this;
      }
      var handler = this[name] = new HandlerClass(this);
      this._handlers.push(handler);
      if (this.options[name]) {
        handler.enable();
      }
      return this;
    },
    remove: function remove() {
      if (this._loaded) {
        this.fire('unload');
      }
      this._initEvents('off');
      try {
        // throws error in IE6-8
        delete this._container._leaflet;
      } catch (e) {
        this._container._leaflet = undefined;
      }
      this._clearPanes();
      if (this._clearControlPos) {
        this._clearControlPos();
      }
      this._clearHandlers();
      return this;
    },
    // public methods for getting map state

    getCenter: function getCenter() {
      // (Boolean) -> LatLng
      this._checkIfLoaded();
      if (this._initialCenter && !this._moved()) {
        return this._initialCenter;
      }
      return this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    getZoom: function getZoom() {
      return this._zoom;
    },
    getBounds: function getBounds() {
      var bounds = this.getPixelBounds(),
        sw = this.unproject(bounds.getBottomLeft()),
        ne = this.unproject(bounds.getTopRight());
      return new L.LatLngBounds(sw, ne);
    },
    getMinZoom: function getMinZoom() {
      return this.options.minZoom === undefined ? this._layersMinZoom === undefined ? 0 : this._layersMinZoom : this.options.minZoom;
    },
    getMaxZoom: function getMaxZoom() {
      return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom : this.options.maxZoom;
    },
    getBoundsZoom: function getBoundsZoom(bounds, inside, padding) {
      // (LatLngBounds[, Boolean, Point]) -> Number
      bounds = L.latLngBounds(bounds);
      var zoom = this.getMinZoom() - (inside ? 1 : 0),
        maxZoom = this.getMaxZoom(),
        size = this.getSize(),
        nw = bounds.getNorthWest(),
        se = bounds.getSouthEast(),
        zoomNotFound = true,
        boundsSize;
      padding = L.point(padding || [0, 0]);
      do {
        zoom++;
        boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom)).add(padding);
        zoomNotFound = !inside ? size.contains(boundsSize) : boundsSize.x < size.x || boundsSize.y < size.y;
      } while (zoomNotFound && zoom <= maxZoom);
      if (zoomNotFound && inside) {
        return null;
      }
      return inside ? zoom : zoom - 1;
    },
    getSize: function getSize() {
      if (!this._size || this._sizeChanged) {
        this._size = new L.Point(this._container.clientWidth, this._container.clientHeight);
        this._sizeChanged = false;
      }
      return this._size.clone();
    },
    getPixelBounds: function getPixelBounds() {
      var topLeftPoint = this._getTopLeftPoint();
      return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
    },
    getPixelOrigin: function getPixelOrigin() {
      this._checkIfLoaded();
      return this._initialTopLeftPoint;
    },
    getPanes: function getPanes() {
      return this._panes;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    // TODO replace with universal implementation after refactoring projections

    getZoomScale: function getZoomScale(toZoom) {
      var crs = this.options.crs;
      return crs.scale(toZoom) / crs.scale(this._zoom);
    },
    getScaleZoom: function getScaleZoom(scale) {
      return this._zoom + Math.log(scale) / Math.LN2;
    },
    // conversion methods

    project: function project(latlng, zoom) {
      // (LatLng[, Number]) -> Point
      zoom = zoom === undefined ? this._zoom : zoom;
      return this.options.crs.latLngToPoint(L.latLng(latlng), zoom);
    },
    unproject: function unproject(point, zoom) {
      // (Point[, Number]) -> LatLng
      zoom = zoom === undefined ? this._zoom : zoom;
      return this.options.crs.pointToLatLng(L.point(point), zoom);
    },
    layerPointToLatLng: function layerPointToLatLng(point) {
      // (Point)
      var projectedPoint = L.point(point).add(this.getPixelOrigin());
      return this.unproject(projectedPoint);
    },
    latLngToLayerPoint: function latLngToLayerPoint(latlng) {
      // (LatLng)
      var projectedPoint = this.project(L.latLng(latlng))._round();
      return projectedPoint._subtract(this.getPixelOrigin());
    },
    containerPointToLayerPoint: function containerPointToLayerPoint(point) {
      // (Point)
      return L.point(point).subtract(this._getMapPanePos());
    },
    layerPointToContainerPoint: function layerPointToContainerPoint(point) {
      // (Point)
      return L.point(point).add(this._getMapPanePos());
    },
    containerPointToLatLng: function containerPointToLatLng(point) {
      var layerPoint = this.containerPointToLayerPoint(L.point(point));
      return this.layerPointToLatLng(layerPoint);
    },
    latLngToContainerPoint: function latLngToContainerPoint(latlng) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(L.latLng(latlng)));
    },
    mouseEventToContainerPoint: function mouseEventToContainerPoint(e) {
      // (MouseEvent)
      return L.DomEvent.getMousePosition(e, this._container);
    },
    mouseEventToLayerPoint: function mouseEventToLayerPoint(e) {
      // (MouseEvent)
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
    },
    mouseEventToLatLng: function mouseEventToLatLng(e) {
      // (MouseEvent)
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
    },
    // map initialization methods

    _initContainer: function _initContainer(id) {
      var container = this._container = L.DomUtil.get(id);
      if (!container) {
        throw new Error('Map container not found.');
      } else if (container._leaflet) {
        throw new Error('Map container is already initialized.');
      }
      container._leaflet = true;
    },
    _initLayout: function _initLayout() {
      var container = this._container;
      L.DomUtil.addClass(container, 'leaflet-container' + (L.Browser.touch ? ' leaflet-touch' : '') + (L.Browser.retina ? ' leaflet-retina' : '') + (L.Browser.ielt9 ? ' leaflet-oldie' : '') + (this.options.fadeAnimation ? ' leaflet-fade-anim' : ''));
      var position = L.DomUtil.getStyle(container, 'position');
      if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
        container.style.position = 'relative';
      }
      this._initPanes();
      if (this._initControlPos) {
        this._initControlPos();
      }
    },
    _initPanes: function _initPanes() {
      var panes = this._panes = {};
      this._mapPane = panes.mapPane = this._createPane('leaflet-map-pane', this._container);
      this._tilePane = panes.tilePane = this._createPane('leaflet-tile-pane', this._mapPane);
      panes.objectsPane = this._createPane('leaflet-objects-pane', this._mapPane);
      panes.shadowPane = this._createPane('leaflet-shadow-pane');
      panes.overlayPane = this._createPane('leaflet-overlay-pane');
      panes.markerPane = this._createPane('leaflet-marker-pane');
      panes.popupPane = this._createPane('leaflet-popup-pane');
      var zoomHide = ' leaflet-zoom-hide';
      if (!this.options.markerZoomAnimation) {
        L.DomUtil.addClass(panes.markerPane, zoomHide);
        L.DomUtil.addClass(panes.shadowPane, zoomHide);
        L.DomUtil.addClass(panes.popupPane, zoomHide);
      }
    },
    _createPane: function _createPane(className, container) {
      return L.DomUtil.create('div', className, container || this._panes.objectsPane);
    },
    _clearPanes: function _clearPanes() {
      this._container.removeChild(this._mapPane);
    },
    _addLayers: function _addLayers(layers) {
      layers = layers ? L.Util.isArray(layers) ? layers : [layers] : [];
      for (var i = 0, len = layers.length; i < len; i++) {
        this.addLayer(layers[i]);
      }
    },
    // private methods that modify map state

    _resetView: function _resetView(center, zoom, preserveMapOffset, afterZoomAnim) {
      var zoomChanged = this._zoom !== zoom;
      if (!afterZoomAnim) {
        this.fire('movestart');
        if (zoomChanged) {
          this.fire('zoomstart');
        }
      }
      this._zoom = zoom;
      this._initialCenter = center;
      this._initialTopLeftPoint = this._getNewTopLeftPoint(center);
      if (!preserveMapOffset) {
        L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
      } else {
        this._initialTopLeftPoint._add(this._getMapPanePos());
      }
      this._tileLayersToLoad = this._tileLayersNum;
      var loading = !this._loaded;
      this._loaded = true;
      this.fire('viewreset', {
        hard: !preserveMapOffset
      });
      if (loading) {
        this.fire('load');
        this.eachLayer(this._layerAdd, this);
      }
      this.fire('move');
      if (zoomChanged || afterZoomAnim) {
        this.fire('zoomend');
      }
      this.fire('moveend', {
        hard: !preserveMapOffset
      });
    },
    _rawPanBy: function _rawPanBy(offset) {
      L.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
    },
    _getZoomSpan: function _getZoomSpan() {
      return this.getMaxZoom() - this.getMinZoom();
    },
    _updateZoomLevels: function _updateZoomLevels() {
      var i,
        minZoom = Infinity,
        maxZoom = -Infinity,
        oldZoomSpan = this._getZoomSpan();
      for (i in this._zoomBoundLayers) {
        var layer = this._zoomBoundLayers[i];
        if (!isNaN(layer.options.minZoom)) {
          minZoom = Math.min(minZoom, layer.options.minZoom);
        }
        if (!isNaN(layer.options.maxZoom)) {
          maxZoom = Math.max(maxZoom, layer.options.maxZoom);
        }
      }
      if (i === undefined) {
        // we have no tilelayers
        this._layersMaxZoom = this._layersMinZoom = undefined;
      } else {
        this._layersMaxZoom = maxZoom;
        this._layersMinZoom = minZoom;
      }
      if (oldZoomSpan !== this._getZoomSpan()) {
        this.fire('zoomlevelschange');
      }
    },
    _panInsideMaxBounds: function _panInsideMaxBounds() {
      this.panInsideBounds(this.options.maxBounds);
    },
    _checkIfLoaded: function _checkIfLoaded() {
      if (!this._loaded) {
        throw new Error('Set map center and zoom first.');
      }
    },
    // map events

    _initEvents: function _initEvents(onOff) {
      if (!L.DomEvent) {
        return;
      }
      onOff = onOff || 'on';
      L.DomEvent[onOff](this._container, 'click', this._onMouseClick, this);
      var events = ['dblclick', 'mousedown', 'mouseup', 'mouseenter', 'mouseleave', 'mousemove', 'contextmenu'],
        i,
        len;
      for (i = 0, len = events.length; i < len; i++) {
        L.DomEvent[onOff](this._container, events[i], this._fireMouseEvent, this);
      }
      if (this.options.trackResize) {
        L.DomEvent[onOff](window, 'resize', this._onResize, this);
      }
    },
    _onResize: function _onResize() {
      L.Util.cancelAnimFrame(this._resizeRequest);
      this._resizeRequest = L.Util.requestAnimFrame(function () {
        this.invalidateSize({
          debounceMoveend: true
        });
      }, this, false, this._container);
    },
    _onMouseClick: function _onMouseClick(e) {
      if (!this._loaded || !e._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || L.DomEvent._skipped(e)) {
        return;
      }
      this.fire('preclick');
      this._fireMouseEvent(e);
    },
    _fireMouseEvent: function _fireMouseEvent(e) {
      if (!this._loaded || L.DomEvent._skipped(e)) {
        return;
      }
      var type = e.type;
      type = type === 'mouseenter' ? 'mouseover' : type === 'mouseleave' ? 'mouseout' : type;
      if (!this.hasEventListeners(type)) {
        return;
      }
      if (type === 'contextmenu') {
        L.DomEvent.preventDefault(e);
      }
      var containerPoint = this.mouseEventToContainerPoint(e),
        layerPoint = this.containerPointToLayerPoint(containerPoint),
        latlng = this.layerPointToLatLng(layerPoint);
      this.fire(type, {
        latlng: latlng,
        layerPoint: layerPoint,
        containerPoint: containerPoint,
        originalEvent: e
      });
    },
    _onTileLayerLoad: function _onTileLayerLoad() {
      this._tileLayersToLoad--;
      if (this._tileLayersNum && !this._tileLayersToLoad) {
        this.fire('tilelayersload');
      }
    },
    _clearHandlers: function _clearHandlers() {
      for (var i = 0, len = this._handlers.length; i < len; i++) {
        this._handlers[i].disable();
      }
    },
    whenReady: function whenReady(callback, context) {
      if (this._loaded) {
        callback.call(context || this, this);
      } else {
        this.on('load', callback, context);
      }
      return this;
    },
    _layerAdd: function _layerAdd(layer) {
      layer.onAdd(this);
      this.fire('layeradd', {
        layer: layer
      });
    },
    // private methods for getting map state

    _getMapPanePos: function _getMapPanePos() {
      return L.DomUtil.getPosition(this._mapPane);
    },
    _moved: function _moved() {
      var pos = this._getMapPanePos();
      return pos && !pos.equals([0, 0]);
    },
    _getTopLeftPoint: function _getTopLeftPoint() {
      return this.getPixelOrigin().subtract(this._getMapPanePos());
    },
    _getNewTopLeftPoint: function _getNewTopLeftPoint(center, zoom) {
      var viewHalf = this.getSize()._divideBy(2);
      // TODO round on display, not calculation to increase precision?
      return this.project(center, zoom)._subtract(viewHalf)._round();
    },
    _latLngToNewLayerPoint: function _latLngToNewLayerPoint(latlng, newZoom, newCenter) {
      var topLeft = this._getNewTopLeftPoint(newCenter, newZoom).add(this._getMapPanePos());
      return this.project(latlng, newZoom)._subtract(topLeft);
    },
    // layer point of the current center
    _getCenterLayerPoint: function _getCenterLayerPoint() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    // offset of the specified place to the current center in pixels
    _getCenterOffset: function _getCenterOffset(latlng) {
      return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
    },
    // adjust center for view to get inside bounds
    _limitCenter: function _limitCenter(center, zoom, bounds) {
      if (!bounds) {
        return center;
      }
      var centerPoint = this.project(center, zoom),
        viewHalf = this.getSize().divideBy(2),
        viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
        offset = this._getBoundsOffset(viewBounds, bounds, zoom);
      return this.unproject(centerPoint.add(offset), zoom);
    },
    // adjust offset for view to get inside bounds
    _limitOffset: function _limitOffset(offset, bounds) {
      if (!bounds) {
        return offset;
      }
      var viewBounds = this.getPixelBounds(),
        newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
      return offset.add(this._getBoundsOffset(newBounds, bounds));
    },
    // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
    _getBoundsOffset: function _getBoundsOffset(pxBounds, maxBounds, zoom) {
      var nwOffset = this.project(maxBounds.getNorthWest(), zoom).subtract(pxBounds.min),
        seOffset = this.project(maxBounds.getSouthEast(), zoom).subtract(pxBounds.max),
        dx = this._rebound(nwOffset.x, -seOffset.x),
        dy = this._rebound(nwOffset.y, -seOffset.y);
      return new L.Point(dx, dy);
    },
    _rebound: function _rebound(left, right) {
      return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
    },
    _limitZoom: function _limitZoom(zoom) {
      var min = this.getMinZoom(),
        max = this.getMaxZoom();
      return Math.max(min, Math.min(max, zoom));
    }
  });
  L.map = function (id, options) {
    return new L.Map(id, options);
  };

  /*
  * Mercator projection that takes into account that the Earth is not a perfect sphere.
  * Less popular than spherical mercator; used by projections like EPSG:3395.
  */

  L.Projection.Mercator = {
    MAX_LATITUDE: 85.0840591556,
    R_MINOR: 6356752.314245179,
    R_MAJOR: 6378137,
    project: function project(latlng) {
      // (LatLng) -> Point
      var d = L.LatLng.DEG_TO_RAD,
        max = this.MAX_LATITUDE,
        lat = Math.max(Math.min(max, latlng.lat), -max),
        r = this.R_MAJOR,
        r2 = this.R_MINOR,
        x = latlng.lng * d * r,
        y = lat * d,
        tmp = r2 / r,
        eccent = Math.sqrt(1.0 - tmp * tmp),
        con = eccent * Math.sin(y);
      con = Math.pow((1 - con) / (1 + con), eccent * 0.5);
      var ts = Math.tan(0.5 * (Math.PI * 0.5 - y)) / con;
      y = -r * Math.log(ts);
      return new L.Point(x, y);
    },
    unproject: function unproject(point) {
      // (Point, Boolean) -> LatLng
      var d = L.LatLng.RAD_TO_DEG,
        r = this.R_MAJOR,
        r2 = this.R_MINOR,
        lng = point.x * d / r,
        tmp = r2 / r,
        eccent = Math.sqrt(1 - tmp * tmp),
        ts = Math.exp(-point.y / r),
        phi = Math.PI / 2 - 2 * Math.atan(ts),
        numIter = 15,
        tol = 1e-7,
        i = numIter,
        dphi = 0.1,
        con;
      while (Math.abs(dphi) > tol && --i > 0) {
        con = eccent * Math.sin(phi);
        dphi = Math.PI / 2 - 2 * Math.atan(ts * Math.pow((1.0 - con) / (1.0 + con), 0.5 * eccent)) - phi;
        phi += dphi;
      }
      return new L.LatLng(phi * d, lng);
    }
  };
  L.CRS.EPSG3395 = L.extend({}, L.CRS, {
    code: 'EPSG:3395',
    projection: L.Projection.Mercator,
    transformation: function () {
      var m = L.Projection.Mercator,
        r = m.R_MAJOR,
        scale = 0.5 / (Math.PI * r);
      return new L.Transformation(scale, 0.5, -scale, 0.5);
    }()
  });

  /*
  * L.TileLayer is used for standard xyz-numbered tile layers.
  */

  L.TileLayer = L.Class.extend({
    includes: L.Mixin.Events,
    options: {
      minZoom: 0,
      maxZoom: 18,
      tileSize: 256,
      subdomains: 'abc',
      errorTileUrl: '',
      attribution: '',
      zoomOffset: 0,
      opacity: 1,
      /*
      maxNativeZoom: null,
      zIndex: null,
      tms: false,
      continuousWorld: false,
      noWrap: false,
      zoomReverse: false,
      detectRetina: false,
      reuseTiles: false,
      bounds: false,
      */
      unloadInvisibleTiles: L.Browser.mobile,
      updateWhenIdle: L.Browser.mobile
    },
    initialize: function initialize(url, options) {
      options = L.setOptions(this, options);

      // detecting retina displays, adjusting tileSize and zoom levels
      if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {
        options.tileSize = Math.floor(options.tileSize / 2);
        options.zoomOffset++;
        if (options.minZoom > 0) {
          options.minZoom--;
        }
        this.options.maxZoom--;
      }
      if (options.bounds) {
        options.bounds = L.latLngBounds(options.bounds);
      }
      this._url = url;
      var subdomains = this.options.subdomains;
      if (typeof subdomains === 'string') {
        this.options.subdomains = subdomains.split('');
      }
    },
    onAdd: function onAdd(map) {
      this._map = map;
      this._animated = map._zoomAnimated;

      // create a container div for tiles
      this._initContainer();

      // set up events
      map.on({
        'viewreset': this._reset,
        'moveend': this._update
      }, this);
      if (this._animated) {
        map.on({
          'zoomanim': this._animateZoom,
          'zoomend': this._endZoomAnim
        }, this);
      }
      if (!this.options.updateWhenIdle) {
        this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
        map.on('move', this._limitedUpdate, this);
      }
      this._reset();
      this._update();
    },
    addTo: function addTo(map) {
      map.addLayer(this);
      return this;
    },
    onRemove: function onRemove(map) {
      this._container.parentNode.removeChild(this._container);
      map.off({
        'viewreset': this._reset,
        'moveend': this._update
      }, this);
      if (this._animated) {
        map.off({
          'zoomanim': this._animateZoom,
          'zoomend': this._endZoomAnim
        }, this);
      }
      if (!this.options.updateWhenIdle) {
        map.off('move', this._limitedUpdate, this);
      }
      this._container = null;
      this._map = null;
    },
    bringToFront: function bringToFront() {
      var pane = this._map._panes.tilePane;
      if (this._container) {
        pane.appendChild(this._container);
        this._setAutoZIndex(pane, Math.max);
      }
      return this;
    },
    bringToBack: function bringToBack() {
      var pane = this._map._panes.tilePane;
      if (this._container) {
        pane.insertBefore(this._container, pane.firstChild);
        this._setAutoZIndex(pane, Math.min);
      }
      return this;
    },
    getAttribution: function getAttribution() {
      return this.options.attribution;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    setOpacity: function setOpacity(opacity) {
      this.options.opacity = opacity;
      if (this._map) {
        this._updateOpacity();
      }
      return this;
    },
    setZIndex: function setZIndex(zIndex) {
      this.options.zIndex = zIndex;
      this._updateZIndex();
      return this;
    },
    setUrl: function setUrl(url, noRedraw) {
      this._url = url;
      if (!noRedraw) {
        this.redraw();
      }
      return this;
    },
    redraw: function redraw() {
      if (this._map) {
        this._reset({
          hard: true
        });
        this._update();
      }
      return this;
    },
    _updateZIndex: function _updateZIndex() {
      if (this._container && this.options.zIndex !== undefined) {
        this._container.style.zIndex = this.options.zIndex;
      }
    },
    _setAutoZIndex: function _setAutoZIndex(pane, compare) {
      var layers = pane.children,
        edgeZIndex = -compare(Infinity, -Infinity),
        // -Infinity for max, Infinity for min
        zIndex,
        i,
        len;
      for (i = 0, len = layers.length; i < len; i++) {
        if (layers[i] !== this._container) {
          zIndex = parseInt(layers[i].style.zIndex, 10);
          if (!isNaN(zIndex)) {
            edgeZIndex = compare(edgeZIndex, zIndex);
          }
        }
      }
      this.options.zIndex = this._container.style.zIndex = (isFinite(edgeZIndex) ? edgeZIndex : 0) + compare(1, -1);
    },
    _updateOpacity: function _updateOpacity() {
      var i,
        tiles = this._tiles;
      if (L.Browser.ielt9) {
        for (i in tiles) {
          L.DomUtil.setOpacity(tiles[i], this.options.opacity);
        }
      } else {
        L.DomUtil.setOpacity(this._container, this.options.opacity);
      }
    },
    _initContainer: function _initContainer() {
      var tilePane = this._map._panes.tilePane;
      if (!this._container) {
        this._container = L.DomUtil.create('div', 'leaflet-layer');
        this._updateZIndex();
        if (this._animated) {
          var className = 'leaflet-tile-container';
          this._bgBuffer = L.DomUtil.create('div', className, this._container);
          this._tileContainer = L.DomUtil.create('div', className, this._container);
        } else {
          this._tileContainer = this._container;
        }
        tilePane.appendChild(this._container);
        if (this.options.opacity < 1) {
          this._updateOpacity();
        }
      }
    },
    _reset: function _reset(e) {
      for (var key in this._tiles) {
        this.fire('tileunload', {
          tile: this._tiles[key]
        });
      }
      this._tiles = {};
      this._tilesToLoad = 0;
      if (this.options.reuseTiles) {
        this._unusedTiles = [];
      }
      this._tileContainer.innerHTML = '';
      if (this._animated && e && e.hard) {
        this._clearBgBuffer();
      }
      this._initContainer();
    },
    _getTileSize: function _getTileSize() {
      var map = this._map,
        zoom = map.getZoom() + this.options.zoomOffset,
        zoomN = this.options.maxNativeZoom,
        tileSize = this.options.tileSize;
      if (zoomN && zoom > zoomN) {
        tileSize = Math.round(map.getZoomScale(zoom) / map.getZoomScale(zoomN) * tileSize);
      }
      return tileSize;
    },
    _update: function _update() {
      if (!this._map) {
        return;
      }
      var map = this._map,
        bounds = map.getPixelBounds(),
        zoom = map.getZoom(),
        tileSize = this._getTileSize();
      if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
        return;
      }
      var tileBounds = L.bounds(bounds.min.divideBy(tileSize)._floor(), bounds.max.divideBy(tileSize)._floor());
      this._addTilesFromCenterOut(tileBounds);
      if (this.options.unloadInvisibleTiles || this.options.reuseTiles) {
        this._removeOtherTiles(tileBounds);
      }
    },
    _addTilesFromCenterOut: function _addTilesFromCenterOut(bounds) {
      var queue = [],
        center = bounds.getCenter();
      var j, i, point;
      for (j = bounds.min.y; j <= bounds.max.y; j++) {
        for (i = bounds.min.x; i <= bounds.max.x; i++) {
          point = new L.Point(i, j);
          if (this._tileShouldBeLoaded(point)) {
            queue.push(point);
          }
        }
      }
      var tilesToLoad = queue.length;
      if (tilesToLoad === 0) {
        return;
      }

      // load tiles in order of their distance to center
      queue.sort(function (a, b) {
        return a.distanceTo(center) - b.distanceTo(center);
      });
      var fragment = document.createDocumentFragment();

      // if its the first batch of tiles to load
      if (!this._tilesToLoad) {
        this.fire('loading');
      }
      this._tilesToLoad += tilesToLoad;
      for (i = 0; i < tilesToLoad; i++) {
        this._addTile(queue[i], fragment);
      }
      this._tileContainer.appendChild(fragment);
    },
    _tileShouldBeLoaded: function _tileShouldBeLoaded(tilePoint) {
      if (tilePoint.x + ':' + tilePoint.y in this._tiles) {
        return false; // already loaded
      }
      var options = this.options;
      if (!options.continuousWorld) {
        var limit = this._getWrapTileNum();

        // don't load if exceeds world bounds
        if (options.noWrap && (tilePoint.x < 0 || tilePoint.x >= limit.x) || tilePoint.y < 0 || tilePoint.y >= limit.y) {
          return false;
        }
      }
      if (options.bounds) {
        var tileSize = this._getTileSize(),
          nwPoint = tilePoint.multiplyBy(tileSize),
          sePoint = nwPoint.add([tileSize, tileSize]),
          nw = this._map.unproject(nwPoint),
          se = this._map.unproject(sePoint);

        // TODO temporary hack, will be removed after refactoring projections
        // https://github.com/Leaflet/Leaflet/issues/1618
        if (!options.continuousWorld && !options.noWrap) {
          nw = nw.wrap();
          se = se.wrap();
        }
        if (!options.bounds.intersects([nw, se])) {
          return false;
        }
      }
      return true;
    },
    _removeOtherTiles: function _removeOtherTiles(bounds) {
      var kArr, x, y, key;
      for (key in this._tiles) {
        kArr = key.split(':');
        x = parseInt(kArr[0], 10);
        y = parseInt(kArr[1], 10);

        // remove tile if it's out of bounds
        if (x < bounds.min.x || x > bounds.max.x || y < bounds.min.y || y > bounds.max.y) {
          this._removeTile(key);
        }
      }
    },
    _removeTile: function _removeTile(key) {
      var tile = this._tiles[key];
      this.fire('tileunload', {
        tile: tile,
        url: tile.src
      });
      if (this.options.reuseTiles) {
        L.DomUtil.removeClass(tile, 'leaflet-tile-loaded');
        this._unusedTiles.push(tile);
      } else if (tile.parentNode === this._tileContainer) {
        this._tileContainer.removeChild(tile);
      }

      // for https://github.com/CloudMade/Leaflet/issues/137
      if (!L.Browser.android) {
        tile.onload = null;
        tile.src = L.Util.emptyImageUrl;
      }
      delete this._tiles[key];
    },
    _addTile: function _addTile(tilePoint, container) {
      var tilePos = this._getTilePos(tilePoint);

      // get unused tile - or create a new tile
      var tile = this._getTile();

      /*
      Chrome 20 layouts much faster with top/left (verify with timeline, frames)
      Android 4 browser has display issues with top/left and requires transform instead
      (other browsers don't currently care) - see debug/hacks/jitter.html for an example
      */
      L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome);
      this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;
      this._loadTile(tile, tilePoint);
      if (tile.parentNode !== this._tileContainer) {
        container.appendChild(tile);
      }
    },
    _getZoomForUrl: function _getZoomForUrl() {
      var options = this.options,
        zoom = this._map.getZoom();
      if (options.zoomReverse) {
        zoom = options.maxZoom - zoom;
      }
      zoom += options.zoomOffset;
      return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
    },
    _getTilePos: function _getTilePos(tilePoint) {
      var origin = this._map.getPixelOrigin(),
        tileSize = this._getTileSize();
      return tilePoint.multiplyBy(tileSize).subtract(origin);
    },
    // image-specific code (override to implement e.g. Canvas or SVG tile layer)

    getTileUrl: function getTileUrl(tilePoint) {
      return L.Util.template(this._url, L.extend({
        s: this._getSubdomain(tilePoint),
        z: tilePoint.z,
        x: tilePoint.x,
        y: tilePoint.y
      }, this.options));
    },
    _getWrapTileNum: function _getWrapTileNum() {
      var crs = this._map.options.crs,
        size = crs.getSize(this._map.getZoom());
      return size.divideBy(this._getTileSize())._floor();
    },
    _adjustTilePoint: function _adjustTilePoint(tilePoint) {
      var limit = this._getWrapTileNum();

      // wrap tile coordinates
      if (!this.options.continuousWorld && !this.options.noWrap) {
        tilePoint.x = (tilePoint.x % limit.x + limit.x) % limit.x;
      }
      if (this.options.tms) {
        tilePoint.y = limit.y - tilePoint.y - 1;
      }
      tilePoint.z = this._getZoomForUrl();
    },
    _getSubdomain: function _getSubdomain(tilePoint) {
      var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
      return this.options.subdomains[index];
    },
    _getTile: function _getTile() {
      if (this.options.reuseTiles && this._unusedTiles.length > 0) {
        var tile = this._unusedTiles.pop();
        this._resetTile(tile);
        return tile;
      }
      return this._createTile();
    },
    // Override if data stored on a tile needs to be cleaned up before reuse
    _resetTile: function _resetTile( /*tile*/) {},
    _createTile: function _createTile() {
      var tile = L.DomUtil.create('img', 'leaflet-tile');
      tile.style.width = tile.style.height = this._getTileSize() + 'px';
      tile.galleryimg = 'no';
      tile.onselectstart = tile.onmousemove = L.Util.falseFn;
      if (L.Browser.ielt9 && this.options.opacity !== undefined) {
        L.DomUtil.setOpacity(tile, this.options.opacity);
      }
      // without this hack, tiles disappear after zoom on Chrome for Android
      // https://github.com/Leaflet/Leaflet/issues/2078
      if (L.Browser.mobileWebkit3d) {
        tile.style.WebkitBackfaceVisibility = 'hidden';
      }
      return tile;
    },
    _loadTile: function _loadTile(tile, tilePoint) {
      tile._layer = this;
      tile.onload = this._tileOnLoad;
      tile.onerror = this._tileOnError;
      this._adjustTilePoint(tilePoint);
      tile.src = this.getTileUrl(tilePoint);
      this.fire('tileloadstart', {
        tile: tile,
        url: tile.src
      });
    },
    _tileLoaded: function _tileLoaded() {
      this._tilesToLoad--;
      if (this._animated) {
        L.DomUtil.addClass(this._tileContainer, 'leaflet-zoom-animated');
      }
      if (!this._tilesToLoad) {
        this.fire('load');
        if (this._animated) {
          // clear scaled tiles after all new tiles are loaded (for performance)
          clearTimeout(this._clearBgBufferTimer);
          this._clearBgBufferTimer = setTimeout(L.bind(this._clearBgBuffer, this), 500);
        }
      }
    },
    _tileOnLoad: function _tileOnLoad() {
      var layer = this._layer;

      //Only if we are loading an actual image
      if (this.src !== L.Util.emptyImageUrl) {
        L.DomUtil.addClass(this, 'leaflet-tile-loaded');
        layer.fire('tileload', {
          tile: this,
          url: this.src
        });
      }
      layer._tileLoaded();
    },
    _tileOnError: function _tileOnError() {
      var layer = this._layer;
      layer.fire('tileerror', {
        tile: this,
        url: this.src
      });
      var newUrl = layer.options.errorTileUrl;
      if (newUrl) {
        this.src = newUrl;
      }
      layer._tileLoaded();
    }
  });
  L.tileLayer = function (url, options) {
    return new L.TileLayer(url, options);
  };

  /*
  * L.TileLayer.WMS is used for putting WMS tile layers on the map.
  */

  L.TileLayer.WMS = L.TileLayer.extend({
    defaultWmsParams: {
      service: 'WMS',
      request: 'GetMap',
      version: '1.1.1',
      layers: '',
      styles: '',
      format: 'image/jpeg',
      transparent: false
    },
    initialize: function initialize(url, options) {
      // (String, Object)

      this._url = url;
      var wmsParams = L.extend({}, this.defaultWmsParams),
        tileSize = options.tileSize || this.options.tileSize;
      if (options.detectRetina && L.Browser.retina) {
        wmsParams.width = wmsParams.height = tileSize * 2;
      } else {
        wmsParams.width = wmsParams.height = tileSize;
      }
      for (var i in options) {
        // all keys that are not TileLayer options go to WMS params
        if (!this.options.hasOwnProperty(i) && i !== 'crs') {
          wmsParams[i] = options[i];
        }
      }
      this.wmsParams = wmsParams;
      L.setOptions(this, options);
    },
    onAdd: function onAdd(map) {
      this._crs = this.options.crs || map.options.crs;
      this._wmsVersion = parseFloat(this.wmsParams.version);
      var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
      this.wmsParams[projectionKey] = this._crs.code;
      L.TileLayer.prototype.onAdd.call(this, map);
    },
    getTileUrl: function getTileUrl(tilePoint) {
      // (Point, Number) -> String

      var map = this._map,
        tileSize = this.options.tileSize,
        nwPoint = tilePoint.multiplyBy(tileSize),
        sePoint = nwPoint.add([tileSize, tileSize]),
        nw = this._crs.project(map.unproject(nwPoint, tilePoint.z)),
        se = this._crs.project(map.unproject(sePoint, tilePoint.z)),
        bbox = this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ? [se.y, nw.x, nw.y, se.x].join(',') : [nw.x, se.y, se.x, nw.y].join(','),
        url = L.Util.template(this._url, {
          s: this._getSubdomain(tilePoint)
        });
      return url + L.Util.getParamString(this.wmsParams, url, true) + '&BBOX=' + bbox;
    },
    setParams: function setParams(params, noRedraw) {
      L.extend(this.wmsParams, params);
      if (!noRedraw) {
        this.redraw();
      }
      return this;
    }
  });
  L.tileLayer.wms = function (url, options) {
    return new L.TileLayer.WMS(url, options);
  };

  /*
  * L.TileLayer.Canvas is a class that you can use as a base for creating
  * dynamically drawn Canvas-based tile layers.
  */

  L.TileLayer.Canvas = L.TileLayer.extend({
    options: {
      async: false
    },
    initialize: function initialize(options) {
      L.setOptions(this, options);
    },
    redraw: function redraw() {
      if (this._map) {
        this._reset({
          hard: true
        });
        this._update();
      }
      for (var i in this._tiles) {
        this._redrawTile(this._tiles[i]);
      }
      return this;
    },
    _redrawTile: function _redrawTile(tile) {
      this.drawTile(tile, tile._tilePoint, this._map._zoom);
    },
    _createTile: function _createTile() {
      var tile = L.DomUtil.create('canvas', 'leaflet-tile');
      tile.width = tile.height = this.options.tileSize;
      tile.onselectstart = tile.onmousemove = L.Util.falseFn;
      return tile;
    },
    _loadTile: function _loadTile(tile, tilePoint) {
      tile._layer = this;
      tile._tilePoint = tilePoint;
      this._redrawTile(tile);
      if (!this.options.async) {
        this.tileDrawn(tile);
      }
    },
    drawTile: function drawTile( /*tile, tilePoint*/
    ) {
      // override with rendering code
    },
    tileDrawn: function tileDrawn(tile) {
      this._tileOnLoad.call(tile);
    }
  });
  L.tileLayer.canvas = function (options) {
    return new L.TileLayer.Canvas(options);
  };

  /*
  * L.ImageOverlay is used to overlay images over the map (to specific geographical bounds).
  */

  L.ImageOverlay = L.Class.extend({
    includes: L.Mixin.Events,
    options: {
      opacity: 1
    },
    initialize: function initialize(url, bounds, options) {
      // (String, LatLngBounds, Object)
      this._url = url;
      this._bounds = L.latLngBounds(bounds);
      L.setOptions(this, options);
    },
    onAdd: function onAdd(map) {
      this._map = map;
      if (!this._image) {
        this._initImage();
      }
      map._panes.overlayPane.appendChild(this._image);
      map.on('viewreset', this._reset, this);
      if (map.options.zoomAnimation && L.Browser.any3d) {
        map.on('zoomanim', this._animateZoom, this);
      }
      this._reset();
    },
    onRemove: function onRemove(map) {
      map.getPanes().overlayPane.removeChild(this._image);
      map.off('viewreset', this._reset, this);
      if (map.options.zoomAnimation) {
        map.off('zoomanim', this._animateZoom, this);
      }
    },
    addTo: function addTo(map) {
      map.addLayer(this);
      return this;
    },
    setOpacity: function setOpacity(opacity) {
      this.options.opacity = opacity;
      this._updateOpacity();
      return this;
    },
    // TODO remove bringToFront/bringToBack duplication from TileLayer/Path
    bringToFront: function bringToFront() {
      if (this._image) {
        this._map._panes.overlayPane.appendChild(this._image);
      }
      return this;
    },
    bringToBack: function bringToBack() {
      var pane = this._map._panes.overlayPane;
      if (this._image) {
        pane.insertBefore(this._image, pane.firstChild);
      }
      return this;
    },
    setUrl: function setUrl(url) {
      this._url = url;
      this._image.src = this._url;
    },
    getAttribution: function getAttribution() {
      return this.options.attribution;
    },
    _initImage: function _initImage() {
      this._image = L.DomUtil.create('img', 'leaflet-image-layer');
      if (this._map.options.zoomAnimation && L.Browser.any3d) {
        L.DomUtil.addClass(this._image, 'leaflet-zoom-animated');
      } else {
        L.DomUtil.addClass(this._image, 'leaflet-zoom-hide');
      }
      this._updateOpacity();

      //TODO createImage util method to remove duplication
      L.extend(this._image, {
        galleryimg: 'no',
        onselectstart: L.Util.falseFn,
        onmousemove: L.Util.falseFn,
        onload: L.bind(this._onImageLoad, this),
        src: this._url
      });
    },
    _animateZoom: function _animateZoom(e) {
      var map = this._map,
        image = this._image,
        scale = map.getZoomScale(e.zoom),
        nw = this._bounds.getNorthWest(),
        se = this._bounds.getSouthEast(),
        topLeft = map._latLngToNewLayerPoint(nw, e.zoom, e.center),
        size = map._latLngToNewLayerPoint(se, e.zoom, e.center)._subtract(topLeft),
        origin = topLeft._add(size._multiplyBy(1 / 2 * (1 - 1 / scale)));
      image.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(origin) + ' scale(' + scale + ') ';
    },
    _reset: function _reset() {
      var image = this._image,
        topLeft = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
        size = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(topLeft);
      L.DomUtil.setPosition(image, topLeft);
      image.style.width = size.x + 'px';
      image.style.height = size.y + 'px';
    },
    _onImageLoad: function _onImageLoad() {
      this.fire('load');
    },
    _updateOpacity: function _updateOpacity() {
      L.DomUtil.setOpacity(this._image, this.options.opacity);
    }
  });
  L.imageOverlay = function (url, bounds, options) {
    return new L.ImageOverlay(url, bounds, options);
  };

  /*
  * L.Icon is an image-based icon class that you can use with L.Marker for custom markers.
  */

  L.Icon = L.Class.extend({
    options: {
      /*
      iconUrl: (String) (required)
      iconRetinaUrl: (String) (optional, used for retina devices if detected)
      iconSize: (Point) (can be set through CSS)
      iconAnchor: (Point) (centered by default, can be set in CSS with negative margins)
      popupAnchor: (Point) (if not specified, popup opens in the anchor point)
      shadowUrl: (String) (no shadow by default)
      shadowRetinaUrl: (String) (optional, used for retina devices if detected)
      shadowSize: (Point)
      shadowAnchor: (Point)
      */
      className: ''
    },
    initialize: function initialize(options) {
      L.setOptions(this, options);
    },
    createIcon: function createIcon(oldIcon) {
      return this._createIcon('icon', oldIcon);
    },
    createShadow: function createShadow(oldIcon) {
      return this._createIcon('shadow', oldIcon);
    },
    _createIcon: function _createIcon(name, oldIcon) {
      var src = this._getIconUrl(name);
      if (!src) {
        if (name === 'icon') {
          throw new Error('iconUrl not set in Icon options (see the docs).');
        }
        return null;
      }
      var img;
      if (!oldIcon || oldIcon.tagName !== 'IMG') {
        img = this._createImg(src);
      } else {
        img = this._createImg(src, oldIcon);
      }
      this._setIconStyles(img, name);
      return img;
    },
    _setIconStyles: function _setIconStyles(img, name) {
      var options = this.options,
        size = L.point(options[name + 'Size']),
        anchor;
      if (name === 'shadow') {
        anchor = L.point(options.shadowAnchor || options.iconAnchor);
      } else {
        anchor = L.point(options.iconAnchor);
      }
      if (!anchor && size) {
        anchor = size.divideBy(2, true);
      }
      img.className = 'leaflet-marker-' + name + ' ' + options.className;
      if (anchor) {
        img.style.marginLeft = -anchor.x + 'px';
        img.style.marginTop = -anchor.y + 'px';
      }
      if (size) {
        img.style.width = size.x + 'px';
        img.style.height = size.y + 'px';
      }
    },
    _createImg: function _createImg(src, el) {
      el = el || document.createElement('img');
      el.src = src;
      return el;
    },
    _getIconUrl: function _getIconUrl(name) {
      if (L.Browser.retina && this.options[name + 'RetinaUrl']) {
        return this.options[name + 'RetinaUrl'];
      }
      return this.options[name + 'Url'];
    }
  });
  L.icon = function (options) {
    return new L.Icon(options);
  };

  /*
  * L.Icon.Default is the blue marker icon used by default in Leaflet.
  */

  L.Icon.Default = L.Icon.extend({
    options: {
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    },
    _getIconUrl: function _getIconUrl(name) {
      var key = name + 'Url';
      if (this.options[key]) {
        return this.options[key];
      }
      if (L.Browser.retina && name === 'icon') {
        name += '-2x';
      }

      // HUE Specific change for static files
      return window.LEAFLET_DEFAULTS.images[name];
    }
  });
  L.Icon.Default.imagePath = function () {
    var scripts = document.getElementsByTagName('script'),
      leafletRe = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
    var i, len, src, matches, path;
    for (i = 0, len = scripts.length; i < len; i++) {
      src = scripts[i].src;
      matches = src.match(leafletRe);
      if (matches) {
        path = src.split(leafletRe)[0];
        return (path ? path + '/' : '') + 'images';
      }
    }
  }();

  /*
  * L.Marker is used to display clickable/draggable icons on the map.
  */

  L.Marker = L.Class.extend({
    includes: L.Mixin.Events,
    options: {
      icon: new L.Icon.Default(),
      title: '',
      alt: '',
      clickable: true,
      draggable: false,
      keyboard: true,
      zIndexOffset: 0,
      opacity: 1,
      riseOnHover: false,
      riseOffset: 250
    },
    initialize: function initialize(latlng, options) {
      L.setOptions(this, options);
      this._latlng = L.latLng(latlng);
    },
    onAdd: function onAdd(map) {
      this._map = map;
      map.on('viewreset', this.update, this);
      this._initIcon();
      this.update();
      this.fire('add');
      if (map.options.zoomAnimation && map.options.markerZoomAnimation) {
        map.on('zoomanim', this._animateZoom, this);
      }
    },
    addTo: function addTo(map) {
      map.addLayer(this);
      return this;
    },
    onRemove: function onRemove(map) {
      if (this.dragging) {
        this.dragging.disable();
      }
      this._removeIcon();
      this._removeShadow();
      this.fire('remove');
      map.off({
        'viewreset': this.update,
        'zoomanim': this._animateZoom
      }, this);
      this._map = null;
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(latlng) {
      this._latlng = L.latLng(latlng);
      this.update();
      return this.fire('move', {
        latlng: this._latlng
      });
    },
    setZIndexOffset: function setZIndexOffset(offset) {
      this.options.zIndexOffset = offset;
      this.update();
      return this;
    },
    setIcon: function setIcon(icon) {
      this.options.icon = icon;
      if (this._map) {
        this._initIcon();
        this.update();
      }
      if (this._popup) {
        this.bindPopup(this._popup);
      }
      return this;
    },
    update: function update() {
      if (this._icon) {
        this._setPos(this._map.latLngToLayerPoint(this._latlng).round());
      }
      return this;
    },
    _initIcon: function _initIcon() {
      var options = this.options,
        map = this._map,
        animation = map.options.zoomAnimation && map.options.markerZoomAnimation,
        classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';
      var icon = options.icon.createIcon(this._icon),
        addIcon = false;

      // if we're not reusing the icon, remove the old one and init new one
      if (icon !== this._icon) {
        if (this._icon) {
          this._removeIcon();
        }
        addIcon = true;
        if (options.title) {
          icon.title = options.title;
        }
        if (options.alt) {
          icon.alt = options.alt;
        }
      }
      L.DomUtil.addClass(icon, classToAdd);
      if (options.keyboard) {
        icon.tabIndex = '0';
      }
      this._icon = icon;
      this._initInteraction();
      if (options.riseOnHover) {
        L.DomEvent.on(icon, 'mouseover', this._bringToFront, this).on(icon, 'mouseout', this._resetZIndex, this);
      }
      var newShadow = options.icon.createShadow(this._shadow),
        addShadow = false;
      if (newShadow !== this._shadow) {
        this._removeShadow();
        addShadow = true;
      }
      if (newShadow) {
        L.DomUtil.addClass(newShadow, classToAdd);
      }
      this._shadow = newShadow;
      if (options.opacity < 1) {
        this._updateOpacity();
      }
      var panes = this._map._panes;
      if (addIcon) {
        panes.markerPane.appendChild(this._icon);
      }
      if (newShadow && addShadow) {
        panes.shadowPane.appendChild(this._shadow);
      }
    },
    _removeIcon: function _removeIcon() {
      if (this.options.riseOnHover) {
        L.DomEvent.off(this._icon, 'mouseover', this._bringToFront).off(this._icon, 'mouseout', this._resetZIndex);
      }
      this._map._panes.markerPane.removeChild(this._icon);
      this._icon = null;
    },
    _removeShadow: function _removeShadow() {
      if (this._shadow) {
        this._map._panes.shadowPane.removeChild(this._shadow);
      }
      this._shadow = null;
    },
    _setPos: function _setPos(pos) {
      L.DomUtil.setPosition(this._icon, pos);
      if (this._shadow) {
        L.DomUtil.setPosition(this._shadow, pos);
      }
      this._zIndex = pos.y + this.options.zIndexOffset;
      this._resetZIndex();
    },
    _updateZIndex: function _updateZIndex(offset) {
      this._icon.style.zIndex = this._zIndex + offset;
    },
    _animateZoom: function _animateZoom(opt) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();
      this._setPos(pos);
    },
    _initInteraction: function _initInteraction() {
      if (!this.options.clickable) {
        return;
      }

      // TODO refactor into something shared with Map/Path/etc. to DRY it up

      var icon = this._icon,
        events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu'];
      L.DomUtil.addClass(icon, 'leaflet-clickable');
      L.DomEvent.on(icon, 'click', this._onMouseClick, this);
      L.DomEvent.on(icon, 'keypress', this._onKeyPress, this);
      for (var i = 0; i < events.length; i++) {
        L.DomEvent.on(icon, events[i], this._fireMouseEvent, this);
      }
      if (L.Handler.MarkerDrag) {
        this.dragging = new L.Handler.MarkerDrag(this);
        if (this.options.draggable) {
          this.dragging.enable();
        }
      }
    },
    _onMouseClick: function _onMouseClick(e) {
      var wasDragged = this.dragging && this.dragging.moved();
      if (this.hasEventListeners(e.type) || wasDragged) {
        L.DomEvent.stopPropagation(e);
      }
      if (wasDragged) {
        return;
      }
      if ((!this.dragging || !this.dragging._enabled) && this._map.dragging && this._map.dragging.moved()) {
        return;
      }
      this.fire(e.type, {
        originalEvent: e,
        latlng: this._latlng
      });
    },
    _onKeyPress: function _onKeyPress(e) {
      if (e.keyCode === 13) {
        this.fire('click', {
          originalEvent: e,
          latlng: this._latlng
        });
      }
    },
    _fireMouseEvent: function _fireMouseEvent(e) {
      this.fire(e.type, {
        originalEvent: e,
        latlng: this._latlng
      });

      // TODO proper custom event propagation
      // this line will always be called if marker is in a FeatureGroup
      if (e.type === 'contextmenu' && this.hasEventListeners(e.type)) {
        L.DomEvent.preventDefault(e);
      }
      if (e.type !== 'mousedown') {
        L.DomEvent.stopPropagation(e);
      } else {
        L.DomEvent.preventDefault(e);
      }
    },
    setOpacity: function setOpacity(opacity) {
      this.options.opacity = opacity;
      if (this._map) {
        this._updateOpacity();
      }
      return this;
    },
    _updateOpacity: function _updateOpacity() {
      L.DomUtil.setOpacity(this._icon, this.options.opacity);
      if (this._shadow) {
        L.DomUtil.setOpacity(this._shadow, this.options.opacity);
      }
    },
    _bringToFront: function _bringToFront() {
      this._updateZIndex(this.options.riseOffset);
    },
    _resetZIndex: function _resetZIndex() {
      this._updateZIndex(0);
    }
  });
  L.marker = function (latlng, options) {
    return new L.Marker(latlng, options);
  };

  /*
  * L.DivIcon is a lightweight HTML-based icon class (as opposed to the image-based L.Icon)
  * to use with L.Marker.
  */

  L.DivIcon = L.Icon.extend({
    options: {
      iconSize: [12, 12],
      // also can be set through CSS
      /*
      iconAnchor: (Point)
      popupAnchor: (Point)
      html: (String)
      bgPos: (Point)
      */
      className: 'leaflet-div-icon',
      html: false
    },
    createIcon: function createIcon(oldIcon) {
      var div = oldIcon && oldIcon.tagName === 'DIV' ? oldIcon : document.createElement('div'),
        options = this.options;
      if (options.html !== false) {
        div.innerHTML = options.html;
      } else {
        div.innerHTML = '';
      }
      if (options.bgPos) {
        div.style.backgroundPosition = -options.bgPos.x + 'px ' + -options.bgPos.y + 'px';
      }
      this._setIconStyles(div, 'icon');
      return div;
    },
    createShadow: function createShadow() {
      return null;
    }
  });
  L.divIcon = function (options) {
    return new L.DivIcon(options);
  };

  /*
  * L.Popup is used for displaying popups on the map.
  */

  L.Map.mergeOptions({
    closePopupOnClick: true
  });
  L.Popup = L.Class.extend({
    includes: L.Mixin.Events,
    options: {
      minWidth: 50,
      maxWidth: 300,
      // maxHeight: null,
      autoPan: true,
      closeButton: true,
      offset: [0, 7],
      autoPanPadding: [5, 5],
      // autoPanPaddingTopLeft: null,
      // autoPanPaddingBottomRight: null,
      keepInView: false,
      className: '',
      zoomAnimation: true
    },
    initialize: function initialize(options, source) {
      L.setOptions(this, options);
      this._source = source;
      this._animated = L.Browser.any3d && this.options.zoomAnimation;
      this._isOpen = false;
    },
    onAdd: function onAdd(map) {
      this._map = map;
      if (!this._container) {
        this._initLayout();
      }
      var animFade = map.options.fadeAnimation;
      if (animFade) {
        L.DomUtil.setOpacity(this._container, 0);
      }
      map._panes.popupPane.appendChild(this._container);
      map.on(this._getEvents(), this);
      this.update();
      if (animFade) {
        L.DomUtil.setOpacity(this._container, 1);
      }
      this.fire('open');
      map.fire('popupopen', {
        popup: this
      });
      if (this._source) {
        this._source.fire('popupopen', {
          popup: this
        });
      }
    },
    addTo: function addTo(map) {
      map.addLayer(this);
      return this;
    },
    openOn: function openOn(map) {
      map.openPopup(this);
      return this;
    },
    onRemove: function onRemove(map) {
      map._panes.popupPane.removeChild(this._container);
      L.Util.falseFn(this._container.offsetWidth); // force reflow

      map.off(this._getEvents(), this);
      if (map.options.fadeAnimation) {
        L.DomUtil.setOpacity(this._container, 0);
      }
      this._map = null;
      this.fire('close');
      map.fire('popupclose', {
        popup: this
      });
      if (this._source) {
        this._source.fire('popupclose', {
          popup: this
        });
      }
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(latlng) {
      this._latlng = L.latLng(latlng);
      if (this._map) {
        this._updatePosition();
        this._adjustPan();
      }
      return this;
    },
    getContent: function getContent() {
      return this._content;
    },
    setContent: function setContent(content) {
      this._content = content;
      this.update();
      return this;
    },
    update: function update() {
      if (!this._map) {
        return;
      }
      this._container.style.visibility = 'hidden';
      this._updateContent();
      this._updateLayout();
      this._updatePosition();
      this._container.style.visibility = '';
      this._adjustPan();
    },
    _getEvents: function _getEvents() {
      var events = {
        viewreset: this._updatePosition
      };
      if (this._animated) {
        events.zoomanim = this._zoomAnimation;
      }
      if ('closeOnClick' in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
        events.preclick = this._close;
      }
      if (this.options.keepInView) {
        events.moveend = this._adjustPan;
      }
      return events;
    },
    _close: function _close() {
      if (this._map) {
        this._map.closePopup(this);
      }
    },
    _initLayout: function _initLayout() {
      var prefix = 'leaflet-popup',
        containerClass = prefix + ' ' + this.options.className + ' leaflet-zoom-' + (this._animated ? 'animated' : 'hide'),
        container = this._container = L.DomUtil.create('div', containerClass),
        closeButton;
      if (this.options.closeButton) {
        closeButton = this._closeButton = L.DomUtil.create('a', prefix + '-close-button', container);
        closeButton.href = '#close';
        closeButton.innerHTML = '&#215;';
        L.DomEvent.disableClickPropagation(closeButton);
        L.DomEvent.on(closeButton, 'click', this._onCloseButtonClick, this);
      }
      var wrapper = this._wrapper = L.DomUtil.create('div', prefix + '-content-wrapper', container);
      L.DomEvent.disableClickPropagation(wrapper);
      this._contentNode = L.DomUtil.create('div', prefix + '-content', wrapper);
      L.DomEvent.disableScrollPropagation(this._contentNode);
      L.DomEvent.on(wrapper, 'contextmenu', L.DomEvent.stopPropagation);
      this._tipContainer = L.DomUtil.create('div', prefix + '-tip-container', container);
      this._tip = L.DomUtil.create('div', prefix + '-tip', this._tipContainer);
    },
    _updateContent: function _updateContent() {
      if (!this._content) {
        return;
      }
      if (typeof this._content === 'string') {
        this._contentNode.innerHTML = this._content;
      } else {
        while (this._contentNode.hasChildNodes()) {
          this._contentNode.removeChild(this._contentNode.firstChild);
        }
        this._contentNode.appendChild(this._content);
      }
      this.fire('contentupdate');
    },
    _updateLayout: function _updateLayout() {
      var container = this._contentNode,
        style = container.style;
      style.width = '';
      style.whiteSpace = 'nowrap';
      var width = container.offsetWidth;
      width = Math.min(width, this.options.maxWidth);
      width = Math.max(width, this.options.minWidth);
      style.width = width + 1 + 'px';
      style.whiteSpace = '';
      style.height = '';
      var height = container.offsetHeight,
        maxHeight = this.options.maxHeight,
        scrolledClass = 'leaflet-popup-scrolled';
      if (maxHeight && height > maxHeight) {
        style.height = maxHeight + 'px';
        L.DomUtil.addClass(container, scrolledClass);
      } else {
        L.DomUtil.removeClass(container, scrolledClass);
      }
      this._containerWidth = this._container.offsetWidth;
    },
    _updatePosition: function _updatePosition() {
      if (!this._map) {
        return;
      }
      var pos = this._map.latLngToLayerPoint(this._latlng),
        animated = this._animated,
        offset = L.point(this.options.offset);
      if (animated) {
        L.DomUtil.setPosition(this._container, pos);
      }
      this._containerBottom = -offset.y - (animated ? 0 : pos.y);
      this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x + (animated ? 0 : pos.x);

      // bottom position the popup in case the height of the popup changes (images loading etc)
      this._container.style.bottom = this._containerBottom + 'px';
      this._container.style.left = this._containerLeft + 'px';
    },
    _zoomAnimation: function _zoomAnimation(opt) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center);
      L.DomUtil.setPosition(this._container, pos);
    },
    _adjustPan: function _adjustPan() {
      if (!this.options.autoPan) {
        return;
      }
      var map = this._map,
        containerHeight = this._container.offsetHeight,
        containerWidth = this._containerWidth,
        layerPos = new L.Point(this._containerLeft, -containerHeight - this._containerBottom);
      if (this._animated) {
        layerPos._add(L.DomUtil.getPosition(this._container));
      }
      var containerPos = map.layerPointToContainerPoint(layerPos),
        padding = L.point(this.options.autoPanPadding),
        paddingTL = L.point(this.options.autoPanPaddingTopLeft || padding),
        paddingBR = L.point(this.options.autoPanPaddingBottomRight || padding),
        size = map.getSize(),
        dx = 0,
        dy = 0;
      if (containerPos.x + containerWidth + paddingBR.x > size.x) {
        // right
        dx = containerPos.x + containerWidth - size.x + paddingBR.x;
      }
      if (containerPos.x - dx - paddingTL.x < 0) {
        // left
        dx = containerPos.x - paddingTL.x;
      }
      if (containerPos.y + containerHeight + paddingBR.y > size.y) {
        // bottom
        dy = containerPos.y + containerHeight - size.y + paddingBR.y;
      }
      if (containerPos.y - dy - paddingTL.y < 0) {
        // top
        dy = containerPos.y - paddingTL.y;
      }
      if (dx || dy) {
        map.fire('autopanstart').panBy([dx, dy]);
      }
    },
    _onCloseButtonClick: function _onCloseButtonClick(e) {
      this._close();
      L.DomEvent.stop(e);
    }
  });
  L.popup = function (options, source) {
    return new L.Popup(options, source);
  };
  L.Map.include({
    openPopup: function openPopup(popup, latlng, options) {
      // (Popup) or (String || HTMLElement, LatLng[, Object])
      this.closePopup();
      if (!(popup instanceof L.Popup)) {
        var content = popup;
        popup = new L.Popup(options).setLatLng(latlng).setContent(content);
      }
      popup._isOpen = true;
      this._popup = popup;
      return this.addLayer(popup);
    },
    closePopup: function closePopup(popup) {
      if (!popup || popup === this._popup) {
        popup = this._popup;
        this._popup = null;
      }
      if (popup) {
        this.removeLayer(popup);
        popup._isOpen = false;
      }
      return this;
    }
  });

  /*
  * Popup extension to L.Marker, adding popup-related methods.
  */

  L.Marker.include({
    openPopup: function openPopup() {
      if (this._popup && this._map && !this._map.hasLayer(this._popup)) {
        this._popup.setLatLng(this._latlng);
        this._map.openPopup(this._popup);
      }
      return this;
    },
    closePopup: function closePopup() {
      if (this._popup) {
        this._popup._close();
      }
      return this;
    },
    togglePopup: function togglePopup() {
      if (this._popup) {
        if (this._popup._isOpen) {
          this.closePopup();
        } else {
          this.openPopup();
        }
      }
      return this;
    },
    bindPopup: function bindPopup(content, options) {
      var anchor = L.point(this.options.icon.options.popupAnchor || [0, 0]);
      anchor = anchor.add(L.Popup.prototype.options.offset);
      if (options && options.offset) {
        anchor = anchor.add(options.offset);
      }
      options = L.extend({
        offset: anchor
      }, options);
      if (!this._popupHandlersAdded) {
        this.on('click', this.togglePopup, this).on('remove', this.closePopup, this).on('move', this._movePopup, this);
        this._popupHandlersAdded = true;
      }
      if (content instanceof L.Popup) {
        L.setOptions(content, options);
        this._popup = content;
        content._source = this;
      } else {
        this._popup = new L.Popup(options, this).setContent(content);
      }
      return this;
    },
    setPopupContent: function setPopupContent(content) {
      if (this._popup) {
        this._popup.setContent(content);
      }
      return this;
    },
    unbindPopup: function unbindPopup() {
      if (this._popup) {
        this._popup = null;
        this.off('click', this.togglePopup, this).off('remove', this.closePopup, this).off('move', this._movePopup, this);
        this._popupHandlersAdded = false;
      }
      return this;
    },
    getPopup: function getPopup() {
      return this._popup;
    },
    _movePopup: function _movePopup(e) {
      this._popup.setLatLng(e.latlng);
    }
  });

  /*
  * L.LayerGroup is a class to combine several layers into one so that
  * you can manipulate the group (e.g. add/remove it) as one layer.
  */

  L.LayerGroup = L.Class.extend({
    initialize: function initialize(layers) {
      this._layers = {};
      var i, len;
      if (layers) {
        for (i = 0, len = layers.length; i < len; i++) {
          this.addLayer(layers[i]);
        }
      }
    },
    addLayer: function addLayer(layer) {
      var id = this.getLayerId(layer);
      this._layers[id] = layer;
      if (this._map) {
        this._map.addLayer(layer);
      }
      return this;
    },
    removeLayer: function removeLayer(layer) {
      var id = layer in this._layers ? layer : this.getLayerId(layer);
      if (this._map && this._layers[id]) {
        this._map.removeLayer(this._layers[id]);
      }
      delete this._layers[id];
      return this;
    },
    hasLayer: function hasLayer(layer) {
      if (!layer) {
        return false;
      }
      return layer in this._layers || this.getLayerId(layer) in this._layers;
    },
    clearLayers: function clearLayers() {
      this.eachLayer(this.removeLayer, this);
      return this;
    },
    invoke: function invoke(methodName) {
      var args = Array.prototype.slice.call(arguments, 1),
        i,
        layer;
      for (i in this._layers) {
        layer = this._layers[i];
        if (layer[methodName]) {
          layer[methodName].apply(layer, args);
        }
      }
      return this;
    },
    onAdd: function onAdd(map) {
      this._map = map;
      this.eachLayer(map.addLayer, map);
    },
    onRemove: function onRemove(map) {
      this.eachLayer(map.removeLayer, map);
      this._map = null;
    },
    addTo: function addTo(map) {
      map.addLayer(this);
      return this;
    },
    eachLayer: function eachLayer(method, context) {
      for (var i in this._layers) {
        method.call(context, this._layers[i]);
      }
      return this;
    },
    getLayer: function getLayer(id) {
      return this._layers[id];
    },
    getLayers: function getLayers() {
      var layers = [];
      for (var i in this._layers) {
        layers.push(this._layers[i]);
      }
      return layers;
    },
    setZIndex: function setZIndex(zIndex) {
      return this.invoke('setZIndex', zIndex);
    },
    getLayerId: function getLayerId(layer) {
      return L.stamp(layer);
    }
  });
  L.layerGroup = function (layers) {
    return new L.LayerGroup(layers);
  };

  /*
  * L.FeatureGroup extends L.LayerGroup by introducing mouse events and additional methods
  * shared between a group of interactive layers (like vectors or markers).
  */

  L.FeatureGroup = L.LayerGroup.extend({
    includes: L.Mixin.Events,
    statics: {
      EVENTS: 'click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose'
    },
    addLayer: function addLayer(layer) {
      if (this.hasLayer(layer)) {
        return this;
      }
      if ('on' in layer) {
        layer.on(L.FeatureGroup.EVENTS, this._propagateEvent, this);
      }
      L.LayerGroup.prototype.addLayer.call(this, layer);
      if (this._popupContent && layer.bindPopup) {
        layer.bindPopup(this._popupContent, this._popupOptions);
      }
      return this.fire('layeradd', {
        layer: layer
      });
    },
    removeLayer: function removeLayer(layer) {
      if (!this.hasLayer(layer)) {
        return this;
      }
      if (layer in this._layers) {
        layer = this._layers[layer];
      }
      if ('off' in layer) {
        layer.off(L.FeatureGroup.EVENTS, this._propagateEvent, this);
      }
      L.LayerGroup.prototype.removeLayer.call(this, layer);
      if (this._popupContent) {
        this.invoke('unbindPopup');
      }
      return this.fire('layerremove', {
        layer: layer
      });
    },
    bindPopup: function bindPopup(content, options) {
      this._popupContent = content;
      this._popupOptions = options;
      return this.invoke('bindPopup', content, options);
    },
    openPopup: function openPopup(latlng) {
      // open popup on the first layer
      for (var id in this._layers) {
        this._layers[id].openPopup(latlng);
        break;
      }
      return this;
    },
    setStyle: function setStyle(style) {
      return this.invoke('setStyle', style);
    },
    bringToFront: function bringToFront() {
      return this.invoke('bringToFront');
    },
    bringToBack: function bringToBack() {
      return this.invoke('bringToBack');
    },
    getBounds: function getBounds() {
      var bounds = new L.LatLngBounds();
      this.eachLayer(function (layer) {
        bounds.extend(layer instanceof L.Marker ? layer.getLatLng() : layer.getBounds());
      });
      return bounds;
    },
    _propagateEvent: function _propagateEvent(e) {
      e = L.extend({
        layer: e.target,
        target: this
      }, e);
      this.fire(e.type, e);
    }
  });
  L.featureGroup = function (layers) {
    return new L.FeatureGroup(layers);
  };

  /*
  * L.Path is a base class for rendering vector paths on a map. Inherited by Polyline, Circle, etc.
  */

  L.Path = L.Class.extend({
    includes: [L.Mixin.Events],
    statics: {
      // how much to extend the clip area around the map view
      // (relative to its size, e.g. 0.5 is half the screen in each direction)
      // set it so that SVG element doesn't exceed 1280px (vectors flicker on dragend if it is)
      CLIP_PADDING: function () {
        var max = L.Browser.mobile ? 1280 : 2000,
          target = (max / Math.max(window.outerWidth, window.outerHeight) - 1) / 2;
        return Math.max(0, Math.min(0.5, target));
      }()
    },
    options: {
      stroke: true,
      color: '#0033ff',
      dashArray: null,
      lineCap: null,
      lineJoin: null,
      weight: 5,
      opacity: 0.5,
      fill: false,
      fillColor: null,
      //same as color by default
      fillOpacity: 0.2,
      clickable: true
    },
    initialize: function initialize(options) {
      L.setOptions(this, options);
    },
    onAdd: function onAdd(map) {
      this._map = map;
      if (!this._container) {
        this._initElements();
        this._initEvents();
      }
      this.projectLatlngs();
      this._updatePath();
      if (this._container) {
        this._map._pathRoot.appendChild(this._container);
      }
      this.fire('add');
      map.on({
        'viewreset': this.projectLatlngs,
        'moveend': this._updatePath
      }, this);
    },
    addTo: function addTo(map) {
      map.addLayer(this);
      return this;
    },
    onRemove: function onRemove(map) {
      map._pathRoot.removeChild(this._container);

      // Need to fire remove event before we set _map to null as the event hooks might need the object
      this.fire('remove');
      this._map = null;
      if (L.Browser.vml) {
        this._container = null;
        this._stroke = null;
        this._fill = null;
      }
      map.off({
        'viewreset': this.projectLatlngs,
        'moveend': this._updatePath
      }, this);
    },
    projectLatlngs: function projectLatlngs() {
      // do all projection stuff here
    },
    setStyle: function setStyle(style) {
      L.setOptions(this, style);
      if (this._container) {
        this._updateStyle();
      }
      return this;
    },
    redraw: function redraw() {
      if (this._map) {
        this.projectLatlngs();
        this._updatePath();
      }
      return this;
    }
  });
  L.Map.include({
    _updatePathViewport: function _updatePathViewport() {
      var p = L.Path.CLIP_PADDING,
        size = this.getSize(),
        panePos = L.DomUtil.getPosition(this._mapPane),
        min = panePos.multiplyBy(-1)._subtract(size.multiplyBy(p)._round()),
        max = min.add(size.multiplyBy(1 + p * 2)._round());
      this._pathViewport = new L.Bounds(min, max);
    }
  });

  /*
  * Extends L.Path with SVG-specific rendering code.
  */

  L.Path.SVG_NS = 'http://www.w3.org/2000/svg';
  L.Browser.svg = !!(document.createElementNS && document.createElementNS(L.Path.SVG_NS, 'svg').createSVGRect);
  L.Path = L.Path.extend({
    statics: {
      SVG: L.Browser.svg
    },
    bringToFront: function bringToFront() {
      var root = this._map._pathRoot,
        path = this._container;
      if (path && root.lastChild !== path) {
        root.appendChild(path);
      }
      return this;
    },
    bringToBack: function bringToBack() {
      var root = this._map._pathRoot,
        path = this._container,
        first = root.firstChild;
      if (path && first !== path) {
        root.insertBefore(path, first);
      }
      return this;
    },
    getPathString: function getPathString() {
      // form path string here
    },
    _createElement: function _createElement(name) {
      return document.createElementNS(L.Path.SVG_NS, name);
    },
    _initElements: function _initElements() {
      this._map._initPathRoot();
      this._initPath();
      this._initStyle();
    },
    _initPath: function _initPath() {
      this._container = this._createElement('g');
      this._path = this._createElement('path');
      if (this.options.className) {
        L.DomUtil.addClass(this._path, this.options.className);
      }
      this._container.appendChild(this._path);
    },
    _initStyle: function _initStyle() {
      if (this.options.stroke) {
        this._path.setAttribute('stroke-linejoin', 'round');
        this._path.setAttribute('stroke-linecap', 'round');
      }
      if (this.options.fill) {
        this._path.setAttribute('fill-rule', 'evenodd');
      }
      if (this.options.pointerEvents) {
        this._path.setAttribute('pointer-events', this.options.pointerEvents);
      }
      if (!this.options.clickable && !this.options.pointerEvents) {
        this._path.setAttribute('pointer-events', 'none');
      }
      this._updateStyle();
    },
    _updateStyle: function _updateStyle() {
      if (this.options.stroke) {
        this._path.setAttribute('stroke', this.options.color);
        this._path.setAttribute('stroke-opacity', this.options.opacity);
        this._path.setAttribute('stroke-width', this.options.weight);
        if (this.options.dashArray) {
          this._path.setAttribute('stroke-dasharray', this.options.dashArray);
        } else {
          this._path.removeAttribute('stroke-dasharray');
        }
        if (this.options.lineCap) {
          this._path.setAttribute('stroke-linecap', this.options.lineCap);
        }
        if (this.options.lineJoin) {
          this._path.setAttribute('stroke-linejoin', this.options.lineJoin);
        }
      } else {
        this._path.setAttribute('stroke', 'none');
      }
      if (this.options.fill) {
        this._path.setAttribute('fill', this.options.fillColor || this.options.color);
        this._path.setAttribute('fill-opacity', this.options.fillOpacity);
      } else {
        this._path.setAttribute('fill', 'none');
      }
    },
    _updatePath: function _updatePath() {
      var str = this.getPathString();
      if (!str) {
        // fix webkit empty string parsing bug
        str = 'M0 0';
      }
      this._path.setAttribute('d', str);
    },
    // TODO remove duplication with L.Map
    _initEvents: function _initEvents() {
      if (this.options.clickable) {
        if (L.Browser.svg || !L.Browser.vml) {
          L.DomUtil.addClass(this._path, 'leaflet-clickable');
        }
        L.DomEvent.on(this._container, 'click', this._onMouseClick, this);
        var events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'mousemove', 'contextmenu'];
        for (var i = 0; i < events.length; i++) {
          L.DomEvent.on(this._container, events[i], this._fireMouseEvent, this);
        }
      }
    },
    _onMouseClick: function _onMouseClick(e) {
      if (this._map.dragging && this._map.dragging.moved()) {
        return;
      }
      this._fireMouseEvent(e);
    },
    _fireMouseEvent: function _fireMouseEvent(e) {
      if (!this._map || !this.hasEventListeners(e.type)) {
        return;
      }
      var map = this._map,
        containerPoint = map.mouseEventToContainerPoint(e),
        layerPoint = map.containerPointToLayerPoint(containerPoint),
        latlng = map.layerPointToLatLng(layerPoint);
      this.fire(e.type, {
        latlng: latlng,
        layerPoint: layerPoint,
        containerPoint: containerPoint,
        originalEvent: e
      });
      if (e.type === 'contextmenu') {
        L.DomEvent.preventDefault(e);
      }
      if (e.type !== 'mousemove') {
        L.DomEvent.stopPropagation(e);
      }
    }
  });
  L.Map.include({
    _initPathRoot: function _initPathRoot() {
      if (!this._pathRoot) {
        this._pathRoot = L.Path.prototype._createElement('svg');
        this._panes.overlayPane.appendChild(this._pathRoot);
        if (this.options.zoomAnimation && L.Browser.any3d) {
          L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-animated');
          this.on({
            'zoomanim': this._animatePathZoom,
            'zoomend': this._endPathZoom
          });
        } else {
          L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-hide');
        }
        this.on('moveend', this._updateSvgViewport);
        this._updateSvgViewport();
      }
    },
    _animatePathZoom: function _animatePathZoom(e) {
      var scale = this.getZoomScale(e.zoom),
        offset = this._getCenterOffset(e.center)._multiplyBy(-scale)._add(this._pathViewport.min);
      this._pathRoot.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(offset) + ' scale(' + scale + ') ';
      this._pathZooming = true;
    },
    _endPathZoom: function _endPathZoom() {
      this._pathZooming = false;
    },
    _updateSvgViewport: function _updateSvgViewport() {
      if (this._pathZooming) {
        // Do not update SVGs while a zoom animation is going on otherwise the animation will break.
        // When the zoom animation ends we will be updated again anyway
        // This fixes the case where you do a momentum move and zoom while the move is still ongoing.
        return;
      }
      this._updatePathViewport();
      var vp = this._pathViewport,
        min = vp.min,
        max = vp.max,
        width = max.x - min.x,
        height = max.y - min.y,
        root = this._pathRoot,
        pane = this._panes.overlayPane;

      // Hack to make flicker on drag end on mobile webkit less irritating
      if (L.Browser.mobileWebkit) {
        pane.removeChild(root);
      }
      L.DomUtil.setPosition(root, min);
      root.setAttribute('width', width);
      root.setAttribute('height', height);
      root.setAttribute('viewBox', [min.x, min.y, width, height].join(' '));
      if (L.Browser.mobileWebkit) {
        pane.appendChild(root);
      }
    }
  });

  /*
  * Popup extension to L.Path (polylines, polygons, circles), adding popup-related methods.
  */

  L.Path.include({
    bindPopup: function bindPopup(content, options) {
      if (content instanceof L.Popup) {
        this._popup = content;
      } else {
        if (!this._popup || options) {
          this._popup = new L.Popup(options, this);
        }
        this._popup.setContent(content);
      }
      if (!this._popupHandlersAdded) {
        this.on('click', this._openPopup, this).on('remove', this.closePopup, this);
        this._popupHandlersAdded = true;
      }
      return this;
    },
    unbindPopup: function unbindPopup() {
      if (this._popup) {
        this._popup = null;
        this.off('click', this._openPopup).off('remove', this.closePopup);
        this._popupHandlersAdded = false;
      }
      return this;
    },
    openPopup: function openPopup(latlng) {
      if (this._popup) {
        // open the popup from one of the path's points if not specified
        latlng = latlng || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)];
        this._openPopup({
          latlng: latlng
        });
      }
      return this;
    },
    closePopup: function closePopup() {
      if (this._popup) {
        this._popup._close();
      }
      return this;
    },
    _openPopup: function _openPopup(e) {
      this._popup.setLatLng(e.latlng);
      this._map.openPopup(this._popup);
    }
  });

  /*
  * Vector rendering for IE6-8 through VML.
  * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
  */

  L.Browser.vml = !L.Browser.svg && function () {
    try {
      var div = document.createElement('div');
      div.innerHTML = '<v:shape adj="1"/>';
      var shape = div.firstChild;
      shape.style.behavior = 'url(#default#VML)';
      return shape && _typeof(shape.adj) === 'object';
    } catch (e) {
      return false;
    }
  }();
  L.Path = L.Browser.svg || !L.Browser.vml ? L.Path : L.Path.extend({
    statics: {
      VML: true,
      CLIP_PADDING: 0.02
    },
    _createElement: function () {
      try {
        document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
        return function (name) {
          return document.createElement('<lvml:' + name + ' class="lvml">');
        };
      } catch (e) {
        return function (name) {
          return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }
    }(),
    _initPath: function _initPath() {
      var container = this._container = this._createElement('shape');
      L.DomUtil.addClass(container, 'leaflet-vml-shape' + (this.options.className ? ' ' + this.options.className : ''));
      if (this.options.clickable) {
        L.DomUtil.addClass(container, 'leaflet-clickable');
      }
      container.coordsize = '1 1';
      this._path = this._createElement('path');
      container.appendChild(this._path);
      this._map._pathRoot.appendChild(container);
    },
    _initStyle: function _initStyle() {
      this._updateStyle();
    },
    _updateStyle: function _updateStyle() {
      var stroke = this._stroke,
        fill = this._fill,
        options = this.options,
        container = this._container;
      container.stroked = options.stroke;
      container.filled = options.fill;
      if (options.stroke) {
        if (!stroke) {
          stroke = this._stroke = this._createElement('stroke');
          stroke.endcap = 'round';
          container.appendChild(stroke);
        }
        stroke.weight = options.weight + 'px';
        stroke.color = options.color;
        stroke.opacity = options.opacity;
        if (options.dashArray) {
          stroke.dashStyle = L.Util.isArray(options.dashArray) ? options.dashArray.join(' ') : options.dashArray.replace(/( *, *)/g, ' ');
        } else {
          stroke.dashStyle = '';
        }
        if (options.lineCap) {
          stroke.endcap = options.lineCap.replace('butt', 'flat');
        }
        if (options.lineJoin) {
          stroke.joinstyle = options.lineJoin;
        }
      } else if (stroke) {
        container.removeChild(stroke);
        this._stroke = null;
      }
      if (options.fill) {
        if (!fill) {
          fill = this._fill = this._createElement('fill');
          container.appendChild(fill);
        }
        fill.color = options.fillColor || options.color;
        fill.opacity = options.fillOpacity;
      } else if (fill) {
        container.removeChild(fill);
        this._fill = null;
      }
    },
    _updatePath: function _updatePath() {
      var style = this._container.style;
      style.display = 'none';
      this._path.v = this.getPathString() + ' '; // the space fixes IE empty path string bug
      style.display = '';
    }
  });
  L.Map.include(L.Browser.svg || !L.Browser.vml ? {} : {
    _initPathRoot: function _initPathRoot() {
      if (this._pathRoot) {
        return;
      }
      var root = this._pathRoot = document.createElement('div');
      root.className = 'leaflet-vml-container';
      this._panes.overlayPane.appendChild(root);
      this.on('moveend', this._updatePathViewport);
      this._updatePathViewport();
    }
  });

  /*
  * Vector rendering for all browsers that support canvas.
  */

  L.Browser.canvas = function () {
    return !!document.createElement('canvas').getContext;
  }();
  L.Path = L.Path.SVG && !window.L_PREFER_CANVAS || !L.Browser.canvas ? L.Path : L.Path.extend({
    statics: {
      //CLIP_PADDING: 0.02, // not sure if there's a need to set it to a small value
      CANVAS: true,
      SVG: false
    },
    redraw: function redraw() {
      if (this._map) {
        this.projectLatlngs();
        this._requestUpdate();
      }
      return this;
    },
    setStyle: function setStyle(style) {
      L.setOptions(this, style);
      if (this._map) {
        this._updateStyle();
        this._requestUpdate();
      }
      return this;
    },
    onRemove: function onRemove(map) {
      map.off('viewreset', this.projectLatlngs, this).off('moveend', this._updatePath, this);
      if (this.options.clickable) {
        this._map.off('click', this._onClick, this);
        this._map.off('mousemove', this._onMouseMove, this);
      }
      this._requestUpdate();
      this.fire('remove');
      this._map = null;
    },
    _requestUpdate: function _requestUpdate() {
      if (this._map && !L.Path._updateRequest) {
        L.Path._updateRequest = L.Util.requestAnimFrame(this._fireMapMoveEnd, this._map);
      }
    },
    _fireMapMoveEnd: function _fireMapMoveEnd() {
      L.Path._updateRequest = null;
      this.fire('moveend');
    },
    _initElements: function _initElements() {
      this._map._initPathRoot();
      this._ctx = this._map._canvasCtx;
    },
    _updateStyle: function _updateStyle() {
      var options = this.options;
      if (options.stroke) {
        this._ctx.lineWidth = options.weight;
        this._ctx.strokeStyle = options.color;
      }
      if (options.fill) {
        this._ctx.fillStyle = options.fillColor || options.color;
      }
      if (options.lineCap) {
        this._ctx.lineCap = options.lineCap;
      }
      if (options.lineJoin) {
        this._ctx.lineJoin = options.lineJoin;
      }
    },
    _drawPath: function _drawPath() {
      var i, j, len, len2, point, drawMethod;
      this._ctx.beginPath();
      for (i = 0, len = this._parts.length; i < len; i++) {
        for (j = 0, len2 = this._parts[i].length; j < len2; j++) {
          point = this._parts[i][j];
          drawMethod = (j === 0 ? 'move' : 'line') + 'To';
          this._ctx[drawMethod](point.x, point.y);
        }
        // TODO refactor ugly hack
        if (this instanceof L.Polygon) {
          this._ctx.closePath();
        }
      }
    },
    _checkIfEmpty: function _checkIfEmpty() {
      return !this._parts.length;
    },
    _updatePath: function _updatePath() {
      if (this._checkIfEmpty()) {
        return;
      }
      var ctx = this._ctx,
        options = this.options;
      this._drawPath();
      ctx.save();
      this._updateStyle();
      if (options.fill) {
        ctx.globalAlpha = options.fillOpacity;
        ctx.fill(options.fillRule || 'evenodd');
      }
      if (options.stroke) {
        ctx.globalAlpha = options.opacity;
        ctx.stroke();
      }
      ctx.restore();

      // TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
    },
    _initEvents: function _initEvents() {
      if (this.options.clickable) {
        this._map.on('mousemove', this._onMouseMove, this);
        this._map.on('click dblclick contextmenu', this._fireMouseEvent, this);
      }
    },
    _fireMouseEvent: function _fireMouseEvent(e) {
      if (this._containsPoint(e.layerPoint)) {
        this.fire(e.type, e);
      }
    },
    _onMouseMove: function _onMouseMove(e) {
      if (!this._map || this._map._animatingZoom) {
        return;
      }

      // TODO don't do on each move
      if (this._containsPoint(e.layerPoint)) {
        this._ctx.canvas.style.cursor = 'pointer';
        this._mouseInside = true;
        this.fire('mouseover', e);
      } else if (this._mouseInside) {
        this._ctx.canvas.style.cursor = '';
        this._mouseInside = false;
        this.fire('mouseout', e);
      }
    }
  });
  L.Map.include(L.Path.SVG && !window.L_PREFER_CANVAS || !L.Browser.canvas ? {} : {
    _initPathRoot: function _initPathRoot() {
      var root = this._pathRoot,
        ctx;
      if (!root) {
        root = this._pathRoot = document.createElement('canvas');
        root.style.position = 'absolute';
        ctx = this._canvasCtx = root.getContext('2d');
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        this._panes.overlayPane.appendChild(root);
        if (this.options.zoomAnimation) {
          this._pathRoot.className = 'leaflet-zoom-animated';
          this.on('zoomanim', this._animatePathZoom);
          this.on('zoomend', this._endPathZoom);
        }
        this.on('moveend', this._updateCanvasViewport);
        this._updateCanvasViewport();
      }
    },
    _updateCanvasViewport: function _updateCanvasViewport() {
      // don't redraw while zooming. See _updateSvgViewport for more details
      if (this._pathZooming) {
        return;
      }
      this._updatePathViewport();
      var vp = this._pathViewport,
        min = vp.min,
        size = vp.max.subtract(min),
        root = this._pathRoot;

      //TODO check if this works properly on mobile webkit
      L.DomUtil.setPosition(root, min);
      root.width = size.x;
      root.height = size.y;
      root.getContext('2d').translate(-min.x, -min.y);
    }
  });

  /*
  * L.LineUtil contains different utility functions for line segments
  * and polylines (clipping, simplification, distances, etc.)
  */

  /*jshint bitwise:false */ // allow bitwise operations for this file

  L.LineUtil = {
    // Simplify polyline with vertex reduction and Douglas-Peucker simplification.
    // Improves rendering performance dramatically by lessening the number of points to draw.

    simplify: function simplify( /*Point[]*/points, /*Number*/tolerance) {
      if (!tolerance || !points.length) {
        return points.slice();
      }
      var sqTolerance = tolerance * tolerance;

      // stage 1: vertex reduction
      points = this._reducePoints(points, sqTolerance);

      // stage 2: Douglas-Peucker simplification
      points = this._simplifyDP(points, sqTolerance);
      return points;
    },
    // distance from a point to a segment between two points
    pointToSegmentDistance: function pointToSegmentDistance( /*Point*/p, /*Point*/p1, /*Point*/p2) {
      return Math.sqrt(this._sqClosestPointOnSegment(p, p1, p2, true));
    },
    closestPointOnSegment: function closestPointOnSegment( /*Point*/p, /*Point*/p1, /*Point*/p2) {
      return this._sqClosestPointOnSegment(p, p1, p2);
    },
    // Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
    _simplifyDP: function _simplifyDP(points, sqTolerance) {
      var len = points.length,
        ArrayConstructor = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) !== undefined + '' ? Uint8Array : Array,
        markers = new ArrayConstructor(len);
      markers[0] = markers[len - 1] = 1;
      this._simplifyDPStep(points, markers, sqTolerance, 0, len - 1);
      var i,
        newPoints = [];
      for (i = 0; i < len; i++) {
        if (markers[i]) {
          newPoints.push(points[i]);
        }
      }
      return newPoints;
    },
    _simplifyDPStep: function _simplifyDPStep(points, markers, sqTolerance, first, last) {
      var maxSqDist = 0,
        index,
        i,
        sqDist;
      for (i = first + 1; i <= last - 1; i++) {
        sqDist = this._sqClosestPointOnSegment(points[i], points[first], points[last], true);
        if (sqDist > maxSqDist) {
          index = i;
          maxSqDist = sqDist;
        }
      }
      if (maxSqDist > sqTolerance) {
        markers[index] = 1;
        this._simplifyDPStep(points, markers, sqTolerance, first, index);
        this._simplifyDPStep(points, markers, sqTolerance, index, last);
      }
    },
    // reduce points that are too close to each other to a single point
    _reducePoints: function _reducePoints(points, sqTolerance) {
      var reducedPoints = [points[0]];
      for (var i = 1, prev = 0, len = points.length; i < len; i++) {
        if (this._sqDist(points[i], points[prev]) > sqTolerance) {
          reducedPoints.push(points[i]);
          prev = i;
        }
      }
      if (prev < len - 1) {
        reducedPoints.push(points[len - 1]);
      }
      return reducedPoints;
    },
    // Cohen-Sutherland line clipping algorithm.
    // Used to avoid rendering parts of a polyline that are not currently visible.

    clipSegment: function clipSegment(a, b, bounds, useLastCode) {
      var codeA = useLastCode ? this._lastCode : this._getBitCode(a, bounds),
        codeB = this._getBitCode(b, bounds),
        codeOut,
        p,
        newCode;

      // save 2nd code to avoid calculating it on the next segment
      this._lastCode = codeB;
      while (true) {
        // if a,b is inside the clip window (trivial accept)
        if (!(codeA | codeB)) {
          return [a, b];
          // if a,b is outside the clip window (trivial reject)
        } else if (codeA & codeB) {
          return false;
          // other cases
        } else {
          codeOut = codeA || codeB;
          p = this._getEdgeIntersection(a, b, codeOut, bounds);
          newCode = this._getBitCode(p, bounds);
          if (codeOut === codeA) {
            a = p;
            codeA = newCode;
          } else {
            b = p;
            codeB = newCode;
          }
        }
      }
    },
    _getEdgeIntersection: function _getEdgeIntersection(a, b, code, bounds) {
      var dx = b.x - a.x,
        dy = b.y - a.y,
        min = bounds.min,
        max = bounds.max;
      if (code & 8) {
        // top
        return new L.Point(a.x + dx * (max.y - a.y) / dy, max.y);
      } else if (code & 4) {
        // bottom
        return new L.Point(a.x + dx * (min.y - a.y) / dy, min.y);
      } else if (code & 2) {
        // right
        return new L.Point(max.x, a.y + dy * (max.x - a.x) / dx);
      } else if (code & 1) {
        // left
        return new L.Point(min.x, a.y + dy * (min.x - a.x) / dx);
      }
    },
    _getBitCode: function _getBitCode( /*Point*/p, bounds) {
      var code = 0;
      if (p.x < bounds.min.x) {
        // left
        code |= 1;
      } else if (p.x > bounds.max.x) {
        // right
        code |= 2;
      }
      if (p.y < bounds.min.y) {
        // bottom
        code |= 4;
      } else if (p.y > bounds.max.y) {
        // top
        code |= 8;
      }
      return code;
    },
    // square distance (to avoid unnecessary Math.sqrt calls)
    _sqDist: function _sqDist(p1, p2) {
      var dx = p2.x - p1.x,
        dy = p2.y - p1.y;
      return dx * dx + dy * dy;
    },
    // return closest point on segment or distance to that point
    _sqClosestPointOnSegment: function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
      var x = p1.x,
        y = p1.y,
        dx = p2.x - x,
        dy = p2.y - y,
        dot = dx * dx + dy * dy,
        t;
      if (dot > 0) {
        t = ((p.x - x) * dx + (p.y - y) * dy) / dot;
        if (t > 1) {
          x = p2.x;
          y = p2.y;
        } else if (t > 0) {
          x += dx * t;
          y += dy * t;
        }
      }
      dx = p.x - x;
      dy = p.y - y;
      return sqDist ? dx * dx + dy * dy : new L.Point(x, y);
    }
  };

  /*
  * L.Polyline is used to display polylines on a map.
  */

  L.Polyline = L.Path.extend({
    initialize: function initialize(latlngs, options) {
      L.Path.prototype.initialize.call(this, options);
      this._latlngs = this._convertLatLngs(latlngs);
    },
    options: {
      // how much to simplify the polyline on each zoom level
      // more = better performance and smoother look, less = more accurate
      smoothFactor: 1.0,
      noClip: false
    },
    projectLatlngs: function projectLatlngs() {
      this._originalPoints = [];
      for (var i = 0, len = this._latlngs.length; i < len; i++) {
        this._originalPoints[i] = this._map.latLngToLayerPoint(this._latlngs[i]);
      }
    },
    getPathString: function getPathString() {
      for (var i = 0, len = this._parts.length, str = ''; i < len; i++) {
        str += this._getPathPartStr(this._parts[i]);
      }
      return str;
    },
    getLatLngs: function getLatLngs() {
      return this._latlngs;
    },
    setLatLngs: function setLatLngs(latlngs) {
      this._latlngs = this._convertLatLngs(latlngs);
      return this.redraw();
    },
    addLatLng: function addLatLng(latlng) {
      this._latlngs.push(L.latLng(latlng));
      return this.redraw();
    },
    spliceLatLngs: function spliceLatLngs() {
      // (Number index, Number howMany)
      var removed = [].splice.apply(this._latlngs, arguments);
      this._convertLatLngs(this._latlngs, true);
      this.redraw();
      return removed;
    },
    closestLayerPoint: function closestLayerPoint(p) {
      var minDistance = Infinity,
        parts = this._parts,
        p1,
        p2,
        minPoint = null;
      for (var j = 0, jLen = parts.length; j < jLen; j++) {
        var points = parts[j];
        for (var i = 1, len = points.length; i < len; i++) {
          p1 = points[i - 1];
          p2 = points[i];
          var sqDist = L.LineUtil._sqClosestPointOnSegment(p, p1, p2, true);
          if (sqDist < minDistance) {
            minDistance = sqDist;
            minPoint = L.LineUtil._sqClosestPointOnSegment(p, p1, p2);
          }
        }
      }
      if (minPoint) {
        minPoint.distance = Math.sqrt(minDistance);
      }
      return minPoint;
    },
    getBounds: function getBounds() {
      return new L.LatLngBounds(this.getLatLngs());
    },
    _convertLatLngs: function _convertLatLngs(latlngs, overwrite) {
      var i,
        len,
        target = overwrite ? latlngs : [];
      for (i = 0, len = latlngs.length; i < len; i++) {
        if (L.Util.isArray(latlngs[i]) && typeof latlngs[i][0] !== 'number') {
          return;
        }
        target[i] = L.latLng(latlngs[i]);
      }
      return target;
    },
    _initEvents: function _initEvents() {
      L.Path.prototype._initEvents.call(this);
    },
    _getPathPartStr: function _getPathPartStr(points) {
      var round = L.Path.VML;
      for (var j = 0, len2 = points.length, str = '', p; j < len2; j++) {
        p = points[j];
        if (round) {
          p._round();
        }
        str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
      }
      return str;
    },
    _clipPoints: function _clipPoints() {
      var points = this._originalPoints,
        len = points.length,
        i,
        k,
        segment;
      if (this.options.noClip) {
        this._parts = [points];
        return;
      }
      this._parts = [];
      var parts = this._parts,
        vp = this._map._pathViewport,
        lu = L.LineUtil;
      for (i = 0, k = 0; i < len - 1; i++) {
        segment = lu.clipSegment(points[i], points[i + 1], vp, i);
        if (!segment) {
          continue;
        }
        parts[k] = parts[k] || [];
        parts[k].push(segment[0]);

        // if segment goes out of screen, or it's the last one, it's the end of the line part
        if (segment[1] !== points[i + 1] || i === len - 2) {
          parts[k].push(segment[1]);
          k++;
        }
      }
    },
    // simplify each clipped part of the polyline
    _simplifyPoints: function _simplifyPoints() {
      var parts = this._parts,
        lu = L.LineUtil;
      for (var i = 0, len = parts.length; i < len; i++) {
        parts[i] = lu.simplify(parts[i], this.options.smoothFactor);
      }
    },
    _updatePath: function _updatePath() {
      if (!this._map) {
        return;
      }
      this._clipPoints();
      this._simplifyPoints();
      L.Path.prototype._updatePath.call(this);
    }
  });
  L.polyline = function (latlngs, options) {
    return new L.Polyline(latlngs, options);
  };

  /*
  * L.PolyUtil contains utility functions for polygons (clipping, etc.).
  */

  /*jshint bitwise:false */ // allow bitwise operations here

  L.PolyUtil = {};

  /*
  * Sutherland-Hodgeman polygon clipping algorithm.
  * Used to avoid rendering parts of a polygon that are not currently visible.
  */
  L.PolyUtil.clipPolygon = function (points, bounds) {
    var clippedPoints,
      edges = [1, 4, 2, 8],
      i,
      j,
      k,
      a,
      b,
      len,
      edge,
      p,
      lu = L.LineUtil;
    for (i = 0, len = points.length; i < len; i++) {
      points[i]._code = lu._getBitCode(points[i], bounds);
    }

    // for each edge (left, bottom, right, top)
    for (k = 0; k < 4; k++) {
      edge = edges[k];
      clippedPoints = [];
      for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
        a = points[i];
        b = points[j];

        // if a is inside the clip window
        if (!(a._code & edge)) {
          // if b is outside the clip window (a->b goes out of screen)
          if (b._code & edge) {
            p = lu._getEdgeIntersection(b, a, edge, bounds);
            p._code = lu._getBitCode(p, bounds);
            clippedPoints.push(p);
          }
          clippedPoints.push(a);

          // else if b is inside the clip window (a->b enters the screen)
        } else if (!(b._code & edge)) {
          p = lu._getEdgeIntersection(b, a, edge, bounds);
          p._code = lu._getBitCode(p, bounds);
          clippedPoints.push(p);
        }
      }
      points = clippedPoints;
    }
    return points;
  };

  /*
  * L.Polygon is used to display polygons on a map.
  */

  L.Polygon = L.Polyline.extend({
    options: {
      fill: true
    },
    initialize: function initialize(latlngs, options) {
      L.Polyline.prototype.initialize.call(this, latlngs, options);
      this._initWithHoles(latlngs);
    },
    _initWithHoles: function _initWithHoles(latlngs) {
      var i, len, hole;
      if (latlngs && L.Util.isArray(latlngs[0]) && typeof latlngs[0][0] !== 'number') {
        this._latlngs = this._convertLatLngs(latlngs[0]);
        this._holes = latlngs.slice(1);
        for (i = 0, len = this._holes.length; i < len; i++) {
          hole = this._holes[i] = this._convertLatLngs(this._holes[i]);
          if (hole[0].equals(hole[hole.length - 1])) {
            hole.pop();
          }
        }
      }

      // filter out last point if its equal to the first one
      latlngs = this._latlngs;
      if (latlngs.length >= 2 && latlngs[0].equals(latlngs[latlngs.length - 1])) {
        latlngs.pop();
      }
    },
    projectLatlngs: function projectLatlngs() {
      L.Polyline.prototype.projectLatlngs.call(this);

      // project polygon holes points
      // TODO move this logic to Polyline to get rid of duplication
      this._holePoints = [];
      if (!this._holes) {
        return;
      }
      var i, j, len, len2;
      for (i = 0, len = this._holes.length; i < len; i++) {
        this._holePoints[i] = [];
        for (j = 0, len2 = this._holes[i].length; j < len2; j++) {
          this._holePoints[i][j] = this._map.latLngToLayerPoint(this._holes[i][j]);
        }
      }
    },
    setLatLngs: function setLatLngs(latlngs) {
      if (latlngs && L.Util.isArray(latlngs[0]) && typeof latlngs[0][0] !== 'number') {
        this._initWithHoles(latlngs);
        return this.redraw();
      } else {
        return L.Polyline.prototype.setLatLngs.call(this, latlngs);
      }
    },
    _clipPoints: function _clipPoints() {
      var points = this._originalPoints,
        newParts = [];
      this._parts = [points].concat(this._holePoints);
      if (this.options.noClip) {
        return;
      }
      for (var i = 0, len = this._parts.length; i < len; i++) {
        var clipped = L.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
        if (clipped.length) {
          newParts.push(clipped);
        }
      }
      this._parts = newParts;
    },
    _getPathPartStr: function _getPathPartStr(points) {
      var str = L.Polyline.prototype._getPathPartStr.call(this, points);
      return str + (L.Browser.svg ? 'z' : 'x');
    }
  });
  L.polygon = function (latlngs, options) {
    return new L.Polygon(latlngs, options);
  };

  /*
  * Contains L.MultiPolyline and L.MultiPolygon layers.
  */

  (function () {
    function createMulti(Klass) {
      return L.FeatureGroup.extend({
        initialize: function initialize(latlngs, options) {
          this._layers = {};
          this._options = options;
          this.setLatLngs(latlngs);
        },
        setLatLngs: function setLatLngs(latlngs) {
          var i = 0,
            len = latlngs.length;
          this.eachLayer(function (layer) {
            if (i < len) {
              layer.setLatLngs(latlngs[i++]);
            } else {
              this.removeLayer(layer);
            }
          }, this);
          while (i < len) {
            this.addLayer(new Klass(latlngs[i++], this._options));
          }
          return this;
        },
        getLatLngs: function getLatLngs() {
          var latlngs = [];
          this.eachLayer(function (layer) {
            latlngs.push(layer.getLatLngs());
          });
          return latlngs;
        }
      });
    }
    L.MultiPolyline = createMulti(L.Polyline);
    L.MultiPolygon = createMulti(L.Polygon);
    L.multiPolyline = function (latlngs, options) {
      return new L.MultiPolyline(latlngs, options);
    };
    L.multiPolygon = function (latlngs, options) {
      return new L.MultiPolygon(latlngs, options);
    };
  })();

  /*
  * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
  */

  L.Rectangle = L.Polygon.extend({
    initialize: function initialize(latLngBounds, options) {
      L.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
    },
    setBounds: function setBounds(latLngBounds) {
      this.setLatLngs(this._boundsToLatLngs(latLngBounds));
    },
    _boundsToLatLngs: function _boundsToLatLngs(latLngBounds) {
      latLngBounds = L.latLngBounds(latLngBounds);
      return [latLngBounds.getSouthWest(), latLngBounds.getNorthWest(), latLngBounds.getNorthEast(), latLngBounds.getSouthEast()];
    }
  });
  L.rectangle = function (latLngBounds, options) {
    return new L.Rectangle(latLngBounds, options);
  };

  /*
  * L.Circle is a circle overlay (with a certain radius in meters).
  */

  L.Circle = L.Path.extend({
    initialize: function initialize(latlng, radius, options) {
      L.Path.prototype.initialize.call(this, options);
      this._latlng = L.latLng(latlng);
      this._mRadius = radius;
    },
    options: {
      fill: true
    },
    setLatLng: function setLatLng(latlng) {
      this._latlng = L.latLng(latlng);
      return this.redraw();
    },
    setRadius: function setRadius(radius) {
      this._mRadius = radius;
      return this.redraw();
    },
    projectLatlngs: function projectLatlngs() {
      var lngRadius = this._getLngRadius(),
        latlng = this._latlng,
        pointLeft = this._map.latLngToLayerPoint([latlng.lat, latlng.lng - lngRadius]);
      this._point = this._map.latLngToLayerPoint(latlng);
      this._radius = Math.max(this._point.x - pointLeft.x, 1);
    },
    getBounds: function getBounds() {
      var lngRadius = this._getLngRadius(),
        latRadius = this._mRadius / 40075017 * 360,
        latlng = this._latlng;
      return new L.LatLngBounds([latlng.lat - latRadius, latlng.lng - lngRadius], [latlng.lat + latRadius, latlng.lng + lngRadius]);
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    getPathString: function getPathString() {
      var p = this._point,
        r = this._radius;
      if (this._checkIfEmpty()) {
        return '';
      }
      if (L.Browser.svg) {
        return 'M' + p.x + ',' + (p.y - r) + 'A' + r + ',' + r + ',0,1,1,' + (p.x - 0.1) + ',' + (p.y - r) + ' z';
      } else {
        p._round();
        r = Math.round(r);
        return 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r + ' 0,' + 65535 * 360;
      }
    },
    getRadius: function getRadius() {
      return this._mRadius;
    },
    // TODO Earth hardcoded, move into projection code!

    _getLatRadius: function _getLatRadius() {
      return this._mRadius / 40075017 * 360;
    },
    _getLngRadius: function _getLngRadius() {
      return this._getLatRadius() / Math.cos(L.LatLng.DEG_TO_RAD * this._latlng.lat);
    },
    _checkIfEmpty: function _checkIfEmpty() {
      if (!this._map) {
        return false;
      }
      var vp = this._map._pathViewport,
        r = this._radius,
        p = this._point;
      return p.x - r > vp.max.x || p.y - r > vp.max.y || p.x + r < vp.min.x || p.y + r < vp.min.y;
    }
  });
  L.circle = function (latlng, radius, options) {
    return new L.Circle(latlng, radius, options);
  };

  /*
  * L.CircleMarker is a circle overlay with a permanent pixel radius.
  */

  L.CircleMarker = L.Circle.extend({
    options: {
      radius: 10,
      weight: 2
    },
    initialize: function initialize(latlng, options) {
      L.Circle.prototype.initialize.call(this, latlng, null, options);
      this._radius = this.options.radius;
    },
    projectLatlngs: function projectLatlngs() {
      this._point = this._map.latLngToLayerPoint(this._latlng);
    },
    _updateStyle: function _updateStyle() {
      L.Circle.prototype._updateStyle.call(this);
      this.setRadius(this.options.radius);
    },
    setLatLng: function setLatLng(latlng) {
      L.Circle.prototype.setLatLng.call(this, latlng);
      if (this._popup && this._popup._isOpen) {
        this._popup.setLatLng(latlng);
      }
      return this;
    },
    setRadius: function setRadius(radius) {
      this.options.radius = this._radius = radius;
      return this.redraw();
    },
    getRadius: function getRadius() {
      return this._radius;
    }
  });
  L.circleMarker = function (latlng, options) {
    return new L.CircleMarker(latlng, options);
  };

  /*
  * Extends L.Polyline to be able to manually detect clicks on Canvas-rendered polylines.
  */

  L.Polyline.include(!L.Path.CANVAS ? {} : {
    _containsPoint: function _containsPoint(p, closed) {
      var i,
        j,
        k,
        len,
        len2,
        dist,
        part,
        w = this.options.weight / 2;
      if (L.Browser.touch) {
        w += 10; // polyline click tolerance on touch devices
      }
      for (i = 0, len = this._parts.length; i < len; i++) {
        part = this._parts[i];
        for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
          if (!closed && j === 0) {
            continue;
          }
          dist = L.LineUtil.pointToSegmentDistance(p, part[k], part[j]);
          if (dist <= w) {
            return true;
          }
        }
      }
      return false;
    }
  });

  /*
  * Extends L.Polygon to be able to manually detect clicks on Canvas-rendered polygons.
  */

  L.Polygon.include(!L.Path.CANVAS ? {} : {
    _containsPoint: function _containsPoint(p) {
      var inside = false,
        part,
        p1,
        p2,
        i,
        j,
        k,
        len,
        len2;

      // TODO optimization: check if within bounds first

      if (L.Polyline.prototype._containsPoint.call(this, p, true)) {
        // click on polygon border
        return true;
      }

      // ray casting algorithm for detecting if point is in polygon

      for (i = 0, len = this._parts.length; i < len; i++) {
        part = this._parts[i];
        for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
          p1 = part[j];
          p2 = part[k];
          if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) {
            inside = !inside;
          }
        }
      }
      return inside;
    }
  });

  /*
  * Extends L.Circle with Canvas-specific code.
  */

  L.Circle.include(!L.Path.CANVAS ? {} : {
    _drawPath: function _drawPath() {
      var p = this._point;
      this._ctx.beginPath();
      this._ctx.arc(p.x, p.y, this._radius, 0, Math.PI * 2, false);
    },
    _containsPoint: function _containsPoint(p) {
      var center = this._point,
        w2 = this.options.stroke ? this.options.weight / 2 : 0;
      return p.distanceTo(center) <= this._radius + w2;
    }
  });

  /*
  * CircleMarker canvas specific drawing parts.
  */

  L.CircleMarker.include(!L.Path.CANVAS ? {} : {
    _updateStyle: function _updateStyle() {
      L.Path.prototype._updateStyle.call(this);
    }
  });

  /*
  * L.GeoJSON turns any GeoJSON data into a Leaflet layer.
  */

  L.GeoJSON = L.FeatureGroup.extend({
    initialize: function initialize(geojson, options) {
      L.setOptions(this, options);
      this._layers = {};
      if (geojson) {
        this.addData(geojson);
      }
    },
    addData: function addData(geojson) {
      var features = L.Util.isArray(geojson) ? geojson : geojson.features,
        i,
        len,
        feature;
      if (features) {
        for (i = 0, len = features.length; i < len; i++) {
          // Only add this if geometry or geometries are set and not null
          feature = features[i];
          if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
            this.addData(features[i]);
          }
        }
        return this;
      }
      var options = this.options;
      if (options.filter && !options.filter(geojson)) {
        return;
      }
      var layer = L.GeoJSON.geometryToLayer(geojson, options.pointToLayer, options.coordsToLatLng, options);
      layer.feature = L.GeoJSON.asFeature(geojson);
      layer.defaultOptions = layer.options;
      this.resetStyle(layer);
      if (options.onEachFeature) {
        options.onEachFeature(geojson, layer);
      }
      return this.addLayer(layer);
    },
    resetStyle: function resetStyle(layer) {
      var style = this.options.style;
      if (style) {
        // reset any custom styles
        L.Util.extend(layer.options, layer.defaultOptions);
        this._setLayerStyle(layer, style);
      }
    },
    setStyle: function setStyle(style) {
      this.eachLayer(function (layer) {
        this._setLayerStyle(layer, style);
      }, this);
    },
    _setLayerStyle: function _setLayerStyle(layer, style) {
      if (typeof style === 'function') {
        style = style(layer.feature);
      }
      if (layer.setStyle) {
        layer.setStyle(style);
      }
    }
  });
  L.extend(L.GeoJSON, {
    geometryToLayer: function geometryToLayer(geojson, pointToLayer, coordsToLatLng, vectorOptions) {
      var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
        coords = geometry.coordinates,
        layers = [],
        latlng,
        latlngs,
        i,
        len;
      coordsToLatLng = coordsToLatLng || this.coordsToLatLng;
      switch (geometry.type) {
        case 'Point':
          latlng = coordsToLatLng(coords);
          return pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng);
        case 'MultiPoint':
          for (i = 0, len = coords.length; i < len; i++) {
            latlng = coordsToLatLng(coords[i]);
            layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng));
          }
          return new L.FeatureGroup(layers);
        case 'LineString':
          latlngs = this.coordsToLatLngs(coords, 0, coordsToLatLng);
          return new L.Polyline(latlngs, vectorOptions);
        case 'Polygon':
          if (coords.length === 2 && !coords[1].length) {
            throw new Error('Invalid GeoJSON object.');
          }
          latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
          return new L.Polygon(latlngs, vectorOptions);
        case 'MultiLineString':
          latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
          return new L.MultiPolyline(latlngs, vectorOptions);
        case 'MultiPolygon':
          latlngs = this.coordsToLatLngs(coords, 2, coordsToLatLng);
          return new L.MultiPolygon(latlngs, vectorOptions);
        case 'GeometryCollection':
          for (i = 0, len = geometry.geometries.length; i < len; i++) {
            layers.push(this.geometryToLayer({
              geometry: geometry.geometries[i],
              type: 'Feature',
              properties: geojson.properties
            }, pointToLayer, coordsToLatLng, vectorOptions));
          }
          return new L.FeatureGroup(layers);
        default:
          throw new Error('Invalid GeoJSON object.');
      }
    },
    coordsToLatLng: function coordsToLatLng(coords) {
      // (Array[, Boolean]) -> LatLng
      return new L.LatLng(coords[1], coords[0], coords[2]);
    },
    coordsToLatLngs: function coordsToLatLngs(coords, levelsDeep, coordsToLatLng) {
      // (Array[, Number, Function]) -> Array
      var latlng,
        i,
        len,
        latlngs = [];
      for (i = 0, len = coords.length; i < len; i++) {
        latlng = levelsDeep ? this.coordsToLatLngs(coords[i], levelsDeep - 1, coordsToLatLng) : (coordsToLatLng || this.coordsToLatLng)(coords[i]);
        latlngs.push(latlng);
      }
      return latlngs;
    },
    latLngToCoords: function latLngToCoords(latlng) {
      var coords = [latlng.lng, latlng.lat];
      if (latlng.alt !== undefined) {
        coords.push(latlng.alt);
      }
      return coords;
    },
    latLngsToCoords: function latLngsToCoords(latLngs) {
      var coords = [];
      for (var i = 0, len = latLngs.length; i < len; i++) {
        coords.push(L.GeoJSON.latLngToCoords(latLngs[i]));
      }
      return coords;
    },
    getFeature: function getFeature(layer, newGeometry) {
      return layer.feature ? L.extend({}, layer.feature, {
        geometry: newGeometry
      }) : L.GeoJSON.asFeature(newGeometry);
    },
    asFeature: function asFeature(geoJSON) {
      if (geoJSON.type === 'Feature') {
        return geoJSON;
      }
      return {
        type: 'Feature',
        properties: {},
        geometry: geoJSON
      };
    }
  });
  var PointToGeoJSON = {
    toGeoJSON: function toGeoJSON() {
      return L.GeoJSON.getFeature(this, {
        type: 'Point',
        coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
      });
    }
  };
  L.Marker.include(PointToGeoJSON);
  L.Circle.include(PointToGeoJSON);
  L.CircleMarker.include(PointToGeoJSON);
  L.Polyline.include({
    toGeoJSON: function toGeoJSON() {
      return L.GeoJSON.getFeature(this, {
        type: 'LineString',
        coordinates: L.GeoJSON.latLngsToCoords(this.getLatLngs())
      });
    }
  });
  L.Polygon.include({
    toGeoJSON: function toGeoJSON() {
      var coords = [L.GeoJSON.latLngsToCoords(this.getLatLngs())],
        i,
        len,
        hole;
      coords[0].push(coords[0][0]);
      if (this._holes) {
        for (i = 0, len = this._holes.length; i < len; i++) {
          hole = L.GeoJSON.latLngsToCoords(this._holes[i]);
          hole.push(hole[0]);
          coords.push(hole);
        }
      }
      return L.GeoJSON.getFeature(this, {
        type: 'Polygon',
        coordinates: coords
      });
    }
  });
  (function () {
    function multiToGeoJSON(type) {
      return function () {
        var coords = [];
        this.eachLayer(function (layer) {
          coords.push(layer.toGeoJSON().geometry.coordinates);
        });
        return L.GeoJSON.getFeature(this, {
          type: type,
          coordinates: coords
        });
      };
    }
    L.MultiPolyline.include({
      toGeoJSON: multiToGeoJSON('MultiLineString')
    });
    L.MultiPolygon.include({
      toGeoJSON: multiToGeoJSON('MultiPolygon')
    });
    L.LayerGroup.include({
      toGeoJSON: function toGeoJSON() {
        var geometry = this.feature && this.feature.geometry,
          jsons = [],
          json;
        if (geometry && geometry.type === 'MultiPoint') {
          return multiToGeoJSON('MultiPoint').call(this);
        }
        var isGeometryCollection = geometry && geometry.type === 'GeometryCollection';
        this.eachLayer(function (layer) {
          if (layer.toGeoJSON) {
            json = layer.toGeoJSON();
            jsons.push(isGeometryCollection ? json.geometry : L.GeoJSON.asFeature(json));
          }
        });
        if (isGeometryCollection) {
          return L.GeoJSON.getFeature(this, {
            geometries: jsons,
            type: 'GeometryCollection'
          });
        }
        return {
          type: 'FeatureCollection',
          features: jsons
        };
      }
    });
  })();
  L.geoJson = function (geojson, options) {
    return new L.GeoJSON(geojson, options);
  };

  /*
  * L.DomEvent contains functions for working with DOM events.
  */

  L.DomEvent = {
    /* inspired by John Resig, Dean Edwards and YUI addEvent implementations */
    addListener: function addListener(obj, type, fn, context) {
      // (HTMLElement, String, Function[, Object])

      var id = L.stamp(fn),
        key = '_leaflet_' + type + id,
        handler,
        originalHandler,
        newType;
      if (obj[key]) {
        return this;
      }
      handler = function handler(e) {
        return fn.call(context || obj, e || L.DomEvent._getEvent());
      };
      if (L.Browser.pointer && type.indexOf('touch') === 0) {
        return this.addPointerListener(obj, type, handler, id);
      }
      if (L.Browser.touch && type === 'dblclick' && this.addDoubleTapListener) {
        this.addDoubleTapListener(obj, handler, id);
      }
      if ('addEventListener' in obj) {
        if (type === 'mousewheel') {
          obj.addEventListener('DOMMouseScroll', handler, false);
          obj.addEventListener(type, handler, false);
        } else if (type === 'mouseenter' || type === 'mouseleave') {
          originalHandler = handler;
          newType = type === 'mouseenter' ? 'mouseover' : 'mouseout';
          handler = function handler(e) {
            if (!L.DomEvent._checkMouse(obj, e)) {
              return;
            }
            return originalHandler(e);
          };
          obj.addEventListener(newType, handler, false);
        } else if (type === 'click' && L.Browser.android) {
          originalHandler = handler;
          handler = function handler(e) {
            return L.DomEvent._filterClick(e, originalHandler);
          };
          obj.addEventListener(type, handler, false);
        } else {
          obj.addEventListener(type, handler, false);
        }
      } else if ('attachEvent' in obj) {
        obj.attachEvent('on' + type, handler);
      }
      obj[key] = handler;
      return this;
    },
    removeListener: function removeListener(obj, type, fn) {
      // (HTMLElement, String, Function)

      var id = L.stamp(fn),
        key = '_leaflet_' + type + id,
        handler = obj[key];
      if (!handler) {
        return this;
      }
      if (L.Browser.pointer && type.indexOf('touch') === 0) {
        this.removePointerListener(obj, type, id);
      } else if (L.Browser.touch && type === 'dblclick' && this.removeDoubleTapListener) {
        this.removeDoubleTapListener(obj, id);
      } else if ('removeEventListener' in obj) {
        if (type === 'mousewheel') {
          obj.removeEventListener('DOMMouseScroll', handler, false);
          obj.removeEventListener(type, handler, false);
        } else if (type === 'mouseenter' || type === 'mouseleave') {
          obj.removeEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);
        } else {
          obj.removeEventListener(type, handler, false);
        }
      } else if ('detachEvent' in obj) {
        obj.detachEvent('on' + type, handler);
      }
      obj[key] = null;
      return this;
    },
    stopPropagation: function stopPropagation(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
      L.DomEvent._skipped(e);
      return this;
    },
    disableScrollPropagation: function disableScrollPropagation(el) {
      var stop = L.DomEvent.stopPropagation;
      return L.DomEvent.on(el, 'mousewheel', stop).on(el, 'MozMousePixelScroll', stop);
    },
    disableClickPropagation: function disableClickPropagation(el) {
      var stop = L.DomEvent.stopPropagation;
      for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
        L.DomEvent.on(el, L.Draggable.START[i], stop);
      }
      return L.DomEvent.on(el, 'click', L.DomEvent._fakeStop).on(el, 'dblclick', stop);
    },
    preventDefault: function preventDefault(e) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      return this;
    },
    stop: function stop(e) {
      return L.DomEvent.preventDefault(e).stopPropagation(e);
    },
    getMousePosition: function getMousePosition(e, container) {
      if (!container) {
        return new L.Point(e.clientX, e.clientY);
      }
      var rect = container.getBoundingClientRect();
      return new L.Point(e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop);
    },
    getWheelDelta: function getWheelDelta(e) {
      var delta = 0;
      if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
      }
      if (e.detail) {
        delta = -e.detail / 3;
      }
      return delta;
    },
    _skipEvents: {},
    _fakeStop: function _fakeStop(e) {
      // fakes stopPropagation by setting a special event flag, checked/reset with L.DomEvent._skipped(e)
      L.DomEvent._skipEvents[e.type] = true;
    },
    _skipped: function _skipped(e) {
      var skipped = this._skipEvents[e.type];
      // reset when checking, as it's only used in map container and propagates outside of the map
      this._skipEvents[e.type] = false;
      return skipped;
    },
    // check if element really left/entered the event target (for mouseenter/mouseleave)
    _checkMouse: function _checkMouse(el, e) {
      var related = e.relatedTarget;
      if (!related) {
        return true;
      }
      try {
        while (related && related !== el) {
          related = related.parentNode;
        }
      } catch (err) {
        return false;
      }
      return related !== el;
    },
    _getEvent: function _getEvent() {
      // evil magic for IE
      /*jshint noarg:false */
      var e = window.event;
      if (!e) {
        var caller = arguments.callee.caller;
        while (caller) {
          e = caller['arguments'][0];
          if (e && window.Event === e.constructor) {
            break;
          }
          caller = caller.caller;
        }
      }
      return e;
    },
    // this is a horrible workaround for a bug in Android where a single touch triggers two click events
    _filterClick: function _filterClick(e, handler) {
      var timeStamp = e.timeStamp || e.originalEvent.timeStamp,
        elapsed = L.DomEvent._lastClick && timeStamp - L.DomEvent._lastClick;

      // are they closer together than 500ms yet more than 100ms?
      // Android typically triggers them ~300ms apart while multiple listeners
      // on the same event should be triggered far faster;
      // or check if click is simulated on the element, and if it is, reject any non-simulated events

      if (elapsed && elapsed > 100 && elapsed < 500 || e.target._simulatedClick && !e._simulated) {
        L.DomEvent.stop(e);
        return;
      }
      L.DomEvent._lastClick = timeStamp;
      return handler(e);
    }
  };
  L.DomEvent.on = L.DomEvent.addListener;
  L.DomEvent.off = L.DomEvent.removeListener;

  /*
  * L.Draggable allows you to add dragging capabilities to any element. Supports mobile devices too.
  */

  L.Draggable = L.Class.extend({
    includes: L.Mixin.Events,
    statics: {
      START: L.Browser.touch ? ['touchstart', 'mousedown'] : ['mousedown'],
      END: {
        mousedown: 'mouseup',
        touchstart: 'touchend',
        pointerdown: 'touchend',
        MSPointerDown: 'touchend'
      },
      MOVE: {
        mousedown: 'mousemove',
        touchstart: 'touchmove',
        pointerdown: 'touchmove',
        MSPointerDown: 'touchmove'
      }
    },
    initialize: function initialize(element, dragStartTarget) {
      this._element = element;
      this._dragStartTarget = dragStartTarget || element;
    },
    enable: function enable() {
      if (this._enabled) {
        return;
      }
      for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
        L.DomEvent.on(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
      }
      this._enabled = true;
    },
    disable: function disable() {
      if (!this._enabled) {
        return;
      }
      for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
        L.DomEvent.off(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
      }
      this._enabled = false;
      this._moved = false;
    },
    _onDown: function _onDown(e) {
      this._moved = false;
      if (e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) {
        return;
      }
      L.DomEvent.stopPropagation(e);
      if (L.Draggable._disabled) {
        return;
      }
      L.DomUtil.disableImageDrag();
      L.DomUtil.disableTextSelection();
      if (this._moving) {
        return;
      }
      var first = e.touches ? e.touches[0] : e;
      this._startPoint = new L.Point(first.clientX, first.clientY);
      this._startPos = this._newPos = L.DomUtil.getPosition(this._element);
      L.DomEvent.on(document, L.Draggable.MOVE[e.type], this._onMove, this).on(document, L.Draggable.END[e.type], this._onUp, this);
    },
    _onMove: function _onMove(e) {
      if (e.touches && e.touches.length > 1) {
        this._moved = true;
        return;
      }
      var first = e.touches && e.touches.length === 1 ? e.touches[0] : e,
        newPoint = new L.Point(first.clientX, first.clientY),
        offset = newPoint.subtract(this._startPoint);
      if (!offset.x && !offset.y) {
        return;
      }
      if (L.Browser.touch && Math.abs(offset.x) + Math.abs(offset.y) < 3) {
        return;
      }
      L.DomEvent.preventDefault(e);
      if (!this._moved) {
        this.fire('dragstart');
        this._moved = true;
        this._startPos = L.DomUtil.getPosition(this._element).subtract(offset);
        L.DomUtil.addClass(document.body, 'leaflet-dragging');
        this._lastTarget = e.target || e.srcElement;
        L.DomUtil.addClass(this._lastTarget, 'leaflet-drag-target');
      }
      this._newPos = this._startPos.add(offset);
      this._moving = true;
      L.Util.cancelAnimFrame(this._animRequest);
      this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, true, this._dragStartTarget);
    },
    _updatePosition: function _updatePosition() {
      this.fire('predrag');
      L.DomUtil.setPosition(this._element, this._newPos);
      this.fire('drag');
    },
    _onUp: function _onUp() {
      L.DomUtil.removeClass(document.body, 'leaflet-dragging');
      if (this._lastTarget) {
        L.DomUtil.removeClass(this._lastTarget, 'leaflet-drag-target');
        this._lastTarget = null;
      }
      for (var i in L.Draggable.MOVE) {
        L.DomEvent.off(document, L.Draggable.MOVE[i], this._onMove).off(document, L.Draggable.END[i], this._onUp);
      }
      L.DomUtil.enableImageDrag();
      L.DomUtil.enableTextSelection();
      if (this._moved && this._moving) {
        // ensure drag is not fired after dragend
        L.Util.cancelAnimFrame(this._animRequest);
        this.fire('dragend', {
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
      this._moving = false;
    }
  });

  /*
  L.Handler is a base class for handler classes that are used internally to inject
  interaction features like dragging to classes like Map and Marker.
  */

  L.Handler = L.Class.extend({
    initialize: function initialize(map) {
      this._map = map;
    },
    enable: function enable() {
      if (this._enabled) {
        return;
      }
      this._enabled = true;
      this.addHooks();
    },
    disable: function disable() {
      if (!this._enabled) {
        return;
      }
      this._enabled = false;
      this.removeHooks();
    },
    enabled: function enabled() {
      return !!this._enabled;
    }
  });

  /*
  * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
  */

  L.Map.mergeOptions({
    dragging: true,
    inertia: !L.Browser.android23,
    inertiaDeceleration: 3400,
    // px/s^2
    inertiaMaxSpeed: Infinity,
    // px/s
    inertiaThreshold: L.Browser.touch ? 32 : 18,
    // ms
    easeLinearity: 0.25,
    // TODO refactor, move to CRS
    worldCopyJump: false
  });
  L.Map.Drag = L.Handler.extend({
    addHooks: function addHooks() {
      if (!this._draggable) {
        var map = this._map;
        this._draggable = new L.Draggable(map._mapPane, map._container);
        this._draggable.on({
          'dragstart': this._onDragStart,
          'drag': this._onDrag,
          'dragend': this._onDragEnd
        }, this);
        if (map.options.worldCopyJump) {
          this._draggable.on('predrag', this._onPreDrag, this);
          map.on('viewreset', this._onViewReset, this);
          map.whenReady(this._onViewReset, this);
        }
      }
      this._draggable.enable();
    },
    removeHooks: function removeHooks() {
      this._draggable.disable();
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    _onDragStart: function _onDragStart() {
      var map = this._map;
      if (map._panAnim) {
        map._panAnim.stop();
      }
      map.fire('movestart').fire('dragstart');
      if (map.options.inertia) {
        this._positions = [];
        this._times = [];
      }
    },
    _onDrag: function _onDrag() {
      if (this._map.options.inertia) {
        var time = this._lastTime = +new Date(),
          pos = this._lastPos = this._draggable._newPos;
        this._positions.push(pos);
        this._times.push(time);
        if (time - this._times[0] > 200) {
          this._positions.shift();
          this._times.shift();
        }
      }
      this._map.fire('move').fire('drag');
    },
    _onViewReset: function _onViewReset() {
      // TODO fix hardcoded Earth values
      var pxCenter = this._map.getSize()._divideBy(2),
        pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);
      this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
      this._worldWidth = this._map.project([0, 180]).x;
    },
    _onPreDrag: function _onPreDrag() {
      // TODO refactor to be able to adjust map pane position after zoom
      var worldWidth = this._worldWidth,
        halfWidth = Math.round(worldWidth / 2),
        dx = this._initialWorldOffset,
        x = this._draggable._newPos.x,
        newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
        newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
        newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
      this._draggable._newPos.x = newX;
    },
    _onDragEnd: function _onDragEnd(e) {
      var map = this._map,
        options = map.options,
        delay = +new Date() - this._lastTime,
        noInertia = !options.inertia || delay > options.inertiaThreshold || !this._positions[0];
      map.fire('dragend', e);
      if (noInertia) {
        map.fire('moveend');
      } else {
        var direction = this._lastPos.subtract(this._positions[0]),
          duration = (this._lastTime + delay - this._times[0]) / 1000,
          ease = options.easeLinearity,
          speedVector = direction.multiplyBy(ease / duration),
          speed = speedVector.distanceTo([0, 0]),
          limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
          limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),
          decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
          offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();
        if (!offset.x || !offset.y) {
          map.fire('moveend');
        } else {
          offset = map._limitOffset(offset, map.options.maxBounds);
          L.Util.requestAnimFrame(function () {
            map.panBy(offset, {
              duration: decelerationDuration,
              easeLinearity: ease,
              noMoveStart: true
            });
          });
        }
      }
    }
  });
  L.Map.addInitHook('addHandler', 'dragging', L.Map.Drag);

  /*
  * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
  */

  L.Map.mergeOptions({
    doubleClickZoom: true
  });
  L.Map.DoubleClickZoom = L.Handler.extend({
    addHooks: function addHooks() {
      this._map.on('dblclick', this._onDoubleClick, this);
    },
    removeHooks: function removeHooks() {
      this._map.off('dblclick', this._onDoubleClick, this);
    },
    _onDoubleClick: function _onDoubleClick(e) {
      var map = this._map,
        zoom = map.getZoom() + (e.originalEvent.shiftKey ? -1 : 1);
      if (map.options.doubleClickZoom === 'center') {
        map.setZoom(zoom);
      } else {
        map.setZoomAround(e.containerPoint, zoom);
      }
    }
  });
  L.Map.addInitHook('addHandler', 'doubleClickZoom', L.Map.DoubleClickZoom);

  /*
  * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
  */

  L.Map.mergeOptions({
    scrollWheelZoom: true
  });
  L.Map.ScrollWheelZoom = L.Handler.extend({
    addHooks: function addHooks() {
      L.DomEvent.on(this._map._container, 'mousewheel', this._onWheelScroll, this);
      L.DomEvent.on(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
      this._delta = 0;
    },
    removeHooks: function removeHooks() {
      L.DomEvent.off(this._map._container, 'mousewheel', this._onWheelScroll);
      L.DomEvent.off(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
    },
    _onWheelScroll: function _onWheelScroll(e) {
      var delta = L.DomEvent.getWheelDelta(e);
      this._delta += delta;
      this._lastMousePos = this._map.mouseEventToContainerPoint(e);
      if (!this._startTime) {
        this._startTime = +new Date();
      }
      var left = Math.max(40 - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer);
      this._timer = setTimeout(L.bind(this._performZoom, this), left);
      L.DomEvent.preventDefault(e);
      L.DomEvent.stopPropagation(e);
    },
    _performZoom: function _performZoom() {
      var map = this._map,
        delta = this._delta,
        zoom = map.getZoom();
      delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
      delta = Math.max(Math.min(delta, 4), -4);
      delta = map._limitZoom(zoom + delta) - zoom;
      this._delta = 0;
      this._startTime = null;
      if (!delta) {
        return;
      }
      if (map.options.scrollWheelZoom === 'center') {
        map.setZoom(zoom + delta);
      } else {
        map.setZoomAround(this._lastMousePos, zoom + delta);
      }
    }
  });
  L.Map.addInitHook('addHandler', 'scrollWheelZoom', L.Map.ScrollWheelZoom);

  /*
  * Extends the event handling code with double tap support for mobile browsers.
  */

  L.extend(L.DomEvent, {
    _touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart',
    _touchend: L.Browser.msPointer ? 'MSPointerUp' : L.Browser.pointer ? 'pointerup' : 'touchend',
    // inspired by Zepto touch code by Thomas Fuchs
    addDoubleTapListener: function addDoubleTapListener(obj, handler, id) {
      var last,
        doubleTap = false,
        delay = 250,
        touch,
        pre = '_leaflet_',
        touchstart = this._touchstart,
        touchend = this._touchend,
        trackedTouches = [];
      function onTouchStart(e) {
        var count;
        if (L.Browser.pointer) {
          trackedTouches.push(e.pointerId);
          count = trackedTouches.length;
        } else {
          count = e.touches.length;
        }
        if (count > 1) {
          return;
        }
        var now = Date.now(),
          delta = now - (last || now);
        touch = e.touches ? e.touches[0] : e;
        doubleTap = delta > 0 && delta <= delay;
        last = now;
      }
      function onTouchEnd(e) {
        if (L.Browser.pointer) {
          var idx = trackedTouches.indexOf(e.pointerId);
          if (idx === -1) {
            return;
          }
          trackedTouches.splice(idx, 1);
        }
        if (doubleTap) {
          if (L.Browser.pointer) {
            // work around .type being readonly with MSPointer* events
            var newTouch = {},
              prop;

            // jshint forin:false
            for (var i in touch) {
              prop = touch[i];
              if (typeof prop === 'function') {
                newTouch[i] = prop.bind(touch);
              } else {
                newTouch[i] = prop;
              }
            }
            touch = newTouch;
          }
          touch.type = 'dblclick';
          handler(touch);
          last = null;
        }
      }
      obj[pre + touchstart + id] = onTouchStart;
      obj[pre + touchend + id] = onTouchEnd;

      // on pointer we need to listen on the document, otherwise a drag starting on the map and moving off screen
      // will not come through to us, so we will lose track of how many touches are ongoing
      var endElement = L.Browser.pointer ? document.documentElement : obj;
      obj.addEventListener(touchstart, onTouchStart, false);
      endElement.addEventListener(touchend, onTouchEnd, false);
      if (L.Browser.pointer) {
        endElement.addEventListener(L.DomEvent.POINTER_CANCEL, onTouchEnd, false);
      }
      return this;
    },
    removeDoubleTapListener: function removeDoubleTapListener(obj, id) {
      var pre = '_leaflet_';
      obj.removeEventListener(this._touchstart, obj[pre + this._touchstart + id], false);
      (L.Browser.pointer ? document.documentElement : obj).removeEventListener(this._touchend, obj[pre + this._touchend + id], false);
      if (L.Browser.pointer) {
        document.documentElement.removeEventListener(L.DomEvent.POINTER_CANCEL, obj[pre + this._touchend + id], false);
      }
      return this;
    }
  });

  /*
  * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
  */

  L.extend(L.DomEvent, {
    //static
    POINTER_DOWN: L.Browser.msPointer ? 'MSPointerDown' : 'pointerdown',
    POINTER_MOVE: L.Browser.msPointer ? 'MSPointerMove' : 'pointermove',
    POINTER_UP: L.Browser.msPointer ? 'MSPointerUp' : 'pointerup',
    POINTER_CANCEL: L.Browser.msPointer ? 'MSPointerCancel' : 'pointercancel',
    _pointers: [],
    _pointerDocumentListener: false,
    // Provides a touch events wrapper for (ms)pointer events.
    // Based on changes by veproza https://github.com/CloudMade/Leaflet/pull/1019
    //ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

    addPointerListener: function addPointerListener(obj, type, handler, id) {
      switch (type) {
        case 'touchstart':
          return this.addPointerListenerStart(obj, type, handler, id);
        case 'touchend':
          return this.addPointerListenerEnd(obj, type, handler, id);
        case 'touchmove':
          return this.addPointerListenerMove(obj, type, handler, id);
        default:
          throw 'Unknown touch event type';
      }
    },
    addPointerListenerStart: function addPointerListenerStart(obj, type, handler, id) {
      var pre = '_leaflet_',
        pointers = this._pointers;
      var cb = function cb(e) {
        if (e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
          L.DomEvent.preventDefault(e);
        }
        var alreadyInArray = false;
        for (var i = 0; i < pointers.length; i++) {
          if (pointers[i].pointerId === e.pointerId) {
            alreadyInArray = true;
            break;
          }
        }
        if (!alreadyInArray) {
          pointers.push(e);
        }
        e.touches = pointers.slice();
        e.changedTouches = [e];
        handler(e);
      };
      obj[pre + 'touchstart' + id] = cb;
      obj.addEventListener(this.POINTER_DOWN, cb, false);

      // need to also listen for end events to keep the _pointers list accurate
      // this needs to be on the body and never go away
      if (!this._pointerDocumentListener) {
        var internalCb = function internalCb(e) {
          for (var i = 0; i < pointers.length; i++) {
            if (pointers[i].pointerId === e.pointerId) {
              pointers.splice(i, 1);
              break;
            }
          }
        };
        //We listen on the documentElement as any drags that end by moving the touch off the screen get fired there
        document.documentElement.addEventListener(this.POINTER_UP, internalCb, false);
        document.documentElement.addEventListener(this.POINTER_CANCEL, internalCb, false);
        this._pointerDocumentListener = true;
      }
      return this;
    },
    addPointerListenerMove: function addPointerListenerMove(obj, type, handler, id) {
      var pre = '_leaflet_',
        touches = this._pointers;
      function cb(e) {
        // don't fire touch moves when mouse isn't down
        if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) {
          return;
        }
        for (var i = 0; i < touches.length; i++) {
          if (touches[i].pointerId === e.pointerId) {
            touches[i] = e;
            break;
          }
        }
        e.touches = touches.slice();
        e.changedTouches = [e];
        handler(e);
      }
      obj[pre + 'touchmove' + id] = cb;
      obj.addEventListener(this.POINTER_MOVE, cb, false);
      return this;
    },
    addPointerListenerEnd: function addPointerListenerEnd(obj, type, handler, id) {
      var pre = '_leaflet_',
        touches = this._pointers;
      var cb = function cb(e) {
        for (var i = 0; i < touches.length; i++) {
          if (touches[i].pointerId === e.pointerId) {
            touches.splice(i, 1);
            break;
          }
        }
        e.touches = touches.slice();
        e.changedTouches = [e];
        handler(e);
      };
      obj[pre + 'touchend' + id] = cb;
      obj.addEventListener(this.POINTER_UP, cb, false);
      obj.addEventListener(this.POINTER_CANCEL, cb, false);
      return this;
    },
    removePointerListener: function removePointerListener(obj, type, id) {
      var pre = '_leaflet_',
        cb = obj[pre + type + id];
      switch (type) {
        case 'touchstart':
          obj.removeEventListener(this.POINTER_DOWN, cb, false);
          break;
        case 'touchmove':
          obj.removeEventListener(this.POINTER_MOVE, cb, false);
          break;
        case 'touchend':
          obj.removeEventListener(this.POINTER_UP, cb, false);
          obj.removeEventListener(this.POINTER_CANCEL, cb, false);
          break;
      }
      return this;
    }
  });

  /*
  * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
  */

  L.Map.mergeOptions({
    touchZoom: L.Browser.touch && !L.Browser.android23,
    bounceAtZoomLimits: true
  });
  L.Map.TouchZoom = L.Handler.extend({
    addHooks: function addHooks() {
      L.DomEvent.on(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    removeHooks: function removeHooks() {
      L.DomEvent.off(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    _onTouchStart: function _onTouchStart(e) {
      var map = this._map;
      if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) {
        return;
      }
      var p1 = map.mouseEventToLayerPoint(e.touches[0]),
        p2 = map.mouseEventToLayerPoint(e.touches[1]),
        viewCenter = map._getCenterLayerPoint();
      this._startCenter = p1.add(p2)._divideBy(2);
      this._startDist = p1.distanceTo(p2);
      this._moved = false;
      this._zooming = true;
      this._centerOffset = viewCenter.subtract(this._startCenter);
      if (map._panAnim) {
        map._panAnim.stop();
      }
      L.DomEvent.on(document, 'touchmove', this._onTouchMove, this).on(document, 'touchend', this._onTouchEnd, this);
      L.DomEvent.preventDefault(e);
    },
    _onTouchMove: function _onTouchMove(e) {
      var map = this._map;
      if (!e.touches || e.touches.length !== 2 || !this._zooming) {
        return;
      }
      var p1 = map.mouseEventToLayerPoint(e.touches[0]),
        p2 = map.mouseEventToLayerPoint(e.touches[1]);
      this._scale = p1.distanceTo(p2) / this._startDist;
      this._delta = p1._add(p2)._divideBy(2)._subtract(this._startCenter);
      if (this._scale === 1) {
        return;
      }
      if (!map.options.bounceAtZoomLimits) {
        if (map.getZoom() === map.getMinZoom() && this._scale < 1 || map.getZoom() === map.getMaxZoom() && this._scale > 1) {
          return;
        }
      }
      if (!this._moved) {
        L.DomUtil.addClass(map._mapPane, 'leaflet-touching');
        map.fire('movestart').fire('zoomstart');
        this._moved = true;
      }
      L.Util.cancelAnimFrame(this._animRequest);
      this._animRequest = L.Util.requestAnimFrame(this._updateOnMove, this, true, this._map._container);
      L.DomEvent.preventDefault(e);
    },
    _updateOnMove: function _updateOnMove() {
      var map = this._map,
        origin = this._getScaleOrigin(),
        center = map.layerPointToLatLng(origin),
        zoom = map.getScaleZoom(this._scale);
      map._animateZoom(center, zoom, this._startCenter, this._scale, this._delta, false, true);
    },
    _onTouchEnd: function _onTouchEnd() {
      if (!this._moved || !this._zooming) {
        this._zooming = false;
        return;
      }
      var map = this._map;
      this._zooming = false;
      L.DomUtil.removeClass(map._mapPane, 'leaflet-touching');
      L.Util.cancelAnimFrame(this._animRequest);
      L.DomEvent.off(document, 'touchmove', this._onTouchMove).off(document, 'touchend', this._onTouchEnd);
      var origin = this._getScaleOrigin(),
        center = map.layerPointToLatLng(origin),
        oldZoom = map.getZoom(),
        floatZoomDelta = map.getScaleZoom(this._scale) - oldZoom,
        roundZoomDelta = floatZoomDelta > 0 ? Math.ceil(floatZoomDelta) : Math.floor(floatZoomDelta),
        zoom = map._limitZoom(oldZoom + roundZoomDelta),
        scale = map.getZoomScale(zoom) / this._scale;
      map._animateZoom(center, zoom, origin, scale);
    },
    _getScaleOrigin: function _getScaleOrigin() {
      var centerOffset = this._centerOffset.subtract(this._delta).divideBy(this._scale);
      return this._startCenter.add(centerOffset);
    }
  });
  L.Map.addInitHook('addHandler', 'touchZoom', L.Map.TouchZoom);

  /*
  * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
  */

  L.Map.mergeOptions({
    tap: true,
    tapTolerance: 15
  });
  L.Map.Tap = L.Handler.extend({
    addHooks: function addHooks() {
      L.DomEvent.on(this._map._container, 'touchstart', this._onDown, this);
    },
    removeHooks: function removeHooks() {
      L.DomEvent.off(this._map._container, 'touchstart', this._onDown, this);
    },
    _onDown: function _onDown(e) {
      if (!e.touches) {
        return;
      }
      L.DomEvent.preventDefault(e);
      this._fireClick = true;

      // don't simulate click or track longpress if more than 1 touch
      if (e.touches.length > 1) {
        this._fireClick = false;
        clearTimeout(this._holdTimeout);
        return;
      }
      var first = e.touches[0],
        el = first.target;
      this._startPos = this._newPos = new L.Point(first.clientX, first.clientY);

      // if touching a link, highlight it
      if (el.tagName && el.tagName.toLowerCase() === 'a') {
        L.DomUtil.addClass(el, 'leaflet-active');
      }

      // simulate long hold but setting a timeout
      this._holdTimeout = setTimeout(L.bind(function () {
        if (this._isTapValid()) {
          this._fireClick = false;
          this._onUp();
          this._simulateEvent('contextmenu', first);
        }
      }, this), 1000);
      L.DomEvent.on(document, 'touchmove', this._onMove, this).on(document, 'touchend', this._onUp, this);
    },
    _onUp: function _onUp(e) {
      clearTimeout(this._holdTimeout);
      L.DomEvent.off(document, 'touchmove', this._onMove, this).off(document, 'touchend', this._onUp, this);
      if (this._fireClick && e && e.changedTouches) {
        var first = e.changedTouches[0],
          el = first.target;
        if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
          L.DomUtil.removeClass(el, 'leaflet-active');
        }

        // simulate click if the touch didn't move too much
        if (this._isTapValid()) {
          this._simulateEvent('click', first);
        }
      }
    },
    _isTapValid: function _isTapValid() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _onMove: function _onMove(e) {
      var first = e.touches[0];
      this._newPos = new L.Point(first.clientX, first.clientY);
    },
    _simulateEvent: function _simulateEvent(type, e) {
      var simulatedEvent = document.createEvent('MouseEvents');
      simulatedEvent._simulated = true;
      e.target._simulatedClick = true;
      simulatedEvent.initMouseEvent(type, true, true, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
      e.target.dispatchEvent(simulatedEvent);
    }
  });
  if (L.Browser.touch && !L.Browser.pointer) {
    L.Map.addInitHook('addHandler', 'tap', L.Map.Tap);
  }

  /*
  * L.Handler.ShiftDragZoom is used to add shift-drag zoom interaction to the map
  * (zoom to a selected bounding box), enabled by default.
  */

  L.Map.mergeOptions({
    boxZoom: true
  });
  L.Map.BoxZoom = L.Handler.extend({
    initialize: function initialize(map) {
      this._map = map;
      this._container = map._container;
      this._pane = map._panes.overlayPane;
      this._moved = false;
    },
    addHooks: function addHooks() {
      L.DomEvent.on(this._container, 'mousedown', this._onMouseDown, this);
    },
    removeHooks: function removeHooks() {
      L.DomEvent.off(this._container, 'mousedown', this._onMouseDown);
      this._moved = false;
    },
    moved: function moved() {
      return this._moved;
    },
    _onMouseDown: function _onMouseDown(e) {
      this._moved = false;
      if (!e.shiftKey || e.which !== 1 && e.button !== 1) {
        return false;
      }
      L.DomUtil.disableTextSelection();
      L.DomUtil.disableImageDrag();
      this._startLayerPoint = this._map.mouseEventToLayerPoint(e);
      L.DomEvent.on(document, 'mousemove', this._onMouseMove, this).on(document, 'mouseup', this._onMouseUp, this).on(document, 'keydown', this._onKeyDown, this);
    },
    _onMouseMove: function _onMouseMove(e) {
      if (!this._moved) {
        this._box = L.DomUtil.create('div', 'leaflet-zoom-box', this._pane);
        L.DomUtil.setPosition(this._box, this._startLayerPoint);

        //TODO refactor: move cursor to styles
        this._container.style.cursor = 'crosshair';
        this._map.fire('boxzoomstart');
      }
      var startPoint = this._startLayerPoint,
        box = this._box,
        layerPoint = this._map.mouseEventToLayerPoint(e),
        offset = layerPoint.subtract(startPoint),
        newPos = new L.Point(Math.min(layerPoint.x, startPoint.x), Math.min(layerPoint.y, startPoint.y));
      L.DomUtil.setPosition(box, newPos);
      this._moved = true;

      // TODO refactor: remove hardcoded 4 pixels
      box.style.width = Math.max(0, Math.abs(offset.x) - 4) + 'px';
      box.style.height = Math.max(0, Math.abs(offset.y) - 4) + 'px';
    },
    _finish: function _finish() {
      if (this._moved) {
        this._pane.removeChild(this._box);
        this._container.style.cursor = '';
      }
      L.DomUtil.enableTextSelection();
      L.DomUtil.enableImageDrag();
      L.DomEvent.off(document, 'mousemove', this._onMouseMove).off(document, 'mouseup', this._onMouseUp).off(document, 'keydown', this._onKeyDown);
    },
    _onMouseUp: function _onMouseUp(e) {
      this._finish();
      var map = this._map,
        layerPoint = map.mouseEventToLayerPoint(e);
      if (this._startLayerPoint.equals(layerPoint)) {
        return;
      }
      var bounds = new L.LatLngBounds(map.layerPointToLatLng(this._startLayerPoint), map.layerPointToLatLng(layerPoint));
      map.fitBounds(bounds);
      map.fire('boxzoomend', {
        boxZoomBounds: bounds
      });
    },
    _onKeyDown: function _onKeyDown(e) {
      if (e.keyCode === 27) {
        this._finish();
      }
    }
  });
  L.Map.addInitHook('addHandler', 'boxZoom', L.Map.BoxZoom);

  /*
  * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
  */

  L.Map.mergeOptions({
    keyboard: true,
    keyboardPanOffset: 80,
    keyboardZoomOffset: 1
  });
  L.Map.Keyboard = L.Handler.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 173]
    },
    initialize: function initialize(map) {
      this._map = map;
      this._setPanOffset(map.options.keyboardPanOffset);
      this._setZoomOffset(map.options.keyboardZoomOffset);
    },
    addHooks: function addHooks() {
      var container = this._map._container;

      // make the container focusable by tabbing
      if (container.tabIndex === -1) {
        container.tabIndex = '0';
      }
      L.DomEvent.on(container, 'focus', this._onFocus, this).on(container, 'blur', this._onBlur, this).on(container, 'mousedown', this._onMouseDown, this);
      this._map.on('focus', this._addHooks, this).on('blur', this._removeHooks, this);
    },
    removeHooks: function removeHooks() {
      this._removeHooks();
      var container = this._map._container;
      L.DomEvent.off(container, 'focus', this._onFocus, this).off(container, 'blur', this._onBlur, this).off(container, 'mousedown', this._onMouseDown, this);
      this._map.off('focus', this._addHooks, this).off('blur', this._removeHooks, this);
    },
    _onMouseDown: function _onMouseDown() {
      if (this._focused) {
        return;
      }
      var body = document.body,
        docEl = document.documentElement,
        top = body.scrollTop || docEl.scrollTop,
        left = body.scrollLeft || docEl.scrollLeft;
      this._map._container.focus();
      window.scrollTo(left, top);
    },
    _onFocus: function _onFocus() {
      this._focused = true;
      this._map.fire('focus');
    },
    _onBlur: function _onBlur() {
      this._focused = false;
      this._map.fire('blur');
    },
    _setPanOffset: function _setPanOffset(pan) {
      var keys = this._panKeys = {},
        codes = this.keyCodes,
        i,
        len;
      for (i = 0, len = codes.left.length; i < len; i++) {
        keys[codes.left[i]] = [-1 * pan, 0];
      }
      for (i = 0, len = codes.right.length; i < len; i++) {
        keys[codes.right[i]] = [pan, 0];
      }
      for (i = 0, len = codes.down.length; i < len; i++) {
        keys[codes.down[i]] = [0, pan];
      }
      for (i = 0, len = codes.up.length; i < len; i++) {
        keys[codes.up[i]] = [0, -1 * pan];
      }
    },
    _setZoomOffset: function _setZoomOffset(zoom) {
      var keys = this._zoomKeys = {},
        codes = this.keyCodes,
        i,
        len;
      for (i = 0, len = codes.zoomIn.length; i < len; i++) {
        keys[codes.zoomIn[i]] = zoom;
      }
      for (i = 0, len = codes.zoomOut.length; i < len; i++) {
        keys[codes.zoomOut[i]] = -zoom;
      }
    },
    _addHooks: function _addHooks() {
      L.DomEvent.on(document, 'keydown', this._onKeyDown, this);
    },
    _removeHooks: function _removeHooks() {
      L.DomEvent.off(document, 'keydown', this._onKeyDown, this);
    },
    _onKeyDown: function _onKeyDown(e) {
      var key = e.keyCode,
        map = this._map;
      if (key in this._panKeys) {
        if (map._panAnim && map._panAnim._inProgress) {
          return;
        }
        map.panBy(this._panKeys[key]);
        if (map.options.maxBounds) {
          map.panInsideBounds(map.options.maxBounds);
        }
      } else if (key in this._zoomKeys) {
        map.setZoom(map.getZoom() + this._zoomKeys[key]);
      } else {
        return;
      }
      L.DomEvent.stop(e);
    }
  });
  L.Map.addInitHook('addHandler', 'keyboard', L.Map.Keyboard);

  /*
  * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
  */

  L.Handler.MarkerDrag = L.Handler.extend({
    initialize: function initialize(marker) {
      this._marker = marker;
    },
    addHooks: function addHooks() {
      var icon = this._marker._icon;
      if (!this._draggable) {
        this._draggable = new L.Draggable(icon, icon);
      }
      this._draggable.on('dragstart', this._onDragStart, this).on('drag', this._onDrag, this).on('dragend', this._onDragEnd, this);
      this._draggable.enable();
      L.DomUtil.addClass(this._marker._icon, 'leaflet-marker-draggable');
    },
    removeHooks: function removeHooks() {
      this._draggable.off('dragstart', this._onDragStart, this).off('drag', this._onDrag, this).off('dragend', this._onDragEnd, this);
      this._draggable.disable();
      L.DomUtil.removeClass(this._marker._icon, 'leaflet-marker-draggable');
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    _onDragStart: function _onDragStart() {
      this._marker.closePopup().fire('movestart').fire('dragstart');
    },
    _onDrag: function _onDrag() {
      var marker = this._marker,
        shadow = marker._shadow,
        iconPos = L.DomUtil.getPosition(marker._icon),
        latlng = marker._map.layerPointToLatLng(iconPos);

      // update shadow position
      if (shadow) {
        L.DomUtil.setPosition(shadow, iconPos);
      }
      marker._latlng = latlng;
      marker.fire('move', {
        latlng: latlng
      }).fire('drag');
    },
    _onDragEnd: function _onDragEnd(e) {
      this._marker.fire('moveend').fire('dragend', e);
    }
  });

  /*
  * L.Control is a base class for implementing map controls. Handles positioning.
  * All other controls extend from this class.
  */

  L.Control = L.Class.extend({
    options: {
      position: 'topright'
    },
    initialize: function initialize(options) {
      L.setOptions(this, options);
    },
    getPosition: function getPosition() {
      return this.options.position;
    },
    setPosition: function setPosition(position) {
      var map = this._map;
      if (map) {
        map.removeControl(this);
      }
      this.options.position = position;
      if (map) {
        map.addControl(this);
      }
      return this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    addTo: function addTo(map) {
      this._map = map;
      var container = this._container = this.onAdd(map),
        pos = this.getPosition(),
        corner = map._controlCorners[pos];
      L.DomUtil.addClass(container, 'leaflet-control');
      if (pos.indexOf('bottom') !== -1) {
        corner.insertBefore(container, corner.firstChild);
      } else {
        corner.appendChild(container);
      }
      return this;
    },
    removeFrom: function removeFrom(map) {
      var pos = this.getPosition(),
        corner = map._controlCorners[pos];
      corner.removeChild(this._container);
      this._map = null;
      if (this.onRemove) {
        this.onRemove(map);
      }
      return this;
    },
    _refocusOnMap: function _refocusOnMap() {
      if (this._map) {
        this._map.getContainer().focus();
      }
    }
  });
  L.control = function (options) {
    return new L.Control(options);
  };

  // adds control-related methods to L.Map

  L.Map.include({
    addControl: function addControl(control) {
      control.addTo(this);
      return this;
    },
    removeControl: function removeControl(control) {
      control.removeFrom(this);
      return this;
    },
    _initControlPos: function _initControlPos() {
      var corners = this._controlCorners = {},
        l = 'leaflet-',
        container = this._controlContainer = L.DomUtil.create('div', l + 'control-container', this._container);
      function createCorner(vSide, hSide) {
        var className = l + vSide + ' ' + l + hSide;
        corners[vSide + hSide] = L.DomUtil.create('div', className, container);
      }
      createCorner('top', 'left');
      createCorner('top', 'right');
      createCorner('bottom', 'left');
      createCorner('bottom', 'right');
    },
    _clearControlPos: function _clearControlPos() {
      this._container.removeChild(this._controlContainer);
    }
  });

  /*
  * L.Control.Zoom is used for the default zoom buttons on the map.
  */

  L.Control.Zoom = L.Control.extend({
    options: {
      position: 'topleft',
      zoomInText: '+',
      zoomInTitle: 'Zoom in',
      zoomOutText: '-',
      zoomOutTitle: 'Zoom out'
    },
    onAdd: function onAdd(map) {
      var zoomName = 'leaflet-control-zoom',
        container = L.DomUtil.create('div', zoomName + ' leaflet-bar');
      this._map = map;
      this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, zoomName + '-in', container, this._zoomIn, this);
      this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, zoomName + '-out', container, this._zoomOut, this);
      this._updateDisabled();
      map.on('zoomend zoomlevelschange', this._updateDisabled, this);
      return container;
    },
    onRemove: function onRemove(map) {
      map.off('zoomend zoomlevelschange', this._updateDisabled, this);
    },
    _zoomIn: function _zoomIn(e) {
      this._map.zoomIn(e.shiftKey ? 3 : 1);
    },
    _zoomOut: function _zoomOut(e) {
      this._map.zoomOut(e.shiftKey ? 3 : 1);
    },
    _createButton: function _createButton(html, title, className, container, fn, context) {
      var link = L.DomUtil.create('a', className, container);
      link.innerHTML = html;
      link.href = '#';
      link.title = title;
      var stop = L.DomEvent.stopPropagation;
      L.DomEvent.on(link, 'click', stop).on(link, 'mousedown', stop).on(link, 'dblclick', stop).on(link, 'click', L.DomEvent.preventDefault).on(link, 'click', fn, context).on(link, 'click', this._refocusOnMap, context);
      return link;
    },
    _updateDisabled: function _updateDisabled() {
      var map = this._map,
        className = 'leaflet-disabled';
      L.DomUtil.removeClass(this._zoomInButton, className);
      L.DomUtil.removeClass(this._zoomOutButton, className);
      if (map._zoom === map.getMinZoom()) {
        L.DomUtil.addClass(this._zoomOutButton, className);
      }
      if (map._zoom === map.getMaxZoom()) {
        L.DomUtil.addClass(this._zoomInButton, className);
      }
    }
  });
  L.Map.mergeOptions({
    zoomControl: true
  });
  L.Map.addInitHook(function () {
    if (this.options.zoomControl) {
      this.zoomControl = new L.Control.Zoom();
      this.addControl(this.zoomControl);
    }
  });
  L.control.zoom = function (options) {
    return new L.Control.Zoom(options);
  };

  /*
  * L.Control.Attribution is used for displaying attribution on the map (added by default).
  */

  L.Control.Attribution = L.Control.extend({
    options: {
      position: 'bottomright',
      prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
    },
    initialize: function initialize(options) {
      L.setOptions(this, options);
      this._attributions = {};
    },
    onAdd: function onAdd(map) {
      this._container = L.DomUtil.create('div', 'leaflet-control-attribution');
      L.DomEvent.disableClickPropagation(this._container);
      for (var i in map._layers) {
        if (map._layers[i].getAttribution) {
          this.addAttribution(map._layers[i].getAttribution());
        }
      }
      map.on('layeradd', this._onLayerAdd, this).on('layerremove', this._onLayerRemove, this);
      this._update();
      return this._container;
    },
    onRemove: function onRemove(map) {
      map.off('layeradd', this._onLayerAdd).off('layerremove', this._onLayerRemove);
    },
    setPrefix: function setPrefix(prefix) {
      this.options.prefix = prefix;
      this._update();
      return this;
    },
    addAttribution: function addAttribution(text) {
      if (!text) {
        return;
      }
      if (!this._attributions[text]) {
        this._attributions[text] = 0;
      }
      this._attributions[text]++;
      this._update();
      return this;
    },
    removeAttribution: function removeAttribution(text) {
      if (!text) {
        return;
      }
      if (this._attributions[text]) {
        this._attributions[text]--;
        this._update();
      }
      return this;
    },
    _update: function _update() {
      if (!this._map) {
        return;
      }
      var attribs = [];
      for (var i in this._attributions) {
        if (this._attributions[i]) {
          attribs.push(i);
        }
      }
      var prefixAndAttribs = [];
      if (this.options.prefix) {
        prefixAndAttribs.push(this.options.prefix);
      }
      if (attribs.length) {
        prefixAndAttribs.push(attribs.join(', '));
      }
      this._container.innerHTML = prefixAndAttribs.join(' | ');
    },
    _onLayerAdd: function _onLayerAdd(e) {
      if (e.layer.getAttribution) {
        this.addAttribution(e.layer.getAttribution());
      }
    },
    _onLayerRemove: function _onLayerRemove(e) {
      if (e.layer.getAttribution) {
        this.removeAttribution(e.layer.getAttribution());
      }
    }
  });
  L.Map.mergeOptions({
    attributionControl: true
  });
  L.Map.addInitHook(function () {
    if (this.options.attributionControl) {
      this.attributionControl = new L.Control.Attribution().addTo(this);
    }
  });
  L.control.attribution = function (options) {
    return new L.Control.Attribution(options);
  };

  /*
  * L.Control.Scale is used for displaying metric/imperial scale on the map.
  */

  L.Control.Scale = L.Control.extend({
    options: {
      position: 'bottomleft',
      maxWidth: 100,
      metric: true,
      imperial: true,
      updateWhenIdle: false
    },
    onAdd: function onAdd(map) {
      this._map = map;
      var className = 'leaflet-control-scale',
        container = L.DomUtil.create('div', className),
        options = this.options;
      this._addScales(options, className, container);
      map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
      map.whenReady(this._update, this);
      return container;
    },
    onRemove: function onRemove(map) {
      map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
    },
    _addScales: function _addScales(options, className, container) {
      if (options.metric) {
        this._mScale = L.DomUtil.create('div', className + '-line', container);
      }
      if (options.imperial) {
        this._iScale = L.DomUtil.create('div', className + '-line', container);
      }
    },
    _update: function _update() {
      var bounds = this._map.getBounds(),
        centerLat = bounds.getCenter().lat,
        halfWorldMeters = 6378137 * Math.PI * Math.cos(centerLat * Math.PI / 180),
        dist = halfWorldMeters * (bounds.getNorthEast().lng - bounds.getSouthWest().lng) / 180,
        size = this._map.getSize(),
        options = this.options,
        maxMeters = 0;
      if (size.x > 0) {
        maxMeters = dist * (options.maxWidth / size.x);
      }
      this._updateScales(options, maxMeters);
    },
    _updateScales: function _updateScales(options, maxMeters) {
      if (options.metric && maxMeters) {
        this._updateMetric(maxMeters);
      }
      if (options.imperial && maxMeters) {
        this._updateImperial(maxMeters);
      }
    },
    _updateMetric: function _updateMetric(maxMeters) {
      var meters = this._getRoundNum(maxMeters);
      this._mScale.style.width = this._getScaleWidth(meters / maxMeters) + 'px';
      this._mScale.innerHTML = meters < 1000 ? meters + ' m' : meters / 1000 + ' km';
    },
    _updateImperial: function _updateImperial(maxMeters) {
      var maxFeet = maxMeters * 3.2808399,
        scale = this._iScale,
        maxMiles,
        miles,
        feet;
      if (maxFeet > 5280) {
        maxMiles = maxFeet / 5280;
        miles = this._getRoundNum(maxMiles);
        scale.style.width = this._getScaleWidth(miles / maxMiles) + 'px';
        scale.innerHTML = miles + ' mi';
      } else {
        feet = this._getRoundNum(maxFeet);
        scale.style.width = this._getScaleWidth(feet / maxFeet) + 'px';
        scale.innerHTML = feet + ' ft';
      }
    },
    _getScaleWidth: function _getScaleWidth(ratio) {
      return Math.round(this.options.maxWidth * ratio) - 10;
    },
    _getRoundNum: function _getRoundNum(num) {
      var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
        d = num / pow10;
      d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
      return pow10 * d;
    }
  });
  L.control.scale = function (options) {
    return new L.Control.Scale(options);
  };

  /*
  * L.Control.Layers is a control to allow users to switch between different layers on the map.
  */

  L.Control.Layers = L.Control.extend({
    options: {
      collapsed: true,
      position: 'topright',
      autoZIndex: true
    },
    initialize: function initialize(baseLayers, overlays, options) {
      L.setOptions(this, options);
      this._layers = {};
      this._lastZIndex = 0;
      this._handlingClick = false;
      for (var i in baseLayers) {
        this._addLayer(baseLayers[i], i);
      }
      for (i in overlays) {
        this._addLayer(overlays[i], i, true);
      }
    },
    onAdd: function onAdd(map) {
      this._initLayout();
      this._update();
      map.on('layeradd', this._onLayerChange, this).on('layerremove', this._onLayerChange, this);
      return this._container;
    },
    onRemove: function onRemove(map) {
      map.off('layeradd', this._onLayerChange, this).off('layerremove', this._onLayerChange, this);
    },
    addBaseLayer: function addBaseLayer(layer, name) {
      this._addLayer(layer, name);
      this._update();
      return this;
    },
    addOverlay: function addOverlay(layer, name) {
      this._addLayer(layer, name, true);
      this._update();
      return this;
    },
    removeLayer: function removeLayer(layer) {
      var id = L.stamp(layer);
      delete this._layers[id];
      this._update();
      return this;
    },
    _initLayout: function _initLayout() {
      var className = 'leaflet-control-layers',
        container = this._container = L.DomUtil.create('div', className);

      //Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released
      container.setAttribute('aria-haspopup', true);
      if (!L.Browser.touch) {
        L.DomEvent.disableClickPropagation(container).disableScrollPropagation(container);
      } else {
        L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
      }
      var form = this._form = L.DomUtil.create('form', className + '-list');
      if (this.options.collapsed) {
        if (!L.Browser.android) {
          L.DomEvent.on(container, 'mouseover', this._expand, this).on(container, 'mouseout', this._collapse, this);
        }
        var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
        link.href = '#';
        link.title = 'Layers';
        if (L.Browser.touch) {
          L.DomEvent.on(link, 'click', L.DomEvent.stop).on(link, 'click', this._expand, this);
        } else {
          L.DomEvent.on(link, 'focus', this._expand, this);
        }
        //Work around for Firefox android issue https://github.com/Leaflet/Leaflet/issues/2033
        L.DomEvent.on(form, 'click', function () {
          setTimeout(L.bind(this._onInputClick, this), 0);
        }, this);
        this._map.on('click', this._collapse, this);
        // TODO keyboard accessibility
      } else {
        this._expand();
      }
      this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
      this._separator = L.DomUtil.create('div', className + '-separator', form);
      this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);
      container.appendChild(form);
    },
    _addLayer: function _addLayer(layer, name, overlay) {
      var id = L.stamp(layer);
      this._layers[id] = {
        layer: layer,
        name: name,
        overlay: overlay
      };
      if (this.options.autoZIndex && layer.setZIndex) {
        this._lastZIndex++;
        layer.setZIndex(this._lastZIndex);
      }
    },
    _update: function _update() {
      if (!this._container) {
        return;
      }
      this._baseLayersList.innerHTML = '';
      this._overlaysList.innerHTML = '';
      var baseLayersPresent = false,
        overlaysPresent = false,
        i,
        obj;
      for (i in this._layers) {
        obj = this._layers[i];
        this._addItem(obj);
        overlaysPresent = overlaysPresent || obj.overlay;
        baseLayersPresent = baseLayersPresent || !obj.overlay;
      }
      this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
    },
    _onLayerChange: function _onLayerChange(e) {
      var obj = this._layers[L.stamp(e.layer)];
      if (!obj) {
        return;
      }
      if (!this._handlingClick) {
        this._update();
      }
      var type = obj.overlay ? e.type === 'layeradd' ? 'overlayadd' : 'overlayremove' : e.type === 'layeradd' ? 'baselayerchange' : null;
      if (type) {
        this._map.fire(type, obj);
      }
    },
    // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
    _createRadioElement: function _createRadioElement(name, checked) {
      var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"';
      if (checked) {
        radioHtml += ' checked="checked"';
      }
      radioHtml += '/>';
      var radioFragment = document.createElement('div');
      radioFragment.innerHTML = radioHtml;
      return radioFragment.firstChild;
    },
    _addItem: function _addItem(obj) {
      var label = document.createElement('label'),
        input,
        checked = this._map.hasLayer(obj.layer);
      if (obj.overlay) {
        input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'leaflet-control-layers-selector';
        input.defaultChecked = checked;
      } else {
        input = this._createRadioElement('leaflet-base-layers', checked);
      }
      input.layerId = L.stamp(obj.layer);
      L.DomEvent.on(input, 'click', this._onInputClick, this);
      var name = document.createElement('span');
      name.innerHTML = ' ' + obj.name;
      label.appendChild(input);
      label.appendChild(name);
      var container = obj.overlay ? this._overlaysList : this._baseLayersList;
      container.appendChild(label);
      return label;
    },
    _onInputClick: function _onInputClick() {
      var i,
        input,
        obj,
        inputs = this._form.getElementsByTagName('input'),
        inputsLen = inputs.length;
      this._handlingClick = true;
      for (i = 0; i < inputsLen; i++) {
        input = inputs[i];
        obj = this._layers[input.layerId];
        if (input.checked && !this._map.hasLayer(obj.layer)) {
          this._map.addLayer(obj.layer);
        } else if (!input.checked && this._map.hasLayer(obj.layer)) {
          this._map.removeLayer(obj.layer);
        }
      }
      this._handlingClick = false;
      this._refocusOnMap();
    },
    _expand: function _expand() {
      L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
    },
    _collapse: function _collapse() {
      this._container.className = this._container.className.replace(' leaflet-control-layers-expanded', '');
    }
  });
  L.control.layers = function (baseLayers, overlays, options) {
    return new L.Control.Layers(baseLayers, overlays, options);
  };

  /*
  * L.PosAnimation is used by Leaflet internally for pan animations.
  */

  L.PosAnimation = L.Class.extend({
    includes: L.Mixin.Events,
    run: function run(el, newPos, duration, easeLinearity) {
      // (HTMLElement, Point[, Number, Number])
      this.stop();
      this._el = el;
      this._inProgress = true;
      this._newPos = newPos;
      this.fire('start');
      el.style[L.DomUtil.TRANSITION] = 'all ' + (duration || 0.25) + 's cubic-bezier(0,0,' + (easeLinearity || 0.5) + ',1)';
      L.DomEvent.on(el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);
      L.DomUtil.setPosition(el, newPos);

      // toggle reflow, Chrome flickers for some reason if you don't do this
      L.Util.falseFn(el.offsetWidth);

      // there's no native way to track value updates of transitioned properties, so we imitate this
      this._stepTimer = setInterval(L.bind(this._onStep, this), 50);
    },
    stop: function stop() {
      if (!this._inProgress) {
        return;
      }

      // if we just removed the transition property, the element would jump to its final position,
      // so we need to make it stay at the current position

      L.DomUtil.setPosition(this._el, this._getPos());
      this._onTransitionEnd();
      L.Util.falseFn(this._el.offsetWidth); // force reflow in case we are about to start a new animation
    },
    _onStep: function _onStep() {
      var stepPos = this._getPos();
      if (!stepPos) {
        this._onTransitionEnd();
        return;
      }
      // jshint camelcase: false
      // make L.DomUtil.getPosition return intermediate position value during animation
      this._el._leaflet_pos = stepPos;
      this.fire('step');
    },
    // you can't easily get intermediate values of properties animated with CSS3 Transitions,
    // we need to parse computed style (in case of transform it returns matrix string)

    _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
    _getPos: function _getPos() {
      var left,
        top,
        matches,
        el = this._el,
        style = window.getComputedStyle(el);
      if (L.Browser.any3d) {
        matches = style[L.DomUtil.TRANSFORM].match(this._transformRe);
        if (!matches) {
          return;
        }
        left = parseFloat(matches[1]);
        top = parseFloat(matches[2]);
      } else {
        left = parseFloat(style.left);
        top = parseFloat(style.top);
      }
      return new L.Point(left, top, true);
    },
    _onTransitionEnd: function _onTransitionEnd() {
      L.DomEvent.off(this._el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);
      if (!this._inProgress) {
        return;
      }
      this._inProgress = false;
      this._el.style[L.DomUtil.TRANSITION] = '';

      // jshint camelcase: false
      // make sure L.DomUtil.getPosition returns the final position value after animation
      this._el._leaflet_pos = this._newPos;
      clearInterval(this._stepTimer);
      this.fire('step').fire('end');
    }
  });

  /*
  * Extends L.Map to handle panning animations.
  */

  L.Map.include({
    setView: function setView(center, zoom, options) {
      zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
      center = this._limitCenter(L.latLng(center), zoom, this.options.maxBounds);
      options = options || {};
      if (this._panAnim) {
        this._panAnim.stop();
      }
      if (this._loaded && !options.reset && options !== true) {
        if (options.animate !== undefined) {
          options.zoom = L.extend({
            animate: options.animate
          }, options.zoom);
          options.pan = L.extend({
            animate: options.animate
          }, options.pan);
        }

        // try animating pan or zoom
        var animated = this._zoom !== zoom ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) : this._tryAnimatedPan(center, options.pan);
        if (animated) {
          // prevent resize handler call, the view will refresh after animation anyway
          clearTimeout(this._sizeTimer);
          return this;
        }
      }

      // animation didn't start, just reset the map view
      this._resetView(center, zoom);
      return this;
    },
    panBy: function panBy(offset, options) {
      offset = L.point(offset).round();
      options = options || {};
      if (!offset.x && !offset.y) {
        return this;
      }
      if (!this._panAnim) {
        this._panAnim = new L.PosAnimation();
        this._panAnim.on({
          'step': this._onPanTransitionStep,
          'end': this._onPanTransitionEnd
        }, this);
      }

      // don't fire movestart if animating inertia
      if (!options.noMoveStart) {
        this.fire('movestart');
      }

      // animate pan unless animate: false specified
      if (options.animate !== false) {
        L.DomUtil.addClass(this._mapPane, 'leaflet-pan-anim');
        var newPos = this._getMapPanePos().subtract(offset);
        this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
      } else {
        this._rawPanBy(offset);
        this.fire('move').fire('moveend');
      }
      return this;
    },
    _onPanTransitionStep: function _onPanTransitionStep() {
      this.fire('move');
    },
    _onPanTransitionEnd: function _onPanTransitionEnd() {
      L.DomUtil.removeClass(this._mapPane, 'leaflet-pan-anim');
      this.fire('moveend');
    },
    _tryAnimatedPan: function _tryAnimatedPan(center, options) {
      // difference between the new and current centers in pixels
      var offset = this._getCenterOffset(center)._floor();

      // don't animate too far unless animate: true specified in options
      if ((options && options.animate) !== true && !this.getSize().contains(offset)) {
        return false;
      }
      this.panBy(offset, options);
      return true;
    }
  });

  /*
  * L.PosAnimation fallback implementation that powers Leaflet pan animations
  * in browsers that don't support CSS3 Transitions.
  */

  L.PosAnimation = L.DomUtil.TRANSITION ? L.PosAnimation : L.PosAnimation.extend({
    run: function run(el, newPos, duration, easeLinearity) {
      // (HTMLElement, Point[, Number, Number])
      this.stop();
      this._el = el;
      this._inProgress = true;
      this._duration = duration || 0.25;
      this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
      this._startPos = L.DomUtil.getPosition(el);
      this._offset = newPos.subtract(this._startPos);
      this._startTime = +new Date();
      this.fire('start');
      this._animate();
    },
    stop: function stop() {
      if (!this._inProgress) {
        return;
      }
      this._step();
      this._complete();
    },
    _animate: function _animate() {
      // animation loop
      this._animId = L.Util.requestAnimFrame(this._animate, this);
      this._step();
    },
    _step: function _step() {
      var elapsed = +new Date() - this._startTime,
        duration = this._duration * 1000;
      if (elapsed < duration) {
        this._runFrame(this._easeOut(elapsed / duration));
      } else {
        this._runFrame(1);
        this._complete();
      }
    },
    _runFrame: function _runFrame(progress) {
      var pos = this._startPos.add(this._offset.multiplyBy(progress));
      L.DomUtil.setPosition(this._el, pos);
      this.fire('step');
    },
    _complete: function _complete() {
      L.Util.cancelAnimFrame(this._animId);
      this._inProgress = false;
      this.fire('end');
    },
    _easeOut: function _easeOut(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    }
  });

  /*
  * Extends L.Map to handle zoom animations.
  */

  L.Map.mergeOptions({
    zoomAnimation: true,
    zoomAnimationThreshold: 4
  });
  if (L.DomUtil.TRANSITION) {
    L.Map.addInitHook(function () {
      // don't animate on browsers without hardware-accelerated transitions or old Android/Opera
      this._zoomAnimated = this.options.zoomAnimation && L.DomUtil.TRANSITION && L.Browser.any3d && !L.Browser.android23 && !L.Browser.mobileOpera;

      // zoom transitions run with the same duration for all layers, so if one of transitionend events
      // happens after starting zoom animation (propagating to the map pane), we know that it ended globally
      if (this._zoomAnimated) {
        L.DomEvent.on(this._mapPane, L.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
      }
    });
  }
  L.Map.include(!L.DomUtil.TRANSITION ? {} : {
    _catchTransitionEnd: function _catchTransitionEnd(e) {
      if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
        this._onZoomTransitionEnd();
      }
    },
    _nothingToAnimate: function _nothingToAnimate() {
      return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
    },
    _tryAnimatedZoom: function _tryAnimatedZoom(center, zoom, options) {
      if (this._animatingZoom) {
        return true;
      }
      options = options || {};

      // don't animate if disabled, not supported or zoom difference is too large
      if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) {
        return false;
      }

      // offset is the pixel coords of the zoom origin relative to the current center
      var scale = this.getZoomScale(zoom),
        offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale),
        origin = this._getCenterLayerPoint()._add(offset);

      // don't animate if the zoom origin isn't within one screen from the current center, unless forced
      if (options.animate !== true && !this.getSize().contains(offset)) {
        return false;
      }
      this.fire('movestart').fire('zoomstart');
      this._animateZoom(center, zoom, origin, scale, null, true);
      return true;
    },
    _animateZoom: function _animateZoom(center, zoom, origin, scale, delta, backwards, forTouchZoom) {
      if (!forTouchZoom) {
        this._animatingZoom = true;
      }

      // put transform transition on all layers with leaflet-zoom-animated class
      L.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim');

      // remember what center/zoom to set after animation
      this._animateToCenter = center;
      this._animateToZoom = zoom;

      // disable any dragging during animation
      if (L.Draggable) {
        L.Draggable._disabled = true;
      }
      L.Util.requestAnimFrame(function () {
        this.fire('zoomanim', {
          center: center,
          zoom: zoom,
          origin: origin,
          scale: scale,
          delta: delta,
          backwards: backwards
        });
        // horrible hack to work around a Chrome bug https://github.com/Leaflet/Leaflet/issues/3689
        setTimeout(L.bind(this._onZoomTransitionEnd, this), 250);
      }, this);
    },
    _onZoomTransitionEnd: function _onZoomTransitionEnd() {
      if (!this._animatingZoom) {
        return;
      }
      this._animatingZoom = false;
      L.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim');
      L.Util.requestAnimFrame(function () {
        this._resetView(this._animateToCenter, this._animateToZoom, true, true);
        if (L.Draggable) {
          L.Draggable._disabled = false;
        }
      }, this);
    }
  });

  /*
  Zoom animation logic for L.TileLayer.
  */

  L.TileLayer.include({
    _animateZoom: function _animateZoom(e) {
      if (!this._animating) {
        this._animating = true;
        this._prepareBgBuffer();
      }
      var bg = this._bgBuffer,
        transform = L.DomUtil.TRANSFORM,
        initialTransform = e.delta ? L.DomUtil.getTranslateString(e.delta) : bg.style[transform],
        scaleStr = L.DomUtil.getScaleString(e.scale, e.origin);
      bg.style[transform] = e.backwards ? scaleStr + ' ' + initialTransform : initialTransform + ' ' + scaleStr;
    },
    _endZoomAnim: function _endZoomAnim() {
      var front = this._tileContainer,
        bg = this._bgBuffer;
      front.style.visibility = '';
      front.parentNode.appendChild(front); // Bring to fore

      // force reflow
      L.Util.falseFn(bg.offsetWidth);
      var zoom = this._map.getZoom();
      if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
        this._clearBgBuffer();
      }
      this._animating = false;
    },
    _clearBgBuffer: function _clearBgBuffer() {
      var map = this._map;
      if (map && !map._animatingZoom && !map.touchZoom._zooming) {
        this._bgBuffer.innerHTML = '';
        this._bgBuffer.style[L.DomUtil.TRANSFORM] = '';
      }
    },
    _prepareBgBuffer: function _prepareBgBuffer() {
      var front = this._tileContainer,
        bg = this._bgBuffer;

      // if foreground layer doesn't have many tiles but bg layer does,
      // keep the existing bg layer and just zoom it some more

      var bgLoaded = this._getLoadedTilesPercentage(bg),
        frontLoaded = this._getLoadedTilesPercentage(front);
      if (bg && bgLoaded > 0.5 && frontLoaded < 0.5) {
        front.style.visibility = 'hidden';
        this._stopLoadingImages(front);
        return;
      }

      // prepare the buffer to become the front tile pane
      bg.style.visibility = 'hidden';
      bg.style[L.DomUtil.TRANSFORM] = '';

      // switch out the current layer to be the new bg layer (and vice-versa)
      this._tileContainer = bg;
      bg = this._bgBuffer = front;
      this._stopLoadingImages(bg);

      //prevent bg buffer from clearing right after zoom
      clearTimeout(this._clearBgBufferTimer);
    },
    _getLoadedTilesPercentage: function _getLoadedTilesPercentage(container) {
      var tiles = container.getElementsByTagName('img'),
        i,
        len,
        count = 0;
      for (i = 0, len = tiles.length; i < len; i++) {
        if (tiles[i].complete) {
          count++;
        }
      }
      return count / len;
    },
    // stops loading all tiles in the background layer
    _stopLoadingImages: function _stopLoadingImages(container) {
      var tiles = Array.prototype.slice.call(container.getElementsByTagName('img')),
        i,
        len,
        tile;
      for (i = 0, len = tiles.length; i < len; i++) {
        tile = tiles[i];
        if (!tile.complete) {
          tile.onload = L.Util.falseFn;
          tile.onerror = L.Util.falseFn;
          tile.src = L.Util.emptyImageUrl;
          tile.parentNode.removeChild(tile);
        }
      }
    }
  });

  /*
  * Provides L.Map with convenient shortcuts for using browser geolocation features.
  */

  L.Map.include({
    _defaultLocateOptions: {
      watch: false,
      setView: false,
      maxZoom: Infinity,
      timeout: 10000,
      maximumAge: 0,
      enableHighAccuracy: false
    },
    locate: function locate( /*Object*/options) {
      options = this._locateOptions = L.extend(this._defaultLocateOptions, options);
      if (!navigator.geolocation) {
        this._handleGeolocationError({
          code: 0,
          message: 'Geolocation not supported.'
        });
        return this;
      }
      var onResponse = L.bind(this._handleGeolocationResponse, this),
        onError = L.bind(this._handleGeolocationError, this);
      if (options.watch) {
        this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
      } else {
        navigator.geolocation.getCurrentPosition(onResponse, onError, options);
      }
      return this;
    },
    stopLocate: function stopLocate() {
      if (navigator.geolocation) {
        navigator.geolocation.clearWatch(this._locationWatchId);
      }
      if (this._locateOptions) {
        this._locateOptions.setView = false;
      }
      return this;
    },
    _handleGeolocationError: function _handleGeolocationError(error) {
      var c = error.code,
        message = error.message || (c === 1 ? 'permission denied' : c === 2 ? 'position unavailable' : 'timeout');
      if (this._locateOptions.setView && !this._loaded) {
        this.fitWorld();
      }
      this.fire('locationerror', {
        code: c,
        message: 'Geolocation error: ' + message + '.'
      });
    },
    _handleGeolocationResponse: function _handleGeolocationResponse(pos) {
      var lat = pos.coords.latitude,
        lng = pos.coords.longitude,
        latlng = new L.LatLng(lat, lng),
        latAccuracy = 180 * pos.coords.accuracy / 40075017,
        lngAccuracy = latAccuracy / Math.cos(L.LatLng.DEG_TO_RAD * lat),
        bounds = L.latLngBounds([lat - latAccuracy, lng - lngAccuracy], [lat + latAccuracy, lng + lngAccuracy]),
        options = this._locateOptions;
      if (options.setView) {
        var zoom = Math.min(this.getBoundsZoom(bounds), options.maxZoom);
        this.setView(latlng, zoom);
      }
      var data = {
        latlng: latlng,
        bounds: bounds,
        timestamp: pos.timestamp
      };
      for (var i in pos.coords) {
        if (typeof pos.coords[i] === 'number') {
          data[i] = pos.coords[i];
        }
      }
      this.fire('locationfound', data);
    }
  });
})(window, document);

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/leaflet/leaflet.markercluster.js":
/*!**************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/leaflet/leaflet.markercluster.js ***!
  \**************************************************************************/
/***/ (() => {

/*
 Leaflet.markercluster, Provides Beautiful Animated Marker Clustering functionality for Leaflet, a JS library for interactive maps.
 https://github.com/Leaflet/Leaflet.markercluster
 (c) 2012-2013, Dave Leaver, smartrak
*/
!function (t, e) {
  L.MarkerClusterGroup = L.FeatureGroup.extend({
    options: {
      maxClusterRadius: 80,
      iconCreateFunction: null,
      spiderfyOnMaxZoom: !0,
      showCoverageOnHover: !0,
      zoomToBoundsOnClick: !0,
      singleMarkerMode: !1,
      disableClusteringAtZoom: null,
      removeOutsideVisibleBounds: !0,
      animateAddingMarkers: !1,
      spiderfyDistanceMultiplier: 1,
      chunkedLoading: !1,
      chunkInterval: 200,
      chunkDelay: 50,
      chunkProgress: null,
      polygonOptions: {}
    },
    initialize: function initialize(t) {
      L.Util.setOptions(this, t), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = [];
    },
    addLayer: function addLayer(t) {
      if (t instanceof L.LayerGroup) {
        var e = [];
        for (var i in t._layers) e.push(t._layers[i]);
        return this.addLayers(e);
      }
      if (!t.getLatLng) return this._nonPointGroup.addLayer(t), this;
      if (!this._map) return this._needsClustering.push(t), this;
      if (this.hasLayer(t)) return this;
      this._unspiderfy && this._unspiderfy(), this._addLayer(t, this._maxZoom);
      var n = t,
        s = this._map.getZoom();
      if (t.__parent) for (; n.__parent._zoom >= s;) n = n.__parent;
      return this._currentShownBounds.contains(n.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(t, n) : this._animationAddLayerNonAnimated(t, n)), this;
    },
    removeLayer: function removeLayer(t) {
      if (t instanceof L.LayerGroup) {
        var e = [];
        for (var i in t._layers) e.push(t._layers[i]);
        return this.removeLayers(e);
      }
      return t.getLatLng ? this._map ? t.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(t)), this._removeLayer(t, !0), this._featureGroup.hasLayer(t) && (this._featureGroup.removeLayer(t), t.setOpacity && t.setOpacity(1)), this) : this : (!this._arraySplice(this._needsClustering, t) && this.hasLayer(t) && this._needsRemoving.push(t), this) : (this._nonPointGroup.removeLayer(t), this);
    },
    addLayers: function addLayers(t) {
      var e,
        i,
        n,
        s,
        r = this._featureGroup,
        o = this._nonPointGroup,
        a = this.options.chunkedLoading,
        h = this.options.chunkInterval,
        _ = this.options.chunkProgress;
      if (this._map) {
        var u = 0,
          l = new Date().getTime(),
          d = L.bind(function () {
            for (var e = new Date().getTime(); u < t.length; u++) {
              if (a && 0 === u % 200) {
                var i = new Date().getTime() - e;
                if (i > h) break;
              }
              if (s = t[u], s.getLatLng) {
                if (!this.hasLayer(s) && (this._addLayer(s, this._maxZoom), s.__parent && 2 === s.__parent.getChildCount())) {
                  var n = s.__parent.getAllChildMarkers(),
                    p = n[0] === s ? n[1] : n[0];
                  r.removeLayer(p);
                }
              } else o.addLayer(s);
            }
            _ && _(u, t.length, new Date().getTime() - l), u === t.length ? (this._featureGroup.eachLayer(function (t) {
              t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon();
            }), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(d, this.options.chunkDelay);
          }, this);
        d();
      } else {
        for (e = [], i = 0, n = t.length; n > i; i++) s = t[i], s.getLatLng ? this.hasLayer(s) || e.push(s) : o.addLayer(s);
        this._needsClustering = this._needsClustering.concat(e);
      }
      return this;
    },
    removeLayers: function removeLayers(t) {
      var e,
        i,
        n,
        s = this._featureGroup,
        r = this._nonPointGroup;
      if (!this._map) {
        for (e = 0, i = t.length; i > e; e++) n = t[e], this._arraySplice(this._needsClustering, n), r.removeLayer(n);
        return this;
      }
      for (e = 0, i = t.length; i > e; e++) n = t[e], n.__parent ? (this._removeLayer(n, !0, !0), s.hasLayer(n) && (s.removeLayer(n), n.setOpacity && n.setOpacity(1))) : r.removeLayer(n);
      return this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), s.eachLayer(function (t) {
        t instanceof L.MarkerCluster && t._updateIcon();
      }), this;
    },
    clearLayers: function clearLayers() {
      return this._map || (this._needsClustering = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function (t) {
        delete t.__parent;
      }), this._map && this._generateInitialClusters(), this;
    },
    getBounds: function getBounds() {
      var t = new L.LatLngBounds();
      this._topClusterLevel && t.extend(this._topClusterLevel._bounds);
      for (var e = this._needsClustering.length - 1; e >= 0; e--) t.extend(this._needsClustering[e].getLatLng());
      return t.extend(this._nonPointGroup.getBounds()), t;
    },
    eachLayer: function eachLayer(t, e) {
      var i,
        n = this._needsClustering.slice();
      for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(n), i = n.length - 1; i >= 0; i--) t.call(e, n[i]);
      this._nonPointGroup.eachLayer(t, e);
    },
    getLayers: function getLayers() {
      var t = [];
      return this.eachLayer(function (e) {
        t.push(e);
      }), t;
    },
    getLayer: function getLayer(t) {
      var e = null;
      return this.eachLayer(function (i) {
        L.stamp(i) === t && (e = i);
      }), e;
    },
    hasLayer: function hasLayer(t) {
      if (!t) return !1;
      var e,
        i = this._needsClustering;
      for (e = i.length - 1; e >= 0; e--) if (i[e] === t) return !0;
      for (i = this._needsRemoving, e = i.length - 1; e >= 0; e--) if (i[e] === t) return !1;
      return !(!t.__parent || t.__parent._group !== this) || this._nonPointGroup.hasLayer(t);
    },
    zoomToShowLayer: function zoomToShowLayer(t, e) {
      var i = function i() {
        if ((t._icon || t.__parent._icon) && !this._inZoomAnimation) if (this._map.off("moveend", i, this), this.off("animationend", i, this), t._icon) e();else if (t.__parent._icon) {
          var n = function n() {
            this.off("spiderfied", n, this), e();
          };
          this.on("spiderfied", n, this), t.__parent.spiderfy();
        }
      };
      if (t._icon && this._map.getBounds().contains(t.getLatLng())) e();else if (t.__parent._zoom < this._map.getZoom()) this._map.on("moveend", i, this), this._map.panTo(t.getLatLng());else {
        var _n = function n() {
          this._map.off("movestart", _n, this), _n = null;
        };
        this._map.on("movestart", _n, this), this._map.on("moveend", i, this), this.on("animationend", i, this), t.__parent.zoomToBounds(), _n && i.call(this);
      }
    },
    onAdd: function onAdd(t) {
      this._map = t;
      var e, i, n;
      if (!isFinite(this._map.getMaxZoom())) throw "Map has no maxZoom specified";
      for (this._featureGroup.onAdd(t), this._nonPointGroup.onAdd(t), this._gridClusters || this._generateInitialClusters(), e = 0, i = this._needsRemoving.length; i > e; e++) n = this._needsRemoving[e], this._removeLayer(n, !0);
      this._needsRemoving = [], this._zoom = this._map.getZoom(), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), i = this._needsClustering, this._needsClustering = [], this.addLayers(i);
    },
    onRemove: function onRemove(t) {
      t.off("zoomend", this._zoomEnd, this), t.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), this._hideCoverage(), this._featureGroup.onRemove(t), this._nonPointGroup.onRemove(t), this._featureGroup.clearLayers(), this._map = null;
    },
    getVisibleParent: function getVisibleParent(t) {
      for (var e = t; e && !e._icon;) e = e.__parent;
      return e || null;
    },
    _arraySplice: function _arraySplice(t, e) {
      for (var i = t.length - 1; i >= 0; i--) if (t[i] === e) return t.splice(i, 1), !0;
    },
    _removeLayer: function _removeLayer(t, e, i) {
      var n = this._gridClusters,
        s = this._gridUnclustered,
        r = this._featureGroup,
        o = this._map;
      if (e) for (var a = this._maxZoom; a >= 0 && s[a].removeObject(t, o.project(t.getLatLng(), a)); a--);
      var h,
        _ = t.__parent,
        u = _._markers;
      for (this._arraySplice(u, t); _ && (_._childCount--, !(_._zoom < 0));) e && _._childCount <= 1 ? (h = _._markers[0] === t ? _._markers[1] : _._markers[0], n[_._zoom].removeObject(_, o.project(_._cLatLng, _._zoom)), s[_._zoom].addObject(h, o.project(h.getLatLng(), _._zoom)), this._arraySplice(_.__parent._childClusters, _), _.__parent._markers.push(h), h.__parent = _.__parent, _._icon && (r.removeLayer(_), i || r.addLayer(h))) : (_._recalculateBounds(), i && _._icon || _._updateIcon()), _ = _.__parent;
      delete t.__parent;
    },
    _isOrIsParent: function _isOrIsParent(t, e) {
      for (; e;) {
        if (t === e) return !0;
        e = e.parentNode;
      }
      return !1;
    },
    _propagateEvent: function _propagateEvent(t) {
      if (t.layer instanceof L.MarkerCluster) {
        if (t.originalEvent && this._isOrIsParent(t.layer._icon, t.originalEvent.relatedTarget)) return;
        t.type = "cluster" + t.type;
      }
      this.fire(t.type, t);
    },
    _defaultIconCreateFunction: function _defaultIconCreateFunction(t) {
      var e = t.getChildCount(),
        i = " marker-cluster-";
      return i += 10 > e ? "small" : 100 > e ? "medium" : "large", new L.DivIcon({
        html: "<div><span>" + e + "</span></div>",
        className: "marker-cluster" + i,
        iconSize: new L.Point(40, 40)
      });
    },
    _bindEvents: function _bindEvents() {
      var t = this._map,
        e = this.options.spiderfyOnMaxZoom,
        i = this.options.showCoverageOnHover,
        n = this.options.zoomToBoundsOnClick;
      (e || n) && this.on("clusterclick", this._zoomOrSpiderfy, this), i && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), t.on("zoomend", this._hideCoverage, this));
    },
    _zoomOrSpiderfy: function _zoomOrSpiderfy(t) {
      var e = this._map;
      e.getMaxZoom() === e.getZoom() ? this.options.spiderfyOnMaxZoom && t.layer.spiderfy() : this.options.zoomToBoundsOnClick && t.layer.zoomToBounds(), t.originalEvent && 13 === t.originalEvent.keyCode && e._container.focus();
    },
    _showCoverage: function _showCoverage(t) {
      var e = this._map;
      this._inZoomAnimation || (this._shownPolygon && e.removeLayer(this._shownPolygon), t.layer.getChildCount() > 2 && t.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(t.layer.getConvexHull(), this.options.polygonOptions), e.addLayer(this._shownPolygon)));
    },
    _hideCoverage: function _hideCoverage() {
      this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null);
    },
    _unbindEvents: function _unbindEvents() {
      var t = this.options.spiderfyOnMaxZoom,
        e = this.options.showCoverageOnHover,
        i = this.options.zoomToBoundsOnClick,
        n = this._map;
      (t || i) && this.off("clusterclick", this._zoomOrSpiderfy, this), e && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), n.off("zoomend", this._hideCoverage, this));
    },
    _zoomEnd: function _zoomEnd() {
      this._map && (this._mergeSplitClusters(), this._zoom = this._map._zoom, this._currentShownBounds = this._getExpandedVisibleBounds());
    },
    _moveEnd: function _moveEnd() {
      if (!this._inZoomAnimation) {
        var t = this._getExpandedVisibleBounds();
        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._map._zoom, t), this._currentShownBounds = t;
      }
    },
    _generateInitialClusters: function _generateInitialClusters() {
      var t = this._map.getMaxZoom(),
        e = this.options.maxClusterRadius,
        i = e;
      "function" != typeof e && (i = function i() {
        return e;
      }), this.options.disableClusteringAtZoom && (t = this.options.disableClusteringAtZoom - 1), this._maxZoom = t, this._gridClusters = {}, this._gridUnclustered = {};
      for (var n = t; n >= 0; n--) this._gridClusters[n] = new L.DistanceGrid(i(n)), this._gridUnclustered[n] = new L.DistanceGrid(i(n));
      this._topClusterLevel = new L.MarkerCluster(this, -1);
    },
    _addLayer: function _addLayer(t, e) {
      var i,
        n,
        s = this._gridClusters,
        r = this._gridUnclustered;
      for (this.options.singleMarkerMode && (t.options.icon = this.options.iconCreateFunction({
        getChildCount: function getChildCount() {
          return 1;
        },
        getAllChildMarkers: function getAllChildMarkers() {
          return [t];
        }
      })); e >= 0; e--) {
        i = this._map.project(t.getLatLng(), e);
        var o = s[e].getNearObject(i);
        if (o) return o._addChild(t), t.__parent = o, void 0;
        if (o = r[e].getNearObject(i)) {
          var a = o.__parent;
          a && this._removeLayer(o, !1);
          var h = new L.MarkerCluster(this, e, o, t);
          s[e].addObject(h, this._map.project(h._cLatLng, e)), o.__parent = h, t.__parent = h;
          var _ = h;
          for (n = e - 1; n > a._zoom; n--) _ = new L.MarkerCluster(this, n, _), s[n].addObject(_, this._map.project(o.getLatLng(), n));
          for (a._addChild(_), n = e; n >= 0 && r[n].removeObject(o, this._map.project(o.getLatLng(), n)); n--);
          return;
        }
        r[e].addObject(t, i);
      }
      this._topClusterLevel._addChild(t), t.__parent = this._topClusterLevel;
    },
    _enqueue: function _enqueue(t) {
      this._queue.push(t), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300));
    },
    _processQueue: function _processQueue() {
      for (var t = 0; t < this._queue.length; t++) this._queue[t].call(this);
      this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null;
    },
    _mergeSplitClusters: function _mergeSplitClusters() {
      this._processQueue(), this._zoom < this._map._zoom && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, this._map._zoom)) : this._zoom > this._map._zoom ? (this._animationStart(), this._animationZoomOut(this._zoom, this._map._zoom)) : this._moveEnd();
    },
    _getExpandedVisibleBounds: function _getExpandedVisibleBounds() {
      if (!this.options.removeOutsideVisibleBounds) return this._map.getBounds();
      var t = this._map,
        e = t.getBounds(),
        i = e._southWest,
        n = e._northEast,
        s = L.Browser.mobile ? 0 : Math.abs(i.lat - n.lat),
        r = L.Browser.mobile ? 0 : Math.abs(i.lng - n.lng);
      return new L.LatLngBounds(new L.LatLng(i.lat - s, i.lng - r, !0), new L.LatLng(n.lat + s, n.lng + r, !0));
    },
    _animationAddLayerNonAnimated: function _animationAddLayerNonAnimated(t, e) {
      if (e === t) this._featureGroup.addLayer(t);else if (2 === e._childCount) {
        e._addToMap();
        var i = e.getAllChildMarkers();
        this._featureGroup.removeLayer(i[0]), this._featureGroup.removeLayer(i[1]);
      } else e._updateIcon();
    }
  }), L.MarkerClusterGroup.include(L.DomUtil.TRANSITION ? {
    _animationStart: function _animationStart() {
      this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++;
    },
    _animationEnd: function _animationEnd() {
      this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend");
    },
    _animationZoomIn: function _animationZoomIn(t, e) {
      var i,
        n = this._getExpandedVisibleBounds(),
        s = this._featureGroup;
      this._topClusterLevel._recursively(n, t, 0, function (r) {
        var o,
          a = r._latlng,
          h = r._markers;
        for (n.contains(a) || (a = null), r._isSingleParent() && t + 1 === e ? (s.removeLayer(r), r._recursivelyAddChildrenToMap(null, e, n)) : (r.setOpacity(0), r._recursivelyAddChildrenToMap(a, e, n)), i = h.length - 1; i >= 0; i--) o = h[i], n.contains(o._latlng) || s.removeLayer(o);
      }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(n, e), s.eachLayer(function (t) {
        t instanceof L.MarkerCluster || !t._icon || t.setOpacity(1);
      }), this._topClusterLevel._recursively(n, t, e, function (t) {
        t._recursivelyRestoreChildPositions(e);
      }), this._enqueue(function () {
        this._topClusterLevel._recursively(n, t, 0, function (t) {
          s.removeLayer(t), t.setOpacity(1);
        }), this._animationEnd();
      });
    },
    _animationZoomOut: function _animationZoomOut(t, e) {
      this._animationZoomOutSingle(this._topClusterLevel, t - 1, e), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t, this._getExpandedVisibleBounds());
    },
    _animationZoomOutSingle: function _animationZoomOutSingle(t, e, i) {
      var n = this._getExpandedVisibleBounds();
      t._recursivelyAnimateChildrenInAndAddSelfToMap(n, e + 1, i);
      var s = this;
      this._forceLayout(), t._recursivelyBecomeVisible(n, i), this._enqueue(function () {
        if (1 === t._childCount) {
          var r = t._markers[0];
          r.setLatLng(r.getLatLng()), r.setOpacity && r.setOpacity(1);
        } else t._recursively(n, i, 0, function (t) {
          t._recursivelyRemoveChildrenFromMap(n, e + 1);
        });
        s._animationEnd();
      });
    },
    _animationAddLayer: function _animationAddLayer(t, e) {
      var i = this,
        n = this._featureGroup;
      n.addLayer(t), e !== t && (e._childCount > 2 ? (e._updateIcon(), this._forceLayout(), this._animationStart(), t._setPos(this._map.latLngToLayerPoint(e.getLatLng())), t.setOpacity(0), this._enqueue(function () {
        n.removeLayer(t), t.setOpacity(1), i._animationEnd();
      })) : (this._forceLayout(), i._animationStart(), i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._map.getZoom())));
    },
    _forceLayout: function _forceLayout() {
      L.Util.falseFn(e.body.offsetWidth);
    }
  } : {
    _animationStart: function _animationStart() {},
    _animationZoomIn: function _animationZoomIn(t, e) {
      this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this.fire("animationend");
    },
    _animationZoomOut: function _animationZoomOut(t, e) {
      this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this.fire("animationend");
    },
    _animationAddLayer: function _animationAddLayer(t, e) {
      this._animationAddLayerNonAnimated(t, e);
    }
  }), L.markerClusterGroup = function (t) {
    return new L.MarkerClusterGroup(t);
  }, L.MarkerCluster = L.Marker.extend({
    initialize: function initialize(t, e, i, n) {
      L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0, 0), {
        icon: this
      }), this._group = t, this._zoom = e, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._bounds = new L.LatLngBounds(), i && this._addChild(i), n && this._addChild(n);
    },
    getAllChildMarkers: function getAllChildMarkers(t) {
      t = t || [];
      for (var e = this._childClusters.length - 1; e >= 0; e--) this._childClusters[e].getAllChildMarkers(t);
      for (var i = this._markers.length - 1; i >= 0; i--) t.push(this._markers[i]);
      return t;
    },
    getChildCount: function getChildCount() {
      return this._childCount;
    },
    zoomToBounds: function zoomToBounds() {
      for (var t, e = this._childClusters.slice(), i = this._group._map, n = i.getBoundsZoom(this._bounds), s = this._zoom + 1, r = i.getZoom(); e.length > 0 && n > s;) {
        s++;
        var o = [];
        for (t = 0; t < e.length; t++) o = o.concat(e[t]._childClusters);
        e = o;
      }
      n > s ? this._group._map.setView(this._latlng, s) : r >= n ? this._group._map.setView(this._latlng, r + 1) : this._group._map.fitBounds(this._bounds);
    },
    getBounds: function getBounds() {
      var t = new L.LatLngBounds();
      return t.extend(this._bounds), t;
    },
    _updateIcon: function _updateIcon() {
      this._iconNeedsUpdate = !0, this._icon && this.setIcon(this);
    },
    createIcon: function createIcon() {
      return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon();
    },
    createShadow: function createShadow() {
      return this._iconObj.createShadow();
    },
    _addChild: function _addChild(t, e) {
      this._iconNeedsUpdate = !0, this._expandBounds(t), t instanceof L.MarkerCluster ? (e || (this._childClusters.push(t), t.__parent = this), this._childCount += t._childCount) : (e || this._markers.push(t), this._childCount++), this.__parent && this.__parent._addChild(t, !0);
    },
    _expandBounds: function _expandBounds(t) {
      var e,
        i = t._wLatLng || t._latlng;
      t instanceof L.MarkerCluster ? (this._bounds.extend(t._bounds), e = t._childCount) : (this._bounds.extend(i), e = 1), this._cLatLng || (this._cLatLng = t._cLatLng || i);
      var n = this._childCount + e;
      this._wLatLng ? (this._wLatLng.lat = (i.lat * e + this._wLatLng.lat * this._childCount) / n, this._wLatLng.lng = (i.lng * e + this._wLatLng.lng * this._childCount) / n) : this._latlng = this._wLatLng = new L.LatLng(i.lat, i.lng);
    },
    _addToMap: function _addToMap(t) {
      t && (this._backupLatlng = this._latlng, this.setLatLng(t)), this._group._featureGroup.addLayer(this);
    },
    _recursivelyAnimateChildrenIn: function _recursivelyAnimateChildrenIn(t, e, i) {
      this._recursively(t, 0, i - 1, function (t) {
        var i,
          n,
          s = t._markers;
        for (i = s.length - 1; i >= 0; i--) n = s[i], n._icon && (n._setPos(e), n.setOpacity(0));
      }, function (t) {
        var i,
          n,
          s = t._childClusters;
        for (i = s.length - 1; i >= 0; i--) n = s[i], n._icon && (n._setPos(e), n.setOpacity(0));
      });
    },
    _recursivelyAnimateChildrenInAndAddSelfToMap: function _recursivelyAnimateChildrenInAndAddSelfToMap(t, e, i) {
      this._recursively(t, i, 0, function (n) {
        n._recursivelyAnimateChildrenIn(t, n._group._map.latLngToLayerPoint(n.getLatLng()).round(), e), n._isSingleParent() && e - 1 === i ? (n.setOpacity(1), n._recursivelyRemoveChildrenFromMap(t, e)) : n.setOpacity(0), n._addToMap();
      });
    },
    _recursivelyBecomeVisible: function _recursivelyBecomeVisible(t, e) {
      this._recursively(t, 0, e, null, function (t) {
        t.setOpacity(1);
      });
    },
    _recursivelyAddChildrenToMap: function _recursivelyAddChildrenToMap(t, e, i) {
      this._recursively(i, -1, e, function (n) {
        if (e !== n._zoom) for (var s = n._markers.length - 1; s >= 0; s--) {
          var r = n._markers[s];
          i.contains(r._latlng) && (t && (r._backupLatlng = r.getLatLng(), r.setLatLng(t), r.setOpacity && r.setOpacity(0)), n._group._featureGroup.addLayer(r));
        }
      }, function (e) {
        e._addToMap(t);
      });
    },
    _recursivelyRestoreChildPositions: function _recursivelyRestoreChildPositions(t) {
      for (var e = this._markers.length - 1; e >= 0; e--) {
        var i = this._markers[e];
        i._backupLatlng && (i.setLatLng(i._backupLatlng), delete i._backupLatlng);
      }
      if (t - 1 === this._zoom) for (var n = this._childClusters.length - 1; n >= 0; n--) this._childClusters[n]._restorePosition();else for (var s = this._childClusters.length - 1; s >= 0; s--) this._childClusters[s]._recursivelyRestoreChildPositions(t);
    },
    _restorePosition: function _restorePosition() {
      this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng);
    },
    _recursivelyRemoveChildrenFromMap: function _recursivelyRemoveChildrenFromMap(t, e, i) {
      var n, s;
      this._recursively(t, -1, e - 1, function (t) {
        for (s = t._markers.length - 1; s >= 0; s--) n = t._markers[s], i && i.contains(n._latlng) || (t._group._featureGroup.removeLayer(n), n.setOpacity && n.setOpacity(1));
      }, function (t) {
        for (s = t._childClusters.length - 1; s >= 0; s--) n = t._childClusters[s], i && i.contains(n._latlng) || (t._group._featureGroup.removeLayer(n), n.setOpacity && n.setOpacity(1));
      });
    },
    _recursively: function _recursively(t, e, i, n, s) {
      var r,
        o,
        a = this._childClusters,
        h = this._zoom;
      if (e > h) for (r = a.length - 1; r >= 0; r--) o = a[r], t.intersects(o._bounds) && o._recursively(t, e, i, n, s);else if (n && n(this), s && this._zoom === i && s(this), i > h) for (r = a.length - 1; r >= 0; r--) o = a[r], t.intersects(o._bounds) && o._recursively(t, e, i, n, s);
    },
    _recalculateBounds: function _recalculateBounds() {
      var t,
        e = this._markers,
        i = this._childClusters;
      for (this._bounds = new L.LatLngBounds(), delete this._wLatLng, t = e.length - 1; t >= 0; t--) this._expandBounds(e[t]);
      for (t = i.length - 1; t >= 0; t--) this._expandBounds(i[t]);
    },
    _isSingleParent: function _isSingleParent() {
      return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
    }
  }), L.DistanceGrid = function (t) {
    this._cellSize = t, this._sqCellSize = t * t, this._grid = {}, this._objectPoint = {};
  }, L.DistanceGrid.prototype = {
    addObject: function addObject(t, e) {
      var i = this._getCoord(e.x),
        n = this._getCoord(e.y),
        s = this._grid,
        r = s[n] = s[n] || {},
        o = r[i] = r[i] || [],
        a = L.Util.stamp(t);
      this._objectPoint[a] = e, o.push(t);
    },
    updateObject: function updateObject(t, e) {
      this.removeObject(t), this.addObject(t, e);
    },
    removeObject: function removeObject(t, e) {
      var i,
        n,
        s = this._getCoord(e.x),
        r = this._getCoord(e.y),
        o = this._grid,
        a = o[r] = o[r] || {},
        h = a[s] = a[s] || [];
      for (delete this._objectPoint[L.Util.stamp(t)], i = 0, n = h.length; n > i; i++) if (h[i] === t) return h.splice(i, 1), 1 === n && delete a[s], !0;
    },
    eachObject: function eachObject(t, e) {
      var i,
        n,
        s,
        r,
        o,
        a,
        h,
        _ = this._grid;
      for (i in _) {
        o = _[i];
        for (n in o) for (a = o[n], s = 0, r = a.length; r > s; s++) h = t.call(e, a[s]), h && (s--, r--);
      }
    },
    getNearObject: function getNearObject(t) {
      var e,
        i,
        n,
        s,
        r,
        o,
        a,
        h,
        _ = this._getCoord(t.x),
        u = this._getCoord(t.y),
        l = this._objectPoint,
        d = this._sqCellSize,
        p = null;
      for (e = u - 1; u + 1 >= e; e++) if (s = this._grid[e]) for (i = _ - 1; _ + 1 >= i; i++) if (r = s[i]) for (n = 0, o = r.length; o > n; n++) a = r[n], h = this._sqDist(l[L.Util.stamp(a)], t), d > h && (d = h, p = a);
      return p;
    },
    _getCoord: function _getCoord(t) {
      return Math.floor(t / this._cellSize);
    },
    _sqDist: function _sqDist(t, e) {
      var i = e.x - t.x,
        n = e.y - t.y;
      return i * i + n * n;
    }
  }, function () {
    L.QuickHull = {
      getDistant: function getDistant(t, e) {
        var i = e[1].lat - e[0].lat,
          n = e[0].lng - e[1].lng;
        return n * (t.lat - e[0].lat) + i * (t.lng - e[0].lng);
      },
      findMostDistantPointFromBaseLine: function findMostDistantPointFromBaseLine(t, e) {
        var i,
          n,
          s,
          r = 0,
          o = null,
          a = [];
        for (i = e.length - 1; i >= 0; i--) n = e[i], s = this.getDistant(n, t), s > 0 && (a.push(n), s > r && (r = s, o = n));
        return {
          maxPoint: o,
          newPoints: a
        };
      },
      buildConvexHull: function buildConvexHull(t, e) {
        var i = [],
          n = this.findMostDistantPointFromBaseLine(t, e);
        return n.maxPoint ? (i = i.concat(this.buildConvexHull([t[0], n.maxPoint], n.newPoints)), i = i.concat(this.buildConvexHull([n.maxPoint, t[1]], n.newPoints))) : [t[0]];
      },
      getConvexHull: function getConvexHull(t) {
        var e,
          i = !1,
          n = !1,
          s = null,
          r = null;
        for (e = t.length - 1; e >= 0; e--) {
          var o = t[e];
          (i === !1 || o.lat > i) && (s = o, i = o.lat), (n === !1 || o.lat < n) && (r = o, n = o.lat);
        }
        var a = [].concat(this.buildConvexHull([r, s], t), this.buildConvexHull([s, r], t));
        return a;
      }
    };
  }(), L.MarkerCluster.include({
    getConvexHull: function getConvexHull() {
      var t,
        e,
        i = this.getAllChildMarkers(),
        n = [];
      for (e = i.length - 1; e >= 0; e--) t = i[e].getLatLng(), n.push(t);
      return L.QuickHull.getConvexHull(n);
    }
  }), L.MarkerCluster.include({
    _2PI: 2 * Math.PI,
    _circleFootSeparation: 25,
    _circleStartAngle: Math.PI / 6,
    _spiralFootSeparation: 28,
    _spiralLengthStart: 11,
    _spiralLengthFactor: 5,
    _circleSpiralSwitchover: 9,
    spiderfy: function spiderfy() {
      if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
        var t,
          e = this.getAllChildMarkers(),
          i = this._group,
          n = i._map,
          s = n.latLngToLayerPoint(this._latlng);
        this._group._unspiderfy(), this._group._spiderfied = this, e.length >= this._circleSpiralSwitchover ? t = this._generatePointsSpiral(e.length, s) : (s.y += 10, t = this._generatePointsCircle(e.length, s)), this._animationSpiderfy(e, t);
      }
    },
    unspiderfy: function unspiderfy(t) {
      this._group._inZoomAnimation || (this._animationUnspiderfy(t), this._group._spiderfied = null);
    },
    _generatePointsCircle: function _generatePointsCircle(t, e) {
      var i,
        n,
        s = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t),
        r = s / this._2PI,
        o = this._2PI / t,
        a = [];
      for (a.length = t, i = t - 1; i >= 0; i--) n = this._circleStartAngle + i * o, a[i] = new L.Point(e.x + r * Math.cos(n), e.y + r * Math.sin(n))._round();
      return a;
    },
    _generatePointsSpiral: function _generatePointsSpiral(t, e) {
      var i,
        n = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthStart,
        s = this._group.options.spiderfyDistanceMultiplier * this._spiralFootSeparation,
        r = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthFactor,
        o = 0,
        a = [];
      for (a.length = t, i = t - 1; i >= 0; i--) o += s / n + 5e-4 * i, a[i] = new L.Point(e.x + n * Math.cos(o), e.y + n * Math.sin(o))._round(), n += this._2PI * r / o;
      return a;
    },
    _noanimationUnspiderfy: function _noanimationUnspiderfy() {
      var t,
        e,
        i = this._group,
        n = i._map,
        s = i._featureGroup,
        r = this.getAllChildMarkers();
      for (this.setOpacity(1), e = r.length - 1; e >= 0; e--) t = r[e], s.removeLayer(t), t._preSpiderfyLatlng && (t.setLatLng(t._preSpiderfyLatlng), delete t._preSpiderfyLatlng), t.setZIndexOffset && t.setZIndexOffset(0), t._spiderLeg && (n.removeLayer(t._spiderLeg), delete t._spiderLeg);
      i._spiderfied = null;
    }
  }), L.MarkerCluster.include(L.DomUtil.TRANSITION ? {
    SVG_ANIMATION: function () {
      return e.createElementNS("http://www.w3.org/2000/svg", "animate").toString().indexOf("SVGAnimate") > -1;
    }(),
    _animationSpiderfy: function _animationSpiderfy(t, i) {
      var n,
        s,
        r,
        o,
        a = this,
        h = this._group,
        _ = h._map,
        u = h._featureGroup,
        l = _.latLngToLayerPoint(this._latlng);
      for (n = t.length - 1; n >= 0; n--) s = t[n], s.setOpacity ? (s.setZIndexOffset(1e6), s.setOpacity(0), u.addLayer(s), s._setPos(l)) : u.addLayer(s);
      h._forceLayout(), h._animationStart();
      var d = L.Path.SVG ? 0 : .3,
        p = L.Path.SVG_NS;
      for (n = t.length - 1; n >= 0; n--) if (o = _.layerPointToLatLng(i[n]), s = t[n], s._preSpiderfyLatlng = s._latlng, s.setLatLng(o), s.setOpacity && s.setOpacity(1), r = new L.Polyline([a._latlng, o], {
        weight: 1.5,
        color: "#222",
        opacity: d
      }), _.addLayer(r), s._spiderLeg = r, L.Path.SVG && this.SVG_ANIMATION) {
        var c = r._path.getTotalLength();
        r._path.setAttribute("stroke-dasharray", c + "," + c);
        var f = e.createElementNS(p, "animate");
        f.setAttribute("attributeName", "stroke-dashoffset"), f.setAttribute("begin", "indefinite"), f.setAttribute("from", c), f.setAttribute("to", 0), f.setAttribute("dur", .25), r._path.appendChild(f), f.beginElement(), f = e.createElementNS(p, "animate"), f.setAttribute("attributeName", "stroke-opacity"), f.setAttribute("attributeName", "stroke-opacity"), f.setAttribute("begin", "indefinite"), f.setAttribute("from", 0), f.setAttribute("to", .5), f.setAttribute("dur", .25), r._path.appendChild(f), f.beginElement();
      }
      if (a.setOpacity(.3), L.Path.SVG) for (this._group._forceLayout(), n = t.length - 1; n >= 0; n--) s = t[n]._spiderLeg, s.options.opacity = .5, s._path.setAttribute("stroke-opacity", .5);
      setTimeout(function () {
        h._animationEnd(), h.fire("spiderfied");
      }, 200);
    },
    _animationUnspiderfy: function _animationUnspiderfy(t) {
      var e,
        i,
        n,
        s = this._group,
        r = s._map,
        o = s._featureGroup,
        a = t ? r._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : r.latLngToLayerPoint(this._latlng),
        h = this.getAllChildMarkers(),
        _ = L.Path.SVG && this.SVG_ANIMATION;
      for (s._animationStart(), this.setOpacity(1), i = h.length - 1; i >= 0; i--) e = h[i], e._preSpiderfyLatlng && (e.setLatLng(e._preSpiderfyLatlng), delete e._preSpiderfyLatlng, e.setOpacity ? (e._setPos(a), e.setOpacity(0)) : o.removeLayer(e), _ && (n = e._spiderLeg._path.childNodes[0], n.setAttribute("to", n.getAttribute("from")), n.setAttribute("from", 0), n.beginElement(), n = e._spiderLeg._path.childNodes[1], n.setAttribute("from", .5), n.setAttribute("to", 0), n.setAttribute("stroke-opacity", 0), n.beginElement(), e._spiderLeg._path.setAttribute("stroke-opacity", 0)));
      setTimeout(function () {
        var t = 0;
        for (i = h.length - 1; i >= 0; i--) e = h[i], e._spiderLeg && t++;
        for (i = h.length - 1; i >= 0; i--) e = h[i], e._spiderLeg && (e.setOpacity && (e.setOpacity(1), e.setZIndexOffset(0)), t > 1 && o.removeLayer(e), r.removeLayer(e._spiderLeg), delete e._spiderLeg);
        s._animationEnd();
      }, 200);
    }
  } : {
    _animationSpiderfy: function _animationSpiderfy(t, e) {
      var i,
        n,
        s,
        r,
        o = this._group,
        a = o._map,
        h = o._featureGroup;
      for (i = t.length - 1; i >= 0; i--) r = a.layerPointToLatLng(e[i]), n = t[i], n._preSpiderfyLatlng = n._latlng, n.setLatLng(r), n.setZIndexOffset && n.setZIndexOffset(1e6), h.addLayer(n), s = new L.Polyline([this._latlng, r], {
        weight: 1.5,
        color: "#222"
      }), a.addLayer(s), n._spiderLeg = s;
      this.setOpacity(.3), o.fire("spiderfied");
    },
    _animationUnspiderfy: function _animationUnspiderfy() {
      this._noanimationUnspiderfy();
    }
  }), L.MarkerClusterGroup.include({
    _spiderfied: null,
    _spiderfierOnAdd: function _spiderfierOnAdd() {
      this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Path.SVG && !L.Browser.touch && this._map._initPathRoot();
    },
    _spiderfierOnRemove: function _spiderfierOnRemove() {
      this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy();
    },
    _unspiderfyZoomStart: function _unspiderfyZoomStart() {
      this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this);
    },
    _unspiderfyZoomAnim: function _unspiderfyZoomAnim(t) {
      L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(t));
    },
    _unspiderfyWrapper: function _unspiderfyWrapper() {
      this._unspiderfy();
    },
    _unspiderfy: function _unspiderfy(t) {
      this._spiderfied && this._spiderfied.unspiderfy(t);
    },
    _noanimationUnspiderfy: function _noanimationUnspiderfy() {
      this._spiderfied && this._spiderfied._noanimationUnspiderfy();
    },
    _unspiderfyLayer: function _unspiderfyLayer(t) {
      t._spiderLeg && (this._featureGroup.removeLayer(t), t.setOpacity(1), t.setZIndexOffset(0), this._map.removeLayer(t._spiderLeg), delete t._spiderLeg);
    }
  });
}(window, document);

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/leaflet/leaflet.zoombox.js":
/*!********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/leaflet/leaflet.zoombox.js ***!
  \********************************************************************/
/***/ (() => {

// https://github.com/consbio/Leaflet.ZoomBox
// Copyright (c) 2014, Conservation Biology Institute
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
L.Control.ZoomBox = L.Control.extend({
  _active: false,
  _map: null,
  includes: L.Mixin.Events,
  options: {
    position: "topleft",
    className: "fa fa-search-plus",
    modal: false
  },
  onAdd: function onAdd(map) {
    this._map = map;
    this._container = L.DomUtil.create("div", "leaflet-zoom-box-control leaflet-bar");
    this._container.title = "Zoom to specific area";
    var link = L.DomUtil.create("a", this.options.className, this._container);
    link.href = "#";
    var _origMouseDown = map.boxZoom._onMouseDown;
    map.boxZoom._onMouseDown = function (e) {
      _origMouseDown.call(map.boxZoom, {
        clientX: e.clientX,
        clientY: e.clientY,
        which: 1,
        shiftKey: true
      });
    };
    map.on("zoomend", function () {
      if (map.getZoom() == map.getMaxZoom()) {
        L.DomUtil.addClass(link, "leaflet-disabled");
      } else {
        L.DomUtil.removeClass(link, "leaflet-disabled");
      }
    }, this);
    if (!this.options.modal) {
      map.on("boxzoomend", this.deactivate, this);
    }
    L.DomEvent.on(this._container, "dblclick", L.DomEvent.stop).on(this._container, "click", L.DomEvent.stop).on(this._container, "click", function () {
      this._active = !this._active;
      if (this._active && map.getZoom() != map.getMaxZoom()) {
        this.activate();
      } else {
        this.deactivate();
      }
    }, this);
    return this._container;
  },
  activate: function activate() {
    L.DomUtil.addClass(this._container, "active");
    this._map.dragging.disable();
    this._map.boxZoom.addHooks();
    L.DomUtil.addClass(this._map.getContainer(), "leaflet-zoom-box-crosshair");
  },
  deactivate: function deactivate() {
    L.DomUtil.removeClass(this._container, "active");
    this._map.dragging.enable();
    this._map.boxZoom.removeHooks();
    L.DomUtil.removeClass(this._map.getContainer(), "leaflet-zoom-box-crosshair");
    this._active = false;
    this._map.boxZoom._moved = false;
  }
});
L.control.zoomBox = function (options) {
  return new L.Control.ZoomBox(options);
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/nv.d3.1.1.15b.custom.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/nv.d3.1.1.15b.custom.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_hueColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hueColors */ "./desktop/core/src/desktop/js/utils/hueColors.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


var nv = window.nv || {};
nv.version = '1.1.15b';
nv.dev = false; //set false when in production

window.nv = nv;
nv.tooltip = nv.tooltip || {}; // For the tooltip system
nv.utils = nv.utils || {}; // Utility subsystem
nv.models = nv.models || {}; //stores all the possible models/components
nv.charts = {}; //stores all the ready to use charts
nv.graphs = []; //stores all the graphs currently on the page
nv.logs = {}; //stores some statistics and potential error messages
nv.dom = {}; //DOM manipulation functions

nv.dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('render_start', 'render_end');

// *************************************************************************
//  Development render timers - disabled if dev = false

if (nv.dev) {
  nv.dispatch.on('render_start', function (e) {
    nv.logs.startTime = +new Date();
  });
  nv.dispatch.on('render_end', function (e) {
    nv.logs.endTime = +new Date();
    nv.logs.totalTime = nv.logs.endTime - nv.logs.startTime;
    nv.log('total', nv.logs.totalTime); // used for development, to keep track of graph generation times
  });
}

// ********************************************
//  Public Core NV functions

// Logs all arguments, and returns the last so you can test things in place
// Note: in IE8 console.log is an object not a function, and if modernizr is used
// then calling Function.prototype.bind with with anything other than a function
// causes a TypeError to be thrown.
nv.log = function () {
  if (nv.dev && console.log && console.log.apply) console.log.apply(console, arguments);else if (nv.dev && typeof console.log == "function" && Function.prototype.bind) {
    var log = Function.prototype.bind.call(console.log, console);
    log.apply(console, arguments);
  }
  return arguments[arguments.length - 1];
};
nv.render = function () {
  nv.render.active = true;
  nv.dispatch.render_start();
  var renderLoop = function renderLoop() {
    if (!nv.render.queue.length) {
      nv.dispatch.render_end();
      nv.render.active = false;
      return;
    }
    var graph = nv.render.queue.shift();
    var chart = graph.generate();
    if (typeof graph.callback === 'function') {
      graph.callback(chart);
    }
    nv.graphs.push(chart);
    window.setTimeout(renderLoop, 0);
  };
  window.setTimeout(renderLoop, 0);
};
nv.render.active = false;
nv.render.queue = [];
nv.addGraph = function (obj) {
  if (_typeof(arguments[0]) === (typeof Function === "undefined" ? "undefined" : _typeof(Function))) obj = {
    generate: arguments[0],
    callback: arguments[1]
  };
  nv.render.queue.push(obj);
  if (!nv.render.active) nv.render();
};
nv.identity = function (d) {
  return d;
};
nv.strip = function (s) {
  return s.replace(/(\s|&)/g, '');
};
function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}
function d3_time_range(floor, step, number) {
  return function (t0, t1, dt) {
    var time = floor(t0),
      times = [];
    if (time < t0) step(time);
    if (dt > 1) {
      while (time < t1) {
        var date = new Date(+time);
        if (number(date) % dt === 0) times.push(date);
        step(time);
      }
    } else {
      while (time < t1) {
        times.push(new Date(+time));
        step(time);
      }
    }
    return times;
  };
}
(d3v3__WEBPACK_IMPORTED_MODULE_0___default().time.monthEnd) = function (date) {
  return new Date(date.getFullYear(), date.getMonth(), 0);
};
(d3v3__WEBPACK_IMPORTED_MODULE_0___default().time.monthEnds) = d3_time_range((d3v3__WEBPACK_IMPORTED_MODULE_0___default().time.monthEnd), function (date) {
  date.setUTCDate(date.getUTCDate() + 1);
  date.setDate(daysInMonth(date.getMonth() + 1, date.getFullYear()));
}, function (date) {
  return date.getMonth();
});

/* Utility class to handle creation of an interactive layer.
This places a rectangle on top of the chart. When you mouse move over it, it sends a dispatch
containing the X-coordinate. It can also render a vertical line where the mouse is located.

dispatch.elementMousemove is the important event to latch onto.  It is fired whenever the mouse moves over
the rectangle. The dispatch is given one object which contains the mouseX/Y location.
It also has 'pointXValue', which is the conversion of mouseX to the x-axis scale.
*/
nv.interactiveGuideline = function () {
  "use strict";

  var tooltip = nv.models.tooltip();
  //Public settings
  var width = null,
    height = null
    //Please pass in the bounding chart's top and left margins
    //This is important for calculating the correct mouseX/Y positions.
    ,
    margin = {
      left: 0,
      top: 0
    },
    xScale = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    yScale = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('elementMousemove', 'elementMouseout', 'elementDblclick'),
    showGuideLine = true,
    svgContainer = null
    //Must pass in the bounding chart's <svg> container.
    //The mousemove event is attached to this container.
  ;

  //Private variables
  var isMSIE = navigator.userAgent.indexOf("MSIE") !== -1 //Check user-agent for Microsoft Internet Explorer.
  ;
  function layer(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);
      var availableWidth = width || 960,
        availableHeight = height || 400;
      var wrap = container.selectAll("g.nv-wrap.nv-interactiveLineLayer").data([data]);
      var wrapEnter = wrap.enter().append("g").attr("class", " nv-wrap nv-interactiveLineLayer");
      wrapEnter.append("g").attr("class", "nv-interactiveGuideLine");
      if (!svgContainer) {
        return;
      }
      function mouseHandler() {
        var d3mouse = d3v3__WEBPACK_IMPORTED_MODULE_0___default().mouse(this);
        var mouseX = d3mouse[0];
        var mouseY = d3mouse[1];
        var subtractMargin = true;
        var mouseOutAnyReason = false;
        if (isMSIE) {
          /*
             d3v3.js (or maybe SVG.getScreenCTM) has a nasty bug in Internet Explorer 10.
             d3v3.mouse() returns incorrect X,Y mouse coordinates when mouse moving
             over a rect in IE 10.
             However, d3v3.event.offsetX/Y also returns the mouse coordinates
             relative to the triggering <rect>. So we use offsetX/Y on IE.  
          */
          mouseX = (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.offsetX);
          mouseY = (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.offsetY);

          /*
             On IE, if you attach a mouse event listener to the <svg> container,
             it will actually trigger it for all the child elements (like <path>, <circle>, etc).
             When this happens on IE, the offsetX/Y is set to where ever the child element
             is located.
             As a result, we do NOT need to subtract margins to figure out the mouse X/Y
             position under this scenario. Removing the line below *will* cause 
             the interactive layer to not work right on IE.
          */
          if ((d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.target.tagName) !== "svg") subtractMargin = false;
          if (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.target.className.baseVal.match("nv-legend")) mouseOutAnyReason = true;
        }
        if (subtractMargin) {
          mouseX -= margin.left;
          mouseY -= margin.top;
        }

        /* If mouseX/Y is outside of the chart's bounds,
        trigger a mouseOut event.
        */
        if (mouseX < 0 || mouseY < 0 || mouseX > availableWidth || mouseY > availableHeight || (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.relatedTarget) && (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.relatedTarget.ownerSVGElement) === undefined || mouseOutAnyReason) {
          if (isMSIE) {
            if ((d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.relatedTarget) && (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.relatedTarget.ownerSVGElement) === undefined && d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.relatedTarget.className.match(tooltip.nvPointerEventsClass)) {
              return;
            }
          }
          dispatch.elementMouseout({
            mouseX: mouseX,
            mouseY: mouseY
          });
          layer.renderGuideLine(null); //hide the guideline
          return;
        }
        var pointXValue = xScale.invert(mouseX);
        dispatch.elementMousemove({
          mouseX: mouseX,
          mouseY: mouseY,
          pointXValue: pointXValue
        });

        //If user double clicks the layer, fire a elementDblclick dispatch.
        if ((d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.type) === "dblclick") {
          dispatch.elementDblclick({
            mouseX: mouseX,
            mouseY: mouseY,
            pointXValue: pointXValue
          });
        }
      }
      svgContainer.on("mousemove", mouseHandler, true).on("mouseout", mouseHandler, true).on("dblclick", mouseHandler);

      //Draws a vertical guideline at the given X postion.
      layer.renderGuideLine = function (x) {
        if (!showGuideLine) return;
        var line = wrap.select(".nv-interactiveGuideLine").selectAll("line").data(x != null ? [nv.utils.NaNtoZero(x)] : [], String);
        line.enter().append("line").attr("class", "nv-guideline").attr("x1", function (d) {
          return d;
        }).attr("x2", function (d) {
          return d;
        }).attr("y1", availableHeight).attr("y2", 0);
        line.exit().remove();
      };
    });
  }
  layer.dispatch = dispatch;
  layer.tooltip = tooltip;
  layer.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return layer;
  };
  layer.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return layer;
  };
  layer.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return layer;
  };
  layer.xScale = function (_) {
    if (!arguments.length) return xScale;
    xScale = _;
    return layer;
  };
  layer.showGuideLine = function (_) {
    if (!arguments.length) return showGuideLine;
    showGuideLine = _;
    return layer;
  };
  layer.svgContainer = function (_) {
    if (!arguments.length) return svgContainer;
    svgContainer = _;
    return layer;
  };
  return layer;
};

/* Utility class that uses d3v3.bisect to find the index in a given array, where a search value can be inserted.
This is different from normal bisectLeft; this function finds the nearest index to insert the search value.

For instance, lets say your array is [1,2,3,5,10,30], and you search for 28. 
Normal d3v3.bisectLeft will return 4, because 28 is inserted after the number 10.  But interactiveBisect will return 5
because 28 is closer to 30 than 10.

Unit tests can be found in: interactiveBisectTest.html

Has the following known issues:
   * Will not work if the data points move backwards (ie, 10,9,8,7, etc) or if the data points are in random order.
   * Won't work if there are duplicate x coordinate values.
*/
nv.interactiveBisect = function (values, searchVal, xAccessor) {
  "use strict";

  if (!values instanceof Array) return null;
  if (typeof xAccessor !== 'function') xAccessor = function xAccessor(d, i) {
    return d.x;
  };
  var bisect = d3v3__WEBPACK_IMPORTED_MODULE_0___default().bisector(xAccessor).left;
  var index = d3v3__WEBPACK_IMPORTED_MODULE_0___default().max([0, bisect(values, searchVal) - 1]);
  var currentValue = xAccessor(values[index], index);
  if (typeof currentValue === 'undefined') currentValue = index;
  if (currentValue === searchVal) return index; //found exact match

  var nextIndex = d3v3__WEBPACK_IMPORTED_MODULE_0___default().min([index + 1, values.length - 1]);
  var nextValue = xAccessor(values[nextIndex], nextIndex);
  if (typeof nextValue === 'undefined') nextValue = nextIndex;
  if (Math.abs(nextValue - searchVal) >= Math.abs(currentValue - searchVal)) return index;else return nextIndex;
};

/*
Returns the index in the array "values" that is closest to searchVal.
Only returns an index if searchVal is within some "threshold".
Otherwise, returns null.
*/
nv.nearestValueIndex = function (values, searchVal, threshold) {
  "use strict";

  var yDistMax = Infinity,
    indexToHighlight = null;
  values.forEach(function (d, i) {
    var delta = Math.abs(searchVal - d);
    if (delta <= yDistMax && delta < threshold) {
      yDistMax = delta;
      indexToHighlight = i;
    }
  });
  return indexToHighlight;
}; /* Tooltip rendering model for nvd3 charts.
   window.nv.models.tooltip is the updated,new way to render tooltips.
   window.nv.tooltip.show is the old tooltip code.
   window.nv.tooltip.* also has various helper methods.
   */
(function () {
  "use strict";

  window.nv.tooltip = {};

  /* Model which can be instantiated to handle tooltip rendering.
    Example usage: 
    var tip = nv.models.tooltip().gravity('w').distance(23)
                .data(myDataObject);
         tip();    //just invoke the returned function to render tooltip.
  */
  window.nv.models.tooltip = function () {
    var content = null //HTML contents of the tooltip.  If null, the content is generated via the data variable.
      ,
      data = null /* Tooltip data. If data is given in the proper format, a consistent tooltip is generated.
                  Format of data:
                  {
                  key: "Date",
                  value: "August 2009", 
                  series: [
                  {
                  key: "Series 1",
                  value: "Value 1",
                  color: "#000"
                  },
                  {
                  key: "Series 2",
                  value: "Value 2",
                  color: "#00f"
                  }
                  ]
                  }
                  */,
      gravity = 'w' //Can be 'n','s','e','w'. Determines how tooltip is positioned.
      ,
      distance = 50 //Distance to offset tooltip from the mouse location.
      ,
      snapDistance = 25 //Tolerance allowed before tooltip is moved from its current position (creates 'snapping' effect)
      ,
      fixedTop = null //If not null, this fixes the top position of the tooltip.
      ,
      classes = null //Attaches additional CSS classes to the tooltip DIV that is created.
      ,
      chartContainer = null //Parent DIV, of the SVG Container that holds the chart.
      ,
      tooltipElem = null //actual DOM element representing the tooltip.
      ,
      position = {
        left: null,
        top: null
      } //Relative position of the tooltip inside chartContainer.
      ,
      enabled = true //True -> tooltips are rendered. False -> don't render tooltips.
      //Generates a unique id when you create a new tooltip() object
      ,
      id = "nvtooltip-" + Math.floor(Math.random() * 100000);

    //CSS class to specify whether element should not have mouse events.
    var nvPointerEventsClass = "nv-pointer-events-none";

    //Format function for the tooltip values column
    var valueFormatter = function valueFormatter(d, i) {
      return d;
    };

    //Format function for the tooltip header value.
    var headerFormatter = function headerFormatter(d) {
      return d;
    };

    //By default, the tooltip model renders a beautiful table inside a DIV.
    //You can override this function if a custom tooltip is desired.
    var contentGenerator = function contentGenerator(d) {
      if (content != null) return content;
      if (d == null) return '';
      var table = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(document.createElement("table"));
      var theadEnter = table.selectAll("thead").data([d]).enter().append("thead");
      theadEnter.append("tr").append("td").attr("colspan", 3).append("strong").classed("x-value", true).html(headerFormatter(d.value));
      var tbodyEnter = table.selectAll("tbody").data([d]).enter().append("tbody");
      var trowEnter = tbodyEnter.selectAll("tr").data(function (p) {
        return p.series;
      }).enter().append("tr").classed("highlight", function (p) {
        return p.highlight;
      });
      trowEnter.append("td").classed("legend-color-guide", true).append("div").style("background-color", function (p) {
        return p.color;
      });
      trowEnter.append("td").classed("key", true).html(function (p) {
        return p.key;
      });
      trowEnter.append("td").classed("value", true).html(function (p, i) {
        return valueFormatter(p.value, i);
      });
      trowEnter.selectAll("td").each(function (p) {
        if (p.highlight) {
          var opacityScale = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear().domain([0, 1]).range(["#fff", p.color]);
          var opacity = 0.6;
          d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).style("border-bottom-color", opacityScale(opacity)).style("border-top-color", opacityScale(opacity));
        }
      });
      var html = table.node().outerHTML;
      if (d.footer !== undefined) html += "<div class='footer'>" + d.footer + "</div>";
      return html;
    };
    var dataSeriesExists = function dataSeriesExists(d) {
      if (d && d.series && d.series.length > 0) return true;
      return false;
    };

    //In situations where the chart is in a 'viewBox', re-position the tooltip based on how far chart is zoomed.
    function convertViewBoxRatio() {
      if (chartContainer) {
        var svg = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(chartContainer);
        if (svg.node().tagName !== "svg") {
          svg = svg.select("svg");
        }
        var viewBox = svg.node() ? svg.attr('viewBox') : null;
        if (viewBox) {
          viewBox = viewBox.split(' ');
          var ratio = parseInt(svg.style('width')) / viewBox[2];
          position.left = position.left * ratio;
          position.top = position.top * ratio;
        }
      }
    }

    //Creates new tooltip container, or uses existing one on DOM.
    function getTooltipContainer(newContent) {
      var body;
      if (chartContainer) body = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(chartContainer);else body = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select("body");
      var container = body.select(".nvtooltip");
      if (container.node() === null) {
        //Create new tooltip div if it doesn't exist on DOM.
        container = body.append("div").attr("class", "nvtooltip " + (classes ? classes : "xy-tooltip")).attr("id", id);
      }
      container.node().innerHTML = newContent;
      container.style("top", 0).style("left", 0).style("opacity", 0);
      container.selectAll("div, table, td, tr").classed(nvPointerEventsClass, true);
      container.classed(nvPointerEventsClass, true);
      return container.node();
    }

    //Draw the tooltip onto the DOM.
    function nvtooltip() {
      if (!enabled) return;
      if (!dataSeriesExists(data)) return;
      convertViewBoxRatio();
      var left = position.left;
      var top = fixedTop != null ? fixedTop : position.top;
      var container = getTooltipContainer(contentGenerator(data));
      tooltipElem = container;
      if (chartContainer) {
        var svgComp = chartContainer.getElementsByTagName("svg")[0];
        var boundRect = svgComp ? svgComp.getBoundingClientRect() : chartContainer.getBoundingClientRect();
        var svgOffset = {
          left: 0,
          top: 0
        };
        if (svgComp) {
          var svgBound = svgComp.getBoundingClientRect();
          var chartBound = chartContainer.getBoundingClientRect();
          var svgBoundTop = svgBound.top;

          //Defensive code. Sometimes, svgBoundTop can be a really negative
          //  number, like -134254. That's a bug. 
          //  If such a number is found, use zero instead. FireFox bug only
          if (svgBoundTop < 0) {
            var containerBound = chartContainer.getBoundingClientRect();
            svgBoundTop = Math.abs(svgBoundTop) > containerBound.height ? 0 : svgBoundTop;
          }
          svgOffset.top = Math.abs(svgBoundTop - chartBound.top);
          svgOffset.left = Math.abs(svgBound.left - chartBound.left);
        }
        //If the parent container is an overflow <div> with scrollbars, subtract the scroll offsets.
        //You need to also add any offset between the <svg> element and its containing <div>
        //Finally, add any offset of the containing <div> on the whole page.
        left += chartContainer.offsetLeft + svgOffset.left - 2 * chartContainer.scrollLeft;
        top += chartContainer.offsetTop + svgOffset.top - 2 * chartContainer.scrollTop;
      }
      if (snapDistance && snapDistance > 0) {
        top = Math.floor(top / snapDistance) * snapDistance;
      }
      nv.tooltip.calcTooltipPosition([left, top], gravity, distance, container);
      return nvtooltip;
    }
    ;
    nvtooltip.nvPointerEventsClass = nvPointerEventsClass;
    nvtooltip.content = function (_) {
      if (!arguments.length) return content;
      content = _;
      return nvtooltip;
    };

    //Returns tooltipElem...not able to set it.
    nvtooltip.tooltipElem = function () {
      return tooltipElem;
    };
    nvtooltip.contentGenerator = function (_) {
      if (!arguments.length) return contentGenerator;
      if (typeof _ === 'function') {
        contentGenerator = _;
      }
      return nvtooltip;
    };
    nvtooltip.data = function (_) {
      if (!arguments.length) return data;
      data = _;
      return nvtooltip;
    };
    nvtooltip.gravity = function (_) {
      if (!arguments.length) return gravity;
      gravity = _;
      return nvtooltip;
    };
    nvtooltip.distance = function (_) {
      if (!arguments.length) return distance;
      distance = _;
      return nvtooltip;
    };
    nvtooltip.snapDistance = function (_) {
      if (!arguments.length) return snapDistance;
      snapDistance = _;
      return nvtooltip;
    };
    nvtooltip.classes = function (_) {
      if (!arguments.length) return classes;
      classes = _;
      return nvtooltip;
    };
    nvtooltip.chartContainer = function (_) {
      if (!arguments.length) return chartContainer;
      chartContainer = _;
      return nvtooltip;
    };
    nvtooltip.position = function (_) {
      if (!arguments.length) return position;
      position.left = typeof _.left !== 'undefined' ? _.left : position.left;
      position.top = typeof _.top !== 'undefined' ? _.top : position.top;
      return nvtooltip;
    };
    nvtooltip.fixedTop = function (_) {
      if (!arguments.length) return fixedTop;
      fixedTop = _;
      return nvtooltip;
    };
    nvtooltip.enabled = function (_) {
      if (!arguments.length) return enabled;
      enabled = _;
      return nvtooltip;
    };
    nvtooltip.valueFormatter = function (_) {
      if (!arguments.length) return valueFormatter;
      if (typeof _ === 'function') {
        valueFormatter = _;
      }
      return nvtooltip;
    };
    nvtooltip.headerFormatter = function (_) {
      if (!arguments.length) return headerFormatter;
      if (typeof _ === 'function') {
        headerFormatter = _;
      }
      return nvtooltip;
    };

    //id() is a read-only function. You can't use it to set the id.
    nvtooltip.id = function () {
      return id;
    };
    return nvtooltip;
  };

  //Original tooltip.show function. Kept for backward compatibility.
  // pos = [left,top]
  nv.tooltip.show = function (pos, content, gravity, dist, parentContainer, classes) {
    //Create new tooltip div if it doesn't exist on DOM.
    var container = document.createElement('div');
    container.className = 'nvtooltip ' + (classes ? classes : 'xy-tooltip');
    var body = parentContainer;
    if (!parentContainer || parentContainer.tagName.match(/g|svg/i)) {
      //If the parent element is an SVG element, place tooltip in the <body> element.
      body = document.getElementsByTagName('body')[0];
    }
    container.style.left = 0;
    container.style.top = 0;
    container.style.opacity = 0;
    container.innerHTML = content;
    body.appendChild(container);

    //If the parent container is an overflow <div> with scrollbars, subtract the scroll offsets.
    if (parentContainer) {
      pos[0] = pos[0] - parentContainer.scrollLeft;
      pos[1] = pos[1] - parentContainer.scrollTop;
    }
    nv.tooltip.calcTooltipPosition(pos, gravity, dist, container);
  };

  //Looks up the ancestry of a DOM element, and returns the first NON-svg node.
  nv.tooltip.findFirstNonSVGParent = function (Elem) {
    while (Elem.tagName.match(/^g|svg$/i) !== null) {
      Elem = Elem.parentNode;
    }
    return Elem;
  };

  //Finds the total offsetTop of a given DOM element.
  //Looks up the entire ancestry of an element, up to the first relatively positioned element.
  nv.tooltip.findTotalOffsetTop = function (Elem, initialTop) {
    var offsetTop = initialTop;
    do {
      if (!isNaN(Elem.offsetTop)) {
        offsetTop += Elem.offsetTop;
      }
    } while (Elem = Elem.offsetParent);
    return offsetTop;
  };

  //Finds the total offsetLeft of a given DOM element.
  //Looks up the entire ancestry of an element, up to the first relatively positioned element.
  nv.tooltip.findTotalOffsetLeft = function (Elem, initialLeft) {
    var offsetLeft = initialLeft;
    do {
      if (!isNaN(Elem.offsetLeft)) {
        offsetLeft += Elem.offsetLeft;
      }
    } while (Elem = Elem.offsetParent);
    return offsetLeft;
  };

  //Global utility function to render a tooltip on the DOM.
  //pos = [left,top] coordinates of where to place the tooltip, relative to the SVG chart container.
  //gravity = how to orient the tooltip
  //dist = how far away from the mouse to place tooltip
  //container = tooltip DIV
  nv.tooltip.calcTooltipPosition = function (pos, gravity, dist, container) {
    var height = parseInt(container.offsetHeight),
      width = parseInt(container.offsetWidth),
      windowWidth = nv.utils.windowSize().width,
      windowHeight = nv.utils.windowSize().height,
      scrollTop = window.pageYOffset,
      scrollLeft = window.pageXOffset,
      left,
      top;
    windowHeight = window.innerWidth >= document.body.scrollWidth ? windowHeight : windowHeight - 16;
    windowWidth = window.innerHeight >= document.body.scrollHeight ? windowWidth : windowWidth - 16;
    gravity = gravity || 's';
    dist = dist || 20;
    var tooltipTop = function tooltipTop(Elem) {
      return nv.tooltip.findTotalOffsetTop(Elem, top);
    };
    var tooltipLeft = function tooltipLeft(Elem) {
      return nv.tooltip.findTotalOffsetLeft(Elem, left);
    };
    switch (gravity) {
      case 'e':
        left = pos[0] - width - dist;
        top = pos[1] - height / 2;
        var tLeft = tooltipLeft(container);
        var tTop = tooltipTop(container);
        if (tLeft < scrollLeft) left = pos[0] + dist > scrollLeft ? pos[0] + dist : scrollLeft - tLeft + left;
        if (tTop < scrollTop) top = scrollTop - tTop + top;
        if (tTop + height > scrollTop + windowHeight) top = scrollTop + windowHeight - tTop + top - height;
        break;
      case 'w':
        left = pos[0] + dist;
        top = pos[1] - height / 2;
        var tLeft = tooltipLeft(container);
        var tTop = tooltipTop(container);
        if (tLeft + width > windowWidth) left = pos[0] - width - dist;
        if (tTop < scrollTop) top = scrollTop + 5;
        if (tTop + height > scrollTop + windowHeight) top = scrollTop + windowHeight - tTop + top - height;
        break;
      case 'n':
        left = pos[0] - width / 2 - 5;
        top = pos[1] + dist;
        var tLeft = tooltipLeft(container);
        var tTop = tooltipTop(container);
        if (tLeft < scrollLeft) left = scrollLeft + 5;
        if (tLeft + width > windowWidth) left = left - width / 2 + 5;
        if (tTop + height > scrollTop + windowHeight) top = scrollTop + windowHeight - tTop + top - height;
        break;
      case 's':
        left = pos[0] - width / 2;
        top = pos[1] - height - dist;
        var tLeft = tooltipLeft(container);
        var tTop = tooltipTop(container);
        windowWidth = nv.tooltip.findTotalOffsetLeft(container.parentElement, 0) + container.parentElement.scrollWidth;
        if (tLeft < scrollLeft) left = scrollLeft + 5;
        if (tLeft + width > windowWidth) left = left - width / 2 + 5;
        if (scrollTop > tTop) top = scrollTop;
        break;
      case 'none':
        left = pos[0];
        top = pos[1] - dist;
        var tLeft = tooltipLeft(container);
        var tTop = tooltipTop(container);
        break;
    }
    container.style.left = left + 'px';
    container.style.top = Math.max(top, 0) + 'px';
    container.style.opacity = 1;
    container.style.position = 'absolute';
    return container;
  };

  //Global utility function to remove tooltips from the DOM.
  nv.tooltip.cleanup = function () {
    // Find the tooltips, mark them for removal by this class (so others cleanups won't find it)
    var tooltips = document.getElementsByClassName('nvtooltip');
    var purging = [];
    while (tooltips.length) {
      purging.push(tooltips[0]);
      tooltips[0].style.transitionDelay = '0 !important';
      tooltips[0].style.opacity = 0;
      tooltips[0].className = 'nvtooltip-pending-removal';
    }
    setTimeout(function () {
      while (purging.length) {
        var removeMe = purging.pop();
        removeMe.parentNode.removeChild(removeMe);
      }
    }, 500);
  };
})();
nv.utils.windowSize = function () {
  // Sane defaults
  var size = {
    width: 640,
    height: 480
  };

  // Earlier IE uses Doc.body
  if (document.body && document.body.offsetWidth) {
    size.width = document.body.offsetWidth;
    size.height = document.body.offsetHeight;
  }

  // IE can use depending on mode it is in
  if (document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
    size.width = document.documentElement.offsetWidth;
    size.height = document.documentElement.offsetHeight;
  }

  // Most recent browsers use
  if (window.innerWidth && window.innerHeight) {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
  }
  return size;
};

// Easy way to bind multiple functions to window.onresize
// TODO: give a way to remove a function after its bound, other than removing all of them
nv.utils.windowResize = function (fun) {
  if (fun === undefined) return;
  var oldresize = window.onresize;
  window.onresize = function (e) {
    if (typeof oldresize == 'function') oldresize(e);
    fun(e);
  };
};

// Backwards compatible way to implement more d3-like coloring of graphs.
// If passed an array, wrap it in a function which implements the old default
// behavior
nv.utils.getColor = function (color) {
  if (!arguments.length) return nv.utils.defaultColor(); //if you pass in nothing, get default colors back

  if (Object.prototype.toString.call(color) === '[object Array]') return function (d, i) {
    return d.color || color[i % color.length];
  };else return color;
  //can't really help it if someone passes rubbish as color
};

// Default color chooser uses the index of an object as before.
nv.utils.defaultColor = function () {
  var colors = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.ordinal().range(_utils_hueColors__WEBPACK_IMPORTED_MODULE_1__["default"].cuiD3Scale()).range();
  return function (d, i) {
    return d.color || colors[i % colors.length];
  };
};

// Returns a color function that takes the result of 'getKey' for each series and
// looks for a corresponding color from the dictionary,
nv.utils.customTheme = function (dictionary, getKey, defaultColors) {
  getKey = getKey || function (series) {
    return series.key;
  }; // use default series.key if getKey is undefined
  defaultColors = defaultColors || d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.category20().range(); //default color function

  var defIndex = defaultColors.length; //current default color (going in reverse)

  return function (series, index) {
    var key = getKey(series);
    if (!defIndex) defIndex = defaultColors.length; //used all the default colors, start over

    if (typeof dictionary[key] !== "undefined") return typeof dictionary[key] === "function" ? dictionary[key]() : dictionary[key];else return defaultColors[--defIndex]; // no match in dictionary, use default color
  };
};

// From the PJAX example on d3js.org, while this is not really directly needed
// it's a very cool method for doing pjax, I may expand upon it a little bit,
// open to suggestions on anything that may be useful
nv.utils.pjax = function (links, content) {
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().selectAll(links).on("click", function () {
    history.pushState(this.href, this.textContent, this.href);
    load(this.href);
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.preventDefault();
  });
  function load(href) {
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().html(href, function (fragment) {
      var target = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(content).node();
      target.parentNode.replaceChild(d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(fragment).select(content).node(), target);
      nv.utils.pjax(links, content);
    });
  }
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(window).on("popstate", function () {
    if ((d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.state)) load((d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.state));
  });
};

/* For situations where we want to approximate the width in pixels for an SVG:text element.
Most common instance is when the element is in a display:none; container.
Forumla is : text.length * font-size * constant_factor
*/
nv.utils.calcApproxTextWidth = function (svgTextElem) {
  if (typeof svgTextElem.style === 'function' && typeof svgTextElem.text === 'function') {
    var fontSize = parseInt(svgTextElem.style("font-size").replace("px", ""));
    var textLength = svgTextElem.text().length;
    return textLength * fontSize * 0.5;
  }
  return 0;
};

/* Numbers that are undefined, null or NaN, convert them to zeros.
*/
nv.utils.NaNtoZero = function (n) {
  if (typeof n !== 'number' || isNaN(n) || n === null || n === Infinity) return 0;
  return n;
};

/*
Snippet of code you can insert into each nv.models.* to give you the ability to
do things like:
chart.options({
  showXAxis: true,
  tooltips: true
});

To enable in the chart:
chart.options = nv.utils.optionsFunc.bind(chart);
*/
nv.utils.optionsFunc = function (args) {
  if (args) {
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().map(args).forEach(function (key, value) {
      if (typeof this[key] === "function") {
        this[key](value);
      }
    }.bind(this));
  }
  return this;
};
nv.models.axis = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var axis = d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.axis();
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 75 //only used for tickLabel currently
    ,
    height = 60 //only used for tickLabel currently
    ,
    scale = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    axisLabelText = null,
    showMaxMin = true //TODO: showMaxMin should be disabled on all ordinal scaled axes
    ,
    highlightZero = true,
    rotateLabels = 0,
    rotateYLabel = true,
    staggerLabels = false,
    isOrdinal = false,
    ticks = null,
    axisLabelDistance = 12 //The larger this number is, the closer the axis label is to the axis.
  ;
  axis.scale(scale).orient('bottom').tickFormat(function (d) {
    return d;
  });

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var scale0;

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-axis').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-axis');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');

      //------------------------------------------------------------

      if (ticks !== null) axis.ticks(ticks);else if (axis.orient() == 'top' || axis.orient() == 'bottom') axis.ticks(Math.abs(scale.range()[1] - scale.range()[0]) / 100);

      //TODO: consider calculating width/height based on whether or not label is added, for reference in charts using this component

      g.transition().call(axis);
      scale0 = scale0 || axis.scale();
      var fmt = axis.tickFormat();
      if (fmt == null) {
        fmt = scale0.tickFormat();
      }
      var axisLabel = g.selectAll('text.nv-axislabel').data([axisLabelText || null]);
      axisLabel.exit().remove();
      switch (axis.orient()) {
        case 'top':
          axisLabel.enter().append('text').attr('class', 'nv-axislabel');
          var w = scale.range().length == 2 ? scale.range()[1] : scale.range()[scale.range().length - 1] + (scale.range()[1] - scale.range()[0]);
          axisLabel.attr('text-anchor', 'middle').attr('y', 0).attr('x', nv.utils.NaNtoZero(w) / 2);
          if (showMaxMin) {
            var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin').data(scale.domain());
            axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text');
            axisMaxMin.exit().remove();
            axisMaxMin.attr('transform', function (d, i) {
              return 'translate(' + scale(d) + ',0)';
            }).select('text').attr('dy', '-0.5em').attr('y', -axis.tickPadding()).attr('text-anchor', 'middle').text(function (d, i) {
              var v = fmt(d);
              return ('' + v).match('NaN') ? '' : v;
            });
            axisMaxMin.transition().attr('transform', function (d, i) {
              return 'translate(' + scale.range()[i] + ',0)';
            });
          }
          break;
        case 'bottom':
          var xLabelMargin = 36;
          var maxTextWidth = 30;
          var xTicks = g.selectAll('g').select("text");
          if (rotateLabels % 360) {
            //Calculate the longest xTick width
            xTicks.each(function (d, i) {
              var width = this.getBBox().width;
              if (width > maxTextWidth) maxTextWidth = width;
            });
            //Convert to radians before calculating sin. Add 30 to margin for healthy padding.
            var sin = Math.abs(Math.sin(rotateLabels * Math.PI / 180));
            var xLabelMargin = (sin ? sin * maxTextWidth : maxTextWidth) + 30;
            //Rotate all xTicks
            xTicks.attr('transform', function (d, i, j) {
              return 'rotate(' + rotateLabels + ' 0,0)';
            }).style('text-anchor', rotateLabels % 360 > 0 ? 'start' : 'end');
          }
          axisLabel.enter().append('text').attr('class', 'nv-axislabel');
          var w = scale.range().length == 2 ? scale.range()[1] : scale.range()[scale.range().length - 1] + (scale.range()[1] - scale.range()[0]);
          axisLabel.attr('text-anchor', 'middle').attr('y', xLabelMargin).attr('x', nv.utils.NaNtoZero(w) / 2);
          if (showMaxMin) {
            //if (showMaxMin && !isOrdinal) {
            var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
            //.data(scale.domain())
            .data([scale.domain()[0], scale.domain()[scale.domain().length - 1]]);
            axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text');
            axisMaxMin.exit().remove();
            axisMaxMin.attr('transform', function (d, i) {
              return 'translate(' + (scale(d) + (isOrdinal ? scale.rangeBand() / 2 : 0)) + ',0)';
            }).select('text').attr('dy', '.71em').attr('y', axis.tickPadding()).attr('transform', function (d, i, j) {
              return 'rotate(' + rotateLabels + ' 0,0)';
            }).style('text-anchor', rotateLabels ? rotateLabels % 360 > 0 ? 'start' : 'end' : 'middle').text(function (d, i) {
              var v = fmt(d);
              return ('' + v).match('NaN') ? '' : v;
            });
            axisMaxMin.transition().attr('transform', function (d, i) {
              //return 'translate(' + scale.range()[i] + ',0)'
              //return 'translate(' + scale(d) + ',0)'
              return 'translate(' + (scale(d) + (isOrdinal ? scale.rangeBand() / 2 : 0)) + ',0)';
            });
          }
          if (staggerLabels) xTicks.attr('transform', function (d, i) {
            return 'translate(0,' + (i % 2 == 0 ? '0' : '12') + ')';
          });
          break;
        case 'right':
          axisLabel.enter().append('text').attr('class', 'nv-axislabel');
          axisLabel.style('text-anchor', rotateYLabel ? 'middle' : 'begin').attr('transform', rotateYLabel ? 'rotate(90)' : '').attr('y', rotateYLabel ? -Math.max(margin.right, width) + 12 : -10) //TODO: consider calculating this based on largest tick width... OR at least expose this on chart
          .attr('x', rotateYLabel ? scale.range()[0] / 2 : axis.tickPadding());
          if (showMaxMin) {
            var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin').data(scale.domain());
            axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text').style('opacity', 0);
            axisMaxMin.exit().remove();
            axisMaxMin.attr('transform', function (d, i) {
              return 'translate(0,' + scale(d) + ')';
            }).select('text').attr('dy', '.32em').attr('y', 0).attr('x', axis.tickPadding()).style('text-anchor', 'start').text(function (d, i) {
              var v = fmt(d);
              return ('' + v).match('NaN') ? '' : v;
            });
            axisMaxMin.transition().attr('transform', function (d, i) {
              return 'translate(0,' + scale.range()[i] + ')';
            }).select('text').style('opacity', 1);
          }
          break;
        case 'left':
          /*
          //For dynamically placing the label. Can be used with dynamically-sized chart axis margins
          var yTicks = g.selectAll('g').select("text");
          yTicks.each(function(d,i){
            var labelPadding = this.getBBox().width + axis.tickPadding() + 16;
            if(labelPadding > width) width = labelPadding;
          });
          */
          axisLabel.enter().append('text').attr('class', 'nv-axislabel');
          axisLabel.style('text-anchor', rotateYLabel ? 'middle' : 'end').attr('transform', rotateYLabel ? 'rotate(-90)' : '').attr('y', rotateYLabel ? -Math.max(margin.left, width) + axisLabelDistance : -10) //TODO: consider calculating this based on largest tick width... OR at least expose this on chart
          .attr('x', rotateYLabel ? -scale.range()[0] / 2 : -axis.tickPadding());
          if (showMaxMin) {
            var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin').data(scale.domain());
            axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text').style('opacity', 0);
            axisMaxMin.exit().remove();
            axisMaxMin.attr('transform', function (d, i) {
              return 'translate(0,' + scale0(d) + ')';
            }).select('text').attr('dy', '.32em').attr('y', 0).attr('x', -axis.tickPadding()).attr('text-anchor', 'end').text(function (d, i) {
              var v = fmt(d);
              return ('' + v).match('NaN') ? '' : v.toString().substr(0, 8);
            });
            axisMaxMin.transition().attr('transform', function (d, i) {
              return 'translate(0,' + scale.range()[i] + ')';
            }).select('text').style('opacity', 1);
          }
          break;
      }
      axisLabel.text(function (d) {
        return d;
      });
      if (showMaxMin && (axis.orient() === 'left' || axis.orient() === 'right')) {
        //check if max and min overlap other values, if so, hide the values that overlap
        g.selectAll('g') // the g's wrapping each tick
        .each(function (d, i) {
          d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).select('text').attr('opacity', 1);
          if (scale(d) < scale.range()[1] + 10 || scale(d) > scale.range()[0] - 10) {
            // 10 is assuming text height is 16... if d is 0, leave it!
            if (d > 1e-10 || d < -1e-10)
              // accounts for minor floating point errors... though could be problematic if the scale is EXTREMELY SMALL
              d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).attr('opacity', 0);
            d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).select('text').attr('opacity', 0); // Don't remove the ZERO line!!
          }
        });

        //if Max and Min = 0 only show min, Issue #281
        if (scale.domain()[0] == scale.domain()[1] && scale.domain()[0] == 0) wrap.selectAll('g.nv-axisMaxMin').style('opacity', function (d, i) {
          return !i ? 1 : 0;
        });
      }
      if (showMaxMin && (axis.orient() === 'top' || axis.orient() === 'bottom')) {
        var maxMinRange = [];
        wrap.selectAll('g.nv-axisMaxMin').each(function (d, i) {
          try {
            if (i)
              // i== 1, max position
              maxMinRange.push(scale(d) - this.getBBox().width - 4); //assuming the max and min labels are as wide as the next tick (with an extra 4 pixels just in case)
            else
              // i==0, min position
              maxMinRange.push(scale(d) + this.getBBox().width + 4);
          } catch (err) {
            if (i)
              // i== 1, max position
              maxMinRange.push(scale(d) - 4); //assuming the max and min labels are as wide as the next tick (with an extra 4 pixels just in case)
            else
              // i==0, min position
              maxMinRange.push(scale(d) + 4);
          }
        });
        g.selectAll('g') // the g's wrapping each tick
        .each(function (d, i) {
          if (scale(d) < maxMinRange[0] || scale(d) > maxMinRange[1]) {
            if (d > 1e-10 || d < -1e-10)
              // accounts for minor floating point errors... though could be problematic if the scale is EXTREMELY SMALL
              d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).remove();else d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).select('text').remove(); // Don't remove the ZERO line!!
          }
        });
      }

      //highlight zero line ... Maybe should not be an option and should just be in CSS?
      if (highlightZero) g.selectAll('.tick').filter(function (d) {
        return !parseFloat(Math.round(d.__data__ * 100000) / 1000000) && d.__data__ !== undefined;
      }) //this is because sometimes the 0 tick is a very small fraction, TODO: think of cleaner technique
      .classed('zero', true);

      //store old scales for use in transitions on update
      scale0 = scale.copy();
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.axis = axis;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, axis, 'orient', 'tickValues', 'tickSubdivide', 'tickSize', 'tickPadding', 'tickFormat');
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, scale, 'domain', 'range', 'rangeBand', 'rangeBands'); //these are also accessible by chart.scale(), but added common ones directly for ease of use

  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.ticks = function (_) {
    if (!arguments.length) return ticks;
    ticks = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.axisLabel = function (_) {
    if (!arguments.length) return axisLabelText;
    axisLabelText = _;
    return chart;
  };
  chart.showMaxMin = function (_) {
    if (!arguments.length) return showMaxMin;
    showMaxMin = _;
    return chart;
  };
  chart.highlightZero = function (_) {
    if (!arguments.length) return highlightZero;
    highlightZero = _;
    return chart;
  };
  chart.scale = function (_) {
    if (!arguments.length) return scale;
    scale = _;
    axis.scale(scale);
    isOrdinal = typeof scale.rangeBands === 'function';
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, scale, 'domain', 'range', 'rangeBand', 'rangeBands');
    return chart;
  };
  chart.rotateYLabel = function (_) {
    if (!arguments.length) return rotateYLabel;
    rotateYLabel = _;
    return chart;
  };
  chart.rotateLabels = function (_) {
    if (!arguments.length) return rotateLabels;
    rotateLabels = _;
    return chart;
  };
  chart.staggerLabels = function (_) {
    if (!arguments.length) return staggerLabels;
    staggerLabels = _;
    return chart;
  };
  chart.axisLabelDistance = function (_) {
    if (!arguments.length) return axisLabelDistance;
    axisLabelDistance = _;
    return chart;
  };

  //============================================================

  return chart;
};
//TODO: consider deprecating and using multibar with single series for this
nv.models.historicalBar = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 960,
    height = 500,
    id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
    ,
    x = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    y = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    getX = function getX(d) {
      return d.x;
    },
    getY = function getY(d) {
      return d.y;
    },
    forceX = [],
    forceY = [0],
    padData = false,
    clipEdge = true,
    color = nv.utils.defaultColor(),
    xDomain,
    yDomain,
    xRange,
    yRange,
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout'),
    interactive = true;

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableWidth = width - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);

      //------------------------------------------------------------
      // Setup Scales

      x.domain(xDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(data[0].values.map(getX).concat(forceX)));
      if (padData) x.range(xRange || [availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5) / data[0].values.length]);else x.range(xRange || [0, availableWidth]);
      y.domain(yDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(data[0].values.map(getY).concat(forceY))).range(yRange || [availableHeight, 0]);

      // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point

      if (x.domain()[0] === x.domain()[1]) x.domain()[0] ? x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01]) : x.domain([-1, 1]);
      if (y.domain()[0] === y.domain()[1]) y.domain()[0] ? y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01]) : y.domain([-1, 1]);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-historicalBar-' + id).data([data[0].values]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-historicalBar-' + id);
      var defsEnter = wrapEnter.append('defs');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-bars');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      container.on('click', function (d, i) {
        dispatch.chartClick({
          data: d,
          index: i,
          pos: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event),
          id: id
        });
      });
      defsEnter.append('clipPath').attr('id', 'nv-chart-clip-path-' + id).append('rect');
      wrap.select('#nv-chart-clip-path-' + id + ' rect').attr('width', availableWidth).attr('height', availableHeight);
      g.attr('clip-path', clipEdge ? 'url(#nv-chart-clip-path-' + id + ')' : '');
      var bars = wrap.select('.nv-bars').selectAll('.nv-bar').data(function (d) {
        return d;
      }, function (d, i) {
        return getX(d, i);
      });
      bars.exit().remove();
      var barsEnter = bars.enter().append('rect')
      //.attr('class', function(d,i,j) { return (getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive') + ' nv-bar-' + j + '-' + i })
      .attr('x', 0).attr('y', function (d, i) {
        return nv.utils.NaNtoZero(y(Math.max(0, getY(d, i))));
      }).attr('height', function (d, i) {
        return nv.utils.NaNtoZero(Math.abs(y(getY(d, i)) - y(0)));
      }).attr('transform', function (d, i) {
        return 'translate(' + (x(getX(d, i)) - availableWidth / data[0].values.length * .45) + ',0)';
      }).on('mouseover', function (d, i) {
        if (!interactive) return;
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', true);
        dispatch.elementMouseover({
          point: d,
          series: data[0],
          pos: [x(getX(d, i)), y(getY(d, i))],
          // TODO: Figure out why the value appears to be shifted
          pointIndex: i,
          seriesIndex: 0,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
      }).on('mouseout', function (d, i) {
        if (!interactive) return;
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', false);
        dispatch.elementMouseout({
          point: d,
          series: data[0],
          pointIndex: i,
          seriesIndex: 0,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
      }).on('click', function (d, i) {
        if (!interactive) return;
        dispatch.elementClick({
          //label: d[label],
          value: getY(d, i),
          data: d,
          index: i,
          pos: [x(getX(d, i)), y(getY(d, i))],
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event),
          id: id
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      }).on('dblclick', function (d, i) {
        if (!interactive) return;
        dispatch.elementDblClick({
          //label: d[label],
          value: getY(d, i),
          data: d,
          index: i,
          pos: [x(getX(d, i)), y(getY(d, i))],
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event),
          id: id
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      });
      bars.attr('fill', function (d, i) {
        return color(d, i);
      }).attr('class', function (d, i, j) {
        return (getY(d, i) < 0 ? 'nv-bar negative' : 'nv-bar positive') + ' nv-bar-' + j + '-' + i;
      }).transition().attr('transform', function (d, i) {
        return 'translate(' + (x(getX(d, i)) - availableWidth / data[0].values.length * .45) + ',0)';
      })
      //TODO: better width calculations that don't assume always uniform data spacing;w
      .attr('width', availableWidth / data[0].values.length * .9);
      bars.transition().attr('y', function (d, i) {
        var rval = getY(d, i) < 0 ? y(0) : y(0) - y(getY(d, i)) < 1 ? y(0) - 1 : y(getY(d, i));
        return nv.utils.NaNtoZero(rval);
      }).attr('height', function (d, i) {
        return nv.utils.NaNtoZero(Math.max(Math.abs(y(getY(d, i)) - y(0)), 1));
      });
    });
    return chart;
  }

  //Create methods to allow outside functions to highlight a specific bar.
  chart.highlightPoint = function (pointIndex, isHoverOver) {
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(".nv-historicalBar-" + id).select(".nv-bars .nv-bar-0-" + pointIndex).classed("hover", isHoverOver);
  };
  chart.clearHighlights = function () {
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(".nv-historicalBar-" + id).select(".nv-bars .nv-bar.hover").classed("hover", false);
  };
  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = _;
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = _;
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.xScale = function (_) {
    if (!arguments.length) return x;
    x = _;
    return chart;
  };
  chart.yScale = function (_) {
    if (!arguments.length) return y;
    y = _;
    return chart;
  };
  chart.xDomain = function (_) {
    if (!arguments.length) return xDomain;
    xDomain = _;
    return chart;
  };
  chart.yDomain = function (_) {
    if (!arguments.length) return yDomain;
    yDomain = _;
    return chart;
  };
  chart.xRange = function (_) {
    if (!arguments.length) return xRange;
    xRange = _;
    return chart;
  };
  chart.yRange = function (_) {
    if (!arguments.length) return yRange;
    yRange = _;
    return chart;
  };
  chart.forceX = function (_) {
    if (!arguments.length) return forceX;
    forceX = _;
    return chart;
  };
  chart.forceY = function (_) {
    if (!arguments.length) return forceY;
    forceY = _;
    return chart;
  };
  chart.padData = function (_) {
    if (!arguments.length) return padData;
    padData = _;
    return chart;
  };
  chart.clipEdge = function (_) {
    if (!arguments.length) return clipEdge;
    clipEdge = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };
  chart.id = function (_) {
    if (!arguments.length) return id;
    id = _;
    return chart;
  };
  chart.interactive = function (_) {
    if (!arguments.length) return interactive;
    interactive = false;
    return chart;
  };

  //============================================================

  return chart;
};

// Chart design based on the recommendations of Stephen Few. Implementation
// based on the work of Clint Ivy, Jamie Love, and Jason Davies.
// http://projects.instantcognition.com/protovis/bulletchart/

nv.models.bullet = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    orient = 'left' // TODO top & bottom
    ,
    reverse = false,
    ranges = function ranges(d) {
      return d.ranges;
    },
    markers = function markers(d) {
      return d.markers;
    },
    measures = function measures(d) {
      return d.measures;
    },
    rangeLabels = function rangeLabels(d) {
      return d.rangeLabels ? d.rangeLabels : [];
    },
    markerLabels = function markerLabels(d) {
      return d.markerLabels ? d.markerLabels : [];
    },
    measureLabels = function measureLabels(d) {
      return d.measureLabels ? d.measureLabels : [];
    },
    forceX = [0] // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
    ,
    width = 380,
    height = 30,
    tickFormat = null,
    color = nv.utils.getColor(['#1f77b4']),
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('elementMouseover', 'elementMouseout');

  //============================================================

  function chart(selection) {
    selection.each(function (d, i) {
      var availableWidth = width - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);
      var rangez = ranges.call(this, d, i).slice().sort((d3v3__WEBPACK_IMPORTED_MODULE_0___default().descending)),
        markerz = markers.call(this, d, i).slice().sort((d3v3__WEBPACK_IMPORTED_MODULE_0___default().descending)),
        measurez = measures.call(this, d, i).slice().sort((d3v3__WEBPACK_IMPORTED_MODULE_0___default().descending)),
        rangeLabelz = rangeLabels.call(this, d, i).slice(),
        markerLabelz = markerLabels.call(this, d, i).slice(),
        measureLabelz = measureLabels.call(this, d, i).slice();

      //------------------------------------------------------------
      // Setup Scales

      // Compute the new x-scale.
      var x1 = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear().domain(d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge([forceX, rangez]))).range(reverse ? [availableWidth, 0] : [0, availableWidth]);

      // Retrieve the old x-scale, if this is an update.
      var x0 = this.__chart__ || d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear().domain([0, Infinity]).range(x1.range());

      // Stash the new scale.
      this.__chart__ = x1;
      var rangeMin = d3v3__WEBPACK_IMPORTED_MODULE_0___default().min(rangez),
        //rangez[2]
        rangeMax = d3v3__WEBPACK_IMPORTED_MODULE_0___default().max(rangez),
        //rangez[0]
        rangeAvg = rangez[1];

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-bullet').data([d]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-bullet');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('rect').attr('class', 'nv-range nv-rangeMax');
      gEnter.append('rect').attr('class', 'nv-range nv-rangeAvg');
      gEnter.append('rect').attr('class', 'nv-range nv-rangeMin');
      gEnter.append('rect').attr('class', 'nv-measure');
      gEnter.append('path').attr('class', 'nv-markerTriangle');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      var w0 = function w0(d) {
          return Math.abs(x0(d) - x0(0));
        },
        // TODO: could optimize by precalculating x0(0) and x1(0)
        w1 = function w1(d) {
          return Math.abs(x1(d) - x1(0));
        };
      var xp0 = function xp0(d) {
          return d < 0 ? x0(d) : x0(0);
        },
        xp1 = function xp1(d) {
          return d < 0 ? x1(d) : x1(0);
        };
      g.select('rect.nv-rangeMax').attr('height', availableHeight).attr('width', w1(rangeMax > 0 ? rangeMax : rangeMin)).attr('x', xp1(rangeMax > 0 ? rangeMax : rangeMin)).datum(rangeMax > 0 ? rangeMax : rangeMin);
      /*
      .attr('x', rangeMin < 0 ?
                     rangeMax > 0 ?
                         x1(rangeMin)
                       : x1(rangeMax)
                   : x1(0))
                  */

      g.select('rect.nv-rangeAvg').attr('height', availableHeight).attr('width', w1(rangeAvg)).attr('x', xp1(rangeAvg)).datum(rangeAvg);
      /*
      .attr('width', rangeMax <= 0 ?
                         x1(rangeMax) - x1(rangeAvg)
                       : x1(rangeAvg) - x1(rangeMin))
      .attr('x', rangeMax <= 0 ?
                     x1(rangeAvg)
                   : x1(rangeMin))
                  */

      g.select('rect.nv-rangeMin').attr('height', availableHeight).attr('width', w1(rangeMax)).attr('x', xp1(rangeMax)).attr('width', w1(rangeMax > 0 ? rangeMin : rangeMax)).attr('x', xp1(rangeMax > 0 ? rangeMin : rangeMax)).datum(rangeMax > 0 ? rangeMin : rangeMax);
      /*
      .attr('width', rangeMax <= 0 ?
                         x1(rangeAvg) - x1(rangeMin)
                       : x1(rangeMax) - x1(rangeAvg))
      .attr('x', rangeMax <= 0 ?
                     x1(rangeMin)
                   : x1(rangeAvg))
                  */

      g.select('rect.nv-measure').style('fill', color).attr('height', availableHeight / 3).attr('y', availableHeight / 3).attr('width', measurez < 0 ? x1(0) - x1(measurez[0]) : x1(measurez[0]) - x1(0)).attr('x', xp1(measurez)).on('mouseover', function () {
        dispatch.elementMouseover({
          value: measurez[0],
          label: measureLabelz[0] || 'Current',
          pos: [x1(measurez[0]), availableHeight / 2]
        });
      }).on('mouseout', function () {
        dispatch.elementMouseout({
          value: measurez[0],
          label: measureLabelz[0] || 'Current'
        });
      });
      var h3 = availableHeight / 6;
      if (markerz[0]) {
        g.selectAll('path.nv-markerTriangle').attr('transform', function (d) {
          return 'translate(' + x1(markerz[0]) + ',' + availableHeight / 2 + ')';
        }).attr('d', 'M0,' + h3 + 'L' + h3 + ',' + -h3 + ' ' + -h3 + ',' + -h3 + 'Z').on('mouseover', function () {
          dispatch.elementMouseover({
            value: markerz[0],
            label: markerLabelz[0] || 'Previous',
            pos: [x1(markerz[0]), availableHeight / 2]
          });
        }).on('mouseout', function () {
          dispatch.elementMouseout({
            value: markerz[0],
            label: markerLabelz[0] || 'Previous'
          });
        });
      } else {
        g.selectAll('path.nv-markerTriangle').remove();
      }
      wrap.selectAll('.nv-range').on('mouseover', function (d, i) {
        var label = rangeLabelz[i] || (!i ? "Maximum" : i == 1 ? "Mean" : "Minimum");
        dispatch.elementMouseover({
          value: d,
          label: label,
          pos: [x1(d), availableHeight / 2]
        });
      }).on('mouseout', function (d, i) {
        var label = rangeLabelz[i] || (!i ? "Maximum" : i == 1 ? "Mean" : "Minimum");
        dispatch.elementMouseout({
          value: d,
          label: label
        });
      });

      /* // THIS IS THE PREVIOUS BULLET IMPLEMENTATION, WILL REMOVE SHORTLY
            // Update the range rects.
            var range = g.selectAll('rect.nv-range')
                .data(rangez);
      
            range.enter().append('rect')
                .attr('class', function(d, i) { return 'nv-range nv-s' + i; })
                .attr('width', w0)
                .attr('height', availableHeight)
                .attr('x', reverse ? x0 : 0)
                .on('mouseover', function(d,i) { 
                    dispatch.elementMouseover({
                      value: d,
                      label: (i <= 0) ? 'Maximum' : (i > 1) ? 'Minimum' : 'Mean', //TODO: make these labels a variable
                      pos: [x1(d), availableHeight/2]
                    })
                })
                .on('mouseout', function(d,i) { 
                    dispatch.elementMouseout({
                      value: d,
                      label: (i <= 0) ? 'Minimum' : (i >=1) ? 'Maximum' : 'Mean' //TODO: make these labels a variable
                    })
                })
      
            d3v3.transition(range)
                .attr('x', reverse ? x1 : 0)
                .attr('width', w1)
                .attr('height', availableHeight);
      
      
            // Update the measure rects.
            var measure = g.selectAll('rect.nv-measure')
                .data(measurez);
      
            measure.enter().append('rect')
                .attr('class', function(d, i) { return 'nv-measure nv-s' + i; })
                .style('fill', function(d,i) { return color(d,i ) })
                .attr('width', w0)
                .attr('height', availableHeight / 3)
                .attr('x', reverse ? x0 : 0)
                .attr('y', availableHeight / 3)
                .on('mouseover', function(d) { 
                    dispatch.elementMouseover({
                      value: d,
                      label: 'Current', //TODO: make these labels a variable
                      pos: [x1(d), availableHeight/2]
                    })
                })
                .on('mouseout', function(d) { 
                    dispatch.elementMouseout({
                      value: d,
                      label: 'Current' //TODO: make these labels a variable
                    })
                })
      
            d3v3.transition(measure)
                .attr('width', w1)
                .attr('height', availableHeight / 3)
                .attr('x', reverse ? x1 : 0)
                .attr('y', availableHeight / 3);
      
      
      
            // Update the marker lines.
            var marker = g.selectAll('path.nv-markerTriangle')
                .data(markerz);
      
            var h3 =  availableHeight / 6;
            marker.enter().append('path')
                .attr('class', 'nv-markerTriangle')
                .attr('transform', function(d) { return 'translate(' + x0(d) + ',' + (availableHeight / 2) + ')' })
                .attr('d', 'M0,' + h3 + 'L' + h3 + ',' + (-h3) + ' ' + (-h3) + ',' + (-h3) + 'Z')
                .on('mouseover', function(d,i) {
                    dispatch.elementMouseover({
                      value: d,
                      label: 'Previous',
                      pos: [x1(d), availableHeight/2]
                    })
                })
                .on('mouseout', function(d,i) {
                    dispatch.elementMouseout({
                      value: d,
                      label: 'Previous'
                    })
                });
      
            d3v3.transition(marker)
                .attr('transform', function(d) { return 'translate(' + (x1(d) - x1(0)) + ',' + (availableHeight / 2) + ')' });
      
            marker.exit().remove();
      */
    });

    // d3v3.timer.flush();  // Not needed?

    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.options = nv.utils.optionsFunc.bind(chart);

  // left, right, top, bottom
  chart.orient = function (_) {
    if (!arguments.length) return orient;
    orient = _;
    reverse = orient == 'right' || orient == 'bottom';
    return chart;
  };

  // ranges (bad, satisfactory, good)
  chart.ranges = function (_) {
    if (!arguments.length) return ranges;
    ranges = _;
    return chart;
  };

  // markers (previous, goal)
  chart.markers = function (_) {
    if (!arguments.length) return markers;
    markers = _;
    return chart;
  };

  // measures (actual, forecast)
  chart.measures = function (_) {
    if (!arguments.length) return measures;
    measures = _;
    return chart;
  };
  chart.forceX = function (_) {
    if (!arguments.length) return forceX;
    forceX = _;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.tickFormat = function (_) {
    if (!arguments.length) return tickFormat;
    tickFormat = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };

  //============================================================

  return chart;
};

// Chart design based on the recommendations of Stephen Few. Implementation
// based on the work of Clint Ivy, Jamie Love, and Jason Davies.
// http://projects.instantcognition.com/protovis/bulletchart/
nv.models.bulletChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var bullet = nv.models.bullet();
  var orient = 'left' // TODO top & bottom
    ,
    reverse = false,
    margin = {
      top: 5,
      right: 40,
      bottom: 20,
      left: 120
    },
    ranges = function ranges(d) {
      return d.ranges;
    },
    markers = function markers(d) {
      return d.markers;
    },
    measures = function measures(d) {
      return d.measures;
    },
    width = null,
    height = 55,
    tickFormat = null,
    tooltips = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + x + '</h3>' + '<p>' + y + '</p>';
    },
    noData = 'No Data Available.',
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide');

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var showTooltip = function showTooltip(e, offsetElement) {
    var left = e.pos[0] + (offsetElement.offsetLeft || 0) + margin.left,
      top = e.pos[1] + (offsetElement.offsetTop || 0) + margin.top,
      content = tooltip(e.key, e.label, e.value, e, chart);
    nv.tooltip.show([left, top], content, e.value < 0 ? 'e' : 'w', null, offsetElement);
  };

  //============================================================

  function chart(selection) {
    selection.each(function (d, i) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        that = this;
      chart.update = function () {
        chart(selection);
      };
      chart.container = this;

      //------------------------------------------------------------
      // Display No Data message if there's nothing to show.

      if (!d || !ranges.call(this, d, i)) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', 18 + margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      var rangez = ranges.call(this, d, i).slice().sort((d3v3__WEBPACK_IMPORTED_MODULE_0___default().descending)),
        markerz = markers.call(this, d, i).slice().sort((d3v3__WEBPACK_IMPORTED_MODULE_0___default().descending)),
        measurez = measures.call(this, d, i).slice().sort((d3v3__WEBPACK_IMPORTED_MODULE_0___default().descending));

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-bulletChart').data([d]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-bulletChart');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-bulletWrap');
      gEnter.append('g').attr('class', 'nv-titles');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      // Compute the new x-scale.
      var x1 = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear().domain([0, Math.max(rangez[0], markerz[0], measurez[0])]) // TODO: need to allow forceX and forceY, and xDomain, yDomain
      .range(reverse ? [availableWidth, 0] : [0, availableWidth]);

      // Retrieve the old x-scale, if this is an update.
      var x0 = this.__chart__ || d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear().domain([0, Infinity]).range(x1.range());

      // Stash the new scale.
      this.__chart__ = x1;

      /*
      // Derive width-scales from the x-scales.
      var w0 = bulletWidth(x0),
          w1 = bulletWidth(x1);
       function bulletWidth(x) {
        var x0 = x(0);
        return function(d) {
          return Math.abs(x(d) - x(0));
        };
      }
       function bulletTranslate(x) {
        return function(d) {
          return 'translate(' + x(d) + ',0)';
        };
      }
      */

      var w0 = function w0(d) {
          return Math.abs(x0(d) - x0(0));
        },
        // TODO: could optimize by precalculating x0(0) and x1(0)
        w1 = function w1(d) {
          return Math.abs(x1(d) - x1(0));
        };
      var title = gEnter.select('.nv-titles').append('g').attr('text-anchor', 'end').attr('transform', 'translate(-6,' + (height - margin.top - margin.bottom) / 2 + ')');
      title.append('text').attr('class', 'nv-title').text(function (d) {
        return d.title;
      });
      title.append('text').attr('class', 'nv-subtitle').attr('dy', '1em').text(function (d) {
        return d.subtitle;
      });
      bullet.width(availableWidth).height(availableHeight);
      var bulletWrap = g.select('.nv-bulletWrap');
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(bulletWrap).call(bullet);

      // Compute the tick format.
      var format = tickFormat || x1.tickFormat(availableWidth / 100);

      // Update the tick groups.
      var tick = g.selectAll('g.nv-tick').data(x1.ticks(availableWidth / 50), function (d) {
        return this.textContent || format(d);
      });

      // Initialize the ticks with the old scale, x0.
      var tickEnter = tick.enter().append('g').attr('class', 'nv-tick').attr('transform', function (d) {
        return 'translate(' + x0(d) + ',0)';
      }).style('opacity', 1e-6);
      tickEnter.append('line').attr('y1', availableHeight).attr('y2', availableHeight * 7 / 6);
      tickEnter.append('text').attr('text-anchor', 'middle').attr('dy', '1em').attr('y', availableHeight * 7 / 6).text(format);

      // Transition the updating ticks to the new scale, x1.
      var tickUpdate = d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(tick).attr('transform', function (d) {
        return 'translate(' + x1(d) + ',0)';
      }).style('opacity', 1);
      tickUpdate.select('line').attr('y1', availableHeight).attr('y2', availableHeight * 7 / 6);
      tickUpdate.select('text').attr('y', availableHeight * 7 / 6);

      // Transition the exiting ticks to the new scale, x1.
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(tick.exit()).attr('transform', function (d) {
        return 'translate(' + x1(d) + ',0)';
      }).style('opacity', 1e-6).remove();

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      dispatch.on('tooltipShow', function (e) {
        e.key = d.title;
        if (tooltips) showTooltip(e, that.parentNode);
      });

      //============================================================
    });
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().timer.flush();
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  bullet.dispatch.on('elementMouseover.tooltip', function (e) {
    dispatch.tooltipShow(e);
  });
  bullet.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.bullet = bullet;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, bullet, 'color');
  chart.options = nv.utils.optionsFunc.bind(chart);

  // left, right, top, bottom
  chart.orient = function (x) {
    if (!arguments.length) return orient;
    orient = x;
    reverse = orient == 'right' || orient == 'bottom';
    return chart;
  };

  // ranges (bad, satisfactory, good)
  chart.ranges = function (x) {
    if (!arguments.length) return ranges;
    ranges = x;
    return chart;
  };

  // markers (previous, goal)
  chart.markers = function (x) {
    if (!arguments.length) return markers;
    markers = x;
    return chart;
  };

  // measures (actual, forecast)
  chart.measures = function (x) {
    if (!arguments.length) return measures;
    measures = x;
    return chart;
  };
  chart.width = function (x) {
    if (!arguments.length) return width;
    width = x;
    return chart;
  };
  chart.height = function (x) {
    if (!arguments.length) return height;
    height = x;
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.tickFormat = function (x) {
    if (!arguments.length) return tickFormat;
    tickFormat = x;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.cumulativeLineChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var lines = nv.models.line(),
    xAxis = nv.models.axis(),
    yAxis = nv.models.axis(),
    legend = nv.models.legend(),
    controls = nv.models.legend(),
    interactiveLayer = nv.interactiveGuideline();
  var margin = {
      top: 30,
      right: 30,
      bottom: 50,
      left: 60
    },
    color = nv.utils.defaultColor(),
    width = null,
    height = null,
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    rightAlignYAxis = false,
    tooltips = true,
    showControls = true,
    useInteractiveGuideline = false,
    rescaleY = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
    },
    x //can be accessed via chart.xScale()
    ,
    y //can be accessed via chart.yScale()
    ,
    id = lines.id(),
    state = {
      index: 0,
      rescaleY: rescaleY
    },
    defaultState = null,
    noData = 'No Data Available.',
    average = function average(d) {
      return d.average;
    },
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState'),
    transitionDuration = 250,
    noErrorCheck = false //if set to TRUE, will bypass an error check in the indexify function.
  ;
  xAxis.orient('bottom').tickPadding(7);
  yAxis.orient(rightAlignYAxis ? 'right' : 'left');

  //============================================================
  controls.updateState(false);

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var dx = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    index = {
      i: 0,
      x: 0
    };
  var showTooltip = function showTooltip(e, offsetElement) {
    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
      y = yAxis.tickFormat()(lines.y()(e.point, e.pointIndex)),
      content = tooltip(e.series.key, x, y, e, chart);
    nv.tooltip.show([left, top], content, null, null, offsetElement);
  };

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('nv-chart-' + id, true),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        container.transition().duration(transitionDuration).call(chart);
      };
      chart.container = this;

      //set state.disabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });
      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) defaultState[key] = state[key].slice(0);else defaultState[key] = state[key];
        }
      }
      var indexDrag = d3v3__WEBPACK_IMPORTED_MODULE_0___default().behavior.drag().on('dragstart', dragStart).on('drag', dragMove).on('dragend', dragEnd);
      function dragStart(d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(chart.container).style('cursor', 'ew-resize');
      }
      function dragMove(d, i) {
        index.x = (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.x);
        index.i = Math.round(dx.invert(index.x));
        updateZero();
      }
      function dragEnd(d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(chart.container).style('cursor', 'auto');

        // update state and send stateChange with new index
        state.index = index.i;
        dispatch.stateChange(state);
      }

      //------------------------------------------------------------
      // Display No Data message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      x = lines.xScale();
      y = lines.yScale();
      if (!rescaleY) {
        var seriesDomains = data.filter(function (series) {
          return !series.disabled;
        }).map(function (series, i) {
          var initialDomain = d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(series.values, lines.y());

          //account for series being disabled when losing 95% or more
          if (initialDomain[0] < -.95) initialDomain[0] = -.95;
          return [(initialDomain[0] - initialDomain[1]) / (1 + initialDomain[1]), (initialDomain[1] - initialDomain[0]) / (1 + initialDomain[0])];
        });
        var completeDomain = [d3v3__WEBPACK_IMPORTED_MODULE_0___default().min(seriesDomains, function (d) {
          return d[0];
        }), d3v3__WEBPACK_IMPORTED_MODULE_0___default().max(seriesDomains, function (d) {
          return d[1];
        })];
        lines.yDomain(completeDomain);
      } else {
        lines.yDomain(null);
      }
      dx.domain([0, data[0].values.length - 1]) //Assumes all series have same length
      .range([0, availableWidth]).clamp(true);

      //------------------------------------------------------------

      var data = indexify(index.i, data);

      //------------------------------------------------------------
      // Setup containers and skeleton of chart
      var interactivePointerEvents = useInteractiveGuideline ? "none" : "all";
      var wrap = container.selectAll('g.nv-wrap.nv-cumulativeLine').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-cumulativeLine').append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-interactive');
      gEnter.append('g').attr('class', 'nv-x nv-axis').style("pointer-events", "none");
      gEnter.append('g').attr('class', 'nv-y nv-axis');
      gEnter.append('g').attr('class', 'nv-background');
      gEnter.append('g').attr('class', 'nv-linesWrap').style("pointer-events", interactivePointerEvents);
      gEnter.append('g').attr('class', 'nv-avgLinesWrap').style("pointer-events", "none");
      gEnter.append('g').attr('class', 'nv-legendWrap');
      gEnter.append('g').attr('class', 'nv-controlsWrap');

      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        legend.width(availableWidth);
        g.select('.nv-legendWrap').datum(data).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        g.select('.nv-legendWrap').attr('transform', 'translate(0,' + -margin.top + ')');
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Controls

      if (showControls) {
        var controlsData = [{
          key: 'Re-scale y-axis',
          disabled: !rescaleY
        }];
        controls.width(140).color(['#444', '#444', '#444']).rightAlign(false).margin({
          top: 5,
          right: 0,
          bottom: 5,
          left: 20
        });
        g.select('.nv-controlsWrap').datum(controlsData).attr('transform', 'translate(0,' + -margin.top + ')').call(controls);
      }

      //------------------------------------------------------------

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      if (rightAlignYAxis) {
        g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
      }

      // Show error if series goes below 100%
      var tempDisabled = data.filter(function (d) {
        return d.tempDisabled;
      });
      wrap.select('.tempDisabled').remove(); //clean-up and prevent duplicates
      if (tempDisabled.length) {
        wrap.append('text').attr('class', 'tempDisabled').attr('x', availableWidth / 2).attr('y', '-.71em').style('text-anchor', 'end').text(tempDisabled.map(function (d) {
          return d.key;
        }).join(', ') + ' values cannot be calculated for this time period.');
      }

      //------------------------------------------------------------
      // Main Chart Component(s)

      //------------------------------------------------------------
      //Set up interactive layer
      if (useInteractiveGuideline) {
        interactiveLayer.width(availableWidth).height(availableHeight).margin({
          left: margin.left,
          top: margin.top
        }).svgContainer(container).xScale(x);
        wrap.select(".nv-interactive").call(interactiveLayer);
      }
      gEnter.select('.nv-background').append('rect');
      g.select('.nv-background rect').attr('width', availableWidth).attr('height', availableHeight);
      lines
      //.x(function(d) { return d.x })
      .y(function (d) {
        return d.display.y;
      }).width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled && !data[i].tempDisabled;
      }));
      var linesWrap = g.select('.nv-linesWrap').datum(data.filter(function (d) {
        return !d.disabled && !d.tempDisabled;
      }));

      //d3v3.transition(linesWrap).call(lines);
      linesWrap.call(lines);

      /*Handle average lines [AN-612] ----------------------------*/

      //Store a series index number in the data array.
      data.forEach(function (d, i) {
        d.seriesIndex = i;
      });
      var avgLineData = data.filter(function (d) {
        return !d.disabled && !!average(d);
      });
      var avgLines = g.select(".nv-avgLinesWrap").selectAll("line").data(avgLineData, function (d) {
        return d.key;
      });
      var getAvgLineY = function getAvgLineY(d) {
        //If average lines go off the svg element, clamp them to the svg bounds.
        var yVal = y(average(d));
        if (yVal < 0) return 0;
        if (yVal > availableHeight) return availableHeight;
        return yVal;
      };
      avgLines.enter().append('line').style('stroke-width', 2).style('stroke-dasharray', '10,10').style('stroke', function (d, i) {
        return lines.color()(d, d.seriesIndex);
      }).attr('x1', 0).attr('x2', availableWidth).attr('y1', getAvgLineY).attr('y2', getAvgLineY);
      avgLines.style('stroke-opacity', function (d) {
        //If average lines go offscreen, make them transparent
        var yVal = y(average(d));
        if (yVal < 0 || yVal > availableHeight) return 0;
        return 1;
      }).attr('x1', 0).attr('x2', availableWidth).attr('y1', getAvgLineY).attr('y2', getAvgLineY);
      avgLines.exit().remove();

      //Create index line -----------------------------------------

      var indexLine = linesWrap.selectAll('.nv-indexLine').data([index]);
      indexLine.enter().append('rect').attr('class', 'nv-indexLine').attr('width', 3).attr('x', -2).attr('fill', 'red').attr('fill-opacity', .5).style("pointer-events", "all").call(indexDrag);
      indexLine.attr('transform', function (d) {
        return 'translate(' + dx(d.i) + ',0)';
      }).attr('height', availableHeight);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Axes

      if (showXAxis) {
        xAxis.scale(x)
        //Suggest how many ticks based on the chart width and D3 should listen (70 is the optimal number for MM/DD/YY dates)
        .ticks(Math.min(data[0].values.length, availableWidth / 70)).tickSize(-availableHeight, 0);
        g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')');
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(g.select('.nv-x.nv-axis')).call(xAxis);
      }
      if (showYAxis) {
        yAxis.scale(y).ticks(availableHeight / 36).tickSize(-availableWidth, 0);
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(g.select('.nv-y.nv-axis')).call(yAxis);
      }
      //------------------------------------------------------------

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      function updateZero() {
        indexLine.data([index]);

        //When dragging the index line, turn off line transitions.
        // Then turn them back on when done dragging.
        var oldDuration = chart.transitionDuration();
        chart.transitionDuration(0);
        chart.update();
        chart.transitionDuration(oldDuration);
      }
      g.select('.nv-background rect').on('click', function () {
        index.x = d3v3__WEBPACK_IMPORTED_MODULE_0___default().mouse(this)[0];
        index.i = Math.round(dx.invert(index.x));

        // update state and send stateChange with new index
        state.index = index.i;
        dispatch.stateChange(state);
        updateZero();
      });
      lines.dispatch.on('elementClick', function (e) {
        index.i = e.pointIndex;
        index.x = dx(index.i);

        // update state and send stateChange with new index
        state.index = index.i;
        dispatch.stateChange(state);
        updateZero();
      });
      controls.dispatch.on('legendClick', function (d, i) {
        d.disabled = !d.disabled;
        rescaleY = !d.disabled;
        state.rescaleY = rescaleY;
        dispatch.stateChange(state);
        chart.update();
      });
      legend.dispatch.on('stateChange', function (newState) {
        state.disabled = newState.disabled;
        dispatch.stateChange(state);
        chart.update();
      });
      interactiveLayer.dispatch.on('elementMousemove', function (e) {
        lines.clearHighlights();
        var singlePoint,
          pointIndex,
          pointXLocation,
          allData = [];
        data.filter(function (series, i) {
          series.seriesIndex = i;
          return !series.disabled;
        }).forEach(function (series, i) {
          pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
          lines.highlightPoint(i, pointIndex, true);
          var point = series.values[pointIndex];
          if (typeof point === 'undefined') return;
          if (typeof singlePoint === 'undefined') singlePoint = point;
          if (typeof pointXLocation === 'undefined') pointXLocation = chart.xScale()(chart.x()(point, pointIndex));
          allData.push({
            key: series.key,
            value: chart.y()(point, pointIndex),
            color: color(series, series.seriesIndex)
          });
        });

        //Highlight the tooltip entry based on which point the mouse is closest to.
        if (allData.length > 2) {
          var yValue = chart.yScale().invert(e.mouseY);
          var domainExtent = Math.abs(chart.yScale().domain()[0] - chart.yScale().domain()[1]);
          var threshold = 0.03 * domainExtent;
          var indexToHighlight = nv.nearestValueIndex(allData.map(function (d) {
            return d.value;
          }), yValue, threshold);
          if (indexToHighlight !== null) allData[indexToHighlight].highlight = true;
        }
        var xValue = xAxis.tickFormat()(chart.x()(singlePoint, pointIndex), pointIndex);
        interactiveLayer.tooltip.position({
          left: pointXLocation + margin.left,
          top: e.mouseY + margin.top
        }).chartContainer(that.parentNode).enabled(tooltips).valueFormatter(function (d, i) {
          return yAxis.tickFormat()(d);
        }).data({
          value: xValue,
          series: allData
        })();
        interactiveLayer.renderGuideLine(pointXLocation);
      });
      interactiveLayer.dispatch.on("elementMouseout", function (e) {
        dispatch.tooltipHide();
        lines.clearHighlights();
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });

      // Update chart from a state object passed to event handler
      dispatch.on('changeState', function (e) {
        if (typeof e.disabled !== 'undefined') {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });
          state.disabled = e.disabled;
        }
        if (typeof e.index !== 'undefined') {
          index.i = e.index;
          index.x = dx(index.i);
          state.index = e.index;
          indexLine.data([index]);
        }
        if (typeof e.rescaleY !== 'undefined') {
          rescaleY = e.rescaleY;
        }
        chart.update();
      });

      //============================================================
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  lines.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  lines.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.lines = lines;
  chart.legend = legend;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  chart.interactiveLayer = interactiveLayer;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, lines, 'defined', 'isArea', 'x', 'y', 'xScale', 'yScale', 'size', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'useVoronoi', 'id');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    return chart;
  };
  chart.rescaleY = function (_) {
    if (!arguments.length) return rescaleY;
    rescaleY = _;
    return chart;
  };
  chart.showControls = function (_) {
    if (!arguments.length) return showControls;
    showControls = _;
    return chart;
  };
  chart.useInteractiveGuideline = function (_) {
    if (!arguments.length) return useInteractiveGuideline;
    useInteractiveGuideline = _;
    if (_ === true) {
      chart.interactive(false);
      chart.useVoronoi(false);
    }
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.showXAxis = function (_) {
    if (!arguments.length) return showXAxis;
    showXAxis = _;
    return chart;
  };
  chart.showYAxis = function (_) {
    if (!arguments.length) return showYAxis;
    showYAxis = _;
    return chart;
  };
  chart.rightAlignYAxis = function (_) {
    if (!arguments.length) return rightAlignYAxis;
    rightAlignYAxis = _;
    yAxis.orient(_ ? 'right' : 'left');
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.state = function (_) {
    if (!arguments.length) return state;
    state = _;
    return chart;
  };
  chart.defaultState = function (_) {
    if (!arguments.length) return defaultState;
    defaultState = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };
  chart.average = function (_) {
    if (!arguments.length) return average;
    average = _;
    return chart;
  };
  chart.transitionDuration = function (_) {
    if (!arguments.length) return transitionDuration;
    transitionDuration = _;
    return chart;
  };
  chart.noErrorCheck = function (_) {
    if (!arguments.length) return noErrorCheck;
    noErrorCheck = _;
    return chart;
  };

  //============================================================

  //============================================================
  // Functions
  //------------------------------------------------------------

  /* Normalize the data according to an index point. */
  function indexify(idx, data) {
    return data.map(function (line, i) {
      if (!line.values) {
        return line;
      }
      var indexValue = line.values[idx];
      if (indexValue == null) {
        return line;
      }
      var v = lines.y()(indexValue, idx);

      //TODO: implement check below, and disable series if series loses 100% or more cause divide by 0 issue
      if (v < -.95 && !noErrorCheck) {
        //if a series loses more than 100%, calculations fail.. anything close can cause major distortion (but is mathematically correct till it hits 100)

        line.tempDisabled = true;
        return line;
      }
      line.tempDisabled = false;
      line.values = line.values.map(function (point, pointIndex) {
        point.display = {
          'y': (lines.y()(point, pointIndex) - v) / (1 + v)
        };
        return point;
      });
      return line;
    });
  }

  //============================================================

  return chart;
};
//TODO: consider deprecating by adding necessary features to multiBar model
nv.models.discreteBar = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 960,
    height = 500,
    id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
    ,
    x = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.ordinal(),
    y = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    getX = function getX(d) {
      return d.x;
    },
    getY = function getY(d) {
      return d.y;
    },
    forceY = [0] // 0 is forced by default.. this makes sense for the majority of bar graphs... user can always do chart.forceY([]) to remove
    ,
    color = nv.utils.defaultColor(),
    showValues = false,
    valueFormat = d3v3__WEBPACK_IMPORTED_MODULE_0___default().format(',.2f'),
    xDomain,
    yDomain,
    xRange,
    yRange,
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout'),
    rectClass = 'discreteBar';

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var x0, y0;

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableWidth = width - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);

      //add series index to each data point for reference
      data.forEach(function (series, i) {
        series.values.forEach(function (point) {
          point.series = i;
        });
      });

      //------------------------------------------------------------
      // Setup Scales

      // remap and flatten the data for use in calculating the scales' domains
      var seriesData = xDomain && yDomain ? [] :
      // if we know xDomain and yDomain, no need to calculate
      data.map(function (d) {
        return d.values.map(function (d, i) {
          return {
            x: getX(d, i),
            y: getY(d, i),
            y0: d.y0
          };
        });
      });
      x.domain(xDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(seriesData).map(function (d) {
        return d.x;
      })).rangeBands(xRange || [0, availableWidth], .1);
      y.domain(yDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(seriesData).map(function (d) {
        return d.y;
      }).concat(forceY)));

      // If showValues, pad the Y axis range to account for label height
      if (showValues) y.range(yRange || [availableHeight - (y.domain()[0] < 0 ? 12 : 0), y.domain()[1] > 0 ? 12 : 0]);else y.range(yRange || [availableHeight, 0]);

      //store old scales if they exist
      x0 = x0 || x;
      y0 = y0 || y.copy().range([y(0), y(0)]);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-discretebar').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discretebar');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-groups');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      //TODO: by definition, the discrete bar should not have multiple groups, will modify/remove later
      var groups = wrap.select('.nv-groups').selectAll('.nv-group').data(function (d) {
        return d;
      }, function (d) {
        return d.key;
      });
      groups.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
      groups.exit().transition().style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6).remove();
      groups.attr('class', function (d, i) {
        return 'nv-group nv-series-' + i;
      }).classed('hover', function (d) {
        return d.hover;
      });
      groups.transition().style('stroke-opacity', 1).style('fill-opacity', .75);
      var bars = groups.selectAll('g.nv-bar').data(function (d) {
        return d.values;
      });
      bars.exit().remove();
      var barsEnter = bars.enter().append('g').attr('transform', function (d, i, j) {
        return 'translate(' + (x(getX(d, i)) + x.rangeBand() * .05) + ', ' + y(0) + ')';
      }).on('mouseover', function (d, i) {
        //TODO: figure out why j works above, but not here
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', true);
        dispatch.elementMouseover({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pos: [x(getX(d, i)) + x.rangeBand() * (d.series + .5) / data.length, y(getY(d, i))],
          // TODO: Figure out why the value appears to be shifted
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
      }).on('mouseout', function (d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', false);
        dispatch.elementMouseout({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
      }).on('click', function (d, i) {
        dispatch.elementClick({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pos: [x(getX(d, i)) + x.rangeBand() * (d.series + .5) / data.length, y(getY(d, i))],
          // TODO: Figure out why the value appears to be shifted
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      }).on('dblclick', function (d, i) {
        dispatch.elementDblClick({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pos: [x(getX(d, i)) + x.rangeBand() * (d.series + .5) / data.length, y(getY(d, i))],
          // TODO: Figure out why the value appears to be shifted
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      });
      barsEnter.append('rect').attr('height', 0).attr('width', x.rangeBand() * .9 / data.length);
      if (showValues) {
        barsEnter.append('text').attr('text-anchor', 'middle');
        bars.select('text').text(function (d, i) {
          return valueFormat(getY(d, i));
        }).transition().attr('x', x.rangeBand() * .9 / 2).attr('y', function (d, i) {
          return getY(d, i) < 0 ? y(getY(d, i)) - y(0) + 12 : -4;
        });
      } else {
        bars.selectAll('text').remove();
      }
      bars.attr('class', function (d, i) {
        return getY(d, i) < 0 ? 'nv-bar negative' : 'nv-bar positive';
      }).style('fill', function (d, i) {
        return d.color || color(d, i);
      }).style('stroke', function (d, i) {
        return d.color || color(d, i);
      }).select('rect').attr('class', rectClass).transition().attr('width', x.rangeBand() * .9 / data.length);
      bars.transition()
      //.delay(function(d,i) { return i * 1200 / data[0].values.length })
      .attr('transform', function (d, i) {
        var left = x(getX(d, i)) + x.rangeBand() * .05,
          top = getY(d, i) < 0 ? y(0) : y(0) - y(getY(d, i)) < 1 ? y(0) - 1 :
          //make 1 px positive bars show up above y=0
          y(getY(d, i));
        return 'translate(' + left + ', ' + top + ')';
      }).select('rect').attr('height', function (d, i) {
        return Math.max(Math.abs(y(getY(d, i)) - y(yDomain && yDomain[0] || 0)) || 1);
      });

      //store old scales for use in transitions on update
      x0 = x.copy();
      y0 = y.copy();
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = _;
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = _;
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.xScale = function (_) {
    if (!arguments.length) return x;
    x = _;
    return chart;
  };
  chart.yScale = function (_) {
    if (!arguments.length) return y;
    y = _;
    return chart;
  };
  chart.xDomain = function (_) {
    if (!arguments.length) return xDomain;
    xDomain = _;
    return chart;
  };
  chart.yDomain = function (_) {
    if (!arguments.length) return yDomain;
    yDomain = _;
    return chart;
  };
  chart.xRange = function (_) {
    if (!arguments.length) return xRange;
    xRange = _;
    return chart;
  };
  chart.yRange = function (_) {
    if (!arguments.length) return yRange;
    yRange = _;
    return chart;
  };
  chart.forceY = function (_) {
    if (!arguments.length) return forceY;
    forceY = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };
  chart.id = function (_) {
    if (!arguments.length) return id;
    id = _;
    return chart;
  };
  chart.showValues = function (_) {
    if (!arguments.length) return showValues;
    showValues = _;
    return chart;
  };
  chart.valueFormat = function (_) {
    if (!arguments.length) return valueFormat;
    valueFormat = _;
    return chart;
  };
  chart.rectClass = function (_) {
    if (!arguments.length) return rectClass;
    rectClass = _;
    return chart;
  };
  //============================================================

  return chart;
};
nv.models.discreteBarChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var discretebar = nv.models.discreteBar(),
    xAxis = nv.models.axis(),
    yAxis = nv.models.axis();
  var margin = {
      top: 15,
      right: 10,
      bottom: 50,
      left: 60
    },
    width = null,
    height = null,
    color = nv.utils.getColor(),
    showXAxis = true,
    showYAxis = true,
    rightAlignYAxis = false,
    staggerLabels = false,
    tooltips = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + x + '</h3>' + '<p>' + y + '</p>';
    },
    x,
    y,
    noData = "No Data Available.",
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'beforeUpdate'),
    transitionDuration = 250;
  xAxis.orient('bottom').highlightZero(false).showMaxMin(false).tickFormat(function (d) {
    return d;
  });
  yAxis.orient(rightAlignYAxis ? 'right' : 'left').tickFormat(d3v3__WEBPACK_IMPORTED_MODULE_0___default().format(',.1f'));

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var showTooltip = function showTooltip(e, offsetElement) {
    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      x = xAxis.tickFormat()(discretebar.x()(e.point, e.pointIndex)),
      y = yAxis.tickFormat()(discretebar.y()(e.point, e.pointIndex)),
      content = tooltip(e.series.key, x, y, e, chart);
    nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
  };

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        dispatch.beforeUpdate();
        container.transition().duration(transitionDuration).call(chart);
      };
      chart.container = this;

      //------------------------------------------------------------
      // Display No Data message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      x = discretebar.xScale();
      y = discretebar.yScale().clamp(true);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-discreteBarWithAxes').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discreteBarWithAxes').append('g');
      var defsEnter = gEnter.append('defs');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis').append('g').attr('class', 'nv-zeroLine').append('line');
      gEnter.append('g').attr('class', 'nv-barsWrap');
      g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      if (rightAlignYAxis) {
        g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Main Chart Component(s)

      discretebar.width(availableWidth).height(availableHeight);
      var barsWrap = g.select('.nv-barsWrap').datum(data.filter(function (d) {
        return !d.disabled;
      }));
      barsWrap.transition().call(discretebar);

      //------------------------------------------------------------

      defsEnter.append('clipPath').attr('id', 'nv-x-label-clip-' + discretebar.id()).append('rect');
      g.select('#nv-x-label-clip-' + discretebar.id() + ' rect').attr('width', x.rangeBand() * (staggerLabels ? 2 : 1)).attr('height', 16).attr('x', -x.rangeBand() / (staggerLabels ? 1 : 2));

      //------------------------------------------------------------
      // Setup Axes

      if (showXAxis) {
        xAxis.scale(x).ticks(availableWidth / 100).tickSize(-availableHeight, 0);
        g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + (y.range()[0] + (discretebar.showValues() && y.domain()[0] < 0 ? 16 : 0)) + ')');
        //d3v3.transition(g.select('.nv-x.nv-axis'))
        g.select('.nv-x.nv-axis').transition().call(xAxis);
        var xTicks = g.select('.nv-x.nv-axis').selectAll('g');
        if (staggerLabels) {
          xTicks.selectAll('text').attr('transform', function (d, i, j) {
            return 'translate(0,' + (j % 2 == 0 ? '5' : '17') + ')';
          });
        }
      }
      if (showYAxis) {
        yAxis.scale(y).ticks(availableHeight / 36).tickSize(-availableWidth, 0);
        g.select('.nv-y.nv-axis').transition().call(yAxis);
      }

      // Zero line
      g.select(".nv-zeroLine line").attr("x1", 0).attr("x2", availableWidth).attr("y1", y(0)).attr("y2", y(0));

      //------------------------------------------------------------

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });

      //============================================================
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  discretebar.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  discretebar.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.discretebar = discretebar;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, discretebar, 'x', 'y', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'id', 'showValues', 'valueFormat');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    discretebar.color(color);
    return chart;
  };
  chart.showXAxis = function (_) {
    if (!arguments.length) return showXAxis;
    showXAxis = _;
    return chart;
  };
  chart.showYAxis = function (_) {
    if (!arguments.length) return showYAxis;
    showYAxis = _;
    return chart;
  };
  chart.rightAlignYAxis = function (_) {
    if (!arguments.length) return rightAlignYAxis;
    rightAlignYAxis = _;
    yAxis.orient(_ ? 'right' : 'left');
    return chart;
  };
  chart.staggerLabels = function (_) {
    if (!arguments.length) return staggerLabels;
    staggerLabels = _;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };
  chart.transitionDuration = function (_) {
    if (!arguments.length) return transitionDuration;
    transitionDuration = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.distribution = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 400 //technically width or height depending on x or y....
    ,
    size = 8,
    axis = 'x' // 'x' or 'y'... horizontal or vertical
    ,
    getData = function getData(d) {
      return d[axis];
    } // defaults d.x or d.y
    ,
    color = nv.utils.defaultColor(),
    scale = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    domain;

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var scale0;

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableLength = width - (axis === 'x' ? margin.left + margin.right : margin.top + margin.bottom),
        naxis = axis == 'x' ? 'y' : 'x',
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);

      //------------------------------------------------------------
      // Setup Scales

      scale0 = scale0 || scale;

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-distribution').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-distribution');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      var distWrap = g.selectAll('g.nv-dist').data(function (d) {
        return d;
      }, function (d) {
        return d.key;
      });
      distWrap.enter().append('g');
      distWrap.attr('class', function (d, i) {
        return 'nv-dist nv-series-' + i;
      }).style('stroke', function (d, i) {
        return color(d, i);
      });
      var dist = distWrap.selectAll('line.nv-dist' + axis).data(function (d) {
        return d.values;
      });
      dist.enter().append('line').attr(axis + '1', function (d, i) {
        return scale0(getData(d, i));
      }).attr(axis + '2', function (d, i) {
        return scale0(getData(d, i));
      });
      distWrap.exit().selectAll('line.nv-dist' + axis).transition().attr(axis + '1', function (d, i) {
        return scale(getData(d, i));
      }).attr(axis + '2', function (d, i) {
        return scale(getData(d, i));
      }).style('stroke-opacity', 0).remove();
      dist.attr('class', function (d, i) {
        return 'nv-dist' + axis + ' nv-dist' + axis + '-' + i;
      }).attr(naxis + '1', 0).attr(naxis + '2', size);
      dist.transition().attr(axis + '1', function (d, i) {
        return scale(getData(d, i));
      }).attr(axis + '2', function (d, i) {
        return scale(getData(d, i));
      });
      scale0 = scale.copy();
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.axis = function (_) {
    if (!arguments.length) return axis;
    axis = _;
    return chart;
  };
  chart.size = function (_) {
    if (!arguments.length) return size;
    size = _;
    return chart;
  };
  chart.getData = function (_) {
    if (!arguments.length) return getData;
    getData = d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(_);
    return chart;
  };
  chart.scale = function (_) {
    if (!arguments.length) return scale;
    scale = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };
  //============================================================

  return chart;
};
nv.models.historicalBarChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var bars = nv.models.historicalBar(),
    xAxis = nv.models.axis(),
    yAxis = nv.models.axis(),
    legend = nv.models.legend();
  var margin = {
      top: 30,
      right: 90,
      bottom: 50,
      left: 90
    },
    color = nv.utils.defaultColor(),
    width = null,
    height = null,
    showLegend = false,
    showXAxis = true,
    showYAxis = true,
    rightAlignYAxis = false,
    tooltips = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
    },
    x,
    y,
    state = {},
    defaultState = null,
    noData = 'No Data Available.',
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState'),
    transitionDuration = 250;
  xAxis.orient('bottom').tickPadding(7);
  yAxis.orient(rightAlignYAxis ? 'right' : 'left');

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var showTooltip = function showTooltip(e, offsetElement) {
    // New addition to calculate position if SVG is scaled with viewBox, may move TODO: consider implementing everywhere else
    if (offsetElement) {
      var svg = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(offsetElement).select('svg');
      var viewBox = svg.node() ? svg.attr('viewBox') : null;
      if (viewBox) {
        viewBox = viewBox.split(' ');
        var ratio = parseInt(svg.style('width')) / viewBox[2];
        e.pos[0] = e.pos[0] * ratio;
        e.pos[1] = e.pos[1] * ratio;
      }
    }
    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      x = xAxis.tickFormat()(bars.x()(e.point, e.pointIndex)),
      y = yAxis.tickFormat()(bars.y()(e.point, e.pointIndex)),
      content = tooltip(e.series.key, x, y, e, chart);
    nv.tooltip.show([left, top], content, null, null, offsetElement);
  };

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        container.transition().duration(transitionDuration).call(chart);
      };
      chart.container = this;

      //set state.disabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });
      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) defaultState[key] = state[key].slice(0);else defaultState[key] = state[key];
        }
      }

      //------------------------------------------------------------
      // Display noData message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      x = bars.xScale();
      y = bars.yScale();

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-historicalBarChart').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-historicalBarChart').append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis');
      gEnter.append('g').attr('class', 'nv-barsWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        legend.width(availableWidth);
        g.select('.nv-legendWrap').datum(data).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        wrap.select('.nv-legendWrap').attr('transform', 'translate(0,' + -margin.top + ')');
      }

      //------------------------------------------------------------

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      if (rightAlignYAxis) {
        g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
      }

      //------------------------------------------------------------
      // Main Chart Component(s)

      bars.width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled;
      }));
      var barsWrap = g.select('.nv-barsWrap').datum(data.filter(function (d) {
        return !d.disabled;
      }));
      barsWrap.transition().call(bars);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Axes

      if (showXAxis) {
        xAxis.scale(x).tickSize(-availableHeight, 0);
        g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')');
        g.select('.nv-x.nv-axis').transition().call(xAxis);
      }
      if (showYAxis) {
        yAxis.scale(y).ticks(availableHeight / 36).tickSize(-availableWidth, 0);
        g.select('.nv-y.nv-axis').transition().call(yAxis);
      }
      //------------------------------------------------------------

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      legend.dispatch.on('legendClick', function (d, i) {
        d.disabled = !d.disabled;
        if (!data.filter(function (d) {
          return !d.disabled;
        }).length) {
          data.map(function (d) {
            d.disabled = false;
            wrap.selectAll('.nv-series').classed('disabled', false);
            return d;
          });
        }
        state.disabled = data.map(function (d) {
          return !!d.disabled;
        });
        dispatch.stateChange(state);
        selection.transition().call(chart);
      });
      legend.dispatch.on('legendDblclick', function (d) {
        //Double clicking should always enable current series, and disabled all others.
        data.forEach(function (d) {
          d.disabled = true;
        });
        d.disabled = false;
        state.disabled = data.map(function (d) {
          return !!d.disabled;
        });
        dispatch.stateChange(state);
        chart.update();
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });
      dispatch.on('changeState', function (e) {
        if (typeof e.disabled !== 'undefined') {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });
          state.disabled = e.disabled;
        }
        chart.update();
      });

      //============================================================
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  bars.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  bars.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.bars = bars;
  chart.legend = legend;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, bars, 'defined', 'isArea', 'x', 'y', 'size', 'xScale', 'yScale', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'id', 'interpolate', 'highlightPoint', 'clearHighlights', 'interactive');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.showXAxis = function (_) {
    if (!arguments.length) return showXAxis;
    showXAxis = _;
    return chart;
  };
  chart.showYAxis = function (_) {
    if (!arguments.length) return showYAxis;
    showYAxis = _;
    return chart;
  };
  chart.rightAlignYAxis = function (_) {
    if (!arguments.length) return rightAlignYAxis;
    rightAlignYAxis = _;
    yAxis.orient(_ ? 'right' : 'left');
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.state = function (_) {
    if (!arguments.length) return state;
    state = _;
    return chart;
  };
  chart.defaultState = function (_) {
    if (!arguments.length) return defaultState;
    defaultState = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };
  chart.transitionDuration = function (_) {
    if (!arguments.length) return transitionDuration;
    transitionDuration = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.indentedTree = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    } //TODO: implement, maybe as margin on the containing div
    ,
    width = 960,
    height = 500,
    color = nv.utils.defaultColor(),
    id = Math.floor(Math.random() * 10000),
    header = true,
    filterZero = false,
    noData = "No Data Available.",
    childIndent = 20,
    columns = [{
      key: 'key',
      label: 'Name',
      type: 'text'
    }] //TODO: consider functions like chart.addColumn, chart.removeColumn, instead of a block like this
    ,
    tableClass = null,
    iconOpen = 'images/grey-plus.png' //TODO: consider removing this and replacing with a '+' or '-' unless user defines images
    ,
    iconClose = 'images/grey-minus.png',
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('elementClick', 'elementDblclick', 'elementMouseover', 'elementMouseout'),
    getUrl = function getUrl(d) {
      return d.url;
    };

  //============================================================

  var idx = 0;
  function chart(selection) {
    selection.each(function (data) {
      var depth = 1,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);
      var tree = d3v3__WEBPACK_IMPORTED_MODULE_0___default().layout.tree().children(function (d) {
        return d.values;
      }).size([height, childIndent]); //Not sure if this is needed now that the result is HTML

      chart.update = function () {
        container.transition().duration(600).call(chart);
      };

      //------------------------------------------------------------
      // Display No Data message if there's nothing to show.
      if (!data[0]) data[0] = {
        key: noData
      };

      //------------------------------------------------------------

      var nodes = tree.nodes(data[0]);

      // nodes.map(function(d) {
      //   d.id = i++;
      // })

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).selectAll('div').data([[nodes]]);
      var wrapEnter = wrap.enter().append('div').attr('class', 'nvd3 nv-wrap nv-indentedtree');
      var tableEnter = wrapEnter.append('table');
      var table = wrap.select('table').attr('width', '100%').attr('class', tableClass);

      //------------------------------------------------------------

      if (header) {
        var thead = tableEnter.append('thead');
        var theadRow1 = thead.append('tr');
        columns.forEach(function (column) {
          theadRow1.append('th').attr('width', column.width ? column.width : '10%').style('text-align', column.type == 'numeric' ? 'right' : 'left').append('span').text(column.label);
        });
      }
      var tbody = table.selectAll('tbody').data(function (d) {
        return d;
      });
      tbody.enter().append('tbody');

      //compute max generations
      depth = d3v3__WEBPACK_IMPORTED_MODULE_0___default().max(nodes, function (node) {
        return node.depth;
      });
      tree.size([height, depth * childIndent]); //TODO: see if this is necessary at all

      // Update the nodes…
      var node = tbody.selectAll('tr')
      // .data(function(d) { return d; }, function(d) { return d.id || (d.id == ++i)});
      .data(function (d) {
        return d.filter(function (d) {
          return filterZero && !d.children ? filterZero(d) : true;
        });
      }, function (d, i) {
        return d.id || d.id || ++idx;
      });
      //.style('display', 'table-row'); //TODO: see if this does anything

      node.exit().remove();
      node.select('img.nv-treeicon').attr('src', icon).classed('folded', folded);
      var nodeEnter = node.enter().append('tr');
      columns.forEach(function (column, index) {
        var nodeName = nodeEnter.append('td').style('padding-left', function (d) {
          return (index ? 0 : d.depth * childIndent + 12 + (icon(d) ? 0 : 16)) + 'px';
        }, 'important') //TODO: check why I did the ternary here
        .style('text-align', column.type == 'numeric' ? 'right' : 'left');
        if (index == 0) {
          nodeName.append('img').classed('nv-treeicon', true).classed('nv-folded', folded).attr('src', icon).style('width', '14px').style('height', '14px').style('padding', '0 1px').style('display', function (d) {
            return icon(d) ? 'inline-block' : 'none';
          }).on('click', click);
        }
        nodeName.each(function (d) {
          if (!index && getUrl(d)) d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).append('a').attr('href', getUrl).attr('class', d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(column.classes)).append('span');else d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).append('span');
          d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).select('span').attr('class', d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(column.classes)).text(function (d) {
            return column.format ? d[column.key] ? column.format(d[column.key]) : '-' : d[column.key] || '-';
          });
        });
        if (column.showCount) {
          nodeName.append('span').attr('class', 'nv-childrenCount');
          node.selectAll('span.nv-childrenCount').text(function (d) {
            return d.values && d.values.length || d._values && d._values.length ?
            //If this is a parent
            '(' + (d.values && d.values.filter(function (d) {
              return filterZero ? filterZero(d) : true;
            }).length //If children are in values check its children and filter
            || d._values && d._values.filter(function (d) {
              return filterZero ? filterZero(d) : true;
            }).length //Otherwise, do the same, but with the other name, _values...
            || 0) + ')' //This is the catch-all in case there are no children after a filter
            : ''; //If this is not a parent, just give an empty string
          });
        }

        // if (column.click)
        //   nodeName.select('span').on('click', column.click);
      });
      node.order().on('click', function (d) {
        dispatch.elementClick({
          row: this,
          //TODO: decide whether or not this should be consistent with scatter/line events or should be an html link (a href)
          data: d,
          pos: [d.x, d.y]
        });
      }).on('dblclick', function (d) {
        dispatch.elementDblclick({
          row: this,
          data: d,
          pos: [d.x, d.y]
        });
      }).on('mouseover', function (d) {
        dispatch.elementMouseover({
          row: this,
          data: d,
          pos: [d.x, d.y]
        });
      }).on('mouseout', function (d) {
        dispatch.elementMouseout({
          row: this,
          data: d,
          pos: [d.x, d.y]
        });
      });

      // Toggle children on click.
      function click(d, _, unshift) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
        if ((d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.shiftKey) && !unshift) {
          //If you shift-click, it'll toggle fold all the children, instead of itself
          (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.shiftKey) = false;
          d.values && d.values.forEach(function (node) {
            if (node.values || node._values) {
              click(node, 0, true);
            }
          });
          return true;
        }
        if (!hasChildren(d)) {
          //download file
          //window.location.href = d.url;
          return true;
        }
        if (d.values) {
          d._values = d.values;
          d.values = null;
        } else {
          d.values = d._values;
          d._values = null;
        }
        chart.update();
      }
      function icon(d) {
        return d._values && d._values.length ? iconOpen : d.values && d.values.length ? iconClose : '';
      }
      function folded(d) {
        return d._values && d._values.length;
      }
      function hasChildren(d) {
        var values = d.values || d._values;
        return values && values.length;
      }
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    scatter.color(color);
    return chart;
  };
  chart.id = function (_) {
    if (!arguments.length) return id;
    id = _;
    return chart;
  };
  chart.header = function (_) {
    if (!arguments.length) return header;
    header = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };
  chart.filterZero = function (_) {
    if (!arguments.length) return filterZero;
    filterZero = _;
    return chart;
  };
  chart.columns = function (_) {
    if (!arguments.length) return columns;
    columns = _;
    return chart;
  };
  chart.tableClass = function (_) {
    if (!arguments.length) return tableClass;
    tableClass = _;
    return chart;
  };
  chart.iconOpen = function (_) {
    if (!arguments.length) return iconOpen;
    iconOpen = _;
    return chart;
  };
  chart.iconClose = function (_) {
    if (!arguments.length) return iconClose;
    iconClose = _;
    return chart;
  };
  chart.getUrl = function (_) {
    if (!arguments.length) return getUrl;
    getUrl = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.legend = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 5,
      right: 0,
      bottom: 5,
      left: 0
    },
    width = 400,
    height = 20,
    getKey = function getKey(d) {
      return d.key;
    },
    color = nv.utils.defaultColor(),
    align = true,
    rightAlign = true,
    updateState = true //If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
    ,
    radioButtonMode = false //If true, clicking legend items will cause it to behave like a radio button. (only one can be selected at a time)
    ,
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('legendClick', 'legendDblclick', 'legendMouseover', 'legendMouseout', 'stateChange');

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableWidth = width - margin.left - margin.right,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-legend').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-legend').append('g');
      var g = wrap.select('g');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      var series = g.selectAll('.nv-series').data(function (d) {
        return d;
      });
      var seriesEnter = series.enter().append('g').attr('class', 'nv-series').on('mouseover', function (d, i) {
        dispatch.legendMouseover(d, i); //TODO: Make consistent with other event objects
      }).on('mouseout', function (d, i) {
        dispatch.legendMouseout(d, i);
      }).on('click', function (d, i) {
        dispatch.legendClick(d, i);
        if (updateState) {
          if (radioButtonMode) {
            //Radio button mode: set every series to disabled,
            //  and enable the clicked series.
            data.forEach(function (series) {
              series.disabled = true;
            });
            d.disabled = false;
          } else {
            d.disabled = !d.disabled;
            if (data.every(function (series) {
              return series.disabled;
            })) {
              //the default behavior of NVD3 legends is, if every single series
              // is disabled, turn all series' back on.
              data.forEach(function (series) {
                series.disabled = false;
              });
            }
          }
          dispatch.stateChange({
            disabled: data.map(function (d) {
              return !!d.disabled;
            })
          });
        }
      }).on('dblclick', function (d, i) {
        dispatch.legendDblclick(d, i);
        if (updateState) {
          //the default behavior of NVD3 legends, when double clicking one,
          // is to set all other series' to false, and make the double clicked series enabled.
          data.forEach(function (series) {
            series.disabled = true;
          });
          d.disabled = false;
          dispatch.stateChange({
            disabled: data.map(function (d) {
              return !!d.disabled;
            })
          });
        }
      });
      seriesEnter.append('circle').style('stroke-width', 2).attr('class', 'nv-legend-symbol').attr('r', 5);
      seriesEnter.append('text').attr('text-anchor', 'start').attr('class', 'nv-legend-text').attr('dy', '.32em').attr('dx', '8');
      series.classed('disabled', function (d) {
        return d.disabled;
      });
      series.exit().remove();
      series.select('circle').style('fill', function (d, i) {
        return d.color || color(d, i);
      }).style('stroke', function (d, i) {
        return d.color || color(d, i);
      });
      series.select('text').text(getKey);

      //TODO: implement fixed-width and max-width options (max-width is especially useful with the align option)

      // NEW ALIGNING CODE, TODO: clean up
      if (align) {
        var seriesWidths = [];
        series.each(function (d, i) {
          var legendText = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).select('text');
          var nodeTextLength;
          try {
            nodeTextLength = legendText.getComputedTextLength();
            // If the legendText is display:none'd (nodeTextLength == 0), simulate an error so we approximate, instead
            if (nodeTextLength <= 0) throw Error();
          } catch (e) {
            nodeTextLength = nv.utils.calcApproxTextWidth(legendText);
          }
          seriesWidths.push(nodeTextLength + 28); // 28 is ~ the width of the circle plus some padding
        });
        var seriesPerRow = 0;
        var legendWidth = 0;
        var columnWidths = [];
        while (legendWidth < availableWidth && seriesPerRow < seriesWidths.length) {
          columnWidths[seriesPerRow] = seriesWidths[seriesPerRow];
          legendWidth += seriesWidths[seriesPerRow++];
        }
        if (seriesPerRow === 0) seriesPerRow = 1; //minimum of one series per row

        while (legendWidth > availableWidth && seriesPerRow > 1) {
          columnWidths = [];
          seriesPerRow--;
          for (var k = 0; k < seriesWidths.length; k++) {
            if (seriesWidths[k] > (columnWidths[k % seriesPerRow] || 0)) columnWidths[k % seriesPerRow] = seriesWidths[k];
          }
          legendWidth = columnWidths.reduce(function (prev, cur, index, array) {
            return prev + cur;
          });
        }
        var xPositions = [];
        for (var i = 0, curX = 0; i < seriesPerRow; i++) {
          xPositions[i] = curX;
          curX += columnWidths[i];
        }
        series.attr('transform', function (d, i) {
          return 'translate(' + xPositions[i % seriesPerRow] + ',' + (5 + Math.floor(i / seriesPerRow) * 20) + ')';
        });

        //position legend as far right as possible within the total width
        if (rightAlign) {
          g.attr('transform', 'translate(' + (width - margin.right - legendWidth) + ',' + margin.top + ')');
        } else {
          g.attr('transform', 'translate(0' + ',' + margin.top + ')');
        }
        height = margin.top + margin.bottom + Math.ceil(seriesWidths.length / seriesPerRow) * 20;
      } else {
        var ypos = 5,
          newxpos = 5,
          maxwidth = 0,
          xpos;
        series.attr('transform', function (d, i) {
          var length = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).select('text').node().getComputedTextLength() + 28;
          xpos = newxpos;
          if (width < margin.left + margin.right + xpos + length) {
            newxpos = xpos = 5;
            ypos += 20;
          }
          newxpos += length;
          if (newxpos > maxwidth) maxwidth = newxpos;
          return 'translate(' + xpos + ',' + ypos + ')';
        });

        //position legend as far right as possible within the total width
        g.attr('transform', 'translate(' + (width - margin.right - maxwidth) + ',' + margin.top + ')');
        height = margin.top + margin.bottom + ypos + 15;
      }
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.key = function (_) {
    if (!arguments.length) return getKey;
    getKey = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };
  chart.align = function (_) {
    if (!arguments.length) return align;
    align = _;
    return chart;
  };
  chart.rightAlign = function (_) {
    if (!arguments.length) return rightAlign;
    rightAlign = _;
    return chart;
  };
  chart.updateState = function (_) {
    if (!arguments.length) return updateState;
    updateState = _;
    return chart;
  };
  chart.radioButtonMode = function (_) {
    if (!arguments.length) return radioButtonMode;
    radioButtonMode = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.line = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var scatter = nv.models.scatter();
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 960,
    height = 500,
    color = nv.utils.defaultColor() // a function that returns a color
    ,
    getX = function getX(d) {
      return d.x;
    } // accessor to get the x value from a data point
    ,
    getY = function getY(d) {
      return d.y;
    } // accessor to get the y value from a data point
    ,
    defined = function defined(d, i) {
      return !isNaN(getY(d, i)) && getY(d, i) !== null;
    } // allows a line to be not continuous when it is not defined
    ,
    isArea = function isArea(d) {
      return d.area;
    } // decides if a line is an area or just a line
    ,
    clipEdge = false // if true, masks lines within x and y scale
    ,
    x //can be accessed via chart.xScale()
    ,
    y //can be accessed via chart.yScale()
    ,
    interpolate = "linear" // controls the line interpolation
  ;
  scatter.size(16) // default size
  .sizeDomain([16, 256]) //set to speed up calculation, needs to be unset if there is a custom size accessor
  ;

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var x0, y0 //used to store previous scales
  ;

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableWidth = width - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);

      //------------------------------------------------------------
      // Setup Scales

      x = scatter.xScale();
      y = scatter.yScale();
      x0 = x0 || x;
      y0 = y0 || y;

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-line').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-line');
      var defsEnter = wrapEnter.append('defs');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-groups');
      gEnter.append('g').attr('class', 'nv-scatterWrap');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      scatter.width(availableWidth).height(availableHeight);
      var scatterWrap = wrap.select('.nv-scatterWrap');
      //.datum(data); // Data automatically trickles down from the wrap

      scatterWrap.transition().call(scatter);
      defsEnter.append('clipPath').attr('id', 'nv-edge-clip-' + scatter.id()).append('rect');
      wrap.select('#nv-edge-clip-' + scatter.id() + ' rect').attr('width', availableWidth).attr('height', availableHeight > 0 ? availableHeight : 0);
      g.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + scatter.id() + ')' : '');
      scatterWrap.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + scatter.id() + ')' : '');
      var groups = wrap.select('.nv-groups').selectAll('.nv-group').data(function (d) {
        return d;
      }, function (d) {
        return d.key;
      });
      groups.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
      groups.exit().remove();
      groups.attr('class', function (d, i) {
        return 'nv-group nv-series-' + i;
      }).classed('hover', function (d) {
        return d.hover;
      }).style('fill', function (d, i) {
        return color(d, i);
      }).style('stroke', function (d, i) {
        return color(d, i);
      });
      groups.transition().style('stroke-opacity', 1).style('fill-opacity', .5);
      var areaPaths = groups.selectAll('path.nv-area').data(function (d) {
        return isArea(d) ? [d] : [];
      }); // this is done differently than lines because I need to check if series is an area
      areaPaths.enter().append('path').attr('class', 'nv-area').attr('d', function (d) {
        return d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.area().interpolate(interpolate).defined(defined).x(function (d, i) {
          return nv.utils.NaNtoZero(x0(getX(d, i)));
        }).y0(function (d, i) {
          return nv.utils.NaNtoZero(y0(getY(d, i)));
        }).y1(function (d, i) {
          return y0(y.domain()[0] <= 0 ? y.domain()[1] >= 0 ? 0 : y.domain()[1] : y.domain()[0]);
        })
        //.y1(function(d,i) { return y0(0) }) //assuming 0 is within y domain.. may need to tweak this
        .apply(this, [d.values]);
      });
      groups.exit().selectAll('path.nv-area').remove();
      areaPaths.transition().attr('d', function (d) {
        return d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.area().interpolate(interpolate).defined(defined).x(function (d, i) {
          return nv.utils.NaNtoZero(x(getX(d, i)));
        }).y0(function (d, i) {
          return nv.utils.NaNtoZero(y(getY(d, i)));
        }).y1(function (d, i) {
          return y(y.domain()[0] <= 0 ? y.domain()[1] >= 0 ? 0 : y.domain()[1] : y.domain()[0]);
        })
        //.y1(function(d,i) { return y0(0) }) //assuming 0 is within y domain.. may need to tweak this
        .apply(this, [d.values]);
      });
      var linePaths = groups.selectAll('path.nv-line').data(function (d) {
        return [d.values];
      });
      linePaths.enter().append('path').attr('class', 'nv-line').attr('d', d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.line().interpolate(interpolate).defined(defined).x(function (d, i) {
        return nv.utils.NaNtoZero(x0(getX(d, i)));
      }).y(function (d, i) {
        return nv.utils.NaNtoZero(y0(getY(d, i)));
      }));
      linePaths.transition().attr('d', d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.line().interpolate(interpolate).defined(defined).x(function (d, i) {
        return nv.utils.NaNtoZero(x(getX(d, i)));
      }).y(function (d, i) {
        return nv.utils.NaNtoZero(y(getY(d, i)));
      }));

      //store old scales for use in transitions on update
      x0 = x.copy();
      y0 = y.copy();
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = scatter.dispatch;
  chart.scatter = scatter;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, scatter, 'id', 'interactive', 'size', 'xScale', 'yScale', 'zScale', 'xDomain', 'yDomain', 'xRange', 'yRange', 'sizeDomain', 'forceX', 'forceY', 'forceSize', 'clipVoronoi', 'useVoronoi', 'clipRadius', 'padData', 'highlightPoint', 'clearHighlights');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = _;
    scatter.x(_);
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = _;
    scatter.y(_);
    return chart;
  };
  chart.clipEdge = function (_) {
    if (!arguments.length) return clipEdge;
    clipEdge = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    scatter.color(color);
    return chart;
  };
  chart.interpolate = function (_) {
    if (!arguments.length) return interpolate;
    interpolate = _;
    return chart;
  };
  chart.defined = function (_) {
    if (!arguments.length) return defined;
    defined = _;
    return chart;
  };
  chart.isArea = function (_) {
    if (!arguments.length) return isArea;
    isArea = d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(_);
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.lineChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var lines = nv.models.line(),
    xAxis = nv.models.axis(),
    yAxis = nv.models.axis(),
    legend = nv.models.legend(),
    interactiveLayer = nv.interactiveGuideline();
  var margin = {
      top: 30,
      right: 20,
      bottom: 50,
      left: 60
    },
    color = nv.utils.defaultColor(),
    width = null,
    height = null,
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    rightAlignYAxis = false,
    useInteractiveGuideline = false,
    tooltips = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
    },
    x,
    y,
    state = {},
    defaultState = null,
    noData = 'No Data Available.',
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState'),
    transitionDuration = 250;
  xAxis.orient('bottom').tickPadding(7);
  yAxis.orient(rightAlignYAxis ? 'right' : 'left');

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var showTooltip = function showTooltip(e, offsetElement) {
    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
      y = yAxis.tickFormat()(lines.y()(e.point, e.pointIndex)),
      content = tooltip(e.series.key, x, y, e, chart);
    nv.tooltip.show([left, top], content, null, null, offsetElement);
  };

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        container.transition().duration(transitionDuration).call(chart);
      };
      chart.container = this;

      //set state.disabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });
      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) defaultState[key] = state[key].slice(0);else defaultState[key] = state[key];
        }
      }

      //------------------------------------------------------------
      // Display noData message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      x = lines.xScale();
      y = lines.yScale();

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-lineChart').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-lineChart').append('g');
      var g = wrap.select('g');
      gEnter.append("rect").style("opacity", 0);
      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis');
      gEnter.append('g').attr('class', 'nv-linesWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');
      gEnter.append('g').attr('class', 'nv-interactive');
      g.select("rect").attr("width", availableWidth).attr("height", availableHeight > 0 ? availableHeight : 0);
      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        legend.width(availableWidth);
        g.select('.nv-legendWrap').datum(data).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        wrap.select('.nv-legendWrap').attr('transform', 'translate(0,' + -margin.top + ')');
      }

      //------------------------------------------------------------

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      if (rightAlignYAxis) {
        g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
      }

      //------------------------------------------------------------
      // Main Chart Component(s)

      //------------------------------------------------------------
      //Set up interactive layer
      if (useInteractiveGuideline) {
        interactiveLayer.width(availableWidth).height(availableHeight).margin({
          left: margin.left,
          top: margin.top
        }).svgContainer(container).xScale(x);
        wrap.select(".nv-interactive").call(interactiveLayer);
      }
      lines.width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled;
      }));
      var linesWrap = g.select('.nv-linesWrap').datum(data.filter(function (d) {
        return !d.disabled;
      }));
      linesWrap.transition().call(lines);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Axes

      if (showXAxis) {
        xAxis.scale(x).ticks(availableWidth / 100).tickSize(-availableHeight, 0);
        g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')');
        g.select('.nv-x.nv-axis').transition().call(xAxis);
      }
      if (showYAxis) {
        yAxis.scale(y).ticks(availableHeight / 36).tickSize(-availableWidth, 0);
        g.select('.nv-y.nv-axis').transition().call(yAxis);
      }
      //------------------------------------------------------------

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      legend.dispatch.on('stateChange', function (newState) {
        state = newState;
        dispatch.stateChange(state);
        chart.update();
      });
      interactiveLayer.dispatch.on('elementMousemove', function (e) {
        lines.clearHighlights();
        var singlePoint,
          pointIndex,
          pointXLocation,
          allData = [];
        data.filter(function (series, i) {
          series.seriesIndex = i;
          return !series.disabled;
        }).forEach(function (series, i) {
          pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
          lines.highlightPoint(i, pointIndex, true);
          var point = series.values[pointIndex];
          if (typeof point === 'undefined') return;
          if (typeof singlePoint === 'undefined') singlePoint = point;
          if (typeof pointXLocation === 'undefined') pointXLocation = chart.xScale()(chart.x()(point, pointIndex));
          allData.push({
            key: series.key,
            value: chart.y()(point, pointIndex),
            color: color(series, series.seriesIndex)
          });
        });
        //Highlight the tooltip entry based on which point the mouse is closest to.
        if (allData.length > 2) {
          var yValue = chart.yScale().invert(e.mouseY);
          var domainExtent = Math.abs(chart.yScale().domain()[0] - chart.yScale().domain()[1]);
          var threshold = 0.03 * domainExtent;
          var indexToHighlight = nv.nearestValueIndex(allData.map(function (d) {
            return d.value;
          }), yValue, threshold);
          if (indexToHighlight !== null) allData[indexToHighlight].highlight = true;
        }
        var xValue = xAxis.tickFormat()(chart.x()(singlePoint, pointIndex));
        interactiveLayer.tooltip.position({
          left: pointXLocation + margin.left,
          top: e.mouseY + margin.top
        }).chartContainer(that.parentNode).enabled(tooltips).valueFormatter(function (d, i) {
          return yAxis.tickFormat()(d);
        }).data({
          value: xValue,
          series: allData
        })();
        interactiveLayer.renderGuideLine(pointXLocation);
      });
      interactiveLayer.dispatch.on("elementMouseout", function (e) {
        dispatch.tooltipHide();
        lines.clearHighlights();
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });
      dispatch.on('changeState', function (e) {
        if (typeof e.disabled !== 'undefined' && data.length === e.disabled.length) {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });
          state.disabled = e.disabled;
        }
        chart.update();
      });

      //============================================================
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  lines.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  lines.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.lines = lines;
  chart.legend = legend;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  chart.interactiveLayer = interactiveLayer;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, lines, 'defined', 'isArea', 'x', 'y', 'size', 'xScale', 'yScale', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'useVoronoi', 'id', 'interpolate');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.showXAxis = function (_) {
    if (!arguments.length) return showXAxis;
    showXAxis = _;
    return chart;
  };
  chart.showYAxis = function (_) {
    if (!arguments.length) return showYAxis;
    showYAxis = _;
    return chart;
  };
  chart.rightAlignYAxis = function (_) {
    if (!arguments.length) return rightAlignYAxis;
    rightAlignYAxis = _;
    yAxis.orient(_ ? 'right' : 'left');
    return chart;
  };
  chart.useInteractiveGuideline = function (_) {
    if (!arguments.length) return useInteractiveGuideline;
    useInteractiveGuideline = _;
    if (_ === true) {
      chart.interactive(false);
      chart.useVoronoi(false);
    }
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.state = function (_) {
    if (!arguments.length) return state;
    state = _;
    return chart;
  };
  chart.defaultState = function (_) {
    if (!arguments.length) return defaultState;
    defaultState = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };
  chart.transitionDuration = function (_) {
    if (!arguments.length) return transitionDuration;
    transitionDuration = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.linePlusBarChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var lines = nv.models.line(),
    bars = nv.models.historicalBar(),
    xAxis = nv.models.axis(),
    y1Axis = nv.models.axis(),
    y2Axis = nv.models.axis(),
    legend = nv.models.legend();
  var margin = {
      top: 30,
      right: 60,
      bottom: 50,
      left: 60
    },
    width = null,
    height = null,
    getX = function getX(d) {
      return d.x;
    },
    getY = function getY(d) {
      return d.y;
    },
    color = nv.utils.defaultColor(),
    showLegend = true,
    tooltips = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
    },
    x,
    y1,
    y2,
    state = {},
    defaultState = null,
    noData = "No Data Available.",
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState');
  bars.padData(true);
  lines.clipEdge(false).padData(true);
  xAxis.orient('bottom').tickPadding(7).highlightZero(false);
  y1Axis.orient('left');
  y2Axis.orient('right');

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var showTooltip = function showTooltip(e, offsetElement) {
    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
      y = (e.series.bar ? y1Axis : y2Axis).tickFormat()(lines.y()(e.point, e.pointIndex)),
      content = tooltip(e.series.key, x, y, e, chart);
    nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
  };

  //------------------------------------------------------------

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        container.transition().call(chart);
      };
      // chart.container = this;

      //set state.disabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });
      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) defaultState[key] = state[key].slice(0);else defaultState[key] = state[key];
        }
      }

      //------------------------------------------------------------
      // Display No Data message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      var dataBars = data.filter(function (d) {
        return !d.disabled && d.bar;
      });
      var dataLines = data.filter(function (d) {
        return !d.bar;
      }); // removed the !d.disabled clause here to fix Issue #240

      //x = xAxis.scale();
      x = dataLines.filter(function (d) {
        return !d.disabled;
      }).length && dataLines.filter(function (d) {
        return !d.disabled;
      })[0].values.length ? lines.xScale() : bars.xScale();
      //x = dataLines.filter(function(d) { return !d.disabled; }).length ? lines.xScale() : bars.xScale(); //old code before change above
      y1 = bars.yScale();
      y2 = lines.yScale();

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).selectAll('g.nv-wrap.nv-linePlusBar').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-linePlusBar').append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y1 nv-axis');
      gEnter.append('g').attr('class', 'nv-y2 nv-axis');
      gEnter.append('g').attr('class', 'nv-barsWrap');
      gEnter.append('g').attr('class', 'nv-linesWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        legend.width(availableWidth / 2);
        g.select('.nv-legendWrap').datum(data.map(function (series) {
          series.originalKey = series.originalKey === undefined ? series.key : series.originalKey;
          series.key = series.originalKey + (series.bar ? ' (left axis)' : ' (right axis)');
          return series;
        })).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        g.select('.nv-legendWrap').attr('transform', 'translate(' + availableWidth / 2 + ',' + -margin.top + ')');
      }

      //------------------------------------------------------------

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------
      // Main Chart Component(s)

      lines.width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled && !data[i].bar;
      }));
      bars.width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled && data[i].bar;
      }));
      var barsWrap = g.select('.nv-barsWrap').datum(dataBars.length ? dataBars : [{
        values: []
      }]);
      var linesWrap = g.select('.nv-linesWrap').datum(dataLines[0] && !dataLines[0].disabled ? dataLines : [{
        values: []
      }]);
      //.datum(!dataLines[0].disabled ? dataLines : [{values:dataLines[0].values.map(function(d) { return [d[0], null] }) }] );

      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(barsWrap).call(bars);
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(linesWrap).call(lines);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Axes

      xAxis.scale(x).ticks(availableWidth / 100).tickSize(-availableHeight, 0);
      g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y1.range()[0] + ')');
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(g.select('.nv-x.nv-axis')).call(xAxis);
      y1Axis.scale(y1).ticks(availableHeight / 36).tickSize(-availableWidth, 0);
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(g.select('.nv-y1.nv-axis')).style('opacity', dataBars.length ? 1 : 0).call(y1Axis);
      y2Axis.scale(y2).ticks(availableHeight / 36).tickSize(dataBars.length ? 0 : -availableWidth, 0); // Show the y2 rules only if y1 has none

      g.select('.nv-y2.nv-axis').style('opacity', dataLines.length ? 1 : 0).attr('transform', 'translate(' + availableWidth + ',0)');
      //.attr('transform', 'translate(' + x.range()[1] + ',0)');

      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(g.select('.nv-y2.nv-axis')).call(y2Axis);

      //------------------------------------------------------------

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      legend.dispatch.on('stateChange', function (newState) {
        state = newState;
        dispatch.stateChange(state);
        chart.update();
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });

      // Update chart from a state object passed to event handler
      dispatch.on('changeState', function (e) {
        if (typeof e.disabled !== 'undefined') {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });
          state.disabled = e.disabled;
        }
        chart.update();
      });

      //============================================================
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  lines.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  lines.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  bars.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  bars.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.legend = legend;
  chart.lines = lines;
  chart.bars = bars;
  chart.xAxis = xAxis;
  chart.y1Axis = y1Axis;
  chart.y2Axis = y2Axis;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, lines, 'defined', 'size', 'clipVoronoi', 'interpolate');
  //TODO: consider rebinding x, y and some other stuff, and simply do soemthign lile bars.x(lines.x()), etc.
  //d3v3.rebind(chart, lines, 'x', 'y', 'size', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'id');

  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = _;
    lines.x(_);
    bars.x(_);
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = _;
    lines.y(_);
    bars.y(_);
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.state = function (_) {
    if (!arguments.length) return state;
    state = _;
    return chart;
  };
  chart.defaultState = function (_) {
    if (!arguments.length) return defaultState;
    defaultState = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.lineWithFocusChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var lines = nv.models.line(),
    lines2 = nv.models.line(),
    xAxis = nv.models.axis(),
    yAxis = nv.models.axis(),
    x2Axis = nv.models.axis(),
    y2Axis = nv.models.axis(),
    legend = nv.models.legend(),
    brush = d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.brush();
  var margin = {
      top: 30,
      right: 30,
      bottom: 30,
      left: 60
    },
    margin2 = {
      top: 0,
      right: 30,
      bottom: 20,
      left: 60
    },
    color = nv.utils.defaultColor(),
    width = null,
    height = null,
    height2 = 100,
    x,
    y,
    x2,
    y2,
    showLegend = true,
    brushExtent = null,
    tooltips = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
    },
    noData = "No Data Available.",
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'brush'),
    transitionDuration = 250;
  lines.clipEdge(true);
  lines2.interactive(false);
  xAxis.orient('bottom').tickPadding(5);
  yAxis.orient('left');
  x2Axis.orient('bottom').tickPadding(5);
  y2Axis.orient('left');
  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var showTooltip = function showTooltip(e, offsetElement) {
    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
      y = yAxis.tickFormat()(lines.y()(e.point, e.pointIndex)),
      content = tooltip(e.series.key, x, y, e, chart);
    nv.tooltip.show([left, top], content, null, null, offsetElement);
  };

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight1 = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom - height2,
        availableHeight2 = height2 - margin2.top - margin2.bottom;
      chart.update = function () {
        container.transition().duration(transitionDuration).call(chart);
      };
      chart.container = this;

      //------------------------------------------------------------
      // Display No Data message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight1 / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      x = lines.xScale();
      y = lines.yScale();
      x2 = lines2.xScale();
      y2 = lines2.yScale();

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-lineWithFocusChart').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-lineWithFocusChart').append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-legendWrap');
      var focusEnter = gEnter.append('g').attr('class', 'nv-focus');
      focusEnter.append('g').attr('class', 'nv-x nv-axis');
      focusEnter.append('g').attr('class', 'nv-y nv-axis');
      focusEnter.append('g').attr('class', 'nv-linesWrap');
      var contextEnter = gEnter.append('g').attr('class', 'nv-context');
      contextEnter.append('g').attr('class', 'nv-x nv-axis');
      contextEnter.append('g').attr('class', 'nv-y nv-axis');
      contextEnter.append('g').attr('class', 'nv-linesWrap');
      contextEnter.append('g').attr('class', 'nv-brushBackground');
      contextEnter.append('g').attr('class', 'nv-x nv-brush');

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        legend.width(availableWidth);
        g.select('.nv-legendWrap').datum(data).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight1 = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom - height2;
        }
        g.select('.nv-legendWrap').attr('transform', 'translate(0,' + -margin.top + ')');
      }

      //------------------------------------------------------------

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------
      // Main Chart Component(s)

      lines.width(availableWidth).height(availableHeight1).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled;
      }));
      lines2.defined(lines.defined()).width(availableWidth).height(availableHeight2).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled;
      }));
      g.select('.nv-context').attr('transform', 'translate(0,' + (availableHeight1 + margin.bottom + margin2.top) + ')');
      var contextLinesWrap = g.select('.nv-context .nv-linesWrap').datum(data.filter(function (d) {
        return !d.disabled;
      }));
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(contextLinesWrap).call(lines2);

      //------------------------------------------------------------

      /*
      var focusLinesWrap = g.select('.nv-focus .nv-linesWrap')
          .datum(data.filter(function(d) { return !d.disabled }))
       d3v3.transition(focusLinesWrap).call(lines);
      */

      //------------------------------------------------------------
      // Setup Main (Focus) Axes

      xAxis.scale(x).ticks(availableWidth / 100).tickSize(-availableHeight1, 0);
      yAxis.scale(y).ticks(availableHeight1 / 36).tickSize(-availableWidth, 0);
      g.select('.nv-focus .nv-x.nv-axis').attr('transform', 'translate(0,' + availableHeight1 + ')');

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Brush

      brush.x(x2).on('brush', function () {
        //When brushing, turn off transitions because chart needs to change immediately.
        var oldTransition = chart.transitionDuration();
        chart.transitionDuration(0);
        onBrush();
        chart.transitionDuration(oldTransition);
      });
      if (brushExtent) brush.extent(brushExtent);
      var brushBG = g.select('.nv-brushBackground').selectAll('g').data([brushExtent || brush.extent()]);
      var brushBGenter = brushBG.enter().append('g');
      brushBGenter.append('rect').attr('class', 'left').attr('x', 0).attr('y', 0).attr('height', availableHeight2);
      brushBGenter.append('rect').attr('class', 'right').attr('x', 0).attr('y', 0).attr('height', availableHeight2);
      var gBrush = g.select('.nv-x.nv-brush').call(brush);
      gBrush.selectAll('rect')
      //.attr('y', -5)
      .attr('height', availableHeight2);
      gBrush.selectAll('.resize').append('path').attr('d', resizePath);
      onBrush();

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Secondary (Context) Axes

      x2Axis.scale(x2).ticks(availableWidth / 100).tickSize(-availableHeight2, 0);
      g.select('.nv-context .nv-x.nv-axis').attr('transform', 'translate(0,' + y2.range()[0] + ')');
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(g.select('.nv-context .nv-x.nv-axis')).call(x2Axis);
      y2Axis.scale(y2).ticks(availableHeight2 / 36).tickSize(-availableWidth, 0);
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(g.select('.nv-context .nv-y.nv-axis')).call(y2Axis);
      g.select('.nv-context .nv-x.nv-axis').attr('transform', 'translate(0,' + y2.range()[0] + ')');

      //------------------------------------------------------------

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      legend.dispatch.on('stateChange', function (newState) {
        chart.update();
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });

      //============================================================

      //============================================================
      // Functions
      //------------------------------------------------------------

      // Taken from crossfilter (http://square.github.com/crossfilter/)
      function resizePath(d) {
        var e = +(d == 'e'),
          x = e ? 1 : -1,
          y = availableHeight2 / 3;
        return 'M' + .5 * x + ',' + y + 'A6,6 0 0 ' + e + ' ' + 6.5 * x + ',' + (y + 6) + 'V' + (2 * y - 6) + 'A6,6 0 0 ' + e + ' ' + .5 * x + ',' + 2 * y + 'Z' + 'M' + 2.5 * x + ',' + (y + 8) + 'V' + (2 * y - 8) + 'M' + 4.5 * x + ',' + (y + 8) + 'V' + (2 * y - 8);
      }
      function updateBrushBG() {
        if (!brush.empty()) brush.extent(brushExtent);
        brushBG.data([brush.empty() ? x2.domain() : brushExtent]).each(function (d, i) {
          var leftWidth = x2(d[0]) - x.range()[0],
            rightWidth = x.range()[1] - x2(d[1]);
          d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).select('.left').attr('width', leftWidth < 0 ? 0 : leftWidth);
          d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).select('.right').attr('x', x2(d[1])).attr('width', rightWidth < 0 ? 0 : rightWidth);
        });
      }
      function onBrush() {
        brushExtent = brush.empty() ? null : brush.extent();
        var extent = brush.empty() ? x2.domain() : brush.extent();

        //The brush extent cannot be less than one.  If it is, don't update the line chart.
        if (Math.abs(extent[0] - extent[1]) <= 1) {
          return;
        }
        dispatch.brush({
          extent: extent,
          brush: brush
        });
        updateBrushBG();

        // Update Main (Focus)
        var focusLinesWrap = g.select('.nv-focus .nv-linesWrap').datum(data.filter(function (d) {
          return !d.disabled;
        }).map(function (d, i) {
          return {
            key: d.key,
            values: d.values.filter(function (d, i) {
              return lines.x()(d, i) >= extent[0] && lines.x()(d, i) <= extent[1];
            })
          };
        }));
        focusLinesWrap.transition().duration(transitionDuration).call(lines);

        // Update Main (Focus) Axes
        g.select('.nv-focus .nv-x.nv-axis').transition().duration(transitionDuration).call(xAxis);
        g.select('.nv-focus .nv-y.nv-axis').transition().duration(transitionDuration).call(yAxis);
      }

      //============================================================
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  lines.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  lines.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.legend = legend;
  chart.lines = lines;
  chart.lines2 = lines2;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  chart.x2Axis = x2Axis;
  chart.y2Axis = y2Axis;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, lines, 'defined', 'isArea', 'size', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'id');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.x = function (_) {
    if (!arguments.length) return lines.x;
    lines.x(_);
    lines2.x(_);
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return lines.y;
    lines.y(_);
    lines2.y(_);
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.margin2 = function (_) {
    if (!arguments.length) return margin2;
    margin2 = _;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.height2 = function (_) {
    if (!arguments.length) return height2;
    height2 = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.interpolate = function (_) {
    if (!arguments.length) return lines.interpolate();
    lines.interpolate(_);
    lines2.interpolate(_);
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };

  // Chart has multiple similar Axes, to prevent code duplication, probably need to link all axis functions manually like below
  chart.xTickFormat = function (_) {
    if (!arguments.length) return xAxis.tickFormat();
    xAxis.tickFormat(_);
    x2Axis.tickFormat(_);
    return chart;
  };
  chart.yTickFormat = function (_) {
    if (!arguments.length) return yAxis.tickFormat();
    yAxis.tickFormat(_);
    y2Axis.tickFormat(_);
    return chart;
  };
  chart.brushExtent = function (_) {
    if (!arguments.length) return brushExtent;
    brushExtent = _;
    return chart;
  };
  chart.transitionDuration = function (_) {
    if (!arguments.length) return transitionDuration;
    transitionDuration = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.linePlusBarWithFocusChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var lines = nv.models.line(),
    lines2 = nv.models.line(),
    bars = nv.models.historicalBar(),
    bars2 = nv.models.historicalBar(),
    xAxis = nv.models.axis(),
    x2Axis = nv.models.axis(),
    y1Axis = nv.models.axis(),
    y2Axis = nv.models.axis(),
    y3Axis = nv.models.axis(),
    y4Axis = nv.models.axis(),
    legend = nv.models.legend(),
    brush = d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.brush();
  var margin = {
      top: 30,
      right: 30,
      bottom: 30,
      left: 60
    },
    margin2 = {
      top: 0,
      right: 30,
      bottom: 20,
      left: 60
    },
    width = null,
    height = null,
    height2 = 100,
    getX = function getX(d) {
      return d.x;
    },
    getY = function getY(d) {
      return d.y;
    },
    color = nv.utils.defaultColor(),
    showLegend = true,
    extent,
    brushExtent = null,
    tooltips = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
    },
    x,
    x2,
    y1,
    y2,
    y3,
    y4,
    noData = "No Data Available.",
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'brush'),
    transitionDuration = 0;
  lines.clipEdge(true);
  lines2.interactive(false);
  xAxis.orient('bottom').tickPadding(5);
  y1Axis.orient('left');
  y2Axis.orient('right');
  x2Axis.orient('bottom').tickPadding(5);
  y3Axis.orient('left');
  y4Axis.orient('right');

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var showTooltip = function showTooltip(e, offsetElement) {
    if (extent) {
      e.pointIndex += Math.ceil(extent[0]);
    }
    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
      y = (e.series.bar ? y1Axis : y2Axis).tickFormat()(lines.y()(e.point, e.pointIndex)),
      content = tooltip(e.series.key, x, y, e, chart);
    nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
  };

  //------------------------------------------------------------

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight1 = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom - height2,
        availableHeight2 = height2 - margin2.top - margin2.bottom;
      chart.update = function () {
        container.transition().duration(transitionDuration).call(chart);
      };
      chart.container = this;

      //------------------------------------------------------------
      // Display No Data message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight1 / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      var dataBars = data.filter(function (d) {
        return !d.disabled && d.bar;
      });
      var dataLines = data.filter(function (d) {
        return !d.bar;
      }); // removed the !d.disabled clause here to fix Issue #240

      x = bars.xScale();
      x2 = x2Axis.scale();
      y1 = bars.yScale();
      y2 = lines.yScale();
      y3 = bars2.yScale();
      y4 = lines2.yScale();
      var series1 = data.filter(function (d) {
        return !d.disabled && d.bar;
      }).map(function (d) {
        return d.values.map(function (d, i) {
          return {
            x: getX(d, i),
            y: getY(d, i)
          };
        });
      });
      var series2 = data.filter(function (d) {
        return !d.disabled && !d.bar;
      }).map(function (d) {
        return d.values.map(function (d, i) {
          return {
            x: getX(d, i),
            y: getY(d, i)
          };
        });
      });
      x.range([0, availableWidth]);
      x2.domain(d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(series1.concat(series2)), function (d) {
        return d.x;
      })).range([0, availableWidth]);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-linePlusBar').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-linePlusBar').append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-legendWrap');
      var focusEnter = gEnter.append('g').attr('class', 'nv-focus');
      focusEnter.append('g').attr('class', 'nv-x nv-axis');
      focusEnter.append('g').attr('class', 'nv-y1 nv-axis');
      focusEnter.append('g').attr('class', 'nv-y2 nv-axis');
      focusEnter.append('g').attr('class', 'nv-barsWrap');
      focusEnter.append('g').attr('class', 'nv-linesWrap');
      var contextEnter = gEnter.append('g').attr('class', 'nv-context');
      contextEnter.append('g').attr('class', 'nv-x nv-axis');
      contextEnter.append('g').attr('class', 'nv-y1 nv-axis');
      contextEnter.append('g').attr('class', 'nv-y2 nv-axis');
      contextEnter.append('g').attr('class', 'nv-barsWrap');
      contextEnter.append('g').attr('class', 'nv-linesWrap');
      contextEnter.append('g').attr('class', 'nv-brushBackground');
      contextEnter.append('g').attr('class', 'nv-x nv-brush');

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        legend.width(availableWidth / 2);
        g.select('.nv-legendWrap').datum(data.map(function (series) {
          series.originalKey = series.originalKey === undefined ? series.key : series.originalKey;
          series.key = series.originalKey + (series.bar ? ' (left axis)' : ' (right axis)');
          return series;
        })).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight1 = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom - height2;
        }
        g.select('.nv-legendWrap').attr('transform', 'translate(' + availableWidth / 2 + ',' + -margin.top + ')');
      }

      //------------------------------------------------------------

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------
      // Context Components

      bars2.width(availableWidth).height(availableHeight2).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled && data[i].bar;
      }));
      lines2.width(availableWidth).height(availableHeight2).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled && !data[i].bar;
      }));
      var bars2Wrap = g.select('.nv-context .nv-barsWrap').datum(dataBars.length ? dataBars : [{
        values: []
      }]);
      var lines2Wrap = g.select('.nv-context .nv-linesWrap').datum(!dataLines[0].disabled ? dataLines : [{
        values: []
      }]);
      g.select('.nv-context').attr('transform', 'translate(0,' + (availableHeight1 + margin.bottom + margin2.top) + ')');
      bars2Wrap.transition().call(bars2);
      lines2Wrap.transition().call(lines2);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Brush

      brush.x(x2).on('brush', onBrush);
      if (brushExtent) brush.extent(brushExtent);
      var brushBG = g.select('.nv-brushBackground').selectAll('g').data([brushExtent || brush.extent()]);
      var brushBGenter = brushBG.enter().append('g');
      brushBGenter.append('rect').attr('class', 'left').attr('x', 0).attr('y', 0).attr('height', availableHeight2);
      brushBGenter.append('rect').attr('class', 'right').attr('x', 0).attr('y', 0).attr('height', availableHeight2);
      var gBrush = g.select('.nv-x.nv-brush').call(brush);
      gBrush.selectAll('rect')
      //.attr('y', -5)
      .attr('height', availableHeight2);
      gBrush.selectAll('.resize').append('path').attr('d', resizePath);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Secondary (Context) Axes

      x2Axis.ticks(availableWidth / 100).tickSize(-availableHeight2, 0);
      g.select('.nv-context .nv-x.nv-axis').attr('transform', 'translate(0,' + y3.range()[0] + ')');
      g.select('.nv-context .nv-x.nv-axis').transition().call(x2Axis);
      y3Axis.scale(y3).ticks(availableHeight2 / 36).tickSize(-availableWidth, 0);
      g.select('.nv-context .nv-y1.nv-axis').style('opacity', dataBars.length ? 1 : 0).attr('transform', 'translate(0,' + x2.range()[0] + ')');
      g.select('.nv-context .nv-y1.nv-axis').transition().call(y3Axis);
      y4Axis.scale(y4).ticks(availableHeight2 / 36).tickSize(dataBars.length ? 0 : -availableWidth, 0); // Show the y2 rules only if y1 has none

      g.select('.nv-context .nv-y2.nv-axis').style('opacity', dataLines.length ? 1 : 0).attr('transform', 'translate(' + x2.range()[1] + ',0)');
      g.select('.nv-context .nv-y2.nv-axis').transition().call(y4Axis);

      //------------------------------------------------------------

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      legend.dispatch.on('stateChange', function (newState) {
        chart.update();
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });

      //============================================================

      //============================================================
      // Functions
      //------------------------------------------------------------

      // Taken from crossfilter (http://square.github.com/crossfilter/)
      function resizePath(d) {
        var e = +(d == 'e'),
          x = e ? 1 : -1,
          y = availableHeight2 / 3;
        return 'M' + .5 * x + ',' + y + 'A6,6 0 0 ' + e + ' ' + 6.5 * x + ',' + (y + 6) + 'V' + (2 * y - 6) + 'A6,6 0 0 ' + e + ' ' + .5 * x + ',' + 2 * y + 'Z' + 'M' + 2.5 * x + ',' + (y + 8) + 'V' + (2 * y - 8) + 'M' + 4.5 * x + ',' + (y + 8) + 'V' + (2 * y - 8);
      }
      function updateBrushBG() {
        if (!brush.empty()) brush.extent(brushExtent);
        brushBG.data([brush.empty() ? x2.domain() : brushExtent]).each(function (d, i) {
          var leftWidth = x2(d[0]) - x2.range()[0],
            rightWidth = x2.range()[1] - x2(d[1]);
          d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).select('.left').attr('width', leftWidth < 0 ? 0 : leftWidth);
          d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).select('.right').attr('x', x2(d[1])).attr('width', rightWidth < 0 ? 0 : rightWidth);
        });
      }
      function onBrush() {
        brushExtent = brush.empty() ? null : brush.extent();
        extent = brush.empty() ? x2.domain() : brush.extent();
        dispatch.brush({
          extent: extent,
          brush: brush
        });
        updateBrushBG();

        //------------------------------------------------------------
        // Prepare Main (Focus) Bars and Lines

        bars.width(availableWidth).height(availableHeight1).color(data.map(function (d, i) {
          return d.color || color(d, i);
        }).filter(function (d, i) {
          return !data[i].disabled && data[i].bar;
        }));
        lines.width(availableWidth).height(availableHeight1).color(data.map(function (d, i) {
          return d.color || color(d, i);
        }).filter(function (d, i) {
          return !data[i].disabled && !data[i].bar;
        }));
        var focusBarsWrap = g.select('.nv-focus .nv-barsWrap').datum(!dataBars.length ? [{
          values: []
        }] : dataBars.map(function (d, i) {
          return {
            key: d.key,
            values: d.values.filter(function (d, i) {
              return bars.x()(d, i) >= extent[0] && bars.x()(d, i) <= extent[1];
            })
          };
        }));
        var focusLinesWrap = g.select('.nv-focus .nv-linesWrap').datum(dataLines[0].disabled ? [{
          values: []
        }] : dataLines.map(function (d, i) {
          return {
            key: d.key,
            values: d.values.filter(function (d, i) {
              return lines.x()(d, i) >= extent[0] && lines.x()(d, i) <= extent[1];
            })
          };
        }));

        //------------------------------------------------------------

        //------------------------------------------------------------
        // Update Main (Focus) X Axis

        if (dataBars.length) {
          x = bars.xScale();
        } else {
          x = lines.xScale();
        }
        xAxis.scale(x).ticks(availableWidth / 100).tickSize(-availableHeight1, 0);
        xAxis.domain([Math.ceil(extent[0]), Math.floor(extent[1])]);
        g.select('.nv-x.nv-axis').transition().duration(transitionDuration).call(xAxis);
        //------------------------------------------------------------

        //------------------------------------------------------------
        // Update Main (Focus) Bars and Lines

        focusBarsWrap.transition().duration(transitionDuration).call(bars);
        focusLinesWrap.transition().duration(transitionDuration).call(lines);

        //------------------------------------------------------------

        //------------------------------------------------------------
        // Setup and Update Main (Focus) Y Axes

        g.select('.nv-focus .nv-x.nv-axis').attr('transform', 'translate(0,' + y1.range()[0] + ')');
        y1Axis.scale(y1).ticks(availableHeight1 / 36).tickSize(-availableWidth, 0);
        g.select('.nv-focus .nv-y1.nv-axis').style('opacity', dataBars.length ? 1 : 0);
        y2Axis.scale(y2).ticks(availableHeight1 / 36).tickSize(dataBars.length ? 0 : -availableWidth, 0); // Show the y2 rules only if y1 has none

        g.select('.nv-focus .nv-y2.nv-axis').style('opacity', dataLines.length ? 1 : 0).attr('transform', 'translate(' + x.range()[1] + ',0)');
        g.select('.nv-focus .nv-y1.nv-axis').transition().duration(transitionDuration).call(y1Axis);
        g.select('.nv-focus .nv-y2.nv-axis').transition().duration(transitionDuration).call(y2Axis);
      }

      //============================================================

      onBrush();
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  lines.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  lines.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  bars.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  bars.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.legend = legend;
  chart.lines = lines;
  chart.lines2 = lines2;
  chart.bars = bars;
  chart.bars2 = bars2;
  chart.xAxis = xAxis;
  chart.x2Axis = x2Axis;
  chart.y1Axis = y1Axis;
  chart.y2Axis = y2Axis;
  chart.y3Axis = y3Axis;
  chart.y4Axis = y4Axis;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, lines, 'defined', 'size', 'clipVoronoi', 'interpolate');
  //TODO: consider rebinding x, y and some other stuff, and simply do soemthign lile bars.x(lines.x()), etc.
  //d3v3.rebind(chart, lines, 'x', 'y', 'size', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'id');

  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = _;
    lines.x(_);
    bars.x(_);
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = _;
    lines.y(_);
    bars.y(_);
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };
  chart.brushExtent = function (_) {
    if (!arguments.length) return brushExtent;
    brushExtent = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.multiBar = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 960,
    height = 500,
    x = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.ordinal(),
    y = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
    ,
    getX = function getX(d) {
      return d.x;
    },
    getY = function getY(d) {
      return d.y;
    },
    forceY = [0] // 0 is forced by default.. this makes sense for the majority of bar graphs... user can always do chart.forceY([]) to remove
    ,
    clipEdge = true,
    stacked = false,
    stackOffset = 'zero' // options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function
    ,
    color = nv.utils.defaultColor(),
    hideable = false,
    barColor = null // adding the ability to set the color for each rather than the whole group
    ,
    disabled // used in conjunction with barColor to communicate from multiBarHorizontalChart what series are disabled
    ,
    delay = 1200,
    xDomain,
    yDomain,
    xRange,
    yRange,
    groupSpacing = 0.1,
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout');

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var x0, y0 //used to store previous scales
  ;

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableWidth = width - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);
      if (hideable && data.length) hideable = [{
        values: data[0].values.map(function (d) {
          return {
            x: d.x,
            y: 0,
            series: d.series,
            size: 0.01
          };
        })
      }];
      if (stacked) data = d3v3__WEBPACK_IMPORTED_MODULE_0___default().layout.stack().offset(stackOffset).values(function (d) {
        return d.values;
      }).y(getY)(!data.length && hideable ? hideable : data);

      //add series index to each data point for reference
      data.forEach(function (series, i) {
        series.values.forEach(function (point) {
          point.series = i;
        });
      });

      //------------------------------------------------------------
      // HACK for negative value stacking
      if (stacked) data[0].values.map(function (d, i) {
        var posBase = 0,
          negBase = 0;
        data.map(function (d) {
          var f = d.values[i];
          f.size = Math.abs(f.y);
          if (f.y < 0) {
            f.y1 = negBase;
            negBase = negBase - f.size;
          } else {
            f.y1 = f.size + posBase;
            posBase = posBase + f.size;
          }
        });
      });

      //------------------------------------------------------------
      // Setup Scales

      // remap and flatten the data for use in calculating the scales' domains
      var seriesData = xDomain && yDomain ? [] :
      // if we know xDomain and yDomain, no need to calculate
      data.map(function (d) {
        return d.values.map(function (d, i) {
          return {
            x: getX(d, i),
            y: getY(d, i),
            y0: d.y0,
            y1: d.y1
          };
        });
      });
      x.domain(xDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(seriesData).map(function (d) {
        return d.x;
      })).rangeBands(xRange || [0, availableWidth], groupSpacing);

      //y   .domain(yDomain || d3v3.extent(d3v3.merge(seriesData).map(function(d) { return d.y + (stacked ? d.y1 : 0) }).concat(forceY)))
      y.domain(yDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(seriesData).map(function (d) {
        return stacked ? d.y > 0 ? d.y1 : d.y1 + d.y : d.y;
      }).concat(forceY))).range(yRange || [availableHeight, 0]);

      // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
      if (x.domain()[0] === x.domain()[1]) x.domain()[0] ? x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01]) : x.domain([-1, 1]);
      if (y.domain()[0] === y.domain()[1]) y.domain()[0] ? y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01]) : y.domain([-1, 1]);
      x0 = x0 || x;
      y0 = y0 || y;

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-multibar').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multibar');
      var defsEnter = wrapEnter.append('defs');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-groups');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      defsEnter.append('clipPath').attr('id', 'nv-edge-clip-' + id).append('rect');
      wrap.select('#nv-edge-clip-' + id + ' rect').attr('width', availableWidth).attr('height', availableHeight);
      g.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');
      var groups = wrap.select('.nv-groups').selectAll('.nv-group').data(function (d) {
        return d;
      }, function (d, i) {
        return i;
      });
      groups.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
      groups.exit().transition().selectAll('rect.nv-bar').delay(function (d, i) {
        return i * delay / data[0].values.length;
      }).attr('y', function (d) {
        return stacked ? y0(d.y0) : y0(0);
      }).attr('height', 0).remove();
      groups.attr('class', function (d, i) {
        return 'nv-group nv-series-' + i;
      }).classed('hover', function (d) {
        return d.hover;
      }).style('fill', function (d, i) {
        return color(d, i);
      }).style('stroke', function (d, i) {
        return color(d, i);
      });
      groups.transition().style('stroke-opacity', 1).style('fill-opacity', .75);
      var bars = groups.selectAll('rect.nv-bar').data(function (d) {
        return hideable && !data.length ? hideable.values : d.values;
      });
      bars.exit().remove();
      var barsEnter = bars.enter().append('rect').attr('class', function (d, i) {
        return getY(d, i) < 0 ? 'nv-bar negative' : 'nv-bar positive';
      }).attr('x', function (d, i, j) {
        return stacked ? 0 : j * x.rangeBand() / data.length;
      }).attr('y', function (d) {
        return y0(stacked ? d.y0 : 0);
      }).attr('height', 0).attr('width', x.rangeBand() / (stacked ? 1 : data.length)).attr('transform', function (d, i) {
        return 'translate(' + x(getX(d, i)) + ',0)';
      });
      bars.style('fill', function (d, i, j) {
        return color(d, j, i);
      }).style('stroke', function (d, i, j) {
        return color(d, j, i);
      }).on('mouseover', function (d, i) {
        //TODO: figure out why j works above, but not here
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', true);
        dispatch.elementMouseover({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pos: [x(getX(d, i)) + x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length, y(getY(d, i) + (stacked ? d.y0 : 0))],
          // TODO: Figure out why the value appears to be shifted
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
      }).on('mouseout', function (d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', false);
        dispatch.elementMouseout({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
      }).on('click', function (d, i) {
        dispatch.elementClick({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pos: [x(getX(d, i)) + x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length, y(getY(d, i) + (stacked ? d.y0 : 0))],
          // TODO: Figure out why the value appears to be shifted
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      }).on('dblclick', function (d, i) {
        dispatch.elementDblClick({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pos: [x(getX(d, i)) + x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length, y(getY(d, i) + (stacked ? d.y0 : 0))],
          // TODO: Figure out why the value appears to be shifted
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      });
      bars.attr('class', function (d, i) {
        return getY(d, i) < 0 ? 'nv-bar negative' : 'nv-bar positive';
      }).transition().attr('transform', function (d, i) {
        return 'translate(' + x(getX(d, i)) + ',0)';
      });
      if (barColor) {
        if (!disabled) disabled = data.map(function () {
          return true;
        });
        bars.style('fill', function (d, i, j) {
          return d3v3__WEBPACK_IMPORTED_MODULE_0___default().rgb(barColor(d, i)).darker(disabled.map(function (d, i) {
            return i;
          }).filter(function (d, i) {
            return !disabled[i];
          })[j]).toString();
        }).style('stroke', function (d, i, j) {
          return d3v3__WEBPACK_IMPORTED_MODULE_0___default().rgb(barColor(d, i)).darker(disabled.map(function (d, i) {
            return i;
          }).filter(function (d, i) {
            return !disabled[i];
          })[j]).toString();
        });
      }
      if (stacked) bars.transition().delay(function (d, i) {
        return i * delay / data[0].values.length;
      }).attr('y', function (d, i) {
        return y(stacked ? d.y1 : 0);
      }).attr('height', function (d, i) {
        return Math.max(Math.abs(y(d.y + (stacked ? d.y0 : 0)) - y(stacked ? d.y0 : 0)), 1);
      }).attr('x', function (d, i) {
        return stacked ? 0 : d.series * x.rangeBand() / data.length;
      }).attr('width', x.rangeBand() / (stacked ? 1 : data.length));else bars.transition().delay(function (d, i) {
        return i * delay / data[0].values.length;
      }).attr('x', function (d, i) {
        return d.series * x.rangeBand() / data.length;
      }).attr('width', x.rangeBand() / data.length).attr('y', function (d, i) {
        return getY(d, i) < 0 ? y(0) : y(0) - y(getY(d, i)) < 1 ? y(0) - 1 : y(getY(d, i)) || 0;
      }).attr('height', function (d, i) {
        return Math.max(Math.abs(y(getY(d, i)) - y(0)), 1) || 0;
      });

      //store old scales for use in transitions on update
      x0 = x.copy();
      y0 = y.copy();
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = _;
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = _;
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.xScale = function (_) {
    if (!arguments.length) return x;
    x = _;
    return chart;
  };
  chart.yScale = function (_) {
    if (!arguments.length) return y;
    y = _;
    return chart;
  };
  chart.xDomain = function (_) {
    if (!arguments.length) return xDomain;
    xDomain = _;
    return chart;
  };
  chart.yDomain = function (_) {
    if (!arguments.length) return yDomain;
    yDomain = _;
    return chart;
  };
  chart.xRange = function (_) {
    if (!arguments.length) return xRange;
    xRange = _;
    return chart;
  };
  chart.yRange = function (_) {
    if (!arguments.length) return yRange;
    yRange = _;
    return chart;
  };
  chart.forceY = function (_) {
    if (!arguments.length) return forceY;
    forceY = _;
    return chart;
  };
  chart.stacked = function (_) {
    if (!arguments.length) return stacked;
    stacked = _;
    return chart;
  };
  chart.stackOffset = function (_) {
    if (!arguments.length) return stackOffset;
    stackOffset = _;
    return chart;
  };
  chart.clipEdge = function (_) {
    if (!arguments.length) return clipEdge;
    clipEdge = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };
  chart.barColor = function (_) {
    if (!arguments.length) return barColor;
    barColor = nv.utils.getColor(_);
    return chart;
  };
  chart.disabled = function (_) {
    if (!arguments.length) return disabled;
    disabled = _;
    return chart;
  };
  chart.id = function (_) {
    if (!arguments.length) return id;
    id = _;
    return chart;
  };
  chart.hideable = function (_) {
    if (!arguments.length) return hideable;
    hideable = _;
    return chart;
  };
  chart.delay = function (_) {
    if (!arguments.length) return delay;
    delay = _;
    return chart;
  };
  chart.groupSpacing = function (_) {
    if (!arguments.length) return groupSpacing;
    groupSpacing = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.multiBarChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var multibar = nv.models.multiBar(),
    xAxis = nv.models.axis(),
    yAxis = nv.models.axis(),
    legend = nv.models.legend(),
    controls = nv.models.legend();
  var margin = {
      top: 30,
      right: 20,
      bottom: 50,
      left: 60
    },
    width = null,
    height = null,
    color = nv.utils.defaultColor(),
    showControls = true,
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    rightAlignYAxis = false,
    reduceXTicks = true // if false a tick will show for every data point
    ,
    staggerLabels = false,
    rotateLabels = 0,
    tooltips = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + key + '</h3>' + '<p>' + y + ' on ' + x + '</p>';
    },
    x //can be accessed via chart.xScale()
    ,
    y //can be accessed via chart.yScale()
    ,
    state = {
      stacked: false
    },
    defaultState = null,
    noData = "No Data Available.",
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState'),
    controlWidth = function controlWidth() {
      return showControls ? 180 : 0;
    },
    transitionDuration = 250;
  multibar.stacked(false);
  xAxis.orient('bottom').tickPadding(7).highlightZero(true).showMaxMin(false).tickFormat(function (d) {
    return d;
  });
  yAxis.orient(rightAlignYAxis ? 'right' : 'left').tickFormat(d3v3__WEBPACK_IMPORTED_MODULE_0___default().format(',.1f'));
  controls.updateState(false);
  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var showTooltip = function showTooltip(e, offsetElement) {
    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      x = xAxis.tickFormat()(multibar.x()(e.point, e.pointIndex)),
      y = yAxis.tickFormat()(multibar.y()(e.point, e.pointIndex)),
      content = tooltip(e.series.key, x, y, e, chart);
    nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
  };

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        container.transition().duration(transitionDuration).call(chart);
      };
      chart.container = this;

      //set state.disabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });
      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) defaultState[key] = state[key].slice(0);else defaultState[key] = state[key];
        }
      }
      //------------------------------------------------------------
      // Display noData message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      x = multibar.xScale();
      y = multibar.yScale();

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-multiBarWithLegend').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multiBarWithLegend').append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis');
      gEnter.append('g').attr('class', 'nv-barsWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');
      gEnter.append('g').attr('class', 'nv-controlsWrap');

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        legend.width(availableWidth - controlWidth());
        if (multibar.barColor()) data.forEach(function (series, i) {
          series.color = d3v3__WEBPACK_IMPORTED_MODULE_0___default().rgb('#ccc').darker(i * 1.5).toString();
        });
        g.select('.nv-legendWrap').datum(data).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        g.select('.nv-legendWrap').attr('transform', 'translate(' + controlWidth() + ',' + -margin.top + ')');
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Controls

      if (showControls) {
        var controlsData = [{
          key: 'Grouped',
          disabled: multibar.stacked()
        }, {
          key: 'Stacked',
          disabled: !multibar.stacked()
        }];
        controls.width(controlWidth()).color(['#444', '#444', '#444']);
        g.select('.nv-controlsWrap').datum(controlsData).attr('transform', 'translate(0,' + -margin.top + ')').call(controls);
      }

      //------------------------------------------------------------

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      if (rightAlignYAxis) {
        g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
      }

      //------------------------------------------------------------
      // Main Chart Component(s)

      multibar.disabled(data.map(function (series) {
        return series.disabled;
      })).width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled;
      }));
      var barsWrap = g.select('.nv-barsWrap').datum(data.filter(function (d) {
        return !d.disabled;
      }));
      barsWrap.transition().call(multibar);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Axes

      if (showXAxis) {
        xAxis.scale(x).ticks(availableWidth / 100).tickSize(-availableHeight, 0);
        g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')');
        g.select('.nv-x.nv-axis').transition().call(xAxis);
        var xTicks = g.select('.nv-x.nv-axis > g').selectAll('g');
        xTicks.selectAll('line, text').style('opacity', 1);
        if (staggerLabels) {
          var getTranslate = function getTranslate(x, y) {
            return "translate(" + x + "," + y + ")";
          };
          var staggerUp = 5,
            staggerDown = 17; //pixels to stagger by
          // Issue #140
          xTicks.selectAll("text").attr('transform', function (d, i, j) {
            return getTranslate(0, j % 2 == 0 ? staggerUp : staggerDown);
          });
          var totalInBetweenTicks = d3v3__WEBPACK_IMPORTED_MODULE_0___default().selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;
          g.selectAll(".nv-x.nv-axis .nv-axisMaxMin text").attr("transform", function (d, i) {
            return getTranslate(0, i === 0 || totalInBetweenTicks % 2 !== 0 ? staggerDown : staggerUp);
          });
        }
        if (reduceXTicks) xTicks.filter(function (d, i) {
          return i % Math.ceil(data[0].values.length / (availableWidth / 100)) !== 0;
        }).selectAll('text, line').style('opacity', 0);
        if (rotateLabels) xTicks.selectAll('.tick text').attr('transform', 'rotate(' + rotateLabels + ' 0,0)').style('text-anchor', rotateLabels > 0 ? 'start' : 'end');
        g.select('.nv-x.nv-axis').selectAll('g.nv-axisMaxMin text').style('opacity', 1);
      }
      if (showYAxis) {
        yAxis.scale(y).ticks(availableHeight / 36).tickSize(-availableWidth, 0);
        g.select('.nv-y.nv-axis').transition().call(yAxis);
      }

      //------------------------------------------------------------

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      legend.dispatch.on('stateChange', function (newState) {
        state = newState;
        dispatch.stateChange(state);
        chart.update();
      });
      controls.dispatch.on('legendClick', function (d, i) {
        if (!d.disabled) return;
        controlsData = controlsData.map(function (s) {
          s.disabled = true;
          return s;
        });
        d.disabled = false;
        switch (d.key) {
          case 'Grouped':
            multibar.stacked(false);
            break;
          case 'Stacked':
            multibar.stacked(true);
            break;
        }
        state.stacked = multibar.stacked();
        dispatch.stateChange(state);
        chart.update();
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });

      // Update chart from a state object passed to event handler
      dispatch.on('changeState', function (e) {
        if (typeof e.disabled !== 'undefined') {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });
          state.disabled = e.disabled;
        }
        if (typeof e.stacked !== 'undefined') {
          multibar.stacked(e.stacked);
          state.stacked = e.stacked;
        }
        chart.update();
      });

      //============================================================
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  multibar.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  multibar.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.multibar = multibar;
  chart.legend = legend;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, multibar, 'x', 'y', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'clipEdge', 'id', 'stacked', 'stackOffset', 'delay', 'barColor', 'groupSpacing');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    return chart;
  };
  chart.showControls = function (_) {
    if (!arguments.length) return showControls;
    showControls = _;
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.showXAxis = function (_) {
    if (!arguments.length) return showXAxis;
    showXAxis = _;
    return chart;
  };
  chart.showYAxis = function (_) {
    if (!arguments.length) return showYAxis;
    showYAxis = _;
    return chart;
  };
  chart.rightAlignYAxis = function (_) {
    if (!arguments.length) return rightAlignYAxis;
    rightAlignYAxis = _;
    yAxis.orient(_ ? 'right' : 'left');
    return chart;
  };
  chart.reduceXTicks = function (_) {
    if (!arguments.length) return reduceXTicks;
    reduceXTicks = _;
    return chart;
  };
  chart.rotateLabels = function (_) {
    if (!arguments.length) return rotateLabels;
    rotateLabels = _;
    return chart;
  };
  chart.staggerLabels = function (_) {
    if (!arguments.length) return staggerLabels;
    staggerLabels = _;
    return chart;
  };
  chart.tooltip = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.state = function (_) {
    if (!arguments.length) return state;
    state = _;
    return chart;
  };
  chart.defaultState = function (_) {
    if (!arguments.length) return defaultState;
    defaultState = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };
  chart.transitionDuration = function (_) {
    if (!arguments.length) return transitionDuration;
    transitionDuration = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.multiBarHorizontal = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 960,
    height = 500,
    id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
    ,
    x = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.ordinal(),
    y = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    getX = function getX(d) {
      return d.x;
    },
    getY = function getY(d) {
      return d.y;
    },
    forceY = [0] // 0 is forced by default.. this makes sense for the majority of bar graphs... user can always do chart.forceY([]) to remove
    ,
    color = nv.utils.defaultColor(),
    barColor = null // adding the ability to set the color for each rather than the whole group
    ,
    disabled // used in conjunction with barColor to communicate from multiBarHorizontalChart what series are disabled
    ,
    stacked = false,
    showValues = false,
    showBarLabels = false,
    valuePadding = 60,
    valueFormat = d3v3__WEBPACK_IMPORTED_MODULE_0___default().format(',.2f'),
    delay = 1200,
    xDomain,
    yDomain,
    xRange,
    yRange,
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout');

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var x0, y0 //used to store previous scales
  ;

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableWidth = width - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);
      if (stacked) data = d3v3__WEBPACK_IMPORTED_MODULE_0___default().layout.stack().offset('zero').values(function (d) {
        return d.values;
      }).y(getY)(data);

      //add series index to each data point for reference
      data.forEach(function (series, i) {
        series.values.forEach(function (point) {
          point.series = i;
        });
      });

      //------------------------------------------------------------
      // HACK for negative value stacking
      if (stacked) data[0].values.map(function (d, i) {
        var posBase = 0,
          negBase = 0;
        data.map(function (d) {
          var f = d.values[i];
          f.size = Math.abs(f.y);
          if (f.y < 0) {
            f.y1 = negBase - f.size;
            negBase = negBase - f.size;
          } else {
            f.y1 = posBase;
            posBase = posBase + f.size;
          }
        });
      });

      //------------------------------------------------------------
      // Setup Scales

      // remap and flatten the data for use in calculating the scales' domains
      var seriesData = xDomain && yDomain ? [] :
      // if we know xDomain and yDomain, no need to calculate
      data.map(function (d) {
        return d.values.map(function (d, i) {
          return {
            x: getX(d, i),
            y: getY(d, i),
            y0: d.y0,
            y1: d.y1
          };
        });
      });
      x.domain(xDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(seriesData).map(function (d) {
        return d.x;
      })).rangeBands(xRange || [0, availableHeight], .1);

      //y   .domain(yDomain || d3v3.extent(d3v3.merge(seriesData).map(function(d) { return d.y + (stacked ? d.y0 : 0) }).concat(forceY)))
      y.domain(yDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(seriesData).map(function (d) {
        return stacked ? d.y > 0 ? d.y1 + d.y : d.y1 : d.y;
      }).concat(forceY)));
      if (showValues && !stacked) y.range(yRange || [y.domain()[0] < 0 ? valuePadding : 0, availableWidth - (y.domain()[1] > 0 ? valuePadding : 0)]);else y.range(yRange || [0, availableWidth]);
      x0 = x0 || x;
      y0 = y0 || d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear().domain(y.domain()).range([y(0), y(0)]);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).selectAll('g.nv-wrap.nv-multibarHorizontal').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multibarHorizontal');
      var defsEnter = wrapEnter.append('defs');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-groups');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      var groups = wrap.select('.nv-groups').selectAll('.nv-group').data(function (d) {
        return d;
      }, function (d, i) {
        return i;
      });
      groups.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
      groups.exit().transition().style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6).remove();
      groups.attr('class', function (d, i) {
        return 'nv-group nv-series-' + i;
      }).classed('hover', function (d) {
        return d.hover;
      }).style('fill', function (d, i) {
        return color(d, i);
      }).style('stroke', function (d, i) {
        return color(d, i);
      });
      groups.transition().style('stroke-opacity', 1).style('fill-opacity', .75);
      var bars = groups.selectAll('g.nv-bar').data(function (d) {
        return d.values;
      });
      bars.exit().remove();
      var barsEnter = bars.enter().append('g').attr('transform', function (d, i, j) {
        return 'translate(' + y0(stacked ? d.y0 : 0) + ',' + (stacked ? 0 : j * x.rangeBand() / data.length + x(getX(d, i))) + ')';
      });
      barsEnter.append('rect').attr('width', 0).attr('height', x.rangeBand() / (stacked ? 1 : data.length));
      bars.on('mouseover', function (d, i) {
        //TODO: figure out why j works above, but not here
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', true);
        dispatch.elementMouseover({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pos: [y(getY(d, i) + (stacked ? d.y0 : 0)), x(getX(d, i)) + x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length],
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
      }).on('mouseout', function (d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', false);
        dispatch.elementMouseout({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
      }).on('click', function (d, i) {
        dispatch.elementClick({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pos: [x(getX(d, i)) + x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length, y(getY(d, i) + (stacked ? d.y0 : 0))],
          // TODO: Figure out why the value appears to be shifted
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      }).on('dblclick', function (d, i) {
        dispatch.elementDblClick({
          value: getY(d, i),
          point: d,
          series: data[d.series],
          pos: [x(getX(d, i)) + x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length, y(getY(d, i) + (stacked ? d.y0 : 0))],
          // TODO: Figure out why the value appears to be shifted
          pointIndex: i,
          seriesIndex: d.series,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      });
      barsEnter.append('text');
      if (showValues && !stacked) {
        bars.select('text').attr('text-anchor', function (d, i) {
          return getY(d, i) < 0 ? 'end' : 'start';
        }).attr('y', x.rangeBand() / (data.length * 2)).attr('dy', '.32em').text(function (d, i) {
          return valueFormat(getY(d, i));
        });
        bars.transition().select('text').attr('x', function (d, i) {
          return getY(d, i) < 0 ? -4 : y(getY(d, i)) - y(0) + 4;
        });
      } else {
        bars.selectAll('text').text('');
      }
      if (showBarLabels && !stacked) {
        barsEnter.append('text').classed('nv-bar-label', true);
        bars.select('text.nv-bar-label').attr('text-anchor', function (d, i) {
          return getY(d, i) < 0 ? 'start' : 'end';
        }).attr('y', x.rangeBand() / (data.length * 2)).attr('dy', '.32em').text(function (d, i) {
          return getX(d, i);
        });
        bars.transition().select('text.nv-bar-label').attr('x', function (d, i) {
          return getY(d, i) < 0 ? y(0) - y(getY(d, i)) + 4 : -4;
        });
      } else {
        bars.selectAll('text.nv-bar-label').text('');
      }
      bars.attr('class', function (d, i) {
        return getY(d, i) < 0 ? 'nv-bar negative' : 'nv-bar positive';
      });
      if (barColor) {
        if (!disabled) disabled = data.map(function () {
          return true;
        });
        bars.style('fill', function (d, i, j) {
          return d3v3__WEBPACK_IMPORTED_MODULE_0___default().rgb(barColor(d, i)).darker(disabled.map(function (d, i) {
            return i;
          }).filter(function (d, i) {
            return !disabled[i];
          })[j]).toString();
        }).style('stroke', function (d, i, j) {
          return d3v3__WEBPACK_IMPORTED_MODULE_0___default().rgb(barColor(d, i)).darker(disabled.map(function (d, i) {
            return i;
          }).filter(function (d, i) {
            return !disabled[i];
          })[j]).toString();
        });
      }
      if (stacked) bars.transition().attr('transform', function (d, i) {
        return 'translate(' + y(d.y1) + ',' + x(getX(d, i)) + ')';
      }).select('rect').attr('width', function (d, i) {
        return Math.abs(y(getY(d, i) + d.y0) - y(d.y0));
      }).attr('height', x.rangeBand());else bars.transition().attr('transform', function (d, i) {
        //TODO: stacked must be all positive or all negative, not both?
        return 'translate(' + (getY(d, i) < 0 ? y(getY(d, i)) : y(0)) + ',' + (d.series * x.rangeBand() / data.length + x(getX(d, i))) + ')';
      }).select('rect').attr('height', x.rangeBand() / data.length).attr('width', function (d, i) {
        return Math.max(Math.abs(y(getY(d, i)) - y(0)), 1);
      });

      //store old scales for use in transitions on update
      x0 = x.copy();
      y0 = y.copy();
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = _;
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = _;
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.xScale = function (_) {
    if (!arguments.length) return x;
    x = _;
    return chart;
  };
  chart.yScale = function (_) {
    if (!arguments.length) return y;
    y = _;
    return chart;
  };
  chart.xDomain = function (_) {
    if (!arguments.length) return xDomain;
    xDomain = _;
    return chart;
  };
  chart.yDomain = function (_) {
    if (!arguments.length) return yDomain;
    yDomain = _;
    return chart;
  };
  chart.xRange = function (_) {
    if (!arguments.length) return xRange;
    xRange = _;
    return chart;
  };
  chart.yRange = function (_) {
    if (!arguments.length) return yRange;
    yRange = _;
    return chart;
  };
  chart.forceY = function (_) {
    if (!arguments.length) return forceY;
    forceY = _;
    return chart;
  };
  chart.stacked = function (_) {
    if (!arguments.length) return stacked;
    stacked = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };
  chart.barColor = function (_) {
    if (!arguments.length) return barColor;
    barColor = nv.utils.getColor(_);
    return chart;
  };
  chart.disabled = function (_) {
    if (!arguments.length) return disabled;
    disabled = _;
    return chart;
  };
  chart.id = function (_) {
    if (!arguments.length) return id;
    id = _;
    return chart;
  };
  chart.delay = function (_) {
    if (!arguments.length) return delay;
    delay = _;
    return chart;
  };
  chart.showValues = function (_) {
    if (!arguments.length) return showValues;
    showValues = _;
    return chart;
  };
  chart.showBarLabels = function (_) {
    if (!arguments.length) return showBarLabels;
    showBarLabels = _;
    return chart;
  };
  chart.valueFormat = function (_) {
    if (!arguments.length) return valueFormat;
    valueFormat = _;
    return chart;
  };
  chart.valuePadding = function (_) {
    if (!arguments.length) return valuePadding;
    valuePadding = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.multiBarHorizontalChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var multibar = nv.models.multiBarHorizontal(),
    xAxis = nv.models.axis(),
    yAxis = nv.models.axis(),
    legend = nv.models.legend().height(30),
    controls = nv.models.legend().height(30);
  var margin = {
      top: 30,
      right: 20,
      bottom: 50,
      left: 60
    },
    width = null,
    height = null,
    color = nv.utils.defaultColor(),
    showControls = true,
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    stacked = false,
    tooltips = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + key + ' - ' + x + '</h3>' + '<p>' + y + '</p>';
    },
    x //can be accessed via chart.xScale()
    ,
    y //can be accessed via chart.yScale()
    ,
    state = {
      stacked: stacked
    },
    defaultState = null,
    noData = 'No Data Available.',
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState'),
    controlWidth = function controlWidth() {
      return showControls ? 180 : 0;
    },
    transitionDuration = 250;
  multibar.stacked(stacked);
  xAxis.orient('left').tickPadding(5).highlightZero(false).showMaxMin(false).tickFormat(function (d) {
    return d;
  });
  yAxis.orient('bottom').tickFormat(d3v3__WEBPACK_IMPORTED_MODULE_0___default().format(',.1f'));
  controls.updateState(false);
  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var showTooltip = function showTooltip(e, offsetElement) {
    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      x = xAxis.tickFormat()(multibar.x()(e.point, e.pointIndex)),
      y = yAxis.tickFormat()(multibar.y()(e.point, e.pointIndex)),
      content = tooltip(e.series.key, x, y, e, chart);
    nv.tooltip.show([left, top], content, e.value < 0 ? 'e' : 'w', null, offsetElement);
  };

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        container.transition().duration(transitionDuration).call(chart);
      };
      chart.container = this;

      //set state.disabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });
      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) defaultState[key] = state[key].slice(0);else defaultState[key] = state[key];
        }
      }

      //------------------------------------------------------------
      // Display No Data message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      x = multibar.xScale();
      y = multibar.yScale();

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-multiBarHorizontalChart').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multiBarHorizontalChart').append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis').append('g').attr('class', 'nv-zeroLine').append('line');
      gEnter.append('g').attr('class', 'nv-barsWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');
      gEnter.append('g').attr('class', 'nv-controlsWrap');

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        legend.width(availableWidth - controlWidth());
        if (multibar.barColor()) data.forEach(function (series, i) {
          series.color = d3v3__WEBPACK_IMPORTED_MODULE_0___default().rgb('#ccc').darker(i * 1.5).toString();
        });
        g.select('.nv-legendWrap').datum(data).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        g.select('.nv-legendWrap').attr('transform', 'translate(' + controlWidth() + ',' + -margin.top + ')');
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Controls

      if (showControls) {
        var controlsData = [{
          key: 'Grouped',
          disabled: multibar.stacked()
        }, {
          key: 'Stacked',
          disabled: !multibar.stacked()
        }];
        controls.width(controlWidth()).color(['#444', '#444', '#444']);
        g.select('.nv-controlsWrap').datum(controlsData).attr('transform', 'translate(0,' + -margin.top + ')').call(controls);
      }

      //------------------------------------------------------------

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------
      // Main Chart Component(s)

      multibar.disabled(data.map(function (series) {
        return series.disabled;
      })).width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled;
      }));
      var barsWrap = g.select('.nv-barsWrap').datum(data.filter(function (d) {
        return !d.disabled;
      }));
      barsWrap.transition().call(multibar);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Axes

      if (showXAxis) {
        xAxis.scale(x).ticks(availableHeight / 24).tickSize(-availableWidth, 0);
        g.select('.nv-x.nv-axis').transition().call(xAxis);
        var xTicks = g.select('.nv-x.nv-axis').selectAll('g');
        xTicks.selectAll('line, text');
      }
      if (showYAxis) {
        yAxis.scale(y).ticks(availableWidth / 100).tickSize(-availableHeight, 0);
        g.select('.nv-y.nv-axis').attr('transform', 'translate(0,' + availableHeight + ')');
        g.select('.nv-y.nv-axis').transition().call(yAxis);
      }

      // Zero line
      g.select(".nv-zeroLine line").attr("x1", y(0)).attr("x2", y(0)).attr("y1", 0).attr("y2", -availableHeight);

      //------------------------------------------------------------

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      legend.dispatch.on('stateChange', function (newState) {
        state = newState;
        dispatch.stateChange(state);
        chart.update();
      });
      controls.dispatch.on('legendClick', function (d, i) {
        if (!d.disabled) return;
        controlsData = controlsData.map(function (s) {
          s.disabled = true;
          return s;
        });
        d.disabled = false;
        switch (d.key) {
          case 'Grouped':
            multibar.stacked(false);
            break;
          case 'Stacked':
            multibar.stacked(true);
            break;
        }
        state.stacked = multibar.stacked();
        dispatch.stateChange(state);
        chart.update();
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });

      // Update chart from a state object passed to event handler
      dispatch.on('changeState', function (e) {
        if (typeof e.disabled !== 'undefined') {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });
          state.disabled = e.disabled;
        }
        if (typeof e.stacked !== 'undefined') {
          multibar.stacked(e.stacked);
          state.stacked = e.stacked;
        }
        chart.update();
      });
      //============================================================
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  multibar.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  multibar.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.multibar = multibar;
  chart.legend = legend;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, multibar, 'x', 'y', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'clipEdge', 'id', 'delay', 'showValues', 'showBarLabels', 'valueFormat', 'stacked', 'barColor');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    return chart;
  };
  chart.showControls = function (_) {
    if (!arguments.length) return showControls;
    showControls = _;
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.showXAxis = function (_) {
    if (!arguments.length) return showXAxis;
    showXAxis = _;
    return chart;
  };
  chart.showYAxis = function (_) {
    if (!arguments.length) return showYAxis;
    showYAxis = _;
    return chart;
  };
  chart.tooltip = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.state = function (_) {
    if (!arguments.length) return state;
    state = _;
    return chart;
  };
  chart.defaultState = function (_) {
    if (!arguments.length) return defaultState;
    defaultState = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };
  chart.transitionDuration = function (_) {
    if (!arguments.length) return transitionDuration;
    transitionDuration = _;
    return chart;
  };
  //============================================================

  return chart;
};
nv.models.multiChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 30,
      right: 20,
      bottom: 50,
      left: 60
    },
    color = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.category20().range(),
    width = null,
    height = null,
    showLegend = true,
    tooltips = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
    },
    x,
    y,
    yDomain1,
    yDomain2; //can be accessed via chart.lines.[x/y]Scale()

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var x = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    yScale1 = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    yScale2 = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    lines1 = nv.models.line().yScale(yScale1),
    lines2 = nv.models.line().yScale(yScale2),
    bars1 = nv.models.multiBar().stacked(false).yScale(yScale1),
    bars2 = nv.models.multiBar().stacked(false).yScale(yScale2),
    stack1 = nv.models.stackedArea().yScale(yScale1),
    stack2 = nv.models.stackedArea().yScale(yScale2),
    xAxis = nv.models.axis().scale(x).orient('bottom').tickPadding(5),
    yAxis1 = nv.models.axis().scale(yScale1).orient('left'),
    yAxis2 = nv.models.axis().scale(yScale2).orient('right'),
    legend = nv.models.legend().height(30),
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide');
  var showTooltip = function showTooltip(e, offsetElement) {
    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      x = xAxis.tickFormat()(lines1.x()(e.point, e.pointIndex)),
      y = (e.series.yAxis == 2 ? yAxis2 : yAxis1).tickFormat()(lines1.y()(e.point, e.pointIndex)),
      content = tooltip(e.series.key, x, y, e, chart);
    nv.tooltip.show([left, top], content, undefined, undefined, offsetElement.offsetParent);
  };
  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      chart.update = function () {
        container.transition().call(chart);
      };
      chart.container = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      var dataLines1 = data.filter(function (d) {
        return !d.disabled && d.type == 'line' && d.yAxis == 1;
      });
      var dataLines2 = data.filter(function (d) {
        return !d.disabled && d.type == 'line' && d.yAxis == 2;
      });
      var dataBars1 = data.filter(function (d) {
        return !d.disabled && d.type == 'bar' && d.yAxis == 1;
      });
      var dataBars2 = data.filter(function (d) {
        return !d.disabled && d.type == 'bar' && d.yAxis == 2;
      });
      var dataStack1 = data.filter(function (d) {
        return !d.disabled && d.type == 'area' && d.yAxis == 1;
      });
      var dataStack2 = data.filter(function (d) {
        return !d.disabled && d.type == 'area' && d.yAxis == 2;
      });
      var series1 = data.filter(function (d) {
        return !d.disabled && d.yAxis == 1;
      }).map(function (d) {
        return d.values.map(function (d, i) {
          return {
            x: d.x,
            y: d.y
          };
        });
      });
      var series2 = data.filter(function (d) {
        return !d.disabled && d.yAxis == 2;
      }).map(function (d) {
        return d.values.map(function (d, i) {
          return {
            x: d.x,
            y: d.y
          };
        });
      });
      x.domain(d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(series1.concat(series2)), function (d) {
        return d.x;
      })).range([0, availableWidth]);
      var wrap = container.selectAll('g.wrap.multiChart').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'wrap nvd3 multiChart').append('g');
      gEnter.append('g').attr('class', 'x axis');
      gEnter.append('g').attr('class', 'y1 axis');
      gEnter.append('g').attr('class', 'y2 axis');
      gEnter.append('g').attr('class', 'lines1Wrap');
      gEnter.append('g').attr('class', 'lines2Wrap');
      gEnter.append('g').attr('class', 'bars1Wrap');
      gEnter.append('g').attr('class', 'bars2Wrap');
      gEnter.append('g').attr('class', 'stack1Wrap');
      gEnter.append('g').attr('class', 'stack2Wrap');
      gEnter.append('g').attr('class', 'legendWrap');
      var g = wrap.select('g');
      if (showLegend) {
        legend.width(availableWidth / 2);
        g.select('.legendWrap').datum(data.map(function (series) {
          series.originalKey = series.originalKey === undefined ? series.key : series.originalKey;
          series.key = series.originalKey + (series.yAxis == 1 ? '' : ' (right axis)');
          return series;
        })).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        g.select('.legendWrap').attr('transform', 'translate(' + availableWidth / 2 + ',' + -margin.top + ')');
      }
      lines1.width(availableWidth).height(availableHeight).interpolate("monotone").color(data.map(function (d, i) {
        return d.color || color[i % color.length];
      }).filter(function (d, i) {
        return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'line';
      }));
      lines2.width(availableWidth).height(availableHeight).interpolate("monotone").color(data.map(function (d, i) {
        return d.color || color[i % color.length];
      }).filter(function (d, i) {
        return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'line';
      }));
      bars1.width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color[i % color.length];
      }).filter(function (d, i) {
        return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'bar';
      }));
      bars2.width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color[i % color.length];
      }).filter(function (d, i) {
        return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'bar';
      }));
      stack1.width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color[i % color.length];
      }).filter(function (d, i) {
        return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'area';
      }));
      stack2.width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color[i % color.length];
      }).filter(function (d, i) {
        return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'area';
      }));
      g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      var lines1Wrap = g.select('.lines1Wrap').datum(dataLines1);
      var bars1Wrap = g.select('.bars1Wrap').datum(dataBars1);
      var stack1Wrap = g.select('.stack1Wrap').datum(dataStack1);
      var lines2Wrap = g.select('.lines2Wrap').datum(dataLines2);
      var bars2Wrap = g.select('.bars2Wrap').datum(dataBars2);
      var stack2Wrap = g.select('.stack2Wrap').datum(dataStack2);
      var extraValue1 = dataStack1.length ? dataStack1.map(function (a) {
        return a.values;
      }).reduce(function (a, b) {
        return a.map(function (aVal, i) {
          return {
            x: aVal.x,
            y: aVal.y + b[i].y
          };
        });
      }).concat([{
        x: 0,
        y: 0
      }]) : [];
      var extraValue2 = dataStack2.length ? dataStack2.map(function (a) {
        return a.values;
      }).reduce(function (a, b) {
        return a.map(function (aVal, i) {
          return {
            x: aVal.x,
            y: aVal.y + b[i].y
          };
        });
      }).concat([{
        x: 0,
        y: 0
      }]) : [];
      yScale1.domain(yDomain1 || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(series1).concat(extraValue1), function (d) {
        return d.y;
      })).range([0, availableHeight]);
      yScale2.domain(yDomain2 || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(series2).concat(extraValue2), function (d) {
        return d.y;
      })).range([0, availableHeight]);
      lines1.yDomain(yScale1.domain());
      bars1.yDomain(yScale1.domain());
      stack1.yDomain(yScale1.domain());
      lines2.yDomain(yScale2.domain());
      bars2.yDomain(yScale2.domain());
      stack2.yDomain(yScale2.domain());
      if (dataStack1.length) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(stack1Wrap).call(stack1);
      }
      if (dataStack2.length) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(stack2Wrap).call(stack2);
      }
      if (dataBars1.length) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(bars1Wrap).call(bars1);
      }
      if (dataBars2.length) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(bars2Wrap).call(bars2);
      }
      if (dataLines1.length) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(lines1Wrap).call(lines1);
      }
      if (dataLines2.length) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(lines2Wrap).call(lines2);
      }
      xAxis.ticks(availableWidth / 100).tickSize(-availableHeight, 0);
      g.select('.x.axis').attr('transform', 'translate(0,' + availableHeight + ')');
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(g.select('.x.axis')).call(xAxis);
      yAxis1.ticks(availableHeight / 36).tickSize(-availableWidth, 0);
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(g.select('.y1.axis')).call(yAxis1);
      yAxis2.ticks(availableHeight / 36).tickSize(-availableWidth, 0);
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(g.select('.y2.axis')).call(yAxis2);
      g.select('.y2.axis').style('opacity', series2.length ? 1 : 0).attr('transform', 'translate(' + x.range()[1] + ',0)');
      legend.dispatch.on('stateChange', function (newState) {
        chart.update();
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  lines1.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  lines1.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  lines2.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  lines2.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  bars1.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  bars1.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  bars2.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  bars2.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  stack1.dispatch.on('tooltipShow', function (e) {
    //disable tooltips when value ~= 0
    //// TODO: consider removing points from voronoi that have 0 value instead of this hack
    if (!Math.round(stack1.y()(e.point) * 100)) {
      // 100 will not be good for very small numbers... will have to think about making this valu dynamic, based on data range
      setTimeout(function () {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().selectAll('.point.hover').classed('hover', false);
      }, 0);
      return false;
    }
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top], dispatch.tooltipShow(e);
  });
  stack1.dispatch.on('tooltipHide', function (e) {
    dispatch.tooltipHide(e);
  });
  stack2.dispatch.on('tooltipShow', function (e) {
    //disable tooltips when value ~= 0
    //// TODO: consider removing points from voronoi that have 0 value instead of this hack
    if (!Math.round(stack2.y()(e.point) * 100)) {
      // 100 will not be good for very small numbers... will have to think about making this valu dynamic, based on data range
      setTimeout(function () {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().selectAll('.point.hover').classed('hover', false);
      }, 0);
      return false;
    }
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top], dispatch.tooltipShow(e);
  });
  stack2.dispatch.on('tooltipHide', function (e) {
    dispatch.tooltipHide(e);
  });
  lines1.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  lines1.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  lines2.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  lines2.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================
  // Global getters and setters
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.lines1 = lines1;
  chart.lines2 = lines2;
  chart.bars1 = bars1;
  chart.bars2 = bars2;
  chart.stack1 = stack1;
  chart.stack2 = stack2;
  chart.xAxis = xAxis;
  chart.yAxis1 = yAxis1;
  chart.yAxis2 = yAxis2;
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = _;
    lines1.x(_);
    bars1.x(_);
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = _;
    lines1.y(_);
    bars1.y(_);
    return chart;
  };
  chart.yDomain1 = function (_) {
    if (!arguments.length) return yDomain1;
    yDomain1 = _;
    return chart;
  };
  chart.yDomain2 = function (_) {
    if (!arguments.length) return yDomain2;
    yDomain2 = _;
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin = _;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = _;
    legend.color(_);
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  return chart;
};
nv.models.ohlcBar = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 960,
    height = 500,
    id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
    ,
    x = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    y = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    getX = function getX(d) {
      return d.x;
    },
    getY = function getY(d) {
      return d.y;
    },
    getOpen = function getOpen(d) {
      return d.open;
    },
    getClose = function getClose(d) {
      return d.close;
    },
    getHigh = function getHigh(d) {
      return d.high;
    },
    getLow = function getLow(d) {
      return d.low;
    },
    forceX = [],
    forceY = [],
    padData = false // If true, adds half a data points width to front and back, for lining up a line chart with a bar chart
    ,
    clipEdge = true,
    color = nv.utils.defaultColor(),
    xDomain,
    yDomain,
    xRange,
    yRange,
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout');

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  //TODO: store old scales for transitions

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableWidth = width - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);

      //------------------------------------------------------------
      // Setup Scales

      x.domain(xDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(data[0].values.map(getX).concat(forceX)));
      if (padData) x.range(xRange || [availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5) / data[0].values.length]);else x.range(xRange || [0, availableWidth]);
      y.domain(yDomain || [d3v3__WEBPACK_IMPORTED_MODULE_0___default().min(data[0].values.map(getLow).concat(forceY)), d3v3__WEBPACK_IMPORTED_MODULE_0___default().max(data[0].values.map(getHigh).concat(forceY))]).range(yRange || [availableHeight, 0]);

      // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
      if (x.domain()[0] === x.domain()[1]) x.domain()[0] ? x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01]) : x.domain([-1, 1]);
      if (y.domain()[0] === y.domain()[1]) y.domain()[0] ? y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01]) : y.domain([-1, 1]);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).selectAll('g.nv-wrap.nv-ohlcBar').data([data[0].values]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-ohlcBar');
      var defsEnter = wrapEnter.append('defs');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-ticks');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      container.on('click', function (d, i) {
        dispatch.chartClick({
          data: d,
          index: i,
          pos: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event),
          id: id
        });
      });
      defsEnter.append('clipPath').attr('id', 'nv-chart-clip-path-' + id).append('rect');
      wrap.select('#nv-chart-clip-path-' + id + ' rect').attr('width', availableWidth).attr('height', availableHeight);
      g.attr('clip-path', clipEdge ? 'url(#nv-chart-clip-path-' + id + ')' : '');
      var ticks = wrap.select('.nv-ticks').selectAll('.nv-tick').data(function (d) {
        return d;
      });
      ticks.exit().remove();
      var ticksEnter = ticks.enter().append('path').attr('class', function (d, i, j) {
        return (getOpen(d, i) > getClose(d, i) ? 'nv-tick negative' : 'nv-tick positive') + ' nv-tick-' + j + '-' + i;
      }).attr('d', function (d, i) {
        var w = availableWidth / data[0].values.length * .9;
        return 'm0,0l0,' + (y(getOpen(d, i)) - y(getHigh(d, i))) + 'l' + -w / 2 + ',0l' + w / 2 + ',0l0,' + (y(getLow(d, i)) - y(getOpen(d, i))) + 'l0,' + (y(getClose(d, i)) - y(getLow(d, i))) + 'l' + w / 2 + ',0l' + -w / 2 + ',0z';
      }).attr('transform', function (d, i) {
        return 'translate(' + x(getX(d, i)) + ',' + y(getHigh(d, i)) + ')';
      })
      //.attr('fill', function(d,i) { return color[0]; })
      //.attr('stroke', function(d,i) { return color[0]; })
      //.attr('x', 0 )
      //.attr('y', function(d,i) {  return y(Math.max(0, getY(d,i))) })
      //.attr('height', function(d,i) { return Math.abs(y(getY(d,i)) - y(0)) })
      .on('mouseover', function (d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', true);
        dispatch.elementMouseover({
          point: d,
          series: data[0],
          pos: [x(getX(d, i)), y(getY(d, i))],
          // TODO: Figure out why the value appears to be shifted
          pointIndex: i,
          seriesIndex: 0,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
      }).on('mouseout', function (d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', false);
        dispatch.elementMouseout({
          point: d,
          series: data[0],
          pointIndex: i,
          seriesIndex: 0,
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event)
        });
      }).on('click', function (d, i) {
        dispatch.elementClick({
          //label: d[label],
          value: getY(d, i),
          data: d,
          index: i,
          pos: [x(getX(d, i)), y(getY(d, i))],
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event),
          id: id
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      }).on('dblclick', function (d, i) {
        dispatch.elementDblClick({
          //label: d[label],
          value: getY(d, i),
          data: d,
          index: i,
          pos: [x(getX(d, i)), y(getY(d, i))],
          e: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event),
          id: id
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      });
      ticks.attr('class', function (d, i, j) {
        return (getOpen(d, i) > getClose(d, i) ? 'nv-tick negative' : 'nv-tick positive') + ' nv-tick-' + j + '-' + i;
      });
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(ticks).attr('transform', function (d, i) {
        return 'translate(' + x(getX(d, i)) + ',' + y(getHigh(d, i)) + ')';
      }).attr('d', function (d, i) {
        var w = availableWidth / data[0].values.length * .9;
        return 'm0,0l0,' + (y(getOpen(d, i)) - y(getHigh(d, i))) + 'l' + -w / 2 + ',0l' + w / 2 + ',0l0,' + (y(getLow(d, i)) - y(getOpen(d, i))) + 'l0,' + (y(getClose(d, i)) - y(getLow(d, i))) + 'l' + w / 2 + ',0l' + -w / 2 + ',0z';
      });
      //.attr('width', (availableWidth / data[0].values.length) * .9 )

      //d3v3.transition(ticks)
      //.attr('y', function(d,i) {  return y(Math.max(0, getY(d,i))) })
      //.attr('height', function(d,i) { return Math.abs(y(getY(d,i)) - y(0)) });
      //.order();  // not sure if this makes any sense for this model
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = _;
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = _;
    return chart;
  };
  chart.open = function (_) {
    if (!arguments.length) return getOpen;
    getOpen = _;
    return chart;
  };
  chart.close = function (_) {
    if (!arguments.length) return getClose;
    getClose = _;
    return chart;
  };
  chart.high = function (_) {
    if (!arguments.length) return getHigh;
    getHigh = _;
    return chart;
  };
  chart.low = function (_) {
    if (!arguments.length) return getLow;
    getLow = _;
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.xScale = function (_) {
    if (!arguments.length) return x;
    x = _;
    return chart;
  };
  chart.yScale = function (_) {
    if (!arguments.length) return y;
    y = _;
    return chart;
  };
  chart.xDomain = function (_) {
    if (!arguments.length) return xDomain;
    xDomain = _;
    return chart;
  };
  chart.yDomain = function (_) {
    if (!arguments.length) return yDomain;
    yDomain = _;
    return chart;
  };
  chart.xRange = function (_) {
    if (!arguments.length) return xRange;
    xRange = _;
    return chart;
  };
  chart.yRange = function (_) {
    if (!arguments.length) return yRange;
    yRange = _;
    return chart;
  };
  chart.forceX = function (_) {
    if (!arguments.length) return forceX;
    forceX = _;
    return chart;
  };
  chart.forceY = function (_) {
    if (!arguments.length) return forceY;
    forceY = _;
    return chart;
  };
  chart.padData = function (_) {
    if (!arguments.length) return padData;
    padData = _;
    return chart;
  };
  chart.clipEdge = function (_) {
    if (!arguments.length) return clipEdge;
    clipEdge = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };
  chart.id = function (_) {
    if (!arguments.length) return id;
    id = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.pie = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 500,
    height = 500,
    getX = function getX(d) {
      return d.x;
    },
    getY = function getY(d) {
      return d.y;
    },
    getDescription = function getDescription(d) {
      return d.description;
    },
    id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
    ,
    color = nv.utils.defaultColor(),
    valueFormat = d3v3__WEBPACK_IMPORTED_MODULE_0___default().format(',.2f'),
    showLabels = true,
    pieLabelsOutside = true,
    donutLabelsOutside = false,
    labelType = "key",
    labelThreshold = .02 //if slice percentage is under this, don't show label
    ,
    donut = false,
    labelSunbeamLayout = false,
    startAngle = false,
    endAngle = false,
    donutRatio = 0.5,
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout');

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableWidth = width - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        radius = Math.min(availableWidth, availableHeight) / 2,
        arcRadius = radius - radius / 5,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      //var wrap = container.selectAll('.nv-wrap.nv-pie').data([data]);
      var wrap = container.selectAll('.nv-wrap.nv-pie').data(data);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-pie nv-chart-' + id);
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-pie');
      gEnter.append('g').attr('class', 'nv-pieLabels');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      g.select('.nv-pie').attr('transform', 'translate(' + availableWidth / 2 + ',' + availableHeight / 2 + ')');
      g.select('.nv-pieLabels').attr('transform', 'translate(' + availableWidth / 2 + ',' + availableHeight / 2 + ')');

      //------------------------------------------------------------

      container.on('click', function (d, i) {
        dispatch.chartClick({
          data: d,
          index: i,
          pos: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event),
          id: id
        });
      });
      var arc = d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.arc().outerRadius(arcRadius);
      if (startAngle) arc.startAngle(startAngle);
      if (endAngle) arc.endAngle(endAngle);
      if (donut) arc.innerRadius(radius * donutRatio);

      // Setup the Pie chart and choose the data element
      var pie = d3v3__WEBPACK_IMPORTED_MODULE_0___default().layout.pie().sort(null).value(function (d) {
        return d.disabled ? 0 : getY(d);
      });
      var slices = wrap.select('.nv-pie').selectAll('.nv-slice').data(pie);
      var pieLabels = wrap.select('.nv-pieLabels').selectAll('.nv-label').data(pie);
      slices.exit().remove();
      pieLabels.exit().remove();
      var ae = slices.enter().append('g').attr('class', 'nv-slice').on('mouseover', function (d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', true);
        dispatch.elementMouseover({
          label: getX(d.data),
          value: getY(d.data),
          point: d.data,
          pointIndex: i,
          pos: [(d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.pageX), (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.pageY)],
          id: id
        });
      }).on('mouseout', function (d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', false);
        dispatch.elementMouseout({
          label: getX(d.data),
          value: getY(d.data),
          point: d.data,
          index: i,
          id: id
        });
      }).on('click', function (d, i) {
        dispatch.elementClick({
          label: getX(d.data),
          value: getY(d.data),
          point: d.data,
          index: i,
          pos: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event),
          id: id
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      }).on('dblclick', function (d, i) {
        dispatch.elementDblClick({
          label: getX(d.data),
          value: getY(d.data),
          point: d.data,
          index: i,
          pos: (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event),
          id: id
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.stopPropagation();
      });
      slices.attr('fill', function (d, i) {
        return color(d, i);
      }).attr('stroke', function (d, i) {
        return color(d, i);
      });
      var paths = ae.append('path').each(function (d) {
        this._current = d;
      });
      //.attr('d', arc);

      slices.select('path').transition().attr('d', arc).attrTween('d', arcTween);
      if (showLabels) {
        // This does the normal label
        var labelsArc = d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.arc().innerRadius(0);
        if (pieLabelsOutside) {
          labelsArc = arc;
        }
        if (donutLabelsOutside) {
          labelsArc = d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.arc().outerRadius(arc.outerRadius());
        }
        pieLabels.enter().append("g").classed("nv-label", true).each(function (d, i) {
          var group = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);
          group.attr('transform', function (d) {
            if (labelSunbeamLayout) {
              d.outerRadius = arcRadius + 10; // Set Outer Coordinate
              d.innerRadius = arcRadius + 15; // Set Inner Coordinate
              var rotateAngle = (d.startAngle + d.endAngle) / 2 * (180 / Math.PI);
              if ((d.startAngle + d.endAngle) / 2 < Math.PI) {
                rotateAngle -= 90;
              } else {
                rotateAngle += 90;
              }
              return 'translate(' + labelsArc.centroid(d) + ') rotate(' + rotateAngle + ')';
            } else {
              d.outerRadius = radius + 10; // Set Outer Coordinate
              d.innerRadius = radius + 15; // Set Inner Coordinate
              return 'translate(' + labelsArc.centroid(d) + ')';
            }
          });
          group.append('rect').style('stroke', '#fff').style('fill', '#fff').attr("rx", 3).attr("ry", 3);
          group.append('text').style('text-anchor', labelSunbeamLayout ? (d.startAngle + d.endAngle) / 2 < Math.PI ? 'start' : 'end' : 'middle') //center the text on it's origin or begin/end if orthogonal aligned
          .style('fill', '#000');
        });
        var labelLocationHash = {};
        var avgHeight = 14;
        var avgWidth = 140;
        var createHashKey = function createHashKey(coordinates) {
          return Math.floor(coordinates[0] / avgWidth) * avgWidth + ',' + Math.floor(coordinates[1] / avgHeight) * avgHeight;
        };
        pieLabels.transition().attr('transform', function (d) {
          if (labelSunbeamLayout) {
            d.outerRadius = arcRadius + 10; // Set Outer Coordinate
            d.innerRadius = arcRadius + 15; // Set Inner Coordinate
            var rotateAngle = (d.startAngle + d.endAngle) / 2 * (180 / Math.PI);
            if ((d.startAngle + d.endAngle) / 2 < Math.PI) {
              rotateAngle -= 90;
            } else {
              rotateAngle += 90;
            }
            return 'translate(' + labelsArc.centroid(d) + ') rotate(' + rotateAngle + ')';
          } else {
            d.outerRadius = radius + 10; // Set Outer Coordinate
            d.innerRadius = radius + 15; // Set Inner Coordinate

            /*
            Overlapping pie labels are not good. What this attempts to do is, prevent overlapping.
            Each label location is hashed, and if a hash collision occurs, we assume an overlap.
            Adjust the label's y-position to remove the overlap.
            */
            var center = labelsArc.centroid(d);
            var hashKey = createHashKey(center);
            if (labelLocationHash[hashKey]) {
              center[1] -= avgHeight;
            }
            labelLocationHash[createHashKey(center)] = true;
            return 'translate(' + center + ')';
          }
        });
        pieLabels.select(".nv-label text").style('text-anchor', labelSunbeamLayout ? (d.startAngle + d.endAngle) / 2 < Math.PI ? 'start' : 'end' : 'middle') //center the text on it's origin or begin/end if orthogonal aligned
        .text(function (d, i) {
          var percent = (d.endAngle - d.startAngle) / (2 * Math.PI);
          var labelTypes = {
            "key": getX(d.data),
            "value": getY(d.data),
            "percent": d3v3__WEBPACK_IMPORTED_MODULE_0___default().format('%')(percent)
          };
          return d.value && percent > labelThreshold ? labelTypes[labelType] : '';
        });
      }

      // Computes the angle of an arc, converting from radians to degrees.
      function angle(d) {
        var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
        return a > 90 ? a - 180 : a;
      }
      function arcTween(a) {
        a.endAngle = isNaN(a.endAngle) ? 0 : a.endAngle;
        a.startAngle = isNaN(a.startAngle) ? 0 : a.startAngle;
        if (!donut) a.innerRadius = 0;
        var i = d3v3__WEBPACK_IMPORTED_MODULE_0___default().interpolate(this._current, a);
        this._current = i(0);
        return function (t) {
          return arc(i(t));
        };
      }
      function tweenPie(b) {
        b.innerRadius = 0;
        var i = d3v3__WEBPACK_IMPORTED_MODULE_0___default().interpolate({
          startAngle: 0,
          endAngle: 0
        }, b);
        return function (t) {
          return arc(i(t));
        };
      }
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.values = function (_) {
    nv.log("pie.values() is no longer supported.");
    return chart;
  };
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = _;
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(_);
    return chart;
  };
  chart.description = function (_) {
    if (!arguments.length) return getDescription;
    getDescription = _;
    return chart;
  };
  chart.showLabels = function (_) {
    if (!arguments.length) return showLabels;
    showLabels = _;
    return chart;
  };
  chart.labelSunbeamLayout = function (_) {
    if (!arguments.length) return labelSunbeamLayout;
    labelSunbeamLayout = _;
    return chart;
  };
  chart.donutLabelsOutside = function (_) {
    if (!arguments.length) return donutLabelsOutside;
    donutLabelsOutside = _;
    return chart;
  };
  chart.pieLabelsOutside = function (_) {
    if (!arguments.length) return pieLabelsOutside;
    pieLabelsOutside = _;
    return chart;
  };
  chart.labelType = function (_) {
    if (!arguments.length) return labelType;
    labelType = _;
    labelType = labelType || "key";
    return chart;
  };
  chart.donut = function (_) {
    if (!arguments.length) return donut;
    donut = _;
    return chart;
  };
  chart.donutRatio = function (_) {
    if (!arguments.length) return donutRatio;
    donutRatio = _;
    return chart;
  };
  chart.startAngle = function (_) {
    if (!arguments.length) return startAngle;
    startAngle = _;
    return chart;
  };
  chart.endAngle = function (_) {
    if (!arguments.length) return endAngle;
    endAngle = _;
    return chart;
  };
  chart.id = function (_) {
    if (!arguments.length) return id;
    id = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };
  chart.valueFormat = function (_) {
    if (!arguments.length) return valueFormat;
    valueFormat = _;
    return chart;
  };
  chart.labelThreshold = function (_) {
    if (!arguments.length) return labelThreshold;
    labelThreshold = _;
    return chart;
  };
  //============================================================

  return chart;
};
nv.models.pieChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var pie = nv.models.pie(),
    legend = nv.models.legend();
  var margin = {
      top: 30,
      right: 20,
      bottom: 20,
      left: 20
    },
    width = null,
    height = null,
    showLegend = true,
    color = nv.utils.defaultColor(),
    tooltips = true,
    tooltip = function tooltip(key, y, e, graph) {
      return '<h3>' + key + '</h3>' + '<p>' + y + '</p>';
    },
    state = {},
    defaultState = null,
    noData = "No Data Available.",
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState');

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var showTooltip = function showTooltip(e, offsetElement) {
    var tooltipLabel = pie.description()(e.point) || pie.x()(e.point);
    var left = e.pos[0] + (offsetElement && offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement && offsetElement.offsetTop || 0),
      y = pie.valueFormat()(pie.y()(e.point)),
      content = tooltip(tooltipLabel, y, e, chart);
    nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
  };

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        container.transition().call(chart);
      };
      chart.container = this;

      //set state.disabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });
      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) defaultState[key] = state[key].slice(0);else defaultState[key] = state[key];
        }
      }

      //------------------------------------------------------------
      // Display No Data message if there's nothing to show.

      if (!data || !data.length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-pieChart').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-pieChart').append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-pieWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        legend.width(availableWidth).key(pie.x());
        wrap.select('.nv-legendWrap').datum(data).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        wrap.select('.nv-legendWrap').attr('transform', 'translate(0,' + -margin.top + ')');
      }

      //------------------------------------------------------------

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------
      // Main Chart Component(s)

      pie.width(availableWidth).height(availableHeight);
      var pieWrap = g.select('.nv-pieWrap').datum([data]);
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().transition(pieWrap).call(pie);

      //------------------------------------------------------------

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      legend.dispatch.on('stateChange', function (newState) {
        state = newState;
        dispatch.stateChange(state);
        chart.update();
      });
      pie.dispatch.on('elementMouseout.tooltip', function (e) {
        dispatch.tooltipHide(e);
      });

      // Update chart from a state object passed to event handler
      dispatch.on('changeState', function (e) {
        if (typeof e.disabled !== 'undefined') {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });
          state.disabled = e.disabled;
        }
        chart.update();
      });

      //============================================================
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  pie.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
    dispatch.tooltipShow(e);
  });
  dispatch.on('tooltipShow', function (e) {
    if (tooltips) showTooltip(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.legend = legend;
  chart.dispatch = dispatch;
  chart.pie = pie;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, pie, 'valueFormat', 'values', 'x', 'y', 'description', 'id', 'showLabels', 'donutLabelsOutside', 'pieLabelsOutside', 'labelType', 'donut', 'donutRatio', 'labelThreshold');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    pie.color(color);
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.state = function (_) {
    if (!arguments.length) return state;
    state = _;
    return chart;
  };
  chart.defaultState = function (_) {
    if (!arguments.length) return defaultState;
    defaultState = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.scatter = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 960,
    height = 500,
    color = nv.utils.defaultColor() // chooses color
    ,
    id = Math.floor(Math.random() * 100000) //Create semi-unique ID incase user doesn't select one
    ,
    x = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    y = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    z = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear() //linear because d3v3.svg.shape.size is treated as area
    ,
    getX = function getX(d) {
      return d.x;
    } // accessor to get the x value
    ,
    getY = function getY(d) {
      return d.y;
    } // accessor to get the y value
    ,
    getSize = function getSize(d) {
      return d.size || 1;
    } // accessor to get the point size
    ,
    getShape = function getShape(d) {
      return d.shape || 'circle';
    } // accessor to get point shape
    ,
    onlyCircles = true // Set to false to use shapes
    ,
    forceX = [] // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
    ,
    forceY = [] // List of numbers to Force into the Y scale
    ,
    forceSize = [] // List of numbers to Force into the Size scale
    ,
    interactive = true // If true, plots a voronoi overlay for advanced point intersection
    ,
    pointKey = null,
    pointActive = function pointActive(d) {
      return !d.notActive;
    } // any points that return false will be filtered out
    ,
    padData = false // If true, adds half a data points width to front and back, for lining up a line chart with a bar chart
    ,
    padDataOuter = .1 //outerPadding to imitate ordinal scale outer padding
    ,
    clipEdge = false // if true, masks points within x and y scale
    ,
    clipVoronoi = true // if true, masks each point with a circle... can turn off to slightly increase performance
    ,
    clipRadius = function clipRadius() {
      return 25;
    } // function to get the radius for voronoi point clips
    ,
    xDomain = null // Override x domain (skips the calculation from data)
    ,
    yDomain = null // Override y domain
    ,
    xRange = null // Override x range
    ,
    yRange = null // Override y range
    ,
    sizeDomain = null // Override point size domain
    ,
    sizeRange = null,
    singlePoint = false,
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('elementClick', 'elementMouseover', 'elementMouseout'),
    useVoronoi = true;

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var x0,
    y0,
    z0 // used to store previous scales
    ,
    timeoutID,
    needsUpdate = false // Flag for when the points are visually updating, but the interactive layer is behind, to disable tooltips
  ;

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableWidth = width - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);

      //add series index to each data point for reference
      data.forEach(function (series, i) {
        series.values.forEach(function (point) {
          point.series = i;
        });
      });

      //------------------------------------------------------------
      // Setup Scales

      // remap and flatten the data for use in calculating the scales' domains
      var seriesData = xDomain && yDomain && sizeDomain ? [] :
      // if we know xDomain and yDomain and sizeDomain, no need to calculate.... if Size is constant remember to set sizeDomain to speed up performance
      d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(data.map(function (d) {
        return d.values.map(function (d, i) {
          return {
            x: getX(d, i),
            y: getY(d, i),
            size: getSize(d, i)
          };
        });
      }));
      x.domain(xDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(seriesData.map(function (d) {
        return d.x;
      }).concat(forceX)));
      if (padData && data[0]) x.range(xRange || [(availableWidth * padDataOuter + availableWidth) / (2 * data[0].values.length), availableWidth - availableWidth * (1 + padDataOuter) / (2 * data[0].values.length)]);
      //x.range([availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5)  / data[0].values.length ]);
      else x.range(xRange || [0, availableWidth]);
      y.domain(yDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(seriesData.map(function (d) {
        return d.y;
      }).concat(forceY))).range(yRange || [availableHeight, 0]);
      z.domain(sizeDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(seriesData.map(function (d) {
        return d.size;
      }).concat(forceSize))).range(sizeRange || [16, 256]);

      // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
      if (x.domain()[0] === x.domain()[1] || y.domain()[0] === y.domain()[1]) singlePoint = true;
      if (x.domain()[0] === x.domain()[1]) x.domain()[0] ? x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01]) : x.domain([-1, 1]);
      if (y.domain()[0] === y.domain()[1]) y.domain()[0] ? y.domain([y.domain()[0] - y.domain()[0] * 0.01, y.domain()[1] + y.domain()[1] * 0.01]) : y.domain([-1, 1]);
      if (isNaN(x.domain()[0])) {
        x.domain([-1, 1]);
      }
      if (isNaN(y.domain()[0])) {
        y.domain([-1, 1]);
      }
      x0 = x0 || x;
      y0 = y0 || y;
      z0 = z0 || z;

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-scatter').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-scatter nv-chart-' + id + (singlePoint ? ' nv-single-point' : ''));
      var defsEnter = wrapEnter.append('defs');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-groups');
      gEnter.append('g').attr('class', 'nv-point-paths');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      defsEnter.append('clipPath').attr('id', 'nv-edge-clip-' + id).append('rect');
      wrap.select('#nv-edge-clip-' + id + ' rect').attr('width', availableWidth).attr('height', availableHeight > 0 ? availableHeight : 0);
      g.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');
      function updateInteractiveLayer() {
        if (!interactive) return false;
        var eventElements;
        var vertices = d3v3__WEBPACK_IMPORTED_MODULE_0___default().merge(data.map(function (group, groupIndex) {
          return group.values.map(function (point, pointIndex) {
            // *Adding noise to make duplicates very unlikely
            // *Injecting series and point index for reference
            /* *Adding a 'jitter' to the points, because there's an issue in d3v3.geom.voronoi.
            */
            var pX = getX(point, pointIndex);
            var pY = getY(point, pointIndex);
            return [x(pX) + Math.random() * 1e-7, y(pY) + Math.random() * 1e-7, groupIndex, pointIndex, point]; //temp hack to add noise untill I think of a better way so there are no duplicates
          }).filter(function (pointArray, pointIndex) {
            return pointActive(pointArray[4], pointIndex); // Issue #237.. move filter to after map, so pointIndex is correct!
          });
        }));

        //inject series and point index for reference into voronoi
        if (useVoronoi === true) {
          if (clipVoronoi) {
            var pointClipsEnter = wrap.select('defs').selectAll('.nv-point-clips').data([id]).enter();
            pointClipsEnter.append('clipPath').attr('class', 'nv-point-clips').attr('id', 'nv-points-clip-' + id);
            var pointClips = wrap.select('#nv-points-clip-' + id).selectAll('circle').data(vertices);
            pointClips.enter().append('circle').attr('r', clipRadius);
            pointClips.exit().remove();
            pointClips.attr('cx', function (d) {
              return d[0];
            }).attr('cy', function (d) {
              return d[1];
            });
            wrap.select('.nv-point-paths').attr('clip-path', 'url(#nv-points-clip-' + id + ')');
          }
          if (vertices.length) {
            // Issue #283 - Adding 2 dummy points to the voronoi b/c voronoi requires min 3 points to work
            vertices.push([x.range()[0] - 20, y.range()[0] - 20, null, null]);
            vertices.push([x.range()[1] + 20, y.range()[1] + 20, null, null]);
            vertices.push([x.range()[0] - 20, y.range()[0] + 20, null, null]);
            vertices.push([x.range()[1] + 20, y.range()[1] - 20, null, null]);
          }
          var bounds = d3v3__WEBPACK_IMPORTED_MODULE_0___default().geom.polygon([[-10, -10], [-10, height + 10], [width + 10, height + 10], [width + 10, -10]]);
          var voronoi = d3v3__WEBPACK_IMPORTED_MODULE_0___default().geom.voronoi(vertices).map(function (d, i) {
            return {
              'data': bounds.clip(d),
              'series': vertices[i][2],
              'point': vertices[i][3]
            };
          });
          var pointPaths = wrap.select('.nv-point-paths').selectAll('path').data(voronoi);
          pointPaths.enter().append('path').attr('class', function (d, i) {
            return 'nv-path-' + i;
          });
          pointPaths.exit().remove();
          pointPaths.attr('d', function (d) {
            if (!d || !d.data || d.data.length === 0) return 'M 0 0';else return 'M' + d.data.join('L') + 'Z';
          });
          var mouseEventCallback = function mouseEventCallback(d, mDispatch) {
            if (needsUpdate) return 0;
            var series = data[d.series];
            if (typeof series === 'undefined') return;
            var point = series.values[d.point];
            mDispatch({
              point: point,
              series: series,
              pos: [x(getX(point, d.point)) + margin.left, y(getY(point, d.point)) + margin.top],
              seriesIndex: d.series,
              pointIndex: d.point
            });
          };
          pointPaths.on('click', function (d) {
            mouseEventCallback(d, dispatch.elementClick);
          }).on('mouseover', function (d) {
            mouseEventCallback(d, dispatch.elementMouseover);
          }).on('mouseout', function (d, i) {
            mouseEventCallback(d, dispatch.elementMouseout);
          });
        } else {
          /*
          // bring data in form needed for click handlers
          var dataWithPoints = vertices.map(function(d, i) {
              return {
                'data': d,
                'series': vertices[i][2],
                'point': vertices[i][3]
              }
            });
           */

          // add event handlers to points instead voronoi paths
          wrap.select('.nv-groups').selectAll('.nv-group').selectAll('.nv-point')
          //.data(dataWithPoints)
          //.style('pointer-events', 'auto') // recativate events, disabled by css
          .on('click', function (d, i) {
            //nv.log('test', d, i);
            if (needsUpdate || !data[d.series]) return 0; //check if this is a dummy point
            var series = data[d.series],
              point = series.values[i];
            dispatch.elementClick({
              point: point,
              series: series,
              pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
              seriesIndex: d.series,
              pointIndex: i
            });
          }).on('mouseover', function (d, i) {
            if (needsUpdate || !data[d.series]) return 0; //check if this is a dummy point
            var series = data[d.series],
              point = series.values[i];
            dispatch.elementMouseover({
              point: point,
              series: series,
              pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
              seriesIndex: d.series,
              pointIndex: i
            });
          }).on('mouseout', function (d, i) {
            if (needsUpdate || !data[d.series]) return 0; //check if this is a dummy point
            var series = data[d.series],
              point = series.values[i];
            dispatch.elementMouseout({
              point: point,
              series: series,
              seriesIndex: d.series,
              pointIndex: i
            });
          });
        }
        needsUpdate = false;
      }
      needsUpdate = true;
      var groups = wrap.select('.nv-groups').selectAll('.nv-group').data(function (d) {
        return d;
      }, function (d) {
        return d.key;
      });
      groups.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
      groups.exit().remove();
      groups.attr('class', function (d, i) {
        return 'nv-group nv-series-' + i;
      }).classed('hover', function (d) {
        return d.hover;
      });
      groups.transition().style('fill', function (d, i) {
        return color(d, i);
      }).style('stroke', function (d, i) {
        return color(d, i);
      }).style('stroke-opacity', 1).style('fill-opacity', .5);
      if (onlyCircles) {
        var points = groups.selectAll('circle.nv-point').data(function (d) {
          return d.values;
        }, pointKey);
        points.enter().append('circle').style('fill', function (d, i) {
          return d.color;
        }).style('stroke', function (d, i) {
          return d.color;
        }).attr('cx', function (d, i) {
          return nv.utils.NaNtoZero(x0(getX(d, i)));
        }).attr('cy', function (d, i) {
          return nv.utils.NaNtoZero(y0(getY(d, i)));
        }).attr('r', function (d, i) {
          return Math.sqrt(z(getSize(d, i)) / Math.PI);
        });
        points.exit().remove();
        groups.exit().selectAll('path.nv-point').transition().attr('cx', function (d, i) {
          return nv.utils.NaNtoZero(x(getX(d, i)));
        }).attr('cy', function (d, i) {
          return nv.utils.NaNtoZero(y(getY(d, i)));
        }).remove();
        points.each(function (d, i) {
          d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('nv-point', true).classed('nv-point-' + i, true).classed('hover', false);
        });
        points.transition().attr('cx', function (d, i) {
          return nv.utils.NaNtoZero(x(getX(d, i)));
        }).attr('cy', function (d, i) {
          return nv.utils.NaNtoZero(y(getY(d, i)));
        }).attr('r', function (d, i) {
          return Math.sqrt(z(getSize(d, i)) / Math.PI);
        });
      } else {
        var points = groups.selectAll('path.nv-point').data(function (d) {
          return d.values;
        });
        points.enter().append('path').style('fill', function (d, i) {
          return d.color;
        }).style('stroke', function (d, i) {
          return d.color;
        }).attr('transform', function (d, i) {
          return 'translate(' + x0(getX(d, i)) + ',' + y0(getY(d, i)) + ')';
        }).attr('d', d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.symbol().type(getShape).size(function (d, i) {
          return z(getSize(d, i));
        }));
        points.exit().remove();
        groups.exit().selectAll('path.nv-point').transition().attr('transform', function (d, i) {
          return 'translate(' + x(getX(d, i)) + ',' + y(getY(d, i)) + ')';
        }).remove();
        points.each(function (d, i) {
          d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('nv-point', true).classed('nv-point-' + i, true).classed('hover', false);
        });
        points.transition().attr('transform', function (d, i) {
          //nv.log(d,i,getX(d,i), x(getX(d,i)));
          return 'translate(' + x(getX(d, i)) + ',' + y(getY(d, i)) + ')';
        }).attr('d', d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.symbol().type(getShape).size(function (d, i) {
          return z(getSize(d, i));
        }));
      }

      // Delay updating the invisible interactive layer for smoother animation
      clearTimeout(timeoutID); // stop repeat calls to updateInteractiveLayer
      timeoutID = setTimeout(updateInteractiveLayer, 300);
      //updateInteractiveLayer();

      //store old scales for use in transitions on update
      x0 = x.copy();
      y0 = y.copy();
      z0 = z.copy();
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------
  chart.clearHighlights = function () {
    //Remove the 'hover' class from all highlighted points.
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().selectAll(".nv-chart-" + id + " .nv-point.hover").classed("hover", false);
  };
  chart.highlightPoint = function (seriesIndex, pointIndex, isHoverOver) {
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(".nv-chart-" + id + " .nv-series-" + seriesIndex + " .nv-point-" + pointIndex).classed("hover", isHoverOver);
  };
  dispatch.on('elementMouseover.point', function (d) {
    if (interactive) chart.highlightPoint(d.seriesIndex, d.pointIndex, true);
  });
  dispatch.on('elementMouseout.point', function (d) {
    if (interactive) chart.highlightPoint(d.seriesIndex, d.pointIndex, false);
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(_);
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(_);
    return chart;
  };
  chart.size = function (_) {
    if (!arguments.length) return getSize;
    getSize = d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(_);
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.xScale = function (_) {
    if (!arguments.length) return x;
    x = _;
    return chart;
  };
  chart.yScale = function (_) {
    if (!arguments.length) return y;
    y = _;
    return chart;
  };
  chart.zScale = function (_) {
    if (!arguments.length) return z;
    z = _;
    return chart;
  };
  chart.xDomain = function (_) {
    if (!arguments.length) return xDomain;
    xDomain = _;
    return chart;
  };
  chart.yDomain = function (_) {
    if (!arguments.length) return yDomain;
    yDomain = _;
    return chart;
  };
  chart.sizeDomain = function (_) {
    if (!arguments.length) return sizeDomain;
    sizeDomain = _;
    return chart;
  };
  chart.xRange = function (_) {
    if (!arguments.length) return xRange;
    xRange = _;
    return chart;
  };
  chart.yRange = function (_) {
    if (!arguments.length) return yRange;
    yRange = _;
    return chart;
  };
  chart.sizeRange = function (_) {
    if (!arguments.length) return sizeRange;
    sizeRange = _;
    return chart;
  };
  chart.forceX = function (_) {
    if (!arguments.length) return forceX;
    forceX = _;
    return chart;
  };
  chart.forceY = function (_) {
    if (!arguments.length) return forceY;
    forceY = _;
    return chart;
  };
  chart.forceSize = function (_) {
    if (!arguments.length) return forceSize;
    forceSize = _;
    return chart;
  };
  chart.interactive = function (_) {
    if (!arguments.length) return interactive;
    interactive = _;
    return chart;
  };
  chart.pointKey = function (_) {
    if (!arguments.length) return pointKey;
    pointKey = _;
    return chart;
  };
  chart.pointActive = function (_) {
    if (!arguments.length) return pointActive;
    pointActive = _;
    return chart;
  };
  chart.padData = function (_) {
    if (!arguments.length) return padData;
    padData = _;
    return chart;
  };
  chart.padDataOuter = function (_) {
    if (!arguments.length) return padDataOuter;
    padDataOuter = _;
    return chart;
  };
  chart.clipEdge = function (_) {
    if (!arguments.length) return clipEdge;
    clipEdge = _;
    return chart;
  };
  chart.clipVoronoi = function (_) {
    if (!arguments.length) return clipVoronoi;
    clipVoronoi = _;
    return chart;
  };
  chart.useVoronoi = function (_) {
    if (!arguments.length) return useVoronoi;
    useVoronoi = _;
    if (useVoronoi === false) {
      clipVoronoi = false;
    }
    return chart;
  };
  chart.clipRadius = function (_) {
    if (!arguments.length) return clipRadius;
    clipRadius = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };
  chart.shape = function (_) {
    if (!arguments.length) return getShape;
    getShape = _;
    return chart;
  };
  chart.onlyCircles = function (_) {
    if (!arguments.length) return onlyCircles;
    onlyCircles = _;
    return chart;
  };
  chart.id = function (_) {
    if (!arguments.length) return id;
    id = _;
    return chart;
  };
  chart.singlePoint = function (_) {
    if (!arguments.length) return singlePoint;
    singlePoint = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.scatterChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var scatter = nv.models.scatter(),
    xAxis = nv.models.axis(),
    yAxis = nv.models.axis(),
    legend = nv.models.legend(),
    controls = nv.models.legend(),
    distX = nv.models.distribution(),
    distY = nv.models.distribution();
  var margin = {
      top: 30,
      right: 20,
      bottom: 50,
      left: 75
    },
    width = null,
    height = null,
    color = nv.utils.defaultColor(),
    x = (d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye) ? d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye.scale((d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear)).distortion(0) : scatter.xScale(),
    y = (d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye) ? d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye.scale((d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear)).distortion(0) : scatter.yScale(),
    xPadding = 0,
    yPadding = 0,
    showDistX = false,
    showDistY = false,
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    rightAlignYAxis = false,
    showControls = !!(d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye),
    fisheye = 0,
    pauseFisheye = false,
    tooltips = true,
    tooltipX = function tooltipX(key, x, y) {
      return '<strong>' + x + '</strong>';
    },
    tooltipY = function tooltipY(key, x, y) {
      return '<strong>' + y + '</strong>';
    },
    tooltip = null,
    state = {},
    defaultState = null,
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState'),
    noData = "No Data Available.",
    transitionDuration = 250;
  scatter.xScale(x).yScale(y);
  xAxis.orient('bottom').tickPadding(10);
  yAxis.orient(rightAlignYAxis ? 'right' : 'left').tickPadding(10);
  distX.axis('x');
  distY.axis('y');
  controls.updateState(false);

  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var x0, y0;
  var showTooltip = function showTooltip(e, offsetElement) {
    //TODO: make tooltip style an option between single or dual on axes (maybe on all charts with axes?)

    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      leftX = e.pos[0] + (offsetElement.offsetLeft || 0),
      topX = y.range()[0] + margin.top + (offsetElement.offsetTop || 0),
      leftY = x.range()[0] + margin.left + (offsetElement.offsetLeft || 0),
      topY = e.pos[1] + (offsetElement.offsetTop || 0),
      xVal = xAxis.tickFormat()(scatter.x()(e.point, e.pointIndex)),
      yVal = yAxis.tickFormat()(scatter.y()(e.point, e.pointIndex));
    if (tooltipX != null) nv.tooltip.show([leftX, topX], tooltipX(e.series.key, xVal, yVal, e, chart), 'n', 1, offsetElement, 'x-nvtooltip');
    if (tooltipY != null) nv.tooltip.show([leftY, topY], tooltipY(e.series.key, xVal, yVal, e, chart), 'e', 1, offsetElement, 'y-nvtooltip');
    if (tooltip != null) nv.tooltip.show([left, top], tooltip(e.series.key, xVal, yVal, e, chart), e.value < 0 ? 'n' : 's', null, offsetElement);
  };
  var controlsData = [{
    key: 'Magnify',
    disabled: true
  }];

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        container.transition().duration(transitionDuration).call(chart);
      };
      chart.container = this;

      //set state.disabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });
      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) defaultState[key] = state[key].slice(0);else defaultState[key] = state[key];
        }
      }

      //------------------------------------------------------------
      // Display noData message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      x0 = x0 || x;
      y0 = y0 || y;

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-scatterChart').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-scatterChart nv-chart-' + scatter.id());
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');

      // background for pointer events
      gEnter.append('rect').attr('class', 'nvd3 nv-background');
      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis');
      gEnter.append('g').attr('class', 'nv-scatterWrap');
      gEnter.append('g').attr('class', 'nv-distWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');
      gEnter.append('g').attr('class', 'nv-controlsWrap');

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        var legendWidth = showControls ? availableWidth / 2 : availableWidth;
        legend.width(legendWidth);
        wrap.select('.nv-legendWrap').datum(data).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        wrap.select('.nv-legendWrap').attr('transform', 'translate(' + (availableWidth - legendWidth) + ',' + -margin.top + ')');
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Controls

      if (showControls) {
        controls.width(180).color(['#444']);
        g.select('.nv-controlsWrap').datum(controlsData).attr('transform', 'translate(0,' + -margin.top + ')').call(controls);
      }

      //------------------------------------------------------------

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      if (rightAlignYAxis) {
        g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
      }

      //------------------------------------------------------------
      // Main Chart Component(s)

      scatter.width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled;
      }));
      if (xPadding !== 0) scatter.xDomain(null);
      if (yPadding !== 0) scatter.yDomain(null);
      wrap.select('.nv-scatterWrap').datum(data.filter(function (d) {
        return !d.disabled;
      })).call(scatter);

      //Adjust for x and y padding
      if (xPadding !== 0) {
        var xRange = x.domain()[1] - x.domain()[0];
        scatter.xDomain([x.domain()[0] - xPadding * xRange, x.domain()[1] + xPadding * xRange]);
      }
      if (yPadding !== 0) {
        var yRange = y.domain()[1] - y.domain()[0];
        scatter.yDomain([y.domain()[0] - yPadding * yRange, y.domain()[1] + yPadding * yRange]);
      }

      //Only need to update the scatter again if x/yPadding changed the domain.
      if (yPadding !== 0 || xPadding !== 0) {
        wrap.select('.nv-scatterWrap').datum(data.filter(function (d) {
          return !d.disabled;
        })).call(scatter);
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Axes
      if (showXAxis) {
        xAxis.scale(x).ticks(xAxis.ticks() && xAxis.ticks().length ? xAxis.ticks() : availableWidth / 100).tickSize(-availableHeight, 0);
        g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')').call(xAxis);
      }
      if (showYAxis) {
        yAxis.scale(y).ticks(yAxis.ticks() && yAxis.ticks().length ? yAxis.ticks() : availableHeight / 36).tickSize(-availableWidth, 0);
        g.select('.nv-y.nv-axis').call(yAxis);
      }
      if (showDistX) {
        distX.getData(scatter.x()).scale(x).width(availableWidth).color(data.map(function (d, i) {
          return d.color || color(d, i);
        }).filter(function (d, i) {
          return !data[i].disabled;
        }));
        gEnter.select('.nv-distWrap').append('g').attr('class', 'nv-distributionX');
        g.select('.nv-distributionX').attr('transform', 'translate(0,' + y.range()[0] + ')').datum(data.filter(function (d) {
          return !d.disabled;
        })).call(distX);
      }
      if (showDistY) {
        distY.getData(scatter.y()).scale(y).width(availableHeight).color(data.map(function (d, i) {
          return d.color || color(d, i);
        }).filter(function (d, i) {
          return !data[i].disabled;
        }));
        gEnter.select('.nv-distWrap').append('g').attr('class', 'nv-distributionY');
        g.select('.nv-distributionY').attr('transform', 'translate(' + (rightAlignYAxis ? availableWidth : -distY.size()) + ',0)').datum(data.filter(function (d) {
          return !d.disabled;
        })).call(distY);
      }

      //------------------------------------------------------------

      if ((d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye)) {
        g.select('.nv-background').attr('width', availableWidth).attr('height', availableHeight);
        g.select('.nv-background').on('mousemove', updateFisheye);
        g.select('.nv-background').on('click', function () {
          pauseFisheye = !pauseFisheye;
        });
        scatter.dispatch.on('elementClick.freezeFisheye', function () {
          pauseFisheye = !pauseFisheye;
        });
      }
      function updateFisheye() {
        if (pauseFisheye) {
          g.select('.nv-point-paths').style('pointer-events', 'all');
          return false;
        }
        g.select('.nv-point-paths').style('pointer-events', 'none');
        var mouse = d3v3__WEBPACK_IMPORTED_MODULE_0___default().mouse(this);
        x.distortion(fisheye).focus(mouse[0]);
        y.distortion(fisheye).focus(mouse[1]);
        g.select('.nv-scatterWrap').call(scatter);
        if (showXAxis) g.select('.nv-x.nv-axis').call(xAxis);
        if (showYAxis) g.select('.nv-y.nv-axis').call(yAxis);
        g.select('.nv-distributionX').datum(data.filter(function (d) {
          return !d.disabled;
        })).call(distX);
        g.select('.nv-distributionY').datum(data.filter(function (d) {
          return !d.disabled;
        })).call(distY);
      }

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      controls.dispatch.on('legendClick', function (d, i) {
        d.disabled = !d.disabled;
        fisheye = d.disabled ? 0 : 2.5;
        g.select('.nv-background').style('pointer-events', d.disabled ? 'none' : 'all');
        g.select('.nv-point-paths').style('pointer-events', d.disabled ? 'all' : 'none');
        if (d.disabled) {
          x.distortion(fisheye).focus(0);
          y.distortion(fisheye).focus(0);
          g.select('.nv-scatterWrap').call(scatter);
          g.select('.nv-x.nv-axis').call(xAxis);
          g.select('.nv-y.nv-axis').call(yAxis);
        } else {
          pauseFisheye = false;
        }
        chart.update();
      });
      legend.dispatch.on('stateChange', function (newState) {
        state.disabled = newState.disabled;
        dispatch.stateChange(state);
        chart.update();
      });
      scatter.dispatch.on('elementMouseover.tooltip', function (e) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-distx-' + e.pointIndex).attr('y1', function (d, i) {
          return e.pos[1] - availableHeight;
        });
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-disty-' + e.pointIndex).attr('x2', e.pos[0] + distX.size());
        e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
        dispatch.tooltipShow(e);
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });

      // Update chart from a state object passed to event handler
      dispatch.on('changeState', function (e) {
        if (typeof e.disabled !== 'undefined') {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });
          state.disabled = e.disabled;
        }
        chart.update();
      });

      //============================================================

      //store old scales for use in transitions on update
      x0 = x.copy();
      y0 = y.copy();
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  scatter.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-distx-' + e.pointIndex).attr('y1', 0);
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-disty-' + e.pointIndex).attr('x2', distY.size());
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.scatter = scatter;
  chart.legend = legend;
  chart.controls = controls;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  chart.distX = distX;
  chart.distY = distY;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, scatter, 'id', 'interactive', 'pointActive', 'x', 'y', 'shape', 'size', 'xScale', 'yScale', 'zScale', 'xDomain', 'yDomain', 'xRange', 'yRange', 'sizeDomain', 'sizeRange', 'forceX', 'forceY', 'forceSize', 'clipVoronoi', 'clipRadius', 'useVoronoi');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    distX.color(color);
    distY.color(color);
    return chart;
  };
  chart.showDistX = function (_) {
    if (!arguments.length) return showDistX;
    showDistX = _;
    return chart;
  };
  chart.showDistY = function (_) {
    if (!arguments.length) return showDistY;
    showDistY = _;
    return chart;
  };
  chart.showControls = function (_) {
    if (!arguments.length) return showControls;
    showControls = _;
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.showXAxis = function (_) {
    if (!arguments.length) return showXAxis;
    showXAxis = _;
    return chart;
  };
  chart.showYAxis = function (_) {
    if (!arguments.length) return showYAxis;
    showYAxis = _;
    return chart;
  };
  chart.rightAlignYAxis = function (_) {
    if (!arguments.length) return rightAlignYAxis;
    rightAlignYAxis = _;
    yAxis.orient(_ ? 'right' : 'left');
    return chart;
  };
  chart.fisheye = function (_) {
    if (!arguments.length) return fisheye;
    fisheye = _;
    return chart;
  };
  chart.xPadding = function (_) {
    if (!arguments.length) return xPadding;
    xPadding = _;
    return chart;
  };
  chart.yPadding = function (_) {
    if (!arguments.length) return yPadding;
    yPadding = _;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.tooltipXContent = function (_) {
    if (!arguments.length) return tooltipX;
    tooltipX = _;
    return chart;
  };
  chart.tooltipYContent = function (_) {
    if (!arguments.length) return tooltipY;
    tooltipY = _;
    return chart;
  };
  chart.state = function (_) {
    if (!arguments.length) return state;
    state = _;
    return chart;
  };
  chart.defaultState = function (_) {
    if (!arguments.length) return defaultState;
    defaultState = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };
  chart.transitionDuration = function (_) {
    if (!arguments.length) return transitionDuration;
    transitionDuration = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.scatterPlusLineChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var scatter = nv.models.scatter(),
    xAxis = nv.models.axis(),
    yAxis = nv.models.axis(),
    legend = nv.models.legend(),
    controls = nv.models.legend(),
    distX = nv.models.distribution(),
    distY = nv.models.distribution();
  var margin = {
      top: 30,
      right: 20,
      bottom: 50,
      left: 75
    },
    width = null,
    height = null,
    color = nv.utils.defaultColor(),
    x = (d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye) ? d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye.scale((d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear)).distortion(0) : scatter.xScale(),
    y = (d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye) ? d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye.scale((d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear)).distortion(0) : scatter.yScale(),
    showDistX = false,
    showDistY = false,
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    rightAlignYAxis = false,
    showControls = !!(d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye),
    fisheye = 0,
    pauseFisheye = false,
    tooltips = true,
    tooltipX = function tooltipX(key, x, y) {
      return '<strong>' + x + '</strong>';
    },
    tooltipY = function tooltipY(key, x, y) {
      return '<strong>' + y + '</strong>';
    },
    tooltip = function tooltip(key, x, y, date) {
      return '<h3>' + key + '</h3>' + '<p>' + date + '</p>';
    },
    state = {},
    defaultState = null,
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState'),
    noData = "No Data Available.",
    transitionDuration = 250;
  scatter.xScale(x).yScale(y);
  xAxis.orient('bottom').tickPadding(10);
  yAxis.orient(rightAlignYAxis ? 'right' : 'left').tickPadding(10);
  distX.axis('x');
  distY.axis('y');
  controls.updateState(false);
  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var x0, y0;
  var showTooltip = function showTooltip(e, offsetElement) {
    //TODO: make tooltip style an option between single or dual on axes (maybe on all charts with axes?)

    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      leftX = e.pos[0] + (offsetElement.offsetLeft || 0),
      topX = y.range()[0] + margin.top + (offsetElement.offsetTop || 0),
      leftY = x.range()[0] + margin.left + (offsetElement.offsetLeft || 0),
      topY = e.pos[1] + (offsetElement.offsetTop || 0),
      xVal = xAxis.tickFormat()(scatter.x()(e.point, e.pointIndex)),
      yVal = yAxis.tickFormat()(scatter.y()(e.point, e.pointIndex));
    if (tooltipX != null) nv.tooltip.show([leftX, topX], tooltipX(e.series.key, xVal, yVal, e, chart), 'n', 1, offsetElement, 'x-nvtooltip');
    if (tooltipY != null) nv.tooltip.show([leftY, topY], tooltipY(e.series.key, xVal, yVal, e, chart), 'e', 1, offsetElement, 'y-nvtooltip');
    if (tooltip != null) nv.tooltip.show([left, top], tooltip(e.series.key, xVal, yVal, e.point.tooltip, e, chart), e.value < 0 ? 'n' : 's', null, offsetElement);
  };
  var controlsData = [{
    key: 'Magnify',
    disabled: true
  }];

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        container.transition().duration(transitionDuration).call(chart);
      };
      chart.container = this;

      //set state.disabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });
      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) defaultState[key] = state[key].slice(0);else defaultState[key] = state[key];
        }
      }

      //------------------------------------------------------------
      // Display noData message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      x = scatter.xScale();
      y = scatter.yScale();
      x0 = x0 || x;
      y0 = y0 || y;

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-scatterChart').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-scatterChart nv-chart-' + scatter.id());
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');

      // background for pointer events
      gEnter.append('rect').attr('class', 'nvd3 nv-background').style("pointer-events", "none");
      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis');
      gEnter.append('g').attr('class', 'nv-scatterWrap');
      gEnter.append('g').attr('class', 'nv-regressionLinesWrap');
      gEnter.append('g').attr('class', 'nv-distWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');
      gEnter.append('g').attr('class', 'nv-controlsWrap');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      if (rightAlignYAxis) {
        g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        legend.width(availableWidth / 2);
        wrap.select('.nv-legendWrap').datum(data).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        wrap.select('.nv-legendWrap').attr('transform', 'translate(' + availableWidth / 2 + ',' + -margin.top + ')');
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Controls

      if (showControls) {
        controls.width(180).color(['#444']);
        g.select('.nv-controlsWrap').datum(controlsData).attr('transform', 'translate(0,' + -margin.top + ')').call(controls);
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Main Chart Component(s)

      scatter.width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled;
      }));
      wrap.select('.nv-scatterWrap').datum(data.filter(function (d) {
        return !d.disabled;
      })).call(scatter);
      wrap.select('.nv-regressionLinesWrap').attr('clip-path', 'url(#nv-edge-clip-' + scatter.id() + ')');
      var regWrap = wrap.select('.nv-regressionLinesWrap').selectAll('.nv-regLines').data(function (d) {
        return d;
      });
      regWrap.enter().append('g').attr('class', 'nv-regLines');
      var regLine = regWrap.selectAll('.nv-regLine').data(function (d) {
        return [d];
      });
      var regLineEnter = regLine.enter().append('line').attr('class', 'nv-regLine').style('stroke-opacity', 0);
      regLine.transition().attr('x1', x.range()[0]).attr('x2', x.range()[1]).attr('y1', function (d, i) {
        return y(x.domain()[0] * d.slope + d.intercept);
      }).attr('y2', function (d, i) {
        return y(x.domain()[1] * d.slope + d.intercept);
      }).style('stroke', function (d, i, j) {
        return color(d, j);
      }).style('stroke-opacity', function (d, i) {
        return d.disabled || typeof d.slope === 'undefined' || typeof d.intercept === 'undefined' ? 0 : 1;
      });

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Axes

      if (showXAxis) {
        xAxis.scale(x).ticks(xAxis.ticks() ? xAxis.ticks() : availableWidth / 100).tickSize(-availableHeight, 0);
        g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')').call(xAxis);
      }
      if (showYAxis) {
        yAxis.scale(y).ticks(yAxis.ticks() ? yAxis.ticks() : availableHeight / 36).tickSize(-availableWidth, 0);
        g.select('.nv-y.nv-axis').call(yAxis);
      }
      if (showDistX) {
        distX.getData(scatter.x()).scale(x).width(availableWidth).color(data.map(function (d, i) {
          return d.color || color(d, i);
        }).filter(function (d, i) {
          return !data[i].disabled;
        }));
        gEnter.select('.nv-distWrap').append('g').attr('class', 'nv-distributionX');
        g.select('.nv-distributionX').attr('transform', 'translate(0,' + y.range()[0] + ')').datum(data.filter(function (d) {
          return !d.disabled;
        })).call(distX);
      }
      if (showDistY) {
        distY.getData(scatter.y()).scale(y).width(availableHeight).color(data.map(function (d, i) {
          return d.color || color(d, i);
        }).filter(function (d, i) {
          return !data[i].disabled;
        }));
        gEnter.select('.nv-distWrap').append('g').attr('class', 'nv-distributionY');
        g.select('.nv-distributionY').attr('transform', 'translate(' + (rightAlignYAxis ? availableWidth : -distY.size()) + ',0)').datum(data.filter(function (d) {
          return !d.disabled;
        })).call(distY);
      }

      //------------------------------------------------------------

      if ((d3v3__WEBPACK_IMPORTED_MODULE_0___default().fisheye)) {
        g.select('.nv-background').attr('width', availableWidth).attr('height', availableHeight);
        g.select('.nv-background').on('mousemove', updateFisheye);
        g.select('.nv-background').on('click', function () {
          pauseFisheye = !pauseFisheye;
        });
        scatter.dispatch.on('elementClick.freezeFisheye', function () {
          pauseFisheye = !pauseFisheye;
        });
      }
      function updateFisheye() {
        if (pauseFisheye) {
          g.select('.nv-point-paths').style('pointer-events', 'all');
          return false;
        }
        g.select('.nv-point-paths').style('pointer-events', 'none');
        var mouse = d3v3__WEBPACK_IMPORTED_MODULE_0___default().mouse(this);
        x.distortion(fisheye).focus(mouse[0]);
        y.distortion(fisheye).focus(mouse[1]);
        g.select('.nv-scatterWrap').datum(data.filter(function (d) {
          return !d.disabled;
        })).call(scatter);
        if (showXAxis) g.select('.nv-x.nv-axis').call(xAxis);
        if (showYAxis) g.select('.nv-y.nv-axis').call(yAxis);
        g.select('.nv-distributionX').datum(data.filter(function (d) {
          return !d.disabled;
        })).call(distX);
        g.select('.nv-distributionY').datum(data.filter(function (d) {
          return !d.disabled;
        })).call(distY);
      }

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      controls.dispatch.on('legendClick', function (d, i) {
        d.disabled = !d.disabled;
        fisheye = d.disabled ? 0 : 2.5;
        g.select('.nv-background').style('pointer-events', d.disabled ? 'none' : 'all');
        g.select('.nv-point-paths').style('pointer-events', d.disabled ? 'all' : 'none');
        if (d.disabled) {
          x.distortion(fisheye).focus(0);
          y.distortion(fisheye).focus(0);
          g.select('.nv-scatterWrap').call(scatter);
          g.select('.nv-x.nv-axis').call(xAxis);
          g.select('.nv-y.nv-axis').call(yAxis);
        } else {
          pauseFisheye = false;
        }
        chart.update();
      });
      legend.dispatch.on('stateChange', function (newState) {
        state = newState;
        dispatch.stateChange(state);
        chart.update();
      });
      scatter.dispatch.on('elementMouseover.tooltip', function (e) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-distx-' + e.pointIndex).attr('y1', e.pos[1] - availableHeight);
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-disty-' + e.pointIndex).attr('x2', e.pos[0] + distX.size());
        e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
        dispatch.tooltipShow(e);
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });

      // Update chart from a state object passed to event handler
      dispatch.on('changeState', function (e) {
        if (typeof e.disabled !== 'undefined') {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });
          state.disabled = e.disabled;
        }
        chart.update();
      });

      //============================================================

      //store old scales for use in transitions on update
      x0 = x.copy();
      y0 = y.copy();
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  scatter.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-distx-' + e.pointIndex).attr('y1', 0);
    d3v3__WEBPACK_IMPORTED_MODULE_0___default().select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-disty-' + e.pointIndex).attr('x2', distY.size());
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.scatter = scatter;
  chart.legend = legend;
  chart.controls = controls;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  chart.distX = distX;
  chart.distY = distY;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, scatter, 'id', 'interactive', 'pointActive', 'x', 'y', 'shape', 'size', 'xScale', 'yScale', 'zScale', 'xDomain', 'yDomain', 'xRange', 'yRange', 'sizeDomain', 'sizeRange', 'forceX', 'forceY', 'forceSize', 'clipVoronoi', 'clipRadius', 'useVoronoi');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    distX.color(color);
    distY.color(color);
    return chart;
  };
  chart.showDistX = function (_) {
    if (!arguments.length) return showDistX;
    showDistX = _;
    return chart;
  };
  chart.showDistY = function (_) {
    if (!arguments.length) return showDistY;
    showDistY = _;
    return chart;
  };
  chart.showControls = function (_) {
    if (!arguments.length) return showControls;
    showControls = _;
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.showXAxis = function (_) {
    if (!arguments.length) return showXAxis;
    showXAxis = _;
    return chart;
  };
  chart.showYAxis = function (_) {
    if (!arguments.length) return showYAxis;
    showYAxis = _;
    return chart;
  };
  chart.rightAlignYAxis = function (_) {
    if (!arguments.length) return rightAlignYAxis;
    rightAlignYAxis = _;
    yAxis.orient(_ ? 'right' : 'left');
    return chart;
  };
  chart.fisheye = function (_) {
    if (!arguments.length) return fisheye;
    fisheye = _;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.tooltipXContent = function (_) {
    if (!arguments.length) return tooltipX;
    tooltipX = _;
    return chart;
  };
  chart.tooltipYContent = function (_) {
    if (!arguments.length) return tooltipY;
    tooltipY = _;
    return chart;
  };
  chart.state = function (_) {
    if (!arguments.length) return state;
    state = _;
    return chart;
  };
  chart.defaultState = function (_) {
    if (!arguments.length) return defaultState;
    defaultState = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };
  chart.transitionDuration = function (_) {
    if (!arguments.length) return transitionDuration;
    transitionDuration = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.sparkline = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 2,
      right: 0,
      bottom: 2,
      left: 0
    },
    width = 400,
    height = 32,
    animate = true,
    x = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    y = d3v3__WEBPACK_IMPORTED_MODULE_0___default().scale.linear(),
    getX = function getX(d) {
      return d.x;
    },
    getY = function getY(d) {
      return d.y;
    },
    color = nv.utils.getColor(['#000']),
    xDomain,
    yDomain,
    xRange,
    yRange;

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableWidth = width - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);

      //------------------------------------------------------------
      // Setup Scales

      x.domain(xDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(data, getX)).range(xRange || [0, availableWidth]);
      y.domain(yDomain || d3v3__WEBPACK_IMPORTED_MODULE_0___default().extent(data, getY)).range(yRange || [availableHeight, 0]);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-sparkline').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-sparkline');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      var paths = wrap.selectAll('path').data(function (d) {
        return [d];
      });
      paths.enter().append('path');
      paths.exit().remove();
      paths.style('stroke', function (d, i) {
        return d.color || color(d, i);
      }).attr('d', d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.line().x(function (d, i) {
        return x(getX(d, i));
      }).y(function (d, i) {
        return y(getY(d, i));
      }));

      // TODO: Add CURRENT data point (Need Min, Mac, Current / Most recent)
      var points = wrap.selectAll('circle.nv-point').data(function (data) {
        var yValues = data.map(function (d, i) {
          return getY(d, i);
        });
        function pointIndex(index) {
          if (index != -1) {
            var result = data[index];
            result.pointIndex = index;
            return result;
          } else {
            return null;
          }
        }
        var maxPoint = pointIndex(yValues.lastIndexOf(y.domain()[1])),
          minPoint = pointIndex(yValues.indexOf(y.domain()[0])),
          currentPoint = pointIndex(yValues.length - 1);
        return [minPoint, maxPoint, currentPoint].filter(function (d) {
          return d != null;
        });
      });
      points.enter().append('circle');
      points.exit().remove();
      points.attr('cx', function (d, i) {
        return x(getX(d, d.pointIndex));
      }).attr('cy', function (d, i) {
        return y(getY(d, d.pointIndex));
      }).attr('r', 2).attr('class', function (d, i) {
        return getX(d, d.pointIndex) == x.domain()[1] ? 'nv-point nv-currentValue' : getY(d, d.pointIndex) == y.domain()[0] ? 'nv-point nv-minValue' : 'nv-point nv-maxValue';
      });
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(_);
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(_);
    return chart;
  };
  chart.xScale = function (_) {
    if (!arguments.length) return x;
    x = _;
    return chart;
  };
  chart.yScale = function (_) {
    if (!arguments.length) return y;
    y = _;
    return chart;
  };
  chart.xDomain = function (_) {
    if (!arguments.length) return xDomain;
    xDomain = _;
    return chart;
  };
  chart.yDomain = function (_) {
    if (!arguments.length) return yDomain;
    yDomain = _;
    return chart;
  };
  chart.xRange = function (_) {
    if (!arguments.length) return xRange;
    xRange = _;
    return chart;
  };
  chart.yRange = function (_) {
    if (!arguments.length) return yRange;
    yRange = _;
    return chart;
  };
  chart.animate = function (_) {
    if (!arguments.length) return animate;
    animate = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.sparklinePlus = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var sparkline = nv.models.sparkline();
  var margin = {
      top: 15,
      right: 100,
      bottom: 10,
      left: 50
    },
    width = null,
    height = null,
    x,
    y,
    index = [],
    paused = false,
    xTickFormat = d3v3__WEBPACK_IMPORTED_MODULE_0___default().format(',r'),
    yTickFormat = d3v3__WEBPACK_IMPORTED_MODULE_0___default().format(',.2f'),
    showValue = true,
    alignValue = true,
    rightAlignValue = false,
    noData = "No Data Available.";

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        chart(selection);
      };
      chart.container = this;

      //------------------------------------------------------------
      // Display No Data message if there's nothing to show.

      if (!data || !data.length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }
      var currentValue = sparkline.y()(data[data.length - 1], data.length - 1);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      x = sparkline.xScale();
      y = sparkline.yScale();

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-sparklineplus').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-sparklineplus');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-sparklineWrap');
      gEnter.append('g').attr('class', 'nv-valueWrap');
      gEnter.append('g').attr('class', 'nv-hoverArea');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Main Chart Component(s)

      var sparklineWrap = g.select('.nv-sparklineWrap');
      sparkline.width(availableWidth).height(availableHeight);
      sparklineWrap.call(sparkline);

      //------------------------------------------------------------

      var valueWrap = g.select('.nv-valueWrap');
      var value = valueWrap.selectAll('.nv-currentValue').data([currentValue]);
      value.enter().append('text').attr('class', 'nv-currentValue').attr('dx', rightAlignValue ? -8 : 8).attr('dy', '.9em').style('text-anchor', rightAlignValue ? 'end' : 'start');
      value.attr('x', availableWidth + (rightAlignValue ? margin.right : 0)).attr('y', alignValue ? function (d) {
        return y(d);
      } : 0).style('fill', sparkline.color()(data[data.length - 1], data.length - 1)).text(yTickFormat(currentValue));
      gEnter.select('.nv-hoverArea').append('rect').on('mousemove', sparklineHover).on('click', function () {
        paused = !paused;
      }).on('mouseout', function () {
        index = [];
        updateValueLine();
      });
      //.on('mouseout', function() { index = null; updateValueLine(); });

      g.select('.nv-hoverArea rect').attr('transform', function (d) {
        return 'translate(' + -margin.left + ',' + -margin.top + ')';
      }).attr('width', availableWidth + margin.left + margin.right).attr('height', availableHeight + margin.top);
      function updateValueLine() {
        //index is currently global (within the chart), may or may not keep it that way
        if (paused) return;
        var hoverValue = g.selectAll('.nv-hoverValue').data(index);
        var hoverEnter = hoverValue.enter().append('g').attr('class', 'nv-hoverValue').style('stroke-opacity', 0).style('fill-opacity', 0);
        hoverValue.exit().transition().duration(250).style('stroke-opacity', 0).style('fill-opacity', 0).remove();
        hoverValue.attr('transform', function (d) {
          return 'translate(' + x(sparkline.x()(data[d], d)) + ',0)';
        }).transition().duration(250).style('stroke-opacity', 1).style('fill-opacity', 1);
        if (!index.length) return;
        hoverEnter.append('line').attr('x1', 0).attr('y1', -margin.top).attr('x2', 0).attr('y2', availableHeight);
        hoverEnter.append('text').attr('class', 'nv-xValue').attr('x', -6).attr('y', -margin.top).attr('text-anchor', 'end').attr('dy', '.9em');
        g.select('.nv-hoverValue .nv-xValue').text(xTickFormat(sparkline.x()(data[index[0]], index[0])));
        hoverEnter.append('text').attr('class', 'nv-yValue').attr('x', 6).attr('y', -margin.top).attr('text-anchor', 'start').attr('dy', '.9em');
        g.select('.nv-hoverValue .nv-yValue').text(yTickFormat(sparkline.y()(data[index[0]], index[0])));
      }
      function sparklineHover() {
        if (paused) return;
        var pos = d3v3__WEBPACK_IMPORTED_MODULE_0___default().mouse(this)[0] - margin.left;
        function getClosestIndex(data, x) {
          var distance = Math.abs(sparkline.x()(data[0], 0) - x);
          var closestIndex = 0;
          for (var i = 0; i < data.length; i++) {
            if (Math.abs(sparkline.x()(data[i], i) - x) < distance) {
              distance = Math.abs(sparkline.x()(data[i], i) - x);
              closestIndex = i;
            }
          }
          return closestIndex;
        }
        index = [getClosestIndex(data, Math.round(x.invert(pos)))];
        updateValueLine();
      }
    });
    return chart;
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.sparkline = sparkline;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, sparkline, 'x', 'y', 'xScale', 'yScale', 'color');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.xTickFormat = function (_) {
    if (!arguments.length) return xTickFormat;
    xTickFormat = _;
    return chart;
  };
  chart.yTickFormat = function (_) {
    if (!arguments.length) return yTickFormat;
    yTickFormat = _;
    return chart;
  };
  chart.showValue = function (_) {
    if (!arguments.length) return showValue;
    showValue = _;
    return chart;
  };
  chart.alignValue = function (_) {
    if (!arguments.length) return alignValue;
    alignValue = _;
    return chart;
  };
  chart.rightAlignValue = function (_) {
    if (!arguments.length) return rightAlignValue;
    rightAlignValue = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };

  //============================================================

  return chart;
};
nv.models.stackedArea = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 960,
    height = 500,
    color = nv.utils.defaultColor() // a function that computes the color
    ,
    id = Math.floor(Math.random() * 100000) //Create semi-unique ID incase user doesn't selet one
    ,
    getX = function getX(d) {
      return d.x;
    } // accessor to get the x value from a data point
    ,
    getY = function getY(d) {
      return d.y;
    } // accessor to get the y value from a data point
    ,
    style = 'stack',
    offset = 'zero',
    order = 'default',
    interpolate = 'linear' // controls the line interpolation
    ,
    clipEdge = false // if true, masks lines within x and y scale
    ,
    x //can be accessed via chart.xScale()
    ,
    y //can be accessed via chart.yScale()
    ,
    scatter = nv.models.scatter(),
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'areaClick', 'areaMouseover', 'areaMouseout');
  scatter.size(2.2) // default size
  .sizeDomain([2.2, 2.2]) // all the same size by default
  ;

  /************************************
   * offset:
   *   'wiggle' (stream)
   *   'zero' (stacked)
   *   'expand' (normalize to 100%)
   *   'silhouette' (simple centered)
   *
   * order:
   *   'inside-out' (stream)
   *   'default' (input order)
   ************************************/

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var availableWidth = width - margin.left - margin.right,
        availableHeight = height - margin.top - margin.bottom,
        container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this);

      //------------------------------------------------------------
      // Setup Scales

      x = scatter.xScale();
      y = scatter.yScale();

      //------------------------------------------------------------

      var dataRaw = data;
      // Injecting point index into each point because d3v3.layout.stack().out does not give index
      data.forEach(function (aseries, i) {
        aseries.seriesIndex = i;
        aseries.values = aseries.values.map(function (d, j) {
          d.index = j;
          d.seriesIndex = i;
          return d;
        });
      });
      var dataFiltered = data.filter(function (series) {
        return !series.disabled;
      });
      data = d3v3__WEBPACK_IMPORTED_MODULE_0___default().layout.stack().order(order).offset(offset).values(function (d) {
        return d.values;
      }) //TODO: make values customizeable in EVERY model in this fashion
      .x(getX).y(getY).out(function (d, y0, y) {
        var yHeight = getY(d) === 0 ? 0 : y;
        d.display = {
          y: yHeight,
          y0: y0
        };
      })(dataFiltered);

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-stackedarea').data([data]);
      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-stackedarea');
      var defsEnter = wrapEnter.append('defs');
      var gEnter = wrapEnter.append('g');
      var g = wrap.select('g');
      gEnter.append('g').attr('class', 'nv-areaWrap');
      gEnter.append('g').attr('class', 'nv-scatterWrap');
      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //------------------------------------------------------------

      scatter.width(availableWidth).height(availableHeight).x(getX).y(function (d) {
        return d.display.y + d.display.y0;
      }).forceY([0]).color(data.map(function (d, i) {
        return d.color || color(d, d.seriesIndex);
      }));
      var scatterWrap = g.select('.nv-scatterWrap').datum(data);
      scatterWrap.call(scatter);
      defsEnter.append('clipPath').attr('id', 'nv-edge-clip-' + id).append('rect');
      wrap.select('#nv-edge-clip-' + id + ' rect').attr('width', availableWidth).attr('height', availableHeight);
      g.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');
      var area = d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.area().x(function (d, i) {
        return x(getX(d, i));
      }).y0(function (d) {
        return y(d.display.y0);
      }).y1(function (d) {
        return y(d.display.y + d.display.y0);
      }).interpolate(interpolate);
      var zeroArea = d3v3__WEBPACK_IMPORTED_MODULE_0___default().svg.area().x(function (d, i) {
        return x(getX(d, i));
      }).y0(function (d) {
        return y(d.display.y0);
      }).y1(function (d) {
        return y(d.display.y0);
      });
      var path = g.select('.nv-areaWrap').selectAll('path.nv-area').data(function (d) {
        return d;
      });
      path.enter().append('path').attr('class', function (d, i) {
        return 'nv-area nv-area-' + i;
      }).attr('d', function (d, i) {
        return zeroArea(d.values, d.seriesIndex);
      }).on('mouseover', function (d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', true);
        dispatch.areaMouseover({
          point: d,
          series: d.key,
          pos: [(d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.pageX), (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.pageY)],
          seriesIndex: d.seriesIndex
        });
      }).on('mouseout', function (d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', false);
        dispatch.areaMouseout({
          point: d,
          series: d.key,
          pos: [(d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.pageX), (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.pageY)],
          seriesIndex: d.seriesIndex
        });
      }).on('click', function (d, i) {
        d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this).classed('hover', false);
        dispatch.areaClick({
          point: d,
          series: d.key,
          pos: [(d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.pageX), (d3v3__WEBPACK_IMPORTED_MODULE_0___default().event.pageY)],
          seriesIndex: d.seriesIndex
        });
      });
      path.exit().remove();
      path.style('fill', function (d, i) {
        return d.color || color(d, d.seriesIndex);
      }).style('stroke', function (d, i) {
        return d.color || color(d, d.seriesIndex);
      });
      path.transition().attr('d', function (d, i) {
        return area(d.values, i);
      });

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      scatter.dispatch.on('elementMouseover.area', function (e) {
        g.select('.nv-chart-' + id + ' .nv-area-' + e.seriesIndex).classed('hover', true);
      });
      scatter.dispatch.on('elementMouseout.area', function (e) {
        g.select('.nv-chart-' + id + ' .nv-area-' + e.seriesIndex).classed('hover', false);
      });

      //============================================================
      //Special offset functions
      chart.d3_stackedOffset_stackPercent = function (stackData) {
        var n = stackData.length,
          //How many series
          m = stackData[0].length,
          //how many points per series
          k = 1 / n,
          i,
          j,
          o,
          y0 = [];
        for (j = 0; j < m; ++j) {
          //Looping through all points
          for (i = 0, o = 0; i < dataRaw.length; i++)
          //looping through series'
          o += getY(dataRaw[i].values[j]); //total value of all points at a certian point in time.

          if (o) for (i = 0; i < n; i++) stackData[i][j][1] /= o;else for (i = 0; i < n; i++) stackData[i][j][1] = k;
        }
        for (j = 0; j < m; ++j) y0[j] = 0;
        return y0;
      };
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  scatter.dispatch.on('elementClick.area', function (e) {
    dispatch.areaClick(e);
  });
  scatter.dispatch.on('elementMouseover.tooltip', function (e) {
    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top], dispatch.tooltipShow(e);
  });
  scatter.dispatch.on('elementMouseout.tooltip', function (e) {
    dispatch.tooltipHide(e);
  });

  //============================================================

  //============================================================
  // Global getters and setters
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.scatter = scatter;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, scatter, 'interactive', 'size', 'xScale', 'yScale', 'zScale', 'xDomain', 'yDomain', 'xRange', 'yRange', 'sizeDomain', 'forceX', 'forceY', 'forceSize', 'clipVoronoi', 'useVoronoi', 'clipRadius', 'highlightPoint', 'clearHighlights');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.x = function (_) {
    if (!arguments.length) return getX;
    getX = d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(_);
    return chart;
  };
  chart.y = function (_) {
    if (!arguments.length) return getY;
    getY = d3v3__WEBPACK_IMPORTED_MODULE_0___default().functor(_);
    return chart;
  };
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.clipEdge = function (_) {
    if (!arguments.length) return clipEdge;
    clipEdge = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    return chart;
  };
  chart.offset = function (_) {
    if (!arguments.length) return offset;
    offset = _;
    return chart;
  };
  chart.order = function (_) {
    if (!arguments.length) return order;
    order = _;
    return chart;
  };

  //shortcut for offset + order
  chart.style = function (_) {
    if (!arguments.length) return style;
    style = _;
    switch (style) {
      case 'stack':
        chart.offset('zero');
        chart.order('default');
        break;
      case 'stream':
        chart.offset('wiggle');
        chart.order('inside-out');
        break;
      case 'stream-center':
        chart.offset('silhouette');
        chart.order('inside-out');
        break;
      case 'expand':
        chart.offset('expand');
        chart.order('default');
        break;
      case 'stack_percent':
        chart.offset(chart.d3_stackedOffset_stackPercent);
        chart.order('default');
        break;
    }
    return chart;
  };
  chart.interpolate = function (_) {
    if (!arguments.length) return interpolate;
    interpolate = _;
    return chart;
  };
  //============================================================

  return chart;
};
nv.models.stackedAreaChart = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------
  var stacked = nv.models.stackedArea(),
    xAxis = nv.models.axis(),
    yAxis = nv.models.axis(),
    legend = nv.models.legend(),
    controls = nv.models.legend(),
    interactiveLayer = nv.interactiveGuideline();
  var margin = {
      top: 30,
      right: 25,
      bottom: 50,
      left: 60
    },
    width = null,
    height = null,
    color = nv.utils.defaultColor() // a function that takes in d, i and returns color
    ,
    showControls = true,
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    rightAlignYAxis = false,
    useInteractiveGuideline = false,
    tooltips = true,
    tooltip = function tooltip(key, x, y, e, graph) {
      return '<h3>' + key + '</h3>' + '<p>' + y + ' on ' + x + '</p>';
    },
    x //can be accessed via chart.xScale()
    ,
    y //can be accessed via chart.yScale()
    ,
    yAxisTickFormat = d3v3__WEBPACK_IMPORTED_MODULE_0___default().format(',.2f'),
    state = {
      style: stacked.style()
    },
    defaultState = null,
    noData = 'No Data Available.',
    dispatch = d3v3__WEBPACK_IMPORTED_MODULE_0___default().dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState'),
    controlWidth = 250,
    cData = ['Stacked', 'Stream', 'Expanded'],
    controlLabels = {},
    transitionDuration = 250;
  xAxis.orient('bottom').tickPadding(7);
  yAxis.orient(rightAlignYAxis ? 'right' : 'left');
  controls.updateState(false);
  //============================================================

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var showTooltip = function showTooltip(e, offsetElement) {
    var left = e.pos[0] + (offsetElement.offsetLeft || 0),
      top = e.pos[1] + (offsetElement.offsetTop || 0),
      x = xAxis.tickFormat()(stacked.x()(e.point, e.pointIndex)),
      y = yAxis.tickFormat()(stacked.y()(e.point, e.pointIndex)),
      content = tooltip(e.series.key, x, y, e, chart);
    nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
  };

  //============================================================

  function chart(selection) {
    selection.each(function (data) {
      var container = d3v3__WEBPACK_IMPORTED_MODULE_0___default().select(this),
        that = this;
      var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
        availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
      chart.update = function () {
        container.transition().duration(transitionDuration).call(chart);
      };
      chart.container = this;

      //set state.disabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });
      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) defaultState[key] = state[key].slice(0);else defaultState[key] = state[key];
        }
      }

      //------------------------------------------------------------
      // Display No Data message if there's nothing to show.

      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        var noDataText = container.selectAll('.nv-noData').data([noData]);
        noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
        noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function (d) {
          return d;
        });
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Scales

      x = stacked.xScale();
      y = stacked.yScale();

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup containers and skeleton of chart

      var wrap = container.selectAll('g.nv-wrap.nv-stackedAreaChart').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-stackedAreaChart').append('g');
      var g = wrap.select('g');
      gEnter.append("rect").style("opacity", 0);
      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis');
      gEnter.append('g').attr('class', 'nv-stackedWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');
      gEnter.append('g').attr('class', 'nv-controlsWrap');
      gEnter.append('g').attr('class', 'nv-interactive');
      g.select("rect").attr("width", availableWidth).attr("height", availableHeight);
      //------------------------------------------------------------
      // Legend

      if (showLegend) {
        var legendWidth = showControls ? availableWidth - controlWidth : availableWidth;
        legend.width(legendWidth);
        g.select('.nv-legendWrap').datum(data).call(legend);
        if (margin.top != legend.height()) {
          margin.top = legend.height();
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        g.select('.nv-legendWrap').attr('transform', 'translate(' + (availableWidth - legendWidth) + ',' + -margin.top + ')');
      }

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Controls

      if (showControls) {
        var controlsData = [{
          key: controlLabels.stacked || 'Stacked',
          metaKey: 'Stacked',
          disabled: stacked.style() != 'stack',
          style: 'stack'
        }, {
          key: controlLabels.stream || 'Stream',
          metaKey: 'Stream',
          disabled: stacked.style() != 'stream',
          style: 'stream'
        }, {
          key: controlLabels.expanded || 'Expanded',
          metaKey: 'Expanded',
          disabled: stacked.style() != 'expand',
          style: 'expand'
        }, {
          key: controlLabels.stack_percent || 'Stack %',
          metaKey: 'Stack_Percent',
          disabled: stacked.style() != 'stack_percent',
          style: 'stack_percent'
        }];
        controlWidth = cData.length / 3 * 260;
        controlsData = controlsData.filter(function (d) {
          return cData.indexOf(d.metaKey) !== -1;
        });
        controls.width(controlWidth).color(['#444', '#444', '#444']);
        g.select('.nv-controlsWrap').datum(controlsData).call(controls);
        if (margin.top != Math.max(controls.height(), legend.height())) {
          margin.top = Math.max(controls.height(), legend.height());
          availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
        }
        g.select('.nv-controlsWrap').attr('transform', 'translate(0,' + -margin.top + ')');
      }

      //------------------------------------------------------------

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      if (rightAlignYAxis) {
        g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
      }

      //------------------------------------------------------------
      // Main Chart Component(s)

      //------------------------------------------------------------
      //Set up interactive layer
      if (useInteractiveGuideline) {
        interactiveLayer.width(availableWidth).height(availableHeight).margin({
          left: margin.left,
          top: margin.top
        }).svgContainer(container).xScale(x);
        wrap.select(".nv-interactive").call(interactiveLayer);
      }
      stacked.width(availableWidth).height(availableHeight);
      var stackedWrap = g.select('.nv-stackedWrap').datum(data);
      stackedWrap.transition().call(stacked);

      //------------------------------------------------------------

      //------------------------------------------------------------
      // Setup Axes

      if (showXAxis) {
        xAxis.scale(x).ticks(availableWidth / 100).tickSize(-availableHeight, 0);
        g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + availableHeight + ')');
        g.select('.nv-x.nv-axis').transition().duration(0).call(xAxis);
      }
      if (showYAxis) {
        yAxis.scale(y).ticks(stacked.offset() == 'wiggle' ? 0 : availableHeight / 36).tickSize(-availableWidth, 0).setTickFormat(stacked.style() == 'expand' || stacked.style() == 'stack_percent' ? d3v3__WEBPACK_IMPORTED_MODULE_0___default().format('%') : yAxisTickFormat);
        g.select('.nv-y.nv-axis').transition().duration(0).call(yAxis);
      }

      //------------------------------------------------------------

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      stacked.dispatch.on('areaClick.toggle', function (e) {
        if (data.filter(function (d) {
          return !d.disabled;
        }).length === 1) data.forEach(function (d) {
          d.disabled = false;
        });else data.forEach(function (d, i) {
          d.disabled = i != e.seriesIndex;
        });
        state.disabled = data.map(function (d) {
          return !!d.disabled;
        });
        dispatch.stateChange(state);
        chart.update();
      });
      legend.dispatch.on('stateChange', function (newState) {
        state.disabled = newState.disabled;
        dispatch.stateChange(state);
        chart.update();
      });
      controls.dispatch.on('legendClick', function (d, i) {
        if (!d.disabled) return;
        controlsData = controlsData.map(function (s) {
          s.disabled = true;
          return s;
        });
        d.disabled = false;
        stacked.style(d.style);
        state.style = stacked.style();
        dispatch.stateChange(state);
        chart.update();
      });
      interactiveLayer.dispatch.on('elementMousemove', function (e) {
        stacked.clearHighlights();
        var singlePoint,
          pointIndex,
          pointXLocation,
          allData = [];
        data.filter(function (series, i) {
          series.seriesIndex = i;
          return !series.disabled;
        }).forEach(function (series, i) {
          pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
          stacked.highlightPoint(i, pointIndex, true);
          var point = series.values[pointIndex];
          if (typeof point === 'undefined') return;
          if (typeof singlePoint === 'undefined') singlePoint = point;
          if (typeof pointXLocation === 'undefined') pointXLocation = chart.xScale()(chart.x()(point, pointIndex));

          //If we are in 'expand' mode, use the stacked percent value instead of raw value.
          var tooltipValue = stacked.style() == 'expand' ? point.display.y : chart.y()(point, pointIndex);
          allData.push({
            key: series.key,
            value: tooltipValue,
            color: color(series, series.seriesIndex),
            stackedValue: point.display
          });
        });
        allData.reverse();

        //Highlight the tooltip entry based on which stack the mouse is closest to.
        if (allData.length > 2) {
          var yValue = chart.yScale().invert(e.mouseY);
          var yDistMax = Infinity,
            indexToHighlight = null;
          allData.forEach(function (series, i) {
            //To handle situation where the stacked area chart is negative, we need to use absolute values
            //when checking if the mouse Y value is within the stack area.
            yValue = Math.abs(yValue);
            var stackedY0 = Math.abs(series.stackedValue.y0);
            var stackedY = Math.abs(series.stackedValue.y);
            if (yValue >= stackedY0 && yValue <= stackedY + stackedY0) {
              indexToHighlight = i;
              return;
            }
          });
          if (indexToHighlight != null) allData[indexToHighlight].highlight = true;
        }
        var xValue = xAxis.tickFormat()(chart.x()(singlePoint, pointIndex));

        //If we are in 'expand' mode, force the format to be a percentage.
        var valueFormatter = stacked.style() == 'expand' ? function (d, i) {
          return d3v3__WEBPACK_IMPORTED_MODULE_0___default().format(".1%")(d);
        } : function (d, i) {
          return yAxis.tickFormat()(d);
        };
        interactiveLayer.tooltip.position({
          left: pointXLocation + margin.left,
          top: e.mouseY + margin.top
        }).chartContainer(that.parentNode).enabled(tooltips).valueFormatter(valueFormatter).data({
          value: xValue,
          series: allData
        })();
        interactiveLayer.renderGuideLine(pointXLocation);
      });
      interactiveLayer.dispatch.on("elementMouseout", function (e) {
        dispatch.tooltipHide();
        stacked.clearHighlights();
      });
      dispatch.on('tooltipShow', function (e) {
        if (tooltips) showTooltip(e, that.parentNode);
      });

      // Update chart from a state object passed to event handler
      dispatch.on('changeState', function (e) {
        if (typeof e.disabled !== 'undefined' && data.length === e.disabled.length) {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });
          state.disabled = e.disabled;
        }
        if (typeof e.style !== 'undefined') {
          stacked.style(e.style);
        }
        chart.update();
      });
    });
    return chart;
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  stacked.dispatch.on('tooltipShow', function (e) {
    //disable tooltips when value ~= 0
    //// TODO: consider removing points from voronoi that have 0 value instead of this hack
    /*
    if (!Math.round(stacked.y()(e.point) * 100)) {  // 100 will not be good for very small numbers... will have to think about making this valu dynamic, based on data range
      setTimeout(function() { d3v3.selectAll('.point.hover').classed('hover', false) }, 0);
      return false;
    }
    */

    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top], dispatch.tooltipShow(e);
  });
  stacked.dispatch.on('tooltipHide', function (e) {
    dispatch.tooltipHide(e);
  });
  dispatch.on('tooltipHide', function () {
    if (tooltips) nv.tooltip.cleanup();
  });

  //============================================================

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.stacked = stacked;
  chart.legend = legend;
  chart.controls = controls;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  chart.interactiveLayer = interactiveLayer;
  d3v3__WEBPACK_IMPORTED_MODULE_0___default().rebind(chart, stacked, 'x', 'y', 'size', 'xScale', 'yScale', 'xDomain', 'yDomain', 'xRange', 'yRange', 'sizeDomain', 'interactive', 'useVoronoi', 'offset', 'order', 'style', 'clipEdge', 'forceX', 'forceY', 'forceSize', 'interpolate');
  chart.options = nv.utils.optionsFunc.bind(chart);
  chart.margin = function (_) {
    if (!arguments.length) return margin;
    margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
    margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
    margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };
  chart.color = function (_) {
    if (!arguments.length) return color;
    color = nv.utils.getColor(_);
    legend.color(color);
    stacked.color(color);
    return chart;
  };
  chart.showControls = function (_) {
    if (!arguments.length) return showControls;
    showControls = _;
    return chart;
  };
  chart.showLegend = function (_) {
    if (!arguments.length) return showLegend;
    showLegend = _;
    return chart;
  };
  chart.showXAxis = function (_) {
    if (!arguments.length) return showXAxis;
    showXAxis = _;
    return chart;
  };
  chart.showYAxis = function (_) {
    if (!arguments.length) return showYAxis;
    showYAxis = _;
    return chart;
  };
  chart.rightAlignYAxis = function (_) {
    if (!arguments.length) return rightAlignYAxis;
    rightAlignYAxis = _;
    yAxis.orient(_ ? 'right' : 'left');
    return chart;
  };
  chart.useInteractiveGuideline = function (_) {
    if (!arguments.length) return useInteractiveGuideline;
    useInteractiveGuideline = _;
    if (_ === true) {
      chart.interactive(false);
      chart.useVoronoi(false);
    }
    return chart;
  };
  chart.tooltip = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.tooltips = function (_) {
    if (!arguments.length) return tooltips;
    tooltips = _;
    return chart;
  };
  chart.tooltipContent = function (_) {
    if (!arguments.length) return tooltip;
    tooltip = _;
    return chart;
  };
  chart.state = function (_) {
    if (!arguments.length) return state;
    state = _;
    return chart;
  };
  chart.defaultState = function (_) {
    if (!arguments.length) return defaultState;
    defaultState = _;
    return chart;
  };
  chart.noData = function (_) {
    if (!arguments.length) return noData;
    noData = _;
    return chart;
  };
  chart.transitionDuration = function (_) {
    if (!arguments.length) return transitionDuration;
    transitionDuration = _;
    return chart;
  };
  chart.controlsData = function (_) {
    if (!arguments.length) return cData;
    cData = _;
    return chart;
  };
  chart.controlLabels = function (_) {
    if (!arguments.length) return controlLabels;
    if (_typeof(_) !== 'object') return controlLabels;
    controlLabels = _;
    return chart;
  };
  yAxis.setTickFormat = yAxis.tickFormat;
  yAxis.tickFormat = function (_) {
    if (!arguments.length) return yAxisTickFormat;
    yAxisTickFormat = _;
    return yAxis;
  };

  //============================================================

  return chart;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nv);

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-79cd9d02-bundle-a2a4f8506cb55bb7.js.map