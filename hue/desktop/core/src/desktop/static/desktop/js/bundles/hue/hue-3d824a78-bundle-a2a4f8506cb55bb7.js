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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-3d824a78"],{

/***/ "./desktop/core/src/desktop/js/ext/ace/ext-language_tools.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/ext-language_tools.js ***!
  \*******************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
ace.define("ace/snippets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/lib/lang", "ace/range", "ace/anchor", "ace/keyboard/hash_handler", "ace/tokenizer", "ace/lib/dom", "ace/editor"], function (require, exports, module) {
  "use strict";

  var oop = require("./lib/oop");
  var EventEmitter = require("./lib/event_emitter").EventEmitter;
  var lang = require("./lib/lang");
  var Range = require("./range").Range;
  var Anchor = require("./anchor").Anchor;
  var HashHandler = require("./keyboard/hash_handler").HashHandler;
  var Tokenizer = require("./tokenizer").Tokenizer;
  var comparePoints = Range.comparePoints;
  var SnippetManager = function SnippetManager() {
    this.snippetMap = {};
    this.snippetNameMap = {};
  };
  (function () {
    oop.implement(this, EventEmitter);
    this.getTokenizer = function () {
      function TabstopToken(str, _, stack) {
        str = str.substr(1);
        if (/^\d+$/.test(str) && !stack.inFormatString) return [{
          tabstopId: parseInt(str, 10)
        }];
        return [{
          text: str
        }];
      }
      function escape(ch) {
        return "(?:[^\\\\" + ch + "]|\\\\.)";
      }
      SnippetManager.$tokenizer = new Tokenizer({
        start: [{
          regex: /:/,
          onMatch: function onMatch(val, state, stack) {
            if (stack.length && stack[0].expectIf) {
              stack[0].expectIf = false;
              stack[0].elseBranch = stack[0];
              return [stack[0]];
            }
            return ":";
          }
        }, {
          regex: /\\./,
          onMatch: function onMatch(val, state, stack) {
            var ch = val[1];
            if (ch == "}" && stack.length) {
              val = ch;
            } else if ("`$\\".indexOf(ch) != -1) {
              val = ch;
            } else if (stack.inFormatString) {
              if (ch == "n") val = "\n";else if (ch == "t") val = "\n";else if ("ulULE".indexOf(ch) != -1) {
                val = {
                  changeCase: ch,
                  local: ch > "a"
                };
              }
            }
            return [val];
          }
        }, {
          regex: /}/,
          onMatch: function onMatch(val, state, stack) {
            return [stack.length ? stack.shift() : val];
          }
        }, {
          regex: /\$(?:\d+|\w+)/,
          onMatch: TabstopToken
        }, {
          regex: /\$\{[\dA-Z_a-z]+/,
          onMatch: function onMatch(str, state, stack) {
            var t = TabstopToken(str.substr(1), state, stack);
            stack.unshift(t[0]);
            return t;
          },
          next: "snippetVar"
        }, {
          regex: /\n/,
          token: "newline",
          merge: false
        }],
        snippetVar: [{
          regex: "\\|" + escape("\\|") + "*\\|",
          onMatch: function onMatch(val, state, stack) {
            stack[0].choices = val.slice(1, -1).split(",");
          },
          next: "start"
        }, {
          regex: "/(" + escape("/") + "+)/(?:(" + escape("/") + "*)/)(\\w*):?",
          onMatch: function onMatch(val, state, stack) {
            var ts = stack[0];
            ts.fmtString = val;
            val = this.splitRegex.exec(val);
            ts.guard = val[1];
            ts.fmt = val[2];
            ts.flag = val[3];
            return "";
          },
          next: "start"
        }, {
          regex: "`" + escape("`") + "*`",
          onMatch: function onMatch(val, state, stack) {
            stack[0].code = val.splice(1, -1);
            return "";
          },
          next: "start"
        }, {
          regex: "\\?",
          onMatch: function onMatch(val, state, stack) {
            if (stack[0]) stack[0].expectIf = true;
          },
          next: "start"
        }, {
          regex: "([^:}\\\\]|\\\\.)*:?",
          token: "",
          next: "start"
        }],
        formatString: [{
          regex: "/(" + escape("/") + "+)/",
          token: "regex"
        }, {
          regex: "",
          onMatch: function onMatch(val, state, stack) {
            stack.inFormatString = true;
          },
          next: "start"
        }]
      });
      SnippetManager.prototype.getTokenizer = function () {
        return SnippetManager.$tokenizer;
      };
      return SnippetManager.$tokenizer;
    };
    this.tokenizeTmSnippet = function (str, startState) {
      return this.getTokenizer().getLineTokens(str, startState).tokens.map(function (x) {
        return x.value || x;
      });
    };
    this.$getDefaultValue = function (editor, name) {
      if (/^[A-Z]\d+$/.test(name)) {
        var i = name.substr(1);
        return (this.variables[name[0] + "__"] || {})[i];
      }
      if (/^\d+$/.test(name)) {
        return (this.variables.__ || {})[name];
      }
      name = name.replace(/^TM_/, "");
      if (!editor) return;
      var s = editor.session;
      switch (name) {
        case "CURRENT_WORD":
          var r = s.getWordRange();
        case "SELECTION":
        case "SELECTED_TEXT":
          return s.getTextRange(r);
        case "CURRENT_LINE":
          return s.getLine(editor.getCursorPosition().row);
        case "PREV_LINE":
          // not possible in textmate
          return s.getLine(editor.getCursorPosition().row - 1);
        case "LINE_INDEX":
          return editor.getCursorPosition().column;
        case "LINE_NUMBER":
          return editor.getCursorPosition().row + 1;
        case "SOFT_TABS":
          return s.getUseSoftTabs() ? "YES" : "NO";
        case "TAB_SIZE":
          return s.getTabSize();
        case "FILENAME":
        case "FILEPATH":
          return "";
        case "FULLNAME":
          return "Ace";
      }
    };
    this.variables = {};
    this.getVariableValue = function (editor, varName) {
      if (this.variables.hasOwnProperty(varName)) return this.variables[varName](editor, varName) || "";
      return this.$getDefaultValue(editor, varName) || "";
    };
    this.tmStrFormat = function (str, ch, editor) {
      var flag = ch.flag || "";
      var re = ch.guard;
      re = new RegExp(re, flag.replace(/[^gi]/, ""));
      var fmtTokens = this.tokenizeTmSnippet(ch.fmt, "formatString");
      var _self = this;
      var formatted = str.replace(re, function () {
        _self.variables.__ = arguments;
        var fmtParts = _self.resolveVariables(fmtTokens, editor);
        var gChangeCase = "E";
        for (var i = 0; i < fmtParts.length; i++) {
          var ch = fmtParts[i];
          if (_typeof(ch) == "object") {
            fmtParts[i] = "";
            if (ch.changeCase && ch.local) {
              var next = fmtParts[i + 1];
              if (next && typeof next == "string") {
                if (ch.changeCase == "u") fmtParts[i] = next[0].toUpperCase();else fmtParts[i] = next[0].toLowerCase();
                fmtParts[i + 1] = next.substr(1);
              }
            } else if (ch.changeCase) {
              gChangeCase = ch.changeCase;
            }
          } else if (gChangeCase == "U") {
            fmtParts[i] = ch.toUpperCase();
          } else if (gChangeCase == "L") {
            fmtParts[i] = ch.toLowerCase();
          }
        }
        return fmtParts.join("");
      });
      this.variables.__ = null;
      return formatted;
    };
    this.resolveVariables = function (snippet, editor) {
      var result = [];
      for (var i = 0; i < snippet.length; i++) {
        var ch = snippet[i];
        if (typeof ch == "string") {
          result.push(ch);
        } else if (_typeof(ch) != "object") {
          continue;
        } else if (ch.skip) {
          gotoNext(ch);
        } else if (ch.processed < i) {
          continue;
        } else if (ch.text) {
          var value = this.getVariableValue(editor, ch.text);
          if (value && ch.fmtString) value = this.tmStrFormat(value, ch);
          ch.processed = i;
          if (ch.expectIf == null) {
            if (value) {
              result.push(value);
              gotoNext(ch);
            }
          } else {
            if (value) {
              ch.skip = ch.elseBranch;
            } else gotoNext(ch);
          }
        } else if (ch.tabstopId != null) {
          result.push(ch);
        } else if (ch.changeCase != null) {
          result.push(ch);
        }
      }
      function gotoNext(ch) {
        var i1 = snippet.indexOf(ch, i + 1);
        if (i1 != -1) i = i1;
      }
      return result;
    };
    this.insertSnippetForSelection = function (editor, snippetText) {
      var cursor = editor.getCursorPosition();
      var line = editor.session.getLine(cursor.row);
      var tabString = editor.session.getTabString();
      var indentString = line.match(/^\s*/)[0];
      if (cursor.column < indentString.length) indentString = indentString.slice(0, cursor.column);
      var tokens = this.tokenizeTmSnippet(snippetText);
      tokens = this.resolveVariables(tokens, editor);
      tokens = tokens.map(function (x) {
        if (x == "\n") return x + indentString;
        if (typeof x == "string") return x.replace(/\t/g, tabString);
        return x;
      });
      var tabstops = [];
      tokens.forEach(function (p, i) {
        if (_typeof(p) != "object") return;
        var id = p.tabstopId;
        var ts = tabstops[id];
        if (!ts) {
          ts = tabstops[id] = [];
          ts.index = id;
          ts.value = "";
        }
        if (ts.indexOf(p) !== -1) return;
        ts.push(p);
        var i1 = tokens.indexOf(p, i + 1);
        if (i1 === -1) return;
        var value = tokens.slice(i + 1, i1);
        var isNested = value.some(function (t) {
          return _typeof(t) === "object";
        });
        if (isNested && !ts.value) {
          ts.value = value;
        } else if (value.length && (!ts.value || typeof ts.value !== "string")) {
          ts.value = value.join("");
        }
      });
      tabstops.forEach(function (ts) {
        ts.length = 0;
      });
      var expanding = {};
      function copyValue(val) {
        var copy = [];
        for (var i = 0; i < val.length; i++) {
          var p = val[i];
          if (_typeof(p) == "object") {
            if (expanding[p.tabstopId]) continue;
            var j = val.lastIndexOf(p, i - 1);
            p = copy[j] || {
              tabstopId: p.tabstopId
            };
          }
          copy[i] = p;
        }
        return copy;
      }
      for (var i = 0; i < tokens.length; i++) {
        var p = tokens[i];
        if (_typeof(p) != "object") continue;
        var id = p.tabstopId;
        var i1 = tokens.indexOf(p, i + 1);
        if (expanding[id]) {
          if (expanding[id] === p) expanding[id] = null;
          continue;
        }
        var ts = tabstops[id];
        var arg = typeof ts.value == "string" ? [ts.value] : copyValue(ts.value);
        arg.unshift(i + 1, Math.max(0, i1 - i));
        arg.push(p);
        expanding[id] = p;
        tokens.splice.apply(tokens, arg);
        if (ts.indexOf(p) === -1) ts.push(p);
      }
      var row = 0,
        column = 0;
      var text = "";
      tokens.forEach(function (t) {
        if (typeof t === "string") {
          if (t[0] === "\n") {
            column = t.length - 1;
            row++;
          } else column += t.length;
          text += t;
        } else {
          if (!t.start) t.start = {
            row: row,
            column: column
          };else t.end = {
            row: row,
            column: column
          };
        }
      });
      var range = editor.getSelectionRange();
      var end = editor.session.replace(range, text);
      var tabstopManager = new TabstopManager(editor);
      var selectionId = editor.inVirtualSelectionMode && editor.selection.index;
      tabstopManager.addTabstops(tabstops, range.start, end, selectionId);
    };
    this.insertSnippet = function (editor, snippetText) {
      var self = this;
      if (editor.inVirtualSelectionMode) return self.insertSnippetForSelection(editor, snippetText);
      editor.forEachSelection(function () {
        self.insertSnippetForSelection(editor, snippetText);
      }, null, {
        keepOrder: true
      });
      if (editor.tabstopManager) editor.tabstopManager.tabNext();
    };
    this.$getScope = function (editor) {
      var scope = editor.session.$mode.$id || "";
      scope = scope.split("/").pop();
      if (scope === "html" || scope === "php") {
        if (scope === "php" && !editor.session.$mode.inlinePhp) scope = "html";
        var c = editor.getCursorPosition();
        var state = editor.session.getState(c.row);
        if (_typeof(state) === "object") {
          state = state[0];
        }
        if (state.substring) {
          if (state.substring(0, 3) == "js-") scope = "javascript";else if (state.substring(0, 4) == "css-") scope = "css";else if (state.substring(0, 4) == "php-") scope = "php";
        }
      }
      return scope;
    };
    this.getActiveScopes = function (editor) {
      var scope = this.$getScope(editor);
      var scopes = [scope];
      var snippetMap = this.snippetMap;
      if (snippetMap[scope] && snippetMap[scope].includeScopes) {
        scopes.push.apply(scopes, snippetMap[scope].includeScopes);
      }
      scopes.push("_");
      return scopes;
    };
    this.expandWithTab = function (editor, options) {
      var self = this;
      var result = editor.forEachSelection(function () {
        return self.expandSnippetForSelection(editor, options);
      }, null, {
        keepOrder: true
      });
      if (result && editor.tabstopManager) editor.tabstopManager.tabNext();
      return result;
    };
    this.expandSnippetForSelection = function (editor, options) {
      var cursor = editor.getCursorPosition();
      var line = editor.session.getLine(cursor.row);
      var before = line.substring(0, cursor.column);
      var after = line.substr(cursor.column);
      var snippetMap = this.snippetMap;
      var snippet;
      this.getActiveScopes(editor).some(function (scope) {
        var snippets = snippetMap[scope];
        if (snippets) snippet = this.findMatchingSnippet(snippets, before, after);
        return !!snippet;
      }, this);
      if (!snippet) return false;
      if (options && options.dryRun) return true;
      editor.session.doc.removeInLine(cursor.row, cursor.column - snippet.replaceBefore.length, cursor.column + snippet.replaceAfter.length);
      this.variables.M__ = snippet.matchBefore;
      this.variables.T__ = snippet.matchAfter;
      this.insertSnippetForSelection(editor, snippet.content);
      this.variables.M__ = this.variables.T__ = null;
      return true;
    };
    this.findMatchingSnippet = function (snippetList, before, after) {
      for (var i = snippetList.length; i--;) {
        var s = snippetList[i];
        if (s.startRe && !s.startRe.test(before)) continue;
        if (s.endRe && !s.endRe.test(after)) continue;
        if (!s.startRe && !s.endRe) continue;
        s.matchBefore = s.startRe ? s.startRe.exec(before) : [""];
        s.matchAfter = s.endRe ? s.endRe.exec(after) : [""];
        s.replaceBefore = s.triggerRe ? s.triggerRe.exec(before)[0] : "";
        s.replaceAfter = s.endTriggerRe ? s.endTriggerRe.exec(after)[0] : "";
        return s;
      }
    };
    this.snippetMap = {};
    this.snippetNameMap = {};
    this.register = function (snippets, scope) {
      var snippetMap = this.snippetMap;
      var snippetNameMap = this.snippetNameMap;
      var self = this;
      if (!snippets) snippets = [];
      function wrapRegexp(src) {
        if (src && !/^\^?\(.*\)\$?$|^\\b$/.test(src)) src = "(?:" + src + ")";
        return src || "";
      }
      function guardedRegexp(re, guard, opening) {
        re = wrapRegexp(re);
        guard = wrapRegexp(guard);
        if (opening) {
          re = guard + re;
          if (re && re[re.length - 1] != "$") re = re + "$";
        } else {
          re = re + guard;
          if (re && re[0] != "^") re = "^" + re;
        }
        return new RegExp(re);
      }
      function addSnippet(s) {
        if (!s.scope) s.scope = scope || "_";
        scope = s.scope;
        if (!snippetMap[scope]) {
          snippetMap[scope] = [];
          snippetNameMap[scope] = {};
        }
        var map = snippetNameMap[scope];
        if (s.name) {
          var old = map[s.name];
          if (old) self.unregister(old);
          map[s.name] = s;
        }
        snippetMap[scope].push(s);
        if (s.tabTrigger && !s.trigger) {
          if (!s.guard && /^\w/.test(s.tabTrigger)) s.guard = "\\b";
          s.trigger = lang.escapeRegExp(s.tabTrigger);
        }
        if (!s.trigger && !s.guard && !s.endTrigger && !s.endGuard) return;
        s.startRe = guardedRegexp(s.trigger, s.guard, true);
        s.triggerRe = new RegExp(s.trigger, "", true);
        s.endRe = guardedRegexp(s.endTrigger, s.endGuard, true);
        s.endTriggerRe = new RegExp(s.endTrigger, "", true);
      }
      if (snippets && snippets.content) addSnippet(snippets);else if (Array.isArray(snippets)) snippets.forEach(addSnippet);
      this._signal("registerSnippets", {
        scope: scope
      });
    };
    this.unregister = function (snippets, scope) {
      var snippetMap = this.snippetMap;
      var snippetNameMap = this.snippetNameMap;
      function removeSnippet(s) {
        var nameMap = snippetNameMap[s.scope || scope];
        if (nameMap && nameMap[s.name]) {
          delete nameMap[s.name];
          var map = snippetMap[s.scope || scope];
          var i = map && map.indexOf(s);
          if (i >= 0) map.splice(i, 1);
        }
      }
      if (snippets.content) removeSnippet(snippets);else if (Array.isArray(snippets)) snippets.forEach(removeSnippet);
    };
    this.parseSnippetFile = function (str) {
      str = str.replace(/\r/g, "");
      var list = [],
        snippet = {};
      var re = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm;
      var m;
      while (m = re.exec(str)) {
        if (m[1]) {
          try {
            snippet = JSON.parse(m[1]);
            list.push(snippet);
          } catch (e) {}
        }
        if (m[4]) {
          snippet.content = m[4].replace(/^\t/gm, "");
          list.push(snippet);
          snippet = {};
        } else {
          var key = m[2],
            val = m[3];
          if (key == "regex") {
            var guardRe = /\/((?:[^\/\\]|\\.)*)|$/g;
            snippet.guard = guardRe.exec(val)[1];
            snippet.trigger = guardRe.exec(val)[1];
            snippet.endTrigger = guardRe.exec(val)[1];
            snippet.endGuard = guardRe.exec(val)[1];
          } else if (key == "snippet") {
            snippet.tabTrigger = val.match(/^\S*/)[0];
            if (!snippet.name) snippet.name = val;
          } else {
            snippet[key] = val;
          }
        }
      }
      return list;
    };
    this.getSnippetByName = function (name, editor) {
      var snippetMap = this.snippetNameMap;
      var snippet;
      this.getActiveScopes(editor).some(function (scope) {
        var snippets = snippetMap[scope];
        if (snippets) snippet = snippets[name];
        return !!snippet;
      }, this);
      return snippet;
    };
  }).call(SnippetManager.prototype);
  var TabstopManager = function TabstopManager(editor) {
    if (editor.tabstopManager) return editor.tabstopManager;
    editor.tabstopManager = this;
    this.$onChange = this.onChange.bind(this);
    this.$onChangeSelection = lang.delayedCall(this.onChangeSelection.bind(this)).schedule;
    this.$onChangeSession = this.onChangeSession.bind(this);
    this.$onAfterExec = this.onAfterExec.bind(this);
    this.attach(editor);
  };
  (function () {
    this.attach = function (editor) {
      this.index = 0;
      this.ranges = [];
      this.tabstops = [];
      this.$openTabstops = null;
      this.selectedTabstop = null;
      this.editor = editor;
      this.editor.on("change", this.$onChange);
      this.editor.on("changeSelection", this.$onChangeSelection);
      this.editor.on("changeSession", this.$onChangeSession);
      this.editor.commands.on("afterExec", this.$onAfterExec);
      this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler);
    };
    this.detach = function () {
      this.tabstops.forEach(this.removeTabstopMarkers, this);
      this.ranges = null;
      this.tabstops = null;
      this.selectedTabstop = null;
      this.editor.removeListener("change", this.$onChange);
      this.editor.removeListener("changeSelection", this.$onChangeSelection);
      this.editor.removeListener("changeSession", this.$onChangeSession);
      this.editor.commands.removeListener("afterExec", this.$onAfterExec);
      this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler);
      this.editor.tabstopManager = null;
      this.editor = null;
    };
    this.onChange = function (delta) {
      var changeRange = delta;
      var isRemove = delta.action[0] == "r";
      var start = delta.start;
      var end = delta.end;
      var startRow = start.row;
      var endRow = end.row;
      var lineDif = endRow - startRow;
      var colDiff = end.column - start.column;
      if (isRemove) {
        lineDif = -lineDif;
        colDiff = -colDiff;
      }
      if (!this.$inChange && isRemove) {
        var ts = this.selectedTabstop;
        var changedOutside = ts && !ts.some(function (r) {
          return comparePoints(r.start, start) <= 0 && comparePoints(r.end, end) >= 0;
        });
        if (changedOutside) return this.detach();
      }
      var ranges = this.ranges;
      for (var i = 0; i < ranges.length; i++) {
        var r = ranges[i];
        if (r.end.row < start.row) continue;
        if (isRemove && comparePoints(start, r.start) < 0 && comparePoints(end, r.end) > 0) {
          this.removeRange(r);
          i--;
          continue;
        }
        if (r.start.row == startRow && r.start.column > start.column) r.start.column += colDiff;
        if (r.end.row == startRow && r.end.column >= start.column) r.end.column += colDiff;
        if (r.start.row >= startRow) r.start.row += lineDif;
        if (r.end.row >= startRow) r.end.row += lineDif;
        if (comparePoints(r.start, r.end) > 0) this.removeRange(r);
      }
      if (!ranges.length) this.detach();
    };
    this.updateLinkedFields = function () {
      var ts = this.selectedTabstop;
      if (!ts || !ts.hasLinkedRanges) return;
      this.$inChange = true;
      var session = this.editor.session;
      var text = session.getTextRange(ts.firstNonLinked);
      for (var i = ts.length; i--;) {
        var range = ts[i];
        if (!range.linked) continue;
        var fmt = exports.snippetManager.tmStrFormat(text, range.original);
        session.replace(range, fmt);
      }
      this.$inChange = false;
    };
    this.onAfterExec = function (e) {
      if (e.command && !e.command.readOnly) this.updateLinkedFields();
    };
    this.onChangeSelection = function () {
      if (!this.editor) return;
      var lead = this.editor.selection.lead;
      var anchor = this.editor.selection.anchor;
      var isEmpty = this.editor.selection.isEmpty();
      for (var i = this.ranges.length; i--;) {
        if (this.ranges[i].linked) continue;
        var containsLead = this.ranges[i].contains(lead.row, lead.column);
        var containsAnchor = isEmpty || this.ranges[i].contains(anchor.row, anchor.column);
        if (containsLead && containsAnchor) return;
      }
      this.detach();
    };
    this.onChangeSession = function () {
      this.detach();
    };
    this.tabNext = function (dir) {
      var max = this.tabstops.length;
      var index = this.index + (dir || 1);
      index = Math.min(Math.max(index, 1), max);
      if (index == max) index = 0;
      this.selectTabstop(index);
      if (index === 0) this.detach();
    };
    this.selectTabstop = function (index) {
      this.$openTabstops = null;
      var ts = this.tabstops[this.index];
      if (ts) this.addTabstopMarkers(ts);
      this.index = index;
      ts = this.tabstops[this.index];
      if (!ts || !ts.length) return;
      this.selectedTabstop = ts;
      if (!this.editor.inVirtualSelectionMode) {
        var sel = this.editor.multiSelect;
        sel.toSingleRange(ts.firstNonLinked.clone());
        for (var i = ts.length; i--;) {
          if (ts.hasLinkedRanges && ts[i].linked) continue;
          sel.addRange(ts[i].clone(), true);
        }
        if (sel.ranges[0]) sel.addRange(sel.ranges[0].clone());
      } else {
        this.editor.selection.setRange(ts.firstNonLinked);
      }
      this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler);
    };
    this.addTabstops = function (tabstops, start, end) {
      if (!this.$openTabstops) this.$openTabstops = [];
      if (!tabstops[0]) {
        var p = Range.fromPoints(end, end);
        moveRelative(p.start, start);
        moveRelative(p.end, start);
        tabstops[0] = [p];
        tabstops[0].index = 0;
      }
      var i = this.index;
      var arg = [i + 1, 0];
      var ranges = this.ranges;
      tabstops.forEach(function (ts, index) {
        var dest = this.$openTabstops[index] || ts;
        for (var i = ts.length; i--;) {
          var p = ts[i];
          var range = Range.fromPoints(p.start, p.end || p.start);
          movePoint(range.start, start);
          movePoint(range.end, start);
          range.original = p;
          range.tabstop = dest;
          ranges.push(range);
          if (dest != ts) dest.unshift(range);else dest[i] = range;
          if (p.fmtString) {
            range.linked = true;
            dest.hasLinkedRanges = true;
          } else if (!dest.firstNonLinked) dest.firstNonLinked = range;
        }
        if (!dest.firstNonLinked) dest.hasLinkedRanges = false;
        if (dest === ts) {
          arg.push(dest);
          this.$openTabstops[index] = dest;
        }
        this.addTabstopMarkers(dest);
      }, this);
      if (arg.length > 2) {
        if (this.tabstops.length) arg.push(arg.splice(2, 1)[0]);
        this.tabstops.splice.apply(this.tabstops, arg);
      }
    };
    this.addTabstopMarkers = function (ts) {
      var session = this.editor.session;
      ts.forEach(function (range) {
        if (!range.markerId) range.markerId = session.addMarker(range, "ace_snippet-marker", "text");
      });
    };
    this.removeTabstopMarkers = function (ts) {
      var session = this.editor.session;
      ts.forEach(function (range) {
        session.removeMarker(range.markerId);
        range.markerId = null;
      });
    };
    this.removeRange = function (range) {
      var i = range.tabstop.indexOf(range);
      range.tabstop.splice(i, 1);
      i = this.ranges.indexOf(range);
      this.ranges.splice(i, 1);
      this.editor.session.removeMarker(range.markerId);
      if (!range.tabstop.length) {
        i = this.tabstops.indexOf(range.tabstop);
        if (i != -1) this.tabstops.splice(i, 1);
        if (!this.tabstops.length) this.detach();
      }
    };
    this.keyboardHandler = new HashHandler();
    this.keyboardHandler.bindKeys({
      "Tab": function Tab(ed) {
        if (exports.snippetManager && exports.snippetManager.expandWithTab(ed)) {
          return;
        }
        ed.tabstopManager.tabNext(1);
      },
      "Shift-Tab": function ShiftTab(ed) {
        ed.tabstopManager.tabNext(-1);
      },
      "Esc": function Esc(ed) {
        ed.tabstopManager.detach();
      },
      "Return": function Return(ed) {
        return false;
      }
    });
  }).call(TabstopManager.prototype);
  var changeTracker = {};
  changeTracker.onChange = Anchor.prototype.onChange;
  changeTracker.setPosition = function (row, column) {
    this.pos.row = row;
    this.pos.column = column;
  };
  changeTracker.update = function (pos, delta, $insertRight) {
    this.$insertRight = $insertRight;
    this.pos = pos;
    this.onChange(delta);
  };
  var movePoint = function movePoint(point, diff) {
    if (point.row == 0) point.column += diff.column;
    point.row += diff.row;
  };
  var moveRelative = function moveRelative(point, start) {
    if (point.row == start.row) point.column -= start.column;
    point.row -= start.row;
  };
  require("./lib/dom").importCssString("\
.ace_snippet-marker {\
    -moz-box-sizing: border-box;\
    box-sizing: border-box;\
    background: rgba(194, 193, 208, 0.09);\
    border: 1px dotted rgba(211, 208, 235, 0.62);\
    position: absolute;\
}");
  exports.snippetManager = new SnippetManager();
  var Editor = require("./editor").Editor;
  (function () {
    this.insertSnippet = function (content, options) {
      return exports.snippetManager.insertSnippet(this, content, options);
    };
    this.expandSnippet = function (options) {
      return exports.snippetManager.expandWithTab(this, options);
    };
  }).call(Editor.prototype);
});
ace.define("ace/autocomplete/popup", ["require", "exports", "module", "ace/virtual_renderer", "ace/editor", "ace/range", "ace/lib/event", "ace/lib/lang", "ace/lib/dom"], function (require, exports, module) {
  "use strict";

  var Renderer = require("../virtual_renderer").VirtualRenderer;
  var Editor = require("../editor").Editor;
  var Range = require("../range").Range;
  var event = require("../lib/event");
  var lang = require("../lib/lang");
  var dom = require("../lib/dom");
  var $singleLineEditor = function $singleLineEditor(el) {
    var renderer = new Renderer(el);
    renderer.$maxLines = 4;
    var editor = new Editor(renderer);
    editor.setHighlightActiveLine(false);
    editor.setShowPrintMargin(false);
    editor.renderer.setShowGutter(false);
    editor.renderer.setHighlightGutterLine(false);
    editor.$mouseHandler.$focusWaitTimout = 0;
    editor.$highlightTagPending = true;
    return editor;
  };
  var AcePopup = function AcePopup(parentNode) {
    var el = dom.createElement("div");
    var popup = new $singleLineEditor(el);
    if (parentNode) parentNode.appendChild(el);
    el.style.display = "none";
    popup.renderer.content.style.cursor = "default";
    popup.renderer.setStyle("ace_autocomplete");
    popup.setOption("displayIndentGuides", false);
    popup.setOption("dragDelay", 150);
    var noop = function noop() {};
    popup.focus = noop;
    popup.$isFocused = true;
    popup.renderer.$cursorLayer.restartTimer = noop;
    popup.renderer.$cursorLayer.element.style.opacity = 0;
    popup.renderer.$maxLines = 8;
    popup.renderer.$keepTextAreaAtCursor = false;
    popup.setHighlightActiveLine(false);
    popup.session.highlight("");
    popup.session.$searchHighlight.clazz = "ace_highlight-marker";
    popup.on("mousedown", function (e) {
      var pos = e.getDocumentPosition();
      popup.selection.moveToPosition(pos);
      selectionMarker.start.row = selectionMarker.end.row = pos.row;
      e.stop();
    });
    var lastMouseEvent;
    var hoverMarker = new Range(-1, 0, -1, Infinity);
    var selectionMarker = new Range(-1, 0, -1, Infinity);
    selectionMarker.id = popup.session.addMarker(selectionMarker, "ace_active-line", "fullLine");
    popup.setSelectOnHover = function (val) {
      if (!val) {
        hoverMarker.id = popup.session.addMarker(hoverMarker, "ace_line-hover", "fullLine");
      } else if (hoverMarker.id) {
        popup.session.removeMarker(hoverMarker.id);
        hoverMarker.id = null;
      }
    };
    popup.setSelectOnHover(false);
    popup.on("mousemove", function (e) {
      if (!lastMouseEvent) {
        lastMouseEvent = e;
        return;
      }
      if (lastMouseEvent.x == e.x && lastMouseEvent.y == e.y) {
        return;
      }
      lastMouseEvent = e;
      lastMouseEvent.scrollTop = popup.renderer.scrollTop;
      var row = lastMouseEvent.getDocumentPosition().row;
      if (hoverMarker.start.row != row) {
        if (!hoverMarker.id) popup.setRow(row);
        setHoverMarker(row);
      }
    });
    popup.renderer.on("beforeRender", function () {
      if (lastMouseEvent && hoverMarker.start.row != -1) {
        lastMouseEvent.$pos = null;
        var row = lastMouseEvent.getDocumentPosition().row;
        if (!hoverMarker.id) popup.setRow(row);
        setHoverMarker(row, true);
      }
    });
    popup.renderer.on("afterRender", function () {
      var row = popup.getRow();
      var t = popup.renderer.$textLayer;
      var selected = t.element.childNodes[row - t.config.firstRow];
      if (selected == t.selectedNode) return;
      if (t.selectedNode) dom.removeCssClass(t.selectedNode, "ace_selected");
      t.selectedNode = selected;
      if (selected) dom.addCssClass(selected, "ace_selected");
    });
    var hideHoverMarker = function hideHoverMarker() {
      setHoverMarker(-1);
    };
    var setHoverMarker = function setHoverMarker(row, suppressRedraw) {
      if (row !== hoverMarker.start.row) {
        hoverMarker.start.row = hoverMarker.end.row = row;
        if (!suppressRedraw) popup.session._emit("changeBackMarker");
        popup._emit("changeHoverMarker");
      }
    };
    popup.getHoveredRow = function () {
      return hoverMarker.start.row;
    };
    event.addListener(popup.container, "mouseout", hideHoverMarker);
    popup.on("hide", hideHoverMarker);
    popup.on("changeSelection", hideHoverMarker);
    popup.session.doc.getLength = function () {
      return popup.data.length;
    };
    popup.session.doc.getLine = function (i) {
      var data = popup.data[i];
      if (typeof data == "string") return data;
      return data && data.value || "";
    };
    var bgTokenizer = popup.session.bgTokenizer;
    bgTokenizer.$tokenizeRow = function (row) {
      var data = popup.data[row];
      var tokens = [];
      if (!data) return tokens;
      if (typeof data == "string") data = {
        value: data
      };
      if (!data.caption) data.caption = data.value || data.name;
      var last = -1;
      var flag, c;
      for (var i = 0; i < data.caption.length; i++) {
        c = data.caption[i];
        flag = data.matchMask & 1 << i ? 1 : 0;
        if (last !== flag) {
          tokens.push({
            type: data.className || "" + (flag ? "completion-highlight" : ""),
            value: c
          });
          last = flag;
        } else {
          tokens[tokens.length - 1].value += c;
        }
      }
      if (data.meta) {
        var maxW = popup.renderer.$size.scrollerWidth / popup.renderer.layerConfig.characterWidth;
        var metaData = data.meta;
        if (metaData.length + data.caption.length > maxW - 2) {
          metaData = metaData.substr(0, maxW - data.caption.length - 3) + "\u2026";
        }
        tokens.push({
          type: "rightAlignedText",
          value: metaData
        });
      }
      return tokens;
    };
    bgTokenizer.$updateOnChange = noop;
    bgTokenizer.start = noop;
    popup.session.$computeWidth = function () {
      return this.screenWidth = 0;
    };
    popup.$blockScrolling = Infinity;
    popup.isOpen = false;
    popup.isTopdown = false;
    popup.data = [];
    popup.setData = function (list) {
      popup.setValue(lang.stringRepeat("\n", list.length), -1);
      popup.data = list || [];
      popup.setRow(0);
    };
    popup.getData = function (row) {
      return popup.data[row];
    };
    popup.getRow = function () {
      return selectionMarker.start.row;
    };
    popup.setRow = function (line) {
      line = Math.max(0, Math.min(this.data.length, line));
      if (selectionMarker.start.row != line) {
        popup.selection.clearSelection();
        selectionMarker.start.row = selectionMarker.end.row = line || 0;
        popup.session._emit("changeBackMarker");
        popup.moveCursorTo(line || 0, 0);
        if (popup.isOpen) popup._signal("select");
      }
    };
    popup.on("changeSelection", function () {
      if (popup.isOpen) popup.setRow(popup.selection.lead.row);
      popup.renderer.scrollCursorIntoView();
    });
    popup.hide = function () {
      this.container.style.display = "none";
      this._signal("hide");
      popup.isOpen = false;
    };
    popup.show = function (pos, lineHeight, topdownOnly) {
      var el = this.container;
      var screenHeight = window.innerHeight;
      var screenWidth = window.innerWidth;
      var renderer = this.renderer;
      var maxH = renderer.$maxLines * lineHeight * 1.4;
      var top = pos.top + this.$borderSize;
      if (top + maxH > screenHeight - lineHeight && !topdownOnly) {
        el.style.top = "";
        el.style.bottom = screenHeight - top + "px";
        popup.isTopdown = false;
      } else {
        top += lineHeight;
        el.style.top = top + "px";
        el.style.bottom = "";
        popup.isTopdown = true;
      }
      el.style.display = "";
      this.renderer.$textLayer.checkForSizeChanges();
      var left = pos.left;
      if (left + el.offsetWidth > screenWidth) left = screenWidth - el.offsetWidth;
      el.style.left = left + "px";
      this._signal("show");
      lastMouseEvent = null;
      popup.isOpen = true;
    };
    popup.getTextLeftOffset = function () {
      return this.$borderSize + this.renderer.$padding + this.$imageSize;
    };
    popup.$imageSize = 0;
    popup.$borderSize = 1;
    return popup;
  };
  dom.importCssString("\
.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {\
    background-color: #CAD6FA;\
    z-index: 1;\
}\
.ace_editor.ace_autocomplete .ace_line-hover {\
    border: 1px solid #abbffe;\
    margin-top: -1px;\
    background: rgba(233,233,253,0.4);\
}\
.ace_editor.ace_autocomplete .ace_line-hover {\
    position: absolute;\
    z-index: 2;\
}\
.ace_editor.ace_autocomplete .ace_scroller {\
   background: none;\
   border: none;\
   box-shadow: none;\
}\
.ace_rightAlignedText {\
    color: gray;\
    display: inline-block;\
    position: absolute;\
    right: 4px;\
    text-align: right;\
    z-index: -1;\
}\
.ace_editor.ace_autocomplete .ace_completion-highlight{\
    color: #000;\
    text-shadow: 0 0 0.01em;\
}\
.ace_editor.ace_autocomplete {\
    width: 280px;\
    z-index: 200000;\
    background: #fbfbfb;\
    color: #444;\
    border: 1px lightgray solid;\
    position: fixed;\
    box-shadow: 2px 3px 5px rgba(0,0,0,.2);\
    line-height: 1.4;\
}");
  exports.AcePopup = AcePopup;
});
ace.define("ace/autocomplete/util", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.parForEach = function (array, fn, callback) {
    var completed = 0;
    var arLength = array.length;
    if (arLength === 0) callback();
    for (var i = 0; i < arLength; i++) {
      fn(array[i], function (result, err) {
        completed++;
        if (completed === arLength) callback(result, err);
      });
    }
  };
  var ID_REGEX = /[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/;
  exports.retrievePrecedingIdentifier = function (text, pos, regex) {
    regex = regex || ID_REGEX;
    var buf = [];
    for (var i = pos - 1; i >= 0; i--) {
      if (regex.test(text[i])) buf.push(text[i]);else break;
    }
    return buf.reverse().join("");
  };
  exports.retrieveFollowingIdentifier = function (text, pos, regex) {
    regex = regex || ID_REGEX;
    var buf = [];
    for (var i = pos; i < text.length; i++) {
      if (regex.test(text[i])) buf.push(text[i]);else break;
    }
    return buf;
  };
});
ace.define("ace/autocomplete", ["require", "exports", "module", "ace/keyboard/hash_handler", "ace/autocomplete/popup", "ace/autocomplete/util", "ace/lib/event", "ace/lib/lang", "ace/lib/dom", "ace/snippets"], function (require, exports, module) {
  "use strict";

  var HashHandler = require("./keyboard/hash_handler").HashHandler;
  var AcePopup = require("./autocomplete/popup").AcePopup;
  var util = require("./autocomplete/util");
  var event = require("./lib/event");
  var lang = require("./lib/lang");
  var dom = require("./lib/dom");
  var snippetManager = require("./snippets").snippetManager;
  var Autocomplete = function Autocomplete() {
    this.autoInsert = false;
    this.autoSelect = true;
    this.exactMatch = false;
    this.gatherCompletionsId = 0;
    this.keyboardHandler = new HashHandler();
    this.keyboardHandler.bindKeys(this.commands);
    this.blurListener = this.blurListener.bind(this);
    this.changeListener = this.changeListener.bind(this);
    this.mousedownListener = this.mousedownListener.bind(this);
    this.mousewheelListener = this.mousewheelListener.bind(this);
    this.changeTimer = lang.delayedCall(function () {
      this.updateCompletions(true);
    }.bind(this));
    this.tooltipTimer = lang.delayedCall(this.updateDocTooltip.bind(this), 50);
  };
  (function () {
    this.$init = function () {
      this.popup = new AcePopup(document.body || document.documentElement);
      this.popup.on("click", function (e) {
        this.insertMatch();
        e.stop();
      }.bind(this));
      this.popup.focus = this.editor.focus.bind(this.editor);
      this.popup.on("show", this.tooltipTimer.bind(null, null));
      this.popup.on("select", this.tooltipTimer.bind(null, null));
      this.popup.on("changeHoverMarker", this.tooltipTimer.bind(null, null));
      return this.popup;
    };
    this.getPopup = function () {
      return this.popup || this.$init();
    };
    this.openPopup = function (editor, prefix, keepPopupPosition) {
      if (!this.popup) this.$init();
      this.popup.setData(this.completions.filtered);
      editor.keyBinding.addKeyboardHandler(this.keyboardHandler);
      var renderer = editor.renderer;
      this.popup.setRow(this.autoSelect ? 0 : -1);
      if (!keepPopupPosition) {
        this.popup.setTheme(editor.getTheme());
        this.popup.setFontSize(editor.getFontSize());
        var lineHeight = renderer.layerConfig.lineHeight;
        var pos = renderer.$cursorLayer.getPixelPosition(this.base, true);
        pos.left -= this.popup.getTextLeftOffset();
        var rect = editor.container.getBoundingClientRect();
        pos.top += rect.top - renderer.layerConfig.offset;
        pos.left += rect.left - editor.renderer.scrollLeft;
        pos.left += renderer.gutterWidth;
        this.popup.show(pos, lineHeight);
      } else if (keepPopupPosition && !prefix) {
        this.detach();
      }
    };
    this.detach = function () {
      this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler);
      this.editor.off("changeSelection", this.changeListener);
      this.editor.off("blur", this.blurListener);
      this.editor.off("mousedown", this.mousedownListener);
      this.editor.off("mousewheel", this.mousewheelListener);
      this.changeTimer.cancel();
      this.hideDocTooltip();
      this.gatherCompletionsId += 1;
      if (this.popup && this.popup.isOpen) this.popup.hide();
      if (this.base) this.base.detach();
      this.activated = false;
      this.completions = this.base = null;
    };
    this.changeListener = function (e) {
      var cursor = this.editor.selection.lead;
      if (cursor.row != this.base.row || cursor.column < this.base.column) {
        this.detach();
      }
      if (this.activated) this.changeTimer.schedule();else this.detach();
    };
    this.blurListener = function (e) {
      var el = document.activeElement;
      var text = this.editor.textInput.getElement();
      var fromTooltip = e.relatedTarget && e.relatedTarget == this.tooltipNode;
      var container = this.popup && this.popup.container;
      if (el != text && el.parentNode != container && !fromTooltip && el != this.tooltipNode && e.relatedTarget != text) {
        this.detach();
      }
    };
    this.mousedownListener = function (e) {
      this.detach();
    };
    this.mousewheelListener = function (e) {
      this.detach();
    };
    this.goTo = function (where) {
      var row = this.popup.getRow();
      var max = this.popup.session.getLength() - 1;
      switch (where) {
        case "up":
          row = row <= 0 ? max : row - 1;
          break;
        case "down":
          row = row >= max ? -1 : row + 1;
          break;
        case "start":
          row = 0;
          break;
        case "end":
          row = max;
          break;
      }
      this.popup.setRow(row);
    };
    this.insertMatch = function (data, options) {
      if (!data) data = this.popup.getData(this.popup.getRow());
      if (!data) return false;
      if (data.completer && data.completer.insertMatch) {
        data.completer.insertMatch(this.editor, data);
      } else {
        if (this.completions.filterText) {
          var ranges = this.editor.selection.getAllRanges();
          for (var i = 0, range; range = ranges[i]; i++) {
            range.start.column -= this.completions.filterText.length;
            this.editor.session.remove(range);
          }
        }
        if (data.snippet) {
          snippetManager.insertSnippet(this.editor, data.snippet);
        } else if (data.upperCaseMatch) {
          this.editor.execCommand("insertstring", data.upperCaseValue);
        } else {
          this.editor.execCommand("insertstring", data.value || data);
        }
        this.editor.renderer.scrollCursorIntoView();
      }
      this.detach();
    };
    this.commands = {
      "Up": function Up(editor) {
        editor.completer.goTo("up");
      },
      "Down": function Down(editor) {
        editor.completer.goTo("down");
      },
      "Ctrl-Up|Ctrl-Home": function CtrlUpCtrlHome(editor) {
        editor.completer.goTo("start");
      },
      "Ctrl-Down|Ctrl-End": function CtrlDownCtrlEnd(editor) {
        editor.completer.goTo("end");
      },
      "Esc": function Esc(editor) {
        editor.completer.detach();
      },
      "Return": function Return(editor) {
        return editor.completer.insertMatch();
      },
      "Shift-Return": function ShiftReturn(editor) {
        editor.completer.insertMatch(null, {
          deleteSuffix: true
        });
      },
      "Tab": function Tab(editor) {
        var result = editor.completer.insertMatch();
        if (!result && !editor.tabstopManager) editor.completer.goTo("down");else return result;
      },
      "PageUp": function PageUp(editor) {
        editor.completer.popup.gotoPageUp();
      },
      "PageDown": function PageDown(editor) {
        editor.completer.popup.gotoPageDown();
      }
    };
    this.gatherCompletions = function (editor, callback) {
      var session = editor.getSession();
      var pos = editor.getCursorPosition();
      var line = session.getLine(pos.row);
      var prefix = util.retrievePrecedingIdentifier(line, pos.column);
      this.base = session.doc.createAnchor(pos.row, pos.column - prefix.length);
      this.base.$insertRight = true;
      var matches = [];
      var total = editor.completers.length + session.getCompleters().length;
      editor.completers.concat(session.getCompleters()).forEach(function (completer, i) {
        completer.getCompletions(editor, session, pos, prefix, function (err, results) {
          if (!err) matches = matches.concat(results);
          var pos = editor.getCursorPosition();
          var line = session.getLine(pos.row);
          callback(null, {
            prefix: util.retrievePrecedingIdentifier(line, pos.column, results[0] && results[0].identifierRegex),
            matches: matches,
            finished: --total === 0
          });
        });
      });
      return true;
    };
    this.showPopup = function (editor) {
      if (this.editor) this.detach();
      this.activated = true;
      this.editor = editor;
      if (editor.completer != this) {
        if (editor.completer) editor.completer.detach();
        editor.completer = this;
      }
      editor.on("changeSelection", this.changeListener);
      editor.on("blur", this.blurListener);
      editor.on("mousedown", this.mousedownListener);
      editor.on("mousewheel", this.mousewheelListener);
      this.updateCompletions();
    };
    this.updateCompletions = function (keepPopupPosition) {
      if (keepPopupPosition && this.base && this.completions) {
        var pos = this.editor.getCursorPosition();
        var prefix = this.editor.session.getTextRange({
          start: this.base,
          end: pos
        });
        if (prefix == this.completions.filterText) return;
        this.completions.setFilter(prefix);
        if (!this.completions.filtered.length) return this.detach();
        if (this.completions.filtered.length == 1 && this.completions.filtered[0].value == prefix && !this.completions.filtered[0].snippet) return this.detach();
        this.openPopup(this.editor, prefix, keepPopupPosition);
        return;
      }
      var _id = this.gatherCompletionsId;
      this.gatherCompletions(this.editor, function (err, results) {
        var detachIfFinished = function () {
          if (!results.finished) return;
          return this.detach();
        }.bind(this);
        var prefix = results.prefix;
        var matches = results && results.matches;
        if (!matches || !matches.length) return detachIfFinished();
        if (prefix.indexOf(results.prefix) !== 0 || _id != this.gatherCompletionsId) return;
        this.completions = new FilteredList(matches);
        if (this.exactMatch) this.completions.exactMatch = true;
        this.completions.setFilter(prefix);
        var filtered = this.completions.filtered;
        if (!filtered.length) return detachIfFinished();
        if (filtered.length == 1 && filtered[0].value == prefix && !filtered[0].snippet) return detachIfFinished();
        if (this.autoInsert && filtered.length == 1 && results.finished) return this.insertMatch(filtered[0]);
        this.openPopup(this.editor, prefix, keepPopupPosition);
      }.bind(this));
    };
    this.cancelContextMenu = function () {
      this.editor.$mouseHandler.cancelContextMenu();
    };
    this.updateDocTooltip = function () {
      var popup = this.popup;
      var all = popup.data;
      var selected = all && (all[popup.getHoveredRow()] || all[popup.getRow()]);
      var doc = null;
      if (!selected || !this.editor || !this.popup.isOpen) return this.hideDocTooltip();
      this.editor.completers.some(function (completer) {
        if (completer.getDocTooltip) doc = completer.getDocTooltip(selected);
        return doc;
      });
      if (!doc) doc = selected;
      if (typeof doc == "string") doc = {
        docText: doc
      };
      if (!doc || !(doc.docHTML || doc.docText)) return this.hideDocTooltip();
      this.showDocTooltip(doc);
    };
    this.showDocTooltip = function (item) {
      if (!this.tooltipNode) {
        this.tooltipNode = dom.createElement("div");
        this.tooltipNode.className = "autocomplete-tooltip";
        this.tooltipNode.style.margin = 0;
        this.tooltipNode.style.pointerEvents = "auto";
        this.tooltipNode.tabIndex = -1;
        this.tooltipNode.onblur = this.blurListener.bind(this);
      }
      var tooltipNode = this.tooltipNode;
      if (item.docHTML) {
        tooltipNode.innerHTML = item.docHTML;
      } else if (item.docText) {
        tooltipNode.textContent = item.docText;
      }
      if (!tooltipNode.parentNode) document.body.appendChild(tooltipNode);
      var popup = this.popup;
      var rect = popup.container.getBoundingClientRect();
      tooltipNode.style.top = popup.container.style.top;
      tooltipNode.style.bottom = popup.container.style.bottom;
      if (window.innerWidth - rect.right < 320) {
        tooltipNode.style.right = window.innerWidth - rect.left + "px";
        tooltipNode.style.left = "";
      } else {
        tooltipNode.style.left = rect.right + 1 + "px";
        tooltipNode.style.right = "";
      }
      tooltipNode.style.display = "block";
    };
    this.hideDocTooltip = function () {
      this.tooltipTimer.cancel();
      if (!this.tooltipNode) return;
      var el = this.tooltipNode;
      if (!this.editor.isFocused() && document.activeElement == el) this.editor.focus();
      this.tooltipNode = null;
      if (el.parentNode) el.parentNode.removeChild(el);
    };
  }).call(Autocomplete.prototype);
  Autocomplete.startCommand = {
    name: "startAutocomplete",
    exec: function exec(editor) {
      if (editor.useHueAutocompleter) {
        var renderer = editor.renderer;
        var lineHeight = renderer.layerConfig.lineHeight;
        var pos = renderer.$cursorLayer.getPixelPosition(this.base, true);
        var rect = editor.container.getBoundingClientRect();
        pos.top += rect.top - renderer.layerConfig.offset;
        pos.left += rect.left - editor.renderer.scrollLeft;
        pos.left += renderer.gutterWidth;
        editor._signal('showAutocomplete', {
          position: pos,
          lineHeight: lineHeight
        });
        return;
      }
      if (!editor.completer) editor.completer = new Autocomplete();
      editor.completer.autoInsert = false;
      editor.completer.autoSelect = true;
      editor.completer.showPopup(editor);
      editor.completer.cancelContextMenu();
    },
    bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space"
  };
  var FilteredList = function FilteredList(array, filterText) {
    this.all = array;
    this.filtered = array;
    this.filterText = filterText || "";
    this.exactMatch = false;
  };
  (function () {
    this.setFilter = function (str) {
      if (str.length > this.filterText && str.lastIndexOf(this.filterText, 0) === 0) var matches = this.filtered;else var matches = this.all;
      this.filterText = str;
      matches = this.filterCompletions(matches, this.filterText);
      matches = matches.sort(function (a, b) {
        if (a.completeMatch && !b.completeMatch) {
          return -1;
        } else if (!a.completeMatch && b.completeMatch) {
          return 1;
        } else if (a.completeMatch && b.completeMatch && a.weight && b.weight && b.weight !== a.weight) {
          return b.weight - a.weight;
        } else if (a.completeMatch && b.completeMatch && a.startsWith && !b.startsWith) {
          return -1;
        } else if (a.completeMatch && b.completeMatch && !a.startsWith && b.startsWith) {
          return 1;
        }
        if (a.prioritizeScore && b.prioritizeScore) {
          return b.score - a.score;
        } else if (a.prioritizeScore) {
          return -1;
        } else if (b.prioritizeScore) {
          return 1;
        }
        var alpha = 0;
        if (a.caption > b.caption) {
          alpha = 1;
        }
        if (a.caption < b.caption) {
          alpha = -1;
        }
        return alpha + b.exactMatch - a.exactMatch || alpha + b.score - a.score;
      });
      var prev = null;
      matches = matches.filter(function (item) {
        var caption = item.snippet || item.caption || item.value;
        if (caption === prev) return false;
        prev = caption;
        return true;
      });
      this.filtered = matches;
    };
    this.filterCompletions = function (items, needle) {
      var results = [];
      var upper = needle.toUpperCase();
      var lower = needle.toLowerCase();
      loop: for (var i = 0, item; item = items[i]; i++) {
        var caption = item.value || item.caption || item.snippet;
        if (!caption) continue;
        var lastIndex = -1;
        var matchMask = 0;
        var penalty = 0;
        var index, distance;
        var completeIndex = 0;
        if (this.exactMatch && item.ignoreCase) {
          if (upper !== item.upperCaseValue.substr(0, needle.length)) {
            continue loop;
          }
          item.upperCaseMatch = needle === upper;
          item.caption = item.upperCaseMatch ? item.upperCaseValue : item.value;
        } else if (this.exactMatch && needle !== caption.substr(0, needle.length)) {
          continue loop;
        } else {
          completeIndex = caption.toUpperCase().indexOf(upper);
          if (completeIndex > -1) {
            lastIndex = completeIndex - 1;
          }
          for (var j = 0; j < needle.length; j++) {
            var i1 = caption.indexOf(lower[j], lastIndex + 1);
            var i2 = caption.indexOf(upper[j], lastIndex + 1);
            index = i1 >= 0 ? i2 < 0 || i1 < i2 ? i1 : i2 : i2;
            if (index < 0) continue loop;
            distance = index - lastIndex - 1;
            if (distance > 0) {
              penalty += distance;
            }
            matchMask = matchMask | 1 << index;
            lastIndex = index;
          }
        }
        item.matchMask = matchMask;
        item.exactMatch = penalty ? 0 : 1;
        item.score = (item.score || 0) - penalty;
        item.startsWith = completeIndex === 0;
        item.completeMatch = completeIndex > -1;
        results.push(item);
      }
      return results;
    };
  }).call(FilteredList.prototype);
  exports.Autocomplete = Autocomplete;
  exports.FilteredList = FilteredList;
});
ace.define("ace/autocomplete/text_completer", ["require", "exports", "module", "ace/range"], function (require, exports, module) {
  var Range = require("../range").Range;
  var splitRegex = /[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;
  var ignoreSqlCommentLines = false;
  function stripSqlComments(txt) {
    if (ignoreSqlCommentLines) {
      return txt.replace(/(--.*$|\/\*[\s\S]*?\*\/)/gm, ' ');
    }
    return txt;
  }
  function getWordIndex(doc, pos) {
    var textBefore = doc.getTextRange(Range.fromPoints({
      row: 0,
      column: 0
    }, pos));
    return stripSqlComments(textBefore).split(splitRegex).length - 1;
  }
  function wordDistance(doc, pos) {
    var prefixPos = getWordIndex(doc, pos);
    var words = stripSqlComments(doc.getValue()).split(splitRegex);
    var wordScores = Object.create(null);
    var currentWord = words[prefixPos];
    words.forEach(function (word, idx) {
      if (!word || word === currentWord) return;
      var distance = Math.abs(prefixPos - idx);
      var score = words.length - distance;
      if (wordScores[word]) {
        wordScores[word] = Math.max(score, wordScores[word]);
      } else {
        wordScores[word] = score;
      }
    });
    return wordScores;
  }
  exports.setSqlMode = function (sqlMode) {
    ignoreSqlCommentLines = sqlMode;
  };
  exports.getCompletions = function (editor, session, pos, prefix, callback) {
    var wordScore = wordDistance(session, pos, prefix);
    var wordList = Object.keys(wordScore);
    callback(null, wordList.map(function (word) {
      return {
        caption: word,
        value: word,
        score: wordScore[word],
        meta: "local"
      };
    }));
  };
});
ace.define("ace/ext/language_tools", ["require", "exports", "module", "ace/snippets", "ace/autocomplete", "ace/config", "ace/lib/lang", "ace/autocomplete/util", "ace/autocomplete/text_completer", "ace/editor", "ace/config"], function (require, exports, module) {
  "use strict";

  var snippetManager = require("../snippets").snippetManager;
  var Autocomplete = require("../autocomplete").Autocomplete;
  var config = require("../config");
  var lang = require("../lib/lang");
  var util = require("../autocomplete/util");
  var textCompleter = require("../autocomplete/text_completer");
  var keyWordCompleter = {
    getCompletions: function getCompletions(editor, session, pos, prefix, callback) {
      if (session.$mode.completer) {
        return session.$mode.completer.getCompletions(editor, session, pos, prefix, callback);
      }
      var state = editor.session.getState(pos.row);
      var completions = session.$mode.getCompletions(state, session, pos, prefix);
      callback(null, completions);
    }
  };
  var snippetCompleter = {
    getCompletions: function getCompletions(editor, session, pos, prefix, callback) {
      var snippetMap = snippetManager.snippetMap;
      var completions = [];
      snippetManager.getActiveScopes(editor).forEach(function (scope) {
        var snippets = snippetMap[scope] || [];
        for (var i = snippets.length; i--;) {
          var s = snippets[i];
          var caption = s.name || s.tabTrigger;
          if (!caption) continue;
          completions.push({
            caption: caption,
            snippet: s.content,
            meta: s.tabTrigger && !s.name ? s.tabTrigger + "\u21E5 " : "snippet",
            type: "snippet"
          });
        }
      }, this);
      callback(null, completions);
    },
    getDocTooltip: function getDocTooltip(item) {
      if (item.type == "snippet" && !item.docHTML) {
        item.docHTML = ["<b>", lang.escapeHTML(item.caption), "</b>", "<hr></hr>", lang.escapeHTML(item.snippet)].join("");
      }
    }
  };
  var completers = [snippetCompleter, textCompleter, keyWordCompleter];
  exports.setCompleters = function (val) {
    completers = val || [];
  };
  exports.addCompleter = function (completer) {
    completers.push(completer);
  };
  exports.textCompleter = textCompleter;
  exports.keyWordCompleter = keyWordCompleter;
  exports.snippetCompleter = snippetCompleter;
  var expandSnippet = {
    name: "expandSnippet",
    exec: function exec(editor) {
      return snippetManager.expandWithTab(editor);
    },
    bindKey: "Tab"
  };
  var onChangeMode = function onChangeMode(e, editor) {
    loadSnippetsForMode(editor.session.$mode);
  };
  var loadSnippetsForMode = function loadSnippetsForMode(mode) {
    var id = mode.$id;
    if (!snippetManager.files) snippetManager.files = {};
    loadSnippetFile(id);
    if (mode.modes) mode.modes.forEach(loadSnippetsForMode);
  };
  var loadSnippetFile = function loadSnippetFile(id) {
    if (!id || snippetManager.files[id]) return;
    var snippetFilePath = id.replace("mode", "snippets");
    snippetManager.files[id] = {};
    config.loadModule(snippetFilePath, function (m) {
      if (m) {
        snippetManager.files[id] = m;
        if (!m.snippets && m.snippetText) m.snippets = snippetManager.parseSnippetFile(m.snippetText);
        snippetManager.register(m.snippets || [], m.scope);
        if (m.includeScopes) {
          snippetManager.snippetMap[m.scope].includeScopes = m.includeScopes;
          m.includeScopes.forEach(function (x) {
            loadSnippetFile("ace/mode/" + x);
          });
        }
      }
    });
  };
  function getCompletionPrefix(editor) {
    var pos = editor.getCursorPosition();
    var line = editor.session.getLine(pos.row);
    var prefix;
    editor.completers.forEach(function (completer) {
      if (completer.identifierRegexps) {
        completer.identifierRegexps.forEach(function (identifierRegex) {
          if (!prefix && identifierRegex) prefix = util.retrievePrecedingIdentifier(line, pos.column, identifierRegex);
        });
      }
    });
    return prefix || util.retrievePrecedingIdentifier(line, pos.column);
  }
  var doLiveAutocomplete = function doLiveAutocomplete(e) {
    var editor = e.editor;
    var prefix = getCompletionPrefix(editor);
    if (editor.useHueAutocompleter) {
      if (prefix && e.command.name === "insertstring") {
        var renderer = editor.renderer;
        var lineHeight = renderer.layerConfig.lineHeight;
        var pos = renderer.$cursorLayer.getPixelPosition(this.base, true);
        var rect = editor.container.getBoundingClientRect();
        pos.top += rect.top - renderer.layerConfig.offset;
        pos.left += rect.left - editor.renderer.scrollLeft;
        pos.left += renderer.gutterWidth;
        editor._signal('showAutocomplete', {
          position: pos,
          lineHeight: lineHeight
        });
      } else if (e.command.name === "backspace" && !prefix) {
        editor._signal('hideAutocomplete');
      }
      return;
    }
    var hasCompleter = editor.completer && editor.completer.activated;
    if (e.command.name === "backspace") {
      if (hasCompleter && !prefix) editor.completer.detach();
    } else if (e.command.name === "insertstring") {
      if (prefix && !hasCompleter) {
        if (!editor.completer) {
          editor.completer = new Autocomplete();
        }
        editor.completer.autoInsert = false;
        editor.completer.showPopup(editor);
      }
    }
  };
  var Editor = require("../editor").Editor;
  require("../config").defineOptions(Editor.prototype, "editor", {
    enableBasicAutocompletion: {
      set: function set(val) {
        if (val) {
          if (!this.completers) this.completers = Array.isArray(val) ? val : completers;
          this.commands.addCommand(Autocomplete.startCommand);
        } else {
          this.commands.removeCommand(Autocomplete.startCommand);
        }
      },
      value: false
    },
    enableLiveAutocompletion: {
      set: function set(val) {
        if (val) {
          if (!this.completers) this.completers = Array.isArray(val) ? val : completers;
          this.commands.on('afterExec', doLiveAutocomplete);
        } else {
          this.commands.removeListener('afterExec', doLiveAutocomplete);
        }
      },
      value: false
    },
    enableSnippets: {
      set: function set(val) {
        if (val) {
          this.commands.addCommand(expandSnippet);
          this.on("changeMode", onChangeMode);
          onChangeMode(null, this);
        } else {
          this.commands.removeCommand(expandSnippet);
          this.off("changeMode", onChangeMode);
        }
      },
      value: false
    }
  });
});
(function () {
  ace.require(["ace/ext/language_tools"], function () {});
})();

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/ext-searchbox.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/ext-searchbox.js ***!
  \**************************************************************/
/***/ (() => {

ace.define("ace/ext/searchbox", ["require", "exports", "module", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/keyboard/hash_handler", "ace/lib/keys"], function (require, exports, module) {
  "use strict";

  var dom = require("../lib/dom");
  var lang = require("../lib/lang");
  var event = require("../lib/event");
  var searchboxCss = "\
.ace_search {\
background-color: #ddd;\
border: 1px solid #cbcbcb;\
border-top: 0 none;\
max-width: 325px;\
overflow: hidden;\
margin: 0;\
padding: 4px;\
padding-right: 6px;\
padding-bottom: 0;\
position: absolute;\
top: 0px;\
z-index: 99;\
white-space: normal;\
}\
.ace_search.left {\
border-left: 0 none;\
border-radius: 0px 0px 5px 0px;\
left: 0;\
}\
.ace_search.right {\
border-radius: 0px 0px 0px 5px;\
border-right: 0 none;\
right: 0;\
}\
.ace_search_form, .ace_replace_form {\
border-radius: 3px;\
border: 1px solid #cbcbcb;\
float: left;\
margin-bottom: 4px;\
overflow: hidden;\
}\
.ace_search_form.ace_nomatch {\
outline: 1px solid red;\
}\
.ace_search_field {\
background-color: white;\
border-right: 1px solid #cbcbcb;\
border: 0 none;\
-webkit-box-sizing: border-box;\
-moz-box-sizing: border-box;\
box-sizing: border-box;\
float: left;\
height: 22px;\
outline: 0;\
padding: 0 7px;\
width: 214px;\
margin: 0;\
}\
.ace_searchbtn,\
.ace_replacebtn {\
background: #fff;\
border: 0 none;\
border-left: 1px solid #dcdcdc;\
cursor: pointer;\
float: left;\
height: 22px;\
margin: 0;\
position: relative;\
}\
.ace_searchbtn:last-child,\
.ace_replacebtn:last-child {\
border-top-right-radius: 3px;\
border-bottom-right-radius: 3px;\
}\
.ace_searchbtn:disabled {\
background: none;\
cursor: default;\
}\
.ace_searchbtn {\
background-position: 50% 50%;\
background-repeat: no-repeat;\
width: 27px;\
}\
.ace_searchbtn.prev {\
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiSU1NZUAC/6E0I0yACYskCpsJiySKIiY0SUZk40FyTEgCjGgKwTRAgAEAQJUIPCE+qfkAAAAASUVORK5CYII=);    \
}\
.ace_searchbtn.next {\
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNpiTE1NZQCC/0DMyIAKwGJMUAYDEo3M/s+EpvM/mkKwCQxYjIeLMaELoLMBAgwAU7UJObTKsvAAAAAASUVORK5CYII=);    \
}\
.ace_searchbtn_close {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;\
border-radius: 50%;\
border: 0 none;\
color: #656565;\
cursor: pointer;\
float: right;\
font: 16px/16px Arial;\
height: 14px;\
margin: 5px 1px 9px 5px;\
padding: 0;\
text-align: center;\
width: 14px;\
}\
.ace_searchbtn_close:hover {\
background-color: #656565;\
background-position: 50% 100%;\
color: white;\
}\
.ace_replacebtn.prev {\
width: 54px\
}\
.ace_replacebtn.next {\
width: 27px\
}\
.ace_button {\
margin-left: 2px;\
cursor: pointer;\
-webkit-user-select: none;\
-moz-user-select: none;\
-o-user-select: none;\
-ms-user-select: none;\
user-select: none;\
overflow: hidden;\
opacity: 0.7;\
border: 1px solid rgba(100,100,100,0.23);\
padding: 1px;\
-moz-box-sizing: border-box;\
box-sizing:    border-box;\
color: black;\
}\
.ace_button:hover {\
background-color: #eee;\
opacity:1;\
}\
.ace_button:active {\
background-color: #ddd;\
}\
.ace_button.checked {\
border-color: #3399ff;\
opacity:1;\
}\
.ace_search_options{\
margin-bottom: 3px;\
text-align: right;\
-webkit-user-select: none;\
-moz-user-select: none;\
-o-user-select: none;\
-ms-user-select: none;\
user-select: none;\
}\
";
  var HashHandler = require("../keyboard/hash_handler").HashHandler;
  var keyUtil = require("../lib/keys");
  dom.importCssString(searchboxCss, "ace_searchbox");
  var html = '<div class="ace_search right">\
    <button type="button" action="hide" class="ace_searchbtn_close"></button>\
    <div class="ace_search_form">\
        <input class="ace_search_field" placeholder="Search for" spellcheck="false"></input>\
        <button type="button" action="findNext" class="ace_searchbtn next"></button>\
        <button type="button" action="findPrev" class="ace_searchbtn prev"></button>\
        <button type="button" action="findAll" class="ace_searchbtn" title="Alt-Enter">All</button>\
    </div>\
    <div class="ace_replace_form">\
        <input class="ace_search_field" placeholder="Replace with" spellcheck="false"></input>\
        <button type="button" action="replaceAndFindNext" class="ace_replacebtn">Replace</button>\
        <button type="button" action="replaceAll" class="ace_replacebtn">All</button>\
    </div>\
    <div class="ace_search_options">\
        <span action="toggleRegexpMode" class="ace_button" title="RegExp Search">.*</span>\
        <span action="toggleCaseSensitive" class="ace_button" title="CaseSensitive Search">Aa</span>\
        <span action="toggleWholeWords" class="ace_button" title="Whole Word Search">\\b</span>\
    </div>\
</div>'.replace(/>\s+/g, ">");
  var SearchBox = function SearchBox(editor, range, showReplaceForm) {
    var div = dom.createElement("div");
    div.innerHTML = html;
    this.element = div.firstChild;
    this.$init();
    this.setEditor(editor);
  };
  (function () {
    this.setEditor = function (editor) {
      editor.searchBox = this;
      editor.container.appendChild(this.element);
      this.editor = editor;
    };
    this.$initElements = function (sb) {
      this.searchBox = sb.querySelector(".ace_search_form");
      this.replaceBox = sb.querySelector(".ace_replace_form");
      this.searchOptions = sb.querySelector(".ace_search_options");
      this.regExpOption = sb.querySelector("[action=toggleRegexpMode]");
      this.caseSensitiveOption = sb.querySelector("[action=toggleCaseSensitive]");
      this.wholeWordOption = sb.querySelector("[action=toggleWholeWords]");
      this.searchInput = this.searchBox.querySelector(".ace_search_field");
      this.replaceInput = this.replaceBox.querySelector(".ace_search_field");
    };
    this.$init = function () {
      var sb = this.element;
      this.$initElements(sb);
      var _this = this;
      event.addListener(sb, "mousedown", function (e) {
        setTimeout(function () {
          _this.activeInput.focus();
        }, 0);
        event.stopPropagation(e);
      });
      event.addListener(sb, "click", function (e) {
        var t = e.target || e.srcElement;
        var action = t.getAttribute("action");
        if (action && _this[action]) _this[action]();else if (_this.$searchBarKb.commands[action]) _this.$searchBarKb.commands[action].exec(_this);
        event.stopPropagation(e);
      });
      event.addCommandKeyListener(sb, function (e, hashId, keyCode) {
        var keyString = keyUtil.keyCodeToString(keyCode);
        var command = _this.$searchBarKb.findKeyCommand(hashId, keyString);
        if (command && command.exec) {
          command.exec(_this);
          event.stopEvent(e);
        }
      });
      this.$onChange = lang.delayedCall(function () {
        _this.find(false, false);
      });
      event.addListener(this.searchInput, "input", function () {
        _this.$onChange.schedule(20);
      });
      event.addListener(this.searchInput, "focus", function () {
        _this.activeInput = _this.searchInput;
        _this.searchInput.value && _this.highlight();
      });
      event.addListener(this.replaceInput, "focus", function () {
        _this.activeInput = _this.replaceInput;
        _this.searchInput.value && _this.highlight();
      });
    };
    this.$closeSearchBarKb = new HashHandler([{
      bindKey: "Esc",
      name: "closeSearchBar",
      exec: function exec(editor) {
        editor.searchBox.hide();
      }
    }]);
    this.$searchBarKb = new HashHandler();
    this.$searchBarKb.bindKeys({
      "Ctrl-f|Command-f": function CtrlFCommandF(sb) {
        var isReplace = sb.isReplace = !sb.isReplace;
        sb.replaceBox.style.display = isReplace ? "" : "none";
        sb.searchInput.focus();
      },
      "Ctrl-H|Command-Option-F": function CtrlHCommandOptionF(sb) {
        sb.replaceBox.style.display = "";
        sb.replaceInput.focus();
      },
      "Ctrl-G|Command-G": function CtrlGCommandG(sb) {
        sb.findNext();
      },
      "Ctrl-Shift-G|Command-Shift-G": function CtrlShiftGCommandShiftG(sb) {
        sb.findPrev();
      },
      "esc": function esc(sb) {
        setTimeout(function () {
          sb.hide();
        });
      },
      "Return": function Return(sb) {
        if (sb.activeInput == sb.replaceInput) sb.replace();
        sb.findNext();
      },
      "Shift-Return": function ShiftReturn(sb) {
        if (sb.activeInput == sb.replaceInput) sb.replace();
        sb.findPrev();
      },
      "Alt-Return": function AltReturn(sb) {
        if (sb.activeInput == sb.replaceInput) sb.replaceAll();
        sb.findAll();
      },
      "Tab": function Tab(sb) {
        (sb.activeInput == sb.replaceInput ? sb.searchInput : sb.replaceInput).focus();
      }
    });
    this.$searchBarKb.addCommands([{
      name: "toggleRegexpMode",
      bindKey: {
        win: "Alt-R|Alt-/",
        mac: "Ctrl-Alt-R|Ctrl-Alt-/"
      },
      exec: function exec(sb) {
        sb.regExpOption.checked = !sb.regExpOption.checked;
        sb.$syncOptions();
      }
    }, {
      name: "toggleCaseSensitive",
      bindKey: {
        win: "Alt-C|Alt-I",
        mac: "Ctrl-Alt-R|Ctrl-Alt-I"
      },
      exec: function exec(sb) {
        sb.caseSensitiveOption.checked = !sb.caseSensitiveOption.checked;
        sb.$syncOptions();
      }
    }, {
      name: "toggleWholeWords",
      bindKey: {
        win: "Alt-B|Alt-W",
        mac: "Ctrl-Alt-B|Ctrl-Alt-W"
      },
      exec: function exec(sb) {
        sb.wholeWordOption.checked = !sb.wholeWordOption.checked;
        sb.$syncOptions();
      }
    }]);
    this.$syncOptions = function () {
      dom.setCssClass(this.regExpOption, "checked", this.regExpOption.checked);
      dom.setCssClass(this.wholeWordOption, "checked", this.wholeWordOption.checked);
      dom.setCssClass(this.caseSensitiveOption, "checked", this.caseSensitiveOption.checked);
      this.find(false, false);
    };
    this.highlight = function (re) {
      this.editor.session.highlight(re || this.editor.$search.$options.re);
      this.editor.renderer.updateBackMarkers();
    };
    this.find = function (skipCurrent, backwards, preventScroll) {
      var range = this.editor.find(this.searchInput.value, {
        skipCurrent: skipCurrent,
        backwards: backwards,
        wrap: true,
        regExp: this.regExpOption.checked,
        caseSensitive: this.caseSensitiveOption.checked,
        wholeWord: this.wholeWordOption.checked,
        preventScroll: preventScroll
      });
      var noMatch = !range && this.searchInput.value;
      dom.setCssClass(this.searchBox, "ace_nomatch", noMatch);
      this.editor._emit("findSearchBox", {
        match: !noMatch
      });
      this.highlight();
    };
    this.findNext = function () {
      this.find(true, false);
    };
    this.findPrev = function () {
      this.find(true, true);
    };
    this.findAll = function () {
      var range = this.editor.findAll(this.searchInput.value, {
        regExp: this.regExpOption.checked,
        caseSensitive: this.caseSensitiveOption.checked,
        wholeWord: this.wholeWordOption.checked
      });
      var noMatch = !range && this.searchInput.value;
      dom.setCssClass(this.searchBox, "ace_nomatch", noMatch);
      this.editor._emit("findSearchBox", {
        match: !noMatch
      });
      this.highlight();
      this.hide();
    };
    this.replace = function () {
      if (!this.editor.getReadOnly()) this.editor.replace(this.replaceInput.value);
    };
    this.replaceAndFindNext = function () {
      if (!this.editor.getReadOnly()) {
        this.editor.replace(this.replaceInput.value);
        this.findNext();
      }
    };
    this.replaceAll = function () {
      if (!this.editor.getReadOnly()) this.editor.replaceAll(this.replaceInput.value);
    };
    this.hide = function () {
      this.element.style.display = "none";
      this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb);
      this.editor.focus();
    };
    this.show = function (value, isReplace) {
      this.element.style.display = "";
      this.replaceBox.style.display = isReplace ? "" : "none";
      this.isReplace = isReplace;
      if (value) this.searchInput.value = value;
      this.find(false, false, true);
      this.searchInput.focus();
      this.searchInput.select();
      this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb);
    };
    this.isFocused = function () {
      var el = document.activeElement;
      return el == this.searchInput || el == this.replaceInput;
    };
  }).call(SearchBox.prototype);
  exports.SearchBox = SearchBox;
  exports.Search = function (editor, isReplace) {
    var sb = editor.searchBox || new SearchBox(editor);
    sb.show(editor.session.getTextRange(), isReplace);
  };
});
(function () {
  ace.require(["ace/ext/searchbox"], function () {});
})();

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/ext-settings_menu.js":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/ext-settings_menu.js ***!
  \******************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
ace.define("ace/ext/menu_tools/element_generator", ["require", "exports", "module"], function (require, exports, module) {
  'use strict';

  module.exports.createOption = function createOption(obj) {
    var attribute;
    var el = document.createElement('option');
    for (attribute in obj) {
      if (obj.hasOwnProperty(attribute)) {
        if (attribute === 'selected') {
          el.setAttribute(attribute, obj[attribute]);
        } else {
          el[attribute] = obj[attribute];
        }
      }
    }
    return el;
  };
  module.exports.createCheckbox = function createCheckbox(id, checked, clss) {
    var el = document.createElement('input');
    el.setAttribute('type', 'checkbox');
    el.setAttribute('id', id);
    el.setAttribute('name', id);
    el.setAttribute('value', checked);
    el.setAttribute('class', clss);
    if (checked) {
      el.setAttribute('checked', 'checked');
    }
    return el;
  };
  module.exports.createInput = function createInput(id, value, clss) {
    var el = document.createElement('input');
    el.setAttribute('type', 'text');
    el.setAttribute('id', id);
    el.setAttribute('name', id);
    el.setAttribute('value', value);
    el.setAttribute('class', clss);
    return el;
  };
  module.exports.createLabel = function createLabel(text, labelFor) {
    var el = document.createElement('label');
    el.setAttribute('for', labelFor);
    el.textContent = text;
    return el;
  };
  module.exports.createSelection = function createSelection(id, values, clss) {
    var el = document.createElement('select');
    el.setAttribute('id', id);
    el.setAttribute('name', id);
    el.setAttribute('class', clss);
    values.forEach(function (item) {
      el.appendChild(module.exports.createOption(item));
    });
    return el;
  };
});
ace.define("ace/ext/modelist", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  var modes = [];
  function getModeForPath(path) {
    var mode = modesByName.text;
    var fileName = path.split(/[\/\\]/).pop();
    for (var i = 0; i < modes.length; i++) {
      if (modes[i].supportsFile(fileName)) {
        mode = modes[i];
        break;
      }
    }
    return mode;
  }
  var Mode = function Mode(name, caption, extensions) {
    this.name = name;
    this.caption = caption;
    this.mode = "ace/mode/" + name;
    this.extensions = extensions;
    var re;
    if (/\^/.test(extensions)) {
      re = extensions.replace(/\|(\^)?/g, function (a, b) {
        return "$|" + (b ? "^" : "^.*\\.");
      }) + "$";
    } else {
      re = "^.*\\.(" + extensions + ")$";
    }
    this.extRe = new RegExp(re, "gi");
  };
  Mode.prototype.supportsFile = function (filename) {
    return filename.match(this.extRe);
  };
  var supportedModes = {
    ABAP: ["abap"],
    ABC: ["abc"],
    ActionScript: ["as"],
    ADA: ["ada|adb"],
    Apache_Conf: ["^htaccess|^htgroups|^htpasswd|^conf|htaccess|htgroups|htpasswd"],
    AsciiDoc: ["asciidoc|adoc"],
    Assembly_x86: ["asm|a"],
    AutoHotKey: ["ahk"],
    BatchFile: ["bat|cmd"],
    C_Cpp: ["cpp|c|cc|cxx|h|hh|hpp|ino"],
    C9Search: ["c9search_results"],
    Cirru: ["cirru|cr"],
    Clojure: ["clj|cljs"],
    Cobol: ["CBL|COB"],
    coffee: ["coffee|cf|cson|^Cakefile"],
    ColdFusion: ["cfm"],
    CSharp: ["cs"],
    CSS: ["css"],
    Curly: ["curly"],
    D: ["d|di"],
    Dart: ["dart"],
    Diff: ["diff|patch"],
    Dockerfile: ["^Dockerfile"],
    Dot: ["dot"],
    Dummy: ["dummy"],
    DummySyntax: ["dummy"],
    Eiffel: ["e|ge"],
    EJS: ["ejs"],
    Elixir: ["ex|exs"],
    Elm: ["elm"],
    Erlang: ["erl|hrl"],
    Forth: ["frt|fs|ldr"],
    FTL: ["ftl"],
    Gcode: ["gcode"],
    Gherkin: ["feature"],
    Gitignore: ["^.gitignore"],
    Glsl: ["glsl|frag|vert"],
    golang: ["go"],
    Groovy: ["groovy"],
    HAML: ["haml"],
    Handlebars: ["hbs|handlebars|tpl|mustache"],
    Haskell: ["hs"],
    haXe: ["hx"],
    Hive: ["hql|q|ql"],
    HTML: ["html|htm|xhtml"],
    HTML_Ruby: ["erb|rhtml|html.erb"],
    HTML_Elixir: ["eex|html.eex"],
    INI: ["ini|conf|cfg|prefs"],
    Io: ["io"],
    Jack: ["jack"],
    Jade: ["jade"],
    Java: ["java"],
    JavaScript: ["js|jsm|jsx"],
    JSON: ["json"],
    JSONiq: ["jq"],
    JSP: ["jsp"],
    JSX: ["jsx"],
    Julia: ["jl"],
    LaTeX: ["tex|latex|ltx|bib"],
    Lean: ["lean|hlean"],
    LESS: ["less"],
    Liquid: ["liquid"],
    Lisp: ["lisp"],
    LiveScript: ["ls"],
    LogiQL: ["logic|lql"],
    LSL: ["lsl"],
    Lua: ["lua"],
    LuaPage: ["lp"],
    Lucene: ["lucene"],
    Makefile: ["^Makefile|^GNUmakefile|^makefile|^OCamlMakefile|make"],
    Markdown: ["md|markdown"],
    Mask: ["mask"],
    MATLAB: ["matlab"],
    Maze: ["mz"],
    MEL: ["mel"],
    MUSHCode: ["mc|mush"],
    MySQL: ["mysql"],
    Nix: ["nix"],
    ObjectiveC: ["m|mm"],
    OCaml: ["ml|mli"],
    Pascal: ["pas|p"],
    Perl: ["pl|pm"],
    pgSQL: ["pgsql"],
    PHP: ["php|phtml|shtml|php3|php4|php5|phps|phpt|aw|ctp"],
    PigLatin: ["pig"],
    Powershell: ["ps1"],
    Praat: ["praat|praatscript|psc|proc"],
    Prolog: ["plg|prolog"],
    Properties: ["properties"],
    Protobuf: ["proto"],
    Python: ["py"],
    R: ["r"],
    RDoc: ["Rd"],
    RHTML: ["Rhtml"],
    Ruby: ["rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile"],
    Rust: ["rs"],
    SASS: ["sass"],
    SCAD: ["scad"],
    Scala: ["scala"],
    Scheme: ["scm|sm|rkt|oak|scheme"],
    SCSS: ["scss"],
    SH: ["sh|bash|^.bashrc"],
    SJS: ["sjs"],
    Smarty: ["smarty|tpl"],
    snippets: ["snippets"],
    Soy_Template: ["soy"],
    Space: ["space"],
    SQL: ["sql"],
    SQLServer: ["sqlserver"],
    Stylus: ["styl|stylus"],
    SVG: ["svg"],
    Swift: ["swift"],
    Tcl: ["tcl"],
    Tex: ["tex"],
    Text: ["txt"],
    Textile: ["textile"],
    Toml: ["toml"],
    Twig: ["twig|swig"],
    Typescript: ["ts|typescript|str"],
    Vala: ["vala"],
    VBScript: ["vbs|vb"],
    Velocity: ["vm"],
    Verilog: ["v|vh|sv|svh"],
    VHDL: ["vhd|vhdl"],
    XML: ["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl|xaml"],
    XQuery: ["xq"],
    YAML: ["yaml|yml"],
    Django: ["html"]
  };
  var nameOverrides = {
    ObjectiveC: "Objective-C",
    CSharp: "C#",
    golang: "Go",
    C_Cpp: "C and C++",
    coffee: "CoffeeScript",
    HTML_Ruby: "HTML (Ruby)",
    HTML_Elixir: "HTML (Elixir)",
    FTL: "FreeMarker"
  };
  var modesByName = {};
  for (var name in supportedModes) {
    var data = supportedModes[name];
    var displayName = (nameOverrides[name] || name).replace(/_/g, " ");
    var filename = name.toLowerCase();
    var mode = new Mode(filename, displayName, data[0]);
    modesByName[filename] = mode;
    modes.push(mode);
  }
  module.exports = {
    getModeForPath: getModeForPath,
    modes: modes,
    modesByName: modesByName
  };
});
ace.define("ace/ext/themelist", ["require", "exports", "module", "ace/lib/fixoldbrowsers"], function (require, exports, module) {
  "use strict";

  require("ace/lib/fixoldbrowsers");
  var themeData = [["Chrome"], ["Clouds"], ["Crimson Editor"], ["Dawn"], ["Dreamweaver"], ["Eclipse"], ["GitHub"], ["IPlastic"], ["Solarized Light"], ["TextMate"], ["Tomorrow"], ["XCode"], ["Kuroir"], ["KatzenMilch"], ["SQL Server", "sqlserver", "light"], ["Ambiance", "ambiance", "dark"], ["Chaos", "chaos", "dark"], ["Clouds Midnight", "clouds_midnight", "dark"], ["Cobalt", "cobalt", "dark"], ["idle Fingers", "idle_fingers", "dark"], ["krTheme", "kr_theme", "dark"], ["Merbivore", "merbivore", "dark"], ["Merbivore Soft", "merbivore_soft", "dark"], ["Mono Industrial", "mono_industrial", "dark"], ["Monokai", "monokai", "dark"], ["Pastel on dark", "pastel_on_dark", "dark"], ["Solarized Dark", "solarized_dark", "dark"], ["Terminal", "terminal", "dark"], ["Tomorrow Night", "tomorrow_night", "dark"], ["Tomorrow Night Blue", "tomorrow_night_blue", "dark"], ["Tomorrow Night Bright", "tomorrow_night_bright", "dark"], ["Tomorrow Night 80s", "tomorrow_night_eighties", "dark"], ["Twilight", "twilight", "dark"], ["Vibrant Ink", "vibrant_ink", "dark"]];
  exports.themesByName = {};
  exports.themes = themeData.map(function (data) {
    var name = data[1] || data[0].replace(/ /g, "_").toLowerCase();
    var theme = {
      caption: data[0],
      theme: "ace/theme/" + name,
      isDark: data[2] == "dark",
      name: name
    };
    exports.themesByName[name] = theme;
    return theme;
  });
});
ace.define("ace/ext/menu_tools/add_editor_menu_options", ["require", "exports", "module", "ace/ext/modelist", "ace/ext/themelist"], function (require, exports, module) {
  'use strict';

  module.exports.addEditorMenuOptions = function addEditorMenuOptions(editor) {
    var modelist = require("../modelist");
    var themelist = require("../themelist");
    editor.menuOptions = {
      setNewLineMode: [{
        textContent: "unix",
        value: "unix"
      }, {
        textContent: "windows",
        value: "windows"
      }, {
        textContent: "auto",
        value: "auto"
      }],
      setTheme: [],
      setMode: [],
      setKeyboardHandler: [{
        textContent: "ace",
        value: ""
      }, {
        textContent: "vim",
        value: "ace/keyboard/vim"
      }, {
        textContent: "emacs",
        value: "ace/keyboard/emacs"
      }, {
        textContent: "textarea",
        value: "ace/keyboard/textarea"
      }, {
        textContent: "sublime",
        value: "ace/keyboard/sublime"
      }]
    };
    editor.menuOptions.setTheme = themelist.themes.map(function (theme) {
      return {
        textContent: theme.caption,
        value: theme.theme
      };
    });
    editor.menuOptions.setMode = modelist.modes.map(function (mode) {
      return {
        textContent: mode.name,
        value: mode.mode
      };
    });
  };
});
ace.define("ace/ext/menu_tools/get_set_functions", ["require", "exports", "module"], function (require, exports, module) {
  'use strict';

  module.exports.getSetFunctions = function getSetFunctions(editor) {
    var out = [];
    var my = {
      'editor': editor,
      'session': editor.session,
      'renderer': editor.renderer
    };
    var opts = [];
    var skip = ['setOption', 'setUndoManager', 'setDocument', 'setValue', 'setBreakpoints', 'setScrollTop', 'setScrollLeft', 'setSelectionStyle', 'setWrapLimitRange'];
    ['renderer', 'session', 'editor'].forEach(function (esra) {
      var esr = my[esra];
      var clss = esra;
      for (var fn in esr) {
        if (skip.indexOf(fn) === -1) {
          if (/^set/.test(fn) && opts.indexOf(fn) === -1) {
            opts.push(fn);
            out.push({
              'functionName': fn,
              'parentObj': esr,
              'parentName': clss
            });
          }
        }
      }
    });
    return out;
  };
});
ace.define("ace/ext/menu_tools/generate_settings_menu", ["require", "exports", "module", "ace/ext/menu_tools/element_generator", "ace/ext/menu_tools/add_editor_menu_options", "ace/ext/menu_tools/get_set_functions"], function (require, exports, module) {
  'use strict';

  var egen = require("./element_generator");
  var addEditorMenuOptions = require("./add_editor_menu_options").addEditorMenuOptions;
  var getSetFunctions = require("./get_set_functions").getSetFunctions;
  module.exports.generateSettingsMenu = function generateSettingsMenu(editor) {
    var elements = [];
    function cleanupElementsList() {
      elements.sort(function (a, b) {
        var x = a.getAttribute('contains');
        var y = b.getAttribute('contains');
        return x.localeCompare(y);
      });
    }
    function wrapElements() {
      var topmenu = document.createElement('div');
      topmenu.setAttribute('id', 'ace_settingsmenu');
      elements.forEach(function (element) {
        topmenu.appendChild(element);
      });
      return topmenu;
    }
    function createNewEntry(obj, clss, item, val) {
      var el;
      var div = document.createElement('div');
      div.setAttribute('contains', item);
      div.setAttribute('class', 'ace_optionsMenuEntry');
      div.setAttribute('style', 'clear: both;');
      div.appendChild(egen.createLabel(item.replace(/^set/, '').replace(/([A-Z])/g, ' $1').trim(), item));
      if (Array.isArray(val)) {
        el = egen.createSelection(item, val, clss);
        el.addEventListener('change', function (e) {
          try {
            editor.menuOptions[e.target.id].forEach(function (x) {
              if (x.textContent !== e.target.textContent) {
                delete x.selected;
              }
            });
            obj[e.target.id](e.target.value);
          } catch (err) {
            throw new Error(err);
          }
        });
      } else if (typeof val === 'boolean') {
        el = egen.createCheckbox(item, val, clss);
        el.addEventListener('change', function (e) {
          try {
            obj[e.target.id](!!e.target.checked);
          } catch (err) {
            throw new Error(err);
          }
        });
      } else {
        el = egen.createInput(item, val, clss);
        el.addEventListener('change', function (e) {
          try {
            if (e.target.value === 'true') {
              obj[e.target.id](true);
            } else if (e.target.value === 'false') {
              obj[e.target.id](false);
            } else {
              obj[e.target.id](e.target.value);
            }
          } catch (err) {
            throw new Error(err);
          }
        });
      }
      el.style.cssText = 'float:right;';
      div.appendChild(el);
      return div;
    }
    function makeDropdown(item, esr, clss, fn) {
      var val = editor.menuOptions[item];
      var currentVal = esr[fn]();
      if (_typeof(currentVal) == 'object') currentVal = currentVal.$id;
      val.forEach(function (valuex) {
        if (valuex.value === currentVal) valuex.selected = 'selected';
      });
      return createNewEntry(esr, clss, item, val);
    }
    function handleSet(setObj) {
      var item = setObj.functionName;
      var esr = setObj.parentObj;
      var clss = setObj.parentName;
      var val;
      var fn = item.replace(/^set/, 'get');
      if (editor.menuOptions[item] !== undefined) {
        elements.push(makeDropdown(item, esr, clss, fn));
      } else if (typeof esr[fn] === 'function') {
        try {
          val = esr[fn]();
          if (_typeof(val) === 'object') {
            val = val.$id;
          }
          elements.push(createNewEntry(esr, clss, item, val));
        } catch (e) {}
      }
    }
    addEditorMenuOptions(editor);
    getSetFunctions(editor).forEach(function (setObj) {
      if (!editor.enabledMenuOptions || editor.enabledMenuOptions[setObj.functionName]) {
        handleSet(setObj);
      }
    });
    if (editor.customMenuOptions) {
      getSetFunctions(editor.customMenuOptions).forEach(function (setObj) {
        handleSet(setObj);
      });
    }
    cleanupElementsList();
    return wrapElements();
  };
});
ace.define("ace/ext/menu_tools/overlay_page", ["require", "exports", "module", "ace/lib/dom"], function (require, exports, module) {
  'use strict';

  var dom = require("../../lib/dom");
  var cssText = "#ace_settingsmenu, #kbshortcutmenu {\
background-color: #F7F7F7;\
color: black;\
box-shadow: -5px 4px 5px rgba(126, 126, 126, 0.55);\
padding: 1em 0.5em 2em 1em;\
overflow: auto;\
position: absolute;\
margin: 0;\
bottom: 0;\
right: 0;\
top: 0;\
z-index: 9991;\
cursor: default;\
}\
.ace_dark #ace_settingsmenu, .ace_dark #kbshortcutmenu {\
box-shadow: -20px 10px 25px rgba(126, 126, 126, 0.25);\
background-color: rgba(255, 255, 255, 0.6);\
color: black;\
}\
.ace_optionsMenuEntry:hover {\
background-color: rgba(100, 100, 100, 0.1);\
-webkit-transition: all 0.5s;\
transition: all 0.3s\
}\
.ace_closeButton {\
background: rgba(245, 146, 146, 0.5);\
border: 1px solid #F48A8A;\
border-radius: 50%;\
padding: 7px;\
position: absolute;\
right: -8px;\
top: -8px;\
z-index: 1000;\
}\
.ace_closeButton{\
background: rgba(245, 146, 146, 0.9);\
}\
.ace_optionsMenuKey {\
color: darkslateblue;\
font-weight: bold;\
}\
.ace_optionsMenuCommand {\
color: darkcyan;\
font-weight: normal;\
}";
  dom.importCssString(cssText);
  module.exports.overlayPage = function overlayPage(editor, contentElement, top, right, bottom, left) {
    top = top ? 'top: ' + top + ';' : '';
    bottom = bottom ? 'bottom: ' + bottom + ';' : '';
    right = right ? 'right: ' + right + ';' : '';
    left = left ? 'left: ' + left + ';' : '';
    var closer = document.createElement('div');
    var contentContainer = document.createElement('div');
    function documentEscListener(e) {
      if (e.keyCode === 27) {
        closer.click();
      }
    }
    closer.style.cssText = 'margin: 0; padding: 0; ' + 'position: fixed; top:0; bottom:0; left:0; right:0;' + 'z-index: 9990; ' + 'background-color: rgba(0, 0, 0, 0.3);';
    closer.addEventListener('click', function () {
      document.removeEventListener('keydown', documentEscListener);
      closer.parentNode.removeChild(closer);
      editor.focus();
      closer = null;
    });
    document.addEventListener('keydown', documentEscListener);
    contentContainer.style.cssText = top + right + bottom + left;
    contentContainer.addEventListener('click', function (e) {
      e.stopPropagation();
    });
    var wrapper = dom.createElement("div");
    wrapper.style.position = "relative";
    var closeButton = dom.createElement("div");
    closeButton.className = "ace_closeButton";
    closeButton.addEventListener('click', function () {
      closer.click();
    });
    wrapper.appendChild(closeButton);
    contentContainer.appendChild(wrapper);
    contentContainer.appendChild(contentElement);
    closer.appendChild(contentContainer);
    document.body.appendChild(closer);
    editor.blur();
  };
});
ace.define("ace/ext/settings_menu", ["require", "exports", "module", "ace/ext/menu_tools/generate_settings_menu", "ace/ext/menu_tools/overlay_page", "ace/editor"], function (require, exports, module) {
  "use strict";

  var generateSettingsMenu = require("./menu_tools/generate_settings_menu").generateSettingsMenu;
  var overlayPage = require("./menu_tools/overlay_page").overlayPage;
  function showSettingsMenu(editor) {
    var sm = document.getElementById('ace_settingsmenu');
    if (!sm) overlayPage(editor, generateSettingsMenu(editor), '0', '0', '0');
  }
  module.exports.init = function (editor) {
    var Editor = require("ace/editor").Editor;
    Editor.prototype.showSettingsMenu = function () {
      showSettingsMenu(this);
    };
  };
});
(function () {
  ace.require(["ace/ext/settings_menu"], function () {});
})();

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-bigquery.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-bigquery.js ***!
  \**************************************************************/
/***/ (() => {

ace.define("ace/mode/bigquery_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var BigQueryHighlightRules = function BigQueryHighlightRules() {
    var keywords = "ADD|ADMIN|AFTER|ALL|ALTER|ANALYZE|AND|ARCHIVE|AS|ASC|AUTHORIZATION|BEFORE|BETWEEN|BOTH|BUCKET|BUCKETS|BY|CACHE|CASCADE|CASE|CAST|CHANGE|CLUSTER|CLUSTERED|CLUSTERSTATUS|COLLECTION|COLUMN|COLUMNS|COMMENT|COMMIT|COMPACT|COMPACTIONS|COMPUTE|CONCATENATE|CONF|CONSTRAINT|CONTINUE|CREATE|CROSS|CUBE|CURRENT|CURRENT_DATE|CURRENT_TIMESTAMP|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DAY|DAYOFWEEK|DBPROPERTIES|DEFERRED|DEFINED|DELETE|DEPENDENCY|DESC|DESCRIBE|DIRECTORIES|DIRECTORY|DISABLE|DISTINCT|DISTRIBUTE|DROP|ELEM_TYPE|ELSE|ENABLE|END|ESCAPED|EXCHANGE|EXCLUSIVE|EXISTS|EXPLAIN|EXPORT|EXTENDED|EXTERNAL|EXTRACT|FETCH|FIELDS|FILE|FILEFORMAT|FIRST|FLOOR|FOLLOWING|FOR|FOREIGN|FORMAT|FORMATTED|FROM|FULL|FUNCTION|FUNCTIONS|GRANT|GROUP|GROUPING|HAVING|HOLD_DDLTIME|HOUR|IDXPROPERTIES|IF|IGNORE|IMPORT|IN|INDEX|INDEXES|INNER|INPATH|INPUTDRIVER|INPUTFORMAT|INSERT|INTERSECT|INTERVAL|INTO|IS|ITEMS|JAR|JOIN|KEY|KEYS|KEY_TYPE|LATERAL|LEFT|LESS|LIKE|LIMIT|LINES|LOAD|LOCAL|LOCATION|LOCK|LOCKS|LOGICAL|LONG|MACRO|MAPJOIN|MATERIALIZED|MINUS|MINUTE|MONTH|MORE|MSCK|NONE|NOSCAN|NOVALIDATE|NOT|NO_DROP|OF|OFFLINE|ON|ONLY|OPTION|OR|ORDER|OUT|OUTER|OUTPUTDRIVER|OUTPUTFORMAT|OVER|OVERWRITE|OWNER|PARTIALSCAN|PARTITION|PARTITIONED|PARTITIONS|PERCENT|PLUS|PRECEDING|PRECISION|PRESERVE|PRETTY|PRIMARY|PRINCIPALS|PROCEDURE|PROTECTION|PURGE|RANGE|READ|READONLY|READS|REBUILD|RECORDREADER|RECORDWRITER|REDUCE|REFERENCES|REGEXP|RELOAD|RENAME|REPAIR|REPLACE|RESTRICT|REVOKE|REWRITE|RIGHT|RLIKE|ROLE|ROLES|ROLLBACK|ROLLUP|ROW|ROWS|SCHEMA|SCHEMAS|SECOND|SELECT|SEMI|SERDEPROPERTIES|SERVER|SET|SETS|SHARED|SHOW|SHOW_DATABASE|SKEWED|SORT|SORTED|SSL|START|STATISTICS|STORED|STREAMTABLE|SYNC|TABLE|TABLES|TABLESAMPLE|TBLPROPERTIES|TEMPORARY|TERMINATED|THEN|TO|TOUCH|TRANSACTIONAL|TRANSACTIONS|TRANSFORM|TRIGGER|TRUNCATE|UNARCHIVE|UNBOUNDED|UNDO|UNION|UNIQUEJOIN|UNLOCK|UNSET|UNSIGNED|UTC_TIMESTAMP|UPDATE|URI|USE|USER|USING|UTC|UTCTIMESTAMP|VALUES|VALUE_TYPE|VIEW|VIEWS|WHEN|WHERE|WHILE|WINDOW|WITH|YEAR";
    var builtinConstants = "FALSE|NULL|TRUE";
    var builtinFunctions = "ABS|ACOS|ADD_MONTHS|AES_DECRYPT|AES_ENCRYPT|ARRAY|ARRAY_CONTAINS|ASCII|ASIN|ATAN|AVG|BASE64|BIN|BINARY|BROUND|CAST|CBRT|CEIL|CEILING|COALESCE|COLLECT_LIST|COLLECT_SET|CONCAT|CONCAT_WS|CONTEXT_NGRAMS|CONV|CORR|COS|COVAR_POP|COVAR_SAMP|COUNT|CRC32|CREATE_UNION|CUME_DIST|CURRENT_DATABASE|CURRENT_DATE|CURRENT_TIMESTAMP|CURRENT_USER|DATE_ADD|DATE_FORMAT|DATE_SUB|DATEDIFF|DAY|DAYOFMONTH|DECODE|DEGREES|DENSE_RANK|E|ENCODE|EXP|EXPLODE|FACTORIAL|FIND_IN_SET|FIRST_VALUE|FLOOR|FORMAT_NUMBER|FROM_UNIXTIME|FROM_UTC_TIMESTAMP|GET_JSON_OBJECT|GREATEST|HASH|HEX|HISTOGRAM_NUMERIC|HOUR|IF|IN_FILE|INLINE|INSTR|INITCAP|ISNOTNULL|ISNULL|JAVA_METHOD|JSON_TUPLE|LAG|LAST_DAY|LAST_VALUE|LEAD|LEAST|LENGTH|LEVENSHTEIN|LCASE|LN|LOCATE|LOG|LOG10|LOG2|LOWER|LPAD|LTRIM|MAP|MAP_KEYS|MAP_VALUES|MAX|MD5|MIN|MINUTE|MONTH|MONTHS_BETWEEN|NAMED_STRUCT|NEGATIVE|NEXT_DAY|NGRAMS|NTILE|NVL|PARSE_URL|PARSE_URL_TUPLE|PERCENT_RANK|PERCENTILE|PERCENTILE_APPROX|PI|PMOD|POSEXPLODE|POSITIVE|POW|POWER|PRINTF|QUARTER|RADIANS|RAND|RANK|REFLECT|REGEXP_EXTRACT|REGEXP_REPLACE|REPEAT|REVERSE|ROUND|ROW_NUMBER|RPAD|RTRIM|SECOND|SHA|SHA1|SHA2|SHIFTLEFT|SHIFTRIGHT|SHIFTRIGHTUNSIGNED|SIGN|SIN|SIZE|SORT_ARRAY|SQRT|STACK|STDDEV_POP|STDDEV_SAMP|STRUCT|SENTENCES|SOUNDEX|SPACE|SPLIT|STR_TO_MAP|SUBSTR|SUBSTRING|SUBSTRING_INDEX|SUM|TAN|TO_DATE|TO_UTC_TIMESTAMP|TRANSLATE|TRIM|TRUNC|UCASE|UNBASE64|UNHEX|UNIX_TIMESTAMP|UPPER|VAR_POP|VAR_SAMP|VARIANCE|WEEKOFYEAR|XPATH|XPATH_BOOLEAN|XPATH_DOUBLE|XPATH_FLOAT|XPATH_INT|XPATH_LONG|XPATH_NUMBER|XPATH_SHORT|XPATH_STRING|YEAR";
    var dataTypes = "ARRAY|BIGINT|BINARY|BOOLEAN|CHAR|DATE|DECIMAL|DELIMITED|DOUBLE|FLOAT|INT|INTEGER|JSONFILE|MAP|NUMERIC|PRECISION|RCFILE|SEQUENCEFILE|SERDE|SMALLINT|STRING|STRUCT|TEXTFILE|TIME|TIMESTAMP|TINYINT|UNIONTYPE|VARCHAR";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  BigQueryHighlightRules.metaData = {
    fileTypes: ["bql", "bq"],
    name: "BigQuery",
    scopeName: "source.bigquery"
  };
  oop.inherits(BigQueryHighlightRules, TextHighlightRules);
  exports.BigQueryHighlightRules = BigQueryHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/bigquery", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/bigquery_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var BigQueryHighlightRules = require("./bigquery_highlight_rules").BigQueryHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = BigQueryHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/bigquery";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-dasksql.js":
/*!*************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-dasksql.js ***!
  \*************************************************************/
/***/ (() => {

ace.define("ace/mode/dasksql_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var DasksqlHighlightRules = function DasksqlHighlightRules() {
    var keywords = "ADD|ADMIN|AFTER|ALL|ALTER|ANALYZE|AND|ARCHIVE|AS|ASC|AUTHORIZATION|BEFORE|BETWEEN|BOTH|BUCKET|BUCKETS|BY|CACHE|CASCADE|CASE|CAST|CHANGE|CLUSTER|CLUSTERED|CLUSTERSTATUS|COLLECTION|COLUMN|COLUMNS|COMMENT|COMMIT|COMPACT|COMPACTIONS|COMPUTE|CONCATENATE|CONF|CONSTRAINT|CONTINUE|CREATE|CROSS|CUBE|CURRENT|CURRENT_DATE|CURRENT_TIMESTAMP|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DAY|DAYOFWEEK|DBPROPERTIES|DEFERRED|DEFINED|DELETE|DEPENDENCY|DESC|DESCRIBE|DIRECTORIES|DIRECTORY|DISABLE|DISTINCT|DISTRIBUTE|DROP|ELEM_TYPE|ELSE|ENABLE|END|ESCAPED|EXCHANGE|EXCLUSIVE|EXISTS|EXPLAIN|EXPORT|EXTENDED|EXTERNAL|EXTRACT|FETCH|FIELDS|FILE|FILEFORMAT|FIRST|FLOOR|FOLLOWING|FOR|FOREIGN|FORMAT|FORMATTED|FROM|FULL|FUNCTION|FUNCTIONS|GRANT|GROUP|GROUPING|HAVING|HOLD_DDLTIME|HOUR|IDXPROPERTIES|IF|IGNORE|IMPORT|IN|INDEX|INDEXES|INNER|INPATH|INPUTDRIVER|INPUTFORMAT|INSERT|INTERSECT|INTERVAL|INTO|IS|ITEMS|JAR|JOIN|KEY|KEYS|KEY_TYPE|LATERAL|LEFT|LESS|LIKE|LIMIT|LINES|LOAD|LOCAL|LOCATION|LOCK|LOCKS|LOGICAL|LONG|MACRO|MAPJOIN|MATERIALIZED|MINUS|MINUTE|MONTH|MORE|MSCK|NONE|NOSCAN|NOVALIDATE|NOT|NO_DROP|OF|OFFLINE|ON|ONLY|OPTION|OR|ORDER|OUT|OUTER|OUTPUTDRIVER|OUTPUTFORMAT|OVER|OVERWRITE|OWNER|PARTIALSCAN|PARTITION|PARTITIONED|PARTITIONS|PERCENT|PLUS|PRECEDING|PRECISION|PRESERVE|PRETTY|PRIMARY|PRINCIPALS|PROCEDURE|PROTECTION|PURGE|RANGE|READ|READONLY|READS|REBUILD|RECORDREADER|RECORDWRITER|REDUCE|REFERENCES|REGEXP|RELOAD|RENAME|REPAIR|REPLACE|RESTRICT|REVOKE|REWRITE|RIGHT|RLIKE|ROLE|ROLES|ROLLBACK|ROLLUP|ROW|ROWS|SCHEMA|SCHEMAS|SECOND|SELECT|SEMI|SERDEPROPERTIES|SERVER|SET|SETS|SHARED|SHOW|SHOW_DATABASE|SKEWED|SORT|SORTED|SSL|START|STATISTICS|STORED|STREAMTABLE|SYNC|TABLE|TABLES|TABLESAMPLE|TBLPROPERTIES|TEMPORARY|TERMINATED|THEN|TO|TOUCH|TRANSACTIONAL|TRANSACTIONS|TRANSFORM|TRIGGER|TRUNCATE|UNARCHIVE|UNBOUNDED|UNDO|UNION|UNIQUEJOIN|UNLOCK|UNSET|UNSIGNED|UTC_TIMESTAMP|UPDATE|URI|USE|USER|USING|UTC|UTCTIMESTAMP|VALUES|VALUE_TYPE|VIEW|VIEWS|WHEN|WHERE|WHILE|WINDOW|WITH|YEAR";
    var builtinConstants = "FALSE|NULL|TRUE";
    var builtinFunctions = "ABS|ACOS|ADD_MONTHS|AES_DECRYPT|AES_ENCRYPT|ARRAY|ARRAY_CONTAINS|ASCII|ASIN|ATAN|AVG|BASE64|BIN|BINARY|BROUND|CAST|CBRT|CEIL|CEILING|COALESCE|COLLECT_LIST|COLLECT_SET|CONCAT|CONCAT_WS|CONTEXT_NGRAMS|CONV|CORR|COS|COVAR_POP|COVAR_SAMP|COUNT|CRC32|CREATE_UNION|CUME_DIST|CURRENT_DATABASE|CURRENT_DATE|CURRENT_TIMESTAMP|CURRENT_USER|DATE_ADD|DATE_FORMAT|DATE_SUB|DATEDIFF|DAY|DAYOFMONTH|DECODE|DEGREES|DENSE_RANK|E|ENCODE|EXP|EXPLODE|FACTORIAL|FIND_IN_SET|FIRST_VALUE|FLOOR|FORMAT_NUMBER|FROM_UNIXTIME|FROM_UTC_TIMESTAMP|GET_JSON_OBJECT|GREATEST|HASH|HEX|HISTOGRAM_NUMERIC|HOUR|IF|IN_FILE|INLINE|INSTR|INITCAP|ISNOTNULL|ISNULL|JAVA_METHOD|JSON_TUPLE|LAG|LAST_DAY|LAST_VALUE|LEAD|LEAST|LENGTH|LEVENSHTEIN|LCASE|LN|LOCATE|LOG|LOG10|LOG2|LOWER|LPAD|LTRIM|MAP|MAP_KEYS|MAP_VALUES|MAX|MD5|MIN|MINUTE|MONTH|MONTHS_BETWEEN|NAMED_STRUCT|NEGATIVE|NEXT_DAY|NGRAMS|NTILE|NVL|PARSE_URL|PARSE_URL_TUPLE|PERCENT_RANK|PERCENTILE|PERCENTILE_APPROX|PI|PMOD|POSEXPLODE|POSITIVE|POW|POWER|PRINTF|QUARTER|RADIANS|RAND|RANK|REFLECT|REGEXP_EXTRACT|REGEXP_REPLACE|REPEAT|REVERSE|ROUND|ROW_NUMBER|RPAD|RTRIM|SECOND|SHA|SHA1|SHA2|SHIFTLEFT|SHIFTRIGHT|SHIFTRIGHTUNSIGNED|SIGN|SIN|SIZE|SORT_ARRAY|SQRT|STACK|STDDEV_POP|STDDEV_SAMP|STRUCT|SENTENCES|SOUNDEX|SPACE|SPLIT|STR_TO_MAP|SUBSTR|SUBSTRING|SUBSTRING_INDEX|SUM|TAN|TO_DATE|TO_UTC_TIMESTAMP|TRANSLATE|TRIM|TRUNC|UCASE|UNBASE64|UNHEX|UNIX_TIMESTAMP|UPPER|VAR_POP|VAR_SAMP|VARIANCE|WEEKOFYEAR|XPATH|XPATH_BOOLEAN|XPATH_DOUBLE|XPATH_FLOAT|XPATH_INT|XPATH_LONG|XPATH_NUMBER|XPATH_SHORT|XPATH_STRING|YEAR";
    var dataTypes = "ARRAY|BIGINT|BINARY|BOOLEAN|CHAR|DATE|DECIMAL|DELIMITED|DOUBLE|FLOAT|INT|INTEGER|JSONFILE|MAP|NUMERIC|PRECISION|RCFILE|SEQUENCEFILE|SERDE|SMALLINT|STRING|STRUCT|TEXTFILE|TIME|TIMESTAMP|TINYINT|UNIONTYPE|VARCHAR";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  DasksqlHighlightRules.metaData = {
    fileTypes: ["hql", "q", "ql"],
    name: "Dasksql",
    scopeName: "source.dasksql"
  };
  oop.inherits(DasksqlHighlightRules, TextHighlightRules);
  exports.DasksqlHighlightRules = DasksqlHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/dasksql", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/dasksql_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var DasksqlHighlightRules = require("./dasksql_highlight_rules").DasksqlHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = DasksqlHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/dasksql";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-druid.js":
/*!***********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-druid.js ***!
  \***********************************************************/
/***/ (() => {

ace.define("ace/mode/druid_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var DruidHighlightRules = function DruidHighlightRules() {
    var keywords = "ADD|ADMIN|AFTER|ALL|ALTER|ANALYZE|AND|ARCHIVE|AS|ASC|AUTHORIZATION|BEFORE|BETWEEN|BOTH|BUCKET|BUCKETS|BY|CACHE|CASCADE|CASE|CAST|CHANGE|CLUSTER|CLUSTERED|CLUSTERSTATUS|COLLECTION|COLUMN|COLUMNS|COMMENT|COMMIT|COMPACT|COMPACTIONS|COMPUTE|CONCATENATE|CONF|CONSTRAINT|CONTINUE|CREATE|CROSS|CUBE|CURRENT|CURRENT_DATE|CURRENT_TIMESTAMP|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DAY|DAYOFWEEK|DBPROPERTIES|DEFERRED|DEFINED|DELETE|DEPENDENCY|DESC|DESCRIBE|DIRECTORIES|DIRECTORY|DISABLE|DISTINCT|DISTRIBUTE|DROP|ELEM_TYPE|ELSE|ENABLE|END|ESCAPED|EXCHANGE|EXCLUSIVE|EXISTS|EXPLAIN|EXPORT|EXTENDED|EXTERNAL|EXTRACT|FETCH|FIELDS|FILE|FILEFORMAT|FIRST|FLOOR|FOLLOWING|FOR|FOREIGN|FORMAT|FORMATTED|FROM|FULL|FUNCTION|FUNCTIONS|GRANT|GROUP|GROUPING|HAVING|HOLD_DDLTIME|HOUR|IDXPROPERTIES|IF|IGNORE|IMPORT|IN|INDEX|INDEXES|INNER|INPATH|INPUTDRIVER|INPUTFORMAT|INSERT|INTERSECT|INTERVAL|INTO|IS|ITEMS|JAR|JOIN|KEY|KEYS|KEY_TYPE|LATERAL|LEFT|LESS|LIKE|LIMIT|LINES|LOAD|LOCAL|LOCATION|LOCK|LOCKS|LOGICAL|LONG|MACRO|MAPJOIN|MATERIALIZED|MINUS|MINUTE|MONTH|MORE|MSCK|NONE|NOSCAN|NOVALIDATE|NOT|NO_DROP|OF|OFFLINE|ON|ONLY|OPTION|OR|ORDER|OUT|OUTER|OUTPUTDRIVER|OUTPUTFORMAT|OVER|OVERWRITE|OWNER|PARTIALSCAN|PARTITION|PARTITIONED|PARTITIONS|PERCENT|PLUS|PRECEDING|PRECISION|PRESERVE|PRETTY|PRIMARY|PRINCIPALS|PROCEDURE|PROTECTION|PURGE|RANGE|READ|READONLY|READS|REBUILD|RECORDREADER|RECORDWRITER|REDUCE|REFERENCES|REGEXP|RELOAD|RENAME|REPAIR|REPLACE|RESTRICT|REVOKE|REWRITE|RIGHT|RLIKE|ROLE|ROLES|ROLLBACK|ROLLUP|ROW|ROWS|SCHEMA|SCHEMAS|SECOND|SELECT|SEMI|SERDEPROPERTIES|SERVER|SET|SETS|SHARED|SHOW|SHOW_DATABASE|SKEWED|SORT|SORTED|SSL|START|STATISTICS|STORED|STREAMTABLE|SYNC|TABLE|TABLES|TABLESAMPLE|TBLPROPERTIES|TEMPORARY|TERMINATED|THEN|TO|TOUCH|TRANSACTIONAL|TRANSACTIONS|TRANSFORM|TRIGGER|TRUNCATE|UNARCHIVE|UNBOUNDED|UNDO|UNION|UNIQUEJOIN|UNLOCK|UNSET|UNSIGNED|UTC_TIMESTAMP|UPDATE|URI|USE|USER|USING|UTC|UTCTIMESTAMP|VALUES|VALUE_TYPE|VIEW|VIEWS|WHEN|WHERE|WHILE|WINDOW|WITH|YEAR";
    var builtinConstants = "FALSE|NULL|TRUE";
    var builtinFunctions = "ABS|ACOS|ADD_MONTHS|AES_DECRYPT|AES_ENCRYPT|ARRAY|ARRAY_CONTAINS|ASCII|ASIN|ATAN|AVG|BASE64|BIN|BINARY|BROUND|CAST|CBRT|CEIL|CEILING|COALESCE|COLLECT_LIST|COLLECT_SET|CONCAT|CONCAT_WS|CONTEXT_NGRAMS|CONV|CORR|COS|COVAR_POP|COVAR_SAMP|COUNT|CRC32|CREATE_UNION|CUME_DIST|CURRENT_DATABASE|CURRENT_DATE|CURRENT_TIMESTAMP|CURRENT_USER|DATE_ADD|DATE_FORMAT|DATE_SUB|DATEDIFF|DAY|DAYOFMONTH|DECODE|DEGREES|DENSE_RANK|E|ENCODE|EXP|EXPLODE|FACTORIAL|FIND_IN_SET|FIRST_VALUE|FLOOR|FORMAT_NUMBER|FROM_UNIXTIME|FROM_UTC_TIMESTAMP|GET_JSON_OBJECT|GREATEST|HASH|HEX|HISTOGRAM_NUMERIC|HOUR|IF|IN_FILE|INLINE|INSTR|INITCAP|ISNOTNULL|ISNULL|JAVA_METHOD|JSON_TUPLE|LAG|LAST_DAY|LAST_VALUE|LEAD|LEAST|LENGTH|LEVENSHTEIN|LCASE|LN|LOCATE|LOG|LOG10|LOG2|LOWER|LPAD|LTRIM|MAP|MAP_KEYS|MAP_VALUES|MAX|MD5|MIN|MINUTE|MONTH|MONTHS_BETWEEN|NAMED_STRUCT|NEGATIVE|NEXT_DAY|NGRAMS|NTILE|NVL|PARSE_URL|PARSE_URL_TUPLE|PERCENT_RANK|PERCENTILE|PERCENTILE_APPROX|PI|PMOD|POSEXPLODE|POSITIVE|POW|POWER|PRINTF|QUARTER|RADIANS|RAND|RANK|REFLECT|REGEXP_EXTRACT|REGEXP_REPLACE|REPEAT|REVERSE|ROUND|ROW_NUMBER|RPAD|RTRIM|SECOND|SHA|SHA1|SHA2|SHIFTLEFT|SHIFTRIGHT|SHIFTRIGHTUNSIGNED|SIGN|SIN|SIZE|SORT_ARRAY|SQRT|STACK|STDDEV_POP|STDDEV_SAMP|STRUCT|SENTENCES|SOUNDEX|SPACE|SPLIT|STR_TO_MAP|SUBSTR|SUBSTRING|SUBSTRING_INDEX|SUM|TAN|TO_DATE|TO_UTC_TIMESTAMP|TRANSLATE|TRIM|TRUNC|UCASE|UNBASE64|UNHEX|UNIX_TIMESTAMP|UPPER|VAR_POP|VAR_SAMP|VARIANCE|WEEKOFYEAR|XPATH|XPATH_BOOLEAN|XPATH_DOUBLE|XPATH_FLOAT|XPATH_INT|XPATH_LONG|XPATH_NUMBER|XPATH_SHORT|XPATH_STRING|YEAR";
    var dataTypes = "ARRAY|BIGINT|BINARY|BOOLEAN|CHAR|DATE|DECIMAL|DELIMITED|DOUBLE|FLOAT|INT|INTEGER|JSONFILE|MAP|NUMERIC|PRECISION|RCFILE|SEQUENCEFILE|SERDE|SMALLINT|STRING|STRUCT|TEXTFILE|TIME|TIMESTAMP|TINYINT|UNIONTYPE|VARCHAR";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  DruidHighlightRules.metaData = {
    fileTypes: ["druid", "ql"],
    name: "Druid",
    scopeName: "source.druid"
  };
  oop.inherits(DruidHighlightRules, TextHighlightRules);
  exports.DruidHighlightRules = DruidHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/druid", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/druid_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var DruidHighlightRules = require("./druid_highlight_rules").DruidHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = DruidHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/druid";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-elasticsearch.js":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-elasticsearch.js ***!
  \*******************************************************************/
/***/ (() => {

ace.define("ace/mode/elasticsearch_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var ElasticSearchHighlightRules = function ElasticSearchHighlightRules() {
    var keywords = "ADD|ADMIN|AFTER|ALL|ALTER|ANALYZE|AND|ARCHIVE|AS|ASC|AUTHORIZATION|BEFORE|BETWEEN|BOTH|BUCKET|BUCKETS|BY|CACHE|CASCADE|CASE|CAST|CHANGE|CLUSTER|CLUSTERED|CLUSTERSTATUS|COLLECTION|COLUMN|COLUMNS|COMMENT|COMMIT|COMPACT|COMPACTIONS|COMPUTE|CONCATENATE|CONF|CONSTRAINT|CONTINUE|CREATE|CROSS|CUBE|CURRENT|CURRENT_DATE|CURRENT_TIMESTAMP|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DAY|DAYOFWEEK|DBPROPERTIES|DEFERRED|DEFINED|DELETE|DEPENDENCY|DESC|DESCRIBE|DIRECTORIES|DIRECTORY|DISABLE|DISTINCT|DISTRIBUTE|DROP|ELEM_TYPE|ELSE|ENABLE|END|ESCAPED|EXCHANGE|EXCLUSIVE|EXISTS|EXPLAIN|EXPORT|EXTENDED|EXTERNAL|EXTRACT|FETCH|FIELDS|FILE|FILEFORMAT|FIRST|FLOOR|FOLLOWING|FOR|FOREIGN|FORMAT|FORMATTED|FROM|FULL|FUNCTION|FUNCTIONS|GRANT|GROUP|GROUPING|HAVING|HOLD_DDLTIME|HOUR|IDXPROPERTIES|IF|IGNORE|IMPORT|IN|INDEX|INDEXES|INNER|INPATH|INPUTDRIVER|INPUTFORMAT|INSERT|INTERSECT|INTERVAL|INTO|IS|ITEMS|JAR|JOIN|KEY|KEYS|KEY_TYPE|LATERAL|LEFT|LESS|LIKE|LIMIT|LINES|LOAD|LOCAL|LOCATION|LOCK|LOCKS|LOGICAL|LONG|MACRO|MAPJOIN|MATERIALIZED|MINUS|MINUTE|MONTH|MORE|MSCK|NONE|NOSCAN|NOVALIDATE|NOT|NO_DROP|OF|OFFLINE|ON|ONLY|OPTION|OR|ORDER|OUT|OUTER|OUTPUTDRIVER|OUTPUTFORMAT|OVER|OVERWRITE|OWNER|PARTIALSCAN|PARTITION|PARTITIONED|PARTITIONS|PERCENT|PLUS|PRECEDING|PRECISION|PRESERVE|PRETTY|PRIMARY|PRINCIPALS|PROCEDURE|PROTECTION|PURGE|RANGE|READ|READONLY|READS|REBUILD|RECORDREADER|RECORDWRITER|REDUCE|REFERENCES|REGEXP|RELOAD|RENAME|REPAIR|REPLACE|RESTRICT|REVOKE|REWRITE|RIGHT|RLIKE|ROLE|ROLES|ROLLBACK|ROLLUP|ROW|ROWS|SCHEMA|SCHEMAS|SECOND|SELECT|SEMI|SERDEPROPERTIES|SERVER|SET|SETS|SHARED|SHOW|SHOW_DATABASE|SKEWED|SORT|SORTED|SSL|START|STATISTICS|STORED|STREAMTABLE|SYNC|TABLE|TABLES|TABLESAMPLE|TBLPROPERTIES|TEMPORARY|TERMINATED|THEN|TO|TOUCH|TRANSACTIONAL|TRANSACTIONS|TRANSFORM|TRIGGER|TRUNCATE|UNARCHIVE|UNBOUNDED|UNDO|UNION|UNIQUEJOIN|UNLOCK|UNSET|UNSIGNED|UTC_TIMESTAMP|UPDATE|URI|USE|USER|USING|UTC|UTCTIMESTAMP|VALUES|VALUE_TYPE|VIEW|VIEWS|WHEN|WHERE|WHILE|WINDOW|WITH|YEAR";
    var builtinConstants = "FALSE|NULL|TRUE";
    var builtinFunctions = "ABS|ACOS|ADD_MONTHS|AES_DECRYPT|AES_ENCRYPT|ARRAY|ARRAY_CONTAINS|ASCII|ASIN|ATAN|AVG|BASE64|BIN|BINARY|BROUND|CAST|CBRT|CEIL|CEILING|COALESCE|COLLECT_LIST|COLLECT_SET|CONCAT|CONCAT_WS|CONTEXT_NGRAMS|CONV|CORR|COS|COVAR_POP|COVAR_SAMP|COUNT|CRC32|CREATE_UNION|CUME_DIST|CURRENT_DATABASE|CURRENT_DATE|CURRENT_TIMESTAMP|CURRENT_USER|DATE_ADD|DATE_FORMAT|DATE_SUB|DATEDIFF|DAY|DAYOFMONTH|DECODE|DEGREES|DENSE_RANK|E|ENCODE|EXP|EXPLODE|FACTORIAL|FIND_IN_SET|FIRST_VALUE|FLOOR|FORMAT_NUMBER|FROM_UNIXTIME|FROM_UTC_TIMESTAMP|GET_JSON_OBJECT|GREATEST|HASH|HEX|HISTOGRAM_NUMERIC|HOUR|IF|IN_FILE|INLINE|INSTR|INITCAP|ISNOTNULL|ISNULL|JAVA_METHOD|JSON_TUPLE|LAG|LAST_DAY|LAST_VALUE|LEAD|LEAST|LENGTH|LEVENSHTEIN|LCASE|LN|LOCATE|LOG|LOG10|LOG2|LOWER|LPAD|LTRIM|MAP|MAP_KEYS|MAP_VALUES|MAX|MD5|MIN|MINUTE|MONTH|MONTHS_BETWEEN|NAMED_STRUCT|NEGATIVE|NEXT_DAY|NGRAMS|NTILE|NVL|PARSE_URL|PARSE_URL_TUPLE|PERCENT_RANK|PERCENTILE|PERCENTILE_APPROX|PI|PMOD|POSEXPLODE|POSITIVE|POW|POWER|PRINTF|QUARTER|RADIANS|RAND|RANK|REFLECT|REGEXP_EXTRACT|REGEXP_REPLACE|REPEAT|REVERSE|ROUND|ROW_NUMBER|RPAD|RTRIM|SECOND|SHA|SHA1|SHA2|SHIFTLEFT|SHIFTRIGHT|SHIFTRIGHTUNSIGNED|SIGN|SIN|SIZE|SORT_ARRAY|SQRT|STACK|STDDEV_POP|STDDEV_SAMP|STRUCT|SENTENCES|SOUNDEX|SPACE|SPLIT|STR_TO_MAP|SUBSTR|SUBSTRING|SUBSTRING_INDEX|SUM|TAN|TO_DATE|TO_UTC_TIMESTAMP|TRANSLATE|TRIM|TRUNC|UCASE|UNBASE64|UNHEX|UNIX_TIMESTAMP|UPPER|VAR_POP|VAR_SAMP|VARIANCE|WEEKOFYEAR|XPATH|XPATH_BOOLEAN|XPATH_DOUBLE|XPATH_FLOAT|XPATH_INT|XPATH_LONG|XPATH_NUMBER|XPATH_SHORT|XPATH_STRING|YEAR";
    var dataTypes = "ARRAY|BIGINT|BINARY|BOOLEAN|CHAR|DATE|DECIMAL|DELIMITED|DOUBLE|FLOAT|INT|INTEGER|JSONFILE|MAP|NUMERIC|PRECISION|RCFILE|SEQUENCEFILE|SERDE|SMALLINT|STRING|STRUCT|TEXTFILE|TIME|TIMESTAMP|TINYINT|UNIONTYPE|VARCHAR";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  ElasticSearchHighlightRules.metaData = {
    fileTypes: ["esql", "es"],
    name: "ElasticSearch",
    scopeName: "source.elasticsearch"
  };
  oop.inherits(ElasticSearchHighlightRules, TextHighlightRules);
  exports.ElasticSearchHighlightRules = ElasticSearchHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/elasticsearch", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/elasticsearch_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var ElasticSearchHighlightRules = require("./elasticsearch_highlight_rules").ElasticSearchHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = ElasticSearchHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/elasticsearch";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-flink.js":
/*!***********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-flink.js ***!
  \***********************************************************/
/***/ (() => {

ace.define("ace/mode/flink_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var FlinkHighlightRules = function FlinkHighlightRules() {
    var keywords = "ADD|ADMIN|AFTER|ALL|ALTER|ANALYZE|AND|ARCHIVE|AS|ASC|AUTHORIZATION|BEFORE|BETWEEN|BOTH|BUCKET|BUCKETS|BY|CACHE|CASCADE|CASE|CAST|CHANGE|CLUSTER|CLUSTERED|CLUSTERSTATUS|COLLECTION|COLUMN|COLUMNS|COMMENT|COMMIT|COMPACT|COMPACTIONS|COMPUTE|CONCATENATE|CONF|CONSTRAINT|CONTINUE|CREATE|CROSS|CUBE|CURRENT|CURRENT_DATE|CURRENT_TIMESTAMP|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DAY|DAYOFWEEK|DBPROPERTIES|DEFERRED|DEFINED|DELETE|DEPENDENCY|DESC|DESCRIBE|DIRECTORIES|DIRECTORY|DISABLE|DISTINCT|DISTRIBUTE|DROP|ELEM_TYPE|ELSE|ENABLE|END|ESCAPED|EXCHANGE|EXCLUSIVE|EXISTS|EXPLAIN|EXPORT|EXTENDED|EXTERNAL|EXTRACT|FETCH|FIELDS|FILE|FILEFORMAT|FIRST|FLOOR|FOLLOWING|FOR|FOREIGN|FORMAT|FORMATTED|FROM|FULL|FUNCTION|FUNCTIONS|GRANT|GROUP|GROUPING|HAVING|HOLD_DDLTIME|HOP|HOUR|IDXPROPERTIES|IF|IGNORE|IMPORT|IN|INDEX|INDEXES|INNER|INPATH|INPUTDRIVER|INPUTFORMAT|INSERT|INTERSECT|INTERVAL|INTO|IS|ITEMS|JAR|JOIN|KEY|KEYS|KEY_TYPE|LATERAL|LEFT|LESS|LIKE|LIMIT|LINES|LOAD|LOCAL|LOCATION|LOCK|LOCKS|LOGICAL|LONG|MACRO|MAPJOIN|MATERIALIZED|MINUS|MINUTE|MONTH|MORE|MSCK|NONE|NOSCAN|NOVALIDATE|NOT|NO_DROP|OF|OFFLINE|ON|ONLY|OPTION|OR|ORDER|OUT|OUTER|OUTPUTDRIVER|OUTPUTFORMAT|OVER|OVERWRITE|OWNER|PARTIALSCAN|PARTITION|PARTITIONED|PARTITIONS|PERCENT|PLUS|PRECEDING|PRECISION|PRESERVE|PRETTY|PRIMARY|PRINCIPALS|PROCEDURE|PROTECTION|PURGE|RANGE|READ|READONLY|READS|REBUILD|RECORDREADER|RECORDWRITER|REDUCE|REFERENCES|REGEXP|RELOAD|RENAME|REPAIR|REPLACE|RESTRICT|REVOKE|REWRITE|RIGHT|RLIKE|ROLE|ROLES|ROLLBACK|ROLLUP|ROW|ROWS|SCHEMA|SCHEMAS|SECOND|SELECT|SEMI|SERDEPROPERTIES|SERVER|SESSION|SET|SETS|SHARED|SHOW|SHOW_DATABASE|SKEWED|SORT|SORTED|SSL|START|STATISTICS|STORED|STREAMTABLE|SYNC|TABLE|TABLES|TABLESAMPLE|TBLPROPERTIES|TEMPORARY|TERMINATED|THEN|TO|TOUCH|TRANSACTIONAL|TRANSACTIONS|TRANSFORM|TRIGGER|TRUNCATE|TUMBLE|UNARCHIVE|UNBOUNDED|UNDO|UNION|UNIQUEJOIN|UNLOCK|UNSET|UNSIGNED|UTC_TIMESTAMP|UPDATE|URI|USE|USER|USING|UTC|UTCTIMESTAMP|VALUES|VALUE_TYPE|VIEW|VIEWS|WHEN|WHERE|WHILE|WINDOW|WITH|YEAR";
    var builtinConstants = "FALSE|NULL|TRUE";
    var builtinFunctions = "ABS|ACOS|ADD_MONTHS|AES_DECRYPT|AES_ENCRYPT|ARRAY|ARRAY_CONTAINS|ASCII|ASIN|ATAN|AVG|BASE64|BIN|BINARY|BROUND|CAST|CBRT|CEIL|CEILING|COALESCE|COLLECT_LIST|COLLECT_SET|CONCAT|CONCAT_WS|CONTEXT_NGRAMS|CONV|CORR|COS|COUNT|COVAR_POP|COVAR_SAMP|CRC32|CREATE_UNION|CUME_DIST|CURRENT_DATABASE|CURRENT_DATE|CURRENT_TIMESTAMP|CURRENT_USER|DATE_ADD|DATE_FORMAT|DATE_SUB|DATEDIFF|DAY|DAYOFMONTH|DECODE|DEGREES|DENSE_RANK|E|ENCODE|EXP|EXPLODE|FACTORIAL|FIND_IN_SET|FIRST_VALUE|FLOOR|FORMAT_NUMBER|FROM_UNIXTIME|FROM_UTC_TIMESTAMP|GET_JSON_OBJECT|GREATEST|HASH|HEX|HISTOGRAM_NUMERIC|HOP_END|HOP_PROCTIME|HOP_ROWTIME|HOP_START|HOUR|IF|IN_FILE|INITCAP|INLINE|INSTR|ISNOTNULL|ISNULL|JAVA_METHOD|JSON_TUPLE|LAG|LAST_DAY|LAST_VALUE|LCASE|LEAD|LEAST|LENGTH|LEVENSHTEIN|LISTAGG|LN|LOCATE|LOG|LOG2|LOG10|LOWER|LPAD|LTRIM|MAP|MAP_KEYS|MAP_VALUES|MAX|MD5|MIN|MINUTE|MONTH|MONTHS_BETWEEN|NAMED_STRUCT|NEGATIVE|NEXT_DAY|NGRAMS|NTILE|NVL|PARSE_URL|PARSE_URL_TUPLE|PERCENT_RANK|PERCENTILE|PERCENTILE_APPROX|PI|PMOD|POSEXPLODE|POSITIVE|POW|POWER|PRINTF|PROCTIME|QUARTER|RADIANS|RAND|RANK|REFLECT|REGEXP_EXTRACT|REGEXP_REPLACE|REPEAT|REVERSE|ROUND|ROW_NUMBER|RPAD|RTRIM|SECOND|SENTENCES|SESSION_END|SESSION_PROCTIME|SESSION_ROWTIME|SESSION_START|SHA|SHA1|SHA2|SHIFTLEFT|SHIFTRIGHT|SHIFTRIGHTUNSIGNED|SIGN|SIN|SIZE|SORT_ARRAY|SOUNDEX|SPACE|SPLIT|SQRT|STACK|STDDEV_POP|STDDEV_SAMP|STR_TO_MAP|STRUCT|SUBSTR|SUBSTRING|SUBSTRING_INDEX|SUM|TAN|TO_DATE|TO_UTC_TIMESTAMP|TRANSLATE|TRIM|TRUNC|TUMBLE_END|TUMBLE_PROCTIME|TUMBLE_ROWTIME|TUMBLE_START|UCASE|UNBASE64|UNHEX|UNIX_TIMESTAMP|UPPER|VAR_POP|VAR_SAMP|VARIANCE|WEEKOFYEAR|XPATH|XPATH_BOOLEAN|XPATH_DOUBLE|XPATH_FLOAT|XPATH_INT|XPATH_LONG|XPATH_NUMBER|XPATH_SHORT|XPATH_STRING|YEAR";
    var dataTypes = "ARRAY|BIGINT|BINARY|BOOLEAN|CHAR|DATE|DECIMAL|DELIMITED|DOUBLE|FLOAT|INT|INTEGER|JSONFILE|MAP|NUMERIC|PRECISION|RCFILE|SEQUENCEFILE|SERDE|SMALLINT|STRING|STRUCT|TEXTFILE|TIME|TIMESTAMP|TINYINT|UNIONTYPE|VARCHAR";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  FlinkHighlightRules.metaData = {
    fileTypes: ["flink", "ql"],
    name: "Flink",
    scopeName: "source.flink"
  };
  oop.inherits(FlinkHighlightRules, TextHighlightRules);
  exports.FlinkHighlightRules = FlinkHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/flink", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/flink_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var FlinkHighlightRules = require("./flink_highlight_rules").FlinkHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = FlinkHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/flink";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-hive.js":
/*!**********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-hive.js ***!
  \**********************************************************/
/***/ (() => {

ace.define("ace/mode/hive_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var HiveHighlightRules = function HiveHighlightRules() {
    var keywords = 'ABORT|ADD|ADMIN|AFTER|ALL|ALTER|ANALYZE|AND|ARCHIVE|AS|ASC|AST|AUTHORIZATION|BETWEEN|BUCKET|BUCKETS|BY|' + 'CACHE|CASCADE|CASE|CBO|CHANGE|CHECK|CLUSTER|CLUSTERED|COLLECTION|COLUMN|COLUMNS|COMMENT|COMPACT|COMPACTIONS|' + 'COMPUTE|CONCATENATE|CONF|CONNECTOR|CONNECTORS|CONSTRAINT|COST|CREATE|CROSS|CUBE|CURRENT|DATA|DATABASE|' + 'DATABASES|DBPROPERTIES|DCPROPERTIES|DEFAULT|DEFERRED|DEFINED|DELETE|DEPENDENCY|DESC|DESCRIBE|DETAIL|DIRECTORY|' + 'DISABLE|DISTINCT|DISTRIBUTE|DISTRIBUTED|DIV|DROP|ELSE|ENABLE|END|ESCAPED|EXCHANGE|EXISTS|EXPLAIN|EXPORT|' + 'EXPRESSION|EXTENDED|EXTERNAL|FIELDS|FILE|FILEFORMAT|FIRST|FOLLOWING|FOR|FOREIGN|FORMAT|FORMATTED|FROM|FULL|' + 'FUNCTION|FUNCTIONS|GRANT|GROUP|GROUPING|HAVING|IDXPROPERTIES|IF|IMPORT|IN|INDEX|INDEXES|INNER|INPATH|' + 'INPUTFORMAT|INSERT|INTO|IS|ITEMS|JAR|JOIN|JOINCOST|KEY|KEYS|LAST|LATERAL|LEFT|LIKE|LIMIT|LINES|LITERAL|LOAD|' + 'LOCAL|LOCATION|LOCK|LOCKS|MACRO|MATCHED|MATERIALIZED|MERGE|METADATA|MSCK|NO_DROP|NONE|NORELY|NOSCAN|NOT|' + 'NOVALIDATE|NULLS|OF|OFFLINE|ON|ONLY|OPERATOR|OPTION|OR|ORDER|OUT|OUTER|OUTPUTFORMAT|OVER|OVERWRITE|OWNER|' + 'PARTITION|PARTITIONED|PARTITIONS|PERCENT|PRECEDING|PRIMARY|PRIVILEGES|PURGE|QUARTER|RANGE|REBUILD|RECOVER|' + 'REFERENCES|REGEXP|RELOAD|RELY|REMOTE|RENAME|REPAIR|REPLACE|REPLICATION|RESTRICT|REVOKE|REWRITE|RIGHT|RLIKE|' + 'ROLE|ROLES|ROLLUP|ROW|ROWS|SCHEMA|SCHEMAS|SELECT|SEMI|SERDEPROPERTIES|SET|SETS|SHOW|SHOW_DATABASE|SKEWED|SORT|' + 'SORTED|SPEC|STATISTICS|STORED|SUMMARY|SYNC|TABLE|TABLES|TABLESAMPLE|TBLPROPERTIES|TEMPORARY|TERMINATED|THEN|' + 'TO|TOUCH|TRANSACTIONAL|TRANSACTIONS|TRUNCATE|TYPE|UNARCHIVE|UNBOUNDED|UNION|UNIQUE|UPDATE|URL|USE|USER|USING|' + 'VALUES|VECTORIZATION|VIEW|VIEWS|WAIT|WHEN|WHERE|WINDOW|WITH';
    var builtinConstants = 'AVRO|DELIMITED|FALSE|ICEBERG|JSONFILE|NULL|ORC|PARQUET|RCFILE|SEQUENCEFILE|SERDE|TEXTFILE|TRUE';
    var builtinFunctions = 'ABS|ACOS|ADD_MONTHS|AES_DECRYPT|AES_ENCRYPT|ARRAY|ARRAY_CONTAINS|ASCII|ASIN|ATAN|AVG|BASE64|BIN|BINARY|' + 'BROUND|CAST|CBRT|CEIL|CEILING|COALESCE|COLLECT_LIST|COLLECT_SET|CONCAT|CONCAT_WS|CONTEXT_NGRAMS|CONV|CORR|' + 'COS|COVAR_POP|COVAR_SAMP|COUNT|CRC32|CREATE_UNION|CUME_DIST|CURRENT_DATABASE|CURRENT_DATE|' + 'CURRENT_TIMESTAMP|CURRENT_USER|DATE_ADD|DATE_FORMAT|DATE_SUB|DATEDIFF|DAY|DAYOFMONTH|DAYOFWEEK|DECODE|' + 'DEGREES|DENSE_RANK|E|ENCODE|EXP|EXPLODE|FACTORIAL|FIND_IN_SET|FIRST_VALUE|FLOOR|FORMAT_NUMBER|FROM_UNIXTIME|' + 'FROM_UTC_TIMESTAMP|GET_JSON_OBJECT|GREATEST|HASH|HEX|HISTOGRAM_NUMERIC|HOUR|IF|IN_FILE|INLINE|INSTR|INITCAP|' + 'ISNOTNULL|ISNULL|JAVA_METHOD|JSON_TUPLE|LAG|LAST_DAY|LAST_VALUE|LEAD|LEAST|LENGTH|LEVENSHTEIN|LCASE|LN|' + 'LOCATE|LOG|LOG10|LOG2|LOWER|LPAD|LTRIM|MAP|MAP_KEYS|MAP_VALUES|MAX|MD5|MIN|MINUTE|MONTH|MONTHS_BETWEEN|' + 'NAMED_STRUCT|NEGATIVE|NEXT_DAY|NGRAMS|NTILE|NVL|PARSE_URL|PARSE_URL_TUPLE|PERCENT_RANK|PERCENTILE|' + 'PERCENTILE_APPROX|PI|PMOD|POSEXPLODE|POSITIVE|POW|POWER|PRINTF|QUARTER|RADIANS|RAND|RANK|REFLECT|' + 'REGEXP_EXTRACT|REGEXP_REPLACE|REPEAT|REVERSE|ROUND|ROW_NUMBER|RPAD|RTRIM|SECOND|SHA|SHA1|SHA2|SHIFTLEFT|' + 'SHIFTRIGHT|SHIFTRIGHTUNSIGNED|SIGN|SIN|SIZE|SORT_ARRAY|SQRT|STACK|STDDEV_POP|STDDEV_SAMP|STRUCT|SENTENCES|' + 'SOUNDEX|SPACE|SPLIT|STR_TO_MAP|SUBSTR|SUBSTRING|SUBSTRING_INDEX|SUM|TAN|TO_DATE|TO_UTC_TIMESTAMP|TRANSLATE|' + 'TRIM|TRUNC|UCASE|UNBASE64|UNHEX|UNIX_TIMESTAMP|UPPER|VAR_POP|VAR_SAMP|VARIANCE|WEEK|WEEKOFYEAR|XPATH|' + 'XPATH_BOOLEAN|XPATH_DOUBLE|XPATH_FLOAT|XPATH_INT|XPATH_LONG|XPATH_NUMBER|XPATH_SHORT|XPATH_STRING|YEAR';
    var dataTypes = 'ARRAY|BIGINT|BINARY|BOOLEAN|CHAR|DATE|DECIMAL|DOUBLE|FLOAT|INT|INTEGER|MAP|PRECISION|SMALLINT|STRING|STRUCT|' + 'TIMESTAMP|TINYINT|UNIONTYPE|VARCHAR';
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  HiveHighlightRules.metaData = {
    fileTypes: ["hql", "q", "ql"],
    name: "Hive",
    scopeName: "source.hive"
  };
  oop.inherits(HiveHighlightRules, TextHighlightRules);
  exports.HiveHighlightRules = HiveHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/hive", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/hive_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var HiveHighlightRules = require("./hive_highlight_rules").HiveHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = HiveHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/hive";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-hplsql.js":
/*!************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-hplsql.js ***!
  \************************************************************/
/***/ (() => {

ace.define("ace/mode/hplsql_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var HplsqlHighlightRules = function HplsqlHighlightRules() {
    var keywords = 'ALLOCATE|ASSOCIATE|BREAK|CALL|CLOSE|CMP|CONDITION|COPY|CREATE|CURSOR|DATABASE|DECLARE|DESCRIBE|DIAGNOSTICS|' + 'DIRECTORY|DROP|EXEC|EXECUTE|EXIT|FETCH|FOR|FROM|FTP|FUNCTION|GET|HANDLER|HIVE|HOST|IF|IMMEDIATE|INCLUDE|' + 'INSERT|INTO|LEAVE|LOCAL|LOCATOR|LOOP|MAP|NULL|OBJECT|OPEN|PACKAGE|PRINT|PROCEDURE|RESIGNAL|RESULT|' + 'RETURN|SELECT|SET|SIGNAL|SUMMARY|TABLE|TEMPORARY|TRUNCATE|UPDATE|USE|VALUES|VOLATILE|WHEN|WHILE|.IF|.QUIT';
    var builtinConstants = 'FALSE|NULL|TRUE';
    var builtinFunctions = 'CAST|CHAR|COALESCE|CONCAT|CURRENT_DATE|CURRENT_TIMESTAMP|CURRENT_USER|DATE|DBMS_OUTPUT|PUT_LINE|DECODE|' + 'FROM_UNIXTIME|INSTR|LEN|LENGTH|LOWER|MAX_PART_DATE|MAX_PART_INT|MAX_PART_STRING|MIN_PART_DATE|MIN_PART_INT|' + 'MIN_PART_STRING|NOW|NVL|NVL2|PART_COUNT|PART_COUNT_BY|PART_LOC|REPLACE|SUBSTR|SUBSTRING|SYSDATE|TIMESTAMP_ISO|' + 'TO_CHAR|TO_TIMESTAMP|TRIM|UNIX_TIMESTAMP|UPPER';
    var dataTypes = 'BIGINT|BINARY_DOUBLE|BINARY_FLOAT|BINARY_INTEGER|BIT|BOOL|BOOLEAN|CHAR|CHARACTER|DATE|DATETIME|DECIMAL|DOUBLE|' + 'FLOAT|INT|INT2|INT8|INTEGER|NCHAR|NUMBER|NUMERIC|NVARCHAR|PLS_INTEGER|PRECISION|REAL|RECORD|SIMPLE_DOUBLE|' + 'SIMPLE_FLOAT|SIMPLE_INTEGER|SMALLINT|SYS_REFCURSOR|TIMESTAMP|TINYINT|VARCHAR|VARCHAR2|UTL_FILE|FILE_TYPE';
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  HplsqlHighlightRules.metaData = {
    fileTypes: ["hplsql"],
    name: "Hplsql",
    scopeName: "source.hplsql"
  };
  oop.inherits(HplsqlHighlightRules, TextHighlightRules);
  exports.HplsqlHighlightRules = HplsqlHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/hplsql", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/hplsql_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var HplsqlHighlightRules = require("./hplsql_highlight_rules").HplsqlHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = HplsqlHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/hplsql";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-impala.js":
/*!************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-impala.js ***!
  \************************************************************/
/***/ (() => {

ace.define("ace/mode/impala_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var ImpalaHighlightRules = function ImpalaHighlightRules() {
    var keywords = "ADD|AGGREGATE|ALL|ALLOCATE|ALTER|ANALYTIC|AND|ANTI|ANY|API_VERSION|ARE|ARRAY_AGG|ARRAY_MAX_CARDINALITY|AS|ASC|ASENSITIVE|ASYMMETRIC|AT|ATOMIC|AUTHORIZATION|BEGIN_FRAME|BEGIN_PARTITION|BETWEEN|BINARY|BLOB|BLOCK_SIZE|BOTH|BY|CACHED|CALLED|CARDINALITY|CASCADE|CASCADED|CASE|CAST|CHANGE|CHARACTER|CLASS|CLOB|CLOSE_FN|COLLATE|COLLECT|COLUMN|COLUMNS|COMMENT|COMMIT|COMPRESSION|COMPUTE|CONDITION|CONNECT|CONSTRAINT|CONTAINS|CONVERT|COPY|CORR|CORRESPONDING|COVAR_POP|COVAR_SAMP|CREATE|CROSS|CUBE|CURRENT|CURRENT_DATE|CURRENT_DEFAULT_TRANSFORM_GROUP|CURRENT_PATH|CURRENT_ROLE|CURRENT_ROW|CURRENT_SCHEMA|CURRENT_TIME|CURRENT_TRANSFORM_GROUP_FOR_TYPE|CURSOR|CYCLE|DATA|DATABASE|DATABASES|DATE|DATETIME|DEALLOCATE|DEC|DECFLOAT|DECLARE|DEFAULT|DEFINE|DELETE|DELIMITED|DEREF|DESC|DESCRIBE|DETERMINISTIC|DISCONNECT|DISTINCT|DIV|DROP|DYNAMIC|EACH|ELEMENT|ELSE|EMPTY|ENCODING|END|END_FRAME|END_PARTITION|EQUALS|ESCAPE|ESCAPED|EVERY|EXCEPT|EXEC|EXECUTE|EXISTS|EXPLAIN|EXTENDED|EXTERNAL|FETCH|FIELDS|FILEFORMAT|FILES|FILTER|FINALIZE_FN|FIRST|FOLLOWING|FOR|FOREIGN|FORMAT|FORMATTED|FRAME_ROW|FREE|FROM|FULL|FUNCTION|FUNCTIONS|FUSION|GET|GLOBAL|GRANT|GROUP|GROUPING|GROUPS|HASH|HAVING|HISTORY|HOLD|IF|IGNORE|ILIKE|IN|INCREMENTAL|INDICATOR|INIT_FN|INITIAL|INNER|INOUT|INPATH|INSENSITIVE|INSERT|INTEGER|INTERMEDIATE|INTERSECT|INTERSECTION|INTERVAL|INTO|INVALIDATE|IREGEXP|IS|JOIN|JSON_ARRAY|JSON_ARRAYAGG|JSON_EXISTS|JSON_OBJECT|JSON_OBJECTAGG|JSON_QUERY|JSON_TABLE|JSON_TABLE_PRIMITIVE|JSON_VALUE|KEY|LARGE|LAST|LATERAL|LEADING|LEFT|LIKE|LIKE_REGEX|LIMIT|LINES|LISTAGG|LOAD|LOCAL|LOCALTIMESTAMP|LOCATION|MATCH|MATCH_NUMBER|MATCH_RECOGNIZE|MATCHES|MERGE|MERGE_FN|METADATA|METHOD|MODIFIES|MULTISET|NATIONAL|NATURAL|NCHAR|NCLOB|NO|NONE|NORMALIZE|NOT|NTH_VALUE|NULLS|NUMERIC|OCCURRENCES_REGEX|OCTET_LENGTH|OF|OFFSET|OMIT|ON|ONE|ONLY|OR|ORDER|OUT|OUTER|OVER|OVERLAPS|OVERLAY|OVERWRITE|PARTITION|PARTITIONED|PARTITIONS|PATTERN|PER|PERCENT|PERCENTILE_CONT|PERCENTILE_DISC|PORTION|POSITION|POSITION_REGEX|PRECEDES|PRECEDING|PREPARE|PREPARE_FN|PRIMARY|PROCEDURE|PRODUCED|PTF|PURGE|RANGE|READS|RECOVER|RECURSIVE|REF|REFERENCES|REFERENCING|REFRESH|REGEXP|REGR_AVGX|REGR_AVGY|REGR_COUNT|REGR_INTERCEPT|REGR_R2REGR_SLOPE|REGR_SXX|REGR_SXY|REGR_SYY|RELEASE|RENAME|REPEATABLE|REPLACE|REPLICATION|RESTRICT|RETURNS|REVOKE|RIGHT|RLIKE|ROLE|ROLES|ROLLBACK|ROLLUP|ROW|ROWS|RUNNING|SAVEPOINT|SCHEMA|SCHEMAS|SCOPE|SCROLL|SEARCH|SEEK|SELECT|SEMI|SENSITIVE|SERDEPROPERTIES|SERIALIZE_FN|SET|SHOW|SIMILAR|SKIP|SOME|SORT|SPECS|PECIFIC|SPECIFICTYPE|SQLEXCEPTION|SQLSTATE|SQLWARNING|STATIC|STATS|STORED|STRAIGHT_JOIN|SUBMULTISET|SUBSET|SUBSTRING_REGEX|SUCCEEDS|SYMBOL|SYMMETRIC|SYSTEM_TIME|SYSTEM_USER|TABLE|TABLES|TABLESAMPLE|TBLPROPERTIES|TERMINATED|THEN|TIMEZONE_HOUR|TIMEZONE_MINUTE|TO|TRAILING|TRANSLATE_REGEX|TRANSLATION|TREAT|TRIGGER|TRIM_ARRAY|TRUNCATE|UESCAPE|UNBOUNDED|UNCACHED|UNION|UNIQUE|UNNEST|UNSET|UPDATE|UPDATE_FN|UPSERT|USE|USING|VALUE_OF|VALUES|VARBINARY|VARYING|VERSIONING|VIEW|WHEN|WHENEVER|WHERE|WIDTH_BUCKET|WINDOW|WITH|WITHIN|WITHOUT";
    var builtinConstants = "AVRO|DAY|DAYS|FALSE|HOUR|HOURS|ICEBERG|KUDU|MINUTE|MINUTES|MICROSECOND|MICROSECONDS|MILLISECOND|MILLISECONDS|MONTH|MONTHS|NANOSECOND|NANOSECONDS|NULL|ORC|PARQUET|PARQUETFILE|RCFILE|SECOND|SECONDS|SEQUENCEFILE|SYSTEM_TIME|SYSTEM_VERSION|TEXTFILE|TRUE|UNKNOWN|WEEK|WEEKS|YEAR|YEARS";
    var builtinFunctions = "ABS|ACOS|ADD_MONTHS|ADDDATE|APPX_MEDIAN|ASCII|ASIN|ATAN|AVG|BIN|BYTES|CAST|CEIL|CEILING|CHAR_LENGTH|CHARACTER_LENGTH|COALESCE|CONCAT|CONCAT_WS|CONV|COS|COUNT|CURRENT_DATABASE|CURRENT_TIMESTAMP|DATE_ADD|DATE_PART|DATE_SUB|DATEDIFF|DAY|DAYNAME|DAYOFMONTH|DAYOFWEEK|DAYOFYEAR|DAYS_ADD|DAYS_SUB|DECODE|DEGREES|DENSE_RANK|E|EXP|EXTRACT|FIND_IN_SET|FIRST_VALUE|FLOOR|FMOD|FNV_HASH|FROM_UNIXTIME|FROM_UTC_TIMESTAMP|GREATEST|GROUP_CONCAT|HEX|HOUR|HOURS_ADD|HOURS_SUB|IF|IFNULL|INITCAP|INSTR|IS_INF|IS_NAN|ISNULL|LAG|LAST_VALUE|LCASE|LEAD|LEAST|LENGTH|LN|LOCATE|LOG|LOG10|LOG2|LOWER|LPAD|LTRIM|MAX|MAX_BIGINT|MAX_INT|MAX_SMALLINT|MAX_TINYINT|MICROSECONDS_ADD|MICROSECONDS_SUB|MILLISECONDS_ADD|MILLISECONDS_SUB|MIN|MIN_BIGINT|MIN_INT|MIN_SMALLINT|MIN_TINYINT|MINUTE|MINUTES_ADD|MINUTES_SUB|MONTH|MONTHS_ADD|MONTHS_SUB|NANOSECONDS_ADD|NANOSECONDS_SUB|NDV|NEGATIVE|NOW|NULLIF|NULLIFZERO|NVL|PARSE_URL|PI|PID|PMOD|POSITIVE|POW|POWER|PRECISION|QUOTIENT|RADIANS|RAND|RANK|REGEXP_EXTRACT|REGEXP_REPLACE|REPEAT|REVERSE|ROUND|ROW_NUMBER|RPAD|RTRIM|SCALE|SECOND|SECONDS_ADD|SECONDS_SUB|SIGN|SIN|SPACE|SQRT|STDDEV|STDDEV_POP|STDDEV_SAMP|STRLEFT|STRRIGHT|SUBDATE|SUBSTR|SUBSTRING|SUM|TAN|TO_DATE|TO_UTC_TIMESTAMP|TRANSLATE|TRIM|TRUNC|UCASE|UNHEX|UNIX_TIMESTAMP|UPPER|USER|VAR_POP|VAR_SAMP|VARIANCE|VARIANCE_POP|VARIANCE_SAMP|VERSION|WEEKOFYEAR|WEEKS_ADD|WEEKS_SUB|YEAR|YEARS_ADD|YEARS_SUB|ZEROIFNULL";
    var dataTypes = "ARRAY|BIGINT|BOOLEAN|CHAR|DECIMAL|DOUBLE|FLOAT|INT|MAP|REAL|SMALLINT|STRING|STRUCT|TIMESTAMP|TINYINT|VARCHAR";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  ImpalaHighlightRules.metaData = {
    fileTypes: ["iql"],
    name: "Impala",
    scopeName: "source.impala"
  };
  oop.inherits(ImpalaHighlightRules, TextHighlightRules);
  exports.ImpalaHighlightRules = ImpalaHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/impala", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/impala_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var ImpalaHighlightRules = require("./impala_highlight_rules").ImpalaHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = ImpalaHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/impala";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-ksql.js":
/*!**********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-ksql.js ***!
  \**********************************************************/
/***/ (() => {

ace.define("ace/mode/ksql_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var KsqlHighlightRules = function KsqlHighlightRules() {
    var keywords = "EMIT|CHANGES|SELECT|FROM|AS|DISTINCT|WHERE|WITHIN|WINDOW|GROUP|BY|HAVING|LIMIT|AT|OR|AND|IN|NOT|EXISTS|BETWEEN|LIKE|IS|INTEGER|DATE|TIME|TIMESTAMP|INTERVAL|YEAR|MONTH|DAY|HOUR|MINUTE|SECOND|MILLISECOND|YEARS|MONTHS|DAYS|HOURS|MINUTES|SECONDS|MILLISECONDS|ZONE|TUMBLING|HOPPING|SIZE|ADVANCE|CASE|WHEN|THEN|ELSE|END|JOIN|FULL|OUTER|INNER|LEFT|RIGHT|ON|PARTITION|STRUCT|WITH|VALUES|CREATE|TABLE|TOPIC|STREAM|STREAMS|INSERT|DELETE|INTO|DESCRIBE|EXTENDED|PRINT|EXPLAIN|ANALYZE|TYPE|TYPES|CAST|SHOW|LIST|TABLES|TOPICS|QUERY|QUERIES|TERMINATE|LOAD|COLUMNS|COLUMN|PARTITIONS|FUNCTIONS|FUNCTION|DROP|TO|RENAME|ARRAY|MAP|SET|RESET|SESSION|SAMPLE|EXPORT|CATALOG|PROPERTIES|BEGINNING|UNSET|RUN|SCRIPT|DECIMAL|KEY|CONNECTOR|CONNECTORS|SINK|SOURCE|IF";
    var builtinConstants = "FALSE|NULL|TRUE";
    var builtinFunctions = "ABS|ARRAYCONTAINS|CEIL|CONCAT|DATETOSTRING|ELT|EXTRACTJSONFIELD|FIELD|FLOOR|GEO_DISTANCE|IFNULL|LCASE|LEN|MASK|MASK_KEEP_LEFT|MASK_KEEP_RIGHT|MASK_LEFT|MASK_RIGHT|RANDOM|ROUND|SPLIT|STRINGTODATE|STRINGTOTIMESTAMP|SUBSTRING|TIMESTAMPTOSTRING|TRIM|UCASE|URL_DECODE_PARAM|URL_ENCODE_PARAM|URL_EXTRACT_FRAGMENT|URL_EXTRACT_HOST|URL_EXTRACT_PARAMETER|URL_EXTRACT_PATH|URL_EXTRACT_PORT|URL_EXTRACT_PROTOCOL|URL_EXTRACT_QUERY|COLLECT_LIST|COLLECT_SET|COUNT|HISTOGRAM|MAX|MIN|SUM|TOPK|TOPKDISTINCT|WindowStart|WindowEnd";
    var dataTypes = "BOOLEAN|INTEGER|INT|BIGINT|DOUBLE|VARCHAR|STRING|ARRAY|MAP|STRUCT";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  KsqlHighlightRules.metaData = {
    fileTypes: ["ksql"],
    name: "ksql",
    scopeName: "source.ksql"
  };
  oop.inherits(KsqlHighlightRules, TextHighlightRules);
  exports.KsqlHighlightRules = KsqlHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/ksql", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/ksql_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var KsqlHighlightRules = require("./ksql_highlight_rules").KsqlHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = KsqlHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/ksql";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-markdown.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-markdown.js ***!
  \**************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
ace.define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var DocCommentHighlightRules = function DocCommentHighlightRules() {
    this.$rules = {
      "start": [{
        token: "comment.doc.tag",
        regex: "@[\\w\\d_]+" // TODO: fix email addresses
      }, DocCommentHighlightRules.getTagRule(), {
        defaultToken: "comment.doc",
        caseInsensitive: true
      }]
    };
  };
  oop.inherits(DocCommentHighlightRules, TextHighlightRules);
  DocCommentHighlightRules.getTagRule = function (start) {
    return {
      token: "comment.doc.tag.storage.type",
      regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
  };
  DocCommentHighlightRules.getStartRule = function (start) {
    return {
      token: "comment.doc",
      // doc comment
      regex: "\\/\\*(?=\\*)",
      next: start
    };
  };
  DocCommentHighlightRules.getEndRule = function (start) {
    return {
      token: "comment.doc",
      // closing comment
      regex: "\\*\\/",
      next: start
    };
  };
  exports.DocCommentHighlightRules = DocCommentHighlightRules;
});
ace.define("ace/mode/javascript_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var DocCommentHighlightRules = require("./doc_comment_highlight_rules").DocCommentHighlightRules;
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var identifierRe = "[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*\\b";
  var JavaScriptHighlightRules = function JavaScriptHighlightRules(options) {
    var keywordMapper = this.createKeywordMapper({
      "variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|" +
      // Constructors
      "Namespace|QName|XML|XMLList|" +
      // E4X
      "ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|" + "Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|" + "Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|" +
      // Errors
      "SyntaxError|TypeError|URIError|" + "decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|" +
      // Non-constructor functions
      "isNaN|parseFloat|parseInt|" + "JSON|Math|" +
      // Other
      "this|arguments|prototype|window|document",
      // Pseudo
      "keyword": "const|yield|import|get|set|" + "break|case|catch|continue|default|delete|do|else|finally|for|function|" + "if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|" + "__parent__|__count__|escape|unescape|with|__proto__|" + "class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
      "storage.type": "const|let|var|function",
      "constant.language": "null|Infinity|NaN|undefined",
      "support.function": "alert",
      "constant.language.boolean": "true|false"
    }, "identifier");
    var kwBeforeRe = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void";
    var escapedRe = "\\\\(?:x[0-9a-fA-F]{2}|" +
    // hex
    "u[0-9a-fA-F]{4}|" +
    // unicode
    "u{[0-9a-fA-F]{1,6}}|" +
    // es6 unicode
    "[0-2][0-7]{0,2}|" +
    // oct
    "3[0-7][0-7]?|" +
    // oct
    "[4-7][0-7]?|" +
    //oct
    ".)";
    this.$rules = {
      "no_regex": [DocCommentHighlightRules.getStartRule("doc-start"), comments("no_regex"), {
        token: "string",
        regex: "'(?=.)",
        next: "qstring"
      }, {
        token: "string",
        regex: '"(?=.)',
        next: "qqstring"
      }, {
        token: "constant.numeric",
        // hex
        regex: /0(?:[xX][0-9a-fA-F]+|[bB][01]+)\b/
      }, {
        token: "constant.numeric",
        // float
        regex: /[+-]?\d[\d_]*(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/
      }, {
        token: ["storage.type", "punctuation.operator", "support.function", "punctuation.operator", "entity.name.function", "text", "keyword.operator"],
        regex: "(" + identifierRe + ")(\\.)(prototype)(\\.)(" + identifierRe + ")(\\s*)(=)",
        next: "function_arguments"
      }, {
        token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"],
        regex: "(" + identifierRe + ")(\\.)(" + identifierRe + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: ["entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"],
        regex: "(" + identifierRe + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen"],
        regex: "(" + identifierRe + ")(\\.)(" + identifierRe + ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: ["storage.type", "text", "entity.name.function", "text", "paren.lparen"],
        regex: "(function)(\\s+)(" + identifierRe + ")(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: ["entity.name.function", "text", "punctuation.operator", "text", "storage.type", "text", "paren.lparen"],
        regex: "(" + identifierRe + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: ["text", "text", "storage.type", "text", "paren.lparen"],
        regex: "(:)(\\s*)(function)(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: "keyword",
        regex: "(?:" + kwBeforeRe + ")\\b",
        next: "start"
      }, {
        token: ["support.constant"],
        regex: /that\b/
      }, {
        token: ["storage.type", "punctuation.operator", "support.function.firebug"],
        regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
      }, {
        token: keywordMapper,
        regex: identifierRe
      }, {
        token: "punctuation.operator",
        regex: /[.](?![.])/,
        next: "property"
      }, {
        token: "keyword.operator",
        regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?\:|[!$%&*+\-~\/^]=?/,
        next: "start"
      }, {
        token: "punctuation.operator",
        regex: /[?:,;.]/,
        next: "start"
      }, {
        token: "paren.lparen",
        regex: /[\[({]/,
        next: "start"
      }, {
        token: "paren.rparen",
        regex: /[\])}]/
      }, {
        token: "comment",
        regex: /^#!.*$/
      }],
      property: [{
        token: "text",
        regex: "\\s+"
      }, {
        token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen"],
        regex: "(" + identifierRe + ")(\\.)(" + identifierRe + ")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: "punctuation.operator",
        regex: /[.](?![.])/
      }, {
        token: "support.function",
        regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
      }, {
        token: "support.function.dom",
        regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
      }, {
        token: "support.constant",
        regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
      }, {
        token: "identifier",
        regex: identifierRe
      }, {
        regex: "",
        token: "empty",
        next: "no_regex"
      }],
      "start": [DocCommentHighlightRules.getStartRule("doc-start"), comments("start"), {
        token: "string.regexp",
        regex: "\\/",
        next: "regex"
      }, {
        token: "text",
        regex: "\\s+|^$",
        next: "start"
      }, {
        token: "empty",
        regex: "",
        next: "no_regex"
      }],
      "regex": [{
        token: "regexp.keyword.operator",
        regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
      }, {
        token: "string.regexp",
        regex: "/[sxngimy]*",
        next: "no_regex"
      }, {
        token: "invalid",
        regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
      }, {
        token: "constant.language.escape",
        regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
      }, {
        token: "constant.language.delimiter",
        regex: /\|/
      }, {
        token: "constant.language.escape",
        regex: /\[\^?/,
        next: "regex_character_class"
      }, {
        token: "empty",
        regex: "$",
        next: "no_regex"
      }, {
        defaultToken: "string.regexp"
      }],
      "regex_character_class": [{
        token: "regexp.charclass.keyword.operator",
        regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
      }, {
        token: "constant.language.escape",
        regex: "]",
        next: "regex"
      }, {
        token: "constant.language.escape",
        regex: "-"
      }, {
        token: "empty",
        regex: "$",
        next: "no_regex"
      }, {
        defaultToken: "string.regexp.charachterclass"
      }],
      "function_arguments": [{
        token: "variable.parameter",
        regex: identifierRe
      }, {
        token: "punctuation.operator",
        regex: "[, ]+"
      }, {
        token: "punctuation.operator",
        regex: "$"
      }, {
        token: "empty",
        regex: "",
        next: "no_regex"
      }],
      "qqstring": [{
        token: "constant.language.escape",
        regex: escapedRe
      }, {
        token: "string",
        regex: "\\\\$",
        next: "qqstring"
      }, {
        token: "string",
        regex: '"|$',
        next: "no_regex"
      }, {
        defaultToken: "string"
      }],
      "qstring": [{
        token: "constant.language.escape",
        regex: escapedRe
      }, {
        token: "string",
        regex: "\\\\$",
        next: "qstring"
      }, {
        token: "string",
        regex: "'|$",
        next: "no_regex"
      }, {
        defaultToken: "string"
      }]
    };
    if (!options || !options.noES6) {
      this.$rules.no_regex.unshift({
        regex: "[{}]",
        onMatch: function onMatch(val, state, stack) {
          this.next = val == "{" ? this.nextState : "";
          if (val == "{" && stack.length) {
            stack.unshift("start", state);
            return "paren";
          }
          if (val == "}" && stack.length) {
            stack.shift();
            this.next = stack.shift();
            if (this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1) return "paren.quasi.end";
          }
          return val == "{" ? "paren.lparen" : "paren.rparen";
        },
        nextState: "start"
      }, {
        token: "string.quasi.start",
        regex: /`/,
        push: [{
          token: "constant.language.escape",
          regex: escapedRe
        }, {
          token: "paren.quasi.start",
          regex: /\${/,
          push: "start"
        }, {
          token: "string.quasi.end",
          regex: /`/,
          next: "pop"
        }, {
          defaultToken: "string.quasi"
        }]
      });
      if (!options || !options.noJSX) JSX.call(this);
    }
    this.embedRules(DocCommentHighlightRules, "doc-", [DocCommentHighlightRules.getEndRule("no_regex")]);
    this.normalizeRules();
  };
  oop.inherits(JavaScriptHighlightRules, TextHighlightRules);
  function JSX() {
    var tagRegex = identifierRe.replace("\\d", "\\d\\-");
    var jsxTag = {
      onMatch: function onMatch(val, state, stack) {
        var offset = val.charAt(1) == "/" ? 2 : 1;
        if (offset == 1) {
          if (state != this.nextState) stack.unshift(this.next, this.nextState, 0);else stack.unshift(this.next);
          stack[2]++;
        } else if (offset == 2) {
          if (state == this.nextState) {
            stack[1]--;
            if (!stack[1] || stack[1] < 0) {
              stack.shift();
              stack.shift();
            }
          }
        }
        return [{
          type: "meta.tag.punctuation." + (offset == 1 ? "" : "end-") + "tag-open.xml",
          value: val.slice(0, offset)
        }, {
          type: "meta.tag.tag-name.xml",
          value: val.substr(offset)
        }];
      },
      regex: "</?" + tagRegex + "",
      next: "jsxAttributes",
      nextState: "jsx"
    };
    this.$rules.start.unshift(jsxTag);
    var jsxJsRule = {
      regex: "{",
      token: "paren.quasi.start",
      push: "start"
    };
    this.$rules.jsx = [jsxJsRule, jsxTag, {
      include: "reference"
    }, {
      defaultToken: "string"
    }];
    this.$rules.jsxAttributes = [{
      token: "meta.tag.punctuation.tag-close.xml",
      regex: "/?>",
      onMatch: function onMatch(value, currentState, stack) {
        if (currentState == stack[0]) stack.shift();
        if (value.length == 2) {
          if (stack[0] == this.nextState) stack[1]--;
          if (!stack[1] || stack[1] < 0) {
            stack.splice(0, 2);
          }
        }
        this.next = stack[0] || "start";
        return [{
          type: this.token,
          value: value
        }];
      },
      nextState: "jsx"
    }, jsxJsRule, comments("jsxAttributes"), {
      token: "entity.other.attribute-name.xml",
      regex: tagRegex
    }, {
      token: "keyword.operator.attribute-equals.xml",
      regex: "="
    }, {
      token: "text.tag-whitespace.xml",
      regex: "\\s+"
    }, {
      token: "string.attribute-value.xml",
      regex: "'",
      stateName: "jsx_attr_q",
      push: [{
        token: "string.attribute-value.xml",
        regex: "'",
        next: "pop"
      }, jsxJsRule, {
        include: "reference"
      }, {
        defaultToken: "string.attribute-value.xml"
      }]
    }, {
      token: "string.attribute-value.xml",
      regex: '"',
      stateName: "jsx_attr_qq",
      push: [jsxJsRule, {
        token: "string.attribute-value.xml",
        regex: '"',
        next: "pop"
      }, {
        include: "reference"
      }, {
        defaultToken: "string.attribute-value.xml"
      }]
    }];
    this.$rules.reference = [{
      token: "constant.language.escape.reference.xml",
      regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
    }];
  }
  function comments(next) {
    return [{
      token: "comment",
      // multi line comment
      regex: /\/\*/,
      next: [DocCommentHighlightRules.getTagRule(), {
        token: "comment",
        regex: "\\*\\/",
        next: next || "pop"
      }, {
        defaultToken: "comment",
        caseInsensitive: true
      }]
    }, {
      token: "comment",
      regex: "\\/\\/",
      next: [DocCommentHighlightRules.getTagRule(), {
        token: "comment",
        regex: "$|^",
        next: next || "pop"
      }, {
        defaultToken: "comment",
        caseInsensitive: true
      }]
    }];
  }
  exports.JavaScriptHighlightRules = JavaScriptHighlightRules;
});
ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function (require, exports, module) {
  "use strict";

  var Range = require("../range").Range;
  var MatchingBraceOutdent = function MatchingBraceOutdent() {};
  (function () {
    this.checkOutdent = function (line, input) {
      if (!/^\s+$/.test(line)) return false;
      return /^\s*\}/.test(input);
    };
    this.autoOutdent = function (doc, row) {
      var line = doc.getLine(row);
      var match = line.match(/^(\s*\})/);
      if (!match) return 0;
      var column = match[1].length;
      var openBracePos = doc.findMatchingBracket({
        row: row,
        column: column
      });
      if (!openBracePos || openBracePos.row == row) return 0;
      var indent = this.$getIndent(doc.getLine(openBracePos.row));
      doc.replace(new Range(row, 0, row, column - 1), indent);
    };
    this.$getIndent = function (line) {
      return line.match(/^\s*/)[0];
    };
  }).call(MatchingBraceOutdent.prototype);
  exports.MatchingBraceOutdent = MatchingBraceOutdent;
});
ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Behaviour = require("../behaviour").Behaviour;
  var TokenIterator = require("../../token_iterator").TokenIterator;
  var lang = require("../../lib/lang");
  var SAFE_INSERT_IN_TOKENS = ["text", "paren.rparen", "punctuation.operator"];
  var SAFE_INSERT_BEFORE_TOKENS = ["text", "paren.rparen", "punctuation.operator", "comment"];
  var context;
  var contextCache = {};
  var initContext = function initContext(editor) {
    var id = -1;
    if (editor.multiSelect) {
      id = editor.selection.index;
      if (contextCache.rangeCount != editor.multiSelect.rangeCount) contextCache = {
        rangeCount: editor.multiSelect.rangeCount
      };
    }
    if (contextCache[id]) return context = contextCache[id];
    context = contextCache[id] = {
      autoInsertedBrackets: 0,
      autoInsertedRow: -1,
      autoInsertedLineEnd: "",
      maybeInsertedBrackets: 0,
      maybeInsertedRow: -1,
      maybeInsertedLineStart: "",
      maybeInsertedLineEnd: ""
    };
  };
  var getWrapped = function getWrapped(selection, selected, opening, closing) {
    var rowDiff = selection.end.row - selection.start.row;
    return {
      text: opening + selected + closing,
      selection: [0, selection.start.column + 1, rowDiff, selection.end.column + (rowDiff ? 0 : 1)]
    };
  };
  var CstyleBehaviour = function CstyleBehaviour() {
    this.add("braces", "insertion", function (state, action, editor, session, text) {
      var cursor = editor.getCursorPosition();
      var line = session.doc.getLine(cursor.row);
      if (text == '{') {
        initContext(editor);
        var selection = editor.getSelectionRange();
        var selected = session.doc.getTextRange(selection);
        if (selected !== "" && selected !== "{" && editor.getWrapBehavioursEnabled()) {
          return getWrapped(selection, selected, '{', '}');
        } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
          if (/[\]\}\)]/.test(line[cursor.column]) || editor.inMultiSelectMode) {
            CstyleBehaviour.recordAutoInsert(editor, session, "}");
            return {
              text: '{}',
              selection: [1, 1]
            };
          } else {
            CstyleBehaviour.recordMaybeInsert(editor, session, "{");
            return {
              text: '{',
              selection: [1, 1]
            };
          }
        }
      } else if (text == '}') {
        initContext(editor);
        var rightChar = line.substring(cursor.column, cursor.column + 1);
        if (rightChar == '}') {
          var matching = session.$findOpeningBracket('}', {
            column: cursor.column + 1,
            row: cursor.row
          });
          if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
            CstyleBehaviour.popAutoInsertedClosing();
            return {
              text: '',
              selection: [1, 1]
            };
          }
        }
      } else if (text == "\n" || text == "\r\n") {
        initContext(editor);
        var closing = "";
        if (CstyleBehaviour.isMaybeInsertedClosing(cursor, line)) {
          closing = lang.stringRepeat("}", context.maybeInsertedBrackets);
          CstyleBehaviour.clearMaybeInsertedClosing();
        }
        var rightChar = line.substring(cursor.column, cursor.column + 1);
        if (rightChar === '}') {
          var openBracePos = session.findMatchingBracket({
            row: cursor.row,
            column: cursor.column + 1
          }, '}');
          if (!openBracePos) return null;
          var next_indent = this.$getIndent(session.getLine(openBracePos.row));
        } else if (closing) {
          var next_indent = this.$getIndent(line);
        } else {
          CstyleBehaviour.clearMaybeInsertedClosing();
          return;
        }
        var indent = next_indent + session.getTabString();
        return {
          text: '\n' + indent + '\n' + next_indent + closing,
          selection: [1, indent.length, 1, indent.length]
        };
      } else {
        CstyleBehaviour.clearMaybeInsertedClosing();
      }
    });
    this.add("braces", "deletion", function (state, action, editor, session, range) {
      var selected = session.doc.getTextRange(range);
      if (!range.isMultiLine() && selected == '{') {
        initContext(editor);
        var line = session.doc.getLine(range.start.row);
        var rightChar = line.substring(range.end.column, range.end.column + 1);
        if (rightChar == '}') {
          range.end.column++;
          return range;
        } else {
          context.maybeInsertedBrackets--;
        }
      }
    });
    this.add("parens", "insertion", function (state, action, editor, session, text) {
      if (text == '(') {
        initContext(editor);
        var selection = editor.getSelectionRange();
        var selected = session.doc.getTextRange(selection);
        if (selected !== "" && editor.getWrapBehavioursEnabled()) {
          return getWrapped(selection, selected, '(', ')');
        } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
          CstyleBehaviour.recordAutoInsert(editor, session, ")");
          return {
            text: '()',
            selection: [1, 1]
          };
        }
      } else if (text == ')') {
        initContext(editor);
        var cursor = editor.getCursorPosition();
        var line = session.doc.getLine(cursor.row);
        var rightChar = line.substring(cursor.column, cursor.column + 1);
        if (rightChar == ')') {
          var matching = session.$findOpeningBracket(')', {
            column: cursor.column + 1,
            row: cursor.row
          });
          if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
            CstyleBehaviour.popAutoInsertedClosing();
            return {
              text: '',
              selection: [1, 1]
            };
          }
        }
      }
    });
    this.add("parens", "deletion", function (state, action, editor, session, range) {
      var selected = session.doc.getTextRange(range);
      if (!range.isMultiLine() && selected == '(') {
        initContext(editor);
        var line = session.doc.getLine(range.start.row);
        var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
        if (rightChar == ')') {
          range.end.column++;
          return range;
        }
      }
    });
    this.add("brackets", "insertion", function (state, action, editor, session, text) {
      if (text == '[') {
        initContext(editor);
        var selection = editor.getSelectionRange();
        var selected = session.doc.getTextRange(selection);
        if (selected !== "" && editor.getWrapBehavioursEnabled()) {
          return getWrapped(selection, selected, '[', ']');
        } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
          CstyleBehaviour.recordAutoInsert(editor, session, "]");
          return {
            text: '[]',
            selection: [1, 1]
          };
        }
      } else if (text == ']') {
        initContext(editor);
        var cursor = editor.getCursorPosition();
        var line = session.doc.getLine(cursor.row);
        var rightChar = line.substring(cursor.column, cursor.column + 1);
        if (rightChar == ']') {
          var matching = session.$findOpeningBracket(']', {
            column: cursor.column + 1,
            row: cursor.row
          });
          if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
            CstyleBehaviour.popAutoInsertedClosing();
            return {
              text: '',
              selection: [1, 1]
            };
          }
        }
      }
    });
    this.add("brackets", "deletion", function (state, action, editor, session, range) {
      var selected = session.doc.getTextRange(range);
      if (!range.isMultiLine() && selected == '[') {
        initContext(editor);
        var line = session.doc.getLine(range.start.row);
        var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
        if (rightChar == ']') {
          range.end.column++;
          return range;
        }
      }
    });
    this.add("string_dquotes", "insertion", function (state, action, editor, session, text) {
      if (text == '"' || text == "'") {
        initContext(editor);
        var quote = text;
        var selection = editor.getSelectionRange();
        var selected = session.doc.getTextRange(selection);
        if (selected !== "" && selected !== "'" && selected != '"' && editor.getWrapBehavioursEnabled()) {
          return getWrapped(selection, selected, quote, quote);
        } else if (!selected) {
          var cursor = editor.getCursorPosition();
          var line = session.doc.getLine(cursor.row);
          var leftChar = line.substring(cursor.column - 1, cursor.column);
          var rightChar = line.substring(cursor.column, cursor.column + 1);
          var token = session.getTokenAt(cursor.row, cursor.column);
          var rightToken = session.getTokenAt(cursor.row, cursor.column + 1);
          if (leftChar == "\\" && token && /escape/.test(token.type)) return null;
          var stringBefore = token && /string|escape/.test(token.type);
          var stringAfter = !rightToken || /string|escape/.test(rightToken.type);
          var pair;
          if (rightChar == quote) {
            pair = stringBefore !== stringAfter;
          } else {
            if (stringBefore && !stringAfter) return null; // wrap string with different quote
            if (stringBefore && stringAfter) return null; // do not pair quotes inside strings
            var wordRe = session.$mode.tokenRe;
            wordRe.lastIndex = 0;
            var isWordBefore = wordRe.test(leftChar);
            wordRe.lastIndex = 0;
            var isWordAfter = wordRe.test(leftChar);
            if (isWordBefore || isWordAfter) return null; // before or after alphanumeric
            if (rightChar && !/[\s;,.})\]\\]/.test(rightChar)) return null; // there is rightChar and it isn't closing
            pair = true;
          }
          return {
            text: pair ? quote + quote : "",
            selection: [1, 1]
          };
        }
      }
    });
    this.add("string_dquotes", "deletion", function (state, action, editor, session, range) {
      var selected = session.doc.getTextRange(range);
      if (!range.isMultiLine() && (selected == '"' || selected == "'")) {
        initContext(editor);
        var line = session.doc.getLine(range.start.row);
        var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
        if (rightChar == selected) {
          range.end.column++;
          return range;
        }
      }
    });
  };
  CstyleBehaviour.isSaneInsertion = function (editor, session) {
    var cursor = editor.getCursorPosition();
    var iterator = new TokenIterator(session, cursor.row, cursor.column);
    if (!this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS)) {
      var iterator2 = new TokenIterator(session, cursor.row, cursor.column + 1);
      if (!this.$matchTokenType(iterator2.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS)) return false;
    }
    iterator.stepForward();
    return iterator.getCurrentTokenRow() !== cursor.row || this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_BEFORE_TOKENS);
  };
  CstyleBehaviour.$matchTokenType = function (token, types) {
    return types.indexOf(token.type || token) > -1;
  };
  CstyleBehaviour.recordAutoInsert = function (editor, session, bracket) {
    var cursor = editor.getCursorPosition();
    var line = session.doc.getLine(cursor.row);
    if (!this.isAutoInsertedClosing(cursor, line, context.autoInsertedLineEnd[0])) context.autoInsertedBrackets = 0;
    context.autoInsertedRow = cursor.row;
    context.autoInsertedLineEnd = bracket + line.substr(cursor.column);
    context.autoInsertedBrackets++;
  };
  CstyleBehaviour.recordMaybeInsert = function (editor, session, bracket) {
    var cursor = editor.getCursorPosition();
    var line = session.doc.getLine(cursor.row);
    if (!this.isMaybeInsertedClosing(cursor, line)) context.maybeInsertedBrackets = 0;
    context.maybeInsertedRow = cursor.row;
    context.maybeInsertedLineStart = line.substr(0, cursor.column) + bracket;
    context.maybeInsertedLineEnd = line.substr(cursor.column);
    context.maybeInsertedBrackets++;
  };
  CstyleBehaviour.isAutoInsertedClosing = function (cursor, line, bracket) {
    return context.autoInsertedBrackets > 0 && cursor.row === context.autoInsertedRow && bracket === context.autoInsertedLineEnd[0] && line.substr(cursor.column) === context.autoInsertedLineEnd;
  };
  CstyleBehaviour.isMaybeInsertedClosing = function (cursor, line) {
    return context.maybeInsertedBrackets > 0 && cursor.row === context.maybeInsertedRow && line.substr(cursor.column) === context.maybeInsertedLineEnd && line.substr(0, cursor.column) == context.maybeInsertedLineStart;
  };
  CstyleBehaviour.popAutoInsertedClosing = function () {
    context.autoInsertedLineEnd = context.autoInsertedLineEnd.substr(1);
    context.autoInsertedBrackets--;
  };
  CstyleBehaviour.clearMaybeInsertedClosing = function () {
    if (context) {
      context.maybeInsertedBrackets = 0;
      context.maybeInsertedRow = -1;
    }
  };
  oop.inherits(CstyleBehaviour, Behaviour);
  exports.CstyleBehaviour = CstyleBehaviour;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/javascript", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/javascript_highlight_rules", "ace/mode/matching_brace_outdent", "ace/range", "ace/worker/worker_client", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var JavaScriptHighlightRules = require("./javascript_highlight_rules").JavaScriptHighlightRules;
  var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
  var Range = require("../range").Range;
  var WorkerClient = require("../worker/worker_client").WorkerClient;
  var CstyleBehaviour = require("./behaviour/cstyle").CstyleBehaviour;
  var CStyleFoldMode = require("./folding/cstyle").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = JavaScriptHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CstyleBehaviour();
    this.foldingRules = new CStyleFoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "//";
    this.blockComment = {
      start: "/*",
      end: "*/"
    };
    this.getNextLineIndent = function (state, line, tab) {
      var indent = this.$getIndent(line);
      var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
      var tokens = tokenizedLine.tokens;
      var endState = tokenizedLine.state;
      if (tokens.length && tokens[tokens.length - 1].type == "comment") {
        return indent;
      }
      if (state == "start" || state == "no_regex") {
        var match = line.match(/^.*(?:\bcase\b.*\:|[\{\(\[])\s*$/);
        if (match) {
          indent += tab;
        }
      } else if (state == "doc-start") {
        if (endState == "start" || endState == "no_regex") {
          return "";
        }
        var match = line.match(/^\s*(\/?)\*/);
        if (match) {
          if (match[1]) {
            indent += " ";
          }
          indent += "* ";
        }
      }
      return indent;
    };
    this.checkOutdent = function (state, line, input) {
      return this.$outdent.checkOutdent(line, input);
    };
    this.autoOutdent = function (state, doc, row) {
      this.$outdent.autoOutdent(doc, row);
    };
    this.createWorker = function (session) {
      var worker = new WorkerClient(["ace"], "ace/mode/javascript_worker", "JavaScriptWorker");
      worker.attachToDocument(session.getDocument());
      worker.on("annotate", function (results) {
        session.setAnnotations(results.data);
      });
      worker.on("terminate", function () {
        session.clearAnnotations();
      });
      return worker;
    };
    this.$id = "ace/mode/javascript";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});
ace.define("ace/mode/xml_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var XmlHighlightRules = function XmlHighlightRules(normalize) {
    var tagRegex = "[_:a-zA-Z\xC0-\uFFFF][-_:.a-zA-Z0-9\xC0-\uFFFF]*";
    this.$rules = {
      start: [{
        token: "string.cdata.xml",
        regex: "<\\!\\[CDATA\\[",
        next: "cdata"
      }, {
        token: ["punctuation.xml-decl.xml", "keyword.xml-decl.xml"],
        regex: "(<\\?)(xml)(?=[\\s])",
        next: "xml_decl",
        caseInsensitive: true
      }, {
        token: ["punctuation.instruction.xml", "keyword.instruction.xml"],
        regex: "(<\\?)(" + tagRegex + ")",
        next: "processing_instruction"
      }, {
        token: "comment.xml",
        regex: "<\\!--",
        next: "comment"
      }, {
        token: ["xml-pe.doctype.xml", "xml-pe.doctype.xml"],
        regex: "(<\\!)(DOCTYPE)(?=[\\s])",
        next: "doctype",
        caseInsensitive: true
      }, {
        include: "tag"
      }, {
        token: "text.end-tag-open.xml",
        regex: "</"
      }, {
        token: "text.tag-open.xml",
        regex: "<"
      }, {
        include: "reference"
      }, {
        defaultToken: "text.xml"
      }],
      xml_decl: [{
        token: "entity.other.attribute-name.decl-attribute-name.xml",
        regex: "(?:" + tagRegex + ":)?" + tagRegex + ""
      }, {
        token: "keyword.operator.decl-attribute-equals.xml",
        regex: "="
      }, {
        include: "whitespace"
      }, {
        include: "string"
      }, {
        token: "punctuation.xml-decl.xml",
        regex: "\\?>",
        next: "start"
      }],
      processing_instruction: [{
        token: "punctuation.instruction.xml",
        regex: "\\?>",
        next: "start"
      }, {
        defaultToken: "instruction.xml"
      }],
      doctype: [{
        include: "whitespace"
      }, {
        include: "string"
      }, {
        token: "xml-pe.doctype.xml",
        regex: ">",
        next: "start"
      }, {
        token: "xml-pe.xml",
        regex: "[-_a-zA-Z0-9:]+"
      }, {
        token: "punctuation.int-subset",
        regex: "\\[",
        push: "int_subset"
      }],
      int_subset: [{
        token: "text.xml",
        regex: "\\s+"
      }, {
        token: "punctuation.int-subset.xml",
        regex: "]",
        next: "pop"
      }, {
        token: ["punctuation.markup-decl.xml", "keyword.markup-decl.xml"],
        regex: "(<\\!)(" + tagRegex + ")",
        push: [{
          token: "text",
          regex: "\\s+"
        }, {
          token: "punctuation.markup-decl.xml",
          regex: ">",
          next: "pop"
        }, {
          include: "string"
        }]
      }],
      cdata: [{
        token: "string.cdata.xml",
        regex: "\\]\\]>",
        next: "start"
      }, {
        token: "text.xml",
        regex: "\\s+"
      }, {
        token: "text.xml",
        regex: "(?:[^\\]]|\\](?!\\]>))+"
      }],
      comment: [{
        token: "comment.xml",
        regex: "-->",
        next: "start"
      }, {
        defaultToken: "comment.xml"
      }],
      reference: [{
        token: "constant.language.escape.reference.xml",
        regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
      }],
      attr_reference: [{
        token: "constant.language.escape.reference.attribute-value.xml",
        regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
      }],
      tag: [{
        token: ["meta.tag.punctuation.tag-open.xml", "meta.tag.punctuation.end-tag-open.xml", "meta.tag.tag-name.xml"],
        regex: "(?:(<)|(</))((?:" + tagRegex + ":)?" + tagRegex + ")",
        next: [{
          include: "attributes"
        }, {
          token: "meta.tag.punctuation.tag-close.xml",
          regex: "/?>",
          next: "start"
        }]
      }],
      tag_whitespace: [{
        token: "text.tag-whitespace.xml",
        regex: "\\s+"
      }],
      whitespace: [{
        token: "text.whitespace.xml",
        regex: "\\s+"
      }],
      string: [{
        token: "string.xml",
        regex: "'",
        push: [{
          token: "string.xml",
          regex: "'",
          next: "pop"
        }, {
          defaultToken: "string.xml"
        }]
      }, {
        token: "string.xml",
        regex: '"',
        push: [{
          token: "string.xml",
          regex: '"',
          next: "pop"
        }, {
          defaultToken: "string.xml"
        }]
      }],
      attributes: [{
        token: "entity.other.attribute-name.xml",
        regex: "(?:" + tagRegex + ":)?" + tagRegex + ""
      }, {
        token: "keyword.operator.attribute-equals.xml",
        regex: "="
      }, {
        include: "tag_whitespace"
      }, {
        include: "attribute_value"
      }],
      attribute_value: [{
        token: "string.attribute-value.xml",
        regex: "'",
        push: [{
          token: "string.attribute-value.xml",
          regex: "'",
          next: "pop"
        }, {
          include: "attr_reference"
        }, {
          defaultToken: "string.attribute-value.xml"
        }]
      }, {
        token: "string.attribute-value.xml",
        regex: '"',
        push: [{
          token: "string.attribute-value.xml",
          regex: '"',
          next: "pop"
        }, {
          include: "attr_reference"
        }, {
          defaultToken: "string.attribute-value.xml"
        }]
      }]
    };
    if (this.constructor === XmlHighlightRules) this.normalizeRules();
  };
  (function () {
    this.embedTagRules = function (HighlightRules, prefix, tag) {
      this.$rules.tag.unshift({
        token: ["meta.tag.punctuation.tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
        regex: "(<)(" + tag + "(?=\\s|>|$))",
        next: [{
          include: "attributes"
        }, {
          token: "meta.tag.punctuation.tag-close.xml",
          regex: "/?>",
          next: prefix + "start"
        }]
      });
      this.$rules[tag + "-end"] = [{
        include: "attributes"
      }, {
        token: "meta.tag.punctuation.tag-close.xml",
        regex: "/?>",
        next: "start",
        onMatch: function onMatch(value, currentState, stack) {
          stack.splice(0);
          return this.token;
        }
      }];
      this.embedRules(HighlightRules, prefix, [{
        token: ["meta.tag.punctuation.end-tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
        regex: "(</)(" + tag + "(?=\\s|>|$))",
        next: tag + "-end"
      }, {
        token: "string.cdata.xml",
        regex: "<\\!\\[CDATA\\["
      }, {
        token: "string.cdata.xml",
        regex: "\\]\\]>"
      }]);
    };
  }).call(TextHighlightRules.prototype);
  oop.inherits(XmlHighlightRules, TextHighlightRules);
  exports.XmlHighlightRules = XmlHighlightRules;
});
ace.define("ace/mode/behaviour/xml", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Behaviour = require("../behaviour").Behaviour;
  var TokenIterator = require("../../token_iterator").TokenIterator;
  var lang = require("../../lib/lang");
  function is(token, type) {
    return token.type.lastIndexOf(type + ".xml") > -1;
  }
  var XmlBehaviour = function XmlBehaviour() {
    this.add("string_dquotes", "insertion", function (state, action, editor, session, text) {
      if (text == '"' || text == "'") {
        var quote = text;
        var selected = session.doc.getTextRange(editor.getSelectionRange());
        if (selected !== "" && selected !== "'" && selected != '"' && editor.getWrapBehavioursEnabled()) {
          return {
            text: quote + selected + quote,
            selection: false
          };
        }
        var cursor = editor.getCursorPosition();
        var line = session.doc.getLine(cursor.row);
        var rightChar = line.substring(cursor.column, cursor.column + 1);
        var iterator = new TokenIterator(session, cursor.row, cursor.column);
        var token = iterator.getCurrentToken();
        if (rightChar == quote && (is(token, "attribute-value") || is(token, "string"))) {
          return {
            text: "",
            selection: [1, 1]
          };
        }
        if (!token) token = iterator.stepBackward();
        if (!token) return;
        while (is(token, "tag-whitespace") || is(token, "whitespace")) {
          token = iterator.stepBackward();
        }
        var rightSpace = !rightChar || rightChar.match(/\s/);
        if (is(token, "attribute-equals") && (rightSpace || rightChar == '>') || is(token, "decl-attribute-equals") && (rightSpace || rightChar == '?')) {
          return {
            text: quote + quote,
            selection: [1, 1]
          };
        }
      }
    });
    this.add("string_dquotes", "deletion", function (state, action, editor, session, range) {
      var selected = session.doc.getTextRange(range);
      if (!range.isMultiLine() && (selected == '"' || selected == "'")) {
        var line = session.doc.getLine(range.start.row);
        var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
        if (rightChar == selected) {
          range.end.column++;
          return range;
        }
      }
    });
    this.add("autoclosing", "insertion", function (state, action, editor, session, text) {
      if (text == '>') {
        var position = editor.getCursorPosition();
        var iterator = new TokenIterator(session, position.row, position.column);
        var token = iterator.getCurrentToken() || iterator.stepBackward();
        if (!token || !(is(token, "tag-name") || is(token, "tag-whitespace") || is(token, "attribute-name") || is(token, "attribute-equals") || is(token, "attribute-value"))) return;
        if (is(token, "reference.attribute-value")) return;
        if (is(token, "attribute-value")) {
          var firstChar = token.value.charAt(0);
          if (firstChar == '"' || firstChar == "'") {
            var lastChar = token.value.charAt(token.value.length - 1);
            var tokenEnd = iterator.getCurrentTokenColumn() + token.value.length;
            if (tokenEnd > position.column || tokenEnd == position.column && firstChar != lastChar) return;
          }
        }
        while (!is(token, "tag-name")) {
          token = iterator.stepBackward();
        }
        var tokenRow = iterator.getCurrentTokenRow();
        var tokenColumn = iterator.getCurrentTokenColumn();
        if (is(iterator.stepBackward(), "end-tag-open")) return;
        var element = token.value;
        if (tokenRow == position.row) element = element.substring(0, position.column - tokenColumn);
        if (this.voidElements.hasOwnProperty(element.toLowerCase())) return;
        return {
          text: ">" + "</" + element + ">",
          selection: [1, 1]
        };
      }
    });
    this.add("autoindent", "insertion", function (state, action, editor, session, text) {
      if (text == "\n") {
        var cursor = editor.getCursorPosition();
        var line = session.getLine(cursor.row);
        var iterator = new TokenIterator(session, cursor.row, cursor.column);
        var token = iterator.getCurrentToken();
        if (token && token.type.indexOf("tag-close") !== -1) {
          if (token.value == "/>") return;
          while (token && token.type.indexOf("tag-name") === -1) {
            token = iterator.stepBackward();
          }
          if (!token) {
            return;
          }
          var tag = token.value;
          var row = iterator.getCurrentTokenRow();
          token = iterator.stepBackward();
          if (!token || token.type.indexOf("end-tag") !== -1) {
            return;
          }
          if (this.voidElements && !this.voidElements[tag]) {
            var nextToken = session.getTokenAt(cursor.row, cursor.column + 1);
            var line = session.getLine(row);
            var nextIndent = this.$getIndent(line);
            var indent = nextIndent + session.getTabString();
            if (nextToken && nextToken.value === "</") {
              return {
                text: "\n" + indent + "\n" + nextIndent,
                selection: [1, indent.length, 1, indent.length]
              };
            } else {
              return {
                text: "\n" + indent
              };
            }
          }
        }
      }
    });
  };
  oop.inherits(XmlBehaviour, Behaviour);
  exports.XmlBehaviour = XmlBehaviour;
});
ace.define("ace/mode/folding/xml", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/range", "ace/mode/folding/fold_mode", "ace/token_iterator"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var lang = require("../../lib/lang");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var TokenIterator = require("../../token_iterator").TokenIterator;
  var FoldMode = exports.FoldMode = function (voidElements, optionalEndTags) {
    BaseFoldMode.call(this);
    this.voidElements = voidElements || {};
    this.optionalEndTags = oop.mixin({}, this.voidElements);
    if (optionalEndTags) oop.mixin(this.optionalEndTags, optionalEndTags);
  };
  oop.inherits(FoldMode, BaseFoldMode);
  var Tag = function Tag() {
    this.tagName = "";
    this.closing = false;
    this.selfClosing = false;
    this.start = {
      row: 0,
      column: 0
    };
    this.end = {
      row: 0,
      column: 0
    };
  };
  function is(token, type) {
    return token.type.lastIndexOf(type + ".xml") > -1;
  }
  (function () {
    this.getFoldWidget = function (session, foldStyle, row) {
      var tag = this._getFirstTagInLine(session, row);
      if (!tag) return "";
      if (tag.closing || !tag.tagName && tag.selfClosing) return foldStyle == "markbeginend" ? "end" : "";
      if (!tag.tagName || tag.selfClosing || this.voidElements.hasOwnProperty(tag.tagName.toLowerCase())) return "";
      if (this._findEndTagInLine(session, row, tag.tagName, tag.end.column)) return "";
      return "start";
    };
    this._getFirstTagInLine = function (session, row) {
      var tokens = session.getTokens(row);
      var tag = new Tag();
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (is(token, "tag-open")) {
          tag.end.column = tag.start.column + token.value.length;
          tag.closing = is(token, "end-tag-open");
          token = tokens[++i];
          if (!token) return null;
          tag.tagName = token.value;
          tag.end.column += token.value.length;
          for (i++; i < tokens.length; i++) {
            token = tokens[i];
            tag.end.column += token.value.length;
            if (is(token, "tag-close")) {
              tag.selfClosing = token.value == '/>';
              break;
            }
          }
          return tag;
        } else if (is(token, "tag-close")) {
          tag.selfClosing = token.value == '/>';
          return tag;
        }
        tag.start.column += token.value.length;
      }
      return null;
    };
    this._findEndTagInLine = function (session, row, tagName, startColumn) {
      var tokens = session.getTokens(row);
      var column = 0;
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        column += token.value.length;
        if (column < startColumn) continue;
        if (is(token, "end-tag-open")) {
          token = tokens[i + 1];
          if (token && token.value == tagName) return true;
        }
      }
      return false;
    };
    this._readTagForward = function (iterator) {
      var token = iterator.getCurrentToken();
      if (!token) return null;
      var tag = new Tag();
      do {
        if (is(token, "tag-open")) {
          tag.closing = is(token, "end-tag-open");
          tag.start.row = iterator.getCurrentTokenRow();
          tag.start.column = iterator.getCurrentTokenColumn();
        } else if (is(token, "tag-name")) {
          tag.tagName = token.value;
        } else if (is(token, "tag-close")) {
          tag.selfClosing = token.value == "/>";
          tag.end.row = iterator.getCurrentTokenRow();
          tag.end.column = iterator.getCurrentTokenColumn() + token.value.length;
          iterator.stepForward();
          return tag;
        }
      } while (token = iterator.stepForward());
      return null;
    };
    this._readTagBackward = function (iterator) {
      var token = iterator.getCurrentToken();
      if (!token) return null;
      var tag = new Tag();
      do {
        if (is(token, "tag-open")) {
          tag.closing = is(token, "end-tag-open");
          tag.start.row = iterator.getCurrentTokenRow();
          tag.start.column = iterator.getCurrentTokenColumn();
          iterator.stepBackward();
          return tag;
        } else if (is(token, "tag-name")) {
          tag.tagName = token.value;
        } else if (is(token, "tag-close")) {
          tag.selfClosing = token.value == "/>";
          tag.end.row = iterator.getCurrentTokenRow();
          tag.end.column = iterator.getCurrentTokenColumn() + token.value.length;
        }
      } while (token = iterator.stepBackward());
      return null;
    };
    this._pop = function (stack, tag) {
      while (stack.length) {
        var top = stack[stack.length - 1];
        if (!tag || top.tagName == tag.tagName) {
          return stack.pop();
        } else if (this.optionalEndTags.hasOwnProperty(top.tagName)) {
          stack.pop();
          continue;
        } else {
          return null;
        }
      }
    };
    this.getFoldWidgetRange = function (session, foldStyle, row) {
      var firstTag = this._getFirstTagInLine(session, row);
      if (!firstTag) return null;
      var isBackward = firstTag.closing || firstTag.selfClosing;
      var stack = [];
      var tag;
      if (!isBackward) {
        var iterator = new TokenIterator(session, row, firstTag.start.column);
        var start = {
          row: row,
          column: firstTag.start.column + firstTag.tagName.length + 2
        };
        if (firstTag.start.row == firstTag.end.row) start.column = firstTag.end.column;
        while (tag = this._readTagForward(iterator)) {
          if (tag.selfClosing) {
            if (!stack.length) {
              tag.start.column += tag.tagName.length + 2;
              tag.end.column -= 2;
              return Range.fromPoints(tag.start, tag.end);
            } else continue;
          }
          if (tag.closing) {
            this._pop(stack, tag);
            if (stack.length == 0) return Range.fromPoints(start, tag.start);
          } else {
            stack.push(tag);
          }
        }
      } else {
        var iterator = new TokenIterator(session, row, firstTag.end.column);
        var end = {
          row: row,
          column: firstTag.start.column
        };
        while (tag = this._readTagBackward(iterator)) {
          if (tag.selfClosing) {
            if (!stack.length) {
              tag.start.column += tag.tagName.length + 2;
              tag.end.column -= 2;
              return Range.fromPoints(tag.start, tag.end);
            } else continue;
          }
          if (!tag.closing) {
            this._pop(stack, tag);
            if (stack.length == 0) {
              tag.start.column += tag.tagName.length + 2;
              if (tag.start.row == tag.end.row && tag.start.column < tag.end.column) tag.start.column = tag.end.column;
              return Range.fromPoints(tag.start, end);
            }
          } else {
            stack.push(tag);
          }
        }
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/xml", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text", "ace/mode/xml_highlight_rules", "ace/mode/behaviour/xml", "ace/mode/folding/xml", "ace/worker/worker_client"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var lang = require("../lib/lang");
  var TextMode = require("./text").Mode;
  var XmlHighlightRules = require("./xml_highlight_rules").XmlHighlightRules;
  var XmlBehaviour = require("./behaviour/xml").XmlBehaviour;
  var XmlFoldMode = require("./folding/xml").FoldMode;
  var WorkerClient = require("../worker/worker_client").WorkerClient;
  var Mode = function Mode() {
    this.HighlightRules = XmlHighlightRules;
    this.$behaviour = new XmlBehaviour();
    this.foldingRules = new XmlFoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.voidElements = lang.arrayToMap([]);
    this.blockComment = {
      start: "<!--",
      end: "-->"
    };
    this.createWorker = function (session) {
      var worker = new WorkerClient(["ace"], "ace/mode/xml_worker", "Worker");
      worker.attachToDocument(session.getDocument());
      worker.on("error", function (e) {
        session.setAnnotations(e.data);
      });
      worker.on("terminate", function () {
        session.clearAnnotations();
      });
      return worker;
    };
    this.$id = "ace/mode/xml";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});
ace.define("ace/mode/css_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var lang = require("../lib/lang");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var supportType = exports.supportType = "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index";
  var supportFunction = exports.supportFunction = "rgb|rgba|url|attr|counter|counters";
  var supportConstant = exports.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero";
  var supportConstantColor = exports.supportConstantColor = "aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow";
  var supportConstantFonts = exports.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace";
  var numRe = exports.numRe = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";
  var pseudoElements = exports.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b";
  var pseudoClasses = exports.pseudoClasses = "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b";
  var CssHighlightRules = function CssHighlightRules() {
    var keywordMapper = this.createKeywordMapper({
      "support.function": supportFunction,
      "support.constant": supportConstant,
      "support.type": supportType,
      "support.constant.color": supportConstantColor,
      "support.constant.fonts": supportConstantFonts
    }, "text", true);
    this.$rules = {
      "start": [{
        token: "comment",
        // multi line comment
        regex: "\\/\\*",
        push: "comment"
      }, {
        token: "paren.lparen",
        regex: "\\{",
        push: "ruleset"
      }, {
        token: "string",
        regex: "@.*?{",
        push: "media"
      }, {
        token: "keyword",
        regex: "#[a-z0-9-_]+"
      }, {
        token: "variable",
        regex: "\\.[a-z0-9-_]+"
      }, {
        token: "string",
        regex: ":[a-z0-9-_]+"
      }, {
        token: "constant",
        regex: "[a-z0-9-_]+"
      }, {
        caseInsensitive: true
      }],
      "media": [{
        token: "comment",
        // multi line comment
        regex: "\\/\\*",
        push: "comment"
      }, {
        token: "paren.lparen",
        regex: "\\{",
        push: "ruleset"
      }, {
        token: "string",
        regex: "\\}",
        next: "pop"
      }, {
        token: "keyword",
        regex: "#[a-z0-9-_]+"
      }, {
        token: "variable",
        regex: "\\.[a-z0-9-_]+"
      }, {
        token: "string",
        regex: ":[a-z0-9-_]+"
      }, {
        token: "constant",
        regex: "[a-z0-9-_]+"
      }, {
        caseInsensitive: true
      }],
      "comment": [{
        token: "comment",
        regex: "\\*\\/",
        next: "pop"
      }, {
        defaultToken: "comment"
      }],
      "ruleset": [{
        token: "paren.rparen",
        regex: "\\}",
        next: "pop"
      }, {
        token: "comment",
        // multi line comment
        regex: "\\/\\*",
        push: "comment"
      }, {
        token: "string",
        // single line
        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
      }, {
        token: "string",
        // single line
        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
      }, {
        token: ["constant.numeric", "keyword"],
        regex: "(" + numRe + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
      }, {
        token: "constant.numeric",
        regex: numRe
      }, {
        token: "constant.numeric",
        // hex6 color
        regex: "#[a-f0-9]{6}"
      }, {
        token: "constant.numeric",
        // hex3 color
        regex: "#[a-f0-9]{3}"
      }, {
        token: ["punctuation", "entity.other.attribute-name.pseudo-element.css"],
        regex: pseudoElements
      }, {
        token: ["punctuation", "entity.other.attribute-name.pseudo-class.css"],
        regex: pseudoClasses
      }, {
        token: ["support.function", "string", "support.function"],
        regex: "(url\\()(.*)(\\))"
      }, {
        token: keywordMapper,
        regex: "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
      }, {
        caseInsensitive: true
      }]
    };
    this.normalizeRules();
  };
  oop.inherits(CssHighlightRules, TextHighlightRules);
  exports.CssHighlightRules = CssHighlightRules;
});
ace.define("ace/mode/css_completions", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  var propertyMap = {
    "background": {
      "#$0": 1
    },
    "background-color": {
      "#$0": 1,
      "transparent": 1,
      "fixed": 1
    },
    "background-image": {
      "url('/$0')": 1
    },
    "background-repeat": {
      "repeat": 1,
      "repeat-x": 1,
      "repeat-y": 1,
      "no-repeat": 1,
      "inherit": 1
    },
    "background-position": {
      "bottom": 2,
      "center": 2,
      "left": 2,
      "right": 2,
      "top": 2,
      "inherit": 2
    },
    "background-attachment": {
      "scroll": 1,
      "fixed": 1
    },
    "background-size": {
      "cover": 1,
      "contain": 1
    },
    "background-clip": {
      "border-box": 1,
      "padding-box": 1,
      "content-box": 1
    },
    "background-origin": {
      "border-box": 1,
      "padding-box": 1,
      "content-box": 1
    },
    "border": {
      "solid $0": 1,
      "dashed $0": 1,
      "dotted $0": 1,
      "#$0": 1
    },
    "border-color": {
      "#$0": 1
    },
    "border-style": {
      "solid": 2,
      "dashed": 2,
      "dotted": 2,
      "double": 2,
      "groove": 2,
      "hidden": 2,
      "inherit": 2,
      "inset": 2,
      "none": 2,
      "outset": 2,
      "ridged": 2
    },
    "border-collapse": {
      "collapse": 1,
      "separate": 1
    },
    "bottom": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "clear": {
      "left": 1,
      "right": 1,
      "both": 1,
      "none": 1
    },
    "color": {
      "#$0": 1,
      "rgb(#$00,0,0)": 1
    },
    "cursor": {
      "default": 1,
      "pointer": 1,
      "move": 1,
      "text": 1,
      "wait": 1,
      "help": 1,
      "progress": 1,
      "n-resize": 1,
      "ne-resize": 1,
      "e-resize": 1,
      "se-resize": 1,
      "s-resize": 1,
      "sw-resize": 1,
      "w-resize": 1,
      "nw-resize": 1
    },
    "display": {
      "none": 1,
      "block": 1,
      "inline": 1,
      "inline-block": 1,
      "table-cell": 1
    },
    "empty-cells": {
      "show": 1,
      "hide": 1
    },
    "float": {
      "left": 1,
      "right": 1,
      "none": 1
    },
    "font-family": {
      "Arial": 2,
      "Comic Sans MS": 2,
      "Consolas": 2,
      "Courier New": 2,
      "Courier": 2,
      "Georgia": 2,
      "Monospace": 2,
      "Sans-Serif": 2,
      "Segoe UI": 2,
      "Tahoma": 2,
      "Times New Roman": 2,
      "Trebuchet MS": 2,
      "Verdana": 1
    },
    "font-size": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "font-weight": {
      "bold": 1,
      "normal": 1
    },
    "font-style": {
      "italic": 1,
      "normal": 1
    },
    "font-variant": {
      "normal": 1,
      "small-caps": 1
    },
    "height": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "left": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "letter-spacing": {
      "normal": 1
    },
    "line-height": {
      "normal": 1
    },
    "list-style-type": {
      "none": 1,
      "disc": 1,
      "circle": 1,
      "square": 1,
      "decimal": 1,
      "decimal-leading-zero": 1,
      "lower-roman": 1,
      "upper-roman": 1,
      "lower-greek": 1,
      "lower-latin": 1,
      "upper-latin": 1,
      "georgian": 1,
      "lower-alpha": 1,
      "upper-alpha": 1
    },
    "margin": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "margin-right": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "margin-left": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "margin-top": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "margin-bottom": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "max-height": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "max-width": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "min-height": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "min-width": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "overflow": {
      "hidden": 1,
      "visible": 1,
      "auto": 1,
      "scroll": 1
    },
    "overflow-x": {
      "hidden": 1,
      "visible": 1,
      "auto": 1,
      "scroll": 1
    },
    "overflow-y": {
      "hidden": 1,
      "visible": 1,
      "auto": 1,
      "scroll": 1
    },
    "padding": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "padding-top": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "padding-right": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "padding-bottom": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "padding-left": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "page-break-after": {
      "auto": 1,
      "always": 1,
      "avoid": 1,
      "left": 1,
      "right": 1
    },
    "page-break-before": {
      "auto": 1,
      "always": 1,
      "avoid": 1,
      "left": 1,
      "right": 1
    },
    "position": {
      "absolute": 1,
      "relative": 1,
      "fixed": 1,
      "static": 1
    },
    "right": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "table-layout": {
      "fixed": 1,
      "auto": 1
    },
    "text-decoration": {
      "none": 1,
      "underline": 1,
      "line-through": 1,
      "blink": 1
    },
    "text-align": {
      "left": 1,
      "right": 1,
      "center": 1,
      "justify": 1
    },
    "text-transform": {
      "capitalize": 1,
      "uppercase": 1,
      "lowercase": 1,
      "none": 1
    },
    "top": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "vertical-align": {
      "top": 1,
      "bottom": 1
    },
    "visibility": {
      "hidden": 1,
      "visible": 1
    },
    "white-space": {
      "nowrap": 1,
      "normal": 1,
      "pre": 1,
      "pre-line": 1,
      "pre-wrap": 1
    },
    "width": {
      "px": 1,
      "em": 1,
      "%": 1
    },
    "word-spacing": {
      "normal": 1
    },
    "filter": {
      "alpha(opacity=$0100)": 1
    },
    "text-shadow": {
      "$02px 2px 2px #777": 1
    },
    "text-overflow": {
      "ellipsis-word": 1,
      "clip": 1,
      "ellipsis": 1
    },
    "-moz-border-radius": 1,
    "-moz-border-radius-topright": 1,
    "-moz-border-radius-bottomright": 1,
    "-moz-border-radius-topleft": 1,
    "-moz-border-radius-bottomleft": 1,
    "-webkit-border-radius": 1,
    "-webkit-border-top-right-radius": 1,
    "-webkit-border-top-left-radius": 1,
    "-webkit-border-bottom-right-radius": 1,
    "-webkit-border-bottom-left-radius": 1,
    "-moz-box-shadow": 1,
    "-webkit-box-shadow": 1,
    "transform": {
      "rotate($00deg)": 1,
      "skew($00deg)": 1
    },
    "-moz-transform": {
      "rotate($00deg)": 1,
      "skew($00deg)": 1
    },
    "-webkit-transform": {
      "rotate($00deg)": 1,
      "skew($00deg)": 1
    }
  };
  var CssCompletions = function CssCompletions() {};
  (function () {
    this.completionsDefined = false;
    this.defineCompletions = function () {
      if (document) {
        var style = document.createElement('c').style;
        for (var i in style) {
          if (typeof style[i] !== 'string') continue;
          var name = i.replace(/[A-Z]/g, function (x) {
            return '-' + x.toLowerCase();
          });
          if (!propertyMap.hasOwnProperty(name)) propertyMap[name] = 1;
        }
      }
      this.completionsDefined = true;
    };
    this.getCompletions = function (state, session, pos, prefix) {
      if (!this.completionsDefined) {
        this.defineCompletions();
      }
      var token = session.getTokenAt(pos.row, pos.column);
      if (!token) return [];
      if (state === 'ruleset') {
        var line = session.getLine(pos.row).substr(0, pos.column);
        if (/:[^;]+$/.test(line)) {
          /([\w\-]+):[^:]*$/.test(line);
          return this.getPropertyValueCompletions(state, session, pos, prefix);
        } else {
          return this.getPropertyCompletions(state, session, pos, prefix);
        }
      }
      return [];
    };
    this.getPropertyCompletions = function (state, session, pos, prefix) {
      var properties = Object.keys(propertyMap);
      return properties.map(function (property) {
        return {
          caption: property,
          snippet: property + ': $0',
          meta: "property",
          score: Number.MAX_VALUE
        };
      });
    };
    this.getPropertyValueCompletions = function (state, session, pos, prefix) {
      var line = session.getLine(pos.row).substr(0, pos.column);
      var property = (/([\w\-]+):[^:]*$/.exec(line) || {})[1];
      if (!property) return [];
      var values = [];
      if (property in propertyMap && _typeof(propertyMap[property]) === "object") {
        values = Object.keys(propertyMap[property]);
      }
      return values.map(function (value) {
        return {
          caption: value,
          snippet: value,
          meta: "property value",
          score: Number.MAX_VALUE
        };
      });
    };
  }).call(CssCompletions.prototype);
  exports.CssCompletions = CssCompletions;
});
ace.define("ace/mode/behaviour/css", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/mode/behaviour/cstyle", "ace/token_iterator"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Behaviour = require("../behaviour").Behaviour;
  var CstyleBehaviour = require("./cstyle").CstyleBehaviour;
  var TokenIterator = require("../../token_iterator").TokenIterator;
  var CssBehaviour = function CssBehaviour() {
    this.inherit(CstyleBehaviour);
    this.add("colon", "insertion", function (state, action, editor, session, text) {
      if (text === ':') {
        var cursor = editor.getCursorPosition();
        var iterator = new TokenIterator(session, cursor.row, cursor.column);
        var token = iterator.getCurrentToken();
        if (token && token.value.match(/\s+/)) {
          token = iterator.stepBackward();
        }
        if (token && token.type === 'support.type') {
          var line = session.doc.getLine(cursor.row);
          var rightChar = line.substring(cursor.column, cursor.column + 1);
          if (rightChar === ':') {
            return {
              text: '',
              selection: [1, 1]
            };
          }
          if (!line.substring(cursor.column).match(/^\s*;/)) {
            return {
              text: ':;',
              selection: [1, 1]
            };
          }
        }
      }
    });
    this.add("colon", "deletion", function (state, action, editor, session, range) {
      var selected = session.doc.getTextRange(range);
      if (!range.isMultiLine() && selected === ':') {
        var cursor = editor.getCursorPosition();
        var iterator = new TokenIterator(session, cursor.row, cursor.column);
        var token = iterator.getCurrentToken();
        if (token && token.value.match(/\s+/)) {
          token = iterator.stepBackward();
        }
        if (token && token.type === 'support.type') {
          var line = session.doc.getLine(range.start.row);
          var rightChar = line.substring(range.end.column, range.end.column + 1);
          if (rightChar === ';') {
            range.end.column++;
            return range;
          }
        }
      }
    });
    this.add("semicolon", "insertion", function (state, action, editor, session, text) {
      if (text === ';') {
        var cursor = editor.getCursorPosition();
        var line = session.doc.getLine(cursor.row);
        var rightChar = line.substring(cursor.column, cursor.column + 1);
        if (rightChar === ';') {
          return {
            text: '',
            selection: [1, 1]
          };
        }
      }
    });
  };
  oop.inherits(CssBehaviour, CstyleBehaviour);
  exports.CssBehaviour = CssBehaviour;
});
ace.define("ace/mode/css", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/css_highlight_rules", "ace/mode/matching_brace_outdent", "ace/worker/worker_client", "ace/mode/css_completions", "ace/mode/behaviour/css", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var CssHighlightRules = require("./css_highlight_rules").CssHighlightRules;
  var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
  var WorkerClient = require("../worker/worker_client").WorkerClient;
  var CssCompletions = require("./css_completions").CssCompletions;
  var CssBehaviour = require("./behaviour/css").CssBehaviour;
  var CStyleFoldMode = require("./folding/cstyle").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = CssHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CssBehaviour();
    this.$completer = new CssCompletions();
    this.foldingRules = new CStyleFoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.foldingRules = "cStyle";
    this.blockComment = {
      start: "/*",
      end: "*/"
    };
    this.getNextLineIndent = function (state, line, tab) {
      var indent = this.$getIndent(line);
      var tokens = this.getTokenizer().getLineTokens(line, state).tokens;
      if (tokens.length && tokens[tokens.length - 1].type == "comment") {
        return indent;
      }
      var match = line.match(/^.*\{\s*$/);
      if (match) {
        indent += tab;
      }
      return indent;
    };
    this.checkOutdent = function (state, line, input) {
      return this.$outdent.checkOutdent(line, input);
    };
    this.autoOutdent = function (state, doc, row) {
      this.$outdent.autoOutdent(doc, row);
    };
    this.getCompletions = function (state, session, pos, prefix) {
      return this.$completer.getCompletions(state, session, pos, prefix);
    };
    this.createWorker = function (session) {
      var worker = new WorkerClient(["ace"], "ace/mode/css_worker", "Worker");
      worker.attachToDocument(session.getDocument());
      worker.on("annotate", function (e) {
        session.setAnnotations(e.data);
      });
      worker.on("terminate", function () {
        session.clearAnnotations();
      });
      return worker;
    };
    this.$id = "ace/mode/css";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});
ace.define("ace/mode/html_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/css_highlight_rules", "ace/mode/javascript_highlight_rules", "ace/mode/xml_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var lang = require("../lib/lang");
  var CssHighlightRules = require("./css_highlight_rules").CssHighlightRules;
  var JavaScriptHighlightRules = require("./javascript_highlight_rules").JavaScriptHighlightRules;
  var XmlHighlightRules = require("./xml_highlight_rules").XmlHighlightRules;
  var tagMap = lang.createMap({
    a: 'anchor',
    button: 'form',
    form: 'form',
    img: 'image',
    input: 'form',
    label: 'form',
    option: 'form',
    script: 'script',
    select: 'form',
    textarea: 'form',
    style: 'style',
    table: 'table',
    tbody: 'table',
    td: 'table',
    tfoot: 'table',
    th: 'table',
    tr: 'table'
  });
  var HtmlHighlightRules = function HtmlHighlightRules() {
    XmlHighlightRules.call(this);
    this.addRules({
      attributes: [{
        include: "tag_whitespace"
      }, {
        token: "entity.other.attribute-name.xml",
        regex: "[-_a-zA-Z0-9:.]+"
      }, {
        token: "keyword.operator.attribute-equals.xml",
        regex: "=",
        push: [{
          include: "tag_whitespace"
        }, {
          token: "string.unquoted.attribute-value.html",
          regex: "[^<>='\"`\\s]+",
          next: "pop"
        }, {
          token: "empty",
          regex: "",
          next: "pop"
        }]
      }, {
        include: "attribute_value"
      }],
      tag: [{
        token: function token(start, tag) {
          var group = tagMap[tag];
          return ["meta.tag.punctuation." + (start == "<" ? "" : "end-") + "tag-open.xml", "meta.tag" + (group ? "." + group : "") + ".tag-name.xml"];
        },
        regex: "(</?)([-_a-zA-Z0-9:.]+)",
        next: "tag_stuff"
      }],
      tag_stuff: [{
        include: "attributes"
      }, {
        token: "meta.tag.punctuation.tag-close.xml",
        regex: "/?>",
        next: "start"
      }]
    });
    this.embedTagRules(CssHighlightRules, "css-", "style");
    this.embedTagRules(new JavaScriptHighlightRules({
      noJSX: true
    }).getRules(), "js-", "script");
    if (this.constructor === HtmlHighlightRules) this.normalizeRules();
  };
  oop.inherits(HtmlHighlightRules, XmlHighlightRules);
  exports.HtmlHighlightRules = HtmlHighlightRules;
});
ace.define("ace/mode/folding/mixed", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (defaultMode, subModes) {
    this.defaultMode = defaultMode;
    this.subModes = subModes;
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.$getMode = function (state) {
      if (typeof state != "string") state = state[0];
      for (var key in this.subModes) {
        if (state.indexOf(key) === 0) return this.subModes[key];
      }
      return null;
    };
    this.$tryMode = function (state, session, foldStyle, row) {
      var mode = this.$getMode(state);
      return mode ? mode.getFoldWidget(session, foldStyle, row) : "";
    };
    this.getFoldWidget = function (session, foldStyle, row) {
      return this.$tryMode(session.getState(row - 1), session, foldStyle, row) || this.$tryMode(session.getState(row), session, foldStyle, row) || this.defaultMode.getFoldWidget(session, foldStyle, row);
    };
    this.getFoldWidgetRange = function (session, foldStyle, row) {
      var mode = this.$getMode(session.getState(row - 1));
      if (!mode || !mode.getFoldWidget(session, foldStyle, row)) mode = this.$getMode(session.getState(row));
      if (!mode || !mode.getFoldWidget(session, foldStyle, row)) mode = this.defaultMode;
      return mode.getFoldWidgetRange(session, foldStyle, row);
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/html", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/mixed", "ace/mode/folding/xml", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var MixedFoldMode = require("./mixed").FoldMode;
  var XmlFoldMode = require("./xml").FoldMode;
  var CStyleFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function (voidElements, optionalTags) {
    MixedFoldMode.call(this, new XmlFoldMode(voidElements, optionalTags), {
      "js-": new CStyleFoldMode(),
      "css-": new CStyleFoldMode()
    });
  };
  oop.inherits(FoldMode, MixedFoldMode);
});
ace.define("ace/mode/html_completions", ["require", "exports", "module", "ace/token_iterator"], function (require, exports, module) {
  "use strict";

  var TokenIterator = require("../token_iterator").TokenIterator;
  var commonAttributes = ["accesskey", "class", "contenteditable", "contextmenu", "dir", "draggable", "dropzone", "hidden", "id", "inert", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "spellcheck", "style", "tabindex", "title", "translate"];
  var eventAttributes = ["onabort", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting"];
  var globalAttributes = commonAttributes.concat(eventAttributes);
  var attributeMap = {
    "html": {
      "manifest": 1
    },
    "head": {},
    "title": {},
    "base": {
      "href": 1,
      "target": 1
    },
    "link": {
      "href": 1,
      "hreflang": 1,
      "rel": {
        "stylesheet": 1,
        "icon": 1
      },
      "media": {
        "all": 1,
        "screen": 1,
        "print": 1
      },
      "type": {
        "text/css": 1,
        "image/png": 1,
        "image/jpeg": 1,
        "image/gif": 1
      },
      "sizes": 1
    },
    "meta": {
      "http-equiv": {
        "content-type": 1
      },
      "name": {
        "description": 1,
        "keywords": 1
      },
      "content": {
        "text/html; charset=UTF-8": 1
      },
      "charset": 1
    },
    "style": {
      "type": 1,
      "media": {
        "all": 1,
        "screen": 1,
        "print": 1
      },
      "scoped": 1
    },
    "script": {
      "charset": 1,
      "type": {
        "text/javascript": 1
      },
      "src": 1,
      "defer": 1,
      "async": 1
    },
    "noscript": {
      "href": 1
    },
    "body": {
      "onafterprint": 1,
      "onbeforeprint": 1,
      "onbeforeunload": 1,
      "onhashchange": 1,
      "onmessage": 1,
      "onoffline": 1,
      "onpopstate": 1,
      "onredo": 1,
      "onresize": 1,
      "onstorage": 1,
      "onundo": 1,
      "onunload": 1
    },
    "section": {},
    "nav": {},
    "article": {
      "pubdate": 1
    },
    "aside": {},
    "h1": {},
    "h2": {},
    "h3": {},
    "h4": {},
    "h5": {},
    "h6": {},
    "header": {},
    "footer": {},
    "address": {},
    "main": {},
    "p": {},
    "hr": {},
    "pre": {},
    "blockquote": {
      "cite": 1
    },
    "ol": {
      "start": 1,
      "reversed": 1
    },
    "ul": {},
    "li": {
      "value": 1
    },
    "dl": {},
    "dt": {},
    "dd": {},
    "figure": {},
    "figcaption": {},
    "div": {},
    "a": {
      "href": 1,
      "target": {
        "_blank": 1,
        "top": 1
      },
      "ping": 1,
      "rel": {
        "nofollow": 1,
        "alternate": 1,
        "author": 1,
        "bookmark": 1,
        "help": 1,
        "license": 1,
        "next": 1,
        "noreferrer": 1,
        "prefetch": 1,
        "prev": 1,
        "search": 1,
        "tag": 1
      },
      "media": 1,
      "hreflang": 1,
      "type": 1
    },
    "em": {},
    "strong": {},
    "small": {},
    "s": {},
    "cite": {},
    "q": {
      "cite": 1
    },
    "dfn": {},
    "abbr": {},
    "data": {},
    "time": {
      "datetime": 1
    },
    "code": {},
    "var": {},
    "samp": {},
    "kbd": {},
    "sub": {},
    "sup": {},
    "i": {},
    "b": {},
    "u": {},
    "mark": {},
    "ruby": {},
    "rt": {},
    "rp": {},
    "bdi": {},
    "bdo": {},
    "span": {},
    "br": {},
    "wbr": {},
    "ins": {
      "cite": 1,
      "datetime": 1
    },
    "del": {
      "cite": 1,
      "datetime": 1
    },
    "img": {
      "alt": 1,
      "src": 1,
      "height": 1,
      "width": 1,
      "usemap": 1,
      "ismap": 1
    },
    "iframe": {
      "name": 1,
      "src": 1,
      "height": 1,
      "width": 1,
      "sandbox": {
        "allow-same-origin": 1,
        "allow-top-navigation": 1,
        "allow-forms": 1,
        "allow-scripts": 1
      },
      "seamless": {
        "seamless": 1
      }
    },
    "embed": {
      "src": 1,
      "height": 1,
      "width": 1,
      "type": 1
    },
    "object": {
      "param": 1,
      "data": 1,
      "type": 1,
      "height": 1,
      "width": 1,
      "usemap": 1,
      "name": 1,
      "form": 1,
      "classid": 1
    },
    "param": {
      "name": 1,
      "value": 1
    },
    "video": {
      "src": 1,
      "autobuffer": 1,
      "autoplay": {
        "autoplay": 1
      },
      "loop": {
        "loop": 1
      },
      "controls": {
        "controls": 1
      },
      "width": 1,
      "height": 1,
      "poster": 1,
      "muted": {
        "muted": 1
      },
      "preload": {
        "auto": 1,
        "metadata": 1,
        "none": 1
      }
    },
    "audio": {
      "src": 1,
      "autobuffer": 1,
      "autoplay": {
        "autoplay": 1
      },
      "loop": {
        "loop": 1
      },
      "controls": {
        "controls": 1
      },
      "muted": {
        "muted": 1
      },
      "preload": {
        "auto": 1,
        "metadata": 1,
        "none": 1
      }
    },
    "source": {
      "src": 1,
      "type": 1,
      "media": 1
    },
    "track": {
      "kind": 1,
      "src": 1,
      "srclang": 1,
      "label": 1,
      "default": 1
    },
    "canvas": {
      "width": 1,
      "height": 1
    },
    "map": {
      "name": 1
    },
    "area": {
      "shape": 1,
      "coords": 1,
      "href": 1,
      "hreflang": 1,
      "alt": 1,
      "target": 1,
      "media": 1,
      "rel": 1,
      "ping": 1,
      "type": 1
    },
    "svg": {},
    "math": {},
    "table": {
      "summary": 1
    },
    "caption": {},
    "colgroup": {
      "span": 1
    },
    "col": {
      "span": 1
    },
    "tbody": {},
    "thead": {},
    "tfoot": {},
    "tr": {},
    "td": {
      "headers": 1,
      "rowspan": 1,
      "colspan": 1
    },
    "th": {
      "headers": 1,
      "rowspan": 1,
      "colspan": 1,
      "scope": 1
    },
    "form": {
      "accept-charset": 1,
      "action": 1,
      "autocomplete": 1,
      "enctype": {
        "multipart/form-data": 1,
        "application/x-www-form-urlencoded": 1
      },
      "method": {
        "get": 1,
        "post": 1
      },
      "name": 1,
      "novalidate": 1,
      "target": {
        "_blank": 1,
        "top": 1
      }
    },
    "fieldset": {
      "disabled": 1,
      "form": 1,
      "name": 1
    },
    "legend": {},
    "label": {
      "form": 1,
      "for": 1
    },
    "input": {
      "type": {
        "text": 1,
        "password": 1,
        "hidden": 1,
        "checkbox": 1,
        "submit": 1,
        "radio": 1,
        "file": 1,
        "button": 1,
        "reset": 1,
        "image": 31,
        "color": 1,
        "date": 1,
        "datetime": 1,
        "datetime-local": 1,
        "email": 1,
        "month": 1,
        "number": 1,
        "range": 1,
        "search": 1,
        "tel": 1,
        "time": 1,
        "url": 1,
        "week": 1
      },
      "accept": 1,
      "alt": 1,
      "autocomplete": {
        "on": 1,
        "off": 1
      },
      "autofocus": {
        "autofocus": 1
      },
      "checked": {
        "checked": 1
      },
      "disabled": {
        "disabled": 1
      },
      "form": 1,
      "formaction": 1,
      "formenctype": {
        "application/x-www-form-urlencoded": 1,
        "multipart/form-data": 1,
        "text/plain": 1
      },
      "formmethod": {
        "get": 1,
        "post": 1
      },
      "formnovalidate": {
        "formnovalidate": 1
      },
      "formtarget": {
        "_blank": 1,
        "_self": 1,
        "_parent": 1,
        "_top": 1
      },
      "height": 1,
      "list": 1,
      "max": 1,
      "maxlength": 1,
      "min": 1,
      "multiple": {
        "multiple": 1
      },
      "pattern": 1,
      "placeholder": 1,
      "readonly": {
        "readonly": 1
      },
      "required": {
        "required": 1
      },
      "size": 1,
      "src": 1,
      "step": 1,
      "width": 1,
      "files": 1,
      "value": 1
    },
    "button": {
      "autofocus": 1,
      "disabled": {
        "disabled": 1
      },
      "form": 1,
      "formaction": 1,
      "formenctype": 1,
      "formmethod": 1,
      "formnovalidate": 1,
      "formtarget": 1,
      "name": 1,
      "value": 1,
      "type": {
        "button": 1,
        "submit": 1
      }
    },
    "select": {
      "autofocus": 1,
      "disabled": 1,
      "form": 1,
      "multiple": {
        "multiple": 1
      },
      "name": 1,
      "size": 1,
      "readonly": {
        "readonly": 1
      }
    },
    "datalist": {},
    "optgroup": {
      "disabled": 1,
      "label": 1
    },
    "option": {
      "disabled": 1,
      "selected": 1,
      "label": 1,
      "value": 1
    },
    "textarea": {
      "autofocus": {
        "autofocus": 1
      },
      "disabled": {
        "disabled": 1
      },
      "form": 1,
      "maxlength": 1,
      "name": 1,
      "placeholder": 1,
      "readonly": {
        "readonly": 1
      },
      "required": {
        "required": 1
      },
      "rows": 1,
      "cols": 1,
      "wrap": {
        "on": 1,
        "off": 1,
        "hard": 1,
        "soft": 1
      }
    },
    "keygen": {
      "autofocus": 1,
      "challenge": {
        "challenge": 1
      },
      "disabled": {
        "disabled": 1
      },
      "form": 1,
      "keytype": {
        "rsa": 1,
        "dsa": 1,
        "ec": 1
      },
      "name": 1
    },
    "output": {
      "for": 1,
      "form": 1,
      "name": 1
    },
    "progress": {
      "value": 1,
      "max": 1
    },
    "meter": {
      "value": 1,
      "min": 1,
      "max": 1,
      "low": 1,
      "high": 1,
      "optimum": 1
    },
    "details": {
      "open": 1
    },
    "summary": {},
    "command": {
      "type": 1,
      "label": 1,
      "icon": 1,
      "disabled": 1,
      "checked": 1,
      "radiogroup": 1,
      "command": 1
    },
    "menu": {
      "type": 1,
      "label": 1
    },
    "dialog": {
      "open": 1
    }
  };
  var elements = Object.keys(attributeMap);
  function is(token, type) {
    return token.type.lastIndexOf(type + ".xml") > -1;
  }
  function findTagName(session, pos) {
    var iterator = new TokenIterator(session, pos.row, pos.column);
    var token = iterator.getCurrentToken();
    while (token && !is(token, "tag-name")) {
      token = iterator.stepBackward();
    }
    if (token) return token.value;
  }
  function findAttributeName(session, pos) {
    var iterator = new TokenIterator(session, pos.row, pos.column);
    var token = iterator.getCurrentToken();
    while (token && !is(token, "attribute-name")) {
      token = iterator.stepBackward();
    }
    if (token) return token.value;
  }
  var HtmlCompletions = function HtmlCompletions() {};
  (function () {
    this.getCompletions = function (state, session, pos, prefix) {
      var token = session.getTokenAt(pos.row, pos.column);
      if (!token) return [];
      if (is(token, "tag-name") || is(token, "tag-open") || is(token, "end-tag-open")) return this.getTagCompletions(state, session, pos, prefix);
      if (is(token, "tag-whitespace") || is(token, "attribute-name")) return this.getAttributeCompletions(state, session, pos, prefix);
      if (is(token, "attribute-value")) return this.getAttributeValueCompletions(state, session, pos, prefix);
      var line = session.getLine(pos.row).substr(0, pos.column);
      if (/&[A-z]*$/i.test(line)) return this.getHTMLEntityCompletions(state, session, pos, prefix);
      return [];
    };
    this.getTagCompletions = function (state, session, pos, prefix) {
      return elements.map(function (element) {
        return {
          value: element,
          meta: "tag",
          score: Number.MAX_VALUE
        };
      });
    };
    this.getAttributeCompletions = function (state, session, pos, prefix) {
      var tagName = findTagName(session, pos);
      if (!tagName) return [];
      var attributes = globalAttributes;
      if (tagName in attributeMap) {
        attributes = attributes.concat(Object.keys(attributeMap[tagName]));
      }
      return attributes.map(function (attribute) {
        return {
          caption: attribute,
          snippet: attribute + '="$0"',
          meta: "attribute",
          score: Number.MAX_VALUE
        };
      });
    };
    this.getAttributeValueCompletions = function (state, session, pos, prefix) {
      var tagName = findTagName(session, pos);
      var attributeName = findAttributeName(session, pos);
      if (!tagName) return [];
      var values = [];
      if (tagName in attributeMap && attributeName in attributeMap[tagName] && _typeof(attributeMap[tagName][attributeName]) === "object") {
        values = Object.keys(attributeMap[tagName][attributeName]);
      }
      return values.map(function (value) {
        return {
          caption: value,
          snippet: value,
          meta: "attribute value",
          score: Number.MAX_VALUE
        };
      });
    };
    this.getHTMLEntityCompletions = function (state, session, pos, prefix) {
      var values = ['&Aacute;', '&aacute;', '&Acirc;', '&acirc;', '&acute;', '&AElig;', '&aelig;', '&Agrave;', '&agrave;', '&alefsym;', '&Alpha;', '&alpha;', '&amp;', '&and;', '&ang;', '&Aring;', '&aring;', '&asymp;', '&Atilde;', '&atilde;', '&Auml;', '&auml;', '&bdquo;', '&Beta;', '&beta;', '&brvbar;', '&bull;', '&cap;', '&Ccedil;', '&ccedil;', '&cedil;', '&cent;', '&Chi;', '&chi;', '&circ;', '&clubs;', '&cong;', '&copy;', '&crarr;', '&cup;', '&curren;', '&Dagger;', '&dagger;', '&dArr;', '&darr;', '&deg;', '&Delta;', '&delta;', '&diams;', '&divide;', '&Eacute;', '&eacute;', '&Ecirc;', '&ecirc;', '&Egrave;', '&egrave;', '&empty;', '&emsp;', '&ensp;', '&Epsilon;', '&epsilon;', '&equiv;', '&Eta;', '&eta;', '&ETH;', '&eth;', '&Euml;', '&euml;', '&euro;', '&exist;', '&fnof;', '&forall;', '&frac12;', '&frac14;', '&frac34;', '&frasl;', '&Gamma;', '&gamma;', '&ge;', '&gt;', '&hArr;', '&harr;', '&hearts;', '&hellip;', '&Iacute;', '&iacute;', '&Icirc;', '&icirc;', '&iexcl;', '&Igrave;', '&igrave;', '&image;', '&infin;', '&int;', '&Iota;', '&iota;', '&iquest;', '&isin;', '&Iuml;', '&iuml;', '&Kappa;', '&kappa;', '&Lambda;', '&lambda;', '&lang;', '&laquo;', '&lArr;', '&larr;', '&lceil;', '&ldquo;', '&le;', '&lfloor;', '&lowast;', '&loz;', '&lrm;', '&lsaquo;', '&lsquo;', '&lt;', '&macr;', '&mdash;', '&micro;', '&middot;', '&minus;', '&Mu;', '&mu;', '&nabla;', '&nbsp;', '&ndash;', '&ne;', '&ni;', '&not;', '&notin;', '&nsub;', '&Ntilde;', '&ntilde;', '&Nu;', '&nu;', '&Oacute;', '&oacute;', '&Ocirc;', '&ocirc;', '&OElig;', '&oelig;', '&Ograve;', '&ograve;', '&oline;', '&Omega;', '&omega;', '&Omicron;', '&omicron;', '&oplus;', '&or;', '&ordf;', '&ordm;', '&Oslash;', '&oslash;', '&Otilde;', '&otilde;', '&otimes;', '&Ouml;', '&ouml;', '&para;', '&part;', '&permil;', '&perp;', '&Phi;', '&phi;', '&Pi;', '&pi;', '&piv;', '&plusmn;', '&pound;', '&Prime;', '&prime;', '&prod;', '&prop;', '&Psi;', '&psi;', '&quot;', '&radic;', '&rang;', '&raquo;', '&rArr;', '&rarr;', '&rceil;', '&rdquo;', '&real;', '&reg;', '&rfloor;', '&Rho;', '&rho;', '&rlm;', '&rsaquo;', '&rsquo;', '&sbquo;', '&Scaron;', '&scaron;', '&sdot;', '&sect;', '&shy;', '&Sigma;', '&sigma;', '&sigmaf;', '&sim;', '&spades;', '&sub;', '&sube;', '&sum;', '&sup;', '&sup1;', '&sup2;', '&sup3;', '&supe;', '&szlig;', '&Tau;', '&tau;', '&there4;', '&Theta;', '&theta;', '&thetasym;', '&thinsp;', '&THORN;', '&thorn;', '&tilde;', '&times;', '&trade;', '&Uacute;', '&uacute;', '&uArr;', '&uarr;', '&Ucirc;', '&ucirc;', '&Ugrave;', '&ugrave;', '&uml;', '&upsih;', '&Upsilon;', '&upsilon;', '&Uuml;', '&uuml;', '&weierp;', '&Xi;', '&xi;', '&Yacute;', '&yacute;', '&yen;', '&Yuml;', '&yuml;', '&Zeta;', '&zeta;', '&zwj;', '&zwnj;'];
      return values.map(function (value) {
        return {
          caption: value,
          snippet: value.substr(1),
          meta: "html entity",
          score: Number.MAX_VALUE
        };
      });
    };
  }).call(HtmlCompletions.prototype);
  exports.HtmlCompletions = HtmlCompletions;
});
ace.define("ace/mode/html", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text", "ace/mode/javascript", "ace/mode/css", "ace/mode/html_highlight_rules", "ace/mode/behaviour/xml", "ace/mode/folding/html", "ace/mode/html_completions", "ace/worker/worker_client"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var lang = require("../lib/lang");
  var TextMode = require("./text").Mode;
  var JavaScriptMode = require("./javascript").Mode;
  var CssMode = require("./css").Mode;
  var HtmlHighlightRules = require("./html_highlight_rules").HtmlHighlightRules;
  var XmlBehaviour = require("./behaviour/xml").XmlBehaviour;
  var HtmlFoldMode = require("./folding/html").FoldMode;
  var HtmlCompletions = require("./html_completions").HtmlCompletions;
  var WorkerClient = require("../worker/worker_client").WorkerClient;
  var voidElements = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "menuitem", "param", "source", "track", "wbr"];
  var optionalEndTags = ["li", "dt", "dd", "p", "rt", "rp", "optgroup", "option", "colgroup", "td", "th"];
  var Mode = function Mode(options) {
    this.fragmentContext = options && options.fragmentContext;
    this.HighlightRules = HtmlHighlightRules;
    this.$behaviour = new XmlBehaviour();
    this.$completer = new HtmlCompletions();
    this.createModeDelegates({
      "js-": JavaScriptMode,
      "css-": CssMode
    });
    this.foldingRules = new HtmlFoldMode(this.voidElements, lang.arrayToMap(optionalEndTags));
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.blockComment = {
      start: "<!--",
      end: "-->"
    };
    this.voidElements = lang.arrayToMap(voidElements);
    this.getNextLineIndent = function (state, line, tab) {
      return this.$getIndent(line);
    };
    this.checkOutdent = function (state, line, input) {
      return false;
    };
    this.getCompletions = function (state, session, pos, prefix) {
      return this.$completer.getCompletions(state, session, pos, prefix);
    };
    this.createWorker = function (session) {
      if (this.constructor != Mode) return;
      var worker = new WorkerClient(["ace"], "ace/mode/html_worker", "Worker");
      worker.attachToDocument(session.getDocument());
      if (this.fragmentContext) worker.call("setOptions", [{
        context: this.fragmentContext
      }]);
      worker.on("error", function (e) {
        session.setAnnotations(e.data);
      });
      worker.on("terminate", function () {
        session.clearAnnotations();
      });
      return worker;
    };
    this.$id = "ace/mode/html";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});
ace.define("ace/mode/markdown_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules", "ace/mode/javascript_highlight_rules", "ace/mode/xml_highlight_rules", "ace/mode/html_highlight_rules", "ace/mode/css_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var lang = require("../lib/lang");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var JavaScriptHighlightRules = require("./javascript_highlight_rules").JavaScriptHighlightRules;
  var XmlHighlightRules = require("./xml_highlight_rules").XmlHighlightRules;
  var HtmlHighlightRules = require("./html_highlight_rules").HtmlHighlightRules;
  var CssHighlightRules = require("./css_highlight_rules").CssHighlightRules;
  var escaped = function escaped(ch) {
    return "(?:[^" + lang.escapeRegExp(ch) + "\\\\]|\\\\.)*";
  };
  function github_embed(tag, prefix) {
    return {
      // Github style block
      token: "support.function",
      regex: "^\\s*```" + tag + "\\s*$",
      push: prefix + "start"
    };
  }
  var MarkdownHighlightRules = function MarkdownHighlightRules() {
    HtmlHighlightRules.call(this);
    this.$rules["start"].unshift({
      token: "empty_line",
      regex: '^$',
      next: "allowBlock"
    }, {
      // h1
      token: "markup.heading.1",
      regex: "^=+(?=\\s*$)"
    }, {
      // h2
      token: "markup.heading.2",
      regex: "^\\-+(?=\\s*$)"
    }, {
      token: function token(value) {
        return "markup.heading." + value.length;
      },
      regex: /^#{1,6}(?=\s*[^ #]|\s+#.)/,
      next: "header"
    }, github_embed("(?:javascript|js)", "jscode-"), github_embed("xml", "xmlcode-"), github_embed("html", "htmlcode-"), github_embed("css", "csscode-"), {
      // Github style block
      token: "support.function",
      regex: "^\\s*```\\s*\\S*(?:{.*?\\})?\\s*$",
      next: "githubblock"
    }, {
      // block quote
      token: "string.blockquote",
      regex: "^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",
      next: "blockquote"
    }, {
      // HR * - _
      token: "constant",
      regex: "^ {0,2}(?:(?: ?\\* ?){3,}|(?: ?\\- ?){3,}|(?: ?\\_ ?){3,})\\s*$",
      next: "allowBlock"
    }, {
      // list
      token: "markup.list",
      regex: "^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",
      next: "listblock-start"
    }, {
      include: "basic"
    });
    this.addRules({
      "basic": [{
        token: "constant.language.escape",
        regex: /\\[\\`*_{}\[\]()#+\-.!]/
      }, {
        // code span `
        token: "support.function",
        regex: "(`+)(.*?[^`])(\\1)"
      }, {
        // reference
        token: ["text", "constant", "text", "url", "string", "text"],
        regex: "^([ ]{0,3}\\[)([^\\]]+)(\\]:\\s*)([^ ]+)(\\s*(?:[\"][^\"]+[\"])?(\\s*))$"
      }, {
        // link by reference
        token: ["text", "string", "text", "constant", "text"],
        regex: "(\\[)(" + escaped("]") + ")(\\]\s*\\[)(" + escaped("]") + ")(\\])"
      }, {
        // link by url
        token: ["text", "string", "text", "markup.underline", "string", "text"],
        regex: "(\\[)(" +
        // [
        escaped("]") +
        // link text
        ")(\\]\\()" +
        // ](
        '((?:[^\\)\\s\\\\]|\\\\.|\\s(?=[^"]))*)' +
        // href
        '(\\s*"' + escaped('"') + '"\\s*)?' +
        // "title"
        "(\\))" // )
      }, {
        // strong ** __
        token: "string.strong",
        regex: "([*]{2}|[_]{2}(?=\\S))(.*?\\S[*_]*)(\\1)"
      }, {
        // emphasis * _
        token: "string.emphasis",
        regex: "([*]|[_](?=\\S))(.*?\\S[*_]*)(\\1)"
      }, {
        //
        token: ["text", "url", "text"],
        regex: "(<)(" + "(?:https?|ftp|dict):[^'\">\\s]+" + "|" + "(?:mailto:)?[-.\\w]+\\@[-a-z0-9]+(?:\\.[-a-z0-9]+)*\\.[a-z]+" + ")(>)"
      }],
      "allowBlock": [{
        token: "support.function",
        regex: "^ {4}.+",
        next: "allowBlock"
      }, {
        token: "empty_line",
        regex: '^$',
        next: "allowBlock"
      }, {
        token: "empty",
        regex: "",
        next: "start"
      }],
      "header": [{
        regex: "$",
        next: "start"
      }, {
        include: "basic"
      }, {
        defaultToken: "heading"
      }],
      "listblock-start": [{
        token: "support.variable",
        regex: /(?:\[[ x]\])?/,
        next: "listblock"
      }],
      "listblock": [{
        // Lists only escape on completely blank lines.
        token: "empty_line",
        regex: "^$",
        next: "start"
      }, {
        // list
        token: "markup.list",
        regex: "^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",
        next: "listblock-start"
      }, {
        include: "basic",
        noEscape: true
      }, {
        // Github style block
        token: "support.function",
        regex: "^\\s*```\\s*[a-zA-Z]*(?:{.*?\\})?\\s*$",
        next: "githubblock"
      }, {
        defaultToken: "list" //do not use markup.list to allow stling leading `*` differntly
      }],
      "blockquote": [{
        // Blockquotes only escape on blank lines.
        token: "empty_line",
        regex: "^\\s*$",
        next: "start"
      }, {
        // block quote
        token: "string.blockquote",
        regex: "^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",
        next: "blockquote"
      }, {
        include: "basic",
        noEscape: true
      }, {
        defaultToken: "string.blockquote"
      }],
      "githubblock": [{
        token: "support.function",
        regex: "^\\s*```",
        next: "start"
      }, {
        token: "support.function",
        regex: ".+"
      }]
    });
    this.embedRules(JavaScriptHighlightRules, "jscode-", [{
      token: "support.function",
      regex: "^\\s*```",
      next: "pop"
    }]);
    this.embedRules(HtmlHighlightRules, "htmlcode-", [{
      token: "support.function",
      regex: "^\\s*```",
      next: "pop"
    }]);
    this.embedRules(CssHighlightRules, "csscode-", [{
      token: "support.function",
      regex: "^\\s*```",
      next: "pop"
    }]);
    this.embedRules(XmlHighlightRules, "xmlcode-", [{
      token: "support.function",
      regex: "^\\s*```",
      next: "pop"
    }]);
    this.normalizeRules();
  };
  oop.inherits(MarkdownHighlightRules, TextHighlightRules);
  exports.MarkdownHighlightRules = MarkdownHighlightRules;
});
ace.define("ace/mode/folding/markdown", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode", "ace/range"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var Range = require("../../range").Range;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /^(?:[=-]+\s*$|#{1,6} |`{3})/;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (!this.foldingStartMarker.test(line)) return "";
      if (line[0] == "`") {
        if (session.bgTokenizer.getState(row) == "start") return "end";
        return "start";
      }
      return "start";
    };
    this.getFoldWidgetRange = function (session, foldStyle, row) {
      var line = session.getLine(row);
      var startColumn = line.length;
      var maxRow = session.getLength();
      var startRow = row;
      var endRow = row;
      if (!line.match(this.foldingStartMarker)) return;
      if (line[0] == "`") {
        if (session.bgTokenizer.getState(row) !== "start") {
          while (++row < maxRow) {
            line = session.getLine(row);
            if (line[0] == "`" & line.substring(0, 3) == "```") break;
          }
          return new Range(startRow, startColumn, row, 0);
        } else {
          while (row-- > 0) {
            line = session.getLine(row);
            if (line[0] == "`" & line.substring(0, 3) == "```") break;
          }
          return new Range(row, line.length, startRow, 0);
        }
      }
      var token;
      function isHeading(row) {
        token = session.getTokens(row)[0];
        return token && token.type.lastIndexOf(heading, 0) === 0;
      }
      var heading = "markup.heading";
      function getLevel() {
        var ch = token.value[0];
        if (ch == "=") return 6;
        if (ch == "-") return 5;
        return 7 - token.value.search(/[^#]/);
      }
      if (isHeading(row)) {
        var startHeadingLevel = getLevel();
        while (++row < maxRow) {
          if (!isHeading(row)) continue;
          var level = getLevel();
          if (level >= startHeadingLevel) break;
        }
        endRow = row - (!token || ["=", "-"].indexOf(token.value[0]) == -1 ? 1 : 2);
        if (endRow > startRow) {
          while (endRow > startRow && /^\s*$/.test(session.getLine(endRow))) endRow--;
        }
        if (endRow > startRow) {
          var endColumn = session.getLine(endRow).length;
          return new Range(startRow, startColumn, endRow, endColumn);
        }
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/markdown", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/javascript", "ace/mode/xml", "ace/mode/html", "ace/mode/markdown_highlight_rules", "ace/mode/folding/markdown"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var JavaScriptMode = require("./javascript").Mode;
  var XmlMode = require("./xml").Mode;
  var HtmlMode = require("./html").Mode;
  var MarkdownHighlightRules = require("./markdown_highlight_rules").MarkdownHighlightRules;
  var MarkdownFoldMode = require("./folding/markdown").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = MarkdownHighlightRules;
    this.createModeDelegates({
      "js-": JavaScriptMode,
      "xml-": XmlMode,
      "html-": HtmlMode
    });
    this.foldingRules = new MarkdownFoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.type = "text";
    this.blockComment = {
      start: "<!--",
      end: "-->"
    };
    this.getNextLineIndent = function (state, line, tab) {
      if (state == "listblock") {
        var match = /^(\s*)(?:([-+*])|(\d+)\.)(\s+)/.exec(line);
        if (!match) return "";
        var marker = match[2];
        if (!marker) marker = parseInt(match[3], 10) + 1 + ".";
        return match[1] + marker + match[4];
      } else {
        return this.$getIndent(line);
      }
    };
    this.$id = "ace/mode/markdown";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-mysql.js":
/*!***********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-mysql.js ***!
  \***********************************************************/
/***/ (() => {

ace.define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var DocCommentHighlightRules = function DocCommentHighlightRules() {
    this.$rules = {
      "start": [{
        token: "comment.doc.tag",
        regex: "@[\\w\\d_]+" // TODO: fix email addresses
      }, DocCommentHighlightRules.getTagRule(), {
        defaultToken: "comment.doc",
        caseInsensitive: true
      }]
    };
  };
  oop.inherits(DocCommentHighlightRules, TextHighlightRules);
  DocCommentHighlightRules.getTagRule = function (start) {
    return {
      token: "comment.doc.tag.storage.type",
      regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
  };
  DocCommentHighlightRules.getStartRule = function (start) {
    return {
      token: "comment.doc",
      // doc comment
      regex: "\\/\\*(?=\\*)",
      next: start
    };
  };
  DocCommentHighlightRules.getEndRule = function (start) {
    return {
      token: "comment.doc",
      // closing comment
      regex: "\\*\\/",
      next: start
    };
  };
  exports.DocCommentHighlightRules = DocCommentHighlightRules;
});
ace.define("ace/mode/mysql_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  var oop = require("../lib/oop");
  var lang = require("../lib/lang");
  var DocCommentHighlightRules = require("./doc_comment_highlight_rules").DocCommentHighlightRules;
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var MysqlHighlightRules = function MysqlHighlightRules() {
    var mySqlKeywords = /*sql*/"alter|and|as|asc|between|count|create|delete|desc|distinct|drop|from|having|in|insert|into|is|join|like|not|on|or|order|select|set|table|union|update|values|where" + "|accessible|action|add|after|algorithm|all|analyze|asensitive|at|authors|auto_increment|autocommit|avg|avg_row_length|before|binary|binlog|both|btree|cache|call|cascade|cascaded|case|catalog_name|chain|change|changed|character|check|checkpoint|checksum|class_origin|client_statistics|close|coalesce|code|collate|collation|collations|column|columns|comment|commit|committed|completion|concurrent|condition|connection|consistent|constraint|contains|continue|contributors|convert|cross|current_date|current_time|current_timestamp|current_user|cursor|data|database|databases|day_hour|day_microsecond|day_minute|day_second|deallocate|dec|declare|default|delay_key_write|delayed|delimiter|des_key_file|describe|deterministic|dev_pop|dev_samp|deviance|directory|disable|discard|distinctrow|div|dual|dumpfile|each|elseif|enable|enclosed|end|ends|engine|engines|enum|errors|escape|escaped|even|event|events|every|execute|exists|exit|explain|extended|fast|fetch|field|fields|first|flush|for|force|foreign|found_rows|full|fulltext|function|general|global|grant|grants|group|groupby_concat|handler|hash|help|high_priority|hosts|hour_microsecond|hour_minute|hour_second|if|ignore|ignore_server_ids|import|index|index_statistics|infile|inner|innodb|inout|insensitive|insert_method|install|interval|invoker|isolation|iterate|key|keys|kill|language|last|leading|leave|left|level|limit|linear|lines|list|load|local|localtime|localtimestamp|lock|logs|low_priority|master|master_heartbeat_period|master_ssl_verify_server_cert|masters|match|max|max_rows|maxvalue|message_text|middleint|migrate|min|min_rows|minute_microsecond|minute_second|mod|mode|modifies|modify|mutex|mysql_errno|natural|next|no|no_write_to_binlog|offline|offset|one|online|open|optimize|option|optionally|out|outer|outfile|pack_keys|parser|partition|partitions|password|phase|plugin|plugins|prepare|preserve|prev|primary|privileges|procedure|processlist|profile|profiles|purge|query|quick|range|read|read_write|reads|real|rebuild|recover|references|regexp|relaylog|release|remove|rename|reorganize|repair|repeatable|replace|require|resignal|restrict|resume|return|returns|revoke|right|rlike|rollback|rollup|row|row_format|rtree|savepoint|schedule|schema|schema_name|schemas|second_microsecond|security|sensitive|separator|serializable|server|session|share|show|signal|slave|slow|smallint|snapshot|soname|spatial|specific|sql|sql_big_result|sql_buffer_result|sql_cache|sql_calc_found_rows|sql_no_cache|sql_small_result|sqlexception|sqlstate|sqlwarning|ssl|start|starting|starts|status|std|stddev|stddev_pop|stddev_samp|storage|straight_join|subclass_origin|sum|suspend|table_name|table_statistics|tables|tablespace|temporary|terminated|to|trailing|transaction|trigger|triggers|truncate|uncommitted|undo|uninstall|unique|unlock|upgrade|usage|use|use_frm|user|user_resources|user_statistics|using|utc_date|utc_time|utc_timestamp|value|variables|varying|view|views|warnings|when|while|with|work|write|xa|xor|year_month|zerofill|begin|do|then|else|loop|repeat";
    var builtins = "by|bool|boolean|bit|blob|decimal|double|enum|float|long|longblob|longtext|medium|mediumblob|mediumint|mediumtext|time|timestamp|tinyblob|tinyint|tinytext|text|bigint|int|int1|int2|int3|int4|int8|integer|float|float4|float8|double|char|varbinary|varchar|varcharacter|precision|date|datetime|year|unsigned|signed|numeric|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl";
    var variable = "charset|clear|connect|edit|ego|exit|go|help|nopager|notee|nowarning|pager|print|prompt|quit|rehash|source|status|system|tee";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtins,
      "keyword": mySqlKeywords,
      "constant": "false|true|null|unknown|date|time|timestamp|ODBCdotTable|zerolessFloat",
      "variable.language": variable
    }, "identifier", true);
    function string(rule) {
      var start = rule.start;
      var escapeSeq = rule.escape;
      return {
        token: "string.start",
        regex: start,
        next: [{
          token: "constant.language.escape",
          regex: escapeSeq
        }, {
          token: "string.end",
          next: "start",
          regex: start
        }, {
          defaultToken: "string"
        }]
      };
    }
    this.$rules = {
      "start": [{
        token: "comment",
        regex: "(?:-- |#).*$"
      }, string({
        start: '"',
        escape: /\\[0'"bnrtZ\\%_]?/
      }), string({
        start: "'",
        escape: /\\[0'"bnrtZ\\%_]?/
      }), DocCommentHighlightRules.getStartRule("doc-start"), {
        token: "comment",
        // multi line comment
        regex: /\/\*/,
        next: "comment"
      }, {
        token: "constant.numeric",
        // hex
        regex: /0[xX][0-9a-fA-F]+|[xX]'[0-9a-fA-F]+'|0[bB][01]+|[bB]'[01]+'/
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "constant.class",
        regex: "@@?[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "constant.buildin",
        regex: "`[^`]*`"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }],
      "comment": [{
        token: "comment",
        regex: "\\*\\/",
        next: "start"
      }, {
        defaultToken: "comment"
      }]
    };
    this.embedRules(DocCommentHighlightRules, "doc-", [DocCommentHighlightRules.getEndRule("start")]);
    this.normalizeRules();
  };
  oop.inherits(MysqlHighlightRules, TextHighlightRules);
  exports.MysqlHighlightRules = MysqlHighlightRules;
});
ace.define("ace/mode/mysql", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/mysql_highlight_rules", "ace/range"], function (require, exports, module) {
  var oop = require("../lib/oop");
  var TextMode = require("../mode/text").Mode;
  var MysqlHighlightRules = require("./mysql_highlight_rules").MysqlHighlightRules;
  var Range = require("../range").Range;
  var Mode = function Mode() {
    this.HighlightRules = MysqlHighlightRules;
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = ["--", "#"]; // todo space
    this.blockComment = {
      start: "/*",
      end: "*/"
    };
    this.$id = "ace/mode/mysql";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-pgsql.js":
/*!***********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-pgsql.js ***!
  \***********************************************************/
/***/ (() => {

ace.define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var DocCommentHighlightRules = function DocCommentHighlightRules() {
    this.$rules = {
      "start": [{
        token: "comment.doc.tag",
        regex: "@[\\w\\d_]+" // TODO: fix email addresses
      }, DocCommentHighlightRules.getTagRule(), {
        defaultToken: "comment.doc",
        caseInsensitive: true
      }]
    };
  };
  oop.inherits(DocCommentHighlightRules, TextHighlightRules);
  DocCommentHighlightRules.getTagRule = function (start) {
    return {
      token: "comment.doc.tag.storage.type",
      regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
  };
  DocCommentHighlightRules.getStartRule = function (start) {
    return {
      token: "comment.doc",
      // doc comment
      regex: "\\/\\*(?=\\*)",
      next: start
    };
  };
  DocCommentHighlightRules.getEndRule = function (start) {
    return {
      token: "comment.doc",
      // closing comment
      regex: "\\*\\/",
      next: start
    };
  };
  exports.DocCommentHighlightRules = DocCommentHighlightRules;
});
ace.define("ace/mode/perl_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var PerlHighlightRules = function PerlHighlightRules() {
    var keywords = "base|constant|continue|else|elsif|for|foreach|format|goto|if|last|local|my|next|" + "no|package|parent|redo|require|scalar|sub|unless|until|while|use|vars";
    var buildinConstants = "ARGV|ENV|INC|SIG";
    var builtinFunctions = "getprotobynumber|getprotobyname|getservbyname|gethostbyaddr|" + "gethostbyname|getservbyport|getnetbyaddr|getnetbyname|getsockname|" + "getpeername|setpriority|getprotoent|setprotoent|getpriority|" + "endprotoent|getservent|setservent|endservent|sethostent|socketpair|" + "getsockopt|gethostent|endhostent|setsockopt|setnetent|quotemeta|" + "localtime|prototype|getnetent|endnetent|rewinddir|wantarray|getpwuid|" + "closedir|getlogin|readlink|endgrent|getgrgid|getgrnam|shmwrite|" + "shutdown|readline|endpwent|setgrent|readpipe|formline|truncate|" + "dbmclose|syswrite|setpwent|getpwnam|getgrent|getpwent|ucfirst|sysread|" + "setpgrp|shmread|sysseek|sysopen|telldir|defined|opendir|connect|" + "lcfirst|getppid|binmode|syscall|sprintf|getpgrp|readdir|seekdir|" + "waitpid|reverse|unshift|symlink|dbmopen|semget|msgrcv|rename|listen|" + "chroot|msgsnd|shmctl|accept|unpack|exists|fileno|shmget|system|" + "unlink|printf|gmtime|msgctl|semctl|values|rindex|substr|splice|" + "length|msgget|select|socket|return|caller|delete|alarm|ioctl|index|" + "undef|lstat|times|srand|chown|fcntl|close|write|umask|rmdir|study|" + "sleep|chomp|untie|print|utime|mkdir|atan2|split|crypt|flock|chmod|" + "BEGIN|bless|chdir|semop|shift|reset|link|stat|chop|grep|fork|dump|" + "join|open|tell|pipe|exit|glob|warn|each|bind|sort|pack|eval|push|" + "keys|getc|kill|seek|sqrt|send|wait|rand|tied|read|time|exec|recv|" + "eof|chr|int|ord|exp|pos|pop|sin|log|abs|oct|hex|tie|cos|vec|END|ref|" + "map|die|uc|lc|do";
    var keywordMapper = this.createKeywordMapper({
      "keyword": keywords,
      "constant.language": buildinConstants,
      "support.function": builtinFunctions
    }, "identifier");
    this.$rules = {
      "start": [{
        token: "comment.doc",
        regex: "^=(?:begin|item)\\b",
        next: "block_comment"
      }, {
        token: "string.regexp",
        regex: "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
      }, {
        token: "string",
        // single line
        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
      }, {
        token: "string",
        // multi line string start
        regex: '["].*\\\\$',
        next: "qqstring"
      }, {
        token: "string",
        // single line
        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
      }, {
        token: "string",
        // multi line string start
        regex: "['].*\\\\$",
        next: "qstring"
      }, {
        token: "constant.numeric",
        // hex
        regex: "0x[0-9a-fA-F]+\\b"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "%#|\\$#|\\.\\.\\.|\\|\\|=|>>=|<<=|<=>|&&=|=>|!~|\\^=|&=|\\|=|\\.=|x=|%=|\\/=|\\*=|\\-=|\\+=|=~|\\*\\*|\\-\\-|\\.\\.|\\|\\||&&|\\+\\+|\\->|!=|==|>=|<=|>>|<<|,|=|\\?\\:|\\^|\\||x|%|\\/|\\*|<|&|\\\\|~|!|>|\\.|\\-|\\+|\\-C|\\-b|\\-S|\\-u|\\-t|\\-p|\\-l|\\-d|\\-f|\\-g|\\-s|\\-z|\\-k|\\-e|\\-O|\\-T|\\-B|\\-M|\\-A|\\-X|\\-W|\\-c|\\-R|\\-o|\\-x|\\-w|\\-r|\\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)"
      }, {
        token: "comment",
        regex: "#.*$"
      }, {
        token: "lparen",
        regex: "[[({]"
      }, {
        token: "rparen",
        regex: "[\\])}]"
      }, {
        token: "text",
        regex: "\\s+"
      }],
      "qqstring": [{
        token: "string",
        regex: '(?:(?:\\\\.)|(?:[^"\\\\]))*?"',
        next: "start"
      }, {
        token: "string",
        regex: '.+'
      }],
      "qstring": [{
        token: "string",
        regex: "(?:(?:\\\\.)|(?:[^'\\\\]))*?'",
        next: "start"
      }, {
        token: "string",
        regex: '.+'
      }],
      "block_comment": [{
        token: "comment.doc",
        regex: "^=cut\\b",
        next: "start"
      }, {
        defaultToken: "comment.doc"
      }]
    };
  };
  oop.inherits(PerlHighlightRules, TextHighlightRules);
  exports.PerlHighlightRules = PerlHighlightRules;
});
ace.define("ace/mode/python_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var PythonHighlightRules = function PythonHighlightRules() {
    var keywords = "and|as|assert|break|class|continue|def|del|elif|else|except|exec|" + "finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|" + "raise|return|try|while|with|yield";
    var builtinConstants = "True|False|None|NotImplemented|Ellipsis|__debug__";
    var builtinFunctions = "abs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|" + "eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super|" + "binfile|iter|property|tuple|bool|filter|len|range|type|bytearray|" + "float|list|raw_input|unichr|callable|format|locals|reduce|unicode|" + "chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|" + "cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round|" + "__import__|complex|hash|min|set|apply|delattr|help|next|setattr|" + "buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern";
    var keywordMapper = this.createKeywordMapper({
      "invalid.deprecated": "debugger",
      "support.function": builtinFunctions,
      "constant.language": builtinConstants,
      "keyword": keywords
    }, "identifier");
    var strPre = "(?:r|u|ur|R|U|UR|Ur|uR)?";
    var decimalInteger = "(?:(?:[1-9]\\d*)|(?:0))";
    var octInteger = "(?:0[oO]?[0-7]+)";
    var hexInteger = "(?:0[xX][\\dA-Fa-f]+)";
    var binInteger = "(?:0[bB][01]+)";
    var integer = "(?:" + decimalInteger + "|" + octInteger + "|" + hexInteger + "|" + binInteger + ")";
    var exponent = "(?:[eE][+-]?\\d+)";
    var fraction = "(?:\\.\\d+)";
    var intPart = "(?:\\d+)";
    var pointFloat = "(?:(?:" + intPart + "?" + fraction + ")|(?:" + intPart + "\\.))";
    var exponentFloat = "(?:(?:" + pointFloat + "|" + intPart + ")" + exponent + ")";
    var floatNumber = "(?:" + exponentFloat + "|" + pointFloat + ")";
    var stringEscape = "\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'\"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})";
    this.$rules = {
      "start": [{
        token: "comment",
        regex: "#.*$"
      }, {
        token: "string",
        // multi line """ string start
        regex: strPre + '"{3}',
        next: "qqstring3"
      }, {
        token: "string",
        // " string
        regex: strPre + '"(?=.)',
        next: "qqstring"
      }, {
        token: "string",
        // multi line ''' string start
        regex: strPre + "'{3}",
        next: "qstring3"
      }, {
        token: "string",
        // ' string
        regex: strPre + "'(?=.)",
        next: "qstring"
      }, {
        token: "constant.numeric",
        // imaginary
        regex: "(?:" + floatNumber + "|\\d+)[jJ]\\b"
      }, {
        token: "constant.numeric",
        // float
        regex: floatNumber
      }, {
        token: "constant.numeric",
        // long integer
        regex: integer + "[lL]\\b"
      }, {
        token: "constant.numeric",
        // integer
        regex: integer + "\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\[\\(\\{]"
      }, {
        token: "paren.rparen",
        regex: "[\\]\\)\\}]"
      }, {
        token: "text",
        regex: "\\s+"
      }],
      "qqstring3": [{
        token: "constant.language.escape",
        regex: stringEscape
      }, {
        token: "string",
        // multi line """ string end
        regex: '"{3}',
        next: "start"
      }, {
        defaultToken: "string"
      }],
      "qstring3": [{
        token: "constant.language.escape",
        regex: stringEscape
      }, {
        token: "string",
        // multi line ''' string end
        regex: "'{3}",
        next: "start"
      }, {
        defaultToken: "string"
      }],
      "qqstring": [{
        token: "constant.language.escape",
        regex: stringEscape
      }, {
        token: "string",
        regex: "\\\\$",
        next: "qqstring"
      }, {
        token: "string",
        regex: '"|$',
        next: "start"
      }, {
        defaultToken: "string"
      }],
      "qstring": [{
        token: "constant.language.escape",
        regex: stringEscape
      }, {
        token: "string",
        regex: "\\\\$",
        next: "qstring"
      }, {
        token: "string",
        regex: "'|$",
        next: "start"
      }, {
        defaultToken: "string"
      }]
    };
  };
  oop.inherits(PythonHighlightRules, TextHighlightRules);
  exports.PythonHighlightRules = PythonHighlightRules;
});
ace.define("ace/mode/json_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var JsonHighlightRules = function JsonHighlightRules() {
    this.$rules = {
      "start": [{
        token: "variable",
        // single line
        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'
      }, {
        token: "string",
        // single line
        regex: '"',
        next: "string"
      }, {
        token: "constant.numeric",
        // hex
        regex: "0[xX][0-9a-fA-F]+\\b"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: "constant.language.boolean",
        regex: "(?:true|false)\\b"
      }, {
        token: "invalid.illegal",
        // single quoted strings are not allowed
        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
      }, {
        token: "invalid.illegal",
        // comments are not allowed
        regex: "\\/\\/.*$"
      }, {
        token: "paren.lparen",
        regex: "[[({]"
      }, {
        token: "paren.rparen",
        regex: "[\\])}]"
      }, {
        token: "text",
        regex: "\\s+"
      }],
      "string": [{
        token: "constant.language.escape",
        regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/
      }, {
        token: "string",
        regex: '[^"\\\\]+'
      }, {
        token: "string",
        regex: '"',
        next: "start"
      }, {
        token: "string",
        regex: "",
        next: "start"
      }]
    };
  };
  oop.inherits(JsonHighlightRules, TextHighlightRules);
  exports.JsonHighlightRules = JsonHighlightRules;
});
ace.define("ace/mode/javascript_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var DocCommentHighlightRules = require("./doc_comment_highlight_rules").DocCommentHighlightRules;
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var identifierRe = "[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*\\b";
  var JavaScriptHighlightRules = function JavaScriptHighlightRules(options) {
    var keywordMapper = this.createKeywordMapper({
      "variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|" +
      // Constructors
      "Namespace|QName|XML|XMLList|" +
      // E4X
      "ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|" + "Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|" + "Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|" +
      // Errors
      "SyntaxError|TypeError|URIError|" + "decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|" +
      // Non-constructor functions
      "isNaN|parseFloat|parseInt|" + "JSON|Math|" +
      // Other
      "this|arguments|prototype|window|document",
      // Pseudo
      "keyword": "const|yield|import|get|set|" + "break|case|catch|continue|default|delete|do|else|finally|for|function|" + "if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|" + "__parent__|__count__|escape|unescape|with|__proto__|" + "class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
      "storage.type": "const|let|var|function",
      "constant.language": "null|Infinity|NaN|undefined",
      "support.function": "alert",
      "constant.language.boolean": "true|false"
    }, "identifier");
    var kwBeforeRe = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void";
    var escapedRe = "\\\\(?:x[0-9a-fA-F]{2}|" +
    // hex
    "u[0-9a-fA-F]{4}|" +
    // unicode
    "u{[0-9a-fA-F]{1,6}}|" +
    // es6 unicode
    "[0-2][0-7]{0,2}|" +
    // oct
    "3[0-7][0-7]?|" +
    // oct
    "[4-7][0-7]?|" +
    //oct
    ".)";
    this.$rules = {
      "no_regex": [DocCommentHighlightRules.getStartRule("doc-start"), comments("no_regex"), {
        token: "string",
        regex: "'(?=.)",
        next: "qstring"
      }, {
        token: "string",
        regex: '"(?=.)',
        next: "qqstring"
      }, {
        token: "constant.numeric",
        // hex
        regex: /0(?:[xX][0-9a-fA-F]+|[bB][01]+)\b/
      }, {
        token: "constant.numeric",
        // float
        regex: /[+-]?\d[\d_]*(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/
      }, {
        token: ["storage.type", "punctuation.operator", "support.function", "punctuation.operator", "entity.name.function", "text", "keyword.operator"],
        regex: "(" + identifierRe + ")(\\.)(prototype)(\\.)(" + identifierRe + ")(\\s*)(=)",
        next: "function_arguments"
      }, {
        token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"],
        regex: "(" + identifierRe + ")(\\.)(" + identifierRe + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: ["entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"],
        regex: "(" + identifierRe + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen"],
        regex: "(" + identifierRe + ")(\\.)(" + identifierRe + ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: ["storage.type", "text", "entity.name.function", "text", "paren.lparen"],
        regex: "(function)(\\s+)(" + identifierRe + ")(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: ["entity.name.function", "text", "punctuation.operator", "text", "storage.type", "text", "paren.lparen"],
        regex: "(" + identifierRe + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: ["text", "text", "storage.type", "text", "paren.lparen"],
        regex: "(:)(\\s*)(function)(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: "keyword",
        regex: "(?:" + kwBeforeRe + ")\\b",
        next: "start"
      }, {
        token: ["support.constant"],
        regex: /that\b/
      }, {
        token: ["storage.type", "punctuation.operator", "support.function.firebug"],
        regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
      }, {
        token: keywordMapper,
        regex: identifierRe
      }, {
        token: "punctuation.operator",
        regex: /[.](?![.])/,
        next: "property"
      }, {
        token: "keyword.operator",
        regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?\:|[!$%&*+\-~\/^]=?/,
        next: "start"
      }, {
        token: "punctuation.operator",
        regex: /[?:,;.]/,
        next: "start"
      }, {
        token: "paren.lparen",
        regex: /[\[({]/,
        next: "start"
      }, {
        token: "paren.rparen",
        regex: /[\])}]/
      }, {
        token: "comment",
        regex: /^#!.*$/
      }],
      property: [{
        token: "text",
        regex: "\\s+"
      }, {
        token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen"],
        regex: "(" + identifierRe + ")(\\.)(" + identifierRe + ")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
        next: "function_arguments"
      }, {
        token: "punctuation.operator",
        regex: /[.](?![.])/
      }, {
        token: "support.function",
        regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
      }, {
        token: "support.function.dom",
        regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
      }, {
        token: "support.constant",
        regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
      }, {
        token: "identifier",
        regex: identifierRe
      }, {
        regex: "",
        token: "empty",
        next: "no_regex"
      }],
      "start": [DocCommentHighlightRules.getStartRule("doc-start"), comments("start"), {
        token: "string.regexp",
        regex: "\\/",
        next: "regex"
      }, {
        token: "text",
        regex: "\\s+|^$",
        next: "start"
      }, {
        token: "empty",
        regex: "",
        next: "no_regex"
      }],
      "regex": [{
        token: "regexp.keyword.operator",
        regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
      }, {
        token: "string.regexp",
        regex: "/[sxngimy]*",
        next: "no_regex"
      }, {
        token: "invalid",
        regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
      }, {
        token: "constant.language.escape",
        regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
      }, {
        token: "constant.language.delimiter",
        regex: /\|/
      }, {
        token: "constant.language.escape",
        regex: /\[\^?/,
        next: "regex_character_class"
      }, {
        token: "empty",
        regex: "$",
        next: "no_regex"
      }, {
        defaultToken: "string.regexp"
      }],
      "regex_character_class": [{
        token: "regexp.charclass.keyword.operator",
        regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
      }, {
        token: "constant.language.escape",
        regex: "]",
        next: "regex"
      }, {
        token: "constant.language.escape",
        regex: "-"
      }, {
        token: "empty",
        regex: "$",
        next: "no_regex"
      }, {
        defaultToken: "string.regexp.charachterclass"
      }],
      "function_arguments": [{
        token: "variable.parameter",
        regex: identifierRe
      }, {
        token: "punctuation.operator",
        regex: "[, ]+"
      }, {
        token: "punctuation.operator",
        regex: "$"
      }, {
        token: "empty",
        regex: "",
        next: "no_regex"
      }],
      "qqstring": [{
        token: "constant.language.escape",
        regex: escapedRe
      }, {
        token: "string",
        regex: "\\\\$",
        next: "qqstring"
      }, {
        token: "string",
        regex: '"|$',
        next: "no_regex"
      }, {
        defaultToken: "string"
      }],
      "qstring": [{
        token: "constant.language.escape",
        regex: escapedRe
      }, {
        token: "string",
        regex: "\\\\$",
        next: "qstring"
      }, {
        token: "string",
        regex: "'|$",
        next: "no_regex"
      }, {
        defaultToken: "string"
      }]
    };
    if (!options || !options.noES6) {
      this.$rules.no_regex.unshift({
        regex: "[{}]",
        onMatch: function onMatch(val, state, stack) {
          this.next = val == "{" ? this.nextState : "";
          if (val == "{" && stack.length) {
            stack.unshift("start", state);
            return "paren";
          }
          if (val == "}" && stack.length) {
            stack.shift();
            this.next = stack.shift();
            if (this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1) return "paren.quasi.end";
          }
          return val == "{" ? "paren.lparen" : "paren.rparen";
        },
        nextState: "start"
      }, {
        token: "string.quasi.start",
        regex: /`/,
        push: [{
          token: "constant.language.escape",
          regex: escapedRe
        }, {
          token: "paren.quasi.start",
          regex: /\${/,
          push: "start"
        }, {
          token: "string.quasi.end",
          regex: /`/,
          next: "pop"
        }, {
          defaultToken: "string.quasi"
        }]
      });
      if (!options || !options.noJSX) JSX.call(this);
    }
    this.embedRules(DocCommentHighlightRules, "doc-", [DocCommentHighlightRules.getEndRule("no_regex")]);
    this.normalizeRules();
  };
  oop.inherits(JavaScriptHighlightRules, TextHighlightRules);
  function JSX() {
    var tagRegex = identifierRe.replace("\\d", "\\d\\-");
    var jsxTag = {
      onMatch: function onMatch(val, state, stack) {
        var offset = val.charAt(1) == "/" ? 2 : 1;
        if (offset == 1) {
          if (state != this.nextState) stack.unshift(this.next, this.nextState, 0);else stack.unshift(this.next);
          stack[2]++;
        } else if (offset == 2) {
          if (state == this.nextState) {
            stack[1]--;
            if (!stack[1] || stack[1] < 0) {
              stack.shift();
              stack.shift();
            }
          }
        }
        return [{
          type: "meta.tag.punctuation." + (offset == 1 ? "" : "end-") + "tag-open.xml",
          value: val.slice(0, offset)
        }, {
          type: "meta.tag.tag-name.xml",
          value: val.substr(offset)
        }];
      },
      regex: "</?" + tagRegex + "",
      next: "jsxAttributes",
      nextState: "jsx"
    };
    this.$rules.start.unshift(jsxTag);
    var jsxJsRule = {
      regex: "{",
      token: "paren.quasi.start",
      push: "start"
    };
    this.$rules.jsx = [jsxJsRule, jsxTag, {
      include: "reference"
    }, {
      defaultToken: "string"
    }];
    this.$rules.jsxAttributes = [{
      token: "meta.tag.punctuation.tag-close.xml",
      regex: "/?>",
      onMatch: function onMatch(value, currentState, stack) {
        if (currentState == stack[0]) stack.shift();
        if (value.length == 2) {
          if (stack[0] == this.nextState) stack[1]--;
          if (!stack[1] || stack[1] < 0) {
            stack.splice(0, 2);
          }
        }
        this.next = stack[0] || "start";
        return [{
          type: this.token,
          value: value
        }];
      },
      nextState: "jsx"
    }, jsxJsRule, comments("jsxAttributes"), {
      token: "entity.other.attribute-name.xml",
      regex: tagRegex
    }, {
      token: "keyword.operator.attribute-equals.xml",
      regex: "="
    }, {
      token: "text.tag-whitespace.xml",
      regex: "\\s+"
    }, {
      token: "string.attribute-value.xml",
      regex: "'",
      stateName: "jsx_attr_q",
      push: [{
        token: "string.attribute-value.xml",
        regex: "'",
        next: "pop"
      }, jsxJsRule, {
        include: "reference"
      }, {
        defaultToken: "string.attribute-value.xml"
      }]
    }, {
      token: "string.attribute-value.xml",
      regex: '"',
      stateName: "jsx_attr_qq",
      push: [jsxJsRule, {
        token: "string.attribute-value.xml",
        regex: '"',
        next: "pop"
      }, {
        include: "reference"
      }, {
        defaultToken: "string.attribute-value.xml"
      }]
    }];
    this.$rules.reference = [{
      token: "constant.language.escape.reference.xml",
      regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
    }];
  }
  function comments(next) {
    return [{
      token: "comment",
      // multi line comment
      regex: /\/\*/,
      next: [DocCommentHighlightRules.getTagRule(), {
        token: "comment",
        regex: "\\*\\/",
        next: next || "pop"
      }, {
        defaultToken: "comment",
        caseInsensitive: true
      }]
    }, {
      token: "comment",
      regex: "\\/\\/",
      next: [DocCommentHighlightRules.getTagRule(), {
        token: "comment",
        regex: "$|^",
        next: next || "pop"
      }, {
        defaultToken: "comment",
        caseInsensitive: true
      }]
    }];
  }
  exports.JavaScriptHighlightRules = JavaScriptHighlightRules;
});
ace.define("ace/mode/pgsql_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules", "ace/mode/perl_highlight_rules", "ace/mode/python_highlight_rules", "ace/mode/json_highlight_rules", "ace/mode/javascript_highlight_rules"], function (require, exports, module) {
  var oop = require("../lib/oop");
  var lang = require("../lib/lang");
  var DocCommentHighlightRules = require("./doc_comment_highlight_rules").DocCommentHighlightRules;
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var PerlHighlightRules = require("./perl_highlight_rules").PerlHighlightRules;
  var PythonHighlightRules = require("./python_highlight_rules").PythonHighlightRules;
  var JsonHighlightRules = require("./json_highlight_rules").JsonHighlightRules;
  var JavaScriptHighlightRules = require("./javascript_highlight_rules").JavaScriptHighlightRules;
  var PgsqlHighlightRules = function PgsqlHighlightRules() {
    var keywords = "abort|absolute|abstime|access|aclitem|action|add|admin|after|aggregate|all|also|alter|always|" + "analyse|analyze|and|any|anyarray|anyelement|anyenum|anynonarray|anyrange|array|as|asc|" + "assertion|assignment|asymmetric|at|attribute|authorization|backward|before|begin|between|" + "bigint|binary|bit|bool|boolean|both|box|bpchar|by|bytea|cache|called|cascade|cascaded|case|cast|" + "catalog|chain|char|character|characteristics|check|checkpoint|cid|cidr|circle|class|close|" + "cluster|coalesce|collate|collation|column|comment|comments|commit|committed|concurrently|" + "configuration|connection|constraint|constraints|content|continue|conversion|copy|cost|" + "create|cross|cstring|csv|current|current_catalog|current_date|current_role|" + "current_schema|current_time|current_timestamp|current_user|cursor|cycle|data|database|" + "date|daterange|day|deallocate|dec|decimal|declare|default|defaults|deferrable|deferred|" + "definer|delete|delimiter|delimiters|desc|dictionary|disable|discard|distinct|do|document|" + "domain|double|drop|each|else|enable|encoding|encrypted|end|enum|escape|event|event_trigger|" + "except|exclude|excluding|exclusive|execute|exists|explain|extension|external|extract|false|" + "family|fdw_handler|fetch|first|float|float4|float8|following|for|force|foreign|forward|" + "freeze|from|full|function|functions|global|grant|granted|greatest|group|gtsvector|handler|" + "having|header|hold|hour|identity|if|ilike|immediate|immutable|implicit|in|including|" + "increment|index|indexes|inet|inherit|inherits|initially|inline|inner|inout|input|" + "insensitive|insert|instead|int|int2|int2vector|int4|int4range|int8|int8range|integer|" + "internal|intersect|interval|into|invoker|is|isnull|isolation|join|json|key|label|language|" + "language_handler|large|last|lateral|lc_collate|lc_ctype|leading|leakproof|least|left|level|" + "like|limit|line|listen|load|local|localtime|localtimestamp|location|lock|lseg|macaddr|" + "mapping|match|materialized|maxvalue|minute|minvalue|mode|money|month|move|name|names|" + "national|natural|nchar|next|no|none|not|nothing|notify|notnull|nowait|null|nullif|nulls|" + "numeric|numrange|object|of|off|offset|oid|oids|oidvector|on|only|opaque|operator|option|" + "options|or|order|out|outer|over|overlaps|overlay|owned|owner|parser|partial|partition|passing|" + "password|path|pg_attribute|pg_auth_members|pg_authid|pg_class|pg_database|pg_node_tree|" + "pg_proc|pg_type|placing|plans|point|polygon|position|preceding|precision|prepare|prepared|" + "preserve|primary|prior|privileges|procedural|procedure|program|quote|range|read|real|" + "reassign|recheck|record|recursive|ref|refcursor|references|refresh|regclass|regconfig|" + "regdictionary|regoper|regoperator|regproc|regprocedure|regtype|reindex|relative|release|" + "reltime|rename|repeatable|replace|replica|reset|restart|restrict|returning|returns|revoke|" + "right|role|rollback|row|rows|rule|savepoint|schema|scroll|search|second|security|select|" + "sequence|sequences|serializable|server|session|session_user|set|setof|share|show|similar|" + "simple|smallint|smgr|snapshot|some|stable|standalone|start|statement|statistics|stdin|" + "stdout|storage|strict|strip|substring|symmetric|sysid|system|table|tables|tablespace|temp|" + "template|temporary|text|then|tid|time|timestamp|timestamptz|timetz|tinterval|to|trailing|" + "transaction|treat|trigger|trim|true|truncate|trusted|tsquery|tsrange|tstzrange|tsvector|" + "txid_snapshot|type|types|unbounded|uncommitted|unencrypted|union|unique|unknown|unlisten|" + "unlogged|until|update|user|using|uuid|vacuum|valid|validate|validator|value|values|varbit|" + "varchar|variadic|varying|verbose|version|view|void|volatile|when|where|whitespace|window|" + "with|without|work|wrapper|write|xid|xml|xmlattributes|xmlconcat|xmlelement|xmlexists|" + "xmlforest|xmlparse|xmlpi|xmlroot|xmlserialize|year|yes|zone";
    var builtinFunctions = "RI_FKey_cascade_del|RI_FKey_cascade_upd|RI_FKey_check_ins|RI_FKey_check_upd|" + "RI_FKey_noaction_del|RI_FKey_noaction_upd|RI_FKey_restrict_del|RI_FKey_restrict_upd|" + "RI_FKey_setdefault_del|RI_FKey_setdefault_upd|RI_FKey_setnull_del|" + "RI_FKey_setnull_upd|abbrev|abs|abstime|abstimeeq|abstimege|abstimegt|abstimein|abstimele|" + "abstimelt|abstimene|abstimeout|abstimerecv|abstimesend|aclcontains|acldefault|" + "aclexplode|aclinsert|aclitemeq|aclitemin|aclitemout|aclremove|acos|age|any_in|any_out|" + "anyarray_in|anyarray_out|anyarray_recv|anyarray_send|anyelement_in|anyelement_out|" + "anyenum_in|anyenum_out|anynonarray_in|anynonarray_out|anyrange_in|anyrange_out|" + "anytextcat|area|areajoinsel|areasel|array_agg|array_agg_finalfn|array_agg_transfn|" + "array_append|array_cat|array_dims|array_eq|array_fill|array_ge|array_gt|array_in|" + "array_larger|array_le|array_length|array_lower|array_lt|array_ndims|array_ne|array_out|" + "array_prepend|array_recv|array_remove|array_replace|array_send|array_smaller|" + "array_to_json|array_to_string|array_typanalyze|array_upper|arraycontained|" + "arraycontains|arraycontjoinsel|arraycontsel|arrayoverlap|ascii|ascii_to_mic|" + "ascii_to_utf8|asin|atan|atan2|avg|big5_to_euc_tw|big5_to_mic|big5_to_utf8|bit_and|bit_in|" + "bit_length|bit_or|bit_out|bit_recv|bit_send|bitand|bitcat|bitcmp|biteq|bitge|bitgt|bitle|" + "bitlt|bitne|bitnot|bitor|bitshiftleft|bitshiftright|bittypmodin|bittypmodout|bitxor|bool|" + "bool_and|bool_or|booland_statefunc|booleq|boolge|boolgt|boolin|boolle|boollt|boolne|" + "boolor_statefunc|boolout|boolrecv|boolsend|box|box_above|box_above_eq|box_add|box_below|" + "box_below_eq|box_center|box_contain|box_contain_pt|box_contained|box_distance|box_div|" + "box_eq|box_ge|box_gt|box_in|box_intersect|box_le|box_left|box_lt|box_mul|box_out|" + "box_overabove|box_overbelow|box_overlap|box_overleft|box_overright|box_recv|box_right|" + "box_same|box_send|box_sub|bpchar_larger|bpchar_pattern_ge|bpchar_pattern_gt|" + "bpchar_pattern_le|bpchar_pattern_lt|bpchar_smaller|bpcharcmp|bpchareq|bpcharge|" + "bpchargt|bpchariclike|bpcharicnlike|bpcharicregexeq|bpcharicregexne|bpcharin|bpcharle|" + "bpcharlike|bpcharlt|bpcharne|bpcharnlike|bpcharout|bpcharrecv|bpcharregexeq|" + "bpcharregexne|bpcharsend|bpchartypmodin|bpchartypmodout|broadcast|btabstimecmp|" + "btarraycmp|btbeginscan|btboolcmp|btbpchar_pattern_cmp|btbuild|btbuildempty|" + "btbulkdelete|btcanreturn|btcharcmp|btcostestimate|btendscan|btfloat48cmp|btfloat4cmp|" + "btfloat4sortsupport|btfloat84cmp|btfloat8cmp|btfloat8sortsupport|btgetbitmap|" + "btgettuple|btinsert|btint24cmp|btint28cmp|btint2cmp|btint2sortsupport|btint42cmp|" + "btint48cmp|btint4cmp|btint4sortsupport|btint82cmp|btint84cmp|btint8cmp|" + "btint8sortsupport|btmarkpos|btnamecmp|btnamesortsupport|btoidcmp|btoidsortsupport|" + "btoidvectorcmp|btoptions|btrecordcmp|btreltimecmp|btrescan|btrestrpos|btrim|" + "bttext_pattern_cmp|bttextcmp|bttidcmp|bttintervalcmp|btvacuumcleanup|" + "bytea_string_agg_finalfn|bytea_string_agg_transfn|byteacat|byteacmp|byteaeq|byteage|" + "byteagt|byteain|byteale|bytealike|bytealt|byteane|byteanlike|byteaout|bytearecv|byteasend|" + "cash_cmp|cash_div_cash|cash_div_flt4|cash_div_flt8|cash_div_int2|cash_div_int4|cash_eq|" + "cash_ge|cash_gt|cash_in|cash_le|cash_lt|cash_mi|cash_mul_flt4|cash_mul_flt8|" + "cash_mul_int2|cash_mul_int4|cash_ne|cash_out|cash_pl|cash_recv|cash_send|cash_words|" + "cashlarger|cashsmaller|cbrt|ceil|ceiling|center|char|char_length|character_length|chareq|" + "charge|chargt|charin|charle|charlt|charne|charout|charrecv|charsend|chr|cideq|cidin|cidout|" + "cidr|cidr_in|cidr_out|cidr_recv|cidr_send|cidrecv|cidsend|circle|circle_above|" + "circle_add_pt|circle_below|circle_center|circle_contain|circle_contain_pt|" + "circle_contained|circle_distance|circle_div_pt|circle_eq|circle_ge|circle_gt|circle_in|" + "circle_le|circle_left|circle_lt|circle_mul_pt|circle_ne|circle_out|circle_overabove|" + "circle_overbelow|circle_overlap|circle_overleft|circle_overright|circle_recv|" + "circle_right|circle_same|circle_send|circle_sub_pt|clock_timestamp|close_lb|close_ls|" + "close_lseg|close_pb|close_pl|close_ps|close_sb|close_sl|col_description|concat|concat_ws|" + "contjoinsel|contsel|convert|convert_from|convert_to|corr|cos|cot|count|covar_pop|" + "covar_samp|cstring_in|cstring_out|cstring_recv|cstring_send|cume_dist|current_database|" + "current_query|current_schema|current_schemas|current_setting|current_user|currtid|" + "currtid2|currval|cursor_to_xml|cursor_to_xmlschema|database_to_xml|" + "database_to_xml_and_xmlschema|database_to_xmlschema|date|date_cmp|date_cmp_timestamp|" + "date_cmp_timestamptz|date_eq|date_eq_timestamp|date_eq_timestamptz|date_ge|" + "date_ge_timestamp|date_ge_timestamptz|date_gt|date_gt_timestamp|date_gt_timestamptz|" + "date_in|date_larger|date_le|date_le_timestamp|date_le_timestamptz|date_lt|" + "date_lt_timestamp|date_lt_timestamptz|date_mi|date_mi_interval|date_mii|date_ne|" + "date_ne_timestamp|date_ne_timestamptz|date_out|date_part|date_pl_interval|date_pli|" + "date_recv|date_send|date_smaller|date_sortsupport|date_trunc|daterange|" + "daterange_canonical|daterange_subdiff|datetime_pl|datetimetz_pl|dcbrt|decode|degrees|" + "dense_rank|dexp|diagonal|diameter|dispell_init|dispell_lexize|dist_cpoly|dist_lb|dist_pb|" + "dist_pc|dist_pl|dist_ppath|dist_ps|dist_sb|dist_sl|div|dlog1|dlog10|domain_in|domain_recv|" + "dpow|dround|dsimple_init|dsimple_lexize|dsnowball_init|dsnowball_lexize|dsqrt|" + "dsynonym_init|dsynonym_lexize|dtrunc|elem_contained_by_range|encode|enum_cmp|enum_eq|" + "enum_first|enum_ge|enum_gt|enum_in|enum_larger|enum_last|enum_le|enum_lt|enum_ne|enum_out|" + "enum_range|enum_recv|enum_send|enum_smaller|eqjoinsel|eqsel|euc_cn_to_mic|" + "euc_cn_to_utf8|euc_jis_2004_to_shift_jis_2004|euc_jis_2004_to_utf8|euc_jp_to_mic|" + "euc_jp_to_sjis|euc_jp_to_utf8|euc_kr_to_mic|euc_kr_to_utf8|euc_tw_to_big5|" + "euc_tw_to_mic|euc_tw_to_utf8|event_trigger_in|event_trigger_out|every|exp|factorial|" + "family|fdw_handler_in|fdw_handler_out|first_value|float4|float48div|float48eq|float48ge|" + "float48gt|float48le|float48lt|float48mi|float48mul|float48ne|float48pl|float4_accum|" + "float4abs|float4div|float4eq|float4ge|float4gt|float4in|float4larger|float4le|float4lt|" + "float4mi|float4mul|float4ne|float4out|float4pl|float4recv|float4send|float4smaller|" + "float4um|float4up|float8|float84div|float84eq|float84ge|float84gt|float84le|float84lt|" + "float84mi|float84mul|float84ne|float84pl|float8_accum|float8_avg|float8_corr|" + "float8_covar_pop|float8_covar_samp|float8_regr_accum|float8_regr_avgx|" + "float8_regr_avgy|float8_regr_intercept|float8_regr_r2|float8_regr_slope|" + "float8_regr_sxx|float8_regr_sxy|float8_regr_syy|float8_stddev_pop|float8_stddev_samp|" + "float8_var_pop|float8_var_samp|float8abs|float8div|float8eq|float8ge|float8gt|float8in|" + "float8larger|float8le|float8lt|float8mi|float8mul|float8ne|float8out|float8pl|float8recv|" + "float8send|float8smaller|float8um|float8up|floor|flt4_mul_cash|flt8_mul_cash|" + "fmgr_c_validator|fmgr_internal_validator|fmgr_sql_validator|format|format_type|" + "gb18030_to_utf8|gbk_to_utf8|generate_series|generate_subscripts|get_bit|get_byte|" + "get_current_ts_config|getdatabaseencoding|getpgusername|gin_cmp_prefix|" + "gin_cmp_tslexeme|gin_extract_tsquery|gin_extract_tsvector|gin_tsquery_consistent|" + "ginarrayconsistent|ginarrayextract|ginbeginscan|ginbuild|ginbuildempty|ginbulkdelete|" + "gincostestimate|ginendscan|gingetbitmap|gininsert|ginmarkpos|ginoptions|" + "ginqueryarrayextract|ginrescan|ginrestrpos|ginvacuumcleanup|gist_box_compress|" + "gist_box_consistent|gist_box_decompress|gist_box_penalty|gist_box_picksplit|" + "gist_box_same|gist_box_union|gist_circle_compress|gist_circle_consistent|" + "gist_point_compress|gist_point_consistent|gist_point_distance|gist_poly_compress|" + "gist_poly_consistent|gistbeginscan|gistbuild|gistbuildempty|gistbulkdelete|" + "gistcostestimate|gistendscan|gistgetbitmap|gistgettuple|gistinsert|gistmarkpos|" + "gistoptions|gistrescan|gistrestrpos|gistvacuumcleanup|gtsquery_compress|" + "gtsquery_consistent|gtsquery_decompress|gtsquery_penalty|gtsquery_picksplit|" + "gtsquery_same|gtsquery_union|gtsvector_compress|gtsvector_consistent|" + "gtsvector_decompress|gtsvector_penalty|gtsvector_picksplit|gtsvector_same|" + "gtsvector_union|gtsvectorin|gtsvectorout|has_any_column_privilege|" + "has_column_privilege|has_database_privilege|has_foreign_data_wrapper_privilege|" + "has_function_privilege|has_language_privilege|has_schema_privilege|" + "has_sequence_privilege|has_server_privilege|has_table_privilege|" + "has_tablespace_privilege|has_type_privilege|hash_aclitem|hash_array|hash_numeric|" + "hash_range|hashbeginscan|hashbpchar|hashbuild|hashbuildempty|hashbulkdelete|hashchar|" + "hashcostestimate|hashendscan|hashenum|hashfloat4|hashfloat8|hashgetbitmap|hashgettuple|" + "hashinet|hashinsert|hashint2|hashint2vector|hashint4|hashint8|hashmacaddr|hashmarkpos|" + "hashname|hashoid|hashoidvector|hashoptions|hashrescan|hashrestrpos|hashtext|" + "hashvacuumcleanup|hashvarlena|height|host|hostmask|iclikejoinsel|iclikesel|" + "icnlikejoinsel|icnlikesel|icregexeqjoinsel|icregexeqsel|icregexnejoinsel|icregexnesel|" + "inet_client_addr|inet_client_port|inet_in|inet_out|inet_recv|inet_send|" + "inet_server_addr|inet_server_port|inetand|inetmi|inetmi_int8|inetnot|inetor|inetpl|" + "initcap|int2|int24div|int24eq|int24ge|int24gt|int24le|int24lt|int24mi|int24mul|int24ne|" + "int24pl|int28div|int28eq|int28ge|int28gt|int28le|int28lt|int28mi|int28mul|int28ne|int28pl|" + "int2_accum|int2_avg_accum|int2_mul_cash|int2_sum|int2abs|int2and|int2div|int2eq|int2ge|" + "int2gt|int2in|int2larger|int2le|int2lt|int2mi|int2mod|int2mul|int2ne|int2not|int2or|int2out|" + "int2pl|int2recv|int2send|int2shl|int2shr|int2smaller|int2um|int2up|int2vectoreq|" + "int2vectorin|int2vectorout|int2vectorrecv|int2vectorsend|int2xor|int4|int42div|int42eq|" + "int42ge|int42gt|int42le|int42lt|int42mi|int42mul|int42ne|int42pl|int48div|int48eq|int48ge|" + "int48gt|int48le|int48lt|int48mi|int48mul|int48ne|int48pl|int4_accum|int4_avg_accum|" + "int4_mul_cash|int4_sum|int4abs|int4and|int4div|int4eq|int4ge|int4gt|int4in|int4inc|" + "int4larger|int4le|int4lt|int4mi|int4mod|int4mul|int4ne|int4not|int4or|int4out|int4pl|" + "int4range|int4range_canonical|int4range_subdiff|int4recv|int4send|int4shl|int4shr|" + "int4smaller|int4um|int4up|int4xor|int8|int82div|int82eq|int82ge|int82gt|int82le|int82lt|" + "int82mi|int82mul|int82ne|int82pl|int84div|int84eq|int84ge|int84gt|int84le|int84lt|int84mi|" + "int84mul|int84ne|int84pl|int8_accum|int8_avg|int8_avg_accum|int8_sum|int8abs|int8and|" + "int8div|int8eq|int8ge|int8gt|int8in|int8inc|int8inc_any|int8inc_float8_float8|int8larger|" + "int8le|int8lt|int8mi|int8mod|int8mul|int8ne|int8not|int8or|int8out|int8pl|int8pl_inet|" + "int8range|int8range_canonical|int8range_subdiff|int8recv|int8send|int8shl|int8shr|" + "int8smaller|int8um|int8up|int8xor|integer_pl_date|inter_lb|inter_sb|inter_sl|internal_in|" + "internal_out|interval_accum|interval_avg|interval_cmp|interval_div|interval_eq|" + "interval_ge|interval_gt|interval_hash|interval_in|interval_larger|interval_le|" + "interval_lt|interval_mi|interval_mul|interval_ne|interval_out|interval_pl|" + "interval_pl_date|interval_pl_time|interval_pl_timestamp|interval_pl_timestamptz|" + "interval_pl_timetz|interval_recv|interval_send|interval_smaller|interval_transform|" + "interval_um|intervaltypmodin|intervaltypmodout|intinterval|isclosed|isempty|isfinite|" + "ishorizontal|iso8859_1_to_utf8|iso8859_to_utf8|iso_to_koi8r|iso_to_mic|iso_to_win1251|" + "iso_to_win866|isopen|isparallel|isperp|isvertical|johab_to_utf8|json_agg|" + "json_agg_finalfn|json_agg_transfn|json_array_element|json_array_element_text|" + "json_array_elements|json_array_length|json_each|json_each_text|json_extract_path|" + "json_extract_path_op|json_extract_path_text|json_extract_path_text_op|json_in|" + "json_object_field|json_object_field_text|json_object_keys|json_out|" + "json_populate_record|json_populate_recordset|json_recv|json_send|justify_days|" + "justify_hours|justify_interval|koi8r_to_iso|koi8r_to_mic|koi8r_to_utf8|" + "koi8r_to_win1251|koi8r_to_win866|koi8u_to_utf8|lag|language_handler_in|" + "language_handler_out|last_value|lastval|latin1_to_mic|latin2_to_mic|latin2_to_win1250|" + "latin3_to_mic|latin4_to_mic|lead|left|length|like|like_escape|likejoinsel|likesel|line|" + "line_distance|line_eq|line_horizontal|line_in|line_interpt|line_intersect|line_out|" + "line_parallel|line_perp|line_recv|line_send|line_vertical|ln|lo_close|lo_creat|lo_create|" + "lo_export|lo_import|lo_lseek|lo_lseek64|lo_open|lo_tell|lo_tell64|lo_truncate|" + "lo_truncate64|lo_unlink|log|loread|lower|lower_inc|lower_inf|lowrite|lpad|lseg|lseg_center|" + "lseg_distance|lseg_eq|lseg_ge|lseg_gt|lseg_horizontal|lseg_in|lseg_interpt|" + "lseg_intersect|lseg_le|lseg_length|lseg_lt|lseg_ne|lseg_out|lseg_parallel|lseg_perp|" + "lseg_recv|lseg_send|lseg_vertical|ltrim|macaddr_and|macaddr_cmp|macaddr_eq|macaddr_ge|" + "macaddr_gt|macaddr_in|macaddr_le|macaddr_lt|macaddr_ne|macaddr_not|macaddr_or|" + "macaddr_out|macaddr_recv|macaddr_send|makeaclitem|masklen|max|md5|mic_to_ascii|" + "mic_to_big5|mic_to_euc_cn|mic_to_euc_jp|mic_to_euc_kr|mic_to_euc_tw|mic_to_iso|" + "mic_to_koi8r|mic_to_latin1|mic_to_latin2|mic_to_latin3|mic_to_latin4|mic_to_sjis|" + "mic_to_win1250|mic_to_win1251|mic_to_win866|min|mktinterval|mod|money|mul_d_interval|" + "name|nameeq|namege|namegt|nameiclike|nameicnlike|nameicregexeq|nameicregexne|namein|" + "namele|namelike|namelt|namene|namenlike|nameout|namerecv|nameregexeq|nameregexne|namesend|" + "neqjoinsel|neqsel|netmask|network|network_cmp|network_eq|network_ge|network_gt|" + "network_le|network_lt|network_ne|network_sub|network_subeq|network_sup|network_supeq|" + "nextval|nlikejoinsel|nlikesel|notlike|now|npoints|nth_value|ntile|numeric_abs|" + "numeric_accum|numeric_add|numeric_avg|numeric_avg_accum|numeric_cmp|numeric_div|" + "numeric_div_trunc|numeric_eq|numeric_exp|numeric_fac|numeric_ge|numeric_gt|numeric_in|" + "numeric_inc|numeric_larger|numeric_le|numeric_ln|numeric_log|numeric_lt|numeric_mod|" + "numeric_mul|numeric_ne|numeric_out|numeric_power|numeric_recv|numeric_send|" + "numeric_smaller|numeric_sqrt|numeric_stddev_pop|numeric_stddev_samp|numeric_sub|" + "numeric_transform|numeric_uminus|numeric_uplus|numeric_var_pop|numeric_var_samp|" + "numerictypmodin|numerictypmodout|numnode|numrange|numrange_subdiff|obj_description|" + "octet_length|oid|oideq|oidge|oidgt|oidin|oidlarger|oidle|oidlt|oidne|oidout|oidrecv|oidsend|" + "oidsmaller|oidvectoreq|oidvectorge|oidvectorgt|oidvectorin|oidvectorle|oidvectorlt|" + "oidvectorne|oidvectorout|oidvectorrecv|oidvectorsend|oidvectortypes|on_pb|on_pl|" + "on_ppath|on_ps|on_sb|on_sl|opaque_in|opaque_out|overlaps|overlay|path|path_add|path_add_pt|" + "path_center|path_contain_pt|path_distance|path_div_pt|path_in|path_inter|path_length|" + "path_mul_pt|path_n_eq|path_n_ge|path_n_gt|path_n_le|path_n_lt|path_npoints|path_out|" + "path_recv|path_send|path_sub_pt|pclose|percent_rank|pg_advisory_lock|" + "pg_advisory_lock_shared|pg_advisory_unlock|pg_advisory_unlock_all|" + "pg_advisory_unlock_shared|pg_advisory_xact_lock|pg_advisory_xact_lock_shared|" + "pg_available_extension_versions|pg_available_extensions|pg_backend_pid|" + "pg_backup_start_time|pg_cancel_backend|pg_char_to_encoding|pg_client_encoding|" + "pg_collation_for|pg_collation_is_visible|pg_column_is_updatable|pg_column_size|" + "pg_conf_load_time|pg_conversion_is_visible|pg_create_restore_point|" + "pg_current_xlog_insert_location|pg_current_xlog_location|pg_cursor|pg_database_size|" + "pg_describe_object|pg_encoding_max_length|pg_encoding_to_char|" + "pg_event_trigger_dropped_objects|pg_export_snapshot|pg_extension_config_dump|" + "pg_extension_update_paths|pg_function_is_visible|pg_get_constraintdef|pg_get_expr|" + "pg_get_function_arguments|pg_get_function_identity_arguments|" + "pg_get_function_result|pg_get_functiondef|pg_get_indexdef|pg_get_keywords|" + "pg_get_multixact_members|pg_get_ruledef|pg_get_serial_sequence|pg_get_triggerdef|" + "pg_get_userbyid|pg_get_viewdef|pg_has_role|pg_identify_object|pg_indexes_size|" + "pg_is_in_backup|pg_is_in_recovery|pg_is_other_temp_schema|pg_is_xlog_replay_paused|" + "pg_last_xact_replay_timestamp|pg_last_xlog_receive_location|" + "pg_last_xlog_replay_location|pg_listening_channels|pg_lock_status|pg_ls_dir|" + "pg_my_temp_schema|pg_node_tree_in|pg_node_tree_out|pg_node_tree_recv|" + "pg_node_tree_send|pg_notify|pg_opclass_is_visible|pg_operator_is_visible|" + "pg_opfamily_is_visible|pg_options_to_table|pg_postmaster_start_time|" + "pg_prepared_statement|pg_prepared_xact|pg_read_binary_file|pg_read_file|" + "pg_relation_filenode|pg_relation_filepath|pg_relation_is_updatable|pg_relation_size|" + "pg_reload_conf|pg_rotate_logfile|pg_sequence_parameters|pg_show_all_settings|" + "pg_size_pretty|pg_sleep|pg_start_backup|pg_stat_clear_snapshot|pg_stat_file|" + "pg_stat_get_activity|pg_stat_get_analyze_count|pg_stat_get_autoanalyze_count|" + "pg_stat_get_autovacuum_count|pg_stat_get_backend_activity|" + "pg_stat_get_backend_activity_start|pg_stat_get_backend_client_addr|" + "pg_stat_get_backend_client_port|pg_stat_get_backend_dbid|pg_stat_get_backend_idset|" + "pg_stat_get_backend_pid|pg_stat_get_backend_start|pg_stat_get_backend_userid|" + "pg_stat_get_backend_waiting|pg_stat_get_backend_xact_start|" + "pg_stat_get_bgwriter_buf_written_checkpoints|" + "pg_stat_get_bgwriter_buf_written_clean|pg_stat_get_bgwriter_maxwritten_clean|" + "pg_stat_get_bgwriter_requested_checkpoints|pg_stat_get_bgwriter_stat_reset_time|" + "pg_stat_get_bgwriter_timed_checkpoints|pg_stat_get_blocks_fetched|" + "pg_stat_get_blocks_hit|pg_stat_get_buf_alloc|pg_stat_get_buf_fsync_backend|" + "pg_stat_get_buf_written_backend|pg_stat_get_checkpoint_sync_time|" + "pg_stat_get_checkpoint_write_time|pg_stat_get_db_blk_read_time|" + "pg_stat_get_db_blk_write_time|pg_stat_get_db_blocks_fetched|" + "pg_stat_get_db_blocks_hit|pg_stat_get_db_conflict_all|" + "pg_stat_get_db_conflict_bufferpin|pg_stat_get_db_conflict_lock|" + "pg_stat_get_db_conflict_snapshot|pg_stat_get_db_conflict_startup_deadlock|" + "pg_stat_get_db_conflict_tablespace|pg_stat_get_db_deadlocks|" + "pg_stat_get_db_numbackends|pg_stat_get_db_stat_reset_time|" + "pg_stat_get_db_temp_bytes|pg_stat_get_db_temp_files|pg_stat_get_db_tuples_deleted|" + "pg_stat_get_db_tuples_fetched|pg_stat_get_db_tuples_inserted|" + "pg_stat_get_db_tuples_returned|pg_stat_get_db_tuples_updated|" + "pg_stat_get_db_xact_commit|pg_stat_get_db_xact_rollback|pg_stat_get_dead_tuples|" + "pg_stat_get_function_calls|pg_stat_get_function_self_time|" + "pg_stat_get_function_total_time|pg_stat_get_last_analyze_time|" + "pg_stat_get_last_autoanalyze_time|pg_stat_get_last_autovacuum_time|" + "pg_stat_get_last_vacuum_time|pg_stat_get_live_tuples|pg_stat_get_numscans|" + "pg_stat_get_tuples_deleted|pg_stat_get_tuples_fetched|" + "pg_stat_get_tuples_hot_updated|pg_stat_get_tuples_inserted|" + "pg_stat_get_tuples_returned|pg_stat_get_tuples_updated|pg_stat_get_vacuum_count|" + "pg_stat_get_wal_senders|pg_stat_get_xact_blocks_fetched|" + "pg_stat_get_xact_blocks_hit|pg_stat_get_xact_function_calls|" + "pg_stat_get_xact_function_self_time|pg_stat_get_xact_function_total_time|" + "pg_stat_get_xact_numscans|pg_stat_get_xact_tuples_deleted|" + "pg_stat_get_xact_tuples_fetched|pg_stat_get_xact_tuples_hot_updated|" + "pg_stat_get_xact_tuples_inserted|pg_stat_get_xact_tuples_returned|" + "pg_stat_get_xact_tuples_updated|pg_stat_reset|pg_stat_reset_shared|" + "pg_stat_reset_single_function_counters|pg_stat_reset_single_table_counters|" + "pg_stop_backup|pg_switch_xlog|pg_table_is_visible|pg_table_size|" + "pg_tablespace_databases|pg_tablespace_location|pg_tablespace_size|" + "pg_terminate_backend|pg_timezone_abbrevs|pg_timezone_names|pg_total_relation_size|" + "pg_trigger_depth|pg_try_advisory_lock|pg_try_advisory_lock_shared|" + "pg_try_advisory_xact_lock|pg_try_advisory_xact_lock_shared|pg_ts_config_is_visible|" + "pg_ts_dict_is_visible|pg_ts_parser_is_visible|pg_ts_template_is_visible|" + "pg_type_is_visible|pg_typeof|pg_xlog_location_diff|pg_xlog_replay_pause|" + "pg_xlog_replay_resume|pg_xlogfile_name|pg_xlogfile_name_offset|pi|plainto_tsquery|" + "plpgsql_call_handler|plpgsql_inline_handler|plpgsql_validator|point|point_above|" + "point_add|point_below|point_distance|point_div|point_eq|point_horiz|point_in|point_left|" + "point_mul|point_ne|point_out|point_recv|point_right|point_send|point_sub|point_vert|" + "poly_above|poly_below|poly_center|poly_contain|poly_contain_pt|poly_contained|" + "poly_distance|poly_in|poly_left|poly_npoints|poly_out|poly_overabove|poly_overbelow|" + "poly_overlap|poly_overleft|poly_overright|poly_recv|poly_right|poly_same|poly_send|" + "polygon|popen|position|positionjoinsel|positionsel|postgresql_fdw_validator|pow|power|" + "prsd_end|prsd_headline|prsd_lextype|prsd_nexttoken|prsd_start|pt_contained_circle|" + "pt_contained_poly|query_to_xml|query_to_xml_and_xmlschema|query_to_xmlschema|" + "querytree|quote_ident|quote_literal|quote_nullable|radians|radius|random|range_adjacent|" + "range_after|range_before|range_cmp|range_contained_by|range_contains|" + "range_contains_elem|range_eq|range_ge|range_gist_compress|range_gist_consistent|" + "range_gist_decompress|range_gist_penalty|range_gist_picksplit|range_gist_same|" + "range_gist_union|range_gt|range_in|range_intersect|range_le|range_lt|range_minus|" + "range_ne|range_out|range_overlaps|range_overleft|range_overright|range_recv|range_send|" + "range_typanalyze|range_union|rangesel|rank|record_eq|record_ge|record_gt|record_in|" + "record_le|record_lt|record_ne|record_out|record_recv|record_send|regclass|regclassin|" + "regclassout|regclassrecv|regclasssend|regconfigin|regconfigout|regconfigrecv|" + "regconfigsend|regdictionaryin|regdictionaryout|regdictionaryrecv|regdictionarysend|" + "regexeqjoinsel|regexeqsel|regexnejoinsel|regexnesel|regexp_matches|regexp_replace|" + "regexp_split_to_array|regexp_split_to_table|regoperatorin|regoperatorout|" + "regoperatorrecv|regoperatorsend|regoperin|regoperout|regoperrecv|regopersend|" + "regprocedurein|regprocedureout|regprocedurerecv|regproceduresend|regprocin|regprocout|" + "regprocrecv|regprocsend|regr_avgx|regr_avgy|regr_count|regr_intercept|regr_r2|" + "regr_slope|regr_sxx|regr_sxy|regr_syy|regtypein|regtypeout|regtyperecv|regtypesend|" + "reltime|reltimeeq|reltimege|reltimegt|reltimein|reltimele|reltimelt|reltimene|reltimeout|" + "reltimerecv|reltimesend|repeat|replace|reverse|right|round|row_number|row_to_json|rpad|" + "rtrim|scalargtjoinsel|scalargtsel|scalarltjoinsel|scalarltsel|schema_to_xml|" + "schema_to_xml_and_xmlschema|schema_to_xmlschema|session_user|set_bit|set_byte|" + "set_config|set_masklen|setseed|setval|setweight|shell_in|shell_out|" + "shift_jis_2004_to_euc_jis_2004|shift_jis_2004_to_utf8|shobj_description|sign|" + "similar_escape|sin|sjis_to_euc_jp|sjis_to_mic|sjis_to_utf8|slope|smgreq|smgrin|smgrne|" + "smgrout|spg_kd_choose|spg_kd_config|spg_kd_inner_consistent|spg_kd_picksplit|" + "spg_quad_choose|spg_quad_config|spg_quad_inner_consistent|spg_quad_leaf_consistent|" + "spg_quad_picksplit|spg_range_quad_choose|spg_range_quad_config|" + "spg_range_quad_inner_consistent|spg_range_quad_leaf_consistent|" + "spg_range_quad_picksplit|spg_text_choose|spg_text_config|spg_text_inner_consistent|" + "spg_text_leaf_consistent|spg_text_picksplit|spgbeginscan|spgbuild|spgbuildempty|" + "spgbulkdelete|spgcanreturn|spgcostestimate|spgendscan|spggetbitmap|spggettuple|" + "spginsert|spgmarkpos|spgoptions|spgrescan|spgrestrpos|spgvacuumcleanup|split_part|sqrt|" + "statement_timestamp|stddev|stddev_pop|stddev_samp|string_agg|string_agg_finalfn|" + "string_agg_transfn|string_to_array|strip|strpos|substr|substring|sum|" + "suppress_redundant_updates_trigger|table_to_xml|table_to_xml_and_xmlschema|" + "table_to_xmlschema|tan|text|text_ge|text_gt|text_larger|text_le|text_lt|text_pattern_ge|" + "text_pattern_gt|text_pattern_le|text_pattern_lt|text_smaller|textanycat|textcat|texteq|" + "texticlike|texticnlike|texticregexeq|texticregexne|textin|textlen|textlike|textne|" + "textnlike|textout|textrecv|textregexeq|textregexne|textsend|thesaurus_init|" + "thesaurus_lexize|tideq|tidge|tidgt|tidin|tidlarger|tidle|tidlt|tidne|tidout|tidrecv|tidsend|" + "tidsmaller|time_cmp|time_eq|time_ge|time_gt|time_hash|time_in|time_larger|time_le|time_lt|" + "time_mi_interval|time_mi_time|time_ne|time_out|time_pl_interval|time_recv|time_send|" + "time_smaller|time_transform|timedate_pl|timemi|timenow|timeofday|timepl|timestamp_cmp|" + "timestamp_cmp_date|timestamp_cmp_timestamptz|timestamp_eq|timestamp_eq_date|" + "timestamp_eq_timestamptz|timestamp_ge|timestamp_ge_date|timestamp_ge_timestamptz|" + "timestamp_gt|timestamp_gt_date|timestamp_gt_timestamptz|timestamp_hash|timestamp_in|" + "timestamp_larger|timestamp_le|timestamp_le_date|timestamp_le_timestamptz|" + "timestamp_lt|timestamp_lt_date|timestamp_lt_timestamptz|timestamp_mi|" + "timestamp_mi_interval|timestamp_ne|timestamp_ne_date|timestamp_ne_timestamptz|" + "timestamp_out|timestamp_pl_interval|timestamp_recv|timestamp_send|timestamp_smaller|" + "timestamp_sortsupport|timestamp_transform|timestamptypmodin|timestamptypmodout|" + "timestamptz_cmp|timestamptz_cmp_date|timestamptz_cmp_timestamp|timestamptz_eq|" + "timestamptz_eq_date|timestamptz_eq_timestamp|timestamptz_ge|timestamptz_ge_date|" + "timestamptz_ge_timestamp|timestamptz_gt|timestamptz_gt_date|" + "timestamptz_gt_timestamp|timestamptz_in|timestamptz_larger|timestamptz_le|" + "timestamptz_le_date|timestamptz_le_timestamp|timestamptz_lt|timestamptz_lt_date|" + "timestamptz_lt_timestamp|timestamptz_mi|timestamptz_mi_interval|timestamptz_ne|" + "timestamptz_ne_date|timestamptz_ne_timestamp|timestamptz_out|" + "timestamptz_pl_interval|timestamptz_recv|timestamptz_send|timestamptz_smaller|" + "timestamptztypmodin|timestamptztypmodout|timetypmodin|timetypmodout|timetz_cmp|" + "timetz_eq|timetz_ge|timetz_gt|timetz_hash|timetz_in|timetz_larger|timetz_le|timetz_lt|" + "timetz_mi_interval|timetz_ne|timetz_out|timetz_pl_interval|timetz_recv|timetz_send|" + "timetz_smaller|timetzdate_pl|timetztypmodin|timetztypmodout|timezone|tinterval|" + "tintervalct|tintervalend|tintervaleq|tintervalge|tintervalgt|tintervalin|tintervalle|" + "tintervalleneq|tintervallenge|tintervallengt|tintervallenle|tintervallenlt|" + "tintervallenne|tintervallt|tintervalne|tintervalout|tintervalov|tintervalrecv|" + "tintervalrel|tintervalsame|tintervalsend|tintervalstart|to_ascii|to_char|to_date|to_hex|" + "to_json|to_number|to_timestamp|to_tsquery|to_tsvector|transaction_timestamp|translate|" + "trigger_in|trigger_out|trunc|ts_debug|ts_headline|ts_lexize|ts_match_qv|ts_match_tq|" + "ts_match_tt|ts_match_vq|ts_parse|ts_rank|ts_rank_cd|ts_rewrite|ts_stat|ts_token_type|" + "ts_typanalyze|tsmatchjoinsel|tsmatchsel|tsq_mcontained|tsq_mcontains|tsquery_and|" + "tsquery_cmp|tsquery_eq|tsquery_ge|tsquery_gt|tsquery_le|tsquery_lt|tsquery_ne|" + "tsquery_not|tsquery_or|tsqueryin|tsqueryout|tsqueryrecv|tsquerysend|tsrange|" + "tsrange_subdiff|tstzrange|tstzrange_subdiff|tsvector_cmp|tsvector_concat|tsvector_eq|" + "tsvector_ge|tsvector_gt|tsvector_le|tsvector_lt|tsvector_ne|tsvector_update_trigger|" + "tsvector_update_trigger_column|tsvectorin|tsvectorout|tsvectorrecv|tsvectorsend|" + "txid_current|txid_current_snapshot|txid_snapshot_in|txid_snapshot_out|" + "txid_snapshot_recv|txid_snapshot_send|txid_snapshot_xip|txid_snapshot_xmax|" + "txid_snapshot_xmin|txid_visible_in_snapshot|uhc_to_utf8|unique_key_recheck|unknownin|" + "unknownout|unknownrecv|unknownsend|unnest|upper|upper_inc|upper_inf|utf8_to_ascii|" + "utf8_to_big5|utf8_to_euc_cn|utf8_to_euc_jis_2004|utf8_to_euc_jp|utf8_to_euc_kr|" + "utf8_to_euc_tw|utf8_to_gb18030|utf8_to_gbk|utf8_to_iso8859|utf8_to_iso8859_1|" + "utf8_to_johab|utf8_to_koi8r|utf8_to_koi8u|utf8_to_shift_jis_2004|utf8_to_sjis|" + "utf8_to_uhc|utf8_to_win|uuid_cmp|uuid_eq|uuid_ge|uuid_gt|uuid_hash|uuid_in|uuid_le|" + "uuid_lt|uuid_ne|uuid_out|uuid_recv|uuid_send|var_pop|var_samp|varbit_in|varbit_out|" + "varbit_recv|varbit_send|varbit_transform|varbitcmp|varbiteq|varbitge|varbitgt|varbitle|" + "varbitlt|varbitne|varbittypmodin|varbittypmodout|varchar_transform|varcharin|" + "varcharout|varcharrecv|varcharsend|varchartypmodin|varchartypmodout|variance|version|" + "void_in|void_out|void_recv|void_send|width|width_bucket|win1250_to_latin2|" + "win1250_to_mic|win1251_to_iso|win1251_to_koi8r|win1251_to_mic|win1251_to_win866|" + "win866_to_iso|win866_to_koi8r|win866_to_mic|win866_to_win1251|win_to_utf8|xideq|" + "xideqint4|xidin|xidout|xidrecv|xidsend|xml|xml_in|xml_is_well_formed|" + "xml_is_well_formed_content|xml_is_well_formed_document|xml_out|xml_recv|xml_send|" + "xmlagg|xmlcomment|xmlconcat2|xmlexists|xmlvalidate|xpath|xpath_exists";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords
    }, "identifier", true);
    var sqlRules = [{
      token: "string",
      // single line string -- assume dollar strings if multi-line for now
      regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
    }, {
      token: "variable.language",
      // pg identifier
      regex: '".*?"'
    }, {
      token: "constant.numeric",
      // float
      regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
    }, {
      token: keywordMapper,
      regex: "[a-zA-Z_][a-zA-Z0-9_$]*\\b" // TODO - Unicode in identifiers
    }, {
      token: "keyword.operator",
      regex: "!|!!|!~|!~\\*|!~~|!~~\\*|#|##|#<|#<=|#<>|#=|#>|#>=|%|\\&|\\&\\&|\\&<|\\&<\\||\\&>|\\*|\\+|" + "\\-|/|<|<#>|<\\->|<<|<<=|<<\\||<=|<>|<\\?>|<@|<\\^|=|>|>=|>>|>>=|>\\^|\\?#|\\?\\-|\\?\\-\\||" + "\\?\\||\\?\\|\\||@|@\\-@|@>|@@|@@@|\\^|\\||\\|\\&>|\\|/|\\|>>|\\|\\||\\|\\|/|~|~\\*|~<=~|~<~|" + "~=|~>=~|~>~|~~|~~\\*"
    }, {
      token: "paren.lparen",
      regex: "[\\(]"
    }, {
      token: "paren.rparen",
      regex: "[\\)]"
    }, {
      token: "text",
      regex: "\\s+"
    }];
    this.$rules = {
      "start": [{
        token: "comment",
        regex: "--.*$"
      }, DocCommentHighlightRules.getStartRule("doc-start"), {
        token: "comment",
        // multi-line comment
        regex: "\\/\\*",
        next: "comment"
      }, {
        token: "keyword.statementBegin",
        regex: "^[a-zA-Z]+",
        // Could enumerate starting keywords but this allows things to work when new statements are added.
        next: "statement"
      }, {
        token: "support.buildin",
        // psql directive
        regex: "^\\\\[\\S]+.*$"
      }],
      "statement": [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        // multi-line comment
        regex: "\\/\\*",
        next: "commentStatement"
      }, {
        token: "statementEnd",
        regex: ";",
        next: "start"
      }, {
        token: "string",
        regex: "\\$perl\\$",
        next: "perl-start"
      }, {
        token: "string",
        regex: "\\$python\\$",
        next: "python-start"
      }, {
        token: "string",
        regex: "\\$json\\$",
        next: "json-start"
      }, {
        token: "string",
        regex: "\\$(js|javascript)\\$",
        next: "javascript-start"
      }, {
        token: "string",
        regex: "\\$[\\w_0-9]*\\$$",
        // dollar quote at the end of a line
        next: "dollarSql"
      }, {
        token: "string",
        regex: "\\$[\\w_0-9]*\\$",
        next: "dollarStatementString"
      }].concat(sqlRules),
      "dollarSql": [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        // multi-line comment
        regex: "\\/\\*",
        next: "commentDollarSql"
      }, {
        token: "string",
        // end quoting with dollar at the start of a line
        regex: "^\\$[\\w_0-9]*\\$",
        next: "statement"
      }, {
        token: "string",
        regex: "\\$[\\w_0-9]*\\$",
        next: "dollarSqlString"
      }].concat(sqlRules),
      "comment": [{
        token: "comment",
        // closing comment
        regex: ".*?\\*\\/",
        next: "start"
      }, {
        token: "comment",
        // comment spanning whole line
        regex: ".+"
      }],
      "commentStatement": [{
        token: "comment",
        // closing comment
        regex: ".*?\\*\\/",
        next: "statement"
      }, {
        token: "comment",
        // comment spanning whole line
        regex: ".+"
      }],
      "commentDollarSql": [{
        token: "comment",
        // closing comment
        regex: ".*?\\*\\/",
        next: "dollarSql"
      }, {
        token: "comment",
        // comment spanning whole line
        regex: ".+"
      }],
      "dollarStatementString": [{
        token: "string",
        // closing dollarstring
        regex: ".*?\\$[\\w_0-9]*\\$",
        next: "statement"
      }, {
        token: "string",
        // dollarstring spanning whole line
        regex: ".+"
      }],
      "dollarSqlString": [{
        token: "string",
        // closing dollarstring
        regex: ".*?\\$[\\w_0-9]*\\$",
        next: "dollarSql"
      }, {
        token: "string",
        // dollarstring spanning whole line
        regex: ".+"
      }]
    };
    this.embedRules(DocCommentHighlightRules, "doc-", [DocCommentHighlightRules.getEndRule("start")]);
    this.embedRules(PerlHighlightRules, "perl-", [{
      token: "string",
      regex: "\\$perl\\$",
      next: "statement"
    }]);
    this.embedRules(PythonHighlightRules, "python-", [{
      token: "string",
      regex: "\\$python\\$",
      next: "statement"
    }]);
    this.embedRules(JsonHighlightRules, "json-", [{
      token: "string",
      regex: "\\$json\\$",
      next: "statement"
    }]);
    this.embedRules(JavaScriptHighlightRules, "javascript-", [{
      token: "string",
      regex: "\\$(js|javascript)\\$",
      next: "statement"
    }]);
  };
  oop.inherits(PgsqlHighlightRules, TextHighlightRules);
  exports.PgsqlHighlightRules = PgsqlHighlightRules;
});
ace.define("ace/mode/pgsql", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/pgsql_highlight_rules", "ace/range"], function (require, exports, module) {
  var oop = require("../lib/oop");
  var TextMode = require("../mode/text").Mode;
  var PgsqlHighlightRules = require("./pgsql_highlight_rules").PgsqlHighlightRules;
  var Range = require("../range").Range;
  var Mode = function Mode() {
    this.HighlightRules = PgsqlHighlightRules;
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.blockComment = {
      start: "/*",
      end: "*/"
    };
    this.getNextLineIndent = function (state, line, tab) {
      if (state == "start" || state == "keyword.statementEnd") {
        return "";
      } else {
        return this.$getIndent(line); // Keep whatever indent the previous line has
      }
    };
    this.$id = "ace/mode/pgsql";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-phoenix.js":
/*!*************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-phoenix.js ***!
  \*************************************************************/
/***/ (() => {

ace.define("ace/mode/phoenix_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var PhoenixHighlightRules = function PhoenixHighlightRules() {
    var keywords = "ADD|ADMIN|AFTER|ALL|ALTER|ANALYZE|AND|ARCHIVE|AS|ASC|AUTHORIZATION|BEFORE|BETWEEN|BOTH|BUCKET|BUCKETS|BY|CACHE|CASCADE|CASE|CAST|CHANGE|CLUSTER|CLUSTERED|CLUSTERSTATUS|COLLECTION|COLUMN|COLUMNS|COMMENT|COMMIT|COMPACT|COMPACTIONS|COMPUTE|CONCATENATE|CONF|CONSTRAINT|CONTINUE|CREATE|CROSS|CUBE|CURRENT|CURRENT_DATE|CURRENT_TIMESTAMP|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DAY|DAYOFWEEK|DBPROPERTIES|DEFERRED|DEFINED|DELETE|DEPENDENCY|DESC|DESCRIBE|DIRECTORIES|DIRECTORY|DISABLE|DISTINCT|DISTRIBUTE|DROP|ELEM_TYPE|ELSE|ENABLE|END|ESCAPED|EXCHANGE|EXCLUSIVE|EXISTS|EXPLAIN|EXPORT|EXTENDED|EXTERNAL|EXTRACT|FETCH|FIELDS|FILE|FILEFORMAT|FIRST|FLOOR|FOLLOWING|FOR|FOREIGN|FORMAT|FORMATTED|FROM|FULL|FUNCTION|FUNCTIONS|GRANT|GROUP|GROUPING|HAVING|HOLD_DDLTIME|HOUR|IDXPROPERTIES|IF|IGNORE|IMPORT|IN|INDEX|INDEXES|INNER|INPATH|INPUTDRIVER|INPUTFORMAT|INSERT|INTERSECT|INTERVAL|INTO|IS|ITEMS|JAR|JOIN|KEY|KEYS|KEY_TYPE|LATERAL|LEFT|LESS|LIKE|LIMIT|LINES|LOAD|LOCAL|LOCATION|LOCK|LOCKS|LOGICAL|LONG|MACRO|MAPJOIN|MATERIALIZED|MINUS|MINUTE|MONTH|MORE|MSCK|NONE|NOSCAN|NOVALIDATE|NOT|NO_DROP|OF|OFFLINE|ON|ONLY|OPTION|OR|ORDER|OUT|OUTER|OUTPUTDRIVER|OUTPUTFORMAT|OVER|OVERWRITE|OWNER|PARTIALSCAN|PARTITION|PARTITIONED|PARTITIONS|PERCENT|PLUS|PRECEDING|PRECISION|PRESERVE|PRETTY|PRIMARY|PRINCIPALS|PROCEDURE|PROTECTION|PURGE|RANGE|READ|READONLY|READS|REBUILD|RECORDREADER|RECORDWRITER|REDUCE|REFERENCES|REGEXP|RELOAD|RENAME|REPAIR|REPLACE|RESTRICT|REVOKE|REWRITE|RIGHT|RLIKE|ROLE|ROLES|ROLLBACK|ROLLUP|ROW|ROWS|SCHEMA|SCHEMAS|SECOND|SELECT|SEMI|SERDEPROPERTIES|SERVER|SET|SETS|SHARED|SHOW|SHOW_DATABASE|SKEWED|SORT|SORTED|SSL|START|STATISTICS|STORED|STREAMTABLE|SYNC|TABLE|TABLES|TABLESAMPLE|TBLPROPERTIES|TEMPORARY|TERMINATED|THEN|TO|TOUCH|TRANSACTIONAL|TRANSACTIONS|TRANSFORM|TRIGGER|TRUNCATE|UNARCHIVE|UNBOUNDED|UNDO|UNION|UNIQUEJOIN|UNLOCK|UNSET|UNSIGNED|UTC_TIMESTAMP|UPDATE|URI|USE|USER|USING|UTC|UTCTIMESTAMP|VALUES|VALUE_TYPE|VIEW|VIEWS|WHEN|WHERE|WHILE|WINDOW|WITH|YEAR";
    var builtinConstants = "FALSE|NULL|TRUE";
    var builtinFunctions = "ABS|ACOS|ADD_MONTHS|AES_DECRYPT|AES_ENCRYPT|ARRAY|ARRAY_CONTAINS|ASCII|ASIN|ATAN|AVG|BASE64|BIN|BINARY|BROUND|CAST|CBRT|CEIL|CEILING|COALESCE|COLLECT_LIST|COLLECT_SET|CONCAT|CONCAT_WS|CONTEXT_NGRAMS|CONV|CORR|COS|COVAR_POP|COVAR_SAMP|COUNT|CRC32|CREATE_UNION|CUME_DIST|CURRENT_DATABASE|CURRENT_DATE|CURRENT_TIMESTAMP|CURRENT_USER|DATE_ADD|DATE_FORMAT|DATE_SUB|DATEDIFF|DAY|DAYOFMONTH|DECODE|DEGREES|DENSE_RANK|E|ENCODE|EXP|EXPLODE|FACTORIAL|FIND_IN_SET|FIRST_VALUE|FLOOR|FORMAT_NUMBER|FROM_UNIXTIME|FROM_UTC_TIMESTAMP|GET_JSON_OBJECT|GREATEST|HASH|HEX|HISTOGRAM_NUMERIC|HOUR|IF|IN_FILE|INLINE|INSTR|INITCAP|ISNOTNULL|ISNULL|JAVA_METHOD|JSON_TUPLE|LAG|LAST_DAY|LAST_VALUE|LEAD|LEAST|LENGTH|LEVENSHTEIN|LCASE|LN|LOCATE|LOG|LOG10|LOG2|LOWER|LPAD|LTRIM|MAP|MAP_KEYS|MAP_VALUES|MAX|MD5|MIN|MINUTE|MONTH|MONTHS_BETWEEN|NAMED_STRUCT|NEGATIVE|NEXT_DAY|NGRAMS|NTILE|NVL|PARSE_URL|PARSE_URL_TUPLE|PERCENT_RANK|PERCENTILE|PERCENTILE_APPROX|PI|PMOD|POSEXPLODE|POSITIVE|POW|POWER|PRINTF|QUARTER|RADIANS|RAND|RANK|REFLECT|REGEXP_EXTRACT|REGEXP_REPLACE|REPEAT|REVERSE|ROUND|ROW_NUMBER|RPAD|RTRIM|SECOND|SHA|SHA1|SHA2|SHIFTLEFT|SHIFTRIGHT|SHIFTRIGHTUNSIGNED|SIGN|SIN|SIZE|SORT_ARRAY|SQRT|STACK|STDDEV_POP|STDDEV_SAMP|STRUCT|SENTENCES|SOUNDEX|SPACE|SPLIT|STR_TO_MAP|SUBSTR|SUBSTRING|SUBSTRING_INDEX|SUM|TAN|TO_DATE|TO_UTC_TIMESTAMP|TRANSLATE|TRIM|TRUNC|UCASE|UNBASE64|UNHEX|UNIX_TIMESTAMP|UPPER|VAR_POP|VAR_SAMP|VARIANCE|WEEKOFYEAR|XPATH|XPATH_BOOLEAN|XPATH_DOUBLE|XPATH_FLOAT|XPATH_INT|XPATH_LONG|XPATH_NUMBER|XPATH_SHORT|XPATH_STRING|YEAR";
    var dataTypes = "ARRAY|BIGINT|BINARY|BOOLEAN|CHAR|DATE|DECIMAL|DELIMITED|DOUBLE|FLOAT|INT|INTEGER|JSONFILE|MAP|NUMERIC|PRECISION|RCFILE|SEQUENCEFILE|SERDE|SMALLINT|STRING|STRUCT|TEXTFILE|TIME|TIMESTAMP|TINYINT|UNIONTYPE|VARCHAR";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  PhoenixHighlightRules.metaData = {
    fileTypes: ["pql"],
    name: "Phoenix",
    scopeName: "source.phoenix"
  };
  oop.inherits(PhoenixHighlightRules, TextHighlightRules);
  exports.PhoenixHighlightRules = PhoenixHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/phoenix", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/phoenix_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var PhoenixHighlightRules = require("./phoenix_highlight_rules").PhoenixHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = PhoenixHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/phoenix";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-presto.js":
/*!************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-presto.js ***!
  \************************************************************/
/***/ (() => {

ace.define("ace/mode/presto_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var PrestoHighlightRules = function PrestoHighlightRules() {
    var keywords = "ADD|ADMIN|AFTER|ALL|ALTER|ANALYZE|AND|ARCHIVE|AS|ASC|AUTHORIZATION|BEFORE|BETWEEN|BOTH|BUCKET|BUCKETS|BY|CACHE|CASCADE|CASE|CAST|CHANGE|CLUSTER|CLUSTERED|CLUSTERSTATUS|COLLECTION|COLUMN|COLUMNS|COMMENT|COMMIT|COMPACT|COMPACTIONS|COMPUTE|CONCATENATE|CONF|CONSTRAINT|CONTINUE|CREATE|CROSS|CUBE|CURRENT|CURRENT_DATE|CURRENT_TIMESTAMP|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DAY|DAYOFWEEK|DBPROPERTIES|DEFERRED|DEFINED|DELETE|DEPENDENCY|DESC|DESCRIBE|DIRECTORIES|DIRECTORY|DISABLE|DISTINCT|DISTRIBUTE|DROP|ELEM_TYPE|ELSE|ENABLE|END|ESCAPED|EXCHANGE|EXCLUSIVE|EXISTS|EXPLAIN|EXPORT|EXTENDED|EXTERNAL|EXTRACT|FETCH|FIELDS|FILE|FILEFORMAT|FIRST|FLOOR|FOLLOWING|FOR|FOREIGN|FORMAT|FORMATTED|FROM|FULL|FUNCTION|FUNCTIONS|GRANT|GROUP|GROUPING|HAVING|HOLD_DDLTIME|HOUR|IDXPROPERTIES|IF|IGNORE|IMPORT|IN|INDEX|INDEXES|INNER|INPATH|INPUTDRIVER|INPUTFORMAT|INSERT|INTERSECT|INTERVAL|INTO|IS|ITEMS|JAR|JOIN|KEY|KEYS|KEY_TYPE|LATERAL|LEFT|LESS|LIKE|LIMIT|LINES|LOAD|LOCAL|LOCATION|LOCK|LOCKS|LOGICAL|LONG|MACRO|MAPJOIN|MATERIALIZED|MINUS|MINUTE|MONTH|MORE|MSCK|NONE|NOSCAN|NOVALIDATE|NOT|NO_DROP|OF|OFFLINE|ON|ONLY|OPTION|OR|ORDER|OUT|OUTER|OUTPUTDRIVER|OUTPUTFORMAT|OVER|OVERWRITE|OWNER|PARTIALSCAN|PARTITION|PARTITIONED|PARTITIONS|PERCENT|PLUS|PRECEDING|PRECISION|PRESERVE|PRETTY|PRIMARY|PRINCIPALS|PROCEDURE|PROTECTION|PURGE|RANGE|READ|READONLY|READS|REBUILD|RECORDREADER|RECORDWRITER|REDUCE|REFERENCES|REGEXP|RELOAD|RENAME|REPAIR|REPLACE|RESTRICT|REVOKE|REWRITE|RIGHT|RLIKE|ROLE|ROLES|ROLLBACK|ROLLUP|ROW|ROWS|SCHEMA|SCHEMAS|SECOND|SELECT|SEMI|SERDEPROPERTIES|SERVER|SET|SETS|SHARED|SHOW|SHOW_DATABASE|SKEWED|SORT|SORTED|SSL|START|STATISTICS|STORED|STREAMTABLE|SYNC|TABLE|TABLES|TABLESAMPLE|TBLPROPERTIES|TEMPORARY|TERMINATED|THEN|TO|TOUCH|TRANSACTIONAL|TRANSACTIONS|TRANSFORM|TRIGGER|TRUNCATE|UNARCHIVE|UNBOUNDED|UNDO|UNION|UNIQUEJOIN|UNLOCK|UNSET|UNSIGNED|UTC_TIMESTAMP|UPDATE|URI|USE|USER|USING|UTC|UTCTIMESTAMP|VALUES|VALUE_TYPE|VIEW|VIEWS|WHEN|WHERE|WHILE|WINDOW|WITH|YEAR";
    var builtinConstants = "FALSE|NULL|TRUE";
    var builtinFunctions = "ABS|ACOS|ADD_MONTHS|AES_DECRYPT|AES_ENCRYPT|ARRAY|ARRAY_CONTAINS|ASCII|ASIN|ATAN|AVG|BASE64|BIN|BINARY|BROUND|CAST|CBRT|CEIL|CEILING|COALESCE|COLLECT_LIST|COLLECT_SET|CONCAT|CONCAT_WS|CONTEXT_NGRAMS|CONV|CORR|COS|COVAR_POP|COVAR_SAMP|COUNT|CRC32|CREATE_UNION|CUME_DIST|CURRENT_DATABASE|CURRENT_DATE|CURRENT_TIMESTAMP|CURRENT_USER|DATE_ADD|DATE_FORMAT|DATE_SUB|DATEDIFF|DAY|DAYOFMONTH|DECODE|DEGREES|DENSE_RANK|E|ENCODE|EXP|EXPLODE|FACTORIAL|FIND_IN_SET|FIRST_VALUE|FLOOR|FORMAT_NUMBER|FROM_UNIXTIME|FROM_UTC_TIMESTAMP|GET_JSON_OBJECT|GREATEST|HASH|HEX|HISTOGRAM_NUMERIC|HOUR|IF|IN_FILE|INLINE|INSTR|INITCAP|ISNOTNULL|ISNULL|JAVA_METHOD|JSON_TUPLE|LAG|LAST_DAY|LAST_VALUE|LEAD|LEAST|LENGTH|LEVENSHTEIN|LCASE|LN|LOCATE|LOG|LOG10|LOG2|LOWER|LPAD|LTRIM|MAP|MAP_KEYS|MAP_VALUES|MAX|MD5|MIN|MINUTE|MONTH|MONTHS_BETWEEN|NAMED_STRUCT|NEGATIVE|NEXT_DAY|NGRAMS|NTILE|NVL|PARSE_URL|PARSE_URL_TUPLE|PERCENT_RANK|PERCENTILE|PERCENTILE_APPROX|PI|PMOD|POSEXPLODE|POSITIVE|POW|POWER|PRINTF|QUARTER|RADIANS|RAND|RANK|REFLECT|REGEXP_EXTRACT|REGEXP_REPLACE|REPEAT|REVERSE|ROUND|ROW_NUMBER|RPAD|RTRIM|SECOND|SHA|SHA1|SHA2|SHIFTLEFT|SHIFTRIGHT|SHIFTRIGHTUNSIGNED|SIGN|SIN|SIZE|SORT_ARRAY|SQRT|STACK|STDDEV_POP|STDDEV_SAMP|STRUCT|SENTENCES|SOUNDEX|SPACE|SPLIT|STR_TO_MAP|SUBSTR|SUBSTRING|SUBSTRING_INDEX|SUM|TAN|TO_DATE|TO_UTC_TIMESTAMP|TRANSLATE|TRIM|TRUNC|UCASE|UNBASE64|UNHEX|UNIX_TIMESTAMP|UPPER|VAR_POP|VAR_SAMP|VARIANCE|WEEKOFYEAR|XPATH|XPATH_BOOLEAN|XPATH_DOUBLE|XPATH_FLOAT|XPATH_INT|XPATH_LONG|XPATH_NUMBER|XPATH_SHORT|XPATH_STRING|YEAR";
    var dataTypes = "ARRAY|BIGINT|BINARY|BOOLEAN|CHAR|DATE|DECIMAL|DELIMITED|DOUBLE|FLOAT|INT|INTEGER|JSONFILE|MAP|NUMERIC|PRECISION|RCFILE|SEQUENCEFILE|SERDE|SMALLINT|STRING|STRUCT|TEXTFILE|TIME|TIMESTAMP|TINYINT|UNIONTYPE|VARCHAR";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  PrestoHighlightRules.metaData = {
    fileTypes: ["hql", "q", "ql"],
    name: "Presto",
    scopeName: "source.presto"
  };
  oop.inherits(PrestoHighlightRules, TextHighlightRules);
  exports.PrestoHighlightRules = PrestoHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/presto", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/presto_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var PrestoHighlightRules = require("./presto_highlight_rules").PrestoHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = PrestoHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/presto";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-solr.js":
/*!**********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-solr.js ***!
  \**********************************************************/
/***/ (() => {

ace.define("ace/mode/solr_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var SolrHighlightRules = function SolrHighlightRules() {
    var keywords = "AND|OR|NOT|TO|NOW|HOUR|HOURS|DAY|DAYS|MONTH|MONTHS|YEAR|YEARS";
    var builtinFunctions = "ABS|AVG|CHILDFIELD|DEF|DIST|DIV|DOCFREQ|EQ|EXISTS|FIELD|GT|GTE|HLL|HSIN|IDF|IF|LINEAR|LOG|LT|LTE|MAP|MAX|MAX|MAXDOC|MIN|MIN|MS|MUL|NORM|NUMDOCS|ORD|PAYLOAD|PERCENTILE|POW|PRODUCT|QUERY|RECIP|RORD|SCALE|SQEDIST|SQRT|STDDEV|STRDIST|SUB|SUM|SUM|SUMSQ|SUMTOTALTERMFREQ|TERMFREQ|TF|TOP|TOTALTERMFREQ|UNIQUE|VARIANCE|XOR";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: '\\+|\\-|\\/|\\?|&|\\^|~|:|\\*|\\||!|"|\\[|\\]'
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  SolrHighlightRules.metaData = {
    fileTypes: ["solr"],
    name: "Solr",
    scopeName: "source.solr"
  };
  oop.inherits(SolrHighlightRules, TextHighlightRules);
  exports.SolrHighlightRules = SolrHighlightRules;
});
ace.define("ace/mode/solr", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/solr_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var SolrHighlightRules = require("./solr_highlight_rules").SolrHighlightRules;
  var Mode = function Mode() {
    this.HighlightRules = SolrHighlightRules;
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.$id = "ace/mode/solr";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: false,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-sparksql.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-sparksql.js ***!
  \**************************************************************/
/***/ (() => {

ace.define("ace/mode/sparksql_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var SparksqlHighlightRules = function SparksqlHighlightRules() {
    var keywords = 'ADD|AFTER|ALL|ALTER|ANALYZE|AND|ANTI|ANY|ARCHIVE|AS|ASC|AT|AUTHORIZATION|BETWEEN|BOTH|BUCKET|BUCKETS|BY|CACHE|' + 'CASCADE|CASE|CAST|CATALOG|CATALOGS|CHANGE|CHECK|CLEAR|CLUSTER|CLUSTERED|CODEGEN|COLLATE|COLLECTION|COLUMN|' + 'COLUMNS|COMMENT|COMMIT|COMPACT|COMPACTIONS|COMPUTE|CONCATENATE|CONSTRAINT|COST|CREATE|CROSS|CUBE|CURRENT|' + 'CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|DATA|DATABASE|DATABASES|DATEADD|DATEDIFF|DAYOFYEAR|' + 'DBPROPERTIES|DEFINED|DELETE|DELIMITED|DESC|DESCRIBE|DFS|DIRECTORIES|DIRECTORY|DISTINCT|DISTRIBUTE|DIV|DROP|' + 'ELSE|END|ESCAPE|ESCAPED|EXCEPT|EXCHANGE|EXISTS|EXPLAIN|EXPORT|EXTENDED|EXTERNAL|EXTRACT|FETCH|FIELDS|' + 'FILEFORMAT|FILTER|FIRST|FOLLOWING|FOR|FOREIGN|FORMAT|FORMATTED|FROM|FULL|FUNCTION|FUNCTIONS|GLOBAL|GRANT|' + 'GROUP|GROUPING|HAVING|IF|IGNORE|ILIKE|IMPORT|IN|INDEX|INDEXES|INNER|INPATH|INPUTFORMAT|INSERT|INTERSECT|' + 'INTERVAL|INTO|IS|ITEMS|JOIN|KEYS|LAST|LATERAL|LAZY|LEADING|LEFT|LIKE|LIMIT|LINES|LIST|LOAD|LOCAL|LOCATION|' + 'LOCK|LOCKS|LOGICAL|MACRO|MATCHED|MERGE|MICROSECOND|MILLISECOND|MINUS|MSCK|NAMESPACE|NAMESPACES|NATURAL|NO|NOT|' + 'NULLS|OF|ON|ONLY|OPTION|OPTIONS|OR|ORDER|OUT|OUTER|OUTPUTFORMAT|OVER|OVERLAPS|OVERLAY|OVERWRITE|PARTITION|' + 'PARTITIONED|PARTITIONS|PERCENT|PERCENTILE_CONT|PERCENTILE_DISC|PIVOT|PLACING|POSITION|PRECEDING|PRIMARY|' + 'PRINCIPALS|PROPERTIES|PURGE|QUARTER|QUERY|RANGE|RECORDREADER|RECORDWRITER|RECOVER|REDUCE|REFERENCES|REFRESH|' + 'REGEXP|RENAME|REPAIR|REPEATABLE|REPLACE|RESET|RESPECT|RESTRICT|REVOKE|RIGHT|RLIKE|ROLE|ROLES|ROLLBACK|ROLLUP|' + 'ROW|ROWS|SCHEMA|SCHEMAS|SELECT|SEMI|SEPARATED|SERDE|SERDEPROPERTIES|SESSION_USER|SET|SETS|SHOW|SKEWED|SOME|' + 'SORT|SORTED|START|STATISTICS|STORED|STRATIFY|SUBSTR|SUBSTRING|SYNC|SYSTEM_TIME|SYSTEM_VERSION|TABLE|TABLES|' + 'TABLESAMPLE|TBLPROPERTIES|TEMP|TEMPORARY|TERMINATED|THEN|TIME|TIMESTAMPADD|TIMESTAMPDIFF|TO|TOUCH|TRAILING|' + 'TRANSACTION|TRANSACTIONS|TRANSFORM|TRIM|TRUNCATE|TRY_CAST|TYPE|UNARCHIVE|UNBOUNDED|UNCACHE|UNION|UNIQUE|' + 'UNKNOWN|UNLOCK|UNSET|UPDATE|USE|USER|USING|VALUES|VERSION|VIEW|VIEWS|WEEK|WHEN|WHERE|WINDOW|WITH|WITHIN|ZONE';
    var builtinConstants = 'AVRO|DAY|FALSE|HOUR|KUDU|MINUTE|MONTH|NULL|ORC|PARQUET|RCFILE|SECOND|SEQUENCEFILE|TEXTFILE|TRUE|YEAR';
    var builtinFunctions = 'ABS|ACOS|ACOSH|ADD_MONTHS|AES_DECRYPT|AES_ENCRYPT|ANY|APPROX_COUNT_DISTINCT|APPROX_PERCENTILE|ARRAY|ARRAY_AGG|' + 'ARRAY_CONTAINS|ARRAY_DISTINCT|ARRAY_EXCEPT|ARRAY_INTERSECT|ARRAY_JOIN|ARRAY_MAX|ARRAY_MIN|ARRAY_POSITION|' + 'ARRAY_REMOVE|ARRAY_REPEAT|ARRAY_UNION|ARRAYS_OVERLAP|ARRAYS_ZIP|ASCII|ASIN|ASINH|ASSERT_TRUE|ATAN|ATAN2|ATANH|' + 'AVG|BASE64|BIGINT|BIN|BINARY|BIT_AND|BIT_COUNT|BIT_GET|BIT_LENGTH|BIT_OR|BIT_XOR|BOOL_AND|BOOL_OR|BOOLEAN|' + 'BROUND|BTRIM|CAST|CBRT|CEIL|CEILING|CHAR|CHAR_LENGTH|CHARACTER_LENGTH|CHR|COALESCE|COLLECT_LIST|COLLECT_SET|' + 'CONCAT_WS|CONTAINS|CONV|CORR|COS|COSH|COT|COUNT|COUNT_MIN_SKETCH|COVAR_POP|COVAR_SAMP|CSC|CUME_DIST|' + 'CURRENT_CATALOG|CURRENT_DATABASE|CURRENT_DATE|CURRENT_TIMESTAMP|CURRENT_TIMEZONE|CURRENT_USER|DATE|DATE_ADD|' + 'DATE_FORMAT|DATE_FROM_UNIX_DATE|DATE_PART|DATE_SUB|DATE_TRUNC|DATEDIFF|DAY|DAYOFMONTH|DAYOFWEEK|DAYOFYEAR|' + 'DECIMAL|DECODE|DEGREES|DENSE_RANK|DOUBLE|E|ELEMENT_AT|ELT|ENCODE|ENDSWITH|EVERY|EXP|EXPLODE|EXPLODE_OUTER|' + 'EXPM1|EXPR1|EXTRACT|FACTORIAL|FIND_IN_SET|FIRST|FIRST_VALUE|FLATTEN|FLOAT|FLOOR|FORMAT_NUMBER|FORMAT_STRING|' + 'FROM_JSON|FROM_UNIXTIME|FROM_UTC_TIMESTAMP|GET_JSON_OBJECT|GETBIT|GREATEST|GROUPING|GROUPING_ID|HEX|' + 'HISTOGRAM_NUMERIC|HOUR|HYPOT|IF|IFNULL|INITCAP|INLINE|INLINE_OUTER|INPUT_FILE_BLOCK_LENGTH|' + 'INPUT_FILE_BLOCK_START|INPUT_FILE_NAME|INSTR|INT|ISNAN|ISNOTNULL|ISNULL|JAVA_METHOD|JSON_ARRAY_LENGTH|' + 'JSON_OBJECT_KEYS|JSON_TUPLE|KURTOSIS|LAG|LAST|LAST_DAY|LAST_VALUE|LCASE|LEAD|LEAST|LEFT|LENGTH|LEVENSHTEIN|LN|' + 'LOCATE|LOG|LOG10|LOG1P|LOG2|LOWER|LPAD|LTRIM|MAKE_DATE|MAKE_DT_INTERVAL|MAKE_INTERVAL|MAKE_TIMESTAMP|' + 'MAKE_YM_INTERVAL|MAP|MAP_CONCAT|MAP_CONTAINS_KEY|MAP_ENTRIES|MAP_FROM_ARRAYS|MAP_FROM_ENTRIES|MAP_KEYS|' + 'MAP_VALUES|MAX|MAX_BY|MEAN|MIN|MIN_BY|MINUTE|MONOTONICALLY_INCREASING_ID|MONTH|MONTHS_BETWEEN|NANVL|NEGATIVE|' + 'NEXT_DAY|NOW|NTH_VALUE|NTILE|NULLIF|NVL|NVL2|OCTET_LENGTH|OVERLAY|PARSE_URL|PERCENT_RANK|PERCENTILE|' + 'PERCENTILE_APPROX|PI|PMOD|POSEXPLODE|POSEXPLODE_OUTER|POSITION|POSITIVE|POW|POWER|PRINTF|QUARTER|RADIANS|RAND|' + 'RANDN|RANDOM|RANK|REFLECT|REGEXP|REGEXP_EXTRACT|REGEXP_EXTRACT_ALL|REGEXP_LIKE|REGEXP_REPLACE|REGR_AVGX|' + 'REGR_AVGY|REGR_COUNT|REGR_R2|REPEAT|REPLACE|RIGHT|RINT|RLIKE|ROUND|ROW_NUMBER|RPAD|RTRIM|SCHEMA_OF_JSON|SEC|' + 'SECOND|SENTENCES|SEQUENCE|SESSION_WINDOW|SHIFTLEFT|SHIFTRIGHT|SHIFTRIGHTUNSIGNED|SHUFFLE|SIGN|SIGNUM|SIN|SINH|' + 'SKEWNESS|SLICE|SMALLINT|SOME|SORT_ARRAY|SOUNDEX|SPACE|SPARK_PARTITION_ID|SPLIT|SPLIT_PART|SQRT|STACK|' + 'STARTSWITH|STD|STDDEV|STDDEV_POP|STDDEV_SAMP|STR_TO_MAP|STRING|SUBSTR|SUBSTRING|SUBSTRING_INDEX|SUM|TAN|TANH|' + 'TIMESTAMP|TIMESTAMP_MICROS|TIMESTAMP_MILLIS|TIMESTAMP_SECONDS|TINYINT|TO_BINARY|TO_DATE|TO_JSON|TO_NUMBER|' + 'TO_TIMESTAMP|TO_UNIX_TIMESTAMP|TO_UTC_TIMESTAMP|TRANSLATE|TRIM|TRUNC|TRY_ADD|TRY_AVG|TRY_DIVIDE|' + 'TRY_ELEMENT_AT|TRY_MULTIPLY|TRY_SUBTRACT|TRY_SUM|TRY_TO_BINARY|TRY_TO_NUMBER|TYPEOF|UCASE|UNBASE64|UNHEX|' + 'UNIX_DATE|UNIX_MICROS|UNIX_MILLIS|UNIX_SECONDS|UNIX_TIMESTAMP|UPPER|UUID|VAR_POP|VAR_SAMP|VARIANCE|VERSION|' + 'WEEKDAY|WEEKOFYEAR|WIDTH_BUCKET|WINDOW|YEAR';
    var dataTypes = 'ARRAY|BIGINT|BINARY|BOOLEAN|BYTE|DATE|DEC|DECIMAL|DOUBLE|FLOAT|INT|INTEGER|LONG|MAP|NUMERIC|REAL|SHORT|' + 'SMALLINT|STRING|STRUCT|TIMESTAMP|TINYINT';
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  SparksqlHighlightRules.metaData = {
    fileTypes: ["hql", "q", "ql"],
    name: "Sparksql",
    scopeName: "source.sparksql"
  };
  oop.inherits(SparksqlHighlightRules, TextHighlightRules);
  exports.SparksqlHighlightRules = SparksqlHighlightRules;
});
ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
      this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
  };
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart

      return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1]) return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/folding/sqlserver", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/cstyle"], function (require, exports, module) {
  "use strict";

  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = exports.FoldMode = function () {};
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i;
    this.startRegionRe = /^\s*(\/\*|--)#?region\b/;
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1]) return this.getBeginEndBlock(session, row, i, match[1]);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      return;
    };
    this.getBeginEndBlock = function (session, row, column, matchSequence) {
      var start = {
        row: row,
        column: column + matchSequence.length
      };
      var maxRow = session.getLength();
      var line;
      var depth = 1;
      var re = /(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth++;else depth--;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > start.row) {
        return new Range(start.row, start.column, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});
ace.define("ace/mode/sparksql", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/sparksql_highlight_rules", "ace/mode/folding/sqlserver"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var SparksqlHighlightRules = require("./sparksql_highlight_rules").SparksqlHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;
  var Mode = function Mode() {
    this.HighlightRules = SparksqlHighlightRules;
    this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/sparksql";
    this.getCompletions = function (state, session, pos, prefix) {
      var keywords = this.$keywordList || this.$createKeywordList();
      return keywords.map(function (word) {
        return {
          ignoreCase: true,
          name: word,
          value: word,
          upperCaseValue: word.toUpperCase(),
          score: 1,
          meta: "keyword"
        };
      });
    };
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-sql.js":
/*!*********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-sql.js ***!
  \*********************************************************/
/***/ (() => {

ace.define("ace/mode/sql_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var SqlHighlightRules = function SqlHighlightRules() {
    var keywords = "select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|" + "when|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|" + "foreign|not|references|default|null|inner|cross|natural|database|drop|grant";
    var builtinConstants = "true|false";
    var builtinFunctions = "avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|" + "coalesce|ifnull|isnull|nvl";
    var dataTypes = "int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|" + "money|real|number|integer";
    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes
    }, "identifier", true);
    this.$rules = {
      "start": [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",
        // " string
        regex: '".*?"'
      }, {
        token: "string",
        // ' string
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
    this.normalizeRules();
  };
  oop.inherits(SqlHighlightRules, TextHighlightRules);
  exports.SqlHighlightRules = SqlHighlightRules;
});
ace.define("ace/mode/sql", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/sql_highlight_rules", "ace/range"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var SqlHighlightRules = require("./sql_highlight_rules").SqlHighlightRules;
  var Range = require("../range").Range;
  var Mode = function Mode() {
    this.HighlightRules = SqlHighlightRules;
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/sql";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/mode-text.js":
/*!**********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/mode-text.js ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/bigquery.js":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/bigquery.js ***!
  \******************************************************************/
/***/ (() => {

ace.define("ace/snippets/bigquery", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "bigquery";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/dasksql.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/dasksql.js ***!
  \*****************************************************************/
/***/ (() => {

ace.define("ace/snippets/dasksql", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "dasksql";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/druid.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/druid.js ***!
  \***************************************************************/
/***/ (() => {

ace.define("ace/snippets/druid", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "druid";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/elasticsearch.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/elasticsearch.js ***!
  \***********************************************************************/
/***/ (() => {

ace.define("ace/snippets/elasticsearch", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "elasticsearch";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/flink.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/flink.js ***!
  \***************************************************************/
/***/ (() => {

ace.define("ace/snippets/flink", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "flink";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/hive.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/hive.js ***!
  \**************************************************************/
/***/ (() => {

ace.define("ace/snippets/hive", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = "snippet tbl\n\
	create table ${1:table_name} (\n\
		${2:columns}\n\
	);\n\
snippet s*\n\
	select * from ${1:table_name}\n\
snippet showcolumns\n\
	SHOW COLUMNS (FROM|IN) table_name [(FROM|IN) db_name];\n\
snippet showcompactions\n\
	SHOW COMPACTIONS;\n\
snippet showconf\n\
	SHOW CONF <configuration_name>;\n\
snippet showcreate\n\
	SHOW CREATE TABLE ([db_name.]table_name|view_name);\n\
snippet showcurrentroles\n\
	SHOW CURRENT ROLES;\n\
snippet showdatabases\n\
	SHOW (DATABASES|SCHEMAS) [LIKE 'identifier_with_wildcards'];\n\
snippet showdblocks\n\
	SHOW LOCKS (DATABASE|SCHEMA) database_name;\n\
snippet showfunctions\n\
	SHOW FUNCTIONS \"a.*\";\n\
snippet showgrant\n\
	SHOW GRANT;\n\
snippet showindex\n\
	SHOW [FORMATTED] (INDEX|INDEXES) ON ${1:table_with_index} [(FROM|IN) ${2:db_name}];\n\
snippet showlocks\n\
	SHOW LOCKS ${1:table_name} PARTITION (${2:partition_spec}) EXTENDED;\n\
snippet showpartitions\n\
	SHOW PARTITIONS ${1:table_name} PARTITION(ds='2010-03-03', hr='12');\n\
snippet showprincipals\n\
	SHOW PRINCIPALS;\n\
snippet showrolegrant\n\
	SHOW ROLE GRANT;\n\
snippet showroles\n\
	SHOW ROLES;\n\
snippet showtableextended\n\
	SHOW TABLE EXTENDED [IN|FROM ${1:database_name}] LIKE 'identifier_with_wildcards' [PARTITION(${2:partition_spec})];\n\
snippet showtables\n\
	SHOW TABLES [IN ${1:database_name}] ['identifier_with_wildcards'];\n\
snippet showtblproperties\n\
	SHOW TBLPROPERTIES ${1:table_name};\n\
snippet showtransactions\n\
	SHOW TRANSACTIONS;\n\
";
  exports.scope = "hive";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/hplsql.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/hplsql.js ***!
  \****************************************************************/
/***/ (() => {

ace.define("ace/snippets/hplsql", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "hplsql";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/impala.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/impala.js ***!
  \****************************************************************/
/***/ (() => {

ace.define("ace/snippets/impala", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = "snippet tbl\n\
	create table ${1:table} (\n\
		${2:columns}\n\
	);\n\
snippet s*\n\
	select * from ${1:table}\n\
";
  exports.scope = "impala";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/ksql.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/ksql.js ***!
  \**************************************************************/
/***/ (() => {

ace.define("ace/snippets/ksql", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "ksql";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/markdown.js":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/markdown.js ***!
  \******************************************************************/
/***/ (() => {

ace.define("ace/snippets/markdown", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = "# Markdown\n\
\n\
# Includes octopress (http://octopress.org/) snippets\n\
\n\
snippet [\n\
	[${1:text}](http://${2:address} \"${3:title}\")\n\
snippet [*\n\
	[${1:link}](${2:`@*`} \"${3:title}\")${4}\n\
\n\
snippet [:\n\
	[${1:id}]: http://${2:url} \"${3:title}\"\n\
snippet [:*\n\
	[${1:id}]: ${2:`@*`} \"${3:title}\"\n\
\n\
snippet ![\n\
	![${1:alttext}](${2:/images/image.jpg} \"${3:title}\")\n\
snippet ![*\n\
	![${1:alt}](${2:`@*`} \"${3:title}\")${4}\n\
\n\
snippet ![:\n\
	![${1:id}]: ${2:url} \"${3:title}\"\n\
snippet ![:*\n\
	![${1:id}]: ${2:`@*`} \"${3:title}\"\n\
\n\
snippet ===\n\
regex /^/=+/=*//\n\
	${PREV_LINE/./=/g}\n\
	\n\
	${0}\n\
snippet ---\n\
regex /^/-+/-*//\n\
	${PREV_LINE/./-/g}\n\
	\n\
	${0}\n\
snippet blockquote\n\
	{% blockquote %}\n\
	${1:quote}\n\
	{% endblockquote %}\n\
\n\
snippet blockquote-author\n\
	{% blockquote ${1:author}, ${2:title} %}\n\
	${3:quote}\n\
	{% endblockquote %}\n\
\n\
snippet blockquote-link\n\
	{% blockquote ${1:author} ${2:URL} ${3:link_text} %}\n\
	${4:quote}\n\
	{% endblockquote %}\n\
\n\
snippet bt-codeblock-short\n\
	```\n\
	${1:code_snippet}\n\
	```\n\
\n\
snippet bt-codeblock-full\n\
	``` ${1:language} ${2:title} ${3:URL} ${4:link_text}\n\
	${5:code_snippet}\n\
	```\n\
\n\
snippet codeblock-short\n\
	{% codeblock %}\n\
	${1:code_snippet}\n\
	{% endcodeblock %}\n\
\n\
snippet codeblock-full\n\
	{% codeblock ${1:title} lang:${2:language} ${3:URL} ${4:link_text} %}\n\
	${5:code_snippet}\n\
	{% endcodeblock %}\n\
\n\
snippet gist-full\n\
	{% gist ${1:gist_id} ${2:filename} %}\n\
\n\
snippet gist-short\n\
	{% gist ${1:gist_id} %}\n\
\n\
snippet img\n\
	{% img ${1:class} ${2:URL} ${3:width} ${4:height} ${5:title_text} ${6:alt_text} %}\n\
\n\
snippet youtube\n\
	{% youtube ${1:video_id} %}\n\
\n\
# The quote should appear only once in the text. It is inherently part of it.\n\
# See http://octopress.org/docs/plugins/pullquote/ for more info.\n\
\n\
snippet pullquote\n\
	{% pullquote %}\n\
	${1:text} {\" ${2:quote} \"} ${3:text}\n\
	{% endpullquote %}\n\
";
  exports.scope = "markdown";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/mysql.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/mysql.js ***!
  \***************************************************************/
/***/ (() => {

ace.define("ace/snippets/mysql", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "mysql";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/pgsql.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/pgsql.js ***!
  \***************************************************************/
/***/ (() => {

ace.define("ace/snippets/pgsql", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "pgsql";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/phoenix.js":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/phoenix.js ***!
  \*****************************************************************/
/***/ (() => {

ace.define("ace/snippets/phoenix", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "phoenix";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/presto.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/presto.js ***!
  \****************************************************************/
/***/ (() => {

ace.define("ace/snippets/presto", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "presto";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/solr.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/solr.js ***!
  \**************************************************************/
/***/ (() => {

ace.define("ace/snippets/solr", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "solr";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/sql.js":
/*!*************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/sql.js ***!
  \*************************************************************/
/***/ (() => {

ace.define("ace/snippets/sql", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = "snippet tbl\n\
	create table ${1:table} (\n\
		${2:columns}\n\
	);\n\
snippet col\n\
	${1:name}	${2:type}	${3:default ''}	${4:not null}\n\
snippet ccol\n\
	${1:name}	varchar2(${2:size})	${3:default ''}	${4:not null}\n\
snippet ncol\n\
	${1:name}	number	${3:default 0}	${4:not null}\n\
snippet dcol\n\
	${1:name}	date	${3:default sysdate}	${4:not null}\n\
snippet ind\n\
	create index ${3:$1_$2} on ${1:table}(${2:column});\n\
snippet uind\n\
	create unique index ${1:name} on ${2:table}(${3:column});\n\
snippet tblcom\n\
	comment on table ${1:table} is '${2:comment}';\n\
snippet colcom\n\
	comment on column ${1:table}.${2:column} is '${3:comment}';\n\
snippet addcol\n\
	alter table ${1:table} add (${2:column} ${3:type});\n\
snippet seq\n\
	create sequence ${1:name} start with ${2:1} increment by ${3:1} minvalue ${4:1};\n\
snippet s*\n\
	select * from ${1:table}\n\
";
  exports.scope = "sql";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/snippets/text.js":
/*!**************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/snippets/text.js ***!
  \**************************************************************/
/***/ (() => {

ace.define("ace/snippets/text", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = undefined;
  exports.scope = "text";
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/theme-hue.js":
/*!**********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/theme-hue.js ***!
  \**********************************************************/
/***/ (() => {

ace.define("ace/theme/hue", ["require", "exports", "module", "ace/lib/dom"], function (require, exports, module) {
  exports.isDark = false;
  exports.cssClass = "ace-hue";
  exports.cssText = "\
.ace_hidden-cursors .ace_cursor {\
opacity: 0;\
}\
.ace-hue .ace_print-margin {\
width: 1px;\
background: #f6f6f6\
}\
.ace-hue {\
background-color: #FFFFFF;\
color: #4D4D4C\
}\
.ace-hue .ace_cursor {\
color: #AEAFAD\
}\
.ace-hue .ace_marker-layer .ace_selection {\
background: #D6D6D6\
}\
.ace-hue.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
}\
.ace-hue .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0)\
}\
.ace-hue .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #D1D1D1\
}\
.ace-hue .ace_marker-layer .ace_selected-word {\
border: 1px solid #D6D6D6\
}\
.ace-hue .ace_marker-layer .ace_error-line {\
position: absolute;\
background-color: #f2dede;\
width: 100% !important;\
margin-left: -3px;\
}\
.ace-hue .ace_marker-layer .ace_warning-line {\
position: absolute;\
background-color: #fcf8e3;\
width: 100% !important;\
margin-left: -3px;\
}\
.ace-hue .ace_invisible {\
color: #BBB\
}\
.ace-hue .ace_keyword,\
.ace-hue .ace_meta,\
.ace-hue .ace_storage,\
.ace-hue .ace_storage.ace_type,\
.ace-hue .ace_support.ace_type {\
color: #8959A8\
}\
.ace-hue .ace_keyword.ace_operator {\
color: #3E999F\
}\
.ace_gutter {\
background: #F1F1F1;\
}\
.ace_gutter > .ace_layer {\
border-left: 1px solid #DBE8F1;\
color: #737373;\
}\
.ace_gutter-cell.ace_error {\
background-color: #f2dede;\
border-left:1px solid #d6616b;\
background-image: none !important;\
}\
.ace_gutter-cell.ace_warning {\
background-color: #fcf8e3;\
border-left:1px solid #f0c36d;\
background-image: none !important;\
}\
.ace_gutter-cell {\
padding-left: 0 !important;\
padding-right: 3px !important;\
}\
.ace-hue .ace_constant.ace_character,\
.ace-hue .ace_constant.ace_language,\
.ace-hue .ace_constant.ace_numeric,\
.ace-hue .ace_keyword.ace_other.ace_unit,\
.ace-hue .ace_support.ace_constant,\
.ace-hue .ace_variable.ace_parameter {\
color: #F5871F\
}\
.ace-hue .ace_constant.ace_other {\
color: #666969\
}\
.ace-hue .ace_invalid {\
color: #FFFFFF;\
background-color: #C82829\
}\
.ace-hue .ace_invalid.ace_deprecated {\
color: #FFFFFF;\
background-color: #8959A8\
}\
.ace-hue .ace_fold {\
background-color: #4271AE;\
border-color: #4D4D4C\
}\
.ace-hue .ace_entity.ace_name.ace_function,\
.ace-hue .ace_support.ace_function,\
.ace-hue .ace_variable {\
color: #4271AE\
}\
.ace-hue .ace_support.ace_class,\
.ace-hue .ace_support.ace_type {\
color: #C99E00\
}\
.ace-hue .ace_heading,\
.ace-hue .ace_markup.ace_heading,\
.ace-hue .ace_string {\
color: #718C00\
}\
.ace-hue .ace_entity.ace_name.ace_tag,\
.ace-hue .ace_entity.ace_other.ace_attribute-name,\
.ace-hue .ace_meta.ace_tag,\
.ace-hue .ace_string.ace_regexp,\
.ace-hue .ace_variable {\
color: #C82829\
}\
.ace-hue .ace_comment {\
color: #8E908C\
}\
.ace-hue .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y\
}\
.ace-spinner, .ace-inline-button {\
position: absolute;\
z-index: 1030;\
}\
.ace-inline-button {\
opacity: 0.7;\
}\
.ace-inline-button:hover {\
opacity: 1;\
}\
.ace_tooltip {\
background: #F7F7F7 !important;\
border: none !important;\
color: #333;\
padding: 3px !important;\
}\
.ace_tooltip hr {\
margin: 3px !important;\
}\
.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line, .ace_editor.ace_autocomplete .ace_marker-layer .ace_line-hover {\
background-color: #DBE8F1;\
z-index: 1;\
}\
";
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/ext/ace/theme-hue_dark.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/ace/theme-hue_dark.js ***!
  \***************************************************************/
/***/ (() => {

ace.define("ace/theme/hue_dark", ["require", "exports", "module", "ace/lib/dom"], function (require, exports, module) {
  exports.isDark = true;
  exports.cssClass = "ace-hue-dark";
  exports.cssText = "\
.ace-hue-dark .ace_hidden-cursors .ace_cursor {\
opacity: 0;\
}\
.ace-hue-dark .ace_print-margin {\
width: 1px;\
background: #232323;\
}\
.ace-hue-dark {\
background-color: #141414;\
color: #E7E7E7;\
}\
.ace-hue-dark .ace_cursor {\
color: #A7A7A7;\
}\
.ace-hue-dark .ace_marker-layer .ace_selection {\
background: rgba(221, 240, 255, 0.20);\
}\
.ace-hue-dark.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0 #141414;\
}\
.ace-hue-dark .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0);\
}\
.ace-hue-dark .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(255, 255, 255, 0.25);\
}\
.ace-hue-dark .ace_marker-layer .ace_selected-word {\
border: 1px solid rgba(221, 240, 255, 0.20);\
}\
.ace-hue-dark .ace_marker-layer .ace_error-line {\
position: absolute;\
background-color: #FFB2B2;\
width: 100% !important;\
margin-left: -3px;\
border-radius: 0 !important;\
}\
.ace-hue-dark .ace_marker-layer .ace_warning-line {\
position: absolute;\
background-color: #fcf8e3;\
width: 100% !important;\
margin-left: -3px;\
border-radius: 0 !important;\
}\
.ace-hue-dark .ace_invisible {\
color: rgba(255, 255, 255, 0.25);\
}\
.ace-hue-dark .ace_keyword,\
.ace-hue-dark .ace_meta,\
.ace-hue-dark .ace_storage,\
.ace-hue-dark .ace_storage.ace_type,\
.ace-hue-dark .ace_support.ace_type {\
color: #B294BB;\
}\
.ace-hue .ace_keyword.ace_operator {\
color: #8ABEB7;\
}\
.ace-hue-dark .ace_gutter {\
background: #232323;\
color: #E2E2E2;\
}\
.ace-hue-dark .ace_gutter > .ace_layer {\
border-left: 1px solid #DBE8F1;\
color: #737373;\
}\
.ace-hue-dark .ace_gutter-cell.ace_error {\
background-color: #916062;\
border-left:1px solid #916062;\
background-image: none !important;\
}\
.ace-hue-dark .ace_gutter-cell.ace_warning {\
background-color: #fcf8e3;\
border-left:1px solid #f0c36d;\
background-image: none !important;\
}\
.ace-hue-dark .ace_gutter-cell {\
padding-left: 0 !important;\
padding-right: 3px !important;\
}\
.ace-hue-dark .ace_constant.ace_character,\
.ace-hue-dark .ace_constant.ace_language,\
.ace-hue-dark .ace_constant.ace_numeric,\
.ace-hue-dark .ace_keyword.ace_other.ace_unit,\
.ace-hue-dark .ace_support.ace_constant,\
.ace-hue-dark .ace_variable.ace_parameter  {\
color: #7ECAEB;\
}\
.ace-hue-dark .ace_constant.ace_other {\
color: #666969;\
}\
.ace-hue-dark .ace_invalid {\
color: #E7E7E7;\
background-color: rgba(86, 45, 86, 0.75);\
}\
.ace-hue-dark .ace_invalid.ace_deprecated {\
color: #E7E7E7;\
background-color: rgba(86, 45, 86, 0.75);\
}\
.ace-hue-dark .ace_fold {\
background-color: #AC885B;\
border-color: #E7E7E7;\
}\
.ace-hue-dark .ace_entity.ace_name.ace_function,\
.ace-hue-dark .ace_support.ace_function,\
.ace-hue-dark .ace_variable {\
color: #81A2BE;\
}\
.ace-hue-dark .ace_support.ace_class,\
.ace-hue-dark .ace_support.ace_type {\
color: #9B859D;\
}\
.ace-hue-dark .ace_heading,\
.ace-hue-dark .ace_markup.ace_heading,\
.ace-hue-dark .ace_string {\
color: #8F9D6A;\
}\
.ace-hue-dark .ace_entity.ace_name.ace_tag,\
.ace-hue-dark .ace_entity.ace_other.ace_attribute-name,\
.ace-hue-dark .ace_meta.ace_tag,\
.ace-hue-dark .ace_string.ace_regexp,\
.ace-hue-dark .ace_variable {\
color: #AC885B;\
}\
.ace-hue-dark .ace_comment {\
color: #5F5A60;\
}\
.ace-hue-dark .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y;\
}\
.ace-hue-dark .ace-spinner, .ace-inline-button {\
position: absolute;\
z-index: 1030;\
}\
.ace-hue-dark .ace-inline-button {\
opacity: 0.7;\
}\
.ace-hue-dark .ace-inline-button:hover {\
opacity: 1;\
}\
.ace-hue-dark .ace_tooltip {\
background: #DCDCDC !important;\
border: none !important;\
color: #333;\
padding: 3px !important;\
}\
.ace-hue-dark .ace_tooltip hr {\
margin: 3px !important;\
}\
.ace-hue-dark .ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line,\
.ace-hue-dark .ace_editor.ace_autocomplete .ace_marker-layer .ace_line-hover {\
background-color: #DBE8F1;\
z-index: 1;\
}";
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-3d824a78-bundle-a2a4f8506cb55bb7.js.map