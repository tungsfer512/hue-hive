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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-b5650f80"],{

/***/ "./desktop/core/src/desktop/js/ext/d3-tip.min.js":
/*!*******************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/d3-tip.min.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_0__);

!function (e) {
  (d3v3__WEBPACK_IMPORTED_MODULE_0___default().d3tip) = e((d3v3__WEBPACK_IMPORTED_MODULE_0___default()));
}(function (t) {
  return function () {
    function e(t) {
      b = d(t), C = b.createSVGPoint(), document.body.appendChild(T);
    }
    function n() {
      return "n";
    }
    function r() {
      return [0, 0];
    }
    function o() {
      return " ";
    }
    function l() {
      var t = h();
      return {
        top: t.n.y - T.offsetHeight,
        left: t.n.x - T.offsetWidth / 2
      };
    }
    function i() {
      var t = h();
      return {
        top: t.s.y,
        left: t.s.x - T.offsetWidth / 2
      };
    }
    function f() {
      var t = h();
      return {
        top: t.e.y - T.offsetHeight / 2,
        left: t.e.x
      };
    }
    function u() {
      var t = h();
      return {
        top: t.w.y - T.offsetHeight / 2,
        left: t.w.x - T.offsetWidth
      };
    }
    function s() {
      var t = h();
      return {
        top: t.nw.y - T.offsetHeight,
        left: t.nw.x - T.offsetWidth
      };
    }
    function a() {
      var t = h();
      return {
        top: t.ne.y - T.offsetHeight,
        left: t.ne.x
      };
    }
    function c() {
      var t = h();
      return {
        top: t.sw.y,
        left: t.sw.x - T.offsetWidth
      };
    }
    function p() {
      var t = h();
      return {
        top: t.se.y,
        left: t.e.x
      };
    }
    function y() {
      var e = t.select(document.createElement("div"));
      return e.style("position", "absolute").style("top", 0).style("opacity", 0).style("pointer-events", "none").style("box-sizing", "border-box"), e.node();
    }
    function d(t) {
      return t = t.node(), "svg" === t.tagName.toLowerCase() ? t : t.ownerSVGElement;
    }
    function m() {
      return null === T && (T = y(), document.body.appendChild(T)), t.select(T);
    }
    function h() {
      for (var e = E || t.event.target; "undefined" == typeof e.getScreenCTM && "undefined" === e.parentNode;) e = e.parentNode;
      var n = {},
        r = e.getScreenCTM(),
        o = e.getBBox(),
        l = o.width,
        i = o.height,
        f = o.x,
        u = o.y;
      return C.x = f, C.y = u, n.nw = C.matrixTransform(r), C.x += l, n.ne = C.matrixTransform(r), C.y += i, n.se = C.matrixTransform(r), C.x -= l, n.sw = C.matrixTransform(r), C.y -= i / 2, n.w = C.matrixTransform(r), C.x += l, n.e = C.matrixTransform(r), C.x -= l / 2, C.y -= i / 2, n.n = C.matrixTransform(r), C.y += i, n.s = C.matrixTransform(r), n;
    }
    function x(t) {
      return "function" == typeof t ? t : function () {
        return t;
      };
    }
    var v = n,
      g = r,
      w = o,
      T = y(),
      b = null,
      C = null,
      E = null;
    e.show = function () {
      var t = Array.prototype.slice.call(arguments);
      t[t.length - 1] instanceof SVGElement && (E = t.pop());
      var n,
        r = w.apply(this, t),
        o = g.apply(this, t),
        l = v.apply(this, t),
        i = m(),
        f = S.length,
        u = document.documentElement.scrollTop || document.body.scrollTop,
        s = document.documentElement.scrollLeft || document.body.scrollLeft;
      for (i.html(r).style("opacity", 1).style("pointer-events", "all"); f--;) i.classed(S[f], !1);
      return n = H.get(l).apply(this), i.classed(l, !0).style("top", n.top + o[0] + u + "px").style("left", n.left + o[1] + s + "px"), e;
    }, e.hide = function () {
      var t = m();
      return t.style("opacity", 0).style("pointer-events", "none"), e;
    }, e.attr = function (n, r) {
      if (arguments.length < 2 && "string" == typeof n) return m().attr(n);
      var o = Array.prototype.slice.call(arguments);
      return t.selection.prototype.attr.apply(m(), o), e;
    }, e.style = function (n, r) {
      if (arguments.length < 2 && "string" == typeof n) return m().style(n);
      var o = Array.prototype.slice.call(arguments);
      return t.selection.prototype.style.apply(m(), o), e;
    }, e.direction = function (t) {
      return arguments.length ? (v = null == t ? t : x(t), e) : v;
    }, e.offset = function (t) {
      return arguments.length ? (g = null == t ? t : x(t), e) : g;
    }, e.html = function (t) {
      return arguments.length ? (w = null == t ? t : x(t), e) : w;
    }, e.destroy = function () {
      return T && (m().remove(), T = null), e;
    };
    var H = t.map({
        n: l,
        s: i,
        e: f,
        w: u,
        nw: s,
        ne: a,
        sw: c,
        se: p
      }),
      S = H.keys();
    return e;
  };
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/fileuploader.custom.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/fileuploader.custom.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
 Multiple file upload component with progress-bar, drag-and-drop.
 http://github.com/valums/file-uploader

 Copyright (C) 2011 by Andris Valums

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */



//
// Helper functions
//

var qq = {};

/**
 * Adds all missing properties from second obj to first obj
 */
qq.extend = function (first, second) {
  for (var prop in second) {
    first[prop] = second[prop];
  }
};

/**
 * Searches for a given element in the array, returns -1 if it is not present.
 * @param {Number} [from] The index at which to begin the search
 */
qq.indexOf = function (arr, elt, from) {
  if (arr.indexOf) return arr.indexOf(elt, from);
  from = from || 0;
  var len = arr.length;
  if (from < 0) from += len;
  for (; from < len; from++) {
    if (from in arr && arr[from] === elt) {
      return from;
    }
  }
  return -1;
};
qq.getUniqueId = function () {
  var id = 0;
  return function () {
    return id++;
  };
}();

//
// Events

qq.attach = function (element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, fn);
  }
};
qq.detach = function (element, type, fn) {
  if (element.removeEventListener) {
    element.removeEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.detachEvent('on' + type, fn);
  }
};
qq.preventDefault = function (e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
};

//
// Node manipulations

/**
 * Insert node a before node b.
 */
qq.insertBefore = function (a, b) {
  b.parentNode.insertBefore(a, b);
};
qq.remove = function (element) {
  element.parentNode.removeChild(element);
};
qq.contains = function (parent, descendant) {
  // compareposition returns false in this case
  if (parent == descendant) return true;
  if (parent.contains) {
    return parent.contains(descendant);
  } else {
    return !!(descendant.compareDocumentPosition(parent) & 8);
  }
};

/**
 * Creates and returns element from html string
 * Uses innerHTML to create an element
 */
qq.toElement = function () {
  var div = document.createElement('div');
  return function (html) {
    div.innerHTML = html;
    var element = div.firstChild;
    div.removeChild(element);
    return element;
  };
}();

//
// Node properties and attributes

/**
 * Sets styles for an element.
 * Fixes opacity in IE6-8.
 */
qq.css = function (element, styles) {
  if (styles.opacity != null) {
    if (typeof element.style.opacity != 'string' && typeof element.filters != 'undefined') {
      styles.filter = 'alpha(opacity=' + Math.round(100 * styles.opacity) + ')';
    }
  }
  qq.extend(element.style, styles);
};
qq.hasClass = function (element, name) {
  var re = new RegExp('(^| )' + name + '( |$)');
  return re.test(element.className);
};
qq.addClass = function (element, name) {
  if (!qq.hasClass(element, name)) {
    element.className += ' ' + name;
  }
};
qq.removeClass = function (element, name) {
  var re = new RegExp('(^| )' + name + '( |$)');
  element.className = element.className.replace(re, ' ').replace(/^\s+|\s+$/g, "");
};
qq.setText = function (element, text) {
  element.innerText = text;
  element.textContent = text;
};

//
// Selecting elements

qq.children = function (element) {
  var children = [],
    child = element.firstChild;
  while (child) {
    if (child.nodeType == 1) {
      children.push(child);
    }
    child = child.nextSibling;
  }
  return children;
};
qq.getByClass = function (element, className) {
  if (element.querySelectorAll) {
    return element.querySelectorAll('.' + className);
  }
  var result = [];
  var candidates = element.getElementsByTagName("*");
  var len = candidates.length;
  for (var i = 0; i < len; i++) {
    if (qq.hasClass(candidates[i], className)) {
      result.push(candidates[i]);
    }
  }
  return result;
};

/**
 * obj2url() takes a json-object as argument and generates
 * a querystring. pretty much like jQuery.param()
 *
 * how to use:
 *
 *    `qq.obj2url({a:'b',c:'d'},'http://any.url/upload?otherParam=value');`
 *
 * will result in:
 *
 *    `http://any.url/upload?otherParam=value&a=b&c=d`
 *
 * @param  Object JSON-Object
 * @param  String current querystring-part
 * @return String encoded querystring
 */
qq.obj2url = function (obj, temp, prefixDone) {
  var uristrings = [],
    prefix = '&',
    add = function add(nextObj, i) {
      var nextTemp = temp ? /\[\]$/.test(temp) // prevent double-encoding
      ? temp : temp + '[' + i + ']' : i;
      if (nextTemp != 'undefined' && i != 'undefined') {
        uristrings.push(_typeof(nextObj) === 'object' ? qq.obj2url(nextObj, nextTemp, true) : Object.prototype.toString.call(nextObj) === '[object Function]' ? encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj()) : encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj));
      }
    };
  if (!prefixDone && temp) {
    prefix = /\?/.test(temp) ? /\?$/.test(temp) ? '' : '&' : '?';
    uristrings.push(temp);
    uristrings.push(qq.obj2url(obj));
  } else if (Object.prototype.toString.call(obj) === '[object Array]' && typeof obj != 'undefined') {
    // we wont use a for-in-loop on an array (performance)
    for (var i = 0, len = obj.length; i < len; ++i) {
      add(obj[i], i);
    }
  } else if (typeof obj != 'undefined' && obj !== null && _typeof(obj) === "object") {
    // for anything else but a scalar, we will use for-in-loop
    for (var i in obj) {
      add(obj[i], i);
    }
  } else {
    uristrings.push(encodeURIComponent(temp) + '=' + encodeURIComponent(obj));
  }
  return uristrings.join(prefix).replace(/^&/, '').replace(/%20/g, '+');
};

//
//
// Uploader Classes
//
//

/**
 * Creates upload button, validates upload, but doesn't create file list or dd.
 */
qq.FileUploaderBasic = function (o) {
  this._options = {
    // set to true to see the server response
    debug: false,
    action: '/server/upload',
    dest: '/',
    fileFieldLabel: 'hdfs_file',
    params: {},
    button: null,
    multiple: true,
    maxConnections: 3,
    // validation
    allowedExtensions: [],
    sizeLimit: 0,
    minSizeLimit: 0,
    // events
    // return false to cancel submit
    onSubmit: function onSubmit(id, fileName) {},
    onProgress: function onProgress(id, fileName, loaded, total) {},
    onComplete: function onComplete(id, fileName, responseJSON) {},
    onCancel: function onCancel(id, fileName) {},
    // messages
    messages: {
      typeError: "{file} has invalid extension. Only {extensions} are allowed.",
      sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
      minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
      emptyError: "{file} is empty, please select files again without it.",
      onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
    },
    showMessage: function showMessage(message) {
      alert(message);
    }
  };
  qq.extend(this._options, o);

  // number of files being uploaded
  this._filesInProgress = 0;
  this._handler = this._createUploadHandler();
  if (this._options.button) {
    this._button = this._createUploadButton(this._options.button);
  }
  this._preventLeaveInProgress();
};
qq.FileUploaderBasic.prototype = {
  setParams: function setParams(params) {
    this._options.params = params;
  },
  setOption: function setOption(key, val) {
    this._options[key] = val;
  },
  getInProgress: function getInProgress() {
    return this._filesInProgress;
  },
  _createUploadButton: function _createUploadButton(element) {
    var self = this;
    return new qq.UploadButton({
      element: element,
      multiple: this._options.multiple && qq.UploadHandlerXhr.isSupported(),
      onChange: function onChange(input) {
        self._onInputChange(input);
      }
    });
  },
  _createUploadHandler: function _createUploadHandler() {
    var self = this,
      handlerClass;
    if (qq.UploadHandlerXhr.isSupported()) {
      handlerClass = 'UploadHandlerXhr';
    } else {
      handlerClass = 'UploadHandlerForm';
    }
    var handler = new qq[handlerClass]({
      debug: this._options.debug,
      action: this._options.action,
      dest: '/',
      fileFieldLabel: 'hdfs_file',
      maxConnections: this._options.maxConnections,
      onProgress: function onProgress(id, fileName, loaded, total) {
        self._onProgress(id, fileName, loaded, total);
        self._options.onProgress(id, fileName, loaded, total);
      },
      onComplete: function onComplete(id, fileName, result) {
        self._onComplete(id, fileName, result);
        self._options.onComplete(id, fileName, result);
      },
      onCancel: function onCancel(id, fileName) {
        self._onCancel(id, fileName);
        self._options.onCancel(id, fileName);
      }
    });
    return handler;
  },
  _preventLeaveInProgress: function _preventLeaveInProgress() {
    var self = this;
    qq.attach(window, 'beforeunload', function (e) {
      if (!self._filesInProgress) {
        return;
      }
      var e = e || window.event;
      // for ie, ff
      e.returnValue = self._options.messages.onLeave;
      // for webkit
      return self._options.messages.onLeave;
    });
  },
  _onSubmit: function _onSubmit(id, fileName) {
    this._filesInProgress++;
  },
  _onProgress: function _onProgress(id, fileName, loaded, total) {},
  _onComplete: function _onComplete(id, fileName, result) {
    this._filesInProgress--;
    if (result.error) {
      this._options.showMessage(result.error);
    }
  },
  _onCancel: function _onCancel(id, fileName) {
    this._filesInProgress--;
  },
  _onInputChange: function _onInputChange(input) {
    if (this._handler instanceof qq.UploadHandlerXhr) {
      this._uploadFileList(input.files);
    } else {
      if (this._validateFile(input)) {
        this._uploadFile(input);
      }
    }
    this._button.reset();
  },
  _uploadFileList: function _uploadFileList(files) {
    for (var i = 0; i < files.length; i++) {
      if (!this._validateFile(files[i])) {
        return;
      }
    }
    for (var i = 0; i < files.length; i++) {
      this._uploadFile(files[i]);
    }
  },
  _uploadFile: function _uploadFile(fileContainer) {
    var id = this._handler.add(fileContainer);
    var fileName = this._handler.getName(id);
    if (this._options.onSubmit(id, fileName) !== false) {
      this._onSubmit(id, fileName);
      this._handler.upload(id, this._options.params);
    }
  },
  _validateFile: function _validateFile(file) {
    var name, size;
    if (file.value) {
      // it is a file input
      // get input value and remove path to normalize
      name = file.value.replace(/.*(\/|\\)/, "");
    } else {
      // fix missing properties in Safari
      name = file.fileName != null ? file.fileName : file.name;
      size = file.fileSize != null ? file.fileSize : file.size;
    }
    if (!this._isAllowedExtension(name)) {
      this._error('typeError', name);
      return false;
    } else if (size === 0) {
      this._error('emptyError', name);
      return false;
    } else if (size && this._options.sizeLimit && size > this._options.sizeLimit) {
      this._error('sizeError', name);
      return false;
    } else if (size && size < this._options.minSizeLimit) {
      this._error('minSizeError', name);
      return false;
    }
    return true;
  },
  _error: function _error(code, fileName) {
    var message = this._options.messages[code];
    function r(name, replacement) {
      message = message.replace(name, replacement);
    }
    r('{file}', this._formatFileName(fileName));
    r('{extensions}', this._options.allowedExtensions.join(', '));
    r('{sizeLimit}', this._formatSize(this._options.sizeLimit));
    r('{minSizeLimit}', this._formatSize(this._options.minSizeLimit));
    this._options.showMessage(message);
  },
  _formatFileName: function _formatFileName(name) {
    if (name.length > 33) {
      name = name.slice(0, 19) + '...' + name.slice(-13);
    }
    return name;
  },
  _isAllowedExtension: function _isAllowedExtension(fileName) {
    var ext = -1 !== fileName.indexOf('.') ? fileName.replace(/.*[.]/, '').toLowerCase() : '';
    var allowed = this._options.allowedExtensions;
    if (!allowed.length) {
      return true;
    }
    for (var i = 0; i < allowed.length; i++) {
      if (allowed[i].toLowerCase() == ext) {
        return true;
      }
    }
    return false;
  },
  _formatSize: function _formatSize(bytes) {
    var i = -1;
    do {
      bytes = bytes / 1024;
      i++;
    } while (bytes > 99);
    return Math.max(bytes, 0.1).toFixed(1) + ['kB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];
  }
};

/**
 * Class that creates upload widget with drag-and-drop and file list
 * @inherits qq.FileUploaderBasic
 */

qq.FileUploader = function (o) {
  // call parent constructor
  qq.FileUploaderBasic.apply(this, arguments);

  // additional options
  qq.extend(this._options, {
    element: null,
    // if set, will be used instead of qq-upload-list in template
    listElement: null,
    template: '<div class="qq-uploader">' + '<div class="qq-upload-drop-area"><span>Drop files here to upload</span></div>' + '<div class="qq-upload-button">Upload a file</div>' + '<ul class="qq-upload-list"></ul>' + '</div>',
    // template for one item in file list
    fileTemplate: '<li>' + '<span class="qq-upload-file"></span>' + '<span class="qq-upload-spinner"></span>' + '<span class="qq-upload-size"></span>' + '<a class="qq-upload-cancel" href="#">Cancel</a>' + '<span class="qq-upload-failed-text">Failed</span>' + '</li>',
    classes: {
      // used to get elements from templates
      button: 'qq-upload-button',
      drop: 'qq-upload-drop-area',
      dropActive: 'qq-upload-drop-area-active',
      list: 'qq-upload-list',
      file: 'qq-upload-file',
      extendedFileName: 'qq-upload-file-extended',
      spinner: 'qq-upload-spinner',
      size: 'qq-upload-size',
      cancel: 'qq-upload-cancel',
      // added to list item when upload completes
      // used in css to hide progress spinner
      success: 'qq-upload-success',
      fail: 'qq-upload-fail'
    }
  });
  // overwrite options with user supplied
  this._options.dest = "";
  this._options.fileFieldLabel = "";
  qq.extend(this._options, o);
  this._element = this._options.element;
  this._element.innerHTML = this._options.template;
  this._listElement = this._options.listElement || this._find(this._element, 'list');
  this._classes = this._options.classes;
  this._button = this._createUploadButton(this._find(this._element, 'button'));
  this._bindCancelEvent();
  this._bindCancelAllEvent();
  this._setupDragDrop();
};

// inherit from Basic Uploader
qq.extend(qq.FileUploader.prototype, qq.FileUploaderBasic.prototype);
qq.extend(qq.FileUploader.prototype, {
  /**
   * Gets one of the elements listed in this._options.classes
   **/
  _find: function _find(parent, type, skipIfNotFound) {
    var element = qq.getByClass(parent, this._options.classes[type])[0];
    if (!element && typeof skipIfNotFound === 'undefined') {
      throw new Error('element not found ' + type);
    }
    return element;
  },
  _setupDragDrop: function _setupDragDrop() {
    var self = this,
      dropArea = this._find(this._element, 'drop');
    var dz = new qq.UploadDropZone({
      element: dropArea,
      onEnter: function onEnter(e) {
        qq.addClass(dropArea, self._classes.dropActive);
        e.stopPropagation();
      },
      onLeave: function onLeave(e) {
        e.stopPropagation();
      },
      onLeaveNotDescendants: function onLeaveNotDescendants(e) {
        qq.removeClass(dropArea, self._classes.dropActive);
      },
      onDrop: function onDrop(e) {
        dropArea.style.display = 'none';
        qq.removeClass(dropArea, self._classes.dropActive);
        self._uploadFileList(e.dataTransfer.files);
      }
    });
    dropArea.style.display = 'none';
    qq.attach(document, 'dragenter', function (e) {
      if (!dz._isValidFileDrag(e)) return;
      dropArea.style.display = 'block';
    });
    qq.attach(document, 'dragleave', function (e) {
      if (!dz._isValidFileDrag(e)) return;
      var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
      // only fire when leaving document out
      if (!relatedTarget || relatedTarget.nodeName == "HTML") {
        dropArea.style.display = 'none';
      }
    });
  },
  _onSubmit: function _onSubmit(id, fileName) {
    qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments);
    this._addToList(id, fileName);
  },
  _onProgress: function _onProgress(id, fileName, loaded, total) {
    qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);
    var item = this._getItemByFileId(id);
    var size = this._find(item, 'size');
    size.style.display = 'inline';
    var text;
    if (loaded != total) {
      text = Math.round(loaded / total * 100) + '% from ' + this._formatSize(total);
    } else {
      text = this._formatSize(total);
    }
    qq.setText(size, text);
  },
  _onComplete: function _onComplete(id, fileName, result) {
    qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments);

    // mark completed
    var item = this._getItemByFileId(id);
    qq.remove(this._find(item, 'cancel'));
    qq.remove(this._find(item, 'spinner'));
    if (result.status && result.status == -1) {
      qq.addClass(item, this._classes.fail);
    } else {
      qq.addClass(item, this._classes.success);
    }
  },
  _addToList: function _addToList(id, fileName) {
    var item = qq.toElement(this._options.fileTemplate);
    item.qqFileId = id;
    var fileElement = this._find(item, 'file');
    qq.setText(fileElement, this._formatFileName(fileName));
    var extendedFileElement = this._find(item, 'extendedFileName', true);
    if (extendedFileElement) {
      qq.setText(extendedFileElement, fileName);
    }
    this._find(item, 'size').style.display = 'none';
    this._listElement.appendChild(item);
  },
  _getItemByFileId: function _getItemByFileId(id) {
    var item = this._listElement.firstChild;

    // there can't be txt nodes in dynamically created list
    // and we can  use nextSibling
    while (item) {
      if (item.qqFileId == id) return item;
      item = item.nextSibling;
    }
  },
  /**
   * delegate click event for cancel link
   **/
  _bindCancelEvent: function _bindCancelEvent() {
    var self = this,
      list = this._listElement;
    qq.attach(list, 'click', function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement;
      if (qq.hasClass(target, self._classes.cancel)) {
        qq.preventDefault(e);
        var item = target.parentNode;
        if (qq.hasClass(item, 'complex-layout')) {
          item = item.parentNode.parentNode.parentNode;
        }
        self._handler.cancel(item.qqFileId);
        qq.remove(item);
      }
    });
  },
  _bindCancelAllEvent: function _bindCancelAllEvent() {
    var self = this,
      list = this._listElement;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#uploadFileModal').on('hidden', function () {
      for (var i = 0, l = list && list.childNodes.length; i < l; i++) {
        self._handler.cancel(list.childNodes[i].qqFileId);
      }
    });
  }
});
qq.UploadDropZone = function (o) {
  this._options = {
    element: null,
    onEnter: function onEnter(e) {},
    onLeave: function onLeave(e) {},
    // is not fired when leaving element by hovering descendants
    onLeaveNotDescendants: function onLeaveNotDescendants(e) {},
    onDrop: function onDrop(e) {}
  };
  qq.extend(this._options, o);
  this._element = this._options.element;
  this._disableDropOutside();
  this._attachEvents();
};
qq.UploadDropZone.prototype = {
  _disableDropOutside: function _disableDropOutside(e) {
    // run only once for all instances
    if (!qq.UploadDropZone.dropOutsideDisabled) {
      qq.attach(document, 'dragover', function (e) {
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
          e.preventDefault();
        }
      });
      qq.UploadDropZone.dropOutsideDisabled = true;
    }
  },
  _attachEvents: function _attachEvents() {
    var self = this;
    qq.attach(self._element, 'dragover', function (e) {
      if (!self._isValidFileDrag(e)) return;
      var effect = e.dataTransfer.effectAllowed;
      if (effect == 'move' || effect == 'linkMove') {
        e.dataTransfer.dropEffect = 'move'; // for FF (only move allowed)
      } else {
        e.dataTransfer.dropEffect = 'copy'; // for Chrome
      }
      e.stopPropagation();
      e.preventDefault();
    });
    qq.attach(self._element, 'dragenter', function (e) {
      if (!self._isValidFileDrag(e)) return;
      self._options.onEnter(e);
    });
    qq.attach(self._element, 'dragleave', function (e) {
      if (!self._isValidFileDrag(e)) return;
      self._options.onLeave(e);
      var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
      // do not fire when moving a mouse over a descendant
      if (qq.contains(this, relatedTarget)) return;
      self._options.onLeaveNotDescendants(e);
    });
    qq.attach(self._element, 'drop', function (e) {
      if (!self._isValidFileDrag(e)) return;
      e.preventDefault();
      self._options.onDrop(e);
    });
  },
  _isValidFileDrag: function _isValidFileDrag(e) {
    var dt = e.dataTransfer;
    // do not check dt.types.contains in webkit, because it crashes safari 4
    var isWebkit = navigator.userAgent.indexOf("AppleWebKit") > -1;
    var isIE9 = navigator.appVersion.indexOf("MSIE 9") > -1;
    if (isIE9) return false;

    // dt.effectAllowed is none in Safari 5
    // dt.types.contains check is for firefox
    return dt && dt.effectAllowed != 'none' && (dt.files || !isWebkit && dt.types && dt.types.contains && dt.types.contains('Files'));
  }
};
qq.UploadButton = function (o) {
  this._options = {
    element: null,
    // if set to true adds multiple attribute to file input
    multiple: false,
    // name attribute of file input
    name: 'file',
    onChange: function onChange(input) {},
    hoverClass: 'qq-upload-button-hover',
    focusClass: 'qq-upload-button-focus'
  };
  qq.extend(this._options, o);
  this._element = this._options.element;

  // make button suitable container for input
  qq.css(this._element, {
    position: 'relative',
    overflow: 'hidden',
    // Make sure browse button is in the right side
    // in Internet Explorer
    direction: 'ltr'
  });
  this._input = this._createInput();
};
qq.UploadButton.prototype = {
  /* returns file input element */
  getInput: function getInput() {
    return this._input;
  },
  /* cleans/recreates the file input */
  reset: function reset() {
    if (this._input.parentNode) {
      qq.remove(this._input);
    }
    qq.removeClass(this._element, this._options.focusClass);
    this._input = this._createInput();
  },
  _createInput: function _createInput() {
    var input = document.createElement("input");
    if (this._options.multiple) {
      input.setAttribute("multiple", "multiple");
    }
    input.setAttribute("type", "file");
    input.setAttribute("name", this._options.name);
    qq.css(input, {
      position: 'absolute',
      // in Opera only 'browse' button
      // is clickable and it is located at
      // the right side of the input
      right: 0,
      top: 0,
      fontFamily: 'Arial',
      // 4 persons reported this, the max values that worked for them were 243, 236, 236, 118
      fontSize: '118px',
      margin: 0,
      padding: 0,
      cursor: 'pointer',
      opacity: 0
    });
    this._element.appendChild(input);
    var self = this;
    qq.attach(input, 'change', function () {
      self._options.onChange(input);
    });
    qq.attach(input, 'mouseover', function () {
      qq.addClass(self._element, self._options.hoverClass);
    });
    qq.attach(input, 'mouseout', function () {
      qq.removeClass(self._element, self._options.hoverClass);
    });
    qq.attach(input, 'focus', function () {
      qq.addClass(self._element, self._options.focusClass);
    });
    qq.attach(input, 'blur', function () {
      qq.removeClass(self._element, self._options.focusClass);
    });

    // IE and Opera, unfortunately have 2 tab stops on file input
    // which is unacceptable in our case, disable keyboard access
    if (window.attachEvent) {
      // it is IE or Opera
      input.setAttribute('tabIndex', "-1");
    }
    return input;
  }
};

/**
 * Class for uploading files, uploading itself is handled by child classes
 */
qq.UploadHandlerAbstract = function (o) {
  this._options = {
    debug: false,
    action: '/upload.php',
    // maximum number of concurrent uploads
    maxConnections: 999,
    onProgress: function onProgress(id, fileName, loaded, total) {},
    onComplete: function onComplete(id, fileName, response) {},
    onCancel: function onCancel(id, fileName) {}
  };
  qq.extend(this._options, o);
  this._queue = [];
  // params for files in queue
  this._params = [];
};
qq.UploadHandlerAbstract.prototype = {
  log: function log(str) {
    if (this._options.debug && window.console) console.log('[uploader] ' + str);
  },
  /**
   * Adds file or file input to the queue
   * @returns id
   **/
  add: function add(file) {},
  /**
   * Sends the file identified by id and additional query params to the server
   */
  upload: function upload(id, params) {
    var len = this._queue.push(id);
    var copy = {};
    qq.extend(copy, params);
    this._params[id] = copy;

    // if too many active uploads, wait...
    if (len <= this._options.maxConnections) {
      this._upload(id, this._params[id]);
    }
  },
  /**
   * Cancels file upload by id
   */
  cancel: function cancel(id) {
    this._cancel(id);
    this._dequeue(id);
  },
  /**
   * Cancells all uploads
   */
  cancelAll: function cancelAll() {
    for (var i = 0; i < this._queue.length; i++) {
      this._cancel(this._queue[i]);
    }
    this._queue = [];
  },
  /**
   * Returns name of the file identified by id
   */
  getName: function getName(id) {},
  /**
   * Returns size of the file identified by id
   */
  getSize: function getSize(id) {},
  /**
   * Returns id of files being uploaded or
   * waiting for their turn
   */
  getQueue: function getQueue() {
    return this._queue;
  },
  /**
   * Actual upload method
   */
  _upload: function _upload(id) {},
  /**
   * Actual cancel method
   */
  _cancel: function _cancel(id) {},
  /**
   * Removes element from queue, starts upload of next
   */
  _dequeue: function _dequeue(id) {
    var i = qq.indexOf(this._queue, id);
    this._queue.splice(i, 1);
    var max = this._options.maxConnections;
    if (this._queue.length >= max && i < max) {
      var nextId = this._queue[max - 1];
      this._upload(nextId, this._params[nextId]);
    }
  }
};

/**
 * Class for uploading files using form and iframe
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerForm = function (o) {
  qq.UploadHandlerAbstract.apply(this, arguments);
  this._inputs = {};
};
// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerForm.prototype, qq.UploadHandlerAbstract.prototype);
qq.extend(qq.UploadHandlerForm.prototype, {
  add: function add(fileInput) {
    fileInput.setAttribute('name', 'qqfile');
    var id = 'qq-upload-handler-iframe' + qq.getUniqueId();
    this._inputs[id] = fileInput;

    // remove file input from DOM
    if (fileInput.parentNode) {
      qq.remove(fileInput);
    }
    return id;
  },
  getName: function getName(id) {
    // get input value and remove path to normalize
    return this._inputs[id].value.replace(/.*(\/|\\)/, "");
  },
  _cancel: function _cancel(id) {
    if (this._inputs[id]) {
      this._options.onCancel(id, this.getName(id));
    }
    delete this._inputs[id];
    var iframe = document.getElementById(id);
    if (iframe) {
      // to cancel request set src to something else
      // we use src="javascript:false;" because it doesn't
      // trigger ie6 prompt on https
      iframe.setAttribute('src', 'javascript:false;');
      qq.remove(iframe);
    }
  },
  _upload: function _upload(id, params) {
    var input = this._inputs[id];
    if (!input) {
      throw new Error('file with passed id was not added, or already uploaded or cancelled');
    }
    var fileName = this.getName(id);
    var iframe = this._createIframe(id);
    var form = this._createForm(iframe, params);
    input.name = params.fileFieldLabel;
    form.appendChild(input);
    var dest = document.createElement('input');
    dest.type = 'text';
    dest.name = 'dest';
    dest.value = params.dest;
    form.appendChild(dest);
    var csrfmiddlewaretoken = document.createElement('input');
    csrfmiddlewaretoken.type = 'hidden';
    csrfmiddlewaretoken.name = 'csrfmiddlewaretoken';
    csrfmiddlewaretoken.value = "${request and request.COOKIES.get('csrftoken', '')}";
    form.appendChild(csrfmiddlewaretoken);
    var self = this;
    this._attachLoadEvent(iframe, function () {
      self.log('iframe loaded');
      var response = self._getIframeContentJSON(iframe);
      self._options.onComplete(id, fileName, response);
      self._dequeue(id);
      delete self._inputs[id];
      // timeout added to fix busy state in FF3.6
      setTimeout(function () {
        qq.remove(iframe);
      }, 1);
    });
    form.submit();
    qq.remove(form);
    return id;
  },
  _attachLoadEvent: function _attachLoadEvent(iframe, callback) {
    qq.attach(iframe, 'load', function () {
      // when we remove iframe from dom
      // the request stops, but in IE load
      // event fires
      if (!iframe.parentNode) {
        return;
      }

      // fixing Opera 10.53
      if (iframe.contentDocument && iframe.contentDocument.body && iframe.contentDocument.body.innerHTML == "false") {
        // In Opera event is fired second time
        // when body.innerHTML changed from false
        // to server response approx. after 1 sec
        // when we upload file with iframe
        return;
      }
      callback();
    });
  },
  /**
   * Returns json object received by iframe from server.
   */
  _getIframeContentJSON: function _getIframeContentJSON(iframe) {
    // iframe.contentWindow.document - for IE<7
    var doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document,
      response;
    this.log("converting iframe's innerHTML to JSON");
    this.log("innerHTML = " + jquery__WEBPACK_IMPORTED_MODULE_0___default()(doc.body.innerHTML).text());
    try {
      response = eval("(" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(doc.body.innerHTML).text() + ")");
    } catch (err) {
      response = {};
    }
    return response;
  },
  /**
   * Creates iframe with unique name
   */
  _createIframe: function _createIframe(id) {
    // We can't use following code as the name attribute
    // won't be properly registered in IE6, and new window
    // on form submit will open
    // var iframe = document.createElement('iframe');
    // iframe.setAttribute('name', id);

    var iframe = qq.toElement('<iframe src="javascript:false;" name="' + id + '"></iframe>');
    // src="javascript:false;" removes ie6 prompt on https

    iframe.setAttribute('id', id);
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    return iframe;
  },
  /**
   * Creates form, that will be submitted to iframe
   */
  _createForm: function _createForm(iframe, params) {
    // We can't use the following code in IE6
    // var form = document.createElement('form');
    // form.setAttribute('method', 'post');
    // form.setAttribute('enctype', 'multipart/form-data');
    // Because in this case file won't be attached to request
    var form = qq.toElement('<form method="post" enctype="multipart/form-data"></form>');
    form.setAttribute('action', this._options.action);
    form.setAttribute('target', iframe.name);
    form.style.display = 'none';
    document.body.appendChild(form);
    return form;
  }
});

/**
 * Class for uploading files using xhr
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerXhr = function (o) {
  qq.UploadHandlerAbstract.apply(this, arguments);
  this._files = [];
  this._xhrs = [];

  // current loaded size in bytes for each file
  this._loaded = [];
};

// static method
qq.UploadHandlerXhr.isSupported = function () {
  var input = document.createElement('input');
  input.type = 'file';
  return 'multiple' in input && typeof File != "undefined" && typeof new XMLHttpRequest().upload != "undefined";
};

// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerXhr.prototype, qq.UploadHandlerAbstract.prototype);
qq.extend(qq.UploadHandlerXhr.prototype, {
  /**
   * Adds file to the queue
   * Returns id to use with upload, cancel
   **/
  add: function add(file) {
    // HUE-815: [fb] Upload button does not work in Firefox 3.6
    // see https://github.com/valums/ajax-upload/issues/91
    //if (!(file instanceof File)){
    if (!(file instanceof File || file.__proto__ && file.__proto__.constructor.name == 'File' || file instanceof Object)) {
      throw new Error('Passed obj in not a File (in qq.UploadHandlerXhr)');
    }
    return this._files.push(file) - 1;
  },
  getName: function getName(id) {
    var file = this._files[id];
    // fix missing name in Safari 4
    return file && (file.fileName || file.name);
  },
  getSize: function getSize(id) {
    var file = this._files[id];
    return file && (file.fileSize || file.size);
  },
  /**
   * Returns uploaded bytes for file identified by id
   */
  getLoaded: function getLoaded(id) {
    return this._loaded[id] || 0;
  },
  /**
   * Sends the file identified by id and additional query params to the server
   * @param {Object} params name-value string pairs
   */
  _upload: function _upload(id, params) {
    var file = this._files[id],
      name = this.getName(id),
      size = this.getSize(id);
    this._loaded[id] = 0;
    var xhr = this._xhrs[id] = new XMLHttpRequest();
    var self = this;
    xhr.upload.onprogress = function (e) {
      if (e.lengthComputable) {
        self._loaded[id] = e.loaded;
        self._options.onProgress(id, name, e.loaded, e.total);
      }
    };
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        self._onComplete(id, xhr);
      }
    };
    var formData = new FormData();
    formData.append(params.fileFieldLabel, file, file.name.normalize('NFC'));
    formData.append('dest', params.dest);
    var destination = encodeURIComponent(params.dest);
    var action = this._options.action + "?dest=" + destination;
    xhr.open("POST", action, true);
    xhr.send(formData);
  },
  _onComplete: function _onComplete(id, xhr) {
    // the request was aborted/cancelled
    if (!this._files[id]) return;
    var name = this.getName(id);
    var size = this.getSize(id);
    this._options.onProgress(id, name, size, size);
    if (xhr.status == 200) {
      this.log("xhr - server response received");
      this.log("responseText = " + xhr.responseText);
      var response;
      try {
        response = eval("(" + xhr.responseText + ")");
      } catch (err) {
        response = {};
      }
      this._options.onComplete(id, name, response);
    } else {
      this._options.onComplete(id, name, xhr);
    }
    this._files[id] = null;
    this._xhrs[id] = null;
    this._dequeue(id);
  },
  _cancel: function _cancel(id) {
    if (this._files[id]) {
      this._options.onCancel(id, this.getName(id));
    }
    this._files[id] = null;
    if (this._xhrs[id]) {
      this._xhrs[id].abort();
      this._xhrs[id] = null;
    }
  }
});
var fileuploader = qq;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fileuploader);

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/fileuploader.custom.new.js":
/*!********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/fileuploader.custom.new.js ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// Fine Uploader 5.16.2 - MIT licensed. http://fineuploader.com

(function (global) {
  var qq = function qq(element) {
    "use strict";

    return {
      hide: function hide() {
        element.style.display = "none";
        return this;
      },
      attach: function attach(type, fn) {
        if (element.addEventListener) {
          element.addEventListener(type, fn, false);
        } else if (element.attachEvent) {
          element.attachEvent("on" + type, fn);
        }
        return function () {
          qq(element).detach(type, fn);
        };
      },
      detach: function detach(type, fn) {
        if (element.removeEventListener) {
          element.removeEventListener(type, fn, false);
        } else if (element.attachEvent) {
          element.detachEvent("on" + type, fn);
        }
        return this;
      },
      contains: function contains(descendant) {
        if (!descendant) {
          return false;
        }
        if (element === descendant) {
          return true;
        }
        if (element.contains) {
          return element.contains(descendant);
        } else {
          return !!(descendant.compareDocumentPosition(element) & 8);
        }
      },
      insertBefore: function insertBefore(elementB) {
        elementB.parentNode.insertBefore(element, elementB);
        return this;
      },
      remove: function remove() {
        element.parentNode.removeChild(element);
        return this;
      },
      css: function css(styles) {
        if (element.style == null) {
          throw new qq.Error("Can't apply style to node as it is not on the HTMLElement prototype chain!");
        }
        if (styles.opacity != null) {
          if (typeof element.style.opacity !== "string" && typeof element.filters !== "undefined") {
            styles.filter = "alpha(opacity=" + Math.round(100 * styles.opacity) + ")";
          }
        }
        qq.extend(element.style, styles);
        return this;
      },
      hasClass: function hasClass(name, considerParent) {
        var re = new RegExp("(^| )" + name + "( |$)");
        return re.test(element.className) || !!(considerParent && re.test(element.parentNode.className));
      },
      addClass: function addClass(name) {
        if (!qq(element).hasClass(name)) {
          element.className += " " + name;
        }
        return this;
      },
      removeClass: function removeClass(name) {
        var re = new RegExp("(^| )" + name + "( |$)");
        element.className = element.className.replace(re, " ").replace(/^\s+|\s+$/g, "");
        return this;
      },
      getByClass: function getByClass(className, first) {
        var candidates,
          result = [];
        if (first && element.querySelector) {
          return element.querySelector("." + className);
        } else if (element.querySelectorAll) {
          return element.querySelectorAll("." + className);
        }
        candidates = element.getElementsByTagName("*");
        qq.each(candidates, function (idx, val) {
          if (qq(val).hasClass(className)) {
            result.push(val);
          }
        });
        return first ? result[0] : result;
      },
      getFirstByClass: function getFirstByClass(className) {
        return qq(element).getByClass(className, true);
      },
      children: function children() {
        var children = [],
          child = element.firstChild;
        while (child) {
          if (child.nodeType === 1) {
            children.push(child);
          }
          child = child.nextSibling;
        }
        return children;
      },
      setText: function setText(text) {
        element.innerText = text;
        element.textContent = text;
        return this;
      },
      clearText: function clearText() {
        return qq(element).setText("");
      },
      hasAttribute: function hasAttribute(attrName) {
        var attrVal;
        if (element.hasAttribute) {
          if (!element.hasAttribute(attrName)) {
            return false;
          }
          return /^false$/i.exec(element.getAttribute(attrName)) == null;
        } else {
          attrVal = element[attrName];
          if (attrVal === undefined) {
            return false;
          }
          return /^false$/i.exec(attrVal) == null;
        }
      }
    };
  };
  (function () {
    "use strict";

    qq.canvasToBlob = function (canvas, mime, quality) {
      return qq.dataUriToBlob(canvas.toDataURL(mime, quality));
    };
    qq.dataUriToBlob = function (dataUri) {
      var arrayBuffer,
        byteString,
        createBlob = function createBlob(data, mime) {
          var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
            blobBuilder = BlobBuilder && new BlobBuilder();
          if (blobBuilder) {
            blobBuilder.append(data);
            return blobBuilder.getBlob(mime);
          } else {
            return new Blob([data], {
              type: mime
            });
          }
        },
        intArray,
        mimeString;
      if (dataUri.split(",")[0].indexOf("base64") >= 0) {
        byteString = atob(dataUri.split(",")[1]);
      } else {
        byteString = decodeURI(dataUri.split(",")[1]);
      }
      mimeString = dataUri.split(",")[0].split(":")[1].split(";")[0];
      arrayBuffer = new ArrayBuffer(byteString.length);
      intArray = new Uint8Array(arrayBuffer);
      qq.each(byteString, function (idx, character) {
        intArray[idx] = character.charCodeAt(0);
      });
      return createBlob(arrayBuffer, mimeString);
    };
    qq.log = function (message, level) {
      if (window.console) {
        if (!level || level === "info") {
          window.console.log(message);
        } else {
          if (window.console[level]) {
            window.console[level](message);
          } else {
            window.console.log("<" + level + "> " + message);
          }
        }
      }
    };
    qq.isObject = function (variable) {
      return variable && !variable.nodeType && Object.prototype.toString.call(variable) === "[object Object]";
    };
    qq.isFunction = function (variable) {
      return typeof variable === "function";
    };
    qq.isArray = function (value) {
      return Object.prototype.toString.call(value) === "[object Array]" || value && window.ArrayBuffer && value.buffer && value.buffer.constructor === ArrayBuffer;
    };
    qq.isItemList = function (maybeItemList) {
      return Object.prototype.toString.call(maybeItemList) === "[object DataTransferItemList]";
    };
    qq.isNodeList = function (maybeNodeList) {
      return Object.prototype.toString.call(maybeNodeList) === "[object NodeList]" || maybeNodeList.item && maybeNodeList.namedItem;
    };
    qq.isString = function (maybeString) {
      return Object.prototype.toString.call(maybeString) === "[object String]";
    };
    qq.trimStr = function (string) {
      if (String.prototype.trim) {
        return string.trim();
      }
      return string.replace(/^\s+|\s+$/g, "");
    };
    qq.format = function (str) {
      var args = Array.prototype.slice.call(arguments, 1),
        newStr = str,
        nextIdxToReplace = newStr.indexOf("{}");
      qq.each(args, function (idx, val) {
        var strBefore = newStr.substring(0, nextIdxToReplace),
          strAfter = newStr.substring(nextIdxToReplace + 2);
        newStr = strBefore + val + strAfter;
        nextIdxToReplace = newStr.indexOf("{}", nextIdxToReplace + val.length);
        if (nextIdxToReplace < 0) {
          return false;
        }
      });
      return newStr;
    };
    qq.isFile = function (maybeFile) {
      return window.File && Object.prototype.toString.call(maybeFile) === "[object File]";
    };
    qq.isFileList = function (maybeFileList) {
      return window.FileList && Object.prototype.toString.call(maybeFileList) === "[object FileList]";
    };
    qq.isFileOrInput = function (maybeFileOrInput) {
      return qq.isFile(maybeFileOrInput) || qq.isInput(maybeFileOrInput);
    };
    qq.isInput = function (maybeInput, notFile) {
      var evaluateType = function evaluateType(type) {
        var normalizedType = type.toLowerCase();
        if (notFile) {
          return normalizedType !== "file";
        }
        return normalizedType === "file";
      };
      if (window.HTMLInputElement) {
        if (Object.prototype.toString.call(maybeInput) === "[object HTMLInputElement]") {
          if (maybeInput.type && evaluateType(maybeInput.type)) {
            return true;
          }
        }
      }
      if (maybeInput.tagName) {
        if (maybeInput.tagName.toLowerCase() === "input") {
          if (maybeInput.type && evaluateType(maybeInput.type)) {
            return true;
          }
        }
      }
      return false;
    };
    qq.isBlob = function (maybeBlob) {
      if (window.Blob && Object.prototype.toString.call(maybeBlob) === "[object Blob]") {
        return true;
      }
    };
    qq.isXhrUploadSupported = function () {
      var input = document.createElement("input");
      input.type = "file";
      return input.multiple !== undefined && typeof File !== "undefined" && typeof FormData !== "undefined" && typeof qq.createXhrInstance().upload !== "undefined";
    };
    qq.createXhrInstance = function () {
      if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
      }
      try {
        return new ActiveXObject("MSXML2.XMLHTTP.3.0");
      } catch (error) {
        qq.log("Neither XHR or ActiveX are supported!", "error");
        return null;
      }
    };
    qq.isFolderDropSupported = function (dataTransfer) {
      return dataTransfer.items && dataTransfer.items.length > 0 && dataTransfer.items[0].webkitGetAsEntry;
    };
    qq.isFileChunkingSupported = function () {
      return !qq.androidStock() && qq.isXhrUploadSupported() && (File.prototype.slice !== undefined || File.prototype.webkitSlice !== undefined || File.prototype.mozSlice !== undefined);
    };
    qq.sliceBlob = function (fileOrBlob, start, end) {
      var slicer = fileOrBlob.slice || fileOrBlob.mozSlice || fileOrBlob.webkitSlice;
      return slicer.call(fileOrBlob, start, end);
    };
    qq.arrayBufferToHex = function (buffer) {
      var bytesAsHex = "",
        bytes = new Uint8Array(buffer);
      qq.each(bytes, function (idx, byt) {
        var byteAsHexStr = byt.toString(16);
        if (byteAsHexStr.length < 2) {
          byteAsHexStr = "0" + byteAsHexStr;
        }
        bytesAsHex += byteAsHexStr;
      });
      return bytesAsHex;
    };
    qq.readBlobToHex = function (blob, startOffset, length) {
      var initialBlob = qq.sliceBlob(blob, startOffset, startOffset + length),
        fileReader = new FileReader(),
        promise = new qq.Promise();
      fileReader.onload = function () {
        promise.success(qq.arrayBufferToHex(fileReader.result));
      };
      fileReader.onerror = promise.failure;
      fileReader.readAsArrayBuffer(initialBlob);
      return promise;
    };
    qq.extend = function (first, second, extendNested) {
      qq.each(second, function (prop, val) {
        if (extendNested && qq.isObject(val)) {
          if (first[prop] === undefined) {
            first[prop] = {};
          }
          qq.extend(first[prop], val, true);
        } else {
          first[prop] = val;
        }
      });
      return first;
    };
    qq.override = function (target, sourceFn) {
      var super_ = {},
        source = sourceFn(super_);
      qq.each(source, function (srcPropName, srcPropVal) {
        if (target[srcPropName] !== undefined) {
          super_[srcPropName] = target[srcPropName];
        }
        target[srcPropName] = srcPropVal;
      });
      return target;
    };
    qq.indexOf = function (arr, elt, from) {
      if (arr.indexOf) {
        return arr.indexOf(elt, from);
      }
      from = from || 0;
      var len = arr.length;
      if (from < 0) {
        from += len;
      }
      for (; from < len; from += 1) {
        if (arr.hasOwnProperty(from) && arr[from] === elt) {
          return from;
        }
      }
      return -1;
    };
    qq.getUniqueId = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
          v = c == "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
    };
    qq.ie = function () {
      return navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1;
    };
    qq.ie7 = function () {
      return navigator.userAgent.indexOf("MSIE 7") !== -1;
    };
    qq.ie8 = function () {
      return navigator.userAgent.indexOf("MSIE 8") !== -1;
    };
    qq.ie10 = function () {
      return navigator.userAgent.indexOf("MSIE 10") !== -1;
    };
    qq.ie11 = function () {
      return qq.ie() && navigator.userAgent.indexOf("rv:11") !== -1;
    };
    qq.edge = function () {
      return navigator.userAgent.indexOf("Edge") >= 0;
    };
    qq.safari = function () {
      return navigator.vendor !== undefined && navigator.vendor.indexOf("Apple") !== -1;
    };
    qq.chrome = function () {
      return navigator.vendor !== undefined && navigator.vendor.indexOf("Google") !== -1;
    };
    qq.opera = function () {
      return navigator.vendor !== undefined && navigator.vendor.indexOf("Opera") !== -1;
    };
    qq.firefox = function () {
      return !qq.edge() && !qq.ie11() && navigator.userAgent.indexOf("Mozilla") !== -1 && navigator.vendor !== undefined && navigator.vendor === "";
    };
    qq.windows = function () {
      return navigator.platform === "Win32";
    };
    qq.android = function () {
      return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
    };
    qq.androidStock = function () {
      return qq.android() && navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && navigator.userAgent.toLowerCase().indexOf("firefox") < 0;
    };
    qq.ios6 = function () {
      return qq.ios() && navigator.userAgent.indexOf(" OS 6_") !== -1;
    };
    qq.ios7 = function () {
      return qq.ios() && navigator.userAgent.indexOf(" OS 7_") !== -1;
    };
    qq.ios8 = function () {
      return qq.ios() && navigator.userAgent.indexOf(" OS 8_") !== -1;
    };
    qq.ios800 = function () {
      return qq.ios() && navigator.userAgent.indexOf(" OS 8_0 ") !== -1;
    };
    qq.ios = function () {
      return navigator.userAgent.indexOf("iPad") !== -1 || navigator.userAgent.indexOf("iPod") !== -1 || navigator.userAgent.indexOf("iPhone") !== -1;
    };
    qq.iosChrome = function () {
      return qq.ios() && navigator.userAgent.indexOf("CriOS") !== -1;
    };
    qq.iosSafari = function () {
      return qq.ios() && !qq.iosChrome() && navigator.userAgent.indexOf("Safari") !== -1;
    };
    qq.iosSafariWebView = function () {
      return qq.ios() && !qq.iosChrome() && !qq.iosSafari();
    };
    qq.preventDefault = function (e) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    };
    qq.toElement = function () {
      var div = document.createElement("div");
      return function (html) {
        div.innerHTML = html;
        var element = div.firstChild;
        div.removeChild(element);
        return element;
      };
    }();
    qq.each = function (iterableItem, callback) {
      var keyOrIndex, retVal;
      if (iterableItem) {
        if (window.Storage && iterableItem.constructor === window.Storage) {
          for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
            retVal = callback(iterableItem.key(keyOrIndex), iterableItem.getItem(iterableItem.key(keyOrIndex)));
            if (retVal === false) {
              break;
            }
          }
        } else if (qq.isArray(iterableItem) || qq.isItemList(iterableItem) || qq.isNodeList(iterableItem)) {
          for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
            retVal = callback(keyOrIndex, iterableItem[keyOrIndex]);
            if (retVal === false) {
              break;
            }
          }
        } else if (qq.isString(iterableItem)) {
          for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
            retVal = callback(keyOrIndex, iterableItem.charAt(keyOrIndex));
            if (retVal === false) {
              break;
            }
          }
        } else {
          for (keyOrIndex in iterableItem) {
            if (Object.prototype.hasOwnProperty.call(iterableItem, keyOrIndex)) {
              retVal = callback(keyOrIndex, iterableItem[keyOrIndex]);
              if (retVal === false) {
                break;
              }
            }
          }
        }
      }
    };
    qq.bind = function (oldFunc, context) {
      if (qq.isFunction(oldFunc)) {
        var args = Array.prototype.slice.call(arguments, 2);
        return function () {
          var newArgs = qq.extend([], args);
          if (arguments.length) {
            newArgs = newArgs.concat(Array.prototype.slice.call(arguments));
          }
          return oldFunc.apply(context, newArgs);
        };
      }
      throw new Error("first parameter must be a function!");
    };
    qq.obj2url = function (obj, temp, prefixDone) {
      var uristrings = [],
        prefix = "&",
        add = function add(nextObj, i) {
          var nextTemp = temp ? /\[\]$/.test(temp) ? temp : temp + "[" + i + "]" : i;
          if (nextTemp !== "undefined" && i !== "undefined") {
            uristrings.push(_typeof(nextObj) === "object" ? qq.obj2url(nextObj, nextTemp, true) : Object.prototype.toString.call(nextObj) === "[object Function]" ? encodeURIComponent(nextTemp) + "=" + encodeURIComponent(nextObj()) : encodeURIComponent(nextTemp) + "=" + encodeURIComponent(nextObj));
          }
        };
      if (!prefixDone && temp) {
        prefix = /\?/.test(temp) ? /\?$/.test(temp) ? "" : "&" : "?";
        uristrings.push(temp);
        uristrings.push(qq.obj2url(obj));
      } else if (Object.prototype.toString.call(obj) === "[object Array]" && typeof obj !== "undefined") {
        qq.each(obj, function (idx, val) {
          add(val, idx);
        });
      } else if (typeof obj !== "undefined" && obj !== null && _typeof(obj) === "object") {
        qq.each(obj, function (prop, val) {
          add(val, prop);
        });
      } else {
        uristrings.push(encodeURIComponent(temp) + "=" + encodeURIComponent(obj));
      }
      if (temp) {
        return uristrings.join(prefix);
      } else {
        return uristrings.join(prefix).replace(/^&/, "").replace(/%20/g, "+");
      }
    };
    qq.obj2FormData = function (obj, formData, arrayKeyName) {
      if (!formData) {
        formData = new FormData();
      }
      qq.each(obj, function (key, val) {
        key = arrayKeyName ? arrayKeyName + "[" + key + "]" : key;
        if (qq.isObject(val)) {
          qq.obj2FormData(val, formData, key);
        } else if (qq.isFunction(val)) {
          formData.append(key, val());
        } else {
          formData.append(key, val);
        }
      });
      return formData;
    };
    qq.obj2Inputs = function (obj, form) {
      var input;
      if (!form) {
        form = document.createElement("form");
      }
      qq.obj2FormData(obj, {
        append: function append(key, val) {
          input = document.createElement("input");
          input.setAttribute("name", key);
          input.setAttribute("value", val);
          form.appendChild(input);
        }
      });
      return form;
    };
    qq.parseJson = function (json) {
      if (window.JSON && qq.isFunction(JSON.parse)) {
        return JSON.parse(json);
      } else {
        return eval("(" + json + ")");
      }
    };
    qq.getExtension = function (filename) {
      var extIdx = filename.lastIndexOf(".") + 1;
      if (extIdx > 0) {
        return filename.substr(extIdx, filename.length - extIdx);
      }
    };
    qq.getFilename = function (blobOrFileInput) {
      if (qq.isInput(blobOrFileInput)) {
        return blobOrFileInput.value.replace(/.*(\/|\\)/, "");
      } else if (qq.isFile(blobOrFileInput)) {
        if (blobOrFileInput.fileName !== null && blobOrFileInput.fileName !== undefined) {
          return blobOrFileInput.fileName;
        }
      }
      return blobOrFileInput.name;
    };
    qq.DisposeSupport = function () {
      var disposers = [];
      return {
        dispose: function dispose() {
          var disposer;
          do {
            disposer = disposers.shift();
            if (disposer) {
              disposer();
            }
          } while (disposer);
        },
        attach: function attach() {
          var args = arguments;
          this.addDisposer(qq(args[0]).attach.apply(this, Array.prototype.slice.call(arguments, 1)));
        },
        addDisposer: function addDisposer(disposeFunction) {
          disposers.push(disposeFunction);
        }
      };
    };
  })();
  (function () {
    "use strict";

    if (typeof define === "function" && __webpack_require__.amdO) {
      define(function () {
        return qq;
      });
    } else if ( true && module.exports) {
      module.exports = qq;
    } else {
      global.qq = qq;
    }
  })();
  (function () {
    "use strict";

    qq.Error = function (message) {
      this.message = "[Fine Uploader " + qq.version + "] " + message;
    };
    qq.Error.prototype = new Error();
  })();
  qq.version = "5.16.2";
  qq.supportedFeatures = function () {
    "use strict";

    var supportsUploading, supportsUploadingBlobs, supportsFileDrop, supportsAjaxFileUploading, supportsFolderDrop, supportsChunking, supportsResume, supportsUploadViaPaste, supportsUploadCors, supportsDeleteFileXdr, supportsDeleteFileCorsXhr, supportsDeleteFileCors, supportsFolderSelection, supportsImagePreviews, supportsUploadProgress;
    function testSupportsFileInputElement() {
      var supported = true,
        tempInput;
      try {
        tempInput = document.createElement("input");
        tempInput.type = "file";
        qq(tempInput).hide();
        if (tempInput.disabled) {
          supported = false;
        }
      } catch (ex) {
        supported = false;
      }
      return supported;
    }
    function isChrome14OrHigher() {
      return (qq.chrome() || qq.opera()) && navigator.userAgent.match(/Chrome\/[1][4-9]|Chrome\/[2-9][0-9]/) !== undefined;
    }
    function isCrossOriginXhrSupported() {
      if (window.XMLHttpRequest) {
        var xhr = qq.createXhrInstance();
        return xhr.withCredentials !== undefined;
      }
      return false;
    }
    function isXdrSupported() {
      return window.XDomainRequest !== undefined;
    }
    function isCrossOriginAjaxSupported() {
      if (isCrossOriginXhrSupported()) {
        return true;
      }
      return isXdrSupported();
    }
    function isFolderSelectionSupported() {
      return document.createElement("input").webkitdirectory !== undefined;
    }
    function isLocalStorageSupported() {
      try {
        return !!window.localStorage && qq.isFunction(window.localStorage.setItem);
      } catch (error) {
        return false;
      }
    }
    function isDragAndDropSupported() {
      var span = document.createElement("span");
      return ("draggable" in span || "ondragstart" in span && "ondrop" in span) && !qq.android() && !qq.ios();
    }
    supportsUploading = testSupportsFileInputElement();
    supportsAjaxFileUploading = supportsUploading && qq.isXhrUploadSupported();
    supportsUploadingBlobs = supportsAjaxFileUploading && !qq.androidStock();
    supportsFileDrop = supportsAjaxFileUploading && isDragAndDropSupported();
    supportsFolderDrop = supportsFileDrop && function () {
      var input = document.createElement("input");
      input.type = "file";
      return !!("webkitdirectory" in (input || document.querySelectorAll("input[type=file]")[0]));
    }();
    supportsChunking = supportsAjaxFileUploading && qq.isFileChunkingSupported();
    supportsResume = supportsAjaxFileUploading && supportsChunking && isLocalStorageSupported();
    supportsUploadViaPaste = supportsAjaxFileUploading && isChrome14OrHigher();
    supportsUploadCors = supportsUploading && (window.postMessage !== undefined || supportsAjaxFileUploading);
    supportsDeleteFileCorsXhr = isCrossOriginXhrSupported();
    supportsDeleteFileXdr = isXdrSupported();
    supportsDeleteFileCors = isCrossOriginAjaxSupported();
    supportsFolderSelection = isFolderSelectionSupported();
    supportsImagePreviews = supportsAjaxFileUploading && window.FileReader !== undefined;
    supportsUploadProgress = function () {
      if (supportsAjaxFileUploading) {
        return !qq.androidStock() && !qq.iosChrome();
      }
      return false;
    }();
    return {
      ajaxUploading: supportsAjaxFileUploading,
      blobUploading: supportsUploadingBlobs,
      canDetermineSize: supportsAjaxFileUploading,
      chunking: supportsChunking,
      deleteFileCors: supportsDeleteFileCors,
      deleteFileCorsXdr: supportsDeleteFileXdr,
      deleteFileCorsXhr: supportsDeleteFileCorsXhr,
      dialogElement: !!window.HTMLDialogElement,
      fileDrop: supportsFileDrop,
      folderDrop: supportsFolderDrop,
      folderSelection: supportsFolderSelection,
      imagePreviews: supportsImagePreviews,
      imageValidation: supportsImagePreviews,
      itemSizeValidation: supportsAjaxFileUploading,
      pause: supportsChunking,
      progressBar: supportsUploadProgress,
      resume: supportsResume,
      scaling: supportsImagePreviews && supportsUploadingBlobs,
      tiffPreviews: qq.safari(),
      unlimitedScaledImageSize: !qq.ios(),
      uploading: supportsUploading,
      uploadCors: supportsUploadCors,
      uploadCustomHeaders: supportsAjaxFileUploading,
      uploadNonMultipart: supportsAjaxFileUploading,
      uploadViaPaste: supportsUploadViaPaste
    };
  }();
  qq.isGenericPromise = function (maybePromise) {
    "use strict";

    return !!(maybePromise && maybePromise.then && qq.isFunction(maybePromise.then));
  };
  qq.Promise = function () {
    "use strict";

    var successArgs,
      failureArgs,
      successCallbacks = [],
      failureCallbacks = [],
      doneCallbacks = [],
      state = 0;
    qq.extend(this, {
      then: function then(onSuccess, onFailure) {
        if (state === 0) {
          if (onSuccess) {
            successCallbacks.push(onSuccess);
          }
          if (onFailure) {
            failureCallbacks.push(onFailure);
          }
        } else if (state === -1) {
          onFailure && onFailure.apply(null, failureArgs);
        } else if (onSuccess) {
          onSuccess.apply(null, successArgs);
        }
        return this;
      },
      done: function done(callback) {
        if (state === 0) {
          doneCallbacks.push(callback);
        } else {
          callback.apply(null, failureArgs === undefined ? successArgs : failureArgs);
        }
        return this;
      },
      success: function success() {
        state = 1;
        successArgs = arguments;
        if (successCallbacks.length) {
          qq.each(successCallbacks, function (idx, callback) {
            callback.apply(null, successArgs);
          });
        }
        if (doneCallbacks.length) {
          qq.each(doneCallbacks, function (idx, callback) {
            callback.apply(null, successArgs);
          });
        }
        return this;
      },
      failure: function failure() {
        state = -1;
        failureArgs = arguments;
        if (failureCallbacks.length) {
          qq.each(failureCallbacks, function (idx, callback) {
            callback.apply(null, failureArgs);
          });
        }
        if (doneCallbacks.length) {
          qq.each(doneCallbacks, function (idx, callback) {
            callback.apply(null, failureArgs);
          });
        }
        return this;
      }
    });
  };
  qq.BlobProxy = function (referenceBlob, onCreate) {
    "use strict";

    qq.extend(this, {
      referenceBlob: referenceBlob,
      create: function create() {
        return onCreate(referenceBlob);
      }
    });
  };
  qq.UploadButton = function (o) {
    "use strict";

    var self = this,
      disposeSupport = new qq.DisposeSupport(),
      options = {
        acceptFiles: null,
        element: null,
        focusClass: "qq-upload-button-focus",
        folders: false,
        hoverClass: "qq-upload-button-hover",
        ios8BrowserCrashWorkaround: false,
        multiple: false,
        name: "qqfile",
        onChange: function onChange(input) {},
        title: null
      },
      input,
      buttonId;
    qq.extend(options, o);
    buttonId = qq.getUniqueId();
    function createInput() {
      var input = document.createElement("input");
      input.setAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME, buttonId);
      input.setAttribute("title", options.title);
      self.setMultiple(options.multiple, input);
      if (options.folders && qq.supportedFeatures.folderSelection) {
        input.setAttribute("webkitdirectory", "");
      }
      if (options.acceptFiles) {
        input.setAttribute("accept", options.acceptFiles);
      }
      input.setAttribute("type", "file");
      input.setAttribute("name", options.name);
      qq(input).css({
        position: "absolute",
        right: 0,
        top: 0,
        fontFamily: "Arial",
        fontSize: qq.ie() && !qq.ie8() ? "3500px" : "118px",
        margin: 0,
        padding: 0,
        cursor: "pointer",
        opacity: 0
      });
      !qq.ie7() && qq(input).css({
        height: "100%"
      });
      options.element.appendChild(input);
      disposeSupport.attach(input, "change", function () {
        options.onChange(input);
      });
      disposeSupport.attach(input, "mouseover", function () {
        qq(options.element).addClass(options.hoverClass);
      });
      disposeSupport.attach(input, "mouseout", function () {
        qq(options.element).removeClass(options.hoverClass);
      });
      disposeSupport.attach(input, "focus", function () {
        qq(options.element).addClass(options.focusClass);
      });
      disposeSupport.attach(input, "blur", function () {
        qq(options.element).removeClass(options.focusClass);
      });
      return input;
    }
    qq(options.element).css({
      position: "relative",
      overflow: "hidden",
      direction: "ltr"
    });
    qq.extend(this, {
      getInput: function getInput() {
        return input;
      },
      getButtonId: function getButtonId() {
        return buttonId;
      },
      setMultiple: function setMultiple(isMultiple, optInput) {
        var input = optInput || this.getInput();
        if (options.ios8BrowserCrashWorkaround && qq.ios8() && (qq.iosChrome() || qq.iosSafariWebView())) {
          input.setAttribute("multiple", "");
        } else {
          if (isMultiple) {
            input.setAttribute("multiple", "");
          } else {
            input.removeAttribute("multiple");
          }
        }
      },
      setAcceptFiles: function setAcceptFiles(acceptFiles) {
        if (acceptFiles !== options.acceptFiles) {
          input.setAttribute("accept", acceptFiles);
        }
      },
      reset: function reset() {
        if (input.parentNode) {
          qq(input).remove();
        }
        qq(options.element).removeClass(options.focusClass);
        input = null;
        input = createInput();
      }
    });
    input = createInput();
  };
  qq.UploadButton.BUTTON_ID_ATTR_NAME = "qq-button-id";
  qq.UploadData = function (uploaderProxy) {
    "use strict";

    var data = [],
      byUuid = {},
      byStatus = {},
      byProxyGroupId = {},
      byBatchId = {};
    function getDataByIds(idOrIds) {
      if (qq.isArray(idOrIds)) {
        var entries = [];
        qq.each(idOrIds, function (idx, id) {
          entries.push(data[id]);
        });
        return entries;
      }
      return data[idOrIds];
    }
    function getDataByUuids(uuids) {
      if (qq.isArray(uuids)) {
        var entries = [];
        qq.each(uuids, function (idx, uuid) {
          entries.push(data[byUuid[uuid]]);
        });
        return entries;
      }
      return data[byUuid[uuids]];
    }
    function getDataByStatus(status) {
      var statusResults = [],
        statuses = [].concat(status);
      qq.each(statuses, function (index, statusEnum) {
        var statusResultIndexes = byStatus[statusEnum];
        if (statusResultIndexes !== undefined) {
          qq.each(statusResultIndexes, function (i, dataIndex) {
            statusResults.push(data[dataIndex]);
          });
        }
      });
      return statusResults;
    }
    qq.extend(this, {
      addFile: function addFile(spec) {
        var status = spec.status || qq.status.SUBMITTING,
          id = data.push({
            name: spec.name,
            originalName: spec.name,
            uuid: spec.uuid,
            size: spec.size == null ? -1 : spec.size,
            status: status,
            file: spec.file
          }) - 1;
        if (spec.batchId) {
          data[id].batchId = spec.batchId;
          if (byBatchId[spec.batchId] === undefined) {
            byBatchId[spec.batchId] = [];
          }
          byBatchId[spec.batchId].push(id);
        }
        if (spec.proxyGroupId) {
          data[id].proxyGroupId = spec.proxyGroupId;
          if (byProxyGroupId[spec.proxyGroupId] === undefined) {
            byProxyGroupId[spec.proxyGroupId] = [];
          }
          byProxyGroupId[spec.proxyGroupId].push(id);
        }
        data[id].id = id;
        byUuid[spec.uuid] = id;
        if (byStatus[status] === undefined) {
          byStatus[status] = [];
        }
        byStatus[status].push(id);
        spec.onBeforeStatusChange && spec.onBeforeStatusChange(id);
        uploaderProxy.onStatusChange(id, null, status);
        return id;
      },
      retrieve: function retrieve(optionalFilter) {
        if (qq.isObject(optionalFilter) && data.length) {
          if (optionalFilter.id !== undefined) {
            return getDataByIds(optionalFilter.id);
          } else if (optionalFilter.uuid !== undefined) {
            return getDataByUuids(optionalFilter.uuid);
          } else if (optionalFilter.status) {
            return getDataByStatus(optionalFilter.status);
          }
        } else {
          return qq.extend([], data, true);
        }
      },
      removeFileRef: function removeFileRef(id) {
        var record = getDataByIds(id);
        if (record) {
          delete record.file;
        }
      },
      reset: function reset() {
        data = [];
        byUuid = {};
        byStatus = {};
        byBatchId = {};
      },
      setStatus: function setStatus(id, newStatus) {
        var oldStatus = data[id].status,
          byStatusOldStatusIndex = qq.indexOf(byStatus[oldStatus], id);
        byStatus[oldStatus].splice(byStatusOldStatusIndex, 1);
        data[id].status = newStatus;
        if (byStatus[newStatus] === undefined) {
          byStatus[newStatus] = [];
        }
        byStatus[newStatus].push(id);
        uploaderProxy.onStatusChange(id, oldStatus, newStatus);
      },
      uuidChanged: function uuidChanged(id, newUuid) {
        var oldUuid = data[id].uuid;
        data[id].uuid = newUuid;
        byUuid[newUuid] = id;
        delete byUuid[oldUuid];
      },
      updateName: function updateName(id, newName) {
        data[id].name = newName;
      },
      updateSize: function updateSize(id, newSize) {
        data[id].size = newSize;
      },
      setParentId: function setParentId(targetId, parentId) {
        data[targetId].parentId = parentId;
      },
      getIdsInProxyGroup: function getIdsInProxyGroup(id) {
        var proxyGroupId = data[id].proxyGroupId;
        if (proxyGroupId) {
          return byProxyGroupId[proxyGroupId];
        }
        return [];
      },
      getIdsInBatch: function getIdsInBatch(id) {
        var batchId = data[id].batchId;
        return byBatchId[batchId];
      }
    });
  };
  qq.status = {
    SUBMITTING: "submitting",
    SUBMITTED: "submitted",
    REJECTED: "rejected",
    QUEUED: "queued",
    CANCELED: "canceled",
    PAUSED: "paused",
    UPLOADING: "uploading",
    UPLOAD_FINALIZING: "upload finalizing",
    UPLOAD_RETRYING: "retrying upload",
    UPLOAD_SUCCESSFUL: "upload successful",
    UPLOAD_FAILED: "upload failed",
    DELETE_FAILED: "delete failed",
    DELETING: "deleting",
    DELETED: "deleted"
  };
  (function () {
    "use strict";

    qq.basePublicApi = {
      addBlobs: function addBlobs(blobDataOrArray, params, endpoint) {
        this.addFiles(blobDataOrArray, params, endpoint);
      },
      addInitialFiles: function addInitialFiles(cannedFileList) {
        var self = this;
        qq.each(cannedFileList, function (index, cannedFile) {
          self._addCannedFile(cannedFile);
        });
      },
      addFiles: function addFiles(data, params, endpoint) {
        this._maybeHandleIos8SafariWorkaround();
        var batchId = this._storedIds.length === 0 ? qq.getUniqueId() : this._currentBatchId,
          processBlob = qq.bind(function (blob) {
            this._handleNewFile({
              blob: blob,
              name: this._options.blobs.defaultName
            }, batchId, verifiedFiles);
          }, this),
          processBlobData = qq.bind(function (blobData) {
            this._handleNewFile(blobData, batchId, verifiedFiles);
          }, this),
          processCanvas = qq.bind(function (canvas) {
            var blob = qq.canvasToBlob(canvas);
            this._handleNewFile({
              blob: blob,
              name: this._options.blobs.defaultName + ".png"
            }, batchId, verifiedFiles);
          }, this),
          processCanvasData = qq.bind(function (canvasData) {
            var normalizedQuality = canvasData.quality && canvasData.quality / 100,
              blob = qq.canvasToBlob(canvasData.canvas, canvasData.type, normalizedQuality);
            this._handleNewFile({
              blob: blob,
              name: canvasData.name
            }, batchId, verifiedFiles);
          }, this),
          processFileOrInput = qq.bind(function (fileOrInput) {
            if (qq.isInput(fileOrInput) && qq.supportedFeatures.ajaxUploading) {
              var files = Array.prototype.slice.call(fileOrInput.files),
                self = this;
              qq.each(files, function (idx, file) {
                self._handleNewFile(file, batchId, verifiedFiles);
              });
            } else {
              this._handleNewFile(fileOrInput, batchId, verifiedFiles);
            }
          }, this),
          normalizeData = function normalizeData() {
            if (qq.isFileList(data)) {
              data = Array.prototype.slice.call(data);
            }
            data = [].concat(data);
          },
          self = this,
          verifiedFiles = [];
        this._currentBatchId = batchId;
        if (data) {
          normalizeData();
          qq.each(data, function (idx, fileContainer) {
            if (qq.isFileOrInput(fileContainer)) {
              processFileOrInput(fileContainer);
            } else if (qq.isBlob(fileContainer)) {
              processBlob(fileContainer);
            } else if (qq.isObject(fileContainer)) {
              if (fileContainer.blob && fileContainer.name) {
                processBlobData(fileContainer);
              } else if (fileContainer.canvas && fileContainer.name) {
                processCanvasData(fileContainer);
              }
            } else if (fileContainer.tagName && fileContainer.tagName.toLowerCase() === "canvas") {
              processCanvas(fileContainer);
            } else {
              self.log(fileContainer + " is not a valid file container!  Ignoring!", "warn");
            }
          });
          this.log("Received " + verifiedFiles.length + " files.");
          this._prepareItemsForUpload(verifiedFiles, params, endpoint);
        }
      },
      cancel: function cancel(id) {
        var uploadData = this._uploadData.retrieve({
          id: id
        });
        if (uploadData && uploadData.status === qq.status.UPLOAD_FINALIZING) {
          this.log(qq.format("Ignoring cancel for file ID {} ({}).  Finalizing upload.", id, this.getName(id)), "error");
        } else {
          this._handler.cancel(id);
        }
      },
      cancelAll: function cancelAll() {
        var storedIdsCopy = [],
          self = this;
        qq.extend(storedIdsCopy, this._storedIds);
        qq.each(storedIdsCopy, function (idx, storedFileId) {
          self.cancel(storedFileId);
        });
        this._handler.cancelAll();
      },
      clearStoredFiles: function clearStoredFiles() {
        this._storedIds = [];
      },
      continueUpload: function continueUpload(id) {
        var uploadData = this._uploadData.retrieve({
          id: id
        });
        if (!qq.supportedFeatures.pause || !this._options.chunking.enabled) {
          return false;
        }
        if (uploadData.status === qq.status.PAUSED) {
          this.log(qq.format("Paused file ID {} ({}) will be continued.  Not paused.", id, this.getName(id)));
          this._uploadFile(id);
          return true;
        } else {
          this.log(qq.format("Ignoring continue for file ID {} ({}).  Not paused.", id, this.getName(id)), "error");
        }
        return false;
      },
      deleteFile: function deleteFile(id) {
        return this._onSubmitDelete(id);
      },
      doesExist: function doesExist(fileOrBlobId) {
        return this._handler.isValid(fileOrBlobId);
      },
      drawThumbnail: function drawThumbnail(fileId, imgOrCanvas, maxSize, fromServer, customResizeFunction) {
        var promiseToReturn = new qq.Promise(),
          fileOrUrl,
          options;
        if (this._imageGenerator) {
          fileOrUrl = this._thumbnailUrls[fileId];
          options = {
            customResizeFunction: customResizeFunction,
            maxSize: maxSize > 0 ? maxSize : null,
            scale: maxSize > 0
          };
          if (!fromServer && qq.supportedFeatures.imagePreviews) {
            fileOrUrl = this.getFile(fileId);
          }
          if (fileOrUrl == null) {
            promiseToReturn.failure({
              container: imgOrCanvas,
              error: "File or URL not found."
            });
          } else {
            this._imageGenerator.generate(fileOrUrl, imgOrCanvas, options).then(function success(modifiedContainer) {
              promiseToReturn.success(modifiedContainer);
            }, function failure(container, reason) {
              promiseToReturn.failure({
                container: container,
                error: reason || "Problem generating thumbnail"
              });
            });
          }
        } else {
          promiseToReturn.failure({
            container: imgOrCanvas,
            error: "Missing image generator module"
          });
        }
        return promiseToReturn;
      },
      getButton: function getButton(fileId) {
        return this._getButton(this._buttonIdsForFileIds[fileId]);
      },
      getEndpoint: function getEndpoint(fileId) {
        return this._endpointStore.get(fileId);
      },
      getFile: function getFile(fileOrBlobId) {
        var file = this._handler.getFile(fileOrBlobId);
        var uploadDataRecord;
        if (!file) {
          uploadDataRecord = this._uploadData.retrieve({
            id: fileOrBlobId
          });
          if (uploadDataRecord) {
            file = uploadDataRecord.file;
          }
        }
        return file || null;
      },
      getInProgress: function getInProgress() {
        return this._uploadData.retrieve({
          status: [qq.status.UPLOADING, qq.status.UPLOAD_RETRYING, qq.status.QUEUED]
        }).length;
      },
      getName: function getName(id) {
        return this._uploadData.retrieve({
          id: id
        }).name;
      },
      getParentId: function getParentId(id) {
        var uploadDataEntry = this.getUploads({
            id: id
          }),
          parentId = null;
        if (uploadDataEntry) {
          if (uploadDataEntry.parentId !== undefined) {
            parentId = uploadDataEntry.parentId;
          }
        }
        return parentId;
      },
      getResumableFilesData: function getResumableFilesData() {
        return this._handler.getResumableFilesData();
      },
      getSize: function getSize(id) {
        return this._uploadData.retrieve({
          id: id
        }).size;
      },
      getNetUploads: function getNetUploads() {
        return this._netUploaded;
      },
      getRemainingAllowedItems: function getRemainingAllowedItems() {
        var allowedItems = this._currentItemLimit;
        if (allowedItems > 0) {
          return allowedItems - this._netUploadedOrQueued;
        }
        return null;
      },
      getUploads: function getUploads(optionalFilter) {
        return this._uploadData.retrieve(optionalFilter);
      },
      getUuid: function getUuid(id) {
        return this._uploadData.retrieve({
          id: id
        }).uuid;
      },
      isResumable: function isResumable(id) {
        return this._handler.hasResumeRecord(id);
      },
      log: function log(str, level) {
        if (this._options.debug && (!level || level === "info")) {
          qq.log("[Fine Uploader " + qq.version + "] " + str);
        } else if (level && level !== "info") {
          qq.log("[Fine Uploader " + qq.version + "] " + str, level);
        }
      },
      pauseUpload: function pauseUpload(id) {
        var uploadData = this._uploadData.retrieve({
          id: id
        });
        if (!qq.supportedFeatures.pause || !this._options.chunking.enabled) {
          return false;
        }
        if (qq.indexOf([qq.status.UPLOADING, qq.status.UPLOAD_RETRYING], uploadData.status) >= 0) {
          if (this._handler.pause(id)) {
            this._uploadData.setStatus(id, qq.status.PAUSED);
            return true;
          } else {
            this.log(qq.format("Unable to pause file ID {} ({}).", id, this.getName(id)), "error");
          }
        } else {
          this.log(qq.format("Ignoring pause for file ID {} ({}).  Not in progress.", id, this.getName(id)), "error");
        }
        return false;
      },
      removeFileRef: function removeFileRef(id) {
        this._handler.expunge(id);
        this._uploadData.removeFileRef(id);
      },
      reset: function reset() {
        this.log("Resetting uploader...");
        this._handler.reset();
        this._storedIds = [];
        this._autoRetries = [];
        this._retryTimeouts = [];
        this._preventRetries = [];
        this._thumbnailUrls = [];
        qq.each(this._buttons, function (idx, button) {
          button.reset();
        });
        this._paramsStore.reset();
        this._endpointStore.reset();
        this._netUploadedOrQueued = 0;
        this._netUploaded = 0;
        this._uploadData.reset();
        this._buttonIdsForFileIds = [];
        this._pasteHandler && this._pasteHandler.reset();
        this._options.session.refreshOnReset && this._refreshSessionData();
        this._succeededSinceLastAllComplete = [];
        this._failedSinceLastAllComplete = [];
        this._totalProgress && this._totalProgress.reset();
        this._customResumeDataStore.reset();
      },
      retry: function retry(id) {
        return this._manualRetry(id);
      },
      scaleImage: function scaleImage(id, specs) {
        var self = this;
        return qq.Scaler.prototype.scaleImage(id, specs, {
          log: qq.bind(self.log, self),
          getFile: qq.bind(self.getFile, self),
          uploadData: self._uploadData
        });
      },
      setCustomHeaders: function setCustomHeaders(headers, id) {
        this._customHeadersStore.set(headers, id);
      },
      setCustomResumeData: function setCustomResumeData(id, data) {
        this._customResumeDataStore.set(data, id);
      },
      setDeleteFileCustomHeaders: function setDeleteFileCustomHeaders(headers, id) {
        this._deleteFileCustomHeadersStore.set(headers, id);
      },
      setDeleteFileEndpoint: function setDeleteFileEndpoint(endpoint, id) {
        this._deleteFileEndpointStore.set(endpoint, id);
      },
      setDeleteFileParams: function setDeleteFileParams(params, id) {
        this._deleteFileParamsStore.set(params, id);
      },
      setEndpoint: function setEndpoint(endpoint, id) {
        this._endpointStore.set(endpoint, id);
      },
      setForm: function setForm(elementOrId) {
        this._updateFormSupportAndParams(elementOrId);
      },
      setItemLimit: function setItemLimit(newItemLimit) {
        this._currentItemLimit = newItemLimit;
      },
      setName: function setName(id, newName) {
        this._uploadData.updateName(id, newName);
      },
      setParams: function setParams(params, id) {
        this._paramsStore.set(params, id);
      },
      setOption: function setOption(key, val) {
        this._options[key] = val;
      },
      setUuid: function setUuid(id, newUuid) {
        return this._uploadData.uuidChanged(id, newUuid);
      },
      setStatus: function setStatus(id, newStatus) {
        var fileRecord = this.getUploads({
          id: id
        });
        if (!fileRecord) {
          throw new qq.Error(id + " is not a valid file ID.");
        }
        switch (newStatus) {
          case qq.status.DELETED:
            this._onDeleteComplete(id, null, false);
            break;
          case qq.status.DELETE_FAILED:
            this._onDeleteComplete(id, null, true);
            break;
          default:
            var errorMessage = "Method setStatus called on '" + name + "' not implemented yet for " + newStatus;
            this.log(errorMessage);
            throw new qq.Error(errorMessage);
        }
      },
      uploadStoredFiles: function uploadStoredFiles() {
        if (this._storedIds.length === 0) {
          this._itemError("noFilesError");
        } else {
          this._uploadStoredFiles();
        }
      }
    };
    qq.basePrivateApi = {
      _addCannedFile: function _addCannedFile(sessionData) {
        var self = this;
        return this._uploadData.addFile({
          uuid: sessionData.uuid,
          name: sessionData.name,
          size: sessionData.size,
          status: qq.status.UPLOAD_SUCCESSFUL,
          onBeforeStatusChange: function onBeforeStatusChange(id) {
            sessionData.deleteFileEndpoint && self.setDeleteFileEndpoint(sessionData.deleteFileEndpoint, id);
            sessionData.deleteFileParams && self.setDeleteFileParams(sessionData.deleteFileParams, id);
            if (sessionData.thumbnailUrl) {
              self._thumbnailUrls[id] = sessionData.thumbnailUrl;
            }
            self._netUploaded++;
            self._netUploadedOrQueued++;
          }
        });
      },
      _annotateWithButtonId: function _annotateWithButtonId(file, associatedInput) {
        if (qq.isFile(file)) {
          file.qqButtonId = this._getButtonId(associatedInput);
        }
      },
      _batchError: function _batchError(message) {
        this._options.callbacks.onError(null, null, message, undefined);
      },
      _createDeleteHandler: function _createDeleteHandler() {
        var self = this;
        return new qq.DeleteFileAjaxRequester({
          method: this._options.deleteFile.method.toUpperCase(),
          maxConnections: this._options.maxConnections,
          uuidParamName: this._options.request.uuidName,
          customHeaders: this._deleteFileCustomHeadersStore,
          paramsStore: this._deleteFileParamsStore,
          endpointStore: this._deleteFileEndpointStore,
          cors: this._options.cors,
          log: qq.bind(self.log, self),
          onDelete: function onDelete(id) {
            self._onDelete(id);
            self._options.callbacks.onDelete(id);
          },
          onDeleteComplete: function onDeleteComplete(id, xhrOrXdr, isError) {
            self._onDeleteComplete(id, xhrOrXdr, isError);
            self._options.callbacks.onDeleteComplete(id, xhrOrXdr, isError);
          }
        });
      },
      _createPasteHandler: function _createPasteHandler() {
        var self = this;
        return new qq.PasteSupport({
          targetElement: this._options.paste.targetElement,
          callbacks: {
            log: qq.bind(self.log, self),
            pasteReceived: function pasteReceived(blob) {
              self._handleCheckedCallback({
                name: "onPasteReceived",
                callback: qq.bind(self._options.callbacks.onPasteReceived, self, blob),
                onSuccess: qq.bind(self._handlePasteSuccess, self, blob),
                identifier: "pasted image"
              });
            }
          }
        });
      },
      _createStore: function _createStore(initialValue, _readOnlyValues_) {
        var store = {},
          catchall = initialValue,
          perIdReadOnlyValues = {},
          readOnlyValues = _readOnlyValues_,
          copy = function copy(orig) {
            if (qq.isObject(orig)) {
              return qq.extend({}, orig);
            }
            return orig;
          },
          getReadOnlyValues = function getReadOnlyValues() {
            if (qq.isFunction(readOnlyValues)) {
              return readOnlyValues();
            }
            return readOnlyValues;
          },
          includeReadOnlyValues = function includeReadOnlyValues(id, existing) {
            if (readOnlyValues && qq.isObject(existing)) {
              qq.extend(existing, getReadOnlyValues());
            }
            if (perIdReadOnlyValues[id]) {
              qq.extend(existing, perIdReadOnlyValues[id]);
            }
          };
        return {
          set: function set(val, id) {
            if (id == null) {
              store = {};
              catchall = copy(val);
            } else {
              store[id] = copy(val);
            }
          },
          get: function get(id) {
            var values;
            if (id != null && store[id]) {
              values = store[id];
            } else {
              values = copy(catchall);
            }
            includeReadOnlyValues(id, values);
            return copy(values);
          },
          addReadOnly: function addReadOnly(id, values) {
            if (qq.isObject(store)) {
              if (id === null) {
                if (qq.isFunction(values)) {
                  readOnlyValues = values;
                } else {
                  readOnlyValues = readOnlyValues || {};
                  qq.extend(readOnlyValues, values);
                }
              } else {
                perIdReadOnlyValues[id] = perIdReadOnlyValues[id] || {};
                qq.extend(perIdReadOnlyValues[id], values);
              }
            }
          },
          remove: function remove(fileId) {
            return delete store[fileId];
          },
          reset: function reset() {
            store = {};
            perIdReadOnlyValues = {};
            catchall = initialValue;
          }
        };
      },
      _createUploadDataTracker: function _createUploadDataTracker() {
        var self = this;
        return new qq.UploadData({
          getName: function getName(id) {
            return self.getName(id);
          },
          getUuid: function getUuid(id) {
            return self.getUuid(id);
          },
          getSize: function getSize(id) {
            return self.getSize(id);
          },
          onStatusChange: function onStatusChange(id, oldStatus, newStatus) {
            self._onUploadStatusChange(id, oldStatus, newStatus);
            self._options.callbacks.onStatusChange(id, oldStatus, newStatus);
            self._maybeAllComplete(id, newStatus);
            if (self._totalProgress) {
              setTimeout(function () {
                self._totalProgress.onStatusChange(id, oldStatus, newStatus);
              }, 0);
            }
          }
        });
      },
      _createUploadButton: function _createUploadButton(spec) {
        var self = this,
          acceptFiles = spec.accept || this._options.validation.acceptFiles,
          allowedExtensions = spec.allowedExtensions || this._options.validation.allowedExtensions,
          button;
        function allowMultiple() {
          if (qq.supportedFeatures.ajaxUploading) {
            if (self._options.workarounds.iosEmptyVideos && qq.ios() && !qq.ios6() && self._isAllowedExtension(allowedExtensions, ".mov")) {
              return false;
            }
            if (spec.multiple === undefined) {
              return self._options.multiple;
            }
            return spec.multiple;
          }
          return false;
        }
        button = new qq.UploadButton({
          acceptFiles: acceptFiles,
          element: spec.element,
          focusClass: this._options.classes.buttonFocus,
          folders: spec.folders,
          hoverClass: this._options.classes.buttonHover,
          ios8BrowserCrashWorkaround: this._options.workarounds.ios8BrowserCrash,
          multiple: allowMultiple(),
          name: this._options.request.inputName,
          onChange: function onChange(input) {
            self._onInputChange(input);
          },
          title: spec.title == null ? this._options.text.fileInputTitle : spec.title
        });
        this._disposeSupport.addDisposer(function () {
          button.dispose();
        });
        self._buttons.push(button);
        return button;
      },
      _createUploadHandler: function _createUploadHandler(additionalOptions, namespace) {
        var self = this,
          lastOnProgress = {},
          options = {
            debug: this._options.debug,
            request: {
              dest: '/',
              inputName: 'hdfs_file'
            },
            maxConnections: this._options.maxConnections,
            cors: this._options.cors,
            paramsStore: this._paramsStore,
            endpointStore: this._endpointStore,
            chunking: this._options.chunking,
            resume: this._options.resume,
            blobs: this._options.blobs,
            log: qq.bind(self.log, self),
            preventRetryParam: this._options.retry.preventRetryResponseProperty,
            onProgress: function onProgress(id, name, loaded, total) {
              if (loaded < 0 || total < 0) {
                return;
              }
              if (lastOnProgress[id]) {
                if (lastOnProgress[id].loaded !== loaded || lastOnProgress[id].total !== total) {
                  self._onProgress(id, name, loaded, total);
                  self._options.callbacks.onProgress(id, name, loaded, total);
                }
              } else {
                self._onProgress(id, name, loaded, total);
                self._options.callbacks.onProgress(id, name, loaded, total);
              }
              lastOnProgress[id] = {
                loaded: loaded,
                total: total
              };
            },
            onComplete: function onComplete(id, name, result, xhr) {
              delete lastOnProgress[id];
              var status = self.getUploads({
                  id: id
                }).status,
                retVal;
              if (status === qq.status.UPLOAD_SUCCESSFUL || status === qq.status.UPLOAD_FAILED) {
                return;
              }
              retVal = self._onComplete(id, name, result, xhr);
              if (retVal instanceof qq.Promise) {
                retVal.done(function () {
                  self._options.callbacks.onComplete(id, name, result, xhr);
                });
              } else {
                self._options.callbacks.onComplete(id, name, result, xhr);
              }
            },
            onCancel: function onCancel(id, name, cancelFinalizationEffort) {
              var promise = new qq.Promise();
              self._handleCheckedCallback({
                name: "onCancel",
                callback: qq.bind(self._options.callbacks.onCancel, self, id, name),
                onFailure: promise.failure,
                onSuccess: function onSuccess() {
                  cancelFinalizationEffort.then(function () {
                    self._onCancel(id, name);
                  });
                  promise.success();
                },
                identifier: id
              });
              return promise;
            },
            onUploadPrep: qq.bind(this._onUploadPrep, this),
            onUpload: function onUpload(id, name) {
              self._onUpload(id, name);
              var onUploadResult = self._options.callbacks.onUpload(id, name);
              if (qq.isGenericPromise(onUploadResult)) {
                self.log(qq.format("onUpload for {} returned a Promise - waiting for resolution.", id));
                return onUploadResult;
              }
              return new qq.Promise().success();
            },
            onUploadChunk: function onUploadChunk(id, name, chunkData) {
              self._onUploadChunk(id, chunkData);
              var onUploadChunkResult = self._options.callbacks.onUploadChunk(id, name, chunkData);
              if (qq.isGenericPromise(onUploadChunkResult)) {
                self.log(qq.format("onUploadChunk for {}.{} returned a Promise - waiting for resolution.", id, chunkData.partIndex));
                return onUploadChunkResult;
              }
              return new qq.Promise().success();
            },
            onUploadChunkSuccess: function onUploadChunkSuccess(id, chunkData, result, xhr) {
              self._onUploadChunkSuccess(id, chunkData);
              self._options.callbacks.onUploadChunkSuccess.apply(self, arguments);
            },
            onResume: function onResume(id, name, chunkData, customResumeData) {
              return self._options.callbacks.onResume(id, name, chunkData, customResumeData);
            },
            onAutoRetry: function onAutoRetry(id, name, responseJSON, xhr) {
              return self._onAutoRetry.apply(self, arguments);
            },
            onUuidChanged: function onUuidChanged(id, newUuid) {
              self.log("Server requested UUID change from '" + self.getUuid(id) + "' to '" + newUuid + "'");
              self.setUuid(id, newUuid);
            },
            getName: qq.bind(self.getName, self),
            getUuid: qq.bind(self.getUuid, self),
            getSize: qq.bind(self.getSize, self),
            setSize: qq.bind(self._setSize, self),
            getDataByUuid: function getDataByUuid(uuid) {
              return self.getUploads({
                uuid: uuid
              });
            },
            isQueued: function isQueued(id) {
              var status = self.getUploads({
                id: id
              }).status;
              return status === qq.status.QUEUED || status === qq.status.SUBMITTED || status === qq.status.UPLOAD_RETRYING || status === qq.status.PAUSED;
            },
            getIdsInProxyGroup: self._uploadData.getIdsInProxyGroup,
            getIdsInBatch: self._uploadData.getIdsInBatch,
            isInProgress: function isInProgress(id) {
              return self.getUploads({
                id: id
              }).status === qq.status.UPLOADING;
            },
            getCustomResumeData: qq.bind(self._getCustomResumeData, self),
            setStatus: function setStatus(id, status) {
              self._uploadData.setStatus(id, status);
            }
          };
        qq.each(this._options.request, function (prop, val) {
          options[prop] = val;
        });
        options.customHeaders = this._customHeadersStore;
        if (additionalOptions) {
          qq.each(additionalOptions, function (key, val) {
            options[key] = val;
          });
        }
        return new qq.UploadHandlerController(options, namespace);
      },
      _fileOrBlobRejected: function _fileOrBlobRejected(id) {
        this._netUploadedOrQueued--;
        this._uploadData.setStatus(id, qq.status.REJECTED);
      },
      _formatSize: function _formatSize(bytes) {
        if (bytes === 0) {
          return bytes + this._options.text.sizeSymbols[0];
        }
        var i = -1;
        do {
          bytes = bytes / 1e3;
          i++;
        } while (bytes > 999);
        return Math.max(bytes, .1).toFixed(1) + this._options.text.sizeSymbols[i];
      },
      _generateExtraButtonSpecs: function _generateExtraButtonSpecs() {
        var self = this;
        this._extraButtonSpecs = {};
        qq.each(this._options.extraButtons, function (idx, extraButtonOptionEntry) {
          var multiple = extraButtonOptionEntry.multiple,
            validation = qq.extend({}, self._options.validation, true),
            extraButtonSpec = qq.extend({}, extraButtonOptionEntry);
          if (multiple === undefined) {
            multiple = self._options.multiple;
          }
          if (extraButtonSpec.validation) {
            qq.extend(validation, extraButtonOptionEntry.validation, true);
          }
          qq.extend(extraButtonSpec, {
            multiple: multiple,
            validation: validation
          }, true);
          self._initExtraButton(extraButtonSpec);
        });
      },
      _getButton: function _getButton(buttonId) {
        var extraButtonsSpec = this._extraButtonSpecs[buttonId];
        if (extraButtonsSpec) {
          return extraButtonsSpec.element;
        } else if (buttonId === this._defaultButtonId) {
          return this._options.button;
        }
      },
      _getButtonId: function _getButtonId(buttonOrFileInputOrFile) {
        var inputs,
          fileInput,
          fileBlobOrInput = buttonOrFileInputOrFile;
        if (fileBlobOrInput instanceof qq.BlobProxy) {
          fileBlobOrInput = fileBlobOrInput.referenceBlob;
        }
        if (fileBlobOrInput && !qq.isBlob(fileBlobOrInput)) {
          if (qq.isFile(fileBlobOrInput)) {
            return fileBlobOrInput.qqButtonId;
          } else if (fileBlobOrInput.tagName.toLowerCase() === "input" && fileBlobOrInput.type.toLowerCase() === "file") {
            return fileBlobOrInput.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
          }
          inputs = fileBlobOrInput.getElementsByTagName("input");
          qq.each(inputs, function (idx, input) {
            if (input.getAttribute("type") === "file") {
              fileInput = input;
              return false;
            }
          });
          if (fileInput) {
            return fileInput.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
          }
        }
      },
      _getCustomResumeData: function _getCustomResumeData(fileId) {
        return this._customResumeDataStore.get(fileId);
      },
      _getNotFinished: function _getNotFinished() {
        return this._uploadData.retrieve({
          status: [qq.status.UPLOADING, qq.status.UPLOAD_RETRYING, qq.status.QUEUED, qq.status.SUBMITTING, qq.status.SUBMITTED, qq.status.PAUSED]
        }).length;
      },
      _getValidationBase: function _getValidationBase(buttonId) {
        var extraButtonSpec = this._extraButtonSpecs[buttonId];
        return extraButtonSpec ? extraButtonSpec.validation : this._options.validation;
      },
      _getValidationDescriptor: function _getValidationDescriptor(fileWrapper) {
        if (fileWrapper.file instanceof qq.BlobProxy) {
          return {
            name: qq.getFilename(fileWrapper.file.referenceBlob),
            size: fileWrapper.file.referenceBlob.size
          };
        }
        return {
          name: this.getUploads({
            id: fileWrapper.id
          }).name,
          size: this.getUploads({
            id: fileWrapper.id
          }).size
        };
      },
      _getValidationDescriptors: function _getValidationDescriptors(fileWrappers) {
        var self = this,
          fileDescriptors = [];
        qq.each(fileWrappers, function (idx, fileWrapper) {
          fileDescriptors.push(self._getValidationDescriptor(fileWrapper));
        });
        return fileDescriptors;
      },
      _handleCameraAccess: function _handleCameraAccess() {
        if (this._options.camera.ios && qq.ios()) {
          var acceptIosCamera = "image/*;capture=camera",
            button = this._options.camera.button,
            buttonId = button ? this._getButtonId(button) : this._defaultButtonId,
            optionRoot = this._options;
          if (buttonId && buttonId !== this._defaultButtonId) {
            optionRoot = this._extraButtonSpecs[buttonId];
          }
          optionRoot.multiple = false;
          if (optionRoot.validation.acceptFiles === null) {
            optionRoot.validation.acceptFiles = acceptIosCamera;
          } else {
            optionRoot.validation.acceptFiles += "," + acceptIosCamera;
          }
          qq.each(this._buttons, function (idx, button) {
            if (button.getButtonId() === buttonId) {
              button.setMultiple(optionRoot.multiple);
              button.setAcceptFiles(optionRoot.acceptFiles);
              return false;
            }
          });
        }
      },
      _handleCheckedCallback: function _handleCheckedCallback(details) {
        var self = this,
          callbackRetVal = details.callback();
        if (qq.isGenericPromise(callbackRetVal)) {
          this.log(details.name + " - waiting for " + details.name + " promise to be fulfilled for " + details.identifier);
          return callbackRetVal.then(function (successParam) {
            self.log(details.name + " promise success for " + details.identifier);
            details.onSuccess(successParam);
          }, function () {
            if (details.onFailure) {
              self.log(details.name + " promise failure for " + details.identifier);
              details.onFailure();
            } else {
              self.log(details.name + " promise failure for " + details.identifier);
            }
          });
        }
        if (callbackRetVal !== false) {
          details.onSuccess(callbackRetVal);
        } else {
          if (details.onFailure) {
            this.log(details.name + " - return value was 'false' for " + details.identifier + ".  Invoking failure callback.");
            details.onFailure();
          } else {
            this.log(details.name + " - return value was 'false' for " + details.identifier + ".  Will not proceed.");
          }
        }
        return callbackRetVal;
      },
      _handleNewFile: function _handleNewFile(file, batchId, newFileWrapperList) {
        var self = this,
          uuid = qq.getUniqueId(),
          size = -1,
          name = qq.getFilename(file),
          actualFile = file.blob || file,
          handler = this._customNewFileHandler ? this._customNewFileHandler : qq.bind(self._handleNewFileGeneric, self);
        if (!qq.isInput(actualFile) && actualFile.size >= 0) {
          size = actualFile.size;
        }
        handler(actualFile, name, uuid, size, newFileWrapperList, batchId, this._options.request.uuidName, {
          uploadData: self._uploadData,
          paramsStore: self._paramsStore,
          addFileToHandler: function addFileToHandler(id, file) {
            self._handler.add(id, file);
            self._netUploadedOrQueued++;
            self._trackButton(id);
          }
        });
      },
      _handleNewFileGeneric: function _handleNewFileGeneric(file, name, uuid, size, fileList, batchId) {
        var id = this._uploadData.addFile({
          uuid: uuid,
          name: name,
          size: size,
          batchId: batchId,
          file: file
        });
        this._handler.add(id, file);
        this._trackButton(id);
        this._netUploadedOrQueued++;
        fileList.push({
          id: id,
          file: file
        });
      },
      _handlePasteSuccess: function _handlePasteSuccess(blob, extSuppliedName) {
        var extension = blob.type.split("/")[1],
          name = extSuppliedName;
        if (name == null) {
          name = this._options.paste.defaultName;
        }
        name += "." + extension;
        this.addFiles({
          name: name,
          blob: blob
        });
      },
      _handleDeleteSuccess: function _handleDeleteSuccess(id) {
        if (this.getUploads({
          id: id
        }).status !== qq.status.DELETED) {
          var name = this.getName(id);
          this._netUploadedOrQueued--;
          this._netUploaded--;
          this._handler.expunge(id);
          this._uploadData.setStatus(id, qq.status.DELETED);
          this.log("Delete request for '" + name + "' has succeeded.");
        }
      },
      _handleDeleteFailed: function _handleDeleteFailed(id, xhrOrXdr) {
        var name = this.getName(id);
        this._uploadData.setStatus(id, qq.status.DELETE_FAILED);
        this.log("Delete request for '" + name + "' has failed.", "error");
        if (!xhrOrXdr || xhrOrXdr.withCredentials === undefined) {
          this._options.callbacks.onError(id, name, "Delete request failed", xhrOrXdr);
        } else {
          this._options.callbacks.onError(id, name, "Delete request failed with response code " + xhrOrXdr.status, xhrOrXdr);
        }
      },
      _initExtraButton: function _initExtraButton(spec) {
        var button = this._createUploadButton({
          accept: spec.validation.acceptFiles,
          allowedExtensions: spec.validation.allowedExtensions,
          element: spec.element,
          folders: spec.folders,
          multiple: spec.multiple,
          title: spec.fileInputTitle
        });
        this._extraButtonSpecs[button.getButtonId()] = spec;
      },
      _initFormSupportAndParams: function _initFormSupportAndParams() {
        this._formSupport = qq.FormSupport && new qq.FormSupport(this._options.form, qq.bind(this.uploadStoredFiles, this), qq.bind(this.log, this));
        if (this._formSupport && this._formSupport.attachedToForm) {
          this._paramsStore = this._createStore(this._options.request.params, this._formSupport.getFormInputsAsObject);
          this._options.autoUpload = this._formSupport.newAutoUpload;
          if (this._formSupport.newEndpoint) {
            this._options.request.endpoint = this._formSupport.newEndpoint;
          }
        } else {
          this._paramsStore = this._createStore(this._options.request.params);
        }
      },
      _isDeletePossible: function _isDeletePossible() {
        if (!qq.DeleteFileAjaxRequester || !this._options.deleteFile.enabled) {
          return false;
        }
        if (this._options.cors.expected) {
          if (qq.supportedFeatures.deleteFileCorsXhr) {
            return true;
          }
          if (qq.supportedFeatures.deleteFileCorsXdr && this._options.cors.allowXdr) {
            return true;
          }
          return false;
        }
        return true;
      },
      _isAllowedExtension: function _isAllowedExtension(allowed, fileName) {
        var valid = false;
        if (!allowed.length) {
          return true;
        }
        qq.each(allowed, function (idx, allowedExt) {
          if (qq.isString(allowedExt)) {
            var extRegex = new RegExp("\\." + allowedExt + "$", "i");
            if (fileName.match(extRegex) != null) {
              valid = true;
              return false;
            }
          }
        });
        return valid;
      },
      _itemError: function _itemError(code, maybeNameOrNames, item) {
        var message = this._options.messages[code],
          allowedExtensions = [],
          names = [].concat(maybeNameOrNames),
          name = names[0],
          buttonId = this._getButtonId(item),
          validationBase = this._getValidationBase(buttonId),
          extensionsForMessage,
          placeholderMatch;
        function r(name, replacement) {
          message = message.replace(name, replacement);
        }
        qq.each(validationBase.allowedExtensions, function (idx, allowedExtension) {
          if (qq.isString(allowedExtension)) {
            allowedExtensions.push(allowedExtension);
          }
        });
        extensionsForMessage = allowedExtensions.join(", ").toLowerCase();
        r("{file}", this._options.formatFileName(name));
        r("{extensions}", extensionsForMessage);
        r("{sizeLimit}", this._formatSize(validationBase.sizeLimit));
        r("{minSizeLimit}", this._formatSize(validationBase.minSizeLimit));
        placeholderMatch = message.match(/(\{\w+\})/g);
        if (placeholderMatch !== null) {
          qq.each(placeholderMatch, function (idx, placeholder) {
            r(placeholder, names[idx]);
          });
        }
        this._options.callbacks.onError(null, name, message, undefined);
        return message;
      },
      _manualRetry: function _manualRetry(id, callback) {
        if (this._onBeforeManualRetry(id)) {
          this._netUploadedOrQueued++;
          this._uploadData.setStatus(id, qq.status.UPLOAD_RETRYING);
          if (callback) {
            callback(id);
          } else {
            this._handler.retry(id);
          }
          return true;
        }
      },
      _maybeAllComplete: function _maybeAllComplete(id, status) {
        var self = this,
          notFinished = this._getNotFinished();
        if (status === qq.status.UPLOAD_SUCCESSFUL) {
          this._succeededSinceLastAllComplete.push(id);
        } else if (status === qq.status.UPLOAD_FAILED) {
          this._failedSinceLastAllComplete.push(id);
        }
        if (notFinished === 0 && (this._succeededSinceLastAllComplete.length || this._failedSinceLastAllComplete.length)) {
          setTimeout(function () {
            self._onAllComplete(self._succeededSinceLastAllComplete, self._failedSinceLastAllComplete);
          }, 0);
        }
      },
      _maybeHandleIos8SafariWorkaround: function _maybeHandleIos8SafariWorkaround() {
        var self = this;
        if (this._options.workarounds.ios8SafariUploads && qq.ios800() && qq.iosSafari()) {
          setTimeout(function () {
            window.alert(self._options.messages.unsupportedBrowserIos8Safari);
          }, 0);
          throw new qq.Error(this._options.messages.unsupportedBrowserIos8Safari);
        }
      },
      _maybeParseAndSendUploadError: function _maybeParseAndSendUploadError(id, name, response, xhr) {
        if (!response.success) {
          if (xhr && xhr.status !== 200 && !response.error) {
            this._options.callbacks.onError(id, name, "XHR returned response code " + xhr.status, xhr);
          } else {
            var errorReason = response.error ? response.error : this._options.text.defaultResponseError;
            this._options.callbacks.onError(id, name, errorReason, xhr);
          }
        }
      },
      _maybeProcessNextItemAfterOnValidateCallback: function _maybeProcessNextItemAfterOnValidateCallback(validItem, items, index, params, endpoint) {
        var self = this;
        if (items.length > index) {
          if (validItem || !this._options.validation.stopOnFirstInvalidFile) {
            setTimeout(function () {
              var validationDescriptor = self._getValidationDescriptor(items[index]),
                buttonId = self._getButtonId(items[index].file),
                button = self._getButton(buttonId);
              self._handleCheckedCallback({
                name: "onValidate",
                callback: qq.bind(self._options.callbacks.onValidate, self, validationDescriptor, button),
                onSuccess: qq.bind(self._onValidateCallbackSuccess, self, items, index, params, endpoint),
                onFailure: qq.bind(self._onValidateCallbackFailure, self, items, index, params, endpoint),
                identifier: "Item '" + validationDescriptor.name + "', size: " + validationDescriptor.size
              });
            }, 0);
          } else if (!validItem) {
            for (; index < items.length; index++) {
              self._fileOrBlobRejected(items[index].id);
            }
          }
        }
      },
      _onAllComplete: function _onAllComplete(successful, failed) {
        this._totalProgress && this._totalProgress.onAllComplete(successful, failed, this._preventRetries);
        this._options.callbacks.onAllComplete(qq.extend([], successful), qq.extend([], failed));
        this._succeededSinceLastAllComplete = [];
        this._failedSinceLastAllComplete = [];
      },
      _onAutoRetry: function _onAutoRetry(id, name, responseJSON, xhr, callback) {
        var self = this;
        self._preventRetries[id] = responseJSON[self._options.retry.preventRetryResponseProperty];
        if (self._shouldAutoRetry(id)) {
          var retryWaitPeriod = self._options.retry.autoAttemptDelay * 1e3;
          self._maybeParseAndSendUploadError.apply(self, arguments);
          self._options.callbacks.onAutoRetry(id, name, self._autoRetries[id]);
          self._onBeforeAutoRetry(id, name);
          self._uploadData.setStatus(id, qq.status.UPLOAD_RETRYING);
          self._retryTimeouts[id] = setTimeout(function () {
            self.log("Starting retry for " + name + "...");
            if (callback) {
              callback(id);
            } else {
              self._handler.retry(id);
            }
          }, retryWaitPeriod);
          return true;
        }
      },
      _onBeforeAutoRetry: function _onBeforeAutoRetry(id, name) {
        this.log("Waiting " + this._options.retry.autoAttemptDelay + " seconds before retrying " + name + "...");
      },
      _onBeforeManualRetry: function _onBeforeManualRetry(id) {
        var itemLimit = this._currentItemLimit,
          fileName;
        if (this._preventRetries[id]) {
          this.log("Retries are forbidden for id " + id, "warn");
          return false;
        } else if (this._handler.isValid(id)) {
          fileName = this.getName(id);
          if (this._options.callbacks.onManualRetry(id, fileName) === false) {
            return false;
          }
          if (itemLimit > 0 && this._netUploadedOrQueued + 1 > itemLimit) {
            this._itemError("retryFailTooManyItems");
            return false;
          }
          this.log("Retrying upload for '" + fileName + "' (id: " + id + ")...");
          return true;
        } else {
          this.log("'" + id + "' is not a valid file ID", "error");
          return false;
        }
      },
      _onCancel: function _onCancel(id, name) {
        this._netUploadedOrQueued--;
        clearTimeout(this._retryTimeouts[id]);
        var storedItemIndex = qq.indexOf(this._storedIds, id);
        if (!this._options.autoUpload && storedItemIndex >= 0) {
          this._storedIds.splice(storedItemIndex, 1);
        }
        this._uploadData.setStatus(id, qq.status.CANCELED);
      },
      _onComplete: function _onComplete(id, name, result, xhr) {
        if (!result.success) {
          this._netUploadedOrQueued--;
          this._uploadData.setStatus(id, qq.status.UPLOAD_FAILED);
          if (result[this._options.retry.preventRetryResponseProperty] === true) {
            this._preventRetries[id] = true;
          }
        } else {
          if (result.thumbnailUrl) {
            this._thumbnailUrls[id] = result.thumbnailUrl;
          }
          this._netUploaded++;
          this._uploadData.setStatus(id, qq.status.UPLOAD_SUCCESSFUL);
        }
        this._maybeParseAndSendUploadError(id, name, result, xhr);
        return result.success ? true : false;
      },
      _onDelete: function _onDelete(id) {
        this._uploadData.setStatus(id, qq.status.DELETING);
      },
      _onDeleteComplete: function _onDeleteComplete(id, xhrOrXdr, isError) {
        var name = this.getName(id);
        if (isError) {
          this._handleDeleteFailed(id, xhrOrXdr);
        } else {
          this._handleDeleteSuccess(id);
        }
      },
      _onInputChange: function _onInputChange(input) {
        var fileIndex;
        if (qq.supportedFeatures.ajaxUploading) {
          for (fileIndex = 0; fileIndex < input.files.length; fileIndex++) {
            this._annotateWithButtonId(input.files[fileIndex], input);
          }
          this.addFiles(input.files);
        } else if (input.value.length > 0) {
          this.addFiles(input);
        }
        qq.each(this._buttons, function (idx, button) {
          button.reset();
        });
      },
      _onProgress: function _onProgress(id, name, loaded, total) {
        this._totalProgress && this._totalProgress.onIndividualProgress(id, loaded, total);
      },
      _onSubmit: function _onSubmit(id, name) {},
      _onSubmitCallbackSuccess: function _onSubmitCallbackSuccess(id, name) {
        this._onSubmit.apply(this, arguments);
        this._uploadData.setStatus(id, qq.status.SUBMITTED);
        this._onSubmitted.apply(this, arguments);
        if (this._options.autoUpload) {
          this._options.callbacks.onSubmitted.apply(this, arguments);
          this._uploadFile(id);
        } else {
          this._storeForLater(id);
          this._options.callbacks.onSubmitted.apply(this, arguments);
        }
      },
      _onSubmitDelete: function _onSubmitDelete(id, onSuccessCallback, additionalMandatedParams) {
        var uuid = this.getUuid(id),
          adjustedOnSuccessCallback;
        if (onSuccessCallback) {
          adjustedOnSuccessCallback = qq.bind(onSuccessCallback, this, id, uuid, additionalMandatedParams);
        }
        if (this._isDeletePossible()) {
          this._handleCheckedCallback({
            name: "onSubmitDelete",
            callback: qq.bind(this._options.callbacks.onSubmitDelete, this, id),
            onSuccess: adjustedOnSuccessCallback || qq.bind(this._deleteHandler.sendDelete, this, id, uuid, additionalMandatedParams),
            identifier: id
          });
          return true;
        } else {
          this.log("Delete request ignored for ID " + id + ", delete feature is disabled or request not possible " + "due to CORS on a user agent that does not support pre-flighting.", "warn");
          return false;
        }
      },
      _onSubmitted: function _onSubmitted(id) {},
      _onTotalProgress: function _onTotalProgress(loaded, total) {
        this._options.callbacks.onTotalProgress(loaded, total);
      },
      _onUploadPrep: function _onUploadPrep(id) {},
      _onUpload: function _onUpload(id, name) {
        this._uploadData.setStatus(id, qq.status.UPLOADING);
      },
      _onUploadChunk: function _onUploadChunk(id, chunkData) {},
      _onUploadChunkSuccess: function _onUploadChunkSuccess(id, chunkData) {
        if (!this._preventRetries[id] && this._options.retry.enableAuto) {
          this._autoRetries[id] = 0;
        }
      },
      _onUploadStatusChange: function _onUploadStatusChange(id, oldStatus, newStatus) {
        if (newStatus === qq.status.PAUSED) {
          clearTimeout(this._retryTimeouts[id]);
        }
      },
      _onValidateBatchCallbackFailure: function _onValidateBatchCallbackFailure(fileWrappers) {
        var self = this;
        qq.each(fileWrappers, function (idx, fileWrapper) {
          self._fileOrBlobRejected(fileWrapper.id);
        });
      },
      _onValidateBatchCallbackSuccess: function _onValidateBatchCallbackSuccess(validationDescriptors, items, params, endpoint, button) {
        var errorMessage,
          itemLimit = this._currentItemLimit,
          proposedNetFilesUploadedOrQueued = this._netUploadedOrQueued;
        if (itemLimit === 0 || proposedNetFilesUploadedOrQueued <= itemLimit) {
          if (items.length > 0) {
            this._handleCheckedCallback({
              name: "onValidate",
              callback: qq.bind(this._options.callbacks.onValidate, this, validationDescriptors[0], button),
              onSuccess: qq.bind(this._onValidateCallbackSuccess, this, items, 0, params, endpoint),
              onFailure: qq.bind(this._onValidateCallbackFailure, this, items, 0, params, endpoint),
              identifier: "Item '" + items[0].file.name + "', size: " + items[0].file.size
            });
          } else {
            this._itemError("noFilesError");
          }
        } else {
          this._onValidateBatchCallbackFailure(items);
          errorMessage = this._options.messages.tooManyItemsError.replace(/\{netItems\}/g, proposedNetFilesUploadedOrQueued).replace(/\{itemLimit\}/g, itemLimit);
          this._batchError(errorMessage);
        }
      },
      _onValidateCallbackFailure: function _onValidateCallbackFailure(items, index, params, endpoint) {
        var nextIndex = index + 1;
        this._fileOrBlobRejected(items[index].id, items[index].file.name);
        this._maybeProcessNextItemAfterOnValidateCallback(false, items, nextIndex, params, endpoint);
      },
      _onValidateCallbackSuccess: function _onValidateCallbackSuccess(items, index, params, endpoint) {
        var self = this,
          nextIndex = index + 1,
          validationDescriptor = this._getValidationDescriptor(items[index]);
        this._validateFileOrBlobData(items[index], validationDescriptor).then(function () {
          self._upload(items[index].id, params, endpoint);
          self._maybeProcessNextItemAfterOnValidateCallback(true, items, nextIndex, params, endpoint);
        }, function () {
          self._maybeProcessNextItemAfterOnValidateCallback(false, items, nextIndex, params, endpoint);
        });
      },
      _prepareItemsForUpload: function _prepareItemsForUpload(items, params, endpoint) {
        if (items.length === 0) {
          this._itemError("noFilesError");
          return;
        }
        var validationDescriptors = this._getValidationDescriptors(items),
          buttonId = this._getButtonId(items[0].file),
          button = this._getButton(buttonId);
        this._handleCheckedCallback({
          name: "onValidateBatch",
          callback: qq.bind(this._options.callbacks.onValidateBatch, this, validationDescriptors, button),
          onSuccess: qq.bind(this._onValidateBatchCallbackSuccess, this, validationDescriptors, items, params, endpoint, button),
          onFailure: qq.bind(this._onValidateBatchCallbackFailure, this, items),
          identifier: "batch validation"
        });
      },
      _preventLeaveInProgress: function _preventLeaveInProgress() {
        var self = this;
        this._disposeSupport.attach(window, "beforeunload", function (e) {
          if (self.getInProgress()) {
            e = e || window.event;
            e.returnValue = self._options.messages.onLeave;
            return self._options.messages.onLeave;
          }
        });
      },
      _refreshSessionData: function _refreshSessionData() {
        var self = this,
          options = this._options.session;
        if (qq.Session && this._options.session.endpoint != null) {
          if (!this._session) {
            qq.extend(options, {
              cors: this._options.cors
            });
            options.log = qq.bind(this.log, this);
            options.addFileRecord = qq.bind(this._addCannedFile, this);
            this._session = new qq.Session(options);
          }
          setTimeout(function () {
            self._session.refresh().then(function (response, xhrOrXdr) {
              self._sessionRequestComplete();
              self._options.callbacks.onSessionRequestComplete(response, true, xhrOrXdr);
            }, function (response, xhrOrXdr) {
              self._options.callbacks.onSessionRequestComplete(response, false, xhrOrXdr);
            });
          }, 0);
        }
      },
      _sessionRequestComplete: function _sessionRequestComplete() {},
      _setSize: function _setSize(id, newSize) {
        this._uploadData.updateSize(id, newSize);
        this._totalProgress && this._totalProgress.onNewSize(id);
      },
      _shouldAutoRetry: function _shouldAutoRetry(id) {
        var uploadData = this._uploadData.retrieve({
          id: id
        });
        if (!this._preventRetries[id] && this._options.retry.enableAuto && uploadData.status !== qq.status.PAUSED) {
          if (this._autoRetries[id] === undefined) {
            this._autoRetries[id] = 0;
          }
          if (this._autoRetries[id] < this._options.retry.maxAutoAttempts) {
            this._autoRetries[id] += 1;
            return true;
          }
        }
        return false;
      },
      _storeForLater: function _storeForLater(id) {
        this._storedIds.push(id);
      },
      _trackButton: function _trackButton(id) {
        var buttonId;
        if (qq.supportedFeatures.ajaxUploading) {
          buttonId = this._handler.getFile(id).qqButtonId;
        } else {
          buttonId = this._getButtonId(this._handler.getInput(id));
        }
        if (buttonId) {
          this._buttonIdsForFileIds[id] = buttonId;
        }
      },
      _updateFormSupportAndParams: function _updateFormSupportAndParams(formElementOrId) {
        this._options.form.element = formElementOrId;
        this._formSupport = qq.FormSupport && new qq.FormSupport(this._options.form, qq.bind(this.uploadStoredFiles, this), qq.bind(this.log, this));
        if (this._formSupport && this._formSupport.attachedToForm) {
          this._paramsStore.addReadOnly(null, this._formSupport.getFormInputsAsObject);
          this._options.autoUpload = this._formSupport.newAutoUpload;
          if (this._formSupport.newEndpoint) {
            this.setEndpoint(this._formSupport.newEndpoint);
          }
        }
      },
      _upload: function _upload(id, params, endpoint) {
        var name = this.getName(id);
        if (params) {
          this.setParams(params, id);
        }
        if (endpoint) {
          this.setEndpoint(endpoint, id);
        }
        this._handleCheckedCallback({
          name: "onSubmit",
          callback: qq.bind(this._options.callbacks.onSubmit, this, id, name),
          onSuccess: qq.bind(this._onSubmitCallbackSuccess, this, id, name),
          onFailure: qq.bind(this._fileOrBlobRejected, this, id, name),
          identifier: id
        });
      },
      _uploadFile: function _uploadFile(id) {
        if (!this._handler.upload(id)) {
          this._uploadData.setStatus(id, qq.status.QUEUED);
        }
      },
      _uploadStoredFiles: function _uploadStoredFiles() {
        var idToUpload,
          stillSubmitting,
          self = this;
        while (this._storedIds.length) {
          idToUpload = this._storedIds.shift();
          this._uploadFile(idToUpload);
        }
        stillSubmitting = this.getUploads({
          status: qq.status.SUBMITTING
        }).length;
        if (stillSubmitting) {
          qq.log("Still waiting for " + stillSubmitting + " files to clear submit queue. Will re-parse stored IDs array shortly.");
          setTimeout(function () {
            self._uploadStoredFiles();
          }, 1e3);
        }
      },
      _validateFileOrBlobData: function _validateFileOrBlobData(fileWrapper, validationDescriptor) {
        var self = this,
          file = function () {
            if (fileWrapper.file instanceof qq.BlobProxy) {
              return fileWrapper.file.referenceBlob;
            }
            return fileWrapper.file;
          }(),
          name = validationDescriptor.name,
          size = validationDescriptor.size,
          buttonId = this._getButtonId(fileWrapper.file),
          validationBase = this._getValidationBase(buttonId),
          validityChecker = new qq.Promise();
        validityChecker.then(function () {}, function () {
          self._fileOrBlobRejected(fileWrapper.id, name);
        });
        if (qq.isFileOrInput(file) && !this._isAllowedExtension(validationBase.allowedExtensions, name)) {
          this._itemError("typeError", name, file);
          return validityChecker.failure();
        }
        if (!this._options.validation.allowEmpty && size === 0) {
          this._itemError("emptyError", name, file);
          return validityChecker.failure();
        }
        if (size > 0 && validationBase.sizeLimit && size > validationBase.sizeLimit) {
          this._itemError("sizeError", name, file);
          return validityChecker.failure();
        }
        if (size > 0 && size < validationBase.minSizeLimit) {
          this._itemError("minSizeError", name, file);
          return validityChecker.failure();
        }
        if (qq.ImageValidation && qq.supportedFeatures.imagePreviews && qq.isFile(file)) {
          new qq.ImageValidation(file, qq.bind(self.log, self)).validate(validationBase.image).then(validityChecker.success, function (errorCode) {
            self._itemError(errorCode + "ImageError", name, file);
            validityChecker.failure();
          });
        } else {
          validityChecker.success();
        }
        return validityChecker;
      },
      _wrapCallbacks: function _wrapCallbacks() {
        var self, safeCallback, prop;
        self = this;
        safeCallback = function safeCallback(name, callback, args) {
          var errorMsg;
          try {
            return callback.apply(self, args);
          } catch (exception) {
            errorMsg = exception.message || exception.toString();
            self.log("Caught exception in '" + name + "' callback - " + errorMsg, "error");
          }
        };
        for (prop in this._options.callbacks) {
          (function () {
            var callbackName, callbackFunc;
            callbackName = prop;
            callbackFunc = self._options.callbacks[callbackName];
            self._options.callbacks[callbackName] = function () {
              return safeCallback(callbackName, callbackFunc, arguments);
            };
          })();
        }
      }
    };
  })();
  (function () {
    "use strict";

    qq.FileUploaderBasic = function (o) {
      var self = this;
      this._options = {
        debug: false,
        button: null,
        multiple: true,
        maxConnections: 3,
        disableCancelForFormUploads: false,
        autoUpload: true,
        warnBeforeUnload: true,
        request: {
          customHeaders: {},
          endpoint: "/server/upload",
          filenameParam: "qqfilename",
          forceMultipart: true,
          dest: '/',
          inputName: "hdfs_file",
          method: "POST",
          omitDefaultParams: false,
          params: {},
          paramsInBody: true,
          requireSuccessJson: true,
          totalFileSizeName: "qqtotalfilesize",
          uuidName: "qquuid"
        },
        validation: {
          allowedExtensions: [],
          sizeLimit: 0,
          minSizeLimit: 0,
          itemLimit: 0,
          stopOnFirstInvalidFile: true,
          acceptFiles: null,
          image: {
            maxHeight: 0,
            maxWidth: 0,
            minHeight: 0,
            minWidth: 0
          },
          allowEmpty: false
        },
        callbacks: {
          onSubmit: function onSubmit(id, name) {},
          onSubmitted: function onSubmitted(id, name) {},
          onComplete: function onComplete(id, name, responseJSON, maybeXhr) {},
          onAllComplete: function onAllComplete(successful, failed) {},
          onCancel: function onCancel(id, name) {},
          onUpload: function onUpload(id, name) {},
          onUploadChunk: function onUploadChunk(id, name, chunkData) {},
          onUploadChunkSuccess: function onUploadChunkSuccess(id, chunkData, responseJSON, xhr) {},
          onResume: function onResume(id, fileName, chunkData, customResumeData) {},
          onProgress: function onProgress(id, name, loaded, total) {},
          onTotalProgress: function onTotalProgress(loaded, total) {},
          onError: function onError(id, name, reason, maybeXhrOrXdr) {},
          onAutoRetry: function onAutoRetry(id, name, attemptNumber) {},
          onManualRetry: function onManualRetry(id, name) {},
          onValidateBatch: function onValidateBatch(fileOrBlobData) {},
          onValidate: function onValidate(fileOrBlobData) {},
          onSubmitDelete: function onSubmitDelete(id) {},
          onDelete: function onDelete(id) {},
          onDeleteComplete: function onDeleteComplete(id, xhrOrXdr, isError) {},
          onPasteReceived: function onPasteReceived(blob) {},
          onStatusChange: function onStatusChange(id, oldStatus, newStatus) {},
          onSessionRequestComplete: function onSessionRequestComplete(response, success, xhrOrXdr) {}
        },
        messages: {
          typeError: "{file} has an invalid extension. Valid extension(s): {extensions}.",
          sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
          minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
          emptyError: "{file} is empty, please select files again without it.",
          noFilesError: "No files to upload.",
          tooManyItemsError: "Too many items ({netItems}) would be uploaded.  Item limit is {itemLimit}.",
          maxHeightImageError: "Image is too tall.",
          maxWidthImageError: "Image is too wide.",
          minHeightImageError: "Image is not tall enough.",
          minWidthImageError: "Image is not wide enough.",
          retryFailTooManyItems: "Retry failed - you have reached your file limit.",
          onLeave: "The files are being uploaded, if you leave now the upload will be canceled.",
          unsupportedBrowserIos8Safari: "Unrecoverable error - this browser does not permit file uploading of any kind due to serious bugs in iOS8 Safari.  Please use iOS8 Chrome until Apple fixes these issues."
        },
        retry: {
          enableAuto: false,
          maxAutoAttempts: 3,
          autoAttemptDelay: 5,
          preventRetryResponseProperty: "preventRetry"
        },
        classes: {
          buttonHover: "qq-upload-button-hover",
          buttonFocus: "qq-upload-button-focus"
        },
        chunking: {
          enabled: true,
          concurrent: {
            enabled: false
          },
          mandatory: false,
          paramNames: {
            partIndex: "qqpartindex",
            partByteOffset: "qqpartbyteoffset",
            chunkSize: "qqchunksize",
            totalFileSize: "qqtotalfilesize",
            totalParts: "qqtotalparts"
          },
          partSize: function partSize(id) {
            return 2e6;
          },
          success: {
            endpoint: null,
            headers: function headers(id) {
              return null;
            },
            jsonPayload: false,
            method: "POST",
            params: function params(id) {
              return null;
            },
            resetOnStatus: []
          }
        },
        resume: {
          enabled: false,
          recordsExpireIn: 7,
          paramNames: {
            resuming: "qqresume"
          },
          customKeys: function customKeys(fileId) {
            return [];
          }
        },
        formatFileName: function formatFileName(fileOrBlobName) {
          return fileOrBlobName;
        },
        text: {
          defaultResponseError: "Upload failure reason unknown",
          fileInputTitle: "file input",
          sizeSymbols: ["kB", "MB", "GB", "TB", "PB", "EB"]
        },
        deleteFile: {
          enabled: false,
          method: "DELETE",
          endpoint: "/server/upload",
          customHeaders: {},
          params: {}
        },
        cors: {
          expected: false,
          sendCredentials: false,
          allowXdr: false
        },
        blobs: {
          defaultName: "misc_data"
        },
        paste: {
          targetElement: null,
          defaultName: "pasted_image"
        },
        camera: {
          ios: false,
          button: null
        },
        extraButtons: [],
        session: {
          endpoint: null,
          params: {},
          customHeaders: {},
          refreshOnReset: true
        },
        form: {
          element: "qq-form",
          autoUpload: false,
          interceptSubmit: true
        },
        scaling: {
          customResizer: null,
          sendOriginal: true,
          orient: true,
          defaultType: null,
          defaultQuality: 80,
          failureText: "Failed to scale",
          includeExif: false,
          sizes: []
        },
        workarounds: {
          iosEmptyVideos: true,
          ios8SafariUploads: true,
          ios8BrowserCrash: false
        }
      };
      qq.extend(this._options, o, true);
      this._buttons = [];
      this._extraButtonSpecs = {};
      this._buttonIdsForFileIds = [];
      this._wrapCallbacks();
      this._disposeSupport = new qq.DisposeSupport();
      this._storedIds = [];
      this._autoRetries = [];
      this._retryTimeouts = [];
      this._preventRetries = [];
      this._thumbnailUrls = [];
      this._netUploadedOrQueued = 0;
      this._netUploaded = 0;
      this._uploadData = this._createUploadDataTracker();
      this._initFormSupportAndParams();
      this._customHeadersStore = this._createStore(this._options.request.customHeaders);
      this._deleteFileCustomHeadersStore = this._createStore(this._options.deleteFile.customHeaders);
      this._deleteFileParamsStore = this._createStore(this._options.deleteFile.params);
      this._endpointStore = this._createStore(this._options.request.endpoint);
      this._deleteFileEndpointStore = this._createStore(this._options.deleteFile.endpoint);
      this._handler = this._createUploadHandler();
      this._deleteHandler = qq.DeleteFileAjaxRequester && this._createDeleteHandler();
      if (this._options.button) {
        this._defaultButtonId = this._createUploadButton({
          element: this._options.button,
          title: this._options.text.fileInputTitle
        }).getButtonId();
      }
      this._generateExtraButtonSpecs();
      this._handleCameraAccess();
      if (this._options.paste.targetElement) {
        if (qq.PasteSupport) {
          this._pasteHandler = this._createPasteHandler();
        } else {
          this.log("Paste support module not found", "error");
        }
      }
      this._options.warnBeforeUnload && this._preventLeaveInProgress();
      this._imageGenerator = qq.ImageGenerator && new qq.ImageGenerator(qq.bind(this.log, this));
      this._refreshSessionData();
      this._succeededSinceLastAllComplete = [];
      this._failedSinceLastAllComplete = [];
      this._scaler = qq.Scaler && new qq.Scaler(this._options.scaling, qq.bind(this.log, this)) || {};
      if (this._scaler.enabled) {
        this._customNewFileHandler = qq.bind(this._scaler.handleNewFile, this._scaler);
      }
      if (qq.TotalProgress && qq.supportedFeatures.progressBar) {
        this._totalProgress = new qq.TotalProgress(qq.bind(this._onTotalProgress, this), function (id) {
          var entry = self._uploadData.retrieve({
            id: id
          });
          return entry && entry.size || 0;
        });
      }
      this._currentItemLimit = this._options.validation.itemLimit;
      this._customResumeDataStore = this._createStore();
    };
    qq.FileUploaderBasic.prototype = qq.basePublicApi;
    qq.extend(qq.FileUploaderBasic.prototype, qq.basePrivateApi);
  })();
  qq.AjaxRequester = function (o) {
    "use strict";

    var log,
      shouldParamsBeInQueryString,
      queue = [],
      requestData = {},
      options = {
        acceptHeader: null,
        validMethods: ["PATCH", "POST", "PUT"],
        method: "POST",
        contentType: "application/x-www-form-urlencoded",
        maxConnections: 3,
        customHeaders: {},
        endpointStore: {},
        paramsStore: {},
        mandatedParams: {},
        allowXRequestedWithAndCacheControl: true,
        successfulResponseCodes: {
          DELETE: [200, 202, 204],
          PATCH: [200, 201, 202, 203, 204],
          POST: [200, 201, 202, 203, 204],
          PUT: [200, 201, 202, 203, 204],
          GET: [200]
        },
        cors: {
          expected: false,
          sendCredentials: false
        },
        log: function log(str, level) {},
        onSend: function onSend(id) {},
        onComplete: function onComplete(id, xhrOrXdr, isError) {},
        onProgress: null
      };
    qq.extend(options, o);
    log = options.log;
    if (qq.indexOf(options.validMethods, options.method) < 0) {
      throw new Error("'" + options.method + "' is not a supported method for this type of request!");
    }
    function isSimpleMethod() {
      return qq.indexOf(["GET", "POST", "HEAD"], options.method) >= 0;
    }
    function containsNonSimpleHeaders(headers) {
      var containsNonSimple = false;
      qq.each(containsNonSimple, function (idx, header) {
        if (qq.indexOf(["Accept", "Accept-Language", "Content-Language", "Content-Type"], header) < 0) {
          containsNonSimple = true;
          return false;
        }
      });
      return containsNonSimple;
    }
    function isXdr(xhr) {
      return options.cors.expected && xhr.withCredentials === undefined;
    }
    function getCorsAjaxTransport() {
      var xhrOrXdr;
      if (window.XMLHttpRequest || window.ActiveXObject) {
        xhrOrXdr = qq.createXhrInstance();
        if (xhrOrXdr.withCredentials === undefined) {
          xhrOrXdr = new XDomainRequest();
          xhrOrXdr.onload = function () {};
          xhrOrXdr.onerror = function () {};
          xhrOrXdr.ontimeout = function () {};
          xhrOrXdr.onprogress = function () {};
        }
      }
      return xhrOrXdr;
    }
    function getXhrOrXdr(id, suppliedXhr) {
      var xhrOrXdr = requestData[id] && requestData[id].xhr;
      if (!xhrOrXdr) {
        if (suppliedXhr) {
          xhrOrXdr = suppliedXhr;
        } else {
          if (options.cors.expected) {
            xhrOrXdr = getCorsAjaxTransport();
          } else {
            xhrOrXdr = qq.createXhrInstance();
          }
        }
        requestData[id].xhr = xhrOrXdr;
      }
      return xhrOrXdr;
    }
    function dequeue(id) {
      var i = qq.indexOf(queue, id),
        max = options.maxConnections,
        nextId;
      delete requestData[id];
      queue.splice(i, 1);
      if (queue.length >= max && i < max) {
        nextId = queue[max - 1];
        sendRequest(nextId);
      }
    }
    function onComplete(id, xdrError) {
      var xhr = getXhrOrXdr(id),
        method = options.method,
        isError = xdrError === true;
      dequeue(id);
      if (isError) {
        log(method + " request for " + id + " has failed", "error");
      } else if (!isXdr(xhr) && !isResponseSuccessful(xhr.status)) {
        isError = true;
        log(method + " request for " + id + " has failed - response code " + xhr.status, "error");
      }
      options.onComplete(id, xhr, isError);
    }
    function getParams(id) {
      var onDemandParams = requestData[id].additionalParams,
        mandatedParams = options.mandatedParams,
        params;
      if (options.paramsStore.get) {
        params = options.paramsStore.get(id);
      }
      if (onDemandParams) {
        qq.each(onDemandParams, function (name, val) {
          params = params || {};
          params[name] = val;
        });
      }
      if (mandatedParams) {
        qq.each(mandatedParams, function (name, val) {
          params = params || {};
          params[name] = val;
        });
      }
      return params;
    }
    function sendRequest(id, optXhr) {
      var xhr = getXhrOrXdr(id, optXhr),
        method = options.method,
        params = getParams(id),
        payload = requestData[id].payload,
        url;
      options.onSend(id);
      url = createUrl(id, params, requestData[id].additionalQueryParams);
      if (isXdr(xhr)) {
        xhr.onload = getXdrLoadHandler(id);
        xhr.onerror = getXdrErrorHandler(id);
      } else {
        xhr.onreadystatechange = getXhrReadyStateChangeHandler(id);
      }
      registerForUploadProgress(id);
      xhr.open(method, url, true);
      if (options.cors.expected && options.cors.sendCredentials && !isXdr(xhr)) {
        xhr.withCredentials = true;
      }
      setHeaders(id);
      log("Sending " + method + " request for " + id);
      if (payload) {
        xhr.send(payload);
      } else if (shouldParamsBeInQueryString || !params) {
        xhr.send();
      } else if (params && options.contentType && options.contentType.toLowerCase().indexOf("application/x-www-form-urlencoded") >= 0) {
        xhr.send(qq.obj2url(params, ""));
      } else if (params && options.contentType && options.contentType.toLowerCase().indexOf("application/json") >= 0) {
        xhr.send(JSON.stringify(params));
      } else {
        xhr.send(params);
      }
      return xhr;
    }
    function createUrl(id, params, additionalQueryParams) {
      var endpoint = options.endpointStore.get(id),
        addToPath = requestData[id].addToPath;
      if (addToPath != undefined) {
        endpoint += "/" + addToPath;
      }
      if (shouldParamsBeInQueryString && params) {
        endpoint = qq.obj2url(params, endpoint);
      }
      if (additionalQueryParams) {
        endpoint = qq.obj2url(additionalQueryParams, endpoint);
      }
      return endpoint;
    }
    function getXhrReadyStateChangeHandler(id) {
      return function () {
        if (getXhrOrXdr(id).readyState === 4) {
          onComplete(id);
        }
      };
    }
    function registerForUploadProgress(id) {
      var onProgress = options.onProgress;
      if (onProgress) {
        getXhrOrXdr(id).upload.onprogress = function (e) {
          if (e.lengthComputable) {
            onProgress(id, e.loaded, e.total);
          }
        };
      }
    }
    function getXdrLoadHandler(id) {
      return function () {
        onComplete(id);
      };
    }
    function getXdrErrorHandler(id) {
      return function () {
        onComplete(id, true);
      };
    }
    function setHeaders(id) {
      var xhr = getXhrOrXdr(id),
        customHeaders = options.customHeaders,
        onDemandHeaders = requestData[id].additionalHeaders || {},
        method = options.method,
        allHeaders = {};
      if (!isXdr(xhr)) {
        options.acceptHeader && xhr.setRequestHeader("Accept", options.acceptHeader);
        if (options.allowXRequestedWithAndCacheControl) {
          if (!options.cors.expected || !isSimpleMethod() || containsNonSimpleHeaders(customHeaders)) {
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.setRequestHeader("Cache-Control", "no-cache");
          }
        }
        if (options.contentType && (method === "POST" || method === "PUT")) {
          xhr.setRequestHeader("Content-Type", options.contentType);
        }
        qq.extend(allHeaders, qq.isFunction(customHeaders) ? customHeaders(id) : customHeaders);
        qq.extend(allHeaders, onDemandHeaders);
        qq.each(allHeaders, function (name, val) {
          xhr.setRequestHeader(name, val);
        });
      }
    }
    function isResponseSuccessful(responseCode) {
      return qq.indexOf(options.successfulResponseCodes[options.method], responseCode) >= 0;
    }
    function prepareToSend(id, optXhr, addToPath, additionalParams, additionalQueryParams, additionalHeaders, payload) {
      requestData[id] = {
        addToPath: addToPath,
        additionalParams: additionalParams,
        additionalQueryParams: additionalQueryParams,
        additionalHeaders: additionalHeaders,
        payload: payload
      };
      var len = queue.push(id);
      if (len <= options.maxConnections) {
        return sendRequest(id, optXhr);
      }
    }
    shouldParamsBeInQueryString = options.method === "GET" || options.method === "DELETE";
    qq.extend(this, {
      initTransport: function initTransport(id) {
        var path, params, headers, payload, cacheBuster, additionalQueryParams;
        return {
          withPath: function withPath(appendToPath) {
            path = appendToPath;
            return this;
          },
          withParams: function withParams(additionalParams) {
            params = additionalParams;
            return this;
          },
          withQueryParams: function withQueryParams(_additionalQueryParams_) {
            additionalQueryParams = _additionalQueryParams_;
            return this;
          },
          withHeaders: function withHeaders(additionalHeaders) {
            headers = additionalHeaders;
            return this;
          },
          withPayload: function withPayload(thePayload) {
            payload = thePayload;
            return this;
          },
          withCacheBuster: function withCacheBuster() {
            cacheBuster = true;
            return this;
          },
          send: function send(optXhr) {
            if (cacheBuster && qq.indexOf(["GET", "DELETE"], options.method) >= 0) {
              params.qqtimestamp = new Date().getTime();
            }
            return prepareToSend(id, optXhr, path, params, additionalQueryParams, headers, payload);
          }
        };
      },
      canceled: function canceled(id) {
        dequeue(id);
      }
    });
  };
  qq.UploadHandler = function (spec) {
    "use strict";

    var proxy = spec.proxy,
      fileState = {},
      onCancel = proxy.onCancel,
      getName = proxy.getName;
    qq.extend(this, {
      add: function add(id, fileItem) {
        fileState[id] = fileItem;
        fileState[id].temp = {};
      },
      cancel: function cancel(id) {
        var self = this,
          cancelFinalizationEffort = new qq.Promise(),
          onCancelRetVal = onCancel(id, getName(id), cancelFinalizationEffort);
        onCancelRetVal.then(function () {
          if (self.isValid(id)) {
            fileState[id].canceled = true;
            self.expunge(id);
          }
          cancelFinalizationEffort.success();
        });
      },
      expunge: function expunge(id) {
        delete fileState[id];
      },
      getThirdPartyFileId: function getThirdPartyFileId(id) {
        return fileState[id].key;
      },
      isValid: function isValid(id) {
        return fileState[id] !== undefined;
      },
      reset: function reset() {
        fileState = {};
      },
      _getFileState: function _getFileState(id) {
        return fileState[id];
      },
      _setThirdPartyFileId: function _setThirdPartyFileId(id, thirdPartyFileId) {
        fileState[id].key = thirdPartyFileId;
      },
      _wasCanceled: function _wasCanceled(id) {
        return !!fileState[id].canceled;
      }
    });
  };
  qq.UploadHandlerController = function (o, namespace) {
    "use strict";

    var controller = this,
      chunkingPossible = false,
      concurrentChunkingPossible = false,
      chunking,
      preventRetryResponse,
      log,
      handler,
      options = {
        paramsStore: {},
        maxConnections: 3,
        chunking: {
          enabled: false,
          multiple: {
            enabled: false
          }
        },
        log: function log(str, level) {},
        onProgress: function onProgress(id, fileName, loaded, total) {},
        onComplete: function onComplete(id, fileName, response, xhr) {},
        onCancel: function onCancel(id, fileName) {},
        onUploadPrep: function onUploadPrep(id) {},
        onUpload: function onUpload(id, fileName) {},
        onUploadChunk: function onUploadChunk(id, fileName, chunkData) {},
        onUploadChunkSuccess: function onUploadChunkSuccess(id, chunkData, response, xhr) {},
        onAutoRetry: function onAutoRetry(id, fileName, response, xhr) {},
        onResume: function onResume(id, fileName, chunkData, customResumeData) {},
        onUuidChanged: function onUuidChanged(id, newUuid) {},
        getName: function getName(id) {},
        setSize: function setSize(id, newSize) {},
        isQueued: function isQueued(id) {},
        getIdsInProxyGroup: function getIdsInProxyGroup(id) {},
        getIdsInBatch: function getIdsInBatch(id) {},
        isInProgress: function isInProgress(id) {}
      },
      chunked = {
        done: function done(id, chunkIdx, response, xhr) {
          var chunkData = handler._getChunkData(id, chunkIdx);
          handler._getFileState(id).attemptingResume = false;
          delete handler._getFileState(id).temp.chunkProgress[chunkIdx];
          handler._getFileState(id).loaded += chunkData.size;
          options.onUploadChunkSuccess(id, handler._getChunkDataForCallback(chunkData), response, xhr);
        },
        finalize: function finalize(id) {
          var size = options.getSize(id),
            name = options.getName(id);
          log("All chunks have been uploaded for " + id + " - finalizing....");
          handler.finalizeChunks(id).then(function (response, xhr) {
            log("Finalize successful for " + id);
            var normaizedResponse = _upload2.normalizeResponse(response, true);
            options.onProgress(id, name, size, size);
            handler._maybeDeletePersistedChunkData(id);
            _upload2.cleanup(id, normaizedResponse, xhr);
          }, function (response, xhr) {
            var normalizedResponse = _upload2.normalizeResponse(response, false);
            log("Problem finalizing chunks for file ID " + id + " - " + normalizedResponse.error, "error");
            if (normalizedResponse.reset || xhr && options.chunking.success.resetOnStatus.indexOf(xhr.status) >= 0) {
              chunked.reset(id);
            }
            if (!options.onAutoRetry(id, name, normalizedResponse, xhr)) {
              _upload2.cleanup(id, normalizedResponse, xhr);
            }
          });
        },
        handleFailure: function handleFailure(chunkIdx, id, response, xhr) {
          var name = options.getName(id);
          log("Chunked upload request failed for " + id + ", chunk " + chunkIdx);
          handler.clearCachedChunk(id, chunkIdx);
          var responseToReport = _upload2.normalizeResponse(response, false),
            inProgressIdx;
          if (responseToReport.reset) {
            chunked.reset(id);
          } else {
            var inProgressChunksArray = handler._getFileState(id).chunking.inProgress;
            inProgressIdx = inProgressChunksArray ? qq.indexOf(inProgressChunksArray, chunkIdx) : -1;
            if (inProgressIdx >= 0) {
              handler._getFileState(id).chunking.inProgress.splice(inProgressIdx, 1);
              handler._getFileState(id).chunking.remaining.unshift(chunkIdx);
            }
          }
          if (!handler._getFileState(id).temp.ignoreFailure) {
            if (concurrentChunkingPossible) {
              handler._getFileState(id).temp.ignoreFailure = true;
              log(qq.format("Going to attempt to abort these chunks: {}. These are currently in-progress: {}.", JSON.stringify(Object.keys(handler._getXhrs(id))), JSON.stringify(handler._getFileState(id).chunking.inProgress)));
              qq.each(handler._getXhrs(id), function (ckid, ckXhr) {
                log(qq.format("Attempting to abort file {}.{}. XHR readyState {}. ", id, ckid, ckXhr.readyState));
                ckXhr.abort();
                ckXhr._cancelled = true;
              });
              handler.moveInProgressToRemaining(id);
              connectionManager.free(id, true);
            }
            if (!options.onAutoRetry(id, name, responseToReport, xhr)) {
              _upload2.cleanup(id, responseToReport, xhr);
            }
          }
        },
        hasMoreParts: function hasMoreParts(id) {
          return !!handler._getFileState(id).chunking.remaining.length;
        },
        nextPart: function nextPart(id) {
          var nextIdx = handler._getFileState(id).chunking.remaining.shift();
          if (nextIdx >= handler._getTotalChunks(id)) {
            nextIdx = null;
          }
          return nextIdx;
        },
        reset: function reset(id) {
          log("Server or callback has ordered chunking effort to be restarted on next attempt for item ID " + id, "error");
          handler._maybeDeletePersistedChunkData(id);
          handler.reevaluateChunking(id);
          handler._getFileState(id).loaded = 0;
          handler._getFileState(id).attemptingResume = false;
        },
        sendNext: function sendNext(id) {
          var size = options.getSize(id),
            name = options.getName(id),
            chunkIdx = chunked.nextPart(id),
            chunkData = handler._getChunkData(id, chunkIdx),
            fileState = handler._getFileState(id),
            resuming = fileState.attemptingResume,
            inProgressChunks = fileState.chunking.inProgress || [];
          if (fileState.loaded == null) {
            fileState.loaded = 0;
          }
          if (resuming && options.onResume(id, name, chunkData, fileState.customResumeData) === false) {
            chunked.reset(id);
            chunkIdx = chunked.nextPart(id);
            chunkData = handler._getChunkData(id, chunkIdx);
            resuming = false;
          }
          if (chunkIdx == null && inProgressChunks.length === 0) {
            chunked.finalize(id);
          } else {
            inProgressChunks.push(chunkIdx);
            handler._getFileState(id).chunking.inProgress = inProgressChunks;
            if (concurrentChunkingPossible) {
              connectionManager.open(id, chunkIdx);
            }
            if (concurrentChunkingPossible && connectionManager.available() && handler._getFileState(id).chunking.remaining.length) {
              chunked.sendNext(id);
            }
            if (chunkData.blob.size === 0) {
              log(qq.format("Chunk {} for file {} will not be uploaded, zero sized chunk.", chunkIdx, id), "error");
              chunked.handleFailure(chunkIdx, id, "File is no longer available", null);
            }
            var onUploadChunkPromise = options.onUploadChunk(id, name, handler._getChunkDataForCallback(chunkData));
            onUploadChunkPromise.then(function (requestOverrides) {
              if (!options.isInProgress(id)) {
                log(qq.format("Not sending chunked upload request for item {}.{} - no longer in progress.", id, chunkIdx));
              } else {
                log(qq.format("Sending chunked upload request for item {}.{}, bytes {}-{} of {}.", id, chunkIdx, chunkData.start + 1, chunkData.end, size));
                var uploadChunkData = {
                  chunkIdx: chunkIdx,
                  id: id,
                  overrides: requestOverrides,
                  resuming: resuming
                };
                handler.uploadChunk(uploadChunkData).then(function success(response, xhr) {
                  log("Chunked upload request succeeded for " + id + ", chunk " + chunkIdx);
                  handler.clearCachedChunk(id, chunkIdx);
                  var inProgressChunks = handler._getFileState(id).chunking.inProgress || [],
                    responseToReport = _upload2.normalizeResponse(response, true),
                    inProgressChunkIdx = qq.indexOf(inProgressChunks, chunkIdx);
                  log(qq.format("Chunk {} for file {} uploaded successfully.", chunkIdx, id));
                  chunked.done(id, chunkIdx, responseToReport, xhr);
                  if (inProgressChunkIdx >= 0) {
                    inProgressChunks.splice(inProgressChunkIdx, 1);
                  }
                  handler._maybePersistChunkedState(id);
                  if (!chunked.hasMoreParts(id) && inProgressChunks.length === 0) {
                    chunked.finalize(id);
                  } else if (chunked.hasMoreParts(id)) {
                    chunked.sendNext(id);
                  } else {
                    log(qq.format("File ID {} has no more chunks to send and these chunk indexes are still marked as in-progress: {}", id, JSON.stringify(inProgressChunks)));
                  }
                }, function failure(response, xhr) {
                  chunked.handleFailure(chunkIdx, id, response, xhr);
                }).done(function () {
                  handler.clearXhr(id, chunkIdx);
                });
              }
            }, function (error) {
              chunked.handleFailure(chunkIdx, id, error, null);
            });
          }
        }
      },
      connectionManager = {
        _open: [],
        _openChunks: {},
        _waiting: [],
        available: function available() {
          var max = options.maxConnections,
            openChunkEntriesCount = 0,
            openChunksCount = 0;
          qq.each(connectionManager._openChunks, function (fileId, openChunkIndexes) {
            openChunkEntriesCount++;
            openChunksCount += openChunkIndexes.length;
          });
          return max - (connectionManager._open.length - openChunkEntriesCount + openChunksCount);
        },
        free: function free(id, dontAllowNext) {
          var allowNext = !dontAllowNext,
            waitingIndex = qq.indexOf(connectionManager._waiting, id),
            connectionsIndex = qq.indexOf(connectionManager._open, id),
            nextId;
          delete connectionManager._openChunks[id];
          if (_upload2.getProxyOrBlob(id) instanceof qq.BlobProxy) {
            log("Generated blob upload has ended for " + id + ", disposing generated blob.");
            delete handler._getFileState(id).file;
          }
          if (waitingIndex >= 0) {
            connectionManager._waiting.splice(waitingIndex, 1);
          } else if (allowNext && connectionsIndex >= 0) {
            connectionManager._open.splice(connectionsIndex, 1);
            nextId = connectionManager._waiting.shift();
            if (nextId >= 0) {
              connectionManager._open.push(nextId);
              _upload2.start(nextId);
            }
          }
        },
        getWaitingOrConnected: function getWaitingOrConnected() {
          var waitingOrConnected = [];
          qq.each(connectionManager._openChunks, function (fileId, chunks) {
            if (chunks && chunks.length) {
              waitingOrConnected.push(parseInt(fileId));
            }
          });
          qq.each(connectionManager._open, function (idx, fileId) {
            if (!connectionManager._openChunks[fileId]) {
              waitingOrConnected.push(parseInt(fileId));
            }
          });
          waitingOrConnected = waitingOrConnected.concat(connectionManager._waiting);
          return waitingOrConnected;
        },
        isUsingConnection: function isUsingConnection(id) {
          return qq.indexOf(connectionManager._open, id) >= 0;
        },
        open: function open(id, chunkIdx) {
          if (chunkIdx == null) {
            connectionManager._waiting.push(id);
          }
          if (connectionManager.available()) {
            if (chunkIdx == null) {
              connectionManager._waiting.pop();
              connectionManager._open.push(id);
            } else {
              (function () {
                var openChunksEntry = connectionManager._openChunks[id] || [];
                openChunksEntry.push(chunkIdx);
                connectionManager._openChunks[id] = openChunksEntry;
              })();
            }
            return true;
          }
          return false;
        },
        reset: function reset() {
          connectionManager._waiting = [];
          connectionManager._open = [];
        }
      },
      simple = {
        send: function send(id, name) {
          var fileState = handler._getFileState(id);
          if (!fileState) {
            log("Ignoring send request as this upload may have been cancelled, File ID " + id, "warn");
            return;
          }
          fileState.loaded = 0;
          log("Sending simple upload request for " + id);
          handler.uploadFile(id).then(function (response, optXhr) {
            log("Simple upload request succeeded for " + id);
            var responseToReport = _upload2.normalizeResponse(response, true),
              size = options.getSize(id);
            options.onProgress(id, name, size, size);
            _upload2.maybeNewUuid(id, responseToReport);
            _upload2.cleanup(id, responseToReport, optXhr);
          }, function (response, optXhr) {
            log("Simple upload request failed for " + id);
            var responseToReport = _upload2.normalizeResponse(response, false);
            if (!options.onAutoRetry(id, name, responseToReport, optXhr)) {
              _upload2.cleanup(id, responseToReport, optXhr);
            }
          });
        }
      },
      _upload2 = {
        cancel: function cancel(id) {
          log("Cancelling " + id);
          options.paramsStore.remove(id);
          connectionManager.free(id);
        },
        cleanup: function cleanup(id, response, optXhr) {
          var name = options.getName(id);
          options.onComplete(id, name, response, optXhr);
          if (handler._getFileState(id)) {
            handler._clearXhrs && handler._clearXhrs(id);
          }
          connectionManager.free(id);
        },
        getProxyOrBlob: function getProxyOrBlob(id) {
          return handler.getProxy && handler.getProxy(id) || handler.getFile && handler.getFile(id);
        },
        initHandler: function initHandler() {
          var handlerType = namespace ? qq[namespace] : qq.traditional,
            handlerModuleSubtype = qq.supportedFeatures.ajaxUploading ? "Xhr" : "Form";
          handler = new handlerType[handlerModuleSubtype + "UploadHandler"](options, {
            getCustomResumeData: options.getCustomResumeData,
            getDataByUuid: options.getDataByUuid,
            getName: options.getName,
            getSize: options.getSize,
            getUuid: options.getUuid,
            log: log,
            onCancel: options.onCancel,
            onProgress: options.onProgress,
            onUuidChanged: options.onUuidChanged,
            onFinalizing: function onFinalizing(id) {
              options.setStatus(id, qq.status.UPLOAD_FINALIZING);
            }
          });
          if (handler._removeExpiredChunkingRecords) {
            handler._removeExpiredChunkingRecords();
          }
        },
        isDeferredEligibleForUpload: function isDeferredEligibleForUpload(id) {
          return options.isQueued(id);
        },
        maybeDefer: function maybeDefer(id, blob) {
          if (blob && !handler.getFile(id) && blob instanceof qq.BlobProxy) {
            options.onUploadPrep(id);
            log("Attempting to generate a blob on-demand for " + id);
            blob.create().then(function (generatedBlob) {
              log("Generated an on-demand blob for " + id);
              handler.updateBlob(id, generatedBlob);
              options.setSize(id, generatedBlob.size);
              handler.reevaluateChunking(id);
              _upload2.maybeSendDeferredFiles(id);
            }, function (errorMessage) {
              var errorResponse = {};
              if (errorMessage) {
                errorResponse.error = errorMessage;
              }
              log(qq.format("Failed to generate blob for ID {}.  Error message: {}.", id, errorMessage), "error");
              options.onComplete(id, options.getName(id), qq.extend(errorResponse, preventRetryResponse), null);
              _upload2.maybeSendDeferredFiles(id);
              connectionManager.free(id);
            });
          } else {
            return _upload2.maybeSendDeferredFiles(id);
          }
          return false;
        },
        maybeSendDeferredFiles: function maybeSendDeferredFiles(id) {
          var idsInGroup = options.getIdsInProxyGroup(id),
            uploadedThisId = false;
          if (idsInGroup && idsInGroup.length) {
            log("Maybe ready to upload proxy group file " + id);
            qq.each(idsInGroup, function (idx, idInGroup) {
              if (_upload2.isDeferredEligibleForUpload(idInGroup) && !!handler.getFile(idInGroup)) {
                uploadedThisId = idInGroup === id;
                _upload2.now(idInGroup);
              } else if (_upload2.isDeferredEligibleForUpload(idInGroup)) {
                return false;
              }
            });
          } else {
            uploadedThisId = true;
            _upload2.now(id);
          }
          return uploadedThisId;
        },
        maybeNewUuid: function maybeNewUuid(id, response) {
          if (response.newUuid !== undefined) {
            options.onUuidChanged(id, response.newUuid);
          }
        },
        normalizeResponse: function normalizeResponse(originalResponse, successful) {
          var response = originalResponse;
          if (!qq.isObject(originalResponse)) {
            response = {};
            if (qq.isString(originalResponse) && !successful) {
              response.error = originalResponse;
            }
          }
          response.success = successful;
          return response;
        },
        now: function now(id) {
          var name = options.getName(id);
          if (!controller.isValid(id)) {
            throw new qq.Error(id + " is not a valid file ID to upload!");
          }
          options.onUpload(id, name).then(function (response) {
            if (response && response.pause) {
              options.setStatus(id, qq.status.PAUSED);
              handler.pause(id);
              connectionManager.free(id);
            } else {
              if (chunkingPossible && handler._shouldChunkThisFile(id)) {
                chunked.sendNext(id);
              } else {
                simple.send(id, name);
              }
            }
          }, function (error) {
            error = error || {};
            log(id + " upload start aborted due to rejected onUpload Promise - details: " + error, "error");
            if (!options.onAutoRetry(id, name, error.responseJSON || {})) {
              var response = _upload2.normalizeResponse(error.responseJSON, false);
              _upload2.cleanup(id, response);
            }
          });
        },
        start: function start(id) {
          var blobToUpload = _upload2.getProxyOrBlob(id);
          if (blobToUpload) {
            return _upload2.maybeDefer(id, blobToUpload);
          } else {
            _upload2.now(id);
            return true;
          }
        }
      };
    qq.extend(this, {
      add: function add(id, file) {
        handler.add.apply(this, arguments);
      },
      upload: function upload(id) {
        if (connectionManager.open(id)) {
          return _upload2.start(id);
        }
        return false;
      },
      retry: function retry(id) {
        if (concurrentChunkingPossible) {
          handler._getFileState(id).temp.ignoreFailure = false;
        }
        if (connectionManager.isUsingConnection(id)) {
          return _upload2.start(id);
        } else {
          return controller.upload(id);
        }
      },
      cancel: function cancel(id) {
        var cancelRetVal = handler.cancel(id);
        if (qq.isGenericPromise(cancelRetVal)) {
          cancelRetVal.then(function () {
            _upload2.cancel(id);
          });
        } else if (cancelRetVal !== false) {
          _upload2.cancel(id);
        }
      },
      cancelAll: function cancelAll() {
        var waitingOrConnected = connectionManager.getWaitingOrConnected(),
          i;
        if (waitingOrConnected.length) {
          for (i = waitingOrConnected.length - 1; i >= 0; i--) {
            controller.cancel(waitingOrConnected[i]);
          }
        }
        connectionManager.reset();
      },
      getFile: function getFile(id) {
        if (handler.getProxy && handler.getProxy(id)) {
          return handler.getProxy(id).referenceBlob;
        }
        return handler.getFile && handler.getFile(id);
      },
      isProxied: function isProxied(id) {
        return !!(handler.getProxy && handler.getProxy(id));
      },
      getInput: function getInput(id) {
        if (handler.getInput) {
          return handler.getInput(id);
        }
      },
      reset: function reset() {
        log("Resetting upload handler");
        controller.cancelAll();
        connectionManager.reset();
        handler.reset();
      },
      expunge: function expunge(id) {
        if (controller.isValid(id)) {
          return handler.expunge(id);
        }
      },
      isValid: function isValid(id) {
        return handler.isValid(id);
      },
      hasResumeRecord: function hasResumeRecord(id) {
        var key = handler.isValid(id) && handler._getLocalStorageId && handler._getLocalStorageId(id);
        if (key) {
          return !!localStorage.getItem(key);
        }
        return false;
      },
      getResumableFilesData: function getResumableFilesData() {
        if (handler.getResumableFilesData) {
          return handler.getResumableFilesData();
        }
        return [];
      },
      getThirdPartyFileId: function getThirdPartyFileId(id) {
        if (controller.isValid(id)) {
          return handler.getThirdPartyFileId(id);
        }
      },
      pause: function pause(id) {
        if (controller.isResumable(id) && handler.pause && controller.isValid(id) && handler.pause(id)) {
          connectionManager.free(id);
          handler.moveInProgressToRemaining(id);
          return true;
        }
        return false;
      },
      isAttemptingResume: function isAttemptingResume(id) {
        return !!handler.isAttemptingResume && handler.isAttemptingResume(id);
      },
      isResumable: function isResumable(id) {
        return !!handler.isResumable && handler.isResumable(id);
      }
    });
    qq.extend(options, o);
    log = options.log;
    chunkingPossible = options.chunking.enabled && qq.supportedFeatures.chunking;
    concurrentChunkingPossible = chunkingPossible && options.chunking.concurrent.enabled;
    preventRetryResponse = function () {
      var response = {};
      response[options.preventRetryParam] = true;
      return response;
    }();
    _upload2.initHandler();
  };
  qq.WindowReceiveMessage = function (o) {
    "use strict";

    var options = {
        log: function log(message, level) {}
      },
      callbackWrapperDetachers = {};
    qq.extend(options, o);
    qq.extend(this, {
      receiveMessage: function receiveMessage(id, callback) {
        var onMessageCallbackWrapper = function onMessageCallbackWrapper(event) {
          callback(event.data);
        };
        if (window.postMessage) {
          callbackWrapperDetachers[id] = qq(window).attach("message", onMessageCallbackWrapper);
        } else {
          log("iframe message passing not supported in this browser!", "error");
        }
      },
      stopReceivingMessages: function stopReceivingMessages(id) {
        if (window.postMessage) {
          var detacher = callbackWrapperDetachers[id];
          if (detacher) {
            detacher();
          }
        }
      }
    });
  };
  qq.FormUploadHandler = function (spec) {
    "use strict";

    var options = spec.options,
      handler = this,
      proxy = spec.proxy,
      formHandlerInstanceId = qq.getUniqueId(),
      onloadCallbacks = {},
      detachLoadEvents = {},
      postMessageCallbackTimers = {},
      isCors = options.isCors,
      inputName = options.inputName,
      getUuid = proxy.getUuid,
      log = proxy.log,
      corsMessageReceiver = new qq.WindowReceiveMessage({
        log: log
      });
    function expungeFile(id) {
      delete detachLoadEvents[id];
      if (isCors) {
        clearTimeout(postMessageCallbackTimers[id]);
        delete postMessageCallbackTimers[id];
        corsMessageReceiver.stopReceivingMessages(id);
      }
      var iframe = document.getElementById(handler._getIframeName(id));
      if (iframe) {
        iframe.setAttribute("src", "javascript:false;");
        qq(iframe).remove();
      }
    }
    function getFileIdForIframeName(iframeName) {
      return iframeName.split("_")[0];
    }
    function initIframeForUpload(name) {
      var iframe = qq.toElement("<iframe src='javascript:false;' name='" + name + "' />");
      iframe.setAttribute("id", name);
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      return iframe;
    }
    function registerPostMessageCallback(iframe, callback) {
      var iframeName = iframe.id,
        fileId = getFileIdForIframeName(iframeName),
        uuid = getUuid(fileId);
      onloadCallbacks[uuid] = callback;
      detachLoadEvents[fileId] = qq(iframe).attach("load", function () {
        if (handler.getInput(fileId)) {
          log("Received iframe load event for CORS upload request (iframe name " + iframeName + ")");
          postMessageCallbackTimers[iframeName] = setTimeout(function () {
            var errorMessage = "No valid message received from loaded iframe for iframe name " + iframeName;
            log(errorMessage, "error");
            callback({
              error: errorMessage
            });
          }, 1e3);
        }
      });
      corsMessageReceiver.receiveMessage(iframeName, function (message) {
        log("Received the following window message: '" + message + "'");
        var fileId = getFileIdForIframeName(iframeName),
          response = handler._parseJsonResponse(message),
          uuid = response.uuid,
          onloadCallback;
        if (uuid && onloadCallbacks[uuid]) {
          log("Handling response for iframe name " + iframeName);
          clearTimeout(postMessageCallbackTimers[iframeName]);
          delete postMessageCallbackTimers[iframeName];
          handler._detachLoadEvent(iframeName);
          onloadCallback = onloadCallbacks[uuid];
          delete onloadCallbacks[uuid];
          corsMessageReceiver.stopReceivingMessages(iframeName);
          onloadCallback(response);
        } else if (!uuid) {
          log("'" + message + "' does not contain a UUID - ignoring.");
        }
      });
    }
    qq.extend(this, new qq.UploadHandler(spec));
    qq.override(this, function (super_) {
      return {
        add: function add(id, fileInput) {
          super_.add(id, {
            input: fileInput
          });
          fileInput.setAttribute("name", inputName);
          if (fileInput.parentNode) {
            qq(fileInput).remove();
          }
        },
        expunge: function expunge(id) {
          expungeFile(id);
          super_.expunge(id);
        },
        isValid: function isValid(id) {
          return super_.isValid(id) && handler._getFileState(id).input !== undefined;
        }
      };
    });
    qq.extend(this, {
      getInput: function getInput(id) {
        return handler._getFileState(id).input;
      },
      _attachLoadEvent: function _attachLoadEvent(iframe, callback) {
        var responseDescriptor;
        if (isCors) {
          registerPostMessageCallback(iframe, callback);
        } else {
          detachLoadEvents[iframe.id] = qq(iframe).attach("load", function () {
            log("Received response for " + iframe.id);
            if (!iframe.parentNode) {
              return;
            }
            try {
              if (iframe.contentDocument && iframe.contentDocument.body && iframe.contentDocument.body.innerHTML == "false") {
                return;
              }
            } catch (error) {
              log("Error when attempting to access iframe during handling of upload response (" + error.message + ")", "error");
              responseDescriptor = {
                success: false
              };
            }
            callback(responseDescriptor);
          });
        }
      },
      _createIframe: function _createIframe(id) {
        var iframeName = handler._getIframeName(id);
        return initIframeForUpload(iframeName);
      },
      _detachLoadEvent: function _detachLoadEvent(id) {
        if (detachLoadEvents[id] !== undefined) {
          detachLoadEvents[id]();
          delete detachLoadEvents[id];
        }
      },
      _getIframeName: function _getIframeName(fileId) {
        return fileId + "_" + formHandlerInstanceId;
      },
      _initFormForUpload: function _initFormForUpload(spec) {
        var method = spec.method,
          endpoint = spec.endpoint,
          params = spec.params,
          paramsInBody = spec.paramsInBody,
          targetName = spec.targetName,
          form = qq.toElement("<form method='" + method + "' enctype='multipart/form-data'></form>"),
          url = endpoint;
        if (paramsInBody) {
          qq.obj2Inputs(params, form);
        } else {
          url = qq.obj2url(params, endpoint);
        }
        form.setAttribute("action", url);
        form.setAttribute("target", targetName);
        form.style.display = "none";
        document.body.appendChild(form);
        return form;
      },
      _parseJsonResponse: function _parseJsonResponse(innerHtmlOrMessage) {
        var response = {};
        try {
          response = qq.parseJson(innerHtmlOrMessage);
        } catch (error) {
          log("Error when attempting to parse iframe upload response (" + error.message + ")", "error");
        }
        return response;
      }
    });
  };
  qq.XhrUploadHandler = function (spec) {
    "use strict";

    var handler = this,
      namespace = spec.options.namespace,
      proxy = spec.proxy,
      chunking = spec.options.chunking,
      getChunkSize = function getChunkSize(id) {
        var fileState = handler._getFileState(id);
        if (fileState.chunkSize) {
          return fileState.chunkSize;
        } else {
          var chunkSize = chunking.partSize;
          if (qq.isFunction(chunkSize)) {
            chunkSize = chunkSize(id, getSize(id));
          }
          fileState.chunkSize = chunkSize;
          return chunkSize;
        }
      },
      resume = spec.options.resume,
      chunkFiles = chunking && spec.options.chunking.enabled && qq.supportedFeatures.chunking,
      resumeEnabled = resume && spec.options.resume.enabled && chunkFiles && qq.supportedFeatures.resume,
      getName = proxy.getName,
      getSize = proxy.getSize,
      getUuid = proxy.getUuid,
      getEndpoint = proxy.getEndpoint,
      getDataByUuid = proxy.getDataByUuid,
      onUuidChanged = proxy.onUuidChanged,
      onProgress = proxy.onProgress,
      log = proxy.log,
      getCustomResumeData = proxy.getCustomResumeData;
    function abort(id) {
      qq.each(handler._getXhrs(id), function (xhrId, xhr) {
        var ajaxRequester = handler._getAjaxRequester(id, xhrId);
        xhr.onreadystatechange = null;
        xhr.upload.onprogress = null;
        xhr.abort();
        ajaxRequester && ajaxRequester.canceled && ajaxRequester.canceled(id);
      });
    }
    qq.extend(this, new qq.UploadHandler(spec));
    qq.override(this, function (super_) {
      return {
        add: function add(id, blobOrProxy) {
          if (qq.isFile(blobOrProxy) || qq.isBlob(blobOrProxy)) {
            super_.add(id, {
              file: blobOrProxy
            });
          } else if (blobOrProxy instanceof qq.BlobProxy) {
            super_.add(id, {
              proxy: blobOrProxy
            });
          } else {
            throw new Error("Passed obj is not a File, Blob, or proxy");
          }
          handler._initTempState(id);
          resumeEnabled && handler._maybePrepareForResume(id);
        },
        expunge: function expunge(id) {
          abort(id);
          handler._maybeDeletePersistedChunkData(id);
          handler._clearXhrs(id);
          super_.expunge(id);
        }
      };
    });
    qq.extend(this, {
      clearCachedChunk: function clearCachedChunk(id, chunkIdx) {
        var fileState = handler._getFileState(id);
        if (fileState) {
          delete fileState.temp.cachedChunks[chunkIdx];
        }
      },
      clearXhr: function clearXhr(id, chunkIdx) {
        var tempState = handler._getFileState(id).temp;
        if (tempState.xhrs) {
          delete tempState.xhrs[chunkIdx];
        }
        if (tempState.ajaxRequesters) {
          delete tempState.ajaxRequesters[chunkIdx];
        }
      },
      finalizeChunks: function finalizeChunks(id, responseParser) {
        var lastChunkIdx = handler._getTotalChunks(id) - 1,
          xhr = handler._getXhr(id, lastChunkIdx);
        if (responseParser) {
          return new qq.Promise().success(responseParser(xhr), xhr);
        }
        return new qq.Promise().success({}, xhr);
      },
      getFile: function getFile(id) {
        return handler.isValid(id) && handler._getFileState(id).file;
      },
      getProxy: function getProxy(id) {
        return handler.isValid(id) && handler._getFileState(id).proxy;
      },
      getResumableFilesData: function getResumableFilesData() {
        var resumableFilesData = [];
        handler._iterateResumeRecords(function (key, uploadData) {
          handler.moveInProgressToRemaining(null, uploadData.chunking.inProgress, uploadData.chunking.remaining);
          var data = {
            name: uploadData.name,
            remaining: uploadData.chunking.remaining,
            size: uploadData.size,
            uuid: uploadData.uuid
          };
          if (uploadData.key) {
            data.key = uploadData.key;
          }
          if (uploadData.customResumeData) {
            data.customResumeData = uploadData.customResumeData;
          }
          resumableFilesData.push(data);
        });
        return resumableFilesData;
      },
      isAttemptingResume: function isAttemptingResume(id) {
        return handler._getFileState(id).attemptingResume;
      },
      isResumable: function isResumable(id) {
        return !!chunking && handler.isValid(id) && !handler._getFileState(id).notResumable;
      },
      moveInProgressToRemaining: function moveInProgressToRemaining(id, optInProgress, optRemaining) {
        var fileState = handler._getFileState(id) || {},
          chunkingState = fileState.chunking || {},
          inProgress = optInProgress || chunkingState.inProgress,
          remaining = optRemaining || chunkingState.remaining;
        if (inProgress) {
          log(qq.format("Moving these chunks from in-progress {}, to remaining.", JSON.stringify(inProgress)));
          inProgress.reverse();
          qq.each(inProgress, function (idx, chunkIdx) {
            remaining.unshift(chunkIdx);
          });
          inProgress.length = 0;
        }
      },
      pause: function pause(id) {
        if (handler.isValid(id)) {
          log(qq.format("Aborting XHR upload for {} '{}' due to pause instruction.", id, getName(id)));
          handler._getFileState(id).paused = true;
          abort(id);
          return true;
        }
      },
      reevaluateChunking: function reevaluateChunking(id) {
        if (chunking && handler.isValid(id)) {
          var state = handler._getFileState(id),
            totalChunks,
            i;
          delete state.chunking;
          state.chunking = {};
          totalChunks = handler._getTotalChunks(id);
          if (totalChunks > 1 || chunking.mandatory) {
            state.chunking.enabled = true;
            state.chunking.parts = totalChunks;
            state.chunking.remaining = [];
            for (i = 0; i < totalChunks; i++) {
              state.chunking.remaining.push(i);
            }
            handler._initTempState(id);
          } else {
            state.chunking.enabled = false;
          }
        }
      },
      updateBlob: function updateBlob(id, newBlob) {
        if (handler.isValid(id)) {
          handler._getFileState(id).file = newBlob;
        }
      },
      _clearXhrs: function _clearXhrs(id) {
        var tempState = handler._getFileState(id).temp;
        qq.each(tempState.ajaxRequesters, function (chunkId) {
          delete tempState.ajaxRequesters[chunkId];
        });
        qq.each(tempState.xhrs, function (chunkId) {
          delete tempState.xhrs[chunkId];
        });
      },
      _createXhr: function _createXhr(id, optChunkIdx) {
        return handler._registerXhr(id, optChunkIdx, qq.createXhrInstance());
      },
      _getAjaxRequester: function _getAjaxRequester(id, optChunkIdx) {
        var chunkIdx = optChunkIdx == null ? -1 : optChunkIdx;
        return handler._getFileState(id).temp.ajaxRequesters[chunkIdx];
      },
      _getChunkData: function _getChunkData(id, chunkIndex) {
        var chunkSize = getChunkSize(id),
          fileSize = getSize(id),
          fileOrBlob = handler.getFile(id),
          startBytes = chunkSize * chunkIndex,
          endBytes = startBytes + chunkSize >= fileSize ? fileSize : startBytes + chunkSize,
          totalChunks = handler._getTotalChunks(id),
          cachedChunks = this._getFileState(id).temp.cachedChunks,
          blob = cachedChunks[chunkIndex] || qq.sliceBlob(fileOrBlob, startBytes, endBytes);
        cachedChunks[chunkIndex] = blob;
        return {
          part: chunkIndex,
          start: startBytes,
          end: endBytes,
          count: totalChunks,
          blob: blob,
          size: endBytes - startBytes
        };
      },
      _getChunkDataForCallback: function _getChunkDataForCallback(chunkData) {
        return {
          partIndex: chunkData.part,
          startByte: chunkData.start + 1,
          endByte: chunkData.end,
          totalParts: chunkData.count
        };
      },
      _getLocalStorageId: function _getLocalStorageId(id) {
        var formatVersion = "5.0",
          name = getName(id),
          size = getSize(id),
          chunkSize = getChunkSize(id),
          endpoint = getEndpoint(id),
          customKeys = resume.customKeys(id),
          localStorageId = qq.format("qq{}resume{}-{}-{}-{}-{}", namespace, formatVersion, name, size, chunkSize, endpoint);
        customKeys.forEach(function (key) {
          localStorageId += "-" + key;
        });
        return localStorageId;
      },
      _getMimeType: function _getMimeType(id) {
        return handler.getFile(id).type;
      },
      _getPersistableData: function _getPersistableData(id) {
        return handler._getFileState(id).chunking;
      },
      _getTotalChunks: function _getTotalChunks(id) {
        if (chunking) {
          var fileSize = getSize(id),
            chunkSize = getChunkSize(id);
          return Math.ceil(fileSize / chunkSize);
        }
      },
      _getXhr: function _getXhr(id, optChunkIdx) {
        var chunkIdx = optChunkIdx == null ? -1 : optChunkIdx;
        return handler._getFileState(id).temp.xhrs[chunkIdx];
      },
      _getXhrs: function _getXhrs(id) {
        return handler._getFileState(id).temp.xhrs;
      },
      _iterateResumeRecords: function _iterateResumeRecords(callback) {
        if (resumeEnabled) {
          qq.each(localStorage, function (key, item) {
            if (key.indexOf(qq.format("qq{}resume", namespace)) === 0) {
              var uploadData = JSON.parse(item);
              callback(key, uploadData);
            }
          });
        }
      },
      _initTempState: function _initTempState(id) {
        handler._getFileState(id).temp = {
          ajaxRequesters: {},
          chunkProgress: {},
          xhrs: {},
          cachedChunks: {}
        };
      },
      _markNotResumable: function _markNotResumable(id) {
        handler._getFileState(id).notResumable = true;
      },
      _maybeDeletePersistedChunkData: function _maybeDeletePersistedChunkData(id) {
        var localStorageId;
        if (resumeEnabled && handler.isResumable(id)) {
          localStorageId = handler._getLocalStorageId(id);
          if (localStorageId && localStorage.getItem(localStorageId)) {
            localStorage.removeItem(localStorageId);
            return true;
          }
        }
        return false;
      },
      _maybePrepareForResume: function _maybePrepareForResume(id) {
        var state = handler._getFileState(id),
          localStorageId,
          persistedData;
        if (resumeEnabled && state.key === undefined) {
          localStorageId = handler._getLocalStorageId(id);
          persistedData = localStorage.getItem(localStorageId);
          if (persistedData) {
            persistedData = JSON.parse(persistedData);
            if (getDataByUuid(persistedData.uuid)) {
              handler._markNotResumable(id);
            } else {
              log(qq.format("Identified file with ID {} and name of {} as resumable.", id, getName(id)));
              onUuidChanged(id, persistedData.uuid);
              state.key = persistedData.key;
              state.chunking = persistedData.chunking;
              state.loaded = persistedData.loaded;
              state.customResumeData = persistedData.customResumeData;
              state.attemptingResume = true;
              handler.moveInProgressToRemaining(id);
            }
          }
        }
      },
      _maybePersistChunkedState: function _maybePersistChunkedState(id) {
        var state = handler._getFileState(id),
          localStorageId,
          persistedData;
        if (resumeEnabled && handler.isResumable(id)) {
          var customResumeData = getCustomResumeData(id);
          localStorageId = handler._getLocalStorageId(id);
          persistedData = {
            name: getName(id),
            size: getSize(id),
            uuid: getUuid(id),
            key: state.key,
            chunking: state.chunking,
            loaded: state.loaded,
            lastUpdated: Date.now()
          };
          if (customResumeData) {
            persistedData.customResumeData = customResumeData;
          }
          try {
            localStorage.setItem(localStorageId, JSON.stringify(persistedData));
          } catch (error) {
            log(qq.format("Unable to save resume data for '{}' due to error: '{}'.", id, error.toString()), "warn");
          }
        }
      },
      _registerProgressHandler: function _registerProgressHandler(id, chunkIdx, chunkSize) {
        var xhr = handler._getXhr(id, chunkIdx),
          name = getName(id),
          progressCalculator = {
            simple: function simple(loaded, total) {
              var fileSize = getSize(id);
              if (loaded === total) {
                onProgress(id, name, fileSize, fileSize);
              } else {
                onProgress(id, name, loaded >= fileSize ? fileSize - 1 : loaded, fileSize);
              }
            },
            chunked: function chunked(loaded, total) {
              var chunkProgress = handler._getFileState(id).temp.chunkProgress,
                totalSuccessfullyLoadedForFile = handler._getFileState(id).loaded,
                loadedForRequest = loaded,
                totalForRequest = total,
                totalFileSize = getSize(id),
                estActualChunkLoaded = loadedForRequest - (totalForRequest - chunkSize),
                totalLoadedForFile = totalSuccessfullyLoadedForFile;
              chunkProgress[chunkIdx] = estActualChunkLoaded;
              qq.each(chunkProgress, function (chunkIdx, chunkLoaded) {
                totalLoadedForFile += chunkLoaded;
              });
              onProgress(id, name, totalLoadedForFile, totalFileSize);
            }
          };
        xhr.upload.onprogress = function (e) {
          if (e.lengthComputable) {
            var type = chunkSize == null ? "simple" : "chunked";
            progressCalculator[type](e.loaded, e.total);
          }
        };
      },
      _registerXhr: function _registerXhr(id, optChunkIdx, xhr, optAjaxRequester) {
        var xhrsId = optChunkIdx == null ? -1 : optChunkIdx,
          tempState = handler._getFileState(id).temp;
        tempState.xhrs = tempState.xhrs || {};
        tempState.ajaxRequesters = tempState.ajaxRequesters || {};
        tempState.xhrs[xhrsId] = xhr;
        if (optAjaxRequester) {
          tempState.ajaxRequesters[xhrsId] = optAjaxRequester;
        }
        return xhr;
      },
      _removeExpiredChunkingRecords: function _removeExpiredChunkingRecords() {
        var expirationDays = resume.recordsExpireIn;
        handler._iterateResumeRecords(function (key, uploadData) {
          var expirationDate = new Date(uploadData.lastUpdated);
          expirationDate.setDate(expirationDate.getDate() + expirationDays);
          if (expirationDate.getTime() <= Date.now()) {
            log("Removing expired resume record with key " + key);
            localStorage.removeItem(key);
          }
        });
      },
      _shouldChunkThisFile: function _shouldChunkThisFile(id) {
        var state = handler._getFileState(id);
        if (state) {
          if (!state.chunking) {
            handler.reevaluateChunking(id);
          }
          return state.chunking.enabled;
        }
      }
    });
  };
  qq.DeleteFileAjaxRequester = function (o) {
    "use strict";

    var requester,
      options = {
        method: "DELETE",
        uuidParamName: "qquuid",
        endpointStore: {},
        maxConnections: 3,
        customHeaders: function customHeaders(id) {
          return {};
        },
        paramsStore: {},
        cors: {
          expected: false,
          sendCredentials: false
        },
        log: function log(str, level) {},
        onDelete: function onDelete(id) {},
        onDeleteComplete: function onDeleteComplete(id, xhrOrXdr, isError) {}
      };
    qq.extend(options, o);
    function getMandatedParams() {
      if (options.method.toUpperCase() === "POST") {
        return {
          _method: "DELETE"
        };
      }
      return {};
    }
    requester = qq.extend(this, new qq.AjaxRequester({
      acceptHeader: "application/json",
      validMethods: ["POST", "DELETE"],
      method: options.method,
      endpointStore: options.endpointStore,
      paramsStore: options.paramsStore,
      mandatedParams: getMandatedParams(),
      maxConnections: options.maxConnections,
      customHeaders: function customHeaders(id) {
        return options.customHeaders.get(id);
      },
      log: options.log,
      onSend: options.onDelete,
      onComplete: options.onDeleteComplete,
      cors: options.cors
    }));
    qq.extend(this, {
      sendDelete: function sendDelete(id, uuid, additionalMandatedParams) {
        var additionalOptions = additionalMandatedParams || {};
        options.log("Submitting delete file request for " + id);
        if (options.method === "DELETE") {
          requester.initTransport(id).withPath(uuid).withParams(additionalOptions).send();
        } else {
          additionalOptions[options.uuidParamName] = uuid;
          requester.initTransport(id).withParams(additionalOptions).send();
        }
      }
    });
  };
  (function () {
    function detectSubsampling(img) {
      var iw = img.naturalWidth,
        ih = img.naturalHeight,
        canvas = document.createElement("canvas"),
        ctx;
      if (iw * ih > 1024 * 1024) {
        canvas.width = canvas.height = 1;
        ctx = canvas.getContext("2d");
        ctx.drawImage(img, -iw + 1, 0);
        return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
      } else {
        return false;
      }
    }
    function detectVerticalSquash(img, iw, ih) {
      var canvas = document.createElement("canvas"),
        sy = 0,
        ey = ih,
        py = ih,
        ctx,
        data,
        alpha,
        ratio;
      canvas.width = 1;
      canvas.height = ih;
      ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      data = ctx.getImageData(0, 0, 1, ih).data;
      while (py > sy) {
        alpha = data[(py - 1) * 4 + 3];
        if (alpha === 0) {
          ey = py;
        } else {
          sy = py;
        }
        py = ey + sy >> 1;
      }
      ratio = py / ih;
      return ratio === 0 ? 1 : ratio;
    }
    function renderImageToDataURL(img, blob, options, doSquash) {
      var canvas = document.createElement("canvas"),
        mime = options.mime || "image/jpeg",
        promise = new qq.Promise();
      renderImageToCanvas(img, blob, canvas, options, doSquash).then(function () {
        promise.success(canvas.toDataURL(mime, options.quality || .8));
      });
      return promise;
    }
    function maybeCalculateDownsampledDimensions(spec) {
      var maxPixels = 5241e3;
      if (!qq.ios()) {
        throw new qq.Error("Downsampled dimensions can only be reliably calculated for iOS!");
      }
      if (spec.origHeight * spec.origWidth > maxPixels) {
        return {
          newHeight: Math.round(Math.sqrt(maxPixels * (spec.origHeight / spec.origWidth))),
          newWidth: Math.round(Math.sqrt(maxPixels * (spec.origWidth / spec.origHeight)))
        };
      }
    }
    function renderImageToCanvas(img, blob, canvas, options, doSquash) {
      var iw = img.naturalWidth,
        ih = img.naturalHeight,
        width = options.width,
        height = options.height,
        ctx = canvas.getContext("2d"),
        promise = new qq.Promise(),
        modifiedDimensions;
      ctx.save();
      if (options.resize) {
        return renderImageToCanvasWithCustomResizer({
          blob: blob,
          canvas: canvas,
          image: img,
          imageHeight: ih,
          imageWidth: iw,
          orientation: options.orientation,
          resize: options.resize,
          targetHeight: height,
          targetWidth: width
        });
      }
      if (!qq.supportedFeatures.unlimitedScaledImageSize) {
        modifiedDimensions = maybeCalculateDownsampledDimensions({
          origWidth: width,
          origHeight: height
        });
        if (modifiedDimensions) {
          qq.log(qq.format("Had to reduce dimensions due to device limitations from {}w / {}h to {}w / {}h", width, height, modifiedDimensions.newWidth, modifiedDimensions.newHeight), "warn");
          width = modifiedDimensions.newWidth;
          height = modifiedDimensions.newHeight;
        }
      }
      transformCoordinate(canvas, width, height, options.orientation);
      if (qq.ios()) {
        (function () {
          if (detectSubsampling(img)) {
            iw /= 2;
            ih /= 2;
          }
          var d = 1024,
            tmpCanvas = document.createElement("canvas"),
            vertSquashRatio = doSquash ? detectVerticalSquash(img, iw, ih) : 1,
            dw = Math.ceil(d * width / iw),
            dh = Math.ceil(d * height / ih / vertSquashRatio),
            sy = 0,
            dy = 0,
            tmpCtx,
            sx,
            dx;
          tmpCanvas.width = tmpCanvas.height = d;
          tmpCtx = tmpCanvas.getContext("2d");
          while (sy < ih) {
            sx = 0;
            dx = 0;
            while (sx < iw) {
              tmpCtx.clearRect(0, 0, d, d);
              tmpCtx.drawImage(img, -sx, -sy);
              ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
              sx += d;
              dx += dw;
            }
            sy += d;
            dy += dh;
          }
          ctx.restore();
          tmpCanvas = tmpCtx = null;
        })();
      } else {
        ctx.drawImage(img, 0, 0, width, height);
      }
      canvas.qqImageRendered && canvas.qqImageRendered();
      promise.success();
      return promise;
    }
    function renderImageToCanvasWithCustomResizer(resizeInfo) {
      var blob = resizeInfo.blob,
        image = resizeInfo.image,
        imageHeight = resizeInfo.imageHeight,
        imageWidth = resizeInfo.imageWidth,
        orientation = resizeInfo.orientation,
        promise = new qq.Promise(),
        resize = resizeInfo.resize,
        sourceCanvas = document.createElement("canvas"),
        sourceCanvasContext = sourceCanvas.getContext("2d"),
        targetCanvas = resizeInfo.canvas,
        targetHeight = resizeInfo.targetHeight,
        targetWidth = resizeInfo.targetWidth;
      transformCoordinate(sourceCanvas, imageWidth, imageHeight, orientation);
      targetCanvas.height = targetHeight;
      targetCanvas.width = targetWidth;
      sourceCanvasContext.drawImage(image, 0, 0);
      resize({
        blob: blob,
        height: targetHeight,
        image: image,
        sourceCanvas: sourceCanvas,
        targetCanvas: targetCanvas,
        width: targetWidth
      }).then(function success() {
        targetCanvas.qqImageRendered && targetCanvas.qqImageRendered();
        promise.success();
      }, promise.failure);
      return promise;
    }
    function transformCoordinate(canvas, width, height, orientation) {
      switch (orientation) {
        case 5:
        case 6:
        case 7:
        case 8:
          canvas.width = height;
          canvas.height = width;
          break;
        default:
          canvas.width = width;
          canvas.height = height;
      }
      var ctx = canvas.getContext("2d");
      switch (orientation) {
        case 2:
          ctx.translate(width, 0);
          ctx.scale(-1, 1);
          break;
        case 3:
          ctx.translate(width, height);
          ctx.rotate(Math.PI);
          break;
        case 4:
          ctx.translate(0, height);
          ctx.scale(1, -1);
          break;
        case 5:
          ctx.rotate(.5 * Math.PI);
          ctx.scale(1, -1);
          break;
        case 6:
          ctx.rotate(.5 * Math.PI);
          ctx.translate(0, -height);
          break;
        case 7:
          ctx.rotate(.5 * Math.PI);
          ctx.translate(width, -height);
          ctx.scale(-1, 1);
          break;
        case 8:
          ctx.rotate(-.5 * Math.PI);
          ctx.translate(-width, 0);
          break;
        default:
          break;
      }
    }
    function MegaPixImage(srcImage, errorCallback) {
      var self = this;
      if (window.Blob && srcImage instanceof Blob) {
        (function () {
          var img = new Image(),
            URL = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
          if (!URL) {
            throw Error("No createObjectURL function found to create blob url");
          }
          img.src = URL.createObjectURL(srcImage);
          self.blob = srcImage;
          srcImage = img;
        })();
      }
      if (!srcImage.naturalWidth && !srcImage.naturalHeight) {
        srcImage.onload = function () {
          var listeners = self.imageLoadListeners;
          if (listeners) {
            self.imageLoadListeners = null;
            setTimeout(function () {
              for (var i = 0, len = listeners.length; i < len; i++) {
                listeners[i]();
              }
            }, 0);
          }
        };
        srcImage.onerror = errorCallback;
        this.imageLoadListeners = [];
      }
      this.srcImage = srcImage;
    }
    MegaPixImage.prototype.render = function (target, options) {
      options = options || {};
      var self = this,
        imgWidth = this.srcImage.naturalWidth,
        imgHeight = this.srcImage.naturalHeight,
        width = options.width,
        height = options.height,
        maxWidth = options.maxWidth,
        maxHeight = options.maxHeight,
        doSquash = !this.blob || this.blob.type === "image/jpeg",
        tagName = target.tagName.toLowerCase(),
        opt;
      if (this.imageLoadListeners) {
        this.imageLoadListeners.push(function () {
          self.render(target, options);
        });
        return;
      }
      if (width && !height) {
        height = imgHeight * width / imgWidth << 0;
      } else if (height && !width) {
        width = imgWidth * height / imgHeight << 0;
      } else {
        width = imgWidth;
        height = imgHeight;
      }
      if (maxWidth && width > maxWidth) {
        width = maxWidth;
        height = imgHeight * width / imgWidth << 0;
      }
      if (maxHeight && height > maxHeight) {
        height = maxHeight;
        width = imgWidth * height / imgHeight << 0;
      }
      opt = {
        width: width,
        height: height
      }, qq.each(options, function (optionsKey, optionsValue) {
        opt[optionsKey] = optionsValue;
      });
      if (tagName === "img") {
        (function () {
          var oldTargetSrc = target.src;
          renderImageToDataURL(self.srcImage, self.blob, opt, doSquash).then(function (dataUri) {
            target.src = dataUri;
            oldTargetSrc === target.src && target.onload && target.onload();
          });
        })();
      } else if (tagName === "canvas") {
        renderImageToCanvas(this.srcImage, this.blob, target, opt, doSquash);
      }
      if (typeof this.onrender === "function") {
        this.onrender(target);
      }
    };
    qq.MegaPixImage = MegaPixImage;
  })();
  qq.ImageGenerator = function (log) {
    "use strict";

    function isImg(el) {
      return el.tagName.toLowerCase() === "img";
    }
    function isCanvas(el) {
      return el.tagName.toLowerCase() === "canvas";
    }
    function isImgCorsSupported() {
      return new Image().crossOrigin !== undefined;
    }
    function isCanvasSupported() {
      var canvas = document.createElement("canvas");
      return canvas.getContext && canvas.getContext("2d");
    }
    function determineMimeOfFileName(nameWithPath) {
      var pathSegments = nameWithPath.split("/"),
        name = pathSegments[pathSegments.length - 1].split("?")[0],
        extension = qq.getExtension(name);
      extension = extension && extension.toLowerCase();
      switch (extension) {
        case "jpeg":
        case "jpg":
          return "image/jpeg";
        case "png":
          return "image/png";
        case "bmp":
          return "image/bmp";
        case "gif":
          return "image/gif";
        case "tiff":
        case "tif":
          return "image/tiff";
      }
    }
    function isCrossOrigin(url) {
      var targetAnchor = document.createElement("a"),
        targetProtocol,
        targetHostname,
        targetPort;
      targetAnchor.href = url;
      targetProtocol = targetAnchor.protocol;
      targetPort = targetAnchor.port;
      targetHostname = targetAnchor.hostname;
      if (targetProtocol.toLowerCase() !== window.location.protocol.toLowerCase()) {
        return true;
      }
      if (targetHostname.toLowerCase() !== window.location.hostname.toLowerCase()) {
        return true;
      }
      if (targetPort !== window.location.port && !qq.ie()) {
        return true;
      }
      return false;
    }
    function registerImgLoadListeners(img, promise) {
      img.onload = function () {
        img.onload = null;
        img.onerror = null;
        promise.success(img);
      };
      img.onerror = function () {
        img.onload = null;
        img.onerror = null;
        log("Problem drawing thumbnail!", "error");
        promise.failure(img, "Problem drawing thumbnail!");
      };
    }
    function registerCanvasDrawImageListener(canvas, promise) {
      canvas.qqImageRendered = function () {
        promise.success(canvas);
      };
    }
    function registerThumbnailRenderedListener(imgOrCanvas, promise) {
      var registered = isImg(imgOrCanvas) || isCanvas(imgOrCanvas);
      if (isImg(imgOrCanvas)) {
        registerImgLoadListeners(imgOrCanvas, promise);
      } else if (isCanvas(imgOrCanvas)) {
        registerCanvasDrawImageListener(imgOrCanvas, promise);
      } else {
        promise.failure(imgOrCanvas);
        log(qq.format("Element container of type {} is not supported!", imgOrCanvas.tagName), "error");
      }
      return registered;
    }
    function draw(fileOrBlob, container, options) {
      var drawPreview = new qq.Promise(),
        identifier = new qq.Identify(fileOrBlob, log),
        maxSize = options.maxSize,
        orient = options.orient == null ? true : options.orient,
        megapixErrorHandler = function megapixErrorHandler() {
          container.onerror = null;
          container.onload = null;
          log("Could not render preview, file may be too large!", "error");
          drawPreview.failure(container, "Browser cannot render image!");
        };
      identifier.isPreviewable().then(function (mime) {
        var dummyExif = {
            parse: function parse() {
              return new qq.Promise().success();
            }
          },
          exif = orient ? new qq.Exif(fileOrBlob, log) : dummyExif,
          mpImg = new qq.MegaPixImage(fileOrBlob, megapixErrorHandler);
        if (registerThumbnailRenderedListener(container, drawPreview)) {
          exif.parse().then(function (exif) {
            var orientation = exif && exif.Orientation;
            mpImg.render(container, {
              maxWidth: maxSize,
              maxHeight: maxSize,
              orientation: orientation,
              mime: mime,
              resize: options.customResizeFunction
            });
          }, function (failureMsg) {
            log(qq.format("EXIF data could not be parsed ({}).  Assuming orientation = 1.", failureMsg));
            mpImg.render(container, {
              maxWidth: maxSize,
              maxHeight: maxSize,
              mime: mime,
              resize: options.customResizeFunction
            });
          });
        }
      }, function () {
        log("Not previewable");
        drawPreview.failure(container, "Not previewable");
      });
      return drawPreview;
    }
    function drawOnCanvasOrImgFromUrl(url, canvasOrImg, draw, maxSize, customResizeFunction) {
      var tempImg = new Image(),
        tempImgRender = new qq.Promise();
      registerThumbnailRenderedListener(tempImg, tempImgRender);
      if (isCrossOrigin(url)) {
        tempImg.crossOrigin = "anonymous";
      }
      tempImg.src = url;
      tempImgRender.then(function rendered() {
        registerThumbnailRenderedListener(canvasOrImg, draw);
        var mpImg = new qq.MegaPixImage(tempImg);
        mpImg.render(canvasOrImg, {
          maxWidth: maxSize,
          maxHeight: maxSize,
          mime: determineMimeOfFileName(url),
          resize: customResizeFunction
        });
      }, draw.failure);
    }
    function drawOnImgFromUrlWithCssScaling(url, img, draw, maxSize) {
      registerThumbnailRenderedListener(img, draw);
      qq(img).css({
        maxWidth: maxSize + "px",
        maxHeight: maxSize + "px"
      });
      img.src = url;
    }
    function drawFromUrl(url, container, options) {
      var draw = new qq.Promise(),
        scale = options.scale,
        maxSize = scale ? options.maxSize : null;
      if (scale && isImg(container)) {
        if (isCanvasSupported()) {
          if (isCrossOrigin(url) && !isImgCorsSupported()) {
            drawOnImgFromUrlWithCssScaling(url, container, draw, maxSize);
          } else {
            drawOnCanvasOrImgFromUrl(url, container, draw, maxSize);
          }
        } else {
          drawOnImgFromUrlWithCssScaling(url, container, draw, maxSize);
        }
      } else if (isCanvas(container)) {
        drawOnCanvasOrImgFromUrl(url, container, draw, maxSize);
      } else if (registerThumbnailRenderedListener(container, draw)) {
        container.src = url;
      }
      return draw;
    }
    qq.extend(this, {
      generate: function generate(fileBlobOrUrl, container, options) {
        if (qq.isString(fileBlobOrUrl)) {
          log("Attempting to update thumbnail based on server response.");
          return drawFromUrl(fileBlobOrUrl, container, options || {});
        } else {
          log("Attempting to draw client-side image preview.");
          return draw(fileBlobOrUrl, container, options || {});
        }
      }
    });
    this._testing = {};
    this._testing.isImg = isImg;
    this._testing.isCanvas = isCanvas;
    this._testing.isCrossOrigin = isCrossOrigin;
    this._testing.determineMimeOfFileName = determineMimeOfFileName;
  };
  qq.Exif = function (fileOrBlob, log) {
    "use strict";

    var TAG_IDS = [274],
      TAG_INFO = {
        274: {
          name: "Orientation",
          bytes: 2
        }
      };
    function parseLittleEndian(hex) {
      var result = 0,
        pow = 0;
      while (hex.length > 0) {
        result += parseInt(hex.substring(0, 2), 16) * Math.pow(2, pow);
        hex = hex.substring(2, hex.length);
        pow += 8;
      }
      return result;
    }
    function seekToApp1(offset, promise) {
      var theOffset = offset,
        thePromise = promise;
      if (theOffset === undefined) {
        theOffset = 2;
        thePromise = new qq.Promise();
      }
      qq.readBlobToHex(fileOrBlob, theOffset, 4).then(function (hex) {
        var match = /^ffe([0-9])/.exec(hex),
          segmentLength;
        if (match) {
          if (match[1] !== "1") {
            segmentLength = parseInt(hex.slice(4, 8), 16);
            seekToApp1(theOffset + segmentLength + 2, thePromise);
          } else {
            thePromise.success(theOffset);
          }
        } else {
          thePromise.failure("No EXIF header to be found!");
        }
      });
      return thePromise;
    }
    function getApp1Offset() {
      var promise = new qq.Promise();
      qq.readBlobToHex(fileOrBlob, 0, 6).then(function (hex) {
        if (hex.indexOf("ffd8") !== 0) {
          promise.failure("Not a valid JPEG!");
        } else {
          seekToApp1().then(function (offset) {
            promise.success(offset);
          }, function (error) {
            promise.failure(error);
          });
        }
      });
      return promise;
    }
    function isLittleEndian(app1Start) {
      var promise = new qq.Promise();
      qq.readBlobToHex(fileOrBlob, app1Start + 10, 2).then(function (hex) {
        promise.success(hex === "4949");
      });
      return promise;
    }
    function getDirEntryCount(app1Start, littleEndian) {
      var promise = new qq.Promise();
      qq.readBlobToHex(fileOrBlob, app1Start + 18, 2).then(function (hex) {
        if (littleEndian) {
          return promise.success(parseLittleEndian(hex));
        } else {
          promise.success(parseInt(hex, 16));
        }
      });
      return promise;
    }
    function getIfd(app1Start, dirEntries) {
      var offset = app1Start + 20,
        bytes = dirEntries * 12;
      return qq.readBlobToHex(fileOrBlob, offset, bytes);
    }
    function getDirEntries(ifdHex) {
      var entries = [],
        offset = 0;
      while (offset + 24 <= ifdHex.length) {
        entries.push(ifdHex.slice(offset, offset + 24));
        offset += 24;
      }
      return entries;
    }
    function getTagValues(littleEndian, dirEntries) {
      var TAG_VAL_OFFSET = 16,
        tagsToFind = qq.extend([], TAG_IDS),
        vals = {};
      qq.each(dirEntries, function (idx, entry) {
        var idHex = entry.slice(0, 4),
          id = littleEndian ? parseLittleEndian(idHex) : parseInt(idHex, 16),
          tagsToFindIdx = tagsToFind.indexOf(id),
          tagValHex,
          tagName,
          tagValLength;
        if (tagsToFindIdx >= 0) {
          tagName = TAG_INFO[id].name;
          tagValLength = TAG_INFO[id].bytes;
          tagValHex = entry.slice(TAG_VAL_OFFSET, TAG_VAL_OFFSET + tagValLength * 2);
          vals[tagName] = littleEndian ? parseLittleEndian(tagValHex) : parseInt(tagValHex, 16);
          tagsToFind.splice(tagsToFindIdx, 1);
        }
        if (tagsToFind.length === 0) {
          return false;
        }
      });
      return vals;
    }
    qq.extend(this, {
      parse: function parse() {
        var parser = new qq.Promise(),
          onParseFailure = function onParseFailure(message) {
            log(qq.format("EXIF header parse failed: '{}' ", message));
            parser.failure(message);
          };
        getApp1Offset().then(function (app1Offset) {
          log(qq.format("Moving forward with EXIF header parsing for '{}'", fileOrBlob.name === undefined ? "blob" : fileOrBlob.name));
          isLittleEndian(app1Offset).then(function (littleEndian) {
            log(qq.format("EXIF Byte order is {} endian", littleEndian ? "little" : "big"));
            getDirEntryCount(app1Offset, littleEndian).then(function (dirEntryCount) {
              log(qq.format("Found {} APP1 directory entries", dirEntryCount));
              getIfd(app1Offset, dirEntryCount).then(function (ifdHex) {
                var dirEntries = getDirEntries(ifdHex),
                  tagValues = getTagValues(littleEndian, dirEntries);
                log("Successfully parsed some EXIF tags");
                parser.success(tagValues);
              }, onParseFailure);
            }, onParseFailure);
          }, onParseFailure);
        }, onParseFailure);
        return parser;
      }
    });
    this._testing = {};
    this._testing.parseLittleEndian = parseLittleEndian;
  };
  qq.Identify = function (fileOrBlob, log) {
    "use strict";

    function isIdentifiable(magicBytes, questionableBytes) {
      var identifiable = false,
        magicBytesEntries = [].concat(magicBytes);
      qq.each(magicBytesEntries, function (idx, magicBytesArrayEntry) {
        if (questionableBytes.indexOf(magicBytesArrayEntry) === 0) {
          identifiable = true;
          return false;
        }
      });
      return identifiable;
    }
    qq.extend(this, {
      isPreviewable: function isPreviewable() {
        var self = this,
          identifier = new qq.Promise(),
          previewable = false,
          name = fileOrBlob.name === undefined ? "blob" : fileOrBlob.name;
        log(qq.format("Attempting to determine if {} can be rendered in this browser", name));
        log("First pass: check type attribute of blob object.");
        if (this.isPreviewableSync()) {
          log("Second pass: check for magic bytes in file header.");
          qq.readBlobToHex(fileOrBlob, 0, 4).then(function (hex) {
            qq.each(self.PREVIEWABLE_MIME_TYPES, function (mime, bytes) {
              if (isIdentifiable(bytes, hex)) {
                if (mime !== "image/tiff" || qq.supportedFeatures.tiffPreviews) {
                  previewable = true;
                  identifier.success(mime);
                }
                return false;
              }
            });
            log(qq.format("'{}' is {} able to be rendered in this browser", name, previewable ? "" : "NOT"));
            if (!previewable) {
              identifier.failure();
            }
          }, function () {
            log("Error reading file w/ name '" + name + "'.  Not able to be rendered in this browser.");
            identifier.failure();
          });
        } else {
          identifier.failure();
        }
        return identifier;
      },
      isPreviewableSync: function isPreviewableSync() {
        var fileMime = fileOrBlob.type,
          isRecognizedImage = qq.indexOf(Object.keys(this.PREVIEWABLE_MIME_TYPES), fileMime) >= 0,
          previewable = false,
          name = fileOrBlob.name === undefined ? "blob" : fileOrBlob.name;
        if (isRecognizedImage) {
          if (fileMime === "image/tiff") {
            previewable = qq.supportedFeatures.tiffPreviews;
          } else {
            previewable = true;
          }
        }
        !previewable && log(name + " is not previewable in this browser per the blob's type attr");
        return previewable;
      }
    });
  };
  qq.Identify.prototype.PREVIEWABLE_MIME_TYPES = {
    "image/jpeg": "ffd8ff",
    "image/gif": "474946",
    "image/png": "89504e",
    "image/bmp": "424d",
    "image/tiff": ["49492a00", "4d4d002a"]
  };
  qq.ImageValidation = function (blob, log) {
    "use strict";

    function hasNonZeroLimits(limits) {
      var atLeastOne = false;
      qq.each(limits, function (limit, value) {
        if (value > 0) {
          atLeastOne = true;
          return false;
        }
      });
      return atLeastOne;
    }
    function getWidthHeight() {
      var sizeDetermination = new qq.Promise();
      new qq.Identify(blob, log).isPreviewable().then(function () {
        var image = new Image(),
          url = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
        if (url) {
          image.onerror = function () {
            log("Cannot determine dimensions for image.  May be too large.", "error");
            sizeDetermination.failure();
          };
          image.onload = function () {
            sizeDetermination.success({
              width: this.width,
              height: this.height
            });
          };
          image.src = url.createObjectURL(blob);
        } else {
          log("No createObjectURL function available to generate image URL!", "error");
          sizeDetermination.failure();
        }
      }, sizeDetermination.failure);
      return sizeDetermination;
    }
    function getFailingLimit(limits, dimensions) {
      var failingLimit;
      qq.each(limits, function (limitName, limitValue) {
        if (limitValue > 0) {
          var limitMatcher = /(max|min)(Width|Height)/.exec(limitName),
            dimensionPropName = limitMatcher[2].charAt(0).toLowerCase() + limitMatcher[2].slice(1),
            actualValue = dimensions[dimensionPropName];
          switch (limitMatcher[1]) {
            case "min":
              if (actualValue < limitValue) {
                failingLimit = limitName;
                return false;
              }
              break;
            case "max":
              if (actualValue > limitValue) {
                failingLimit = limitName;
                return false;
              }
              break;
          }
        }
      });
      return failingLimit;
    }
    this.validate = function (limits) {
      var validationEffort = new qq.Promise();
      log("Attempting to validate image.");
      if (hasNonZeroLimits(limits)) {
        getWidthHeight().then(function (dimensions) {
          var failingLimit = getFailingLimit(limits, dimensions);
          if (failingLimit) {
            validationEffort.failure(failingLimit);
          } else {
            validationEffort.success();
          }
        }, validationEffort.success);
      } else {
        validationEffort.success();
      }
      return validationEffort;
    };
  };
  qq.Session = function (spec) {
    "use strict";

    var options = {
      endpoint: null,
      params: {},
      customHeaders: {},
      cors: {},
      addFileRecord: function addFileRecord(sessionData) {},
      log: function log(message, level) {}
    };
    qq.extend(options, spec, true);
    function isJsonResponseValid(response) {
      if (qq.isArray(response)) {
        return true;
      }
      options.log("Session response is not an array.", "error");
    }
    function handleFileItems(fileItems, success, xhrOrXdr, promise) {
      var someItemsIgnored = false;
      success = success && isJsonResponseValid(fileItems);
      if (success) {
        qq.each(fileItems, function (idx, fileItem) {
          if (fileItem.uuid == null) {
            someItemsIgnored = true;
            options.log(qq.format("Session response item {} did not include a valid UUID - ignoring.", idx), "error");
          } else if (fileItem.name == null) {
            someItemsIgnored = true;
            options.log(qq.format("Session response item {} did not include a valid name - ignoring.", idx), "error");
          } else {
            try {
              options.addFileRecord(fileItem);
              return true;
            } catch (err) {
              someItemsIgnored = true;
              options.log(err.message, "error");
            }
          }
          return false;
        });
      }
      promise[success && !someItemsIgnored ? "success" : "failure"](fileItems, xhrOrXdr);
    }
    this.refresh = function () {
      var refreshEffort = new qq.Promise(),
        refreshCompleteCallback = function refreshCompleteCallback(response, success, xhrOrXdr) {
          handleFileItems(response, success, xhrOrXdr, refreshEffort);
        },
        requesterOptions = qq.extend({}, options),
        requester = new qq.SessionAjaxRequester(qq.extend(requesterOptions, {
          onComplete: refreshCompleteCallback
        }));
      requester.queryServer();
      return refreshEffort;
    };
  };
  qq.SessionAjaxRequester = function (spec) {
    "use strict";

    var requester,
      options = {
        endpoint: null,
        customHeaders: {},
        params: {},
        cors: {
          expected: false,
          sendCredentials: false
        },
        onComplete: function onComplete(response, success, xhrOrXdr) {},
        log: function log(str, level) {}
      };
    qq.extend(options, spec);
    function onComplete(id, xhrOrXdr, isError) {
      var response = null;
      if (xhrOrXdr.responseText != null) {
        try {
          response = qq.parseJson(xhrOrXdr.responseText);
        } catch (err) {
          options.log("Problem parsing session response: " + err.message, "error");
          isError = true;
        }
      }
      options.onComplete(response, !isError, xhrOrXdr);
    }
    requester = qq.extend(this, new qq.AjaxRequester({
      acceptHeader: "application/json",
      validMethods: ["GET"],
      method: "GET",
      endpointStore: {
        get: function get() {
          return options.endpoint;
        }
      },
      customHeaders: options.customHeaders,
      log: options.log,
      onComplete: onComplete,
      cors: options.cors
    }));
    qq.extend(this, {
      queryServer: function queryServer() {
        var params = qq.extend({}, options.params);
        options.log("Session query request.");
        requester.initTransport("sessionRefresh").withParams(params).withCacheBuster().send();
      }
    });
  };
  qq.Scaler = function (spec, log) {
    "use strict";

    var self = this,
      customResizeFunction = spec.customResizer,
      includeOriginal = spec.sendOriginal,
      orient = spec.orient,
      defaultType = spec.defaultType,
      defaultQuality = spec.defaultQuality / 100,
      failedToScaleText = spec.failureText,
      includeExif = spec.includeExif,
      sizes = this._getSortedSizes(spec.sizes);
    qq.extend(this, {
      enabled: qq.supportedFeatures.scaling && sizes.length > 0,
      getFileRecords: function getFileRecords(originalFileUuid, originalFileName, originalBlobOrBlobData) {
        var self = this,
          records = [],
          originalBlob = originalBlobOrBlobData.blob ? originalBlobOrBlobData.blob : originalBlobOrBlobData,
          identifier = new qq.Identify(originalBlob, log);
        if (identifier.isPreviewableSync()) {
          qq.each(sizes, function (idx, sizeRecord) {
            var outputType = self._determineOutputType({
              defaultType: defaultType,
              requestedType: sizeRecord.type,
              refType: originalBlob.type
            });
            records.push({
              uuid: qq.getUniqueId(),
              name: self._getName(originalFileName, {
                name: sizeRecord.name,
                type: outputType,
                refType: originalBlob.type
              }),
              blob: new qq.BlobProxy(originalBlob, qq.bind(self._generateScaledImage, self, {
                customResizeFunction: customResizeFunction,
                maxSize: sizeRecord.maxSize,
                orient: orient,
                type: outputType,
                quality: defaultQuality,
                failedText: failedToScaleText,
                includeExif: includeExif,
                log: log
              }))
            });
          });
          records.push({
            uuid: originalFileUuid,
            name: originalFileName,
            size: originalBlob.size,
            blob: includeOriginal ? originalBlob : null
          });
        } else {
          records.push({
            uuid: originalFileUuid,
            name: originalFileName,
            size: originalBlob.size,
            blob: originalBlob
          });
        }
        return records;
      },
      handleNewFile: function handleNewFile(file, name, uuid, size, fileList, batchId, uuidParamName, api) {
        var self = this,
          buttonId = file.qqButtonId || file.blob && file.blob.qqButtonId,
          scaledIds = [],
          originalId = null,
          addFileToHandler = api.addFileToHandler,
          uploadData = api.uploadData,
          paramsStore = api.paramsStore,
          proxyGroupId = qq.getUniqueId();
        qq.each(self.getFileRecords(uuid, name, file), function (idx, record) {
          var blobSize = record.size,
            id;
          if (record.blob instanceof qq.BlobProxy) {
            blobSize = -1;
          }
          id = uploadData.addFile({
            uuid: record.uuid,
            name: record.name,
            size: blobSize,
            batchId: batchId,
            proxyGroupId: proxyGroupId
          });
          if (record.blob instanceof qq.BlobProxy) {
            scaledIds.push(id);
          } else {
            originalId = id;
          }
          if (record.blob) {
            addFileToHandler(id, record.blob);
            fileList.push({
              id: id,
              file: record.blob
            });
          } else {
            uploadData.setStatus(id, qq.status.REJECTED);
          }
        });
        if (originalId !== null) {
          qq.each(scaledIds, function (idx, scaledId) {
            var params = {
              qqparentuuid: uploadData.retrieve({
                id: originalId
              }).uuid,
              qqparentsize: uploadData.retrieve({
                id: originalId
              }).size
            };
            params[uuidParamName] = uploadData.retrieve({
              id: scaledId
            }).uuid;
            uploadData.setParentId(scaledId, originalId);
            paramsStore.addReadOnly(scaledId, params);
          });
          if (scaledIds.length) {
            (function () {
              var param = {};
              param[uuidParamName] = uploadData.retrieve({
                id: originalId
              }).uuid;
              paramsStore.addReadOnly(originalId, param);
            })();
          }
        }
      }
    });
  };
  qq.extend(qq.Scaler.prototype, {
    scaleImage: function scaleImage(id, specs, api) {
      "use strict";

      if (!qq.supportedFeatures.scaling) {
        throw new qq.Error("Scaling is not supported in this browser!");
      }
      var scalingEffort = new qq.Promise(),
        log = api.log,
        file = api.getFile(id),
        uploadData = api.uploadData.retrieve({
          id: id
        }),
        name = uploadData && uploadData.name,
        uuid = uploadData && uploadData.uuid,
        scalingOptions = {
          customResizer: specs.customResizer,
          sendOriginal: false,
          orient: specs.orient,
          defaultType: specs.type || null,
          defaultQuality: specs.quality,
          failedToScaleText: "Unable to scale",
          sizes: [{
            name: "",
            maxSize: specs.maxSize
          }]
        },
        scaler = new qq.Scaler(scalingOptions, log);
      if (!qq.Scaler || !qq.supportedFeatures.imagePreviews || !file) {
        scalingEffort.failure();
        log("Could not generate requested scaled image for " + id + ".  " + "Scaling is either not possible in this browser, or the file could not be located.", "error");
      } else {
        qq.bind(function () {
          var record = scaler.getFileRecords(uuid, name, file)[0];
          if (record && record.blob instanceof qq.BlobProxy) {
            record.blob.create().then(scalingEffort.success, scalingEffort.failure);
          } else {
            log(id + " is not a scalable image!", "error");
            scalingEffort.failure();
          }
        }, this)();
      }
      return scalingEffort;
    },
    _determineOutputType: function _determineOutputType(spec) {
      "use strict";

      var requestedType = spec.requestedType,
        defaultType = spec.defaultType,
        referenceType = spec.refType;
      if (!defaultType && !requestedType) {
        if (referenceType !== "image/jpeg") {
          return "image/png";
        }
        return referenceType;
      }
      if (!requestedType) {
        return defaultType;
      }
      if (qq.indexOf(Object.keys(qq.Identify.prototype.PREVIEWABLE_MIME_TYPES), requestedType) >= 0) {
        if (requestedType === "image/tiff") {
          return qq.supportedFeatures.tiffPreviews ? requestedType : defaultType;
        }
        return requestedType;
      }
      return defaultType;
    },
    _getName: function _getName(originalName, scaledVersionProperties) {
      "use strict";

      var startOfExt = originalName.lastIndexOf("."),
        versionType = scaledVersionProperties.type || "image/png",
        referenceType = scaledVersionProperties.refType,
        scaledName = "",
        scaledExt = qq.getExtension(originalName),
        nameAppendage = "";
      if (scaledVersionProperties.name && scaledVersionProperties.name.trim().length) {
        nameAppendage = " (" + scaledVersionProperties.name + ")";
      }
      if (startOfExt >= 0) {
        scaledName = originalName.substr(0, startOfExt);
        if (referenceType !== versionType) {
          scaledExt = versionType.split("/")[1];
        }
        scaledName += nameAppendage + "." + scaledExt;
      } else {
        scaledName = originalName + nameAppendage;
      }
      return scaledName;
    },
    _getSortedSizes: function _getSortedSizes(sizes) {
      "use strict";

      sizes = qq.extend([], sizes);
      return sizes.sort(function (a, b) {
        if (a.maxSize > b.maxSize) {
          return 1;
        }
        if (a.maxSize < b.maxSize) {
          return -1;
        }
        return 0;
      });
    },
    _generateScaledImage: function _generateScaledImage(spec, sourceFile) {
      "use strict";

      var self = this,
        customResizeFunction = spec.customResizeFunction,
        log = spec.log,
        maxSize = spec.maxSize,
        orient = spec.orient,
        type = spec.type,
        quality = spec.quality,
        failedText = spec.failedText,
        includeExif = spec.includeExif && sourceFile.type === "image/jpeg" && type === "image/jpeg",
        scalingEffort = new qq.Promise(),
        imageGenerator = new qq.ImageGenerator(log),
        canvas = document.createElement("canvas");
      log("Attempting to generate scaled version for " + sourceFile.name);
      imageGenerator.generate(sourceFile, canvas, {
        maxSize: maxSize,
        orient: orient,
        customResizeFunction: customResizeFunction
      }).then(function () {
        var scaledImageDataUri = canvas.toDataURL(type, quality),
          signalSuccess = function signalSuccess() {
            log("Success generating scaled version for " + sourceFile.name);
            var blob = qq.dataUriToBlob(scaledImageDataUri);
            scalingEffort.success(blob);
          };
        if (includeExif) {
          self._insertExifHeader(sourceFile, scaledImageDataUri, log).then(function (scaledImageDataUriWithExif) {
            scaledImageDataUri = scaledImageDataUriWithExif;
            signalSuccess();
          }, function () {
            log("Problem inserting EXIF header into scaled image.  Using scaled image w/out EXIF data.", "error");
            signalSuccess();
          });
        } else {
          signalSuccess();
        }
      }, function () {
        log("Failed attempt to generate scaled version for " + sourceFile.name, "error");
        scalingEffort.failure(failedText);
      });
      return scalingEffort;
    },
    _insertExifHeader: function _insertExifHeader(originalImage, scaledImageDataUri, log) {
      "use strict";

      var reader = new FileReader(),
        insertionEffort = new qq.Promise(),
        originalImageDataUri = "";
      reader.onload = function () {
        originalImageDataUri = reader.result;
        insertionEffort.success(qq.ExifRestorer.restore(originalImageDataUri, scaledImageDataUri));
      };
      reader.onerror = function () {
        log("Problem reading " + originalImage.name + " during attempt to transfer EXIF data to scaled version.", "error");
        insertionEffort.failure();
      };
      reader.readAsDataURL(originalImage);
      return insertionEffort;
    },
    _dataUriToBlob: function _dataUriToBlob(dataUri) {
      "use strict";

      var byteString, mimeString, arrayBuffer, intArray;
      if (dataUri.split(",")[0].indexOf("base64") >= 0) {
        byteString = atob(dataUri.split(",")[1]);
      } else {
        byteString = decodeURI(dataUri.split(",")[1]);
      }
      mimeString = dataUri.split(",")[0].split(":")[1].split(";")[0];
      arrayBuffer = new ArrayBuffer(byteString.length);
      intArray = new Uint8Array(arrayBuffer);
      qq.each(byteString, function (idx, character) {
        intArray[idx] = character.charCodeAt(0);
      });
      return this._createBlob(arrayBuffer, mimeString);
    },
    _createBlob: function _createBlob(data, mime) {
      "use strict";

      var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
        blobBuilder = BlobBuilder && new BlobBuilder();
      if (blobBuilder) {
        blobBuilder.append(data);
        return blobBuilder.getBlob(mime);
      } else {
        return new Blob([data], {
          type: mime
        });
      }
    }
  });
  qq.ExifRestorer = function () {
    var ExifRestorer = {};
    ExifRestorer.KEY_STR = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
    ExifRestorer.encode64 = function (input) {
      var output = "",
        chr1,
        chr2,
        chr3 = "",
        enc1,
        enc2,
        enc3,
        enc4 = "",
        i = 0;
      do {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
      } while (i < input.length);
      return output;
    };
    ExifRestorer.restore = function (origFileBase64, resizedFileBase64) {
      var expectedBase64Header = "data:image/jpeg;base64,";
      if (!origFileBase64.match(expectedBase64Header)) {
        return resizedFileBase64;
      }
      var rawImage = this.decode64(origFileBase64.replace(expectedBase64Header, ""));
      var segments = this.slice2Segments(rawImage);
      var image = this.exifManipulation(resizedFileBase64, segments);
      return expectedBase64Header + this.encode64(image);
    };
    ExifRestorer.exifManipulation = function (resizedFileBase64, segments) {
      var exifArray = this.getExifArray(segments),
        newImageArray = this.insertExif(resizedFileBase64, exifArray),
        aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    };
    ExifRestorer.getExifArray = function (segments) {
      var seg;
      for (var x = 0; x < segments.length; x++) {
        seg = segments[x];
        if (seg[0] == 255 & seg[1] == 225) {
          return seg;
        }
      }
      return [];
    };
    ExifRestorer.insertExif = function (resizedFileBase64, exifArray) {
      var imageData = resizedFileBase64.replace("data:image/jpeg;base64,", ""),
        buf = this.decode64(imageData),
        separatePoint = buf.indexOf(255, 3),
        mae = buf.slice(0, separatePoint),
        ato = buf.slice(separatePoint),
        array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    };
    ExifRestorer.slice2Segments = function (rawImageArray) {
      var head = 0,
        segments = [];
      while (1) {
        if (rawImageArray[head] == 255 & rawImageArray[head + 1] == 218) {
          break;
        }
        if (rawImageArray[head] == 255 & rawImageArray[head + 1] == 216) {
          head += 2;
        } else {
          var length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3],
            endPoint = head + length + 2,
            seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }
        if (head > rawImageArray.length) {
          break;
        }
      }
      return segments;
    };
    ExifRestorer.decode64 = function (input) {
      var output = "",
        chr1,
        chr2,
        chr3 = "",
        enc1,
        enc2,
        enc3,
        enc4 = "",
        i = 0,
        buf = [];
      var base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
        throw new Error("There were invalid base64 characters in the input text.  " + "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='");
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      do {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);
        if (enc3 != 64) {
          buf.push(chr2);
        }
        if (enc4 != 64) {
          buf.push(chr3);
        }
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
      } while (i < input.length);
      return buf;
    };
    return ExifRestorer;
  }();
  qq.TotalProgress = function (callback, getSize) {
    "use strict";

    var perFileProgress = {},
      totalLoaded = 0,
      totalSize = 0,
      lastLoadedSent = -1,
      lastTotalSent = -1,
      callbackProxy = function callbackProxy(loaded, total) {
        if (loaded !== lastLoadedSent || total !== lastTotalSent) {
          callback(loaded, total);
        }
        lastLoadedSent = loaded;
        lastTotalSent = total;
      },
      noRetryableFiles = function noRetryableFiles(failed, retryable) {
        var none = true;
        qq.each(failed, function (idx, failedId) {
          if (qq.indexOf(retryable, failedId) >= 0) {
            none = false;
            return false;
          }
        });
        return none;
      },
      onCancel = function onCancel(id) {
        updateTotalProgress(id, -1, -1);
        delete perFileProgress[id];
      },
      onAllComplete = function onAllComplete(successful, failed, retryable) {
        if (failed.length === 0 || noRetryableFiles(failed, retryable)) {
          callbackProxy(totalSize, totalSize);
          this.reset();
        }
      },
      onNew = function onNew(id) {
        var size = getSize(id);
        if (size > 0) {
          updateTotalProgress(id, 0, size);
          perFileProgress[id] = {
            loaded: 0,
            total: size
          };
        }
      },
      updateTotalProgress = function updateTotalProgress(id, newLoaded, newTotal) {
        var oldLoaded = perFileProgress[id] ? perFileProgress[id].loaded : 0,
          oldTotal = perFileProgress[id] ? perFileProgress[id].total : 0;
        if (newLoaded === -1 && newTotal === -1) {
          totalLoaded -= oldLoaded;
          totalSize -= oldTotal;
        } else {
          if (newLoaded) {
            totalLoaded += newLoaded - oldLoaded;
          }
          if (newTotal) {
            totalSize += newTotal - oldTotal;
          }
        }
        callbackProxy(totalLoaded, totalSize);
      };
    qq.extend(this, {
      onAllComplete: onAllComplete,
      onStatusChange: function onStatusChange(id, oldStatus, newStatus) {
        if (newStatus === qq.status.CANCELED || newStatus === qq.status.REJECTED) {
          onCancel(id);
        } else if (newStatus === qq.status.SUBMITTING) {
          onNew(id);
        }
      },
      onIndividualProgress: function onIndividualProgress(id, loaded, total) {
        updateTotalProgress(id, loaded, total);
        perFileProgress[id] = {
          loaded: loaded,
          total: total
        };
      },
      onNewSize: function onNewSize(id) {
        onNew(id);
      },
      reset: function reset() {
        perFileProgress = {};
        totalLoaded = 0;
        totalSize = 0;
      }
    });
  };
  qq.PasteSupport = function (o) {
    "use strict";

    var options, detachPasteHandler;
    options = {
      targetElement: null,
      callbacks: {
        log: function log(message, level) {},
        pasteReceived: function pasteReceived(blob) {}
      }
    };
    function isImage(item) {
      return item.type && item.type.indexOf("image/") === 0;
    }
    function registerPasteHandler() {
      detachPasteHandler = qq(options.targetElement).attach("paste", function (event) {
        var clipboardData = event.clipboardData;
        if (clipboardData) {
          qq.each(clipboardData.items, function (idx, item) {
            if (isImage(item)) {
              var blob = item.getAsFile();
              options.callbacks.pasteReceived(blob);
            }
          });
        }
      });
    }
    function unregisterPasteHandler() {
      if (detachPasteHandler) {
        detachPasteHandler();
      }
    }
    qq.extend(options, o);
    registerPasteHandler();
    qq.extend(this, {
      reset: function reset() {
        unregisterPasteHandler();
      }
    });
  };
  qq.FormSupport = function (options, startUpload, log) {
    "use strict";

    var self = this,
      interceptSubmit = options.interceptSubmit,
      formEl = options.element,
      autoUpload = options.autoUpload;
    qq.extend(this, {
      newEndpoint: null,
      newAutoUpload: autoUpload,
      attachedToForm: false,
      getFormInputsAsObject: function getFormInputsAsObject() {
        if (formEl == null) {
          return null;
        }
        return self._form2Obj(formEl);
      }
    });
    function determineNewEndpoint(formEl) {
      if (formEl.getAttribute("action")) {
        self.newEndpoint = formEl.getAttribute("action");
      }
    }
    function validateForm(formEl, nativeSubmit) {
      if (formEl.checkValidity && !formEl.checkValidity()) {
        log("Form did not pass validation checks - will not upload.", "error");
        nativeSubmit();
      } else {
        return true;
      }
    }
    function maybeUploadOnSubmit(formEl) {
      var nativeSubmit = formEl.submit;
      qq(formEl).attach("submit", function (event) {
        event = event || window.event;
        if (event.preventDefault) {
          event.preventDefault();
        } else {
          event.returnValue = false;
        }
        validateForm(formEl, nativeSubmit) && startUpload();
      });
      formEl.submit = function () {
        validateForm(formEl, nativeSubmit) && startUpload();
      };
    }
    function determineFormEl(formEl) {
      if (formEl) {
        if (qq.isString(formEl)) {
          formEl = document.getElementById(formEl);
        }
        if (formEl) {
          log("Attaching to form element.");
          determineNewEndpoint(formEl);
          interceptSubmit && maybeUploadOnSubmit(formEl);
        }
      }
      return formEl;
    }
    formEl = determineFormEl(formEl);
    this.attachedToForm = !!formEl;
  };
  qq.extend(qq.FormSupport.prototype, {
    _form2Obj: function _form2Obj(form) {
      "use strict";

      var obj = {},
        notIrrelevantType = function notIrrelevantType(type) {
          var irrelevantTypes = ["button", "image", "reset", "submit"];
          return qq.indexOf(irrelevantTypes, type.toLowerCase()) < 0;
        },
        radioOrCheckbox = function radioOrCheckbox(type) {
          return qq.indexOf(["checkbox", "radio"], type.toLowerCase()) >= 0;
        },
        ignoreValue = function ignoreValue(el) {
          if (radioOrCheckbox(el.type) && !el.checked) {
            return true;
          }
          return el.disabled && el.type.toLowerCase() !== "hidden";
        },
        selectValue = function selectValue(select) {
          var value = null;
          qq.each(qq(select).children(), function (idx, child) {
            if (child.tagName.toLowerCase() === "option" && child.selected) {
              value = child.value;
              return false;
            }
          });
          return value;
        };
      qq.each(form.elements, function (idx, el) {
        if ((qq.isInput(el, true) || el.tagName.toLowerCase() === "textarea") && notIrrelevantType(el.type) && !ignoreValue(el)) {
          obj[el.name] = el.value;
        } else if (el.tagName.toLowerCase() === "select" && !ignoreValue(el)) {
          var value = selectValue(el);
          if (value !== null) {
            obj[el.name] = value;
          }
        }
      });
      return obj;
    }
  });
  qq.traditional = qq.traditional || {};
  qq.traditional.FormUploadHandler = function (options, proxy) {
    "use strict";

    var handler = this,
      getName = proxy.getName,
      getUuid = proxy.getUuid,
      log = proxy.log;
    function getIframeContentJson(id, iframe) {
      var response, doc, innerHtml;
      try {
        doc = iframe.contentDocument || iframe.contentWindow.document;
        innerHtml = doc.body.innerHTML;
        log("converting iframe's innerHTML to JSON");
        log("innerHTML = " + innerHtml);
        if (innerHtml && innerHtml.match(/^<pre/i)) {
          innerHtml = doc.body.firstChild.firstChild.nodeValue;
        }
        response = handler._parseJsonResponse(innerHtml);
      } catch (error) {
        log("Error when attempting to parse form upload response (" + error.message + ")", "error");
        response = {
          success: false
        };
      }
      return response;
    }
    function createForm(id, iframe) {
      var params = options.paramsStore.get(id),
        method = options.method.toLowerCase() === "get" ? "GET" : "POST",
        endpoint = options.endpointStore.get(id),
        name = getName(id);
      params[options.uuidName] = getUuid(id);
      params[options.filenameParam] = name;
      return handler._initFormForUpload({
        method: method,
        endpoint: endpoint,
        params: params,
        paramsInBody: options.paramsInBody,
        targetName: iframe.name
      });
    }
    this.uploadFile = function (id) {
      var input = handler.getInput(id),
        iframe = handler._createIframe(id),
        promise = new qq.Promise(),
        form;
      form = createForm(id, iframe);
      input.name = this._options.request.inputName;
      form.appendChild(input);
      var dest = document.createElement('input');
      dest.type = 'text';
      dest.name = 'dest';
      dest.value = this._options.request.dest;
      form.appendChild(dest);
      var csrfmiddlewaretoken = document.createElement('input');
      csrfmiddlewaretoken.type = 'hidden';
      csrfmiddlewaretoken.name = 'csrfmiddlewaretoken';
      csrfmiddlewaretoken.value = "${request and request.COOKIES.get('csrftoken', '')}";
      form.appendChild(csrfmiddlewaretoken);
      handler._attachLoadEvent(iframe, function (responseFromMessage) {
        log("iframe loaded");
        var response = responseFromMessage ? responseFromMessage : getIframeContentJson(id, iframe);
        handler._detachLoadEvent(id);
        if (!options.cors.expected) {
          qq(iframe).remove();
        }
        if (response.success) {
          promise.success(response);
        } else {
          promise.failure(response);
        }
      });
      log("Sending upload request for " + id);
      form.submit();
      qq(form).remove();
      return promise;
    };
    qq.extend(this, new qq.FormUploadHandler({
      options: {
        isCors: options.cors.expected,
        inputName: options.inputName
      },
      proxy: {
        onCancel: options.onCancel,
        getName: getName,
        getUuid: getUuid,
        log: log
      }
    }));
  };
  qq.traditional = qq.traditional || {};
  qq.traditional.XhrUploadHandler = function (spec, proxy) {
    "use strict";

    var handler = this,
      getName = proxy.getName,
      getSize = proxy.getSize,
      getUuid = proxy.getUuid,
      log = proxy.log,
      multipart = spec.forceMultipart || spec.paramsInBody,
      addChunkingSpecificParams = function addChunkingSpecificParams(id, params, chunkData) {
        var size = getSize(id),
          name = getName(id);
        if (!spec.omitDefaultParams) {
          params[spec.chunking.paramNames.partIndex] = chunkData.part;
          params[spec.chunking.paramNames.partByteOffset] = chunkData.start;
          params[spec.chunking.paramNames.chunkSize] = chunkData.size;
          params[spec.chunking.paramNames.totalParts] = chunkData.count;
          params[spec.totalFileSizeName] = size;
        }
        if (multipart && !spec.omitDefaultParams) {
          params[spec.filenameParam] = name;
        }
      },
      allChunksDoneRequester = new qq.traditional.AllChunksDoneAjaxRequester({
        cors: spec.cors,
        endpoint: spec.chunking.success.endpoint,
        headers: spec.chunking.success.headers,
        jsonPayload: spec.chunking.success.jsonPayload,
        log: log,
        method: spec.chunking.success.method,
        params: spec.chunking.success.params
      }),
      createReadyStateChangedHandler = function createReadyStateChangedHandler(id, xhr) {
        var promise = new qq.Promise();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            var result = onUploadOrChunkComplete(id, xhr);
            if (result.success) {
              promise.success(result.response, xhr);
            } else {
              promise.failure(result.response, xhr);
            }
          }
        };
        return promise;
      },
      getChunksCompleteParams = function getChunksCompleteParams(id) {
        var params = spec.paramsStore.get(id),
          name = getName(id),
          size = getSize(id);
        params[spec.uuidName] = getUuid(id);
        params[spec.filenameParam] = name;
        params[spec.totalFileSizeName] = size;
        params[spec.chunking.paramNames.totalParts] = handler._getTotalChunks(id);
        return params;
      },
      isErrorUploadResponse = function isErrorUploadResponse(xhr, response) {
        return qq.indexOf([200, 201, 202, 203, 204], xhr.status) < 0 || spec.requireSuccessJson && !response.success || response.reset;
      },
      onUploadOrChunkComplete = function onUploadOrChunkComplete(id, xhr) {
        var response;
        log("xhr - server response received for " + id);
        log("responseText = " + xhr.responseText);
        response = parseResponse(true, xhr);
        return {
          success: !isErrorUploadResponse(xhr, response),
          response: response
        };
      },
      parseResponse = function parseResponse(upload, xhr) {
        var response = {};
        try {
          log(qq.format("Received response status {} with body: {}", xhr.status, xhr.responseText));
          response = qq.parseJson(xhr.responseText);
        } catch (error) {
          upload && spec.requireSuccessJson && log("Error when attempting to parse xhr response text (" + error.message + ")", "error");
        }
        return response;
      },
      sendChunksCompleteRequest = function sendChunksCompleteRequest(id) {
        var promise = new qq.Promise();
        allChunksDoneRequester.complete(id, handler._createXhr(id), getChunksCompleteParams(id), spec.customHeaders.get(id)).then(function (xhr) {
          promise.success(parseResponse(false, xhr), xhr);
        }, function (xhr) {
          promise.failure(parseResponse(false, xhr), xhr);
        });
        return promise;
      },
      setParamsAndGetEntityToSend = function setParamsAndGetEntityToSend(entityToSendParams) {
        var fileOrBlob = entityToSendParams.fileOrBlob;
        var id = entityToSendParams.id;
        var xhr = entityToSendParams.xhr;
        var xhrOverrides = entityToSendParams.xhrOverrides || {};
        var customParams = entityToSendParams.customParams || {};
        var defaultParams = entityToSendParams.params || {};
        var xhrOverrideParams = xhrOverrides.params || {};
        var params;
        var formData = multipart ? new FormData() : null,
          method = xhrOverrides.method || spec.method,
          endpoint = xhrOverrides.endpoint || spec.endpointStore.get(id),
          name = getName(id),
          size = getSize(id);
        if (spec.omitDefaultParams) {
          params = qq.extend({}, customParams);
          qq.extend(params, xhrOverrideParams);
        } else {
          params = qq.extend({}, customParams);
          qq.extend(params, xhrOverrideParams);
          qq.extend(params, defaultParams);
          params[spec.uuidName] = getUuid(id);
          params[spec.filenameParam] = name;
          if (multipart) {
            params[spec.totalFileSizeName] = size;
          } else if (!spec.paramsInBody) {
            params[spec.inputName] = name;
          }
        }

        // var customQueryParams = {
        //     dest: "/",
        //     inputName: "hdfs_file"
        // };
        // var queryString = qq.obj2url(customQueryParams);

        if (!spec.paramsInBody) {
          // endpoint += (endpoint.indexOf('?') === -1 ? '?' : '&') + queryString;
          endpoint = qq.obj2url(params, endpoint);
        }
        xhr.open(method, endpoint, true);
        if (spec.cors.expected && spec.cors.sendCredentials) {
          xhr.withCredentials = true;
        }
        if (multipart) {
          if (spec.paramsInBody) {
            qq.obj2FormData(params, formData);
          }
          formData.append(spec.inputName, fileOrBlob);
          return formData;
        }
        return fileOrBlob;
      },
      setUploadHeaders = function setUploadHeaders(headersOptions) {
        var headerOverrides = headersOptions.headerOverrides;
        var id = headersOptions.id;
        var xhr = headersOptions.xhr;
        if (headerOverrides) {
          qq.each(headerOverrides, function (headerName, headerValue) {
            xhr.setRequestHeader(headerName, headerValue);
          });
        } else {
          var extraHeaders = spec.customHeaders.get(id),
            fileOrBlob = handler.getFile(id);
          xhr.setRequestHeader("Accept", "application/json");
          xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          xhr.setRequestHeader("Cache-Control", "no-cache");
          if (!multipart) {
            xhr.setRequestHeader("Content-Type", "application/octet-stream");
            xhr.setRequestHeader("X-Mime-Type", fileOrBlob.type);
          }
          qq.each(extraHeaders, function (name, val) {
            xhr.setRequestHeader(name, val);
          });
        }
      };
    qq.extend(this, {
      uploadChunk: function uploadChunk(uploadChunkParams) {
        var id = uploadChunkParams.id;
        var chunkIdx = uploadChunkParams.chunkIdx;
        var overrides = uploadChunkParams.overrides || {};
        var resuming = uploadChunkParams.resuming;
        var chunkData = handler._getChunkData(id, chunkIdx),
          xhr = handler._createXhr(id, chunkIdx),
          promise,
          toSend,
          customParams,
          params = {};
        promise = createReadyStateChangedHandler(id, xhr);
        handler._registerProgressHandler(id, chunkIdx, chunkData.size);
        customParams = spec.paramsStore.get(id);
        addChunkingSpecificParams(id, params, chunkData);
        if (resuming) {
          params[spec.resume.paramNames.resuming] = true;
        }
        toSend = setParamsAndGetEntityToSend({
          fileOrBlob: chunkData.blob,
          id: id,
          customParams: customParams,
          params: params,
          xhr: xhr,
          xhrOverrides: overrides
        });
        setUploadHeaders({
          headerOverrides: overrides.headers,
          id: id,
          xhr: xhr
        });
        xhr.send(toSend);
        return promise;
      },
      uploadFile: function uploadFile(id) {
        var fileOrBlob = handler.getFile(id),
          promise,
          xhr,
          customParams,
          toSend;
        xhr = handler._createXhr(id);
        handler._registerProgressHandler(id);
        promise = createReadyStateChangedHandler(id, xhr);
        customParams = spec.paramsStore.get(id);
        toSend = setParamsAndGetEntityToSend({
          fileOrBlob: fileOrBlob,
          id: id,
          customParams: customParams,
          xhr: xhr
        });
        setUploadHeaders({
          id: id,
          xhr: xhr
        });
        xhr.send(toSend);
        return promise;
      }
    });
    qq.extend(this, new qq.XhrUploadHandler({
      options: qq.extend({
        namespace: "traditional"
      }, spec),
      proxy: qq.extend({
        getEndpoint: spec.endpointStore.get
      }, proxy)
    }));
    qq.override(this, function (super_) {
      return {
        finalizeChunks: function finalizeChunks(id) {
          proxy.onFinalizing(id);
          if (spec.chunking.success.endpoint) {
            return sendChunksCompleteRequest(id);
          } else {
            return super_.finalizeChunks(id, qq.bind(parseResponse, this, true));
          }
        }
      };
    });
  };
  qq.traditional.AllChunksDoneAjaxRequester = function (o) {
    "use strict";

    var requester,
      options = {
        cors: {
          allowXdr: false,
          expected: false,
          sendCredentials: false
        },
        endpoint: null,
        log: function log(str, level) {},
        method: "POST"
      },
      promises = {},
      endpointHandler = {
        get: function get(id) {
          if (qq.isFunction(options.endpoint)) {
            return options.endpoint(id);
          }
          return options.endpoint;
        }
      };
    qq.extend(options, o);
    requester = qq.extend(this, new qq.AjaxRequester({
      acceptHeader: "application/json",
      contentType: options.jsonPayload ? "application/json" : "application/x-www-form-urlencoded",
      validMethods: [options.method],
      method: options.method,
      endpointStore: endpointHandler,
      allowXRequestedWithAndCacheControl: false,
      cors: options.cors,
      log: options.log,
      onComplete: function onComplete(id, xhr, isError) {
        var promise = promises[id];
        delete promises[id];
        if (isError) {
          promise.failure(xhr);
        } else {
          promise.success(xhr);
        }
      }
    }));
    qq.extend(this, {
      complete: function complete(id, xhr, params, headers) {
        var promise = new qq.Promise();
        options.log("Submitting All Chunks Done request for " + id);
        promises[id] = promise;
        requester.initTransport(id).withParams(options.params(id) || params).withHeaders(options.headers(id) || headers).send(xhr);
        return promise;
      }
    });
  };
  qq.DragAndDrop = function (o) {
    "use strict";

    var options,
      HIDE_ZONES_EVENT_NAME = "qq-hidezones",
      HIDE_BEFORE_ENTER_ATTR = "qq-hide-dropzone",
      uploadDropZones = [],
      droppedFiles = [],
      disposeSupport = new qq.DisposeSupport();
    options = {
      dropZoneElements: [],
      allowMultipleItems: true,
      classes: {
        dropActive: null
      },
      callbacks: new qq.DragAndDrop.callbacks()
    };
    qq.extend(options, o, true);
    function uploadDroppedFiles(files, uploadDropZone) {
      var filesAsArray = Array.prototype.slice.call(files);
      options.callbacks.dropLog("Grabbed " + files.length + " dropped files.");
      uploadDropZone.dropDisabled(false);
      options.callbacks.processingDroppedFilesComplete(filesAsArray, uploadDropZone.getElement());
    }
    function traverseFileTree(entry) {
      var parseEntryPromise = new qq.Promise();
      if (entry.isFile) {
        entry.file(function (file) {
          file.qqPath = extractDirectoryPath(entry);
          droppedFiles.push(file);
          parseEntryPromise.success();
        }, function (fileError) {
          options.callbacks.dropLog("Problem parsing '" + entry.fullPath + "'.  FileError code " + fileError.code + ".", "error");
          parseEntryPromise.failure();
        });
      } else if (entry.isDirectory) {
        getFilesInDirectory(entry).then(function allEntriesRead(entries) {
          var entriesLeft = entries.length;
          qq.each(entries, function (idx, entry) {
            traverseFileTree(entry).done(function () {
              entriesLeft -= 1;
              if (entriesLeft === 0) {
                parseEntryPromise.success();
              }
            });
          });
          if (!entries.length) {
            parseEntryPromise.success();
          }
        }, function readFailure(fileError) {
          options.callbacks.dropLog("Problem parsing '" + entry.fullPath + "'.  FileError code " + fileError.code + ".", "error");
          parseEntryPromise.failure();
        });
      }
      return parseEntryPromise;
    }
    function extractDirectoryPath(entry) {
      var name = entry.name,
        fullPath = entry.fullPath,
        indexOfNameInFullPath = fullPath.lastIndexOf(name);
      fullPath = fullPath.substr(0, indexOfNameInFullPath);
      if (fullPath.charAt(0) === "/") {
        fullPath = fullPath.substr(1);
      }
      return fullPath;
    }
    function getFilesInDirectory(entry, reader, accumEntries, existingPromise) {
      var promise = existingPromise || new qq.Promise(),
        dirReader = reader || entry.createReader();
      dirReader.readEntries(function readSuccess(entries) {
        var newEntries = accumEntries ? accumEntries.concat(entries) : entries;
        if (entries.length) {
          setTimeout(function () {
            getFilesInDirectory(entry, dirReader, newEntries, promise);
          }, 0);
        } else {
          promise.success(newEntries);
        }
      }, promise.failure);
      return promise;
    }
    function handleDataTransfer(dataTransfer, uploadDropZone) {
      var pendingFolderPromises = [],
        handleDataTransferPromise = new qq.Promise();
      options.callbacks.processingDroppedFiles();
      uploadDropZone.dropDisabled(true);
      if (dataTransfer.files.length > 1 && !options.allowMultipleItems) {
        options.callbacks.processingDroppedFilesComplete([]);
        options.callbacks.dropError("tooManyFilesError", "");
        uploadDropZone.dropDisabled(false);
        handleDataTransferPromise.failure();
      } else {
        droppedFiles = [];
        if (qq.isFolderDropSupported(dataTransfer)) {
          qq.each(dataTransfer.items, function (idx, item) {
            var entry = item.webkitGetAsEntry();
            if (entry) {
              if (entry.isFile) {
                droppedFiles.push(item.getAsFile());
              } else {
                pendingFolderPromises.push(traverseFileTree(entry).done(function () {
                  pendingFolderPromises.pop();
                  if (pendingFolderPromises.length === 0) {
                    handleDataTransferPromise.success();
                  }
                }));
              }
            }
          });
        } else {
          droppedFiles = dataTransfer.files;
        }
        if (pendingFolderPromises.length === 0) {
          handleDataTransferPromise.success();
        }
      }
      return handleDataTransferPromise;
    }
    function setupDropzone(dropArea) {
      var dropZone = new qq.UploadDropZone({
        HIDE_ZONES_EVENT_NAME: HIDE_ZONES_EVENT_NAME,
        element: dropArea,
        onEnter: function onEnter(e) {
          qq(dropArea).addClass(options.classes.dropActive);
          options.callbacks.dragEnter();
          e.stopPropagation();
        },
        onLeaveNotDescendants: function onLeaveNotDescendants(e) {
          qq(dropArea).removeClass(options.classes.dropActive);
          options.callbacks.dragLeave();
        },
        onDrop: function onDrop(e) {
          handleDataTransfer(e.dataTransfer, dropZone).then(function () {
            uploadDroppedFiles(droppedFiles, dropZone);
          }, function () {
            options.callbacks.dropLog("Drop event DataTransfer parsing failed.  No files will be uploaded.", "error");
          });
        }
      });
      disposeSupport.addDisposer(function () {
        dropZone.dispose();
      });
      qq(dropArea).hasAttribute(HIDE_BEFORE_ENTER_ATTR) && qq(dropArea).hide();
      uploadDropZones.push(dropZone);
      return dropZone;
    }
    function isFileDrag(dragEvent) {
      var fileDrag;
      qq.each(dragEvent.dataTransfer.types, function (key, val) {
        if (val === "Files") {
          fileDrag = true;
          return false;
        }
      });
      return fileDrag;
    }
    function leavingDocumentOut(e) {
      if (qq.safari()) {
        return e.x < 0 || e.y < 0;
      }
      return e.x === 0 && e.y === 0;
    }
    function setupDragDrop() {
      var dropZones = options.dropZoneElements,
        maybeHideDropZones = function maybeHideDropZones() {
          setTimeout(function () {
            qq.each(dropZones, function (idx, dropZone) {
              qq(dropZone).hasAttribute(HIDE_BEFORE_ENTER_ATTR) && qq(dropZone).hide();
              qq(dropZone).removeClass(options.classes.dropActive);
            });
          }, 10);
        };
      qq.each(dropZones, function (idx, dropZone) {
        var uploadDropZone = setupDropzone(dropZone);
        if (dropZones.length && qq.supportedFeatures.fileDrop) {
          disposeSupport.attach(document, "dragenter", function (e) {
            if (!uploadDropZone.dropDisabled() && isFileDrag(e)) {
              qq.each(dropZones, function (idx, dropZone) {
                if (dropZone instanceof HTMLElement && qq(dropZone).hasAttribute(HIDE_BEFORE_ENTER_ATTR)) {
                  qq(dropZone).css({
                    display: "block"
                  });
                }
              });
            }
          });
        }
      });
      disposeSupport.attach(document, "dragleave", function (e) {
        if (leavingDocumentOut(e)) {
          maybeHideDropZones();
        }
      });
      disposeSupport.attach(qq(document).children()[0], "mouseenter", function (e) {
        maybeHideDropZones();
      });
      disposeSupport.attach(document, "drop", function (e) {
        if (isFileDrag(e)) {
          e.preventDefault();
          maybeHideDropZones();
        }
      });
      disposeSupport.attach(document, HIDE_ZONES_EVENT_NAME, maybeHideDropZones);
    }
    setupDragDrop();
    qq.extend(this, {
      setupExtraDropzone: function setupExtraDropzone(element) {
        options.dropZoneElements.push(element);
        setupDropzone(element);
      },
      removeDropzone: function removeDropzone(element) {
        var i,
          dzs = options.dropZoneElements;
        for (i in dzs) {
          if (dzs[i] === element) {
            return dzs.splice(i, 1);
          }
        }
      },
      dispose: function dispose() {
        disposeSupport.dispose();
        qq.each(uploadDropZones, function (idx, dropZone) {
          dropZone.dispose();
        });
      }
    });
    this._testing = {};
    this._testing.extractDirectoryPath = extractDirectoryPath;
  };
  qq.DragAndDrop.callbacks = function () {
    "use strict";

    return {
      dragEnter: function dragEnter() {},
      dragLeave: function dragLeave() {},
      processingDroppedFiles: function processingDroppedFiles() {},
      processingDroppedFilesComplete: function processingDroppedFilesComplete(files, targetEl) {},
      dropError: function dropError(code, errorSpecifics) {
        qq.log("Drag & drop error code '" + code + " with these specifics: '" + errorSpecifics + "'", "error");
      },
      dropLog: function dropLog(message, level) {
        qq.log(message, level);
      }
    };
  };
  qq.UploadDropZone = function (o) {
    "use strict";

    var disposeSupport = new qq.DisposeSupport(),
      options,
      element,
      preventDrop,
      dropOutsideDisabled;
    options = {
      element: null,
      onEnter: function onEnter(e) {},
      onLeave: function onLeave(e) {},
      onLeaveNotDescendants: function onLeaveNotDescendants(e) {},
      onDrop: function onDrop(e) {}
    };
    qq.extend(options, o);
    element = options.element;
    function dragoverShouldBeCanceled() {
      return qq.safari() || qq.firefox() && qq.windows();
    }
    function disableDropOutside(e) {
      if (!dropOutsideDisabled) {
        if (dragoverShouldBeCanceled) {
          disposeSupport.attach(document, "dragover", function (e) {
            e.preventDefault();
          });
        } else {
          disposeSupport.attach(document, "dragover", function (e) {
            if (e.dataTransfer) {
              e.dataTransfer.dropEffect = "none";
              e.preventDefault();
            }
          });
        }
        dropOutsideDisabled = true;
      }
    }
    function isValidFileDrag(e) {
      if (!qq.supportedFeatures.fileDrop) {
        return false;
      }
      var effectTest,
        dt = e.dataTransfer,
        isSafari = qq.safari();
      effectTest = qq.ie() && qq.supportedFeatures.fileDrop ? true : dt.effectAllowed !== "none";
      return dt && effectTest && (dt.files && dt.files.length || !isSafari && dt.types.contains && dt.types.contains("Files") || dt.types.includes && dt.types.includes("Files"));
    }
    function isOrSetDropDisabled(isDisabled) {
      if (isDisabled !== undefined) {
        preventDrop = isDisabled;
      }
      return preventDrop;
    }
    function triggerHidezonesEvent() {
      var hideZonesEvent;
      function triggerUsingOldApi() {
        hideZonesEvent = document.createEvent("Event");
        hideZonesEvent.initEvent(options.HIDE_ZONES_EVENT_NAME, true, true);
      }
      if (window.CustomEvent) {
        try {
          hideZonesEvent = new CustomEvent(options.HIDE_ZONES_EVENT_NAME);
        } catch (err) {
          triggerUsingOldApi();
        }
      } else {
        triggerUsingOldApi();
      }
      document.dispatchEvent(hideZonesEvent);
    }
    function attachEvents() {
      disposeSupport.attach(element, "dragover", function (e) {
        if (!isValidFileDrag(e)) {
          return;
        }
        var effect = qq.ie() && qq.supportedFeatures.fileDrop ? null : e.dataTransfer.effectAllowed;
        if (effect === "move" || effect === "linkMove") {
          e.dataTransfer.dropEffect = "move";
        } else {
          e.dataTransfer.dropEffect = "copy";
        }
        e.stopPropagation();
        e.preventDefault();
      });
      disposeSupport.attach(element, "dragenter", function (e) {
        if (!isOrSetDropDisabled()) {
          if (!isValidFileDrag(e)) {
            return;
          }
          options.onEnter(e);
        }
      });
      disposeSupport.attach(element, "dragleave", function (e) {
        if (!isValidFileDrag(e)) {
          return;
        }
        options.onLeave(e);
        var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
        if (qq(this).contains(relatedTarget)) {
          return;
        }
        options.onLeaveNotDescendants(e);
      });
      disposeSupport.attach(element, "drop", function (e) {
        if (!isOrSetDropDisabled()) {
          if (!isValidFileDrag(e)) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          options.onDrop(e);
          triggerHidezonesEvent();
        }
      });
    }
    disableDropOutside();
    attachEvents();
    qq.extend(this, {
      dropDisabled: function dropDisabled(isDisabled) {
        return isOrSetDropDisabled(isDisabled);
      },
      dispose: function dispose() {
        disposeSupport.dispose();
      },
      getElement: function getElement() {
        return element;
      }
    });
    this._testing = {};
    this._testing.isValidFileDrag = isValidFileDrag;
  };
  (function () {
    "use strict";

    qq.uiPublicApi = {
      addInitialFiles: function addInitialFiles(cannedFileList) {
        this._parent.prototype.addInitialFiles.apply(this, arguments);
        this._templating.addCacheToDom();
      },
      clearStoredFiles: function clearStoredFiles() {
        this._parent.prototype.clearStoredFiles.apply(this, arguments);
        this._templating.clearFiles();
      },
      addExtraDropzone: function addExtraDropzone(element) {
        this._dnd && this._dnd.setupExtraDropzone(element);
      },
      removeExtraDropzone: function removeExtraDropzone(element) {
        if (this._dnd) {
          return this._dnd.removeDropzone(element);
        }
      },
      getItemByFileId: function getItemByFileId(id) {
        if (!this._templating.isHiddenForever(id)) {
          return this._templating.getFileContainer(id);
        }
      },
      reset: function reset() {
        this._parent.prototype.reset.apply(this, arguments);
        this._templating.reset();
        if (!this._options.button && this._templating.getButton()) {
          this._defaultButtonId = this._createUploadButton({
            element: this._templating.getButton(),
            title: this._options.text.fileInputTitle
          }).getButtonId();
        }
        if (this._dnd) {
          this._dnd.dispose();
          this._dnd = this._setupDragAndDrop();
        }
        this._totalFilesInBatch = 0;
        this._filesInBatchAddedToUi = 0;
        this._setupClickAndEditEventHandlers();
      },
      setName: function setName(id, newName) {
        var formattedFilename = this._options.formatFileName(newName);
        this._parent.prototype.setName.apply(this, arguments);
        this._templating.updateFilename(id, formattedFilename);
      },
      pauseUpload: function pauseUpload(id) {
        var paused = this._parent.prototype.pauseUpload.apply(this, arguments);
        paused && this._templating.uploadPaused(id);
        return paused;
      },
      continueUpload: function continueUpload(id) {
        var continued = this._parent.prototype.continueUpload.apply(this, arguments);
        continued && this._templating.uploadContinued(id);
        return continued;
      },
      getId: function getId(fileContainerOrChildEl) {
        return this._templating.getFileId(fileContainerOrChildEl);
      },
      getDropTarget: function getDropTarget(fileId) {
        var file = this.getFile(fileId);
        return file.qqDropTarget;
      }
    };
    qq.uiPrivateApi = {
      _getButton: function _getButton(buttonId) {
        var button = this._parent.prototype._getButton.apply(this, arguments);
        if (!button) {
          if (buttonId === this._defaultButtonId) {
            button = this._templating.getButton();
          }
        }
        return button;
      },
      _removeFileItem: function _removeFileItem(fileId) {
        this._templating.removeFile(fileId);
      },
      _setupClickAndEditEventHandlers: function _setupClickAndEditEventHandlers() {
        this._fileButtonsClickHandler = qq.FileButtonsClickHandler && this._bindFileButtonsClickEvent();
        this._focusinEventSupported = !qq.firefox();
        if (this._isEditFilenameEnabled()) {
          this._filenameClickHandler = this._bindFilenameClickEvent();
          this._filenameInputFocusInHandler = this._bindFilenameInputFocusInEvent();
          this._filenameInputFocusHandler = this._bindFilenameInputFocusEvent();
        }
      },
      _setupDragAndDrop: function _setupDragAndDrop() {
        var self = this,
          dropZoneElements = this._options.dragAndDrop.extraDropzones,
          templating = this._templating,
          defaultDropZone = templating.getDropZone();
        defaultDropZone && dropZoneElements.push(defaultDropZone);
        return new qq.DragAndDrop({
          dropZoneElements: dropZoneElements,
          allowMultipleItems: this._options.multiple,
          classes: {
            dropActive: this._options.classes.dropActive
          },
          callbacks: {
            processingDroppedFiles: function processingDroppedFiles() {
              templating.showDropProcessing();
            },
            processingDroppedFilesComplete: function processingDroppedFilesComplete(files, targetEl) {
              templating.hideDropProcessing();
              qq.each(files, function (idx, file) {
                file.qqDropTarget = targetEl;
              });
              if (files.length) {
                self.addFiles(files, null, null);
              }
            },
            dropError: function dropError(code, errorData) {
              self._itemError(code, errorData);
            },
            dropLog: function dropLog(message, level) {
              self.log(message, level);
            }
          }
        });
      },
      _bindFileButtonsClickEvent: function _bindFileButtonsClickEvent() {
        var self = this;
        return new qq.FileButtonsClickHandler({
          templating: this._templating,
          log: function log(message, lvl) {
            self.log(message, lvl);
          },
          onDeleteFile: function onDeleteFile(fileId) {
            self.deleteFile(fileId);
          },
          onCancel: function onCancel(fileId) {
            self.cancel(fileId);
          },
          onRetry: function onRetry(fileId) {
            self.retry(fileId);
          },
          onPause: function onPause(fileId) {
            self.pauseUpload(fileId);
          },
          onContinue: function onContinue(fileId) {
            self.continueUpload(fileId);
          },
          onGetName: function onGetName(fileId) {
            return self.getName(fileId);
          }
        });
      },
      _isEditFilenameEnabled: function _isEditFilenameEnabled() {
        return this._templating.isEditFilenamePossible() && !this._options.autoUpload && qq.FilenameClickHandler && qq.FilenameInputFocusHandler && qq.FilenameInputFocusHandler;
      },
      _filenameEditHandler: function _filenameEditHandler() {
        var self = this,
          templating = this._templating;
        return {
          templating: templating,
          log: function log(message, lvl) {
            self.log(message, lvl);
          },
          onGetUploadStatus: function onGetUploadStatus(fileId) {
            return self.getUploads({
              id: fileId
            }).status;
          },
          onGetName: function onGetName(fileId) {
            return self.getName(fileId);
          },
          onSetName: function onSetName(id, newName) {
            self.setName(id, newName);
          },
          onEditingStatusChange: function onEditingStatusChange(id, isEditing) {
            var qqInput = qq(templating.getEditInput(id)),
              qqFileContainer = qq(templating.getFileContainer(id));
            if (isEditing) {
              qqInput.addClass("qq-editing");
              templating.hideFilename(id);
              templating.hideEditIcon(id);
            } else {
              qqInput.removeClass("qq-editing");
              templating.showFilename(id);
              templating.showEditIcon(id);
            }
            qqFileContainer.addClass("qq-temp").removeClass("qq-temp");
          }
        };
      },
      _onUploadStatusChange: function _onUploadStatusChange(id, oldStatus, newStatus) {
        this._parent.prototype._onUploadStatusChange.apply(this, arguments);
        if (this._isEditFilenameEnabled()) {
          if (this._templating.getFileContainer(id) && newStatus !== qq.status.SUBMITTED) {
            this._templating.markFilenameEditable(id);
            this._templating.hideEditIcon(id);
          }
        }
        if (oldStatus === qq.status.UPLOAD_RETRYING && newStatus === qq.status.UPLOADING) {
          this._templating.hideRetry(id);
          this._templating.setStatusText(id);
          qq(this._templating.getFileContainer(id)).removeClass(this._classes.retrying);
        } else if (newStatus === qq.status.UPLOAD_FAILED) {
          this._templating.hidePause(id);
        }
      },
      _bindFilenameInputFocusInEvent: function _bindFilenameInputFocusInEvent() {
        var spec = qq.extend({}, this._filenameEditHandler());
        return new qq.FilenameInputFocusInHandler(spec);
      },
      _bindFilenameInputFocusEvent: function _bindFilenameInputFocusEvent() {
        var spec = qq.extend({}, this._filenameEditHandler());
        return new qq.FilenameInputFocusHandler(spec);
      },
      _bindFilenameClickEvent: function _bindFilenameClickEvent() {
        var spec = qq.extend({}, this._filenameEditHandler());
        return new qq.FilenameClickHandler(spec);
      },
      _storeForLater: function _storeForLater(id) {
        this._parent.prototype._storeForLater.apply(this, arguments);
        this._templating.hideSpinner(id);
      },
      _onAllComplete: function _onAllComplete(successful, failed) {
        this._parent.prototype._onAllComplete.apply(this, arguments);
        this._templating.resetTotalProgress();
      },
      _onSubmit: function _onSubmit(id, name) {
        var file = this.getFile(id);
        if (file && file.qqPath && this._options.dragAndDrop.reportDirectoryPaths) {
          this._paramsStore.addReadOnly(id, {
            qqpath: file.qqPath
          });
        }
        this._parent.prototype._onSubmit.apply(this, arguments);
        this._addToList(id, name);
      },
      _onSubmitted: function _onSubmitted(id) {
        if (this._isEditFilenameEnabled()) {
          this._templating.markFilenameEditable(id);
          this._templating.showEditIcon(id);
          if (!this._focusinEventSupported) {
            this._filenameInputFocusHandler.addHandler(this._templating.getEditInput(id));
          }
        }
      },
      _onProgress: function _onProgress(id, name, loaded, total) {
        this._parent.prototype._onProgress.apply(this, arguments);
        this._templating.updateProgress(id, loaded, total);
        if (total === 0 || Math.round(loaded / total * 100) === 100) {
          this._templating.hideCancel(id);
          this._templating.hidePause(id);
          this._templating.hideProgress(id);
          this._templating.setStatusText(id, this._options.text.waitingForResponse);
          this._displayFileSize(id);
        } else {
          this._displayFileSize(id, loaded, total);
        }
      },
      _onTotalProgress: function _onTotalProgress(loaded, total) {
        this._parent.prototype._onTotalProgress.apply(this, arguments);
        this._templating.updateTotalProgress(loaded, total);
      },
      _onComplete: function _onComplete(id, name, result, xhr) {
        var parentRetVal = this._parent.prototype._onComplete.apply(this, arguments),
          templating = this._templating,
          fileContainer = templating.getFileContainer(id),
          self = this;
        function completeUpload(result) {
          if (!fileContainer) {
            return;
          }
          templating.setStatusText(id);
          qq(fileContainer).removeClass(self._classes.retrying);
          templating.hideProgress(id);
          if (self.getUploads({
            id: id
          }).status !== qq.status.UPLOAD_FAILED) {
            templating.hideCancel(id);
          }
          templating.hideSpinner(id);
          if (result.success) {
            self._markFileAsSuccessful(id);
          } else {
            qq(fileContainer).addClass(self._classes.fail);
            templating.showCancel(id);
            if (templating.isRetryPossible() && !self._preventRetries[id]) {
              qq(fileContainer).addClass(self._classes.retryable);
              templating.showRetry(id);
            }
            self._controlFailureTextDisplay(id, result);
          }
        }
        if (parentRetVal instanceof qq.Promise) {
          parentRetVal.done(function (newResult) {
            completeUpload(newResult);
          });
        } else {
          completeUpload(result);
        }
        return parentRetVal;
      },
      _markFileAsSuccessful: function _markFileAsSuccessful(id) {
        var templating = this._templating;
        if (this._isDeletePossible()) {
          templating.showDeleteButton(id);
        }
        qq(templating.getFileContainer(id)).addClass(this._classes.success);
        this._maybeUpdateThumbnail(id);
      },
      _onUploadPrep: function _onUploadPrep(id) {
        this._parent.prototype._onUploadPrep.apply(this, arguments);
        this._templating.showSpinner(id);
      },
      _onUpload: function _onUpload(id, name) {
        var parentRetVal = this._parent.prototype._onUpload.apply(this, arguments);
        this._templating.showSpinner(id);
        return parentRetVal;
      },
      _onUploadChunk: function _onUploadChunk(id, chunkData) {
        this._parent.prototype._onUploadChunk.apply(this, arguments);
        if (chunkData.partIndex > 0 && this._handler.isResumable(id)) {
          this._templating.allowPause(id);
        }
      },
      _onCancel: function _onCancel(id, name) {
        this._parent.prototype._onCancel.apply(this, arguments);
        this._removeFileItem(id);
        if (this._getNotFinished() === 0) {
          this._templating.resetTotalProgress();
        }
      },
      _onBeforeAutoRetry: function _onBeforeAutoRetry(id) {
        var retryNumForDisplay, maxAuto, retryNote;
        this._parent.prototype._onBeforeAutoRetry.apply(this, arguments);
        this._showCancelLink(id);
        if (this._options.retry.showAutoRetryNote) {
          retryNumForDisplay = this._autoRetries[id];
          maxAuto = this._options.retry.maxAutoAttempts;
          retryNote = this._options.retry.autoRetryNote.replace(/\{retryNum\}/g, retryNumForDisplay);
          retryNote = retryNote.replace(/\{maxAuto\}/g, maxAuto);
          this._templating.setStatusText(id, retryNote);
          qq(this._templating.getFileContainer(id)).addClass(this._classes.retrying);
        }
      },
      _onBeforeManualRetry: function _onBeforeManualRetry(id) {
        if (this._parent.prototype._onBeforeManualRetry.apply(this, arguments)) {
          this._templating.resetProgress(id);
          qq(this._templating.getFileContainer(id)).removeClass(this._classes.fail);
          this._templating.setStatusText(id);
          this._templating.showSpinner(id);
          this._showCancelLink(id);
          return true;
        } else {
          qq(this._templating.getFileContainer(id)).addClass(this._classes.retryable);
          this._templating.showRetry(id);
          return false;
        }
      },
      _onSubmitDelete: function _onSubmitDelete(id) {
        var onSuccessCallback = qq.bind(this._onSubmitDeleteSuccess, this);
        this._parent.prototype._onSubmitDelete.call(this, id, onSuccessCallback);
      },
      _onSubmitDeleteSuccess: function _onSubmitDeleteSuccess(id, uuid, additionalMandatedParams) {
        if (this._options.deleteFile.forceConfirm) {
          this._showDeleteConfirm.apply(this, arguments);
        } else {
          this._sendDeleteRequest.apply(this, arguments);
        }
      },
      _onDeleteComplete: function _onDeleteComplete(id, xhr, isError) {
        this._parent.prototype._onDeleteComplete.apply(this, arguments);
        this._templating.hideSpinner(id);
        if (isError) {
          this._templating.setStatusText(id, this._options.deleteFile.deletingFailedText);
          this._templating.showDeleteButton(id);
        } else {
          this._removeFileItem(id);
        }
      },
      _sendDeleteRequest: function _sendDeleteRequest(id, uuid, additionalMandatedParams) {
        this._templating.hideDeleteButton(id);
        this._templating.showSpinner(id);
        this._templating.setStatusText(id, this._options.deleteFile.deletingStatusText);
        this._deleteHandler.sendDelete.apply(this, arguments);
      },
      _showDeleteConfirm: function _showDeleteConfirm(id, uuid, mandatedParams) {
        var fileName = this.getName(id),
          confirmMessage = this._options.deleteFile.confirmMessage.replace(/\{filename\}/g, fileName),
          uuid = this.getUuid(id),
          deleteRequestArgs = arguments,
          self = this,
          retVal;
        retVal = this._options.showConfirm(confirmMessage);
        if (qq.isGenericPromise(retVal)) {
          retVal.then(function () {
            self._sendDeleteRequest.apply(self, deleteRequestArgs);
          });
        } else if (retVal !== false) {
          self._sendDeleteRequest.apply(self, deleteRequestArgs);
        }
      },
      _addToList: function _addToList(id, name, canned) {
        var prependData,
          prependIndex = 0,
          dontDisplay = this._handler.isProxied(id) && this._options.scaling.hideScaled,
          record;
        if (this._options.display.prependFiles) {
          if (this._totalFilesInBatch > 1 && this._filesInBatchAddedToUi > 0) {
            prependIndex = this._filesInBatchAddedToUi - 1;
          }
          prependData = {
            index: prependIndex
          };
        }
        if (!canned) {
          if (this._options.disableCancelForFormUploads && !qq.supportedFeatures.ajaxUploading) {
            this._templating.disableCancel();
          }
          if (!this._options.multiple) {
            record = this.getUploads({
              id: id
            });
            this._handledProxyGroup = this._handledProxyGroup || record.proxyGroupId;
            if (record.proxyGroupId !== this._handledProxyGroup || !record.proxyGroupId) {
              this._handler.cancelAll();
              this._clearList();
              this._handledProxyGroup = null;
            }
          }
        }
        if (canned) {
          this._templating.addFileToCache(id, this._options.formatFileName(name), prependData, dontDisplay);
          this._templating.updateThumbnail(id, this._thumbnailUrls[id], true, this._options.thumbnails.customResizer);
        } else {
          this._templating.addFile(id, this._options.formatFileName(name), prependData, dontDisplay);
          this._templating.generatePreview(id, this.getFile(id), this._options.thumbnails.customResizer);
        }
        this._filesInBatchAddedToUi += 1;
        if (canned || this._options.display.fileSizeOnSubmit && qq.supportedFeatures.ajaxUploading) {
          this._displayFileSize(id);
        }
      },
      _clearList: function _clearList() {
        this._templating.clearFiles();
        this.clearStoredFiles();
      },
      _displayFileSize: function _displayFileSize(id, loadedSize, totalSize) {
        var size = this.getSize(id),
          sizeForDisplay = this._formatSize(size);
        if (size >= 0) {
          if (loadedSize !== undefined && totalSize !== undefined) {
            sizeForDisplay = this._formatProgress(loadedSize, totalSize);
          }
          this._templating.updateSize(id, sizeForDisplay);
        }
      },
      _formatProgress: function _formatProgress(uploadedSize, totalSize) {
        var message = this._options.text.formatProgress;
        function r(name, replacement) {
          message = message.replace(name, replacement);
        }
        r("{percent}", Math.round(uploadedSize / totalSize * 100));
        r("{total_size}", this._formatSize(totalSize));
        return message;
      },
      _controlFailureTextDisplay: function _controlFailureTextDisplay(id, response) {
        var mode, responseProperty, failureReason;
        mode = this._options.failedUploadTextDisplay.mode;
        responseProperty = this._options.failedUploadTextDisplay.responseProperty;
        if (mode === "custom") {
          failureReason = response[responseProperty];
          if (!failureReason) {
            failureReason = this._options.text.failUpload;
          }
          this._templating.setStatusText(id, failureReason);
          if (this._options.failedUploadTextDisplay.enableTooltip) {
            this._showTooltip(id, failureReason);
          }
        } else if (mode === "default") {
          this._templating.setStatusText(id, this._options.text.failUpload);
        } else if (mode !== "none") {
          this.log("failedUploadTextDisplay.mode value of '" + mode + "' is not valid", "warn");
        }
      },
      _showTooltip: function _showTooltip(id, text) {
        this._templating.getFileContainer(id).title = text;
      },
      _showCancelLink: function _showCancelLink(id) {
        if (!this._options.disableCancelForFormUploads || qq.supportedFeatures.ajaxUploading) {
          this._templating.showCancel(id);
        }
      },
      _itemError: function _itemError(code, name, item) {
        var message = this._parent.prototype._itemError.apply(this, arguments);
        this._options.showMessage(message);
      },
      _batchError: function _batchError(message) {
        this._parent.prototype._batchError.apply(this, arguments);
        this._options.showMessage(message);
      },
      _setupPastePrompt: function _setupPastePrompt() {
        var self = this;
        this._options.callbacks.onPasteReceived = function () {
          var message = self._options.paste.namePromptMessage,
            defaultVal = self._options.paste.defaultName;
          return self._options.showPrompt(message, defaultVal);
        };
      },
      _fileOrBlobRejected: function _fileOrBlobRejected(id, name) {
        this._totalFilesInBatch -= 1;
        this._parent.prototype._fileOrBlobRejected.apply(this, arguments);
      },
      _prepareItemsForUpload: function _prepareItemsForUpload(items, params, endpoint) {
        this._totalFilesInBatch = items.length;
        this._filesInBatchAddedToUi = 0;
        this._parent.prototype._prepareItemsForUpload.apply(this, arguments);
      },
      _maybeUpdateThumbnail: function _maybeUpdateThumbnail(fileId) {
        var thumbnailUrl = this._thumbnailUrls[fileId],
          fileStatus = this.getUploads({
            id: fileId
          }).status;
        if (fileStatus !== qq.status.DELETED && (thumbnailUrl || this._options.thumbnails.placeholders.waitUntilResponse || !qq.supportedFeatures.imagePreviews)) {
          this._templating.updateThumbnail(fileId, thumbnailUrl, this._options.thumbnails.customResizer);
        }
      },
      _addCannedFile: function _addCannedFile(sessionData) {
        var id = this._parent.prototype._addCannedFile.apply(this, arguments);
        this._addToList(id, this.getName(id), true);
        this._templating.hideSpinner(id);
        this._templating.hideCancel(id);
        this._markFileAsSuccessful(id);
        return id;
      },
      _setSize: function _setSize(id, newSize) {
        this._parent.prototype._setSize.apply(this, arguments);
        this._templating.updateSize(id, this._formatSize(newSize));
      },
      _sessionRequestComplete: function _sessionRequestComplete() {
        this._templating.addCacheToDom();
        this._parent.prototype._sessionRequestComplete.apply(this, arguments);
      }
    };
  })();
  qq.FileUploader = function (o, namespace) {
    "use strict";

    var self = this;
    this._parent = namespace ? qq[namespace].FileUploaderBasic : qq.FileUploaderBasic;
    this._parent.apply(this, arguments);
    qq.extend(this._options, {
      element: null,
      button: null,
      listElement: null,
      dragAndDrop: {
        extraDropzones: [],
        reportDirectoryPaths: false
      },
      text: {
        formatProgress: "{percent}% of {total_size}",
        failUpload: "Upload failed",
        waitingForResponse: "Processing...",
        paused: "Paused"
      },
      template: "qq-template",
      classes: {
        retrying: "qq-upload-retrying",
        retryable: "qq-upload-retryable",
        success: "qq-upload-success",
        fail: "qq-upload-fail",
        editable: "qq-editable",
        hide: "qq-hide",
        dropActive: "qq-upload-drop-area-active"
      },
      failedUploadTextDisplay: {
        mode: "default",
        responseProperty: "error",
        enableTooltip: true
      },
      messages: {
        tooManyFilesError: "You may only drop one file",
        unsupportedBrowser: "Unrecoverable error - this browser does not permit file uploading of any kind."
      },
      retry: {
        showAutoRetryNote: true,
        autoRetryNote: "Retrying {retryNum}/{maxAuto}..."
      },
      deleteFile: {
        forceConfirm: false,
        confirmMessage: "Are you sure you want to delete {filename}?",
        deletingStatusText: "Deleting...",
        deletingFailedText: "Delete failed"
      },
      display: {
        fileSizeOnSubmit: false,
        prependFiles: false
      },
      paste: {
        promptForName: false,
        namePromptMessage: "Please name this image"
      },
      thumbnails: {
        customResizer: null,
        maxCount: 0,
        placeholders: {
          waitUntilResponse: false,
          notAvailablePath: null,
          waitingPath: null
        },
        timeBetweenThumbs: 750
      },
      scaling: {
        hideScaled: false
      },
      showMessage: function showMessage(message) {
        if (self._templating.hasDialog("alert")) {
          return self._templating.showDialog("alert", message);
        } else {
          setTimeout(function () {
            window.alert(message);
          }, 0);
        }
      },
      showConfirm: function showConfirm(message) {
        if (self._templating.hasDialog("confirm")) {
          return self._templating.showDialog("confirm", message);
        } else {
          return window.confirm(message);
        }
      },
      showPrompt: function showPrompt(message, defaultValue) {
        if (self._templating.hasDialog("prompt")) {
          return self._templating.showDialog("prompt", message, defaultValue);
        } else {
          return window.prompt(message, defaultValue);
        }
      }
    }, true);
    // overwrite options with user supplied
    this._options.request.dest = "";
    this._options.request.inputName = "";
    qq.extend(this._options, o, true);
    this._templating = new qq.Templating({
      log: qq.bind(this.log, this),
      templateIdOrEl: this._options.template,
      containerEl: this._options.element,
      fileContainerEl: this._options.listElement,
      button: this._options.button,
      imageGenerator: this._imageGenerator,
      classes: {
        hide: this._options.classes.hide,
        editable: this._options.classes.editable
      },
      limits: {
        maxThumbs: this._options.thumbnails.maxCount,
        timeBetweenThumbs: this._options.thumbnails.timeBetweenThumbs
      },
      placeholders: {
        waitUntilUpdate: this._options.thumbnails.placeholders.waitUntilResponse,
        thumbnailNotAvailable: this._options.thumbnails.placeholders.notAvailablePath,
        waitingForThumbnail: this._options.thumbnails.placeholders.waitingPath
      },
      text: this._options.text
    });
    if (this._options.workarounds.ios8SafariUploads && qq.ios800() && qq.iosSafari()) {
      this._templating.renderFailure(this._options.messages.unsupportedBrowserIos8Safari);
    } else if (!qq.supportedFeatures.uploading || this._options.cors.expected && !qq.supportedFeatures.uploadCors) {
      this._templating.renderFailure(this._options.messages.unsupportedBrowser);
    } else {
      this._wrapCallbacks();
      this._templating.render();
      this._classes = this._options.classes;
      if (!this._options.button && this._templating.getButton()) {
        this._defaultButtonId = this._createUploadButton({
          element: this._templating.getButton(),
          title: this._options.text.fileInputTitle
        }).getButtonId();
      }
      this._setupClickAndEditEventHandlers();
      if (qq.DragAndDrop && qq.supportedFeatures.fileDrop) {
        this._dnd = this._setupDragAndDrop();
      }
      if (this._options.paste.targetElement && this._options.paste.promptForName) {
        if (qq.PasteSupport) {
          this._setupPastePrompt();
        } else {
          this.log("Paste support module not found.", "error");
        }
      }
      this._totalFilesInBatch = 0;
      this._filesInBatchAddedToUi = 0;
    }
  };
  qq.extend(qq.FileUploader.prototype, qq.basePublicApi);
  qq.extend(qq.FileUploader.prototype, qq.basePrivateApi);
  qq.extend(qq.FileUploader.prototype, qq.uiPublicApi);
  qq.extend(qq.FileUploader.prototype, qq.uiPrivateApi);
  qq.Templating = function (spec) {
    "use strict";

    var FILE_ID_ATTR = "qq-file-id",
      FILE_CLASS_PREFIX = "qq-file-id-",
      THUMBNAIL_MAX_SIZE_ATTR = "qq-max-size",
      THUMBNAIL_SERVER_SCALE_ATTR = "qq-server-scale",
      HIDE_DROPZONE_ATTR = "qq-hide-dropzone",
      DROPZPONE_TEXT_ATTR = "qq-drop-area-text",
      IN_PROGRESS_CLASS = "qq-in-progress",
      HIDDEN_FOREVER_CLASS = "qq-hidden-forever",
      fileBatch = {
        content: document.createDocumentFragment(),
        map: {}
      },
      isCancelDisabled = false,
      generatedThumbnails = 0,
      thumbnailQueueMonitorRunning = false,
      thumbGenerationQueue = [],
      thumbnailMaxSize = -1,
      options = {
        log: null,
        limits: {
          maxThumbs: 0,
          timeBetweenThumbs: 750
        },
        templateIdOrEl: "qq-template",
        containerEl: null,
        fileContainerEl: null,
        button: null,
        imageGenerator: null,
        classes: {
          hide: "qq-hide",
          editable: "qq-editable"
        },
        placeholders: {
          waitUntilUpdate: false,
          thumbnailNotAvailable: null,
          waitingForThumbnail: null
        },
        text: {
          paused: "Paused"
        }
      },
      selectorClasses = {
        button: "qq-upload-button-selector",
        alertDialog: "qq-alert-dialog-selector",
        dialogCancelButton: "qq-cancel-button-selector",
        confirmDialog: "qq-confirm-dialog-selector",
        dialogMessage: "qq-dialog-message-selector",
        dialogOkButton: "qq-ok-button-selector",
        promptDialog: "qq-prompt-dialog-selector",
        uploader: "qq-uploader-selector",
        drop: "qq-upload-drop-area-selector",
        list: "qq-upload-list-selector",
        progressBarContainer: "qq-progress-bar-container-selector",
        progressBar: "qq-progress-bar-selector",
        totalProgressBarContainer: "qq-total-progress-bar-container-selector",
        totalProgressBar: "qq-total-progress-bar-selector",
        file: "qq-upload-file-selector",
        spinner: "qq-upload-spinner-selector",
        size: "qq-upload-size-selector",
        cancel: "qq-upload-cancel-selector",
        pause: "qq-upload-pause-selector",
        continueButton: "qq-upload-continue-selector",
        deleteButton: "qq-upload-delete-selector",
        retry: "qq-upload-retry-selector",
        statusText: "qq-upload-status-text-selector",
        editFilenameInput: "qq-edit-filename-selector",
        editNameIcon: "qq-edit-filename-icon-selector",
        dropText: "qq-upload-drop-area-text-selector",
        dropProcessing: "qq-drop-processing-selector",
        dropProcessingSpinner: "qq-drop-processing-spinner-selector",
        thumbnail: "qq-thumbnail-selector"
      },
      previewGeneration = {},
      cachedThumbnailNotAvailableImg = new qq.Promise(),
      cachedWaitingForThumbnailImg = new qq.Promise(),
      log,
      isEditElementsExist,
      isRetryElementExist,
      templateDom,
      container,
      fileList,
      showThumbnails,
      serverScale,
      cacheThumbnailPlaceholders = function cacheThumbnailPlaceholders() {
        var notAvailableUrl = options.placeholders.thumbnailNotAvailable,
          waitingUrl = options.placeholders.waitingForThumbnail,
          spec = {
            maxSize: thumbnailMaxSize,
            scale: serverScale
          };
        if (showThumbnails) {
          if (notAvailableUrl) {
            options.imageGenerator.generate(notAvailableUrl, new Image(), spec).then(function (updatedImg) {
              cachedThumbnailNotAvailableImg.success(updatedImg);
            }, function () {
              cachedThumbnailNotAvailableImg.failure();
              log("Problem loading 'not available' placeholder image at " + notAvailableUrl, "error");
            });
          } else {
            cachedThumbnailNotAvailableImg.failure();
          }
          if (waitingUrl) {
            options.imageGenerator.generate(waitingUrl, new Image(), spec).then(function (updatedImg) {
              cachedWaitingForThumbnailImg.success(updatedImg);
            }, function () {
              cachedWaitingForThumbnailImg.failure();
              log("Problem loading 'waiting for thumbnail' placeholder image at " + waitingUrl, "error");
            });
          } else {
            cachedWaitingForThumbnailImg.failure();
          }
        }
      },
      displayWaitingImg = function displayWaitingImg(thumbnail) {
        var waitingImgPlacement = new qq.Promise();
        cachedWaitingForThumbnailImg.then(function (img) {
          maybeScalePlaceholderViaCss(img, thumbnail);
          if (!thumbnail.src) {
            thumbnail.src = img.src;
            thumbnail.onload = function () {
              thumbnail.onload = null;
              show(thumbnail);
              waitingImgPlacement.success();
            };
          } else {
            waitingImgPlacement.success();
          }
        }, function () {
          hide(thumbnail);
          waitingImgPlacement.success();
        });
        return waitingImgPlacement;
      },
      generateNewPreview = function generateNewPreview(id, blob, spec) {
        var thumbnail = getThumbnail(id);
        log("Generating new thumbnail for " + id);
        blob.qqThumbnailId = id;
        return options.imageGenerator.generate(blob, thumbnail, spec).then(function () {
          generatedThumbnails++;
          show(thumbnail);
          previewGeneration[id].success();
        }, function () {
          previewGeneration[id].failure();
          if (!options.placeholders.waitUntilUpdate) {
            maybeSetDisplayNotAvailableImg(id, thumbnail);
          }
        });
      },
      generateNextQueuedPreview = function generateNextQueuedPreview() {
        if (thumbGenerationQueue.length) {
          thumbnailQueueMonitorRunning = true;
          var queuedThumbRequest = thumbGenerationQueue.shift();
          if (queuedThumbRequest.update) {
            processUpdateQueuedPreviewRequest(queuedThumbRequest);
          } else {
            processNewQueuedPreviewRequest(queuedThumbRequest);
          }
        } else {
          thumbnailQueueMonitorRunning = false;
        }
      },
      getCancel = function getCancel(id) {
        return getTemplateEl(getFile(id), selectorClasses.cancel);
      },
      getContinue = function getContinue(id) {
        return getTemplateEl(getFile(id), selectorClasses.continueButton);
      },
      getDialog = function getDialog(type) {
        return getTemplateEl(container, selectorClasses[type + "Dialog"]);
      },
      getDelete = function getDelete(id) {
        return getTemplateEl(getFile(id), selectorClasses.deleteButton);
      },
      getDropProcessing = function getDropProcessing() {
        return getTemplateEl(container, selectorClasses.dropProcessing);
      },
      getEditIcon = function getEditIcon(id) {
        return getTemplateEl(getFile(id), selectorClasses.editNameIcon);
      },
      getFile = function getFile(id) {
        return fileBatch.map[id] || qq(fileList).getFirstByClass(FILE_CLASS_PREFIX + id);
      },
      getFilename = function getFilename(id) {
        return getTemplateEl(getFile(id), selectorClasses.file);
      },
      getPause = function getPause(id) {
        return getTemplateEl(getFile(id), selectorClasses.pause);
      },
      getProgress = function getProgress(id) {
        if (id == null) {
          return getTemplateEl(container, selectorClasses.totalProgressBarContainer) || getTemplateEl(container, selectorClasses.totalProgressBar);
        }
        return getTemplateEl(getFile(id), selectorClasses.progressBarContainer) || getTemplateEl(getFile(id), selectorClasses.progressBar);
      },
      getRetry = function getRetry(id) {
        return getTemplateEl(getFile(id), selectorClasses.retry);
      },
      getSize = function getSize(id) {
        return getTemplateEl(getFile(id), selectorClasses.size);
      },
      getSpinner = function getSpinner(id) {
        return getTemplateEl(getFile(id), selectorClasses.spinner);
      },
      getTemplateEl = function getTemplateEl(context, cssClass) {
        return context && qq(context).getFirstByClass(cssClass);
      },
      getThumbnail = function getThumbnail(id) {
        return showThumbnails && getTemplateEl(getFile(id), selectorClasses.thumbnail);
      },
      hide = function hide(el) {
        el && qq(el).addClass(options.classes.hide);
      },
      maybeScalePlaceholderViaCss = function maybeScalePlaceholderViaCss(placeholder, thumbnail) {
        var maxWidth = placeholder.style.maxWidth,
          maxHeight = placeholder.style.maxHeight;
        if (maxHeight && maxWidth && !thumbnail.style.maxWidth && !thumbnail.style.maxHeight) {
          qq(thumbnail).css({
            maxWidth: maxWidth,
            maxHeight: maxHeight
          });
        }
      },
      maybeSetDisplayNotAvailableImg = function maybeSetDisplayNotAvailableImg(id, thumbnail) {
        var previewing = previewGeneration[id] || new qq.Promise().failure(),
          notAvailableImgPlacement = new qq.Promise();
        cachedThumbnailNotAvailableImg.then(function (img) {
          previewing.then(function () {
            notAvailableImgPlacement.success();
          }, function () {
            maybeScalePlaceholderViaCss(img, thumbnail);
            thumbnail.onload = function () {
              thumbnail.onload = null;
              notAvailableImgPlacement.success();
            };
            thumbnail.src = img.src;
            show(thumbnail);
          });
        });
        return notAvailableImgPlacement;
      },
      parseAndGetTemplate = function parseAndGetTemplate() {
        var scriptEl, scriptHtml, fileListNode, tempTemplateEl, fileListEl, defaultButton, dropArea, thumbnail, dropProcessing, dropTextEl, uploaderEl;
        log("Parsing template");
        if (options.templateIdOrEl == null) {
          throw new Error("You MUST specify either a template element or ID!");
        }
        if (qq.isString(options.templateIdOrEl)) {
          scriptEl = document.getElementById(options.templateIdOrEl);
          if (scriptEl === null) {
            throw new Error(qq.format("Cannot find template script at ID '{}'!", options.templateIdOrEl));
          }
          scriptHtml = scriptEl.innerHTML;
        } else {
          if (options.templateIdOrEl.innerHTML === undefined) {
            throw new Error("You have specified an invalid value for the template option!  " + "It must be an ID or an Element.");
          }
          scriptHtml = options.templateIdOrEl.innerHTML;
        }
        scriptHtml = qq.trimStr(scriptHtml);
        tempTemplateEl = document.createElement("div");
        tempTemplateEl.appendChild(qq.toElement(scriptHtml));
        uploaderEl = qq(tempTemplateEl).getFirstByClass(selectorClasses.uploader);
        if (options.button) {
          defaultButton = qq(tempTemplateEl).getFirstByClass(selectorClasses.button);
          if (defaultButton) {
            qq(defaultButton).remove();
          }
        }
        if (!qq.DragAndDrop || !qq.supportedFeatures.fileDrop) {
          dropProcessing = qq(tempTemplateEl).getFirstByClass(selectorClasses.dropProcessing);
          if (dropProcessing) {
            qq(dropProcessing).remove();
          }
        }
        dropArea = qq(tempTemplateEl).getFirstByClass(selectorClasses.drop);
        if (dropArea && !qq.DragAndDrop) {
          log("DnD module unavailable.", "info");
          qq(dropArea).remove();
        }
        if (!qq.supportedFeatures.fileDrop) {
          uploaderEl.removeAttribute(DROPZPONE_TEXT_ATTR);
          if (dropArea && qq(dropArea).hasAttribute(HIDE_DROPZONE_ATTR)) {
            qq(dropArea).css({
              display: "none"
            });
          }
        } /*else if (qq(uploaderEl).hasAttribute(DROPZPONE_TEXT_ATTR) && dropArea) {
            dropTextEl = qq(dropArea).getFirstByClass(selectorClasses.dropText);
            dropTextEl && qq(dropTextEl).remove();
          }*/
        thumbnail = qq(tempTemplateEl).getFirstByClass(selectorClasses.thumbnail);
        if (!showThumbnails) {
          thumbnail && qq(thumbnail).remove();
        } else if (thumbnail) {
          thumbnailMaxSize = parseInt(thumbnail.getAttribute(THUMBNAIL_MAX_SIZE_ATTR));
          thumbnailMaxSize = thumbnailMaxSize > 0 ? thumbnailMaxSize : null;
          serverScale = qq(thumbnail).hasAttribute(THUMBNAIL_SERVER_SCALE_ATTR);
        }
        showThumbnails = showThumbnails && thumbnail;
        isEditElementsExist = qq(tempTemplateEl).getByClass(selectorClasses.editFilenameInput).length > 0;
        isRetryElementExist = qq(tempTemplateEl).getByClass(selectorClasses.retry).length > 0;
        fileListNode = qq(tempTemplateEl).getFirstByClass(selectorClasses.list);
        if (fileListNode == null) {
          throw new Error("Could not find the file list container in the template!");
        }
        fileListEl = fileListNode.children[0].cloneNode(true);
        fileListNode.innerHTML = "";
        if (tempTemplateEl.getElementsByTagName("DIALOG").length) {
          document.createElement("dialog");
        }
        log("Template parsing complete");
        return {
          template: tempTemplateEl,
          fileTemplate: fileListEl
        };
      },
      prependFile = function prependFile(el, index, fileList) {
        var parentEl = fileList,
          beforeEl = parentEl.firstChild;
        if (index > 0) {
          beforeEl = qq(parentEl).children()[index].nextSibling;
        }
        parentEl.insertBefore(el, beforeEl);
      },
      processNewQueuedPreviewRequest = function processNewQueuedPreviewRequest(queuedThumbRequest) {
        var id = queuedThumbRequest.id,
          optFileOrBlob = queuedThumbRequest.optFileOrBlob,
          relatedThumbnailId = optFileOrBlob && optFileOrBlob.qqThumbnailId,
          thumbnail = getThumbnail(id),
          spec = {
            customResizeFunction: queuedThumbRequest.customResizeFunction,
            maxSize: thumbnailMaxSize,
            orient: true,
            scale: true
          };
        if (qq.supportedFeatures.imagePreviews) {
          if (thumbnail) {
            if (options.limits.maxThumbs && options.limits.maxThumbs <= generatedThumbnails) {
              maybeSetDisplayNotAvailableImg(id, thumbnail);
              generateNextQueuedPreview();
            } else {
              displayWaitingImg(thumbnail).done(function () {
                previewGeneration[id] = new qq.Promise();
                previewGeneration[id].done(function () {
                  setTimeout(generateNextQueuedPreview, options.limits.timeBetweenThumbs);
                });
                if (relatedThumbnailId != null) {
                  useCachedPreview(id, relatedThumbnailId);
                } else {
                  generateNewPreview(id, optFileOrBlob, spec);
                }
              });
            }
          } else {
            generateNextQueuedPreview();
          }
        } else if (thumbnail) {
          displayWaitingImg(thumbnail);
          generateNextQueuedPreview();
        }
      },
      processUpdateQueuedPreviewRequest = function processUpdateQueuedPreviewRequest(queuedThumbRequest) {
        var id = queuedThumbRequest.id,
          thumbnailUrl = queuedThumbRequest.thumbnailUrl,
          showWaitingImg = queuedThumbRequest.showWaitingImg,
          thumbnail = getThumbnail(id),
          spec = {
            customResizeFunction: queuedThumbRequest.customResizeFunction,
            scale: serverScale,
            maxSize: thumbnailMaxSize
          };
        if (thumbnail) {
          if (thumbnailUrl) {
            if (options.limits.maxThumbs && options.limits.maxThumbs <= generatedThumbnails) {
              maybeSetDisplayNotAvailableImg(id, thumbnail);
              generateNextQueuedPreview();
            } else {
              if (showWaitingImg) {
                displayWaitingImg(thumbnail);
              }
              return options.imageGenerator.generate(thumbnailUrl, thumbnail, spec).then(function () {
                show(thumbnail);
                generatedThumbnails++;
                setTimeout(generateNextQueuedPreview, options.limits.timeBetweenThumbs);
              }, function () {
                maybeSetDisplayNotAvailableImg(id, thumbnail);
                setTimeout(generateNextQueuedPreview, options.limits.timeBetweenThumbs);
              });
            }
          } else {
            maybeSetDisplayNotAvailableImg(id, thumbnail);
            generateNextQueuedPreview();
          }
        }
      },
      setProgressBarWidth = function setProgressBarWidth(id, percent) {
        var bar = getProgress(id),
          progressBarSelector = id == null ? selectorClasses.totalProgressBar : selectorClasses.progressBar;
        if (bar && !qq(bar).hasClass(progressBarSelector)) {
          bar = qq(bar).getFirstByClass(progressBarSelector);
        }
        if (bar) {
          qq(bar).css({
            width: percent + "%"
          });
          bar.setAttribute("aria-valuenow", percent);
        }
      },
      show = function show(el) {
        el && qq(el).removeClass(options.classes.hide);
      },
      useCachedPreview = function useCachedPreview(targetThumbnailId, cachedThumbnailId) {
        var targetThumbnail = getThumbnail(targetThumbnailId),
          cachedThumbnail = getThumbnail(cachedThumbnailId);
        log(qq.format("ID {} is the same file as ID {}.  Will use generated thumbnail from ID {} instead.", targetThumbnailId, cachedThumbnailId, cachedThumbnailId));
        previewGeneration[cachedThumbnailId].then(function () {
          generatedThumbnails++;
          previewGeneration[targetThumbnailId].success();
          log(qq.format("Now using previously generated thumbnail created for ID {} on ID {}.", cachedThumbnailId, targetThumbnailId));
          targetThumbnail.src = cachedThumbnail.src;
          show(targetThumbnail);
        }, function () {
          previewGeneration[targetThumbnailId].failure();
          if (!options.placeholders.waitUntilUpdate) {
            maybeSetDisplayNotAvailableImg(targetThumbnailId, targetThumbnail);
          }
        });
      };
    qq.extend(options, spec);
    log = options.log;
    if (!qq.supportedFeatures.imagePreviews) {
      options.limits.timeBetweenThumbs = 0;
      options.limits.maxThumbs = 0;
    }
    container = options.containerEl;
    showThumbnails = options.imageGenerator !== undefined;
    templateDom = parseAndGetTemplate();
    cacheThumbnailPlaceholders();
    qq.extend(this, {
      render: function render() {
        log("Rendering template in DOM.");
        generatedThumbnails = 0;
        container.appendChild(templateDom.template.cloneNode(true));
        hide(getDropProcessing());
        this.hideTotalProgress();
        fileList = options.fileContainerEl || getTemplateEl(container, selectorClasses.list);
        log("Template rendering complete");
      },
      renderFailure: function renderFailure(message) {
        var cantRenderEl = qq.toElement(message);
        container.innerHTML = "";
        container.appendChild(cantRenderEl);
      },
      reset: function reset() {
        container.innerHTML = "";
        this.render();
      },
      clearFiles: function clearFiles() {
        fileList.innerHTML = "";
      },
      disableCancel: function disableCancel() {
        isCancelDisabled = true;
      },
      addFile: function addFile(id, name, prependInfo, hideForever, batch) {
        var fileEl = templateDom.fileTemplate.cloneNode(true),
          fileNameEl = getTemplateEl(fileEl, selectorClasses.file),
          uploaderEl = getTemplateEl(container, selectorClasses.uploader),
          fileContainer = batch ? fileBatch.content : fileList,
          thumb;
        if (batch) {
          fileBatch.map[id] = fileEl;
        }
        qq(fileEl).addClass(FILE_CLASS_PREFIX + id);
        uploaderEl.removeAttribute(DROPZPONE_TEXT_ATTR);
        if (fileNameEl) {
          qq(fileNameEl).setText(name);
          fileNameEl.setAttribute("title", name);
        }
        fileEl.setAttribute(FILE_ID_ATTR, id);
        if (prependInfo) {
          prependFile(fileEl, prependInfo.index, fileContainer);
        } else {
          fileContainer.appendChild(fileEl);
        }
        if (hideForever) {
          fileEl.style.display = "none";
          qq(fileEl).addClass(HIDDEN_FOREVER_CLASS);
        } else {
          hide(getProgress(id));
          hide(getSize(id));
          hide(getDelete(id));
          hide(getRetry(id));
          hide(getPause(id));
          hide(getContinue(id));
          if (isCancelDisabled) {
            this.hideCancel(id);
          }
          thumb = getThumbnail(id);
          if (thumb && !thumb.src) {
            cachedWaitingForThumbnailImg.then(function (waitingImg) {
              thumb.src = waitingImg.src;
              if (waitingImg.style.maxHeight && waitingImg.style.maxWidth) {
                qq(thumb).css({
                  maxHeight: waitingImg.style.maxHeight,
                  maxWidth: waitingImg.style.maxWidth
                });
              }
              show(thumb);
            });
          }
        }
      },
      addFileToCache: function addFileToCache(id, name, prependInfo, hideForever) {
        this.addFile(id, name, prependInfo, hideForever, true);
      },
      addCacheToDom: function addCacheToDom() {
        fileList.appendChild(fileBatch.content);
        fileBatch.content = document.createDocumentFragment();
        fileBatch.map = {};
      },
      removeFile: function removeFile(id) {
        qq(getFile(id)).remove();
      },
      getFileId: function getFileId(el) {
        var currentNode = el;
        if (currentNode) {
          while (currentNode.getAttribute(FILE_ID_ATTR) == null) {
            currentNode = currentNode.parentNode;
          }
          return parseInt(currentNode.getAttribute(FILE_ID_ATTR));
        }
      },
      getFileList: function getFileList() {
        return fileList;
      },
      markFilenameEditable: function markFilenameEditable(id) {
        var filename = getFilename(id);
        filename && qq(filename).addClass(options.classes.editable);
      },
      updateFilename: function updateFilename(id, name) {
        var filenameEl = getFilename(id);
        if (filenameEl) {
          qq(filenameEl).setText(name);
          filenameEl.setAttribute("title", name);
        }
      },
      hideFilename: function hideFilename(id) {
        hide(getFilename(id));
      },
      showFilename: function showFilename(id) {
        show(getFilename(id));
      },
      isFileName: function isFileName(el) {
        return qq(el).hasClass(selectorClasses.file);
      },
      getButton: function getButton() {
        return options.button || getTemplateEl(container, selectorClasses.button);
      },
      hideDropProcessing: function hideDropProcessing() {
        hide(getDropProcessing());
      },
      showDropProcessing: function showDropProcessing() {
        show(getDropProcessing());
      },
      getDropZone: function getDropZone() {
        return getTemplateEl(container, selectorClasses.drop);
      },
      isEditFilenamePossible: function isEditFilenamePossible() {
        return isEditElementsExist;
      },
      hideRetry: function hideRetry(id) {
        hide(getRetry(id));
      },
      isRetryPossible: function isRetryPossible() {
        return isRetryElementExist;
      },
      showRetry: function showRetry(id) {
        show(getRetry(id));
      },
      getFileContainer: function getFileContainer(id) {
        return getFile(id);
      },
      showEditIcon: function showEditIcon(id) {
        var icon = getEditIcon(id);
        icon && qq(icon).addClass(options.classes.editable);
      },
      isHiddenForever: function isHiddenForever(id) {
        return qq(getFile(id)).hasClass(HIDDEN_FOREVER_CLASS);
      },
      hideEditIcon: function hideEditIcon(id) {
        var icon = getEditIcon(id);
        icon && qq(icon).removeClass(options.classes.editable);
      },
      isEditIcon: function isEditIcon(el) {
        return qq(el).hasClass(selectorClasses.editNameIcon, true);
      },
      getEditInput: function getEditInput(id) {
        return getTemplateEl(getFile(id), selectorClasses.editFilenameInput);
      },
      isEditInput: function isEditInput(el) {
        return qq(el).hasClass(selectorClasses.editFilenameInput, true);
      },
      updateProgress: function updateProgress(id, loaded, total) {
        var bar = getProgress(id),
          percent;
        if (bar && total > 0) {
          percent = Math.round(loaded / total * 100);
          if (percent === 100) {
            hide(bar);
          } else {
            show(bar);
          }
          setProgressBarWidth(id, percent);
        }
      },
      updateTotalProgress: function updateTotalProgress(loaded, total) {
        this.updateProgress(null, loaded, total);
      },
      hideProgress: function hideProgress(id) {
        var bar = getProgress(id);
        bar && hide(bar);
      },
      hideTotalProgress: function hideTotalProgress() {
        this.hideProgress();
      },
      resetProgress: function resetProgress(id) {
        setProgressBarWidth(id, 0);
        this.hideTotalProgress(id);
      },
      resetTotalProgress: function resetTotalProgress() {
        this.resetProgress();
      },
      showCancel: function showCancel(id) {
        if (!isCancelDisabled) {
          var cancel = getCancel(id);
          cancel && qq(cancel).removeClass(options.classes.hide);
        }
      },
      hideCancel: function hideCancel(id) {
        hide(getCancel(id));
      },
      isCancel: function isCancel(el) {
        return qq(el).hasClass(selectorClasses.cancel, true);
      },
      allowPause: function allowPause(id) {
        show(getPause(id));
        hide(getContinue(id));
      },
      uploadPaused: function uploadPaused(id) {
        this.setStatusText(id, options.text.paused);
        this.allowContinueButton(id);
        hide(getSpinner(id));
      },
      hidePause: function hidePause(id) {
        hide(getPause(id));
      },
      isPause: function isPause(el) {
        return qq(el).hasClass(selectorClasses.pause, true);
      },
      isContinueButton: function isContinueButton(el) {
        return qq(el).hasClass(selectorClasses.continueButton, true);
      },
      allowContinueButton: function allowContinueButton(id) {
        show(getContinue(id));
        hide(getPause(id));
      },
      uploadContinued: function uploadContinued(id) {
        this.setStatusText(id, "");
        this.allowPause(id);
        show(getSpinner(id));
      },
      showDeleteButton: function showDeleteButton(id) {
        show(getDelete(id));
      },
      hideDeleteButton: function hideDeleteButton(id) {
        hide(getDelete(id));
      },
      isDeleteButton: function isDeleteButton(el) {
        return qq(el).hasClass(selectorClasses.deleteButton, true);
      },
      isRetry: function isRetry(el) {
        return qq(el).hasClass(selectorClasses.retry, true);
      },
      updateSize: function updateSize(id, text) {
        var size = getSize(id);
        if (size) {
          show(size);
          qq(size).setText(text);
        }
      },
      setStatusText: function setStatusText(id, text) {
        var textEl = getTemplateEl(getFile(id), selectorClasses.statusText);
        if (textEl) {
          if (text == null) {
            qq(textEl).clearText();
          } else {
            qq(textEl).setText(text);
          }
        }
      },
      hideSpinner: function hideSpinner(id) {
        qq(getFile(id)).removeClass(IN_PROGRESS_CLASS);
        hide(getSpinner(id));
      },
      showSpinner: function showSpinner(id) {
        qq(getFile(id)).addClass(IN_PROGRESS_CLASS);
        show(getSpinner(id));
      },
      generatePreview: function generatePreview(id, optFileOrBlob, customResizeFunction) {
        if (!this.isHiddenForever(id)) {
          thumbGenerationQueue.push({
            id: id,
            customResizeFunction: customResizeFunction,
            optFileOrBlob: optFileOrBlob
          });
          !thumbnailQueueMonitorRunning && generateNextQueuedPreview();
        }
      },
      updateThumbnail: function updateThumbnail(id, thumbnailUrl, showWaitingImg, customResizeFunction) {
        if (!this.isHiddenForever(id)) {
          thumbGenerationQueue.push({
            customResizeFunction: customResizeFunction,
            update: true,
            id: id,
            thumbnailUrl: thumbnailUrl,
            showWaitingImg: showWaitingImg
          });
          !thumbnailQueueMonitorRunning && generateNextQueuedPreview();
        }
      },
      hasDialog: function hasDialog(type) {
        return qq.supportedFeatures.dialogElement && !!getDialog(type);
      },
      showDialog: function showDialog(type, message, defaultValue) {
        var dialog = getDialog(type),
          messageEl = getTemplateEl(dialog, selectorClasses.dialogMessage),
          inputEl = dialog.getElementsByTagName("INPUT")[0],
          cancelBtn = getTemplateEl(dialog, selectorClasses.dialogCancelButton),
          okBtn = getTemplateEl(dialog, selectorClasses.dialogOkButton),
          promise = new qq.Promise(),
          closeHandler = function closeHandler() {
            cancelBtn.removeEventListener("click", cancelClickHandler);
            okBtn && okBtn.removeEventListener("click", okClickHandler);
            promise.failure();
          },
          cancelClickHandler = function cancelClickHandler() {
            cancelBtn.removeEventListener("click", cancelClickHandler);
            dialog.close();
          },
          okClickHandler = function okClickHandler() {
            dialog.removeEventListener("close", closeHandler);
            okBtn.removeEventListener("click", okClickHandler);
            dialog.close();
            promise.success(inputEl && inputEl.value);
          };
        dialog.addEventListener("close", closeHandler);
        cancelBtn.addEventListener("click", cancelClickHandler);
        okBtn && okBtn.addEventListener("click", okClickHandler);
        if (inputEl) {
          inputEl.value = defaultValue;
        }
        messageEl.textContent = message;
        dialog.showModal();
        return promise;
      }
    });
  };
  qq.UiEventHandler = function (s, protectedApi) {
    "use strict";

    var disposer = new qq.DisposeSupport(),
      spec = {
        eventType: "click",
        attachTo: null,
        onHandled: function onHandled(target, event) {}
      };
    qq.extend(this, {
      addHandler: function addHandler(element) {
        _addHandler(element);
      },
      dispose: function dispose() {
        disposer.dispose();
      }
    });
    function _addHandler(element) {
      disposer.attach(element, spec.eventType, function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        spec.onHandled(target, event);
      });
    }
    qq.extend(protectedApi, {
      getFileIdFromItem: function getFileIdFromItem(item) {
        return item.qqFileId;
      },
      getDisposeSupport: function getDisposeSupport() {
        return disposer;
      }
    });
    qq.extend(spec, s);
    if (spec.attachTo) {
      _addHandler(spec.attachTo);
    }
  };
  qq.FileButtonsClickHandler = function (s) {
    "use strict";

    var inheritedInternalApi = {},
      spec = {
        templating: null,
        log: function log(message, lvl) {},
        onDeleteFile: function onDeleteFile(fileId) {},
        onCancel: function onCancel(fileId) {},
        onRetry: function onRetry(fileId) {},
        onPause: function onPause(fileId) {},
        onContinue: function onContinue(fileId) {},
        onGetName: function onGetName(fileId) {}
      },
      buttonHandlers = {
        cancel: function cancel(id) {
          spec.onCancel(id);
        },
        retry: function retry(id) {
          spec.onRetry(id);
        },
        deleteButton: function deleteButton(id) {
          spec.onDeleteFile(id);
        },
        pause: function pause(id) {
          spec.onPause(id);
        },
        continueButton: function continueButton(id) {
          spec.onContinue(id);
        }
      };
    function examineEvent(target, event) {
      qq.each(buttonHandlers, function (buttonType, handler) {
        var firstLetterCapButtonType = buttonType.charAt(0).toUpperCase() + buttonType.slice(1),
          fileId;
        if (spec.templating["is" + firstLetterCapButtonType](target)) {
          fileId = spec.templating.getFileId(target);
          qq.preventDefault(event);
          spec.log(qq.format("Detected valid file button click event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
          handler(fileId);
          return false;
        }
      });
    }
    qq.extend(spec, s);
    spec.eventType = "click";
    spec.onHandled = examineEvent;
    spec.attachTo = spec.templating.getFileList();
    qq.extend(this, new qq.UiEventHandler(spec, inheritedInternalApi));
  };
  qq.FilenameClickHandler = function (s) {
    "use strict";

    var inheritedInternalApi = {},
      spec = {
        templating: null,
        log: function log(message, lvl) {},
        classes: {
          file: "qq-upload-file",
          editNameIcon: "qq-edit-filename-icon"
        },
        onGetUploadStatus: function onGetUploadStatus(fileId) {},
        onGetName: function onGetName(fileId) {}
      };
    qq.extend(spec, s);
    function examineEvent(target, event) {
      if (spec.templating.isFileName(target) || spec.templating.isEditIcon(target)) {
        var fileId = spec.templating.getFileId(target),
          status = spec.onGetUploadStatus(fileId);
        if (status === qq.status.SUBMITTED) {
          spec.log(qq.format("Detected valid filename click event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
          qq.preventDefault(event);
          inheritedInternalApi.handleFilenameEdit(fileId, target, true);
        }
      }
    }
    spec.eventType = "click";
    spec.onHandled = examineEvent;
    qq.extend(this, new qq.FilenameEditHandler(spec, inheritedInternalApi));
  };
  qq.FilenameInputFocusInHandler = function (s, inheritedInternalApi) {
    "use strict";

    var spec = {
      templating: null,
      onGetUploadStatus: function onGetUploadStatus(fileId) {},
      log: function log(message, lvl) {}
    };
    if (!inheritedInternalApi) {
      inheritedInternalApi = {};
    }
    function handleInputFocus(target, event) {
      if (spec.templating.isEditInput(target)) {
        var fileId = spec.templating.getFileId(target),
          status = spec.onGetUploadStatus(fileId);
        if (status === qq.status.SUBMITTED) {
          spec.log(qq.format("Detected valid filename input focus event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
          inheritedInternalApi.handleFilenameEdit(fileId, target);
        }
      }
    }
    spec.eventType = "focusin";
    spec.onHandled = handleInputFocus;
    qq.extend(spec, s);
    qq.extend(this, new qq.FilenameEditHandler(spec, inheritedInternalApi));
  };
  qq.FilenameInputFocusHandler = function (spec) {
    "use strict";

    spec.eventType = "focus";
    spec.attachTo = null;
    qq.extend(this, new qq.FilenameInputFocusInHandler(spec, {}));
  };
  qq.FilenameEditHandler = function (s, inheritedInternalApi) {
    "use strict";

    var spec = {
      templating: null,
      log: function log(message, lvl) {},
      onGetUploadStatus: function onGetUploadStatus(fileId) {},
      onGetName: function onGetName(fileId) {},
      onSetName: function onSetName(fileId, newName) {},
      onEditingStatusChange: function onEditingStatusChange(fileId, isEditing) {}
    };
    function getFilenameSansExtension(fileId) {
      var filenameSansExt = spec.onGetName(fileId),
        extIdx = filenameSansExt.lastIndexOf(".");
      if (extIdx > 0) {
        filenameSansExt = filenameSansExt.substr(0, extIdx);
      }
      return filenameSansExt;
    }
    function getOriginalExtension(fileId) {
      var origName = spec.onGetName(fileId);
      return qq.getExtension(origName);
    }
    function handleNameUpdate(newFilenameInputEl, fileId) {
      var newName = newFilenameInputEl.value,
        origExtension;
      if (newName !== undefined && qq.trimStr(newName).length > 0) {
        origExtension = getOriginalExtension(fileId);
        if (origExtension !== undefined) {
          newName = newName + "." + origExtension;
        }
        spec.onSetName(fileId, newName);
      }
      spec.onEditingStatusChange(fileId, false);
    }
    function registerInputBlurHandler(inputEl, fileId) {
      inheritedInternalApi.getDisposeSupport().attach(inputEl, "blur", function () {
        handleNameUpdate(inputEl, fileId);
      });
    }
    function registerInputEnterKeyHandler(inputEl, fileId) {
      inheritedInternalApi.getDisposeSupport().attach(inputEl, "keyup", function (event) {
        var code = event.keyCode || event.which;
        if (code === 13) {
          handleNameUpdate(inputEl, fileId);
        }
      });
    }
    qq.extend(spec, s);
    spec.attachTo = spec.templating.getFileList();
    qq.extend(this, new qq.UiEventHandler(spec, inheritedInternalApi));
    qq.extend(inheritedInternalApi, {
      handleFilenameEdit: function handleFilenameEdit(id, target, focusInput) {
        var newFilenameInputEl = spec.templating.getEditInput(id);
        spec.onEditingStatusChange(id, true);
        newFilenameInputEl.value = getFilenameSansExtension(id);
        if (focusInput) {
          newFilenameInputEl.focus();
        }
        registerInputBlurHandler(newFilenameInputEl, id);
        registerInputEnterKeyHandler(newFilenameInputEl, id);
      }
    });
  };
})(window);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (qq);

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/jquery.chosen.1.0.0.min.js":
/*!********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/jquery.chosen.1.0.0.min.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* Chosen v1.0.0 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */


!function () {
  var a,
    AbstractChosen,
    Chosen,
    SelectParser,
    b,
    c = {}.hasOwnProperty,
    d = function d(a, b) {
      function d() {
        this.constructor = a;
      }
      for (var e in b) c.call(b, e) && (a[e] = b[e]);
      return d.prototype = b.prototype, a.prototype = new d(), a.__super__ = b.prototype, a;
    };
  SelectParser = function () {
    function SelectParser() {
      this.options_index = 0, this.parsed = [];
    }
    return SelectParser.prototype.add_node = function (a) {
      return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a);
    }, SelectParser.prototype.add_group = function (a) {
      var b, c, d, e, f, g;
      for (b = this.parsed.length, this.parsed.push({
        array_index: b,
        group: !0,
        label: this.escapeExpression(a.label),
        children: 0,
        disabled: a.disabled
      }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(this.add_option(c, b, a.disabled));
      return g;
    }, SelectParser.prototype.add_option = function (a, b, c) {
      return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
        array_index: this.parsed.length,
        options_index: this.options_index,
        value: a.value,
        text: a.text,
        html: a.innerHTML,
        selected: a.selected,
        disabled: c === !0 ? c : a.disabled,
        group_array_index: b,
        classes: a.className,
        style: a.style.cssText
      })) : this.parsed.push({
        array_index: this.parsed.length,
        options_index: this.options_index,
        empty: !0
      }), this.options_index += 1) : void 0;
    }, SelectParser.prototype.escapeExpression = function (a) {
      var b, c;
      return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function (a) {
        return b[a] || "&amp;";
      })) : a;
    }, SelectParser;
  }(), SelectParser.select_to_array = function (a) {
    var b, c, d, e, f;
    for (c = new SelectParser(), f = a.childNodes, d = 0, e = f.length; e > d; d++) b = f[d], c.add_node(b);
    return c.parsed;
  }, AbstractChosen = function () {
    function AbstractChosen(a, b) {
      this.form_field = a, this.options = null != b ? b : {}, AbstractChosen.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers());
    }
    return AbstractChosen.prototype.set_default_values = function () {
      var a = this;
      return this.click_test_action = function (b) {
        return a.test_active_click(b);
      }, this.activate_action = function (b) {
        return a.activate_field(b);
      }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.result_single_selected = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0;
    }, AbstractChosen.prototype.set_default_text = function () {
      return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    }, AbstractChosen.prototype.mouse_enter = function () {
      return this.mouse_on_container = !0;
    }, AbstractChosen.prototype.mouse_leave = function () {
      return this.mouse_on_container = !1;
    }, AbstractChosen.prototype.input_focus = function () {
      var a = this;
      if (this.is_multiple) {
        if (!this.active_field) return setTimeout(function () {
          return a.container_mousedown();
        }, 50);
      } else if (!this.active_field) return this.activate_field();
    }, AbstractChosen.prototype.input_blur = function () {
      var a = this;
      return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
        return a.blur_test();
      }, 100));
    }, AbstractChosen.prototype.results_option_build = function (a) {
      var b, c, d, e, f;
      for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++) c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(c.text));
      return b;
    }, AbstractChosen.prototype.result_add_option = function (a) {
      var b, c;
      return a.search_match ? this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = "" !== a.style.cssText ? ' style="' + a.style + '"' : "", '<li class="' + b.join(" ") + '"' + c + ' data-option-array-index="' + a.array_index + '">' + a.search_text + "</li>") : "" : "";
    }, AbstractChosen.prototype.result_add_group = function (a) {
      return a.search_match || a.group_match ? a.active_options > 0 ? '<li class="group-result">' + a.search_text + "</li>" : "" : "";
    }, AbstractChosen.prototype.results_update_field = function () {
      return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.result_single_selected = null, this.results_build(), this.results_showing ? this.winnow_results() : void 0;
    }, AbstractChosen.prototype.results_toggle = function () {
      return this.results_showing ? this.results_hide() : this.results_show();
    }, AbstractChosen.prototype.results_search = function () {
      return this.results_showing ? this.winnow_results() : this.results_show();
    }, AbstractChosen.prototype.winnow_results = function () {
      var a, b, c, d, e, f, g, h, i, j, k, l, m;
      for (this.no_results_clear(), e = 0, g = this.get_search_text(), a = g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), d = this.search_contains ? "" : "^", c = new RegExp(d + a, "i"), j = new RegExp(a, "i"), m = this.results_data, k = 0, l = m.length; l > k; k++) b = m[k], b.search_match = !1, f = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (f = this.results_data[b.group_array_index], 0 === f.active_options && f.search_match && (e += 1), f.active_options += 1), (!b.group || this.group_search) && (b.search_text = b.group ? b.label : b.html, b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (e += 1), b.search_match ? (g.length && (h = b.search_text.search(j), i = b.search_text.substr(0, h + g.length) + "</em>" + b.search_text.substr(h + g.length), b.search_text = i.substr(0, h) + "<em>" + i.substr(h)), null != f && (f.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
      return this.result_clear_highlight(), 1 > e && g.length ? (this.update_results_content(""), this.no_results(g)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight());
    }, AbstractChosen.prototype.search_string_match = function (a, b) {
      var c, d, e, f;
      if (b.test(a)) return !0;
      if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length)) for (e = 0, f = d.length; f > e; e++) if (c = d[e], b.test(c)) return !0;
    }, AbstractChosen.prototype.choices_count = function () {
      var a, b, c, d;
      if (null != this.selected_option_count) return this.selected_option_count;
      for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++) a = d[b], a.selected && (this.selected_option_count += 1);
      return this.selected_option_count;
    }, AbstractChosen.prototype.choices_click = function (a) {
      return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show();
    }, AbstractChosen.prototype.keyup_checker = function (a) {
      var b, c;
      switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
          if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
          break;
        case 13:
          if (a.preventDefault(), this.results_showing) return this.result_select(a);
          break;
        case 27:
          return this.results_showing && this.results_hide(), !0;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search();
      }
    }, AbstractChosen.prototype.container_width = function () {
      return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px";
    }, AbstractChosen.prototype.include_option_in_results = function (a) {
      return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0;
    }, AbstractChosen.browser_is_supported = function () {
      return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0;
    }, AbstractChosen.default_multiple_text = "Select Some Options", AbstractChosen.default_single_text = "Select an Option", AbstractChosen.default_no_result_text = "No results match", AbstractChosen;
  }(), a = (jquery__WEBPACK_IMPORTED_MODULE_0___default()), a.fn.extend({
    chosen: function chosen(b) {
      return AbstractChosen.browser_is_supported() ? this.each(function () {
        var c, d;
        c = a(this), d = c.data("chosen"), "destroy" === b && d ? d.destroy() : d || c.data("chosen", new Chosen(this, b));
      }) : this;
    }
  }), Chosen = function (c) {
    function Chosen() {
      return b = Chosen.__super__.constructor.apply(this, arguments);
    }
    return d(Chosen, c), Chosen.prototype.setup = function () {
      return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
    }, Chosen.prototype.set_up_html = function () {
      var b, c;
      return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = {
        "class": b.join(" "),
        style: "width: " + this.container_width() + ";",
        title: this.form_field.title
      }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div></div>", c), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    }, Chosen.prototype.register_observers = function () {
      var a = this;
      return this.container.bind("mousedown.chosen", function (b) {
        a.container_mousedown(b);
      }), this.container.bind("mouseup.chosen", function (b) {
        a.container_mouseup(b);
      }), this.container.bind("mouseenter.chosen", function (b) {
        a.mouse_enter(b);
      }), this.container.bind("mouseleave.chosen", function (b) {
        a.mouse_leave(b);
      }), this.search_results.bind("mouseup.chosen", function (b) {
        a.search_results_mouseup(b);
      }), this.search_results.bind("mouseover.chosen", function (b) {
        a.search_results_mouseover(b);
      }), this.search_results.bind("mouseout.chosen", function (b) {
        a.search_results_mouseout(b);
      }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (b) {
        a.search_results_mousewheel(b);
      }), this.form_field_jq.bind("chosen:updated.chosen", function (b) {
        a.results_update_field(b);
      }), this.form_field_jq.bind("chosen:activate.chosen", function (b) {
        a.activate_field(b);
      }), this.form_field_jq.bind("chosen:open.chosen", function (b) {
        a.container_mousedown(b);
      }), this.search_field.bind("blur.chosen", function (b) {
        a.input_blur(b);
      }), this.search_field.bind("keyup.chosen", function (b) {
        a.keyup_checker(b);
      }), this.search_field.bind("keydown.chosen", function (b) {
        a.keydown_checker(b);
      }), this.search_field.bind("focus.chosen", function (b) {
        a.input_focus(b);
      }), this.is_multiple ? this.search_choices.bind("click.chosen", function (b) {
        a.choices_click(b);
      }) : this.container.bind("click.chosen", function (a) {
        a.preventDefault();
      });
    }, Chosen.prototype.destroy = function () {
      return a(document).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show();
    }, Chosen.prototype.search_field_disabled = function () {
      return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action));
    }, Chosen.prototype.container_mousedown = function (b) {
      return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(document).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field());
    }, Chosen.prototype.container_mouseup = function (a) {
      return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a);
    }, Chosen.prototype.search_results_mousewheel = function (a) {
      var b, c, d;
      return b = -(null != (c = a.originalEvent) ? c.wheelDelta : void 0) || (null != (d = a.originialEvent) ? d.detail : void 0), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0;
    }, Chosen.prototype.blur_test = function () {
      return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0;
    }, Chosen.prototype.close_field = function () {
      return a(document).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale();
    }, Chosen.prototype.activate_field = function () {
      return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus();
    }, Chosen.prototype.test_active_click = function (b) {
      return this.container.is(a(b.target).closest(".chosen-container")) ? this.active_field = !0 : this.close_field();
    }, Chosen.prototype.results_build = function () {
      return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
        first: !0
      })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1;
    }, Chosen.prototype.result_do_highlight = function (a) {
      var b, c, d, e, f;
      if (a.length) {
        if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e) return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
        if (f > c) return this.search_results.scrollTop(c);
      }
    }, Chosen.prototype.result_clear_highlight = function () {
      return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null;
    }, Chosen.prototype.results_show = function () {
      return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
        chosen: this
      }), !1) : (this.container.addClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      }), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results());
    }, Chosen.prototype.update_results_content = function (a) {
      return this.search_results.html(a);
    }, Chosen.prototype.results_hide = function () {
      return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
        chosen: this
      })), this.results_showing = !1;
    }, Chosen.prototype.set_tab_index = function () {
      var a;
      return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0;
    }, Chosen.prototype.set_label_behavior = function () {
      var b = this;
      return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (a) {
        return b.is_multiple ? b.container_mousedown(a) : b.activate_field();
      }) : void 0;
    }, Chosen.prototype.show_search_field_default = function () {
      return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"));
    }, Chosen.prototype.search_results_mouseup = function (b) {
      var c;
      return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0;
    }, Chosen.prototype.search_results_mouseover = function (b) {
      var c;
      return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0;
    }, Chosen.prototype.search_results_mouseout = function (b) {
      return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0;
    }, Chosen.prototype.choice_build = function (b) {
      var c,
        d,
        e = this;
      return c = a("<li />", {
        "class": "search-choice"
      }).html("<span>" + b.html + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
        "class": "search-choice-close",
        "data-option-array-index": b.array_index
      }), d.bind("click.chosen", function (a) {
        return e.choice_destroy_link_click(a);
      }), c.append(d)), this.search_container.before(c);
    }, Chosen.prototype.choice_destroy_link_click = function (b) {
      return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target));
    }, Chosen.prototype.choice_destroy = function (a) {
      return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0;
    }, Chosen.prototype.results_reset = function () {
      return this.form_field.options[0].selected = !0, this.selected_option_count = null, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0;
    }, Chosen.prototype.results_reset_cleanup = function () {
      return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove();
    }, Chosen.prototype.result_select = function (a) {
      var b, c, d;
      return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
        chosen: this
      }), !1) : (this.is_multiple ? b.removeClass("active-result") : (this.result_single_selected && (this.result_single_selected.removeClass("result-selected"), d = this.result_single_selected[0].getAttribute("data-option-array-index"), this.results_data[d].selected = !1), this.result_single_selected = b), b.addClass("result-selected"), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(c.text), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
        selected: this.form_field.options[c.options_index].value
      }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0;
    }, Chosen.prototype.single_set_selected_text = function (a) {
      return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(a);
    }, Chosen.prototype.result_deselect = function (a) {
      var b;
      return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
        deselected: this.form_field.options[b.options_index].value
      }), this.search_field_scale(), !0);
    }, Chosen.prototype.single_deselect_control_build = function () {
      return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0;
    }, Chosen.prototype.get_search_text = function () {
      return this.search_field.val() === this.default_text ? "" : a("<div/>").text(a.trim(this.search_field.val())).html();
    }, Chosen.prototype.winnow_results_set_highlight = function () {
      var a, b;
      return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0;
    }, Chosen.prototype.no_results = function (b) {
      var c;
      return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c);
    }, Chosen.prototype.no_results_clear = function () {
      return this.search_results.find(".no-results").remove();
    }, Chosen.prototype.keydown_arrow = function () {
      var a;
      return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show();
    }, Chosen.prototype.keyup_arrow = function () {
      var a;
      return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show();
    }, Chosen.prototype.keydown_backstroke = function () {
      var a;
      return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0);
    }, Chosen.prototype.clear_backstroke = function () {
      return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null;
    }, Chosen.prototype.keydown_checker = function (a) {
      var b, c;
      switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1;
          break;
        case 13:
          a.preventDefault();
          break;
        case 38:
          a.preventDefault(), this.keyup_arrow();
          break;
        case 40:
          a.preventDefault(), this.keydown_arrow();
      }
    }, Chosen.prototype.search_field_scale = function () {
      var b, c, d, e, f, g, h, i, j;
      if (this.is_multiple) {
        for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++) e = g[i], f += e + ":" + this.search_field.css(e) + ";";
        return b = a("<div />", {
          style: f
        }), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({
          width: h + "px"
        });
      }
    }, Chosen;
  }(AbstractChosen);
}.call(undefined);

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/jquery.dataTables.1.8.2.min.js":
/*!************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/jquery.dataTables.1.8.2.min.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
 * File:        jquery.dataTables.min.js
 * Version:     1.8.2
 * Author:      Allan Jardine (www.sprymedia.co.uk)
 * Info:        www.datatables.net
 *
 * Copyright 2008-2011 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, as supplied with this software.
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 */


(function (i, za, p) {
  i.fn.dataTableSettings = [];
  var D = i.fn.dataTableSettings;
  i.fn.dataTableExt = {};
  var n = i.fn.dataTableExt;
  n.sVersion = "1.8.2";
  n.sErrMode = "alert";
  n.iApiIndex = 0;
  n.oApi = {};
  n.afnFiltering = [];
  n.aoFeatures = [];
  n.ofnSearch = {};
  n.afnSortData = [];
  n.oStdClasses = {
    sPagePrevEnabled: "paginate_enabled_previous",
    sPagePrevDisabled: "paginate_disabled_previous",
    sPageNextEnabled: "paginate_enabled_next",
    sPageNextDisabled: "paginate_disabled_next",
    sPageJUINext: "",
    sPageJUIPrev: "",
    sPageButton: "paginate_button",
    sPageButtonActive: "paginate_active",
    sPageButtonStaticDisabled: "paginate_button paginate_button_disabled",
    sPageFirst: "first",
    sPagePrevious: "previous",
    sPageNext: "next",
    sPageLast: "last",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_asc_disabled",
    sSortableDesc: "sorting_desc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sFooterTH: ""
  };
  n.oJUIClasses = {
    sPagePrevEnabled: "fg-button ui-button ui-state-default ui-corner-left",
    sPagePrevDisabled: "fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
    sPageNextEnabled: "fg-button ui-button ui-state-default ui-corner-right",
    sPageNextDisabled: "fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",
    sPageJUINext: "ui-icon ui-icon-circle-arrow-e",
    sPageJUIPrev: "ui-icon ui-icon-circle-arrow-w",
    sPageButton: "fg-button ui-button ui-state-default",
    sPageButtonActive: "fg-button ui-button ui-state-default ui-state-disabled",
    sPageButtonStaticDisabled: "fg-button ui-button ui-state-default ui-state-disabled",
    sPageFirst: "first ui-corner-tl ui-corner-bl",
    sPagePrevious: "previous",
    sPageNext: "next",
    sPageLast: "last ui-corner-tr ui-corner-br",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "ui-state-default",
    sSortDesc: "ui-state-default",
    sSortable: "ui-state-default",
    sSortableAsc: "ui-state-default",
    sSortableDesc: "ui-state-default",
    sSortableNone: "ui-state-default",
    sSortColumn: "sorting_",
    sSortJUIAsc: "css_right ui-icon ui-icon-triangle-1-n",
    sSortJUIDesc: "css_right ui-icon ui-icon-triangle-1-s",
    sSortJUI: "css_right ui-icon ui-icon-carat-2-n-s",
    sSortJUIAscAllowed: "css_right ui-icon ui-icon-carat-1-n",
    sSortJUIDescAllowed: "css_right ui-icon ui-icon-carat-1-s",
    sSortJUIWrapper: "DataTables_sort_wrapper",
    sSortIcon: "DataTables_sort_icon",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead ui-state-default",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot ui-state-default",
    sScrollFootInner: "dataTables_scrollFootInner",
    sFooterTH: "ui-state-default"
  };
  n.oPagination = {
    two_button: {
      fnInit: function fnInit(g, l, s) {
        var t, w, y;
        if (g.bJUI) {
          t = p.createElement("a");
          w = p.createElement("a");
          y = p.createElement("span");
          y.className = g.oClasses.sPageJUINext;
          w.appendChild(y);
          y = p.createElement("span");
          y.className = g.oClasses.sPageJUIPrev;
          t.appendChild(y);
        } else {
          t = p.createElement("div");
          w = p.createElement("div");
        }
        t.className = g.oClasses.sPagePrevDisabled;
        w.className = g.oClasses.sPageNextDisabled;
        t.title = g.oLanguage.oPaginate.sPrevious;
        w.title = g.oLanguage.oPaginate.sNext;
        l.appendChild(t);
        l.appendChild(w);
        i(t).bind("click.DT", function () {
          g.oApi._fnPageChange(g, "previous") && s(g);
        });
        i(w).bind("click.DT", function () {
          g.oApi._fnPageChange(g, "next") && s(g);
        });
        i(t).bind("selectstart.DT", function () {
          return false;
        });
        i(w).bind("selectstart.DT", function () {
          return false;
        });
        if (g.sTableId !== "" && typeof g.aanFeatures.p == "undefined") {
          l.setAttribute("id", g.sTableId + "_paginate");
          t.setAttribute("id", g.sTableId + "_previous");
          w.setAttribute("id", g.sTableId + "_next");
        }
      },
      fnUpdate: function fnUpdate(g) {
        if (g.aanFeatures.p) for (var l = g.aanFeatures.p, s = 0, t = l.length; s < t; s++) if (l[s].childNodes.length !== 0) {
          l[s].childNodes[0].className = g._iDisplayStart === 0 ? g.oClasses.sPagePrevDisabled : g.oClasses.sPagePrevEnabled;
          l[s].childNodes[1].className = g.fnDisplayEnd() == g.fnRecordsDisplay() ? g.oClasses.sPageNextDisabled : g.oClasses.sPageNextEnabled;
        }
      }
    },
    iFullNumbersShowPages: 5,
    full_numbers: {
      fnInit: function fnInit(g, l, s) {
        var t = p.createElement("span"),
          w = p.createElement("span"),
          y = p.createElement("span"),
          F = p.createElement("span"),
          x = p.createElement("span");
        t.innerHTML = g.oLanguage.oPaginate.sFirst;
        w.innerHTML = g.oLanguage.oPaginate.sPrevious;
        F.innerHTML = g.oLanguage.oPaginate.sNext;
        x.innerHTML = g.oLanguage.oPaginate.sLast;
        var v = g.oClasses;
        t.className = v.sPageButton + " " + v.sPageFirst;
        w.className = v.sPageButton + " " + v.sPagePrevious;
        F.className = v.sPageButton + " " + v.sPageNext;
        x.className = v.sPageButton + " " + v.sPageLast;
        l.appendChild(t);
        l.appendChild(w);
        l.appendChild(y);
        l.appendChild(F);
        l.appendChild(x);
        i(t).bind("click.DT", function () {
          g.oApi._fnPageChange(g, "first") && s(g);
        });
        i(w).bind("click.DT", function () {
          g.oApi._fnPageChange(g, "previous") && s(g);
        });
        i(F).bind("click.DT", function () {
          g.oApi._fnPageChange(g, "next") && s(g);
        });
        i(x).bind("click.DT", function () {
          g.oApi._fnPageChange(g, "last") && s(g);
        });
        i("span", l).bind("mousedown.DT", function () {
          return false;
        }).bind("selectstart.DT", function () {
          return false;
        });
        if (g.sTableId !== "" && typeof g.aanFeatures.p == "undefined") {
          l.setAttribute("id", g.sTableId + "_paginate");
          t.setAttribute("id", g.sTableId + "_first");
          w.setAttribute("id", g.sTableId + "_previous");
          F.setAttribute("id", g.sTableId + "_next");
          x.setAttribute("id", g.sTableId + "_last");
        }
      },
      fnUpdate: function fnUpdate(g, l) {
        if (g.aanFeatures.p) {
          var s = n.oPagination.iFullNumbersShowPages,
            t = Math.floor(s / 2),
            w = Math.ceil(g.fnRecordsDisplay() / g._iDisplayLength),
            y = Math.ceil(g._iDisplayStart / g._iDisplayLength) + 1,
            F = "",
            x,
            v = g.oClasses;
          if (w < s) {
            t = 1;
            x = w;
          } else if (y <= t) {
            t = 1;
            x = s;
          } else if (y >= w - t) {
            t = w - s + 1;
            x = w;
          } else {
            t = y - Math.ceil(s / 2) + 1;
            x = t + s - 1;
          }
          for (s = t; s <= x; s++) F += y != s ? '<span class="' + v.sPageButton + '">' + s + "</span>" : '<span class="' + v.sPageButtonActive + '">' + s + "</span>";
          x = g.aanFeatures.p;
          var z,
            $ = function $(M) {
              g._iDisplayStart = (this.innerHTML * 1 - 1) * g._iDisplayLength;
              l(g);
              M.preventDefault();
            },
            X = function X() {
              return false;
            };
          s = 0;
          for (t = x.length; s < t; s++) if (x[s].childNodes.length !== 0) {
            z = i("span:eq(2)", x[s]);
            z.html(F);
            i("span", z).bind("click.DT", $).bind("mousedown.DT", X).bind("selectstart.DT", X);
            z = x[s].getElementsByTagName("span");
            z = [z[0], z[1], z[z.length - 2], z[z.length - 1]];
            i(z).removeClass(v.sPageButton + " " + v.sPageButtonActive + " " + v.sPageButtonStaticDisabled);
            if (y == 1) {
              z[0].className += " " + v.sPageButtonStaticDisabled;
              z[1].className += " " + v.sPageButtonStaticDisabled;
            } else {
              z[0].className += " " + v.sPageButton;
              z[1].className += " " + v.sPageButton;
            }
            if (w === 0 || y == w || g._iDisplayLength == -1) {
              z[2].className += " " + v.sPageButtonStaticDisabled;
              z[3].className += " " + v.sPageButtonStaticDisabled;
            } else {
              z[2].className += " " + v.sPageButton;
              z[3].className += " " + v.sPageButton;
            }
          }
        }
      }
    }
  };
  n.oSort = {
    "string-asc": function stringAsc(g, l) {
      if (typeof g != "string") g = "";
      if (typeof l != "string") l = "";
      g = g.toLowerCase();
      l = l.toLowerCase();
      return g < l ? -1 : g > l ? 1 : 0;
    },
    "string-desc": function stringDesc(g, l) {
      if (typeof g != "string") g = "";
      if (typeof l != "string") l = "";
      g = g.toLowerCase();
      l = l.toLowerCase();
      return g < l ? 1 : g > l ? -1 : 0;
    },
    "html-asc": function htmlAsc(g, l) {
      g = g.replace(/<.*?>/g, "").toLowerCase();
      l = l.replace(/<.*?>/g, "").toLowerCase();
      return g < l ? -1 : g > l ? 1 : 0;
    },
    "html-desc": function htmlDesc(g, l) {
      g = g.replace(/<.*?>/g, "").toLowerCase();
      l = l.replace(/<.*?>/g, "").toLowerCase();
      return g < l ? 1 : g > l ? -1 : 0;
    },
    "date-asc": function dateAsc(g, l) {
      g = Date.parse(g);
      l = Date.parse(l);
      if (isNaN(g) || g === "") g = Date.parse("01/01/1970 00:00:00");
      if (isNaN(l) || l === "") l = Date.parse("01/01/1970 00:00:00");
      return g - l;
    },
    "date-desc": function dateDesc(g, l) {
      g = Date.parse(g);
      l = Date.parse(l);
      if (isNaN(g) || g === "") g = Date.parse("01/01/1970 00:00:00");
      if (isNaN(l) || l === "") l = Date.parse("01/01/1970 00:00:00");
      return l - g;
    },
    "numeric-asc": function numericAsc(g, l) {
      return (g == "-" || g === "" ? 0 : g * 1) - (l == "-" || l === "" ? 0 : l * 1);
    },
    "numeric-desc": function numericDesc(g, l) {
      return (l == "-" || l === "" ? 0 : l * 1) - (g == "-" || g === "" ? 0 : g * 1);
    }
  };
  n.aTypes = [function (g) {
    if (typeof g == "number") return "numeric";else if (typeof g != "string") return null;
    var l,
      s = false;
    l = g.charAt(0);
    if ("0123456789-".indexOf(l) == -1) return null;
    for (var t = 1; t < g.length; t++) {
      l = g.charAt(t);
      if ("0123456789.".indexOf(l) == -1) return null;
      if (l == ".") {
        if (s) return null;
        s = true;
      }
    }
    return "numeric";
  }, function (g) {
    var l = Date.parse(g);
    if (l !== null && !isNaN(l) || typeof g == "string" && g.length === 0) return "date";
    return null;
  }, function (g) {
    if (typeof g == "string" && g.indexOf("<") != -1 && g.indexOf(">") != -1) return "html";
    return null;
  }];
  n.fnVersionCheck = function (g) {
    var l = function l(x, v) {
        for (; x.length < v;) x += "0";
        return x;
      },
      s = n.sVersion.split(".");
    g = g.split(".");
    for (var t = "", w = "", y = 0, F = g.length; y < F; y++) {
      t += l(s[y], 3);
      w += l(g[y], 3);
    }
    return parseInt(t, 10) >= parseInt(w, 10);
  };
  n._oExternConfig = {
    iNextUnique: 0
  };
  i.fn.dataTable = function (g) {
    function l() {
      this.fnRecordsTotal = function () {
        return this.oFeatures.bServerSide ? parseInt(this._iRecordsTotal, 10) : this.aiDisplayMaster.length;
      };
      this.fnRecordsDisplay = function () {
        return this.oFeatures.bServerSide ? parseInt(this._iRecordsDisplay, 10) : this.aiDisplay.length;
      };
      this.fnDisplayEnd = function () {
        return this.oFeatures.bServerSide ? this.oFeatures.bPaginate === false || this._iDisplayLength == -1 ? this._iDisplayStart + this.aiDisplay.length : Math.min(this._iDisplayStart + this._iDisplayLength, this._iRecordsDisplay) : this._iDisplayEnd;
      };
      this.sInstance = this.oInstance = null;
      this.oFeatures = {
        bPaginate: true,
        bLengthChange: true,
        bFilter: true,
        bSort: true,
        bInfo: true,
        bAutoWidth: true,
        bProcessing: false,
        bSortClasses: true,
        bStateSave: false,
        bServerSide: false,
        bDeferRender: false
      };
      this.oScroll = {
        sX: "",
        sXInner: "",
        sY: "",
        bCollapse: false,
        bInfinite: false,
        iLoadGap: 100,
        iBarWidth: 0,
        bAutoCss: true
      };
      this.aanFeatures = [];
      this.oLanguage = {
        sProcessing: "Processing...",
        sLengthMenu: "Show _MENU_ entries",
        sZeroRecords: "No matching records found",
        sEmptyTable: "No data available in table",
        sLoadingRecords: "Loading...",
        sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
        sInfoEmpty: "Showing 0 to 0 of 0 entries",
        sInfoFiltered: "(filtered from _MAX_ total entries)",
        sInfoPostFix: "",
        sInfoThousands: ",",
        sSearch: "Search:",
        sUrl: "",
        oPaginate: {
          sFirst: "First",
          sPrevious: "Previous",
          sNext: "Next",
          sLast: "Last"
        },
        fnInfoCallback: null
      };
      this.aoData = [];
      this.aiDisplay = [];
      this.aiDisplayMaster = [];
      this.aoColumns = [];
      this.aoHeader = [];
      this.aoFooter = [];
      this.iNextId = 0;
      this.asDataSearch = [];
      this.oPreviousSearch = {
        sSearch: "",
        bRegex: false,
        bSmart: true
      };
      this.aoPreSearchCols = [];
      this.aaSorting = [[0, "asc", 0]];
      this.aaSortingFixed = null;
      this.asStripeClasses = [];
      this.asDestroyStripes = [];
      this.sDestroyWidth = 0;
      this.fnFooterCallback = this.fnHeaderCallback = this.fnRowCallback = null;
      this.aoDrawCallback = [];
      this.fnInitComplete = this.fnPreDrawCallback = null;
      this.sTableId = "";
      this.nTableWrapper = this.nTBody = this.nTFoot = this.nTHead = this.nTable = null;
      this.bInitialised = this.bDeferLoading = false;
      this.aoOpenRows = [];
      this.sDom = "lfrtip";
      this.sPaginationType = "two_button";
      this.iCookieDuration = 7200;
      this.sCookiePrefix = "SpryMedia_DataTables_";
      this.fnCookieCallback = null;
      this.aoStateSave = [];
      this.aoStateLoad = [];
      this.sAjaxSource = this.oLoadedState = null;
      this.sAjaxDataProp = "aaData";
      this.bAjaxDataGet = true;
      this.jqXHR = null;
      this.fnServerData = function (a, b, c, d) {
        d.jqXHR = i.ajax({
          url: a,
          data: b,
          success: function success(f) {
            i(d.oInstance).trigger("xhr", d);
            c(f);
          },
          dataType: "json",
          cache: false,
          error: function error(f, e) {
            e == "parsererror" && alert("DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.");
          }
        });
      };
      this.aoServerParams = [];
      this.fnFormatNumber = function (a) {
        if (a < 1E3) return a;else {
          var b = a + "";
          a = b.split("");
          var c = "";
          b = b.length;
          for (var d = 0; d < b; d++) {
            if (d % 3 === 0 && d !== 0) c = this.oLanguage.sInfoThousands + c;
            c = a[b - d - 1] + c;
          }
        }
        return c;
      };
      this.aLengthMenu = [10, 25, 50, 100];
      this.bDrawing = this.iDraw = 0;
      this.iDrawError = -1;
      this._iDisplayLength = 10;
      this._iDisplayStart = 0;
      this._iDisplayEnd = 10;
      this._iRecordsDisplay = this._iRecordsTotal = 0;
      this.bJUI = false;
      this.oClasses = n.oStdClasses;
      this.bSortCellsTop = this.bSorted = this.bFiltered = false;
      this.oInit = null;
      this.aoDestroyCallback = [];
    }
    function s(a) {
      return function () {
        var b = [A(this[n.iApiIndex])].concat(Array.prototype.slice.call(arguments));
        return n.oApi[a].apply(this, b);
      };
    }
    function t(a) {
      var b,
        c,
        d = a.iInitDisplayStart;
      if (a.bInitialised === false) setTimeout(function () {
        t(a);
      }, 200);else {
        Aa(a);
        X(a);
        M(a, a.aoHeader);
        a.nTFoot && M(a, a.aoFooter);
        K(a, true);
        a.oFeatures.bAutoWidth && ga(a);
        b = 0;
        for (c = a.aoColumns.length; b < c; b++) if (a.aoColumns[b].sWidth !== null) a.aoColumns[b].nTh.style.width = q(a.aoColumns[b].sWidth);
        if (a.oFeatures.bSort) R(a);else if (a.oFeatures.bFilter) N(a, a.oPreviousSearch);else {
          a.aiDisplay = a.aiDisplayMaster.slice();
          E(a);
          C(a);
        }
        if (a.sAjaxSource !== null && !a.oFeatures.bServerSide) {
          c = [];
          ha(a, c);
          a.fnServerData.call(a.oInstance, a.sAjaxSource, c, function (f) {
            var e = f;
            if (a.sAjaxDataProp !== "") e = aa(a.sAjaxDataProp)(f);
            for (b = 0; b < e.length; b++) v(a, e[b]);
            a.iInitDisplayStart = d;
            if (a.oFeatures.bSort) R(a);else {
              a.aiDisplay = a.aiDisplayMaster.slice();
              E(a);
              C(a);
            }
            K(a, false);
            w(a, f);
          }, a);
        } else if (!a.oFeatures.bServerSide) {
          K(a, false);
          w(a);
        }
      }
    }
    function w(a, b) {
      a._bInitComplete = true;
      if (typeof a.fnInitComplete == "function") typeof b != "undefined" ? a.fnInitComplete.call(a.oInstance, a, b) : a.fnInitComplete.call(a.oInstance, a);
    }
    function y(a, b, c) {
      a.oLanguage = i.extend(true, a.oLanguage, b);
      typeof b.sEmptyTable == "undefined" && typeof b.sZeroRecords != "undefined" && o(a.oLanguage, b, "sZeroRecords", "sEmptyTable");
      typeof b.sLoadingRecords == "undefined" && typeof b.sZeroRecords != "undefined" && o(a.oLanguage, b, "sZeroRecords", "sLoadingRecords");
      c && t(a);
    }
    function F(a, b) {
      var c = a.aoColumns.length;
      b = {
        sType: null,
        _bAutoType: true,
        bVisible: true,
        bSearchable: true,
        bSortable: true,
        asSorting: ["asc", "desc"],
        sSortingClass: a.oClasses.sSortable,
        sSortingClassJUI: a.oClasses.sSortJUI,
        sTitle: b ? b.innerHTML : "",
        sName: "",
        sWidth: null,
        sWidthOrig: null,
        sClass: null,
        fnRender: null,
        bUseRendered: true,
        iDataSort: c,
        mDataProp: c,
        fnGetData: null,
        fnSetData: null,
        sSortDataType: "std",
        sDefaultContent: null,
        sContentPadding: "",
        nTh: b ? b : p.createElement("th"),
        nTf: null
      };
      a.aoColumns.push(b);
      if (typeof a.aoPreSearchCols[c] == "undefined" || a.aoPreSearchCols[c] === null) a.aoPreSearchCols[c] = {
        sSearch: "",
        bRegex: false,
        bSmart: true
      };else {
        if (typeof a.aoPreSearchCols[c].bRegex == "undefined") a.aoPreSearchCols[c].bRegex = true;
        if (typeof a.aoPreSearchCols[c].bSmart == "undefined") a.aoPreSearchCols[c].bSmart = true;
      }
      x(a, c, null);
    }
    function x(a, b, c) {
      b = a.aoColumns[b];
      if (typeof c != "undefined" && c !== null) {
        if (typeof c.sType != "undefined") {
          b.sType = c.sType;
          b._bAutoType = false;
        }
        o(b, c, "bVisible");
        o(b, c, "bSearchable");
        o(b, c, "bSortable");
        o(b, c, "sTitle");
        o(b, c, "sName");
        o(b, c, "sWidth");
        o(b, c, "sWidth", "sWidthOrig");
        o(b, c, "sClass");
        o(b, c, "fnRender");
        o(b, c, "bUseRendered");
        o(b, c, "iDataSort");
        o(b, c, "mDataProp");
        o(b, c, "asSorting");
        o(b, c, "sSortDataType");
        o(b, c, "sDefaultContent");
        o(b, c, "sContentPadding");
      }
      b.fnGetData = aa(b.mDataProp);
      b.fnSetData = Ba(b.mDataProp);
      if (!a.oFeatures.bSort) b.bSortable = false;
      if (!b.bSortable || i.inArray("asc", b.asSorting) == -1 && i.inArray("desc", b.asSorting) == -1) {
        b.sSortingClass = a.oClasses.sSortableNone;
        b.sSortingClassJUI = "";
      } else if (b.bSortable || i.inArray("asc", b.asSorting) == -1 && i.inArray("desc", b.asSorting) == -1) {
        b.sSortingClass = a.oClasses.sSortable;
        b.sSortingClassJUI = a.oClasses.sSortJUI;
      } else if (i.inArray("asc", b.asSorting) != -1 && i.inArray("desc", b.asSorting) == -1) {
        b.sSortingClass = a.oClasses.sSortableAsc;
        b.sSortingClassJUI = a.oClasses.sSortJUIAscAllowed;
      } else if (i.inArray("asc", b.asSorting) == -1 && i.inArray("desc", b.asSorting) != -1) {
        b.sSortingClass = a.oClasses.sSortableDesc;
        b.sSortingClassJUI = a.oClasses.sSortJUIDescAllowed;
      }
    }
    function v(a, b) {
      var c;
      c = i.isArray(b) ? b.slice() : i.extend(true, {}, b);
      b = a.aoData.length;
      var d = {
        nTr: null,
        _iId: a.iNextId++,
        _aData: c,
        _anHidden: [],
        _sRowStripe: ""
      };
      a.aoData.push(d);
      for (var f, e = 0, h = a.aoColumns.length; e < h; e++) {
        c = a.aoColumns[e];
        typeof c.fnRender == "function" && c.bUseRendered && c.mDataProp !== null && O(a, b, e, c.fnRender({
          iDataRow: b,
          iDataColumn: e,
          aData: d._aData,
          oSettings: a
        }));
        if (c._bAutoType && c.sType != "string") {
          f = G(a, b, e, "type");
          if (f !== null && f !== "") {
            f = ia(f);
            if (c.sType === null) c.sType = f;else if (c.sType != f && c.sType != "html") c.sType = "string";
          }
        }
      }
      a.aiDisplayMaster.push(b);
      a.oFeatures.bDeferRender || z(a, b);
      return b;
    }
    function z(a, b) {
      var c = a.aoData[b],
        d;
      if (c.nTr === null) {
        c.nTr = p.createElement("tr");
        typeof c._aData.DT_RowId != "undefined" && c.nTr.setAttribute("id", c._aData.DT_RowId);
        typeof c._aData.DT_RowClass != "undefined" && i(c.nTr).addClass(c._aData.DT_RowClass);
        for (var f = 0, e = a.aoColumns.length; f < e; f++) {
          var h = a.aoColumns[f];
          d = p.createElement("td");
          d.innerHTML = typeof h.fnRender == "function" && (!h.bUseRendered || h.mDataProp === null) ? h.fnRender({
            iDataRow: b,
            iDataColumn: f,
            aData: c._aData,
            oSettings: a
          }) : G(a, b, f, "display");
          if (h.sClass !== null) d.className = h.sClass;
          if (h.bVisible) {
            c.nTr.appendChild(d);
            c._anHidden[f] = null;
          } else c._anHidden[f] = d;
        }
      }
    }
    function $(a) {
      var b, c, d, f, e, h, j, k, m;
      if (a.bDeferLoading || a.sAjaxSource === null) {
        j = a.nTBody.childNodes;
        b = 0;
        for (c = j.length; b < c; b++) if (j[b].nodeName.toUpperCase() == "TR") {
          k = a.aoData.length;
          a.aoData.push({
            nTr: j[b],
            _iId: a.iNextId++,
            _aData: [],
            _anHidden: [],
            _sRowStripe: ""
          });
          a.aiDisplayMaster.push(k);
          h = j[b].childNodes;
          d = e = 0;
          for (f = h.length; d < f; d++) {
            m = h[d].nodeName.toUpperCase();
            if (m == "TD" || m == "TH") {
              O(a, k, e, i.trim(h[d].innerHTML));
              e++;
            }
          }
        }
      }
      j = ba(a);
      h = [];
      b = 0;
      for (c = j.length; b < c; b++) {
        d = 0;
        for (f = j[b].childNodes.length; d < f; d++) {
          e = j[b].childNodes[d];
          m = e.nodeName.toUpperCase();
          if (m == "TD" || m == "TH") h.push(e);
        }
      }
      h.length != j.length * a.aoColumns.length && J(a, 1, "Unexpected number of TD elements. Expected " + j.length * a.aoColumns.length + " and got " + h.length + ". DataTables does not support rowspan / colspan in the table body, and there must be one cell for each row/column combination.");
      d = 0;
      for (f = a.aoColumns.length; d < f; d++) {
        if (a.aoColumns[d].sTitle === null) a.aoColumns[d].sTitle = a.aoColumns[d].nTh.innerHTML;
        j = a.aoColumns[d]._bAutoType;
        m = typeof a.aoColumns[d].fnRender == "function";
        e = a.aoColumns[d].sClass !== null;
        k = a.aoColumns[d].bVisible;
        var u, r;
        if (j || m || e || !k) {
          b = 0;
          for (c = a.aoData.length; b < c; b++) {
            u = h[b * f + d];
            if (j && a.aoColumns[d].sType != "string") {
              r = G(a, b, d, "type");
              if (r !== "") {
                r = ia(r);
                if (a.aoColumns[d].sType === null) a.aoColumns[d].sType = r;else if (a.aoColumns[d].sType != r && a.aoColumns[d].sType != "html") a.aoColumns[d].sType = "string";
              }
            }
            if (m) {
              r = a.aoColumns[d].fnRender({
                iDataRow: b,
                iDataColumn: d,
                aData: a.aoData[b]._aData,
                oSettings: a
              });
              u.innerHTML = r;
              a.aoColumns[d].bUseRendered && O(a, b, d, r);
            }
            if (e) u.className += " " + a.aoColumns[d].sClass;
            if (k) a.aoData[b]._anHidden[d] = null;else {
              a.aoData[b]._anHidden[d] = u;
              u.parentNode.removeChild(u);
            }
          }
        }
      }
    }
    function X(a) {
      var b, c, d;
      a.nTHead.getElementsByTagName("tr");
      if (a.nTHead.getElementsByTagName("th").length !== 0) {
        b = 0;
        for (d = a.aoColumns.length; b < d; b++) {
          c = a.aoColumns[b].nTh;
          a.aoColumns[b].sClass !== null && i(c).addClass(a.aoColumns[b].sClass);
          if (a.aoColumns[b].sTitle != c.innerHTML) c.innerHTML = a.aoColumns[b].sTitle;
        }
      } else {
        var f = p.createElement("tr");
        b = 0;
        for (d = a.aoColumns.length; b < d; b++) {
          c = a.aoColumns[b].nTh;
          c.innerHTML = a.aoColumns[b].sTitle;
          a.aoColumns[b].sClass !== null && i(c).addClass(a.aoColumns[b].sClass);
          f.appendChild(c);
        }
        i(a.nTHead).html("")[0].appendChild(f);
        Y(a.aoHeader, a.nTHead);
      }
      if (a.bJUI) {
        b = 0;
        for (d = a.aoColumns.length; b < d; b++) {
          c = a.aoColumns[b].nTh;
          f = p.createElement("div");
          f.className = a.oClasses.sSortJUIWrapper;
          i(c).contents().appendTo(f);
          var e = p.createElement("span");
          e.className = a.oClasses.sSortIcon;
          f.appendChild(e);
          c.appendChild(f);
        }
      }
      d = function d() {
        this.onselectstart = function () {
          return false;
        };
        return false;
      };
      if (a.oFeatures.bSort) for (b = 0; b < a.aoColumns.length; b++) if (a.aoColumns[b].bSortable !== false) {
        ja(a, a.aoColumns[b].nTh, b);
        i(a.aoColumns[b].nTh).bind("mousedown.DT", d);
      } else i(a.aoColumns[b].nTh).addClass(a.oClasses.sSortableNone);
      a.oClasses.sFooterTH !== "" && i(a.nTFoot).children("tr").children("th").addClass(a.oClasses.sFooterTH);
      if (a.nTFoot !== null) {
        c = S(a, null, a.aoFooter);
        b = 0;
        for (d = a.aoColumns.length; b < d; b++) if (typeof c[b] != "undefined") a.aoColumns[b].nTf = c[b];
      }
    }
    function M(a, b, c) {
      var d,
        f,
        e,
        h = [],
        j = [],
        k = a.aoColumns.length;
      if (typeof c == "undefined") c = false;
      d = 0;
      for (f = b.length; d < f; d++) {
        h[d] = b[d].slice();
        h[d].nTr = b[d].nTr;
        for (e = k - 1; e >= 0; e--) !a.aoColumns[e].bVisible && !c && h[d].splice(e, 1);
        j.push([]);
      }
      d = 0;
      for (f = h.length; d < f; d++) {
        if (h[d].nTr) {
          a = 0;
          for (e = h[d].nTr.childNodes.length; a < e; a++) h[d].nTr.removeChild(h[d].nTr.childNodes[0]);
        }
        e = 0;
        for (b = h[d].length; e < b; e++) {
          k = c = 1;
          if (typeof j[d][e] == "undefined") {
            h[d].nTr.appendChild(h[d][e].cell);
            for (j[d][e] = 1; typeof h[d + c] != "undefined" && h[d][e].cell == h[d + c][e].cell;) {
              j[d + c][e] = 1;
              c++;
            }
            for (; typeof h[d][e + k] != "undefined" && h[d][e].cell == h[d][e + k].cell;) {
              for (a = 0; a < c; a++) j[d + a][e + k] = 1;
              k++;
            }
            h[d][e].cell.rowSpan = c;
            h[d][e].cell.colSpan = k;
          }
        }
      }
    }
    function C(a) {
      var b,
        c,
        d = [],
        f = 0,
        e = false;
      b = a.asStripeClasses.length;
      c = a.aoOpenRows.length;
      if (!(a.fnPreDrawCallback !== null && a.fnPreDrawCallback.call(a.oInstance, a) === false)) {
        a.bDrawing = true;
        if (typeof a.iInitDisplayStart != "undefined" && a.iInitDisplayStart != -1) {
          a._iDisplayStart = a.oFeatures.bServerSide ? a.iInitDisplayStart : a.iInitDisplayStart >= a.fnRecordsDisplay() ? 0 : a.iInitDisplayStart;
          a.iInitDisplayStart = -1;
          E(a);
        }
        if (a.bDeferLoading) {
          a.bDeferLoading = false;
          a.iDraw++;
        } else if (a.oFeatures.bServerSide) {
          if (!a.bDestroying && !Ca(a)) return;
        } else a.iDraw++;
        if (a.aiDisplay.length !== 0) {
          var h = a._iDisplayStart,
            j = a._iDisplayEnd;
          if (a.oFeatures.bServerSide) {
            h = 0;
            j = a.aoData.length;
          }
          for (h = h; h < j; h++) {
            var k = a.aoData[a.aiDisplay[h]];
            k.nTr === null && z(a, a.aiDisplay[h]);
            var m = k.nTr;
            if (b !== 0) {
              var u = a.asStripeClasses[f % b];
              if (k._sRowStripe != u) {
                i(m).removeClass(k._sRowStripe).addClass(u);
                k._sRowStripe = u;
              }
            }
            if (typeof a.fnRowCallback == "function") {
              m = a.fnRowCallback.call(a.oInstance, m, a.aoData[a.aiDisplay[h]]._aData, f, h);
              if (!m && !e) {
                J(a, 0, "A node was not returned by fnRowCallback");
                e = true;
              }
            }
            d.push(m);
            f++;
            if (c !== 0) for (k = 0; k < c; k++) m == a.aoOpenRows[k].nParent && d.push(a.aoOpenRows[k].nTr);
          }
        } else {
          d[0] = p.createElement("tr");
          if (typeof a.asStripeClasses[0] != "undefined") d[0].className = a.asStripeClasses[0];
          e = a.oLanguage.sZeroRecords.replace("_MAX_", a.fnFormatNumber(a.fnRecordsTotal()));
          if (a.iDraw == 1 && a.sAjaxSource !== null && !a.oFeatures.bServerSide) e = a.oLanguage.sLoadingRecords;else if (typeof a.oLanguage.sEmptyTable != "undefined" && a.fnRecordsTotal() === 0) e = a.oLanguage.sEmptyTable;
          b = p.createElement("td");
          b.setAttribute("valign", "top");
          b.colSpan = Z(a);
          b.className = a.oClasses.sRowEmpty;
          b.innerHTML = e;
          d[f].appendChild(b);
        }
        typeof a.fnHeaderCallback == "function" && a.fnHeaderCallback.call(a.oInstance, i(a.nTHead).children("tr")[0], ca(a), a._iDisplayStart, a.fnDisplayEnd(), a.aiDisplay);
        typeof a.fnFooterCallback == "function" && a.fnFooterCallback.call(a.oInstance, i(a.nTFoot).children("tr")[0], ca(a), a._iDisplayStart, a.fnDisplayEnd(), a.aiDisplay);
        f = p.createDocumentFragment();
        b = p.createDocumentFragment();
        if (a.nTBody) {
          e = a.nTBody.parentNode;
          b.appendChild(a.nTBody);
          if (!a.oScroll.bInfinite || !a._bInitComplete || a.bSorted || a.bFiltered) {
            c = a.nTBody.childNodes;
            for (b = c.length - 1; b >= 0; b--) c[b].parentNode.removeChild(c[b]);
          }
          b = 0;
          for (c = d.length; b < c; b++) f.appendChild(d[b]);
          a.nTBody.appendChild(f);
          e !== null && e.appendChild(a.nTBody);
        }
        for (b = a.aoDrawCallback.length - 1; b >= 0; b--) a.aoDrawCallback[b].fn.call(a.oInstance, a);
        i(a.oInstance).trigger("draw", a);
        a.bSorted = false;
        a.bFiltered = false;
        a.bDrawing = false;
        if (a.oFeatures.bServerSide) {
          K(a, false);
          typeof a._bInitComplete == "undefined" && w(a);
        }
      }
    }
    function da(a) {
      if (a.oFeatures.bSort) R(a, a.oPreviousSearch);else if (a.oFeatures.bFilter) N(a, a.oPreviousSearch);else {
        E(a);
        C(a);
      }
    }
    function Ca(a) {
      if (a.bAjaxDataGet) {
        a.iDraw++;
        K(a, true);
        var b = Da(a);
        ha(a, b);
        a.fnServerData.call(a.oInstance, a.sAjaxSource, b, function (c) {
          Ea(a, c);
        }, a);
        return false;
      } else return true;
    }
    function Da(a) {
      var b = a.aoColumns.length,
        c = [],
        d,
        f;
      c.push({
        name: "sEcho",
        value: a.iDraw
      });
      c.push({
        name: "iColumns",
        value: b
      });
      c.push({
        name: "sColumns",
        value: ka(a)
      });
      c.push({
        name: "iDisplayStart",
        value: a._iDisplayStart
      });
      c.push({
        name: "iDisplayLength",
        value: a.oFeatures.bPaginate !== false ? a._iDisplayLength : -1
      });
      for (f = 0; f < b; f++) {
        d = a.aoColumns[f].mDataProp;
        c.push({
          name: "mDataProp_" + f,
          value: typeof d == "function" ? "function" : d
        });
      }
      if (a.oFeatures.bFilter !== false) {
        c.push({
          name: "sSearch",
          value: a.oPreviousSearch.sSearch
        });
        c.push({
          name: "bRegex",
          value: a.oPreviousSearch.bRegex
        });
        for (f = 0; f < b; f++) {
          c.push({
            name: "sSearch_" + f,
            value: a.aoPreSearchCols[f].sSearch
          });
          c.push({
            name: "bRegex_" + f,
            value: a.aoPreSearchCols[f].bRegex
          });
          c.push({
            name: "bSearchable_" + f,
            value: a.aoColumns[f].bSearchable
          });
        }
      }
      if (a.oFeatures.bSort !== false) {
        d = a.aaSortingFixed !== null ? a.aaSortingFixed.length : 0;
        var e = a.aaSorting.length;
        c.push({
          name: "iSortingCols",
          value: d + e
        });
        for (f = 0; f < d; f++) {
          c.push({
            name: "iSortCol_" + f,
            value: a.aaSortingFixed[f][0]
          });
          c.push({
            name: "sSortDir_" + f,
            value: a.aaSortingFixed[f][1]
          });
        }
        for (f = 0; f < e; f++) {
          c.push({
            name: "iSortCol_" + (f + d),
            value: a.aaSorting[f][0]
          });
          c.push({
            name: "sSortDir_" + (f + d),
            value: a.aaSorting[f][1]
          });
        }
        for (f = 0; f < b; f++) c.push({
          name: "bSortable_" + f,
          value: a.aoColumns[f].bSortable
        });
      }
      return c;
    }
    function ha(a, b) {
      for (var c = 0, d = a.aoServerParams.length; c < d; c++) a.aoServerParams[c].fn.call(a.oInstance, b);
    }
    function Ea(a, b) {
      if (typeof b.sEcho != "undefined") if (b.sEcho * 1 < a.iDraw) return;else a.iDraw = b.sEcho * 1;
      if (!a.oScroll.bInfinite || a.oScroll.bInfinite && (a.bSorted || a.bFiltered)) la(a);
      a._iRecordsTotal = b.iTotalRecords;
      a._iRecordsDisplay = b.iTotalDisplayRecords;
      var c = ka(a);
      if (c = typeof b.sColumns != "undefined" && c !== "" && b.sColumns != c) var d = Fa(a, b.sColumns);
      b = aa(a.sAjaxDataProp)(b);
      for (var f = 0, e = b.length; f < e; f++) if (c) {
        for (var h = [], j = 0, k = a.aoColumns.length; j < k; j++) h.push(b[f][d[j]]);
        v(a, h);
      } else v(a, b[f]);
      a.aiDisplay = a.aiDisplayMaster.slice();
      a.bAjaxDataGet = false;
      C(a);
      a.bAjaxDataGet = true;
      K(a, false);
    }
    function Aa(a) {
      var b = p.createElement("div");
      a.nTable.parentNode.insertBefore(b, a.nTable);
      a.nTableWrapper = p.createElement("div");
      a.nTableWrapper.className = a.oClasses.sWrapper;
      a.sTableId !== "" && a.nTableWrapper.setAttribute("id", a.sTableId + "_wrapper");
      a.nTableReinsertBefore = a.nTable.nextSibling;
      for (var c = a.nTableWrapper, d = a.sDom.split(""), f, e, h, j, k, m, u, r = 0; r < d.length; r++) {
        e = 0;
        h = d[r];
        if (h == "<") {
          j = p.createElement("div");
          k = d[r + 1];
          if (k == "'" || k == '"') {
            m = "";
            for (u = 2; d[r + u] != k;) {
              m += d[r + u];
              u++;
            }
            if (m == "H") m = "fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix";else if (m == "F") m = "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix";
            if (m.indexOf(".") != -1) {
              k = m.split(".");
              j.setAttribute("id", k[0].substr(1, k[0].length - 1));
              j.className = k[1];
            } else if (m.charAt(0) == "#") j.setAttribute("id", m.substr(1, m.length - 1));else j.className = m;
            r += u;
          }
          c.appendChild(j);
          c = j;
        } else if (h == ">") c = c.parentNode;else if (h == "l" && a.oFeatures.bPaginate && a.oFeatures.bLengthChange) {
          f = Ga(a);
          e = 1;
        } else if (h == "f" && a.oFeatures.bFilter) {
          f = Ha(a);
          e = 1;
        } else if (h == "r" && a.oFeatures.bProcessing) {
          f = Ia(a);
          e = 1;
        } else if (h == "t") {
          f = Ja(a);
          e = 1;
        } else if (h == "i" && a.oFeatures.bInfo) {
          f = Ka(a);
          e = 1;
        } else if (h == "p" && a.oFeatures.bPaginate) {
          f = La(a);
          e = 1;
        } else if (n.aoFeatures.length !== 0) {
          j = n.aoFeatures;
          u = 0;
          for (k = j.length; u < k; u++) if (h == j[u].cFeature) {
            if (f = j[u].fnInit(a)) e = 1;
            break;
          }
        }
        if (e == 1 && f !== null) {
          if (_typeof(a.aanFeatures[h]) != "object") a.aanFeatures[h] = [];
          a.aanFeatures[h].push(f);
          c.appendChild(f);
        }
      }
      b.parentNode.replaceChild(a.nTableWrapper, b);
    }
    function Ja(a) {
      if (a.oScroll.sX === "" && a.oScroll.sY === "") return a.nTable;
      var b = p.createElement("div"),
        c = p.createElement("div"),
        d = p.createElement("div"),
        f = p.createElement("div"),
        e = p.createElement("div"),
        h = p.createElement("div"),
        j = a.nTable.cloneNode(false),
        k = a.nTable.cloneNode(false),
        m = a.nTable.getElementsByTagName("thead")[0],
        u = a.nTable.getElementsByTagName("tfoot").length === 0 ? null : a.nTable.getElementsByTagName("tfoot")[0],
        r = typeof g.bJQueryUI != "undefined" && g.bJQueryUI ? n.oJUIClasses : n.oStdClasses;
      c.appendChild(d);
      e.appendChild(h);
      f.appendChild(a.nTable);
      b.appendChild(c);
      b.appendChild(f);
      d.appendChild(j);
      j.appendChild(m);
      if (u !== null) {
        b.appendChild(e);
        h.appendChild(k);
        k.appendChild(u);
      }
      b.className = r.sScrollWrapper;
      c.className = r.sScrollHead;
      d.className = r.sScrollHeadInner;
      f.className = r.sScrollBody;
      e.className = r.sScrollFoot;
      h.className = r.sScrollFootInner;
      if (a.oScroll.bAutoCss) {
        c.style.overflow = "hidden";
        c.style.position = "relative";
        e.style.overflow = "hidden";
        f.style.overflow = "auto";
      }
      c.style.border = "0";
      c.style.width = "100%";
      e.style.border = "0";
      d.style.width = "150%";
      j.removeAttribute("id");
      j.style.marginLeft = "0";
      a.nTable.style.marginLeft = "0";
      if (u !== null) {
        k.removeAttribute("id");
        k.style.marginLeft = "0";
      }
      d = i(a.nTable).children("caption");
      h = 0;
      for (k = d.length; h < k; h++) j.appendChild(d[h]);
      if (a.oScroll.sX !== "") {
        c.style.width = q(a.oScroll.sX);
        f.style.width = q(a.oScroll.sX);
        if (u !== null) e.style.width = q(a.oScroll.sX);
        i(f).scroll(function () {
          c.scrollLeft = this.scrollLeft;
          if (u !== null) e.scrollLeft = this.scrollLeft;
        });
      }
      if (a.oScroll.sY !== "") f.style.height = q(a.oScroll.sY);
      a.aoDrawCallback.push({
        fn: Ma,
        sName: "scrolling"
      });
      a.oScroll.bInfinite && i(f).scroll(function () {
        if (!a.bDrawing) if (i(this).scrollTop() + i(this).height() > i(a.nTable).height() - a.oScroll.iLoadGap) if (a.fnDisplayEnd() < a.fnRecordsDisplay()) {
          ma(a, "next");
          E(a);
          C(a);
        }
      });
      a.nScrollHead = c;
      a.nScrollFoot = e;
      return b;
    }
    function Ma(a) {
      var b = a.nScrollHead.getElementsByTagName("div")[0],
        c = b.getElementsByTagName("table")[0],
        d = a.nTable.parentNode,
        f,
        e,
        h,
        j,
        k,
        m,
        u,
        r,
        H = [],
        L = a.nTFoot !== null ? a.nScrollFoot.getElementsByTagName("div")[0] : null,
        T = a.nTFoot !== null ? L.getElementsByTagName("table")[0] : null,
        B = i.browser.msie && i.browser.version <= 7;
      h = a.nTable.getElementsByTagName("thead");
      h.length > 0 && a.nTable.removeChild(h[0]);
      if (a.nTFoot !== null) {
        k = a.nTable.getElementsByTagName("tfoot");
        k.length > 0 && a.nTable.removeChild(k[0]);
      }
      h = a.nTHead.cloneNode(true);
      a.nTable.insertBefore(h, a.nTable.childNodes[0]);
      if (a.nTFoot !== null) {
        k = a.nTFoot.cloneNode(true);
        a.nTable.insertBefore(k, a.nTable.childNodes[1]);
      }
      if (a.oScroll.sX === "") {
        d.style.width = "100%";
        b.parentNode.style.width = "100%";
      }
      var U = S(a, h);
      f = 0;
      for (e = U.length; f < e; f++) {
        u = Na(a, f);
        U[f].style.width = a.aoColumns[u].sWidth;
      }
      a.nTFoot !== null && P(function (I) {
        I.style.width = "";
      }, k.getElementsByTagName("tr"));
      f = i(a.nTable).outerWidth();
      if (a.oScroll.sX === "") {
        a.nTable.style.width = "100%";
        if (B && (d.scrollHeight > d.offsetHeight || i(d).css("overflow-y") == "scroll")) a.nTable.style.width = q(i(a.nTable).outerWidth() - a.oScroll.iBarWidth);
      } else if (a.oScroll.sXInner !== "") a.nTable.style.width = q(a.oScroll.sXInner);else if (f == i(d).width() && i(d).height() < i(a.nTable).height()) {
        a.nTable.style.width = q(f - a.oScroll.iBarWidth);
        if (i(a.nTable).outerWidth() > f - a.oScroll.iBarWidth) a.nTable.style.width = q(f);
      } else a.nTable.style.width = q(f);
      f = i(a.nTable).outerWidth();
      e = a.nTHead.getElementsByTagName("tr");
      h = h.getElementsByTagName("tr");
      P(function (I, na) {
        m = I.style;
        m.paddingTop = "0";
        m.paddingBottom = "0";
        m.borderTopWidth = "0";
        m.borderBottomWidth = "0";
        m.height = 0;
        r = i(I).width();
        na.style.width = q(r);
        H.push(r);
      }, h, e);
      i(h).height(0);
      if (a.nTFoot !== null) {
        j = k.getElementsByTagName("tr");
        k = a.nTFoot.getElementsByTagName("tr");
        P(function (I, na) {
          m = I.style;
          m.paddingTop = "0";
          m.paddingBottom = "0";
          m.borderTopWidth = "0";
          m.borderBottomWidth = "0";
          m.height = 0;
          r = i(I).width();
          na.style.width = q(r);
          H.push(r);
        }, j, k);
        i(j).height(0);
      }
      P(function (I) {
        I.innerHTML = "";
        I.style.width = q(H.shift());
      }, h);
      a.nTFoot !== null && P(function (I) {
        I.innerHTML = "";
        I.style.width = q(H.shift());
      }, j);
      if (i(a.nTable).outerWidth() < f) {
        j = d.scrollHeight > d.offsetHeight || i(d).css("overflow-y") == "scroll" ? f + a.oScroll.iBarWidth : f;
        if (B && (d.scrollHeight > d.offsetHeight || i(d).css("overflow-y") == "scroll")) a.nTable.style.width = q(j - a.oScroll.iBarWidth);
        d.style.width = q(j);
        b.parentNode.style.width = q(j);
        if (a.nTFoot !== null) L.parentNode.style.width = q(j);
        if (a.oScroll.sX === "") J(a, 1, "The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width.");else a.oScroll.sXInner !== "" && J(a, 1, "The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation");
      } else {
        d.style.width = q("100%");
        b.parentNode.style.width = q("100%");
        if (a.nTFoot !== null) L.parentNode.style.width = q("100%");
      }
      if (a.oScroll.sY === "") if (B) d.style.height = q(a.nTable.offsetHeight + a.oScroll.iBarWidth);
      if (a.oScroll.sY !== "" && a.oScroll.bCollapse) {
        d.style.height = q(a.oScroll.sY);
        B = a.oScroll.sX !== "" && a.nTable.offsetWidth > d.offsetWidth ? a.oScroll.iBarWidth : 0;
        if (a.nTable.offsetHeight < d.offsetHeight) d.style.height = q(i(a.nTable).height() + B);
      }
      B = i(a.nTable).outerWidth();
      c.style.width = q(B);
      b.style.width = q(B + a.oScroll.iBarWidth);
      if (a.nTFoot !== null) {
        L.style.width = q(a.nTable.offsetWidth + a.oScroll.iBarWidth);
        T.style.width = q(a.nTable.offsetWidth);
      }
      if (a.bSorted || a.bFiltered) d.scrollTop = 0;
    }
    function ea(a) {
      if (a.oFeatures.bAutoWidth === false) return false;
      ga(a);
      for (var b = 0, c = a.aoColumns.length; b < c; b++) a.aoColumns[b].nTh.style.width = a.aoColumns[b].sWidth;
    }
    function Ha(a) {
      var b = a.oLanguage.sSearch;
      b = b.indexOf("_INPUT_") !== -1 ? b.replace("_INPUT_", '<input type="text" />') : b === "" ? '<input type="text" />' : b + ' <input type="text" />';
      var c = p.createElement("div");
      c.className = a.oClasses.sFilter;
      c.innerHTML = "<label>" + b + "</label>";
      a.sTableId !== "" && typeof a.aanFeatures.f == "undefined" && c.setAttribute("id", a.sTableId + "_filter");
      b = i("input", c);
      b.val(a.oPreviousSearch.sSearch.replace('"', "&quot;"));
      b.bind("keyup.DT", function () {
        for (var d = a.aanFeatures.f, f = 0, e = d.length; f < e; f++) d[f] != i(this).parents("div.dataTables_filter")[0] && i("input", d[f]).val(this.value);
        this.value != a.oPreviousSearch.sSearch && N(a, {
          sSearch: this.value,
          bRegex: a.oPreviousSearch.bRegex,
          bSmart: a.oPreviousSearch.bSmart
        });
      });
      b.bind("keypress.DT", function (d) {
        if (d.keyCode == 13) return false;
      });
      return c;
    }
    function N(a, b, c) {
      Oa(a, b.sSearch, c, b.bRegex, b.bSmart);
      for (b = 0; b < a.aoPreSearchCols.length; b++) Pa(a, a.aoPreSearchCols[b].sSearch, b, a.aoPreSearchCols[b].bRegex, a.aoPreSearchCols[b].bSmart);
      n.afnFiltering.length !== 0 && Qa(a);
      a.bFiltered = true;
      i(a.oInstance).trigger("filter", a);
      a._iDisplayStart = 0;
      E(a);
      C(a);
      oa(a, 0);
    }
    function Qa(a) {
      for (var b = n.afnFiltering, c = 0, d = b.length; c < d; c++) for (var f = 0, e = 0, h = a.aiDisplay.length; e < h; e++) {
        var j = a.aiDisplay[e - f];
        if (!b[c](a, fa(a, j, "filter"), j)) {
          a.aiDisplay.splice(e - f, 1);
          f++;
        }
      }
    }
    function Pa(a, b, c, d, f) {
      if (b !== "") {
        var e = 0;
        b = pa(b, d, f);
        for (d = a.aiDisplay.length - 1; d >= 0; d--) {
          f = qa(G(a, a.aiDisplay[d], c, "filter"), a.aoColumns[c].sType);
          if (!b.test(f)) {
            a.aiDisplay.splice(d, 1);
            e++;
          }
        }
      }
    }
    function Oa(a, b, c, d, f) {
      var e = pa(b, d, f);
      if (typeof c == "undefined" || c === null) c = 0;
      if (n.afnFiltering.length !== 0) c = 1;
      if (b.length <= 0) {
        a.aiDisplay.splice(0, a.aiDisplay.length);
        a.aiDisplay = a.aiDisplayMaster.slice();
      } else if (a.aiDisplay.length == a.aiDisplayMaster.length || a.oPreviousSearch.sSearch.length > b.length || c == 1 || b.indexOf(a.oPreviousSearch.sSearch) !== 0) {
        a.aiDisplay.splice(0, a.aiDisplay.length);
        oa(a, 1);
        for (c = 0; c < a.aiDisplayMaster.length; c++) e.test(a.asDataSearch[c]) && a.aiDisplay.push(a.aiDisplayMaster[c]);
      } else {
        var h = 0;
        for (c = 0; c < a.asDataSearch.length; c++) if (!e.test(a.asDataSearch[c])) {
          a.aiDisplay.splice(c - h, 1);
          h++;
        }
      }
      a.oPreviousSearch.sSearch = b;
      a.oPreviousSearch.bRegex = d;
      a.oPreviousSearch.bSmart = f;
    }
    function oa(a, b) {
      if (!a.oFeatures.bServerSide) {
        a.asDataSearch.splice(0, a.asDataSearch.length);
        b = typeof b != "undefined" && b == 1 ? a.aiDisplayMaster : a.aiDisplay;
        for (var c = 0, d = b.length; c < d; c++) a.asDataSearch[c] = ra(a, fa(a, b[c], "filter"));
      }
    }
    function ra(a, b) {
      var c = "";
      if (typeof a.__nTmpFilter == "undefined") a.__nTmpFilter = p.createElement("div");
      for (var d = a.__nTmpFilter, f = 0, e = a.aoColumns.length; f < e; f++) if (a.aoColumns[f].bSearchable) c += qa(b[f], a.aoColumns[f].sType) + "  ";
      if (c.indexOf("&") !== -1) {
        d.innerHTML = c;
        c = d.textContent ? d.textContent : d.innerText;
        c = c.replace(/\n/g, " ").replace(/\r/g, "");
      }
      return c;
    }
    function pa(a, b, c) {
      if (c) {
        a = b ? a.split(" ") : sa(a).split(" ");
        a = "^(?=.*?" + a.join(")(?=.*?") + ").*$";
        return new RegExp(a, "i");
      } else {
        a = b ? a : sa(a);
        return new RegExp(a, "i");
      }
    }
    function qa(a, b) {
      if (typeof n.ofnSearch[b] == "function") return n.ofnSearch[b](a);else if (b == "html") return a.replace(/\n/g, " ").replace(/<.*?>/g, "");else if (typeof a == "string") return a.replace(/\n/g, " ");else if (a === null) return "";
      return a;
    }
    function R(a, b) {
      var c,
        d,
        f,
        e,
        h = [],
        j = [],
        k = n.oSort;
      d = a.aoData;
      var m = a.aoColumns;
      if (!a.oFeatures.bServerSide && (a.aaSorting.length !== 0 || a.aaSortingFixed !== null)) {
        h = a.aaSortingFixed !== null ? a.aaSortingFixed.concat(a.aaSorting) : a.aaSorting.slice();
        for (c = 0; c < h.length; c++) {
          var u = h[c][0];
          f = ta(a, u);
          e = a.aoColumns[u].sSortDataType;
          if (typeof n.afnSortData[e] != "undefined") {
            var r = n.afnSortData[e](a, u, f);
            f = 0;
            for (e = d.length; f < e; f++) O(a, f, u, r[f]);
          }
        }
        c = 0;
        for (d = a.aiDisplayMaster.length; c < d; c++) j[a.aiDisplayMaster[c]] = c;
        var H = h.length;
        a.aiDisplayMaster.sort(function (L, T) {
          var B, U;
          for (c = 0; c < H; c++) {
            B = m[h[c][0]].iDataSort;
            U = m[B].sType;
            B = k[(U ? U : "string") + "-" + h[c][1]](G(a, L, B, "sort"), G(a, T, B, "sort"));
            if (B !== 0) return B;
          }
          return k["numeric-asc"](j[L], j[T]);
        });
      }
      if ((typeof b == "undefined" || b) && !a.oFeatures.bDeferRender) V(a);
      a.bSorted = true;
      i(a.oInstance).trigger("sort", a);
      if (a.oFeatures.bFilter) N(a, a.oPreviousSearch, 1);else {
        a.aiDisplay = a.aiDisplayMaster.slice();
        a._iDisplayStart = 0;
        E(a);
        C(a);
      }
    }
    function ja(a, b, c, d) {
      i(b).bind("click.DT", function (f) {
        if (a.aoColumns[c].bSortable !== false) {
          var e = function e() {
            var h, j;
            if (f.shiftKey) {
              for (var k = false, m = 0; m < a.aaSorting.length; m++) if (a.aaSorting[m][0] == c) {
                k = true;
                h = a.aaSorting[m][0];
                j = a.aaSorting[m][2] + 1;
                if (typeof a.aoColumns[h].asSorting[j] == "undefined") a.aaSorting.splice(m, 1);else {
                  a.aaSorting[m][1] = a.aoColumns[h].asSorting[j];
                  a.aaSorting[m][2] = j;
                }
                break;
              }
              k === false && a.aaSorting.push([c, a.aoColumns[c].asSorting[0], 0]);
            } else if (a.aaSorting.length == 1 && a.aaSorting[0][0] == c) {
              h = a.aaSorting[0][0];
              j = a.aaSorting[0][2] + 1;
              if (typeof a.aoColumns[h].asSorting[j] == "undefined") j = 0;
              a.aaSorting[0][1] = a.aoColumns[h].asSorting[j];
              a.aaSorting[0][2] = j;
            } else {
              a.aaSorting.splice(0, a.aaSorting.length);
              a.aaSorting.push([c, a.aoColumns[c].asSorting[0], 0]);
            }
            R(a);
          };
          if (a.oFeatures.bProcessing) {
            K(a, true);
            setTimeout(function () {
              e();
              a.oFeatures.bServerSide || K(a, false);
            }, 0);
          } else e();
          typeof d == "function" && d(a);
        }
      });
    }
    function V(a) {
      var b,
        c,
        d,
        f,
        e,
        h = a.aoColumns.length,
        j = a.oClasses;
      for (b = 0; b < h; b++) a.aoColumns[b].bSortable && i(a.aoColumns[b].nTh).removeClass(j.sSortAsc + " " + j.sSortDesc + " " + a.aoColumns[b].sSortingClass);
      f = a.aaSortingFixed !== null ? a.aaSortingFixed.concat(a.aaSorting) : a.aaSorting.slice();
      for (b = 0; b < a.aoColumns.length; b++) if (a.aoColumns[b].bSortable) {
        e = a.aoColumns[b].sSortingClass;
        d = -1;
        for (c = 0; c < f.length; c++) if (f[c][0] == b) {
          e = f[c][1] == "asc" ? j.sSortAsc : j.sSortDesc;
          d = c;
          break;
        }
        i(a.aoColumns[b].nTh).addClass(e);
        if (a.bJUI) {
          c = i("span", a.aoColumns[b].nTh);
          c.removeClass(j.sSortJUIAsc + " " + j.sSortJUIDesc + " " + j.sSortJUI + " " + j.sSortJUIAscAllowed + " " + j.sSortJUIDescAllowed);
          c.addClass(d == -1 ? a.aoColumns[b].sSortingClassJUI : f[d][1] == "asc" ? j.sSortJUIAsc : j.sSortJUIDesc);
        }
      } else i(a.aoColumns[b].nTh).addClass(a.aoColumns[b].sSortingClass);
      e = j.sSortColumn;
      if (a.oFeatures.bSort && a.oFeatures.bSortClasses) {
        d = Q(a);
        if (a.oFeatures.bDeferRender) i(d).removeClass(e + "1 " + e + "2 " + e + "3");else if (d.length >= h) for (b = 0; b < h; b++) if (d[b].className.indexOf(e + "1") != -1) {
          c = 0;
          for (a = d.length / h; c < a; c++) d[h * c + b].className = i.trim(d[h * c + b].className.replace(e + "1", ""));
        } else if (d[b].className.indexOf(e + "2") != -1) {
          c = 0;
          for (a = d.length / h; c < a; c++) d[h * c + b].className = i.trim(d[h * c + b].className.replace(e + "2", ""));
        } else if (d[b].className.indexOf(e + "3") != -1) {
          c = 0;
          for (a = d.length / h; c < a; c++) d[h * c + b].className = i.trim(d[h * c + b].className.replace(" " + e + "3", ""));
        }
        j = 1;
        var k;
        for (b = 0; b < f.length; b++) {
          k = parseInt(f[b][0], 10);
          c = 0;
          for (a = d.length / h; c < a; c++) d[h * c + k].className += " " + e + j;
          j < 3 && j++;
        }
      }
    }
    function La(a) {
      if (a.oScroll.bInfinite) return null;
      var b = p.createElement("div");
      b.className = a.oClasses.sPaging + a.sPaginationType;
      n.oPagination[a.sPaginationType].fnInit(a, b, function (c) {
        E(c);
        C(c);
      });
      typeof a.aanFeatures.p == "undefined" && a.aoDrawCallback.push({
        fn: function fn(c) {
          n.oPagination[c.sPaginationType].fnUpdate(c, function (d) {
            E(d);
            C(d);
          });
        },
        sName: "pagination"
      });
      return b;
    }
    function ma(a, b) {
      var c = a._iDisplayStart;
      if (b == "first") a._iDisplayStart = 0;else if (b == "previous") {
        a._iDisplayStart = a._iDisplayLength >= 0 ? a._iDisplayStart - a._iDisplayLength : 0;
        if (a._iDisplayStart < 0) a._iDisplayStart = 0;
      } else if (b == "next") {
        if (a._iDisplayLength >= 0) {
          if (a._iDisplayStart + a._iDisplayLength < a.fnRecordsDisplay()) a._iDisplayStart += a._iDisplayLength;
        } else a._iDisplayStart = 0;
      } else if (b == "last") {
        if (a._iDisplayLength >= 0) {
          b = parseInt((a.fnRecordsDisplay() - 1) / a._iDisplayLength, 10) + 1;
          a._iDisplayStart = (b - 1) * a._iDisplayLength;
        } else a._iDisplayStart = 0;
      } else J(a, 0, "Unknown paging action: " + b);
      i(a.oInstance).trigger("page", a);
      return c != a._iDisplayStart;
    }
    function Ka(a) {
      var b = p.createElement("div");
      b.className = a.oClasses.sInfo;
      if (typeof a.aanFeatures.i == "undefined") {
        a.aoDrawCallback.push({
          fn: Ra,
          sName: "information"
        });
        a.sTableId !== "" && b.setAttribute("id", a.sTableId + "_info");
      }
      return b;
    }
    function Ra(a) {
      if (!(!a.oFeatures.bInfo || a.aanFeatures.i.length === 0)) {
        var b = a._iDisplayStart + 1,
          c = a.fnDisplayEnd(),
          d = a.fnRecordsTotal(),
          f = a.fnRecordsDisplay(),
          e = a.fnFormatNumber(b),
          h = a.fnFormatNumber(c),
          j = a.fnFormatNumber(d),
          k = a.fnFormatNumber(f);
        if (a.oScroll.bInfinite) e = a.fnFormatNumber(1);
        e = a.fnRecordsDisplay() === 0 && a.fnRecordsDisplay() == a.fnRecordsTotal() ? a.oLanguage.sInfoEmpty + a.oLanguage.sInfoPostFix : a.fnRecordsDisplay() === 0 ? a.oLanguage.sInfoEmpty + " " + a.oLanguage.sInfoFiltered.replace("_MAX_", j) + a.oLanguage.sInfoPostFix : a.fnRecordsDisplay() == a.fnRecordsTotal() ? a.oLanguage.sInfo.replace("_START_", e).replace("_END_", h).replace("_TOTAL_", k) + a.oLanguage.sInfoPostFix : a.oLanguage.sInfo.replace("_START_", e).replace("_END_", h).replace("_TOTAL_", k) + " " + a.oLanguage.sInfoFiltered.replace("_MAX_", a.fnFormatNumber(a.fnRecordsTotal())) + a.oLanguage.sInfoPostFix;
        if (a.oLanguage.fnInfoCallback !== null) e = a.oLanguage.fnInfoCallback(a, b, c, d, f, e);
        a = a.aanFeatures.i;
        b = 0;
        for (c = a.length; b < c; b++) i(a[b]).html(e);
      }
    }
    function Ga(a) {
      if (a.oScroll.bInfinite) return null;
      var b = '<select size="1" ' + (a.sTableId === "" ? "" : 'name="' + a.sTableId + '_length"') + ">",
        c,
        d;
      if (a.aLengthMenu.length == 2 && _typeof(a.aLengthMenu[0]) == "object" && _typeof(a.aLengthMenu[1]) == "object") {
        c = 0;
        for (d = a.aLengthMenu[0].length; c < d; c++) b += '<option value="' + a.aLengthMenu[0][c] + '">' + a.aLengthMenu[1][c] + "</option>";
      } else {
        c = 0;
        for (d = a.aLengthMenu.length; c < d; c++) b += '<option value="' + a.aLengthMenu[c] + '">' + a.aLengthMenu[c] + "</option>";
      }
      b += "</select>";
      var f = p.createElement("div");
      a.sTableId !== "" && typeof a.aanFeatures.l == "undefined" && f.setAttribute("id", a.sTableId + "_length");
      f.className = a.oClasses.sLength;
      f.innerHTML = "<label>" + a.oLanguage.sLengthMenu.replace("_MENU_", b) + "</label>";
      i('select option[value="' + a._iDisplayLength + '"]', f).attr("selected", true);
      i("select", f).bind("change.DT", function () {
        var e = i(this).val(),
          h = a.aanFeatures.l;
        c = 0;
        for (d = h.length; c < d; c++) h[c] != this.parentNode && i("select", h[c]).val(e);
        a._iDisplayLength = parseInt(e, 10);
        E(a);
        if (a.fnDisplayEnd() == a.fnRecordsDisplay()) {
          a._iDisplayStart = a.fnDisplayEnd() - a._iDisplayLength;
          if (a._iDisplayStart < 0) a._iDisplayStart = 0;
        }
        if (a._iDisplayLength == -1) a._iDisplayStart = 0;
        C(a);
      });
      return f;
    }
    function Ia(a) {
      var b = p.createElement("div");
      a.sTableId !== "" && typeof a.aanFeatures.r == "undefined" && b.setAttribute("id", a.sTableId + "_processing");
      b.innerHTML = a.oLanguage.sProcessing;
      b.className = a.oClasses.sProcessing;
      a.nTable.parentNode.insertBefore(b, a.nTable);
      return b;
    }
    function K(a, b) {
      if (a.oFeatures.bProcessing) {
        a = a.aanFeatures.r;
        for (var c = 0, d = a.length; c < d; c++) a[c].style.visibility = b ? "visible" : "hidden";
      }
    }
    function Na(a, b) {
      for (var c = -1, d = 0; d < a.aoColumns.length; d++) {
        a.aoColumns[d].bVisible === true && c++;
        if (c == b) return d;
      }
      return null;
    }
    function ta(a, b) {
      for (var c = -1, d = 0; d < a.aoColumns.length; d++) {
        a.aoColumns[d].bVisible === true && c++;
        if (d == b) return a.aoColumns[d].bVisible === true ? c : null;
      }
      return null;
    }
    function W(a, b) {
      var c, d;
      c = a._iDisplayStart;
      for (d = a._iDisplayEnd; c < d; c++) if (a.aoData[a.aiDisplay[c]].nTr == b) return a.aiDisplay[c];
      c = 0;
      for (d = a.aoData.length; c < d; c++) if (a.aoData[c].nTr == b) return c;
      return null;
    }
    function Z(a) {
      for (var b = 0, c = 0; c < a.aoColumns.length; c++) a.aoColumns[c].bVisible === true && b++;
      return b;
    }
    function E(a) {
      a._iDisplayEnd = a.oFeatures.bPaginate === false ? a.aiDisplay.length : a._iDisplayStart + a._iDisplayLength > a.aiDisplay.length || a._iDisplayLength == -1 ? a.aiDisplay.length : a._iDisplayStart + a._iDisplayLength;
    }
    function Sa(a, b) {
      if (!a || a === null || a === "") return 0;
      if (typeof b == "undefined") b = p.getElementsByTagName("body")[0];
      var c = p.createElement("div");
      c.style.width = q(a);
      b.appendChild(c);
      a = c.offsetWidth;
      b.removeChild(c);
      return a;
    }
    function ga(a) {
      var b = 0,
        c,
        d = 0,
        f = a.aoColumns.length,
        e,
        h = i("th", a.nTHead);
      for (e = 0; e < f; e++) if (a.aoColumns[e].bVisible) {
        d++;
        if (a.aoColumns[e].sWidth !== null) {
          c = Sa(a.aoColumns[e].sWidthOrig, a.nTable.parentNode);
          if (c !== null) a.aoColumns[e].sWidth = q(c);
          b++;
        }
      }
      if (f == h.length && b === 0 && d == f && a.oScroll.sX === "" && a.oScroll.sY === "") for (e = 0; e < a.aoColumns.length; e++) {
        c = i(h[e]).width();
        if (c !== null) a.aoColumns[e].sWidth = q(c);
      } else {
        b = a.nTable.cloneNode(false);
        e = a.nTHead.cloneNode(true);
        d = p.createElement("tbody");
        c = p.createElement("tr");
        b.removeAttribute("id");
        b.appendChild(e);
        if (a.nTFoot !== null) {
          b.appendChild(a.nTFoot.cloneNode(true));
          P(function (k) {
            k.style.width = "";
          }, b.getElementsByTagName("tr"));
        }
        b.appendChild(d);
        d.appendChild(c);
        d = i("thead th", b);
        if (d.length === 0) d = i("tbody tr:eq(0)>td", b);
        h = S(a, e);
        for (e = d = 0; e < f; e++) {
          var j = a.aoColumns[e];
          if (j.bVisible && j.sWidthOrig !== null && j.sWidthOrig !== "") h[e - d].style.width = q(j.sWidthOrig);else if (j.bVisible) h[e - d].style.width = "";else d++;
        }
        for (e = 0; e < f; e++) if (a.aoColumns[e].bVisible) {
          d = Ta(a, e);
          if (d !== null) {
            d = d.cloneNode(true);
            if (a.aoColumns[e].sContentPadding !== "") d.innerHTML += a.aoColumns[e].sContentPadding;
            c.appendChild(d);
          }
        }
        f = a.nTable.parentNode;
        f.appendChild(b);
        if (a.oScroll.sX !== "" && a.oScroll.sXInner !== "") b.style.width = q(a.oScroll.sXInner);else if (a.oScroll.sX !== "") {
          b.style.width = "";
          if (i(b).width() < f.offsetWidth) b.style.width = q(f.offsetWidth);
        } else if (a.oScroll.sY !== "") b.style.width = q(f.offsetWidth);
        b.style.visibility = "hidden";
        Ua(a, b);
        f = i("tbody tr:eq(0)", b).children();
        if (f.length === 0) f = S(a, i("thead", b)[0]);
        if (a.oScroll.sX !== "") {
          for (e = d = c = 0; e < a.aoColumns.length; e++) if (a.aoColumns[e].bVisible) {
            c += a.aoColumns[e].sWidthOrig === null ? i(f[d]).outerWidth() : parseInt(a.aoColumns[e].sWidth.replace("px", ""), 10) + (i(f[d]).outerWidth() - i(f[d]).width());
            d++;
          }
          b.style.width = q(c);
          a.nTable.style.width = q(c);
        }
        for (e = d = 0; e < a.aoColumns.length; e++) if (a.aoColumns[e].bVisible) {
          c = i(f[d]).width();
          if (c !== null && c > 0) a.aoColumns[e].sWidth = q(c);
          d++;
        }
        a.nTable.style.width = q(i(b).outerWidth());
        b.parentNode.removeChild(b);
      }
    }
    function Ua(a, b) {
      if (a.oScroll.sX === "" && a.oScroll.sY !== "") {
        i(b).width();
        b.style.width = q(i(b).outerWidth() - a.oScroll.iBarWidth);
      } else if (a.oScroll.sX !== "") b.style.width = q(i(b).outerWidth());
    }
    function Ta(a, b) {
      var c = Va(a, b);
      if (c < 0) return null;
      if (a.aoData[c].nTr === null) {
        var d = p.createElement("td");
        d.innerHTML = G(a, c, b, "");
        return d;
      }
      return Q(a, c)[b];
    }
    function Va(a, b) {
      for (var c = -1, d = -1, f = 0; f < a.aoData.length; f++) {
        var e = G(a, f, b, "display") + "";
        e = e.replace(/<.*?>/g, "");
        if (e.length > c) {
          c = e.length;
          d = f;
        }
      }
      return d;
    }
    function q(a) {
      if (a === null) return "0px";
      if (typeof a == "number") {
        if (a < 0) return "0px";
        return a + "px";
      }
      var b = a.charCodeAt(a.length - 1);
      if (b < 48 || b > 57) return a;
      return a + "px";
    }
    function Za(a, b) {
      if (a.length != b.length) return 1;
      for (var c = 0; c < a.length; c++) if (a[c] != b[c]) return 2;
      return 0;
    }
    function ia(a) {
      for (var b = n.aTypes, c = b.length, d = 0; d < c; d++) {
        var f = b[d](a);
        if (f !== null) return f;
      }
      return "string";
    }
    function A(a) {
      for (var b = 0; b < D.length; b++) if (D[b].nTable == a) return D[b];
      return null;
    }
    function ca(a) {
      for (var b = [], c = a.aoData.length, d = 0; d < c; d++) b.push(a.aoData[d]._aData);
      return b;
    }
    function ba(a) {
      for (var b = [], c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].nTr !== null && b.push(a.aoData[c].nTr);
      return b;
    }
    function Q(a, b) {
      var c = [],
        d,
        f,
        e,
        h,
        j;
      f = 0;
      var k = a.aoData.length;
      if (typeof b != "undefined") {
        f = b;
        k = b + 1;
      }
      for (f = f; f < k; f++) {
        j = a.aoData[f];
        if (j.nTr !== null) {
          b = [];
          e = 0;
          for (h = j.nTr.childNodes.length; e < h; e++) {
            d = j.nTr.childNodes[e].nodeName.toLowerCase();
            if (d == "td" || d == "th") b.push(j.nTr.childNodes[e]);
          }
          e = d = 0;
          for (h = a.aoColumns.length; e < h; e++) if (a.aoColumns[e].bVisible) c.push(b[e - d]);else {
            c.push(j._anHidden[e]);
            d++;
          }
        }
      }
      return c;
    }
    function sa(a) {
      return a.replace(new RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^)", "g"), "\\$1");
    }
    function ua(a, b) {
      for (var c = -1, d = 0, f = a.length; d < f; d++) if (a[d] == b) c = d;else a[d] > b && a[d]--;
      c != -1 && a.splice(c, 1);
    }
    function Fa(a, b) {
      b = b.split(",");
      for (var c = [], d = 0, f = a.aoColumns.length; d < f; d++) for (var e = 0; e < f; e++) if (a.aoColumns[d].sName == b[e]) {
        c.push(e);
        break;
      }
      return c;
    }
    function ka(a) {
      for (var b = "", c = 0, d = a.aoColumns.length; c < d; c++) b += a.aoColumns[c].sName + ",";
      if (b.length == d) return "";
      return b.slice(0, -1);
    }
    function J(a, b, c) {
      a = a.sTableId === "" ? "DataTables warning: " + c : "DataTables warning (table id = '" + a.sTableId + "'): " + c;
      if (b === 0) {
        if (n.sErrMode == "alert") alert(a);else throw a;
      } else typeof console != "undefined" && typeof console.log != "undefined" && console.log(a);
    }
    function la(a) {
      a.aoData.splice(0, a.aoData.length);
      a.aiDisplayMaster.splice(0, a.aiDisplayMaster.length);
      a.aiDisplay.splice(0, a.aiDisplay.length);
      E(a);
    }
    function va(a) {
      if (!(!a.oFeatures.bStateSave || typeof a.bDestroying != "undefined")) {
        var b,
          c,
          d,
          f = "{";
        f += '"iCreate":' + new Date().getTime() + ",";
        f += '"iStart":' + (a.oScroll.bInfinite ? 0 : a._iDisplayStart) + ",";
        f += '"iEnd":' + (a.oScroll.bInfinite ? a._iDisplayLength : a._iDisplayEnd) + ",";
        f += '"iLength":' + a._iDisplayLength + ",";
        f += '"sFilter":"' + encodeURIComponent(a.oPreviousSearch.sSearch) + '",';
        f += '"sFilterEsc":' + !a.oPreviousSearch.bRegex + ",";
        f += '"aaSorting":[ ';
        for (b = 0; b < a.aaSorting.length; b++) f += "[" + a.aaSorting[b][0] + ',"' + a.aaSorting[b][1] + '"],';
        f = f.substring(0, f.length - 1);
        f += "],";
        f += '"aaSearchCols":[ ';
        for (b = 0; b < a.aoPreSearchCols.length; b++) f += '["' + encodeURIComponent(a.aoPreSearchCols[b].sSearch) + '",' + !a.aoPreSearchCols[b].bRegex + "],";
        f = f.substring(0, f.length - 1);
        f += "],";
        f += '"abVisCols":[ ';
        for (b = 0; b < a.aoColumns.length; b++) f += a.aoColumns[b].bVisible + ",";
        f = f.substring(0, f.length - 1);
        f += "]";
        b = 0;
        for (c = a.aoStateSave.length; b < c; b++) {
          d = a.aoStateSave[b].fn(a, f);
          if (d !== "") f = d;
        }
        f += "}";
        Wa(a.sCookiePrefix + a.sInstance, f, a.iCookieDuration, a.sCookiePrefix, a.fnCookieCallback);
      }
    }
    function Xa(a, b) {
      if (a.oFeatures.bStateSave) {
        var c, d, f;
        d = wa(a.sCookiePrefix + a.sInstance);
        if (d !== null && d !== "") {
          try {
            c = typeof i.parseJSON == "function" ? i.parseJSON(d.replace(/'/g, '"')) : eval("(" + d + ")");
          } catch (e) {
            return;
          }
          d = 0;
          for (f = a.aoStateLoad.length; d < f; d++) if (!a.aoStateLoad[d].fn(a, c)) return;
          a.oLoadedState = i.extend(true, {}, c);
          a._iDisplayStart = c.iStart;
          a.iInitDisplayStart = c.iStart;
          a._iDisplayEnd = c.iEnd;
          a._iDisplayLength = c.iLength;
          a.oPreviousSearch.sSearch = decodeURIComponent(c.sFilter);
          a.aaSorting = c.aaSorting.slice();
          a.saved_aaSorting = c.aaSorting.slice();
          if (typeof c.sFilterEsc != "undefined") a.oPreviousSearch.bRegex = !c.sFilterEsc;
          if (typeof c.aaSearchCols != "undefined") for (d = 0; d < c.aaSearchCols.length; d++) a.aoPreSearchCols[d] = {
            sSearch: decodeURIComponent(c.aaSearchCols[d][0]),
            bRegex: !c.aaSearchCols[d][1]
          };
          if (typeof c.abVisCols != "undefined") {
            b.saved_aoColumns = [];
            for (d = 0; d < c.abVisCols.length; d++) {
              b.saved_aoColumns[d] = {};
              b.saved_aoColumns[d].bVisible = c.abVisCols[d];
            }
          }
        }
      }
    }
    function Wa(a, b, c, d, f) {
      var e = new Date();
      e.setTime(e.getTime() + c * 1E3);
      c = za.location.pathname.split("/");
      a = a + "_" + c.pop().replace(/[\/:]/g, "").toLowerCase();
      var h;
      if (f !== null) {
        h = typeof i.parseJSON == "function" ? i.parseJSON(b) : eval("(" + b + ")");
        b = f(a, h, e.toGMTString(), c.join("/") + "/");
      } else b = a + "=" + encodeURIComponent(b) + "; expires=" + e.toGMTString() + "; path=" + c.join("/") + "/";
      f = "";
      e = 9999999999999;
      if ((wa(a) !== null ? p.cookie.length : b.length + p.cookie.length) + 10 > 4096) {
        a = p.cookie.split(";");
        for (var j = 0, k = a.length; j < k; j++) if (a[j].indexOf(d) != -1) {
          var m = a[j].split("=");
          try {
            h = eval("(" + decodeURIComponent(m[1]) + ")");
          } catch (u) {
            continue;
          }
          if (typeof h.iCreate != "undefined" && h.iCreate < e) {
            f = m[0];
            e = h.iCreate;
          }
        }
        if (f !== "") p.cookie = f + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + c.join("/") + "/";
      }
      p.cookie = b;
    }
    function wa(a) {
      var b = za.location.pathname.split("/");
      a = a + "_" + b[b.length - 1].replace(/[\/:]/g, "").toLowerCase() + "=";
      b = p.cookie.split(";");
      for (var c = 0; c < b.length; c++) {
        for (var d = b[c]; d.charAt(0) == " ";) d = d.substring(1, d.length);
        if (d.indexOf(a) === 0) return decodeURIComponent(d.substring(a.length, d.length));
      }
      return null;
    }
    function Y(a, b) {
      b = i(b).children("tr");
      var c,
        d,
        f,
        e,
        h,
        j,
        k,
        m,
        u = function u(L, T, B) {
          for (; typeof L[T][B] != "undefined";) B++;
          return B;
        };
      a.splice(0, a.length);
      d = 0;
      for (j = b.length; d < j; d++) a.push([]);
      d = 0;
      for (j = b.length; d < j; d++) {
        f = 0;
        for (k = b[d].childNodes.length; f < k; f++) {
          c = b[d].childNodes[f];
          if (c.nodeName.toUpperCase() == "TD" || c.nodeName.toUpperCase() == "TH") {
            var r = c.getAttribute("colspan") * 1,
              H = c.getAttribute("rowspan") * 1;
            r = !r || r === 0 || r === 1 ? 1 : r;
            H = !H || H === 0 || H === 1 ? 1 : H;
            m = u(a, d, 0);
            for (h = 0; h < r; h++) for (e = 0; e < H; e++) {
              a[d + e][m + h] = {
                cell: c,
                unique: r == 1 ? true : false
              };
              a[d + e].nTr = b[d];
            }
          }
        }
      }
    }
    function S(a, b, c) {
      var d = [];
      if (typeof c == "undefined") {
        c = a.aoHeader;
        if (typeof b != "undefined") {
          c = [];
          Y(c, b);
        }
      }
      b = 0;
      for (var f = c.length; b < f; b++) for (var e = 0, h = c[b].length; e < h; e++) if (c[b][e].unique && (typeof d[e] == "undefined" || !a.bSortCellsTop)) d[e] = c[b][e].cell;
      return d;
    }
    function Ya() {
      var a = p.createElement("p"),
        b = a.style;
      b.width = "100%";
      b.height = "200px";
      b.padding = "0px";
      var c = p.createElement("div");
      b = c.style;
      b.position = "absolute";
      b.top = "0px";
      b.left = "0px";
      b.visibility = "hidden";
      b.width = "200px";
      b.height = "150px";
      b.padding = "0px";
      b.overflow = "hidden";
      c.appendChild(a);
      p.body.appendChild(c);
      b = a.offsetWidth;
      c.style.overflow = "scroll";
      a = a.offsetWidth;
      if (b == a) a = c.clientWidth;
      p.body.removeChild(c);
      return b - a;
    }
    function P(a, b, c) {
      for (var d = 0, f = b.length; d < f; d++) for (var e = 0, h = b[d].childNodes.length; e < h; e++) if (b[d].childNodes[e].nodeType == 1) typeof c != "undefined" ? a(b[d].childNodes[e], c[d].childNodes[e]) : a(b[d].childNodes[e]);
    }
    function o(a, b, c, d) {
      if (typeof d == "undefined") d = c;
      if (typeof b[c] != "undefined") a[d] = b[c];
    }
    function fa(a, b, c) {
      for (var d = [], f = 0, e = a.aoColumns.length; f < e; f++) d.push(G(a, b, f, c));
      return d;
    }
    function G(a, b, c, d) {
      var f = a.aoColumns[c];
      if ((c = f.fnGetData(a.aoData[b]._aData)) === undefined) {
        if (a.iDrawError != a.iDraw && f.sDefaultContent === null) {
          J(a, 0, "Requested unknown parameter '" + f.mDataProp + "' from the data source for row " + b);
          a.iDrawError = a.iDraw;
        }
        return f.sDefaultContent;
      }
      if (c === null && f.sDefaultContent !== null) c = f.sDefaultContent;else if (typeof c == "function") return c();
      if (d == "display" && c === null) return "";
      return c;
    }
    function O(a, b, c, d) {
      a.aoColumns[c].fnSetData(a.aoData[b]._aData, d);
    }
    function aa(a) {
      if (a === null) return function () {
        return null;
      };else if (typeof a == "function") return function (c) {
        return a(c);
      };else if (typeof a == "string" && a.indexOf(".") != -1) {
        var b = a.split(".");
        return b.length == 2 ? function (c) {
          return c[b[0]][b[1]];
        } : b.length == 3 ? function (c) {
          return c[b[0]][b[1]][b[2]];
        } : function (c) {
          for (var d = 0, f = b.length; d < f; d++) c = c[b[d]];
          return c;
        };
      } else return function (c) {
        return c[a];
      };
    }
    function Ba(a) {
      if (a === null) return function () {};else if (typeof a == "function") return function (c, d) {
        return a(c, d);
      };else if (typeof a == "string" && a.indexOf(".") != -1) {
        var b = a.split(".");
        return b.length == 2 ? function (c, d) {
          c[b[0]][b[1]] = d;
        } : b.length == 3 ? function (c, d) {
          c[b[0]][b[1]][b[2]] = d;
        } : function (c, d) {
          for (var f = 0, e = b.length - 1; f < e; f++) c = c[b[f]];
          c[b[b.length - 1]] = d;
        };
      } else return function (c, d) {
        c[a] = d;
      };
    }
    this.oApi = {};
    this.fnDraw = function (a) {
      var b = A(this[n.iApiIndex]);
      if (typeof a != "undefined" && a === false) {
        E(b);
        C(b);
      } else da(b);
    };
    this.fnFilter = function (a, b, c, d, f) {
      var e = A(this[n.iApiIndex]);
      if (e.oFeatures.bFilter) {
        if (typeof c == "undefined") c = false;
        if (typeof d == "undefined") d = true;
        if (typeof f == "undefined") f = true;
        if (typeof b == "undefined" || b === null) {
          N(e, {
            sSearch: a,
            bRegex: c,
            bSmart: d
          }, 1);
          if (f && typeof e.aanFeatures.f != "undefined") {
            b = e.aanFeatures.f;
            c = 0;
            for (d = b.length; c < d; c++) i("input", b[c]).val(a);
          }
        } else {
          e.aoPreSearchCols[b].sSearch = a;
          e.aoPreSearchCols[b].bRegex = c;
          e.aoPreSearchCols[b].bSmart = d;
          N(e, e.oPreviousSearch, 1);
        }
      }
    };
    this.fnSettings = function () {
      return A(this[n.iApiIndex]);
    };
    this.fnVersionCheck = n.fnVersionCheck;
    this.fnSort = function (a) {
      var b = A(this[n.iApiIndex]);
      b.aaSorting = a;
      R(b);
    };
    this.fnSortListener = function (a, b, c) {
      ja(A(this[n.iApiIndex]), a, b, c);
    };
    this.fnAddData = function (a, b) {
      if (a.length === 0) return [];
      var c = [],
        d,
        f = A(this[n.iApiIndex]);
      if (_typeof(a[0]) == "object") for (var e = 0; e < a.length; e++) {
        d = v(f, a[e]);
        if (d == -1) return c;
        c.push(d);
      } else {
        d = v(f, a);
        if (d == -1) return c;
        c.push(d);
      }
      f.aiDisplay = f.aiDisplayMaster.slice();
      if (typeof b == "undefined" || b) da(f);
      return c;
    };
    this.fnDeleteRow = function (a, b, c) {
      var d = A(this[n.iApiIndex]);
      a = _typeof(a) == "object" ? W(d, a) : a;
      var f = d.aoData.splice(a, 1),
        e = i.inArray(a, d.aiDisplay);
      d.asDataSearch.splice(e, 1);
      ua(d.aiDisplayMaster, a);
      ua(d.aiDisplay, a);
      typeof b == "function" && b.call(this, d, f);
      if (d._iDisplayStart >= d.aiDisplay.length) {
        d._iDisplayStart -= d._iDisplayLength;
        if (d._iDisplayStart < 0) d._iDisplayStart = 0;
      }
      if (typeof c == "undefined" || c) {
        E(d);
        C(d);
      }
      return f;
    };
    this.fnClearTable = function (a) {
      var b = A(this[n.iApiIndex]);
      la(b);
      if (typeof a == "undefined" || a) C(b);
    };
    this.fnOpen = function (a, b, c) {
      var d = A(this[n.iApiIndex]);
      this.fnClose(a);
      var f = p.createElement("tr"),
        e = p.createElement("td");
      f.appendChild(e);
      e.className = c;
      e.colSpan = Z(d);
      if (typeof b.jquery != "undefined" || _typeof(b) == "object") e.appendChild(b);else e.innerHTML = b;
      b = i("tr", d.nTBody);
      i.inArray(a, b) != -1 && i(f).insertAfter(a);
      d.aoOpenRows.push({
        nTr: f,
        nParent: a
      });
      return f;
    };
    this.fnClose = function (a) {
      for (var b = A(this[n.iApiIndex]), c = 0; c < b.aoOpenRows.length; c++) if (b.aoOpenRows[c].nParent == a) {
        (a = b.aoOpenRows[c].nTr.parentNode) && a.removeChild(b.aoOpenRows[c].nTr);
        b.aoOpenRows.splice(c, 1);
        return 0;
      }
      return 1;
    };
    this.fnGetData = function (a, b) {
      var c = A(this[n.iApiIndex]);
      if (typeof a != "undefined") {
        a = _typeof(a) == "object" ? W(c, a) : a;
        if (typeof b != "undefined") return G(c, a, b, "");
        return typeof c.aoData[a] != "undefined" ? c.aoData[a]._aData : null;
      }
      return ca(c);
    };
    this.fnGetNodes = function (a) {
      var b = A(this[n.iApiIndex]);
      if (typeof a != "undefined") return typeof b.aoData[a] != "undefined" ? b.aoData[a].nTr : null;
      return ba(b);
    };
    this.fnGetPosition = function (a) {
      var b = A(this[n.iApiIndex]),
        c = a.nodeName.toUpperCase();
      if (c == "TR") return W(b, a);else if (c == "TD" || c == "TH") {
        c = W(b, a.parentNode);
        for (var d = Q(b, c), f = 0; f < b.aoColumns.length; f++) if (d[f] == a) return [c, ta(b, f), f];
      }
      return null;
    };
    this.fnUpdate = function (a, b, c, d, f) {
      var e = A(this[n.iApiIndex]);
      b = _typeof(b) == "object" ? W(e, b) : b;
      if (i.isArray(a) && _typeof(a) == "object") {
        e.aoData[b]._aData = a.slice();
        for (c = 0; c < e.aoColumns.length; c++) this.fnUpdate(G(e, b, c), b, c, false, false);
      } else if (a !== null && _typeof(a) == "object") {
        e.aoData[b]._aData = i.extend(true, {}, a);
        for (c = 0; c < e.aoColumns.length; c++) this.fnUpdate(G(e, b, c), b, c, false, false);
      } else {
        a = a;
        O(e, b, c, a);
        if (e.aoColumns[c].fnRender !== null) {
          a = e.aoColumns[c].fnRender({
            iDataRow: b,
            iDataColumn: c,
            aData: e.aoData[b]._aData,
            oSettings: e
          });
          e.aoColumns[c].bUseRendered && O(e, b, c, a);
        }
        if (e.aoData[b].nTr !== null) Q(e, b)[c].innerHTML = a;
      }
      c = i.inArray(b, e.aiDisplay);
      e.asDataSearch[c] = ra(e, fa(e, b, "filter"));
      if (typeof f == "undefined" || f) ea(e);
      if (typeof d == "undefined" || d) da(e);
      return 0;
    };
    this.fnSetColumnVis = function (a, b, c) {
      var d = A(this[n.iApiIndex]),
        f,
        e;
      e = d.aoColumns.length;
      var h, j;
      if (d.aoColumns[a].bVisible != b) {
        if (b) {
          for (f = j = 0; f < a; f++) d.aoColumns[f].bVisible && j++;
          j = j >= Z(d);
          if (!j) for (f = a; f < e; f++) if (d.aoColumns[f].bVisible) {
            h = f;
            break;
          }
          f = 0;
          for (e = d.aoData.length; f < e; f++) if (d.aoData[f].nTr !== null) j ? d.aoData[f].nTr.appendChild(d.aoData[f]._anHidden[a]) : d.aoData[f].nTr.insertBefore(d.aoData[f]._anHidden[a], Q(d, f)[h]);
        } else {
          f = 0;
          for (e = d.aoData.length; f < e; f++) if (d.aoData[f].nTr !== null) {
            h = Q(d, f)[a];
            d.aoData[f]._anHidden[a] = h;
            h.parentNode.removeChild(h);
          }
        }
        d.aoColumns[a].bVisible = b;
        M(d, d.aoHeader);
        d.nTFoot && M(d, d.aoFooter);
        f = 0;
        for (e = d.aoOpenRows.length; f < e; f++) d.aoOpenRows[f].nTr.colSpan = Z(d);
        if (typeof c == "undefined" || c) {
          ea(d);
          C(d);
        }
        va(d);
      }
    };
    this.fnPageChange = function (a, b) {
      var c = A(this[n.iApiIndex]);
      ma(c, a);
      E(c);
      if (typeof b == "undefined" || b) C(c);
    };
    this.fnDestroy = function () {
      var a = A(this[n.iApiIndex]),
        b = a.nTableWrapper.parentNode,
        c = a.nTBody,
        d,
        f;
      a.bDestroying = true;
      d = 0;
      for (f = a.aoDestroyCallback.length; d < f; d++) a.aoDestroyCallback[d].fn();
      d = 0;
      for (f = a.aoColumns.length; d < f; d++) a.aoColumns[d].bVisible === false && this.fnSetColumnVis(d, true);
      i(a.nTableWrapper).find("*").andSelf().unbind(".DT");
      i("tbody>tr>td." + a.oClasses.sRowEmpty, a.nTable).parent().remove();
      if (a.nTable != a.nTHead.parentNode) {
        i(a.nTable).children("thead").remove();
        a.nTable.appendChild(a.nTHead);
      }
      if (a.nTFoot && a.nTable != a.nTFoot.parentNode) {
        i(a.nTable).children("tfoot").remove();
        a.nTable.appendChild(a.nTFoot);
      }
      a.nTable.parentNode.removeChild(a.nTable);
      i(a.nTableWrapper).remove();
      a.aaSorting = [];
      a.aaSortingFixed = [];
      V(a);
      i(ba(a)).removeClass(a.asStripeClasses.join(" "));
      if (a.bJUI) {
        i("th", a.nTHead).removeClass([n.oStdClasses.sSortable, n.oJUIClasses.sSortableAsc, n.oJUIClasses.sSortableDesc, n.oJUIClasses.sSortableNone].join(" "));
        i("th span." + n.oJUIClasses.sSortIcon, a.nTHead).remove();
        i("th", a.nTHead).each(function () {
          var e = i("div." + n.oJUIClasses.sSortJUIWrapper, this),
            h = e.contents();
          i(this).append(h);
          e.remove();
        });
      } else i("th", a.nTHead).removeClass([n.oStdClasses.sSortable, n.oStdClasses.sSortableAsc, n.oStdClasses.sSortableDesc, n.oStdClasses.sSortableNone].join(" "));
      a.nTableReinsertBefore ? b.insertBefore(a.nTable, a.nTableReinsertBefore) : b.appendChild(a.nTable);
      d = 0;
      for (f = a.aoData.length; d < f; d++) a.aoData[d].nTr !== null && c.appendChild(a.aoData[d].nTr);
      if (a.oFeatures.bAutoWidth === true) a.nTable.style.width = q(a.sDestroyWidth);
      i(c).children("tr:even").addClass(a.asDestroyStripes[0]);
      i(c).children("tr:odd").addClass(a.asDestroyStripes[1]);
      d = 0;
      for (f = D.length; d < f; d++) D[d] == a && D.splice(d, 1);
      a = null;
    };
    this.fnAdjustColumnSizing = function (a) {
      var b = A(this[n.iApiIndex]);
      ea(b);
      if (typeof a == "undefined" || a) this.fnDraw(false);else if (b.oScroll.sX !== "" || b.oScroll.sY !== "") this.oApi._fnScrollDraw(b);
    };
    for (var xa in n.oApi) if (xa) this[xa] = s(xa);
    this.oApi._fnExternApiFunc = s;
    this.oApi._fnInitialise = t;
    this.oApi._fnInitComplete = w;
    this.oApi._fnLanguageProcess = y;
    this.oApi._fnAddColumn = F;
    this.oApi._fnColumnOptions = x;
    this.oApi._fnAddData = v;
    this.oApi._fnCreateTr = z;
    this.oApi._fnGatherData = $;
    this.oApi._fnBuildHead = X;
    this.oApi._fnDrawHead = M;
    this.oApi._fnDraw = C;
    this.oApi._fnReDraw = da;
    this.oApi._fnAjaxUpdate = Ca;
    this.oApi._fnAjaxParameters = Da;
    this.oApi._fnAjaxUpdateDraw = Ea;
    this.oApi._fnServerParams = ha;
    this.oApi._fnAddOptionsHtml = Aa;
    this.oApi._fnFeatureHtmlTable = Ja;
    this.oApi._fnScrollDraw = Ma;
    this.oApi._fnAdjustColumnSizing = ea;
    this.oApi._fnFeatureHtmlFilter = Ha;
    this.oApi._fnFilterComplete = N;
    this.oApi._fnFilterCustom = Qa;
    this.oApi._fnFilterColumn = Pa;
    this.oApi._fnFilter = Oa;
    this.oApi._fnBuildSearchArray = oa;
    this.oApi._fnBuildSearchRow = ra;
    this.oApi._fnFilterCreateSearch = pa;
    this.oApi._fnDataToSearch = qa;
    this.oApi._fnSort = R;
    this.oApi._fnSortAttachListener = ja;
    this.oApi._fnSortingClasses = V;
    this.oApi._fnFeatureHtmlPaginate = La;
    this.oApi._fnPageChange = ma;
    this.oApi._fnFeatureHtmlInfo = Ka;
    this.oApi._fnUpdateInfo = Ra;
    this.oApi._fnFeatureHtmlLength = Ga;
    this.oApi._fnFeatureHtmlProcessing = Ia;
    this.oApi._fnProcessingDisplay = K;
    this.oApi._fnVisibleToColumnIndex = Na;
    this.oApi._fnColumnIndexToVisible = ta;
    this.oApi._fnNodeToDataIndex = W;
    this.oApi._fnVisbleColumns = Z;
    this.oApi._fnCalculateEnd = E;
    this.oApi._fnConvertToWidth = Sa;
    this.oApi._fnCalculateColumnWidths = ga;
    this.oApi._fnScrollingWidthAdjust = Ua;
    this.oApi._fnGetWidestNode = Ta;
    this.oApi._fnGetMaxLenString = Va;
    this.oApi._fnStringToCss = q;
    this.oApi._fnArrayCmp = Za;
    this.oApi._fnDetectType = ia;
    this.oApi._fnSettingsFromNode = A;
    this.oApi._fnGetDataMaster = ca;
    this.oApi._fnGetTrNodes = ba;
    this.oApi._fnGetTdNodes = Q;
    this.oApi._fnEscapeRegex = sa;
    this.oApi._fnDeleteIndex = ua;
    this.oApi._fnReOrderIndex = Fa;
    this.oApi._fnColumnOrdering = ka;
    this.oApi._fnLog = J;
    this.oApi._fnClearTable = la;
    this.oApi._fnSaveState = va;
    this.oApi._fnLoadState = Xa;
    this.oApi._fnCreateCookie = Wa;
    this.oApi._fnReadCookie = wa;
    this.oApi._fnDetectHeader = Y;
    this.oApi._fnGetUniqueThs = S;
    this.oApi._fnScrollBarWidth = Ya;
    this.oApi._fnApplyToChildren = P;
    this.oApi._fnMap = o;
    this.oApi._fnGetRowData = fa;
    this.oApi._fnGetCellData = G;
    this.oApi._fnSetCellData = O;
    this.oApi._fnGetObjectDataFn = aa;
    this.oApi._fnSetObjectDataFn = Ba;
    var ya = this;
    return this.each(function () {
      var a = 0,
        b,
        c,
        d,
        f;
      a = 0;
      for (b = D.length; a < b; a++) {
        if (D[a].nTable == this) if (typeof g == "undefined" || typeof g.bRetrieve != "undefined" && g.bRetrieve === true) return D[a].oInstance;else if (typeof g.bDestroy != "undefined" && g.bDestroy === true) {
          D[a].oInstance.fnDestroy();
          break;
        } else {
          J(D[a], 0, "Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, please pass either no arguments to the dataTable() function, or set bRetrieve to true. Alternatively, to destory the old table and create a new one, set bDestroy to true (note that a lot of changes to the configuration can be made through the API which is usually much faster).");
          return;
        }
        if (D[a].sTableId !== "" && D[a].sTableId == this.getAttribute("id")) {
          D.splice(a, 1);
          break;
        }
      }
      var e = new l();
      D.push(e);
      var h = false,
        j = false;
      a = this.getAttribute("id");
      if (a !== null) {
        e.sTableId = a;
        e.sInstance = a;
      } else e.sInstance = n._oExternConfig.iNextUnique++;
      if (this.nodeName.toLowerCase() != "table") J(e, 0, "Attempted to initialise DataTables on a node which is not a table: " + this.nodeName);else {
        e.nTable = this;
        e.oInstance = ya.length == 1 ? ya : i(this).dataTable();
        e.oApi = ya.oApi;
        e.sDestroyWidth = i(this).width();
        if (typeof g != "undefined" && g !== null) {
          e.oInit = g;
          o(e.oFeatures, g, "bPaginate");
          o(e.oFeatures, g, "bLengthChange");
          o(e.oFeatures, g, "bFilter");
          o(e.oFeatures, g, "bSort");
          o(e.oFeatures, g, "bInfo");
          o(e.oFeatures, g, "bProcessing");
          o(e.oFeatures, g, "bAutoWidth");
          o(e.oFeatures, g, "bSortClasses");
          o(e.oFeatures, g, "bServerSide");
          o(e.oFeatures, g, "bDeferRender");
          o(e.oScroll, g, "sScrollX", "sX");
          o(e.oScroll, g, "sScrollXInner", "sXInner");
          o(e.oScroll, g, "sScrollY", "sY");
          o(e.oScroll, g, "bScrollCollapse", "bCollapse");
          o(e.oScroll, g, "bScrollInfinite", "bInfinite");
          o(e.oScroll, g, "iScrollLoadGap", "iLoadGap");
          o(e.oScroll, g, "bScrollAutoCss", "bAutoCss");
          o(e, g, "asStripClasses", "asStripeClasses");
          o(e, g, "asStripeClasses");
          o(e, g, "fnPreDrawCallback");
          o(e, g, "fnRowCallback");
          o(e, g, "fnHeaderCallback");
          o(e, g, "fnFooterCallback");
          o(e, g, "fnCookieCallback");
          o(e, g, "fnInitComplete");
          o(e, g, "fnServerData");
          o(e, g, "fnFormatNumber");
          o(e, g, "aaSorting");
          o(e, g, "aaSortingFixed");
          o(e, g, "aLengthMenu");
          o(e, g, "sPaginationType");
          o(e, g, "sAjaxSource");
          o(e, g, "sAjaxDataProp");
          o(e, g, "iCookieDuration");
          o(e, g, "sCookiePrefix");
          o(e, g, "sDom");
          o(e, g, "bSortCellsTop");
          o(e, g, "oSearch", "oPreviousSearch");
          o(e, g, "aoSearchCols", "aoPreSearchCols");
          o(e, g, "iDisplayLength", "_iDisplayLength");
          o(e, g, "bJQueryUI", "bJUI");
          o(e.oLanguage, g, "fnInfoCallback");
          typeof g.fnDrawCallback == "function" && e.aoDrawCallback.push({
            fn: g.fnDrawCallback,
            sName: "user"
          });
          typeof g.fnServerParams == "function" && e.aoServerParams.push({
            fn: g.fnServerParams,
            sName: "user"
          });
          typeof g.fnStateSaveCallback == "function" && e.aoStateSave.push({
            fn: g.fnStateSaveCallback,
            sName: "user"
          });
          typeof g.fnStateLoadCallback == "function" && e.aoStateLoad.push({
            fn: g.fnStateLoadCallback,
            sName: "user"
          });
          if (e.oFeatures.bServerSide && e.oFeatures.bSort && e.oFeatures.bSortClasses) e.aoDrawCallback.push({
            fn: V,
            sName: "server_side_sort_classes"
          });else e.oFeatures.bDeferRender && e.aoDrawCallback.push({
            fn: V,
            sName: "defer_sort_classes"
          });
          if (typeof g.bJQueryUI != "undefined" && g.bJQueryUI) {
            e.oClasses = n.oJUIClasses;
            if (typeof g.sDom == "undefined") e.sDom = '<"H"lfr>t<"F"ip>';
          }
          if (e.oScroll.sX !== "" || e.oScroll.sY !== "") e.oScroll.iBarWidth = Ya();
          if (typeof g.iDisplayStart != "undefined" && typeof e.iInitDisplayStart == "undefined") {
            e.iInitDisplayStart = g.iDisplayStart;
            e._iDisplayStart = g.iDisplayStart;
          }
          if (typeof g.bStateSave != "undefined") {
            e.oFeatures.bStateSave = g.bStateSave;
            Xa(e, g);
            e.aoDrawCallback.push({
              fn: va,
              sName: "state_save"
            });
          }
          if (typeof g.iDeferLoading != "undefined") {
            e.bDeferLoading = true;
            e._iRecordsTotal = g.iDeferLoading;
            e._iRecordsDisplay = g.iDeferLoading;
          }
          if (typeof g.aaData != "undefined") j = true;
          if (typeof g != "undefined" && typeof g.aoData != "undefined") g.aoColumns = g.aoData;
          if (typeof g.oLanguage != "undefined") if (typeof g.oLanguage.sUrl != "undefined" && g.oLanguage.sUrl !== "") {
            e.oLanguage.sUrl = g.oLanguage.sUrl;
            i.getJSON(e.oLanguage.sUrl, null, function (u) {
              y(e, u, true);
            });
            h = true;
          } else y(e, g.oLanguage, false);
        } else g = {};
        if (typeof g.asStripClasses == "undefined" && typeof g.asStripeClasses == "undefined") {
          e.asStripeClasses.push(e.oClasses.sStripeOdd);
          e.asStripeClasses.push(e.oClasses.sStripeEven);
        }
        c = false;
        d = i(this).children("tbody").children("tr");
        a = 0;
        for (b = e.asStripeClasses.length; a < b; a++) if (d.filter(":lt(2)").hasClass(e.asStripeClasses[a])) {
          c = true;
          break;
        }
        if (c) {
          e.asDestroyStripes = ["", ""];
          if (i(d[0]).hasClass(e.oClasses.sStripeOdd)) e.asDestroyStripes[0] += e.oClasses.sStripeOdd + " ";
          if (i(d[0]).hasClass(e.oClasses.sStripeEven)) e.asDestroyStripes[0] += e.oClasses.sStripeEven;
          if (i(d[1]).hasClass(e.oClasses.sStripeOdd)) e.asDestroyStripes[1] += e.oClasses.sStripeOdd + " ";
          if (i(d[1]).hasClass(e.oClasses.sStripeEven)) e.asDestroyStripes[1] += e.oClasses.sStripeEven;
          d.removeClass(e.asStripeClasses.join(" "));
        }
        c = [];
        var k;
        a = this.getElementsByTagName("thead");
        if (a.length !== 0) {
          Y(e.aoHeader, a[0]);
          c = S(e);
        }
        if (typeof g.aoColumns == "undefined") {
          k = [];
          a = 0;
          for (b = c.length; a < b; a++) k.push(null);
        } else k = g.aoColumns;
        a = 0;
        for (b = k.length; a < b; a++) {
          if (typeof g.saved_aoColumns != "undefined" && g.saved_aoColumns.length == b) {
            if (k[a] === null) k[a] = {};
            k[a].bVisible = g.saved_aoColumns[a].bVisible;
          }
          F(e, c ? c[a] : null);
        }
        if (typeof g.aoColumnDefs != "undefined") for (a = g.aoColumnDefs.length - 1; a >= 0; a--) {
          var m = g.aoColumnDefs[a].aTargets;
          i.isArray(m) || J(e, 1, "aTargets must be an array of targets, not a " + _typeof(m));
          c = 0;
          for (d = m.length; c < d; c++) if (typeof m[c] == "number" && m[c] >= 0) {
            for (; e.aoColumns.length <= m[c];) F(e);
            x(e, m[c], g.aoColumnDefs[a]);
          } else if (typeof m[c] == "number" && m[c] < 0) x(e, e.aoColumns.length + m[c], g.aoColumnDefs[a]);else if (typeof m[c] == "string") {
            b = 0;
            for (f = e.aoColumns.length; b < f; b++) if (m[c] == "_all" || i(e.aoColumns[b].nTh).hasClass(m[c])) x(e, b, g.aoColumnDefs[a]);
          }
        }
        if (typeof k != "undefined") {
          a = 0;
          for (b = k.length; a < b; a++) x(e, a, k[a]);
        }
        a = 0;
        for (b = e.aaSorting.length; a < b; a++) {
          if (e.aaSorting[a][0] >= e.aoColumns.length) e.aaSorting[a][0] = 0;
          k = e.aoColumns[e.aaSorting[a][0]];
          if (typeof e.aaSorting[a][2] == "undefined") e.aaSorting[a][2] = 0;
          if (typeof g.aaSorting == "undefined" && typeof e.saved_aaSorting == "undefined") e.aaSorting[a][1] = k.asSorting[0];
          c = 0;
          for (d = k.asSorting.length; c < d; c++) if (e.aaSorting[a][1] == k.asSorting[c]) {
            e.aaSorting[a][2] = c;
            break;
          }
        }
        V(e);
        a = i(this).children("thead");
        if (a.length === 0) {
          a = [p.createElement("thead")];
          this.appendChild(a[0]);
        }
        e.nTHead = a[0];
        a = i(this).children("tbody");
        if (a.length === 0) {
          a = [p.createElement("tbody")];
          this.appendChild(a[0]);
        }
        e.nTBody = a[0];
        a = i(this).children("tfoot");
        if (a.length > 0) {
          e.nTFoot = a[0];
          Y(e.aoFooter, e.nTFoot);
        }
        if (j) for (a = 0; a < g.aaData.length; a++) v(e, g.aaData[a]);else $(e);
        e.aiDisplay = e.aiDisplayMaster.slice();
        e.bInitialised = true;
        h === false && t(e);
      }
    });
  };
})((jquery__WEBPACK_IMPORTED_MODULE_0___default()), window, document);

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/jquery.select2.3.5.1.min.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/jquery.select2.3.5.1.min.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
Copyright 2014 Igor Vaynberg

Version: 3.5.1 Timestamp: Tue Jul 22 18:58:56 EDT 2014

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License
or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the Apache License and the GPL License for the specific language governing
permissions and limitations under the Apache License and the GPL License.
*/


!function (a) {
  "undefined" == typeof a.fn.each2 && a.extend(a.fn, {
    each2: function each2(b) {
      for (var c = a([0]), d = -1, e = this.length; ++d < e && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1;);
      return this;
    }
  });
}((jquery__WEBPACK_IMPORTED_MODULE_0___default())), function (a, b) {
  "use strict";

  function n(b) {
    var c = a(document.createTextNode(""));
    b.before(c), c.before(b), c.remove();
  }
  function o(a) {
    function b(a) {
      return m[a] || a;
    }
    return a.replace(/[^\u0000-\u007E]/g, b);
  }
  function p(a, b) {
    for (var c = 0, d = b.length; d > c; c += 1) if (r(a, b[c])) return c;
    return -1;
  }
  function q() {
    var b = a(l);
    b.appendTo("body");
    var c = {
      width: b.width() - b[0].clientWidth,
      height: b.height() - b[0].clientHeight
    };
    return b.remove(), c;
  }
  function r(a, c) {
    return a === c ? !0 : a === b || c === b ? !1 : null === a || null === c ? !1 : a.constructor === String ? a + "" == c + "" : c.constructor === String ? c + "" == a + "" : !1;
  }
  function s(b, c) {
    var d, e, f;
    if (null === b || b.length < 1) return [];
    for (d = b.split(c), e = 0, f = d.length; f > e; e += 1) d[e] = a.trim(d[e]);
    return d;
  }
  function t(a) {
    return a.outerWidth(!1) - a.width();
  }
  function u(c) {
    var d = "keyup-change-value";
    c.on("keydown", function () {
      a.data(c, d) === b && a.data(c, d, c.val());
    }), c.on("keyup", function () {
      var e = a.data(c, d);
      e !== b && c.val() !== e && (a.removeData(c, d), c.trigger("keyup-change"));
    });
  }
  function v(c) {
    c.on("mousemove", function (c) {
      var d = i;
      (d === b || d.x !== c.pageX || d.y !== c.pageY) && a(c.target).trigger("mousemove-filtered", c);
    });
  }
  function w(a, c, d) {
    d = d || b;
    var e;
    return function () {
      var b = arguments;
      window.clearTimeout(e), e = window.setTimeout(function () {
        c.apply(d, b);
      }, a);
    };
  }
  function x(a, b) {
    var c = w(a, function (a) {
      b.trigger("scroll-debounced", a);
    });
    b.on("scroll", function (a) {
      p(a.target, b.get()) >= 0 && c(a);
    });
  }
  function y(a) {
    a[0] !== document.activeElement && window.setTimeout(function () {
      var d,
        b = a[0],
        c = a.val().length;
      a.focus();
      var e = b.offsetWidth > 0 || b.offsetHeight > 0;
      e && b === document.activeElement && (b.setSelectionRange ? b.setSelectionRange(c, c) : b.createTextRange && (d = b.createTextRange(), d.collapse(!1), d.select()));
    }, 0);
  }
  function z(b) {
    b = a(b)[0];
    var c = 0,
      d = 0;
    if ("selectionStart" in b) c = b.selectionStart, d = b.selectionEnd - c;else if ("selection" in document) {
      b.focus();
      var e = document.selection.createRange();
      d = document.selection.createRange().text.length, e.moveStart("character", -b.value.length), c = e.text.length - d;
    }
    return {
      offset: c,
      length: d
    };
  }
  function A(a) {
    a.preventDefault(), a.stopPropagation();
  }
  function B(a) {
    a.preventDefault(), a.stopImmediatePropagation();
  }
  function C(b) {
    if (!h) {
      var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
      h = a(document.createElement("div")).css({
        position: "absolute",
        left: "-10000px",
        top: "-10000px",
        display: "none",
        fontSize: c.fontSize,
        fontFamily: c.fontFamily,
        fontStyle: c.fontStyle,
        fontWeight: c.fontWeight,
        letterSpacing: c.letterSpacing,
        textTransform: c.textTransform,
        whiteSpace: "nowrap"
      }), h.attr("class", "select2-sizer"), a("body").append(h);
    }
    return h.text(b.val()), h.width();
  }
  function D(b, c, d) {
    var e,
      g,
      f = [];
    e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function () {
      0 === this.indexOf("select2-") && f.push(this);
    })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function () {
      0 !== this.indexOf("select2-") && (g = d(this), g && f.push(g));
    })), b.attr("class", f.join(" "));
  }
  function E(a, b, c, d) {
    var e = o(a.toUpperCase()).indexOf(o(b.toUpperCase())),
      f = b.length;
    return 0 > e ? (c.push(d(a)), void 0) : (c.push(d(a.substring(0, e))), c.push("<span class='select2-match'>"), c.push(d(a.substring(e, e + f))), c.push("</span>"), c.push(d(a.substring(e + f, a.length))), void 0);
  }
  function F(a) {
    var b = {
      "\\": "&#92;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#47;"
    };
    return String(a).replace(/[&<>"'\/\\]/g, function (a) {
      return b[a];
    });
  }
  function G(c) {
    var d,
      e = null,
      f = c.quietMillis || 100,
      g = c.url,
      h = this;
    return function (i) {
      window.clearTimeout(d), d = window.setTimeout(function () {
        var d = c.data,
          f = g,
          j = c.transport || a.fn.select2.ajaxDefaults.transport,
          k = {
            type: c.type || "GET",
            cache: c.cache || !1,
            jsonpCallback: c.jsonpCallback || b,
            dataType: c.dataType || "json"
          },
          l = a.extend({}, a.fn.select2.ajaxDefaults.params, k);
        d = d ? d.call(h, i.term, i.page, i.context) : null, f = "function" == typeof f ? f.call(h, i.term, i.page, i.context) : f, e && "function" == typeof e.abort && e.abort(), c.params && (a.isFunction(c.params) ? a.extend(l, c.params.call(h)) : a.extend(l, c.params)), a.extend(l, {
          url: f,
          dataType: c.dataType,
          data: d,
          success: function success(a) {
            var b = c.results(a, i.page, i);
            i.callback(b);
          },
          error: function error(a, b, c) {
            var d = {
              hasError: !0,
              jqXHR: a,
              textStatus: b,
              errorThrown: c
            };
            i.callback(d);
          }
        }), e = j.call(h, l);
      }, f);
    };
  }
  function H(b) {
    var d,
      e,
      c = b,
      f = function f(a) {
        return "" + a.text;
      };
    a.isArray(c) && (e = c, c = {
      results: e
    }), a.isFunction(c) === !1 && (e = c, c = function c() {
      return e;
    });
    var g = c();
    return g.text && (f = g.text, a.isFunction(f) || (d = g.text, f = function f(a) {
      return a[d];
    })), function (b) {
      var _g,
        d = b.term,
        e = {
          results: []
        };
      return "" === d ? (b.callback(c()), void 0) : (_g = function g(c, e) {
        var h, i;
        if (c = c[0], c.children) {
          h = {};
          for (i in c) c.hasOwnProperty(i) && (h[i] = c[i]);
          h.children = [], a(c.children).each2(function (a, b) {
            _g(b, h.children);
          }), (h.children.length || b.matcher(d, f(h), c)) && e.push(h);
        } else b.matcher(d, f(c), c) && e.push(c);
      }, a(c().results).each2(function (a, b) {
        _g(b, e.results);
      }), b.callback(e), void 0);
    };
  }
  function I(c) {
    var d = a.isFunction(c);
    return function (e) {
      var f = e.term,
        g = {
          results: []
        },
        h = d ? c(e) : c;
      a.isArray(h) && (a(h).each(function () {
        var a = this.text !== b,
          c = a ? this.text : this;
        ("" === f || e.matcher(f, c)) && g.results.push(a ? this : {
          id: this,
          text: this
        });
      }), e.callback(g));
    };
  }
  function J(b, c) {
    if (a.isFunction(b)) return !0;
    if (!b) return !1;
    if ("string" == typeof b) return !0;
    throw new Error(c + " must be a string, function, or falsy value");
  }
  function K(b, c) {
    if (a.isFunction(b)) {
      var d = Array.prototype.slice.call(arguments, 2);
      return b.apply(c, d);
    }
    return b;
  }
  function L(b) {
    var c = 0;
    return a.each(b, function (a, b) {
      b.children ? c += L(b.children) : c++;
    }), c;
  }
  function M(a, c, d, e) {
    var h,
      i,
      j,
      k,
      l,
      f = a,
      g = !1;
    if (!e.createSearchChoice || !e.tokenSeparators || e.tokenSeparators.length < 1) return b;
    for (;;) {
      for (i = -1, j = 0, k = e.tokenSeparators.length; k > j && (l = e.tokenSeparators[j], i = a.indexOf(l), !(i >= 0)); j++);
      if (0 > i) break;
      if (h = a.substring(0, i), a = a.substring(i + l.length), h.length > 0 && (h = e.createSearchChoice.call(this, h, c), h !== b && null !== h && e.id(h) !== b && null !== e.id(h))) {
        for (g = !1, j = 0, k = c.length; k > j; j++) if (r(e.id(h), e.id(c[j]))) {
          g = !0;
          break;
        }
        g || d(h);
      }
    }
    return f !== a ? a : void 0;
  }
  function N() {
    var b = this;
    a.each(arguments, function (a, c) {
      b[c].remove(), b[c] = null;
    });
  }
  function O(b, c) {
    var d = function d() {};
    return d.prototype = new b(), d.prototype.constructor = d, d.prototype.parent = b.prototype, d.prototype = a.extend(d.prototype, c), d;
  }
  if (window.Select2 === b) {
    var c,
      d,
      e,
      f,
      g,
      h,
      j,
      k,
      i = {
        x: 0,
        y: 0
      },
      c = {
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        HOME: 36,
        END: 35,
        BACKSPACE: 8,
        DELETE: 46,
        isArrow: function isArrow(a) {
          switch (a = a.which ? a.which : a) {
            case c.LEFT:
            case c.RIGHT:
            case c.UP:
            case c.DOWN:
              return !0;
          }
          return !1;
        },
        isControl: function isControl(a) {
          var b = a.which;
          switch (b) {
            case c.SHIFT:
            case c.CTRL:
            case c.ALT:
              return !0;
          }
          return a.metaKey ? !0 : !1;
        },
        isFunctionKey: function isFunctionKey(a) {
          return a = a.which ? a.which : a, a >= 112 && 123 >= a;
        }
      },
      l = "<div class='select2-measure-scrollbar'></div>",
      m = {
        "\u24B6": "A",
        "\uFF21": "A",
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\u1EA6": "A",
        "\u1EA4": "A",
        "\u1EAA": "A",
        "\u1EA8": "A",
        "\xc3": "A",
        "\u0100": "A",
        "\u0102": "A",
        "\u1EB0": "A",
        "\u1EAE": "A",
        "\u1EB4": "A",
        "\u1EB2": "A",
        "\u0226": "A",
        "\u01E0": "A",
        "\xc4": "A",
        "\u01DE": "A",
        "\u1EA2": "A",
        "\xc5": "A",
        "\u01FA": "A",
        "\u01CD": "A",
        "\u0200": "A",
        "\u0202": "A",
        "\u1EA0": "A",
        "\u1EAC": "A",
        "\u1EB6": "A",
        "\u1E00": "A",
        "\u0104": "A",
        "\u023A": "A",
        "\u2C6F": "A",
        "\uA732": "AA",
        "\xc6": "AE",
        "\u01FC": "AE",
        "\u01E2": "AE",
        "\uA734": "AO",
        "\uA736": "AU",
        "\uA738": "AV",
        "\uA73A": "AV",
        "\uA73C": "AY",
        "\u24B7": "B",
        "\uFF22": "B",
        "\u1E02": "B",
        "\u1E04": "B",
        "\u1E06": "B",
        "\u0243": "B",
        "\u0182": "B",
        "\u0181": "B",
        "\u24B8": "C",
        "\uFF23": "C",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\xc7": "C",
        "\u1E08": "C",
        "\u0187": "C",
        "\u023B": "C",
        "\uA73E": "C",
        "\u24B9": "D",
        "\uFF24": "D",
        "\u1E0A": "D",
        "\u010E": "D",
        "\u1E0C": "D",
        "\u1E10": "D",
        "\u1E12": "D",
        "\u1E0E": "D",
        "\u0110": "D",
        "\u018B": "D",
        "\u018A": "D",
        "\u0189": "D",
        "\uA779": "D",
        "\u01F1": "DZ",
        "\u01C4": "DZ",
        "\u01F2": "Dz",
        "\u01C5": "Dz",
        "\u24BA": "E",
        "\uFF25": "E",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\u1EC0": "E",
        "\u1EBE": "E",
        "\u1EC4": "E",
        "\u1EC2": "E",
        "\u1EBC": "E",
        "\u0112": "E",
        "\u1E14": "E",
        "\u1E16": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\xcb": "E",
        "\u1EBA": "E",
        "\u011A": "E",
        "\u0204": "E",
        "\u0206": "E",
        "\u1EB8": "E",
        "\u1EC6": "E",
        "\u0228": "E",
        "\u1E1C": "E",
        "\u0118": "E",
        "\u1E18": "E",
        "\u1E1A": "E",
        "\u0190": "E",
        "\u018E": "E",
        "\u24BB": "F",
        "\uFF26": "F",
        "\u1E1E": "F",
        "\u0191": "F",
        "\uA77B": "F",
        "\u24BC": "G",
        "\uFF27": "G",
        "\u01F4": "G",
        "\u011C": "G",
        "\u1E20": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u01E6": "G",
        "\u0122": "G",
        "\u01E4": "G",
        "\u0193": "G",
        "\uA7A0": "G",
        "\uA77D": "G",
        "\uA77E": "G",
        "\u24BD": "H",
        "\uFF28": "H",
        "\u0124": "H",
        "\u1E22": "H",
        "\u1E26": "H",
        "\u021E": "H",
        "\u1E24": "H",
        "\u1E28": "H",
        "\u1E2A": "H",
        "\u0126": "H",
        "\u2C67": "H",
        "\u2C75": "H",
        "\uA78D": "H",
        "\u24BE": "I",
        "\uFF29": "I",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u0130": "I",
        "\xcf": "I",
        "\u1E2E": "I",
        "\u1EC8": "I",
        "\u01CF": "I",
        "\u0208": "I",
        "\u020A": "I",
        "\u1ECA": "I",
        "\u012E": "I",
        "\u1E2C": "I",
        "\u0197": "I",
        "\u24BF": "J",
        "\uFF2A": "J",
        "\u0134": "J",
        "\u0248": "J",
        "\u24C0": "K",
        "\uFF2B": "K",
        "\u1E30": "K",
        "\u01E8": "K",
        "\u1E32": "K",
        "\u0136": "K",
        "\u1E34": "K",
        "\u0198": "K",
        "\u2C69": "K",
        "\uA740": "K",
        "\uA742": "K",
        "\uA744": "K",
        "\uA7A2": "K",
        "\u24C1": "L",
        "\uFF2C": "L",
        "\u013F": "L",
        "\u0139": "L",
        "\u013D": "L",
        "\u1E36": "L",
        "\u1E38": "L",
        "\u013B": "L",
        "\u1E3C": "L",
        "\u1E3A": "L",
        "\u0141": "L",
        "\u023D": "L",
        "\u2C62": "L",
        "\u2C60": "L",
        "\uA748": "L",
        "\uA746": "L",
        "\uA780": "L",
        "\u01C7": "LJ",
        "\u01C8": "Lj",
        "\u24C2": "M",
        "\uFF2D": "M",
        "\u1E3E": "M",
        "\u1E40": "M",
        "\u1E42": "M",
        "\u2C6E": "M",
        "\u019C": "M",
        "\u24C3": "N",
        "\uFF2E": "N",
        "\u01F8": "N",
        "\u0143": "N",
        "\xd1": "N",
        "\u1E44": "N",
        "\u0147": "N",
        "\u1E46": "N",
        "\u0145": "N",
        "\u1E4A": "N",
        "\u1E48": "N",
        "\u0220": "N",
        "\u019D": "N",
        "\uA790": "N",
        "\uA7A4": "N",
        "\u01CA": "NJ",
        "\u01CB": "Nj",
        "\u24C4": "O",
        "\uFF2F": "O",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\u1ED2": "O",
        "\u1ED0": "O",
        "\u1ED6": "O",
        "\u1ED4": "O",
        "\xd5": "O",
        "\u1E4C": "O",
        "\u022C": "O",
        "\u1E4E": "O",
        "\u014C": "O",
        "\u1E50": "O",
        "\u1E52": "O",
        "\u014E": "O",
        "\u022E": "O",
        "\u0230": "O",
        "\xd6": "O",
        "\u022A": "O",
        "\u1ECE": "O",
        "\u0150": "O",
        "\u01D1": "O",
        "\u020C": "O",
        "\u020E": "O",
        "\u01A0": "O",
        "\u1EDC": "O",
        "\u1EDA": "O",
        "\u1EE0": "O",
        "\u1EDE": "O",
        "\u1EE2": "O",
        "\u1ECC": "O",
        "\u1ED8": "O",
        "\u01EA": "O",
        "\u01EC": "O",
        "\xd8": "O",
        "\u01FE": "O",
        "\u0186": "O",
        "\u019F": "O",
        "\uA74A": "O",
        "\uA74C": "O",
        "\u01A2": "OI",
        "\uA74E": "OO",
        "\u0222": "OU",
        "\u24C5": "P",
        "\uFF30": "P",
        "\u1E54": "P",
        "\u1E56": "P",
        "\u01A4": "P",
        "\u2C63": "P",
        "\uA750": "P",
        "\uA752": "P",
        "\uA754": "P",
        "\u24C6": "Q",
        "\uFF31": "Q",
        "\uA756": "Q",
        "\uA758": "Q",
        "\u024A": "Q",
        "\u24C7": "R",
        "\uFF32": "R",
        "\u0154": "R",
        "\u1E58": "R",
        "\u0158": "R",
        "\u0210": "R",
        "\u0212": "R",
        "\u1E5A": "R",
        "\u1E5C": "R",
        "\u0156": "R",
        "\u1E5E": "R",
        "\u024C": "R",
        "\u2C64": "R",
        "\uA75A": "R",
        "\uA7A6": "R",
        "\uA782": "R",
        "\u24C8": "S",
        "\uFF33": "S",
        "\u1E9E": "S",
        "\u015A": "S",
        "\u1E64": "S",
        "\u015C": "S",
        "\u1E60": "S",
        "\u0160": "S",
        "\u1E66": "S",
        "\u1E62": "S",
        "\u1E68": "S",
        "\u0218": "S",
        "\u015E": "S",
        "\u2C7E": "S",
        "\uA7A8": "S",
        "\uA784": "S",
        "\u24C9": "T",
        "\uFF34": "T",
        "\u1E6A": "T",
        "\u0164": "T",
        "\u1E6C": "T",
        "\u021A": "T",
        "\u0162": "T",
        "\u1E70": "T",
        "\u1E6E": "T",
        "\u0166": "T",
        "\u01AC": "T",
        "\u01AE": "T",
        "\u023E": "T",
        "\uA786": "T",
        "\uA728": "TZ",
        "\u24CA": "U",
        "\uFF35": "U",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\u0168": "U",
        "\u1E78": "U",
        "\u016A": "U",
        "\u1E7A": "U",
        "\u016C": "U",
        "\xdc": "U",
        "\u01DB": "U",
        "\u01D7": "U",
        "\u01D5": "U",
        "\u01D9": "U",
        "\u1EE6": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u01D3": "U",
        "\u0214": "U",
        "\u0216": "U",
        "\u01AF": "U",
        "\u1EEA": "U",
        "\u1EE8": "U",
        "\u1EEE": "U",
        "\u1EEC": "U",
        "\u1EF0": "U",
        "\u1EE4": "U",
        "\u1E72": "U",
        "\u0172": "U",
        "\u1E76": "U",
        "\u1E74": "U",
        "\u0244": "U",
        "\u24CB": "V",
        "\uFF36": "V",
        "\u1E7C": "V",
        "\u1E7E": "V",
        "\u01B2": "V",
        "\uA75E": "V",
        "\u0245": "V",
        "\uA760": "VY",
        "\u24CC": "W",
        "\uFF37": "W",
        "\u1E80": "W",
        "\u1E82": "W",
        "\u0174": "W",
        "\u1E86": "W",
        "\u1E84": "W",
        "\u1E88": "W",
        "\u2C72": "W",
        "\u24CD": "X",
        "\uFF38": "X",
        "\u1E8A": "X",
        "\u1E8C": "X",
        "\u24CE": "Y",
        "\uFF39": "Y",
        "\u1EF2": "Y",
        "\xdd": "Y",
        "\u0176": "Y",
        "\u1EF8": "Y",
        "\u0232": "Y",
        "\u1E8E": "Y",
        "\u0178": "Y",
        "\u1EF6": "Y",
        "\u1EF4": "Y",
        "\u01B3": "Y",
        "\u024E": "Y",
        "\u1EFE": "Y",
        "\u24CF": "Z",
        "\uFF3A": "Z",
        "\u0179": "Z",
        "\u1E90": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u1E92": "Z",
        "\u1E94": "Z",
        "\u01B5": "Z",
        "\u0224": "Z",
        "\u2C7F": "Z",
        "\u2C6B": "Z",
        "\uA762": "Z",
        "\u24D0": "a",
        "\uFF41": "a",
        "\u1E9A": "a",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\u1EA7": "a",
        "\u1EA5": "a",
        "\u1EAB": "a",
        "\u1EA9": "a",
        "\xe3": "a",
        "\u0101": "a",
        "\u0103": "a",
        "\u1EB1": "a",
        "\u1EAF": "a",
        "\u1EB5": "a",
        "\u1EB3": "a",
        "\u0227": "a",
        "\u01E1": "a",
        "\xe4": "a",
        "\u01DF": "a",
        "\u1EA3": "a",
        "\xe5": "a",
        "\u01FB": "a",
        "\u01CE": "a",
        "\u0201": "a",
        "\u0203": "a",
        "\u1EA1": "a",
        "\u1EAD": "a",
        "\u1EB7": "a",
        "\u1E01": "a",
        "\u0105": "a",
        "\u2C65": "a",
        "\u0250": "a",
        "\uA733": "aa",
        "\xe6": "ae",
        "\u01FD": "ae",
        "\u01E3": "ae",
        "\uA735": "ao",
        "\uA737": "au",
        "\uA739": "av",
        "\uA73B": "av",
        "\uA73D": "ay",
        "\u24D1": "b",
        "\uFF42": "b",
        "\u1E03": "b",
        "\u1E05": "b",
        "\u1E07": "b",
        "\u0180": "b",
        "\u0183": "b",
        "\u0253": "b",
        "\u24D2": "c",
        "\uFF43": "c",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\xe7": "c",
        "\u1E09": "c",
        "\u0188": "c",
        "\u023C": "c",
        "\uA73F": "c",
        "\u2184": "c",
        "\u24D3": "d",
        "\uFF44": "d",
        "\u1E0B": "d",
        "\u010F": "d",
        "\u1E0D": "d",
        "\u1E11": "d",
        "\u1E13": "d",
        "\u1E0F": "d",
        "\u0111": "d",
        "\u018C": "d",
        "\u0256": "d",
        "\u0257": "d",
        "\uA77A": "d",
        "\u01F3": "dz",
        "\u01C6": "dz",
        "\u24D4": "e",
        "\uFF45": "e",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\u1EC1": "e",
        "\u1EBF": "e",
        "\u1EC5": "e",
        "\u1EC3": "e",
        "\u1EBD": "e",
        "\u0113": "e",
        "\u1E15": "e",
        "\u1E17": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\xeb": "e",
        "\u1EBB": "e",
        "\u011B": "e",
        "\u0205": "e",
        "\u0207": "e",
        "\u1EB9": "e",
        "\u1EC7": "e",
        "\u0229": "e",
        "\u1E1D": "e",
        "\u0119": "e",
        "\u1E19": "e",
        "\u1E1B": "e",
        "\u0247": "e",
        "\u025B": "e",
        "\u01DD": "e",
        "\u24D5": "f",
        "\uFF46": "f",
        "\u1E1F": "f",
        "\u0192": "f",
        "\uA77C": "f",
        "\u24D6": "g",
        "\uFF47": "g",
        "\u01F5": "g",
        "\u011D": "g",
        "\u1E21": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u01E7": "g",
        "\u0123": "g",
        "\u01E5": "g",
        "\u0260": "g",
        "\uA7A1": "g",
        "\u1D79": "g",
        "\uA77F": "g",
        "\u24D7": "h",
        "\uFF48": "h",
        "\u0125": "h",
        "\u1E23": "h",
        "\u1E27": "h",
        "\u021F": "h",
        "\u1E25": "h",
        "\u1E29": "h",
        "\u1E2B": "h",
        "\u1E96": "h",
        "\u0127": "h",
        "\u2C68": "h",
        "\u2C76": "h",
        "\u0265": "h",
        "\u0195": "hv",
        "\u24D8": "i",
        "\uFF49": "i",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\xef": "i",
        "\u1E2F": "i",
        "\u1EC9": "i",
        "\u01D0": "i",
        "\u0209": "i",
        "\u020B": "i",
        "\u1ECB": "i",
        "\u012F": "i",
        "\u1E2D": "i",
        "\u0268": "i",
        "\u0131": "i",
        "\u24D9": "j",
        "\uFF4A": "j",
        "\u0135": "j",
        "\u01F0": "j",
        "\u0249": "j",
        "\u24DA": "k",
        "\uFF4B": "k",
        "\u1E31": "k",
        "\u01E9": "k",
        "\u1E33": "k",
        "\u0137": "k",
        "\u1E35": "k",
        "\u0199": "k",
        "\u2C6A": "k",
        "\uA741": "k",
        "\uA743": "k",
        "\uA745": "k",
        "\uA7A3": "k",
        "\u24DB": "l",
        "\uFF4C": "l",
        "\u0140": "l",
        "\u013A": "l",
        "\u013E": "l",
        "\u1E37": "l",
        "\u1E39": "l",
        "\u013C": "l",
        "\u1E3D": "l",
        "\u1E3B": "l",
        "\u017F": "l",
        "\u0142": "l",
        "\u019A": "l",
        "\u026B": "l",
        "\u2C61": "l",
        "\uA749": "l",
        "\uA781": "l",
        "\uA747": "l",
        "\u01C9": "lj",
        "\u24DC": "m",
        "\uFF4D": "m",
        "\u1E3F": "m",
        "\u1E41": "m",
        "\u1E43": "m",
        "\u0271": "m",
        "\u026F": "m",
        "\u24DD": "n",
        "\uFF4E": "n",
        "\u01F9": "n",
        "\u0144": "n",
        "\xf1": "n",
        "\u1E45": "n",
        "\u0148": "n",
        "\u1E47": "n",
        "\u0146": "n",
        "\u1E4B": "n",
        "\u1E49": "n",
        "\u019E": "n",
        "\u0272": "n",
        "\u0149": "n",
        "\uA791": "n",
        "\uA7A5": "n",
        "\u01CC": "nj",
        "\u24DE": "o",
        "\uFF4F": "o",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\u1ED3": "o",
        "\u1ED1": "o",
        "\u1ED7": "o",
        "\u1ED5": "o",
        "\xf5": "o",
        "\u1E4D": "o",
        "\u022D": "o",
        "\u1E4F": "o",
        "\u014D": "o",
        "\u1E51": "o",
        "\u1E53": "o",
        "\u014F": "o",
        "\u022F": "o",
        "\u0231": "o",
        "\xf6": "o",
        "\u022B": "o",
        "\u1ECF": "o",
        "\u0151": "o",
        "\u01D2": "o",
        "\u020D": "o",
        "\u020F": "o",
        "\u01A1": "o",
        "\u1EDD": "o",
        "\u1EDB": "o",
        "\u1EE1": "o",
        "\u1EDF": "o",
        "\u1EE3": "o",
        "\u1ECD": "o",
        "\u1ED9": "o",
        "\u01EB": "o",
        "\u01ED": "o",
        "\xf8": "o",
        "\u01FF": "o",
        "\u0254": "o",
        "\uA74B": "o",
        "\uA74D": "o",
        "\u0275": "o",
        "\u01A3": "oi",
        "\u0223": "ou",
        "\uA74F": "oo",
        "\u24DF": "p",
        "\uFF50": "p",
        "\u1E55": "p",
        "\u1E57": "p",
        "\u01A5": "p",
        "\u1D7D": "p",
        "\uA751": "p",
        "\uA753": "p",
        "\uA755": "p",
        "\u24E0": "q",
        "\uFF51": "q",
        "\u024B": "q",
        "\uA757": "q",
        "\uA759": "q",
        "\u24E1": "r",
        "\uFF52": "r",
        "\u0155": "r",
        "\u1E59": "r",
        "\u0159": "r",
        "\u0211": "r",
        "\u0213": "r",
        "\u1E5B": "r",
        "\u1E5D": "r",
        "\u0157": "r",
        "\u1E5F": "r",
        "\u024D": "r",
        "\u027D": "r",
        "\uA75B": "r",
        "\uA7A7": "r",
        "\uA783": "r",
        "\u24E2": "s",
        "\uFF53": "s",
        "\xdf": "s",
        "\u015B": "s",
        "\u1E65": "s",
        "\u015D": "s",
        "\u1E61": "s",
        "\u0161": "s",
        "\u1E67": "s",
        "\u1E63": "s",
        "\u1E69": "s",
        "\u0219": "s",
        "\u015F": "s",
        "\u023F": "s",
        "\uA7A9": "s",
        "\uA785": "s",
        "\u1E9B": "s",
        "\u24E3": "t",
        "\uFF54": "t",
        "\u1E6B": "t",
        "\u1E97": "t",
        "\u0165": "t",
        "\u1E6D": "t",
        "\u021B": "t",
        "\u0163": "t",
        "\u1E71": "t",
        "\u1E6F": "t",
        "\u0167": "t",
        "\u01AD": "t",
        "\u0288": "t",
        "\u2C66": "t",
        "\uA787": "t",
        "\uA729": "tz",
        "\u24E4": "u",
        "\uFF55": "u",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\u0169": "u",
        "\u1E79": "u",
        "\u016B": "u",
        "\u1E7B": "u",
        "\u016D": "u",
        "\xfc": "u",
        "\u01DC": "u",
        "\u01D8": "u",
        "\u01D6": "u",
        "\u01DA": "u",
        "\u1EE7": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u01D4": "u",
        "\u0215": "u",
        "\u0217": "u",
        "\u01B0": "u",
        "\u1EEB": "u",
        "\u1EE9": "u",
        "\u1EEF": "u",
        "\u1EED": "u",
        "\u1EF1": "u",
        "\u1EE5": "u",
        "\u1E73": "u",
        "\u0173": "u",
        "\u1E77": "u",
        "\u1E75": "u",
        "\u0289": "u",
        "\u24E5": "v",
        "\uFF56": "v",
        "\u1E7D": "v",
        "\u1E7F": "v",
        "\u028B": "v",
        "\uA75F": "v",
        "\u028C": "v",
        "\uA761": "vy",
        "\u24E6": "w",
        "\uFF57": "w",
        "\u1E81": "w",
        "\u1E83": "w",
        "\u0175": "w",
        "\u1E87": "w",
        "\u1E85": "w",
        "\u1E98": "w",
        "\u1E89": "w",
        "\u2C73": "w",
        "\u24E7": "x",
        "\uFF58": "x",
        "\u1E8B": "x",
        "\u1E8D": "x",
        "\u24E8": "y",
        "\uFF59": "y",
        "\u1EF3": "y",
        "\xfd": "y",
        "\u0177": "y",
        "\u1EF9": "y",
        "\u0233": "y",
        "\u1E8F": "y",
        "\xff": "y",
        "\u1EF7": "y",
        "\u1E99": "y",
        "\u1EF5": "y",
        "\u01B4": "y",
        "\u024F": "y",
        "\u1EFF": "y",
        "\u24E9": "z",
        "\uFF5A": "z",
        "\u017A": "z",
        "\u1E91": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u1E93": "z",
        "\u1E95": "z",
        "\u01B6": "z",
        "\u0225": "z",
        "\u0240": "z",
        "\u2C6C": "z",
        "\uA763": "z",
        "\u0386": "\u0391",
        "\u0388": "\u0395",
        "\u0389": "\u0397",
        "\u038A": "\u0399",
        "\u03AA": "\u0399",
        "\u038C": "\u039F",
        "\u038E": "\u03A5",
        "\u03AB": "\u03A5",
        "\u038F": "\u03A9",
        "\u03AC": "\u03B1",
        "\u03AD": "\u03B5",
        "\u03AE": "\u03B7",
        "\u03AF": "\u03B9",
        "\u03CA": "\u03B9",
        "\u0390": "\u03B9",
        "\u03CC": "\u03BF",
        "\u03CD": "\u03C5",
        "\u03CB": "\u03C5",
        "\u03B0": "\u03C5",
        "\u03C9": "\u03C9",
        "\u03C2": "\u03C3"
      };
    j = a(document), g = function () {
      var a = 1;
      return function () {
        return a++;
      };
    }(), d = O(Object, {
      bind: function bind(a) {
        var b = this;
        return function () {
          a.apply(b, arguments);
        };
      },
      init: function init(c) {
        var d,
          e,
          f = ".select2-results";
        this.opts = c = this.prepareOpts(c), this.id = c.id, c.element.data("select2") !== b && null !== c.element.data("select2") && c.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = a("<span>", {
          role: "status",
          "aria-live": "polite"
        }).addClass("select2-hidden-accessible").appendTo(document.body), this.containerId = "s2id_" + (c.element.attr("id") || "autogen" + g()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", c.element.attr("title")), this.body = a("body"), D(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", c.element.attr("style")), this.container.css(K(c.containerCss, this.opts.element)), this.container.addClass(K(c.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", A), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), D(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(K(c.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", A), this.results = d = this.container.find(f), this.search = e = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", A), v(this.results), this.dropdown.on("mousemove-filtered", f, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", f, this.bind(function (a) {
          this._touchEvent = !0, this.highlightUnderEvent(a);
        })), this.dropdown.on("touchmove", f, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", f, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function () {
          this._touchEvent && (this._touchEvent = !1, this.selectHighlighted());
        })), x(80, this.results), this.dropdown.on("scroll-debounced", f, this.bind(this.loadMoreIfNeeded)), a(this.container).on("change", ".select2-input", function (a) {
          a.stopPropagation();
        }), a(this.dropdown).on("change", ".select2-input", function (a) {
          a.stopPropagation();
        }), a.fn.mousewheel && d.mousewheel(function (a, b, c, e) {
          var f = d.scrollTop();
          e > 0 && 0 >= f - e ? (d.scrollTop(0), A(a)) : 0 > e && d.get(0).scrollHeight - d.scrollTop() + e <= d.height() && (d.scrollTop(d.get(0).scrollHeight - d.height()), A(a));
        }), u(e), e.on("keyup-change input paste", this.bind(this.updateResults)), e.on("focus", function () {
          e.addClass("select2-focused");
        }), e.on("blur", function () {
          e.removeClass("select2-focused");
        }), this.dropdown.on("mouseup", f, this.bind(function (b) {
          a(b.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(b), this.selectHighlighted(b));
        })), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function (a) {
          a.stopPropagation();
        }), this.nextSearchTerm = b, a.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== c.maximumInputLength && this.search.attr("maxlength", c.maximumInputLength);
        var h = c.element.prop("disabled");
        h === b && (h = !1), this.enable(!h);
        var i = c.element.prop("readonly");
        i === b && (i = !1), this.readonly(i), k = k || q(), this.autofocus = c.element.prop("autofocus"), c.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", c.searchInputPlaceholder);
      },
      destroy: function destroy() {
        var a = this.opts.element,
          c = a.data("select2"),
          d = this;
        this.close(), a.length && a[0].detachEvent && a.each(function () {
          this.detachEvent("onpropertychange", d._sync);
        }), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, c !== b && (c.container.remove(), c.liveRegion.remove(), c.dropdown.remove(), a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? a.attr({
          tabindex: this.elementTabIndex
        }) : a.removeAttr("tabindex"), a.show()), N.call(this, "container", "liveRegion", "dropdown", "results", "search");
      },
      optionToData: function optionToData(a) {
        return a.is("option") ? {
          id: a.prop("value"),
          text: a.text(),
          element: a.get(),
          css: a.attr("class"),
          disabled: a.prop("disabled"),
          locked: r(a.attr("locked"), "locked") || r(a.data("locked"), !0)
        } : a.is("optgroup") ? {
          text: a.attr("label"),
          children: [],
          element: a.get(),
          css: a.attr("class")
        } : void 0;
      },
      prepareOpts: function prepareOpts(c) {
        var d,
          e,
          f,
          h,
          i = this;
        if (d = c.element, "select" === d.get(0).tagName.toLowerCase() && (this.select = e = c.element), e && a.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
          if (this in c) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
        }), c = a.extend({}, {
          populateResults: function populateResults(d, e, f) {
            var _h,
              j = this.opts.id,
              k = this.liveRegion;
            _h = function h(d, e, l) {
              var m, n, o, p, q, r, s, t, u, v;
              d = c.sortResults(d, e, f);
              var w = [];
              for (m = 0, n = d.length; n > m; m += 1) o = d[m], q = o.disabled === !0, p = !q && j(o) !== b, r = o.children && o.children.length > 0, s = a("<li></li>"), s.addClass("select2-results-dept-" + l), s.addClass("select2-result"), s.addClass(p ? "select2-result-selectable" : "select2-result-unselectable"), q && s.addClass("select2-disabled"), r && s.addClass("select2-result-with-children"), s.addClass(i.opts.formatResultCssClass(o)), s.attr("role", "presentation"), t = a(document.createElement("div")), t.addClass("select2-result-label"), t.attr("id", "select2-result-label-" + g()), t.attr("role", "option"), v = c.formatResult(o, t, f, i.opts.escapeMarkup), v !== b && (t.html(v), s.append(t)), r && (u = a("<ul></ul>"), u.addClass("select2-result-sub"), _h(o.children, u, l + 1), s.append(u)), s.data("select2-data", o), w.push(s[0]);
              e.append(w), k.text(c.formatMatches(d.length));
            }, _h(e, d, 0);
          }
        }, a.fn.select2.defaults, c), "function" != typeof c.id && (f = c.id, c.id = function (a) {
          return a[f];
        }), a.isArray(c.element.data("select2Tags"))) {
          if ("tags" in c) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + c.element.attr("id");
          c.tags = c.element.data("select2Tags");
        }
        if (e ? (c.query = this.bind(function (a) {
          var f,
            g,
            _h2,
            c = {
              results: [],
              more: !1
            },
            e = a.term;
          _h2 = function h(b, c) {
            var d;
            b.is("option") ? a.matcher(e, b.text(), b) && c.push(i.optionToData(b)) : b.is("optgroup") && (d = i.optionToData(b), b.children().each2(function (a, b) {
              _h2(b, d.children);
            }), d.children.length > 0 && c.push(d));
          }, f = d.children(), this.getPlaceholder() !== b && f.length > 0 && (g = this.getPlaceholderOption(), g && (f = f.not(g))), f.each2(function (a, b) {
            _h2(b, c.results);
          }), a.callback(c);
        }), c.id = function (a) {
          return a.id;
        }) : "query" in c || ("ajax" in c ? (h = c.element.data("ajax-url"), h && h.length > 0 && (c.ajax.url = h), c.query = G.call(c.element, c.ajax)) : "data" in c ? c.query = H(c.data) : "tags" in c && (c.query = I(c.tags), c.createSearchChoice === b && (c.createSearchChoice = function (b) {
          return {
            id: a.trim(b),
            text: a.trim(b)
          };
        }), c.initSelection === b && (c.initSelection = function (b, d) {
          var e = [];
          a(s(b.val(), c.separator)).each(function () {
            var b = {
                id: this,
                text: this
              },
              d = c.tags;
            a.isFunction(d) && (d = d()), a(d).each(function () {
              return r(this.id, b.id) ? (b = this, !1) : void 0;
            }), e.push(b);
          }), d(e);
        }))), "function" != typeof c.query) throw "query function not defined for Select2 " + c.element.attr("id");
        if ("top" === c.createSearchChoicePosition) c.createSearchChoicePosition = function (a, b) {
          a.unshift(b);
        };else if ("bottom" === c.createSearchChoicePosition) c.createSearchChoicePosition = function (a, b) {
          a.push(b);
        };else if ("function" != typeof c.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
        return c;
      },
      monitorSource: function monitorSource() {
        var d,
          c = this.opts.element,
          e = this;
        c.on("change.select2", this.bind(function () {
          this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection();
        })), this._sync = this.bind(function () {
          var a = c.prop("disabled");
          a === b && (a = !1), this.enable(!a);
          var d = c.prop("readonly");
          d === b && (d = !1), this.readonly(d), D(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(K(this.opts.containerCssClass, this.opts.element)), D(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(K(this.opts.dropdownCssClass, this.opts.element));
        }), c.length && c[0].attachEvent && c.each(function () {
          this.attachEvent("onpropertychange", e._sync);
        }), d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, d !== b && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new d(function (b) {
          a.each(b, e._sync);
        }), this.propertyObserver.observe(c.get(0), {
          attributes: !0,
          subtree: !1
        }));
      },
      triggerSelect: function triggerSelect(b) {
        var c = a.Event("select2-selecting", {
          val: this.id(b),
          object: b,
          choice: b
        });
        return this.opts.element.trigger(c), !c.isDefaultPrevented();
      },
      triggerChange: function triggerChange(b) {
        b = b || {}, b = a.extend({}, b, {
          type: "change",
          val: this.val()
        }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(b), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur();
      },
      isInterfaceEnabled: function isInterfaceEnabled() {
        return this.enabledInterface === !0;
      },
      enableInterface: function enableInterface() {
        var a = this._enabled && !this._readonly,
          b = !a;
        return a === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", b), this.close(), this.enabledInterface = a, !0);
      },
      enable: function enable(a) {
        a === b && (a = !0), this._enabled !== a && (this._enabled = a, this.opts.element.prop("disabled", !a), this.enableInterface());
      },
      disable: function disable() {
        this.enable(!1);
      },
      readonly: function readonly(a) {
        a === b && (a = !1), this._readonly !== a && (this._readonly = a, this.opts.element.prop("readonly", a), this.enableInterface());
      },
      opened: function opened() {
        return this.container ? this.container.hasClass("select2-dropdown-open") : !1;
      },
      positionDropdown: function positionDropdown() {
        var t,
          u,
          v,
          w,
          x,
          b = this.dropdown,
          c = this.container.offset(),
          d = this.container.outerHeight(!1),
          e = this.container.outerWidth(!1),
          f = b.outerHeight(!1),
          g = a(window),
          h = g.width(),
          i = g.height(),
          j = g.scrollLeft() + h,
          l = g.scrollTop() + i,
          m = c.top + d,
          n = c.left,
          o = l >= m + f,
          p = c.top - f >= g.scrollTop(),
          q = b.outerWidth(!1),
          r = j >= n + q,
          s = b.hasClass("select2-drop-above");
        s ? (u = !0, !p && o && (v = !0, u = !1)) : (u = !1, !o && p && (v = !0, u = !0)), v && (b.hide(), c = this.container.offset(), d = this.container.outerHeight(!1), e = this.container.outerWidth(!1), f = b.outerHeight(!1), j = g.scrollLeft() + h, l = g.scrollTop() + i, m = c.top + d, n = c.left, q = b.outerWidth(!1), r = j >= n + q, b.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (x = a(".select2-results", b)[0], b.addClass("select2-drop-auto-width"), b.css("width", ""), q = b.outerWidth(!1) + (x.scrollHeight === x.clientHeight ? 0 : k.width), q > e ? e = q : q = e, f = b.outerHeight(!1), r = j >= n + q) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (t = this.body.offset(), m -= t.top, n -= t.left), r || (n = c.left + this.container.outerWidth(!1) - q), w = {
          left: n,
          width: e
        }, u ? (w.top = c.top - f, w.bottom = "auto", this.container.addClass("select2-drop-above"), b.addClass("select2-drop-above")) : (w.top = m, w.bottom = "auto", this.container.removeClass("select2-drop-above"), b.removeClass("select2-drop-above")), w = a.extend(w, K(this.opts.dropdownCss, this.opts.element)), b.css(w);
      },
      shouldOpen: function shouldOpen() {
        var b;
        return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (b = a.Event("select2-opening"), this.opts.element.trigger(b), !b.isDefaultPrevented());
      },
      clearDropdownAlignmentPreference: function clearDropdownAlignmentPreference() {
        this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above");
      },
      open: function open() {
        return this.shouldOpen() ? (this.opening(), j.on("mousemove.select2Event", function (a) {
          i.x = a.pageX, i.y = a.pageY;
        }), !0) : !1;
      },
      opening: function opening() {
        var f,
          b = this.containerEventName,
          c = "scroll." + b,
          d = "resize." + b,
          e = "orientationchange." + b;
        this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), f = a("#select2-drop-mask"), 0 == f.length && (f = a(document.createElement("div")), f.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), f.hide(), f.appendTo(this.body), f.on("mousedown touchstart click", function (b) {
          n(f);
          var d,
            c = a("#select2-drop");
          c.length > 0 && (d = c.data("select2"), d.opts.selectOnBlur && d.selectHighlighted({
            noFocus: !0
          }), d.close(), b.preventDefault(), b.stopPropagation());
        })), this.dropdown.prev()[0] !== f[0] && this.dropdown.before(f), a("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), f.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
        var g = this;
        this.container.parents().add(window).each(function () {
          a(this).on(d + " " + c + " " + e, function () {
            g.opened() && g.positionDropdown();
          });
        });
      },
      close: function close() {
        if (this.opened()) {
          var b = this.containerEventName,
            c = "scroll." + b,
            d = "resize." + b,
            e = "orientationchange." + b;
          this.container.parents().add(window).each(function () {
            a(this).off(c).off(d).off(e);
          }), this.clearDropdownAlignmentPreference(), a("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), j.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(a.Event("select2-close"));
        }
      },
      externalSearch: function externalSearch(a) {
        this.open(), this.search.val(a), this.updateResults(!1);
      },
      clearSearch: function clearSearch() {},
      getMaximumSelectionSize: function getMaximumSelectionSize() {
        return K(this.opts.maximumSelectionSize, this.opts.element);
      },
      ensureHighlightVisible: function ensureHighlightVisible() {
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          b = this.results;
        if (d = this.highlight(), !(0 > d)) {
          if (0 == d) return b.scrollTop(0), void 0;
          c = this.findHighlightableChoices().find(".select2-result-label"), e = a(c[d]), j = (e.offset() || {}).top || 0, f = j + e.outerHeight(!0), d === c.length - 1 && (i = b.find("li.select2-more-results"), i.length > 0 && (f = i.offset().top + i.outerHeight(!0))), g = b.offset().top + b.outerHeight(!0), f > g && b.scrollTop(b.scrollTop() + (f - g)), h = j - b.offset().top, 0 > h && "none" != e.css("display") && b.scrollTop(b.scrollTop() + h);
        }
      },
      findHighlightableChoices: function findHighlightableChoices() {
        return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)");
      },
      moveHighlight: function moveHighlight(b) {
        for (var c = this.findHighlightableChoices(), d = this.highlight(); d > -1 && d < c.length;) {
          d += b;
          var e = a(c[d]);
          if (e.hasClass("select2-result-selectable") && !e.hasClass("select2-disabled") && !e.hasClass("select2-selected")) {
            this.highlight(d);
            break;
          }
        }
      },
      highlight: function highlight(b) {
        var d,
          e,
          c = this.findHighlightableChoices();
        return 0 === arguments.length ? p(c.filter(".select2-highlighted")[0], c.get()) : (b >= c.length && (b = c.length - 1), 0 > b && (b = 0), this.removeHighlight(), d = a(c[b]), d.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", d.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(d.text()), e = d.data("select2-data"), e && this.opts.element.trigger({
          type: "select2-highlight",
          val: this.id(e),
          choice: e
        }), void 0);
      },
      removeHighlight: function removeHighlight() {
        this.results.find(".select2-highlighted").removeClass("select2-highlighted");
      },
      touchMoved: function touchMoved() {
        this._touchMoved = !0;
      },
      clearTouchMoved: function clearTouchMoved() {
        this._touchMoved = !1;
      },
      countSelectableResults: function countSelectableResults() {
        return this.findHighlightableChoices().length;
      },
      highlightUnderEvent: function highlightUnderEvent(b) {
        var c = a(b.target).closest(".select2-result-selectable");
        if (c.length > 0 && !c.is(".select2-highlighted")) {
          var d = this.findHighlightableChoices();
          this.highlight(d.index(c));
        } else 0 == c.length && this.removeHighlight();
      },
      loadMoreIfNeeded: function loadMoreIfNeeded() {
        var c,
          a = this.results,
          b = a.find("li.select2-more-results"),
          d = this.resultsPage + 1,
          e = this,
          f = this.search.val(),
          g = this.context;
        0 !== b.length && (c = b.offset().top - a.offset().top - a.height(), c <= this.opts.loadMorePadding && (b.addClass("select2-active"), this.opts.query({
          element: this.opts.element,
          term: f,
          page: d,
          context: g,
          matcher: this.opts.matcher,
          callback: this.bind(function (c) {
            e.opened() && (e.opts.populateResults.call(this, a, c.results, {
              term: f,
              page: d,
              context: g
            }), e.postprocessResults(c, !1, !1), c.more === !0 ? (b.detach().appendTo(a).text(K(e.opts.formatLoadMore, e.opts.element, d + 1)), window.setTimeout(function () {
              e.loadMoreIfNeeded();
            }, 10)) : b.remove(), e.positionDropdown(), e.resultsPage = d, e.context = c.context, this.opts.element.trigger({
              type: "select2-loaded",
              items: c
            }));
          })
        })));
      },
      tokenize: function tokenize() {},
      updateResults: function updateResults(c) {
        function m() {
          d.removeClass("select2-active"), h.positionDropdown(), e.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? h.liveRegion.text(e.text()) : h.liveRegion.text(h.opts.formatMatches(e.find(".select2-result-selectable").length));
        }
        function n(a) {
          e.html(a), m();
        }
        var g,
          i,
          l,
          d = this.search,
          e = this.results,
          f = this.opts,
          h = this,
          j = d.val(),
          k = a.data(this.container, "select2-last-term");
        if ((c === !0 || !k || !r(j, k)) && (a.data(this.container, "select2-last-term", j), c === !0 || this.showSearchInput !== !1 && this.opened())) {
          l = ++this.queryCount;
          var o = this.getMaximumSelectionSize();
          if (o >= 1 && (g = this.data(), a.isArray(g) && g.length >= o && J(f.formatSelectionTooBig, "formatSelectionTooBig"))) return n("<li class='select2-selection-limit'>" + K(f.formatSelectionTooBig, f.element, o) + "</li>"), void 0;
          if (d.val().length < f.minimumInputLength) return J(f.formatInputTooShort, "formatInputTooShort") ? n("<li class='select2-no-results'>" + K(f.formatInputTooShort, f.element, d.val(), f.minimumInputLength) + "</li>") : n(""), c && this.showSearch && this.showSearch(!0), void 0;
          if (f.maximumInputLength && d.val().length > f.maximumInputLength) return J(f.formatInputTooLong, "formatInputTooLong") ? n("<li class='select2-no-results'>" + K(f.formatInputTooLong, f.element, d.val(), f.maximumInputLength) + "</li>") : n(""), void 0;
          f.formatSearching && 0 === this.findHighlightableChoices().length && n("<li class='select2-searching'>" + K(f.formatSearching, f.element) + "</li>"), d.addClass("select2-active"), this.removeHighlight(), i = this.tokenize(), i != b && null != i && d.val(i), this.resultsPage = 1, f.query({
            element: f.element,
            term: d.val(),
            page: this.resultsPage,
            context: null,
            matcher: f.matcher,
            callback: this.bind(function (g) {
              var i;
              if (l == this.queryCount) {
                if (!this.opened()) return this.search.removeClass("select2-active"), void 0;
                if (g.hasError !== b && J(f.formatAjaxError, "formatAjaxError")) return n("<li class='select2-ajax-error'>" + K(f.formatAjaxError, f.element, g.jqXHR, g.textStatus, g.errorThrown) + "</li>"), void 0;
                if (this.context = g.context === b ? null : g.context, this.opts.createSearchChoice && "" !== d.val() && (i = this.opts.createSearchChoice.call(h, d.val(), g.results), i !== b && null !== i && h.id(i) !== b && null !== h.id(i) && 0 === a(g.results).filter(function () {
                  return r(h.id(this), h.id(i));
                }).length && this.opts.createSearchChoicePosition(g.results, i)), 0 === g.results.length && J(f.formatNoMatches, "formatNoMatches")) return n("<li class='select2-no-results'>" + K(f.formatNoMatches, f.element, d.val()) + "</li>"), void 0;
                e.empty(), h.opts.populateResults.call(this, e, g.results, {
                  term: d.val(),
                  page: this.resultsPage,
                  context: null
                }), g.more === !0 && J(f.formatLoadMore, "formatLoadMore") && (e.append("<li class='select2-more-results'>" + f.escapeMarkup(K(f.formatLoadMore, f.element, this.resultsPage)) + "</li>"), window.setTimeout(function () {
                  h.loadMoreIfNeeded();
                }, 10)), this.postprocessResults(g, c), m(), this.opts.element.trigger({
                  type: "select2-loaded",
                  items: g
                });
              }
            })
          });
        }
      },
      cancel: function cancel() {
        this.close();
      },
      blur: function blur() {
        this.opts.selectOnBlur && this.selectHighlighted({
          noFocus: !0
        }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
      },
      focusSearch: function focusSearch() {
        y(this.search);
      },
      selectHighlighted: function selectHighlighted(a) {
        if (this._touchMoved) return this.clearTouchMoved(), void 0;
        var b = this.highlight(),
          c = this.results.find(".select2-highlighted"),
          d = c.closest(".select2-result").data("select2-data");
        d ? (this.highlight(b), this.onSelect(d, a)) : a && a.noFocus && this.close();
      },
      getPlaceholder: function getPlaceholder() {
        var a;
        return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((a = this.getPlaceholderOption()) !== b ? a.text() : b);
      },
      getPlaceholderOption: function getPlaceholderOption() {
        if (this.select) {
          var c = this.select.children("option").first();
          if (this.opts.placeholderOption !== b) return "first" === this.opts.placeholderOption && c || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
          if ("" === a.trim(c.text()) && "" === c.val()) return c;
        }
      },
      initContainerWidth: function initContainerWidth() {
        function c() {
          var c, d, e, f, g, h;
          if ("off" === this.opts.width) return null;
          if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
          if ("copy" === this.opts.width || "resolve" === this.opts.width) {
            if (c = this.opts.element.attr("style"), c !== b) for (d = c.split(";"), f = 0, g = d.length; g > f; f += 1) if (h = d[f].replace(/\s/g, ""), e = h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== e && e.length >= 1) return e[1];
            return "resolve" === this.opts.width ? (c = this.opts.element.css("width"), c.indexOf("%") > 0 ? c : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null;
          }
          return a.isFunction(this.opts.width) ? this.opts.width() : this.opts.width;
        }
        var d = c.call(this);
        null !== d && this.container.css("width", d);
      }
    }), e = O(d, {
      createContainer: function createContainer() {
        var b = a(document.createElement("div")).attr({
          "class": "select2-container"
        }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
        return b;
      },
      enableInterface: function enableInterface() {
        this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled());
      },
      opening: function opening() {
        var c, d, e;
        this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), c = this.search.get(0), c.createTextRange ? (d = c.createTextRange(), d.collapse(!1), d.select()) : c.setSelectionRange && (e = this.search.val().length, c.setSelectionRange(e, e))), "" === this.search.val() && this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(a.Event("select2-open"));
      },
      close: function close() {
        this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus());
      },
      focus: function focus() {
        this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus());
      },
      isFocused: function isFocused() {
        return this.container.hasClass("select2-container-active");
      },
      cancel: function cancel() {
        this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus();
      },
      destroy: function destroy() {
        a("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), N.call(this, "selection", "focusser");
      },
      initContainer: function initContainer() {
        var b,
          h,
          d = this.container,
          e = this.dropdown,
          f = g();
        this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = b = d.find(".select2-choice"), this.focusser = d.find(".select2-focusser"), b.find(".select2-chosen").attr("id", "select2-chosen-" + f), this.focusser.attr("aria-labelledby", "select2-chosen-" + f), this.results.attr("id", "select2-results-" + f), this.search.attr("aria-owns", "select2-results-" + f), this.focusser.attr("id", "s2id_autogen" + f), h = a("label[for='" + this.opts.element.attr("id") + "']"), this.focusser.prev().text(h.text()).attr("for", this.focusser.attr("id"));
        var i = this.opts.element.attr("title");
        this.opts.element.attr("title", i || h.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(a("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function (a) {
          if (this.isInterfaceEnabled() && 229 != a.keyCode) {
            if (a.which === c.PAGE_UP || a.which === c.PAGE_DOWN) return A(a), void 0;
            switch (a.which) {
              case c.UP:
              case c.DOWN:
                return this.moveHighlight(a.which === c.UP ? -1 : 1), A(a), void 0;
              case c.ENTER:
                return this.selectHighlighted(), A(a), void 0;
              case c.TAB:
                return this.selectHighlighted({
                  noFocus: !0
                }), void 0;
              case c.ESC:
                return this.cancel(a), A(a), void 0;
            }
          }
        })), this.search.on("blur", this.bind(function () {
          document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function () {
            this.opened() && this.search.focus();
          }), 0);
        })), this.focusser.on("keydown", this.bind(function (a) {
          if (this.isInterfaceEnabled() && a.which !== c.TAB && !c.isControl(a) && !c.isFunctionKey(a) && a.which !== c.ESC) {
            if (this.opts.openOnEnter === !1 && a.which === c.ENTER) return A(a), void 0;
            if (a.which == c.DOWN || a.which == c.UP || a.which == c.ENTER && this.opts.openOnEnter) {
              if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return;
              return this.open(), A(a), void 0;
            }
            return a.which == c.DELETE || a.which == c.BACKSPACE ? (this.opts.allowClear && this.clear(), A(a), void 0) : void 0;
          }
        })), u(this.focusser), this.focusser.on("keyup-change input", this.bind(function (a) {
          if (this.opts.minimumResultsForSearch >= 0) {
            if (a.stopPropagation(), this.opened()) return;
            this.open();
          }
        })), b.on("mousedown touchstart", "abbr", this.bind(function (a) {
          this.isInterfaceEnabled() && (this.clear(), B(a), this.close(), this.selection.focus());
        })), b.on("mousedown touchstart", this.bind(function (c) {
          n(b), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), A(c);
        })), e.on("mousedown touchstart", this.bind(function () {
          this.opts.shouldFocusInput(this) && this.search.focus();
        })), b.on("focus", this.bind(function (a) {
          A(a);
        })), this.focusser.on("focus", this.bind(function () {
          this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active");
        })).on("blur", this.bind(function () {
          this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(a.Event("select2-blur")));
        })), this.search.on("focus", this.bind(function () {
          this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active");
        })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder();
      },
      clear: function clear(b) {
        var c = this.selection.data("select2-data");
        if (c) {
          var d = a.Event("select2-clearing");
          if (this.opts.element.trigger(d), d.isDefaultPrevented()) return;
          var e = this.getPlaceholderOption();
          this.opts.element.val(e ? e.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), b !== !1 && (this.opts.element.trigger({
            type: "select2-removed",
            val: this.id(c),
            choice: c
          }), this.triggerChange({
            removed: c
          }));
        }
      },
      initSelection: function initSelection() {
        if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();else {
          var c = this;
          this.opts.initSelection.call(null, this.opts.element, function (a) {
            a !== b && null !== a && (c.updateSelection(a), c.close(), c.setPlaceholder(), c.nextSearchTerm = c.opts.nextSearchTerm(a, c.search.val()));
          });
        }
      },
      isPlaceholderOptionSelected: function isPlaceholderOptionSelected() {
        var a;
        return this.getPlaceholder() === b ? !1 : (a = this.getPlaceholderOption()) !== b && a.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === b || null === this.opts.element.val();
      },
      prepareOpts: function prepareOpts() {
        var b = this.parent.prepareOpts.apply(this, arguments),
          c = this;
        return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function (a, b) {
          var d = a.find("option").filter(function () {
            return this.selected && !this.disabled;
          });
          b(c.optionToData(d));
        } : "data" in b && (b.initSelection = b.initSelection || function (c, d) {
          var e = c.val(),
            f = null;
          b.query({
            matcher: function matcher(a, c, d) {
              var g = r(e, b.id(d));
              return g && (f = d), g;
            },
            callback: a.isFunction(d) ? function () {
              d(f);
            } : a.noop
          });
        }), b;
      },
      getPlaceholder: function getPlaceholder() {
        return this.select && this.getPlaceholderOption() === b ? b : this.parent.getPlaceholder.apply(this, arguments);
      },
      setPlaceholder: function setPlaceholder() {
        var a = this.getPlaceholder();
        if (this.isPlaceholderOptionSelected() && a !== b) {
          if (this.select && this.getPlaceholderOption() === b) return;
          this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear");
        }
      },
      postprocessResults: function postprocessResults(a, b, c) {
        var d = 0,
          e = this;
        if (this.findHighlightableChoices().each2(function (a, b) {
          return r(e.id(b.data("select2-data")), e.opts.element.val()) ? (d = a, !1) : void 0;
        }), c !== !1 && (b === !0 && d >= 0 ? this.highlight(d) : this.highlight(0)), b === !0) {
          var g = this.opts.minimumResultsForSearch;
          g >= 0 && this.showSearch(L(a.results) >= g);
        }
      },
      showSearch: function showSearch(b) {
        this.showSearchInput !== b && (this.showSearchInput = b, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !b), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !b), a(this.dropdown, this.container).toggleClass("select2-with-searchbox", b));
      },
      onSelect: function onSelect(a, b) {
        if (this.triggerSelect(a)) {
          var c = this.opts.element.val(),
            d = this.data();
          this.opts.element.val(this.id(a)), this.updateSelection(a), this.opts.element.trigger({
            type: "select2-selected",
            val: this.id(a),
            choice: a
          }), this.nextSearchTerm = this.opts.nextSearchTerm(a, this.search.val()), this.close(), b && b.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), r(c, this.id(a)) || this.triggerChange({
            added: a,
            removed: d
          });
        }
      },
      updateSelection: function updateSelection(a) {
        var d,
          e,
          c = this.selection.find(".select2-chosen");
        this.selection.data("select2-data", a), c.empty(), null !== a && (d = this.opts.formatSelection(a, c, this.opts.escapeMarkup)), d !== b && c.append(d), e = this.opts.formatSelectionCssClass(a, c), e !== b && c.addClass(e), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear");
      },
      val: function val() {
        var a,
          c = !1,
          d = null,
          e = this,
          f = this.data();
        if (0 === arguments.length) return this.opts.element.val();
        if (a = arguments[0], arguments.length > 1 && (c = arguments[1]), this.select) this.select.val(a).find("option").filter(function () {
          return this.selected;
        }).each2(function (a, b) {
          return d = e.optionToData(b), !1;
        }), this.updateSelection(d), this.setPlaceholder(), c && this.triggerChange({
          added: d,
          removed: f
        });else {
          if (!a && 0 !== a) return this.clear(c), void 0;
          if (this.opts.initSelection === b) throw new Error("cannot call val() if initSelection() is not defined");
          this.opts.element.val(a), this.opts.initSelection(this.opts.element, function (a) {
            e.opts.element.val(a ? e.id(a) : ""), e.updateSelection(a), e.setPlaceholder(), c && e.triggerChange({
              added: a,
              removed: f
            });
          });
        }
      },
      clearSearch: function clearSearch() {
        this.search.val(""), this.focusser.val("");
      },
      data: function data(a) {
        var c,
          d = !1;
        return 0 === arguments.length ? (c = this.selection.data("select2-data"), c == b && (c = null), c) : (arguments.length > 1 && (d = arguments[1]), a ? (c = this.data(), this.opts.element.val(a ? this.id(a) : ""), this.updateSelection(a), d && this.triggerChange({
          added: a,
          removed: c
        })) : this.clear(d), void 0);
      }
    }), f = O(d, {
      createContainer: function createContainer() {
        var b = a(document.createElement("div")).attr({
          "class": "select2-container select2-container-multi"
        }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
        return b;
      },
      prepareOpts: function prepareOpts() {
        var b = this.parent.prepareOpts.apply(this, arguments),
          c = this;
        return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function (a, b) {
          var d = [];
          a.find("option").filter(function () {
            return this.selected && !this.disabled;
          }).each2(function (a, b) {
            d.push(c.optionToData(b));
          }), b(d);
        } : "data" in b && (b.initSelection = b.initSelection || function (c, d) {
          var e = s(c.val(), b.separator),
            f = [];
          b.query({
            matcher: function matcher(c, d, g) {
              var h = a.grep(e, function (a) {
                return r(a, b.id(g));
              }).length;
              return h && f.push(g), h;
            },
            callback: a.isFunction(d) ? function () {
              for (var a = [], c = 0; c < e.length; c++) for (var g = e[c], h = 0; h < f.length; h++) {
                var i = f[h];
                if (r(g, b.id(i))) {
                  a.push(i), f.splice(h, 1);
                  break;
                }
              }
              d(a);
            } : a.noop
          });
        }), b;
      },
      selectChoice: function selectChoice(a) {
        var b = this.container.find(".select2-search-choice-focus");
        b.length && a && a[0] == b[0] || (b.length && this.opts.element.trigger("choice-deselected", b), b.removeClass("select2-search-choice-focus"), a && a.length && (this.close(), a.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", a)));
      },
      destroy: function destroy() {
        a("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), N.call(this, "searchContainer", "selection");
      },
      initContainer: function initContainer() {
        var d,
          b = ".select2-choices";
        this.searchContainer = this.container.find(".select2-search-field"), this.selection = d = this.container.find(b);
        var e = this;
        this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function () {
          e.search[0].focus(), e.selectChoice(a(this));
        }), this.search.attr("id", "s2id_autogen" + g()), this.search.prev().text(a("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function () {
          this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open());
        })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function (a) {
          if (this.isInterfaceEnabled()) {
            ++this.keydowns;
            var b = d.find(".select2-search-choice-focus"),
              e = b.prev(".select2-search-choice:not(.select2-locked)"),
              f = b.next(".select2-search-choice:not(.select2-locked)"),
              g = z(this.search);
            if (b.length && (a.which == c.LEFT || a.which == c.RIGHT || a.which == c.BACKSPACE || a.which == c.DELETE || a.which == c.ENTER)) {
              var h = b;
              return a.which == c.LEFT && e.length ? h = e : a.which == c.RIGHT ? h = f.length ? f : null : a.which === c.BACKSPACE ? this.unselect(b.first()) && (this.search.width(10), h = e.length ? e : f) : a.which == c.DELETE ? this.unselect(b.first()) && (this.search.width(10), h = f.length ? f : null) : a.which == c.ENTER && (h = null), this.selectChoice(h), A(a), h && h.length || this.open(), void 0;
            }
            if ((a.which === c.BACKSPACE && 1 == this.keydowns || a.which == c.LEFT) && 0 == g.offset && !g.length) return this.selectChoice(d.find(".select2-search-choice:not(.select2-locked)").last()), A(a), void 0;
            if (this.selectChoice(null), this.opened()) switch (a.which) {
              case c.UP:
              case c.DOWN:
                return this.moveHighlight(a.which === c.UP ? -1 : 1), A(a), void 0;
              case c.ENTER:
                return this.selectHighlighted(), A(a), void 0;
              case c.TAB:
                return this.selectHighlighted({
                  noFocus: !0
                }), this.close(), void 0;
              case c.ESC:
                return this.cancel(a), A(a), void 0;
            }
            if (a.which !== c.TAB && !c.isControl(a) && !c.isFunctionKey(a) && a.which !== c.BACKSPACE && a.which !== c.ESC) {
              if (a.which === c.ENTER) {
                if (this.opts.openOnEnter === !1) return;
                if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return;
              }
              this.open(), (a.which === c.PAGE_UP || a.which === c.PAGE_DOWN) && A(a), a.which === c.ENTER && A(a);
            }
          }
        })), this.search.on("keyup", this.bind(function () {
          this.keydowns = 0, this.resizeSearch();
        })), this.search.on("blur", this.bind(function (b) {
          this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), b.stopImmediatePropagation(), this.opts.element.trigger(a.Event("select2-blur"));
        })), this.container.on("click", b, this.bind(function (b) {
          this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.open(), this.focusSearch(), b.preventDefault()));
        })), this.container.on("focus", b, this.bind(function () {
          this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder());
        })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch();
      },
      enableInterface: function enableInterface() {
        this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled());
      },
      initSelection: function initSelection() {
        if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
          var c = this;
          this.opts.initSelection.call(null, this.opts.element, function (a) {
            a !== b && null !== a && (c.updateSelection(a), c.close(), c.clearSearch());
          });
        }
      },
      clearSearch: function clearSearch() {
        var a = this.getPlaceholder(),
          c = this.getMaxSearchWidth();
        a !== b && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(a).addClass("select2-default"), this.search.width(c > 0 ? c : this.container.css("width"))) : this.search.val("").width(10);
      },
      clearPlaceholder: function clearPlaceholder() {
        this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default");
      },
      opening: function opening() {
        this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), "" === this.search.val() && this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.search.select()), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(a.Event("select2-open"));
      },
      close: function close() {
        this.opened() && this.parent.close.apply(this, arguments);
      },
      focus: function focus() {
        this.close(), this.search.focus();
      },
      isFocused: function isFocused() {
        return this.search.hasClass("select2-focused");
      },
      updateSelection: function updateSelection(b) {
        var c = [],
          d = [],
          e = this;
        a(b).each(function () {
          p(e.id(this), c) < 0 && (c.push(e.id(this)), d.push(this));
        }), b = d, this.selection.find(".select2-search-choice").remove(), a(b).each(function () {
          e.addSelectedChoice(this);
        }), e.postprocessResults();
      },
      tokenize: function tokenize() {
        var a = this.search.val();
        a = this.opts.tokenizer.call(this, a, this.data(), this.bind(this.onSelect), this.opts), null != a && a != b && (this.search.val(a), a.length > 0 && this.open());
      },
      onSelect: function onSelect(a, c) {
        this.triggerSelect(a) && "" !== a.text && (this.addSelectedChoice(a), this.opts.element.trigger({
          type: "selected",
          val: this.id(a),
          choice: a
        }), this.nextSearchTerm = this.opts.nextSearchTerm(a, this.search.val()), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(a, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
          added: a
        }), c && c.noFocus || this.focusSearch());
      },
      cancel: function cancel() {
        this.close(), this.focusSearch();
      },
      addSelectedChoice: function addSelectedChoice(c) {
        var j,
          k,
          d = !c.locked,
          e = a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
          f = a("<li class='select2-search-choice select2-locked'><div></div></li>"),
          g = d ? e : f,
          h = this.id(c),
          i = this.getVal();
        j = this.opts.formatSelection(c, g.find("div"), this.opts.escapeMarkup), j != b && g.find("div").replaceWith("<div>" + j + "</div>"), k = this.opts.formatSelectionCssClass(c, g.find("div")), k != b && g.addClass(k), d && g.find(".select2-search-choice-close").on("mousedown", A).on("click dblclick", this.bind(function (b) {
          this.isInterfaceEnabled() && (this.unselect(a(b.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), A(b), this.close(), this.focusSearch());
        })).on("focus", this.bind(function () {
          this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"));
        })), g.data("select2-data", c), g.insertBefore(this.searchContainer), i.push(h), this.setVal(i);
      },
      unselect: function unselect(b) {
        var d,
          e,
          c = this.getVal();
        if (b = b.closest(".select2-search-choice"), 0 === b.length) throw "Invalid argument: " + b + ". Must be .select2-search-choice";
        if (d = b.data("select2-data")) {
          var f = a.Event("select2-removing");
          if (f.val = this.id(d), f.choice = d, this.opts.element.trigger(f), f.isDefaultPrevented()) return !1;
          for (; (e = p(this.id(d), c)) >= 0;) c.splice(e, 1), this.setVal(c), this.select && this.postprocessResults();
          return b.remove(), this.opts.element.trigger({
            type: "select2-removed",
            val: this.id(d),
            choice: d
          }), this.triggerChange({
            removed: d
          }), !0;
        }
      },
      postprocessResults: function postprocessResults(a, b, c) {
        var d = this.getVal(),
          e = this.results.find(".select2-result"),
          f = this.results.find(".select2-result-with-children"),
          g = this;
        e.each2(function (a, b) {
          var c = g.id(b.data("select2-data"));
          p(c, d) >= 0 && (b.addClass("select2-selected"), b.find(".select2-result-selectable").addClass("select2-selected"));
        }), f.each2(function (a, b) {
          b.is(".select2-result-selectable") || 0 !== b.find(".select2-result-selectable:not(.select2-selected)").length || b.addClass("select2-selected");
        }), -1 == this.highlight() && c !== !1 && g.highlight(0), !this.opts.createSearchChoice && !e.filter(".select2-result:not(.select2-selected)").length > 0 && (!a || a && !a.more && 0 === this.results.find(".select2-no-results").length) && J(g.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + K(g.opts.formatNoMatches, g.opts.element, g.search.val()) + "</li>");
      },
      getMaxSearchWidth: function getMaxSearchWidth() {
        return this.selection.width() - t(this.search);
      },
      resizeSearch: function resizeSearch() {
        var a,
          b,
          c,
          d,
          e,
          f = t(this.search);
        a = C(this.search) + 10, b = this.search.offset().left, c = this.selection.width(), d = this.selection.offset().left, e = c - (b - d) - f, a > e && (e = c - f), 40 > e && (e = c - f), 0 >= e && (e = a), this.search.width(Math.floor(e));
      },
      getVal: function getVal() {
        var a;
        return this.select ? (a = this.select.val(), null === a ? [] : a) : (a = this.opts.element.val(), s(a, this.opts.separator));
      },
      setVal: function setVal(b) {
        var c;
        this.select ? this.select.val(b) : (c = [], a(b).each(function () {
          p(this, c) < 0 && c.push(this);
        }), this.opts.element.val(0 === c.length ? "" : c.join(this.opts.separator)));
      },
      buildChangeDetails: function buildChangeDetails(a, b) {
        for (var b = b.slice(0), a = a.slice(0), c = 0; c < b.length; c++) for (var d = 0; d < a.length; d++) r(this.opts.id(b[c]), this.opts.id(a[d])) && (b.splice(c, 1), c > 0 && c--, a.splice(d, 1), d--);
        return {
          added: b,
          removed: a
        };
      },
      val: function val(c, d) {
        var e,
          f = this;
        if (0 === arguments.length) return this.getVal();
        if (e = this.data(), e.length || (e = []), !c && 0 !== c) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), d && this.triggerChange({
          added: this.data(),
          removed: e
        }), void 0;
        if (this.setVal(c), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), d && this.triggerChange(this.buildChangeDetails(e, this.data()));else {
          if (this.opts.initSelection === b) throw new Error("val() cannot be called if initSelection() is not defined");
          this.opts.initSelection(this.opts.element, function (b) {
            var c = a.map(b, f.id);
            f.setVal(c), f.updateSelection(b), f.clearSearch(), d && f.triggerChange(f.buildChangeDetails(e, f.data()));
          });
        }
        this.clearSearch();
      },
      onSortStart: function onSortStart() {
        if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
        this.search.width(0), this.searchContainer.hide();
      },
      onSortEnd: function onSortEnd() {
        var b = [],
          c = this;
        this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function () {
          b.push(c.opts.id(a(this).data("select2-data")));
        }), this.setVal(b), this.triggerChange();
      },
      data: function data(b, c) {
        var e,
          f,
          d = this;
        return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function () {
          return a(this).data("select2-data");
        }).get() : (f = this.data(), b || (b = []), e = a.map(b, function (a) {
          return d.opts.id(a);
        }), this.setVal(e), this.updateSelection(b), this.clearSearch(), c && this.triggerChange(this.buildChangeDetails(f, this.data())), void 0);
      }
    }), a.fn.select2 = function () {
      var d,
        e,
        f,
        g,
        h,
        c = Array.prototype.slice.call(arguments, 0),
        i = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
        j = ["opened", "isFocused", "container", "dropdown"],
        k = ["val", "data"],
        l = {
          search: "externalSearch"
        };
      return this.each(function () {
        if (0 === c.length || "object" == _typeof(c[0])) d = 0 === c.length ? {} : a.extend({}, c[0]), d.element = a(this), "select" === d.element.get(0).tagName.toLowerCase() ? h = d.element.prop("multiple") : (h = d.multiple || !1, "tags" in d && (d.multiple = h = !0)), e = h ? new window.Select2["class"].multi() : new window.Select2["class"].single(), e.init(d);else {
          if ("string" != typeof c[0]) throw "Invalid arguments to select2 plugin: " + c;
          if (p(c[0], i) < 0) throw "Unknown method: " + c[0];
          if (g = b, e = a(this).data("select2"), e === b) return;
          if (f = c[0], "container" === f ? g = e.container : "dropdown" === f ? g = e.dropdown : (l[f] && (f = l[f]), g = e[f].apply(e, c.slice(1))), p(c[0], j) >= 0 || p(c[0], k) >= 0 && 1 == c.length) return !1;
        }
      }), g === b ? this : g;
    }, a.fn.select2.defaults = {
      width: "copy",
      loadMorePadding: 0,
      closeOnSelect: !0,
      openOnEnter: !0,
      containerCss: {},
      dropdownCss: {},
      containerCssClass: "",
      dropdownCssClass: "",
      formatResult: function formatResult(a, b, c, d) {
        var e = [];
        return E(a.text, c.term, e, d), e.join("");
      },
      formatSelection: function formatSelection(a, c, d) {
        return a ? d(a.text) : b;
      },
      sortResults: function sortResults(a) {
        return a;
      },
      formatResultCssClass: function formatResultCssClass(a) {
        return a.css;
      },
      formatSelectionCssClass: function formatSelectionCssClass() {
        return b;
      },
      minimumResultsForSearch: 0,
      minimumInputLength: 0,
      maximumInputLength: null,
      maximumSelectionSize: 0,
      id: function id(a) {
        return a == b ? null : a.id;
      },
      matcher: function matcher(a, b) {
        return o("" + b).toUpperCase().indexOf(o("" + a).toUpperCase()) >= 0;
      },
      separator: ",",
      tokenSeparators: [],
      tokenizer: M,
      escapeMarkup: F,
      blurOnChange: !1,
      selectOnBlur: !1,
      adaptContainerCssClass: function adaptContainerCssClass(a) {
        return a;
      },
      adaptDropdownCssClass: function adaptDropdownCssClass() {
        return null;
      },
      nextSearchTerm: function nextSearchTerm() {
        return b;
      },
      searchInputPlaceholder: "",
      createSearchChoicePosition: "top",
      shouldFocusInput: function shouldFocusInput(a) {
        var b = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
        return b ? a.opts.minimumResultsForSearch < 0 ? !1 : !0 : !0;
      }
    }, a.fn.select2.locales = [], a.fn.select2.locales.en = {
      formatMatches: function formatMatches(a) {
        return 1 === a ? "One result is available, press enter to select it." : a + " results are available, use up and down arrow keys to navigate.";
      },
      formatNoMatches: function formatNoMatches() {
        return "No matches found";
      },
      formatAjaxError: function formatAjaxError() {
        return "Loading failed";
      },
      formatInputTooShort: function formatInputTooShort(a, b) {
        var c = b - a.length;
        return "Please enter " + c + " or more character" + (1 == c ? "" : "s");
      },
      formatInputTooLong: function formatInputTooLong(a, b) {
        var c = a.length - b;
        return "Please delete " + c + " character" + (1 == c ? "" : "s");
      },
      formatSelectionTooBig: function formatSelectionTooBig(a) {
        return "You can only select " + a + " item" + (1 == a ? "" : "s");
      },
      formatLoadMore: function formatLoadMore() {
        return "Loading more results\u2026";
      },
      formatSearching: function formatSearching() {
        return "Searching\u2026";
      }
    }, a.extend(a.fn.select2.defaults, a.fn.select2.locales.en), a.fn.select2.ajaxDefaults = {
      transport: a.ajax,
      params: {
        type: "GET",
        cache: !1,
        dataType: "json"
      }
    }, window.Select2 = {
      query: {
        ajax: G,
        local: H,
        tags: I
      },
      util: {
        debounce: w,
        markMatch: E,
        escapeMarkup: F,
        stripDiacritics: o
      },
      "class": {
        "abstract": d,
        single: e,
        multi: f
      }
    };
  }
}((jquery__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-b5650f80-bundle-a2a4f8506cb55bb7.js.map