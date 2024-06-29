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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["flink-ref"],{

/***/ "./desktop/core/src/desktop/js/sql/reference/flink/reservedKeywords.ts":
/*!*****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/flink/reservedKeywords.ts ***!
  \*****************************************************************************/
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

var RESERVED_WORDS = new Set(['ALL', 'ALTER', 'AND', 'AS', 'ASC', 'BETWEEN', 'BIGINT', 'BOOLEAN', 'BY', 'CASCADE', 'CASE', 'CHAR', 'COMMENT', 'CREATE', 'CROSS', 'CURRENT', 'DATABASE', 'DECIMAL', 'DESC', 'DISTINCT', 'DIV', 'DOUBLE', 'DROP', 'ELSE', 'END', 'EXISTS', 'FALSE', 'FLOAT', 'FOLLOWING', 'FROM', 'FULL', 'GROUP', 'HAVING', 'IF', 'IN', 'INNER', 'INSERT', 'INT', 'INTO', 'IS', 'JOIN', 'LEFT', 'LIKE', 'LIMIT', 'NOT', 'NULL', 'ON', 'OPTION', 'OR', 'ORDER', 'OUTER', 'PARTITION', 'PRECEDING', 'PURGE', 'RANGE', 'REGEXP', 'RIGHT', 'RLIKE', 'ROLE', 'ROW', 'ROWS', 'SCHEMA', 'SELECT', 'SEMI', 'SET', 'SHOW', 'SMALLINT', 'STRING', 'TABLE', 'THEN', 'TIMESTAMP', 'TINYINT', 'TO', 'TRUE', 'TRUNCATE', 'UNBOUNDED', 'UNION', 'UPDATE', 'USE', 'VALUES', 'VARCHAR', 'VIEW', 'WHEN', 'WHERE', 'WITH', 'TUMBLE', 'HOP', 'SESSION']);

/***/ }),

