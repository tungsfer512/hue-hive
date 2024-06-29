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
(this["webpackChunkgethue"] = this["webpackChunkgethue"] || []).push([["calcite-parser~dasksql-parser~flink-parser~generic-parser~-1419606629"],{

/***/ "./desktop/core/src/desktop/js/parse/sql/sqlParseUtils.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/parse/sql/sqlParseUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCATION_TYPES": () => (/* binding */ LOCATION_TYPES),
/* harmony export */   "SIMPLE_TABLE_REF_SUGGESTIONS": () => (/* binding */ SIMPLE_TABLE_REF_SUGGESTIONS),
/* harmony export */   "adjustForPartialBackticks": () => (/* binding */ adjustForPartialBackticks),
/* harmony export */   "equalIgnoreCase": () => (/* binding */ equalIgnoreCase),
/* harmony export */   "identifierEquals": () => (/* binding */ identifierEquals),
/* harmony export */   "initSharedAutocomplete": () => (/* binding */ initSharedAutocomplete),
/* harmony export */   "initSyntaxParser": () => (/* binding */ initSyntaxParser)
/* harmony export */ });
/* harmony import */ var _sql_stringDistance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sql/stringDistance */ "./desktop/core/src/desktop/js/sql/stringDistance.js");
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



// endsWith polyfill from hue_utils.js, needed as workers live in their own js environment
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.lastIndexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}
var identifierEquals = function identifierEquals(a, b) {
  return a && b && a.replace(/^\s*`/, '').replace(/`\s*$/, '').toLowerCase() === b.replace(/^\s*`/, '').replace(/`\s*$/, '').toLowerCase();
};
var equalIgnoreCase = function equalIgnoreCase(a, b) {
  return a && b && a.toLowerCase() === b.toLowerCase();
};
var SIMPLE_TABLE_REF_SUGGESTIONS = ['suggestJoinConditions', 'suggestAggregateFunctions', 'suggestFilters', 'suggestGroupBys', 'suggestOrderBys'];
var LOCATION_TYPES = {
  ALIAS: 'alias',
  ASTERISK: 'asterisk',
  COLUMN: 'column',
  DATABASE: 'database',
  FILE: 'file',
  FUNCTION: 'function',
  FUNCTION_ARGUMENT: 'functionArgument',
  STATEMENT: 'statement',
  STATEMENT_TYPE: 'statementType',
  TABLE: 'table',
  UNKNOWN: 'unknown',
  VARIABLE: 'variable'
};
var APPEND_BACKTICK_SUGGESTIONS = ['suggestColumns', 'suggestCommonTableExpressions', 'suggestDatabases', 'suggestTables'];
var adjustForPartialBackticks = function adjustForPartialBackticks(parser) {
  var partials = parser.yy.partialLengths;
  if (parser.yy.result && partials.backtickBefore && !partials.backtickAfter) {
    APPEND_BACKTICK_SUGGESTIONS.forEach(function (suggestionType) {
      if (parser.yy.result[suggestionType]) {
        parser.yy.result[suggestionType].appendBacktick = true;
      }
    });
  }
};
var initSharedAutocomplete = function initSharedAutocomplete(parser) {
  parser.SELECT_FIRST_OPTIONAL_KEYWORDS = [{
    value: 'ALL',
    weight: 2
  }, {
    value: 'DISTINCT',
    weight: 2
  }];
  var adjustLocationForCursor = function adjustLocationForCursor(location) {
    // columns are 0-based and lines not, so add 1 to cols
    var newLocation = {
      first_line: location.first_line,
      last_line: location.last_line,
      first_column: location.first_column + 1,
      last_column: location.last_column + 1
    };
    if (parser.yy.cursorFound) {
      if (parser.yy.cursorFound.first_line === newLocation.first_line && parser.yy.cursorFound.last_column <= newLocation.first_column) {
        var additionalSpace = parser.yy.partialLengths.left + parser.yy.partialLengths.right;
        additionalSpace -= parser.yy.partialCursor ? 1 : 3; // For some reason the normal cursor eats 3 positions.
        newLocation.first_column = newLocation.first_column + additionalSpace;
        newLocation.last_column = newLocation.last_column + additionalSpace;
      }
    }
    return newLocation;
  };
  parser.addAsteriskLocation = function (location, identifierChain) {
    parser.yy.locations.push({
      type: LOCATION_TYPES.ASTERISK,
      location: adjustLocationForCursor(location),
      identifierChain: identifierChain
    });
  };
  parser.addClauseLocation = function (type, precedingLocation, locationIfPresent, isCursor) {
    var location;
    if (isCursor) {
      if (parser.yy.partialLengths.left === 0 && parser.yy.partialLengths.right === 0) {
        location = {
          type: type,
          missing: true,
          location: adjustLocationForCursor({
            first_line: precedingLocation.last_line,
            first_column: precedingLocation.last_column,
            last_line: precedingLocation.last_line,
            last_column: precedingLocation.last_column
          })
        };
      } else {
        location = {
          type: type,
          missing: false,
          location: {
            first_line: locationIfPresent.last_line,
            first_column: locationIfPresent.last_column - 1,
            last_line: locationIfPresent.last_line,
            last_column: locationIfPresent.last_column - 1 + parser.yy.partialLengths.right + parser.yy.partialLengths.left
          }
        };
      }
    } else {
      location = {
        type: type,
        missing: !locationIfPresent,
        location: adjustLocationForCursor(locationIfPresent || {
          first_line: precedingLocation.last_line,
          first_column: precedingLocation.last_column,
          last_line: precedingLocation.last_line,
          last_column: precedingLocation.last_column
        })
      };
    }
    if (parser.isInSubquery()) {
      location.subquery = true;
    }
    parser.yy.locations.push(location);
  };
  parser.addColumnAliasLocation = function (location, alias, parentLocation) {
    var aliasLocation = {
      type: LOCATION_TYPES.ALIAS,
      source: 'column',
      alias: alias,
      location: adjustLocationForCursor(location),
      parentLocation: adjustLocationForCursor(parentLocation)
    };
    if (parser.yy.locations.length && parser.yy.locations[parser.yy.locations.length - 1].type === 'column') {
      var closestColumn = parser.yy.locations[parser.yy.locations.length - 1];
      if (closestColumn.location.first_line === aliasLocation.parentLocation.first_line && closestColumn.location.last_line === aliasLocation.parentLocation.last_line && closestColumn.location.first_column === aliasLocation.parentLocation.first_column && closestColumn.location.last_column === aliasLocation.parentLocation.last_column) {
        parser.yy.locations[parser.yy.locations.length - 1].alias = alias;
      }
    }
    parser.yy.locations.push(aliasLocation);
  };
  parser.addColumnLocation = function (location, identifierChain) {
    var isVariable = identifierChain.length && /\${[^}]*}/.test(identifierChain[identifierChain.length - 1].name);
    if (isVariable) {
      parser.yy.locations.push({
        type: LOCATION_TYPES.VARIABLE,
        location: adjustLocationForCursor(location),
        value: identifierChain[identifierChain.length - 1].name
      });
    } else {
      parser.yy.locations.push({
        type: LOCATION_TYPES.COLUMN,
        location: adjustLocationForCursor(location),
        identifierChain: identifierChain,
        qualified: identifierChain.length > 1
      });
    }
  };
  parser.addCteAliasLocation = function (location, alias) {
    parser.yy.locations.push({
      type: LOCATION_TYPES.ALIAS,
      source: 'cte',
      alias: alias,
      location: adjustLocationForCursor(location)
    });
  };
  parser.addDatabaseLocation = function (location, identifierChain) {
    parser.yy.locations.push({
      type: LOCATION_TYPES.DATABASE,
      location: adjustLocationForCursor(location),
      identifierChain: identifierChain
    });
  };
  parser.addFileLocation = function (location, path) {
    parser.yy.locations.push({
      type: LOCATION_TYPES.FILE,
      location: adjustLocationForCursor(location),
      path: path
    });
  };
  parser.addFunctionLocation = function (location, functionName) {
    // Remove trailing '(' from location
    var adjustedLocation = {
      first_line: location.first_line,
      last_line: location.last_line,
      first_column: location.first_column,
      last_column: location.last_column - 1
    };
    parser.yy.locations.push({
      type: LOCATION_TYPES.FUNCTION,
      location: adjustLocationForCursor(adjustedLocation),
      "function": functionName.toLowerCase()
    });
  };
  parser.addFunctionArgumentLocations = function (functionName, expressions, identifierChain) {
    if (!expressions || !expressions.length) {
      return;
    }
    expressions.forEach(function (details, idx) {
      var location = {
        type: LOCATION_TYPES.FUNCTION_ARGUMENT,
        location: adjustLocationForCursor(details.location),
        "function": functionName.toLowerCase(),
        argumentPosition: idx,
        identifierChain: identifierChain || [{
          name: functionName
        }],
        expression: details.expression
      };
      if (details.suffix) {
        location.suffix = details.suffix;
      }
      parser.yy.locations.push(location);
    });
  };
  parser.addNewDatabaseLocation = function (location, identifierChain) {
    parser.yy.definitions.push({
      type: LOCATION_TYPES.DATABASE,
      location: adjustLocationForCursor(location),
      identifierChain: identifierChain
    });
  };
  parser.addNewTableLocation = function (location, identifierChain, colSpec) {
    var columns = [];
    if (colSpec) {
      colSpec.forEach(function (col) {
        columns.push({
          identifierChain: [col.identifier],
          // TODO: Complex
          type: col.type,
          location: adjustLocationForCursor(col.location)
        });
      });
    }
    parser.yy.definitions.push({
      type: LOCATION_TYPES.TABLE,
      location: adjustLocationForCursor(location),
      identifierChain: identifierChain,
      columns: columns
    });
  };
  parser.addStatementLocation = function (location) {
    // Don't report lonely cursor as a statement
    if (location.first_line === location.last_line && Math.abs(location.last_column - location.first_column) === 1) {
      return;
    }
    var adjustedLocation;
    if (parser.yy.cursorFound && parser.yy.cursorFound.last_line === location.last_line && parser.yy.cursorFound.first_column >= location.first_column && parser.yy.cursorFound.last_column <= location.last_column) {
      var additionalSpace = parser.yy.partialLengths.left + parser.yy.partialLengths.right;
      adjustedLocation = {
        first_line: location.first_line,
        last_line: location.last_line,
        first_column: location.first_column + 1,
        last_column: location.last_column + additionalSpace - (parser.yy.partialCursor ? 0 : 2)
      };
    } else {
      adjustedLocation = {
        first_line: location.first_line,
        last_line: location.last_line,
        first_column: location.first_column + 1,
        last_column: location.last_column + 1
      };
    }
    parser.yy.locations.push({
      type: LOCATION_TYPES.STATEMENT,
      location: adjustedLocation
    });
  };
  parser.addStatementTypeLocation = function (identifier, location, additionalText) {
    // Don't add if already there except for SELECT
    if (identifier !== 'SELECT' && parser.yy.allLocations) {
      for (var i = parser.yy.allLocations.length - 1; i >= 0; i--) {
        if (parser.yy.allLocations[i] && parser.yy.allLocations[i].type === LOCATION_TYPES.STATEMENT) {
          break;
        }
        if (parser.yy.allLocations[i] && parser.yy.allLocations[i].type === LOCATION_TYPES.STATEMENT_TYPE) {
          return;
        }
      }
    }
    var loc = {
      type: LOCATION_TYPES.STATEMENT_TYPE,
      location: adjustLocationForCursor(location),
      identifier: identifier
    };
    if (typeof additionalText !== 'undefined') {
      switch (identifier) {
        case 'ALTER':
          if (/ALTER\s+VIEW/i.test(additionalText)) {
            loc.identifier = 'ALTER VIEW';
          } else {
            loc.identifier = 'ALTER TABLE';
          }
          break;
        case 'COMPUTE':
          loc.identifier = 'COMPUTE STATS';
          break;
        case 'CREATE':
          if (/CREATE\s+VIEW/i.test(additionalText)) {
            loc.identifier = 'CREATE VIEW';
          } else if (/CREATE\s+TABLE/i.test(additionalText)) {
            loc.identifier = 'CREATE TABLE';
          } else if (/CREATE\s+DATABASE/i.test(additionalText)) {
            loc.identifier = 'CREATE DATABASE';
          } else if (/CREATE\s+ROLE/i.test(additionalText)) {
            loc.identifier = 'CREATE ROLE';
          } else if (/CREATE\s+FUNCTION/i.test(additionalText)) {
            loc.identifier = 'CREATE FUNCTION';
          } else {
            loc.identifier = 'CREATE TABLE';
          }
          break;
        case 'DROP':
          if (/DROP\s+VIEW/i.test(additionalText)) {
            loc.identifier = 'DROP VIEW';
          } else if (/DROP\s+TABLE/i.test(additionalText)) {
            loc.identifier = 'DROP TABLE';
          } else if (/DROP\s+DATABASE/i.test(additionalText)) {
            loc.identifier = 'DROP DATABASE';
          } else if (/DROP\s+ROLE/i.test(additionalText)) {
            loc.identifier = 'DROP ROLE';
          } else if (/DROP\s+STATS/i.test(additionalText)) {
            loc.identifier = 'DROP STATS';
          } else if (/DROP\s+FUNCTION/i.test(additionalText)) {
            loc.identifier = 'DROP FUNCTION';
          } else {
            loc.identifier = 'DROP TABLE';
          }
          break;
        case 'INVALIDATE':
          loc.identifier = 'INVALIDATE METADATA';
          break;
        case 'LOAD':
          loc.identifier = 'LOAD DATA';
          break;
        case 'TRUNCATE':
          loc.identifier = 'TRUNCATE TABLE';
          break;
        default:
      }
    }
    parser.yy.locations.push(loc);
  };
  parser.addSubqueryAliasLocation = function (location, alias) {
    parser.yy.locations.push({
      type: LOCATION_TYPES.ALIAS,
      source: 'subquery',
      alias: alias,
      location: adjustLocationForCursor(location)
    });
  };
  parser.addTableAliasLocation = function (location, alias, identifierChain) {
    parser.yy.locations.push({
      type: LOCATION_TYPES.ALIAS,
      source: 'table',
      alias: alias,
      location: adjustLocationForCursor(location),
      identifierChain: identifierChain
    });
  };
  parser.addTableLocation = function (location, identifierChain) {
    parser.yy.locations.push({
      type: LOCATION_TYPES.TABLE,
      location: adjustLocationForCursor(location),
      identifierChain: identifierChain
    });
  };
  parser.addVariableLocation = function (location, value) {
    if (/\${[^}]*}/.test(value)) {
      parser.yy.locations.push({
        type: LOCATION_TYPES.VARIABLE,
        location: adjustLocationForCursor(location),
        value: value
      });
    }
  };
  parser.addUnknownLocation = function (location, identifierChain) {
    var isVariable = identifierChain.length && /\${[^}]*}/.test(identifierChain[identifierChain.length - 1].name);
    var loc;
    if (isVariable) {
      loc = {
        type: LOCATION_TYPES.VARIABLE,
        location: adjustLocationForCursor(location),
        value: identifierChain[identifierChain.length - 1].name
      };
    } else {
      loc = {
        type: LOCATION_TYPES.UNKNOWN,
        location: adjustLocationForCursor(location),
        identifierChain: identifierChain,
        qualified: identifierChain.length > 1
      };
    }
    parser.yy.locations.push(loc);
    return loc;
  };
  parser.applyTypes = function (suggestion, typeDetails) {
    suggestion.types = typeDetails.types;
    if (typeDetails.types && typeDetails.types[0] === 'UDFREF') {
      if (typeDetails["function"]) {
        suggestion.udfRef = typeDetails["function"];
      } else {
        suggestion.types = ['T'];
      }
    }
  };
  parser.applyTypeToSuggestions = function (details) {
    if (!details.types) {
      console.trace();
    }
    if (details.types[0] === 'BOOLEAN') {
      return;
    }
    if (parser.yy.result.suggestFunctions && !parser.yy.result.suggestFunctions.types) {
      parser.applyTypes(parser.yy.result.suggestFunctions, details);
    }
    if (parser.yy.result.suggestColumns && !parser.yy.result.suggestColumns.types) {
      parser.applyTypes(parser.yy.result.suggestColumns, details);
    }
  };
  parser.extractExpressionText = function (result) {
    var parts = [];
    for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      expressions[_key - 1] = arguments[_key];
    }
    var fail = expressions.some(function (expression) {
      if (typeof expression === 'undefined') {
        // Skip undefined (optionals)
        return false;
      }
      if (typeof expression === 'string' || typeof expression === 'number') {
        parts.push(expression);
      } else if (_typeof(expression) === 'object') {
        if (expression.text) {
          parts.push(expression.text);
        } else if (expression.columnReference) {
          parts.push(expression.columnReference.map(function (ref) {
            return ref.name;
          }).join('.'));
        } else {
          return true;
        }
      }
    });
    if (!fail) {
      result.text = parts.join(' ');
    }
  };
  parser.getSubQuery = function (cols) {
    var columns = [];
    cols.selectList.forEach(function (col) {
      var result = {};
      if (col.alias) {
        result.alias = col.alias;
      }
      if (col.valueExpression && col.valueExpression.columnReference) {
        result.identifierChain = col.valueExpression.columnReference;
      } else if (col.asterisk) {
        result.identifierChain = [{
          asterisk: true
        }];
      }
      if (col.valueExpression && col.valueExpression.types && col.valueExpression.types.length === 1) {
        result.type = col.valueExpression.types[0];
        if (result.type === 'UDFREF') {
          if (col.valueExpression["function"]) {
            result.udfRef = col.valueExpression["function"];
          } else {
            result.type = ['T'];
          }
        }
      }
      columns.push(result);
    });
    return {
      columns: columns
    };
  };
  var PARTIAL_BEFORE_REGEX = /[0-9a-zA-Z_`]*$/;
  var PARTIAL_AFTER_REGEX = /^[0-9a-zA-Z_`]*(?:\((?:[^)]*\))?)?/;
  parser.identifyPartials = function (beforeCursor, afterCursor) {
    var beforeMatch = beforeCursor.match(PARTIAL_BEFORE_REGEX);
    var afterMatch = afterCursor.match(PARTIAL_AFTER_REGEX);
    return {
      left: beforeMatch ? beforeMatch[0].length : 0,
      right: afterMatch ? afterMatch[0].length : 0,
      backtickBefore: beforeMatch && beforeMatch[0].indexOf('`') !== -1,
      backtickAfter: afterMatch && afterMatch[0].indexOf('`') !== -1
    };
  };
  parser.suggestKeywords = function (keywords) {
    if (typeof keywords === 'string') {
      keywords = parser.KEYWORDS && parser.KEYWORDS[keywords] || [];
    }
    var weightedKeywords = [];
    if (keywords.length === 0) {
      return;
    }
    keywords.forEach(function (keyword) {
      if (typeof keyword.weight !== 'undefined') {
        weightedKeywords.push(keyword);
      } else {
        weightedKeywords.push({
          value: keyword,
          weight: -1
        });
      }
    });
    weightedKeywords.sort(function (a, b) {
      if (a.weight !== b.weight) {
        return b.weight - a.weight;
      }
      return a.value.localeCompare(b.value);
    });
    parser.yy.result.suggestKeywords = weightedKeywords;
  };
  parser.valueExpressionSuggest = function (oppositeValueExpression, operator) {
    if (oppositeValueExpression && oppositeValueExpression.columnReference) {
      parser.suggestValues();
      parser.yy.result.colRef = {
        identifierChain: oppositeValueExpression.columnReference
      };
    }
    parser.suggestColumns();
    parser.suggestFunctions();
    var keywords = [{
      value: 'CASE',
      weight: 450
    }, {
      value: 'FALSE',
      weight: 450
    }, {
      value: 'NULL',
      weight: 450
    }, {
      value: 'TRUE',
      weight: 450
    }];
    if (typeof oppositeValueExpression === 'undefined' || typeof operator === 'undefined') {
      keywords = keywords.concat(['EXISTS', 'NOT']);
    }
    if (oppositeValueExpression && oppositeValueExpression.types[0] === 'NUMBER') {
      parser.applyTypeToSuggestions(oppositeValueExpression);
    }
    parser.suggestKeywords(keywords);
  };
};
var SYNTAX_PARSER_NOOP_FUNCTIONS = ['addAsteriskLocation', 'addClauseLocation', 'addColRefIfExists', 'addColRefToVariableIfExists', 'addColumnAliasLocation', 'addColumnLocation', 'addCommonTableExpressions', 'addCteAliasLocation', 'addDatabaseLocation', 'addFileLocation', 'addFunctionArgumentLocations', 'addFunctionLocation', 'addNewDatabaseLocation', 'addNewTableLocation', 'addStatementLocation', 'addStatementTypeLocation', 'addSubqueryAliasLocation', 'addTableAliasLocation', 'addTableLocation', 'addTablePrimary', 'addUnknownLocation', 'addVariableLocation', 'applyArgumentTypesToSuggestions', 'applyTypeToSuggestions', 'checkForKeywords', 'checkForSelectListKeywords', 'commitLocations', 'extractExpressionText', 'firstDefined', 'getSelectListKeywords', 'getSubQuery', 'getValueExpressionKeywords', 'identifyPartials', 'popQueryState', 'prepareNewStatement', 'pushQueryState', 'selectListNoTableSuggest', 'suggestAggregateFunctions', 'suggestAnalyticFunctions', 'suggestColRefKeywords', 'suggestColumns', 'suggestDatabases', 'suggestDdlAndDmlKeywords', 'suggestFileFormats', 'suggestFilters', 'suggestFunctions', 'suggestGroupBys', 'suggestHdfs', 'suggestIdentifiers', 'suggestJoinConditions', 'suggestJoins', 'suggestKeyValues', 'suggestKeywords', 'suggestOrderBys', 'suggestSelectListAliases', 'suggestTables', 'suggestTablesOrColumns', 'suggestValueExpressionKeywords', 'suggestValues', 'valueExpressionSuggest'];
var SYNTAX_PARSER_NOOP = function SYNTAX_PARSER_NOOP() {};
var initSyntaxParser = function initSyntaxParser(parser) {
  // Noop functions for compatibility with the autocomplete parser as the grammar is shared
  SYNTAX_PARSER_NOOP_FUNCTIONS.forEach(function (noopFn) {
    parser[noopFn] = SYNTAX_PARSER_NOOP;
  });
  parser.yy.locations = [{}];
  parser.determineCase = function (text) {
    if (!parser.yy.caseDetermined) {
      parser.yy.lowerCase = text.toLowerCase() === text;
      parser.yy.caseDetermined = true;
    }
  };
  parser.getKeywordsForOptionalsLR = function () {
    return [];
  };
  parser.mergeSuggestKeywords = function () {
    return {};
  };
  parser.getTypeKeywords = function () {
    return [];
  };
  parser.getColumnDataTypeKeywords = function () {
    return [];
  };
  parser.findCaseType = function () {
    return {
      types: ['T']
    };
  };
  parser.expandIdentifierChain = function () {
    return [];
  };
  parser.createWeightedKeywords = function () {
    return [];
  };
  parser.handleQuotedValueWithCursor = function (lexer, yytext, yylloc, quoteChar) {
    if (yytext.indexOf("\u2020") !== -1 || yytext.indexOf("\u2021") !== -1) {
      parser.yy.partialCursor = yytext.indexOf("\u2021") !== -1;
      var cursorIndex = parser.yy.partialCursor ? yytext.indexOf("\u2021") : yytext.indexOf("\u2020");
      parser.yy.cursorFound = {
        first_line: yylloc.first_line,
        last_line: yylloc.last_line,
        first_column: yylloc.first_column + cursorIndex,
        last_column: yylloc.first_column + cursorIndex + 1
      };
      var remainder = yytext.substring(cursorIndex + 1);
      var remainingQuotes = (lexer.upcomingInput().match(new RegExp(quoteChar, 'g')) || []).length;
      if (remainingQuotes > 0 && (remainingQuotes & 1) !== 0) {
        parser.yy.missingEndQuote = false;
        lexer.input();
      } else {
        parser.yy.missingEndQuote = true;
        lexer.unput(remainder);
      }
      lexer.popState();
      return true;
    }
    return false;
  };
  parser.yy.parseError = function (str, hash) {
    parser.yy.error = hash;
  };
  var IGNORED_EXPECTED = {
    ';': true,
    '.': true,
    CREATE_REMOTE: true,
    EOF: true,
    UNSIGNED_INTEGER: true,
    UNSIGNED_INTEGER_E: true,
    REGULAR_IDENTIFIER: true,
    CURSOR: true,
    PARTIAL_CURSOR: true,
    HDFS_START_QUOTE: true,
    HDFS_PATH: true,
    HDFS_END_QUOTE: true,
    COMPARISON_OPERATOR: true,
    // TODO: Expand in results when found
    ARITHMETIC_OPERATOR: true,
    // TODO: Expand in results when found
    VARIABLE_REFERENCE: true,
    BACKTICK: true,
    VALUE: true,
    PARTIAL_VALUE: true,
    SINGLE_QUOTE: true,
    DOUBLE_QUOTE: true
  };
  var CLEAN_EXPECTED = {
    BETWEEN_AND: 'AND',
    OVERWRITE_DIRECTORY: 'OVERWRITE',
    STORED_AS_DIRECTORIES: 'STORED',
    LIKE_PARQUET: 'LIKE',
    PARTITION_VALUE: 'PARTITION'
  };
  parser.parseSyntax = function (beforeCursor, afterCursor, debug) {
    parser.yy.caseDetermined = false;
    parser.yy.error = undefined;
    parser.yy.latestTablePrimaries = [];
    parser.yy.subQueries = [];
    parser.yy.selectListAliases = [];
    parser.yy.latestTablePrimaries = [];
    parser.yy.activeDialect = 'generic';

    // TODO: Find a way around throwing an exception when the parser finds a syntax error
    try {
      parser.yy.error = false;
      parser.parse(beforeCursor + afterCursor);
    } catch (err) {
      if (debug) {
        console.warn(parser.yy.error);
        throw err;
      }
    }
    if (parser.yy.error && (parser.yy.error.loc.last_column < beforeCursor.length || !beforeCursor.endsWith(parser.yy.error.text))) {
      var weightedExpected = [];
      var addedExpected = {};
      var isLowerCase = parser.yy.caseDetermined && parser.yy.lowerCase || parser.yy.error.text.toLowerCase() === parser.yy.error.text;
      if (parser.yy.error.expected.length === 2 && parser.yy.error.expected.indexOf("';'") !== -1 && parser.yy.error.expected.indexOf("'EOF'") !== -1) {
        parser.yy.error.expected = [];
        parser.yy.error.expectedStatementEnd = true;
        return parser.yy.error;
      }
      for (var i = 0; i < parser.yy.error.expected.length; i++) {
        var expected = parser.yy.error.expected[i];
        // Strip away the surrounding ' chars
        expected = expected.substring(1, expected.length - 1);
        // TODO: Only suggest alphanumeric?
        if (expected === 'REGULAR_IDENTIFIER') {
          parser.yy.error.expectedIdentifier = true;
          if (/^<[a-z]+>/.test(parser.yy.error.token)) {
            var text = '`' + parser.yy.error.text + '`';
            weightedExpected.push({
              text: text,
              distance: (0,_sql_stringDistance__WEBPACK_IMPORTED_MODULE_0__["default"])(parser.yy.error.text, text, true)
            });
            parser.yy.error.possibleReserved = true;
          }
        } else if (!IGNORED_EXPECTED[expected] && /[a-z_]+/i.test(expected)) {
          // Skip mixed-case expected
          if (expected.toUpperCase() !== expected) {
            continue;
          }
          expected = CLEAN_EXPECTED[expected] || expected;
          if (expected === parser.yy.error.text.toUpperCase()) {
            // Can happen when the lexer entry for a rule contains multiple words like 'stored' in 'stored as parquet'
            return false;
          }
          var _text = isLowerCase ? expected.toLowerCase() : expected;
          if (_text && !addedExpected[_text]) {
            addedExpected[_text] = true;
            weightedExpected.push({
              text: _text,
              distance: (0,_sql_stringDistance__WEBPACK_IMPORTED_MODULE_0__["default"])(parser.yy.error.text, _text, true)
            });
          }
        }
      }
      if (weightedExpected.length === 0) {
        parser.yy.error.expected = [];
        parser.yy.error.incompleteStatement = true;
        return parser.yy.error;
      }
      weightedExpected.sort(function (a, b) {
        if (a.distance === b.distance) {
          return a.text.localeCompare(b.text);
        }
        return a.distance - b.distance;
      });
      parser.yy.error.expected = weightedExpected;
      parser.yy.error.incompleteStatement = true;
      return parser.yy.error;
    } else if (parser.yy.error) {
      parser.yy.error.expected = [];
      parser.yy.error.incompleteStatement = true;
      return parser.yy.error;
    }
    return false;
  };
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/sql/reference/generic/typeConversion.ts":
/*!*****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/generic/typeConversion.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TYPE_CONVERSION": () => (/* binding */ TYPE_CONVERSION)
/* harmony export */ });
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

