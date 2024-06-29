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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["generic-ref"],{

/***/ "./desktop/core/src/desktop/js/sql/reference/generic/reservedKeywords.ts":
/*!*******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/generic/reservedKeywords.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESERVED_WORDS": () => (/* binding */ RESERVED_WORDS)
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

var RESERVED_WORDS = new Set(['ALL', 'ALTER', 'AND', 'AS', 'ASC', 'BETWEEN', 'BIGINT', 'BOOLEAN', 'BY', 'CASCADE', 'CASE', 'CHAR', 'COMMENT', 'CREATE', 'CROSS', 'CURRENT', 'DATABASE', 'DECIMAL', 'DESC', 'DISTINCT', 'DIV', 'DOUBLE', 'DROP', 'ELSE', 'END', 'EXISTS', 'FALSE', 'FLOAT', 'FOLLOWING', 'FROM', 'FULL', 'GROUP', 'HAVING', 'IF', 'IN', 'INNER', 'INSERT', 'INT', 'INTO', 'IS', 'JOIN', 'LEFT', 'LIKE', 'LIMIT', 'NOT', 'NULL', 'ON', 'OPTION', 'OR', 'ORDER', 'OUTER', 'PARTITION', 'PRECEDING', 'PURGE', 'RANGE', 'REGEXP', 'RIGHT', 'RLIKE', 'ROLE', 'ROW', 'ROWS', 'SCHEMA', 'SELECT', 'SEMI', 'SET', 'SHOW', 'SMALLINT', 'STRING', 'TABLE', 'THEN', 'TIMESTAMP', 'TINYINT', 'TO', 'TRUE', 'TRUNCATE', 'UNBOUNDED', 'UNION', 'UPDATE', 'USE', 'VALUES', 'VARCHAR', 'VIEW', 'WHEN', 'WHERE', 'WITH']);

/***/ }),

/***/ "./desktop/core/src/desktop/js/sql/reference/generic/udfReference.ts":
/*!***************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/generic/udfReference.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGGREGATE_FUNCTIONS": () => (/* binding */ AGGREGATE_FUNCTIONS),
/* harmony export */   "UDF_CATEGORIES": () => (/* binding */ UDF_CATEGORIES)
/* harmony export */ });
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
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


var AGGREGATE_FUNCTIONS = {
  count: {
    name: 'count',
    returnTypes: ['BIGINT'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'count(col)',
    draggable: 'count()',
    description: 'count(*) - Returns the total number of retrieved rows, including rows containing NULL values. count(expr) - Returns the number of rows for which the supplied expression is non-NULL.'
  },
  sum: {
    name: 'sum',
    returnTypes: ['DOUBLE'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'sum(col)',
    draggable: 'sum()',
    description: 'Returns the sum of the elements in the group or the sum of the distinct values of the column in the group.'
  },
  max: {
    name: 'max',
    returnTypes: ['DOUBLE'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'max(col)',
    draggable: 'max()',
    description: 'Returns the maximum value of the column in the group.'
  },
  min: {
    name: 'min',
    returnTypes: ['DOUBLE'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'min(col)',
    draggable: 'min()',
    description: 'Returns the minimum of the column in the group.'
  }
};
var UDF_CATEGORIES = [{
  name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Aggregate'),
  isAggregate: true,
  functions: AGGREGATE_FUNCTIONS
}];

/***/ }),

/***/ "./desktop/core/src/desktop/js/sql/reference/postgresql/reservedKeywords.ts":
/*!**********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/postgresql/reservedKeywords.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESERVED_WORDS": () => (/* binding */ RESERVED_WORDS)
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

var RESERVED_WORDS = new Set(['ALL', 'ANALYSE', 'ANALYZE', 'AND', 'ANY', 'ARRAY', 'AS', 'ASC', 'ASYMMETRIC', 'AUTHORIZATION', 'BINARY', 'BOTH', 'CASE', 'CAST', 'CHECK', 'COLLATE', 'COLLATION', 'COLUMN', 'CONCURRENTLY', 'CONSTRAINT', 'CREATE', 'CROSS', 'CURRENT_CATALOG', 'CURRENT_DATE', 'CURRENT_ROLE', 'CURRENT_SCHEMA', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_USER', 'DEFAULT', 'DEFERRABLE', 'DESC', 'DISTINCT', 'DO', 'ELSE', 'END', 'EXCEPT', 'FALSE', 'FETCH', 'FOR', 'FOREIGN', 'FREEZE', 'FROM', 'FULL', 'GRANT', 'GROUP', 'HAVING', 'ILIKE', 'IN', 'INITIALLY', 'INNER', 'INTERSECT', 'INTO', 'IS', 'ISNULL', 'JOIN', 'LATERAL', 'LEADING', 'LEFT', 'LIKE', 'LIMIT', 'LOCALTIME', 'LOCALTIMESTAMP', 'NATURAL', 'NOT', 'NOTNULL', 'NULL', 'OFFSET', 'ON', 'ONLY', 'OR', 'ORDER', 'OUTER', 'OVERLAPS', 'PLACING', 'PRIMARY', 'REFERENCES', 'RETURNING', 'RIGHT', 'SELECT', 'SESSION_USER', 'SIMILAR', 'SOME', 'SYMMETRIC', 'TABLE', 'TABLESAMPLE', 'THEN', 'TO', 'TRAILING', 'TRUE', 'UNION', 'UNIQUE', 'USER', 'USING', 'VARIADIC', 'VERBOSE', 'WHEN', 'WHERE', 'WINDOW', 'WITH']);

/***/ }),

/***/ "./desktop/core/src/desktop/js/sql/reference/presto/reservedKeywords.ts":
/*!******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/presto/reservedKeywords.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESERVED_WORDS": () => (/* binding */ RESERVED_WORDS)
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

var RESERVED_WORDS = new Set(['ALTER', 'AND', 'AS', 'BETWEEN', 'BY', 'CASE', 'CAST', 'CONSTRAINT', 'CREATE', 'CROSS', 'CUBE', 'CURRENT_DATE', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_USER', 'DEALLOCATE', 'DELETE', 'DESCRIBE', 'DISTINCT', 'DROP', 'ELSE', 'END', 'ESCAPE', 'EXCEPT', 'EXECUTE', 'EXISTS', 'EXTRACT', 'FALSE', 'FOR', 'FROM', 'FULL', 'GROUP', 'GROUPING', 'HAVING', 'IN', 'INNER', 'INSERT', 'INTERSECT', 'INTO', 'IS', 'JOIN', 'LEFT', 'LIKE', 'LOCALTIME', 'LOCALTIMESTAMP', 'NATURAL', 'NORMALIZE', 'NOT', 'NULL', 'ON', 'OR', 'ORDER', 'OUTER', 'PREPARE', 'RECURSIVE', 'RIGHT', 'ROLLUP', 'SELECT', 'TABLE', 'THEN', 'TRUE', 'UESCAPE', 'UNION', 'UNNEST', 'USING', 'VALUES', 'WHEN', 'WHERE', 'WITH']);

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/generic-ref-chunk-a2a4f8506cb55bb7.js.map