/***/ "./desktop/core/src/desktop/js/sql/reference/flink/udfReference.ts":
/*!*************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/sql/reference/flink/udfReference.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
  avg: {
    name: 'avg',
    returnTypes: ['DOUBLE'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'avg(col)',
    draggable: 'avg()',
    description: 'Returns the average of the elements in the group or the average of the distinct values of the column in the group.'
  },
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
  stddev_pop: {
    name: 'stddev_pop',
    returnTypes: ['DOUBLE'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'stddev_pop(col)',
    draggable: 'stddev_pop()',
    description: 'Returns the standard deviation of a numeric column in the group.'
  },
  stddev_samp: {
    name: 'stddev_samp',
    returnTypes: ['DOUBLE'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'stddev_samp(col)',
    draggable: 'stddev_samp()',
    description: 'Returns the unbiased sample standard deviation of a numeric column in the group.'
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
  },
  var_pop: {
    name: 'var_pop',
    returnTypes: ['DOUBLE'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'var_pop(col)',
    draggable: 'var_pop()',
    description: 'Returns the variance of a numeric column in the group.'
  },
  var_samp: {
    name: 'var_samp',
    returnTypes: ['DOUBLE'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'var_samp(col)',
    draggable: 'var_samp()',
    description: 'Returns the unbiased sample variance of a numeric column in the group.'
  },
  variance: {
    name: 'variance',
    returnTypes: ['DOUBLE'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'variance(col)',
    draggable: 'variance()',
    description: 'Returns the unbiased sample variance of a numeric column in the group.'
  }
};
var STRING_FUNCTIONS = {
  regexp_extract: {
    name: 'regexp_extract',
    returnTypes: ['STRING'],
    arguments: [[{
      type: 'STRING'
    }], [{
      type: 'STRING'
    }], [{
      type: 'INT'
    }]],
    signature: 'regexp_extract(STRING subject, STRING pattern, INT index)',
    draggable: 'regexp_extract()',
    description: "Returns the string extracted using the pattern. For example, regexp_extract('foothebar', 'foo(.*?)(bar)', 2) returns 'bar.' Note that some care is necessary in using predefined character classes: using '\\s' as the second argument will match the letter s; '\\\\s' is necessary to match whitespace, etc. The 'index' parameter is the Java regex Matcher group() method index."
  }
};
var DATE_FUNCTIONS = {
  current_date: {
    name: 'current_date',
    returnTypes: ['DATE'],
    arguments: [],
    signature: 'current_date',
    draggable: 'current_date',
    description: 'Returns the current date at the start of query evaluation (as of Hive 1.2.0). All calls of current_date within the same query return the same value.'
  },
  current_timestamp: {
    name: 'current_timestamp',
    returnTypes: ['TIMESTAMP'],
    arguments: [],
    signature: 'current_timestamp()',
    draggable: 'current_timestamp()',
    description: 'Returns the current timestamp at the start of query evaluation (as of Hive 1.2.0). All calls of current_timestamp within the same query return the same value.'
  },
  date_format: {
    name: 'date_format',
    returnTypes: ['STRING'],
    arguments: [[{
      type: 'DATE'
    }, {
      type: 'STRING'
    }, {
      type: 'TIMESTAMP'
    }], [{
      type: 'STRING'
    }]],
    signature: 'date_format(DATE|TIMESTAMP|STRING ts, STRING fmt)',
    draggable: 'date_format()',
    description: "Converts a date/timestamp/string to a value of string in the format specified by the date format fmt (as of Hive 1.2.0). Supported formats are Java SimpleDateFormat formats - https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html. The second argument fmt should be constant. Example: date_format('2015-04-08', 'y') = '2015'."
  },
  day: {
    name: 'day',
    returnTypes: ['INT'],
    arguments: [[{
      type: 'STRING'
    }]],
    signature: 'day(STRING date)',
    draggable: 'day()',
    description: "Returns the day part of a date or a timestamp string: day('1970-11-01 00:00:00') = 1, day('1970-11-01') = 1."
  },
  dayofmonth: {
    name: 'dayofmonth',
    returnTypes: ['INT'],
    arguments: [[{
      type: 'STRING'
    }]],
    signature: 'dayofmonth(STRING date)',
    draggable: 'dayofmonth()',
    description: "Returns the day part of a date or a timestamp string: dayofmonth('1970-11-01 00:00:00') = 1, dayofmonth('1970-11-01') = 1."
  },
  extract: {
    name: 'extract',
    returnTypes: ['INT'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'extract(field FROM source)',
    draggable: 'extract()',
    description: 'Retrieve fields such as days or hours from source (as of Hive 2.2.0). Source must be a date, timestamp, interval or a string that can be converted into either a date or timestamp. Supported fields include: day, dayofweek, hour, minute, month, quarter, second, week and year.'
  },
  from_unixtime: {
    name: 'from_unixtime',
    returnTypes: ['BIGINT'],
    arguments: [[{
      type: 'BIGINT'
    }], [{
      type: 'STRING',
      optional: true
    }]],
    signature: 'from_unixtime(BIGINT unixtime [, STRING format])',
    draggable: 'from_unixtime()',
    description: "Converts the number of seconds from unix epoch (1970-01-01 00:00:00 UTC) to a string representing the timestamp of that moment in the current system time zone in the format of '1970-01-01 00:00:00'"
  },
  hour: {
    name: 'hour',
    returnTypes: ['INT'],
    arguments: [[{
      type: 'STRING'
    }]],
    signature: 'hour(STRING date)',
    draggable: 'hour()',
    description: "Returns the hour of the timestamp: hour('2009-07-30 12:58:59') = 12, hour('12:58:59') = 12."
  },
  minute: {
    name: 'minute',
    returnTypes: ['INT'],
    arguments: [[{
      type: 'STRING'
    }]],
    signature: 'minute(STRING date)',
    draggable: 'minute()',
    description: 'Returns the minute of the timestamp.'
  },
  month: {
    name: 'month',
    returnTypes: ['INT'],
    arguments: [[{
      type: 'STRING'
    }]],
    signature: 'month(STRING date)',
    draggable: 'month()',
    description: "Returns the month part of a date or a timestamp string: month('1970-11-01 00:00:00') = 11, month('1970-11-01') = 11."
  },
  quarter: {
    name: 'quarter',
    returnTypes: ['INT'],
    arguments: [[{
      type: 'DATE'
    }, {
      type: 'STRING'
    }, {
      type: 'TIMESTAMP'
    }]],
    signature: 'quarter(DATE|TIMESTAMP|STRING a)',
    draggable: 'quarter()',
    description: "Returns the quarter of the year for a date, timestamp, or string in the range 1 to 4. Example: quarter('2015-04-08') = 2."
  },
  second: {
    name: 'second',
    returnTypes: ['INT'],
    arguments: [[{
      type: 'STRING'
    }]],
    signature: 'second(STRING date)',
    draggable: 'second()',
    description: 'Returns the second of the timestamp.'
  },
  to_date: {
    name: 'to_date',
    returnTypes: ['T'],
    arguments: [[{
      type: 'STRING'
    }]],
    signature: 'to_date(STRING timestamp)',
    draggable: 'to_date()',
    description: "Returns the date part of a timestamp string, example to_date('1970-01-01 00:00:00'). T = pre 2.1.0: STRING 2.1.0 on: DATE"
  },
  unix_timestamp: {
    name: 'unix_timestamp',
    returnTypes: ['BIGINT'],
    arguments: [[{
      type: 'STRING',
      optional: true
    }], [{
      type: 'STRING',
      optional: true
    }]],
    signature: 'unix_timestamp([STRING date [, STRING pattern]])',
    draggable: 'unix_timestamp()',
    description: "Convert time string with given pattern to Unix time stamp (in seconds), return 0 if fail: unix_timestamp('2009-03-20', 'yyyy-MM-dd') = 1237532400."
  },
  year: {
    name: 'year',
    returnTypes: ['INT'],
    arguments: [[{
      type: 'STRING'
    }]],
    signature: 'year(STRING date)',
    draggable: 'year()',
    description: "Returns the year part of a date or a timestamp string: year('1970-01-01 00:00:00') = 1970, year('1970-01-01') = 1970"
  }
};
var GROUP_WINDOW_FUNCTIONS = {
  hop: {
    name: 'hop',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'hop(time_attr, interval, interval)',
    draggable: 'hop(time_attr, interval, interval)',
    description: 'Defines a hopping time window (called sliding window in the Table API). A hopping time window has a fixed duration (second interval parameter) and hops by a specified hop interval (first interval parameter)'
  },
  hop_start: {
    name: 'hop_start',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'hop_start(time_attr, interval, interval)',
    draggable: 'hop_start(time_attr, interval, interval)',
    description: 'Returns the timestamp of the inclusive lower bound of the corresponding hopping window.'
  },
  hop_end: {
    name: 'hop_end',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'hop_end(time_attr, interval, interval)',
    draggable: 'hop_end(time_attr, interval, interval)',
    description: 'Returns the timestamp of the inclusive upper bound of the corresponding hopping window.'
  },
  hop_rowtime: {
    name: 'hop_rowtime',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'hop_rowtime(time_attr, interval, interval)',
    draggable: 'hop_rowtime(time_attr, interval, interval)',
    description: 'Returns the timestamp of the inclusive upper bound of the corresponding hopping window.'
  },
  hop_proctime: {
    name: 'hop_proctime',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'hop_proctime(time_attr, interval, interval)',
    draggable: 'hop_proctime(time_attr, interval, interval)',
    description: 'Returns a proctime attribute that can be used in subsequent time-based operations such as interval joins and group window or over window aggregations.'
  },
  session: {
    name: 'session',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'session(time_attr, interval)',
    draggable: 'session(time_attr, interval)',
    description: 'Defines a session time window. Session time windows do not have a fixed duration but their bounds are defined by a time interval of inactivity, i.e., a session window is closed if no event appears for a defined gap period.'
  },
  session_start: {
    name: 'session_start',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'session_start(time_attr, interval)',
    draggable: 'session_start(time_attr, interval)',
    description: 'Returns the timestamp of the inclusive lower bound of the corresponding session window.'
  },
  session_end: {
    name: 'session_end',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'session_end(time_attr, interval)',
    draggable: 'session_end(time_attr, interval)',
    description: 'Returns the timestamp of the inclusive upper bound of the corresponding session window.'
  },
  session_rowtime: {
    name: 'session_rowtime',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'session_rowtime(time_attr, interval)',
    draggable: 'session_rowtime(time_attr, interval)',
    description: 'Returns the timestamp of the inclusive upper bound of the corresponding session window.'
  },
  session_proctime: {
    name: 'session_proctime',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'session_proctime(time_attr, interval)',
    draggable: 'session_proctime(time_attr, interval)',
    description: 'Returns a proctime attribute that can be used in subsequent time-based operations such as interval joins and group window or over window aggregations.'
  },
  tumble: {
    name: 'tumble',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'tumble(time_attr, interval)',
    draggable: 'tumble(time_attr, interval)',
    description: 'Defines a tumbling time window. A tumbling time window assigns rows to non-overlapping, continuous windows with a fixed duration (interval). For example, a tumbling window of 5 minutes groups rows in 5 minutes intervals. Tumbling windows can be defined on event-time (stream + batch) or processing-time (stream).'
  },
  tumble_start: {
    name: 'tumble_start',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'tumble_start(time_attr, interval)',
    draggable: 'tumble_start(time_attr, interval)',
    description: 'Returns the timestamp of the inclusive lower bound of the corresponding tumbling window.'
  },
  tumble_end: {
    name: 'tumble_end',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'tumble_end(time_attr, interval)',
    draggable: 'tumble_end(time_attr, interval)',
    description: 'Returns the timestamp of the exclusive upper bound of the corresponding tumbling window.'
  },
  tumble_rowtime: {
    name: 'tumble_rowtime',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'tumble_rowtime(time_attr, interval)',
    draggable: 'tumble_rowtime(time_attr, interval)',
    description: 'Returns the timestamp of the inclusive upper bound of the corresponding session window.'
  },
  tumble_proctime: {
    name: 'tumble_proctime',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'T'
    }]],
    signature: 'tumble_proctime(time_attr, interval)',
    draggable: 'tumble_proctime(time_attr, interval)',
    description: 'Returns a proctime attribute that can be used in subsequent time-based operations such as interval joins and group window or over window aggregations.'
  }
};
var ANALYTIC_FUNCTIONS = {
  dense_rank: {
    name: 'dense_rank',
    returnTypes: ['INT'],
    arguments: [],
    signature: 'dense_rank() OVER([partition_by_clause] order_by_clause)',
    draggable: 'dense_rank() OVER()',
    description: 'Returns the rank of a value in a group of values. The result is one plus the previously assigned rank value. Unlike the function rank, dense_rank will not produce gaps in the ranking sequence.'
  },
  rank: {
    name: 'rank',
    returnTypes: ['INT'],
    arguments: [],
    signature: 'rank() OVER([partition_by_clause] order_by_clause)',
    draggable: 'rank() OVER()',
    description: 'Returns the rank of a value in a group of values. The result is one plus the number of rows preceding or equal to the current row in the ordering of the partition. The values will produce gaps in the sequence.'
  },
  row_number: {
    name: 'row_number',
    returnTypes: ['INT'],
    arguments: [],
    signature: 'row_number() OVER([partition_by_clause] order_by_clause)',
    draggable: 'row_number() OVER()',
    description: 'Returns an ascending sequence of integers, starting with 1. Starts the sequence over for each group produced by the PARTITIONED BY clause. The output sequence includes different values for duplicate input values. Therefore, the sequence never contains any duplicates or gaps, regardless of duplicate input values.'
  },
  lead: {
    name: 'lead',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'INT',
      optional: true
    }], [{
      type: 'T',
      optional: true
    }]],
    signature: 'lead(expr [, offset] [, default]) OVER([partition_by_clause] order_by_clause)',
    draggable: 'lead() OVER()',
    description: 'This function returns the value of an expression using column values from a following row. You specify an integer offset, which designates a row position some number of rows after to the current row. Any column references in the expression argument refer to column values from that later row.'
  },
  lag: {
    name: 'lag',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }], [{
      type: 'INT',
      optional: true
    }], [{
      type: 'T',
      optional: true
    }]],
    signature: 'lag(expr [, offset] [, default]) OVER ([partition_by_clause] order_by_clause)',
    draggable: 'lag() OVER()',
    description: 'This function returns the value of an expression using column values from a preceding row. You specify an integer offset, which designates a row position some number of rows previous to the current row. Any column references in the expression argument refer to column values from that prior row.'
  },
  first_value: {
    name: 'first_value',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'first_value(expr) OVER([partition_by_clause] order_by_clause [window_clause])',
    draggable: 'first_value() OVER()',
    description: 'Returns the expression value from the first row in the window. The return value is NULL if the input expression is NULL.'
  },
  last_value: {
    name: 'last_value',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'last_value(expr) OVER([partition_by_clause] order_by_clause [window_clause])',
    draggable: 'last_value() OVER()',
    description: 'Returns the expression value from the last row in the window. The return value is NULL if the input expression is NULL.'
  },
  listagg: {
    name: 'listagg',
    returnTypes: ['T'],
    arguments: [[{
      type: 'T'
    }]],
    signature: 'listagg(expression [, separator])',
    draggable: 'listagg(expression [, separator])',
    description: 'Concatenates the values of string expressions and places separator values between them. The separator is not added at the end of string. The default value of separator is ,'
  }
};
var UDF_CATEGORIES = [{
  name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Aggregate'),
  isAggregate: true,
  functions: AGGREGATE_FUNCTIONS
}, {
  name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Analytic'),
  isAnalytic: true,
  functions: ANALYTIC_FUNCTIONS
}, {
  name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Date'),
  functions: DATE_FUNCTIONS
}, {
  name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('Group Window Functions'),
  functions: GROUP_WINDOW_FUNCTIONS
}, {
  name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])('String'),
  functions: STRING_FUNCTIONS
}];

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/flink-ref-chunk-a2a4f8506cb55bb7.js.map