var TYPE_CONVERSION = {
  BOOLEAN: {
    BOOLEAN: true,
    TIMESTAMP: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  TIMESTAMP: {
    BOOLEAN: false,
    TIMESTAMP: true,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: false,
    VARCHAR: false,
    STRING: true,
    T: true
  },
  TINYINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  SMALLINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  INT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  BIGINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  DOUBLE: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: false,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  REAL: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: false,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  DECIMAL: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: true,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  FLOAT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  NUMBER: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: true,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  CHAR: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: true,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  VARCHAR: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: true,
    VARCHAR: true,
    STRING: false,
    T: true
  },
  STRING: {
    BOOLEAN: false,
    TIMESTAMP: true,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: true,
    VARCHAR: false,
    STRING: true,
    T: true
  },
  T: {
    BOOLEAN: true,
    TIMESTAMP: true,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: true,
    FLOAT: true,
    NUMBER: true,
    CHAR: true,
    VARCHAR: true,
    STRING: true,
    T: true
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/sql/reference/hive/typeConversion.ts":
/*!**************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/hive/typeConversion.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TYPE_CONVERSION": () => (/* binding */ TYPE_CONVERSION)
/* harmony export */ });
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

var TYPE_CONVERSION = {
  BOOLEAN: {
    BOOLEAN: true,
    TIMESTAMP: false,
    DATE: false,
    BINARY: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    INTEGER: false,
    BIGINT: false,
    FLOAT: false,
    DOUBLE: false,
    DECIMAL: false,
    NUMBER: false,
    STRING: false,
    CHAR: false,
    VARCHAR: false,
    T: true
  },
  TIMESTAMP: {
    BOOLEAN: false,
    TIMESTAMP: true,
    DATE: false,
    BINARY: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    INTEGER: false,
    BIGINT: false,
    FLOAT: false,
    DOUBLE: false,
    DECIMAL: false,
    NUMBER: false,
    STRING: false,
    CHAR: false,
    VARCHAR: false,
    T: true
  },
  DATE: {
    BOOLEAN: false,
    TIMESTAMP: false,
    DATE: true,
    BINARY: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    INTEGER: false,
    BIGINT: false,
    FLOAT: false,
    DOUBLE: false,
    DECIMAL: false,
    NUMBER: false,
    STRING: false,
    CHAR: false,
    VARCHAR: false,
    T: true
  },
  BINARY: {
    BOOLEAN: false,
    TIMESTAMP: false,
    DATE: false,
    BINARY: true,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    INTEGER: false,
    BIGINT: false,
    FLOAT: false,
    DOUBLE: false,
    DECIMAL: false,
    NUMBER: false,
    STRING: false,
    CHAR: false,
    VARCHAR: false,
    T: true
  },
  TINYINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    DATE: false,
    BINARY: false,
    TINYINT: true,
    SMALLINT: false,
    INT: false,
    INTEGER: false,
    BIGINT: false,
    FLOAT: false,
    DOUBLE: false,
    DECIMAL: false,
    NUMBER: true,
    STRING: false,
    CHAR: false,
    VARCHAR: false,
    T: true
  },
  SMALLINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    DATE: false,
    BINARY: false,
    TINYINT: true,
    SMALLINT: true,
    INT: false,
    INTEGER: false,
    BIGINT: false,
    FLOAT: false,
    DOUBLE: false,
    DECIMAL: false,
    NUMBER: true,
    STRING: false,
    CHAR: false,
    VARCHAR: false,
    T: true
  },
  INT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    DATE: false,
    BINARY: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    INTEGER: true,
    BIGINT: false,
    FLOAT: false,
    DOUBLE: false,
    DECIMAL: false,
    NUMBER: true,
    STRING: false,
    CHAR: false,
    VARCHAR: false,
    T: true
  },
  BIGINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    DATE: false,
    BINARY: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    INTEGER: true,
    BIGINT: true,
    FLOAT: false,
    DOUBLE: false,
    DECIMAL: false,
    NUMBER: true,
    STRING: false,
    CHAR: false,
    VARCHAR: false,
    T: true
  },
  FLOAT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    DATE: false,
    BINARY: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    INTEGER: true,
    BIGINT: true,
    FLOAT: true,
    DOUBLE: false,
    DECIMAL: false,
    NUMBER: true,
    STRING: false,
    CHAR: false,
    VARCHAR: false,
    T: true
  },
  DOUBLE: {
    BOOLEAN: false,
    TIMESTAMP: false,
    DATE: false,
    BINARY: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    INTEGER: true,
    BIGINT: true,
    FLOAT: true,
    DOUBLE: true,
    DECIMAL: false,
    NUMBER: true,
    STRING: true,
    CHAR: true,
    VARCHAR: true,
    T: true
  },
  DECIMAL: {
    BOOLEAN: false,
    TIMESTAMP: false,
    DATE: false,
    BINARY: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    INTEGER: true,
    BIGINT: true,
    FLOAT: true,
    DOUBLE: true,
    DECIMAL: true,
    NUMBER: true,
    STRING: true,
    CHAR: true,
    VARCHAR: true,
    T: true
  },
  NUMBER: {
    BOOLEAN: false,
    TIMESTAMP: false,
    DATE: false,
    BINARY: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    INTEGER: true,
    BIGINT: true,
    FLOAT: true,
    DOUBLE: true,
    DECIMAL: true,
    NUMBER: true,
    STRING: true,
    CHAR: true,
    VARCHAR: true,
    T: true
  },
  STRING: {
    BOOLEAN: false,
    TIMESTAMP: true,
    DATE: true,
    BINARY: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    INTEGER: true,
    BIGINT: true,
    FLOAT: true,
    DOUBLE: true,
    DECIMAL: true,
    NUMBER: true,
    STRING: true,
    CHAR: true,
    VARCHAR: true,
    T: true
  },
  CHAR: {
    BOOLEAN: false,
    TIMESTAMP: true,
    DATE: true,
    BINARY: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    INTEGER: true,
    BIGINT: true,
    FLOAT: true,
    DOUBLE: true,
    DECIMAL: true,
    NUMBER: true,
    STRING: true,
    CHAR: true,
    VARCHAR: true,
    T: true
  },
  VARCHAR: {
    BOOLEAN: false,
    TIMESTAMP: true,
    DATE: true,
    BINARY: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    INTEGER: true,
    BIGINT: true,
    FLOAT: true,
    DOUBLE: true,
    DECIMAL: true,
    NUMBER: true,
    STRING: true,
    CHAR: true,
    VARCHAR: true,
    T: true
  },
  T: {
    BOOLEAN: true,
    TIMESTAMP: true,
    DATE: true,
    BINARY: true,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    INTEGER: true,
    BIGINT: true,
    FLOAT: true,
    DOUBLE: true,
    DECIMAL: true,
    NUMBER: true,
    STRING: true,
    CHAR: true,
    VARCHAR: true,
    T: true
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/sql/reference/impala/typeConversion.ts":
/*!****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/impala/typeConversion.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TYPE_CONVERSION": () => (/* binding */ TYPE_CONVERSION)
/* harmony export */ });
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

