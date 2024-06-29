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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hive-parser-75031a8f"],{

/***/ "./desktop/core/src/desktop/js/parse/sql/hive/sqlParseSupport.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/parse/sql/hive/sqlParseSupport.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _keywords_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keywords.json */ "./desktop/core/src/desktop/js/parse/sql/hive/keywords.json");
/* harmony import */ var sql_reference_typeUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sql/reference/typeUtils */ "./desktop/core/src/desktop/js/sql/reference/typeUtils.ts");
/* harmony import */ var _sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sqlParseUtils */ "./desktop/core/src/desktop/js/parse/sql/sqlParseUtils.js");
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




var initSqlParser = function initSqlParser(parser) {
  (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.initSharedAutocomplete)(parser);
  parser.DDL_AND_DML_KEYWORDS = ['ABORT', 'ALTER', 'ANALYZE TABLE', 'CREATE', 'DELETE', 'DESCRIBE', 'DROP', 'EXPORT', 'GRANT', 'IMPORT', 'INSERT', 'LOAD', 'MERGE', 'MSCK', 'RELOAD FUNCTION', 'RESET', 'REVOKE', 'SELECT', 'SET', 'SHOW', 'TRUNCATE', 'UPDATE', 'USE', 'WITH'];
  parser.prepareNewStatement = function () {
    linkTablePrimaries();
    parser.commitLocations();
    delete parser.yy.lateralViews;
    delete parser.yy.latestCommonTableExpressions;
    delete parser.yy.correlatedSubQuery;
    parser.yy.subQueries = [];
    parser.yy.selectListAliases = [];
    parser.yy.latestTablePrimaries = [];
    prioritizeSuggestions();
  };
  parser.yy.parseError = function (message, error) {
    parser.yy.errors.push(error);
    return message;
  };
  parser.addCommonTableExpressions = function (identifiers) {
    parser.yy.result.commonTableExpressions = identifiers;
    parser.yy.latestCommonTableExpressions = identifiers;
  };
  parser.isInSubquery = function () {
    return !!parser.yy.primariesStack.length;
  };
  parser.pushQueryState = function () {
    parser.yy.resultStack.push(parser.yy.result);
    parser.yy.locationsStack.push(parser.yy.locations);
    parser.yy.lateralViewsStack.push(parser.yy.lateralViews);
    parser.yy.selectListAliasesStack.push(parser.yy.selectListAliases);
    parser.yy.primariesStack.push(parser.yy.latestTablePrimaries);
    parser.yy.subQueriesStack.push(parser.yy.subQueries);
    parser.yy.result = {};
    parser.yy.locations = [];
    parser.yy.selectListAliases = []; // Not allowed in correlated sub-queries
    parser.yy.lateralViews = []; // Not allowed in correlated sub-queries

    if (parser.yy.correlatedSubQuery) {
      parser.yy.latestTablePrimaries = parser.yy.latestTablePrimaries.concat();
      parser.yy.subQueries = parser.yy.subQueries.concat();
    } else {
      parser.yy.latestTablePrimaries = [];
      parser.yy.subQueries = [];
    }
  };
  parser.popQueryState = function (subQuery) {
    linkTablePrimaries();
    parser.commitLocations();
    if (Object.keys(parser.yy.result).length === 0) {
      parser.yy.result = parser.yy.resultStack.pop();
    } else {
      parser.yy.resultStack.pop();
    }
    var oldSubQueries = parser.yy.subQueries;
    parser.yy.subQueries = parser.yy.subQueriesStack.pop();
    if (subQuery) {
      if (oldSubQueries.length > 0) {
        subQuery.subQueries = oldSubQueries;
      }
      parser.yy.subQueries.push(subQuery);
    }
    parser.yy.lateralViews = parser.yy.lateralViewsStack.pop();
    parser.yy.latestTablePrimaries = parser.yy.primariesStack.pop();
    parser.yy.locations = parser.yy.locationsStack.pop();
    parser.yy.selectListAliases = parser.yy.selectListAliasesStack.pop();
  };
  parser.suggestSelectListAliases = function () {
    if (parser.yy.selectListAliases && parser.yy.selectListAliases.length > 0 && parser.yy.result.suggestColumns && (typeof parser.yy.result.suggestColumns.identifierChain === 'undefined' || parser.yy.result.suggestColumns.identifierChain.length === 0)) {
      parser.yy.result.suggestColumnAliases = parser.yy.selectListAliases;
    }
  };
  parser.mergeSuggestKeywords = function () {
    var result = [];
    Array.prototype.slice.call(arguments).forEach(function (suggestion) {
      if (typeof suggestion !== 'undefined' && typeof suggestion.suggestKeywords !== 'undefined') {
        result = result.concat(suggestion.suggestKeywords);
      }
    });
    if (result.length > 0) {
      return {
        suggestKeywords: result
      };
    }
    return {};
  };
  parser.suggestValueExpressionKeywords = function (valueExpression, extras) {
    var expressionKeywords = parser.getValueExpressionKeywords(valueExpression, extras);
    parser.suggestKeywords(expressionKeywords.suggestKeywords);
    if (expressionKeywords.suggestColRefKeywords) {
      parser.suggestColRefKeywords(expressionKeywords.suggestColRefKeywords);
    }
    if (valueExpression.lastType) {
      parser.addColRefIfExists(valueExpression.lastType);
    } else {
      parser.addColRefIfExists(valueExpression);
    }
  };
  parser.getSelectListKeywords = function (excludeAsterisk) {
    var keywords = [{
      value: 'CASE',
      weight: 450
    }, 'EXISTS', 'FALSE', 'TRUE', 'NULL', 'NOT'];
    if (!excludeAsterisk) {
      keywords.push({
        value: '*',
        weight: 10000
      });
    }
    return keywords;
  };
  parser.getValueExpressionKeywords = function (valueExpression, extras) {
    var types = valueExpression.lastType ? valueExpression.lastType.types : valueExpression.types;
    // We could have valueExpression.columnReference to suggest based on column type
    var keywords = ['<', '<=', '<=>', '<>', '=', '>', '>=', 'BETWEEN', 'IN', 'IS NOT NULL', 'IS NULL', 'IS NOT TRUE', 'IS TRUE', 'IS NOT FALSE', 'IS FALSE', 'NOT BETWEEN', 'NOT IN'];
    if (extras) {
      keywords = keywords.concat(extras);
    }
    if (valueExpression.suggestKeywords) {
      keywords = keywords.concat(valueExpression.suggestKeywords);
    }
    if (types.length === 1 && types[0] === 'COLREF') {
      return {
        suggestKeywords: keywords,
        suggestColRefKeywords: {
          BOOLEAN: ['AND', 'OR'],
          NUMBER: ['+', '-', '*', '/', '%', 'DIV'],
          STRING: ['LIKE', 'NOT LIKE', 'REGEXP', 'RLIKE']
        }
      };
    }
    if ((0,sql_reference_typeUtils__WEBPACK_IMPORTED_MODULE_1__.matchesType)(parser.yy.activeDialect, ['BOOLEAN'], types)) {
      keywords = keywords.concat(['AND', 'OR']);
    }
    if ((0,sql_reference_typeUtils__WEBPACK_IMPORTED_MODULE_1__.matchesType)(parser.yy.activeDialect, ['NUMBER'], types)) {
      keywords = keywords.concat(['+', '-', '*', '/', '%', 'DIV']);
    }
    if ((0,sql_reference_typeUtils__WEBPACK_IMPORTED_MODULE_1__.matchesType)(parser.yy.activeDialect, ['STRING'], types)) {
      keywords = keywords.concat(['LIKE', 'NOT LIKE', 'REGEXP', 'RLIKE']);
    }
    return {
      suggestKeywords: keywords
    };
  };
  parser.getTypeKeywords = function () {
    return ['BIGINT', 'BINARY', 'BOOLEAN', 'CHAR', 'DATE', 'DECIMAL', 'DOUBLE', 'DOUBLE PRECISION', 'FLOAT', 'INT', 'INTEGER', 'SMALLINT', 'TIMESTAMP', 'STRING', 'TINYINT', 'VARCHAR'];
  };
  parser.getColumnDataTypeKeywords = function () {
    return parser.getTypeKeywords().concat(['ARRAY<>', 'MAP<>', 'STRUCT<>', 'UNIONTYPE<>']);
  };
  parser.addColRefIfExists = function (valueExpression) {
    if (valueExpression.columnReference) {
      parser.yy.result.colRef = {
        identifierChain: valueExpression.columnReference
      };
    }
  };
  parser.selectListNoTableSuggest = function (selectListEdit, hasDistinctOrAll) {
    if (selectListEdit.cursorAtStart) {
      var keywords = parser.getSelectListKeywords();
      if (!hasDistinctOrAll) {
        keywords = keywords.concat([{
          value: 'ALL',
          weight: 2
        }, {
          value: 'DISTINCT',
          weight: 2
        }]);
      }
      parser.suggestKeywords(keywords);
    } else {
      parser.checkForKeywords(selectListEdit);
    }
    if (selectListEdit.suggestFunctions) {
      parser.suggestFunctions();
    }
    if (selectListEdit.suggestColumns) {
      parser.suggestColumns();
    }
    if (selectListEdit.suggestAggregateFunctions && (!hasDistinctOrAll || hasDistinctOrAll === 'ALL')) {
      parser.suggestAggregateFunctions();
      parser.suggestAnalyticFunctions();
    }
  };
  parser.suggestJoinConditions = function (details) {
    parser.yy.result.suggestJoinConditions = details || {};
    if (parser.yy.latestTablePrimaries && !parser.yy.result.suggestJoinConditions.tablePrimaries) {
      parser.yy.result.suggestJoinConditions.tablePrimaries = parser.yy.latestTablePrimaries.concat();
    }
  };
  parser.suggestJoins = function (details) {
    parser.yy.result.suggestJoins = details || {};
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
    keywords = keywords.concat(['EXISTS', 'NOT']);
    if (oppositeValueExpression && oppositeValueExpression.types[0] === 'NUMBER') {
      parser.applyTypeToSuggestions(oppositeValueExpression);
    }
    parser.suggestKeywords(keywords);
  };
  parser.findCaseType = function (whenThenList) {
    var types = {};
    whenThenList.caseTypes.forEach(function (valueExpression) {
      valueExpression.types.forEach(function (type) {
        types[type] = true;
      });
    });
    if (Object.keys(types).length === 1) {
      return {
        types: [Object.keys(types)[0]]
      };
    }
    return {
      types: ['T']
    };
  };
  parser.applyArgumentTypesToSuggestions = function (functionName, position) {
    if (parser.yy.result.suggestFunctions || parser.yy.result.suggestColumns) {
      parser.yy.result.udfArgument = {
        name: functionName.toLowerCase(),
        position: position
      };
    }
  };
  parser.commitLocations = function () {
    if (parser.yy.locations.length === 0) {
      return;
    }
    var tablePrimaries = parser.yy.latestTablePrimaries;
    var i = parser.yy.locations.length;
    var _loop = function _loop() {
      var location = parser.yy.locations[i];
      if (location.type === 'variable' && location.colRef) {
        parser.expandIdentifierChain({
          wrapper: location.colRef,
          tablePrimaries: tablePrimaries,
          isColumnWrapper: true
        });
        delete location.colRef.linked;
      }
      if (location.type === 'unknown') {
        if (typeof location.identifierChain !== 'undefined' && location.identifierChain.length > 0 && location.identifierChain.length <= 2 && tablePrimaries) {
          var found = tablePrimaries.filter(function (primary) {
            return (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(primary.alias, location.identifierChain[0].name) || primary.identifierChain && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(primary.identifierChain[0].name, location.identifierChain[0].name);
          });
          if (!found.length && location.firstInChain) {
            found = tablePrimaries.filter(function (primary) {
              return !primary.alias && primary.identifierChain && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(primary.identifierChain[primary.identifierChain.length - 1].name, location.identifierChain[0].name);
            });
          }
          if (found.length) {
            if (found[0].identifierChain.length > 1 && location.identifierChain.length === 1 && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(found[0].identifierChain[0].name, location.identifierChain[0].name)) {
              location.type = 'database';
            } else if (found[0].alias && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(location.identifierChain[0].name, found[0].alias) && location.identifierChain.length > 1) {
              location.type = 'column';
              parser.expandIdentifierChain({
                tablePrimaries: tablePrimaries,
                wrapper: location,
                anyOwner: true
              });
            } else if (!found[0].alias && found[0].identifierChain && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(location.identifierChain[0].name, found[0].identifierChain[found[0].identifierChain.length - 1].name) && location.identifierChain.length > 1) {
              location.type = 'column';
              parser.expandIdentifierChain({
                tablePrimaries: tablePrimaries,
                wrapper: location,
                anyOwner: true
              });
            } else {
              location.type = 'table';
              parser.expandIdentifierChain({
                tablePrimaries: tablePrimaries,
                wrapper: location,
                anyOwner: true
              });
            }
          } else if (parser.yy.subQueries) {
            found = parser.yy.subQueries.filter(function (subQuery) {
              return (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(subQuery.alias, location.identifierChain[0].name);
            });
            if (found.length > 0) {
              location.type = 'subQuery';
              location.identifierChain = [{
                subQuery: found[0].alias
              }];
            }
          }
        }
      }
      if (location.type === 'asterisk' && !location.linked) {
        if (tablePrimaries && tablePrimaries.length > 0) {
          location.tables = [];
          location.linked = false;
          if (!location.identifierChain) {
            location.identifierChain = [{
              asterisk: true
            }];
          }
          parser.expandIdentifierChain({
            tablePrimaries: tablePrimaries,
            wrapper: location,
            anyOwner: false
          });
          if (location.tables.length === 0) {
            parser.yy.locations.splice(i, 1);
          }
        } else {
          parser.yy.locations.splice(i, 1);
        }
      }
      if (location.type === 'table' && typeof location.identifierChain !== 'undefined' && location.identifierChain.length === 1 && location.identifierChain[0].name) {
        // Could be a cte reference
        parser.yy.locations.some(function (otherLocation) {
          if (otherLocation.type === 'alias' && otherLocation.source === 'cte' && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.identifierEquals)(otherLocation.alias, location.identifierChain[0].name)) {
            // TODO: Possibly add the other location if we want to show the link in the future.
            //       i.e. highlight select definition on hover over alias, also for subquery references.
            location.type = 'alias';
            location.target = 'cte';
            location.alias = location.identifierChain[0].name;
            delete location.identifierChain;
            return true;
          }
        });
      }
      if (location.type === 'table' && (typeof location.identifierChain === 'undefined' || location.identifierChain.length === 0)) {
        parser.yy.locations.splice(i, 1);
      }
      if (location.type === 'unknown') {
        location.type = 'column';
      }

      // A column location might refer to a previously defined alias, i.e. last 'foo' in "SELECT cast(id AS int) foo FROM tbl ORDER BY foo;"
      if (location.type === 'column') {
        for (var j = i - 1; j >= 0; j--) {
          var otherLocation = parser.yy.locations[j];
          if (otherLocation.type === 'alias' && otherLocation.source === 'column' && location.identifierChain && location.identifierChain.length === 1 && location.identifierChain[0].name && otherLocation.alias && location.identifierChain[0].name.toLowerCase() === otherLocation.alias.toLowerCase()) {
            location.type = 'alias';
            location.source = 'column';
            location.alias = location.identifierChain[0].name;
            delete location.identifierChain;
            location.parentLocation = otherLocation.parentLocation;
            break;
          }
        }
      }
      if (location.type === 'column') {
        if (!location.linked) {
          location.identifierChain = parser.expandLateralViews(parser.yy.lateralViews, location.identifierChain);
        }
        var initialIdentifierChain = location.identifierChain ? location.identifierChain.concat() : undefined;
        parser.expandIdentifierChain({
          tablePrimaries: tablePrimaries,
          wrapper: location,
          anyOwner: true,
          isColumnWrapper: true,
          isColumnLocation: true
        });
        if (typeof location.identifierChain === 'undefined') {
          parser.yy.locations.splice(i, 1);
        } else if (location.identifierChain.length === 0 && initialIdentifierChain && initialIdentifierChain.length === 1) {
          // This is for the case "SELECT tblOrColName FROM db.tblOrColName";
          location.identifierChain = initialIdentifierChain;
        }
      }
      if (location.type === 'column' && location.identifierChain) {
        if (location.identifierChain.length > 1 && location.tables && location.tables.length > 0) {
          location.type = 'complex';
        }
      }
      delete location.firstInChain;
      if (location.type !== 'column' && location.type !== 'complex') {
        delete location.qualified;
      } else if (typeof location.qualified === 'undefined') {
        location.qualified = false;
      }
    };
    while (i--) {
      _loop();
    }
    if (parser.yy.locations.length > 0) {
      parser.yy.allLocations = parser.yy.allLocations.concat(parser.yy.locations);
      parser.yy.locations = [];
    }
  };
  var prioritizeSuggestions = function prioritizeSuggestions() {
    parser.yy.result.lowerCase = parser.yy.lowerCase || false;
    var cteIndex = {};
    if (typeof parser.yy.latestCommonTableExpressions !== 'undefined') {
      parser.yy.latestCommonTableExpressions.forEach(function (cte) {
        cteIndex[cte.alias.toLowerCase()] = cte;
      });
    }
    _sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.SIMPLE_TABLE_REF_SUGGESTIONS.forEach(function (suggestionType) {
      if (suggestionType !== 'suggestAggregateFunctions' && typeof parser.yy.result[suggestionType] !== 'undefined' && parser.yy.result[suggestionType].tables.length === 0) {
        delete parser.yy.result[suggestionType];
      } else if (typeof parser.yy.result[suggestionType] !== 'undefined' && typeof parser.yy.result[suggestionType].tables !== 'undefined') {
        for (var i = parser.yy.result[suggestionType].tables.length - 1; i >= 0; i--) {
          var table = parser.yy.result[suggestionType].tables[i];
          if (table.identifierChain.length === 1 && typeof table.identifierChain[0].name !== 'undefined' && typeof cteIndex[table.identifierChain[0].name.toLowerCase()] !== 'undefined') {
            parser.yy.result[suggestionType].tables.splice(i, 1);
          }
        }
      }
    });
    if (typeof parser.yy.result.colRef !== 'undefined') {
      if (!parser.yy.result.colRef.linked || typeof parser.yy.result.colRef.identifierChain === 'undefined' || parser.yy.result.colRef.identifierChain.length === 0) {
        delete parser.yy.result.colRef;
        if (typeof parser.yy.result.suggestColRefKeywords !== 'undefined') {
          Object.keys(parser.yy.result.suggestColRefKeywords).forEach(function (type) {
            parser.yy.result.suggestKeywords = parser.yy.result.suggestKeywords.concat(parser.createWeightedKeywords(parser.yy.result.suggestColRefKeywords[type], -1));
          });
          delete parser.yy.result.suggestColRefKeywords;
        }
        if (parser.yy.result.suggestColumns && parser.yy.result.suggestColumns.types.length === 1 && parser.yy.result.suggestColumns.types[0] === 'COLREF') {
          parser.yy.result.suggestColumns.types = ['T'];
        }
        delete parser.yy.result.suggestValues;
      }
    }
    if (typeof parser.yy.result.colRef !== 'undefined') {
      if (!parser.yy.result.suggestValues && !parser.yy.result.suggestColRefKeywords && (!parser.yy.result.suggestColumns || parser.yy.result.suggestColumns.types[0] !== 'COLREF')) {
        delete parser.yy.result.colRef;
      }
    }
    if (typeof parser.yy.result.suggestIdentifiers !== 'undefined' && parser.yy.result.suggestIdentifiers.length > 0) {
      delete parser.yy.result.suggestTables;
      delete parser.yy.result.suggestDatabases;
    }
    if (typeof parser.yy.result.suggestColumns !== 'undefined') {
      var suggestColumns = parser.yy.result.suggestColumns;
      if (typeof suggestColumns.tables === 'undefined' || suggestColumns.tables.length === 0) {
        delete parser.yy.result.suggestColumns;
        delete parser.yy.result.subQueries;
      } else {
        delete parser.yy.result.suggestTables;
        delete parser.yy.result.suggestDatabases;
        suggestColumns.tables.forEach(function (table) {
          if (typeof table.identifierChain !== 'undefined' && table.identifierChain.length === 1 && typeof table.identifierChain[0].name !== 'undefined') {
            var cte = cteIndex[table.identifierChain[0].name.toLowerCase()];
            if (typeof cte !== 'undefined') {
              delete table.identifierChain[0].name;
              table.identifierChain[0].cte = cte.alias;
            }
          } else if (typeof table.identifierChain === 'undefined' && table.subQuery) {
            table.identifierChain = [{
              subQuery: table.subQuery
            }];
            delete table.subQuery;
          }
        });
        if (typeof suggestColumns.identifierChain !== 'undefined' && suggestColumns.identifierChain.length === 0) {
          delete suggestColumns.identifierChain;
        }
      }
    } else {
      delete parser.yy.result.subQueries;
    }
    if (typeof parser.yy.result.suggestJoinConditions !== 'undefined') {
      if (typeof parser.yy.result.suggestJoinConditions.tables === 'undefined' || parser.yy.result.suggestJoinConditions.tables.length === 0) {
        delete parser.yy.result.suggestJoinConditions;
      }
    }
    if (typeof parser.yy.result.suggestTables !== 'undefined' && typeof parser.yy.result.commonTableExpressions !== 'undefined') {
      var ctes = [];
      parser.yy.result.commonTableExpressions.forEach(function (cte) {
        var suggestion = {
          name: cte.alias
        };
        if (parser.yy.result.suggestTables.prependFrom) {
          suggestion.prependFrom = true;
        }
        if (parser.yy.result.suggestTables.prependQuestionMark) {
          suggestion.prependQuestionMark = true;
        }
        ctes.push(suggestion);
      });
      if (ctes.length > 0) {
        parser.yy.result.suggestCommonTableExpressions = ctes;
      }
    }
  };
  parser.expandLateralViews = function (lateralViews, originalIdentifierChain, columnSuggestion) {
    var identifierChain = originalIdentifierChain.concat(); // Clone in case it's re-used
    var firstIdentifier = identifierChain[0];
    if (typeof lateralViews !== 'undefined') {
      lateralViews.concat().reverse().forEach(function (lateralView) {
        if (!lateralView.udtf.expression.columnReference) {
          return;
        }
        if ((0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(firstIdentifier.name, lateralView.tableAlias) && identifierChain.length > 1) {
          identifierChain.shift();
          firstIdentifier = identifierChain[0];
          if (columnSuggestion) {
            delete parser.yy.result.suggestKeywords;
          }
        } else if ((0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(firstIdentifier.name, lateralView.tableAlias) && identifierChain.length === 1 && typeof parser.yy.result.suggestColumns !== 'undefined') {
          if (columnSuggestion) {
            if (typeof parser.yy.result.suggestIdentifiers === 'undefined') {
              parser.yy.result.suggestIdentifiers = [];
            }
            lateralView.columnAliases.forEach(function (columnAlias) {
              parser.yy.result.suggestIdentifiers.push({
                name: columnAlias,
                type: 'alias'
              });
            });
            delete parser.yy.result.suggestColumns;
            delete parser.yy.result.suggestKeywords;
          }
          return identifierChain;
        }
        if (lateralView.columnAliases.indexOf(firstIdentifier.name) !== -1) {
          if (lateralView.columnAliases.length === 2 && lateralView.udtf["function"].toLowerCase() === 'explode' && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(firstIdentifier.name, lateralView.columnAliases[0])) {
            identifierChain[0] = {
              name: 'key'
            };
          } else if (lateralView.columnAliases.length === 2 && lateralView.udtf["function"].toLowerCase() === 'explode' && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(firstIdentifier.name, lateralView.columnAliases[1])) {
            identifierChain[0] = {
              name: 'value'
            };
          } else {
            identifierChain[0] = {
              name: 'item'
            };
          }
          identifierChain = lateralView.udtf.expression.columnReference.concat(identifierChain);
          firstIdentifier = identifierChain[0];
        }
      });
    }
    return identifierChain;
  };
  var addCleanTablePrimary = function addCleanTablePrimary(tables, tablePrimary) {
    if (tablePrimary.alias) {
      tables.push({
        alias: tablePrimary.alias,
        identifierChain: tablePrimary.identifierChain
      });
    } else {
      tables.push({
        identifierChain: tablePrimary.identifierChain
      });
    }
  };
  parser.expandIdentifierChain = function (options) {
    var wrapper = options.wrapper;
    var anyOwner = options.anyOwner;
    var isColumnWrapper = options.isColumnWrapper;
    var isColumnLocation = options.isColumnLocation;
    var tablePrimaries = options.tablePrimaries || parser.yy.latestTablePrimaries;
    if (typeof wrapper.identifierChain === 'undefined' || typeof tablePrimaries === 'undefined') {
      return;
    }
    var identifierChain = wrapper.identifierChain.concat();
    if (tablePrimaries.length === 0) {
      delete wrapper.identifierChain;
      return;
    }
    if (!anyOwner) {
      tablePrimaries = filterTablePrimariesForOwner(tablePrimaries, wrapper.owner);
    }
    if (identifierChain.length > 0 && identifierChain[identifierChain.length - 1].asterisk) {
      var tables = [];
      tablePrimaries.forEach(function (tablePrimary) {
        if (identifierChain.length > 1 && !tablePrimary.subQueryAlias) {
          if (identifierChain.length === 2 && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(tablePrimary.alias, identifierChain[0].name)) {
            addCleanTablePrimary(tables, tablePrimary);
          } else if (identifierChain.length === 2 && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(tablePrimary.identifierChain[0].name, identifierChain[0].name)) {
            addCleanTablePrimary(tables, tablePrimary);
          } else if (identifierChain.length === 3 && tablePrimary.identifierChain.length > 1 && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(tablePrimary.identifierChain[0].name, identifierChain[0].name) && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(tablePrimary.identifierChain[1].name, identifierChain[1].name)) {
            addCleanTablePrimary(tables, tablePrimary);
          }
        } else if (tablePrimary.subQueryAlias) {
          tables.push({
            identifierChain: [{
              subQuery: tablePrimary.subQueryAlias
            }]
          });
        } else {
          addCleanTablePrimary(tables, tablePrimary);
        }
      });
      // Possible Joins
      if (tables.length > 0) {
        wrapper.tables = tables;
        delete wrapper.identifierChain;
        return;
      }
    }

    // Expand exploded views in the identifier chain
    if (identifierChain.length > 0) {
      identifierChain = parser.expandLateralViews(parser.yy.lateralViews, identifierChain);
      wrapper.identifierChain = identifierChain;
    }

    // IdentifierChain contains a possibly started identifier or empty, example: a.b.c = ['a', 'b', 'c']
    // Reduce the tablePrimaries to the one that matches the first identifier if found
    var foundPrimary;
    var doubleMatch = false;
    var aliasMatch = false;
    if (identifierChain.length > 0) {
      for (var i = 0; i < tablePrimaries.length; i++) {
        if (tablePrimaries[i].subQueryAlias) {
          if ((0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(tablePrimaries[i].subQueryAlias, identifierChain[0].name)) {
            foundPrimary = tablePrimaries[i];
          }
        } else if ((0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(tablePrimaries[i].alias, identifierChain[0].name)) {
          foundPrimary = tablePrimaries[i];
          aliasMatch = true;
          break;
        } else if (tablePrimaries[i].identifierChain.length > 1 && identifierChain.length > 1 && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(tablePrimaries[i].identifierChain[0].name, identifierChain[0].name) && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(tablePrimaries[i].identifierChain[1].name, identifierChain[1].name)) {
          foundPrimary = tablePrimaries[i];
          doubleMatch = true;
          break;
        } else if (!foundPrimary && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(tablePrimaries[i].identifierChain[0].name, identifierChain[0].name) && identifierChain.length > (isColumnLocation ? 1 : 0)) {
          foundPrimary = tablePrimaries[i];
          // No break as first two can still match.
        } else if (!foundPrimary && tablePrimaries[i].identifierChain.length > 1 && !tablePrimaries[i].alias && (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(tablePrimaries[i].identifierChain[tablePrimaries[i].identifierChain.length - 1].name, identifierChain[0].name)) {
          // This is for the case SELECT baa. FROM bla.baa, blo.boo;
          foundPrimary = tablePrimaries[i];
          break;
        }
      }
    }
    if (foundPrimary) {
      identifierChain.shift();
      if (doubleMatch) {
        identifierChain.shift();
      }
    } else if (tablePrimaries.length === 1 && !isColumnWrapper) {
      foundPrimary = tablePrimaries[0];
    }
    if (foundPrimary) {
      if (isColumnWrapper) {
        wrapper.identifierChain = identifierChain;
        if (foundPrimary.subQueryAlias) {
          wrapper.tables = [{
            subQuery: foundPrimary.subQueryAlias
          }];
        } else if (foundPrimary.alias) {
          if (!isColumnLocation && isColumnWrapper && aliasMatch) {
            // TODO: add alias on table in suggestColumns (needs support in sqlAutocomplete3.js)
            // the case is: SELECT cu.| FROM customers cu;
            // This prevents alias from being added automatically in sqlAutocompleter.js
            wrapper.tables = [{
              identifierChain: foundPrimary.identifierChain
            }];
          } else {
            wrapper.tables = [{
              identifierChain: foundPrimary.identifierChain,
              alias: foundPrimary.alias
            }];
          }
        } else {
          wrapper.tables = [{
            identifierChain: foundPrimary.identifierChain
          }];
        }
      } else {
        if (foundPrimary.subQueryAlias) {
          identifierChain.unshift({
            subQuery: foundPrimary.subQueryAlias
          });
        } else {
          identifierChain = foundPrimary.identifierChain.concat(identifierChain);
        }
        if (wrapper.tables) {
          wrapper.tables.push({
            identifierChain: identifierChain
          });
          delete wrapper.identifierChain;
        } else {
          wrapper.identifierChain = identifierChain;
        }
      }
    } else {
      if (isColumnWrapper) {
        wrapper.tables = [];
      }
      tablePrimaries.forEach(function (tablePrimary) {
        var targetTable = tablePrimary.subQueryAlias ? {
          subQuery: tablePrimary.subQueryAlias
        } : {
          identifierChain: tablePrimary.identifierChain
        };
        if (tablePrimary.alias) {
          targetTable.alias = tablePrimary.alias;
        }
        if (wrapper.tables) {
          wrapper.tables.push(targetTable);
        }
      });
    }
    delete wrapper.owner;
    wrapper.linked = true;
  };
  var suggestLateralViewAliasesAsIdentifiers = function suggestLateralViewAliasesAsIdentifiers() {
    if (typeof parser.yy.lateralViews === 'undefined' || parser.yy.lateralViews.length === 0) {
      return;
    }
    if (typeof parser.yy.result.suggestIdentifiers === 'undefined') {
      parser.yy.result.suggestIdentifiers = [];
    }
    parser.yy.lateralViews.forEach(function (lateralView) {
      if (typeof lateralView.tableAlias !== 'undefined') {
        parser.yy.result.suggestIdentifiers.push({
          name: lateralView.tableAlias + '.',
          type: 'alias'
        });
      }
      lateralView.columnAliases.forEach(function (columnAlias) {
        parser.yy.result.suggestIdentifiers.push({
          name: columnAlias,
          type: 'alias'
        });
      });
    });
    if (parser.yy.result.suggestIdentifiers.length === 0) {
      delete parser.yy.result.suggestIdentifiers;
    }
  };
  var filterTablePrimariesForOwner = function filterTablePrimariesForOwner(tablePrimaries, owner) {
    var result = [];
    tablePrimaries.forEach(function (primary) {
      if (typeof owner === 'undefined' && typeof primary.owner === 'undefined') {
        result.push(primary);
      } else if (owner === primary.owner) {
        result.push(primary);
      }
    });
    return result;
  };
  var convertTablePrimariesToSuggestions = function convertTablePrimariesToSuggestions(tablePrimaries) {
    var tables = [];
    var identifiers = [];
    tablePrimaries.forEach(function (tablePrimary) {
      if (tablePrimary.identifierChain && tablePrimary.identifierChain.length > 0) {
        var table = {
          identifierChain: tablePrimary.identifierChain
        };
        if (tablePrimary.alias) {
          table.alias = tablePrimary.alias;
          identifiers.push({
            name: table.alias + '.',
            type: 'alias'
          });
        } else {
          var lastIdentifier = tablePrimary.identifierChain[tablePrimary.identifierChain.length - 1];
          if (typeof lastIdentifier.name !== 'undefined') {
            identifiers.push({
              name: lastIdentifier.name + '.',
              type: 'table'
            });
          } else if (typeof lastIdentifier.subQuery !== 'undefined') {
            identifiers.push({
              name: lastIdentifier.subQuery + '.',
              type: 'sub-query'
            });
          }
        }
        tables.push(table);
      } else if (tablePrimary.subQueryAlias) {
        identifiers.push({
          name: tablePrimary.subQueryAlias + '.',
          type: 'sub-query'
        });
        tables.push({
          identifierChain: [{
            subQuery: tablePrimary.subQueryAlias
          }]
        });
      }
    });
    if (identifiers.length > 0) {
      if (typeof parser.yy.result.suggestIdentifiers === 'undefined') {
        parser.yy.result.suggestIdentifiers = identifiers;
      } else {
        parser.yy.result.suggestIdentifiers = identifiers.concat(parser.yy.result.suggestIdentifiers);
      }
    }
    parser.yy.result.suggestColumns.tables = tables;
    if (parser.yy.result.suggestColumns.identifierChain && parser.yy.result.suggestColumns.identifierChain.length === 0) {
      delete parser.yy.result.suggestColumns.identifierChain;
    }
    parser.yy.result.suggestColumns.linked = true;
  };
  var linkTablePrimaries = function linkTablePrimaries() {
    if (!parser.yy.cursorFound || typeof parser.yy.latestTablePrimaries === 'undefined') {
      return;
    }
    _sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.SIMPLE_TABLE_REF_SUGGESTIONS.forEach(function (suggestionType) {
      if (typeof parser.yy.result[suggestionType] !== 'undefined' && parser.yy.result[suggestionType].tablePrimaries && !parser.yy.result[suggestionType].linked) {
        parser.yy.result[suggestionType].tables = [];
        parser.yy.result[suggestionType].tablePrimaries.forEach(function (tablePrimary) {
          if (!tablePrimary.subQueryAlias) {
            parser.yy.result[suggestionType].tables.push(tablePrimary.alias ? {
              identifierChain: tablePrimary.identifierChain.concat(),
              alias: tablePrimary.alias
            } : {
              identifierChain: tablePrimary.identifierChain.concat()
            });
          }
        });
        delete parser.yy.result[suggestionType].tablePrimaries;
        parser.yy.result[suggestionType].linked = true;
      }
    });
    if (typeof parser.yy.result.suggestColumns !== 'undefined' && !parser.yy.result.suggestColumns.linked) {
      var tablePrimaries = filterTablePrimariesForOwner(parser.yy.latestTablePrimaries, parser.yy.result.suggestColumns.owner);
      if (!parser.yy.result.suggestColumns.tables) {
        parser.yy.result.suggestColumns.tables = [];
      }
      if (parser.yy.subQueries.length > 0) {
        parser.yy.result.subQueries = parser.yy.subQueries;
      }
      if (typeof parser.yy.result.suggestColumns.identifierChain === 'undefined' || parser.yy.result.suggestColumns.identifierChain.length === 0) {
        if (tablePrimaries.length > 1) {
          convertTablePrimariesToSuggestions(tablePrimaries);
        } else {
          suggestLateralViewAliasesAsIdentifiers();
          if (tablePrimaries.length === 1 && (tablePrimaries[0].alias || tablePrimaries[0].subQueryAlias)) {
            convertTablePrimariesToSuggestions(tablePrimaries);
          }
          parser.expandIdentifierChain({
            wrapper: parser.yy.result.suggestColumns,
            anyOwner: false,
            isColumnWrapper: true
          });
        }
      } else if (!parser.yy.result.suggestColumns.linked) {
        // Expand exploded views in the identifier chain
        var originalLength = parser.yy.result.suggestColumns.identifierChain.length;
        parser.yy.result.suggestColumns.identifierChain = parser.expandLateralViews(parser.yy.lateralViews, parser.yy.result.suggestColumns.identifierChain, true);
        // Drop '*' keyword for lateral views
        if (typeof parser.yy.result.suggestColumns !== 'undefined') {
          if (parser.yy.result.suggestColumns.identifierChain.length > originalLength && typeof parser.yy.result.suggestKeywords !== 'undefined' && parser.yy.result.suggestKeywords.length === 1 && parser.yy.result.suggestKeywords[0].value === '*') {
            delete parser.yy.result.suggestKeywords;
          }
          parser.expandIdentifierChain({
            wrapper: parser.yy.result.suggestColumns,
            anyOwner: false,
            isColumnWrapper: true
          });
        }
      } else {
        parser.expandIdentifierChain({
          wrapper: parser.yy.result.suggestColumns,
          anyOwner: false,
          isColumnWrapper: true
        });
      }
    }
    if (typeof parser.yy.result.colRef !== 'undefined' && !parser.yy.result.colRef.linked) {
      parser.expandIdentifierChain({
        wrapper: parser.yy.result.colRef
      });
      var primaries = filterTablePrimariesForOwner(parser.yy.latestTablePrimaries);
      if (primaries.length === 0 || primaries.length > 1 && parser.yy.result.colRef.identifierChain.length === 1) {
        parser.yy.result.colRef.identifierChain = [];
      }
    }
    if (typeof parser.yy.result.suggestKeyValues !== 'undefined' && !parser.yy.result.suggestKeyValues.linked) {
      parser.expandIdentifierChain({
        wrapper: parser.yy.result.suggestKeyValues
      });
    }
  };
  parser.addTablePrimary = function (ref) {
    if (typeof parser.yy.latestTablePrimaries === 'undefined') {
      parser.yy.latestTablePrimaries = [];
    }
    parser.yy.latestTablePrimaries.push(ref);
  };
  parser.suggestFileFormats = function () {
    parser.suggestKeywords(['AVRO', 'INPUTFORMAT', 'JSONFILE', 'ORC', 'PARQUET', 'RCFILE', 'SEQUENCEFILE', 'TEXTFILE']);
  };
  parser.suggestKeywordsForOptionalsLR = function (optionals, keywords, override) {
    var result = parser.getKeywordsForOptionalsLR(optionals, keywords, override);
    if (result.length) {
      parser.suggestKeywords(result);
    }
  };
  parser.getKeywordsForOptionalsLR = function (optionals, keywords, override) {
    var result = [];
    for (var i = 0; i < optionals.length; i++) {
      if (!optionals[i] && (typeof override === 'undefined' || override[i])) {
        if (keywords[i] instanceof Array) {
          result = result.concat(keywords[i]);
        } else {
          result.push(keywords[i]);
        }
      } else if (optionals[i]) {
        break;
      }
    }
    return result;
  };
  parser.suggestDdlAndDmlKeywords = function (extraKeywords) {
    var keywords = parser.DDL_AND_DML_KEYWORDS;
    if (extraKeywords) {
      keywords = keywords.concat(extraKeywords);
    }
    parser.suggestKeywords(keywords);
  };
  parser.checkForSelectListKeywords = function (selectList) {
    if (selectList.length === 0) {
      return;
    }
    var last = selectList[selectList.length - 1];
    if (!last || !last.valueExpression) {
      return;
    }
    var valueExpressionKeywords = parser.getValueExpressionKeywords(last.valueExpression);
    var keywords = [];
    if (last.suggestKeywords) {
      keywords = keywords.concat(last.suggestKeywords);
    }
    if (valueExpressionKeywords.suggestKeywords) {
      keywords = keywords.concat(valueExpressionKeywords.suggestKeywords);
    }
    if (valueExpressionKeywords.suggestColRefKeywords) {
      parser.suggestColRefKeywords(valueExpressionKeywords.suggestColRefKeywords);
      parser.addColRefIfExists(last.valueExpression);
    }
    if (!last.alias) {
      keywords.push('AS');
    }
    if (keywords.length > 0) {
      parser.suggestKeywords(keywords);
    }
  };
  parser.checkForKeywords = function (expression) {
    if (expression) {
      if (expression.suggestKeywords && expression.suggestKeywords.length > 0) {
        parser.suggestKeywords(expression.suggestKeywords);
      }
      if (expression.suggestColRefKeywords) {
        parser.suggestColRefKeywords(expression.suggestColRefKeywords);
        parser.addColRefIfExists(expression);
      }
    }
  };
  parser.createWeightedKeywords = function (keywords, weight) {
    var result = [];
    keywords.forEach(function (keyword) {
      if (typeof keyword.weight !== 'undefined') {
        keyword.weight = weight + keyword.weight / 10;
        result.push(keyword);
      } else {
        result.push({
          value: keyword,
          weight: weight
        });
      }
    });
    return result;
  };
  parser.KEYWORDS = _keywords_json__WEBPACK_IMPORTED_MODULE_0__;
  parser.suggestColRefKeywords = function (colRefKeywords) {
    parser.yy.result.suggestColRefKeywords = colRefKeywords;
  };
  parser.suggestTablesOrColumns = function (identifier) {
    if (typeof parser.yy.latestTablePrimaries == 'undefined') {
      parser.suggestTables({
        identifierChain: [{
          name: identifier
        }]
      });
      return;
    }
    var tableRef = parser.yy.latestTablePrimaries.filter(function (tablePrimary) {
      return (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.equalIgnoreCase)(tablePrimary.alias, identifier);
    });
    if (tableRef.length > 0) {
      parser.suggestColumns({
        identifierChain: [{
          name: identifier
        }]
      });
    } else {
      parser.suggestTables({
        identifierChain: [{
          name: identifier
        }]
      });
    }
  };
  parser.suggestFunctions = function (details) {
    parser.yy.result.suggestFunctions = details || {};
  };
  parser.suggestAggregateFunctions = function () {
    var primaries = [];
    var aliases = {};
    parser.yy.latestTablePrimaries.forEach(function (primary) {
      if (typeof primary.alias !== 'undefined') {
        aliases[primary.alias] = true;
      }
      // Drop if the first one refers to a table alias (...FROM tbl t, t.map tm ...)
      if (typeof primary.identifierChain !== 'undefined' && !aliases[primary.identifierChain[0].name] && typeof primary.owner === 'undefined') {
        primaries.push(primary);
      }
    });
    parser.yy.result.suggestAggregateFunctions = {
      tablePrimaries: primaries
    };
  };
  parser.suggestAnalyticFunctions = function () {
    parser.yy.result.suggestAnalyticFunctions = true;
  };
  parser.suggestSetOptions = function () {
    parser.yy.result.suggestSetOptions = true;
  };
  parser.suggestIdentifiers = function (identifiers) {
    parser.yy.result.suggestIdentifiers = identifiers;
  };
  parser.suggestColumns = function (details) {
    if (typeof details === 'undefined') {
      details = {
        identifierChain: []
      };
    } else if (typeof details.identifierChain === 'undefined') {
      details.identifierChain = [];
    }
    parser.yy.result.suggestColumns = details;
  };
  parser.suggestGroupBys = function (details) {
    parser.yy.result.suggestGroupBys = details || {};
  };
  parser.suggestOrderBys = function (details) {
    parser.yy.result.suggestOrderBys = details || {};
  };
  parser.suggestFilters = function (details) {
    parser.yy.result.suggestFilters = details || {};
  };
  parser.suggestKeyValues = function (details) {
    parser.yy.result.suggestKeyValues = details || {};
  };
  parser.suggestTables = function (details) {
    parser.yy.result.suggestTables = details || {};
  };
  parser.firstDefined = function () {
    for (var i = 0; i + 1 < arguments.length; i += 2) {
      if (arguments[i]) {
        return arguments[i + 1];
      }
    }
  };
  parser.addColRefToVariableIfExists = function (left, right) {
    if (left && left.columnReference && left.columnReference.length && right && right.columnReference && right.columnReference.length && parser.yy.locations.length > 1) {
      var addColRefToVariableLocation = function addColRefToVariableLocation(variableValue, colRef) {
        // See if colref is actually an alias
        if (colRef.length === 1 && colRef[0].name) {
          parser.yy.locations.some(function (location) {
            if (location.type === 'column' && location.alias === colRef[0].name) {
              colRef = location.identifierChain;
              return true;
            }
          });
        }
        for (var i = parser.yy.locations.length - 1; i > 0; i--) {
          var location = parser.yy.locations[i];
          if (location.type === 'variable' && location.value === variableValue) {
            location.colRef = {
              identifierChain: colRef
            };
            break;
          }
        }
      };
      if (/\${[^}]*}/.test(left.columnReference[0].name)) {
        // left is variable
        addColRefToVariableLocation(left.columnReference[0].name, right.columnReference);
      } else if (/\${[^}]*}/.test(right.columnReference[0].name)) {
        // right is variable
        addColRefToVariableLocation(right.columnReference[0].name, left.columnReference);
      }
    }
  };
  parser.suggestDatabases = function (details) {
    parser.yy.result.suggestDatabases = details || {};
  };
  parser.suggestHdfs = function (details) {
    parser.yy.result.suggestHdfs = details || {};
  };
  parser.suggestValues = function (details) {
    parser.yy.result.suggestValues = details || {};
  };
  parser.determineCase = function (text) {
    if (!parser.yy.caseDetermined) {
      parser.yy.lowerCase = text.toLowerCase() === text;
      parser.yy.caseDetermined = true;
    }
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
  var lexerModified = false;

  /**
   * Main parser function
   */
  parser.parseSql = function (beforeCursor, afterCursor, debug) {
    // Jison counts CRLF as two lines in the locations
    beforeCursor = beforeCursor.replace(/\r\n|\n\r/gm, '\n');
    afterCursor = afterCursor.replace(/\r\n|\n\r/gm, '\n');
    parser.yy.result = {
      locations: []
    };
    parser.yy.lowerCase = false;
    parser.yy.locations = [];
    parser.yy.definitions = [];
    parser.yy.allLocations = [];
    parser.yy.subQueries = [];
    parser.yy.errors = [];
    parser.yy.selectListAliases = [];
    parser.yy.locationsStack = [];
    parser.yy.primariesStack = [];
    parser.yy.lateralViewsStack = [];
    parser.yy.subQueriesStack = [];
    parser.yy.resultStack = [];
    parser.yy.selectListAliasesStack = [];
    parser.yy.activeDialect = 'hive';
    delete parser.yy.caseDetermined;
    delete parser.yy.cursorFound;
    delete parser.yy.partialCursor;

    // Fix for parser bug when switching lexer states
    if (!lexerModified) {
      var originalSetInput = parser.lexer.setInput;
      parser.lexer.setInput = function (input, yy) {
        return originalSetInput.bind(parser.lexer)(input, yy);
      };
      lexerModified = true;
    }
    parser.prepareNewStatement();
    var REASONABLE_SURROUNDING_LENGTH = 150000; // About 3000 lines before and after

    if (beforeCursor.length > REASONABLE_SURROUNDING_LENGTH) {
      if (beforeCursor.length - beforeCursor.lastIndexOf(';') > REASONABLE_SURROUNDING_LENGTH) {
        // Bail out if the last complete statement is more than 150000 chars before
        return {};
      }
      // Cut it at the first statement found within 150000 chars before
      var lastReasonableChunk = beforeCursor.substring(beforeCursor.length - REASONABLE_SURROUNDING_LENGTH);
      beforeCursor = lastReasonableChunk.substring(lastReasonableChunk.indexOf(';') + 1);
    }
    if (afterCursor.length > REASONABLE_SURROUNDING_LENGTH) {
      if (afterCursor.length - afterCursor.indexOf(';') > REASONABLE_SURROUNDING_LENGTH) {
        // No need to bail out for what's comes after, we can still get keyword completion
        afterCursor = '';
      } else {
        // Cut it at the last statement found within 150000 chars after
        var firstReasonableChunk = afterCursor.substring(0, REASONABLE_SURROUNDING_LENGTH);
        afterCursor = firstReasonableChunk.substring(0, firstReasonableChunk.lastIndexOf(';'));
      }
    }
    parser.yy.partialLengths = parser.identifyPartials(beforeCursor, afterCursor);
    if (parser.yy.partialLengths.left > 0) {
      beforeCursor = beforeCursor.substring(0, beforeCursor.length - parser.yy.partialLengths.left);
    }
    if (parser.yy.partialLengths.right > 0) {
      afterCursor = afterCursor.substring(parser.yy.partialLengths.right);
    }
    var result;
    try {
      // Add |CURSOR| or |PARTIAL_CURSOR| to represent the different cursor states in the lexer
      result = parser.parse(beforeCursor + (beforeCursor.length === 0 || /[\s(]$/.test(beforeCursor) ? " \u2020 " : "\u2021") + afterCursor);
    } catch (err) {
      // On any error try to at least return any existing result
      if (typeof parser.yy.result === 'undefined') {
        throw err;
      }
      if (debug) {
        console.warn(err);
        console.warn(err.stack);
      }
      result = parser.yy.result;
    }
    if (parser.yy.errors.length > 0) {
      parser.yy.result.errors = parser.yy.errors;
      if (debug) {
        console.warn(parser.yy.errors);
      }
    }
    try {
      linkTablePrimaries();
      parser.commitLocations();
      // Clean up and prioritize
      (0,_sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.adjustForPartialBackticks)(parser);
      prioritizeSuggestions();
    } catch (err) {
      if (debug) {
        console.warn(err);
        console.warn(err.stack);
      }
    }
    parser.yy.allLocations.sort(function (a, b) {
      if (a.location.first_line !== b.location.first_line) {
        return a.location.first_line - b.location.first_line;
      }
      if (a.location.first_column !== b.location.first_column) {
        return a.location.first_column - b.location.first_column;
      }
      if (a.location.last_column !== b.location.last_column) {
        return b.location.last_column - a.location.last_column;
      }
      return b.type.localeCompare(a.type);
    });
    parser.yy.result.locations = parser.yy.allLocations;
    parser.yy.result.definitions = parser.yy.definitions;
    parser.yy.result.locations.forEach(function (location) {
      delete location.linked;
    });
    if (typeof parser.yy.result.suggestColumns !== 'undefined') {
      delete parser.yy.result.suggestColumns.linked;
    }
    _sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.SIMPLE_TABLE_REF_SUGGESTIONS.forEach(function (suggestionType) {
      if (typeof parser.yy.result[suggestionType] !== 'undefined') {
        delete parser.yy.result[suggestionType].linked;
      }
    });
    if (typeof parser.yy.result.colRef !== 'undefined') {
      delete parser.yy.result.colRef.linked;
    }
    if (typeof parser.yy.result.suggestKeyValues !== 'undefined') {
      delete parser.yy.result.suggestKeyValues.linked;
    }
    if (typeof result.error !== 'undefined' && typeof result.error.expected !== 'undefined') {
      // Remove the cursor from expected tokens
      result.error.expected = result.error.expected.filter(function (token) {
        return token.indexOf('CURSOR') === -1;
      });
    }
    if (typeof result.error !== 'undefined' && result.error.recoverable) {
      delete result.error;
    }

    // Adjust all the statement locations to include white space surrounding them
    var lastStatementLocation = null;
    result.locations.forEach(function (location) {
      if (location.type === 'statement') {
        if (lastStatementLocation === null) {
          location.location.first_line = 1;
          location.location.first_column = 1;
        } else {
          location.location.first_line = lastStatementLocation.location.last_line;
          location.location.first_column = lastStatementLocation.location.last_column + 1;
        }
        lastStatementLocation = location;
      }
    });
    return result;
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  initSqlParser: initSqlParser,
  initSyntaxParser: _sqlParseUtils__WEBPACK_IMPORTED_MODULE_2__.initSyntaxParser
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/parse/sql/hive/keywords.json":
/*!******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/parse/sql/hive/keywords.json ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"ALTER":["CONNECTOR","DATABASE","INDEX","MATERIALIZED VIEW","SCHEDULED QUERY","SCHEMA","TABLE","VIEW"],"ALTER TABLE ADD CONSTRAINT identifier":["CHECK","FOREIGN KEY","PRIMARY KEY","UNIQUE"],"DROP":["CONNECTOR","DATABASE","FUNCTION","INDEX","MATERIALIZED VIEW","ROLE","SCHEDULED QUERY","SCHEMA","TABLE","TEMPORARY FUNCTION","TEMPORARY MACRO","VIEW"],"SHOW":["COLUMNS","CONNECTORS","COMPACTIONS","CONF","CREATE TABLE","CURRENT ROLES","DATABASES","FORMATTED","FUNCTIONS","GRANT","INDEX","INDEXES","LOCKS","MATERIALIZED VIEWS","PARTITIONS","PRINCIPALS","ROLE GRANT","ROLES","SCHEMAS","TABLE EXTENDED","TABLES","TBLPROPERTIES","TRANSACTIONS","VIEWS"]}');

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hive-parser-75031a8f-chunk-a2a4f8506cb55bb7.js.map