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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["notebook~editor"],{

/***/ "./desktop/core/src/desktop/js/ext/bootstrap-datepicker.min.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/bootstrap-datepicker.min.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* =========================================================
 * bootstrap-datepicker.js 
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function (e) {
  var t = function t(_t, r) {
    this.element = e(_t);
    this.format = n.parseFormat(r.format || this.element.data("date-format") || "mm/dd/yyyy");
    this.picker = e(n.template).appendTo("body").on({
      click: e.proxy(this.click, this),
      mousedown: e.proxy(this.mousedown, this)
    });
    this.isInput = this.element.is("input");
    this.component = this.element.is(".date") ? this.element.find(".add-on") : !1;
    this.isInput ? this.element.on({
      focus: e.proxy(this.show, this),
      blur: e.proxy(this.hide, this),
      keyup: e.proxy(this.update, this)
    }) : this.component ? this.component.on("click", e.proxy(this.show, this)) : this.element.on("click", e.proxy(this.show, this));
    this.minViewMode = r.minViewMode || this.element.data("date-minviewmode") || 0;
    if (typeof this.minViewMode == "string") switch (this.minViewMode) {
      case "months":
        this.minViewMode = 1;
        break;
      case "years":
        this.minViewMode = 2;
        break;
      default:
        this.minViewMode = 0;
    }
    this.viewMode = r.viewMode || this.element.data("date-viewmode") || 0;
    if (typeof this.viewMode == "string") switch (this.viewMode) {
      case "months":
        this.viewMode = 1;
        break;
      case "years":
        this.viewMode = 2;
        break;
      default:
        this.viewMode = 0;
    }
    this.startViewMode = this.viewMode;
    this.weekStart = r.weekStart || this.element.data("date-weekstart") || 0;
    this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
    this.fillDow();
    this.fillMonths();
    this.update();
    this.showMode();
  };
  t.prototype = {
    constructor: t,
    show: function show(t) {
      this.picker.show();
      this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
      this.place();
      e(window).on("resize", e.proxy(this.place, this));
      if (t) {
        t.stopPropagation();
        t.preventDefault();
      }
      this.isInput || e(document).on("mousedown", e.proxy(this.hide, this));
      this.element.trigger({
        type: "show",
        date: this.date
      });
    },
    hide: function hide() {
      this.picker.hide();
      e(window).off("resize", this.place);
      this.viewMode = this.startViewMode;
      this.showMode();
      this.isInput || e(document).off("mousedown", this.hide);
      this.set();
      this.element.trigger({
        type: "hide",
        date: this.date
      });
    },
    set: function set() {
      var e = n.formatDate(this.date, this.format);
      if (!this.isInput) {
        this.component && this.element.find("input").prop("value", e);
        this.element.data("date", e);
      } else this.element.prop("value", e);
    },
    setValue: function setValue(e) {
      typeof e == "string" ? this.date = n.parseDate(e, this.format) : this.date = new Date(e);
      this.set();
      this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
      this.fill();
    },
    place: function place() {
      var e = this.component ? this.component.offset() : this.element.offset();
      this.picker.css({
        top: e.top + this.height,
        left: e.left
      });
    },
    update: function update(e) {
      this.date = n.parseDate(typeof e == "string" ? e : this.isInput ? this.element.prop("value") : this.element.data("date"), this.format);
      this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
      this.fill();
    },
    fillDow: function fillDow() {
      var e = this.weekStart,
        t = "<tr>";
      while (e < this.weekStart + 7) t += '<th class="dow">' + n.dates.daysMin[e++ % 7] + "</th>";
      t += "</tr>";
      this.picker.find(".datepicker-days thead").append(t);
    },
    fillMonths: function fillMonths() {
      var e = "",
        t = 0;
      while (t < 12) e += '<span class="month">' + n.dates.monthsShort[t++] + "</span>";
      this.picker.find(".datepicker-months td").append(e);
    },
    fill: function fill() {
      var e = new Date(this.viewDate),
        t = e.getFullYear(),
        r = e.getMonth(),
        i = this.date.valueOf();
      this.picker.find(".datepicker-days th:eq(1)").text(n.dates.months[r] + " " + t);
      var s = new Date(t, r - 1, 28, 0, 0, 0, 0),
        o = n.getDaysInMonth(s.getFullYear(), s.getMonth());
      s.setDate(o);
      s.setDate(o - (s.getDay() - this.weekStart + 7) % 7);
      var u = new Date(s);
      u.setDate(u.getDate() + 42);
      u = u.valueOf();
      var html = [];
      var a;
      while (s.valueOf() < u) {
        s.getDay() === this.weekStart && html.push("<tr>");
        a = "";
        s.getMonth() < r ? a += " old" : s.getMonth() > r && (a += " new");
        s.valueOf() === i && (a += " active");
        html.push('<td class="day' + a + '">' + s.getDate() + "</td>");
        s.getDay() === this.weekEnd && html.push("</tr>");
        s.setDate(s.getDate() + 1);
      }
      this.picker.find(".datepicker-days tbody").empty().append(html.join(""));
      var f = this.date.getFullYear(),
        l = this.picker.find(".datepicker-months").find("th:eq(1)").text(t).end().find("span").removeClass("active");
      f === t && l.eq(this.date.getMonth()).addClass("active");
      html = "";
      t = parseInt(t / 10, 10) * 10;
      var c = this.picker.find(".datepicker-years").find("th:eq(1)").text(t + "-" + (t + 9)).end().find("td");
      t -= 1;
      for (var h = -1; h < 11; h++) {
        html += '<span class="year' + (h === -1 || h === 10 ? " old" : "") + (f === t ? " active" : "") + '">' + t + "</span>";
        t += 1;
      }
      c.html(html);
    },
    click: function click(t) {
      t.stopPropagation();
      t.preventDefault();
      var r = e(t.target).closest("span, td, th");
      if (r.length === 1) switch (r[0].nodeName.toLowerCase()) {
        case "th":
          switch (r[0].className) {
            case "switch":
              this.showMode(1);
              break;
            case "prev":
            case "next":
              this.viewDate["set" + n.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + n.modes[this.viewMode].navFnc].call(this.viewDate) + n.modes[this.viewMode].navStep * (r[0].className === "prev" ? -1 : 1));
              this.fill();
              this.set();
          }
          break;
        case "span":
          if (r.is(".month")) {
            var i = r.parent().find("span").index(r);
            this.viewDate.setMonth(i);
          } else {
            var s = parseInt(r.text(), 10) || 0;
            this.viewDate.setFullYear(s);
          }
          if (this.viewMode !== 0) {
            this.date = new Date(this.viewDate);
            this.element.trigger({
              type: "changeDate",
              date: this.date,
              viewMode: n.modes[this.viewMode].clsName
            });
          }
          this.showMode(-1);
          this.fill();
          this.set();
          break;
        case "td":
          if (r.is(".day")) {
            var o = parseInt(r.text(), 10) || 1,
              i = this.viewDate.getMonth();
            r.is(".old") ? i -= 1 : r.is(".new") && (i += 1);
            var s = this.viewDate.getFullYear();
            this.date = new Date(s, i, o, 0, 0, 0, 0);
            this.viewDate = new Date(s, i, Math.min(28, o), 0, 0, 0, 0);
            this.fill();
            this.set();
            this.element.trigger({
              type: "changeDate",
              date: this.date,
              viewMode: n.modes[this.viewMode].clsName
            });
          }
      }
    },
    mousedown: function mousedown(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    showMode: function showMode(e) {
      e && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + e)));
      this.picker.find(">div").hide().filter(".datepicker-" + n.modes[this.viewMode].clsName).show();
    }
  };
  e.fn.datepicker = function (n, r) {
    return this.each(function () {
      var i = e(this),
        s = i.data("datepicker"),
        o = _typeof(n) == "object" && n;
      s || i.data("datepicker", s = new t(this, e.extend({}, e.fn.datepicker.defaults, o)));
      typeof n == "string" && s[n](r);
    });
  };
  e.fn.datepicker.defaults = {};
  e.fn.datepicker.Constructor = t;
  var n = {
    modes: [{
      clsName: "days",
      navFnc: "Month",
      navStep: 1
    }, {
      clsName: "months",
      navFnc: "FullYear",
      navStep: 1
    }, {
      clsName: "years",
      navFnc: "FullYear",
      navStep: 10
    }],
    dates: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    isLeapYear: function isLeapYear(e) {
      return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
    },
    getDaysInMonth: function getDaysInMonth(e, t) {
      return [31, n.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t];
    },
    parseFormat: function parseFormat(e) {
      var t = e.match(/[.\/\-\s].*?/),
        n = e.split(/\W+/);
      if (!t || !n || n.length === 0) throw new Error("Invalid date format.");
      return {
        separator: t,
        parts: n
      };
    },
    parseDate: function parseDate(e, t) {
      var n = e.split(t.separator),
        e = new Date(),
        r;
      e.setHours(0);
      e.setMinutes(0);
      e.setSeconds(0);
      e.setMilliseconds(0);
      if (n.length === t.parts.length) for (var i = 0, s = t.parts.length; i < s; i++) {
        r = parseInt(n[i], 10) || 1;
        switch (t.parts[i]) {
          case "dd":
          case "d":
            e.setDate(r);
            break;
          case "mm":
          case "m":
            e.setMonth(r - 1);
            break;
          case "yy":
            e.setFullYear(2e3 + r);
            break;
          case "yyyy":
            e.setFullYear(r);
        }
      }
      return e;
    },
    formatDate: function formatDate(e, t) {
      var n = {
        d: e.getDate(),
        m: e.getMonth() + 1,
        yy: e.getFullYear().toString().substring(2),
        yyyy: e.getFullYear()
      };
      n.dd = (n.d < 10 ? "0" : "") + n.d;
      n.mm = (n.m < 10 ? "0" : "") + n.m;
      var e = [];
      for (var r = 0, i = t.parts.length; r < i; r++) e.push(n[t.parts[r]]);
      return e.join(t.separator);
    },
    headTemplate: '<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
  };
  n.template = '<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">' + n.headTemplate + "<tbody></tbody>" + "</table>" + "</div>" + '<div class="datepicker-months">' + '<table class="table-condensed">' + n.headTemplate + n.contTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">' + n.headTemplate + n.contTemplate + "</table>" + "</div>" + "</div>";
}((jquery__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/jquery.hotkeys.js":
/*!***********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/jquery.hotkeys.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/


(function (jQuery) {
  jQuery.hotkeys = {
    version: "0.8",
    specialKeys: {
      8: "backspace",
      9: "tab",
      13: "return",
      16: "shift",
      17: "ctrl",
      18: "alt",
      19: "pause",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "insert",
      46: "del",
      96: "0",
      97: "1",
      98: "2",
      99: "3",
      100: "4",
      101: "5",
      102: "6",
      103: "7",
      104: "8",
      105: "9",
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      112: "f1",
      113: "f2",
      114: "f3",
      115: "f4",
      116: "f5",
      117: "f6",
      118: "f7",
      119: "f8",
      120: "f9",
      121: "f10",
      122: "f11",
      123: "f12",
      144: "numlock",
      145: "scroll",
      191: "/",
      224: "meta"
    },
    shiftNums: {
      "`": "~",
      "1": "!",
      "2": "@",
      "3": "#",
      "4": "$",
      "5": "%",
      "6": "^",
      "7": "&",
      "8": "*",
      "9": "(",
      "0": ")",
      "-": "_",
      "=": "+",
      ";": ": ",
      "'": "\"",
      ",": "<",
      ".": ">",
      "/": "?",
      "\\": "|"
    }
  };
  function keyHandler(handleObj) {
    // Only care when a possible input has been specified
    if (typeof handleObj.data !== "string") {
      return;
    }
    var origHandler = handleObj.handler,
      keys = handleObj.data.toLowerCase().split(" "),
      textAcceptingInputTypes = ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color"];
    handleObj.handler = function (event) {
      // Don't fire in text-accepting inputs that we didn't directly bind to
      if (this !== event.target && (/textarea|select/i.test(event.target.nodeName) || jQuery.inArray(event.target.type, textAcceptingInputTypes) > -1)) {
        return;
      }

      // Keypress represents characters, not special keys
      var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which],
        character = String.fromCharCode(event.which).toLowerCase(),
        key,
        modif = "",
        possible = {};

      // check combinations (alt|ctrl|shift+anything)
      if (event.altKey && special !== "alt") {
        modif += "alt+";
      }
      if (event.ctrlKey && special !== "ctrl") {
        modif += "ctrl+";
      }

      // TODO: Need to make sure this works consistently across platforms
      if (event.metaKey && !event.ctrlKey && special !== "meta") {
        modif += "meta+";
      }
      if (event.shiftKey && special !== "shift") {
        modif += "shift+";
      }
      if (special) {
        possible[modif + special] = true;
      } else {
        possible[modif + character] = true;
        possible[modif + jQuery.hotkeys.shiftNums[character]] = true;

        // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
        if (modif === "shift+") {
          possible[jQuery.hotkeys.shiftNums[character]] = true;
        }
      }
      for (var i = 0, l = keys.length; i < l; i++) {
        if (possible[keys[i]]) {
          return origHandler.apply(this, arguments);
        }
      }
    };
  }
  jQuery.each(["keydown", "keyup", "keypress"], function () {
    jQuery.event.special[this] = {
      add: keyHandler
    };
  });
})((jquery__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./desktop/core/src/desktop/js/jquery/plugins/jquery.hdfstree.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.hdfstree.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactComponents/AlertComponent/events */ "./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var utils_screen_scrollbarWidth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/screen/scrollbarWidth */ "./desktop/core/src/desktop/js/utils/screen/scrollbarWidth.ts");
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







// TODO: don't create multiple jquery instances from chunks
var $ = window.$ || (jquery__WEBPACK_IMPORTED_MODULE_0___default());

/*
 * jHue HDFS tree plugin
 * shows a tree HDFS picker, if initialPath is set it pre-populates the path
 * if home is specified a home link will appear
 * use attached to an element, ie:
 * $("#el").jHueHdfsTree({
 *    initialPath: "/user",
 *    home: "/user/hue"
 *    onPathChange: function (path) {
 *      console.log(path);
 *    }
 * });
 */

var pluginName = 'jHueHdfsTree',
  defaults = {
    home: '',
    initialPath: '/',
    isS3: false,
    withTopPadding: true,
    onPathChange: function onPathChange() {},
    createFolder: true,
    labels: {
      CREATE_FOLDER: 'Create folder',
      FOLDER_NAME: 'Folder name',
      CANCEL: 'Cancel',
      HOME: 'Home'
    }
  };
function Plugin(element, options) {
  this.element = element;
  this.options = $.extend({}, defaults, options);
  this.options.labels = $.extend({}, defaults.labels, {
    GO_TO_COLUMN: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('Go to column:'),
    PLACEHOLDER: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('column name...'),
    LOCK: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('Lock this row'),
    UNLOCK: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('Unlock this row'),
    ROW_DETAILS: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"])('Show row details')
  }, options ? options.labels : {});
  this._defaults = defaults;
  this._name = pluginName;
  this.lastPath = '';
  this.previousPath = '';
  this.init();
}
Plugin.prototype.init = function (optionalPath) {
  var _this = this;
  if (typeof optionalPath != 'undefined') {
    _this.options.initialPath = optionalPath;
  }
  var _el = $(_this.element);
  _el.empty();
  _el.addClass('jHueHdfsTree');
  var _homeLink;
  if (_this.options.home != '') {
    _homeLink = $('<a>').html('<i class="fa fa-home"></i> ' + _this.options.labels.HOME).click(function () {
      var _path = _this.options.home;
      _this.options.onPathChange(_path);
      _this.lastPath = _path;
      _tree.find('a').removeClass('selected');
      var _paths = [];
      var _re = /\//g;
      var match;
      while ((match = _re.exec(_path)) != null) {
        _paths.push(_path.substr(0, match.index));
      }
      _paths.push(_path);
      showHdfsLeaf({
        paths: _paths,
        scroll: true
      });
    });
    _homeLink.css({
      cursor: 'pointer',
      position: 'fixed',
      'padding-bottom': '4px',
      'font-size': '16px',
      'border-bottom': '1px solid #FFF',
      'background-color': '#FFF',
      width: 560 - (0,utils_screen_scrollbarWidth__WEBPACK_IMPORTED_MODULE_4__["default"])() + 'px'
    });
  }
  var _tree = $('<ul>').addClass('content unstyled').html('<li><a class="pointer"><i class="fa fa-folder-open-o"></i> /</a></li>');
  if (_this.options.withTopPadding) {
    _tree.css('padding-top', '30px');
  }
  if (_this.options.home != '') {
    _homeLink.appendTo(_el);
    _el.parent().on('scroll', function () {
      if (_el.parent().scrollTop() > 0) {
        _homeLink.css({
          'border-bottom': '1px solid #EEE'
        });
      } else {
        _homeLink.css({
          'border-bottom': '1px solid #FFF'
        });
      }
    });
  }
  _tree.appendTo(_el);
  _tree.find('a').on('click', function () {
    _this.options.onPathChange('/');
    _tree.find('a').removeClass('selected');
    _tree.find('a:eq(0)').addClass('selected');
  });
  var _root = $('<ul>').addClass('content unstyled').attr('data-path', '__JHUEHDFSTREE__ROOT__').attr('data-loaded', 'true');
  _root.appendTo(_tree.find('li'));
  var BASE_PATH = '/filebrowser/view=';
  var _currentFiles = [];
  function escapeSingleQuote(path) {
    return path.replace(/\'/gi, "\\'");
  }
  function removeLeadingSlash(path) {
    if (path.indexOf('/') == 0) {
      return path.substr(1);
    }
    return path;
  }
  function showHdfsLeaf(options) {
    var autocompleteUrl = BASE_PATH,
      currentPath = '';
    if (options.paths != null && options.paths.length > 0) {
      var shiftedPath = options.paths.shift();
      if (_this.options.isS3) {
        currentPath = shiftedPath;
      } else {
        currentPath = shiftedPath != '' ? shiftedPath : '/';
      }
    } else {
      currentPath = options.leaf != null ? options.leaf : '/';
    }
    autocompleteUrl += currentPath;
    $.getJSON(autocompleteUrl + '?pagesize=1000&format=json', function (data) {
      _currentFiles = [];
      if (data.error == null) {
        var filteredCurrentPath = _this.options.isS3 ? currentPath.substr(5) : currentPath;
        var _dataPathForCurrent = filteredCurrentPath != '' ? removeLeadingSlash(filteredCurrentPath) : '__JHUEHDFSTREE__ROOT__';
        _el.find("[data-path='" + escapeSingleQuote(_dataPathForCurrent) + "']").attr('data-loaded', true);
        _el.find("[data-path='" + escapeSingleQuote(_dataPathForCurrent) + "']").siblings('a').find('.fa-folder-o').removeClass('fa-folder-o').addClass('fa-folder-open-o');
        _tree.find('a').removeClass('selected');
        _el.find("[data-path='" + escapeSingleQuote(_dataPathForCurrent) + "']").siblings('a').addClass('selected');
        if (options.scroll) {
          _el.parent().scrollTop(_el.find("[data-path='" + escapeSingleQuote(_dataPathForCurrent) + "']").siblings('a').position().top + _el.parent().scrollTop() - 30);
        }
        $(data.files).each(function (cnt, item) {
          if (item.name != '.' && item.name != '..' && item.type == 'dir') {
            var _path = item.path;
            var filteredPath = _this.options.isS3 ? _path.substr(5) : _path;
            var _escapedPath = escapeSingleQuote(filteredPath);
            if (_el.find("[data-path='" + removeLeadingSlash(_escapedPath) + "']").length == 0) {
              var _li = $('<li>').html('<a class="pointer"><i class="fa fa-folder-o"></i> ' + item.name + '</a><ul class="content unstyled" data-path="' + removeLeadingSlash(_escapedPath) + '" data-loaded="false"></ul>');
              var _destination = filteredPath.substr(0, filteredPath.lastIndexOf('/'));
              if (_destination == '') {
                _destination = '__JHUEHDFSTREE__ROOT__';
              }
              _destination = removeLeadingSlash(_destination);
              _li.appendTo(_el.find("[data-path='" + escapeSingleQuote(_destination) + "']"));
              _li.find('a').on('click', function () {
                _this.options.onPathChange(_path);
                _this.lastPath = _path;
                _tree.find('a').removeClass('selected');
                _li.find('a:eq(0)').addClass('selected');
                if (_li.find('.content').attr('data-loaded') == 'false') {
                  showHdfsLeaf({
                    leaf: _path,
                    scroll: false
                  });
                } else if (_li.find('.content').is(':visible')) {
                  _li.find('.content').hide();
                } else {
                  _li.find('.content').show();
                }
              });
            }
          }
        });
        if (_this.options.createFolder) {
          var _filteredCurrentPath = _this.options.isS3 ? currentPath.substr(5) : currentPath;
          var _createFolderLi = $('<li>').html('<a class="pointer"><i class="fa fa-plus-square-o"></i> ' + _this.options.labels.CREATE_FOLDER + '</a>');
          _createFolderLi.appendTo(_el.find("[data-path='" + removeLeadingSlash(escapeSingleQuote(_filteredCurrentPath)) + "']"));
          var _createFolderDetails = $('<form>').css('margin-top', '10px').addClass('form-inline');
          _createFolderDetails.hide();
          var _folderName = $('<input>').attr('type', 'text').attr('placeholder', _this.options.labels.FOLDER_NAME).appendTo(_createFolderDetails);
          $('<span> </span>').appendTo(_createFolderDetails);
          var _folderBtn = $('<input>').attr('type', 'button').attr('value', _this.options.labels.CREATE_FOLDER).addClass('btn primary').appendTo(_createFolderDetails);
          $('<span> </span>').appendTo(_createFolderDetails);
          var _folderCancel = $('<input>').attr('type', 'button').attr('value', _this.options.labels.CANCEL).addClass('btn').appendTo(_createFolderDetails);
          _folderCancel.click(function () {
            _createFolderDetails.slideUp();
          });
          _folderBtn.click(function () {
            $.ajax({
              type: 'POST',
              url: '/filebrowser/mkdir',
              data: {
                name: _folderName.val(),
                path: currentPath
              },
              beforeSend: function beforeSend(xhr) {
                xhr.setRequestHeader('X-Requested-With', 'Hue'); // need to override the default one because otherwise Django returns HTTP 500
              },
              success: function success(xhr, status) {
                if (status == 'success') {
                  _createFolderDetails.slideUp();
                  var _newFolder = currentPath + '/' + _folderName.val();
                  _this.init(_newFolder);
                  _this.options.onPathChange(_newFolder);
                }
              }
            });
          });
          _createFolderDetails.appendTo(_el.find("[data-path='" + removeLeadingSlash(escapeSingleQuote(_filteredCurrentPath)) + "']"));
          _createFolderLi.find('a').on('click', function () {
            _createFolderDetails.slideDown();
          });
        }
        if (options.paths != null && options.paths.length > 0) {
          showHdfsLeaf({
            paths: options.paths,
            scroll: options.scroll
          });
        }
      } else {
        utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(reactComponents_AlertComponent_events__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_ERROR_TOPIC, {
          message: data.error
        });
      }
    });
  }
  Plugin.prototype.showHdfsLeaf = showHdfsLeaf;
  var _paths = [];
  if (_this.options.initialPath != '/') {
    var _re = /\//g;
    var match;
    while ((match = _re.exec(_this.options.initialPath)) != null) {
      _paths.push(_this.options.initialPath.substr(0, match.index));
    }
    _paths.push(_this.options.initialPath);
  }
  if (_this.options.isS3) {
    _paths.shift();
    _paths[0] = 's3a://';
  }
  showHdfsLeaf({
    paths: _paths
  });
};
Plugin.prototype.setOptions = function (options) {
  this.options = $.extend({}, defaults, options);
};
$.fn[pluginName] = function (options) {
  return this.each(function () {
    if (!$.data(this, 'plugin_' + pluginName)) {
      $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
    }
  });
};
$[pluginName] = function (options) {
  if (typeof console != 'undefined') {
    console.warn('$(elem).jHueHdfsTree() is a preferred call method.');
  }
  $(options.element).jHueHdfsTree(options);
};

/***/ }),

/***/ "./node_modules/jquery-mousewheel/jquery.mousewheel.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery-mousewheel/jquery.mousewheel.js ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( true ) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));


/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/notebook~editor-bundle-a2a4f8506cb55bb7.js.map