var TYPE_CONVERSION = {
  BOOLEAN: {
    BOOLEAN: true,
    TIMESTAMP: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  TIMESTAMP: {
    BOOLEAN: false,
    TIMESTAMP: true,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: false,
    VARCHAR: false,
    STRING: true,
    T: true
  },
  TINYINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  SMALLINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  INT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  BIGINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  DOUBLE: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: false,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  REAL: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: false,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  DECIMAL: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: true,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  FLOAT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  NUMBER: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: true,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  CHAR: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: true,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  VARCHAR: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: true,
    VARCHAR: true,
    STRING: false,
    T: true
  },
  STRING: {
    BOOLEAN: false,
    TIMESTAMP: true,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: true,
    VARCHAR: false,
    STRING: true,
    T: true
  },
  T: {
    BOOLEAN: true,
    TIMESTAMP: true,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: true,
    FLOAT: true,
    NUMBER: true,
    CHAR: true,
    VARCHAR: true,
    STRING: true,
    T: true
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/sql/reference/sparksql/typeConversion.ts":
/*!******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/sparksql/typeConversion.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TYPE_CONVERSION": () => (/* binding */ TYPE_CONVERSION)
/* harmony export */ });
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

var TYPE_CONVERSION = {
  BOOLEAN: {
    BOOLEAN: true,
    TIMESTAMP: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  TIMESTAMP: {
    BOOLEAN: false,
    TIMESTAMP: true,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: false,
    VARCHAR: false,
    STRING: true,
    T: true
  },
  TINYINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  SMALLINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  INT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  BIGINT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  DOUBLE: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: false,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  REAL: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: false,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  DECIMAL: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: true,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  FLOAT: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  NUMBER: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: true,
    FLOAT: true,
    NUMBER: true,
    CHAR: false,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  CHAR: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: true,
    VARCHAR: false,
    STRING: false,
    T: true
  },
  VARCHAR: {
    BOOLEAN: false,
    TIMESTAMP: false,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: true,
    VARCHAR: true,
    STRING: false,
    T: true
  },
  STRING: {
    BOOLEAN: false,
    TIMESTAMP: true,
    TINYINT: false,
    SMALLINT: false,
    INT: false,
    BIGINT: false,
    DOUBLE: false,
    REAL: false,
    DECIMAL: false,
    FLOAT: false,
    NUMBER: false,
    CHAR: true,
    VARCHAR: false,
    STRING: true,
    T: true
  },
  T: {
    BOOLEAN: true,
    TIMESTAMP: true,
    TINYINT: true,
    SMALLINT: true,
    INT: true,
    BIGINT: true,
    DOUBLE: true,
    REAL: true,
    DECIMAL: true,
    FLOAT: true,
    NUMBER: true,
    CHAR: true,
    VARCHAR: true,
    STRING: true,
    T: true
  }
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/sql/reference/typeUtils.ts":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/typeUtils.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchesType": () => (/* binding */ matchesType)
/* harmony export */ });
/* harmony import */ var _generic_typeConversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic/typeConversion */ "./desktop/core/src/desktop/js/sql/reference/generic/typeConversion.ts");
/* harmony import */ var _hive_typeConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hive/typeConversion */ "./desktop/core/src/desktop/js/sql/reference/hive/typeConversion.ts");
/* harmony import */ var _impala_typeConversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impala/typeConversion */ "./desktop/core/src/desktop/js/sql/reference/impala/typeConversion.ts");
/* harmony import */ var _sparksql_typeConversion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sparksql/typeConversion */ "./desktop/core/src/desktop/js/sql/reference/sparksql/typeConversion.ts");
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





