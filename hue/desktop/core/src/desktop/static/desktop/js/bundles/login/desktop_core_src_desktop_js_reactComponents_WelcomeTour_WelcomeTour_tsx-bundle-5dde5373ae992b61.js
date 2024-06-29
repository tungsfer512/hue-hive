/*! For license information please see desktop_core_src_desktop_js_reactComponents_WelcomeTour_WelcomeTour_tsx-bundle-5dde5373ae992b61.js.LICENSE.txt */
"use strict";(self.webpackChunkgethue=self.webpackChunkgethue||[]).push([["desktop_core_src_desktop_js_reactComponents_WelcomeTour_WelcomeTour_tsx"],{"./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.tsx":(e,n,o)=>{o.r(n),o.d(n,{WelcomeTour:()=>T,default:()=>k});var t=o("./node_modules/react/index.js"),s=o.n(t),r=o("./node_modules/react-joyride/dist/index.mjs"),i=o("./desktop/core/src/desktop/js/utils/i18n.js"),a=o("./desktop/core/src/desktop/js/reactComponents/useHuePubSub.ts"),d=(o("./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.scss"),o("./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.module.scss"));function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var t,s,r,i,a=[],d=!0,l=!1;try{if(r=(o=o.call(e)).next,0===n){if(Object(o)!==o)return;d=!1}else for(;!(d=(t=r.call(o)).done)&&(a.push(t.value),a.length!==n);d=!0);}catch(e){l=!0,s=e}finally{try{if(!d&&null!=o.return&&(i=o.return(),Object(i)!==i))return}finally{if(l)throw s}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return c(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=e[o];return t}var u=d.default.backButtonBorder,p=d.default.borderRadius,m=d.default.buttonFontSize,h=d.default.buttonLineHeight,b=d.default.buttonPadding,g=d.default.overlayColor,f=d.default.primaryColor,w=d.default.tourZIndex,x=function(e,n){return s().createElement(s().Fragment,null,e&&s().createElement("h3",null,e),n&&s().createElement("p",null,n))},y=[{content:x((0,i.default)("Welcome to Hue 4!"),(0,i.default)("We want to introduce you to the new interface. It takes less than a minute. Ready?")),target:"body",disableBeacon:!0,placement:"center"},{content:x((0,i.default)("A new top bar!"),(0,i.default)("Do global search and view status of jobs and notifications on the right.")),target:".navbar-default",disableBeacon:!0,placement:"bottom"},{content:x((0,i.default)("Sidebar for navigation"),(0,i.default)("Open apps and browsers, get help and manage your user profile.")),target:".sidebar",disableBeacon:!0,placement:"right"},{content:x((0,i.default)("Left Assist Panel"),(0,i.default)("Discover data sources with the improved data assist panel. Remember to right-click items for more!")),target:".left-panel",disableBeacon:!0,placement:"right"},{content:x(void 0,"".concat((0,i.default)("This is the main attraction, where your selected app runs."),"\n").concat((0,i.default)("Hover on the app name to star it as your favorite application."))),target:".page-content",disableBeacon:!0,placement:"bottom",styles:{tooltip:{marginTop:"100px"}}},{content:x((0,i.default)("Right Assist Panel"),(0,i.default)("Some apps have a right panel with additional information to assist you in your data discovery.")),target:".right-panel",disableBeacon:!0,placement:"left"},{content:s().createElement(s().Fragment,null,s().createElement("p",null,(0,i.default)("This ends the tour. To see it again, click Welcome Tour from the help section in the sidebar.")),s().createElement("p",null,(0,i.default)("And now go "),s().createElement("b",null,(0,i.default)("Query, Explore, Repeat")),"!")),target:"body",disableBeacon:!0,placement:"center"}];window.USER_IS_ADMIN&&y.splice(3,0,{content:x((0,i.default)("Administration"),(0,i.default)("As a superuser, you can check system configuration from the user menu and install sample data and jobs for your users.")),target:".server-position-pointer-welcome-tour",disableBeacon:!0,placement:"right-end"});var I={options:{overlayColor:g,primaryColor:f,zIndex:parseInt(w)||1},buttonBack:{border:u,borderRadius:p,fontSize:m,lineHeight:h,padding:b},buttonNext:{borderRadius:p,fontSize:m,lineHeight:h,padding:b},tooltip:{borderRadius:p},spotlight:{borderRadius:0}},T=function(){var e=l((0,t.useState)(!1),2),n=e[0],o=e[1],d=l((0,t.useState)(),2),c=d[0],u=d[1];return(0,a.useHuePubSub)({topic:"show.welcome.tour",callback:function(){o(!0)}}),s().createElement(r.default,{steps:y,run:n,disableScrolling:!0,continuous:!0,spotlightPadding:0,callback:function(e){var n=e.action;"close"!==n&&"reset"!==n||(o(!1),c&&c.reset(!1))},getHelpers:u,locale:{back:(0,i.default)("Back"),close:(0,i.default)("Close"),last:(0,i.default)("Close"),next:(0,i.default)("Next")},styles:I})};const k=T},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.module.scss":(e,n,o)=>{o.r(n),o.d(n,{default:()=>r});var t=o("./node_modules/css-loader/dist/runtime/api.js"),s=o.n(t)()((function(e){return e[1]}));s.push([e.id,'/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n "License"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n "License"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.cYlHrfIyCR41NwCdEhsdMQ\\=\\= {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n\n.wdUYqH1U34e9XsZu7ZLeUA\\=\\= {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.gPKDIb9FMT5i0ubkmPK9mw\\=\\= {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n._5jnBq0Jm-Ir6nAtUL0\\+D5w\\=\\= {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n\n._31dYYlTVfTSCnK02iY7oJg\\=\\= {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.iH\\+Wijxnp5JpoIghv6L0Zg\\=\\= {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n\n._8u8\\+kbAETveTdVljrWIiXA\\=\\= {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n\n.judH21Z2GyvkddwmqgVl4A\\=\\= {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n@-webkit-keyframes _82OdwuptZfBxBdomxyQ24A\\=\\= {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes _82OdwuptZfBxBdomxyQ24A\\=\\= {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-ms-keyframes _82OdwuptZfBxBdomxyQ24A\\=\\= {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes _82OdwuptZfBxBdomxyQ24A\\=\\= {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _82OdwuptZfBxBdomxyQ24A\\=\\= {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n "License"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/* stylelint-disable */\n\n/* stylelint-enable */',""]),s.locals={primaryColor:"#0b7fad",overlayColor:"rgba(0, 0, 0, 0.2)",tourZIndex:"2000",borderRadius:"3px",buttonFontSize:"14px",buttonPadding:"6px 12px",buttonLineHeight:"20px",backButtonBorder:"1px solid #d6d8db","hue-box":"cYlHrfIyCR41NwCdEhsdMQ==","no-select":"wdUYqH1U34e9XsZu7ZLeUA==","box-shadow-top":"gPKDIb9FMT5i0ubkmPK9mw==","box-shadow-right":"_5jnBq0Jm-Ir6nAtUL0+D5w==","box-shadow-bottom":"_31dYYlTVfTSCnK02iY7oJg==","box-shadow-left":"iH+Wijxnp5JpoIghv6L0Zg==","inset-box-shadow":"_8u8+kbAETveTdVljrWIiXA==","no-box-shadow":"judH21Z2GyvkddwmqgVl4A==","fade-in-frames":"_82OdwuptZfBxBdomxyQ24A=="};const r=s},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.scss":(e,n,o)=>{o.r(n),o.d(n,{default:()=>r});var t=o("./node_modules/css-loader/dist/runtime/api.js"),s=o.n(t)()((function(e){return e[1]}));s.push([e.id,'/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n "License"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n "License"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/*\n\n  TODO: Replace with CUI equivalents where possible\n\n*/\n.hue-box {\n  padding: 10px;\n  overflow: hidden;\n  border: 1px solid #d6d8db;\n  border-radius: 3px;\n}\n\n.no-select {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.box-shadow-top {\n  -webkit-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-right {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-bottom {\n  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.18);\n}\n\n.box-shadow-left {\n  -webkit-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.18);\n}\n\n.inset-box-shadow {\n  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125) !important;\n}\n\n.no-box-shadow {\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n@-webkit-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-ms-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-in-frames {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*\n Licensed to Cloudera, Inc. under one\n or more contributor license agreements.  See the NOTICE file\n distributed with this work for additional information\n regarding copyright ownership.  Cloudera, Inc. licenses this file\n to you under the Apache License, Version 2.0 (the\n "License"); you may not use this file except in compliance\n with the License.  You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n*/\n/* Copyright (c) 2023 Cloudera, Inc. All rights reserved. */\n/* NOTE: THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. */\n/* ----------------- */\n/* From: color-tokens.json */\n/* Base color palette */\n/* ----------------- */\n/* ----------------- */\n/* From: iconography-tokens.json */\n/* ----------------- */\n/** For standalone icons used as interactive elements and next to normal sized text. */\n/** For use in small size buttons. */\n/** For use in medium (default) size buttons. */\n/** For use in large size buttons. */\n/* ----------------- */\n/* From: product-color-tokens.json */\n/* Product primary color e.g. used for sidebar etc. */\n/* ----------------- */\n/* ----------------- */\n/* From: spacing-tokens.json */\n/* ----------------- */\n/* ----------------- */\n/* From: typography-tokens.json */\n/* ----------------- */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n/** For Modal Dialogs and Title Bars */\n.react-joyride__tooltip h3 {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 300;\n}',""]);const r=s},"./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.module.scss":(e,n,o)=>{o.r(n),o.d(n,{default:()=>i});var t=o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=o.n(t),r=o("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.module.scss");s()(r.default,{insert:"head",singleton:!1});const i=r.default.locals||{}},"./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.scss":(e,n,o)=>{o.r(n),o.d(n,{default:()=>i});var t=o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=o.n(t),r=o("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./desktop/core/src/desktop/js/reactComponents/WelcomeTour/WelcomeTour.scss");s()(r.default,{insert:"head",singleton:!1});const i=r.default.locals||{}}}]);