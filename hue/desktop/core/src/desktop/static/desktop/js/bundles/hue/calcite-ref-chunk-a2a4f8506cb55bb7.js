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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["calcite-ref"],{

/***/ "./desktop/core/src/desktop/js/sql/reference/calcite/reservedKeywords.ts":
/*!*******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/calcite/reservedKeywords.ts ***!
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

var RESERVED_WORDS = new Set(['ABS', 'ALL', 'ALLOCATE', 'ALLOW', 'ALTER', 'AND', 'ANY', 'ARE', 'ARRAY', 'ARRAY_MAX_CARDINALITY', 'AS', 'ASENSITIVE', 'ASYMMETRIC', 'AT', 'ATOMIC', 'AUTHORIZATION', 'AVG', 'BEGIN', 'BEGIN_FRAME', 'BEGIN_PARTITION', 'BETWEEN', 'BIGINT', 'BINARY', 'BIT', 'BLOB', 'BOOLEAN', 'BOTH', 'BY', 'CALL', 'CALLED', 'CARDINALITY', 'CASCADED', 'CASE', 'CAST', 'CEIL', 'CEILING', 'CHAR', 'CHAR_LENGTH', 'CHARACTER', 'CHARACTER_LENGTH', 'CHECK', 'CLASSIFIER', 'CLOB', 'CLOSE', 'COALESCE', 'COLLATE', 'COLLECT', 'COLUMN', 'COMMIT', 'CONDITION', 'CONNECT', 'CONSTRAINT', 'CONTAINS', 'CONVERT', 'CORR', 'CORRESPONDING', 'COUNT', 'COVAR_POP', 'COVAR_SAMP', 'CREATE', 'CROSS', 'CUBE', 'CUME_DIST', 'CURRENT', 'CURRENT_CATALOG', 'CURRENT_DATE', 'CURRENT_DEFAULT_TRANSFORM_GROUP', 'CURRENT_PATH', 'CURRENT_ROLE', 'CURRENT_ROW', 'CURRENT_SCHEMA', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_TRANSFORM_GROUP_FOR_TYPE', 'CURRENT_USER', 'CURSOR', 'CYCLE', 'DATE', 'DAY', 'DEALLOCATE', 'DEC', 'DECIMAL', 'DECLARE', 'DEFAULT', 'DEFINE', 'DELETE', 'DENSE_RANK', 'DEREF', 'DESCRIBE', 'DETERMINISTIC', 'DISALLOW', 'DISCONNECT', 'DISTINCT', 'DOUBLE', 'DROP', 'DYNAMIC', 'EACH', 'ELEMENT', 'ELSE', 'EMPTY', 'END', 'END-EXEC', 'END_FRAME', 'END_PARTITION', 'EQUALS', 'ESCAPE', 'EVERY', 'EXCEPT', 'EXEC', 'EXECUTE', 'EXISTS', 'EXP', 'EXPLAIN', 'EXTEND', 'EXTERNAL', 'EXTRACT', 'FALSE', 'FETCH', 'FILTER', 'FIRST_VALUE', 'FLOAT', 'FLOOR', 'FOR', 'FOREIGN', 'FRAME_ROW', 'FREE', 'FROM', 'FULL', 'FUNCTION', 'FUSION', 'GET', 'GLOBAL', 'GRANT', 'GROUP', 'GROUPING', 'GROUPS', 'HAVING', 'HOLD', 'HOUR', 'IDENTITY', 'IMPORT', 'IN', 'INDICATOR', 'INITIAL', 'INNER', 'INOUT', 'INSENSITIVE', 'INSERT', 'INT', 'INTEGER', 'INTERSECT', 'INTERSECTION', 'INTERVAL', 'INTO', 'IS', 'JOIN', 'JSON_ARRAY', 'JSON_ARRAYAGG', 'JSON_EXISTS', 'JSON_OBJECT', 'JSON_OBJECTAGG', 'JSON_QUERY', 'JSON_VALUE', 'LAG', 'LANGUAGE', 'LARGE', 'LAST_VALUE', 'LATERAL', 'LEAD', 'LEADING', 'LEFT', 'LIKE', 'LIKE_REGEX', 'LIMIT', 'LN', 'LOCAL', 'LOCALTIME', 'LOCALTIMESTAMP', 'LOWER', 'MATCH', 'MATCH_NUMBER', 'MATCH_RECOGNIZE', 'MATCHES', 'MAX', 'MEASURES', 'MEMBER', 'MERGE', 'METHOD', 'MIN', 'MINUS', 'MINUTE', 'MOD', 'MODIFIES', 'MODULE', 'MONTH', 'MULTISET', 'NATIONAL', 'NATURAL', 'NCHAR', 'NCLOB', 'NEW', 'NEXT', 'NO', 'NONE', 'NORMALIZE', 'NOT', 'NTH_VALUE', 'NTILE', 'NULL', 'NULLIF', 'NUMERIC', 'OCCURRENCES_REGEX', 'OCTET_LENGTH', 'OF', 'OFFSET', 'OLD', 'OMIT', 'ON', 'ONE', 'ONLY', 'OPEN', 'OR', 'ORDER', 'OUT', 'OUTER', 'OVER', 'OVERLAPS', 'OVERLAY', 'PARAMETER', 'PARTITION', 'PATTERN', 'PER', 'PERCENT', 'PERCENT_RANK', 'PERCENTILE_CONT', 'PERCENTILE_DISC', 'PERIOD', 'PERMUTE', 'PORTION', 'POSITION', 'POSITION_REGEX', 'POWER', 'PRECEDES', 'PRECISION', 'PREPARE', 'PREV', 'PRIMARY', 'PROCEDURE', 'RANGE', 'RANK', 'READS', 'REAL', 'RECURSIVE', 'REF', 'REFERENCES', 'REFERENCING', 'REGR_AVGX', 'REGR_AVGY', 'REGR_COUNT', 'REGR_INTERCEPT', 'REGR_R2', 'REGR_SLOPE', 'REGR_SXX', 'REGR_SXY', 'REGR_SYY', 'RELEASE', 'RESET', 'RESULT', 'RETURN', 'RETURNS', 'REVOKE', 'RIGHT', 'ROLLBACK', 'ROLLUP', 'ROW', 'ROW_NUMBER', 'ROWS', 'RUNNING', 'SAVEPOINT', 'SCOPE', 'SCROLL', 'SEARCH', 'SECOND', 'SEEK', 'SELECT', 'SENSITIVE', 'SESSION_USER', 'SET', 'SHOW', 'SIMILAR', 'SKIP', 'SMALLINT', 'SOME', 'SPECIFIC', 'SPECIFICTYPE', 'SQL', 'SQLEXCEPTION', 'SQLSTATE', 'SQLWARNING', 'SQRT', 'START', 'STATIC', 'STDDEV_POP', 'STDDEV_SAMP', 'STREAM', 'SUBMULTISET', 'SUBSET', 'SUBSTRING', 'SUBSTRING_REGEX', 'SUCCEEDS', 'SUM', 'SYMMETRIC', 'SYSTEM', 'SYSTEM_TIME', 'SYSTEM_USER', 'TABLE', 'TABLESAMPLE', 'THEN', 'TIME', 'TIMESTAMP', 'TIMEZONE_HOUR', 'TIMEZONE_MINUTE', 'TINYINT', 'TO', 'TRAILING', 'TRANSLATE', 'TRANSLATE_REGEX', 'TRANSLATION', 'TREAT', 'TRIGGER', 'TRIM', 'TRIM_ARRAY', 'TRUE', 'TRUNCATE', 'UESCAPE', 'UNION', 'UNIQUE', 'UNKNOWN', 'UNNEST', 'UPDATE', 'UPPER', 'UPSERT', 'USER', 'USING', 'VALUE', 'VALUE_OF', 'VALUES', 'VAR_POP', 'VAR_SAMP', 'VARBINARY', 'VARCHAR', 'VARYING', 'VERSIONING', 'WHEN', 'WHENEVER', 'WHERE', 'WIDTH_BUCKET', 'WINDOW', 'WITH', 'WITHIN', 'WITHOUT', 'YEAR']);

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/calcite-ref-chunk-a2a4f8506cb55bb7.js.map