var stripPrecision = function stripPrecision(types) {
  var result = [];
  types.forEach(function (type) {
    if (type.indexOf('(') > -1) {
      result.push(type.substring(0, type.indexOf('(')));
    } else {
      result.push(type);
    }
  });
  return result;
};
var getTypeConversion = function getTypeConversion(dialect) {
  switch (dialect) {
    case 'hive':
      return _hive_typeConversion__WEBPACK_IMPORTED_MODULE_1__.TYPE_CONVERSION;
    case 'impala':
      return _impala_typeConversion__WEBPACK_IMPORTED_MODULE_2__.TYPE_CONVERSION;
    case 'sparksql':
      return _sparksql_typeConversion__WEBPACK_IMPORTED_MODULE_3__.TYPE_CONVERSION;
    default:
      return _generic_typeConversion__WEBPACK_IMPORTED_MODULE_0__.TYPE_CONVERSION;
  }
};

/**
 * Matches types based on implicit conversion i.e. if you expect a BIGINT then INT is ok but not BOOLEAN etc.
 */
var matchesType = function matchesType(dialect, expectedTypes, actualRawTypes) {
  if (expectedTypes.length === 1 && expectedTypes[0] === 'T') {
    return true;
  }
  var actualTypes = stripPrecision(actualRawTypes);
  if (actualTypes.indexOf('ARRAY') !== -1 || actualTypes.indexOf('MAP') !== -1 || actualTypes.indexOf('STRUCT') !== -1) {
    return true;
  }
  var conversionTable = getTypeConversion(dialect);
  for (var i = 0; i < expectedTypes.length; i++) {
    for (var j = 0; j < actualTypes.length; j++) {
      // To support future unknown types
      if (typeof conversionTable[expectedTypes[i]] === 'undefined' || typeof conversionTable[expectedTypes[i]][actualTypes[j]] == 'undefined') {
        return true;
      }
      if (conversionTable[expectedTypes[i]] && conversionTable[expectedTypes[i]][actualTypes[j]]) {
        return true;
      }
    }
  }
  return false;
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/sql/stringDistance.js":
/*!***********************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/stringDistance.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/**
 * Calculates the Optimal String Alignment distance between two strings. Returns 0 when the strings are equal and the
 * distance when not, distances is less than or equal to the length of the longest string.
 *
 * @param strA
 * @param strB
 * @param [ignoreCase]
 * @returns {number} The similarity
 */
var stringDistance = function stringDistance(strA, strB, ignoreCase) {
  if (ignoreCase) {
    strA = strA.toLowerCase();
    strB = strB.toLowerCase();
  }

  // TODO: Consider other algorithms for performance
  var strALength = strA.length;
  var strBLength = strB.length;
  if (strALength === 0) {
    return strBLength;
  }
  if (strBLength === 0) {
    return strALength;
  }
  var distances = new Array(strALength);
  var cost, deletion, insertion, substitution, transposition;
  for (var i = 0; i <= strALength; i++) {
    distances[i] = new Array(strBLength);
    distances[i][0] = i;
    for (var j = 1; j <= strBLength; j++) {
      if (!i) {
        distances[0][j] = j;
      } else {
        cost = strA[i - 1] === strB[j - 1] ? 0 : 1;
        deletion = distances[i - 1][j] + 1;
        insertion = distances[i][j - 1] + 1;
        substitution = distances[i - 1][j - 1] + cost;
        if (deletion <= insertion && deletion <= substitution) {
          distances[i][j] = deletion;
        } else if (insertion <= deletion && insertion <= substitution) {
          distances[i][j] = insertion;
        } else {
          distances[i][j] = substitution;
        }
        if (i > 1 && j > 1 && strA[i] === strB[j - 1] && strA[i - 1] === strB[j]) {
          transposition = distances[i - 2][j - 2] + cost;
          if (transposition < distances[i][j]) {
            distances[i][j] = transposition;
          }
        }
      }
    }
  }
  return distances[strALength][strBLength];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringDistance);

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/workers/calcite-parser~dasksql-parser~flink-parser~generic-parser~-1419606629-chunk-b7e4b3cae8617eea.js.map