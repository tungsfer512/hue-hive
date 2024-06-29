/*! For license information please see desktop_core_src_desktop_js_reactComponents_AppBanner_AppBanner_tsx-bundle-5dde5373ae992b61.js.LICENSE.txt */
(self.webpackChunkgethue=self.webpackChunkgethue||[]).push([["desktop_core_src_desktop_js_reactComponents_AppBanner_AppBanner_tsx"],{"./desktop/core/src/desktop/js/reactComponents/AppBanner/AppBanner.tsx":(e,n,t)=>{"use strict";t.r(n),t.d(n,{AppBanner:()=>g,default:()=>y});var o=t("./node_modules/react/index.js"),r=t.n(o),s=t("./node_modules/sanitize-html/index.js"),i=t.n(s),a=(t("./desktop/core/src/desktop/js/reactComponents/AppBanner/AppBanner.scss"),t("./desktop/core/src/desktop/js/api/urls.js")),d=t("./desktop/core/src/desktop/js/api/utils.ts"),c=t("./desktop/core/src/desktop/js/utils/html/deXSS.ts"),l=t("./desktop/core/src/desktop/js/utils/timing/noop.ts");function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}var b=[/^#(0x)?[0-9a-f]+$/i,/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],f=[/^[\d.]+(?:px|pt|em|%|rem|vw)$/i],h={allowedAttributes:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){var o,r,s,i;o=e,r=n,s=t[n],i=function(e,n){if("object"!=p(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!=p(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==p(i)?i:i+"")in o?Object.defineProperty(o,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[r]=s})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({"*":["style"]},i().defaults.allowedAttributes),allowedStyles:{"*":{background:b,"background-color":b,color:b,direction:[/^ltr|rtl$/i],"font-size":f,height:f,padding:f,"padding-bottom":f,"padding-left":f,"padding-right":f,"padding-top":f,"text-align":[/^left|right|center$/i],width:f}}},g=function(){var e,n,t=(e=(0,o.useState)(),n=2,function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,r,s,i,a=[],d=!0,c=!1;try{if(s=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;d=!1}else for(;!(d=(o=s.call(t)).done)&&(a.push(o.value),a.length!==n);d=!0);}catch(e){c=!0,r=e}finally{try{if(!d&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw r}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=t[0],i=t[1];return(0,o.useEffect)((function(){s||(0,d.get)(a.BANNERS_API).then(i).catch(l.default)})),s&&(s.system?r().createElement("div",{className:"app-banner app-banner--system",dangerouslySetInnerHTML:{__html:s.system}}):r().createElement("div",{className:"app-banner",dangerouslySetInnerHTML:{__html:(0,c.default)(s.configured,h)}}))};const y=g},"./desktop/core/src/desktop/js/utils/html/deXSS.ts":(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var o=t("./node_modules/sanitize-html/index.js"),r=t.n(o);const s=function(e,n){return null===e?"null":void 0!==e&&r()(e,n)||""}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/AppBanner/AppBanner.scss":(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var o=t("./node_modules/css-loader/dist/runtime/api.js"),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,'/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n "License"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n "License"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n "License"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n\n.no-select {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.box-shadow-top {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-right {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-bottom {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-left {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.inset-box-shadow {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n\n.no-box-shadow {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n@-webkit-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-ms-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.app-banner {\n  -ms-flex: 0 0 auto;\n  -webkit-flex: 0 0 auto;\n  flex: 0 0 auto;\n}\n\n.app-banner--system {\n  padding: 4px;\n  text-align: center;\n  background-color: #004379;\n  color: #edf7ff;\n}',""]);const s=r},"./desktop/core/src/desktop/js/reactComponents/AppBanner/AppBanner.scss":(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var o=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(o),s=t("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/AppBanner/AppBanner.scss");r()(s.default,{insert:"head",singleton:!1});const i=s.default.locals||{}},"?fe98":()=>{},"?2f81":()=>{},"?25fb":()=>{},"?6f78":()=>{},"?9214":()=>{}}]);