/*! For license information please see desktop_core_src_desktop_js_reactComponents_AlertComponent_AlertComponent_tsx-bundle-5dde5373ae992b61.js.LICENSE.txt */
"use strict";(self.webpackChunkgethue=self.webpackChunkgethue||[]).push([["desktop_core_src_desktop_js_reactComponents_AlertComponent_AlertComponent_tsx"],{"./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.tsx":(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});var r=t("./node_modules/react/index.js"),o=t.n(r),s=t("./node_modules/cuix/dist/components/Alert/Alert.js"),a=(t("./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.scss"),t("./desktop/core/src/desktop/js/reactComponents/AlertComponent/events.ts")),i=t("./desktop/core/src/desktop/js/reactComponents/useHuePubSub.ts"),l=t("./desktop/core/src/desktop/js/utils/i18nReact.ts");function u(e,n){if(e){if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var d=function(e){e.timeoutHandle&&clearTimeout(e.timeoutHandle)};const p=function(){var e,n,t=(e=(0,r.useState)([]),n=2,function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,s,a,i=[],l=!0,u=!1;try{if(s=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=s.call(t)).done)&&(i.push(r.value),i.length!==n);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw o}}return i}}(e,n)||u(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=t[0],f=t[1],m=function(e,n){e.message&&f((function(t){if(t.some((function(n){return n.alert.message===e.message})))return t;var r={alert:e,type:n};return("info"===n||e.noStick)&&(r.timeoutHandle=setTimeout((function(){h(r)}),3e3)),[].concat(function(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t),[r])}))};(0,i.useHuePubSub)({topic:a.GLOBAL_ERROR_TOPIC,callback:function(e){return m(e,"error")}}),(0,i.useHuePubSub)({topic:a.GLOBAL_INFO_TOPIC,callback:function(e){return m(e,"info")}}),(0,i.useHuePubSub)({topic:a.GLOBAL_WARNING_TOPIC,callback:function(e){return m(e,"warning")}}),(0,i.useHuePubSub)({topic:a.HIDE_GLOBAL_ALERTS_TOPIC,callback:function(){p.forEach((function(e){return d(e)})),f([])}});var h=function(e){var n=p.filter((function(n){return n!==e}));d(e),f(n)},b=l.i18nReact.useTranslation().t;return o().createElement("div",{className:"hue-alert flash-messages cuix antd"},p.map((function(e){return o().createElement(s.default,{key:e.alert.message,type:e.type,message:(n=e,"error"===n.type?b("Error"):"info"===n.type?b("Info"):"warning"===n.type?b("Warning"):void 0),description:e.alert.message,showIcon:!0,closable:!0,onClose:function(){return h(e)}});var n})))}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.scss":(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t("./node_modules/css-loader/dist/runtime/api.js"),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,'/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n "License"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n.hue-alert {\n  position: fixed;\n  width: 30%;\n  z-index: 9999;\n  top: 7px;\n  right: 0;\n  margin-right: 24px;\n  display: flex;\n  flex-flow: column;\n  row-gap: 10px;\n}\n.hue-alert .ant-alert {\n  padding-right: 12px;\n}\n.hue-alert .ant-alert .ant-alert-description {\n  display: inline;\n}\n.hue-alert button:hover,\n.hue-alert button:focus {\n  background-color: unset;\n}\n.hue-alert button span {\n  font-size: 12px;\n}\n.hue-alert button svg.cdp-icon-close {\n  height: 16px;\n}\n.hue-alert .hue-alert--warning {\n  color: #3d1300;\n  background: #fff3e5;\n  border: 1px solid #f96702;\n}\n.hue-alert .hue-alert--warning button {\n  color: #0a5f0a;\n}\n.hue-alert .hue-alert--success {\n  color: #023c02;\n  background: #e5ffe5;\n  border: 1px solid #2fae2f;\n}\n.hue-alert .hue-alert--success button {\n  color: #0a5f0a;\n}\n.hue-alert .hue-alert--error {\n  color: #3d1300;\n  background: #ffecec;\n  border: 1px solid #fe3f3f;\n  display: flex;\n  align-items: flex-start;\n}\n.hue-alert .hue-alert--error button {\n  color: #6e0707;\n  position: absolute;\n  top: 0.5rem;\n  right: 3%;\n}\n.hue-alert .hue-alert--message {\n  margin-right: 1rem;\n}',""]);const s=o},"./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.scss":(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var r=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=t.n(r),s=t("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/AlertComponent/AlertComponent.scss");o()(s.default,{insert:"head",singleton:!1});const a=s.default.locals||{}}}]);